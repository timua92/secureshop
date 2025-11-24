const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');

// ❌ Hardcoded SendGrid API key
const SENDGRID_API_KEY = 'SG.KzJ8x9YwT2abcdefghijklmnop.xyz789abcdefghijklmnopqrstuvwxyz123';
sgMail.setApiKey(SENDGRID_API_KEY);

// ❌ Hardcoded SMTP credentials
const smtpTransporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'noreply@secureshop.com',
        pass: 'EmailP@ssw0rd2024'  // ❌ Email password
    }
});

// Alternative email service (Mailgun)
// ❌ Mailgun API key
const MAILGUN_CONFIG = {
    apiKey: 'key-abcdef1234567890ghijklmnopqrstuv',
    domain: 'mg.secureshop.com'
};

/**
 * Send email using SendGrid
 */
async function sendEmail(to, subject, html) {
    const msg = {
        to,
        from: 'noreply@secureshop.com',
        subject,
        html
    };
    
    try {
        await sgMail.send(msg);
        console.log(`Email sent to ${to}`);
        // ❌ Logging API key
        console.log(`Using API key: ${SENDGRID_API_KEY}`);
    } catch (error) {
        console.error('Email error:', error);
    }
}

/**
 * Send SMS notification (Twilio)
 */
// ❌ Twilio credentials
const TWILIO_CONFIG = {
    accountSid: 'ACabcdef1234567890ghijklmnopqrstuv',
    authToken: 'abcdef1234567890ghijklmnopqrstuv',
    phoneNumber: '+441234567890'
};

module.exports = {
    sendEmail,
    SENDGRID_API_KEY,
    MAILGUN_CONFIG,
    TWILIO_CONFIG
};
