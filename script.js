// 主功能脚本
$(document).ready(function () {
    // 初始化显示首页
    $("#home").addClass("active");
    $('.nav-item[data-section="home"]').addClass("active");
    
    // 移除骨架屏占位
    $(".skeleton").remove();
    
    // 导航切换
    $(".nav-item").click(function () {
        const sectionId = $(this).data("section");
        
        // 更新导航状态
        $(".nav-item").removeClass("active");
        $(this).addClass("active");
        
        // 切换内容区域
        $(".content-section").removeClass("active");
        $(`#${sectionId}`).addClass("active");
        
        // 滚动到顶部
        window.scrollTo(0, 0);
    });
    
    // 性能优化：延迟加载背景图片
    const loadBackgrounds = function() {
        $(".bg-mountains").css("background-image", "url(https://img.freepik.com/free-vector/hand-drawn-mountain-landscape_23-2149070214.jpg)");
        $(".bg-clouds").css("background-image", "url(https://img.freepik.com/free-vector/hand-painted-watercolor-cloud-background_52683-61515.jpg)");
    };
    
    // 当用户开始交互时加载背景
    $(document).on("mousemove scroll touchstart", function() {
        loadBackgrounds();
        $(document).off("mousemove scroll touchstart");
    });
    
    // 10秒后如果用户未交互，自动加载背景
    setTimeout(loadBackgrounds, 10000);
    
    // 性能监控
    window.addEventListener('load', function() {
        const timing = performance.timing;
        const loadTime = timing.loadEventEnd - timing.navigationStart;
        console.log(`页面加载时间: ${loadTime}ms`);
    });
});