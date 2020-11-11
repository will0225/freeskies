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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('thumbs-up'),
      like = _useState2[0],
      setLike = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      likeVisible = _useState3[0],
      setLikeVisible = _useState3[1];

  var handleLikeVisibleToggle = function handleLikeVisibleToggle() {
    return setLikeVisible(function (state) {
      return !state;
    });
  };

  return __jsx("div", {
    className: _styles_actions_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.post_actions,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    placement: "top",
    title: 'Rating',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
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
          lineNumber: 34,
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
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_actions_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.icon_container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: ['far', 'star'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }), __jsx("span", {
    style: {
      marginLeft: 5
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, postRate || 0)))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    placement: "top",
    title: like,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Popover"], {
    content: function content() {
      return __jsx("div", {
        className: _styles_actions_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.reaction,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 15
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
        icon: ['far', 'thumbs-up'],
        size: "3x",
        style: {
          marginRight: 15,
          cursor: 'pointer'
        },
        onClick: function onClick() {
          handleLikeVisibleToggle();
          setLike('thumbs-up');
          likeAction('LIKE');
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 17
        }
      }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
        icon: ['far', 'heart'],
        size: "3x",
        style: {
          marginRight: 15,
          cursor: 'pointer'
        },
        onClick: function onClick() {
          handleLikeVisibleToggle();
          setLike('heart');
          likeAction('HEART');
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 17
        }
      }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
        icon: ['far', 'grin'],
        size: "3x",
        style: {
          marginRight: 15,
          cursor: 'pointer'
        },
        onClick: function onClick() {
          handleLikeVisibleToggle();
          setLike('grin');
          likeAction('HAHA');
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 17
        }
      }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
        icon: ['far', 'laugh'],
        size: "3x",
        style: {
          marginRight: 15,
          cursor: 'pointer'
        },
        onClick: function onClick() {
          handleLikeVisibleToggle();
          likeAction('WOW');
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 17
        }
      }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
        icon: ['far', 'frown'],
        size: "3x",
        style: {
          cursor: 'pointer'
        },
        onClick: function onClick() {
          handleLikeVisibleToggle();
          likeAction('SAD');
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 17
        }
      }));
    } // title="Title"
    ,
    placement: "topLeft",
    trigger: "click",
    visible: likeVisible,
    onVisibleChange: handleLikeVisibleToggle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_actions_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.icon_container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 14
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: ['far', like],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 16
    }
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    placement: "top",
    title: 'Share',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_actions_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.icon_container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: ['far', 'share-square'],
    onClick: shareAction,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    placement: "top",
    title: 'Comments',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_actions_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.icon_container,
    onClick: actions,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: ['far', 'comment-alt'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 11
    }
  }), __jsx("span", {
    className: _styles_actions_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.comment_count,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  }, comments && comments.length))));
}

_s(Actions, "MPjaBdO+6p1bWioq8zqMajloZb8=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aW1lbGluZS9BY3Rpb25zLmpzIl0sIm5hbWVzIjpbIkFjdGlvbnMiLCJhY3Rpb25zIiwiaW5kZXgiLCJwb3N0UmF0ZSIsIm9uUmF0ZVBvc3QiLCJpZCIsInR5cGUiLCJjb21tZW50cyIsImxpa2VBY3Rpb24iLCJzaGFyZUFjdGlvbiIsInVzZVN0YXRlIiwicmF0ZVZpc2libGUiLCJzZXRSYXRlVmlzaWJsZSIsImhhbmRsZVJhdGVWaXNpYmxlVG9nZ2xlIiwic3RhdGUiLCJsaWtlIiwic2V0TGlrZSIsImxpa2VWaXNpYmxlIiwic2V0TGlrZVZpc2libGUiLCJoYW5kbGVMaWtlVmlzaWJsZVRvZ2dsZSIsInN0eWxlcyIsInBvc3RfYWN0aW9ucyIsInJhdGUiLCJpY29uX2NvbnRhaW5lciIsIm1hcmdpbkxlZnQiLCJyZWFjdGlvbiIsIm1hcmdpblJpZ2h0IiwiY3Vyc29yIiwiY29tbWVudF9jb3VudCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE9BQVQsT0FVWjtBQUFBOztBQUFBOztBQUFBLE1BVERDLE9BU0MsUUFUREEsT0FTQztBQUFBLE1BUkRDLEtBUUMsUUFSREEsS0FRQztBQUFBLE1BUERDLFFBT0MsUUFQREEsUUFPQztBQUFBLE1BTkRDLFVBTUMsUUFOREEsVUFNQztBQUFBLE1BTERDLEVBS0MsUUFMREEsRUFLQztBQUFBLE1BSkRDLElBSUMsUUFKREEsSUFJQztBQUFBLE1BSERDLFFBR0MsUUFIREEsUUFHQztBQUFBLE1BRkRDLFVBRUMsUUFGREEsVUFFQztBQUFBLE1BRERDLFdBQ0MsUUFEREEsV0FDQzs7QUFBQSxrQkFDcUNDLHNEQUFRLENBQUMsS0FBRCxDQUQ3QztBQUFBLE1BQ01DLFdBRE47QUFBQSxNQUNtQkMsY0FEbkI7O0FBRUQsTUFBTUMsdUJBQXVCLEdBQUcsU0FBMUJB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QUFBQTtBQUFBO0FBQUEsS0FJRSxNQUFDLDhFQUFEO0FBQWlCLFFBQUksRUFBRSxDQUFDLEtBQUQsRUFBUSxhQUFSLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQUtFO0FBQU0sYUFBUyxFQUFFbUIsa0VBQU0sQ0FBQ1EsYUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF3Q3JCLFFBQVEsSUFBSUEsUUFBUSxDQUFDc0IsTUFBN0QsQ0FMRixDQURGLENBbEZGLENBREY7QUE4RkQ7O0dBOUd1QjdCLE87O0tBQUFBLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGltZWxpbmUuYWI2M2IyZjAzYjk4ZTdhYzdlNzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgTGlrZUZpbGxlZCxcclxuICBNZXNzYWdlRmlsbGVkLFxyXG4gIFN0YXJGaWxsZWQsXHJcbiAgU2hhcmVBbHRPdXRsaW5lZCxcclxufSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IFBvcG92ZXIsIFRvb2x0aXAgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy9hY3Rpb25zLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IFJhdGluZ1NsaWRlIGZyb20gJy4uL2Zvcm1zL3JhdGluZy9SYXRpbmdTbGlkZSc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWN0aW9ucyh7XHJcbiAgYWN0aW9ucyxcclxuICBpbmRleCxcclxuICBwb3N0UmF0ZSxcclxuICBvblJhdGVQb3N0LFxyXG4gIGlkLFxyXG4gIHR5cGUsXHJcbiAgY29tbWVudHMsXHJcbiAgbGlrZUFjdGlvbixcclxuICBzaGFyZUFjdGlvblxyXG59KSB7XHJcbiAgY29uc3QgW3JhdGVWaXNpYmxlLCBzZXRSYXRlVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaGFuZGxlUmF0ZVZpc2libGVUb2dnbGUgPSAoKSA9PiBzZXRSYXRlVmlzaWJsZSgoc3RhdGUpID0+ICFzdGF0ZSk7XHJcbiAgY29uc3QgW2xpa2UsIHNldExpa2VdID0gdXNlU3RhdGUoJ3RodW1icy11cCcpO1xyXG4gIGNvbnN0IFtsaWtlVmlzaWJsZSwgc2V0TGlrZVZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGhhbmRsZUxpa2VWaXNpYmxlVG9nZ2xlID0gKCkgPT4gc2V0TGlrZVZpc2libGUoKHN0YXRlKSA9PiAhc3RhdGUpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RfYWN0aW9uc30+XHJcbiAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cInRvcFwiIHRpdGxlPXsnUmF0aW5nJ30+XHJcbiAgICAgICAgPFBvcG92ZXJcclxuICAgICAgICAgIGNvbnRlbnQ9eygpID0+IChcclxuICAgICAgICAgICAgPFJhdGluZ1NsaWRlXHJcbiAgICAgICAgICAgICAgZGFya1xyXG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgZGVmYXVsdFJhdGU9e3Bvc3RSYXRlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsocmF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb25SYXRlUG9zdCh0eXBlLCBpZCwgcmF0ZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICAvLyB0aXRsZT1cIlRpdGxlXCJcclxuICAgICAgICAgIHBsYWNlbWVudD1cInRvcExlZnRcIlxyXG4gICAgICAgICAgdHJpZ2dlcj1cImNsaWNrXCJcclxuICAgICAgICAgIHZpc2libGU9e3JhdGVWaXNpYmxlfVxyXG4gICAgICAgICAgb25WaXNpYmxlQ2hhbmdlPXtoYW5kbGVSYXRlVmlzaWJsZVRvZ2dsZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb25fY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdzdGFyJ119IC8+XHJcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDUgfX0+e3Bvc3RSYXRlIHx8IDB9PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cInRvcFwiIHRpdGxlPXtsaWtlfT5cclxuICAgICAgIFxyXG4gICAgICAgICAgPFBvcG92ZXJcclxuICAgICAgICAgICAgY29udGVudD17KCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVhY3Rpb259PlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICd0aHVtYnMtdXAnXX0gc2l6ZT1cIjN4XCIgIHN0eWxlPXt7bWFyZ2luUmlnaHQ6IDE1LCAgY3Vyc29yOiAncG9pbnRlcid9fSBcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUxpa2VWaXNpYmxlVG9nZ2xlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TGlrZSgndGh1bWJzLXVwJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlrZUFjdGlvbignTElLRScpXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdoZWFydCddfSAgc2l6ZT1cIjN4XCJzdHlsZT17e21hcmdpblJpZ2h0OiAxNSAsIGN1cnNvcjogJ3BvaW50ZXInfX1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUxpa2VWaXNpYmxlVG9nZ2xlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TGlrZSgnaGVhcnQnKTtcclxuICAgICAgICAgICAgICAgICAgICBsaWtlQWN0aW9uKCdIRUFSVCcpXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdncmluJ119ICBzaXplPVwiM3hcIiBzdHlsZT17e21hcmdpblJpZ2h0OiAxNSwgIGN1cnNvcjogJ3BvaW50ZXInfX1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUxpa2VWaXNpYmxlVG9nZ2xlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TGlrZSgnZ3JpbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpa2VBY3Rpb24oJ0hBSEEnKVxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAnbGF1Z2gnXX0gIHNpemU9XCIzeFwiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6IDE1LCAgY3Vyc29yOiAncG9pbnRlcid9fVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlTGlrZVZpc2libGVUb2dnbGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBsaWtlQWN0aW9uKCdXT1cnKVxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAnZnJvd24nXX0gIHNpemU9XCIzeFwiIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInfX1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUxpa2VWaXNpYmxlVG9nZ2xlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlrZUFjdGlvbignU0FEJylcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIC8vIHRpdGxlPVwiVGl0bGVcIlxyXG4gICAgICAgICAgICBwbGFjZW1lbnQ9XCJ0b3BMZWZ0XCJcclxuICAgICAgICAgICAgdHJpZ2dlcj1cImNsaWNrXCJcclxuICAgICAgICAgICAgdmlzaWJsZT17bGlrZVZpc2libGV9XHJcbiAgICAgICAgICAgIG9uVmlzaWJsZUNoYW5nZT17aGFuZGxlTGlrZVZpc2libGVUb2dnbGV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb25fY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsIGxpa2VdfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvUG9wb3Zlcj5cclxuICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJ0b3BcIiB0aXRsZT17J1NoYXJlJ30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29uX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ3NoYXJlLXNxdWFyZSddfSAgb25DbGljaz17c2hhcmVBY3Rpb259Lz5cclxuICAgICAgICAgIHsvKiA8U2hhcmVBbHRPdXRsaW5lZCAvPiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJ0b3BcIiB0aXRsZT17J0NvbW1lbnRzJ30+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbl9jb250YWluZXJ9XHJcbiAgICAgICAgICBvbkNsaWNrPXthY3Rpb25zfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAnY29tbWVudC1hbHQnXX0gLz5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnRfY291bnR9Pntjb21tZW50cyAmJiBjb21tZW50cy5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1Rvb2x0aXA+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=