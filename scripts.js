console.log("Сайт загружен!");

// Простая анимация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 1s';
    
    setTimeout(function() {
        document.body.style.opacity = '1';
    }, 100);
    
    // Инициализируем все функции после загрузки DOM
    initThemeToggle();
    initScrollAnimations();
});

// ПЕРЕКЛЮЧЕНИЕ ТЕМЫ
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            themeToggle.textContent = document.body.classList.contains('dark-theme') 
                ? '☀️ Светлая тема' 
                : '🌙 Тёмная тема';
        });
    }
}

// АНИМАЦИИ ПРИ СКРОЛЛЕ
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in');
    
    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        animatedElements.forEach(el => observer.observe(el));
    }
}

// Функция для интересных фактов
function showMessage() {
    const facts = [
        "🎮 Первую программу я написал в 17 лет!",
        "📚 Изучаю Machine Learning и Big Data",
        "💻 Мой основной язык - Python", 
        "🚀 Мечтаю стать ML инженером",
        "🎵 Люблю слушать музыку во время программирования",
        "📱 Интересуюсь мобильной разработкой",
        "🌍 Хочу работать в международной IT компании",
        "🎯 Учу английский для карьеры в IT"
    ];
    
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById('message').textContent = randomFact;
}