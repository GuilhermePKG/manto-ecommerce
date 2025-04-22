document.addEventListener('DOMContentLoaded', () => {
    const botoesAdicionar = document.querySelectorAll('.btn-adicionar');
    const iconeCarrinho = document.querySelector('.icons a[href="#"] img[alt="Carrinho"]');
  
    let carrinho = [];
  
    botoesAdicionar.forEach((botao) => {
      botao.addEventListener('click', () => {
        const card = botao.closest('.card-produto');
        const nome = card.querySelector('h3').textContent;
        const preco = card.querySelector('.preco').textContent;
        const imagem = card.querySelector('img').src;
  
        const produto = { nome, preco, imagem };
        carrinho.push(produto);
  
        atualizarContadorCarrinho();
        alert(`${nome} foi adicionado ao carrinho!`);
      });
    });
  
    function atualizarContadorCarrinho() {
      let contador = document.querySelector('.contador-carrinho');
  
      if (!contador) {
        contador = document.createElement('span');
        contador.classList.add('contador-carrinho');
        iconeCarrinho.parentElement.appendChild(contador);
      }
  
      contador.textContent = carrinho.length;
    }
  });
  document.addEventListener("DOMContentLoaded", () => {
    // === Carrossel Automático ===
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
  
    function mostrarSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
    }
  
    function proximoSlide() {
      slideIndex = (slideIndex + 1) % slides.length;
      mostrarSlide(slideIndex);
    }
  
    mostrarSlide(slideIndex);
    setInterval(proximoSlide, 5000); // Troca de slide a cada 5 segundos
  
    // === Seleção de Tamanhos ===
    const todosTamanhos = document.querySelectorAll('.tamanho');
  
    todosTamanhos.forEach(tamanho => {
      tamanho.addEventListener('click', () => {
        const grupo = tamanho.parentElement.querySelectorAll('.tamanho');
        grupo.forEach(t => t.classList.remove('selecionado'));
        tamanho.classList.add('selecionado');
      });
    });
  });
  


