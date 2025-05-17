// Простая анимация для кнопки CTA
window.addEventListener('load', () => {
    const ctaButton = document.querySelector('.cta-btn');
    ctaButton.style.transform = 'scale(1)';
    ctaButton.style.transition = 'transform 0.3s ease-in-out';
    ctaButton.addEventListener('mouseover', () => {
        ctaButton.style.transform = 'scale(1.1)';
    });
    ctaButton.addEventListener('mouseout', () => {
        ctaButton.style.transform = 'scale(1)';
    });
});
