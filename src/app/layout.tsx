import { ModeToggle } from "@/components/mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import { myFont } from "./fonts";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const libre = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  title: "Ronit Kedia",
  description: "Full Stack Developer",
  openGraph: {
    title: "Ronit Kedia",
    description: "Full Stack Developer",
    url: "https://ronitkedia.com/",
    siteName: "Ronit Kedia Portfolio",
    images: [
      {
        url: "/twitter-card.png",
        width: 1200,
        height: 630,
        alt: "Ronit Kedia Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ronit Kedia",
    description: "Full Stack Developer",
    images: ["/twitter-card.png"],
    creator: "@ronitk21",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${myFont.variable} ${libre.variable} relative h-screen font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="absolute right-4 flex justify-end pt-4 sm:right-80">
            {/* <Particle /> */}
            <ModeToggle />
          </div>
          <main>{children}</main>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
