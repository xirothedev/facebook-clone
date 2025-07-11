import { Injectable, ForbiddenException } from "@nestjs/common";
import { RedisService } from "@/redis/redis.service";

@Injectable()
export class LoginAttemptService {
	private readonly MAX_ATTEMPTS = 5;
	private readonly ATTEMPT_WINDOW = 5 * 60; // 5p
	private readonly LOCK_DURATION = 15 * 60; // 15p

	constructor(private readonly redisService: RedisService) {}

	private getAttemptKey(email: string): string {
		return `login:attempts:${email}`;
	}

	private getLockKey(email: string): string {
		return `login:lock:${email}`;
	}

	async isLocked(email: string): Promise<boolean> {
		const locked = await this.redisService.get(this.getLockKey(email));
		return !!locked;
	}

	async registerFailedAttempt(email: string): Promise<void> {
		const key = this.getAttemptKey(email);
		const redis = this.redisService.getClient();

		const current = await redis.incr(key);
		if (current === 1) {
			await redis.expire(key, this.ATTEMPT_WINDOW);
		}

		if (current >= this.MAX_ATTEMPTS) {
			await this.redisService.set(this.getLockKey(email), "locked", this.LOCK_DURATION);
			throw new ForbiddenException("Your account has been locked by exceed limited times to login");
		}
	}

	async resetAttempts(email: string): Promise<void> {
		const redis = this.redisService.getClient();
		await redis.del(this.getAttemptKey(email));
		await redis.del(this.getLockKey(email));
	}
}
