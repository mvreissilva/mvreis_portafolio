"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { t, LANGS, type Lang } from "@/lib/i18n";

function ThemeBtn() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };
  return (
    <button onClick={toggle} aria-label="Toggle theme"
      style={{ width: "2rem", height: "2rem", display: "flex", alignItems: "center", justifyContent: "center",
               borderRadius: "50%", border: "none", background: "transparent", cursor: "pointer",
               color: "var(--muted)", fontSize: "1rem", transition: "color 0.2s" }}
      onMouseEnter={e => (e.currentTarget.style.color = "var(--ink)")}
      onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}>
      {dark ? "○" : "●"}
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
    if (!path.endsWith(`/${lang}`)) return;
    e.preventDefault(); setOpen(false);
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
    transition: "color 0.2s", padding: "0.25rem 0",
  };

  return (
    <header style={navStyle}>
      <div style={{ maxWidth: "680px", margin: "0 auto", padding: "0 1.5rem", height: "3.5rem",
                    display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <Link href={`/${lang}`} style={{ fontFamily: "var(--font-serif, Georgia, serif)", fontSize: "1rem",
          color: "var(--ink)", textDecoration: "none", letterSpacing: "-0.01em", fontWeight: 400 }}>
          Marcus Reis
        </Link>

        {/* Desktop */}
        <nav style={{ display: "flex", alignItems: "center", gap: "1.75rem" }}
             className="hidden-mobile">
          {(["work","about","skills","contact"] as const).map(k => (
            <a key={k} href={`#${k}`} onClick={e => go(e, k)} style={linkStyle}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--ink)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}>
              {tr[k]}
            </a>
          ))}

          {/* Lang switcher */}
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginLeft: "0.5rem" }}>
            {LANGS.map(l => (
              <Link key={l} href={`/${l}`}
                style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.04em",
                         color: l === lang ? "var(--ink)" : "var(--muted)",
                         textDecoration: "none", transition: "color 0.2s",
                         textTransform: "uppercase" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--ink)")}
                onMouseLeave={e => (e.currentTarget.style.color = l === lang ? "var(--ink)" : "var(--muted)")}>
                {l}
              </Link>
            ))}
          </div>
          <ThemeBtn />
        </nav>

        {/* Mobile */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
             className="show-mobile">
          <div style={{ display: "flex", gap: "0.5rem" }}>
            {LANGS.map(l => (
              <Link key={l} href={`/${l}`}
                style={{ fontSize: "0.6875rem", fontWeight: 500, letterSpacing: "0.04em",
                         color: l === lang ? "var(--ink)" : "var(--muted)",
                         textDecoration: "none", textTransform: "uppercase" }}>
                {l}
              </Link>
            ))}
          </div>
          <ThemeBtn />
          <button onClick={() => setOpen(!open)} aria-label="Menu"
            style={{ background: "transparent", border: "none", cursor: "pointer",
                     display: "flex", flexDirection: "column", gap: "5px", padding: "4px" }}>
            <span style={{ display: "block", width: "20px", height: "1.5px", background: "var(--ink)",
                           transition: "all 0.2s", transform: open ? "rotate(45deg) translate(4.5px,4.5px)" : "" }} />
            <span style={{ display: "block", width: "20px", height: "1.5px", background: "var(--ink)",
                           transition: "all 0.2s", opacity: open ? 0 : 1 }} />
            <span style={{ display: "block", width: "20px", height: "1.5px", background: "var(--ink)",
                           transition: "all 0.2s", transform: open ? "rotate(-45deg) translate(4.5px,-4.5px)" : "" }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "var(--bg)", borderTop: "1px solid var(--border)",
                      padding: "1.25rem 1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {(["work","about","skills","contact"] as const).map(k => (
            <a key={k} href={`#${k}`} onClick={e => go(e, k)}
              style={{ fontSize: "0.9375rem", color: "var(--muted)", textDecoration: "none" }}>
              {tr[k]}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 640px) { .hidden-mobile { display: flex !important; } .show-mobile { display: none !important; } }
        @media (max-width: 639px) { .hidden-mobile { display: none !important; } .show-mobile { display: flex !important; } }
      `}</style>
    </header>
  );
}
