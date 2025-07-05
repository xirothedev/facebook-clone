import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { existsSync, readFileSync } from 'fs';
import * as nodemailer from 'nodemailer';
import { join } from 'path';

@Injectable()
export class EmailService {
    private transporter: nodemailer.Transporter

    constructor(private config: ConfigService) {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: config.getOrThrow<string>("EMAIL_USER"),
                pass: config.getOrThrow<string>("EMAIL_PASS")
            }
        })
    }

    async sendVerificationRegisterEmail(toEmail: string, token: string) {
        try {
            const filePath = join(__dirname, 'templates', 'sendEmailVerifying.html');

            if (!existsSync(filePath)) {
                throw new Error(`Template not found: ${filePath}`);
            }

            const source = readFileSync(filePath, 'utf-8');
            const subject = "Verify your account - Facebook Service";

            const baseUrl = process.env.BASE_URL || 'http://localhost:4000';
            const verifyLink = `${baseUrl}/auth/verifying-account?email=${encodeURIComponent(toEmail)}&token=${encodeURIComponent(token)}`;

            const verificationCode = token.substring(0, 6).toUpperCase();

            const displayName = toEmail.split('@')[0];

            // Thay thế các biến trong template
            const html = source
                .replace(/{{VERIFICATION_LINK}}/g, verifyLink)
                .replace(/{{USER_EMAIL}}/g, toEmail)
                .replace(/{{USER_NAME}}/g, displayName)
                .replace(/{{VERIFICATION_CODE}}/g, verificationCode)
                .replace(/{{CURRENT_YEAR}}/g, new Date().getFullYear().toString())
                .replace(/{{COMPANY_NAME}}/g, 'Facebook Service')
                .replace(/{{SUPPORT_EMAIL}}/g, process.env.EMAIL_USER || '');

            const mailOptions = {
                from: `"Facebook Accounts <${process.env.EMAIL_USER}>`,
                to: toEmail,
                subject,
                html,
                // Thêm text version cho các email client không hỗ trợ HTML
                text: `Hello ${displayName}, please complete register your accounts via using this link: ${verifyLink}`
            };

            const info = await this.transporter.sendMail(mailOptions);

            console.log('Email sent: ', info.response);
            console.log('Verification link:', verifyLink);
            console.log('Sent to:', toEmail);

            return {
                success: true,
                messageId: info.messageId,
                verificationLink: verifyLink
            };

        } catch (error) {
            console.error('Error sending email:', error);
            throw new Error(`Cannot send this email: ${error.message}`);
        }
    }

    async sendResetPasswordAccount(toEmail: string, token: string) {
        try {

            const filePath = join(__dirname, 'templates', 'sendResetPasswordAfterRegisterAvailableAccount.html');

            if (!existsSync(filePath)) {
                throw new Error(`Template not found: ${filePath}`);
            }

            const source = readFileSync(filePath, 'utf-8');
            const subject = "Reset your account - Facebook Service";

            const verificationCode = token.substring(0, 6).toUpperCase();
            // const displayName = toEmail.split('@')[0];

            const html = source.replace(/{{CODE_HERE}}/g, verificationCode)

            const mailOptions = {
                from: `"Facebook Accounts <${process.env.EMAIL_USER}>`,
                to: toEmail,
                subject,
                html
            };

            const info = await this.transporter.sendMail(mailOptions);

            return {
                success: true,
                messageId: info.messageId
            }

        } catch (error) {
            console.error('Error sending email:', error);
            throw new Error(`Cannot send this email: ${error.message}`);
        }
    }

    async sendNotificationResetPassword(toEmail: string) {
        try {
            const filePath = join(__dirname, 'templates', 'notificationResetPassword.html')

            if (!existsSync(filePath)) {
                throw new Error(`Template not found: ${filePath}`)
            }

            const source = readFileSync(filePath, 'utf8')
            const subject = "Did you just change your password?"

            const linkCallbackAccount = ''

            const html = source.replace(/{{Link_here}}/g, linkCallbackAccount)

            const mailOptions = {
                from: `"Facebook Accounts <${process.env.EMAIL_USER}>`,
                to: toEmail,
                subject,
                html
            }

            const info = await this.transporter.sendMail(mailOptions)

            return {
                success: true,
                messageId: info.messageId
            }
        } catch (error) {
            console.error("Error sending email:", error)
            throw new Error(`Cannot send this email ${error.message}`)
        }
    }

    async sendDetectOtherDevice(toEmail: string, ip: string, userAgent: string, deviceName: string) {
        try {
            const filePath = join(__dirname, 'templates', 'detectOtherDevice.html')

            if (!existsSync(filePath)) {
                throw new Error(`Template not found : ${filePath}`)

                const source = readFileSync(filePath, 'utf-8')
                const subject = "Activity your account recently"
                const linkCallback = ''

                const html = source.replace(/{{SECURITY_LINK}}/g, linkCallback)
                                   .replace(/{{OPERATING_SYSTEM}}g/,deviceName)
                                   .replace(/{{IP_ADDRESS}}g/,ip)
                                   .replace(/{{BROWSER}}g/,userAgent)
                                   
                const mailOptions = {
                    from: `"Facebook Accounts <${process.env.EMAIL_USER}>`,
                    to: toEmail,
                    subject,
                    html
                }

                const info = await this.transporter.sendMail(mailOptions)
                return {
                    success: true,
                    messageId: info.messageId
                }
            }

        } catch (error) {
            console.error("Error sending email:", error)
            throw new Error(`Cannot send this email ${error.message}`)
        }
    }
}