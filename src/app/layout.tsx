import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/layout/CustomCursor";
import AmbientBackground from "@/components/layout/AmbientBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#080808",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://xyz-agency.digital"),
  title: {
    default: "XYZ — Premium Animated Digital Agency | We Make Digital Feel Alive",
    template: "%s | XYZ Digital Agency",
  },
  description:
    "XYZ is a premium digital agency delivering cinematic AI visual creatives, dynamic web applications, mobile platforms, and transformative business automations.",
  keywords: [
    "XYZ Agency",
    "Digital Agency",
    "AI Poster Design",
    "AI Animation Videos",
    "Next.js Development",
    "iOS and Android App Development",
    "Creative Studio",
    "Digital Business Solutions",
    "Interactive 3D Web",
  ],
  authors: [{ name: "XYZ Creative Studio" }],
  creator: "XYZ",
  publisher: "XYZ",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://xyz-agency.digital",
    siteName: "XYZ Digital Agency",
    title: "XYZ — Premium Animated Digital Agency | We Make Digital Feel Alive",
    description:
      "We create powerful digital experiences through AI creativity, modern websites, mobile apps, and innovative business solutions.",
    images: [
      {
        url: "/images/og-preview.jpg",
        width: 1200,
        height: 630,
        alt: "XYZ Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "XYZ — Premium Animated Digital Agency",
    description:
      "We create powerful digital experiences through AI creativity, modern websites, mobile apps, and innovative business solutions.",
    images: ["/images/og-preview.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#080808] text-[#F5F5F5] selection:bg-[#FF5A1F] selection:text-white relative">
        {/* Continuous Cinematic Ambient Background System */}
        <AmbientBackground />

        {/* Subtle noise grain for cinematic polish */}
        <div className="pointer-events-none fixed inset-0 z-40 grain-overlay opacity-30 mix-blend-screen" />
        
        {/* Interactive Magnetic Cursor (Desktop) */}
        <CustomCursor />
        
        {/* Main Content Tree */}
        <div className="flex-1 flex flex-col w-full relative z-10">{children}</div>
      </body>
    </html>
  );
}
