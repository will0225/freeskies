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
var _jsxFileName = "E:\\freeskies_fe_code\\containers\\Photos\\Photos.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function Photos({
  auth: {
    user
  }
}) {
  _s();

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
      lineNumber: 10,
      columnNumber: 5
    }
  }));
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(components_header_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    withoutSearch: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container, _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container_bg, _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container_radius),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.page_title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, "Photos"), __jsx("div", {
    className: _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, user === null || user === void 0 ? void 0 : user.map(item => __jsx("div", {
    className: _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.photo_container,
    key: item.id,
    onClick: showModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.photo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "https://www.freeskies.com/static/".concat(item.src),
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  })))))));
}

_s(Photos, "9K5N8/FZOB20kEyreaI9N0Ry5gg=", false, function () {
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9QaG90b3MvUGhvdG9zLmpzIl0sIm5hbWVzIjpbIlBob3RvcyIsImF1dGgiLCJ1c2VyIiwic2hvd01vZGFsIiwiaGlkZU1vZGFsIiwidXNlTW9kYWwiLCJpbiIsIm9wZW4iLCJyZWNlbnRQaG90b3MiLCJjbGFzc25hbWVzIiwic3R5bGVzIiwiY29udGFpbmVyIiwiY29udGFpbmVyX2JnIiwiY29udGFpbmVyX3JhZGl1cyIsInBhZ2VfdGl0bGUiLCJjb250ZW50IiwibWFwIiwiaXRlbSIsInBob3RvX2NvbnRhaW5lciIsImlkIiwicGhvdG8iLCJzcmMiLCJyZXF1aXJlQXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxDQUFnQjtBQUFFQyxNQUFJLEVBQUU7QUFBRUM7QUFBRjtBQUFSLENBQWhCLEVBQW9DO0FBQUE7O0FBQ2xDLFFBQU0sQ0FBQ0MsU0FBRCxFQUFZQyxTQUFaLElBQXlCQyxpRUFBUSxDQUFDLENBQUM7QUFBRUMsTUFBRSxFQUFFQztBQUFOLEdBQUQsS0FDdEMsTUFBQyxzRUFBRDtBQUNFLFNBQUssRUFBQyxjQURSO0FBRUUsYUFBUyxFQUFFQSxJQUZiO0FBR0UsV0FBTyxFQUFFSCxTQUhYO0FBSUUsUUFBSSxFQUFFRixJQUFGLGFBQUVBLElBQUYsdUJBQUVBLElBQUksQ0FBRU0sWUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRHFDLENBQXZDO0FBU0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnRUFBRDtBQUFRLGlCQUFhLE1BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQ0UsYUFBUyxFQUFFQyxpREFBVSxDQUNuQkMsaUVBQU0sQ0FBQ0MsU0FEWSxFQUVuQkQsaUVBQU0sQ0FBQ0UsWUFGWSxFQUduQkYsaUVBQU0sQ0FBQ0csZ0JBSFksQ0FEdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9FO0FBQUssYUFBUyxFQUFFSCxpRUFBTSxDQUFDSSxVQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEYsRUFTRTtBQUFLLGFBQVMsRUFBRUosaUVBQU0sQ0FBQ0ssT0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHYixJQURILGFBQ0dBLElBREgsdUJBQ0dBLElBQUksQ0FBRWMsR0FBTixDQUFXQyxJQUFELElBQ1Q7QUFDRSxhQUFTLEVBQUVQLGlFQUFNLENBQUNRLGVBRHBCO0FBRUUsT0FBRyxFQUFFRCxJQUFJLENBQUNFLEVBRlo7QUFHRSxXQUFPLEVBQUVoQixTQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRTtBQUFLLGFBQVMsRUFBRU8saUVBQU0sQ0FBQ1UsS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyw2Q0FBc0NILElBQUksQ0FBQ0ksR0FBM0MsQ0FBUjtBQUEwRCxPQUFHLEVBQUMsRUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBTEYsQ0FERCxDQURILENBVEYsQ0FGRixDQURGO0FBNEJEOztHQXRDUXJCLE07VUFDd0JLLHlEOzs7S0FEeEJMLE07QUF3Q00scUVBQUFzQix1RUFBVyxDQUFDdEIsTUFBRCxDQUExQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9waG90b3MuMzk1NzNkM2Q3ODYyNWM0Y2U5NjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyB1c2VNb2RhbCB9IGZyb20gJ3JlYWN0LW1vZGFsLWhvb2snO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlcic7XHJcbmltcG9ydCBQaG90b3NNb2RhbCBmcm9tICdjb21wb25lbnRzL3Byb2ZpbGUvUGhvdG9zTW9kYWwnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL3Bob3Rvcy5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCByZXF1aXJlQXV0aCBmcm9tICdoZWxwZXJzL2hvYy9yZXF1aXJlQXV0aCc7XHJcblxyXG5mdW5jdGlvbiBQaG90b3MoeyBhdXRoOiB7IHVzZXIgfSB9KSB7XHJcbiAgY29uc3QgW3Nob3dNb2RhbCwgaGlkZU1vZGFsXSA9IHVzZU1vZGFsKCh7IGluOiBvcGVuIH0pID0+IChcclxuICAgIDxQaG90b3NNb2RhbFxyXG4gICAgICB0aXRsZT1cIlBob3RvIGRldGFpbFwiXHJcbiAgICAgIHNob3dNb2RhbD17b3Blbn1cclxuICAgICAgb25DbG9zZT17aGlkZU1vZGFsfVxyXG4gICAgICBkYXRhPXt1c2VyPy5yZWNlbnRQaG90b3N9XHJcbiAgICAvPlxyXG4gICkpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWRlciB3aXRob3V0U2VhcmNoIC8+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXHJcbiAgICAgICAgICBzdHlsZXMuY29udGFpbmVyLFxyXG4gICAgICAgICAgc3R5bGVzLmNvbnRhaW5lcl9iZyxcclxuICAgICAgICAgIHN0eWxlcy5jb250YWluZXJfcmFkaXVzXHJcbiAgICAgICAgKX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnZV90aXRsZX0+UGhvdG9zPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICB7dXNlcj8ubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5waG90b19jb250YWluZXJ9XHJcbiAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dNb2RhbH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG99PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2l0ZW0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVxdWlyZUF1dGgoUGhvdG9zKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==