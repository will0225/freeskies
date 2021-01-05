webpackHotUpdate_N_E("pages/marketplace",{

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
var _jsxFileName = "D:\\Freeskies-development-\\components\\profile\\MarketSection.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function MarketSection(_ref) {
  _s();

  var _this = this;

  var data = _ref.data,
      editItem = _ref.editItem,
      deleteMarketItem = _ref.deleteMarketItem,
      _ref$sale = _ref.sale,
      sale = _ref$sale === void 0 ? false : _ref$sale,
      _ref$otherUser = _ref.otherUser,
      otherUser = _ref$otherUser === void 0 ? false : _ref$otherUser,
      getDetailMarketItem = _ref.getDetailMarketItem;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  return __jsx("div", {
    className: _styles_market_section_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.market_sction,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, data.map(function (item, index) {
    var _item$image;

    var menu = __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
      onClick: function onClick() {
        return deleteMarketItem(item.id, sale);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 19
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["DeleteOutlined"], {
      style: {
        fontSize: 20
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 21
      }
    }), " ", __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 64
      }
    }, "Delete Item")), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
      onClick: function onClick() {
        return editItem(item.id, sale);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 19
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["EditOutlined"], {
      style: {
        fontSize: 20
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 21
      }
    }), " ", __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 63
      }
    }, "Edit Item")));

    return __jsx("div", {
      className: _styles_market_section_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.market_item,
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _styles_market_section_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.market_item_image,
      onClick: function onClick() {
        getDetailMarketItem(item.id, sale);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "https://freeskies.com/static/".concat(item === null || item === void 0 ? void 0 : (_item$image = item.image) === null || _item$image === void 0 ? void 0 : _item$image.src),
      className: _styles_market_section_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.image,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 25
      }
    }), __jsx("span", {
      className: _styles_market_section_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.price,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 25
      }
    }, item.price ? '$' + item.price : 'Free')), __jsx("div", {
      className: _styles_market_section_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.market_item_model,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 21
      }
    }, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 25
      }
    }, item.title)), !otherUser ? __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
      overlay: menu,
      trigger: ['click'],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: _styles_market_section_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.editWrapper,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 25
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["EditFilled"], {
      style: {
        color: 'white',
        position: 'relative',
        display: 'block',
        marginTop: 4
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 25
      }
    }))) : null);
  }), data.length == 0 ? __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Empty"], {
    image: antd__WEBPACK_IMPORTED_MODULE_3__["Empty"].PRESENTED_IMAGE_SIMPLE,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }) : null);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlL01hcmtldFNlY3Rpb24uanMiXSwibmFtZXMiOlsiTWFya2V0U2VjdGlvbiIsImRhdGEiLCJlZGl0SXRlbSIsImRlbGV0ZU1hcmtldEl0ZW0iLCJzYWxlIiwib3RoZXJVc2VyIiwiZ2V0RGV0YWlsTWFya2V0SXRlbSIsInJvdXRlciIsInVzZVJvdXRlciIsInN0eWxlcyIsIm1hcmtldF9zY3Rpb24iLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJtZW51IiwiaWQiLCJmb250U2l6ZSIsIm1hcmtldF9pdGVtIiwibWFya2V0X2l0ZW1faW1hZ2UiLCJpbWFnZSIsInNyYyIsInByaWNlIiwibWFya2V0X2l0ZW1fbW9kZWwiLCJ0aXRsZSIsImVkaXRXcmFwcGVyIiwiY29sb3IiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJtYXJnaW5Ub3AiLCJsZW5ndGgiLCJFbXB0eSIsIlBSRVNFTlRFRF9JTUFHRV9TSU1QTEUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLGFBQVQsT0FBK0c7QUFBQTs7QUFBQTs7QUFBQSxNQUF0RkMsSUFBc0YsUUFBdEZBLElBQXNGO0FBQUEsTUFBaEZDLFFBQWdGLFFBQWhGQSxRQUFnRjtBQUFBLE1BQXRFQyxnQkFBc0UsUUFBdEVBLGdCQUFzRTtBQUFBLHVCQUFwREMsSUFBb0Q7QUFBQSxNQUFwREEsSUFBb0QsMEJBQS9DLEtBQStDO0FBQUEsNEJBQXhDQyxTQUF3QztBQUFBLE1BQXhDQSxTQUF3QywrQkFBOUIsS0FBOEI7QUFBQSxNQUF2QkMsbUJBQXVCLFFBQXZCQSxtQkFBdUI7QUFDNUgsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLFNBQ0U7QUFBSyxhQUFTLEVBQUVDLHlFQUFNLENBQUNDLGFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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QUE7QUFBQSxNQURBLENBREosQ0FEQyxHQVdBLElBdEJMLENBREo7QUEwQkgsR0FyQ0EsQ0FETCxFQXVDSzNCLElBQUksQ0FBQzRCLE1BQUwsSUFBZSxDQUFmLEdBQ0csTUFBQywwQ0FBRDtBQUFPLFNBQUssRUFBRUMsMENBQUssQ0FBQ0Msc0JBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESCxHQUNrRCxJQXhDdkQsQ0FERjtBQTZDRDs7R0EvQ3VCL0IsYTtVQUNQUSxxRDs7O0tBRE9SLGEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFya2V0cGxhY2UuOGU1ODA3YzNiNTBiMGNjODY3ZGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpa2VGaWxsZWQsIE1lc3NhZ2VGaWxsZWQsIENhbWVyYU91dGxpbmVkLCBFZGl0RmlsbGVkLCBEb3duT3V0bGluZWQsIERlbGV0ZU91dGxpbmVkLCAgRWRpdE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL21hcmtldF9zZWN0aW9uLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb24vQXZhdGFyJztcclxuaW1wb3J0IHsgUm93LCBDb2wsIERyb3Bkb3duLCBNZW51LCBFbXB0eSB9IGZyb20gJ2FudGQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFya2V0U2VjdGlvbih7IGRhdGEsIGVkaXRJdGVtLCBkZWxldGVNYXJrZXRJdGVtLCBzYWxlPWZhbHNlLCBvdGhlclVzZXI9ZmFsc2UsIGdldERldGFpbE1hcmtldEl0ZW0gfSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1hcmtldF9zY3Rpb259PlxyXG4gICAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbWVudSA9IChcclxuICAgICAgICAgICAgICAgIDxNZW51PlxyXG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG9uQ2xpY2s9eygpID0+IGRlbGV0ZU1hcmtldEl0ZW0oaXRlbS5pZCwgc2FsZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEZWxldGVPdXRsaW5lZCBzdHlsZT17eyBmb250U2l6ZTogMjAgfX0vPiA8c3Bhbj5EZWxldGUgSXRlbTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gb25DbGljaz17KCkgPT4gZWRpdEl0ZW0oaXRlbS5pZCwgc2FsZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxFZGl0T3V0bGluZWQgIHN0eWxlPXt7IGZvbnRTaXplOiAyMCB9fS8+IDxzcGFuPkVkaXQgSXRlbTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1hcmtldF9pdGVtfSBrZXk9e2luZGV4fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYXJrZXRfaXRlbV9pbWFnZX0gb25DbGljaz17KCkgPT4geyBnZXREZXRhaWxNYXJrZXRJdGVtKGl0ZW0uaWQsIHNhbGUpO319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpdGVtPy5pbWFnZT8uc3JjfWB9IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnByaWNlfT57aXRlbS5wcmljZT8nJCcraXRlbS5wcmljZTonRnJlZSd9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFya2V0X2l0ZW1fbW9kZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57aXRlbS50aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFya2V0X2l0ZW1fZGVzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2l0ZW0udGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICB7IW90aGVyVXNlcj9cclxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gb3ZlcmxheT17bWVudX0gdHJpZ2dlcj17WydjbGljayddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lZGl0V3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0RmlsbGVkIHN0eWxlPXt7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgIDpudWxsfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9KX1cclxuICAgICAgICB7ZGF0YS5sZW5ndGggPT0gMD9cclxuICAgICAgICAgICAgPEVtcHR5IGltYWdlPXtFbXB0eS5QUkVTRU5URURfSU1BR0VfU0lNUExFfSAvPjpudWxsXHJcbiAgICAgICAgfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9