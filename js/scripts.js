// Animação botão
document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('preInscricaoBtn');

    // Adiciona efeito de hover
    btn.addEventListener('mouseover', function() {
        btn.style.transform = 'scale(1.1)';
        btn.style.backgroundColor = '#1826C2'; // Cor de fundo mais escura
    });

    btn.addEventListener('mouseout', function() {
        btn.style.transform = 'scale(1)';
        btn.style.backgroundColor = ''; // Reseta para a cor original
    });

    // Adiciona efeito de clique
    btn.addEventListener('mousedown', function() {
        btn.style.transform = 'scale(0.9)';
    });

    btn.addEventListener('mouseup', function() {
        btn.style.transform = 'scale(1.1)';
    });
});
