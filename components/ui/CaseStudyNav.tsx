"use client";
import { useEffect, useRef, useState } from "react";

interface Section {
  id: string;
  label: string;
}

export default function CaseStudyNav({ sections }: { sections: Section[] }) {
  const [active, setActive] = useState<string>("");
  const [visible, setVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  /* Show bar only after hero leaves viewport */
  useEffect(() => {
    const hero = document.getElementById("cs-hero");
    if (!hero) return;
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    obs.observe(hero);
    return () => obs.disconnect();
  }, []);

  /* Track active section */
  useEffect(() => {
    observerRef.current?.disconnect();
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, [sections]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        aria-label="Secciones del case study"
        style={{
          position: "fixed",
          top: "3.5rem",
          left: 0,
          right: 0,
          zIndex: 49,
          background: "color-mix(in srgb, var(--bg) 96%, transparent)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border)",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(-8px)",
          transition: "opacity 0.25s ease, transform 0.25s ease",
          pointerEvents: visible ? "auto" : "none",
        }}
        className="cs-nav"
      >
        <div
          style={{
            maxWidth: "860px",
            margin: "0 auto",
            padding: "0 1.5rem",
            height: "2.625rem",
            display: "flex",
            alignItems: "center",
            gap: "0",
            overflowX: "auto",
            scrollbarWidth: "none",
          }}
        >
          {sections.map(({ id, label }, i) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0 0.55rem",
                height: "100%",
                fontSize: "0.6rem",
                fontWeight: 600,
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                fontFamily: "var(--font-sans)",
                color: active === id ? "var(--ink)" : "var(--muted)",
                borderBottom: active === id
                  ? "2px solid var(--accent)"
                  : "2px solid transparent",
                transition: "color 0.2s, border-color 0.2s",
                whiteSpace: "nowrap",
                flexShrink: 0,
                /* first item flush left */
                paddingLeft: i === 0 ? "0" : "0.55rem",
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </nav>

      <style>{`
        .cs-nav::-webkit-scrollbar { display: none; }
        @media (max-width: 480px) { .cs-nav { display: none !important; } }
      `}</style>
    </>
  );
}
