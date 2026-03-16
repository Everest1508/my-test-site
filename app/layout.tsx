import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "my-test-site",
  description: "Built with BeForge",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
