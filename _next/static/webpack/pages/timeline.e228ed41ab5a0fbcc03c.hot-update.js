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

  console.log(auth);

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
  }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9UaW1lbGluZS9UaW1lbGluZVBhZ2UuanMiXSwibmFtZXMiOlsiVGltZWxpbmVQYWdlIiwiYXV0aFNlcnZpY2VzIiwiYXV0aCIsInVzZUNvbnRleHQiLCJUaW1lTGluZUNvbnRleHQiLCJzdG9yYWdlIiwiZGlzcGF0Y2giLCJjb25zb2xlIiwibG9nIiwiZ2V0VGltZWxpbmUiLCJ0b2tlbiIsIndpdGhvdXRMb2FkaW5nIiwic2V0TG9hZGluZyIsIkFQSSIsIm1ldGhvZCIsInVybCIsImhlYWRlcnMiLCJyZXF1ZXN0IiwiZGF0YSIsInN0YXR1cyIsInNldFRpbWVsaW5lRGF0YSIsInJlZnJlc2hUb2tlbiIsIm1lc3NhZ2UiLCJlcnJvciIsImNyZWF0ZVBvc3QiLCJkYXRhRm9yUmVxdWVzdCIsIm9uVXBkYXRlVGltZWxpbmUiLCJyYXRlUG9zdCIsInR5cGUiLCJwb3N0SWQiLCJyYXRlIiwicmF0ZWQiLCJyYXRpbmciLCJ3YXJuIiwic3VjY2VzcyIsInVzZUVmZmVjdCIsInJlcXVpcmVBdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsWUFBVCxPQUE4QztBQUFBOztBQUFBLE1BQXRCQyxZQUFzQixRQUF0QkEsWUFBc0I7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7O0FBQUEsb0JBQ2hCQyx3REFBVSxDQUFDQyx3RUFBRCxDQURNO0FBQUEsTUFDckNDLE9BRHFDO0FBQUEsTUFDNUJDLFFBRDRCOztBQUU1Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVlOLElBQVo7O0FBQ0EsTUFBTU8sV0FBVztBQUFBLGlNQUFHLGlCQUFPQyxLQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWNDLDRCQUFkLDJE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SUFBQUEsSUFBSSxXQUFKLFlBQUFBLElBQUksQ0FBRUksT0FBTixLQUFpQixpQkFBL0I7QUFDRDs7QUFFRGhCLHNCQUFRLENBQUNNLDREQUFVLENBQUMsS0FBRCxFQUFRLFNBQVIsQ0FBWCxDQUFSO0FBckNhO0FBQUEscUJBdUNBSyxPQXZDQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQXlDYlgsc0JBQVEsQ0FBQ00sNERBQVUsQ0FBQyxLQUFELEVBQVEsU0FBUixDQUFYLENBQVI7O0FBekNhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVJlLFFBQVE7QUFBQTtBQUFBO0FBQUEsS0FBZDs7QUE2Q0EsTUFBTUQsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzdCakIsZUFBVyxDQUFDUCxJQUFJLENBQUNRLEtBQU4sRUFBYSxJQUFiLENBQVg7QUFDRCxHQUZEOztBQUlBeUIseURBQVMsQ0FBQyxZQUFNO0FBQ2QxQixlQUFXLENBQUNQLElBQUksQ0FBQ1EsS0FBTixDQUFYO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVCxDQTFHNEMsQ0E4RzVDO0FBQ0E7QUFDQTs7QUFFQSxTQUNFLG1FQUNFLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREY7QUFxQ0Q7O0dBdkpRVixZOztLQUFBQSxZO0FBeUpNLHFFQUFBb0MseUVBQVcsQ0FBQ3BDLFlBQUQsQ0FBMUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGltZWxpbmUuZTIyOGVkNDFhYjVhMGZiY2MwM2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWRlciBmcm9tICdjb21wb25lbnRzL2hlYWRlci9IZWFkZXInO1xyXG5pbXBvcnQgVGltZWxpbmVQb3N0cyBmcm9tICdjb21wb25lbnRzL3RpbWVsaW5lL1RpbWVsaW5lUG9zdHMnO1xyXG5pbXBvcnQgUG9zdGluZ1Bvc3QgZnJvbSAnY29tcG9uZW50cy9wcm9maWxlL1Bvc3RpbmdQb3N0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy90aW1lbGluZS5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBBUEkgZnJvbSAnY29uZmlncy9BUEknO1xyXG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IFRpbWVMaW5lQ29udGV4dCB9IGZyb20gJy4vc3RvcmFnZS9UaW1lbGluZUNvbnRleHQnO1xyXG5pbXBvcnQgeyBzZXRMb2FkaW5nLCBzZXRUaW1lbGluZURhdGEgfSBmcm9tICcuL2FjdGlvbnMnO1xyXG5pbXBvcnQgTG9hZGluZ1dyYXBwZXIgZnJvbSAnY29tcG9uZW50cy9jb21tb24vTG9hZGluZ1dyYXBwZXInO1xyXG5pbXBvcnQgcmVxdWlyZUF1dGggZnJvbSAnLi4vLi4vaGVscGVycy9ob2MvcmVxdWlyZUF1dGgnO1xyXG5pbXBvcnQgTW9kYWxXcmFwcGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9uL01vZGFsV3JhcHBlcic7XHJcblxyXG5mdW5jdGlvbiBUaW1lbGluZVBhZ2UoeyBhdXRoU2VydmljZXMsIGF1dGggfSkge1xyXG4gIGNvbnN0IFtzdG9yYWdlLCBkaXNwYXRjaF0gPSB1c2VDb250ZXh0KFRpbWVMaW5lQ29udGV4dCk7XHJcbiAgY29uc29sZS5sb2coYXV0aCk7XHJcbiAgY29uc3QgZ2V0VGltZWxpbmUgPSBhc3luYyAodG9rZW4sIHdpdGhvdXRMb2FkaW5nID0gZmFsc2UpID0+IHtcclxuICAgIC8vIGNvbnNvbGUud2FybihhdXRoU2VydmljZXMuYXV0aCwgYXV0aFNlcnZpY2VzLmxvY2Fsc3RvcmFnZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoIXdpdGhvdXRMb2FkaW5nKSBkaXNwYXRjaChzZXRMb2FkaW5nKHRydWUpKTtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsOiAnL2FjY291bnRzL3RpbWVsaW5lJyxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogdG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBkaXNwYXRjaChzZXRUaW1lbGluZURhdGEoZGF0YSkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCc9PT09PT09PT0nKTtcclxuICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IDQwMykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCc9PT09PT09PT09PT09PT09PSBSZWZyZXNoIHRva2VuICEnKTtcclxuXHJcbiAgICAgICAgYXV0aFNlcnZpY2VzLnJlZnJlc2hUb2tlbihnZXRUaW1lbGluZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCF3aXRob3V0TG9hZGluZykgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICBpZiAoIXdpdGhvdXRMb2FkaW5nKSBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY3JlYXRlUG9zdCA9IGFzeW5jIChkYXRhRm9yUmVxdWVzdCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlLCAncG9zdGluZycpKTtcclxuXHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybDogJy9wb3N0cycsXHJcbiAgICAgICAgZGF0YTogZGF0YUZvclJlcXVlc3QsXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG5cclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgb25VcGRhdGVUaW1lbGluZSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UsICdwb3N0aW5nJykpO1xyXG5cclxuICAgICAgcmV0dXJuIGF3YWl0IHJlcXVlc3Q7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlLCAncG9zdGluZycpKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCByYXRlUG9zdCA9IGFzeW5jICh0eXBlLCBwb3N0SWQsIHJhdGUpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcodHJ1ZSwgJ3Bvc3RpbmcnKSk7XHJcbiAgICAgIGxldCB1cmwgPSAnJztcclxuXHJcbiAgICAgIGlmICh0eXBlID09PSAnUGhvdG8nKSB7XHJcbiAgICAgICAgdXJsID0gJy9waG90b3MvcmF0ZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1ZpZGVvQ2xpcCcpIHtcclxuICAgICAgICB1cmwgPSAnL3ZpZGVvLWNsaXBzL3JhdGUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdJdGVtJykge1xyXG4gICAgICAgIHVybCA9ICcvaXRlbXMvcmF0ZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1Bvc3QnKSB7XHJcbiAgICAgICAgdXJsID0gJy9wb3N0cy9yYXRlJztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnQ29tbWVudCcpIHtcclxuICAgICAgICB1cmwgPSAnL2NvbW1lbnRzL3JhdGUnO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmwsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgcmF0ZWQ6IHBvc3RJZCxcclxuICAgICAgICAgIHJhdGluZzogcmF0ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuXHJcbiAgICAgIGNvbnNvbGUud2FybigncmF0ZVBvc3QnLCBkYXRhLCBzdGF0dXMpO1xyXG5cclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgb25VcGRhdGVUaW1lbGluZSgpO1xyXG4gICAgICAgIG1lc3NhZ2Uuc3VjY2VzcygnRXZhbHVhdGUgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSwgJ3Bvc3RpbmcnKSk7XHJcblxyXG4gICAgICByZXR1cm4gYXdhaXQgcmVxdWVzdDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UsICdwb3N0aW5nJykpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uVXBkYXRlVGltZWxpbmUgPSAoKSA9PiB7XHJcbiAgICBnZXRUaW1lbGluZShhdXRoLnRva2VuLCB0cnVlKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0VGltZWxpbmUoYXV0aC50b2tlbik7XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgY29uc29sZS5sb2coJ3N0b3JhZ2UnLCBzdG9yYWdlKTtcclxuICAvLyB9LCBbc3RvcmFnZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lbGluZX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mZWVkX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNyZWF0ZVBvc3REaXZ9PlxyXG4gICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICBzaXplPXs1MH1cclxuICAgICAgICAgICAgICAgIHVybD17cHJvZmlsZVVybH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLmNyZWF0ZVBvc3RJbnB1dH0gcGxhY2Vob2xkZXI9XCJXaGF0J3Mgb24geW91ciBtaW5kP1wiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17bW9kYWxQb3B1cH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICA8L2lucHV0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8TG9hZGluZ1dyYXBwZXIgbG9hZGluZz17c3RvcmFnZS5sb2FkaW5nfT5cclxuICAgICAgICAgICAgPFRpbWVsaW5lUG9zdHNcclxuICAgICAgICAgICAgICBkYXRhPXtzdG9yYWdlLnRpbWVsaW5lRGF0YX1cclxuICAgICAgICAgICAgICBvblVwZGF0ZVRpbWVsaW5lPXtvblVwZGF0ZVRpbWVsaW5lfVxyXG4gICAgICAgICAgICAgIG9uUmF0ZVBvc3Q9e3JhdGVQb3N0fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Mb2FkaW5nV3JhcHBlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxNb2RhbFdyYXBwZXJcclxuICAgICAgICAgIHRpdGxlPVwiQ3JlYXRlIFBvc3RcIlxyXG4gICAgICAgICAgc2hvd01vZGFsPXtwb3N0TW9kYWx9XHJcbiAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRQb3N0TW9kYWwoMCl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFBvc3RpbmdQb3N0XHJcbiAgICAgICAgICAgICAgbG9hZGluZz17c3RvcmFnZS5wb3N0aW5nTG9hZGluZ31cclxuICAgICAgICAgICAgICBvblBvc3Rpbmc9e2NyZWF0ZVBvc3R9XHJcbiAgICAgICAgICAgICAgbW9kYWxQb3B1cD17bW9kYWxQb3B1cH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgIDwvTW9kYWxXcmFwcGVyPiAqL31cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlcXVpcmVBdXRoKFRpbWVsaW5lUGFnZSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=