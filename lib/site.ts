import type { Metadata } from "next";
import type { Lang } from "@/lib/i18n";

/** Dominio público del portfolio. Cambiar aquí si algún día hay dominio propio. */
export const SITE_URL = "https://mvreisuxportafolio.vercel.app";

export const SITE_NAME = "Marcus Reis";

export const OG_LOCALE: Record<Lang, string> = {
  es: "es_ES",
  en: "en_US",
  pt: "pt_BR",
};

const OG_IMAGE = {
  url: "/assets/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Marcus Reis — UX/UI Designer",
};

/**
 * Metadatos de una página localizada: canonical, hreflang, Open Graph y Twitter.
 * Next.js combina los metadatos de layout y página de forma superficial
 * (un `openGraph` en la página sustituye entero al del layout), por eso
 * se generan aquí completos, con imagen incluida.
 */
export function pageMetadata({
  lang,
  path,
  title,
  description,
  ogTitle,
}: {
  lang: Lang;
  /** Ruta sin idioma, p. ej. "" para la home o "/work/camperoteca" */
  path: string;
  title?: Metadata["title"];
  description: string;
  /** Título para redes; por defecto `${title} · Marcus Reis` */
  ogTitle?: string;
}): Metadata {
  const url = (l: string) => `${SITE_URL}/${l}${path}`;
  const shareTitle =
    ogTitle ?? (typeof title === "string" ? `${title} · ${SITE_NAME}` : `${SITE_NAME} — UX/UI Designer`);

  return {
    ...(title ? { title } : {}),
    description,
    alternates: {
      canonical: url(lang),
      languages: { es: url("es"), en: url("en"), pt: url("pt"), "x-default": url("es") },
    },
    openGraph: {
      title: shareTitle,
      description,
      url: url(lang),
      siteName: SITE_NAME,
      locale: OG_LOCALE[lang],
      type: path ? "article" : "website",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
