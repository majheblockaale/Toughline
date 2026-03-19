import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/schemas";
import { sendContactEmail } from "@/lib/sendEmail";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const sent = await sendContactEmail(result.data);

    if (!sent) {
      // In development or when SendGrid isn't configured, log instead
      console.log("Contact form submission:", result.data);
      return NextResponse.json({ success: true, message: "Message received (email not configured)" });
    }

    return NextResponse.json({ success: true, message: "Message sent successfully" });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
