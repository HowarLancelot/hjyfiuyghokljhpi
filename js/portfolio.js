document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    // 过滤功能
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            // 跳转到对应的分类页面
            if (category !== 'all') {
                window.location.href = `category.html?type=${category}`;
            } else {
                // 移除所有按钮的active类
                filterBtns.forEach(b => b.classList.remove('active'));
                // 添加当前按钮的active类
                btn.classList.add('active');
                // 显示所有作品
                portfolioItems.forEach(item => {
                    item.style.display = 'block';
                    item.classList.add('reveal-card');
                });
            }
        });
    });

    // 添加图片点击放大功能
    portfolioItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            const modal = document.createElement('div');
            modal.className = 'portfolio-modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <img src="${img.src}" alt="${img.alt}">
                    <button class="modal-close">&times;</button>
                </div>
            `;

            document.body.appendChild(modal);

            // 关闭模态框
            modal.addEventListener('click', (e) => {
                if (e.target.classList.contains('portfolio-modal') || 
                    e.target.classList.contains('modal-close')) {
                    modal.remove();
                }
            });
        });
    });
}); 