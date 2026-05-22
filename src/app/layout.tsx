import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Moe Kyaw Aung | Senior Android Developer",
    template: "%s | Moe Kyaw Aung",
  },
  description:
    "Senior Android Developer building premium mobile apps, AI/ML projects, and open-source tools.",
  metadataBase: new URL("https://example.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Moe Kyaw Aung | Senior Android Developer",
    description:
      "Senior Android Developer building premium mobile apps, AI/ML projects, and open-source tools.",
    url: "https://example.com",
    siteName: "Moe Kyaw Aung Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moe Kyaw Aung | Senior Android Developer",
    description:
      "Senior Android Developer building premium mobile apps, AI/ML projects, and open-source tools.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
