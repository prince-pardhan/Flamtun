import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MantineProvider } from "@mantine/core"; 
import "@mantine/core/styles.css"; 

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flamtun",
  description: "Flamtun",
  icons: {
    icon: [
      {
        rel: "icon",
        url: "/f.png",
      },
      {
        rel: "apple-touch-icon",
        url: "/f.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* ✅ MantineProvider wrap */}
        <MantineProvider>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}