import { ThemeProvider } from '@/components/theme-provider';
import type { Metadata } from 'next';
import { myFont } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ronit Kedia',
  description: 'Full Stack Developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${myFont.variable} h-screen font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
