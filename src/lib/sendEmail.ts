import type { ContactFormData } from "./schemas";

export async function sendContactEmail(data: ContactFormData): Promise<boolean> {
  const apiKey = process.env.SENDGRID_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL || "info@toughlinemetalworks.com";

  if (!apiKey) {
    console.error("SENDGRID_API_KEY is not configured");
    return false;
  }

  const body = {
    personalizations: [
      {
        to: [{ email: toEmail }],
        subject: `New Quote Request: ${data.service || "General Inquiry"} — ${data.name}`,
      },
    ],
    from: { email: "noreply@toughlinemetalworks.com", name: "Toughline Website" },
    reply_to: { email: data.email, name: data.name },
    content: [
      {
        type: "text/html",
        value: `
          <h2>New Contact Form Submission</h2>
          <table style="border-collapse:collapse;width:100%;max-width:600px;">
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Name</td><td style="padding:8px;border:1px solid #ddd;">${data.name}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;">${data.email}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Phone</td><td style="padding:8px;border:1px solid #ddd;">${data.phone || "Not provided"}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Service</td><td style="padding:8px;border:1px solid #ddd;">${data.service || "Not specified"}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Message</td><td style="padding:8px;border:1px solid #ddd;">${data.message.replace(/\n/g, "<br>")}</td></tr>
          </table>
        `,
      },
    ],
  };

  const res = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return res.ok;
}
