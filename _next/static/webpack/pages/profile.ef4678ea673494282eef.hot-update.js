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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "E:\\freeskies_fe_code\\containers\\Profile\\AddMarketItem.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const {
  TextArea
} = antd__WEBPACK_IMPORTED_MODULE_4__["Input"];
const {
  Option
} = antd__WEBPACK_IMPORTED_MODULE_4__["Select"];

function AddMarketItem({
  auth,
  onUpdate,
  loading,
  categories
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
  const {
    0: saleOrBuy,
    1: setSaleOrBuy
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);

  const handleChangeText = e => {
    setText(e.target.value);
  };

  const handleChangeDescription = e => {
    setDescription(e.target.value);
  };

  const handleChangePrice = e => {
    setPrice(e);
  };

  const handleChangeLati = e => {
    setLatitude(e);
  };

  const handleChangeLong = e => {
    setLongitude(e);
  };

  const handleChangeCategory = e => {
    setCategory(e);
  };

  const handleChangeSaleOrBuy = e => {
    setSaleOrBuy(e);
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

      if (description.length !== 0) {
        formData.append('description', description);
      }

      formData.append('price', price);
      formData.append('category', category);
      formData.append('latitude', latitude);
      formData.append('longtitude', longitude);
      dataForRequest = formData;
      onUpdate(dataForRequest, saleOrBuy);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangePhotoFile = files => {
    setAssets(files);
  };

  console.log(description);
  return __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.addMarketContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 5
    }
  }, __jsx("p", {
    style: {
      color: 'white'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
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
      marginBottom: 10,
      color: 'white'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }), __jsx("p", {
    style: {
      color: 'white'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }, "Description:"), __jsx(TextArea, {
    value: description,
    onChange: handleChangeDescription,
    placeholder: "Write a Description",
    autoSize: {
      minRows: 2,
      maxRows: 5
    },
    style: {
      marginBottom: 10,
      color: 'white'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }
  }), __jsx("p", {
    style: {
      color: 'white'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  }, "Category:"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Select"], {
    defaultValue: "",
    style: {
      width: '100%',
      backgroundColor: 'transparent'
    },
    onChange: handleChangeCategory,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }, categories && categories.map((item, index) => {
    return __jsx(Option, {
      value: item,
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 24
      }
    }, item);
  })), __jsx("p", {
    style: {
      color: 'white'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }, "Price:"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["InputNumber"], {
    formatter: value => "$ ".concat(value).replace(/\B(?=(\d{3})+(?!\d))/g, ','),
    parser: value => value.replace(/\$\s?|(,*)/g, ''),
    value: price,
    style: {
      marginBottom: 10,
      backgroundColor: 'transparent',
      color: 'white',
      width: '100%'
    },
    onChange: handleChangePrice,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }), __jsx("p", {
    style: {
      color: 'white'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }
  }, "Latitude:"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["InputNumber"], {
    value: price,
    style: {
      marginBottom: 10,
      backgroundColor: 'transparent',
      color: 'white',
      width: '100%'
    },
    onChange: handleChangeLa,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 9
    }
  }), __jsx("p", {
    style: {
      color: 'white'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 9
    }
  }, "Longtitude:"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["InputNumber"], {
    value: price,
    style: {
      marginBottom: 10,
      backgroundColor: 'transparent',
      color: 'white',
      width: '100%'
    },
    onChange: handleChangeLong,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }
  }), __jsx("p", {
    style: {
      color: 'white'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  }, "Market Item Photo or Videos"), __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.file_place,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 9
    }
  }, __jsx(components_forms__WEBPACK_IMPORTED_MODULE_6__["FileDrop"], {
    files: assets,
    onChange: handleChangePhotoFile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 13
    }
  })), __jsx("p", {
    style: {
      color: 'white'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 9
    }
  }, "Type:"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Select"], {
    defaultValue: true,
    style: {
      width: '100%',
      backgroundColor: 'transparent',
      marginBottom: 10
    },
    onChange: handleChangeSaleOrBuy,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 9
    }
  }, __jsx(Option, {
    value: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 13
    }
  }, "Sale"), __jsx(Option, {
    value: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 13
    }
  }, "Buy")), __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.actions_container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 9
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
      lineNumber: 154,
      columnNumber: 13
    }
  }, "Add Market Item")));
}

_s(AddMarketItem, "RpbPOXWQ+vjAhI7OqvGO/ezUUP0=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9Qcm9maWxlL0FkZE1hcmtldEl0ZW0uanMiXSwibmFtZXMiOlsiVGV4dEFyZWEiLCJJbnB1dCIsIk9wdGlvbiIsIlNlbGVjdCIsIkFkZE1hcmtldEl0ZW0iLCJhdXRoIiwib25VcGRhdGUiLCJsb2FkaW5nIiwiY2F0ZWdvcmllcyIsInRleHQiLCJzZXRUZXh0IiwidXNlU3RhdGUiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwicHJpY2UiLCJzZXRQcmljZSIsImNhdGVnb3J5Iiwic2V0Q2F0ZWdvcnkiLCJsYXRpdHVkZSIsInNldExhdGl0dWRlIiwibG9uZ2l0dWRlIiwic2V0TG9uZ2l0dWRlIiwiYXNzZXRzIiwic2V0QXNzZXRzIiwic2FsZU9yQnV5Iiwic2V0U2FsZU9yQnV5IiwiaGFuZGxlQ2hhbmdlVGV4dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUNoYW5nZURlc2NyaXB0aW9uIiwiaGFuZGxlQ2hhbmdlUHJpY2UiLCJoYW5kbGVDaGFuZ2VMYXRpIiwiaGFuZGxlQ2hhbmdlTG9uZyIsImhhbmRsZUNoYW5nZUNhdGVnb3J5IiwiaGFuZGxlQ2hhbmdlU2FsZU9yQnV5IiwiaGFuZGxlU3VibWl0IiwiZGF0YUZvclJlcXVlc3QiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiaSIsImxlbmd0aCIsInR5cGUiLCJzcGxpdCIsImFwcGVuZCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZVBob3RvRmlsZSIsImZpbGVzIiwic3R5bGVzIiwiYWRkTWFya2V0Q29udGFpbmVyIiwiY29sb3IiLCJtaW5Sb3dzIiwibWF4Um93cyIsIm1hcmdpbkJvdHRvbSIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwibWFwIiwiaXRlbSIsImluZGV4IiwicmVwbGFjZSIsImhhbmRsZUNoYW5nZUxhIiwiZmlsZV9wbGFjZSIsImFjdGlvbnNfY29udGFpbmVyIiwiZm9udFNpemUiLCJoZWln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QUEsWUFESixFQUVJLE1BQUMsTUFBRDtBQUFRLFNBQUssRUFBRSxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGSixDQXZESixFQTJESTtBQUFLLGFBQVMsRUFBRWUsa0VBQU0sQ0FBQ2MsaUJBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDJDQUFEO0FBQVEsUUFBSSxFQUFDLFNBQWI7QUFBdUIsV0FBTyxFQUFFekQsT0FBaEM7QUFBMEMsV0FBTyxFQUFFNkIsWUFBbkQ7QUFBaUUsU0FBSyxFQUFFO0FBQUVvQixXQUFLLEVBQUUsTUFBVDtBQUFpQlMsY0FBUSxFQUFFLE1BQTNCO0FBQW1DQyxZQUFNLEVBQUUsTUFBM0M7QUFBbURDLGtCQUFZLEVBQUU7QUFBakUsS0FBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixDQTNESixDQURGO0FBb0VEOztHQXBKUS9ELGE7O0tBQUFBLGE7QUFzSk1BLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuZWY0Njc4ZWE2NzM0OTQyODJlZWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvcHJvZmlsZS5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyBDYW1lcmFPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgQnV0dG9uLCBVcGxvYWQsIG1lc3NhZ2UsIElucHV0LCBUYWJzLCBSYXRlLCBJbnB1dE51bWJlciwgU2VsZWN0IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBBUEkgZnJvbSAnLi4vLi4vY29uZmlncy9BUEknO1xyXG5pbXBvcnQgeyBGaWxlRHJvcCB9IGZyb20gJ2NvbXBvbmVudHMvZm9ybXMnO1xyXG5pbXBvcnQgeyBzZXQgfSBmcm9tICdsb2Rhc2gnO1xyXG5cclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcbmNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3Q7XHJcblxyXG5mdW5jdGlvbiBBZGRNYXJrZXRJdGVtKHsgYXV0aCwgb25VcGRhdGUsIGxvYWRpbmcsIGNhdGVnb3JpZXMgfSkge1xyXG4gIFxyXG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcHJpY2UsIHNldFByaWNlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtjYXRlZ29yeSwgc2V0Q2F0ZWdvcnldID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2xhdGl0dWRlLCBzZXRMYXRpdHVkZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbbG9uZ2l0dWRlLCBzZXRMb25naXR1ZGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2Fzc2V0cywgc2V0QXNzZXRzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtzYWxlT3JCdXksIHNldFNhbGVPckJ1eV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlVGV4dCA9IChlKSA9PiB7XHJcbiAgICBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VEZXNjcmlwdGlvbiA9IChlKSA9PiB7XHJcbiAgICBzZXREZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlUHJpY2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0UHJpY2UoZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlTGF0aSA9IChlKSA9PiB7XHJcbiAgICAgIHNldExhdGl0dWRlKGUpXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VMb25nID0gKGUpID0+IHtcclxuICAgICAgc2V0TG9uZ2l0dWRlKGUpXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VDYXRlZ29yeSA9IChlKSA9PiB7XHJcbiAgICAgIHNldENhdGVnb3J5KGUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlU2FsZU9yQnV5ID0gKGUpID0+IHtcclxuICAgICAgc2V0U2FsZU9yQnV5KGUpXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgZGF0YUZvclJlcXVlc3Q7XHJcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhO1xyXG4gICAgIFxyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFzc2V0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChhc3NldHNbaV0udHlwZS5zcGxpdCgnLycpWzBdID09PSAnaW1hZ2UnKSB7XHJcbiAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ltYWdlcycsIGFzc2V0c1tpXSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndmlkZW9zJywgYXNzZXRzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFxyXG4gICAgICBpZiAodGV4dC5sZW5ndGggIT09IDApIHtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3RpdGxlJywgdGV4dClcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGRlc2NyaXB0aW9uLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZGVzY3JpcHRpb24nLCBkZXNjcmlwdGlvbilcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdwcmljZScsIHByaWNlKTtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdjYXRlZ29yeScsIGNhdGVnb3J5KTtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdsYXRpdHVkZScsIGxhdGl0dWRlKTtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdsb25ndGl0dWRlJywgbG9uZ2l0dWRlKTtcclxuXHJcbiAgICAgIFxyXG4gICAgICBkYXRhRm9yUmVxdWVzdCA9IGZvcm1EYXRhXHJcbiAgICAgIG9uVXBkYXRlKGRhdGFGb3JSZXF1ZXN0LCBzYWxlT3JCdXkpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVBob3RvRmlsZSA9IChmaWxlcykgPT4ge1xyXG4gICAgc2V0QXNzZXRzKGZpbGVzKTtcclxuICB9O1xyXG5cclxuICBjb25zb2xlLmxvZyhkZXNjcmlwdGlvbik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZE1hcmtldENvbnRhaW5lcn0+XHJcbiAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnfX0+VGl0bGU6PC9wPlxyXG4gICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgIHZhbHVlPXt0ZXh0fVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVRleHR9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIldyaXRlIGEgVGl0bGVcIlxyXG4gICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMiwgbWF4Um93czogNSB9fVxyXG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxMCwgY29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8cCBzdHlsZT17eyBjb2xvcjogJ3doaXRlJ319PkRlc2NyaXB0aW9uOjwvcD5cclxuICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlRGVzY3JpcHRpb259XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIldyaXRlIGEgRGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMiwgbWF4Um93czogNSB9fVxyXG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxMCwgY29sb3I6ICd3aGl0ZSd9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0+XHJcbiAgICAgICAgQ2F0ZWdvcnk6XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxTZWxlY3QgZGVmYXVsdFZhbHVlPVwiXCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnIH19IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VDYXRlZ29yeX0+XHJcbiAgICAgICAgICAgIHtjYXRlZ29yaWVzICYmIGNhdGVnb3JpZXMubWFwKChpdGVtLCBpbmRleCkgPT4gXHJcbiAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybig8T3B0aW9uIHZhbHVlPXtpdGVtfSBrZXk9e2luZGV4fT57aXRlbX08L09wdGlvbj4pXHJcbiAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZSd9fT5QcmljZTo8L3A+XHJcbiAgICAgICAgPElucHV0TnVtYmVyXHJcbiAgICAgICAgICAgIGZvcm1hdHRlcj17dmFsdWUgPT4gYCQgJHt2YWx1ZX1gLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9XHJcbiAgICAgICAgICAgIHBhcnNlcj17dmFsdWUgPT4gdmFsdWUucmVwbGFjZSgvXFwkXFxzP3woLCopL2csICcnKX1cclxuICAgICAgICAgICAgdmFsdWU9e3ByaWNlfVxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDEwLCBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsIGNvbG9yOiAnd2hpdGUnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VQcmljZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnfX0+TGF0aXR1ZGU6PC9wPlxyXG4gICAgICAgIDxJbnB1dE51bWJlclxyXG4gICAgICAgICAgICB2YWx1ZT17cHJpY2V9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTAsIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JywgY29sb3I6ICd3aGl0ZScsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUxhfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZSd9fT5Mb25ndGl0dWRlOjwvcD5cclxuICAgICAgICA8SW5wdXROdW1iZXJcclxuICAgICAgICAgICAgdmFsdWU9e3ByaWNlfVxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDEwLCBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsIGNvbG9yOiAnd2hpdGUnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VMb25nfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIFxyXG4gICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnfX0+TWFya2V0IEl0ZW0gUGhvdG8gb3IgVmlkZW9zPC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmlsZV9wbGFjZX0+XHJcbiAgICAgICAgICAgIDxGaWxlRHJvcCBmaWxlcz17YXNzZXRzfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlUGhvdG9GaWxlfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19PlxyXG4gICAgICAgIFR5cGU6XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxTZWxlY3QgZGVmYXVsdFZhbHVlPXt0cnVlfSBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsIG1hcmdpbkJvdHRvbTogMTAgfX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVNhbGVPckJ1eX0+XHJcbiAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e3RydWV9ID5TYWxlPC9PcHRpb24+XHJcbiAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2ZhbHNlfSA+QnV5PC9PcHRpb24+XHJcbiAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpb25zX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBsb2FkaW5nPXtsb2FkaW5nfSAgb25DbGljaz17aGFuZGxlU3VibWl0fSBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBmb250U2l6ZTogJzIwcHgnLCBoZWlnaHQ6ICc1MHB4JywgYm9yZGVyUmFkaXVzOiAnNnB4J319PlxyXG4gICAgICAgICAgICBBZGQgTWFya2V0IEl0ZW1cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRNYXJrZXRJdGVtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9