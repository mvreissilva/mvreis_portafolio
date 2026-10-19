import Image from "next/image";

/**
 * Marco de iPhone (titanio naranja, bisel fino, botones laterales) para las pantallas del case study.
 * Las capturas son de 860×1864 (430×932 pt @2x) y ya incluyen status bar, Dynamic Island
 * e indicador de inicio. Sin `src`, muestra un marco vacío con la isla y el nombre de la pantalla.
 *
 * Proporciones: canto 1,5 % y bisel 2,2 % del ancho; pantalla 430:932.
 */
const RING = 0.015;
const BEZEL = 0.022;
const SCREEN_RATIO = 932 / 430;
const INNER = 1 - 2 * (RING + BEZEL);
const FRAME_RATIO = INNER * SCREEN_RATIO + 2 * (RING + BEZEL); // alto / ancho

const pct = (n: number) => `${(n * 100).toFixed(3)}%`;

export default function PhoneFrame({
  src,
  alt,
  label,
  width = "min(220px, 100%)",
}: {
  src?: string;
  alt: string;
  label: string;
  width?: string;
}) {
  // radios relativos al ancho del marco (container query units)
  const outerR = "15.2cqw";
  const bezelR = `calc(15.2cqw - ${RING * 100}cqw)`;
  const screenR = `calc(15.2cqw - ${(RING + BEZEL) * 100}cqw)`;

  return (
    <div style={{ width, containerType: "inline-size", position: "relative" }}>
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: `1 / ${FRAME_RATIO}`,
          borderRadius: outerR,
          padding: pct(RING),
          isolation: "isolate",
          // canto de titanio: brillo en esquinas, tono más profundo en los laterales
          background:
            "linear-gradient(135deg,#f6a05a 0%,#d9661f 18%,#b84d16 42%,#e07b2e 58%,#c45618 80%,#f0914a 100%)",
          boxShadow:
            "0 1px 0 rgba(255,255,255,.35) inset, 0 -1px 0 rgba(0,0,0,.25) inset, 0 24px 48px -12px rgba(60,30,10,.35), 0 8px 18px -8px rgba(0,0,0,.25)",
        }}
      >
        {/* botones laterales */}
        <span aria-hidden style={btn("left", "17%", "5.5%")} />
        <span aria-hidden style={btn("left", "25%", "10%")} />
        <span aria-hidden style={btn("left", "37%", "10%")} />
        <span aria-hidden style={btn("right", "28%", "15%")} />

        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: bezelR,
            padding: `${BEZEL * 100}cqw`,
            background: "#0a0a0a",
            boxShadow: "0 0 0 1px rgba(0,0,0,.35) inset",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              borderRadius: screenR,
              overflow: "hidden",
              background: "var(--surface)",
              isolation: "isolate",
            }}
          >
            {src ? (
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 640px) 60vw, 220px"
                quality={90}
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
            ) : (
              <>
                <span
                  aria-hidden
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "2.5%",
                    width: "29.3%",
                    height: "3.9%",
                    transform: "translateX(-50%)",
                    borderRadius: "999px",
                    background: "#000",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "5cqw",
                    color: "var(--muted)",
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  {label}
                </span>
              </>
            )}
            {/* reflejo sutil del cristal */}
            <span
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                background: "linear-gradient(155deg, rgba(255,255,255,.10) 0%, rgba(255,255,255,0) 28%)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function btn(side: "left" | "right", top: string, height: string): React.CSSProperties {
  return {
    position: "absolute",
    [side]: "-0.9cqw",
    top,
    width: "1.3cqw",
    height,
    borderRadius: side === "left" ? "1cqw 0 0 1cqw" : "0 1cqw 1cqw 0",
    background: "linear-gradient(90deg,#a9461a,#e88a45 50%,#b5501b)",
    zIndex: -1,
  };
}
