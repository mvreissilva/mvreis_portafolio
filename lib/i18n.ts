export const LANGS = ["es", "en", "pt"] as const;
export type Lang = typeof LANGS[number];

export const t = {
  es: {
    nav: { work: "Proyectos", about: "Sobre mí", skills: "Áreas", contact: "Contacto" },
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
      p1: "Mi camino hacia el UX/UI Design comenzó mucho antes de diseñar interfaces.",
      p2: "Durante más de diez años trabajé en entornos corporativos, analizando contratos, procesos y sistemas, y acompañando a personas en la resolución de problemas reales. Esa experiencia me enseñó a mirar más allá de las tareas: a entender el contexto, identificar necesidades y buscar soluciones que tengan sentido para quienes las utilizan.",
      p3: "Hoy aplico esa perspectiva al diseño de productos digitales. Me interesa comprender el problema antes de diseñar la solución, conectar las necesidades de las personas con los objetivos del producto y convertir la complejidad en experiencias claras, útiles e intuitivas.",
      faq: [
        { q: "¿Qué tipo de diseñador es Marcus?", a: "Uno que investiga antes de diseñar. Mi foco está en entender el problema real — no en saltar a wireframes. Combino UX Research, arquitectura de información y diseño de interfaz dentro del mismo proceso." },
        { q: "¿Qué lo diferencia de otros perfiles junior?", a: "Más de diez años en entornos corporativos reales. En IBM aprendí a analizar procesos complejos. En Foundever trabajé directamente con usuarios finales. Esa base no se improvisa." },
        { q: "¿Qué papel tiene la IA en su proceso?", a: "Es una herramienta en fases específicas — síntesis de research, exploración visual, ideación. Las decisiones de diseño son siempre humanas y fundamentadas en contexto y usuarios reales." },
        { q: "¿Está disponible?", a: "Sí. Busco un rol como UX Designer, UX Researcher o Product Designer en España, Europa o en remoto. Disponibilidad inmediata." },
      ],
    },
    areas: {
      label: "Áreas de trabajo",
      items: ["Research", "Information Architecture", "Interaction Design", "UI Design", "Prototyping", "AI-assisted Design"],
    },
    contact: {
      label: "Contacto",
      title: "¿Trabajamos juntos?",
      body: "Busco oportunidades como UX Designer, UX Researcher o Product Designer. Remoto, híbrido o presencial en España.",
      linkedin: "LinkedIn",
      cv: "Descargar CV",
    },
    footer: "Sevilla, España · 2026",
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
    nav: { work: "Work", about: "About", skills: "Areas", contact: "Contact" },
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
      p1: "My path to UX/UI Design began long before I designed interfaces.",
      p2: "For over ten years I worked in corporate environments, analysing contracts, processes and systems, and supporting people in solving real problems. That experience taught me to look beyond tasks: to understand context, identify needs and find solutions that make sense for the people who use them.",
      p3: "Today I apply that perspective to digital product design. I'm interested in understanding the problem before designing the solution, connecting people's needs with product goals and turning complexity into clear, useful and intuitive experiences.",
      faq: [
        { q: "What kind of designer is Marcus?", a: "One who researches before designing. My focus is on understanding the real problem — not jumping straight to wireframes. I combine UX Research, information architecture and interface design in one process." },
        { q: "What sets him apart from other junior profiles?", a: "Over ten years in real corporate environments. At IBM I learned to analyse complex processes. At Foundever I worked directly with end users. That foundation can't be improvised." },
        { q: "What role does AI play in his process?", a: "It's a tool in specific phases — research synthesis, visual exploration, ideation. Design decisions are always human and grounded in real context and users." },
        { q: "Is he available?", a: "Yes. I'm looking for a role as UX Designer, UX Researcher or Product Designer in Spain, Europe or remote. Immediately available." },
      ],
    },
    areas: {
      label: "Work areas",
      items: ["Research", "Information Architecture", "Interaction Design", "UI Design", "Prototyping", "AI-assisted Design"],
    },
    contact: {
      label: "Contact",
      title: "Let's work together",
      body: "Looking for opportunities as UX Designer, UX Researcher or Product Designer. Remote, hybrid or on-site in Spain.",
      linkedin: "LinkedIn",
      cv: "Download CV",
    },
    footer: "Seville, Spain · 2026",
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
    nav: { work: "Projetos", about: "Sobre mim", skills: "Áreas", contact: "Contato" },
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
      p1: "O meu caminho para o UX/UI Design começou muito antes de desenhar interfaces.",
      p2: "Durante mais de dez anos trabalhei em ambientes corporativos, analisando contratos, processos e sistemas, e acompanhando pessoas na resolução de problemas reais. Essa experiência ensinou-me a olhar para além das tarefas: a entender o contexto, identificar necessidades e procurar soluções que façam sentido para quem as utiliza.",
      p3: "Hoje aplico essa perspetiva ao design de produtos digitais. Interessa-me compreender o problema antes de desenhar a solução, ligar as necessidades das pessoas aos objetivos do produto e transformar a complexidade em experiências claras, úteis e intuitivas.",
      faq: [
        { q: "Que tipo de designer é o Marcus?", a: "Um que pesquisa antes de desenhar. O meu foco é entender o problema real — não saltar para wireframes. Combino UX Research, arquitetura de informação e design de interface no mesmo processo." },
        { q: "O que o diferencia de outros perfis junior?", a: "Mais de dez anos em ambientes corporativos reais. Na IBM aprendi a analisar processos complexos. Na Foundever trabalhei diretamente com utilizadores finais. Essa base não se improvisa." },
        { q: "Que papel tem a IA no seu processo?", a: "É uma ferramenta em fases específicas — síntese de pesquisa, exploração visual, ideação. As decisões de design são sempre humanas e fundamentadas em contexto e utilizadores reais." },
        { q: "Está disponível?", a: "Sim. Procuro uma função como UX Designer, UX Researcher ou Product Designer em Espanha, Europa ou remoto. Disponibilidade imediata." },
      ],
    },
    areas: {
      label: "Áreas de trabalho",
      items: ["Research", "Information Architecture", "Interaction Design", "UI Design", "Prototyping", "AI-assisted Design"],
    },
    contact: {
      label: "Contato",
      title: "Vamos trabalhar juntos?",
      body: "Procuro oportunidades como UX Designer, UX Researcher ou Product Designer. Remoto, híbrido ou presencial em Espanha.",
      linkedin: "LinkedIn",
      cv: "Baixar CV",
    },
    footer: "Sevilha, Espanha · 2026",
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
