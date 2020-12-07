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

  const handleChangeLa = e => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9Qcm9maWxlL0FkZE1hcmtldEl0ZW0uanMiXSwibmFtZXMiOlsiVGV4dEFyZWEiLCJJbnB1dCIsIk9wdGlvbiIsIlNlbGVjdCIsIkFkZE1hcmtldEl0ZW0iLCJhdXRoIiwib25VcGRhdGUiLCJsb2FkaW5nIiwiY2F0ZWdvcmllcyIsInRleHQiLCJzZXRUZXh0IiwidXNlU3RhdGUiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwicHJpY2UiLCJzZXRQcmljZSIsImNhdGVnb3J5Iiwic2V0Q2F0ZWdvcnkiLCJsYXRpdHVkZSIsInNldExhdGl0dWRlIiwibG9uZ2l0dWRlIiwic2V0TG9uZ2l0dWRlIiwiYXNzZXRzIiwic2V0QXNzZXRzIiwic2FsZU9yQnV5Iiwic2V0U2FsZU9yQnV5IiwiaGFuZGxlQ2hhbmdlVGV4dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUNoYW5nZURlc2NyaXB0aW9uIiwiaGFuZGxlQ2hhbmdlUHJpY2UiLCJoYW5kbGVDaGFuZ2VMYSIsImhhbmRsZUNoYW5nZUxvbmciLCJoYW5kbGVDaGFuZ2VDYXRlZ29yeSIsImhhbmRsZUNoYW5nZVNhbGVPckJ1eSIsImhhbmRsZVN1Ym1pdCIsImRhdGFGb3JSZXF1ZXN0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImkiLCJsZW5ndGgiLCJ0eXBlIiwic3BsaXQiLCJhcHBlbmQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDaGFuZ2VQaG90b0ZpbGUiLCJmaWxlcyIsInN0eWxlcyIsImFkZE1hcmtldENvbnRhaW5lciIsImNvbG9yIiwibWluUm93cyIsIm1heFJvd3MiLCJtYXJnaW5Cb3R0b20iLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInJlcGxhY2UiLCJmaWxlX3BsYWNlIiwiYWN0aW9uc19jb250YWluZXIiLCJmb250U2l6ZSIsImhlaWdodCIsImJvcmRlclJhZGl1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNO0FBQUVBO0FBQUYsSUFBZUMsMENBQXJCO0FBQ0EsTUFBTTtBQUFFQztBQUFGLElBQWFDLDJDQUFuQjs7QUFFQSxTQUFTQyxhQUFULENBQXVCO0FBQUVDLE1BQUY7QUFBUUMsVUFBUjtBQUFrQkMsU0FBbEI7QUFBMkJDO0FBQTNCLENBQXZCLEVBQWdFO0FBQUE7O0FBRTlELFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsc0RBQVEsQ0FBQyxFQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFdBQUQ7QUFBQSxPQUFjQztBQUFkLE1BQWdDRixzREFBUSxDQUFDLEVBQUQsQ0FBOUM7QUFDQSxRQUFNO0FBQUEsT0FBQ0csS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JKLHNEQUFRLENBQUMsQ0FBRCxDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDSyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQk4sc0RBQVEsQ0FBQyxJQUFELENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNPLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCUixzREFBUSxDQUFDLElBQUQsQ0FBeEM7QUFDQSxRQUFNO0FBQUEsT0FBQ1MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJWLHNEQUFRLENBQUMsSUFBRCxDQUExQztBQUNBLFFBQU07QUFBQSxPQUFDVyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQlosc0RBQVEsQ0FBQyxJQUFELENBQXBDO0FBQ0EsUUFBTTtBQUFBLE9BQUNhLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCZCxzREFBUSxDQUFDLElBQUQsQ0FBMUM7O0FBRUEsUUFBTWUsZ0JBQWdCLEdBQUlDLENBQUQsSUFBTztBQUM5QmpCLFdBQU8sQ0FBQ2lCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVA7QUFDRCxHQUZEOztBQUlBLFFBQU1DLHVCQUF1QixHQUFJSCxDQUFELElBQU87QUFDckNkLGtCQUFjLENBQUNjLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWQ7QUFDRCxHQUZEOztBQUlBLFFBQU1FLGlCQUFpQixHQUFJSixDQUFELElBQU87QUFDL0JaLFlBQVEsQ0FBQ1ksQ0FBRCxDQUFSO0FBQ0QsR0FGRDs7QUFJQSxRQUFNSyxjQUFjLEdBQUlMLENBQUQsSUFBTztBQUMxQlIsZUFBVyxDQUFDUSxDQUFELENBQVg7QUFDSCxHQUZEOztBQUlBLFFBQU1NLGdCQUFnQixHQUFJTixDQUFELElBQU87QUFDNUJOLGdCQUFZLENBQUNNLENBQUQsQ0FBWjtBQUNILEdBRkQ7O0FBSUEsUUFBTU8sb0JBQW9CLEdBQUlQLENBQUQsSUFBTztBQUNoQ1YsZUFBVyxDQUFDVSxDQUFELENBQVg7QUFDSCxHQUZEOztBQUlBLFFBQU1RLHFCQUFxQixHQUFJUixDQUFELElBQU87QUFDakNGLGdCQUFZLENBQUNFLENBQUQsQ0FBWjtBQUNILEdBRkQ7O0FBSUEsUUFBTVMsWUFBWSxHQUFHLFlBQVk7QUFDL0IsUUFBSTtBQUNGLFVBQUlDLGNBQUo7QUFDQSxZQUFNQyxRQUFRLEdBQUcsSUFBSUMsUUFBSixFQUFqQjs7QUFFQSxXQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdsQixNQUFNLENBQUNtQixNQUEzQixFQUFtQ0QsQ0FBQyxFQUFwQyxFQUF3QztBQUN0QyxZQUFJbEIsTUFBTSxDQUFDa0IsQ0FBRCxDQUFOLENBQVVFLElBQVYsQ0FBZUMsS0FBZixDQUFxQixHQUFyQixFQUEwQixDQUExQixNQUFpQyxPQUFyQyxFQUE4QztBQUM1Q0wsa0JBQVEsQ0FBQ00sTUFBVCxDQUFnQixRQUFoQixFQUEwQnRCLE1BQU0sQ0FBQ2tCLENBQUQsQ0FBaEM7QUFDRCxTQUZELE1BRU87QUFDTEYsa0JBQVEsQ0FBQ00sTUFBVCxDQUFnQixRQUFoQixFQUEwQnRCLE1BQU0sQ0FBQ2tCLENBQUQsQ0FBaEM7QUFDRDtBQUNGOztBQUdELFVBQUkvQixJQUFJLENBQUNnQyxNQUFMLEtBQWdCLENBQXBCLEVBQXVCO0FBQ3JCSCxnQkFBUSxDQUFDTSxNQUFULENBQWdCLE9BQWhCLEVBQXlCbkMsSUFBekI7QUFDRDs7QUFFRCxVQUFJRyxXQUFXLENBQUM2QixNQUFaLEtBQXVCLENBQTNCLEVBQThCO0FBQzVCSCxnQkFBUSxDQUFDTSxNQUFULENBQWdCLGFBQWhCLEVBQStCaEMsV0FBL0I7QUFDRDs7QUFFRDBCLGNBQVEsQ0FBQ00sTUFBVCxDQUFnQixPQUFoQixFQUF5QjlCLEtBQXpCO0FBQ0F3QixjQUFRLENBQUNNLE1BQVQsQ0FBZ0IsVUFBaEIsRUFBNEI1QixRQUE1QjtBQUNBc0IsY0FBUSxDQUFDTSxNQUFULENBQWdCLFVBQWhCLEVBQTRCMUIsUUFBNUI7QUFDQW9CLGNBQVEsQ0FBQ00sTUFBVCxDQUFnQixZQUFoQixFQUE4QnhCLFNBQTlCO0FBR0FpQixvQkFBYyxHQUFHQyxRQUFqQjtBQUNBaEMsY0FBUSxDQUFDK0IsY0FBRCxFQUFpQmIsU0FBakIsQ0FBUjtBQUNELEtBN0JELENBNkJFLE9BQU9xQixLQUFQLEVBQWM7QUFDZEMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDRDtBQUNGLEdBakNEOztBQW1DQSxRQUFNRyxxQkFBcUIsR0FBSUMsS0FBRCxJQUFXO0FBQ3ZDMUIsYUFBUyxDQUFDMEIsS0FBRCxDQUFUO0FBQ0QsR0FGRDs7QUFJQUgsU0FBTyxDQUFDQyxHQUFSLENBQVluQyxXQUFaO0FBRUEsU0FDRTtBQUFLLGFBQVMsRUFBRXNDLGtFQUFNLENBQUNDLGtCQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxTQUFLLEVBQUU7QUFBRUMsV0FBSyxFQUFFO0FBQVQsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFFRSxNQUFDLFFBQUQ7QUFDSSxTQUFLLEVBQUUzQyxJQURYO0FBRUksWUFBUSxFQUFFaUIsZ0JBRmQ7QUFHSSxlQUFXLEVBQUMsZUFIaEI7QUFJSSxZQUFRLEVBQUU7QUFBRTJCLGFBQU8sRUFBRSxDQUFYO0FBQWNDLGFBQU8sRUFBRTtBQUF2QixLQUpkO0FBS0ksU0FBSyxFQUFFO0FBQUVDLGtCQUFZLEVBQUUsRUFBaEI7QUFBb0JILFdBQUssRUFBRTtBQUEzQixLQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQVNFO0FBQUcsU0FBSyxFQUFFO0FBQUVBLFdBQUssRUFBRTtBQUFULEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFURixFQVVFLE1BQUMsUUFBRDtBQUNJLFNBQUssRUFBRXhDLFdBRFg7QUFFSSxZQUFRLEVBQUVrQix1QkFGZDtBQUdJLGVBQVcsRUFBQyxxQkFIaEI7QUFJSSxZQUFRLEVBQUU7QUFBRXVCLGFBQU8sRUFBRSxDQUFYO0FBQWNDLGFBQU8sRUFBRTtBQUF2QixLQUpkO0FBS0ksU0FBSyxFQUFFO0FBQUVDLGtCQUFZLEVBQUUsRUFBaEI7QUFBb0JILFdBQUssRUFBRTtBQUEzQixLQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRixFQWlCSTtBQUFHLFNBQUssRUFBRTtBQUFFQSxXQUFLLEVBQUU7QUFBVCxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBakJKLEVBb0JJLE1BQUMsMkNBQUQ7QUFBUSxnQkFBWSxFQUFDLEVBQXJCO0FBQXdCLFNBQUssRUFBRTtBQUFFSSxXQUFLLEVBQUUsTUFBVDtBQUFpQkMscUJBQWUsRUFBRTtBQUFsQyxLQUEvQjtBQUFrRixZQUFRLEVBQUV2QixvQkFBNUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLMUIsVUFBVSxJQUFJQSxVQUFVLENBQUNrRCxHQUFYLENBQWUsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEtBQzNCO0FBQ0MsV0FBTyxNQUFDLE1BQUQ7QUFBUSxXQUFLLEVBQUVELElBQWY7QUFBcUIsU0FBRyxFQUFFQyxLQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWtDRCxJQUFsQyxDQUFQO0FBQ0EsR0FIVyxDQURuQixDQXBCSixFQTJCSTtBQUFHLFNBQUssRUFBRTtBQUFFUCxXQUFLLEVBQUU7QUFBVCxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EzQkosRUE0QkksTUFBQyxnREFBRDtBQUNJLGFBQVMsRUFBRXZCLEtBQUssSUFBSSxZQUFLQSxLQUFMLEVBQWFnQyxPQUFiLENBQXFCLHVCQUFyQixFQUE4QyxHQUE5QyxDQUR4QjtBQUVJLFVBQU0sRUFBRWhDLEtBQUssSUFBSUEsS0FBSyxDQUFDZ0MsT0FBTixDQUFjLGFBQWQsRUFBNkIsRUFBN0IsQ0FGckI7QUFHSSxTQUFLLEVBQUUvQyxLQUhYO0FBSUksU0FBSyxFQUFFO0FBQUV5QyxrQkFBWSxFQUFFLEVBQWhCO0FBQW9CRSxxQkFBZSxFQUFFLGFBQXJDO0FBQW9ETCxXQUFLLEVBQUUsT0FBM0Q7QUFBb0VJLFdBQUssRUFBRTtBQUEzRSxLQUpYO0FBS0ksWUFBUSxFQUFFekIsaUJBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTVCSixFQW1DSTtBQUFHLFNBQUssRUFBRTtBQUFFcUIsV0FBSyxFQUFFO0FBQVQsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQW5DSixFQW9DSSxNQUFDLGdEQUFEO0FBQ0ksU0FBSyxFQUFFdEMsS0FEWDtBQUVJLFNBQUssRUFBRTtBQUFFeUMsa0JBQVksRUFBRSxFQUFoQjtBQUFvQkUscUJBQWUsRUFBRSxhQUFyQztBQUFvREwsV0FBSyxFQUFFLE9BQTNEO0FBQW9FSSxXQUFLLEVBQUU7QUFBM0UsS0FGWDtBQUdJLFlBQVEsRUFBRXhCLGNBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXBDSixFQXlDSTtBQUFHLFNBQUssRUFBRTtBQUFFb0IsV0FBSyxFQUFFO0FBQVQsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXpDSixFQTBDSSxNQUFDLGdEQUFEO0FBQ0ksU0FBSyxFQUFFdEMsS0FEWDtBQUVJLFNBQUssRUFBRTtBQUFFeUMsa0JBQVksRUFBRSxFQUFoQjtBQUFvQkUscUJBQWUsRUFBRSxhQUFyQztBQUFvREwsV0FBSyxFQUFFLE9BQTNEO0FBQW9FSSxXQUFLLEVBQUU7QUFBM0UsS0FGWDtBQUdJLFlBQVEsRUFBRXZCLGdCQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUExQ0osRUFnREk7QUFBRyxTQUFLLEVBQUU7QUFBRW1CLFdBQUssRUFBRTtBQUFULEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FoREosRUFpREk7QUFBSyxhQUFTLEVBQUVGLGtFQUFNLENBQUNZLFVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHlEQUFEO0FBQVUsU0FBSyxFQUFFeEMsTUFBakI7QUFBeUIsWUFBUSxFQUFFMEIscUJBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQWpESixFQW9ESTtBQUFHLFNBQUssRUFBRTtBQUFFSSxXQUFLLEVBQUU7QUFBVCxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFwREosRUF1REksTUFBQywyQ0FBRDtBQUFRLGdCQUFZLEVBQUUsSUFBdEI7QUFBNEIsU0FBSyxFQUFFO0FBQUVJLFdBQUssRUFBRSxNQUFUO0FBQWlCQyxxQkFBZSxFQUFFLGFBQWxDO0FBQWlERixrQkFBWSxFQUFFO0FBQS9ELEtBQW5DO0FBQXdHLFlBQVEsRUFBRXBCLHFCQUFsSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxNQUFEO0FBQVEsU0FBSyxFQUFFLElBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLEVBRUksTUFBQyxNQUFEO0FBQVEsU0FBSyxFQUFFLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZKLENBdkRKLEVBMkRJO0FBQUssYUFBUyxFQUFFZSxrRUFBTSxDQUFDYSxpQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsMkNBQUQ7QUFBUSxRQUFJLEVBQUMsU0FBYjtBQUF1QixXQUFPLEVBQUV4RCxPQUFoQztBQUEwQyxXQUFPLEVBQUU2QixZQUFuRDtBQUFpRSxTQUFLLEVBQUU7QUFBRW9CLFdBQUssRUFBRSxNQUFUO0FBQWlCUSxjQUFRLEVBQUUsTUFBM0I7QUFBbUNDLFlBQU0sRUFBRSxNQUEzQztBQUFtREMsa0JBQVksRUFBRTtBQUFqRSxLQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLENBM0RKLENBREY7QUFvRUQ7O0dBcEpROUQsYTs7S0FBQUEsYTtBQXNKTUEsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS4yYzJhOWE2MDAyZTRjZGUyNWFkOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy9wcm9maWxlLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7IENhbWVyYU91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyBCdXR0b24sIFVwbG9hZCwgbWVzc2FnZSwgSW5wdXQsIFRhYnMsIFJhdGUsIElucHV0TnVtYmVyLCBTZWxlY3QgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IEFQSSBmcm9tICcuLi8uLi9jb25maWdzL0FQSSc7XHJcbmltcG9ydCB7IEZpbGVEcm9wIH0gZnJvbSAnY29tcG9uZW50cy9mb3Jtcyc7XHJcbmltcG9ydCB7IHNldCB9IGZyb20gJ2xvZGFzaCc7XHJcblxyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcclxuXHJcbmZ1bmN0aW9uIEFkZE1hcmtldEl0ZW0oeyBhdXRoLCBvblVwZGF0ZSwgbG9hZGluZywgY2F0ZWdvcmllcyB9KSB7XHJcbiAgXHJcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtwcmljZSwgc2V0UHJpY2VdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2NhdGVnb3J5LCBzZXRDYXRlZ29yeV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbbGF0aXR1ZGUsIHNldExhdGl0dWRlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtsb25naXR1ZGUsIHNldExvbmdpdHVkZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbYXNzZXRzLCBzZXRBc3NldHNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3NhbGVPckJ1eSwgc2V0U2FsZU9yQnV5XSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VUZXh0ID0gKGUpID0+IHtcclxuICAgIHNldFRleHQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZURlc2NyaXB0aW9uID0gKGUpID0+IHtcclxuICAgIHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VQcmljZSA9IChlKSA9PiB7XHJcbiAgICBzZXRQcmljZShlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VMYSA9IChlKSA9PiB7XHJcbiAgICAgIHNldExhdGl0dWRlKGUpXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VMb25nID0gKGUpID0+IHtcclxuICAgICAgc2V0TG9uZ2l0dWRlKGUpXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VDYXRlZ29yeSA9IChlKSA9PiB7XHJcbiAgICAgIHNldENhdGVnb3J5KGUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlU2FsZU9yQnV5ID0gKGUpID0+IHtcclxuICAgICAgc2V0U2FsZU9yQnV5KGUpXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgZGF0YUZvclJlcXVlc3Q7XHJcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhO1xyXG4gICAgIFxyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFzc2V0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChhc3NldHNbaV0udHlwZS5zcGxpdCgnLycpWzBdID09PSAnaW1hZ2UnKSB7XHJcbiAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ltYWdlcycsIGFzc2V0c1tpXSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndmlkZW9zJywgYXNzZXRzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFxyXG4gICAgICBpZiAodGV4dC5sZW5ndGggIT09IDApIHtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3RpdGxlJywgdGV4dClcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGRlc2NyaXB0aW9uLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZGVzY3JpcHRpb24nLCBkZXNjcmlwdGlvbilcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdwcmljZScsIHByaWNlKTtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdjYXRlZ29yeScsIGNhdGVnb3J5KTtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdsYXRpdHVkZScsIGxhdGl0dWRlKTtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdsb25ndGl0dWRlJywgbG9uZ2l0dWRlKTtcclxuXHJcbiAgICAgIFxyXG4gICAgICBkYXRhRm9yUmVxdWVzdCA9IGZvcm1EYXRhXHJcbiAgICAgIG9uVXBkYXRlKGRhdGFGb3JSZXF1ZXN0LCBzYWxlT3JCdXkpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVBob3RvRmlsZSA9IChmaWxlcykgPT4ge1xyXG4gICAgc2V0QXNzZXRzKGZpbGVzKTtcclxuICB9O1xyXG5cclxuICBjb25zb2xlLmxvZyhkZXNjcmlwdGlvbik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZE1hcmtldENvbnRhaW5lcn0+XHJcbiAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnfX0+VGl0bGU6PC9wPlxyXG4gICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgIHZhbHVlPXt0ZXh0fVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVRleHR9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIldyaXRlIGEgVGl0bGVcIlxyXG4gICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMiwgbWF4Um93czogNSB9fVxyXG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxMCwgY29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8cCBzdHlsZT17eyBjb2xvcjogJ3doaXRlJ319PkRlc2NyaXB0aW9uOjwvcD5cclxuICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlRGVzY3JpcHRpb259XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIldyaXRlIGEgRGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMiwgbWF4Um93czogNSB9fVxyXG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxMCwgY29sb3I6ICd3aGl0ZSd9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0+XHJcbiAgICAgICAgQ2F0ZWdvcnk6XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxTZWxlY3QgZGVmYXVsdFZhbHVlPVwiXCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnIH19IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VDYXRlZ29yeX0+XHJcbiAgICAgICAgICAgIHtjYXRlZ29yaWVzICYmIGNhdGVnb3JpZXMubWFwKChpdGVtLCBpbmRleCkgPT4gXHJcbiAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybig8T3B0aW9uIHZhbHVlPXtpdGVtfSBrZXk9e2luZGV4fT57aXRlbX08L09wdGlvbj4pXHJcbiAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZSd9fT5QcmljZTo8L3A+XHJcbiAgICAgICAgPElucHV0TnVtYmVyXHJcbiAgICAgICAgICAgIGZvcm1hdHRlcj17dmFsdWUgPT4gYCQgJHt2YWx1ZX1gLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9XHJcbiAgICAgICAgICAgIHBhcnNlcj17dmFsdWUgPT4gdmFsdWUucmVwbGFjZSgvXFwkXFxzP3woLCopL2csICcnKX1cclxuICAgICAgICAgICAgdmFsdWU9e3ByaWNlfVxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDEwLCBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsIGNvbG9yOiAnd2hpdGUnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VQcmljZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnfX0+TGF0aXR1ZGU6PC9wPlxyXG4gICAgICAgIDxJbnB1dE51bWJlclxyXG4gICAgICAgICAgICB2YWx1ZT17cHJpY2V9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTAsIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JywgY29sb3I6ICd3aGl0ZScsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUxhfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZSd9fT5Mb25ndGl0dWRlOjwvcD5cclxuICAgICAgICA8SW5wdXROdW1iZXJcclxuICAgICAgICAgICAgdmFsdWU9e3ByaWNlfVxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDEwLCBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsIGNvbG9yOiAnd2hpdGUnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VMb25nfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIFxyXG4gICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnfX0+TWFya2V0IEl0ZW0gUGhvdG8gb3IgVmlkZW9zPC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmlsZV9wbGFjZX0+XHJcbiAgICAgICAgICAgIDxGaWxlRHJvcCBmaWxlcz17YXNzZXRzfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlUGhvdG9GaWxlfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19PlxyXG4gICAgICAgIFR5cGU6XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxTZWxlY3QgZGVmYXVsdFZhbHVlPXt0cnVlfSBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsIG1hcmdpbkJvdHRvbTogMTAgfX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVNhbGVPckJ1eX0+XHJcbiAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e3RydWV9ID5TYWxlPC9PcHRpb24+XHJcbiAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2ZhbHNlfSA+QnV5PC9PcHRpb24+XHJcbiAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpb25zX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBsb2FkaW5nPXtsb2FkaW5nfSAgb25DbGljaz17aGFuZGxlU3VibWl0fSBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBmb250U2l6ZTogJzIwcHgnLCBoZWlnaHQ6ICc1MHB4JywgYm9yZGVyUmFkaXVzOiAnNnB4J319PlxyXG4gICAgICAgICAgICBBZGQgTWFya2V0IEl0ZW1cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRNYXJrZXRJdGVtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9