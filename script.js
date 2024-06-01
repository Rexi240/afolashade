document.addEventListener('DOMContentLoaded', (event) => {
    const showMessageBtn = document.getElementById('showMessageBtn');
    const loveMessage = document.getElementById('loveMessage');

    showMessageBtn.addEventListener('click', () => {
        loveMessage.style.display = 'block';
    });
});
