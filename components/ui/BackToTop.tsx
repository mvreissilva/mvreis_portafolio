"use client";

export default function BackToTop({ label }: { label: string }) {
  const toTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    const h1 = document.querySelector<HTMLElement>("h1");
    if (h1) {
      if (!h1.hasAttribute("tabindex")) h1.setAttribute("tabindex", "-1");
      h1.focus({ preventScroll: true });
    }
  };
  return (
    <a
      href="#top"
      onClick={toTop}
      className="link-muted"
      style={{ fontSize: "0.875rem", color: "var(--muted)", textDecoration: "none", fontFamily: "var(--font-sans)" }}
    >
      {label} <span aria-hidden="true">↑</span>
    </a>
  );
}
