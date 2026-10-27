import type { Metadata } from "next";
import { LANGS, type Lang } from "@/lib/i18n";
import { pageMetadata } from "@/lib/site";
import ZoomableImage from "@/components/ui/ZoomableImage";
import PhoneFrame from "@/components/ui/PhoneFrame";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import CaseStudyNav from "@/components/ui/CaseStudyNav";

interface Props {
  params: Promise<{ lang: string }>;
}

export async function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }, { lang: "pt" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: _lang } = await params;
  const lang = (LANGS.includes(_lang as Lang) ? _lang : "es") as Lang;
  const titles: Record<Lang, string> = {
    es: "Camperoteca — Caso de estudio UX/UI",
    en: "Camperoteca — UX/UI Case Study",
    pt: "Camperoteca — Estudo de caso UX/UI",
  };
  const descs: Record<Lang, string> = {
    es: "Diseño end-to-end de una app que guía a quienes camperizan su furgoneta paso a paso y les conecta para compartir herramientas, materiales y conocimiento.",
    en: "End-to-end design of an app that guides DIY camper van builders step by step and connects them to share tools, materials and know-how.",
    pt: "Design end-to-end de um app que guia quem camperiza sua van passo a passo e conecta pessoas para compartilhar ferramentas, materiais e conhecimento.",
  };
  return pageMetadata({ lang, path: "/work/camperoteca", title: titles[lang], description: descs[lang] });
}

/* ─── pantallas UI ────────────────────────────────────────────────
   Vacío ("") = se muestra el marco con el nombre de la pantalla.
   Al subir la exportación de Figma a /public/assets/camperoteca/ui/,
   poner aquí la ruta, p. ej. "/assets/camperoteca/ui/onboarding.png". */
const SCREENS = {
  onboarding: "/assets/camperoteca/ui/onboarding.png",
  login: "/assets/camperoteca/ui/login.png",
  miproyecto: "/assets/camperoteca/ui/miproyecto.png",
  aprende: "/assets/camperoteca/ui/aprende.png",
  encuentra: "/assets/camperoteca/ui/encuentra.png",
  comunidad: "/assets/camperoteca/ui/comunidad.png",
};

/* Prototipo interactivo en Figma: empieza en el Splash, escalado al tamaño de la ventana, sin la UI de Figma. */
const PROTOTYPE_URL =
  "https://www.figma.com/proto/KLMNqOh1B0oaEqsTskROc5/UX---Desafio-2-Marcus?node-id=2282-1002&starting-point-node-id=2282%3A1002&scaling=scale-down&content-scaling=fixed&hide-ui=1";

/* ─── copy strings ─────────────────────────────────────────────── */
const copy = {
  es: {
    back: "Volver",
    zoom_hint: "Toca para ampliar",
    zoom_close: "Cerrar",
    ui_screen_alt: "Pantalla de Camperoteca",
    heroTitle: "Camperoteca",
    heroDesc:
      "Diseño de una plataforma digital para acompañar a las personas durante su proyecto de camperización y facilitar el intercambio de recursos y conocimiento dentro de la comunidad.",
    meta_rol: "Rol",
    meta_tipo: "Tipo de proyecto",
    meta_tools: "Herramientas",
    meta_dur: "Duración",
    meta_val_rol: "UX/UI Designer · End-to-End",
    meta_val_tipo: "Proyecto personal · Bootcamp NEOLAND",
    meta_val_tools: "Figma · FigJam · Figma Make",
    meta_val_dur: "Oct 2025 – Abr 2026",
    meta_alcance: "Proceso",
    meta_val_alcance: "Research · Definición · Arquitectura · UI Design · Prototipado",

    cta_label: "¿Hablamos?",
    cta_sub: "Si te interesa este proyecto o quieres conocer más sobre mi trabajo, escríbeme.",
    cta_email: "Enviar email",
    cta_linkedin: "Ver LinkedIn",

    /* 02 */
    prob_label: "Problema y oportunidad",
    prob_title: "Un proceso complejo, sin guía ni recursos compartidos",
    prob_body: "Camperizar una furgoneta por cuenta propia es técnicamente complejo y económicamente exigente. El proceso carece de un orden claro, la información está dispersa y muchas personas empiezan sin experiencia previa en bricolaje. Al mismo tiempo, los materiales y herramientas que se usan puntualmente — y cuestan — terminan sin uso una vez acabada esa fase. Una comunidad que comparte recursos existe, pero sin un canal que la articule.",
    prob_opp: "La oportunidad: una plataforma que guiara el proceso y activara la comunidad — donde materiales, herramientas y conocimiento circularan entre privados por préstamo o intercambio. Orientación y economía circular en un mismo lugar.",
    /* 03 */
    research_label: "UX Research",
    research_title: "Investigar antes de diseñar",
    research_body: "Antes de diseñar, definí preguntas de investigación sobre el producto, los usuarios y el mercado. Para responderlas combiné una encuesta online (32 respuestas, nov.–dic. 2025), 7 entrevistas en profundidad y un benchmark de 3 plataformas con un DAFO de la competidora directa. Con esos datos sinteticé los insights y los prioricé por impacto y esfuerzo para definir el MVP.",
    research_benchmark: "Analicé Wallapop y Milanuncios como competencia indirecta y Vibravan como competencia directa. Las dos primeras conectan a personas cercanas, pero no acompañan un proyecto ni fomentan la colaboración. Vibravan sí se centra en el mundo camper, pero acumula funciones sin jerarquía y no ofrece guías para quien empieza: es una app para cuando ya estás dentro, no para empezar. Ese hueco definió el posicionamiento. En las entrevistas, 7 de 7 personas pusieron encontrar herramientas por delante de aprender o conectar. Sobre la muestra: es pequeña y no representativa. El 62,5% tenía entre 45 y 54 años y ninguna persona entrevistada había terminado su camper. Uso estas cifras para orientar el diseño, no para estimar el mercado.",
    /* 04 */
    insight_label: "Insight y personas",
    insight_title: "Lo que realmente necesitaban",
    insight_quote: "«Si no sabes por dónde empezar, eso es lo primero» — Calebe, persona entrevistada.",
    persona_name: "Óscar Navarro, 48 años",
    persona_photo: "/assets/camperoteca/personas/oscar.webp",
    persona_tag: "«El Práctico»",
    persona_desc: "Está camperizando su furgoneta para viajar en familia. Aprende con vídeos y guías paso a paso, y prefiere soluciones que otras personas ya han probado. No quiere gastar un dineral en herramientas que usará una vez.",
    goals_title: "Objetivos",
    goals: [
      "Conseguir herramientas cerca sin comprar las de un solo uso.",
      "Encontrar soluciones probadas en furgonetas como la suya.",
      "Avanzar con guías claras, sin tecnicismos.",
    ],
    frusts_title: "Frustraciones",
    frusts: [
      "Tutoriales poco claros o demasiado técnicos.",
      "Herramientas caras para usarlas una sola vez.",
      "No saber qué paso toca ahora ni qué viene después.",
    ],
    persona_context: "Dos personas construidas con los datos de la muestra: quien empieza desde cero y quien ya tiene algo que compartir (el 87,5% colabora siempre o según el proyecto).",
    persona2_name: "Carmen Ortega, 47 años",
    persona2_photo: "/assets/camperoteca/personas/carmen.webp",
    persona2_tag: "«La Colaboradora»",
    persona2_desc: "Lleva unos meses camperizando su furgoneta. Ya tiene algunas herramientas y está dispuesta a prestarlas o intercambiarlas. Antes de buscar en internet, pregunta en su zona.",
    persona2_goals: [
      "Prestar o intercambiar herramientas con gente cercana.",
      "Saber con quién trata antes de quedar.",
      "Resolver dudas con personas con más experiencia.",
    ],
    persona2_frusts: [
      "No saber quién tiene cerca lo que necesita.",
      "Desconfiar de desconocidos sin valoraciones.",
      "Comunidades online desordenadas donde nada se encuentra.",
    ],
    /* 05 */
    hmw_label: "Del dato a la decisión",
    hmw_title: "Qué dijeron los datos y qué decidí",
    hmw_rows: [
      { prob: "6 de 7 aprenden con YouTube; 96,9% quiere guías en la app", opp: "Aprenden fuera, sin orden", dec: "Guías por tema en Aprende, enlazadas desde la etapa de Mi Proyecto" },
      { prob: "7 de 7 priorizan herramientas; 65,6% usaría la app para ello", opp: "Comprar para un solo uso no compensa", dec: "Encuentra, para pedir prestadas o intercambiar herramientas y materiales" },
      { prob: "6 de 7 quieren ver qué hay cerca, en mapa y lista", opp: "La cercanía decide si compartir es viable", dec: "Distancia en cada recurso y Personas cerca en mapa o lista" },
      { prob: "7 de 7 piden valoraciones", opp: "Sin confianza no hay intercambio", dec: "Valoración tras cada préstamo y reputación visible en cada recurso" },
      { prob: "81,3% espera una navegación fácil; 68,8% se uniría a una comunidad", opp: "Quieren comunidad, pero simple y ordenada", dec: "Un solo hub y Comunidad por temas" },
    ],
    hmw_col1: "Dato",
    hmw_col2: "Insight",
    hmw_col3: "Decisión de diseño",
    /* 06 */
    arch_label: "Arquitectura de información",
    arch_title: "Estructura de navegación y recorrido principal",
    hp_steps: [
      { t: "Home", d: "Descubre qué es Camperoteca.", cta: "Empezar" },
      { t: "Onboarding", d: "Entiende cómo funciona por etapas.", cta: "Empezar mi proyecto" },
      { t: "Login o Registro", d: "Inicia sesión o crea su cuenta.", cta: "Iniciar sesión" },
      { t: "Mi Proyecto", d: "Ve su etapa y el siguiente paso.", cta: "Buscar recurso", hub: true },
      { t: "Encuentra", d: "Localiza una herramienta o material cerca y ve a qué distancia está.", cta: "Pedir préstamo" },
      { t: "Solicitud", d: "Pide el préstamo con fechas y un mensaje.", cta: "Enviar solicitud" },
      { t: "Solicitud enviada", d: "Recibe la confirmación y sigue con su proyecto.", cta: "" },
    ],
    hp_alt: "Happy path de Camperoteca: Home, Onboarding, Login o Registro y Mi Proyecto, desde donde se accede a Aprende y Comunidad. El recorrido principal sigue por Encuentra, Solicitud y Solicitud enviada.",
    hp_hub: "Desde aquí también: Aprende · Comunidad",
    hp_cta: "CTA",
    hp_label: "Happy path",
    arch_body:
      "Mi Proyecto actúa como hub central: el usuario avanza por etapas y, al detectar una necesidad, accede a Aprende, Encuentra o Comunidad mediante CTAs contextuales. El intercambio de recursos no es un flujo paralelo — emerge del propio proceso, en el momento en que tiene sentido.",
    mvp_title: "Alcance del MVP",
    mvp_inc: [
      "Mi Proyecto: hub central del proceso. El usuario gestiona su avance por etapas, visualiza su progreso y accede a recursos contextuales según su necesidad actual.",
      "Aprende: guías técnicas, legales y casos reales, enlazados desde la etapa en curso de Mi Proyecto.",
      "Encuentra: herramientas y materiales que otras personas ofrecen cerca, para pedirlos prestados o intercambiarlos. Desde Encuentra o Mi cuenta cualquiera puede ofrecer los suyos, y tras cada préstamo las personas se valoran entre sí.",
      "Comunidad: espacio de conexión entre personas en proceso de camperización para compartir experiencias y conocimiento.",
      "Onboarding y registro: presenta cómo funciona la plataforma por etapas y da acceso mediante registro o inicio de sesión.",
    ],
    mvp_inc_label: "Incluido en MVP",

    /* 07 */
    wf_label: "Wireframes",
    wf_title: "De la estructura al diseño final",
    wf_body:
      "El wireframing avanzó en dos fases. En baja fidelidad el foco estuvo en la estructura de navegación y el flujo principal: cómo un usuario nuevo pasa del onboarding a su primer paso real en el proyecto. En alta fidelidad, las decisiones se centraron en la jerarquía visual de 'Mi Proyecto' como hub central, y en cómo presentar el contenido de 'Aprende', 'Encuentra' y 'Comunidad' sin saturar al usuario. Cada iteración validó que la plataforma guiara sin sobrecargar.",

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
    ui_encuentra_body: "Reúne las herramientas y los materiales que otras personas ofrecen cerca, para pedirlos prestados o intercambiarlos. Cada tarjeta indica a qué distancia está y si está disponible.",
    ui_login_title: "Login",
    ui_login_body:
      "Acceso directo y sin fricción. El usuario entra con email y contraseña para continuar donde lo dejó.",
    ui_comunidad_title: "Comunidad",
    ui_comunidad_body:
      "Conecta con otros camperos. Pregunta, responde y encuentra usuarios cercanos con herramientas o conocimiento.",
    ui_onboarding_title: "Onboarding",
    ui_onboarding_body:
      "El punto de entrada al proyecto. Guía al usuario desde cero con contexto claro y un primer paso accionable — antes de que la complejidad del proceso lo frene.",
    ui_mockup_alt: "Vista general de la aplicación Camperoteca mostrando la pantalla principal Mi Proyecto con el planificador por etapas",

    /* 09 */
    learn_label: "Aprendizajes",
    learn_title: "Qué me llevo de este proyecto",
    learns: [
      { title: "El research ordenó las prioridades", body: "Partía de dos problemas: un proceso sin orden y herramientas caras de uso puntual. La encuesta y las entrevistas confirmaron los dos y mostraron cómo resolverlos: Mi Proyecto con la etapa actual y el siguiente paso, y Encuentra para lo que solo se usa una vez." },
      { title: "La hipótesis de partida se sostuvo", body: "En las entrevistas, 7 de 7 personas pusieron encontrar herramientas por delante de aprender o conectar. Eso confirmó que el intercambio debía ser un eje del MVP y no un extra." },
      { title: "Auditar mi propio trabajo también es diseño", body: "Al preparar este case study revisé la coherencia entre research, prototipo y MVP. Encontré cifras sin fuente y una necesidad sin cubrir: ofrecer un recurso propio. Corregí las cifras y diseñé ese flujo antes de publicar. Me enseñó que un caso honesto vale más que uno redondo." },
    ],
    next_title: "Próximas iteraciones",
    nexts: [
      "Evaluar la comprensión del flujo principal con usuarios reales mediante pruebas de usabilidad.",
      "Verificación de identidad y moderación de valoraciones, cuando haya un volumen real de intercambios.",
      "Personalizar el proyecto desde el registro: recoger tipo de furgoneta, fase, presupuesto y objetivos para adaptar Mi Proyecto y sus recomendaciones.",
    ],
    research_methods: [
      { num: "32", label: "respuestas a la encuesta" },
      { num: "7", label: "entrevistas en profundidad" },
      { num: "3", label: "plataformas analizadas" },
    ],
    research_findings_label: "Hallazgos cuantitativos",
    research_findings: [
      { pct: "96,9%", label: "querría tutoriales y guías dentro de la app" },
      { pct: "68,8%", label: "se uniría a una comunidad de camperización" },
      { pct: "65,6%", label: "usaría la app para encontrar, prestar o intercambiar herramientas" },
      { pct: "46,9%", label: "hace bricolaje rara vez o nunca" },
    ],
    proto_cta: "Ver prototipo interactivo",
    proto_hint: "Recorre el flujo completo: onboarding, login y las cuatro secciones de la app.",
    back_projects: "← Volver a proyectos",
    nav_sections: [
      { id: "cs-problema", label: "Problema" },
      { id: "cs-research", label: "Research" },
      { id: "cs-insight", label: "Insight" },
      { id: "cs-hmw", label: "Decisiones" },
      { id: "cs-arch", label: "Arquitectura" },
      { id: "cs-wireframes", label: "Wireframes" },
      { id: "cs-ds", label: "Design System" },
      { id: "cs-ui", label: "UI" },
      { id: "cs-learn", label: "Aprendizajes" },
    ],
  },

  en: {
    back: "Back",
    zoom_hint: "Tap to enlarge",
    zoom_close: "Close",
    ui_screen_alt: "Camperoteca screen",
    heroTitle: "Camperoteca",
    heroDesc:
      "Design of a digital platform to guide people through their camper van conversion project and facilitate the exchange of resources and knowledge within the community.",
    meta_rol: "Role",
    meta_tipo: "Project type",
    meta_tools: "Tools",
    meta_dur: "Duration",
    meta_val_rol: "UX/UI Designer · End-to-End",
    meta_val_tipo: "Personal project · Bootcamp NEOLAND",
    meta_val_tools: "Figma · FigJam · Figma Make",
    meta_val_dur: "Oct 2025 – Apr 2026",
    meta_alcance: "Process",
    meta_val_alcance: "Research · Definition · Architecture · UI Design · Prototyping",

    cta_label: "Let's talk",
    cta_sub: "If this project caught your eye or you'd like to know more about my work, drop me a line.",
    cta_email: "Send email",
    cta_linkedin: "View LinkedIn",

    prob_label: "Problem & Opportunity",
    prob_title: "A complex process, with no guidance or shared resources",
    prob_body: "Converting a van on your own is technically complex and financially demanding. The process has no clear order, information is scattered and many people start with no prior DIY experience. At the same time, materials and tools used briefly — at real cost — end up idle once that phase is over. A community that shares resources exists, but without a channel to bring it together.",
    prob_opp: "The opportunity: a platform that guides the process and activates the community — where materials, tools and knowledge flow between individuals through lending or exchange. Guidance and circular economy in one place.",
    research_label: "UX Research",
    research_title: "Research before design",
    research_body: "Before designing, I defined research questions about the product, the users and the market. To answer them I combined an online survey (32 responses, Nov–Dec 2025), 7 in-depth interviews and a benchmark of 3 platforms with a SWOT of the direct competitor. From that data I synthesised the insights and prioritised them by impact and effort to define the MVP.",
    research_benchmark: "I analysed Wallapop and Milanuncios as indirect competitors and Vibravan as the direct one. The first two connect people nearby, but they don't support a project or encourage collaboration. Vibravan does focus on the camper world, but it piles up features without hierarchy and offers no guidance for beginners: it's an app for when you're already in, not for getting started. That gap defined the positioning. In the interviews, 7 out of 7 people put finding tools ahead of learning or connecting. About the sample: it is small and not representative. 62.5% were aged 45 to 54, and none of the interviewees had finished their van. I use these figures to guide design, not to size the market.",
    insight_label: "Insight & Personas",
    insight_title: "What they really needed",
    insight_quote: "“If you don't know where to start, that's the first thing” — Calebe, interviewee.",
    persona_name: "Óscar Navarro, 48",
    persona_photo: "/assets/camperoteca/personas/oscar.webp",
    persona_tag: "“The Hands-on One”",
    persona_desc: "Is converting his van to travel with his family. He learns from videos and step-by-step guides, and prefers solutions others have already tested. He doesn't want to spend a fortune on tools he'll use once.",
    goals_title: "Goals",
    goals: [
      "Get tools nearby without buying single-use ones.",
      "Find solutions tested in vans like his.",
      "Move forward with clear, jargon-free guides.",
    ],
    frusts_title: "Frustrations",
    frusts: [
      "Unclear or overly technical tutorials.",
      "Expensive tools used only once.",
      "Not knowing which step comes now or what comes next.",
    ],
    persona_context: "Two personas built from the sample data: someone starting from scratch and someone who already has something to share (87.5% collaborate always or depending on the project).",
    persona2_name: "Carmen Ortega, 47",
    persona2_photo: "/assets/camperoteca/personas/carmen.webp",
    persona2_tag: "“The Collaborator”",
    persona2_desc: "Has been converting her van for a few months. She already owns some tools and is happy to lend or swap them. Before searching online, she asks around her area.",
    persona2_goals: [
      "Lend or swap tools with people nearby.",
      "Know who she's dealing with before meeting.",
      "Get answers from more experienced people.",
    ],
    persona2_frusts: [
      "Not knowing who nearby has what she needs.",
      "Distrusting strangers without ratings.",
      "Messy online communities where nothing can be found.",
    ],
    hmw_label: "From data to decision",
    hmw_title: "What the data said and what I decided",
    hmw_rows: [
      { prob: "6 of 7 learn on YouTube; 96.9% want guides in the app", opp: "They learn elsewhere, with no order", dec: "Topic guides in Learn, linked from the current stage in My Project" },
      { prob: "7 of 7 prioritise tools; 65.6% would use the app for it", opp: "Buying for a single use isn't worth it", dec: "Find, to borrow or swap tools and materials" },
      { prob: "6 of 7 want to see what's nearby, on a map and in a list", opp: "Proximity decides whether sharing is viable", dec: "Distance on every resource and People nearby on a map or list" },
      { prob: "7 of 7 ask for ratings", opp: "No trust, no exchange", dec: "A rating after every loan and reputation shown on every resource" },
      { prob: "81.3% expect easy navigation; 68.8% would join a community", opp: "They want community, but simple and organised", dec: "A single hub and Community by topic" },
    ],
    hmw_col1: "Data",
    hmw_col2: "Insight",
    hmw_col3: "Design decision",
    arch_label: "Information Architecture",
    arch_title: "Navigation structure and main user flow",
    hp_steps: [
      { t: "Home", d: "Discovers what Camperoteca is.", cta: "Get started" },
      { t: "Onboarding", d: "Understands how it works by stage.", cta: "Start my project" },
      { t: "Log in or Sign up", d: "Logs in or creates an account.", cta: "Log in" },
      { t: "My Project", d: "Sees their stage and the next step.", cta: "Find a resource", hub: true },
      { t: "Find", d: "Finds a tool or material nearby and sees how far away it is.", cta: "Borrow" },
      { t: "Request", d: "Asks to borrow it with dates and a message.", cta: "Send request" },
      { t: "Request sent", d: "Gets the confirmation and carries on with the project.", cta: "" },
    ],
    hp_alt: "Camperoteca happy path: Home, Onboarding, Log in or Sign up and My Project, which also leads to Learn and Community. The main flow continues through Find, Request and Request sent.",
    hp_hub: "From here too: Learn · Community",
    hp_cta: "CTA",
    hp_label: "Happy path",
    arch_body:
      "My Project acts as the central hub: the user progresses through stages and, when a need arises, accesses Learn, Find or Community through contextual CTAs. The exchange of resources is not a parallel flow — it emerges from the process itself, at the moment it makes sense.",
    mvp_title: "MVP Scope",
    mvp_inc: [
      "My Project: the central hub. Users manage their progress by stage, see how far they've come and access contextual resources for their current need.",
      "Learn: technical and legal guides and real cases, linked from the current stage in My Project.",
      "Find: tools and materials other people offer nearby, to borrow or swap. Anyone can offer their own from Find or My Account, and after each loan people rate each other.",
      "Community: a space for people converting their vans to share experiences and know-how.",
      "Onboarding and sign-up: explains how the platform works by stage and gives access via sign-up or log-in.",
    ],
    mvp_inc_label: "Included in MVP",

    wf_label: "Wireframes",
    wf_title: "From structure to final design",
    wf_body:
      "Wireframing progressed in two phases. In low fidelity the focus was on navigation structure and the main flow: how a new user moves from onboarding to their first real step in the project. In high fidelity, decisions centred on the visual hierarchy of 'My Project' as the central hub, and on how to present 'Learn', 'Find' and 'Community' content without overwhelming the user. Each iteration validated that the platform guided without overloading.",

    ds_label: "UI Design & Design System",
    ds_title: "«Cosecha Solar»",
    ds_body:
      "The name is no accident. The camper universe evokes nature, movement and light. Camperoteca's visual system draws from that reference to build a recognisable, warm and functional identity.",
    ds_colors: [
      { hex: "#E07B00", name: "Primary", role: "Energy, action, orientation" },
      { hex: "#6B7A1A", name: "Secondary", role: "Nature, trust" },
      { hex: "#F5E642", name: "Accent", role: "Highlights, progress" },
      { hex: "#FDFBF5", name: "Background", role: "Warmth, readability" },
    ],
    ds_type_label: "Typography",
    ds_fonts: [
      { name: "Roboto", role: "Headlines — structure and hierarchy" },
      { name: "DM Sans", role: "Body/UI — clarity and modernity" },
    ],

    ui_label: "UI Design",
    ui_title: "The final solution",
    ui_body:
      "Camperoteca's interface draws visual reference from the camper world: warm earthy colours, readable typography and a visual language that conveys calm and orientation. The design prioritises clarity over decoration.",
    ui_miproyecto_title: "My Project",
    ui_miproyecto_body:
      "The platform's central hub shows the current stage, overall progress and the recommended next step. It reduces uncertainty and keeps the user oriented at all times.",
    ui_aprende_title: "Learn",
    ui_aprende_body:
      "Organises knowledge into three categories: technical guides (electrical systems, insulation, carpentry), legal guides (homologation, MOT, regulations) and real cases from other users.",
    ui_encuentra_title: "Find Resources",
    ui_encuentra_body: "Brings together the tools and materials other people offer nearby, to borrow or swap. Each card shows how far away it is and whether it's available.",
    ui_login_title: "Login",
    ui_login_body:
      "Direct, frictionless access. The user signs in with email and password to continue where they left off.",
    ui_comunidad_title: "Community",
    ui_comunidad_body:
      "Connect with other campers. Ask, answer and find nearby users with tools or knowledge to share.",
    ui_onboarding_title: "Onboarding",
    ui_onboarding_body:
      "The entry point to the project. Guides the user from scratch with clear context and a first actionable step — before the complexity of the process holds them back.",
    ui_mockup_alt: "General view of the Camperoteca app showing the main My Project screen with the stage planner",

    learn_label: "Learnings",
    learn_title: "What I take away from this project",
    learns: [
      { title: "The research set the priorities", body: "I started from two problems: a process with no order and expensive tools needed only briefly. The survey and interviews confirmed both and showed how to solve them: My Project with the current stage and the next step, and Find for what you only use once." },
      { title: "The starting hypothesis held up", body: "In the interviews, 7 out of 7 people put finding tools ahead of learning or connecting. That confirmed exchange had to be a core part of the MVP, not an extra." },
      { title: "Auditing my own work is design too", body: "While preparing this case study I checked the consistency between research, prototype and MVP. I found figures without a source and an unmet need: offering your own resource. I corrected the figures and designed that flow before publishing. It taught me that an honest case is worth more than a polished one." },
    ],
    next_title: "Next iterations",
    nexts: [
      "Test how well people understand the main flow with real users through usability testing.",
      "Identity verification and review moderation, once there's a real volume of exchanges.",
      "Personalise the project from sign-up: collect van type, phase, budget and goals to tailor My Project and its recommendations.",
    ],
    research_methods: [
      { num: "32", label: "survey responses" },
      { num: "7", label: "in-depth interviews" },
      { num: "3", label: "platforms analysed" },
    ],
    research_findings_label: "Quantitative findings",
    research_findings: [
      { pct: "96.9%", label: "would like tutorials and guides in the app" },
      { pct: "68.8%", label: "would join a van-conversion community" },
      { pct: "65.6%", label: "would use the app to find, lend or swap tools" },
      { pct: "46.9%", label: "rarely or never do DIY" },
    ],
    proto_cta: "View interactive prototype",
    proto_hint: "Walk through the full flow: onboarding, login and the app’s four sections.",
    back_projects: "← Back to projects",
    nav_sections: [
      { id: "cs-problema", label: "Problem" },
      { id: "cs-research", label: "Research" },
      { id: "cs-insight", label: "Insight" },
      { id: "cs-hmw", label: "Decisions" },
      { id: "cs-arch", label: "Architecture" },
      { id: "cs-wireframes", label: "Wireframes" },
      { id: "cs-ds", label: "Design System" },
      { id: "cs-ui", label: "UI" },
      { id: "cs-learn", label: "Learnings" },
    ],
  },

  pt: {
    back: "Voltar",
    zoom_hint: "Toque para ampliar",
    zoom_close: "Fechar",
    ui_screen_alt: "Tela da Camperoteca",
    meta_rol: "Função",
    meta_tipo: "Tipo de projeto",
    meta_tools: "Ferramentas",
    meta_dur: "Duração",
    meta_val_rol: "UX/UI Designer · End-to-End",
    meta_val_tipo: "Projeto pessoal · Bootcamp NEOLAND",
    meta_val_tools: "Figma · FigJam · Figma Make",
    meta_val_dur: "Out 2025 – Abr 2026",
    meta_alcance: "Processo",
    meta_val_alcance: "Research · Definição · Arquitetura · UI Design · Prototipagem",

    cta_label: "Vamos conversar?",
    cta_sub: "Se você se interessou por este projeto ou quer conhecer mais sobre o meu trabalho, me escreva.",
    cta_email: "Enviar e-mail",
    cta_linkedin: "Ver LinkedIn",

    prob_label: "Problema e oportunidade",
    prob_title: "Um processo complexo, sem orientação nem recursos compartilhados",
    prob_body: "Camperizar uma van por conta própria é tecnicamente complexo e economicamente exigente. O processo não tem uma ordem clara, a informação está dispersa e muitas pessoas começam sem experiência prévia em trabalhos manuais. Ao mesmo tempo, os materiais e ferramentas usados pontualmente — e que custam — ficam sem uso assim que essa fase termina. Existe uma comunidade que compartilha recursos, mas sem um canal que a articule.",
    prob_opp: "A oportunidade: uma plataforma que orientasse o processo e ativasse a comunidade — onde materiais, ferramentas e conhecimento circulassem entre particulares por empréstimo ou troca. Orientação e economia circular em um mesmo lugar.",
    research_label: "UX Research",
    research_title: "Pesquisar antes de projetar",
    research_body: "Antes de desenhar, defini perguntas de pesquisa sobre o produto, os usuários e o mercado. Para respondê-las, combinei um questionário online (32 respostas, nov.–dez. 2025), 7 entrevistas em profundidade e um benchmark de 3 plataformas com uma análise SWOT da concorrente direta. Com esses dados, sintetizei os insights e os priorizei por impacto e esforço para definir o MVP.",
    research_benchmark: "Analisei o Wallapop e o Milanuncios como concorrência indireta e o Vibravan como concorrência direta. Os dois primeiros conectam pessoas próximas, mas não acompanham um projeto nem incentivam a colaboração. O Vibravan é focado no mundo camper, mas acumula funções sem hierarquia e não oferece guias para quem está começando: é um app para quando você já está dentro, não para começar. Essa lacuna definiu o posicionamento. Nas entrevistas, 7 de 7 pessoas colocaram encontrar ferramentas à frente de aprender ou se conectar. Sobre a amostra: é pequena e não representativa. 62,5% tinham entre 45 e 54 anos, e nenhuma pessoa entrevistada tinha terminado a sua camper. Uso esses números para orientar o design, não para estimar o mercado.",
    insight_label: "Insight e personas",
    insight_title: "O que realmente precisavam",
    insight_quote: "“Se você não sabe por onde começar, isso é o primeiro” — Calebe, pessoa entrevistada.",
    persona_name: "Óscar Navarro, 48 anos",
    persona_photo: "/assets/camperoteca/personas/oscar.webp",
    persona_tag: "“O Prático”",
    persona_desc: "Está camperizando a van para viajar com a família. Aprende com vídeos e guias passo a passo e prefere soluções que outras pessoas já testaram. Não quer gastar uma fortuna com ferramentas que vai usar uma vez só.",
    goals_title: "Objetivos",
    goals: [
      "Conseguir ferramentas por perto sem comprar as de uso único.",
      "Encontrar soluções testadas em vans como a dele.",
      "Avançar com guias claros, sem jargão técnico.",
    ],
    frusts_title: "Frustrações",
    frusts: [
      "Tutoriais confusos ou técnicos demais.",
      "Ferramentas caras para usar uma vez só.",
      "Não saber qual etapa vem agora nem o que vem depois.",
    ],
    persona_context: "Duas personas construídas com os dados da amostra: quem começa do zero e quem já tem algo para compartilhar (87,5% colaboram sempre ou dependendo do projeto).",
    persona2_name: "Carmen Ortega, 47 anos",
    persona2_photo: "/assets/camperoteca/personas/carmen.webp",
    persona2_tag: "“A Colaboradora”",
    persona2_desc: "Está camperizando a van há alguns meses. Já tem algumas ferramentas e topa emprestá-las ou trocá-las. Antes de pesquisar na internet, pergunta para quem mora perto.",
    persona2_goals: [
      "Emprestar ou trocar ferramentas com gente da região.",
      "Saber com quem está lidando antes de marcar um encontro.",
      "Tirar dúvidas com pessoas mais experientes.",
    ],
    persona2_frusts: [
      "Não saber quem tem por perto o que ela precisa.",
      "Desconfiar de desconhecidos sem avaliações.",
      "Comunidades online bagunçadas, onde nada se encontra.",
    ],
    hmw_label: "Do dado à decisão",
    hmw_title: "O que os dados disseram e o que decidi",
    hmw_rows: [
      { prob: "6 de 7 aprendem no YouTube; 96,9% querem guias no app", opp: "Aprendem fora, sem ordem", dec: "Guias por tema no Aprende, ligados à etapa atual do Meu Projeto" },
      { prob: "7 de 7 priorizam ferramentas; 65,6% usariam o app para isso", opp: "Comprar para um único uso não compensa", dec: "Encontra, para pegar emprestado ou trocar ferramentas e materiais" },
      { prob: "6 de 7 querem ver o que há por perto, no mapa e em lista", opp: "A proximidade decide se compartilhar é viável", dec: "Distância em cada recurso e Pessoas por perto no mapa ou em lista" },
      { prob: "7 de 7 pedem avaliações", opp: "Sem confiança não há troca", dec: "Avaliação após cada empréstimo e reputação visível em cada recurso" },
      { prob: "81,3% esperam uma navegação fácil; 68,8% entrariam em uma comunidade", opp: "Querem comunidade, mas simples e organizada", dec: "Um único hub e Comunidade por temas" },
    ],
    hmw_col1: "Dado",
    hmw_col2: "Insight",
    hmw_col3: "Decisão de design",
    arch_label: "Arquitetura da informação",
    arch_title: "Estrutura de navegação e fluxo principal",
    hp_steps: [
      { t: "Home", d: "Descobre o que é a Camperoteca.", cta: "Começar" },
      { t: "Onboarding", d: "Entende como funciona por etapas.", cta: "Começar meu projeto" },
      { t: "Login ou Cadastro", d: "Faz login ou cria uma conta.", cta: "Entrar" },
      { t: "Meu Projeto", d: "Vê sua etapa e o próximo passo.", cta: "Buscar recurso", hub: true },
      { t: "Encontra", d: "Encontra uma ferramenta ou material por perto e vê a que distância está.", cta: "Pedir emprestado" },
      { t: "Solicitação", d: "Pede o empréstimo com datas e uma mensagem.", cta: "Enviar solicitação" },
      { t: "Solicitação enviada", d: "Recebe a confirmação e segue com o projeto.", cta: "" },
    ],
    hp_alt: "Happy path da Camperoteca: Home, Onboarding, Login ou Cadastro e Meu Projeto, de onde também se acessa Aprende e Comunidade. O fluxo principal segue por Encontra, Solicitação e Solicitação enviada.",
    hp_hub: "Daqui também: Aprende · Comunidade",
    hp_cta: "CTA",
    hp_label: "Happy path",
    arch_body:
      "Meu Projeto funciona como hub central: o usuário avança por etapas e, ao identificar uma necessidade, acessa Aprende, Encontra ou Comunidade por meio de CTAs contextuais. A troca de recursos não é um fluxo paralelo — emerge do próprio processo, no momento em que faz sentido.",
    mvp_title: "Escopo do MVP",
    mvp_inc: [
      "Meu Projeto: o hub central do processo. O usuário gerencia o avanço por etapas, acompanha o progresso e acessa recursos contextuais conforme a necessidade do momento.",
      "Aprende: guias técnicos, legais e casos reais, ligados à etapa atual do Meu Projeto.",
      "Encontra: ferramentas e materiais que outras pessoas oferecem por perto, para pegar emprestado ou trocar. Pelo Encontra ou por Minha conta, qualquer pessoa pode oferecer os seus, e após cada empréstimo as pessoas se avaliam.",
      "Comunidade: espaço de conexão entre pessoas que estão camperizando para compartilhar experiências e conhecimento.",
      "Onboarding e cadastro: apresenta como a plataforma funciona por etapas e dá acesso por cadastro ou login.",
    ],
    mvp_inc_label: "Incluído no MVP",

    wf_label: "Wireframes",
    wf_title: "Da estrutura ao design final",
    wf_body:
      "O wireframing avançou em duas fases. Em baixa fidelidade o foco esteve na estrutura de navegação e no fluxo principal: como um usuário novo passa do onboarding ao seu primeiro passo real no projeto. Em alta fidelidade, as decisões se concentraram na hierarquia visual de 'Meu Projeto' como hub central, e em como apresentar o conteúdo de 'Aprende', 'Encontra' e 'Comunidade' sem saturar o usuário. Cada iteração validou que a plataforma orientava sem sobrecarregar.",

    ds_label: "UI Design & Design System",
    ds_title: "«Cosecha Solar»",
    ds_body:
      "O nome não é acidental. O universo camper evoca natureza, movimento e luz. O sistema visual da Camperoteca parte dessa referência para construir uma identidade reconhecível, calorosa e funcional.",
    ds_colors: [
      { hex: "#E07B00", name: "Primário", role: "Energia, ação, orientação" },
      { hex: "#6B7A1A", name: "Secundário", role: "Natureza, confiança" },
      { hex: "#F5E642", name: "Destaque", role: "Destaques, progresso" },
      { hex: "#FDFBF5", name: "Background", role: "Calor, legibilidade" },
    ],
    ds_type_label: "Tipografia",
    ds_fonts: [
      { name: "Roboto", role: "Títulos — estrutura e hierarquia" },
      { name: "DM Sans", role: "Body/UI — clareza e modernidade" },
    ],

    ui_label: "UI Design",
    ui_title: "A solução final",
    ui_body:
      "A interface da Camperoteca toma como referência visual o mundo camper: cores quentes e terrosas, tipografia legível e uma linguagem visual que transmite calma e orientação. O design prioriza a clareza acima da decoração.",
    ui_miproyecto_title: "Meu Projeto",
    ui_miproyecto_body:
      "O hub central da plataforma mostra a etapa atual, o progresso geral e o próximo passo recomendado. Reduz a incerteza e mantém o usuário orientado o tempo todo.",
    ui_aprende_title: "Aprende",
    ui_aprende_body:
      "Organiza o conhecimento em três categorias: guias técnicos (sistemas elétricos, isolamento, marcenaria), guias legais (homologação, inspeção, regulamentação) e casos reais de outros usuários.",
    ui_encuentra_title: "Encontra Recursos",
    ui_encuentra_body: "Reúne as ferramentas e os materiais que outras pessoas oferecem por perto, para pegar emprestado ou trocar. Cada card mostra a distância e se o item está disponível.",
    ui_login_title: "Login",
    ui_login_body:
      "Acesso direto e sem fricção. O usuário entra com e-mail e senha para continuar de onde parou.",
    ui_comunidad_title: "Comunidade",
    ui_comunidad_body: "Conecte-se com outras pessoas que estão camperizando. Pergunte, responda e encontre pessoas próximas com ferramentas ou conhecimento.",
    ui_onboarding_title: "Onboarding",
    ui_onboarding_body:
      "O ponto de entrada no projeto. Guia o usuário desde o início com contexto claro e um primeiro passo prático — antes que a complexidade do processo o trave.",
    ui_mockup_alt: "Visão geral do app Camperoteca mostrando a tela principal Meu Projeto com o planejador por etapas",

    learn_label: "Aprendizados",
    learn_title: "O que levo deste projeto",
    learns: [
      { title: "A pesquisa definiu as prioridades", body: "Eu partia de dois problemas: um processo sem ordem e ferramentas caras de uso pontual. O questionário e as entrevistas confirmaram os dois e mostraram como resolvê-los: Meu Projeto com a etapa atual e o próximo passo, e Encontra para o que só se usa uma vez." },
      { title: "A hipótese de partida se confirmou", body: "Nas entrevistas, 7 de 7 pessoas colocaram encontrar ferramentas à frente de aprender ou se conectar. Isso confirmou que a troca precisava ser um eixo do MVP, e não um extra." },
      { title: "Auditar meu próprio trabalho também é design", body: "Ao preparar este estudo de caso, revisei a coerência entre pesquisa, protótipo e MVP. Encontrei números sem fonte e uma necessidade não atendida: oferecer um recurso próprio. Corrigi os números e desenhei esse fluxo antes de publicar. Aprendi que um caso honesto vale mais do que um caso perfeitinho." },
    ],
    next_title: "Próximas iterações",
    nexts: [
      "Avaliar a compreensão do fluxo principal com usuários reais por meio de testes de usabilidade.",
      "Verificação de identidade e moderação de avaliações, quando houver um volume real de trocas.",
      "Personalizar o projeto desde o cadastro: coletar tipo de van, etapa, orçamento e objetivos para adaptar Meu Projeto e suas recomendações.",
    ],
    research_methods: [
      { num: "32", label: "respostas ao questionário" },
      { num: "7", label: "entrevistas em profundidade" },
      { num: "3", label: "plataformas analisadas" },
    ],
    research_findings_label: "Resultados quantitativos",
    research_findings: [
      { pct: "96,9%", label: "querem tutoriais e guias dentro do app" },
      { pct: "68,8%", label: "entrariam em uma comunidade de camperização" },
      { pct: "65,6%", label: "usariam o app para encontrar, emprestar ou trocar ferramentas" },
      { pct: "46,9%", label: "raramente ou nunca fazem trabalhos manuais (DIY)" },
    ],
    proto_cta: "Ver protótipo interativo",
    proto_hint: "Percorra o fluxo completo: onboarding, login e as quatro seções do app.",
    back_projects: "← Voltar aos projetos",
    nav_sections: [
      { id: "cs-problema", label: "Problema" },
      { id: "cs-research", label: "Research" },
      { id: "cs-insight", label: "Insight" },
      { id: "cs-hmw", label: "Decisões" },
      { id: "cs-arch", label: "Arquitetura" },
      { id: "cs-wireframes", label: "Wireframes" },
      { id: "cs-ds", label: "Design System" },
      { id: "cs-ui", label: "UI" },
      { id: "cs-learn", label: "Aprendizados" },
    ],
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getCopy = (lang: string): typeof copy.es => (copy as any)[lang] ?? copy.es;

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
  const C = getCopy(lang);

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
    <div style={{ background: "var(--bg)", color: "var(--ink)" }}>
      <CaseStudyNav sections={C.nav_sections} />

      {/* ── BACK LINK ── */}
      <div style={{ maxWidth: maxW, margin: "0 auto", padding: "6.5rem 1.5rem 0" }}>
        <Link
          href={`/${lang}`}
          style={{ fontSize: "0.875rem", color: "var(--muted)", textDecoration: "none", display: "inline-block", marginBottom: "3rem", transition: "color 0.2s" }}
        >
          ← {C.back}
        </Link>
      </div>

      {/* ── 01 HERO ── */}
      <section id="cs-hero" style={section}>
        <Reveal>
          <Label text="Case Study" />
          <h1
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
              fontWeight: 400,
              lineHeight: 1.1,
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
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
              marginBottom: "1.5rem",
            }}
          >
            {C.heroDesc}
          </p>

          <a href={PROTOTYPE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginBottom: "3rem", textDecoration: "none" }}>
            {C.proto_cta} <span aria-hidden="true">↗</span>
          </a>

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
              { label: C.meta_rol, value: C.meta_val_rol },
              { label: C.meta_tipo, value: C.meta_val_tipo },
              { label: C.meta_alcance, value: C.meta_val_alcance },
              { label: C.meta_tools, value: C.meta_val_tools },
              { label: C.meta_dur, value: C.meta_val_dur },
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
      <section id="cs-problema" style={section}>
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
      <section id="cs-research" style={section}>
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
            {C.research_methods.map(({ num, label }, i) => (
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
            {C.research_findings_label}
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "1rem",
              marginBottom: "1.5rem",
            }}
          >
            {C.research_findings.map(({ pct, label }) => (
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

        {/* Benchmark */}
        <Reveal delay={0.2}>
          <div
            style={{
              marginTop: "1.5rem",
              padding: "1.25rem 1.5rem",
              borderLeft: "3px solid var(--accent)",
              background: "var(--surface)",
              borderRadius: "0 10px 10px 0",
            }}
          >
            <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--muted)", fontStyle: "italic" }}>
              {C.research_benchmark}
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── 04 INSIGHT + PERSONA ── */}
      <section id="cs-insight" style={section}>
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

          {/* Persona context */}
          <p style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
            {C.persona_context}
          </p>

          {/* Persona cards — Blanca + Fernando */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }} className="personas-two-col">
            {[
              { photo: "persona_photo" in C ? (C as { persona_photo: string | null }).persona_photo : "/assets/camperoteca/personas/blanca.webp", name: C.persona_name, tag: C.persona_tag, desc: C.persona_desc, goals: C.goals, frusts: C.frusts },
              { photo: "persona2_photo" in C ? (C as { persona2_photo: string | null }).persona2_photo : "/assets/camperoteca/personas/fernando.webp", name: C.persona2_name, tag: C.persona2_tag, desc: C.persona2_desc, goals: C.persona2_goals, frusts: C.persona2_frusts },
            ].map(({ photo, name, tag, desc, goals, frusts }) => (
              <div
                key={name}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  padding: "1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                }}
              >
                <div>
                  {/* Foto (recorte sin fondo, desde Figma) + nombre y arquetipo */}
                  <div style={{ display: "flex", alignItems: "center", gap: "1.1rem", marginBottom: "1rem" }}>
                    <div
                      style={{
                        position: "relative",
                        width: "88px",
                        height: "88px",
                        flexShrink: 0,
                        borderRadius: "50%",
                        overflow: "hidden",
                        background: "var(--bg)",
                        boxShadow: "0 0 0 1px var(--border), 0 0 0 4px var(--surface), 0 0 0 5px color-mix(in srgb, var(--accent) 45%, transparent)",
                      }}
                    >
                      {photo ? (
                        <Image
                          src={photo}
                          alt={name.split(",")[0]}
                          fill
                          sizes="88px"
                          quality={90}
                          style={{ objectFit: "cover", objectPosition: "50% 20%" }}
                        />
                      ) : (
                        <span
                          role="img"
                          aria-label={name.split(",")[0]}
                          style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "2rem", color: "var(--accent)" }}
                        >
                          {name.charAt(0)}
                        </span>
                      )}
                    </div>
                    <div>
                      <p style={{ fontSize: "1.05rem", fontWeight: 600, marginBottom: "0.2rem", color: "var(--ink)" }}>
                        {name}
                      </p>
                      <p style={{ fontSize: "0.85rem", color: "var(--accent)", fontWeight: 600 }}>
                        {tag}
                      </p>
                    </div>
                  </div>
                  <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "var(--muted)" }}>{desc}</p>
                </div>
                <div>
                  <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "0.6rem" }}>
                    {C.goals_title}
                  </p>
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.25rem" }}>
                    {goals.map((g) => (
                      <li key={g} style={{ fontSize: "0.875rem", lineHeight: 1.6, color: "var(--ink)", padding: "0.3rem 0", borderBottom: "1px solid var(--border)", display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                        <span style={{ color: "var(--accent)", flexShrink: 0 }}>✓</span> {g}
                      </li>
                    ))}
                  </ul>
                  <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "0.6rem" }}>
                    {C.frusts_title}
                  </p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {frusts.map((f) => (
                      <li key={f} style={{ fontSize: "0.875rem", lineHeight: 1.6, color: "var(--ink)", padding: "0.3rem 0", borderBottom: "1px solid var(--border)", display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                        <span style={{ color: "var(--muted)", flexShrink: 0 }}>—</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── 05 HMW ── */}
      <section id="cs-hmw" style={section}>
        <Reveal>
          <SectionHeading label={C.hmw_label} title={C.hmw_title} />
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {C.hmw_rows.map((row, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "0.5rem",
                  padding: "1rem",
                  borderRadius: "10px",
                  border: "1px solid var(--border)",
                  background: "var(--surface)",
                  fontSize: "0.875rem",
                  lineHeight: 1.6,
                }}
                className="hmw-row"
              >
                <div>
                  <span style={{ display: "block", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "0.25rem" }}>{C.hmw_col1}</span>
                  <span style={{ color: "var(--muted)" }}>{row.prob}</span>
                </div>
                <div>
                  <span style={{ display: "block", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "0.25rem" }}>{C.hmw_col2}</span>
                  <span style={{ color: "var(--ink)" }}>{row.opp}</span>
                </div>
                <div>
                  <span style={{ display: "block", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "0.25rem" }}>{C.hmw_col3}</span>
                  <span
                    style={{
                      display: "inline-block",
                      background: "var(--bg)",
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
                </div>
              </div>
            ))}
          </div>
          <style>{`
            @media (min-width: 640px) {
              .hmw-row { grid-template-columns: 1fr 1fr 1fr !important; }
            }
          `}</style>
        </Reveal>
      </section>

      {/* ── 06 ARQUITECTURA ── */}
      <section id="cs-arch" style={section}>
        <Reveal>
          <SectionHeading label={C.arch_label} title={C.arch_title} />
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--muted)", marginBottom: "2.5rem" }}>
            {C.arch_body}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <figure style={{ margin: "0 0 3rem" }}>
            <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.75rem" }}>{C.hp_label}</p>
            <ol className="cp-hp" aria-label={C.hp_alt} tabIndex={0} style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {C.hp_steps.map((st, i) => (
                <li
                  key={st.t}
                  style={{
                    background: st.hub ? "color-mix(in srgb, var(--accent) 8%, var(--surface))" : "var(--surface)",
                    border: st.hub ? "1.5px solid var(--accent)" : "1px solid var(--border)",
                    borderRadius: "12px",
                    padding: "1.1rem 1.1rem 1.2rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <span aria-hidden="true" style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "1.25rem", lineHeight: 1, color: "var(--accent)" }}>{String(i + 1).padStart(2, "0")}</span>
                  <p style={{ fontSize: "0.875rem", fontWeight: 600, lineHeight: 1.35, color: "var(--ink)" }}>{st.t}</p>
                  <p style={{ fontSize: "0.8125rem", lineHeight: 1.55, color: "var(--muted)" }}>{st.d}</p>
                  {st.hub && <p style={{ fontSize: "0.8125rem", lineHeight: 1.5, color: "var(--ink)" }}>{C.hp_hub}</p>}
                  {st.cta && (
                    <span style={{ marginTop: "auto", paddingTop: "0.5rem", fontSize: "0.75rem", color: "var(--ink)" }}>
                      <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)" }}>{C.hp_cta}</span> → {st.cta}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </figure>
          <style>{`
            .cp-hp { display: grid; gap: 0.75rem; grid-auto-flow: column; grid-auto-columns: 78%; overflow-x: auto; scroll-snap-type: x mandatory; padding-bottom: 0.5rem !important; }
            .cp-hp > li { scroll-snap-align: start; }
            @media (min-width: 640px) { .cp-hp { grid-auto-flow: row; grid-auto-columns: auto; overflow: visible; grid-template-columns: repeat(2, 1fr) !important; padding-bottom: 0 !important; } }
            @media (min-width: 900px) { .cp-hp { grid-template-columns: repeat(4, 1fr) !important; } }
          `}</style>
        </Reveal>

        {/* MVP table */}
        <Reveal delay={0.15}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
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
          </div>
        </Reveal>
      </section>

      {/* ── 07 WIREFRAMES ── */}
      <section id="cs-wireframes" style={section}>
        <Reveal>
          <SectionHeading label={C.wf_label} title={C.wf_title} />
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--muted)", marginBottom: "2.5rem" }}>
            {C.wf_body}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div style={{ borderRadius: "12px", overflow: "hidden", background: "#F7F7F4", padding: "1.5rem 1.5rem 2.75rem" }}>
            <ZoomableImage
              src="/assets/camperoteca/wireframes-hero.png"
              alt="Evolución de wireframes: baja, media y alta fidelidad de las pantallas de Camperoteca"
              width={1672}
              height={941}
              style={{ width: "100%", height: "auto", display: "block", borderRadius: "8px" }}
              hint={C.zoom_hint}
              hintStyle={{ bottom: "-2.25rem" }}
              closeLabel={C.zoom_close}
            />
          </div>
        </Reveal>
      </section>

      {/* ── 08 UI DESIGN & DESIGN SYSTEM ── */}
      <section id="cs-ds" style={section}>
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

      {/* ── 08 SOLUCIÓN FINAL ── */}
      <section id="cs-ui" style={section}>
        <Reveal>
          <SectionHeading label={C.ui_label} title={C.ui_title} />
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--muted)", marginBottom: "3rem" }}>
            {C.ui_body}
          </p>
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
                // Exportar desde Figma solo la pantalla (sin marco de móvil): 390×844 @2x → 780×1688
                src: SCREENS.onboarding,
                title: C.ui_onboarding_title,
                body: C.ui_onboarding_body,
              },
              {
                // Exportar desde Figma solo la pantalla (sin marco de móvil): 390×844 @2x → 780×1688
                src: SCREENS.login,
                title: C.ui_login_title,
                body: C.ui_login_body,
              },
              {
                // Exportar desde Figma solo la pantalla (sin marco de móvil): 390×844 @2x → 780×1688
                src: SCREENS.miproyecto,
                title: C.ui_miproyecto_title,
                body: C.ui_miproyecto_body,
              },
              {
                // Exportar desde Figma solo la pantalla (sin marco de móvil): 390×844 @2x → 780×1688
                src: SCREENS.aprende,
                title: C.ui_aprende_title,
                body: C.ui_aprende_body,
              },
              {
                // Exportar desde Figma solo la pantalla (sin marco de móvil): 390×844 @2x → 780×1688
                src: SCREENS.encuentra,
                title: C.ui_encuentra_title,
                body: C.ui_encuentra_body,
              },
              {
                // Exportar desde Figma solo la pantalla (sin marco de móvil): 390×844 @2x → 780×1688
                src: SCREENS.comunidad,
                title: C.ui_comunidad_title,
                body: C.ui_comunidad_body,
              },
            ].map(({ src, title, body }) => (
              <div key={title}>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
                  <PhoneFrame src={src || undefined} alt={`${C.ui_screen_alt}: ${title}`} label={title} />
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

        <Reveal>
          <div style={{ marginTop: "3.5rem", textAlign: "center" }}>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.6, color: "var(--muted)", marginBottom: "1rem" }}>{C.proto_hint}</p>
            <a href={PROTOTYPE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ textDecoration: "none" }}>
              {C.proto_cta} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </Reveal>
      </section>

      {/* ── 09 APRENDIZAJES ── */}

      <section id="cs-learn" style={sectionLast}>
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
                {typeof l === "string" ? (
                  <span>{l}</span>
                ) : (
                  <span>
                    <strong style={{ display: "block", fontWeight: 600, marginBottom: "0.35rem" }}>{l.title}</strong>
                    {l.body}
                  </span>
                )}
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

          {/* CTA contacto */}
          <div style={{
            marginTop: "3rem",
            padding: "2rem",
            borderRadius: "0.75rem",
            border: "1px solid var(--border)",
            background: "var(--surface)",
            textAlign: "center",
          }}>
            <p style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.5rem",
              color: "var(--accent)",
              marginBottom: "0.75rem",
              letterSpacing: "-0.01em",
            }}>
              {C.cta_label}
            </p>
            <p style={{ fontSize: "0.9375rem", color: "var(--muted)", marginBottom: "1.5rem", lineHeight: 1.6 }}>
              {C.cta_sub}
            </p>
            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="mailto:mvreissilva@gmail.com"
                className="btn-primary"
              >
                {C.cta_email}
              </a>
              <a
                href="https://linkedin.com/in/reis-marcus"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center",
                  padding: "0.625rem 1.25rem", borderRadius: "0.5rem",
                  border: "1px solid var(--border)", background: "transparent",
                  fontSize: "0.875rem", fontWeight: 500, color: "var(--ink)",
                  textDecoration: "none", transition: "opacity 0.2s",
                  fontFamily: "var(--font-sans)",
                }}
              >
                {C.cta_linkedin}
              </a>
            </div>
          </div>

          {/* Volver */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center", marginTop: "1.5rem" }}>
            <Link
              href={`/${lang}`}
              style={{ fontSize: "0.875rem", color: "var(--muted)", textDecoration: "none", display: "inline-block", transition: "color 0.2s" }}
            >
              ← {C.back}
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ── responsive styles ── */}
      <style>{`
        @media (prefers-color-scheme: dark) {
          .screen-img { mix-blend-mode: multiply; }
        }
        [data-theme="dark"] .screen-img { mix-blend-mode: multiply; }
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
          .personas-two-col {
            grid-template-columns: 1fr !important;
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
    </div>
  );
}
