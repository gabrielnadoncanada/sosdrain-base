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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/wp-content/themes/base/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 77);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return top; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return bottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return right; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return left; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return auto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return basePlacements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return end; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return clippingParents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return viewport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return popper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return reference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return variationPlacements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return placements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return beforeRead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return afterRead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return beforeMain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return main; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return afterMain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return beforeWrite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return write; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return afterWrite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return modifierPhases; });
var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isHTMLElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isShadowRoot; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getWindow_js__ = __webpack_require__(2);


function isElement(node) {
  var OwnElement = Object(__WEBPACK_IMPORTED_MODULE_0__getWindow_js__["a" /* default */])(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = Object(__WEBPACK_IMPORTED_MODULE_0__getWindow_js__["a" /* default */])(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = Object(__WEBPACK_IMPORTED_MODULE_0__getWindow_js__["a" /* default */])(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getWindow;
function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getBasePlacement;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enums_js__ = __webpack_require__(0);

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getDocumentElement;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__instanceOf_js__ = __webpack_require__(1);

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((Object(__WEBPACK_IMPORTED_MODULE_0__instanceOf_js__["a" /* isElement */])(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getNodeName;
function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return round; });
var max = Math.max;
var min = Math.min;
var round = Math.round;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getComputedStyle;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getWindow_js__ = __webpack_require__(2);

function getComputedStyle(element) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__getWindow_js__["a" /* default */])(element).getComputedStyle(element);
}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getBoundingClientRect;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__instanceOf_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_math_js__ = __webpack_require__(6);


function getBoundingClientRect(element, includeScale) {
  if (includeScale === void 0) {
    includeScale = false;
  }

  var rect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;

  if (Object(__WEBPACK_IMPORTED_MODULE_0__instanceOf_js__["b" /* isHTMLElement */])(element) && includeScale) {
    var offsetHeight = element.offsetHeight;
    var offsetWidth = element.offsetWidth; // Do not attempt to divide by 0, otherwise we get `Infinity` as scale
    // Fallback to 1 in case both values are `0`

    if (offsetWidth > 0) {
      scaleX = Object(__WEBPACK_IMPORTED_MODULE_1__utils_math_js__["c" /* round */])(rect.width) / offsetWidth || 1;
    }

    if (offsetHeight > 0) {
      scaleY = Object(__WEBPACK_IMPORTED_MODULE_1__utils_math_js__["c" /* round */])(rect.height) / offsetHeight || 1;
    }
  }

  return {
    width: rect.width / scaleX,
    height: rect.height / scaleY,
    top: rect.top / scaleY,
    right: rect.right / scaleX,
    bottom: rect.bottom / scaleY,
    left: rect.left / scaleX,
    x: rect.left / scaleX,
    y: rect.top / scaleY
  };
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getOffsetParent;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getWindow_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getNodeName_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getComputedStyle_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__instanceOf_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__isTableElement_js__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__getParentNode_js__ = __webpack_require__(14);







function getTrueOffsetParent(element) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_3__instanceOf_js__["b" /* isHTMLElement */])(element) || // https://github.com/popperjs/popper-core/issues/837
  Object(__WEBPACK_IMPORTED_MODULE_2__getComputedStyle_js__["a" /* default */])(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
  var isIE = navigator.userAgent.indexOf('Trident') !== -1;

  if (isIE && Object(__WEBPACK_IMPORTED_MODULE_3__instanceOf_js__["b" /* isHTMLElement */])(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = Object(__WEBPACK_IMPORTED_MODULE_2__getComputedStyle_js__["a" /* default */])(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = Object(__WEBPACK_IMPORTED_MODULE_5__getParentNode_js__["a" /* default */])(element);

  while (Object(__WEBPACK_IMPORTED_MODULE_3__instanceOf_js__["b" /* isHTMLElement */])(currentNode) && ['html', 'body'].indexOf(Object(__WEBPACK_IMPORTED_MODULE_1__getNodeName_js__["a" /* default */])(currentNode)) < 0) {
    var css = Object(__WEBPACK_IMPORTED_MODULE_2__getComputedStyle_js__["a" /* default */])(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = Object(__WEBPACK_IMPORTED_MODULE_0__getWindow_js__["a" /* default */])(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && Object(__WEBPACK_IMPORTED_MODULE_4__isTableElement_js__["a" /* default */])(offsetParent) && Object(__WEBPACK_IMPORTED_MODULE_2__getComputedStyle_js__["a" /* default */])(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (Object(__WEBPACK_IMPORTED_MODULE_1__getNodeName_js__["a" /* default */])(offsetParent) === 'html' || Object(__WEBPACK_IMPORTED_MODULE_1__getNodeName_js__["a" /* default */])(offsetParent) === 'body' && Object(__WEBPACK_IMPORTED_MODULE_2__getComputedStyle_js__["a" /* default */])(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getVariation;
function getVariation(placement) {
  return placement.split('-')[1];
}

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = detectOverflow;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom_utils_getClippingRect_js__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dom_utils_getDocumentElement_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dom_utils_getBoundingClientRect_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__computeOffsets_js__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rectToClientRect_js__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__enums_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dom_utils_instanceOf_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mergePaddingObject_js__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__expandToHashMap_js__ = __webpack_require__(37);








 // eslint-disable-next-line import/no-unused-modules

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? __WEBPACK_IMPORTED_MODULE_5__enums_js__["j" /* clippingParents */] : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? __WEBPACK_IMPORTED_MODULE_5__enums_js__["w" /* viewport */] : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? __WEBPACK_IMPORTED_MODULE_5__enums_js__["p" /* popper */] : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = Object(__WEBPACK_IMPORTED_MODULE_7__mergePaddingObject_js__["a" /* default */])(typeof padding !== 'number' ? padding : Object(__WEBPACK_IMPORTED_MODULE_8__expandToHashMap_js__["a" /* default */])(padding, __WEBPACK_IMPORTED_MODULE_5__enums_js__["e" /* basePlacements */]));
  var altContext = elementContext === __WEBPACK_IMPORTED_MODULE_5__enums_js__["p" /* popper */] ? __WEBPACK_IMPORTED_MODULE_5__enums_js__["r" /* reference */] : __WEBPACK_IMPORTED_MODULE_5__enums_js__["p" /* popper */];
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = Object(__WEBPACK_IMPORTED_MODULE_0__dom_utils_getClippingRect_js__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_6__dom_utils_instanceOf_js__["a" /* isElement */])(element) ? element : element.contextElement || Object(__WEBPACK_IMPORTED_MODULE_1__dom_utils_getDocumentElement_js__["a" /* default */])(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = Object(__WEBPACK_IMPORTED_MODULE_2__dom_utils_getBoundingClientRect_js__["a" /* default */])(state.elements.reference);
  var popperOffsets = Object(__WEBPACK_IMPORTED_MODULE_3__computeOffsets_js__["a" /* default */])({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = Object(__WEBPACK_IMPORTED_MODULE_4__rectToClientRect_js__["a" /* default */])(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === __WEBPACK_IMPORTED_MODULE_5__enums_js__["p" /* popper */] ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === __WEBPACK_IMPORTED_MODULE_5__enums_js__["p" /* popper */] && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [__WEBPACK_IMPORTED_MODULE_5__enums_js__["s" /* right */], __WEBPACK_IMPORTED_MODULE_5__enums_js__["i" /* bottom */]].indexOf(key) >= 0 ? 1 : -1;
      var axis = [__WEBPACK_IMPORTED_MODULE_5__enums_js__["u" /* top */], __WEBPACK_IMPORTED_MODULE_5__enums_js__["i" /* bottom */]].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getParentNode;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getNodeName_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getDocumentElement_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__instanceOf_js__ = __webpack_require__(1);



function getParentNode(element) {
  if (Object(__WEBPACK_IMPORTED_MODULE_0__getNodeName_js__["a" /* default */])(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    Object(__WEBPACK_IMPORTED_MODULE_2__instanceOf_js__["c" /* isShadowRoot */])(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Object(__WEBPACK_IMPORTED_MODULE_1__getDocumentElement_js__["a" /* default */])(element) // fallback

  );
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getBody;
function getBody () {
  var doc = document,
      body = doc.body;

  if (!body) {
    body = doc.createElement('body');
    body.fake = true;
  }

  return body;
}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setFakeBody;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__docElement_js__ = __webpack_require__(46);


function setFakeBody (body) {
  var docOverflow = '';
  if (body.fake) {
    docOverflow = __WEBPACK_IMPORTED_MODULE_0__docElement_js__["a" /* docElement */].style.overflow;
    //avoid crashing IE8, if background image is used
    body.style.background = '';
    //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
    body.style.overflow = __WEBPACK_IMPORTED_MODULE_0__docElement_js__["a" /* docElement */].style.overflow = 'hidden';
    __WEBPACK_IMPORTED_MODULE_0__docElement_js__["a" /* docElement */].appendChild(body);
  }

  return docOverflow;
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = resetFakeBody;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__docElement_js__ = __webpack_require__(46);


function resetFakeBody (body, docOverflow) {
  if (body.fake) {
    body.remove();
    __WEBPACK_IMPORTED_MODULE_0__docElement_js__["a" /* docElement */].style.overflow = docOverflow;
    // Trigger layout so kinetic scrolling isn't disabled in iOS6+
    // eslint-disable-next-line
    __WEBPACK_IMPORTED_MODULE_0__docElement_js__["a" /* docElement */].offsetHeight;
  }
}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom_utils_getNodeName_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dom_utils_instanceOf_js__ = __webpack_require__(1);

 // This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!Object(__WEBPACK_IMPORTED_MODULE_1__dom_utils_instanceOf_js__["b" /* isHTMLElement */])(element) || !Object(__WEBPACK_IMPORTED_MODULE_0__dom_utils_getNodeName_js__["a" /* default */])(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!Object(__WEBPACK_IMPORTED_MODULE_1__dom_utils_instanceOf_js__["b" /* isHTMLElement */])(element) || !Object(__WEBPACK_IMPORTED_MODULE_0__dom_utils_getNodeName_js__["a" /* default */])(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect,
  requires: ['computeStyles']
});

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getLayoutRect;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getBoundingClientRect_js__ = __webpack_require__(9);
 // Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = Object(__WEBPACK_IMPORTED_MODULE_0__getBoundingClientRect_js__["a" /* default */])(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getMainAxisFromPlacement;
function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* unused harmony export mapToStyles */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enums_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dom_utils_getOffsetParent_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dom_utils_getWindow_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dom_utils_getDocumentElement_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dom_utils_getComputedStyle_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_getBasePlacement_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_getVariation_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_math_js__ = __webpack_require__(6);







 // eslint-disable-next-line import/no-unused-modules

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: Object(__WEBPACK_IMPORTED_MODULE_7__utils_math_js__["c" /* round */])(x * dpr) / dpr || 0,
    y: Object(__WEBPACK_IMPORTED_MODULE_7__utils_math_js__["c" /* round */])(y * dpr) / dpr || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      variation = _ref2.variation,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets,
      isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x,
      x = _offsets$x === void 0 ? 0 : _offsets$x,
      _offsets$y = offsets.y,
      y = _offsets$y === void 0 ? 0 : _offsets$y;

  var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = __WEBPACK_IMPORTED_MODULE_0__enums_js__["l" /* left */];
  var sideY = __WEBPACK_IMPORTED_MODULE_0__enums_js__["u" /* top */];
  var win = window;

  if (adaptive) {
    var offsetParent = Object(__WEBPACK_IMPORTED_MODULE_1__dom_utils_getOffsetParent_js__["a" /* default */])(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === Object(__WEBPACK_IMPORTED_MODULE_2__dom_utils_getWindow_js__["a" /* default */])(popper)) {
      offsetParent = Object(__WEBPACK_IMPORTED_MODULE_3__dom_utils_getDocumentElement_js__["a" /* default */])(popper);

      if (Object(__WEBPACK_IMPORTED_MODULE_4__dom_utils_getComputedStyle_js__["a" /* default */])(offsetParent).position !== 'static' && position === 'absolute') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === __WEBPACK_IMPORTED_MODULE_0__enums_js__["u" /* top */] || (placement === __WEBPACK_IMPORTED_MODULE_0__enums_js__["l" /* left */] || placement === __WEBPACK_IMPORTED_MODULE_0__enums_js__["s" /* right */]) && variation === __WEBPACK_IMPORTED_MODULE_0__enums_js__["k" /* end */]) {
      sideY = __WEBPACK_IMPORTED_MODULE_0__enums_js__["i" /* bottom */];
      var offsetY = isFixed && win.visualViewport ? win.visualViewport.height : // $FlowFixMe[prop-missing]
      offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === __WEBPACK_IMPORTED_MODULE_0__enums_js__["l" /* left */] || (placement === __WEBPACK_IMPORTED_MODULE_0__enums_js__["u" /* top */] || placement === __WEBPACK_IMPORTED_MODULE_0__enums_js__["i" /* bottom */]) && variation === __WEBPACK_IMPORTED_MODULE_0__enums_js__["k" /* end */]) {
      sideX = __WEBPACK_IMPORTED_MODULE_0__enums_js__["s" /* right */];
      var offsetX = isFixed && win.visualViewport ? win.visualViewport.width : // $FlowFixMe[prop-missing]
      offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref4.x;
  y = _ref4.y;

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref5) {
  var state = _ref5.state,
      options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  if (process.env.NODE_ENV !== "production") {
    var transitionProperty = Object(__WEBPACK_IMPORTED_MODULE_4__dom_utils_getComputedStyle_js__["a" /* default */])(state.elements.popper).transitionProperty || '';

    if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
    }
  }

  var commonStyles = {
    placement: Object(__WEBPACK_IMPORTED_MODULE_5__utils_getBasePlacement_js__["a" /* default */])(state.placement),
    variation: Object(__WEBPACK_IMPORTED_MODULE_6__utils_getVariation_js__["a" /* default */])(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration,
    isFixed: state.options.strategy === 'fixed'
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(13)))

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom_utils_getWindow_js__ = __webpack_require__(2);
 // eslint-disable-next-line import/no-unused-modules

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = Object(__WEBPACK_IMPORTED_MODULE_0__dom_utils_getWindow_js__["a" /* default */])(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getWindowScrollBarX;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getBoundingClientRect_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getDocumentElement_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getWindowScroll_js__ = __webpack_require__(24);



function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return Object(__WEBPACK_IMPORTED_MODULE_0__getBoundingClientRect_js__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__getDocumentElement_js__["a" /* default */])(element)).left + Object(__WEBPACK_IMPORTED_MODULE_2__getWindowScroll_js__["a" /* default */])(element).scrollLeft;
}

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getWindowScroll;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getWindow_js__ = __webpack_require__(2);

function getWindowScroll(node) {
  var win = Object(__WEBPACK_IMPORTED_MODULE_0__getWindow_js__["a" /* default */])(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isScrollParent;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getComputedStyle_js__ = __webpack_require__(7);

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = Object(__WEBPACK_IMPORTED_MODULE_0__getComputedStyle_js__["a" /* default */])(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_computeOffsets_js__ = __webpack_require__(41);


function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = Object(__WEBPACK_IMPORTED_MODULE_0__utils_computeOffsets_js__["a" /* default */])({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
});

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["c"] = popperGenerator;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createPopper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom_utils_getCompositeRect_js__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dom_utils_getLayoutRect_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dom_utils_listScrollParents_js__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dom_utils_getOffsetParent_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dom_utils_getComputedStyle_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_orderModifiers_js__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_debounce_js__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_validateModifiers_js__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_uniqueBy_js__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_getBasePlacement_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_mergeByName_js__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_detectOverflow_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dom_utils_instanceOf_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__enums_js__ = __webpack_require__(0);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_11__utils_detectOverflow_js__["a"]; });














var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(setOptionsAction) {
        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: Object(__WEBPACK_IMPORTED_MODULE_12__dom_utils_instanceOf_js__["a" /* isElement */])(reference) ? Object(__WEBPACK_IMPORTED_MODULE_2__dom_utils_listScrollParents_js__["a" /* default */])(reference) : reference.contextElement ? Object(__WEBPACK_IMPORTED_MODULE_2__dom_utils_listScrollParents_js__["a" /* default */])(reference.contextElement) : [],
          popper: Object(__WEBPACK_IMPORTED_MODULE_2__dom_utils_listScrollParents_js__["a" /* default */])(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = Object(__WEBPACK_IMPORTED_MODULE_5__utils_orderModifiers_js__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_10__utils_mergeByName_js__["a" /* default */])([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if (process.env.NODE_ENV !== "production") {
          var modifiers = Object(__WEBPACK_IMPORTED_MODULE_8__utils_uniqueBy_js__["a" /* default */])([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
            var name = _ref.name;
            return name;
          });
          Object(__WEBPACK_IMPORTED_MODULE_7__utils_validateModifiers_js__["a" /* default */])(modifiers);

          if (Object(__WEBPACK_IMPORTED_MODULE_9__utils_getBasePlacement_js__["a" /* default */])(state.options.placement) === __WEBPACK_IMPORTED_MODULE_13__enums_js__["d" /* auto */]) {
            var flipModifier = state.orderedModifiers.find(function (_ref2) {
              var name = _ref2.name;
              return name === 'flip';
            });

            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
            }
          }

          var _getComputedStyle = Object(__WEBPACK_IMPORTED_MODULE_4__dom_utils_getComputedStyle_js__["a" /* default */])(popper),
              marginTop = _getComputedStyle.marginTop,
              marginRight = _getComputedStyle.marginRight,
              marginBottom = _getComputedStyle.marginBottom,
              marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
          // cause bugs with positioning, so we'll warn the consumer


          if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
          }
        }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if (process.env.NODE_ENV !== "production") {
            console.error(INVALID_ELEMENT_ERROR);
          }

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: Object(__WEBPACK_IMPORTED_MODULE_0__dom_utils_getCompositeRect_js__["a" /* default */])(reference, Object(__WEBPACK_IMPORTED_MODULE_3__dom_utils_getOffsetParent_js__["a" /* default */])(popper), state.options.strategy === 'fixed'),
          popper: Object(__WEBPACK_IMPORTED_MODULE_1__dom_utils_getLayoutRect_js__["a" /* default */])(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (process.env.NODE_ENV !== "production") {
            __debug_loops__ += 1;

            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Object(__WEBPACK_IMPORTED_MODULE_6__utils_debounce_js__["a" /* default */])(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      if (process.env.NODE_ENV !== "production") {
        console.error(INVALID_ELEMENT_ERROR);
      }

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}
var createPopper = /*#__PURE__*/popperGenerator(); // eslint-disable-next-line import/no-unused-modules


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(13)))

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return raf; });
var win = window;

var raf = win.requestAnimationFrame
  || win.webkitRequestAnimationFrame
  || win.mozRequestAnimationFrame
  || win.msRequestAnimationFrame
  || function(cb) { return setTimeout(cb, 16); };


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hasClass; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classListSupport_js__ = __webpack_require__(118);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__classListSupport_js__["a"]; });


var hasClass = __WEBPACK_IMPORTED_MODULE_0__classListSupport_js__["a" /* classListSupport */] ?
    function (el, str) { return el.classList.contains(str); } :
    function (el, str) { return el.className.indexOf(str) >= 0; };



/***/ }),
/* 30 */,
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__applyStyles_js__ = __webpack_require__(18);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__applyStyles_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__arrow_js__ = __webpack_require__(32);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__arrow_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__computeStyles_js__ = __webpack_require__(21);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__computeStyles_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__eventListeners_js__ = __webpack_require__(22);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__eventListeners_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__flip_js__ = __webpack_require__(38);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__flip_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__hide_js__ = __webpack_require__(42);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__hide_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__offset_js__ = __webpack_require__(43);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__offset_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__popperOffsets_js__ = __webpack_require__(26);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_7__popperOffsets_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__preventOverflow_js__ = __webpack_require__(44);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_8__preventOverflow_js__["a"]; });










/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_getBasePlacement_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dom_utils_getLayoutRect_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dom_utils_contains_js__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dom_utils_getOffsetParent_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_getMainAxisFromPlacement_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_within_js__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_mergePaddingObject_js__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_expandToHashMap_js__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__enums_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dom_utils_instanceOf_js__ = __webpack_require__(1);









 // eslint-disable-next-line import/no-unused-modules

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return Object(__WEBPACK_IMPORTED_MODULE_6__utils_mergePaddingObject_js__["a" /* default */])(typeof padding !== 'number' ? padding : Object(__WEBPACK_IMPORTED_MODULE_7__utils_expandToHashMap_js__["a" /* default */])(padding, __WEBPACK_IMPORTED_MODULE_8__enums_js__["e" /* basePlacements */]));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = Object(__WEBPACK_IMPORTED_MODULE_0__utils_getBasePlacement_js__["a" /* default */])(state.placement);
  var axis = Object(__WEBPACK_IMPORTED_MODULE_4__utils_getMainAxisFromPlacement_js__["a" /* default */])(basePlacement);
  var isVertical = [__WEBPACK_IMPORTED_MODULE_8__enums_js__["l" /* left */], __WEBPACK_IMPORTED_MODULE_8__enums_js__["s" /* right */]].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = Object(__WEBPACK_IMPORTED_MODULE_1__dom_utils_getLayoutRect_js__["a" /* default */])(arrowElement);
  var minProp = axis === 'y' ? __WEBPACK_IMPORTED_MODULE_8__enums_js__["u" /* top */] : __WEBPACK_IMPORTED_MODULE_8__enums_js__["l" /* left */];
  var maxProp = axis === 'y' ? __WEBPACK_IMPORTED_MODULE_8__enums_js__["i" /* bottom */] : __WEBPACK_IMPORTED_MODULE_8__enums_js__["s" /* right */];
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = Object(__WEBPACK_IMPORTED_MODULE_3__dom_utils_getOffsetParent_js__["a" /* default */])(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = Object(__WEBPACK_IMPORTED_MODULE_5__utils_within_js__["a" /* within */])(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (process.env.NODE_ENV !== "production") {
    if (!Object(__WEBPACK_IMPORTED_MODULE_9__dom_utils_instanceOf_js__["b" /* isHTMLElement */])(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
    }
  }

  if (!Object(__WEBPACK_IMPORTED_MODULE_2__dom_utils_contains_js__["a" /* default */])(state.elements.popper, arrowElement)) {
    if (process.env.NODE_ENV !== "production") {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
    }

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(13)))

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = contains;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__instanceOf_js__ = __webpack_require__(1);

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && Object(__WEBPACK_IMPORTED_MODULE_0__instanceOf_js__["c" /* isShadowRoot */])(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = within;
/* harmony export (immutable) */ __webpack_exports__["b"] = withinMaxClamp;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(6);

function within(min, value, max) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* max */])(min, Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["b" /* min */])(value, max));
}
function withinMaxClamp(min, value, max) {
  var v = within(min, value, max);
  return v > max ? max : v;
}

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mergePaddingObject;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getFreshSideObject_js__ = __webpack_require__(36);

function mergePaddingObject(paddingObject) {
  return Object.assign({}, Object(__WEBPACK_IMPORTED_MODULE_0__getFreshSideObject_js__["a" /* default */])(), paddingObject);
}

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getFreshSideObject;
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = expandToHashMap;
function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_getOppositePlacement_js__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_getBasePlacement_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_getOppositeVariationPlacement_js__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_detectOverflow_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_computeAutoPlacement_js__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__enums_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_getVariation_js__ = __webpack_require__(11);






 // eslint-disable-next-line import/no-unused-modules

function getExpandedFallbackPlacements(placement) {
  if (Object(__WEBPACK_IMPORTED_MODULE_1__utils_getBasePlacement_js__["a" /* default */])(placement) === __WEBPACK_IMPORTED_MODULE_5__enums_js__["d" /* auto */]) {
    return [];
  }

  var oppositePlacement = Object(__WEBPACK_IMPORTED_MODULE_0__utils_getOppositePlacement_js__["a" /* default */])(placement);
  return [Object(__WEBPACK_IMPORTED_MODULE_2__utils_getOppositeVariationPlacement_js__["a" /* default */])(placement), oppositePlacement, Object(__WEBPACK_IMPORTED_MODULE_2__utils_getOppositeVariationPlacement_js__["a" /* default */])(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = Object(__WEBPACK_IMPORTED_MODULE_1__utils_getBasePlacement_js__["a" /* default */])(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [Object(__WEBPACK_IMPORTED_MODULE_0__utils_getOppositePlacement_js__["a" /* default */])(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(Object(__WEBPACK_IMPORTED_MODULE_1__utils_getBasePlacement_js__["a" /* default */])(placement) === __WEBPACK_IMPORTED_MODULE_5__enums_js__["d" /* auto */] ? Object(__WEBPACK_IMPORTED_MODULE_4__utils_computeAutoPlacement_js__["a" /* default */])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = Object(__WEBPACK_IMPORTED_MODULE_1__utils_getBasePlacement_js__["a" /* default */])(placement);

    var isStartVariation = Object(__WEBPACK_IMPORTED_MODULE_6__utils_getVariation_js__["a" /* default */])(placement) === __WEBPACK_IMPORTED_MODULE_5__enums_js__["t" /* start */];
    var isVertical = [__WEBPACK_IMPORTED_MODULE_5__enums_js__["u" /* top */], __WEBPACK_IMPORTED_MODULE_5__enums_js__["i" /* bottom */]].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = Object(__WEBPACK_IMPORTED_MODULE_3__utils_detectOverflow_js__["a" /* default */])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? __WEBPACK_IMPORTED_MODULE_5__enums_js__["s" /* right */] : __WEBPACK_IMPORTED_MODULE_5__enums_js__["l" /* left */] : isStartVariation ? __WEBPACK_IMPORTED_MODULE_5__enums_js__["i" /* bottom */] : __WEBPACK_IMPORTED_MODULE_5__enums_js__["u" /* top */];

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = Object(__WEBPACK_IMPORTED_MODULE_0__utils_getOppositePlacement_js__["a" /* default */])(mainVariationSide);
    }

    var altVariationSide = Object(__WEBPACK_IMPORTED_MODULE_0__utils_getOppositePlacement_js__["a" /* default */])(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
});

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = listScrollParents;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getScrollParent_js__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getParentNode_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getWindow_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__isScrollParent_js__ = __webpack_require__(25);




/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = Object(__WEBPACK_IMPORTED_MODULE_0__getScrollParent_js__["a" /* default */])(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = Object(__WEBPACK_IMPORTED_MODULE_2__getWindow_js__["a" /* default */])(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], Object(__WEBPACK_IMPORTED_MODULE_3__isScrollParent_js__["a" /* default */])(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(Object(__WEBPACK_IMPORTED_MODULE_1__getParentNode_js__["a" /* default */])(target)));
}

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = rectToClientRect;
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = computeOffsets;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getBasePlacement_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getVariation_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getMainAxisFromPlacement_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__enums_js__ = __webpack_require__(0);




function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? Object(__WEBPACK_IMPORTED_MODULE_0__getBasePlacement_js__["a" /* default */])(placement) : null;
  var variation = placement ? Object(__WEBPACK_IMPORTED_MODULE_1__getVariation_js__["a" /* default */])(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case __WEBPACK_IMPORTED_MODULE_3__enums_js__["u" /* top */]:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case __WEBPACK_IMPORTED_MODULE_3__enums_js__["i" /* bottom */]:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case __WEBPACK_IMPORTED_MODULE_3__enums_js__["s" /* right */]:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case __WEBPACK_IMPORTED_MODULE_3__enums_js__["l" /* left */]:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? Object(__WEBPACK_IMPORTED_MODULE_2__getMainAxisFromPlacement_js__["a" /* default */])(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case __WEBPACK_IMPORTED_MODULE_3__enums_js__["t" /* start */]:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case __WEBPACK_IMPORTED_MODULE_3__enums_js__["k" /* end */]:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;

      default:
    }
  }

  return offsets;
}

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enums_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_detectOverflow_js__ = __webpack_require__(12);



function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [__WEBPACK_IMPORTED_MODULE_0__enums_js__["u" /* top */], __WEBPACK_IMPORTED_MODULE_0__enums_js__["s" /* right */], __WEBPACK_IMPORTED_MODULE_0__enums_js__["i" /* bottom */], __WEBPACK_IMPORTED_MODULE_0__enums_js__["l" /* left */]].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = Object(__WEBPACK_IMPORTED_MODULE_1__utils_detectOverflow_js__["a" /* default */])(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = Object(__WEBPACK_IMPORTED_MODULE_1__utils_detectOverflow_js__["a" /* default */])(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
});

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export distanceAndSkiddingToXY */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_getBasePlacement_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enums_js__ = __webpack_require__(0);

 // eslint-disable-next-line import/no-unused-modules

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = Object(__WEBPACK_IMPORTED_MODULE_0__utils_getBasePlacement_js__["a" /* default */])(placement);
  var invertDistance = [__WEBPACK_IMPORTED_MODULE_1__enums_js__["l" /* left */], __WEBPACK_IMPORTED_MODULE_1__enums_js__["u" /* top */]].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [__WEBPACK_IMPORTED_MODULE_1__enums_js__["l" /* left */], __WEBPACK_IMPORTED_MODULE_1__enums_js__["s" /* right */]].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = __WEBPACK_IMPORTED_MODULE_1__enums_js__["o" /* placements */].reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
});

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enums_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_getBasePlacement_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_getMainAxisFromPlacement_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_getAltAxis_js__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_within_js__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dom_utils_getLayoutRect_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dom_utils_getOffsetParent_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_detectOverflow_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_getVariation_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_getFreshSideObject_js__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_math_js__ = __webpack_require__(6);












function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = Object(__WEBPACK_IMPORTED_MODULE_7__utils_detectOverflow_js__["a" /* default */])(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = Object(__WEBPACK_IMPORTED_MODULE_1__utils_getBasePlacement_js__["a" /* default */])(state.placement);
  var variation = Object(__WEBPACK_IMPORTED_MODULE_8__utils_getVariation_js__["a" /* default */])(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = Object(__WEBPACK_IMPORTED_MODULE_2__utils_getMainAxisFromPlacement_js__["a" /* default */])(basePlacement);
  var altAxis = Object(__WEBPACK_IMPORTED_MODULE_3__utils_getAltAxis_js__["a" /* default */])(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis) {
    var _offsetModifierState$;

    var mainSide = mainAxis === 'y' ? __WEBPACK_IMPORTED_MODULE_0__enums_js__["u" /* top */] : __WEBPACK_IMPORTED_MODULE_0__enums_js__["l" /* left */];
    var altSide = mainAxis === 'y' ? __WEBPACK_IMPORTED_MODULE_0__enums_js__["i" /* bottom */] : __WEBPACK_IMPORTED_MODULE_0__enums_js__["s" /* right */];
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = offset + overflow[mainSide];
    var max = offset - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === __WEBPACK_IMPORTED_MODULE_0__enums_js__["t" /* start */] ? referenceRect[len] : popperRect[len];
    var maxLen = variation === __WEBPACK_IMPORTED_MODULE_0__enums_js__["t" /* start */] ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? Object(__WEBPACK_IMPORTED_MODULE_5__dom_utils_getLayoutRect_js__["a" /* default */])(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : Object(__WEBPACK_IMPORTED_MODULE_9__utils_getFreshSideObject_js__["a" /* default */])();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = Object(__WEBPACK_IMPORTED_MODULE_4__utils_within_js__["a" /* within */])(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && Object(__WEBPACK_IMPORTED_MODULE_6__dom_utils_getOffsetParent_js__["a" /* default */])(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset + maxOffset - offsetModifierValue;
    var preventedOffset = Object(__WEBPACK_IMPORTED_MODULE_4__utils_within_js__["a" /* within */])(tether ? Object(__WEBPACK_IMPORTED_MODULE_10__utils_math_js__["b" /* min */])(min, tetherMin) : min, offset, tether ? Object(__WEBPACK_IMPORTED_MODULE_10__utils_math_js__["a" /* max */])(max, tetherMax) : max);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _offsetModifierState$2;

    var _mainSide = mainAxis === 'x' ? __WEBPACK_IMPORTED_MODULE_0__enums_js__["u" /* top */] : __WEBPACK_IMPORTED_MODULE_0__enums_js__["l" /* left */];

    var _altSide = mainAxis === 'x' ? __WEBPACK_IMPORTED_MODULE_0__enums_js__["i" /* bottom */] : __WEBPACK_IMPORTED_MODULE_0__enums_js__["s" /* right */];

    var _offset = popperOffsets[altAxis];

    var _len = altAxis === 'y' ? 'height' : 'width';

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var isOriginSide = [__WEBPACK_IMPORTED_MODULE_0__enums_js__["u" /* top */], __WEBPACK_IMPORTED_MODULE_0__enums_js__["l" /* left */]].indexOf(basePlacement) !== -1;

    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;

    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;

    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;

    var _preventedOffset = tether && isOriginSide ? Object(__WEBPACK_IMPORTED_MODULE_4__utils_within_js__["b" /* withinMaxClamp */])(_tetherMin, _offset, _tetherMax) : Object(__WEBPACK_IMPORTED_MODULE_4__utils_within_js__["a" /* within */])(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);

    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
});

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createPopper; });
/* unused harmony export defaultModifiers */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createPopper_js__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modifiers_eventListeners_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modifiers_popperOffsets_js__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modifiers_computeStyles_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modifiers_applyStyles_js__ = __webpack_require__(18);
/* unused harmony reexport popperGenerator */
/* unused harmony reexport detectOverflow */





var defaultModifiers = [__WEBPACK_IMPORTED_MODULE_1__modifiers_eventListeners_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__modifiers_popperOffsets_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__modifiers_computeStyles_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__modifiers_applyStyles_js__["a" /* default */]];
var createPopper = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__createPopper_js__["c" /* popperGenerator */])({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules



/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return docElement; });
var docElement = document.documentElement;

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isNodeList;
function isNodeList(el) {
  // Only NodeList has the "item()" function
  return typeof el.item !== "undefined"; 
}

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return passiveOption; });
// Test via a getter in the options object to see if the passive property is accessed
var supportsPassive = false;
try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function() {
      supportsPassive = true;
    }
  });
  window.addEventListener("test", null, opts);
} catch (e) {}
var passiveOption = supportsPassive ? { passive: true } : false;

/***/ }),
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(78);
module.exports = __webpack_require__(138);


/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_accordion__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_slider__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_tabs__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_steps__ = __webpack_require__(137);
/**
 * Axial
 * Axial Construct is a universal template for factories, industry, construction, architecture, factories, mechanics, energy
 * Exclusively on https://1.envato.market/axial-html
 *
 * @encoding        UTF-8
 * @version         1.0.0
 * @copyright       (C) 2018 - 2021 Merkulove ( https://merkulov.design/ ). All rights reserved.
 * @license         Envato License https://1.envato.market/KYbje
 * @contributors    Lamber Lilit (winter.rituel@gmail.com)
 * @support         help@merkulov.design
 **/







document.addEventListener('DOMContentLoaded', function () {
    // drawTabs('.tabs_services', '.tabs_services-triggers_trigger');
    // drawProcessSteps();
    Object(__WEBPACK_IMPORTED_MODULE_1__modules_slider__["a" /* initTinySlider */])({
        container: ".reviews_slider",
        controlsContainer: ".reviews_slider-controls",
        items: 1,
        mode: 'carousel',
        controls: true,
        nav: false,
        loop: false,
        responsive: {
            768: {
                gutter: 10,
                items: 2
            },
            1200: {
                gutter: 30
            }
        }
    });
    // drawAccordion();
})


/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bootstrap__ = __webpack_require__(80);
/**
 * Axial
 * Axial Construct is a universal template for factories, industry, construction, architecture, factories, mechanics, energy
 * Exclusively on https://1.envato.market/axial-html
 *
 * @encoding        UTF-8
 * @version         1.0.0
 * @copyright       (C) 2018 - 2021 Merkulove ( https://merkulov.design/ ). All rights reserved.
 * @license         Envato License https://1.envato.market/KYbje
 * @contributors    Lamber Lilit (winter.rituel@gmail.com)
 * @support         help@merkulov.design
 **/




function drawAccordion() {
    var triggers = document.querySelectorAll('.accordion-trigger');
    var wrappers = document.querySelectorAll('.accordion-wrapper');
    var icons = document.querySelectorAll('.accordion-trigger_icon');


    function checkIconClass() {
        wrappers.forEach(function (el, index) {
            if (el.classList.contains('expanded')) {
                icons[index].classList.remove('icon-plus');
                icons[index].classList.add('icon-minus');
            } else {
                icons[index].classList.add('icon-plus');
                icons[index].classList.remove('icon-minus');
            }
        })
    }

    triggers.forEach(function (el, i) {
        el.addEventListener('click', function (e) {
            e.preventDefault();
            wrappers[i].classList.toggle('expanded');
            checkIconClass();
        })
    })

}

/* unused harmony default export */ var _unused_webpack_default_export = (drawAccordion);

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {/* unused harmony export Alert */
/* unused harmony export Button */
/* unused harmony export Carousel */
/* unused harmony export Collapse */
/* unused harmony export Dropdown */
/* unused harmony export Modal */
/* unused harmony export Offcanvas */
/* unused harmony export Popover */
/* unused harmony export ScrollSpy */
/* unused harmony export Tab */
/* unused harmony export Toast */
/* unused harmony export Tooltip */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__popperjs_core__ = __webpack_require__(81);
/*!
  * Bootstrap v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */


/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/index.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
var MAX_UID = 1000000;
var MILLISECONDS_MULTIPLIER = 1000;
var TRANSITION_END = 'transitionend'; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

var toType = function (obj) {
  if (obj === null || obj === undefined) {
    return ("" + obj);
  }

  return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
};
/**
 * --------------------------------------------------------------------------
 * Public Util Api
 * --------------------------------------------------------------------------
 */


var getUID = function (prefix) {
  do {
    prefix += Math.floor(Math.random() * MAX_UID);
  } while (document.getElementById(prefix));

  return prefix;
};

var getSelector = function (element) {
  var selector = element.getAttribute('data-bs-target');

  if (!selector || selector === '#') {
    var hrefAttr = element.getAttribute('href'); // The only valid content that could double as a selector are IDs or classes,
    // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
    // `document.querySelector` will rightfully complain it is invalid.
    // See https://github.com/twbs/bootstrap/issues/32273

    if (!hrefAttr || !hrefAttr.includes('#') && !hrefAttr.startsWith('.')) {
      return null;
    } // Just in case some CMS puts out a full URL with the anchor appended


    if (hrefAttr.includes('#') && !hrefAttr.startsWith('#')) {
      hrefAttr = "#" + (hrefAttr.split('#')[1]);
    }

    selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : null;
  }

  return selector;
};

var getSelectorFromElement = function (element) {
  var selector = getSelector(element);

  if (selector) {
    return document.querySelector(selector) ? selector : null;
  }

  return null;
};

var getElementFromSelector = function (element) {
  var selector = getSelector(element);
  return selector ? document.querySelector(selector) : null;
};

var getTransitionDurationFromElement = function (element) {
  if (!element) {
    return 0;
  } // Get transition-duration of the element


  var ref = window.getComputedStyle(element);
  var transitionDuration = ref.transitionDuration;
  var transitionDelay = ref.transitionDelay;
  var floatTransitionDuration = Number.parseFloat(transitionDuration);
  var floatTransitionDelay = Number.parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

  if (!floatTransitionDuration && !floatTransitionDelay) {
    return 0;
  } // If multiple durations are defined, take the first


  transitionDuration = transitionDuration.split(',')[0];
  transitionDelay = transitionDelay.split(',')[0];
  return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
};

var triggerTransitionEnd = function (element) {
  element.dispatchEvent(new Event(TRANSITION_END));
};

var isElement = function (obj) {
  if (!obj || typeof obj !== 'object') {
    return false;
  }

  if (typeof obj.jquery !== 'undefined') {
    obj = obj[0];
  }

  return typeof obj.nodeType !== 'undefined';
};

var getElement = function (obj) {
  if (isElement(obj)) {
    // it's a jQuery object or a node element
    return obj.jquery ? obj[0] : obj;
  }

  if (typeof obj === 'string' && obj.length > 0) {
    return document.querySelector(obj);
  }

  return null;
};

var typeCheckConfig = function (componentName, config, configTypes) {
  Object.keys(configTypes).forEach(function (property) {
    var expectedTypes = configTypes[property];
    var value = config[property];
    var valueType = value && isElement(value) ? 'element' : toType(value);

    if (!new RegExp(expectedTypes).test(valueType)) {
      throw new TypeError(((componentName.toUpperCase()) + ": Option \"" + property + "\" provided type \"" + valueType + "\" but expected type \"" + expectedTypes + "\"."));
    }
  });
};

var isVisible = function (element) {
  if (!isElement(element) || element.getClientRects().length === 0) {
    return false;
  }

  return getComputedStyle(element).getPropertyValue('visibility') === 'visible';
};

var isDisabled = function (element) {
  if (!element || element.nodeType !== Node.ELEMENT_NODE) {
    return true;
  }

  if (element.classList.contains('disabled')) {
    return true;
  }

  if (typeof element.disabled !== 'undefined') {
    return element.disabled;
  }

  return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
};

var findShadowRoot = function (element) {
  if (!document.documentElement.attachShadow) {
    return null;
  } // Can find the shadow root otherwise it'll return the document


  if (typeof element.getRootNode === 'function') {
    var root = element.getRootNode();
    return root instanceof ShadowRoot ? root : null;
  }

  if (element instanceof ShadowRoot) {
    return element;
  } // when we don't find a shadow root


  if (!element.parentNode) {
    return null;
  }

  return findShadowRoot(element.parentNode);
};

var noop = function () {};
/**
 * Trick to restart an element's animation
 *
 * @param {HTMLElement} element
 * @return void
 *
 * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
 */


var reflow = function (element) {
  // eslint-disable-next-line no-unused-expressions
  element.offsetHeight;
};

var getjQuery = function () {
  var jQuery = __webpack_provided_window_dot_jQuery;

  if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
    return jQuery;
  }

  return null;
};

var DOMContentLoadedCallbacks = [];

var onDOMContentLoaded = function (callback) {
  if (document.readyState === 'loading') {
    // add listener on the first call when the document is in loading state
    if (!DOMContentLoadedCallbacks.length) {
      document.addEventListener('DOMContentLoaded', function () {
        DOMContentLoadedCallbacks.forEach(function (callback) { return callback(); });
      });
    }

    DOMContentLoadedCallbacks.push(callback);
  } else {
    callback();
  }
};

var isRTL = function () { return document.documentElement.dir === 'rtl'; };

var defineJQueryPlugin = function (plugin) {
  onDOMContentLoaded(function () {
    var $ = getjQuery();
    /* istanbul ignore if */

    if ($) {
      var name = plugin.NAME;
      var JQUERY_NO_CONFLICT = $.fn[name];
      $.fn[name] = plugin.jQueryInterface;
      $.fn[name].Constructor = plugin;

      $.fn[name].noConflict = function () {
        $.fn[name] = JQUERY_NO_CONFLICT;
        return plugin.jQueryInterface;
      };
    }
  });
};

var execute = function (callback) {
  if (typeof callback === 'function') {
    callback();
  }
};

var executeAfterTransition = function (callback, transitionElement, waitForTransition) {
  if ( waitForTransition === void 0 ) waitForTransition = true;

  if (!waitForTransition) {
    execute(callback);
    return;
  }

  var durationPadding = 5;
  var emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
  var called = false;

  var handler = function (ref) {
    var target = ref.target;

    if (target !== transitionElement) {
      return;
    }

    called = true;
    transitionElement.removeEventListener(TRANSITION_END, handler);
    execute(callback);
  };

  transitionElement.addEventListener(TRANSITION_END, handler);
  setTimeout(function () {
    if (!called) {
      triggerTransitionEnd(transitionElement);
    }
  }, emulatedDuration);
};
/**
 * Return the previous/next element of a list.
 *
 * @param {array} list    The list of elements
 * @param activeElement   The active element
 * @param shouldGetNext   Choose to get next or previous element
 * @param isCycleAllowed
 * @return {Element|elem} The proper element
 */


var getNextActiveElement = function (list, activeElement, shouldGetNext, isCycleAllowed) {
  var index = list.indexOf(activeElement); // if the element does not exist in the list return an element depending on the direction and if cycle is allowed

  if (index === -1) {
    return list[!shouldGetNext && isCycleAllowed ? list.length - 1 : 0];
  }

  var listLength = list.length;
  index += shouldGetNext ? 1 : -1;

  if (isCycleAllowed) {
    index = (index + listLength) % listLength;
  }

  return list[Math.max(0, Math.min(index, listLength - 1))];
};

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): dom/event-handler.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var namespaceRegex = /[^.]*(?=\..*)\.|.*/;
var stripNameRegex = /\..*/;
var stripUidRegex = /::\d+$/;
var eventRegistry = {}; // Events storage

var uidEvent = 1;
var customEvents = {
  mouseenter: 'mouseover',
  mouseleave: 'mouseout'
};
var customEventsRegex = /^(mouseenter|mouseleave)/i;
var nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);
/**
 * ------------------------------------------------------------------------
 * Private methods
 * ------------------------------------------------------------------------
 */

function getUidEvent(element, uid) {
  return uid && (uid + "::" + (uidEvent++)) || element.uidEvent || uidEvent++;
}

function getEvent(element) {
  var uid = getUidEvent(element);
  element.uidEvent = uid;
  eventRegistry[uid] = eventRegistry[uid] || {};
  return eventRegistry[uid];
}

function bootstrapHandler(element, fn) {
  return function handler(event) {
    event.delegateTarget = element;

    if (handler.oneOff) {
      EventHandler.off(element, event.type, fn);
    }

    return fn.apply(element, [event]);
  };
}

function bootstrapDelegationHandler(element, selector, fn) {
  return function handler(event) {
    var domElements = element.querySelectorAll(selector);

    for (var target = event.target; target && target !== this; target = target.parentNode) {
      for (var i = domElements.length; i--;) {
        if (domElements[i] === target) {
          event.delegateTarget = target;

          if (handler.oneOff) {
            EventHandler.off(element, event.type, selector, fn);
          }

          return fn.apply(target, [event]);
        }
      }
    } // To please ESLint


    return null;
  };
}

function findHandler(events, handler, delegationSelector) {
  if ( delegationSelector === void 0 ) delegationSelector = null;

  var uidEventList = Object.keys(events);

  for (var i = 0, len = uidEventList.length; i < len; i++) {
    var event = events[uidEventList[i]];

    if (event.originalHandler === handler && event.delegationSelector === delegationSelector) {
      return event;
    }
  }

  return null;
}

function normalizeParams(originalTypeEvent, handler, delegationFn) {
  var delegation = typeof handler === 'string';
  var originalHandler = delegation ? delegationFn : handler;
  var typeEvent = getTypeEvent(originalTypeEvent);
  var isNative = nativeEvents.has(typeEvent);

  if (!isNative) {
    typeEvent = originalTypeEvent;
  }

  return [delegation, originalHandler, typeEvent];
}

function addHandler(element, originalTypeEvent, handler, delegationFn, oneOff) {
  if (typeof originalTypeEvent !== 'string' || !element) {
    return;
  }

  if (!handler) {
    handler = delegationFn;
    delegationFn = null;
  } // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
  // this prevents the handler from being dispatched the same way as mouseover or mouseout does


  if (customEventsRegex.test(originalTypeEvent)) {
    var wrapFn = function (fn) {
      return function (event) {
        if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
          return fn.call(this, event);
        }
      };
    };

    if (delegationFn) {
      delegationFn = wrapFn(delegationFn);
    } else {
      handler = wrapFn(handler);
    }
  }

  var ref = normalizeParams(originalTypeEvent, handler, delegationFn);
  var delegation = ref[0];
  var originalHandler = ref[1];
  var typeEvent = ref[2];
  var events = getEvent(element);
  var handlers = events[typeEvent] || (events[typeEvent] = {});
  var previousFn = findHandler(handlers, originalHandler, delegation ? handler : null);

  if (previousFn) {
    previousFn.oneOff = previousFn.oneOff && oneOff;
    return;
  }

  var uid = getUidEvent(originalHandler, originalTypeEvent.replace(namespaceRegex, ''));
  var fn = delegation ? bootstrapDelegationHandler(element, handler, delegationFn) : bootstrapHandler(element, handler);
  fn.delegationSelector = delegation ? handler : null;
  fn.originalHandler = originalHandler;
  fn.oneOff = oneOff;
  fn.uidEvent = uid;
  handlers[uid] = fn;
  element.addEventListener(typeEvent, fn, delegation);
}

function removeHandler(element, events, typeEvent, handler, delegationSelector) {
  var fn = findHandler(events[typeEvent], handler, delegationSelector);

  if (!fn) {
    return;
  }

  element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
  delete events[typeEvent][fn.uidEvent];
}

function removeNamespacedHandlers(element, events, typeEvent, namespace) {
  var storeElementEvent = events[typeEvent] || {};
  Object.keys(storeElementEvent).forEach(function (handlerKey) {
    if (handlerKey.includes(namespace)) {
      var event = storeElementEvent[handlerKey];
      removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
    }
  });
}

function getTypeEvent(event) {
  // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
  event = event.replace(stripNameRegex, '');
  return customEvents[event] || event;
}

var EventHandler = {
  on: function on(element, event, handler, delegationFn) {
    addHandler(element, event, handler, delegationFn, false);
  },

  one: function one(element, event, handler, delegationFn) {
    addHandler(element, event, handler, delegationFn, true);
  },

  off: function off(element, originalTypeEvent, handler, delegationFn) {
    if (typeof originalTypeEvent !== 'string' || !element) {
      return;
    }

    var ref = normalizeParams(originalTypeEvent, handler, delegationFn);
    var delegation = ref[0];
    var originalHandler = ref[1];
    var typeEvent = ref[2];
    var inNamespace = typeEvent !== originalTypeEvent;
    var events = getEvent(element);
    var isNamespace = originalTypeEvent.startsWith('.');

    if (typeof originalHandler !== 'undefined') {
      // Simplest case: handler is passed, remove that listener ONLY.
      if (!events || !events[typeEvent]) {
        return;
      }

      removeHandler(element, events, typeEvent, originalHandler, delegation ? handler : null);
      return;
    }

    if (isNamespace) {
      Object.keys(events).forEach(function (elementEvent) {
        removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
      });
    }

    var storeElementEvent = events[typeEvent] || {};
    Object.keys(storeElementEvent).forEach(function (keyHandlers) {
      var handlerKey = keyHandlers.replace(stripUidRegex, '');

      if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
        var event = storeElementEvent[keyHandlers];
        removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
      }
    });
  },

  trigger: function trigger(element, event, args) {
    if (typeof event !== 'string' || !element) {
      return null;
    }

    var $ = getjQuery();
    var typeEvent = getTypeEvent(event);
    var inNamespace = event !== typeEvent;
    var isNative = nativeEvents.has(typeEvent);
    var jQueryEvent;
    var bubbles = true;
    var nativeDispatch = true;
    var defaultPrevented = false;
    var evt = null;

    if (inNamespace && $) {
      jQueryEvent = $.Event(event, args);
      $(element).trigger(jQueryEvent);
      bubbles = !jQueryEvent.isPropagationStopped();
      nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
      defaultPrevented = jQueryEvent.isDefaultPrevented();
    }

    if (isNative) {
      evt = document.createEvent('HTMLEvents');
      evt.initEvent(typeEvent, bubbles, true);
    } else {
      evt = new CustomEvent(event, {
        bubbles: bubbles,
        cancelable: true
      });
    } // merge custom information in our event


    if (typeof args !== 'undefined') {
      Object.keys(args).forEach(function (key) {
        Object.defineProperty(evt, key, {
          get: function get() {
            return args[key];
          }

        });
      });
    }

    if (defaultPrevented) {
      evt.preventDefault();
    }

    if (nativeDispatch) {
      element.dispatchEvent(evt);
    }

    if (evt.defaultPrevented && typeof jQueryEvent !== 'undefined') {
      jQueryEvent.preventDefault();
    }

    return evt;
  }

};

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): dom/data.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */
var elementMap = new Map();
var Data = {
  set: function set(element, key, instance) {
    if (!elementMap.has(element)) {
      elementMap.set(element, new Map());
    }

    var instanceMap = elementMap.get(element); // make it clear we only want one instance per element
    // can be removed later when multiple key/instances are fine to be used

    if (!instanceMap.has(key) && instanceMap.size !== 0) {
      // eslint-disable-next-line no-console
      console.error(("Bootstrap doesn't allow more than one instance per element. Bound instance: " + (Array.from(instanceMap.keys())[0]) + "."));
      return;
    }

    instanceMap.set(key, instance);
  },

  get: function get(element, key) {
    if (elementMap.has(element)) {
      return elementMap.get(element).get(key) || null;
    }

    return null;
  },

  remove: function remove(element, key) {
    if (!elementMap.has(element)) {
      return;
    }

    var instanceMap = elementMap.get(element);
    instanceMap.delete(key); // free up element references if there are no instances left for an element

    if (instanceMap.size === 0) {
      elementMap.delete(element);
    }
  }

};

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): base-component.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var VERSION = '5.1.3';

var BaseComponent = function BaseComponent(element) {
  element = getElement(element);

  if (!element) {
    return;
  }

  this._element = element;
  Data.set(this._element, this.constructor.DATA_KEY, this);
};

var staticAccessors = { VERSION: {},NAME: {},DATA_KEY: {},EVENT_KEY: {} };

BaseComponent.prototype.dispose = function dispose () {
    var this$1 = this;

  Data.remove(this._element, this.constructor.DATA_KEY);
  EventHandler.off(this._element, this.constructor.EVENT_KEY);
  Object.getOwnPropertyNames(this).forEach(function (propertyName) {
    this$1[propertyName] = null;
  });
};

BaseComponent.prototype._queueCallback = function _queueCallback (callback, element, isAnimated) {
    if ( isAnimated === void 0 ) isAnimated = true;

  executeAfterTransition(callback, element, isAnimated);
};
/** Static */


BaseComponent.getInstance = function getInstance (element) {
  return Data.get(getElement(element), this.DATA_KEY);
};

BaseComponent.getOrCreateInstance = function getOrCreateInstance (element, config) {
    if ( config === void 0 ) config = {};

  return this.getInstance(element) || new this(element, typeof config === 'object' ? config : null);
};

staticAccessors.VERSION.get = function () {
  return VERSION;
};

staticAccessors.NAME.get = function () {
  throw new Error('You have to implement the static method "NAME", for each component!');
};

staticAccessors.DATA_KEY.get = function () {
  return ("bs." + (this.NAME));
};

staticAccessors.EVENT_KEY.get = function () {
  return ("." + (this.DATA_KEY));
};

Object.defineProperties( BaseComponent, staticAccessors );

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/component-functions.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

var enableDismissTrigger = function (component, method) {
  if ( method === void 0 ) method = 'hide';

  var clickEvent = "click.dismiss" + (component.EVENT_KEY);
  var name = component.NAME;
  EventHandler.on(document, clickEvent, ("[data-bs-dismiss=\"" + name + "\"]"), function (event) {
    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }

    if (isDisabled(this)) {
      return;
    }

    var target = getElementFromSelector(this) || this.closest(("." + name));
    var instance = component.getOrCreateInstance(target); // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method

    instance[method]();
  });
};

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): alert.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$d = 'alert';
var DATA_KEY$c = 'bs.alert';
var EVENT_KEY$c = "." + DATA_KEY$c;
var EVENT_CLOSE = "close" + EVENT_KEY$c;
var EVENT_CLOSED = "closed" + EVENT_KEY$c;
var CLASS_NAME_FADE$5 = 'fade';
var CLASS_NAME_SHOW$8 = 'show';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Alert = (function (BaseComponent) {
  function Alert () {
    BaseComponent.apply(this, arguments);
  }

  if ( BaseComponent ) Alert.__proto__ = BaseComponent;
  Alert.prototype = Object.create( BaseComponent && BaseComponent.prototype );
  Alert.prototype.constructor = Alert;

  var staticAccessors$1 = { NAME: {} };

  staticAccessors$1.NAME.get = function () {
    return NAME$d;
  }; // Public


  Alert.prototype.close = function close () {
    var this$1 = this;

    var closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);

    if (closeEvent.defaultPrevented) {
      return;
    }

    this._element.classList.remove(CLASS_NAME_SHOW$8);

    var isAnimated = this._element.classList.contains(CLASS_NAME_FADE$5);

    this._queueCallback(function () { return this$1._destroyElement(); }, this._element, isAnimated);
  }; // Private


  Alert.prototype._destroyElement = function _destroyElement () {
    this._element.remove();

    EventHandler.trigger(this._element, EVENT_CLOSED);
    this.dispose();
  }; // Static


  Alert.jQueryInterface = function jQueryInterface (config) {
    return this.each(function () {
      var data = Alert.getOrCreateInstance(this);

      if (typeof config !== 'string') {
        return;
      }

      if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
        throw new TypeError(("No method named \"" + config + "\""));
      }

      data[config](this);
    });
  };

  Object.defineProperties( Alert, staticAccessors$1 );

  return Alert;
}(BaseComponent));
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


enableDismissTrigger(Alert, 'close');
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Alert to jQuery only if jQuery is present
 */

defineJQueryPlugin(Alert);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$c = 'button';
var DATA_KEY$b = 'bs.button';
var EVENT_KEY$b = "." + DATA_KEY$b;
var DATA_API_KEY$7 = '.data-api';
var CLASS_NAME_ACTIVE$3 = 'active';
var SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
var EVENT_CLICK_DATA_API$6 = "click" + EVENT_KEY$b + DATA_API_KEY$7;
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Button = (function (BaseComponent) {
  function Button () {
    BaseComponent.apply(this, arguments);
  }

  if ( BaseComponent ) Button.__proto__ = BaseComponent;
  Button.prototype = Object.create( BaseComponent && BaseComponent.prototype );
  Button.prototype.constructor = Button;

  var staticAccessors$2 = { NAME: {} };

  staticAccessors$2.NAME.get = function () {
    return NAME$c;
  }; // Public


  Button.prototype.toggle = function toggle () {
    // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
    this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
  }; // Static


  Button.jQueryInterface = function jQueryInterface (config) {
    return this.each(function () {
      var data = Button.getOrCreateInstance(this);

      if (config === 'toggle') {
        data[config]();
      }
    });
  };

  Object.defineProperties( Button, staticAccessors$2 );

  return Button;
}(BaseComponent));
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, function (event) {
  event.preventDefault();
  var button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
  var data = Button.getOrCreateInstance(button);
  data.toggle();
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Button to jQuery only if jQuery is present
 */

defineJQueryPlugin(Button);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): dom/manipulator.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
function normalizeData(val) {
  if (val === 'true') {
    return true;
  }

  if (val === 'false') {
    return false;
  }

  if (val === Number(val).toString()) {
    return Number(val);
  }

  if (val === '' || val === 'null') {
    return null;
  }

  return val;
}

function normalizeDataKey(key) {
  return key.replace(/[A-Z]/g, function (chr) { return ("-" + (chr.toLowerCase())); });
}

var Manipulator = {
  setDataAttribute: function setDataAttribute(element, key, value) {
    element.setAttribute(("data-bs-" + (normalizeDataKey(key))), value);
  },

  removeDataAttribute: function removeDataAttribute(element, key) {
    element.removeAttribute(("data-bs-" + (normalizeDataKey(key))));
  },

  getDataAttributes: function getDataAttributes(element) {
    if (!element) {
      return {};
    }

    var attributes = {};
    Object.keys(element.dataset).filter(function (key) { return key.startsWith('bs'); }).forEach(function (key) {
      var pureKey = key.replace(/^bs/, '');
      pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
      attributes[pureKey] = normalizeData(element.dataset[key]);
    });
    return attributes;
  },

  getDataAttribute: function getDataAttribute(element, key) {
    return normalizeData(element.getAttribute(("data-bs-" + (normalizeDataKey(key)))));
  },

  offset: function offset(element) {
    var rect = element.getBoundingClientRect();
    return {
      top: rect.top + window.pageYOffset,
      left: rect.left + window.pageXOffset
    };
  },

  position: function position(element) {
    return {
      top: element.offsetTop,
      left: element.offsetLeft
    };
  }

};

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): dom/selector-engine.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
var NODE_TEXT = 3;
var SelectorEngine = {
  find: function find(selector, element) {
    if ( element === void 0 ) element = document.documentElement;

    return (ref = []).concat.apply(ref, Element.prototype.querySelectorAll.call(element, selector));
    var ref;
  },

  findOne: function findOne(selector, element) {
    if ( element === void 0 ) element = document.documentElement;

    return Element.prototype.querySelector.call(element, selector);
  },

  children: function children(element, selector) {
    return (ref = []).concat.apply(ref, element.children).filter(function (child) { return child.matches(selector); });
    var ref;
  },

  parents: function parents(element, selector) {
    var parents = [];
    var ancestor = element.parentNode;

    while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== NODE_TEXT) {
      if (ancestor.matches(selector)) {
        parents.push(ancestor);
      }

      ancestor = ancestor.parentNode;
    }

    return parents;
  },

  prev: function prev(element, selector) {
    var previous = element.previousElementSibling;

    while (previous) {
      if (previous.matches(selector)) {
        return [previous];
      }

      previous = previous.previousElementSibling;
    }

    return [];
  },

  next: function next(element, selector) {
    var next = element.nextElementSibling;

    while (next) {
      if (next.matches(selector)) {
        return [next];
      }

      next = next.nextElementSibling;
    }

    return [];
  },

  focusableChildren: function focusableChildren(element) {
    var focusables = ['a', 'button', 'input', 'textarea', 'select', 'details', '[tabindex]', '[contenteditable="true"]'].map(function (selector) { return (selector + ":not([tabindex^=\"-\"])"); }).join(', ');
    return this.find(focusables, element).filter(function (el) { return !isDisabled(el) && isVisible(el); });
  }

};

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): carousel.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$b = 'carousel';
var DATA_KEY$a = 'bs.carousel';
var EVENT_KEY$a = "." + DATA_KEY$a;
var DATA_API_KEY$6 = '.data-api';
var ARROW_LEFT_KEY = 'ArrowLeft';
var ARROW_RIGHT_KEY = 'ArrowRight';
var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

var SWIPE_THRESHOLD = 40;
var Default$a = {
  interval: 5000,
  keyboard: true,
  slide: false,
  pause: 'hover',
  wrap: true,
  touch: true
};
var DefaultType$a = {
  interval: '(number|boolean)',
  keyboard: 'boolean',
  slide: '(boolean|string)',
  pause: '(string|boolean)',
  wrap: 'boolean',
  touch: 'boolean'
};
var ORDER_NEXT = 'next';
var ORDER_PREV = 'prev';
var DIRECTION_LEFT = 'left';
var DIRECTION_RIGHT = 'right';
var KEY_TO_DIRECTION = {};
KEY_TO_DIRECTION[ARROW_LEFT_KEY] = DIRECTION_RIGHT;
KEY_TO_DIRECTION[ARROW_RIGHT_KEY] = DIRECTION_LEFT;
var EVENT_SLIDE = "slide" + EVENT_KEY$a;
var EVENT_SLID = "slid" + EVENT_KEY$a;
var EVENT_KEYDOWN = "keydown" + EVENT_KEY$a;
var EVENT_MOUSEENTER = "mouseenter" + EVENT_KEY$a;
var EVENT_MOUSELEAVE = "mouseleave" + EVENT_KEY$a;
var EVENT_TOUCHSTART = "touchstart" + EVENT_KEY$a;
var EVENT_TOUCHMOVE = "touchmove" + EVENT_KEY$a;
var EVENT_TOUCHEND = "touchend" + EVENT_KEY$a;
var EVENT_POINTERDOWN = "pointerdown" + EVENT_KEY$a;
var EVENT_POINTERUP = "pointerup" + EVENT_KEY$a;
var EVENT_DRAG_START = "dragstart" + EVENT_KEY$a;
var EVENT_LOAD_DATA_API$2 = "load" + EVENT_KEY$a + DATA_API_KEY$6;
var EVENT_CLICK_DATA_API$5 = "click" + EVENT_KEY$a + DATA_API_KEY$6;
var CLASS_NAME_CAROUSEL = 'carousel';
var CLASS_NAME_ACTIVE$2 = 'active';
var CLASS_NAME_SLIDE = 'slide';
var CLASS_NAME_END = 'carousel-item-end';
var CLASS_NAME_START = 'carousel-item-start';
var CLASS_NAME_NEXT = 'carousel-item-next';
var CLASS_NAME_PREV = 'carousel-item-prev';
var CLASS_NAME_POINTER_EVENT = 'pointer-event';
var SELECTOR_ACTIVE$1 = '.active';
var SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
var SELECTOR_ITEM = '.carousel-item';
var SELECTOR_ITEM_IMG = '.carousel-item img';
var SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
var SELECTOR_INDICATORS = '.carousel-indicators';
var SELECTOR_INDICATOR = '[data-bs-target]';
var SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';
var SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
var POINTER_TYPE_TOUCH = 'touch';
var POINTER_TYPE_PEN = 'pen';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Carousel = (function (BaseComponent) {
  function Carousel(element, config) {
    BaseComponent.call(this, element);
    this._items = null;
    this._interval = null;
    this._activeElement = null;
    this._isPaused = false;
    this._isSliding = false;
    this.touchTimeout = null;
    this.touchStartX = 0;
    this.touchDeltaX = 0;
    this._config = this._getConfig(config);
    this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, this._element);
    this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
    this._pointerEvent = Boolean(window.PointerEvent);

    this._addEventListeners();
  }

  if ( BaseComponent ) Carousel.__proto__ = BaseComponent;
  Carousel.prototype = Object.create( BaseComponent && BaseComponent.prototype );
  Carousel.prototype.constructor = Carousel;

  var staticAccessors$3 = { Default: {},NAME: {} }; // Getters


  staticAccessors$3.Default.get = function () {
    return Default$a;
  };

  staticAccessors$3.NAME.get = function () {
    return NAME$b;
  }; // Public


  Carousel.prototype.next = function next () {
    this._slide(ORDER_NEXT);
  };

  Carousel.prototype.nextWhenVisible = function nextWhenVisible () {
    // Don't call next when the page isn't visible
    // or the carousel or its parent isn't visible
    if (!document.hidden && isVisible(this._element)) {
      this.next();
    }
  };

  Carousel.prototype.prev = function prev () {
    this._slide(ORDER_PREV);
  };

  Carousel.prototype.pause = function pause (event) {
    if (!event) {
      this._isPaused = true;
    }

    if (SelectorEngine.findOne(SELECTOR_NEXT_PREV, this._element)) {
      triggerTransitionEnd(this._element);
      this.cycle(true);
    }

    clearInterval(this._interval);
    this._interval = null;
  };

  Carousel.prototype.cycle = function cycle (event) {
    if (!event) {
      this._isPaused = false;
    }

    if (this._interval) {
      clearInterval(this._interval);
      this._interval = null;
    }

    if (this._config && this._config.interval && !this._isPaused) {
      this._updateInterval();

      this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
    }
  };

  Carousel.prototype.to = function to (index) {
    var this$1 = this;

    this._activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

    var activeIndex = this._getItemIndex(this._activeElement);

    if (index > this._items.length - 1 || index < 0) {
      return;
    }

    if (this._isSliding) {
      EventHandler.one(this._element, EVENT_SLID, function () { return this$1.to(index); });
      return;
    }

    if (activeIndex === index) {
      this.pause();
      this.cycle();
      return;
    }

    var order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;

    this._slide(order, this._items[index]);
  }; // Private


  Carousel.prototype._getConfig = function _getConfig (config) {
    config = Object.assign({}, Default$a,
      Manipulator.getDataAttributes(this._element),
      (typeof config === 'object' ? config : {}));
    typeCheckConfig(NAME$b, config, DefaultType$a);
    return config;
  };

  Carousel.prototype._handleSwipe = function _handleSwipe () {
    var absDeltax = Math.abs(this.touchDeltaX);

    if (absDeltax <= SWIPE_THRESHOLD) {
      return;
    }

    var direction = absDeltax / this.touchDeltaX;
    this.touchDeltaX = 0;

    if (!direction) {
      return;
    }

    this._slide(direction > 0 ? DIRECTION_RIGHT : DIRECTION_LEFT);
  };

  Carousel.prototype._addEventListeners = function _addEventListeners () {
    var this$1 = this;

    if (this._config.keyboard) {
      EventHandler.on(this._element, EVENT_KEYDOWN, function (event) { return this$1._keydown(event); });
    }

    if (this._config.pause === 'hover') {
      EventHandler.on(this._element, EVENT_MOUSEENTER, function (event) { return this$1.pause(event); });
      EventHandler.on(this._element, EVENT_MOUSELEAVE, function (event) { return this$1.cycle(event); });
    }

    if (this._config.touch && this._touchSupported) {
      this._addTouchEventListeners();
    }
  };

  Carousel.prototype._addTouchEventListeners = function _addTouchEventListeners () {
    var this$1 = this;

    var hasPointerPenTouch = function (event) {
      return this$1._pointerEvent && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
    };

    var start = function (event) {
      if (hasPointerPenTouch(event)) {
        this$1.touchStartX = event.clientX;
      } else if (!this$1._pointerEvent) {
        this$1.touchStartX = event.touches[0].clientX;
      }
    };

    var move = function (event) {
      // ensure swiping with one touch and not pinching
      this$1.touchDeltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this$1.touchStartX;
    };

    var end = function (event) {
      if (hasPointerPenTouch(event)) {
        this$1.touchDeltaX = event.clientX - this$1.touchStartX;
      }

      this$1._handleSwipe();

      if (this$1._config.pause === 'hover') {
        // If it's a touch-enabled device, mouseenter/leave are fired as
        // part of the mouse compatibility events on first tap - the carousel
        // would stop cycling until user tapped out of it;
        // here, we listen for touchend, explicitly pause the carousel
        // (as if it's the second time we tap on it, mouseenter compat event
        // is NOT fired) and after a timeout (to allow for mouse compatibility
        // events to fire) we explicitly restart cycling
        this$1.pause();

        if (this$1.touchTimeout) {
          clearTimeout(this$1.touchTimeout);
        }

        this$1.touchTimeout = setTimeout(function (event) { return this$1.cycle(event); }, TOUCHEVENT_COMPAT_WAIT + this$1._config.interval);
      }
    };

    SelectorEngine.find(SELECTOR_ITEM_IMG, this._element).forEach(function (itemImg) {
      EventHandler.on(itemImg, EVENT_DRAG_START, function (event) { return event.preventDefault(); });
    });

    if (this._pointerEvent) {
      EventHandler.on(this._element, EVENT_POINTERDOWN, function (event) { return start(event); });
      EventHandler.on(this._element, EVENT_POINTERUP, function (event) { return end(event); });

      this._element.classList.add(CLASS_NAME_POINTER_EVENT);
    } else {
      EventHandler.on(this._element, EVENT_TOUCHSTART, function (event) { return start(event); });
      EventHandler.on(this._element, EVENT_TOUCHMOVE, function (event) { return move(event); });
      EventHandler.on(this._element, EVENT_TOUCHEND, function (event) { return end(event); });
    }
  };

  Carousel.prototype._keydown = function _keydown (event) {
    if (/input|textarea/i.test(event.target.tagName)) {
      return;
    }

    var direction = KEY_TO_DIRECTION[event.key];

    if (direction) {
      event.preventDefault();

      this._slide(direction);
    }
  };

  Carousel.prototype._getItemIndex = function _getItemIndex (element) {
    this._items = element && element.parentNode ? SelectorEngine.find(SELECTOR_ITEM, element.parentNode) : [];
    return this._items.indexOf(element);
  };

  Carousel.prototype._getItemByOrder = function _getItemByOrder (order, activeElement) {
    var isNext = order === ORDER_NEXT;
    return getNextActiveElement(this._items, activeElement, isNext, this._config.wrap);
  };

  Carousel.prototype._triggerSlideEvent = function _triggerSlideEvent (relatedTarget, eventDirectionName) {
    var targetIndex = this._getItemIndex(relatedTarget);

    var fromIndex = this._getItemIndex(SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element));

    return EventHandler.trigger(this._element, EVENT_SLIDE, {
      relatedTarget: relatedTarget,
      direction: eventDirectionName,
      from: fromIndex,
      to: targetIndex
    });
  };

  Carousel.prototype._setActiveIndicatorElement = function _setActiveIndicatorElement (element) {
    var this$1 = this;

    if (this._indicatorsElement) {
      var activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE$1, this._indicatorsElement);
      activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
      activeIndicator.removeAttribute('aria-current');
      var indicators = SelectorEngine.find(SELECTOR_INDICATOR, this._indicatorsElement);

      for (var i = 0; i < indicators.length; i++) {
        if (Number.parseInt(indicators[i].getAttribute('data-bs-slide-to'), 10) === this$1._getItemIndex(element)) {
          indicators[i].classList.add(CLASS_NAME_ACTIVE$2);
          indicators[i].setAttribute('aria-current', 'true');
          break;
        }
      }
    }
  };

  Carousel.prototype._updateInterval = function _updateInterval () {
    var element = this._activeElement || SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

    if (!element) {
      return;
    }

    var elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10);

    if (elementInterval) {
      this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
      this._config.interval = elementInterval;
    } else {
      this._config.interval = this._config.defaultInterval || this._config.interval;
    }
  };

  Carousel.prototype._slide = function _slide (directionOrOrder, element) {
    var this$1 = this;

    var order = this._directionToOrder(directionOrOrder);

    var activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

    var activeElementIndex = this._getItemIndex(activeElement);

    var nextElement = element || this._getItemByOrder(order, activeElement);

    var nextElementIndex = this._getItemIndex(nextElement);

    var isCycling = Boolean(this._interval);
    var isNext = order === ORDER_NEXT;
    var directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
    var orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;

    var eventDirectionName = this._orderToDirection(order);

    if (nextElement && nextElement.classList.contains(CLASS_NAME_ACTIVE$2)) {
      this._isSliding = false;
      return;
    }

    if (this._isSliding) {
      return;
    }

    var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

    if (slideEvent.defaultPrevented) {
      return;
    }

    if (!activeElement || !nextElement) {
      // Some weirdness is happening, so we bail
      return;
    }

    this._isSliding = true;

    if (isCycling) {
      this.pause();
    }

    this._setActiveIndicatorElement(nextElement);

    this._activeElement = nextElement;

    var triggerSlidEvent = function () {
      EventHandler.trigger(this$1._element, EVENT_SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      });
    };

    if (this._element.classList.contains(CLASS_NAME_SLIDE)) {
      nextElement.classList.add(orderClassName);
      reflow(nextElement);
      activeElement.classList.add(directionalClassName);
      nextElement.classList.add(directionalClassName);

      var completeCallBack = function () {
        nextElement.classList.remove(directionalClassName, orderClassName);
        nextElement.classList.add(CLASS_NAME_ACTIVE$2);
        activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
        this$1._isSliding = false;
        setTimeout(triggerSlidEvent, 0);
      };

      this._queueCallback(completeCallBack, activeElement, true);
    } else {
      activeElement.classList.remove(CLASS_NAME_ACTIVE$2);
      nextElement.classList.add(CLASS_NAME_ACTIVE$2);
      this._isSliding = false;
      triggerSlidEvent();
    }

    if (isCycling) {
      this.cycle();
    }
  };

  Carousel.prototype._directionToOrder = function _directionToOrder (direction) {
    if (![DIRECTION_RIGHT, DIRECTION_LEFT].includes(direction)) {
      return direction;
    }

    if (isRTL()) {
      return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
    }

    return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
  };

  Carousel.prototype._orderToDirection = function _orderToDirection (order) {
    if (![ORDER_NEXT, ORDER_PREV].includes(order)) {
      return order;
    }

    if (isRTL()) {
      return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }

    return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
  }; // Static


  Carousel.carouselInterface = function carouselInterface (element, config) {
    var data = Carousel.getOrCreateInstance(element, config);
    var _config = data._config;

    if (typeof config === 'object') {
      _config = Object.assign({}, _config,
        config);
    }

    var action = typeof config === 'string' ? config : _config.slide;

    if (typeof config === 'number') {
      data.to(config);
    } else if (typeof action === 'string') {
      if (typeof data[action] === 'undefined') {
        throw new TypeError(("No method named \"" + action + "\""));
      }

      data[action]();
    } else if (_config.interval && _config.ride) {
      data.pause();
      data.cycle();
    }
  };

  Carousel.jQueryInterface = function jQueryInterface (config) {
    return this.each(function () {
      Carousel.carouselInterface(this, config);
    });
  };

  Carousel.dataApiClickHandler = function dataApiClickHandler (event) {
    var target = getElementFromSelector(this);

    if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
      return;
    }

    var config = Object.assign({}, Manipulator.getDataAttributes(target),
      Manipulator.getDataAttributes(this));
    var slideIndex = this.getAttribute('data-bs-slide-to');

    if (slideIndex) {
      config.interval = false;
    }

    Carousel.carouselInterface(target, config);

    if (slideIndex) {
      Carousel.getInstance(target).to(slideIndex);
    }

    event.preventDefault();
  };

  Object.defineProperties( Carousel, staticAccessors$3 );

  return Carousel;
}(BaseComponent));
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, Carousel.dataApiClickHandler);
EventHandler.on(window, EVENT_LOAD_DATA_API$2, function () {
  var carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);

  for (var i = 0, len = carousels.length; i < len; i++) {
    Carousel.carouselInterface(carousels[i], Carousel.getInstance(carousels[i]));
  }
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Carousel to jQuery only if jQuery is present
 */

defineJQueryPlugin(Carousel);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$a = 'collapse';
var DATA_KEY$9 = 'bs.collapse';
var EVENT_KEY$9 = "." + DATA_KEY$9;
var DATA_API_KEY$5 = '.data-api';
var Default$9 = {
  toggle: true,
  parent: null
};
var DefaultType$9 = {
  toggle: 'boolean',
  parent: '(null|element)'
};
var EVENT_SHOW$5 = "show" + EVENT_KEY$9;
var EVENT_SHOWN$5 = "shown" + EVENT_KEY$9;
var EVENT_HIDE$5 = "hide" + EVENT_KEY$9;
var EVENT_HIDDEN$5 = "hidden" + EVENT_KEY$9;
var EVENT_CLICK_DATA_API$4 = "click" + EVENT_KEY$9 + DATA_API_KEY$5;
var CLASS_NAME_SHOW$7 = 'show';
var CLASS_NAME_COLLAPSE = 'collapse';
var CLASS_NAME_COLLAPSING = 'collapsing';
var CLASS_NAME_COLLAPSED = 'collapsed';
var CLASS_NAME_DEEPER_CHILDREN = ":scope ." + CLASS_NAME_COLLAPSE + " ." + CLASS_NAME_COLLAPSE;
var CLASS_NAME_HORIZONTAL = 'collapse-horizontal';
var WIDTH = 'width';
var HEIGHT = 'height';
var SELECTOR_ACTIVES = '.collapse.show, .collapse.collapsing';
var SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Collapse = (function (BaseComponent) {
  function Collapse(element, config) {
    var this$1 = this;

    BaseComponent.call(this, element);
    this._isTransitioning = false;
    this._config = this._getConfig(config);
    this._triggerArray = [];
    var toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);

    for (var i = 0, len = toggleList.length; i < len; i++) {
      var elem = toggleList[i];
      var selector = getSelectorFromElement(elem);
      var filterElement = SelectorEngine.find(selector).filter(function (foundElem) { return foundElem === this$1._element; });

      if (selector !== null && filterElement.length) {
        this$1._selector = selector;

        this$1._triggerArray.push(elem);
      }
    }

    this._initializeChildren();

    if (!this._config.parent) {
      this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
    }

    if (this._config.toggle) {
      this.toggle();
    }
  }

  if ( BaseComponent ) Collapse.__proto__ = BaseComponent;
  Collapse.prototype = Object.create( BaseComponent && BaseComponent.prototype );
  Collapse.prototype.constructor = Collapse;

  var staticAccessors$4 = { Default: {},NAME: {} }; // Getters


  staticAccessors$4.Default.get = function () {
    return Default$9;
  };

  staticAccessors$4.NAME.get = function () {
    return NAME$a;
  }; // Public


  Collapse.prototype.toggle = function toggle () {
    if (this._isShown()) {
      this.hide();
    } else {
      this.show();
    }
  };

  Collapse.prototype.show = function show () {
    var this$1 = this;

    if (this._isTransitioning || this._isShown()) {
      return;
    }

    var actives = [];
    var activesData;

    if (this._config.parent) {
      var children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
      actives = SelectorEngine.find(SELECTOR_ACTIVES, this._config.parent).filter(function (elem) { return !children.includes(elem); }); // remove children if greater depth
    }

    var container = SelectorEngine.findOne(this._selector);

    if (actives.length) {
      var tempActiveData = actives.find(function (elem) { return container !== elem; });
      activesData = tempActiveData ? Collapse.getInstance(tempActiveData) : null;

      if (activesData && activesData._isTransitioning) {
        return;
      }
    }

    var startEvent = EventHandler.trigger(this._element, EVENT_SHOW$5);

    if (startEvent.defaultPrevented) {
      return;
    }

    actives.forEach(function (elemActive) {
      if (container !== elemActive) {
        Collapse.getOrCreateInstance(elemActive, {
          toggle: false
        }).hide();
      }

      if (!activesData) {
        Data.set(elemActive, DATA_KEY$9, null);
      }
    });

    var dimension = this._getDimension();

    this._element.classList.remove(CLASS_NAME_COLLAPSE);

    this._element.classList.add(CLASS_NAME_COLLAPSING);

    this._element.style[dimension] = 0;

    this._addAriaAndCollapsedClass(this._triggerArray, true);

    this._isTransitioning = true;

    var complete = function () {
      this$1._isTransitioning = false;

      this$1._element.classList.remove(CLASS_NAME_COLLAPSING);

      this$1._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);

      this$1._element.style[dimension] = '';
      EventHandler.trigger(this$1._element, EVENT_SHOWN$5);
    };

    var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
    var scrollSize = "scroll" + capitalizedDimension;

    this._queueCallback(complete, this._element, true);

    this._element.style[dimension] = (this._element[scrollSize]) + "px";
  };

  Collapse.prototype.hide = function hide () {
    var this$1 = this;

    if (this._isTransitioning || !this._isShown()) {
      return;
    }

    var startEvent = EventHandler.trigger(this._element, EVENT_HIDE$5);

    if (startEvent.defaultPrevented) {
      return;
    }

    var dimension = this._getDimension();

    this._element.style[dimension] = (this._element.getBoundingClientRect()[dimension]) + "px";
    reflow(this._element);

    this._element.classList.add(CLASS_NAME_COLLAPSING);

    this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);

    var triggerArrayLength = this._triggerArray.length;

    for (var i = 0; i < triggerArrayLength; i++) {
      var trigger = this$1._triggerArray[i];
      var elem = getElementFromSelector(trigger);

      if (elem && !this$1._isShown(elem)) {
        this$1._addAriaAndCollapsedClass([trigger], false);
      }
    }

    this._isTransitioning = true;

    var complete = function () {
      this$1._isTransitioning = false;

      this$1._element.classList.remove(CLASS_NAME_COLLAPSING);

      this$1._element.classList.add(CLASS_NAME_COLLAPSE);

      EventHandler.trigger(this$1._element, EVENT_HIDDEN$5);
    };

    this._element.style[dimension] = '';

    this._queueCallback(complete, this._element, true);
  };

  Collapse.prototype._isShown = function _isShown (element) {
    if ( element === void 0 ) element = this._element;

    return element.classList.contains(CLASS_NAME_SHOW$7);
  }; // Private


  Collapse.prototype._getConfig = function _getConfig (config) {
    config = Object.assign({}, Default$9,
      Manipulator.getDataAttributes(this._element),
      config);
    config.toggle = Boolean(config.toggle); // Coerce string values

    config.parent = getElement(config.parent);
    typeCheckConfig(NAME$a, config, DefaultType$9);
    return config;
  };

  Collapse.prototype._getDimension = function _getDimension () {
    return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
  };

  Collapse.prototype._initializeChildren = function _initializeChildren () {
    var this$1 = this;

    if (!this._config.parent) {
      return;
    }

    var children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
    SelectorEngine.find(SELECTOR_DATA_TOGGLE$4, this._config.parent).filter(function (elem) { return !children.includes(elem); }).forEach(function (element) {
      var selected = getElementFromSelector(element);

      if (selected) {
        this$1._addAriaAndCollapsedClass([element], this$1._isShown(selected));
      }
    });
  };

  Collapse.prototype._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass (triggerArray, isOpen) {
    if (!triggerArray.length) {
      return;
    }

    triggerArray.forEach(function (elem) {
      if (isOpen) {
        elem.classList.remove(CLASS_NAME_COLLAPSED);
      } else {
        elem.classList.add(CLASS_NAME_COLLAPSED);
      }

      elem.setAttribute('aria-expanded', isOpen);
    });
  }; // Static


  Collapse.jQueryInterface = function jQueryInterface (config) {
    return this.each(function () {
      var _config = {};

      if (typeof config === 'string' && /show|hide/.test(config)) {
        _config.toggle = false;
      }

      var data = Collapse.getOrCreateInstance(this, _config);

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(("No method named \"" + config + "\""));
        }

        data[config]();
      }
    });
  };

  Object.defineProperties( Collapse, staticAccessors$4 );

  return Collapse;
}(BaseComponent));
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function (event) {
  // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
  if (event.target.tagName === 'A' || event.delegateTarget && event.delegateTarget.tagName === 'A') {
    event.preventDefault();
  }

  var selector = getSelectorFromElement(this);
  var selectorElements = SelectorEngine.find(selector);
  selectorElements.forEach(function (element) {
    Collapse.getOrCreateInstance(element, {
      toggle: false
    }).toggle();
  });
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Collapse to jQuery only if jQuery is present
 */

defineJQueryPlugin(Collapse);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$9 = 'dropdown';
var DATA_KEY$8 = 'bs.dropdown';
var EVENT_KEY$8 = "." + DATA_KEY$8;
var DATA_API_KEY$4 = '.data-api';
var ESCAPE_KEY$2 = 'Escape';
var SPACE_KEY = 'Space';
var TAB_KEY$1 = 'Tab';
var ARROW_UP_KEY = 'ArrowUp';
var ARROW_DOWN_KEY = 'ArrowDown';
var RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button

var REGEXP_KEYDOWN = new RegExp((ARROW_UP_KEY + "|" + ARROW_DOWN_KEY + "|" + ESCAPE_KEY$2));
var EVENT_HIDE$4 = "hide" + EVENT_KEY$8;
var EVENT_HIDDEN$4 = "hidden" + EVENT_KEY$8;
var EVENT_SHOW$4 = "show" + EVENT_KEY$8;
var EVENT_SHOWN$4 = "shown" + EVENT_KEY$8;
var EVENT_CLICK_DATA_API$3 = "click" + EVENT_KEY$8 + DATA_API_KEY$4;
var EVENT_KEYDOWN_DATA_API = "keydown" + EVENT_KEY$8 + DATA_API_KEY$4;
var EVENT_KEYUP_DATA_API = "keyup" + EVENT_KEY$8 + DATA_API_KEY$4;
var CLASS_NAME_SHOW$6 = 'show';
var CLASS_NAME_DROPUP = 'dropup';
var CLASS_NAME_DROPEND = 'dropend';
var CLASS_NAME_DROPSTART = 'dropstart';
var CLASS_NAME_NAVBAR = 'navbar';
var SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]';
var SELECTOR_MENU = '.dropdown-menu';
var SELECTOR_NAVBAR_NAV = '.navbar-nav';
var SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
var PLACEMENT_TOP = isRTL() ? 'top-end' : 'top-start';
var PLACEMENT_TOPEND = isRTL() ? 'top-start' : 'top-end';
var PLACEMENT_BOTTOM = isRTL() ? 'bottom-end' : 'bottom-start';
var PLACEMENT_BOTTOMEND = isRTL() ? 'bottom-start' : 'bottom-end';
var PLACEMENT_RIGHT = isRTL() ? 'left-start' : 'right-start';
var PLACEMENT_LEFT = isRTL() ? 'right-start' : 'left-start';
var Default$8 = {
  offset: [0, 2],
  boundary: 'clippingParents',
  reference: 'toggle',
  display: 'dynamic',
  popperConfig: null,
  autoClose: true
};
var DefaultType$8 = {
  offset: '(array|string|function)',
  boundary: '(string|element)',
  reference: '(string|element|object)',
  display: 'string',
  popperConfig: '(null|object|function)',
  autoClose: '(boolean|string)'
};
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Dropdown = (function (BaseComponent) {
  function Dropdown(element, config) {
    BaseComponent.call(this, element);
    this._popper = null;
    this._config = this._getConfig(config);
    this._menu = this._getMenuElement();
    this._inNavbar = this._detectNavbar();
  }

  if ( BaseComponent ) Dropdown.__proto__ = BaseComponent;
  Dropdown.prototype = Object.create( BaseComponent && BaseComponent.prototype );
  Dropdown.prototype.constructor = Dropdown;

  var staticAccessors$5 = { Default: {},DefaultType: {},NAME: {} }; // Getters


  staticAccessors$5.Default.get = function () {
    return Default$8;
  };

  staticAccessors$5.DefaultType.get = function () {
    return DefaultType$8;
  };

  staticAccessors$5.NAME.get = function () {
    return NAME$9;
  }; // Public


  Dropdown.prototype.toggle = function toggle () {
    return this._isShown() ? this.hide() : this.show();
  };

  Dropdown.prototype.show = function show () {
    if (isDisabled(this._element) || this._isShown(this._menu)) {
      return;
    }

    var relatedTarget = {
      relatedTarget: this._element
    };
    var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, relatedTarget);

    if (showEvent.defaultPrevented) {
      return;
    }

    var parent = Dropdown.getParentFromElement(this._element); // Totally disable Popper for Dropdowns in Navbar

    if (this._inNavbar) {
      Manipulator.setDataAttribute(this._menu, 'popper', 'none');
    } else {
      this._createPopper(parent);
    } // If this is a touch-enabled device we add extra
    // empty mouseover listeners to the body's immediate children;
    // only needed because of broken event delegation on iOS
    // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


    if ('ontouchstart' in document.documentElement && !parent.closest(SELECTOR_NAVBAR_NAV)) {
      (ref = []).concat.apply(ref, document.body.children).forEach(function (elem) { return EventHandler.on(elem, 'mouseover', noop); });
    }

    this._element.focus();

    this._element.setAttribute('aria-expanded', true);

    this._menu.classList.add(CLASS_NAME_SHOW$6);

    this._element.classList.add(CLASS_NAME_SHOW$6);

    EventHandler.trigger(this._element, EVENT_SHOWN$4, relatedTarget);
    var ref;
  };

  Dropdown.prototype.hide = function hide () {
    if (isDisabled(this._element) || !this._isShown(this._menu)) {
      return;
    }

    var relatedTarget = {
      relatedTarget: this._element
    };

    this._completeHide(relatedTarget);
  };

  Dropdown.prototype.dispose = function dispose () {
    if (this._popper) {
      this._popper.destroy();
    }

    BaseComponent.prototype.dispose.call(this);
  };

  Dropdown.prototype.update = function update () {
    this._inNavbar = this._detectNavbar();

    if (this._popper) {
      this._popper.update();
    }
  }; // Private


  Dropdown.prototype._completeHide = function _completeHide (relatedTarget) {
    var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4, relatedTarget);

    if (hideEvent.defaultPrevented) {
      return;
    } // If this is a touch-enabled device we remove the extra
    // empty mouseover listeners we added for iOS support


    if ('ontouchstart' in document.documentElement) {
      (ref = []).concat.apply(ref, document.body.children).forEach(function (elem) { return EventHandler.off(elem, 'mouseover', noop); });
    }

    if (this._popper) {
      this._popper.destroy();
    }

    this._menu.classList.remove(CLASS_NAME_SHOW$6);

    this._element.classList.remove(CLASS_NAME_SHOW$6);

    this._element.setAttribute('aria-expanded', 'false');

    Manipulator.removeDataAttribute(this._menu, 'popper');
    EventHandler.trigger(this._element, EVENT_HIDDEN$4, relatedTarget);
    var ref;
  };

  Dropdown.prototype._getConfig = function _getConfig (config) {
    config = Object.assign({}, this.constructor.Default,
      Manipulator.getDataAttributes(this._element),
      config);
    typeCheckConfig(NAME$9, config, this.constructor.DefaultType);

    if (typeof config.reference === 'object' && !isElement(config.reference) && typeof config.reference.getBoundingClientRect !== 'function') {
      // Popper virtual elements require a getBoundingClientRect method
      throw new TypeError(((NAME$9.toUpperCase()) + ": Option \"reference\" provided type \"object\" without a required \"getBoundingClientRect\" method."));
    }

    return config;
  };

  Dropdown.prototype._createPopper = function _createPopper (parent) {
    if (typeof __WEBPACK_IMPORTED_MODULE_0__popperjs_core__ === 'undefined') {
      throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
    }

    var referenceElement = this._element;

    if (this._config.reference === 'parent') {
      referenceElement = parent;
    } else if (isElement(this._config.reference)) {
      referenceElement = getElement(this._config.reference);
    } else if (typeof this._config.reference === 'object') {
      referenceElement = this._config.reference;
    }

    var popperConfig = this._getPopperConfig();

    var isDisplayStatic = popperConfig.modifiers.find(function (modifier) { return modifier.name === 'applyStyles' && modifier.enabled === false; });
    this._popper = __WEBPACK_IMPORTED_MODULE_0__popperjs_core__["createPopper"](referenceElement, this._menu, popperConfig);

    if (isDisplayStatic) {
      Manipulator.setDataAttribute(this._menu, 'popper', 'static');
    }
  };

  Dropdown.prototype._isShown = function _isShown (element) {
    if ( element === void 0 ) element = this._element;

    return element.classList.contains(CLASS_NAME_SHOW$6);
  };

  Dropdown.prototype._getMenuElement = function _getMenuElement () {
    return SelectorEngine.next(this._element, SELECTOR_MENU)[0];
  };

  Dropdown.prototype._getPlacement = function _getPlacement () {
    var parentDropdown = this._element.parentNode;

    if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
      return PLACEMENT_RIGHT;
    }

    if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
      return PLACEMENT_LEFT;
    } // We need to trim the value because custom properties can also include spaces


    var isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end';

    if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
      return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
    }

    return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
  };

  Dropdown.prototype._detectNavbar = function _detectNavbar () {
    return this._element.closest(("." + CLASS_NAME_NAVBAR)) !== null;
  };

  Dropdown.prototype._getOffset = function _getOffset () {
    var this$1 = this;

    var ref = this._config;
    var offset = ref.offset;

    if (typeof offset === 'string') {
      return offset.split(',').map(function (val) { return Number.parseInt(val, 10); });
    }

    if (typeof offset === 'function') {
      return function (popperData) { return offset(popperData, this$1._element); };
    }

    return offset;
  };

  Dropdown.prototype._getPopperConfig = function _getPopperConfig () {
    var defaultBsPopperConfig = {
      placement: this._getPlacement(),
      modifiers: [{
        name: 'preventOverflow',
        options: {
          boundary: this._config.boundary
        }
      }, {
        name: 'offset',
        options: {
          offset: this._getOffset()
        }
      }]
    }; // Disable Popper if we have a static display

    if (this._config.display === 'static') {
      defaultBsPopperConfig.modifiers = [{
        name: 'applyStyles',
        enabled: false
      }];
    }

    return Object.assign({}, defaultBsPopperConfig,
      (typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig));
  };

  Dropdown.prototype._selectMenuItem = function _selectMenuItem (ref) {
    var key = ref.key;
    var target = ref.target;

    var items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(isVisible);

    if (!items.length) {
      return;
    } // if target isn't included in items (e.g. when expanding the dropdown)
    // allow cycling to get the last item in case key equals ARROW_UP_KEY


    getNextActiveElement(items, target, key === ARROW_DOWN_KEY, !items.includes(target)).focus();
  }; // Static


  Dropdown.jQueryInterface = function jQueryInterface (config) {
    return this.each(function () {
      var data = Dropdown.getOrCreateInstance(this, config);

      if (typeof config !== 'string') {
        return;
      }

      if (typeof data[config] === 'undefined') {
        throw new TypeError(("No method named \"" + config + "\""));
      }

      data[config]();
    });
  };

  Dropdown.clearMenus = function clearMenus (event) {
    if (event && (event.button === RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== TAB_KEY$1)) {
      return;
    }

    var toggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE$3);

    for (var i = 0, len = toggles.length; i < len; i++) {
      var context = Dropdown.getInstance(toggles[i]);

      if (!context || context._config.autoClose === false) {
        continue;
      }

      if (!context._isShown()) {
        continue;
      }

      var relatedTarget = {
        relatedTarget: context._element
      };

      if (event) {
        var composedPath = event.composedPath();
        var isMenuTarget = composedPath.includes(context._menu);

        if (composedPath.includes(context._element) || context._config.autoClose === 'inside' && !isMenuTarget || context._config.autoClose === 'outside' && isMenuTarget) {
          continue;
        } // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu


        if (context._menu.contains(event.target) && (event.type === 'keyup' && event.key === TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) {
          continue;
        }

        if (event.type === 'click') {
          relatedTarget.clickEvent = event;
        }
      }

      context._completeHide(relatedTarget);
    }
  };

  Dropdown.getParentFromElement = function getParentFromElement (element) {
    return getElementFromSelector(element) || element.parentNode;
  };

  Dropdown.dataApiKeydownHandler = function dataApiKeydownHandler (event) {
    // If not input/textarea:
    //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
    // If input/textarea:
    //  - If space key => not a dropdown command
    //  - If key is other than escape
    //    - If key is not up or down => not a dropdown command
    //    - If trigger inside the menu => not a dropdown command
    if (/input|textarea/i.test(event.target.tagName) ? event.key === SPACE_KEY || event.key !== ESCAPE_KEY$2 && (event.key !== ARROW_DOWN_KEY && event.key !== ARROW_UP_KEY || event.target.closest(SELECTOR_MENU)) : !REGEXP_KEYDOWN.test(event.key)) {
      return;
    }

    var isActive = this.classList.contains(CLASS_NAME_SHOW$6);

    if (!isActive && event.key === ESCAPE_KEY$2) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    if (isDisabled(this)) {
      return;
    }

    var getToggleButton = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0];
    var instance = Dropdown.getOrCreateInstance(getToggleButton);

    if (event.key === ESCAPE_KEY$2) {
      instance.hide();
      return;
    }

    if (event.key === ARROW_UP_KEY || event.key === ARROW_DOWN_KEY) {
      if (!isActive) {
        instance.show();
      }

      instance._selectMenuItem(event);

      return;
    }

    if (!isActive || event.key === SPACE_KEY) {
      Dropdown.clearMenus();
    }
  };

  Object.defineProperties( Dropdown, staticAccessors$5 );

  return Dropdown;
}(BaseComponent));
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function (event) {
  event.preventDefault();
  Dropdown.getOrCreateInstance(this).toggle();
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Dropdown to jQuery only if jQuery is present
 */

defineJQueryPlugin(Dropdown);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/scrollBar.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
var SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
var SELECTOR_STICKY_CONTENT = '.sticky-top';

var ScrollBarHelper = function ScrollBarHelper() {
  this._element = document.body;
};

ScrollBarHelper.prototype.getWidth = function getWidth () {
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
  var documentWidth = document.documentElement.clientWidth;
  return Math.abs(window.innerWidth - documentWidth);
};

ScrollBarHelper.prototype.hide = function hide () {
  var width = this.getWidth();

  this._disableOverFlow(); // give padding to element to balance the hidden scrollbar width


  this._setElementAttributes(this._element, 'paddingRight', function (calculatedValue) { return calculatedValue + width; }); // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth


  this._setElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight', function (calculatedValue) { return calculatedValue + width; });

  this._setElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight', function (calculatedValue) { return calculatedValue - width; });
};

ScrollBarHelper.prototype._disableOverFlow = function _disableOverFlow () {
  this._saveInitialAttribute(this._element, 'overflow');

  this._element.style.overflow = 'hidden';
};

ScrollBarHelper.prototype._setElementAttributes = function _setElementAttributes (selector, styleProp, callback) {
    var this$1 = this;

  var scrollbarWidth = this.getWidth();

  var manipulationCallBack = function (element) {
    if (element !== this$1._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
      return;
    }

    this$1._saveInitialAttribute(element, styleProp);

    var calculatedValue = window.getComputedStyle(element)[styleProp];
    element.style[styleProp] = (callback(Number.parseFloat(calculatedValue))) + "px";
  };

  this._applyManipulationCallback(selector, manipulationCallBack);
};

ScrollBarHelper.prototype.reset = function reset () {
  this._resetElementAttributes(this._element, 'overflow');

  this._resetElementAttributes(this._element, 'paddingRight');

  this._resetElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight');

  this._resetElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight');
};

ScrollBarHelper.prototype._saveInitialAttribute = function _saveInitialAttribute (element, styleProp) {
  var actualValue = element.style[styleProp];

  if (actualValue) {
    Manipulator.setDataAttribute(element, styleProp, actualValue);
  }
};

ScrollBarHelper.prototype._resetElementAttributes = function _resetElementAttributes (selector, styleProp) {
  var manipulationCallBack = function (element) {
    var value = Manipulator.getDataAttribute(element, styleProp);

    if (typeof value === 'undefined') {
      element.style.removeProperty(styleProp);
    } else {
      Manipulator.removeDataAttribute(element, styleProp);
      element.style[styleProp] = value;
    }
  };

  this._applyManipulationCallback(selector, manipulationCallBack);
};

ScrollBarHelper.prototype._applyManipulationCallback = function _applyManipulationCallback (selector, callBack) {
  if (isElement(selector)) {
    callBack(selector);
  } else {
    SelectorEngine.find(selector, this._element).forEach(callBack);
  }
};

ScrollBarHelper.prototype.isOverflowing = function isOverflowing () {
  return this.getWidth() > 0;
};

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/backdrop.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
var Default$7 = {
  className: 'modal-backdrop',
  isVisible: true,
  // if false, we use the backdrop helper without adding any element to the dom
  isAnimated: false,
  rootElement: 'body',
  // give the choice to place backdrop under different elements
  clickCallback: null
};
var DefaultType$7 = {
  className: 'string',
  isVisible: 'boolean',
  isAnimated: 'boolean',
  rootElement: '(element|string)',
  clickCallback: '(function|null)'
};
var NAME$8 = 'backdrop';
var CLASS_NAME_FADE$4 = 'fade';
var CLASS_NAME_SHOW$5 = 'show';
var EVENT_MOUSEDOWN = "mousedown.bs." + NAME$8;

var Backdrop = function Backdrop(config) {
  this._config = this._getConfig(config);
  this._isAppended = false;
  this._element = null;
};

Backdrop.prototype.show = function show (callback) {
  if (!this._config.isVisible) {
    execute(callback);
    return;
  }

  this._append();

  if (this._config.isAnimated) {
    reflow(this._getElement());
  }

  this._getElement().classList.add(CLASS_NAME_SHOW$5);

  this._emulateAnimation(function () {
    execute(callback);
  });
};

Backdrop.prototype.hide = function hide (callback) {
    var this$1 = this;

  if (!this._config.isVisible) {
    execute(callback);
    return;
  }

  this._getElement().classList.remove(CLASS_NAME_SHOW$5);

  this._emulateAnimation(function () {
    this$1.dispose();
    execute(callback);
  });
}; // Private


Backdrop.prototype._getElement = function _getElement () {
  if (!this._element) {
    var backdrop = document.createElement('div');
    backdrop.className = this._config.className;

    if (this._config.isAnimated) {
      backdrop.classList.add(CLASS_NAME_FADE$4);
    }

    this._element = backdrop;
  }

  return this._element;
};

Backdrop.prototype._getConfig = function _getConfig (config) {
  config = Object.assign({}, Default$7,
    (typeof config === 'object' ? config : {})); // use getElement() with the default "body" to get a fresh Element on each instantiation

  config.rootElement = getElement(config.rootElement);
  typeCheckConfig(NAME$8, config, DefaultType$7);
  return config;
};

Backdrop.prototype._append = function _append () {
    var this$1 = this;

  if (this._isAppended) {
    return;
  }

  this._config.rootElement.append(this._getElement());

  EventHandler.on(this._getElement(), EVENT_MOUSEDOWN, function () {
    execute(this$1._config.clickCallback);
  });
  this._isAppended = true;
};

Backdrop.prototype.dispose = function dispose () {
  if (!this._isAppended) {
    return;
  }

  EventHandler.off(this._element, EVENT_MOUSEDOWN);

  this._element.remove();

  this._isAppended = false;
};

Backdrop.prototype._emulateAnimation = function _emulateAnimation (callback) {
  executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
};

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/focustrap.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
var Default$6 = {
  trapElement: null,
  // The element to trap focus inside of
  autofocus: true
};
var DefaultType$6 = {
  trapElement: 'element',
  autofocus: 'boolean'
};
var NAME$7 = 'focustrap';
var DATA_KEY$7 = 'bs.focustrap';
var EVENT_KEY$7 = "." + DATA_KEY$7;
var EVENT_FOCUSIN$1 = "focusin" + EVENT_KEY$7;
var EVENT_KEYDOWN_TAB = "keydown.tab" + EVENT_KEY$7;
var TAB_KEY = 'Tab';
var TAB_NAV_FORWARD = 'forward';
var TAB_NAV_BACKWARD = 'backward';

var FocusTrap = function FocusTrap(config) {
  this._config = this._getConfig(config);
  this._isActive = false;
  this._lastTabNavDirection = null;
};

FocusTrap.prototype.activate = function activate () {
    var this$1 = this;

  var ref = this._config;
    var trapElement = ref.trapElement;
    var autofocus = ref.autofocus;

  if (this._isActive) {
    return;
  }

  if (autofocus) {
    trapElement.focus();
  }

  EventHandler.off(document, EVENT_KEY$7); // guard against infinite focus loop

  EventHandler.on(document, EVENT_FOCUSIN$1, function (event) { return this$1._handleFocusin(event); });
  EventHandler.on(document, EVENT_KEYDOWN_TAB, function (event) { return this$1._handleKeydown(event); });
  this._isActive = true;
};

FocusTrap.prototype.deactivate = function deactivate () {
  if (!this._isActive) {
    return;
  }

  this._isActive = false;
  EventHandler.off(document, EVENT_KEY$7);
}; // Private


FocusTrap.prototype._handleFocusin = function _handleFocusin (event) {
  var target = event.target;
  var ref = this._config;
    var trapElement = ref.trapElement;

  if (target === document || target === trapElement || trapElement.contains(target)) {
    return;
  }

  var elements = SelectorEngine.focusableChildren(trapElement);

  if (elements.length === 0) {
    trapElement.focus();
  } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
    elements[elements.length - 1].focus();
  } else {
    elements[0].focus();
  }
};

FocusTrap.prototype._handleKeydown = function _handleKeydown (event) {
  if (event.key !== TAB_KEY) {
    return;
  }

  this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
};

FocusTrap.prototype._getConfig = function _getConfig (config) {
  config = Object.assign({}, Default$6,
    (typeof config === 'object' ? config : {}));
  typeCheckConfig(NAME$7, config, DefaultType$6);
  return config;
};

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$6 = 'modal';
var DATA_KEY$6 = 'bs.modal';
var EVENT_KEY$6 = "." + DATA_KEY$6;
var DATA_API_KEY$3 = '.data-api';
var ESCAPE_KEY$1 = 'Escape';
var Default$5 = {
  backdrop: true,
  keyboard: true,
  focus: true
};
var DefaultType$5 = {
  backdrop: '(boolean|string)',
  keyboard: 'boolean',
  focus: 'boolean'
};
var EVENT_HIDE$3 = "hide" + EVENT_KEY$6;
var EVENT_HIDE_PREVENTED = "hidePrevented" + EVENT_KEY$6;
var EVENT_HIDDEN$3 = "hidden" + EVENT_KEY$6;
var EVENT_SHOW$3 = "show" + EVENT_KEY$6;
var EVENT_SHOWN$3 = "shown" + EVENT_KEY$6;
var EVENT_RESIZE = "resize" + EVENT_KEY$6;
var EVENT_CLICK_DISMISS = "click.dismiss" + EVENT_KEY$6;
var EVENT_KEYDOWN_DISMISS$1 = "keydown.dismiss" + EVENT_KEY$6;
var EVENT_MOUSEUP_DISMISS = "mouseup.dismiss" + EVENT_KEY$6;
var EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss" + EVENT_KEY$6;
var EVENT_CLICK_DATA_API$2 = "click" + EVENT_KEY$6 + DATA_API_KEY$3;
var CLASS_NAME_OPEN = 'modal-open';
var CLASS_NAME_FADE$3 = 'fade';
var CLASS_NAME_SHOW$4 = 'show';
var CLASS_NAME_STATIC = 'modal-static';
var OPEN_SELECTOR$1 = '.modal.show';
var SELECTOR_DIALOG = '.modal-dialog';
var SELECTOR_MODAL_BODY = '.modal-body';
var SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Modal = (function (BaseComponent) {
  function Modal(element, config) {
    BaseComponent.call(this, element);
    this._config = this._getConfig(config);
    this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
    this._backdrop = this._initializeBackDrop();
    this._focustrap = this._initializeFocusTrap();
    this._isShown = false;
    this._ignoreBackdropClick = false;
    this._isTransitioning = false;
    this._scrollBar = new ScrollBarHelper();
  }

  if ( BaseComponent ) Modal.__proto__ = BaseComponent;
  Modal.prototype = Object.create( BaseComponent && BaseComponent.prototype );
  Modal.prototype.constructor = Modal;

  var staticAccessors$6 = { Default: {},NAME: {} }; // Getters


  staticAccessors$6.Default.get = function () {
    return Default$5;
  };

  staticAccessors$6.NAME.get = function () {
    return NAME$6;
  }; // Public


  Modal.prototype.toggle = function toggle (relatedTarget) {
    return this._isShown ? this.hide() : this.show(relatedTarget);
  };

  Modal.prototype.show = function show (relatedTarget) {
    var this$1 = this;

    if (this._isShown || this._isTransitioning) {
      return;
    }

    var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
      relatedTarget: relatedTarget
    });

    if (showEvent.defaultPrevented) {
      return;
    }

    this._isShown = true;

    if (this._isAnimated()) {
      this._isTransitioning = true;
    }

    this._scrollBar.hide();

    document.body.classList.add(CLASS_NAME_OPEN);

    this._adjustDialog();

    this._setEscapeEvent();

    this._setResizeEvent();

    EventHandler.on(this._dialog, EVENT_MOUSEDOWN_DISMISS, function () {
      EventHandler.one(this$1._element, EVENT_MOUSEUP_DISMISS, function (event) {
        if (event.target === this$1._element) {
          this$1._ignoreBackdropClick = true;
        }
      });
    });

    this._showBackdrop(function () { return this$1._showElement(relatedTarget); });
  };

  Modal.prototype.hide = function hide () {
    var this$1 = this;

    if (!this._isShown || this._isTransitioning) {
      return;
    }

    var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);

    if (hideEvent.defaultPrevented) {
      return;
    }

    this._isShown = false;

    var isAnimated = this._isAnimated();

    if (isAnimated) {
      this._isTransitioning = true;
    }

    this._setEscapeEvent();

    this._setResizeEvent();

    this._focustrap.deactivate();

    this._element.classList.remove(CLASS_NAME_SHOW$4);

    EventHandler.off(this._element, EVENT_CLICK_DISMISS);
    EventHandler.off(this._dialog, EVENT_MOUSEDOWN_DISMISS);

    this._queueCallback(function () { return this$1._hideModal(); }, this._element, isAnimated);
  };

  Modal.prototype.dispose = function dispose () {
    [window, this._dialog].forEach(function (htmlElement) { return EventHandler.off(htmlElement, EVENT_KEY$6); });

    this._backdrop.dispose();

    this._focustrap.deactivate();

    BaseComponent.prototype.dispose.call(this);
  };

  Modal.prototype.handleUpdate = function handleUpdate () {
    this._adjustDialog();
  }; // Private


  Modal.prototype._initializeBackDrop = function _initializeBackDrop () {
    return new Backdrop({
      isVisible: Boolean(this._config.backdrop),
      // 'static' option will be translated to true, and booleans will keep their value
      isAnimated: this._isAnimated()
    });
  };

  Modal.prototype._initializeFocusTrap = function _initializeFocusTrap () {
    return new FocusTrap({
      trapElement: this._element
    });
  };

  Modal.prototype._getConfig = function _getConfig (config) {
    config = Object.assign({}, Default$5,
      Manipulator.getDataAttributes(this._element),
      (typeof config === 'object' ? config : {}));
    typeCheckConfig(NAME$6, config, DefaultType$5);
    return config;
  };

  Modal.prototype._showElement = function _showElement (relatedTarget) {
    var this$1 = this;

    var isAnimated = this._isAnimated();

    var modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);

    if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
      // Don't move modal's DOM position
      document.body.append(this._element);
    }

    this._element.style.display = 'block';

    this._element.removeAttribute('aria-hidden');

    this._element.setAttribute('aria-modal', true);

    this._element.setAttribute('role', 'dialog');

    this._element.scrollTop = 0;

    if (modalBody) {
      modalBody.scrollTop = 0;
    }

    if (isAnimated) {
      reflow(this._element);
    }

    this._element.classList.add(CLASS_NAME_SHOW$4);

    var transitionComplete = function () {
      if (this$1._config.focus) {
        this$1._focustrap.activate();
      }

      this$1._isTransitioning = false;
      EventHandler.trigger(this$1._element, EVENT_SHOWN$3, {
        relatedTarget: relatedTarget
      });
    };

    this._queueCallback(transitionComplete, this._dialog, isAnimated);
  };

  Modal.prototype._setEscapeEvent = function _setEscapeEvent () {
    var this$1 = this;

    if (this._isShown) {
      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, function (event) {
        if (this$1._config.keyboard && event.key === ESCAPE_KEY$1) {
          event.preventDefault();
          this$1.hide();
        } else if (!this$1._config.keyboard && event.key === ESCAPE_KEY$1) {
          this$1._triggerBackdropTransition();
        }
      });
    } else {
      EventHandler.off(this._element, EVENT_KEYDOWN_DISMISS$1);
    }
  };

  Modal.prototype._setResizeEvent = function _setResizeEvent () {
    var this$1 = this;

    if (this._isShown) {
      EventHandler.on(window, EVENT_RESIZE, function () { return this$1._adjustDialog(); });
    } else {
      EventHandler.off(window, EVENT_RESIZE);
    }
  };

  Modal.prototype._hideModal = function _hideModal () {
    var this$1 = this;

    this._element.style.display = 'none';

    this._element.setAttribute('aria-hidden', true);

    this._element.removeAttribute('aria-modal');

    this._element.removeAttribute('role');

    this._isTransitioning = false;

    this._backdrop.hide(function () {
      document.body.classList.remove(CLASS_NAME_OPEN);

      this$1._resetAdjustments();

      this$1._scrollBar.reset();

      EventHandler.trigger(this$1._element, EVENT_HIDDEN$3);
    });
  };

  Modal.prototype._showBackdrop = function _showBackdrop (callback) {
    var this$1 = this;

    EventHandler.on(this._element, EVENT_CLICK_DISMISS, function (event) {
      if (this$1._ignoreBackdropClick) {
        this$1._ignoreBackdropClick = false;
        return;
      }

      if (event.target !== event.currentTarget) {
        return;
      }

      if (this$1._config.backdrop === true) {
        this$1.hide();
      } else if (this$1._config.backdrop === 'static') {
        this$1._triggerBackdropTransition();
      }
    });

    this._backdrop.show(callback);
  };

  Modal.prototype._isAnimated = function _isAnimated () {
    return this._element.classList.contains(CLASS_NAME_FADE$3);
  };

  Modal.prototype._triggerBackdropTransition = function _triggerBackdropTransition () {
    var this$1 = this;

    var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);

    if (hideEvent.defaultPrevented) {
      return;
    }

    var ref = this._element;
    var classList = ref.classList;
    var scrollHeight = ref.scrollHeight;
    var style = ref.style;
    var isModalOverflowing = scrollHeight > document.documentElement.clientHeight; // return if the following background transition hasn't yet completed

    if (!isModalOverflowing && style.overflowY === 'hidden' || classList.contains(CLASS_NAME_STATIC)) {
      return;
    }

    if (!isModalOverflowing) {
      style.overflowY = 'hidden';
    }

    classList.add(CLASS_NAME_STATIC);

    this._queueCallback(function () {
      classList.remove(CLASS_NAME_STATIC);

      if (!isModalOverflowing) {
        this$1._queueCallback(function () {
          style.overflowY = '';
        }, this$1._dialog);
      }
    }, this._dialog);

    this._element.focus();
  }; // ----------------------------------------------------------------------
  // the following methods are used to handle overflowing modals
  // ----------------------------------------------------------------------


  Modal.prototype._adjustDialog = function _adjustDialog () {
    var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

    var scrollbarWidth = this._scrollBar.getWidth();

    var isBodyOverflowing = scrollbarWidth > 0;

    if (!isBodyOverflowing && isModalOverflowing && !isRTL() || isBodyOverflowing && !isModalOverflowing && isRTL()) {
      this._element.style.paddingLeft = scrollbarWidth + "px";
    }

    if (isBodyOverflowing && !isModalOverflowing && !isRTL() || !isBodyOverflowing && isModalOverflowing && isRTL()) {
      this._element.style.paddingRight = scrollbarWidth + "px";
    }
  };

  Modal.prototype._resetAdjustments = function _resetAdjustments () {
    this._element.style.paddingLeft = '';
    this._element.style.paddingRight = '';
  }; // Static


  Modal.jQueryInterface = function jQueryInterface (config, relatedTarget) {
    return this.each(function () {
      var data = Modal.getOrCreateInstance(this, config);

      if (typeof config !== 'string') {
        return;
      }

      if (typeof data[config] === 'undefined') {
        throw new TypeError(("No method named \"" + config + "\""));
      }

      data[config](relatedTarget);
    });
  };

  Object.defineProperties( Modal, staticAccessors$6 );

  return Modal;
}(BaseComponent));
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function (event) {
  var this$1 = this;

  var target = getElementFromSelector(this);

  if (['A', 'AREA'].includes(this.tagName)) {
    event.preventDefault();
  }

  EventHandler.one(target, EVENT_SHOW$3, function (showEvent) {
    if (showEvent.defaultPrevented) {
      // only register focus restorer if modal will actually get shown
      return;
    }

    EventHandler.one(target, EVENT_HIDDEN$3, function () {
      if (isVisible(this$1)) {
        this$1.focus();
      }
    });
  }); // avoid conflict when clicking moddal toggler while another one is open

  var allReadyOpen = SelectorEngine.findOne(OPEN_SELECTOR$1);

  if (allReadyOpen) {
    Modal.getInstance(allReadyOpen).hide();
  }

  var data = Modal.getOrCreateInstance(target);
  data.toggle(this);
});
enableDismissTrigger(Modal);
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Modal to jQuery only if jQuery is present
 */

defineJQueryPlugin(Modal);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): offcanvas.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$5 = 'offcanvas';
var DATA_KEY$5 = 'bs.offcanvas';
var EVENT_KEY$5 = "." + DATA_KEY$5;
var DATA_API_KEY$2 = '.data-api';
var EVENT_LOAD_DATA_API$1 = "load" + EVENT_KEY$5 + DATA_API_KEY$2;
var ESCAPE_KEY = 'Escape';
var Default$4 = {
  backdrop: true,
  keyboard: true,
  scroll: false
};
var DefaultType$4 = {
  backdrop: 'boolean',
  keyboard: 'boolean',
  scroll: 'boolean'
};
var CLASS_NAME_SHOW$3 = 'show';
var CLASS_NAME_BACKDROP = 'offcanvas-backdrop';
var OPEN_SELECTOR = '.offcanvas.show';
var EVENT_SHOW$2 = "show" + EVENT_KEY$5;
var EVENT_SHOWN$2 = "shown" + EVENT_KEY$5;
var EVENT_HIDE$2 = "hide" + EVENT_KEY$5;
var EVENT_HIDDEN$2 = "hidden" + EVENT_KEY$5;
var EVENT_CLICK_DATA_API$1 = "click" + EVENT_KEY$5 + DATA_API_KEY$2;
var EVENT_KEYDOWN_DISMISS = "keydown.dismiss" + EVENT_KEY$5;
var SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Offcanvas = (function (BaseComponent) {
  function Offcanvas(element, config) {
    BaseComponent.call(this, element);
    this._config = this._getConfig(config);
    this._isShown = false;
    this._backdrop = this._initializeBackDrop();
    this._focustrap = this._initializeFocusTrap();

    this._addEventListeners();
  }

  if ( BaseComponent ) Offcanvas.__proto__ = BaseComponent;
  Offcanvas.prototype = Object.create( BaseComponent && BaseComponent.prototype );
  Offcanvas.prototype.constructor = Offcanvas;

  var staticAccessors$7 = { NAME: {},Default: {} }; // Getters


  staticAccessors$7.NAME.get = function () {
    return NAME$5;
  };

  staticAccessors$7.Default.get = function () {
    return Default$4;
  }; // Public


  Offcanvas.prototype.toggle = function toggle (relatedTarget) {
    return this._isShown ? this.hide() : this.show(relatedTarget);
  };

  Offcanvas.prototype.show = function show (relatedTarget) {
    var this$1 = this;

    if (this._isShown) {
      return;
    }

    var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$2, {
      relatedTarget: relatedTarget
    });

    if (showEvent.defaultPrevented) {
      return;
    }

    this._isShown = true;
    this._element.style.visibility = 'visible';

    this._backdrop.show();

    if (!this._config.scroll) {
      new ScrollBarHelper().hide();
    }

    this._element.removeAttribute('aria-hidden');

    this._element.setAttribute('aria-modal', true);

    this._element.setAttribute('role', 'dialog');

    this._element.classList.add(CLASS_NAME_SHOW$3);

    var completeCallBack = function () {
      if (!this$1._config.scroll) {
        this$1._focustrap.activate();
      }

      EventHandler.trigger(this$1._element, EVENT_SHOWN$2, {
        relatedTarget: relatedTarget
      });
    };

    this._queueCallback(completeCallBack, this._element, true);
  };

  Offcanvas.prototype.hide = function hide () {
    var this$1 = this;

    if (!this._isShown) {
      return;
    }

    var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$2);

    if (hideEvent.defaultPrevented) {
      return;
    }

    this._focustrap.deactivate();

    this._element.blur();

    this._isShown = false;

    this._element.classList.remove(CLASS_NAME_SHOW$3);

    this._backdrop.hide();

    var completeCallback = function () {
      this$1._element.setAttribute('aria-hidden', true);

      this$1._element.removeAttribute('aria-modal');

      this$1._element.removeAttribute('role');

      this$1._element.style.visibility = 'hidden';

      if (!this$1._config.scroll) {
        new ScrollBarHelper().reset();
      }

      EventHandler.trigger(this$1._element, EVENT_HIDDEN$2);
    };

    this._queueCallback(completeCallback, this._element, true);
  };

  Offcanvas.prototype.dispose = function dispose () {
    this._backdrop.dispose();

    this._focustrap.deactivate();

    BaseComponent.prototype.dispose.call(this);
  }; // Private


  Offcanvas.prototype._getConfig = function _getConfig (config) {
    config = Object.assign({}, Default$4,
      Manipulator.getDataAttributes(this._element),
      (typeof config === 'object' ? config : {}));
    typeCheckConfig(NAME$5, config, DefaultType$4);
    return config;
  };

  Offcanvas.prototype._initializeBackDrop = function _initializeBackDrop () {
    var this$1 = this;

    return new Backdrop({
      className: CLASS_NAME_BACKDROP,
      isVisible: this._config.backdrop,
      isAnimated: true,
      rootElement: this._element.parentNode,
      clickCallback: function () { return this$1.hide(); }
    });
  };

  Offcanvas.prototype._initializeFocusTrap = function _initializeFocusTrap () {
    return new FocusTrap({
      trapElement: this._element
    });
  };

  Offcanvas.prototype._addEventListeners = function _addEventListeners () {
    var this$1 = this;

    EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, function (event) {
      if (this$1._config.keyboard && event.key === ESCAPE_KEY) {
        this$1.hide();
      }
    });
  }; // Static


  Offcanvas.jQueryInterface = function jQueryInterface (config) {
    return this.each(function () {
      var data = Offcanvas.getOrCreateInstance(this, config);

      if (typeof config !== 'string') {
        return;
      }

      if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
        throw new TypeError(("No method named \"" + config + "\""));
      }

      data[config](this);
    });
  };

  Object.defineProperties( Offcanvas, staticAccessors$7 );

  return Offcanvas;
}(BaseComponent));
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function (event) {
  var this$1 = this;

  var target = getElementFromSelector(this);

  if (['A', 'AREA'].includes(this.tagName)) {
    event.preventDefault();
  }

  if (isDisabled(this)) {
    return;
  }

  EventHandler.one(target, EVENT_HIDDEN$2, function () {
    // focus on trigger when it is closed
    if (isVisible(this$1)) {
      this$1.focus();
    }
  }); // avoid conflict when clicking a toggler of an offcanvas, while another is open

  var allReadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);

  if (allReadyOpen && allReadyOpen !== target) {
    Offcanvas.getInstance(allReadyOpen).hide();
  }

  var data = Offcanvas.getOrCreateInstance(target);
  data.toggle(this);
});
EventHandler.on(window, EVENT_LOAD_DATA_API$1, function () { return SelectorEngine.find(OPEN_SELECTOR).forEach(function (el) { return Offcanvas.getOrCreateInstance(el).show(); }); });
enableDismissTrigger(Offcanvas);
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

defineJQueryPlugin(Offcanvas);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/sanitizer.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
var uriAttributes = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);
var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
/**
 * A pattern that recognizes a commonly useful subset of URLs that are safe.
 *
 * Shoutout to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
 */

var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i;
/**
 * A pattern that matches safe data URLs. Only matches image, video and audio types.
 *
 * Shoutout to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
 */

var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

var allowedAttribute = function (attribute, allowedAttributeList) {
  var attributeName = attribute.nodeName.toLowerCase();

  if (allowedAttributeList.includes(attributeName)) {
    if (uriAttributes.has(attributeName)) {
      return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue) || DATA_URL_PATTERN.test(attribute.nodeValue));
    }

    return true;
  }

  var regExp = allowedAttributeList.filter(function (attributeRegex) { return attributeRegex instanceof RegExp; }); // Check if a regular expression validates the attribute.

  for (var i = 0, len = regExp.length; i < len; i++) {
    if (regExp[i].test(attributeName)) {
      return true;
    }
  }

  return false;
};

var DefaultAllowlist = {
  // Global attributes allowed on any supplied element below.
  '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
  a: ['target', 'href', 'title', 'rel'],
  area: [],
  b: [],
  br: [],
  col: [],
  code: [],
  div: [],
  em: [],
  hr: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  i: [],
  img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
  li: [],
  ol: [],
  p: [],
  pre: [],
  s: [],
  small: [],
  span: [],
  sub: [],
  sup: [],
  strong: [],
  u: [],
  ul: []
};
function sanitizeHtml(unsafeHtml, allowList, sanitizeFn) {
  if (!unsafeHtml.length) {
    return unsafeHtml;
  }

  if (sanitizeFn && typeof sanitizeFn === 'function') {
    return sanitizeFn(unsafeHtml);
  }

  var domParser = new window.DOMParser();
  var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
  var elements = (ref = []).concat.apply(ref, createdDocument.body.querySelectorAll('*'));

  var loop = function ( i, len ) {
    var element = elements[i];
    var elementName = element.nodeName.toLowerCase();

    if (!Object.keys(allowList).includes(elementName)) {
      element.remove();
      return;
    }

    var attributeList = (ref$1 = []).concat.apply(ref$1, element.attributes);
    var allowedAttributes = [].concat(allowList['*'] || [], allowList[elementName] || []);
    attributeList.forEach(function (attribute) {
      if (!allowedAttribute(attribute, allowedAttributes)) {
        element.removeAttribute(attribute.nodeName);
      }
    });
  };

  for (var i = 0, len = elements.length; i < len; i++) loop( i, len );

  return createdDocument.body.innerHTML;
  var ref;
  var ref$1;
}

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): tooltip.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$4 = 'tooltip';
var DATA_KEY$4 = 'bs.tooltip';
var EVENT_KEY$4 = "." + DATA_KEY$4;
var CLASS_PREFIX$1 = 'bs-tooltip';
var DISALLOWED_ATTRIBUTES = new Set(['sanitize', 'allowList', 'sanitizeFn']);
var DefaultType$3 = {
  animation: 'boolean',
  template: 'string',
  title: '(string|element|function)',
  trigger: 'string',
  delay: '(number|object)',
  html: 'boolean',
  selector: '(string|boolean)',
  placement: '(string|function)',
  offset: '(array|string|function)',
  container: '(string|element|boolean)',
  fallbackPlacements: 'array',
  boundary: '(string|element)',
  customClass: '(string|function)',
  sanitize: 'boolean',
  sanitizeFn: '(null|function)',
  allowList: 'object',
  popperConfig: '(null|object|function)'
};
var AttachmentMap = {
  AUTO: 'auto',
  TOP: 'top',
  RIGHT: isRTL() ? 'left' : 'right',
  BOTTOM: 'bottom',
  LEFT: isRTL() ? 'right' : 'left'
};
var Default$3 = {
  animation: true,
  template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div>' + '</div>',
  trigger: 'hover focus',
  title: '',
  delay: 0,
  html: false,
  selector: false,
  placement: 'top',
  offset: [0, 0],
  container: false,
  fallbackPlacements: ['top', 'right', 'bottom', 'left'],
  boundary: 'clippingParents',
  customClass: '',
  sanitize: true,
  sanitizeFn: null,
  allowList: DefaultAllowlist,
  popperConfig: null
};
var Event$2 = {
  HIDE: ("hide" + EVENT_KEY$4),
  HIDDEN: ("hidden" + EVENT_KEY$4),
  SHOW: ("show" + EVENT_KEY$4),
  SHOWN: ("shown" + EVENT_KEY$4),
  INSERTED: ("inserted" + EVENT_KEY$4),
  CLICK: ("click" + EVENT_KEY$4),
  FOCUSIN: ("focusin" + EVENT_KEY$4),
  FOCUSOUT: ("focusout" + EVENT_KEY$4),
  MOUSEENTER: ("mouseenter" + EVENT_KEY$4),
  MOUSELEAVE: ("mouseleave" + EVENT_KEY$4)
};
var CLASS_NAME_FADE$2 = 'fade';
var CLASS_NAME_MODAL = 'modal';
var CLASS_NAME_SHOW$2 = 'show';
var HOVER_STATE_SHOW = 'show';
var HOVER_STATE_OUT = 'out';
var SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
var SELECTOR_MODAL = "." + CLASS_NAME_MODAL;
var EVENT_MODAL_HIDE = 'hide.bs.modal';
var TRIGGER_HOVER = 'hover';
var TRIGGER_FOCUS = 'focus';
var TRIGGER_CLICK = 'click';
var TRIGGER_MANUAL = 'manual';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Tooltip = (function (BaseComponent) {
  function Tooltip(element, config) {
    if (typeof __WEBPACK_IMPORTED_MODULE_0__popperjs_core__ === 'undefined') {
      throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
    }

    BaseComponent.call(this, element); // private

    this._isEnabled = true;
    this._timeout = 0;
    this._hoverState = '';
    this._activeTrigger = {};
    this._popper = null; // Protected

    this._config = this._getConfig(config);
    this.tip = null;

    this._setListeners();
  }

  if ( BaseComponent ) Tooltip.__proto__ = BaseComponent;
  Tooltip.prototype = Object.create( BaseComponent && BaseComponent.prototype );
  Tooltip.prototype.constructor = Tooltip;

  var staticAccessors$8 = { Default: {},NAME: {},Event: {},DefaultType: {} }; // Getters


  staticAccessors$8.Default.get = function () {
    return Default$3;
  };

  staticAccessors$8.NAME.get = function () {
    return NAME$4;
  };

  staticAccessors$8.Event.get = function () {
    return Event$2;
  };

  staticAccessors$8.DefaultType.get = function () {
    return DefaultType$3;
  }; // Public


  Tooltip.prototype.enable = function enable () {
    this._isEnabled = true;
  };

  Tooltip.prototype.disable = function disable () {
    this._isEnabled = false;
  };

  Tooltip.prototype.toggleEnabled = function toggleEnabled () {
    this._isEnabled = !this._isEnabled;
  };

  Tooltip.prototype.toggle = function toggle (event) {
    if (!this._isEnabled) {
      return;
    }

    if (event) {
      var context = this._initializeOnDelegatedTarget(event);

      context._activeTrigger.click = !context._activeTrigger.click;

      if (context._isWithActiveTrigger()) {
        context._enter(null, context);
      } else {
        context._leave(null, context);
      }
    } else {
      if (this.getTipElement().classList.contains(CLASS_NAME_SHOW$2)) {
        this._leave(null, this);

        return;
      }

      this._enter(null, this);
    }
  };

  Tooltip.prototype.dispose = function dispose () {
    clearTimeout(this._timeout);
    EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);

    if (this.tip) {
      this.tip.remove();
    }

    this._disposePopper();

    BaseComponent.prototype.dispose.call(this);
  };

  Tooltip.prototype.show = function show () {
    var this$1 = this;

    if (this._element.style.display === 'none') {
      throw new Error('Please use show on visible elements');
    }

    if (!(this.isWithContent() && this._isEnabled)) {
      return;
    }

    var showEvent = EventHandler.trigger(this._element, this.constructor.Event.SHOW);
    var shadowRoot = findShadowRoot(this._element);
    var isInTheDom = shadowRoot === null ? this._element.ownerDocument.documentElement.contains(this._element) : shadowRoot.contains(this._element);

    if (showEvent.defaultPrevented || !isInTheDom) {
      return;
    } // A trick to recreate a tooltip in case a new title is given by using the NOT documented `data-bs-original-title`
    // This will be removed later in favor of a `setContent` method


    if (this.constructor.NAME === 'tooltip' && this.tip && this.getTitle() !== this.tip.querySelector(SELECTOR_TOOLTIP_INNER).innerHTML) {
      this._disposePopper();

      this.tip.remove();
      this.tip = null;
    }

    var tip = this.getTipElement();
    var tipId = getUID(this.constructor.NAME);
    tip.setAttribute('id', tipId);

    this._element.setAttribute('aria-describedby', tipId);

    if (this._config.animation) {
      tip.classList.add(CLASS_NAME_FADE$2);
    }

    var placement = typeof this._config.placement === 'function' ? this._config.placement.call(this, tip, this._element) : this._config.placement;

    var attachment = this._getAttachment(placement);

    this._addAttachmentClass(attachment);

    var ref = this._config;
    var container = ref.container;
    Data.set(tip, this.constructor.DATA_KEY, this);

    if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
      container.append(tip);
      EventHandler.trigger(this._element, this.constructor.Event.INSERTED);
    }

    if (this._popper) {
      this._popper.update();
    } else {
      this._popper = __WEBPACK_IMPORTED_MODULE_0__popperjs_core__["createPopper"](this._element, tip, this._getPopperConfig(attachment));
    }

    tip.classList.add(CLASS_NAME_SHOW$2);

    var customClass = this._resolvePossibleFunction(this._config.customClass);

    if (customClass) {
      (ref$1 = tip.classList).add.apply(ref$1, customClass.split(' '));
    } // If this is a touch-enabled device we add extra
    // empty mouseover listeners to the body's immediate children;
    // only needed because of broken event delegation on iOS
    // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


    if ('ontouchstart' in document.documentElement) {
      (ref$2 = []).concat.apply(ref$2, document.body.children).forEach(function (element) {
        EventHandler.on(element, 'mouseover', noop);
      });
    }

    var complete = function () {
      var prevHoverState = this$1._hoverState;
      this$1._hoverState = null;
      EventHandler.trigger(this$1._element, this$1.constructor.Event.SHOWN);

      if (prevHoverState === HOVER_STATE_OUT) {
        this$1._leave(null, this$1);
      }
    };

    var isAnimated = this.tip.classList.contains(CLASS_NAME_FADE$2);

    this._queueCallback(complete, this.tip, isAnimated);
    var ref$1;
    var ref$2;
  };

  Tooltip.prototype.hide = function hide () {
    var this$1 = this;

    if (!this._popper) {
      return;
    }

    var tip = this.getTipElement();

    var complete = function () {
      if (this$1._isWithActiveTrigger()) {
        return;
      }

      if (this$1._hoverState !== HOVER_STATE_SHOW) {
        tip.remove();
      }

      this$1._cleanTipClass();

      this$1._element.removeAttribute('aria-describedby');

      EventHandler.trigger(this$1._element, this$1.constructor.Event.HIDDEN);

      this$1._disposePopper();
    };

    var hideEvent = EventHandler.trigger(this._element, this.constructor.Event.HIDE);

    if (hideEvent.defaultPrevented) {
      return;
    }

    tip.classList.remove(CLASS_NAME_SHOW$2); // If this is a touch-enabled device we remove the extra
    // empty mouseover listeners we added for iOS support

    if ('ontouchstart' in document.documentElement) {
      (ref = []).concat.apply(ref, document.body.children).forEach(function (element) { return EventHandler.off(element, 'mouseover', noop); });
    }

    this._activeTrigger[TRIGGER_CLICK] = false;
    this._activeTrigger[TRIGGER_FOCUS] = false;
    this._activeTrigger[TRIGGER_HOVER] = false;
    var isAnimated = this.tip.classList.contains(CLASS_NAME_FADE$2);

    this._queueCallback(complete, this.tip, isAnimated);

    this._hoverState = '';
    var ref;
  };

  Tooltip.prototype.update = function update () {
    if (this._popper !== null) {
      this._popper.update();
    }
  }; // Protected


  Tooltip.prototype.isWithContent = function isWithContent () {
    return Boolean(this.getTitle());
  };

  Tooltip.prototype.getTipElement = function getTipElement () {
    if (this.tip) {
      return this.tip;
    }

    var element = document.createElement('div');
    element.innerHTML = this._config.template;
    var tip = element.children[0];
    this.setContent(tip);
    tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2);
    this.tip = tip;
    return this.tip;
  };

  Tooltip.prototype.setContent = function setContent (tip) {
    this._sanitizeAndSetContent(tip, this.getTitle(), SELECTOR_TOOLTIP_INNER);
  };

  Tooltip.prototype._sanitizeAndSetContent = function _sanitizeAndSetContent (template, content, selector) {
    var templateElement = SelectorEngine.findOne(selector, template);

    if (!content && templateElement) {
      templateElement.remove();
      return;
    } // we use append for html objects to maintain js events


    this.setElementContent(templateElement, content);
  };

  Tooltip.prototype.setElementContent = function setElementContent (element, content) {
    if (element === null) {
      return;
    }

    if (isElement(content)) {
      content = getElement(content); // content is a DOM node or a jQuery

      if (this._config.html) {
        if (content.parentNode !== element) {
          element.innerHTML = '';
          element.append(content);
        }
      } else {
        element.textContent = content.textContent;
      }

      return;
    }

    if (this._config.html) {
      if (this._config.sanitize) {
        content = sanitizeHtml(content, this._config.allowList, this._config.sanitizeFn);
      }

      element.innerHTML = content;
    } else {
      element.textContent = content;
    }
  };

  Tooltip.prototype.getTitle = function getTitle () {
    var title = this._element.getAttribute('data-bs-original-title') || this._config.title;

    return this._resolvePossibleFunction(title);
  };

  Tooltip.prototype.updateAttachment = function updateAttachment (attachment) {
    if (attachment === 'right') {
      return 'end';
    }

    if (attachment === 'left') {
      return 'start';
    }

    return attachment;
  }; // Private


  Tooltip.prototype._initializeOnDelegatedTarget = function _initializeOnDelegatedTarget (event, context) {
    return context || this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
  };

  Tooltip.prototype._getOffset = function _getOffset () {
    var this$1 = this;

    var ref = this._config;
    var offset = ref.offset;

    if (typeof offset === 'string') {
      return offset.split(',').map(function (val) { return Number.parseInt(val, 10); });
    }

    if (typeof offset === 'function') {
      return function (popperData) { return offset(popperData, this$1._element); };
    }

    return offset;
  };

  Tooltip.prototype._resolvePossibleFunction = function _resolvePossibleFunction (content) {
    return typeof content === 'function' ? content.call(this._element) : content;
  };

  Tooltip.prototype._getPopperConfig = function _getPopperConfig (attachment) {
    var this$1 = this;

    var defaultBsPopperConfig = {
      placement: attachment,
      modifiers: [{
        name: 'flip',
        options: {
          fallbackPlacements: this._config.fallbackPlacements
        }
      }, {
        name: 'offset',
        options: {
          offset: this._getOffset()
        }
      }, {
        name: 'preventOverflow',
        options: {
          boundary: this._config.boundary
        }
      }, {
        name: 'arrow',
        options: {
          element: ("." + (this.constructor.NAME) + "-arrow")
        }
      }, {
        name: 'onChange',
        enabled: true,
        phase: 'afterWrite',
        fn: function (data) { return this$1._handlePopperPlacementChange(data); }
      }],
      onFirstUpdate: function (data) {
        if (data.options.placement !== data.placement) {
          this$1._handlePopperPlacementChange(data);
        }
      }
    };
    return Object.assign({}, defaultBsPopperConfig,
      (typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig));
  };

  Tooltip.prototype._addAttachmentClass = function _addAttachmentClass (attachment) {
    this.getTipElement().classList.add(((this._getBasicClassPrefix()) + "-" + (this.updateAttachment(attachment))));
  };

  Tooltip.prototype._getAttachment = function _getAttachment (placement) {
    return AttachmentMap[placement.toUpperCase()];
  };

  Tooltip.prototype._setListeners = function _setListeners () {
    var this$1 = this;

    var triggers = this._config.trigger.split(' ');

    triggers.forEach(function (trigger) {
      if (trigger === 'click') {
        EventHandler.on(this$1._element, this$1.constructor.Event.CLICK, this$1._config.selector, function (event) { return this$1.toggle(event); });
      } else if (trigger !== TRIGGER_MANUAL) {
        var eventIn = trigger === TRIGGER_HOVER ? this$1.constructor.Event.MOUSEENTER : this$1.constructor.Event.FOCUSIN;
        var eventOut = trigger === TRIGGER_HOVER ? this$1.constructor.Event.MOUSELEAVE : this$1.constructor.Event.FOCUSOUT;
        EventHandler.on(this$1._element, eventIn, this$1._config.selector, function (event) { return this$1._enter(event); });
        EventHandler.on(this$1._element, eventOut, this$1._config.selector, function (event) { return this$1._leave(event); });
      }
    });

    this._hideModalHandler = function () {
      if (this$1._element) {
        this$1.hide();
      }
    };

    EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);

    if (this._config.selector) {
      this._config = Object.assign({}, this._config,
        {trigger: 'manual',
        selector: ''});
    } else {
      this._fixTitle();
    }
  };

  Tooltip.prototype._fixTitle = function _fixTitle () {
    var title = this._element.getAttribute('title');

    var originalTitleType = typeof this._element.getAttribute('data-bs-original-title');

    if (title || originalTitleType !== 'string') {
      this._element.setAttribute('data-bs-original-title', title || '');

      if (title && !this._element.getAttribute('aria-label') && !this._element.textContent) {
        this._element.setAttribute('aria-label', title);
      }

      this._element.setAttribute('title', '');
    }
  };

  Tooltip.prototype._enter = function _enter (event, context) {
    context = this._initializeOnDelegatedTarget(event, context);

    if (event) {
      context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
    }

    if (context.getTipElement().classList.contains(CLASS_NAME_SHOW$2) || context._hoverState === HOVER_STATE_SHOW) {
      context._hoverState = HOVER_STATE_SHOW;
      return;
    }

    clearTimeout(context._timeout);
    context._hoverState = HOVER_STATE_SHOW;

    if (!context._config.delay || !context._config.delay.show) {
      context.show();
      return;
    }

    context._timeout = setTimeout(function () {
      if (context._hoverState === HOVER_STATE_SHOW) {
        context.show();
      }
    }, context._config.delay.show);
  };

  Tooltip.prototype._leave = function _leave (event, context) {
    context = this._initializeOnDelegatedTarget(event, context);

    if (event) {
      context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
    }

    if (context._isWithActiveTrigger()) {
      return;
    }

    clearTimeout(context._timeout);
    context._hoverState = HOVER_STATE_OUT;

    if (!context._config.delay || !context._config.delay.hide) {
      context.hide();
      return;
    }

    context._timeout = setTimeout(function () {
      if (context._hoverState === HOVER_STATE_OUT) {
        context.hide();
      }
    }, context._config.delay.hide);
  };

  Tooltip.prototype._isWithActiveTrigger = function _isWithActiveTrigger () {
    var this$1 = this;

    for (var trigger in this$1._activeTrigger) {
      if (this$1._activeTrigger[trigger]) {
        return true;
      }
    }

    return false;
  };

  Tooltip.prototype._getConfig = function _getConfig (config) {
    var dataAttributes = Manipulator.getDataAttributes(this._element);
    Object.keys(dataAttributes).forEach(function (dataAttr) {
      if (DISALLOWED_ATTRIBUTES.has(dataAttr)) {
        delete dataAttributes[dataAttr];
      }
    });
    config = Object.assign({}, this.constructor.Default,
      dataAttributes,
      (typeof config === 'object' && config ? config : {}));
    config.container = config.container === false ? document.body : getElement(config.container);

    if (typeof config.delay === 'number') {
      config.delay = {
        show: config.delay,
        hide: config.delay
      };
    }

    if (typeof config.title === 'number') {
      config.title = config.title.toString();
    }

    if (typeof config.content === 'number') {
      config.content = config.content.toString();
    }

    typeCheckConfig(NAME$4, config, this.constructor.DefaultType);

    if (config.sanitize) {
      config.template = sanitizeHtml(config.template, config.allowList, config.sanitizeFn);
    }

    return config;
  };

  Tooltip.prototype._getDelegateConfig = function _getDelegateConfig () {
    var this$1 = this;

    var config = {};

    for (var key in this$1._config) {
      if (this$1.constructor.Default[key] !== this$1._config[key]) {
        config[key] = this$1._config[key];
      }
    } // In the future can be replaced with:
    // const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])
    // `Object.fromEntries(keysWithDifferentValues)`


    return config;
  };

  Tooltip.prototype._cleanTipClass = function _cleanTipClass () {
    var tip = this.getTipElement();
    var basicClassPrefixRegex = new RegExp(("(^|\\s)" + (this._getBasicClassPrefix()) + "\\S+"), 'g');
    var tabClass = tip.getAttribute('class').match(basicClassPrefixRegex);

    if (tabClass !== null && tabClass.length > 0) {
      tabClass.map(function (token) { return token.trim(); }).forEach(function (tClass) { return tip.classList.remove(tClass); });
    }
  };

  Tooltip.prototype._getBasicClassPrefix = function _getBasicClassPrefix () {
    return CLASS_PREFIX$1;
  };

  Tooltip.prototype._handlePopperPlacementChange = function _handlePopperPlacementChange (popperData) {
    var state = popperData.state;

    if (!state) {
      return;
    }

    this.tip = state.elements.popper;

    this._cleanTipClass();

    this._addAttachmentClass(this._getAttachment(state.placement));
  };

  Tooltip.prototype._disposePopper = function _disposePopper () {
    if (this._popper) {
      this._popper.destroy();

      this._popper = null;
    }
  }; // Static


  Tooltip.jQueryInterface = function jQueryInterface (config) {
    return this.each(function () {
      var data = Tooltip.getOrCreateInstance(this, config);

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(("No method named \"" + config + "\""));
        }

        data[config]();
      }
    });
  };

  Object.defineProperties( Tooltip, staticAccessors$8 );

  return Tooltip;
}(BaseComponent));
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Tooltip to jQuery only if jQuery is present
 */


defineJQueryPlugin(Tooltip);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): popover.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$3 = 'popover';
var DATA_KEY$3 = 'bs.popover';
var EVENT_KEY$3 = "." + DATA_KEY$3;
var CLASS_PREFIX = 'bs-popover';
var Default$2 = Object.assign({}, Tooltip.Default,
  {placement: 'right',
  offset: [0, 8],
  trigger: 'click',
  content: '',
  template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div>' + '</div>'});
var DefaultType$2 = Object.assign({}, Tooltip.DefaultType,
  {content: '(string|element|function)'});
var Event$1 = {
  HIDE: ("hide" + EVENT_KEY$3),
  HIDDEN: ("hidden" + EVENT_KEY$3),
  SHOW: ("show" + EVENT_KEY$3),
  SHOWN: ("shown" + EVENT_KEY$3),
  INSERTED: ("inserted" + EVENT_KEY$3),
  CLICK: ("click" + EVENT_KEY$3),
  FOCUSIN: ("focusin" + EVENT_KEY$3),
  FOCUSOUT: ("focusout" + EVENT_KEY$3),
  MOUSEENTER: ("mouseenter" + EVENT_KEY$3),
  MOUSELEAVE: ("mouseleave" + EVENT_KEY$3)
};
var SELECTOR_TITLE = '.popover-header';
var SELECTOR_CONTENT = '.popover-body';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Popover = (function (Tooltip) {
  function Popover () {
    Tooltip.apply(this, arguments);
  }

  if ( Tooltip ) Popover.__proto__ = Tooltip;
  Popover.prototype = Object.create( Tooltip && Tooltip.prototype );
  Popover.prototype.constructor = Popover;

  var staticAccessors$9 = { Default: {},NAME: {},Event: {},DefaultType: {} };

  staticAccessors$9.Default.get = function () {
    return Default$2;
  };

  staticAccessors$9.NAME.get = function () {
    return NAME$3;
  };

  staticAccessors$9.Event.get = function () {
    return Event$1;
  };

  staticAccessors$9.DefaultType.get = function () {
    return DefaultType$2;
  }; // Overrides


  Popover.prototype.isWithContent = function isWithContent () {
    return this.getTitle() || this._getContent();
  };

  Popover.prototype.setContent = function setContent (tip) {
    this._sanitizeAndSetContent(tip, this.getTitle(), SELECTOR_TITLE);

    this._sanitizeAndSetContent(tip, this._getContent(), SELECTOR_CONTENT);
  }; // Private


  Popover.prototype._getContent = function _getContent () {
    return this._resolvePossibleFunction(this._config.content);
  };

  Popover.prototype._getBasicClassPrefix = function _getBasicClassPrefix () {
    return CLASS_PREFIX;
  }; // Static


  Popover.jQueryInterface = function jQueryInterface (config) {
    return this.each(function () {
      var data = Popover.getOrCreateInstance(this, config);

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(("No method named \"" + config + "\""));
        }

        data[config]();
      }
    });
  };

  Object.defineProperties( Popover, staticAccessors$9 );

  return Popover;
}(Tooltip));
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Popover to jQuery only if jQuery is present
 */


defineJQueryPlugin(Popover);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): scrollspy.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$2 = 'scrollspy';
var DATA_KEY$2 = 'bs.scrollspy';
var EVENT_KEY$2 = "." + DATA_KEY$2;
var DATA_API_KEY$1 = '.data-api';
var Default$1 = {
  offset: 10,
  method: 'auto',
  target: ''
};
var DefaultType$1 = {
  offset: 'number',
  method: 'string',
  target: '(string|element)'
};
var EVENT_ACTIVATE = "activate" + EVENT_KEY$2;
var EVENT_SCROLL = "scroll" + EVENT_KEY$2;
var EVENT_LOAD_DATA_API = "load" + EVENT_KEY$2 + DATA_API_KEY$1;
var CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
var CLASS_NAME_ACTIVE$1 = 'active';
var SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
var SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
var SELECTOR_NAV_LINKS = '.nav-link';
var SELECTOR_NAV_ITEMS = '.nav-item';
var SELECTOR_LIST_ITEMS = '.list-group-item';
var SELECTOR_LINK_ITEMS = SELECTOR_NAV_LINKS + ", " + SELECTOR_LIST_ITEMS + ", ." + CLASS_NAME_DROPDOWN_ITEM;
var SELECTOR_DROPDOWN$1 = '.dropdown';
var SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
var METHOD_OFFSET = 'offset';
var METHOD_POSITION = 'position';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var ScrollSpy = (function (BaseComponent) {
  function ScrollSpy(element, config) {
    var this$1 = this;

    BaseComponent.call(this, element);
    this._scrollElement = this._element.tagName === 'BODY' ? window : this._element;
    this._config = this._getConfig(config);
    this._offsets = [];
    this._targets = [];
    this._activeTarget = null;
    this._scrollHeight = 0;
    EventHandler.on(this._scrollElement, EVENT_SCROLL, function () { return this$1._process(); });
    this.refresh();

    this._process();
  }

  if ( BaseComponent ) ScrollSpy.__proto__ = BaseComponent;
  ScrollSpy.prototype = Object.create( BaseComponent && BaseComponent.prototype );
  ScrollSpy.prototype.constructor = ScrollSpy;

  var staticAccessors$10 = { Default: {},NAME: {} }; // Getters


  staticAccessors$10.Default.get = function () {
    return Default$1;
  };

  staticAccessors$10.NAME.get = function () {
    return NAME$2;
  }; // Public


  ScrollSpy.prototype.refresh = function refresh () {
    var this$1 = this;

    var autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
    var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
    var offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
    this._offsets = [];
    this._targets = [];
    this._scrollHeight = this._getScrollHeight();
    var targets = SelectorEngine.find(SELECTOR_LINK_ITEMS, this._config.target);
    targets.map(function (element) {
      var targetSelector = getSelectorFromElement(element);
      var target = targetSelector ? SelectorEngine.findOne(targetSelector) : null;

      if (target) {
        var targetBCR = target.getBoundingClientRect();

        if (targetBCR.width || targetBCR.height) {
          return [Manipulator[offsetMethod](target).top + offsetBase, targetSelector];
        }
      }

      return null;
    }).filter(function (item) { return item; }).sort(function (a, b) { return a[0] - b[0]; }).forEach(function (item) {
      this$1._offsets.push(item[0]);

      this$1._targets.push(item[1]);
    });
  };

  ScrollSpy.prototype.dispose = function dispose () {
    EventHandler.off(this._scrollElement, EVENT_KEY$2);
    BaseComponent.prototype.dispose.call(this);
  }; // Private


  ScrollSpy.prototype._getConfig = function _getConfig (config) {
    config = Object.assign({}, Default$1,
      Manipulator.getDataAttributes(this._element),
      (typeof config === 'object' && config ? config : {}));
    config.target = getElement(config.target) || document.documentElement;
    typeCheckConfig(NAME$2, config, DefaultType$1);
    return config;
  };

  ScrollSpy.prototype._getScrollTop = function _getScrollTop () {
    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
  };

  ScrollSpy.prototype._getScrollHeight = function _getScrollHeight () {
    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
  };

  ScrollSpy.prototype._getOffsetHeight = function _getOffsetHeight () {
    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
  };

  ScrollSpy.prototype._process = function _process () {
    var this$1 = this;

    var scrollTop = this._getScrollTop() + this._config.offset;

    var scrollHeight = this._getScrollHeight();

    var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

    if (this._scrollHeight !== scrollHeight) {
      this.refresh();
    }

    if (scrollTop >= maxScroll) {
      var target = this._targets[this._targets.length - 1];

      if (this._activeTarget !== target) {
        this._activate(target);
      }

      return;
    }

    if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
      this._activeTarget = null;

      this._clear();

      return;
    }

    for (var i = this._offsets.length; i--;) {
      var isActiveTarget = this$1._activeTarget !== this$1._targets[i] && scrollTop >= this$1._offsets[i] && (typeof this$1._offsets[i + 1] === 'undefined' || scrollTop < this$1._offsets[i + 1]);

      if (isActiveTarget) {
        this$1._activate(this$1._targets[i]);
      }
    }
  };

  ScrollSpy.prototype._activate = function _activate (target) {
    this._activeTarget = target;

    this._clear();

    var queries = SELECTOR_LINK_ITEMS.split(',').map(function (selector) { return (selector + "[data-bs-target=\"" + target + "\"]," + selector + "[href=\"" + target + "\"]"); });
    var link = SelectorEngine.findOne(queries.join(','), this._config.target);
    link.classList.add(CLASS_NAME_ACTIVE$1);

    if (link.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
      SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, link.closest(SELECTOR_DROPDOWN$1)).classList.add(CLASS_NAME_ACTIVE$1);
    } else {
      SelectorEngine.parents(link, SELECTOR_NAV_LIST_GROUP$1).forEach(function (listGroup) {
        // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
        SelectorEngine.prev(listGroup, (SELECTOR_NAV_LINKS + ", " + SELECTOR_LIST_ITEMS)).forEach(function (item) { return item.classList.add(CLASS_NAME_ACTIVE$1); }); // Handle special case when .nav-link is inside .nav-item

        SelectorEngine.prev(listGroup, SELECTOR_NAV_ITEMS).forEach(function (navItem) {
          SelectorEngine.children(navItem, SELECTOR_NAV_LINKS).forEach(function (item) { return item.classList.add(CLASS_NAME_ACTIVE$1); });
        });
      });
    }

    EventHandler.trigger(this._scrollElement, EVENT_ACTIVATE, {
      relatedTarget: target
    });
  };

  ScrollSpy.prototype._clear = function _clear () {
    SelectorEngine.find(SELECTOR_LINK_ITEMS, this._config.target).filter(function (node) { return node.classList.contains(CLASS_NAME_ACTIVE$1); }).forEach(function (node) { return node.classList.remove(CLASS_NAME_ACTIVE$1); });
  }; // Static


  ScrollSpy.jQueryInterface = function jQueryInterface (config) {
    return this.each(function () {
      var data = ScrollSpy.getOrCreateInstance(this, config);

      if (typeof config !== 'string') {
        return;
      }

      if (typeof data[config] === 'undefined') {
        throw new TypeError(("No method named \"" + config + "\""));
      }

      data[config]();
    });
  };

  Object.defineProperties( ScrollSpy, staticAccessors$10 );

  return ScrollSpy;
}(BaseComponent));
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(window, EVENT_LOAD_DATA_API, function () {
  SelectorEngine.find(SELECTOR_DATA_SPY).forEach(function (spy) { return new ScrollSpy(spy); });
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .ScrollSpy to jQuery only if jQuery is present
 */

defineJQueryPlugin(ScrollSpy);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$1 = 'tab';
var DATA_KEY$1 = 'bs.tab';
var EVENT_KEY$1 = "." + DATA_KEY$1;
var DATA_API_KEY = '.data-api';
var EVENT_HIDE$1 = "hide" + EVENT_KEY$1;
var EVENT_HIDDEN$1 = "hidden" + EVENT_KEY$1;
var EVENT_SHOW$1 = "show" + EVENT_KEY$1;
var EVENT_SHOWN$1 = "shown" + EVENT_KEY$1;
var EVENT_CLICK_DATA_API = "click" + EVENT_KEY$1 + DATA_API_KEY;
var CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
var CLASS_NAME_ACTIVE = 'active';
var CLASS_NAME_FADE$1 = 'fade';
var CLASS_NAME_SHOW$1 = 'show';
var SELECTOR_DROPDOWN = '.dropdown';
var SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
var SELECTOR_ACTIVE = '.active';
var SELECTOR_ACTIVE_UL = ':scope > li > .active';
var SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
var SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
var SELECTOR_DROPDOWN_ACTIVE_CHILD = ':scope > .dropdown-menu .active';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Tab = (function (BaseComponent) {
  function Tab () {
    BaseComponent.apply(this, arguments);
  }

  if ( BaseComponent ) Tab.__proto__ = BaseComponent;
  Tab.prototype = Object.create( BaseComponent && BaseComponent.prototype );
  Tab.prototype.constructor = Tab;

  var staticAccessors$11 = { NAME: {} };

  staticAccessors$11.NAME.get = function () {
    return NAME$1;
  }; // Public


  Tab.prototype.show = function show () {
    var this$1 = this;

    if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(CLASS_NAME_ACTIVE)) {
      return;
    }

    var previous;
    var target = getElementFromSelector(this._element);

    var listElement = this._element.closest(SELECTOR_NAV_LIST_GROUP);

    if (listElement) {
      var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE;
      previous = SelectorEngine.find(itemSelector, listElement);
      previous = previous[previous.length - 1];
    }

    var hideEvent = previous ? EventHandler.trigger(previous, EVENT_HIDE$1, {
      relatedTarget: this._element
    }) : null;
    var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$1, {
      relatedTarget: previous
    });

    if (showEvent.defaultPrevented || hideEvent !== null && hideEvent.defaultPrevented) {
      return;
    }

    this._activate(this._element, listElement);

    var complete = function () {
      EventHandler.trigger(previous, EVENT_HIDDEN$1, {
        relatedTarget: this$1._element
      });
      EventHandler.trigger(this$1._element, EVENT_SHOWN$1, {
        relatedTarget: previous
      });
    };

    if (target) {
      this._activate(target, target.parentNode, complete);
    } else {
      complete();
    }
  }; // Private


  Tab.prototype._activate = function _activate (element, container, callback) {
    var this$1 = this;

    var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? SelectorEngine.find(SELECTOR_ACTIVE_UL, container) : SelectorEngine.children(container, SELECTOR_ACTIVE);
    var active = activeElements[0];
    var isTransitioning = callback && active && active.classList.contains(CLASS_NAME_FADE$1);

    var complete = function () { return this$1._transitionComplete(element, active, callback); };

    if (active && isTransitioning) {
      active.classList.remove(CLASS_NAME_SHOW$1);

      this._queueCallback(complete, element, true);
    } else {
      complete();
    }
  };

  Tab.prototype._transitionComplete = function _transitionComplete (element, active, callback) {
    if (active) {
      active.classList.remove(CLASS_NAME_ACTIVE);
      var dropdownChild = SelectorEngine.findOne(SELECTOR_DROPDOWN_ACTIVE_CHILD, active.parentNode);

      if (dropdownChild) {
        dropdownChild.classList.remove(CLASS_NAME_ACTIVE);
      }

      if (active.getAttribute('role') === 'tab') {
        active.setAttribute('aria-selected', false);
      }
    }

    element.classList.add(CLASS_NAME_ACTIVE);

    if (element.getAttribute('role') === 'tab') {
      element.setAttribute('aria-selected', true);
    }

    reflow(element);

    if (element.classList.contains(CLASS_NAME_FADE$1)) {
      element.classList.add(CLASS_NAME_SHOW$1);
    }

    var parent = element.parentNode;

    if (parent && parent.nodeName === 'LI') {
      parent = parent.parentNode;
    }

    if (parent && parent.classList.contains(CLASS_NAME_DROPDOWN_MENU)) {
      var dropdownElement = element.closest(SELECTOR_DROPDOWN);

      if (dropdownElement) {
        SelectorEngine.find(SELECTOR_DROPDOWN_TOGGLE, dropdownElement).forEach(function (dropdown) { return dropdown.classList.add(CLASS_NAME_ACTIVE); });
      }

      element.setAttribute('aria-expanded', true);
    }

    if (callback) {
      callback();
    }
  }; // Static


  Tab.jQueryInterface = function jQueryInterface (config) {
    return this.each(function () {
      var data = Tab.getOrCreateInstance(this);

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(("No method named \"" + config + "\""));
        }

        data[config]();
      }
    });
  };

  Object.defineProperties( Tab, staticAccessors$11 );

  return Tab;
}(BaseComponent));
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
  if (['A', 'AREA'].includes(this.tagName)) {
    event.preventDefault();
  }

  if (isDisabled(this)) {
    return;
  }

  var data = Tab.getOrCreateInstance(this);
  data.show();
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Tab to jQuery only if jQuery is present
 */

defineJQueryPlugin(Tab);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): toast.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME = 'toast';
var DATA_KEY = 'bs.toast';
var EVENT_KEY = "." + DATA_KEY;
var EVENT_MOUSEOVER = "mouseover" + EVENT_KEY;
var EVENT_MOUSEOUT = "mouseout" + EVENT_KEY;
var EVENT_FOCUSIN = "focusin" + EVENT_KEY;
var EVENT_FOCUSOUT = "focusout" + EVENT_KEY;
var EVENT_HIDE = "hide" + EVENT_KEY;
var EVENT_HIDDEN = "hidden" + EVENT_KEY;
var EVENT_SHOW = "show" + EVENT_KEY;
var EVENT_SHOWN = "shown" + EVENT_KEY;
var CLASS_NAME_FADE = 'fade';
var CLASS_NAME_HIDE = 'hide'; // @deprecated - kept here only for backwards compatibility

var CLASS_NAME_SHOW = 'show';
var CLASS_NAME_SHOWING = 'showing';
var DefaultType = {
  animation: 'boolean',
  autohide: 'boolean',
  delay: 'number'
};
var Default = {
  animation: true,
  autohide: true,
  delay: 5000
};
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Toast = (function (BaseComponent) {
  function Toast(element, config) {
    BaseComponent.call(this, element);
    this._config = this._getConfig(config);
    this._timeout = null;
    this._hasMouseInteraction = false;
    this._hasKeyboardInteraction = false;

    this._setListeners();
  }

  if ( BaseComponent ) Toast.__proto__ = BaseComponent;
  Toast.prototype = Object.create( BaseComponent && BaseComponent.prototype );
  Toast.prototype.constructor = Toast;

  var staticAccessors$12 = { DefaultType: {},Default: {},NAME: {} }; // Getters


  staticAccessors$12.DefaultType.get = function () {
    return DefaultType;
  };

  staticAccessors$12.Default.get = function () {
    return Default;
  };

  staticAccessors$12.NAME.get = function () {
    return NAME;
  }; // Public


  Toast.prototype.show = function show () {
    var this$1 = this;

    var showEvent = EventHandler.trigger(this._element, EVENT_SHOW);

    if (showEvent.defaultPrevented) {
      return;
    }

    this._clearTimeout();

    if (this._config.animation) {
      this._element.classList.add(CLASS_NAME_FADE);
    }

    var complete = function () {
      this$1._element.classList.remove(CLASS_NAME_SHOWING);

      EventHandler.trigger(this$1._element, EVENT_SHOWN);

      this$1._maybeScheduleHide();
    };

    this._element.classList.remove(CLASS_NAME_HIDE); // @deprecated


    reflow(this._element);

    this._element.classList.add(CLASS_NAME_SHOW);

    this._element.classList.add(CLASS_NAME_SHOWING);

    this._queueCallback(complete, this._element, this._config.animation);
  };

  Toast.prototype.hide = function hide () {
    var this$1 = this;

    if (!this._element.classList.contains(CLASS_NAME_SHOW)) {
      return;
    }

    var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);

    if (hideEvent.defaultPrevented) {
      return;
    }

    var complete = function () {
      this$1._element.classList.add(CLASS_NAME_HIDE); // @deprecated


      this$1._element.classList.remove(CLASS_NAME_SHOWING);

      this$1._element.classList.remove(CLASS_NAME_SHOW);

      EventHandler.trigger(this$1._element, EVENT_HIDDEN);
    };

    this._element.classList.add(CLASS_NAME_SHOWING);

    this._queueCallback(complete, this._element, this._config.animation);
  };

  Toast.prototype.dispose = function dispose () {
    this._clearTimeout();

    if (this._element.classList.contains(CLASS_NAME_SHOW)) {
      this._element.classList.remove(CLASS_NAME_SHOW);
    }

    BaseComponent.prototype.dispose.call(this);
  }; // Private


  Toast.prototype._getConfig = function _getConfig (config) {
    config = Object.assign({}, Default,
      Manipulator.getDataAttributes(this._element),
      (typeof config === 'object' && config ? config : {}));
    typeCheckConfig(NAME, config, this.constructor.DefaultType);
    return config;
  };

  Toast.prototype._maybeScheduleHide = function _maybeScheduleHide () {
    var this$1 = this;

    if (!this._config.autohide) {
      return;
    }

    if (this._hasMouseInteraction || this._hasKeyboardInteraction) {
      return;
    }

    this._timeout = setTimeout(function () {
      this$1.hide();
    }, this._config.delay);
  };

  Toast.prototype._onInteraction = function _onInteraction (event, isInteracting) {
    switch (event.type) {
      case 'mouseover':
      case 'mouseout':
        this._hasMouseInteraction = isInteracting;
        break;

      case 'focusin':
      case 'focusout':
        this._hasKeyboardInteraction = isInteracting;
        break;
    }

    if (isInteracting) {
      this._clearTimeout();

      return;
    }

    var nextElement = event.relatedTarget;

    if (this._element === nextElement || this._element.contains(nextElement)) {
      return;
    }

    this._maybeScheduleHide();
  };

  Toast.prototype._setListeners = function _setListeners () {
    var this$1 = this;

    EventHandler.on(this._element, EVENT_MOUSEOVER, function (event) { return this$1._onInteraction(event, true); });
    EventHandler.on(this._element, EVENT_MOUSEOUT, function (event) { return this$1._onInteraction(event, false); });
    EventHandler.on(this._element, EVENT_FOCUSIN, function (event) { return this$1._onInteraction(event, true); });
    EventHandler.on(this._element, EVENT_FOCUSOUT, function (event) { return this$1._onInteraction(event, false); });
  };

  Toast.prototype._clearTimeout = function _clearTimeout () {
    clearTimeout(this._timeout);
    this._timeout = null;
  }; // Static


  Toast.jQueryInterface = function jQueryInterface (config) {
    return this.each(function () {
      var data = Toast.getOrCreateInstance(this, config);

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(("No method named \"" + config + "\""));
        }

        data[config](this);
      }
    });
  };

  Object.defineProperties( Toast, staticAccessors$12 );

  return Toast;
}(BaseComponent));

enableDismissTrigger(Toast);
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Toast to jQuery only if jQuery is present
 */

defineJQueryPlugin(Toast);


//# sourceMappingURL=bootstrap.esm.js.map

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(8)))

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enums_js__ = __webpack_require__(0);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "top", function() { return __WEBPACK_IMPORTED_MODULE_0__enums_js__["u"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "bottom", function() { return __WEBPACK_IMPORTED_MODULE_0__enums_js__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "right", function() { return __WEBPACK_IMPORTED_MODULE_0__enums_js__["s"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "left", function() { return __WEBPACK_IMPORTED_MODULE_0__enums_js__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "auto", function() { return __WEBPACK_IMPORTED_MODULE_0__enums_js__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "basePlacements", function() { return __WEBPACK_IMPORTED_MODULE_0__enums_js__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "start", function() { return __WEBPACK_IMPORTED_MODULE_0__enums_js__["t"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "end", function() { return __WEBPACK_IMPORTED_MODULE_0__enums_js__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "clippingParents", function() { return __WEBPACK_IMPORTED_MODULE_0__enums_js__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "viewport", function() { return __WEBPACK_IMPORTED_MODULE_0__enums_js__["w"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "popper", function() { return __WEBPACK_IMPORTED_MODULE_0__enums_js__["p"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "reference", function() { return __WEBPACK_IMPORTED_MODULE_0__enums_js__["r"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "variationPlacements", function() { return __WEBPACK_IMPORTED_MODULE_0__enums_js__["v"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "placements", function() { return __WEBPACK_IMPORTED_MODULE_0__enums_js__["o"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "beforeRead", function() { return __WEBPACK_IMPORTED_MODULE_0__enums_js__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "read", function() { return __WEBPACK_IMPORTED_MODULE_0__enums_js__["q"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "afterRead", function() { return __WEBPACK_IMPORTED_MODULE_0__enums_js__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "beforeMain", function() { return __WEBPACK_IMPORTED_MODULE_0__enums_js__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "main", function() { return __WEBPACK_IMPORTED_MODULE_0__enums_js__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "afterMain", function() { return __WEBPACK_IMPORTED_MODULE_0__enums_js__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "beforeWrite", function() { return __WEBPACK_IMPORTED_MODULE_0__enums_js__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "write", function() { return __WEBPACK_IMPORTED_MODULE_0__enums_js__["x"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "afterWrite", function() { return __WEBPACK_IMPORTED_MODULE_0__enums_js__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "modifierPhases", function() { return __WEBPACK_IMPORTED_MODULE_0__enums_js__["n"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modifiers_index_js__ = __webpack_require__(31);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "applyStyles", function() { return __WEBPACK_IMPORTED_MODULE_1__modifiers_index_js__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "arrow", function() { return __WEBPACK_IMPORTED_MODULE_1__modifiers_index_js__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "computeStyles", function() { return __WEBPACK_IMPORTED_MODULE_1__modifiers_index_js__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "eventListeners", function() { return __WEBPACK_IMPORTED_MODULE_1__modifiers_index_js__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "flip", function() { return __WEBPACK_IMPORTED_MODULE_1__modifiers_index_js__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return __WEBPACK_IMPORTED_MODULE_1__modifiers_index_js__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "offset", function() { return __WEBPACK_IMPORTED_MODULE_1__modifiers_index_js__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "popperOffsets", function() { return __WEBPACK_IMPORTED_MODULE_1__modifiers_index_js__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "preventOverflow", function() { return __WEBPACK_IMPORTED_MODULE_1__modifiers_index_js__["i"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createPopper_js__ = __webpack_require__(27);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "popperGenerator", function() { return __WEBPACK_IMPORTED_MODULE_2__createPopper_js__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "detectOverflow", function() { return __WEBPACK_IMPORTED_MODULE_2__createPopper_js__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createPopperBase", function() { return __WEBPACK_IMPORTED_MODULE_2__createPopper_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popper_js__ = __webpack_require__(100);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createPopper", function() { return __WEBPACK_IMPORTED_MODULE_3__popper_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popper_lite_js__ = __webpack_require__(45);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createPopperLite", function() { return __WEBPACK_IMPORTED_MODULE_4__popper_lite_js__["a"]; });

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules



/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isTableElement;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getNodeName_js__ = __webpack_require__(5);

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(Object(__WEBPACK_IMPORTED_MODULE_0__getNodeName_js__["a" /* default */])(element)) >= 0;
}

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getOppositePlacement;
var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getOppositeVariationPlacement;
var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getClippingRect;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enums_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getViewportRect_js__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getDocumentRect_js__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listScrollParents_js__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__getOffsetParent_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__getDocumentElement_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__getComputedStyle_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__instanceOf_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__getBoundingClientRect_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__getParentNode_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__contains_js__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__getNodeName_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_rectToClientRect_js__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__utils_math_js__ = __webpack_require__(6);















function getInnerBoundingClientRect(element) {
  var rect = Object(__WEBPACK_IMPORTED_MODULE_8__getBoundingClientRect_js__["a" /* default */])(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === __WEBPACK_IMPORTED_MODULE_0__enums_js__["w" /* viewport */] ? Object(__WEBPACK_IMPORTED_MODULE_12__utils_rectToClientRect_js__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__getViewportRect_js__["a" /* default */])(element)) : Object(__WEBPACK_IMPORTED_MODULE_7__instanceOf_js__["a" /* isElement */])(clippingParent) ? getInnerBoundingClientRect(clippingParent) : Object(__WEBPACK_IMPORTED_MODULE_12__utils_rectToClientRect_js__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__getDocumentRect_js__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_5__getDocumentElement_js__["a" /* default */])(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = Object(__WEBPACK_IMPORTED_MODULE_3__listScrollParents_js__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_9__getParentNode_js__["a" /* default */])(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(Object(__WEBPACK_IMPORTED_MODULE_6__getComputedStyle_js__["a" /* default */])(element).position) >= 0;
  var clipperElement = canEscapeClipping && Object(__WEBPACK_IMPORTED_MODULE_7__instanceOf_js__["b" /* isHTMLElement */])(element) ? Object(__WEBPACK_IMPORTED_MODULE_4__getOffsetParent_js__["a" /* default */])(element) : element;

  if (!Object(__WEBPACK_IMPORTED_MODULE_7__instanceOf_js__["a" /* isElement */])(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return Object(__WEBPACK_IMPORTED_MODULE_7__instanceOf_js__["a" /* isElement */])(clippingParent) && Object(__WEBPACK_IMPORTED_MODULE_10__contains_js__["a" /* default */])(clippingParent, clipperElement) && Object(__WEBPACK_IMPORTED_MODULE_11__getNodeName_js__["a" /* default */])(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = Object(__WEBPACK_IMPORTED_MODULE_13__utils_math_js__["a" /* max */])(rect.top, accRect.top);
    accRect.right = Object(__WEBPACK_IMPORTED_MODULE_13__utils_math_js__["b" /* min */])(rect.right, accRect.right);
    accRect.bottom = Object(__WEBPACK_IMPORTED_MODULE_13__utils_math_js__["b" /* min */])(rect.bottom, accRect.bottom);
    accRect.left = Object(__WEBPACK_IMPORTED_MODULE_13__utils_math_js__["a" /* max */])(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getViewportRect;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getWindow_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getDocumentElement_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getWindowScrollBarX_js__ = __webpack_require__(23);



function getViewportRect(element) {
  var win = Object(__WEBPACK_IMPORTED_MODULE_0__getWindow_js__["a" /* default */])(element);
  var html = Object(__WEBPACK_IMPORTED_MODULE_1__getDocumentElement_js__["a" /* default */])(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + Object(__WEBPACK_IMPORTED_MODULE_2__getWindowScrollBarX_js__["a" /* default */])(element),
    y: y
  };
}

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getDocumentRect;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getDocumentElement_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getComputedStyle_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getWindowScrollBarX_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__getWindowScroll_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_math_js__ = __webpack_require__(6);




 // Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = Object(__WEBPACK_IMPORTED_MODULE_0__getDocumentElement_js__["a" /* default */])(element);
  var winScroll = Object(__WEBPACK_IMPORTED_MODULE_3__getWindowScroll_js__["a" /* default */])(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = Object(__WEBPACK_IMPORTED_MODULE_4__utils_math_js__["a" /* max */])(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = Object(__WEBPACK_IMPORTED_MODULE_4__utils_math_js__["a" /* max */])(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + Object(__WEBPACK_IMPORTED_MODULE_2__getWindowScrollBarX_js__["a" /* default */])(element);
  var y = -winScroll.scrollTop;

  if (Object(__WEBPACK_IMPORTED_MODULE_1__getComputedStyle_js__["a" /* default */])(body || html).direction === 'rtl') {
    x += Object(__WEBPACK_IMPORTED_MODULE_4__utils_math_js__["a" /* max */])(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getScrollParent;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getParentNode_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isScrollParent_js__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getNodeName_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__instanceOf_js__ = __webpack_require__(1);




function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(Object(__WEBPACK_IMPORTED_MODULE_2__getNodeName_js__["a" /* default */])(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_3__instanceOf_js__["b" /* isHTMLElement */])(node) && Object(__WEBPACK_IMPORTED_MODULE_1__isScrollParent_js__["a" /* default */])(node)) {
    return node;
  }

  return getScrollParent(Object(__WEBPACK_IMPORTED_MODULE_0__getParentNode_js__["a" /* default */])(node));
}

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["a"] = computeAutoPlacement;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getVariation_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enums_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detectOverflow_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__getBasePlacement_js__ = __webpack_require__(3);




function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? __WEBPACK_IMPORTED_MODULE_1__enums_js__["o" /* placements */] : _options$allowedAutoP;
  var variation = Object(__WEBPACK_IMPORTED_MODULE_0__getVariation_js__["a" /* default */])(placement);
  var placements = variation ? flipVariations ? __WEBPACK_IMPORTED_MODULE_1__enums_js__["v" /* variationPlacements */] : __WEBPACK_IMPORTED_MODULE_1__enums_js__["v" /* variationPlacements */].filter(function (placement) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__getVariation_js__["a" /* default */])(placement) === variation;
  }) : __WEBPACK_IMPORTED_MODULE_1__enums_js__["e" /* basePlacements */];
  var allowedPlacements = placements.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements;

    if (process.env.NODE_ENV !== "production") {
      console.error(['Popper: The `allowedAutoPlacements` option did not allow any', 'placements. Ensure the `placement` option matches the variation', 'of the allowed placements.', 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(' '));
    }
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = Object(__WEBPACK_IMPORTED_MODULE_2__detectOverflow_js__["a" /* default */])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[Object(__WEBPACK_IMPORTED_MODULE_3__getBasePlacement_js__["a" /* default */])(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(13)))

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getAltAxis;
function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getCompositeRect;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getBoundingClientRect_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getNodeScroll_js__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getNodeName_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__instanceOf_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__getWindowScrollBarX_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__getDocumentElement_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__isScrollParent_js__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_math_js__ = __webpack_require__(6);









function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = Object(__WEBPACK_IMPORTED_MODULE_7__utils_math_js__["c" /* round */])(rect.width) / element.offsetWidth || 1;
  var scaleY = Object(__WEBPACK_IMPORTED_MODULE_7__utils_math_js__["c" /* round */])(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var isOffsetParentAnElement = Object(__WEBPACK_IMPORTED_MODULE_3__instanceOf_js__["b" /* isHTMLElement */])(offsetParent);
  var offsetParentIsScaled = Object(__WEBPACK_IMPORTED_MODULE_3__instanceOf_js__["b" /* isHTMLElement */])(offsetParent) && isElementScaled(offsetParent);
  var documentElement = Object(__WEBPACK_IMPORTED_MODULE_5__getDocumentElement_js__["a" /* default */])(offsetParent);
  var rect = Object(__WEBPACK_IMPORTED_MODULE_0__getBoundingClientRect_js__["a" /* default */])(elementOrVirtualElement, offsetParentIsScaled);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (Object(__WEBPACK_IMPORTED_MODULE_2__getNodeName_js__["a" /* default */])(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    Object(__WEBPACK_IMPORTED_MODULE_6__isScrollParent_js__["a" /* default */])(documentElement)) {
      scroll = Object(__WEBPACK_IMPORTED_MODULE_1__getNodeScroll_js__["a" /* default */])(offsetParent);
    }

    if (Object(__WEBPACK_IMPORTED_MODULE_3__instanceOf_js__["b" /* isHTMLElement */])(offsetParent)) {
      offsets = Object(__WEBPACK_IMPORTED_MODULE_0__getBoundingClientRect_js__["a" /* default */])(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = Object(__WEBPACK_IMPORTED_MODULE_4__getWindowScrollBarX_js__["a" /* default */])(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getNodeScroll;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getWindowScroll_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getWindow_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__instanceOf_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__getHTMLElementScroll_js__ = __webpack_require__(93);




function getNodeScroll(node) {
  if (node === Object(__WEBPACK_IMPORTED_MODULE_1__getWindow_js__["a" /* default */])(node) || !Object(__WEBPACK_IMPORTED_MODULE_2__instanceOf_js__["b" /* isHTMLElement */])(node)) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__getWindowScroll_js__["a" /* default */])(node);
  } else {
    return Object(__WEBPACK_IMPORTED_MODULE_3__getHTMLElementScroll_js__["a" /* default */])(node);
  }
}

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getHTMLElementScroll;
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = orderModifiers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enums_js__ = __webpack_require__(0);
 // source: https://stackoverflow.com/questions/49875255

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return __WEBPACK_IMPORTED_MODULE_0__enums_js__["n" /* modifierPhases */].reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = debounce;
function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = validateModifiers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__format_js__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enums_js__ = __webpack_require__(0);


var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
function validateModifiers(modifiers) {
  modifiers.forEach(function (modifier) {
    [].concat(Object.keys(modifier), VALID_PROPERTIES) // IE11-compatible replacement for `new Set(iterable)`
    .filter(function (value, index, self) {
      return self.indexOf(value) === index;
    }).forEach(function (key) {
      switch (key) {
        case 'name':
          if (typeof modifier.name !== 'string') {
            console.error(Object(__WEBPACK_IMPORTED_MODULE_0__format_js__["a" /* default */])(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
          }

          break;

        case 'enabled':
          if (typeof modifier.enabled !== 'boolean') {
            console.error(Object(__WEBPACK_IMPORTED_MODULE_0__format_js__["a" /* default */])(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
          }

          break;

        case 'phase':
          if (__WEBPACK_IMPORTED_MODULE_1__enums_js__["n" /* modifierPhases */].indexOf(modifier.phase) < 0) {
            console.error(Object(__WEBPACK_IMPORTED_MODULE_0__format_js__["a" /* default */])(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + __WEBPACK_IMPORTED_MODULE_1__enums_js__["n" /* modifierPhases */].join(', '), "\"" + String(modifier.phase) + "\""));
          }

          break;

        case 'fn':
          if (typeof modifier.fn !== 'function') {
            console.error(Object(__WEBPACK_IMPORTED_MODULE_0__format_js__["a" /* default */])(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'effect':
          if (modifier.effect != null && typeof modifier.effect !== 'function') {
            console.error(Object(__WEBPACK_IMPORTED_MODULE_0__format_js__["a" /* default */])(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'requires':
          if (modifier.requires != null && !Array.isArray(modifier.requires)) {
            console.error(Object(__WEBPACK_IMPORTED_MODULE_0__format_js__["a" /* default */])(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
          }

          break;

        case 'requiresIfExists':
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error(Object(__WEBPACK_IMPORTED_MODULE_0__format_js__["a" /* default */])(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
          }

          break;

        case 'options':
        case 'data':
          break;

        default:
          console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
            return "\"" + s + "\"";
          }).join(', ') + "; but \"" + key + "\" was provided.");
      }

      modifier.requires && modifier.requires.forEach(function (requirement) {
        if (modifiers.find(function (mod) {
          return mod.name === requirement;
        }) == null) {
          console.error(Object(__WEBPACK_IMPORTED_MODULE_0__format_js__["a" /* default */])(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = format;
function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return [].concat(args).reduce(function (p, c) {
    return p.replace(/%s/, c);
  }, str);
}

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = uniqueBy;
function uniqueBy(arr, fn) {
  var identifiers = new Set();
  return arr.filter(function (item) {
    var identifier = fn(item);

    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mergeByName;
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createPopper; });
/* unused harmony export defaultModifiers */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createPopper_js__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modifiers_eventListeners_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modifiers_popperOffsets_js__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modifiers_computeStyles_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modifiers_applyStyles_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modifiers_offset_js__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modifiers_flip_js__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modifiers_preventOverflow_js__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modifiers_arrow_js__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modifiers_hide_js__ = __webpack_require__(42);
/* unused harmony reexport popperGenerator */
/* unused harmony reexport detectOverflow */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__popper_lite_js__ = __webpack_require__(45);
/* unused harmony reexport createPopperLite */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__modifiers_index_js__ = __webpack_require__(31);
/* unused harmony namespace reexport */










var defaultModifiers = [__WEBPACK_IMPORTED_MODULE_1__modifiers_eventListeners_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__modifiers_popperOffsets_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__modifiers_computeStyles_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__modifiers_applyStyles_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__modifiers_offset_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__modifiers_flip_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_7__modifiers_preventOverflow_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_8__modifiers_arrow_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_9__modifiers_hide_js__["a" /* default */]];
var createPopper = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__createPopper_js__["c" /* popperGenerator */])({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules



/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initTinySlider;
/* unused harmony export initHeroSlider */
/* unused harmony export initThumbSliderNav */
/* unused harmony export setBackground */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tiny_slider_src_tiny_slider__ = __webpack_require__(102);
/**
 * Axial
 * Axial Construct is a universal template for factories, industry, construction, architecture, factories, mechanics, energy
 * Exclusively on https://1.envato.market/axial-html
 *
 * @encoding        UTF-8
 * @version         1.0.0
 * @copyright       (C) 2018 - 2021 Merkulove ( https://merkulov.design/ ). All rights reserved.
 * @license         Envato License https://1.envato.market/KYbje
 * @contributors    Lamber Lilit (winter.rituel@gmail.com)
 * @support         help@merkulov.design
 **/




function initTinySlider(options, navSelector) {
    if ( navSelector === void 0 ) navSelector = '.tns-arrows_arrow';

    var slider = Object(__WEBPACK_IMPORTED_MODULE_0_tiny_slider_src_tiny_slider__["a" /* tns */])(Object.assign({}, options));

    var sliderControls = document.querySelectorAll(navSelector);

    sliderControls.forEach(function (el) {
        el.addEventListener('click', function (e) {
            e.preventDefault();
        })
    })

    var changeNavState = function (info) {

        if (info.container.classList.contains('hero_thumbs')) {
            var slides = document.querySelectorAll('.hero_thumbs-thumb');
            slides[info.index].click();
        }

    }

    var test = function (info) {
      console.log(info.index)

        if (info.container.classList.contains('hero_thumbs')) {
            var slides = document.querySelectorAll('.hero_thumbs-thumb');
            var containerEl = document.querySelector('.hero');
            containerEl.style.backgroundImage = "url(" + (slides[info.index].dataset.bg) + ")";
        }
    }

    slider.events.on('indexChanged', changeNavState);

    slider.events.on('indexChanged', test);

    window.addEventListener('resize', slider.refresh);
}

function initHeroSlider() {
    var heroSlider = Object(__WEBPACK_IMPORTED_MODULE_0_tiny_slider_src_tiny_slider__["a" /* tns */])({
        container: '.hero_slider',
        items: 1,
        mode: 'gallery',
        nav: true,
        navContainer: '.hero_slider-nav',
        controls: false,
        speed: 600,
        lazyload: true,
        touch: false,
        rewind: true,
    })

    var setSlideBg = function (info) {
        var slides = document.querySelectorAll('.hero_slider-slide');
        var containerEl = document.querySelector('.hero');
        containerEl.style.backgroundImage = "url(" + (slides[info.index].dataset.bg) + ")";
    }

    heroSlider.events.on('indexChanged', setSlideBg);

    window.addEventListener('resize', function () {
        heroSlider.refresh();
    })

    var thumbs = document.querySelectorAll('.hero_thumbs-thumb');

    thumbs.forEach(function (el, index) {
        el.addEventListener('click', function () {
            heroSlider.goTo(index);
        })
    })

    function setActivityClass(info) {
        for (var i = 0; i < thumbs.length; i++) {
            thumbs[i].classList.remove('is-current')
        }
        thumbs[info.index].classList.add('is-current')
    }

    heroSlider.events.on('indexChanged', setActivityClass);
}

function initThumbSliderNav() {
    var thumbNavSlider = Object(__WEBPACK_IMPORTED_MODULE_0_tiny_slider_src_tiny_slider__["a" /* tns */])({
        container: '.hero_thumbs',
        items: 1,
        mode: 'carousel',
        nav: false,
        controls: false,
        loop: false,
        mouseDrag: true,
        gutter: 5,
        responsive: {
            575: {
                gutter: 15,
                items: 2,
                edgePadding: 0,
            },
            992: {
                gutter: 30,
                edgePadding: setEdgePadding('.container--slider'),
            },
            1200: {
                items: 3,
                fixedWidth: 410
            },
        }
    });


    var dots = document.querySelectorAll('.hero_slider-nav_dot');

    dots.forEach(function (dot, index) {
        dot.addEventListener('click', function () {
            thumbNavSlider.goTo(index);
        })
    })
}


function setEdgePadding(container) {
    var margin = parseInt(window.getComputedStyle(document.querySelector(container)).marginLeft),
        padding = parseInt(window.getComputedStyle(document.querySelector(container)).paddingLeft);
    return margin + padding
}

function setBackground(target, srcEl) {
    var targetElems = document.querySelectorAll(target),
        slides = document.querySelectorAll(srcEl);

    targetElems.forEach(function (el, index) {
        el.style.backgroundImage = "url(" + (slides[index].dataset.bg) + ")";
    })
}


/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tns; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_raf_js__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_caf_js__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_extend_js__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_checkStorageValue_js__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_setLocalStorage_js__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_getSlideId_js__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helpers_calc_js__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__helpers_percentageLayout_js__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__helpers_mediaquerySupport_js__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__helpers_createStyleSheet_js__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__helpers_addCSSRule_js__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__helpers_removeCSSRule_js__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__helpers_getCssRulesLength_js__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__helpers_toDegree_js__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__helpers_getTouchDirection_js__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__helpers_forEach_js__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__helpers_hasClass_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__helpers_removeClass_js__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__helpers_hasAttr_js__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__helpers_getAttr_js__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__helpers_setAttrs_js__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__helpers_removeAttrs_js__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__helpers_arrayFromNodeList_js__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__helpers_hideElement_js__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__helpers_showElement_js__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__helpers_isVisible_js__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__helpers_whichProperty_js__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__helpers_has3DTransforms_js__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__helpers_getEndProperty_js__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__helpers_addEvents_js__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__helpers_removeEvents_js__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__helpers_events_js__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__helpers_jsTransform_js__ = __webpack_require__(135);
// Object.keys
if (!Object.keys) {
  Object.keys = function(object) {
    var keys = [];
    for (var name in object) {
      if (Object.prototype.hasOwnProperty.call(object, name)) {
        keys.push(name);
      }
    }
    return keys;
  };
}

// ChildNode.remove
if(!("remove" in Element.prototype)){
  Element.prototype.remove = function(){
    if(this.parentNode) {
      this.parentNode.removeChild(this);
    }
  };
}




































var tns = function(options) {
  options = Object(__WEBPACK_IMPORTED_MODULE_2__helpers_extend_js__["a" /* extend */])({
    container: '.slider',
    mode: 'carousel',
    axis: 'horizontal',
    items: 1,
    gutter: 0,
    edgePadding: 0,
    fixedWidth: false,
    autoWidth: false,
    viewportMax: false,
    slideBy: 1,
    center: false,
    controls: true,
    controlsPosition: 'top',
    controlsText: ['prev', 'next'],
    controlsContainer: false,
    prevButton: false,
    nextButton: false,
    nav: true,
    navPosition: 'top',
    navContainer: false,
    navAsThumbnails: false,
    arrowKeys: false,
    speed: 300,
    autoplay: false,
    autoplayPosition: 'top',
    autoplayTimeout: 5000,
    autoplayDirection: 'forward',
    autoplayText: ['start', 'stop'],
    autoplayHoverPause: false,
    autoplayButton: false,
    autoplayButtonOutput: true,
    autoplayResetOnVisibility: true,
    animateIn: 'tns-fadeIn',
    animateOut: 'tns-fadeOut',
    animateNormal: 'tns-normal',
    animateDelay: false,
    loop: true,
    rewind: false,
    autoHeight: false,
    responsive: false,
    lazyload: false,
    lazyloadSelector: '.tns-lazy-img',
    touch: true,
    mouseDrag: false,
    swipeAngle: 15,
    nested: false,
    preventActionWhenRunning: false,
    preventScrollOnTouch: false,
    freezable: true,
    onInit: false,
    useLocalStorage: true,
    nonce: false
  }, options || {});

  var doc = document,
      win = window,
      KEYS = {
        ENTER: 13,
        SPACE: 32,
        LEFT: 37,
        RIGHT: 39
      },
      tnsStorage = {},
      localStorageAccess = options.useLocalStorage;

  if (localStorageAccess) {
    // check browser version and local storage access
    var browserInfo = navigator.userAgent;
    var uid = new Date;

    try {
      tnsStorage = win.localStorage;
      if (tnsStorage) {
        tnsStorage.setItem(uid, uid);
        localStorageAccess = tnsStorage.getItem(uid) == uid;
        tnsStorage.removeItem(uid);
      } else {
        localStorageAccess = false;
      }
      if (!localStorageAccess) { tnsStorage = {}; }
    } catch(e) {
      localStorageAccess = false;
    }

    if (localStorageAccess) {
      // remove storage when browser version changes
      if (tnsStorage['tnsApp'] && tnsStorage['tnsApp'] !== browserInfo) {
        ['tC', 'tPL', 'tMQ', 'tTf', 't3D', 'tTDu', 'tTDe', 'tADu', 'tADe', 'tTE', 'tAE'].forEach(function(item) { tnsStorage.removeItem(item); });
      }
      // update browserInfo
      localStorage['tnsApp'] = browserInfo;
    }
  }

  var CALC = tnsStorage['tC'] ? Object(__WEBPACK_IMPORTED_MODULE_3__helpers_checkStorageValue_js__["a" /* checkStorageValue */])(tnsStorage['tC']) : Object(__WEBPACK_IMPORTED_MODULE_4__helpers_setLocalStorage_js__["a" /* setLocalStorage */])(tnsStorage, 'tC', Object(__WEBPACK_IMPORTED_MODULE_6__helpers_calc_js__["a" /* calc */])(), localStorageAccess),
      PERCENTAGELAYOUT = tnsStorage['tPL'] ? Object(__WEBPACK_IMPORTED_MODULE_3__helpers_checkStorageValue_js__["a" /* checkStorageValue */])(tnsStorage['tPL']) : Object(__WEBPACK_IMPORTED_MODULE_4__helpers_setLocalStorage_js__["a" /* setLocalStorage */])(tnsStorage, 'tPL', Object(__WEBPACK_IMPORTED_MODULE_7__helpers_percentageLayout_js__["a" /* percentageLayout */])(), localStorageAccess),
      CSSMQ = tnsStorage['tMQ'] ? Object(__WEBPACK_IMPORTED_MODULE_3__helpers_checkStorageValue_js__["a" /* checkStorageValue */])(tnsStorage['tMQ']) : Object(__WEBPACK_IMPORTED_MODULE_4__helpers_setLocalStorage_js__["a" /* setLocalStorage */])(tnsStorage, 'tMQ', Object(__WEBPACK_IMPORTED_MODULE_8__helpers_mediaquerySupport_js__["a" /* mediaquerySupport */])(), localStorageAccess),
      TRANSFORM = tnsStorage['tTf'] ? Object(__WEBPACK_IMPORTED_MODULE_3__helpers_checkStorageValue_js__["a" /* checkStorageValue */])(tnsStorage['tTf']) : Object(__WEBPACK_IMPORTED_MODULE_4__helpers_setLocalStorage_js__["a" /* setLocalStorage */])(tnsStorage, 'tTf', Object(__WEBPACK_IMPORTED_MODULE_27__helpers_whichProperty_js__["a" /* whichProperty */])('transform'), localStorageAccess),
      HAS3DTRANSFORMS = tnsStorage['t3D'] ? Object(__WEBPACK_IMPORTED_MODULE_3__helpers_checkStorageValue_js__["a" /* checkStorageValue */])(tnsStorage['t3D']) : Object(__WEBPACK_IMPORTED_MODULE_4__helpers_setLocalStorage_js__["a" /* setLocalStorage */])(tnsStorage, 't3D', Object(__WEBPACK_IMPORTED_MODULE_28__helpers_has3DTransforms_js__["a" /* has3DTransforms */])(TRANSFORM), localStorageAccess),
      TRANSITIONDURATION = tnsStorage['tTDu'] ? Object(__WEBPACK_IMPORTED_MODULE_3__helpers_checkStorageValue_js__["a" /* checkStorageValue */])(tnsStorage['tTDu']) : Object(__WEBPACK_IMPORTED_MODULE_4__helpers_setLocalStorage_js__["a" /* setLocalStorage */])(tnsStorage, 'tTDu', Object(__WEBPACK_IMPORTED_MODULE_27__helpers_whichProperty_js__["a" /* whichProperty */])('transitionDuration'), localStorageAccess),
      TRANSITIONDELAY = tnsStorage['tTDe'] ? Object(__WEBPACK_IMPORTED_MODULE_3__helpers_checkStorageValue_js__["a" /* checkStorageValue */])(tnsStorage['tTDe']) : Object(__WEBPACK_IMPORTED_MODULE_4__helpers_setLocalStorage_js__["a" /* setLocalStorage */])(tnsStorage, 'tTDe', Object(__WEBPACK_IMPORTED_MODULE_27__helpers_whichProperty_js__["a" /* whichProperty */])('transitionDelay'), localStorageAccess),
      ANIMATIONDURATION = tnsStorage['tADu'] ? Object(__WEBPACK_IMPORTED_MODULE_3__helpers_checkStorageValue_js__["a" /* checkStorageValue */])(tnsStorage['tADu']) : Object(__WEBPACK_IMPORTED_MODULE_4__helpers_setLocalStorage_js__["a" /* setLocalStorage */])(tnsStorage, 'tADu', Object(__WEBPACK_IMPORTED_MODULE_27__helpers_whichProperty_js__["a" /* whichProperty */])('animationDuration'), localStorageAccess),
      ANIMATIONDELAY = tnsStorage['tADe'] ? Object(__WEBPACK_IMPORTED_MODULE_3__helpers_checkStorageValue_js__["a" /* checkStorageValue */])(tnsStorage['tADe']) : Object(__WEBPACK_IMPORTED_MODULE_4__helpers_setLocalStorage_js__["a" /* setLocalStorage */])(tnsStorage, 'tADe', Object(__WEBPACK_IMPORTED_MODULE_27__helpers_whichProperty_js__["a" /* whichProperty */])('animationDelay'), localStorageAccess),
      TRANSITIONEND = tnsStorage['tTE'] ? Object(__WEBPACK_IMPORTED_MODULE_3__helpers_checkStorageValue_js__["a" /* checkStorageValue */])(tnsStorage['tTE']) : Object(__WEBPACK_IMPORTED_MODULE_4__helpers_setLocalStorage_js__["a" /* setLocalStorage */])(tnsStorage, 'tTE', Object(__WEBPACK_IMPORTED_MODULE_29__helpers_getEndProperty_js__["a" /* getEndProperty */])(TRANSITIONDURATION, 'Transition'), localStorageAccess),
      ANIMATIONEND = tnsStorage['tAE'] ? Object(__WEBPACK_IMPORTED_MODULE_3__helpers_checkStorageValue_js__["a" /* checkStorageValue */])(tnsStorage['tAE']) : Object(__WEBPACK_IMPORTED_MODULE_4__helpers_setLocalStorage_js__["a" /* setLocalStorage */])(tnsStorage, 'tAE', Object(__WEBPACK_IMPORTED_MODULE_29__helpers_getEndProperty_js__["a" /* getEndProperty */])(ANIMATIONDURATION, 'Animation'), localStorageAccess);

  // get element nodes from selectors
  var supportConsoleWarn = win.console && typeof win.console.warn === "function",
      tnsList = ['container', 'controlsContainer', 'prevButton', 'nextButton', 'navContainer', 'autoplayButton'],
      optionsElements = {};

  tnsList.forEach(function(item) {
    if (typeof options[item] === 'string') {
      var str = options[item],
          el = doc.querySelector(str);
      optionsElements[item] = str;

      if (el && el.nodeName) {
        options[item] = el;
      } else {
        if (supportConsoleWarn) { console.warn('Can\'t find', options[item]); }
        return;
      }
    }
  });

  // make sure at least 1 slide
  if (options.container.children.length < 1) {
    if (supportConsoleWarn) { console.warn('No slides found in', options.container); }
    return;
   }

  // update options
  var responsive = options.responsive,
      nested = options.nested,
      carousel = options.mode === 'carousel' ? true : false;

  if (responsive) {
    // apply responsive[0] to options and remove it
    if (0 in responsive) {
      options = Object(__WEBPACK_IMPORTED_MODULE_2__helpers_extend_js__["a" /* extend */])(options, responsive[0]);
      delete responsive[0];
    }

    var responsiveTem = {};
    for (var key in responsive) {
      var val = responsive[key];
      // update responsive
      // from: 300: 2
      // to:
      //   300: {
      //     items: 2
      //   }
      val = typeof val === 'number' ? {items: val} : val;
      responsiveTem[key] = val;
    }
    responsive = responsiveTem;
    responsiveTem = null;
  }

  // update options
  function updateOptions (obj) {
    for (var key in obj) {
      if (!carousel) {
        if (key === 'slideBy') { obj[key] = 'page'; }
        if (key === 'edgePadding') { obj[key] = false; }
        if (key === 'autoHeight') { obj[key] = false; }
      }

      // update responsive options
      if (key === 'responsive') { updateOptions(obj[key]); }
    }
  }
  if (!carousel) { updateOptions(options); }


  // === define and set variables ===
  if (!carousel) {
    options.axis = 'horizontal';
    options.slideBy = 'page';
    options.edgePadding = false;

    var animateIn = options.animateIn,
        animateOut = options.animateOut,
        animateDelay = options.animateDelay,
        animateNormal = options.animateNormal;
  }

  var horizontal = options.axis === 'horizontal' ? true : false,
      outerWrapper = doc.createElement('div'),
      innerWrapper = doc.createElement('div'),
      middleWrapper,
      container = options.container,
      containerParent = container.parentNode,
      containerHTML = container.outerHTML,
      slideItems = container.children,
      slideCount = slideItems.length,
      breakpointZone,
      windowWidth = getWindowWidth(),
      isOn = false;
  if (responsive) { setBreakpointZone(); }
  if (carousel) { container.className += ' tns-vpfix'; }

  // fixedWidth: viewport > rightBoundary > indexMax
  var autoWidth = options.autoWidth,
      fixedWidth = getOption('fixedWidth'),
      edgePadding = getOption('edgePadding'),
      gutter = getOption('gutter'),
      viewport = getViewportWidth(),
      center = getOption('center'),
      items = !autoWidth ? Math.floor(getOption('items')) : 1,
      slideBy = getOption('slideBy'),
      viewportMax = options.viewportMax || options.fixedWidthViewportWidth,
      arrowKeys = getOption('arrowKeys'),
      speed = getOption('speed'),
      rewind = options.rewind,
      loop = rewind ? false : options.loop,
      autoHeight = getOption('autoHeight'),
      controls = getOption('controls'),
      controlsText = getOption('controlsText'),
      nav = getOption('nav'),
      touch = getOption('touch'),
      mouseDrag = getOption('mouseDrag'),
      autoplay = getOption('autoplay'),
      autoplayTimeout = getOption('autoplayTimeout'),
      autoplayText = getOption('autoplayText'),
      autoplayHoverPause = getOption('autoplayHoverPause'),
      autoplayResetOnVisibility = getOption('autoplayResetOnVisibility'),
      sheet = Object(__WEBPACK_IMPORTED_MODULE_9__helpers_createStyleSheet_js__["a" /* createStyleSheet */])(null, getOption('nonce')),
      lazyload = options.lazyload,
      lazyloadSelector = options.lazyloadSelector,
      slidePositions, // collection of slide positions
      slideItemsOut = [],
      cloneCount = loop ? getCloneCountForLoop() : 0,
      slideCountNew = !carousel ? slideCount + cloneCount : slideCount + cloneCount * 2,
      hasRightDeadZone = (fixedWidth || autoWidth) && !loop ? true : false,
      rightBoundary = fixedWidth ? getRightBoundary() : null,
      updateIndexBeforeTransform = (!carousel || !loop) ? true : false,
      // transform
      transformAttr = horizontal ? 'left' : 'top',
      transformPrefix = '',
      transformPostfix = '',
      // index
      getIndexMax = (function () {
        if (fixedWidth) {
          return function() { return center && !loop ? slideCount - 1 : Math.ceil(- rightBoundary / (fixedWidth + gutter)); };
        } else if (autoWidth) {
          return function() {
            for (var i = 0; i < slideCountNew; i++) {
              if (slidePositions[i] >= - rightBoundary) { return i; }
            }
          };
        } else {
          return function() {
            if (center && carousel && !loop) {
              return slideCount - 1;
            } else {
              return loop || carousel ? Math.max(0, slideCountNew - Math.ceil(items)) : slideCountNew - 1;
            }
          };
        }
      })(),
      index = getStartIndex(getOption('startIndex')),
      indexCached = index,
      displayIndex = getCurrentSlide(),
      indexMin = 0,
      indexMax = !autoWidth ? getIndexMax() : null,
      // resize
      resizeTimer,
      preventActionWhenRunning = options.preventActionWhenRunning,
      swipeAngle = options.swipeAngle,
      moveDirectionExpected = swipeAngle ? '?' : true,
      running = false,
      onInit = options.onInit,
      events = new __WEBPACK_IMPORTED_MODULE_32__helpers_events_js__["a" /* Events */](),
      // id, class
      newContainerClasses = ' tns-slider tns-' + options.mode,
      slideId = container.id || Object(__WEBPACK_IMPORTED_MODULE_5__helpers_getSlideId_js__["a" /* getSlideId */])(),
      disable = getOption('disable'),
      disabled = false,
      freezable = options.freezable,
      freeze = freezable && !autoWidth ? getFreeze() : false,
      frozen = false,
      controlsEvents = {
        'click': onControlsClick,
        'keydown': onControlsKeydown
      },
      navEvents = {
        'click': onNavClick,
        'keydown': onNavKeydown
      },
      hoverEvents = {
        'mouseover': mouseoverPause,
        'mouseout': mouseoutRestart
      },
      visibilityEvent = {'visibilitychange': onVisibilityChange},
      docmentKeydownEvent = {'keydown': onDocumentKeydown},
      touchEvents = {
        'touchstart': onPanStart,
        'touchmove': onPanMove,
        'touchend': onPanEnd,
        'touchcancel': onPanEnd
      }, dragEvents = {
        'mousedown': onPanStart,
        'mousemove': onPanMove,
        'mouseup': onPanEnd,
        'mouseleave': onPanEnd
      },
      hasControls = hasOption('controls'),
      hasNav = hasOption('nav'),
      navAsThumbnails = autoWidth ? true : options.navAsThumbnails,
      hasAutoplay = hasOption('autoplay'),
      hasTouch = hasOption('touch'),
      hasMouseDrag = hasOption('mouseDrag'),
      slideActiveClass = 'tns-slide-active',
      slideClonedClass = 'tns-slide-cloned',
      imgCompleteClass = 'tns-complete',
      imgEvents = {
        'load': onImgLoaded,
        'error': onImgFailed
      },
      imgsComplete,
      liveregionCurrent,
      preventScroll = options.preventScrollOnTouch === 'force' ? true : false;

  // controls
  if (hasControls) {
    var controlsContainer = options.controlsContainer,
        controlsContainerHTML = options.controlsContainer ? options.controlsContainer.outerHTML : '',
        prevButton = options.prevButton,
        nextButton = options.nextButton,
        prevButtonHTML = options.prevButton ? options.prevButton.outerHTML : '',
        nextButtonHTML = options.nextButton ? options.nextButton.outerHTML : '',
        prevIsButton,
        nextIsButton;
  }

  // nav
  if (hasNav) {
    var navContainer = options.navContainer,
        navContainerHTML = options.navContainer ? options.navContainer.outerHTML : '',
        navItems,
        pages = autoWidth ? slideCount : getPages(),
        pagesCached = 0,
        navClicked = -1,
        navCurrentIndex = getCurrentNavIndex(),
        navCurrentIndexCached = navCurrentIndex,
        navActiveClass = 'tns-nav-active',
        navStr = 'Carousel Page ',
        navStrCurrent = ' (Current Slide)';
  }

  // autoplay
  if (hasAutoplay) {
    var autoplayDirection = options.autoplayDirection === 'forward' ? 1 : -1,
        autoplayButton = options.autoplayButton,
        autoplayButtonHTML = options.autoplayButton ? options.autoplayButton.outerHTML : '',
        autoplayHtmlStrings = ['<span class=\'tns-visually-hidden\'>', ' animation</span>'],
        autoplayTimer,
        animating,
        autoplayHoverPaused,
        autoplayUserPaused,
        autoplayVisibilityPaused;
  }

  if (hasTouch || hasMouseDrag) {
    var initPosition = {},
        lastPosition = {},
        translateInit,
        disX,
        disY,
        panStart = false,
        rafIndex,
        getDist = horizontal ?
          function(a, b) { return a.x - b.x; } :
          function(a, b) { return a.y - b.y; };
  }

  // disable slider when slidecount <= items
  if (!autoWidth) { resetVariblesWhenDisable(disable || freeze); }

  if (TRANSFORM) {
    transformAttr = TRANSFORM;
    transformPrefix = 'translate';

    if (HAS3DTRANSFORMS) {
      transformPrefix += horizontal ? '3d(' : '3d(0px, ';
      transformPostfix = horizontal ? ', 0px, 0px)' : ', 0px)';
    } else {
      transformPrefix += horizontal ? 'X(' : 'Y(';
      transformPostfix = ')';
    }

  }

  if (carousel) { container.className = container.className.replace('tns-vpfix', ''); }
  initStructure();
  initSheet();
  initSliderTransform();

  // === COMMON FUNCTIONS === //
  function resetVariblesWhenDisable (condition) {
    if (condition) {
      controls = nav = touch = mouseDrag = arrowKeys = autoplay = autoplayHoverPause = autoplayResetOnVisibility = false;
    }
  }

  function getCurrentSlide () {
    var tem = carousel ? index - cloneCount : index;
    while (tem < 0) { tem += slideCount; }
    return tem%slideCount + 1;
  }

  function getStartIndex (ind) {
    ind = ind ? Math.max(0, Math.min(loop ? slideCount - 1 : slideCount - items, ind)) : 0;
    return carousel ? ind + cloneCount : ind;
  }

  function getAbsIndex (i) {
    if (i == null) { i = index; }

    if (carousel) { i -= cloneCount; }
    while (i < 0) { i += slideCount; }

    return Math.floor(i%slideCount);
  }

  function getCurrentNavIndex () {
    var absIndex = getAbsIndex(),
        result;

    result = navAsThumbnails ? absIndex :
      fixedWidth || autoWidth ? Math.ceil((absIndex + 1) * pages / slideCount - 1) :
          Math.floor(absIndex / items);

    // set active nav to the last one when reaches the right edge
    if (!loop && carousel && index === indexMax) { result = pages - 1; }

    return result;
  }

  function getItemsMax () {
    // fixedWidth or autoWidth while viewportMax is not available
    if (autoWidth || (fixedWidth && !viewportMax)) {
      return slideCount - 1;
    // most cases
    } else {
      var str = fixedWidth ? 'fixedWidth' : 'items',
          arr = [];

      if (fixedWidth || options[str] < slideCount) { arr.push(options[str]); }

      if (responsive) {
        for (var bp in responsive) {
          var tem = responsive[bp][str];
          if (tem && (fixedWidth || tem < slideCount)) { arr.push(tem); }
        }
      }

      if (!arr.length) { arr.push(0); }

      return Math.ceil(fixedWidth ? viewportMax / Math.min.apply(null, arr) : Math.max.apply(null, arr));
    }
  }

  function getCloneCountForLoop () {
    var itemsMax = getItemsMax(),
        result = carousel ? Math.ceil((itemsMax * 5 - slideCount)/2) : (itemsMax * 4 - slideCount);
    result = Math.max(itemsMax, result);

    return hasOption('edgePadding') ? result + 1 : result;
  }

  function getWindowWidth () {
    return win.innerWidth || doc.documentElement.clientWidth || doc.body.clientWidth;
  }

  function getInsertPosition (pos) {
    return pos === 'top' ? 'afterbegin' : 'beforeend';
  }

  function getClientWidth (el) {
    if (el == null) { return; }
    var div = doc.createElement('div'), rect, width;
    el.appendChild(div);
    rect = div.getBoundingClientRect();
    width = rect.right - rect.left;
    div.remove();
    return width || getClientWidth(el.parentNode);
  }

  function getViewportWidth () {
    var gap = edgePadding ? edgePadding * 2 - gutter : 0;
    return getClientWidth(containerParent) - gap;
  }

  function hasOption (item) {
    if (options[item]) {
      return true;
    } else {
      if (responsive) {
        for (var bp in responsive) {
          if (responsive[bp][item]) { return true; }
        }
      }
      return false;
    }
  }

  // get option:
  // fixed width: viewport, fixedWidth, gutter => items
  // others: window width => all variables
  // all: items => slideBy
  function getOption (item, ww) {
    if (ww == null) { ww = windowWidth; }

    if (item === 'items' && fixedWidth) {
      return Math.floor((viewport + gutter) / (fixedWidth + gutter)) || 1;

    } else {
      var result = options[item];

      if (responsive) {
        for (var bp in responsive) {
          // bp: convert string to number
          if (ww >= parseInt(bp)) {
            if (item in responsive[bp]) { result = responsive[bp][item]; }
          }
        }
      }

      if (item === 'slideBy' && result === 'page') { result = getOption('items'); }
      if (!carousel && (item === 'slideBy' || item === 'items')) { result = Math.floor(result); }

      return result;
    }
  }

  function getSlideMarginLeft (i) {
    return CALC ?
      CALC + '(' + i * 100 + '% / ' + slideCountNew + ')' :
      i * 100 / slideCountNew + '%';
  }

  function getInnerWrapperStyles (edgePaddingTem, gutterTem, fixedWidthTem, speedTem, autoHeightBP) {
    var str = '';

    if (edgePaddingTem !== undefined) {
      var gap = edgePaddingTem;
      if (gutterTem) { gap -= gutterTem; }
      str = horizontal ?
        'margin: 0 ' + gap + 'px 0 ' + edgePaddingTem + 'px;' :
        'margin: ' + edgePaddingTem + 'px 0 ' + gap + 'px 0;';
    } else if (gutterTem && !fixedWidthTem) {
      var gutterTemUnit = '-' + gutterTem + 'px',
          dir = horizontal ? gutterTemUnit + ' 0 0' : '0 ' + gutterTemUnit + ' 0';
      str = 'margin: 0 ' + dir + ';'
    }

    if (!carousel && autoHeightBP && TRANSITIONDURATION && speedTem) { str += getTransitionDurationStyle(speedTem); }
    return str;
  }

  function getContainerWidth (fixedWidthTem, gutterTem, itemsTem) {
    if (fixedWidthTem) {
      return (fixedWidthTem + gutterTem) * slideCountNew + 'px';
    } else {
      return CALC ?
        CALC + '(' + slideCountNew * 100 + '% / ' + itemsTem + ')' :
        slideCountNew * 100 / itemsTem + '%';
    }
  }

  function getSlideWidthStyle (fixedWidthTem, gutterTem, itemsTem) {
    var width;

    if (fixedWidthTem) {
      width = (fixedWidthTem + gutterTem) + 'px';
    } else {
      if (!carousel) { itemsTem = Math.floor(itemsTem); }
      var dividend = carousel ? slideCountNew : itemsTem;
      width = CALC ?
        CALC + '(100% / ' + dividend + ')' :
        100 / dividend + '%';
    }

    width = 'width:' + width;

    // inner slider: overwrite outer slider styles
    return nested !== 'inner' ? width + ';' : width + ' !important;';
  }

  function getSlideGutterStyle (gutterTem) {
    var str = '';

    // gutter maybe interger || 0
    // so can't use 'if (gutter)'
    if (gutterTem !== false) {
      var prop = horizontal ? 'padding-' : 'margin-',
          dir = horizontal ? 'right' : 'bottom';
      str = prop +  dir + ': ' + gutterTem + 'px;';
    }

    return str;
  }

  function getCSSPrefix (name, num) {
    var prefix = name.substring(0, name.length - num).toLowerCase();
    if (prefix) { prefix = '-' + prefix + '-'; }

    return prefix;
  }

  function getTransitionDurationStyle (speed) {
    return getCSSPrefix(TRANSITIONDURATION, 18) + 'transition-duration:' + speed / 1000 + 's;';
  }

  function getAnimationDurationStyle (speed) {
    return getCSSPrefix(ANIMATIONDURATION, 17) + 'animation-duration:' + speed / 1000 + 's;';
  }

  function initStructure () {
    var classOuter = 'tns-outer',
        classInner = 'tns-inner',
        hasGutter = hasOption('gutter');

    outerWrapper.className = classOuter;
    innerWrapper.className = classInner;
    outerWrapper.id = slideId + '-ow';
    innerWrapper.id = slideId + '-iw';

    // set container properties
    if (container.id === '') { container.id = slideId; }
    newContainerClasses += PERCENTAGELAYOUT || autoWidth ? ' tns-subpixel' : ' tns-no-subpixel';
    newContainerClasses += CALC ? ' tns-calc' : ' tns-no-calc';
    if (autoWidth) { newContainerClasses += ' tns-autowidth'; }
    newContainerClasses += ' tns-' + options.axis;
    container.className += newContainerClasses;

    // add constrain layer for carousel
    if (carousel) {
      middleWrapper = doc.createElement('div');
      middleWrapper.id = slideId + '-mw';
      middleWrapper.className = 'tns-ovh';

      outerWrapper.appendChild(middleWrapper);
      middleWrapper.appendChild(innerWrapper);
    } else {
      outerWrapper.appendChild(innerWrapper);
    }

    if (autoHeight) {
      var wp = middleWrapper ? middleWrapper : innerWrapper;
      wp.className += ' tns-ah';
    }

    containerParent.insertBefore(outerWrapper, container);
    innerWrapper.appendChild(container);

    // add id, class, aria attributes
    // before clone slides
    Object(__WEBPACK_IMPORTED_MODULE_15__helpers_forEach_js__["a" /* forEach */])(slideItems, function(item, i) {
      Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(item, 'tns-item');
      if (!item.id) { item.id = slideId + '-item' + i; }
      if (!carousel && animateNormal) { Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(item, animateNormal); }
      Object(__WEBPACK_IMPORTED_MODULE_21__helpers_setAttrs_js__["a" /* setAttrs */])(item, {
        'aria-hidden': 'true',
        'tabindex': '-1'
      });
    });

    // ## clone slides
    // carousel: n + slides + n
    // gallery:      slides + n
    if (cloneCount) {
      var fragmentBefore = doc.createDocumentFragment(),
          fragmentAfter = doc.createDocumentFragment();

      for (var j = cloneCount; j--;) {
        var num = j%slideCount,
            cloneFirst = slideItems[num].cloneNode(true);
        Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(cloneFirst, slideClonedClass);
        Object(__WEBPACK_IMPORTED_MODULE_22__helpers_removeAttrs_js__["a" /* removeAttrs */])(cloneFirst, 'id');
        fragmentAfter.insertBefore(cloneFirst, fragmentAfter.firstChild);

        if (carousel) {
          var cloneLast = slideItems[slideCount - 1 - num].cloneNode(true);
          Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(cloneLast, slideClonedClass);
          Object(__WEBPACK_IMPORTED_MODULE_22__helpers_removeAttrs_js__["a" /* removeAttrs */])(cloneLast, 'id');
          fragmentBefore.appendChild(cloneLast);
        }
      }

      container.insertBefore(fragmentBefore, container.firstChild);
      container.appendChild(fragmentAfter);
      slideItems = container.children;
    }

  }

  function initSliderTransform () {
    // ## images loaded/failed
    if (hasOption('autoHeight') || autoWidth || !horizontal) {
      var imgs = container.querySelectorAll('img');

      // add img load event listener
      Object(__WEBPACK_IMPORTED_MODULE_15__helpers_forEach_js__["a" /* forEach */])(imgs, function(img) {
        var src = img.src;

        if (!lazyload) {
          // not data img
          if (src && src.indexOf('data:image') < 0) {
            img.src = '';
            Object(__WEBPACK_IMPORTED_MODULE_30__helpers_addEvents_js__["a" /* addEvents */])(img, imgEvents);
            Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(img, 'loading');

            img.src = src;
          // data img
          } else {
            imgLoaded(img);
          }
        }
      });

      // set imgsComplete
      Object(__WEBPACK_IMPORTED_MODULE_0__helpers_raf_js__["a" /* raf */])(function(){ imgsLoadedCheck(Object(__WEBPACK_IMPORTED_MODULE_23__helpers_arrayFromNodeList_js__["a" /* arrayFromNodeList */])(imgs), function() { imgsComplete = true; }); });

      // reset imgs for auto height: check visible imgs only
      if (hasOption('autoHeight')) { imgs = getImageArray(index, Math.min(index + items - 1, slideCountNew - 1)); }

      lazyload ? initSliderTransformStyleCheck() : Object(__WEBPACK_IMPORTED_MODULE_0__helpers_raf_js__["a" /* raf */])(function(){ imgsLoadedCheck(Object(__WEBPACK_IMPORTED_MODULE_23__helpers_arrayFromNodeList_js__["a" /* arrayFromNodeList */])(imgs), initSliderTransformStyleCheck); });

    } else {
      // set container transform property
      if (carousel) { doContainerTransformSilent(); }

      // update slider tools and events
      initTools();
      initEvents();
    }
  }

  function initSliderTransformStyleCheck () {
    if (autoWidth && slideCount > 1) {
      // check styles application
      var num = loop ? index : slideCount - 1;

      (function stylesApplicationCheck() {
        var left = slideItems[num].getBoundingClientRect().left;
        var right = slideItems[num - 1].getBoundingClientRect().right;

        (Math.abs(left - right) <= 1) ?
          initSliderTransformCore() :
          setTimeout(function(){ stylesApplicationCheck() }, 16);
      })();

    } else {
      initSliderTransformCore();
    }
  }


  function initSliderTransformCore () {
    // run Fn()s which are rely on image loading
    if (!horizontal || autoWidth) {
      setSlidePositions();

      if (autoWidth) {
        rightBoundary = getRightBoundary();
        if (freezable) { freeze = getFreeze(); }
        indexMax = getIndexMax(); // <= slidePositions, rightBoundary <=
        resetVariblesWhenDisable(disable || freeze);
      } else {
        updateContentWrapperHeight();
      }
    }

    // set container transform property
    if (carousel) { doContainerTransformSilent(); }

    // update slider tools and events
    initTools();
    initEvents();
  }

  function initSheet () {
    // gallery:
    // set animation classes and left value for gallery slider
    if (!carousel) {
      for (var i = index, l = index + Math.min(slideCount, items); i < l; i++) {
        var item = slideItems[i];
        item.style.left = (i - index) * 100 / items + '%';
        Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(item, animateIn);
        Object(__WEBPACK_IMPORTED_MODULE_18__helpers_removeClass_js__["a" /* removeClass */])(item, animateNormal);
      }
    }

    // #### LAYOUT

    // ## INLINE-BLOCK VS FLOAT

    // ## PercentageLayout:
    // slides: inline-block
    // remove blank space between slides by set font-size: 0

    // ## Non PercentageLayout:
    // slides: float
    //         margin-right: -100%
    //         margin-left: ~

    // Resource: https://docs.google.com/spreadsheets/d/147up245wwTXeQYve3BRSAD4oVcvQmuGsFteJOeA5xNQ/edit?usp=sharing
    if (horizontal) {
      if (PERCENTAGELAYOUT || autoWidth) {
        Object(__WEBPACK_IMPORTED_MODULE_10__helpers_addCSSRule_js__["a" /* addCSSRule */])(sheet, '#' + slideId + ' > .tns-item', 'font-size:' + win.getComputedStyle(slideItems[0]).fontSize + ';', Object(__WEBPACK_IMPORTED_MODULE_12__helpers_getCssRulesLength_js__["a" /* getCssRulesLength */])(sheet));
        Object(__WEBPACK_IMPORTED_MODULE_10__helpers_addCSSRule_js__["a" /* addCSSRule */])(sheet, '#' + slideId, 'font-size:0;', Object(__WEBPACK_IMPORTED_MODULE_12__helpers_getCssRulesLength_js__["a" /* getCssRulesLength */])(sheet));
      } else if (carousel) {
        Object(__WEBPACK_IMPORTED_MODULE_15__helpers_forEach_js__["a" /* forEach */])(slideItems, function (slide, i) {
          slide.style.marginLeft = getSlideMarginLeft(i);
        });
      }
    }


    // ## BASIC STYLES
    if (CSSMQ) {
      // middle wrapper style
      if (TRANSITIONDURATION) {
        var str = middleWrapper && options.autoHeight ? getTransitionDurationStyle(options.speed) : '';
        Object(__WEBPACK_IMPORTED_MODULE_10__helpers_addCSSRule_js__["a" /* addCSSRule */])(sheet, '#' + slideId + '-mw', str, Object(__WEBPACK_IMPORTED_MODULE_12__helpers_getCssRulesLength_js__["a" /* getCssRulesLength */])(sheet));
      }

      // inner wrapper styles
      str = getInnerWrapperStyles(options.edgePadding, options.gutter, options.fixedWidth, options.speed, options.autoHeight);
      Object(__WEBPACK_IMPORTED_MODULE_10__helpers_addCSSRule_js__["a" /* addCSSRule */])(sheet, '#' + slideId + '-iw', str, Object(__WEBPACK_IMPORTED_MODULE_12__helpers_getCssRulesLength_js__["a" /* getCssRulesLength */])(sheet));

      // container styles
      if (carousel) {
        str = horizontal && !autoWidth ? 'width:' + getContainerWidth(options.fixedWidth, options.gutter, options.items) + ';' : '';
        if (TRANSITIONDURATION) { str += getTransitionDurationStyle(speed); }
        Object(__WEBPACK_IMPORTED_MODULE_10__helpers_addCSSRule_js__["a" /* addCSSRule */])(sheet, '#' + slideId, str, Object(__WEBPACK_IMPORTED_MODULE_12__helpers_getCssRulesLength_js__["a" /* getCssRulesLength */])(sheet));
      }

      // slide styles
      str = horizontal && !autoWidth ? getSlideWidthStyle(options.fixedWidth, options.gutter, options.items) : '';
      if (options.gutter) { str += getSlideGutterStyle(options.gutter); }
      // set gallery items transition-duration
      if (!carousel) {
        if (TRANSITIONDURATION) { str += getTransitionDurationStyle(speed); }
        if (ANIMATIONDURATION) { str += getAnimationDurationStyle(speed); }
      }
      if (str) { Object(__WEBPACK_IMPORTED_MODULE_10__helpers_addCSSRule_js__["a" /* addCSSRule */])(sheet, '#' + slideId + ' > .tns-item', str, Object(__WEBPACK_IMPORTED_MODULE_12__helpers_getCssRulesLength_js__["a" /* getCssRulesLength */])(sheet)); }

    // non CSS mediaqueries: IE8
    // ## update inner wrapper, container, slides if needed
    // set inline styles for inner wrapper & container
    // insert stylesheet (one line) for slides only (since slides are many)
    } else {
      // middle wrapper styles
      update_carousel_transition_duration();

      // inner wrapper styles
      innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth, autoHeight);

      // container styles
      if (carousel && horizontal && !autoWidth) {
        container.style.width = getContainerWidth(fixedWidth, gutter, items);
      }

      // slide styles
      var str = horizontal && !autoWidth ? getSlideWidthStyle(fixedWidth, gutter, items) : '';
      if (gutter) { str += getSlideGutterStyle(gutter); }

      // append to the last line
      if (str) { Object(__WEBPACK_IMPORTED_MODULE_10__helpers_addCSSRule_js__["a" /* addCSSRule */])(sheet, '#' + slideId + ' > .tns-item', str, Object(__WEBPACK_IMPORTED_MODULE_12__helpers_getCssRulesLength_js__["a" /* getCssRulesLength */])(sheet)); }
    }

    // ## MEDIAQUERIES
    if (responsive && CSSMQ) {
      for (var bp in responsive) {
        // bp: convert string to number
        bp = parseInt(bp);

        var opts = responsive[bp],
            str = '',
            middleWrapperStr = '',
            innerWrapperStr = '',
            containerStr = '',
            slideStr = '',
            itemsBP = !autoWidth ? getOption('items', bp) : null,
            fixedWidthBP = getOption('fixedWidth', bp),
            speedBP = getOption('speed', bp),
            edgePaddingBP = getOption('edgePadding', bp),
            autoHeightBP = getOption('autoHeight', bp),
            gutterBP = getOption('gutter', bp);

        // middle wrapper string
        if (TRANSITIONDURATION && middleWrapper && getOption('autoHeight', bp) && 'speed' in opts) {
          middleWrapperStr = '#' + slideId + '-mw{' + getTransitionDurationStyle(speedBP) + '}';
        }

        // inner wrapper string
        if ('edgePadding' in opts || 'gutter' in opts) {
          innerWrapperStr = '#' + slideId + '-iw{' + getInnerWrapperStyles(edgePaddingBP, gutterBP, fixedWidthBP, speedBP, autoHeightBP) + '}';
        }

        // container string
        if (carousel && horizontal && !autoWidth && ('fixedWidth' in opts || 'items' in opts || (fixedWidth && 'gutter' in opts))) {
          containerStr = 'width:' + getContainerWidth(fixedWidthBP, gutterBP, itemsBP) + ';';
        }
        if (TRANSITIONDURATION && 'speed' in opts) {
          containerStr += getTransitionDurationStyle(speedBP);
        }
        if (containerStr) {
          containerStr = '#' + slideId + '{' + containerStr + '}';
        }

        // slide string
        if ('fixedWidth' in opts || (fixedWidth && 'gutter' in opts) || !carousel && 'items' in opts) {
          slideStr += getSlideWidthStyle(fixedWidthBP, gutterBP, itemsBP);
        }
        if ('gutter' in opts) {
          slideStr += getSlideGutterStyle(gutterBP);
        }
        // set gallery items transition-duration
        if (!carousel && 'speed' in opts) {
          if (TRANSITIONDURATION) { slideStr += getTransitionDurationStyle(speedBP); }
          if (ANIMATIONDURATION) { slideStr += getAnimationDurationStyle(speedBP); }
        }
        if (slideStr) { slideStr = '#' + slideId + ' > .tns-item{' + slideStr + '}'; }

        // add up
        str = middleWrapperStr + innerWrapperStr + containerStr + slideStr;

        if (str) {
          sheet.insertRule('@media (min-width: ' + bp / 16 + 'em) {' + str + '}', sheet.cssRules.length);
        }
      }
    }
  }

  function initTools () {
    // == slides ==
    updateSlideStatus();

    // == live region ==
    outerWrapper.insertAdjacentHTML('afterbegin', '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + getLiveRegionStr() + '</span>  of ' + slideCount + '</div>');
    liveregionCurrent = outerWrapper.querySelector('.tns-liveregion .current');

    // == autoplayInit ==
    if (hasAutoplay) {
      var txt = autoplay ? 'stop' : 'start';
      if (autoplayButton) {
        Object(__WEBPACK_IMPORTED_MODULE_21__helpers_setAttrs_js__["a" /* setAttrs */])(autoplayButton, {'data-action': txt});
      } else if (options.autoplayButtonOutput) {
        outerWrapper.insertAdjacentHTML(getInsertPosition(options.autoplayPosition), '<button type="button" data-action="' + txt + '">' + autoplayHtmlStrings[0] + txt + autoplayHtmlStrings[1] + autoplayText[0] + '</button>');
        autoplayButton = outerWrapper.querySelector('[data-action]');
      }

      // add event
      if (autoplayButton) {
        Object(__WEBPACK_IMPORTED_MODULE_30__helpers_addEvents_js__["a" /* addEvents */])(autoplayButton, {'click': toggleAutoplay});
      }

      if (autoplay) {
        startAutoplay();
        if (autoplayHoverPause) { Object(__WEBPACK_IMPORTED_MODULE_30__helpers_addEvents_js__["a" /* addEvents */])(container, hoverEvents); }
        if (autoplayResetOnVisibility) { Object(__WEBPACK_IMPORTED_MODULE_30__helpers_addEvents_js__["a" /* addEvents */])(container, visibilityEvent); }
      }
    }

    // == navInit ==
    if (hasNav) {
      var initIndex = !carousel ? 0 : cloneCount;
      // customized nav
      // will not hide the navs in case they're thumbnails
      if (navContainer) {
        Object(__WEBPACK_IMPORTED_MODULE_21__helpers_setAttrs_js__["a" /* setAttrs */])(navContainer, {'aria-label': 'Carousel Pagination'});
        navItems = navContainer.children;
        Object(__WEBPACK_IMPORTED_MODULE_15__helpers_forEach_js__["a" /* forEach */])(navItems, function(item, i) {
          Object(__WEBPACK_IMPORTED_MODULE_21__helpers_setAttrs_js__["a" /* setAttrs */])(item, {
            'data-nav': i,
            'tabindex': '-1',
            'aria-label': navStr + (i + 1),
            'aria-controls': slideId,
          });
        });

      // generated nav
      } else {
        var navHtml = '',
            hiddenStr = navAsThumbnails ? '' : 'style="display:none"';
        for (var i = 0; i < slideCount; i++) {
          // hide nav items by default
          navHtml += '<button type="button" data-nav="' + i +'" tabindex="-1" aria-controls="' + slideId + '" ' + hiddenStr + ' aria-label="' + navStr + (i + 1) +'"></button>';
        }
        navHtml = '<div class="tns-nav" aria-label="Carousel Pagination">' + navHtml + '</div>';
        outerWrapper.insertAdjacentHTML(getInsertPosition(options.navPosition), navHtml);

        navContainer = outerWrapper.querySelector('.tns-nav');
        navItems = navContainer.children;
      }

      updateNavVisibility();

      // add transition
      if (TRANSITIONDURATION) {
        var prefix = TRANSITIONDURATION.substring(0, TRANSITIONDURATION.length - 18).toLowerCase(),
            str = 'transition: all ' + speed / 1000 + 's';

        if (prefix) {
          str = '-' + prefix + '-' + str;
        }

        Object(__WEBPACK_IMPORTED_MODULE_10__helpers_addCSSRule_js__["a" /* addCSSRule */])(sheet, '[aria-controls^=' + slideId + '-item]', str, Object(__WEBPACK_IMPORTED_MODULE_12__helpers_getCssRulesLength_js__["a" /* getCssRulesLength */])(sheet));
      }

      Object(__WEBPACK_IMPORTED_MODULE_21__helpers_setAttrs_js__["a" /* setAttrs */])(navItems[navCurrentIndex], {'aria-label': navStr + (navCurrentIndex + 1) + navStrCurrent});
      Object(__WEBPACK_IMPORTED_MODULE_22__helpers_removeAttrs_js__["a" /* removeAttrs */])(navItems[navCurrentIndex], 'tabindex');
      Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(navItems[navCurrentIndex], navActiveClass);

      // add events
      Object(__WEBPACK_IMPORTED_MODULE_30__helpers_addEvents_js__["a" /* addEvents */])(navContainer, navEvents);
    }



    // == controlsInit ==
    if (hasControls) {
      if (!controlsContainer && (!prevButton || !nextButton)) {
        outerWrapper.insertAdjacentHTML(getInsertPosition(options.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' + slideId +'">' + controlsText[0] + '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' + slideId +'">' + controlsText[1] + '</button></div>');

        controlsContainer = outerWrapper.querySelector('.tns-controls');
      }

      if (!prevButton || !nextButton) {
        prevButton = controlsContainer.children[0];
        nextButton = controlsContainer.children[1];
      }

      if (options.controlsContainer) {
        Object(__WEBPACK_IMPORTED_MODULE_21__helpers_setAttrs_js__["a" /* setAttrs */])(controlsContainer, {
          'aria-label': 'Carousel Navigation',
          'tabindex': '0'
        });
      }

      if (options.controlsContainer || (options.prevButton && options.nextButton)) {
        Object(__WEBPACK_IMPORTED_MODULE_21__helpers_setAttrs_js__["a" /* setAttrs */])([prevButton, nextButton], {
          'aria-controls': slideId,
          'tabindex': '-1',
        });
      }

      if (options.controlsContainer || (options.prevButton && options.nextButton)) {
        Object(__WEBPACK_IMPORTED_MODULE_21__helpers_setAttrs_js__["a" /* setAttrs */])(prevButton, {'data-controls' : 'prev'});
        Object(__WEBPACK_IMPORTED_MODULE_21__helpers_setAttrs_js__["a" /* setAttrs */])(nextButton, {'data-controls' : 'next'});
      }

      prevIsButton = isButton(prevButton);
      nextIsButton = isButton(nextButton);

      updateControlsStatus();

      // add events
      if (controlsContainer) {
        Object(__WEBPACK_IMPORTED_MODULE_30__helpers_addEvents_js__["a" /* addEvents */])(controlsContainer, controlsEvents);
      } else {
        Object(__WEBPACK_IMPORTED_MODULE_30__helpers_addEvents_js__["a" /* addEvents */])(prevButton, controlsEvents);
        Object(__WEBPACK_IMPORTED_MODULE_30__helpers_addEvents_js__["a" /* addEvents */])(nextButton, controlsEvents);
      }
    }

    // hide tools if needed
    disableUI();
  }

  function initEvents () {
    // add events
    if (carousel && TRANSITIONEND) {
      var eve = {};
      eve[TRANSITIONEND] = onTransitionEnd;
      Object(__WEBPACK_IMPORTED_MODULE_30__helpers_addEvents_js__["a" /* addEvents */])(container, eve);
    }

    if (touch) { Object(__WEBPACK_IMPORTED_MODULE_30__helpers_addEvents_js__["a" /* addEvents */])(container, touchEvents, options.preventScrollOnTouch); }
    if (mouseDrag) { Object(__WEBPACK_IMPORTED_MODULE_30__helpers_addEvents_js__["a" /* addEvents */])(container, dragEvents); }
    if (arrowKeys) { Object(__WEBPACK_IMPORTED_MODULE_30__helpers_addEvents_js__["a" /* addEvents */])(doc, docmentKeydownEvent); }

    if (nested === 'inner') {
      events.on('outerResized', function () {
        resizeTasks();
        events.emit('innerLoaded', info());
      });
    } else if (responsive || fixedWidth || autoWidth || autoHeight || !horizontal) {
      Object(__WEBPACK_IMPORTED_MODULE_30__helpers_addEvents_js__["a" /* addEvents */])(win, {'resize': onResize});
    }

    if (autoHeight) {
      if (nested === 'outer') {
        events.on('innerLoaded', doAutoHeight);
      } else if (!disable) { doAutoHeight(); }
    }

    doLazyLoad();
    if (disable) { disableSlider(); } else if (freeze) { freezeSlider(); }

    events.on('indexChanged', additionalUpdates);
    if (nested === 'inner') { events.emit('innerLoaded', info()); }
    if (typeof onInit === 'function') { onInit(info()); }
    isOn = true;
  }

  function destroy () {
    // sheet
    sheet.disabled = true;
    if (sheet.ownerNode) { sheet.ownerNode.remove(); }

    // remove win event listeners
    Object(__WEBPACK_IMPORTED_MODULE_31__helpers_removeEvents_js__["a" /* removeEvents */])(win, {'resize': onResize});

    // arrowKeys, controls, nav
    if (arrowKeys) { Object(__WEBPACK_IMPORTED_MODULE_31__helpers_removeEvents_js__["a" /* removeEvents */])(doc, docmentKeydownEvent); }
    if (controlsContainer) { Object(__WEBPACK_IMPORTED_MODULE_31__helpers_removeEvents_js__["a" /* removeEvents */])(controlsContainer, controlsEvents); }
    if (navContainer) { Object(__WEBPACK_IMPORTED_MODULE_31__helpers_removeEvents_js__["a" /* removeEvents */])(navContainer, navEvents); }

    // autoplay
    Object(__WEBPACK_IMPORTED_MODULE_31__helpers_removeEvents_js__["a" /* removeEvents */])(container, hoverEvents);
    Object(__WEBPACK_IMPORTED_MODULE_31__helpers_removeEvents_js__["a" /* removeEvents */])(container, visibilityEvent);
    if (autoplayButton) { Object(__WEBPACK_IMPORTED_MODULE_31__helpers_removeEvents_js__["a" /* removeEvents */])(autoplayButton, {'click': toggleAutoplay}); }
    if (autoplay) { clearInterval(autoplayTimer); }

    // container
    if (carousel && TRANSITIONEND) {
      var eve = {};
      eve[TRANSITIONEND] = onTransitionEnd;
      Object(__WEBPACK_IMPORTED_MODULE_31__helpers_removeEvents_js__["a" /* removeEvents */])(container, eve);
    }
    if (touch) { Object(__WEBPACK_IMPORTED_MODULE_31__helpers_removeEvents_js__["a" /* removeEvents */])(container, touchEvents); }
    if (mouseDrag) { Object(__WEBPACK_IMPORTED_MODULE_31__helpers_removeEvents_js__["a" /* removeEvents */])(container, dragEvents); }

    // cache Object values in options && reset HTML
    var htmlList = [containerHTML, controlsContainerHTML, prevButtonHTML, nextButtonHTML, navContainerHTML, autoplayButtonHTML];

    tnsList.forEach(function(item, i) {
      var el = item === 'container' ? outerWrapper : options[item];

      if (typeof el === 'object' && el) {
        var prevEl = el.previousElementSibling ? el.previousElementSibling : false,
            parentEl = el.parentNode;
        el.outerHTML = htmlList[i];
        options[item] = prevEl ? prevEl.nextElementSibling : parentEl.firstElementChild;
      }
    });


    // reset variables
    tnsList = animateIn = animateOut = animateDelay = animateNormal = horizontal = outerWrapper = innerWrapper = container = containerParent = containerHTML = slideItems = slideCount = breakpointZone = windowWidth = autoWidth = fixedWidth = edgePadding = gutter = viewport = items = slideBy = viewportMax = arrowKeys = speed = rewind = loop = autoHeight = sheet = lazyload = slidePositions = slideItemsOut = cloneCount = slideCountNew = hasRightDeadZone = rightBoundary = updateIndexBeforeTransform = transformAttr = transformPrefix = transformPostfix = getIndexMax = index = indexCached = indexMin = indexMax = resizeTimer = swipeAngle = moveDirectionExpected = running = onInit = events = newContainerClasses = slideId = disable = disabled = freezable = freeze = frozen = controlsEvents = navEvents = hoverEvents = visibilityEvent = docmentKeydownEvent = touchEvents = dragEvents = hasControls = hasNav = navAsThumbnails = hasAutoplay = hasTouch = hasMouseDrag = slideActiveClass = imgCompleteClass = imgEvents = imgsComplete = controls = controlsText = controlsContainer = controlsContainerHTML = prevButton = nextButton = prevIsButton = nextIsButton = nav = navContainer = navContainerHTML = navItems = pages = pagesCached = navClicked = navCurrentIndex = navCurrentIndexCached = navActiveClass = navStr = navStrCurrent = autoplay = autoplayTimeout = autoplayDirection = autoplayText = autoplayHoverPause = autoplayButton = autoplayButtonHTML = autoplayResetOnVisibility = autoplayHtmlStrings = autoplayTimer = animating = autoplayHoverPaused = autoplayUserPaused = autoplayVisibilityPaused = initPosition = lastPosition = translateInit = disX = disY = panStart = rafIndex = getDist = touch = mouseDrag = null;
    // check variables
    // [animateIn, animateOut, animateDelay, animateNormal, horizontal, outerWrapper, innerWrapper, container, containerParent, containerHTML, slideItems, slideCount, breakpointZone, windowWidth, autoWidth, fixedWidth, edgePadding, gutter, viewport, items, slideBy, viewportMax, arrowKeys, speed, rewind, loop, autoHeight, sheet, lazyload, slidePositions, slideItemsOut, cloneCount, slideCountNew, hasRightDeadZone, rightBoundary, updateIndexBeforeTransform, transformAttr, transformPrefix, transformPostfix, getIndexMax, index, indexCached, indexMin, indexMax, resizeTimer, swipeAngle, moveDirectionExpected, running, onInit, events, newContainerClasses, slideId, disable, disabled, freezable, freeze, frozen, controlsEvents, navEvents, hoverEvents, visibilityEvent, docmentKeydownEvent, touchEvents, dragEvents, hasControls, hasNav, navAsThumbnails, hasAutoplay, hasTouch, hasMouseDrag, slideActiveClass, imgCompleteClass, imgEvents, imgsComplete, controls, controlsText, controlsContainer, controlsContainerHTML, prevButton, nextButton, prevIsButton, nextIsButton, nav, navContainer, navContainerHTML, navItems, pages, pagesCached, navClicked, navCurrentIndex, navCurrentIndexCached, navActiveClass, navStr, navStrCurrent, autoplay, autoplayTimeout, autoplayDirection, autoplayText, autoplayHoverPause, autoplayButton, autoplayButtonHTML, autoplayResetOnVisibility, autoplayHtmlStrings, autoplayTimer, animating, autoplayHoverPaused, autoplayUserPaused, autoplayVisibilityPaused, initPosition, lastPosition, translateInit, disX, disY, panStart, rafIndex, getDist, touch, mouseDrag ].forEach(function(item) { if (item !== null) { console.log(item); } });

    for (var a in this) {
      if (a !== 'rebuild') { this[a] = null; }
    }
    isOn = false;
  }

// === ON RESIZE ===
  // responsive || fixedWidth || autoWidth || !horizontal
  function onResize (e) {
    Object(__WEBPACK_IMPORTED_MODULE_0__helpers_raf_js__["a" /* raf */])(function(){ resizeTasks(getEvent(e)); });
  }

  function resizeTasks (e) {
    if (!isOn) { return; }
    if (nested === 'outer') { events.emit('outerResized', info(e)); }
    windowWidth = getWindowWidth();
    var bpChanged,
        breakpointZoneTem = breakpointZone,
        needContainerTransform = false;

    if (responsive) {
      setBreakpointZone();
      bpChanged = breakpointZoneTem !== breakpointZone;
      // if (hasRightDeadZone) { needContainerTransform = true; } // *?
      if (bpChanged) { events.emit('newBreakpointStart', info(e)); }
    }

    var indChanged,
        itemsChanged,
        itemsTem = items,
        disableTem = disable,
        freezeTem = freeze,
        arrowKeysTem = arrowKeys,
        controlsTem = controls,
        navTem = nav,
        touchTem = touch,
        mouseDragTem = mouseDrag,
        autoplayTem = autoplay,
        autoplayHoverPauseTem = autoplayHoverPause,
        autoplayResetOnVisibilityTem = autoplayResetOnVisibility,
        indexTem = index;

    if (bpChanged) {
      var fixedWidthTem = fixedWidth,
          autoHeightTem = autoHeight,
          controlsTextTem = controlsText,
          centerTem = center,
          autoplayTextTem = autoplayText;

      if (!CSSMQ) {
        var gutterTem = gutter,
            edgePaddingTem = edgePadding;
      }
    }

    // get option:
    // fixed width: viewport, fixedWidth, gutter => items
    // others: window width => all variables
    // all: items => slideBy
    arrowKeys = getOption('arrowKeys');
    controls = getOption('controls');
    nav = getOption('nav');
    touch = getOption('touch');
    center = getOption('center');
    mouseDrag = getOption('mouseDrag');
    autoplay = getOption('autoplay');
    autoplayHoverPause = getOption('autoplayHoverPause');
    autoplayResetOnVisibility = getOption('autoplayResetOnVisibility');

    if (bpChanged) {
      disable = getOption('disable');
      fixedWidth = getOption('fixedWidth');
      speed = getOption('speed');
      autoHeight = getOption('autoHeight');
      controlsText = getOption('controlsText');
      autoplayText = getOption('autoplayText');
      autoplayTimeout = getOption('autoplayTimeout');

      if (!CSSMQ) {
        edgePadding = getOption('edgePadding');
        gutter = getOption('gutter');
      }
    }
    // update options
    resetVariblesWhenDisable(disable);

    viewport = getViewportWidth(); // <= edgePadding, gutter
    if ((!horizontal || autoWidth) && !disable) {
      setSlidePositions();
      if (!horizontal) {
        updateContentWrapperHeight(); // <= setSlidePositions
        needContainerTransform = true;
      }
    }
    if (fixedWidth || autoWidth) {
      rightBoundary = getRightBoundary(); // autoWidth: <= viewport, slidePositions, gutter
                                          // fixedWidth: <= viewport, fixedWidth, gutter
      indexMax = getIndexMax(); // autoWidth: <= rightBoundary, slidePositions
                                // fixedWidth: <= rightBoundary, fixedWidth, gutter
    }

    if (bpChanged || fixedWidth) {
      items = getOption('items');
      slideBy = getOption('slideBy');
      itemsChanged = items !== itemsTem;

      if (itemsChanged) {
        if (!fixedWidth && !autoWidth) { indexMax = getIndexMax(); } // <= items
        // check index before transform in case
        // slider reach the right edge then items become bigger
        updateIndex();
      }
    }

    if (bpChanged) {
      if (disable !== disableTem) {
        if (disable) {
          disableSlider();
        } else {
          enableSlider(); // <= slidePositions, rightBoundary, indexMax
        }
      }
    }

    if (freezable && (bpChanged || fixedWidth || autoWidth)) {
      freeze = getFreeze(); // <= autoWidth: slidePositions, gutter, viewport, rightBoundary
                            // <= fixedWidth: fixedWidth, gutter, rightBoundary
                            // <= others: items

      if (freeze !== freezeTem) {
        if (freeze) {
          doContainerTransform(getContainerTransformValue(getStartIndex(0)));
          freezeSlider();
        } else {
          unfreezeSlider();
          needContainerTransform = true;
        }
      }
    }

    resetVariblesWhenDisable(disable || freeze); // controls, nav, touch, mouseDrag, arrowKeys, autoplay, autoplayHoverPause, autoplayResetOnVisibility
    if (!autoplay) { autoplayHoverPause = autoplayResetOnVisibility = false; }

    if (arrowKeys !== arrowKeysTem) {
      arrowKeys ?
        Object(__WEBPACK_IMPORTED_MODULE_30__helpers_addEvents_js__["a" /* addEvents */])(doc, docmentKeydownEvent) :
        Object(__WEBPACK_IMPORTED_MODULE_31__helpers_removeEvents_js__["a" /* removeEvents */])(doc, docmentKeydownEvent);
    }
    if (controls !== controlsTem) {
      if (controls) {
        if (controlsContainer) {
          Object(__WEBPACK_IMPORTED_MODULE_25__helpers_showElement_js__["a" /* showElement */])(controlsContainer);
        } else {
          if (prevButton) { Object(__WEBPACK_IMPORTED_MODULE_25__helpers_showElement_js__["a" /* showElement */])(prevButton); }
          if (nextButton) { Object(__WEBPACK_IMPORTED_MODULE_25__helpers_showElement_js__["a" /* showElement */])(nextButton); }
        }
      } else {
        if (controlsContainer) {
          Object(__WEBPACK_IMPORTED_MODULE_24__helpers_hideElement_js__["a" /* hideElement */])(controlsContainer);
        } else {
          if (prevButton) { Object(__WEBPACK_IMPORTED_MODULE_24__helpers_hideElement_js__["a" /* hideElement */])(prevButton); }
          if (nextButton) { Object(__WEBPACK_IMPORTED_MODULE_24__helpers_hideElement_js__["a" /* hideElement */])(nextButton); }
        }
      }
    }
    if (nav !== navTem) {
      if (nav) {
        Object(__WEBPACK_IMPORTED_MODULE_25__helpers_showElement_js__["a" /* showElement */])(navContainer);
        updateNavVisibility();
      } else {
        Object(__WEBPACK_IMPORTED_MODULE_24__helpers_hideElement_js__["a" /* hideElement */])(navContainer)
      }
    }
    if (touch !== touchTem) {
      touch ?
        Object(__WEBPACK_IMPORTED_MODULE_30__helpers_addEvents_js__["a" /* addEvents */])(container, touchEvents, options.preventScrollOnTouch) :
        Object(__WEBPACK_IMPORTED_MODULE_31__helpers_removeEvents_js__["a" /* removeEvents */])(container, touchEvents);
    }
    if (mouseDrag !== mouseDragTem) {
      mouseDrag ?
        Object(__WEBPACK_IMPORTED_MODULE_30__helpers_addEvents_js__["a" /* addEvents */])(container, dragEvents) :
        Object(__WEBPACK_IMPORTED_MODULE_31__helpers_removeEvents_js__["a" /* removeEvents */])(container, dragEvents);
    }
    if (autoplay !== autoplayTem) {
      if (autoplay) {
        if (autoplayButton) { Object(__WEBPACK_IMPORTED_MODULE_25__helpers_showElement_js__["a" /* showElement */])(autoplayButton); }
        if (!animating && !autoplayUserPaused) { startAutoplay(); }
      } else {
        if (autoplayButton) { Object(__WEBPACK_IMPORTED_MODULE_24__helpers_hideElement_js__["a" /* hideElement */])(autoplayButton); }
        if (animating) { stopAutoplay(); }
      }
    }
    if (autoplayHoverPause !== autoplayHoverPauseTem) {
      autoplayHoverPause ?
        Object(__WEBPACK_IMPORTED_MODULE_30__helpers_addEvents_js__["a" /* addEvents */])(container, hoverEvents) :
        Object(__WEBPACK_IMPORTED_MODULE_31__helpers_removeEvents_js__["a" /* removeEvents */])(container, hoverEvents);
    }
    if (autoplayResetOnVisibility !== autoplayResetOnVisibilityTem) {
      autoplayResetOnVisibility ?
        Object(__WEBPACK_IMPORTED_MODULE_30__helpers_addEvents_js__["a" /* addEvents */])(doc, visibilityEvent) :
        Object(__WEBPACK_IMPORTED_MODULE_31__helpers_removeEvents_js__["a" /* removeEvents */])(doc, visibilityEvent);
    }

    if (bpChanged) {
      if (fixedWidth !== fixedWidthTem || center !== centerTem) { needContainerTransform = true; }

      if (autoHeight !== autoHeightTem) {
        if (!autoHeight) { innerWrapper.style.height = ''; }
      }

      if (controls && controlsText !== controlsTextTem) {
        prevButton.innerHTML = controlsText[0];
        nextButton.innerHTML = controlsText[1];
      }

      if (autoplayButton && autoplayText !== autoplayTextTem) {
        var i = autoplay ? 1 : 0,
            html = autoplayButton.innerHTML,
            len = html.length - autoplayTextTem[i].length;
        if (html.substring(len) === autoplayTextTem[i]) {
          autoplayButton.innerHTML = html.substring(0, len) + autoplayText[i];
        }
      }
    } else {
      if (center && (fixedWidth || autoWidth)) { needContainerTransform = true; }
    }

    if (itemsChanged || fixedWidth && !autoWidth) {
      pages = getPages();
      updateNavVisibility();
    }

    indChanged = index !== indexTem;
    if (indChanged) {
      events.emit('indexChanged', info());
      needContainerTransform = true;
    } else if (itemsChanged) {
      if (!indChanged) { additionalUpdates(); }
    } else if (fixedWidth || autoWidth) {
      doLazyLoad();
      updateSlideStatus();
      updateLiveRegion();
    }

    if (itemsChanged && !carousel) { updateGallerySlidePositions(); }

    if (!disable && !freeze) {
      // non-mediaqueries: IE8
      if (bpChanged && !CSSMQ) {
        // middle wrapper styles

        // inner wrapper styles
        if (edgePadding !== edgePaddingTem || gutter !== gutterTem) {
          innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth, speed, autoHeight);
        }

        if (horizontal) {
          // container styles
          if (carousel) {
            container.style.width = getContainerWidth(fixedWidth, gutter, items);
          }

          // slide styles
          var str = getSlideWidthStyle(fixedWidth, gutter, items) +
                    getSlideGutterStyle(gutter);

          // remove the last line and
          // add new styles
          Object(__WEBPACK_IMPORTED_MODULE_11__helpers_removeCSSRule_js__["a" /* removeCSSRule */])(sheet, Object(__WEBPACK_IMPORTED_MODULE_12__helpers_getCssRulesLength_js__["a" /* getCssRulesLength */])(sheet) - 1);
          Object(__WEBPACK_IMPORTED_MODULE_10__helpers_addCSSRule_js__["a" /* addCSSRule */])(sheet, '#' + slideId + ' > .tns-item', str, Object(__WEBPACK_IMPORTED_MODULE_12__helpers_getCssRulesLength_js__["a" /* getCssRulesLength */])(sheet));
        }
      }

      // auto height
      if (autoHeight) { doAutoHeight(); }

      if (needContainerTransform) {
        doContainerTransformSilent();
        indexCached = index;
      }
    }

    if (bpChanged) { events.emit('newBreakpointEnd', info(e)); }
  }





  // === INITIALIZATION FUNCTIONS === //
  function getFreeze () {
    if (!fixedWidth && !autoWidth) {
      var a = center ? items - (items - 1) / 2 : items;
      return  slideCount <= a;
    }

    var width = fixedWidth ? (fixedWidth + gutter) * slideCount : slidePositions[slideCount],
        vp = edgePadding ? viewport + edgePadding * 2 : viewport + gutter;

    if (center) {
      vp -= fixedWidth ? (viewport - fixedWidth) / 2 : (viewport - (slidePositions[index + 1] - slidePositions[index] - gutter)) / 2;
    }

    return width <= vp;
  }

  function setBreakpointZone () {
    breakpointZone = 0;
    for (var bp in responsive) {
      bp = parseInt(bp); // convert string to number
      if (windowWidth >= bp) { breakpointZone = bp; }
    }
  }

  // (slideBy, indexMin, indexMax) => index
  var updateIndex = (function () {
    return loop ?
      carousel ?
        // loop + carousel
        function () {
          var leftEdge = indexMin,
              rightEdge = indexMax;

          leftEdge += slideBy;
          rightEdge -= slideBy;

          // adjust edges when has edge paddings
          // or fixed-width slider with extra space on the right side
          if (edgePadding) {
            leftEdge += 1;
            rightEdge -= 1;
          } else if (fixedWidth) {
            if ((viewport + gutter)%(fixedWidth + gutter)) { rightEdge -= 1; }
          }

          if (cloneCount) {
            if (index > rightEdge) {
              index -= slideCount;
            } else if (index < leftEdge) {
              index += slideCount;
            }
          }
        } :
        // loop + gallery
        function() {
          if (index > indexMax) {
            while (index >= indexMin + slideCount) { index -= slideCount; }
          } else if (index < indexMin) {
            while (index <= indexMax - slideCount) { index += slideCount; }
          }
        } :
      // non-loop
      function() {
        index = Math.max(indexMin, Math.min(indexMax, index));
      };
  })();

  function disableUI () {
    if (!autoplay && autoplayButton) { Object(__WEBPACK_IMPORTED_MODULE_24__helpers_hideElement_js__["a" /* hideElement */])(autoplayButton); }
    if (!nav && navContainer) { Object(__WEBPACK_IMPORTED_MODULE_24__helpers_hideElement_js__["a" /* hideElement */])(navContainer); }
    if (!controls) {
      if (controlsContainer) {
        Object(__WEBPACK_IMPORTED_MODULE_24__helpers_hideElement_js__["a" /* hideElement */])(controlsContainer);
      } else {
        if (prevButton) { Object(__WEBPACK_IMPORTED_MODULE_24__helpers_hideElement_js__["a" /* hideElement */])(prevButton); }
        if (nextButton) { Object(__WEBPACK_IMPORTED_MODULE_24__helpers_hideElement_js__["a" /* hideElement */])(nextButton); }
      }
    }
  }

  function enableUI () {
    if (autoplay && autoplayButton) { Object(__WEBPACK_IMPORTED_MODULE_25__helpers_showElement_js__["a" /* showElement */])(autoplayButton); }
    if (nav && navContainer) { Object(__WEBPACK_IMPORTED_MODULE_25__helpers_showElement_js__["a" /* showElement */])(navContainer); }
    if (controls) {
      if (controlsContainer) {
        Object(__WEBPACK_IMPORTED_MODULE_25__helpers_showElement_js__["a" /* showElement */])(controlsContainer);
      } else {
        if (prevButton) { Object(__WEBPACK_IMPORTED_MODULE_25__helpers_showElement_js__["a" /* showElement */])(prevButton); }
        if (nextButton) { Object(__WEBPACK_IMPORTED_MODULE_25__helpers_showElement_js__["a" /* showElement */])(nextButton); }
      }
    }
  }

  function freezeSlider () {
    if (frozen) { return; }

    // remove edge padding from inner wrapper
    if (edgePadding) { innerWrapper.style.margin = '0px'; }

    // add class tns-transparent to cloned slides
    if (cloneCount) {
      var str = 'tns-transparent';
      for (var i = cloneCount; i--;) {
        if (carousel) { Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(slideItems[i], str); }
        Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(slideItems[slideCountNew - i - 1], str);
      }
    }

    // update tools
    disableUI();

    frozen = true;
  }

  function unfreezeSlider () {
    if (!frozen) { return; }

    // restore edge padding for inner wrapper
    // for mordern browsers
    if (edgePadding && CSSMQ) { innerWrapper.style.margin = ''; }

    // remove class tns-transparent to cloned slides
    if (cloneCount) {
      var str = 'tns-transparent';
      for (var i = cloneCount; i--;) {
        if (carousel) { Object(__WEBPACK_IMPORTED_MODULE_18__helpers_removeClass_js__["a" /* removeClass */])(slideItems[i], str); }
        Object(__WEBPACK_IMPORTED_MODULE_18__helpers_removeClass_js__["a" /* removeClass */])(slideItems[slideCountNew - i - 1], str);
      }
    }

    // update tools
    enableUI();

    frozen = false;
  }

  function disableSlider () {
    if (disabled) { return; }

    sheet.disabled = true;
    container.className = container.className.replace(newContainerClasses.substring(1), '');
    Object(__WEBPACK_IMPORTED_MODULE_22__helpers_removeAttrs_js__["a" /* removeAttrs */])(container, ['style']);
    if (loop) {
      for (var j = cloneCount; j--;) {
        if (carousel) { Object(__WEBPACK_IMPORTED_MODULE_24__helpers_hideElement_js__["a" /* hideElement */])(slideItems[j]); }
        Object(__WEBPACK_IMPORTED_MODULE_24__helpers_hideElement_js__["a" /* hideElement */])(slideItems[slideCountNew - j - 1]);
      }
    }

    // vertical slider
    if (!horizontal || !carousel) { Object(__WEBPACK_IMPORTED_MODULE_22__helpers_removeAttrs_js__["a" /* removeAttrs */])(innerWrapper, ['style']); }

    // gallery
    if (!carousel) {
      for (var i = index, l = index + slideCount; i < l; i++) {
        var item = slideItems[i];
        Object(__WEBPACK_IMPORTED_MODULE_22__helpers_removeAttrs_js__["a" /* removeAttrs */])(item, ['style']);
        Object(__WEBPACK_IMPORTED_MODULE_18__helpers_removeClass_js__["a" /* removeClass */])(item, animateIn);
        Object(__WEBPACK_IMPORTED_MODULE_18__helpers_removeClass_js__["a" /* removeClass */])(item, animateNormal);
      }
    }

    // update tools
    disableUI();

    disabled = true;
  }

  function enableSlider () {
    if (!disabled) { return; }

    sheet.disabled = false;
    container.className += newContainerClasses;
    doContainerTransformSilent();

    if (loop) {
      for (var j = cloneCount; j--;) {
        if (carousel) { Object(__WEBPACK_IMPORTED_MODULE_25__helpers_showElement_js__["a" /* showElement */])(slideItems[j]); }
        Object(__WEBPACK_IMPORTED_MODULE_25__helpers_showElement_js__["a" /* showElement */])(slideItems[slideCountNew - j - 1]);
      }
    }

    // gallery
    if (!carousel) {
      for (var i = index, l = index + slideCount; i < l; i++) {
        var item = slideItems[i],
            classN = i < index + items ? animateIn : animateNormal;
        item.style.left = (i - index) * 100 / items + '%';
        Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(item, classN);
      }
    }

    // update tools
    enableUI();

    disabled = false;
  }

  function updateLiveRegion () {
    var str = getLiveRegionStr();
    if (liveregionCurrent.innerHTML !== str) { liveregionCurrent.innerHTML = str; }
  }

  function getLiveRegionStr () {
    var arr = getVisibleSlideRange(),
        start = arr[0] + 1,
        end = arr[1] + 1;
    return start === end ? start + '' : start + ' to ' + end;
  }

  function getVisibleSlideRange (val) {
    if (val == null) { val = getContainerTransformValue(); }
    var start = index, end, rangestart, rangeend;

    // get range start, range end for autoWidth and fixedWidth
    if (center || edgePadding) {
      if (autoWidth || fixedWidth) {
        rangestart = - (parseFloat(val) + edgePadding);
        rangeend = rangestart + viewport + edgePadding * 2;
      }
    } else {
      if (autoWidth) {
        rangestart = slidePositions[index];
        rangeend = rangestart + viewport;
      }
    }

    // get start, end
    // - check auto width
    if (autoWidth) {
      slidePositions.forEach(function(point, i) {
        if (i < slideCountNew) {
          if ((center || edgePadding) && point <= rangestart + 0.5) { start = i; }
          if (rangeend - point >= 0.5) { end = i; }
        }
      });

    // - check percentage width, fixed width
    } else {

      if (fixedWidth) {
        var cell = fixedWidth + gutter;
        if (center || edgePadding) {
          start = Math.floor(rangestart/cell);
          end = Math.ceil(rangeend/cell - 1);
        } else {
          end = start + Math.ceil(viewport/cell) - 1;
        }

      } else {
        if (center || edgePadding) {
          var a = items - 1;
          if (center) {
            start -= a / 2;
            end = index + a / 2;
          } else {
            end = index + a;
          }

          if (edgePadding) {
            var b = edgePadding * items / viewport;
            start -= b;
            end += b;
          }

          start = Math.floor(start);
          end = Math.ceil(end);
        } else {
          end = start + items - 1;
        }
      }

      start = Math.max(start, 0);
      end = Math.min(end, slideCountNew - 1);
    }

    return [start, end];
  }

  function doLazyLoad () {
    if (lazyload && !disable) {
      var arg = getVisibleSlideRange();
      arg.push(lazyloadSelector);

      getImageArray.apply(null, arg).forEach(function (img) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_16__helpers_hasClass_js__["b" /* hasClass */])(img, imgCompleteClass)) {
          // stop propagation transitionend event to container
          var eve = {};
          eve[TRANSITIONEND] = function (e) { e.stopPropagation(); };
          Object(__WEBPACK_IMPORTED_MODULE_30__helpers_addEvents_js__["a" /* addEvents */])(img, eve);

          Object(__WEBPACK_IMPORTED_MODULE_30__helpers_addEvents_js__["a" /* addEvents */])(img, imgEvents);

          // update src
          img.src = Object(__WEBPACK_IMPORTED_MODULE_20__helpers_getAttr_js__["a" /* getAttr */])(img, 'data-src');

          // update srcset
          var srcset = Object(__WEBPACK_IMPORTED_MODULE_20__helpers_getAttr_js__["a" /* getAttr */])(img, 'data-srcset');
          if (srcset) { img.srcset = srcset; }

          Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(img, 'loading');
        }
      });
    }
  }

  function onImgLoaded (e) {
    imgLoaded(getTarget(e));
  }

  function onImgFailed (e) {
    imgFailed(getTarget(e));
  }

  function imgLoaded (img) {
    Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(img, 'loaded');
    imgCompleted(img);
  }

  function imgFailed (img) {
    Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(img, 'failed');
    imgCompleted(img);
  }

  function imgCompleted (img) {
    Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(img, imgCompleteClass);
    Object(__WEBPACK_IMPORTED_MODULE_18__helpers_removeClass_js__["a" /* removeClass */])(img, 'loading');
    Object(__WEBPACK_IMPORTED_MODULE_31__helpers_removeEvents_js__["a" /* removeEvents */])(img, imgEvents);
  }

  function getImageArray (start, end, imgSelector) {
    var imgs = [];
    if (!imgSelector) { imgSelector = 'img'; }

    while (start <= end) {
      Object(__WEBPACK_IMPORTED_MODULE_15__helpers_forEach_js__["a" /* forEach */])(slideItems[start].querySelectorAll(imgSelector), function (img) { imgs.push(img); });
      start++;
    }

    return imgs;
  }

  // check if all visible images are loaded
  // and update container height if it's done
  function doAutoHeight () {
    var imgs = getImageArray.apply(null, getVisibleSlideRange());
    Object(__WEBPACK_IMPORTED_MODULE_0__helpers_raf_js__["a" /* raf */])(function(){ imgsLoadedCheck(imgs, updateInnerWrapperHeight); });
  }

  function imgsLoadedCheck (imgs, cb) {
    // execute callback function if all images are complete
    if (imgsComplete) { return cb(); }

    // check image classes
    imgs.forEach(function (img, index) {
      if (!lazyload && img.complete) { imgCompleted(img); } // Check image.complete
      if (Object(__WEBPACK_IMPORTED_MODULE_16__helpers_hasClass_js__["b" /* hasClass */])(img, imgCompleteClass)) { imgs.splice(index, 1); }
    });

    // execute callback function if selected images are all complete
    if (!imgs.length) { return cb(); }

    // otherwise execute this functiona again
    Object(__WEBPACK_IMPORTED_MODULE_0__helpers_raf_js__["a" /* raf */])(function(){ imgsLoadedCheck(imgs, cb); });
  }

  function additionalUpdates () {
    doLazyLoad();
    updateSlideStatus();
    updateLiveRegion();
    updateControlsStatus();
    updateNavStatus();
  }


  function update_carousel_transition_duration () {
    if (carousel && autoHeight) {
      middleWrapper.style[TRANSITIONDURATION] = speed / 1000 + 's';
    }
  }

  function getMaxSlideHeight (slideStart, slideRange) {
    var heights = [];
    for (var i = slideStart, l = Math.min(slideStart + slideRange, slideCountNew); i < l; i++) {
      heights.push(slideItems[i].offsetHeight);
    }

    return Math.max.apply(null, heights);
  }

  // update inner wrapper height
  // 1. get the max-height of the visible slides
  // 2. set transitionDuration to speed
  // 3. update inner wrapper height to max-height
  // 4. set transitionDuration to 0s after transition done
  function updateInnerWrapperHeight () {
    var maxHeight = autoHeight ? getMaxSlideHeight(index, items) : getMaxSlideHeight(cloneCount, slideCount),
        wp = middleWrapper ? middleWrapper : innerWrapper;

    if (wp.style.height !== maxHeight) { wp.style.height = maxHeight + 'px'; }
  }

  // get the distance from the top edge of the first slide to each slide
  // (init) => slidePositions
  function setSlidePositions () {
    slidePositions = [0];
    var attr = horizontal ? 'left' : 'top',
        attr2 = horizontal ? 'right' : 'bottom',
        base = slideItems[0].getBoundingClientRect()[attr];

    Object(__WEBPACK_IMPORTED_MODULE_15__helpers_forEach_js__["a" /* forEach */])(slideItems, function(item, i) {
      // skip the first slide
      if (i) { slidePositions.push(item.getBoundingClientRect()[attr] - base); }
      // add the end edge
      if (i === slideCountNew - 1) { slidePositions.push(item.getBoundingClientRect()[attr2] - base); }
    });
  }

  // update slide
  function updateSlideStatus () {
    var range = getVisibleSlideRange(),
        start = range[0],
        end = range[1];

    Object(__WEBPACK_IMPORTED_MODULE_15__helpers_forEach_js__["a" /* forEach */])(slideItems, function(item, i) {
      // show slides
      if (i >= start && i <= end) {
        if (Object(__WEBPACK_IMPORTED_MODULE_19__helpers_hasAttr_js__["a" /* hasAttr */])(item, 'aria-hidden')) {
          Object(__WEBPACK_IMPORTED_MODULE_22__helpers_removeAttrs_js__["a" /* removeAttrs */])(item, ['aria-hidden', 'tabindex']);
          Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(item, slideActiveClass);
        }
      // hide slides
      } else {
        if (!Object(__WEBPACK_IMPORTED_MODULE_19__helpers_hasAttr_js__["a" /* hasAttr */])(item, 'aria-hidden')) {
          Object(__WEBPACK_IMPORTED_MODULE_21__helpers_setAttrs_js__["a" /* setAttrs */])(item, {
            'aria-hidden': 'true',
            'tabindex': '-1'
          });
          Object(__WEBPACK_IMPORTED_MODULE_18__helpers_removeClass_js__["a" /* removeClass */])(item, slideActiveClass);
        }
      }
    });
  }

  // gallery: update slide position
  function updateGallerySlidePositions () {
    var l = index + Math.min(slideCount, items);
    for (var i = slideCountNew; i--;) {
      var item = slideItems[i];

      if (i >= index && i < l) {
        // add transitions to visible slides when adjusting their positions
        Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(item, 'tns-moving');

        item.style.left = (i - index) * 100 / items + '%';
        Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(item, animateIn);
        Object(__WEBPACK_IMPORTED_MODULE_18__helpers_removeClass_js__["a" /* removeClass */])(item, animateNormal);
      } else if (item.style.left) {
        item.style.left = '';
        Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(item, animateNormal);
        Object(__WEBPACK_IMPORTED_MODULE_18__helpers_removeClass_js__["a" /* removeClass */])(item, animateIn);
      }

      // remove outlet animation
      Object(__WEBPACK_IMPORTED_MODULE_18__helpers_removeClass_js__["a" /* removeClass */])(item, animateOut);
    }

    // removing '.tns-moving'
    setTimeout(function() {
      Object(__WEBPACK_IMPORTED_MODULE_15__helpers_forEach_js__["a" /* forEach */])(slideItems, function(el) {
        Object(__WEBPACK_IMPORTED_MODULE_18__helpers_removeClass_js__["a" /* removeClass */])(el, 'tns-moving');
      });
    }, 300);
  }

  // set tabindex on Nav
  function updateNavStatus () {
    // get current nav
    if (nav) {
      navCurrentIndex = navClicked >= 0 ? navClicked : getCurrentNavIndex();
      navClicked = -1;

      if (navCurrentIndex !== navCurrentIndexCached) {
        var navPrev = navItems[navCurrentIndexCached],
            navCurrent = navItems[navCurrentIndex];

        Object(__WEBPACK_IMPORTED_MODULE_21__helpers_setAttrs_js__["a" /* setAttrs */])(navPrev, {
          'tabindex': '-1',
          'aria-label': navStr + (navCurrentIndexCached + 1)
        });
        Object(__WEBPACK_IMPORTED_MODULE_18__helpers_removeClass_js__["a" /* removeClass */])(navPrev, navActiveClass);

        Object(__WEBPACK_IMPORTED_MODULE_21__helpers_setAttrs_js__["a" /* setAttrs */])(navCurrent, {'aria-label': navStr + (navCurrentIndex + 1) + navStrCurrent});
        Object(__WEBPACK_IMPORTED_MODULE_22__helpers_removeAttrs_js__["a" /* removeAttrs */])(navCurrent, 'tabindex');
        Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(navCurrent, navActiveClass);

        navCurrentIndexCached = navCurrentIndex;
      }
    }
  }

  function getLowerCaseNodeName (el) {
    return el.nodeName.toLowerCase();
  }

  function isButton (el) {
    return getLowerCaseNodeName(el) === 'button';
  }

  function isAriaDisabled (el) {
    return el.getAttribute('aria-disabled') === 'true';
  }

  function disEnableElement (isButton, el, val) {
    if (isButton) {
      el.disabled = val;
    } else {
      el.setAttribute('aria-disabled', val.toString());
    }
  }

  // set 'disabled' to true on controls when reach the edges
  function updateControlsStatus () {
    if (!controls || rewind || loop) { return; }

    var prevDisabled = (prevIsButton) ? prevButton.disabled : isAriaDisabled(prevButton),
        nextDisabled = (nextIsButton) ? nextButton.disabled : isAriaDisabled(nextButton),
        disablePrev = (index <= indexMin) ? true : false,
        disableNext = (!rewind && index >= indexMax) ? true : false;

    if (disablePrev && !prevDisabled) {
      disEnableElement(prevIsButton, prevButton, true);
    }
    if (!disablePrev && prevDisabled) {
      disEnableElement(prevIsButton, prevButton, false);
    }
    if (disableNext && !nextDisabled) {
      disEnableElement(nextIsButton, nextButton, true);
    }
    if (!disableNext && nextDisabled) {
      disEnableElement(nextIsButton, nextButton, false);
    }
  }

  // set duration
  function resetDuration (el, str) {
    if (TRANSITIONDURATION) { el.style[TRANSITIONDURATION] = str; }
  }

  function getSliderWidth () {
    return fixedWidth ? (fixedWidth + gutter) * slideCountNew : slidePositions[slideCountNew];
  }

  function getCenterGap (num) {
    if (num == null) { num = index; }

    var gap = edgePadding ? gutter : 0;
    return autoWidth ? ((viewport - gap) - (slidePositions[num + 1] - slidePositions[num] - gutter))/2 :
      fixedWidth ? (viewport - fixedWidth) / 2 :
        (items - 1) / 2;
  }

  function getRightBoundary () {
    var gap = edgePadding ? gutter : 0,
        result = (viewport + gap) - getSliderWidth();

    if (center && !loop) {
      result = fixedWidth ? - (fixedWidth + gutter) * (slideCountNew - 1) - getCenterGap() :
        getCenterGap(slideCountNew - 1) - slidePositions[slideCountNew - 1];
    }
    if (result > 0) { result = 0; }

    return result;
  }

  function getContainerTransformValue (num) {
    if (num == null) { num = index; }

    var val;
    if (horizontal && !autoWidth) {
      if (fixedWidth) {
        val = - (fixedWidth + gutter) * num;
        if (center) { val += getCenterGap(); }
      } else {
        var denominator = TRANSFORM ? slideCountNew : items;
        if (center) { num -= getCenterGap(); }
        val = - num * 100 / denominator;
      }
    } else {
      val = - slidePositions[num];
      if (center && autoWidth) {
        val += getCenterGap();
      }
    }

    if (hasRightDeadZone) { val = Math.max(val, rightBoundary); }

    val += (horizontal && !autoWidth && !fixedWidth) ? '%' : 'px';

    return val;
  }

  function doContainerTransformSilent (val) {
    resetDuration(container, '0s');
    doContainerTransform(val);
  }

  function doContainerTransform (val) {
    if (val == null) { val = getContainerTransformValue(); }
    container.style[transformAttr] = transformPrefix + val + transformPostfix;
  }

  function animateSlide (number, classOut, classIn, isOut) {
    var l = number + items;
    if (!loop) { l = Math.min(l, slideCountNew); }

    for (var i = number; i < l; i++) {
        var item = slideItems[i];

      // set item positions
      if (!isOut) { item.style.left = (i - index) * 100 / items + '%'; }

      if (animateDelay && TRANSITIONDELAY) {
        item.style[TRANSITIONDELAY] = item.style[ANIMATIONDELAY] = animateDelay * (i - number) / 1000 + 's';
      }
      Object(__WEBPACK_IMPORTED_MODULE_18__helpers_removeClass_js__["a" /* removeClass */])(item, classOut);
      Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(item, classIn);

      if (isOut) { slideItemsOut.push(item); }
    }
  }

  // make transfer after click/drag:
  // 1. change 'transform' property for mordern browsers
  // 2. change 'left' property for legacy browsers
  var transformCore = (function () {
    return carousel ?
      function () {
        resetDuration(container, '');
        if (TRANSITIONDURATION || !speed) {
          // for morden browsers with non-zero duration or
          // zero duration for all browsers
          doContainerTransform();
          // run fallback function manually
          // when duration is 0 / container is hidden
          if (!speed || !Object(__WEBPACK_IMPORTED_MODULE_26__helpers_isVisible_js__["a" /* isVisible */])(container)) { onTransitionEnd(); }

        } else {
          // for old browser with non-zero duration
          Object(__WEBPACK_IMPORTED_MODULE_33__helpers_jsTransform_js__["a" /* jsTransform */])(container, transformAttr, transformPrefix, transformPostfix, getContainerTransformValue(), speed, onTransitionEnd);
        }

        if (!horizontal) { updateContentWrapperHeight(); }
      } :
      function () {
        slideItemsOut = [];

        var eve = {};
        eve[TRANSITIONEND] = eve[ANIMATIONEND] = onTransitionEnd;
        Object(__WEBPACK_IMPORTED_MODULE_31__helpers_removeEvents_js__["a" /* removeEvents */])(slideItems[indexCached], eve);
        Object(__WEBPACK_IMPORTED_MODULE_30__helpers_addEvents_js__["a" /* addEvents */])(slideItems[index], eve);

        animateSlide(indexCached, animateIn, animateOut, true);
        animateSlide(index, animateNormal, animateIn);

        // run fallback function manually
        // when transition or animation not supported / duration is 0
        if (!TRANSITIONEND || !ANIMATIONEND || !speed || !Object(__WEBPACK_IMPORTED_MODULE_26__helpers_isVisible_js__["a" /* isVisible */])(container)) { onTransitionEnd(); }
      };
  })();

  function render (e, sliderMoved) {
    if (updateIndexBeforeTransform) { updateIndex(); }

    // render when slider was moved (touch or drag) even though index may not change
    if (index !== indexCached || sliderMoved) {
      // events
      events.emit('indexChanged', info());
      events.emit('transitionStart', info());
      if (autoHeight) { doAutoHeight(); }

      // pause autoplay when click or keydown from user
      if (animating && e && ['click', 'keydown'].indexOf(e.type) >= 0) { stopAutoplay(); }

      running = true;
      transformCore();
    }
  }

  /*
   * Transfer prefixed properties to the same format
   * CSS: -Webkit-Transform => webkittransform
   * JS: WebkitTransform => webkittransform
   * @param {string} str - property
   *
   */
  function strTrans (str) {
    return str.toLowerCase().replace(/-/g, '');
  }

  // AFTER TRANSFORM
  // Things need to be done after a transfer:
  // 1. check index
  // 2. add classes to visible slide
  // 3. disable controls buttons when reach the first/last slide in non-loop slider
  // 4. update nav status
  // 5. lazyload images
  // 6. update container height
  function onTransitionEnd (event) {
    // check running on gallery mode
    // make sure trantionend/animationend events run only once
    if (carousel || running) {
      events.emit('transitionEnd', info(event));

      if (!carousel && slideItemsOut.length > 0) {
        for (var i = 0; i < slideItemsOut.length; i++) {
          var item = slideItemsOut[i];
          // set item positions
          item.style.left = '';

          if (ANIMATIONDELAY && TRANSITIONDELAY) {
            item.style[ANIMATIONDELAY] = '';
            item.style[TRANSITIONDELAY] = '';
          }
          Object(__WEBPACK_IMPORTED_MODULE_18__helpers_removeClass_js__["a" /* removeClass */])(item, animateOut);
          Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(item, animateNormal);
        }
      }

      /* update slides, nav, controls after checking ...
       * => legacy browsers who don't support 'event'
       *    have to check event first, otherwise event.target will cause an error
       * => or 'gallery' mode:
       *   + event target is slide item
       * => or 'carousel' mode:
       *   + event target is container,
       *   + event.property is the same with transform attribute
       */
      if (!event ||
          !carousel && event.target.parentNode === container ||
          event.target === container && strTrans(event.propertyName) === strTrans(transformAttr)) {

        if (!updateIndexBeforeTransform) {
          var indexTem = index;
          updateIndex();
          if (index !== indexTem) {
            events.emit('indexChanged', info());

            doContainerTransformSilent();
          }
        }

        if (nested === 'inner') { events.emit('innerLoaded', info()); }
        running = false;
        indexCached = index;
      }
    }

  }

  // # ACTIONS
  function goTo (targetIndex, e) {
    if (freeze) { return; }

    // prev slideBy
    if (targetIndex === 'prev') {
      onControlsClick(e, -1);

    // next slideBy
    } else if (targetIndex === 'next') {
      onControlsClick(e, 1);

    // go to exact slide
    } else {
      if (running) {
        if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }
      }

      var absIndex = getAbsIndex(),
          indexGap = 0;

      if (targetIndex === 'first') {
        indexGap = - absIndex;
      } else if (targetIndex === 'last') {
        indexGap = carousel ? slideCount - items - absIndex : slideCount - 1 - absIndex;
      } else {
        if (typeof targetIndex !== 'number') { targetIndex = parseInt(targetIndex); }

        if (!isNaN(targetIndex)) {
          // from directly called goTo function
          if (!e) { targetIndex = Math.max(0, Math.min(slideCount - 1, targetIndex)); }

          indexGap = targetIndex - absIndex;
        }
      }

      // gallery: make sure new page won't overlap with current page
      if (!carousel && indexGap && Math.abs(indexGap) < items) {
        var factor = indexGap > 0 ? 1 : -1;
        indexGap += (index + indexGap - slideCount) >= indexMin ? slideCount * factor : slideCount * 2 * factor * -1;
      }

      index += indexGap;

      // make sure index is in range
      if (carousel && loop) {
        if (index < indexMin) { index += slideCount; }
        if (index > indexMax) { index -= slideCount; }
      }

      // if index is changed, start rendering
      if (getAbsIndex(index) !== getAbsIndex(indexCached)) {
        render(e);
      }

    }
  }

  // on controls click
  function onControlsClick (e, dir) {
    if (running) {
      if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }
    }
    var passEventObject;

    if (!dir) {
      e = getEvent(e);
      var target = getTarget(e);

      while (target !== controlsContainer && [prevButton, nextButton].indexOf(target) < 0) { target = target.parentNode; }

      var targetIn = [prevButton, nextButton].indexOf(target);
      if (targetIn >= 0) {
        passEventObject = true;
        dir = targetIn === 0 ? -1 : 1;
      }
    }

    if (rewind) {
      if (index === indexMin && dir === -1) {
        goTo('last', e);
        return;
      } else if (index === indexMax && dir === 1) {
        goTo('first', e);
        return;
      }
    }

    if (dir) {
      index += slideBy * dir;
      if (autoWidth) { index = Math.floor(index); }
      // pass e when click control buttons or keydown
      render((passEventObject || (e && e.type === 'keydown')) ? e : null);
    }
  }

  // on nav click
  function onNavClick (e) {
    if (running) {
      if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }
    }

    e = getEvent(e);
    var target = getTarget(e), navIndex;

    // find the clicked nav item
    while (target !== navContainer && !Object(__WEBPACK_IMPORTED_MODULE_19__helpers_hasAttr_js__["a" /* hasAttr */])(target, 'data-nav')) { target = target.parentNode; }
    if (Object(__WEBPACK_IMPORTED_MODULE_19__helpers_hasAttr_js__["a" /* hasAttr */])(target, 'data-nav')) {
      var navIndex = navClicked = Number(Object(__WEBPACK_IMPORTED_MODULE_20__helpers_getAttr_js__["a" /* getAttr */])(target, 'data-nav')),
          targetIndexBase = fixedWidth || autoWidth ? navIndex * slideCount / pages : navIndex * items,
          targetIndex = navAsThumbnails ? navIndex : Math.min(Math.ceil(targetIndexBase), slideCount - 1);
      goTo(targetIndex, e);

      if (navCurrentIndex === navIndex) {
        if (animating) { stopAutoplay(); }
        navClicked = -1; // reset navClicked
      }
    }
  }

  // autoplay functions
  function setAutoplayTimer () {
    autoplayTimer = setInterval(function () {
      onControlsClick(null, autoplayDirection);
    }, autoplayTimeout);

    animating = true;
  }

  function stopAutoplayTimer () {
    clearInterval(autoplayTimer);
    animating = false;
  }

  function updateAutoplayButton (action, txt) {
    Object(__WEBPACK_IMPORTED_MODULE_21__helpers_setAttrs_js__["a" /* setAttrs */])(autoplayButton, {'data-action': action});
    autoplayButton.innerHTML = autoplayHtmlStrings[0] + action + autoplayHtmlStrings[1] + txt;
  }

  function startAutoplay () {
    setAutoplayTimer();
    if (autoplayButton) { updateAutoplayButton('stop', autoplayText[1]); }
  }

  function stopAutoplay () {
    stopAutoplayTimer();
    if (autoplayButton) { updateAutoplayButton('start', autoplayText[0]); }
  }

  // programaitcally play/pause the slider
  function play () {
    if (autoplay && !animating) {
      startAutoplay();
      autoplayUserPaused = false;
    }
  }
  function pause () {
    if (animating) {
      stopAutoplay();
      autoplayUserPaused = true;
    }
  }

  function toggleAutoplay () {
    if (animating) {
      stopAutoplay();
      autoplayUserPaused = true;
    } else {
      startAutoplay();
      autoplayUserPaused = false;
    }
  }

  function onVisibilityChange () {
    if (doc.hidden) {
      if (animating) {
        stopAutoplayTimer();
        autoplayVisibilityPaused = true;
      }
    } else if (autoplayVisibilityPaused) {
      setAutoplayTimer();
      autoplayVisibilityPaused = false;
    }
  }

  function mouseoverPause () {
    if (animating) {
      stopAutoplayTimer();
      autoplayHoverPaused = true;
    }
  }

  function mouseoutRestart () {
    if (autoplayHoverPaused) {
      setAutoplayTimer();
      autoplayHoverPaused = false;
    }
  }

  // keydown events on document
  function onDocumentKeydown (e) {
    e = getEvent(e);
    var keyIndex = [KEYS.LEFT, KEYS.RIGHT].indexOf(e.keyCode);

    if (keyIndex >= 0) {
      onControlsClick(e, keyIndex === 0 ? -1 : 1);
    }
  }

  // on key control
  function onControlsKeydown (e) {
    e = getEvent(e);
    var keyIndex = [KEYS.LEFT, KEYS.RIGHT].indexOf(e.keyCode);

    if (keyIndex >= 0) {
      if (keyIndex === 0) {
        if (!prevButton.disabled) { onControlsClick(e, -1); }
      } else if (!nextButton.disabled) {
        onControlsClick(e, 1);
      }
    }
  }

  // set focus
  function setFocus (el) {
    el.focus();
  }

  // on key nav
  function onNavKeydown (e) {
    e = getEvent(e);
    var curElement = doc.activeElement;
    if (!Object(__WEBPACK_IMPORTED_MODULE_19__helpers_hasAttr_js__["a" /* hasAttr */])(curElement, 'data-nav')) { return; }

    // var code = e.keyCode,
    var keyIndex = [KEYS.LEFT, KEYS.RIGHT, KEYS.ENTER, KEYS.SPACE].indexOf(e.keyCode),
        navIndex = Number(Object(__WEBPACK_IMPORTED_MODULE_20__helpers_getAttr_js__["a" /* getAttr */])(curElement, 'data-nav'));

    if (keyIndex >= 0) {
      if (keyIndex === 0) {
        if (navIndex > 0) { setFocus(navItems[navIndex - 1]); }
      } else if (keyIndex === 1) {
        if (navIndex < pages - 1) { setFocus(navItems[navIndex + 1]); }
      } else {
        navClicked = navIndex;
        goTo(navIndex, e);
      }
    }
  }

  function getEvent (e) {
    e = e || win.event;
    return isTouchEvent(e) ? e.changedTouches[0] : e;
  }
  function getTarget (e) {
    return e.target || win.event.srcElement;
  }

  function isTouchEvent (e) {
    return e.type.indexOf('touch') >= 0;
  }

  function preventDefaultBehavior (e) {
    e.preventDefault ? e.preventDefault() : e.returnValue = false;
  }

  function getMoveDirectionExpected () {
    return Object(__WEBPACK_IMPORTED_MODULE_14__helpers_getTouchDirection_js__["a" /* getTouchDirection */])(Object(__WEBPACK_IMPORTED_MODULE_13__helpers_toDegree_js__["a" /* toDegree */])(lastPosition.y - initPosition.y, lastPosition.x - initPosition.x), swipeAngle) === options.axis;
  }

  function onPanStart (e) {
    if (running) {
      if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }
    }

    if (autoplay && animating) { stopAutoplayTimer(); }

    panStart = true;
    if (rafIndex) {
      Object(__WEBPACK_IMPORTED_MODULE_1__helpers_caf_js__["a" /* caf */])(rafIndex);
      rafIndex = null;
    }

    var $ = getEvent(e);
    events.emit(isTouchEvent(e) ? 'touchStart' : 'dragStart', info(e));

    if (!isTouchEvent(e) && ['img', 'a'].indexOf(getLowerCaseNodeName(getTarget(e))) >= 0) {
      preventDefaultBehavior(e);
    }

    lastPosition.x = initPosition.x = $.clientX;
    lastPosition.y = initPosition.y = $.clientY;
    if (carousel) {
      translateInit = parseFloat(container.style[transformAttr].replace(transformPrefix, ''));
      resetDuration(container, '0s');
    }
  }

  function onPanMove (e) {
    if (panStart) {
      var $ = getEvent(e);
      lastPosition.x = $.clientX;
      lastPosition.y = $.clientY;

      if (carousel) {
        if (!rafIndex) { rafIndex = Object(__WEBPACK_IMPORTED_MODULE_0__helpers_raf_js__["a" /* raf */])(function(){ panUpdate(e); }); }
      } else {
        if (moveDirectionExpected === '?') { moveDirectionExpected = getMoveDirectionExpected(); }
        if (moveDirectionExpected) { preventScroll = true; }
      }

      if ((typeof e.cancelable !== 'boolean' || e.cancelable) && preventScroll) {
        e.preventDefault();
      }
    }
  }

  function panUpdate (e) {
    if (!moveDirectionExpected) {
      panStart = false;
      return;
    }
    Object(__WEBPACK_IMPORTED_MODULE_1__helpers_caf_js__["a" /* caf */])(rafIndex);
    if (panStart) { rafIndex = Object(__WEBPACK_IMPORTED_MODULE_0__helpers_raf_js__["a" /* raf */])(function(){ panUpdate(e); }); }

    if (moveDirectionExpected === '?') { moveDirectionExpected = getMoveDirectionExpected(); }
    if (moveDirectionExpected) {
      if (!preventScroll && isTouchEvent(e)) { preventScroll = true; }

      try {
        if (e.type) { events.emit(isTouchEvent(e) ? 'touchMove' : 'dragMove', info(e)); }
      } catch(err) {}

      var x = translateInit,
          dist = getDist(lastPosition, initPosition);
      if (!horizontal || fixedWidth || autoWidth) {
        x += dist;
        x += 'px';
      } else {
        var percentageX = TRANSFORM ? dist * items * 100 / ((viewport + gutter) * slideCountNew): dist * 100 / (viewport + gutter);
        x += percentageX;
        x += '%';
      }

      container.style[transformAttr] = transformPrefix + x + transformPostfix;
    }
  }

  function onPanEnd (e) {
    if (panStart) {
      if (rafIndex) {
        Object(__WEBPACK_IMPORTED_MODULE_1__helpers_caf_js__["a" /* caf */])(rafIndex);
        rafIndex = null;
      }
      if (carousel) { resetDuration(container, ''); }
      panStart = false;

      var $ = getEvent(e);
      lastPosition.x = $.clientX;
      lastPosition.y = $.clientY;
      var dist = getDist(lastPosition, initPosition);

      if (Math.abs(dist)) {
        // drag vs click
        if (!isTouchEvent(e)) {
          // prevent "click"
          var target = getTarget(e);
          Object(__WEBPACK_IMPORTED_MODULE_30__helpers_addEvents_js__["a" /* addEvents */])(target, {'click': function preventClick (e) {
            preventDefaultBehavior(e);
            Object(__WEBPACK_IMPORTED_MODULE_31__helpers_removeEvents_js__["a" /* removeEvents */])(target, {'click': preventClick});
          }});
        }

        if (carousel) {
          rafIndex = Object(__WEBPACK_IMPORTED_MODULE_0__helpers_raf_js__["a" /* raf */])(function() {
            if (horizontal && !autoWidth) {
              var indexMoved = - dist * items / (viewport + gutter);
              indexMoved = dist > 0 ? Math.floor(indexMoved) : Math.ceil(indexMoved);
              index += indexMoved;
            } else {
              var moved = - (translateInit + dist);
              if (moved <= 0) {
                index = indexMin;
              } else if (moved >= slidePositions[slideCountNew - 1]) {
                index = indexMax;
              } else {
                var i = 0;
                while (i < slideCountNew && moved >= slidePositions[i]) {
                  index = i;
                  if (moved > slidePositions[i] && dist < 0) { index += 1; }
                  i++;
                }
              }
            }

            render(e, dist);
            events.emit(isTouchEvent(e) ? 'touchEnd' : 'dragEnd', info(e));
          });
        } else {
          if (moveDirectionExpected) {
            onControlsClick(e, dist > 0 ? -1 : 1);
          }
        }
      }
    }

    // reset
    if (options.preventScrollOnTouch === 'auto') { preventScroll = false; }
    if (swipeAngle) { moveDirectionExpected = '?'; }
    if (autoplay && !animating) { setAutoplayTimer(); }
  }

  // === RESIZE FUNCTIONS === //
  // (slidePositions, index, items) => vertical_conentWrapper.height
  function updateContentWrapperHeight () {
    var wp = middleWrapper ? middleWrapper : innerWrapper;
    wp.style.height = slidePositions[index + items] - slidePositions[index] + 'px';
  }

  function getPages () {
    var rough = fixedWidth ? (fixedWidth + gutter) * slideCount / viewport : slideCount / items;
    return Math.min(Math.ceil(rough), slideCount);
  }

  /*
   * 1. update visible nav items list
   * 2. add "hidden" attributes to previous visible nav items
   * 3. remove "hidden" attrubutes to new visible nav items
   */
  function updateNavVisibility () {
    if (!nav || navAsThumbnails) { return; }

    if (pages !== pagesCached) {
      var min = pagesCached,
          max = pages,
          fn = __WEBPACK_IMPORTED_MODULE_25__helpers_showElement_js__["a" /* showElement */];

      if (pagesCached > pages) {
        min = pages;
        max = pagesCached;
        fn = __WEBPACK_IMPORTED_MODULE_24__helpers_hideElement_js__["a" /* hideElement */];
      }

      while (min < max) {
        fn(navItems[min]);
        min++;
      }

      // cache pages
      pagesCached = pages;
    }
  }

  function info (e) {
    return {
      container: container,
      slideItems: slideItems,
      navContainer: navContainer,
      navItems: navItems,
      controlsContainer: controlsContainer,
      hasControls: hasControls,
      prevButton: prevButton,
      nextButton: nextButton,
      items: items,
      slideBy: slideBy,
      cloneCount: cloneCount,
      slideCount: slideCount,
      slideCountNew: slideCountNew,
      index: index,
      indexCached: indexCached,
      displayIndex: getCurrentSlide(),
      navCurrentIndex: navCurrentIndex,
      navCurrentIndexCached: navCurrentIndexCached,
      pages: pages,
      pagesCached: pagesCached,
      sheet: sheet,
      isOn: isOn,
      event: e || {},
    };
  }

  return {
    version: '2.9.4',
    getInfo: info,
    events: events,
    goTo: goTo,
    play: play,
    pause: pause,
    isOn: isOn,
    updateSliderHeight: updateInnerWrapperHeight,
    refresh: initSliderTransform,
    destroy: destroy,
    rebuild: function() {
      return tns(Object(__WEBPACK_IMPORTED_MODULE_2__helpers_extend_js__["a" /* extend */])(options, optionsElements));
    }
  };
};


/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return caf; });
var win = window;

var caf = win.cancelAnimationFrame
  || win.mozCancelAnimationFrame
  || function(id){ clearTimeout(id); };


/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = extend;
function extend() {
  var obj, name, copy,
      target = arguments[0] || {},
      i = 1,
      length = arguments.length;

  for (; i < length; i++) {
    if ((obj = arguments[i]) !== null) {
      for (name in obj) {
        copy = obj[name];

        if (target === copy) {
          continue;
        } else if (copy !== undefined) {
          target[name] = copy;
        }
      }
    }
  }
  return target;
}

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = checkStorageValue;
function checkStorageValue (value) {
  return ['true', 'false'].indexOf(value) >= 0 ? JSON.parse(value) : value;
}

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setLocalStorage;
function setLocalStorage(storage, key, value, access) {
  if (access) {
    try { storage.setItem(key, value); } catch (e) {}
  }
  return value;
}

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getSlideId;
function getSlideId() {
  var id = window.tnsId;
  window.tnsId = !id ? 1 : id + 1;
  
  return 'tns' + window.tnsId;
}

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = calc;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getBody_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__setFakeBody_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resetFakeBody_js__ = __webpack_require__(17);
// get css-calc 
// @return - false | calc | -webkit-calc | -moz-calc
// @usage - var calc = getCalc(); 




function calc() {
  var doc = document, 
      body = Object(__WEBPACK_IMPORTED_MODULE_0__getBody_js__["a" /* getBody */])(),
      docOverflow = Object(__WEBPACK_IMPORTED_MODULE_1__setFakeBody_js__["a" /* setFakeBody */])(body),
      div = doc.createElement('div'), 
      result = false;

  body.appendChild(div);
  try {
    var str = '(10px * 10)',
        vals = ['calc' + str, '-moz-calc' + str, '-webkit-calc' + str],
        val;
    for (var i = 0; i < 3; i++) {
      val = vals[i];
      div.style.width = val;
      if (div.offsetWidth === 100) { 
        result = val.replace(str, ''); 
        break;
      }
    }
  } catch (e) {}
  
  body.fake ? Object(__WEBPACK_IMPORTED_MODULE_2__resetFakeBody_js__["a" /* resetFakeBody */])(body, docOverflow) : div.remove();

  return result;
}

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = percentageLayout;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getBody_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__setFakeBody_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resetFakeBody_js__ = __webpack_require__(17);
// get subpixel support value
// @return - boolean




function percentageLayout() {
  // check subpixel layout supporting
  var doc = document,
      body = Object(__WEBPACK_IMPORTED_MODULE_0__getBody_js__["a" /* getBody */])(),
      docOverflow = Object(__WEBPACK_IMPORTED_MODULE_1__setFakeBody_js__["a" /* setFakeBody */])(body),
      wrapper = doc.createElement('div'),
      outer = doc.createElement('div'),
      str = '',
      count = 70,
      perPage = 3,
      supported = false;

  wrapper.className = "tns-t-subp2";
  outer.className = "tns-t-ct";

  for (var i = 0; i < count; i++) {
    str += '<div></div>';
  }

  outer.innerHTML = str;
  wrapper.appendChild(outer);
  body.appendChild(wrapper);

  supported = Math.abs(wrapper.getBoundingClientRect().left - outer.children[count - perPage].getBoundingClientRect().left) < 2;

  body.fake ? Object(__WEBPACK_IMPORTED_MODULE_2__resetFakeBody_js__["a" /* resetFakeBody */])(body, docOverflow) : wrapper.remove();

  return supported;
}

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mediaquerySupport;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getBody_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__setFakeBody_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resetFakeBody_js__ = __webpack_require__(17);




function mediaquerySupport () {
  if (window.matchMedia || window.msMatchMedia) {
    return true;
  }
  
  var doc = document,
      body = Object(__WEBPACK_IMPORTED_MODULE_0__getBody_js__["a" /* getBody */])(),
      docOverflow = Object(__WEBPACK_IMPORTED_MODULE_1__setFakeBody_js__["a" /* setFakeBody */])(body),
      div = doc.createElement('div'),
      style = doc.createElement('style'),
      rule = '@media all and (min-width:1px){.tns-mq-test{position:absolute}}',
      position;

  style.type = 'text/css';
  div.className = 'tns-mq-test';

  body.appendChild(style);
  body.appendChild(div);

  if (style.styleSheet) {
    style.styleSheet.cssText = rule;
  } else {
    style.appendChild(doc.createTextNode(rule));
  }

  position = window.getComputedStyle ? window.getComputedStyle(div).position : div.currentStyle['position'];

  body.fake ? Object(__WEBPACK_IMPORTED_MODULE_2__resetFakeBody_js__["a" /* resetFakeBody */])(body, docOverflow) : div.remove();

  return position === "absolute";
}


/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createStyleSheet;
// create and append style sheet
function createStyleSheet (media, nonce) {
  // Create the <style> tag
  var style = document.createElement("style");
  // style.setAttribute("type", "text/css");

  // Add a media (and/or media query) here if you'd like!
  // style.setAttribute("media", "screen")
  // style.setAttribute("media", "only screen and (max-width : 1024px)")
  if (media) { style.setAttribute("media", media); }

  // Add nonce attribute for Content Security Policy
  if (nonce) { style.setAttribute("nonce", nonce); }

  // WebKit hack :(
  // style.appendChild(document.createTextNode(""));

  // Add the <style> element to the page
  document.querySelector('head').appendChild(style);

  return style.sheet ? style.sheet : style.styleSheet;
};

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addCSSRule;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__raf_js__ = __webpack_require__(28);
// cross browsers addRule method

function addCSSRule(sheet, selector, rules, index) {
  // return raf(function() {
    'insertRule' in sheet ?
      sheet.insertRule(selector + '{' + rules + '}', index) :
      sheet.addRule(selector, rules, index);
  // });
}

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = removeCSSRule;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__raf_js__ = __webpack_require__(28);
// cross browsers addRule method

function removeCSSRule(sheet, index) {
  // return raf(function() {
    'deleteRule' in sheet ?
      sheet.deleteRule(index) :
      sheet.removeRule(index);
  // });
}

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getCssRulesLength;
function getCssRulesLength(sheet) {
  var rule = ('insertRule' in sheet) ? sheet.cssRules : sheet.rules;
  return rule.length;
}

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = toDegree;
function toDegree (y, x) {
  return Math.atan2(y, x) * (180 / Math.PI);
}

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getTouchDirection;
function getTouchDirection(angle, range) {
  var direction = false,
      gap = Math.abs(90 - Math.abs(angle));
      
  if (gap >= 90 - range) {
    direction = 'horizontal';
  } else if (gap <= range) {
    direction = 'vertical';
  }

  return direction;
}

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = forEach;
// https://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/
function forEach (arr, callback, scope) {
  for (var i = 0, l = arr.length; i < l; i++) {
    callback.call(scope, arr[i], i);
  }
}

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return classListSupport; });
var classListSupport = 'classList' in document.createElement('_');

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addClass; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hasClass_js__ = __webpack_require__(29);

var addClass = __WEBPACK_IMPORTED_MODULE_0__hasClass_js__["a" /* classListSupport */] ?
    function (el, str) {
      if (!Object(__WEBPACK_IMPORTED_MODULE_0__hasClass_js__["b" /* hasClass */])(el,  str)) { el.classList.add(str); }
    } :
    function (el, str) {
      if (!Object(__WEBPACK_IMPORTED_MODULE_0__hasClass_js__["b" /* hasClass */])(el,  str)) { el.className += ' ' + str; }
    };



/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return removeClass; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hasClass_js__ = __webpack_require__(29);

var removeClass = __WEBPACK_IMPORTED_MODULE_0__hasClass_js__["a" /* classListSupport */] ?
    function (el, str) {
      if (Object(__WEBPACK_IMPORTED_MODULE_0__hasClass_js__["b" /* hasClass */])(el,  str)) { el.classList.remove(str); }
    } :
    function (el, str) {
      if (Object(__WEBPACK_IMPORTED_MODULE_0__hasClass_js__["b" /* hasClass */])(el, str)) { el.className = el.className.replace(str, ''); }
    };



/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = hasAttr;
function hasAttr(el, attr) {
  return el.hasAttribute(attr);
}

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getAttr;
function getAttr(el, attr) {
  return el.getAttribute(attr);
}

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setAttrs;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isNodeList_js__ = __webpack_require__(47);


function setAttrs(els, attrs) {
  els = (Object(__WEBPACK_IMPORTED_MODULE_0__isNodeList_js__["a" /* isNodeList */])(els) || els instanceof Array) ? els : [els];
  if (Object.prototype.toString.call(attrs) !== '[object Object]') { return; }

  for (var i = els.length; i--;) {
    for(var key in attrs) {
      els[i].setAttribute(key, attrs[key]);
    }
  }
}

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = removeAttrs;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isNodeList_js__ = __webpack_require__(47);


function removeAttrs(els, attrs) {
  els = (Object(__WEBPACK_IMPORTED_MODULE_0__isNodeList_js__["a" /* isNodeList */])(els) || els instanceof Array) ? els : [els];
  attrs = (attrs instanceof Array) ? attrs : [attrs];

  var attrLength = attrs.length;
  for (var i = els.length; i--;) {
    for (var j = attrLength; j--;) {
      els[i].removeAttribute(attrs[j]);
    }
  }
}

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = arrayFromNodeList;
function arrayFromNodeList (nl) {
  var arr = [];
  for (var i = 0, l = nl.length; i < l; i++) {
    arr.push(nl[i]);
  }
  return arr;
}

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = hideElement;
function hideElement(el, forceHide) {
  if (el.style.display !== 'none') { el.style.display = 'none'; }
}

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = showElement;
function showElement(el, forceHide) {
  if (el.style.display === 'none') { el.style.display = ''; }
}

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isVisible;
function isVisible(el) {
  return window.getComputedStyle(el).display !== 'none';
}

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = whichProperty;
function whichProperty(props){
  if (typeof props === 'string') {
    var arr = [props],
        Props = props.charAt(0).toUpperCase() + props.substr(1),
        prefixes = ['Webkit', 'Moz', 'ms', 'O'];
        
    prefixes.forEach(function(prefix) {
      if (prefix !== 'ms' || props === 'transform') {
        arr.push(prefix + Props);
      }
    });

    props = arr;
  }

  var el = document.createElement('fakeelement'),
      len = props.length;
  for(var i = 0; i < props.length; i++){
    var prop = props[i];
    if( el.style[prop] !== undefined ){ return prop; }
  }

  return false; // explicit for ie9-
}


/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = has3DTransforms;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getBody_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__setFakeBody_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resetFakeBody_js__ = __webpack_require__(17);




function has3DTransforms(tf){
  if (!tf) { return false; }
  if (!window.getComputedStyle) { return false; }
  
  var doc = document,
      body = Object(__WEBPACK_IMPORTED_MODULE_0__getBody_js__["a" /* getBody */])(),
      docOverflow = Object(__WEBPACK_IMPORTED_MODULE_1__setFakeBody_js__["a" /* setFakeBody */])(body),
      el = doc.createElement('p'),
      has3d,
      cssTF = tf.length > 9 ? '-' + tf.slice(0, -9).toLowerCase() + '-' : '';

  cssTF += 'transform';

  // Add it to the body to get the computed style
  body.insertBefore(el, null);

  el.style[tf] = 'translate3d(1px,1px,1px)';
  has3d = window.getComputedStyle(el).getPropertyValue(cssTF);

  body.fake ? Object(__WEBPACK_IMPORTED_MODULE_2__resetFakeBody_js__["a" /* resetFakeBody */])(body, docOverflow) : el.remove();

  return (has3d !== undefined && has3d.length > 0 && has3d !== "none");
}


/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getEndProperty;
// get transitionend, animationend based on transitionDuration
// @propin: string
// @propOut: string, first-letter uppercase
// Usage: getEndProperty('WebkitTransitionDuration', 'Transition') => webkitTransitionEnd
function getEndProperty(propIn, propOut) {
  var endProp = false;
  if (/^Webkit/.test(propIn)) {
    endProp = 'webkit' + propOut + 'End';
  } else if (/^O/.test(propIn)) {
    endProp = 'o' + propOut + 'End';
  } else if (propIn) {
    endProp = propOut.toLowerCase() + 'end';
  }
  return endProp;
}

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addEvents;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__passiveOption_js__ = __webpack_require__(48);


function addEvents(el, obj, preventScrolling) {
  for (var prop in obj) {
    var option = ['touchstart', 'touchmove'].indexOf(prop) >= 0 && !preventScrolling ? __WEBPACK_IMPORTED_MODULE_0__passiveOption_js__["a" /* passiveOption */] : false;
    el.addEventListener(prop, obj[prop], option);
  }
}

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = removeEvents;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__passiveOption_js__ = __webpack_require__(48);


function removeEvents(el, obj) {
  for (var prop in obj) {
    var option = ['touchstart', 'touchmove'].indexOf(prop) >= 0 ? __WEBPACK_IMPORTED_MODULE_0__passiveOption_js__["a" /* passiveOption */] : false;
    el.removeEventListener(prop, obj[prop], option);
  }
}

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Events;
function Events() {
  return {
    topics: {},
    on: function (eventName, fn) {
      this.topics[eventName] = this.topics[eventName] || [];
      this.topics[eventName].push(fn);
    },
    off: function(eventName, fn) {
      if (this.topics[eventName]) {
        for (var i = 0; i < this.topics[eventName].length; i++) {
          if (this.topics[eventName][i] === fn) {
            this.topics[eventName].splice(i, 1);
            break;
          }
        }
      }
    },
    emit: function (eventName, data) {
      data.type = eventName;
      if (this.topics[eventName]) {
        this.topics[eventName].forEach(function(fn) {
          fn(data, eventName);
        });
      }
    }
  };
};

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = jsTransform;
function jsTransform(element, attr, prefix, postfix, to, duration, callback) {
  var tick = Math.min(duration, 10),
      unit = (to.indexOf('%') >= 0) ? '%' : 'px',
      to = to.replace(unit, ''),
      from = Number(element.style[attr].replace(prefix, '').replace(postfix, '').replace(unit, '')),
      positionTick = (to - from) / duration * tick,
      running;

  setTimeout(moveElement, tick);
  function moveElement() {
    duration -= tick;
    from += positionTick;
    element.style[attr] = prefix + from + unit + postfix;
    if (duration > 0) { 
      setTimeout(moveElement, tick); 
    } else {
      callback();
    }
  }
}

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Axial
 * Axial Construct is a universal template for factories, industry, construction, architecture, factories, mechanics, energy
 * Exclusively on https://1.envato.market/axial-html
 *
 * @encoding        UTF-8
 * @version         1.0.0
 * @copyright       (C) 2018 - 2021 Merkulove ( https://merkulov.design/ ). All rights reserved.
 * @license         Envato License https://1.envato.market/KYbje
 * @contributors    Lamber Lilit (winter.rituel@gmail.com)
 * @support         help@merkulov.design
 **/


function drawTabs(selector, trigger, content) {
    if ( content === void 0 ) content = '.content';

    var tabs = document.querySelector(selector);
    var tabButton = document.querySelectorAll(trigger);
    var contents = document.querySelectorAll(content);

    tabs.addEventListener('click', function (e) {
        var id = e.target.dataset.id;
        if (id) {
            tabButton.forEach(function (btn) {
                btn.classList.remove("active");
            });
            e.target.classList.add("active");

            contents.forEach(function (content) {
                content.classList.remove("active");
            });
            var element = document.getElementById(id);
            element.classList.add("active");
        }
    })
}

/* unused harmony default export */ var _unused_webpack_default_export = (drawTabs);

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Axial
 * Axial Construct is a universal template for factories, industry, construction, architecture, factories, mechanics, energy
 * Exclusively on https://1.envato.market/axial-html
 *
 * @encoding        UTF-8
 * @version         1.0.0
 * @copyright       (C) 2018 - 2021 Merkulove ( https://merkulov.design/ ). All rights reserved.
 * @license         Envato License https://1.envato.market/KYbje
 * @contributors    Lamber Lilit (winter.rituel@gmail.com)
 * @support         help@merkulov.design
 **/


function drawProcessSteps() {
    var steps = document.querySelectorAll('.progress-step');
    var stepsSpotsUnderlay = document.querySelectorAll('.progress-marker_spot--underlay');
    var container = document.querySelector('.process_steps');
    var directionClass = 'progress-tracker--vertical';

    function makeResponsive() {
        if (window.innerWidth >= 992) {
            container.classList.remove(directionClass);
        } else {
            container.classList.add(directionClass);
        }
    }

    window.addEventListener('load', makeResponsive);
    window.addEventListener('resize', makeResponsive);

    function _setTimer(delay) {
        if ( delay === void 0 ) delay = 3000;

        var duration = 4500 - delay;
        steps[0].classList.add('is-complete');
        steps.forEach(function (item, i) {
            stepsSpotsUnderlay[i].style.animationDelay = delay + "ms";
            var spot = item.children;
            setTimeout(function () {
                if(item.nextElementSibling !== null) {
                    _toggleClass(item.nextElementSibling, 'is-complete');

                }
            }, delay * i)
        })
    }

    function _toggleClass(el, className) {

        if (el.classList) {
            el.classList.toggle(className);
        } else {
            var classes = el.className.split(' ');
            var existingIndex = classes.indexOf(className);

            if (existingIndex >= 0)
                { classes.splice(existingIndex, 1); }
            else
                { classes.push(className); }

            el.className = classes.join(' ');
        }

    }

    function triggerSteps() {
        var options = {
            root: document.querySelector('.process'),
            rootMargin: '0px',
            threshold: 0.5
        }
        var observer = new IntersectionObserver(_setTimer, options);
        observer.observe(container)
    }

    window.addEventListener('load', triggerSteps);

}

/* unused harmony default export */ var _unused_webpack_default_export = (drawProcessSteps);



/***/ }),
/* 138 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=single_service.js.map