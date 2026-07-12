import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Content Repurposing Tool",
  description: "Turn any script into scroll-stopping reel ideas, instantly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <body
        className={`${poppins.className} min-h-full flex flex-col bg-background text-foreground`}
      >
        {children}
        <Toaster position="top-center" theme="dark" richColors />
      </body>
    </html>
  );
}
