document.addEventListener('DOMContentLoaded', () => {
    // 表单提交处理
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // 获取表单数据
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // 这里可以添加表单验证逻辑
            
            // 显示提交成功消息
            showMessage('预约信息已提交，我们会尽快与您联系！');
            
            // 清空表单
            contactForm.reset();
        });
    }
    
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

// 显示消息提示
function showMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message-popup';
    messageDiv.innerHTML = `
        <div class="message-content">
            <i class="fas fa-check-circle"></i>
            <p>${message}</p>
        </div>
    `;
    
    document.body.appendChild(messageDiv);
    
    // 添加样式
    const style = document.createElement('style');
    style.textContent = `
        .message-popup {
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(0, 255, 157, 0.9);
            color: var(--background-color);
            padding: 1rem 2rem;
            border-radius: 8px;
            box-shadow: 0 5px 15px rgba(0, 255, 157, 0.3);
            z-index: 1000;
            animation: slideIn 0.5s ease, slideOut 0.5s ease 2.5s forwards;
        }
        
        .message-content {
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        
        .message-content i {
            font-size: 1.5rem;
        }
        
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    
    document.head.appendChild(style);
    
    // 3秒后移除消息
    setTimeout(() => {
        messageDiv.remove();
        style.remove();
    }, 3000);
} 