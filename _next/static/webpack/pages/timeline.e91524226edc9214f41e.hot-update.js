webpackHotUpdate_N_E("pages/timeline",{

/***/ "./components/profile/PhotosModal.js":
/*!*******************************************!*\
  !*** ./components/profile/PhotosModal.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PhotosModal; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-alice-carousel */ "./node_modules/react-alice-carousel/lib/react-alice-carousel.js");
/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_alice_carousel__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/photos_modal.module.scss */ "./components/profile/styles/photos_modal.module.scss");
/* harmony import */ var _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var components_common_PhotoModalWrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/common/PhotoModalWrapper */ "./components/common/PhotoModalWrapper.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var components_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/forms */ "./components/forms/index.js");






var _jsxFileName = "E:\\freeskies_fe_code\\components\\profile\\PhotosModal.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;








function PhotosModal(_ref) {
  _s();

  var _data$sliderIndex,
      _this = this,
      _ref3;

  var data = _ref.data,
      onRatePost = _ref.onRatePost,
      photoIndex = _ref.photoIndex,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref, ["data", "onRatePost", "photoIndex"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(2),
      sliderIndex = _useState[0],
      setSliderIndex = _useState[1];

  var handleOnDragStart = function handleOnDragStart(e) {
    return e.preventDefault();
  };

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      commentText = _useState2[0],
      setCommentText = _useState2[1];

  var slideNext = function slideNext() {
    return setSliderIndex(function (state) {
      return state + 1;
    });
  };

  var slidePrev = function slidePrev() {
    return setSliderIndex(function (state) {
      return state - 1;
    });
  };

  var onSlideChanged = function onSlideChanged(e) {
    return setSliderIndex(e.item);
  };

  var handleRatePhoto = function handleRatePhoto(rate) {
    onRatePost('Photo', data[sliderIndex].id, rate);
  };

  var handleChangeText = function handleChangeText(e) {
    setCommentText(e.target.value);
  };

  var handleEnterKey = function handleEnterKey(e) {
    if (e.nativeEvent.keyCode === 13) {
      e.preventDefault();
      onComment(type, id, commentText);
      setCommentText('');
    }
  };

  var onComment = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(type, postId, text) {
      var url, dataForRequest, formData, request, _data, status;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              url = '';
              formData = new FormData();
              formData.append('commented', postId); // if (files !== undefined) {
              //   for (var i = 0; i < files.length; i++) {
              //     if (files[i].type.split('/')[0] === 'image') {
              //       formData.append('image', files[i]);
              //     }
              //   }
              // }

              if (text.length !== 0) {
                formData.append('text', text);
              }

              dataForRequest = formData;
              _context.next = 8;
              return API({
                method: 'post',
                url: url,
                data: formData,
                headers: {
                  'x-token': token
                }
              });

            case 8:
              request = _context.sent;
              _data = request.data, status = request.status;

              if (!(status === 201)) {
                _context.next = 15;
                break;
              }

              onUpdateTimeline();
              message.success('Your comment published successfuly');
              _context.next = 17;
              break;

            case 15:
              message.error((_data === null || _data === void 0 ? void 0 : _data.message) || 'Something wrong');
              throw new Error();

            case 17:
              _context.next = 19;
              return request;

            case 19:
              return _context.abrupt("return", _context.sent);

            case 22:
              _context.prev = 22;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 25:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 22]]);
    }));

    return function onComment(_x, _x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();

  var roundRating = data.length !== 0 ? Math.round(((_data$sliderIndex = data[sliderIndex]) === null || _data$sliderIndex === void 0 ? void 0 : _data$sliderIndex.rating) || 0) : 0;
  console.log("sliderIndex", sliderIndex);
  return __jsx(components_common_PhotoModalWrapper__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.actions,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_11__["LeftOutlined"], {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.prev_action,
    onClick: function onClick() {
      return slidePrev();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_11__["RightOutlined"], {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.next_action,
    onClick: function onClick() {
      return slideNext();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  })), __jsx(react_alice_carousel__WEBPACK_IMPORTED_MODULE_7___default.a, {
    mouseTrackingEnabled: true,
    dotsDisabled: true,
    buttonsDisabled: true,
    slideToIndex: sliderIndex,
    onSlideChanged: onSlideChanged,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, data.map(function (item, index) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, item !== undefined && item.src !== null && __jsx("div", {
      className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.photo_container,
      key: item.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.photo,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 19
      }
    }, __jsx("img", {
      onDragStart: handleOnDragStart,
      src: "https://www.freeskies.com/static/".concat(item.src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 21
      }
    }))));
  })), data.length !== 0 && __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.rating_wrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 11
    }
  }, __jsx(components_forms__WEBPACK_IMPORTED_MODULE_12__["RatingSlide"], {
    defaultRate: roundRating,
    withoutText: true,
    onChange: handleRatePhoto,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  })), data.length !== 0 && __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.comment_box,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.input,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 11
    }
  }, __jsx(TextArea, {
    value: commentText,
    placeholder: "What do you mean?",
    rows: 2,
    onChange: handleChangeText,
    onKeyDown: handleEnterKey,
    style: (_ref3 = {
      borderRadius: 15
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, "borderRadius", 36), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, "height", 45), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, "paddingLeft", 30), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, "paddingTop", 10), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, "background", 'transparent'), _ref3),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 13
    }
  })))));
}

_s(PhotosModal, "5oQQukHjGGE3+7YNyOYjAIKP6tg=");

_c = PhotosModal;
PhotosModal.defaultProps = {
  data: []
};

var _c;

$RefreshReg$(_c, "PhotosModal");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlL1Bob3Rvc01vZGFsLmpzIl0sIm5hbWVzIjpbIlBob3Rvc01vZGFsIiwiZGF0YSIsIm9uUmF0ZVBvc3QiLCJwaG90b0luZGV4IiwicmVzdCIsInVzZVN0YXRlIiwic2xpZGVySW5kZXgiLCJzZXRTbGlkZXJJbmRleCIsImhhbmRsZU9uRHJhZ1N0YXJ0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29tbWVudFRleHQiLCJzZXRDb21tZW50VGV4dCIsInNsaWRlTmV4dCIsInN0YXRlIiwic2xpZGVQcmV2Iiwib25TbGlkZUNoYW5nZWQiLCJpdGVtIiwiaGFuZGxlUmF0ZVBob3RvIiwicmF0ZSIsImlkIiwiaGFuZGxlQ2hhbmdlVGV4dCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlRW50ZXJLZXkiLCJuYXRpdmVFdmVudCIsImtleUNvZGUiLCJvbkNvbW1lbnQiLCJ0eXBlIiwicG9zdElkIiwidGV4dCIsInVybCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJsZW5ndGgiLCJkYXRhRm9yUmVxdWVzdCIsIkFQSSIsIm1ldGhvZCIsImhlYWRlcnMiLCJ0b2tlbiIsInJlcXVlc3QiLCJzdGF0dXMiLCJvblVwZGF0ZVRpbWVsaW5lIiwibWVzc2FnZSIsInN1Y2Nlc3MiLCJlcnJvciIsIkVycm9yIiwiY29uc29sZSIsImxvZyIsInJvdW5kUmF0aW5nIiwiTWF0aCIsInJvdW5kIiwicmF0aW5nIiwic3R5bGVzIiwiY29udGFpbmVyIiwiYWN0aW9ucyIsInByZXZfYWN0aW9uIiwibmV4dF9hY3Rpb24iLCJtYXAiLCJpbmRleCIsInVuZGVmaW5lZCIsInNyYyIsInBob3RvX2NvbnRhaW5lciIsInBob3RvIiwicmF0aW5nX3dyYXBwZXIiLCJjb21tZW50X2JveCIsImF2YXRhciIsImlucHV0IiwiYm9yZGVyUmFkaXVzIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7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LCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGltZWxpbmUuZTkxNTI0MjI2ZWRjOTIxNGY0MWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdE1vZGFsIGZyb20gJ3JlYWN0LW1vZGFsJztcclxuaW1wb3J0IEFsaWNlQ2Fyb3VzZWwgZnJvbSAncmVhY3QtYWxpY2UtY2Fyb3VzZWwnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL3Bob3Rvc19tb2RhbC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBQaG90b01vZGFsV3JhcHBlciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9QaG90b01vZGFsV3JhcHBlcic7XHJcbmltcG9ydCB7IFJhdGUgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgTGVmdENpcmNsZUZpbGxlZCxcclxuICBSaWdodENpcmNsZUZpbGxlZCxcclxuICBMZWZ0T3V0bGluZWQsXHJcbiAgUmlnaHRPdXRsaW5lZCxcclxufSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IFJhdGluZ1NsaWRlIH0gZnJvbSAnY29tcG9uZW50cy9mb3Jtcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQaG90b3NNb2RhbCh7IGRhdGEsIG9uUmF0ZVBvc3QsIHBob3RvSW5kZXgsIC4uLnJlc3QgfSkge1xyXG4gIGNvbnN0IFtzbGlkZXJJbmRleCwgc2V0U2xpZGVySW5kZXhdID0gdXNlU3RhdGUoMik7XHJcbiAgY29uc3QgaGFuZGxlT25EcmFnU3RhcnQgPSAoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IFtjb21tZW50VGV4dCwgc2V0Q29tbWVudFRleHRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IHNsaWRlTmV4dCA9ICgpID0+IHNldFNsaWRlckluZGV4KChzdGF0ZSkgPT4gc3RhdGUgKyAxKTtcclxuICBjb25zdCBzbGlkZVByZXYgPSAoKSA9PiBzZXRTbGlkZXJJbmRleCgoc3RhdGUpID0+IHN0YXRlIC0gMSk7XHJcbiAgY29uc3Qgb25TbGlkZUNoYW5nZWQgPSAoZSkgPT4gc2V0U2xpZGVySW5kZXgoZS5pdGVtKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmF0ZVBob3RvID0gKHJhdGUpID0+IHtcclxuICAgIG9uUmF0ZVBvc3QoJ1Bob3RvJywgZGF0YVtzbGlkZXJJbmRleF0uaWQsIHJhdGUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVRleHQgPSAoZSkgPT4ge1xyXG4gICAgc2V0Q29tbWVudFRleHQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUVudGVyS2V5ID0gKGUpID0+IHtcclxuICAgIGlmIChlLm5hdGl2ZUV2ZW50LmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIG9uQ29tbWVudCh0eXBlLCBpZCwgY29tbWVudFRleHQpO1xyXG5cclxuICAgICAgc2V0Q29tbWVudFRleHQoJycpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQ29tbWVudCA9IGFzeW5jICh0eXBlLCBwb3N0SWQsIHRleHQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCB1cmwgPSAnJztcclxuICAgICAgbGV0IGRhdGFGb3JSZXF1ZXN0O1xyXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YTtcclxuXHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgnY29tbWVudGVkJywgcG9zdElkKVxyXG5cclxuICAgICAgLy8gaWYgKGZpbGVzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgLy8gICBmb3IgKHZhciBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIC8vICAgICBpZiAoZmlsZXNbaV0udHlwZS5zcGxpdCgnLycpWzBdID09PSAnaW1hZ2UnKSB7XHJcbiAgICAgIC8vICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBmaWxlc1tpXSk7XHJcbiAgICAgIC8vICAgICB9XHJcbiAgICAgIC8vICAgfVxyXG4gICAgICAvLyB9XHJcbiAgICAgIFxyXG4gICAgICBpZiAodGV4dC5sZW5ndGggIT09IDApIHtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3RleHQnLCB0ZXh0KVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBkYXRhRm9yUmVxdWVzdCA9IGZvcm1EYXRhXHJcblxyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmwsXHJcbiAgICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IHRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcblxyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICBvblVwZGF0ZVRpbWVsaW5lKCk7XHJcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKCdZb3VyIGNvbW1lbnQgcHVibGlzaGVkIHN1Y2Nlc3NmdWx5Jyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGF3YWl0IHJlcXVlc3Q7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgcm91bmRSYXRpbmcgPSBkYXRhLmxlbmd0aCAhPT0gMCA/IE1hdGgucm91bmQoZGF0YVtzbGlkZXJJbmRleF0/LnJhdGluZyB8fCAwKSA6IDBcclxuICBjb25zb2xlLmxvZyhcInNsaWRlckluZGV4XCIsIHNsaWRlckluZGV4KTtcclxuICByZXR1cm4gKFxyXG4gICAgPFBob3RvTW9kYWxXcmFwcGVyIHsuLi5yZXN0fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uc30+XHJcbiAgICAgICAgICA8TGVmdE91dGxpbmVkXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnByZXZfYWN0aW9ufVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzbGlkZVByZXYoKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8UmlnaHRPdXRsaW5lZFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5uZXh0X2FjdGlvbn1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2xpZGVOZXh0KCl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxBbGljZUNhcm91c2VsXHJcbiAgICAgICAgICBtb3VzZVRyYWNraW5nRW5hYmxlZFxyXG4gICAgICAgICAgZG90c0Rpc2FibGVkXHJcbiAgICAgICAgICBidXR0b25zRGlzYWJsZWRcclxuICAgICAgICAgIHNsaWRlVG9JbmRleD17c2xpZGVySW5kZXh9XHJcbiAgICAgICAgICBvblNsaWRlQ2hhbmdlZD17b25TbGlkZUNoYW5nZWR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIHtpdGVtICE9PSB1bmRlZmluZWQgJiYgaXRlbS5zcmMgIT09IG51bGwgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5waG90b19jb250YWluZXJ9IGtleT17aXRlbS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG99PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIG9uRHJhZ1N0YXJ0PXtoYW5kbGVPbkRyYWdTdGFydH1cclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aXRlbS5zcmN9YH1cclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvQWxpY2VDYXJvdXNlbD5cclxuXHJcbiAgICAgICAge2RhdGEubGVuZ3RoICE9PSAwICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmF0aW5nX3dyYXBwZXJ9PlxyXG4gICAgICAgICAgICA8UmF0aW5nU2xpZGVcclxuICAgICAgICAgICAgZGVmYXVsdFJhdGU9e3JvdW5kUmF0aW5nfVxyXG4gICAgICAgICAgICB3aXRob3V0VGV4dFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUmF0ZVBob3RvfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge2RhdGEubGVuZ3RoICE9PSAwICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnRfYm94fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyfT5cclxuICAgICAgICAgICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0+XHJcbiAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtjb21tZW50VGV4dH1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgZG8geW91IG1lYW4/XCJcclxuICAgICAgICAgICAgICByb3dzPXsyfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VUZXh0fVxyXG4gICAgICAgICAgICAgIG9uS2V5RG93bj17aGFuZGxlRW50ZXJLZXl9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiAxNSwgYm9yZGVyUmFkaXVzOiAzNiwgaGVpZ2h0OiA0NSwgcGFkZGluZ0xlZnQ6IDMwLCBwYWRkaW5nVG9wOiAxMCwgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50J319XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvUGhvdG9Nb2RhbFdyYXBwZXI+XHJcbiAgKTtcclxufVxyXG5cclxuUGhvdG9zTW9kYWwuZGVmYXVsdFByb3BzID0ge1xyXG4gIGRhdGE6IFtdLFxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==