"use client";
import Link from "next/link";

export default function Section() {
  return (
    <section className="py-16 px-4 bg-[var(--color-background)]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 text-left">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={ color: "var(--color-text)", fontFamily: "var(--font-heading)" }>Your Product Title</h1>
          <p className="text-lg mb-6 opacity-90" style={ color: "var(--color-text)" }>Your Company Description</p>
          <Link href="/contact" className="inline-block px-6 py-3 rounded-[var(--radius)] font-medium bg-[var(--color-primary)] text-white hover:opacity-90">Get Started</Link>
        </div>
        
      </div>
    </section>
  );
}
