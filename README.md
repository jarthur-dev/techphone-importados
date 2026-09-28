# 📱 TechPhone Importados - Landing Page & Catálogo Interativo

> Landing page moderna e responsiva voltada para a conversão de vendas de smartphones importados (Apple, Samsung, Xiaomi) e serviços de Trade-In (troca de seminovos).

---

## 📌 Sobre o Projeto

O **TechPhone Importados** é uma aplicação web *front-end* desenvolvida para apresentar um catálogo dinâmico de smartphones de alta performance, destacar diferenciais competitivos da loja e oferecer um **simulador de troca em tempo real** (Trade-In) com integração direta para o **WhatsApp**.

O projeto foi pensado focando em:
- **Alta conversão de vendas (CRO)** com chamadas claras para o WhatsApp.
- **Visual Dark Mode / Glassmorphism** moderno com animações suaves.
- **Experiência do Usuário (UX/UI)** limpa, fluida e totalmente responsiva (Mobile First).

---

## 🚀 Tecnologias Utilizadas

Este projeto foi construído usando uma stack leve e performática no Front-end:

- **HTML5**: Estruturação semântica de todo o conteúdo.
- **Tailwind CSS (via CDN)**: Framework utilitário para estilização rápida, responsiva e moderna.
- **CSS3 Customizado (`style.css`)**: Estilos específicos para efeitos de vidro (*glassmorphism*), luzes neon, scrollbar e animações.
- **JavaScript Vanilla (`script.js`)**: Lógica pura para manipulação do DOM, filtros de busca, simulador de cálculos de troca e menu mobile.
- **FontAwesome 6**: Biblioteca de ícones vetoriais.
- **Google Fonts (Inter)**: Tipografia limpa e moderna.

---

## 🛠️ Funcionalidades Principais

- 🔍 **Busca em Tempo Real**: Filtre qualquer aparelho digitando o nome ou especificação no campo de pesquisa.
- 🏷️ **Filtro por Categorias**: Alterne facilmente entre marcas (Apple, Samsung, Xiaomi e Acessórios).
- 🧮 **Simulador de Trade-In (Troca)**:
  - Seleção do smartphone atual + estado de conservação.
  - Escolha do modelo desejado.
  - Cálculo automático da estimativa do usado e da volta em dinheiro (R$).
  - Geração de mensagem pré-formatada direta para o WhatsApp do vendedor.
- ❓ **FAQ Interativo**: Acordeão para tirar dúvidas frequentes de entrega, garantia e pagamento sem poluir a tela.
- 📱 **Totalmente Responsivo**: Funciona perfeitamente em celulares, tablets e desktops.

---

## 📁 Estrutura de Arquivos

```text
techphone-importados/
│
├── index.html     # Estrutura HTML da landing page com Tailwind CSS
├── style.css      # Estilos customizados, animações e efeitos neon
├── script.js     # Lógica JS (Catálogo dinâmico, Filtros e Simulador)
└── README.md      # Documentação do projeto
