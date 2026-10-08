export const LANGS = ["es", "en", "pt"] as const;
export type Lang = typeof LANGS[number];

export const t = {
  es: {
    nav: { work: "Trabajo", about: "Sobre mí", skills: "Skills", contact: "Contacto" },
    hero: {
      available: "Disponible · Sevilla",
      title1: "Soy Marcus Reis.",
      title2: "Diseño experiencias que tienen sentido.",
      body: "UX/UI Designer con base en investigación y arquitectura de información. Más de diez años en entornos corporativos me enseñaron a ver los problemas antes de diseñar las soluciones.",
      cta: "Ver proyectos",
      cv: "Descargar CV",
    },
    work: {
      label: "Proyectos seleccionados",
      view: "Ver caso completo",
    },
    about: {
      label: "Sobre mí",
      p1: "Llegué al UX/UI Design desde más de diez años en entornos corporativos — primero en IBM Brasil analizando contratos y procesos complejos, después en Foundever España trabajando directamente con usuarios reales en la campaña de Iberia.",
      p2: "Esa trayectoria me enseñó algo que los bootcamps no enseñan: los problemas más importantes no están en la interfaz. Están en la brecha entre cómo funciona un sistema y cómo lo viven las personas que lo usan.",
      p3: "Hoy diseño desde esa convicción. Priorizo investigación, arquitectura de información y validación real antes de tomar ninguna decisión visual.",
      faq: [
        { q: "¿Qué tipo de diseñador es Marcus?", a: "Uno que investiga antes de diseñar. Mi foco está en entender el problema real — no en saltar a wireframes. Combino UX Research, arquitectura de información y diseño de interfaz dentro del mismo proceso." },
        { q: "¿Qué lo diferencia de otros perfiles junior?", a: "Más de diez años en entornos corporativos reales. En IBM aprendí a analizar procesos complejos. En Foundever trabajé directamente con usuarios finales. Esa base no se improvisa." },
        { q: "¿Qué papel tiene la IA en su proceso?", a: "Es una herramienta en fases específicas — síntesis de research, exploración visual, ideación. Las decisiones de diseño son siempre humanas y fundamentadas en contexto y usuarios reales." },
        { q: "¿Está disponible?", a: "Sí. Busco un rol como UX Designer, UX Researcher o Product Designer en España, Europa o en remoto. Disponibilidad inmediata." },
      ],
    },
    skills: {
      label: "Capacidades",
      groups: [
        { title: "Investigación", items: ["UX Research", "Entrevistas", "Encuestas", "Benchmark", "User Personas", "Customer Journey", "Usability Testing"] },
        { title: "Diseño de producto", items: ["Arquitectura de información", "User Flows", "Wireframing", "Prototipado", "MVP Definition", "Design Systems"] },
        { title: "UI e interfaz", items: ["UI Design", "Interaction Design", "Responsive Design", "Mobile First", "Accesibilidad"] },
        { title: "Herramientas", items: ["Figma · FigJam", "Framer", "Miro", "Notion", "Claude AI", "ChatGPT"] },
      ],
    },
    contact: {
      label: "Contacto",
      title: "¿Trabajamos juntos?",
      body: "Busco oportunidades como UX Designer, UX Researcher o Product Designer. Remoto, híbrido o presencial en España.",
      linkedin: "LinkedIn",
      cv: "Descargar CV",
    },
    footer: "Sevilla, España · 2025",
    projects: {
      camperoteca: {
        tag: "UX/UI · End to End · Proyecto personal",
        title: "Camperoteca",
        desc: "Plataforma mobile para simplificar la planificación del proceso de camperización. Del caos de información a una guía progresiva centrada en el usuario.",
        year: "2024–25",
      },
      riptide: {
        tag: "UX/UI · IA · Sostenibilidad · Conceptual",
        title: "Riptide",
        desc: "Extensión de navegador que hace visible el impacto hídrico de la actividad digital. Awareness sin culpa, presencia sin intrusión.",
        year: "2025",
      },
    },
  },

  en: {
    nav: { work: "Work", about: "About", skills: "Skills", contact: "Contact" },
    hero: {
      available: "Available · Seville",
      title1: "I'm Marcus Reis.",
      title2: "I design experiences that make sense.",
      body: "UX/UI Designer grounded in research and information architecture. Over ten years in corporate environments taught me to see the problems before designing the solutions.",
      cta: "See projects",
      cv: "Download CV",
    },
    work: {
      label: "Selected work",
      view: "View case study",
    },
    about: {
      label: "About",
      p1: "I came to UX/UI Design from over ten years in corporate environments — first at IBM Brasil analysing complex contracts and processes, then at Foundever España working directly with real users on the Iberia campaign.",
      p2: "That background taught me something bootcamps don't: the most important problems aren't in the interface. They're in the gap between how a system works and how the people using it experience it.",
      p3: "Today I design from that conviction. I prioritise research, information architecture, and real validation before making any visual decisions.",
      faq: [
        { q: "What kind of designer is Marcus?", a: "One who researches before designing. My focus is on understanding the real problem — not jumping straight to wireframes. I combine UX Research, information architecture and interface design in one process." },
        { q: "What sets him apart from other junior profiles?", a: "Over ten years in real corporate environments. At IBM I learned to analyse complex processes. At Foundever I worked directly with end users. That foundation can't be improvised." },
        { q: "What role does AI play in his process?", a: "It's a tool in specific phases — research synthesis, visual exploration, ideation. Design decisions are always human and grounded in real context and users." },
        { q: "Is he available?", a: "Yes. I'm looking for a role as UX Designer, UX Researcher or Product Designer in Spain, Europe or remote. Immediately available." },
      ],
    },
    skills: {
      label: "Capabilities",
      groups: [
        { title: "Research", items: ["UX Research", "User Interviews", "Surveys", "Benchmark", "User Personas", "Customer Journey", "Usability Testing"] },
        { title: "Product design", items: ["Information Architecture", "User Flows", "Wireframing", "Prototyping", "MVP Definition", "Design Systems"] },
        { title: "UI & interface", items: ["UI Design", "Interaction Design", "Responsive Design", "Mobile First", "Accessibility"] },
        { title: "Tools", items: ["Figma · FigJam", "Framer", "Miro", "Notion", "Claude AI", "ChatGPT"] },
      ],
    },
    contact: {
      label: "Contact",
      title: "Let's work together",
      body: "Looking for opportunities as UX Designer, UX Researcher or Product Designer. Remote, hybrid or on-site in Spain.",
      linkedin: "LinkedIn",
      cv: "Download CV",
    },
    footer: "Seville, Spain · 2025",
    projects: {
      camperoteca: {
        tag: "UX/UI · End to End · Personal project",
        title: "Camperoteca",
        desc: "Mobile platform to simplify the planning of the van conversion process. From fragmented information to a progressive user-centred guide.",
        year: "2024–25",
      },
      riptide: {
        tag: "UX/UI · AI · Sustainability · Conceptual",
        title: "Riptide",
        desc: "A browser extension that makes the hidden water footprint of digital activity visible. Awareness without guilt, presence without intrusion.",
        year: "2025",
      },
    },
  },

  pt: {
    nav: { work: "Projetos", about: "Sobre mim", skills: "Skills", contact: "Contato" },
    hero: {
      available: "Disponível · Sevilha",
      title1: "Sou Marcus Reis.",
      title2: "Desenho experiências que fazem sentido.",
      body: "UX/UI Designer com base em investigação e arquitetura de informação. Mais de dez anos em ambientes corporativos ensinaram-me a ver os problemas antes de desenhar as soluções.",
      cta: "Ver projetos",
      cv: "Baixar CV",
    },
    work: {
      label: "Projetos selecionados",
      view: "Ver caso completo",
    },
    about: {
      label: "Sobre mim",
      p1: "Cheguei ao UX/UI Design após mais de dez anos em ambientes corporativos — primeiro na IBM Brasil analisando contratos e processos complexos, depois na Foundever Espanha trabalhando diretamente com utilizadores reais na campanha da Iberia.",
      p2: "Essa trajetória ensinou-me algo que os bootcamps não ensinam: os problemas mais importantes não estão na interface. Estão na lacuna entre como um sistema funciona e como as pessoas que o utilizam o vivenciam.",
      p3: "Hoje desenho com essa convicção. Priorizo pesquisa, arquitetura de informação e validação real antes de tomar qualquer decisão visual.",
      faq: [
        { q: "Que tipo de designer é o Marcus?", a: "Um que pesquisa antes de desenhar. O meu foco é entender o problema real — não saltar para wireframes. Combino UX Research, arquitetura de informação e design de interface no mesmo processo." },
        { q: "O que o diferencia de outros perfis junior?", a: "Mais de dez anos em ambientes corporativos reais. Na IBM aprendi a analisar processos complexos. Na Foundever trabalhei diretamente com utilizadores finais. Essa base não se improvisa." },
        { q: "Que papel tem a IA no seu processo?", a: "É uma ferramenta em fases específicas — síntese de pesquisa, exploração visual, ideação. As decisões de design são sempre humanas e fundamentadas em contexto e utilizadores reais." },
        { q: "Está disponível?", a: "Sim. Procuro uma função como UX Designer, UX Researcher ou Product Designer em Espanha, Europa ou remoto. Disponibilidade imediata." },
      ],
    },
    skills: {
      label: "Capacidades",
      groups: [
        { title: "Investigação", items: ["UX Research", "Entrevistas", "Inquéritos", "Benchmark", "User Personas", "Customer Journey", "Usability Testing"] },
        { title: "Design de produto", items: ["Arquitetura de informação", "User Flows", "Wireframing", "Prototipagem", "Definição de MVP", "Design Systems"] },
        { title: "UI e interface", items: ["UI Design", "Interaction Design", "Responsive Design", "Mobile First", "Acessibilidade"] },
        { title: "Ferramentas", items: ["Figma · FigJam", "Framer", "Miro", "Notion", "Claude AI", "ChatGPT"] },
      ],
    },
    contact: {
      label: "Contato",
      title: "Vamos trabalhar juntos?",
      body: "Procuro oportunidades como UX Designer, UX Researcher ou Product Designer. Remoto, híbrido ou presencial em Espanha.",
      linkedin: "LinkedIn",
      cv: "Baixar CV",
    },
    footer: "Sevilha, Espanha · 2025",
    projects: {
      camperoteca: {
        tag: "UX/UI · End to End · Projeto pessoal",
        title: "Camperoteca",
        desc: "Plataforma mobile para simplificar o planeamento do processo de camperização. Do caos de informação a um guia progressivo centrado no utilizador.",
        year: "2024–25",
      },
      riptide: {
        tag: "UX/UI · IA · Sustentabilidade · Conceptual",
        title: "Riptide",
        desc: "Extensão de browser que torna visível o impacto hídrico da atividade digital quotidiana. Consciência sem culpa, presença sem intrusão.",
        year: "2025",
      },
    },
  },
} as const;

export type Translations = typeof t.es;
