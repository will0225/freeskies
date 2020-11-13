webpackHotUpdate_N_E("pages/photos",{

/***/ "./containers/Photos/Photos.js":
/*!*************************************!*\
  !*** ./containers/Photos/Photos.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal_hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal-hook */ "./node_modules/react-modal-hook/dist/index.es.js");
/* harmony import */ var components_header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/header/Header */ "./components/header/Header.js");
/* harmony import */ var components_profile_PhotosModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/profile/PhotosModal */ "./components/profile/PhotosModal.js");
/* harmony import */ var _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/photos.module.scss */ "./containers/Photos/styles/photos.module.scss");
/* harmony import */ var _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var helpers_hoc_requireAuth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! helpers/hoc/requireAuth */ "./helpers/hoc/requireAuth.js");
/* harmony import */ var _storage_PhotoContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./storage/PhotoContext */ "./containers/Photos/storage/PhotoContext.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./actions */ "./containers/Photos/actions/index.js");
var _jsxFileName = "E:\\freeskies_fe_code\\containers\\Photos\\Photos.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










function Photos({
  auth: {
    user
  }
}) {
  _s();

  var _ref;

  const {
    0: storage,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(ProfileContext);
  console.log(storage);
  const [showModal, hideModal] = Object(react_modal_hook__WEBPACK_IMPORTED_MODULE_2__["useModal"])(({
    in: open
  }) => __jsx(components_profile_PhotosModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Photo detail",
    showModal: open,
    onClose: hideModal,
    data: user === null || user === void 0 ? void 0 : user.recentPhotos,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }));
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx(components_header_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    withoutSearch: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container, _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container_bg, _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container_radius),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.page_title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, "Photos"), __jsx("div", {
    className: _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, (_ref = []) === null || _ref === void 0 ? void 0 : _ref.map(item => __jsx("div", {
    className: _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.photo_container,
    key: item.id,
    onClick: showModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.photo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "https://www.freeskies.com/static/".concat(item.src),
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  })))))));
}

_s(Photos, "9HkySTn5ygDzcsr+5wbz43DiAX8=", false, function () {
  return [react_modal_hook__WEBPACK_IMPORTED_MODULE_2__["useModal"]];
});

_c = Photos;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(helpers_hoc_requireAuth__WEBPACK_IMPORTED_MODULE_6__["default"])(Photos));

var _c, _c2;

$RefreshReg$(_c, "Photos");
$RefreshReg$(_c2, "%default%");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./containers/Photos/actions/index.js":
/*!********************************************!*\
  !*** ./containers/Photos/actions/index.js ***!
  \********************************************/
/*! exports provided: setLoading, setPhotos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _setLoading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setLoading */ "./containers/Photos/actions/setLoading.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setLoading", function() { return _setLoading__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _setPhotos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPhotos */ "./containers/Photos/actions/setPhotos.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setPhotos", function() { return _setPhotos__WEBPACK_IMPORTED_MODULE_1__["default"]; });





;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./containers/Photos/actions/setLoading.js":
/*!*************************************************!*\
  !*** ./containers/Photos/actions/setLoading.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storage_PhotoContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage/PhotoContext */ "./containers/Photos/storage/PhotoContext.js");


function getLoadingType(type) {
  switch (type) {
    case 'photos':
      return _storage_PhotoContext__WEBPACK_IMPORTED_MODULE_0__["SET_LOADING"];

    case 'posting':
      return _storage_PhotoContext__WEBPACK_IMPORTED_MODULE_0__["SET_POSTING_LOADING"];

    default:
      return '';
  }
}
/**
 *
 * @param  {boolean} state
 * @param  {string} type ["photos", "posting"]
 * @return
 */


const setLoading = (state, type = 'photos') => {
  return {
    type: getLoadingType(type),
    payload: state
  };
};

/* harmony default export */ __webpack_exports__["default"] = (setLoading);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./containers/Photos/actions/setPhotos.js":
/*!************************************************!*\
  !*** ./containers/Photos/actions/setPhotos.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storage_PhotoContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage/PhotoContext */ "./containers/Photos/storage/PhotoContext.js");


const setPhotos = state => {
  return {
    type: _storage_PhotoContext__WEBPACK_IMPORTED_MODULE_0__["SET_PHOTOS_DATA"],
    payload: state
  };
};

/* harmony default export */ __webpack_exports__["default"] = (setPhotos);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9QaG90b3MvUGhvdG9zLmpzIiwid2VicGFjazovL19OX0UvLi9jb250YWluZXJzL1Bob3Rvcy9hY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9jb250YWluZXJzL1Bob3Rvcy9hY3Rpb25zL3NldExvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRhaW5lcnMvUGhvdG9zL2FjdGlvbnMvc2V0UGhvdG9zLmpzIl0sIm5hbWVzIjpbIlBob3RvcyIsImF1dGgiLCJ1c2VyIiwic3RvcmFnZSIsImRpc3BhdGNoIiwidXNlQ29udGV4dCIsIlByb2ZpbGVDb250ZXh0IiwiY29uc29sZSIsImxvZyIsInNob3dNb2RhbCIsImhpZGVNb2RhbCIsInVzZU1vZGFsIiwiaW4iLCJvcGVuIiwicmVjZW50UGhvdG9zIiwiY2xhc3NuYW1lcyIsInN0eWxlcyIsImNvbnRhaW5lciIsImNvbnRhaW5lcl9iZyIsImNvbnRhaW5lcl9yYWRpdXMiLCJwYWdlX3RpdGxlIiwiY29udGVudCIsIm1hcCIsIml0ZW0iLCJwaG90b19jb250YWluZXIiLCJpZCIsInBob3RvIiwic3JjIiwicmVxdWlyZUF1dGgiLCJnZXRMb2FkaW5nVHlwZSIsInR5cGUiLCJTRVRfTE9BRElORyIsIlNFVF9QT1NUSU5HX0xPQURJTkciLCJzZXRMb2FkaW5nIiwic3RhdGUiLCJwYXlsb2FkIiwic2V0UGhvdG9zIiwiU0VUX1BIT1RPU19EQVRBIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsQ0FBZ0I7QUFBRUMsTUFBSSxFQUFFO0FBQUVDO0FBQUY7QUFBUixDQUFoQixFQUFvQztBQUFBOztBQUFBOztBQUVsQyxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBc0JDLHdEQUFV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RyxTQUFTLEdBQUlGLEtBQUQsSUFBVztBQUMzQixTQUFPO0FBQ0xKLFFBQUksRUFBRU8scUVBREQ7QUFFTEYsV0FBTyxFQUFFRDtBQUZKLEdBQVA7QUFJRCxDQUxEOztBQU9lRSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9waG90b3MuNTZjNTczMzJmMTY4MTFjODA4ZGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyB1c2VNb2RhbCB9IGZyb20gJ3JlYWN0LW1vZGFsLWhvb2snO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlcic7XHJcbmltcG9ydCBQaG90b3NNb2RhbCBmcm9tICdjb21wb25lbnRzL3Byb2ZpbGUvUGhvdG9zTW9kYWwnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL3Bob3Rvcy5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCByZXF1aXJlQXV0aCBmcm9tICdoZWxwZXJzL2hvYy9yZXF1aXJlQXV0aCc7XHJcbmltcG9ydCB7IFBob3Rvc0NvbnRleHQgfSBmcm9tICcuL3N0b3JhZ2UvUGhvdG9Db250ZXh0JztcclxuaW1wb3J0IHsgc2V0TG9hZGluZywgc2V0UGhvdG9zIH0gZnJvbSAnLi9hY3Rpb25zJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIFBob3Rvcyh7IGF1dGg6IHsgdXNlciB9IH0pIHtcclxuXHJcbiAgY29uc3QgW3N0b3JhZ2UsIGRpc3BhdGNoXSA9IHVzZUNvbnRleHQoUHJvZmlsZUNvbnRleHQpO1xyXG4gIGNvbnNvbGUubG9nKHN0b3JhZ2UpO1xyXG4gIFxyXG4gIGNvbnN0IFtzaG93TW9kYWwsIGhpZGVNb2RhbF0gPSB1c2VNb2RhbCgoeyBpbjogb3BlbiB9KSA9PiAoXHJcbiAgICA8UGhvdG9zTW9kYWxcclxuICAgICAgdGl0bGU9XCJQaG90byBkZXRhaWxcIlxyXG4gICAgICBzaG93TW9kYWw9e29wZW59XHJcbiAgICAgIG9uQ2xvc2U9e2hpZGVNb2RhbH1cclxuICAgICAgZGF0YT17dXNlcj8ucmVjZW50UGhvdG9zfVxyXG4gICAgLz5cclxuICApKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkZXIgd2l0aG91dFNlYXJjaCAvPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxyXG4gICAgICAgICAgc3R5bGVzLmNvbnRhaW5lcixcclxuICAgICAgICAgIHN0eWxlcy5jb250YWluZXJfYmcsXHJcbiAgICAgICAgICBzdHlsZXMuY29udGFpbmVyX3JhZGl1c1xyXG4gICAgICAgICl9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhZ2VfdGl0bGV9PlBob3RvczwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAge1tdPy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnBob3RvX2NvbnRhaW5lcn1cclxuICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17c2hvd01vZGFsfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5waG90b30+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aXRlbS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZXF1aXJlQXV0aChQaG90b3MpO1xyXG4iLCJpbXBvcnQgc2V0TG9hZGluZyBmcm9tICcuL3NldExvYWRpbmcnO1xyXG5pbXBvcnQgc2V0UGhvdG9zIGZyb20gJy4vc2V0UGhvdG9zJztcclxuXHJcbmV4cG9ydCB7IHNldExvYWRpbmcsIHNldFBob3RvcyB9O1xyXG4iLCJpbXBvcnQgeyBTRVRfTE9BRElORywgU0VUX1BPU1RJTkdfTE9BRElORyB9IGZyb20gJy4uL3N0b3JhZ2UvUGhvdG9Db250ZXh0JztcclxuXHJcbmZ1bmN0aW9uIGdldExvYWRpbmdUeXBlKHR5cGUpIHtcclxuICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgIGNhc2UgJ3Bob3Rvcyc6XHJcbiAgICAgIHJldHVybiBTRVRfTE9BRElORztcclxuICAgIGNhc2UgJ3Bvc3RpbmcnOlxyXG4gICAgICByZXR1cm4gU0VUX1BPU1RJTkdfTE9BRElORztcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiAnJztcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0gIHtib29sZWFufSBzdGF0ZVxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHR5cGUgW1wicGhvdG9zXCIsIFwicG9zdGluZ1wiXVxyXG4gKiBAcmV0dXJuXHJcbiAqL1xyXG5jb25zdCBzZXRMb2FkaW5nID0gKHN0YXRlLCB0eXBlID0gJ3Bob3RvcycpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogZ2V0TG9hZGluZ1R5cGUodHlwZSksXHJcbiAgICBwYXlsb2FkOiBzdGF0ZSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2V0TG9hZGluZztcclxuIiwiXHJcbmltcG9ydCB7IFNFVF9QSE9UT1NfREFUQSB9IGZyb20gJy4uL3N0b3JhZ2UvUGhvdG9Db250ZXh0JztcclxuXHJcbmNvbnN0IHNldFBob3RvcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBTRVRfUEhPVE9TX0RBVEEsXHJcbiAgICBwYXlsb2FkOiBzdGF0ZSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2V0UGhvdG9zO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9