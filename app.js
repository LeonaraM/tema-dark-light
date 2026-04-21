'use strict';

const switcher = document.querySelector('.btn');

// pega tema salvo
let currentTheme = localStorage.getItem('theme');

// se não tiver tema salvo, usa o do sistema
if (!currentTheme) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    currentTheme = prefersDark ? 'dark-theme' : 'light-theme';
}

// aplica tema inicial
document.body.classList.add(currentTheme);

// ajusta botão inicial
if (currentTheme === 'dark-theme') {
    switcher.textContent = "☀️";
} else {
    switcher.textContent = "🌙";
}

// clique do botão
switcher.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');

    const isDark = document.body.classList.contains('dark-theme');

    if (isDark) {
        this.textContent = "☀️";
        localStorage.setItem('theme', 'dark-theme');
    } else {
        this.textContent = "🌙";
        localStorage.setItem('theme', 'light-theme');
    }
});