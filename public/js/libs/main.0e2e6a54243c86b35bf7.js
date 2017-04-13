/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 46);
/******/ })
/************************************************************************/
/******/ ({

/***/ 13:
/***/ (function(module, exports) {

var $ = window.jQuery;

var $window = $(window);
var sectionTop = $('.top').outerHeight() + 20;
var $createDestroy = $('#switch-create-destroy');

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

window.hljs.initHighlightingOnLoad();
$(function () {
  $('a[href*=\'#\']').on('click', function (event) {
    event.preventDefault();
    var $target = $($(this).attr('href').slice('#'));
    if ($target.length) {
      $window.scrollTop($target.offset().top - sectionTop);
    }
  });
  $('input[type="checkbox"], input[type="radio"]').not('[data-switch-no-init]').bootstrapSwitch();

  $('[data-switch-get]').on('click', function () {
    var type = $(this).data('switch-get');
    window.alert($('#switch-' + type).bootstrapSwitch(type));
  });
  $('[data-switch-set]').on('click', function () {
    var type;
    type = $(this).data('switch-set');
    $('#switch-' + type).bootstrapSwitch(type, $(this).data('switch-value'));
  });
  $('[data-switch-toggle]').on('click', function () {
    var type = $(this).data('switch-toggle');
    $('#switch-' + type).bootstrapSwitch('toggle' + capitalize(type));
  });
  $('[data-switch-set-value]').on('input', function (event) {
    var type, value;
    event.preventDefault();
    type = $(this).data('switch-set-value');
    value = $.trim($(this).val());
    if ($(this).data('value') === value) {
      return;
    }
    $('#switch-' + type).bootstrapSwitch(type, value);
  });
  $('[data-switch-create-destroy]').on('click', function () {
    var isSwitch;
    isSwitch = $createDestroy.data('bootstrap-switch');
    $createDestroy.bootstrapSwitch(isSwitch ? 'destroy' : null);
    $(this).button(isSwitch ? 'reset' : 'destroy');
  });
  $('#confirm').bootstrapSwitch({
    size: 'large',
    onSwitchChange: function onSwitchChange(event, state) {
      event.preventDefault();
      return console.log(state, event.isDefaultPrevented());
    }
  });
});

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);


/***/ })

/******/ });