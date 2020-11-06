webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/profile/PhotoList.js":
/*!*****************************************!*\
  !*** ./components/profile/PhotoList.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_modal_hook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-modal-hook */ "./node_modules/react-modal-hook/dist/index.es.js");
/* harmony import */ var _PhotosModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PhotosModal */ "./components/profile/PhotosModal.js");
/* harmony import */ var _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/photos_modal.module.scss */ "./components/profile/styles/photos_modal.module.scss");
/* harmony import */ var _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");


var _this = undefined,
    _jsxFileName = "E:\\freeskies_fe_code\\components\\profile\\PhotoList.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var ImageList = function ImageList(_ref) {
  _s();

  var images = _ref.images,
      onRatePost = _ref.onRatePost;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      photoIndex = _useState[0],
      setPhotoIndex = _useState[1];

  var _useModal = Object(react_modal_hook__WEBPACK_IMPORTED_MODULE_3__["useModal"])(function (_ref2) {
    var open = _ref2["in"];
    return __jsx(_PhotosModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "Photo detail",
      showModal: open,
      onClose: hideModal,
      data: images,
      onRatePost: onRatePost,
      photoIndex: photoIndex,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 5
      }
    });
  }),
      _useModal2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useModal, 2),
      showModal = _useModal2[0],
      hideModal = _useModal2[1];

  var i = 1;
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.photos, _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.sections_content),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, images.map(function (item, index) {
    return __jsx("div", {
      className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.photo,
      onClick: function onClick() {
        setPhotoIndex(index);
        showModal();
      },
      key: item.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(item.src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }
    }));
  }));
};

_s(ImageList, "vrbRAW75pJtiX9VZjHKJCQ7tCBc=", false, function () {
  return [react_modal_hook__WEBPACK_IMPORTED_MODULE_3__["useModal"]];
});

_c = ImageList;
/* harmony default export */ __webpack_exports__["default"] = (ImageList);

var _c;

$RefreshReg$(_c, "ImageList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlL1Bob3RvTGlzdC5qcyJdLCJuYW1lcyI6WyJJbWFnZUxpc3QiLCJpbWFnZXMiLCJvblJhdGVQb3N0IiwidXNlU3RhdGUiLCJwaG90b0luZGV4Iiwic2V0UGhvdG9JbmRleCIsInVzZU1vZGFsIiwib3BlbiIsImhpZGVNb2RhbCIsInNob3dNb2RhbCIsImkiLCJjbGFzc25hbWVzIiwic3R5bGVzIiwicGhvdG9zIiwic2VjdGlvbnNfY29udGVudCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInBob3RvIiwiaWQiLCJzcmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBNEI7QUFBQTs7QUFBQSxNQUF6QkMsTUFBeUIsUUFBekJBLE1BQXlCO0FBQUEsTUFBakJDLFVBQWlCLFFBQWpCQSxVQUFpQjs7QUFBQSxrQkFFUkMsc0RBQVEsQ0FBQyxDQUFELENBRkE7QUFBQSxNQUVyQ0MsVUFGcUM7QUFBQSxNQUV6QkMsYUFGeUI7O0FBQUEsa0JBR2JDLGlFQUFRLENBQUM7QUFBQSxRQUFPQyxJQUFQO0FBQUEsV0FDdEMsTUFBQyxvREFBRDtBQUNFLFdBQUssRUFBQyxjQURSO0FBRUUsZUFBUyxFQUFFQSxJQUZiO0FBR0UsYUFBTyxFQUFFQyxTQUhYO0FBSUUsVUFBSSxFQUFFUCxNQUpSO0FBS0UsZ0JBQVUsRUFBRUMsVUFMZDtBQU1FLGdCQUFVLEVBQUVFLFVBTmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURzQztBQUFBLEdBQUQsQ0FISztBQUFBO0FBQUEsTUFHckNLLFNBSHFDO0FBQUEsTUFHMUJELFNBSDBCOztBQWM1QyxNQUFJRSxDQUFDLEdBQUMsQ0FBTjtBQUNBLFNBQ0U7QUFBSyxhQUFTLEVBQUVDLGlEQUFVLENBQUNDLHVFQUFNLENBQUNDLE1BQVIsRUFBZ0JELHVFQUFNLENBQUNFLGdCQUF2QixDQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0diLE1BQU0sQ0FBQ2MsR0FBUCxDQUFXLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLFdBQ1Y7QUFBSyxlQUFTLEVBQUVMLHVFQUFNLENBQUNNLEtBQXZCO0FBQThCLGFBQU8sRUFBRSxtQkFBTTtBQUFFYixxQkFBYSxDQUFDWSxLQUFELENBQWI7QUFBc0JSLGlCQUFTO0FBQUksT0FBbEY7QUFBb0YsU0FBRyxFQUFFTyxJQUFJLENBQUNHLEVBQTlGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLFNBQUcsNkNBQXNDSCxJQUFJLENBQUNJLEdBQTNDLENBQVI7QUFBMEQsU0FBRyxFQUFDLEVBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURVO0FBQUEsR0FBWCxDQURILENBREY7QUFTRCxDQXhCRDs7R0FBTXBCLFM7VUFHMkJNLHlEOzs7S0FIM0JOLFM7QUEwQlNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuN2NlNzY4Y2JlNzQ4NWM5NTliZTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7IHVzZU1vZGFsIH0gZnJvbSAncmVhY3QtbW9kYWwtaG9vayc7XHJcbmltcG9ydCBQaG90b3NNb2RhbCBmcm9tICcuL1Bob3Rvc01vZGFsJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy9waG90b3NfbW9kYWwubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gJ2FudGQnO1xyXG5cclxuY29uc3QgSW1hZ2VMaXN0ID0gKHsgaW1hZ2VzLCBvblJhdGVQb3N0IH0pID0+IHtcclxuXHJcbiAgY29uc3QgW3Bob3RvSW5kZXgsIHNldFBob3RvSW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3Nob3dNb2RhbCwgaGlkZU1vZGFsXSA9IHVzZU1vZGFsKCh7IGluOiBvcGVuIH0pID0+IChcclxuICAgIDxQaG90b3NNb2RhbFxyXG4gICAgICB0aXRsZT1cIlBob3RvIGRldGFpbFwiXHJcbiAgICAgIHNob3dNb2RhbD17b3Blbn1cclxuICAgICAgb25DbG9zZT17aGlkZU1vZGFsfVxyXG4gICAgICBkYXRhPXtpbWFnZXN9XHJcbiAgICAgIG9uUmF0ZVBvc3Q9e29uUmF0ZVBvc3R9XHJcbiAgICAgIHBob3RvSW5kZXg9e3Bob3RvSW5kZXh9XHJcbiAgICAvPlxyXG4gICkpO1xyXG5cclxuICB2YXIgaT0xO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMucGhvdG9zLCBzdHlsZXMuc2VjdGlvbnNfY29udGVudCl9PlxyXG4gICAgICB7aW1hZ2VzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBob3RvfSBvbkNsaWNrPXsoKSA9PiB7IHNldFBob3RvSW5kZXgoaW5kZXgpOyBzaG93TW9kYWwoKSB9fSBrZXk9e2l0ZW0uaWR9PlxyXG4gICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2l0ZW0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZUxpc3QiXSwic291cmNlUm9vdCI6IiJ9