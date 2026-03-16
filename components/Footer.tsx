"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-semibold text-white" style={ fontFamily: "var(--font-heading)" }>Your Brand</span>
        <nav className="flex gap-6">
          <Link href="/privacy" className="text-gray-400 hover:text-white">Privacy</Link>
          <Link href="/terms" className="text-gray-400 hover:text-white">Terms</Link>
        </nav>
        <span className="text-sm text-gray-500">© 2025 Your Company. All rights reserved.</span>
      </div>
    </footer>
  );
}
