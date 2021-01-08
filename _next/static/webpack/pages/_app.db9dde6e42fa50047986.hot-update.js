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
  next_router__WEBPACK_IMPORTED_MODULE_6___default.a.replace("/?r=".concat(redir.pathname + encodeURIComponent(redir.search)), '/brian-login', {
    shallow: true
  }); //setLocalStorage({});
};

var getUserData = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(store) {
    var localstorage, request, data, status;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(store);
            _context.prev = 1;
            localstorage = Object(helpers_services_session__WEBPACK_IMPORTED_MODULE_4__["extractSession"])();
            _context.next = 5;
            return Object(configs_API__WEBPACK_IMPORTED_MODULE_3__["default"])({
              method: 'get',
              url: '/accounts',
              headers: {
                'x-token': localstorage.token
              }
            });

          case 5:
            request = _context.sent;
            data = request.data, status = request.status;

            if (status === 200) {
              console.log(store);
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

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](1);
            console.log('getUserData', _context.t0);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 11]]);
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
              _context2.next = 14;
              break;
            }

            Object(helpers_services_session__WEBPACK_IMPORTED_MODULE_4__["saveSession"])(_objectSpread(_objectSpread({}, localstorage), data));
            store.dispatch({
              type: _redux_reducers_authReducer__WEBPACK_IMPORTED_MODULE_5__["REFRESH_TOKEN"],
              payload: data
            });
            store.dispatch({
              type: _redux_reducers_authReducer__WEBPACK_IMPORTED_MODULE_5__["SET_AUTHORIZED"]
            });

            if (callback) {
              callback();
            }

            _context2.next = 15;
            break;

          case 14:
            throw new Error();

          case 15:
            _context2.next = 21;
            break;

          case 17:
            _context2.prev = 17;
            _context2.t0 = _context2["catch"](0);
            redirectToLogin();
            console.error('refreshToken', _context2.t0);

          case 21:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 17]]);
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
        console.log(store);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy9taWRkbGV3YXJlL3JlZHV4U3RvcmVNaWRkbGV3YXJlLmpzIl0sIm5hbWVzIjpbImdldFJlZGlyZWN0VG8iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlZGlyZWN0VG9Mb2dpbiIsInJlZGlyIiwiUm91dGVyIiwicmVwbGFjZSIsInBhdGhuYW1lIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2VhcmNoIiwic2hhbGxvdyIsImdldFVzZXJEYXRhIiwic3RvcmUiLCJjb25zb2xlIiwibG9nIiwibG9jYWxzdG9yYWdlIiwiZXh0cmFjdFNlc3Npb24iLCJBUEkiLCJtZXRob2QiLCJ1cmwiLCJoZWFkZXJzIiwidG9rZW4iLCJyZXF1ZXN0IiwiZGF0YSIsInN0YXR1cyIsImRpc3BhdGNoIiwidHlwZSIsIlNFVF9VU0VSX0RBVEEiLCJwYXlsb2FkIiwiUkVGUkVTSF9UT0tFTiIsInJlZnJlc2hUb2tlbiIsIlNFVF9BVVRIT1JJWkVEIiwiY2FsbGJhY2siLCJzYXZlU2Vzc2lvbiIsIkVycm9yIiwiZXJyb3IiLCJyZWR1eFN0b3JhZ2VNaWRkbGV3YXJlIiwibmV4dCIsImFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7O0FBRUEsU0FBU0EsYUFBVCxHQUF5QjtBQUN2QixNQUFJLFNBQWlDQyxNQUFNLENBQUNDLFFBQTVDLEVBQXNEO0FBQ3BELFdBQU9ELE1BQU0sQ0FBQ0MsUUFBZDtBQUNEOztBQUNELFNBQU8sRUFBUDtBQUNEOztBQUVELElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUM1QixNQUFNQyxLQUFLLEdBQUdKLGFBQWEsRUFBM0I7QUFDQUssb0RBQU0sQ0FBQ0MsT0FBUCxlQUNTRixLQUFLLENBQUNHLFFBQU4sR0FBaUJDLGtCQUFrQixDQUFDSixLQUFLLENBQUNLLE1BQVAsQ0FENUMsR0FFRSxjQUZGLEVBR0U7QUFB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QUEsa0JBeUJULElBQUlFLEtBQUosRUF6QlM7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQTRCakIvQiwyQkFBZTtBQUNmVSxtQkFBTyxDQUFDc0IsS0FBUixDQUFjLGNBQWQ7O0FBN0JpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFaTCxZQUFZO0FBQUE7QUFBQTtBQUFBLEdBQWxCOztBQWlDQSxJQUFNTSxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLENBQUN4QixLQUFEO0FBQUEsU0FBVyxVQUFDeUIsSUFBRDtBQUFBLFdBQVUsVUFBQ0MsTUFBRCxFQUFZO0FBQzlELFVBQUlBLE1BQU0sQ0FBQ1osSUFBUCxLQUFnQixjQUFwQixFQUFvQztBQUNsQ2IsZUFBTyxDQUFDQyxHQUFSLENBQVksaUJBQVo7QUFDRDs7QUFDRCxVQUFJd0IsTUFBTSxDQUFDWixJQUFQLEtBQWdCLHNCQUFwQixFQUE0QztBQUMxQ2IsZUFBTyxDQUFDQyxHQUFSLENBQVksb0JBQVosRUFBa0N3QixNQUFsQztBQUNBUixvQkFBWSxDQUFDbEIsS0FBRCxFQUFRMEIsTUFBTSxDQUFDVixPQUFmLENBQVosQ0FGMEMsQ0FHMUM7QUFDRDs7QUFDRCxVQUFJVSxNQUFNLENBQUNaLElBQVAsS0FBZ0IsaUJBQXBCLEVBQXVDO0FBQ3JDYixlQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaO0FBQ0FELGVBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0FELG1CQUFXLENBQUNDLEtBQUQsQ0FBWDtBQUNEOztBQUNELGFBQU95QixJQUFJLENBQUNDLE1BQUQsQ0FBWDtBQUNELEtBZnlDO0FBQUEsR0FBWDtBQUFBLENBQS9COztBQWlCZUYscUZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5kYjlkZGU2ZTQyZmE1MDA0Nzk4Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFQSSBmcm9tICdjb25maWdzL0FQSSc7XHJcbmltcG9ydCB7IGV4dHJhY3RTZXNzaW9uIH0gZnJvbSAnaGVscGVycy9zZXJ2aWNlcy9zZXNzaW9uJztcclxuaW1wb3J0IHtcclxuICBSRUZSRVNIX1RPS0VOLFxyXG4gIFNFVF9BVVRIT1JJWkVELFxyXG4gIFNFVF9VU0VSX0RBVEEsXHJcbn0gZnJvbSAnLi4vLi4vcmVkdXgvcmVkdWNlcnMvYXV0aFJlZHVjZXInO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgc2F2ZVNlc3Npb24gfSBmcm9tICdoZWxwZXJzL3NlcnZpY2VzL3Nlc3Npb24nO1xyXG5cclxuZnVuY3Rpb24gZ2V0UmVkaXJlY3RUbygpIHtcclxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmxvY2F0aW9uKSB7XHJcbiAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uO1xyXG4gIH1cclxuICByZXR1cm4ge307XHJcbn1cclxuXHJcbmNvbnN0IHJlZGlyZWN0VG9Mb2dpbiA9ICgpID0+IHtcclxuICBjb25zdCByZWRpciA9IGdldFJlZGlyZWN0VG8oKTtcclxuICBSb3V0ZXIucmVwbGFjZShcclxuICAgIGAvP3I9JHtyZWRpci5wYXRobmFtZSArIGVuY29kZVVSSUNvbXBvbmVudChyZWRpci5zZWFyY2gpfWAsXHJcbiAgICAnL2JyaWFuLWxvZ2luJyxcclxuICAgIHsgc2hhbGxvdzogdHJ1ZSB9XHJcbiAgKTtcclxuXHJcbiAgLy9zZXRMb2NhbFN0b3JhZ2Uoe30pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0VXNlckRhdGEgPSBhc3luYyAoc3RvcmUpID0+IHtjb25zb2xlLmxvZyhzdG9yZSk7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGxvY2Fsc3RvcmFnZSA9IGV4dHJhY3RTZXNzaW9uKCk7XHJcbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgdXJsOiAnL2FjY291bnRzJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICd4LXRva2VuJzogbG9jYWxzdG9yYWdlLnRva2VuLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcblxyXG4gICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7Y29uc29sZS5sb2coc3RvcmUpO1xyXG4gICAgICBzdG9yZS5kaXNwYXRjaCh7IHR5cGU6IFNFVF9VU0VSX0RBVEEsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICAgIHN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBSRUZSRVNIX1RPS0VOLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgIHRva2VuOiBsb2NhbHN0b3JhZ2UudG9rZW4sXHJcbiAgICAgICAgICByZWZyZXNoVG9rZW46IGxvY2Fsc3RvcmFnZS5yZWZyZXNoVG9rZW4sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIHN0b3JlLmRpc3BhdGNoKHsgdHlwZTogU0VUX0FVVEhPUklaRUQgfSk7XHJcbiAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gNDAzKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCchISEhJywgc3RvcmUpO1xyXG4gICAgICBzdG9yZS5kaXNwYXRjaCh7IHR5cGU6ICdAQGF1dGgvUkVGUkVTSF9UT0tFTicsIHBheWxvYWQ6IGdldFVzZXJEYXRhIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKCdnZXRVc2VyRGF0YScsIGRhdGEpO1xyXG4gICAgcmV0dXJuIHJlcXVlc3Q7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKCdnZXRVc2VyRGF0YScsIGVycm9yKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCByZWZyZXNoVG9rZW4gPSBhc3luYyAoc3RvcmUsIGNhbGxiYWNrKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGxvY2Fsc3RvcmFnZSA9IGV4dHJhY3RTZXNzaW9uKCk7XHJcbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy9hY2NvdW50cy9yZWZyZXNoLXRva2VuJyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHJlZnJlc2hUb2tlbjogbG9jYWxzdG9yYWdlLnJlZnJlc2hUb2tlbixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcbiAgICBjb25zb2xlLmxvZygncmVmcmVzaFRva2VuJywgcmVxdWVzdCk7XHJcblxyXG4gICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgIHNhdmVTZXNzaW9uKHtcclxuICAgICAgICAuLi5sb2NhbHN0b3JhZ2UsXHJcbiAgICAgICAgLi4uZGF0YSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzdG9yZS5kaXNwYXRjaCh7IHR5cGU6IFJFRlJFU0hfVE9LRU4sIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICAgIHN0b3JlLmRpc3BhdGNoKHsgdHlwZTogU0VUX0FVVEhPUklaRUQgfSk7XHJcbiAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZWRpcmVjdFRvTG9naW4oKTtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ3JlZnJlc2hUb2tlbicsIGVycm9yKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCByZWR1eFN0b3JhZ2VNaWRkbGV3YXJlID0gKHN0b3JlKSA9PiAobmV4dCkgPT4gKGFjdGlvbikgPT4ge1xyXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ0BAcmVkdXgvSU5JVCcpIHtcclxuICAgIGNvbnNvbGUubG9nKCchISBAQHJlZHV4L0lOSVQnKTtcclxuICB9XHJcbiAgaWYgKGFjdGlvbi50eXBlID09PSAnQEBhdXRoL1JFRlJFU0hfVE9LRU4nKSB7XHJcbiAgICBjb25zb2xlLmxvZygnYXV0aC9SRUZSRVNIX1RPS0VOJywgYWN0aW9uKTtcclxuICAgIHJlZnJlc2hUb2tlbihzdG9yZSwgYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgLy8gaWYgKGFjdGlvbi5wYXlsb2FkKSBhY3Rpb24ucGF5bG9hZChzdG9yZSk7XHJcbiAgfVxyXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ0BAYXV0aC9HRVRfVVNFUicpIHtcclxuICAgIGNvbnNvbGUubG9nKCdhdXRoL0dFVF9VU0VSJyk7XHJcbiAgICBjb25zb2xlLmxvZyhzdG9yZSk7XHJcbiAgICBnZXRVc2VyRGF0YShzdG9yZSk7XHJcbiAgfVxyXG4gIHJldHVybiBuZXh0KGFjdGlvbik7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1eFN0b3JhZ2VNaWRkbGV3YXJlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9