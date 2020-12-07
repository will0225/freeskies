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
    0: description,
    1: setDescription
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: price,
    1: setPrice
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: category,
    1: setCategory
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: latitude,
    1: setLatitude
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: longitude,
    1: setLongitude
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
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

      for (var i = 0; i < assets.length; i++) {
        if (assets[i].type.split('/')[0] === 'image') {
          formData.append('images', assets[i]);
        } else {
          formData.append('videos', assets[i]);
        }
      }

      if (text.length !== 0) {
        formData.append('title', text);
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
      lineNumber: 57,
      columnNumber: 5
    }
  }, __jsx("p", {
    style: {
      color: 'white'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, "Title:"), __jsx(TextArea, {
    value: text,
    onChange: handleChangeText,
    placeholder: "Write a Title",
    autoSize: {
      minRows: 2,
      maxRows: 5
    },
    style: {
      marginBottom: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }), __jsx("p", {
    style: {
      color: 'white'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, "Description:"), __jsx(TextArea, {
    value: description,
    onChange: handleChangeText,
    placeholder: "Write a Description",
    autoSize: {
      minRows: 2,
      maxRows: 5
    },
    style: {
      marginBottom: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }), __jsx("p", {
    style: {
      color: 'white'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, "Price:"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["InputNumber"], {
    formatter: value => "$ ".concat(value).replace(/\B(?=(\d{3})+(?!\d))/g, ','),
    parser: value => value.replace(/\$\s?|(,*)/g, ''),
    value: price,
    onChange: onChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }), __jsx("p", {
    style: {
      color: 'white'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, "Market Item Photo or Videos"), __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.file_place,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, __jsx(components_forms__WEBPACK_IMPORTED_MODULE_6__["FileDrop"], {
    files: assets,
    onChange: handleChangePhotoFile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.actions_container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
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
      lineNumber: 87,
      columnNumber: 9
    }
  }, "Add Market Item")));
}

_s(AddMarketItem, "qH+CE4XrKwnsOk5D7iLZgyhBXEk=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9Qcm9maWxlL0FkZE1hcmtldEl0ZW0uanMiXSwibmFtZXMiOlsiVGV4dEFyZWEiLCJJbnB1dCIsIkFkZE1hcmtldEl0ZW0iLCJhdXRoIiwib25VcGRhdGUiLCJsb2FkaW5nIiwidGV4dCIsInNldFRleHQiLCJ1c2VTdGF0ZSIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJwcmljZSIsInNldFByaWNlIiwiY2F0ZWdvcnkiLCJzZXRDYXRlZ29yeSIsImxhdGl0dWRlIiwic2V0TGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJzZXRMb25naXR1ZGUiLCJhc3NldHMiLCJzZXRBc3NldHMiLCJoYW5kbGVDaGFuZ2VUZXh0IiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUNoYW5nZVRhYkFjdGl2ZSIsImFjdGl2ZUtleSIsInNldEFjdGl2ZVR5cGUiLCJoYW5kbGVTdWJtaXQiLCJkYXRhRm9yUmVxdWVzdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJpIiwibGVuZ3RoIiwidHlwZSIsInNwbGl0IiwiYXBwZW5kIiwiZXJyb3IiLCJoYW5kbGVDaGFuZ2VQaG90b0ZpbGUiLCJmaWxlcyIsInN0eWxlcyIsImFkZE1hcmtldENvbnRhaW5lciIsImNvbG9yIiwibWluUm93cyIsIm1heFJvd3MiLCJtYXJnaW5Cb3R0b20iLCJyZXBsYWNlIiwib25DaGFuZ2UiLCJmaWxlX3BsYWNlIiwiYWN0aW9uc19jb250YWluZXIiLCJ3aWR0aCIsImZvbnRTaXplIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTTtBQUFFQTtBQUFGLElBQWVDLDBDQUFyQjs7QUFFQSxTQUFTQyxhQUFULENBQXVCO0FBQUVDLE1BQUY7QUFBUUMsVUFBUjtBQUFrQkM7QUFB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QUMseURBQUQ7QUFBVSxTQUFLLEVBQUUvQixNQUFqQjtBQUF5QixZQUFRLEVBQUVxQixxQkFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBekJGLEVBNkJFO0FBQUssYUFBUyxFQUFFRSxrRUFBTSxDQUFDUyxpQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkNBQUQ7QUFBUSxRQUFJLEVBQUMsU0FBYjtBQUF1QixXQUFPLEVBQUU5QyxPQUFoQztBQUEwQyxXQUFPLEVBQUV5QixZQUFuRDtBQUFpRSxTQUFLLEVBQUU7QUFBRXNCLFdBQUssRUFBRSxNQUFUO0FBQWlCQyxjQUFRLEVBQUUsTUFBM0I7QUFBbUNDLFlBQU0sRUFBRSxNQUEzQztBQUFtREMsa0JBQVksRUFBRTtBQUFqRSxLQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLENBN0JGLENBREY7QUFzQ0Q7O0dBbkZRckQsYTs7S0FBQUEsYTtBQXFGTUEsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS44NDI4MjYxMjIzNzVkMGYzYmEwNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy9wcm9maWxlLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7IENhbWVyYU91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyBCdXR0b24sIFVwbG9hZCwgbWVzc2FnZSwgSW5wdXQsIFRhYnMsIFJhdGUsIElucHV0TnVtYmVyIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBBUEkgZnJvbSAnLi4vLi4vY29uZmlncy9BUEknO1xyXG5pbXBvcnQgeyBGaWxlRHJvcCB9IGZyb20gJ2NvbXBvbmVudHMvZm9ybXMnO1xyXG5cclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcblxyXG5mdW5jdGlvbiBBZGRNYXJrZXRJdGVtKHsgYXV0aCwgb25VcGRhdGUsIGxvYWRpbmcgfSkge1xyXG4gIFxyXG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcHJpY2UsIHNldFByaWNlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtjYXRlZ29yeSwgc2V0Q2F0ZWdvcnldID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2xhdGl0dWRlLCBzZXRMYXRpdHVkZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbbG9uZ2l0dWRlLCBzZXRMb25naXR1ZGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2Fzc2V0cywgc2V0QXNzZXRzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVRleHQgPSAoZSkgPT4ge2NvbnNvbGUubG9nKHRleHQpXHJcbiAgICBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVRhYkFjdGl2ZSA9IChhY3RpdmVLZXkpID0+IHtcclxuICAgIHNldEFjdGl2ZVR5cGUoYWN0aXZlS2V5KTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCBkYXRhRm9yUmVxdWVzdDtcclxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGE7XHJcbiAgICAgXHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXNzZXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGFzc2V0c1tpXS50eXBlLnNwbGl0KCcvJylbMF0gPT09ICdpbWFnZScpIHtcclxuICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2VzJywgYXNzZXRzW2ldKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd2aWRlb3MnLCBhc3NldHNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgXHJcbiAgICAgIGlmICh0ZXh0Lmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndGl0bGUnLCB0ZXh0KVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBkYXRhRm9yUmVxdWVzdCA9IGZvcm1EYXRhXHJcbiAgICAgIG9uVXBkYXRlKGRhdGFGb3JSZXF1ZXN0KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VQaG90b0ZpbGUgPSAoZmlsZXMpID0+IHtcclxuICAgIHNldEFzc2V0cyhmaWxlcyk7XHJcbiAgfTtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZE1hcmtldENvbnRhaW5lcn0+XHJcbiAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnfX0+VGl0bGU6PC9wPlxyXG4gICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgIHZhbHVlPXt0ZXh0fVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVRleHR9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIldyaXRlIGEgVGl0bGVcIlxyXG4gICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMiwgbWF4Um93czogNSB9fVxyXG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxMCB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnfX0+RGVzY3JpcHRpb246PC9wPlxyXG4gICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VUZXh0fVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJXcml0ZSBhIERlc2NyaXB0aW9uXCJcclxuICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDIsIG1heFJvd3M6IDUgfX1cclxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8cCBzdHlsZT17eyBjb2xvcjogJ3doaXRlJ319PlByaWNlOjwvcD5cclxuICAgICAgPElucHV0TnVtYmVyXHJcbiAgICAgICAgZm9ybWF0dGVyPXt2YWx1ZSA9PiBgJCAke3ZhbHVlfWAucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX1cclxuICAgICAgICBwYXJzZXI9e3ZhbHVlID0+IHZhbHVlLnJlcGxhY2UoL1xcJFxccz98KCwqKS9nLCAnJyl9XHJcbiAgICAgICAgdmFsdWU9e3ByaWNlfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgLz5cclxuICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZSd9fT5NYXJrZXQgSXRlbSBQaG90byBvciBWaWRlb3M8L3A+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmlsZV9wbGFjZX0+XHJcbiAgICAgICAgPEZpbGVEcm9wIGZpbGVzPXthc3NldHN9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VQaG90b0ZpbGV9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpb25zX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGxvYWRpbmc9e2xvYWRpbmd9ICBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGZvbnRTaXplOiAnMjBweCcsIGhlaWdodDogJzUwcHgnLCBib3JkZXJSYWRpdXM6ICc2cHgnfX0+XHJcbiAgICAgICAgICBBZGQgTWFya2V0IEl0ZW1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRNYXJrZXRJdGVtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9