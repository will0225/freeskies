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
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;











var TextArea = antd__WEBPACK_IMPORTED_MODULE_4__["Input"].TextArea;

function CommentItem(_ref) {
  _s();

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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      visible = _useState[0],
      setVisible = _useState[1];

  var profileUrl = author !== null && author !== undefined ? "".concat((_author$profilePhoto = author.profilePhoto) === null || _author$profilePhoto === void 0 ? void 0 : _author$profilePhoto.src) : null;
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.comment_item, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.not_mine, !mine)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx(_common_Avatar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    size: 50,
    url: profileUrl,
    text: author === null || author === void 0 ? void 0 : author.username,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
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
      lineNumber: 35,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.message_container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.message,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.author,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, fullName), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, __jsx(components_common_TrimText__WEBPACK_IMPORTED_MODULE_7__["default"], {
    limit: 110,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, message))), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.reply,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx("p", {
    style: {
      fontSize: 15,
      textDecoration: 'underline',
      textAlign: 'center'
    },
    onClick: function onClick() {
      return setVisible(true);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, "reply")), visible ? __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.comment_box,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, __jsx(_common_Avatar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    size: 35,
    url: profileUrl,
    text: author === null || author === void 0 ? void 0 : author.username,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.input,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, __jsx(TextArea, {
    value: 'sss',
    placeholder: "What do you mean?",
    rows: 2,
    onChange: function onChange() {},
    onKeyDown: function onKeyDown() {},
    style: {
      borderRadius: 36,
      height: 25,
      background: 'transparent',
      color: 'black'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }))) : null));
}

_s(CommentItem, "OGsIWlGlwYpVUqIrDReJ1GWx7rw=");

_c = CommentItem;

function Comments(_ref2) {
  _s2();

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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      commentText = _useState2[0],
      setCommentText = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      commentList = _useState3[0],
      setCommentList = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(activePostId === id),
      active = _useState4[0],
      setActive = _useState4[1];

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

  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.comments, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.modal_mode, modalMode)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.comments_wrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 7
    }
  }, (activePostId === id && modalMode ? data : data.slice(0, 2)).map(function (item) {
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
        lineNumber: 199,
        columnNumber: 11
      }
    });
  })), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.comment_box,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 9
    }
  }, __jsx(_common_Avatar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    size: 45,
    url: (_auth$user = auth.user) === null || _auth$user === void 0 ? void 0 : (_auth$user$profilePho = _auth$user.profilePhoto) === null || _auth$user$profilePho === void 0 ? void 0 : _auth$user$profilePho.src,
    text: (_auth$user2 = auth.user) === null || _auth$user2 === void 0 ? void 0 : _auth$user2.username,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.input,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
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
      color: 'black'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 11
    }
  }))));
}

_s2(Comments, "bU7/6gebDKxg7bekMzCALfKJOXg=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aW1lbGluZS9Db21tZW50cy5qcyJdLCJuYW1lcyI6WyJUZXh0QXJlYSIsIklucHV0IiwiQ29tbWVudEl0ZW0iLCJtZXNzYWdlIiwibWluZSIsImF1dGhvciIsInJhdGluZyIsImlkIiwib25SYXRlQ29tbWVudCIsImZ1bGxOYW1lIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJoYW5kbGVSYXRlQ29tbWVudCIsInJhdGUiLCJ1c2VTdGF0ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwicHJvZmlsZVVybCIsInVuZGVmaW5lZCIsInByb2ZpbGVQaG90byIsInNyYyIsImNsYXNzbmFtZXMiLCJzdHlsZXMiLCJjb21tZW50X2l0ZW0iLCJub3RfbWluZSIsImF2YXRhciIsInVzZXJuYW1lIiwibWVzc2FnZV9jb250YWluZXIiLCJyZXBseSIsImZvbnRTaXplIiwidGV4dERlY29yYXRpb24iLCJ0ZXh0QWxpZ24iLCJjb21tZW50X2JveCIsImlucHV0IiwiYm9yZGVyUmFkaXVzIiwiaGVpZ2h0IiwiYmFja2dyb3VuZCIsImNvbG9yIiwiQ29tbWVudHMiLCJkYXRhIiwibW9kYWxNb2RlIiwidHlwZSIsImF1dGgiLCJvblVwZGF0ZVRpbWVsaW5lIiwidG9rZW4iLCJhY3RpdmVQb3N0SWQiLCJjb21tZW50VGV4dCIsInNldENvbW1lbnRUZXh0IiwiY29tbWVudExpc3QiLCJzZXRDb21tZW50TGlzdCIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImhhbmRsZUVudGVyS2V5IiwiZSIsIm5hdGl2ZUV2ZW50Iiwia2V5Q29kZSIsInByZXZlbnREZWZhdWx0Iiwib25Db21tZW50IiwiaGFuZGxlQ2hhbmdlVGV4dCIsInRhcmdldCIsInZhbHVlIiwicG9zdElkIiwidGV4dCIsImNvbnNvbGUiLCJsb2ciLCJ1cmwiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwibGVuZ3RoIiwiZGF0YUZvclJlcXVlc3QiLCJBUEkiLCJtZXRob2QiLCJoZWFkZXJzIiwicmVxdWVzdCIsInN0YXR1cyIsImVycm9yIiwiRXJyb3IiLCJjb21tZW50SWQiLCJyYXRlZCIsImNvbW1lbnRzIiwibW9kYWxfbW9kZSIsImNvbW1lbnRzX3dyYXBwZXIiLCJzbGljZSIsIm1hcCIsIml0ZW0iLCJhY2NvdW50IiwidXNlciIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1RvcCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0b3JlIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBRVFBLFEsR0FBYUMsMEMsQ0FBYkQsUTs7QUFFUixTQUFTRSxXQUFULE9BQTJFO0FBQUE7O0FBQUE7O0FBQUEsTUFBcERDLE9BQW9ELFFBQXBEQSxPQUFvRDtBQUFBLE1BQTNDQyxJQUEyQyxRQUEzQ0EsSUFBMkM7QUFBQSxNQUFyQ0MsTUFBcUMsUUFBckNBLE1BQXFDO0FBQUEsTUFBN0JDLE1BQTZCLFFBQTdCQSxNQUE2QjtBQUFBLE1BQXJCQyxFQUFxQixRQUFyQkEsRUFBcUI7QUFBQSxNQUFqQkMsYUFBaUIsUUFBakJBLGFBQWlCO0FBQ3pFLE1BQU1DLFFBQVEsYUFBTUosTUFBTixhQUFNQSxNQUFOLHVCQUFNQSxNQUFNLENBQUVLLFNBQWQsY0FBMkJMLE1BQTNCLGFBQTJCQSxNQUEzQix1QkFBMkJBLE1BQU0sQ0FBRU0sUUFBbkMsQ0FBZDs7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLElBQUQsRUFBVTtBQUNsQ0wsaUJBQWEsQ0FBQ0QsRUFBRCxFQUFLTSxJQUFMLENBQWI7QUFDRCxHQUZEOztBQUZ5RSxrQkFLM0NDLHNEQUFRLENBQUMsS0FBRCxDQUxtQztBQUFBLE1BS2xFQyxPQUxrRTtBQUFBLE1BS3pEQyxVQUx5RDs7QUFNekUsTUFBTUMsVUFBVSxHQUFHWixNQUFNLEtBQUssSUFB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QUUsYUFBOUU7QUFBNkZDLFdBQUssRUFBRTtBQUFwRyxLQU5UO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVJGLENBbkJGLENBREY7QUF5Q0Q7O0lBeEpRQyxROztNQUFBQSxROztBQTBKVCxJQUFNb0QsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNsQy9DLFNBQUssRUFBRStDLEtBQUssQ0FBQ2pELElBQU4sQ0FBV0UsS0FEZ0I7QUFFbENGLFFBQUksRUFBRWlELEtBQUssQ0FBQ2pEO0FBRnNCLEdBQVo7QUFBQSxDQUF4Qjs7QUFLZWtELDJIQUFPLENBQUNGLGVBQUQsQ0FBUCxDQUF5QnBELFFBQXpCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGltZWxpbmUuM2NkYzk4NzFkNzQxMDA4NDc5M2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBQb3BvdmVyIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvY29tbWVudC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVHJpbVRleHQgZnJvbSAnY29tcG9uZW50cy9jb21tb24vVHJpbVRleHQnO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJy4uL2NvbW1vbi9BdmF0YXInO1xyXG5pbXBvcnQgQVBJIGZyb20gJ2NvbmZpZ3MvQVBJJztcclxuaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgRHJhZ2FibGVSYXRpbmcgZnJvbSAnLi4vZm9ybXMvcmF0aW5nL0RyYWdhYmxlUmF0aW5nJztcclxuaW1wb3J0IFJhdGluZ1NsaWRlIGZyb20gJy4uL2Zvcm1zL3JhdGluZy9SYXRpbmdTbGlkZSc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuXHJcbmZ1bmN0aW9uIENvbW1lbnRJdGVtKHsgbWVzc2FnZSwgbWluZSwgYXV0aG9yLCByYXRpbmcsIGlkLCBvblJhdGVDb21tZW50IH0pIHtcclxuICBjb25zdCBmdWxsTmFtZSA9IGAke2F1dGhvcj8uZmlyc3ROYW1lfSAke2F1dGhvcj8ubGFzdE5hbWV9YDtcclxuICBjb25zdCBoYW5kbGVSYXRlQ29tbWVudCA9IChyYXRlKSA9PiB7XHJcbiAgICBvblJhdGVDb21tZW50KGlkLCByYXRlKTtcclxuICB9O1xyXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBwcm9maWxlVXJsID0gYXV0aG9yICE9PSBudWxsICYmIGF1dGhvciAhPT0gdW5kZWZpbmVkID8gYCR7YXV0aG9yLnByb2ZpbGVQaG90bz8uc3JjfWAgOiBudWxsXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuY29tbWVudF9pdGVtLCB7XHJcbiAgICAgICAgW3N0eWxlcy5ub3RfbWluZV06ICFtaW5lLFxyXG4gICAgICB9KX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9PlxyXG4gICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgIHNpemU9ezUwfVxyXG4gICAgICAgICAgdXJsPXtwcm9maWxlVXJsfVxyXG4gICAgICAgICAgdGV4dD17YXV0aG9yPy51c2VybmFtZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxSYXRpbmdTbGlkZVxyXG4gICAgICAgICAgZGVmYXVsdFJhdGU9e3JhdGluZ31cclxuICAgICAgICAgIHdpdGhvdXRUZXh0XHJcbiAgICAgICAgICBkYXJrXHJcbiAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVJhdGVDb21tZW50fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgey8qIDxEcmFnYWJsZVJhdGluZyByYXRpbmc9e3JhdGluZ30gaGFuZGxlUmF0ZUNvbW1lbnQ9e2hhbmRsZVJhdGVDb21tZW50fSAvPiAqL31cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVzc2FnZV9jb250YWluZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVzc2FnZX0+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5hdXRob3J9PntmdWxsTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgPFRyaW1UZXh0IGxpbWl0PXsxMTB9PnttZXNzYWdlfTwvVHJpbVRleHQ+XHJcbiAgICAgICAgICA8L3A+IFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVwbHl9PlxyXG4gICAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogMTUsIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fSBvbkNsaWNrPXsoKSA9PiBzZXRWaXNpYmxlKHRydWUpfT5yZXBseTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7dmlzaWJsZT9cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnRfYm94fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyfT5cclxuICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgIHNpemU9ezM1fVxyXG4gICAgICAgICAgICAgIHVybD17cHJvZmlsZVVybH1cclxuICAgICAgICAgICAgICB0ZXh0PXthdXRob3I/LnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fT5cclxuICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgdmFsdWU9eydzc3MnfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBkbyB5b3UgbWVhbj9cIlxyXG4gICAgICAgICAgICAgIHJvd3M9ezJ9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eygpPT57fX1cclxuICAgICAgICAgICAgICBvbktleURvd249eygpID0+IHt9fVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7ICBib3JkZXJSYWRpdXM6IDM2LCBoZWlnaHQ6IDI1LCBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLCBjb2xvcjogJ2JsYWNrJ319XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+Om51bGx9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gQ29tbWVudHMoe1xyXG4gIGRhdGEgPSBbXSxcclxuICBtb2RhbE1vZGUsXHJcbiAgaWQsXHJcbiAgdHlwZSxcclxuICBhdXRoLFxyXG4gIG9uVXBkYXRlVGltZWxpbmUsXHJcbiAgdG9rZW4sXHJcbiAgYWN0aXZlUG9zdElkXHJcbn0pIHtcclxuICBjb25zdCBbY29tbWVudFRleHQsIHNldENvbW1lbnRUZXh0XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbY29tbWVudExpc3QsIHNldENvbW1lbnRMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoYWN0aXZlUG9zdElkID09PSBpZCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUVudGVyS2V5ID0gKGUpID0+IHtcclxuICAgIGlmIChlLm5hdGl2ZUV2ZW50LmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIG9uQ29tbWVudCh0eXBlLCBpZCwgY29tbWVudFRleHQpO1xyXG5cclxuICAgICAgc2V0Q29tbWVudFRleHQoJycpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVRleHQgPSAoZSkgPT4ge1xyXG4gICAgc2V0Q29tbWVudFRleHQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQ29tbWVudCA9IGFzeW5jICh0eXBlLCBwb3N0SWQsIHRleHQpID0+IHtjb25zb2xlLmxvZyh0eXBlLCBwb3N0SWQsIHRleHQpXHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgdXJsID0gJyc7XHJcbiAgICAgIGxldCBkYXRhRm9yUmVxdWVzdDtcclxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGE7XHJcblxyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2NvbW1lbnRlZCcsIHBvc3RJZClcclxuXHJcbiAgICAgIGlmICh0eXBlID09PSAnUGhvdG8nKSB7XHJcbiAgICAgICAgdXJsID0gJy9waG90b3MvY29tbWVudCc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1ZpZGVvQ2xpcCcpIHtcclxuICAgICAgICB1cmwgPSAnL3ZpZGVvLWNsaXBzL2NvbW1lbnQnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdJdGVtJykge1xyXG4gICAgICAgIHVybCA9ICcvaXRlbXMvY29tbWVudCc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1Bvc3QnKSB7XHJcbiAgICAgICAgdXJsID0gJy9wb3N0cy9jb21tZW50JztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnQ29tbWVudCcpIHtcclxuICAgICAgICB1cmwgPSAnL2NvbW1lbnRzL2NvbW1lbnQnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdTaGFyZScpIHtcclxuICAgICAgICB1cmwgPSAnL3NoYXJlcy9jb21tZW50JztcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gaWYgKGZpbGVzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgLy8gICBmb3IgKHZhciBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIC8vICAgICBpZiAoZmlsZXNbaV0udHlwZS5zcGxpdCgnLycpWzBdID09PSAnaW1hZ2UnKSB7XHJcbiAgICAgIC8vICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBmaWxlc1tpXSk7XHJcbiAgICAgIC8vICAgICB9XHJcbiAgICAgIC8vICAgfVxyXG4gICAgICAvLyB9XHJcbiAgICAgIFxyXG4gICAgICBpZiAodGV4dC5sZW5ndGggIT09IDApIHtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3RleHQnLCB0ZXh0KVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBkYXRhRm9yUmVxdWVzdCA9IGZvcm1EYXRhXHJcblxyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmwsXHJcbiAgICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IHRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcblxyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICBvblVwZGF0ZVRpbWVsaW5lKGRhdGEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBhd2FpdCByZXF1ZXN0O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uUmF0ZUNvbW1lbnQgPSBhc3luYyAoY29tbWVudElkLCByYXRlKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6ICcvY29tbWVudHMvcmF0ZScsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgcmF0ZWQ6IGNvbW1lbnRJZCxcclxuICAgICAgICAgIHJhdGluZzogcmF0ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiB0b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcblxyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICAvLyBvblVwZGF0ZVRpbWVsaW5lKCk7XHJcbiAgICAgICAgLy8gbWVzc2FnZS5zdWNjZXNzKCdFdmFsdWF0ZSBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmNvbW1lbnRzLCB7XHJcbiAgICAgICAgW3N0eWxlcy5tb2RhbF9tb2RlXTogbW9kYWxNb2RlLFxyXG4gICAgICB9KX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50c193cmFwcGVyfT5cclxuICAgICAgICB7KGFjdGl2ZVBvc3RJZCA9PT0gaWQgJiYgbW9kYWxNb2RlPyBkYXRhIDogZGF0YS5zbGljZSgwLCAyKSkubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICA8Q29tbWVudEl0ZW1cclxuICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgICBpZD17aXRlbS5pZH1cclxuICAgICAgICAgICAgbWluZT17aXRlbS5taW5lfVxyXG4gICAgICAgICAgICBtZXNzYWdlPXtpdGVtLnRleHR9XHJcbiAgICAgICAgICAgIGF1dGhvcj17aXRlbS5hY2NvdW50fVxyXG4gICAgICAgICAgICByYXRpbmc9e2l0ZW0ucmF0aW5nfVxyXG4gICAgICAgICAgICBvblJhdGVDb21tZW50PXtvblJhdGVDb21tZW50fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnRfYm94fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn0+XHJcbiAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgIHNpemU9ezQ1fVxyXG4gICAgICAgICAgICB1cmw9e2F1dGgudXNlcj8ucHJvZmlsZVBob3RvPy5zcmN9XHJcbiAgICAgICAgICAgIHRleHQ9e2F1dGgudXNlcj8udXNlcm5hbWV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9PlxyXG4gICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgIHZhbHVlPXtjb21tZW50VGV4dH1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0IGRvIHlvdSBtZWFuP1wiXHJcbiAgICAgICAgICAgIHJvd3M9ezJ9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VUZXh0fVxyXG4gICAgICAgICAgICBvbktleURvd249e2hhbmRsZUVudGVyS2V5fVxyXG4gICAgICAgICAgICBzdHlsZT17eyAgYm9yZGVyUmFkaXVzOiAzNiwgaGVpZ2h0OiA0NSwgcGFkZGluZ0xlZnQ6IDMwLCBwYWRkaW5nVG9wOiAxMCwgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JywgY29sb3I6ICdibGFjayd9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RvcmUpID0+ICh7XHJcbiAgdG9rZW46IHN0b3JlLmF1dGgudG9rZW4sXHJcbiAgYXV0aDogc3RvcmUuYXV0aCxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQ29tbWVudHMpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9