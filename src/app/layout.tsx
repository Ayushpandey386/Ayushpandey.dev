import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GeistPixelSquare } from "geist/font/pixel";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ayushpandey.dev";

export const metadata: Metadata = {
  title: "Ayush Pandey | Full-Stack Developer & AI Enthusiast",
  description:
    "17-year-old problem solver from Nepal. Full-Stack Developer and AI Enthusiast, building the future with code.",
  metadataBase: new URL(siteUrl),
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Ayush Pandey",
    title: "Ayush Pandey | Full-Stack Developer & AI Enthusiast",
    description:
      "17-year-old problem solver from Nepal. Full-Stack Developer and AI Enthusiast, building the future with code.",
    images: [
      {
        url: "/Ayush.png",
        width: 512,
        height: 512,
        alt: "Ayush Pandey",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Ayush Pandey | Full-Stack Developer & AI Enthusiast",
    description:
      "17-year-old problem solver from Nepal. Full-Stack Developer and AI Enthusiast, building the future with code.",
    images: ["/Ayush.png"],
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
        className={`${geistSans.variable} ${geistMono.variable} ${GeistPixelSquare.variable} min-h-screen bg-background font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="mx-auto min-h-[calc(100vh-3.5rem)] max-w-5xl border-x border-border">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
