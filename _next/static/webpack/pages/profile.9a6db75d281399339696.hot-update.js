webpackHotUpdate_N_E("pages/profile",{

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

  var _author$profilePhoto, _author$user, _author$user$profileP, _author$user2;

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
    onClick: visibleComment,
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
    url: (_author$user = author.user) === null || _author$user === void 0 ? void 0 : (_author$user$profileP = _author$user.profilePhoto) === null || _author$user$profileP === void 0 ? void 0 : _author$user$profileP.src,
    text: (_author$user2 = author.user) === null || _author$user2 === void 0 ? void 0 : _author$user2.username,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aW1lbGluZS9Db21tZW50cy5qcyJdLCJuYW1lcyI6WyJUZXh0QXJlYSIsIklucHV0IiwiQ29tbWVudEl0ZW0iLCJtZXNzYWdlIiwibWluZSIsImF1dGhvciIsInJhdGluZyIsImlkIiwib25SYXRlQ29tbWVudCIsImZ1bGxOYW1lIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJoYW5kbGVSYXRlQ29tbWVudCIsInJhdGUiLCJ1c2VTdGF0ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwicHJvZmlsZVVybCIsInVuZGVmaW5lZCIsInByb2ZpbGVQaG90byIsInNyYyIsImNsYXNzbmFtZXMiLCJzdHlsZXMiLCJjb21tZW50X2l0ZW0iLCJub3RfbWluZSIsImF2YXRhciIsInVzZXJuYW1lIiwibWVzc2FnZV9jb250YWluZXIiLCJyZXBseSIsImZvbnRTaXplIiwidGV4dERlY29yYXRpb24iLCJ0ZXh0QWxpZ24iLCJ2aXNpYmxlQ29tbWVudCIsImNvbW1lbnRfYm94IiwidXNlciIsImlucHV0IiwiYm9yZGVyUmFkaXVzIiwiaGVpZ2h0IiwiYmFja2dyb3VuZCIsImNvbG9yIiwiQ29tbWVudHMiLCJkYXRhIiwibW9kYWxNb2RlIiwidHlwZSIsImF1dGgiLCJvblVwZGF0ZVRpbWVsaW5lIiwidG9rZW4iLCJhY3RpdmVQb3N0SWQiLCJjb21tZW50VGV4dCIsInNldENvbW1lbnRUZXh0IiwiY29tbWVudExpc3QiLCJzZXRDb21tZW50TGlzdCIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImhhbmRsZUVudGVyS2V5IiwiZSIsIm5hdGl2ZUV2ZW50Iiwia2V5Q29kZSIsInByZXZlbnREZWZhdWx0Iiwib25Db21tZW50IiwiaGFuZGxlQ2hhbmdlVGV4dCIsInRhcmdldCIsInZhbHVlIiwicG9zdElkIiwidGV4dCIsImNvbnNvbGUiLCJsb2ciLCJ1cmwiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwibGVuZ3RoIiwiZGF0YUZvclJlcXVlc3QiLCJBUEkiLCJtZXRob2QiLCJoZWFkZXJzIiwicmVxdWVzdCIsInN0YXR1cyIsImVycm9yIiwiRXJyb3IiLCJjb21tZW50SWQiLCJyYXRlZCIsImNvbW1lbnRzIiwibW9kYWxfbW9kZSIsImNvbW1lbnRzX3dyYXBwZXIiLCJzbGljZSIsIm1hcCIsIml0ZW0iLCJhY2NvdW50IiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nVG9wIiwibWFwU3RhdGVUb1Byb3BzIiwic3RvcmUiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFFUUEsUSxHQUFhQywwQyxDQUFiRCxROztBQUVSLFNBQVNFLFdBQVQsT0FBMkU7QUFBQTs7QUFBQTs7QUFBQSxNQUFwREMsT0FBb0QsUUFBcERBLE9BQW9EO0FBQUEsTUFBM0NDLElBQTJDLFFBQTNDQSxJQUEyQztBQUFBLE1BQXJDQyxNQUFxQyxRQUFyQ0EsTUFBcUM7QUFBQSxNQUE3QkMsTUFBNkIsUUFBN0JBLE1BQTZCO0FBQUEsTUFBckJDLEVBQXFCLFFBQXJCQSxFQUFxQjtBQUFBLE1BQWpCQyxhQUFpQixRQUFqQkEsYUFBaUI7QUFDekUsTUFBTUMsUUFBUSxhQUFNSixNQUFOLGFBQU1BLE1BQU4sdUJBQU1BLE1BQU0sQ0FBRUssU0FBZCxjQUEyQkwsTUFBM0IsYUFBMkJBLE1BQTNCLHVCQUEyQkEsTUFBTSxDQUFFTSxRQUFuQyxDQUFkOztBQUNBLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsSUFBRCxFQUFVO0FBQ2xDTCxpQkFBYSxDQUFDRCxFQUFELEVBQUtNLElBQUwsQ0FBYjtBQUNELEdBRkQ7O0FBRnlFLGtCQUszQ0Msc0RBQVEsQ0FBQyxLQUFELENBTG1DO0FBQUEsTUFLbEVDLE9BTGtFO0FBQUEsTUFLekRDLFVBTHlEOztBQU16RSxNQUFNQyxVQUFVLEdB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RSxFQUE5RDtBQUFrRXBELGdCQUFVLEVBQUUsYUFBOUU7QUFBNkZDLFdBQUssRUFBRTtBQUFwRyxLQU5UO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVJGLENBbkJGLENBREY7QUF5Q0Q7O0lBeEpRQyxROztNQUFBQSxROztBQTBKVCxJQUFNbUQsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNsQzlDLFNBQUssRUFBRThDLEtBQUssQ0FBQ2hELElBQU4sQ0FBV0UsS0FEZ0I7QUFFbENGLFFBQUksRUFBRWdELEtBQUssQ0FBQ2hEO0FBRnNCLEdBQVo7QUFBQSxDQUF4Qjs7QUFLZWlELDJIQUFPLENBQUNGLGVBQUQsQ0FBUCxDQUF5Qm5ELFFBQXpCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS45YTZkYjc1ZDI4MTM5OTMzOTY5Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQsIFBvcG92ZXIgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy9jb21tZW50Lm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUcmltVGV4dCBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9UcmltVGV4dCc7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnLi4vY29tbW9uL0F2YXRhcic7XHJcbmltcG9ydCBBUEkgZnJvbSAnY29uZmlncy9BUEknO1xyXG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBEcmFnYWJsZVJhdGluZyBmcm9tICcuLi9mb3Jtcy9yYXRpbmcvRHJhZ2FibGVSYXRpbmcnO1xyXG5pbXBvcnQgUmF0aW5nU2xpZGUgZnJvbSAnLi4vZm9ybXMvcmF0aW5nL1JhdGluZ1NsaWRlJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0O1xyXG5cclxuZnVuY3Rpb24gQ29tbWVudEl0ZW0oeyBtZXNzYWdlLCBtaW5lLCBhdXRob3IsIHJhdGluZywgaWQsIG9uUmF0ZUNvbW1lbnQgfSkge1xyXG4gIGNvbnN0IGZ1bGxOYW1lID0gYCR7YXV0aG9yPy5maXJzdE5hbWV9ICR7YXV0aG9yPy5sYXN0TmFtZX1gO1xyXG4gIGNvbnN0IGhhbmRsZVJhdGVDb21tZW50ID0gKHJhdGUpID0+IHtcclxuICAgIG9uUmF0ZUNvbW1lbnQoaWQsIHJhdGUpO1xyXG4gIH07XHJcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHByb2ZpbGVVcmwgPSBhdXRob3IgIT09IG51bGwgJiYgYXV0aG9yICE9PSB1bmRlZmluZWQgPyBgJHthdXRob3IucHJvZmlsZVBob3RvPy5zcmN9YCA6IG51bGxcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5jb21tZW50X2l0ZW0sIHtcclxuICAgICAgICBbc3R5bGVzLm5vdF9taW5lXTogIW1pbmUsXHJcbiAgICAgIH0pfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn0+XHJcbiAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgc2l6ZT17NTB9XHJcbiAgICAgICAgICB1cmw9e3Byb2ZpbGVVcmx9XHJcbiAgICAgICAgICB0ZXh0PXthdXRob3I/LnVzZXJuYW1lfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFJhdGluZ1NsaWRlXHJcbiAgICAgICAgICBkZWZhdWx0UmF0ZT17cmF0aW5nfVxyXG4gICAgICAgICAgd2l0aG91dFRleHRcclxuICAgICAgICAgIGRhcmtcclxuICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUmF0ZUNvbW1lbnR9XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7LyogPERyYWdhYmxlUmF0aW5nIHJhdGluZz17cmF0aW5nfSBoYW5kbGVSYXRlQ29tbWVudD17aGFuZGxlUmF0ZUNvbW1lbnR9IC8+ICovfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZXNzYWdlX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZXNzYWdlfT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmF1dGhvcn0+e2Z1bGxOYW1lfTwvc3Bhbj5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8VHJpbVRleHQgbGltaXQ9ezExMH0+e21lc3NhZ2V9PC9UcmltVGV4dD5cclxuICAgICAgICAgIDwvcD4gXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZXBseX0+XHJcbiAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAxNSwgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19IG9uQ2xpY2s9e3Zpc2libGVDb21tZW50fT5yZXBseTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7dmlzaWJsZT9cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnRfYm94fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyfT5cclxuICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgIHNpemU9ezM1fVxyXG4gICAgICAgICAgICAgIHVybD17YXV0aG9yLnVzZXI/LnByb2ZpbGVQaG90bz8uc3JjfVxyXG4gICAgICAgICAgICAgIHRleHQ9e2F1dGhvci51c2VyPy51c2VybmFtZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0+XHJcbiAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgIHZhbHVlPXsnc3NzJ31cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgZG8geW91IG1lYW4/XCJcclxuICAgICAgICAgICAgICByb3dzPXsyfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKT0+e319XHJcbiAgICAgICAgICAgICAgb25LZXlEb3duPXsoKSA9PiB7fX1cclxuICAgICAgICAgICAgICBzdHlsZT17eyAgYm9yZGVyUmFkaXVzOiAzNiwgaGVpZ2h0OiAyNSwgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JywgY29sb3I6ICdibGFjayd9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PjpudWxsfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICBcclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENvbW1lbnRzKHtcclxuICBkYXRhID0gW10sXHJcbiAgbW9kYWxNb2RlLFxyXG4gIGlkLFxyXG4gIHR5cGUsXHJcbiAgYXV0aCxcclxuICBvblVwZGF0ZVRpbWVsaW5lLFxyXG4gIHRva2VuLFxyXG4gIGFjdGl2ZVBvc3RJZFxyXG59KSB7XHJcbiAgY29uc3QgW2NvbW1lbnRUZXh0LCBzZXRDb21tZW50VGV4dF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2NvbW1lbnRMaXN0LCBzZXRDb21tZW50TGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGFjdGl2ZVBvc3RJZCA9PT0gaWQpO1xyXG5cclxuICBjb25zdCBoYW5kbGVFbnRlcktleSA9IChlKSA9PiB7XHJcbiAgICBpZiAoZS5uYXRpdmVFdmVudC5rZXlDb2RlID09PSAxMykge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICBvbkNvbW1lbnQodHlwZSwgaWQsIGNvbW1lbnRUZXh0KTtcclxuXHJcbiAgICAgIHNldENvbW1lbnRUZXh0KCcnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VUZXh0ID0gKGUpID0+IHtcclxuICAgIHNldENvbW1lbnRUZXh0KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkNvbW1lbnQgPSBhc3luYyAodHlwZSwgcG9zdElkLCB0ZXh0KSA9PiB7Y29uc29sZS5sb2codHlwZSwgcG9zdElkLCB0ZXh0KVxyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IHVybCA9ICcnO1xyXG4gICAgICBsZXQgZGF0YUZvclJlcXVlc3Q7XHJcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhO1xyXG5cclxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdjb21tZW50ZWQnLCBwb3N0SWQpXHJcblxyXG4gICAgICBpZiAodHlwZSA9PT0gJ1Bob3RvJykge1xyXG4gICAgICAgIHVybCA9ICcvcGhvdG9zL2NvbW1lbnQnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdWaWRlb0NsaXAnKSB7XHJcbiAgICAgICAgdXJsID0gJy92aWRlby1jbGlwcy9jb21tZW50JztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnSXRlbScpIHtcclxuICAgICAgICB1cmwgPSAnL2l0ZW1zL2NvbW1lbnQnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdQb3N0Jykge1xyXG4gICAgICAgIHVybCA9ICcvcG9zdHMvY29tbWVudCc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0NvbW1lbnQnKSB7XHJcbiAgICAgICAgdXJsID0gJy9jb21tZW50cy9jb21tZW50JztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnU2hhcmUnKSB7XHJcbiAgICAgICAgdXJsID0gJy9zaGFyZXMvY29tbWVudCc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGlmIChmaWxlcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIC8vICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAvLyAgICAgaWYgKGZpbGVzW2ldLnR5cGUuc3BsaXQoJy8nKVswXSA9PT0gJ2ltYWdlJykge1xyXG4gICAgICAvLyAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgZmlsZXNbaV0pO1xyXG4gICAgICAvLyAgICAgfVxyXG4gICAgICAvLyAgIH1cclxuICAgICAgLy8gfVxyXG4gICAgICBcclxuICAgICAgaWYgKHRleHQubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd0ZXh0JywgdGV4dClcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgZGF0YUZvclJlcXVlc3QgPSBmb3JtRGF0YVxyXG5cclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsLFxyXG4gICAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiB0b2tlbiB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG5cclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgb25VcGRhdGVUaW1lbGluZShkYXRhKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gYXdhaXQgcmVxdWVzdDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBvblJhdGVDb21tZW50ID0gYXN5bmMgKGNvbW1lbnRJZCwgcmF0ZSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsOiAnL2NvbW1lbnRzL3JhdGUnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHJhdGVkOiBjb21tZW50SWQsXHJcbiAgICAgICAgICByYXRpbmc6IHJhdGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogdG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG5cclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgLy8gb25VcGRhdGVUaW1lbGluZSgpO1xyXG4gICAgICAgIC8vIG1lc3NhZ2Uuc3VjY2VzcygnRXZhbHVhdGUgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5jb21tZW50cywge1xyXG4gICAgICAgIFtzdHlsZXMubW9kYWxfbW9kZV06IG1vZGFsTW9kZSxcclxuICAgICAgfSl9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tbWVudHNfd3JhcHBlcn0+XHJcbiAgICAgICAgeyhhY3RpdmVQb3N0SWQgPT09IGlkICYmIG1vZGFsTW9kZT8gZGF0YSA6IGRhdGEuc2xpY2UoMCwgMikpLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgPENvbW1lbnRJdGVtXHJcbiAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgIG1pbmU9e2l0ZW0ubWluZX1cclxuICAgICAgICAgICAgbWVzc2FnZT17aXRlbS50ZXh0fVxyXG4gICAgICAgICAgICBhdXRob3I9e2l0ZW0uYWNjb3VudH1cclxuICAgICAgICAgICAgcmF0aW5nPXtpdGVtLnJhdGluZ31cclxuICAgICAgICAgICAgb25SYXRlQ29tbWVudD17b25SYXRlQ29tbWVudH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50X2JveH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9PlxyXG4gICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICBzaXplPXs0NX1cclxuICAgICAgICAgICAgdXJsPXthdXRoLnVzZXI/LnByb2ZpbGVQaG90bz8uc3JjfVxyXG4gICAgICAgICAgICB0ZXh0PXthdXRoLnVzZXI/LnVzZXJuYW1lfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fT5cclxuICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICB2YWx1ZT17Y29tbWVudFRleHR9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBkbyB5b3UgbWVhbj9cIlxyXG4gICAgICAgICAgICByb3dzPXsyfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlVGV4dH1cclxuICAgICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVFbnRlcktleX1cclxuICAgICAgICAgICAgc3R5bGU9e3sgIGJvcmRlclJhZGl1czogMzYsIGhlaWdodDogNDUsIHBhZGRpbmdMZWZ0OiAzMCwgcGFkZGluZ1RvcDogMTAsIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsIGNvbG9yOiAnYmxhY2snfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0b3JlKSA9PiAoe1xyXG4gIHRva2VuOiBzdG9yZS5hdXRoLnRva2VuLFxyXG4gIGF1dGg6IHN0b3JlLmF1dGgsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKENvbW1lbnRzKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==