//app/api/send-mail/route.ts

import nodemailer from 'nodemailer';

interface EmailRequestBody {
    name: string;
    email: string;
    phone: string;
    inquiry: string;
    message: string;
}

export async function POST(req: Request): Promise<Response> {
    try {
        const body: EmailRequestBody = await req.json();
        const { name, email, phone, inquiry, message } = body;

        // Create a transporter using SMTP
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com', // e.g., smtp.gmail.com
            port: parseInt(process.env.SMTP_PORT || '587'),
            secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER, // Your email
                pass: process.env.SMTP_PASSWORD, // Your email password or app password
            },
        });

        // Define the email options
        const mailOptions = {
            from: process.env.SMTP_USER, // Sender's email address
            to: 'info@innovatevoice.com', // Your email address
            subject: `New Contact Form Submission from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nInquiry Type: ${inquiry}\n\nMessage:\n${message}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Inquiry Type:</strong> ${inquiry}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        // Respond with success
        return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(
            JSON.stringify({
                message: 'Failed to send email',
                error: error instanceof Error ? error.message : 'Unknown error'
            }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            }
        );
    }
}