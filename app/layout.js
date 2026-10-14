import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Basic Next.js Site",
  description: "A simple site with Home, About, and Contact pages.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav aria-label="Main navigation">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
