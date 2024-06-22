document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('preInscricaoBtn');
    const profileImg = document.getElementById('profileImg');
    const floatingImg = document.getElementById('floatingImg');

    // Efeito de hover no botão
    btn.addEventListener('mouseover', function() {
        btn.style.transform = 'scale(1.1)';
        btn.style.backgroundColor = '#0056b3'; // Cor de fundo mais escura
    });

    btn.addEventListener('mouseout', function() {
        btn.style.transform = 'scale(1)';
        btn.style.backgroundColor = ''; // Reseta para a cor original
    });

    btn.addEventListener('mousedown', function() {
        btn.style.transform = 'scale(0.9)';
    });

    btn.addEventListener('mouseup', function() {
        btn.style.transform = 'scale(1.1)';
    });

    // Efeito de hover na imagem do perfil
    profileImg.addEventListener('mouseover', function() {
        profileImg.style.transform = 'rotate(5deg)';
    });

    profileImg.addEventListener('mouseout', function() {
        profileImg.style.transform = 'rotate(0deg)';
    });

    // Função para fazer a imagem flutuar
    let position = 0;
    let direction = 1;
    const floatSpeed = 0.1; // Velocidade da flutuação
    const floatRange = 10; // Distância da flutuação

    function floatImage() {
        position += direction * floatSpeed;
        floatingImg.style.transform = `translateY(${position}px)`;

        if (position >= floatRange || position <= -floatRange) {
            direction *= -1;
        }

        requestAnimationFrame(floatImage);
    }

    floatImage(); // Inicia a animação
});




const images = [
    "assets/jogo7.jpg",
    "assets/Jogo1.jpg",
    "assets/Jogo2.jpg",
    "assets/Jogo3.jpg",
    "assets/Jogo4.jpg",
    "assets/Jogo5.jpg",
    "assets/Jogo6.jpg",
    "assets/Jogo8.jpg",
    "assets/Jogador1.jpg",
    "assets/Jogador2.jpg",
    "assets/Jogador3.jpg",
    "assets/Jogador4.jpg",
    "assets/Jogador5.jpg",
    "assets/Jogador6.jpg",
    "assets/Jogador7.jpg",
    "assets/Jogador8.jpg",
    "assets/Jogador9.jpg",
    "assets/Jogador10.jpg",
    "assets/Jogador11.jpg",
    "assets/Jogador12.jpg",
    "assets/Jogador13.jpg",
    "assets/Jogador14.jpg",
    
];

let currentIndex = 0;

function showImage(index) {
    const galleryContainer = document.querySelector('.gallery-container');
    if (index >= images.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = images.length - 1;
    } else {
        currentIndex = index;
    }

    // Limpar o container antes de adicionar a nova imagem
    galleryContainer.innerHTML = '';

    images.forEach((src, i) => {
        const imgElement = document.createElement('div');
        imgElement.classList.add('gallery-item');
        if (i === currentIndex) {
            imgElement.innerHTML = `<img src="${src}" alt="Foto ${i + 1}">`;
        } else {
            imgElement.innerHTML = `<img src="${src}" alt="Foto ${i + 1}" style="opacity: 0;">`;
        }
        galleryContainer.appendChild(imgElement);
    });

    galleryContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextImage() {
    showImage(currentIndex + 1);
}

function prevImage() {
    showImage(currentIndex - 1);
}

// Inicializar a galeria com a primeira imagem
document.addEventListener('DOMContentLoaded', () => {
    showImage(currentIndex);
});





