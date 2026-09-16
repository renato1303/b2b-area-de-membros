/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Course, Product, Campaign, NewsletterArticle, FileAttachment, Member, CommunityPost, GamificationReward, PointsEntry, GamificationTier } from './types';
export { RECIPES } from './data/recipes';
export { SCIENCE_ARTICLES } from './data/science';
export { INITIAL_FORUM_TOPICS } from './data/community';
export { SHOPIFY_INTEGRATION_METHODS, SHOPIFY_SUPPORT_TEMPLATE } from './data/shopifyGuide';
export { BLOG_POSTS, NEWSLETTER } from './data/blog';
export { TECHNICAL_SHEETS } from './data/technicalSheets';

export const ATTACHMENTS: FileAttachment[] = [
  {
    id: 'att-tabela-precos',
    name: 'Tabela de Preços Atacado 2026 & Margem de Revenda',
    category: 'Comercial',
    size: '145 KB',
    downloadUrl: '/Ficha_Tecnica_Cacau_100_Organico.pdf',
    description: 'Tabela completa com custos unitários, caixas display, margens sugeridas e condições de faturamento.'
  },
  {
    id: 'att-midia-kit',
    name: 'Mídia Kit & Banco de Fotos em Alta Resolução para Lojas',
    category: 'Marketing',
    size: '1.4 MB',
    downloadUrl: '/Ficha_Tecnica_Baunilha_Organica.pdf',
    description: 'Imagens oficiais para redes sociais, stories do empório, cardápios e e-commerce de parceiros.'
  },
  {
    id: 'att-pdv-display',
    name: 'Display de Balcão, Stoppers e Tags de Gôndola (PDF Gráfica)',
    category: 'PDV & Gráfica',
    size: '890 KB',
    downloadUrl: '/Ficha_Tecnica_Nibs_de_Cacau_Organico.pdf',
    description: 'Arquivos em alta resolução com marcas de corte para produção de material de ponto de venda.'
  },
  {
    id: 'att-guia-balcao',
    name: 'Manual de Vendas & Degustação no Balcão para Atendentes',
    category: 'Guia',
    size: '320 KB',
    downloadUrl: '/Sera_Cacau_Guia_de_Preparo.pdf',
    description: 'Roteiro prático para a equipe de loja: como encantar o cliente e quebrar objeções de sabor.'
  },
  {
    id: 'att-ft-cacau-100',
    name: 'Ficha Técnica — Cacau 100% Orgânico (Massa de Cacau)',
    category: 'Ficha Técnica',
    size: '58 KB',
    downloadUrl: '/Ficha_Tecnica_Cacau_100_Organico.pdf',
    description: 'Especificações técnicas, fitoquímica, laudos microbiológicos e homologação de fornecedor.'
  },
  {
    id: 'att-ft-nibs',
    name: 'Ficha Técnica — Nibs de Cacau Orgânico',
    category: 'Ficha Técnica',
    size: '57 KB',
    downloadUrl: '/Ficha_Tecnica_Nibs_de_Cacau_Organico.pdf',
    description: 'Dados técnicos para setor de compras e controle de qualidade.'
  },
  {
    id: 'att-ft-cha-casca',
    name: 'Ficha Técnica — Chá da Casca de Cacau',
    category: 'Ficha Técnica',
    size: '52 KB',
    downloadUrl: '/Ficha_Tecnica_Cha_da_Casca_de_Cacau.pdf',
    description: 'Parâmetros de infusão e especificações sensoriais.'
  },
  {
    id: 'att-ft-baunilha',
    name: 'Ficha Técnica — Baunilha Orgânica (Favas Curadas)',
    category: 'Ficha Técnica',
    size: '57 KB',
    downloadUrl: '/Ficha_Tecnica_Baunilha_Organica.pdf',
    description: 'Laudo botânico e notas aromáticas de vanilina natural.'
  }
];

export const SERA_CACAU_BUY_URL = 'https://account.seracacau.com.br/authentication/login?_s=a4710ca9-3994-4637-ba15-680b1ab10a00&_y=f4e100d4-c80c-43b4-a77e-6a11d703f2ea&analytics_trace_id=ca314759-4790-46a8-a9a8-b16ee961b0bb&client_id=f2704ee2-ba54-4f15-b457-b021fce9c2ff&locale=pt-BR&redirect_uri=%2Fauthentication%2Foauth%2Fauthorize%3F_cs%3D%26_s%3Da4710ca9-3994-4637-ba15-680b1ab10a00%26_y%3Df4e100d4-c80c-43b4-a77e-6a11d703f2ea%26analytics_trace_id%3Dca314759-4790-46a8-a9a8-b16ee961b0bb%26buyer_flags%3DeyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI0N2MwNmItNDkubXlzaG9waWZ5LmNvbSIsImZsYWdzIjpbXSwiZXhwIjoxNzg5NTAwNDU0LCJuYmYiOjE3ODg4OTU2NTR9.yLZjqMgh74NIlYYMD4z5pm_HtfaC8RZTi2_gNeHNIlE%26client_id%3Df2704ee2-ba54-4f15-b457-b021fce9c2ff%26locale%3Dpt-BR%26nonce%3Df72de5c8-4135-4e32-9fa9-c51b7907a3b0%26redirect_uri%3Dhttps%253A%252F%252Fwww.seracacau.com.br%252Fcustomer_authentication%252Fcallback%26response_type%3Dcode%26scope%3Dopenid%2Bemail%2Bcustomer-account-api%26state%3DhWNGbaB8YJxPcA5xJufaJdp8';

export const PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Gotas de Será Cacau | 210g',
    slug: 'gotas-sera-cacau-210g',
    line: 'Cacau Ritual',
    category: 'Gotas',
    weight: '210g',
    tagline: 'Sua dose diária de presença e bem-estar.',
    story: 'As Gotas são o bestseller indiscutível da Será Cacau. Feito com cacau 100% orgânico puro cultivado no sistema Cabruca, sob a copa da Mata Atlântica baiana. Cada gota equivale a 1 grama exato de puro cacau. Nada adicionado, nada removido. Embalagem de vidro âmbar nobre que se destaca no balcão e na gôndola de empórios finos.',
    benefits: [
      'Teobromina: estimulante natural suave que proporciona foco limpo sem agitação.',
      'Flavonoides e Antioxidantes (+400): alta demanda por consumidores de longevidade e alimentação limpa.',
      'Embalagem nobre em vidro reutilizável de alta percepção de valor.',
      'Taxa de recompra comprovada de 68% em lojas e empórios parceiros.'
    ],
    ingredients: 'Cacau 100% orgânico e puro. Livre de glúten, lactose, açúcares e aditivos artificiais.',
    nutritionalTable: {
      servingSize: '20g (20 gotas)',
      calories: '112 kcal',
      carbohydrates: '6.2g',
      proteins: '2.6g',
      fats: '9.4g',
      sodium: '0mg',
      minerals: 'Magnésio: 58mg (22% VD), Ferro: 1.8mg (13% VD), Zinco: 0.9mg (12% VD)'
    },
    hasLaudo: true,
    laudoUrl: '#',
    protocol: 'Dica de Exposição no PDV: Posicionar na altura dos olhos na seção de cafés especiais ou nutrição consciente, acompanhado do display de balcão com amostras de gotas para degustação.',
    imageUrl: '/images/gotas210.jpeg',
    shopifyId: 'sh_gotas_210g',
    price: 'R$ 129,00',
    wholesalePrice: 'R$ 90,30',
    wholesalePackPrice: 'R$ 541,80',
    wholesalePackUnits: 'Caixa Display Balcão c/ 6 unidades',
    suggestedRetailPrice: 'R$ 129,00',
    profitMarginPercent: '30%',
    minimumOrder: '1 caixa display (6 un)',
    salesPitch: 'Explique ao cliente que cada gota tem exatamente 1g de cacau 100% puro da Bahia, sem amargor agressivo devido à fermentação lenta da Cabruca. Derrete perfeitamente na água quente ou no leite vegetal.',
    posMaterialsAvailable: ['Display de Balcão em Madeira', 'Stopper de Gôndola', 'Pote de Degustação'],
    originCooperativa: 'Cooperativa Local da Cabruca - Sul da Bahia',
    discountCode: 'B2BATACADO',
    discountDescription: 'Tabela de Revenda com 30% de desconto direto de fábrica',
    buyUrl: SERA_CACAU_BUY_URL
  },
  {
    id: 'prod-2',
    name: 'Gotas de Será Cacau | 105g',
    slug: 'gotas-sera-cacau-105g',
    line: 'Cacau Ritual',
    category: 'Gotas',
    weight: '105g',
    tagline: 'O tamanho ideal para iniciar o ritual de presença.',
    story: 'A versão de 105g foi desenhada para uma introdução perfeita ou como um presente de afeto para quem quer iniciar o ritual. O pote de vidro sofisticado protege as propriedades antioxidantes das gotas de cacau puro, com giro rápido no caixa de pagamento e cestas de compras saudáveis.',
    benefits: [
      'Produto de entrada com ticket acessível e altíssima conversão de clientes novos.',
      'Embalagem compacta e de alta sofisticação visual para vitrine.',
      'Excelente opção para presentes corporativos e kits comemorativos da loja.'
    ],
    ingredients: 'Cacau 100% orgânico e puro.',
    nutritionalTable: {
      servingSize: '20g (20 gotas)',
      calories: '112 kcal',
      carbohydrates: '6.2g',
      proteins: '2.6g',
      fats: '9.4g',
      sodium: '0mg'
    },
    hasLaudo: true,
    laudoUrl: '#',
    protocol: 'Dica de Exposição no PDV: Colocar ao lado do caixa / checkout como opção de presente sofisticado e saudável.',
    imageUrl: '/images/gotas105.jpeg',
    shopifyId: 'sh_gotas_105g',
    price: 'R$ 79,00',
    wholesalePrice: 'R$ 55,30',
    wholesalePackPrice: 'R$ 553,00',
    wholesalePackUnits: 'Caixa Display c/ 10 unidades',
    suggestedRetailPrice: 'R$ 79,00',
    profitMarginPercent: '30%',
    minimumOrder: '1 caixa display (10 un)',
    salesPitch: 'Ideal para quem nunca experimentou cacau 100% puro e quer começar com um pote menor, ou para quem procura um presente elegante e memorável de até R$ 80.',
    posMaterialsAvailable: ['Display de Caixa', 'Adesivo de Vitrine'],
    originCooperativa: 'Cooperativa Local da Cabruca - Sul da Bahia',
    discountCode: 'B2BATACADO',
    discountDescription: 'Tabela de Revenda com 30% de desconto',
    buyUrl: SERA_CACAU_BUY_URL
  },
  {
    id: 'prod-3',
    name: 'Será Cacau Disc | 36g',
    slug: 'sera-cacau-disc-36g',
    line: 'Cacau Ritual',
    category: 'Disc',
    weight: '36g',
    tagline: 'O item de impulso perfeito para o balcão e caixa.',
    story: 'Um disco fino de cacau puro esculpido com precisão. O melhor produto de compra por impulso para lojas, confeitarias e cafeterias: fica estrategicamente ao lado da máquina de café espresso ou na fila do caixa.',
    benefits: [
      'Giro imediato de balcão com 30% de desconto para revenda.',
      'Harmonização perfeita para servir com café espresso em cafeterias parceiras.',
      'Excelente para clientes que querem provar antes de levar o pote de gotas.'
    ],
    ingredients: 'Cacau 100% orgânico cultivado sob a sombra de árvores nativas da Mata Atlântica.',
    nutritionalTable: {
      servingSize: '18g (meio disco)',
      calories: '99 kcal',
      carbohydrates: '5.5g',
      proteins: '2.2g',
      fats: '8.1g',
      sodium: '0mg'
    },
    hasLaudo: false,
    imageUrl: '/images/disc.jpeg',
    shopifyId: 'sh_disc_36g',
    price: 'R$ 39,00',
    wholesalePrice: 'R$ 27,30',
    wholesalePackPrice: 'R$ 546,00',
    wholesalePackUnits: 'Display de Balcão c/ 20 unidades',
    suggestedRetailPrice: 'R$ 39,00',
    profitMarginPercent: '30%',
    minimumOrder: '1 display (20 un)',
    salesPitch: 'Ofereça ao cliente que pediu um espresso ou um chá: "Experimente quebrar uma lasquinha desse disco de cacau puro da Bahia no seu café!".',
    posMaterialsAvailable: ['Display Compacto de Acrílico/Madeira para Balcão de Caixa'],
    originCooperativa: 'Associação Agroflorestal de Serra Grande',
    discountCode: 'B2BATACADO',
    discountDescription: 'Tabela de Revenda com 30% de desconto',
    buyUrl: SERA_CACAU_BUY_URL
  },
  {
    id: 'prod-4',
    name: 'Será Fava de Baunilha | 1 unidade',
    slug: 'sera-baunilha-fava',
    line: 'Ervas Ritual',
    category: 'Baunilha',
    weight: '4g',
    tagline: 'O perfume incrivelmente raro da nossa floresta.',
    story: 'A baunilha brasileira da Será cresce de forma sinérgica na mesma agrofloresta Cabruca dos nossos cacauais. Considerada por botânicos e chefs especializados como uma das espécies de fava mais raras e perfumadas do mundo. Produzida em pequena escala com polinização manual.',
    benefits: [
      'Item de altíssimo valor agregado e exclusividade botânica na sua loja.',
      'Muito procurada por confeiteiros amadores e chefs que buscam ingredientes nobres.',
      'Embalagem tubular protetora transparente de alto impacto visual.'
    ],
    ingredients: 'Uma fava íntegra de baunilha orgânica brasileira.',
    nutritionalTable: {
      servingSize: '0.5g',
      calories: '2 kcal',
      carbohydrates: '0.4g',
      proteins: '0g',
      fats: '0g',
      sodium: '0mg'
    },
    hasLaudo: true,
    laudoUrl: '#',
    protocol: 'Dica de Exposição no PDV: Posicionar próximo a temperos e especiarias gourmet ou no balcão de confeitaria.',
    imageUrl: '/images/baunilha.jpg',
    shopifyId: 'sh_vanilla_1fava',
    price: 'R$ 38,00',
    wholesalePrice: 'R$ 26,60',
    wholesalePackPrice: 'R$ 266,00',
    wholesalePackUnits: 'Caixa Expositora c/ 10 tubos',
    suggestedRetailPrice: 'R$ 38,00',
    profitMarginPercent: '30%',
    minimumOrder: '1 caixa expositora (10 un)',
    salesPitch: 'Baunilha nativa brasileira colhida na Mata Atlântica. Um único tubo perfuma bolos, caldas e infusões por semanas.',
    posMaterialsAvailable: ['Expositor de Tubos Acrílico'],
    originCooperativa: 'Agricultura familiar integrada de Serra Grande, Bahia',
    discountCode: 'B2BATACADO',
    discountDescription: 'Tabela de Revenda com 30% de desconto',
    buyUrl: SERA_CACAU_BUY_URL
  },
  {
    id: 'prod-5',
    name: 'Barra Será Cacau | 200g',
    slug: 'barra-sera-cacau-200g',
    line: 'Cacau Puro em Barra',
    category: 'Barras',
    weight: '200g',
    tagline: 'A intensidade da floresta em barra pura para ralar, fatiar e emulsionar.',
    story: 'A Barra de Será Cacau 200g é moldada com cacau 100% puro de origem Cabruca do sul da Bahia. Ideal para clientes que gostam de ralar lascas frescas sobre café, bowls e sobremesas finas, ou usar em preparações culinárias gourmet sem aditivos.',
    benefits: [
      'Cacau 100% puro integral não alcalinizado de fermentação controlada.',
      'Formato tradicional e consagrado para amantes de chocolate de origem.',
      'Excelente relação custo/peso para consumidores assíduos de cacau puro.',
      'Rica em gordura saudável nobre (manteiga de cacau natural intacta).'
    ],
    ingredients: '100% amêndoas de cacau orgânico cultivado sob a sombra da Mata Atlântica.',
    nutritionalTable: {
      servingSize: '20g',
      calories: '114 kcal',
      carbohydrates: '6.0g',
      proteins: '2.8g',
      fats: '9.6g',
      sodium: '0mg',
      minerals: 'Magnésio: 62mg (24% VD), Ferro: 2.1mg (15% VD), Fósforo: 84mg'
    },
    hasLaudo: true,
    laudoUrl: '#',
    protocol: 'Dica de Exposição no PDV: Agrupar na gôndola de chocolates bean-to-bar e chocolates saudáveis com etiqueta de "100% Cacau Agroflorestal".',
    imageUrl: '/image/barra200g.jpeg',
    shopifyId: 'sh_barra_200g',
    price: 'R$ 119,00',
    wholesalePrice: 'R$ 83,30',
    wholesalePackPrice: 'R$ 666,40',
    wholesalePackUnits: 'Caixa c/ 8 unidades de 200g',
    suggestedRetailPrice: 'R$ 119,00',
    profitMarginPercent: '30%',
    minimumOrder: '1 caixa (8 un)',
    salesPitch: 'Barra maciça de cacau puro da Bahia. Pode ser ralada fina sobre o café da manhã ou derretida em banho-maria para caldas de sobremesas sem açúcar.',
    posMaterialsAvailable: ['Régua de Gôndola', 'Tag de Prateleira'],
    originCooperativa: 'Cooperativa Local de Produtores Agroflorestais da Bahia',
    discountCode: 'B2BATACADO',
    discountDescription: 'Tabela de Revenda com 30% de desconto',
    buyUrl: SERA_CACAU_BUY_URL
  },
  {
    id: 'prod-6',
    name: 'Barra Será Cacau | 450g (Food Service & Revenda)',
    slug: 'barra-sera-cacau-450g',
    line: 'Cacau Puro em Barra',
    category: 'Barras',
    weight: '450g',
    tagline: 'O formato profissional e generoso para cafeterias, bistrôs e revenda.',
    story: 'A Barra de Será Cacau 450g foi desenhada sob medida para cafeterias de especialidade, confeitarias saudáveis e empórios com alta rotatividade. Permite o preparo de mochas artesanais da casa, chocolates quentes de assinatura e sobremesas funcionais no cardápio.',
    benefits: [
      'Melhor custo por grama de cacau puro de alta origem para uso culinário da casa.',
      'Permite criar bebidas exclusivas de alto valor agregado no cardápio da cafeteria.',
      'Revenda para clientes que consomem diariamente e querem embalagens maiores.',
      'Embalagem sustentável e hermética com alta durabilidade.'
    ],
    ingredients: '100% cacau orgânico puro da Costa do Cacau Baiana.',
    nutritionalTable: {
      servingSize: '20g',
      calories: '114 kcal',
      carbohydrates: '6.0g',
      proteins: '2.8g',
      fats: '9.6g',
      sodium: '0mg',
      minerals: 'Magnésio: 62mg, Zinco: 1.1mg, Potássio: 195mg'
    },
    hasLaudo: true,
    laudoUrl: '#',
    protocol: 'Dica de Food Service: Pique em cubos de 15g para emulsionar com leite vaporizado ou barista de aveia. Custo da porção de cacau puro fica em torno de R$ 4,16 e a bebida pode ser vendida a R$ 18 - R$ 22.',
    imageUrl: '/image/barras450g.jpeg',
    shopifyId: 'sh_barra_450g',
    price: 'R$ 249,00',
    wholesalePrice: 'R$ 174,30',
    wholesalePackPrice: 'R$ 697,20',
    wholesalePackUnits: 'Caixa Food Service c/ 4 barras de 450g (1,8kg)',
    suggestedRetailPrice: 'R$ 249,00',
    profitMarginPercent: '30%',
    minimumOrder: '1 caixa (4 barras)',
    salesPitch: 'Para uso no bar de café ou revenda direta aos clientes mais fiéis. Rendimento de até 30 doses de 15g por barra.',
    posMaterialsAvailable: ['Ficha de Receitas de Barista em Acrílico'],
    originCooperativa: 'Cooperativa Local de Produtores Agroflorestais da Bahia',
    discountCode: 'B2BATACADO',
    discountDescription: 'Condição comercial com 30% de desconto para revenda e food service',
    buyUrl: SERA_CACAU_BUY_URL
  },
  {
    id: 'prod-7',
    name: 'Nibs de Será Cacau | 250g',
    slug: 'nibs-de-sera-cacau-250g',
    line: 'Cacau Crocante',
    category: 'Nibs',
    weight: '250g',
    tagline: 'A pura amêndoa de cacau torrada e quebrada com crocância marcante.',
    story: 'Os Nibs da Será Cacau são pedacinhos da amêndoa de cacau 100% puro fermentada e torrada em fogo brando. Mantêm toda a fibra, crocância e notas florais e terrosas. Campeão de vendas em empórios e mercearias orgânicas.',
    benefits: [
      'Giro constante: consumido semanalmente como topping de açaí, iogurtes e granolas.',
      'Superfood sem adição de açúcar ou gordura hidrogenada.',
      'Embalagem stand-up pouch selada de 250g de fácil empilhamento em gôndola.'
    ],
    ingredients: 'Amêndoas de cacau orgânico puro tostadas e quebradas.',
    nutritionalTable: {
      servingSize: '15g (1 colher de sopa)',
      calories: '86 kcal',
      carbohydrates: '4.2g (sendo 3.1g fibras)',
      proteins: '2.1g',
      fats: '7.2g',
      sodium: '0mg',
      minerals: 'Magnésio: 42mg (16% VD), Ferro: 1.2mg'
    },
    hasLaudo: true,
    laudoUrl: '#',
    protocol: 'Dica de Exposição no PDV: Colocar ao lado de granolas artesanais, iogurtes orgânicos ou seção de açaí e bowls saudáveis.',
    imageUrl: '/image/nibs250gramas.jpeg',
    shopifyId: 'sh_nibs_250g',
    price: 'R$ 109,00',
    wholesalePrice: 'R$ 76,30',
    wholesalePackPrice: 'R$ 610,40',
    wholesalePackUnits: 'Caixa c/ 8 unidades de 250g',
    suggestedRetailPrice: 'R$ 109,00',
    profitMarginPercent: '30%',
    minimumOrder: '1 caixa (8 un)',
    salesPitch: 'Crocância pura sem nenhum açúcar. O cliente usa como substituto de gotas de chocolate comerciais em smoothies, bolos e iogurtes.',
    posMaterialsAvailable: ['Stopper de Gôndola', 'Tag de Superalimento'],
    originCooperativa: 'Associação Agroflorestal de Serra Grande, Bahia',
    discountCode: 'B2BATACADO',
    discountDescription: 'Tabela de Revenda com 30% de desconto',
    buyUrl: SERA_CACAU_BUY_URL
  },
  {
    id: 'prod-8',
    name: 'Nibs de Será Cacau | 75g',
    slug: 'nibs-de-sera-cacau-75g',
    line: 'Cacau Crocante',
    category: 'Nibs',
    weight: '75g',
    tagline: 'O pote compacto para degustação e praticidade na rotina.',
    story: 'Apresentado em pote de vidro âmbar elegante, o Nibs 75g é perfeito para mesas de escritório, kits de presentes de empórios e balcões de cafeterias. Ideal para quem quer um snack limpo e energético para levar na bolsa.',
    benefits: [
      'Pote de vidro âmbar colecionável e de altíssimo apelo visual.',
      'Excelente opção de presente de ticket acessível.',
      'Crocância pura sem nenhum tipo de aditivo químico.'
    ],
    ingredients: 'Amêndoas de cacau orgânico selecionadas da Cabruca.',
    nutritionalTable: {
      servingSize: '15g',
      calories: '86 kcal',
      carbohydrates: '4.2g',
      proteins: '2.1g',
      fats: '7.2g',
      sodium: '0mg',
      minerals: 'Magnésio: 42mg, Ferro: 1.2mg'
    },
    hasLaudo: true,
    laudoUrl: '#',
    protocol: 'Dica de Exposição no PDV: Manter próximo aos cafés moídos na hora e chás finos.',
    imageUrl: '/images/nibssera75.jpeg',
    shopifyId: 'sh_nibs_75g',
    price: 'R$ 39,00',
    wholesalePrice: 'R$ 27,30',
    wholesalePackPrice: 'R$ 327,60',
    wholesalePackUnits: 'Caixa Display c/ 12 unidades',
    suggestedRetailPrice: 'R$ 39,00',
    profitMarginPercent: '30%',
    minimumOrder: '1 caixa display (12 un)',
    salesPitch: 'Snack funcional de bolso. Ótimo para matar a vontade de doce no meio da tarde sem ingerir açúcar.',
    posMaterialsAvailable: ['Display de Balcão'],
    originCooperativa: 'Associação Agroflorestal de Serra Grande, Bahia',
    discountCode: 'B2BATACADO',
    discountDescription: 'Tabela de Revenda com 30% de desconto',
    buyUrl: SERA_CACAU_BUY_URL
  },
  {
    id: 'prod-9',
    name: 'Chá de Casca de Cacau | 75g',
    slug: 'cha-casca-de-cacau-75g',
    line: 'Infusões da Floresta',
    category: 'Chás & Infusões',
    weight: '75g',
    tagline: 'A infusão dourada com o perfume reconfortante do cacau e zero calorias.',
    story: 'As cascas das amêndoas de cacau guardam uma riqueza aromática singular e fitoquímica reconfortante. Gera uma bebida límpida, de cor âmbar dourada, com perfume inebriante de chocolate fino e zero calorias. Produto de altíssimo rendimento no cardápio de cafeterias e venda fácil em empórios.',
    benefits: [
      'Zero caloria e zero açúcar: forte atrativo para praticantes de jejum e dietas low carb.',
      'Bebida aconchegante para a tarde ou após refeições.',
      'Altíssimo rendimento: 1 pacote rende mais de 25 bules de infusão.',
      'Sustentabilidade e bioeconomia circular da Mata Atlântica.'
    ],
    ingredients: 'Cascas íntegras e selecionadas de amêndoas de cacau orgânico puro.',
    nutritionalTable: {
      servingSize: '3g (1 colher de sopa)',
      calories: '< 2 kcal',
      carbohydrates: '0.4g',
      proteins: '0g',
      fats: '0g',
      sodium: '0mg',
      minerals: 'Polifenóis voláteis solúveis em água'
    },
    hasLaudo: true,
    laudoUrl: '#',
    protocol: 'Dica para Cafeterias: Servir em bule de vidro transparente para valorizar a cor âmbar e o aroma que se espalha no ambiente.',
    imageUrl: '/image/chadecasca.jpeg',
    shopifyId: 'sh_cha_casca_75g',
    price: 'R$ 22,00',
    wholesalePrice: 'R$ 15,40',
    wholesalePackPrice: 'R$ 184,80',
    wholesalePackUnits: 'Caixa c/ 12 pacotes de 75g',
    suggestedRetailPrice: 'R$ 22,00',
    profitMarginPercent: '30%',
    minimumOrder: '1 caixa (12 un)',
    salesPitch: 'O cliente se apaixona pelo aroma. Parece que tem chocolate derretido na xícara, mas é uma infusão leve, digestiva e com zero calorias.',
    posMaterialsAvailable: ['Tag de Chás Especiais', 'Adesivo Informativo de Cardápio'],
    originCooperativa: 'Cooperativa Local da Cabruca - Sul da Bahia',
    discountCode: 'B2BATACADO',
    discountDescription: 'Tabela de Revenda com 30% de desconto',
    buyUrl: SERA_CACAU_BUY_URL
  },
  {
    id: 'prod-10',
    name: 'Kit Início Será Cacau | Gotas 105g & Xícara',
    slug: 'kit-inicio-sera-cacau-gotas-105g-xicara',
    line: 'Kits & Presentes',
    category: 'Kits Ritual',
    weight: '105g + Xícara',
    tagline: 'O conjunto completo para ancorar o ritual de presença na sua rotina.',
    story: 'Um encontro entre a fitoquímica da floresta e o artesanato brasileiro de terra. O Kit Início reúne o pote de Gotas de Será Cacau 105g e uma xícara em cerâmica rústica modelada manualmente em alta temperatura. Peça de destaque absoluto em vitrines de empórios e cafeterias boutique.',
    benefits: [
      'Produto âncora de vitrine com alto poder de atração de público.',
      'Opção número 1 para presentes corporativos de fim de ano, Dia das Mães e datas especiais.',
      'Acompanha caixa presenteável nobre pronta para entrega.',
      'Cerâmica artesanal brasileira exclusiva assinada.'
    ],
    ingredients: 'Gotas de cacau 100% puro (105g) + 1 Xícara de cerâmica artesanal brasileira (180ml).',
    nutritionalTable: {
      servingSize: '20g de gotas',
      calories: '112 kcal',
      carbohydrates: '6.2g',
      proteins: '2.6g',
      fats: '9.4g',
      sodium: '0mg',
      minerals: 'Magnésio: 58mg'
    },
    hasLaudo: true,
    laudoUrl: '#',
    protocol: 'Dica de Vitrine: Deixar montado na entrada da loja sobre apoio de madeira rústica, iluminado com luz morna.',
    imageUrl: '/image/kitseracacau.jpeg',
    shopifyId: 'sh_kit_inicio_gotas_xicara',
    price: 'R$ 179,00',
    wholesalePrice: 'R$ 125,30',
    wholesalePackPrice: 'R$ 501,20',
    wholesalePackUnits: 'Caixa com 4 Kits Presenteáveis',
    suggestedRetailPrice: 'R$ 179,00',
    profitMarginPercent: '30%',
    minimumOrder: '1 caixa (4 kits)',
    salesPitch: 'O presente perfeito para quem aprecia slow living, bem-estar e design autoral brasileiro. Encanta à primeira vista.',
    posMaterialsAvailable: ['Suporte de Vitrine', 'Tag de Presente Personalizável'],
    originCooperativa: 'Cooperativa Local da Cabruca & Ateliê Terra Bahiana',
    discountCode: 'B2BATACADO',
    discountDescription: 'Tabela de Revenda com 30% de desconto',
    buyUrl: SERA_CACAU_BUY_URL
  }
];

export const COURSES: Course[] = [
  {
    id: 'course-1',
    title: 'Academia de Vendas & Embaixadores Cabruca',
    description: 'Capacitação prática para gestores de empórios, cafeterias e equipe de balcão: domine a narrativa da Cabruca, encante o consumidor e potencialize a conversão com degustações no PDV.',
    category: 'Treinamento',
    instructor: 'Equipe de Educação Comercial & Luna Azevedo',
    duration: '7 Módulos de Balcão',
    coverImage: '/images/img_4189.jpg',
    certificateEnabled: true,
    communityEnabled: true,
    visibility: 'Somente Matriculadas',
    enrolledMemberIds: ['mem-1', 'mem-2', 'mem-3', 'mem-4'],
    totalHours: '7 Módulos Práticos',
    availableFrom: '2026-09-20T00:00:00',
    availableFromLabel: '20/09',
    isLockedUntilAvailable: true,
    modules: [
      {
        id: 'c1-m1',
        title: 'Módulo 1: Fundamentos e Origem Agroflorestal',
        description: 'Boas-vindas, história e imersão no solo da floresta Cabruca.',
        locked: false,
        classes: [
          {
            id: 'c1-m1-cl0',
            title: 'Introdução',
            duration: '0:55 min',
            videoUrl: 'https://vimeo.com/1215499110?fl=tl&fe=ec',
            summary: `Oi, nutris! Que alegria ter você aqui.

Amanhã começa o Cacau na Prática — sete manhãs, sete xícaras, sete temas. A cada dia, a Luna traz uma aula curta e uma receita nova para você preparar em casa e, depois, levar para a consulta.

Antes de começar, dois presentes para hoje:

→ O vídeo de boas-vindas da Luna (aqui em cima)
→ O guia de preparo (PDF anexo): como fazer o seu cacau em casa — na panela, no espumador ou direto na xícara. A Luna também gravou um vídeo mostrando o passo a passo.

Separe as suas Gotas de Cacau Puro (105 g, já no seu kit) e a primeira especiaria: canela-do-Ceilão. Amanhã a gente começa do começo — da floresta.

Até amanhã. Bom descanso.`,
            pdfAttachments: [
              {
                id: 'att-intro-1',
                name: 'Lista de Compras — Sete xícaras, uma lista',
                category: 'PDF',
                size: '25 KB',
                downloadUrl: '/Sera_Cacau_Lista_de_Compras.pdf'
              },
              {
                id: 'att-intro-2',
                name: 'Guia de Preparo — Como preparar o seu cacau em casa',
                category: 'PDF',
                size: '22 KB',
                downloadUrl: '/Sera_Cacau_Guia_de_Preparo.pdf'
              }
            ]
          },
          {
            id: 'c1-m1-cl1',
            title: 'Dia 01',
            duration: '3:19 min',
            videoUrl: 'https://vimeo.com/1215510972?fl=tl&fe=ec',
            summary: `Hoje não começa pela receita — começa pela floresta.

A Luna te leva à Cabruca, o sistema de agrofloresta da Costa do Cacau, e mostra por que o cacau cultivado à sombra tem mais polifenóis e flavonoides — e por que isso importa na sua prescrição.

→ Aula do dia: de onde vem esse cacau (e a diferença que importa)
→ Receita do dia: Cacau + Canela-do-Ceilão — a primeira xícara, a mais simples e a mais clínica (imagem abaixo)

Prepare, prove antes de adoçar e me conta: como foi a sua primeira xícara?`,
            pdfAttachments: [
              {
                id: 'att-dia-01',
                name: 'Material da Aula e Receita — Dia 01',
                category: 'PDF',
                size: '280 KB',
                downloadUrl: '/Sera_Cacau_Dia01.jpg'
              }
            ]
          },
          {
            id: 'c1-m1-cl2',
            title: 'Dia 02',
            duration: '4:49 min',
            videoUrl: 'https://vimeo.com/1222772421?share=copy',
            summary: `Bom dia, nutris. Segunda xícara.
"Mas cacau não tem cafeína? Não vai me agitar?" A resposta é química — e hoje a Luna explica. Teobromina não é cafeína: estímulo mais gradual, sem o pico e a queda do café. E o cacau puro é uma das fontes mais densas de magnésio que existem (~520 mg/100 g).

→ Aula do dia: o que o cacau faz no seu sistema nervoso
→ Receita do dia: Cacau + Cardamomo — calma e lucidez na mesma xícara (imagem abaixo)

Dica: uma pitada de sal marinho realça o amargor. Prove antes de adoçar.`,
            pdfAttachments: [
              {
                id: 'att-dia-02',
                name: 'Material da Aula e Receita — Dia 02',
                category: 'PDF',
                size: '229 KB',
                downloadUrl: '/Sera_Cacau_Dia02.jpg'
              }
            ]
          },
          {
            id: 'c1-m1-cl3',
            title: 'Dia 03',
            duration: '4:14 min',
            videoUrl: 'https://vimeo.com/1222782711?share=copy&fl=sv&fe=ci',
            summary: `Bom dia, nutris. Terceira xícara — e talvez o dia favorito da Luna.
Aquela vontade de chocolate nos dias antes da menstruação não é frescura: na fase lútea, o magnésio intracelular cai. O chocolate industrializado responde com açúcar; o cacau puro responde com magnésio de verdade e triptofano.

→ Aula do dia: cacau, magnésio e o ciclo feminino
→ Receita do dia: Cacau + Gengibre + Baunilha Bourbon Será — a xícara que o corpo pede quando a lua se aproxima (imagem abaixo)

Protocolo: 15 g por dia, nos 10 dias antes da menstruação.`,
            pdfAttachments: [
              {
                id: 'att-dia-03',
                name: 'Material da Aula e Receita — Dia 03',
                category: 'PDF',
                size: '255 KB',
                downloadUrl: '/Sera_Cacau_Dia03.jpg'
              }
            ]
          }
        ]
      },
      {
        id: 'c1-m2',
        title: 'Módulo 2: Prática Clínica, Ritual e Prescrição',
        description: 'Cadeia de valor, ritual de preparo e condução do paciente em consultório.',
        locked: false,
        classes: [
          {
            id: 'c1-m2-cl4',
            title: 'Dia 04',
            duration: '3:55 min',
            videoUrl: 'https://vimeo.com/1215498477?fl=tl&fe=ec',
            summary: `Bom dia, nutris. Quarta xícara.
Hoje a Luna não recomenda nenhum app de produtividade. Pelo contrário: ela fala sobre virar o celular para baixo, pegar a xícara e não fazer nada por um momento — e por que, neurologicamente, isso é das coisas mais produtivas que existem (oi, Default Mode Network). Desconectar para reconectar.

→ Aula do dia: foco, criatividade e o que acontece quando você desconecta
→ Receita do dia: Cacau + Cúrcuma + Pimenta-do-Reino — quando o foco precisa vir de dentro (imagem abaixo)

A pimenta não é opcional: ela eleva muito a biodisponibilidade da curcumina.`,
            pdfAttachments: [
              {
                id: 'att-dia-04',
                name: 'Material da Aula e Receita — Dia 04',
                category: 'PDF',
                size: '234 KB',
                downloadUrl: '/Sera_Cacau_Dia04.jpg'
              }
            ]
          },
          {
            id: 'c1-m2-cl5',
            title: 'Dia 05',
            duration: '3:25 min',
            videoUrl: 'https://vimeo.com/1215498476?fl=tl&fe=ec',
            summary: `Bom dia, nutris. Quinta xícara.

Onde está 90% da sua serotonina? No intestino. Hoje a Luna mostra como os flavonoides do cacau — sobretudo as procianidinas — chegam ao cólon e funcionam como prebiótico, alimentando Lactobacillus e Bifidobacterium.

→ Aula do dia: microbioma, eixo intestino-cérebro e o cacau como alimento funcional
→ Receita do dia: Cacau + Erva-Doce + Gengibre — a xícara que se senta com o seu intestino (imagem abaixo)

Boa para depois do almoço.`,
            pdfAttachments: [
              {
                id: 'att-dia-05',
                name: 'Material da Aula e Receita — Dia 05',
                category: 'PDF',
                size: '252 KB',
                downloadUrl: '/Sera_Cacau_Dia05.jpg'
              }
            ]
          },
          {
            id: 'c1-m2-cl6',
            title: 'Dia 06',
            duration: '4:50 min',
            videoUrl: 'https://vimeo.com/1222789958?share=copy&fl=sv&fe=ci',
            summary: `Bom dia, nutris. Sexta xícara.
Energia que sustenta — não a que sobe rápido e cai duas horas depois. Hoje a Luna fala de cacau no esporte (epicatequina, óxido nítrico, recuperação) e de uma saída honesta do ciclo café-exaustão-café.

→ Aula do dia: energia, movimento e a conversa sobre o café
→ Receita do dia: Cacau + Ashwagandha + Canela — a xícara para quando tudo está pedindo muito (imagem abaixo)

O desafio da Luna: troque o segundo café pelo cacau essa semana. Só isso.`,
            pdfAttachments: [
              {
                id: 'att-dia-06',
                name: 'Material da Aula e Receita — Dia 06',
                category: 'PDF',
                size: '238 KB',
                downloadUrl: '/Sera_Cacau_Dia06.jpg'
              }
            ]
          },
          {
            id: 'c1-m2-cl7',
            title: 'Dia 07',
            duration: '9:36 min',
            videoUrl: 'https://vimeo.com/1215498475?fl=tl&fe=ec',
            summary: `Boa tarde, nutris. 
Sétima e última xícara.

Hoje não tem conteúdo novo — tem integração. Como você leva tudo isso para a consulta: dose, frequência, para quem, e o que responder quando a paciente pergunta “mas não é só chocolate?”. A Luna fecha com o guia de prescrição e os cinco perfis que mais se beneficiam.

→ Aula do dia: da xícara à consulta — prescrever com segurança e confiança
→ Receita do dia: Cacau + Hibisco + Gengibre — a última xícara, a que guarda o coração (imagem abaixo)

Obrigada por esses sete dias com a gente. Isso é só o começo`,
            pdfAttachments: [
              {
                id: 'att-dia-07',
                name: 'Material da Aula e Receita — Dia 07',
                category: 'PDF',
                size: '284 KB',
                downloadUrl: '/Sera_Cacau_Dia07.jpg'
              }
            ]
          }
        ]
      }
    ]
  }
];

export const MEMBERS: Member[] = [];

export const COMMUNITY_POSTS: CommunityPost[] = [];

export const CAMPAIGNS: Campaign[] = [
  {
    id: 'camp-1',
    title: 'Ação de Degustação no Seu Ponto de Venda',
    description: 'Aumente o giro na sua loja! Solicite nosso Kit de Degustação Gratuito com 50 mini-provadores de Gotas de Cacau Puro e suporte de balcão para realizar um sábado sensorial com seus clientes.',
    imageUrl: '/images/artisanal_ceramics_1783964151303.jpg',
    date: 'Válido para pedidos faturados neste mês',
    buttonLabel: 'Solicitar Kit de Degustação no PDV',
    buttonUrl: '#',
    attachments: [ATTACHMENTS[2]]
  },
  {
    id: 'camp-2',
    title: 'Campanha de Páscoa & Inverno Saudável: Bonificação 5%',
    description: 'Antecipe seu estoque de reposição para as estações de maior consumo de chocolate e bebidas quentes. Pedidos atacado acima de R$ 2.500,00 contam com faturamento facilitado em até 42 dias e 5% de bonificação em caixas de Disc 36g para balcão.',
    imageUrl: '/images/brazilian_vanilla_1783964119929.jpg',
    date: 'Condição Especial para Parceiros Homologados',
    buttonLabel: 'Garantir Bonificação com Consultor',
    buttonUrl: '#'
  }
];

export const POINTS_HISTORY: PointsEntry[] = [];

export const REWARDS: GamificationReward[] = [
  { id: 'rew-1', title: 'Display de Madeira Cabruca para Balcão', description: 'Expositor rústico feito à mão em madeira de reflorestamento com suporte para 6 potes de Gotas e testeira informativa.', pointsRequired: 300, icon: 'Gift' },
  { id: 'rew-2', title: 'Kit com 100 Mini-Provadores de Degustação', description: 'Doses individuais de Gotas e Nibs embaladas para degustação imediata dos clientes na sua loja.', pointsRequired: 600, icon: 'Tag' },
  { id: 'rew-3', title: 'Verba de Cooperação de Marketing (R$ 500)', description: 'Crédito de marketing digital compartilhado para impulsionar anúncios de geolocalização no Instagram do seu empório.', pointsRequired: 1000, icon: 'Award' },
  { id: 'rew-4', title: 'Imersão na Fazenda Agroflorestal na Bahia', description: 'Visita guiada com tudo pago para o gestor da loja conhecer a colheita do cacau Cabruca e o processo produtivo em Ilhéus.', pointsRequired: 2000, icon: 'Sparkles' }
];
