/* LÓGICA PRINCIPAL DA APLICAÇÃO (DOM, FILTROS E SIMULADOR) */

// Array de objetos com os dados dos produtos no catálogo
const productsData = [
    {
        id: 1,
        name: "iPhone 15 Pro Max",
        category: "apple",
        brandName: "Apple",
        badge: "Lançamento",
        badgeColor: "bg-brand-blue",
        specs: "256GB • Titânio Natural • Bateria 100%",
        originalPrice: "R$ 8.999",
        price: "6.890",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 2,
        name: "iPhone 15 Pro",
        category: "apple",
        brandName: "Apple",
        badge: "Em Destaque",
        badgeColor: "bg-brand-purple",
        specs: "128GB • Titânio Negro • Câmera Tripla 48MP",
        originalPrice: "R$ 7.299",
        price: "5.490",
        image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 3,
        name: "iPhone 14",
        category: "apple",
        brandName: "Apple",
        badge: "Custo-Benefício",
        badgeColor: "bg-emerald-500",
        specs: "128GB • Estelar • Tela Super Retina XDR",
        originalPrice: "R$ 4.999",
        price: "3.790",
        image: "https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 4,
        name: "Samsung Galaxy S24 Ultra",
        category: "samsung",
        brandName: "Samsung",
        badge: "Top Android",
        badgeColor: "bg-brand-blue",
        specs: "512GB • Titânio Cinza • Galaxy AI + S Pen",
        originalPrice: "R$ 7.999",
        price: "5.890",
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 5,
        name: "Samsung Galaxy S23 FE",
        category: "samsung",
        brandName: "Samsung",
        badge: "Popular",
        badgeColor: "bg-amber-500",
        specs: "128GB • Grafite • Câmera 50MP",
        originalPrice: "R$ 3.499",
        price: "2.490",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 6,
        name: "Xiaomi 14 Ultra",
        category: "xiaomi",
        brandName: "Xiaomi",
        badge: "Lentes Leica",
        badgeColor: "bg-rose-500",
        specs: "512GB • Preto • Câmeras Leica de 50MP",
        originalPrice: "R$ 6.899",
        price: "5.190",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 7,
        name: "Poco X6 Pro 5G",
        category: "xiaomi",
        brandName: "Poco",
        badge: "Gamer",
        badgeColor: "bg-yellow-500",
        specs: "512GB • Amarelo • Processador Dimensity 8300 Ultra",
        originalPrice: "R$ 2.899",
        price: "2.190",
        image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 8,
        name: "AirPods Pro 2ª Geração",
        category: "acessorios",
        brandName: "Apple",
        badge: "Acessório",
        badgeColor: "bg-gray-500",
        specs: "Cancelamento Ativo de Ruído • Estojo MagSafe USB-C",
        originalPrice: "R$ 2.299",
        price: "1.590",
        image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=500&q=80"
    }
];

// Espera a arvore do DOM carregar completamente antes de rodar os scripts
document.addEventListener('DOMContentLoaded', () => {

    // 1. LÓGICA DO MENU MOBILE (ABRIR E FECHAR)
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    // Alterna visibilidade do menu no clique do botão hambúrguer
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Fecha o menu automaticamente quando o usuário clica em qualquer link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // 2. RENDERIZAÇÃO DINÂMICA DOS CARDS DE PRODUTOS
    const productGrid = document.getElementById('product-grid');

    function renderProducts(items) {
        // Trata caso a busca ou filtro não retorne nenhum item
        if (items.length === 0) {
            productGrid.innerHTML = `
                <div class="col-span-full text-center py-12 text-gray-500">
                    <i class="fa-solid fa-mobile-xmark text-4xl mb-3"></i>
                    <p class="text-base font-semibold">Nenhum smartphone encontrado para esta busca.</p>
                </div>
            `;
            return;
        }

        // Mapeia o array e gera o HTML dinamico dos cards
        productGrid.innerHTML = items.map(product => `
            <div class="glass-card rounded-2xl p-6 glass-card-hover flex flex-col justify-between space-y-4 relative group">
                <!-- Tag superior -->
                <div class="flex items-center justify-between">
                    <span class="${product.badgeColor} text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                        ${product.badge}
                    </span>
                    <span class="text-xs text-gray-400 font-semibold">${product.brandName}</span>
                </div>

                <!-- Imagem do Smartphone -->
                <div class="py-2 flex justify-center">
                    <img src="${product.image}" 
                         alt="${product.name}" 
                         class="h-48 object-contain group-hover:scale-105 transition-transform duration-300 rounded-xl"
                         onerror="this.src='https://placehold.co/400x400/151C2C/ffffff?text=${encodeURIComponent(product.name)}'">
                </div>

                <!-- Detalhes do produto -->
                <div class="space-y-1">
                    <h3 class="text-lg font-bold text-white group-hover:text-brand-blue transition-colors">${product.name}</h3>
                    <p class="text-xs text-gray-400">${product.specs}</p>
                </div>

                <!-- Preço e Botão de Ação -->
                <div class="pt-4 border-t border-gray-800 flex items-center justify-between">
                    <div>
                        <p class="text-[11px] text-gray-500 line-through">De ${product.originalPrice}</p>
                        <p class="text-xl font-black text-brand-neon">R$ ${product.price}<span class="text-xs font-normal text-gray-300">,00</span></p>
                    </div>
                    <a href="https://wa.me/5581999999999?text=${encodeURIComponent(`Olá! Gostaria de garantir o ${product.name} no valor de R$ ${product.price}.`)}" 
                       target="_blank" 
                       class="inline-flex items-center gap-2 bg-brand-whatsapp hover:bg-brand-whatsappHover text-white px-4 py-2.5 rounded-xl font-bold text-xs shadow-md transition-transform active:scale-95">
                        <i class="fa-brands fa-whatsapp text-sm"></i>
                        <span>Garantir</span>
                    </a>
                </div>
            </div>
        `).join('');
    }

    // Renderiza a lista inicial completa ao carregar a página
    renderProducts(productsData);

    // 3. FILTRO POR CATEGORIAS (MARCAS)
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove o estilo ativo de todos os botões
            filterButtons.forEach(btn => {
                btn.classList.remove('active', 'bg-brand-blue', 'text-white');
                btn.classList.add('glass-card', 'text-gray-300');
            });

            // Aplica estilo ativo apenas no botão clicado
            button.classList.add('active', 'bg-brand-blue', 'text-white');
            button.classList.remove('glass-card', 'text-gray-300');

            const category = button.getAttribute('data-category');
            if (category === 'all') {
                renderProducts(productsData);
            } else {
                const filtered = productsData.filter(p => p.category === category);
                renderProducts(filtered);
            }
        });
    });

    // 4. PESQUISA EM TEMPO REAL NO CATÁLOGO
    const searchInput = document.getElementById('catalog-search');
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase().trim();
        const filtered = productsData.filter(p => 
            p.name.toLowerCase().includes(term) || 
            p.specs.toLowerCase().includes(term) ||
            p.brandName.toLowerCase().includes(term)
        );
        renderProducts(filtered);
    });

    // 5. SIMULADOR DE TRADE-IN (CÁLCULO DE TROCA COM RETORNO EM R$)
    const currentPhoneSelect = document.getElementById('current-phone');
    const phoneConditionSelect = document.getElementById('phone-condition');
    const targetPhoneSelect = document.getElementById('target-phone');
    const estimatedValueEl = document.getElementById('estimated-value');
    const differenceTextEl = document.getElementById('difference-text');
    const sendTradeInBtn = document.getElementById('send-tradein-whatsapp');

    function updateTradeInEstimator() {
        const currentVal = parseFloat(currentPhoneSelect.value);
        const conditionMultiplier = parseFloat(phoneConditionSelect.value);
        const targetVal = parseFloat(targetPhoneSelect.value);

        // Validação se algum campo estiver em branco
        if (!currentVal || isNaN(currentVal)) {
            estimatedValueEl.textContent = 'R$ 0,00';
            differenceTextEl.textContent = 'Selecione os modelos acima para ver a diferença.';
            sendTradeInBtn.disabled = true;
            sendTradeInBtn.classList.add('opacity-50', 'cursor-not-allowed');
            return;
        }

        // Realiza os cálculos de depreciação e volta em dinheiro
        const estimatedTradeValue = Math.round(currentVal * conditionMultiplier);
        const difference = Math.max(0, targetVal - estimatedTradeValue);

        const currentPhoneName = currentPhoneSelect.options[currentPhoneSelect.selectedIndex].getAttribute('data-name');
        const targetPhoneName = targetPhoneSelect.options[targetPhoneSelect.selectedIndex].getAttribute('data-targetname');

        // Atualiza os valores na interface
        estimatedValueEl.textContent = `R$ ${estimatedTradeValue.toLocaleString('pt-BR')},00`;
        differenceTextEl.innerHTML = `Sua volta estimada para pegar o <strong>${targetPhoneName}</strong> será de <strong>R$ ${difference.toLocaleString('pt-BR')},00</strong>`;

        // Habilita o botão de enviar proposta
        sendTradeInBtn.disabled = false;
        sendTradeInBtn.classList.remove('opacity-50', 'cursor-not-allowed');

        // Monta a mensagem pré-formatada para o WhatsApp
        const msg = `Olá! Fiz uma simulação de troca no site:\n- *Meu Aparelho:* ${currentPhoneName}\n- *Avaliação Estimada:* R$ ${estimatedTradeValue}\n- *Quero Adquirir:* ${targetPhoneName}\n- *Volta Estimada:* R$ ${difference}\n\nGostaria de confirmar a avaliação e fechar negócio!`;
        
        sendTradeInBtn.onclick = () => {
            window.open(`https://wa.me/5581999999999?text=${encodeURIComponent(msg)}`, '_blank');
        };
    }

    // Escutadores de evento para atualizar a simulação a cada alteração nos selects
    currentPhoneSelect.addEventListener('change', updateTradeInEstimator);
    phoneConditionSelect.addEventListener('change', updateTradeInEstimator);
    targetPhoneSelect.addEventListener('change', updateTradeInEstimator);

    // 6. ACORDEÃO DAS PERGUNTAS FREQUENTES (FAQ)
    const faqToggles = document.querySelectorAll('.faq-toggle');
    faqToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const content = toggle.nextElementSibling;
            const icon = toggle.querySelector('i');

            content.classList.toggle('hidden');
            icon.classList.toggle('rotate-180'); // Gira a setinha quando aberto
        });
    });
});