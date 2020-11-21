webpackHotUpdate_N_E("pages/friend",{

/***/ "./containers/Friend/Friend.js":
/*!*************************************!*\
  !*** ./containers/Friend/Friend.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal_hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal-hook */ "./node_modules/react-modal-hook/dist/index.es.js");
/* harmony import */ var components_header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/header/Header */ "./components/header/Header.js");
/* harmony import */ var helpers_hoc_requireAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! helpers/hoc/requireAuth */ "./helpers/hoc/requireAuth.js");
/* harmony import */ var _configs_API__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../configs/API */ "./configs/API.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _storage_FriendContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./storage/FriendContext */ "./containers/Friend/storage/FriendContext.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./actions */ "./containers/Friend/actions/index.js");
var _jsxFileName = "E:\\freeskies_fe_code\\containers\\Friend\\Friend.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










function Friends({
  auth,
  authServices
}) {
  _s();

  const {
    0: storage,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_storage_FriendContext__WEBPACK_IMPORTED_MODULE_7__["FriendsContext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getFriends();
  }, []);

  const getFriends = async () => {
    try {
      const request = await Object(_configs_API__WEBPACK_IMPORTED_MODULE_5__["default"])({
        method: 'post',
        data: {
          "offset": 0,
          "first": 10
        },
        url: '/accounts/friendship/get-friends',
        headers: {
          'x-token': auth.token
        }
      });
      const {
        data,
        status
      } = request;
      console.log(data);

      if (status === 200) {
        dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_8__["setFriends"])(data));
      } else if (status === 403) {
        authServices.refreshToken();
        getFriends();
      } else {
        antd__WEBPACK_IMPORTED_MODULE_6__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(storage);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx(components_header_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }));
}

_s(Friends, "v9NreppLEhWkK7EGzwLejueLpMc=");

_c = Friends;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(helpers_hoc_requireAuth__WEBPACK_IMPORTED_MODULE_4__["default"])(Friends));

var _c, _c2;

$RefreshReg$(_c, "Friends");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9GcmllbmQvRnJpZW5kLmpzIl0sIm5hbWVzIjpbIkZyaWVuZHMiLCJhdXRoIiwiYXV0aFNlcnZpY2VzIiwic3RvcmFnZSIsImRpc3BhdGNoIiwidXNlQ29udGV4dCIsIkZyaWVuZHNDb250ZXh0IiwidXNlRWZmZWN0IiwiZ2V0RnJpZW5kcyIsInJlcXVlc3QiLCJBUEkiLCJtZXRob2QiLCJkYXRhIiwidXJsIiwiaGVhZGVycyIsInRva2VuIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsInNldEZyaWVuZHMiLCJyZWZyZXNoVG9rZW4iLCJtZXNzYWdlIiwiZXJyb3IiLCJyZXF1aXJlQXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE9BQVQsQ0FBa0I7QUFBRUMsTUFBRjtBQUFRQztBQUFSLENBQWxCLEVBQTBDO0FBQUE7O0FBQ3RDLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUFzQkMsd0RBQVUsQ0FBQ0MscUVBQUQsQ0FBdEM7QUFDQUMseURBQVMsQ0FBQyxNQUFNO0FBQ1pDLGNBQVU7QUFDYixHQUZRLEVBRU4sRUFGTSxDQUFUOztBQUdBLFFBQU1BLFVBQVUsR0FBRyxZQUFZO0FBQzNCLFFBQUk7QUFDRixZQUFNQyxPQUFPLEdBQUcsTUFBTUMsNERBQUcsQ0FBQztBQUN4QkMsY0FBTSxFQUFFLE1BRGdCO0FBRXhCQyxZQUFJLEVBQUU7QUFDRixvQkFBVSxDQURSO0FBRUYsbUJBQVM7QUFGUCxTQUZrQjtBQU14QkMsV0FBRyxFQUFFLGtDQU5tQjtBQU94QkMsZUFBTyxFQUFFO0FBQUUscUJBQVdiLElBQUksQ0FBQ2M7QUFBbEI7QUFQZSxPQUFELENBQXpCO0FBU0EsWUFBTTtBQUFFSCxZQUFGO0FBQVFJO0FBQVIsVUFBbUJQLE9BQXpCO0FBQWlDUSxhQUFPLENBQUNDLEdBQVIsQ0FBWU4sSUFBWjs7QUFDakMsVUFBSUksTUFBTSxLQUFLLEdBQWYsRUFBb0I7QUFDbEJaLGdCQUFRLENBQUNlLDJEQUFVLENBQUNQLElBQUQsQ0FBWCxDQUFSO0FBQ0QsT0FGRCxNQUVPLElBQUlJLE1BQU0sS0FBSyxHQUFmLEVBQW9CO0FBQ3pCZCxvQkFBWSxDQUFDa0IsWUFBYjtBQUNBWixrQkFBVTtBQUNYLE9BSE0sTUFHQTtBQUNMYSxvREFBTyxDQUFDQyxLQUFSLENBQWMsQ0FBQVYsSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSixZQUFBQSxJQUFJLENBQUVTLE9BQU4sS0FBaUIsaUJBQS9CO0FBQ0Q7QUFFRixLQXBCRCxDQW9CRSxPQUFPQyxLQUFQLEVBQWM7QUFDZEwsYUFBTyxDQUFDQyxHQUFSLENBQVlJLEtBQVo7QUFDRDtBQUNKLEdBeEJEOztBQXlCQUwsU0FBTyxDQUFDQyxHQUFSLENBQVlmLE9BQVo7QUFDQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKO0FBS0g7O0dBcENRSCxPOztLQUFBQSxPO0FBc0NNLHFFQUFBdUIsdUVBQVcsQ0FBQ3ZCLE9BQUQsQ0FBMUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZnJpZW5kLjEzODcwZmRiOWJmZTE1ZThkMWRjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgdXNlTW9kYWwgfSBmcm9tICdyZWFjdC1tb2RhbC1ob29rJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICdjb21wb25lbnRzL2hlYWRlci9IZWFkZXInO1xyXG5pbXBvcnQgcmVxdWlyZUF1dGggZnJvbSAnaGVscGVycy9ob2MvcmVxdWlyZUF1dGgnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQVBJIGZyb20gJy4uLy4uL2NvbmZpZ3MvQVBJJztcclxuaW1wb3J0IHsgQnV0dG9uLCBVcGxvYWQsIG1lc3NhZ2UsIElucHV0LCBUYWJzLCBSYXRlIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IEZyaWVuZHNDb250ZXh0IH0gZnJvbSAnLi9zdG9yYWdlL0ZyaWVuZENvbnRleHQnXHJcbmltcG9ydCB7IHNldExvYWRpbmcsIHNldEZyaWVuZHMgfSBmcm9tICcuL2FjdGlvbnMnO1xyXG5cclxuZnVuY3Rpb24gRnJpZW5kcyAoeyBhdXRoLCBhdXRoU2VydmljZXMgfSkge1xyXG4gICAgY29uc3QgW3N0b3JhZ2UsIGRpc3BhdGNoXSA9IHVzZUNvbnRleHQoRnJpZW5kc0NvbnRleHQpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXRGcmllbmRzKCk7XHJcbiAgICB9LCBbXSlcclxuICAgIGNvbnN0IGdldEZyaWVuZHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgXCJvZmZzZXRcIjogMCxcclxuICAgICAgICAgICAgICAgIFwiZmlyc3RcIjogMTBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdXJsOiAnL2FjY291bnRzL2ZyaWVuZHNoaXAvZ2V0LWZyaWVuZHMnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChzZXRGcmllbmRzKGRhdGEpKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSA0MDMpIHtcclxuICAgICAgICAgICAgYXV0aFNlcnZpY2VzLnJlZnJlc2hUb2tlbigpO1xyXG4gICAgICAgICAgICBnZXRGcmllbmRzKCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zb2xlLmxvZyhzdG9yYWdlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZXF1aXJlQXV0aChGcmllbmRzKTsiXSwic291cmNlUm9vdCI6IiJ9