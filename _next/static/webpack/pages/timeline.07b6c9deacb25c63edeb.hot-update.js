webpackHotUpdate_N_E("pages/timeline",{

/***/ "./components/timeline/Comments.js":
/*!*****************************************!*\
  !*** ./components/timeline/Comments.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/comment.module.scss */ "./components/timeline/styles/comment.module.scss");
/* harmony import */ var _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components_common_TrimText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/common/TrimText */ "./components/common/TrimText.js");
/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/Avatar */ "./components/common/Avatar.js");
/* harmony import */ var configs_API__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! configs/API */ "./configs/API.js");
/* harmony import */ var _forms_rating_DragableRating__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../forms/rating/DragableRating */ "./components/forms/rating/DragableRating.js");
/* harmony import */ var _forms_rating_RatingSlide__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../forms/rating/RatingSlide */ "./components/forms/rating/RatingSlide.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");




var _jsxFileName = "E:\\freeskies_fe_code\\components\\timeline\\Comments.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;











var TextArea = antd__WEBPACK_IMPORTED_MODULE_4__["Input"].TextArea;

function CommentItem(_ref) {
  var _author$profilePhoto;

  var message = _ref.message,
      mine = _ref.mine,
      author = _ref.author,
      rating = _ref.rating,
      id = _ref.id,
      onRateComment = _ref.onRateComment;
  var fullName = "".concat(author === null || author === void 0 ? void 0 : author.firstName, " ").concat(author === null || author === void 0 ? void 0 : author.lastName);

  var handleRateComment = function handleRateComment(rate) {
    onRateComment(id, rate);
  };

  var profileUrl = author !== null && author !== undefined ? "".concat((_author$profilePhoto = author.profilePhoto) === null || _author$profilePhoto === void 0 ? void 0 : _author$profilePhoto.src) : null;
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.comment_item, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.not_mine, !mine)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx(_common_Avatar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    size: 50,
    url: profileUrl,
    text: author === null || author === void 0 ? void 0 : author.username,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }), __jsx(_forms_rating_RatingSlide__WEBPACK_IMPORTED_MODULE_11__["default"], {
    defaultRate: rating,
    withoutText: true,
    dark: true,
    size: "small",
    onChange: handleRateComment,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.message_container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.message,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.author,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, fullName), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, __jsx(components_common_TrimText__WEBPACK_IMPORTED_MODULE_7__["default"], {
    limit: 110,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, message)))));
}

_c = CommentItem;

function Comments(_ref2) {
  _s();

  var _this = this,
      _auth$user,
      _auth$user$profilePho,
      _auth$user2;

  var _ref2$data = _ref2.data,
      data = _ref2$data === void 0 ? [] : _ref2$data,
      modalMode = _ref2.modalMode,
      id = _ref2.id,
      type = _ref2.type,
      auth = _ref2.auth,
      onUpdateTimeline = _ref2.onUpdateTimeline,
      token = _ref2.token,
      activePostId = _ref2.activePostId;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      commentText = _useState[0],
      setCommentText = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      commentList = _useState2[0],
      setCommentList = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(activePostId === id),
      active = _useState3[0],
      setActive = _useState3[1];

  var handleEnterKey = function handleEnterKey(e) {
    if (e.nativeEvent.keyCode === 13) {
      e.preventDefault();
      onComment(type, id, commentText);
      setCommentText('');
    }
  };

  var handleChangeText = function handleChangeText(e) {
    setCommentText(e.target.value);
  };

  var onComment = /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(type, postId, text) {
      var url, dataForRequest, formData, request, _data, status;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(type, postId, text);
              _context.prev = 1;
              url = '';
              formData = new FormData();
              formData.append('commented', postId);

              if (type === 'Photo') {
                url = '/photos/comment';
              } else if (type === 'VideoClip') {
                url = '/video-clips/comment';
              } else if (type === 'Item') {
                url = '/items/comment';
              } else if (type === 'Post') {
                url = '/posts/comment';
              } else if (type === 'Comment') {
                url = '/comments/comment';
              } else if (type === 'Share') {
                url = '/shares/comment';
              } // if (files !== undefined) {
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
              _context.next = 10;
              return Object(configs_API__WEBPACK_IMPORTED_MODULE_9__["default"])({
                method: 'post',
                url: url,
                data: formData,
                headers: {
                  'x-token': token
                }
              });

            case 10:
              request = _context.sent;
              _data = request.data, status = request.status;

              if (!(status === 201)) {
                _context.next = 16;
                break;
              }

              onUpdateTimeline(_data);
              _context.next = 18;
              break;

            case 16:
              antd__WEBPACK_IMPORTED_MODULE_4__["message"].error((_data === null || _data === void 0 ? void 0 : _data.message) || 'Something wrong');
              throw new Error();

            case 18:
              _context.next = 20;
              return request;

            case 20:
              return _context.abrupt("return", _context.sent);

            case 23:
              _context.prev = 23;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);

            case 26:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 23]]);
    }));

    return function onComment(_x, _x2, _x3) {
      return _ref3.apply(this, arguments);
    };
  }();

  var onRateComment = /*#__PURE__*/function () {
    var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(commentId, rate) {
      var request, _data2, status;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return Object(configs_API__WEBPACK_IMPORTED_MODULE_9__["default"])({
                method: 'post',
                url: '/comments/rate',
                data: {
                  rated: commentId,
                  rating: rate
                },
                headers: {
                  'x-token': token
                }
              });

            case 3:
              request = _context2.sent;
              _data2 = request.data, status = request.status;

              if (!(status === 201)) {
                _context2.next = 8;
                break;
              }

              _context2.next = 9;
              break;

            case 8:
              throw new Error();

            case 9:
              _context2.next = 14;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 11]]);
    }));

    return function onRateComment(_x4, _x5) {
      return _ref4.apply(this, arguments);
    };
  }();

  console.log(active);
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.comments, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.modal_mode, modalMode)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.comments_wrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 7
    }
  }, (active && modalMode ? data : data.slice(0, 2)).map(function (item) {
    return __jsx(CommentItem, {
      key: item.id,
      id: item.id,
      mine: item.mine,
      message: item.text,
      author: item.account,
      rating: item.rating,
      onRateComment: onRateComment,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 11
      }
    });
  })), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.comment_box,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 9
    }
  }, __jsx(_common_Avatar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    size: 45,
    url: (_auth$user = auth.user) === null || _auth$user === void 0 ? void 0 : (_auth$user$profilePho = _auth$user.profilePhoto) === null || _auth$user$profilePho === void 0 ? void 0 : _auth$user$profilePho.src,
    text: (_auth$user2 = auth.user) === null || _auth$user2 === void 0 ? void 0 : _auth$user2.username,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.input,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 9
    }
  }, __jsx(TextArea, {
    value: commentText,
    placeholder: "What do you mean?",
    rows: 2,
    onChange: handleChangeText,
    onKeyDown: handleEnterKey,
    style: {
      borderRadius: 36,
      height: 45,
      paddingLeft: 30,
      paddingTop: 10,
      background: 'transparent',
      color: 'white'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 11
    }
  }))));
}

_s(Comments, "bU7/6gebDKxg7bekMzCALfKJOXg=");

_c2 = Comments;

var mapStateToProps = function mapStateToProps(store) {
  return {
    token: store.auth.token,
    auth: store.auth
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])(mapStateToProps)(Comments));

var _c, _c2;

$RefreshReg$(_c, "CommentItem");
$RefreshReg$(_c2, "Comments");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aW1lbGluZS9Db21tZW50cy5qcyJdLCJuYW1lcyI6WyJUZXh0QXJlYSIsIklucHV0IiwiQ29tbWVudEl0ZW0iLCJtZXNzYWdlIiwibWluZSIsImF1dGhvciIsInJhdGluZyIsImlkIiwib25SYXRlQ29tbWVudCIsImZ1bGxOYW1lIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJoYW5kbGVSYXRlQ29tbWVudCIsInJhdGUiLCJwcm9maWxlVXJsIiwidW5kZWZpbmVkIiwicHJvZmlsZVBob3RvIiwic3JjIiwiY2xhc3NuYW1lcyIsInN0eWxlcyIsImNvbW1lbnRfaXRlbSIsIm5vdF9taW5lIiwiYXZhdGFyIiwidXNlcm5hbWUiLCJtZXNzYWdlX2NvbnRhaW5lciIsIkNvbW1lbnRzIiwiZGF0YSIsIm1vZGFsTW9kZSIsInR5cGUiLCJhdXRoIiwib25VcGRhdGVUaW1lbGluZSIsInRva2VuIiwiYWN0aXZlUG9zdElkIiwidXNlU3RhdGUiLCJjb21tZW50VGV4dCIsInNldENvbW1lbnRUZXh0IiwiY29tbWVudExpc3QiLCJzZXRDb21tZW50TGlzdCIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImhhbmRsZUVudGVyS2V5IiwiZSIsIm5hdGl2ZUV2ZW50Iiwia2V5Q29kZSIsInByZXZlbnREZWZhdWx0Iiwib25Db21tZW50IiwiaGFuZGxlQ2hhbmdlVGV4dCIsInRhcmdldCIsInZhbHVlIiwicG9zdElkIiwidGV4dCIsImNvbnNvbGUiLCJsb2ciLCJ1cmwiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwibGVuZ3RoIiwiZGF0YUZvclJlcXVlc3QiLCJBUEkiLCJtZXRob2QiLCJoZWFkZXJzIiwicmVxdWVzdCIsInN0YXR1cyIsImVycm9yIiwiRXJyb3IiLCJjb21tZW50SWQiLCJyYXRlZCIsImNvbW1lbnRzIiwibW9kYWxfbW9kZSIsImNvbW1lbnRzX3dyYXBwZXIiLCJzbGljZSIsIm1hcCIsIml0ZW0iLCJhY2NvdW50IiwiY29tbWVudF9ib3giLCJ1c2VyIiwiaW5wdXQiLCJib3JkZXJSYWRpdXMiLCJoZWlnaHQiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdUb3AiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdG9yZSIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBRVFBLFEsR0FBYUMsMEMsQ0FBYkQsUTs7QUFFUixTQUFTRSxXQUFULE9BQTJFO0FBQUE7O0FBQUEsTUFBcERDLE9BQW9ELFFBQXBEQSxPQUFvRDtBQUFBLE1BQTNDQyxJQUEyQyxRQUEzQ0EsSUFBMkM7QUFBQSxNQUFyQ0MsTUFBcUMsUUFBckNBLE1BQXFDO0FBQUEsTUFBN0JDLE1BQTZCLFFBQTdCQSxNQUE2QjtBQUFBLE1BQXJCQyxFQUFxQixRQUFyQkEsRUFBcUI7QUFBQSxNQUFqQkMsYUFBaUIsUUFBakJBLGFBQWlCO0FBQ3pFLE1BQU1DLFFBQVEsYUFBTUosTUFBTixhQUFNQSxNQUFOLHVCQUFNQSxNQUFNLENBQUVLLFNBQWQsY0FBMkJMLE1BQTNCLGFBQTJCQSxNQUEzQix1QkFBMkJBLE1BQU0sQ0FBRU0sUUFBbkMsQ0FBZDs7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLElBQUQsRUFBVTtBQUNsQ0wsaUJBQWEsQ0FBQ0QsRUFBRCxFQUFLTSxJQUFMLENBQWI7QUFDRCxHQUZEOztBQUdBLE1BQU1DLFVBQVUsR0FBR1QsTUFBTSxLQUFLLElBQVgsSUFBbUJBLE1BQU0sS0FBS1UsU0FBOUIscUNBQTZDVixNQUFNLENBQUNXLFlBQXBELHlEQUE2QyxxQkFBcUJDLEdBQWxFLElBQTBFLElBQTdGO0FBRUEsU0FDRTtBQUNFLGFBQVMsRUFBRUMsaURBQVUsQ0FBQ0Msa0VBQU0sQ0FBQ0MsWUFBUixnR0FDbEJELGtFQUFN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RixRQUFJLEVBQUV3RCxLQUFLLENBQUN4RDtBQUZzQixHQUFaO0FBQUEsQ0FBeEI7O0FBS2V5RCwySEFBTyxDQUFDRixlQUFELENBQVAsQ0FBeUIzRCxRQUF6QixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3RpbWVsaW5lLjA3YjZjOWRlYWNiMjVjNjNlZGViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgUG9wb3ZlciB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL2NvbW1lbnQubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRyaW1UZXh0IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL1RyaW1UZXh0JztcclxuaW1wb3J0IEF2YXRhciBmcm9tICcuLi9jb21tb24vQXZhdGFyJztcclxuaW1wb3J0IEFQSSBmcm9tICdjb25maWdzL0FQSSc7XHJcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IERyYWdhYmxlUmF0aW5nIGZyb20gJy4uL2Zvcm1zL3JhdGluZy9EcmFnYWJsZVJhdGluZyc7XHJcbmltcG9ydCBSYXRpbmdTbGlkZSBmcm9tICcuLi9mb3Jtcy9yYXRpbmcvUmF0aW5nU2xpZGUnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcblxyXG5mdW5jdGlvbiBDb21tZW50SXRlbSh7IG1lc3NhZ2UsIG1pbmUsIGF1dGhvciwgcmF0aW5nLCBpZCwgb25SYXRlQ29tbWVudCB9KSB7XHJcbiAgY29uc3QgZnVsbE5hbWUgPSBgJHthdXRob3I/LmZpcnN0TmFtZX0gJHthdXRob3I/Lmxhc3ROYW1lfWA7XHJcbiAgY29uc3QgaGFuZGxlUmF0ZUNvbW1lbnQgPSAocmF0ZSkgPT4ge1xyXG4gICAgb25SYXRlQ29tbWVudChpZCwgcmF0ZSk7XHJcbiAgfTtcclxuICBjb25zdCBwcm9maWxlVXJsID0gYXV0aG9yICE9PSBudWxsICYmIGF1dGhvciAhPT0gdW5kZWZpbmVkID8gYCR7YXV0aG9yLnByb2ZpbGVQaG90bz8uc3JjfWAgOiBudWxsXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuY29tbWVudF9pdGVtLCB7XHJcbiAgICAgICAgW3N0eWxlcy5ub3RfbWluZV06ICFtaW5lLFxyXG4gICAgICB9KX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9PlxyXG4gICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgIHNpemU9ezUwfVxyXG4gICAgICAgICAgdXJsPXtwcm9maWxlVXJsfVxyXG4gICAgICAgICAgdGV4dD17YXV0aG9yPy51c2VybmFtZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxSYXRpbmdTbGlkZVxyXG4gICAgICAgICAgZGVmYXVsdFJhdGU9e3JhdGluZ31cclxuICAgICAgICAgIHdpdGhvdXRUZXh0XHJcbiAgICAgICAgICBkYXJrXHJcbiAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVJhdGVDb21tZW50fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgey8qIDxEcmFnYWJsZVJhdGluZyByYXRpbmc9e3JhdGluZ30gaGFuZGxlUmF0ZUNvbW1lbnQ9e2hhbmRsZVJhdGVDb21tZW50fSAvPiAqL31cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVzc2FnZV9jb250YWluZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVzc2FnZX0+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5hdXRob3J9PntmdWxsTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgPFRyaW1UZXh0IGxpbWl0PXsxMTB9PnttZXNzYWdlfTwvVHJpbVRleHQ+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gQ29tbWVudHMoe1xyXG4gIGRhdGEgPSBbXSxcclxuICBtb2RhbE1vZGUsXHJcbiAgaWQsXHJcbiAgdHlwZSxcclxuICBhdXRoLFxyXG4gIG9uVXBkYXRlVGltZWxpbmUsXHJcbiAgdG9rZW4sXHJcbiAgYWN0aXZlUG9zdElkXHJcbn0pIHtcclxuICBjb25zdCBbY29tbWVudFRleHQsIHNldENvbW1lbnRUZXh0XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbY29tbWVudExpc3QsIHNldENvbW1lbnRMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoYWN0aXZlUG9zdElkID09PSBpZCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUVudGVyS2V5ID0gKGUpID0+IHtcclxuICAgIGlmIChlLm5hdGl2ZUV2ZW50LmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIG9uQ29tbWVudCh0eXBlLCBpZCwgY29tbWVudFRleHQpO1xyXG5cclxuICAgICAgc2V0Q29tbWVudFRleHQoJycpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVRleHQgPSAoZSkgPT4ge1xyXG4gICAgc2V0Q29tbWVudFRleHQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQ29tbWVudCA9IGFzeW5jICh0eXBlLCBwb3N0SWQsIHRleHQpID0+IHtjb25zb2xlLmxvZyh0eXBlLCBwb3N0SWQsIHRleHQpXHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgdXJsID0gJyc7XHJcbiAgICAgIGxldCBkYXRhRm9yUmVxdWVzdDtcclxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGE7XHJcblxyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2NvbW1lbnRlZCcsIHBvc3RJZClcclxuXHJcbiAgICAgIGlmICh0eXBlID09PSAnUGhvdG8nKSB7XHJcbiAgICAgICAgdXJsID0gJy9waG90b3MvY29tbWVudCc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1ZpZGVvQ2xpcCcpIHtcclxuICAgICAgICB1cmwgPSAnL3ZpZGVvLWNsaXBzL2NvbW1lbnQnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdJdGVtJykge1xyXG4gICAgICAgIHVybCA9ICcvaXRlbXMvY29tbWVudCc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1Bvc3QnKSB7XHJcbiAgICAgICAgdXJsID0gJy9wb3N0cy9jb21tZW50JztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnQ29tbWVudCcpIHtcclxuICAgICAgICB1cmwgPSAnL2NvbW1lbnRzL2NvbW1lbnQnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdTaGFyZScpIHtcclxuICAgICAgICB1cmwgPSAnL3NoYXJlcy9jb21tZW50JztcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gaWYgKGZpbGVzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgLy8gICBmb3IgKHZhciBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIC8vICAgICBpZiAoZmlsZXNbaV0udHlwZS5zcGxpdCgnLycpWzBdID09PSAnaW1hZ2UnKSB7XHJcbiAgICAgIC8vICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBmaWxlc1tpXSk7XHJcbiAgICAgIC8vICAgICB9XHJcbiAgICAgIC8vICAgfVxyXG4gICAgICAvLyB9XHJcbiAgICAgIFxyXG4gICAgICBpZiAodGV4dC5sZW5ndGggIT09IDApIHtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3RleHQnLCB0ZXh0KVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBkYXRhRm9yUmVxdWVzdCA9IGZvcm1EYXRhXHJcblxyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmwsXHJcbiAgICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IHRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcblxyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICBvblVwZGF0ZVRpbWVsaW5lKGRhdGEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBhd2FpdCByZXF1ZXN0O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uUmF0ZUNvbW1lbnQgPSBhc3luYyAoY29tbWVudElkLCByYXRlKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6ICcvY29tbWVudHMvcmF0ZScsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgcmF0ZWQ6IGNvbW1lbnRJZCxcclxuICAgICAgICAgIHJhdGluZzogcmF0ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiB0b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcblxyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICAvLyBvblVwZGF0ZVRpbWVsaW5lKCk7XHJcbiAgICAgICAgLy8gbWVzc2FnZS5zdWNjZXNzKCdFdmFsdWF0ZSBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zb2xlLmxvZyhhY3RpdmUpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuY29tbWVudHMsIHtcclxuICAgICAgICBbc3R5bGVzLm1vZGFsX21vZGVdOiBtb2RhbE1vZGUsXHJcbiAgICAgIH0pfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnRzX3dyYXBwZXJ9PlxyXG4gICAgICAgIHsoYWN0aXZlICYmIG1vZGFsTW9kZT8gZGF0YSA6IGRhdGEuc2xpY2UoMCwgMikpLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgPENvbW1lbnRJdGVtXHJcbiAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgIG1pbmU9e2l0ZW0ubWluZX1cclxuICAgICAgICAgICAgbWVzc2FnZT17aXRlbS50ZXh0fVxyXG4gICAgICAgICAgICBhdXRob3I9e2l0ZW0uYWNjb3VudH1cclxuICAgICAgICAgICAgcmF0aW5nPXtpdGVtLnJhdGluZ31cclxuICAgICAgICAgICAgb25SYXRlQ29tbWVudD17b25SYXRlQ29tbWVudH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50X2JveH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9PlxyXG4gICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICBzaXplPXs0NX1cclxuICAgICAgICAgICAgdXJsPXthdXRoLnVzZXI/LnByb2ZpbGVQaG90bz8uc3JjfVxyXG4gICAgICAgICAgICB0ZXh0PXthdXRoLnVzZXI/LnVzZXJuYW1lfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fT5cclxuICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICB2YWx1ZT17Y29tbWVudFRleHR9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBkbyB5b3UgbWVhbj9cIlxyXG4gICAgICAgICAgICByb3dzPXsyfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlVGV4dH1cclxuICAgICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVFbnRlcktleX1cclxuICAgICAgICAgICAgc3R5bGU9e3sgIGJvcmRlclJhZGl1czogMzYsIGhlaWdodDogNDUsIHBhZGRpbmdMZWZ0OiAzMCwgcGFkZGluZ1RvcDogMTAsIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsIGNvbG9yOiAnd2hpdGUnfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0b3JlKSA9PiAoe1xyXG4gIHRva2VuOiBzdG9yZS5hdXRoLnRva2VuLFxyXG4gIGF1dGg6IHN0b3JlLmF1dGgsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKENvbW1lbnRzKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==