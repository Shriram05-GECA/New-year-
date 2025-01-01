function startCelebration() {
    const confettiContainer = document.getElementById('confetti-container');
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDelay = `${Math.random() * 3}s`;
        confetti.style.backgroundColor = getRandomColor();
        confettiContainer.appendChild(confetti);
    }
}

function getRandomColor() {
    const colors = ['#ff6f61', '#ff9a9e', '#fad0c4', '#fbc2eb', '#a18cd1'];
    return colors[Math.floor(Math.random() * colors.length)];
}
