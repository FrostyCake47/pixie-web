import type { Metadata } from "next";
import { Inter, Lavishly_Yours } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const LavishlyYours = Lavishly_Yours({weight: "400", subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Pixie Web",
  description: "Your personal diary",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
