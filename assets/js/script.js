/* LÓGICA PRINCIPAL DA APLICAÇÃO (DOM, FILTROS E SIMULADOR) */

// 1. ARRAY DOS PRODUTOS DO CATÁLOGO PRINCIPAL

// Carrinho: lista de { id, qty }. Fica salvo no navegador (localStorage).
let cart = loadCart();

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

document.addEventListener("DOMContentLoaded", () => {
  // Espera a árvore do DOM carregar completamente antes de rodar os scripts
  // Carrinho: abre o painel e desenha o que já estava salvo
  const cartBtn = document.getElementById("cart-btn");
  if (cartBtn) cartBtn.addEventListener("click", openCart);
  renderCart();

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
                     onerror="this.onerror=null;this.src='https://placehold.co/400x500/1E293B/ffffff?text=${encodeURIComponent(product.name)}'">
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
        <i class="fa-solid fa-magnifying-glass text-4xl mb-3"></i>
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

          <!-- Imagem do Smartphone -->
          <div onclick="openProductModal('${product.id}')" class="py-2 flex justify-center cursor-pointer">
              <img src="${product.image}" 
                   alt="${product.name}" 
                   class="h-48 object-contain group-hover:scale-105 transition-transform duration-300 rounded-xl"
                   onerror="this.onerror=null;this.src='https://placehold.co/400x400/1E293B/ffffff?text=${encodeURIComponent(product.name)}'">
          </div>

          <!-- Detalhes do produto -->
          <div class="space-y-1">
              <button onclick="openProductModal('${product.id}')" class="text-left hover:underline">
                  <h3 class="text-lg font-bold text-white group-hover:text-brand-orange transition-colors">${product.name}</h3>
              </button>
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
                  <button onclick="openProductModal('${product.id}')" 
                          class="inline-flex items-center justify-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700/80 px-3 py-2.5 rounded-xl font-bold text-xs transition-colors text-center cursor-pointer">
                      <i class="fa-solid fa-circle-info text-xs"></i>
                      <span>Detalhes</span>
                  </button>

                  <button onclick="addToCart('${product.id}')" 
                          class="inline-flex items-center justify-center gap-1.5 bg-brand-orange hover:bg-amber-600 text-white px-3 py-2.5 rounded-xl font-bold text-xs shadow-md transition-all active:scale-95 cursor-pointer">
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

  // Estado dos filtros (categoria + busca funcionam juntos)
  let activeCategory = "all";
  let searchTerm = "";

  function applyFilters() {
    const filtered = productsData.filter((p) => {
      const matchCategory =
        activeCategory === "all" || p.category === activeCategory;
      const matchSearch =
        p.name.toLowerCase().includes(searchTerm) ||
        p.specs.toLowerCase().includes(searchTerm) ||
        p.brandName.toLowerCase().includes(searchTerm);
      return matchCategory && matchSearch;
    });
    renderProducts(filtered);
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

      activeCategory = button.getAttribute("data-category");
      applyFilters();
    });
  });

  // ==========================================
  // E. PESQUISA EM TEMPO REAL
  // ==========================================
  const searchInput = document.getElementById("catalog-search");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchTerm = e.target.value.toLowerCase().trim();
      applyFilters();
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
          differenceTextEl.textContent = `Você paga a diferença de ${difference.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })} no modelo novo.`;
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

    // Estado inicial: botão do WhatsApp desabilitado até preencher os dados
    calculateTradeIn();

    // Configurar a mensagem do WhatsApp para o clique
    whatsappBtn.onclick = () => {
      const currentName = nameInput.value.trim();
      const targetName =
        targetSelect.options[targetSelect.selectedIndex].getAttribute(
          "data-targetname",
        );
      const conditionText =
        conditionSelect.options[conditionSelect.selectedIndex].text;

      const message =
        `Olá! Fiz uma simulação de Trade-In no site:\n` +
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

// ==========================================
// I. CARRINHO DE COMPRAS
// ==========================================

const CART_STORAGE_KEY = "techphone-cart";

// "6.890" -> 6890 | "360" -> 360 | "R$ 1.234,50" -> 1234.5
function parsePrice(value) {
  const cleaned = String(value)
    .replace(/[^\d.,]/g, "")
    .replace(/\./g, "")
    .replace(",", ".");
  return parseFloat(cleaned) || 0;
}

function formatBRL(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(CART_STORAGE_KEY));
    if (!Array.isArray(saved)) return [];
    // ignora itens de produtos que não existem mais no catálogo
    return saved.filter(
      (item) =>
        item &&
        Number.isInteger(item.qty) &&
        item.qty > 0 &&
        productsData.some((p) => p.id === item.id),
    );
  } catch (err) {
    return [];
  }
}

function saveCart() {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch (err) {
    // navegador bloqueou o armazenamento: o carrinho segue funcionando só nesta visita
  }
}

function addToCart(productId) {
  const product = productsData.find((p) => p.id === productId);

  if (!product) {
    console.log("Produto não encontrado.");
    return;
  }

  const existing = cart.find((item) => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: productId, qty: 1 });
  }

  saveCart();
  renderCart();
  showCartToast(product.name);
}

function changeQty(productId, delta) {
  const item = cart.find((i) => i.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
    return;
  }

  saveCart();
  renderCart();
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  saveCart();
  renderCart();
}

function clearCart() {
  cart = [];
  saveCart();
  renderCart();
}

function getCartTotals() {
  let count = 0;
  let total = 0;
  cart.forEach((item) => {
    const product = productsData.find((p) => p.id === item.id);
    if (!product) return;
    count += item.qty;
    total += parsePrice(product.price) * item.qty;
  });
  return { count, total };
}

function renderCart() {
  const itemsEl = document.getElementById("cart-items");
  const emptyEl = document.getElementById("cart-empty");
  const footerEl = document.getElementById("cart-footer");
  const totalEl = document.getElementById("cart-total");
  const badgeEl = document.getElementById("cart-count");
  if (!itemsEl || !emptyEl || !footerEl) return;

  const { count, total } = getCartTotals();

  // contador no ícone do header
  if (badgeEl) {
    badgeEl.textContent = count > 99 ? "99+" : count;
    badgeEl.classList.toggle("hidden", count === 0);
  }

  emptyEl.classList.toggle("hidden", count > 0);
  footerEl.classList.toggle("hidden", count === 0);
  if (totalEl) totalEl.textContent = formatBRL(total);

  itemsEl.innerHTML = cart
    .map((item) => {
      const product = productsData.find((p) => p.id === item.id);
      if (!product) return "";
      const unit = parsePrice(product.price);
      const fallback = `https://placehold.co/200x200/1E293B/ffffff?text=${encodeURIComponent(product.name)}`;

      return `
      <div class="flex gap-3 bg-slate-800/50 border border-slate-800 rounded-2xl p-3">
        <img src="${product.image}" alt="${product.name}"
             class="w-20 h-20 object-contain rounded-xl bg-slate-800 flex-shrink-0"
             onerror="this.onerror=null;this.src='${fallback}'">

        <div class="flex-1 min-w-0 flex flex-col justify-between">
          <div class="flex items-start justify-between gap-2">
            <div class="min-w-0">
              <p class="text-sm font-bold text-white truncate">${product.name}</p>
              <p class="text-xs text-slate-400">${formatBRL(unit)} cada</p>
            </div>
            <button onclick="removeFromCart('${product.id}')" aria-label="Remover ${product.name}"
                    class="text-slate-500 hover:text-red-400 transition-colors cursor-pointer">
              <i class="fa-solid fa-trash-can text-sm"></i>
            </button>
          </div>

          <div class="flex items-center justify-between mt-2">
            <div class="inline-flex items-center bg-slate-900 border border-slate-700 rounded-lg">
              <button onclick="changeQty('${product.id}', -1)" aria-label="Diminuir quantidade"
                      class="w-8 h-8 text-slate-300 hover:text-brand-orange cursor-pointer">
                <i class="fa-solid fa-minus text-xs"></i>
              </button>
              <span class="w-8 text-center text-sm font-bold">${item.qty}</span>
              <button onclick="changeQty('${product.id}', 1)" aria-label="Aumentar quantidade"
                      class="w-8 h-8 text-slate-300 hover:text-brand-orange cursor-pointer">
                <i class="fa-solid fa-plus text-xs"></i>
              </button>
            </div>
            <p class="text-sm font-black text-brand-orange">${formatBRL(unit * item.qty)}</p>
          </div>
        </div>
      </div>`;
    })
    .join("");
}

function openCart() {
  const panel = document.getElementById("cart-panel");
  const overlay = document.getElementById("cart-overlay");
  if (!panel) return;
  panel.classList.remove("translate-x-full", "invisible");
  panel.setAttribute("aria-hidden", "false");
  if (overlay) overlay.classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function closeCart() {
  const panel = document.getElementById("cart-panel");
  const overlay = document.getElementById("cart-overlay");
  if (!panel) return;
  panel.classList.add("translate-x-full", "invisible");
  panel.setAttribute("aria-hidden", "true");
  if (overlay) overlay.classList.add("hidden");
  // só libera o scroll se o modal de produto também estiver fechado
  const productModal = document.getElementById("product-modal");
  if (!productModal || productModal.classList.contains("hidden")) {
    document.body.classList.remove("modal-open");
  }
}

// Envia o pedido pronto para o WhatsApp da loja
function checkoutWhatsApp() {
  if (cart.length === 0) return;

  const lines = cart.map((item) => {
    const product = productsData.find((p) => p.id === item.id);
    if (!product) return "";
    const subtotal = parsePrice(product.price) * item.qty;
    return `- ${item.qty}x ${product.name} (${product.specs}) - ${formatBRL(subtotal)}`;
  });

  const { total } = getCartTotals();
  const message =
    `Olá! Gostaria de fazer um pedido pelo site:\n\n` +
    `${lines.filter(Boolean).join("\n")}\n\n` +
    `*Total:* ${formatBRL(total)}`;

  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
    "_blank",
  );
}

// Aviso rápido ao adicionar um produto
let cartToastTimer;
function showCartToast(productName) {
  let toast = document.getElementById("cart-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "cart-toast";
    toast.setAttribute("role", "status");
    toast.className =
      "fixed bottom-24 right-6 z-[80] max-w-xs bg-slate-900 border border-brand-orange/40 text-white text-sm font-medium px-4 py-3 rounded-xl shadow-2xl transition-all duration-300";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fa-solid fa-circle-check text-brand-orange mr-2"></i>${productName} adicionado ao carrinho`;
  toast.classList.remove("opacity-0", "translate-y-2");

  clearTimeout(cartToastTimer);
  cartToastTimer = setTimeout(() => {
    toast.classList.add("opacity-0", "translate-y-2");
  }, 2200);
}

// ==========================================
// H. MODAL DE DETALHES DO PRODUTO
// ==========================================

// TROQUE pelo número real da loja (DDI + DDD + número)
const WHATSAPP_NUMBER = "5581999999999";

function openProductModal(productId) {
  const product = productsData.find((p) => p.id === productId);
  const modal = document.getElementById("product-modal");

  if (!product || !modal) return;

  const fallbackImg = `https://placehold.co/400x400/1E293B/ffffff?text=${encodeURIComponent(product.name)}`;

  const img = document.getElementById("modal-image");
  img.onerror = function () {
    this.onerror = null;
    this.src = fallbackImg;
  };
  img.src = product.image;
  img.alt = product.name;

  const badge = document.getElementById("modal-badge");
  badge.textContent = product.badge;
  badge.className = `${product.badgeColor} text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider`;

  document.getElementById("modal-brand").textContent = product.brandName;
  document.getElementById("modal-name").textContent = product.name;

  document.getElementById("modal-specs").innerHTML = product.specs
    .split("•")
    .map((s) => s.trim())
    .filter(Boolean)
    .map(
      (s) =>
        `<span class="bg-slate-800 border border-slate-700 text-slate-200 text-xs font-medium px-3 py-1.5 rounded-lg">${s}</span>`,
    )
    .join("");

  document.getElementById("modal-old-price").textContent =
    `De ${product.originalPrice}`;
  document.getElementById("modal-price").innerHTML =
    `R$ ${product.price}<span class="text-sm font-normal text-slate-300">,00</span>`;

  // Botão de carrinho: só chama a função addToCart que já existe
  const addBtn = document.getElementById("modal-add-cart");
  const addBtnHTML =
    '<i class="fa-solid fa-cart-shopping text-sm"></i><span>Adicionar ao carrinho</span>';
  addBtn.innerHTML = addBtnHTML;
  addBtn.onclick = () => {
    addToCart(product.id);
    addBtn.innerHTML =
      '<i class="fa-solid fa-check text-sm"></i><span>Adicionado!</span>';
    setTimeout(() => {
      addBtn.innerHTML = addBtnHTML;
    }, 1500);
  };

  // Botão de WhatsApp com mensagem pronta do produto
  const message = `Olá! Tenho interesse no ${product.name} (${product.specs}) por R$ ${product.price},00. Ainda está disponível?`;
  document.getElementById("modal-whatsapp").href =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  modal.classList.remove("hidden");
  document.body.classList.add("modal-open");
  document.getElementById("modal-close").focus();
}

function closeProductModal() {
  const modal = document.getElementById("product-modal");
  if (!modal) return;
  modal.classList.add("hidden");
  const cartPanel = document.getElementById("cart-panel");
  if (!cartPanel || cartPanel.classList.contains("invisible")) {
    document.body.classList.remove("modal-open");
  }
}

// Fecha o modal com a tecla Esc
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeProductModal();
    closeCart();
  }
});