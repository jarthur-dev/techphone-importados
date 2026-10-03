/* MODAL DE DETALHES DO PRODUTO */

import { productsData } from "./data/products.js";
import { WHATSAPP_NUMBER } from "./config.js";
import { addToCart } from "./cart.js";

export function openProductModal(productId) {
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

export function closeProductModal() {
  const modal = document.getElementById("product-modal");
  if (!modal) return;
  modal.classList.add("hidden");
  const cartPanel = document.getElementById("cart-panel");
  if (!cartPanel || cartPanel.classList.contains("invisible")) {
    document.body.classList.remove("modal-open");
  }
}
