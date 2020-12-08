webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/profile/MarketSection.js":
/*!*********************************************!*\
  !*** ./components/profile/MarketSection.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MarketSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _styles_market_section_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/market_section.module.scss */ "./components/profile/styles/market_section.module.scss");
/* harmony import */ var _styles_market_section_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_market_section_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_common_Avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/common/Avatar */ "./components/common/Avatar.js");
var _jsxFileName = "E:\\freeskies_fe_code\\components\\profile\\MarketSection.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function MarketSection({
  data,
  editItem,
  sale = false,
  otherUser = false,
  getDetailMarketItem
}) {
  _s();

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  console.log(otherUser);
  return __jsx("div", {
    className: _styles_market_section_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.market_sction,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, data.map((item, index) => {
    var _item$image;

    const menu = __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
      onClick: () => deletePhoto(item.id),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 19
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["DeleteOutlined"], {
      style: {
        fontSize: 20
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 21
      }
    }), " ", __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 64
      }
    }, "Delete Item")), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
      onClick: () => editItem(item.id, sale),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 19
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["EditOutlined"], {
      style: {
        fontSize: 20
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 21
      }
    }), " ", __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 63
      }
    }, "Edit Item")));

    return __jsx("div", {
      className: _styles_market_section_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.market_item,
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _styles_market_section_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.market_item_image,
      onClick: () => {
        getDetailMarketItem(item.id, sale);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "https://freeskies.com/static/".concat(item === null || item === void 0 ? void 0 : (_item$image = item.image) === null || _item$image === void 0 ? void 0 : _item$image.src),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 25
      }
    }), __jsx("span", {
      className: _styles_market_section_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.price,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 25
      }
    }, item.price ? '$' + item.price : 'Free')), __jsx("div", {
      className: _styles_market_section_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.market_item_model,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 21
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 25
      }
    }, item.title)), !otherUser ? __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
      overlay: menu,
      trigger: ['click'],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: _styles_market_section_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.editWrapper,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 25
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["EditFilled"], {
      style: {
        color: 'white',
        position: 'relative',
        display: 'block',
        marginTop: 4
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 25
      }
    }))) : null);
  }));
}

_s(MarketSection, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c = MarketSection;

var _c;

$RefreshReg$(_c, "MarketSection");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlL01hcmtldFNlY3Rpb24uanMiXSwibmFtZXMiOlsiTWFya2V0U2VjdGlvbiIsImRhdGEiLCJlZGl0SXRlbSIsInNhbGUiLCJvdGhlclVzZXIiLCJnZXREZXRhaWxNYXJrZXRJdGVtIiwicm91dGVyIiwidXNlUm91dGVyIiwiY29uc29sZSIsImxvZyIsInN0eWxlcyIsIm1hcmtldF9zY3Rpb24iLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJtZW51IiwiZGVsZXRlUGhvdG8iLCJpZCIsImZvbnRTaXplIiwibWFya2V0X2l0ZW0iLCJtYXJrZXRfaXRlbV9pbWFnZSIsImltYWdlIiwic3JjIiwicHJpY2UiLCJtYXJrZXRfaXRlbV9tb2RlbCIsInRpdGxlIiwiZWRpdFdyYXBwZXIiLCJjb2xvciIsInBvc2l0aW9uIiwiZGlzcGxheSIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsYUFBVCxDQUF1QjtBQUFFQyxNQUFGO0FBQVFDLFVBQVI7QUFBa0JDLE1BQUksR0FBQyxLQUF2QjtBQUE4QkMsV0FBUyxHQUFDLEtBQXhDO0FBQStDQztBQUEvQyxDQUF2QixFQUE2RjtBQUFBOztBQUMxRyxRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTCxTQUFaO0FBQ0EsU0FDRTtBQUFLLGFBQVMsRUFBRU0seUVBQU0sQ0FBQ0MsYUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLVixJQUFJLENBQUNXLEdBQUwsQ0FBUyxDQUFDQyxJQUFELEVBQU9DLEtBQVAsS0FBaUI7QUFBQTs7QUFDdkIsVUFBTUMsSUFBSSxHQUNOLE1BQUMseUNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsYUFBTyxFQUFFLE1BQU1DLFdBQVcsQ0FBQ0gsSUFBSSxDQUFDSSxFQUFOLENBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGdFQUFEO0FBQWdCLFdBQUssRUFBRTtBQUFFQyxnQkFBUSxFQUFFO0FBQVosT0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLE9BQzZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRDdDLENBREYsRUFJRSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLGFBQU8sRUFBRSxNQUFNaEIsUUFBUSxDQUFDVyxJQUFJLENBQUNJLEVBQU4sRUFBVWQsSUFBVixDQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyw4REFBRDtBQUFlLFdBQUssRUFBRTtBQUFFZSxnQkFBUSxFQUFFO0FBQVosT0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLE9BQzRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRDVDLENBSkYsQ0FESjs7QUFVQSxXQUNJO0FBQUssZUFBUyxFQUFFUix5RUFBTSxDQUFDUyxXQUF2QjtBQUFvQyxTQUFHLEVBQUVMLEtBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFLLGVBQVMsRUFBRUoseUVBQU0sQ0FBQ1UsaUJBQXZCO0FBQTBDLGFBQU8sRUFBRSxNQUFNO0FBQUVmLDJCQUFtQixDQUFDUSxJQUFJLENBQUNJLEVBQU4sRUFBVWQsSUFBVixDQUFuQjtBQUFvQyxPQUEvRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSyxTQUFHLHlDQUFrQ1UsSUFBbEMsYUFBa0NBLElBQWxDLHNDQUFrQ0EsSUFBSSxDQUFFUSxLQUF4QyxnREFBa0MsWUFBYUMsR0FBL0MsQ0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosRUFFSTtBQUFNLGVBQVMsRUFBRVoseUVBQU0sQ0FBQ2EsS0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFnQ1YsSUFBSSxDQUFDVSxLQUFMLEdBQVcsTUFBSVYsSUFBSSxDQUFDVSxLQUFwQixHQUEwQixNQUExRCxDQUZKLENBREosRUFLSTtBQUFLLGVBQVMsRUFBRWIseUVBQU0sQ0FBQ2MsaUJBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlYLElBQUksQ0FBQ1ksS0FBVCxDQURKLENBTEosRUFXSyxDQUFDckIsU0FBRCxHQUNELE1BQUMsNkNBQUQ7QUFBVSxhQUFPLEVBQUVXLElBQW5CO0FBQXlCLGFBQU8sRUFBRSxDQUFDLE9BQUQsQ0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUssZUFBUyxFQUFFTCx5RUFBTSxDQUFDZ0IsV0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNBLE1BQUMsNERBQUQ7QUFBWSxXQUFLLEVBQUU7QUFDZkMsYUFBSyxFQUFFLE9BRFE7QUFFZkMsZ0JBQVEsRUFBRSxVQUZLO0FBR2ZDLGVBQU8sRUFBRSxPQUhNO0FBSWZDLGlCQUFTLEVBQUU7QUFKSSxPQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREEsQ0FESixDQURDLEdBV0EsSUF0QkwsQ0FESjtBQTBCSCxHQXJDQSxDQURMLENBREY7QUEwQ0Q7O0dBN0N1QjlCLGE7VUFDUE8scUQ7OztLQURPUCxhIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuZGJkMDZkYzc1NjkwOWUzMGE4MTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpa2VGaWxsZWQsIE1lc3NhZ2VGaWxsZWQsIENhbWVyYU91dGxpbmVkLCBFZGl0RmlsbGVkLCBEb3duT3V0bGluZWQsIERlbGV0ZU91dGxpbmVkLCAgRWRpdE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL21hcmtldF9zZWN0aW9uLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb24vQXZhdGFyJztcclxuaW1wb3J0IHsgUm93LCBDb2wsIERyb3Bkb3duLCBNZW51IH0gZnJvbSAnYW50ZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXJrZXRTZWN0aW9uKHsgZGF0YSwgZWRpdEl0ZW0sIHNhbGU9ZmFsc2UsIG90aGVyVXNlcj1mYWxzZSwgZ2V0RGV0YWlsTWFya2V0SXRlbSB9KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc29sZS5sb2cob3RoZXJVc2VyKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYXJrZXRfc2N0aW9ufT5cclxuICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lbnUgPSAoXHJcbiAgICAgICAgICAgICAgICA8TWVudT5cclxuICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBvbkNsaWNrPXsoKSA9PiBkZWxldGVQaG90byhpdGVtLmlkKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPERlbGV0ZU91dGxpbmVkIHN0eWxlPXt7IGZvbnRTaXplOiAyMCB9fS8+IDxzcGFuPkRlbGV0ZSBJdGVtPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBvbkNsaWNrPXsoKSA9PiBlZGl0SXRlbShpdGVtLmlkLCBzYWxlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEVkaXRPdXRsaW5lZCAgc3R5bGU9e3sgZm9udFNpemU6IDIwIH19Lz4gPHNwYW4+RWRpdCBJdGVtPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFya2V0X2l0ZW19IGtleT17aW5kZXh9ID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1hcmtldF9pdGVtX2ltYWdlfSBvbkNsaWNrPXsoKSA9PiB7IGdldERldGFpbE1hcmtldEl0ZW0oaXRlbS5pZCwgc2FsZSk7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly9mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2l0ZW0/LmltYWdlPy5zcmN9YH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wcmljZX0+e2l0ZW0ucHJpY2U/JyQnK2l0ZW0ucHJpY2U6J0ZyZWUnfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1hcmtldF9pdGVtX21vZGVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2l0ZW0udGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1hcmtldF9pdGVtX2Rlc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpdGVtLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgeyFvdGhlclVzZXI/XHJcbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIG92ZXJsYXk9e21lbnV9IHRyaWdnZXI9e1snY2xpY2snXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdFdyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RWRpdEZpbGxlZCBzdHlsZT17eyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiA0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgICAgICAgICA6bnVsbH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=