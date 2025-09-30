console.log("Сайт загружен!");

emailjs.init("alcjXOSgKQN_R8wVd");

// Простая анимация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 1s';
    
    setTimeout(function() {
        document.body.style.opacity = '1';
    }, 100);
    
    // Инициализируем все функции после загрузки DOM
    initContactForm();
    initThemeToggle();
    initScrollAnimations();
});

// ФОРМА ОБРАТНОЙ СВЯЗИ
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const messageDiv = document.getElementById('formMessage');
            const submitBtn = this.querySelector('button[type="submit"]');
            
            // Валидация полей
            const inputs = this.querySelectorAll('input, textarea');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = 'red';
                } else {
                    input.style.borderColor = '#ddd';
                }
            });
            
            if (!isValid) {
                messageDiv.textContent = '❌ Пожалуйста, заполните все поля!';
                messageDiv.style.color = 'red';
                return;
            }
            
            // Если валидация прошла - отправляем письмо
            messageDiv.textContent = '📤 Отправка сообщения...';
            messageDiv.style.color = 'blue';
            
            // Сохраняем оригинальный текст кнопки
            const originalBtnText = submitBtn.textContent;
            submitBtn.textContent = 'Отправка...';
            submitBtn.disabled = true;
            
            // Собираем данные формы
            const formData = {
                name: this.querySelector('input[type="text"]').value,
                email: this.querySelector('input[type="email"]').value,
                message: this.querySelector('textarea').value,
                date: new Date().toLocaleString('ru-RU'),
                page: window.location.href
            };
            
            // ОТПРАВКА ЧЕРЕЗ EMAILJS
            emailjs.send('service_7hm3tae', 'template_dxa0puk', formData)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    messageDiv.textContent = '✅ Сообщение отправлено! Я свяжусь с вами скоро.';
                    messageDiv.style.color = 'green';
                    
                    // Очищаем форму
                    contactForm.reset();
                })
                .catch(function(error) {
                    console.error('FAILED...', error);
                    messageDiv.textContent = '❌ Ошибка отправки. Попробуйте ещё раз или напишите напрямую.';
                    messageDiv.style.color = 'red';
                })
                .finally(function() {
                    // Восстанавливаем кнопку
                    submitBtn.textContent = originalBtnText;
                    submitBtn.disabled = false;
                    
                    // Через 5 секунд убираем сообщение
                    setTimeout(() => {
                        messageDiv.textContent = '';
                    }, 5000);
                });
        });
    }
}

// ПЕРЕКЛЮЧЕНИЕ ТЕМЫ (дополнительная фича)
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        // Проверяем сохранённую тему
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
            themeToggle.textContent = '☀️ Светлая тема';
        }
        
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            const isDark = document.body.classList.contains('dark-theme');
            
            themeToggle.textContent = isDark ? '☀️ Светлая тема' : '🌙 Тёмная тема';
            
            // Сохраняем в localStorage
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }
}

// АНИМАЦИИ ПРИ СКРОЛЛЕ (дополнительная фича)
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

// Простая функция для показа уведомлений
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background: ${type === 'success' ? '#4CAF50' : '#f44336'};
        color: white;
        border-radius: 5px;
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function showMessage() {
    const facts = [
        "🎮 Ни разу не проходил майнкрафт",
        "💻 Мой первый язык - Python",
        "🚀 Мечтаю работать в крутой компании",
        "🎵 Программирую под тёмного принца",
        "📱 Апнул 30к в Brawl Stars",
        "🌍 Хочу посетить Сербию",
        "🎯 Цель - стать ML инженером"
    ];
    
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById('message').textContent = randomFact;
}