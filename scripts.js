console.log("���� ����㦥�!");

// ����� ������� �� ����㧪�
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
    messageDiv.textContent = '? ����饭�� ��ࠢ����! ���ᨡ� �� ������ ���!';
    messageDiv.style.color = 'green';
    
    // ��頥� ���
    this.reset();
    
    // ��१ 5 ᥪ㭤 㡨ࠥ� ᮮ�饭��
    setTimeout(() => {
        messageDiv.textContent = '';
    }, 5000);
});