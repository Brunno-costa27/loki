// Seleciona os elementos HTML
const openModalButton = document.getElementById('openModal');
const closeModalButton = document.getElementById('closeModal');
const videoModal = document.getElementById('videoModal');
const videoFrame = document.getElementById('videoFrame');

console.log(openModalButton);

// Abre a modal quando o botão é clicado
openModalButton.addEventListener('click', () => {
    console.log('oi');
    videoModal.style.display = 'block';
    videoFrame.setAttribute('src', videoFrame.getAttribute('src'));

});

// Fecha a modal quando o botão de fechar é clicado
closeModalButton.addEventListener('click', () => {

 // Pausar o vídeo
 videoModal.style.display = 'none'
    videoFrame.setAttribute('src', videoFrame.getAttribute('src'));
});

// Fecha a modal se o usuário clicar fora dela
window.addEventListener('click', (event) => {
    if (event.target === videoModal) {
        videoModal.style.display = 'none'
        videoFrame.setAttribute('src', videoFrame.getAttribute('src'));
    }
});