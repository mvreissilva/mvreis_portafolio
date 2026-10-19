import type { Metadata } from "next";
import { LANGS, type Lang } from "@/lib/i18n";
import { pageMetadata } from "@/lib/site";
import Nav from "@/components/layout/Nav";
import { notFound } from "next/navigation";

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
  const descs: Record<Lang, string> = {
    es: "UX/UI Designer. Investigación, arquitectura de información y diseño centrado en las personas. Sevilla, España.",
    en: "UX/UI Designer. Research, information architecture and user-centred design. Seville, Spain.",
    pt: "UX/UI Designer. Pesquisa, arquitetura da informação e design centrado nas pessoas. Sevilha, Espanha.",
  };
  // Valores por defecto para /{lang} (home). Cada case study define los suyos.
  return pageMetadata({ lang, path: "", description: descs[lang] });
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: _lang } = await params;
  // Solo es/en/pt: cualquier otra ruta (p. ej. /robots.txt sin archivo) da 404 en vez de duplicar la home
  if (!LANGS.includes(_lang as Lang)) notFound();
  const lang = _lang as Lang;

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
