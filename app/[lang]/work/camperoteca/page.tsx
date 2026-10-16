import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

interface Props {
  params: Promise<{ lang: string }>;
}

export async function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }, { lang: "pt" }];
}

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  const titles: Record<string, string> = {
    es: "Camperoteca — Case Study · Marcus Reis",
    en: "Camperoteca — Case Study · Marcus Reis",
    pt: "Camperoteca — Case Study · Marcus Reis",
  };
  const descs: Record<string, string> = {
    es: "Diseño UX/UI end-to-end de una plataforma para acompañar a personas durante la planificación de su proyecto de camperización.",
    en: "End-to-end UX/UI design of a platform to guide people through the planning of their camper van conversion project.",
    pt: "Design UX/UI end-to-end de uma plataforma para acompanhar pessoas durante o planejamento de seu projeto de camperização.",
  };
  return {
    title: titles[lang] ?? titles.es,
    description: descs[lang] ?? descs.es,
  };
}

/* ─── copy strings ─────────────────────────────────────────────── */
const copy = {
  es: {
    back: "Volver",
    tag1: "UX/UI Designer · End-to-End",
    tag2: "Proyecto académico · Bootcamp NEOLAND",
    tag3: "Oct 2025 – Abr 2026",
    tag4: "Responsive · Mobile First",
    tag5: "Figma · FigJam · Figma Make · Stitch",
    heroTitle: "Camperoteca",
    heroSub: "convertir un proceso complejo en un recorrido claro",
    heroDesc:
      "Diseño de una plataforma digital para acompañar a las personas durante la planificación de su proyecto de camperización.",
    meta_rol: "Rol",
    meta_tipo: "Tipo de proyecto",
    meta_tools: "Herramientas",
    meta_dur: "Duración",

    /* 02 */
    prob_label: "Problema y oportunidad",
    prob_title: "Un proceso sin guía",
    prob_body:
      "Camperizar una furgoneta es un proyecto técnico, económico y legal complejo. Sin embargo, quienes se inician en este mundo se enfrentan a información fragmentada distribuida entre foros, canales de YouTube y grupos de redes sociales: sin orden, sin criterio de calidad y sin contexto sobre en qué fase del proyecto aplicar cada recurso.",
    prob_opp:
      "La oportunidad estaba clara: diseñar una experiencia que centralizara el conocimiento, estructurara el recorrido del usuario y le acompañara en cada etapa del proceso, desde la primera decisión hasta el montaje final.",

    /* 03 */
    research_label: "UX Research",
    research_title: "Investigar antes de diseñar",
    research_body:
      "Antes de proponer ninguna solución, llevé a cabo una investigación mixta para entender quiénes eran los usuarios, qué hacían y dónde encontraban dificultades.",

    /* 04 */
    insight_label: "Insight y persona",
    insight_title: "Lo que realmente necesitaban",
    insight_quote:
      "Los usuarios no necesitan más información, sino una estructura clara, acompañamiento y confianza para poder avanzar en su proyecto.",
    persona_name: "Blanca Jiménez, 38 años",
    persona_tag: "«La Exploradora»",
    persona_desc:
      "Psicóloga en Pamplona. Le interesa la sostenibilidad y la economía colaborativa. Quiere iniciarse en el mundo camper de forma responsable: aprender antes de camperizar y conectar con personas con intereses similares.",
    goals_title: "Objetivos",
    goals: [
      "Empezar de forma sostenible y responsable.",
      "Aprender antes de tomar decisiones económicas.",
      "Conectar con otras personas en el mismo proceso.",
    ],
    frusts_title: "Frustraciones",
    frusts: [
      "No saber por dónde empezar.",
      "Información dispersa y sin contexto.",
      "Miedo a gastar dinero en soluciones que no funcionen.",
    ],

    /* 05 */
    hmw_label: "How Might We",
    hmw_title: "Del problema a la oportunidad",
    hmw_rows: [
      {
        prob: "Información fragmentada en múltiples fuentes",
        opp: "Centralizar y estructurar en un solo lugar",
        dec: "Dashboard con fases ordenadas",
      },
      {
        prob: "Sin referencia de progreso en el proyecto",
        opp: "Hacer visible el avance paso a paso",
        dec: "Planificador con etapas y checklist",
      },
      {
        prob: "Guías dispersas en YouTube, foros y redes; el usuario no sabe por dónde empezar",
        opp: "Estructurar el conocimiento por tipo y fase del proyecto",
        dec: "Guías técnicas, legales y casos reales",
      },
      {
        prob: "Herramientas y materiales requieren compra definitiva o búsqueda externa",
        opp: "Facilitar el acceso y localización de recursos cercanos",
        dec: "Directorio filtrable por categoría",
      },
      {
        prob: "Comunidad valiosa pero caótica e infiable",
        opp: "Organizar por contexto, fase y reputación",
        dec: "Foro estructurado con validación",
      },
    ],
    hmw_col1: "Problema",
    hmw_col2: "Oportunidad",
    hmw_col3: "Decisión de diseño",

    /* 06 */
    arch_label: "Arquitectura de información",
    arch_title: "Estructura de navegación y recorrido principal",
    arch_body:
      "La secuencia óptima que recorre un usuario nuevo: desde la Home y el Onboarding hasta el acceso a las cuatro áreas principales de la plataforma. Mi Proyecto es el hub central; Aprende, Encuentra y Comunidad lo complementan con contenido, recursos y conexión.",
    mvp_title: "Alcance del MVP",
    mvp_inc: [
      "Mi Proyecto: planificador por etapas con progreso y siguiente paso.",
      "Aprende: guías técnicas, legales y casos reales.",
      "Encuentra: directorio de herramientas y materiales.",
      "Onboarding personalizado para nuevos usuarios.",
    ],
    mvp_post: [
      "Comunidad: foro y grupos de usuarios.",
      "Marketplace de materiales sobrantes.",
      "Notificaciones y recordatorios por etapa.",
    ],
    mvp_inc_label: "Incluido en MVP",
    mvp_post_label: "Pospuesto",

    /* 07 */
    wf_label: "Wireframes",
    wf_title: "De la estructura al diseño final",
    wf_body:
      "El proceso de wireframing avanzó desde una estructura funcional en baja fidelidad hasta la definición visual en alta fidelidad. Cada iteración permitió validar la jerarquía de la información, la navegación y la coherencia entre secciones antes de avanzar al diseño de interfaz.",

    /* 08 */
    ds_label: "UI Design & Design System",
    ds_title: "«Cosecha Solar»",
    ds_body:
      "El nombre no es accidental. El universo camper evoca naturaleza, movimiento y luz. El sistema visual de Camperoteca parte de esa referencia para construir una identidad reconocible, cálida y funcional.",
    ds_colors: [
      { hex: "#E07B00", name: "Primario", role: "Energía, acción, orientación" },
      { hex: "#6B7A1A", name: "Secundario", role: "Naturaleza, confianza" },
      { hex: "#F5E642", name: "Acento", role: "Destacados, progreso" },
      { hex: "#FDFBF5", name: "Background", role: "Calidez, legibilidad" },
    ],
    ds_type_label: "Tipografía",
    ds_fonts: [
      { name: "Roboto", role: "Titulares — estructura y jerarquía" },
      { name: "DM Sans", role: "Body/UI — claridad y modernidad" },
    ],

    /* 09 */
    ui_label: "UI Design",
    ui_title: "La solución final",
    ui_body:
      "La interfaz de Camperoteca toma como referencia visual el mundo camper: colores cálidos y terrosos, tipografía legible y un lenguaje visual que transmite calma y orientación. El diseño prioriza la claridad sobre la decoración.",
    ui_miproyecto_title: "Mi Proyecto",
    ui_miproyecto_body:
      "El hub central de la plataforma muestra la etapa actual, el progreso general y el siguiente paso recomendado. Reduce la incertidumbre y mantiene al usuario orientado en todo momento.",
    ui_aprende_title: "Aprende",
    ui_aprende_body:
      "Organiza el conocimiento en tres categorías: guías técnicas (sistemas eléctricos, aislamiento, carpintería), guías legales (homologaciones, ITV, normativa) y casos reales de otros usuarios.",
    ui_encuentra_title: "Encuentra Recursos",
    ui_encuentra_body:
      "Directorio de herramientas y materiales para la camperización, organizado por categoría para facilitar la localización de lo que se necesita en cada fase del proyecto.",
    ui_login_title: "Login",
    ui_login_body:
      "Acceso directo y sin fricción. El usuario entra con email y contraseña para continuar donde lo dejó.",
    ui_comunidad_title: "Comunidad",
    ui_comunidad_body:
      "Conecta con otros camperos. Pregunta, responde y encuentra usuarios cercanos con herramientas o conocimiento.",
    ui_mockup_alt: "Vista general de la aplicación Camperoteca mostrando la pantalla principal Mi Proyecto con el planificador por etapas",

    /* 09 */
    learn_label: "Aprendizajes",
    learn_title: "Qué me llevo de este proyecto",
    learns: [
      "Diseñar para la incertidumbre: los usuarios no saben lo que no saben. La clave fue diseñar para reducir esa incertidumbre antes de que el usuario la sienta.",
      "La información de progreso es motivadora: mostrar en qué etapa está el usuario y cuánto ha avanzado tiene un impacto directo en su disposición a continuar.",
      "Centralizar no basta: la estructura y el contexto son tan importantes como tener el recurso disponible. Un recurso sin contexto no ayuda.",
      "La comunidad como recurso de diseño: las personas valoran compartir experiencias con otros en el mismo proceso, no solo consumir contenido experto.",
    ],
    next_title: "Próximas iteraciones",
    nexts: [
      "Evaluar la comprensión del flujo principal con usuarios reales mediante pruebas de usabilidad.",
      "Validar la utilidad del 'siguiente paso recomendado' como mecanismo de orientación.",
      "Explorar la incorporación de la sección Comunidad en el MVP.",
      "Iterar el onboarding en base a patrones de uso reales.",
    ],
    proto_cta: "Ver prototipo en Figma",
    back_projects: "← Volver a proyectos",
  },
};

const C = copy.es; // single-lang for now; extend if needed

/* ─── helpers ──────────────────────────────────────────────────── */
function Label({ text }: { text: string }) {
  return (
    <span
      style={{
        fontSize: "0.7rem",
        fontWeight: 600,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "var(--accent)",
      }}
    >
      {text}
    </span>
  );
}

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <Label text={label} />
      <h2
        style={{
          fontFamily: "'DM Serif Display', Georgia, serif",
          fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
          fontWeight: 400,
          lineHeight: 1.2,
          marginTop: "0.4rem",
          color: "var(--ink)",
        }}
      >
        {title}
      </h2>
    </div>
  );
}

/* ─── page ──────────────────────────────────────────────────────── */
export default async function CamperotecaPage({ params }: Props) {
  const { lang } = await params;

  const maxW = "860px";
  const section: React.CSSProperties = {
    maxWidth: maxW,
    margin: "0 auto",
    padding: "5rem 1.5rem",
    borderBottom: "1px solid var(--border)",
  };
  const sectionLast: React.CSSProperties = {
    ...section,
    borderBottom: "none",
  };

  return (
    <main style={{ background: "var(--bg)", color: "var(--ink)" }}>
      {/* ── BACK LINK ── */}
      <div style={{ maxWidth: maxW, margin: "0 auto", padding: "2rem 1.5rem 0" }}>
        <Link
          href={`/${lang}`}
          style={{
            fontSize: "0.8rem",
            fontWeight: 500,
            color: "var(--muted)",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            border: "1px solid var(--border)",
            borderRadius: "6px",
            padding: "0.35rem 0.75rem",
            transition: "color 0.15s, border-color 0.15s",
          }}
          aria-label="Volver a proyectos"
        >
          <span aria-hidden="true">←</span> {C.back}
        </Link>
      </div>

      {/* ── 01 HERO ── */}
      <section style={section}>
        <Reveal>
          <Label text="Case Study" />
          <h1
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
              fontWeight: 400,
              lineHeight: 1.1,
              marginTop: "0.5rem",
              marginBottom: "1rem",
              color: "var(--ink)",
            }}
          >
            {C.heroTitle}
          </h1>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "var(--muted)",
              maxWidth: "580px",
              marginBottom: "3rem",
            }}
          >
            {C.heroDesc}
          </p>

          {/* Project meta cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1rem",
              marginBottom: "0",
            }}
            className="meta-grid"
          >
            {[
              { label: C.meta_rol, value: "UX/UI Designer · End-to-End" },
              { label: C.meta_tipo, value: "Proyecto académico · Bootcamp NEOLAND" },
              { label: C.meta_tools, value: "Figma · FigJam · Figma Make · Stitch" },
              { label: C.meta_dur, value: "Oct 2025 – Abr 2026" },
            ].map(({ label, value }) => (
              <div
                key={label}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "10px",
                  padding: "1rem 1.1rem",
                }}
              >
                <p
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                  }}
                >
                  {label}
                </p>
                <p style={{ fontSize: "0.8rem", lineHeight: 1.5, color: "var(--ink)" }}>{value}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── 02 PROBLEMA ── */}
      <section style={section}>
        <Reveal>
          <SectionHeading label={C.prob_label} title={C.prob_title} />
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--muted)", marginBottom: "1.25rem" }}>
            {C.prob_body}
          </p>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--ink)" }}>
            {C.prob_opp}
          </p>
        </Reveal>
      </section>

      {/* ── 03 RESEARCH ── */}
      <section style={section}>
        <Reveal>
          <SectionHeading label={C.research_label} title={C.research_title} />
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--muted)", marginBottom: "2.5rem" }}>
            {C.research_body}
          </p>
        </Reveal>

        {/* Métodos row */}
        <Reveal delay={0.1}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "0",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              overflow: "hidden",
              marginBottom: "2rem",
            }}
          >
            {[
              { num: "34", label: "encuestas realizadas" },
              { num: "8", label: "entrevistas en profundidad" },
              { num: "3", label: "plataformas analizadas" },
            ].map(({ num, label }, i) => (
              <div
                key={num}
                style={{
                  padding: "2rem 1.5rem",
                  background: "var(--surface)",
                  borderLeft: i > 0 ? "1px solid var(--border)" : "none",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontFamily: "'DM Serif Display', Georgia, serif",
                    fontSize: "clamp(2.2rem, 5vw, 3rem)",
                    fontWeight: 400,
                    color: "var(--accent)",
                    lineHeight: 1,
                    marginBottom: "0.5rem",
                  }}
                >
                  {num}
                </p>
                <p style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.4 }}>{label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Hallazgos cuantitativos grid */}
        <Reveal delay={0.15}>
          <p
            style={{
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: "1rem",
            }}
          >
            Hallazgos cuantitativos
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "1rem",
              marginBottom: "1.5rem",
            }}
          >
            {[
              { pct: "72%", label: "no saben por dónde empezar su proyecto" },
              { pct: "68%", label: "consultan múltiples fuentes para resolver una sola duda" },
              { pct: "54%", label: "han cometido o temen errores con impacto económico real" },
              { pct: "61%", label: "preferirían ayuda de otros usuarios durante el proceso" },
            ].map(({ pct, label }) => (
              <div
                key={pct + label}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  padding: "1.5rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "'DM Serif Display', Georgia, serif",
                    fontSize: "clamp(2rem, 4vw, 2.6rem)",
                    fontWeight: 400,
                    color: "var(--ink)",
                    lineHeight: 1,
                    marginBottom: "0.6rem",
                  }}
                >
                  {pct}
                </p>
                <p style={{ fontSize: "0.875rem", color: "var(--muted)", lineHeight: 1.5 }}>{label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── 04 INSIGHT + PERSONA ── */}
      <section style={section}>
        <Reveal>
          <SectionHeading label={C.insight_label} title={C.insight_title} />

          {/* Insight quote */}
          <blockquote
            style={{
              borderLeft: "3px solid var(--accent)",
              paddingLeft: "1.25rem",
              marginBottom: "3rem",
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(1.1rem, 2.2vw, 1.35rem)",
              lineHeight: 1.5,
              color: "var(--ink)",
              fontStyle: "italic",
            }}
          >
            {C.insight_quote}
          </blockquote>

          {/* Persona card */}
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              padding: "2rem",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2rem",
            }}
            className="persona-grid"
          >
            <div>
              <p style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.25rem", color: "var(--ink)" }}>
                {C.persona_name}
              </p>
              <p style={{ fontSize: "0.85rem", color: "var(--accent)", fontWeight: 600, marginBottom: "1rem" }}>
                {C.persona_tag}
              </p>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--muted)" }}>{C.persona_desc}</p>
            </div>
            <div>
              <div style={{ marginBottom: "1.5rem" }}>
                <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "0.75rem" }}>
                  {C.goals_title}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {C.goals.map((g) => (
                    <li key={g} style={{ fontSize: "0.9rem", lineHeight: 1.6, color: "var(--ink)", padding: "0.3rem 0", borderBottom: "1px solid var(--border)", display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                      <span style={{ color: "var(--accent)", flexShrink: 0 }}>✓</span> {g}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "0.75rem" }}>
                  {C.frusts_title}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {C.frusts.map((f) => (
                    <li key={f} style={{ fontSize: "0.9rem", lineHeight: 1.6, color: "var(--ink)", padding: "0.3rem 0", borderBottom: "1px solid var(--border)", display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                      <span style={{ color: "var(--muted)", flexShrink: 0 }}>—</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── 05 HMW ── */}
      <section style={section}>
        <Reveal>
          <SectionHeading label={C.hmw_label} title={C.hmw_title} />
          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.875rem",
                lineHeight: 1.6,
              }}
            >
              <thead>
                <tr>
                  {[C.hmw_col1, C.hmw_col2, C.hmw_col3].map((col) => (
                    <th
                      key={col}
                      style={{
                        textAlign: "left",
                        padding: "0.75rem 1rem",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--muted)",
                        borderBottom: "2px solid var(--border)",
                      }}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {C.hmw_rows.map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ padding: "1rem", color: "var(--muted)", verticalAlign: "top" }}>{row.prob}</td>
                    <td style={{ padding: "1rem", color: "var(--ink)", verticalAlign: "top" }}>{row.opp}</td>
                    <td style={{ padding: "1rem", verticalAlign: "top" }}>
                      <span
                        style={{
                          display: "inline-block",
                          background: "var(--surface)",
                          border: "1px solid var(--border)",
                          borderRadius: "6px",
                          padding: "0.25rem 0.6rem",
                          fontSize: "0.8rem",
                          color: "var(--accent)",
                          fontWeight: 600,
                        }}
                      >
                        {row.dec}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>

      {/* ── 06 ARQUITECTURA ── */}
      <section style={section}>
        <Reveal>
          <SectionHeading label={C.arch_label} title={C.arch_title} />
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--muted)", marginBottom: "2.5rem" }}>
            {C.arch_body}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div style={{ borderRadius: "10px", overflow: "hidden", marginBottom: "3rem" }}>
            <Image
              src="/assets/camperoteca/happy-path.jpg"
              alt="Secuencia de navegación: Home, Onboarding, Login o Registro, Mi Proyecto, Aprende, Encuentra, Comunidad"
              width={2000}
              height={606}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </Reveal>

        {/* MVP table */}
        <Reveal delay={0.15}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.5rem",
            }}
            className="mvp-grid"
          >
            <div
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "10px",
                padding: "1.5rem",
              }}
            >
              <p
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: "1rem",
                }}
              >
                {C.mvp_inc_label}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {C.mvp_inc.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: "0.875rem",
                      lineHeight: 1.6,
                      color: "var(--ink)",
                      padding: "0.4rem 0",
                      borderBottom: "1px solid var(--border)",
                      display: "flex",
                      gap: "0.5rem",
                    }}
                  >
                    <span style={{ color: "var(--accent)", flexShrink: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "10px",
                padding: "1.5rem",
                opacity: 0.7,
              }}
            >
              <p
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  marginBottom: "1rem",
                }}
              >
                {C.mvp_post_label}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {C.mvp_post.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: "0.875rem",
                      lineHeight: 1.6,
                      color: "var(--muted)",
                      padding: "0.4rem 0",
                      borderBottom: "1px solid var(--border)",
                      display: "flex",
                      gap: "0.5rem",
                    }}
                  >
                    <span style={{ flexShrink: 0 }}>○</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── 07 WIREFRAMES ── */}
      <section style={section}>
        <Reveal>
          <SectionHeading label={C.wf_label} title={C.wf_title} />
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--muted)", marginBottom: "2.5rem" }}>
            {C.wf_body}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div style={{ borderRadius: "10px", overflow: "hidden" }}>
            <Image
              src="/assets/camperoteca/wireframes-hero.png"
              alt="Evolución de wireframes: baja, media y alta fidelidad de las pantallas de Camperoteca"
              width={1920}
              height={1080}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </Reveal>
      </section>

      {/* ── 08 UI DESIGN & DESIGN SYSTEM ── */}
      <section style={section}>
        <Reveal>
          <SectionHeading label={C.ds_label} title={C.ds_title} />
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--muted)", marginBottom: "2.5rem" }}>
            {C.ds_body}
          </p>
        </Reveal>

        {/* Paleta de color */}
        <Reveal delay={0.1}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1rem",
              marginBottom: "1.5rem",
            }}
            className="ds-color-grid"
          >
            {C.ds_colors.map(({ hex, name, role }) => (
              <div
                key={hex}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "14px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "90px",
                    background: hex,
                    border: hex === "#FDFBF5" ? "1px solid var(--border)" : "none",
                    borderRadius: "12px 12px 0 0",
                  }}
                />
                <div style={{ padding: "1rem" }}>
                  <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--ink)", marginBottom: "0.2rem" }}>
                    {name}
                  </p>
                  <p style={{ fontSize: "0.7rem", fontFamily: "monospace", color: "var(--accent)", marginBottom: "0.4rem", letterSpacing: "0.04em" }}>
                    {hex}
                  </p>
                  <p style={{ fontSize: "0.75rem", color: "var(--muted)", lineHeight: 1.4 }}>{role}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Tipografía */}
        <Reveal delay={0.15}>
          <p
            style={{
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: "1rem",
            }}
          >
            {C.ds_type_label}
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
            }}
            className="ds-type-grid"
          >
            {C.ds_fonts.map(({ name, role }) => (
              <div
                key={name}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "14px",
                  padding: "1.75rem 2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <p
                  style={{
                    fontFamily: name === "Roboto" ? "'Roboto', sans-serif" : "'DM Sans', sans-serif",
                    fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                    fontWeight: name === "Roboto" ? 700 : 400,
                    color: "var(--ink)",
                    lineHeight: 1,
                  }}
                >
                  {name}
                </p>
                <p style={{ fontSize: "0.8rem", color: "var(--muted)" }}>{role}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── 09 SOLUCIÓN FINAL ── */}
      <section style={section}>
        <Reveal>
          <SectionHeading label={C.ui_label} title={C.ui_title} />
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--muted)", marginBottom: "3rem" }}>
            {C.ui_body}
          </p>
        </Reveal>

        {/* Mockup principal — imagen protagonista */}
        <Reveal delay={0.1}>
          <div
            style={{
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            <Image
              src="/assets/camperoteca/mockup-camperoteca-hero.png"
              alt={C.ui_mockup_alt}
              width={1920}
              height={1080}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </div>
        </Reveal>

        {/* Screens grid — 3 pantallas clave */}
        <Reveal delay={0.15}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5rem",
              marginTop: "3rem",
            }}
            className="screens-grid"
          >
            {[
              {
                src: "/assets/camperoteca/screen-miproyecto.webp",
                alt: "Mi Proyecto: planificador por etapas con progreso y siguiente paso recomendado",
                title: C.ui_miproyecto_title,
                body: C.ui_miproyecto_body,
              },
              {
                src: "/assets/camperoteca/screen-aprende.webp",
                alt: "Aprende: guías técnicas, legales y casos reales",
                title: C.ui_aprende_title,
                body: C.ui_aprende_body,
              },
              {
                src: "/assets/camperoteca/screen-encuentra.webp",
                alt: "Encuentra Recursos: herramientas y materiales para la camperización",
                title: C.ui_encuentra_title,
                body: C.ui_encuentra_body,
              },
              {
                src: "/assets/camperoteca/screen-login.png",
                alt: "Login: acceso con email y contraseña para continuar el proyecto",
                title: C.ui_login_title,
                body: C.ui_login_body,
              },
              {
                src: "/assets/camperoteca/screen-comunidad.png",
                alt: "Comunidad: foro y usuarios cercanos para compartir herramientas y consejos",
                title: C.ui_comunidad_title,
                body: C.ui_comunidad_body,
              },
            ].map(({ src, alt, title, body }) => (
              <div key={title}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "1.25rem",
                  }}
                >
                  <div style={{ width: "min(180px, 48vw)" }}>
                    <Image
                      src={src}
                      alt={alt}
                      width={390}
                      height={844}
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                        borderRadius: "22px",
                        boxShadow: "0 6px 24px rgba(0,0,0,0.1)",
                      }}
                    />
                  </div>
                </div>
                <h3
                  style={{
                    fontFamily: "'DM Serif Display', Georgia, serif",
                    fontSize: "1.05rem",
                    fontWeight: 400,
                    marginBottom: "0.5rem",
                    color: "var(--ink)",
                  }}
                >
                  {title}
                </h3>
                <p style={{ fontSize: "0.825rem", lineHeight: 1.6, color: "var(--muted)" }}>{body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── 09 APRENDIZAJES ── */}
      <section style={sectionLast}>
        <Reveal>
          <SectionHeading label={C.learn_label} title={C.learn_title} />
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 3rem" }}>
            {C.learns.map((l, i) => (
              <li
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "2rem 1fr",
                  gap: "0.75rem",
                  padding: "1.25rem 0",
                  borderBottom: "1px solid var(--border)",
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                  color: "var(--ink)",
                }}
              >
                <span
                  style={{
                    fontFamily: "'DM Serif Display', Georgia, serif",
                    fontSize: "1.1rem",
                    color: "var(--accent)",
                    paddingTop: "0.1rem",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{l}</span>
              </li>
            ))}
          </ul>

          <h3
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "1.3rem",
              fontWeight: 400,
              marginBottom: "1rem",
              color: "var(--ink)",
            }}
          >
            {C.next_title}
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 3rem" }}>
            {C.nexts.map((n) => (
              <li
                key={n}
                style={{
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  color: "var(--muted)",
                  padding: "0.5rem 0",
                  borderBottom: "1px solid var(--border)",
                  display: "flex",
                  gap: "0.5rem",
                }}
              >
                <span style={{ color: "var(--border)", flexShrink: 0 }}>→</span>
                {n}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
            <Link
              href={`/${lang}`}
              className="link-muted"
              style={{ fontSize: "0.9rem" }}
            >
              {C.back_projects}
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ── responsive styles ── */}
      <style>{`
        @media (max-width: 640px) {
          .persona-grid,
          .mvp-grid,
          .screen-grid {
            grid-template-columns: 1fr !important;
          }
          .screen-grid--reverse > *:first-child {
            order: 2;
          }
          .screen-grid--reverse > *:last-child {
            order: 1;
          }
          .meta-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .screens-grid {
            grid-template-columns: 1fr !important;
          }
          .ds-color-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .ds-type-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .meta-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
