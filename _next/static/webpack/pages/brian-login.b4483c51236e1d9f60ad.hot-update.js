webpackHotUpdate_N_E("pages/brian-login",{

/***/ "./containers/Login/Login.js":
/*!***********************************!*\
  !*** ./containers/Login/Login.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var configs_API__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! configs/API */ "./configs/API.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var helpers_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! helpers/hooks/useLocalStorage */ "./helpers/hooks/useLocalStorage.js");
/* harmony import */ var _styles_login_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/login.module.css */ "./containers/Login/styles/login.module.css");
/* harmony import */ var _styles_login_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_login_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _storage_LoginContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./storage/LoginContext */ "./containers/Login/storage/LoginContext.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./actions */ "./containers/Login/actions/index.js");
/* harmony import */ var react_swipeable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-swipeable */ "./node_modules/react-swipeable/es/index.js");



var _jsxFileName = "D:\\Freeskies-development-\\containers\\Login\\Login.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





 // Hook

 // Styles


 // Actions

 //swipe button login


function Login() {
  _s();

  var _jsx, _jsx2;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      username = _useState[0],
      setUsername = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      password = _useState2[0],
      setPassword = _useState2[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_storage_LoginContext__WEBPACK_IMPORTED_MODULE_10__["LoginContext"]),
      storage = _useContext[0],
      dispatch = _useContext[1];

  var _useLocalStorage = Object(helpers_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_8__["default"])('storage', storage),
      _useLocalStorage2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useLocalStorage, 2),
      localstorage = _useLocalStorage2[0],
      setLocalStorage = _useLocalStorage2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(51),
      swipe = _useState3[0],
      setSwipe = _useState3[1];

  var handleClick = function handleClick(e) {
    e.preventDefault();
    router.push('/signup');
  };

  var handleLogin = function handleLogin(username, password) {
    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_11__["setLoading"])(true));
    Object(configs_API__WEBPACK_IMPORTED_MODULE_6__["default"])({
      method: 'post',
      url: '/accounts/login',
      data: {
        username: username,
        password: password
      }
    }).then(function (response) {
      var status = response.status,
          data = response.data;

      if (status === 200) {
        var dispatchData = Object(_actions__WEBPACK_IMPORTED_MODULE_11__["setAuthorization"])(data);
        dispatch(dispatchData);
        setLocalStorage(dispatchData.payload);
        setUsername('');
        setPassword('');
        setSwipe(50);
        antd__WEBPACK_IMPORTED_MODULE_5__["message"].success('Authentication successful');
        var path = location.pathname;
        console.log(path);
        var search = location.search;

        if (path === '/brian-login') {
          router.push('/timeline');
        } else {
          router.push(path);
        } //router.push('/timeline');

      } else {
        antd__WEBPACK_IMPORTED_MODULE_5__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
        setSwipe(50);
      }

      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_11__["setLoading"])(false));
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {}, [storage]);
  var userCache = false;

  if (localstorage.userData !== null) {
    userCache = localstorage.userData.username;
  }

  return __jsx("div", {
    className: "flex content-center w-full min-h-screen",
    style: {
      background: 'linear-gradient(90deg, rgba(101,207,232,1) 0%, rgba(64,159,208,1) 100%)'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "m-auto flex flex-col items-center",
    style: {
      width: 300
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }, userCache ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("h2", {
    style: {
      color: 'white',
      margin: 0,
      fontSize: 25,
      fontWeight: 'bolder'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, "Hello ", userCache), __jsx("span", {
    style: {
      color: 'white',
      marginBottom: 12
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, "Welcome back, login below")) : null, __jsx("div", {
    className: "w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }, __jsx("input", (_jsx = {
    className: "w-full text-lg bg-transparent py-2 text-white",
    value: username,
    onChange: function onChange(_ref) {
      var target = _ref.target;
      setUsername(target.value);
    }
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "className", _styles_login_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.input), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "placeholder", "Username"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 97,
    columnNumber: 13
  }), _jsx))), __jsx("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  }, __jsx("input", (_jsx2 = {
    type: "password",
    className: "w-full text-lg bg-transparent py-2 text-white",
    value: password,
    onChange: function onChange(_ref2) {
      var target = _ref2.target;
      setPassword(target.value);
    }
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "className", _styles_login_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.input), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "placeholder", "Password"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "__self", this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "__source", {
    fileName: _jsxFileName,
    lineNumber: 114,
    columnNumber: 13
  }), _jsx2)))), __jsx("p", {
    className: _styles_login_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.forgotPasswordLink,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 9
    }
  }, "Forgot your", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/forget-password",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: _styles_login_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.forgottenpassword,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }
  }, "Password?"))), __jsx("p", {
    className: _styles_login_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.createAccountLink,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 9
    }
  }, __jsx("strong", {
    onClick: handleClick,
    className: _styles_login_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.createAccountButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 49
    }
  }, "Create"), " your account."), __jsx(react_swipeable__WEBPACK_IMPORTED_MODULE_12__["Swipeable"], {
    onSwipedUp: function onSwipedUp(data) {
      console.log(data, swipe);

      if (data.absY > 10) {
        setSwipe(5);
        if (storage.loading) return;
        handleLogin(username, password);
      }
    },
    onSwiped: function onSwiped(data) {
      return console.log(data);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: _styles_login_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.swipeImageWrapper,
    style: {
      textAlign: 'center',
      cursor: 'pointer',
      marginTop: swipe
    },
    id: "swipe",
    onClick: function onClick() {
      setSwipe(5);
      if (storage.loading) return;
      handleLogin(username, password);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/swipe.png",
    style: {
      height: 40,
      display: 'inline'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 15
    }
  }))), __jsx("p", {
    className: _styles_login_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.swipeText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 11
    }
  }, storage.loading ? 'Loading...' : 'Swipe up to login')));
}

_s(Login, "EwxrSRHsuFAznB2F1U3QDpnlvIM=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"], helpers_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_8__["default"]];
});

_c = Login;

var _c;

$RefreshReg$(_c, "Login");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9Mb2dpbi9Mb2dpbi5qcyJdLCJuYW1lcyI6WyJMb2dpbiIsInVzZVN0YXRlIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VDb250ZXh0IiwiTG9naW5Db250ZXh0Iiwic3RvcmFnZSIsImRpc3BhdGNoIiwidXNlTG9jYWxTdG9yYWdlIiwibG9jYWxzdG9yYWdlIiwic2V0TG9jYWxTdG9yYWdlIiwic3dpcGUiLCJzZXRTd2lwZSIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsImhhbmRsZUxvZ2luIiwic2V0TG9hZGluZyIsIkFQSSIsIm1ldGhvZCIsInVybCIsImRhdGEiLCJ0aGVuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJkaXNwYXRjaERhdGEiLCJzZXRBdXRob3JpemF0aW9uIiwicGF5bG9hZCIsIm1lc3NhZ2UiLCJzdWNjZXNzIiwicGF0aCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJjb25zb2xlIiwibG9nIiwic2VhcmNoIiwiZXJyb3IiLCJ1c2VFZmZlY3QiLCJ1c2VyQ2FjaGUiLCJ1c2VyRGF0YSIsImJhY2tncm91bmQiLCJ3aWR0aCIsImNvbG9yIiwibWFyZ2luIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibWFyZ2luQm90dG9tIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJ0YXJnZXQiLCJ2YWx1ZSIsInN0eWxlcyIsImlucHV0IiwiZm9yZ290UGFzc3dvcmRMaW5rIiwiZm9yZ290dGVucGFzc3dvcmQiLCJjcmVhdGVBY2NvdW50TGluayIsImNyZWF0ZUFjY291bnRCdXR0b24iLCJhYnNZIiwibG9hZGluZyIsInN3aXBlSW1hZ2VXcmFwcGVyIiwidGV4dEFsaWduIiwiY3Vyc29yIiwibWFyZ2luVG9wIiwiaGVpZ2h0Iiwic3dpcGVUZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7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O0FBQUE7QUFBQTtBQUFBLEtBQWlDM0QsT0FBTyxDQUFDcUQsT0FBUixHQUFrQixZQUFsQixHQUFpQyxtQkFBbEUsQ0FwRUosQ0FERixDQURGO0FBMkVEOztHQXhJdUIvRCxLO1VBR1BPLHFELEVBRXlCSyxxRTs7O0tBTGxCWixLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2JyaWFuLWxvZ2luLmI0NDgzYzUxMjM2ZTFkOWY2MGFkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IEFQSSBmcm9tICdjb25maWdzL0FQSSc7XHJcbmltcG9ydCB7IFVzZXJPdXRsaW5lZCwgTG9ja091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5cclxuLy8gSG9va1xyXG5pbXBvcnQgdXNlTG9jYWxTdG9yYWdlIGZyb20gJ2hlbHBlcnMvaG9va3MvdXNlTG9jYWxTdG9yYWdlJztcclxuXHJcbi8vIFN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL2xvZ2luLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyBMb2dpbkNvbnRleHQgfSBmcm9tICcuL3N0b3JhZ2UvTG9naW5Db250ZXh0JztcclxuXHJcbi8vIEFjdGlvbnNcclxuaW1wb3J0IHsgc2V0TG9hZGluZywgc2V0QXV0aG9yaXphdGlvbiB9IGZyb20gJy4vYWN0aW9ucyc7XHJcblxyXG4vL3N3aXBlIGJ1dHRvbiBsb2dpblxyXG5pbXBvcnQgeyB1c2VTd2lwZWFibGUsIFN3aXBlYWJsZSB9IGZyb20gJ3JlYWN0LXN3aXBlYWJsZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtzdG9yYWdlLCBkaXNwYXRjaF0gPSB1c2VDb250ZXh0KExvZ2luQ29udGV4dCk7XHJcbiAgY29uc3QgW2xvY2Fsc3RvcmFnZSwgc2V0TG9jYWxTdG9yYWdlXSA9IHVzZUxvY2FsU3RvcmFnZSgnc3RvcmFnZScsIHN0b3JhZ2UpO1xyXG4gIGNvbnN0IFtzd2lwZSwgc2V0U3dpcGVdID0gdXNlU3RhdGUoNTEpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICByb3V0ZXIucHVzaCgnL3NpZ251cCcpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ2luID0gKHVzZXJuYW1lLCBwYXNzd29yZCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlKSk7XHJcbiAgICBBUEkoe1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL2FjY291bnRzL2xvZ2luJyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICB9LFxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgY29uc3QgeyBzdGF0dXMsIGRhdGEgfSA9IHJlc3BvbnNlO1xyXG5cclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgY29uc3QgZGlzcGF0Y2hEYXRhID0gc2V0QXV0aG9yaXphdGlvbihkYXRhKTtcclxuXHJcbiAgICAgICAgZGlzcGF0Y2goZGlzcGF0Y2hEYXRhKTtcclxuICAgICAgICBzZXRMb2NhbFN0b3JhZ2UoZGlzcGF0Y2hEYXRhLnBheWxvYWQpO1xyXG4gICAgICAgIHNldFVzZXJuYW1lKCcnKTtcclxuICAgICAgICBzZXRQYXNzd29yZCgnJyk7XHJcbiAgICAgICAgc2V0U3dpcGUoNTApO1xyXG4gICAgICAgIG1lc3NhZ2Uuc3VjY2VzcygnQXV0aGVudGljYXRpb24gc3VjY2Vzc2Z1bCcpO1xyXG4gICAgICAgIHZhciBwYXRoID0gbG9jYXRpb24ucGF0aG5hbWU7XHJcbiAgICAgICAgY29uc29sZS5sb2cocGF0aClcclxuICAgICAgICB2YXIgc2VhcmNoID0gbG9jYXRpb24uc2VhcmNoO1xyXG4gICAgICAgIGlmKHBhdGggPT09ICcvYnJpYW4tbG9naW4nKSB7XHJcbiAgICAgICAgICByb3V0ZXIucHVzaCgnL3RpbWVsaW5lJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJvdXRlci5wdXNoKHBhdGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL3JvdXRlci5wdXNoKCcvdGltZWxpbmUnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICAgIHNldFN3aXBlKDUwKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICB9LCBbc3RvcmFnZV0pO1xyXG4gIHZhciB1c2VyQ2FjaGUgPSBmYWxzZTtcclxuICBpZihsb2NhbHN0b3JhZ2UudXNlckRhdGEgIT09IG51bGwpIHtcclxuICAgIHVzZXJDYWNoZSA9IGxvY2Fsc3RvcmFnZS51c2VyRGF0YS51c2VybmFtZTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBjb250ZW50LWNlbnRlciB3LWZ1bGwgbWluLWgtc2NyZWVuXCIgc3R5bGU9e3sgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgxMDEsMjA3LDIzMiwxKSAwJSwgcmdiYSg2NCwxNTksMjA4LDEpIDEwMCUpJ319PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tYXV0byBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiIHN0eWxlPXt7IHdpZHRoOiAzMDAgfX0+XHJcbiAgICAgICAgey8qIDxpbWcgc3JjPVwiL2xvZ28ucG5nXCIgY2xhc3NOYW1lPVwibWItMzJcIiBzdHlsZT17eyBoZWlnaHQ6IDU1LCBtYXJnaW5Cb3R0b206ICc0cmVtJyB9fSAvPiAqL31cclxuICAgICAgICB7dXNlckNhY2hlPzw+XHJcbiAgICAgICAgPGgyIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCBtYXJnaW46IDAsIGZvbnRTaXplOiAyNSwgZm9udFdlaWdodDogJ2JvbGRlcicgfX0+SGVsbG8ge3VzZXJDYWNoZX08L2gyPlxyXG4gICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCBtYXJnaW5Cb3R0b206IDEyIH19PldlbGNvbWUgYmFjaywgbG9naW4gYmVsb3c8L3NwYW4+PC8+XHJcbiAgICAgICAgOm51bGx9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LWxnIGJnLXRyYW5zcGFyZW50IHB5LTIgdGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0VXNlcm5hbWUodGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1sZyBiZy10cmFuc3BhcmVudCBweS0yIHRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0IH0pID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFBhc3N3b3JkKHRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmZvcmdvdFBhc3N3b3JkTGlua30+Rm9yZ290IHlvdXIgXHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2ZvcmdldC1wYXNzd29yZFwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5mb3Jnb3R0ZW5wYXNzd29yZH0+UGFzc3dvcmQ/PC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5jcmVhdGVBY2NvdW50TGlua30+PHN0cm9uZyBvbkNsaWNrPXtoYW5kbGVDbGlja30gY2xhc3NOYW1lPXtzdHlsZXMuY3JlYXRlQWNjb3VudEJ1dHRvbn0+Q3JlYXRlPC9zdHJvbmc+IHlvdXIgYWNjb3VudC48L3A+XHJcbiAgICBcclxuICAgICAgICAgIDxTd2lwZWFibGUgb25Td2lwZWRVcD17KGRhdGEpID0+IHtjb25zb2xlLmxvZyhkYXRhLCBzd2lwZSk7XHJcbiAgICAgICAgICAgICAgaWYoZGF0YS5hYnNZID4gMTApIHtcclxuICAgICAgICAgICAgICAgIHNldFN3aXBlKDUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0b3JhZ2UubG9hZGluZykgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlTG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKTtcclxuICAgICAgICAgICAgICB9IFxyXG5cclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvblN3aXBlZD17KGRhdGEpID0+IGNvbnNvbGUubG9nKGRhdGEpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5zd2lwZUltYWdlV3JhcHBlcn0gc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgY3Vyc29yOiAncG9pbnRlcicsIG1hcmdpblRvcDogc3dpcGUgfX0gaWQ9XCJzd2lwZVwiIG9uQ2xpY2s9eygpPT4ge1xyXG4gICAgICAgICAgICAgIHNldFN3aXBlKDUpO1xyXG4gICAgICAgICAgICAgIGlmIChzdG9yYWdlLmxvYWRpbmcpIHJldHVybjtcclxuICAgICAgICAgICAgICBoYW5kbGVMb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpO1xyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zd2lwZS5wbmdcIiBzdHlsZT17eyBoZWlnaHQ6IDQwLCBkaXNwbGF5OiAnaW5saW5lJyB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvU3dpcGVhYmxlPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuc3dpcGVUZXh0fT57c3RvcmFnZS5sb2FkaW5nID8gJ0xvYWRpbmcuLi4nIDogJ1N3aXBlIHVwIHRvIGxvZ2luJ308L3A+XHJcbiAgICAgICAgey8qIDwvZGl2PiAqL31cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=