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
      redirectToLogin();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy9taWRkbGV3YXJlL3JlZHV4U3RvcmVNaWRkbGV3YXJlLmpzIl0sIm5hbWVzIjpbImdldFJlZGlyZWN0VG8iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlZGlyZWN0VG9Mb2dpbiIsInJlZGlyIiwiUm91dGVyIiwicmVwbGFjZSIsInBhdGhuYW1lIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2VhcmNoIiwic2hhbGxvdyIsImdldFVzZXJEYXRhIiwic3RvcmUiLCJsb2NhbHN0b3JhZ2UiLCJleHRyYWN0U2Vzc2lvbiIsInJlcXVlc3QiLCJBUEkiLCJtZXRob2QiLCJ1cmwiLCJoZWFkZXJzIiwidG9rZW4iLCJkYXRhIiwic3RhdHVzIiwiZGlzcGF0Y2giLCJ0eXBlIiwiU0VUX1VTRVJfREFUQSIsInBheWxvYWQiLCJSRUZSRVNIX1RPS0VOIiwicmVmcmVzaFRva2VuIiwiU0VUX0FVVEhPUklaRUQiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJjYWxsYmFjayIsInNhdmVTZXNzaW9uIiwiRXJyb3IiLCJyZWR1eFN0b3JhZ2VNaWRkbGV3YXJlIiwibmV4dCIsImFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFLQTtBQUNBOztBQUVBLFNBQVNBLGFBQVQsR0FBeUI7QUFDdkIsTUFBSSxTQUFpQ0MsTUFBTSxDQUFDQyxRQUE1QyxFQUFzRDtBQUNwRCxXQUFPRCxNQUFNLENBQUNDLFFBQWQ7QUFDRDs7QUFDRCxTQUFPLEVBQVA7QUFDRDs7QUFFRCxNQUFNQyxlQUFlLEdBQUcsTUFBTTtBQUM1QixRQUFNQyxLQUFLLEdBQUdKLGFBQWEsRUFBM0I7QUFDQUssb0RBQU0sQ0FBQ0MsT0FBUCxlQUNTRixLQUFLLENBQUNHLFFBQU4sR0FBaUJDLGtCQUFrQixDQUFDSixLQUFLLENBQUNLLE1BQVAsQ0FENUMsR0FFRSxHQUZGLEVBR0U7QUFBRUMsV0FBTyxFQUFFO0FBQVgs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Z0Isc0JBQXBCLEVBQTRDO0FBQzFDTSxXQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWixFQUFrQ08sTUFBbEM7QUFDQVYsZ0JBQVksQ0FBQ2hCLEtBQUQsRUFBUTBCLE1BQU0sQ0FBQ1osT0FBZixDQUFaLENBRjBDLENBRzFDO0FBQ0Q7O0FBQ0QsTUFBSVksTUFBTSxDQUFDZCxJQUFQLEtBQWdCLGlCQUFwQixFQUF1QztBQUNyQ00sV0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWjtBQUNBcEIsZUFBVyxDQUFDQyxLQUFELENBQVg7QUFDRDs7QUFDRCxTQUFPeUIsSUFBSSxDQUFDQyxNQUFELENBQVg7QUFDRCxDQWREOztBQWdCZUYscUZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jMmI3YzVkN2M2YTFkNWY4MGMxOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFQSSBmcm9tICdjb25maWdzL0FQSSc7XHJcbmltcG9ydCB7IGV4dHJhY3RTZXNzaW9uIH0gZnJvbSAnaGVscGVycy9zZXJ2aWNlcy9zZXNzaW9uJztcclxuaW1wb3J0IHtcclxuICBSRUZSRVNIX1RPS0VOLFxyXG4gIFNFVF9BVVRIT1JJWkVELFxyXG4gIFNFVF9VU0VSX0RBVEEsXHJcbn0gZnJvbSAnLi4vLi4vcmVkdXgvcmVkdWNlcnMvYXV0aFJlZHVjZXInO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgc2F2ZVNlc3Npb24gfSBmcm9tICdoZWxwZXJzL3NlcnZpY2VzL3Nlc3Npb24nO1xyXG5cclxuZnVuY3Rpb24gZ2V0UmVkaXJlY3RUbygpIHtcclxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmxvY2F0aW9uKSB7XHJcbiAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uO1xyXG4gIH1cclxuICByZXR1cm4ge307XHJcbn1cclxuXHJcbmNvbnN0IHJlZGlyZWN0VG9Mb2dpbiA9ICgpID0+IHtcclxuICBjb25zdCByZWRpciA9IGdldFJlZGlyZWN0VG8oKTtcclxuICBSb3V0ZXIucmVwbGFjZShcclxuICAgIGAvP3I9JHtyZWRpci5wYXRobmFtZSArIGVuY29kZVVSSUNvbXBvbmVudChyZWRpci5zZWFyY2gpfWAsXHJcbiAgICAnLycsXHJcbiAgICB7IHNoYWxsb3c6IHRydWUgfVxyXG4gICk7XHJcblxyXG4gIC8vc2V0TG9jYWxTdG9yYWdlKHt9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldFVzZXJEYXRhID0gYXN5bmMgKHN0b3JlKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGxvY2Fsc3RvcmFnZSA9IGV4dHJhY3RTZXNzaW9uKCk7XHJcbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgdXJsOiAnL2FjY291bnRzJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICd4LXRva2VuJzogbG9jYWxzdG9yYWdlLnRva2VuLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcblxyXG4gICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgIHN0b3JlLmRpc3BhdGNoKHsgdHlwZTogU0VUX1VTRVJfREFUQSwgcGF5bG9hZDogZGF0YSB9KTtcclxuICAgICAgc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IFJFRlJFU0hfVE9LRU4sXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgdG9rZW46IGxvY2Fsc3RvcmFnZS50b2tlbixcclxuICAgICAgICAgIHJlZnJlc2hUb2tlbjogbG9jYWxzdG9yYWdlLnJlZnJlc2hUb2tlbixcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgICAgc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiBTRVRfQVVUSE9SSVpFRCB9KTtcclxuICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSA0MDMpIHtcclxuICAgICAgY29uc29sZS5sb2coJyEhISEnLCBzdG9yZSk7XHJcbiAgICAgIHN0b3JlLmRpc3BhdGNoKHsgdHlwZTogJ0BAYXV0aC9SRUZSRVNIX1RPS0VOJywgcGF5bG9hZDogZ2V0VXNlckRhdGEgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coJ2dldFVzZXJEYXRhJywgZGF0YSk7XHJcbiAgICByZXR1cm4gcmVxdWVzdDtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coJ2dldFVzZXJEYXRhJywgZXJyb3IpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IHJlZnJlc2hUb2tlbiA9IGFzeW5jIChzdG9yZSwgY2FsbGJhY2spID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgbG9jYWxzdG9yYWdlID0gZXh0cmFjdFNlc3Npb24oKTtcclxuICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL2FjY291bnRzL3JlZnJlc2gtdG9rZW4nLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcmVmcmVzaFRva2VuOiBsb2NhbHN0b3JhZ2UucmVmcmVzaFRva2VuLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuICAgIGNvbnNvbGUubG9nKCdyZWZyZXNoVG9rZW4nLCByZXF1ZXN0KTtcclxuXHJcbiAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgc2F2ZVNlc3Npb24oe1xyXG4gICAgICAgIC4uLmxvY2Fsc3RvcmFnZSxcclxuICAgICAgICAuLi5kYXRhLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHN0b3JlLmRpc3BhdGNoKHsgdHlwZTogUkVGUkVTSF9UT0tFTiwgcGF5bG9hZDogZGF0YSB9KTtcclxuXHJcbiAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlZGlyZWN0VG9Mb2dpbigpO1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJlZGlyZWN0VG9Mb2dpbigpO1xyXG4gICAgY29uc29sZS5lcnJvcigncmVmcmVzaFRva2VuJywgZXJyb3IpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IHJlZHV4U3RvcmFnZU1pZGRsZXdhcmUgPSAoc3RvcmUpID0+IChuZXh0KSA9PiAoYWN0aW9uKSA9PiB7XHJcbiAgaWYgKGFjdGlvbi50eXBlID09PSAnQEByZWR1eC9JTklUJykge1xyXG4gICAgY29uc29sZS5sb2coJyEhIEBAcmVkdXgvSU5JVCcpO1xyXG4gIH1cclxuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdAQGF1dGgvUkVGUkVTSF9UT0tFTicpIHtcclxuICAgIGNvbnNvbGUubG9nKCdhdXRoL1JFRlJFU0hfVE9LRU4nLCBhY3Rpb24pO1xyXG4gICAgcmVmcmVzaFRva2VuKHN0b3JlLCBhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAvLyBpZiAoYWN0aW9uLnBheWxvYWQpIGFjdGlvbi5wYXlsb2FkKHN0b3JlKTtcclxuICB9XHJcbiAgaWYgKGFjdGlvbi50eXBlID09PSAnQEBhdXRoL0dFVF9VU0VSJykge1xyXG4gICAgY29uc29sZS5sb2coJ2F1dGgvR0VUX1VTRVInKTtcclxuICAgIGdldFVzZXJEYXRhKHN0b3JlKTtcclxuICB9XHJcbiAgcmV0dXJuIG5leHQoYWN0aW9uKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHV4U3RvcmFnZU1pZGRsZXdhcmU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=