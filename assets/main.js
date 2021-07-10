/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/scripts/bvaccel.js","vendors-main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/scripts/components/basic/Icon.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--3!./node_modules/vue-loader/lib??vue-loader-options!./src/scripts/components/basic/Icon.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {
  name: 'Icon',
  props: {
    name: String,
    size: {
      type: String,
      default: '24px'
    }
  },
  computed: {
    iconClass: function iconClass() {
      var iconClass = { 'icon': true };

      iconClass['icon--' + this.name] = true;

      return iconClass;
    },
    iconStyle: function iconStyle() {
      return {
        'height': this.size,
        'width': this.size
      };
    },
    iconName: function iconName() {
      return '#' + this.name;
    }
  }
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/scripts/components/basic/Toast.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--3!./node_modules/vue-loader/lib??vue-loader-options!./src/scripts/components/basic/Toast.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _vuex = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");

var _PrimaryButton = __webpack_require__(/*! scripts/components/buttons/PrimaryButton.vue */ "./src/scripts/components/buttons/PrimaryButton.vue");

var _PrimaryButton2 = _interopRequireDefault(_PrimaryButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'Toast',
  components: { PrimaryButton: _PrimaryButton2.default },
  computed: _extends({}, (0, _vuex.mapState)({
    messages: function messages(state) {
      return state.toast.messages;
    }
  }))
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/scripts/components/buttons/PrimaryButton.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--3!./node_modules/vue-loader/lib??vue-loader-options!./src/scripts/components/buttons/PrimaryButton.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Icon = __webpack_require__(/*! scripts/components/basic/Icon.vue */ "./src/scripts/components/basic/Icon.vue");

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'PrimaryButton',
  components: { Icon: _Icon2.default },
  props: {
    label: String,
    icon: String,
    iconSize: {
      type: String,
      default: function _default() {
        return this.small ? '12px' : '16px';
      }
    },
    small: {
      type: Boolean,
      default: false
    },
    full: {
      type: Boolean,
      default: false
    },
    secondary: {
      type: Boolean,
      default: false
    },
    outline: {
      type: Boolean,
      default: false
    },
    light: {
      type: Boolean,
      default: false
    },
    simple: {
      type: Boolean,
      default: false
    },
    text: {
      type: Boolean,
      default: false
    },
    flex: {
      type: Boolean,
      default: false
    },
    inline: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonClass: function buttonClass() {
      return {
        'button--primary': this.secondary === false,
        'button--secondary': this.secondary === true,
        'button--outline': this.outline === true,
        'button--light': this.light === true,
        'button--small': this.small === true,
        'button--simple': this.simple === true,
        'button--full': this.full === true,
        'button--text': this.text === true,
        'button--flex': this.flex === true,
        'button--inline': this.inline === true,
        'button--block': this.block === true
      };
    },
    isDisabled: function isDisabled() {
      return this.disabled || this.loading;
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/styles/variables.scss":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--1-2!./src/styles/variables.scss ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*\n\n  Boilerplate is a collection of all the SCSS partials\n  that do not output CSS when compiled.\n\n  Include this file in components to pull in theme\n  variables, functions, and mixins for use in scoped\n  styling.\n\n*/\n\n/**\n * Forces an element to self-clear its children\n *\n * Usage:\n * .selector {\n *   @include clearfix;\n * }\n */\n/**\n * Hide element but make it accessible to screen readers\n *\n * Usage:\n * .selector {\n *   @include visually-hidden;\n * }\n */\n/**\n * Reverse the properties applied by @mixin visually-hidden\n *\n * Accepts:\n * - $position: {String} Positioning method for element\n *\n * Usage:\n * .selector {\n *   @include visually-shown(relative);\n * }\n */\n", ""]);

// Exports
exports.locals = {
	"breakTablet": "768px",
	"breakDesktop": "1024px",
	"breakHd": "1280px"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/scripts/components/basic/Icon.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??ref--1-2!./node_modules/vue-loader/lib??vue-loader-options!./src/scripts/components/basic/Icon.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*\n\n  Boilerplate is a collection of all the SCSS partials\n  that do not output CSS when compiled.\n\n  Include this file in components to pull in theme\n  variables, functions, and mixins for use in scoped\n  styling.\n\n*/\n\n/**\n * Forces an element to self-clear its children\n *\n * Usage:\n * .selector {\n *   @include clearfix;\n * }\n */\n/**\n * Hide element but make it accessible to screen readers\n *\n * Usage:\n * .selector {\n *   @include visually-hidden;\n * }\n */\n/**\n * Reverse the properties applied by @mixin visually-hidden\n *\n * Accepts:\n * - $position: {String} Positioning method for element\n *\n * Usage:\n * .selector {\n *   @include visually-shown(relative);\n * }\n */\n.icon {\n  fill: #000;\n}\n", ""]);

// Exports
exports.locals = {
	"breakTablet": "768px",
	"breakDesktop": "1024px",
	"breakHd": "1280px"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/scripts/components/basic/Icon.vue?vue&type=style&index=1&id=71356da3&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??ref--1-2!./node_modules/vue-loader/lib??vue-loader-options!./src/scripts/components/basic/Icon.vue?vue&type=style&index=1&id=71356da3&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*\n\n  Boilerplate is a collection of all the SCSS partials\n  that do not output CSS when compiled.\n\n  Include this file in components to pull in theme\n  variables, functions, and mixins for use in scoped\n  styling.\n\n*/\n[data-v-71356da3]:export {\n  breakTablet: 768px;\n  breakDesktop: 1024px;\n  breakHd: 1280px;\n}\n\n/**\n * Forces an element to self-clear its children\n *\n * Usage:\n * .selector {\n *   @include clearfix;\n * }\n */\n/**\n * Hide element but make it accessible to screen readers\n *\n * Usage:\n * .selector {\n *   @include visually-hidden;\n * }\n */\n/**\n * Reverse the properties applied by @mixin visually-hidden\n *\n * Accepts:\n * - $position: {String} Positioning method for element\n *\n * Usage:\n * .selector {\n *   @include visually-shown(relative);\n * }\n */\n.icon[data-v-71356da3] {\n  transition: 0.3s ease all;\n}\n.icon--underline[data-v-71356da3] {\n    transform: translateY(22%);\n}\nh1 .icon[data-v-71356da3],\n  h2 .icon[data-v-71356da3],\n  h3 .icon[data-v-71356da3],\n  h4 .icon[data-v-71356da3],\n  h5 .icon[data-v-71356da3],\n  h6 .icon[data-v-71356da3],\n  p .icon[data-v-71356da3],\n  a .icon[data-v-71356da3] {\n    letter-spacing: 1px;\n    vertical-align: sub;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/scripts/components/basic/Toast.vue?vue&type=style&index=0&id=1aa1dc6d&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??ref--1-2!./node_modules/vue-loader/lib??vue-loader-options!./src/scripts/components/basic/Toast.vue?vue&type=style&index=0&id=1aa1dc6d&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*\n\n  Boilerplate is a collection of all the SCSS partials\n  that do not output CSS when compiled.\n\n  Include this file in components to pull in theme\n  variables, functions, and mixins for use in scoped\n  styling.\n\n*/\n[data-v-1aa1dc6d]:export {\n  breakTablet: 768px;\n  breakDesktop: 1024px;\n  breakHd: 1280px;\n}\n\n/**\n * Forces an element to self-clear its children\n *\n * Usage:\n * .selector {\n *   @include clearfix;\n * }\n */\n/**\n * Hide element but make it accessible to screen readers\n *\n * Usage:\n * .selector {\n *   @include visually-hidden;\n * }\n */\n/**\n * Reverse the properties applied by @mixin visually-hidden\n *\n * Accepts:\n * - $position: {String} Positioning method for element\n *\n * Usage:\n * .selector {\n *   @include visually-shown(relative);\n * }\n */\n.toast[data-v-1aa1dc6d] {\n  position: fixed;\n  bottom: 10px;\n  left: 10px;\n  max-width: calc(100% - 20px);\n  color: #fff;\n  text-align: center;\n}\n@media (min-width: 768px) {\n.toast[data-v-1aa1dc6d] {\n      text-align: left;\n}\n}\n.toast__message[data-v-1aa1dc6d] {\n    padding: 10px 20px;\n    margin-top: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    background-color: #000;\n    border-radius: 4px;\n}\n.toast__message.error[data-v-1aa1dc6d] {\n      background-color: #db162e;\n}\n.toast__message__copy[data-v-1aa1dc6d] {\n      line-height: 1.7;\n}\n.toast__message__cta[data-v-1aa1dc6d] {\n      margin-left: 10px;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/scripts/components/buttons/PrimaryButton.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??ref--1-2!./node_modules/vue-loader/lib??vue-loader-options!./src/scripts/components/buttons/PrimaryButton.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*\n\n  Boilerplate is a collection of all the SCSS partials\n  that do not output CSS when compiled.\n\n  Include this file in components to pull in theme\n  variables, functions, and mixins for use in scoped\n  styling.\n\n*/\n\n/**\n * Forces an element to self-clear its children\n *\n * Usage:\n * .selector {\n *   @include clearfix;\n * }\n */\n/**\n * Hide element but make it accessible to screen readers\n *\n * Usage:\n * .selector {\n *   @include visually-hidden;\n * }\n */\n/**\n * Reverse the properties applied by @mixin visually-hidden\n *\n * Accepts:\n * - $position: {String} Positioning method for element\n *\n * Usage:\n * .selector {\n *   @include visually-shown(relative);\n * }\n */\nbutton.button,\na.button {\n  display: inline-block;\n  position: relative;\n}\nbutton.button.button--full,\n  a.button.button--full {\n    width: 100%;\n}\nbutton.button.button--text,\n  a.button.button--text {\n    background-color: transparent !important;\n    border: 0;\n    padding: 0;\n}\nbutton.button.button--inline,\n  a.button.button--inline {\n    display: inline;\n}\nbutton.button.button--block,\n  a.button.button--block {\n    display: block;\n}\n.button__text {\n  display: inline-block;\n  color: #fff;\n}\n.button--text .button__text {\n    color: #000;\n    font-size: 0.8125rem;\n    letter-spacing: 0.4px;\n}\n.button--text .button__text::after {\n      content: '';\n      display: block;\n      width: 100%;\n      height: 1px;\n      background-color: #000;\n}\n", ""]);

// Exports
exports.locals = {
	"breakTablet": "768px",
	"breakDesktop": "1024px",
	"breakHd": "1280px"
};

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/scripts/components/basic/Icon.vue?vue&type=template&id=71356da3&scoped=true&lang=pug&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/scripts/components/basic/Icon.vue?vue&type=template&id=71356da3&scoped=true&lang=pug& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("svg", { class: _vm.iconClass, style: _vm.iconStyle }, [
    _c("use", {
      attrs: {
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        "xlink:href": _vm.iconName
      }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/scripts/components/basic/Toast.vue?vue&type=template&id=1aa1dc6d&scoped=true&lang=pug&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/scripts/components/basic/Toast.vue?vue&type=template&id=1aa1dc6d&scoped=true&lang=pug& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "toast" },
    [
      _c(
        "transition-group",
        { attrs: { name: "slide-fade-right" } },
        _vm._l(_vm.messages, function(message) {
          return _c(
            "div",
            {
              key: message.id,
              staticClass: "toast__message",
              class: { error: message.type === "error" }
            },
            [
              _c("p", {
                staticClass: "toast__message__copy",
                domProps: { innerHTML: _vm._s(message.text) }
              }),
              message.callback
                ? _c("primary-button", {
                    staticClass: "toast__message__cta",
                    attrs: {
                      small: true,
                      secondary: true,
                      label: message.label
                    },
                    on: { click: message.callback }
                  })
                : _vm._e()
            ],
            1
          )
        }),
        0
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/scripts/components/buttons/PrimaryButton.vue?vue&type=template&id=140e0e6d&lang=pug&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/scripts/components/buttons/PrimaryButton.vue?vue&type=template&id=140e0e6d&lang=pug& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    {
      ref: "button",
      staticClass: "button",
      class: _vm.buttonClass,
      attrs: { type: "button", disabled: _vm.isDisabled },
      on: {
        click: function($event) {
          $event.stopPropagation()
          return _vm.$emit("click")
        }
      }
    },
    [
      _vm.icon
        ? _c("icon", { attrs: { name: _vm.icon, size: _vm.iconSize } })
        : _vm._e(),
      _c("span", { staticClass: "button__text" }, [_vm._v(_vm._s(_vm.label))])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/scripts/components/basic/Icon.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??ref--1-2!./node_modules/vue-loader/lib??vue-loader-options!./src/scripts/components/basic/Icon.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js??ref--1-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Icon.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/scripts/components/basic/Icon.vue?vue&type=style&index=0&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("5ad16918", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/scripts/components/basic/Icon.vue?vue&type=style&index=1&id=71356da3&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??ref--1-2!./node_modules/vue-loader/lib??vue-loader-options!./src/scripts/components/basic/Icon.vue?vue&type=style&index=1&id=71356da3&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js??ref--1-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Icon.vue?vue&type=style&index=1&id=71356da3&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/scripts/components/basic/Icon.vue?vue&type=style&index=1&id=71356da3&scoped=true&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("31e5fdb4", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/scripts/components/basic/Toast.vue?vue&type=style&index=0&id=1aa1dc6d&scoped=true&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??ref--1-2!./node_modules/vue-loader/lib??vue-loader-options!./src/scripts/components/basic/Toast.vue?vue&type=style&index=0&id=1aa1dc6d&scoped=true&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js??ref--1-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Toast.vue?vue&type=style&index=0&id=1aa1dc6d&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/scripts/components/basic/Toast.vue?vue&type=style&index=0&id=1aa1dc6d&scoped=true&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("12aaf422", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/scripts/components/buttons/PrimaryButton.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??ref--1-2!./node_modules/vue-loader/lib??vue-loader-options!./src/scripts/components/buttons/PrimaryButton.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js??ref--1-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./PrimaryButton.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/scripts/components/buttons/PrimaryButton.vue?vue&type=style&index=0&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("29a813f7", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/scripts/bvaccel.js":
/*!********************************!*\
  !*** ./src/scripts/bvaccel.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable camelcase */

// for async/await

__webpack_require__(/*! core-js */ "./node_modules/core-js/index.js");

__webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");

var _vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");

var _vue2 = _interopRequireDefault(_vue);

var _vue2TouchEvents = __webpack_require__(/*! vue2-touch-events */ "./node_modules/vue2-touch-events/index.js");

var _vue2TouchEvents2 = _interopRequireDefault(_vue2TouchEvents);

var _vueLazyload = __webpack_require__(/*! vue-lazyload */ "./node_modules/vue-lazyload/vue-lazyload.esm.js");

var _vueLazyload2 = _interopRequireDefault(_vueLazyload);

var _vueMq = __webpack_require__(/*! vue-mq */ "./node_modules/vue-mq/dist/vue-mq.es.js");

var _vueMq2 = _interopRequireDefault(_vueMq);

var _vueScrollto = __webpack_require__(/*! vue-scrollto */ "./node_modules/vue-scrollto/vue-scrollto.js");

var _vueScrollto2 = _interopRequireDefault(_vueScrollto);

var _vuex = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");

var _components = __webpack_require__(/*! ./components */ "./src/scripts/components/index.js");

var _components2 = _interopRequireDefault(_components);

var _store = __webpack_require__(/*! ./store */ "./src/scripts/store/index.js");

var _store2 = _interopRequireDefault(_store);

var _string = __webpack_require__(/*! ./filters/string.js */ "./src/scripts/filters/string.js");

var _money = __webpack_require__(/*! ./filters/money.js */ "./src/scripts/filters/money.js");

var _images = __webpack_require__(/*! ./filters/images.js */ "./src/scripts/filters/images.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__.p = window.__webpack_public_path__;

var cssVars = __webpack_require__(/*! ../styles/variables.scss */ "./src/styles/variables.scss");

_vue2.default.config.productionTip = false;

_vue2.default.use(_vue2TouchEvents2.default);

_vue2.default.use(_vueLazyload2.default, {
  preload: 1.3,
  attempt: 1
});

_vue2.default.use(_vueMq2.default, {
  breakpoints: {
    mobile: parseInt(cssVars.breakTablet, 10),
    tablet: parseInt(cssVars.breakDesktop, 10),
    desktop: parseInt(cssVars.breakHd, 10),
    hd: Infinity
  }
});

_vue2.default.use(_vueScrollto2.default, {
  offset: -140
});

_vue2.default.filter('ucfirst', _string.ucfirst);
_vue2.default.filter('upcase', _string.upcase);
_vue2.default.filter('unhandleize', _string.unhandleize);
_vue2.default.filter('money', _money.money);
_vue2.default.filter('moneyWithoutDecimals', _money.moneyWithoutDecimals);
_vue2.default.filter('image', _images.getSizedImageUrl);

new _vue2.default({
  store: _store2.default,
  delimiters: ['<%', '%>'],
  comments: true,
  components: _components2.default,
  computed: _extends({}, (0, _vuex.mapState)({
    cart_item_count: function cart_item_count(state) {
      return state.cart.checkout.item_count;
    },
    sidecartOpen: function sidecartOpen(state) {
      return state.cart.sidecartOpen;
    }
  })),
  created: function created() {
    this.$store.dispatch('params/init');
    this.$store.dispatch('cart/init');
    this.$store.dispatch('products/init');
    this.$store.dispatch('scriptBypass/init');
  },
  mounted: function mounted() {
    this.$store.dispatch('scriptBypass/restore');

    // on mount, start listening for load events
    // on a section load, re-mount section to reflect admin changes
    document.addEventListener('shopify:section:load', function (event) {
      var sectionContainer = document.getElementById(event.target.id);
      var NewComponent = _vue2.default.extend({
        components: _components2.default,
        template: event.target.innerHTML
      });
      var component = new NewComponent({
        store: _store2.default
      }).$mount();

      sectionContainer.innerHTML = '';
      sectionContainer.appendChild(component.$el);
      window.dispatchEvent(new Event('resize'));
    });
  },

  methods: {
    dispatchEvent: function dispatchEvent(eventName) {
      var eventData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var event = new CustomEvent(eventName, { detail: eventData });
      document.dispatchEvent(event);
    }
  }
}).$mount('#app');

/***/ }),

/***/ "./src/scripts/components/basic/Icon.vue":
/*!***********************************************!*\
  !*** ./src/scripts/components/basic/Icon.vue ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Icon_vue_vue_type_template_id_71356da3_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Icon.vue?vue&type=template&id=71356da3&scoped=true&lang=pug& */ "./src/scripts/components/basic/Icon.vue?vue&type=template&id=71356da3&scoped=true&lang=pug&");
/* harmony import */ var _Icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icon.vue?vue&type=script&lang=js& */ "./src/scripts/components/basic/Icon.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Icon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icon.vue?vue&type=style&index=0&lang=scss& */ "./src/scripts/components/basic/Icon.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _Icon_vue_vue_type_style_index_1_id_71356da3_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Icon.vue?vue&type=style&index=1&id=71356da3&scoped=true&lang=scss& */ "./src/scripts/components/basic/Icon.vue?vue&type=style&index=1&id=71356da3&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _Icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Icon_vue_vue_type_template_id_71356da3_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Icon_vue_vue_type_template_id_71356da3_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "71356da3",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/scripts/components/basic/Icon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/scripts/components/basic/Icon.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./src/scripts/components/basic/Icon.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Icon.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/scripts/components/basic/Icon.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/scripts/components/basic/Icon.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************!*\
  !*** ./src/scripts/components/basic/Icon.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js??ref--1-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Icon.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/scripts/components/basic/Icon.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/scripts/components/basic/Icon.vue?vue&type=style&index=1&id=71356da3&scoped=true&lang=scss&":
/*!*********************************************************************************************************!*\
  !*** ./src/scripts/components/basic/Icon.vue?vue&type=style&index=1&id=71356da3&scoped=true&lang=scss& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_style_index_1_id_71356da3_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js??ref--1-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Icon.vue?vue&type=style&index=1&id=71356da3&scoped=true&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/scripts/components/basic/Icon.vue?vue&type=style&index=1&id=71356da3&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_style_index_1_id_71356da3_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_style_index_1_id_71356da3_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_style_index_1_id_71356da3_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_style_index_1_id_71356da3_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/scripts/components/basic/Icon.vue?vue&type=template&id=71356da3&scoped=true&lang=pug&":
/*!***************************************************************************************************!*\
  !*** ./src/scripts/components/basic/Icon.vue?vue&type=template&id=71356da3&scoped=true&lang=pug& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_template_id_71356da3_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/pug-plain-loader!../../../../node_modules/vue-loader/lib??vue-loader-options!./Icon.vue?vue&type=template&id=71356da3&scoped=true&lang=pug& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/scripts/components/basic/Icon.vue?vue&type=template&id=71356da3&scoped=true&lang=pug&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_template_id_71356da3_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_template_id_71356da3_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/scripts/components/basic/Toast.vue":
/*!************************************************!*\
  !*** ./src/scripts/components/basic/Toast.vue ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Toast_vue_vue_type_template_id_1aa1dc6d_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Toast.vue?vue&type=template&id=1aa1dc6d&scoped=true&lang=pug& */ "./src/scripts/components/basic/Toast.vue?vue&type=template&id=1aa1dc6d&scoped=true&lang=pug&");
/* harmony import */ var _Toast_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Toast.vue?vue&type=script&lang=js& */ "./src/scripts/components/basic/Toast.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Toast_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Toast_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Toast_vue_vue_type_style_index_0_id_1aa1dc6d_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Toast.vue?vue&type=style&index=0&id=1aa1dc6d&scoped=true&lang=scss& */ "./src/scripts/components/basic/Toast.vue?vue&type=style&index=0&id=1aa1dc6d&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Toast_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Toast_vue_vue_type_template_id_1aa1dc6d_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Toast_vue_vue_type_template_id_1aa1dc6d_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1aa1dc6d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/scripts/components/basic/Toast.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/scripts/components/basic/Toast.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./src/scripts/components/basic/Toast.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Toast_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Toast.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/scripts/components/basic/Toast.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Toast_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Toast_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Toast_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Toast_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Toast_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/scripts/components/basic/Toast.vue?vue&type=style&index=0&id=1aa1dc6d&scoped=true&lang=scss&":
/*!**********************************************************************************************************!*\
  !*** ./src/scripts/components/basic/Toast.vue?vue&type=style&index=0&id=1aa1dc6d&scoped=true&lang=scss& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Toast_vue_vue_type_style_index_0_id_1aa1dc6d_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js??ref--1-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Toast.vue?vue&type=style&index=0&id=1aa1dc6d&scoped=true&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/scripts/components/basic/Toast.vue?vue&type=style&index=0&id=1aa1dc6d&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Toast_vue_vue_type_style_index_0_id_1aa1dc6d_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Toast_vue_vue_type_style_index_0_id_1aa1dc6d_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Toast_vue_vue_type_style_index_0_id_1aa1dc6d_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Toast_vue_vue_type_style_index_0_id_1aa1dc6d_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/scripts/components/basic/Toast.vue?vue&type=template&id=1aa1dc6d&scoped=true&lang=pug&":
/*!****************************************************************************************************!*\
  !*** ./src/scripts/components/basic/Toast.vue?vue&type=template&id=1aa1dc6d&scoped=true&lang=pug& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Toast_vue_vue_type_template_id_1aa1dc6d_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/pug-plain-loader!../../../../node_modules/vue-loader/lib??vue-loader-options!./Toast.vue?vue&type=template&id=1aa1dc6d&scoped=true&lang=pug& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/scripts/components/basic/Toast.vue?vue&type=template&id=1aa1dc6d&scoped=true&lang=pug&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Toast_vue_vue_type_template_id_1aa1dc6d_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Toast_vue_vue_type_template_id_1aa1dc6d_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/scripts/components/buttons/PrimaryButton.vue":
/*!**********************************************************!*\
  !*** ./src/scripts/components/buttons/PrimaryButton.vue ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PrimaryButton_vue_vue_type_template_id_140e0e6d_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PrimaryButton.vue?vue&type=template&id=140e0e6d&lang=pug& */ "./src/scripts/components/buttons/PrimaryButton.vue?vue&type=template&id=140e0e6d&lang=pug&");
/* harmony import */ var _PrimaryButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PrimaryButton.vue?vue&type=script&lang=js& */ "./src/scripts/components/buttons/PrimaryButton.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _PrimaryButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _PrimaryButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _PrimaryButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrimaryButton.vue?vue&type=style&index=0&lang=scss& */ "./src/scripts/components/buttons/PrimaryButton.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PrimaryButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PrimaryButton_vue_vue_type_template_id_140e0e6d_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PrimaryButton_vue_vue_type_template_id_140e0e6d_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/scripts/components/buttons/PrimaryButton.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/scripts/components/buttons/PrimaryButton.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./src/scripts/components/buttons/PrimaryButton.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PrimaryButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--3!../../../../node_modules/vue-loader/lib??vue-loader-options!./PrimaryButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/scripts/components/buttons/PrimaryButton.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PrimaryButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PrimaryButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PrimaryButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PrimaryButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PrimaryButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/scripts/components/buttons/PrimaryButton.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************!*\
  !*** ./src/scripts/components/buttons/PrimaryButton.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PrimaryButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js??ref--1-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./PrimaryButton.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/scripts/components/buttons/PrimaryButton.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PrimaryButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PrimaryButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PrimaryButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PrimaryButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/scripts/components/buttons/PrimaryButton.vue?vue&type=template&id=140e0e6d&lang=pug&":
/*!**************************************************************************************************!*\
  !*** ./src/scripts/components/buttons/PrimaryButton.vue?vue&type=template&id=140e0e6d&lang=pug& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PrimaryButton_vue_vue_type_template_id_140e0e6d_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/pug-plain-loader!../../../../node_modules/vue-loader/lib??vue-loader-options!./PrimaryButton.vue?vue&type=template&id=140e0e6d&lang=pug& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/scripts/components/buttons/PrimaryButton.vue?vue&type=template&id=140e0e6d&lang=pug&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PrimaryButton_vue_vue_type_template_id_140e0e6d_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PrimaryButton_vue_vue_type_template_id_140e0e6d_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/scripts/components/index.js":
/*!*****************************************!*\
  !*** ./src/scripts/components/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Toast = __webpack_require__(/*! scripts/components/basic/Toast.vue */ "./src/scripts/components/basic/Toast.vue");

var _Toast2 = _interopRequireDefault(_Toast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  Toast: _Toast2.default
};

/***/ }),

/***/ "./src/scripts/filters/images.js":
/*!***************************************!*\
  !*** ./src/scripts/filters/images.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint import/prefer-default-export: "off" */

/**
 * Resizes a Shopify image on the frontend.
 * Expects `size` to be formatted like the Liquid filter, e.g. '450x' or 300x200'.
 * @param {*} src
 * @param {*} size
 */
var getSizedImageUrl = exports.getSizedImageUrl = function getSizedImageUrl(src, size) {
  var currentSizeRegEx = /_(pico|icon|thumb|small|compact|medium|large|grande|original|\d{1,4}x(\d{1,4})?|master)+\./g;
  var extensionRegEx = /\.jpg|\.png|\.gif|\.jpeg/g;

  // remove any current image size then add the new image size
  return src.replace(currentSizeRegEx, '.').replace(extensionRegEx, function (match) {
    return '_' + size + match;
  });
};

/***/ }),

/***/ "./src/scripts/filters/money.js":
/*!**************************************!*\
  !*** ./src/scripts/filters/money.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var money = exports.money = function money(value) {
  var str = String(parseFloat(value) / 100);
  str += str.indexOf('.') < 0 ? '.00' : '00';
  return '$' + str.substring(0, str.indexOf('.') + 3);
};

var moneyWithoutDecimals = exports.moneyWithoutDecimals = function moneyWithoutDecimals(value) {
  return money(value).replace(/\.00/g, '');
};

/***/ }),

/***/ "./src/scripts/filters/string.js":
/*!***************************************!*\
  !*** ./src/scripts/filters/string.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ucfirst = exports.ucfirst = function ucfirst(value) {
  return '' + value.charAt(0).toUpperCase() + value.substring(1);
};

var upcase = exports.upcase = function upcase(value) {
  return value.split(' ').map(function (word) {
    return ucfirst(word);
  }).join(' ');
};

var unhandleize = exports.unhandleize = function unhandleize(value) {
  return upcase(value.replace(/-/g, ' '));
};

/***/ }),

/***/ "./src/scripts/helpers/util.js":
/*!*************************************!*\
  !*** ./src/scripts/helpers/util.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var debounce = exports.debounce = function debounce(func, wait, immediate) {
  var timeout;

  return function () {
    var context = this,
        args = arguments;
    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
};

var hash = exports.hash = function hash(str) {
  var hash = 0,
      i,
      chr;

  if (str.length === 0) return hash;

  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }

  return hash;
};

var clone = exports.clone = function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
};

/**
  This handles a weird edge case caused by the theme editor.
  When customizing a theme, for some reason HTML comments are injected
  into templates, breaking the response data. This means we need to
  remove the comments and parse it back into JSON format, allowing for
  the data to load properly when the theme editor is open.

  @param data The response to check.
*/
var parseDataForEditor = exports.parseDataForEditor = function parseDataForEditor(data) {
  if (typeof data === 'string') {
    var parsed = data.replace(/<!--[\s\S]*?-->/g, '');

    try {
      return JSON.parse(parsed);
    } catch (error) {
      console.error('Could not parse data:', data);
      return;
    }
  }

  return data;
};

var embedVideoIframeAttributes = exports.embedVideoIframeAttributes = function embedVideoIframeAttributes(url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    background: false
  };

  var HOST = {
    VIMEO: 'VIMEO',
    YOUTUBE: 'YOUTUBE'
  };

  // console.log({ url, options });
  url = new URL(url);
  var host = void 0,
      videoId = void 0;

  if (url.hostname === 'youtube.com' || url.hostname === 'www.youtube.com') {
    host = HOST.YOUTUBE;
    if (url.pathname === '/watch') {
      // https://www.youtube.com/watch?v=abc123
      videoId = url.searchParams.get('v');
    } else {
      // https://www.youtube.com/embed/abc123
      videoId = /\/embed\/(.+)/.exec(url.pathname)[1];
    }
  } else if (url.hostname === 'vimeo.com') {
    host = HOST.VIMEO;
    // https://vimeo.com/123456
    videoId = /\/(\d+)/.exec(url.pathname)[1];
  } else if (url.hostname === 'player.vimeo.com') {
    host = HOST.VIMEO;
    // https://player.vimeo.com/video/123456
    videoId = /\/video\/(\d+)/.exec(url.pathname)[1];
  }

  var attributes = {
    frameborder: '0',
    allowfullscreen: true
  };

  var embedUrl = void 0;
  if (host === HOST.YOUTUBE) {
    embedUrl = new URL('https://www.youtube.com/embed/' + videoId);
    embedUrl.searchParams.set('enablejsapi', 1);
    if (options.background) {
      embedUrl.searchParams.set('controls', 0);
      embedUrl.searchParams.set('autoplay', 1);
      embedUrl.searchParams.set('loop', 1);
      embedUrl.searchParams.set('modestbranding', 1);
    }
    attributes.src = embedUrl.toJSON();
    attributes.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
  }
  if (host === HOST.VIMEO) {
    embedUrl = new URL('https://player.vimeo.com/video/' + videoId);
    if (options.background) {
      /*
      Adding this parameter will have the following effect:
        All player toggles and elements will be turned off (including the play/pause button)
        The video will automatically loop
        The video will be set to autoplay
        The video will be muted
      */
      embedUrl.searchParams.set('background', true);
    }
    attributes.src = embedUrl.toJSON();
    attributes.allow = 'autoplay; fullscreen';
  }

  // console.log({ attributes });
  return attributes;
};

var cleanPhoneNumber = exports.cleanPhoneNumber = function cleanPhoneNumber(phoneNumber) {
  return phoneNumber.replace(/[.\-() ]/g, '');
};

var handleize = exports.handleize = function handleize(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '').replace(/^-/, '');
};

/***/ }),

/***/ "./src/scripts/store/index.js":
/*!************************************!*\
  !*** ./src/scripts/store/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");

var _vue2 = _interopRequireDefault(_vue);

var _vuex = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");

var _vuex2 = _interopRequireDefault(_vuex);

var _scriptBypass = __webpack_require__(/*! ./modules/script-bypass.js */ "./src/scripts/store/modules/script-bypass.js");

var _scriptBypass2 = _interopRequireDefault(_scriptBypass);

var _cart = __webpack_require__(/*! ./modules/cart.js */ "./src/scripts/store/modules/cart.js");

var _cart2 = _interopRequireDefault(_cart);

var _toast = __webpack_require__(/*! ./modules/toast.js */ "./src/scripts/store/modules/toast.js");

var _toast2 = _interopRequireDefault(_toast);

var _products = __webpack_require__(/*! ./modules/products.js */ "./src/scripts/store/modules/products.js");

var _products2 = _interopRequireDefault(_products);

var _params = __webpack_require__(/*! ./modules/params.js */ "./src/scripts/store/modules/params.js");

var _params2 = _interopRequireDefault(_params);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vuex2.default);

// modules


var state = {};

exports.default = new _vuex2.default.Store({
  state: state,
  modules: {
    scriptBypass: _scriptBypass2.default,
    cart: _cart2.default,
    toast: _toast2.default,
    products: _products2.default,
    params: _params2.default
  }
});

/***/ }),

/***/ "./src/scripts/store/modules/cart.js":
/*!*******************************************!*\
  !*** ./src/scripts/store/modules/cart.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = {
  checkout: {},
  sidecartOpen: false
};

var mutations = {
  SET_CHECKOUT: function SET_CHECKOUT(state, checkout) {
    state.checkout = checkout;
  },
  OPEN_SIDECART: function OPEN_SIDECART(state) {
    state.sidecartOpen = true;
  },
  CLOSE_SIDECART: function CLOSE_SIDECART(state) {
    state.sidecartOpen = false;
  }
};

var actions = {
  init: function init(_ref) {
    var commit = _ref.commit;

    // forcing clean cart request for IE11
    var timestamp = new Date().getTime();

    _axios2.default.get('/cart.js?q=' + timestamp).then(function (response) {
      return commit('SET_CHECKOUT', response.data);
    });
  },
  addItem: function addItem(_ref2, _ref3) {
    var rootState = _ref2.rootState,
        state = _ref2.state,
        commit = _ref2.commit,
        dispatch = _ref2.dispatch;
    var id = _ref3.id,
        quantity = _ref3.quantity,
        _ref3$properties = _ref3.properties,
        properties = _ref3$properties === undefined ? {} : _ref3$properties;

    return new Promise(function (resolve, reject) {
      // forcing clean cart request for IE11
      var timestamp = new Date().getTime();

      _axios2.default.post('/cart/add.js', { id: id, quantity: quantity, properties: properties }).then(function () {
        // if this is a subscription product we need to refresh the cart products
        // this is because subscription products cannot be pulled from the product endpoint
        var productExistsInState = rootState.products.all.find(function (product) {
          return product.variants.find(function (variant) {
            return variant.id === id;
          });
        });

        if (!productExistsInState && properties && properties.subscription_id) {
          dispatch('products/init', null, { root: true });
        }
      }).then(function () {
        return _axios2.default.get('/cart.js?q=' + timestamp);
      }).then(function (response) {
        commit('SET_CHECKOUT', response.data);
        window.dispatchEvent(new CustomEvent('sidecart_updated'));
        resolve();
      }).catch(function (err) {
        console.log(err);
        reject(new Error('Unable to add the item to your cart.'));
      });
    });
  },
  updateItem: function updateItem(_ref4, _ref5) {
    var _this = this;

    var commit = _ref4.commit;
    var line = _ref5.line,
        quantity = _ref5.quantity;

    return new Promise(function (resolve, reject) {
      _axios2.default.post('/cart/change.js', { line: line, quantity: quantity }).then(function (response) {
        var item = response.data.items[line - 1];

        if (item && item.quantity < parseInt(quantity, 10)) {
          _this.dispatch('toast/send', {
            text: 'Could not add more ' + item.title + 's. They\'re all in your cart!',
            type: 'error'
          }, { root: true });
        }

        commit('SET_CHECKOUT', response.data);
        window.dispatchEvent(new CustomEvent('sidecart_updated'));
        resolve();
      }).catch(function (err) {
        console.log(err);
        reject(new Error('Unable to update the item in your cart.'));
      });
    });
  },
  removeItem: function removeItem(_ref6, line) {
    var commit = _ref6.commit;

    return new Promise(function (resolve, reject) {
      _axios2.default.post('/cart/change.js', { line: line, quantity: 0 }).then(function (response) {
        commit('SET_CHECKOUT', response.data);
        window.dispatchEvent(new CustomEvent('sidecart_updated'));
        resolve();
      }).catch(function (err) {
        console.log(err);
        reject(new Error('Unable to remove the item from your cart.'));
      });
    });
  },

  openSidecart: function openSidecart(_ref7) {
    var commit = _ref7.commit;
    return commit('OPEN_SIDECART');
  },
  closeSidecart: function closeSidecart(_ref8) {
    var commit = _ref8.commit;
    return commit('CLOSE_SIDECART');
  }
};

exports.default = { namespaced: true, state: state, mutations: mutations, actions: actions };

/***/ }),

/***/ "./src/scripts/store/modules/params.js":
/*!*********************************************!*\
  !*** ./src/scripts/store/modules/params.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable no-shadow */

var state = {};

var mutations = {
  ADD_PARAM: function ADD_PARAM(state, _ref) {
    var key = _ref.key,
        value = _ref.value;

    state[key] = value;
  }
};

var actions = {
  init: function init(_ref2) {
    var commit = _ref2.commit;

    var url = window.location.href;
    var start = url.indexOf('?');
    var stop = url.indexOf('#') > -1 ? url.indexOf('#') : url.length;
    var queryString = start > -1 ? url.substr(start + 1, stop - start - 1) : '';

    queryString.split('&').map(function (p) {
      return p.split('=');
    }).forEach(function (p) {
      return commit('ADD_PARAM', { key: p[0], value: p[1] });
    });
  }
};

exports.default = {
  state: state,
  mutations: mutations,
  actions: actions,
  namespaced: true
};

/***/ }),

/***/ "./src/scripts/store/modules/products.js":
/*!***********************************************!*\
  !*** ./src/scripts/store/modules/products.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _util = __webpack_require__(/*! scripts/helpers/util.js */ "./src/scripts/helpers/util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */

var queue = [];
var fetching = false;
var cartInitialized = false;

var queueFetch = function queueFetch(handle, commit) {
  queue.push(handle);
  if (!fetching && cartInitialized) fetchNextProduct(commit);
};

var fetchNextProduct = function fetchNextProduct(commit) {
  fetching = true;

  if (queue.length > 0) {
    fetchProduct(commit);
  } else {
    fetching = false;
  }
};

var fetchProduct = function fetchProduct(commit) {
  var handle = queue.shift();
  var existingProduct = state.all.find(function (p) {
    return p.handle === handle;
  });

  // don't fetch if this was retrieved as part of the cart products
  if (!existingProduct) {
    _axios2.default.get('/products/' + handle + '?view=json').then(function (response) {
      var productData = (0, _util.parseDataForEditor)(response.data);

      if (productData) commit('ADD_PRODUCT', response.data);
      fetchNextProduct(commit);
    });
  } else {
    fetchNextProduct(commit);
  }
};

var state = {
  all: []
};

var mutations = {
  ADD_PRODUCT: function ADD_PRODUCT(state, product) {
    state.all.push((0, _util.parseDataForEditor)(product));
  }
};

var actions = {
  init: function init(_ref) {
    var state = _ref.state,
        commit = _ref.commit;

    _axios2.default.get('/cart?view=json').then(function (response) {
      var cartData = (0, _util.parseDataForEditor)(response.data);

      cartData.forEach(function (product) {
        if (!state.all.find(function (p) {
          return p.handle === product.handle;
        })) commit('ADD_PRODUCT', product);
      });

      cartInitialized = true;
      fetchNextProduct(commit);
    });
  },
  addProduct: function addProduct(_ref2, handle) {
    var state = _ref2.state,
        commit = _ref2.commit;

    if (queue.indexOf(handle) < 0 && !state.all.find(function (p) {
      return p.handle === handle;
    })) {
      queueFetch(handle, commit);
    }
  },
  batchAddObjProducts: function batchAddObjProducts(_ref3, products) {
    var state = _ref3.state,
        commit = _ref3.commit;

    products.forEach(function (product) {
      if (queue.indexOf(product.handle) < 0 && !state.all.find(function (p) {
        return p.handle === product.handle;
      })) {
        commit('ADD_PRODUCT', product);
      }
    });
  }
};

exports.default = {
  state: state,
  mutations: mutations,
  actions: actions,
  namespaced: true
};

/***/ }),

/***/ "./src/scripts/store/modules/script-bypass.js":
/*!****************************************************!*\
  !*** ./src/scripts/store/modules/script-bypass.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable no-shadow */
var state = {
  elems: []
};

var mutations = {
  ADD_ELEM: function ADD_ELEM(state, elem) {
    state.elems.push(elem);
  }
};

var actions = {
  init: function init(_ref) {
    var commit = _ref.commit;

    document.querySelector('#app').querySelectorAll('style').forEach(function (node) {
      commit('ADD_ELEM', node);
      node.remove();
    });

    document.querySelector('#app').querySelectorAll('script').forEach(function (node) {
      commit('ADD_ELEM', node);
      node.remove();
    });
  },
  restore: function restore(_ref2) {
    var state = _ref2.state;

    state.elems.forEach(function (node) {
      document.querySelector('body').appendChild(node);
    });
  }
};

exports.default = {
  state: state,
  mutations: mutations,
  actions: actions,
  namespaced: true
};

/***/ }),

/***/ "./src/scripts/store/modules/toast.js":
/*!********************************************!*\
  !*** ./src/scripts/store/modules/toast.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* eslint-disable no-shadow */
var timeout = 5000;

var state = {
  messages: []
};

var mutations = {
  ADD_MESSAGE: function ADD_MESSAGE(state, message) {
    var id = new Date().getTime();

    state.messages.push(_extends({ id: id }, message));
    setTimeout(function () {
      return state.messages.splice(0, 1);
    }, timeout);
  }
};

var actions = {
  send: function send(_ref, message) {
    var commit = _ref.commit;

    commit('ADD_MESSAGE', message);
  }
};

exports.default = { namespaced: true, state: state, mutations: mutations, actions: actions };

/***/ }),

/***/ "./src/styles/variables.scss":
/*!***********************************!*\
  !*** ./src/styles/variables.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ref--1-2!./variables.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/styles/variables.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("31746a35", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvYmFzaWMvSWNvbi52dWUiLCJ3ZWJwYWNrOi8vL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvYmFzaWMvVG9hc3QudnVlIiwid2VicGFjazovLy9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2J1dHRvbnMvUHJpbWFyeUJ1dHRvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2Jhc2ljL0ljb24udnVlP2Q5MDQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9iYXNpYy9JY29uLnZ1ZT80NTkzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvYmFzaWMvVG9hc3QudnVlP2JiMjQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9idXR0b25zL1ByaW1hcnlCdXR0b24udnVlPzEzZTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9iYXNpYy9JY29uLnZ1ZT82OWQwIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvYmFzaWMvVG9hc3QudnVlPzA2NjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9idXR0b25zL1ByaW1hcnlCdXR0b24udnVlPzk5YTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9iYXNpYy9JY29uLnZ1ZT9iOTdlIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvYmFzaWMvSWNvbi52dWU/MTQ5YiIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2Jhc2ljL1RvYXN0LnZ1ZT9kMWEwIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvYnV0dG9ucy9QcmltYXJ5QnV0dG9uLnZ1ZT8zYzM4Iiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2J2YWNjZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9iYXNpYy9JY29uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2Jhc2ljL0ljb24udnVlPzY3OTYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9iYXNpYy9JY29uLnZ1ZT9mNzllIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvYmFzaWMvSWNvbi52dWU/ZGQ3ZSIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2Jhc2ljL0ljb24udnVlP2ZmYjMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9iYXNpYy9Ub2FzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9iYXNpYy9Ub2FzdC52dWU/YjFhNyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2Jhc2ljL1RvYXN0LnZ1ZT81N2Y1Iiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvYmFzaWMvVG9hc3QudnVlP2VmYWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9idXR0b25zL1ByaW1hcnlCdXR0b24udnVlIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvYnV0dG9ucy9QcmltYXJ5QnV0dG9uLnZ1ZT8wZDZmIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvYnV0dG9ucy9QcmltYXJ5QnV0dG9uLnZ1ZT81MWI3Iiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvYnV0dG9ucy9QcmltYXJ5QnV0dG9uLnZ1ZT9iYTFkIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZmlsdGVycy9pbWFnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZmlsdGVycy9tb25leS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9maWx0ZXJzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9oZWxwZXJzL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc3RvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc3RvcmUvbW9kdWxlcy9jYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3N0b3JlL21vZHVsZXMvcGFyYW1zLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3N0b3JlL21vZHVsZXMvcHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc3RvcmUvbW9kdWxlcy9zY3JpcHQtYnlwYXNzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3N0b3JlL21vZHVsZXMvdG9hc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy92YXJpYWJsZXMuc2Nzcz80N2Y3Il0sIm5hbWVzIjpbIl9fd2VicGFja19wdWJsaWNfcGF0aF9fIiwid2luZG93IiwiY3NzVmFycyIsInJlcXVpcmUiLCJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwidXNlIiwiVnVlMlRvdWNoRXZlbnRzIiwiVnVlTGF6eUxvYWQiLCJwcmVsb2FkIiwiYXR0ZW1wdCIsIlZ1ZU1xIiwiYnJlYWtwb2ludHMiLCJtb2JpbGUiLCJwYXJzZUludCIsImJyZWFrVGFibGV0IiwidGFibGV0IiwiYnJlYWtEZXNrdG9wIiwiZGVza3RvcCIsImJyZWFrSGQiLCJoZCIsIkluZmluaXR5IiwiVnVlU2Nyb2xsVG8iLCJvZmZzZXQiLCJmaWx0ZXIiLCJ1Y2ZpcnN0IiwidXBjYXNlIiwidW5oYW5kbGVpemUiLCJtb25leSIsIm1vbmV5V2l0aG91dERlY2ltYWxzIiwiZ2V0U2l6ZWRJbWFnZVVybCIsInN0b3JlIiwiZGVsaW1pdGVycyIsImNvbW1lbnRzIiwiY29tcG9uZW50cyIsImNvbXB1dGVkIiwiY2FydF9pdGVtX2NvdW50Iiwic3RhdGUiLCJjYXJ0IiwiY2hlY2tvdXQiLCJpdGVtX2NvdW50Iiwic2lkZWNhcnRPcGVuIiwiY3JlYXRlZCIsIiRzdG9yZSIsImRpc3BhdGNoIiwibW91bnRlZCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwic2VjdGlvbkNvbnRhaW5lciIsImdldEVsZW1lbnRCeUlkIiwidGFyZ2V0IiwiaWQiLCJOZXdDb21wb25lbnQiLCJleHRlbmQiLCJ0ZW1wbGF0ZSIsImlubmVySFRNTCIsImNvbXBvbmVudCIsIiRtb3VudCIsImFwcGVuZENoaWxkIiwiJGVsIiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50IiwibWV0aG9kcyIsImV2ZW50TmFtZSIsImV2ZW50RGF0YSIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiVG9hc3QiLCJzcmMiLCJzaXplIiwiY3VycmVudFNpemVSZWdFeCIsImV4dGVuc2lvblJlZ0V4IiwicmVwbGFjZSIsIm1hdGNoIiwidmFsdWUiLCJzdHIiLCJTdHJpbmciLCJwYXJzZUZsb2F0IiwiaW5kZXhPZiIsInN1YnN0cmluZyIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3BsaXQiLCJtYXAiLCJ3b3JkIiwiam9pbiIsImRlYm91bmNlIiwiZnVuYyIsIndhaXQiLCJpbW1lZGlhdGUiLCJ0aW1lb3V0IiwiY29udGV4dCIsImFyZ3MiLCJhcmd1bWVudHMiLCJsYXRlciIsImFwcGx5IiwiY2FsbE5vdyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJoYXNoIiwiaSIsImNociIsImxlbmd0aCIsImNoYXJDb2RlQXQiLCJjbG9uZSIsIm9iaiIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInBhcnNlRGF0YUZvckVkaXRvciIsImRhdGEiLCJwYXJzZWQiLCJlcnJvciIsImNvbnNvbGUiLCJlbWJlZFZpZGVvSWZyYW1lQXR0cmlidXRlcyIsInVybCIsIm9wdGlvbnMiLCJiYWNrZ3JvdW5kIiwiSE9TVCIsIlZJTUVPIiwiWU9VVFVCRSIsIlVSTCIsImhvc3QiLCJ2aWRlb0lkIiwiaG9zdG5hbWUiLCJwYXRobmFtZSIsInNlYXJjaFBhcmFtcyIsImdldCIsImV4ZWMiLCJhdHRyaWJ1dGVzIiwiZnJhbWVib3JkZXIiLCJhbGxvd2Z1bGxzY3JlZW4iLCJlbWJlZFVybCIsInNldCIsInRvSlNPTiIsImFsbG93IiwiY2xlYW5QaG9uZU51bWJlciIsInBob25lTnVtYmVyIiwiaGFuZGxlaXplIiwidG9Mb3dlckNhc2UiLCJWdWV4IiwiU3RvcmUiLCJtb2R1bGVzIiwic2NyaXB0QnlwYXNzIiwidG9hc3QiLCJwcm9kdWN0cyIsInBhcmFtcyIsIm11dGF0aW9ucyIsIlNFVF9DSEVDS09VVCIsIk9QRU5fU0lERUNBUlQiLCJDTE9TRV9TSURFQ0FSVCIsImFjdGlvbnMiLCJpbml0IiwiY29tbWl0IiwidGltZXN0YW1wIiwiRGF0ZSIsImdldFRpbWUiLCJheGlvcyIsInRoZW4iLCJyZXNwb25zZSIsImFkZEl0ZW0iLCJyb290U3RhdGUiLCJxdWFudGl0eSIsInByb3BlcnRpZXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInBvc3QiLCJwcm9kdWN0RXhpc3RzSW5TdGF0ZSIsImFsbCIsImZpbmQiLCJwcm9kdWN0IiwidmFyaWFudHMiLCJ2YXJpYW50Iiwic3Vic2NyaXB0aW9uX2lkIiwicm9vdCIsImNhdGNoIiwibG9nIiwiZXJyIiwiRXJyb3IiLCJ1cGRhdGVJdGVtIiwibGluZSIsIml0ZW0iLCJpdGVtcyIsInRleHQiLCJ0aXRsZSIsInR5cGUiLCJyZW1vdmVJdGVtIiwib3BlblNpZGVjYXJ0IiwiY2xvc2VTaWRlY2FydCIsIm5hbWVzcGFjZWQiLCJBRERfUEFSQU0iLCJrZXkiLCJsb2NhdGlvbiIsImhyZWYiLCJzdGFydCIsInN0b3AiLCJxdWVyeVN0cmluZyIsInN1YnN0ciIsInAiLCJmb3JFYWNoIiwicXVldWUiLCJmZXRjaGluZyIsImNhcnRJbml0aWFsaXplZCIsInF1ZXVlRmV0Y2giLCJoYW5kbGUiLCJwdXNoIiwiZmV0Y2hOZXh0UHJvZHVjdCIsImZldGNoUHJvZHVjdCIsInNoaWZ0IiwiZXhpc3RpbmdQcm9kdWN0IiwicHJvZHVjdERhdGEiLCJBRERfUFJPRFVDVCIsImNhcnREYXRhIiwiYWRkUHJvZHVjdCIsImJhdGNoQWRkT2JqUHJvZHVjdHMiLCJlbGVtcyIsIkFERF9FTEVNIiwiZWxlbSIsInF1ZXJ5U2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yQWxsIiwibm9kZSIsInJlbW92ZSIsInJlc3RvcmUiLCJtZXNzYWdlcyIsIkFERF9NRVNTQUdFIiwibWVzc2FnZSIsInNwbGljZSIsInNlbmQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztR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IGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9zY3JpcHRzL2J2YWNjZWwuanNcIixcInZlbmRvcnMtbWFpblwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIlxuPHRlbXBsYXRlIGxhbmc9XCJwdWdcIj5cbiAgc3ZnKDpjbGFzcz1cImljb25DbGFzc1wiLCA6c3R5bGU9XCJpY29uU3R5bGVcIilcbiAgICB1c2UoeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsIDp4bGluazpocmVmPVwiaWNvbk5hbWVcIilcbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnSWNvbicsXG4gICAgcHJvcHM6IHtcbiAgICAgIG5hbWU6IFN0cmluZyxcbiAgICAgIHNpemU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiAnMjRweCdcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICBpY29uQ2xhc3MgKCkge1xuICAgICAgICBsZXQgaWNvbkNsYXNzID0geyAnaWNvbic6IHRydWUgfTtcblxuICAgICAgICBpY29uQ2xhc3NbYGljb24tLSR7dGhpcy5uYW1lfWBdID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gaWNvbkNsYXNzXG4gICAgICB9LFxuICAgICAgaWNvblN0eWxlICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAnaGVpZ2h0JzogdGhpcy5zaXplLFxuICAgICAgICAgICd3aWR0aCc6IHRoaXMuc2l6ZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgaWNvbk5hbWUgKCkge1xuICAgICAgICByZXR1cm4gYCMke3RoaXMubmFtZX1gXG4gICAgICB9XG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4gIC5pY29uIHtcbiAgICBmaWxsOiAkdGV4dC0tbWFpbjtcbiAgfVxuPC9zdHlsZT5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxuICAuaWNvbiB7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlIGFsbDtcblxuICAgICYtLXVuZGVybGluZSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjIlKTtcbiAgICB9XG5cbiAgICBoMSAmLFxuICAgIGgyICYsXG4gICAgaDMgJixcbiAgICBoNCAmLFxuICAgIGg1ICYsXG4gICAgaDYgJixcbiAgICBwICYsXG4gICAgYSAmIHtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogc3ViO1xuICAgIH1cbiAgfVxuPC9zdHlsZT5cbiIsIlxuPHRlbXBsYXRlIGxhbmc9XCJwdWdcIj5cbiAgLnRvYXN0XG4gICAgdHJhbnNpdGlvbi1ncm91cChuYW1lPVwic2xpZGUtZmFkZS1yaWdodFwiKVxuICAgICAgLnRvYXN0X19tZXNzYWdlKFxuICAgICAgICB2LWZvcj1cIm1lc3NhZ2UgaW4gbWVzc2FnZXNcIiwgXG4gICAgICAgIDprZXk9XCJtZXNzYWdlLmlkXCIsXG4gICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yJzogbWVzc2FnZS50eXBlID09PSAnZXJyb3InIH1cIlxuICAgICAgKVxuICAgICAgICBwLnRvYXN0X19tZXNzYWdlX19jb3B5KHYtaHRtbD1cIm1lc3NhZ2UudGV4dFwiKVxuICAgICAgICBwcmltYXJ5LWJ1dHRvbi50b2FzdF9fbWVzc2FnZV9fY3RhKFxuICAgICAgICAgIHYtaWY9XCJtZXNzYWdlLmNhbGxiYWNrXCIsIFxuICAgICAgICAgIDpzbWFsbD1cInRydWVcIiwgXG4gICAgICAgICAgOnNlY29uZGFyeT1cInRydWVcIiwgXG4gICAgICAgICAgOmxhYmVsPVwibWVzc2FnZS5sYWJlbFwiLCBcbiAgICAgICAgICBAY2xpY2s9XCJtZXNzYWdlLmNhbGxiYWNrXCJcbiAgICAgICAgKVxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHsgbWFwU3RhdGUgfSBmcm9tICd2dWV4J1xuICBpbXBvcnQgUHJpbWFyeUJ1dHRvbiBmcm9tICdzY3JpcHRzL2NvbXBvbmVudHMvYnV0dG9ucy9QcmltYXJ5QnV0dG9uLnZ1ZSdcblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ1RvYXN0JyxcbiAgICBjb21wb25lbnRzOiB7IFByaW1hcnlCdXR0b24gfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgLi4ubWFwU3RhdGUoe1xuICAgICAgICBtZXNzYWdlczogc3RhdGUgPT4gc3RhdGUudG9hc3QubWVzc2FnZXNcbiAgICAgIH0pXG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxuICAudG9hc3Qge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDEwcHg7XG4gICAgbGVmdDogMTBweDtcbiAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICAgIGNvbG9yOiAkdGV4dC0tbGlnaHQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgQGluY2x1ZGUgdGFibGV0LXVwIHtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuXG4gICAgJl9fbWVzc2FnZSB7XG4gICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctLWRhcms7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG5cbiAgICAgICYuZXJyb3Ige1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItLWVycm9yO1xuICAgICAgfVxuXG4gICAgICAmX19jb3B5IHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNztcbiAgICAgIH1cblxuICAgICAgJl9fY3RhIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG48L3N0eWxlPlxuIiwiXG48dGVtcGxhdGUgbGFuZz1cInB1Z1wiPlxuICBidXR0b24uYnV0dG9uKFxuICAgIHR5cGU9XCJidXR0b25cIiwgXG4gICAgcmVmPVwiYnV0dG9uXCIsXG4gICAgOmNsYXNzPVwiYnV0dG9uQ2xhc3NcIixcbiAgICA6ZGlzYWJsZWQ9XCJpc0Rpc2FibGVkXCIsXG4gICAgQGNsaWNrLnN0b3A9XCIkZW1pdCgnY2xpY2snKVwiXG4gIClcbiAgICBpY29uKHYtaWY9XCJpY29uXCIsIDpuYW1lPVwiaWNvblwiLCA6c2l6ZT1cImljb25TaXplXCIpXG4gICAgc3Bhbi5idXR0b25fX3RleHQge3sgbGFiZWwgfX1cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBJY29uIGZyb20gJ3NjcmlwdHMvY29tcG9uZW50cy9iYXNpYy9JY29uLnZ1ZSdcblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ1ByaW1hcnlCdXR0b24nLFxuICAgIGNvbXBvbmVudHM6IHsgSWNvbiB9LFxuICAgIHByb3BzOiB7XG4gICAgICBsYWJlbDogU3RyaW5nLFxuICAgICAgaWNvbjogU3RyaW5nLFxuICAgICAgaWNvblNpemU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0ICgpIHtcbiAgICAgICAgICByZXR1cm4gKHRoaXMuc21hbGwpID8gJzEycHgnIDogJzE2cHgnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzbWFsbDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgfSxcbiAgICAgIGZ1bGw6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBzZWNvbmRhcnk6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBvdXRsaW5lOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICB9LFxuICAgICAgbGlnaHQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBzaW1wbGU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgIH0sXG4gICAgICB0ZXh0OiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICB9LFxuICAgICAgZmxleDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgfSxcbiAgICAgIGlubGluZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgfSxcbiAgICAgIGJsb2NrOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGRpc2FibGVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICB9LFxuICAgICAgbG9hZGluZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgIGJ1dHRvbkNsYXNzICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAnYnV0dG9uLS1wcmltYXJ5JzogdGhpcy5zZWNvbmRhcnkgPT09IGZhbHNlLFxuICAgICAgICAgICdidXR0b24tLXNlY29uZGFyeSc6IHRoaXMuc2Vjb25kYXJ5ID09PSB0cnVlLFxuICAgICAgICAgICdidXR0b24tLW91dGxpbmUnOiB0aGlzLm91dGxpbmUgPT09IHRydWUsXG4gICAgICAgICAgJ2J1dHRvbi0tbGlnaHQnOiB0aGlzLmxpZ2h0ID09PSB0cnVlLFxuICAgICAgICAgICdidXR0b24tLXNtYWxsJzogdGhpcy5zbWFsbCA9PT0gdHJ1ZSxcbiAgICAgICAgICAnYnV0dG9uLS1zaW1wbGUnOiB0aGlzLnNpbXBsZSA9PT0gdHJ1ZSxcbiAgICAgICAgICAnYnV0dG9uLS1mdWxsJzogdGhpcy5mdWxsID09PSB0cnVlLFxuICAgICAgICAgICdidXR0b24tLXRleHQnOiB0aGlzLnRleHQgPT09IHRydWUsXG4gICAgICAgICAgJ2J1dHRvbi0tZmxleCc6IHRoaXMuZmxleCA9PT0gdHJ1ZSxcbiAgICAgICAgICAnYnV0dG9uLS1pbmxpbmUnOiB0aGlzLmlubGluZSA9PT0gdHJ1ZSxcbiAgICAgICAgICAnYnV0dG9uLS1ibG9jayc6IHRoaXMuYmxvY2sgPT09IHRydWUsXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBpc0Rpc2FibGVkICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5sb2FkaW5nXG4gICAgICB9XG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG5idXR0b24uYnV0dG9uLFxuYS5idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAmLmJ1dHRvbi0tZnVsbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAmLmJ1dHRvbi0tdGV4dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gICYuYnV0dG9uLS1pbmxpbmUge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgfVxuXG4gICYuYnV0dG9uLS1ibG9jayB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cblxuLmJ1dHRvbl9fdGV4dCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6ICR0ZXh0LS1saWdodDtcblxuICAuYnV0dG9uLS10ZXh0ICYge1xuICAgIGNvbG9yOiAkY29sb3ItYmxhY2s7XG4gICAgZm9udC1zaXplOiByZW0oMTMpO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjRweDtcblxuICAgICY6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMXB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsYWNrO1xuICAgIH1cbiAgfVxufVxuPC9zdHlsZT5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXG5cXG4gIEJvaWxlcnBsYXRlIGlzIGEgY29sbGVjdGlvbiBvZiBhbGwgdGhlIFNDU1MgcGFydGlhbHNcXG4gIHRoYXQgZG8gbm90IG91dHB1dCBDU1Mgd2hlbiBjb21waWxlZC5cXG5cXG4gIEluY2x1ZGUgdGhpcyBmaWxlIGluIGNvbXBvbmVudHMgdG8gcHVsbCBpbiB0aGVtZVxcbiAgdmFyaWFibGVzLCBmdW5jdGlvbnMsIGFuZCBtaXhpbnMgZm9yIHVzZSBpbiBzY29wZWRcXG4gIHN0eWxpbmcuXFxuXFxuKi9cXG5cXG4vKipcXG4gKiBGb3JjZXMgYW4gZWxlbWVudCB0byBzZWxmLWNsZWFyIGl0cyBjaGlsZHJlblxcbiAqXFxuICogVXNhZ2U6XFxuICogLnNlbGVjdG9yIHtcXG4gKiAgIEBpbmNsdWRlIGNsZWFyZml4O1xcbiAqIH1cXG4gKi9cXG4vKipcXG4gKiBIaWRlIGVsZW1lbnQgYnV0IG1ha2UgaXQgYWNjZXNzaWJsZSB0byBzY3JlZW4gcmVhZGVyc1xcbiAqXFxuICogVXNhZ2U6XFxuICogLnNlbGVjdG9yIHtcXG4gKiAgIEBpbmNsdWRlIHZpc3VhbGx5LWhpZGRlbjtcXG4gKiB9XFxuICovXFxuLyoqXFxuICogUmV2ZXJzZSB0aGUgcHJvcGVydGllcyBhcHBsaWVkIGJ5IEBtaXhpbiB2aXN1YWxseS1oaWRkZW5cXG4gKlxcbiAqIEFjY2VwdHM6XFxuICogLSAkcG9zaXRpb246IHtTdHJpbmd9IFBvc2l0aW9uaW5nIG1ldGhvZCBmb3IgZWxlbWVudFxcbiAqXFxuICogVXNhZ2U6XFxuICogLnNlbGVjdG9yIHtcXG4gKiAgIEBpbmNsdWRlIHZpc3VhbGx5LXNob3duKHJlbGF0aXZlKTtcXG4gKiB9XFxuICovXFxuXCIsIFwiXCJdKTtcblxuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiYnJlYWtUYWJsZXRcIjogXCI3NjhweFwiLFxuXHRcImJyZWFrRGVza3RvcFwiOiBcIjEwMjRweFwiLFxuXHRcImJyZWFrSGRcIjogXCIxMjgwcHhcIlxufTsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxuXFxuICBCb2lsZXJwbGF0ZSBpcyBhIGNvbGxlY3Rpb24gb2YgYWxsIHRoZSBTQ1NTIHBhcnRpYWxzXFxuICB0aGF0IGRvIG5vdCBvdXRwdXQgQ1NTIHdoZW4gY29tcGlsZWQuXFxuXFxuICBJbmNsdWRlIHRoaXMgZmlsZSBpbiBjb21wb25lbnRzIHRvIHB1bGwgaW4gdGhlbWVcXG4gIHZhcmlhYmxlcywgZnVuY3Rpb25zLCBhbmQgbWl4aW5zIGZvciB1c2UgaW4gc2NvcGVkXFxuICBzdHlsaW5nLlxcblxcbiovXFxuXFxuLyoqXFxuICogRm9yY2VzIGFuIGVsZW1lbnQgdG8gc2VsZi1jbGVhciBpdHMgY2hpbGRyZW5cXG4gKlxcbiAqIFVzYWdlOlxcbiAqIC5zZWxlY3RvciB7XFxuICogICBAaW5jbHVkZSBjbGVhcmZpeDtcXG4gKiB9XFxuICovXFxuLyoqXFxuICogSGlkZSBlbGVtZW50IGJ1dCBtYWtlIGl0IGFjY2Vzc2libGUgdG8gc2NyZWVuIHJlYWRlcnNcXG4gKlxcbiAqIFVzYWdlOlxcbiAqIC5zZWxlY3RvciB7XFxuICogICBAaW5jbHVkZSB2aXN1YWxseS1oaWRkZW47XFxuICogfVxcbiAqL1xcbi8qKlxcbiAqIFJldmVyc2UgdGhlIHByb3BlcnRpZXMgYXBwbGllZCBieSBAbWl4aW4gdmlzdWFsbHktaGlkZGVuXFxuICpcXG4gKiBBY2NlcHRzOlxcbiAqIC0gJHBvc2l0aW9uOiB7U3RyaW5nfSBQb3NpdGlvbmluZyBtZXRob2QgZm9yIGVsZW1lbnRcXG4gKlxcbiAqIFVzYWdlOlxcbiAqIC5zZWxlY3RvciB7XFxuICogICBAaW5jbHVkZSB2aXN1YWxseS1zaG93bihyZWxhdGl2ZSk7XFxuICogfVxcbiAqL1xcbi5pY29uIHtcXG4gIGZpbGw6ICMwMDA7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImJyZWFrVGFibGV0XCI6IFwiNzY4cHhcIixcblx0XCJicmVha0Rlc2t0b3BcIjogXCIxMDI0cHhcIixcblx0XCJicmVha0hkXCI6IFwiMTI4MHB4XCJcbn07IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcblxcbiAgQm9pbGVycGxhdGUgaXMgYSBjb2xsZWN0aW9uIG9mIGFsbCB0aGUgU0NTUyBwYXJ0aWFsc1xcbiAgdGhhdCBkbyBub3Qgb3V0cHV0IENTUyB3aGVuIGNvbXBpbGVkLlxcblxcbiAgSW5jbHVkZSB0aGlzIGZpbGUgaW4gY29tcG9uZW50cyB0byBwdWxsIGluIHRoZW1lXFxuICB2YXJpYWJsZXMsIGZ1bmN0aW9ucywgYW5kIG1peGlucyBmb3IgdXNlIGluIHNjb3BlZFxcbiAgc3R5bGluZy5cXG5cXG4qL1xcbltkYXRhLXYtNzEzNTZkYTNdOmV4cG9ydCB7XFxuICBicmVha1RhYmxldDogNzY4cHg7XFxuICBicmVha0Rlc2t0b3A6IDEwMjRweDtcXG4gIGJyZWFrSGQ6IDEyODBweDtcXG59XFxuXFxuLyoqXFxuICogRm9yY2VzIGFuIGVsZW1lbnQgdG8gc2VsZi1jbGVhciBpdHMgY2hpbGRyZW5cXG4gKlxcbiAqIFVzYWdlOlxcbiAqIC5zZWxlY3RvciB7XFxuICogICBAaW5jbHVkZSBjbGVhcmZpeDtcXG4gKiB9XFxuICovXFxuLyoqXFxuICogSGlkZSBlbGVtZW50IGJ1dCBtYWtlIGl0IGFjY2Vzc2libGUgdG8gc2NyZWVuIHJlYWRlcnNcXG4gKlxcbiAqIFVzYWdlOlxcbiAqIC5zZWxlY3RvciB7XFxuICogICBAaW5jbHVkZSB2aXN1YWxseS1oaWRkZW47XFxuICogfVxcbiAqL1xcbi8qKlxcbiAqIFJldmVyc2UgdGhlIHByb3BlcnRpZXMgYXBwbGllZCBieSBAbWl4aW4gdmlzdWFsbHktaGlkZGVuXFxuICpcXG4gKiBBY2NlcHRzOlxcbiAqIC0gJHBvc2l0aW9uOiB7U3RyaW5nfSBQb3NpdGlvbmluZyBtZXRob2QgZm9yIGVsZW1lbnRcXG4gKlxcbiAqIFVzYWdlOlxcbiAqIC5zZWxlY3RvciB7XFxuICogICBAaW5jbHVkZSB2aXN1YWxseS1zaG93bihyZWxhdGl2ZSk7XFxuICogfVxcbiAqL1xcbi5pY29uW2RhdGEtdi03MTM1NmRhM10ge1xcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlIGFsbDtcXG59XFxuLmljb24tLXVuZGVybGluZVtkYXRhLXYtNzEzNTZkYTNdIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIyJSk7XFxufVxcbmgxIC5pY29uW2RhdGEtdi03MTM1NmRhM10sXFxuICBoMiAuaWNvbltkYXRhLXYtNzEzNTZkYTNdLFxcbiAgaDMgLmljb25bZGF0YS12LTcxMzU2ZGEzXSxcXG4gIGg0IC5pY29uW2RhdGEtdi03MTM1NmRhM10sXFxuICBoNSAuaWNvbltkYXRhLXYtNzEzNTZkYTNdLFxcbiAgaDYgLmljb25bZGF0YS12LTcxMzU2ZGEzXSxcXG4gIHAgLmljb25bZGF0YS12LTcxMzU2ZGEzXSxcXG4gIGEgLmljb25bZGF0YS12LTcxMzU2ZGEzXSB7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBzdWI7XFxufVxcblwiLCBcIlwiXSk7XG5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXG5cXG4gIEJvaWxlcnBsYXRlIGlzIGEgY29sbGVjdGlvbiBvZiBhbGwgdGhlIFNDU1MgcGFydGlhbHNcXG4gIHRoYXQgZG8gbm90IG91dHB1dCBDU1Mgd2hlbiBjb21waWxlZC5cXG5cXG4gIEluY2x1ZGUgdGhpcyBmaWxlIGluIGNvbXBvbmVudHMgdG8gcHVsbCBpbiB0aGVtZVxcbiAgdmFyaWFibGVzLCBmdW5jdGlvbnMsIGFuZCBtaXhpbnMgZm9yIHVzZSBpbiBzY29wZWRcXG4gIHN0eWxpbmcuXFxuXFxuKi9cXG5bZGF0YS12LTFhYTFkYzZkXTpleHBvcnQge1xcbiAgYnJlYWtUYWJsZXQ6IDc2OHB4O1xcbiAgYnJlYWtEZXNrdG9wOiAxMDI0cHg7XFxuICBicmVha0hkOiAxMjgwcHg7XFxufVxcblxcbi8qKlxcbiAqIEZvcmNlcyBhbiBlbGVtZW50IHRvIHNlbGYtY2xlYXIgaXRzIGNoaWxkcmVuXFxuICpcXG4gKiBVc2FnZTpcXG4gKiAuc2VsZWN0b3Ige1xcbiAqICAgQGluY2x1ZGUgY2xlYXJmaXg7XFxuICogfVxcbiAqL1xcbi8qKlxcbiAqIEhpZGUgZWxlbWVudCBidXQgbWFrZSBpdCBhY2Nlc3NpYmxlIHRvIHNjcmVlbiByZWFkZXJzXFxuICpcXG4gKiBVc2FnZTpcXG4gKiAuc2VsZWN0b3Ige1xcbiAqICAgQGluY2x1ZGUgdmlzdWFsbHktaGlkZGVuO1xcbiAqIH1cXG4gKi9cXG4vKipcXG4gKiBSZXZlcnNlIHRoZSBwcm9wZXJ0aWVzIGFwcGxpZWQgYnkgQG1peGluIHZpc3VhbGx5LWhpZGRlblxcbiAqXFxuICogQWNjZXB0czpcXG4gKiAtICRwb3NpdGlvbjoge1N0cmluZ30gUG9zaXRpb25pbmcgbWV0aG9kIGZvciBlbGVtZW50XFxuICpcXG4gKiBVc2FnZTpcXG4gKiAuc2VsZWN0b3Ige1xcbiAqICAgQGluY2x1ZGUgdmlzdWFsbHktc2hvd24ocmVsYXRpdmUpO1xcbiAqIH1cXG4gKi9cXG4udG9hc3RbZGF0YS12LTFhYTFkYzZkXSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDEwcHg7XFxuICBsZWZ0OiAxMHB4O1xcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4udG9hc3RbZGF0YS12LTFhYTFkYzZkXSB7XFxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxufVxcbi50b2FzdF9fbWVzc2FnZVtkYXRhLXYtMWFhMWRjNmRdIHtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuLnRvYXN0X19tZXNzYWdlLmVycm9yW2RhdGEtdi0xYWExZGM2ZF0ge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYjE2MmU7XFxufVxcbi50b2FzdF9fbWVzc2FnZV9fY29weVtkYXRhLXYtMWFhMWRjNmRdIHtcXG4gICAgICBsaW5lLWhlaWdodDogMS43O1xcbn1cXG4udG9hc3RfX21lc3NhZ2VfX2N0YVtkYXRhLXYtMWFhMWRjNmRdIHtcXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXCIsIFwiXCJdKTtcblxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcblxcbiAgQm9pbGVycGxhdGUgaXMgYSBjb2xsZWN0aW9uIG9mIGFsbCB0aGUgU0NTUyBwYXJ0aWFsc1xcbiAgdGhhdCBkbyBub3Qgb3V0cHV0IENTUyB3aGVuIGNvbXBpbGVkLlxcblxcbiAgSW5jbHVkZSB0aGlzIGZpbGUgaW4gY29tcG9uZW50cyB0byBwdWxsIGluIHRoZW1lXFxuICB2YXJpYWJsZXMsIGZ1bmN0aW9ucywgYW5kIG1peGlucyBmb3IgdXNlIGluIHNjb3BlZFxcbiAgc3R5bGluZy5cXG5cXG4qL1xcblxcbi8qKlxcbiAqIEZvcmNlcyBhbiBlbGVtZW50IHRvIHNlbGYtY2xlYXIgaXRzIGNoaWxkcmVuXFxuICpcXG4gKiBVc2FnZTpcXG4gKiAuc2VsZWN0b3Ige1xcbiAqICAgQGluY2x1ZGUgY2xlYXJmaXg7XFxuICogfVxcbiAqL1xcbi8qKlxcbiAqIEhpZGUgZWxlbWVudCBidXQgbWFrZSBpdCBhY2Nlc3NpYmxlIHRvIHNjcmVlbiByZWFkZXJzXFxuICpcXG4gKiBVc2FnZTpcXG4gKiAuc2VsZWN0b3Ige1xcbiAqICAgQGluY2x1ZGUgdmlzdWFsbHktaGlkZGVuO1xcbiAqIH1cXG4gKi9cXG4vKipcXG4gKiBSZXZlcnNlIHRoZSBwcm9wZXJ0aWVzIGFwcGxpZWQgYnkgQG1peGluIHZpc3VhbGx5LWhpZGRlblxcbiAqXFxuICogQWNjZXB0czpcXG4gKiAtICRwb3NpdGlvbjoge1N0cmluZ30gUG9zaXRpb25pbmcgbWV0aG9kIGZvciBlbGVtZW50XFxuICpcXG4gKiBVc2FnZTpcXG4gKiAuc2VsZWN0b3Ige1xcbiAqICAgQGluY2x1ZGUgdmlzdWFsbHktc2hvd24ocmVsYXRpdmUpO1xcbiAqIH1cXG4gKi9cXG5idXR0b24uYnV0dG9uLFxcbmEuYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuYnV0dG9uLmJ1dHRvbi5idXR0b24tLWZ1bGwsXFxuICBhLmJ1dHRvbi5idXR0b24tLWZ1bGwge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuYnV0dG9uLmJ1dHRvbi5idXR0b24tLXRleHQsXFxuICBhLmJ1dHRvbi5idXR0b24tLXRleHQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcbmJ1dHRvbi5idXR0b24uYnV0dG9uLS1pbmxpbmUsXFxuICBhLmJ1dHRvbi5idXR0b24tLWlubGluZSB7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG59XFxuYnV0dG9uLmJ1dHRvbi5idXR0b24tLWJsb2NrLFxcbiAgYS5idXR0b24uYnV0dG9uLS1ibG9jayB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uYnV0dG9uX190ZXh0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uYnV0dG9uLS10ZXh0IC5idXR0b25fX3RleHQge1xcbiAgICBjb2xvcjogIzAwMDtcXG4gICAgZm9udC1zaXplOiAwLjgxMjVyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjRweDtcXG59XFxuLmJ1dHRvbi0tdGV4dCAuYnV0dG9uX190ZXh0OjphZnRlciB7XFxuICAgICAgY29udGVudDogJyc7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiAxcHg7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiYnJlYWtUYWJsZXRcIjogXCI3NjhweFwiLFxuXHRcImJyZWFrRGVza3RvcFwiOiBcIjEwMjRweFwiLFxuXHRcImJyZWFrSGRcIjogXCIxMjgwcHhcIlxufTsiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwic3ZnXCIsIHsgY2xhc3M6IF92bS5pY29uQ2xhc3MsIHN0eWxlOiBfdm0uaWNvblN0eWxlIH0sIFtcbiAgICBfYyhcInVzZVwiLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcInhtbG5zOnhsaW5rXCI6IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLFxuICAgICAgICBcInhsaW5rOmhyZWZcIjogX3ZtLmljb25OYW1lXG4gICAgICB9XG4gICAgfSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJ0b2FzdFwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidHJhbnNpdGlvbi1ncm91cFwiLFxuICAgICAgICB7IGF0dHJzOiB7IG5hbWU6IFwic2xpZGUtZmFkZS1yaWdodFwiIH0gfSxcbiAgICAgICAgX3ZtLl9sKF92bS5tZXNzYWdlcywgZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogbWVzc2FnZS5pZCxcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidG9hc3RfX21lc3NhZ2VcIixcbiAgICAgICAgICAgICAgY2xhc3M6IHsgZXJyb3I6IG1lc3NhZ2UudHlwZSA9PT0gXCJlcnJvclwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwicFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidG9hc3RfX21lc3NhZ2VfX2NvcHlcIixcbiAgICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhtZXNzYWdlLnRleHQpIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIG1lc3NhZ2UuY2FsbGJhY2tcbiAgICAgICAgICAgICAgICA/IF9jKFwicHJpbWFyeS1idXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0b2FzdF9fbWVzc2FnZV9fY3RhXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc21hbGw6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBtZXNzYWdlLmxhYmVsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBtZXNzYWdlLmNhbGxiYWNrIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIH0pLFxuICAgICAgICAwXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiYnV0dG9uXCIsXG4gICAge1xuICAgICAgcmVmOiBcImJ1dHRvblwiLFxuICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uXCIsXG4gICAgICBjbGFzczogX3ZtLmJ1dHRvbkNsYXNzLFxuICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiwgZGlzYWJsZWQ6IF92bS5pc0Rpc2FibGVkIH0sXG4gICAgICBvbjoge1xuICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImNsaWNrXCIpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF92bS5pY29uXG4gICAgICAgID8gX2MoXCJpY29uXCIsIHsgYXR0cnM6IHsgbmFtZTogX3ZtLmljb24sIHNpemU6IF92bS5pY29uU2l6ZSB9IH0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJidXR0b25fX3RleHRcIiB9LCBbX3ZtLl92KF92bS5fcyhfdm0ubGFiZWwpKV0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JY29uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNWFkMTY5MThcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSWNvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSWNvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JY29uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmlkPTcxMzU2ZGEzJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMzFlNWZkYjRcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSWNvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD03MTM1NmRhMyZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSWNvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD03MTM1NmRhMyZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ub2FzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xYWExZGM2ZCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjEyYWFmNDIyXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RvYXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFhYTFkYzZkJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ub2FzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xYWExZGM2ZCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QcmltYXJ5QnV0dG9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMjlhODEzZjdcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUHJpbWFyeUJ1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUHJpbWFyeUJ1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZXh0ZW5zaW9ucyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuXG5pbXBvcnQgJ2NvcmUtanMnO1xuaW1wb3J0ICdyZWdlbmVyYXRvci1ydW50aW1lJzsgLy8gZm9yIGFzeW5jL2F3YWl0XG5cbmltcG9ydCBWdWUgZnJvbSAndnVlJztcbmltcG9ydCBWdWUyVG91Y2hFdmVudHMgZnJvbSAndnVlMi10b3VjaC1ldmVudHMnO1xuXG5pbXBvcnQgVnVlTGF6eUxvYWQgZnJvbSAndnVlLWxhenlsb2FkJztcbmltcG9ydCBWdWVNcSBmcm9tICd2dWUtbXEnO1xuaW1wb3J0IFZ1ZVNjcm9sbFRvIGZyb20gJ3Z1ZS1zY3JvbGx0byc7XG5pbXBvcnQgeyBtYXBTdGF0ZSB9IGZyb20gJ3Z1ZXgnO1xuXG5pbXBvcnQgY29tcG9uZW50cyBmcm9tICcuL2NvbXBvbmVudHMnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnO1xuaW1wb3J0IHsgdWNmaXJzdCwgdXBjYXNlLCB1bmhhbmRsZWl6ZSB9IGZyb20gJy4vZmlsdGVycy9zdHJpbmcuanMnO1xuaW1wb3J0IHsgbW9uZXksIG1vbmV5V2l0aG91dERlY2ltYWxzIH0gZnJvbSAnLi9maWx0ZXJzL21vbmV5LmpzJztcbmltcG9ydCB7IGdldFNpemVkSW1hZ2VVcmwgfSBmcm9tICcuL2ZpbHRlcnMvaW1hZ2VzLmpzJztcblxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuX193ZWJwYWNrX3B1YmxpY19wYXRoX187XG5cbmNvbnN0IGNzc1ZhcnMgPSByZXF1aXJlKCcuLi9zdHlsZXMvdmFyaWFibGVzLnNjc3MnKTtcblxuVnVlLmNvbmZpZy5wcm9kdWN0aW9uVGlwID0gZmFsc2U7XG5cblZ1ZS51c2UoVnVlMlRvdWNoRXZlbnRzKTtcblxuVnVlLnVzZShWdWVMYXp5TG9hZCwge1xuICBwcmVsb2FkOiAxLjMsXG4gIGF0dGVtcHQ6IDEsXG59KTtcblxuVnVlLnVzZShWdWVNcSwge1xuICBicmVha3BvaW50czoge1xuICAgIG1vYmlsZTogcGFyc2VJbnQoY3NzVmFycy5icmVha1RhYmxldCwgMTApLFxuICAgIHRhYmxldDogcGFyc2VJbnQoY3NzVmFycy5icmVha0Rlc2t0b3AsIDEwKSxcbiAgICBkZXNrdG9wOiBwYXJzZUludChjc3NWYXJzLmJyZWFrSGQsIDEwKSxcbiAgICBoZDogSW5maW5pdHksXG4gIH0sXG59KTtcblxuVnVlLnVzZShWdWVTY3JvbGxUbywge1xuICBvZmZzZXQ6IC0xNDAsXG59KTtcblxuVnVlLmZpbHRlcigndWNmaXJzdCcsIHVjZmlyc3QpO1xuVnVlLmZpbHRlcigndXBjYXNlJywgdXBjYXNlKTtcblZ1ZS5maWx0ZXIoJ3VuaGFuZGxlaXplJywgdW5oYW5kbGVpemUpO1xuVnVlLmZpbHRlcignbW9uZXknLCBtb25leSk7XG5WdWUuZmlsdGVyKCdtb25leVdpdGhvdXREZWNpbWFscycsIG1vbmV5V2l0aG91dERlY2ltYWxzKTtcblZ1ZS5maWx0ZXIoJ2ltYWdlJywgZ2V0U2l6ZWRJbWFnZVVybCk7XG5cbm5ldyBWdWUoe1xuICBzdG9yZSxcbiAgZGVsaW1pdGVyczogWyc8JScsICclPiddLFxuICBjb21tZW50czogdHJ1ZSxcbiAgY29tcG9uZW50cyxcbiAgY29tcHV0ZWQ6IHtcbiAgICAuLi5tYXBTdGF0ZSh7XG4gICAgICBjYXJ0X2l0ZW1fY291bnQ6IChzdGF0ZSkgPT4gc3RhdGUuY2FydC5jaGVja291dC5pdGVtX2NvdW50LFxuICAgICAgc2lkZWNhcnRPcGVuOiAoc3RhdGUpID0+IHN0YXRlLmNhcnQuc2lkZWNhcnRPcGVuLFxuICAgIH0pLFxuICB9LFxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdwYXJhbXMvaW5pdCcpO1xuICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdjYXJ0L2luaXQnKTtcbiAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgncHJvZHVjdHMvaW5pdCcpO1xuICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdzY3JpcHRCeXBhc3MvaW5pdCcpO1xuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdzY3JpcHRCeXBhc3MvcmVzdG9yZScpO1xuXG4gICAgLy8gb24gbW91bnQsIHN0YXJ0IGxpc3RlbmluZyBmb3IgbG9hZCBldmVudHNcbiAgICAvLyBvbiBhIHNlY3Rpb24gbG9hZCwgcmUtbW91bnQgc2VjdGlvbiB0byByZWZsZWN0IGFkbWluIGNoYW5nZXNcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzaG9waWZ5OnNlY3Rpb246bG9hZCcsIChldmVudCkgPT4ge1xuICAgICAgY29uc3Qgc2VjdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGV2ZW50LnRhcmdldC5pZCk7XG4gICAgICBjb25zdCBOZXdDb21wb25lbnQgPSBWdWUuZXh0ZW5kKHtcbiAgICAgICAgY29tcG9uZW50cyxcbiAgICAgICAgdGVtcGxhdGU6IGV2ZW50LnRhcmdldC5pbm5lckhUTUwsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBOZXdDb21wb25lbnQoe1xuICAgICAgICBzdG9yZSxcbiAgICAgIH0pLiRtb3VudCgpO1xuXG4gICAgICBzZWN0aW9uQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgc2VjdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wb25lbnQuJGVsKTtcbiAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgncmVzaXplJykpO1xuICAgIH0pO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgZGlzcGF0Y2hFdmVudChldmVudE5hbWUsIGV2ZW50RGF0YSA9IHt9KSB7XG4gICAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudChldmVudE5hbWUsIHsgZGV0YWlsOiBldmVudERhdGEgfSk7XG4gICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICB9LFxuICB9LFxufSkuJG1vdW50KCcjYXBwJyk7XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0ljb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTcxMzU2ZGEzJnNjb3BlZD10cnVlJmxhbmc9cHVnJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ljb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9JY29uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9JY29uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIlxuaW1wb3J0IHN0eWxlMSBmcm9tIFwiLi9JY29uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmlkPTcxMzU2ZGEzJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNzEzNTZkYTNcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvamltbXkvRGVza3RvcC9tYXN0ZXIvcHVyaXR5LWNvc21ldGljcy1naXQvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNzEzNTZkYTMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNzEzNTZkYTMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNzEzNTZkYTMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0ljb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTcxMzU2ZGEzJnNjb3BlZD10cnVlJmxhbmc9cHVnJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzcxMzU2ZGEzJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvc2NyaXB0cy9jb21wb25lbnRzL2Jhc2ljL0ljb24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSWNvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ljb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JY29uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSWNvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD03MTM1NmRhMyZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wdWctcGxhaW4tbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSWNvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzEzNTZkYTMmc2NvcGVkPXRydWUmbGFuZz1wdWcmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1RvYXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYWExZGM2ZCZzY29wZWQ9dHJ1ZSZsYW5nPXB1ZyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Ub2FzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1RvYXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Ub2FzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xYWExZGM2ZCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjFhYTFkYzZkXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2ppbW15L0Rlc2t0b3AvbWFzdGVyL3B1cml0eS1jb3NtZXRpY3MtZ2l0L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzFhYTFkYzZkJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzFhYTFkYzZkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzFhYTFkYzZkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Ub2FzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWFhMWRjNmQmc2NvcGVkPXRydWUmbGFuZz1wdWcmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMWFhMWRjNmQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9zY3JpcHRzL2NvbXBvbmVudHMvYmFzaWMvVG9hc3QudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVG9hc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ub2FzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RvYXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFhYTFkYzZkJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy1wbGFpbi1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ub2FzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWFhMWRjNmQmc2NvcGVkPXRydWUmbGFuZz1wdWcmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1ByaW1hcnlCdXR0b24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE0MGUwZTZkJmxhbmc9cHVnJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1ByaW1hcnlCdXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9QcmltYXJ5QnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9QcmltYXJ5QnV0dG9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2ppbW15L0Rlc2t0b3AvbWFzdGVyL3B1cml0eS1jb3NtZXRpY3MtZ2l0L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzE0MGUwZTZkJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzE0MGUwZTZkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzE0MGUwZTZkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9QcmltYXJ5QnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNDBlMGU2ZCZsYW5nPXB1ZyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxNDBlMGU2ZCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3NjcmlwdHMvY29tcG9uZW50cy9idXR0b25zL1ByaW1hcnlCdXR0b24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUHJpbWFyeUJ1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1ByaW1hcnlCdXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QcmltYXJ5QnV0dG9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy1wbGFpbi1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QcmltYXJ5QnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNDBlMGU2ZCZsYW5nPXB1ZyZcIiIsImltcG9ydCBUb2FzdCBmcm9tICdzY3JpcHRzL2NvbXBvbmVudHMvYmFzaWMvVG9hc3QudnVlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBUb2FzdCxcbn07XG4iLCIvKiBlc2xpbnQgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydDogXCJvZmZcIiAqL1xuXG4vKipcbiAqIFJlc2l6ZXMgYSBTaG9waWZ5IGltYWdlIG9uIHRoZSBmcm9udGVuZC5cbiAqIEV4cGVjdHMgYHNpemVgIHRvIGJlIGZvcm1hdHRlZCBsaWtlIHRoZSBMaXF1aWQgZmlsdGVyLCBlLmcuICc0NTB4JyBvciAzMDB4MjAwJy5cbiAqIEBwYXJhbSB7Kn0gc3JjXG4gKiBAcGFyYW0geyp9IHNpemVcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFNpemVkSW1hZ2VVcmwgPSAoc3JjLCBzaXplKSA9PiB7XG4gIGNvbnN0IGN1cnJlbnRTaXplUmVnRXggPSAvXyhwaWNvfGljb258dGh1bWJ8c21hbGx8Y29tcGFjdHxtZWRpdW18bGFyZ2V8Z3JhbmRlfG9yaWdpbmFsfFxcZHsxLDR9eChcXGR7MSw0fSk/fG1hc3RlcikrXFwuL2c7XG4gIGNvbnN0IGV4dGVuc2lvblJlZ0V4ID0gL1xcLmpwZ3xcXC5wbmd8XFwuZ2lmfFxcLmpwZWcvZztcblxuICAvLyByZW1vdmUgYW55IGN1cnJlbnQgaW1hZ2Ugc2l6ZSB0aGVuIGFkZCB0aGUgbmV3IGltYWdlIHNpemVcbiAgcmV0dXJuIHNyYy5yZXBsYWNlKGN1cnJlbnRTaXplUmVnRXgsICcuJykucmVwbGFjZShleHRlbnNpb25SZWdFeCwgKG1hdGNoKSA9PiBgXyR7c2l6ZX0ke21hdGNofWApO1xufTtcbiIsIlxuZXhwb3J0IGNvbnN0IG1vbmV5ID0gKHZhbHVlKSA9PiB7XG4gIHZhciBzdHIgPSBTdHJpbmcocGFyc2VGbG9hdCh2YWx1ZSkgLyAxMDApO1xuICBzdHIgKz0gKHN0ci5pbmRleE9mKCcuJykgPCAwKSA/ICcuMDAnIDogJzAwJztcbiAgcmV0dXJuIGAkJHtzdHIuc3Vic3RyaW5nKDAsIHN0ci5pbmRleE9mKCcuJykgKyAzKX1gO1xufVxuXG5leHBvcnQgY29uc3QgbW9uZXlXaXRob3V0RGVjaW1hbHMgPSB2YWx1ZSA9PiB7XG4gIHJldHVybiBtb25leSh2YWx1ZSkucmVwbGFjZSgvXFwuMDAvZywgJycpO1xufSIsIlxuZXhwb3J0IGNvbnN0IHVjZmlyc3QgPSB2YWx1ZSA9PiBcbiAgYCR7dmFsdWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHt2YWx1ZS5zdWJzdHJpbmcoMSl9YFxuXG5cbmV4cG9ydCBjb25zdCB1cGNhc2UgPSB2YWx1ZSA9PlxuICB2YWx1ZS5zcGxpdCgnICcpLm1hcCh3b3JkID0+IHVjZmlyc3Qod29yZCkpLmpvaW4oJyAnKVxuXG5leHBvcnQgY29uc3QgdW5oYW5kbGVpemUgPSB2YWx1ZSA9PlxuICB1cGNhc2UodmFsdWUucmVwbGFjZSgvLS9nLCAnICcpKVxuIiwiZXhwb3J0IGNvbnN0IGRlYm91bmNlID0gKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkgPT4ge1xuICB2YXIgdGltZW91dFxuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNvbnRleHQgPSB0aGlzLFxuICAgICAgYXJncyA9IGFyZ3VtZW50c1xuICAgIHZhciBsYXRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRpbWVvdXQgPSBudWxsXG4gICAgICBpZiAoIWltbWVkaWF0ZSkgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKVxuICAgIH1cblxuICAgIHZhciBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0XG5cbiAgICBjbGVhclRpbWVvdXQodGltZW91dClcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdClcblxuICAgIGlmIChjYWxsTm93KSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGhhc2ggPSAoc3RyKSA9PiB7XG4gIHZhciBoYXNoID0gMCxcbiAgICBpLCBjaHJcblxuICBpZiAoc3RyLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGhhc2hcblxuICBmb3IgKGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgY2hyID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBjaHJcbiAgICBoYXNoIHw9IDAgLy8gQ29udmVydCB0byAzMmJpdCBpbnRlZ2VyXG4gIH1cblxuICByZXR1cm4gaGFzaFxufVxuXG5leHBvcnQgY29uc3QgY2xvbmUgPSAob2JqKSA9PiB7XG4gIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpXG59XG5cbi8qKlxuICBUaGlzIGhhbmRsZXMgYSB3ZWlyZCBlZGdlIGNhc2UgY2F1c2VkIGJ5IHRoZSB0aGVtZSBlZGl0b3IuXG4gIFdoZW4gY3VzdG9taXppbmcgYSB0aGVtZSwgZm9yIHNvbWUgcmVhc29uIEhUTUwgY29tbWVudHMgYXJlIGluamVjdGVkXG4gIGludG8gdGVtcGxhdGVzLCBicmVha2luZyB0aGUgcmVzcG9uc2UgZGF0YS4gVGhpcyBtZWFucyB3ZSBuZWVkIHRvXG4gIHJlbW92ZSB0aGUgY29tbWVudHMgYW5kIHBhcnNlIGl0IGJhY2sgaW50byBKU09OIGZvcm1hdCwgYWxsb3dpbmcgZm9yXG4gIHRoZSBkYXRhIHRvIGxvYWQgcHJvcGVybHkgd2hlbiB0aGUgdGhlbWUgZWRpdG9yIGlzIG9wZW4uXG5cbiAgQHBhcmFtIGRhdGEgVGhlIHJlc3BvbnNlIHRvIGNoZWNrLlxuKi9cbmV4cG9ydCBjb25zdCBwYXJzZURhdGFGb3JFZGl0b3IgPSBkYXRhID0+IHtcbiAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgIGxldCBwYXJzZWQgPSBkYXRhLnJlcGxhY2UoLzwhLS1bXFxzXFxTXSo/LS0+L2csICcnKVxuXG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKHBhcnNlZClcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignQ291bGQgbm90IHBhcnNlIGRhdGE6JywgZGF0YSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkYXRhXG59XG5cblxuZXhwb3J0IGNvbnN0IGVtYmVkVmlkZW9JZnJhbWVBdHRyaWJ1dGVzID0gKHVybCwgb3B0aW9ucyA9IHtcbiAgYmFja2dyb3VuZDogZmFsc2Vcbn0pID0+IHtcbiAgY29uc3QgSE9TVCA9IHtcbiAgICBWSU1FTzogJ1ZJTUVPJyxcbiAgICBZT1VUVUJFOiAnWU9VVFVCRSdcbiAgfTtcblxuICAvLyBjb25zb2xlLmxvZyh7IHVybCwgb3B0aW9ucyB9KTtcbiAgdXJsID0gbmV3IFVSTCh1cmwpO1xuICBsZXQgaG9zdCwgdmlkZW9JZDtcblxuICBpZiAodXJsLmhvc3RuYW1lID09PSAneW91dHViZS5jb20nIHx8IHVybC5ob3N0bmFtZSA9PT0gJ3d3dy55b3V0dWJlLmNvbScpIHtcbiAgICBob3N0ID0gSE9TVC5ZT1VUVUJFO1xuICAgIGlmICh1cmwucGF0aG5hbWUgPT09ICcvd2F0Y2gnKSB7XG4gICAgICAvLyBodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PWFiYzEyM1xuICAgICAgdmlkZW9JZCA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KCd2Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL2FiYzEyM1xuICAgICAgdmlkZW9JZCA9IC9cXC9lbWJlZFxcLyguKykvLmV4ZWModXJsLnBhdGhuYW1lKVsxXTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodXJsLmhvc3RuYW1lID09PSAndmltZW8uY29tJykge1xuICAgIGhvc3QgPSBIT1NULlZJTUVPO1xuICAgIC8vIGh0dHBzOi8vdmltZW8uY29tLzEyMzQ1NlxuICAgIHZpZGVvSWQgPSAvXFwvKFxcZCspLy5leGVjKHVybC5wYXRobmFtZSlbMV07XG4gIH0gZWxzZSBpZiAodXJsLmhvc3RuYW1lID09PSAncGxheWVyLnZpbWVvLmNvbScpIHtcbiAgICBob3N0ID0gSE9TVC5WSU1FTztcbiAgICAvLyBodHRwczovL3BsYXllci52aW1lby5jb20vdmlkZW8vMTIzNDU2XG4gICAgdmlkZW9JZCA9IC9cXC92aWRlb1xcLyhcXGQrKS8uZXhlYyh1cmwucGF0aG5hbWUpWzFdO1xuICB9XG5cbiAgY29uc3QgYXR0cmlidXRlcyA9IHtcbiAgICBmcmFtZWJvcmRlcjogJzAnLFxuICAgIGFsbG93ZnVsbHNjcmVlbjogdHJ1ZVxuICB9O1xuXG4gIGxldCBlbWJlZFVybDtcbiAgaWYgKGhvc3QgPT09IEhPU1QuWU9VVFVCRSkge1xuICAgIGVtYmVkVXJsID0gbmV3IFVSTChgaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHt2aWRlb0lkfWApO1xuICAgIGVtYmVkVXJsLnNlYXJjaFBhcmFtcy5zZXQoJ2VuYWJsZWpzYXBpJywgMSk7XG4gICAgaWYgKG9wdGlvbnMuYmFja2dyb3VuZCkge1xuICAgICAgZW1iZWRVcmwuc2VhcmNoUGFyYW1zLnNldCgnY29udHJvbHMnLCAwKTtcbiAgICAgIGVtYmVkVXJsLnNlYXJjaFBhcmFtcy5zZXQoJ2F1dG9wbGF5JywgMSk7XG4gICAgICBlbWJlZFVybC5zZWFyY2hQYXJhbXMuc2V0KCdsb29wJywgMSk7XG4gICAgICBlbWJlZFVybC5zZWFyY2hQYXJhbXMuc2V0KCdtb2Rlc3RicmFuZGluZycsIDEpO1xuICAgIH1cbiAgICBhdHRyaWJ1dGVzLnNyYyA9IGVtYmVkVXJsLnRvSlNPTigpO1xuICAgIGF0dHJpYnV0ZXMuYWxsb3cgPSAnYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmUnO1xuICB9XG4gIGlmIChob3N0ID09PSBIT1NULlZJTUVPKSB7XG4gICAgZW1iZWRVcmwgPSBuZXcgVVJMKGBodHRwczovL3BsYXllci52aW1lby5jb20vdmlkZW8vJHt2aWRlb0lkfWApO1xuICAgIGlmIChvcHRpb25zLmJhY2tncm91bmQpIHtcbiAgICAgIC8qXG4gICAgICBBZGRpbmcgdGhpcyBwYXJhbWV0ZXIgd2lsbCBoYXZlIHRoZSBmb2xsb3dpbmcgZWZmZWN0OlxuICAgICAgICBBbGwgcGxheWVyIHRvZ2dsZXMgYW5kIGVsZW1lbnRzIHdpbGwgYmUgdHVybmVkIG9mZiAoaW5jbHVkaW5nIHRoZSBwbGF5L3BhdXNlIGJ1dHRvbilcbiAgICAgICAgVGhlIHZpZGVvIHdpbGwgYXV0b21hdGljYWxseSBsb29wXG4gICAgICAgIFRoZSB2aWRlbyB3aWxsIGJlIHNldCB0byBhdXRvcGxheVxuICAgICAgICBUaGUgdmlkZW8gd2lsbCBiZSBtdXRlZFxuICAgICAgKi9cbiAgICAgIGVtYmVkVXJsLnNlYXJjaFBhcmFtcy5zZXQoJ2JhY2tncm91bmQnLCB0cnVlKTtcbiAgICB9XG4gICAgYXR0cmlidXRlcy5zcmMgPSBlbWJlZFVybC50b0pTT04oKTtcbiAgICBhdHRyaWJ1dGVzLmFsbG93ID0gJ2F1dG9wbGF5OyBmdWxsc2NyZWVuJztcbiAgfVxuXG4gIC8vIGNvbnNvbGUubG9nKHsgYXR0cmlidXRlcyB9KTtcbiAgcmV0dXJuIGF0dHJpYnV0ZXM7XG59XG5cbmV4cG9ydCBjb25zdCBjbGVhblBob25lTnVtYmVyID0gKHBob25lTnVtYmVyKSA9PiB7XG4gIHJldHVybiBwaG9uZU51bWJlci5yZXBsYWNlKC9bLlxcLSgpIF0vZywgJycpXG59XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVpemUgPSAoc3RyKSA9PiB7XG4gIHJldHVybiBzdHIudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bXmEtejAtOV0rL2csICctJykucmVwbGFjZSgvLSQvLCAnJykucmVwbGFjZSgvXi0vLCAnJyk7XG59XG4iLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5pbXBvcnQgVnVleCBmcm9tICd2dWV4JztcblxuLy8gbW9kdWxlc1xuaW1wb3J0IHNjcmlwdEJ5cGFzcyBmcm9tICcuL21vZHVsZXMvc2NyaXB0LWJ5cGFzcy5qcyc7XG5pbXBvcnQgY2FydCBmcm9tICcuL21vZHVsZXMvY2FydC5qcyc7XG5pbXBvcnQgdG9hc3QgZnJvbSAnLi9tb2R1bGVzL3RvYXN0LmpzJztcbmltcG9ydCBwcm9kdWN0cyBmcm9tICcuL21vZHVsZXMvcHJvZHVjdHMuanMnO1xuaW1wb3J0IHBhcmFtcyBmcm9tICcuL21vZHVsZXMvcGFyYW1zLmpzJztcblxuVnVlLnVzZShWdWV4KTtcblxuY29uc3Qgc3RhdGUgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgbmV3IFZ1ZXguU3RvcmUoe1xuICBzdGF0ZSxcbiAgbW9kdWxlczoge1xuICAgIHNjcmlwdEJ5cGFzcyxcbiAgICBjYXJ0LFxuICAgIHRvYXN0LFxuICAgIHByb2R1Y3RzLFxuICAgIHBhcmFtc1xuICB9LFxufSk7XG4iLCJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuY29uc3Qgc3RhdGUgPSB7XG4gIGNoZWNrb3V0OiB7fSxcbiAgc2lkZWNhcnRPcGVuOiBmYWxzZVxufVxuXG5jb25zdCBtdXRhdGlvbnMgPSB7XG4gIFNFVF9DSEVDS09VVCAoc3RhdGUsIGNoZWNrb3V0KSB7XG4gICAgc3RhdGUuY2hlY2tvdXQgPSBjaGVja291dFxuICB9LFxuICBPUEVOX1NJREVDQVJUIChzdGF0ZSkge1xuICAgIHN0YXRlLnNpZGVjYXJ0T3BlbiA9IHRydWVcbiAgfSxcbiAgQ0xPU0VfU0lERUNBUlQgKHN0YXRlKSB7XG4gICAgc3RhdGUuc2lkZWNhcnRPcGVuID0gZmFsc2VcbiAgfVxufVxuXG5jb25zdCBhY3Rpb25zID0ge1xuICBpbml0ICh7IGNvbW1pdCB9KSB7XG4gICAgLy8gZm9yY2luZyBjbGVhbiBjYXJ0IHJlcXVlc3QgZm9yIElFMTFcbiAgICBsZXQgdGltZXN0YW1wID0gbmV3IERhdGUoKS5nZXRUaW1lKClcblxuICAgIGF4aW9zLmdldChgL2NhcnQuanM/cT0ke3RpbWVzdGFtcH1gKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gY29tbWl0KCdTRVRfQ0hFQ0tPVVQnLCByZXNwb25zZS5kYXRhKSlcbiAgfSxcbiAgYWRkSXRlbSAoeyByb290U3RhdGUsIHN0YXRlLCBjb21taXQsIGRpc3BhdGNoIH0sIHsgaWQsIHF1YW50aXR5LCBwcm9wZXJ0aWVzID0ge30gfSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAvLyBmb3JjaW5nIGNsZWFuIGNhcnQgcmVxdWVzdCBmb3IgSUUxMVxuICAgICAgbGV0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG5cbiAgICAgIGF4aW9zLnBvc3QoJy9jYXJ0L2FkZC5qcycsIHsgaWQsIHF1YW50aXR5LCBwcm9wZXJ0aWVzIH0pXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAvLyBpZiB0aGlzIGlzIGEgc3Vic2NyaXB0aW9uIHByb2R1Y3Qgd2UgbmVlZCB0byByZWZyZXNoIHRoZSBjYXJ0IHByb2R1Y3RzXG4gICAgICAgICAgLy8gdGhpcyBpcyBiZWNhdXNlIHN1YnNjcmlwdGlvbiBwcm9kdWN0cyBjYW5ub3QgYmUgcHVsbGVkIGZyb20gdGhlIHByb2R1Y3QgZW5kcG9pbnRcbiAgICAgICAgICBjb25zdCBwcm9kdWN0RXhpc3RzSW5TdGF0ZSA9IHJvb3RTdGF0ZS5wcm9kdWN0cy5hbGwuZmluZCgocHJvZHVjdCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHByb2R1Y3QudmFyaWFudHMuZmluZCgodmFyaWFudCkgPT4gdmFyaWFudC5pZCA9PT0gaWQpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKCFwcm9kdWN0RXhpc3RzSW5TdGF0ZSAmJiBwcm9wZXJ0aWVzICYmIHByb3BlcnRpZXMuc3Vic2NyaXB0aW9uX2lkKSB7XG4gICAgICAgICAgICBkaXNwYXRjaCgncHJvZHVjdHMvaW5pdCcsIG51bGwsIHsgcm9vdDogdHJ1ZSB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKCkgPT4gYXhpb3MuZ2V0KGAvY2FydC5qcz9xPSR7dGltZXN0YW1wfWApKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgY29tbWl0KCdTRVRfQ0hFQ0tPVVQnLCByZXNwb25zZS5kYXRhKVxuICAgICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc2lkZWNhcnRfdXBkYXRlZCcpKVxuICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignVW5hYmxlIHRvIGFkZCB0aGUgaXRlbSB0byB5b3VyIGNhcnQuJykpXG4gICAgICAgIH0pXG4gICAgfSlcbiAgfSxcbiAgdXBkYXRlSXRlbSAoeyBjb21taXQgfSwgeyBsaW5lLCBxdWFudGl0eSB9KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGF4aW9zLnBvc3QoJy9jYXJ0L2NoYW5nZS5qcycsIHsgbGluZSwgcXVhbnRpdHkgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIGxldCBpdGVtID0gcmVzcG9uc2UuZGF0YS5pdGVtc1tsaW5lIC0gMV1cbiAgICAgICAgICBcbiAgICAgICAgICBpZiAoaXRlbSAmJiBpdGVtLnF1YW50aXR5IDwgcGFyc2VJbnQocXVhbnRpdHksIDEwKSkge1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaCgndG9hc3Qvc2VuZCcsIHtcbiAgICAgICAgICAgICAgdGV4dDogYENvdWxkIG5vdCBhZGQgbW9yZSAke2l0ZW0udGl0bGV9cy4gVGhleSdyZSBhbGwgaW4geW91ciBjYXJ0IWAsXG4gICAgICAgICAgICAgIHR5cGU6ICdlcnJvcidcbiAgICAgICAgICAgIH0sIHsgcm9vdDogdHJ1ZSB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBjb21taXQoJ1NFVF9DSEVDS09VVCcsIHJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdzaWRlY2FydF91cGRhdGVkJykpXG4gICAgICAgICAgcmVzb2x2ZSgpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdVbmFibGUgdG8gdXBkYXRlIHRoZSBpdGVtIGluIHlvdXIgY2FydC4nKSlcbiAgICAgICAgfSlcbiAgICB9KVxuICB9LFxuICByZW1vdmVJdGVtICh7IGNvbW1pdCB9LCBsaW5lKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGF4aW9zLnBvc3QoJy9jYXJ0L2NoYW5nZS5qcycsIHsgbGluZSwgcXVhbnRpdHk6IDAgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIGNvbW1pdCgnU0VUX0NIRUNLT1VUJywgcmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3NpZGVjYXJ0X3VwZGF0ZWQnKSlcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdVbmFibGUgdG8gcmVtb3ZlIHRoZSBpdGVtIGZyb20geW91ciBjYXJ0LicpKVxuICAgICAgICB9KVxuICAgIH0pXG4gIH0sXG4gIG9wZW5TaWRlY2FydDogKHsgY29tbWl0IH0pID0+IGNvbW1pdCgnT1BFTl9TSURFQ0FSVCcpLFxuICBjbG9zZVNpZGVjYXJ0OiAoeyBjb21taXQgfSkgPT4gY29tbWl0KCdDTE9TRV9TSURFQ0FSVCcpXG59XG5cbmV4cG9ydCBkZWZhdWx0IHsgbmFtZXNwYWNlZDogdHJ1ZSwgc3RhdGUsIG11dGF0aW9ucywgYWN0aW9ucyB9XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1zaGFkb3cgKi9cblxuY29uc3Qgc3RhdGUgPSB7fTtcblxuY29uc3QgbXV0YXRpb25zID0ge1xuICBBRERfUEFSQU0oc3RhdGUsIHsga2V5LCB2YWx1ZSB9KSB7XG4gICAgc3RhdGVba2V5XSA9IHZhbHVlO1xuICB9LFxufTtcblxuY29uc3QgYWN0aW9ucyA9IHtcbiAgaW5pdCh7IGNvbW1pdCB9KSB7XG4gICAgY29uc3QgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgY29uc3Qgc3RhcnQgPSB1cmwuaW5kZXhPZignPycpO1xuICAgIGNvbnN0IHN0b3AgPSB1cmwuaW5kZXhPZignIycpID4gLTEgPyB1cmwuaW5kZXhPZignIycpIDogdXJsLmxlbmd0aDtcbiAgICBjb25zdCBxdWVyeVN0cmluZyA9IHN0YXJ0ID4gLTEgPyB1cmwuc3Vic3RyKHN0YXJ0ICsgMSwgc3RvcCAtIHN0YXJ0IC0gMSkgOiAnJztcblxuICAgIHF1ZXJ5U3RyaW5nXG4gICAgICAuc3BsaXQoJyYnKVxuICAgICAgLm1hcCgocCkgPT4gcC5zcGxpdCgnPScpKVxuICAgICAgLmZvckVhY2goKHApID0+IGNvbW1pdCgnQUREX1BBUkFNJywgeyBrZXk6IHBbMF0sIHZhbHVlOiBwWzFdIH0pKTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc3RhdGUsXG4gIG11dGF0aW9ucyxcbiAgYWN0aW9ucyxcbiAgbmFtZXNwYWNlZDogdHJ1ZSxcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1zaGFkb3cgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB7IHBhcnNlRGF0YUZvckVkaXRvciB9IGZyb20gJ3NjcmlwdHMvaGVscGVycy91dGlsLmpzJztcblxuY29uc3QgcXVldWUgPSBbXTtcbmxldCBmZXRjaGluZyA9IGZhbHNlO1xubGV0IGNhcnRJbml0aWFsaXplZCA9IGZhbHNlO1xuXG5jb25zdCBxdWV1ZUZldGNoID0gKGhhbmRsZSwgY29tbWl0KSA9PiB7XG4gIHF1ZXVlLnB1c2goaGFuZGxlKTtcbiAgaWYgKCFmZXRjaGluZyAmJiBjYXJ0SW5pdGlhbGl6ZWQpIGZldGNoTmV4dFByb2R1Y3QoY29tbWl0KTtcbn07XG5cbmNvbnN0IGZldGNoTmV4dFByb2R1Y3QgPSAoY29tbWl0KSA9PiB7XG4gIGZldGNoaW5nID0gdHJ1ZTtcblxuICBpZiAocXVldWUubGVuZ3RoID4gMCkge1xuICAgIGZldGNoUHJvZHVjdChjb21taXQpO1xuICB9IGVsc2Uge1xuICAgIGZldGNoaW5nID0gZmFsc2U7XG4gIH1cbn07XG5cbmNvbnN0IGZldGNoUHJvZHVjdCA9IChjb21taXQpID0+IHtcbiAgY29uc3QgaGFuZGxlID0gcXVldWUuc2hpZnQoKTtcbiAgY29uc3QgZXhpc3RpbmdQcm9kdWN0ID0gc3RhdGUuYWxsLmZpbmQoKHApID0+IHAuaGFuZGxlID09PSBoYW5kbGUpO1xuXG4gIC8vIGRvbid0IGZldGNoIGlmIHRoaXMgd2FzIHJldHJpZXZlZCBhcyBwYXJ0IG9mIHRoZSBjYXJ0IHByb2R1Y3RzXG4gIGlmICghZXhpc3RpbmdQcm9kdWN0KSB7XG4gICAgYXhpb3MuZ2V0KGAvcHJvZHVjdHMvJHtoYW5kbGV9P3ZpZXc9anNvbmApLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBjb25zdCBwcm9kdWN0RGF0YSA9IHBhcnNlRGF0YUZvckVkaXRvcihyZXNwb25zZS5kYXRhKTtcblxuICAgICAgaWYgKHByb2R1Y3REYXRhKSBjb21taXQoJ0FERF9QUk9EVUNUJywgcmVzcG9uc2UuZGF0YSk7XG4gICAgICBmZXRjaE5leHRQcm9kdWN0KGNvbW1pdCk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgZmV0Y2hOZXh0UHJvZHVjdChjb21taXQpO1xuICB9XG59O1xuXG5jb25zdCBzdGF0ZSA9IHtcbiAgYWxsOiBbXSxcbn07XG5cbmNvbnN0IG11dGF0aW9ucyA9IHtcbiAgQUREX1BST0RVQ1Qoc3RhdGUsIHByb2R1Y3QpIHtcbiAgICBzdGF0ZS5hbGwucHVzaChwYXJzZURhdGFGb3JFZGl0b3IocHJvZHVjdCkpO1xuICB9LFxufTtcblxuY29uc3QgYWN0aW9ucyA9IHtcbiAgaW5pdCh7IHN0YXRlLCBjb21taXQgfSkge1xuICAgIGF4aW9zLmdldCgnL2NhcnQ/dmlldz1qc29uJykudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbnN0IGNhcnREYXRhID0gcGFyc2VEYXRhRm9yRWRpdG9yKHJlc3BvbnNlLmRhdGEpO1xuXG4gICAgICBjYXJ0RGF0YS5mb3JFYWNoKChwcm9kdWN0KSA9PiB7XG4gICAgICAgIGlmICghc3RhdGUuYWxsLmZpbmQoKHApID0+IHAuaGFuZGxlID09PSBwcm9kdWN0LmhhbmRsZSkpIGNvbW1pdCgnQUREX1BST0RVQ1QnLCBwcm9kdWN0KTtcbiAgICAgIH0pO1xuXG4gICAgICBjYXJ0SW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgZmV0Y2hOZXh0UHJvZHVjdChjb21taXQpO1xuICAgIH0pO1xuICB9LFxuICBhZGRQcm9kdWN0KHsgc3RhdGUsIGNvbW1pdCB9LCBoYW5kbGUpIHtcbiAgICBpZiAocXVldWUuaW5kZXhPZihoYW5kbGUpIDwgMCAmJiAhc3RhdGUuYWxsLmZpbmQoKHApID0+IHAuaGFuZGxlID09PSBoYW5kbGUpKSB7XG4gICAgICBxdWV1ZUZldGNoKGhhbmRsZSwgY29tbWl0KTtcbiAgICB9XG4gIH0sXG4gIGJhdGNoQWRkT2JqUHJvZHVjdHMoeyBzdGF0ZSwgY29tbWl0IH0sIHByb2R1Y3RzKSB7XG4gICAgcHJvZHVjdHMuZm9yRWFjaCgocHJvZHVjdCkgPT4ge1xuICAgICAgaWYgKHF1ZXVlLmluZGV4T2YocHJvZHVjdC5oYW5kbGUpIDwgMCAmJiAhc3RhdGUuYWxsLmZpbmQoKHApID0+IHAuaGFuZGxlID09PSBwcm9kdWN0LmhhbmRsZSkpIHtcbiAgICAgICAgY29tbWl0KCdBRERfUFJPRFVDVCcsIHByb2R1Y3QpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzdGF0ZSxcbiAgbXV0YXRpb25zLFxuICBhY3Rpb25zLFxuICBuYW1lc3BhY2VkOiB0cnVlLFxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXNoYWRvdyAqL1xuY29uc3Qgc3RhdGUgPSB7XG4gIGVsZW1zOiBbXSxcbn07XG5cbmNvbnN0IG11dGF0aW9ucyA9IHtcbiAgQUREX0VMRU0oc3RhdGUsIGVsZW0pIHtcbiAgICBzdGF0ZS5lbGVtcy5wdXNoKGVsZW0pO1xuICB9LFxufTtcblxuY29uc3QgYWN0aW9ucyA9IHtcbiAgaW5pdCh7IGNvbW1pdCB9KSB7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCcjYXBwJylcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCdzdHlsZScpXG4gICAgICAuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICBjb21taXQoJ0FERF9FTEVNJywgbm9kZSk7XG4gICAgICAgIG5vZGUucmVtb3ZlKCk7XG4gICAgICB9KTtcblxuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcignI2FwcCcpXG4gICAgICAucXVlcnlTZWxlY3RvckFsbCgnc2NyaXB0JylcbiAgICAgIC5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgIGNvbW1pdCgnQUREX0VMRU0nLCBub2RlKTtcbiAgICAgICAgbm9kZS5yZW1vdmUoKTtcbiAgICAgIH0pO1xuICB9LFxuICByZXN0b3JlKHsgc3RhdGUgfSkge1xuICAgIHN0YXRlLmVsZW1zLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmRDaGlsZChub2RlKTtcbiAgICB9KTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc3RhdGUsXG4gIG11dGF0aW9ucyxcbiAgYWN0aW9ucyxcbiAgbmFtZXNwYWNlZDogdHJ1ZSxcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1zaGFkb3cgKi9cbmNvbnN0IHRpbWVvdXQgPSA1MDAwO1xuXG5jb25zdCBzdGF0ZSA9IHtcbiAgbWVzc2FnZXM6IFtdLFxufTtcblxuY29uc3QgbXV0YXRpb25zID0ge1xuICBBRERfTUVTU0FHRShzdGF0ZSwgbWVzc2FnZSkge1xuICAgIGNvbnN0IGlkID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgICBzdGF0ZS5tZXNzYWdlcy5wdXNoKHsgaWQsIC4uLm1lc3NhZ2UgfSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiBzdGF0ZS5tZXNzYWdlcy5zcGxpY2UoMCwgMSksIHRpbWVvdXQpO1xuICB9LFxufTtcblxuY29uc3QgYWN0aW9ucyA9IHtcbiAgc2VuZCh7IGNvbW1pdCB9LCBtZXNzYWdlKSB7XG4gICAgY29tbWl0KCdBRERfTUVTU0FHRScsIG1lc3NhZ2UpO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgeyBuYW1lc3BhY2VkOiB0cnVlLCBzdGF0ZSwgbXV0YXRpb25zLCBhY3Rpb25zIH07XG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMiEuL3ZhcmlhYmxlcy5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjMxNzQ2YTM1XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0yIS4vdmFyaWFibGVzLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMiEuL3ZhcmlhYmxlcy5zY3NzXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9