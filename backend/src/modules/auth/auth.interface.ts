import { Email, User } from "prisma/generated";

export interface JwtPayload {
	sub: string;
	email: string;
}

// Type cho kết quả trả về từ findUserByEmail
export type FindUserResult = User | User[] | null;

// Type cho user không có password
export interface UserWithoutPassword extends Omit<User, "hashedPassword"> {}

// Type cho user với primary email và không có password
export interface UserWithPrimaryEmailAndWithoutPassword extends UserWithoutPassword {
	primaryEmail: Email;
}

// Type cho response của auth operations
export interface AuthResponse<T = any> {
	message: string;
	data?: T;
}

// Type cho session data
export interface SessionData {
	id: string;
	userId: string;
	ipAddress: string;
	userAgent: string;
	deviceName: string;
	refreshTokenHashed?: string | null;
	revoked?: boolean;
	createdAt: Date;
	updatedAt: Date;
}

// Type cho tokens
export interface Tokens {
	accessToken: string;
	refreshToken: string;
}

// Type cho login response
export interface LoginResponse {
	message: string;
	data: UserWithoutPassword;
}

// Type cho register response
export interface RegisterResponse {
	message: string;
	data: User;
}

// Type cho change password response
export interface ChangePasswordResponse {
	message: string;
	data: UserWithoutPassword;
}

// Type cho recovery response
export interface RecoveryResponse {
	message: string;
}

// Type cho logout response
export interface LogoutResponse {
	message: string;
}

// Type cho device detection
export interface DeviceInfo {
	ip: string;
	userAgent: string;
	deviceName: string;
}

// Type cho email verification
export interface EmailVerification {
	email: string;
	code: string;
	userId: string;
}
