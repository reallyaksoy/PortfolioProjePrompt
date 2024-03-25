// Resimlere tıklandığında büyütme efekti
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('click', () => {
        item.querySelector('img').classList.toggle('zoomed');
    });
});
