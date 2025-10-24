import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { sampleProductsReviews } from "@/lib/sample-data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hagersten StreetCut",
  description: "Summaries of customer reviews",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const products = sampleProductsReviews;
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex justify-around py-4 border-b mb-8">
          <Link
            key={products["mower"].name}
            className="text-lg font-semibold"
            href={`/`}
          >
            {products["mower"].name}
          </Link>
        </nav>
        <p className="text-center text-gray-500 mb-8">
          We are the best barber in the south of Stockholm. To learn more, visit
          the{" "}
          <Link
            className="underline"
            target="_blank"
            href="https://maps.app.goo.gl/f4irVqGC9KGHzRDP9"
          >
            google page
          </Link>
          .{"\n          "}
        </p>
        <p className="text-center text-gray-500 mb-8">
          Text to book +46 72-853 82 88
        </p>
        <main className="pt-6">{children}</main>
        <footer className="mt-16 py-8 border-t">
          <div className="text-center text-sm text-gray-500 space-x-4">
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
            <span>|</span>
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/terms" className="hover:underline">
              Terms of Use
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
