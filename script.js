// Открытие/закрытие мобильного меню
const burgerIcon = document.querySelector('.burger-icon');
const mobileNavMenu = document.querySelector('.mobile-nav-menu');

burgerIcon.addEventListener('click', () => {
    mobileNavMenu.classList.toggle('active');
});

// Закрытие меню при клике вне его
document.addEventListener('click', (event) => {
    if (!mobileNavMenu.contains(event.target) && !burgerIcon.contains(event.target)) {
        mobileNavMenu.classList.remove('active');
    }
});

// Обработчик кликов для навигационных элементов
const navItems = document.querySelectorAll('.nav-item, .mobile-nav-item');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        // Получаем id раздела из атрибута data-target
        const targetId = item.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);

        // Скроллим страницу до соответствующего элемента
        targetElement.scrollIntoView({ behavior: 'smooth' });

        // Закрываем мобильное меню после клика
        mobileNavMenu.classList.remove('active');
    });
});
