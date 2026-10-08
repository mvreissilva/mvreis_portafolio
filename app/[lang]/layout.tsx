import { type Lang, LANGS } from "@/lib/i18n";
import Nav from "@/components/layout/Nav";

export function generateStaticParams() {
  return LANGS.map(lang => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const validLang = (LANGS.includes(lang as Lang) ? lang : "es") as Lang;

  return (
    <div lang={validLang}>
      <Nav lang={validLang} />
      <main>{children}</main>
      <footer style={{ borderTop:"1px solid var(--border)", marginTop:"6rem", padding:"1.75rem 1.5rem" }}>
        <div style={{ maxWidth:"680px", margin:"0 auto", display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:"0.5rem" }}>
          <span style={{ fontSize:"0.8125rem", color:"var(--muted)", fontFamily:"var(--font-sans)" }}>Marcus Reis · UX/UI Designer</span>
          <span style={{ fontSize:"0.8125rem", color:"var(--muted)", fontFamily:"var(--font-sans)" }}>© 2025</span>
        </div>
      </footer>
    </div>
  );
}
