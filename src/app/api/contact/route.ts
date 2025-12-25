import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, subject, message } = body;

        // Mock processing
        console.log("Contact form submission received:", { name, email, subject, message });

        // In a real app, you would send an email here using Resend or similar
        // await sendContactNotificationEmail({ name, email, subject, message });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error processing contact form:", error);
        return NextResponse.json(
            { error: "Failed to process contact form" },
            { status: 500 }
        );
    }
}
