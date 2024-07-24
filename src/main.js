import './style.css';


const phoneMenu = document.getElementById('phone_menu');
const menuBtn = document.getElementById('menu_btn');
const closeBtn = document.getElementById('close_btn');
const menuItems = document.querySelectorAll('.menu-item');
const body = document.body;
const darkModeToggle = document.getElementById('darkModeToggle');
const darkModeIcon = document.getElementById('darkModeIcon');
const lightModeIcon = document.getElementById('lightModeIcon');

const toggleMenu = () => {
    phoneMenu.classList.toggle('hidden');
    closeBtn.classList.toggle('hidden');
    toggleBodyScroll();
    
};

const toggleBodyScroll = () => {
    if (body.classList.contains('overflow-hidden')) {
        body.classList.remove('overflow-hidden');
    } else {
        body.classList.add('overflow-hidden');
    }
};

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        phoneMenu.classList.add('hidden');
        closeBtn.classList.add('hidden');
        toggleBodyScroll();
    });
});

darkModeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    darkModeIcon.classList.toggle('hidden');
    lightModeIcon.classList.toggle('hidden');
  });

menuBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);