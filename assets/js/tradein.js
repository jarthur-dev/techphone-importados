/* SIMULADOR DE TRADE-IN */

import { WHATSAPP_NUMBER } from "./config.js";

export function initTradeIn() {
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

      // O número do WhatsApp fica em config.js
      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
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
}
