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
      onRateComment = _ref.onRateComment,
      token = _ref.token;
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

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      comments = _useState3[0],
      setComments = _useState3[1];

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
                _context.next = 14;
                break;
              }

              _context.next = 16;
              break;

            case 14:
              message.error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
              throw new Error();

            case 16:
              _context.next = 18;
              return request;

            case 18:
              return _context.abrupt("return", _context.sent);

            case 21:
              _context.prev = 21;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 24:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 21]]);
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
      lineNumber: 87,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }, __jsx(_common_Avatar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    size: 50,
    url: profileUrl,
    text: author === null || author === void 0 ? void 0 : author.username,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
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
      lineNumber: 98,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.message_container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.message,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.author,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }, fullName), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  }, __jsx(components_common_TrimText__WEBPACK_IMPORTED_MODULE_7__["default"], {
    limit: 110,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, message))), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.reply,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
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
      lineNumber: 115,
      columnNumber: 13
    }
  }, "reply")), visible ? __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.comment_box,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }, __jsx(_common_Avatar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    size: 35,
    url: profileUrl,
    text: author === null || author === void 0 ? void 0 : author.username,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.input,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
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
      lineNumber: 127,
      columnNumber: 13
    }
  }))) : null));
}

_s(CommentItem, "by9DMofWfJXI43WLANmGH+oETS8=");

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

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      commentText = _useState4[0],
      setCommentText = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      commentList = _useState5[0],
      setCommentList = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(activePostId === id),
      active = _useState6[0],
      setActive = _useState6[1];

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

  console.log(data);
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.comments, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.modal_mode, modalMode)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.comments_wrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
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
        lineNumber: 262,
        columnNumber: 11
      }
    });
  })), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.comment_box,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 9
    }
  }, __jsx(_common_Avatar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    size: 45,
    url: (_auth$user = auth.user) === null || _auth$user === void 0 ? void 0 : (_auth$user$profilePho = _auth$user.profilePhoto) === null || _auth$user$profilePho === void 0 ? void 0 : _auth$user$profilePho.src,
    text: (_auth$user2 = auth.user) === null || _auth$user2 === void 0 ? void 0 : _auth$user2.username,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.input,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
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
      lineNumber: 284,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aW1lbGluZS9Db21tZW50cy5qcyJdLCJuYW1lcyI6WyJUZXh0QXJlYSIsIklucHV0IiwiQ29tbWVudEl0ZW0iLCJtZXNzYWdlIiwibWluZSIsImF1dGhvciIsInJhdGluZyIsImlkIiwib25SYXRlQ29tbWVudCIsInRva2VuIiwiZnVsbE5hbWUiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImhhbmRsZVJhdGVDb21tZW50IiwicmF0ZSIsInVzZVN0YXRlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJwcm9maWxlVXJsIiwidW5kZWZpbmVkIiwicHJvZmlsZVBob3RvIiwic3JjIiwiY29tbWVudCIsInNldENvbW1lbnQiLCJjb21tZW50cyIsInNldENvbW1lbnRzIiwiaGFuZGxlRW50ZXJLZXkiLCJlIiwibmF0aXZlRXZlbnQiLCJrZXlDb2RlIiwicHJldmVudERlZmF1bHQiLCJvbkNvbW1lbnQiLCJoYW5kbGVDaGFuZ2VUZXh0IiwidGFyZ2V0IiwidmFsdWUiLCJ0eXBlIiwicG9zdElkIiwidGV4dCIsInVybCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJsZW5ndGgiLCJkYXRhRm9yUmVxdWVzdCIsIkFQSSIsIm1ldGhvZCIsImRhdGEiLCJoZWFkZXJzIiwicmVxdWVzdCIsInN0YXR1cyIsImVycm9yIiwiRXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY2xhc3NuYW1lcyIsInN0eWxlcyIsImNvbW1lbnRfaXRlbSIsIm5vdF9taW5lIiwiYXZhdGFyIiwidXNlcm5hbWUiLCJtZXNzYWdlX2NvbnRhaW5lciIsInJlcGx5IiwiZm9udFNpemUiLCJ0ZXh0RGVjb3JhdGlvbiIsInRleHRBbGlnbiIsImNvbW1lbnRfYm94IiwiaW5wdXQiLCJib3JkZXJSYWRpdXMiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJDb21tZW50cyIsIm1vZGFsTW9kZSIsImF1dGgiLCJvblVwZGF0ZVRpbWVsaW5lIiwiYWN0aXZlUG9zdElkIiwiY29tbWVudFRleHQiLCJzZXRDb21tZW50VGV4dCIsImNvbW1lbnRMaXN0Iiwic2V0Q29tbWVudExpc3QiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJjb21tZW50SWQiLCJyYXRlZCIsIm1vZGFsX21vZGUiLCJjb21tZW50c193cmFwcGVyIiwic2xpY2UiLCJtYXAiLCJpdGVtIiwiYWNjb3VudCIsInVzZXIiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdUb3AiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdG9yZSIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUVRQSxRLEdBQWFDLDBDLENBQWJELFE7O0FBRVIsU0FBU0UsV0FBVCxPQUFrRjtBQUFBOztBQUFBOztBQUFBLE1BQTNEQyxPQUEyRCxRQUEzREEsT0FBMkQ7QUFBQSxNQUFsREMsSUFBa0QsUUFBbERBLElBQWtEO0FBQUEsTUFBNUNDLE1BQTRDLFFBQTVDQSxNQUE0QztBQUFBLE1BQXBDQyxNQUFvQyxRQUFwQ0EsTUFBb0M7QUFBQSxNQUE1QkMsRUFBNEIsUUFBNUJBLEVBQTRCO0FBQUEsTUFBeEJDLGFBQXdCLFFBQXhCQSxhQUF3QjtBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUztBQUNoRixNQUFNQyxRQUFRLGFBQU1MLE1BQU4sYUFBTUEsTUFBTix1QkFBTUEsTUFBTSxDQUFFTSxTQUFkLGNBQTJCTixNQUEzQixhQUEyQkEsTUFBM0IsdUJBQTJCQSxNQUFNLENBQUVPLFFBQW5DLENBQWQ7O0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxJQUFELEVBQVU7QUFDbENOLGlCQUFhLENBQUNELEVBQUQsRUFBS08sSUFBTCxDQUFiO0FBQ0QsR0FGRDs7QUFGZ0Ysa0JBS2xEQyxzREFBUSxDQUFDLEtBQUQsQ0FMMEM7QUFBQSxNQUt6RUMsT0FMeUU7QUFBQSxNQUtoRUMsVUFMZ0U7O0FBTWhGLE1BQU1DLFVBQVUsR0FBR2IsTUFBTSxLQUFLLElBQVgsSUFBbUJBLE1BQU0sS0FBS2MsU0FBOUIscUNBQTZDZCxNQUFNLENBQUNlLFlBQXBELHlEQUE2QyxxQkFBcUJDLEdBQWxFLElBQTBFLElBQTdGOztBQU5nRixtQkFPbEROLHNEQUFRLENBQUMsRUFBRCxDQVAwQztBQUFBLE1BT3pFTyxPQVB5RTtBQUFBLE1BT2hFQyxVQVBnRTs7QUFBQSxtQkFRaERSLHNEQUFRLENBQUMsRUFBRCxDQVJ3QztBQUFBLE1BUXpFUyxRQVJ5RTtBQUFBLE1BUS9EQyxXQVIrRDs7QUFVaEYsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxDQUFELEVBQU87QUFDNUIsUUFBSUEsQ0FBQyxDQUFDQyxXQUFGLENBQWNDLE9BQWQsS0FBMEIsRUFBOUIsRUFBa0M7QUFDaENGLE9BQUMsQ0FBQ0csY0FBRjtBQUNBQyxlQUFTLENBQUMsU0FBRCxFQUFZeEIsRUFBWixFQUFnQmUsT0FBaEIsQ0FBVDtBQUNBQyxnQkFBVSxDQUFDLEVBQUQsQ0FBVjtBQUNEO0FBQ0YsR0FORDs7QUFRQSxNQUFNUyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNMLENBQUQsRUFBTztBQUM5QkosY0FBVSxDQUFDSSxDQUFDLENBQUNNLE1BQUYsQ0FBU0MsS0FBVixDQUFWO0FBQ0QsR0FGRDs7QUFJQSxNQUFNSCxTQUFTO0FBQUEsaU1BQUcsaUJBQU9JLElBQVAsRUFBYUMsTUFBYixFQUFxQkMsSUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFVkMsaUJBRlUsR0FFSixFQUZJO0FBSVJDLHNCQUpRLEdBSUcsSUFBSUMsUUFBSixFQUpIO0FBTWRELHNCQUFRLENBQUNFLE1BQVQsQ0FBZ0IsV0FBaEIsRUFBNkJMLE1BQTdCOztBQUVBLGtCQUFJRCxJQUFJLEtBQUssT0FBYixFQUFzQjtBQUNwQkcsbUJBQUcsR0FBRyxpQkFBTjtBQUNELGVBRkQsTUFFTyxJQUFJSCxJQUFJLEtBQUssV0FBYixFQUEwQjtBQUMvQkcsbUJBQUcsR0FBRyxzQkFBTjtBQUNELGVBRk0sTUFFQSxJQUFJSCxJQUFJLEtBQUssTUFBYixFQUFxQjtBQUMxQkcsbUJBQUcsR0FBRyxnQkFBTjtBQUNELGVBRk0sTUFFQSxJQUFJSCxJQUFJLEtBQUssTUFBYixFQUFxQjtBQUMxQkcsbUJBQUcsR0FBRyxnQkFBTjtBQUNELGVBRk0sTUFFQSxJQUFJSCxJQUFJLEtBQUssU0FBYixFQUF3QjtBQUM3QkcsbUJBQUcsR0FBRyxtQkFBTjtBQUNELGVBRk0sTUFFQSxJQUFJSCxJQUFJLEtBQUssT0FBYixFQUFzQjtBQUMzQkcsbUJBQUcsR0FBRyxpQkFBTjtBQUNEOztBQUVELGtCQUFJRCxJQUFJLENBQUNLLE1BQUwsS0FBZ0IsQ0FBcEIsRUFBdUI7QUFDckJILHdCQUFRLENBQUNFLE1BQVQsQ0FBZ0IsTUFBaEIsRUFBd0JKLElBQXhCO0FBQ0Q7O0FBRURNLDRCQUFjLEdBQUdKLFFBQWpCO0FBMUJjO0FBQUEscUJBNEJRSywyREFBRyxDQUFDO0FBQ3hCQyxzQkFBTSxFQUFFLE1BRGdCO0FBRXhCUCxtQkFBRyxFQUFIQSxHQUZ3QjtBQUd4QlEsb0JBQUksRUFBRVAsUUFIa0I7QUFJeEJRLHVCQUFPLEVBQUU7QUFBRSw2QkFBV3RDO0FBQWI7QUFKZSxlQUFELENBNUJYOztBQUFBO0FBNEJSdUMscUJBNUJRO0FBbUNORixrQkFuQ00sR0FtQ1dFLE9BbkNYLENBbUNORixJQW5DTSxFQW1DQUcsTUFuQ0EsR0FtQ1dELE9BbkNYLENBbUNBQyxNQW5DQTs7QUFBQSxvQkFxQ1ZBLE1BQU0sS0FBSyxHQXJDRDtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBd0NaOUMscUJBQU8sQ0FBQytDLEtBQVIsQ0FBYyxDQUFBSixJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLFlBQUFBLElBQUksQ0FBRTNDLE9BQU4sS0FBaUIsaUJBQS9CO0FBeENZLG9CQXlDTixJQUFJZ0QsS0FBSixFQXpDTTs7QUFBQTtBQUFBO0FBQUEscUJBNENESCxPQTVDQzs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQThDZEkscUJBQU8sQ0FBQ0MsR0FBUjs7QUE5Q2M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBVHRCLFNBQVM7QUFBQTtBQUFBO0FBQUEsS0FBZjs7QUFpREEsU0FDRTtBQUNFLGFBQVMsRUFBRXVCLGlEQUFVLENBQUNDLGtFQUFNLENBQUNDLFlBQVIsZ0dBQ2xCRCxrRUFBTSxDQUFDRSxRQURXLEVBQ0EsQ0FBQ3JELElBREQsRUFEdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFO0FBQUssYUFBUyxFQUFFbUQsa0VBQU0sQ0FBQ0csTUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFDRSxRQUFJLEVBQUUsRUFEUjtBQUVFLE9BQUcsRUFBRXhDLFVBRlA7QUFHRSxRQUFJLEVBQUViLE1BQUYsYUFBRUEsTUFBRix1QkFBRUEsTUFBTSxDQUFFc0QsUUFIaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBTUUsTUFBQyxrRUFBRDtBQUNFLGVBQVcsRUFBRXJELE1BRGY7QUFFRSxlQUFXLE1BRmI7QUFHRSxRQUFJLE1BSE47QUFJRSxRQUFJLEVBQUMsT0FKUDtBQUtFLFlBQVEsRUFBRU8saUJBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLENBTEYsRUFvQkU7QUFBSyxhQUFTLEVBQUUwQyxrRUFBTSxDQUFDSyxpQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFTCxrRUFBTSxDQUFDcEQsT0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sYUFBUyxFQUFFb0Qsa0VBQU0sQ0FBQ2xELE1BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBaUNLLFFBQWpDLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrRUFBRDtBQUFVLFNBQUssRUFBRSxHQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXVCUCxPQUF2QixDQURGLENBRkYsQ0FERixFQU9FO0FBQUssYUFBUyxFQUFFb0Qsa0VBQU0sQ0FBQ00sS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsU0FBSyxFQUFFO0FBQUVDLGNBQVEsRUFBRSxFQUFaO0FBQWdCQyxvQkFBYyxFQUFFLFdBQWhDO0FBQTZDQyxlQUFTLEVBQUU7QUFBeEQsS0FBVjtBQUE4RSxXQUFPLEVBQUU7QUFBQSxhQUFNL0MsVUFBVSxDQUFDLElBQUQsQ0FBaEI7QUFBQSxLQUF2RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosQ0FQRixFQVVHRCxPQUFPLEdBQ1I7QUFBSyxhQUFTLEVBQUV1QyxrRUFBTSxDQUFDVSxXQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVWLGtFQUFNLENBQUNHLE1BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQ0UsUUFBSSxFQUFFLEVBRFI7QUFFRSxPQUFHLEVBQUV4QyxVQUZQO0FBR0UsUUFBSSxFQUFFYixNQUFGLGFBQUVBLE1BQUYsdUJBQUVBLE1BQU0sQ0FBRXNELFFBSGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBUUU7QUFBSyxhQUFTLEVBQUVKLGtFQUFNLENBQUNXLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFFBQUQ7QUFDRSxTQUFLLEVBQUU1QyxPQURUO0FBRUUsZUFBVyxFQUFDLG1CQUZkO0FBR0UsUUFBSSxFQUFFLENBSFI7QUFJRSxZQUFRLEVBQUVVLGdCQUpaO0FBS0UsYUFBUyxFQUFFTixjQUxiO0FBTUUsU0FBSyxFQUFFO0FBQUd5QyxrQkFBWSxFQUFFLEVBQWpCO0FBQXFCQyxZQUFNLEVBQUUsRUFBN0I7QUFBaUNDLGdCQUFVLEVBQUUsYUFBN0M7QUFBNERDLFdBQUssRUFBRTtBQUFuRSxLQU5UO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVJGLENBRFEsR0FtQkgsSUE3QlAsQ0FwQkYsQ0FERjtBQXVERDs7R0E5SFFwRSxXOztLQUFBQSxXOztBQWdJVCxTQUFTcUUsUUFBVCxRQVNHO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUEseUJBUkR6QixJQVFDO0FBQUEsTUFSREEsSUFRQywyQkFSTSxFQVFOO0FBQUEsTUFQRDBCLFNBT0MsU0FQREEsU0FPQztBQUFBLE1BTkRqRSxFQU1DLFNBTkRBLEVBTUM7QUFBQSxNQUxENEIsSUFLQyxTQUxEQSxJQUtDO0FBQUEsTUFKRHNDLElBSUMsU0FKREEsSUFJQztBQUFBLE1BSERDLGdCQUdDLFNBSERBLGdCQUdDO0FBQUEsTUFGRGpFLEtBRUMsU0FGREEsS0FFQztBQUFBLE1BRERrRSxZQUNDLFNBRERBLFlBQ0M7O0FBQUEsbUJBQ3FDNUQsc0RBQVEsQ0FBQyxFQUFELENBRDdDO0FBQUEsTUFDTTZELFdBRE47QUFBQSxNQUNtQkMsY0FEbkI7O0FBQUEsbUJBRXFDOUQsc0RBQVEsQ0FBQyxFQUFELENBRjdDO0FBQUEsTUFFTStELFdBRk47QUFBQSxNQUVtQkMsY0FGbkI7O0FBQUEsbUJBRzJCaEUsc0RBQVEsQ0FBQzRELFlBQVksS0FBS3BFLEVBQWxCLENBSG5DO0FBQUEsTUFHTXlFLE1BSE47QUFBQSxNQUdjQyxTQUhkOztBQUtELE1BQU12RCxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLENBQUQsRUFBTztBQUM1QixRQUFJQSxDQUFDLENBQUNDLFdBQUYsQ0FBY0MsT0FBZCxLQUEwQixFQUE5QixFQUFrQztBQUNoQ0YsT0FBQyxDQUFDRyxjQUFGO0FBRUFDLGVBQVMsQ0FBQ0ksSUFBRCxFQUFPNUIsRUFBUCxFQUFXcUUsV0FBWCxDQUFUO0FBRUFDLG9CQUFjLENBQUMsRUFBRCxDQUFkO0FBQ0Q7QUFDRixHQVJEOztBQVVBLE1BQU03QyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNMLENBQUQsRUFBTztBQUM5QmtELGtCQUFjLENBQUNsRCxDQUFDLENBQUNNLE1BQUYsQ0FBU0MsS0FBVixDQUFkO0FBQ0QsR0FGRDs7QUFJQSxNQUFNSCxTQUFTO0FBQUEsaU1BQUcsa0JBQU9JLElBQVAsRUFBYUMsTUFBYixFQUFxQkMsSUFBckI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQmUscUJBQU8sQ0FBQ0MsR0FBUixDQUFZbEIsSUFBWixFQUFrQkMsTUFBbEIsRUFBMEJDLElBQTFCO0FBQS9CO0FBRVZDLGlCQUZVLEdBRUosRUFGSTtBQUlSQyxzQkFKUSxHQUlHLElBQUlDLFFBQUosRUFKSDtBQU1kRCxzQkFBUSxDQUFDRSxNQUFULENBQWdCLFdBQWhCLEVBQTZCTCxNQUE3Qjs7QUFFQSxrQkFBSUQsSUFBSSxLQUFLLE9BQWIsRUFBc0I7QUFDcEJHLG1CQUFHLEdBQUcsaUJBQU47QUFDRCxlQUZELE1BRU8sSUFBSUgsSUFBSSxLQUFLLFdBQWIsRUFBMEI7QUFDL0JHLG1CQUFHLEdBQUcsc0JBQU47QUFDRCxlQUZNLE1BRUEsSUFBSUgsSUFBSSxLQUFLLE1BQWIsRUFBcUI7QUFDMUJHLG1CQUFHLEdBQUcsZ0JBQU47QUFDRCxlQUZNLE1BRUEsSUFBSUgsSUFBSSxLQUFLLE1BQWIsRUFBcUI7QUFDMUJHLG1CQUFHLEdBQUcsZ0JBQU47QUFDRCxlQUZNLE1BRUEsSUFBSUgsSUFBSSxLQUFLLFNBQWIsRUFBd0I7QUFDN0JHLG1CQUFHLEdBQUcsbUJBQU47QUFDRCxlQUZNLE1BRUEsSUFBSUgsSUFBSSxLQUFLLE9BQWIsRUFBc0I7QUFDM0JHLG1CQUFHLEdBQUcsaUJBQU47QUFDRCxlQXBCYSxDQXNCZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsa0JBQUlELElBQUksQ0FBQ0ssTUFBTCxLQUFnQixDQUFwQixFQUF1QjtBQUNyQkgsd0JBQVEsQ0FBQ0UsTUFBVCxDQUFnQixNQUFoQixFQUF3QkosSUFBeEI7QUFDRDs7QUFFRE0sNEJBQWMsR0FBR0osUUFBakI7QUFsQ2M7QUFBQSxxQkFvQ1FLLDJEQUFHLENBQUM7QUFDeEJDLHNCQUFNLEVBQUUsTUFEZ0I7QUFFeEJQLG1CQUFHLEVBQUhBLEdBRndCO0FBR3hCUSxvQkFBSSxFQUFFUCxRQUhrQjtBQUl4QlEsdUJBQU8sRUFBRTtBQUFFLDZCQUFXdEM7QUFBYjtBQUplLGVBQUQsQ0FwQ1g7O0FBQUE7QUFvQ1J1QyxxQkFwQ1E7QUEyQ05GLG1CQTNDTSxHQTJDV0UsT0EzQ1gsQ0EyQ05GLElBM0NNLEVBMkNBRyxNQTNDQSxHQTJDV0QsT0EzQ1gsQ0EyQ0FDLE1BM0NBOztBQUFBLG9CQTZDVkEsTUFBTSxLQUFLLEdBN0NEO0FBQUE7QUFBQTtBQUFBOztBQThDWnlCLDhCQUFnQixDQUFDNUIsS0FBRCxDQUFoQjtBQTlDWTtBQUFBOztBQUFBO0FBZ0RaM0MsMERBQU8sQ0FBQytDLEtBQVIsQ0FBYyxDQUFBSixLQUFJLFNBQUosSUFBQUEsS0FBSSxXQUFKLFlBQUFBLEtBQUksQ0FBRTNDLE9BQU4sS0FBaUIsaUJBQS9CO0FBaERZLG9CQWlETixJQUFJZ0QsS0FBSixFQWpETTs7QUFBQTtBQUFBO0FBQUEscUJBb0RESCxPQXBEQzs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQXNEZEkscUJBQU8sQ0FBQ0MsR0FBUjs7QUF0RGM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBVHRCLFNBQVM7QUFBQTtBQUFBO0FBQUEsS0FBZjs7QUEwREEsTUFBTXZCLGFBQWE7QUFBQSxpTUFBRyxrQkFBTzBFLFNBQVAsRUFBa0JwRSxJQUFsQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVJOEIsMkRBQUcsQ0FBQztBQUN4QkMsc0JBQU0sRUFBRSxNQURnQjtBQUV4QlAsbUJBQUcsRUFBRSxnQkFGbUI7QUFHeEJRLG9CQUFJLEVBQUU7QUFDSnFDLHVCQUFLLEVBQUVELFNBREg7QUFFSjVFLHdCQUFNLEVBQUVRO0FBRkosaUJBSGtCO0FBT3hCaUMsdUJBQU8sRUFBRTtBQUFFLDZCQUFXdEM7QUFBYjtBQVBlLGVBQUQsQ0FGUDs7QUFBQTtBQUVadUMscUJBRlk7QUFXVkYsb0JBWFUsR0FXT0UsT0FYUCxDQVdWRixJQVhVLEVBV0pHLE1BWEksR0FXT0QsT0FYUCxDQVdKQyxNQVhJOztBQUFBLG9CQWFkQSxNQUFNLEtBQUssR0FiRztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUEsb0JBa0JWLElBQUlFLEtBQUosRUFsQlU7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQXFCbEJDLHFCQUFPLENBQUNDLEdBQVI7O0FBckJrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFiN0MsYUFBYTtBQUFBO0FBQUE7QUFBQSxLQUFuQjs7QUF3QkE0QyxTQUFPLENBQUNDLEdBQVIsQ0FBWVAsSUFBWjtBQUNBLFNBQ0U7QUFDRSxhQUFTLEVBQUVRLGlEQUFVLENBQUNDLGtFQUFNLENBQUMvQixRQUFSLGdHQUNsQitCLGtFQUFNLENBQUM2QixVQURXLEVBQ0VaLFNBREYsRUFEdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFO0FBQUssYUFBUyxFQUFFakIsa0VBQU0sQ0FBQzhCLGdCQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0csQ0FBQ1YsWUFBWSxLQUFLcEUsRUFBakIsSUFBdUJpRSxTQUF2QixHQUFrQzFCLElBQWxDLEdBQXlDQSxJQUFJLENBQUN3QyxLQUFMLENBQVcsQ0FBWCxFQUFjLENBQWQsQ0FBMUMsRUFBNERDLEdBQTVELENBQWdFLFVBQUNDLElBQUQ7QUFBQSxXQUMvRCxNQUFDLFdBQUQ7QUFDRSxTQUFHLEVBQUVBLElBQUksQ0FBQ2pGLEVBRFo7QUFFRSxRQUFFLEVBQUVpRixJQUFJLENBQUNqRixFQUZYO0FBR0UsVUFBSSxFQUFFaUYsSUFBSSxDQUFDcEYsSUFIYjtBQUlFLGFBQU8sRUFBRW9GLElBQUksQ0FBQ25ELElBSmhCO0FBS0UsWUFBTSxFQUFFbUQsSUFBSSxDQUFDQyxPQUxmO0FBTUUsWUFBTSxFQUFFRCxJQUFJLENBQUNsRixNQU5mO0FBT0UsbUJBQWEsRUFBRUUsYUFQakI7QUFRRSxXQUFLLEVBQUVDLEtBUlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUQrRDtBQUFBLEdBQWhFLENBREgsQ0FMRixFQW9CRTtBQUFLLGFBQVMsRUFBRThDLGtFQUFNLENBQUNVLFdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRVYsa0VBQU0sQ0FBQ0csTUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFDRSxRQUFJLEVBQUUsRUFEUjtBQUVFLE9BQUcsZ0JBQUVlLElBQUksQ0FBQ2lCLElBQVAsd0VBQUUsV0FBV3RFLFlBQWIsMERBQUUsc0JBQXlCQyxHQUZoQztBQUdFLFFBQUksaUJBQUVvRCxJQUFJLENBQUNpQixJQUFQLGdEQUFFLFlBQVcvQixRQUhuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQVFFO0FBQUssYUFBUyxFQUFFSixrRUFBTSxDQUFDVyxLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxRQUFEO0FBQ0UsU0FBSyxFQUFFVSxXQURUO0FBRUUsZUFBVyxFQUFDLG1CQUZkO0FBR0UsUUFBSSxFQUFFLENBSFI7QUFJRSxZQUFRLEVBQUU1QyxnQkFKWjtBQUtFLGFBQVMsRUFBRU4sY0FMYjtBQU1FLFNBQUssRUFBRTtBQUFHeUMsa0JBQVksRUFBRSxFQUFqQjtBQUFxQkMsWUFBTSxFQUFFLEVBQTdCO0FBQWlDdUIsaUJBQVcsRUFBRSxFQUE5QztBQUFrREMsZ0JBQVUsRUFBRSxFQUE5RDtBQUFrRXZCLGdCQUFVLEVBQUUsYUFBOUU7QUFBNkZDLFdBQUssRUFBRTtBQUFwRyxLQU5UO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVJGLENBcEJGLENBREY7QUEwQ0Q7O0lBekpRQyxROztNQUFBQSxROztBQTJKVCxJQUFNc0IsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNsQ3JGLFNBQUssRUFBRXFGLEtBQUssQ0FBQ3JCLElBQU4sQ0FBV2hFLEtBRGdCO0FBRWxDZ0UsUUFBSSxFQUFFcUIsS0FBSyxDQUFDckI7QUFGc0IsR0FBWjtBQUFBLENBQXhCOztBQUtlc0IsMkhBQU8sQ0FBQ0YsZUFBRCxDQUFQLENBQXlCdEIsUUFBekIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLjkxYWNmY2IwNTlhZDIxMWQ0NTk3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgUG9wb3ZlciB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL2NvbW1lbnQubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRyaW1UZXh0IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL1RyaW1UZXh0JztcclxuaW1wb3J0IEF2YXRhciBmcm9tICcuLi9jb21tb24vQXZhdGFyJztcclxuaW1wb3J0IEFQSSBmcm9tICdjb25maWdzL0FQSSc7XHJcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IERyYWdhYmxlUmF0aW5nIGZyb20gJy4uL2Zvcm1zL3JhdGluZy9EcmFnYWJsZVJhdGluZyc7XHJcbmltcG9ydCBSYXRpbmdTbGlkZSBmcm9tICcuLi9mb3Jtcy9yYXRpbmcvUmF0aW5nU2xpZGUnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcblxyXG5mdW5jdGlvbiBDb21tZW50SXRlbSh7IG1lc3NhZ2UsIG1pbmUsIGF1dGhvciwgcmF0aW5nLCBpZCwgb25SYXRlQ29tbWVudCwgdG9rZW4gfSkge1xyXG4gIGNvbnN0IGZ1bGxOYW1lID0gYCR7YXV0aG9yPy5maXJzdE5hbWV9ICR7YXV0aG9yPy5sYXN0TmFtZX1gO1xyXG4gIGNvbnN0IGhhbmRsZVJhdGVDb21tZW50ID0gKHJhdGUpID0+IHtcclxuICAgIG9uUmF0ZUNvbW1lbnQoaWQsIHJhdGUpO1xyXG4gIH07XHJcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHByb2ZpbGVVcmwgPSBhdXRob3IgIT09IG51bGwgJiYgYXV0aG9yICE9PSB1bmRlZmluZWQgPyBgJHthdXRob3IucHJvZmlsZVBob3RvPy5zcmN9YCA6IG51bGxcclxuICBjb25zdCBbY29tbWVudCwgc2V0Q29tbWVudF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2NvbW1lbnRzLCBzZXRDb21tZW50c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgXHJcbiAgY29uc3QgaGFuZGxlRW50ZXJLZXkgPSAoZSkgPT4ge1xyXG4gICAgaWYgKGUubmF0aXZlRXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBvbkNvbW1lbnQoXCJDb21tZW50XCIsIGlkLCBjb21tZW50KTtcclxuICAgICAgc2V0Q29tbWVudCgnJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlVGV4dCA9IChlKSA9PiB7XHJcbiAgICBzZXRDb21tZW50KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkNvbW1lbnQgPSBhc3luYyAodHlwZSwgcG9zdElkLCB0ZXh0KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgdXJsID0gJyc7XHJcbiAgICAgIGxldCBkYXRhRm9yUmVxdWVzdDtcclxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGE7XHJcblxyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2NvbW1lbnRlZCcsIHBvc3RJZClcclxuXHJcbiAgICAgIGlmICh0eXBlID09PSAnUGhvdG8nKSB7XHJcbiAgICAgICAgdXJsID0gJy9waG90b3MvY29tbWVudCc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1ZpZGVvQ2xpcCcpIHtcclxuICAgICAgICB1cmwgPSAnL3ZpZGVvLWNsaXBzL2NvbW1lbnQnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdJdGVtJykge1xyXG4gICAgICAgIHVybCA9ICcvaXRlbXMvY29tbWVudCc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1Bvc3QnKSB7XHJcbiAgICAgICAgdXJsID0gJy9wb3N0cy9jb21tZW50JztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnQ29tbWVudCcpIHtcclxuICAgICAgICB1cmwgPSAnL2NvbW1lbnRzL2NvbW1lbnQnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdTaGFyZScpIHtcclxuICAgICAgICB1cmwgPSAnL3NoYXJlcy9jb21tZW50JztcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaWYgKHRleHQubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd0ZXh0JywgdGV4dClcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgZGF0YUZvclJlcXVlc3QgPSBmb3JtRGF0YVxyXG5cclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsLFxyXG4gICAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiB0b2tlbiB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG5cclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGF3YWl0IHJlcXVlc3Q7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmNvbW1lbnRfaXRlbSwge1xyXG4gICAgICAgIFtzdHlsZXMubm90X21pbmVdOiAhbWluZSxcclxuICAgICAgfSl9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyfT5cclxuICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICBzaXplPXs1MH1cclxuICAgICAgICAgIHVybD17cHJvZmlsZVVybH1cclxuICAgICAgICAgIHRleHQ9e2F1dGhvcj8udXNlcm5hbWV9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8UmF0aW5nU2xpZGVcclxuICAgICAgICAgIGRlZmF1bHRSYXRlPXtyYXRpbmd9XHJcbiAgICAgICAgICB3aXRob3V0VGV4dFxyXG4gICAgICAgICAgZGFya1xyXG4gICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVSYXRlQ29tbWVudH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIHsvKiA8RHJhZ2FibGVSYXRpbmcgcmF0aW5nPXtyYXRpbmd9IGhhbmRsZVJhdGVDb21tZW50PXtoYW5kbGVSYXRlQ29tbWVudH0gLz4gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lc3NhZ2VfY29udGFpbmVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lc3NhZ2V9PlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYXV0aG9yfT57ZnVsbE5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxUcmltVGV4dCBsaW1pdD17MTEwfT57bWVzc2FnZX08L1RyaW1UZXh0PlxyXG4gICAgICAgICAgPC9wPiBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlcGx5fT5cclxuICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6IDE1LCB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0gb25DbGljaz17KCkgPT4gc2V0VmlzaWJsZSh0cnVlKX0+cmVwbHk8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge3Zpc2libGU/XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50X2JveH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn0+XHJcbiAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICBzaXplPXszNX1cclxuICAgICAgICAgICAgICB1cmw9e3Byb2ZpbGVVcmx9XHJcbiAgICAgICAgICAgICAgdGV4dD17YXV0aG9yPy51c2VybmFtZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0+XHJcbiAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtjb21tZW50fVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBkbyB5b3UgbWVhbj9cIlxyXG4gICAgICAgICAgICAgIHJvd3M9ezJ9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVRleHR9XHJcbiAgICAgICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVFbnRlcktleX1cclxuICAgICAgICAgICAgICBzdHlsZT17eyAgYm9yZGVyUmFkaXVzOiAzNiwgaGVpZ2h0OiAyNSwgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JywgY29sb3I6ICdibGFjayd9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PjpudWxsfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICBcclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENvbW1lbnRzKHtcclxuICBkYXRhID0gW10sXHJcbiAgbW9kYWxNb2RlLFxyXG4gIGlkLFxyXG4gIHR5cGUsXHJcbiAgYXV0aCxcclxuICBvblVwZGF0ZVRpbWVsaW5lLFxyXG4gIHRva2VuLFxyXG4gIGFjdGl2ZVBvc3RJZFxyXG59KSB7XHJcbiAgY29uc3QgW2NvbW1lbnRUZXh0LCBzZXRDb21tZW50VGV4dF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2NvbW1lbnRMaXN0LCBzZXRDb21tZW50TGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGFjdGl2ZVBvc3RJZCA9PT0gaWQpO1xyXG5cclxuICBjb25zdCBoYW5kbGVFbnRlcktleSA9IChlKSA9PiB7XHJcbiAgICBpZiAoZS5uYXRpdmVFdmVudC5rZXlDb2RlID09PSAxMykge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICBvbkNvbW1lbnQodHlwZSwgaWQsIGNvbW1lbnRUZXh0KTtcclxuXHJcbiAgICAgIHNldENvbW1lbnRUZXh0KCcnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VUZXh0ID0gKGUpID0+IHtcclxuICAgIHNldENvbW1lbnRUZXh0KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkNvbW1lbnQgPSBhc3luYyAodHlwZSwgcG9zdElkLCB0ZXh0KSA9PiB7Y29uc29sZS5sb2codHlwZSwgcG9zdElkLCB0ZXh0KVxyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IHVybCA9ICcnO1xyXG4gICAgICBsZXQgZGF0YUZvclJlcXVlc3Q7XHJcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhO1xyXG5cclxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdjb21tZW50ZWQnLCBwb3N0SWQpXHJcblxyXG4gICAgICBpZiAodHlwZSA9PT0gJ1Bob3RvJykge1xyXG4gICAgICAgIHVybCA9ICcvcGhvdG9zL2NvbW1lbnQnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdWaWRlb0NsaXAnKSB7XHJcbiAgICAgICAgdXJsID0gJy92aWRlby1jbGlwcy9jb21tZW50JztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnSXRlbScpIHtcclxuICAgICAgICB1cmwgPSAnL2l0ZW1zL2NvbW1lbnQnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdQb3N0Jykge1xyXG4gICAgICAgIHVybCA9ICcvcG9zdHMvY29tbWVudCc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0NvbW1lbnQnKSB7XHJcbiAgICAgICAgdXJsID0gJy9jb21tZW50cy9jb21tZW50JztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnU2hhcmUnKSB7XHJcbiAgICAgICAgdXJsID0gJy9zaGFyZXMvY29tbWVudCc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGlmIChmaWxlcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIC8vICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAvLyAgICAgaWYgKGZpbGVzW2ldLnR5cGUuc3BsaXQoJy8nKVswXSA9PT0gJ2ltYWdlJykge1xyXG4gICAgICAvLyAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgZmlsZXNbaV0pO1xyXG4gICAgICAvLyAgICAgfVxyXG4gICAgICAvLyAgIH1cclxuICAgICAgLy8gfVxyXG4gICAgICBcclxuICAgICAgaWYgKHRleHQubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd0ZXh0JywgdGV4dClcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgZGF0YUZvclJlcXVlc3QgPSBmb3JtRGF0YVxyXG5cclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsLFxyXG4gICAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiB0b2tlbiB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG5cclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgb25VcGRhdGVUaW1lbGluZShkYXRhKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gYXdhaXQgcmVxdWVzdDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBvblJhdGVDb21tZW50ID0gYXN5bmMgKGNvbW1lbnRJZCwgcmF0ZSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsOiAnL2NvbW1lbnRzL3JhdGUnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHJhdGVkOiBjb21tZW50SWQsXHJcbiAgICAgICAgICByYXRpbmc6IHJhdGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogdG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG5cclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgLy8gb25VcGRhdGVUaW1lbGluZSgpO1xyXG4gICAgICAgIC8vIG1lc3NhZ2Uuc3VjY2VzcygnRXZhbHVhdGUgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5jb21tZW50cywge1xyXG4gICAgICAgIFtzdHlsZXMubW9kYWxfbW9kZV06IG1vZGFsTW9kZSxcclxuICAgICAgfSl9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tbWVudHNfd3JhcHBlcn0+XHJcbiAgICAgICAgeyhhY3RpdmVQb3N0SWQgPT09IGlkICYmIG1vZGFsTW9kZT8gZGF0YSA6IGRhdGEuc2xpY2UoMCwgMikpLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgPENvbW1lbnRJdGVtXHJcbiAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgIG1pbmU9e2l0ZW0ubWluZX1cclxuICAgICAgICAgICAgbWVzc2FnZT17aXRlbS50ZXh0fVxyXG4gICAgICAgICAgICBhdXRob3I9e2l0ZW0uYWNjb3VudH1cclxuICAgICAgICAgICAgcmF0aW5nPXtpdGVtLnJhdGluZ31cclxuICAgICAgICAgICAgb25SYXRlQ29tbWVudD17b25SYXRlQ29tbWVudH1cclxuICAgICAgICAgICAgdG9rZW49e3Rva2VufVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnRfYm94fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn0+XHJcbiAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgIHNpemU9ezQ1fVxyXG4gICAgICAgICAgICB1cmw9e2F1dGgudXNlcj8ucHJvZmlsZVBob3RvPy5zcmN9XHJcbiAgICAgICAgICAgIHRleHQ9e2F1dGgudXNlcj8udXNlcm5hbWV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9PlxyXG4gICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgIHZhbHVlPXtjb21tZW50VGV4dH1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0IGRvIHlvdSBtZWFuP1wiXHJcbiAgICAgICAgICAgIHJvd3M9ezJ9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VUZXh0fVxyXG4gICAgICAgICAgICBvbktleURvd249e2hhbmRsZUVudGVyS2V5fVxyXG4gICAgICAgICAgICBzdHlsZT17eyAgYm9yZGVyUmFkaXVzOiAzNiwgaGVpZ2h0OiA0NSwgcGFkZGluZ0xlZnQ6IDMwLCBwYWRkaW5nVG9wOiAxMCwgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JywgY29sb3I6ICdibGFjayd9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RvcmUpID0+ICh7XHJcbiAgdG9rZW46IHN0b3JlLmF1dGgudG9rZW4sXHJcbiAgYXV0aDogc3RvcmUuYXV0aCxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQ29tbWVudHMpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9