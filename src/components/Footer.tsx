import Link from "next/link";

const links = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/refund-policy", label: "Cancellation & Refund" },
  { href: "/shipping-policy", label: "Shipping Policy" },
  { href: "/contact", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-black/10 dark:border-white/15">
      <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-black/60 dark:text-white/60">
        <nav className="mb-4 flex flex-wrap gap-x-6 gap-y-2">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:underline">
              {link.label}
            </Link>
          ))}
        </nav>
        © {new Date().getFullYear()} Club de Perfumes. All rights reserved.
      </div>
    </footer>
  );
}
