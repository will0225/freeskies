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
      _auth$user2,
      _ref5;

  var _ref2$data = _ref2.data,
      data = _ref2$data === void 0 ? [] : _ref2$data,
      _ref2$modalMode = _ref2.modalMode,
      modalMode = _ref2$modalMode === void 0 ? false : _ref2$modalMode,
      id = _ref2.id,
      type = _ref2.type,
      auth = _ref2.auth,
      onUpdateTimeline = _ref2.onUpdateTimeline,
      token = _ref2.token;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      commentText = _useState[0],
      setCommentText = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([//   {
    //     mine: true,
    //     message: `Lorem Ipsum is simply dummy text of the printing and typesetting
    // industry. Lorem Ipsum has been the industry's standard dummy text
    // ever since the 1500s`,
    //   },
    //   { message: 'message' },
  ]),
      commentList = _useState2[0],
      setCommentList = _useState2[1]; // useEffect(() => {
  //   setCommentList(data);
  // }, [data]);


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
              _data = request.data, status = request.status;

              if (!(status === 201)) {
                _context.next = 16;
                break;
              }

              onUpdateTimeline();
              antd__WEBPACK_IMPORTED_MODULE_4__["message"].success('Your comment published successfuly');
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
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 26:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 23]]);
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
              console.log(commentId, rate);
              _context2.prev = 1;
              _context2.next = 4;
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

            case 4:
              request = _context2.sent;
              _data2 = request.data, status = request.status;

              if (!(status === 201)) {
                _context2.next = 10;
                break;
              }

              onUpdateTimeline(); // message.success('Evaluate successfully');

              _context2.next = 11;
              break;

            case 10:
              throw new Error();

            case 11:
              _context2.next = 16;
              break;

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](1);
              console.log(_context2.t0);

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 13]]);
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
      lineNumber: 177,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.comments_wrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 7
    }
  }, (modalMode ? data : data.slice(0, 2)).map(function (item) {
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
        lineNumber: 184,
        columnNumber: 11
      }
    });
  })), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.comment_box,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 9
    }
  }, __jsx(_common_Avatar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    size: 45,
    url: (_auth$user = auth.user) === null || _auth$user === void 0 ? void 0 : (_auth$user$profilePho = _auth$user.profilePhoto) === null || _auth$user$profilePho === void 0 ? void 0 : _auth$user$profilePho.src,
    text: (_auth$user2 = auth.user) === null || _auth$user2 === void 0 ? void 0 : _auth$user2.username,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.input,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 9
    }
  }, __jsx(TextArea, {
    value: commentText,
    placeholder: "What do you mean?",
    rows: 2,
    onChange: handleChangeText,
    onKeyDown: handleEnterKey,
    style: (_ref5 = {
      borderRadius: 15
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref5, "borderRadius", 36), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref5, "height", 45), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref5, "paddingLeft", 30), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref5, "paddingTop", 10), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref5, "background", 'transparent'), _ref5),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 11
    }
  }))));
}

_s(Comments, "8PKkx+jfLwI35+Au+xzDiF0a3yk=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aW1lbGluZS9Db21tZW50cy5qcyJdLCJuYW1lcyI6WyJUZXh0QXJlYSIsIklucHV0IiwiQ29tbWVudEl0ZW0iLCJtZXNzYWdlIiwibWluZSIsImF1dGhvciIsInJhdGluZyIsImlkIiwib25SYXRlQ29tbWVudCIsImZ1bGxOYW1lIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJoYW5kbGVSYXRlQ29tbWVudCIsInJhdGUiLCJwcm9maWxlVXJsIiwidW5kZWZpbmVkIiwicHJvZmlsZVBob3RvIiwic3JjIiwiY2xhc3NuYW1lcyIsInN0eWxlcyIsImNvbW1lbnRfaXRlbSIsIm5vdF9taW5lIiwiYXZhdGFyIiwidXNlcm5hbWUiLCJtZXNzYWdlX2NvbnRhaW5lciIsIkNvbW1lbnRzIiwiZGF0YSIsIm1vZGFsTW9kZSIsInR5cGUiLCJhdXRoIiwib25VcGRhdGVUaW1lbGluZSIsInRva2VuIiwidXNlU3RhdGUiLCJjb21tZW50VGV4dCIsInNldENvbW1lbnRUZXh0IiwiY29tbWVudExpc3QiLCJzZXRDb21tZW50TGlzdCIsImhhbmRsZUVudGVyS2V5IiwiZSIsIm5hdGl2ZUV2ZW50Iiwia2V5Q29kZSIsInByZXZlbnREZWZhdWx0Iiwib25Db21tZW50IiwiaGFuZGxlQ2hhbmdlVGV4dCIsInRhcmdldCIsInZhbHVlIiwicG9zdElkIiwidGV4dCIsInVybCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJsZW5ndGgiLCJkYXRhRm9yUmVxdWVzdCIsIkFQSSIsIm1ldGhvZCIsImhlYWRlcnMiLCJyZXF1ZXN0Iiwic3RhdHVzIiwic3VjY2VzcyIsImVycm9yIiwiRXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY29tbWVudElkIiwicmF0ZWQiLCJjb21tZW50cyIsIm1vZGFsX21vZGUiLCJjb21tZW50c193cmFwcGVyIiwic2xpY2UiLCJtYXAiLCJpdGVtIiwiYWNjb3VudCIsImNvbW1lbnRfYm94IiwidXNlciIsImlucHV0IiwiYm9yZGVyUmFkaXVzIiwibWFwU3RhdGVUb1Byb3BzIiwic3RvcmUiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUVRQSxRLEdBQWFDLDBDLENBQWJELFE7O0FBRVIsU0FBU0UsV0FBVCxPQUEyRTtBQUFBOztBQUFBLE1BQXBEQyxPQUFvRCxRQUFwREEsT0FBb0Q7QUFBQSxNQUEzQ0MsSUFBMkMsUUFBM0NBLElBQTJDO0FBQUEsTUFBckNDLE1BQXFDLFFBQXJDQSxNQUFxQztBQUFBLE1BQTdCQyxNQUE2QixRQUE3QkEsTUFBNkI7QUFBQSxNQUFyQkMsRUFBcUIsUUFBckJBLEVBQXFCO0FBQUEsTUFBakJDLGFBQWlCLFFBQWpCQSxhQUFpQjtBQUN6RSxNQUFNQyxRQUFRLGFBQU1KLE1BQU4sYUFBTUEsTUFBTix1QkFBTUEsTUFBTSxDQUFFSyxTQUFkLGNBQTJCTCxNQUEzQixhQUEyQkEsTUFBM0IsdUJBQTJCQSxNQUFNLENBQUVNLFFBQW5DLENBQWQ7O0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxJQUFELEVBQVU7QUFDbENMLGlCQUFhLENBQUNELEVBQUQsRUFBS00sSUFBTCxDQUFiO0FBQ0QsR0FGRDs7QUFHQSxNQUFNQyxVQUFVLEdBQUdULE1BQU0sS0FBSyxJQUFYLElBQW1CQSxNQUFNLEtBQUtVLFNBQTlCLHFDQUE2Q1YsTUFBTSxDQUFDVyxZQUFwRCx5REFBNkMscUJBQXFCQyxHQUFsRSxJQUEwRSxJQUE3RjtBQUVBLFNBQ0U7QUFDRSxhQUFTLEVBQUVDLGlEQUFVLENBQUNDLGtFQUFNLENBQUNDLFlBQVIsZ0dBQ2xCRCxrRUFBTSxDQUFDRSxRQURXLEVBQ0EsQ0FBQ2pCLElBREQsRUFEdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFO0FBQUssYUFB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QUFFTyxJQUFJLENBQUM2QyxJQUFQLHdFQUFFLFdBQVcxRCxZQUFiLDBEQUFFLHNCQUF5QkMsR0FGaEM7QUFHRSxRQUFJLGlCQUFFWSxJQUFJLENBQUM2QyxJQUFQLGdEQUFFLFlBQVduRCxRQUhuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQVFFO0FBQUssYUFBUyxFQUFFSixrRUFBTSxDQUFDd0QsS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsUUFBRDtBQUNFLFNBQUssRUFBRTFDLFdBRFQ7QUFFRSxlQUFXLEVBQUMsbUJBRmQ7QUFHRSxRQUFJLEVBQUUsQ0FIUjtBQUlFLFlBQVEsRUFBRVUsZ0JBSlo7QUFLRSxhQUFTLEVBQUVOLGNBTGI7QUFNRSxTQUFLO0FBQUl1QyxrQkFBWSxFQUFFO0FBQWxCLHdIQUFvQyxFQUFwQyw4R0FBZ0QsRUFBaEQsbUhBQWlFLEVBQWpFLGtIQUFpRixFQUFqRixrSEFBaUcsYUFBakcsU0FOUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FSRixDQW5CRixDQURGO0FBeUNEOztHQWxLUW5ELFE7O01BQUFBLFE7O0FBb0tULElBQU1vRCxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ2xDL0MsU0FBSyxFQUFFK0MsS0FBSyxDQUFDakQsSUFBTixDQUFXRSxLQURnQjtBQUVsQ0YsUUFBSSxFQUFFaUQsS0FBSyxDQUFDakQ7QUFGc0IsR0FBWjtBQUFBLENBQXhCOztBQUtla0QsMkhBQU8sQ0FBQ0YsZUFBRCxDQUFQLENBQXlCcEQsUUFBekIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLjFkMTRjY2MxZWIzNWJmOTUxMTY1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgUG9wb3ZlciB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL2NvbW1lbnQubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRyaW1UZXh0IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL1RyaW1UZXh0JztcclxuaW1wb3J0IEF2YXRhciBmcm9tICcuLi9jb21tb24vQXZhdGFyJztcclxuaW1wb3J0IEFQSSBmcm9tICdjb25maWdzL0FQSSc7XHJcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IERyYWdhYmxlUmF0aW5nIGZyb20gJy4uL2Zvcm1zL3JhdGluZy9EcmFnYWJsZVJhdGluZyc7XHJcbmltcG9ydCBSYXRpbmdTbGlkZSBmcm9tICcuLi9mb3Jtcy9yYXRpbmcvUmF0aW5nU2xpZGUnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcblxyXG5mdW5jdGlvbiBDb21tZW50SXRlbSh7IG1lc3NhZ2UsIG1pbmUsIGF1dGhvciwgcmF0aW5nLCBpZCwgb25SYXRlQ29tbWVudCB9KSB7XHJcbiAgY29uc3QgZnVsbE5hbWUgPSBgJHthdXRob3I/LmZpcnN0TmFtZX0gJHthdXRob3I/Lmxhc3ROYW1lfWA7XHJcbiAgY29uc3QgaGFuZGxlUmF0ZUNvbW1lbnQgPSAocmF0ZSkgPT4ge1xyXG4gICAgb25SYXRlQ29tbWVudChpZCwgcmF0ZSk7XHJcbiAgfTtcclxuICBjb25zdCBwcm9maWxlVXJsID0gYXV0aG9yICE9PSBudWxsICYmIGF1dGhvciAhPT0gdW5kZWZpbmVkID8gYCR7YXV0aG9yLnByb2ZpbGVQaG90bz8uc3JjfWAgOiBudWxsXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuY29tbWVudF9pdGVtLCB7XHJcbiAgICAgICAgW3N0eWxlcy5ub3RfbWluZV06ICFtaW5lLFxyXG4gICAgICB9KX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9PlxyXG4gICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgIHNpemU9ezUwfVxyXG4gICAgICAgICAgdXJsPXtwcm9maWxlVXJsfVxyXG4gICAgICAgICAgdGV4dD17YXV0aG9yPy51c2VybmFtZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxSYXRpbmdTbGlkZVxyXG4gICAgICAgICAgZGVmYXVsdFJhdGU9e3JhdGluZ31cclxuICAgICAgICAgIHdpdGhvdXRUZXh0XHJcbiAgICAgICAgICBkYXJrXHJcbiAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVJhdGVDb21tZW50fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgey8qIDxEcmFnYWJsZVJhdGluZyByYXRpbmc9e3JhdGluZ30gaGFuZGxlUmF0ZUNvbW1lbnQ9e2hhbmRsZVJhdGVDb21tZW50fSAvPiAqL31cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVzc2FnZV9jb250YWluZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVzc2FnZX0+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5hdXRob3J9PntmdWxsTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgPFRyaW1UZXh0IGxpbWl0PXsxMTB9PnttZXNzYWdlfTwvVHJpbVRleHQ+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gQ29tbWVudHMoe1xyXG4gIGRhdGEgPSBbXSxcclxuICBtb2RhbE1vZGUgPSBmYWxzZSxcclxuICBpZCxcclxuICB0eXBlLFxyXG4gIGF1dGgsXHJcbiAgb25VcGRhdGVUaW1lbGluZSxcclxuICB0b2tlbixcclxufSkge1xyXG4gIGNvbnN0IFtjb21tZW50VGV4dCwgc2V0Q29tbWVudFRleHRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtjb21tZW50TGlzdCwgc2V0Q29tbWVudExpc3RdID0gdXNlU3RhdGUoW1xyXG4gICAgLy8gICB7XHJcbiAgICAvLyAgICAgbWluZTogdHJ1ZSxcclxuICAgIC8vICAgICBtZXNzYWdlOiBgTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZ1xyXG4gICAgLy8gaW5kdXN0cnkuIExvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeSdzIHN0YW5kYXJkIGR1bW15IHRleHRcclxuICAgIC8vIGV2ZXIgc2luY2UgdGhlIDE1MDBzYCxcclxuICAgIC8vICAgfSxcclxuICAgIC8vICAgeyBtZXNzYWdlOiAnbWVzc2FnZScgfSxcclxuICBdKTtcclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIHNldENvbW1lbnRMaXN0KGRhdGEpO1xyXG4gIC8vIH0sIFtkYXRhXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUVudGVyS2V5ID0gKGUpID0+IHtcclxuICAgIGlmIChlLm5hdGl2ZUV2ZW50LmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIG9uQ29tbWVudCh0eXBlLCBpZCwgY29tbWVudFRleHQpO1xyXG5cclxuICAgICAgc2V0Q29tbWVudFRleHQoJycpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVRleHQgPSAoZSkgPT4ge1xyXG4gICAgc2V0Q29tbWVudFRleHQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQ29tbWVudCA9IGFzeW5jICh0eXBlLCBwb3N0SWQsIHRleHQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCB1cmwgPSAnJztcclxuICAgICAgbGV0IGRhdGFGb3JSZXF1ZXN0O1xyXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YTtcclxuXHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgnY29tbWVudGVkJywgcG9zdElkKVxyXG5cclxuICAgICAgaWYgKHR5cGUgPT09ICdQaG90bycpIHtcclxuICAgICAgICB1cmwgPSAnL3Bob3Rvcy9jb21tZW50JztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnVmlkZW9DbGlwJykge1xyXG4gICAgICAgIHVybCA9ICcvdmlkZW8tY2xpcHMvY29tbWVudCc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0l0ZW0nKSB7XHJcbiAgICAgICAgdXJsID0gJy9pdGVtcy9jb21tZW50JztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnUG9zdCcpIHtcclxuICAgICAgICB1cmwgPSAnL3Bvc3RzL2NvbW1lbnQnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdDb21tZW50Jykge1xyXG4gICAgICAgIHVybCA9ICcvY29tbWVudHMvY29tbWVudCc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGlmIChmaWxlcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIC8vICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAvLyAgICAgaWYgKGZpbGVzW2ldLnR5cGUuc3BsaXQoJy8nKVswXSA9PT0gJ2ltYWdlJykge1xyXG4gICAgICAvLyAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgZmlsZXNbaV0pO1xyXG4gICAgICAvLyAgICAgfVxyXG4gICAgICAvLyAgIH1cclxuICAgICAgLy8gfVxyXG4gICAgICBcclxuICAgICAgaWYgKHRleHQubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd0ZXh0JywgdGV4dClcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgZGF0YUZvclJlcXVlc3QgPSBmb3JtRGF0YVxyXG5cclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsLFxyXG4gICAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiB0b2tlbiB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG5cclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgb25VcGRhdGVUaW1lbGluZSgpO1xyXG4gICAgICAgIG1lc3NhZ2Uuc3VjY2VzcygnWW91ciBjb21tZW50IHB1Ymxpc2hlZCBzdWNjZXNzZnVseScpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBhd2FpdCByZXF1ZXN0O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uUmF0ZUNvbW1lbnQgPSBhc3luYyAoY29tbWVudElkLCByYXRlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhjb21tZW50SWQsIHJhdGUpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsOiAnL2NvbW1lbnRzL3JhdGUnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHJhdGVkOiBjb21tZW50SWQsXHJcbiAgICAgICAgICByYXRpbmc6IHJhdGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogdG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG5cclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgb25VcGRhdGVUaW1lbGluZSgpO1xyXG4gICAgICAgIC8vIG1lc3NhZ2Uuc3VjY2VzcygnRXZhbHVhdGUgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuY29tbWVudHMsIHtcclxuICAgICAgICBbc3R5bGVzLm1vZGFsX21vZGVdOiBtb2RhbE1vZGUsXHJcbiAgICAgIH0pfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnRzX3dyYXBwZXJ9PlxyXG4gICAgICAgIHsobW9kYWxNb2RlID8gZGF0YSA6IGRhdGEuc2xpY2UoMCwgMikpLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgPENvbW1lbnRJdGVtXHJcbiAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgIG1pbmU9e2l0ZW0ubWluZX1cclxuICAgICAgICAgICAgbWVzc2FnZT17aXRlbS50ZXh0fVxyXG4gICAgICAgICAgICBhdXRob3I9e2l0ZW0uYWNjb3VudH1cclxuICAgICAgICAgICAgcmF0aW5nPXtpdGVtLnJhdGluZ31cclxuICAgICAgICAgICAgb25SYXRlQ29tbWVudD17b25SYXRlQ29tbWVudH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50X2JveH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9PlxyXG4gICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICBzaXplPXs0NX1cclxuICAgICAgICAgICAgdXJsPXthdXRoLnVzZXI/LnByb2ZpbGVQaG90bz8uc3JjfVxyXG4gICAgICAgICAgICB0ZXh0PXthdXRoLnVzZXI/LnVzZXJuYW1lfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fT5cclxuICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICB2YWx1ZT17Y29tbWVudFRleHR9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBkbyB5b3UgbWVhbj9cIlxyXG4gICAgICAgICAgICByb3dzPXsyfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlVGV4dH1cclxuICAgICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVFbnRlcktleX1cclxuICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiAxNSwgYm9yZGVyUmFkaXVzOiAzNiwgaGVpZ2h0OiA0NSwgcGFkZGluZ0xlZnQ6IDMwLCBwYWRkaW5nVG9wOiAxMCwgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50J319XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdG9yZSkgPT4gKHtcclxuICB0b2tlbjogc3RvcmUuYXV0aC50b2tlbixcclxuICBhdXRoOiBzdG9yZS5hdXRoLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShDb21tZW50cyk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=