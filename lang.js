/* lang.js — robust language toggle + fade-in + show-more
   - Persistência via localStorage (key: site_lang_v1)
   - Attach handlers safely to .lang-toggle buttons (works across pages)
*/

(function() {
  const LANG_KEY = 'site_lang_v1';
  let lang = localStorage.getItem(LANG_KEY) || 'pt';

  const translations = {
    pt: {
      headerTitle: 'Alan Silva',
      headerSub: 'Desenvolvedor de Jogos e Engenheiro de Software',
      showMore: 'Mostrar Mais',
      showLess: 'Mostrar Menos',
      footer: '© 2025 Alan Silva — Todos os direitos reservados.',
      back: '← Voltar',
      linkedinTooltip: 'Ver perfil',
      githubTooltip: 'Ver GitHub',
      // Index
      projectsHeading: 'Projetos',
      projectsPreviewHint: 'Passe o mouse sobre um projeto para ver o preview.',
      // About section
      aboutIntroTitle: 'Introdução',
      aboutIntroP1: 'Graduado em Game Design pela Universidade Anhembi Morumbi (São Paulo, Brasil), sou apaixonado por desenvolvimento de jogos desde 2014. Atuei em um amplo espectro de projetos — de mobile a PC/console, de títulos casuais a produções de maior escala.',
      aboutIntroP2: 'Meu principal stack é Unity Engine com C#, onde concentro a maior parte da minha experiência profissional. Também tenho sólida experiência com JavaScript, Lua e C++, com uma afinidade especial por C++. Profissionalmente, minhas contribuições foram predominantemente em Unity e C#.',
      aboutIntroP3: 'Trabalho com jogos desde meados de 2019, somando mais de 6 anos de experiência prática entregando gameplay, sistemas, ferramentas e experiências de usuário bem polidas.',
      aboutExperienceTitle: 'Experiência',
      skillsTitle: 'Habilidades',
      certCaption: 'Profissional Certificado Unity: Programador (2023–2026)',
      // Platform section titles
      pcConsoleTitle: 'PC/Console',
      webglTitle: 'Jogos WebGL',
      mobileTitle: 'Mobile',
      // Contact section
      contactHeading: 'Entre em contato',
      contactSub: 'Estou disponível para oportunidades e parcerias. Vamos conversar!',
      contactEmailLabel: 'Enviar e-mail',
      contactLinkedInLabel: 'LinkedIn',
      // Generic sections
      appIcon: 'Ícone do App',
      appScreenshots: 'Screenshots do App',
      gameScreenshots: 'Screenshots do Jogo',
      promotionalImage: 'Imagem Promocional',
      gameTrailer: 'Trailer do Jogo',
      gameplayClips: 'Clipes de Gameplay',
      // Generic project page sections
      projectDescription: 'Descrição do Projeto',
      myContribution: 'Minha participação',
      downloadLink: 'Link de Download',
      // Book Of Wolves subtitle (full description)
      bookWolvesSub: 'Na pele de Andrei Ulric, um amaldiçoado caçador de vampiros, cace e elimine o legado de Nosferatu, que aterroriza a pequena cidade de Wisborg. Fazendo o uso de diversas ferramentas, assim como os traços da maldição do lobisomem, o jogador deve atravessar o vilarejo de Wisborg, agora consumido pela praga e loucura trazido pelo vampiro que o domina, Ellen Hutter. Com a ajuda do professor Bulwer e as ferramentas e dicas dadas por ele, o jogador deve percorrer o vilarejo podendo usar de brutalidade e criatividade para enfrentar o que encontrar no seu caminho, podendo também se valer de sua engenhosidade para fazer o uso de soluções não-violentas que vão desde guiar inimigos e distraí-los até o uso de rotas alternativas descobertas explorando o mundo. Caso o combate seja desejado ou inevitável, Andrei não hesita em usar seu arsenal.',
      // Generic project page sections
      projectDescription: 'Descrição do Projeto',
      myContribution: 'Minha participação',
      downloadLink: 'Link de Download',
      // Book Of Wolves description
      bookWolvesP1: 'Na pele de Andrei Ulric, um amaldiçoado caçador de vampiros, cace e elimine o legado de Nosferatu, que aterroriza a pequena cidade de Wisborg.',
      bookWolvesP2: 'Fazendo o uso de diversas ferramentas, assim como os traços da maldição do lobisomem, o jogador deve atravessar o vilarejo de Wisborg, agora consumido pela praga e loucura trazido pelo vampiro que o domina, Ellen Hutter.',
      bookWolvesP3: 'Com a ajuda do professor Bulwer e as ferramentas e dicas dadas por ele, o jogador deve percorrer o vilarejo podendo usar de brutalidade e criatividade para enfrentar o que encontrar no seu caminho, podendo também se valer de sua engenhosidade para fazer o uso de soluções não-violentas que vão desde guiar inimigos e distraí-los até o uso de rotas alternativas descobertas explorando o mundo.',
      bookWolvesP4: 'Caso o combate seja desejado ou inevitável, Andrei não hesita em usar seu arsenal.',
      bookWolvesContribution: 'Jogo feito durante o 6º semestre do curso de Graduação em Game Design pela Faculdade Anhembi Morumbi, em aproximadamente 3 meses de desenvolvimento. Utilizando a Unity Engine e C#, fui o único programador do projeto, responsável por todos os sistemas e mecânicas do jogo, assim como integração de SDKs e plugins de terceiros.',
      // Unbinary project translations
      unbinaryTitle: 'Unbinary - Ludact',
      unbinarySub: 'UNBINARY é um jogo em realidade virtual de aventura e quebra-cabeça, totalmente pintado à mão. Conheça Webby, uma super IA feita a partir de dados coletados do comportamento humano e candidata para governar o planeta Terra. Será que ela está mesmo pronta para cumprir seu propósito?',
      unbinaryHeading: 'Participação',
      unbinaryDescription: 'Atuando como principal desenvolvedor, fui responsável por todo o desenvolvimento e finalização do jogo após sua versão DEMO, inicialmente com 5 fases. Ao longo do processo, desenvolvi sistemas e mecânicas para suportar toda a progressão e performance esperada, além de ter passado, com sucesso, por trodo o processo de aceite na loja oficial META Quest, alinhando e melhorando o jogo aos requerimentos da loja.\n\nTecnologia utilizada: Unity, C#, PlayMaker e QUIL.',
      gameTrailers: 'Trailers do Jogo',
      videoNotSupported: 'Seu navegador não suporta a tag de vídeo.',
      platforms: 'Plataformas',
      website: 'Website',
      stores: 'Lojas',
      gameplayFeatures: 'Características de Jogabilidade',
      gameplayShorts: 'Shorts de Gameplay',
      
      // Stickman vs Zombies project translations
      stickmanTitle: 'Stickman vs Zombies',
      stickmanSub: 'Corra do ataque dos zumbis. Movimentos impressionantes de Parkour: escale plataformas e pendure-se em lugares altos!',
      stickmanHeading: 'Participação',
      stickmanDescription: 'Redução de ANR\'s criticos e crashs. Aprimoramente de performance, atualização de SDK\'s, adição de ADS providers e intermediários. Aprimoramente do load e unload de Asset Bundles, implementação de sistema de Temporadas e download dinâmico de conteúdo.',
      moreGameplay: 'Mais Jogabilidade',
      gameWorld: 'Mundo do Jogo',
      moreEnvironments: 'Mais Ambientes',
      awardsAndPrizes: 'Prêmios & Conquistas',
      achievementAward: 'Prêmio de Conquista',
      excellenceAward: 'Prêmio de Excelência',
      innovationPrize: 'Prêmio de Inovação',
      // Project descriptions
      fillTheBusSub: 'Jogo com screenshots e ícone.',
      ziggySub: 'Ziggy é um Precision Platformer desafiador sobre um pequeno raio tentando voltar para casa. Seu objetivo é deslizar por armadilhas, dar dash por entre flechas e chegar ao final. Você consegue?',
      ziggyContribution: 'Fui responsável por todo o desenvolvimento de jogo, sendo o único desenvolvedor do projeto. Criei do zero sistemas de movimentação, plataformas e elementos de puzzle para a progressão entre mapas, além do sistema de input e conquistas para diferentes plataformas. Porting para console.',
      gamebanbanbanSub: 'Jogo promocional para o Banco Banrisul, desenvolvido durante meu período na Eludica em colaboração com a Rede Magic. Um Match3 onde o objetivo é combinar peças e acumular pontos até não haver mais combinações possíveis.',
      gamebanbanbanContribution: 'Fui responsável por todo o desenvolvimento do jogo, construído integralmente em JavaScript utilizando a engine Cocos Creator para web.',
      gamebanbanbanLinkUnavailable: 'Jogo indisponível, pois fez parte de uma campanha de marketing temporária. Evento já se encerrou.',
      aquabitzSub: 'Aquabitzz é um jogo casual promocional desenvolvido em colaboração com a Ludact para fins promocionais da Ri-Happy. O jogo é no estilo de Pokémon Go, onde o jogador deve caçar ovos e chocá-los para obter novos aquabitzz e descontos em produtos!',
      aquabitzContribution: 'Neste projeto, entrei em uma fase avançada do desenvolvimento, contribuindo com correções de bugs, melhorias e preparação para o lançamento. O projeto foi desenvolvido para mobile utilizando tecnologias de AR na Unity Engine.',
      aquabitzLinkUnavailable: 'Jogo indisponível, pois fez parte de uma campanha de marketing temporária. Evento já se encerrou.',
      repairKrakenSub: 'Jogo desenvolvido durante a Global Game Jam, com tempo total de produção de 48 horas. Repair the Kraken foi criado com base no tema do evento: “Repair”. O jogo acompanha um mergulhador preso dentro de um submarino com a estrutura comprometida. O objetivo é impedir que a água inunde todas as salas reparando os buracos conforme eles aparecem. A jogabilidade inclui mecânicas como andar, subir escadas, abrir e fechar portas, consertar vazamentos e acionar descargas para drenar a água local.',
      locomotiva5Sub: 'Jogo de terror 3D. Durante a reabertura de uma antiga linha férrea, uma repórter se depara com eventos estranhos que podem significar um avanço em sua carreira — ou um terrível fim.',
      salvePiramideSub: 'Projeto da EditoraBrasil com GIFs e screenshots.',
      showMonstroSub: 'Projeto da EditoraBrasil com GIFs e screenshots.',
      harbingerSub: 'Harbinger é um metroidvania 2D de plataforma com mecânicas e gráficos inovadores. Você controlará Pandora em uma aventura contra o tempo, onde seu maior desafio será encontrado em uma fortaleza gigantesca e megalomaníaca.',
      harbingerContribution: 'Este jogo foi feito durante o curso de Graduação em Game Design na Anhembi Morumbi e levou cerca de 3 meses de desenvolvimento. Atuei como Programador de Jogos usando Unity e fui responsável por todo o desenvolvimento do projeto na Unity e por sua arquitetura.',
      locomotiva5Contribution: 'Projeto interdisciplinar realizado durante o 5º semestre do curso de Game Design na Universidade Anhembi Morumbi. Atuei como Programador Líder no projeto e fui responsável por todo o código.',
      repairKrakenContribution: 'Contribuí para o projeto realizando toda a programação do jogo, junto a mais cinco membros da equipe — incluindo dois outros programadores.',
      // Ice Rage project translations
      iceRageTitle: 'Ice Rage',
      iceRageSub: 'Ice Rage: Icerealm Fury é um jogo casual singleplayer onde o jogador controla um guerreiro bárbaro que corre em múltiplas direções para derrotar monstros em sua terra natal e proteger sua tribo.',
      iceRageHeading: 'Ice Rage',
      iceRageDescription: 'Ação casual em um reino de gelo: derrote criaturas e proteja sua tribo.',
      iceRageContribution: 'Desenvolvi uma parte significativa da programação de Ice Rage, além da montagem de cenas, criação de ferramentas, implementação de assets e design de UI, durante meu período na EPRAGames, com um tempo de desenvolvimento de aproximadamente 3 meses até o momento.',
      // Juju's Kitchen project translations
      jujusKitchenTitle: 'Juju\'s Kitchen',
      jujusKitchenSub: 'Veja se consegue lembrar e cumprir todos os pedidos, testando sua memória enquanto corre contra o relógio. Ajude a Juju, uma adorável cachorrinha, a cuidar do seu restaurante. Um jogo de culinária divertido onde você prepara pratos deliciosos em uma cozinha animada.',
      jujusKitchenHeading: 'Juju\'s Kitchen',
      jujusKitchenContribution: 'Desenvolvi toda a programação de Juju\'s Kitchen, além da montagem de cenas, implementação de assets e design de UI, durante meu período na EPRAGames, com um período de desenvolvimento de aproximadamente 1,5 meses.',
      // Fill The Bus project translations
      fillTheBusTitle: 'Fill The Bus',
      fillTheBusSub: '"Fill the Bus" é um jogo de quebra-cabeça onde você precisa preencher o ônibus com passageiros da maneira mais eficiente possível para alcançar a maior pontuação e progredir no jogo, desbloqueando novo conteúdo. Mas cuidado — você precisa fazer isso antes que os passageiros fiquem irritados!',
      fillTheBusContribution: 'Jogo casual desenvolvido em C# usando a Unity Engine como o único desenvolvedor do jogo.',
      // Ta Na Mesa project translations
      taNaMesaTitle: 'Ta Na Mesa',
      taNaMesaSub: 'Jogo sério mobile desenvolvido durante minha graduação em Game Design, este jogo trata de uma interação social entre dois jogadores usando o mesmo dispositivo para trocar informações sobre ele, coletando e descobrindo novas receitas para usar em sua vida real como um guia (é uma possibilidade). Um aplicativo para facilitar pedidos em restaurantes, melhorando a experiência tanto para clientes quanto para estabelecimentos.',
      taNaMesaHeading: 'Ta Na Mesa',
      taNaMesaContribution: 'Fui responsável por toda a programação, como desenvolvedor único no projeto. Desenvolvido com C# na Unity Engine.',
      taNaMesaLinks: 'Jogo não publicado.',
      // Minute Bomb project translations
      minuteBombTitle: 'Minute Bomb',
      minuteBombSub: 'Minute Bomb é um jogo casual onde o jogador precisa encontrar e memorizar as coordenadas corretas para desativar uma bomba.',
      minuteBombHeading: 'Minute Bomb',
      minuteBombDescription: 'Ação rápida onde cada segundo conta para desarmar bombas e completar desafios.',
      minuteBombContribution: 'Desenvolvi toda a programação de Minute Bomb, além da montagem de cenas, implementação de assets e design de UI, durante meu período na EPRAGames, com tempo de desenvolvimento de aproximadamente 2 meses.',
      // Nebula Garden (NG) project translations
      ngTitle: 'Nebula Garden',
      ngSub: 'Em Nebula Garden, cuide de uma fazenda dentro de uma estação espacial, conheça sua tripulação e vivencie uma ampla gama de possibilidades para expandir, explorar e transformar o mundo ao seu redor. Nebula Garden é um Farming RPG, gênero de jogos originado por Harvest Moon (Natsume Inc.). Esses jogos colocam o jogador no papel de alguém responsável por administrar uma fazenda, criando um ciclo de gameplay centrado nesses afazeres. O jogador passa seus dias cuidando da fazenda, cultivando plantas e criando animais, enquanto aproveita tudo que envolve esse ambiente. NPCs, dungeons e muitas outras mecânicas são pensadas para complementar — nunca substituir — a fazenda. Este jogo foi desenvolvido como trabalho de conclusão de curso (TCC) de Game Design na Universidade Anhembi Morumbi, em 2020.',
      ngContribution: 'Como programador, fui responsável por grande parte dos sistemas, mais especificamente pelos sistemas de plantação, limpeza, movimentação, dungeons, NPCs e ciclos de estações (seasons). Atuei em todos os sistemas de forma direta ou indireta, garantindo que todas as mecânicas atendessem às definições iniciais do GDD. Jogo desenvolvido na Unity Engine, em C#, utilizando Shader Graph e Articy Draft.',
      // War project translations
      warTitle: 'War',
      warSub: 'Os jogadores assumem o papel de generais para conquistar territórios e dominar o mundo, cada um com um objetivo secreto a cumprir. Para isso, é preciso planejar ataques e defender seus territórios, usando dados para resolver os combates e cartas para receber tropas extras. A partida termina quando um jogador cumpre sua missão.',
      warHeading: 'War',
      warDescription: 'Estratégia por territórios baseada no clássico War: objetivos secretos, dados, cartas e domínio do mapa.',
      warContribution: 'War é um jogo no qual tive a oportunidade de trabalhar durante meu período na Black Willow (K-Interativa), empresa atualmente responsável pelo desenvolvimento do War da GrowGames. Contribuí na manutenção de diversos sistemas e mecânicas de gameplay, incluindo funcionalidades de multiplayer e compras dentro do aplicativo. Uma parte significativa da minha contribuição foi dedicada ao desenvolvimento de War Romano, uma variante do War clássico, que inclui novas mecânicas, sistemas e um mapa e arte totalmente novos.',
       // Sokolab project translations
      sokolabTitle: 'Sokolab',
      sokolabSub: 'Sokolab é um jogo Sokoban onde você joga como um robô fofo! Empurre os blocos para o objetivo para chegar ao final do nível, novas mecânicas são introduzidas ao longo do jogo, adicionando camadas de complexidade aos quebra-cabeças! Você consegue alcançar o último nível?',
      sokolabHeading: 'Sokolab',
      sokolabDescription: 'Puzzle inspirado em Sokoban com novas mecânicas, mapas e desafios progressivos.',
      sokolabContribution: 'Fui responsável por todo o desenvolvimento de jogo, sendo o único desenvolvedor do projeto. Criei do zero sistemas de geração de mapa, elementos de composição dos puzzles e progressão. Jogo desenvolvido na Unity Engine.'
    },
    en: {
      headerTitle: 'Alan Silva',
      headerSub: 'Game Developer & Software Engineer',
      showMore: 'Show More',
      showLess: 'Show Less',
      footer: '© 2025 Alan Silva — All rights reserved.',
      back: '← Back',
      linkedinTooltip: 'View profile',
      githubTooltip: 'View GitHub',
      // Index
      projectsHeading: 'Projects',
      projectsPreviewHint: 'Hover over a project to see the preview.',
      // About section
      aboutIntroTitle: 'Introduction',
      aboutIntroP1: 'Graduated in Game Design from Anhembi Morumbi University (São Paulo, Brazil), I\'ve been passionate about game development since 2014. I\'ve worked on a wide spectrum of projects — from mobile to PC/console, from casual titles to larger scale productions.',
      aboutIntroP2: 'My main stack is Unity Engine with C#, where I focus most of my professional experience. I also have solid experience with JavaScript, Lua, and C++, with a special affinity for C++. Professionally, my contributions have been predominantly in Unity and C#.',
      aboutIntroP3: 'I\'ve been working with games since mid-2019, accumulating over 6 years of practical experience delivering gameplay, systems, tools, and well-polished user experiences.',
      aboutExperienceTitle: 'Experience',
      skillsTitle: 'Skills',
      certCaption: 'Unity Certified Professional: Programmer (2023–2026)',
      // Platform section titles
      pcConsoleTitle: 'PC/Console',
      webglTitle: 'WebGL Games',
      mobileTitle: 'Mobile',
      // Contact section
      contactHeading: 'Get in touch',
      contactSub: 'I’m available for opportunities and collaborations. Let’s talk!',
      contactEmailLabel: 'Send email',
      contactLinkedInLabel: 'LinkedIn',
      // Generic sections
      appIcon: 'App Icon',
      appScreenshots: 'App Screenshots',
      gameScreenshots: 'Game Screenshots',
      promotionalImage: 'Promotional Image',
      gameTrailer: 'Game Trailer',
      gameplayClips: 'Gameplay Clips',
      // Generic project page sections
      projectDescription: 'Project Description',
      myContribution: 'My contribution',
      downloadLink: 'Download Link',
      // Book Of Wolves subtitle (full description)
      bookWolvesSub: 'In the role of Andrei Ulric, a cursed vampire hunter, hunt and eliminate the legacy of Nosferatu, who terrorizes the small town of Wisborg. Using various tools as well as the traits of the werewolf curse, the player must traverse the village of Wisborg, now consumed by the plague and madness brought by the vampire who dominates it, Ellen Hutter. With the help of Professor Bulwer and the tools and tips he provides, the player must traverse the village using brutality and creativity to face whatever lies ahead, and can also rely on ingenuity to use non-violent solutions ranging from guiding and distracting enemies to alternative routes discovered by exploring the world. If combat is desired or inevitable, Andrei does not hesitate to use his arsenal.',
      // Generic project page sections
      projectDescription: 'Project Description',
      myContribution: 'My contribution',
      downloadLink: 'Download Link',
      // Book Of Wolves description
      bookWolvesP1: 'In the role of Andrei Ulric, a cursed vampire hunter, hunt and eliminate the legacy of Nosferatu, who terrorizes the small town of Wisborg.',
      bookWolvesP2: 'Using various tools as well as the traits of the werewolf curse, the player must traverse the village of Wisborg, now consumed by the plague and madness brought by the vampire who dominates it, Ellen Hutter.',
      bookWolvesP3: 'With the help of Professor Bulwer and the tools and tips he provides, the player must traverse the village using brutality and creativity to face whatever lies ahead, and can also rely on ingenuity to use non-violent solutions ranging from guiding and distracting enemies to alternative routes discovered by exploring the world.',
      bookWolvesP4: 'If combat is desired or inevitable, Andrei does not hesitate to use his arsenal.',
      bookWolvesContribution: 'Game made during the 6th semester of the Game Design degree at Anhembi Morumbi University, in approximately 3 months of development. Using Unity Engine and C#, I was the sole programmer on the project, responsible for all game systems and mechanics, as well as integrating third-party SDKs and plugins.',
      // Unbinary project translations
      unbinaryTitle: 'Unbinary - Ludact',
      unbinarySub: 'UNBINARY is a hand-painted virtual reality adventure puzzle game. Meet Webby, a super AI built from collected human behavior data and a candidate to govern planet Earth. Is she really ready to fulfill her purpose?',
      unbinaryHeading: 'Participation',
      unbinaryDescription: 'Acting as the main developer, I was responsible for all development and finalization of the game after its DEMO version, initially with 5 levels. Throughout the process, I developed systems and mechanics to support all expected progression and performance, and successfully navigated the acceptance process for the official META Quest store, aligning and improving the game to meet store requirements.\n\nTechnology used: Unity, C#, PlayMaker, and QUIL.',
      gameTrailers: 'Game Trailers',
      videoNotSupported: 'Your browser does not support the video tag.',
      platforms: 'Platforms',
      website: 'Website',
      stores: 'Stores',
      gameplayFeatures: 'Gameplay Features',
      gameplayShorts: 'Gameplay Shorts',
      
      // Stickman vs Zombies project translations
      stickmanTitle: 'Stickman vs Zombies - Aurecas',
      stickmanSub: 'Run from zombie attacks. Impressive Parkour moves: climb platforms and hang on high places!',
      stickmanHeading: 'Participation',
      stickmanDescription: 'Reduction of critical ANRs and crashes. Performance improvement, SDK updates, addition of ADS providers and intermediaries. Enhancement of Asset Bundle loading and unloading, implementation of Seasons system and dynamic content download.',
      moreGameplay: 'More Gameplay',
      gameWorld: 'Game World',
      moreEnvironments: 'More Environments',
      awardsAndPrizes: 'Awards & Prizes',
      achievementAward: 'Achievement Award',
      excellenceAward: 'Excellence Award',
      innovationPrize: 'Innovation Prize',
      // Project descriptions
      fillTheBusSub: 'Game with screenshots and icon.',
      ziggySub: 'Ziggy is a challenging precision platformer about a little lightning bolt trying to go back home. Your main objective is to slide past all traps, dash through arrows and get to the end. Can you do it?',
      ziggyContribution: 'I was responsible for the entire game development as the sole developer. I built movement systems, platforming and puzzle elements for progression between maps from scratch, as well as input and achievements systems for different platforms. Console porting.',
      gamebanbanbanSub: 'Promotional game for Banrisul Bank, developed during my time at Eludica in collaboration with Rede Magic. A Match3 game where the goal is to combine pieces and accumulate points until no more combinations are possible.',
      gamebanbanbanContribution: 'I was responsible for the entire game development, built entirely in JavaScript using the Cocos Creator engine for the web.',
      gamebanbanbanLinkUnavailable: 'Game unavailable, as it was part of a temporary marketing campaign. The event has ended.',
      aquabitzSub: 'Aquabitzz is a casual promotional game developed in collaboration with Ludact for Ri-Happy\'s promotional purposes. The game is developed in the style of Pokemon-Go, where the player must hunt eggs and hatch them to obtain new aquabitzz and discounts on products!',
      aquabitzContribution: 'In this project, I joined during an advanced stage of development, contributing to bug fixes, enhancements, and launch preparations. The project was developed for mobile using AR technologies in the Unity Engine.',
      aquabitzLinkUnavailable: 'Game unavailable, as it was part of a temporary marketing campaign. The event has ended.',
      repairKrakenSub: 'Game developed during the Global Game Jam, with a total production time of 48 hours. Repair the Kraken was created based on the event’s theme: “Repair.” The game follows a diver trapped inside a submarine with a compromised structure. The objective is to prevent water from flooding all the rooms by repairing holes as they appear. The gameplay includes mechanics such as walking, climbing ladders, opening and closing doors, fixing leaks, and flushing toilets to drain local water.',
      locomotiva5Sub: '3D Horror Game. During the reopening of an old railway line, a reporter encounters strange events that could mean a breakthrough in her career — or a terrible end.',
      salvePiramideSub: 'EditoraBrasil project with GIFs and screenshots.',
      showMonstroSub: 'EditoraBrasil project with GIFs and screenshots.',
      harbingerSub: 'Harbinger is a 2D platform metroidvania-like with innovative mechanics and graphics. You will control Pandora on an adventure against time, where your highest challenge will be found in a gigantic and megalomaniac fortress.',
      harbingerContribution: "This game was made during the Game Design course from Anhembi Morumbi degree and it development takes around 3 months to be done. I've worked as Game Programmer using Unity and I was responsible for the entire project development in Unity and its architecture.",
      locomotiva5Contribution: 'Interdisciplinary project carried out during the 5th semester of the Game Design course at Anhembi Morumbi University. I worked as the Lead Programmer on the project and was responsible for all the code within it.',
      repairKrakenContribution: 'I contributed to the project by handling all the game’s programming, alongside five other team members — including two fellow programmers.',
      // Ice Rage project translations
      iceRageTitle: 'Ice Rage',
      iceRageSub: 'Ice Rage: ICEREALM FURY is a casual single-player game where the player controls a barbarian warrior who runs in multiple directions to defeat monsters in his homeland to protect his tribe.',
      iceRageHeading: 'Ice Rage',
      iceRageDescription: 'Casual action in an icy realm: defeat creatures and protect your tribe.',
      iceRageContribution: 'I developed a significant portion of the programming for Ice Rage, as well as scene setup, tool creation, asset implementations, and UI design, during my time at EPRAGames, with a development period of approximately 3 months to date.',
      // Juju's Kitchen project translations
      jujusKitchenTitle: 'Juju\'s Kitchen',
      jujusKitchenSub: 'See if you can remember and fulfill all the orders, testing your memory while racing against the clock. Help Juju, an adorable puppy, take care of her restaurant. A fun cooking game where you prepare delicious dishes in a lively kitchen.',
      jujusKitchenHeading: 'Juju\'s Kitchen',
      jujusKitchenContribution: 'I developed all of Juju\'s Kitchen programming, as well as scene assembly, asset implementation, and UI design, during my time at EPRAGames, with a development period of approximately 1.5 months.',
      // Fill The Bus project translations
      fillTheBusTitle: 'Fill The Bus',
      fillTheBusSub: '\"Fill the Bus\" is a puzzle game where you need to fill the bus with passengers as efficiently as possible to achieve the highest score and progress in the game, unlocking new content. But be careful — you need to do this before the passengers get annoyed!',
      fillTheBusContribution: 'Casual game developed in C# using the Unity Engine as the sole developer of the game.',
      // Ta Na Mesa project translations
      taNaMesaTitle: 'Ta Na Mesa',
      taNaMesaSub: 'A serious mobile game developed during my Game Design graduation, this game deals with social interaction between two players using the same device to exchange information about it, collecting and discovering new recipes to use in their real life as a guide (it\'s a possibility). An app to facilitate ordering in restaurants, improving the experience for both customers and establishments.',
      taNaMesaHeading: 'Ta Na Mesa',
      taNaMesaContribution: 'I was responsible for all the programming, as the sole developer on the project. Developed with C# in Unity Engine.',
      taNaMesaLinks: 'Game not published.',
      // Minute Bomb project translations
      minuteBombTitle: 'Minute Bomb',
      minuteBombSub: 'Minute Bomb is a casual game where the player needs to find and memorize the correct coordinates to deactivate a bomb.',
      minuteBombHeading: 'Minute Bomb',
      minuteBombDescription: 'Fast-paced action where every second counts to defuse bombs and complete challenges.',
      minuteBombContribution: 'I developed all the programming for Minute Bomb, as well as scene setup, asset implementations, and UI design, during my time at EPRAGames, with a development period of approximately 2 months.',
      // Nebula Garden (NG) project translations
      ngTitle: 'Nebula Garden',
      ngSub: 'In Nebula Garden, take care of a farm inside a space station, meet its crew, and experience a wide range of possibilities to expand, explore, and reshape the world around you. Nebula Garden is a Farming RPG, a genre originating from Harvest Moon by Natsume Inc. These games put the player in the role of someone responsible for running a farm, creating a gameplay loop centered around those duties. The player spends their days tending the farm, growing crops and raising animals, while enjoying everything surrounding that environment. NPCs, dungeons, and many other mechanics are designed to complement — never replace — the farm. This game was developed as the final thesis project for the Game Design course at Anhembi Morumbi University in 2020.',
      ngContribution: 'As a programmer, I was responsible for most systems, specifically the farming, cleaning, movement, dungeon, NPC, and season cycle systems. I worked across all systems directly and indirectly, ensuring every mechanic met the initial GDD definitions. Built with Unity Engine and C#, using Shader Graph and Articy Draft.',

      // Sokolab project translations
      sokolabTitle: 'Sokolab',
      sokolabSub: 'SokoLab is a Sokoban game where you play as a cute robot! Push blocks to the objective to reach the end of the level. New mechanics are introduced throughout the game, adding layers of complexity to the puzzles! Can you reach the last level?',
      sokolabHeading: 'Sokolab',
      sokolabDescription: 'Sokoban-inspired puzzle with new mechanics, map generation and progressive challenges.',
      sokolabContribution: 'I was responsible for the entire game development as the sole developer. I built map generation systems from scratch, puzzle composition elements and progression. Developed with Unity Engine.',

      // War project translations
      warTitle: 'War',
      warSub: 'Players take the role of generals to conquer territories and dominate the world, each with a secret objective to fulfill. Plan attacks and defend your territories, use dice to resolve battles and cards to receive extra troops. The match ends when a player completes their mission.',
      warHeading: 'War',
      warDescription: 'Territory-based strategy inspired by the classic War: secret goals, dice, cards and map domination.',
      warContribution: 'War is a game I had the opportunity to work on during my time at Black Willow (K-Interativa), the company currently responsible for the development of the War game by GrowGames. I was involved in maintaining various gameplay systems and mechanics, including multiplayer functionality and in-app purchasing. A significant part of my contribution focused on the development of War Romano, a variant of the classic War, featuring new mechanics, systems, and entirely new map and art assets.'
    }
  };

  // --- helper: apply translations to data-i18n targets ---
  function applyTranslations(showingAll=false) {
    const t = translations[lang] || translations.pt;
    // generic mapper: apply any known key found in data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(e => {
      const key = e.getAttribute('data-i18n');
      if (key && t[key]) e.textContent = t[key];
    });
    // support title tooltips via data-i18n-title
    document.querySelectorAll('[data-i18n-title]').forEach(e => {
      const key = e.getAttribute('data-i18n-title');
      if (key && t[key]) e.setAttribute('title', t[key]);
    });
    // show-more buttons
    document.querySelectorAll('.show-more').forEach(b => {
      b.textContent = showingAll ? t.showLess : t.showMore;
    });
  }

  // --- language toggle handler (shared) ---
  function toggleLang() {
    lang = (lang === 'pt') ? 'en' : 'pt';
    localStorage.setItem(LANG_KEY, lang);
    // update all related UI strings
    applyTranslations(window.__SHOWING_ALL_PROJECTS === true);
    // update all flag buttons
    document.querySelectorAll('.lang-toggle').forEach(btn => {
      btn.textContent = lang === 'pt' ? '🇧🇷' : '🇺🇸';
      btn.setAttribute('aria-label', (lang === 'pt' ? 'Mudar para inglês' : 'Switch to Portuguese'));
    });
  }

  // --- ensure event attached to dynamically present or multiple buttons ---
  function attachLangToggleHandlers() {
    // find all current lang-toggle elements
    const els = Array.from(document.querySelectorAll('.lang-toggle'));
    els.forEach(el => {
      // remove previous to avoid double-bind (safe)
      el.removeEventListener('__langToggle__', toggleLang);
      // add event listener using named function via a wrapper
      // we add actual listener as regular click and mark a property to prevent duplicates
      if (!el.__hasLangHandler) {
        el.addEventListener('click', toggleLang);
        el.__hasLangHandler = true;
      }
      // set current flag icon
      el.textContent = lang === 'pt' ? '🇧🇷' : '🇺🇸';
      el.setAttribute('aria-label', (lang === 'pt' ? 'Mudar para inglês' : 'Switch to Portuguese'));
    });
  }

  // --- fade-in observer ---
  const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  function observeFadeIns() {
    document.querySelectorAll('.fade-in').forEach(el => {
      // only observe if not already visible
      if (!el.classList.contains('visible')) fadeObserver.observe(el);
    });
  }

  // --- Page top background GIF rotator (fixed at top) ---
  function initTopBgRotator() {
    // only on index/home
    const onIndex = /\/index\.html$/.test(location.pathname) || location.pathname === '/' || location.pathname === '';
    if (!onIndex) return;
    console.log('🎬 Iniciando rotador de GIFs de fundo...');
    const rot = document.createElement('div');
    rot.className = 'page-top-bg-rotator';
    rot.innerHTML = '<div class="bg-frame"></div><div class="bg-frame"></div>';
    // insert as first child of body so it sits behind header/home
    document.body.insertBefore(rot, document.body.firstChild);
    const frames = rot.querySelectorAll('.bg-frame');
    const gifs = [
      // Repair The Kraken — confirmed in index and project page
      'assets/projects/RepairTheKraken/gifs/w1000-1239880CwGrG5Ix.gif',
      'assets/projects/RepairTheKraken/gifs/w1000-12398802ZEY1C19.gif',
      'assets/projects/RepairTheKraken/gifs/w1000-1239880OwKuOURJ.gif',
      'assets/projects/RepairTheKraken/gifs/w1000-1239880hOw0oeUQ.gif',
      'assets/projects/RepairTheKraken/gifs/w1000-1239880ka5vl6si.gif',
      'assets/projects/RepairTheKraken/gifs/w1000-1239880n13lXFv9.gif',
      'assets/projects/RepairTheKraken/gifs/w1000-1239880w289g7VE.gif',
      // Locomotiva5 — multiple GIFs present
      'assets/projects/Locomotiva5/gifs/w1000-12398800dPagLnB.gif',
      'assets/projects/Locomotiva5/gifs/w1000-12398804bKBl9zI.gif',
      'assets/projects/Locomotiva5/gifs/w1000-12398809SdYe69O.gif',
      'assets/projects/Locomotiva5/gifs/w1000-1239880AXuDcO18.gif',
      'assets/projects/Locomotiva5/gifs/w1000-1239880EDTj51sl.gif',
      'assets/projects/Locomotiva5/gifs/w1000-1239880M5C4ZhiN.gif',
      // Ziggy — confirmed GIFs (note: folder is 'gif' not 'gifs')
      'assets/projects/Ziggy/gif/w1000-ezgifcom-video-to-gif-1-3b077e.gif',
      'assets/projects/Ziggy/gif/w1000-ezgifcom-video-to-gif-4-980be6.gif',
      'assets/projects/Ziggy/gif/w1000-gif-3-walking-1bfea3.gif',
      'assets/projects/Ziggy/gif/w1000-ezgifcom-video-to-gif-2-2b07de.gif',
      'assets/projects/Ziggy/gif/w1000-ezgifcom-video-to-gif-5-25c297.gif',
      // Unbinary — multiple GIFs available
      'assets/projects/Unbinary/Gif/Inventory.gif',
      'assets/projects/Unbinary/Gif/RecognizeGreen.gif',
      'assets/projects/Unbinary/Gif/YellowBot.gif',
      'assets/projects/Unbinary/Gif/ezgif.com-gif-maker.gif',
      'assets/projects/Unbinary/Gif/greenBattery.gif',
      // NG (Nebula Garden) — multiple GIFs available
      'assets/projects/NG/Gifs/CaveCollectGIF.gif',
      'assets/projects/NG/Gifs/FirstCicleGIF.gif',
      'assets/projects/NG/Gifs/FirstPlantGIF.gif',
      'assets/projects/NG/Gifs/InventoryGIF.gif',
      'assets/projects/NG/Gifs/MenuGIF.gif',
      'assets/projects/NG/Gifs/ConstructionGIF.gif',
      // Harbinger — multiple GIFs available
      'assets/projects/Harbinger/APOLO.gif',
      'assets/projects/Harbinger/Cerberus.gif',
      'assets/projects/Harbinger/Enemy_Dialogo_Death.gif',
      'assets/projects/Harbinger/Scan Gif.gif',
      // War — multiple GIFs available
      'assets/projects/War/ezgif.com-gif-maker.gif',
      'assets/projects/War/ezgif.com-gif-maker (2).gif',
      'assets/projects/War/ezgif.com-gif-maker (4).gif',
      // GameBanBanBan — multiple GIFs available
      'assets/projects/GameBanBanBan/gifs/w1000-1239880A3PGOPQ6.gif',
      'assets/projects/GameBanBanBan/gifs/w1000-1239880BfZa78KX.gif',
      'assets/projects/GameBanBanBan/gifs/w1000-1239880U5xo96An.gif',
      'assets/projects/GameBanBanBan/gifs/w1000-1239880X18R9Rfl.gif',
      // Aquabitz — GIFs available
      'assets/projects/Aquabitz/ezgif.com-video-to-gif.gif',
      'assets/projects/Aquabitz/ezgif.com-video-to-gif (1).gif',
      // IceRage — multiple GIFs available
      'assets/projects/IceRage/Gif\'s/Bear.gif',
      'assets/projects/IceRage/Gif\'s/Dragon1.gif',
      'assets/projects/IceRage/Gif\'s/Enemies.gif',
      'assets/projects/IceRage/Gif\'s/Yeti.gif',
      // Sokolab — multiple GIFs available
      'assets/projects/Sokolab/w1000-ezgifcom-video-to-gif-1-1e969b.gif',
      'assets/projects/Sokolab/w1000-ezgifcom-video-to-gif-2-ce4e95.gif',
      'assets/projects/Sokolab/w1000-ezgifcom-video-to-gif-9db702.gif',
      // Book Of Wolves — adicionar à rotação de BG
      'assets/projects/BookOfWolves/Gifs/image11.gif',
      'assets/projects/BookOfWolves/Gifs/image12.gif',
      'assets/projects/BookOfWolves/Gifs/image17.gif',
      'assets/projects/BookOfWolves/Gifs/image21.gif',
      'assets/projects/BookOfWolves/Gifs/image22.gif',
      'assets/projects/BookOfWolves/Gifs/image23.gif',
      'assets/projects/BookOfWolves/Gifs/image29.gif',
      'assets/projects/BookOfWolves/Gifs/image52.gif',
      'assets/projects/BookOfWolves/Gifs/image58.gif',
      'assets/projects/BookOfWolves/Gifs/image59.gif',
      'assets/projects/BookOfWolves/Gifs/image62.gif',
      'assets/projects/BookOfWolves/Gifs/image63.gif',
      'assets/projects/BookOfWolves/Gifs/image64.gif'
    ];
    if (!gifs.length) return;
    console.log(`🎬 ${gifs.length} GIFs carregados para rotação`);
    let current = 0;
    const pick = () => gifs[Math.floor(Math.random() * gifs.length)];
    const setFrame = (el, url) => { 
      el.style.backgroundImage = `url('${url}')`;
      console.log(`🖼️ Definindo frame: ${url}`);
    };
    setFrame(frames[0], pick());
    setFrame(frames[1], pick());
    frames[0].style.opacity = '1';
    frames[1].style.opacity = '0';
    console.log('🎬 Rotador inicializado com sucesso!');
    function next(){
      const prev = current;
      const nxt = 1 - current;
      setFrame(frames[nxt], pick());
      frames[nxt].style.opacity = '1';
      frames[prev].style.opacity = '0';
      current = nxt;
    }
    const timer = setInterval(next, 8000);
    // fade based on scroll position
    const threshold = 220;
    function onScroll(){
      const y = window.scrollY || document.documentElement.scrollTop || 0;
      const opacity = Math.max(0, 1 - y / threshold);
      rot.style.opacity = String(opacity);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.__topBgRotator = { next, stop: () => clearInterval(timer) };
  }

  // --- show more logic (works without requiring project script) ---
  const INITIAL_VISIBLE = 3; // valor legacy, não usado para cálculo por grid
  let showingAll = false;
  window.__SHOWING_ALL_PROJECTS = false;

  // Calcula número de colunas visíveis atuais do grid baseado no CSS
  function getVisibleColumns(grid){
    const style = getComputedStyle(grid);
    const gapX = parseFloat(style.columnGap || style.gap) || 24;
    const w = grid.clientWidth;
    // mede a largura real do primeiro card para refletir max-width:360px
    const firstItem = grid.querySelector(':scope > .project');
    let itemW = firstItem ? firstItem.offsetWidth : 300;
    // segurança: se 0 (layout não resolvido ainda), usa 360px como aproximação
    if (!itemW || itemW < 1) itemW = 360;
    // calcula colunas que cabem de fato
    const cols = Math.max(1, Math.floor((w + gapX) / (itemW + gapX)));
    return cols;
  }

  function updateProjectsVisibility() {
    const grids = Array.from(document.querySelectorAll('.projects-grid'));
    grids.forEach(grid => {
      const items = Array.from(grid.querySelectorAll(':scope > .project'));
      const visibleCount = showingAll ? items.length : getVisibleColumns(grid);
      items.forEach((p, i) => {
        if (!showingAll && i >= visibleCount) {
          p.classList.add('hidden');
          p.style.pointerEvents = 'none';
        } else {
          p.classList.remove('hidden');
          p.style.pointerEvents = '';
        }
      });
    });
    // Também controla visibilidade dos grupos opcionais no index
    const webgl = document.getElementById('webgl-group');
    const mobile = document.getElementById('mobile-group');
    if (webgl) webgl.style.display = showingAll ? 'block' : 'none';
    if (mobile) mobile.style.display = showingAll ? 'block' : 'none';
    // atualiza rótulo do botão
    applyTranslations(showingAll);
    window.__SHOWING_ALL_PROJECTS = showingAll;
  }

  function initShowMoreButtons() {
    document.querySelectorAll('.show-more').forEach(btn => {
      btn.addEventListener('click', (e) => {
        // Prevent index inline script double-toggle
        e.preventDefault();
        e.stopImmediatePropagation();
        showingAll = !showingAll;
        updateProjectsVisibility();
        if (showingAll) {
          const grid = document.querySelector('.projects-grid');
          if (grid) grid.scrollIntoView({ behavior: 'smooth' });
        }
      }, { capture: true });
    });
  }

  // (removido) cálculo de duração de GIF – deixar tocar inteiro sem interromper
  
  // Function to check if an image is portrait and apply appropriate class
  function checkIfPortrait(img) {
    if (img.complete) {
      if (img.naturalHeight > img.naturalWidth) {
        img.classList.add('portrait');
      } else {
        img.classList.remove('portrait');
      }
    } else {
      img.onload = () => {
        if (img.naturalHeight > img.naturalWidth) {
          img.classList.add('portrait');
        } else {
          img.classList.remove('portrait');
        }
      };
    }
  }

  // --- project hover gif randomizer ---
  function initProjectHoverGifs() {
    const onIndex = /\/index\.html$/.test(location.pathname) || location.pathname === '/' || location.pathname === '';
    if (!onIndex) return;
    
    // Utilitários para usar GIFs otimizados com fallback para original
    function toOptimizedGifPath(gifUrl) {
      try {
        const m = gifUrl.match(/assets\/projects\/([^\/]+)/);
        if (!m) return gifUrl;
        const project = m[1];
        const basename = gifUrl.split('/').pop();
        return `assets/projects/${project}/OptimizedGifs/${basename}`;
      } catch (_) {
        return gifUrl;
      }
    }
    function setSrcWithFallback(img, optimizedUrl, originalUrl) {
      let handled = false;
      const onError = () => {
        if (handled) return;
        handled = true;
        img.onerror = null;
        img.src = originalUrl;
      };
      img.onerror = onError;
      img.src = optimizedUrl;
    }
    
    // Map projects to their available GIFs
    const projectGifs = {
      'repair-the-kraken.html': [
        'assets/projects/RepairTheKraken/gifs/w1000-1239880CwGrG5Ix.gif',
        'assets/projects/RepairTheKraken/gifs/w1000-12398802ZEY1C19.gif',
        'assets/projects/RepairTheKraken/gifs/w1000-1239880OwKuOURJ.gif',
        'assets/projects/RepairTheKraken/gifs/w1000-1239880hOw0oeUQ.gif',
        'assets/projects/RepairTheKraken/gifs/w1000-1239880ka5vl6si.gif',
        'assets/projects/RepairTheKraken/gifs/w1000-1239880n13lXFv9.gif',
        'assets/projects/RepairTheKraken/gifs/w1000-1239880w289g7VE.gif'
      ],
      'locomotiva5.html': [
        'assets/projects/Locomotiva5/gifs/w1000-12398800dPagLnB.gif',
        'assets/projects/Locomotiva5/gifs/w1000-12398804bKBl9zI.gif',
        'assets/projects/Locomotiva5/gifs/w1000-12398809SdYe69O.gif',
        'assets/projects/Locomotiva5/gifs/w1000-1239880AXuDcO18.gif',
        'assets/projects/Locomotiva5/gifs/w1000-1239880EDTj51sl.gif',
        'assets/projects/Locomotiva5/gifs/w1000-1239880M5C4ZhiN.gif',
        'assets/projects/Locomotiva5/gifs/w1000-1239880Mf91oYx6.gif',
        'assets/projects/Locomotiva5/gifs/w1000-1239880NGc9oXEX.gif',
        'assets/projects/Locomotiva5/gifs/w1000-1239880NRWTREV6.gif',
        'assets/projects/Locomotiva5/gifs/w1000-1239880OBaykSjO.gif'
      ],
      'ziggy.html': [
        'assets/projects/Ziggy/gif/w1000-ezgifcom-video-to-gif-1-3b077e.gif',
        'assets/projects/Ziggy/gif/w1000-ezgifcom-video-to-gif-2-2b07de.gif',
        'assets/projects/Ziggy/gif/w1000-ezgifcom-video-to-gif-3-cbf0df.gif',
        'assets/projects/Ziggy/gif/w1000-ezgifcom-video-to-gif-4-980be6.gif',
        'assets/projects/Ziggy/gif/w1000-ezgifcom-video-to-gif-5-25c297.gif',
        'assets/projects/Ziggy/gif/w1000-ezgifcom-video-to-gif-6-5c4ab3.gif',
        'assets/projects/Ziggy/gif/w1000-gif-3-walking-1bfea3.gif',
        'assets/projects/Ziggy/gif/w1000-gif1resized-walljump--1bfea3.gif'
      ],
      'unbinary.html': [
        'assets/projects/Unbinary/Gif/Inventory.gif',
        'assets/projects/Unbinary/Gif/RecognizeGreen.gif',
        'assets/projects/Unbinary/Gif/YellowBot.gif',
        'assets/projects/Unbinary/Gif/ezgif.com-gif-maker (1).gif',
        'assets/projects/Unbinary/Gif/ezgif.com-gif-maker (2).gif',
        'assets/projects/Unbinary/Gif/ezgif.com-gif-maker (3).gif',
        'assets/projects/Unbinary/Gif/ezgif.com-gif-maker (4).gif',
        'assets/projects/Unbinary/Gif/ezgif.com-gif-maker (5).gif',
        'assets/projects/Unbinary/Gif/ezgif.com-gif-maker.gif',
        'assets/projects/Unbinary/Gif/greenBattery.gif'
      ],
      'ng.html': [
        'assets/projects/NG/Gifs/CaveCollectGIF.gif',
        'assets/projects/NG/Gifs/CaveDeathGif.gif',
        'assets/projects/NG/Gifs/CaveGoGIF.gif',
        'assets/projects/NG/Gifs/CleanGif.gif',
        'assets/projects/NG/Gifs/ColmeiaGIF.gif',
        'assets/projects/NG/Gifs/ConstructionGIF.gif',
        'assets/projects/NG/Gifs/CustomSceneGif.gif',
        'assets/projects/NG/Gifs/DestroyConstructionGIF.gif',
        'assets/projects/NG/Gifs/DialogueGIF.gif',
        'assets/projects/NG/Gifs/FirstCicleGIF.gif',
        'assets/projects/NG/Gifs/FirstCollectGIF.gif',
        'assets/projects/NG/Gifs/FirstPlantGIF.gif',
        'assets/projects/NG/Gifs/FirstTuto.gif',
        'assets/projects/NG/Gifs/InventoryGIF.gif',
        'assets/projects/NG/Gifs/MenuGIF.gif',
        'assets/projects/NG/Gifs/MutantCollectGIF.gif',
        'assets/projects/NG/Gifs/SellBoxGIF.gif',
        'assets/projects/NG/Gifs/SellerManGIF.gif'
      ],
      'book-of-wolves.html': [
        'assets/projects/BookOfWolves/Gifs/image11.gif',
        'assets/projects/BookOfWolves/Gifs/image12.gif',
        'assets/projects/BookOfWolves/Gifs/image17.gif',
        'assets/projects/BookOfWolves/Gifs/image21.gif',
        'assets/projects/BookOfWolves/Gifs/image22.gif',
        'assets/projects/BookOfWolves/Gifs/image23.gif',
        'assets/projects/BookOfWolves/Gifs/image29.gif',
        'assets/projects/BookOfWolves/Gifs/image52.gif',
        'assets/projects/BookOfWolves/Gifs/image58.gif',
        'assets/projects/BookOfWolves/Gifs/image59.gif',
        'assets/projects/BookOfWolves/Gifs/image62.gif',
        'assets/projects/BookOfWolves/Gifs/image63.gif',
        'assets/projects/BookOfWolves/Gifs/image64.gif'
      ],
      'harbinger.html': [
        'assets/projects/Harbinger/APOLO.gif',
        'assets/projects/Harbinger/Cerberus.gif',
        'assets/projects/Harbinger/Creditos Gif.gif',
        'assets/projects/Harbinger/Enemy_Dialogo_Death.gif',
        'assets/projects/Harbinger/Gif inimigo 1.gif',
        'assets/projects/Harbinger/Scan Gif.gif',
        'assets/projects/Harbinger/TimeWarp_Death.gif'
      ],
      'war.html': [
        'assets/projects/War/ezgif.com-gif-maker (1).gif',
        'assets/projects/War/ezgif.com-gif-maker (2).gif',
        'assets/projects/War/ezgif.com-gif-maker (3).gif',
        'assets/projects/War/ezgif.com-gif-maker (4).gif',
        'assets/projects/War/ezgif.com-gif-maker (5).gif',
        'assets/projects/War/ezgif.com-gif-maker (6).gif',
        'assets/projects/War/ezgif.com-gif-maker.gif'
      ],
      'gamebanbanban.html': [
        'assets/projects/GameBanBanBan/gifs/w1000-1239880A3PGOPQ6.gif',
        'assets/projects/GameBanBanBan/gifs/w1000-1239880BfZa78KX.gif',
        'assets/projects/GameBanBanBan/gifs/w1000-1239880IfXQKy7N.gif',
        'assets/projects/GameBanBanBan/gifs/w1000-1239880U5xo96An.gif',
        'assets/projects/GameBanBanBan/gifs/w1000-1239880Vtq1Juth.gif',
        'assets/projects/GameBanBanBan/gifs/w1000-1239880X18R9Rfl.gif',
        'assets/projects/GameBanBanBan/gifs/w1000-1239880elN2AjDA.gif',
        'assets/projects/GameBanBanBan/gifs/w1000-1239880kcDftXLN.gif'
      ],
      'aquabitz.html': [
        'assets/projects/Aquabitz/ezgif.com-video-to-gif (1).gif',
        'assets/projects/Aquabitz/ezgif.com-video-to-gif (2).gif',
        'assets/projects/Aquabitz/ezgif.com-video-to-gif.gif'
      ],
      'icerage.html': [
        'assets/projects/IceRage/Gif\'s/Bear.gif',
        'assets/projects/IceRage/Gif\'s/Dragon1.gif',
        'assets/projects/IceRage/Gif\'s/Dragon2.gif',
        'assets/projects/IceRage/Gif\'s/Enemies.gif',
        'assets/projects/IceRage/Gif\'s/GreenShark.gif',
        'assets/projects/IceRage/Gif\'s/Yeti.gif'
      ],
      'sokolab.html': [
        'assets/projects/Sokolab/w1000-ezgifcom-video-to-gif-1-1e969b.gif',
        'assets/projects/Sokolab/w1000-ezgifcom-video-to-gif-2-ce4e95.gif',
        'assets/projects/Sokolab/w1000-ezgifcom-video-to-gif-9db702.gif'
      ],
      'editora-salve-a-piramede.html': [
        'assets/projects/EditoraBrasil/SalveAPiramede/ezgif.com-optimize.gif',
        'assets/projects/EditoraBrasil/SalveAPiramede/ezgif.com-video-to-gif.gif',
        'assets/projects/EditoraBrasil/SalveAPiramede/ezgif.com-video-to-gif (1).gif'
      ],
      'editora-show-do-monstro.html': [
        'assets/projects/EditoraBrasil/ShowDoMonstrֶo/ezgif.com-optimize.gif',
        'assets/projects/EditoraBrasil/ShowDoMonstrֶo/ezgif.com-video-to-gif.gif'
      ],
      'editora-zumbis-desorganizados.html': [
        'assets/projects/EditoraBrasil/ZumbisDesorganizados/ezgif.com-optimize.gif',
        'assets/projects/EditoraBrasil/ZumbisDesorganizados/ezgif.com-optimize (1).gif',
        'assets/projects/EditoraBrasil/ZumbisDesorganizados/ezgif.com-optimize (2).gif',
        'assets/projects/EditoraBrasil/ZumbisDesorganizados/ezgif.com-optimize (3).gif',
        'assets/projects/EditoraBrasil/ZumbisDesorganizados/ezgif.com-video-to-gif.gif'
      ],
      'jujus-kitchen.html': [
        "assets/projects/Juju'sKitchen/Gifs/ezgif.com-gif-maker.gif"
      ]
    };

    // Map projects to their available screenshots (for projects without GIFs)
    const projectScreenshots = {
      'fill-the-bus.html': [
        'assets/projects/Fill The Bus/screenshots/w1000-unnamed-1-48458e.png',
        'assets/projects/Fill The Bus/screenshots/w1000-unnamed-2-83e556.png',
        'assets/projects/Fill The Bus/screenshots/w1000-unnamed-3-a30962.png',
        'assets/projects/Fill The Bus/screenshots/w1000-unnamed-4-af1794.png',
        'assets/projects/Fill The Bus/screenshots/w1000-unnamed-5-07dd92.png',
        'assets/projects/Fill The Bus/screenshots/w1000-unnamed-6-9a3cfc.png',
        'assets/projects/Fill The Bus/screenshots/w1000-unnamed-7-a1ec00.png',
        'assets/projects/Fill The Bus/screenshots/w1000-unnamed-e1404f.png'
      ],
      'minutebomb.html': [
        'assets/projects/MinuteBomb/Screenshots/Screenshot_1.png',
        'assets/projects/MinuteBomb/Screenshots/Screenshot_2.png',
        'assets/projects/MinuteBomb/Screenshots/Screenshot_3.png',
        'assets/projects/MinuteBomb/Screenshots/Screenshot_4.png',
        'assets/projects/MinuteBomb/Screenshots/Screenshot_5.png',
        'assets/projects/MinuteBomb/Screenshots/Screenshot_6.png',
        'assets/projects/MinuteBomb/Screenshots/Screenshot_7.png',
        'assets/projects/MinuteBomb/Screenshots/Screenshot_8.png'
      ],
      'stickman-vs-zombies.html': [
        'assets/projects/StickmanVsZombie/com.aurecas.stickmanzombieshooter-screenshots-0.png',
        'assets/projects/StickmanVsZombie/com.aurecas.stickmanzombieshooter-screenshots-1.png',
        'assets/projects/StickmanVsZombie/com.aurecas.stickmanzombieshooter-screenshots-2.png',
        'assets/projects/StickmanVsZombie/com.aurecas.stickmanzombieshooter-screenshots-4.png',
        'assets/projects/StickmanVsZombie/stickman-vs-zombies-31366-4.jpg',
        'assets/projects/StickmanVsZombie/stickman-vs-zombies-31366-5.jpg',
        'assets/projects/StickmanVsZombie/stickman-vs-zombies-31366-9.jpg',
        'assets/projects/StickmanVsZombie/stickman-vs-zombies-31366-10.jpg',
        'assets/projects/StickmanVsZombie/hq720.jpg',
        'assets/projects/StickmanVsZombie/maxresdefault.jpg'
      ],
      'jujus-kitchen.html': [
        "assets/projects/Juju'sKitchen/Screenshots/Screenshot_1.png",
        "assets/projects/Juju'sKitchen/Screenshots/Screenshot_2.png",
        "assets/projects/Juju'sKitchen/Screenshots/Screenshot_3.png",
        "assets/projects/Juju'sKitchen/Screenshots/Screenshot_4.png",
        "assets/projects/Juju'sKitchen/Screenshots/Screenshot_5.png",
        "assets/projects/Juju'sKitchen/Screenshots/Screenshot_6.png",
        "assets/projects/Juju'sKitchen/Screenshots/Screenshot_7.png",
        "assets/projects/Juju'sKitchen/Screenshots/Screenshot_8.png"
      ],
      'tanamesa.html': [
        'assets/projects/Ta Na Mesa/1.jpg',
        'assets/projects/Ta Na Mesa/2.jpg',
        'assets/projects/Ta Na Mesa/3.jpg',
        'assets/projects/Ta Na Mesa/4.jpg',
        'assets/projects/Ta Na Mesa/5.jpg',
        'assets/projects/Ta Na Mesa/6.jpg',
        'assets/projects/Ta Na Mesa/7.jpg',
        'assets/projects/Ta Na Mesa/8.jpg',
        'assets/projects/Ta Na Mesa/9.jpg',
        'assets/projects/Ta Na Mesa/10.jpg'
      ]
    };

    // Setup hover effects for projects
    document.querySelectorAll('.project').forEach(projectLink => {
      const href = projectLink.getAttribute('href');
      if (!href) return;
      
      const projectFile = href.replace('projects/', '');
      const gifs = projectGifs[projectFile];
      const screenshots = projectScreenshots[projectFile];
      
      // Skip if no media available
      if ((!gifs || !gifs.length) && (!screenshots || !screenshots.length)) return;
      
      const img = projectLink.querySelector('img');
      if (!img) return;
      
      // Verifica se a imagem inicial é portrait
      checkIfPortrait(img);
      
      const originalSrc = img.src;
      let hoverInterval = null;
      let hoverActive = false;
      let activationTimer = null;
      
      // Prefer GIFs (otimizados) sobre screenshots
      const isUsingGifs = gifs && gifs.length > 0;
      const optimizedGifs = isUsingGifs ? gifs.map(toOptimizedGifPath) : [];
      const mediaArray = optimizedGifs.length ? optimizedGifs : screenshots;
      
      projectLink.addEventListener('mouseenter', () => {
        // Cancel any previous timers/intervals and mark hover active
        if (hoverInterval) {
          clearInterval(hoverInterval);
          hoverInterval = null;
        }
        if (activationTimer) {
          clearTimeout(activationTimer);
          activationTimer = null;
        }
        hoverActive = true;

        // Debounce activation to avoid "previews mortos" quando sai rápido
        activationTimer = setTimeout(async () => {
          if (!hoverActive) return;

          // Choose first media and apply
          const firstMedia = mediaArray[Math.floor(Math.random() * mediaArray.length)];
          if (optimizedGifs.length) {
            const idx = optimizedGifs.indexOf(firstMedia);
            const originalCandidate = idx >= 0 ? gifs[idx] : (gifs && gifs[0]);
            setSrcWithFallback(img, firstMedia, originalCandidate);
          } else {
            img.src = firstMedia;
          }

          // Verifica retrato/paisagem
          setTimeout(() => { if (hoverActive) checkIfPortrait(img); }, 100);

          // Alterna mídia continuamente: para GIFs alterna de forma suave; para screenshots mantém alternância rápida
          if (!hoverActive) return;
          const interval = isUsingGifs ? 4500 : 800;
          let currentIndex = Math.max(0, mediaArray.indexOf(firstMedia));
          hoverInterval = setInterval(() => {
            if (!hoverActive) return;
            currentIndex = (currentIndex + 1) % mediaArray.length;
            const nextMedia = mediaArray[currentIndex];
            if (optimizedGifs.length) {
              const idx = optimizedGifs.indexOf(nextMedia);
              const originalCandidate = idx >= 0 ? gifs[idx] : (gifs && gifs[0]);
              setSrcWithFallback(img, nextMedia, originalCandidate);
            } else {
              img.src = nextMedia;
            }
            setTimeout(() => { if (hoverActive) checkIfPortrait(img); }, 100);
          }, interval);
        }, 150); // pequena demora para evitar ativação quando o usuário sai muito rápido
      });
      
      projectLink.addEventListener('mouseleave', () => {
        // Cancel activation and any running intervals
        hoverActive = false;
        if (activationTimer) {
          clearTimeout(activationTimer);
          activationTimer = null;
        }
        if (hoverInterval) {
          clearInterval(hoverInterval);
          hoverInterval = null;
        }
        // Restore original image
        img.src = originalSrc;
        setTimeout(() => { checkIfPortrait(img); }, 100);
      });
    });
  }

  // --- init (safe DOM ready) ---
  function init() {
    attachLangToggleHandlers();
    applyTranslations(showingAll);
    observeFadeIns();
    // Ensure first project content block is visible immediately on project pages
    try {
      const firstSection = document.querySelector('.project-page section.fade-in');
      if (firstSection) {
        firstSection.classList.add('visible');
        firstSection.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
      }
    } catch (e) { /* no-op */ }
    initTopBgRotator();
    initProjectHoverGifs();
    initShowMoreButtons();
    updateProjectsVisibility();
    // Atualiza dinamicamente em resize (debounced)
    let _resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(_resizeTimer);
      _resizeTimer = setTimeout(() => {
        updateProjectsVisibility();
      }, 150);
    });
    if (window.initMenuPanel) window.initMenuPanel();
    // If landing on index with a hash to optional groups, auto-expand and scroll
    const onIndex = /\/index\.html$/.test(location.pathname) || location.pathname === '/' || location.pathname === '';
    if (onIndex && (location.hash === '#webgl-group' || location.hash === '#mobile-group')) {
      if (window.__projectsVisibility && window.__projectsVisibility.setShowAll) {
        window.__projectsVisibility.setShowAll(true);
      } else {
        // Fallback: expand immediately before globals are exposed
        showingAll = true;
        updateProjectsVisibility();
      }
      const target = document.getElementById(location.hash.slice(1));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
    // watch for dynamically added lang-toggle buttons (e.g., via AJAX)
    let observerLocked = false;
   
   const bodyObserver = new MutationObserver(() => {
     if (observerLocked) return;
     observerLocked = true;
     requestAnimationFrame(() => {
       attachLangToggleHandlers();
       observerLocked = false;
     });
   });
   bodyObserver.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // expose for debug
  window.__siteLang = {
    get: () => lang,
    set: (v) => { lang = v; localStorage.setItem(LANG_KEY, v); applyTranslations(showingAll); attachLangToggleHandlers(); },
  };

  // --- expose: control project visibility globally (index page) ---
  function setShowAll(expanded){
    showingAll = !!expanded;
    // ensure optional groups visible when expanding
    if (showingAll) {
      const webgl = document.getElementById('webgl-group');
      const mobile = document.getElementById('mobile-group');
      if (webgl) webgl.style.display = 'block';
      if (mobile) mobile.style.display = 'block';
    }
    updateProjectsVisibility();
    applyTranslations(showingAll);
    window.__SHOWING_ALL_PROJECTS = showingAll;
  }
  window.__projectsVisibility = {
    setShowAll,
    isShowAll: () => showingAll,
  };
})();

// --- Image Lightbox (click-to-preview) ---
(function(){
  function initLightbox(){
    // Avoid duplicate overlays
    if (document.querySelector('.lightbox-overlay')) return;

    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay fade-in';
    overlay.innerHTML = `
      <div class="lightbox-content">
        <button class="lightbox-close" aria-label="Close">✕</button>
        <button class="lightbox-prev" aria-label="Previous">‹</button>
        <button class="lightbox-next" aria-label="Next">›</button>
        <div class="lightbox-section"></div>
        <img class="lightbox-image" alt="" />
        <div class="lightbox-caption"></div>
      </div>
    `;
    document.body.appendChild(overlay);

    const imgEl = overlay.querySelector('.lightbox-image');
    const capEl = overlay.querySelector('.lightbox-caption');
    const sectionEl = overlay.querySelector('.lightbox-section');
    const closeBtn = overlay.querySelector('.lightbox-close');
    const prevBtn = overlay.querySelector('.lightbox-prev');
    const nextBtn = overlay.querySelector('.lightbox-next');

    let galleryNodes = [];
    let currIndex = 0;
    let sectionTitle = '';
    let containers = [];
    let sectionIndex = 0;

    function collectContainers(){
      containers = Array.from(document.querySelectorAll('.responsive-grid, .project-gallery, .awards-grid'))
        .filter(c => c.querySelector('img'));
      if (!containers.length) {
        const pg = document.querySelector('.project-page');
        if (pg) containers = [pg];
      }
    }

    function setContainer(idx){
      sectionIndex = Math.max(0, Math.min(idx, containers.length - 1));
      const container = containers[sectionIndex];
      galleryNodes = Array.from(container.querySelectorAll('img'));
      sectionTitle = getSectionTitle(container);
      // Re-clamp current index to new container size
      currIndex = Math.max(0, Math.min(currIndex, galleryNodes.length - 1));
    }

    function getSectionTitle(container){
      // Prefer a heading immediately above the container
      let node = container.previousElementSibling;
      while (node) {
        if (node.tagName && /^H[1-6]$/.test(node.tagName)) return node.textContent.trim();
        node = node.previousElementSibling;
      }
      const sec = container.closest('section');
      if (sec) {
        const h = sec.querySelector('h1,h2,h3,h4,h5,h6');
        if (h) return h.textContent.trim();
      }
      return '';
    }

    function updateButtons(){
      const atGlobalStart = (sectionIndex === 0) && (currIndex === 0);
      const atGlobalEnd = (sectionIndex === (containers.length - 1)) && (currIndex === (galleryNodes.length - 1));
      prevBtn.disabled = atGlobalStart; nextBtn.disabled = atGlobalEnd;
      prevBtn.classList.toggle('disabled', atGlobalStart);
      nextBtn.classList.toggle('disabled', atGlobalEnd);
    }

    function show(i){
      if (!galleryNodes.length) return;
      // Non-wrap within current container
      currIndex = Math.max(0, Math.min(i, galleryNodes.length - 1));
      const node = galleryNodes[currIndex];
      imgEl.src = node.src;
      imgEl.alt = node.alt || '';
      capEl.textContent = node.alt || '';
      sectionEl.textContent = sectionTitle || '';
      updateButtons();
    }

    function goNext(){
      if (currIndex < (galleryNodes.length - 1)) {
        show(currIndex + 1);
      } else if (sectionIndex < (containers.length - 1)) {
        setContainer(sectionIndex + 1);
        show(0);
      }
    }

    function goPrev(){
      if (currIndex > 0) {
        show(currIndex - 1);
      } else if (sectionIndex > 0) {
        setContainer(sectionIndex - 1);
        // Jump to last image of previous section
        show(galleryNodes.length - 1);
      }
    }

    function openFrom(img){
      // find gallery container
      const container = img.closest('.responsive-grid, .project-gallery, .awards-grid') || document.querySelector('.project-page');
      collectContainers();
      const idx = containers.indexOf(container);
      setContainer(idx >= 0 ? idx : 0);
      currIndex = galleryNodes.indexOf(img);
      overlay.classList.add('visible');
      document.body.style.overflow = 'hidden';
      show(currIndex);
    }
    function close(){
      overlay.classList.remove('visible');
      document.body.style.overflow = '';
      imgEl.src = '';
      capEl.textContent = '';
      galleryNodes = [];
      currIndex = 0;
      sectionTitle = '';
      sectionEl.textContent = '';
    }

    overlay.addEventListener('click', (e) => {
      if (!e.target.closest('.lightbox-content') || e.target.classList.contains('lightbox-close')) {
        close();
      }
    });
    closeBtn.addEventListener('click', close);
    prevBtn.addEventListener('click', goPrev);
    nextBtn.addEventListener('click', goNext);
    document.addEventListener('keydown', (e) => {
      if (!overlay.classList.contains('visible')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    });

    // Bind click handlers to all images inside project pages
    const imgs = Array.from(document.querySelectorAll('.project-page img'));
    imgs.forEach(img => {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', () => openFrom(img));
    });
  }

  // expose for reuse from init()
  window.initLightbox = initLightbox;
  // auto-init after this script block loads (safer ordering)
  if (document.querySelector('.project-page')) initLightbox();
})();

  // --- Global Hamburger Menu ---
  (function(){
    const PROJECTS = [
      { title: 'Unbinary - Ludact', url: 'projects/unbinary.html' },
      { title: 'Nebula Garden', url: 'projects/ng.html' },
      { title: 'Harbinger', url: 'projects/harbinger.html' },
      { title: 'Locomotiva5', url: 'projects/locomotiva5.html' },
      { title: 'Repair The Kraken', url: 'projects/repair-the-kraken.html' },
      { title: 'Book Of Wolves', url: 'projects/book-of-wolves.html' },
      { title: 'Sokolab', url: 'projects/sokolab.html' },
      { title: 'Ziggy', url: 'projects/ziggy.html' },
      { title: 'War', url: 'projects/war.html' },
      { title: 'GameBanBanBan', url: 'projects/gamebanbanban.html' },
      { title: 'Stickman Vs Zombies - Aurecas', url: 'projects/stickman-vs-zombies.html' },
      { title: 'Aquabitz', url: 'projects/aquabitz.html' },
      { title: 'IceRage', url: 'projects/icerage.html' },
      { title: 'Minute Bomb', url: 'projects/minutebomb.html' },
      { title: "Juju's Kitchen", url: 'projects/jujus-kitchen.html' },
      { title: 'Fill The Bus', url: 'projects/fill-the-bus.html' },
      { title: 'Ta Na Mesa', url: 'projects/tanamesa.html' }
    ];

  const INDEX_SECTIONS = [
    { id: '', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'certification', label: 'Certification' },
    { id: 'projects', label: 'Projects' },
    { id: 'pc-console', label: 'PC/Console' },
    { id: 'webgl-group', label: 'WebGL Games' },
    { id: 'mobile-group', label: 'Mobile' }
  ];

  function buildMenuMarkup(){
    const btn = document.createElement('button');
    btn.className = 'menu-toggle';
    btn.setAttribute('aria-label', 'Open menu');
    btn.innerHTML = '<span class="menu-bars"><span></span></span><span>Menu</span>';

    const backdrop = document.createElement('div');
    backdrop.className = 'menu-backdrop';

    const panel = document.createElement('nav');
    panel.className = 'menu-panel';
    panel.innerHTML = `
      <h4>Index Sections</h4>
      <ul class="menu-list menu-index"></ul>
      <h4>Projects</h4>
      <ul class="menu-list menu-projects"></ul>
    `;

    document.body.appendChild(btn);
    document.body.appendChild(backdrop);
    document.body.appendChild(panel);
    return { btn, backdrop, panel };
  }

  function fillMenu(panel){
    const idxList = panel.querySelector('.menu-index');
    const projList = panel.querySelector('.menu-projects');
    const onIndex = /\/index\.html$/.test(location.pathname) || location.pathname === '/' || location.pathname === '';
    const ROOT = location.pathname.includes('/projects/') ? '../' : '';

    // Index sections
    INDEX_SECTIONS.forEach(sec => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.textContent = sec.label;
      a.href = onIndex ? `#${sec.id}` : `${ROOT}index.html#${sec.id}`;
      a.addEventListener('click', (e) => {
        // smooth scroll and ensure optional sections are visible when on index
        if (onIndex) {
          e.preventDefault();
          // Expand all projects globally so previews show
          if (window.__projectsVisibility && window.__projectsVisibility.setShowAll) {
            window.__projectsVisibility.setShowAll(true);
          }
          const target = document.getElementById(sec.id);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          } else {
            // Fallback to hash navigation if element is missing
            location.hash = `#${sec.id}`;
          }
        }
        closeMenu();
      });
      li.appendChild(a);
      idxList.appendChild(li);
    });

    // Project links
    PROJECTS.forEach(p => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.textContent = p.title;
      a.href = `${ROOT}${p.url}`;
      li.appendChild(a);
      projList.appendChild(li);
    });
  }

  let _btn, _backdrop, _panel;
  function openMenu(){
    _backdrop.classList.add('open');
    _panel.classList.add('open');
  }
  function closeMenu(){
    _backdrop.classList.remove('open');
    _panel.classList.remove('open');
  }

  function initMenuPanel(){
    if (document.querySelector('.menu-panel')) return;
    const { btn, backdrop, panel } = buildMenuMarkup();
    _btn = btn; _backdrop = backdrop; _panel = panel;
    fillMenu(panel);
    btn.addEventListener('click', openMenu);
    backdrop.addEventListener('click', closeMenu);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
  }

  // expose for external call
  window.initMenuPanel = initMenuPanel;
  // auto-init to ensure visibility across pages
  try { initMenuPanel(); } catch (e) { /* noop */ }
})();