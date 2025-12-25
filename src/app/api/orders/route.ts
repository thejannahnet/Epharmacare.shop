import { NextResponse } from "next/server";
import { saveOrderToGoogleSheets, sendOrderConfirmationEmail } from "@/lib/integrations";

export async function POST(req: Request) {
    try {
        const orderData = await req.json();

        // 1. Generate a unique Order ID
        const orderId = `ORD-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
        const fullOrderData = { ...orderData, id: orderId };

        // 2. Save to Google Sheets (Mock)
        await saveOrderToGoogleSheets(fullOrderData);

        // 3. Send Confirmation Email (Mock)
        await sendOrderConfirmationEmail(fullOrderData);

        return NextResponse.json({ success: true, orderId });
    } catch (error) {
        console.error("Order processing error:", error);
        return NextResponse.json({ success: false, error: "Failed to process order" }, { status: 500 });
    }
}
