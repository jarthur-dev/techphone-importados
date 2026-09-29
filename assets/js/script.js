/* LÓGICA PRINCIPAL DA APLICAÇÃO (DOM, FILTROS E SIMULADOR) */

// 1. ARRAY DOS PRODUTOS DO CATÁLOGO PRINCIPAL
const productsData = [
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
    name: "Apple ipad 11",
    brandName: "Apple",
    category: "apple",
    specs: "Estelar • 512GB • Tela Super Retina",
    badge: "Oferta",
    badgeColor: "bg-emerald-600",
    originalPrice: "R$ 7,314,00",
    price: "6.000",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-air-finish-select-gallery-202405-11inch-blue-wificell_FMT_WHH?wid=1280&hei=720&fmt=jpeg&qlt=90&.v=1713820066534",
  },
  {
    id: "poco-pad-x1",
    name: "Poco Pad X1",
    brandName: "Xiaomi",
    category: "xiaomi",
    specs: "Estelar • 521GB • Tela Super Retina",
    badge: "Oferta",
    badgeColor: "bg-emerald-600",
    originalPrice: "R$ 2.400,00",
    price: "1.800",
    image:
      "https://cdn.awsli.com.br/2500x2500/2549/2549769/produto/399291363/04-9yxutlyfie.png",
  },
  {
    id: "samsung-galaxy-tab-s11",
    name: "Samsung Galaxy Tab S11 ",
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
    price: "360,00",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_882597-MLB117924733525_092026-F-fone-ouvido-bluetooth-54-samsung-galaxy-buds-core-original.webp",
  },
];

// 2. ARRAY DOS 5 PRODUTOS MAIS POPULARES (CARROSSEL HERO)
const popularProducts = [
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
    specs: "Titânio Preto • 256GB • Galaxy AI",
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
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_801940-MLA95679259962_102025-F.webp",
  },
];

// Espera a árvore do DOM carregar completamente antes de rodar os scripts
document.addEventListener("DOMContentLoaded", () => {
  // ==========================================
  // A. LÓGICA DO CARROSSEL HERO (TOP 5 POPULARES)
  // ==========================================
  const track = document.getElementById("hero-carousel-track");
  const dotsContainer = document.getElementById("carousel-dots");
  const prevBtn = document.getElementById("carousel-prev");
  const nextBtn = document.getElementById("carousel-next");

  if (track && dotsContainer && prevBtn && nextBtn) {
    let currentSlide = 0;

    track.innerHTML = popularProducts
      .map(
        (product) => `
        <div class="w-full flex-shrink-0 min-w-full space-y-4 px-1 box-border">
            <!-- Badge Superior (Sem o elemento da nota/estrelas) -->
            <div class="flex items-center justify-start">
                <span class="inline-flex items-center bg-brand-orange/20 text-brand-orange border border-brand-orange/40 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  ${product.badge}
                </span>
            </div>

            <!-- Imagem do Smartphone -->
            <div class="relative py-2 flex justify-center group">
                <img src="${product.image}" 
                     alt="${product.name}" 
                     class="h-56 sm:h-60 object-contain drop-shadow-[0_15px_20px_rgba(0,0,0,0.7)] group-hover:scale-105 transition-transform duration-500 rounded-2xl"
                     onerror="this.src='https://placehold.co/400x500/1E293B/ffffff?text=${encodeURIComponent(product.name)}'">
            </div>

            <!-- Nome e Especificações -->
            <div>
                <h3 class="text-xl sm:text-2xl font-extrabold text-white truncate">${product.name}</h3>
                <p class="text-xs text-slate-400 mt-0.5 truncate">${product.specs}</p>
            </div>

            <!-- Preço -->
            <div class="flex items-end justify-between pt-3 border-t border-slate-800/80">
                <div>
                    <p class="text-xs text-slate-400 line-through">De ${product.oldPrice}</p>
                    <p class="text-2xl font-black text-brand-orange">R$ ${product.price}<span class="text-sm font-normal text-slate-300">,00</span></p>
                    <p class="text-[11px] text-brand-whatsapp font-medium">À vista no Pix com 10% OFF</p>
                </div>
            </div>
        </div>
    `,
      )
      .join("");

    dotsContainer.innerHTML = popularProducts
      .map(
        (_, index) => `
            <button class="carousel-dot h-2 rounded-full ${index === 0 ? "w-6 bg-brand-orange active" : "w-2 bg-slate-700"}" 
                    aria-label="Ir para slide ${index + 1}" 
                    data-index="${index}"></button>
        `,
      )
      .join("");

    const dots = dotsContainer.querySelectorAll(".carousel-dot");

    function goToSlide(index) {
      currentSlide = (index + popularProducts.length) % popularProducts.length;
      track.style.transform = `translateX(-${currentSlide * 100}%)`;

      dots.forEach((dot, idx) => {
        if (idx === currentSlide) {
          dot.classList.add("w-6", "bg-brand-orange", "active");
          dot.classList.remove("w-2", "bg-slate-700");
        } else {
          dot.classList.remove("w-6", "bg-brand-orange", "active");
          dot.classList.add("w-2", "bg-slate-700");
        }
      });
    }

    prevBtn.addEventListener("click", () => goToSlide(currentSlide - 1));
    nextBtn.addEventListener("click", () => goToSlide(currentSlide + 1));

    dots.forEach((dot) => {
      dot.addEventListener("click", (e) => {
        goToSlide(parseInt(e.target.getAttribute("data-index")));
      });
    });

    let autoSlide = setInterval(() => goToSlide(currentSlide + 1), 5000);
    const container = document.getElementById("hero-carousel-container");
    if (container) {
      container.addEventListener("mouseenter", () => clearInterval(autoSlide));
      container.addEventListener("mouseleave", () => {
        autoSlide = setInterval(() => goToSlide(currentSlide + 1), 5000);
      });
    }
  }

  // ==========================================
  // B. LÓGICA DO MENU MOBILE
  // ==========================================
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });

    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  }

  // ==========================================
  // C. RENDERIZAÇÃO DINÂMICA DO CATÁLOGO
  // ==========================================
  const productGrid = document.getElementById("product-grid");

  function renderProducts(items) {
    if (!productGrid) return;

    if (items.length === 0) {
      productGrid.innerHTML = `
            <div class="col-span-full text-center py-12 text-slate-500">
                <i class="fa-solid fa-mobile-xmark text-4xl mb-3"></i>
                <p class="text-base font-semibold">Nenhum smartphone encontrado para esta busca.</p>
            </div>
        `;
      return;
    }

    productGrid.innerHTML = items
      .map(
        (product) => `
        <div class="glass-card rounded-2xl p-6 glass-card-hover flex flex-col justify-between space-y-4 relative group">
            <!-- Tag superior -->
            <div class="flex items-center justify-between">
                <span class="${product.badgeColor} text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center">
                    ${product.badge}
                </span>
                <span class="text-xs text-slate-400 font-semibold">${product.brandName}</span>
            </div>

            <!-- Imagem do Smartphone com link para detalhes -->
            <a href="product.html?id=${product.id}" class="py-2 flex justify-center cursor-pointer">
                <img src="${product.image}" 
                     alt="${product.name}" 
                     class="h-48 object-contain group-hover:scale-105 transition-transform duration-300 rounded-xl"
                     onerror="this.src='https://placehold.co/400x400/1E293B/ffffff?text=${encodeURIComponent(product.name)}'">
            </a>

            <!-- Detalhes do produto -->
            <div class="space-y-1">
                <a href="product.html?id=${product.id}" class="hover:underline">
                    <h3 class="text-lg font-bold text-white group-hover:text-brand-orange transition-colors">${product.name}</h3>
                </a>
                <p class="text-xs text-slate-400">${product.specs}</p>
            </div>

            <!-- Preço e Ações (Detalhes + Carrinho) -->
            <div class="pt-4 border-t border-slate-800 space-y-3">
                <div>
                    <p class="text-[11px] text-slate-500 line-through">De ${product.originalPrice}</p>
                    <p class="text-xl font-black text-brand-orange">R$ ${product.price}<span class="text-xs font-normal text-slate-300">,00</span></p>
                </div>

                <!-- Botões de Ação Lado a Lado -->
                <div class="grid grid-cols-2 gap-2">
                    <a href="product.html?id=${product.id}" 
                       class="inline-flex items-center justify-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700/80 px-3 py-2.5 rounded-xl font-bold text-xs transition-colors text-center">
                        <i class="fa-solid fa-circle-info text-xs"></i>
                        <span>Detalhes</span>
                    </a>

                    <button onclick="addToCart('${product.id}')" 
                            class="inline-flex items-center justify-center gap-1.5 bg-brand-orange hover:bg-amber-600 text-white px-3 py-2.5 rounded-xl font-bold text-xs shadow-md transition-all active:scale-95">
                        <i class="fa-solid fa-cart-shopping text-xs"></i>
                        <span>Carrinho</span>
                    </button>
                </div>
            </div>
        </div>
    `,
      )
      .join("");
  }

  // Renderização inicial
  renderProducts(productsData);

  // ==========================================
  // D. FILTRO POR CATEGORIAS (MARCAS)
  // ==========================================
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => {
        btn.classList.remove("active", "bg-brand-orange", "text-white");
        btn.classList.add("glass-card", "text-slate-300");
      });

      button.classList.add("active", "bg-brand-orange", "text-white");
      button.classList.remove("glass-card", "text-slate-300");

      const category = button.getAttribute("data-category");
      if (category === "all") {
        renderProducts(productsData);
      } else {
        const filtered = productsData.filter((p) => p.category === category);
        renderProducts(filtered);
      }
    });
  });

  // ==========================================
  // E. PESQUISA EM TEMPO REAL
  // ==========================================
  const searchInput = document.getElementById("catalog-search");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const term = e.target.value.toLowerCase().trim();
      const filtered = productsData.filter(
        (p) =>
          p.name.toLowerCase().includes(term) ||
          p.specs.toLowerCase().includes(term) ||
          p.brandName.toLowerCase().includes(term),
      );
      renderProducts(filtered);
    });
  }

  // ==========================================
  // F. SIMULADOR DE TRADE-IN
  // ==========================================
  const nameInput = document.getElementById("current-phone-name");
  const valueInput = document.getElementById("current-phone-value");
  const conditionSelect = document.getElementById("phone-condition");
  const targetSelect = document.getElementById("target-phone");
  const estimatedValueEl = document.getElementById("estimated-value");
  const differenceTextEl = document.getElementById("difference-text");
  const whatsappBtn = document.getElementById("send-tradein-whatsapp");

  if (
    nameInput &&
    valueInput &&
    conditionSelect &&
    targetSelect &&
    estimatedValueEl &&
    differenceTextEl &&
    whatsappBtn
  ) {
    function calculateTradeIn() {
      const userValue = parseFloat(valueInput.value) || 0;
      const conditionFactor = parseFloat(conditionSelect.value) || 1.0;
      const targetPrice = parseFloat(targetSelect.value) || 0;

      if (userValue > 0 && nameInput.value.trim() !== "") {
        const estimatedEvaluation = userValue * conditionFactor;
        const difference = targetPrice - estimatedEvaluation;

        estimatedValueEl.textContent = estimatedEvaluation.toLocaleString(
          "pt-BR",
          { style: "currency", currency: "BRL" },
        );

        if (difference > 0) {
          differenceTextEl.textContent = `Volta de ${difference.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })} no modelo novo.`;
        } else {
          differenceTextEl.textContent = `Seu aparelho cobre 100% do valor do novo!`;
        }

        whatsappBtn.disabled = false;
        whatsappBtn.classList.remove("opacity-50", "cursor-not-allowed");
      } else {
        estimatedValueEl.textContent = "R$ 0,00";
        differenceTextEl.textContent =
          "Informe o modelo e valor atual para calcular a diferença.";
        whatsappBtn.disabled = true;
        whatsappBtn.classList.add("opacity-50", "cursor-not-allowed");
      }
    }

    nameInput.addEventListener("input", calculateTradeIn);
    valueInput.addEventListener("input", calculateTradeIn);
    conditionSelect.addEventListener("change", calculateTradeIn);
    targetSelect.addEventListener("change", calculateTradeIn);

    // Configurar a mensagem do WhatsApp para o clique
    whatsappBtn.onclick = () => {
      const currentName = nameInput.value.trim();
      const targetName = targetSelect.options[targetSelect.selectedIndex]
        .getAttribute("data-targetname");
      const conditionText = conditionSelect.options[conditionSelect.selectedIndex].text;

      const message = `Olá! Fiz uma simulação de Trade-In no site:\n` +
        `- *Meu Aparelho:* ${currentName}\n` +
        `- *Estado:* ${conditionText}\n` +
        `- *Avaliação Estimada:* ${estimatedValueEl.textContent}\n` +
        `- *Aparelho Desejado:* ${targetName}\n` +
        `- *Valor Diferença:* ${differenceTextEl.textContent}`;

      // SUBSTITUA O NÚMERO ABAIXO PELO SEU NÚMERO DO WHATSAPP COM DDD
      window.open(
        `https://wa.me/5581999999999?text=${encodeURIComponent(message)}`,
        "_blank",
      );
    };
  } else {
    // Resetar Interface se o formulário estiver incompleto
    if (estimatedValueEl) estimatedValueEl.textContent = "R$ 0,00";
    if (differenceTextEl) {
      differenceTextEl.textContent =
        "Informe o modelo e valor atual para calcular a diferença.";
    }
    if (whatsappBtn) {
      whatsappBtn.disabled = true;
      whatsappBtn.classList.add("opacity-50", "cursor-not-allowed");
      whatsappBtn.onclick = null;
    }
  }

  // ==========================================
  // G. ACORDEÃO DO FAQ
  // ==========================================
  const faqToggles = document.querySelectorAll(".faq-toggle");
  faqToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const content = toggle.nextElementSibling;
      const icon = toggle.querySelector("i");

      if (content) content.classList.toggle("hidden");
      if (icon) icon.classList.toggle("rotate-180");
    });
  });
});
