// Função para trocar a imagem atual
function changeImage() {
    const images = document.querySelectorAll('.carousel-container img');
    let currentImage = 0;

    setInterval(() => {
        // Oculta a imagem atual
        images[currentImage].style.display = 'none';

        // Incrementa o índice da imagem atual
        currentImage = (currentImage + 1) % images.length;

        // Exibe a próxima imagem
        images[currentImage].style.display = 'block';
    }, 3000); // Intervalo de 10 segundos
}

// Chama a função ao carregar a página
window.addEventListener('load', changeImage);
