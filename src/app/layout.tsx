import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sebastian Rojas Management",
  description: "Website for homeowners interested in hiring a property manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // className={inter.className}
return (
    <html lang="en">
      <body className="bg-white">{children}</body>
    </html>
  );
}
