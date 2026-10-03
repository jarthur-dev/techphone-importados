/* CATÁLOGO: RENDERIZAÇÃO, FILTRO POR MARCA E PESQUISA
   Os botões "Detalhes" e "Carrinho" chamam openProductModal e addToCart
   pelo onclick; essas funções são expostas em window no main.js. */

import { productsData } from "./data/products.js";

export function initCatalog() {
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

  // Filtro por categorias (marcas)
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

  // Pesquisa em tempo real
  const searchInput = document.getElementById("catalog-search");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchTerm = e.target.value.toLowerCase().trim();
      applyFilters();
    });
  }
}
