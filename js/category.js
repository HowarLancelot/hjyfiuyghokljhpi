document.addEventListener('DOMContentLoaded', () => {
    // 获取URL参数
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('type');

    // 分类标题映射
    const categoryTitles = {
        'wedding': '婚礼跟拍',
        'hanfu': '汉服写真',
        'engagement': '订婚领证',
        'commercial': '商业活动'
    };

    // 更新页面标题
    const categoryTitle = document.getElementById('categoryTitle');
    categoryTitle.textContent = categoryTitles[category] || '作品展示';

    // 加载分类图片
    const categoryGrid = document.getElementById('categoryGrid');
    const images = categoryImages[category] || [];

    images.forEach((image, index) => {
        const item = document.createElement('div');
        item.className = 'category-item';
        item.innerHTML = `
            <img src="${image.src}" alt="${image.alt}">
            <div class="portfolio-overlay">
                <h3>${image.title}</h3>
                <p>${image.description}</p>
            </div>
        `;
        
        // 添加点击放大功能
        item.addEventListener('click', () => {
            const modal = document.createElement('div');
            modal.className = 'portfolio-modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <img src="${image.src}" alt="${image.alt}">
                    <div class="modal-info">
                        <h3>${image.title}</h3>
                        <p>${image.description}</p>
                    </div>
                    <button class="modal-close">&times;</button>
                </div>
            `;

            document.body.appendChild(modal);

            modal.addEventListener('click', (e) => {
                if (e.target.classList.contains('portfolio-modal') || 
                    e.target.classList.contains('modal-close')) {
                    modal.remove();
                }
            });
        });

        categoryGrid.appendChild(item);

        // 添加渐入动画
        setTimeout(() => {
            item.classList.add('show');
        }, index * 100);
    });
}); 