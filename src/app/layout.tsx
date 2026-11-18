import type { Metadata, Viewport } from "next";
import { Outfit, Source_Serif_4 } from "next/font/google";
import { getSiteUrl } from "@/lib/seo";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const DEFAULT_TITLE =
  "Sri Sun Solar Energiser Pvt Ltd | Rooftop Solar and EPC in Chennai";
const DEFAULT_DESCRIPTION =
  "Rooftop solar, EPC and PM Surya Ghar subsidy assistance for homes, housing societies and industry in Chennai. MNRE channel partner, TEDA and TNPHC registered, REC channel partner since 2013.";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Sri Sun Solar",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: "Sri Sun Solar",
  keywords: [
    "solar rooftop Chennai",
    "PM Surya Ghar subsidy Tamil Nadu",
    "solar EPC",
    "on-grid solar",
    "REC solar panels",
    "Fronius inverter",
    "Growatt inverter",
    "MNRE channel partner",
  ],
  openGraph: {
    type: "website",
    siteName: "Sri Sun Solar Energiser Pvt Ltd",
    locale: "en_IN",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0B1F3A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      className={`${outfit.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
