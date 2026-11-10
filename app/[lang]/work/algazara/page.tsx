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
    ? "Heuristic audit and redesign of a psychologist and sexologist's website, so people looking for help understand, trust and dare to get in touch."
    : lang === "pt"
    ? "Auditoria heurística e redesign do site de uma psicóloga e sexóloga, para que quem procura ajuda entenda, confie e tenha coragem de escrever."
    : "Auditoría heurística y rediseño de la web de una psicóloga y sexóloga, para que quien busca ayuda entienda, confíe y se atreva a escribir.";
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
      { id: "al-problem",  label: "Problema" },
      { id: "al-research", label: "Research" },
      { id: "al-process",  label: "Proceso" },
      { id: "al-solution", label: "Solución" },
      { id: "al-results",  label: "Resultados" },
      { id: "al-after",   label: "Iteración" },
    ],
    tags: "UX/UI · Auditoría · Accesibilidad · Cliente real",
    desc: "Auditoría heurística y rediseño de la web de una psicóloga y sexóloga, para que quien busca ayuda entienda, confíe y se atreva a escribir.",
    meta: [
      ["Tipo", "Cliente real · Proyecto individual"],
      ["Mi rol", "UX/UI Designer · UX Writer"],
      ["Plataforma", "Web publicada en IONOS"],
      ["Fecha", "Octubre 2026"],
      ["Herramientas", "Figma · WCAG 2.2 · PageSpeed"],
    ],
    focusLabel: "Mi foco",
    focus: "Evaluación heurística y de accesibilidad · Priorización con la clienta · Rediseño con su marca · UX writing · Implementación y verificación de cada cambio",

    prob_label: "El problema",
    prob_title: "Tres dudas sin resolver",
    prob_p: [
      "Quien busca a una sexóloga suele llegar con vergüenza o con prisa. Antes de escribir necesita entender qué se ofrece, confiar en la profesional y saber que puede escribir sin exponerse.",
      "La web de Pilar Habas transmitía cercanía, pero no resolvía ninguna de las tres. Punto de partida: entre 8 y 10 solicitudes de entrevista al mes.",
    ],

    res_label: "Research",
    res_title: "21 problemas en 7 páginas",
    res_intro: "Evalué la web en móvil y escritorio con las 10 heurísticas de Nielsen y medí el contraste con WCAG 2.2 sobre los colores reales del CSS. Después contrasté cada hallazgo con Pilar: cómo edita su web, cuántos mensajes recibe y qué está dispuesta a publicar.",
    res_methods: ["10 heurísticas de Nielsen", "WCAG 2.2", "Móvil y escritorio", "Entrevista con la clienta"],
    res_stats: [
      ["21", "problemas detectados en 7 páginas"],
      ["2", "de severidad alta: privacidad rota y precio ausente"],
      ["4", "combinaciones de color que no llegaban a AA"],
      ["3,21:1", "contraste del botón principal (AA pide 4,5:1)"],
    ],

    proc_label: "Proceso",
    proc_title: "Diseñar para la herramienta real",
    proc_p: [
      "Pilar edita su web con el editor con IA de IONOS y un presupuesto de créditos limitado, así que cada propuesta tenía que poder aplicarse con un prompt. Sus respuestas también cambiaron prioridades: no quería publicar tarifas, así que una pregunta frecuente explica cuándo se informa del precio; no revisa el buzón a diario, así que la web no promete un plazo que no pueda cumplir.",
      "Para el hero recomendé la opción con su foto. Ella eligió la que reforzaba su marca, que era su petición inicial, y la implementé.",
    ],

    sol_label: "Solución",
    sol_title: "La terapia es una conversación",
    sol_p: "Su monograma, dos comillas que se sonríen, ya contaba la idea: dos personas conversando. Sustituí las siete fotos de stock de las cabeceras por la marca y adopté sus propias tipografías.",
    before_label: "Antes",
    after_label: "Después",
    img_before_alt: "Hero anterior: titular blanco sobre una foto de globos de colores, con las credenciales casi ilegibles",
    img_after_alt: "Hero nuevo: fondo crema, titular en la tipografía de la marca, credenciales legibles, botón naranja oscuro y monograma grande",
    ba_cap: "El hero antes y después: las credenciales se leen, el botón cumple AA y la marca ocupa el lugar de la foto de stock.",
    dec_title: "Cuatro decisiones clave",
    dec_cols: ["Problema", "Heurística", "Decisión"],
    decisions: [
      ["El botón principal no se leía (3,21:1)", "H8 · Estética", "Dividir el naranja en dos: uno de marca, decorativo, y otro profundo para botones y textos (5,75:1)"],
      ["Las credenciales se perdían sobre una foto", "H1 · Visibilidad", "Nombre, colegiación y registro sanitario legibles en el hero"],
      ["El formulario se enviaba vacío", "H5 · Prevención de errores", "Validación accesible con errores en lenguaje cercano"],
      ["La política de privacidad daba error 404", "H4 · Consistencia", "Textos legales redactados para una consulta sanitaria"],
    ],
    palette_title: "Un naranja para decorar, otro para leer",
    palette_names: ["Naranja de marca · decorativo", "Naranja de acción · botones y texto", "Crema · fondo", "Marrón · texto"],
    palette_notes: ["Solo formas y detalles", "5,75:1 con blanco", "Base de la página", "Texto principal"],

    resu_label: "Resultados",
    resu_title: "Medido, no estimado",
    resu_cols: ["Indicador", "Antes", "Después"],
    resu_rows: [
      ["Problemas resueltos", "0 de 21", "18 de 21"],
      ["Accesibilidad (PageSpeed, ordenador / móvil)", "95 / 96", "100 / 100"],
      ["Rendimiento móvil (PageSpeed)", "96", "99"],
      ["Contraste del botón principal", "3,21:1", "5,75:1"],
    ],
    resu_note: "Los 3 problemas abiertos quedan así por decisión de la clienta.",
    resu_p: "Revisé cada cambio de la IA antes de publicar y detecté cuatro regresiones. La auditoría final encontró además un botón invisible que PageSpeed no detectaba.",

    post_label: "Después del lanzamiento",
    post_title: "Una segunda auditoría, con la web ya publicada",
    post_intro: "Con la web en producción, Pilar recibió una auditoría externa que le daba un 6,6 sobre 10. La revisé punto por punto: separé los fallos reales de los falsos positivos de su herramienta, que no lee webs cargadas con JavaScript, y corregí los reales.",
    post_stats: [
      ["6,6 → 9,4", "sobre 10, con la misma escala de la auditoría (93 de 99 puntos)"],
      ["45 de 63", "impresiones en Google iban a URLs antiguas que daban error. Recuperé los 3 artículos en sus mismas direcciones"],
      ["10 → 15", "páginas en el sitemap, con 2 páginas de servicio nuevas"],
      ["0", "fallos de contraste, texto alternativo o tamaño táctil en 7 páginas"],
    ],
    post_p: [
      "La foto de Pilar en la portada bajó el rendimiento móvil de 99 a 96. La mantuve: la falta de una cara era uno de los puntos de la auditoría, y en un servicio de terapia la confianza pesa más que tres puntos. El resto del tiempo de carga depende del constructor web, no del contenido.",
      "Instalé analítica sin cookies (Umami) con un evento en cada botón de contacto. Search Console queda como punto de partida: 6 clics y 58 impresiones en 28 días.",
    ],
    post_note: "Puntuación calculada por mí con la escala del informe. Los 6 puntos restantes dependen de decisiones de la clienta, como publicar un teléfono, no de errores.",

    learn_label: "Aprendizajes",
    learn_title: "Qué me llevo de este proyecto",
    learns: [
      ["Una auditoría vale lo que se puede aplicar", "La herramienta y el presupuesto reales de la clienta cambiaron todas las prioridades."],
      ["Escuchar mejora las propuestas", "Incluso cuando la clienta no elige la que recomiendo."],
      ["Una herramienta no sustituye la revisión", "Ni la IA que aplica los cambios ni la que los puntúa lo detectan todo."],
    ],
    next_label: "Próximos pasos",
    next: [
      "Medir las solicitudes de entrevista al mes frente a la base de 8–10",
      "Validar el hero con una prueba de 5 segundos",
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
      { id: "al-problem",  label: "Problem" },
      { id: "al-research", label: "Research" },
      { id: "al-process",  label: "Process" },
      { id: "al-solution", label: "Solution" },
      { id: "al-results",  label: "Results" },
      { id: "al-after",   label: "Iteration" },
    ],
    tags: "UX/UI · Audit · Accessibility · Real client",
    desc: "Heuristic audit and redesign of a psychologist and sexologist's website, so people looking for help understand, trust and dare to get in touch.",
    meta: [
      ["Type", "Real client · Solo project"],
      ["My role", "UX/UI Designer · UX Writer"],
      ["Platform", "Live website on IONOS"],
      ["Date", "October 2026"],
      ["Tools", "Figma · WCAG 2.2 · PageSpeed"],
    ],
    focusLabel: "My focus",
    focus: "Heuristic and accessibility evaluation · Prioritising with the client · Redesign with her brand · UX writing · Implementing and checking every change",

    prob_label: "The problem",
    prob_title: "Three unanswered questions",
    prob_p: [
      "People looking for a sexologist often arrive feeling embarrassed or in a hurry. Before writing, they need to understand what is offered, trust the professional and know they can get in touch without exposing themselves.",
      "Pilar Habas's website felt warm, but it answered none of the three. Starting point: 8 to 10 consultation requests a month.",
    ],

    res_label: "Research",
    res_title: "21 issues across 7 pages",
    res_intro: "I evaluated the site on mobile and desktop against Nielsen's 10 heuristics and measured contrast with WCAG 2.2 using the real colours from the CSS. Then I checked every finding with Pilar: how she edits her site, how many messages she gets and what she is willing to publish.",
    res_methods: ["Nielsen's 10 heuristics", "WCAG 2.2", "Mobile and desktop", "Client interview"],
    res_stats: [
      ["21", "issues found across 7 pages"],
      ["2", "high severity: broken privacy policy and no pricing"],
      ["4", "colour pairs below AA"],
      ["3.21:1", "main button contrast (AA requires 4.5:1)"],
    ],

    proc_label: "Process",
    proc_title: "Designing for the real tool",
    proc_p: [
      "Pilar edits her site with IONOS's AI editor on a limited credit budget, so every proposal had to be doable with a prompt. Her answers also changed priorities: she didn't want to publish her rates, so an FAQ explains when pricing is discussed; she doesn't check her inbox daily, so the site doesn't promise a response time she can't keep.",
      "For the hero I recommended the option with her photo. She chose the one that strengthened her brand, which was her original request, and I implemented it.",
    ],

    sol_label: "Solution",
    sol_title: "Therapy is a conversation",
    sol_p: "Her monogram, two quotation marks smiling at each other, already told the story: two people talking. I replaced the seven stock photos in the page headers with the brand and adopted her own typefaces.",
    before_label: "Before",
    after_label: "After",
    img_before_alt: "Previous hero: white headline over a photo of colourful balloons, with the credentials almost unreadable",
    img_after_alt: "New hero: cream background, headline in the brand typeface, readable credentials, dark orange button and a large monogram",
    ba_cap: "The hero before and after: the credentials are readable, the button meets AA and the brand replaces the stock photo.",
    dec_title: "Four key decisions",
    dec_cols: ["Issue", "Heuristic", "Decision"],
    decisions: [
      ["The main button was hard to read (3.21:1)", "H8 · Aesthetics", "Split the orange in two: a decorative brand orange and a deeper one for buttons and text (5.75:1)"],
      ["The credentials got lost over a photo", "H1 · Visibility", "Name, licence number and health registration readable in the hero"],
      ["The form could be sent empty", "H5 · Error prevention", "Accessible validation with friendly error messages"],
      ["The privacy policy returned a 404", "H4 · Consistency", "Legal pages written for a healthcare practice"],
    ],
    palette_title: "One orange to decorate, another to read",
    palette_names: ["Brand orange · decorative", "Action orange · buttons and text", "Cream · background", "Brown · text"],
    palette_notes: ["Shapes and details only", "5.75:1 with white", "Page base", "Body text"],

    resu_label: "Results",
    resu_title: "Measured, not estimated",
    resu_cols: ["Metric", "Before", "After"],
    resu_rows: [
      ["Issues resolved", "0 of 21", "18 of 21"],
      ["Accessibility (PageSpeed, desktop / mobile)", "95 / 96", "100 / 100"],
      ["Mobile performance (PageSpeed)", "96", "99"],
      ["Main button contrast", "3.21:1", "5.75:1"],
    ],
    resu_note: "The 3 open issues stay as they are at the client's request.",
    resu_p: "I reviewed every AI change before publishing and caught four regressions. The final audit also found an invisible button that PageSpeed didn't flag.",

    post_label: "After launch",
    post_title: "A second audit, with the site already live",
    post_intro: "With the site in production, Pilar received an external audit that scored it 6.6 out of 10. I went through it point by point: I separated real issues from the false positives of its tool, which can't read JavaScript-rendered sites, and fixed the real ones.",
    post_stats: [
      ["6.6 → 9.4", "out of 10, on the audit's own scale (93 of 99 points)"],
      ["45 of 63", "Google impressions went to old URLs that returned errors. I restored the 3 articles at their original addresses"],
      ["10 → 15", "pages in the sitemap, including 2 new service pages"],
      ["0", "contrast, alt text or touch target failures across 7 pages"],
    ],
    post_p: [
      "Pilar's photo on the home page lowered mobile performance from 99 to 96. I kept it: the lack of a face was one of the audit's points, and in a therapy service trust matters more than three points. The remaining load time depends on the site builder, not the content.",
      "I set up cookieless analytics (Umami) with an event on every contact button. Search Console serves as the baseline: 6 clicks and 58 impressions in 28 days.",
    ],
    post_note: "Score calculated by me using the report's scale. The remaining 6 points depend on the client's decisions, such as publishing a phone number, not on errors.",

    learn_label: "Learnings",
    learn_title: "What I take from this project",
    learns: [
      ["An audit is only worth what can be applied", "The client's real tool and budget changed every priority."],
      ["Listening improves proposals", "Even when the client doesn't choose the one I recommend."],
      ["A tool doesn't replace a review", "Neither the AI that applies the changes nor the one that scores them catches everything."],
    ],
    next_label: "Next steps",
    next: [
      "Measure monthly consultation requests against the 8–10 baseline",
      "Validate the hero with a 5-second test",
    ],
    cta_label: "Let's talk?",
    cta_sub: "If you're interested in this project or want to know more about my work, get in touch.",
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
      { id: "al-problem",  label: "Problema" },
      { id: "al-research", label: "Research" },
      { id: "al-process",  label: "Processo" },
      { id: "al-solution", label: "Solução" },
      { id: "al-results",  label: "Resultados" },
      { id: "al-after",   label: "Iteração" },
    ],
    tags: "UX/UI · Auditoria · Acessibilidade · Cliente real",
    desc: "Auditoria heurística e redesign do site de uma psicóloga e sexóloga, para que quem procura ajuda entenda, confie e tenha coragem de escrever.",
    meta: [
      ["Tipo", "Cliente real · Projeto individual"],
      ["Meu papel", "UX/UI Designer · UX Writer"],
      ["Plataforma", "Site publicado na IONOS"],
      ["Data", "Outubro de 2026"],
      ["Ferramentas", "Figma · WCAG 2.2 · PageSpeed"],
    ],
    focusLabel: "Meu foco",
    focus: "Avaliação heurística e de acessibilidade · Priorização com a cliente · Redesign com a marca dela · UX writing · Implementação e verificação de cada mudança",

    prob_label: "O problema",
    prob_title: "Três dúvidas sem resposta",
    prob_p: [
      "Quem procura uma sexóloga costuma chegar com vergonha ou com pressa. Antes de escrever, precisa entender o que é oferecido, confiar na profissional e saber que pode entrar em contato sem se expor.",
      "O site de Pilar Habas transmitia proximidade, mas não resolvia nenhuma das três. Ponto de partida: entre 8 e 10 pedidos de entrevista por mês.",
    ],

    res_label: "Research",
    res_title: "21 problemas em 7 páginas",
    res_intro: "Avaliei o site no celular e no desktop com as 10 heurísticas de Nielsen e medi o contraste com a WCAG 2.2 a partir das cores reais do CSS. Depois validei cada achado com a Pilar: como ela edita o site, quantas mensagens recebe e o que está disposta a publicar.",
    res_methods: ["10 heurísticas de Nielsen", "WCAG 2.2", "Celular e desktop", "Entrevista com a cliente"],
    res_stats: [
      ["21", "problemas encontrados em 7 páginas"],
      ["2", "de severidade alta: privacidade quebrada e preço ausente"],
      ["4", "combinações de cor abaixo do AA"],
      ["3,21:1", "contraste do botão principal (o AA exige 4,5:1)"],
    ],

    proc_label: "Processo",
    proc_title: "Projetar para a ferramenta real",
    proc_p: [
      "A Pilar edita o site com o editor com IA da IONOS e um orçamento limitado de créditos, então cada proposta precisava poder ser aplicada com um prompt. As respostas dela também mudaram as prioridades: ela não queria publicar os valores, então uma pergunta frequente explica quando o preço é informado; ela não confere a caixa de entrada todos os dias, então o site não promete um prazo que ela não possa cumprir.",
      "Para o hero, recomendei a opção com a foto dela. Ela escolheu a que reforçava a marca, que era o pedido inicial, e eu a implementei.",
    ],

    sol_label: "Solução",
    sol_title: "A terapia é uma conversa",
    sol_p: "O monograma dela, duas aspas que sorriem uma para a outra, já contava a ideia: duas pessoas conversando. Substituí as sete fotos de banco de imagens dos cabeçalhos pela marca e adotei as tipografias dela.",
    before_label: "Antes",
    after_label: "Depois",
    img_before_alt: "Hero anterior: título branco sobre uma foto de balões coloridos, com as credenciais quase ilegíveis",
    img_after_alt: "Hero novo: fundo creme, título na tipografia da marca, credenciais legíveis, botão laranja escuro e monograma grande",
    ba_cap: "O hero antes e depois: as credenciais ficam legíveis, o botão atende ao AA e a marca ocupa o lugar da foto de banco de imagens.",
    dec_title: "Quatro decisões-chave",
    dec_cols: ["Problema", "Heurística", "Decisão"],
    decisions: [
      ["O botão principal era difícil de ler (3,21:1)", "H8 · Estética", "Dividir o laranja em dois: um da marca, decorativo, e outro mais profundo para botões e textos (5,75:1)"],
      ["As credenciais se perdiam sobre uma foto", "H1 · Visibilidade", "Nome, registro profissional e registro sanitário legíveis no hero"],
      ["O formulário podia ser enviado vazio", "H5 · Prevenção de erros", "Validação acessível com mensagens de erro em linguagem próxima"],
      ["A política de privacidade dava erro 404", "H4 · Consistência", "Textos legais redigidos para um consultório de saúde"],
    ],
    palette_title: "Um laranja para decorar, outro para ler",
    palette_names: ["Laranja da marca · decorativo", "Laranja de ação · botões e texto", "Creme · fundo", "Marrom · texto"],
    palette_notes: ["Só formas e detalhes", "5,75:1 com branco", "Base da página", "Texto principal"],

    resu_label: "Resultados",
    resu_title: "Medido, não estimado",
    resu_cols: ["Indicador", "Antes", "Depois"],
    resu_rows: [
      ["Problemas resolvidos", "0 de 21", "18 de 21"],
      ["Acessibilidade (PageSpeed, desktop / celular)", "95 / 96", "100 / 100"],
      ["Desempenho no celular (PageSpeed)", "96", "99"],
      ["Contraste do botão principal", "3,21:1", "5,75:1"],
    ],
    resu_note: "Os 3 problemas em aberto ficam assim por decisão da cliente.",
    resu_p: "Revisei cada mudança da IA antes de publicar e detectei quatro regressões. A auditoria final ainda encontrou um botão invisível que o PageSpeed não detectava.",

    post_label: "Depois do lançamento",
    post_title: "Uma segunda auditoria, com o site já no ar",
    post_intro: "Com o site em produção, Pilar recebeu uma auditoria externa que dava nota 6,6 de 10. Revisei ponto por ponto: separei os problemas reais dos falsos positivos da ferramenta, que não lê sites carregados com JavaScript, e corrigi os reais.",
    post_stats: [
      ["6,6 → 9,4", "de 10, com a mesma escala da auditoria (93 de 99 pontos)"],
      ["45 de 63", "impressões no Google iam para URLs antigas que davam erro. Recuperei os 3 artigos nos mesmos endereços"],
      ["10 → 15", "páginas no sitemap, com 2 novas páginas de serviço"],
      ["0", "falhas de contraste, texto alternativo ou tamanho de toque em 7 páginas"],
    ],
    post_p: [
      "A foto da Pilar na página inicial baixou o desempenho mobile de 99 para 96. Mantive: a falta de um rosto era um dos pontos da auditoria, e num serviço de terapia a confiança pesa mais que três pontos. O restante do tempo de carregamento depende do construtor do site, não do conteúdo.",
      "Instalei analytics sem cookies (Umami) com um evento em cada botão de contato. O Search Console fica como ponto de partida: 6 cliques e 58 impressões em 28 dias.",
    ],
    post_note: "Nota calculada por mim com a escala do relatório. Os 6 pontos restantes dependem de decisões da cliente, como publicar um telefone, não de erros.",

    learn_label: "Aprendizados",
    learn_title: "O que levo deste projeto",
    learns: [
      ["Uma auditoria vale o que dá para aplicar", "A ferramenta e o orçamento reais da cliente mudaram todas as prioridades."],
      ["Ouvir melhora as propostas", "Mesmo quando a cliente não escolhe a que eu recomendo."],
      ["Uma ferramenta não substitui a revisão", "Nem a IA que aplica as mudanças nem a que as pontua detectam tudo."],
    ],
    next_label: "Próximos passos",
    next: [
      "Medir os pedidos de entrevista por mês em relação à base de 8–10",
      "Validar o hero com um teste de 5 segundos",
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

      {/* ── 03 RESEARCH ── */}
      <section id="al-research" style={section}>
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
          <div className="al-stats" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem" }}>
            {C.res_stats.map(([n, t]) => (
              <div key={t} style={{ ...card, padding: "1.25rem" }}>
                <p style={{ fontFamily: serif, fontSize: "2rem", lineHeight: 1, color: "var(--accent)", marginBottom: "0.5rem" }}>{n}</p>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.5, color: "var(--muted)" }}>{t}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── 04 PROCESO ── */}
      <section id="al-process" style={section}>
        <Reveal>
          <SectionHeading label={C.proc_label} title={C.proc_title} />
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "640px" }}>
            {C.proc_p.map((p) => <p key={p} style={body}>{p}</p>)}
          </div>
        </Reveal>
      </section>

      {/* ── 05 SOLUCIÓN ── */}
      <section id="al-solution" style={section}>
        <Reveal>
          <SectionHeading label={C.sol_label} title={C.sol_title} />
          <p style={{ ...body, maxWidth: "640px", marginBottom: "2.5rem" }}>{C.sol_p}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <figure style={{ margin: "0 0 3rem" }}>
            <div className="al-ba" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem" }}>
              <Shot img={IMG.before} alt={C.img_before_alt} C={C} label={C.before_label} />
              <Shot img={IMG.after} alt={C.img_after_alt} C={C} label={C.after_label} />
            </div>
            <figcaption style={{ fontSize: "0.8125rem", lineHeight: 1.6, color: "var(--muted)", marginTop: "0.75rem" }}>{C.ba_cap}</figcaption>
          </figure>
        </Reveal>

        <Reveal delay={0.1}>
          <h3 style={{ fontFamily: serif, fontSize: "1.3rem", fontWeight: 400, marginBottom: "1rem", color: "var(--ink)" }}>{C.dec_title}</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "3rem" }}>
            {C.decisions.map((row) => (
              <div key={row[0]} className="al-row" style={{ ...card, display: "grid", gridTemplateColumns: "1fr", gap: "0.5rem", padding: "1rem", fontSize: "0.875rem", lineHeight: 1.6 }}>
                <div>
                  <span style={{ ...smallCaps, display: "block", marginBottom: "0.25rem" }}>{C.dec_cols[0]}</span>
                  <span style={{ color: "var(--ink)" }}>{row[0]}</span>
                </div>
                <div>
                  <span style={{ ...smallCaps, display: "block", marginBottom: "0.25rem" }}>{C.dec_cols[1]}</span>
                  <span style={{ color: "var(--muted)" }}>{row[1]}</span>
                </div>
                <div>
                  <span style={{ ...smallCaps, display: "block", marginBottom: "0.25rem" }}>{C.dec_cols[2]}</span>
                  <span style={{ color: "var(--accent)", fontWeight: 600 }}>{row[2]}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h3 style={{ fontFamily: serif, fontSize: "1.3rem", fontWeight: 400, marginBottom: "1rem", color: "var(--ink)" }}>{C.palette_title}</h3>
          <ul className="al-palette" style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.75rem" }}>
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
      </section>

      {/* ── 06 RESULTADOS ── */}
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

      {/* ── 07 DESPUÉS DEL LANZAMIENTO ── */}
      <section id="al-after" style={section}>
        <Reveal>
          <SectionHeading label={C.post_label} title={C.post_title} />
          <p style={{ ...body, maxWidth: "640px", marginBottom: "2rem" }}>{C.post_intro}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="al-stats" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem", marginBottom: "2rem" }}>
            {C.post_stats.map(([n, t]) => (
              <div key={t} style={{ ...card, padding: "1.25rem" }}>
                <p style={{ fontFamily: serif, fontSize: "2rem", lineHeight: 1, color: "var(--accent)", marginBottom: "0.5rem", whiteSpace: "nowrap" }}>{n}</p>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.5, color: "var(--muted)" }}>{t}</p>
              </div>
            ))}
          </div>
          {C.post_p.map((t) => (
            <p key={t} style={{ ...body, maxWidth: "640px", marginBottom: "1rem" }}>{t}</p>
          ))}
          <p style={{ fontSize: "0.75rem", lineHeight: 1.6, color: "var(--muted)", maxWidth: "640px" }}>{C.post_note}</p>
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
        @media (min-width: 640px) {
          .al-meta { grid-template-columns: repeat(2, 1fr) !important; }
          .al-meta-wide { grid-column: span 1; }
          .al-stats { grid-template-columns: repeat(2, 1fr) !important; }
          .al-ba { grid-template-columns: 1fr 1fr !important; }
          .al-row { grid-template-columns: 1.1fr 0.8fr 1.4fr !important; }
          .al-palette { grid-template-columns: repeat(4, 1fr) !important; }
        }
        @media (min-width: 900px) {
          .al-meta { grid-template-columns: repeat(4, 1fr) !important; }
          .al-meta-wide { grid-column: span 3; }
        }
      `}</style>
    </div>
  );
}
