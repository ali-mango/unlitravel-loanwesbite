import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UnliTravel Loan Services",
  description: "Travel installment and loan application website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}