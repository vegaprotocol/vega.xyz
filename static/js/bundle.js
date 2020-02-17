/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/scramble.js":
/*!*******************************!*\
  !*** ./assets/js/scramble.js ***!
  \*******************************/
/*! exports provided: scramble */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scramble\", function() { return scramble; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nDOMTokenList.prototype.addMany = function (classes) {\n  var array = classes.split(' ');\n\n  for (var i = 0, length = array.length; i < length; i++) {\n    this.add(array[i]);\n  }\n};\n\nvar Scramble =\n/*#__PURE__*/\nfunction () {\n  function Scramble() {\n    _classCallCheck(this, Scramble);\n  }\n\n  _createClass(Scramble, [{\n    key: \"scrambleInit\",\n    value: function scrambleInit(node, remainVisible) {\n      var textNodes = Scramble.getTextNodes(node);\n      textNodes.forEach(function (textNode) {\n        // don't bother wrapping spaces\n        if (textNode.textContent.trim() !== '') {\n          var elClasses = 'flip';\n\n          if (remainVisible) {\n            elClasses = 'flip stay-visible';\n          }\n\n          Scramble.wrapEachCharacter(textNode, 'span', elClasses);\n        }\n      });\n    }\n  }, {\n    key: \"sequentialScramble\",\n    value: function sequentialScramble(node, letterDelay, initDelay) {\n      if (!node.classList.contains('scrambling')) {\n        node.classList.add('scrambling');\n        var i = 0;\n        var timer = setTimeout(function flipTimer() {\n          var el = node.querySelectorAll('.flip')[i];\n\n          if (el) {\n            var originalLetter = el.textContent;\n            var randomChar = Scramble.letters()[Math.floor(Math.random() * Scramble.letters().length)];\n            el.textContent = randomChar;\n            el.classList.add('flop');\n            setTimeout(function () {\n              el.textContent = originalLetter;\n            }, letterDelay);\n            i++;\n            timer = setTimeout(flipTimer, letterDelay);\n          } else {\n            setTimeout(function () {\n              node.classList.remove('scrambling');\n            }, 50);\n          }\n        }, initDelay);\n      }\n    }\n  }, {\n    key: \"parallelScramble\",\n    value: function parallelScramble(node, letterDelay, initDelay, noOfScrambles) {\n      if (!node.classList.contains('scrambling')) {\n        node.classList.add('scrambling');\n        var el = node.querySelectorAll('.flip');\n        el.forEach(function (character) {\n          if (character.textContent.trim() !== '') {\n            var currentChar = 0;\n            var originalLetter = character.textContent;\n            var timer = setTimeout(function flipTimer() {\n              if (currentChar < noOfScrambles) {\n                var randomChar = Scramble.letters()[Math.floor(Math.random() * Scramble.letters().length)];\n                character.textContent = randomChar;\n                currentChar++;\n                timer = setTimeout(flipTimer, letterDelay);\n              } else {\n                character.textContent = originalLetter;\n                setTimeout(function () {\n                  node.classList.remove('scrambling');\n                }, 50);\n              }\n            }, initDelay);\n          }\n        });\n      }\n    }\n  }], [{\n    key: \"getTextNodes\",\n\n    /*\n     * recursively get all text nodes as an array for a given element\n     */\n    value: function getTextNodes(node) {\n      var childTextNodes = [];\n\n      if (!node.hasChildNodes()) {\n        return;\n      }\n\n      var childNodes = node.childNodes;\n\n      for (var i = 0; i < childNodes.length; i++) {\n        if (childNodes[i].nodeType == Node.TEXT_NODE) {\n          childTextNodes.push(childNodes[i]);\n        } else if (childNodes[i].nodeType == Node.ELEMENT_NODE) {\n          Array.prototype.push.apply(childTextNodes, Scramble.getTextNodes(childNodes[i]));\n        }\n      }\n\n      return childTextNodes;\n    }\n    /*\n     * given a text node, wrap each character in the given tag.\n     */\n\n  }, {\n    key: \"wrapEachCharacter\",\n    value: function wrapEachCharacter(textNode, tag, styleClass) {\n      var text = textNode.nodeValue.trim();\n      var parent = textNode.parentNode;\n      var characters = text.split('');\n      characters.forEach(function (character) {\n        var element = document.createElement(tag);\n\n        if (styleClass) {\n          element.classList.addMany(styleClass);\n        }\n\n        var characterNode = document.createTextNode(character);\n        element.appendChild(characterNode);\n        parent.insertBefore(element, textNode);\n      });\n      parent.removeChild(textNode);\n    } // list of possible letters to scramble to\n\n  }, {\n    key: \"letters\",\n    value: function letters() {\n      var letters = \"ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,':()&!?\";\n      var lettersArr = letters.split(\"\");\n      return lettersArr;\n    }\n  }]);\n\n  return Scramble;\n}();\n\nvar scramble = new Scramble();\n\n//# sourceURL=webpack:///./assets/js/scramble.js?");

/***/ }),

/***/ "./assets/js/site.js":
/*!***************************!*\
  !*** ./assets/js/site.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jump_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jump.js */ \"./node_modules/jump.js/dist/jump.module.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _scramble_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scramble.js */ \"./assets/js/scramble.js\");\n\n\n\n/*\n * find and return closest element\n */\n\nfunction closest(el, selector) {\n  var matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;\n\n  while (el) {\n    if (matchesSelector.call(el, selector)) {\n      return el;\n    } else {\n      el = el.parentElement;\n    }\n  }\n\n  return null;\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  document.querySelector('body').classList.add('js'); // persist toggle state across sessions\n\n  var toggleSwitchCheckbox = document.querySelector('#toggleSwitch');\n\n  if (toggleSwitchCheckbox) {\n    if (js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get('toggle')) {\n      toggleSwitchCheckbox.checked = true;\n    }\n\n    toggleSwitchCheckbox.addEventListener('change', function () {\n      if (this.checked) {\n        js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('toggle', 'yes');\n      } else {\n        js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove('toggle');\n      }\n    });\n  } // custom cursor\n\n\n  var body = document.querySelector('body');\n  var cursor = document.createElement('div');\n  cursor.id = \"cursor\";\n  body.appendChild(cursor);\n  document.addEventListener(\"mousemove\", function (e) {\n    cursor.style.left = \"\".concat(e.clientX, \"px\");\n    cursor.style.top = \"\".concat(e.clientY, \"px\");\n  });\n  var hoverable = document.querySelectorAll(\"a, button, input\");\n  hoverable.forEach(function (hoverableEl) {\n    hoverableEl.addEventListener('mouseover', function () {\n      cursor.classList.add('on-link');\n    });\n    hoverableEl.addEventListener('mouseout', function () {\n      cursor.classList.remove('on-link');\n    });\n  }); // smooth scroll links\n  // if(window.location.hash) {\n  //  \t\tjump(window.location.hash)\n  //\t}\n  //  \tlet anchorlinks = document.querySelectorAll('a[href*=\"#\"]');\n  // for (let item of anchorlinks) {\n  //     item.addEventListener('click', (el) =>{\n  //     \tlet target;\n  //     \tlet hash = el.currentTarget.getAttribute('href').split('#')[1];\n  //     \tif(hash === 'top'){\n  //     \t\ttarget = 'body';\n  //     \t} else{\n  //     \t\ttarget = '#' + hash;\n  //     \t}\n  //         jump(target);\n  //     });\n  // }\n  // open/close footer link sections\n\n  var footerItemLinks = document.querySelectorAll('.footer-item-link');\n  footerItemLinks.forEach(function (footerItemLink) {\n    return footerItemLink.addEventListener('click', function (el) {\n      document.querySelectorAll('.footer-item').forEach(function (el) {\n        el.classList.remove('open');\n      });\n      el.target.closest('.footer-item').classList.add('open');\n    });\n  }); // flip last footer element on click\n\n  var footerSwitchLinks = document.querySelectorAll('.footer-switch-link');\n  footerSwitchLinks.forEach(function (footerSwitchLink) {\n    return footerSwitchLink.addEventListener('click', function (el) {\n      el.currentTarget.classList.add('hidden');\n      el.currentTarget.nextElementSibling.classList.add('visible');\n    });\n  }); // slide toggle areas\n\n  document.querySelectorAll('.slide-toggle-area').forEach(function (slideToggleArea) {\n    slideToggleArea.querySelectorAll('.slide-toggle-trigger').forEach(function (slideToggleTrigger) {\n      slideToggleTrigger.addEventListener('click', function () {\n        if (!this.classList.contains('active')) {\n          this.classList.add('active');\n        } else {\n          this.classList.remove('active');\n        }\n\n        var slideTogglePanel = closest(this, '.slide-toggle-container').querySelector('.slide-toggle-panel');\n\n        if (!slideTogglePanel.classList.contains('active')) {\n          slideTogglePanel.classList.add('active');\n          slideTogglePanel.style.height = 'auto';\n          var height = slideTogglePanel.clientHeight + \"px\";\n          slideTogglePanel.style.height = '0px';\n          setTimeout(function () {\n            slideTogglePanel.style.height = height;\n          }, 0);\n        } else {\n          slideTogglePanel.style.height = '0px';\n          slideTogglePanel.addEventListener('transitionend', function () {\n            slideTogglePanel.classList.remove('active');\n          }, {\n            once: true\n          });\n        }\n      });\n    });\n  }); // scramble init\n\n  var scrambleHeadings = document.querySelectorAll('.scramble-heading');\n  scrambleHeadings.forEach(function (heading) {\n    _scramble_js__WEBPACK_IMPORTED_MODULE_2__[\"scramble\"].scrambleInit(heading);\n  }); // scramble headings\n\n  var scrambleHeadingLines = document.querySelectorAll('.scramble-heading .line');\n  scrambleHeadingLines.forEach(function (line) {\n    _scramble_js__WEBPACK_IMPORTED_MODULE_2__[\"scramble\"].sequentialScramble(line, 50, 800);\n  });\n  var scrambleOnHover = document.querySelectorAll('.scramble-on-hover');\n  scrambleOnHover.forEach(function (line) {\n    _scramble_js__WEBPACK_IMPORTED_MODULE_2__[\"scramble\"].scrambleInit(line, true);\n    line.addEventListener('mouseenter', function () {\n      _scramble_js__WEBPACK_IMPORTED_MODULE_2__[\"scramble\"].parallelScramble(this, 20, 0, 10);\n    });\n  }); // draggable 404 window\n\n  var dragElement = function dragElement(el) {\n    var pos1 = 0,\n        pos2 = 0,\n        pos3 = 0,\n        pos4 = 0;\n\n    if (document.getElementById(el.id + \"Header\")) {\n      // if present, the header is where you move the DIV from:\n      document.getElementById(el.id + \"Header\").onmousedown = dragMouseDown;\n    } else {\n      // otherwise, move the DIV from anywhere inside the DIV:\n      el.onmousedown = dragMouseDown;\n    }\n\n    function dragMouseDown(e) {\n      e = e || window.event;\n      e.preventDefault(); // get the mouse cursor position at startup:\n\n      pos3 = e.clientX;\n      pos4 = e.clientY;\n      document.onmouseup = closeDragElement; // call a function whenever the cursor moves:\n\n      document.onmousemove = elementDrag;\n    }\n\n    ;\n\n    function elementDrag(e) {\n      e = e || window.event;\n      e.preventDefault(); // calculate the new cursor position:\n\n      pos1 = pos3 - e.clientX;\n      pos2 = pos4 - e.clientY;\n      pos3 = e.clientX;\n      pos4 = e.clientY; // set the element's new position:\n\n      el.style.top = el.offsetTop - pos2 + \"px\";\n      el.style.left = el.offsetLeft - pos1 + \"px\";\n    }\n\n    function closeDragElement() {\n      // stop moving when mouse button is released:\n      document.onmouseup = null;\n      document.onmousemove = null;\n    }\n  };\n\n  var draggableItem = document.getElementById(\"appWindow\");\n\n  if (draggableItem) {\n    dragElement(draggableItem);\n  } // current section highlighting in table of contents\n\n\n  var tableOfContents = document.querySelector('.table-of-contents');\n  var firstMenuItem = document.querySelector('.table-of-contents li:first-child');\n\n  if (tableOfContents) {\n    firstMenuItem.classList.add('current');\n    document.addEventListener('scroll', function () {\n      var scrollDistance = document.querySelector('html').scrollTop;\n      var pageSections = document.querySelectorAll('#content .heading-panel');\n      pageSections.forEach(function (section, index) {\n        if (section.offsetTop - 2 <= scrollDistance) {\n          var active = tableOfContents.querySelector('li.current');\n\n          if (active) {\n            active.classList.remove('current');\n          }\n\n          tableOfContents.querySelectorAll('ul li')[index].classList.add('current');\n        }\n      });\n    });\n  }\n});\n\n//# sourceURL=webpack:///./assets/js/site.js?");

/***/ }),

/***/ "./assets/sass/style.scss":
/*!********************************!*\
  !*** ./assets/sass/style.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"../css/style.css\";\n\n//# sourceURL=webpack:///./assets/sass/style.scss?");

/***/ }),

/***/ "./node_modules/js-cookie/dist/js.cookie.js":
/*!**************************************************!*\
  !*** ./node_modules/js-cookie/dist/js.cookie.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*! js-cookie v3.0.0-beta.3 | MIT */\n;\n(function (global, factory) {\n   true ? module.exports = factory() :\n  undefined;\n}(this, function () { 'use strict';\n\n  var rfc6265Converter = {\n    read: function (value) {\n      return value.replace(/(%[\\dA-F]{2})+/gi, decodeURIComponent)\n    },\n    write: function (value) {\n      return encodeURIComponent(value).replace(\n        /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,\n        decodeURIComponent\n      )\n    }\n  };\n\n  function assign (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n      for (var key in source) {\n        target[key] = source[key];\n      }\n    }\n    return target\n  }\n\n  function init (converter, defaultAttributes) {\n    function set (key, value, attributes) {\n      if (typeof document === 'undefined') {\n        return\n      }\n\n      attributes = assign({}, defaultAttributes, attributes);\n\n      if (typeof attributes.expires === 'number') {\n        attributes.expires = new Date(Date.now() + attributes.expires * 864e5);\n      }\n      if (attributes.expires) {\n        attributes.expires = attributes.expires.toUTCString();\n      }\n\n      value = converter.write(value, key);\n\n      key = encodeURIComponent(key)\n        .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)\n        .replace(/[()]/g, escape);\n\n      var stringifiedAttributes = '';\n      for (var attributeName in attributes) {\n        if (!attributes[attributeName]) {\n          continue\n        }\n\n        stringifiedAttributes += '; ' + attributeName;\n\n        if (attributes[attributeName] === true) {\n          continue\n        }\n\n        // Considers RFC 6265 section 5.2:\n        // ...\n        // 3.  If the remaining unparsed-attributes contains a %x3B (\";\")\n        //     character:\n        // Consume the characters of the unparsed-attributes up to,\n        // not including, the first %x3B (\";\") character.\n        // ...\n        stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];\n      }\n\n      return (document.cookie = key + '=' + value + stringifiedAttributes)\n    }\n\n    function get (key) {\n      if (typeof document === 'undefined' || (arguments.length && !key)) {\n        return\n      }\n\n      // To prevent the for loop in the first place assign an empty array\n      // in case there are no cookies at all.\n      var cookies = document.cookie ? document.cookie.split('; ') : [];\n      var jar = {};\n      for (var i = 0; i < cookies.length; i++) {\n        var parts = cookies[i].split('=');\n        var cookie = parts.slice(1).join('=');\n\n        if (cookie[0] === '\"') {\n          cookie = cookie.slice(1, -1);\n        }\n\n        try {\n          var name = rfc6265Converter.read(parts[0]);\n          jar[name] = converter.read(cookie, name);\n\n          if (key === name) {\n            break\n          }\n        } catch (e) {}\n      }\n\n      return key ? jar[key] : jar\n    }\n\n    return Object.create(\n      {\n        set: set,\n        get: get,\n        remove: function (key, attributes) {\n          set(\n            key,\n            '',\n            assign({}, attributes, {\n              expires: -1\n            })\n          );\n        },\n        withAttributes: function (attributes) {\n          return init(this.converter, assign({}, this.attributes, attributes))\n        },\n        withConverter: function (converter) {\n          return init(assign({}, this.converter, converter), this.attributes)\n        }\n      },\n      {\n        attributes: { value: Object.freeze(defaultAttributes) },\n        converter: { value: Object.freeze(converter) }\n      }\n    )\n  }\n\n  var api = init(rfc6265Converter, { path: '/' });\n\n  return api;\n\n}));\n\n\n//# sourceURL=webpack:///./node_modules/js-cookie/dist/js.cookie.js?");

/***/ }),

/***/ "./node_modules/jump.js/dist/jump.module.js":
/*!**************************************************!*\
  !*** ./node_modules/jump.js/dist/jump.module.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Robert Penner's easeInOutQuad\n\n// find the rest of his easing functions here: http://robertpenner.com/easing/\n// find them exported for ES6 consumption here: https://github.com/jaxgeller/ez.js\n\nvar easeInOutQuad = function easeInOutQuad(t, b, c, d) {\n  t /= d / 2;\n  if (t < 1) return c / 2 * t * t + b;\n  t--;\n  return -c / 2 * (t * (t - 2) - 1) + b;\n};\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) {\n  return typeof obj;\n} : function (obj) {\n  return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n};\n\nvar jumper = function jumper() {\n  // private variable cache\n  // no variables are created during a jump, preventing memory leaks\n\n  var element = void 0; // element to scroll to                   (node)\n\n  var start = void 0; // where scroll starts                    (px)\n  var stop = void 0; // where scroll stops                     (px)\n\n  var offset = void 0; // adjustment from the stop position      (px)\n  var easing = void 0; // easing function                        (function)\n  var a11y = void 0; // accessibility support flag             (boolean)\n\n  var distance = void 0; // distance of scroll                     (px)\n  var duration = void 0; // scroll duration                        (ms)\n\n  var timeStart = void 0; // time scroll started                    (ms)\n  var timeElapsed = void 0; // time spent scrolling thus far          (ms)\n\n  var next = void 0; // next scroll position                   (px)\n\n  var callback = void 0; // to call when done scrolling            (function)\n\n  // scroll position helper\n\n  function location() {\n    return window.scrollY || window.pageYOffset;\n  }\n\n  // element offset helper\n\n  function top(element) {\n    return element.getBoundingClientRect().top + start;\n  }\n\n  // rAF loop helper\n\n  function loop(timeCurrent) {\n    // store time scroll started, if not started already\n    if (!timeStart) {\n      timeStart = timeCurrent;\n    }\n\n    // determine time spent scrolling so far\n    timeElapsed = timeCurrent - timeStart;\n\n    // calculate next scroll position\n    next = easing(timeElapsed, start, distance, duration);\n\n    // scroll to it\n    window.scrollTo(0, next);\n\n    // check progress\n    timeElapsed < duration ? window.requestAnimationFrame(loop) // continue scroll loop\n    : done(); // scrolling is done\n  }\n\n  // scroll finished helper\n\n  function done() {\n    // account for rAF time rounding inaccuracies\n    window.scrollTo(0, start + distance);\n\n    // if scrolling to an element, and accessibility is enabled\n    if (element && a11y) {\n      // add tabindex indicating programmatic focus\n      element.setAttribute('tabindex', '-1');\n\n      // focus the element\n      element.focus();\n    }\n\n    // if it exists, fire the callback\n    if (typeof callback === 'function') {\n      callback();\n    }\n\n    // reset time for next jump\n    timeStart = false;\n  }\n\n  // API\n\n  function jump(target) {\n    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n    // resolve options, or use defaults\n    duration = options.duration || 1000;\n    offset = options.offset || 0;\n    callback = options.callback; // \"undefined\" is a suitable default, and won't be called\n    easing = options.easing || easeInOutQuad;\n    a11y = options.a11y || false;\n\n    // cache starting position\n    start = location();\n\n    // resolve target\n    switch (typeof target === 'undefined' ? 'undefined' : _typeof(target)) {\n      // scroll from current position\n      case 'number':\n        element = undefined; // no element to scroll to\n        a11y = false; // make sure accessibility is off\n        stop = start + target;\n        break;\n\n      // scroll to element (node)\n      // bounding rect is relative to the viewport\n      case 'object':\n        element = target;\n        stop = top(element);\n        break;\n\n      // scroll to element (selector)\n      // bounding rect is relative to the viewport\n      case 'string':\n        element = document.querySelector(target);\n        stop = top(element);\n        break;\n    }\n\n    // resolve scroll distance, accounting for offset\n    distance = stop - start + offset;\n\n    // resolve duration\n    switch (_typeof(options.duration)) {\n      // number in ms\n      case 'number':\n        duration = options.duration;\n        break;\n\n      // function passed the distance of the scroll\n      case 'function':\n        duration = options.duration(distance);\n        break;\n    }\n\n    // start the loop\n    window.requestAnimationFrame(loop);\n  }\n\n  // expose only the jump method\n  return jump;\n};\n\n// export singleton\n\nvar singleton = jumper();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (singleton);\n\n\n//# sourceURL=webpack:///./node_modules/jump.js/dist/jump.module.js?");

/***/ }),

/***/ 0:
/*!**********************************************************!*\
  !*** multi ./assets/sass/style.scss ./assets/js/site.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./assets/sass/style.scss */\"./assets/sass/style.scss\");\nmodule.exports = __webpack_require__(/*! ./assets/js/site.js */\"./assets/js/site.js\");\n\n\n//# sourceURL=webpack:///multi_./assets/sass/style.scss_./assets/js/site.js?");

/***/ })

/******/ });