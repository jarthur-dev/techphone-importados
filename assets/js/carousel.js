/* CARROSSEL HERO (TOP 5 POPULARES) */

import { popularProducts } from "./data/products.js";

export function initCarousel() {
  const track = document.getElementById("hero-carousel-track");
  const dotsContainer = document.getElementById("carousel-dots");
  const prevBtn = document.getElementById("carousel-prev");
  const nextBtn = document.getElementById("carousel-next");

  if (!(track && dotsContainer && prevBtn && nextBtn)) return;

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
