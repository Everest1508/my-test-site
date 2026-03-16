"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg" style={ fontFamily: "var(--font-heading)" }>Your Brand</Link>
        <nav className="flex items-center gap-1">
          <Link href="/" className="px-3 py-2 text-sm hover:opacity-80">Home</Link>
          <Link href="/about" className="px-3 py-2 text-sm hover:opacity-80">About</Link>
          <Link href="/contact" className="px-3 py-2 text-sm hover:opacity-80">Contact</Link>
          <Link href="/contact" className="ml-2 px-4 py-2 rounded-[var(--radius)] text-sm font-medium bg-[var(--color-primary)] text-white hover:opacity-90">
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}
