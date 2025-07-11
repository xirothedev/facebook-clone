import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { existsSync } from "fs";
import { readFile } from "fs/promises";
import * as nodemailer from "nodemailer";
import { join } from "path";

@Injectable()
export class EmailService {
	private transporter: nodemailer.Transporter;

	constructor(config: ConfigService) {
		this.transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: config.getOrThrow<string>("EMAIL_USER"),
				pass: config.getOrThrow<string>("EMAIL_PASS"),
			},
		});
	}

	async getTemplate(htmlName: string) {
		const filePath = join(__dirname, "templates", `${htmlName}.html`);

		if (!existsSync(filePath)) {
			throw new Error(`Template not found: ${filePath}`);
		}

		// promise cho stable
		const source = await readFile(filePath, "utf-8");

		return source;
	}

	async sendVerificationRegisterEmail(toEmail: string, token: string) {
		const source = await this.getTemplate("sendEmailVerifying");
		const subject = "Verify your account - Facebook Service";

		const baseUrl = process.env.BASE_URL || "http://localhost:4000";
		const verifyLink = `${baseUrl}/auth/verifying-account?email=${encodeURIComponent(toEmail)}&token=${encodeURIComponent(token)}`;

		const verificationCode = token.substring(0, 6).toUpperCase();

		const displayName = toEmail.split("@")[0];

		// Thay thế các biến trong template
		const html = source
			.replace(/{{VERIFICATION_LINK}}/g, verifyLink)
			.replace(/{{USER_EMAIL}}/g, toEmail)
			.replace(/{{USER_NAME}}/g, displayName)
			.replace(/{{VERIFICATION_CODE}}/g, verificationCode)
			.replace(/{{CURRENT_YEAR}}/g, new Date().getFullYear().toString())
			.replace(/{{COMPANY_NAME}}/g, "Facebook Service")
			.replace(/{{SUPPORT_EMAIL}}/g, process.env.EMAIL_USER || "");

		const mailOptions = {
			from: `"Facebook Accounts <${process.env.EMAIL_USER}>`,
			to: toEmail,
			subject,
			html,
			// Thêm text version cho các email client không hỗ trợ HTML
			text: `Hello ${displayName}, please complete register your accounts via using this link: ${verifyLink}`,
		};

		const info = await this.transporter.sendMail(mailOptions);

		console.log("Email sent: ", info.response);
		console.log("Verification link:", verifyLink);
		console.log("Sent to:", toEmail);
	}

	async sendResetPasswordAccount(toEmail: string, token: string) {
		const source = await this.getTemplate("sendResetPasswordAfterRegisterAvailableAccount");
		const subject = "Reset your account - Facebook Service";

		const verificationCode = token.substring(0, 6).toUpperCase();
		// const displayName = toEmail.split('@')[0];

		const html = source.replace(/{{CODE_HERE}}/g, verificationCode);

		const mailOptions = {
			from: `"Facebook Accounts <${process.env.EMAIL_USER}>`,
			to: toEmail,
			subject,
			html,
		};

		await this.transporter.sendMail(mailOptions);
	}

	async sendNotificationResetPassword(toEmail: string) {
		const source = await this.getTemplate("notificationResetPassword");
		const subject = "Did you just change your password?";

		const linkCallbackAccount = "";

		const html = source.replace(/{{Link_here}}/g, linkCallbackAccount);

		const mailOptions = {
			from: `"Facebook Accounts <${process.env.EMAIL_USER}>`,
			to: toEmail,
			subject,
			html,
		};

		await this.transporter.sendMail(mailOptions);
	}

	async sendDetectOtherDevice(toEmail: string, ip: string, userAgent: string, deviceName: string) {
		const source = await this.getTemplate("detectOtherDevice");
		const subject = "Activity your account recently";
		const linkCallback = "";

		const html = source
			.replace(/{{SECURITY_LINK}}/g, linkCallback)
			.replace(/{{OPERATING_SYSTEM}}g/, deviceName)
			.replace(/{{IP_ADDRESS}}g/, ip)
			.replace(/{{BROWSER}}g/, userAgent);

		const mailOptions = {
			from: `"Facebook Accounts <${process.env.EMAIL_USER}>`,
			to: toEmail,
			subject,
			html,
		};

		await this.transporter.sendMail(mailOptions);
	}

	async sendNotificationDisableAccount(toEmail: string) {
		const source = await this.getTemplate("notificationDisableAccount");
		const subject = "Disable Account";

		const mailOptions = {
			to: toEmail,
			subject,
			source,
		};

		await this.transporter.sendMail(mailOptions);
	}
}
