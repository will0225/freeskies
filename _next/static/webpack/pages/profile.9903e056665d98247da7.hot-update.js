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
  otherUser = false
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlL01hcmtldFNlY3Rpb24uanMiXSwibmFtZXMiOlsiTWFya2V0U2VjdGlvbiIsImRhdGEiLCJlZGl0SXRlbSIsInNhbGUiLCJvdGhlclVzZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwibWFya2V0X3NjdGlvbiIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIm1lbnUiLCJkZWxldGVQaG90byIsImlkIiwiZm9udFNpemUiLCJtYXJrZXRfaXRlbSIsIm1hcmtldF9pdGVtX2ltYWdlIiwiaW1hZ2UiLCJzcmMiLCJwcmljZSIsIm1hcmtldF9pdGVtX21vZGVsIiwidGl0bGUiLCJlZGl0V3JhcHBlciIsImNvbG9yIiwicG9zaXRpb24iLCJkaXNwbGF5IiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxhQUFULENBQXVCO0FBQUVDLE1BQUY7QUFBUUMsVUFBUjtBQUFrQkMsTUFBSSxHQUFDLEtBQXZCO0FBQThCQyxXQUFTLEdBQUM7QUFBeEMsQ0FBdkIsRUFBd0U7QUFBQTs7QUFDckYsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUosU0FBWjtBQUNBLFNBQ0U7QUFBSyxhQUFTLEVBQUVLLHlFQUFNLENBQUNDLGFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS1QsSUFBSSxDQUFDVSxHQUFMLENBQVMsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEtBQWlCO0FBQUE7O0FBQ3ZCLFVBQU1DLElBQUksR0FDTixNQUFDLHlDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLGFBQU8sRUFBRSxNQUFNQyxXQUFXLENBQUNILElBQUksQ0FBQ0ksRUFBTixDQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxnRUFBRDtBQUFnQixXQUFLLEVBQUU7QUFBRUMsZ0JBQVEsRUFBRTtBQUFaLE9BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixPQUM2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUQ3QyxDQURGLEVBSUUsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxhQUFPLEVBQUUsTUFBTWYsUUFBUSxDQUFDVSxJQUFJLENBQUNJLEVBQU4sRUFBVWIsSUFBVixDQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyw4REFBRDtBQUFlLFdBQUssRUFBRTtBQUFFYyxnQkFBUSxFQUFFO0FBQVosT0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLE9BQzRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRDVDLENBSkYsQ0FESjs7QUFVQSxXQUNJO0FBQUssZUFBUyxFQUFFUix5RUFBTSxDQUFDUyxXQUF2QjtBQUFvQyxTQUFHLEVBQUVMLEtBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFLLGVBQVMsRUFBRUoseUVBQU0sQ0FBQ1UsaUJBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFLLFNBQUcseUNBQWtDUCxJQUFsQyxhQUFrQ0EsSUFBbEMsc0NBQWtDQSxJQUFJLENBQUVRLEtBQXhDLGdEQUFrQyxZQUFhQyxHQUEvQyxDQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixFQUVJO0FBQU0sZUFBUyxFQUFFWix5RUFBTSxDQUFDYSxLQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWdDVixJQUFJLENBQUNVLEtBQUwsR0FBVyxNQUFJVixJQUFJLENBQUNVLEtBQXBCLEdBQTBCLE1BQTFELENBRkosQ0FESixFQUtJO0FBQUssZUFBUyxFQUFFYix5RUFBTSxDQUFDYyxpQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSVgsSUFBSSxDQUFDWSxLQUFULENBREosQ0FMSixFQVdLLENBQUNwQixTQUFELEdBQ0QsTUFBQyw2Q0FBRDtBQUFVLGFBQU8sRUFBRVUsSUFBbkI7QUFBeUIsYUFBTyxFQUFFLENBQUMsT0FBRCxDQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSyxlQUFTLEVBQUVMLHlFQUFNLENBQUNnQixXQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0EsTUFBQyw0REFBRDtBQUFZLFdBQUssRUFBRTtBQUNmQyxhQUFLLEVBQUUsT0FEUTtBQUVmQyxnQkFBUSxFQUFFLFVBRks7QUFHZkMsZUFBTyxFQUFFLE9BSE07QUFJZkMsaUJBQVMsRUFBRTtBQUpJLE9BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEQSxDQURKLENBREMsR0FXQSxJQXRCTCxDQURKO0FBMEJILEdBckNBLENBREwsQ0FERjtBQTBDRDs7R0E3Q3VCN0IsYTtVQUNQTSxxRDs7O0tBRE9OLGEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS45OTAzZTA1NjY2NWQ5ODI0N2RhNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlrZUZpbGxlZCwgTWVzc2FnZUZpbGxlZCwgQ2FtZXJhT3V0bGluZWQsIEVkaXRGaWxsZWQsIERvd25PdXRsaW5lZCwgRGVsZXRlT3V0bGluZWQsICBFZGl0T3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvbWFya2V0X3NlY3Rpb24ubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IEF2YXRhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9BdmF0YXInO1xyXG5pbXBvcnQgeyBSb3csIENvbCwgRHJvcGRvd24sIE1lbnUgfSBmcm9tICdhbnRkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hcmtldFNlY3Rpb24oeyBkYXRhLCBlZGl0SXRlbSwgc2FsZT1mYWxzZSwgb3RoZXJVc2VyPWZhbHNlIH0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zb2xlLmxvZyhvdGhlclVzZXIpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1hcmtldF9zY3Rpb259PlxyXG4gICAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbWVudSA9IChcclxuICAgICAgICAgICAgICAgIDxNZW51PlxyXG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG9uQ2xpY2s9eygpID0+IGRlbGV0ZVBob3RvKGl0ZW0uaWQpfT5cclxuICAgICAgICAgICAgICAgICAgICA8RGVsZXRlT3V0bGluZWQgc3R5bGU9e3sgZm9udFNpemU6IDIwIH19Lz4gPHNwYW4+RGVsZXRlIEl0ZW08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG9uQ2xpY2s9eygpID0+IGVkaXRJdGVtKGl0ZW0uaWQsIHNhbGUpfT5cclxuICAgICAgICAgICAgICAgICAgICA8RWRpdE91dGxpbmVkICBzdHlsZT17eyBmb250U2l6ZTogMjAgfX0vPiA8c3Bhbj5FZGl0IEl0ZW08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYXJrZXRfaXRlbX0ga2V5PXtpbmRleH0gPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFya2V0X2l0ZW1faW1hZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpdGVtPy5pbWFnZT8uc3JjfWB9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucHJpY2V9PntpdGVtLnByaWNlPyckJytpdGVtLnByaWNlOidGcmVlJ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYXJrZXRfaXRlbV9tb2RlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpdGVtLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYXJrZXRfaXRlbV9kZXN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57aXRlbS50aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIHshb3RoZXJVc2VyP1xyXG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93biBvdmVybGF5PXttZW51fSB0cmlnZ2VyPXtbJ2NsaWNrJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVkaXRXcmFwcGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXRGaWxsZWQgc3R5bGU9e3sgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgOm51bGx9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0pfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9