const sidebarOpenCloseButton = document.getElementById('sidebarOpenCloseButton');
const sidebarInnerLayer = document.getElementById('sidebarInnerLayer');
const sidebar = document.getElementById('sidebar');
const sidebarCloseButton = document.getElementById('sidebarCloseButton');
const sidebarContent = document.getElementById('sidebarContent');
const changeThemeButton = document.getElementById('changeThemeButton');
const sunIcon = document.getElementById('sunIcon');
const moonIcon = document.getElementById('moonIcon');

const TRANSLATE_SIDEBAR_CLASS = 'translate-x-[-100%]'
const ANIMATION_SIDEBAR_FADEOUT_CLASS = 'animate-sidebarFadeOut'


//? Suporting system perference and manual  theme selection
//* On page load or when changing themes
function checkThemeSelected() {
    if (localStorage.getItem('theme') === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    } else {
        document.documentElement.classList.remove('dark');
    }
}

checkThemeSelected();


changeThemeButton.addEventListener('click', () => {
    sunIcon.classList.toggle('hidden');
    moonIcon.classList.toggle('hidden');

    if (sunIcon.classList.contains('hidden')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }

    checkThemeSelected();
})






function closeSidebar() {
    sidebar.classList.add(TRANSLATE_SIDEBAR_CLASS);
    sidebarContent.classList.add(ANIMATION_SIDEBAR_FADEOUT_CLASS);
    sidebarInnerLayer.classList.add(TRANSLATE_SIDEBAR_CLASS);
}

sidebarOpenCloseButton.addEventListener('click', () => {
    sidebar.classList.toggle(TRANSLATE_SIDEBAR_CLASS);
    sidebarInnerLayer.classList.toggle(TRANSLATE_SIDEBAR_CLASS);

    if (sidebar.classList.contains(TRANSLATE_SIDEBAR_CLASS)) {
        sidebarContent.classList.add(ANIMATION_SIDEBAR_FADEOUT_CLASS);
    } else {
        sidebarContent.classList.remove(ANIMATION_SIDEBAR_FADEOUT_CLASS);
    }
})

sidebarInnerLayer.addEventListener('click', () => {
    closeSidebar();
})

sidebarCloseButton.addEventListener('click', () => {
    closeSidebar();
})