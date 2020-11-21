webpackHotUpdate_N_E("pages/index",{

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



var _jsxFileName = "E:\\freeskies_fe_code\\containers\\Login\\Login.js",
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
        router.push('/timeline');
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
      lineNumber: 76,
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
      lineNumber: 77,
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
      lineNumber: 80,
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
      lineNumber: 81,
      columnNumber: 9
    }
  }, "Welcome back, login below")) : null, __jsx("div", {
    className: "w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
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
      lineNumber: 84,
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
    lineNumber: 90,
    columnNumber: 13
  }), _jsx))), __jsx("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
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
    lineNumber: 107,
    columnNumber: 13
  }), _jsx2)))), __jsx("p", {
    className: _styles_login_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.forgotPasswordLink,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }
  }, "Forgot your", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/forget-password",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: _styles_login_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.forgottenpassword,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  }, "Password?"))), __jsx("p", {
    className: _styles_login_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.createAccountLink,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }
  }, __jsx("strong", {
    onClick: handleClick,
    className: _styles_login_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.createAccountButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
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
      lineNumber: 126,
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
      lineNumber: 136,
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
      lineNumber: 141,
      columnNumber: 15
    }
  }))), __jsx("p", {
    className: _styles_login_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.swipeText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9Mb2dpbi9Mb2dpbi5qcyJdLCJuYW1lcyI6WyJMb2dpbiIsInVzZVN0YXRlIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VDb250ZXh0IiwiTG9naW5Db250ZXh0Iiwic3RvcmFnZSIsImRpc3BhdGNoIiwidXNlTG9jYWxTdG9yYWdlIiwibG9jYWxzdG9yYWdlIiwic2V0TG9jYWxTdG9yYWdlIiwic3dpcGUiLCJzZXRTd2lwZSIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsImhhbmRsZUxvZ2luIiwic2V0TG9hZGluZyIsIkFQSSIsIm1ldGhvZCIsInVybCIsImRhdGEiLCJ0aGVuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJkaXNwYXRjaERhdGEiLCJzZXRBdXRob3JpemF0aW9uIiwicGF5bG9hZCIsIm1lc3NhZ2UiLCJzdWNjZXNzIiwiZXJyb3IiLCJ1c2VFZmZlY3QiLCJ1c2VyQ2FjaGUiLCJ1c2VyRGF0YSIsImJhY2tncm91bmQiLCJ3aWR0aCIsImNvbG9yIiwibWFyZ2luIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibWFyZ2luQm90dG9tIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJ0YXJnZXQiLCJ2YWx1ZSIsInN0eWxlcyIsImlucHV0IiwiZm9yZ290UGFzc3dvcmRMaW5rIiwiZm9yZ290dGVucGFzc3dvcmQiLCJjcmVhdGVBY2NvdW50TGluayIsImNyZWF0ZUFjY291bnRCdXR0b24iLCJjb25zb2xlIiwibG9nIiwiYWJzWSIsImxvYWRpbmciLCJzd2lwZUltYWdlV3JhcHBlciIsInRleHRBbGlnbiIsImN1cnNvciIsIm1hcmdpblRvcCIsImhlaWdodCIsInN3aXBlVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FB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QVBEO0FBUUEsWUFBUSxFQUFFLGtCQUFDc0IsSUFBRDtBQUFBLGFBQVU4QixPQUFPLENBQUNDLEdBQVIsQ0FBWS9CLElBQVosQ0FBVjtBQUFBLEtBUlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVVFO0FBQUcsYUFBUyxFQUFFd0IsK0RBQU0sQ0FBQ1UsaUJBQXJCO0FBQXdDLFNBQUssRUFBRTtBQUFFQyxlQUFTLEVBQUUsUUFBYjtBQUF1QkMsWUFBTSxFQUFFLFNBQS9CO0FBQTBDQyxlQUFTLEVBQUVoRDtBQUFyRCxLQUEvQztBQUE2RyxNQUFFLEVBQUMsT0FBaEg7QUFBd0gsV0FBTyxFQUFFLG1CQUFLO0FBQ3BJQyxjQUFRLENBQUMsQ0FBRCxDQUFSO0FBQ0EsVUFBSU4sT0FBTyxDQUFDaUQsT0FBWixFQUFxQjtBQUNyQnRDLGlCQUFXLENBQUNuQixRQUFELEVBQVdFLFFBQVgsQ0FBWDtBQUNELEtBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFO0FBQUssT0FBRyxFQUFDLFlBQVQ7QUFBc0IsU0FBSyxFQUFFO0FBQUU0RCxZQUFNLEVBQUUsRUFBVjtBQUFjbEIsYUFBTyxFQUFFO0FBQXZCLEtBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixDQVZGLENBakRKLEVBb0VJO0FBQUcsYUFBUyxFQUFFSSwrREFBTSxDQUFDZSxTQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWlDdkQsT0FBTyxDQUFDaUQsT0FBUixHQUFrQixZQUFsQixHQUFpQyxtQkFBbEUsQ0FwRUosQ0FERixDQURGO0FBMkVEOztHQWpJdUIzRCxLO1VBR1BPLHFELEVBRXlCSyxxRTs7O0tBTGxCWixLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjJjYmM3Yzg3NTgzN2FhOGNjMmI1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IEFQSSBmcm9tICdjb25maWdzL0FQSSc7XHJcbmltcG9ydCB7IFVzZXJPdXRsaW5lZCwgTG9ja091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5cclxuLy8gSG9va1xyXG5pbXBvcnQgdXNlTG9jYWxTdG9yYWdlIGZyb20gJ2hlbHBlcnMvaG9va3MvdXNlTG9jYWxTdG9yYWdlJztcclxuXHJcbi8vIFN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL2xvZ2luLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyBMb2dpbkNvbnRleHQgfSBmcm9tICcuL3N0b3JhZ2UvTG9naW5Db250ZXh0JztcclxuXHJcbi8vIEFjdGlvbnNcclxuaW1wb3J0IHsgc2V0TG9hZGluZywgc2V0QXV0aG9yaXphdGlvbiB9IGZyb20gJy4vYWN0aW9ucyc7XHJcblxyXG4vL3N3aXBlIGJ1dHRvbiBsb2dpblxyXG5pbXBvcnQgeyB1c2VTd2lwZWFibGUsIFN3aXBlYWJsZSB9IGZyb20gJ3JlYWN0LXN3aXBlYWJsZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtzdG9yYWdlLCBkaXNwYXRjaF0gPSB1c2VDb250ZXh0KExvZ2luQ29udGV4dCk7XHJcbiAgY29uc3QgW2xvY2Fsc3RvcmFnZSwgc2V0TG9jYWxTdG9yYWdlXSA9IHVzZUxvY2FsU3RvcmFnZSgnc3RvcmFnZScsIHN0b3JhZ2UpO1xyXG4gIGNvbnN0IFtzd2lwZSwgc2V0U3dpcGVdID0gdXNlU3RhdGUoNTEpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICByb3V0ZXIucHVzaCgnL3NpZ251cCcpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ2luID0gKHVzZXJuYW1lLCBwYXNzd29yZCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlKSk7XHJcbiAgICBBUEkoe1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL2FjY291bnRzL2xvZ2luJyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICB9LFxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgY29uc3QgeyBzdGF0dXMsIGRhdGEgfSA9IHJlc3BvbnNlO1xyXG5cclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgY29uc3QgZGlzcGF0Y2hEYXRhID0gc2V0QXV0aG9yaXphdGlvbihkYXRhKTtcclxuXHJcbiAgICAgICAgZGlzcGF0Y2goZGlzcGF0Y2hEYXRhKTtcclxuICAgICAgICBzZXRMb2NhbFN0b3JhZ2UoZGlzcGF0Y2hEYXRhLnBheWxvYWQpO1xyXG4gICAgICAgIHNldFVzZXJuYW1lKCcnKTtcclxuICAgICAgICBzZXRQYXNzd29yZCgnJyk7XHJcbiAgICAgICAgc2V0U3dpcGUoNTApO1xyXG4gICAgICAgIG1lc3NhZ2Uuc3VjY2VzcygnQXV0aGVudGljYXRpb24gc3VjY2Vzc2Z1bCcpO1xyXG5cclxuICAgICAgICByb3V0ZXIucHVzaCgnL3RpbWVsaW5lJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgICBzZXRTd2lwZSg1MCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgfSwgW3N0b3JhZ2VdKTtcclxuICB2YXIgdXNlckNhY2hlID0gZmFsc2U7XHJcbiAgaWYobG9jYWxzdG9yYWdlLnVzZXJEYXRhICE9PSBudWxsKSB7XHJcbiAgICB1c2VyQ2FjaGUgPSBsb2NhbHN0b3JhZ2UudXNlckRhdGEudXNlcm5hbWU7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggY29udGVudC1jZW50ZXIgdy1mdWxsIG1pbi1oLXNjcmVlblwiIHN0eWxlPXt7IGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMTAxLDIwNywyMzIsMSkgMCUsIHJnYmEoNjQsMTU5LDIwOCwxKSAxMDAlKSd9fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLWF1dG8gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIiBzdHlsZT17eyB3aWR0aDogMzAwIH19PlxyXG4gICAgICAgIHsvKiA8aW1nIHNyYz1cIi9sb2dvLnBuZ1wiIGNsYXNzTmFtZT1cIm1iLTMyXCIgc3R5bGU9e3sgaGVpZ2h0OiA1NSwgbWFyZ2luQm90dG9tOiAnNHJlbScgfX0gLz4gKi99XHJcbiAgICAgICAge3VzZXJDYWNoZT88PlxyXG4gICAgICAgIDxoMiBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgbWFyZ2luOiAwLCBmb250U2l6ZTogMjUsIGZvbnRXZWlnaHQ6ICdib2xkZXInIH19PkhlbGxvIHt1c2VyQ2FjaGV9PC9oMj5cclxuICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgbWFyZ2luQm90dG9tOiAxMiB9fT5XZWxjb21lIGJhY2ssIGxvZ2luIGJlbG93PC9zcGFuPjwvPlxyXG4gICAgICAgIDpudWxsfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1sZyBiZy10cmFuc3BhcmVudCBweS0yIHRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0IH0pID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFVzZXJuYW1lKHRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtbGcgYmctdHJhbnNwYXJlbnQgcHktMiB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldCB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRQYXNzd29yZCh0YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5mb3Jnb3RQYXNzd29yZExpbmt9PkZvcmdvdCB5b3VyIFxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9mb3JnZXQtcGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuZm9yZ290dGVucGFzc3dvcmR9PlBhc3N3b3JkPzwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuY3JlYXRlQWNjb3VudExpbmt9PjxzdHJvbmcgb25DbGljaz17aGFuZGxlQ2xpY2t9IGNsYXNzTmFtZT17c3R5bGVzLmNyZWF0ZUFjY291bnRCdXR0b259PkNyZWF0ZTwvc3Ryb25nPiB5b3VyIGFjY291bnQuPC9wPlxyXG4gICAgXHJcbiAgICAgICAgICA8U3dpcGVhYmxlIG9uU3dpcGVkVXA9eyhkYXRhKSA9PiB7Y29uc29sZS5sb2coZGF0YSwgc3dpcGUpO1xyXG4gICAgICAgICAgICAgIGlmKGRhdGEuYWJzWSA+IDEwKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRTd2lwZSg1KTtcclxuICAgICAgICAgICAgICAgIGlmIChzdG9yYWdlLmxvYWRpbmcpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGhhbmRsZUxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCk7XHJcbiAgICAgICAgICAgICAgfSBcclxuXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25Td2lwZWQ9eyhkYXRhKSA9PiBjb25zb2xlLmxvZyhkYXRhKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuc3dpcGVJbWFnZVdyYXBwZXJ9IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIGN1cnNvcjogJ3BvaW50ZXInLCBtYXJnaW5Ub3A6IHN3aXBlIH19IGlkPVwic3dpcGVcIiBvbkNsaWNrPXsoKT0+IHtcclxuICAgICAgICAgICAgICBzZXRTd2lwZSg1KTtcclxuICAgICAgICAgICAgICBpZiAoc3RvcmFnZS5sb2FkaW5nKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgaGFuZGxlTG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKTtcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3dpcGUucG5nXCIgc3R5bGU9e3sgaGVpZ2h0OiA0MCwgZGlzcGxheTogJ2lubGluZScgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L1N3aXBlYWJsZT5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnN3aXBlVGV4dH0+e3N0b3JhZ2UubG9hZGluZyA/ICdMb2FkaW5nLi4uJyA6ICdTd2lwZSB1cCB0byBsb2dpbid9PC9wPlxyXG4gICAgICAgIHsvKiA8L2Rpdj4gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9