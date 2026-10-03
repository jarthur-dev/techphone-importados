/* PONTO DE ENTRADA DO SITE
   É o único script que o index.html carrega. Ele junta os módulos e
   inicia cada parte na ordem certa. */

import { loadIncludes } from "./includes.js";
import { initCarousel } from "./carousel.js";
import { initMobileMenu } from "./menu.js";
import { initCatalog } from "./catalog.js";
import { initTradeIn } from "./tradein.js";
import { initFaq } from "./faq.js";
import {
  initCart,
  addToCart,
  changeQty,
  removeFromCart,
  clearCart,
  openCart,
  closeCart,
  checkoutWhatsApp,
} from "./cart.js";
import { openProductModal, closeProductModal } from "./modal.js";

// Funções chamadas direto pelo HTML (onclick="addToCart('...')" etc.).
// Dentro de módulos elas não ficam visíveis para o HTML, por isso são
// expostas aqui. Se criar um novo onclick, inclua a função nesta lista.
Object.assign(window, {
  addToCart,
  changeQty,
  removeFromCart,
  clearCart,
  openCart,
  closeCart,
  checkoutWhatsApp,
  openProductModal,
  closeProductModal,
});

async function init() {
  // 1) Primeiro carrega as partes (catálogo, simulador, FAQ, rodapé, modal e carrinho).
  //    Tudo abaixo mexe nesses elementos, então só pode rodar depois.
  await loadIncludes();

  // 2) Se a pessoa abriu a página com um link tipo #faq, rola até a seção
  //    (antes do carregamento ela ainda não existia na página)
  if (location.hash.length > 1) {
    try {
      const target = document.querySelector(location.hash);
      if (target) target.scrollIntoView();
    } catch (err) {
      // hash inválido: ignora
    }
  }

  // 3) Inicia cada parte do site
  initCart();
  initCarousel();
  initMobileMenu();
  initCatalog();
  initTradeIn();
  initFaq();
}

// Fecha o modal e o carrinho com a tecla Esc
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeProductModal();
    closeCart();
  }
});

// Módulos já rodam depois do HTML ser lido, mas isso garante nos dois casos
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
