import { Injectable } from "@nestjs/common";
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as nodemailer from 'nodemailer';
import * as path from 'path';

// load evn
dotenv.config()
@Injectable()
export class EmailService{
    private transporter

    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        })
    }

    async sendVerificationRegisterEmail(toEmail: string, token: string){
          try {
            const filePath = path.join(__dirname, 'templates', 'sendEmailVerified.html');
            
            if (!fs.existsSync(filePath)) {
                throw new Error(`Template file không tìm thấy: ${filePath}`);
            }

            const source = fs.readFileSync(filePath, 'utf-8');
            const subject = "Verify your account - Thaiandev Service";

            const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
            const verifyLink = `${baseUrl}/auth/verifiedAccount?email=${encodeURIComponent(toEmail)}&token=${encodeURIComponent(token)}`;
            
            const verificationCode = token.substring(0, 6).toUpperCase();
            
            const displayName = toEmail.split('@')[0];

            // Thay thế các biến trong template
            const html = source
                .replace(/{{VERIFICATION_LINK}}/g, verifyLink)
                .replace(/{{USER_EMAIL}}/g, toEmail)
                .replace(/{{USER_NAME}}/g, displayName)
                .replace(/{{VERIFICATION_CODE}}/g, verificationCode)
                .replace(/{{CURRENT_YEAR}}/g, new Date().getFullYear().toString())
                .replace(/{{COMPANY_NAME}}/g, 'Thaiandev Service')
                .replace(/{{SUPPORT_EMAIL}}/g, process.env.EMAIL_USER || '');

            const mailOptions = {
                from: `"Thaiandev Service" <${process.env.EMAIL_USER}>`,
                to: toEmail,
                subject,
                html,
                // Thêm text version cho các email client không hỗ trợ HTML
                text: `Xin chào ${displayName}, vui lòng xác thực tài khoản bằng cách click vào link: ${verifyLink}`
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
            throw new Error(`Không thể gửi email xác thực: ${error.message}`);
        }
    }
}