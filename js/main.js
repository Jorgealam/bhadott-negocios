/* BHADOTT Negócios — configuração e comportamentos da página.
   Para trocar o número de WhatsApp, altere SOMENTE a linha abaixo. */

const CONFIG = {
  // Só números: DDI + DDD + número.
  WHATSAPP: "5591991549435",
  MENSAGEM: "Olá! Vi a página da BHADOTT e quero um orçamento.",
};

(function () {
  "use strict";

  // Formata 5591991549435 como (91) 99154-9435
  function formatar(num) {
    const d = String(num).replace(/\D/g, "");
    const local = d.startsWith("55") ? d.slice(2) : d;
    if (local.length < 10) return num;
    const ddd = local.slice(0, 2);
    const resto = local.slice(2);
    const meio = resto.length === 9 ? resto.slice(0, 5) : resto.slice(0, 4);
    const fim = resto.length === 9 ? resto.slice(5) : resto.slice(4);
    return "(" + ddd + ") " + meio + "-" + fim;
  }

  const url =
    "https://wa.me/" +
    CONFIG.WHATSAPP +
    "?text=" +
    encodeURIComponent(CONFIG.MENSAGEM);

  document.querySelectorAll("[data-whats]").forEach(function (el) {
    el.href = url;
    el.target = "_blank";
    el.rel = "noopener";
  });

  document.querySelectorAll("[data-whats-label]").forEach(function (el) {
    el.textContent = formatar(CONFIG.WHATSAPP);
  });

  const ano = document.getElementById("ano");
  if (ano) ano.textContent = new Date().getFullYear();
})();
