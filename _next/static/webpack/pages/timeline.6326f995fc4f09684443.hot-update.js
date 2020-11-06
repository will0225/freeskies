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
/* harmony import */ var configs_API__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! configs/API */ "./configs/API.js");






var _jsxFileName = "E:\\freeskies_fe_code\\components\\profile\\PhotosModal.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;









var TextArea = antd__WEBPACK_IMPORTED_MODULE_10__["Input"].TextArea;

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
      onComment(data[sliderIndex].id, commentText);
      setCommentText('');
    }
  };

  var onComment = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(postId, text) {
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

              url = '/photos/comment';

              if (text.length !== 0) {
                formData.append('text', text);
              }

              dataForRequest = formData;
              _context.next = 9;
              return Object(configs_API__WEBPACK_IMPORTED_MODULE_13__["default"])({
                method: 'post',
                url: url,
                data: formData,
                headers: {
                  'x-token': 'token'
                }
              });

            case 9:
              request = _context.sent;
              _data = request.data, status = request.status;

              if (!(status === 201)) {
                _context.next = 16;
                break;
              }

              onUpdateTimeline();
              message.success('Your comment published successfuly');
              _context.next = 18;
              break;

            case 16:
              message.error((_data === null || _data === void 0 ? void 0 : _data.message) || 'Something wrong');
              throw new Error();

            case 18:
              _context.next = 20;
              return request;

            case 20:
              return _context.abrupt("return", _context.sent);

            case 23:
              _context.prev = 23;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 26:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 23]]);
    }));

    return function onComment(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var roundRating = data.length !== 0 ? Math.round(((_data$sliderIndex = data[sliderIndex]) === null || _data$sliderIndex === void 0 ? void 0 : _data$sliderIndex.rating) || 0) : 0;
  console.log("sliderIndex", sliderIndex);
  return __jsx(components_common_PhotoModalWrapper__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.actions,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
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
      lineNumber: 95,
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
      lineNumber: 99,
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
      lineNumber: 104,
      columnNumber: 9
    }
  }, data.map(function (item, index) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, item !== undefined && item.src !== null && __jsx("div", {
      className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.photo_container,
      key: item.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.photo,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 19
      }
    }, __jsx("img", {
      onDragStart: handleOnDragStart,
      src: "https://www.freeskies.com/static/".concat(item.src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 21
      }
    }))));
  })), data.length !== 0 && __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.comment_box,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.input,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
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
      lineNumber: 133,
      columnNumber: 13
    }
  }))), data.length !== 0 && __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.rating_wrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 11
    }
  }, __jsx(components_forms__WEBPACK_IMPORTED_MODULE_12__["RatingSlide"], {
    defaultRate: roundRating,
    withoutText: true,
    onChange: handleRatePhoto,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }
  }))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlL1Bob3Rvc01vZGFsLmpzIl0sIm5hbWVzIjpbIlRleHRBcmVhIiwiSW5wdXQiLCJQaG90b3NNb2RhbCIsImRhdGEiLCJvblJhdGVQb3N0IiwicGhvdG9JbmRleCIsInJlc3QiLCJ1c2VTdGF0ZSIsInNsaWRlckluZGV4Iiwic2V0U2xpZGVySW5kZXgiLCJoYW5kbGVPbkRyYWdTdGFydCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbW1lbnRUZXh0Iiwic2V0Q29tbWVudFRleHQiLCJzbGlkZU5leHQiLCJzdGF0ZSIsInNsaWRlUHJldiIsIm9uU2xpZGVDaGFuZ2VkIiwiaXRlbSIsImhhbmRsZVJhdGVQaG90byIsInJhdGUiLCJpZCIsImhhbmRsZUNoYW5nZVRleHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUVudGVyS2V5IiwibmF0aXZlRXZlbnQiLCJrZXlDb2RlIiwib25Db21tZW50IiwicG9zdElkIiwidGV4dCIsInVybCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJsZW5ndGgiLCJkYXRhRm9yUmVxdWVzdCIsIkFQSSIsIm1ldGhvZCIsImhlYWRlcnMiLCJyZXF1ZXN0Iiwic3RhdHVzIiwib25VcGRhdGVUaW1lbGluZSIsIm1lc3NhZ2UiLCJzdWNjZXNzIiwiZXJyb3IiLCJFcnJvciIsImNvbnNvbGUiLCJsb2ciLCJyb3VuZFJhdGluZyIsIk1hdGgiLCJyb3VuZCIsInJhdGluZyIsInN0eWxlcyIsImNvbnRhaW5lciIsImFjdGlvbnMiLCJwcmV2X2FjdGlvbiIsIm5leHRfYWN0aW9uIiwibWFwIiwiaW5kZXgiLCJ1bmRlZmluZWQiLCJzcmMiLCJwaG90b19jb250YWluZXIiLCJwaG90byIsImNvbW1lbnRfYm94IiwiYXZhdGFyIiwiaW5wdXQiLCJib3JkZXJSYWRpdXMiLCJyYXRpbmdfd3JhcHBlciIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7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Vzs7S0FBQUEsVztBQTRJeEJBLFdBQVcsQ0FBQ29FLFlBQVosR0FBMkI7QUFDekJuRSxNQUFJLEVBQUU7QUFEbUIsQ0FBM0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGltZWxpbmUuNjMyNmY5OTVmYzRmMDk2ODQ0NDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdE1vZGFsIGZyb20gJ3JlYWN0LW1vZGFsJztcclxuaW1wb3J0IEFsaWNlQ2Fyb3VzZWwgZnJvbSAncmVhY3QtYWxpY2UtY2Fyb3VzZWwnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL3Bob3Rvc19tb2RhbC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBQaG90b01vZGFsV3JhcHBlciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9QaG90b01vZGFsV3JhcHBlcic7XHJcbmltcG9ydCB7IFJhdGUgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgTGVmdENpcmNsZUZpbGxlZCxcclxuICBSaWdodENpcmNsZUZpbGxlZCxcclxuICBMZWZ0T3V0bGluZWQsXHJcbiAgUmlnaHRPdXRsaW5lZCxcclxufSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IFJhdGluZ1NsaWRlIH0gZnJvbSAnY29tcG9uZW50cy9mb3Jtcyc7XHJcbmltcG9ydCB7IElucHV0LCBQb3BvdmVyIH0gZnJvbSAnYW50ZCc7XHJcbmNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0O1xyXG5pbXBvcnQgQVBJIGZyb20gJ2NvbmZpZ3MvQVBJJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBob3Rvc01vZGFsKHsgZGF0YSwgb25SYXRlUG9zdCwgcGhvdG9JbmRleCwgLi4ucmVzdCB9KSB7XHJcbiAgY29uc3QgW3NsaWRlckluZGV4LCBzZXRTbGlkZXJJbmRleF0gPSB1c2VTdGF0ZSgyKTtcclxuICBjb25zdCBoYW5kbGVPbkRyYWdTdGFydCA9IChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgW2NvbW1lbnRUZXh0LCBzZXRDb21tZW50VGV4dF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3Qgc2xpZGVOZXh0ID0gKCkgPT4gc2V0U2xpZGVySW5kZXgoKHN0YXRlKSA9PiBzdGF0ZSArIDEpO1xyXG4gIGNvbnN0IHNsaWRlUHJldiA9ICgpID0+IHNldFNsaWRlckluZGV4KChzdGF0ZSkgPT4gc3RhdGUgLSAxKTtcclxuICBjb25zdCBvblNsaWRlQ2hhbmdlZCA9IChlKSA9PiBzZXRTbGlkZXJJbmRleChlLml0ZW0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVSYXRlUGhvdG8gPSAocmF0ZSkgPT4ge1xyXG4gICAgb25SYXRlUG9zdCgnUGhvdG8nLCBkYXRhW3NsaWRlckluZGV4XS5pZCwgcmF0ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlVGV4dCA9IChlKSA9PiB7XHJcbiAgICBzZXRDb21tZW50VGV4dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRW50ZXJLZXkgPSAoZSkgPT4ge1xyXG4gICAgaWYgKGUubmF0aXZlRXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgb25Db21tZW50KGRhdGFbc2xpZGVySW5kZXhdLmlkLCBjb21tZW50VGV4dCk7XHJcblxyXG4gICAgICBzZXRDb21tZW50VGV4dCgnJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25Db21tZW50ID0gYXN5bmMgKHBvc3RJZCwgdGV4dCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IHVybCA9ICcnO1xyXG4gICAgICBsZXQgZGF0YUZvclJlcXVlc3Q7XHJcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhO1xyXG5cclxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdjb21tZW50ZWQnLCBwb3N0SWQpXHJcblxyXG4gICAgICAvLyBpZiAoZmlsZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAvLyAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgLy8gICAgIGlmIChmaWxlc1tpXS50eXBlLnNwbGl0KCcvJylbMF0gPT09ICdpbWFnZScpIHtcclxuICAgICAgLy8gICAgICAgZm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIGZpbGVzW2ldKTtcclxuICAgICAgLy8gICAgIH1cclxuICAgICAgLy8gICB9XHJcbiAgICAgIC8vIH1cclxuICAgICAgdXJsID0gJy9waG90b3MvY29tbWVudCdcclxuICAgICAgaWYgKHRleHQubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd0ZXh0JywgdGV4dClcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgZGF0YUZvclJlcXVlc3QgPSBmb3JtRGF0YVxyXG5cclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsLFxyXG4gICAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiAndG9rZW4nIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcblxyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICBvblVwZGF0ZVRpbWVsaW5lKCk7XHJcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKCdZb3VyIGNvbW1lbnQgcHVibGlzaGVkIHN1Y2Nlc3NmdWx5Jyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGF3YWl0IHJlcXVlc3Q7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgcm91bmRSYXRpbmcgPSBkYXRhLmxlbmd0aCAhPT0gMCA/IE1hdGgucm91bmQoZGF0YVtzbGlkZXJJbmRleF0/LnJhdGluZyB8fCAwKSA6IDBcclxuICBjb25zb2xlLmxvZyhcInNsaWRlckluZGV4XCIsIHNsaWRlckluZGV4KTtcclxuICByZXR1cm4gKFxyXG4gICAgPFBob3RvTW9kYWxXcmFwcGVyIHsuLi5yZXN0fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uc30+XHJcbiAgICAgICAgICA8TGVmdE91dGxpbmVkXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnByZXZfYWN0aW9ufVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzbGlkZVByZXYoKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8UmlnaHRPdXRsaW5lZFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5uZXh0X2FjdGlvbn1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2xpZGVOZXh0KCl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxBbGljZUNhcm91c2VsXHJcbiAgICAgICAgICBtb3VzZVRyYWNraW5nRW5hYmxlZFxyXG4gICAgICAgICAgZG90c0Rpc2FibGVkXHJcbiAgICAgICAgICBidXR0b25zRGlzYWJsZWRcclxuICAgICAgICAgIHNsaWRlVG9JbmRleD17c2xpZGVySW5kZXh9XHJcbiAgICAgICAgICBvblNsaWRlQ2hhbmdlZD17b25TbGlkZUNoYW5nZWR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIHtpdGVtICE9PSB1bmRlZmluZWQgJiYgaXRlbS5zcmMgIT09IG51bGwgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5waG90b19jb250YWluZXJ9IGtleT17aXRlbS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG99PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIG9uRHJhZ1N0YXJ0PXtoYW5kbGVPbkRyYWdTdGFydH1cclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aXRlbS5zcmN9YH1cclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvQWxpY2VDYXJvdXNlbD5cclxuICAgICAgICB7ZGF0YS5sZW5ndGggIT09IDAgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tbWVudF9ib3h9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9PlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fT5cclxuICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2NvbW1lbnRUZXh0fVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBkbyB5b3UgbWVhbj9cIlxyXG4gICAgICAgICAgICAgIHJvd3M9ezJ9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVRleHR9XHJcbiAgICAgICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVFbnRlcktleX1cclxuICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJSYWRpdXM6IDE1LCBib3JkZXJSYWRpdXM6IDM2LCBoZWlnaHQ6IDQ1LCBwYWRkaW5nTGVmdDogMzAsIHBhZGRpbmdUb3A6IDEwLCBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2Pil9XHJcbiAgICAgICAge2RhdGEubGVuZ3RoICE9PSAwICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmF0aW5nX3dyYXBwZXJ9PlxyXG4gICAgICAgICAgICA8UmF0aW5nU2xpZGVcclxuICAgICAgICAgICAgZGVmYXVsdFJhdGU9e3JvdW5kUmF0aW5nfVxyXG4gICAgICAgICAgICB3aXRob3V0VGV4dFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUmF0ZVBob3RvfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9QaG90b01vZGFsV3JhcHBlcj5cclxuICApO1xyXG59XHJcblxyXG5QaG90b3NNb2RhbC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgZGF0YTogW10sXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9