function showSection(sectionId) {
    const sections = document.querySelectorAll('.section-content');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'block';
    }

    const tabs = document.querySelectorAll('.section-table td');
    tabs.forEach(tab => {
        tab.classList.remove('active-section-tab');
    });

    const clickedTab = document.querySelector(`.section-table td[onclick="showSection('${sectionId}')"]`);
    if (clickedTab) {
        clickedTab.classList.add('active-section-tab');
    }
}