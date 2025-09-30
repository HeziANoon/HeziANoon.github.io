console.log("���� ����㦥�!");

// ����� ������� �� ����㧪�
document.addEventListener('DOMContentLoaded', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 1s';
    
    setTimeout(function() {
        document.body.style.opacity = '1';
    }, 100);
    
    // ���樠�����㥬 �� �㭪樨 ��᫥ ����㧪� DOM
    initContactForm();
    initThemeToggle();
    initScrollAnimations();
});

// ����� �������� �����
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const messageDiv = document.getElementById('formMessage');
            
            // �������� �����
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
            
            if (isValid) {
                messageDiv.textContent = '? ����饭�� ��ࠢ����! ���ᨡ� �� ������ ���!';
                messageDiv.style.color = 'green';
                
                // ��頥� ���
                this.reset();
                
                // ��१ 5 ᥪ㭤 㡨ࠥ� ᮮ�饭��
                setTimeout(() => {
                    messageDiv.textContent = '';
                }, 5000);
            } else {
                messageDiv.textContent = '? ��������, �������� �� ����!';
                messageDiv.style.color = 'red';
            }
        });
    }
}

// ������������ ���� (�������⥫쭠� ��)
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        // �஢��塞 ��࠭��� ⥬�
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
            themeToggle.textContent = '?? ���⫠� ⥬�';
        }
        
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            const isDark = document.body.classList.contains('dark-theme');
            
            themeToggle.textContent = isDark ? '?? ���⫠� ⥬�' : '?? �񬭠� ⥬�';
            
            // ���࠭塞 � localStorage
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }
}

// �������� ��� ������� (�������⥫쭠� ��)
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

// ����� �㭪�� ��� ������ 㢥��������
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