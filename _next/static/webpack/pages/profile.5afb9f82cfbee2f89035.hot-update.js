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
      return __jsx("div", {
        className: _styles_actions_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.reaction,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 15
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
        icon: ['far', 'thumbs-up'],
        size: "3x",
        style: {
          marginRight: 15,
          color: 'red'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 17
        }
      }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
        icon: ['far', 'heart'],
        size: "3x",
        style: {
          marginRight: 15,
          color: 'red'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 17
        }
      }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
        icon: ['far', 'grin'],
        size: "3x",
        style: {
          marginRight: 15,
          color: 'red'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 17
        }
      }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
        icon: ['far', 'laugh'],
        size: "3x",
        style: {
          marginRight: 15,
          color: 'red'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 17
        }
      }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
        icon: ['far', 'frown'],
        size: "3x",
        style: {
          marginRight: 15,
          color: 'red'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 17
        }
      }));
    } // title="Title"
    ,
    placement: "topLeft",
    trigger: "click" // visible={rateVisible}
    // onVisibleChange={handleRateVisibleToggle}
    ,
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
      lineNumber: 71,
      columnNumber: 14
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: ['far', 'thumbs-up'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 16
    }
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    placement: "top",
    title: 'Share',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_actions_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.icon_container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: ['far', 'share-square'],
    onClick: shareAction,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    placement: "top",
    title: 'Comments',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_actions_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.icon_container,
    onClick: actions,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: ['far', 'comment-alt'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }), __jsx("span", {
    className: _styles_actions_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.comment_count,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aW1lbGluZS9BY3Rpb25zLmpzIl0sIm5hbWVzIjpbIkFjdGlvbnMiLCJhY3Rpb25zIiwiaW5kZXgiLCJwb3N0UmF0ZSIsIm9uUmF0ZVBvc3QiLCJpZCIsInR5cGUiLCJjb21tZW50cyIsImxpa2VBY3Rpb24iLCJzaGFyZUFjdGlvbiIsInVzZVN0YXRlIiwicmF0ZVZpc2libGUiLCJzZXRSYXRlVmlzaWJsZSIsImhhbmRsZVJhdGVWaXNpYmxlVG9nZ2xlIiwic3RhdGUiLCJzdHlsZXMiLCJwb3N0X2FjdGlvbnMiLCJyYXRlIiwiaWNvbl9jb250YWluZXIiLCJtYXJnaW5MZWZ0IiwicmVhY3Rpb24iLCJtYXJnaW5SaWdodCIsImNvbG9yIiwiY29tbWVudF9jb3VudCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE9BQVQsT0FVWjtBQUFBOztBQUFBOztBQUFBLE1BVERDLE9BU0MsUUFUREEsT0FTQztBQUFBLE1BUkRDLEtBUUMsUUFSREEsS0FRQztBQUFBLE1BUERDLFFBT0MsUUFQREEsUUFPQztBQUFBLE1BTkRDLFVBTUMsUUFOREEsVUFNQztBQUFBLE1BTERDLEVBS0MsUUFMREEsRUFLQztBQUFBLE1BSkRDLElBSUMsUUFKREEsSUFJQztBQUFBLE1BSERDLFFBR0MsUUFIREEsUUFHQztBQUFBLE1BRkRDLFVBRUMsUUFGREEsVUFFQztBQUFBLE1BRERDLFdBQ0MsUUFEREEsV0FDQzs7QUFBQSxrQkFDcUNDLHNEQUFRLENBQUMsS0FBRCxDQUQ3QztBQUFBLE1BQ01DLFdBRE47QUFBQSxNQUNtQkMsY0FEbkI7O0FBRUQsTUFBTUMsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQjtBQUFBLFdBQU1ELGNBQWMsQ0FBQyxVQUFDRSxLQUFEO0FBQUEsYUFBVyxDQUFDQSxLQUFaO0FBQUEsS0FBRCxDQUFwQjtBQUFBLEdBQWhDOztBQUVBLFNBQ0U7QUFBSyxhQUFTLEVBQUVDLGtFQUFNLENBQUNDLFlBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDRDQUFEO0FBQVMsYUFBUyxFQUFDLEtBQW5CO0FBQXlCLFNBQUssRUFBRSxRQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0Q0FBRDtBQUNFLFdBQU8sRUFBRTtBQUFBLGFBQ1AsTUFBQyxpRUFBRDtBQUNFLFlBQUksTUFETjtBQUVFLFlBQUksRUFBQyxPQUZQO0FBR0UsbUJBQVcsRUFBRWIsUUFIZjtBQUlFLGdCQUFRLEVBQUUsa0JBQUNjLElBQUQsRUFBVTtBQUNsQmIsb0JBQVUsQ0FBQ0UsSUFBRCxFQUFPRCxFQUFQLEVBQVdZLElBQVgsQ0FBVjtBQUNELFNBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURPO0FBQUEsS0FEWCxDQVdFO0FBWEY7QUFZRSxhQUFTLEVBQUMsU0FaWjtBQWFFLFdBQU8sRUFBQyxPQWJWO0FBY0UsV0FBTyxFQUFFTixXQWRYO0FBZUUsbUJBQWUsRUFBRUUsdUJBZm5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FpQkU7QUFBSyxhQUFTLEVBQUVFLGtFQUFNLENBQUNHLGNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhFQUFEO0FBQWlCLFFBQUksRUFBRSxDQUFDLEtBQUQsRUFBUSxNQUFSLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQU0sU0FBSyxFQUFFO0FBQUVDLGdCQUFVLEVBQUU7QUFBZCxLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBaUNoQixRQUFRLElBQUksQ0FBN0MsQ0FGRixDQWpCRixDQURGLENBREYsRUF5QkUsTUFBQyw0Q0FBRDtBQUFTLGFBQVMsRUFBQyxLQUFuQjtBQUF5QixTQUFLLEVBQUUsTUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJLE1BQUMsNENBQUQ7QUFDRSxXQUFPLEVBQUU7QUFBQSxhQUNQO0FBQUssaUJBQVMsRUFBRVksa0VBQU0sQ0FBQ0ssUUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsOEVBQUQ7QUFBaUIsWUFBSSxFQUFFLENBQUMsS0FBRCxFQUFRLFdBQVIsQ0FBdkI7QUFBNkMsWUFBSSxFQUFDLElBQWxEO0FBQXdELGFBQUssRUFBRTtBQUFDQyxxQkFBVyxFQUFFLEVBQWQ7QUFBa0JDLGVBQUssRUFBQztBQUF4QixTQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsRUFFRSxNQUFDLDhFQUFEO0FBQWlCLFlBQUksRUFBRSxDQUFDLEtBQUQsRUFBUSxPQUFSLENBQXZCO0FBQTBDLFlBQUksRUFBQyxJQUEvQztBQUFtRCxhQUFLLEVBQUU7QUFBQ0QscUJBQVcsRUFBRSxFQUFkO0FBQWtCQyxlQUFLLEVBQUM7QUFBeEIsU0FBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZGLEVBR0UsTUFBQyw4RUFBRDtBQUFpQixZQUFJLEVBQUUsQ0FBQyxLQUFELEVBQVEsTUFBUixDQUF2QjtBQUF5QyxZQUFJLEVBQUMsSUFBOUM7QUFBbUQsYUFBSyxFQUFFO0FBQUNELHFCQUFXLEVBQUUsRUFBZDtBQUFrQkMsZUFBSyxFQUFDO0FBQXhCLFNBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFIRixFQUlFLE1BQUMsOEVBQUQ7QUFBaUIsWUFBSSxFQUFFLENBQUMsS0FBRCxFQUFRLE9BQVIsQ0FBdkI7QUFBMEMsWUFBSSxFQUFDLElBQS9DO0FBQW9ELGFBQUssRUFBRTtBQUFDRCxxQkFBVyxFQUFFLEVBQWQ7QUFBa0JDLGVBQUssRUFBQztBQUF4QixTQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBSkYsRUFLRSxNQUFDLDhFQUFEO0FBQWlCLFlBQUksRUFBRSxDQUFDLEtBQUQsRUFBUSxPQUFSLENBQXZCO0FBQTBDLFlBQUksRUFBQyxJQUEvQztBQUFvRCxhQUFLLEVBQUU7QUFBQ0QscUJBQVcsRUFBRSxFQUFkO0FBQWtCQyxlQUFLLEVBQUM7QUFBeEIsU0FBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUxGLENBRE87QUFBQSxLQURYLENBVUU7QUFWRjtBQVdFLGFBQVMsRUFBQyxTQVhaO0FBWUUsV0FBTyxFQUFDLE9BWlYsQ0FhRTtBQUNBO0FBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWdCRztBQUFLLGFBQVMsRUFBRVAsa0VBQU0sQ0FBQ0csY0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOEVBQUQ7QUFBaUIsUUFBSSxFQUFFLENBQUMsS0FBRCxFQUFRLFdBQVIsQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBaEJILENBRkosQ0F6QkYsRUFnREUsTUFBQyw0Q0FBRDtBQUFTLGFBQVMsRUFBQyxLQUFuQjtBQUF5QixTQUFLLEVBQUUsT0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFSCxrRUFBTSxDQUFDRyxjQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4RUFBRDtBQUFpQixRQUFJLEVBQUUsQ0FBQyxLQUFELEVBQVEsY0FBUixDQUF2QjtBQUFpRCxXQUFPLEVBQUVULFdBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBaERGLEVBc0RFLE1BQUMsNENBQUQ7QUFBUyxhQUFTLEVBQUMsS0FBbkI7QUFBeUIsU0FBSyxFQUFFLFVBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGFBQVMsRUFBRU0sa0VBQU0sQ0FBQ0csY0FEcEI7QUFFRSxXQUFPLEVBQUVqQixPQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRSxNQUFDLDhFQUFEO0FBQWlCLFFBQUksRUFBRSxDQUFDLEtBQUQsRUFBUSxhQUFSLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQUtFO0FBQU0sYUFBUyxFQUFFYyxrRUFBTSxDQUFDUSxhQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXdDaEIsUUFBUSxJQUFJQSxRQUFRLENBQUNpQixNQUE3RCxDQUxGLENBREYsQ0F0REYsQ0FERjtBQWtFRDs7R0FoRnVCeEIsTzs7S0FBQUEsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLjVhZmI5ZjgyY2ZiZWUyZjg5MDM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIExpa2VGaWxsZWQsXHJcbiAgTWVzc2FnZUZpbGxlZCxcclxuICBTdGFyRmlsbGVkLFxyXG4gIFNoYXJlQWx0T3V0bGluZWQsXHJcbn0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyBQb3BvdmVyLCBUb29sdGlwIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvYWN0aW9ucy5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBSYXRpbmdTbGlkZSBmcm9tICcuLi9mb3Jtcy9yYXRpbmcvUmF0aW5nU2xpZGUnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFjdGlvbnMoe1xyXG4gIGFjdGlvbnMsXHJcbiAgaW5kZXgsXHJcbiAgcG9zdFJhdGUsXHJcbiAgb25SYXRlUG9zdCxcclxuICBpZCxcclxuICB0eXBlLFxyXG4gIGNvbW1lbnRzLFxyXG4gIGxpa2VBY3Rpb24sXHJcbiAgc2hhcmVBY3Rpb25cclxufSkge1xyXG4gIGNvbnN0IFtyYXRlVmlzaWJsZSwgc2V0UmF0ZVZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGhhbmRsZVJhdGVWaXNpYmxlVG9nZ2xlID0gKCkgPT4gc2V0UmF0ZVZpc2libGUoKHN0YXRlKSA9PiAhc3RhdGUpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0X2FjdGlvbnN9PlxyXG4gICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJ0b3BcIiB0aXRsZT17J1JhdGluZyd9PlxyXG4gICAgICAgIDxQb3BvdmVyXHJcbiAgICAgICAgICBjb250ZW50PXsoKSA9PiAoXHJcbiAgICAgICAgICAgIDxSYXRpbmdTbGlkZVxyXG4gICAgICAgICAgICAgIGRhcmtcclxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgIGRlZmF1bHRSYXRlPXtwb3N0UmF0ZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHJhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgIG9uUmF0ZVBvc3QodHlwZSwgaWQsIHJhdGUpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgLy8gdGl0bGU9XCJUaXRsZVwiXHJcbiAgICAgICAgICBwbGFjZW1lbnQ9XCJ0b3BMZWZ0XCJcclxuICAgICAgICAgIHRyaWdnZXI9XCJjbGlja1wiXHJcbiAgICAgICAgICB2aXNpYmxlPXtyYXRlVmlzaWJsZX1cclxuICAgICAgICAgIG9uVmlzaWJsZUNoYW5nZT17aGFuZGxlUmF0ZVZpc2libGVUb2dnbGV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29uX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAnc3RhciddfSAvPlxyXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiA1IH19Pntwb3N0UmF0ZSB8fCAwfTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUG9wb3Zlcj5cclxuICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJ0b3BcIiB0aXRsZT17J0xpa2UnfT5cclxuICAgICAgIFxyXG4gICAgICAgICAgPFBvcG92ZXJcclxuICAgICAgICAgICAgY29udGVudD17KCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVhY3Rpb259PlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICd0aHVtYnMtdXAnXX0gc2l6ZT1cIjN4XCIgIHN0eWxlPXt7bWFyZ2luUmlnaHQ6IDE1LCBjb2xvcjoncmVkJ319Lz5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAnaGVhcnQnXX0gIHNpemU9XCIzeFwic3R5bGU9e3ttYXJnaW5SaWdodDogMTUgLGNvbG9yOidyZWQnfX0vPlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdncmluJ119ICBzaXplPVwiM3hcIiBzdHlsZT17e21hcmdpblJpZ2h0OiAxNSwgY29sb3I6J3JlZCd9fS8+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ2xhdWdoJ119ICBzaXplPVwiM3hcIiBzdHlsZT17e21hcmdpblJpZ2h0OiAxNSwgY29sb3I6J3JlZCd9fS8+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ2Zyb3duJ119ICBzaXplPVwiM3hcIiBzdHlsZT17e21hcmdpblJpZ2h0OiAxNSwgY29sb3I6J3JlZCd9fS8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIC8vIHRpdGxlPVwiVGl0bGVcIlxyXG4gICAgICAgICAgICBwbGFjZW1lbnQ9XCJ0b3BMZWZ0XCJcclxuICAgICAgICAgICAgdHJpZ2dlcj1cImNsaWNrXCJcclxuICAgICAgICAgICAgLy8gdmlzaWJsZT17cmF0ZVZpc2libGV9XHJcbiAgICAgICAgICAgIC8vIG9uVmlzaWJsZUNoYW5nZT17aGFuZGxlUmF0ZVZpc2libGVUb2dnbGV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb25fY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICd0aHVtYnMtdXAnXX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L1BvcG92ZXI+XHJcbiAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwidG9wXCIgdGl0bGU9eydTaGFyZSd9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbl9jb250YWluZXJ9PlxyXG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdzaGFyZS1zcXVhcmUnXX0gIG9uQ2xpY2s9e3NoYXJlQWN0aW9ufS8+XHJcbiAgICAgICAgICB7LyogPFNoYXJlQWx0T3V0bGluZWQgLz4gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwidG9wXCIgdGl0bGU9eydDb21tZW50cyd9PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmljb25fY29udGFpbmVyfVxyXG4gICAgICAgICAgb25DbGljaz17YWN0aW9uc31cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ2NvbW1lbnQtYWx0J119IC8+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50X2NvdW50fT57Y29tbWVudHMgJiYgY29tbWVudHMubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Ub29sdGlwPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9