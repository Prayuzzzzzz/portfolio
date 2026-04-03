module.exports = [
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/dns [external] (dns, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dns", () => require("dns"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[project]/reference folder/contact-email-template.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildContactEmailTemplate",
    ()=>buildContactEmailTemplate
]);
function escapeHtml(value) {
    return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function buildContactEmailTemplate(input) {
    const safeReceiverName = escapeHtml(input.receiverName);
    const safeSenderName = escapeHtml(input.senderName);
    const safeSenderEmail = escapeHtml(input.senderEmail);
    const safeSubject = escapeHtml(input.subject);
    const safeMessage = escapeHtml(input.message).replace(/\n/g, "<br />");
    const normalizedSenderEmail = input.senderEmail.trim();
    const replyHref = `mailto:${normalizedSenderEmail}?subject=${encodeURIComponent(`Re: ${input.subject}`)}`;
    const html = `
    <div style="margin:0;padding:24px 12px;font-family:Segoe UI,Arial,sans-serif;color:#d8e6df;">
      <div style="max-width:720px;margin:0 auto;background:#0b4148;border:1px solid rgba(224,247,128,0.18);border-radius:22px;overflow:hidden;box-shadow:0 24px 60px rgba(0,0,0,0.22);">
        <div style="padding:34px 36px;background:linear-gradient(135deg,#0c4d55,#08353a);border-bottom:1px solid rgba(224,247,128,0.15);">
          <p style="margin:0 0 12px;font-size:13px;letter-spacing:0.16em;text-transform:uppercase;color:#dff780;font-weight:700;">New Portfolio Inquiry</p>
          <h1 style="margin:0;font-size:38px;line-height:1.18;color:#f1f6e2;font-weight:800;">Hello ${safeReceiverName},</h1>
          <p style="margin:14px 0 0;font-size:18px;line-height:1.7;color:#c4d7d5;">You received a new contact message from your portfolio website.</p>
        </div>
        <div style="padding:34px 36px;">
          <div style="margin-bottom:22px;padding:24px;border-radius:18px;background:#083840;border:1px solid rgba(255,255,255,0.08);">
            <p style="margin:0 0 10px;font-size:14px;color:#8fb0b4;text-transform:uppercase;letter-spacing:0.08em;font-weight:700;">Sender Details</p>
            <p style="margin:0 0 10px;font-size:20px;line-height:1.5;color:#eef3db;"><strong>Name:</strong> ${safeSenderName}</p>
            <p style="margin:0;font-size:20px;line-height:1.5;color:#eef3db;">
              <strong>Email:</strong>
              <a href="mailto:${normalizedSenderEmail}" style="color:#7dcfff;text-decoration:none;">${safeSenderEmail}</a>
            </p>
          </div>
          <div style="margin-bottom:22px;padding:24px;border-radius:18px;background:#083840;border:1px solid rgba(255,255,255,0.08);">
            <p style="margin:0 0 10px;font-size:14px;color:#8fb0b4;text-transform:uppercase;letter-spacing:0.08em;font-weight:700;">Subject</p>
            <p style="margin:0;font-size:22px;line-height:1.5;color:#eef3db;">${safeSubject}</p>
          </div>
          <div style="margin-bottom:30px;padding:24px;border-radius:18px;background:#083840;border:1px solid rgba(255,255,255,0.08);">
            <p style="margin:0 0 12px;font-size:14px;color:#8fb0b4;text-transform:uppercase;letter-spacing:0.08em;font-weight:700;">Message</p>
            <p style="margin:0;font-size:20px;line-height:1.85;color:#d8e6df;">${safeMessage}</p>
          </div>
          <div style="text-align:center;">
            <a href="${replyHref}" style="display:inline-block;padding:18px 28px;border-radius:16px;background:#dff780;color:#06353c;text-decoration:none;font-size:22px;font-weight:800;">
              Reply to ${safeSenderName}
            </a>
          </div>
        </div>
        <div style="padding:20px 36px;border-top:1px solid rgba(255,255,255,0.08);background:#08353a;">
          <p style="margin:0;font-size:15px;color:#8fb0b4;">Sent from your portfolio contact form.</p>
        </div>
      </div>
    </div>
  `;
    const text = [
        `Hello ${input.receiverName},`,
        "",
        "You received a new contact message from your portfolio website.",
        "",
        `Name: ${input.senderName}`,
        `Email: ${input.senderEmail}`,
        `Subject: ${input.subject}`,
        "",
        "Message:",
        input.message,
        "",
        `Reply: ${input.senderEmail}`
    ].join("\n");
    return {
        html,
        text
    };
}
}),
"[project]/app/actions/contact.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"6005b8744390117bd339f5a8a2c436ea258de9cb5e":{"name":"sendContactEmail"}},"app/actions/contact.ts",""] */ __turbopack_context__.s([
    "sendContactEmail",
    ()=>sendContactEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nodemailer$2f$lib$2f$nodemailer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/nodemailer/lib/nodemailer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$reference__folder$2f$contact$2d$email$2d$template$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/reference folder/contact-email-template.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function sendContactEmail(_previousState, formData) {
    const name = formData.get('name')?.trim() ?? '';
    const email = formData.get('email')?.trim() ?? '';
    const subject = formData.get('subject')?.trim() ?? '';
    const message = formData.get('message')?.trim() ?? '';
    if (!name || !email || !subject || !message) {
        return {
            success: false,
            error: 'All fields are required.'
        };
    }
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = Number(process.env.SMTP_PORT || '587');
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const fromEmail = process.env.CONTACT_FROM_EMAIL || smtpUser;
    const toEmail = process.env.CONTACT_TO_EMAIL || 'zayerokry81@gmail.com';
    if (!smtpUser || !smtpPass || !fromEmail) {
        return {
            success: false,
            error: 'Email configuration is missing in .env.local.'
        };
    }
    const transporter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nodemailer$2f$lib$2f$nodemailer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
            user: smtpUser,
            pass: smtpPass
        }
    });
    const { html, text } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$reference__folder$2f$contact$2d$email$2d$template$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildContactEmailTemplate"])({
        receiverName: process.env.CONTACT_RECEIVER_NAME || 'Admin',
        senderName: name,
        senderEmail: email,
        subject,
        message
    });
    try {
        await transporter.sendMail({
            from: `"Portfolio Contact Form" <${fromEmail}>`,
            to: toEmail,
            replyTo: email,
            subject: `[Portfolio] ${subject}`,
            html,
            text
        });
        return {
            success: true
        };
    } catch (error) {
        console.error('Email sending failed:', error);
        return {
            success: false,
            error: 'Transmission failed. Please try again later.'
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    sendContactEmail
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(sendContactEmail, "6005b8744390117bd339f5a8a2c436ea258de9cb5e", null);
}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/contact.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$contact$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/contact.ts [app-rsc] (ecmascript)");
;
}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/contact.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "6005b8744390117bd339f5a8a2c436ea258de9cb5e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$contact$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendContactEmail"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$contact$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/app/actions/contact.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$contact$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/contact.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__08i4iu6._.js.map