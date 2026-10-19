import type { MetadataRoute } from "next";
import { LANGS } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";

const PAGES = [
  { path: "", priority: 1 },
  { path: "/work/camperoteca", priority: 0.8 },
  { path: "/work/riptide", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.flatMap(({ path, priority }) =>
    LANGS.map((lang) => ({
      url: `${SITE_URL}/${lang}${path}`,
      changeFrequency: "monthly" as const,
      priority,
      alternates: {
        languages: Object.fromEntries(LANGS.map((l) => [l, `${SITE_URL}/${l}${path}`])),
      },
    })),
  );
}
