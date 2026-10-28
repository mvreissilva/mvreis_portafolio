import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  experimental: {
    // CSS en línea en el HTML: elimina la hoja de estilos que bloquea el renderizado en móvil
    inlineCss: true,
  },
  images: {
    // 90 para las capturas de pantalla dentro de los marcos de iPhone
    qualities: [75, 90],
  },
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
