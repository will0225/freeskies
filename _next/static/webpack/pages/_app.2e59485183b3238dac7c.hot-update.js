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
  console.log(store);

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
      console.log(store);
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
      store.dispatch({
        type: _redux_reducers_authReducer__WEBPACK_IMPORTED_MODULE_3__["SET_AUTHORIZED"]
      });

      if (callback) {
        callback();
      }
    } else {
      throw new Error();
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
    console.log(store);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy9taWRkbGV3YXJlL3JlZHV4U3RvcmVNaWRkbGV3YXJlLmpzIl0sIm5hbWVzIjpbImdldFJlZGlyZWN0VG8iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlZGlyZWN0VG9Mb2dpbiIsInJlZGlyIiwiUm91dGVyIiwicmVwbGFjZSIsInBhdGhuYW1lIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2VhcmNoIiwic2hhbGxvdyIsImdldFVzZXJEYXRhIiwic3RvcmUiLCJjb25zb2xlIiwibG9nIiwibG9jYWxzdG9yYWdlIiwiZXh0cmFjdFNlc3Npb24iLCJyZXF1ZXN0IiwiQVBJIiwibWV0aG9kIiwidXJsIiwiaGVhZGVycyIsInRva2VuIiwiZGF0YSIsInN0YXR1cyIsImRpc3BhdGNoIiwidHlwZSIsIlNFVF9VU0VSX0RBVEEiLCJwYXlsb2FkIiwiUkVGUkVTSF9UT0tFTiIsInJlZnJlc2hUb2tlbiIsIlNFVF9BVVRIT1JJWkVEIiwiZXJyb3IiLCJjYWxsYmFjayIsInNhdmVTZXNzaW9uIiwiRXJyb3IiLCJyZWR1eFN0b3JhZ2VNaWRkbGV3YXJlIiwibmV4dCIsImFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFLQTtBQUNBOztBQUVBLFNBQVNBLGFBQVQsR0FBeUI7QUFDdkIsTUFBSSxTQUFpQ0MsTUFBTSxDQUFDQyxRQUE1QyxFQUFzRDtBQUNwRCxXQUFPRCxNQUFNLENBQUNDLFFBQWQ7QUFDRDs7QUFDRCxTQUFPLEVBQVA7QUFDRDs7QUFFRCxNQUFNQyxlQUFlLEdBQUcsTUFBTTtBQUM1QixRQUFNQyxLQUFLLEdBQUdKLGFBQWEsRUFBM0I7QUFDQUssb0RBQU0sQ0FBQ0MsT0FBUCxlQUNTRixLQUFLLENBQUNHLFFBQU4sR0FBaUJDLGtCQUFrQixDQUFDSixLQUFLLENBQUNLLE1BQVAsQ0FENUMsR0FFRSxHQUZGLEVBR0U7QUFBRUMsV0FBTyxFQUFFO0FBQVgs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QUM5RCxNQUFJQSxNQUFNLENBQUNaLElBQVAsS0FBZ0IsY0FBcEIsRUFBb0M7QUFDbENiLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaO0FBQ0Q7O0FBQ0QsTUFBSXdCLE1BQU0sQ0FBQ1osSUFBUCxLQUFnQixzQkFBcEIsRUFBNEM7QUFDMUNiLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaLEVBQWtDd0IsTUFBbEM7QUFDQVIsZ0JBQVksQ0FBQ2xCLEtBQUQsRUFBUTBCLE1BQU0sQ0FBQ1YsT0FBZixDQUFaLENBRjBDLENBRzFDO0FBQ0Q7O0FBQ0QsTUFBSVUsTUFBTSxDQUFDWixJQUFQLEtBQWdCLGlCQUFwQixFQUF1QztBQUNyQ2IsV0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWjtBQUNBRCxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNBRCxlQUFXLENBQUNDLEtBQUQsQ0FBWDtBQUNEOztBQUNELFNBQU95QixJQUFJLENBQUNDLE1BQUQsQ0FBWDtBQUNELENBZkQ7O0FBaUJlRixxRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjJlNTk0ODUxODNiMzIzOGRhYzdjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQVBJIGZyb20gJ2NvbmZpZ3MvQVBJJztcclxuaW1wb3J0IHsgZXh0cmFjdFNlc3Npb24gfSBmcm9tICdoZWxwZXJzL3NlcnZpY2VzL3Nlc3Npb24nO1xyXG5pbXBvcnQge1xyXG4gIFJFRlJFU0hfVE9LRU4sXHJcbiAgU0VUX0FVVEhPUklaRUQsXHJcbiAgU0VUX1VTRVJfREFUQSxcclxufSBmcm9tICcuLi8uLi9yZWR1eC9yZWR1Y2Vycy9hdXRoUmVkdWNlcic7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBzYXZlU2Vzc2lvbiB9IGZyb20gJ2hlbHBlcnMvc2VydmljZXMvc2Vzc2lvbic7XHJcblxyXG5mdW5jdGlvbiBnZXRSZWRpcmVjdFRvKCkge1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cubG9jYXRpb24pIHtcclxuICAgIHJldHVybiB3aW5kb3cubG9jYXRpb247XHJcbiAgfVxyXG4gIHJldHVybiB7fTtcclxufVxyXG5cclxuY29uc3QgcmVkaXJlY3RUb0xvZ2luID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJlZGlyID0gZ2V0UmVkaXJlY3RUbygpO1xyXG4gIFJvdXRlci5yZXBsYWNlKFxyXG4gICAgYC8/cj0ke3JlZGlyLnBhdGhuYW1lICsgZW5jb2RlVVJJQ29tcG9uZW50KHJlZGlyLnNlYXJjaCl9YCxcclxuICAgICcvJyxcclxuICAgIHsgc2hhbGxvdzogdHJ1ZSB9XHJcbiAgKTtcclxuXHJcbiAgLy9zZXRMb2NhbFN0b3JhZ2Uoe30pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0VXNlckRhdGEgPSBhc3luYyAoc3RvcmUpID0+IHtjb25zb2xlLmxvZyhzdG9yZSk7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGxvY2Fsc3RvcmFnZSA9IGV4dHJhY3RTZXNzaW9uKCk7XHJcbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgdXJsOiAnL2FjY291bnRzJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICd4LXRva2VuJzogbG9jYWxzdG9yYWdlLnRva2VuLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcblxyXG4gICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7Y29uc29sZS5sb2coc3RvcmUpO1xyXG4gICAgICBzdG9yZS5kaXNwYXRjaCh7IHR5cGU6IFNFVF9VU0VSX0RBVEEsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICAgIHN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBSRUZSRVNIX1RPS0VOLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgIHRva2VuOiBsb2NhbHN0b3JhZ2UudG9rZW4sXHJcbiAgICAgICAgICByZWZyZXNoVG9rZW46IGxvY2Fsc3RvcmFnZS5yZWZyZXNoVG9rZW4sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIHN0b3JlLmRpc3BhdGNoKHsgdHlwZTogU0VUX0FVVEhPUklaRUQgfSk7XHJcbiAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gNDAzKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCchISEhJywgc3RvcmUpO1xyXG4gICAgICBzdG9yZS5kaXNwYXRjaCh7IHR5cGU6ICdAQGF1dGgvUkVGUkVTSF9UT0tFTicsIHBheWxvYWQ6IGdldFVzZXJEYXRhIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKCdnZXRVc2VyRGF0YScsIGRhdGEpO1xyXG4gICAgcmV0dXJuIHJlcXVlc3Q7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKCdnZXRVc2VyRGF0YScsIGVycm9yKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCByZWZyZXNoVG9rZW4gPSBhc3luYyAoc3RvcmUsIGNhbGxiYWNrKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGxvY2Fsc3RvcmFnZSA9IGV4dHJhY3RTZXNzaW9uKCk7XHJcbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy9hY2NvdW50cy9yZWZyZXNoLXRva2VuJyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHJlZnJlc2hUb2tlbjogbG9jYWxzdG9yYWdlLnJlZnJlc2hUb2tlbixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcbiAgICBjb25zb2xlLmxvZygncmVmcmVzaFRva2VuJywgcmVxdWVzdCk7XHJcblxyXG4gICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgIHNhdmVTZXNzaW9uKHtcclxuICAgICAgICAuLi5sb2NhbHN0b3JhZ2UsXHJcbiAgICAgICAgLi4uZGF0YSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzdG9yZS5kaXNwYXRjaCh7IHR5cGU6IFJFRlJFU0hfVE9LRU4sIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICAgIHN0b3JlLmRpc3BhdGNoKHsgdHlwZTogU0VUX0FVVEhPUklaRUQgfSk7XHJcbiAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZWRpcmVjdFRvTG9naW4oKTtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ3JlZnJlc2hUb2tlbicsIGVycm9yKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCByZWR1eFN0b3JhZ2VNaWRkbGV3YXJlID0gKHN0b3JlKSA9PiAobmV4dCkgPT4gKGFjdGlvbikgPT4ge1xyXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ0BAcmVkdXgvSU5JVCcpIHtcclxuICAgIGNvbnNvbGUubG9nKCchISBAQHJlZHV4L0lOSVQnKTtcclxuICB9XHJcbiAgaWYgKGFjdGlvbi50eXBlID09PSAnQEBhdXRoL1JFRlJFU0hfVE9LRU4nKSB7XHJcbiAgICBjb25zb2xlLmxvZygnYXV0aC9SRUZSRVNIX1RPS0VOJywgYWN0aW9uKTtcclxuICAgIHJlZnJlc2hUb2tlbihzdG9yZSwgYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgLy8gaWYgKGFjdGlvbi5wYXlsb2FkKSBhY3Rpb24ucGF5bG9hZChzdG9yZSk7XHJcbiAgfVxyXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ0BAYXV0aC9HRVRfVVNFUicpIHtcclxuICAgIGNvbnNvbGUubG9nKCdhdXRoL0dFVF9VU0VSJyk7XHJcbiAgICBjb25zb2xlLmxvZyhzdG9yZSk7XHJcbiAgICBnZXRVc2VyRGF0YShzdG9yZSk7XHJcbiAgfVxyXG4gIHJldHVybiBuZXh0KGFjdGlvbik7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1eFN0b3JhZ2VNaWRkbGV3YXJlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9