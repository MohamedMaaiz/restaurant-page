/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact-div');

    const number = document.createElement('p');
    number.textContent = '789 456 123';

    const mail = document.createElement('p');
    mail.textContent = 'restaurant@4meal.com';

    const address = document.createElement('p');
    address.textContent = '1600 Pennsylvania Avenue NW, Washington, DC 20500';

    const mapImage = document.createElement('img');
    mapImage.src = 'images/mapimage.jpeg';
    mapImage.alt = 'mapimage';
    mapImage.classList.add('map-img');

    const chatBtn = document.createElement('button');
    chatBtn.textContent = '';
    chatBtn.classList.add('chat-btn');

    contact.appendChild(number);
    contact.appendChild(mail);
    contact.appendChild(address);
    contact.appendChild(mapImage);
    contact.appendChild(chatBtn);

    return contact
}

function loadContact() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createContact());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function information() {
    const about = document.createElement('div');
    about.classList.add('about-div');

    const h3 = document.createElement('h3');
    h3.innerHTML  = '<p>Best Restaurant</p><p>4 your daily meals</p>'
    about.appendChild(h3);

    const p = document.createElement('p');
    p.textContent = "A restuarant made for you to easily choose your perfact choice of food, it saves time and you don't need to spend time thinking for the perfact choice, it's all perfact with our limited choices";
    about.appendChild(p);

    const h2 = document.createElement('h2');
    h2.innerHTML = '<p>Order Online,</p><p>we take it 4 you</p>';
    about.appendChild(h2);

    return about;
}

function loadHome() {
    const main = document.getElementById('main');
    main.textContent = '';

    main.appendChild(information());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu-div')

    menu.appendChild(createMenuItem('Waffle', 'Strawberry, Waffle', '20$'));
    menu.appendChild(createMenuItem('Shrimp', 'Shrimp, Soup, Vegetables ', '20$'));
    menu.appendChild(createMenuItem('Fish', 'Fish, Potato, Lemon', '20$'));
    menu.appendChild(createMenuItem('Burger', 'Burger, Fries, Sausage', '20$'));

    const credits = document.createElement('div');
    credits.classList.add('credits');
    credits.innerHTML = "<a href='https://www.freepik.com/vectors/background'>Background vector created by freepik - www.freepik.com</a>";
    menu.appendChild(credits);

    return menu;
}

function createMenuItem(name, description, price) {
    const card = document.createElement('div');
    const cName = document.createElement('h3');
    const cDescription = document.createElement('p');
    const cPrice = document.createElement('span');
    const cImage = document.createElement('img');

    card.classList.add('menu-card')

    cName.textContent = name;
    cDescription.textContent = description;
    cPrice.textContent = price;
    cImage.src = `images/${name}.png`;
    cImage.alt = `${name}`;

    card.appendChild(cName);
    card.appendChild(cDescription);
    card.appendChild(cPrice);
    card.appendChild(cImage);

    return card
}

function loadMenu() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createMenu());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);


/***/ }),

/***/ "./src/modules/page-load.js":
/*!**********************************!*\
  !*** ./src/modules/page-load.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createHeader() {
  const header = document.createElement('header');
  header.classList.add('header');

  const websiteTitle = document.createElement('h1');
  websiteTitle.classList.add('website-title')
  websiteTitle.textContent = 'Restaurant 4 meal';

  header.appendChild(websiteTitle);

  return header;
}

function createNav() {
  const nav = document.createElement('nav');

  const homeBtn = document.createElement('button');
  const menuBtn = document.createElement('button');
  const contactBtn = document.createElement('button');

  homeBtn.classList.add('nav-btn', 'home');
  menuBtn.classList.add('nav-btn', 'menu');
  contactBtn.classList.add('nav-btn', 'contact');

  homeBtn.textContent = 'Home';
  menuBtn.textContent = 'Menu';
  contactBtn.textContent = 'Contact';

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);

  return nav;
}

function createMain() {
  const main = document.createElement('main');
  main.setAttribute('id', 'main');
  return main;
}

function createFooter() {
  const footer = document.createElement('footer');

  const githubLink = document.createElement('div');
  githubLink.innerHTML = 'Made by: <a href= "https://github.com/MohamedMaaiz">Mohamed Maaiz</a>'

  const githubIcon = document.createElement('i');
  githubIcon.classList.add('fab');
  githubIcon.classList.add('fa-github');

  githubLink.appendChild(githubIcon);
  footer.appendChild(githubLink);

  return footer;
}

function navBtnActive() {
  const navBtns = document.querySelectorAll('.nav-btn');

  navBtns[0].classList.add('active');
  
  navBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      navBtns.forEach(btns => {
        btns.classList.remove('active')
      })
      btn.classList.add('active')
    })
  })
}

function loadPage() {
  const content = document.getElementById('content');

  content.appendChild(createHeader());
  content.appendChild(createNav());
  content.appendChild(createFooter());
  content.appendChild(createMain());

  navBtnActive();
}
  
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_page_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/page-load.js */ "./src/modules/page-load.js");
/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home */ "./src/modules/home.js");
/* harmony import */ var _modules_contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/contact.js */ "./src/modules/contact.js");
/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/menu.js */ "./src/modules/menu.js");





loadWebsite()

function addNavEvents() {
    const contactBtn = document.querySelector('.contact');
    const homeBtn = document.querySelector('.home');
    const menuBtn = document.querySelector('.menu');

    homeBtn.onclick = () => (0,_modules_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
    menuBtn.onclick = () => (0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
    contactBtn.onclick = () => (0,_modules_contact_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

function loadWebsite() {
    (0,_modules_page_load_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_modules_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
    addNavEvents();
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWU7Ozs7Ozs7Ozs7Ozs7O0FDckNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7OztBQzFCdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixLQUFLO0FBQ2hDLG9CQUFvQixLQUFLO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7OztBQzlDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFFBQVE7Ozs7OztVQ25GdkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ044QztBQUNSO0FBQ1M7QUFDTjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHlEQUFRO0FBQ3BDLDRCQUE0Qiw0REFBUTtBQUNwQywrQkFBK0IsK0RBQVc7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpRUFBUTtBQUNaLElBQUkseURBQVE7QUFDWjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvcGFnZS1sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVDb250YWN0KCkge1xyXG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWRpdicpO1xyXG5cclxuICAgIGNvbnN0IG51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIG51bWJlci50ZXh0Q29udGVudCA9ICc3ODkgNDU2IDEyMyc7XHJcblxyXG4gICAgY29uc3QgbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIG1haWwudGV4dENvbnRlbnQgPSAncmVzdGF1cmFudEA0bWVhbC5jb20nO1xyXG5cclxuICAgIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBhZGRyZXNzLnRleHRDb250ZW50ID0gJzE2MDAgUGVubnN5bHZhbmlhIEF2ZW51ZSBOVywgV2FzaGluZ3RvbiwgREMgMjA1MDAnO1xyXG5cclxuICAgIGNvbnN0IG1hcEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBtYXBJbWFnZS5zcmMgPSAnaW1hZ2VzL21hcGltYWdlLmpwZWcnO1xyXG4gICAgbWFwSW1hZ2UuYWx0ID0gJ21hcGltYWdlJztcclxuICAgIG1hcEltYWdlLmNsYXNzTGlzdC5hZGQoJ21hcC1pbWcnKTtcclxuXHJcbiAgICBjb25zdCBjaGF0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjaGF0QnRuLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICBjaGF0QnRuLmNsYXNzTGlzdC5hZGQoJ2NoYXQtYnRuJyk7XHJcblxyXG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChudW1iZXIpO1xyXG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChtYWlsKTtcclxuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XHJcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKG1hcEltYWdlKTtcclxuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY2hhdEJ0bik7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRhY3RcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZENvbnRhY3QoKSB7XHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcclxuICAgIG1haW4udGV4dENvbnRlbnQgPSAnJztcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFjdCgpKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZENvbnRhY3QiLCJmdW5jdGlvbiBpbmZvcm1hdGlvbigpIHtcclxuICAgIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhYm91dC5jbGFzc0xpc3QuYWRkKCdhYm91dC1kaXYnKTtcclxuXHJcbiAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBoMy5pbm5lckhUTUwgID0gJzxwPkJlc3QgUmVzdGF1cmFudDwvcD48cD40IHlvdXIgZGFpbHkgbWVhbHM8L3A+J1xyXG4gICAgYWJvdXQuYXBwZW5kQ2hpbGQoaDMpO1xyXG5cclxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwLnRleHRDb250ZW50ID0gXCJBIHJlc3R1YXJhbnQgbWFkZSBmb3IgeW91IHRvIGVhc2lseSBjaG9vc2UgeW91ciBwZXJmYWN0IGNob2ljZSBvZiBmb29kLCBpdCBzYXZlcyB0aW1lIGFuZCB5b3UgZG9uJ3QgbmVlZCB0byBzcGVuZCB0aW1lIHRoaW5raW5nIGZvciB0aGUgcGVyZmFjdCBjaG9pY2UsIGl0J3MgYWxsIHBlcmZhY3Qgd2l0aCBvdXIgbGltaXRlZCBjaG9pY2VzXCI7XHJcbiAgICBhYm91dC5hcHBlbmRDaGlsZChwKTtcclxuXHJcbiAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBoMi5pbm5lckhUTUwgPSAnPHA+T3JkZXIgT25saW5lLDwvcD48cD53ZSB0YWtlIGl0IDQgeW91PC9wPic7XHJcbiAgICBhYm91dC5hcHBlbmRDaGlsZChoMik7XHJcblxyXG4gICAgcmV0dXJuIGFib3V0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkSG9tZSgpIHtcclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xyXG4gICAgbWFpbi50ZXh0Q29udGVudCA9ICcnO1xyXG5cclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoaW5mb3JtYXRpb24oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRIb21lOyIsImZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XHJcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUtZGl2JylcclxuXHJcbiAgICBtZW51LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdXYWZmbGUnLCAnU3RyYXdiZXJyeSwgV2FmZmxlJywgJzIwJCcpKTtcclxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oJ1NocmltcCcsICdTaHJpbXAsIFNvdXAsIFZlZ2V0YWJsZXMgJywgJzIwJCcpKTtcclxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oJ0Zpc2gnLCAnRmlzaCwgUG90YXRvLCBMZW1vbicsICcyMCQnKSk7XHJcbiAgICBtZW51LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdCdXJnZXInLCAnQnVyZ2VyLCBGcmllcywgU2F1c2FnZScsICcyMCQnKSk7XHJcblxyXG4gICAgY29uc3QgY3JlZGl0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY3JlZGl0cy5jbGFzc0xpc3QuYWRkKCdjcmVkaXRzJyk7XHJcbiAgICBjcmVkaXRzLmlubmVySFRNTCA9IFwiPGEgaHJlZj0naHR0cHM6Ly93d3cuZnJlZXBpay5jb20vdmVjdG9ycy9iYWNrZ3JvdW5kJz5CYWNrZ3JvdW5kIHZlY3RvciBjcmVhdGVkIGJ5IGZyZWVwaWsgLSB3d3cuZnJlZXBpay5jb208L2E+XCI7XHJcbiAgICBtZW51LmFwcGVuZENoaWxkKGNyZWRpdHMpO1xyXG5cclxuICAgIHJldHVybiBtZW51O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNZW51SXRlbShuYW1lLCBkZXNjcmlwdGlvbiwgcHJpY2UpIHtcclxuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGNOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIGNvbnN0IGNEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnN0IGNQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGNvbnN0IGNJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5cclxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnbWVudS1jYXJkJylcclxuXHJcbiAgICBjTmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgICBjRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcclxuICAgIGNQcmljZS50ZXh0Q29udGVudCA9IHByaWNlO1xyXG4gICAgY0ltYWdlLnNyYyA9IGBpbWFnZXMvJHtuYW1lfS5wbmdgO1xyXG4gICAgY0ltYWdlLmFsdCA9IGAke25hbWV9YDtcclxuXHJcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNOYW1lKTtcclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY0Rlc2NyaXB0aW9uKTtcclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY1ByaWNlKTtcclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY0ltYWdlKTtcclxuXHJcbiAgICByZXR1cm4gY2FyZFxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkTWVudSgpIHtcclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xyXG4gICAgbWFpbi50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVNZW51KCkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVudVxyXG4iLCJmdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xyXG5cclxuICBjb25zdCB3ZWJzaXRlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gIHdlYnNpdGVUaXRsZS5jbGFzc0xpc3QuYWRkKCd3ZWJzaXRlLXRpdGxlJylcclxuICB3ZWJzaXRlVGl0bGUudGV4dENvbnRlbnQgPSAnUmVzdGF1cmFudCA0IG1lYWwnO1xyXG5cclxuICBoZWFkZXIuYXBwZW5kQ2hpbGQod2Vic2l0ZVRpdGxlKTtcclxuXHJcbiAgcmV0dXJuIGhlYWRlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTmF2KCkge1xyXG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xyXG5cclxuICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHJcbiAgaG9tZUJ0bi5jbGFzc0xpc3QuYWRkKCduYXYtYnRuJywgJ2hvbWUnKTtcclxuICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoJ25hdi1idG4nLCAnbWVudScpO1xyXG4gIGNvbnRhY3RCdG4uY2xhc3NMaXN0LmFkZCgnbmF2LWJ0bicsICdjb250YWN0Jyk7XHJcblxyXG4gIGhvbWVCdG4udGV4dENvbnRlbnQgPSAnSG9tZSc7XHJcbiAgbWVudUJ0bi50ZXh0Q29udGVudCA9ICdNZW51JztcclxuICBjb250YWN0QnRuLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xyXG5cclxuICBuYXYuYXBwZW5kQ2hpbGQoaG9tZUJ0bik7XHJcbiAgbmF2LmFwcGVuZENoaWxkKG1lbnVCdG4pO1xyXG4gIG5hdi5hcHBlbmRDaGlsZChjb250YWN0QnRuKTtcclxuXHJcbiAgcmV0dXJuIG5hdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gIG1haW4uc2V0QXR0cmlidXRlKCdpZCcsICdtYWluJyk7XHJcbiAgcmV0dXJuIG1haW47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcclxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuXHJcbiAgY29uc3QgZ2l0aHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGdpdGh1YkxpbmsuaW5uZXJIVE1MID0gJ01hZGUgYnk6IDxhIGhyZWY9IFwiaHR0cHM6Ly9naXRodWIuY29tL01vaGFtZWRNYWFpelwiPk1vaGFtZWQgTWFhaXo8L2E+J1xyXG5cclxuICBjb25zdCBnaXRodWJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gIGdpdGh1Ykljb24uY2xhc3NMaXN0LmFkZCgnZmFiJyk7XHJcbiAgZ2l0aHViSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1naXRodWInKTtcclxuXHJcbiAgZ2l0aHViTGluay5hcHBlbmRDaGlsZChnaXRodWJJY29uKTtcclxuICBmb290ZXIuYXBwZW5kQ2hpbGQoZ2l0aHViTGluayk7XHJcblxyXG4gIHJldHVybiBmb290ZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5hdkJ0bkFjdGl2ZSgpIHtcclxuICBjb25zdCBuYXZCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1idG4nKTtcclxuXHJcbiAgbmF2QnRuc1swXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICBcclxuICBuYXZCdG5zLmZvckVhY2goYnRuID0+IHtcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIG5hdkJ0bnMuZm9yRWFjaChidG5zID0+IHtcclxuICAgICAgICBidG5zLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICAgIH0pXHJcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gICAgfSlcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkUGFnZSgpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuXHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVOYXYoKSk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNYWluKCkpO1xyXG5cclxuICBuYXZCdG5BY3RpdmUoKTtcclxufVxyXG4gIFxyXG5leHBvcnQgZGVmYXVsdCBsb2FkUGFnZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBsb2FkUGFnZSBmcm9tICcuL21vZHVsZXMvcGFnZS1sb2FkLmpzJztcclxuaW1wb3J0IGxvYWRIb21lIGZyb20gJy4vbW9kdWxlcy9ob21lJztcclxuaW1wb3J0IGxvYWRDb250YWN0IGZyb20gJy4vbW9kdWxlcy9jb250YWN0LmpzJztcclxuaW1wb3J0IGxvYWRNZW51IGZyb20gJy4vbW9kdWxlcy9tZW51LmpzJztcclxuXHJcbmxvYWRXZWJzaXRlKClcclxuXHJcbmZ1bmN0aW9uIGFkZE5hdkV2ZW50cygpIHtcclxuICAgIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdCcpO1xyXG4gICAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lJyk7XHJcbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKTtcclxuXHJcbiAgICBob21lQnRuLm9uY2xpY2sgPSAoKSA9PiBsb2FkSG9tZSgpO1xyXG4gICAgbWVudUJ0bi5vbmNsaWNrID0gKCkgPT4gbG9hZE1lbnUoKTtcclxuICAgIGNvbnRhY3RCdG4ub25jbGljayA9ICgpID0+IGxvYWRDb250YWN0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRXZWJzaXRlKCkge1xyXG4gICAgbG9hZFBhZ2UoKTtcclxuICAgIGxvYWRIb21lKCk7XHJcbiAgICBhZGROYXZFdmVudHMoKTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=