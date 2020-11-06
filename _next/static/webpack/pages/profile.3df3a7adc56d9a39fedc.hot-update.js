webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/profile/PhotoSection.js":
/*!********************************************!*\
  !*** ./components/profile/PhotoSection.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PhotoSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _PhotoList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PhotoList */ "./components/profile/PhotoList.js");
/* harmony import */ var _styles_photo_section_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/photo-section.module.scss */ "./components/profile/styles/photo-section.module.scss");
/* harmony import */ var _styles_photo_section_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_photo_section_module_scss__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "E:\\freeskies_fe_code\\components\\profile\\PhotoSection.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function PhotoSection(_ref) {
  _s();

  var user = _ref.user,
      onRatePost = _ref.onRatePost;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var images = user === null || user === void 0 ? void 0 : user.recentPhotos;

  var goToPhotos = function goToPhotos() {
    router.push('/photos');
  };

  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_styles_photo_section_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container_bg, _styles_photo_section_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.section),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _styles_photo_section_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.section_title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, "Recent photos"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "link",
    onClick: goToPhotos,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, "All photos")), images && images.length !== 0 && __jsx(_PhotoList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    images: images,
    onRatePost: onRatePost,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }));
}

_s(PhotoSection, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = PhotoSection;

var _c;

$RefreshReg$(_c, "PhotoSection");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlL1Bob3RvU2VjdGlvbi5qcyJdLCJuYW1lcyI6WyJQaG90b1NlY3Rpb24iLCJ1c2VyIiwib25SYXRlUG9zdCIsInJvdXRlciIsInVzZVJvdXRlciIsImltYWdlcyIsInJlY2VudFBob3RvcyIsImdvVG9QaG90b3MiLCJwdXNoIiwiY2xhc3NuYW1lcyIsInN0eWxlcyIsImNvbnRhaW5lcl9iZyIsInNlY3Rpb24iLCJzZWN0aW9uX3RpdGxlIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFlBQVQsT0FBNEM7QUFBQTs7QUFBQSxNQUFwQkMsSUFBb0IsUUFBcEJBLElBQW9CO0FBQUEsTUFBZEMsVUFBYyxRQUFkQSxVQUFjO0FBQ3pELE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNQyxNQUFNLEdBQUdKLElBQUgsYUFBR0EsSUFBSCx1QkFBR0EsSUFBSSxDQUFFSyxZQUFyQjs7QUFDQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCSixVQUFNLENBQUNLLElBQVAsQ0FBWSxTQUFaO0FBQ0QsR0FGRDs7QUFHQSxTQUNFO0FBQUssYUFBUyxFQUFFQyxpREFBVSxDQUFDQyx3RUFBTSxDQUFDQyxZQUFSLEVBQXNCRCx3RUFBTSxDQUFDRSxPQUE3QixDQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVGLHdFQUFNLENBQUNHLGFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLEVBRUUsTUFBQywyQ0FBRDtBQUFRLFFBQUksRUFBQyxNQUFiO0FBQW9CLFdBQU8sRUFBRU4sVUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixDQURGLEVBT0dGLE1BQU0sSUFBSUEsTUFBTSxDQUFDUyxNQUFQLEtBQWtCLENBQTVCLElBQ0MsTUFBQyxrREFBRDtBQUNFLFVBQU0sRUFBRVQsTUFEVjtBQUVFLGNBQVUsRUFBRUgsVUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkosQ0FERjtBQWdCRDs7R0F0QnVCRixZO1VBQ1BJLHFEOzs7S0FET0osWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLjNkZjNhN2FkYzU2ZDlhMzlmZWRjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFBob3RvTGlzdCBmcm9tICcuL1Bob3RvTGlzdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy9waG90by1zZWN0aW9uLm1vZHVsZS5zY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBob3RvU2VjdGlvbih7IHVzZXIsIG9uUmF0ZVBvc3QgfSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGltYWdlcyA9IHVzZXI/LnJlY2VudFBob3Rvc1xyXG4gIGNvbnN0IGdvVG9QaG90b3MgPSAoKSA9PiB7XHJcbiAgICByb3V0ZXIucHVzaCgnL3Bob3RvcycpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5jb250YWluZXJfYmcsIHN0eWxlcy5zZWN0aW9uKX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VjdGlvbl90aXRsZX0+XHJcbiAgICAgICAgPHA+UmVjZW50IHBob3RvczwvcD5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJsaW5rXCIgb25DbGljaz17Z29Ub1Bob3Rvc30+XHJcbiAgICAgICAgICBBbGwgcGhvdG9zXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7aW1hZ2VzICYmIGltYWdlcy5sZW5ndGggIT09IDAgJiYgKFxyXG4gICAgICAgIDxQaG90b0xpc3RcclxuICAgICAgICAgIGltYWdlcz17aW1hZ2VzfVxyXG4gICAgICAgICAgb25SYXRlUG9zdD17b25SYXRlUG9zdH1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9