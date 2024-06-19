document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('preInscricaoBtn');
    const img = document.getElementById('profileImg');

    // Adiciona efeito de hover no botão
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

    // Adiciona efeito de hover na imagem
    img.addEventListener('mouseover', function() {
        img.style.transform = 'rotate(3deg)';
    });

    img.addEventListener('mouseout', function() {
        img.style.transform = 'rotate(0deg)';
    });
});
