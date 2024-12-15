// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener("DOMContentLoaded", function() {
  // Seleciona todas as perguntas da seção FAQ
  const perguntas = document.querySelectorAll(".faq-question");

  perguntas.forEach(pergunta => {
    // Adiciona um evento de clique a cada pergunta
    pergunta.addEventListener("click", function() {
      // Seleciona a resposta associada à pergunta clicada
      const resposta = this.nextElementSibling;
      // Alterna a exibição da resposta (entre "block" e "none")
      resposta.style.display = resposta.style.display === "block" ? "none" : "block";
    });
  });
});

// Calcula e exibe os dias passados desde o evento
document.addEventListener("DOMContentLoaded", function() {
  // Seleciona todos os elementos que exibem o tempo decorrido
  const elementosDias = document.querySelectorAll(".dias-texto");

  elementosDias.forEach(elemento => {
    // Obtém a data do evento a partir do atributo "data-event-date"
    const dataEvento = new Date(elemento.getAttribute("data-event-date"));
    const dataAtual = new Date();

    // Calcula a diferença em milissegundos e converte para dias
    const diferencaEmMilissegundos = dataAtual - dataEvento;
    const diferencaEmDias = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));

    // Atualiza o conteúdo do elemento com o número de dias passados
    elemento.querySelector(".dias-passados").textContent = diferencaEmDias;
  });
});

// Implementa a rolagem suave para links âncora
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  // Adiciona um evento de clique a cada link âncora
  anchor.addEventListener('click', function(e) {
    e.preventDefault(); // Evita o comportamento padrão do clique
    // Faz a rolagem suave para o elemento correspondente ao ID do link
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth' // Define o comportamento da rolagem como suave
    });
  });
});
