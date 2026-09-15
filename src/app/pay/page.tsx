"use client";

import Script from "next/script";
import { useState } from "react";
import Loader from "@/components/Loader";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

type Status =
  | "idle"
  | "creating-order"
  | "awaiting-payment"
  | "verifying"
  | "success"
  | "error";

const loaderLabel: Partial<Record<Status, string>> = {
  "creating-order": "Setting up your payment...",
  verifying: "Confirming your payment, almost done...",
};

export default function PayPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handlePay(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setStatus("creating-order");

    try {
      const res = await fetch(`${BACKEND_URL}/api/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, amount: Number(amount) }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Could not create order");
      }

      const order = await res.json();

      const configRes = await fetch(`${BACKEND_URL}/api/config`);
      const { keyId } = await configRes.json();

      setStatus("awaiting-payment");

      const razorpay = new window.Razorpay({
        key: keyId,
        amount: order.amount,
        currency: order.currency,
        order_id: order.order_id,
        name: "Club de Perfumes",
        description: "Payment",
        prefill: { name, email, contact: phone },
        handler: async (response: {
          razorpay_order_id: string;
          razorpay_payment_id: string;
          razorpay_signature: string;
        }) => {
          setStatus("verifying");
          try {
            const verifyRes = await fetch(`${BACKEND_URL}/api/verify-payment`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(response),
            });
            const result = await verifyRes.json();
            if (result.verified) {
              setStatus("success");
            } else {
              setError("Payment could not be verified. Please contact us.");
              setStatus("error");
            }
          } catch {
            setError("Payment could not be verified. Please contact us.");
            setStatus("error");
          }
        },
        modal: {
          ondismiss: () => {
            setStatus("idle");
          },
        },
      });

      razorpay.on("payment.failed", (response) => {
        const failure = response as { error: { description: string } };
        setError(failure.error.description || "Payment failed. Please try again.");
        setStatus("error");
      });

      razorpay.open();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="max-w-md text-center">
        <h1 className="mb-4 text-2xl font-semibold">Payment Successful</h1>
        <p className="text-black/60 dark:text-white/60">
          A payment receipt has been sent to your email.
        </p>
        <p className="mt-4 text-sm text-black/60 dark:text-white/60">
          Didn&apos;t receive it on the website? Call us immediately at{" "}
          <a href="tel:7901901821" className="underline underline-offset-4">
            7901901821
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-md">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <h1 className="mb-6 text-2xl font-semibold">Make a Payment</h1>

      <form onSubmit={handlePay} className="space-y-4">
        <div>
          <label className="mb-1 block text-sm">Full name</label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded border border-black/20 px-3 py-2 text-sm dark:border-white/25 dark:bg-transparent"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm">Phone number</label>
          <input
            required
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded border border-black/20 px-3 py-2 text-sm dark:border-white/25 dark:bg-transparent"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm">Email</label>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded border border-black/20 px-3 py-2 text-sm dark:border-white/25 dark:bg-transparent"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm">Amount (₹)</label>
          <input
            required
            type="number"
            min={1}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full rounded border border-black/20 px-3 py-2 text-sm dark:border-white/25 dark:bg-transparent"
          />
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={status === "creating-order" || status === "verifying"}
          className="w-full rounded-full bg-black px-6 py-2.5 text-sm font-medium text-white disabled:opacity-50 dark:bg-white dark:text-black"
        >
          Pay Now
        </button>
      </form>

      {loaderLabel[status] && <Loader label={loaderLabel[status]!} />}
    </div>
  );
}
