import type { Metadata } from "next";
import "./globals.css";
import { myFont } from "./fonts";

export const metadata: Metadata = {
  title: "Ronit Kedia",
  description: "Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${myFont.variable} font-sans antialiased h-screen`}
      >
          {children}
      </body>
    </html>
  );
}
