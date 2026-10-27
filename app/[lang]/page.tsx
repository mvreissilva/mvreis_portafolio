import { t, LANGS, type Lang } from "@/lib/i18n";
import Link from "next/link";
import Image from "next/image";

export function generateStaticParams() {
  return LANGS.map(lang => ({ lang }));
}

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: _lang } = await params;
  const lang = (LANGS.includes(_lang as Lang) ? _lang : "es") as Lang;
  const tr = t[lang];

  const sec: React.CSSProperties  = { paddingTop: "4.5rem" };
  const lbl: React.CSSProperties  = { fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "2.5rem", display: "block", fontFamily: "var(--font-sans)" };
  const body: React.CSSProperties = { fontSize: "0.9375rem", color: "var(--muted)", lineHeight: 1.78, fontFamily: "var(--font-sans)" };
  const hr: React.CSSProperties   = { border: "none", borderTop: "1px solid var(--border)" };

  return (
    <div style={{ maxWidth: "680px", margin: "0 auto", padding: "0 1.5rem", paddingTop: "7rem", paddingBottom: "6rem" }}>

      {/* ── HERO ── */}
      <section>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem",
                      fontSize: "0.8125rem", color: "var(--muted)", marginBottom: "2.5rem",
                      fontFamily: "var(--font-sans)" }}>
          <span className="dot-pulse" style={{ width: "7px", height: "7px", borderRadius: "50%",
                background: "#22c55e", display: "inline-block", flexShrink: 0 }} />
          {tr.hero.available}
        </div>

        <h1 style={{ fontFamily: "var(--font-serif, Georgia, serif)",
                     fontSize: "clamp(2rem,5vw,2.75rem)", lineHeight: 1.1,
                     letterSpacing: "-0.02em", color: "var(--ink)", marginBottom: "1.25rem" }}>
          {tr.hero.title1}<br />
          <span style={{ color: "var(--accent)" }}>{tr.hero.title2}</span>
        </h1>

        <p style={{ ...body, maxWidth: "560px", marginBottom: "2.25rem" }}>{tr.hero.body}</p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
          <Link href={`#work`} className="btn-primary">{tr.hero.cta} ↓</Link>
          <span style={{ display: "inline-flex", gap: "1rem", alignItems: "center", whiteSpace: "nowrap" }}>
          <a href="/assets/marcus-reis-cv.pdf" download
             className="link-muted"
             style={{ fontSize: "0.875rem", fontFamily: "var(--font-sans)" }}>
            {tr.hero.cv} ↓
          </a>
          <span style={{ color: "var(--border)" }}>·</span>
          <a href="https://linkedin.com/in/reis-marcus" target="_blank" rel="noopener noreferrer"
             className="link-muted"
             aria-label="Marcus Reis on LinkedIn (opens in new tab)"
             style={{ fontSize: "0.875rem", fontFamily: "var(--font-sans)" }}>
            {tr.contact.linkedin} ↗
          </a>
          </span>
        </div>
      </section>

      {/* ── WORK ── */}
      <section id="work" style={sec}>
        <hr style={hr} />
        <div style={{ paddingTop: "3rem" }}>
          <span style={lbl}>{tr.work.label}</span>

          {(["camperoteca", "riptide"] as const).map((slug) => {
            const p = tr.projects[slug];
            return (
              <Link key={slug} href={`/${lang}/work/${slug}`}
                    className="project-row" style={{ textDecoration: "none" }}>
                {/* Cover image */}
                <div style={{ gridColumn: "1 / -1", marginBottom: "0.75rem",
                              borderRadius: "0.5rem", overflow: "hidden",
                              aspectRatio: "16/9", position: "relative" }}>
                  <Image
                    src={p.cover}
                    alt={p.coverAlt}
                    fill
                    sizes="(max-width: 680px) 100vw, 680px"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                </div>
                <span style={{ fontSize: "0.8125rem", color: "var(--muted)",
                               paddingTop: "0.25rem", fontFamily: "var(--font-sans)" }}>
                  {p.year}
                </span>
                <div>
                  <span style={{ fontSize: "0.6875rem", letterSpacing: "0.06em",
                                 color: "var(--muted)", textTransform: "uppercase",
                                 fontFamily: "var(--font-sans)" }}>{p.tag}</span>
                  <p className="proj-title">{p.title}</p>
                  <p style={{ fontSize: "0.875rem", color: "var(--muted)", lineHeight: 1.7,
                              fontFamily: "var(--font-sans)" }}>{p.desc}</p>
                </div>
                <span className="proj-arrow">→</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={sec}>
        <hr style={hr} />
        <div style={{ paddingTop: "3rem" }}>
          <span style={lbl}>{tr.about.label}</span>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.125rem", marginBottom: "3rem" }}>
            {[tr.about.p1, tr.about.p2, tr.about.p3].map((p, i) => (
              <p key={i} style={body}>{p}</p>
            ))}
          </div>

          <div>
            {tr.about.faq.map(({ q, a }) => (
              <details key={q} style={{ borderTop: "1px solid var(--border)" }}>
                <summary style={{ display: "flex", justifyContent: "space-between",
                                  alignItems: "center", gap: "1rem", padding: "1.125rem 0",
                                  cursor: "pointer", userSelect: "none" }}>
                  <span style={{ fontSize: "0.9375rem", fontWeight: 500, color: "var(--ink)",
                                 fontFamily: "var(--font-sans)" }}>{q}</span>
                  <span style={{ color: "var(--muted)", fontSize: "1.25rem", fontWeight: 300,
                                 flexShrink: 0, lineHeight: 1 }}>+</span>
                </summary>
                <p style={{ ...body, paddingBottom: "1.25rem" }}>{a}</p>
              </details>
            ))}
            <div style={{ borderTop: "1px solid var(--border)" }} />
          </div>
        </div>
      </section>

      {/* ── ÁREAS ── */}
      <section id="skills" style={sec}>
        <hr style={hr} />
        <div style={{ paddingTop: "3rem" }}>
          <span style={lbl}>{tr.areas.label}</span>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {tr.areas.groups.map(({ title, items }) => (
              <div key={title}>
                <h3 style={{ fontSize: "0.9375rem", fontWeight: 500, color: "var(--ink)",
                             fontFamily: "var(--font-sans)", marginBottom: "0.875rem" }}>{title}</h3>
                <ul style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", listStyle: "none",
                             padding: 0, margin: 0 }}>
                  {items.map((it) => (
                    <li key={it} style={{ fontSize: "0.8125rem", lineHeight: 1.4, color: "var(--ink)",
                                          fontFamily: "var(--font-sans)", padding: "0.375rem 0.75rem",
                                          border: "1px solid var(--border)", borderRadius: "999px" }}>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={sec}>
        <hr style={hr} />
        <div style={{ paddingTop: "3rem" }}>
          <span style={lbl}>{tr.contact.label}</span>
          <h2 style={{ fontFamily: "var(--font-serif, Georgia, serif)",
                       fontSize: "clamp(1.75rem,4vw,2.5rem)", lineHeight: 1.12,
                       letterSpacing: "-0.015em", color: "var(--ink)", marginBottom: "1rem" }}>
            {tr.contact.title}
          </h2>
          <p style={{ ...body, maxWidth: "480px", marginBottom: "2rem" }}>{tr.contact.body}</p>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1.25rem" }}>
            <a href="mailto:mvreissilva@gmail.com" className="link-accent"
               aria-label="Send email to Marcus Reis"
               style={{ fontSize: "0.9375rem", fontWeight: 500, fontFamily: "var(--font-sans)" }}>
              mvreissilva@gmail.com
            </a>
            <span style={{ color: "var(--border)" }}>·</span>
            <a href="https://linkedin.com/in/reis-marcus" target="_blank" rel="noopener noreferrer"
               className="link-muted"
               aria-label="Marcus Reis on LinkedIn (opens in new tab)"
               style={{ fontSize: "0.875rem", fontFamily: "var(--font-sans)" }}>
              {tr.contact.linkedin} ↗
            </a>
            <span style={{ color: "var(--border)" }}>·</span>
            <a href="/assets/marcus-reis-cv.pdf" download className="link-muted"
               aria-label="Download Marcus Reis CV (PDF)"
               style={{ fontSize: "0.875rem", fontFamily: "var(--font-sans)" }}>
              {tr.contact.cv} ↓
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
