webpackHotUpdate_N_E("pages/timeline",{

/***/ "./containers/Timeline/TimelinePage.js":
/*!*********************************************!*\
  !*** ./containers/Timeline/TimelinePage.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/header/Header */ "./components/header/Header.js");
/* harmony import */ var components_timeline_TimelinePosts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/timeline/TimelinePosts */ "./components/timeline/TimelinePosts.js");
/* harmony import */ var components_profile_PostingPost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/profile/PostingPost */ "./components/profile/PostingPost.js");
/* harmony import */ var _styles_timeline_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/timeline.module.scss */ "./containers/Timeline/styles/timeline.module.scss");
/* harmony import */ var _styles_timeline_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_timeline_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var configs_API__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! configs/API */ "./configs/API.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _storage_TimelineContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./storage/TimelineContext */ "./containers/Timeline/storage/TimelineContext.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./actions */ "./containers/Timeline/actions/index.js");
/* harmony import */ var components_common_LoadingWrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/common/LoadingWrapper */ "./components/common/LoadingWrapper.js");
/* harmony import */ var _helpers_hoc_requireAuth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../helpers/hoc/requireAuth */ "./helpers/hoc/requireAuth.js");
/* harmony import */ var _components_common_ModalWrapper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/common/ModalWrapper */ "./components/common/ModalWrapper.js");



var _jsxFileName = "E:\\freeskies_fe_code\\containers\\Timeline\\TimelinePage.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;













function TimelinePage(_ref) {
  _s();

  var authServices = _ref.authServices,
      auth = _ref.auth;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_storage_TimelineContext__WEBPACK_IMPORTED_MODULE_9__["TimeLineContext"]),
      storage = _useContext[0],
      dispatch = _useContext[1];

  var getTimeline = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(token) {
      var withoutLoading,
          request,
          data,
          status,
          _args = arguments;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              withoutLoading = _args.length > 1 && _args[1] !== undefined ? _args[1] : false;
              _context.prev = 1;
              if (!withoutLoading) dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_10__["setLoading"])(true));
              _context.next = 5;
              return Object(configs_API__WEBPACK_IMPORTED_MODULE_7__["default"])({
                method: 'post',
                url: '/accounts/timeline',
                headers: {
                  'x-token': token
                }
              });

            case 5:
              request = _context.sent;
              data = request.data, status = request.status;

              if (status === 200) {
                dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_10__["setTimelineData"])(data));
                console.log('=========');
              } else if (status === 403) {
                console.log('================= Refresh token !');
                authServices.refreshToken(getTimeline);
              } else {
                antd__WEBPACK_IMPORTED_MODULE_8__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
              }

              if (!withoutLoading) dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_10__["setLoading"])(false));
              _context.next = 15;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);
              if (!withoutLoading) dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_10__["setLoading"])(false));

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 11]]);
    }));

    return function getTimeline(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var createPost = /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dataForRequest) {
      var request, data, status;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_10__["setLoading"])(true, 'posting'));
              _context2.next = 4;
              return Object(configs_API__WEBPACK_IMPORTED_MODULE_7__["default"])({
                method: 'post',
                url: '/posts',
                data: dataForRequest,
                headers: {
                  'x-token': auth.token
                }
              });

            case 4:
              request = _context2.sent;
              data = request.data, status = request.status;

              if (status === 201) {
                onUpdateTimeline();
              } else {
                antd__WEBPACK_IMPORTED_MODULE_8__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
              }

              dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_10__["setLoading"])(false, 'posting'));
              _context2.next = 10;
              return request;

            case 10:
              return _context2.abrupt("return", _context2.sent);

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](0);
              dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_10__["setLoading"])(false, 'posting'));

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 13]]);
    }));

    return function createPost(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  var ratePost = /*#__PURE__*/function () {
    var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(type, postId, rate) {
      var url, request, data, status;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_10__["setLoading"])(true, 'posting'));
              url = '';

              if (type === 'Photo') {
                url = '/photos/rate';
              } else if (type === 'VideoClip') {
                url = '/video-clips/rate';
              } else if (type === 'Item') {
                url = '/items/rate';
              } else if (type === 'Post') {
                url = '/posts/rate';
              } else if (type === 'Comment') {
                url = '/comments/rate';
              }

              _context3.next = 6;
              return Object(configs_API__WEBPACK_IMPORTED_MODULE_7__["default"])({
                method: 'post',
                url: url,
                data: {
                  rated: postId,
                  rating: rate
                },
                headers: {
                  'x-token': auth.token
                }
              });

            case 6:
              request = _context3.sent;
              data = request.data, status = request.status;
              console.warn('ratePost', data, status);

              if (status === 201) {
                onUpdateTimeline();
                antd__WEBPACK_IMPORTED_MODULE_8__["message"].success('Evaluate successfully');
              } else {
                antd__WEBPACK_IMPORTED_MODULE_8__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
              }

              dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_10__["setLoading"])(false, 'posting'));
              _context3.next = 13;
              return request;

            case 13:
              return _context3.abrupt("return", _context3.sent);

            case 16:
              _context3.prev = 16;
              _context3.t0 = _context3["catch"](0);
              dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_10__["setLoading"])(false, 'posting'));

            case 19:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 16]]);
    }));

    return function ratePost(_x3, _x4, _x5) {
      return _ref4.apply(this, arguments);
    };
  }();

  var onUpdateTimeline = function onUpdateTimeline() {
    getTimeline(auth.token, true);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    getTimeline(auth.token);
  }, []); // useEffect(() => {
  //   console.log('storage', storage);
  // }, [storage]);

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(components_header_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: _styles_timeline_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.timeline,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_timeline_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.feed_container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_timeline_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.createPostDiv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 11
    }
  }, __jsx(Avatar, {
    size: 50,
    url: profileUrl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }
  }), __jsx("input", {
    className: _styles_timeline_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.createPostInput,
    placeholder: "What's on your mind?",
    onClick: modalPopup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  })), __jsx(components_common_LoadingWrapper__WEBPACK_IMPORTED_MODULE_11__["default"], {
    loading: storage.loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 11
    }
  }, __jsx(components_timeline_TimelinePosts__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: storage.timelineData,
    onUpdateTimeline: onUpdateTimeline,
    onRatePost: ratePost,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 13
    }
  })))), __jsx(_components_common_ModalWrapper__WEBPACK_IMPORTED_MODULE_13__["default"], {
    title: "Create Post",
    showModal: postModal,
    onClose: function onClose() {
      return setPostModal(0);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 7
    }
  }, __jsx(components_profile_PostingPost__WEBPACK_IMPORTED_MODULE_5__["default"], {
    loading: storage.postingLoading,
    onPosting: createPost,
    modalPopup: modalPopup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 11
    }
  })));
}

_s(TimelinePage, "v9NreppLEhWkK7EGzwLejueLpMc=");

_c = TimelinePage;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(_helpers_hoc_requireAuth__WEBPACK_IMPORTED_MODULE_12__["default"])(TimelinePage));

var _c, _c2;

$RefreshReg$(_c, "TimelinePage");
$RefreshReg$(_c2, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9UaW1lbGluZS9UaW1lbGluZVBhZ2UuanMiXSwibmFtZXMiOlsiVGltZWxpbmVQYWdlIiwiYXV0aFNlcnZpY2VzIiwiYXV0aCIsInVzZUNvbnRleHQiLCJUaW1lTGluZUNvbnRleHQiLCJzdG9yYWdlIiwiZGlzcGF0Y2giLCJnZXRUaW1lbGluZSIsInRva2VuIiwid2l0aG91dExvYWRpbmciLCJzZXRMb2FkaW5nIiwiQVBJIiwibWV0aG9kIiwidXJsIiwiaGVhZGVycyIsInJlcXVlc3QiLCJkYXRhIiwic3RhdHVzIiwic2V0VGltZWxpbmVEYXRhIiwiY29uc29sZSIsImxvZyIsInJlZnJlc2hUb2tlbiIsIm1lc3NhZ2UiLCJlcnJvciIsImNyZWF0ZVBvc3QiLCJkYXRhRm9yUmVxdWVzdCIsIm9uVXBkYXRlVGltZWxpbmUiLCJyYXRlUG9zdCIsInR5cGUiLCJwb3N0SWQiLCJyYXRlIiwicmF0ZWQiLCJyYXRpbmciLCJ3YXJuIiwic3VjY2VzcyIsInVzZUVmZmVjdCIsInN0eWxlcyIsInRpbWVsaW5lIiwiZmVlZF9jb250YWluZXIiLCJjcmVhdGVQb3N0RGl2IiwicHJvZmlsZVVybCIsImNyZWF0ZVBvc3RJbnB1dCIsIm1vZGFsUG9wdXAiLCJsb2FkaW5nIiwidGltZWxpbmVEYXRhIiwicG9zdE1vZGFsIiwic2V0UG9zdE1vZGFsIiwicG9zdGluZ0xvYWRpbmciLCJyZXF1aXJlQXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFlBQVQsT0FBOEM7QUFBQTs7QUFBQSxNQUF0QkMsWUFBc0IsUUFBdEJBLFlBQXNCO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFROztBQUFBLG9CQUNoQkMsd0RBQVUsQ0FBQ0Msd0VBQUQsQ0FETTtBQUFB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bWVsaW5lLmYwZjY4NDcwODMyMzkxYzY4Yzg5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyJztcclxuaW1wb3J0IFRpbWVsaW5lUG9zdHMgZnJvbSAnY29tcG9uZW50cy90aW1lbGluZS9UaW1lbGluZVBvc3RzJztcclxuaW1wb3J0IFBvc3RpbmdQb3N0IGZyb20gJ2NvbXBvbmVudHMvcHJvZmlsZS9Qb3N0aW5nUG9zdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvdGltZWxpbmUubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgQVBJIGZyb20gJ2NvbmZpZ3MvQVBJJztcclxuaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBUaW1lTGluZUNvbnRleHQgfSBmcm9tICcuL3N0b3JhZ2UvVGltZWxpbmVDb250ZXh0JztcclxuaW1wb3J0IHsgc2V0TG9hZGluZywgc2V0VGltZWxpbmVEYXRhIH0gZnJvbSAnLi9hY3Rpb25zJztcclxuaW1wb3J0IExvYWRpbmdXcmFwcGVyIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL0xvYWRpbmdXcmFwcGVyJztcclxuaW1wb3J0IHJlcXVpcmVBdXRoIGZyb20gJy4uLy4uL2hlbHBlcnMvaG9jL3JlcXVpcmVBdXRoJztcclxuaW1wb3J0IE1vZGFsV3JhcHBlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9Nb2RhbFdyYXBwZXInO1xyXG5cclxuZnVuY3Rpb24gVGltZWxpbmVQYWdlKHsgYXV0aFNlcnZpY2VzLCBhdXRoIH0pIHtcclxuICBjb25zdCBbc3RvcmFnZSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChUaW1lTGluZUNvbnRleHQpO1xyXG5cclxuICBjb25zdCBnZXRUaW1lbGluZSA9IGFzeW5jICh0b2tlbiwgd2l0aG91dExvYWRpbmcgPSBmYWxzZSkgPT4ge1xyXG4gICAgLy8gY29uc29sZS53YXJuKGF1dGhTZXJ2aWNlcy5hdXRoLCBhdXRoU2VydmljZXMubG9jYWxzdG9yYWdlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICghd2l0aG91dExvYWRpbmcpIGRpc3BhdGNoKHNldExvYWRpbmcodHJ1ZSkpO1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6ICcvYWNjb3VudHMvdGltZWxpbmUnLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiB0b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIGRpc3BhdGNoKHNldFRpbWVsaW5lRGF0YShkYXRhKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJz09PT09PT09PScpO1xyXG4gICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gNDAzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJz09PT09PT09PT09PT09PT09IFJlZnJlc2ggdG9rZW4gIScpO1xyXG5cclxuICAgICAgICBhdXRoU2VydmljZXMucmVmcmVzaFRva2VuKGdldFRpbWVsaW5lKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIXdpdGhvdXRMb2FkaW5nKSBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIGlmICghd2l0aG91dExvYWRpbmcpIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBjcmVhdGVQb3N0ID0gYXN5bmMgKGRhdGFGb3JSZXF1ZXN0KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKHRydWUsICdwb3N0aW5nJykpO1xyXG5cclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsOiAnL3Bvc3RzJyxcclxuICAgICAgICBkYXRhOiBkYXRhRm9yUmVxdWVzdCxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcblxyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICBvblVwZGF0ZVRpbWVsaW5lKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSwgJ3Bvc3RpbmcnKSk7XHJcblxyXG4gICAgICByZXR1cm4gYXdhaXQgcmVxdWVzdDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UsICdwb3N0aW5nJykpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJhdGVQb3N0ID0gYXN5bmMgKHR5cGUsIHBvc3RJZCwgcmF0ZSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlLCAncG9zdGluZycpKTtcclxuICAgICAgbGV0IHVybCA9ICcnO1xyXG5cclxuICAgICAgaWYgKHR5cGUgPT09ICdQaG90bycpIHtcclxuICAgICAgICB1cmwgPSAnL3Bob3Rvcy9yYXRlJztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnVmlkZW9DbGlwJykge1xyXG4gICAgICAgIHVybCA9ICcvdmlkZW8tY2xpcHMvcmF0ZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0l0ZW0nKSB7XHJcbiAgICAgICAgdXJsID0gJy9pdGVtcy9yYXRlJztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnUG9zdCcpIHtcclxuICAgICAgICB1cmwgPSAnL3Bvc3RzL3JhdGUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdDb21tZW50Jykge1xyXG4gICAgICAgIHVybCA9ICcvY29tbWVudHMvcmF0ZSc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICByYXRlZDogcG9zdElkLFxyXG4gICAgICAgICAgcmF0aW5nOiByYXRlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG5cclxuICAgICAgY29uc29sZS53YXJuKCdyYXRlUG9zdCcsIGRhdGEsIHN0YXR1cyk7XHJcblxyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICBvblVwZGF0ZVRpbWVsaW5lKCk7XHJcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKCdFdmFsdWF0ZSBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlLCAncG9zdGluZycpKTtcclxuXHJcbiAgICAgIHJldHVybiBhd2FpdCByZXF1ZXN0O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSwgJ3Bvc3RpbmcnKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25VcGRhdGVUaW1lbGluZSA9ICgpID0+IHtcclxuICAgIGdldFRpbWVsaW5lKGF1dGgudG9rZW4sIHRydWUpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRUaW1lbGluZShhdXRoLnRva2VuKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBjb25zb2xlLmxvZygnc3RvcmFnZScsIHN0b3JhZ2UpO1xyXG4gIC8vIH0sIFtzdG9yYWdlXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZWxpbmV9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmVlZF9jb250YWluZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jcmVhdGVQb3N0RGl2fT5cclxuICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgc2l6ZT17NTB9XHJcbiAgICAgICAgICAgICAgICB1cmw9e3Byb2ZpbGVVcmx9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5jcmVhdGVQb3N0SW5wdXR9IHBsYWNlaG9sZGVyPVwiV2hhdCdzIG9uIHlvdXIgbWluZD9cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e21vZGFsUG9wdXB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPC9pbnB1dD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPExvYWRpbmdXcmFwcGVyIGxvYWRpbmc9e3N0b3JhZ2UubG9hZGluZ30+XHJcbiAgICAgICAgICAgIDxUaW1lbGluZVBvc3RzXHJcbiAgICAgICAgICAgICAgZGF0YT17c3RvcmFnZS50aW1lbGluZURhdGF9XHJcbiAgICAgICAgICAgICAgb25VcGRhdGVUaW1lbGluZT17b25VcGRhdGVUaW1lbGluZX1cclxuICAgICAgICAgICAgICBvblJhdGVQb3N0PXtyYXRlUG9zdH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvTG9hZGluZ1dyYXBwZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TW9kYWxXcmFwcGVyXHJcbiAgICAgICAgICB0aXRsZT1cIkNyZWF0ZSBQb3N0XCJcclxuICAgICAgICAgIHNob3dNb2RhbD17cG9zdE1vZGFsfVxyXG4gICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0UG9zdE1vZGFsKDApfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxQb3N0aW5nUG9zdFxyXG4gICAgICAgICAgICAgIGxvYWRpbmc9e3N0b3JhZ2UucG9zdGluZ0xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgb25Qb3N0aW5nPXtjcmVhdGVQb3N0fVxyXG4gICAgICAgICAgICAgIG1vZGFsUG9wdXA9e21vZGFsUG9wdXB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICA8L01vZGFsV3JhcHBlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlcXVpcmVBdXRoKFRpbWVsaW5lUGFnZSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=