"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export default function Navbar() {
  const { totalItems } = useCart();

  return (
    <header className="border-b border-black/10 dark:border-white/15">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Club de Perfumes
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/products">Shop</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/pay">Pay Now</Link>
          <Link href="/cart">Cart ({totalItems})</Link>
        </nav>
      </div>
    </header>
  );
}
