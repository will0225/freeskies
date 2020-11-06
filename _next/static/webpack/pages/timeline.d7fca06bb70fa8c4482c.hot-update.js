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

              url = '/api/photos/comment';

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
                  'x-token': token
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlL1Bob3Rvc01vZGFsLmpzIl0sIm5hbWVzIjpbIlRleHRBcmVhIiwiSW5wdXQiLCJQaG90b3NNb2RhbCIsImRhdGEiLCJvblJhdGVQb3N0IiwicGhvdG9JbmRleCIsInJlc3QiLCJ1c2VTdGF0ZSIsInNsaWRlckluZGV4Iiwic2V0U2xpZGVySW5kZXgiLCJoYW5kbGVPbkRyYWdTdGFydCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbW1lbnRUZXh0Iiwic2V0Q29tbWVudFRleHQiLCJzbGlkZU5leHQiLCJzdGF0ZSIsInNsaWRlUHJldiIsIm9uU2xpZGVDaGFuZ2VkIiwiaXRlbSIsImhhbmRsZVJhdGVQaG90byIsInJhdGUiLCJpZCIsImhhbmRsZUNoYW5nZVRleHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUVudGVyS2V5IiwibmF0aXZlRXZlbnQiLCJrZXlDb2RlIiwib25Db21tZW50IiwicG9zdElkIiwidGV4dCIsInVybCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJsZW5ndGgiLCJkYXRhRm9yUmVxdWVzdCIsIkFQSSIsIm1ldGhvZCIsImhlYWRlcnMiLCJ0b2tlbiIsInJlcXVlc3QiLCJzdGF0dXMiLCJvblVwZGF0ZVRpbWVsaW5lIiwibWVzc2FnZSIsInN1Y2Nlc3MiLCJlcnJvciIsIkVycm9yIiwiY29uc29sZSIsImxvZyIsInJvdW5kUmF0aW5nIiwiTWF0aCIsInJvdW5kIiwicmF0aW5nIiwic3R5bGVzIiwiY29udGFpbmVyIiwiYWN0aW9ucyIsInByZXZfYWN0aW9uIiwibmV4dF9hY3Rpb24iLCJtYXAiLCJpbmRleCIsInVuZGVmaW5lZCIsInNyYyIsInBob3RvX2NvbnRhaW5lciIsInBob3RvIiwiY29tbWVudF9ib3giLCJhdmF0YXIiLCJpbnB1dCIsImJvcmRlclJhZGl1cyIsInJhdGluZ193cmFwcGVyIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7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O0dBMUl1QmxCLFc7O0tBQUFBLFc7QUE0SXhCQSxXQUFXLENBQUNxRSxZQUFaLEdBQTJCO0FBQ3pCcEUsTUFBSSxFQUFFO0FBRG1CLENBQTNCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3RpbWVsaW5lLmQ3ZmNhMDZiYjcwZmE4YzQ0ODJjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3RNb2RhbCBmcm9tICdyZWFjdC1tb2RhbCc7XHJcbmltcG9ydCBBbGljZUNhcm91c2VsIGZyb20gJ3JlYWN0LWFsaWNlLWNhcm91c2VsJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy9waG90b3NfbW9kYWwubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgUGhvdG9Nb2RhbFdyYXBwZXIgZnJvbSAnY29tcG9uZW50cy9jb21tb24vUGhvdG9Nb2RhbFdyYXBwZXInO1xyXG5pbXBvcnQgeyBSYXRlIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIExlZnRDaXJjbGVGaWxsZWQsXHJcbiAgUmlnaHRDaXJjbGVGaWxsZWQsXHJcbiAgTGVmdE91dGxpbmVkLFxyXG4gIFJpZ2h0T3V0bGluZWQsXHJcbn0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyBSYXRpbmdTbGlkZSB9IGZyb20gJ2NvbXBvbmVudHMvZm9ybXMnO1xyXG5pbXBvcnQgeyBJbnB1dCwgUG9wb3ZlciB9IGZyb20gJ2FudGQnO1xyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuaW1wb3J0IEFQSSBmcm9tICdjb25maWdzL0FQSSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQaG90b3NNb2RhbCh7IGRhdGEsIG9uUmF0ZVBvc3QsIHBob3RvSW5kZXgsIC4uLnJlc3QgfSkge1xyXG4gIGNvbnN0IFtzbGlkZXJJbmRleCwgc2V0U2xpZGVySW5kZXhdID0gdXNlU3RhdGUoMik7XHJcbiAgY29uc3QgaGFuZGxlT25EcmFnU3RhcnQgPSAoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IFtjb21tZW50VGV4dCwgc2V0Q29tbWVudFRleHRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IHNsaWRlTmV4dCA9ICgpID0+IHNldFNsaWRlckluZGV4KChzdGF0ZSkgPT4gc3RhdGUgKyAxKTtcclxuICBjb25zdCBzbGlkZVByZXYgPSAoKSA9PiBzZXRTbGlkZXJJbmRleCgoc3RhdGUpID0+IHN0YXRlIC0gMSk7XHJcbiAgY29uc3Qgb25TbGlkZUNoYW5nZWQgPSAoZSkgPT4gc2V0U2xpZGVySW5kZXgoZS5pdGVtKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmF0ZVBob3RvID0gKHJhdGUpID0+IHtcclxuICAgIG9uUmF0ZVBvc3QoJ1Bob3RvJywgZGF0YVtzbGlkZXJJbmRleF0uaWQsIHJhdGUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVRleHQgPSAoZSkgPT4ge1xyXG4gICAgc2V0Q29tbWVudFRleHQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUVudGVyS2V5ID0gKGUpID0+IHtcclxuICAgIGlmIChlLm5hdGl2ZUV2ZW50LmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIG9uQ29tbWVudChkYXRhW3NsaWRlckluZGV4XS5pZCwgY29tbWVudFRleHQpO1xyXG5cclxuICAgICAgc2V0Q29tbWVudFRleHQoJycpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQ29tbWVudCA9IGFzeW5jIChwb3N0SWQsIHRleHQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCB1cmwgPSAnJztcclxuICAgICAgbGV0IGRhdGFGb3JSZXF1ZXN0O1xyXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YTtcclxuXHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgnY29tbWVudGVkJywgcG9zdElkKVxyXG5cclxuICAgICAgLy8gaWYgKGZpbGVzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgLy8gICBmb3IgKHZhciBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIC8vICAgICBpZiAoZmlsZXNbaV0udHlwZS5zcGxpdCgnLycpWzBdID09PSAnaW1hZ2UnKSB7XHJcbiAgICAgIC8vICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBmaWxlc1tpXSk7XHJcbiAgICAgIC8vICAgICB9XHJcbiAgICAgIC8vICAgfVxyXG4gICAgICAvLyB9XHJcbiAgICAgIHVybCA9ICcvYXBpL3Bob3Rvcy9jb21tZW50J1xyXG4gICAgICBpZiAodGV4dC5sZW5ndGggIT09IDApIHtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3RleHQnLCB0ZXh0KVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBkYXRhRm9yUmVxdWVzdCA9IGZvcm1EYXRhXHJcblxyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmwsXHJcbiAgICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IHRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcblxyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICBvblVwZGF0ZVRpbWVsaW5lKCk7XHJcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKCdZb3VyIGNvbW1lbnQgcHVibGlzaGVkIHN1Y2Nlc3NmdWx5Jyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGF3YWl0IHJlcXVlc3Q7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgcm91bmRSYXRpbmcgPSBkYXRhLmxlbmd0aCAhPT0gMCA/IE1hdGgucm91bmQoZGF0YVtzbGlkZXJJbmRleF0/LnJhdGluZyB8fCAwKSA6IDBcclxuICBjb25zb2xlLmxvZyhcInNsaWRlckluZGV4XCIsIHNsaWRlckluZGV4KTtcclxuICByZXR1cm4gKFxyXG4gICAgPFBob3RvTW9kYWxXcmFwcGVyIHsuLi5yZXN0fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uc30+XHJcbiAgICAgICAgICA8TGVmdE91dGxpbmVkXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnByZXZfYWN0aW9ufVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzbGlkZVByZXYoKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8UmlnaHRPdXRsaW5lZFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5uZXh0X2FjdGlvbn1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2xpZGVOZXh0KCl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxBbGljZUNhcm91c2VsXHJcbiAgICAgICAgICBtb3VzZVRyYWNraW5nRW5hYmxlZFxyXG4gICAgICAgICAgZG90c0Rpc2FibGVkXHJcbiAgICAgICAgICBidXR0b25zRGlzYWJsZWRcclxuICAgICAgICAgIHNsaWRlVG9JbmRleD17c2xpZGVySW5kZXh9XHJcbiAgICAgICAgICBvblNsaWRlQ2hhbmdlZD17b25TbGlkZUNoYW5nZWR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIHtpdGVtICE9PSB1bmRlZmluZWQgJiYgaXRlbS5zcmMgIT09IG51bGwgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5waG90b19jb250YWluZXJ9IGtleT17aXRlbS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG99PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIG9uRHJhZ1N0YXJ0PXtoYW5kbGVPbkRyYWdTdGFydH1cclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aXRlbS5zcmN9YH1cclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvQWxpY2VDYXJvdXNlbD5cclxuICAgICAgICB7ZGF0YS5sZW5ndGggIT09IDAgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tbWVudF9ib3h9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9PlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fT5cclxuICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2NvbW1lbnRUZXh0fVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBkbyB5b3UgbWVhbj9cIlxyXG4gICAgICAgICAgICAgIHJvd3M9ezJ9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVRleHR9XHJcbiAgICAgICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVFbnRlcktleX1cclxuICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJSYWRpdXM6IDE1LCBib3JkZXJSYWRpdXM6IDM2LCBoZWlnaHQ6IDQ1LCBwYWRkaW5nTGVmdDogMzAsIHBhZGRpbmdUb3A6IDEwLCBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2Pil9XHJcbiAgICAgICAge2RhdGEubGVuZ3RoICE9PSAwICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmF0aW5nX3dyYXBwZXJ9PlxyXG4gICAgICAgICAgICA8UmF0aW5nU2xpZGVcclxuICAgICAgICAgICAgZGVmYXVsdFJhdGU9e3JvdW5kUmF0aW5nfVxyXG4gICAgICAgICAgICB3aXRob3V0VGV4dFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUmF0ZVBob3RvfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9QaG90b01vZGFsV3JhcHBlcj5cclxuICApO1xyXG59XHJcblxyXG5QaG90b3NNb2RhbC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgZGF0YTogW10sXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9