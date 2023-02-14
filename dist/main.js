/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const contact = () => {

    // elements
    const title = document.createElement("h2");
    title.textContent = "Contact (todo)";

    title.setAttribute("id", "tab-content");

    return title;
    
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const home = () => {

    // elements
    const container = document.createElement("div");
    const title = document.createElement("h2");
    const description = document.createElement("p");
    const opening_hours = document.createElement("p");
    const address = document.createElement("p");

    title.textContent = "Cafe and espresso bar.";
    description.textContent = "A great place to start your day, have a break or have a conversation.";
    opening_hours.innerHTML = "Open from Monday to Saturday,<br>from 6am to 20pm.";
    address.textContent = "Cafeteria Street, 404 - Nowhere"; 

    container.setAttribute("id", "tab-content");
    container.appendChild(title);
    container.appendChild(description);
    container.appendChild(opening_hours);
    container.appendChild(address);

    return container;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);

/***/ }),

/***/ "./src/layout.js":
/*!***********************!*\
  !*** ./src/layout.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");




function initLayout() {

    const content = document.getElementById('content');

    // header
    const header = document.createElement("header");
    const title = document.createElement("h1");
    title.textContent = "The Cafe";

    // Nav
    const nav = document.createElement("ul");
    const homeBtn = createNavItem("Home", nav);
    const menuBtn = createNavItem("Menu", nav);
    const contactBtn = createNavItem("Contact", nav);

    // Handle page content display on button click
    homeBtn.addEventListener("click", () => {
        updateContent(homeBtn, (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])(), content);
        setActive(homeBtn);
    });

    menuBtn.addEventListener("click", () => {
        updateContent(menuBtn, (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])(), content);
        setActive(menuBtn);
    });

    contactBtn.addEventListener("click", () => {
        updateContent(contactBtn, (0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])(), content);
        setActive(contactBtn);
    });

    // Fixed content
    header.appendChild(title);
    header.appendChild(nav);
    content.appendChild(header);

    // Init home page as active
    content.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])());
    homeBtn.classList.add("active");
}

function createNavItem(name, nav_container) {

    // Create list item and button
    const item = document.createElement("li");
    const btn = document.createElement("button");

    // Set button
    btn.textContent = name;
    btn.setAttribute("type", "button");
    btn.classList.add("nav-btn");

    // Append
    item.appendChild(btn);
    nav_container.appendChild(item);

    return btn;

}

function updateContent(btn, page, content) {

    if (!btn.classList.contains("active")) {
        console.log("update tab");
        const container = document.getElementById("tab-content");
        container.remove();
        content.appendChild(page);
    }

}

function setActive(btn) {
    const navButtons = document.querySelectorAll(".nav-btn");

    for (let i = 0; i < navButtons.length; i++) {
        console.log(navButtons[i].classList);
        if (navButtons[i] !== btn) {
            navButtons[i].classList.remove("active");
        } 
    }

    btn.classList.add("active");
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initLayout);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const menu = () => {

    // elements
    const menu_list = document.createElement("ul");
    addItem("Item 1", menu_list);
    addItem("Item 2", menu_list);
    addItem("Item 3", menu_list);
    addItem("Item 4", menu_list);
    addItem("Item 5", menu_list);
    addItem("Item 6", menu_list);

    menu_list.setAttribute("id", "tab-content");

    return menu_list;

}

function addItem(name, container) {
    const item = document.createElement("li");
    item.textContent = name;
    container.appendChild(item);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

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
/* harmony import */ var _layout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.js */ "./src/layout.js");


(0,_layout_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsT0FBTzs7Ozs7Ozs7Ozs7Ozs7QUNadEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCTztBQUNBO0FBQ007O0FBRWhDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQixpREFBSTtBQUNuQztBQUNBLEtBQUs7O0FBRUw7QUFDQSwrQkFBK0IsaURBQUk7QUFDbkM7QUFDQSxLQUFLOztBQUVMO0FBQ0Esa0NBQWtDLG9EQUFPO0FBQ3pDO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixpREFBSTtBQUM1QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWU7Ozs7Ozs7Ozs7Ozs7O0FDeEZmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJOzs7Ozs7VUN2Qm5CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOb0M7O0FBRXBDLHNEQUFVLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbGF5b3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb250YWN0ID0gKCkgPT4ge1xuXG4gICAgLy8gZWxlbWVudHNcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiQ29udGFjdCAodG9kbylcIjtcblxuICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFiLWNvbnRlbnRcIik7XG5cbiAgICByZXR1cm4gdGl0bGU7XG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3Q7IiwiY29uc3QgaG9tZSA9ICgpID0+IHtcblxuICAgIC8vIGVsZW1lbnRzXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IG9wZW5pbmdfaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiQ2FmZSBhbmQgZXNwcmVzc28gYmFyLlwiO1xuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJBIGdyZWF0IHBsYWNlIHRvIHN0YXJ0IHlvdXIgZGF5LCBoYXZlIGEgYnJlYWsgb3IgaGF2ZSBhIGNvbnZlcnNhdGlvbi5cIjtcbiAgICBvcGVuaW5nX2hvdXJzLmlubmVySFRNTCA9IFwiT3BlbiBmcm9tIE1vbmRheSB0byBTYXR1cmRheSw8YnI+ZnJvbSA2YW0gdG8gMjBwbS5cIjtcbiAgICBhZGRyZXNzLnRleHRDb250ZW50ID0gXCJDYWZldGVyaWEgU3RyZWV0LCA0MDQgLSBOb3doZXJlXCI7IFxuXG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFiLWNvbnRlbnRcIik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChvcGVuaW5nX2hvdXJzKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBob21lOyIsImltcG9ydCBob21lIGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCBtZW51IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCBjb250YWN0IGZyb20gXCIuL2NvbnRhY3RcIjtcblxuZnVuY3Rpb24gaW5pdExheW91dCgpIHtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gICAgLy8gaGVhZGVyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiVGhlIENhZmVcIjtcblxuICAgIC8vIE5hdlxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBjb25zdCBob21lQnRuID0gY3JlYXRlTmF2SXRlbShcIkhvbWVcIiwgbmF2KTtcbiAgICBjb25zdCBtZW51QnRuID0gY3JlYXRlTmF2SXRlbShcIk1lbnVcIiwgbmF2KTtcbiAgICBjb25zdCBjb250YWN0QnRuID0gY3JlYXRlTmF2SXRlbShcIkNvbnRhY3RcIiwgbmF2KTtcblxuICAgIC8vIEhhbmRsZSBwYWdlIGNvbnRlbnQgZGlzcGxheSBvbiBidXR0b24gY2xpY2tcbiAgICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHVwZGF0ZUNvbnRlbnQoaG9tZUJ0biwgaG9tZSgpLCBjb250ZW50KTtcbiAgICAgICAgc2V0QWN0aXZlKGhvbWVCdG4pO1xuICAgIH0pO1xuXG4gICAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB1cGRhdGVDb250ZW50KG1lbnVCdG4sIG1lbnUoKSwgY29udGVudCk7XG4gICAgICAgIHNldEFjdGl2ZShtZW51QnRuKTtcbiAgICB9KTtcblxuICAgIGNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdXBkYXRlQ29udGVudChjb250YWN0QnRuLCBjb250YWN0KCksIGNvbnRlbnQpO1xuICAgICAgICBzZXRBY3RpdmUoY29udGFjdEJ0bik7XG4gICAgfSk7XG5cbiAgICAvLyBGaXhlZCBjb250ZW50XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICAvLyBJbml0IGhvbWUgcGFnZSBhcyBhY3RpdmVcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhvbWUoKSk7XG4gICAgaG9tZUJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOYXZJdGVtKG5hbWUsIG5hdl9jb250YWluZXIpIHtcblxuICAgIC8vIENyZWF0ZSBsaXN0IGl0ZW0gYW5kIGJ1dHRvblxuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgIC8vIFNldCBidXR0b25cbiAgICBidG4udGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwibmF2LWJ0blwiKTtcblxuICAgIC8vIEFwcGVuZFxuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICBuYXZfY29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW0pO1xuXG4gICAgcmV0dXJuIGJ0bjtcblxufVxuXG5mdW5jdGlvbiB1cGRhdGVDb250ZW50KGJ0biwgcGFnZSwgY29udGVudCkge1xuXG4gICAgaWYgKCFidG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidXBkYXRlIHRhYlwiKTtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YWItY29udGVudFwiKTtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHBhZ2UpO1xuICAgIH1cblxufVxuXG5mdW5jdGlvbiBzZXRBY3RpdmUoYnRuKSB7XG4gICAgY29uc3QgbmF2QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LWJ0blwiKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmF2QnV0dG9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zb2xlLmxvZyhuYXZCdXR0b25zW2ldLmNsYXNzTGlzdCk7XG4gICAgICAgIGlmIChuYXZCdXR0b25zW2ldICE9PSBidG4pIHtcbiAgICAgICAgICAgIG5hdkJ1dHRvbnNbaV0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICBidG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdExheW91dCIsImNvbnN0IG1lbnUgPSAoKSA9PiB7XG5cbiAgICAvLyBlbGVtZW50c1xuICAgIGNvbnN0IG1lbnVfbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBhZGRJdGVtKFwiSXRlbSAxXCIsIG1lbnVfbGlzdCk7XG4gICAgYWRkSXRlbShcIkl0ZW0gMlwiLCBtZW51X2xpc3QpO1xuICAgIGFkZEl0ZW0oXCJJdGVtIDNcIiwgbWVudV9saXN0KTtcbiAgICBhZGRJdGVtKFwiSXRlbSA0XCIsIG1lbnVfbGlzdCk7XG4gICAgYWRkSXRlbShcIkl0ZW0gNVwiLCBtZW51X2xpc3QpO1xuICAgIGFkZEl0ZW0oXCJJdGVtIDZcIiwgbWVudV9saXN0KTtcblxuICAgIG1lbnVfbGlzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhYi1jb250ZW50XCIpO1xuXG4gICAgcmV0dXJuIG1lbnVfbGlzdDtcblxufVxuXG5mdW5jdGlvbiBhZGRJdGVtKG5hbWUsIGNvbnRhaW5lcikge1xuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgaXRlbS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZW51OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGluaXRMYXlvdXQgZnJvbSBcIi4vbGF5b3V0LmpzXCJcblxuaW5pdExheW91dCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==