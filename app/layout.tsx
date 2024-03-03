import type { Metadata } from "next";
import { Inter, Lavishly_Yours } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar";
import BufferComponent from "./context/BufferComponent";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const LavishlyYours = Lavishly_Yours({weight: "400", subsets: ["latin"]});

export const metadata = {
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
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={inter.className}>
          <BufferComponent>
            {children}
          </BufferComponent>
      </body>
    </html>
  );
}
