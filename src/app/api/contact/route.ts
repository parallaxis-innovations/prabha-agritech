import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, inquiry, message } = body;

        if (!name || !email || !phone || !message) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_APP_PASSWORD // Use App Password generated from Google Account
            }
        });

        // Verify SMTP connection first for clear error logs
        await transporter.verify();

        const mailOptions = {
            from: `"Prabha Agrotech" <${process.env.SMTP_USER || process.env.SMTP_FROM_EMAIL}>`,
            to: 'prabhaagritech2+websiteinquiry@gmail.com',
            subject: `New Contact Form Submission from ${name}`,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>New Contact Form Submission</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            line-height: 1.6;
                            color: #333;
                            margin: 0;
                            padding: 0;
                        }
                        .email-container {
                            max-width: 600px;
                            margin: 0 auto;
                            padding: 20px;
                            background-color: #ffffff;
                        }
                        .header {
                            background-color: #166534;
                            color: #ffffff;
                            padding: 20px;
                            text-align: center;
                            border-radius: 8px 8px 0 0;
                        }
                        .content {
                            padding: 20px;
                            background-color: #f9fafb;
                            border: 1px solid #e5e7eb;
                            border-radius: 0 0 8px 8px;
                        }
                        .field {
                            margin-bottom: 15px;
                            padding: 10px;
                            background-color: #ffffff;
                            border-radius: 4px;
                        }
                        .field-label {
                            font-weight: bold;
                            color: #166534;
                            margin-bottom: 5px;
                        }
                        .field-value {
                            color: #333;
                        }
                        .message-box {
                            background-color: #ffffff;
                            padding: 15px;
                            border-radius: 4px;
                            margin-top: 20px;
                        }
                        .footer {
                            text-align: center;
                            margin-top: 20px;
                            color: #666;
                            font-size: 12px;
                        }
                    </style>
                </head>
                <body>
                    <div class="email-container">
                        <div class="header">
                            <h2 style="margin: 0;">New Contact Form Submission</h2>
                        </div>
                        <div class="content">
                            <div class="field">
                                <div class="field-label">Name</div>
                                <div class="field-value">${name}</div>
                            </div>
                            <div class="field">
                                <div class="field-label">Email</div>
                                <div class="field-value">${email}</div>
                            </div>
                            <div class="field">
                                <div class="field-label">Phone</div>
                                <div class="field-value">${phone}</div>
                            </div>
                            ${inquiry ? `
                            <div class="field">
                                <div class="field-label">Inquiry Type</div>
                                <div class="field-value">${inquiry}</div>
                            </div>
                            ` : ""}
                            <div class="message-box">
                                <div class="field-label">Message</div>
                                <div class="field-value" style="white-space: pre-wrap;">${message}</div>
                            </div>
                        </div>
                        <div class="footer">
                            This is an automated message from your website contact form.
                        </div>
                    </div>
                </body>
                </html>
            `
        };

        await transporter.sendMail(mailOptions);

        // Ensure we have valid SMTP credentials before sending auto-reply
        if (!process.env.SMTP_USER && !process.env.SMTP_FROM_EMAIL) {
            console.error("Missing SMTP configuration for auto-reply");
            return NextResponse.json(
                { message: "Form submitted successfully, but auto-reply failed" },
                { status: 200 }
            );
        }

        // Send an auto-reply to the customer
        const autoReplyOptions = {
            from: `"Prabha Agrotech" <${process.env.SMTP_USER || process.env.SMTP_FROM_EMAIL}>`,
            to: `"${name}" <${email}>`,
            subject: `Thank you for contacting Prabha Agrotech`,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Thank you for contacting us</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            line-height: 1.6;
                            color: #333;
                            margin: 0;
                            padding: 0;
                        }
                        .email-container {
                            max-width: 600px;
                            margin: 0 auto;
                            padding: 20px;
                            background-color: #ffffff;
                        }
                        .header {
                            background-color: #166534;
                            color: #ffffff;
                            padding: 30px 20px;
                            text-align: center;
                            border-radius: 8px 8px 0 0;
                        }
                        .logo {
                            margin-bottom: 20px;
                        }
                        .content {
                            padding: 30px;
                            background-color: #f9fafb;
                            border: 1px solid #e5e7eb;
                            border-radius: 0 0 8px 8px;
                        }
                        .greeting {
                            font-size: 18px;
                            margin-bottom: 20px;
                            color: #166534;
                        }
                        .message {
                            margin-bottom: 25px;
                            color: #4b5563;
                        }
                        .contact-info {
                            background-color: #ffffff;
                            padding: 20px;
                            border-radius: 8px;
                            margin-top: 25px;
                        }
                        .footer {
                            text-align: center;
                            margin-top: 30px;
                            padding-top: 20px;
                            border-top: 1px solid #e5e7eb;
                            color: #6b7280;
                            font-size: 14px;
                        }
                        .social-links {
                            margin-top: 20px;
                        }
                        .button {
                            display: inline-block;
                            padding: 12px 24px;
                            background-color: #166534;
                            color: #ffffff;
                            text-decoration: none;
                            border-radius: 6px;
                            margin-top: 15px;
                        }
                    </style>
                </head>
                <body>
                    <div class="email-container">
                        <div class="header">
                            <h1 style="margin: 0;">Thank You for Contacting Us</h1>
                        </div>
                        <div class="content">
                            <div class="greeting">Dear ${name},</div>
                            <div class="message">
                                <p>Thank you for reaching out to Prabha Agrotech. We have received your inquiry regarding ${inquiry || 'our services'}.</p>
                                <p>Our team will review your message and get back to you as soon as possible. We typically respond within 24-48 business hours.</p>
                                <p>Here's a summary of your inquiry:</p>
                            </div>
                            <div class="contact-info">
                                <p><strong>Inquiry Type:</strong> ${inquiry || 'General Inquiry'}</p>
                                <p><strong>Message:</strong></p>
                                <p style="color: #666;">${message}</p>
                            </div>
                            <div class="message" style="margin-top: 25px;">
                                <p>While you wait for our response, you might be interested in exploring:</p>
                                <ul>
                                    <li>Our comprehensive range of agricultural solutions</li>
                                    <li>Latest farming technologies and innovations</li>
                                    <li>Training programs and workshops</li>
                                </ul>
                            </div>
                            <div style="text-align: center;">
                                <a href="${process.env.NEXT_PUBLIC_WEBSITE_URL || '#'}" class="button">Visit Our Website</a>
                            </div>
                        </div>
                        <div class="footer">
                            <p>Best regards,<br>Team Prabha Agrotech</p>
                            <p>If you need immediate assistance, please contact us at:<br>
                            Phone: ${process.env.CONTACT_PHONE || '+91 XXXXXXXXXX'}<br>
                            Email: ${process.env.SMTP_FROM_EMAIL}</p>
                            <div class="social-links">
                                Follow us on social media for updates and tips
                            </div>
                        </div>
                    </div>
                </body>
                </html>
            `
        };

        await transporter.sendMail(autoReplyOptions);

        return NextResponse.json(
            { message: "Email sent successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("SMTP Error:", error instanceof Error ? error.message : 'Unknown error');

        return NextResponse.json(
            { error: error instanceof Error ? error.message : "Email sending failed" },
            { status: 500 }
        );
    }
}
