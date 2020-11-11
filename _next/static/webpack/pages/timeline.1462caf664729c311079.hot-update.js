webpackHotUpdate_N_E("pages/timeline",{

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
      return __jsx("div", {
        className: _styles_actions_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.icon_container,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 15
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
        icon: ['far', 'thumbs-up'],
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 17
        }
      }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
        icon: ['far', 'grin'],
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 17
        }
      }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
        icon: ['far', 'frown'],
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 17
        }
      }));
    } // title="Title"
    ,
    placement: "topLeft",
    trigger: "click",
    visible: rateVisible,
    onVisibleChange: handleRateVisibleToggle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_actions_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.icon_container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 14
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: ['far', 'thumbs-up'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 16
    }
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    placement: "top",
    title: 'Share',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_actions_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.icon_container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: ['far', 'share-square'],
    onClick: shareAction,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    placement: "top",
    title: 'Comments',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_actions_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.icon_container,
    onClick: actions,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: ['far', 'comment-alt'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }), __jsx("span", {
    className: _styles_actions_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.comment_count,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aW1lbGluZS9BY3Rpb25zLmpzIl0sIm5hbWVzIjpbIkFjdGlvbnMiLCJhY3Rpb25zIiwiaW5kZXgiLCJwb3N0UmF0ZSIsIm9uUmF0ZVBvc3QiLCJpZCIsInR5cGUiLCJjb21tZW50cyIsImxpa2VBY3Rpb24iLCJzaGFyZUFjdGlvbiIsInVzZVN0YXRlIiwicmF0ZVZpc2libGUiLCJzZXRSYXRlVmlzaWJsZSIsImhhbmRsZVJhdGVWaXNpYmxlVG9nZ2xlIiwic3RhdGUiLCJzdHlsZXMiLCJwb3N0X2FjdGlvbnMiLCJyYXRlIiwiaWNvbl9jb250YWluZXIiLCJtYXJnaW5MZWZ0IiwiY29tbWVudF9jb3VudCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE9BQVQsT0FVWjtBQUFBOztBQUFBOztBQUFBLE1BVERDLE9BU0MsUUFUREEsT0FTQztBQUFBLE1BUkRDLEtBUUMsUUFSREEsS0FRQztBQUFBLE1BUERDLFFBT0MsUUFQREEsUUFPQztBQUFBLE1BTkRDLFVBTUMsUUFOREEsVUFNQztBQUFBLE1BTERDLEVBS0MsUUFMREEsRUFLQztBQUFBLE1BSkRDLElBSUMsUUFKREEsSUFJQztBQUFBLE1BSERDLFFBR0MsUUFIREEsUUFHQztBQUFBLE1BRkRDLFVBRUMsUUFGREEsVUFFQztBQUFBLE1BRERDLFdBQ0MsUUFEREEsV0FDQzs7QUFBQSxrQkFDcUNDLHNEQUFRLENBQUMsS0FBRCxDQUQ3QztBQUFBLE1BQ01DLFdBRE47QUFBQSxNQUNtQkMsY0FEbkI7O0FBRUQsTUFBTUMsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQjtBQUFBLFdBQU1ELGNBQWMsQ0FBQyxVQUFDRSxLQUFEO0FBQUEsYUFBVyxDQUFDQSxLQUFaO0FBQUEsS0FBRCxDQUFwQjtBQUFBLEdBQWhDOztBQUVBLFNBQ0U7QUFBSyxhQUFT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QXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhFQUFEO0FBQWlCLFFBQUksRUFBRSxDQUFDLEtBQUQsRUFBUSxjQUFSLENBQXZCO0FBQWlELFdBQU8sRUFBRVQsV0FBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0E5Q0YsRUFvREUsTUFBQyw0Q0FBRDtBQUFTLGFBQVMsRUFBQyxLQUFuQjtBQUF5QixTQUFLLEVBQUUsVUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxFQUFFTSxrRUFBTSxDQUFDRyxjQURwQjtBQUVFLFdBQU8sRUFBRWpCLE9BRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFLE1BQUMsOEVBQUQ7QUFBaUIsUUFBSSxFQUFFLENBQUMsS0FBRCxFQUFRLGFBQVIsQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLEVBS0U7QUFBTSxhQUFTLEVBQUVjLGtFQUFNLENBQUNLLGFBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBd0NiLFFBQVEsSUFBSUEsUUFBUSxDQUFDYyxNQUE3RCxDQUxGLENBREYsQ0FwREYsQ0FERjtBQWdFRDs7R0E5RXVCckIsTzs7S0FBQUEsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90aW1lbGluZS4xNDYyY2FmNjY0NzI5YzMxMTA3OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBMaWtlRmlsbGVkLFxyXG4gIE1lc3NhZ2VGaWxsZWQsXHJcbiAgU3RhckZpbGxlZCxcclxuICBTaGFyZUFsdE91dGxpbmVkLFxyXG59IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgUG9wb3ZlciwgVG9vbHRpcCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL2FjdGlvbnMubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgUmF0aW5nU2xpZGUgZnJvbSAnLi4vZm9ybXMvcmF0aW5nL1JhdGluZ1NsaWRlJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBY3Rpb25zKHtcclxuICBhY3Rpb25zLFxyXG4gIGluZGV4LFxyXG4gIHBvc3RSYXRlLFxyXG4gIG9uUmF0ZVBvc3QsXHJcbiAgaWQsXHJcbiAgdHlwZSxcclxuICBjb21tZW50cyxcclxuICBsaWtlQWN0aW9uLFxyXG4gIHNoYXJlQWN0aW9uXHJcbn0pIHtcclxuICBjb25zdCBbcmF0ZVZpc2libGUsIHNldFJhdGVWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBoYW5kbGVSYXRlVmlzaWJsZVRvZ2dsZSA9ICgpID0+IHNldFJhdGVWaXNpYmxlKChzdGF0ZSkgPT4gIXN0YXRlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdF9hY3Rpb25zfT5cclxuICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwidG9wXCIgdGl0bGU9eydSYXRpbmcnfT5cclxuICAgICAgICA8UG9wb3ZlclxyXG4gICAgICAgICAgY29udGVudD17KCkgPT4gKFxyXG4gICAgICAgICAgICA8UmF0aW5nU2xpZGVcclxuICAgICAgICAgICAgICBkYXJrXHJcbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICBkZWZhdWx0UmF0ZT17cG9zdFJhdGV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhyYXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvblJhdGVQb3N0KHR5cGUsIGlkLCByYXRlKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIC8vIHRpdGxlPVwiVGl0bGVcIlxyXG4gICAgICAgICAgcGxhY2VtZW50PVwidG9wTGVmdFwiXHJcbiAgICAgICAgICB0cmlnZ2VyPVwiY2xpY2tcIlxyXG4gICAgICAgICAgdmlzaWJsZT17cmF0ZVZpc2libGV9XHJcbiAgICAgICAgICBvblZpc2libGVDaGFuZ2U9e2hhbmRsZVJhdGVWaXNpYmxlVG9nZ2xlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbl9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ3N0YXInXX0gLz5cclxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luTGVmdDogNSB9fT57cG9zdFJhdGUgfHwgMH08L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1BvcG92ZXI+XHJcbiAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwidG9wXCIgdGl0bGU9eydMaWtlJ30+XHJcbiAgICAgICBcclxuICAgICAgICAgIDxQb3BvdmVyXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9eygpID0+IChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb25fY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAndGh1bWJzLXVwJ119IC8+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ2dyaW4nXX0gLz5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAnZnJvd24nXX0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgLy8gdGl0bGU9XCJUaXRsZVwiXHJcbiAgICAgICAgICAgIHBsYWNlbWVudD1cInRvcExlZnRcIlxyXG4gICAgICAgICAgICB0cmlnZ2VyPVwiY2xpY2tcIlxyXG4gICAgICAgICAgICB2aXNpYmxlPXtyYXRlVmlzaWJsZX1cclxuICAgICAgICAgICAgb25WaXNpYmxlQ2hhbmdlPXtoYW5kbGVSYXRlVmlzaWJsZVRvZ2dsZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbl9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ3RodW1icy11cCddfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvUG9wb3Zlcj5cclxuICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJ0b3BcIiB0aXRsZT17J1NoYXJlJ30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29uX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ3NoYXJlLXNxdWFyZSddfSAgb25DbGljaz17c2hhcmVBY3Rpb259Lz5cclxuICAgICAgICAgIHsvKiA8U2hhcmVBbHRPdXRsaW5lZCAvPiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJ0b3BcIiB0aXRsZT17J0NvbW1lbnRzJ30+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbl9jb250YWluZXJ9XHJcbiAgICAgICAgICBvbkNsaWNrPXthY3Rpb25zfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAnY29tbWVudC1hbHQnXX0gLz5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnRfY291bnR9Pntjb21tZW50cyAmJiBjb21tZW50cy5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1Rvb2x0aXA+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=