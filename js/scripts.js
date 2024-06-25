document.addEventListener('DOMContentLoaded', function() {
    const youtubeBtn = document.getElementById('youtubeBtn');
    const instagramBtn = document.getElementById('instagramBtn');
    const facebookBtn = document.getElementById('facebookBtn');

    // Efeito de hover no botão do YouTube
    youtubeBtn.addEventListener('mouseover', function() {
        youtubeBtn.style.transform = 'scale(1.1)';
        youtubeBtn.style.backgroundColor = '#0056b3'; // Cor de fundo mais escura
    });

    youtubeBtn.addEventListener('mouseout', function() {
        youtubeBtn.style.transform = 'scale(1)';
        youtubeBtn.style.backgroundColor = ''; // Reseta para a cor original
    });

    youtubeBtn.addEventListener('mousedown', function() {
        youtubeBtn.style.transform = 'scale(0.9)';
    });

    youtubeBtn.addEventListener('mouseup', function() {
        youtubeBtn.style.transform = 'scale(1.1)';
    });

    // Efeito de hover no botão do Instagram
    instagramBtn.addEventListener('mouseover', function() {
        instagramBtn.style.transform = 'scale(1.1)';
        instagramBtn.style.backgroundColor = '#e1306c'; // Cor de fundo mais escura
    });

    instagramBtn.addEventListener('mouseout', function() {
        instagramBtn.style.transform = 'scale(1)';
        instagramBtn.style.backgroundColor = ''; // Reseta para a cor original
    });

    instagramBtn.addEventListener('mousedown', function() {
        instagramBtn.style.transform = 'scale(0.9)';
    });

    instagramBtn.addEventListener('mouseup', function() {
        instagramBtn.style.transform = 'scale(1.1)';
    });

    // Efeito de hover no botão do Facebook
    facebookBtn.addEventListener('mouseover', function() {
        facebookBtn.style.transform = 'scale(1.1)';
        facebookBtn.style.backgroundColor = '#3b5998'; // Cor de fundo mais escura
    });

    facebookBtn.addEventListener('mouseout', function() {
        facebookBtn.style.transform = 'scale(1)';
        facebookBtn.style.backgroundColor = ''; // Reseta para a cor original
    });

    facebookBtn.addEventListener('mousedown', function() {
        facebookBtn.style.transform = 'scale(0.9)';
    });

    facebookBtn.addEventListener('mouseup', function() {
        facebookBtn.style.transform = 'scale(1.1)';
    });
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




//imagens index

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


      
 


// Variáveis para controle de carregamento de comentários
let comentarios = [];
let comentariosCarregados = 0;
const comentariosPorPagina = 2;

// Função para carregar comentários de um arquivo JSON
function carregarComentarios() {
    fetch('comentario.json')
        .then(response => response.json())
        .then(data => {
            comentarios = data.sort((a, b) => new Date(b.data) - new Date(a.data));
            exibirComentarios();
        })
        .catch(error => console.error('Erro ao carregar comentários:', error));
}

// Função para exibir os comentários
function exibirComentarios() {
    const container = document.getElementById('comentarios');
    const comentariosParaExibir = comentarios.slice(comentariosCarregados, comentariosCarregados + comentariosPorPagina);

    comentariosParaExibir.forEach(comentario => {
        const divComentario = document.createElement('div');
        divComentario.innerHTML = `<strong>${comentario.nome}</strong>: ${comentario.comentario} <em>(${new Date(comentario.data).toLocaleString()})</em>`;
        container.appendChild(divComentario);
    });

    comentariosCarregados += comentariosParaExibir.length;

    if (comentariosCarregados >= comentarios.length) {
        document.getElementById('loadMoreButton').style.display = 'none';
    }
}

// Função para adicionar novo comentário
function adicionarComentario(nome, comentarioTexto) {
    const novoComentario = {
        nome: nome,
        comentario: comentarioTexto,
        data: new Date().toISOString()
    };
    comentarios.unshift(novoComentario);
    exibirNovoComentario(novoComentario);
}

// Função para exibir novo comentário
function exibirNovoComentario(comentario) {
    const container = document.getElementById('comentarios');
    const divComentario = document.createElement('div');
    divComentario.innerHTML = `<strong>${comentario.nome}</strong>: ${comentario.comentario} <em>(${new Date(comentario.data).toLocaleString()})</em>`;
    container.insertBefore(divComentario, container.firstChild);
}

// Evento para carregar mais comentários
document.getElementById('loadMoreButton').addEventListener('click', exibirComentarios);

// Evento para enviar novo comentário
document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('name').value;
    const comentarioTexto = document.getElementById('comment').value;

    if (nome && comentarioTexto) {
        adicionarComentario(nome, comentarioTexto);
        document.getElementById('commentForm').reset();
    }
});

// Carrega os comentários quando a página é carregada
carregarComentarios();



  
