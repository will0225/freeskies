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

  console.log(photoIndex);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlL1Bob3RvTGlzdC5qcyJdLCJuYW1lcyI6WyJJbWFnZUxpc3QiLCJpbWFnZXMiLCJvblJhdGVQb3N0IiwidXNlU3RhdGUiLCJwaG90b0luZGV4Iiwic2V0UGhvdG9JbmRleCIsInVzZU1vZGFsIiwib3BlbiIsImhpZGVNb2RhbCIsInNob3dNb2RhbCIsImNvbnNvbGUiLCJsb2ciLCJpIiwiY2xhc3NuYW1lcyIsInN0eWxlcyIsInBob3RvcyIsInNlY3Rpb25zX2NvbnRlbnQiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJwaG90byIsImlkIiwic3JjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQTRCO0FBQUE7O0FBQUEsTUFBekJDLE1BQXlCLFFBQXpCQSxNQUF5QjtBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7O0FBQUEsa0JBRVJDLHNEQUFRLENBQUMsQ0FBRCxDQUZBO0FBQUEsTUFFckNDLFVBRnFDO0FBQUEsTUFFekJDLGFBRnlCOztBQUFBLGtCQUdiQyxpRUFBUSxDQUFDO0FBQUEsUUFBT0MsSUFBUDtBQUFBLFdBQ3RDLE1BQUMsb0RBQUQ7QUFDRSxXQUFLLEVBQUMsY0FEUjtBQUVFLGVBQVMsRUFBRUEsSUFGYjtBQUdFLGFBQU8sRUFBRUMsU0FIWDtBQUlFLFVBQUksRUFBRVAsTUFKUjtBQUtFLGdCQUFVLEVBQUVDLFVBTGQ7QUFNRSxnQkFBVSxFQUFFRSxVQU5kO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEc0M7QUFBQSxHQUFELENBSEs7QUFBQTtBQUFBLE1BR3JDSyxTQUhxQztBQUFBLE1BRzFCRCxTQUgwQjs7QUFhNUNFLFNBQU8sQ0FBQ0MsR0FBUixDQUFZUCxVQUFaO0FBQ0EsTUFBSVEsQ0FBQyxHQUFDLENBQU47QUFDQSxTQUNFO0FBQUssYUFBUyxFQUFFQyxpREFBVSxDQUFDQyx1RUFBTSxDQUFDQyxNQUFSLEVBQWdCRCx1RUFBTSxDQUFDRSxnQkFBdkIsQ0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHZixNQUFNLENBQUNnQixHQUFQLENBQVcsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsV0FDVjtBQUFLLGVBQVMsRUFBRUwsdUVBQU0sQ0FBQ00sS0FBdkI7QUFBOEIsYUFBTyxFQUFFLG1CQUFNO0FBQUVmLHFCQUFhLENBQUNjLEtBQUQsQ0FBYjtBQUFzQlYsaUJBQVM7QUFBSSxPQUFsRjtBQUFvRixTQUFHLEVBQUVTLElBQUksQ0FBQ0csRUFBOUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssU0FBRyw2Q0FBc0NILElBQUksQ0FBQ0ksR0FBM0MsQ0FBUjtBQUEwRCxTQUFHLEVBQUMsRUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBRFU7QUFBQSxHQUFYLENBREgsQ0FERjtBQVNELENBeEJEOztHQUFNdEIsUztVQUcyQk0seUQ7OztLQUgzQk4sUztBQTBCU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS4xMWUzOWZlNjM5OTFlMmQyZDE2NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgdXNlTW9kYWwgfSBmcm9tICdyZWFjdC1tb2RhbC1ob29rJztcclxuaW1wb3J0IFBob3Rvc01vZGFsIGZyb20gJy4vUGhvdG9zTW9kYWwnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL3Bob3Rvc19tb2RhbC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSAnYW50ZCc7XHJcblxyXG5jb25zdCBJbWFnZUxpc3QgPSAoeyBpbWFnZXMsIG9uUmF0ZVBvc3QgfSkgPT4ge1xyXG5cclxuICBjb25zdCBbcGhvdG9JbmRleCwgc2V0UGhvdG9JbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbc2hvd01vZGFsLCBoaWRlTW9kYWxdID0gdXNlTW9kYWwoKHsgaW46IG9wZW4gfSkgPT4gKFxyXG4gICAgPFBob3Rvc01vZGFsXHJcbiAgICAgIHRpdGxlPVwiUGhvdG8gZGV0YWlsXCJcclxuICAgICAgc2hvd01vZGFsPXtvcGVufVxyXG4gICAgICBvbkNsb3NlPXtoaWRlTW9kYWx9XHJcbiAgICAgIGRhdGE9e2ltYWdlc31cclxuICAgICAgb25SYXRlUG9zdD17b25SYXRlUG9zdH1cclxuICAgICAgcGhvdG9JbmRleD17cGhvdG9JbmRleH1cclxuICAgIC8+XHJcbiAgKSk7XHJcbiAgY29uc29sZS5sb2cocGhvdG9JbmRleClcclxuICB2YXIgaT0xO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMucGhvdG9zLCBzdHlsZXMuc2VjdGlvbnNfY29udGVudCl9PlxyXG4gICAgICB7aW1hZ2VzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBob3RvfSBvbkNsaWNrPXsoKSA9PiB7IHNldFBob3RvSW5kZXgoaW5kZXgpOyBzaG93TW9kYWwoKSB9fSBrZXk9e2l0ZW0uaWR9PlxyXG4gICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2l0ZW0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZUxpc3QiXSwic291cmNlUm9vdCI6IiJ9