import type { Metadata, Viewport } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
  display: "swap",
  // Sin precarga: solo la usan títulos y citas; así no compite en móvil con Inter,
  // que es la fuente del texto principal (LCP). Se pinta con el fallback ajustado y cambia sin saltos.
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Marcus Reis — UX/UI Designer", template: "%s · Marcus Reis" },
  description: "UX/UI Designer. Research, information architecture and user-centred design. Seville, Spain.",
  openGraph: {
    title: "Marcus Reis — UX/UI Designer",
    description: "I design experiences that make sense.",
    siteName: "Marcus Reis",
    type: "website",
    images: [{ url: "/assets/og-image.jpg", width: 1200, height: 630, alt: "Marcus Reis — UX/UI Designer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcus Reis — UX/UI Designer",
    description: "I design experiences that make sense.",
    images: ["/assets/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  verification: { google: "DCFGfIg4vNNWZskmV13JVGmaoA3wDU9RauvlJZgB1y4" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F7F4" },
    { media: "(prefers-color-scheme: dark)",  color: "#0C0C0C" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning className={`${inter.variable} ${dmSerifDisplay.variable}`}>
      <body>
        <script dangerouslySetInnerHTML={{ __html: `(function(){var t=localStorage.getItem('theme'),d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(t!=='light'&&d))document.documentElement.classList.add('dark');})();` }} />
        {children}
      </body>
    </html>
  );
}
