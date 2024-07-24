import './style.css';

// Element selectors
const phoneMenu = document.getElementById('phone_menu');
const menuBtn = document.getElementById('menu_btn');
const closeBtn = document.getElementById('close_btn');
const menuItems = document.querySelectorAll('.menu-item');
const darkModeToggle = document.getElementById('darkModeToggle');
const darkModeIcon = document.getElementById('darkModeIcon');
const lightModeIcon = document.getElementById('lightModeIcon');
const body = document.body;

// Function to toggle menu visibility
const toggleMenu = () => {
    phoneMenu.classList.toggle('hidden');
    closeBtn.classList.toggle('hidden');
    toggleBodyScroll();
};

// Function to enable or disable body scrolling
const toggleBodyScroll = () => {
    body.classList.toggle('overflow-hidden');
};

// Event listeners for menu items to close menu and enable scrolling
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        phoneMenu.classList.add('hidden');
        closeBtn.classList.add('hidden');
        toggleBodyScroll();
    });
});

// Event listeners for opening and closing the menu
menuBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);

// Initial theme setup and event listener for dark mode toggle
document.addEventListener('DOMContentLoaded', () => {
    // Check for saved user preference on load
    if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.classList.add('dark');
        darkModeIcon.classList.add('hidden');
        lightModeIcon.classList.remove('hidden');
    } else {
        document.documentElement.classList.remove('dark');
        darkModeIcon.classList.remove('hidden');
        lightModeIcon.classList.add('hidden');
    }

    // Toggle dark mode and save preference
    darkModeToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        if (document.documentElement.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
            darkModeIcon.classList.add('hidden');
            lightModeIcon.classList.remove('hidden');
        } else {
            localStorage.setItem('theme', 'light');
            darkModeIcon.classList.remove('hidden');
            lightModeIcon.classList.add('hidden');
        }
    });
});
