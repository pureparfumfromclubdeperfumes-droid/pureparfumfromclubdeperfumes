"use client";

import Script from "next/script";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/cart-context";

declare global {
  interface Window {
    Razorpay: new (options: Record<string, unknown>) => {
      open: () => void;
    };
  }
}

export default function CheckoutPage() {
  const { totalPrice, clear } = useCart();
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "processing" | "error">(
    "idle"
  );

  async function handlePay() {
    setStatus("processing");

    const res = await fetch("/api/razorpay/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: totalPrice }),
    });

    if (!res.ok) {
      setStatus("error");
      return;
    }

    const order = await res.json();

    const razorpay = new window.Razorpay({
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      order_id: order.id,
      name: "Club de Perfumes",
      description: "Order payment",
      prefill: { name, email },
      handler: async (response: {
        razorpay_order_id: string;
        razorpay_payment_id: string;
        razorpay_signature: string;
      }) => {
        const verifyRes = await fetch("/api/razorpay/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(response),
        });
        const result = await verifyRes.json();
        if (result.verified) {
          clear();
          router.push("/checkout/success");
        } else {
          setStatus("error");
        }
      },
      modal: {
        ondismiss: () => setStatus("idle"),
      },
    });

    razorpay.open();
  }

  if (totalPrice === 0) {
    return (
      <div>
        <h1 className="mb-4 text-2xl font-semibold">Checkout</h1>
        <p className="text-black/60 dark:text-white/60">
          Your cart is empty.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-md">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <h1 className="mb-6 text-2xl font-semibold">Checkout</h1>

      <div className="space-y-4">
        <div>
          <label className="mb-1 block text-sm">Full name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded border border-black/20 px-3 py-2 text-sm dark:border-white/25 dark:bg-transparent"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded border border-black/20 px-3 py-2 text-sm dark:border-white/25 dark:bg-transparent"
          />
        </div>
      </div>

      <p className="mt-6 text-lg font-semibold">
        Total: ₹{totalPrice.toLocaleString("en-IN")}
      </p>

      <button
        onClick={handlePay}
        disabled={status === "processing"}
        className="mt-4 w-full rounded-full bg-black px-6 py-2.5 text-sm font-medium text-white disabled:opacity-50 dark:bg-white dark:text-black"
      >
        {status === "processing" ? "Processing..." : "Pay with Razorpay"}
      </button>

      {status === "error" && (
        <p className="mt-3 text-sm text-red-600">
          Payment failed or could not be verified. Please try again.
        </p>
      )}
    </div>
  );
}
