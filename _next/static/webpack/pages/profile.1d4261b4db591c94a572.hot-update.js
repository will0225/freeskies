webpackHotUpdate_N_E("pages/profile",{

/***/ "./containers/Profile/AddMarketItem.js":
/*!*********************************************!*\
  !*** ./containers/Profile/AddMarketItem.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/profile.module.scss */ "./containers/Profile/styles/profile.module.scss");
/* harmony import */ var _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _configs_API__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../configs/API */ "./configs/API.js");
/* harmony import */ var components_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/forms */ "./components/forms/index.js");
var _jsxFileName = "E:\\freeskies_fe_code\\containers\\Profile\\AddMarketItem.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const {
  TextArea
} = antd__WEBPACK_IMPORTED_MODULE_4__["Input"];

function AddMarketItem({
  auth,
  onUpdate,
  loading
}) {
  _s();

  const {
    0: text,
    1: setText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: assets,
    1: setAssets
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);

  const handleChangeText = e => {
    console.log(text);
    setText(e.target.value);
  };

  const handleChangeTabActive = activeKey => {
    setActiveType(activeKey);
  };

  const handleSubmit = async () => {
    try {
      let dataForRequest;
      const formData = new FormData();

      for (var i = 0; i < profilePhoto.length; i++) {
        if (profilePhoto[i].type.split('/')[0] === 'image') {
          formData.append('profilePhoto', profilePhoto[i]);
        } else {
          formData.append('videos', profilePhoto[i]);
        }
      }

      for (var i = 0; i < backgroundPhoto.length; i++) {
        if (backgroundPhoto[i].type.split('/')[0] === 'image') {
          formData.append('profileBackgroundImage', backgroundPhoto[i]);
        } else {
          formData.append('videos', backgroundPhoto[i]);
        }
      }

      if (text.length !== 0) {
        formData.append('lastName', text);
      }

      dataForRequest = formData;
      onUpdate(dataForRequest);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangePhotoFile = files => {
    setAssets(files);
  };

  return __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.addMarketContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }, __jsx("p", {
    style: {
      color: 'white'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }), __jsx(TextArea, {
    value: text,
    onChange: handleChangeText,
    placeholder: "Write a message",
    autoSize: {
      minRows: 2,
      maxRows: 5
    },
    style: {
      borderRadius: 90,
      marginBottom: 20,
      paddingTop: 13,
      paddingLeft: 23,
      color: 'white'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }), __jsx("p", {
    style: {
      color: 'white'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, "Market Item Photo or Videos"), __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.file_place,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, __jsx(components_forms__WEBPACK_IMPORTED_MODULE_6__["FileDrop"], {
    files: assets,
    onChange: handleChangePhotoFile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.actions_container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "primary",
    loading: loading,
    onClick: handleSubmit,
    style: {
      width: '100%',
      fontSize: '20px',
      height: '50px',
      borderRadius: '6px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, "Add Market Item")));
}

_s(AddMarketItem, "Q7ZvX84T/cvzwAThfEMm0AQXWE8=");

_c = AddMarketItem;
/* harmony default export */ __webpack_exports__["default"] = (AddMarketItem);

var _c;

$RefreshReg$(_c, "AddMarketItem");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9Qcm9maWxlL0FkZE1hcmtldEl0ZW0uanMiXSwibmFtZXMiOlsiVGV4dEFyZWEiLCJJbnB1dCIsIkFkZE1hcmtldEl0ZW0iLCJhdXRoIiwib25VcGRhdGUiLCJsb2FkaW5nIiwidGV4dCIsInNldFRleHQiLCJ1c2VTdGF0ZSIsImFzc2V0cyIsInNldEFzc2V0cyIsImhhbmRsZUNoYW5nZVRleHQiLCJlIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ2hhbmdlVGFiQWN0aXZlIiwiYWN0aXZlS2V5Iiwic2V0QWN0aXZlVHlwZSIsImhhbmRsZVN1Ym1pdCIsImRhdGFGb3JSZXF1ZXN0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImkiLCJwcm9maWxlUGhvdG8iLCJsZW5ndGgiLCJ0eXBlIiwic3BsaXQiLCJhcHBlbmQiLCJiYWNrZ3JvdW5kUGhvdG8iLCJlcnJvciIsImhhbmRsZUNoYW5nZVBob3RvRmlsZSIsImZpbGVzIiwic3R5bGVzIiwiYWRkTWFya2V0Q29udGFpbmVyIiwiY29sb3IiLCJtaW5Sb3dzIiwibWF4Um93cyIsImJvcmRlclJhZGl1cyIsIm1hcmdpbkJvdHRvbSIsInBhZGRpbmdUb3AiLCJwYWRkaW5nTGVmdCIsImZpbGVfcGxhY2UiLCJhY3Rpb25zX2NvbnRhaW5lciIsIndpZHRoIiwiZm9udFNpemUiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNO0FBQUVBO0FBQUYsSUFBZUMsMENBQXJCOztBQUVBLFNBQVNDLGFBQVQsQ0FBdUI7QUFBRUMsTUFBRjtBQUFRQyxVQUFSO0FBQWtCQztBQUFsQixDQUF2QixFQUFvRDtBQUFBOztBQUVsRCxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLHNEQUFRLENBQUMsRUFBRCxD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RTtBQUF1RU4sV0FBSyxFQUFFO0FBQTlFLEtBTFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBU0U7QUFBRyxTQUFLLEVBQUU7QUFBRUEsV0FBSyxFQUFFO0FBQVQsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQVRGLEVBVUU7QUFBSyxhQUFTLEVBQUVGLGtFQUFNLENBQUNTLFVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlEQUFEO0FBQVUsU0FBSyxFQUFFbEMsTUFBakI7QUFBeUIsWUFBUSxFQUFFdUIscUJBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVZGLEVBY0U7QUFBSyxhQUFTLEVBQUVFLGtFQUFNLENBQUNVLGlCQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyQ0FBRDtBQUFRLFFBQUksRUFBQyxTQUFiO0FBQXVCLFdBQU8sRUFBRXZDLE9BQWhDO0FBQTBDLFdBQU8sRUFBRWUsWUFBbkQ7QUFBaUUsU0FBSyxFQUFFO0FBQUV5QixXQUFLLEVBQUUsTUFBVDtBQUFpQkMsY0FBUSxFQUFFLE1BQTNCO0FBQW1DQyxZQUFNLEVBQUUsTUFBM0M7QUFBbURSLGtCQUFZLEVBQUU7QUFBakUsS0FBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixDQWRGLENBREY7QUF1QkQ7O0dBdEVRckMsYTs7S0FBQUEsYTtBQXdFTUEsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS4xZDQyNjFiNGRiNTkxYzk0YTU3Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy9wcm9maWxlLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7IENhbWVyYU91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyBCdXR0b24sIFVwbG9hZCwgbWVzc2FnZSwgSW5wdXQsIFRhYnMsIFJhdGUgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IEFQSSBmcm9tICcuLi8uLi9jb25maWdzL0FQSSc7XHJcbmltcG9ydCB7IEZpbGVEcm9wIH0gZnJvbSAnY29tcG9uZW50cy9mb3Jtcyc7XHJcblxyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuXHJcbmZ1bmN0aW9uIEFkZE1hcmtldEl0ZW0oeyBhdXRoLCBvblVwZGF0ZSwgbG9hZGluZyB9KSB7XHJcbiAgXHJcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFthc3NldHMsIHNldEFzc2V0c10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBoYW5kbGVDaGFuZ2VUZXh0ID0gKGUpID0+IHtjb25zb2xlLmxvZyh0ZXh0KVxyXG4gICAgc2V0VGV4dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDaGFuZ2VUYWJBY3RpdmUgPSAoYWN0aXZlS2V5KSA9PiB7XHJcbiAgICBzZXRBY3RpdmVUeXBlKGFjdGl2ZUtleSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgZGF0YUZvclJlcXVlc3Q7XHJcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhO1xyXG4gICAgIFxyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb2ZpbGVQaG90by5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChwcm9maWxlUGhvdG9baV0udHlwZS5zcGxpdCgnLycpWzBdID09PSAnaW1hZ2UnKSB7XHJcbiAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Byb2ZpbGVQaG90bycsIHByb2ZpbGVQaG90b1tpXSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndmlkZW9zJywgcHJvZmlsZVBob3RvW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmFja2dyb3VuZFBob3RvLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGJhY2tncm91bmRQaG90b1tpXS50eXBlLnNwbGl0KCcvJylbMF0gPT09ICdpbWFnZScpIHtcclxuICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncHJvZmlsZUJhY2tncm91bmRJbWFnZScsIGJhY2tncm91bmRQaG90b1tpXSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndmlkZW9zJywgYmFja2dyb3VuZFBob3RvW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGlmICh0ZXh0Lmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnbGFzdE5hbWUnLCB0ZXh0KVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBkYXRhRm9yUmVxdWVzdCA9IGZvcm1EYXRhXHJcbiAgICAgIG9uVXBkYXRlKGRhdGFGb3JSZXF1ZXN0KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VQaG90b0ZpbGUgPSAoZmlsZXMpID0+IHtcclxuICAgIHNldEFzc2V0cyhmaWxlcyk7XHJcbiAgfTtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZE1hcmtldENvbnRhaW5lcn0+XHJcbiAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnfX0+PC9wPlxyXG4gICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgIHZhbHVlPXt0ZXh0fVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVRleHR9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIldyaXRlIGEgbWVzc2FnZVwiXHJcbiAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAyLCBtYXhSb3dzOiA1IH19XHJcbiAgICAgICAgICBzdHlsZT17eyBib3JkZXJSYWRpdXM6IDkwLCBtYXJnaW5Cb3R0b206IDIwLCBwYWRkaW5nVG9wOiAxMywgcGFkZGluZ0xlZnQ6IDIzLCBjb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnfX0+TWFya2V0IEl0ZW0gUGhvdG8gb3IgVmlkZW9zPC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpbGVfcGxhY2V9PlxyXG4gICAgICAgIDxGaWxlRHJvcCBmaWxlcz17YXNzZXRzfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlUGhvdG9GaWxlfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uc19jb250YWluZXJ9PlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBsb2FkaW5nPXtsb2FkaW5nfSAgb25DbGljaz17aGFuZGxlU3VibWl0fSBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBmb250U2l6ZTogJzIwcHgnLCBoZWlnaHQ6ICc1MHB4JywgYm9yZGVyUmFkaXVzOiAnNnB4J319PlxyXG4gICAgICAgICAgQWRkIE1hcmtldCBJdGVtXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkTWFya2V0SXRlbTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==