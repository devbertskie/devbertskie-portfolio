import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Lexend } from "next/font/google";
import { cn } from "@/lib/utils";
import App from "@/components/app";
import ThemeProvider from "@/context/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });

export const metadata: Metadata = {
  title: {
    template: "%s | Devbertskie",
    default: "Personal Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={cn(
          "antialiased min-h-screen font-lexend bg-background",
          lexend.variable
        )}
      >
        <Toaster duration={1500} richColors position="bottom-right" />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <App>{children}</App>
        </ThemeProvider>
      </body>
    </html>
  );
}
