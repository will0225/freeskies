webpackHotUpdate_N_E("pages/profile",{

/***/ "./containers/Profile/EditMarketItem.js":
/*!**********************************************!*\
  !*** ./containers/Profile/EditMarketItem.js ***!
  \**********************************************/
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
var _jsxFileName = "E:\\freeskies_fe_code\\containers\\Profile\\EditMarketItem.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const {
  TextArea
} = antd__WEBPACK_IMPORTED_MODULE_4__["Input"];
const {
  Option
} = antd__WEBPACK_IMPORTED_MODULE_4__["Select"];

function EditMarketItem({
  auth,
  onUpdate,
  loading,
  categories,
  item
}) {
  _s();

  console.log(item);
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

  const handleChangeLongi = e => {
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
    value: latitude,
    style: {
      marginBottom: 10,
      backgroundColor: 'transparent',
      color: 'white',
      width: '100%'
    },
    onChange: handleChangeLati,
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
    value: longitude,
    style: {
      marginBottom: 10,
      backgroundColor: 'transparent',
      color: 'white',
      width: '100%'
    },
    onChange: handleChangeLongi,
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
      marginBottom: 20
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
  }, "Edit Market Item")));
}

_s(EditMarketItem, "RpbPOXWQ+vjAhI7OqvGO/ezUUP0=");

_c = EditMarketItem;
/* harmony default export */ __webpack_exports__["default"] = (EditMarketItem);

var _c;

$RefreshReg$(_c, "EditMarketItem");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9Qcm9maWxlL0VkaXRNYXJrZXRJdGVtLmpzIl0sIm5hbWVzIjpbIlRleHRBcmVhIiwiSW5wdXQiLCJPcHRpb24iLCJTZWxlY3QiLCJFZGl0TWFya2V0SXRlbSIsImF1dGgiLCJvblVwZGF0ZSIsImxvYWRpbmciLCJjYXRlZ29yaWVzIiwiaXRlbSIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0Iiwic2V0VGV4dCIsInVzZVN0YXRlIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsInByaWNlIiwic2V0UHJpY2UiLCJjYXRlZ29yeSIsInNldENhdGVnb3J5IiwibGF0aXR1ZGUiLCJzZXRMYXRpdHVkZSIsImxvbmdpdHVkZSIsInNldExvbmdpdHVkZSIsImFzc2V0cyIsInNldEFzc2V0cyIsInNhbGVPckJ1eSIsInNldFNhbGVPckJ1eSIsImhhbmRsZUNoYW5nZVRleHQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVDaGFuZ2VEZXNjcmlwdGlvbiIsImhhbmRsZUNoYW5nZVByaWNlIiwiaGFuZGxlQ2hhbmdlTGF0aSIsImhhbmRsZUNoYW5nZUxvbmdpIiwiaGFuZGxlQ2hhbmdlQ2F0ZWdvcnkiLCJoYW5kbGVDaGFuZ2VTYWxlT3JCdXkiLCJoYW5kbGVTdWJtaXQiLCJkYXRhRm9yUmVxdWVzdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJpIiwibGVuZ3RoIiwidHlwZSIsInNwbGl0IiwiYXBwZW5kIiwiZXJyb3IiLCJoYW5kbGVDaGFuZ2VQaG90b0ZpbGUiLCJmaWxlcyIsInN0eWxlcyIsImFkZE1hcmtldENvbnRhaW5lciIsImNvbG9yIiwibWluUm93cyIsIm1heFJvd3MiLCJtYXJnaW5Cb3R0b20iLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsIm1hcCIsImluZGV4IiwicmVwbGFjZSIsImZpbGVfcGxhY2UiLCJhY3Rpb25zX2NvbnRhaW5lciIsImZvbnRTaXplIiwiaGVpZ2h0IiwiYm9yZGVyUmFk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LEVBQUUsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosRUFFSSxNQUFDLE1BQUQ7QUFBUSxTQUFLLEVBQUUsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRkosQ0F2REosRUEyREk7QUFBSyxhQUFTLEVBQUVhLGtFQUFNLENBQUNZLGlCQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywyQ0FBRDtBQUFRLFFBQUksRUFBQyxTQUFiO0FBQXVCLFdBQU8sRUFBRXhELE9BQWhDO0FBQTBDLFdBQU8sRUFBRWdDLFlBQW5EO0FBQWlFLFNBQUssRUFBRTtBQUFFa0IsV0FBSyxFQUFFLE1BQVQ7QUFBaUJPLGNBQVEsRUFBRSxNQUEzQjtBQUFtQ0MsWUFBTSxFQUFFLE1BQTNDO0FBQW1EQyxrQkFBWSxFQUFFO0FBQWpFLEtBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREosQ0EzREosQ0FERjtBQW9FRDs7R0FwSlE5RCxjOztLQUFBQSxjO0FBc0pNQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLmZiZWY3Nzg0MTY3NDc3ZjVmNjYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL3Byb2ZpbGUubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgQ2FtZXJhT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgVXBsb2FkLCBtZXNzYWdlLCBJbnB1dCwgVGFicywgUmF0ZSwgSW5wdXROdW1iZXIsIFNlbGVjdCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgQVBJIGZyb20gJy4uLy4uL2NvbmZpZ3MvQVBJJztcclxuaW1wb3J0IHsgRmlsZURyb3AgfSBmcm9tICdjb21wb25lbnRzL2Zvcm1zJztcclxuaW1wb3J0IHsgc2V0IH0gZnJvbSAnbG9kYXNoJztcclxuXHJcbmNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0O1xyXG5jb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xyXG5cclxuZnVuY3Rpb24gRWRpdE1hcmtldEl0ZW0oeyBhdXRoLCBvblVwZGF0ZSwgbG9hZGluZywgY2F0ZWdvcmllcywgaXRlbSB9KSB7XHJcbiAgY29uc29sZS5sb2coaXRlbSk7XHJcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtwcmljZSwgc2V0UHJpY2VdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2NhdGVnb3J5LCBzZXRDYXRlZ29yeV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbbGF0aXR1ZGUsIHNldExhdGl0dWRlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtsb25naXR1ZGUsIHNldExvbmdpdHVkZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbYXNzZXRzLCBzZXRBc3NldHNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3NhbGVPckJ1eSwgc2V0U2FsZU9yQnV5XSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VUZXh0ID0gKGUpID0+IHtcclxuICAgIHNldFRleHQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZURlc2NyaXB0aW9uID0gKGUpID0+IHtcclxuICAgIHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VQcmljZSA9IChlKSA9PiB7XHJcbiAgICBzZXRQcmljZShlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VMYXRpID0gKGUpID0+IHtcclxuICAgICAgc2V0TGF0aXR1ZGUoZSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUxvbmdpID0gKGUpID0+IHtcclxuICAgICAgc2V0TG9uZ2l0dWRlKGUpXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VDYXRlZ29yeSA9IChlKSA9PiB7XHJcbiAgICAgIHNldENhdGVnb3J5KGUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlU2FsZU9yQnV5ID0gKGUpID0+IHtcclxuICAgICAgc2V0U2FsZU9yQnV5KGUpXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgZGF0YUZvclJlcXVlc3Q7XHJcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhO1xyXG4gICAgIFxyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFzc2V0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChhc3NldHNbaV0udHlwZS5zcGxpdCgnLycpWzBdID09PSAnaW1hZ2UnKSB7XHJcbiAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ltYWdlcycsIGFzc2V0c1tpXSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndmlkZW9zJywgYXNzZXRzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFxyXG4gICAgICBpZiAodGV4dC5sZW5ndGggIT09IDApIHtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3RpdGxlJywgdGV4dClcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGRlc2NyaXB0aW9uLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZGVzY3JpcHRpb24nLCBkZXNjcmlwdGlvbilcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdwcmljZScsIHByaWNlKTtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdjYXRlZ29yeScsIGNhdGVnb3J5KTtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdsYXRpdHVkZScsIGxhdGl0dWRlKTtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdsb25ndGl0dWRlJywgbG9uZ2l0dWRlKTtcclxuXHJcbiAgICAgIFxyXG4gICAgICBkYXRhRm9yUmVxdWVzdCA9IGZvcm1EYXRhXHJcbiAgICAgIG9uVXBkYXRlKGRhdGFGb3JSZXF1ZXN0LCBzYWxlT3JCdXkpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVBob3RvRmlsZSA9IChmaWxlcykgPT4ge1xyXG4gICAgc2V0QXNzZXRzKGZpbGVzKTtcclxuICB9O1xyXG5cclxuICBjb25zb2xlLmxvZyhkZXNjcmlwdGlvbik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZE1hcmtldENvbnRhaW5lcn0+XHJcbiAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnfX0+VGl0bGU6PC9wPlxyXG4gICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgIHZhbHVlPXt0ZXh0fVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVRleHR9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIldyaXRlIGEgVGl0bGVcIlxyXG4gICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMiwgbWF4Um93czogNSB9fVxyXG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxMCwgY29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8cCBzdHlsZT17eyBjb2xvcjogJ3doaXRlJ319PkRlc2NyaXB0aW9uOjwvcD5cclxuICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlRGVzY3JpcHRpb259XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIldyaXRlIGEgRGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMiwgbWF4Um93czogNSB9fVxyXG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxMCwgY29sb3I6ICd3aGl0ZSd9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0+XHJcbiAgICAgICAgQ2F0ZWdvcnk6XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxTZWxlY3QgZGVmYXVsdFZhbHVlPVwiXCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnIH19IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VDYXRlZ29yeX0+XHJcbiAgICAgICAgICAgIHtjYXRlZ29yaWVzICYmIGNhdGVnb3JpZXMubWFwKChpdGVtLCBpbmRleCkgPT4gXHJcbiAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybig8T3B0aW9uIHZhbHVlPXtpdGVtfSBrZXk9e2luZGV4fT57aXRlbX08L09wdGlvbj4pXHJcbiAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZSd9fT5QcmljZTo8L3A+XHJcbiAgICAgICAgPElucHV0TnVtYmVyXHJcbiAgICAgICAgICAgIGZvcm1hdHRlcj17dmFsdWUgPT4gYCQgJHt2YWx1ZX1gLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9XHJcbiAgICAgICAgICAgIHBhcnNlcj17dmFsdWUgPT4gdmFsdWUucmVwbGFjZSgvXFwkXFxzP3woLCopL2csICcnKX1cclxuICAgICAgICAgICAgdmFsdWU9e3ByaWNlfVxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDEwLCBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsIGNvbG9yOiAnd2hpdGUnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VQcmljZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnfX0+TGF0aXR1ZGU6PC9wPlxyXG4gICAgICAgIDxJbnB1dE51bWJlclxyXG4gICAgICAgICAgICB2YWx1ZT17bGF0aXR1ZGV9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTAsIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JywgY29sb3I6ICd3aGl0ZScsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUxhdGl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJ3doaXRlJ319Pkxvbmd0aXR1ZGU6PC9wPlxyXG4gICAgICAgIDxJbnB1dE51bWJlclxyXG4gICAgICAgICAgICB2YWx1ZT17bG9uZ2l0dWRlfVxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDEwLCBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsIGNvbG9yOiAnd2hpdGUnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VMb25naX1cclxuICAgICAgICAvPlxyXG4gICAgICBcclxuICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJ3doaXRlJ319Pk1hcmtldCBJdGVtIFBob3RvIG9yIFZpZGVvczwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpbGVfcGxhY2V9PlxyXG4gICAgICAgICAgICA8RmlsZURyb3AgZmlsZXM9e2Fzc2V0c30gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVBob3RvRmlsZX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fT5cclxuICAgICAgICBUeXBlOlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8U2VsZWN0IGRlZmF1bHRWYWx1ZT17dHJ1ZX0gc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLCBtYXJnaW5Cb3R0b206IDIwIH19IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VTYWxlT3JCdXl9PlxyXG4gICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXt0cnVlfSA+U2FsZTwvT3B0aW9uPlxyXG4gICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtmYWxzZX0gPkJ1eTwvT3B0aW9uPlxyXG4gICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uc19jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgbG9hZGluZz17bG9hZGluZ30gIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0gc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgZm9udFNpemU6ICcyMHB4JywgaGVpZ2h0OiAnNTBweCcsIGJvcmRlclJhZGl1czogJzZweCd9fT5cclxuICAgICAgICAgICAgRWRpdCBNYXJrZXQgSXRlbVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXRNYXJrZXRJdGVtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9