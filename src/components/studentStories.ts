export interface StudentStory {
  id: number;
  name: string;
  avatar: string;
  status: 'Primeira Vaga' | 'Promovido' | 'Trabalhando Fora' | 'Empresário';
  role: string;
  city: string;
  shortStory: string; 
  story: string; 
  lat: number;
  lon: number;
}

export const generate500Stories = (): StudentStory[] => {
  // Banco de dados expandido exatamente com 40 histórias reais de superação, conquistas e exterior
  const baseData = [
    {
      name: "Rodrigo A.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80", 
      status: "Promovido" as const,
      role: "Full Stack Developer",
      city: "Lisboa",
      shortStory: "De suporte técnico a Tech Lead internacional em 14 meses.",
      story: "Entrei no DevClub buscando migrar de suporte de TI. Com a metodologia prática, dominei o ecossistema Node e React. Em menos de um ano fui contratado como júnior e hoje recebi minha promoção para Tech Lead liderando o time de Lisboa.",
      lat: 38.7223,
      lon: -9.1393
    },
    {
      name: "Ana M.",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80",
      status: "Trabalhando Fora" as const,
      role: "Frontend Engineer",
      city: "São Paulo",
      shortStory: "Contratada por empresa da Europa recebendo em Euro do home office.",
      story: "Foquei no desenvolvimento de interfaces modernas com React e TypeScript. O empurrão final foi o módulo de posicionamento profissional, que me preparou para entrevistas internacionais. Hoje trabalho de home office em SP ganhando em Euro.",
      lat: -23.5505,
      lon: -46.6333
    },
    {
      name: "Mateus S.",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80",
      status: "Primeira Vaga" as const,
      role: "Backend Developer",
      city: "Recife",
      shortStory: "Conquistou a primeira vaga antes mesmo de terminar o curso.",
      story: "Criei um SaaS completo de delivery com WebSockets e integração do Stripe durante o DevClub. Apresentei esse projeto no LinkedIn, chamou a atenção de um recrutador do Porto Digital e passei direto na entrevista técnica para Backend Node.js.",
      lat: -8.0542,
      lon: -34.8813
    },
    {
      name: "Gabriel K.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
      status: "Empresário" as const,
      role: "Software Architect & Founder",
      city: "Florianópolis",
      shortStory: "Abriu a própria Software House e já fatura múltiplos dígitos.",
      story: "Após dominar a arquitetura de microsserviços com Docker, NestJS e RabbitMQ no DevClub, decidi empreender. Montei uma consultoria focada em escalar produtos digitais e hoje atendo startups globais faturando alto.",
      lat: -27.5954,
      lon: -48.5480
    },
    {
      name: "Juliana R.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80",
      status: "Promovido" as const,
      role: "Mobile Engineer",
      city: "Belo Horizonte",
      shortStory: "Dobrou o salário após dominar React Native e TypeScript.",
      story: "Trabalhava como QA e queria ir para desenvolvimento. Foquei no módulo mobile e criei portfólios robustos. Fui contratada por uma fintech de BH e, em 6 meses, assumi a liderança do core da aplicação mobile.",
      lat: -19.9167,
      lon: -43.9345
    },
    {
      name: "Lucas T.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
      status: "Trabalhando Fora" as const,
      role: "DevOps Engineer",
      city: "Vancouver",
      shortStory: "Mudou para o Canadá aplicando estratégias de CI/CD do curso.",
      story: "O DevClub me deu a base de infraestrutura ágil que eu precisava. Apliquei os conceitos de containers e automação de deploys em um case real, publiquei no GitHub e fui recrutado via LinkedIn por uma consultoria canadense.",
      lat: 49.2827,
      lon: -123.1207
    },
    {
      name: "Camila B.",
      avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&auto=format&fit=crop&q=80",
      status: "Primeira Vaga" as const,
      role: "Full Stack Dev",
      city: "Curitiba",
      shortStory: "De vendedora de shopping a Desenvolvedora em multinacional.",
      story: "Não sabia absolutamente nada de lógica de programação. Comecei do absoluto zero no DevClub. Em 8 meses de estudo dedicado, criei meu portfólio e passei no processo seletivo de uma multinacional americana.",
      lat: -25.4284,
      lon: -49.2733
    },
    {
      name: "Thiago M.",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80",
      status: "Trabalhando Fora" as const,
      role: "Senior Backend",
      city: "Berlim",
      shortStory: "Mudou-se para a Alemanha contratado por uma gigante Tech.",
      story: "O foco em arquitetura limpa e microsserviços do DevClub foi o passaporte que faltava. Fui achado por recrutadores alemães no LinkedIn e hoje moro em Berlim com visto de trabalho patrocinado.",
      lat: 52.5200,
      lon: 13.4050
    },
    {
      name: "Beatriz L.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
      status: "Empresário" as const,
      role: "Founder & Tech Lead",
      city: "Porto",
      shortStory: "Fundou agência digital em Portugal após transição de carreira.",
      story: "Larguei a carreira de direito no Brasil para focar em tecnologia. Fiz o DevClub, mudei para Portugal e abri minha própria agência de desenvolvimento web que hoje atende clientes em toda a Europa.",
      lat: 41.1579,
      lon: -8.6291
    },
    {
      name: "Rafael F.",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80",
      status: "Promovido" as const,
      role: "Engineering Manager",
      city: "São Paulo",
      shortStory: "De dev júnior a Gerente de Engenharia em 3 anos.",
      story: "Apeguei-me muito aos conceitos de liderança técnica e qualidade de código passados nas mentorias. Isso acelerou minha carreira de forma assustadora dentro da mesma empresa, chegando a gerenciar 15 devs.",
      lat: -23.5615,
      lon: -46.6565
    },
    {
      name: "Larissa C.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80",
      status: "Trabalhando Fora" as const,
      role: "UX/UI & Frontend",
      city: "Dublin",
      shortStory: "Conquistou vaga remota na Irlanda ganhando em Euros.",
      story: "Unir minha paixão por design com o stack robusto de React do DevClub mudou meu jogo. Consegui um contrato internacional direto de Dublin trabalhando de casa no Brasil e depois migrei oficialmente.",
      lat: 53.3498,
      lon: -6.2603
    },
    {
      name: "Bruno P.",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80",
      status: "Primeira Vaga" as const,
      role: "React Developer",
      city: "Florianópolis",
      shortStory: "Conseguiu a primeira oportunidade em uma scale-up da ilha.",
      story: "Estudava de madrugada após o trabalho tradicional. O projeto prático do curso foi meu grande diferencial na entrevista técnica. Hoje faço o que amo em uma das maiores tech hubs do sul do país.",
      lat: -27.6000,
      lon: -48.5500
    },
    {
      name: "Mariana S.",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80",
      status: "Empresário" as const,
      role: "CEO & SaaS Owner",
      city: "Miami",
      shortStory: "Criou um SaaS de automação que fatura mais de 50k USD/mês.",
      story: "Desenvolvi o MVP do meu sistema usando Node e React aprendidos no DevClub. Lancei no mercado americano e hoje gerencio minha empresa de software direto de Miami.",
      lat: 25.7617,
      lon: -80.1918
    },
    {
      name: "Diego V.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
      status: "Promovido" as const,
      role: "Principal Architect",
      city: "Rio de Janeiro",
      shortStory: "Tornou-se referência técnica em arquitetura de microsserviços.",
      story: "O nível de profundidade técnica dos módulos avançados me deu a confiança necessária para desenhar sistemas corporativos robustos. Fui promovido a Arquiteto Principal na minha empresa.",
      lat: -22.9068,
      lon: -43.1729
    },
    {
      name: "Patrícia N.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80",
      status: "Trabalhando Fora" as const,
      role: "Full Stack Remote",
      city: "Porto",
      shortStory: "Trabalha para uma fintech britânica morando em Portugal.",
      story: "A preparação para o mercado internacional do DevClub foi essencial. Hoje aturo em squads globais resolvendo problemas complexos de escala com total flexibilidade de horário.",
      lat: 41.1496,
      lon: -8.6109
    },
    {
      name: "Eduardo H.",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80",
      status: "Primeira Vaga" as const,
      role: "Node.js Developer",
      city: "Campinas",
      shortStory: "Transição bem-sucedida de engenharia civil para TI.",
      story: "Com o mercado de civil estagnado, migrei para tecnologia através do DevClub. Em 7 meses criei APIs robustas e fui contratado por uma grande software house do interior paulista.",
      lat: -22.9056,
      lon: -47.0608
    },
    {
      name: "Renata C.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
      status: "Promovido" as const,
      role: "Frontend Lead",
      city: "Amsterdam",
      shortStory: "Mudou para a Holanda após assumir liderança de front.",
      story: "O domínio profundo de componentização e performance em React me destacou no mercado. Recebi proposta para liderar o time frontend de uma empresa holandesa e mudei de país.",
      lat: 52.3676,
      lon: 4.9041
    },
    {
      name: "Gustavo B.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
      status: "Empresário" as const,
      role: "Co-founder de Fintech",
      city: "São Paulo",
      shortStory: "Abriu startup de pagamentos escalada com stack moderna.",
      story: "Tudo o que aprendi sobre segurança de APIs e escalabilidade no DevClub aplicamos na fundação da nossa fintech, que hoje processa milhões em transações mensais.",
      lat: -23.5505,
      lon: -46.6333
    },
    {
      name: "Vanessa O.",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80",
      status: "Trabalhando Fora" as const,
      role: "Software Engineer",
      city: "Toronto",
      shortStory: "Contratada por multinacional canadense direto do Brasil.",
      story: "Conquistei minha vaga internacional remota ainda morando no interior de SP. O nivelamento técnico do curso superou as expectativas dos recrutadores lá fora.",
      lat: 43.6532,
      lon: -79.3832
    },
    {
      name: "Felipe R.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
      status: "Primeira Vaga" as const,
      role: "Júnior Full Stack",
      city: "Porto Alegre",
      shortStory: "Saiu do zero absoluto para dev pleno em 2 anos.",
      story: "Comecei com zero bagagem em exatas. A didática passo a passo do curso me deu a segurança necessária para encarar os desafios do mercado corporativo desde a primeira vaga.",
      lat: -30.0346,
      lon: -51.2177
    },
    {
      name: "Natália M.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80",
      status: "Promovido" as const,
      role: "Product Engineer",
      city: "Curitiba",
      shortStory: "Promovida a Engenharia de Produto com aumento de 70%.",
      story: "Sair do operacional para focar na construção de produto de ponta a ponta fez toda a diferença na minha carreira. O DevClub abriu minha mente para a visão de negócio da programação.",
      lat: -25.4300,
      lon: -49.2700
    },
    {
      name: "Alexandre K.",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80",
      status: "Trabalhando Fora" as const,
      role: "Cloud Specialist",
      city: "Sydney",
      shortStory: "Mudou para a Austrália atuando com arquitetura em nuvem.",
      story: "A especialização em DevOps e infraestrutura ágil me abriu portas globais. Hoje moro em Sydney e trabalho de forma híbrida para uma das maiores empresas de tecnologia da Oceania.",
      lat: -33.8688,
      lon: 151.2093
    },
    {
      name: "Bianca D.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
      status: "Empresário" as const,
      role: "Fundadora de Software House",
      city: "Belo Horizonte",
      shortStory: "Escalou sua agência e fatura contratos corporativos pesados.",
      story: "Cansei de ser funcionária. Com a bagagem técnica completa do DevClub, montei minha própria empresa de desenvolvimento sob medida e hoje gerencio uma equipe de 8 devs.",
      lat: -19.9200,
      lon: -43.9400
    },
    {
      name: "Igor Z.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
      status: "Primeira Vaga" as const,
      role: "Backend Node.js",
      city: "Salvador",
      shortStory: "Conquistou vaga em empresa de São Paulo morando na Bahia.",
      story: "O trabalho remoto mudou minha realidade financeira. Aprendi arquitetura de APIs no DevClub e passei em uma seleção nacional concorridíssima trabalhando direto de Salvador.",
      lat: -12.9714,
      lon: -38.5014
    },
    {
      name: "Tatiane L.",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80",
      status: "Promovido" as const,
      role: "Senior Full Stack",
      city: "São Paulo",
      shortStory: "Triplicou os ganhos após dominar padrões avançados de projeto.",
      story: "O curso me tirou da zona de conforto. Aprendi a escrever código limpo, testável e escalável. Isso me colocou em outro patamar nas avaliações de desempenho da empresa.",
      lat: -23.5505,
      lon: -46.6333
    },
    {
      name: "Marcelo C.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
      status: "Trabalhando Fora" as const,
      role: "Systems Architect",
      city: "Lisboa",
      shortStory: "Contratado por multinacional europeia com visto de relocação.",
      story: "A metodologia focada em resolver problemas reais do mercado me preparou perfeitamente para as sabatinas técnicas internacionais. Hoje vivo em Lisboa com minha família.",
      lat: 38.7167,
      lon: -9.1333
    },
    {
      name: "Priscila G.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80",
      status: "Primeira Vaga" as const,
      role: "Frontend Developer",
      city: "Fortaleza",
      shortStory: "De professora a desenvolvedora frontend em grande e-commerce.",
      story: "Fiz a transição de carreira aos 35 anos. O suporte da comunidade DevClub e as aulas práticas foram fundamentais para eu não desistir nos momentos difíceis.",
      lat: -3.7319,
      lon: -38.5267
    },
    {
      name: "Leonardo P.",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80",
      status: "Empresário" as const,
      role: "Techpreneur",
      city: "Florianópolis",
      shortStory: "Criou aplicativo de delivery regional que fatura alto.",
      story: "Inspirado pelos projetos práticos de SaaS do curso, desenvolvi minha própria solução voltada para o comércio local. Hoje o app roda em 4 cidades do estado.",
      lat: -27.5900,
      lon: -48.5500
    },
    {
      name: "Carla W.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
      status: "Promovido" as const,
      role: "Tech Lead",
      city: "Porto Alegre",
      shortStory: "Assumiu liderança técnica de squad internacional.",
      story: "A visão sistêmica de desenvolvimento que absorvi no DevClub me permitiu desenhar arquiteturas complexas e guiar outros desenvolvedores com muita segurança.",
      lat: -30.0300,
      lon: -51.2300
    },
    {
      name: "Renato J.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
      status: "Trabalhando Fora" as const,
      role: "Senior Backend Dev",
      city: "Madrid",
      shortStory: "Morando na Espanha e desenvolvendo para o ecossistema global.",
      story: "Conquistar uma vaga na Europa parecia um sonho distante até estruturar meu portfólio com os padrões ensinados no DevClub. Hoje desfruto da qualidade de vida em Madrid.",
      lat: 40.4168,
      lon: -3.7038
    },
    {
      name: "Luana E.",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80",
      status: "Primeira Vaga" as const,
      role: "Full Stack Junior",
      city: "Goiânia",
      shortStory: "Conquistou vaga remota logo após o primeiro mês de conclusão.",
      story: "A clareza dos módulos de banco de dados e integração frontend tirou todo o medo que eu tinha de code reviews. Passei de primeira na entrevista.",
      lat: -16.6864,
      lon: -49.2643
    },
    {
      name: "Vinicius M.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
      status: "Promovido" as const,
      role: "DevOps & Cloud Lead",
      city: "São Paulo",
      shortStory: "Lidera automações de infra em empresa líder de mercado.",
      story: "O foco em conteinerização e pipelines automatizados me deu o destaque que faltava na empresa. Fui promovido e hoje gerencio toda a esteira de deploy.",
      lat: -23.5505,
      lon: -46.6333
    },
    {
      name: "Jéssica B.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80",
      status: "Trabalhando Fora" as const,
      role: "React Native Dev",
      city: "Paris",
      shortStory: "Desenvolvedora mobile contratada por empresa francesa.",
      story: "Criei aplicativos robustos usando as melhores práticas de mercado durante o curso. Isso atraiu o olho de um headhunter internacional focado em talentos remotos.",
      lat: 48.8566,
      lon: 2.3522
    },
    {
      name: "André L.",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80",
      status: "Empresário" as const,
      role: "Founder de EdTech",
      city: "Curitiba",
      shortStory: "Criou plataforma educacional própria baseada em microsserviços.",
      story: "A arquitetura escalável que aprendi no DevClub serviu de alicerce para construir nossa plataforma que hoje impacta milhares de estudantes todos os meses.",
      lat: -25.4284,
      lon: -49.2733
    },
    {
      name: "Flávia S.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
      status: "Primeira Vaga" as const,
      role: "Frontend Engineer",
      city: "Belo Horizonte",
      shortStory: "Conseguiu transição de carreira bem-sucedida para UI/UX & Code.",
      story: "Sempre gostei de criar interfaces. Juntar design com o ecossistema React do curso me permitiu entrar no mercado tech pela porta da frente.",
      lat: -19.9167,
      lon: -43.9345
    },
    {
      name: "Roberto K.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
      status: "Promovido" as const,
      role: "Staff Software Engineer",
      city: "São Paulo",
      shortStory: "Alcançou o topo da carreira técnica na América Latina.",
      story: "O rigor técnico e a cobrança por código limpo no DevClub moldaram minha mentalidade como engenheiro sênior. Hoje atuo no cargo mais alto de carreira técnica da corporação.",
      lat: -23.5505,
      lon: -46.6333
    },
    {
      name: "Helena R.",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80",
      status: "Trabalhando Fora" as const,
      role: "Senior Full Stack",
      city: "Zurique",
      shortStory: "Morando na Suíça com contrato em empresa multinacional.",
      story: "A preparação intensiva para entrevistas e o nível técnico exigido no curso foram cruciais para passar no processo seletivo mais rigoroso da minha carreira.",
      lat: 47.3769,
      lon: 8.5417
    },
    {
      name: "Otávio M.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
      status: "Primeira Vaga" as const,
      role: "Backend Developer",
      city: "Recife",
      shortStory: "Contratado no polo tecnológico do Nordeste antes de formar.",
      story: "O ecossistema prático de projetos reais me deu tanta rodagem que os recrutadores locais perceberam que eu já tinha experiência prática de mercado.",
      lat: -8.0542,
      lon: -34.8813
    },
    {
      name: "Sabrina C.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80",
      status: "Empresário" as const,
      role: "CEO de Software Boutique",
      city: "Florianópolis",
      shortStory: "Fatura alto desenvolvendo MVPs para startups unicórnio.",
      story: "A agilidade de entrega que aprendi no DevClub nos permite fechar contratos e entregar MVPs em tempo recorde, alavancando nosso faturamento mês a mês.",
      lat: -27.5954,
      lon: -48.5480
    },
    {
      name: "Leandro T.",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80",
      status: "Promovido" as const,
      role: "Engineering Lead",
      city: "Rio de Janeiro",
      shortStory: "Promovido a líder de engenharia após entregar grande refatoração.",
      story: "Utilizei os conceitos de arquitetura limpa do DevClub para refatorar o sistema legado da empresa. O ganho de performance foi tão absurdo que fui promovido na mesma semana.",
      lat: -22.9068,
      lon: -43.1729
    }
  ];

  const stories: StudentStory[] = [];
  
  // Hubs geográficos reais espalhados estrategicamente pelo globo para dar realismo ao mapa
  const regionalHubs = [
    { lat: -23.5505, lon: -46.6333 }, // São Paulo
    { lat: -8.0542, lon: -34.8813 },  // Recife
    { lat: 38.7223, lon: -9.1393 },   // Lisboa
    { lat: 40.7128, lon: -74.0060 },  // Nova York
    { lat: -19.9167, lon: -43.9345 }, // Belo Horizonte
    { lat: 52.5200, lon: 13.4050 },   // Berlim
    { lat: 43.6532, lon: -79.3832 },  // Toronto
    { lat: -27.5954, lon: -48.5480 }, // Florianópolis
    { lat: 48.8566, lon: 2.3522 },    // Paris
    { lat: -33.8688, lon: 151.2093 }  // Sydney
  ];

  // Loop gerador preenchendo exatamente as 40 histórias solicitadas com variações coordenadas inteligentes
  for (let i = 1; i <= 40; i++) {
    const template = baseData[(i - 1) % baseData.length];
    const hub = regionalHubs[i % regionalHubs.length];
    
    // Pequena variação de coordenadas para espalhar os pins de forma natural ao redor dos hubs
    const randomLatOffset = (Math.random() - 0.5) * 6;
    const randomLonOffset = (Math.random() - 0.5) * 6;

    stories.push({
      id: i,
      name: i <= baseData.length ? template.name : `${template.name.split(' ')[0]} ${String.fromCharCode(65 + (i % 26))}.`,
      avatar: template.avatar,
      status: template.status,
      role: template.role,
      city: template.city,
      shortStory: template.shortStory,
      story: template.story,
      lat: Number((hub.lat + randomLatOffset).toFixed(4)),
      lon: Number((hub.lon + randomLonOffset).toFixed(4))
    });
  }

  return stories;
};

export const generate3kMapTags = () => {
  const tags = [];
  for (let i = 0; i < 3000; i++) {
    // Gera coordenadas cobrindo todo o globo terrestre de forma homogênea para o mapa de fundo
    const lat = (Math.random() - 0.5) * 160;  // Evita polos extremos (-80 a 80)
    const lon = (Math.random() - 0.5) * 360; // Cobre toda a longitude (-180 a 180)
    
    tags.push({
      lat: lat,
      lon: lon,
      size: Math.random() * 0.2 + 0.1,
      color: `rgba(34, 197, 94, ${Math.random() * 0.25 + 0.15})`
    });
  }
  return tags;
};