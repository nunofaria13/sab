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
