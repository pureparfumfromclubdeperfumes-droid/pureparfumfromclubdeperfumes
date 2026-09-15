import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(request: Request) {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    await request.json();

  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  if (!keySecret) {
    return NextResponse.json(
      { error: "Razorpay key secret is not configured on the server" },
      { status: 500 }
    );
  }

  const expectedSignature = crypto
    .createHmac("sha256", keySecret)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest("hex");

  const isValid = expectedSignature === razorpay_signature;

  if (!isValid) {
    return NextResponse.json({ verified: false }, { status: 400 });
  }

  // TODO: mark the corresponding order as paid in your database here.

  return NextResponse.json({ verified: true });
}
