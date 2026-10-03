/* CARREGADOR DAS PARTES SEPARADAS DO HTML */

// Cada <div data-include="arquivo.html"> do index.html é preenchida com o
// conteúdo do arquivo indicado. Os arquivos devem ter só o trecho (sem
// <html>, <head> ou <body>). Precisa abrir por servidor (Live Server).
export async function loadIncludes() {
  const slots = document.querySelectorAll("[data-include]");

  await Promise.all(
    Array.from(slots).map(async (slot) => {
      const url = slot.getAttribute("data-include");
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        slot.innerHTML = await response.text();
      } catch (err) {
        console.error(`Não foi possível carregar "${url}":`, err);
        slot.innerHTML = `<p class="text-center text-red-400 py-6 text-sm">Erro ao carregar ${url} (veja o Console, F12)</p>`;
      }
    }),
  );
}
