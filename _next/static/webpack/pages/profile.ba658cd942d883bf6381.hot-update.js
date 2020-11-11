webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/timeline/Actions.js":
/*!****************************************!*\
  !*** ./components/timeline/Actions.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Actions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _styles_actions_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/actions.module.scss */ "./components/timeline/styles/actions.module.scss");
/* harmony import */ var _styles_actions_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_actions_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _forms_rating_RatingSlide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../forms/rating/RatingSlide */ "./components/forms/rating/RatingSlide.js");
var _jsxFileName = "E:\\freeskies_fe_code\\components\\timeline\\Actions.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Actions(_ref) {
  _s();

  var _this = this;

  var actions = _ref.actions,
      index = _ref.index,
      postRate = _ref.postRate,
      onRatePost = _ref.onRatePost,
      id = _ref.id,
      type = _ref.type,
      comments = _ref.comments,
      likeAction = _ref.likeAction,
      shareAction = _ref.shareAction;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      rateVisible = _useState[0],
      setRateVisible = _useState[1];

  var handleRateVisibleToggle = function handleRateVisibleToggle() {
    return setRateVisible(function (state) {
      return !state;
    });
  };

  return __jsx("div", {
    className: _styles_actions_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.post_actions,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    placement: "top",
    title: 'Rating',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Popover"], {
    content: function content() {
      return __jsx(_forms_rating_RatingSlide__WEBPACK_IMPORTED_MODULE_5__["default"], {
        dark: true,
        size: "large",
        defaultRate: postRate,
        onChange: function onChange(rate) {
          onRatePost(type, id, rate);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 13
        }
      });
    } // title="Title"
    ,
    placement: "topLeft",
    trigger: "click",
    visible: rateVisible,
    onVisibleChange: handleRateVisibleToggle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_actions_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.icon_container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: ['far', 'star'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }), __jsx("span", {
    style: {
      marginLeft: 5
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, postRate || 0)))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    placement: "top",
    title: 'Like',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Popover"], {
    content: function content() {
      return __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
        icon: ['far', 'grin'],
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 15
        }
      });
    } // title="Title"
    ,
    placement: "topLeft",
    trigger: "click",
    visible: rateVisible,
    onVisibleChange: handleRateVisibleToggle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    placement: "top",
    title: 'Share',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_actions_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.icon_container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: ['far', 'share-square'],
    onClick: shareAction,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    placement: "top",
    title: 'Comments',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_actions_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.icon_container,
    onClick: actions,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: ['far', 'comment-alt'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }), __jsx("span", {
    className: _styles_actions_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.comment_count,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }, comments && comments.length))));
}

_s(Actions, "x9TTBsVO4M0D9kFAvdeFa2ofVZ8=");

_c = Actions;

var _c;

$RefreshReg$(_c, "Actions");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aW1lbGluZS9BY3Rpb25zLmpzIl0sIm5hbWVzIjpbIkFjdGlvbnMiLCJhY3Rpb25zIiwiaW5kZXgiLCJwb3N0UmF0ZSIsIm9uUmF0ZVBvc3QiLCJpZCIsInR5cGUiLCJjb21tZW50cyIsImxpa2VBY3Rpb24iLCJzaGFyZUFjdGlvbiIsInVzZVN0YXRlIiwicmF0ZVZpc2libGUiLCJzZXRSYXRlVmlzaWJsZSIsImhhbmRsZVJhdGVWaXNpYmxlVG9nZ2xlIiwic3RhdGUiLCJzdHlsZXMiLCJwb3N0X2FjdGlvbnMiLCJyYXRlIiwiaWNvbl9jb250YWluZXIiLCJtYXJnaW5MZWZ0IiwiY29tbWVudF9jb3VudCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE9BQVQsT0FVWjtBQUFBOztBQUFBOztBQUFBLE1BVERDLE9BU0MsUUFUREEsT0FTQztBQUFBLE1BUkRDLEtBUUMsUUFSREEsS0FRQztBQUFBLE1BUERDLFFBT0MsUUFQREEsUUFPQztBQUFBLE1BTkRDLFVBTUMsUUFOREEsVUFNQztBQUFBLE1BTERDLEVBS0MsUUFMREEsRUFLQztBQUFBLE1BSkRDLElBSUMsUUFKREEsSUFJQztBQUFBLE1BSERDLFFBR0MsUUFIREEsUUFHQztBQUFBLE1BRkRDLFVBRUMsUUFGREEsVUFFQztBQUFBLE1BRERDLFdBQ0MsUUFEREEsV0FDQzs7QUFBQSxrQkFDcUNDLHNEQUFRLENBQUMsS0FBRCxDQUQ3QztBQUFBLE1BQ01DLFdBRE47QUFBQSxNQUNtQkMsY0FEbkI7O0FBRUQsTUFBTUMsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQjtBQUFBLFdBQU1ELGNBQWMsQ0FBQyxVQUFDRSxLQUFEO0FBQUEsYUFBVyxDQUFDQSxLQUFaO0FBQUEsS0FBRCxDQUFwQjtBQUFBLEdBQWhDOztBQUVBLFNBQ0U7QUFBSyxhQUFT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QSxJQUpGLEVBS0U7QUFBTSxhQUFTLEVBQUVjLGtFQUFNLENBQUNLLGFBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBd0NiLFFBQVEsSUFBSUEsUUFBUSxDQUFDYyxNQUE3RCxDQUxGLENBREYsQ0EvQ0YsQ0FERjtBQTJERDs7R0F6RXVCckIsTzs7S0FBQUEsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLmJhNjU4Y2Q5NDJkODgzYmY2MzgxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIExpa2VGaWxsZWQsXHJcbiAgTWVzc2FnZUZpbGxlZCxcclxuICBTdGFyRmlsbGVkLFxyXG4gIFNoYXJlQWx0T3V0bGluZWQsXHJcbn0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyBQb3BvdmVyLCBUb29sdGlwIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvYWN0aW9ucy5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBSYXRpbmdTbGlkZSBmcm9tICcuLi9mb3Jtcy9yYXRpbmcvUmF0aW5nU2xpZGUnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFjdGlvbnMoe1xyXG4gIGFjdGlvbnMsXHJcbiAgaW5kZXgsXHJcbiAgcG9zdFJhdGUsXHJcbiAgb25SYXRlUG9zdCxcclxuICBpZCxcclxuICB0eXBlLFxyXG4gIGNvbW1lbnRzLFxyXG4gIGxpa2VBY3Rpb24sXHJcbiAgc2hhcmVBY3Rpb25cclxufSkge1xyXG4gIGNvbnN0IFtyYXRlVmlzaWJsZSwgc2V0UmF0ZVZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGhhbmRsZVJhdGVWaXNpYmxlVG9nZ2xlID0gKCkgPT4gc2V0UmF0ZVZpc2libGUoKHN0YXRlKSA9PiAhc3RhdGUpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0X2FjdGlvbnN9PlxyXG4gICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJ0b3BcIiB0aXRsZT17J1JhdGluZyd9PlxyXG4gICAgICAgIDxQb3BvdmVyXHJcbiAgICAgICAgICBjb250ZW50PXsoKSA9PiAoXHJcbiAgICAgICAgICAgIDxSYXRpbmdTbGlkZVxyXG4gICAgICAgICAgICAgIGRhcmtcclxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgIGRlZmF1bHRSYXRlPXtwb3N0UmF0ZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHJhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgIG9uUmF0ZVBvc3QodHlwZSwgaWQsIHJhdGUpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgLy8gdGl0bGU9XCJUaXRsZVwiXHJcbiAgICAgICAgICBwbGFjZW1lbnQ9XCJ0b3BMZWZ0XCJcclxuICAgICAgICAgIHRyaWdnZXI9XCJjbGlja1wiXHJcbiAgICAgICAgICB2aXNpYmxlPXtyYXRlVmlzaWJsZX1cclxuICAgICAgICAgIG9uVmlzaWJsZUNoYW5nZT17aGFuZGxlUmF0ZVZpc2libGVUb2dnbGV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29uX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAnc3RhciddfSAvPlxyXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiA1IH19Pntwb3N0UmF0ZSB8fCAwfTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUG9wb3Zlcj5cclxuICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJ0b3BcIiB0aXRsZT17J0xpa2UnfT5cclxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29uX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ3RodW1icy11cCddfSBvbkNsaWNrPXtsaWtlQWN0aW9ufS8+XHJcbiAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgPFBvcG92ZXJcclxuICAgICAgICAgICAgY29udGVudD17KCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAnZ3JpbiddfSAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAvLyB0aXRsZT1cIlRpdGxlXCJcclxuICAgICAgICAgICAgcGxhY2VtZW50PVwidG9wTGVmdFwiXHJcbiAgICAgICAgICAgIHRyaWdnZXI9XCJjbGlja1wiXHJcbiAgICAgICAgICAgIHZpc2libGU9e3JhdGVWaXNpYmxlfVxyXG4gICAgICAgICAgICBvblZpc2libGVDaGFuZ2U9e2hhbmRsZVJhdGVWaXNpYmxlVG9nZ2xlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cInRvcFwiIHRpdGxlPXsnU2hhcmUnfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb25fY29udGFpbmVyfT5cclxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAnc2hhcmUtc3F1YXJlJ119ICBvbkNsaWNrPXtzaGFyZUFjdGlvbn0vPlxyXG4gICAgICAgICAgey8qIDxTaGFyZUFsdE91dGxpbmVkIC8+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cInRvcFwiIHRpdGxlPXsnQ29tbWVudHMnfT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pY29uX2NvbnRhaW5lcn1cclxuICAgICAgICAgIG9uQ2xpY2s9e2FjdGlvbnN9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdjb21tZW50LWFsdCddfSAvPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29tbWVudF9jb3VudH0+e2NvbW1lbnRzICYmIGNvbW1lbnRzLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvVG9vbHRpcD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==