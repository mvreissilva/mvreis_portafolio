import type { Metadata } from "next";
import Link from "next/link";
import { LANGS, type Lang } from "@/lib/i18n";

export function generateStaticParams() { return LANGS.map(lang => ({ lang })); }
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang: _lang } = await params;
  const lang = _lang as Lang;
  return { title: lang==="pt"?"Riptide — Case Study UX/UI":"Riptide — UX/UI Case Study" };
}

const DATA = {
  research: [
    ["94.3%","es","Mostraron interés en conocer el impacto hídrico de su actividad digital"],
    ["88.7%","es","Indicaron que esta información podría afectar su comportamiento digital"],
    ["73.1%","es","Prefieren una experiencia visible pero no intrusiva"],
    ["54.7%","es","Rechazaban experiencias que interrumpen su flujo de trabajo"],
    ["47.2%","es","Expresaron preocupación por experiencias de vigilancia"],
    ["39.6%","es","Asociaban el concepto con culpa"],
  ],
  researchEn: ["Showed interest in knowing the water footprint of their digital activity","Indicated this information could affect their digital behaviour","Prefer a visible but non-intrusive experience","Rejected experiences that interrupt their workflow","Expressed concern about surveillance-like experiences","Associated the concept with guilt"],
  researchPt: ["Mostraram interesse em conhecer o impacto hídrico da sua atividade digital","Indicaram que esta informação poderia afetar o seu comportamento digital","Preferem uma experiência visível mas não intrusiva","Rejeitaram experiências que interrompem o seu fluxo de trabalho","Expressaram preocupação com experiências de vigilância","Associaram o conceito com culpa"],
};

const LEARNS = {
  es: [["Awareness sí, culpa no","El diseño debe informar sin juzgar. El tono de los mensajes es crítico para no convertir la herramienta en una fuente de ansiedad."],["El control es innegociable","En herramientas de monitoreo, la percepción de vigilancia es el mayor riesgo de abandono."],["La transparencia reduce la fricción","El 47% dudaba del cálculo. Explicar el método no es un detalle técnico — es una decisión de confianza."]],
  en: [["Awareness yes, guilt no","Design must inform without judging. The tone of messages is critical to avoid turning the tool into a source of anxiety."],["Control is non-negotiable","In monitoring tools, the perception of surveillance is the biggest abandonment risk."],["Transparency reduces friction","47% doubted the calculation method. Explaining it isn't a technical detail — it's a trust decision."]],
  pt: [["Consciência sim, culpa não","O design deve informar sem julgar. O tom das mensagens é crítico para não transformar a ferramenta numa fonte de ansiedade."],["O controlo é inegociável","Em ferramentas de monitorização, a perceção de vigilância é o maior risco de abandono."],["A transparência reduz o atrito","47% duvidavam do cálculo. Explicar o método não é um detalhe técnico — é uma decisão de confiança."]],
};

const S = {
  page:  { maxWidth:"680px", margin:"0 auto", padding:"0 1.5rem", paddingTop:"6.5rem", paddingBottom:"6rem" } as React.CSSProperties,
  label: { fontSize:"0.6875rem", fontWeight:600, letterSpacing:"0.12em", textTransform:"uppercase" as const, color:"var(--muted)", marginBottom:"2rem", display:"block" },
  h1:    { fontFamily:"var(--font-serif,Georgia,serif)", fontSize:"clamp(2rem,5vw,2.75rem)", lineHeight:1.1, letterSpacing:"-0.02em", color:"var(--ink)", marginBottom:"1.125rem" } as React.CSSProperties,
  body:  { fontSize:"0.9375rem", color:"var(--muted)", lineHeight:1.78 } as React.CSSProperties,
  sec:   { marginTop:"4rem" } as React.CSSProperties,
  div:   { border:"none", borderTop:"1px solid var(--border)", margin:"0 0 2.5rem" } as React.CSSProperties,
};

export default async function RiptidePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: _lang } = await params;
  const lang = _lang as Lang;
  const back = lang==="en"?"← Back":lang==="pt"?"← Voltar":"← Volver";
  const learns = LEARNS[lang];
  const resLabels = lang==="en"? DATA.researchEn : lang==="pt"? DATA.researchPt : DATA.research.map(r=>r[2]);

  return (
    <div style={S.page}>
      <Link href={`/${lang}`} style={{ fontSize:"0.875rem", color:"var(--muted)", textDecoration:"none", display:"inline-block", marginBottom:"3rem", transition:"color 0.2s" }}>
        {back}
      </Link>

      <p style={{ fontSize:"0.6875rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"var(--muted)", marginBottom:"0.75rem" }}>
        {lang==="en"?"UX/UI · AI · Sustainability · Conceptual Project":lang==="pt"?"UX/UI · IA · Sustentabilidade · Projeto Conceptual":"UX/UI · IA · Sostenibilidad · Proyecto conceptual"}
      </p>
      <h1 style={S.h1}>Riptide</h1>
      <p style={{ ...S.body, maxWidth:"520px", marginBottom:"3rem" }}>
        {lang==="en"?"A browser extension that makes the hidden water footprint of digital activity visible. Awareness without guilt, presence without intrusion.":lang==="pt"?"Uma extensão de browser que torna visível o impacto hídrico oculto da atividade digital. Consciência sem culpa, presença sem intrusão.":"Extensión de navegador que hace visible el impacto hídrico de la actividad digital cotidiana. Awareness sin culpa, presencia sin intrusión."}
      </p>

      {/* Meta */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(140px,1fr))", gap:"0", border:"1px solid var(--border)", borderRadius:"0.5rem", overflow:"hidden", marginBottom:"4rem" }}>
        {([[lang==="en"?"Type":lang==="pt"?"Tipo":"Tipo", lang==="en"?"Conceptual Project":lang==="pt"?"Projeto Conceptual":"Proyecto conceptual"],
           [lang==="en"?"Role":lang==="pt"?"Função":"Rol","UX/UI Designer · End to End"],
           [lang==="en"?"Platform":lang==="pt"?"Plataforma":"Plataforma","Browser Extension"],
           [lang==="en"?"Focus":lang==="pt"?"Foco":"Foco",lang==="en"?"AI · Sustainability · UX Research":lang==="pt"?"IA · Sustentabilidade · UX Research":"IA · Sostenibilidad · UX Research"],
           [lang==="en"?"Tools":lang==="pt"?"Ferramentas":"Herramientas","Figma · FigJam · Miro"],
           [lang==="en"?"Philosophy":lang==="pt"?"Filosofia":"Filosofía",lang==="en"?"Awareness without guilt":lang==="pt"?"Consciência sem culpa":"Awareness sin culpa"],
        ] as [string,string][]).map(([l,v],i)=>(
          <div key={i} style={{ padding:"1rem 1.125rem", background:i%2===0?"var(--surface)":"var(--bg)", borderRight:"1px solid var(--border)", borderBottom:"1px solid var(--border)" }}>
            <p style={{ fontSize:"0.6875rem", textTransform:"uppercase", letterSpacing:"0.08em", color:"var(--muted)", marginBottom:"0.25rem" }}>{l}</p>
            <p style={{ fontSize:"0.8125rem", color:"var(--ink)" }}>{v}</p>
          </div>
        ))}
      </div>

      {/* Problem */}
      <section style={S.sec}>
        <hr style={S.div} /><span style={S.label}>{lang==="en"?"The problem":lang==="pt"?"O problema":"El problema"}</span>
        <h2 style={{ fontFamily:"var(--font-serif,Georgia,serif)", fontSize:"clamp(1.375rem,3vw,1.625rem)", lineHeight:1.2, letterSpacing:"-0.015em", color:"var(--ink)", marginBottom:"0.875rem" }}>
          {lang==="en"?"The impact exists. But it's invisible.":lang==="pt"?"O impacto existe. Mas é invisível.":"El impacto existe. Pero es invisible."}
        </h2>
        <div style={{ ...S.body, display:"flex", flexDirection:"column", gap:"0.875rem", maxWidth:"540px" }}>
          <p>{lang==="en"?"Every digital action — a search, a stream, an email — has a real water cost in data centres. This impact is invisible to users.":lang==="pt"?"Cada ação digital — uma pesquisa, um stream, um e-mail — tem um custo hídrico real nos centros de dados. Este impacto é invisível para os utilizadores.":"Cada acción digital — una búsqueda, un stream, un email — tiene un coste hídrico real en los centros de datos. Este impacto es invisible para el usuario."}</p>
          <p>{lang==="en"?"Existing solutions are either too technical, generate guilt, or require installing an app that nobody will voluntarily use.":lang==="pt"?"As soluções existentes são demasiado técnicas, geram culpa, ou requerem instalar uma app que ninguém utilizará voluntariamente.":"Las soluciones existentes son demasiado técnicas, generan culpa, o requieren instalar una app que nadie va a usar voluntariamente."}</p>
          <blockquote style={{ borderLeft:"2px solid var(--accent)", paddingLeft:"1rem", fontStyle:"italic", color:"var(--ink)" }}>
            {lang==="en"?'"Make the invisible water footprint of your digital life visible."':lang==="pt"?'"Torna visível o impacto hídrico invisível da tua vida digital."':'"Haz visible el impacto hídrico invisible de tu vida digital."'}
          </blockquote>
        </div>
      </section>

      {/* Research */}
      <section style={S.sec}>
        <hr style={S.div} /><span style={S.label}>{lang==="en"?"Research":lang==="pt"?"Investigação":"Investigación"}</span>
        <div style={{ display:"flex", flexDirection:"column" }}>
          {DATA.research.map(([pct,,], i) => (
            <div key={pct} style={{ display:"flex", alignItems:"baseline", gap:"1.5rem", padding:"1rem 0", borderBottom:"1px solid var(--border)" }}>
              <span style={{ fontFamily:"var(--font-serif,Georgia,serif)", fontSize:"1.625rem", color:"var(--accent)", flexShrink:0, width:"4.5rem" }}>{pct}</span>
              <span style={{ fontSize:"0.875rem", color:"var(--muted)" }}>{resLabels[i]}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Persona */}
      <section style={S.sec}>
        <hr style={S.div} /><span style={S.label}>{lang==="en"?"User Persona":lang==="pt"?"User Persona":"User Persona"}</span>
        <h2 style={{ fontFamily:"var(--font-serif,Georgia,serif)", fontSize:"clamp(1.375rem,3vw,1.625rem)", lineHeight:1.2, letterSpacing:"-0.015em", color:"var(--ink)", marginBottom:"0.875rem" }}>
          Ana — {lang==="en"?"The Water Guardian":lang==="pt"?"A Guardiã da Água":"La Guardiana del Agua"}
        </h2>
        <p style={{ ...S.body, maxWidth:"520px" }}>
          32 {lang==="en"?"years old":"años"} · Madrid · {lang==="en"?"Digital marketing professional":lang==="pt"?"Profissional de marketing digital":"Profesional de marketing digital"}.{" "}
          {lang==="en"?"Environmentally aware but doesn't want her digital environment to make her feel constantly guilty. Wants to make better decisions, not receive constant alerts.":lang==="pt"?"Preocupada com o ambiente mas não quer que o seu ambiente digital a faça sentir constantemente culpada. Quer tomar melhores decisões, não receber alertas constantes.":"Se preocupa por el medioambiente pero no quiere que su entorno digital la haga sentir culpable constantemente. Quiere tomar mejores decisiones, no recibir alertas constantes."}
        </p>
      </section>

      {/* Solution */}
      <section style={S.sec}>
        <hr style={S.div} /><span style={S.label}>{lang==="en"?"Solution":lang==="pt"?"Solução":"Solución"}</span>
        <h2 style={{ fontFamily:"var(--font-serif,Georgia,serif)", fontSize:"clamp(1.375rem,3vw,1.625rem)", lineHeight:1.2, letterSpacing:"-0.015em", color:"var(--ink)", marginBottom:"0.875rem" }}>
          {lang==="en"?"Environmental presence, not surveillance":lang==="pt"?"Presença ambiental, não vigilância":"Presencia ambiental, no vigilancia"}
        </h2>
        <p style={{ ...S.body, maxWidth:"520px", marginBottom:"1.5rem" }}>
          {lang==="en"?"Not another environmental tracking app. An ambient presence — something that's there when it matters, without interrupting.":lang==="pt"?"Não mais uma app de monitorização ambiental. Uma presença ambiental — algo que está lá quando importa, sem interromper.":"No otra app de seguimiento medioambiental. Una presencia ambiental — algo que esté ahí cuando importa, sin interrumpir."}
        </p>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(220px,1fr))", gap:"0.625rem" }}>
          {(lang==="en"?["Subtle visual indicator in the browser bar","Traffic light colour code","Progressive level during the session","Warning before high-consumption actions","No pop-ups — closeable and silenceable","Configurable: timing, style, visibility"]:lang==="pt"?["Indicador visual subtil na barra do browser","Código de cores tipo semáforo","Nível progressivo durante a sessão","Aviso antes de ações de alto consumo","Sem pop-ups — fechável e silenciável","Configurável: timing, estilo, visibilidade"]:["Indicador visual sutil en la barra del navegador","Código de color tipo traffic light","Nivel progresivo durante la sesión","Warning antes de acciones de alto consumo","Sin pop-ups — cerrable y silenciable","Configurable: timing, estilo, visibilidad"]).map(f=>(
            <div key={f} style={{ display:"flex", gap:"0.5rem", fontSize:"0.875rem", color:"var(--muted)", padding:"0.625rem", borderRadius:"0.375rem", background:"var(--surface)", border:"1px solid var(--border)" }}>
              <span style={{ color:"var(--accent)", flexShrink:0 }}>·</span>{f}
            </div>
          ))}
        </div>
      </section>

      {/* Learnings */}
      <section style={S.sec}>
        <hr style={S.div} /><span style={S.label}>{lang==="en"?"Learnings":lang==="pt"?"Aprendizagens":"Aprendizajes"}</span>
        <div style={{ display:"flex", flexDirection:"column" }}>
          {learns.map(([title, body], i) => (
            <div key={i} style={{ display:"flex", gap:"1.25rem", padding:"1.25rem 0", borderBottom:"1px solid var(--border)" }}>
              <span style={{ fontFamily:"var(--font-serif,Georgia,serif)", fontSize:"1.5rem", color:"var(--accent)", flexShrink:0, lineHeight:1 }}>{i+1}</span>
              <div>
                <p style={{ fontSize:"0.9375rem", fontWeight:500, color:"var(--ink)", marginBottom:"0.375rem" }}>{title}</p>
                <p style={{ fontSize:"0.875rem", color:"var(--muted)", lineHeight:1.75 }}>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Nav */}
      <div style={{ marginTop:"4rem", paddingTop:"2rem", borderTop:"1px solid var(--border)", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:"1rem" }}>
        <Link href={`/${lang}`} style={{ fontSize:"0.875rem", color:"var(--muted)", textDecoration:"none" }}>
          {back}
        </Link>
        <a href="mailto:mvreissilva@gmail.com" style={{ fontSize:"0.875rem", fontWeight:500, color:"var(--accent)", textDecoration:"none", transition:"opacity 0.2s" }}>
          {lang==="en"?"Get in touch →":lang==="pt"?"Entrar em contacto →":"Contactar →"}
        </a>
      </div>
    </div>
  );
}
