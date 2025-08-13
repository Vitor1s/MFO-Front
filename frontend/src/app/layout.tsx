"use client";

import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { NavigationProvider } from "@/contexts/NavigationContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <NavigationProvider>
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="main-content flex-1">
              {children}
            </main>
          </div>
        </NavigationProvider>
      </body>
    </html>
  );
}
