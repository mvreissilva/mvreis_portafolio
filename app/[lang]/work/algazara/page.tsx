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
  const title = lang === "pt" ? "Proyecto Algazara — Case Study UX/UI" : "Proyecto Algazara — UX/UI Case Study";
  const desc = lang === "en"
    ? "Redesign and repositioning of a psychologist and sexologist's website: content hierarchy, calls to action and a component system built from her brand."
    : lang === "pt"
    ? "Redesign e reposicionamento do site de uma psicóloga e sexóloga: hierarquia de conteúdo, chamadas para ação e um sistema de componentes criado a partir da marca dela."
    : "Rediseño y reposicionamiento de la web de una psicóloga y sexóloga: jerarquía de contenido, llamadas a la acción y un sistema de componentes creado desde su marca.";
  return pageMetadata({ lang, path: "/work/algazara", title, description: desc, ogImage: { url: "/assets/og-algazara.jpg", alt: "La web de Proyecto Algazara en un portátil y un móvil" } });
}

/* ─── imágenes ──────────────────────────────────────────────────── */
const IMG = {
  before: { src: "/assets/algazara/hero-antes.webp",    w: 1600, h: 750 },
  after:  { src: "/assets/algazara/hero-despues.webp",  w: 1600, h: 750 },
};

/* Paleta de la marca: muestras con su contraste medido (WCAG 2.2) */
const PALETTE = [
  { hex: "#FC4C00", fg: "#281414" },
  { hex: "#B83A12", fg: "#FFFFFF" },
  { hex: "#F4ECDC", fg: "#281414" },
  { hex: "#281414", fg: "#F4ECDC" },
];
/* ─── textos ────────────────────────────────────────────────────── */
const copy = {
  es: {
    back: "← Volver",
    to_top: "Volver arriba",
    zoom_hint: "Toca para ampliar",
    zoom_hint_fine: "Haz clic para ampliar",
    zoom_close: "Cerrar",
    nav: [
      { id: "al-problem",   label: "Problema" },
      { id: "al-evolution", label: "Evolución" },
      { id: "al-strategy",  label: "Planteamiento" },
      { id: "al-decisions", label: "Decisiones" },
      { id: "al-system",    label: "Sistema" },
      { id: "al-results",   label: "Resultados" },
    ],
    tags: "UX/UI · Estrategia de contenido · Design system · Cliente real",
    desc: "Rediseño y reposicionamiento de la web de una psicóloga y sexóloga: qué se dice primero, dónde están las llamadas a la acción y un sistema visual nacido de su marca.",
    meta: [
      ["Tipo", "Cliente real · Proyecto individual"],
      ["Mi rol", "UX/UI Designer · UX Writer"],
      ["Plataforma", "Web publicada en IONOS"],
      ["Fecha", "Octubre–noviembre 2026"],
      ["Herramientas", "Figma · Editor con IA de IONOS · Umami"],
    ],
    focusLabel: "Mi foco",
    focus: "Arquitectura de contenido y posicionamiento · Jerarquía de llamadas a la acción · UX writing · Identidad visual aplicada · Sistema de componentes",

    prob_label: "El problema",
    prob_title: "Tres dudas sin resolver",
    prob_p: [
      "Quien busca a una sexóloga suele llegar con vergüenza o con prisa. Antes de escribir necesita entender qué se ofrece, confiar en la profesional y saber que puede escribir sin exponerse.",
      "La web de Pilar Habas transmitía cercanía, pero no resolvía ninguna de las tres. Punto de partida: entre 8 y 10 solicitudes de entrevista al mes.",
    ],

    evo_label: "Evolución",
    evo_title: "De la auditoría al reposicionamiento",
    evo_intro: "El trabajo avanzó en tres etapas. Pilar edita su web con el editor con IA de IONOS, así que cada cambio tenía que poder aplicarse con un prompt. Eso pedía reglas pocas y fáciles de repetir.",
    stages: [
      ["01", "Punto de partida", "Octubre", "Auditoría heurística de 7 páginas en móvil y escritorio, contrastada con Pilar: 21 problemas. Titular genérico, siete fotos de stock en las cabeceras, tres estilos de botón, testimonios con nombre de pacientes, sin precio y con la política de privacidad rota."],
      ["02", "Rediseño con su marca", "Octubre–noviembre", "Llevé su identidad a la web: monograma, tipografías y una paleta con dos naranjas. Textos legales, formulario con validación y 18 de los 21 problemas resueltos."],
      ["03", "Reposicionamiento", "Noviembre", "Una auditoría externa puntuó la web con un 6,6. Separé sus falsos positivos de los fallos reales y replanteé la portada, las llamadas a la acción y el sistema de botones."],
    ],
    before_label: "Antes",
    after_label: "Rediseño",
    img_before_alt: "Cabecera anterior: titular blanco sobre una foto de globos de colores, con las credenciales casi ilegibles",
    img_after_alt: "Cabecera rediseñada: fondo crema, titular en la tipografía de la marca, credenciales legibles, botón naranja oscuro y monograma grande",
    ba_cap: "La cabecera antes y en la etapa 2. En la etapa 3 se sumaron el titular nuevo y la foto de Pilar sobre el arco.",

    strat_label: "Planteamiento",
    strat_title: "Qué, para quién y cómo, en cinco segundos",
    strat_intro: "El titular de partida era cálido, pero no decía qué hacía Pilar ni que atendía online. Reordené la portada para responder a las tres dudas en el primer pantallazo.",
    head_before: "Sea cual sea tu dificultad, te acompaño",
    head_after: "Terapia sexual y de pareja online, sin juicios ni prejuicios",
    strat_points: [
      ["Posicionamiento", "Servicio y modalidad en el titular, en el título para buscadores y en el pie. Una página propia para cada búsqueda: terapia sexual online y terapia de pareja online."],
      ["Atención", "Las tarjetas hablan del problema, no del servicio: «¿Te pasa algo de esto?», con motivos de consulta concretos, y «Para ti» o «Para vuestra relación» para que cada persona se reconozca."],
      ["Contenido", "Recuperé tres artículos antiguos que seguían recibiendo visitas desde Google y enlacé cada uno con su página de servicio."],
    ],
    cta_title: "Una sola acción principal",
    cta_levels: [
      ["Principal", "Pide tu entrevista gratuita", "El mismo texto en la cabecera, la portada y las páginas de servicio, con la letra pequeña «30 minutos por videollamada, sin compromiso»."],
      ["Secundaria", "Conoce a Pilar · Ver servicios", "Para quien todavía no está listo para escribir."],
      ["Enlace de texto", "Pedir la primera entrevista →", "Salidas discretas al final de una sección, que no compiten con la principal."],
    ],
    cta_note: "Cada botón de contacto lleva un evento de analítica con la sección de origen, para saber qué llamada funciona.",

    dec_label: "Decisiones",
    dec_title: "Lo delicado de una web de terapia",
    dec_cols: ["Situación", "Decisión", "Por qué"],
    decisions: [
      ["Testimonios con nombre y foto de pacientes", "Sección «Por qué confiar en mí», con colegiación, registro sanitario y experiencia", "En terapia sexual la privacidad es parte del servicio. Exponer a pacientes resta confianza."],
      ["Sin precio", "Duración, modalidad y precio en cada tarjeta: «60 min · online · 60 €»", "Quita la pregunta más incómoda antes de escribir. Pilar decidió publicarlo en la etapa 3."],
      ["Primer contacto con compromiso", "Entrevista gratuita de 30 minutos, explicada en tres pasos en «Cómo trabajamos»", "Se pide una conversación, no una terapia."],
      ["Formulario que se enviaba vacío", "Errores en tono cercano: «Escribe aunque sea una línea para saber cómo ayudarte.»", "En este contexto, un error frío suena a reproche."],
      ["Cursos pedía un email con un asunto concreto", "Botón a un formulario con el mensaje ya escrito para la lista de espera", "Menos pasos y ninguna regla que recordar."],
      ["Quien consultaba por otro motivo no tenía salida", "Bloque final con un enlace de texto a la entrevista", "No compite con la llamada principal, pero no deja fuera a nadie."],
    ],

    sys_label: "Identidad y sistema",
    sys_title: "De la marca a un sistema de componentes",
    sys_p: "La clienta ya tenía logotipo, monograma y colores, pero no un sistema. Pasé esa identidad a Figma, la ordené en componentes y con ellos maqueté la portada antes de tocar la web. El monograma, dos comillas que se sonríen, cuenta la terapia como una conversación: lo convertí en el patrón que encabeza los títulos, adopté sus tipografías, Avotte y Sagata Sans, y en la portada uní marca y persona con la foto de Pilar sobre el arco naranja.",
    flow: [
      ["Identidad de partida", "Logotipo, monograma y colores, sin reglas de uso"],
      ["Componentes en Figma", "Monograma en 3 colores, logotipo, botón con 3 variantes, tarjetas, cabecera y pie"],
      ["Maqueta", "Portada en escritorio y móvil, frente a una página con la web de antes"],
      ["Web publicada", "Cada pieza llevada al editor de IONOS con un prompt"],
    ],
    palette_title: "Un naranja para decorar, otro para actuar",
    palette_names: ["Naranja de marca · decorativo", "Naranja de acción · botones y texto", "Crema · fondo", "Marrón · texto"],
    palette_notes: ["Formas, arco y comillas", "Botones y enlaces", "Base de la página", "Texto principal"],
    btn_title: "Botones: de tres estilos a un sistema",
    btn_p: "Convivían naranja relleno, contorno y negro o blanco para acciones del mismo nivel. Los reduje a un principal, un secundario y una variante para fondo oscuro, con el mismo radio y relleno.",
    specimen: {
      primary: "Pide tu entrevista gratuita",
      secondary: "Conoce a Pilar",
      link: "Pedir la primera entrevista →",
      dark: "Escríbeme",
    },
    specimen_notes: ["Principal · relleno #B83A12", "Secundario · contorno de 2 px", "Terciario · enlace de texto", "Fondo oscuro · contorno #FC4C00"],
    specimen_cap: "Esquema con los colores reales de la web.",
    rules_title: "Reglas que se repiten en toda la web",
    rules: [
      "Rótulos de sección de 11 a 13 px en todas las páginas",
      "Un solo texto para la llamada principal",
      "Tarjetas de servicio con el mismo orden: motivos, duración, modalidad y precio",
      "Menú de hamburguesa por debajo de 1100 px, sin cortes de texto",
    ],

    resu_label: "Resultados",
    resu_title: "Medido, no estimado",
    resu_cols: ["Indicador", "Antes", "Después"],
    resu_rows: [
      ["Nota de la auditoría externa (su escala)", "6,6", "9,4"],
      ["Problemas de mi auditoría resueltos", "0 de 21", "18 de 21"],
      ["Estilos de botón para acciones del mismo nivel", "3", "2"],
      ["Textos distintos para la llamada principal", "2", "1"],
      ["Páginas propias por servicio", "0", "2"],
      ["Componentes de marca en Figma", "0", "14"],
    ],
    resu_note: "La nota externa la calculé yo con la escala del informe. Los puntos que faltan dependen de decisiones de la clienta, como publicar un teléfono.",
    resu_p: "Revisé cada cambio de la IA antes de publicar y detecté cuatro regresiones. Con la foto de Pilar incluida, la portada mantiene 96 en rendimiento móvil en PageSpeed.",

    learn_label: "Aprendizajes",
    learn_title: "Qué me llevo de este proyecto",
    learns: [
      ["Una auditoría vale lo que se puede aplicar", "La herramienta y el presupuesto reales de la clienta cambiaron todas las prioridades."],
      ["Un sistema pequeño sobrevive", "Dos botones y una regla para las comillas caben en un prompt. Un sistema grande no resistiría al editor."],
      ["Una herramienta no sustituye la revisión", "Ni la IA que aplica los cambios ni la que los puntúa lo detectan todo."],
    ],
    next_label: "Próximos pasos",
    next: [
      "Medir las solicitudes de entrevista al mes frente a la base de 8–10",
      "Comparar Search Console a finales de noviembre con la base: 6 clics y 58 impresiones en 28 días",
      "Validar la portada con una prueba de 5 segundos",
    ],
    cta_label: "¿Hablamos?",
    cta_sub: "Si te interesa este proyecto o quieres conocer más sobre mi trabajo, escríbeme.",
    cta_email: "Enviar email",
    cta_linkedin: "Ver LinkedIn",
  },

  en: {
    back: "← Back",
    to_top: "Back to top",
    zoom_hint: "Tap to zoom",
    zoom_hint_fine: "Click to zoom",
    zoom_close: "Close",
    nav: [
      { id: "al-problem",   label: "Problem" },
      { id: "al-evolution", label: "Evolution" },
      { id: "al-strategy",  label: "Strategy" },
      { id: "al-decisions", label: "Decisions" },
      { id: "al-system",    label: "System" },
      { id: "al-results",   label: "Results" },
    ],
    tags: "UX/UI · Content strategy · Design system · Real client",
    desc: "Redesign and repositioning of a psychologist and sexologist's website: what is said first, where the calls to action go, and a visual system born from her brand.",
    meta: [
      ["Type", "Real client · Solo project"],
      ["My role", "UX/UI Designer · UX Writer"],
      ["Platform", "Live website on IONOS"],
      ["Date", "October–November 2026"],
      ["Tools", "Figma · IONOS AI editor · Umami"],
    ],
    focusLabel: "My focus",
    focus: "Content architecture and positioning · Call-to-action hierarchy · UX writing · Applied visual identity · Component system",

    prob_label: "The problem",
    prob_title: "Three unanswered questions",
    prob_p: [
      "People looking for a sexologist often arrive feeling embarrassed or in a hurry. Before getting in touch, they need to understand what is offered, trust the professional and know they can write without exposing themselves.",
      "Pilar Habas's website felt warm, but it answered none of the three. Starting point: 8 to 10 interview requests a month.",
    ],

    evo_label: "Evolution",
    evo_title: "From audit to repositioning",
    evo_intro: "The work moved through three stages. Pilar edits her site with the IONOS AI editor, so every change had to be applicable with a prompt. That called for few rules that are easy to repeat.",
    stages: [
      ["01", "Starting point", "October", "Heuristic audit of 7 pages on mobile and desktop, checked with Pilar: 21 issues. A generic headline, seven stock photos in the headers, three button styles, testimonials with patients' names, no price and a broken privacy policy."],
      ["02", "Redesign with her brand", "October–November", "I brought her identity to the site: monogram, typefaces and a palette with two oranges. Legal texts, a validated form and 18 of the 21 issues fixed."],
      ["03", "Repositioning", "November", "An external audit scored the site 6.6. I separated its false positives from the real issues and reworked the home page, the calls to action and the button system."],
    ],
    before_label: "Before",
    after_label: "Redesign",
    img_before_alt: "Previous header: white headline over a photo of colourful balloons, with the credentials barely legible",
    img_after_alt: "Redesigned header: cream background, headline in the brand typeface, legible credentials, dark orange button and a large monogram",
    ba_cap: "The header before and in stage 2. Stage 3 added the new headline and Pilar's photo over the arch.",

    strat_label: "Strategy",
    strat_title: "What, for whom and how, in five seconds",
    strat_intro: "The original headline was warm, but it didn't say what Pilar did or that she worked online. I reordered the home page to answer the three questions above the fold.",
    head_before: "Whatever your difficulty, I'm with you",
    head_after: "Online sex and couples therapy, without judgement or prejudice",
    strat_points: [
      ["Positioning", "Service and format in the headline, the search title and the footer. One page for each search: online sex therapy and online couples therapy."],
      ["Attention", "The cards talk about the problem, not the service: “Does any of this sound familiar?”, with specific reasons for seeking help, and “For you” or “For your relationship” so each person recognises themselves."],
      ["Content", "I restored three old articles that were still getting visits from Google and linked each one to its service page."],
    ],
    cta_title: "One main action",
    cta_levels: [
      ["Primary", "Book your free interview", "The same label in the header, the home page and the service pages, with the small print “30 minutes by video call, no commitment”."],
      ["Secondary", "Meet Pilar · See services", "For people who aren't ready to write yet."],
      ["Text link", "Book the first interview →", "Discreet exits at the end of a section that don't compete with the primary action."],
    ],
    cta_note: "Every contact button carries an analytics event with its source section, to learn which call to action works.",

    dec_label: "Decisions",
    dec_title: "The sensitive side of a therapy website",
    dec_cols: ["Situation", "Decision", "Why"],
    decisions: [
      ["Testimonials with patients' names and photos", "A “Why trust me” section, with licence number, health registration and experience", "In sex therapy, privacy is part of the service. Exposing patients erodes trust."],
      ["No price", "Duration, format and price on each card: “60 min · online · €60”", "It removes the most awkward question before writing. Pilar chose to publish it in stage 3."],
      ["A first contact that felt like a commitment", "A free 30-minute interview, explained in three steps in “How we work”", "It asks for a conversation, not for therapy."],
      ["A form that could be sent empty", "Errors in a warm tone: “Write even just one line so I know how to help you.”", "In this context, a cold error message sounds like a reproach."],
      ["Courses asked for an email with a specific subject", "A button to a form with the waiting-list message already written", "Fewer steps and no rule to remember."],
      ["People with other concerns had no way forward", "A closing block with a text link to the interview", "It doesn't compete with the primary action, but leaves no one out."],
    ],

    sys_label: "Identity and system",
    sys_title: "From brand to component system",
    sys_p: "The client already had a logo, a monogram and colours, but no system. I brought that identity into Figma, organised it into components and used them to lay out the home page before touching the site. The monogram, two quotation marks smiling at each other, tells therapy as a conversation: I turned it into the pattern that heads the titles, adopted her typefaces, Avotte and Sagata Sans, and on the home page joined brand and person with Pilar's photo over the orange arch.",
    flow: [
      ["Starting identity", "Logo, monogram and colours, with no usage rules"],
      ["Components in Figma", "Monogram in 3 colours, logo, button with 3 variants, cards, header and footer"],
      ["Layout", "Home page on desktop and mobile, next to a page with the old site"],
      ["Live site", "Each piece brought to the IONOS editor with a prompt"],
    ],
    palette_title: "One orange to decorate, another to act",
    palette_names: ["Brand orange · decorative", "Action orange · buttons and text", "Cream · background", "Brown · text"],
    palette_notes: ["Shapes, arch and quotation marks", "Buttons and links", "Page base", "Body text"],
    btn_title: "Buttons: from three styles to a system",
    btn_p: "Filled orange, outline and black or white coexisted for actions of the same level. I reduced them to a primary, a secondary and a dark-background variant, with the same radius and padding.",
    specimen: {
      primary: "Book your free interview",
      secondary: "Meet Pilar",
      link: "Book the first interview →",
      dark: "Write to me",
    },
    specimen_notes: ["Primary · #B83A12 fill", "Secondary · 2 px outline", "Tertiary · text link", "Dark background · #FC4C00 outline"],
    specimen_cap: "Diagram using the website's real colours. Labels translated from Spanish.",
    rules_title: "Rules repeated across the site",
    rules: [
      "Section labels from 11 to 13 px on every page",
      "A single label for the primary call to action",
      "Service cards in the same order: reasons, duration, format and price",
      "Hamburger menu below 1100 px, with no truncated text",
    ],

    resu_label: "Results",
    resu_title: "Measured, not estimated",
    resu_cols: ["Metric", "Before", "After"],
    resu_rows: [
      ["External audit score (its own scale)", "6.6", "9.4"],
      ["Issues from my audit fixed", "0 of 21", "18 of 21"],
      ["Button styles for same-level actions", "3", "2"],
      ["Different labels for the primary call to action", "2", "1"],
      ["Dedicated service pages", "0", "2"],
      ["Brand components in Figma", "0", "14"],
    ],
    resu_note: "I calculated the external score myself using the report's scale. The missing points depend on the client's decisions, such as publishing a phone number.",
    resu_p: "I reviewed every AI change before publishing and caught four regressions. With Pilar's photo included, the home page keeps 96 for mobile performance in PageSpeed.",

    learn_label: "Learnings",
    learn_title: "What I take from this project",
    learns: [
      ["An audit is worth what can be applied", "The client's real tool and budget changed every priority."],
      ["A small system survives", "Two buttons and one rule for the quotation marks fit in a prompt. A large system wouldn't survive the editor."],
      ["A tool doesn't replace review", "Neither the AI that applies the changes nor the one that scores them catches everything."],
    ],
    next_label: "Next steps",
    next: [
      "Measure monthly interview requests against the 8–10 baseline",
      "Compare Search Console at the end of November with the baseline: 6 clicks and 58 impressions in 28 days",
      "Validate the home page with a 5-second test",
    ],
    cta_label: "Let's talk?",
    cta_sub: "If you're interested in this project or want to know more about my work, write to me.",
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
      { id: "al-problem",   label: "Problema" },
      { id: "al-evolution", label: "Evolução" },
      { id: "al-strategy",  label: "Estratégia" },
      { id: "al-decisions", label: "Decisões" },
      { id: "al-system",    label: "Sistema" },
      { id: "al-results",   label: "Resultados" },
    ],
    tags: "UX/UI · Estratégia de conteúdo · Design system · Cliente real",
    desc: "Redesign e reposicionamento do site de uma psicóloga e sexóloga: o que se diz primeiro, onde ficam as chamadas para ação e um sistema visual nascido da marca dela.",
    meta: [
      ["Tipo", "Cliente real · Projeto individual"],
      ["Meu papel", "UX/UI Designer · UX Writer"],
      ["Plataforma", "Site publicado na IONOS"],
      ["Data", "Outubro–novembro 2026"],
      ["Ferramentas", "Figma · Editor com IA da IONOS · Umami"],
    ],
    focusLabel: "Meu foco",
    focus: "Arquitetura de conteúdo e posicionamento · Hierarquia de chamadas para ação · UX writing · Identidade visual aplicada · Sistema de componentes",

    prob_label: "O problema",
    prob_title: "Três dúvidas sem resposta",
    prob_p: [
      "Quem procura uma sexóloga costuma chegar com vergonha ou com pressa. Antes de escrever, precisa entender o que é oferecido, confiar na profissional e saber que pode escrever sem se expor.",
      "O site de Pilar Habas transmitia acolhimento, mas não resolvia nenhuma das três. Ponto de partida: de 8 a 10 pedidos de entrevista por mês.",
    ],

    evo_label: "Evolução",
    evo_title: "Da auditoria ao reposicionamento",
    evo_intro: "O trabalho avançou em três etapas. Pilar edita o site com o editor com IA da IONOS, então cada mudança precisava poder ser aplicada com um prompt. Isso pedia poucas regras e fáceis de repetir.",
    stages: [
      ["01", "Ponto de partida", "Outubro", "Auditoria heurística de 7 páginas no celular e no desktop, validada com Pilar: 21 problemas. Título genérico, sete fotos de banco de imagens nos cabeçalhos, três estilos de botão, depoimentos com nome de pacientes, sem preço e com a política de privacidade quebrada."],
      ["02", "Redesign com a marca dela", "Outubro–novembro", "Levei a identidade dela para o site: monograma, tipografias e uma paleta com dois laranjas. Textos legais, formulário com validação e 18 dos 21 problemas resolvidos."],
      ["03", "Reposicionamento", "Novembro", "Uma auditoria externa deu nota 6,6 ao site. Separei os falsos positivos dos problemas reais e repensei a página inicial, as chamadas para ação e o sistema de botões."],
    ],
    before_label: "Antes",
    after_label: "Redesign",
    img_before_alt: "Cabeçalho anterior: título branco sobre uma foto de balões coloridos, com as credenciais quase ilegíveis",
    img_after_alt: "Cabeçalho redesenhado: fundo creme, título na tipografia da marca, credenciais legíveis, botão laranja-escuro e monograma grande",
    ba_cap: "O cabeçalho antes e na etapa 2. Na etapa 3 entraram o novo título e a foto de Pilar sobre o arco.",

    strat_label: "Estratégia",
    strat_title: "O quê, para quem e como, em cinco segundos",
    strat_intro: "O título original era acolhedor, mas não dizia o que Pilar fazia nem que atendia online. Reorganizei a página inicial para responder às três dúvidas na primeira dobra.",
    head_before: "Seja qual for a sua dificuldade, eu te acompanho",
    head_after: "Terapia sexual e de casal online, sem julgamentos nem preconceitos",
    strat_points: [
      ["Posicionamento", "Serviço e modalidade no título, no título para buscadores e no rodapé. Uma página própria para cada busca: terapia sexual online e terapia de casal online."],
      ["Atenção", "Os cards falam do problema, não do serviço: “Algo disso acontece com você?”, com motivos de consulta concretos, e “Para você” ou “Para a relação de vocês” para que cada pessoa se reconheça."],
      ["Conteúdo", "Recuperei três artigos antigos que ainda recebiam visitas do Google e liguei cada um à sua página de serviço."],
    ],
    cta_title: "Uma única ação principal",
    cta_levels: [
      ["Principal", "Agende sua entrevista gratuita", "O mesmo texto no cabeçalho, na página inicial e nas páginas de serviço, com a letra miúda “30 minutos por videochamada, sem compromisso”."],
      ["Secundária", "Conheça a Pilar · Ver serviços", "Para quem ainda não está pronto para escrever."],
      ["Link de texto", "Agendar a primeira entrevista →", "Saídas discretas no fim de uma seção, que não competem com a principal."],
    ],
    cta_note: "Cada botão de contato tem um evento de analytics com a seção de origem, para saber qual chamada funciona.",

    dec_label: "Decisões",
    dec_title: "O lado delicado de um site de terapia",
    dec_cols: ["Situação", "Decisão", "Por quê"],
    decisions: [
      ["Depoimentos com nome e foto de pacientes", "Seção “Por que confiar em mim”, com registro profissional, registro sanitário e experiência", "Na terapia sexual, a privacidade faz parte do serviço. Expor pacientes tira confiança."],
      ["Sem preço", "Duração, modalidade e preço em cada card: “60 min · online · 60 €”", "Tira a pergunta mais constrangedora antes de escrever. Pilar decidiu publicar na etapa 3."],
      ["Primeiro contato com cara de compromisso", "Entrevista gratuita de 30 minutos, explicada em três passos em “Como trabalhamos”", "Pede-se uma conversa, não uma terapia."],
      ["Formulário que podia ser enviado vazio", "Erros em tom acolhedor: “Escreva pelo menos uma linha para eu saber como te ajudar.”", "Nesse contexto, um erro frio soa como bronca."],
      ["Cursos pedia um e-mail com um assunto específico", "Botão para um formulário com a mensagem da lista de espera já escrita", "Menos passos e nenhuma regra para lembrar."],
      ["Quem buscava ajuda por outro motivo não tinha saída", "Bloco final com um link de texto para a entrevista", "Não compete com a chamada principal, mas não deixa ninguém de fora."],
    ],

    sys_label: "Identidade e sistema",
    sys_title: "Da marca a um sistema de componentes",
    sys_p: "A cliente já tinha logotipo, monograma e cores, mas não um sistema. Levei essa identidade para o Figma, organizei em componentes e com eles diagramei a página inicial antes de mexer no site. O monograma, duas aspas que sorriem uma para a outra, conta a terapia como uma conversa: transformei-o no padrão que abre os títulos, adotei as tipografias dela, Avotte e Sagata Sans, e na página inicial uni marca e pessoa com a foto de Pilar sobre o arco laranja.",
    flow: [
      ["Identidade de partida", "Logotipo, monograma e cores, sem regras de uso"],
      ["Componentes no Figma", "Monograma em 3 cores, logotipo, botão com 3 variantes, cards, cabeçalho e rodapé"],
      ["Diagramação", "Página inicial no desktop e no celular, ao lado de uma página com o site antigo"],
      ["Site publicado", "Cada peça levada ao editor da IONOS com um prompt"],
    ],
    palette_title: "Um laranja para decorar, outro para agir",
    palette_names: ["Laranja da marca · decorativo", "Laranja de ação · botões e texto", "Creme · fundo", "Marrom · texto"],
    palette_notes: ["Formas, arco e aspas", "Botões e links", "Base da página", "Texto principal"],
    btn_title: "Botões: de três estilos a um sistema",
    btn_p: "Conviviam laranja preenchido, contorno e preto ou branco para ações do mesmo nível. Reduzi a um principal, um secundário e uma variante para fundo escuro, com o mesmo raio e o mesmo espaçamento interno.",
    specimen: {
      primary: "Agende sua entrevista gratuita",
      secondary: "Conheça a Pilar",
      link: "Agendar a primeira entrevista →",
      dark: "Escreva para mim",
    },
    specimen_notes: ["Principal · preenchido #B83A12", "Secundário · contorno de 2 px", "Terciário · link de texto", "Fundo escuro · contorno #FC4C00"],
    specimen_cap: "Esquema com as cores reais do site. Textos traduzidos do espanhol.",
    rules_title: "Regras que se repetem em todo o site",
    rules: [
      "Rótulos de seção de 11 para 13 px em todas as páginas",
      "Um único texto para a chamada principal",
      "Cards de serviço na mesma ordem: motivos, duração, modalidade e preço",
      "Menu hambúrguer abaixo de 1100 px, sem textos cortados",
    ],

    resu_label: "Resultados",
    resu_title: "Medido, não estimado",
    resu_cols: ["Indicador", "Antes", "Depois"],
    resu_rows: [
      ["Nota da auditoria externa (escala dela)", "6,6", "9,4"],
      ["Problemas da minha auditoria resolvidos", "0 de 21", "18 de 21"],
      ["Estilos de botão para ações do mesmo nível", "3", "2"],
      ["Textos diferentes para a chamada principal", "2", "1"],
      ["Páginas próprias por serviço", "0", "2"],
      ["Componentes de marca no Figma", "0", "14"],
    ],
    resu_note: "Calculei a nota externa eu mesmo, com a escala do relatório. Os pontos que faltam dependem de decisões da cliente, como publicar um telefone.",
    resu_p: "Revisei cada mudança da IA antes de publicar e encontrei quatro regressões. Com a foto de Pilar incluída, a página inicial mantém 96 em desempenho mobile no PageSpeed.",

    learn_label: "Aprendizados",
    learn_title: "O que levo deste projeto",
    learns: [
      ["Uma auditoria vale o que dá para aplicar", "A ferramenta e o orçamento reais da cliente mudaram todas as prioridades."],
      ["Um sistema pequeno sobrevive", "Dois botões e uma regra para as aspas cabem num prompt. Um sistema grande não resistiria ao editor."],
      ["Uma ferramenta não substitui a revisão", "Nem a IA que aplica as mudanças nem a que dá as notas detectam tudo."],
    ],
    next_label: "Próximos passos",
    next: [
      "Medir os pedidos de entrevista por mês em relação à base de 8–10",
      "Comparar o Search Console no fim de novembro com a base: 6 cliques e 58 impressões em 28 dias",
      "Validar a página inicial com um teste de 5 segundos",
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
const figureBg = "#F4ECDC";

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

function Shot({ img, alt, C, label }: { img: { src: string; w: number; h: number }; alt: string; C: Copy; label?: string }) {
  return (
    <div style={{ borderRadius: "12px", overflow: "hidden", background: figureBg, padding: "0 0 2.75rem", position: "relative" }}>
      {label && (
        <span style={{ position: "absolute", top: "0.75rem", left: "0.75rem", zIndex: 1, ...smallCaps, color: "#281414", background: "#FFFFFFE6", borderRadius: "999px", padding: "0.3rem 0.7rem" }}>{label}</span>
      )}
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
  );
}

/* ─── page ──────────────────────────────────────────────────────── */
const h3: React.CSSProperties = { fontFamily: serif, fontSize: "1.3rem", fontWeight: 400, marginBottom: "1rem", color: "var(--ink)" };
const btnBase: React.CSSProperties = { display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "0.7rem 1.2rem", borderRadius: "999px", fontSize: "0.875rem", fontWeight: 600, lineHeight: 1.2, fontFamily: "var(--font-sans)", textAlign: "center" };

export default async function AlgazaraPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const C = getCopy(lang);

  const maxW = "860px";
  const section: React.CSSProperties = { maxWidth: maxW, margin: "0 auto", padding: "5rem 1.5rem", borderBottom: "1px solid var(--border)" };
  const sectionLast: React.CSSProperties = { ...section, borderBottom: "none" };

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
          <h1 style={{ fontFamily: serif, fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 400, lineHeight: 1.1, marginBottom: "0.5rem", color: "var(--ink)" }}>Proyecto Algazara</h1>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "var(--muted)", maxWidth: "580px", marginBottom: "3rem" }}>{C.desc}</p>

          <div className="al-meta" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem" }}>
            {C.meta.map(([label, value]) => (
              <div key={label} style={{ ...card, padding: "1rem 1.1rem" }}>
                <p style={{ ...smallCaps, color: "var(--accent)", marginBottom: "0.35rem" }}>{label}</p>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.5, color: "var(--ink)" }}>{value}</p>
              </div>
            ))}
            <div className="al-meta-wide" style={{ ...card, padding: "1rem 1.1rem" }}>
              <p style={{ ...smallCaps, color: "var(--accent)", marginBottom: "0.35rem" }}>{C.focusLabel}</p>
              <p style={{ fontSize: "0.875rem", lineHeight: 1.5, color: "var(--ink)" }}>{C.focus}</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── 02 PROBLEMA ── */}
      <section id="al-problem" style={section}>
        <Reveal>
          <SectionHeading label={C.prob_label} title={C.prob_title} />
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "640px" }}>
            {C.prob_p.map((p) => <p key={p} style={body}>{p}</p>)}
          </div>
        </Reveal>
      </section>

      {/* ── 03 EVOLUCIÓN ── */}
      <section id="al-evolution" style={section}>
        <Reveal>
          <SectionHeading label={C.evo_label} title={C.evo_title} />
          <p style={{ ...body, maxWidth: "640px", marginBottom: "2rem" }}>{C.evo_intro}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <ol className="al-stages" style={{ listStyle: "none", padding: 0, margin: "0 0 3rem", display: "grid", gridTemplateColumns: "1fr", gap: "1rem" }}>
            {C.stages.map(([n, title, when, text]) => (
              <li key={n} style={{ ...card, padding: "1.25rem" }}>
                <p style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", marginBottom: "0.6rem" }}>
                  <span aria-hidden="true" style={{ fontFamily: serif, fontSize: "1.5rem", lineHeight: 1, color: "var(--accent)" }}>{n}</span>
                  <span style={{ ...smallCaps }}>{when}</span>
                </p>
                <p style={{ fontSize: "1rem", fontWeight: 600, color: "var(--ink)", marginBottom: "0.4rem" }}>{title}</p>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.6, color: "var(--muted)" }}>{text}</p>
              </li>
            ))}
          </ol>
        </Reveal>
        <Reveal delay={0.1}>
          <figure style={{ margin: 0 }}>
            <div className="al-ba" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem" }}>
              <Shot img={IMG.before} alt={C.img_before_alt} C={C} label={C.before_label} />
              <Shot img={IMG.after} alt={C.img_after_alt} C={C} label={C.after_label} />
            </div>
            <figcaption style={{ fontSize: "0.8125rem", lineHeight: 1.6, color: "var(--muted)", marginTop: "0.75rem" }}>{C.ba_cap}</figcaption>
          </figure>
        </Reveal>
      </section>

      {/* ── 04 PLANTEAMIENTO ── */}
      <section id="al-strategy" style={section}>
        <Reveal>
          <SectionHeading label={C.strat_label} title={C.strat_title} />
          <p style={{ ...body, maxWidth: "640px", marginBottom: "2rem" }}>{C.strat_intro}</p>
          <div className="al-ba" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem", marginBottom: "2.5rem" }}>
            <blockquote style={{ ...card, margin: 0, padding: "1.25rem" }}>
              <p style={{ ...smallCaps, marginBottom: "0.6rem" }}>{C.before_label}</p>
              <p style={{ fontFamily: serif, fontSize: "1.35rem", lineHeight: 1.3, color: "var(--muted)" }}>«{C.head_before}»</p>
            </blockquote>
            <blockquote style={{ ...card, margin: 0, padding: "1.25rem", borderColor: "var(--accent)" }}>
              <p style={{ ...smallCaps, color: "var(--accent)", marginBottom: "0.6rem" }}>{C.after_label}</p>
              <p style={{ fontFamily: serif, fontSize: "1.35rem", lineHeight: 1.3, color: "var(--ink)" }}>«{C.head_after}»</p>
            </blockquote>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="al-three" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem", marginBottom: "3rem" }}>
            {C.strat_points.map(([title, text]) => (
              <div key={title} style={{ ...card, padding: "1.25rem" }}>
                <p style={{ ...smallCaps, color: "var(--accent)", marginBottom: "0.5rem" }}>{title}</p>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.6, color: "var(--muted)" }}>{text}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h3 style={h3}>{C.cta_title}</h3>
          <ol style={{ listStyle: "none", padding: 0, margin: "0 0 1rem" }}>
            {C.cta_levels.map(([level, label, text], i) => (
              <li key={level} className="al-cta" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "0.4rem", padding: "1rem 0", borderBottom: "1px solid var(--border)" }}>
                <span style={{ ...smallCaps }}>{level}</span>
                <span style={{ fontSize: i === 0 ? "1.05rem" : "0.95rem", fontWeight: i === 0 ? 700 : 600, color: i === 2 ? "var(--accent)" : "var(--ink)" }}>{label}</span>
                <span style={{ fontSize: "0.875rem", lineHeight: 1.6, color: "var(--muted)" }}>{text}</span>
              </li>
            ))}
          </ol>
          <p style={{ fontSize: "0.8125rem", lineHeight: 1.6, color: "var(--muted)", maxWidth: "640px" }}>{C.cta_note}</p>
        </Reveal>
      </section>

      {/* ── 05 DECISIONES ── */}
      <section id="al-decisions" style={section}>
        <Reveal>
          <SectionHeading label={C.dec_label} title={C.dec_title} />
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {C.decisions.map((row) => (
              <div key={row[0]} className="al-row" style={{ ...card, display: "grid", gridTemplateColumns: "1fr", gap: "0.5rem", padding: "1rem", fontSize: "0.875rem", lineHeight: 1.6 }}>
                {row.map((cell, j) => (
                  <div key={j}>
                    <span style={{ ...smallCaps, display: "block", marginBottom: "0.25rem" }}>{C.dec_cols[j]}</span>
                    <span style={{ color: j === 1 ? "var(--accent)" : j === 0 ? "var(--ink)" : "var(--muted)", fontWeight: j === 1 ? 600 : 400 }}>{cell}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── 06 IDENTIDAD Y SISTEMA ── */}
      <section id="al-system" style={section}>
        <Reveal>
          <SectionHeading label={C.sys_label} title={C.sys_title} />
          <p style={{ ...body, maxWidth: "640px", marginBottom: "2rem" }}>{C.sys_p}</p>
          <ol className="al-flow" style={{ listStyle: "none", padding: 0, margin: "0 0 3rem", display: "grid", gridTemplateColumns: "1fr", gap: "0.75rem" }}>
            {C.flow.map(([title, text], i) => (
              <li key={title} style={{ ...card, padding: "1rem" }}>
                <p style={{ ...smallCaps, color: "var(--accent)", marginBottom: "0.4rem" }}>{String(i + 1).padStart(2, "0")} · {title}</p>
                <p style={{ fontSize: "0.8125rem", lineHeight: 1.55, color: "var(--muted)" }}>{text}</p>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.1}>
          <h3 style={h3}>{C.palette_title}</h3>
          <ul className="al-palette" style={{ listStyle: "none", padding: 0, margin: "0 0 3rem", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.75rem" }}>
            {PALETTE.map((c, i) => (
              <li key={c.hex} style={{ ...card, overflow: "hidden" }}>
                <div style={{ background: c.hex, color: c.fg, height: "5.5rem", display: "flex", alignItems: "flex-end", padding: "0.75rem", fontSize: "0.8125rem", fontWeight: 600, fontFamily: "var(--font-sans)" }}>{c.hex}</div>
                <div style={{ padding: "0.75rem" }}>
                  <p style={{ fontSize: "0.8125rem", fontWeight: 600, lineHeight: 1.4, color: "var(--ink)" }}>{C.palette_names[i]}</p>
                  <p style={{ fontSize: "0.75rem", lineHeight: 1.5, color: "var(--muted)", marginTop: "0.2rem" }}>{C.palette_notes[i]}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <h3 style={h3}>{C.btn_title}</h3>
          <p style={{ ...body, maxWidth: "640px", marginBottom: "1.5rem" }}>{C.btn_p}</p>
          <figure style={{ margin: "0 0 3rem" }}>
            <div className="al-spec" style={{ display: "grid", gridTemplateColumns: "1fr", borderRadius: "12px", overflow: "hidden", border: "1px solid var(--border)" }}>
              <div style={{ background: "#F4ECDC", padding: "1.5rem", display: "grid", gap: "1.25rem" }}>
                {[
                  <span key="p" style={{ ...btnBase, background: "#B83A12", color: "#FFFFFF" }}>{C.specimen.primary}</span>,
                  <span key="s" style={{ ...btnBase, border: "2px solid #B83A12", color: "#B83A12" }}>{C.specimen.secondary}</span>,
                  <span key="l" style={{ fontSize: "0.875rem", fontWeight: 600, color: "#B83A12", textDecoration: "underline", textUnderlineOffset: "3px", fontFamily: "var(--font-sans)" }}>{C.specimen.link}</span>,
                ].map((el, i) => (
                  <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "0.4rem" }}>
                    {el}
                    <span style={{ fontSize: "0.6875rem", letterSpacing: "0.04em", color: "#5C4038", fontFamily: "var(--font-sans)" }}>{C.specimen_notes[i]}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: "#281414", padding: "1.5rem", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", gap: "0.4rem" }}>
                <span style={{ ...btnBase, border: "2px solid #FC4C00", color: "#FC4C00" }}>{C.specimen.dark}</span>
                <span style={{ fontSize: "0.6875rem", letterSpacing: "0.04em", color: "#E8DCC8", fontFamily: "var(--font-sans)" }}>{C.specimen_notes[3]}</span>
              </div>
            </div>
            <figcaption style={{ fontSize: "0.8125rem", lineHeight: 1.6, color: "var(--muted)", marginTop: "0.75rem" }}>{C.specimen_cap}</figcaption>
          </figure>
        </Reveal>

        <Reveal delay={0.1}>
          <h3 style={h3}>{C.rules_title}</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
            {C.rules.map((r) => (
              <li key={r} style={{ display: "flex", gap: "0.5rem", fontSize: "0.9375rem", lineHeight: 1.65, color: "var(--muted)" }}>
                <span aria-hidden="true" style={{ color: "var(--accent)", flexShrink: 0 }}>→</span>{r}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* ── 07 RESULTADOS ── */}
      <section id="al-results" style={section}>
        <Reveal>
          <SectionHeading label={C.resu_label} title={C.resu_title} />
          <div style={{ ...card, overflow: "hidden", marginBottom: "0.75rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem", lineHeight: 1.5 }}>
              <thead>
                <tr>
                  {C.resu_cols.map((h, i) => (
                    <th key={h} scope="col" style={{ ...smallCaps, textAlign: i === 0 ? "left" : "right", padding: "0.9rem 1rem", borderBottom: "1px solid var(--border)" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {C.resu_rows.map(([k, a, b], i) => (
                  <tr key={k} style={{ borderBottom: i < C.resu_rows.length - 1 ? "1px solid var(--border)" : "none" }}>
                    <th scope="row" style={{ textAlign: "left", fontWeight: 400, color: "var(--ink)", padding: "0.9rem 1rem" }}>{k}</th>
                    <td style={{ textAlign: "right", color: "var(--muted)", padding: "0.9rem 1rem", whiteSpace: "nowrap" }}>{a}</td>
                    <td style={{ textAlign: "right", color: "var(--accent)", fontWeight: 700, padding: "0.9rem 1rem", whiteSpace: "nowrap" }}>{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: "0.75rem", lineHeight: 1.6, color: "var(--muted)", marginBottom: "1.5rem" }}>{C.resu_note}</p>
          <p style={{ ...body, maxWidth: "640px" }}>{C.resu_p}</p>
        </Reveal>
      </section>

      {/* ── 08 APRENDIZAJES ── */}
      <section id="al-learnings" style={sectionLast}>
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
          <h3 style={h3}>{C.next_label}</h3>
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
        @media (min-width: 640px) {
          .al-meta { grid-template-columns: repeat(2, 1fr) !important; }
          .al-meta-wide { grid-column: span 1; }
          .al-ba { grid-template-columns: 1fr 1fr !important; }
          .al-flow { grid-template-columns: repeat(2, 1fr) !important; }
          .al-spec { grid-template-columns: 1.6fr 1fr !important; }
          .al-row { grid-template-columns: 1fr 1.2fr 1.2fr !important; }
          .al-cta { grid-template-columns: 8rem 1fr !important; column-gap: 1.5rem !important; }
          .al-cta > span:last-child { grid-column: 2; }
          .al-palette { grid-template-columns: repeat(4, 1fr) !important; }
        }
        @media (min-width: 900px) {
          .al-meta { grid-template-columns: repeat(3, 1fr) !important; }
          .al-meta-wide { grid-column: span 1; }
          .al-stages { grid-template-columns: repeat(3, 1fr) !important; }
          .al-three { grid-template-columns: repeat(3, 1fr) !important; }
          .al-flow { grid-template-columns: repeat(4, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}
