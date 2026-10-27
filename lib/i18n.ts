export const LANGS = ["es", "en", "pt"] as const;
export type Lang = typeof LANGS[number];

export const t = {
  es: {
    nav: { work: "Proyectos", about: "Sobre mí", skills: "Áreas", contact: "Contacto" },
    hero: {
      available: "Disponible · Sevilla",
      title1: "Soy Marcus Reis.",
      title2: "Entiendo el problema. Diseño la experiencia.",
      body: "UX/UI Designer con experiencia en entornos corporativos y foco en investigación y arquitectura de información. Transformo problemas complejos en experiencias digitales claras, útiles y centradas en las personas.",
      cta: "Ver proyectos",
      cv: "Descargar CV",
    },
    work: { label: "Proyectos seleccionados", view: "Ver caso completo" },
    about: {
      label: "Sobre mí",
      p1: "Mi camino hacia el UX/UI Design comenzó mucho antes de diseñar interfaces.",
      p2: "Durante más de diez años trabajé en entornos corporativos, analizando contratos, procesos y sistemas, y acompañando a personas en la resolución de problemas reales. Esa experiencia me enseñó a mirar más allá de las tareas: a entender el contexto, identificar necesidades y buscar soluciones que tengan sentido para quienes las utilizan.",
      p3: "Hoy aplico esa perspectiva al diseño de productos digitales. Me interesa comprender el problema antes de diseñar la solución, conectar las necesidades de las personas con los objetivos del producto y convertir la complejidad en experiencias claras, útiles e intuitivas.",
      faq: [
        { q: "¿Qué tipo de diseñador eres?", a: "Uno que investiga antes de diseñar. Mi foco está en entender el problema real — no en saltar a wireframes. Combino UX Research, arquitectura de información y diseño de interfaz dentro del mismo proceso." },
        { q: "¿Qué te diferencia de otros perfiles junior?", a: "Mi trayectoria en entornos corporativos me ha dado experiencia analizando procesos complejos, comprendiendo distintas necesidades y resolviendo problemas en contextos reales. Hoy aplico esa perspectiva al UX/UI Design para diseñar experiencias que conecten las necesidades de las personas con soluciones claras y útiles." },
        { q: "¿Qué papel tiene la IA en tu proceso?", a: "Es una herramienta en fases específicas — síntesis de research, exploración visual, ideación. Las decisiones de diseño son siempre humanas y fundamentadas en contexto y usuarios reales." },
        { q: "¿Estás disponible?", a: "Sí. Busco un rol como UX Designer, UX Researcher o Product Designer en España, Europa o en remoto. Disponibilidad inmediata." },
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
        desc: "Plataforma mobile para acompañar el proceso de camperización paso a paso y conectar a la comunidad para intercambiar materiales, herramientas y conocimiento.",
        year: "2025–26",
        cover: "/assets/camperoteca-cover.jpg",
        coverAlt: "Tres pantallas de la app Camperoteca (Aprende, Mi Proyecto y Comunidad)",
      },
      riptide: {
        tag: "UX/UI · IA · Sostenibilidad · Conceptual",
        title: "Riptide",
        desc: "Extensión de navegador que hace visible el impacto hídrico de la actividad digital. Awareness sin culpa, presencia sin intrusión.",
        year: "2026",
        cover: "/assets/riptide-cover.jpg",
        coverAlt: "Cuatro pantallas de la extensión Riptide en secuencia: bienvenida, frecuencia de avisos, unidad de medida y resumen del día con 42 litros",
      },
    },
  },

  en: {
    nav: { work: "Work", about: "About", skills: "Areas", contact: "Contact" },
    hero: {
      available: "Available · Seville",
      title1: "I'm Marcus Reis.",
      title2: "I understand the problem. I design the experience.",
      body: "UX/UI Designer with experience in corporate environments, focused on research and information architecture. I turn complex problems into clear, useful and people-centred digital experiences.",
      cta: "See projects",
      cv: "Download CV",
    },
    work: { label: "Selected work", view: "View case study" },
    about: {
      label: "About",
      p1: "My path to UX/UI Design began long before I designed interfaces.",
      p2: "For over ten years I worked in corporate environments, analysing contracts, processes and systems, and supporting people in solving real problems. That experience taught me to look beyond tasks: to understand context, identify needs and find solutions that make sense for the people who use them.",
      p3: "Today I apply that perspective to digital product design. I'm interested in understanding the problem before designing the solution, connecting people's needs with product goals and turning complexity into clear, useful and intuitive experiences.",
      faq: [
        { q: "What kind of designer are you?", a: "One who researches before designing. My focus is on understanding the real problem — not jumping straight to wireframes. I combine UX Research, information architecture and interface design in one process." },
        { q: "What sets you apart from other junior profiles?", a: "My background in corporate environments has given me experience analysing complex processes, understanding different needs and solving problems in real contexts. Today I apply that perspective to UX/UI Design to create experiences that connect people's needs with clear and useful solutions." },
        { q: "What role does AI play in your process?", a: "It's a tool in specific phases — research synthesis, visual exploration, ideation. Design decisions are always human and grounded in real context and users." },
        { q: "Are you available?", a: "Yes. I'm looking for a role as UX Designer, UX Researcher or Product Designer in Spain, Europe or remote. Immediately available." },
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
        desc: "Mobile platform to guide the van conversion process step by step and connect the community to exchange materials, tools and knowledge.",
        year: "2025–26",
        cover: "/assets/camperoteca-cover.jpg",
        coverAlt: "Three Camperoteca app screens (Learn, My Project and Community)",
      },
      riptide: {
        tag: "UX/UI · AI · Sustainability · Conceptual",
        title: "Riptide",
        desc: "A browser extension that makes the hidden water footprint of digital activity visible. Awareness without guilt, presence without intrusion.",
        year: "2026",
        cover: "/assets/riptide-cover.jpg",
        coverAlt: "Four Riptide extension screens in sequence: welcome, notification frequency, unit of measure and daily summary showing 42 litres",
      },
    },
  },

  pt: {
    nav: { work: "Projetos", about: "Sobre mim", skills: "Áreas", contact: "Contato" },
    hero: {
      available: "Disponível · Sevilha",
      title1: "Sou Marcus Reis.",
      title2: "Entendo o problema. Desenho a experiência.",
      body: "UX/UI Designer com experiência em ambientes corporativos e foco em pesquisa e arquitetura da informação. Transformo problemas complexos em experiências digitais claras, úteis e centradas nas pessoas.",
      cta: "Ver projetos",
      cv: "Baixar CV",
    },
    work: { label: "Projetos selecionados", view: "Ver caso completo" },
    about: {
      label: "Sobre mim",
      p1: "Meu caminho até o UX/UI Design começou muito antes de criar interfaces.",
      p2: "Durante mais de dez anos trabalhei em ambientes corporativos, analisando contratos, processos e sistemas, e acompanhando pessoas na resolução de problemas reais. Essa experiência me ensinou a olhar além das tarefas: entender o contexto, identificar necessidades e buscar soluções que façam sentido para quem as utiliza.",
      p3: "Hoje aplico essa perspectiva ao design de produtos digitais. Tenho interesse em compreender o problema antes de projetar a solução, conectar as necessidades das pessoas aos objetivos do produto e transformar a complexidade em experiências claras, úteis e intuitivas.",
      faq: [
        { q: "Que tipo de designer você é?", a: "Um designer que pesquisa antes de projetar. Meu foco é entender o problema real — não pular direto para wireframes. Combino UX Research, arquitetura da informação e design de interface no mesmo processo." },
        { q: "O que te diferencia de outros perfis júnior?", a: "Minha trajetória em ambientes corporativos me deu experiência analisando processos complexos, compreendendo diferentes necessidades e resolvendo problemas em contextos reais. Hoje aplico essa perspectiva ao UX/UI Design para criar experiências que conectem as necessidades das pessoas a soluções claras e úteis." },
        { q: "Qual é o papel da IA no seu processo?", a: "É uma ferramenta em fases específicas — síntese de pesquisa, exploração visual, ideação. As decisões de design são sempre humanas e fundamentadas em contexto e usuários reais." },
        { q: "Você está disponível?", a: "Sim. Busco uma vaga como UX Designer, UX Researcher ou Product Designer na Espanha, na Europa ou em modelo remoto. Disponibilidade imediata." },
      ],
    },
    areas: {
      label: "Áreas de trabalho",
      items: ["Research", "Information Architecture", "Interaction Design", "UI Design", "Prototyping", "AI-assisted Design"],
    },
    contact: {
      label: "Contato",
      title: "Vamos trabalhar juntos?",
      body: "Busco oportunidades como UX Designer, UX Researcher ou Product Designer. Remoto, híbrido ou presencial na Espanha.",
      linkedin: "LinkedIn",
      cv: "Baixar CV",
    },
    footer: "Sevilha, Espanha · 2026",
    projects: {
      camperoteca: {
        tag: "UX/UI · End to End · Projeto pessoal",
        title: "Camperoteca",
        desc: "Plataforma mobile para acompanhar o processo de camperização passo a passo e conectar a comunidade para trocar materiais, ferramentas e conhecimento.",
        year: "2025–26",
        cover: "/assets/camperoteca-cover.jpg",
        coverAlt: "Três telas do app Camperoteca (Aprende, Meu Projeto e Comunidade)",
      },
      riptide: {
        tag: "UX/UI · IA · Sustentabilidade · Conceitual",
        title: "Riptide",
        desc: "Extensão de navegador que torna visível o impacto hídrico da atividade digital cotidiana. Consciência sem culpa, presença sem intrusão.",
        year: "2026",
        cover: "/assets/riptide-cover.jpg",
        coverAlt: "Quatro telas da extensão Riptide em sequência: boas-vindas, frequência de avisos, unidade de medida e resumo do dia com 42 litros",
      },
    },
  },
} as const;

export type Translations = typeof t.es;
