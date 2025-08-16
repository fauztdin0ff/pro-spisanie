/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isWebp": () => (/* binding */ isWebp)
/* harmony export */ });
// проверка поддержки webp, добавление класса webp или no-webp
function isWebp() {
   //проверка поддержки webp
   function testWebP(callback) {

      var webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height == 2);
      };
      webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }

   //добавление класса
   testWebP(function (support) {
      if (support == true) {
         document.querySelector('body').classList.add('webp');
      } else {
         document.querySelector('body').classList.add('no-webp');
      }
   });
}


/*------------------------------Burger menu---------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   const menuIcon = document.querySelector(".menu__icon");
   const menuBody = document.querySelector(".header__main-body");
   const body = document.querySelector("body");

   if (menuIcon && menuBody) {
      // Открытие/закрытие меню по иконке
      menuIcon.addEventListener("click", function () {
         menuIcon.classList.toggle("active");
         menuBody.classList.toggle("active");
         body.classList.toggle("no-scroll");
      });

      // Закрытие меню при клике вне области меню
      document.addEventListener("click", function (event) {
         if (!menuBody.contains(event.target) && !menuIcon.contains(event.target)) {
            menuIcon.classList.remove("active");
            menuBody.classList.remove("active");
            body.classList.remove("no-scroll");
         }
      });
   }
});


/***/ })
/******/ 	]);
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
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.isWebp();

/*------------------------------
Submenu
---------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const toggles = document.querySelectorAll(".menu__toggle");

   toggles.forEach(toggle => {
      toggle.addEventListener("click", e => {
         e.preventDefault();

         const li = toggle.closest("li");
         const subMenu = li.querySelector(".menu__sublist");

         if (li && subMenu) {
            li.classList.toggle("active");
            subMenu.classList.toggle("show");
         }
      });
   });
});


/*------------------------------
Services slider
---------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   let servicesSlider = null;
   const sliderContainer = document.querySelector(".services__cards-slider");

   function initServicesSlider() {
      if (window.innerWidth < 1024 && !servicesSlider) {
         servicesSlider = new Swiper(sliderContainer, {
            slidesPerView: 1.2,
            spaceBetween: 10,
            loop: false,
            pagination: {
               el: '.services__cards-pagination',
               clickable: true,
            },
            breakpoints: {
               320: {
                  slidesPerView: 1.1,
               },
               480: {
                  slidesPerView: 1.8,
               },
               768: {
                  slidesPerView: 1.8,
               }
            }
         });
      } else if (window.innerWidth >= 1024 && servicesSlider) {
         servicesSlider.destroy(true, true);
         servicesSlider = null;
      }
   }

   initServicesSlider();
   window.addEventListener("resize", initServicesSlider);
});


/*------------------------------
Placeholders in form
---------------------------*/
document.addEventListener('DOMContentLoaded', function () {
   const forms = document.querySelectorAll('.form-request');

   forms.forEach(form => {
      const radios = form.querySelectorAll('.form-request__area input[type="radio"][name="method"]');
      const textInput = form.querySelector('.form-request__methods-input input[type="text"]');

      if (!radios.length || !textInput) return;

      function updatePlaceholder(radio) {
         const placeholder = radio.getAttribute('data-placeholder') || '';
         textInput.setAttribute('placeholder', placeholder);
         textInput.focus();
      }

      radios.forEach(radio => {
         radio.addEventListener('change', function () {
            updatePlaceholder(this);
         });
      });
   });
});


/*------------------------------
Animation
---------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
   }

   gsap.registerPlugin(ScrollTrigger);

   function waitForScrollRestoration(callback) {
      let lastY = window.scrollY;
      let sameCount = 0;

      function check() {
         const currentY = window.scrollY;
         if (Math.abs(currentY - lastY) < 1) {
            sameCount++;
            if (sameCount >= 5) {
               callback();
               return;
            }
         } else {
            sameCount = 0;
            lastY = currentY;
         }
         requestAnimationFrame(check);
      }
      check();
   }

   function initStackScroll({ selector, requestBlock = null, swiperSelector = null, paginationSelector = null, breakpoint = 1024 }) {
      const slides = document.querySelectorAll(selector);
      let swiperInstance = null;
      let triggers = [];

      function initGSAP() {
         triggers.forEach(st => st.kill());
         triggers = [];

         slides.forEach((slide, i) => {
            const endTarget = slides[i + 1] || requestBlock;

            if (endTarget) {
               let st = ScrollTrigger.create({
                  trigger: slide,
                  start: "top 90",
                  endTrigger: endTarget,
                  end: "top 90",
                  pin: true,
                  pinSpacing: false,
                  scrub: true,
                  invalidateOnRefresh: true,
               });
               triggers.push(st);
            }
         });

         ScrollTrigger.refresh();
      }

      function initSwiper() {
         if (!swiperSelector || swiperInstance) return;
         swiperInstance = new Swiper(swiperSelector, {
            slidesPerView: 1.1,
            spaceBetween: 10,
            pagination: paginationSelector ? {
               el: paginationSelector,
               clickable: true
            } : false
         });
      }

      function destroySwiper() {
         if (swiperInstance) {
            swiperInstance.destroy(true, true);
            swiperInstance = null;
         }
      }

      function checkMode() {
         const isDesktop = window.innerWidth >= breakpoint;

         if (isDesktop) {
            destroySwiper();
            initGSAP();
         } else {
            ScrollTrigger.getAll().forEach(st => st.kill());
            destroySwiper();
            initSwiper();
         }
      }

      window.addEventListener("load", () => {
         waitForScrollRestoration(() => {
            setTimeout(() => {
               checkMode();
               requestAnimationFrame(() => {
                  ScrollTrigger.refresh();
               });
            }, 50);
         });
      });

      window.addEventListener("resize", () => {
         clearTimeout(window.resizeTimer);
         window.resizeTimer = setTimeout(() => {
            checkMode();
            ScrollTrigger.refresh();
         }, 150);
      });
   }


   // Инициализация блоков
   initStackScroll({
      selector: ".development__slide",
      requestBlock: document.querySelector(".development__request"),
      swiperSelector: ".development__slider",
      paginationSelector: ".development__slider-pagination",
   });

   initStackScroll({
      selector: ".reviews__item",
      swiperSelector: ".reviews__items",
      paginationSelector: ".reviews__items-pagination",
   });
});

/*------------------------------
Cases slider
---------------------------*/
const casesSlider = document.querySelector(".cases__slider");

if (casesSlider) {
   const casesSwiper = new Swiper(casesSlider, {
      loop: false,
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
         el: '.cases__slider-pagination',
         clickable: true,
      },
      breakpoints: {
         320: {
            slidesPerView: 1,
            spaceBetween: 10,
         },
         768: {
            slidesPerView: 2,
            spaceBetween: 20,
         },
         1400: {
            slidesPerView: 3,
            spaceBetween: 30,
         },
         1920: {
            slidesPerView: 3,
            watchOverflow: true,
         }
      }
   });
}


/*------------------------------
Steps slider
---------------------------*/
const stepsSlider = document.querySelector(".steps__slider");

if (stepsSlider) {
   const stepsSwiper = new Swiper(stepsSlider, {
      loop: false,
      slidesPerView: 4,
      spaceBetween: 30,
      pagination: {
         el: '.steps__slider-pagination',
         clickable: true,
      },
      breakpoints: {
         320: {
            slidesPerView: 1.1,
            spaceBetween: 10,
         },
         768: {
            slidesPerView: 2,
            spaceBetween: 20,
         },
         1024: {
            slidesPerView: 3,
            spaceBetween: 20,
         },
         1400: {
            slidesPerView: 4,
            spaceBetween: 30,
         },
         1920: {
            slidesPerView: 4,
            watchOverflow: true,
         }
      }
   });
}



/*------------------------------
Faq
---------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const faqItems = document.querySelectorAll(".faq__item");

   if (!faqItems || faqItems.length === 0) return;

   faqItems.forEach((item) => {
      if (!item) return;

      const question = item.querySelector(".faq__question");
      const answer = item.querySelector(".faq__answer");

      if (!question || !answer) return;

      const toggleFaqItem = () => {
         const isActive = item.classList.contains("active");

         faqItems.forEach((el) => {
            const elAnswer = el.querySelector(".faq__answer");
            if (elAnswer) {
               el.classList.remove("active");
               elAnswer.style.maxHeight = null;
            }
         });

         if (!isActive) {
            item.classList.add("active");
            answer.style.maxHeight = answer.scrollHeight + 40 + "px";
         }
      };

      question.addEventListener("click", toggleFaqItem);
   });
});


})();

/******/ })()
;