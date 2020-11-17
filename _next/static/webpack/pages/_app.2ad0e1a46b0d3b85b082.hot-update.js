webpackHotUpdate_N_E("pages/_app",{

/***/ "./helpers/middleware/reduxStoreMiddleware.js":
/*!****************************************************!*\
  !*** ./helpers/middleware/reduxStoreMiddleware.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var configs_API__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! configs/API */ "./configs/API.js");
/* harmony import */ var helpers_services_session__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! helpers/services/session */ "./helpers/services/session.js");
/* harmony import */ var _redux_reducers_authReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/reducers/authReducer */ "./redux/reducers/authReducer.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







function getRedirectTo() {
  if ( true && window.location) {
    return window.location;
  }

  return {};
}

var redirectToLogin = function redirectToLogin() {
  var redir = getRedirectTo();
  next_router__WEBPACK_IMPORTED_MODULE_6___default.a.replace("/login?r=".concat(redir.pathname + encodeURIComponent(redir.search)), '/login', {
    shallow: true
  });
  setLocalStorage({});
};

var getUserData = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(store) {
    var localstorage, request, data, status;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            localstorage = Object(helpers_services_session__WEBPACK_IMPORTED_MODULE_4__["extractSession"])();
            _context.next = 4;
            return Object(configs_API__WEBPACK_IMPORTED_MODULE_3__["default"])({
              method: 'get',
              url: '/accounts',
              headers: {
                'x-token': localstorage.token
              }
            });

          case 4:
            request = _context.sent;
            data = request.data, status = request.status;

            if (status === 200) {
              store.dispatch({
                type: _redux_reducers_authReducer__WEBPACK_IMPORTED_MODULE_5__["SET_USER_DATA"],
                payload: data
              });
              store.dispatch({
                type: _redux_reducers_authReducer__WEBPACK_IMPORTED_MODULE_5__["REFRESH_TOKEN"],
                payload: {
                  token: localstorage.token,
                  refreshToken: localstorage.refreshToken
                }
              });
              store.dispatch({
                type: _redux_reducers_authReducer__WEBPACK_IMPORTED_MODULE_5__["SET_AUTHORIZED"]
              });
            } else if (status === 403) {
              console.log('!!!!', store);
              store.dispatch({
                type: '@@auth/REFRESH_TOKEN',
                payload: getUserData
              });
            } // console.log('getUserData', data);


            return _context.abrupt("return", request);

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            console.log('getUserData', _context.t0);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function getUserData(_x) {
    return _ref.apply(this, arguments);
  };
}();

var refreshToken = /*#__PURE__*/function () {
  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(store, callback) {
    var localstorage, request, data, status;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            localstorage = Object(helpers_services_session__WEBPACK_IMPORTED_MODULE_4__["extractSession"])();
            _context2.next = 4;
            return Object(configs_API__WEBPACK_IMPORTED_MODULE_3__["default"])({
              method: 'post',
              url: '/accounts/refresh-token',
              data: {
                refreshToken: localstorage.refreshToken
              }
            });

          case 4:
            request = _context2.sent;
            data = request.data, status = request.status;
            console.log('refreshToken', request);

            if (!(status === 200)) {
              _context2.next = 13;
              break;
            }

            Object(helpers_services_session__WEBPACK_IMPORTED_MODULE_4__["saveSession"])(_objectSpread(_objectSpread({}, localstorage), data));
            store.dispatch({
              type: _redux_reducers_authReducer__WEBPACK_IMPORTED_MODULE_5__["REFRESH_TOKEN"],
              payload: data
            });

            if (callback) {
              callback();
            }

            _context2.next = 14;
            break;

          case 13:
            throw new Error();

          case 14:
            _context2.next = 20;
            break;

          case 16:
            _context2.prev = 16;
            _context2.t0 = _context2["catch"](0);
            redirectToLogin();
            console.error('refreshToken', _context2.t0);

          case 20:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 16]]);
  }));

  return function refreshToken(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

var reduxStorageMiddleware = function reduxStorageMiddleware(store) {
  return function (next) {
    return function (action) {
      if (action.type === '@@redux/INIT') {
        console.log('!! @@redux/INIT');
      }

      if (action.type === '@@auth/REFRESH_TOKEN') {
        console.log('auth/REFRESH_TOKEN', action);
        refreshToken(store, action.payload); // if (action.payload) action.payload(store);
      }

      if (action.type === '@@auth/GET_USER') {
        console.log('auth/GET_USER');
        getUserData(store);
      }

      return next(action);
    };
  };
};

/* harmony default export */ __webpack_exports__["default"] = (reduxStorageMiddleware);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy9taWRkbGV3YXJlL3JlZHV4U3RvcmVNaWRkbGV3YXJlLmpzIl0sIm5hbWVzIjpbImdldFJlZGlyZWN0VG8iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlZGlyZWN0VG9Mb2dpbiIsInJlZGlyIiwiUm91dGVyIiwicmVwbGFjZSIsInBhdGhuYW1lIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2VhcmNoIiwic2hhbGxvdyIsInNldExvY2FsU3RvcmFnZSIsImdldFVzZXJEYXRhIiwic3RvcmUiLCJsb2NhbHN0b3JhZ2UiLCJleHRyYWN0U2Vzc2lvbiIsIkFQSSIsIm1ldGhvZCIsInVybCIsImhlYWRlcnMiLCJ0b2tlbiIsInJlcXVlc3QiLCJkYXRhIiwic3RhdHVzIiwiZGlzcGF0Y2giLCJ0eXBlIiwiU0VUX1VTRVJfREFUQSIsInBheWxvYWQiLCJSRUZSRVNIX1RPS0VOIiwicmVmcmVzaFRva2VuIiwiU0VUX0FVVEhPUklaRUQiLCJjb25zb2xlIiwibG9nIiwiY2FsbGJhY2siLCJzYXZlU2Vzc2lvbiIsIkVycm9yIiwiZXJyb3IiLCJyZWR1eFN0b3JhZ2VNaWRkbGV3YXJlIiwibmV4dCIsImFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7O0FBRUEsU0FBU0EsYUFBVCxHQUF5QjtBQUN2QixNQUFJLFNBQWlDQyxNQUFNLENBQUNDLFFBQTVDLEVBQXNEO0FBQ3BELFdBQU9ELE1BQU0sQ0FBQ0MsUUFBZDtBQUNEOztBQUNELFNBQU8sRUFBUDtBQUNEOztBQUVELElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUM1QixNQUFNQyxLQUFLLEdBQUdKLGFBQWEsRUFBM0I7QUFDQUssb0RBQU0sQ0FBQ0MsT0FBUCxvQkFDY0YsS0FBSyxDQUFDRyxRQUFOLEdBQWlCQyxrQkFBa0IsQ0FBQ0osS0FBSyxDQUFDSyxNQUFQLENBRGpE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QUFjLGNBQWQ7O0FBN0JpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFaUCxZQUFZO0FBQUE7QUFBQTtBQUFBLEdBQWxCOztBQWlDQSxJQUFNUSxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLENBQUN4QixLQUFEO0FBQUEsU0FBVyxVQUFDeUIsSUFBRDtBQUFBLFdBQVUsVUFBQ0MsTUFBRCxFQUFZO0FBQzlELFVBQUlBLE1BQU0sQ0FBQ2QsSUFBUCxLQUFnQixjQUFwQixFQUFvQztBQUNsQ00sZUFBTyxDQUFDQyxHQUFSLENBQVksaUJBQVo7QUFDRDs7QUFDRCxVQUFJTyxNQUFNLENBQUNkLElBQVAsS0FBZ0Isc0JBQXBCLEVBQTRDO0FBQzFDTSxlQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWixFQUFrQ08sTUFBbEM7QUFDQVYsb0JBQVksQ0FBQ2hCLEtBQUQsRUFBUTBCLE1BQU0sQ0FBQ1osT0FBZixDQUFaLENBRjBDLENBRzFDO0FBQ0Q7O0FBQ0QsVUFBSVksTUFBTSxDQUFDZCxJQUFQLEtBQWdCLGlCQUFwQixFQUF1QztBQUNyQ00sZUFBTyxDQUFDQyxHQUFSLENBQVksZUFBWjtBQUNBcEIsbUJBQVcsQ0FBQ0MsS0FBRCxDQUFYO0FBQ0Q7O0FBQ0QsYUFBT3lCLElBQUksQ0FBQ0MsTUFBRCxDQUFYO0FBQ0QsS0FkeUM7QUFBQSxHQUFYO0FBQUEsQ0FBL0I7O0FBZ0JlRixxRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjJhZDBlMWE0NmIwZDNiODViMDgyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQVBJIGZyb20gJ2NvbmZpZ3MvQVBJJztcclxuaW1wb3J0IHsgZXh0cmFjdFNlc3Npb24gfSBmcm9tICdoZWxwZXJzL3NlcnZpY2VzL3Nlc3Npb24nO1xyXG5pbXBvcnQge1xyXG4gIFJFRlJFU0hfVE9LRU4sXHJcbiAgU0VUX0FVVEhPUklaRUQsXHJcbiAgU0VUX1VTRVJfREFUQSxcclxufSBmcm9tICcuLi8uLi9yZWR1eC9yZWR1Y2Vycy9hdXRoUmVkdWNlcic7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBzYXZlU2Vzc2lvbiB9IGZyb20gJ2hlbHBlcnMvc2VydmljZXMvc2Vzc2lvbic7XHJcblxyXG5mdW5jdGlvbiBnZXRSZWRpcmVjdFRvKCkge1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cubG9jYXRpb24pIHtcclxuICAgIHJldHVybiB3aW5kb3cubG9jYXRpb247XHJcbiAgfVxyXG4gIHJldHVybiB7fTtcclxufVxyXG5cclxuY29uc3QgcmVkaXJlY3RUb0xvZ2luID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJlZGlyID0gZ2V0UmVkaXJlY3RUbygpO1xyXG4gIFJvdXRlci5yZXBsYWNlKFxyXG4gICAgYC9sb2dpbj9yPSR7cmVkaXIucGF0aG5hbWUgKyBlbmNvZGVVUklDb21wb25lbnQocmVkaXIuc2VhcmNoKX1gLFxyXG4gICAgJy9sb2dpbicsXHJcbiAgICB7IHNoYWxsb3c6IHRydWUgfVxyXG4gICk7XHJcblxyXG4gIHNldExvY2FsU3RvcmFnZSh7fSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRVc2VyRGF0YSA9IGFzeW5jIChzdG9yZSkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBsb2NhbHN0b3JhZ2UgPSBleHRyYWN0U2Vzc2lvbigpO1xyXG4gICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgIHVybDogJy9hY2NvdW50cycsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAneC10b2tlbic6IGxvY2Fsc3RvcmFnZS50b2tlbixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG5cclxuICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICBzdG9yZS5kaXNwYXRjaCh7IHR5cGU6IFNFVF9VU0VSX0RBVEEsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICAgIHN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBSRUZSRVNIX1RPS0VOLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgIHRva2VuOiBsb2NhbHN0b3JhZ2UudG9rZW4sXHJcbiAgICAgICAgICByZWZyZXNoVG9rZW46IGxvY2Fsc3RvcmFnZS5yZWZyZXNoVG9rZW4sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIHN0b3JlLmRpc3BhdGNoKHsgdHlwZTogU0VUX0FVVEhPUklaRUQgfSk7XHJcbiAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gNDAzKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCchISEhJywgc3RvcmUpO1xyXG4gICAgICBzdG9yZS5kaXNwYXRjaCh7IHR5cGU6ICdAQGF1dGgvUkVGUkVTSF9UT0tFTicsIHBheWxvYWQ6IGdldFVzZXJEYXRhIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKCdnZXRVc2VyRGF0YScsIGRhdGEpO1xyXG4gICAgcmV0dXJuIHJlcXVlc3Q7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKCdnZXRVc2VyRGF0YScsIGVycm9yKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCByZWZyZXNoVG9rZW4gPSBhc3luYyAoc3RvcmUsIGNhbGxiYWNrKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGxvY2Fsc3RvcmFnZSA9IGV4dHJhY3RTZXNzaW9uKCk7XHJcbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy9hY2NvdW50cy9yZWZyZXNoLXRva2VuJyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHJlZnJlc2hUb2tlbjogbG9jYWxzdG9yYWdlLnJlZnJlc2hUb2tlbixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcbiAgICBjb25zb2xlLmxvZygncmVmcmVzaFRva2VuJywgcmVxdWVzdCk7XHJcblxyXG4gICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgIHNhdmVTZXNzaW9uKHtcclxuICAgICAgICAuLi5sb2NhbHN0b3JhZ2UsXHJcbiAgICAgICAgLi4uZGF0YSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzdG9yZS5kaXNwYXRjaCh7IHR5cGU6IFJFRlJFU0hfVE9LRU4sIHBheWxvYWQ6IGRhdGEgfSk7XHJcblxyXG4gICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmVkaXJlY3RUb0xvZ2luKCk7XHJcbiAgICBjb25zb2xlLmVycm9yKCdyZWZyZXNoVG9rZW4nLCBlcnJvcik7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgcmVkdXhTdG9yYWdlTWlkZGxld2FyZSA9IChzdG9yZSkgPT4gKG5leHQpID0+IChhY3Rpb24pID0+IHtcclxuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdAQHJlZHV4L0lOSVQnKSB7XHJcbiAgICBjb25zb2xlLmxvZygnISEgQEByZWR1eC9JTklUJyk7XHJcbiAgfVxyXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ0BAYXV0aC9SRUZSRVNIX1RPS0VOJykge1xyXG4gICAgY29uc29sZS5sb2coJ2F1dGgvUkVGUkVTSF9UT0tFTicsIGFjdGlvbik7XHJcbiAgICByZWZyZXNoVG9rZW4oc3RvcmUsIGFjdGlvbi5wYXlsb2FkKTtcclxuICAgIC8vIGlmIChhY3Rpb24ucGF5bG9hZCkgYWN0aW9uLnBheWxvYWQoc3RvcmUpO1xyXG4gIH1cclxuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdAQGF1dGgvR0VUX1VTRVInKSB7XHJcbiAgICBjb25zb2xlLmxvZygnYXV0aC9HRVRfVVNFUicpO1xyXG4gICAgZ2V0VXNlckRhdGEoc3RvcmUpO1xyXG4gIH1cclxuICByZXR1cm4gbmV4dChhY3Rpb24pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdXhTdG9yYWdlTWlkZGxld2FyZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==