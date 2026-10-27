import type { Metadata } from "next";
import Link from "next/link";
import { LANGS, type Lang } from "@/lib/i18n";
import CaseStudyNav from "@/components/ui/CaseStudyNav";
import BackToTop from "@/components/ui/BackToTop";
import ZoomableImage from "@/components/ui/ZoomableImage";
import { Reveal } from "@/components/ui/Reveal";
import { pageMetadata } from "@/lib/site";

export function generateStaticParams() { return LANGS.map(lang => ({ lang })); }
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang: _lang } = await params;
  const lang = _lang as Lang;
  const title = lang === "pt" ? "Riptide — Case Study UX/UI" : "Riptide — UX/UI Case Study";
  const desc = lang === "en"
    ? "A browser extension that makes the hidden water footprint of digital activity visible. Awareness without guilt, presence without intrusion."
    : lang === "pt"
    ? "Extensão de navegador que torna visível o impacto hídrico da atividade digital. Consciência sem culpa, presença sem intrusão."
    : "Extensión de navegador que hace visible el impacto hídrico de la actividad digital. Awareness sin culpa, presencia sin intrusión.";
  return pageMetadata({ lang, path: "/work/riptide", title, description: desc, ogImage: { url: "/assets/og-riptide.jpg", alt: "Pantallas de la extensión Riptide: bienvenida, ajustes y resumen del día" } });
}

/* ─── imágenes ──────────────────────────────────────────────────── */
const IMG = {
  evolution:  { src: "/assets/riptide/evolucion-diseno.webp",      w: 2400, h: 669 },
  context:    { src: "/assets/riptide/extension-en-contexto.webp", w: 2400, h: 1671 },
  onboarding: { src: "/assets/riptide/onboarding-y-ajustes.webp",  w: 2400, h: 846 },
  landing:    { src: "/assets/riptide/landing.webp",               w: 2400, h: 1589 },
};

/* ─── textos ────────────────────────────────────────────────────── */
const copy = {
  es: {
    back: "← Volver",
    to_top: "Volver arriba",
    zoom_hint: "Toca para ampliar",
    zoom_hint_fine: "Haz clic para ampliar",
    zoom_close: "Cerrar",
    nav: [
      { id: "rt-problem",   label: "Problema" },
      { id: "rt-research",  label: "Research" },
      { id: "rt-insights",  label: "Insights" },
      { id: "rt-solution",  label: "Solución" },
      { id: "rt-learnings", label: "Aprendizajes" },
    ],
    tags: "UX/UI · IA · Sostenibilidad · Proyecto conceptual",
    desc: "Extensión de navegador que hace visible el impacto hídrico de la actividad digital cotidiana. Awareness sin culpa, presencia sin intrusión.",
    meta: [
      ["Tipo", "Proyecto conceptual · Equipo de 7 personas"],
      ["Mi rol", "UX/UI Designer · Research"],
      ["Plataforma", "Extensión de navegador"],
      ["Duración", "Ene – Mar 2026"],
      ["Herramientas", "Figma · FigJam"],
    ],
    focusLabel: "Mi foco",
    focus: "Encuestas, entrevistas, síntesis de insights y HMW · Value Proposition Canvas, propuesta de valor y Business Model Canvas · Wireflow y wireframes de baja fidelidad",

    prob_label: "El problema",
    prob_title: "El impacto existe. Pero es invisible.",
    prob_p: [
      "Cada búsqueda, cada vídeo y cada consulta a una IA consume agua en los centros de datos que los refrigeran. Tres de cada cuatro personas encuestadas lo sabían, pero un tercio nunca se había parado a pensarlo. Lo saben en abstracto; no lo perciben mientras navegan, porque nada conecta un clic con su coste físico.",
      "Las extensiones que ya existen miden sobre todo carbono o energía. De las tres analizadas, dos calculan solo emisiones de CO₂ y la tercera se limita al uso de IA. Ninguna pone el agua en el centro de toda la navegación.",
    ],
    prob_quote: "«Sé que hay servidores y todo eso, pero lo tengo en una categoría mental de \"cosas técnicas que no veo\". No lo conecto con algo como el agua.»",
    prob_quote_by: "Participante en las entrevistas",

    res_label: "UX Research",
    res_title: "Lo que la gente aceptaría, y lo que no",
    res_intro: "Combinamos métodos cuantitativos y cualitativos para entender qué sabe la gente del consumo hídrico digital y, sobre todo, qué toleraría de una herramienta que se lo mostrara.",
    res_methods: ["55 encuestas", "9 entrevistas", "3 extensiones analizadas", "DAFO", "Desk research"],
    res_stats: [
      ["92,7 %", "ve interesante una extensión que muestre su impacto hídrico"],
      ["87,3 %", "cree que esa información cambiaría su forma de usar Internet"],
      ["81,8 %", "prefiere indicadores visuales simples (colores o estados)"],
      ["72,2 %", "quiere una presencia visible pero no intrusiva"],
    ],
    chart_title: "La culpa y las interrupciones son los dos motivos de rechazo principales",
    chart_note: "En color, los dos motivos que guiaron las decisiones de diseño.",
    chart_q: "¿Qué te generaría más rechazo en una herramienta así? · % de 55 personas · respuesta múltiple",
    chart_rows: [
      ["Mensajes culpabilizadores", 52.7, "52,7 %"],
      ["Interrupciones frecuentes", 47.3, "47,3 %"],
      ["Sensación de vigilancia", 40.0, "40,0 %"],
      ["Falta de claridad sobre el cálculo", 23.6, "23,6 %"],
    ],
    res_after: "El interés estaba validado; el riesgo estaba en el rechazo. Los dos motivos principales para abandonar una herramienta así, sentirse culpable y sentirse interrumpido, marcaron los dos límites del producto.",
    res_interviews: "Las entrevistas se centraron en el uso de IA, una de las actividades digitales de mayor consumo. Confirmaron el patrón: 6 de 9 personas describieron la extensión ideal como «un asistente discreto», y 7 de 9 seguirían usando la IA aunque la extensión les avisara de un consumo alto.",
    res_note: "Encuesta online, febrero de 2026: 55 respuestas (54 en la pregunta sobre nivel de presencia). El 78 % tiene más de 30 años y el 62 % usa el navegador más de 4 horas al día. Algunas preguntas admitían respuesta múltiple.",

    ins_label: "Insights",
    ins_title: "Del dato a la decisión",
    persona_name: "Ana, 32 años · Especialista en marketing digital",
    persona_text: "Pasa gran parte del día frente al ordenador y usa extensiones a diario, pero abandona las herramientas demasiado técnicas o invasivas. Le preocupa el medioambiente y quiere que sus valores se reflejen también en su vida digital, sin sentirse juzgada.",
    ins_central: "Casi nadie dejaría de usar la IA por un aviso. Riptide no podía prometer un cambio de conducta: tenía que hacer visible el impacto y dejar la decisión en manos de cada persona.",
    cols: ["Dato", "Insight", "Decisión de diseño"],
    rows: [
      ["El 52,7 % rechaza los mensajes culpabilizadores", "Informar sin juzgar", "Tono descriptivo y neutro: cifras y equivalencias, nunca reproches"],
      ["El 47,3 % rechaza las interrupciones; el 72,2 % quiere algo visible pero no intrusivo", "La utilidad tiene que superar a la molestia", "Sin pop-ups: un resumen diario a la hora que elige cada persona, con las alertas en tiempo real desactivadas por defecto"],
      ["El 81,8 % prefiere indicadores visuales simples; 7 de 9 entrevistados eligieron una gota o algo que se llena", "Un número abstracto no se siente", "En el panel web, un vaso que se llena según el objetivo semanal"],
      ["8 de 9 entrevistados dijeron que una equivalencia física les impacta más que los litros; 6 eligieron el grifo abierto", "Falta un puente entre el clic y el agua física", "Cada cifra va con su equivalencia («42 litros = 1 ducha de 5 minutos») y la persona elige la unidad: litros, tazas o piscinas olímpicas"],
      ["6 de 9 entrevistados quieren poder silenciarla", "El control es de la persona usuaria", "Onboarding con tres ajustes (qué se mide, cada cuánto se avisa, en qué unidad se muestra) y notificaciones que se pueden desactivar"],
      ["El 40 % rechaza la sensación de vigilancia", "La confianza se gana explicando", "Pantalla de privacidad en el onboarding, procesamiento local de los datos y opciones para exportarlos o borrarlos"],
    ],

    sol_label: "Solución",
    sol_title: "No interrumpe, no juzga, no controla.",
    sol_value: "Riptide convierte la actividad digital en señales visuales simples, integradas de forma discreta en el navegador. No se trata de optimizar tu comportamiento: se trata de hacerlo visible.",
    sol_strategy: "Modelo freemium, con licencias para centros educativos y empresas con programas de sostenibilidad. Lo trabajamos en el Value Proposition Canvas y el Business Model Canvas.",
    hp_label: "Happy path",
    hp_cta: "CTA",
    hp_steps: [
      { t: "Descubrimiento", d: "El usuario llega a la landing a través de:", b: ["Recomendación", "Presentación del proyecto", "Web, redes o boca a boca"], cta: "Añadir a Chrome" },
      { t: "Instalación", d: "Instala la extensión. Al abrirla por primera vez aparece un modal de bienvenida que invita a personalizar la experiencia.", b: [], cta: "Siguiente" },
      { t: "Onboarding", d: "Tres pantallas presentan las claves de la extensión:", b: ["Tu huella hídrica", "Consejos diarios", "Privacidad total"], cta: "Siguiente" },
      { t: "Personalización 1", d: "El usuario elige qué quiere ver:", b: ["Webs que más le gastan", "Consejos de ahorro", "Gráfico semanal"], cta: "Siguiente" },
      { t: "Personalización 2", d: "El usuario decide cada cuánto quiere recibir avisos:", b: ["Desactivado", "Diario", "Cada 3 días", "Semanal"], cta: "Siguiente" },
      { t: "Personalización 3", d: "El usuario elige en qué medida quiere ver su gasto de agua:", b: ["Litros", "Piscinas olímpicas", "Tazas", "Almacenadores"], cta: "Empezar" },
      { t: "Resumen", d: "El popup muestra el consumo del día:", b: ["Litros gastados y su equivalencia", "Desglose por streaming, búsquedas y navegación", "Día de la semana con menos consumo"], cta: "Ver detalles" },
      { t: "Panel web", d: "El usuario accede a su panel, donde puede ver:", b: ["Resumen semanal, mensual o anual", "Objetivo semanal", "Actividades principales", "Equivalencias cotidianas", "Sugerencias para reducir consumo"], cta: "" },
    ],
    img_happy_alt: "Happy path de Riptide: descubrimiento, instalación, onboarding, tres pasos de personalización, resumen y panel web",
    img_happy_cap: "Del descubrimiento al panel: instalación, onboarding, tres ajustes de personalización y primer resumen.",
    img_evo_alt: "La pantalla de bienvenida de Riptide en tres fases: boceto a mano, wireframe de baja fidelidad y diseño final",
    img_evo_cap: "Del boceto en papel al wireframe y a la alta fidelidad.",
    img_ctx_alt: "Navegador con Google abierto y el popup de Riptide desplegado bajo el icono de la gota: hoy 42 litros, equivalentes a una ducha de 5 minutos, con desglose por streaming, búsquedas y navegación",
    img_ctx_cap: "La extensión vive en la barra del navegador y solo se abre cuando la persona la consulta.",
    img_onb_alt: "Seis pantallas del popup de Riptide: bienvenida, privacidad, qué quieres ver, cada cuánto avisar, unidad de medida y configuración",
    img_onb_cap: "Onboarding y ajustes: la persona decide qué se mide, cuándo se avisa y en qué unidad.",
    img_land_alt: "Landing de Riptide con la mascota gota y el titular «Tu vida digital también consume agua. Descubre cuánta.»",
    img_land_cap: "La landing, puerta de entrada a la extensión y al panel web.",
    sol_team: "La alta fidelidad fue trabajo de equipo; mi parte en esta fase fueron el wireflow y los wireframes de baja fidelidad.",

    learn_label: "Aprendizajes",
    learn_title: "Qué me llevo de este proyecto",
    learns: [
      ["Awareness sí, culpa no", "La culpa fue el primer motivo de rechazo (52,7 %). El tono no es un detalle de copy: decide si la herramienta sigue instalada."],
      ["El control es innegociable", "Casi la mitad rechaza las interrupciones y casi nadie dejaría de usar la IA por un aviso. Una herramienta de awareness no puede imponer: el resumen diario y las alertas opcionales dejan la decisión en manos de cada persona."],
      ["Los datos se leen dos veces", "Al revisar las respuestas originales para este case study encontré cifras cruzadas en la síntesis. Corregirlas cambió la historia: el problema no era la ignorancia, sino la invisibilidad. Y un empate en las entrevistas no es una preferencia: es una pregunta abierta que hay que testear."],
    ],
    next_label: "Próximas iteraciones",
    next: [
      "Testear un indicador que se llene en la barra del navegador: fue la preferencia más clara de las entrevistas (7 de 9) y quedó fuera del diseño final",
      "Pasar de preferencias declaradas a comportamiento real con un test de prototipo: ¿la gente mantiene la extensión instalada?",
      "Validar la metodología de cálculo con fuentes científicas antes de mostrar cifras como «0,26 ml por búsqueda»",
    ],
    cta_label: "¿Hablamos?",
    cta_sub: "Si te interesa este proyecto o quieres conocer más sobre mi trabajo, escríbeme.",
    cta_email: "Enviar email",
    cta_linkedin: "Ver LinkedIn",
  },

  en: {
    back: "← Back",
    to_top: "Back to top",
    zoom_hint: "Tap to enlarge",
    zoom_hint_fine: "Click to enlarge",
    zoom_close: "Close",
    nav: [
      { id: "rt-problem",   label: "Problem" },
      { id: "rt-research",  label: "Research" },
      { id: "rt-insights",  label: "Insights" },
      { id: "rt-solution",  label: "Solution" },
      { id: "rt-learnings", label: "Learnings" },
    ],
    tags: "UX/UI · AI · Sustainability · Conceptual project",
    desc: "A browser extension that makes the hidden water footprint of everyday digital activity visible. Awareness without guilt, presence without intrusion.",
    meta: [
      ["Type", "Conceptual project · Team of 7 people"],
      ["My role", "UX/UI Designer · Research"],
      ["Platform", "Browser extension"],
      ["Duration", "Jan – Mar 2026"],
      ["Tools", "Figma · FigJam"],
    ],
    focusLabel: "My focus",
    focus: "Surveys, interviews, insight synthesis and HMW · Value Proposition Canvas, value proposition and Business Model Canvas · Wireflow and low-fidelity wireframes",

    prob_label: "The problem",
    prob_title: "The impact exists. But it's invisible.",
    prob_p: [
      "Every search, every video and every AI prompt uses water in the data centres that keep them cool. Three in four people we surveyed knew this, yet a third had never stopped to think about it. They know it in the abstract; they don't feel it while browsing, because nothing links a click to its physical cost.",
      "Existing extensions mostly measure carbon or energy. Of the three we analysed, two only calculate CO₂ emissions and the third is limited to AI use. None puts water at the centre of all browsing.",
    ],
    prob_quote: "“I know there are servers and all that, but I file it under ‘technical things I don't see’. I don't connect it with something like water.”",
    prob_quote_by: "Interview participant",

    res_label: "UX Research",
    res_title: "What people would accept, and what they wouldn't",
    res_intro: "We combined quantitative and qualitative methods to understand what people know about digital water use and, above all, what they would tolerate from a tool that showed it to them.",
    res_methods: ["55 surveys", "9 interviews", "3 extensions analysed", "SWOT", "Desk research"],
    res_stats: [
      ["92.7%", "find an extension that shows their water footprint interesting"],
      ["87.3%", "believe this information would change how they use the internet"],
      ["81.8%", "prefer simple visual indicators (colours or states)"],
      ["72.2%", "want a presence that is visible but not intrusive"],
    ],
    chart_title: "Guilt and interruptions are the top two reasons for rejection",
    chart_note: "Highlighted: the two reasons that guided the design decisions.",
    chart_q: "What would put you off most in a tool like this? · % of 55 people · multiple answers",
    chart_rows: [
      ["Guilt-inducing messages", 52.7, "52.7%"],
      ["Frequent interruptions", 47.3, "47.3%"],
      ["Feeling watched", 40.0, "40.0%"],
      ["Unclear calculation method", 23.6, "23.6%"],
    ],
    res_after: "Interest was validated; the risk lay in rejection. The two main reasons to drop a tool like this, feeling guilty and feeling interrupted, set the two limits of the product.",
    res_interviews: "The interviews focused on AI use, one of the most water-intensive digital activities. They confirmed the pattern: 6 in 9 people described the ideal extension as “a discreet assistant”, and 7 in 9 would keep using AI even if the extension flagged high consumption.",
    res_note: "Online survey, February 2026: 55 responses (54 on the presence question). 78% are over 30 and 62% use their browser more than 4 hours a day. Some questions allowed multiple answers.",

    ins_label: "Insights",
    ins_title: "From data to decision",
    persona_name: "Ana, 32 · Digital marketing specialist",
    persona_text: "She spends most of the day at her computer and uses extensions daily, but drops tools that are too technical or invasive. She cares about the environment and wants her values reflected in her digital life too, without feeling judged.",
    ins_central: "Almost no one would stop using AI because of a warning. Riptide couldn't promise behaviour change: it had to make the impact visible and leave the decision to each person.",
    cols: ["Data", "Insight", "Design decision"],
    rows: [
      ["52.7% reject guilt-inducing messages", "Inform without judging", "A neutral, descriptive tone: figures and equivalents, never reproach"],
      ["47.3% reject interruptions; 72.2% want something visible but not intrusive", "Usefulness has to outweigh annoyance", "No pop-ups: a daily summary at the time each person chooses, with real-time alerts off by default"],
      ["81.8% prefer simple visual indicators; 7 of 9 interviewees chose a drop or something that fills up", "An abstract number isn't felt", "In the web dashboard, a glass that fills up towards the weekly goal"],
      ["8 of 9 interviewees said a physical equivalent hits harder than litres; 6 chose a running tap", "A bridge is missing between the click and physical water", "Every figure comes with an equivalent (“42 litres = one 5-minute shower”) and people choose the unit: litres, cups or Olympic pools"],
      ["6 of 9 interviewees want to be able to mute it", "Control belongs to the user", "Onboarding with three settings (what is measured, how often you're notified, which unit is shown) and notifications that can be switched off"],
      ["40% reject feeling watched", "Trust is earned by explaining", "A privacy screen in the onboarding, local data processing and options to export or delete data"],
    ],

    sol_label: "Solution",
    sol_title: "It doesn't interrupt, judge or control.",
    sol_value: "Riptide turns digital activity into simple visual signals, built discreetly into the browser. It's not about optimising your behaviour: it's about making it visible.",
    sol_strategy: "Freemium model, with licences for schools and companies running sustainability programmes. We worked it out in the Value Proposition Canvas and the Business Model Canvas.",
    hp_label: "Happy path",
    hp_cta: "CTA",
    hp_steps: [
      { t: "Discovery", d: "The user reaches the landing page through:", b: ["A recommendation", "The project presentation", "The website, social media or word of mouth"], cta: "Add to Chrome" },
      { t: "Installation", d: "They install the extension. On first opening, a welcome modal invites them to personalise the experience.", b: [], cta: "Next" },
      { t: "Onboarding", d: "Three screens introduce the key ideas of the extension:", b: ["Your water footprint", "Daily tips", "Full privacy"], cta: "Next" },
      { t: "Personalisation 1", d: "The user chooses what they want to see:", b: ["Websites that use the most water", "Saving tips", "Weekly chart"], cta: "Next" },
      { t: "Personalisation 2", d: "The user decides how often they want to be notified:", b: ["Off", "Daily", "Every 3 days", "Weekly"], cta: "Next" },
      { t: "Personalisation 3", d: "The user chooses which unit to see their water use in:", b: ["Litres", "Olympic pools", "Cups", "Storage tanks"], cta: "Start" },
      { t: "Summary", d: "The popup shows today's use:", b: ["Litres used and their equivalent", "Breakdown by streaming, searches and browsing", "The day of the week with the lowest use"], cta: "View details" },
      { t: "Web dashboard", d: "The user opens their dashboard, where they can see:", b: ["Weekly, monthly or yearly summary", "Weekly goal", "Main activities", "Everyday equivalents", "Suggestions to reduce use"], cta: "" },
    ],
    img_happy_alt: "Riptide happy path: discovery, installation, onboarding, three personalisation steps, summary and web dashboard",
    img_happy_cap: "From discovery to dashboard: installation, onboarding, three personalisation settings and a first summary.",
    img_evo_alt: "The Riptide welcome screen in three stages: hand sketch, low-fidelity wireframe and final design",
    img_evo_cap: "From paper sketch to wireframe to high fidelity.",
    img_ctx_alt: "Browser with Google open and the Riptide popup expanded under the drop icon: 42 litres today, equivalent to a 5-minute shower, broken down by streaming, searches and browsing",
    img_ctx_cap: "The extension lives in the browser bar and only opens when the person checks it.",
    img_onb_alt: "Six Riptide popup screens: welcome, privacy, what to see, how often to notify, unit of measure and settings",
    img_onb_cap: "Onboarding and settings: people decide what is measured, when they're notified and in which unit.",
    img_land_alt: "Riptide landing page with the water-drop mascot and the headline “Your digital life also uses water. Find out how much.” (Spanish interface)",
    img_land_cap: "The landing page, the entry point to the extension and the web dashboard.",
    sol_team: "High fidelity was a team effort; my part in this phase was the wireflow and the low-fidelity wireframes.",

    learn_label: "Learnings",
    learn_title: "What I take from this project",
    learns: [
      ["Awareness yes, guilt no", "Guilt was the top reason for rejection (52.7%). Tone isn't a copy detail: it decides whether the tool stays installed."],
      ["Control is non-negotiable", "Almost half reject interruptions, and almost no one would stop using AI because of a warning. An awareness tool can't impose: the daily summary and optional alerts leave the decision to each person."],
      ["Read the data twice", "Revisiting the raw responses for this case study, I found mislabelled figures in the synthesis. Correcting them changed the story: the problem wasn't ignorance, it was invisibility. And a tie in the interviews isn't a preference: it's an open question to test."],
    ],
    next_label: "Next iterations",
    next: [
      "Test an indicator that fills up in the browser bar: the clearest preference in the interviews (7 of 9), left out of the final design",
      "Move from stated preferences to real behaviour with a prototype test: do people keep the extension installed?",
      "Validate the calculation method with scientific sources before showing figures such as “0.26 ml per search”",
    ],
    cta_label: "Let's talk",
    cta_sub: "If this project caught your eye or you'd like to know more about my work, drop me a line.",
    cta_email: "Send email",
    cta_linkedin: "View LinkedIn",
  },

  pt: {
    back: "← Voltar",
    to_top: "Voltar ao topo",
    zoom_hint: "Toque para ampliar",
    zoom_hint_fine: "Clique para ampliar",
    zoom_close: "Fechar",
    nav: [
      { id: "rt-problem",   label: "Problema" },
      { id: "rt-research",  label: "Research" },
      { id: "rt-insights",  label: "Insights" },
      { id: "rt-solution",  label: "Solução" },
      { id: "rt-learnings", label: "Aprendizados" },
    ],
    tags: "UX/UI · IA · Sustentabilidade · Projeto conceitual",
    desc: "Extensão de navegador que torna visível o impacto hídrico da atividade digital do dia a dia. Consciência sem culpa, presença sem intrusão.",
    meta: [
      ["Tipo", "Projeto conceitual · Equipe de 7 pessoas"],
      ["Minha função", "UX/UI Designer · Research"],
      ["Plataforma", "Extensão de navegador"],
      ["Duração", "Jan – Mar 2026"],
      ["Ferramentas", "Figma · FigJam"],
    ],
    focusLabel: "Meu foco",
    focus: "Questionários, entrevistas, síntese de insights e HMW · Value Proposition Canvas, proposta de valor e Business Model Canvas · Wireflow e wireframes de baixa fidelidade",

    prob_label: "O problema",
    prob_title: "O impacto existe. Mas é invisível.",
    prob_p: [
      "Cada busca, cada vídeo e cada consulta a uma IA consome água nos data centers que os resfriam. Três em cada quatro pessoas que responderam ao questionário sabiam disso, mas um terço nunca tinha parado para pensar no assunto. Elas sabem na teoria; não percebem enquanto navegam, porque nada liga um clique ao seu custo físico.",
      "As extensões que já existem medem principalmente carbono ou energia. Das três analisadas, duas calculam apenas emissões de CO₂ e a terceira se limita ao uso de IA. Nenhuma coloca a água no centro de toda a navegação.",
    ],
    prob_quote: "“Sei que existem servidores e tudo mais, mas guardo isso numa categoria mental de ‘coisas técnicas que não vejo’. Não associo isso a algo como a água.”",
    prob_quote_by: "Participante das entrevistas",

    res_label: "UX Research",
    res_title: "O que as pessoas aceitariam, e o que não",
    res_intro: "Combinamos métodos quantitativos e qualitativos para entender o que as pessoas sabem sobre o consumo hídrico digital e, principalmente, o que tolerariam de uma ferramenta que mostrasse isso a elas.",
    res_methods: ["55 questionários", "9 entrevistas", "3 extensões analisadas", "Análise SWOT", "Desk research"],
    res_stats: [
      ["92,7%", "acha interessante uma extensão que mostre seu impacto hídrico"],
      ["87,3%", "acredita que essa informação mudaria a forma como usa a internet"],
      ["81,8%", "prefere indicadores visuais simples (cores ou estados)"],
      ["72,2%", "quer uma presença visível, mas não intrusiva"],
    ],
    chart_title: "A culpa e as interrupções são os dois principais motivos de rejeição",
    chart_note: "Em destaque, os dois motivos que guiaram as decisões de design.",
    chart_q: "O que mais faria você rejeitar uma ferramenta assim? · % de 55 pessoas · múltipla escolha",
    chart_rows: [
      ["Mensagens que geram culpa", 52.7, "52,7%"],
      ["Interrupções frequentes", 47.3, "47,3%"],
      ["Sensação de estar sendo vigiado", 40.0, "40,0%"],
      ["Falta de clareza no cálculo", 23.6, "23,6%"],
    ],
    res_after: "O interesse estava validado; o risco estava na rejeição. Os dois principais motivos para abandonar uma ferramenta assim, sentir culpa e ser interrompido, definiram os dois limites do produto.",
    res_interviews: "As entrevistas focaram no uso de IA, uma das atividades digitais que mais consomem água. Elas confirmaram o padrão: 6 de 9 pessoas descreveram a extensão ideal como “um assistente discreto”, e 7 de 9 continuariam usando a IA mesmo que a extensão avisasse sobre um consumo alto.",
    res_note: "Questionário online, fevereiro de 2026: 55 respostas (54 na pergunta sobre nível de presença). 78% têm mais de 30 anos e 62% usam o navegador mais de 4 horas por dia. Algumas perguntas permitiam múltipla escolha.",

    ins_label: "Insights",
    ins_title: "Do dado à decisão",
    persona_name: "Ana, 32 anos · Especialista em marketing digital",
    persona_text: "Passa grande parte do dia em frente ao computador e usa extensões todos os dias, mas abandona ferramentas técnicas ou invasivas demais. Ela se preocupa com o meio ambiente e quer que seus valores também se reflitam na sua vida digital, sem se sentir julgada.",
    ins_central: "Quase ninguém deixaria de usar a IA por causa de um aviso. O Riptide não podia prometer uma mudança de comportamento: precisava tornar o impacto visível e deixar a decisão nas mãos de cada pessoa.",
    cols: ["Dado", "Insight", "Decisão de design"],
    rows: [
      ["52,7% rejeitam mensagens que geram culpa", "Informar sem julgar", "Tom descritivo e neutro: números e equivalências, nunca críticas"],
      ["47,3% rejeitam interrupções; 72,2% querem algo visível, mas não intrusivo", "A utilidade precisa superar o incômodo", "Sem pop-ups: um resumo diário no horário que cada pessoa escolhe, com os alertas em tempo real desativados por padrão"],
      ["81,8% preferem indicadores visuais simples; 7 de 9 entrevistados escolheram uma gota ou algo que se enche", "Um número abstrato não é sentido", "No painel web, um copo que se enche conforme a meta semanal"],
      ["8 de 9 entrevistados disseram que uma equivalência física impacta mais do que os litros; 6 escolheram a torneira aberta", "Falta uma ponte entre o clique e a água física", "Cada número vem com sua equivalência (“42 litros = 1 banho de 5 minutos”) e a pessoa escolhe a unidade: litros, xícaras ou piscinas olímpicas"],
      ["6 de 9 entrevistados querem poder silenciá-la", "O controle é de quem usa", "Onboarding com três ajustes (o que é medido, com que frequência avisar, em que unidade mostrar) e notificações que podem ser desativadas"],
      ["40% rejeitam a sensação de estar sendo vigiados", "A confiança se conquista explicando", "Tela de privacidade no onboarding, processamento local dos dados e opções para exportá-los ou apagá-los"],
    ],

    sol_label: "Solução",
    sol_title: "Não interrompe, não julga, não controla.",
    sol_value: "O Riptide transforma a atividade digital em sinais visuais simples, integrados de forma discreta ao navegador. Não se trata de otimizar o seu comportamento: se trata de torná-lo visível.",
    sol_strategy: "Modelo freemium, com licenças para escolas e empresas com programas de sustentabilidade. Nós o trabalhamos no Value Proposition Canvas e no Business Model Canvas.",
    hp_label: "Happy path",
    hp_cta: "CTA",
    hp_steps: [
      { t: "Descoberta", d: "O usuário chega à landing page por meio de:", b: ["Recomendação", "Apresentação do projeto", "Site, redes sociais ou boca a boca"], cta: "Adicionar ao Chrome" },
      { t: "Instalação", d: "Instala a extensão. Ao abri-la pela primeira vez, aparece um modal de boas-vindas que convida a personalizar a experiência.", b: [], cta: "Avançar" },
      { t: "Onboarding", d: "Três telas apresentam os pontos principais da extensão:", b: ["Sua pegada hídrica", "Dicas diárias", "Privacidade total"], cta: "Avançar" },
      { t: "Personalização 1", d: "O usuário escolhe o que quer ver:", b: ["Sites que mais gastam água", "Dicas de economia", "Gráfico semanal"], cta: "Avançar" },
      { t: "Personalização 2", d: "O usuário decide com que frequência quer receber avisos:", b: ["Desativado", "Diário", "A cada 3 dias", "Semanal"], cta: "Avançar" },
      { t: "Personalização 3", d: "O usuário escolhe em que unidade quer ver seu gasto de água:", b: ["Litros", "Piscinas olímpicas", "Xícaras", "Reservatórios"], cta: "Começar" },
      { t: "Resumo", d: "O pop-up mostra o consumo do dia:", b: ["Litros gastos e sua equivalência", "Divisão por streaming, buscas e navegação", "Dia da semana com menor consumo"], cta: "Ver detalhes" },
      { t: "Painel web", d: "O usuário acessa seu painel, onde pode ver:", b: ["Resumo semanal, mensal ou anual", "Meta semanal", "Atividades principais", "Equivalências do dia a dia", "Sugestões para reduzir o consumo"], cta: "" },
    ],
    img_happy_alt: "Happy path do Riptide: descoberta, instalação, onboarding, três etapas de personalização, resumo e painel web",
    img_happy_cap: "Da descoberta ao painel: instalação, onboarding, três ajustes de personalização e o primeiro resumo.",
    img_evo_alt: "A tela de boas-vindas do Riptide em três fases: esboço à mão, wireframe de baixa fidelidade e design final",
    img_evo_cap: "Do esboço no papel ao wireframe e à alta fidelidade.",
    img_ctx_alt: "Navegador com o Google aberto e o pop-up do Riptide aberto abaixo do ícone da gota: hoje 42 litros, equivalentes a um banho de 5 minutos, com divisão por streaming, buscas e navegação",
    img_ctx_cap: "A extensão fica na barra do navegador e só abre quando a pessoa a consulta.",
    img_onb_alt: "Seis telas do pop-up do Riptide: boas-vindas, privacidade, o que você quer ver, com que frequência avisar, unidade de medida e configurações",
    img_onb_cap: "Onboarding e ajustes: a pessoa decide o que é medido, quando é avisada e em que unidade.",
    img_land_alt: "Landing page do Riptide com a mascote gota e o título “Sua vida digital também consome água. Descubra quanto.” (interface em espanhol)",
    img_land_cap: "A landing page, porta de entrada para a extensão e o painel web.",
    sol_team: "A alta fidelidade foi um trabalho em equipe; minha parte nesta fase foram o wireflow e os wireframes de baixa fidelidade.",

    learn_label: "Aprendizados",
    learn_title: "O que levo deste projeto",
    learns: [
      ["Consciência sim, culpa não", "A culpa foi o principal motivo de rejeição (52,7%). O tom não é um detalhe de copy: ele decide se a ferramenta continua instalada."],
      ["O controle é inegociável", "Quase metade rejeita interrupções e quase ninguém deixaria de usar a IA por causa de um aviso. Uma ferramenta de conscientização não pode impor: o resumo diário e os alertas opcionais deixam a decisão nas mãos de cada pessoa."],
      ["Os dados se leem duas vezes", "Ao revisar as respostas originais para este case study, encontrei números trocados na síntese. Corrigi-los mudou a história: o problema não era a falta de conhecimento, e sim a invisibilidade. E um empate nas entrevistas não é uma preferência: é uma pergunta em aberto que precisa ser testada."],
    ],
    next_label: "Próximas iterações",
    next: [
      "Testar um indicador que se enche na barra do navegador: foi a preferência mais clara nas entrevistas (7 de 9) e ficou fora do design final",
      "Passar de preferências declaradas para comportamento real com um teste de protótipo: as pessoas mantêm a extensão instalada?",
      "Validar a metodologia de cálculo com fontes científicas antes de mostrar números como “0,26 ml por busca”",
    ],
    cta_label: "Vamos conversar?",
    cta_sub: "Se você se interessou por este projeto ou quer conhecer mais sobre o meu trabalho, me escreva.",
    cta_email: "Enviar e-mail",
    cta_linkedin: "Ver LinkedIn",
  },
};

type Copy = typeof copy.es;
const getCopy = (lang: string): Copy => (copy as Record<string, Copy>)[lang] ?? copy.es;

/* ─── helpers ───────────────────────────────────────────────────── */
const serif = "'DM Serif Display', Georgia, serif";
const body: React.CSSProperties = { fontSize: "1rem", lineHeight: 1.8, color: "var(--muted)" };
const smallCaps: React.CSSProperties = { fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)" };
const card: React.CSSProperties = { background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "10px" };

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <span style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)" }}>{label}</span>
      <h2 style={{ fontFamily: serif, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 400, lineHeight: 1.2, marginTop: "0.4rem", color: "var(--ink)" }}>
        {title}
      </h2>
    </div>
  );
}

function Figure({ img, alt, caption, C }: { img: { src: string; w: number; h: number }; alt: string; caption: string; C: Copy }) {
  return (
    <figure style={{ margin: "0 0 2.5rem" }}>
      <div style={{ borderRadius: "12px", overflow: "hidden", background: "#EAF1F7", padding: "0 0 2.75rem" }}>
        <ZoomableImage
          src={img.src}
          alt={alt}
          width={img.w}
          height={img.h}
          style={{ width: "100%", height: "auto", display: "block" }}
          hint={C.zoom_hint} hintFine={C.zoom_hint_fine}
          hintStyle={{ bottom: "-2.25rem" }}
          closeLabel={C.zoom_close}
        />
      </div>
      <figcaption style={{ fontSize: "0.8125rem", lineHeight: 1.6, color: "var(--muted)", marginTop: "0.75rem" }}>{caption}</figcaption>
    </figure>
  );
}

function HappyPath({ C }: { C: Copy }) {
  return (
    <figure style={{ margin: "0 0 2.5rem" }}>
      <ol className="rt-hp" aria-label={C.img_happy_alt} tabIndex={0} style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {C.hp_steps.map((st, i) => (
          <li key={st.t} style={{ ...card, padding: "1.1rem 1.1rem 1.2rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <span aria-hidden="true" style={{ fontFamily: serif, fontSize: "1.25rem", lineHeight: 1, color: "var(--accent)" }}>{String(i + 1).padStart(2, "0")}</span>
            <p style={{ fontSize: "0.875rem", fontWeight: 600, lineHeight: 1.35, color: "var(--ink)" }}>{st.t}</p>
            <p style={{ fontSize: "0.8125rem", lineHeight: 1.55, color: "var(--muted)" }}>{st.d}</p>
            {st.b.length > 0 && (
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.2rem" }}>
                {st.b.map((x) => (
                  <li key={x} style={{ display: "flex", gap: "0.4rem", fontSize: "0.8125rem", lineHeight: 1.5, color: "var(--muted)" }}>
                    <span aria-hidden="true" style={{ color: "var(--accent)" }}>·</span>{x}
                  </li>
                ))}
              </ul>
            )}
            {st.cta && (
              <span style={{ marginTop: "auto", paddingTop: "0.5rem", fontSize: "0.75rem", color: "var(--ink)" }}>
                <span style={{ ...smallCaps, color: "var(--accent)" }}>{C.hp_cta}</span> → {st.cta}
              </span>
            )}
          </li>
        ))}
      </ol>
      <figcaption style={{ fontSize: "0.8125rem", lineHeight: 1.6, color: "var(--muted)", marginTop: "0.75rem" }}>{C.img_happy_cap}</figcaption>
    </figure>
  );
}

/* ─── page ──────────────────────────────────────────────────────── */
export default async function RiptidePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const C = getCopy(lang);

  const maxW = "860px";
  const section: React.CSSProperties = { maxWidth: maxW, margin: "0 auto", padding: "5rem 1.5rem", borderBottom: "1px solid var(--border)" };
  const sectionLast: React.CSSProperties = { ...section, borderBottom: "none" };
  const chartMax = 60;

  return (
    <div style={{ background: "var(--bg)", color: "var(--ink)" }}>
      <CaseStudyNav sections={C.nav} />

      {/* ── BACK ── */}
      <div style={{ maxWidth: maxW, margin: "0 auto", padding: "6.5rem 1.5rem 0" }}>
        <Link href={`/${lang}`} style={{ fontSize: "0.875rem", color: "var(--muted)", textDecoration: "none" }}>{C.back}</Link>
      </div>

      {/* ── 01 HERO ── */}
      <section id="cs-hero" style={section}>
        <Reveal>
          <p style={{ fontSize: "0.6875rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "0.75rem" }}>{C.tags}</p>
          <h1 style={{ fontFamily: serif, fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 400, lineHeight: 1.1, marginBottom: "0.5rem", color: "var(--ink)" }}>Riptide</h1>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "var(--muted)", maxWidth: "580px", marginBottom: "3rem" }}>{C.desc}</p>

          <div className="rt-meta" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem" }}>
            {C.meta.map(([label, value]) => (
              <div key={label} style={{ ...card, padding: "1rem 1.1rem" }}>
                <p style={{ ...smallCaps, color: "var(--accent)", marginBottom: "0.35rem" }}>{label}</p>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.5, color: "var(--ink)" }}>{value}</p>
              </div>
            ))}
            <div className="rt-meta-wide" style={{ ...card, padding: "1rem 1.1rem" }}>
              <p style={{ ...smallCaps, color: "var(--accent)", marginBottom: "0.35rem" }}>{C.focusLabel}</p>
              <p style={{ fontSize: "0.875rem", lineHeight: 1.5, color: "var(--ink)" }}>{C.focus}</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── 02 PROBLEMA ── */}
      <section id="rt-problem" style={section}>
        <Reveal>
          <SectionHeading label={C.prob_label} title={C.prob_title} />
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "640px" }}>
            {C.prob_p.map((p) => <p key={p} style={body}>{p}</p>)}
          </div>
          <blockquote style={{ margin: "2rem 0 0", borderLeft: "2px solid var(--accent)", paddingLeft: "1.25rem", maxWidth: "640px" }}>
            <p style={{ fontFamily: serif, fontSize: "1.25rem", lineHeight: 1.5, color: "var(--ink)" }}>{C.prob_quote}</p>
            <footer style={{ fontSize: "0.8125rem", color: "var(--muted)", marginTop: "0.5rem" }}>— {C.prob_quote_by}</footer>
          </blockquote>
        </Reveal>
      </section>

      {/* ── 03 RESEARCH ── */}
      <section id="rt-research" style={section}>
        <Reveal>
          <SectionHeading label={C.res_label} title={C.res_title} />
          <p style={{ ...body, maxWidth: "640px", marginBottom: "1.5rem" }}>{C.res_intro}</p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2.5rem", display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {C.res_methods.map((m) => (
              <li key={m} style={{ ...card, borderRadius: "999px", padding: "0.35rem 0.85rem", fontSize: "0.8125rem", color: "var(--ink)" }}>{m}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rt-stats" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem", marginBottom: "3rem" }}>
            {C.res_stats.map(([n, t]) => (
              <div key={n} style={{ ...card, padding: "1.25rem" }}>
                <p style={{ fontFamily: serif, fontSize: "2rem", lineHeight: 1, color: "var(--accent)", marginBottom: "0.5rem" }}>{n}</p>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.5, color: "var(--muted)" }}>{t}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <figure style={{ ...card, padding: "1.5rem", margin: "0 0 2.5rem" }}>
            <figcaption>
              <p style={{ fontSize: "1rem", fontWeight: 600, lineHeight: 1.4, color: "var(--ink)", marginBottom: "0.35rem" }}>{C.chart_title}</p>
              <p style={{ fontSize: "0.8125rem", lineHeight: 1.5, color: "var(--muted)", marginBottom: "1.5rem" }}>{C.chart_q}</p>
            </figcaption>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
              {C.chart_rows.map(([label, v, txt], i) => (
                <li key={label as string} className="rt-bar">
                  <span style={{ fontSize: "0.875rem", color: "var(--ink)" }}>{label}</span>
                  <span style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span aria-hidden="true" style={{ flex: 1, height: "0.75rem", borderRadius: "999px", background: "var(--bg)", overflow: "hidden" }}>
                      <span style={{ display: "block", height: "100%", width: `${((v as number) / chartMax) * 100}%`, borderRadius: "999px", background: i < 2 ? "var(--accent)" : "var(--muted)", opacity: i < 2 ? 1 : 0.45 }} />
                    </span>
                    <span style={{ fontSize: "0.875rem", fontWeight: i < 2 ? 700 : 400, color: "var(--ink)", minWidth: "3.5rem", textAlign: "right" }}>{txt}</span>
                  </span>
                </li>
              ))}
            </ul>
            <p style={{ fontSize: "0.75rem", lineHeight: 1.5, color: "var(--muted)", marginTop: "1.25rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span aria-hidden="true" style={{ display: "inline-block", width: "0.75rem", height: "0.75rem", borderRadius: "999px", background: "var(--accent)", flexShrink: 0 }} />
              {C.chart_note}
            </p>
          </figure>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "640px" }}>
            <p style={body}>{C.res_after}</p>
            <p style={body}>{C.res_interviews}</p>
            <p style={{ fontSize: "0.75rem", lineHeight: 1.6, color: "var(--muted)", marginTop: "0.5rem" }}>{C.res_note}</p>
          </div>
        </Reveal>
      </section>

      {/* ── 04 INSIGHTS → DECISIONES ── */}
      <section id="rt-insights" style={section}>
        <Reveal>
          <SectionHeading label={C.ins_label} title={C.ins_title} />
          <div style={{ ...card, padding: "1.25rem 1.5rem", marginBottom: "2rem" }}>
            <p style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--ink)", marginBottom: "0.4rem" }}>{C.persona_name}</p>
            <p style={{ fontSize: "0.9375rem", lineHeight: 1.7, color: "var(--muted)" }}>{C.persona_text}</p>
          </div>
          <blockquote style={{ margin: "0 0 2.5rem", borderLeft: "2px solid var(--accent)", paddingLeft: "1.25rem" }}>
            <p style={{ fontFamily: serif, fontSize: "1.25rem", lineHeight: 1.5, color: "var(--ink)" }}>{C.ins_central}</p>
          </blockquote>
        </Reveal>
        <Reveal delay={0.1}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {C.rows.map((row, i) => (
              <div key={i} className="hmw-row" style={{ ...card, display: "grid", gridTemplateColumns: "1fr", gap: "0.5rem", padding: "1rem", fontSize: "0.875rem", lineHeight: 1.6 }}>
                <div>
                  <span style={{ ...smallCaps, display: "block", marginBottom: "0.25rem" }}>{C.cols[0]}</span>
                  <span style={{ color: "var(--muted)" }}>{row[0]}</span>
                </div>
                <div>
                  <span style={{ ...smallCaps, display: "block", marginBottom: "0.25rem" }}>{C.cols[1]}</span>
                  <span style={{ color: "var(--ink)" }}>{row[1]}</span>
                </div>
                <div>
                  <span style={{ ...smallCaps, display: "block", marginBottom: "0.25rem" }}>{C.cols[2]}</span>
                  <span style={{ color: "var(--accent)", fontWeight: 600 }}>{row[2]}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── 05 SOLUCIÓN ── */}
      <section id="rt-solution" style={section}>
        <Reveal>
          <SectionHeading label={C.sol_label} title={C.sol_title} />
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "640px", marginBottom: "2.5rem" }}>
            <p style={body}>{C.sol_value}</p>
            <p style={body}>{C.sol_strategy}</p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <HappyPath C={C} />
          <Figure img={IMG.evolution} alt={C.img_evo_alt} caption={C.img_evo_cap} C={C} />
        </Reveal>
        <Reveal delay={0.1}>
          <Figure img={IMG.landing} alt={C.img_land_alt} caption={C.img_land_cap} C={C} />
          <Figure img={IMG.context} alt={C.img_ctx_alt} caption={C.img_ctx_cap} C={C} />
          <Figure img={IMG.onboarding} alt={C.img_onb_alt} caption={C.img_onb_cap} C={C} />
          <p style={{ fontSize: "0.8125rem", lineHeight: 1.6, color: "var(--muted)", fontStyle: "italic" }}>{C.sol_team}</p>
        </Reveal>
      </section>

      {/* ── 06 APRENDIZAJES ── */}
      <section id="rt-learnings" style={sectionLast}>
        <Reveal>
          <SectionHeading label={C.learn_label} title={C.learn_title} />
          <ol style={{ listStyle: "none", padding: 0, margin: "0 0 3rem" }}>
            {C.learns.map(([title, text], i) => (
              <li key={title} style={{ display: "flex", gap: "1.25rem", padding: "1.25rem 0", borderBottom: "1px solid var(--border)" }}>
                <span aria-hidden="true" style={{ fontFamily: serif, fontSize: "1.5rem", color: "var(--accent)", flexShrink: 0, lineHeight: 1 }}>{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <p style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--ink)", marginBottom: "0.375rem" }}>{title}</p>
                  <p style={{ fontSize: "0.9375rem", color: "var(--muted)", lineHeight: 1.75 }}>{text}</p>
                </div>
              </li>
            ))}
          </ol>
          <h3 style={{ fontFamily: serif, fontSize: "1.3rem", fontWeight: 400, marginBottom: "1rem", color: "var(--ink)" }}>{C.next_label}</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
            {C.next.map((n) => (
              <li key={n} style={{ display: "flex", gap: "0.5rem", fontSize: "0.9375rem", lineHeight: 1.65, color: "var(--muted)" }}>
                <span aria-hidden="true" style={{ color: "var(--accent)", flexShrink: 0 }}>→</span>{n}
              </li>
            ))}
          </ul>
        </Reveal>

        <div style={{ marginTop: "3rem", padding: "2rem", borderRadius: "0.75rem", border: "1px solid var(--border)", background: "var(--surface)", textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", color: "var(--accent)", marginBottom: "0.75rem", letterSpacing: "-0.01em" }}>{C.cta_label}</p>
          <p style={{ fontSize: "0.9375rem", color: "var(--muted)", marginBottom: "1.5rem", lineHeight: 1.6 }}>{C.cta_sub}</p>
          <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="mailto:mvreissilva@gmail.com" className="btn-primary">{C.cta_email}</a>
            <a
              href="https://linkedin.com/in/reis-marcus"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", padding: "0.625rem 1.25rem", borderRadius: "0.5rem", border: "1px solid var(--border)", background: "transparent", fontSize: "0.875rem", fontWeight: 500, color: "var(--ink)", textDecoration: "none", transition: "opacity 0.2s", fontFamily: "var(--font-sans)" }}
            >
              {C.cta_linkedin}
            </a>
          </div>
        </div>

        <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
          <Link href={`/${lang}`} style={{ fontSize: "0.875rem", color: "var(--muted)", textDecoration: "none" }}>{C.back}</Link>
          <BackToTop label={C.to_top} />
        </div>
      </section>

      <style>{`
        .rt-bar { display: grid; grid-template-columns: 1fr; gap: 0.35rem; }
        .rt-hp { display: grid; gap: 0.75rem; grid-auto-flow: column; grid-auto-columns: 78%; overflow-x: auto; scroll-snap-type: x mandatory; padding-bottom: 0.5rem !important; }
        .rt-hp > li { scroll-snap-align: start; }
        @media (min-width: 640px) {
          .rt-meta { grid-template-columns: repeat(2, 1fr) !important; }
          .rt-meta-wide { grid-column: span 1; }
          .rt-stats { grid-template-columns: repeat(2, 1fr) !important; }
          .rt-hp { grid-auto-flow: row; grid-auto-columns: auto; overflow: visible; grid-template-columns: repeat(2, 1fr) !important; padding-bottom: 0 !important; }
          .hmw-row { grid-template-columns: 1fr 1fr 1fr !important; }
          .rt-bar { grid-template-columns: 15rem 1fr; align-items: center; gap: 1rem; }
        }
        @media (min-width: 900px) {
          .rt-meta { grid-template-columns: repeat(4, 1fr) !important; }
          .rt-meta-wide { grid-column: span 3; }
          .rt-hp { grid-template-columns: repeat(4, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}
