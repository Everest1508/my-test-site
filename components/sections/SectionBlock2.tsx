"use client";

export default function Section() {
  return (
    <section className="py-16 px-4 bg-[var(--color-background)]">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2" style={{ color: "var(--color-text)", fontFamily: "var(--font-heading)" }}>Get In Touch</h2>
        <p className="mb-8" style={{ color: "var(--color-text)" }}>Send us a message</p>
        <form className="space-y-4 text-left" action="#" method="post">
          <div><label className="block text-sm font-medium mb-1" style={{ color: "var(--color-text)" }}>Name</label><input type="text" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-[var(--radius)]" /></div>
          <div><label className="block text-sm font-medium mb-1" style={{ color: "var(--color-text)" }}>Email</label><input type="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-[var(--radius)]" /></div>
          <div><label className="block text-sm font-medium mb-1" style={{ color: "var(--color-text)" }}>Message</label><textarea name="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-[var(--radius)]" /></div>
          <button type="submit" className="w-full px-4 py-3 rounded-[var(--radius)] font-medium bg-[var(--color-primary)] text-white hover:opacity-90">Send</button>
        </form>
      </div>
    </section>
  );
}
