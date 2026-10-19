"use client";

import Image, { type ImageProps } from "next/image";
import { useEffect, useRef, useState } from "react";

type Props = ImageProps & {
  /** Texto de la pista sobre la imagen (por idioma) */
  hint?: string;
  /** Etiqueta accesible del botón de cierre (por idioma) */
  closeLabel?: string;
};

/**
 * Imagen ampliable (lightbox) para los case studies.
 * - Clic / tap → se abre a pantalla completa.
 * - En móvil se muestra a su ancho real: se lee desplazando o con pinch-zoom.
 * - Se cierra con Esc, con ✕ o tocando el fondo.
 * <dialog> nativo: foco atrapado y teclado sin librerías. Estilos en globals.css (.zi-*).
 */
export default function ZoomableImage({
  hint = "Toca para ampliar",
  closeLabel = "Cerrar",
  alt,
  style,
  ...imgProps
}: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeOnBackdrop = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) setOpen(false);
  };

  return (
    <>
      <button
        type="button"
        className="zi-trigger"
        onClick={() => setOpen(true)}
        aria-label={`${hint}: ${alt}`}
        aria-haspopup="dialog"
      >
        <Image alt={alt} style={style} {...imgProps} />
        <span className="zi-hint" aria-hidden="true">⤢ {hint}</span>
      </button>

      <dialog
        ref={dialogRef}
        className="zi-dialog"
        aria-label={alt}
        onClose={() => setOpen(false)}
        onClick={closeOnBackdrop}
      >
        <button type="button" className="zi-close" onClick={() => setOpen(false)} aria-label={closeLabel}>
          ✕
        </button>
        <div className="zi-scroll" onClick={closeOnBackdrop}>
          {open && <Image {...imgProps} alt={alt} sizes="(max-width: 768px) 1400px, 100vw" className="zi-full" />}
        </div>
      </dialog>
    </>
  );
}
