webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/timeline/Comments.js":
/*!*****************************************!*\
  !*** ./components/timeline/Comments.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      comment = _useState2[0],
      setComment = _useState2[1];

  var handleEnterKey = function handleEnterKey(e) {
    if (e.nativeEvent.keyCode === 13) {
      e.preventDefault();
      onComment("Comment", id, comment);
      setComment('');
    }
  };

  var handleChangeText = function handleChangeText(e) {
    setComment(e.target.value);
  };

  var onComment = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(type, postId, text) {
      var url, dataForRequest, formData, request, data, status;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
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
              }

              if (text.length !== 0) {
                formData.append('text', text);
              }

              dataForRequest = formData;
              _context.next = 9;
              return Object(configs_API__WEBPACK_IMPORTED_MODULE_9__["default"])({
                method: 'post',
                url: url,
                data: formData,
                headers: {
                  'x-token': token
                }
              });

            case 9:
              request = _context.sent;
              data = request.data, status = request.status;

              if (!(status === 201)) {
                _context.next = 15;
                break;
              }

              onUpdateTimeline(data);
              _context.next = 17;
              break;

            case 15:
              message.error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
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

  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.comment_item, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.not_mine, !mine)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }
  }, __jsx(_common_Avatar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    size: 50,
    url: profileUrl,
    text: author === null || author === void 0 ? void 0 : author.username,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
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
      lineNumber: 97,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.message_container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.message,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.author,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  }, fullName), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }, __jsx(components_common_TrimText__WEBPACK_IMPORTED_MODULE_7__["default"], {
    limit: 110,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, message))), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.reply,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
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
      lineNumber: 114,
      columnNumber: 13
    }
  }, "reply")), visible ? __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.comment_box,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  }, __jsx(_common_Avatar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    size: 35,
    url: profileUrl,
    text: author === null || author === void 0 ? void 0 : author.username,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.input,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 11
    }
  }, __jsx(TextArea, {
    value: comment,
    placeholder: "What do you mean?",
    rows: 2,
    onChange: handleChangeText,
    onKeyDown: handleEnterKey,
    style: {
      borderRadius: 36,
      height: 25,
      background: 'transparent',
      color: 'black'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }))) : null));
}

_s(CommentItem, "2WGkBsoECXw/5ikEhutDQqEDcy4=");

_c = CommentItem;

function Comments(_ref3) {
  _s2();

  var _this = this,
      _auth$user,
      _auth$user$profilePho,
      _auth$user2;

  var _ref3$data = _ref3.data,
      data = _ref3$data === void 0 ? [] : _ref3$data,
      modalMode = _ref3.modalMode,
      id = _ref3.id,
      type = _ref3.type,
      auth = _ref3.auth,
      onUpdateTimeline = _ref3.onUpdateTimeline,
      token = _ref3.token,
      activePostId = _ref3.activePostId;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      commentText = _useState3[0],
      setCommentText = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      commentList = _useState4[0],
      setCommentList = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(activePostId === id),
      active = _useState5[0],
      setActive = _useState5[1];

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
    var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(type, postId, text) {
      var url, dataForRequest, formData, request, _data, status;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log(type, postId, text);
              _context2.prev = 1;
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
              _context2.next = 10;
              return Object(configs_API__WEBPACK_IMPORTED_MODULE_9__["default"])({
                method: 'post',
                url: url,
                data: formData,
                headers: {
                  'x-token': token
                }
              });

            case 10:
              request = _context2.sent;
              _data = request.data, status = request.status;

              if (!(status === 201)) {
                _context2.next = 16;
                break;
              }

              onUpdateTimeline(_data);
              _context2.next = 18;
              break;

            case 16:
              antd__WEBPACK_IMPORTED_MODULE_4__["message"].error((_data === null || _data === void 0 ? void 0 : _data.message) || 'Something wrong');
              throw new Error();

            case 18:
              _context2.next = 20;
              return request;

            case 20:
              return _context2.abrupt("return", _context2.sent);

            case 23:
              _context2.prev = 23;
              _context2.t0 = _context2["catch"](1);
              console.log(_context2.t0);

            case 26:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 23]]);
    }));

    return function onComment(_x4, _x5, _x6) {
      return _ref4.apply(this, arguments);
    };
  }();

  var onRateComment = /*#__PURE__*/function () {
    var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(commentId, rate) {
      var request, _data2, status;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
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
              request = _context3.sent;
              _data2 = request.data, status = request.status;

              if (!(status === 201)) {
                _context3.next = 8;
                break;
              }

              _context3.next = 9;
              break;

            case 8:
              throw new Error();

            case 9:
              _context3.next = 14;
              break;

            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3["catch"](0);
              console.log(_context3.t0);

            case 14:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 11]]);
    }));

    return function onRateComment(_x7, _x8) {
      return _ref5.apply(this, arguments);
    };
  }();

  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.comments, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.modal_mode, modalMode)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.comments_wrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
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
      token: token,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 11
      }
    });
  })), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.comment_box,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 9
    }
  }, __jsx(_common_Avatar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    size: 45,
    url: (_auth$user = auth.user) === null || _auth$user === void 0 ? void 0 : (_auth$user$profilePho = _auth$user.profilePhoto) === null || _auth$user$profilePho === void 0 ? void 0 : _auth$user$profilePho.src,
    text: (_auth$user2 = auth.user) === null || _auth$user2 === void 0 ? void 0 : _auth$user2.username,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.input,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
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
      lineNumber: 283,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aW1lbGluZS9Db21tZW50cy5qcyJdLCJuYW1lcyI6WyJUZXh0QXJlYSIsIklucHV0IiwiQ29tbWVudEl0ZW0iLCJtZXNzYWdlIiwibWluZSIsImF1dGhvciIsInJhdGluZyIsImlkIiwib25SYXRlQ29tbWVudCIsImZ1bGxOYW1lIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJoYW5kbGVSYXRlQ29tbWVudCIsInJhdGUiLCJ1c2VTdGF0ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwicHJvZmlsZVVybCIsInVuZGVmaW5lZCIsInByb2ZpbGVQaG90byIsInNyYyIsImNvbW1lbnQiLCJzZXRDb21tZW50IiwiaGFuZGxlRW50ZXJLZXkiLCJlIiwibmF0aXZlRXZlbnQiLCJrZXlDb2RlIiwicHJldmVudERlZmF1bHQiLCJvbkNvbW1lbnQiLCJoYW5kbGVDaGFuZ2VUZXh0IiwidGFyZ2V0IiwidmFsdWUiLCJ0eXBlIiwicG9zdElkIiwidGV4dCIsInVybCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJsZW5ndGgiLCJkYXRhRm9yUmVxdWVzdCIsIkFQSSIsIm1ldGhvZCIsImRhdGEiLCJoZWFkZXJzIiwidG9rZW4iLCJyZXF1ZXN0Iiwic3RhdHVzIiwib25VcGRhdGVUaW1lbGluZSIsImVycm9yIiwiRXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY2xhc3NuYW1lcyIsInN0eWxlcyIsImNvbW1lbnRfaXRlbSIsIm5vdF9taW5lIiwiYXZhdGFyIiwidXNlcm5hbWUiLCJtZXNzYWdlX2NvbnRhaW5lciIsInJlcGx5IiwiZm9udFNpemUiLCJ0ZXh0RGVjb3JhdGlvbiIsInRleHRBbGlnbiIsImNvbW1lbnRfYm94IiwiaW5wdXQiLCJib3JkZXJSYWRpdXMiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJDb21tZW50cyIsIm1vZGFsTW9kZSIsImF1dGgiLCJhY3RpdmVQb3N0SWQiLCJjb21tZW50VGV4dCIsInNldENvbW1lbnRUZXh0IiwiY29tbWVudExpc3QiLCJzZXRDb21tZW50TGlzdCIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImNvbW1lbnRJZCIsInJhdGVkIiwiY29tbWVudHMiLCJtb2RhbF9tb2RlIiwiY29tbWVudHNfd3JhcHBlciIsInNsaWNlIiwibWFwIiwiaXRlbSIsImFjY291bnQiLCJ1c2VyIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nVG9wIiwibWFwU3RhdGVUb1Byb3BzIiwic3RvcmUiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFFUUEsUSxHQUFhQywwQyxDQUFiRCxROztBQUVSLFNBQVNFLFdBQVQsT0FBMkU7QUFBQTs7QUFBQTs7QUFBQSxNQUFwREMsT0FBb0QsUUFBcERBLE9BQW9EO0FBQUEsTUFBM0NDLElBQTJDLFFBQTNDQSxJQUEyQztBQUFBLE1BQXJDQyxNQUFxQyxRQUFyQ0EsTUFBcUM7QUFBQSxNQUE3QkMsTUFBNkIsUUFBN0JBLE1BQTZCO0FBQUEsTUFBckJDLEVBQXFCLFFBQXJCQSxFQUFxQjtBQUFBLE1BQWpCQyxhQUFpQixRQUFqQkEsYUFBaUI7QUFDekUsTUFBTUMsUUFBUSxhQUFNSixNQUFOLGFBQU1BLE1BQU4sdUJBQU1BLE1BQU0sQ0FBRUssU0FBZCxjQUEyQkwsTUFBM0IsYUFBMkJBLE1BQTNCLHVCQUEyQkEsTUFBTSxDQUFFTSxRQUFuQyxDQUFkOztBQUNBLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsSUFBRCxFQUFVO0FBQ2xDTCxpQkFBYSxDQUFDRCxFQUFELEVBQUtNLElBQUwsQ0FBYjtBQUNELEdBRkQ7O0FBRnlFLGtCQUszQ0Msc0RBQVEsQ0FBQyxLQUFELENBTG1DO0FBQUEsTUFLbEVDLE9BTGtFO0FBQUEsTUFLekRDLFVBTHlEOztBQU16RSxNQUFNQyxV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SyxFQUFFO0FBQXBHLEtBTlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBUkYsQ0FwQkYsQ0FERjtBQTBDRDs7SUF6SlFDLFE7O01BQUFBLFE7O0FBMkpULElBQU1zQixlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ2xDaEQsU0FBSyxFQUFFZ0QsS0FBSyxDQUFDckIsSUFBTixDQUFXM0IsS0FEZ0I7QUFFbEMyQixRQUFJLEVBQUVxQixLQUFLLENBQUNyQjtBQUZzQixHQUFaO0FBQUEsQ0FBeEI7O0FBS2VzQiwySEFBTyxDQUFDRixlQUFELENBQVAsQ0FBeUJ0QixRQUF6QixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuNDQ3MTAwNWEwNWNlOTBiZjY5YzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBQb3BvdmVyIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvY29tbWVudC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVHJpbVRleHQgZnJvbSAnY29tcG9uZW50cy9jb21tb24vVHJpbVRleHQnO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJy4uL2NvbW1vbi9BdmF0YXInO1xyXG5pbXBvcnQgQVBJIGZyb20gJ2NvbmZpZ3MvQVBJJztcclxuaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgRHJhZ2FibGVSYXRpbmcgZnJvbSAnLi4vZm9ybXMvcmF0aW5nL0RyYWdhYmxlUmF0aW5nJztcclxuaW1wb3J0IFJhdGluZ1NsaWRlIGZyb20gJy4uL2Zvcm1zL3JhdGluZy9SYXRpbmdTbGlkZSc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuXHJcbmZ1bmN0aW9uIENvbW1lbnRJdGVtKHsgbWVzc2FnZSwgbWluZSwgYXV0aG9yLCByYXRpbmcsIGlkLCBvblJhdGVDb21tZW50IH0pIHtcclxuICBjb25zdCBmdWxsTmFtZSA9IGAke2F1dGhvcj8uZmlyc3ROYW1lfSAke2F1dGhvcj8ubGFzdE5hbWV9YDtcclxuICBjb25zdCBoYW5kbGVSYXRlQ29tbWVudCA9IChyYXRlKSA9PiB7XHJcbiAgICBvblJhdGVDb21tZW50KGlkLCByYXRlKTtcclxuICB9O1xyXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBwcm9maWxlVXJsID0gYXV0aG9yICE9PSBudWxsICYmIGF1dGhvciAhPT0gdW5kZWZpbmVkID8gYCR7YXV0aG9yLnByb2ZpbGVQaG90bz8uc3JjfWAgOiBudWxsXHJcbiAgY29uc3QgW2NvbW1lbnQsIHNldENvbW1lbnRdID0gdXNlU3RhdGUoJycpO1xyXG4gXHJcbiAgY29uc3QgaGFuZGxlRW50ZXJLZXkgPSAoZSkgPT4ge1xyXG4gICAgaWYgKGUubmF0aXZlRXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBvbkNvbW1lbnQoXCJDb21tZW50XCIsIGlkLCBjb21tZW50KTtcclxuICAgICAgc2V0Q29tbWVudCgnJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlVGV4dCA9IChlKSA9PiB7XHJcbiAgICBzZXRDb21tZW50KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkNvbW1lbnQgPSBhc3luYyAodHlwZSwgcG9zdElkLCB0ZXh0KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgdXJsID0gJyc7XHJcbiAgICAgIGxldCBkYXRhRm9yUmVxdWVzdDtcclxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGE7XHJcblxyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2NvbW1lbnRlZCcsIHBvc3RJZClcclxuXHJcbiAgICAgIGlmICh0eXBlID09PSAnUGhvdG8nKSB7XHJcbiAgICAgICAgdXJsID0gJy9waG90b3MvY29tbWVudCc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1ZpZGVvQ2xpcCcpIHtcclxuICAgICAgICB1cmwgPSAnL3ZpZGVvLWNsaXBzL2NvbW1lbnQnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdJdGVtJykge1xyXG4gICAgICAgIHVybCA9ICcvaXRlbXMvY29tbWVudCc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1Bvc3QnKSB7XHJcbiAgICAgICAgdXJsID0gJy9wb3N0cy9jb21tZW50JztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnQ29tbWVudCcpIHtcclxuICAgICAgICB1cmwgPSAnL2NvbW1lbnRzL2NvbW1lbnQnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdTaGFyZScpIHtcclxuICAgICAgICB1cmwgPSAnL3NoYXJlcy9jb21tZW50JztcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaWYgKHRleHQubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd0ZXh0JywgdGV4dClcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgZGF0YUZvclJlcXVlc3QgPSBmb3JtRGF0YVxyXG5cclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsLFxyXG4gICAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiB0b2tlbiB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG5cclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgb25VcGRhdGVUaW1lbGluZShkYXRhKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gYXdhaXQgcmVxdWVzdDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuY29tbWVudF9pdGVtLCB7XHJcbiAgICAgICAgW3N0eWxlcy5ub3RfbWluZV06ICFtaW5lLFxyXG4gICAgICB9KX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9PlxyXG4gICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgIHNpemU9ezUwfVxyXG4gICAgICAgICAgdXJsPXtwcm9maWxlVXJsfVxyXG4gICAgICAgICAgdGV4dD17YXV0aG9yPy51c2VybmFtZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxSYXRpbmdTbGlkZVxyXG4gICAgICAgICAgZGVmYXVsdFJhdGU9e3JhdGluZ31cclxuICAgICAgICAgIHdpdGhvdXRUZXh0XHJcbiAgICAgICAgICBkYXJrXHJcbiAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVJhdGVDb21tZW50fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgey8qIDxEcmFnYWJsZVJhdGluZyByYXRpbmc9e3JhdGluZ30gaGFuZGxlUmF0ZUNvbW1lbnQ9e2hhbmRsZVJhdGVDb21tZW50fSAvPiAqL31cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVzc2FnZV9jb250YWluZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVzc2FnZX0+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5hdXRob3J9PntmdWxsTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgPFRyaW1UZXh0IGxpbWl0PXsxMTB9PnttZXNzYWdlfTwvVHJpbVRleHQ+XHJcbiAgICAgICAgICA8L3A+IFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVwbHl9PlxyXG4gICAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogMTUsIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fSBvbkNsaWNrPXsoKSA9PiBzZXRWaXNpYmxlKHRydWUpfT5yZXBseTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7dmlzaWJsZT9cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnRfYm94fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyfT5cclxuICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgIHNpemU9ezM1fVxyXG4gICAgICAgICAgICAgIHVybD17cHJvZmlsZVVybH1cclxuICAgICAgICAgICAgICB0ZXh0PXthdXRob3I/LnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fT5cclxuICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2NvbW1lbnR9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0IGRvIHlvdSBtZWFuP1wiXHJcbiAgICAgICAgICAgICAgcm93cz17Mn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlVGV4dH1cclxuICAgICAgICAgICAgICBvbktleURvd249e2hhbmRsZUVudGVyS2V5fVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7ICBib3JkZXJSYWRpdXM6IDM2LCBoZWlnaHQ6IDI1LCBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLCBjb2xvcjogJ2JsYWNrJ319XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+Om51bGx9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gQ29tbWVudHMoe1xyXG4gIGRhdGEgPSBbXSxcclxuICBtb2RhbE1vZGUsXHJcbiAgaWQsXHJcbiAgdHlwZSxcclxuICBhdXRoLFxyXG4gIG9uVXBkYXRlVGltZWxpbmUsXHJcbiAgdG9rZW4sXHJcbiAgYWN0aXZlUG9zdElkXHJcbn0pIHtcclxuICBjb25zdCBbY29tbWVudFRleHQsIHNldENvbW1lbnRUZXh0XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbY29tbWVudExpc3QsIHNldENvbW1lbnRMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoYWN0aXZlUG9zdElkID09PSBpZCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUVudGVyS2V5ID0gKGUpID0+IHtcclxuICAgIGlmIChlLm5hdGl2ZUV2ZW50LmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIG9uQ29tbWVudCh0eXBlLCBpZCwgY29tbWVudFRleHQpO1xyXG5cclxuICAgICAgc2V0Q29tbWVudFRleHQoJycpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVRleHQgPSAoZSkgPT4ge1xyXG4gICAgc2V0Q29tbWVudFRleHQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQ29tbWVudCA9IGFzeW5jICh0eXBlLCBwb3N0SWQsIHRleHQpID0+IHtjb25zb2xlLmxvZyh0eXBlLCBwb3N0SWQsIHRleHQpXHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgdXJsID0gJyc7XHJcbiAgICAgIGxldCBkYXRhRm9yUmVxdWVzdDtcclxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGE7XHJcblxyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2NvbW1lbnRlZCcsIHBvc3RJZClcclxuXHJcbiAgICAgIGlmICh0eXBlID09PSAnUGhvdG8nKSB7XHJcbiAgICAgICAgdXJsID0gJy9waG90b3MvY29tbWVudCc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1ZpZGVvQ2xpcCcpIHtcclxuICAgICAgICB1cmwgPSAnL3ZpZGVvLWNsaXBzL2NvbW1lbnQnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdJdGVtJykge1xyXG4gICAgICAgIHVybCA9ICcvaXRlbXMvY29tbWVudCc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1Bvc3QnKSB7XHJcbiAgICAgICAgdXJsID0gJy9wb3N0cy9jb21tZW50JztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnQ29tbWVudCcpIHtcclxuICAgICAgICB1cmwgPSAnL2NvbW1lbnRzL2NvbW1lbnQnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdTaGFyZScpIHtcclxuICAgICAgICB1cmwgPSAnL3NoYXJlcy9jb21tZW50JztcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gaWYgKGZpbGVzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgLy8gICBmb3IgKHZhciBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIC8vICAgICBpZiAoZmlsZXNbaV0udHlwZS5zcGxpdCgnLycpWzBdID09PSAnaW1hZ2UnKSB7XHJcbiAgICAgIC8vICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBmaWxlc1tpXSk7XHJcbiAgICAgIC8vICAgICB9XHJcbiAgICAgIC8vICAgfVxyXG4gICAgICAvLyB9XHJcbiAgICAgIFxyXG4gICAgICBpZiAodGV4dC5sZW5ndGggIT09IDApIHtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3RleHQnLCB0ZXh0KVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBkYXRhRm9yUmVxdWVzdCA9IGZvcm1EYXRhXHJcblxyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmwsXHJcbiAgICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IHRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcblxyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICBvblVwZGF0ZVRpbWVsaW5lKGRhdGEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBhd2FpdCByZXF1ZXN0O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uUmF0ZUNvbW1lbnQgPSBhc3luYyAoY29tbWVudElkLCByYXRlKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6ICcvY29tbWVudHMvcmF0ZScsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgcmF0ZWQ6IGNvbW1lbnRJZCxcclxuICAgICAgICAgIHJhdGluZzogcmF0ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiB0b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcblxyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICAvLyBvblVwZGF0ZVRpbWVsaW5lKCk7XHJcbiAgICAgICAgLy8gbWVzc2FnZS5zdWNjZXNzKCdFdmFsdWF0ZSBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmNvbW1lbnRzLCB7XHJcbiAgICAgICAgW3N0eWxlcy5tb2RhbF9tb2RlXTogbW9kYWxNb2RlLFxyXG4gICAgICB9KX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50c193cmFwcGVyfT5cclxuICAgICAgICB7KGFjdGl2ZVBvc3RJZCA9PT0gaWQgJiYgbW9kYWxNb2RlPyBkYXRhIDogZGF0YS5zbGljZSgwLCAyKSkubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICA8Q29tbWVudEl0ZW1cclxuICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgICBpZD17aXRlbS5pZH1cclxuICAgICAgICAgICAgbWluZT17aXRlbS5taW5lfVxyXG4gICAgICAgICAgICBtZXNzYWdlPXtpdGVtLnRleHR9XHJcbiAgICAgICAgICAgIGF1dGhvcj17aXRlbS5hY2NvdW50fVxyXG4gICAgICAgICAgICByYXRpbmc9e2l0ZW0ucmF0aW5nfVxyXG4gICAgICAgICAgICBvblJhdGVDb21tZW50PXtvblJhdGVDb21tZW50fVxyXG4gICAgICAgICAgICB0b2tlbj17dG9rZW59XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tbWVudF9ib3h9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyfT5cclxuICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgc2l6ZT17NDV9XHJcbiAgICAgICAgICAgIHVybD17YXV0aC51c2VyPy5wcm9maWxlUGhvdG8/LnNyY31cclxuICAgICAgICAgICAgdGV4dD17YXV0aC51c2VyPy51c2VybmFtZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0+XHJcbiAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgdmFsdWU9e2NvbW1lbnRUZXh0fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgZG8geW91IG1lYW4/XCJcclxuICAgICAgICAgICAgcm93cz17Mn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVRleHR9XHJcbiAgICAgICAgICAgIG9uS2V5RG93bj17aGFuZGxlRW50ZXJLZXl9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7ICBib3JkZXJSYWRpdXM6IDM2LCBoZWlnaHQ6IDQ1LCBwYWRkaW5nTGVmdDogMzAsIHBhZGRpbmdUb3A6IDEwLCBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLCBjb2xvcjogJ2JsYWNrJ319XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdG9yZSkgPT4gKHtcclxuICB0b2tlbjogc3RvcmUuYXV0aC50b2tlbixcclxuICBhdXRoOiBzdG9yZS5hdXRoLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShDb21tZW50cyk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=