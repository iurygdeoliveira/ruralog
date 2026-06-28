// Inicializa os ícones do Lucide
lucide.createIcons();

// Lógica de alternância de tema (Dark/Light mode)
const themeToggleBtn = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Verifica a preferência inicial
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    htmlElement.classList.add('dark');
} else {
    htmlElement.classList.remove('dark');
}

themeToggleBtn.addEventListener('click', function() {
    // Alterna a classe dark no HTML
    htmlElement.classList.toggle('dark');
    
    // Salva a preferência no localStorage
    if (htmlElement.classList.contains('dark')) {
        localStorage.setItem('color-theme', 'dark');
    } else {
        localStorage.setItem('color-theme', 'light');
    }
});
