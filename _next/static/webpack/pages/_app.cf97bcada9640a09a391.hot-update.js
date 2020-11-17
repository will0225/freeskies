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
/* harmony import */ var configs_API__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! configs/API */ "./configs/API.js");
/* harmony import */ var helpers_services_session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/services/session */ "./helpers/services/session.js");
/* harmony import */ var _redux_reducers_authReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/reducers/authReducer */ "./redux/reducers/authReducer.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







function getRedirectTo() {
  if ( true && window.location) {
    return window.location;
  }

  return {};
}

const redirectToLogin = () => {
  const redir = getRedirectTo();
  next_router__WEBPACK_IMPORTED_MODULE_4___default.a.replace("/?r=".concat(redir.pathname + encodeURIComponent(redir.search)), '/', {
    shallow: true
  }); //setLocalStorage({});
};

const getUserData = async store => {
  try {
    const localstorage = Object(helpers_services_session__WEBPACK_IMPORTED_MODULE_2__["extractSession"])();
    const request = await Object(configs_API__WEBPACK_IMPORTED_MODULE_1__["default"])({
      method: 'get',
      url: '/accounts',
      headers: {
        'x-token': localstorage.token
      }
    });
    const {
      data,
      status
    } = request;

    if (status === 200) {
      store.dispatch({
        type: _redux_reducers_authReducer__WEBPACK_IMPORTED_MODULE_3__["SET_USER_DATA"],
        payload: data
      });
      store.dispatch({
        type: _redux_reducers_authReducer__WEBPACK_IMPORTED_MODULE_3__["REFRESH_TOKEN"],
        payload: {
          token: localstorage.token,
          refreshToken: localstorage.refreshToken
        }
      });
      store.dispatch({
        type: _redux_reducers_authReducer__WEBPACK_IMPORTED_MODULE_3__["SET_AUTHORIZED"]
      });
    } else if (status === 403) {
      console.log('!!!!', store);
      store.dispatch({
        type: '@@auth/REFRESH_TOKEN',
        payload: getUserData
      });
    } // console.log('getUserData', data);


    return request;
  } catch (error) {
    console.log('getUserData', error);
  }
};

const refreshToken = async (store, callback) => {
  try {
    const localstorage = Object(helpers_services_session__WEBPACK_IMPORTED_MODULE_2__["extractSession"])();
    const request = await Object(configs_API__WEBPACK_IMPORTED_MODULE_1__["default"])({
      method: 'post',
      url: '/accounts/refresh-token',
      data: {
        refreshToken: localstorage.refreshToken
      }
    });
    const {
      data,
      status
    } = request;
    console.log('refreshToken', request);

    if (status === 200) {
      Object(helpers_services_session__WEBPACK_IMPORTED_MODULE_2__["saveSession"])(_objectSpread(_objectSpread({}, localstorage), data));
      store.dispatch({
        type: _redux_reducers_authReducer__WEBPACK_IMPORTED_MODULE_3__["REFRESH_TOKEN"],
        payload: data
      });

      if (callback) {
        callback();
      }
    } else {
      throw new Error();
      redirectToLogin();
    }
  } catch (error) {
    redirectToLogin();
    console.error('refreshToken', error);
  }
};

const reduxStorageMiddleware = store => next => action => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy9taWRkbGV3YXJlL3JlZHV4U3RvcmVNaWRkbGV3YXJlLmpzIl0sIm5hbWVzIjpbImdldFJlZGlyZWN0VG8iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlZGlyZWN0VG9Mb2dpbiIsInJlZGlyIiwiUm91dGVyIiwicmVwbGFjZSIsInBhdGhuYW1lIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2VhcmNoIiwic2hhbGxvdyIsImdldFVzZXJEYXRhIiwic3RvcmUiLCJsb2NhbHN0b3JhZ2UiLCJleHRyYWN0U2Vzc2lvbiIsInJlcXVlc3QiLCJBUEkiLCJtZXRob2QiLCJ1cmwiLCJoZWFkZXJzIiwidG9rZW4iLCJkYXRhIiwic3RhdHVzIiwiZGlzcGF0Y2giLCJ0eXBlIiwiU0VUX1VTRVJfREFUQSIsInBheWxvYWQiLCJSRUZSRVNIX1RPS0VOIiwicmVmcmVzaFRva2VuIiwiU0VUX0FVVEhPUklaRUQiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJjYWxsYmFjayIsInNhdmVTZXNzaW9uIiwiRXJyb3IiLCJyZWR1eFN0b3JhZ2VNaWRkbGV3YXJlIiwibmV4dCIsImFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFLQTtBQUNBOztBQUVBLFNBQVNBLGFBQVQsR0FBeUI7QUFDdkIsTUFBSSxTQUFpQ0MsTUFBTSxDQUFDQyxRQUE1QyxFQUFzRDtBQUNwRCxXQUFPRCxNQUFNLENBQUNDLFFBQWQ7QUFDRDs7QUFDRCxTQUFPLEVBQVA7QUFDRDs7QUFFRCxNQUFNQyxlQUFlLEdBQUcsTUFBTTtBQUM1QixRQUFNQyxLQUFLLEdBQUdKLGFBQWEsRUFBM0I7QUFDQUssb0RBQU0sQ0FBQ0MsT0FBUCxlQUNTRixLQUFLLENBQUNHLFFBQU4sR0FBaUJDLGtCQUFrQixDQUFDSixLQUFLLENBQUNLLE1BQVAsQ0FENUMsR0FFRSxHQUZGLEVBR0U7QUFBRUMsV0FBTyxFQUFFO0FBQVgs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QWdCLHNCQUFwQixFQUE0QztBQUMxQ00sV0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVosRUFBa0NPLE1BQWxDO0FBQ0FWLGdCQUFZLENBQUNoQixLQUFELEVBQVEwQixNQUFNLENBQUNaLE9BQWYsQ0FBWixDQUYwQyxDQUcxQztBQUNEOztBQUNELE1BQUlZLE1BQU0sQ0FBQ2QsSUFBUCxLQUFnQixpQkFBcEIsRUFBdUM7QUFDckNNLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7QUFDQXBCLGVBQVcsQ0FBQ0MsS0FBRCxDQUFYO0FBQ0Q7O0FBQ0QsU0FBT3lCLElBQUksQ0FBQ0MsTUFBRCxDQUFYO0FBQ0QsQ0FkRDs7QUFnQmVGLHFGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuY2Y5N2JjYWRhOTY0MGEwOWEzOTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBUEkgZnJvbSAnY29uZmlncy9BUEknO1xyXG5pbXBvcnQgeyBleHRyYWN0U2Vzc2lvbiB9IGZyb20gJ2hlbHBlcnMvc2VydmljZXMvc2Vzc2lvbic7XHJcbmltcG9ydCB7XHJcbiAgUkVGUkVTSF9UT0tFTixcclxuICBTRVRfQVVUSE9SSVpFRCxcclxuICBTRVRfVVNFUl9EQVRBLFxyXG59IGZyb20gJy4uLy4uL3JlZHV4L3JlZHVjZXJzL2F1dGhSZWR1Y2VyJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHNhdmVTZXNzaW9uIH0gZnJvbSAnaGVscGVycy9zZXJ2aWNlcy9zZXNzaW9uJztcclxuXHJcbmZ1bmN0aW9uIGdldFJlZGlyZWN0VG8oKSB7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5sb2NhdGlvbikge1xyXG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbjtcclxuICB9XHJcbiAgcmV0dXJuIHt9O1xyXG59XHJcblxyXG5jb25zdCByZWRpcmVjdFRvTG9naW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgcmVkaXIgPSBnZXRSZWRpcmVjdFRvKCk7XHJcbiAgUm91dGVyLnJlcGxhY2UoXHJcbiAgICBgLz9yPSR7cmVkaXIucGF0aG5hbWUgKyBlbmNvZGVVUklDb21wb25lbnQocmVkaXIuc2VhcmNoKX1gLFxyXG4gICAgJy8nLFxyXG4gICAgeyBzaGFsbG93OiB0cnVlIH1cclxuICApO1xyXG5cclxuICAvL3NldExvY2FsU3RvcmFnZSh7fSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRVc2VyRGF0YSA9IGFzeW5jIChzdG9yZSkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBsb2NhbHN0b3JhZ2UgPSBleHRyYWN0U2Vzc2lvbigpO1xyXG4gICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgIHVybDogJy9hY2NvdW50cycsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAneC10b2tlbic6IGxvY2Fsc3RvcmFnZS50b2tlbixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG5cclxuICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICBzdG9yZS5kaXNwYXRjaCh7IHR5cGU6IFNFVF9VU0VSX0RBVEEsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICAgIHN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBSRUZSRVNIX1RPS0VOLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgIHRva2VuOiBsb2NhbHN0b3JhZ2UudG9rZW4sXHJcbiAgICAgICAgICByZWZyZXNoVG9rZW46IGxvY2Fsc3RvcmFnZS5yZWZyZXNoVG9rZW4sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIHN0b3JlLmRpc3BhdGNoKHsgdHlwZTogU0VUX0FVVEhPUklaRUQgfSk7XHJcbiAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gNDAzKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCchISEhJywgc3RvcmUpO1xyXG4gICAgICBzdG9yZS5kaXNwYXRjaCh7IHR5cGU6ICdAQGF1dGgvUkVGUkVTSF9UT0tFTicsIHBheWxvYWQ6IGdldFVzZXJEYXRhIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKCdnZXRVc2VyRGF0YScsIGRhdGEpO1xyXG4gICAgcmV0dXJuIHJlcXVlc3Q7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKCdnZXRVc2VyRGF0YScsIGVycm9yKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCByZWZyZXNoVG9rZW4gPSBhc3luYyAoc3RvcmUsIGNhbGxiYWNrKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGxvY2Fsc3RvcmFnZSA9IGV4dHJhY3RTZXNzaW9uKCk7XHJcbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy9hY2NvdW50cy9yZWZyZXNoLXRva2VuJyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHJlZnJlc2hUb2tlbjogbG9jYWxzdG9yYWdlLnJlZnJlc2hUb2tlbixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcbiAgICBjb25zb2xlLmxvZygncmVmcmVzaFRva2VuJywgcmVxdWVzdCk7XHJcblxyXG4gICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgIHNhdmVTZXNzaW9uKHtcclxuICAgICAgICAuLi5sb2NhbHN0b3JhZ2UsXHJcbiAgICAgICAgLi4uZGF0YSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzdG9yZS5kaXNwYXRjaCh7IHR5cGU6IFJFRlJFU0hfVE9LRU4sIHBheWxvYWQ6IGRhdGEgfSk7XHJcblxyXG4gICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgcmVkaXJlY3RUb0xvZ2luKCk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJlZGlyZWN0VG9Mb2dpbigpO1xyXG4gICAgY29uc29sZS5lcnJvcigncmVmcmVzaFRva2VuJywgZXJyb3IpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IHJlZHV4U3RvcmFnZU1pZGRsZXdhcmUgPSAoc3RvcmUpID0+IChuZXh0KSA9PiAoYWN0aW9uKSA9PiB7XHJcbiAgaWYgKGFjdGlvbi50eXBlID09PSAnQEByZWR1eC9JTklUJykge1xyXG4gICAgY29uc29sZS5sb2coJyEhIEBAcmVkdXgvSU5JVCcpO1xyXG4gIH1cclxuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdAQGF1dGgvUkVGUkVTSF9UT0tFTicpIHtcclxuICAgIGNvbnNvbGUubG9nKCdhdXRoL1JFRlJFU0hfVE9LRU4nLCBhY3Rpb24pO1xyXG4gICAgcmVmcmVzaFRva2VuKHN0b3JlLCBhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAvLyBpZiAoYWN0aW9uLnBheWxvYWQpIGFjdGlvbi5wYXlsb2FkKHN0b3JlKTtcclxuICB9XHJcbiAgaWYgKGFjdGlvbi50eXBlID09PSAnQEBhdXRoL0dFVF9VU0VSJykge1xyXG4gICAgY29uc29sZS5sb2coJ2F1dGgvR0VUX1VTRVInKTtcclxuICAgIGdldFVzZXJEYXRhKHN0b3JlKTtcclxuICB9XHJcbiAgcmV0dXJuIG5leHQoYWN0aW9uKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHV4U3RvcmFnZU1pZGRsZXdhcmU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=