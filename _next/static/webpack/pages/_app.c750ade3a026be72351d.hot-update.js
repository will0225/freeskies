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
  });
  setLocalStorage({});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy9taWRkbGV3YXJlL3JlZHV4U3RvcmVNaWRkbGV3YXJlLmpzIl0sIm5hbWVzIjpbImdldFJlZGlyZWN0VG8iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlZGlyZWN0VG9Mb2dpbiIsInJlZGlyIiwiUm91dGVyIiwicmVwbGFjZSIsInBhdGhuYW1lIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2VhcmNoIiwic2hhbGxvdyIsInNldExvY2FsU3RvcmFnZSIsImdldFVzZXJEYXRhIiwic3RvcmUiLCJsb2NhbHN0b3JhZ2UiLCJleHRyYWN0U2Vzc2lvbiIsInJlcXVlc3QiLCJBUEkiLCJtZXRob2QiLCJ1cmwiLCJoZWFkZXJzIiwidG9rZW4iLCJkYXRhIiwic3RhdHVzIiwiZGlzcGF0Y2giLCJ0eXBlIiwiU0VUX1VTRVJfREFUQSIsInBheWxvYWQiLCJSRUZSRVNIX1RPS0VOIiwicmVmcmVzaFRva2VuIiwiU0VUX0FVVEhPUklaRUQiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJjYWxsYmFjayIsInNhdmVTZXNzaW9uIiwiRXJyb3IiLCJyZWR1eFN0b3JhZ2VNaWRkbGV3YXJlIiwibmV4dCIsImFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFLQTtBQUNBOztBQUVBLFNBQVNBLGFBQVQsR0FBeUI7QUFDdkIsTUFBSSxTQUFpQ0MsTUFBTSxDQUFDQyxRQUE1QyxFQUFzRDtBQUNwRCxXQUFPRCxNQUFNLENBQUNDLFFBQWQ7QUFDRDs7QUFDRCxTQUFPLEVBQVA7QUFDRDs7QUFFRCxNQUFNQyxlQUFlLEdBQUcsTUFBTTtBQUM1QixRQUFNQyxLQUFLLEdBQUdKLGFBQWEsRUFBM0I7QUFDQUssb0RBQU0sQ0FBQ0MsT0FBUCxlQUNTRixLQUFLLENBQUNHLFFBQU4sR0FBaUJDLGtCQUFrQixDQUFDSixLQUFLLENBQUNLLE1BQVAsQ0FENUMsR0FFRSxHQUZGLEVBR0U7QUFB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Q0Q7O0FBQ0QsTUFBSU8sTUFBTSxDQUFDZCxJQUFQLEtBQWdCLHNCQUFwQixFQUE0QztBQUMxQ00sV0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVosRUFBa0NPLE1BQWxDO0FBQ0FWLGdCQUFZLENBQUNoQixLQUFELEVBQVEwQixNQUFNLENBQUNaLE9BQWYsQ0FBWixDQUYwQyxDQUcxQztBQUNEOztBQUNELE1BQUlZLE1BQU0sQ0FBQ2QsSUFBUCxLQUFnQixpQkFBcEIsRUFBdUM7QUFDckNNLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7QUFDQXBCLGVBQVcsQ0FBQ0MsS0FBRCxDQUFYO0FBQ0Q7O0FBQ0QsU0FBT3lCLElBQUksQ0FBQ0MsTUFBRCxDQUFYO0FBQ0QsQ0FkRDs7QUFnQmVGLHFGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYzc1MGFkZTNhMDI2YmU3MjM1MWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBUEkgZnJvbSAnY29uZmlncy9BUEknO1xyXG5pbXBvcnQgeyBleHRyYWN0U2Vzc2lvbiB9IGZyb20gJ2hlbHBlcnMvc2VydmljZXMvc2Vzc2lvbic7XHJcbmltcG9ydCB7XHJcbiAgUkVGUkVTSF9UT0tFTixcclxuICBTRVRfQVVUSE9SSVpFRCxcclxuICBTRVRfVVNFUl9EQVRBLFxyXG59IGZyb20gJy4uLy4uL3JlZHV4L3JlZHVjZXJzL2F1dGhSZWR1Y2VyJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHNhdmVTZXNzaW9uIH0gZnJvbSAnaGVscGVycy9zZXJ2aWNlcy9zZXNzaW9uJztcclxuXHJcbmZ1bmN0aW9uIGdldFJlZGlyZWN0VG8oKSB7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5sb2NhdGlvbikge1xyXG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbjtcclxuICB9XHJcbiAgcmV0dXJuIHt9O1xyXG59XHJcblxyXG5jb25zdCByZWRpcmVjdFRvTG9naW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgcmVkaXIgPSBnZXRSZWRpcmVjdFRvKCk7XHJcbiAgUm91dGVyLnJlcGxhY2UoXHJcbiAgICBgLz9yPSR7cmVkaXIucGF0aG5hbWUgKyBlbmNvZGVVUklDb21wb25lbnQocmVkaXIuc2VhcmNoKX1gLFxyXG4gICAgJy8nLFxyXG4gICAgeyBzaGFsbG93OiB0cnVlIH1cclxuICApO1xyXG5cclxuICBzZXRMb2NhbFN0b3JhZ2Uoe30pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0VXNlckRhdGEgPSBhc3luYyAoc3RvcmUpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgbG9jYWxzdG9yYWdlID0gZXh0cmFjdFNlc3Npb24oKTtcclxuICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICB1cmw6ICcvYWNjb3VudHMnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ3gtdG9rZW4nOiBsb2NhbHN0b3JhZ2UudG9rZW4sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuXHJcbiAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiBTRVRfVVNFUl9EQVRBLCBwYXlsb2FkOiBkYXRhIH0pO1xyXG4gICAgICBzdG9yZS5kaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogUkVGUkVTSF9UT0tFTixcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICB0b2tlbjogbG9jYWxzdG9yYWdlLnRva2VuLFxyXG4gICAgICAgICAgcmVmcmVzaFRva2VuOiBsb2NhbHN0b3JhZ2UucmVmcmVzaFRva2VuLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBzdG9yZS5kaXNwYXRjaCh7IHR5cGU6IFNFVF9BVVRIT1JJWkVEIH0pO1xyXG4gICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IDQwMykge1xyXG4gICAgICBjb25zb2xlLmxvZygnISEhIScsIHN0b3JlKTtcclxuICAgICAgc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiAnQEBhdXRoL1JFRlJFU0hfVE9LRU4nLCBwYXlsb2FkOiBnZXRVc2VyRGF0YSB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZygnZ2V0VXNlckRhdGEnLCBkYXRhKTtcclxuICAgIHJldHVybiByZXF1ZXN0O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZygnZ2V0VXNlckRhdGEnLCBlcnJvcik7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgcmVmcmVzaFRva2VuID0gYXN5bmMgKHN0b3JlLCBjYWxsYmFjaykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBsb2NhbHN0b3JhZ2UgPSBleHRyYWN0U2Vzc2lvbigpO1xyXG4gICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvYWNjb3VudHMvcmVmcmVzaC10b2tlbicsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICByZWZyZXNoVG9rZW46IGxvY2Fsc3RvcmFnZS5yZWZyZXNoVG9rZW4sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG4gICAgY29uc29sZS5sb2coJ3JlZnJlc2hUb2tlbicsIHJlcXVlc3QpO1xyXG5cclxuICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICBzYXZlU2Vzc2lvbih7XHJcbiAgICAgICAgLi4ubG9jYWxzdG9yYWdlLFxyXG4gICAgICAgIC4uLmRhdGEsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiBSRUZSRVNIX1RPS0VOLCBwYXlsb2FkOiBkYXRhIH0pO1xyXG5cclxuICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgIHJlZGlyZWN0VG9Mb2dpbigpO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZWRpcmVjdFRvTG9naW4oKTtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ3JlZnJlc2hUb2tlbicsIGVycm9yKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCByZWR1eFN0b3JhZ2VNaWRkbGV3YXJlID0gKHN0b3JlKSA9PiAobmV4dCkgPT4gKGFjdGlvbikgPT4ge1xyXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ0BAcmVkdXgvSU5JVCcpIHtcclxuICAgIGNvbnNvbGUubG9nKCchISBAQHJlZHV4L0lOSVQnKTtcclxuICB9XHJcbiAgaWYgKGFjdGlvbi50eXBlID09PSAnQEBhdXRoL1JFRlJFU0hfVE9LRU4nKSB7XHJcbiAgICBjb25zb2xlLmxvZygnYXV0aC9SRUZSRVNIX1RPS0VOJywgYWN0aW9uKTtcclxuICAgIHJlZnJlc2hUb2tlbihzdG9yZSwgYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgLy8gaWYgKGFjdGlvbi5wYXlsb2FkKSBhY3Rpb24ucGF5bG9hZChzdG9yZSk7XHJcbiAgfVxyXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ0BAYXV0aC9HRVRfVVNFUicpIHtcclxuICAgIGNvbnNvbGUubG9nKCdhdXRoL0dFVF9VU0VSJyk7XHJcbiAgICBnZXRVc2VyRGF0YShzdG9yZSk7XHJcbiAgfVxyXG4gIHJldHVybiBuZXh0KGFjdGlvbik7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1eFN0b3JhZ2VNaWRkbGV3YXJlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9