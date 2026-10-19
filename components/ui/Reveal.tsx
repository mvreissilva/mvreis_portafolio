"use client";
import { useRef, useEffect, useState, type ReactNode } from "react";

/**
 * Aparece al entrar en pantalla: opacidad 0 → 1 y 16 px hacia arriba, 0,5 s ease-out.
 * Antes usaba framer-motion (~41 KB de JS); ahora es una transición CSS con el mismo efecto.
 * Con «reducir movimiento» activado, globals.css acorta la transición a 0,01 ms.
 */
export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(16px)",
        transition: `opacity 0.5s ease-out ${delay}s, transform 0.5s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
