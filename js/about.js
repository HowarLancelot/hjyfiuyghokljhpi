document.addEventListener('DOMContentLoaded', () => {
    // 滚动动画
    const revealSections = document.querySelectorAll('.reveal-section');
    
    const revealOnScroll = () => {
        revealSections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.85) {
                section.classList.add('active');
            }
        });
    };

    // 初始检查
    revealOnScroll();
    
    // 滚动时检查
    window.addEventListener('scroll', revealOnScroll);
}); 