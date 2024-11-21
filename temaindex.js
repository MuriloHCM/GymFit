function toggleTheme() {
    const body = document.body;
    const currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';

    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');

    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(savedTheme + '-theme');
}

document.addEventListener('DOMContentLoaded', () => {
    loadTheme();

    const themeToggleButton = document.createElement('button');
    themeToggleButton.textContent = 'Alternar Tema';
    themeToggleButton.className = 'theme-toggle';
    themeToggleButton.onclick = toggleTheme;

    document.body.appendChild(themeToggleButton);
});

  window.onload = function() {
    const nome = prompt("Qual seu nome?");
    if (nome) {
        const welcomeMessage = document.getElementById('welcome-message');
        welcomeMessage.textContent = `Bem-vindo, ${nome}!`;
    }
};