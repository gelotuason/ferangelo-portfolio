'use server'

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
    const subject = formData.get('subject');
    const senderName = formData.get('senderName');
    const senderEmail = formData.get('senderEmail');
    const message = formData.get('message');

    const { data, error } = await resend.emails.send({
        from: 'Portfolio Contact Form <onboarding@resend.dev>',
        to: ['gelotuason@gmail.com'],
        subject: subject as string,
        reply_to: senderEmail as string,
        html: `<p>Hi I'm ${senderName},</p><br />${message}`,
    });

    if (error) return false;

    return data && true;
}
