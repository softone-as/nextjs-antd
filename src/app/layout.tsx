import "./globals.css";

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import AntConfigProvider from "@/components/providers/theme";

import SWRConfigProvider from "@/components/providers/swr";
import SessionProvider from "@/components/providers/next-auth";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#1890ff",
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  generator: "Next.js",
  manifest: "/manifest.webmanifest",
  keywords: ["nextjs", "nextjs13", "next13", "pwa", "next-pwa"],
  authors: [
    { name: "John doe" },
    {
      name: "Jane doe",
      url: "https://www.linkedin.com/",
    },
  ],
  icons: [
    { rel: "apple-touch-icon", url: "icons/icon-192x192.png" },
    { rel: "icon", url: "icons/icon-192x192.png" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <AntConfigProvider>
            <SWRConfigProvider>{children}</SWRConfigProvider>
          </AntConfigProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
