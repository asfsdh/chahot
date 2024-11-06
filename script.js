function showSection(sectionId) {
    // 隐藏所有内容区域
    const sections = document.querySelectorAll('.section-content');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    
    // 显示选定的内容区域
    document.getElementById(sectionId).style.display = 'block';
}
