/* CARRINHO DE COMPRAS */

import { productsData } from "./data/products.js";
import { WHATSAPP_NUMBER, CART_STORAGE_KEY } from "./config.js";

// Carrinho: lista de { id, qty }. Fica salvo no navegador (localStorage).
let cart = [];

// "6.890" -> 6890 | "360" -> 360 | "R$ 1.234,50" -> 1234.5
export function parsePrice(value) {
  const cleaned = String(value)
    .replace(/[^\d.,]/g, "")
    .replace(/\./g, "")
    .replace(",", ".");
  return parseFloat(cleaned) || 0;
}

export function formatBRL(value) {
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

// Chamada uma vez pelo main.js, depois que as partes do HTML carregaram:
// lê o carrinho salvo, liga o botão do header e desenha o painel.
export function initCart() {
  cart = loadCart();

  const cartBtn = document.getElementById("cart-btn");
  if (cartBtn) cartBtn.addEventListener("click", openCart);

  renderCart();
}

export function addToCart(productId) {
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

export function changeQty(productId, delta) {
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

export function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  saveCart();
  renderCart();
}

export function clearCart() {
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

export function renderCart() {
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

export function openCart() {
  const panel = document.getElementById("cart-panel");
  const overlay = document.getElementById("cart-overlay");
  if (!panel) return;
  panel.classList.remove("translate-x-full", "invisible");
  panel.setAttribute("aria-hidden", "false");
  if (overlay) overlay.classList.remove("hidden");
  document.body.classList.add("modal-open");
}

export function closeCart() {
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
export function checkoutWhatsApp() {
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
