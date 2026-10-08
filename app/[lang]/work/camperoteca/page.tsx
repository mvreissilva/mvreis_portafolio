import type { Metadata } from "next";
import Link from "next/link";
import { t, LANGS, type Lang } from "@/lib/i18n";

export function generateStaticParams() {
  return LANGS.map(lang => ({ lang }));
}
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang: _lang } = await params;
  const lang = _lang as Lang;
  const titles = { es: "Camperoteca — UX/UI Case Study", en: "Camperoteca — UX/UI Case Study", pt: "Camperoteca — Case Study UX/UI" };
  return { title: titles[lang] };
}

const INSIGHTS = {
  es: [
    { t: "La información dispersa genera parálisis", e: "La mayoría consultaban múltiples fuentes sin llegar a una conclusión sobre qué priorizar.", i: "La solución debía reducir carga cognitiva, no añadir más información." },
    { t: "El proceso sin orden genera ansiedad", e: "Los usuarios no sabían si estaban haciendo las cosas en el orden correcto.", i: "Necesitaban una referencia de progreso visible." },
    { t: "La comunidad es valiosa pero está desordenada", e: "Los foros eran consultados pero la dificultad de encontrar información específica los hacía frustrantes.", i: "El valor estaba en organizar el contenido existente, no en crear nuevo." },
  ],
  en: [
    { t: "Fragmented information creates paralysis", e: "Most users consulted multiple sources without reaching a conclusion about what to prioritise.", i: "The solution had to reduce cognitive load, not add more information." },
    { t: "An unordered process creates anxiety", e: "Users didn't know whether they were doing things in the right order.", i: "They needed a visible progress reference." },
    { t: "The community is valuable but disorganised", e: "Forums were frequently used, but finding specific information was too difficult.", i: "The value was in organising existing content, not creating new content." },
  ],
  pt: [
    { t: "Informação dispersa cria paralisia", e: "A maioria consultava múltiplas fontes sem chegar a uma conclusão sobre o que priorizar.", i: "A solução tinha que reduzir a carga cognitiva, não adicionar mais informação." },
    { t: "Processo sem ordem gera ansiedade", e: "Os utilizadores não sabiam se estavam a fazer as coisas na ordem correta.", i: "Precisavam de uma referência de progresso visível." },
    { t: "A comunidade é valiosa mas desorganizada", e: "Os fóruns eram consultados mas a dificuldade de encontrar informação específica tornava-os frustrantes.", i: "O valor estava em organizar o conteúdo existente, não em criar novo." },
  ],
};

const ITERATIONS = {
  es: [
    { p: "Onboarding de 5 pasos", f: "Los usuarios llegaban al planificador con sensación de haber tardado demasiado.", c: "Reducido a 3 pasos. Configuración detallada aplazada al perfil post-registro." },
    { p: "Iconos sin labels", f: "La navegación inferior no era autoexplicativa.", c: "Labels permanentes debajo de cada icono." },
    { p: "Estado vacío sin guía", f: "El dashboard vacío generaba incertidumbre sobre qué hacer primero.", c: "CTA claro en el empty state: Empieza aquí, tu primera etapa te espera." },
  ],
  en: [
    { p: "5-step onboarding", f: "Users reached the planner feeling it had taken too long.", c: "Reduced to 3 steps. Detailed setup moved to the post-registration profile." },
    { p: "Icons without labels", f: "The bottom navigation wasn't self-explanatory.", c: "Permanent labels under each icon." },
    { p: "Empty state without guidance", f: "The empty dashboard created uncertainty about what to do first.", c: "Clear CTA in the empty state: Start here, your first stage is waiting." },
  ],
  pt: [
    { p: "Onboarding de 5 passos", f: "Os utilizadores chegavam ao planificador com sensação de ter demorado demasiado.", c: "Reduzido a 3 passos. Configuração detalhada adiada para o perfil pós-registo." },
    { p: "Ícones sem labels", f: "A navegação inferior não era autoexplicativa.", c: "Labels permanentes abaixo de cada ícone." },
    { p: "Estado vazio sem orientação", f: "O dashboard vazio gerava incerteza sobre o que fazer primeiro.", c: "CTA claro no empty state: Começa aqui, a tua primeira etapa está à espera." },
  ],
};

const LEARNINGS = {
  es: ["El problema real no estaba donde parecía — el research cambió la hipótesis inicial antes de diseñar una sola pantalla.", "Diseñar el estado vacío es diseñar la primera impresión.", "La arquitectura de información es la decisión más importante. Ninguna pantalla bonita compensa una IA confusa.", "Mi experiencia previa fue un activo: años gestionando procesos complejos me dieron intuición sobre dónde aparece la fricción."],
  en: ["The real problem wasn't where it seemed — research changed the initial hypothesis before designing a single screen.", "Designing the empty state is designing the first impression.", "Information architecture is the most important decision. No beautiful screen compensates for a confusing IA.", "My prior experience was an asset: years managing complex processes gave me intuition about where friction appears."],
  pt: ["O problema real não estava onde parecia — a pesquisa mudou a hipótese inicial antes de desenhar um único ecrã.", "Desenhar o estado vazio é desenhar a primeira impressão.", "A arquitetura de informação é a decisão mais importante. Nenhum ecrã bonito compensa uma IA confusa.", "A minha experiência anterior foi um ativo: anos a gerir processos complexos deram-me intuição sobre onde aparece o atrito."],
};

const LABELS = {
  es: { back: "← Volver", role: "Rol", type: "Tipo", platform: "Plataforma", tools: "Herramientas", process: "Proceso", award: "Distinción", problem: "El problema", insights: "Hallazgos", evidence: "Evidencia", implication: "Implicación", opportunity: "Oportunidad de diseño", problem_col: "Problema", opp_col: "Oportunidad", decision: "Decisión", mvp: "MVP", included: "Incluido", deferred: "Aplazado", wireframes: "Wireframes", testing: "Testing e iteración", detected: "Problema detectado", change: "Cambio", results: "Resultados", future: "Métricas a medir en siguiente fase", learnings: "Aprendizajes", prototype: "Prototipo", contact: "Contactar →" },
  en: { back: "← Back", role: "Role", type: "Type", platform: "Platform", tools: "Tools", process: "Process", award: "Award", problem: "The problem", insights: "Findings", evidence: "Evidence", implication: "Implication", opportunity: "Design opportunity", problem_col: "Problem", opp_col: "Opportunity", decision: "Decision", mvp: "MVP", included: "Included", deferred: "Deferred", wireframes: "Wireframes", testing: "Testing & iteration", detected: "Issue detected", change: "Change", results: "Outcomes", future: "Metrics to measure next", learnings: "Learnings", prototype: "Prototype", contact: "Get in touch →" },
  pt: { back: "← Voltar", role: "Função", type: "Tipo", platform: "Plataforma", tools: "Ferramentas", process: "Processo", award: "Distinção", problem: "O problema", insights: "Descobertas", evidence: "Evidência", implication: "Implicação", opportunity: "Oportunidade de design", problem_col: "Problema", opp_col: "Oportunidade", decision: "Decisão", mvp: "MVP", included: "Incluído", deferred: "Adiado", wireframes: "Wireframes", testing: "Testing e iteração", detected: "Problema detetado", change: "Mudança", results: "Resultados", future: "Métricas a medir na próxima fase", learnings: "Aprendizagens", prototype: "Protótipo", contact: "Entrar em contacto →" },
};

const S = {
  page:   { maxWidth: "680px", margin: "0 auto", padding: "0 1.5rem", paddingTop: "6.5rem", paddingBottom: "6rem" } as React.CSSProperties,
  label:  { fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "var(--muted)", marginBottom: "2rem", display: "block" },
  h1:     { fontFamily: "var(--font-serif,Georgia,serif)", fontSize: "clamp(2rem,5vw,2.75rem)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "var(--ink)", marginBottom: "1.125rem" } as React.CSSProperties,
  h2:     { fontFamily: "var(--font-serif,Georgia,serif)", fontSize: "clamp(1.375rem,3vw,1.625rem)", lineHeight: 1.2, letterSpacing: "-0.015em", color: "var(--ink)", marginBottom: "0.875rem" } as React.CSSProperties,
  body:   { fontSize: "0.9375rem", color: "var(--muted)", lineHeight: 1.78 } as React.CSSProperties,
  sec:    { marginTop: "4rem" } as React.CSSProperties,
  div:    { border: "none", borderTop: "1px solid var(--border)", margin: "0 0 2.5rem" } as React.CSSProperties,
};

export default async function CamperotecaPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: _lang } = await params;
  const lang = _lang as Lang;
  const L = LABELS[lang];
  const ins = INSIGHTS[lang];
  const iters = ITERATIONS[lang];
  const learns = LEARNINGS[lang];

  return (
    <div style={S.page}>
      <Link href={`/${lang}`} style={{ fontSize: "0.875rem", color: "var(--muted)", textDecoration: "none", display: "inline-block", marginBottom: "3rem", transition: "color 0.2s" }}>
        {L.back}
      </Link>

      {/* Hero */}
      <p style={{ fontSize: "0.6875rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "0.75rem" }}>
        UX/UI Design · End to End · Personal Project
      </p>
      <h1 style={S.h1}>Camperoteca</h1>
      <p style={{ ...S.body, maxWidth: "520px", marginBottom: "3rem" }}>
        {lang === "es" && "Una experiencia digital para simplificar la planificación y gestión del proceso de camperización. Del caos de información dispersa a una guía progresiva centrada en el usuario."}
        {lang === "en" && "A digital experience to simplify the planning and management of the van conversion process. From fragmented information to a progressive user-centred guide."}
        {lang === "pt" && "Uma experiência digital para simplificar o planeamento e gestão do processo de camperização. Do caos de informação dispersa a um guia progressivo centrado no utilizador."}
      </p>

      {/* Meta grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px,1fr))", gap: "0",
                    border: "1px solid var(--border)", borderRadius: "0.5rem", overflow: "hidden", marginBottom: "4rem" }}>
        {[[L.role,"UX/UI Designer · End to End"],[L.type,lang==="es"?"Proyecto personal":lang==="en"?"Personal Project":"Projeto pessoal"],[L.platform,"Responsive / Mobile First"],[L.tools,"Figma · FigJam · Miro · Framer"],[L.process,"Research → Design → Test → Iterate"],[L.award,"Neoland — Distinción"]].map(([lbl,val],i) => (
          <div key={i} style={{ padding: "1rem 1.125rem", background: i%2===0?"var(--surface)":"var(--bg)", borderRight: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
            <p style={{ fontSize: "0.6875rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--muted)", marginBottom: "0.25rem" }}>{lbl}</p>
            <p style={{ fontSize: "0.8125rem", color: "var(--ink)" }}>{val}</p>
          </div>
        ))}
      </div>

      {/* Problem */}
      <section style={S.sec}>
        <hr style={S.div} /><span style={S.label}>{L.problem}</span>
        <h2 style={S.h2}>{lang==="es"?"El problema no era falta de información. Era falta de estructura.":lang==="en"?"The problem wasn't a lack of information. It was a lack of structure.":"O problema não era falta de informação. Era falta de estrutura."}</h2>
        <div style={{ ...S.body, display:"flex", flexDirection:"column", gap:"0.875rem", maxWidth:"540px" }}>
          <p>{lang==="es"?"Camperizar un vehículo implica decisiones técnicas, logísticas, económicas y personales que se superponen sin orden claro. Las personas llegan con motivación y energía, pero la información existe en todas partes y en ninguna a la vez.":lang==="en"?"Converting a vehicle involves technical, logistical, financial and personal decisions that overlap without clear order. People arrive motivated and energetic, but information exists everywhere and nowhere at the same time.":"Camperizar um veículo implica decisões técnicas, logísticas, económicas e pessoais que se sobrepõem sem ordem clara. As pessoas chegam motivadas, mas a informação existe em todo o lado e em lado nenhum ao mesmo tempo."}</p>
          <blockquote style={{ borderLeft: "2px solid var(--accent)", paddingLeft: "1rem", fontStyle: "italic", color: "var(--ink)" }}>
            {lang==="es"&&'"Sé que hay mucha información ahí fuera, pero no sé por dónde empezar ni si lo estoy haciendo en el orden correcto."'}
            {lang==="en"&&'"I know there\'s a lot of information out there, but I don\'t know where to start or whether I\'m doing things in the right order."'}
            {lang==="pt"&&'"Sei que há muita informação disponível, mas não sei por onde começar nem se estou a fazer as coisas na ordem certa."'}
          </blockquote>
        </div>
        <div style={{ marginTop:"2rem", width:"100%", aspectRatio:"21/9", borderRadius:"0.5rem", background:"var(--surface)", border:"1px solid var(--border)", display:"flex", alignItems:"center", justifyContent:"center" }}>
          <p style={{ fontSize:"0.75rem", color:"var(--muted)", textAlign:"center" }}>Imagen del proyecto — añade captura de Figma</p>
        </div>
      </section>

      {/* Insights */}
      <section style={S.sec}>
        <hr style={S.div} /><span style={S.label}>{L.insights}</span>
        <div style={{ display:"flex", flexDirection:"column" }}>
          {ins.map((item, i) => (
            <div key={i} style={{ padding:"1.375rem 0", borderBottom:"1px solid var(--border)" }}>
              <p style={{ fontSize:"0.9375rem", fontWeight:500, color:"var(--ink)", marginBottom:"0.5rem" }}>{item.t}</p>
              <p style={{ fontSize:"0.8125rem", color:"var(--muted)", marginBottom:"0.375rem" }}><strong style={{color:"var(--accent)",fontWeight:500}}>{L.evidence} — </strong>{item.e}</p>
              <p style={{ fontSize:"0.8125rem", color:"var(--muted)" }}><strong style={{color:"var(--ink)",fontWeight:500}}>→ {L.implication} — </strong>{item.i}</p>
            </div>
          ))}
        </div>
        <blockquote style={{ marginTop:"1.5rem", padding:"1.25rem 1.5rem", background:"var(--surface)", borderRadius:"0.5rem", borderLeft:"2px solid var(--accent)", fontSize:"0.9375rem", fontStyle:"italic", color:"var(--ink)" }}>
          {lang==="es"&&'"Los usuarios no necesitan más información. Necesitan una guía clara que les ayude a avanzar con seguridad."'}
          {lang==="en"&&'"Users don\'t need more information. They need a clear guide that helps them move forward with confidence."'}
          {lang==="pt"&&'"Os utilizadores não precisam de mais informação. Precisam de um guia claro que os ajude a avançar com segurança."'}
        </blockquote>
      </section>

      {/* Opportunity table */}
      <section style={S.sec}>
        <hr style={S.div} /><span style={S.label}>{L.opportunity}</span>
        <div style={{ overflowX:"auto" }}>
          <table style={{ width:"100%", fontSize:"0.875rem", borderCollapse:"collapse" }}>
            <thead>
              <tr style={{ borderBottom:"1px solid var(--border)" }}>
                {[L.problem_col, L.opp_col, L.decision].map(h => (
                  <th key={h} style={{ textAlign:"left", padding:"0.625rem 1rem 0.625rem 0", fontSize:"0.6875rem", textTransform:"uppercase", letterSpacing:"0.08em", color:"var(--muted)", fontWeight:600 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {(lang==="es"?[["Información fragmentada","Centralizar y estructurar","Dashboard con fases ordenadas"],["Sin referencia de progreso","Hacer visible el avance","Planificador con checklist"],["Comunidad caótica","Organizar por fase","Biblioteca filtrable"],["Decisiones sin contexto","Acompañar con info relevante","Recursos por etapa"]]:
                lang==="en"?[["Fragmented information","Centralise and structure","Dashboard with ordered phases"],["No progress reference","Make progress visible","Planner with checklist"],["Chaotic community","Organise by phase","Filterable library"],["Decisions without context","Provide relevant info","Resources per stage"]]:
                [["Informação fragmentada","Centralizar e estruturar","Dashboard com fases ordenadas"],["Sem referência de progresso","Tornar o progresso visível","Planificador com checklist"],["Comunidade caótica","Organizar por fase","Biblioteca filtrável"],["Decisões sem contexto","Acompanhar com info relevante","Recursos por etapa"]]
              ).map(([p,o,d], i) => (
                <tr key={i} style={{ borderBottom:"1px solid var(--border)" }}>
                  <td style={{ padding:"0.75rem 1rem 0.75rem 0", color:"var(--muted)" }}>{p}</td>
                  <td style={{ padding:"0.75rem 1rem 0.75rem 0", color:"var(--muted)" }}>{o}</td>
                  <td style={{ padding:"0.75rem 0", color:"var(--ink)" }}>{d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* MVP */}
      <section style={S.sec}>
        <hr style={S.div} /><span style={S.label}>{L.mvp}</span>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"2rem" }}>
          <div>
            <p style={{ fontSize:"0.75rem", fontWeight:600, color:"#16a34a", textTransform:"uppercase", letterSpacing:"0.06em", marginBottom:"0.875rem" }}>✓ {L.included}</p>
            <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:"0.5rem" }}>
              {(lang==="es"?["Onboarding personalizado","Dashboard con fases del proceso","Planificador con checklist","Biblioteca de recursos filtrable","Seguimiento de progreso"]:lang==="en"?["Personalised onboarding","Dashboard with process phases","Planner with checklist","Filterable resource library","Progress tracking"]:["Onboarding personalizado","Dashboard com fases do processo","Planificador com checklist","Biblioteca de recursos filtrável","Acompanhamento de progresso"]).map(i=>(
                <li key={i} style={{ fontSize:"0.875rem", color:"var(--muted)" }}>· {i}</li>
              ))}
            </ul>
          </div>
          <div>
            <p style={{ fontSize:"0.75rem", fontWeight:600, color:"var(--muted)", textTransform:"uppercase", letterSpacing:"0.06em", marginBottom:"0.875rem", opacity:0.6 }}>✗ {L.deferred}</p>
            <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:"0.5rem", opacity:0.5 }}>
              {(lang==="es"?["Módulo de comunidad","Comparador de presupuestos","Integración con proveedores","Modo colaborativo"]:lang==="en"?["Community module","Budget comparator","Provider integration","Collaborative mode"]:["Módulo de comunidade","Comparador de orçamentos","Integração com fornecedores","Modo colaborativo"]).map(i=>(
                <li key={i} style={{ fontSize:"0.875rem", color:"var(--muted)" }}>· {i}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Wireframes placeholder */}
      <section style={S.sec}>
        <hr style={S.div} /><span style={S.label}>{L.wireframes}</span>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"0.75rem" }}>
          {(lang==="es"?["Baja fidelidad","Media fidelidad","Alta fidelidad"]:lang==="en"?["Low fidelity","Mid fidelity","High fidelity"]:["Baixa fidelidade","Média fidelidade","Alta fidelidade"]).map((l,i)=>(
            <div key={i} style={{ aspectRatio:"9/16", borderRadius:"0.375rem", background:"var(--surface)", border:"1px solid var(--border)", display:"flex", alignItems:"flex-end", padding:"0.75rem" }}>
              <p style={{ fontSize:"0.6875rem", color:"var(--muted)" }}>{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Iterations */}
      <section style={S.sec}>
        <hr style={S.div} /><span style={S.label}>{L.testing}</span>
        <div style={{ display:"flex", flexDirection:"column" }}>
          {iters.map((it, i) => (
            <div key={i} style={{ padding:"1.375rem 0", borderBottom:"1px solid var(--border)" }}>
              <p style={{ fontSize:"0.6875rem", textTransform:"uppercase", letterSpacing:"0.08em", color:"#ef4444", marginBottom:"0.5rem", fontWeight:600 }}>{L.detected}</p>
              <p style={{ fontSize:"0.9375rem", fontWeight:500, color:"var(--ink)", marginBottom:"0.5rem" }}>{it.p}</p>
              <p style={{ fontSize:"0.8125rem", color:"var(--muted)", marginBottom:"0.375rem" }}>{it.f}</p>
              <p style={{ fontSize:"0.8125rem", color:"var(--ink)" }}><strong style={{color:"#16a34a",fontWeight:500}}>→ {L.change}: </strong>{it.c}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Results */}
      <section style={S.sec}>
        <hr style={S.div} /><span style={S.label}>{L.results}</span>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:"0.5rem", marginBottom:"1.5rem" }}>
          {(lang==="es"?["MVP definido con criterios claros","Flujo principal iterado tras testing","Validación positiva del 100% de usuarios en testing final","Design System 'Cosecha Solar' documentado","Prototipo navegable de alta fidelidad","Aprobado con distinción — TFM Neoland"]:lang==="en"?["MVP defined with clear criteria","Main flow iterated after testing","Positive validation from 100% of users in final testing","'Cosecha Solar' Design System documented","High-fidelity navigable prototype","Distinction grade — TFM Neoland"]:["MVP definido com critérios claros","Fluxo principal iterado após testes","Validação positiva de 100% dos utilizadores nos testes finais","Design System 'Cosecha Solar' documentado","Protótipo navegável de alta fidelidade","Aprovado com distinção — TFM Neoland"]).map(r=>(
            <div key={r} style={{ display:"flex", gap:"0.5rem", fontSize:"0.875rem", color:"var(--muted)", padding:"0.625rem", borderRadius:"0.375rem", background:"var(--surface)", border:"1px solid var(--border)" }}>
              <span style={{ color:"var(--accent)", flexShrink:0 }}>✓</span>{r}
            </div>
          ))}
        </div>
        <div style={{ padding:"1rem 1.25rem", borderRadius:"0.375rem", background:"var(--surface)", border:"1px solid var(--border)" }}>
          <p style={{ fontSize:"0.6875rem", textTransform:"uppercase", letterSpacing:"0.08em", color:"var(--muted)", marginBottom:"0.75rem", fontWeight:600 }}>{L.future}</p>
          <div style={{ display:"flex", flexWrap:"wrap", gap:"0.5rem" }}>
            {["Task Success Rate","Time on Task","SUS Score","Drop-off Rate","Feature Adoption"].map(m=>(
              <span key={m} style={{ fontSize:"0.75rem", padding:"0.2rem 0.6rem", borderRadius:"0.25rem", border:"1px solid var(--border)", color:"var(--muted)" }}>{m}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Learnings */}
      <section style={S.sec}>
        <hr style={S.div} /><span style={S.label}>{L.learnings}</span>
        <div style={{ display:"flex", flexDirection:"column" }}>
          {learns.map((l, i) => (
            <div key={i} style={{ display:"flex", gap:"1.25rem", padding:"1.25rem 0", borderBottom:"1px solid var(--border)" }}>
              <span style={{ fontFamily:"var(--font-serif,Georgia,serif)", fontSize:"1.5rem", color:"var(--accent)", flexShrink:0, lineHeight:1 }}>{i+1}</span>
              <p style={{ fontSize:"0.9375rem", color:"var(--muted)", lineHeight:1.75 }}>{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Prototype + CTA */}
      <section style={{ marginTop:"4rem", paddingTop:"2rem", borderTop:"1px solid var(--border)", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:"1rem" }}>
        <Link href={`/${lang}`} style={{ fontSize:"0.875rem", color:"var(--muted)", textDecoration:"none", transition:"color 0.2s" }}>
          {L.back}
        </Link>
        <div style={{ display:"flex", gap:"1rem", alignItems:"center" }}>
          <span style={{ fontSize:"0.875rem", color:"var(--muted)", borderBottom:"1px dashed var(--border)", paddingBottom:"1px", cursor:"not-allowed" }}>
            {L.prototype} — {lang==="es"?"próximamente":lang==="en"?"coming soon":"em breve"}
          </span>
          <a href="mailto:mvreissilva@gmail.com" style={{ fontSize:"0.875rem", fontWeight:500, color:"var(--accent)", textDecoration:"none", transition:"opacity 0.2s" }}>
            {L.contact}
          </a>
        </div>
      </section>
    </div>
  );
}
