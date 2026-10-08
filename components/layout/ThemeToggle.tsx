"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = saved === "dark" || (!saved && prefersDark);
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };
  return (
    <button onClick={toggle} aria-label={dark ? "Activar modo claro" : "Activar modo oscuro"}
      className="w-8 h-8 rounded-full flex items-center justify-center text-[rgb(var(--muted))] hover:text-[rgb(var(--ink))] hover:bg-[rgb(var(--surface))] transition-all duration-200 text-sm"
      title={dark ? "Modo claro" : "Modo oscuro"}>
      {dark ? "☀︎" : "☾"}
    </button>
  );
}
