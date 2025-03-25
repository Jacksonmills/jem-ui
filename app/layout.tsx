import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ModeToggle } from "@/components/mode-toggle";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { PostHogProvider } from "@/components/post-hog-provider";
import { TextLink } from "@/components/text-link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col items-center justify-center fixed top-4 right-4 z-50 bg-muted/50 rounded-full p-1">
            <ModeToggle />
            <Button
              className="h-7 w-7"
              size="icon"
              variant="ghost"
              asChild
            >
              <a href="https://github.com/Jacksonmills/jem-ui">
                <Icons.gitHub className="w-6 h-6" />
              </a>
            </Button>
          </div>
          <div className="isolate">

            <PostHogProvider>
              {children}
            </PostHogProvider>
            <footer className="text-muted-foreground text-sm p-4 border-t">
              Built by <TextLink href="https://twitter.com/jacksonmills">JEM</TextLink>. The source code is available on <TextLink href="https://github.com/Jacksonmills/jem-ui">GitHub</TextLink>.
            </footer>
          </div>
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
