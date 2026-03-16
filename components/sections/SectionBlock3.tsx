"use client";
import Link from "next/link";

export default function Section() {
  return (
    <section className="py-16 px-4 bg-[var(--color-primary)] text-white text-center">
      <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-heading)" }}>Ready to get started?</h2>
      <Link href="/contact" className="inline-block px-6 py-3 rounded-[var(--radius)] font-medium bg-white text-[var(--color-primary)] hover:opacity-90">Contact Us</Link>
    </section>
  );
}
