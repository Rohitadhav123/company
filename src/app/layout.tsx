import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/layout/CustomCursor";
import AmbientBackground from "@/components/layout/AmbientBackground";
import { LanguageProvider } from "@/context/LanguageContext";

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
  metadataBase: new URL("https://tekzo.digital"),
  title: {
    default: "TEKZO — Premium Animated Digital Agency | We Make Digital Feel Alive",
    template: "%s | Tekzo Digital Agency",
  },
  description:
    "Tekzo is a premium digital agency delivering cinematic AI visual creatives, dynamic web applications, mobile platforms, and transformative business automations.",
  keywords: [
    "Tekzo Agency",
    "Digital Agency",
    "AI Poster Design",
    "AI Animation Videos",
    "Next.js Development",
    "iOS and Android App Development",
    "Creative Studio",
    "Digital Business Solutions",
    "Interactive 3D Web",
  ],
  authors: [{ name: "Tekzo Creative Studio" }],
  creator: "Tekzo",
  publisher: "Tekzo",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tekzo.digital",
    siteName: "Tekzo Digital Agency",
    title: "TEKZO — Premium Animated Digital Agency | We Make Digital Feel Alive",
    description:
      "We create powerful digital experiences through AI creativity, modern websites, mobile apps, and innovative business solutions.",
    images: [
      {
        url: "/logo/company_logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Tekzo Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TEKZO — Premium Animated Digital Agency",
    description:
      "We create powerful digital experiences through AI creativity, modern websites, mobile apps, and innovative business solutions.",
    images: ["/logo/company_logo.jpeg"],
  },
  icons: {
    icon: "/logo/company_logo.jpeg",
    apple: "/logo/company_logo.jpeg",
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
        <LanguageProvider>
          {/* Continuous Cinematic Ambient Background System */}
          <AmbientBackground />

          {/* Subtle noise grain for cinematic polish */}
          <div className="pointer-events-none fixed inset-0 z-40 grain-overlay opacity-30 mix-blend-screen" />
          
          {/* Interactive Magnetic Cursor (Desktop) */}
          <CustomCursor />
          
          {/* Main Content Tree */}
          <div className="flex-1 flex flex-col w-full relative z-10">{children}</div>
        </LanguageProvider>
      </body>
    </html>
  );
}
