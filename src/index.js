import loadPage from './modules/page-load.js';
import loadHome from './modules/home';
import loadContact from './modules/contact.js';
import loadMenu from './modules/menu.js';

loadWebsite()

function addNavEvents() {
    const contactBtn = document.querySelector('.contact');
    const homeBtn = document.querySelector('.home');
    const menuBtn = document.querySelector('.menu');

    homeBtn.onclick = () => loadHome();
    menuBtn.onclick = () => loadMenu();
    contactBtn.onclick = () => loadContact();
}

function loadWebsite() {
    loadPage();
    loadHome();
    // loadContact();
    addNavEvents();
}
