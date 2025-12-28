import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E Pharma Care | Quality Pharmaceutical Products & Discrete Delivery",
  description: "E Pharma Care provides high-quality pharmaceutical products with discrete delivery and exceptional care. Shop our range of certified medications safely and securely.",
  keywords: ["pharmacy", "online meds", "E Pharma Care", "discrete delivery", "quality pharmaceuticals"],
  openGraph: {
    title: "E Pharma Care | Quality Pharmaceutical Products",
    description: "Your trusted partner for quality pharmaceutical products with discrete delivery.",
    type: "website",
    url: "https://epharmacare.shop",
  }
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
