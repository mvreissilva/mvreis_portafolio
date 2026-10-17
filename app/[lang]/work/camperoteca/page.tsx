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
  const base = "https://mvreis-uxportafolio.vercel.app";
  const titles: Record<string, string> = {
    es: "Camperoteca — Case Study · Marcus Reis",
    en: "Camperoteca — Case Study · Marcus Reis",
    pt: "Camperoteca — Case Study · Marcus Reis",
  };
  const descs: Record<string, string> = {
    es: "Diseño UX/UI end-to-end de una plataforma para acompañar a personas durante su proyecto de camperización y facilitar el intercambio de recursos y conocimiento dentro de la comunidad.",
    en: "End-to-end UX/UI design of a platform to guide people through their camper van conversion project and facilitate the exchange of resources and knowledge within the community.",
    pt: "Design UX/UI end-to-end de uma plataforma para acompanhar pessoas durante o seu projeto de camperização e facilitar a troca de recursos e conhecimento dentro da comunidade.",
  };
  return {
    title: titles[lang] ?? titles.es,
    description: descs[lang] ?? descs.es,
    alternates: {
      canonical: `${base}/${lang}/work/camperoteca`,
      languages: {
        "es": `${base}/es/work/camperoteca`,
        "en": `${base}/en/work/camperoteca`,
        "pt": `${base}/pt/work/camperoteca`,
      },
    },
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
      "Diseño de una plataforma digital para acompañar a las personas durante su proyecto de camperización y facilitar el intercambio de recursos y conocimiento dentro de la comunidad.",
    meta_rol: "Rol",
    meta_tipo: "Tipo de proyecto",
    meta_tools: "Herramientas",
    meta_dur: "Duración",

    /* 02 */
    prob_label: "Problema y oportunidad",
    prob_title: "Un proceso complejo, sin guía ni recursos compartidos",
    prob_body:
      "Camperizar una furgoneta por cuenta propia es técnicamente complejo y económicamente exigente. El proceso carece de un orden claro, la información está dispersa y las decisiones mal tomadas tienen coste real. Al mismo tiempo, los materiales y herramientas que se usan puntualmente — y cuestan — terminan sin uso una vez acabada esa fase. Una comunidad que comparte recursos existe, pero sin un canal que la articule.",
    prob_opp:
      "La oportunidad: una plataforma que guiara el proceso y activara la comunidad — donde materiales, herramientas y conocimiento circularan entre privados por donación, intercambio o venta. Orientación y economía circular en un mismo lugar.",

    /* 03 */
    research_label: "UX Research",
    research_title: "Investigar antes de diseñar",
    research_body:
      "Antes de proponer ninguna solución, llevé a cabo una investigación mixta para entender quiénes eran los usuarios, qué hacían y dónde encontraban dificultades.",
    research_benchmark:
      "El análisis competitivo confirmó el hueco: ninguna plataforma española cubre los tres ejes — guías, comunidad y recursos — en un solo lugar. Eso definió el doble alcance del proyecto. El 71,6% de los encuestados usaría una app para este proceso — lo que validó la necesidad de guía estructurada. El 40,6% mostró interés activo en compartir recursos, lo que justificó incluir el eje de intercambio P2P desde el MVP. Las entrevistas reforzaron ambos hallazgos: sin una plataforma que ordene el proceso y conecte a usuarios, cada persona lo resuelve sola y a mayor coste.",

    /* 04 */
    insight_label: "Insight y persona",
    insight_title: "Lo que realmente necesitaban",
    insight_quote:
      "Los usuarios saben lo que quieren: avanzar paso a paso y no gastar de más. Lo que les falta es una plataforma que ordene el proceso y conecte a quienes ya tienen lo que otros buscan.",
    persona_name: "Blanca Jiménez, 38 años",
    persona_tag: "«La Exploradora»",
    persona_desc:
      "Psicóloga en Pamplona. Le interesa la sostenibilidad y la economía colaborativa. Quiere iniciarse en el mundo camper de forma responsable: aprender antes de camperizar y conectar con personas con intereses similares.",
    goals_title: "Objetivos",
    goals: [
      "Empezar de forma sostenible y responsable.",
      "Aprender antes de tomar decisiones económicas.",
      "Conectar con una comunidad que comparte sus valores.",
    ],
    frusts_title: "Frustraciones",
    frusts: [
      "No saber por dónde empezar.",
      "Información dispersa y sin contexto.",
      "Miedo a gastar dinero en soluciones que no funcionen.",
    ],
    persona_context:
      "Dos perfiles distintos, dos necesidades que el producto debe resolver a la vez.",
    persona2_name: "Fernando Molina, 31 años",
    persona2_tag: "«El Nómada»",
    persona2_desc:
      "Desarrollador freelance en Valencia. Ya tiene su furgoneta camperizada y la usa como segunda residencia. Acumula materiales sobrantes y herramientas que ya no necesita, y busca una forma de que circulen entre otros usuarios.",
    persona2_goals: [
      "Dar salida a herramientas y materiales que ya no usa.",
      "Conectar con personas en fases más tempranas que él.",
      "Participar en una comunidad donde el conocimiento se comparte.",
    ],
    persona2_frusts: [
      "No hay un canal confiable para intercambiar entre privados.",
      "Los grupos de Facebook son caóticos y sin sistema de confianza.",
      "Siente que su experiencia podría ayudar a otros pero no tiene cómo.",
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
        opp: "Facilitar el acceso a recursos cercanos mediante intercambio, donación o venta entre usuarios",
        dec: "Directorio con filtros + perfiles de usuario",
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
      "Mi Proyecto actúa como hub central: el usuario avanza por etapas y, al detectar una necesidad, accede a Aprende, Encuentra o Comunidad mediante CTAs contextuales. El intercambio de recursos no es un flujo paralelo — emerge del propio proceso, en el momento en que tiene sentido.",
    mvp_title: "Alcance del MVP",
    mvp_inc: [
      "Mi Proyecto: hub central del proceso. El usuario gestiona su avance por etapas, visualiza su progreso y accede a recursos contextuales según su necesidad actual.",
      "Aprende: guías técnicas, legales y casos reales organizados por etapa del proyecto.",
      "Encuentra: directorio de materiales y herramientas disponibles entre usuarios — versión inicial del eje de intercambio P2P.",
      "Comunidad: espacio de conexión entre personas en proceso de camperización para compartir experiencias y conocimiento.",
      "Onboarding y registro: flujo de incorporación personalizado que recoge el tipo de furgoneta, fase del proyecto y objetivos del usuario.",
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
    ui_encuentra_body:
      "Conecta con usuarios cercanos que tienen herramientas o materiales disponibles — para intercambiar, donar, comprar o vender. También deriva a tiendas especializadas cuando no hay recurso disponible en la comunidad.",
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
      "Escuchar a los usuarios me hizo cambiar el foco: no diseñé una guía de contenidos, diseñé un punto de entrada. La desorientación inicial era el problema real.",
      "El research reveló que la motivación caía cuando el proceso parecía infinito. Mostrar etapas y avance no fue una decisión estética — fue una respuesta directa a lo que decían los usuarios.",
      "Los datos de la encuesta — el 68% consultando múltiples fuentes, el 72% sin punto de partida claro — hicieron de la arquitectura por etapas la única respuesta coherente. Estructurar el contenido por fase no fue una convención de UX, fue una decisión de diseño anclada en esos números.",
      "Las encuestas revelaron una disposición real a compartir materiales y herramientas. La comunidad no fue una apuesta de diseño — fue una respuesta a lo que los propios usuarios pedían.",
    ],
    next_title: "Próximas iteraciones",
    nexts: [
      "Evaluar la comprensión del flujo principal con usuarios reales mediante pruebas de usabilidad.",
      "Diseñar y validar la sección de perfil de usuario como base del sistema de confianza para las operaciones de intercambio, donación y venta entre privados.",
      "Desarrollar el marketplace completo con sistema de valoraciones y reputación entre usuarios.",
      "Explorar personalización del proyecto: recomendaciones adaptadas al tipo de furgoneta, presupuesto y fase de construcción del usuario.",
    ],
    research_methods: [
      { num: "34", label: "encuestas realizadas" },
      { num: "8", label: "entrevistas en profundidad" },
      { num: "3", label: "plataformas analizadas" },
    ],
    research_findings_label: "Hallazgos cuantitativos",
    research_findings: [
      { pct: "72%", label: "no saben por dónde empezar su proyecto" },
      { pct: "68%", label: "consultan múltiples fuentes para resolver una sola duda" },
      { pct: "54%", label: "han cometido o temen errores con impacto económico real" },
      { pct: "61%", label: "preferirían ayuda de otros usuarios durante el proceso" },
    ],
    proto_cta: "Ver prototipo en Figma",
    back_projects: "← Volver a proyectos",
  },

  en: {
    back: "Back",
    tag1: "UX/UI Designer · End-to-End",
    tag2: "Academic project · Bootcamp NEOLAND",
    tag3: "Oct 2025 – Apr 2026",
    tag4: "Responsive · Mobile First",
    tag5: "Figma · FigJam · Figma Make · Stitch",
    heroTitle: "Camperoteca",
    heroSub: "turning a complex process into a clear journey",
    heroDesc:
      "Design of a digital platform to guide people through their camper van conversion project and facilitate the exchange of resources and knowledge within the community.",
    meta_rol: "Role",
    meta_tipo: "Project type",
    meta_tools: "Tools",
    meta_dur: "Duration",

    prob_label: "Problem & Opportunity",
    prob_title: "A complex process, with no guidance or shared resources",
    prob_body:
      "Converting a van on your own is technically complex and financially demanding. The process has no clear order, information is scattered and poorly timed decisions carry real cost. At the same time, materials and tools used briefly — at real cost — end up idle once that phase is over. A community that shares resources exists, but without a channel to bring it together.",
    prob_opp:
      "The opportunity: a platform that guides the process and activates the community — where materials, tools and knowledge flow between individuals through donation, exchange or sale. Guidance and circular economy in one place.",

    research_label: "UX Research",
    research_title: "Research before design",
    research_body:
      "Before proposing any solution, I conducted mixed research to understand who the users were, what they did and where they encountered difficulties.",
    research_benchmark:
      "The competitive analysis confirmed the gap: no Spanish platform covers all three axes — guides, community and resources — in one place. That defined the project's dual scope. 71.6% of respondents would use an app for this process — validating the need for structured guidance. 40.6% showed active interest in sharing resources within the community, which justified including the P2P exchange axis from the MVP. Interviews reinforced both findings: without a platform that organises the process and connects users, everyone solves it alone and at greater cost.",

    insight_label: "Insight & Persona",
    insight_title: "What they really needed",
    insight_quote:
      "Users know what they want: to move forward step by step and not overspend. What they're missing is a platform that organises the process and connects those who already have what others are looking for.",
    persona_name: "Blanca Jiménez, 38",
    persona_tag: "«The Explorer»",
    persona_desc:
      "Psychologist in Pamplona. Interested in sustainability and the sharing economy. Wants to enter the camper world responsibly: learn before building and connect with like-minded people.",
    goals_title: "Goals",
    goals: [
      "Start in a sustainable and responsible way.",
      "Learn before making financial decisions.",
      "Connect with a community that shares her values.",
    ],
    frusts_title: "Frustrations",
    frusts: [
      "Not knowing where to start.",
      "Scattered information with no context.",
      "Fear of spending money on solutions that won't work.",
    ],
    persona_context:
      "Two distinct profiles, two needs the product must solve at once.",
    persona2_name: "Fernando Molina, 31",
    persona2_tag: "«The Nomad»",
    persona2_desc:
      "Freelance developer in Valencia. His van is already converted and serves as a second home. He has leftover materials and tools he no longer needs and is looking for a way to pass them on to other users.",
    persona2_goals: [
      "Find a use for tools and materials he no longer needs.",
      "Connect with people in earlier stages of the process.",
      "Participate in a community where knowledge is shared.",
    ],
    persona2_frusts: [
      "No reliable channel exists for peer-to-peer exchange.",
      "Facebook groups are chaotic and lack a trust system.",
      "His experience could help others, but he has no way to share it.",
    ],

    hmw_label: "How Might We",
    hmw_title: "From problem to opportunity",
    hmw_rows: [
      {
        prob: "Information fragmented across multiple sources",
        opp: "Centralise and structure in one place",
        dec: "Dashboard with ordered phases",
      },
      {
        prob: "No reference for project progress",
        opp: "Make progress visible step by step",
        dec: "Planner with stages and checklist",
      },
      {
        prob: "Guides scattered across YouTube, forums and social media; users don't know where to start",
        opp: "Structure knowledge by type and project phase",
        dec: "Technical, legal guides and real cases",
      },
      {
        prob: "Tools and materials require outright purchase or external search",
        opp: "Facilitate access to nearby resources through exchange, donation or sale between users",
        dec: "Directory with filters + user profiles",
      },
      {
        prob: "Valuable but chaotic and unreliable community",
        opp: "Organise by context, phase and reputation",
        dec: "Structured forum with validation",
      },
    ],
    hmw_col1: "Problem",
    hmw_col2: "Opportunity",
    hmw_col3: "Design decision",

    arch_label: "Information Architecture",
    arch_title: "Navigation structure and main user flow",
    arch_body:
      "My Project acts as the central hub: the user progresses through stages and, when a need arises, accesses Learn, Find or Community through contextual CTAs. The exchange of resources is not a parallel flow — it emerges from the process itself, at the moment it makes sense.",
    mvp_title: "MVP Scope",
    mvp_inc: [
      "My Project: central hub of the process. The user manages their progress through stages, tracks advancement and accesses contextual resources based on their current need.",
      "Learn: technical guides, legal guides and real cases organised by project stage.",
      "Find: directory of materials and tools available between users — initial version of the P2P exchange axis.",
      "Community: connection space for people going through the van conversion process to share experiences and knowledge.",
      "Onboarding and registration: personalised onboarding flow that captures the van type, project phase and user goals.",
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
    ui_encuentra_body:
      "Connect with nearby users who have tools or materials available — to exchange, donate, buy or sell. Also redirects to specialist shops when no resource is available within the community.",
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
      "Listening to users made me shift my focus: I didn't design a content guide, I designed a starting point. The initial disorientation was the real problem.",
      "Research revealed that motivation dropped when the process seemed endless. Showing stages and progress was not an aesthetic decision — it was a direct response to what users were saying.",
      "The survey data — 68% consulting multiple sources, 72% without a clear starting point — made the staged architecture the only coherent answer. Structuring content by phase was not a UX convention, it was a design decision grounded in those numbers.",
      "Surveys revealed a genuine willingness to share materials and tools. The community axis was not a design bet — it was a response to what users themselves were asking for.",
    ],
    next_title: "Next iterations",
    nexts: [
      "Evaluate understanding of the main flow with real users through usability testing.",
      "Design and validate the user profile section as the foundation of the trust system for exchange, donation and sale operations between private users.",
      "Develop the full marketplace with a ratings and reputation system between users.",
      "Explore project personalisation: recommendations tailored to the user's van type, budget and construction phase.",
    ],
    research_methods: [
      { num: "34", label: "surveys completed" },
      { num: "8", label: "in-depth interviews" },
      { num: "3", label: "platforms analysed" },
    ],
    research_findings_label: "Quantitative findings",
    research_findings: [
      { pct: "72%", label: "don't know where to start their project" },
      { pct: "68%", label: "consult multiple sources to answer a single question" },
      { pct: "54%", label: "have made or fear mistakes with real financial impact" },
      { pct: "61%", label: "would prefer help from other users during the process" },
    ],
    proto_cta: "View prototype on Figma",
    back_projects: "← Back to projects",
  },

  pt: {
    back: "Voltar",
    tag1: "UX/UI Designer · End-to-End",
    tag2: "Projeto académico · Bootcamp NEOLAND",
    tag3: "Out 2025 – Abr 2026",
    tag4: "Responsivo · Mobile First",
    tag5: "Figma · FigJam · Figma Make · Stitch",
    heroTitle: "Camperoteca",
    heroSub: "transformar um processo complexo numa jornada clara",
    heroDesc:
      "Design de uma plataforma digital para acompanhar pessoas durante o seu projeto de camperização e facilitar a troca de recursos e conhecimento dentro da comunidade.",
    meta_rol: "Função",
    meta_tipo: "Tipo de projeto",
    meta_tools: "Ferramentas",
    meta_dur: "Duração",

    prob_label: "Problema e oportunidade",
    prob_title: "Um processo complexo, sem orientação nem recursos partilhados",
    prob_body:
      "Camperizar uma van por conta própria é tecnicamente complexo e economicamente exigente. O processo não tem uma ordem clara, a informação está dispersa e as decisões mal tomadas têm custo real. Ao mesmo tempo, os materiais e ferramentas usados pontualmente — e que custam — ficam sem uso assim que essa fase termina. Existe uma comunidade que partilha recursos, mas sem um canal que a articule.",
    prob_opp:
      "A oportunidade: uma plataforma que orientasse o processo e ativasse a comunidade — onde materiais, ferramentas e conhecimento circulassem entre privados por doação, troca ou venda. Orientação e economia circular num mesmo lugar.",

    research_label: "UX Research",
    research_title: "Investigar antes de desenhar",
    research_body:
      "Antes de propor qualquer solução, realizei uma investigação mista para entender quem eram os usuarios, o que faziam e onde encontravam dificuldades.",
    research_benchmark:
      "A análise competitiva confirmou a lacuna: nenhuma plataforma espanhola cobre os três eixos — guias, comunidade e recursos — num único lugar. Isso definiu o duplo âmbito do projeto. 71,6% dos inquiridos usaria uma app para este processo — o que validou a necessidade de orientação estruturada. 40,6% mostrou interesse ativo em partilhar recursos, o que justificou incluir o eixo de troca P2P desde o MVP. As entrevistas reforçaram ambos os dados: sem uma plataforma que organize o processo e conecte utilizadores, cada pessoa resolve sozinha e a maior custo.",

    insight_label: "Insight e Persona",
    insight_title: "O que realmente precisavam",
    insight_quote:
      "Os utilizadores sabem o que querem: avançar passo a passo e não gastar desnecessariamente. O que lhes falta é uma plataforma que organize o processo e conecte quem já tem o que outros procuram.",
    persona_name: "Blanca Jiménez, 38 anos",
    persona_tag: "«A Exploradora»",
    persona_desc:
      "Psicóloga em Pamplona. Interessada em sustentabilidade e economia colaborativa. Quer entrar no mundo camper de forma responsável: aprender antes de camperizar e conectar com pessoas com interesses semelhantes.",
    goals_title: "Objetivos",
    goals: [
      "Começar de forma sustentável e responsável.",
      "Aprender antes de tomar decisões económicas.",
      "Conectar com uma comunidade que partilha os seus valores.",
    ],
    frusts_title: "Frustrações",
    frusts: [
      "Não saber por onde começar.",
      "Informação dispersa e sem contexto.",
      "Medo de gastar dinheiro em soluções que não funcionem.",
    ],
    persona_context:
      "Dois perfis distintos, duas necessidades que o produto tem de resolver em simultâneo.",
    persona2_name: "Fernando Molina, 31 anos",
    persona2_tag: "«O Nómada»",
    persona2_desc:
      "Programador freelance em Valência. A sua furgoneta já está camperizada e serve como segunda residência. Acumula materiais e ferramentas que já não precisa e procura uma forma de os fazer circular entre outros utilizadores.",
    persona2_goals: [
      "Dar saída a ferramentas e materiais que já não usa.",
      "Conectar com pessoas em fases mais iniciais do processo.",
      "Participar numa comunidade onde o conhecimento se partilha.",
    ],
    persona2_frusts: [
      "Não existe um canal confiável para troca entre privados.",
      "Os grupos do Facebook são caóticos e sem sistema de confiança.",
      "Sente que a sua experiência poderia ajudar outros, mas não tem como.",
    ],

    hmw_label: "How Might We",
    hmw_title: "Do problema à oportunidade",
    hmw_rows: [
      {
        prob: "Informação fragmentada em múltiplas fontes",
        opp: "Centralizar e estruturar num único lugar",
        dec: "Dashboard com fases ordenadas",
      },
      {
        prob: "Sem referência de progresso no projeto",
        opp: "Tornar o avanço visível passo a passo",
        dec: "Planeador com etapas e checklist",
      },
      {
        prob: "Guias dispersos no YouTube, fóruns e redes; o usuario não sabe por onde começar",
        opp: "Estruturar o conhecimento por tipo e fase do projeto",
        dec: "Guias técnicos, legais e casos reais",
      },
      {
        prob: "Ferramentas e materiais requerem compra definitiva ou pesquisa externa",
        opp: "Facilitar o acesso a recursos próximos através de troca, doação ou venda entre utilizadores",
        dec: "Diretório com filtros + perfis de utilizador",
      },
      {
        prob: "Comunidade valiosa mas caótica e pouco fiável",
        opp: "Organizar por contexto, fase e reputação",
        dec: "Fórum estruturado com validação",
      },
    ],
    hmw_col1: "Problema",
    hmw_col2: "Oportunidade",
    hmw_col3: "Decisão de design",

    arch_label: "Arquitetura de informação",
    arch_title: "Estrutura de navegação e percurso principal",
    arch_body:
      "O Meu Projeto funciona como hub central: o utilizador avança por etapas e, ao detetar uma necessidade, acede a Aprende, Encontra ou Comunidade através de CTAs contextuais. A troca de recursos não é um fluxo paralelo — emerge do próprio processo, no momento em que faz sentido.",
    mvp_title: "Âmbito do MVP",
    mvp_inc: [
      "O Meu Projeto: hub central do processo. O utilizador gere o seu avanço por etapas, visualiza o progresso e acede a recursos contextuais conforme a necessidade atual.",
      "Aprende: guias técnicos, legais e casos reais organizados por etapa do projeto.",
      "Encontra: diretório de materiais e ferramentas disponíveis entre utilizadores — versão inicial do eixo de troca P2P.",
      "Comunidade: espaço de ligação entre pessoas em processo de camperização para partilhar experiências e conhecimento.",
      "Onboarding e registo: fluxo de incorporação personalizado que recolhe o tipo de furgoneta, fase do projeto e objetivos do utilizador.",
    ],
    mvp_inc_label: "Incluído no MVP",

    wf_label: "Wireframes",
    wf_title: "Da estrutura ao design final",
    wf_body:
      "O wireframing avançou em duas fases. Em baixa fidelidade o foco esteve na estrutura de navegação e no fluxo principal: como um utilizador novo passa do onboarding ao seu primeiro passo real no projeto. Em alta fidelidade, as decisões centraram-se na hierarquia visual de 'O Meu Projeto' como hub central, e em como apresentar o conteúdo de 'Aprende', 'Encontra' e 'Comunidade' sem saturar o utilizador. Cada iteração validou que a plataforma orientava sem sobrecarregar.",

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
      "A interface da Camperoteca toma como referência visual o mundo camper: cores quentes e terrosas, tipografia legível e uma linguagem visual que transmite calma e orientação. O design prioriza a clareza em detrimento da decoração.",
    ui_miproyecto_title: "Meu Projeto",
    ui_miproyecto_body:
      "O hub central da plataforma mostra a etapa atual, o progresso geral e o próximo passo recomendado. Reduz a incerteza e mantém o usuario orientado a todo o momento.",
    ui_aprende_title: "Aprende",
    ui_aprende_body:
      "Organiza o conhecimento em três categorias: guias técnicos (sistemas elétricos, isolamento, carpintaria), guias legais (homologação, inspeção, regulamentação) e casos reais de outros usuarios.",
    ui_encuentra_title: "Encontra Recursos",
    ui_encuentra_body:
      "Liga com utilizadores próximos que têm ferramentas ou materiais disponíveis — para trocar, doar, comprar ou vender. Também redireciona para lojas especializadas quando não há recurso disponível na comunidade.",
    ui_login_title: "Login",
    ui_login_body:
      "Acesso direto e sem fricção. O usuario entra com email e palavra-passe para continuar onde ficou.",
    ui_comunidad_title: "Comunidade",
    ui_comunidad_body:
      "Conecta com outros campistas. Pergunta, responde e encontra usuarios próximos com ferramentas ou conhecimento.",
    ui_onboarding_title: "Onboarding",
    ui_onboarding_body:
      "O ponto de entrada no projeto. Guia o utilizador desde o início com contexto claro e um primeiro passo acionável — antes que a complexidade do processo o bloqueie.",
    ui_mockup_alt: "Vista geral da aplicação Camperoteca mostrando o ecrã principal Meu Projeto com o planeador por etapas",

    learn_label: "Aprendizagens",
    learn_title: "O que levo deste projeto",
    learns: [
      "Ouvir os utilizadores fez-me mudar o foco: não desenhei um guia de conteúdos, desenhei um ponto de entrada. A desorientação inicial era o problema real.",
      "A investigação revelou que a motivação caía quando o processo parecia infinito. Mostrar etapas e progresso não foi uma decisão estética — foi uma resposta direta ao que os utilizadores diziam.",
      "Os dados da pesquisa — 68% a consultar múltiplas fontes, 72% sem ponto de partida claro — tornaram a arquitetura por etapas a única resposta coerente. Estruturar o conteúdo por fase não foi uma convenção de UX, foi uma decisão de design ancorada nesses números.",
      "Os inquéritos revelaram uma disposição real para partilhar materiais e ferramentas. A comunidade não foi uma aposta de design — foi uma resposta ao que os próprios utilizadores pediam.",
    ],
    next_title: "Próximas iterações",
    nexts: [
      "Avaliar a compreensão do fluxo principal com utilizadores reais através de testes de usabilidade.",
      "Desenhar e validar a secção de perfil de utilizador como base do sistema de confiança para as operações de troca, doação e venda entre privados.",
      "Desenvolver o marketplace completo com sistema de avaliações e reputação entre utilizadores.",
      "Explorar personalização do projeto: recomendações adaptadas ao tipo de furgoneta, orçamento e fase de construção do utilizador.",
    ],
    research_methods: [
      { num: "34", label: "inquéritos realizados" },
      { num: "8", label: "entrevistas em profundidade" },
      { num: "3", label: "plataformas analisadas" },
    ],
    research_findings_label: "Resultados quantitativos",
    research_findings: [
      { pct: "72%", label: "não sabem por onde começar o seu projeto" },
      { pct: "68%", label: "consultam múltiplas fontes para resolver uma única dúvida" },
      { pct: "54%", label: "cometeram ou temem erros com impacto económico real" },
      { pct: "61%", label: "prefeririam ajuda de outros utilizadores durante o processo" },
    ],
    proto_cta: "Ver protótipo no Figma",
    back_projects: "← Voltar aos projetos",
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
              marginBottom: "0.5rem",
              color: "var(--ink)",
            }}
          >
            {C.heroTitle}
          </h1>
          <p
            style={{
              fontSize: "1.15rem",
              lineHeight: 1.5,
              color: "var(--muted)",
              maxWidth: "560px",
              marginBottom: "1rem",
              fontStyle: "italic",
            }}
          >
            {C.heroSub}
          </p>
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

          {/* Persona context */}
          <p style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
            {C.persona_context}
          </p>

          {/* Persona cards — Blanca + Fernando */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }} className="personas-two-col">
            {[
              { name: C.persona_name, tag: C.persona_tag, desc: C.persona_desc, goals: C.goals, frusts: C.frusts },
              { name: C.persona2_name, tag: C.persona2_tag, desc: C.persona2_desc, goals: C.persona2_goals, frusts: C.persona2_frusts },
            ].map(({ name, tag, desc, goals, frusts }) => (
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
                  <p style={{ fontSize: "1.05rem", fontWeight: 600, marginBottom: "0.2rem", color: "var(--ink)" }}>
                    {name}
                  </p>
                  <p style={{ fontSize: "0.85rem", color: "var(--accent)", fontWeight: 600, marginBottom: "0.75rem" }}>
                    {tag}
                  </p>
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
          <div style={{ borderRadius: "12px", overflow: "hidden", background: "#F7F7F4", padding: "1.5rem" }}>
            <Image
              src="/assets/camperoteca/wireframes-hero.png"
              alt="Evolución de wireframes: baja, media y alta fidelidad de las pantallas de Camperoteca"
              width={1920}
              height={1080}
              style={{ width: "100%", height: "auto", display: "block", borderRadius: "8px" }}
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
                src: "/assets/camperoteca/screen-onboarding-v2.webp",
                alt: "Onboarding: primer paso de la app, planifica tu proyecto desde cero",
                title: C.ui_onboarding_title,
                body: C.ui_onboarding_body,
                placeholder: false,
              },
              {
                src: "",
                alt: "",
                title: C.ui_login_title,
                body: C.ui_login_body,
                placeholder: true,
              },
              {
                src: "/assets/camperoteca/screen-miproyecto.webp",
                alt: "Mi Proyecto: planificador por etapas con progreso y siguiente paso recomendado",
                title: C.ui_miproyecto_title,
                body: C.ui_miproyecto_body,
                placeholder: false,
              },
              {
                src: "/assets/camperoteca/screen-aprende-v2.webp",
                alt: "Aprende: guías técnicas, legales y casos reales",
                title: C.ui_aprende_title,
                body: C.ui_aprende_body,
                placeholder: false,
              },
              {
                src: "/assets/camperoteca/screen-encuentra-v2.webp",
                alt: "Encuentra Recursos: herramientas y materiales para la camperización",
                title: C.ui_encuentra_title,
                body: C.ui_encuentra_body,
                placeholder: false,
              },
              {
                src: "",
                alt: "",
                title: C.ui_comunidad_title,
                body: C.ui_comunidad_body,
                placeholder: true,
              },
            ].map(({ src, alt, title, body, placeholder }) => (
              <div key={title}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "1.25rem",
                  }}
                >
                  {placeholder ? (
                    <div
                      style={{
                        display: "block",
                        width: "min(180px, 48vw)",
                        height: "calc(min(180px, 48vw) * 620 / 284)",
                        borderRadius: "22px",
                        background: "var(--surface)",
                        border: "1.5px dashed var(--border)",
                      }}
                    />
                  ) : (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={src}
                      alt={alt}
                      width={284}
                      height={620}
                      style={{
                        display: "block",
                        width: "min(180px, 48vw)",
                        height: "calc(min(180px, 48vw) * 620 / 284)",
                        objectFit: "cover",
                        borderRadius: "22px",
                        boxShadow: "0 6px 24px rgba(0,0,0,0.1)",
                      }}
                    />
                  )}
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
              style={{ fontSize: "0.875rem", color: "var(--muted)", textDecoration: "none", display: "inline-block", transition: "color 0.2s" }}
            >
              ← {C.back}
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
