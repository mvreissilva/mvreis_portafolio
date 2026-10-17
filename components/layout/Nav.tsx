"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { t, LANGS, type Lang } from "@/lib/i18n";

/* ── SVG Icons ── */
const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
       aria-hidden="true">
    <circle cx="12" cy="12" r="4"/>
    <line x1="12" y1="2"  x2="12" y2="4"/>
    <line x1="12" y1="20" x2="12" y2="22"/>
    <line x1="4.22"  y1="4.22"  x2="5.64"  y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="2"  y1="12" x2="4"  y2="12"/>
    <line x1="20" y1="12" x2="22" y2="12"/>
    <line x1="4.22"  y1="19.78" x2="5.64"  y2="18.36"/>
    <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"/>
  </svg>
);

const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
       aria-hidden="true">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

const themeLabels: Record<Lang, { light: string; dark: string }> = {
  es: { light: "Activar modo claro", dark: "Activar modo oscuro" },
  en: { light: "Switch to light mode", dark: "Switch to dark mode" },
  pt: { light: "Ativar modo claro", dark: "Ativar modo escuro" },
};

const menuLabels: Record<Lang, { open: string; close: string }> = {
  es: { open: "Abrir menú", close: "Cerrar menú" },
  en: { open: "Open menu", close: "Close menu" },
  pt: { open: "Abrir menu", close: "Fechar menu" },
};

function ThemeBtn({ lang }: { lang: Lang }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch {}
  };

  const labels = themeLabels[lang] ?? themeLabels.es;

  return (
    <button
      onClick={toggle}
      aria-label={dark ? labels.light : labels.dark}
      title={dark ? labels.light : labels.dark}
      style={{
        width: "2rem", height: "2rem", display: "flex", alignItems: "center",
        justifyContent: "center", borderRadius: "50%", border: "none",
        background: "transparent", cursor: "pointer", color: "var(--muted)",
        transition: "color 0.2s",
      }}
    >
      {dark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

export default function Nav({ lang }: { lang: Lang }) {
  const tr = t[lang].nav;
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const isLangRoot = path === `/${lang}` || path === `/${lang}/`;
    if (!isLangRoot) return;
    e.preventDefault();
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navStyle: React.CSSProperties = {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
    transition: "all 0.25s",
    background: scrolled ? "color-mix(in srgb, var(--bg) 92%, transparent)" : "transparent",
    backdropFilter: scrolled ? "blur(12px)" : "none",
    borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
  };

  const linkStyle: React.CSSProperties = {
    fontSize: "0.875rem", color: "var(--muted)", textDecoration: "none",
    transition: "color 0.2s", padding: "0.25rem 0", fontFamily: "var(--font-sans)",
  };

  const logoStyle: React.CSSProperties = {
    fontFamily: "var(--font-serif, Georgia, serif)",
    fontSize: "1.175rem",
    color: "var(--ink)",
    textDecoration: "none",
    letterSpacing: "-0.015em",
    fontWeight: 400,
    lineHeight: 1,
  };

  const langBtnStyle = (active: boolean): React.CSSProperties => ({
    fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.04em",
    color: active ? "var(--ink)" : "var(--muted)",
    textDecoration: "none", transition: "color 0.2s",
    textTransform: "uppercase", fontFamily: "var(--font-sans)",
  });

  const navKeys = [
    { key: "work",    id: "work"    },
    { key: "about",   id: "about"   },
    { key: "skills",  id: "skills"  },
    { key: "contact", id: "contact" },
  ] as const;

  return (
    <header style={navStyle}>
      <div style={{
        maxWidth: "680px", margin: "0 auto", padding: "0 1.5rem",
        height: "3.5rem", display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <Link href={`/${lang}`} style={logoStyle}>Marcus Reis</Link>

        {/* Desktop */}
        <nav style={{ display: "flex", alignItems: "center", gap: "1.75rem" }}
             className="hidden-mobile">
          {navKeys.map(({ key, id }) => (
            <a key={key} href={`#${id}`} onClick={e => go(e, id)} style={linkStyle}>
              {(tr as Record<string, string>)[key]}
            </a>
          ))}
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginLeft: "0.5rem" }}>
            {LANGS.map(l => (
              <Link key={l} href={`/${l}`} style={langBtnStyle(l === lang)}
                aria-label={l === "es" ? "Español" : l === "en" ? "English" : "Português"}
                aria-current={l === lang ? "page" : undefined}
              >{l.toUpperCase()}</Link>
            ))}
          </div>
          <ThemeBtn lang={lang} />
        </nav>

        {/* Mobile */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
             className="show-mobile">
          <div style={{ display: "flex", gap: "0.5rem" }}>
            {LANGS.map(l => (
              <Link key={l} href={`/${l}`} style={langBtnStyle(l === lang)}
                aria-label={l === "es" ? "Español" : l === "en" ? "English" : "Português"}
                aria-current={l === lang ? "page" : undefined}
              >{l.toUpperCase()}</Link>
            ))}
          </div>
          <ThemeBtn lang={lang} />
          <button onClick={() => setOpen(!open)} aria-label={open ? (menuLabels[lang]?.close ?? "Cerrar menú") : (menuLabels[lang]?.open ?? "Abrir menú")}
            style={{ background: "transparent", border: "none", cursor: "pointer",
                     display: "flex", flexDirection: "column", gap: "5px", padding: "4px" }}>
            <span style={{ display: "block", width: "20px", height: "1.5px", background: "var(--ink)",
                           transition: "all 0.2s",
                           transform: open ? "rotate(45deg) translate(4.5px,4.5px)" : "" }} />
            <span style={{ display: "block", width: "20px", height: "1.5px", background: "var(--ink)",
                           transition: "all 0.2s", opacity: open ? 0 : 1 }} />
            <span style={{ display: "block", width: "20px", height: "1.5px", background: "var(--ink)",
                           transition: "all 0.2s",
                           transform: open ? "rotate(-45deg) translate(4.5px,-4.5px)" : "" }} />
          </button>
        </div>
      </div>

      {open && (
        <div style={{ background: "var(--bg)", borderTop: "1px solid var(--border)",
                      padding: "1.25rem 1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {navKeys.map(({ key, id }) => (
            <a key={key} href={`#${id}`} onClick={e => go(e, id)}
               style={{ fontSize: "0.9375rem", color: "var(--muted)", textDecoration: "none",
                        fontFamily: "var(--font-sans)" }}>
              {(tr as Record<string, string>)[key]}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 640px) { .hidden-mobile{display:flex!important} .show-mobile{display:none!important} }
        @media (max-width: 639px) { .hidden-mobile{display:none!important} .show-mobile{display:flex!important} }
      `}</style>
    </header>
  );
}
