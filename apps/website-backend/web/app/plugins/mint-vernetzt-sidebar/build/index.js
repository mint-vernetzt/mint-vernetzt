/******/ (function () {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "@wordpress/components":
      /*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
      /***/ function (module) {
        module.exports = window["wp"]["components"];

        /***/
      },

    /***/ "@wordpress/data":
      /*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
      /***/ function (module) {
        module.exports = window["wp"]["data"];

        /***/
      },

    /***/ "@wordpress/edit-post":
      /*!**********************************!*\
  !*** external ["wp","editPost"] ***!
  \**********************************/
      /***/ function (module) {
        module.exports = window["wp"]["editPost"];

        /***/
      },

    /***/ "@wordpress/element":
      /*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
      /***/ function (module) {
        module.exports = window["wp"]["element"];

        /***/
      },

    /***/ "@wordpress/plugins":
      /*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
      /***/ function (module) {
        module.exports = window["wp"]["plugins"];

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ !(function () {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = function (module) {
      /******/ var getter =
        module && module.__esModule
          ? /******/ function () {
              return module["default"];
            }
          : /******/ function () {
              return module;
            };
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ !(function () {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = function (exports, definition) {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ !(function () {
    /******/ __webpack_require__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ !(function () {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = function (exports) {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  !(function () {
    /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
    /* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__
      );
    /* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
    /* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1___default =
      /*#__PURE__*/ __webpack_require__.n(
        _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__
      );
    /* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(/*! @wordpress/edit-post */ "@wordpress/edit-post");
    /* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2___default =
      /*#__PURE__*/ __webpack_require__.n(
        _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__
      );
    /* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ =
      __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
    /* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default =
      /*#__PURE__*/ __webpack_require__.n(
        _wordpress_data__WEBPACK_IMPORTED_MODULE_3__
      );
    /* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ =
      __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
    /* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default =
      /*#__PURE__*/ __webpack_require__.n(
        _wordpress_components__WEBPACK_IMPORTED_MODULE_4__
      );

    function MetaField(props) {
      const value = (0, _wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(
        (select) => {
          const meta = select("core/editor").getEditedPostAttribute("meta");
          console.log(meta);
          return meta["test"];
        },
        []
      );
      const { editPost } = (0,
      _wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)("core/editor");
      return (0, _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        _wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl,
        {
          label: "test",
          defaultValue: value,
          onChange: (content) =>
            editPost({
              meta: {
                test: content,
              },
            }),
        }
      );
    }

    (0, _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__.registerPlugin)(
      "mint-vernetzt-sidebar",
      {
        render: (props) => {
          return (0,
          _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(
            _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__.PluginSidebar,
            {
              name: "mint-vernetzt-sidebar",
              icon: "admin-post",
              title: "MINTvernetzt sidebar",
            },
            (0, _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(
              MetaField,
              null
            )
          );
        },
      }
    );
  })();
  /******/
})();
//# sourceMappingURL=index.js.map
