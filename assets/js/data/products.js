/* DADOS DOS PRODUTOS
   Para cadastrar, editar ou remover um produto, mexa só neste arquivo. */

// 1. PRODUTOS DO CATÁLOGO PRINCIPAL
export const productsData = [
  {
    id: "iphone-15-pro-max",
    name: "iPhone 15 Pro Max",
    brandName: "Apple",
    category: "apple",
    specs: "Branco • 256GB • Câmera 48MP",
    badge: "Mais Vendido",
    badgeColor: "bg-brand-orange",
    originalPrice: "R$ 8.999,00",
    price: "6.890",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_666226-MLA95937699435_102025-F.webp",
  },
  {
    id: "samsung-galaxy-s24-ultra",
    name: "Samsung Galaxy S24 Ultra",
    brandName: "Samsung",
    category: "samsung",
    specs: "Titânio Preto • 512GB • Galaxy AI",
    badge: "Novo",
    badgeColor: "bg-blue-600",
    originalPrice: "R$ 4.499,00",
    price: "3.899",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_678681-MLA96609736529_102025-F.webp",
  },
  {
    id: "iphone-15-pro",
    name: "iPhone 15 Pro",
    brandName: "Apple",
    category: "apple",
    specs: "Titânio Preto • 128GB • Câmera Tripla",
    badge: "Destaque",
    badgeColor: "bg-yellow-500",
    originalPrice: "R$ 6.900,00",
    price: "5.600",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_768868-MLA96868173301_102025-F.webp",
  },
  {
    id: "redmi-note-17-pro-max",
    name: "Redmi Note 17 Pro Max",
    brandName: "Xiaomi",
    category: "xiaomi",
    specs: "Preto • 512GB • Lentes Leica",
    badge: "Câmera Pro",
    badgeColor: "bg-amber-600",
    originalPrice: "R$ 4.790,00",
    price: "3.353",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_704043-MLA117969234553_092026-F.webp",
  },
  {
    id: "iphone-14",
    name: "iPhone 14",
    brandName: "Apple",
    category: "apple",
    specs: "Estelar • 128GB • Tela Super Retina",
    badge: "Oferta",
    badgeColor: "bg-emerald-600",
    originalPrice: "R$ 4.999,00",
    price: "3.790",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_801940-MLA95679259962_102025-F.webp",
  },
  {
    id: "redmi-note-15-pro",
    name: "Redmi Note 15 PRO",
    brandName: "Xiaomi",
    category: "xiaomi",
    specs: "Estelar • 256GB • Tela Super Retina",
    badge: "Oferta",
    badgeColor: "bg-emerald-600",
    originalPrice: "R$ 1.867,00",
    price: "1.500",
    image:
      "https://acdn-us.mitiendanube.com/stores/005/392/347/products/azul-eb735109c48fa21ca617679214083043-1024-1024.webp",
  },
  {
    id: "redmi-magic-11-pro",
    name: "Redmi Magic 11 Pro",
    brandName: "Xiaomi",
    category: "xiaomi",
    specs: "Estelar • 512GB • Tela Super Retina",
    badge: "Oferta",
    badgeColor: "bg-emerald-600",
    originalPrice: "R$ 5.249,00",
    price: "4.300",
    image:
      "https://www.edivaldobrito.com.br/wp-content/uploads/2025/10/redmagic-11-pro-o-primeiro-smartphone-com-refrigeracao-liquida-a-venda.webp",
  },
  {
    id: "apple-ipad-11",
    name: "Apple iPad 11",
    brandName: "Apple",
    category: "apple",
    specs: "Estelar • 512GB • Tela Super Retina",
    badge: "Oferta",
    badgeColor: "bg-emerald-600",
    originalPrice: "R$ 7.314,00",
    price: "6.000",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-air-finish-select-gallery-202405-11inch-blue-wificell_FMT_WHH?wid=1280&hei=720&fmt=jpeg&qlt=90&.v=1713820066534",
  },
  {
    id: "poco-pad-x1",
    name: "Poco Pad X1",
    brandName: "Xiaomi",
    category: "xiaomi",
    specs: "Estelar • 512GB • Tela Super Retina",
    badge: "Oferta",
    badgeColor: "bg-emerald-600",
    originalPrice: "R$ 2.400,00",
    price: "1.800",
    image:
      "https://cdn.awsli.com.br/2500x2500/2549/2549769/produto/399291363/04-9yxutlyfie.png",
  },
  {
    id: "samsung-galaxy-tab-s11",
    name: "Samsung Galaxy Tab S11",
    brandName: "Samsung",
    category: "samsung",
    specs: "Possui GPS • 512GB • Android 16.0",
    badge: "Novo",
    badgeColor: "bg-blue-600",
    originalPrice: "R$ 7.999,00",
    price: "6.000",
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/br/feature/others/br-feature-galaxy-tab-s11-ultra-sm-x930-548896241?$550_N_JPG$",
  },
  {
    id: "airpods-pro-3",
    name: "AirPods Pro 3",
    brandName: "Apple",
    category: "acessorios",
    specs: "Tradutor • True Wireless • Cancelamento de Ruído",
    badge: "Destaque",
    badgeColor: "bg-yellow-500",
    originalPrice: "R$ 2.699,00",
    price: "2.300",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-pro-3-hero-select-202509_FMT_WHH?wid=752&hei=636&fmt=jpeg&qlt=90&.v=1758077264181",
  },
  {
    id: "samsung-galaxy-buds-core",
    name: "Samsung Galaxy Buds Core",
    brandName: "Samsung",
    category: "acessorios",
    specs: "Bluetooth 5.4 • True Wireless • Cancelamento de Ruído",
    badge: "Oferta",
    badgeColor: "bg-emerald-600",
    originalPrice: "R$ 450,00",
    price: "360",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_882597-MLB117924733525_092026-F-fone-ouvido-bluetooth-54-samsung-galaxy-buds-core-original.webp",
  },
];

// 2. OS 5 PRODUTOS MAIS POPULARES (CARROSSEL HERO)
export const popularProducts = [
  {
    name: "iPhone 15 Pro Max",
    specs: "Branco • 256GB • Câmera 48MP",
    badge: '<i class="fa-solid fa-fire text-xs mr-1"></i> Mais Vendido',
    oldPrice: "R$ 8.999,00",
    price: "6.890",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_666226-MLA95937699435_102025-F.webp",
  },
  {
    name: "Samsung Galaxy S24 Ultra",
    specs: "Titânio Preto • 512GB • Galaxy AI",
    badge: '<i class="fa-solid fa-bolt text-xs mr-1"></i> Top Android',
    oldPrice: "R$ 4.499,00",
    price: "3.899",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_678681-MLA96609736529_102025-F.webp",
  },
  {
    name: "iPhone 15 Pro",
    specs: "Titânio Preto • 128GB • Câmera Tripla",
    badge: '<i class="fa-solid fa-star text-xs mr-1"></i> Destaque',
    oldPrice: "R$ 6.900,00",
    price: "5.600",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_768868-MLA96868173301_102025-F.webp",
  },
  {
    name: "Redmi Note 17 Pro Max",
    specs: "Preto • 512GB • Lentes Leica",
    badge: '<i class="fa-solid fa-camera text-xs mr-1"></i> Câmeras Leica',
    oldPrice: "R$ 4.790,00",
    price: "3.353",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_704043-MLA117969234553_092026-F.webp",
  },
  {
    name: "iPhone 14",
    specs: "Estelar • 128GB • Tela Super Retina",
    badge: '<i class="fa-solid fa-tag text-xs mr-1"></i> Custo-Benefício',
    oldPrice: "R$ 4.999,00",
    price: "3.790",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_801940-MLA95679259962_102025-F.webp",
  },
];
