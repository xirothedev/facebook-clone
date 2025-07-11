import { AuthService } from "@/modules/auth/auth.service";
import { type CanActivate, type ExecutionContext, Injectable } from "@nestjs/common";
import { WsException } from "@nestjs/websockets";
import type { Socket } from "socket.io";

@Injectable()
export class WsAuthGuard implements CanActivate {
	constructor(private readonly authService: AuthService) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		try {
			const client: Socket = context.switchToWs().getClient();
			const token = this.extractTokenFromHeader(client);

			if (!token) {
				throw new WsException("Access token not found");
			}

			const user = await this.authService.validate(token);

			if (!user || user.status !== "ACTIVE") {
				throw new WsException("User not found or inactive");
			}

			// Attach user to socket for later use
			client.data.user = user;

			return true;
		} catch {
			throw new WsException("Unauthorized");
		}
	}

	private extractTokenFromHeader(client: Socket): string | undefined {
		// Try to get token from handshake auth
		if (client.handshake.auth?.token) {
			return client.handshake.auth.token;
		}

		// Try to get token from query parameters
		if (client.handshake.query?.token) {
			return client.handshake.query.token as string;
		}

		// Try to get token from headers
		const authHeader = client.handshake.headers.authorization;
		if (authHeader && authHeader.startsWith("Bearer ")) {
			return authHeader.substring(7);
		}

		// Try to get token from cookies
		const cookies = client.handshake.headers.cookie;
		if (cookies) {
			const cookiePairs = cookies.split(";");
			for (const pair of cookiePairs) {
				const [name, value] = pair.trim().split("=");
				if (name === "access_token" && value) {
					return decodeURIComponent(value);
				}
			}
		}

		return undefined;
	}
}
