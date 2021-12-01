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

    /***/ "@wordpress/media-utils":
      /*!************************************!*\
  !*** external ["wp","mediaUtils"] ***!
  \************************************/
      /***/ function (module) {
        module.exports = window["wp"]["mediaUtils"];

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
    /* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
    /* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default =
      /*#__PURE__*/ __webpack_require__.n(
        _wordpress_components__WEBPACK_IMPORTED_MODULE_1__
      );
    /* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
    /* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default =
      /*#__PURE__*/ __webpack_require__.n(
        _wordpress_data__WEBPACK_IMPORTED_MODULE_2__
      );
    /* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_3__ =
      __webpack_require__(/*! @wordpress/edit-post */ "@wordpress/edit-post");
    /* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_3___default =
      /*#__PURE__*/ __webpack_require__.n(
        _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_3__
      );
    /* harmony import */ var _wordpress_media_utils__WEBPACK_IMPORTED_MODULE_4__ =
      __webpack_require__(
        /*! @wordpress/media-utils */ "@wordpress/media-utils"
      );
    /* harmony import */ var _wordpress_media_utils__WEBPACK_IMPORTED_MODULE_4___default =
      /*#__PURE__*/ __webpack_require__.n(
        _wordpress_media_utils__WEBPACK_IMPORTED_MODULE_4__
      );
    /* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_5__ =
      __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
    /* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_5___default =
      /*#__PURE__*/ __webpack_require__.n(
        _wordpress_plugins__WEBPACK_IMPORTED_MODULE_5__
      );

    function Attachments() {
      const files = (0, _wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(
        (select) => {
          const meta = select("core/editor").getEditedPostAttribute("meta");
          return meta["attachments"];
        },
        []
      );
      const { editPost } = (0,
      _wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)("core/editor");

      const handleRemove = (id) => {
        const filteredFiles = files.filter((file) => file.id !== id);
        editPost({
          meta: {
            attachments: filteredFiles,
          },
        });
      };

      return (0, _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        _wordpress_media_utils__WEBPACK_IMPORTED_MODULE_4__.MediaUpload,
        {
          label: "Upload",
          defaultValue: files,
          multiple: true,
          onSelect: (mediaItems) => {
            const attachments = mediaItems.map((mediaItem) => {
              const {
                id,
                title,
                filename,
                filesizeHumanReadable: fileSizeHumanReadable,
                icon,
                url,
                subtype,
              } = mediaItem;
              return {
                id,
                title,
                filename,
                fileSizeHumanReadable,
                icon,
                url,
                subtype,
              };
            }); // merge current an added attachment files
            // remove duplicates

            const allFiles = files
              .concat(attachments)
              .filter((file, index, array) => {
                const indexInArray = array.findIndex(
                  (item) => item.id === file.id
                );
                return indexInArray === index;
              });
            return editPost({
              meta: {
                attachments: allFiles,
              },
            }); // Promise
          },
          render: (props) => {
            const { open } = props;
            return (0,
            _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(
              _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment,
              null,
              files !== undefined && files !== null
                ? files.map((file, index) => {
                    return (0,
                    _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                      "div",
                      {
                        key: `attachment-${index}`,
                        style: {
                          padding: "1rem",
                        },
                      },
                      (0,
                      _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                        "div",
                        {
                          style: {
                            display: "flex",
                            gap: "0.5rem",
                            direction: "row",
                            alignItems: "baseline",
                          },
                        },
                        (0,
                        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                          "div",
                          {
                            style: {
                              width: "1rem",
                              height: "1rem",
                              flexShrink: "0",
                            },
                          },
                          (0,
                          _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                            "img",
                            {
                              src: file.icon,
                              alt: "",
                              style: {
                                maxWidth: "100%",
                                height: "auto",
                                display: "block",
                              },
                            }
                          )
                        ),
                        (0,
                        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                          "p",
                          {
                            style: {
                              flex: "auto",
                            },
                          },
                          (0,
                          _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                            "strong",
                            null,
                            file.title
                          )
                        )
                      ),
                      (0,
                      _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                        "p",
                        null,
                        (0,
                        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                          "strong",
                          null,
                          "File name:"
                        ),
                        " ",
                        (0,
                        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                          "a",
                          {
                            href: `${file.url}`,
                            target: "_blank",
                            rel: "noopener noreferrer",
                          },
                          file.filename
                        )
                      ),
                      (0,
                      _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                        "div",
                        {
                          style: {
                            display: "flex",
                            direction: "row",
                            justifyContent: "space-between",
                            alignItems: "baseline",
                          },
                        },
                        (0,
                        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                          "p",
                          null,
                          (0,
                          _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                            "strong",
                            null,
                            "File size:"
                          ),
                          " ",
                          file.fileSizeHumanReadable
                        ),
                        (0,
                        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                          _wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button,
                          {
                            isSmall: true,
                            isTertiary: true,
                            onClick: () => handleRemove(file.id),
                          },
                          "Remove"
                        )
                      )
                    );
                  })
                : null,
              (0,
              _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                "div",
                {
                  style: {
                    padding: "1rem",
                  },
                },
                (0,
                _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  _wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button,
                  {
                    isPrimary: true,
                    onClick: open,
                  },
                  "Add Attachments"
                )
              )
            );
          },
        }
      );
    }

    (0, _wordpress_plugins__WEBPACK_IMPORTED_MODULE_5__.registerPlugin)(
      "mint-vernetzt-sidebar",
      {
        render: (props) => {
          return (0,
          _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(
            _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_3__.PluginSidebar,
            {
              name: "mint-vernetzt-sidebar",
              icon: "admin-post",
              title: "MINTvernetzt sidebar",
            },
            (0, _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(
              Attachments,
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
