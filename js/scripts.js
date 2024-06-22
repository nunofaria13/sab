/*document.addEventListener('DOMContentLoaded', function() {
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
});*/



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





    //Comments list
    let commentsData = [];
    let commentsLoaded = 0;
    const commentsPerPage = 5;
    const commentsContainer = document.getElementById('commentsContainer');
    const loadMoreButton = document.getElementById('loadMoreButton');

    function loadComments() {
        const start = commentsLoaded;
        const end = start + commentsPerPage;
        const commentsToLoad = commentsData.slice(start, end);

        commentsToLoad.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.classList.add('col-lg-8', 'col-xl-6', 'mb-4');
            commentElement.innerHTML = `
                <div class="card shadow border-0 rounded-4">
                    <div class="card-body p-4">
                        <h5 class="fw-bolder">${comment.name}</h5>
                        <p class="mb-0">${comment.comment}</p>
                        <small class="text-muted">${new Date(comment.timestamp).toLocaleString()}</small>
                    </div>
                </div>
            `;
            commentsContainer.appendChild(commentElement);
        });

        commentsLoaded += commentsToLoad.length;

        if (commentsLoaded >= commentsData.length) {
            loadMoreButton.style.display = 'none';
        }
    }

    fetch('comentario.json')
        .then(response => response.json())
        .then(data => {
            commentsData = data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
            loadComments();
        });

    loadMoreButton.addEventListener('click', loadComments);

    document.getElementById('commentForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const comment = document.getElementById('comment').value;
        const timestamp = new Date().toISOString();

        const newComment = {
            name,
            comment,
            timestamp
        };

        const commentElement = document.createElement('div');
        commentElement.classList.add('col-lg-8', 'col-xl-6', 'mb-4');
        commentElement.innerHTML = `
            <div class="card shadow border-0 rounded-4">
                <div class="card-body p-4">
                    <h5 class="fw-bolder">${name}</h5>
                    <p class="mb-0">${comment}</p>
                    <small class="text-muted">${new Date(timestamp).toLocaleString()}</small>
                </div>
            </div>
        `;

        commentsContainer.insertBefore(commentElement, commentsContainer.firstChild);

        document.getElementById('commentForm').reset();
    });

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





