import type { Metadata } from "next";
import { LANGS, type Lang } from "@/lib/i18n";
import Nav from "@/components/layout/Nav";

export function generateStaticParams() {
  return LANGS.map(lang => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: _lang } = await params;
  const lang = (LANGS.includes(_lang as Lang) ? _lang : "es") as Lang;
  const base = "https://mvreis-uxportafolio.vercel.app";
  return {
    alternates: {
      // canonical per-page is set in each page's own generateMetadata;
      // this layout-level entry covers the root /{lang} only
      canonical: `${base}/${lang}`,
      languages: {
        "es": `${base}/es`,
        "en": `${base}/en`,
        "pt": `${base}/pt`,
      },
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: _lang } = await params;
  const lang = (LANGS.includes(_lang as Lang) ? _lang : "es") as Lang;

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang="${lang}";`,
        }}
      />
      <Nav lang={lang} />
      <main>{children}</main>
      {/* CAMBIO 3: footer year → 2026 (via i18n footer string) */}
      <footer style={{ borderTop: "1px solid var(--border)", marginTop: "6rem", padding: "1.75rem 1.5rem" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
          <span style={{ fontSize: "0.8125rem", color: "var(--muted)", fontFamily: "var(--font-sans)" }}>
            Marcus Reis · UX/UI Designer
          </span>
          <span style={{ fontSize: "0.8125rem", color: "var(--muted)", fontFamily: "var(--font-sans)" }}>
            © 2026
          </span>
        </div>
      </footer>
    </>
  );
}
