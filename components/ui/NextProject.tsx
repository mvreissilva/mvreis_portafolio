import Link from "next/link";
import Image from "next/image";
import { t, LANGS, type Lang } from "@/lib/i18n";

const LABEL: Record<Lang, string> = {
  es: "Siguiente proyecto",
  en: "Next project",
  pt: "Próximo projeto",
};

/**
 * Tarjeta "Siguiente proyecto" al final de cada case study.
 * Recorre la lista de proyectos de lib/i18n en orden y vuelve al primero al llegar al final.
 */
export default function NextProject({ lang: rawLang, current }: { lang: string; current: string }) {
  const lang: Lang = (LANGS as readonly string[]).includes(rawLang) ? (rawLang as Lang) : "es";
  const projects = t[lang].projects as Record<string, { title: string; tag: string; cover: string }>;
  const slugs = Object.keys(projects);
  if (slugs.length < 2) return null;
  const i = slugs.indexOf(current);
  const slug = slugs[(i + 1) % slugs.length];
  const p = projects[slug];

  return (
    <Link
      href={`/${lang}/work/${slug}`}
      className="next-project"
      aria-label={`${LABEL[lang]}: ${p.title}`}
    >
      <span className="next-project__thumb">
        <Image src={p.cover} alt="" fill sizes="(max-width: 640px) 100vw, 280px" style={{ objectFit: "cover" }} />
      </span>
      <span className="next-project__body">
        <span className="next-project__label">{LABEL[lang]}</span>
        <span className="next-project__title">{p.title}</span>
        <span className="next-project__tag">{p.tag}</span>
      </span>
      <span className="next-project__arrow" aria-hidden="true">→</span>
    </Link>
  );
}
