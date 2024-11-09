class Carousel {
    constructor() {
        this.container = document.querySelector('.carousel-container');
        this.slides = document.querySelectorAll('.carousel-slide');
        this.prevBtn = document.querySelector('.prev');
        this.nextBtn = document.querySelector('.next');
        this.dotsContainer = document.querySelector('.carousel-dots');
        
        this.currentSlide = 0;
        this.slideWidth = this.slides[0].clientWidth;
        
        this.init();
    }

    init() {
        // 创建指示点
        this.slides.forEach((_, i) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => this.goToSlide(i));
            this.dotsContainer.appendChild(dot);
        });

        // 添加事件监听
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());

        // 自动播放
        this.startAutoPlay();
    }

    updateDots() {
        const dots = this.dotsContainer.querySelectorAll('.dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === this.currentSlide);
        });
    }

    goToSlide(n) {
        this.currentSlide = n;
        this.container.style.transform = `translateX(-${this.currentSlide * 100}%)`;
        this.updateDots();
    }

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(this.currentSlide);
    }

    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.goToSlide(this.currentSlide);
    }

    startAutoPlay() {
        setInterval(() => this.nextSlide(), 5000);
    }
}

// 当DOM加载完成后初始化轮播
document.addEventListener('DOMContentLoaded', () => {
    new Carousel();
}); 