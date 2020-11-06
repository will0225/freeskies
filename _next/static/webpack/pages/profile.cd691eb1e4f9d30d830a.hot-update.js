webpackHotUpdate_N_E("pages/profile",{

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
      onComment(id, commentText);
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
              return API({
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
      lineNumber: 91,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.actions,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
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
      lineNumber: 94,
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
      lineNumber: 98,
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
      lineNumber: 103,
      columnNumber: 9
    }
  }, data.map(function (item, index) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, item !== undefined && item.src !== null && __jsx("div", {
      className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.photo_container,
      key: item.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.photo,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 19
      }
    }, __jsx("img", {
      onDragStart: handleOnDragStart,
      src: "https://www.freeskies.com/static/".concat(item.src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 21
      }
    }))));
  })), data.length !== 0 && __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.comment_box,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.input,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
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
      lineNumber: 132,
      columnNumber: 13
    }
  }))), data.length !== 0 && __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.rating_wrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 11
    }
  }, __jsx(components_forms__WEBPACK_IMPORTED_MODULE_12__["RatingSlide"], {
    defaultRate: roundRating,
    withoutText: true,
    onChange: handleRatePhoto,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlL1Bob3Rvc01vZGFsLmpzIl0sIm5hbWVzIjpbIlRleHRBcmVhIiwiSW5wdXQiLCJQaG90b3NNb2RhbCIsImRhdGEiLCJvblJhdGVQb3N0IiwicGhvdG9JbmRleCIsInJlc3QiLCJ1c2VTdGF0ZSIsInNsaWRlckluZGV4Iiwic2V0U2xpZGVySW5kZXgiLCJoYW5kbGVPbkRyYWdTdGFydCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbW1lbnRUZXh0Iiwic2V0Q29tbWVudFRleHQiLCJzbGlkZU5leHQiLCJzdGF0ZSIsInNsaWRlUHJldiIsIm9uU2xpZGVDaGFuZ2VkIiwiaXRlbSIsImhhbmRsZVJhdGVQaG90byIsInJhdGUiLCJpZCIsImhhbmRsZUNoYW5nZVRleHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUVudGVyS2V5IiwibmF0aXZlRXZlbnQiLCJrZXlDb2RlIiwib25Db21tZW50IiwicG9zdElkIiwidGV4dCIsInVybCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJsZW5ndGgiLCJkYXRhRm9yUmVxdWVzdCIsIkFQSSIsIm1ldGhvZCIsImhlYWRlcnMiLCJ0b2tlbiIsInJlcXVlc3QiLCJzdGF0dXMiLCJvblVwZGF0ZVRpbWVsaW5lIiwibWVzc2FnZSIsInN1Y2Nlc3MiLCJlcnJvciIsIkVycm9yIiwiY29uc29sZSIsImxvZyIsInJvdW5kUmF0aW5nIiwiTWF0aCIsInJvdW5kIiwicmF0aW5nIiwic3R5bGVzIiwiY29udGFpbmVyIiwiYWN0aW9ucyIsInByZXZfYWN0aW9uIiwibmV4dF9hY3Rpb24iLCJtYXAiLCJpbmRleCIsInVuZGVmaW5lZCIsInNyYyIsInBob3RvX2NvbnRhaW5lciIsInBob3RvIiwiY29tbWVudF9ib3giLCJhdmF0YXIiLCJpbnB1dCIsImJvcmRlclJhZGl1cyIsInJhdGluZ193cmFwcGVyIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7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RSxZQUFaLEdBQTJCO0FBQ3pCcEUsTUFBSSxFQUFFO0FBRG1CLENBQTNCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuY2Q2OTFlYjFlNGY5ZDMwZDgzMGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdE1vZGFsIGZyb20gJ3JlYWN0LW1vZGFsJztcclxuaW1wb3J0IEFsaWNlQ2Fyb3VzZWwgZnJvbSAncmVhY3QtYWxpY2UtY2Fyb3VzZWwnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL3Bob3Rvc19tb2RhbC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBQaG90b01vZGFsV3JhcHBlciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9QaG90b01vZGFsV3JhcHBlcic7XHJcbmltcG9ydCB7IFJhdGUgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgTGVmdENpcmNsZUZpbGxlZCxcclxuICBSaWdodENpcmNsZUZpbGxlZCxcclxuICBMZWZ0T3V0bGluZWQsXHJcbiAgUmlnaHRPdXRsaW5lZCxcclxufSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IFJhdGluZ1NsaWRlIH0gZnJvbSAnY29tcG9uZW50cy9mb3Jtcyc7XHJcbmltcG9ydCB7IElucHV0LCBQb3BvdmVyIH0gZnJvbSAnYW50ZCc7XHJcbmNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGhvdG9zTW9kYWwoeyBkYXRhLCBvblJhdGVQb3N0LCBwaG90b0luZGV4LCAuLi5yZXN0IH0pIHtcclxuICBjb25zdCBbc2xpZGVySW5kZXgsIHNldFNsaWRlckluZGV4XSA9IHVzZVN0YXRlKDIpO1xyXG4gIGNvbnN0IGhhbmRsZU9uRHJhZ1N0YXJ0ID0gKGUpID0+IGUucHJldmVudERlZmF1bHQoKTtcclxuICBjb25zdCBbY29tbWVudFRleHQsIHNldENvbW1lbnRUZXh0XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBzbGlkZU5leHQgPSAoKSA9PiBzZXRTbGlkZXJJbmRleCgoc3RhdGUpID0+IHN0YXRlICsgMSk7XHJcbiAgY29uc3Qgc2xpZGVQcmV2ID0gKCkgPT4gc2V0U2xpZGVySW5kZXgoKHN0YXRlKSA9PiBzdGF0ZSAtIDEpO1xyXG4gIGNvbnN0IG9uU2xpZGVDaGFuZ2VkID0gKGUpID0+IHNldFNsaWRlckluZGV4KGUuaXRlbSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJhdGVQaG90byA9IChyYXRlKSA9PiB7XHJcbiAgICBvblJhdGVQb3N0KCdQaG90bycsIGRhdGFbc2xpZGVySW5kZXhdLmlkLCByYXRlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VUZXh0ID0gKGUpID0+IHtcclxuICAgIHNldENvbW1lbnRUZXh0KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVFbnRlcktleSA9IChlKSA9PiB7XHJcbiAgICBpZiAoZS5uYXRpdmVFdmVudC5rZXlDb2RlID09PSAxMykge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICBvbkNvbW1lbnQoaWQsIGNvbW1lbnRUZXh0KTtcclxuXHJcbiAgICAgIHNldENvbW1lbnRUZXh0KCcnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBvbkNvbW1lbnQgPSBhc3luYyAocG9zdElkLCB0ZXh0KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgdXJsID0gJyc7XHJcbiAgICAgIGxldCBkYXRhRm9yUmVxdWVzdDtcclxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGE7XHJcblxyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2NvbW1lbnRlZCcsIHBvc3RJZClcclxuXHJcbiAgICAgIC8vIGlmIChmaWxlcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIC8vICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAvLyAgICAgaWYgKGZpbGVzW2ldLnR5cGUuc3BsaXQoJy8nKVswXSA9PT0gJ2ltYWdlJykge1xyXG4gICAgICAvLyAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgZmlsZXNbaV0pO1xyXG4gICAgICAvLyAgICAgfVxyXG4gICAgICAvLyAgIH1cclxuICAgICAgLy8gfVxyXG4gICAgICB1cmwgPSAnL2FwaS9waG90b3MvY29tbWVudCdcclxuICAgICAgaWYgKHRleHQubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd0ZXh0JywgdGV4dClcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgZGF0YUZvclJlcXVlc3QgPSBmb3JtRGF0YVxyXG5cclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsLFxyXG4gICAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiB0b2tlbiB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG5cclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgb25VcGRhdGVUaW1lbGluZSgpO1xyXG4gICAgICAgIG1lc3NhZ2Uuc3VjY2VzcygnWW91ciBjb21tZW50IHB1Ymxpc2hlZCBzdWNjZXNzZnVseScpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBhd2FpdCByZXF1ZXN0O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJvdW5kUmF0aW5nID0gZGF0YS5sZW5ndGggIT09IDAgPyBNYXRoLnJvdW5kKGRhdGFbc2xpZGVySW5kZXhdPy5yYXRpbmcgfHwgMCkgOiAwXHJcbiAgY29uc29sZS5sb2coXCJzbGlkZXJJbmRleFwiLCBzbGlkZXJJbmRleCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxQaG90b01vZGFsV3JhcHBlciB7Li4ucmVzdH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvbnN9PlxyXG4gICAgICAgICAgPExlZnRPdXRsaW5lZFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wcmV2X2FjdGlvbn1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2xpZGVQcmV2KCl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFJpZ2h0T3V0bGluZWRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubmV4dF9hY3Rpb259XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNsaWRlTmV4dCgpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8QWxpY2VDYXJvdXNlbFxyXG4gICAgICAgICAgbW91c2VUcmFja2luZ0VuYWJsZWRcclxuICAgICAgICAgIGRvdHNEaXNhYmxlZFxyXG4gICAgICAgICAgYnV0dG9uc0Rpc2FibGVkXHJcbiAgICAgICAgICBzbGlkZVRvSW5kZXg9e3NsaWRlckluZGV4fVxyXG4gICAgICAgICAgb25TbGlkZUNoYW5nZWQ9e29uU2xpZGVDaGFuZ2VkfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICB7aXRlbSAhPT0gdW5kZWZpbmVkICYmIGl0ZW0uc3JjICE9PSBudWxsICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9fY29udGFpbmVyfSBrZXk9e2l0ZW0uaWR9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBob3RvfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkRyYWdTdGFydD17aGFuZGxlT25EcmFnU3RhcnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2l0ZW0uc3JjfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0FsaWNlQ2Fyb3VzZWw+XHJcbiAgICAgICAge2RhdGEubGVuZ3RoICE9PSAwICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnRfYm94fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyfT5cclxuICAgICAgICAgICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0+XHJcbiAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtjb21tZW50VGV4dH1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgZG8geW91IG1lYW4/XCJcclxuICAgICAgICAgICAgICByb3dzPXsyfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VUZXh0fVxyXG4gICAgICAgICAgICAgIG9uS2V5RG93bj17aGFuZGxlRW50ZXJLZXl9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiAxNSwgYm9yZGVyUmFkaXVzOiAzNiwgaGVpZ2h0OiA0NSwgcGFkZGluZ0xlZnQ6IDMwLCBwYWRkaW5nVG9wOiAxMCwgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50J319XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4pfVxyXG4gICAgICAgIHtkYXRhLmxlbmd0aCAhPT0gMCAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJhdGluZ193cmFwcGVyfT5cclxuICAgICAgICAgICAgPFJhdGluZ1NsaWRlXHJcbiAgICAgICAgICAgIGRlZmF1bHRSYXRlPXtyb3VuZFJhdGluZ31cclxuICAgICAgICAgICAgd2l0aG91dFRleHRcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVJhdGVQaG90b31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvUGhvdG9Nb2RhbFdyYXBwZXI+XHJcbiAgKTtcclxufVxyXG5cclxuUGhvdG9zTW9kYWwuZGVmYXVsdFByb3BzID0ge1xyXG4gIGRhdGE6IFtdLFxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==