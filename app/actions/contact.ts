'use server';

import nodemailer from 'nodemailer';
import { buildContactEmailTemplate } from '@/reference folder/contact-email-template';

type ContactActionState = {
  success: boolean;
  error: string;
};

export async function sendContactEmail(
  _previousState: ContactActionState,
  formData: FormData
): Promise<ContactActionState> {
  const name = (formData.get('name') as string | null)?.trim() ?? '';
  const email = (formData.get('email') as string | null)?.trim() ?? '';
  const subject = (formData.get('subject') as string | null)?.trim() ?? '';
  const message = (formData.get('message') as string | null)?.trim() ?? '';

  if (!name || !email || !subject || !message) {
    return { success: false, error: 'All fields are required.' };
  }

  const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
  const smtpPort = Number(process.env.SMTP_PORT || '587');
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || smtpUser;
  const toEmail = process.env.CONTACT_TO_EMAIL || 'zayerokry81@gmail.com';

  if (!smtpUser || !smtpPass || !fromEmail) {
    return { success: false, error: 'Email configuration is missing in .env.local.' };
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const { html, text } = buildContactEmailTemplate({
    receiverName: process.env.CONTACT_RECEIVER_NAME || 'Admin',
    senderName: name,
    senderEmail: email,
    subject,
    message,
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html,
      text,
    });

    return { success: true, error: '' };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error: 'Transmission failed. Please try again later.' };
  }
}
