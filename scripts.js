console.log("Сайт загружен!");

// Простая анимация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 1s';
    
    setTimeout(function() {
        document.body.style.opacity = '1';
    }, 100);
});
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const messageDiv = document.getElementById('formMessage');
    messageDiv.textContent = '? Сообщение отправлено! Спасибо за обратную связь!';
    messageDiv.style.color = 'green';
    
    // Очищаем форму
    this.reset();
    
    // Через 5 секунд убираем сообщение
    setTimeout(() => {
        messageDiv.textContent = '';
    }, 5000);
});