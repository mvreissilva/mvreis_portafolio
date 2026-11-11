"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type Props = {
  /** URL de embed de Figma (embed.figma.com/proto/…) */
  embedSrc: string;
  /** URL del prototipo en Figma, para abrirlo en una pestaña nueva */
  openHref: string;
  /** Imagen de portada mientras el prototipo no está cargado */
  poster: { src: string; w: number; h: number };
  posterAlt: string;
  /** Título accesible del iframe */
  title: string;
  loadLabel: string;
  openLabel: string;
  /** Texto oculto para lectores de pantalla: «se abre en una pestaña nueva» */
  newTabLabel: string;
  /** Proporción del frame del prototipo (ancho / alto) */
  ratio?: string;
};

const visuallyHidden: React.CSSProperties = {
  position: "absolute", width: 1, height: 1, padding: 0, margin: -1,
  overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", border: 0,
};

/**
 * Prototipo de Figma incrustado con carga bajo demanda.
 * - Hasta que la persona pulsa el botón solo se muestra una portada: el embed de Figma
 *   pesa varios MB y no debe frenar la carga del case study (sobre todo en móvil).
 * - Al cargar, el foco pasa al iframe para que el teclado siga el flujo.
 * - El enlace «Abrir en Figma» queda siempre disponible, útil en pantallas pequeñas.
 */
export default function PrototypeEmbed({
  embedSrc, openHref, poster, posterAlt, title, loadLabel, openLabel, newTabLabel, ratio = "1728 / 1117",
}: Props) {
  const [loaded, setLoaded] = useState(false);
  const frameRef = useRef<HTMLIFrameElement>(null);

  return (
    <div>
      <div
        style={{
          position: "relative", aspectRatio: ratio, borderRadius: "12px", overflow: "hidden",
          background: "#EAF1F7", border: "1px solid var(--border)",
        }}
      >
        {loaded ? (
          <iframe
            ref={frameRef}
            src={embedSrc}
            title={title}
            allowFullScreen
            onLoad={() => frameRef.current?.focus()}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
          />
        ) : (
          <>
            <Image
              src={poster.src}
              alt={posterAlt}
              fill
              sizes="(min-width: 860px) 812px, 100vw"
              style={{ objectFit: "cover", objectPosition: "top center" }}
            />
            <div
              style={{
                position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
                background: "rgba(13, 13, 13, 0.45)", padding: "1rem",
              }}
            >
              <button type="button" className="btn-primary" onClick={() => setLoaded(true)} style={{ cursor: "pointer" }}>
                {loadLabel}
              </button>
            </div>
          </>
        )}
      </div>
      <p style={{ marginTop: "0.75rem" }}>
        <a
          href={openHref}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px" }}
        >
          {openLabel} <span aria-hidden="true">↗</span>
          <span style={visuallyHidden}> {newTabLabel}</span>
        </a>
      </p>
    </div>
  );
}
