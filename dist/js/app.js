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


/*---------------------------------------------------------------------------
Submenu
---------------------------------------------------------------------------*/
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


/*---------------------------------------------------------------------------
Services slider
---------------------------------------------------------------------------*/
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


/*---------------------------------------------------------------------------
Placeholders in form
---------------------------------------------------------------------------*/
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



/*---------------------------------------------------------------------------
Cases slider
---------------------------------------------------------------------------*/
const casesSlider = document.querySelector(".cases__slider");

if (casesSlider) {
   const isPractice = casesSlider.classList.contains("cases-practice__slider");

   const casesSwiper = new Swiper(casesSlider, {
      loop: false,
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
         el: '.cases__slider-pagination',
         clickable: true,
      },
      navigation: {
         nextEl: '.cases__slider-button-next',
         prevEl: '.cases__slider-button-prev',
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
            slidesPerView: isPractice ? 4 : 3,
            spaceBetween: 30,
         },
         1920: {
            slidesPerView: isPractice ? 4 : 3,
            watchOverflow: true,
         }
      }
   });
}


/*---------------------------------------------------------------------------
Steps slider
---------------------------------------------------------------------------*/
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



/*---------------------------------------------------------------------------
Faq
---------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   function initAccordion({
      itemSelector,
      questionSelector,
      answerSelector,
      activeClass = "active",
      extraHeight = 40,
      single = true,
   }) {
      const items = document.querySelectorAll(itemSelector);
      if (!items || items.length === 0) return;

      items.forEach((item) => {
         if (!item) return;

         const question = item.querySelector(questionSelector);
         const answer = item.querySelector(answerSelector);
         if (!question || !answer) return;

         const toggleItem = () => {
            const isActive = item.classList.contains(activeClass);

            if (single) {
               items.forEach((el) => {
                  const elAnswer = el.querySelector(answerSelector);
                  if (elAnswer) {
                     el.classList.remove(activeClass);
                     elAnswer.style.maxHeight = null;
                  }
               });
            }

            if (!isActive) {
               item.classList.add(activeClass);
               answer.style.maxHeight = answer.scrollHeight + extraHeight + "px";
            } else {
               item.classList.remove(activeClass);
               answer.style.maxHeight = null;
            }
         };

         question.addEventListener("click", toggleItem);
      });
   }

   initAccordion({
      itemSelector: ".faq__item",
      questionSelector: ".faq__question",
      answerSelector: ".faq__answer",
      single: true,
   });

   initAccordion({
      itemSelector: ".questions__card-more",
      questionSelector: ".questions__card-more-button",
      answerSelector: ".questions__card-more-text",
      single: false,
   });
});


/*---------------------------------------------------------------------------
News slider
---------------------------------------------------------------------------*/
const newsSlider = document.querySelector(".news__slider");

if (newsSlider) {
   const newsSwiper = new Swiper(newsSlider, {
      loop: false,
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
         el: '.news__slider-pagination',
         clickable: true,
      },
      breakpoints: {
         320: {
            slidesPerView: 1.01,
            spaceBetween: 10,
         },
         768: {
            slidesPerView: 2,
            spaceBetween: 20,
         },
         1024: {
            slidesPerView: 3,
            watchOverflow: true,
            spaceBetween: 20,
         }
      }
   });
}


/*---------------------------------------------------------------------------
History slider
---------------------------------------------------------------------------*/
const historySlider = document.querySelector(".history__slider");

if (historySlider) {
   const historySwiper = new Swiper(historySlider, {
      loop: false,
      slidesPerView: 'auto',
      spaceBetween: 40,
      grabCursor: true,
      freeMode: true,
      pagination: {
         el: '.history__slider-pagination',
         clickable: true,
      }
   });
}


/*---------------------------------------------------------------------------
Worths slider
---------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   let worthsSlider = null;
   const worthsSliderContainer = document.querySelector(".worths__slider.swiper");

   function initServicesSlider() {
      if (window.innerWidth < 1024 && !worthsSlider) {
         worthsSlider = new Swiper(worthsSliderContainer, {
            slidesPerView: 1.1,
            spaceBetween: 10,
            loop: false,
            pagination: {
               el: '.worths__slider-pagination',
               clickable: true,
            }
         });
      } else if (window.innerWidth >= 1024 && worthsSlider) {
         worthsSlider.destroy(true, true);
         worthsSlider = null;
      }
   }

   initServicesSlider();
   window.addEventListener("resize", initServicesSlider);
});


/*---------------------------------------------------------------------------
Team slider
---------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   let teamSlider = null;
   const teamSliderContainer = document.querySelector(".team__slider");

   function initServicesSlider() {
      if (window.innerWidth <= 1024 && !teamSlider) {
         teamSlider = new Swiper(teamSliderContainer, {
            spaceBetween: 10,
            loop: false,
            pagination: {
               el: '.team__slider-pagination',
               clickable: true,
            },
            breakpoints: {
               320: {
                  slidesPerView: 1.04,
               },
               768: {
                  slidesPerView: 2,
               },
               1025: {
                  slidesPerView: 4,
               }
            }
         });
      } else if (window.innerWidth >= 1024 && teamSlider) {
         teamSlider.destroy(true, true);
         teamSlider = null;
      }
   }

   initServicesSlider();
   window.addEventListener("resize", initServicesSlider);
});

/*---------------------------------------------------------------------------
Теги слайдер
---------------------------------------------------------------------------*/
const labelsSlider = document.querySelector(".blog__labels");

if (labelsSlider) {
   const labelsSwiper = new Swiper(labelsSlider, {
      loop: false,
      slidesPerView: 'auto',
      spaceBetween: 14,
   });
}


/*---------------------------------------------------------------------------
Map
---------------------------------------------------------------------------*/
if (document.getElementById('map')) {
   ymaps.ready(function () {
      var mapCenter = [55.815140, 37.637470];
      var myMap = new ymaps.Map('map', {
         center: mapCenter,
         zoom: 15,
      }, {
         searchControlProvider: 'yandex#search'
      });

      var iconImageSize = window.innerWidth < 768 ? [40, 40] : [50, 50];
      var iconImageOffset = window.innerWidth < 768 ? [-20, -40] : [-30, -60];

      var myPlacemark = new ymaps.Placemark([55.815140, 37.637470], {
         hintContent: '"Pro.Списание"',
         balloonContent: 'г. Москва, Проспект Мира 105, строение 1, БЦ «Московская Типография» 5 этаж, м. ВДНХ'
      }, {
         iconLayout: 'default#image',
         iconImageHref: 'img/logo-location.png',
         iconImageSize: iconImageSize,
         iconImageOffset: iconImageOffset
      });

      myMap.behaviors.disable('scrollZoom');
      myMap.controls.remove('searchControl');
      myMap.controls.remove('fullscreenControl');
      myMap.controls.remove('rulerControl');
      myMap.geoObjects.add(myPlacemark);
   });
}


/*---------------------------------------------------------------------------
Видео отзывы
---------------------------------------------------------------------------*/
const videoRevSlider = document.querySelector(".video-reviews__slider");

if (videoRevSlider) {
   const videoRevSwiper = new Swiper(videoRevSlider, {
      loop: false,
      slidesPerView: 'auto',
      spaceBetween: 30,
      grabCursor: true,
      freeMode: false,
      navigation: {
         nextEl: '.video-reviews__slider-next',
         prevEl: '.video-reviews__slider-prev',
      },
      pagination: {
         el: '.video-reviews__slider-pagination',
         clickable: true,
      },
      breakpoints: {
         320: {
            spaceBetween: 12,
         },
         768: {
            spaceBetween: 20,
         },
         1024: {
            spaceBetween: 30,
         },
      }
   });
}


/*---------------------------------------------------------------------------
Play video in reviews
---------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const videoBlocks = document.querySelectorAll(".video-reviews__video");

   videoBlocks.forEach(block => {
      const video = block.querySelector("video");
      const playBtn = block.querySelector(".video-reviews__video-play");

      if (!video || !playBtn) return;

      playBtn.addEventListener("click", () => {
         videoBlocks.forEach(otherBlock => {
            const otherVideo = otherBlock.querySelector("video");
            const otherBtn = otherBlock.querySelector(".video-reviews__video-play");
            if (otherVideo !== video) {
               otherVideo.pause();
               otherBtn.classList.remove("hidden");
               otherVideo.removeAttribute("controls");
            }
         });

         video.play();
      });

      video.addEventListener("play", () => {
         playBtn.classList.add("hidden");
         video.setAttribute("controls", "controls");
      });

      video.addEventListener("ended", () => {
         playBtn.classList.remove("hidden");
         video.removeAttribute("controls");
         video.currentTime = 0;
      });
   });
});


/*---------------------------------------------------------------------------
Delevopment and review slider
---------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   function initResponsiveSlider({
      containerSelector,
      wrapperSelector,
      slideSelector,
      paginationSelector
   }) {
      let sliderInstance = null;
      const container = document.querySelector(containerSelector);

      if (!container) return;

      const wrapper = container.querySelector(wrapperSelector);
      const slides = wrapper.querySelectorAll(slideSelector);

      function toggleSlider() {
         if (window.innerWidth <= 1023 && !sliderInstance) {
            container.classList.add("swiper");
            wrapper.classList.add("swiper-wrapper");
            slides.forEach(slide => slide.classList.add("swiper-slide"));

            sliderInstance = new Swiper(container, {
               slidesPerView: 1.04,
               spaceBetween: 10,
               pagination: {
                  el: paginationSelector,
                  clickable: true,
               },
            });
         } else if (window.innerWidth >= 1024 && sliderInstance) {
            sliderInstance.destroy(true, true);
            sliderInstance = null;

            container.classList.remove("swiper");
            wrapper.classList.remove("swiper-wrapper");
            slides.forEach(slide => slide.classList.remove("swiper-slide"));
         }
      }

      toggleSlider();
      window.addEventListener("resize", toggleSlider);
   }

   // development
   initResponsiveSlider({
      containerSelector: ".development__slider",
      wrapperSelector: ".development__slider-wrapper",
      slideSelector: ".development__slide",
      paginationSelector: ".development__slider-pagination"
   });

   // reviews
   initResponsiveSlider({
      containerSelector: ".reviews__items",
      wrapperSelector: ".reviews__items-wrapper",
      slideSelector: ".reviews__item",
      paginationSelector: ".reviews__items-pagination"
   });
});


/*---------------------------------------------------------------------------
Height
---------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const items = document.querySelectorAll(".reviews__item");

   function setEqualHeight() {
      items.forEach(item => item.style.height = "");

      if (window.innerWidth >= 1024 && items.length > 0) {
         let maxHeight = 0;

         items.forEach(item => {
            const h = item.offsetHeight;
            if (h > maxHeight) maxHeight = h;
         });

         items.forEach(item => item.style.height = maxHeight + "px");
      }
   }

   setEqualHeight();
   window.addEventListener("resize", setEqualHeight);
});

})();

/******/ })()
;