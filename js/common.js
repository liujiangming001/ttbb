// 获取当前时间并格式化
function updateStatusBarTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    
    // 补零
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    
    const timeString = hours + ':' + minutes;
    
    // 更新状态栏时间
    const timeElement = document.querySelector('.ios-status-bar .time');
    if (timeElement) {
        timeElement.textContent = timeString;
    }
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', function() {
    // 初始化状态栏时间
    updateStatusBarTime();
    
    // 每分钟更新一次时间
    setInterval(updateStatusBarTime, 60000);
    
    // 为底部导航栏添加点击事件
    const tabItems = document.querySelectorAll('.bottom-tab-bar .tab-item');
    tabItems.forEach(item => {
        item.addEventListener('click', function() {
            // 获取目标页面
            const target = this.getAttribute('data-target');
            if (target) {
                // 在真实App中这里会进行页面跳转
                console.log('Navigate to: ' + target);
                
                // 在原型中，我们只更新激活状态
                tabItems.forEach(tab => tab.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
    
    // 为迷你播放器添加点击事件
    const miniPlayer = document.querySelector('.mini-player');
    if (miniPlayer) {
        miniPlayer.addEventListener('click', function() {
            // 在真实App中这里会打开播放器页面
            console.log('Open player page');
        });
    }
    
    // 初始化当前页面的激活标签
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage) {
        const activeTab = document.querySelector(`.bottom-tab-bar .tab-item[data-target="${currentPage}"]`);
        if (activeTab) {
            activeTab.classList.add('active');
        }
    }
}); 