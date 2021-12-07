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
    contact.classList.add('contact-div')

    const number = document.createElement('p');
    number.textContent = '789 456 123'

    const address = document.createElement('p');
    address.textContent = '1600 Pennsylvania Avenue NW, Washington, DC 20500'

    const mapImage = document.createElement('img');
    mapImage.src = 'images/mapimage.jpeg'
    mapImage.alt = 'mapimage'
    mapImage.classList.add('map-img')

    contact.appendChild(number);
    contact.appendChild(address);
    contact.appendChild(mapImage);

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
    h3.textContent = 'Best Restaurant 4 your daily meals'
    about.appendChild(h3);

    const p = document.createElement('p');
    p.textContent = "A restuarant made for you to easily choose your perfact choice of food, it saves time and you don't need to spend time thinking for the perfact choice, it's all perfact with our limited choices";
    about.appendChild(p);

    const h2 = document.createElement('h2');
    h2.textContent = 'Visit us or take it with you';
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
    cImage.src = `images/${name.toLowerCase()}.png`;
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


function loadPage() {
  const content = document.getElementById('content');

  content.appendChild(createHeader());
  content.appendChild(createNav());
  content.appendChild(createFooter());
  content.appendChild(createMain());
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
    // loadHome();
    (0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
    addNavEvents();
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWU7Ozs7Ozs7Ozs7Ozs7O0FDNUJmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7QUM1QnZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsbUJBQW1CO0FBQzlDLG9CQUFvQixLQUFLO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7O0FDL0N2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFFBQVE7Ozs7OztVQ25FdkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ044QztBQUNSO0FBQ1M7QUFDTjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix5REFBUTtBQUNwQyw0QkFBNEIsNERBQVE7QUFDcEMsK0JBQStCLCtEQUFXO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlFQUFRO0FBQ1o7QUFDQSxJQUFJLDREQUFRO0FBQ1o7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL3BhZ2UtbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlQ29udGFjdCgpIHtcclxuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1kaXYnKVxyXG5cclxuICAgIGNvbnN0IG51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIG51bWJlci50ZXh0Q29udGVudCA9ICc3ODkgNDU2IDEyMydcclxuXHJcbiAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgYWRkcmVzcy50ZXh0Q29udGVudCA9ICcxNjAwIFBlbm5zeWx2YW5pYSBBdmVudWUgTlcsIFdhc2hpbmd0b24sIERDIDIwNTAwJ1xyXG5cclxuICAgIGNvbnN0IG1hcEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBtYXBJbWFnZS5zcmMgPSAnaW1hZ2VzL21hcGltYWdlLmpwZWcnXHJcbiAgICBtYXBJbWFnZS5hbHQgPSAnbWFwaW1hZ2UnXHJcbiAgICBtYXBJbWFnZS5jbGFzc0xpc3QuYWRkKCdtYXAtaW1nJylcclxuXHJcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKG51bWJlcik7XHJcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGFkZHJlc3MpO1xyXG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChtYXBJbWFnZSk7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRhY3RcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZENvbnRhY3QoKSB7XHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcclxuICAgIG1haW4udGV4dENvbnRlbnQgPSAnJztcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFjdCgpKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZENvbnRhY3QiLCJmdW5jdGlvbiBpbmZvcm1hdGlvbigpIHtcclxuICAgIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhYm91dC5jbGFzc0xpc3QuYWRkKCdhYm91dC1kaXYnKTtcclxuXHJcbiAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBoMy50ZXh0Q29udGVudCA9ICdCZXN0IFJlc3RhdXJhbnQgNCB5b3VyIGRhaWx5IG1lYWxzJ1xyXG4gICAgYWJvdXQuYXBwZW5kQ2hpbGQoaDMpO1xyXG5cclxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwLnRleHRDb250ZW50ID0gXCJBIHJlc3R1YXJhbnQgbWFkZSBmb3IgeW91IHRvIGVhc2lseSBjaG9vc2UgeW91ciBwZXJmYWN0IGNob2ljZSBvZiBmb29kLCBpdCBzYXZlcyB0aW1lIGFuZCB5b3UgZG9uJ3QgbmVlZCB0byBzcGVuZCB0aW1lIHRoaW5raW5nIGZvciB0aGUgcGVyZmFjdCBjaG9pY2UsIGl0J3MgYWxsIHBlcmZhY3Qgd2l0aCBvdXIgbGltaXRlZCBjaG9pY2VzXCI7XHJcbiAgICBhYm91dC5hcHBlbmRDaGlsZChwKTtcclxuXHJcbiAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBoMi50ZXh0Q29udGVudCA9ICdWaXNpdCB1cyBvciB0YWtlIGl0IHdpdGggeW91JztcclxuICAgIGFib3V0LmFwcGVuZENoaWxkKGgyKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIGFib3V0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkSG9tZSgpIHtcclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xyXG4gICAgbWFpbi50ZXh0Q29udGVudCA9ICcnO1xyXG5cclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoaW5mb3JtYXRpb24oKSk7XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWU7IiwiZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcclxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudS1kaXYnKVxyXG5cclxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oJ1dhZmZsZScsICdTdHJhd2JlcnJ5LCBXYWZmbGUnLCAnMjAkJykpO1xyXG4gICAgbWVudS5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbSgnU2hyaW1wJywgJ1NocmltcCwgU291cCwgVmVnZXRhYmxlcyAnLCAnMjAkJykpO1xyXG4gICAgbWVudS5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbSgnRmlzaCcsICdGaXNoLCBQb3RhdG8sIExlbW9uJywgJzIwJCcpKTtcclxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oJ0J1cmdlcicsICdCdXJnZXIsIEZyaWVzLCBTYXVzYWdlJywgJzIwJCcpKTtcclxuXHJcbiAgICBjb25zdCBjcmVkaXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjcmVkaXRzLmNsYXNzTGlzdC5hZGQoJ2NyZWRpdHMnKTtcclxuICAgIGNyZWRpdHMuaW5uZXJIVE1MID0gXCI8YSBocmVmPSdodHRwczovL3d3dy5mcmVlcGlrLmNvbS92ZWN0b3JzL2JhY2tncm91bmQnPkJhY2tncm91bmQgdmVjdG9yIGNyZWF0ZWQgYnkgZnJlZXBpayAtIHd3dy5mcmVlcGlrLmNvbTwvYT5cIjtcclxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoY3JlZGl0cyk7XHJcblxyXG4gICAgcmV0dXJuIG1lbnU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtKG5hbWUsIGRlc2NyaXB0aW9uLCBwcmljZSkge1xyXG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgY05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgY29uc3QgY0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY29uc3QgY1ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgY29uc3QgY0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcblxyXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdtZW51LWNhcmQnKVxyXG5cclxuICAgIGNOYW1lLnRleHRDb250ZW50ID0gbmFtZTtcclxuICAgIGNEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xyXG4gICAgY1ByaWNlLnRleHRDb250ZW50ID0gcHJpY2U7XHJcbiAgICBjSW1hZ2Uuc3JjID0gYGltYWdlcy8ke25hbWUudG9Mb3dlckNhc2UoKX0ucG5nYDtcclxuICAgIGNJbWFnZS5hbHQgPSBgJHtuYW1lfWA7XHJcblxyXG4gICAgY2FyZC5hcHBlbmRDaGlsZChjTmFtZSk7XHJcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNEZXNjcmlwdGlvbik7XHJcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNQcmljZSk7XHJcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNJbWFnZSk7XHJcblxyXG4gICAgcmV0dXJuIGNhcmRcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGxvYWRNZW51KCkge1xyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XHJcbiAgICBtYWluLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnUoKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRNZW51XHJcbiIsImZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XHJcblxyXG4gIGNvbnN0IHdlYnNpdGVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgd2Vic2l0ZVRpdGxlLmNsYXNzTGlzdC5hZGQoJ3dlYnNpdGUtdGl0bGUnKVxyXG4gIHdlYnNpdGVUaXRsZS50ZXh0Q29udGVudCA9ICdSZXN0YXVyYW50IDQgbWVhbCc7XHJcblxyXG4gIGhlYWRlci5hcHBlbmRDaGlsZCh3ZWJzaXRlVGl0bGUpO1xyXG5cclxuICByZXR1cm4gaGVhZGVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOYXYoKSB7XHJcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XHJcblxyXG4gIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cclxuICBob21lQnRuLmNsYXNzTGlzdC5hZGQoJ25hdi1idG4nLCAnaG9tZScpO1xyXG4gIG1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnbmF2LWJ0bicsICdtZW51Jyk7XHJcbiAgY29udGFjdEJ0bi5jbGFzc0xpc3QuYWRkKCduYXYtYnRuJywgJ2NvbnRhY3QnKTtcclxuXHJcbiAgaG9tZUJ0bi50ZXh0Q29udGVudCA9ICdIb21lJztcclxuICBtZW51QnRuLnRleHRDb250ZW50ID0gJ01lbnUnO1xyXG4gIGNvbnRhY3RCdG4udGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XHJcblxyXG4gIG5hdi5hcHBlbmRDaGlsZChob21lQnRuKTtcclxuICBuYXYuYXBwZW5kQ2hpbGQobWVudUJ0bik7XHJcbiAgbmF2LmFwcGVuZENoaWxkKGNvbnRhY3RCdG4pO1xyXG5cclxuICByZXR1cm4gbmF2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNYWluKCkge1xyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgbWFpbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW4nKTtcclxuICByZXR1cm4gbWFpbjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xyXG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xyXG5cclxuICBjb25zdCBnaXRodWJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZ2l0aHViTGluay5pbm5lckhUTUwgPSAnTWFkZSBieTogPGEgaHJlZj0gXCJodHRwczovL2dpdGh1Yi5jb20vTW9oYW1lZE1hYWl6XCI+TW9oYW1lZCBNYWFpejwvYT4nXHJcblxyXG4gIGNvbnN0IGdpdGh1Ykljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgZ2l0aHViSWNvbi5jbGFzc0xpc3QuYWRkKCdmYWInKTtcclxuICBnaXRodWJJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLWdpdGh1YicpO1xyXG5cclxuICBnaXRodWJMaW5rLmFwcGVuZENoaWxkKGdpdGh1Ykljb24pO1xyXG4gIGZvb3Rlci5hcHBlbmRDaGlsZChnaXRodWJMaW5rKTtcclxuXHJcbiAgcmV0dXJuIGZvb3RlcjtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGxvYWRQYWdlKCkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG5cclxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU5hdigpKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XHJcbn1cclxuICBcclxuZXhwb3J0IGRlZmF1bHQgbG9hZFBhZ2U7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbG9hZFBhZ2UgZnJvbSAnLi9tb2R1bGVzL3BhZ2UtbG9hZC5qcyc7XHJcbmltcG9ydCBsb2FkSG9tZSBmcm9tICcuL21vZHVsZXMvaG9tZSc7XHJcbmltcG9ydCBsb2FkQ29udGFjdCBmcm9tICcuL21vZHVsZXMvY29udGFjdC5qcyc7XHJcbmltcG9ydCBsb2FkTWVudSBmcm9tICcuL21vZHVsZXMvbWVudS5qcyc7XHJcblxyXG5sb2FkV2Vic2l0ZSgpXHJcblxyXG5cclxuZnVuY3Rpb24gYWRkTmF2RXZlbnRzKCkge1xyXG4gICAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0Jyk7XHJcbiAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUnKTtcclxuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpO1xyXG5cclxuXHJcbiAgICBob21lQnRuLm9uY2xpY2sgPSAoKSA9PiBsb2FkSG9tZSgpO1xyXG4gICAgbWVudUJ0bi5vbmNsaWNrID0gKCkgPT4gbG9hZE1lbnUoKTtcclxuICAgIGNvbnRhY3RCdG4ub25jbGljayA9ICgpID0+IGxvYWRDb250YWN0KCk7XHJcblxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gbG9hZFdlYnNpdGUoKSB7XHJcbiAgICBsb2FkUGFnZSgpO1xyXG4gICAgLy8gbG9hZEhvbWUoKTtcclxuICAgIGxvYWRNZW51KCk7XHJcbiAgICBhZGROYXZFdmVudHMoKTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=