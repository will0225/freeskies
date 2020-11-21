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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var configs_API__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! configs/API */ "./configs/API.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var helpers_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! helpers/hooks/useLocalStorage */ "./helpers/hooks/useLocalStorage.js");
/* harmony import */ var _styles_login_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/login.module.css */ "./containers/Login/styles/login.module.css");
/* harmony import */ var _styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _storage_LoginContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./storage/LoginContext */ "./containers/Login/storage/LoginContext.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./actions */ "./containers/Login/actions/index.js");
/* harmony import */ var react_swipeable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-swipeable */ "./node_modules/react-swipeable/es/index.js");
var _jsxFileName = "E:\\freeskies_fe_code\\containers\\Login\\Login.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





 // Hook

 // Styles


 // Actions

 //swipe button login


function Login() {
  _s();

  const {
    0: username,
    1: setUsername
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: password,
    1: setPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    0: storage,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_storage_LoginContext__WEBPACK_IMPORTED_MODULE_8__["LoginContext"]);
  const [localstorage, setLocalStorage] = Object(helpers_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_6__["default"])('storage', storage);
  const {
    0: swipe,
    1: setSwipe
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(51);

  const handleClick = e => {
    e.preventDefault();
    router.push('/signup');
  };

  const handleLogin = (username, password) => {
    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_9__["setLoading"])(true));
    Object(configs_API__WEBPACK_IMPORTED_MODULE_4__["default"])({
      method: 'post',
      url: '/accounts/login',
      data: {
        username,
        password
      }
    }).then(response => {
      const {
        status,
        data
      } = response;

      if (status === 200) {
        const dispatchData = Object(_actions__WEBPACK_IMPORTED_MODULE_9__["setAuthorization"])(data);
        dispatch(dispatchData);
        setLocalStorage(dispatchData.payload);
        setUsername('');
        setPassword('');
        setSwipe(50);
        antd__WEBPACK_IMPORTED_MODULE_3__["message"].success('Authentication successful');
        router.push('/timeline');
      } else {
        antd__WEBPACK_IMPORTED_MODULE_3__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
        setSwipe(50);
      }

      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_9__["setLoading"])(false));
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {}, [storage]);
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
  }, userCache ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
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
  }, __jsx("input", {
    className: "w-full text-lg bg-transparent py-2 text-white",
    value: username,
    onChange: ({
      target
    }) => {
      setUsername(target.value);
    },
    className: _styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.input,
    placeholder: "Username",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  })), __jsx("div", {
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
  }, __jsx("input", {
    type: "password",
    className: "w-full text-lg bg-transparent py-2 text-white",
    value: password,
    onChange: ({
      target
    }) => {
      setPassword(target.value);
    },
    className: _styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.input,
    placeholder: "Password",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }))), __jsx("p", {
    className: _styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.forgotPasswordLink,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }
  }, "Forgot your", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/forget-password",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: _styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.forgottenpassword,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  }, "Password?"))), __jsx("p", {
    className: _styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.createAccountLink,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }
  }, __jsx("strong", {
    onClick: handleClick,
    className: _styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.createAccountButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 49
    }
  }, "Create"), " your account."), __jsx(react_swipeable__WEBPACK_IMPORTED_MODULE_10__["Swipeable"], {
    onSwipedUp: data => {
      console.log(data, swipe);

      if (data.absY > 10) {
        setSwipe(5);
        if (storage.loading) return;
        handleLogin(username, password);
      }
    },
    onSwiped: data => console.log(data),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: _styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.swipeImageWrapper,
    style: {
      textAlign: 'center',
      cursor: 'pointer',
      marginTop: swipe
    },
    id: "swipe",
    onClick: () => {
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
    className: _styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.swipeText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 11
    }
  }, storage.loading ? 'Loading...' : 'Swipe up to login')));
}

_s(Login, "EwxrSRHsuFAznB2F1U3QDpnlvIM=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"], helpers_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_6__["default"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9Mb2dpbi9Mb2dpbi5qcyJdLCJuYW1lcyI6WyJMb2dpbiIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJ1c2VTdGF0ZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzdG9yYWdlIiwiZGlzcGF0Y2giLCJ1c2VDb250ZXh0IiwiTG9naW5Db250ZXh0IiwibG9jYWxzdG9yYWdlIiwic2V0TG9jYWxTdG9yYWdlIiwidXNlTG9jYWxTdG9yYWdlIiwic3dpcGUiLCJzZXRTd2lwZSIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsImhhbmRsZUxvZ2luIiwic2V0TG9hZGluZyIsIkFQSSIsIm1ldGhvZCIsInVybCIsImRhdGEiLCJ0aGVuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJkaXNwYXRjaERhdGEiLCJzZXRBdXRob3JpemF0aW9uIiwicGF5bG9hZCIsIm1lc3NhZ2UiLCJzdWNjZXNzIiwiZXJyb3IiLCJ1c2VFZmZlY3QiLCJ1c2VyQ2FjaGUiLCJ1c2VyRGF0YSIsImJhY2tncm91bmQiLCJ3aWR0aCIsImNvbG9yIiwibWFyZ2luIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibWFyZ2luQm90dG9tIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJ0YXJnZXQiLCJ2YWx1ZSIsInN0eWxlcyIsImlucHV0IiwiZm9yZ290UGFzc3dvcmRMaW5rIiwiZm9yZ290dGVucGFzc3dvcmQiLCJjcmVhdGVBY2NvdW50TGluayIsImNyZWF0ZUFjY291bnRCdXR0b24iLCJjb25zb2xlIiwibG9nIiwiYWJzWSIsImxvYWRpbmciLCJzd2lwZUltYWdlV3JhcHBlciIsInRleHRBbGlnbiIsImN1cnNvciIsIm1hcmdpblRvcCIsImhlaWdodCIsInN3aXBlVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FB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LElBQVosQ0FScEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVVFO0FBQUcsYUFBUyxFQUFFd0IsK0RBQU0sQ0FBQ1UsaUJBQXJCO0FBQXdDLFNBQUssRUFBRTtBQUFFQyxlQUFTLEVBQUUsUUFBYjtBQUF1QkMsWUFBTSxFQUFFLFNBQS9CO0FBQTBDQyxlQUFTLEVBQUVoRDtBQUFyRCxLQUEvQztBQUE2RyxNQUFFLEVBQUMsT0FBaEg7QUFBd0gsV0FBTyxFQUFFLE1BQUs7QUFDcElDLGNBQVEsQ0FBQyxDQUFELENBQVI7QUFDQSxVQUFJUixPQUFPLENBQUNtRCxPQUFaLEVBQXFCO0FBQ3JCdEMsaUJBQVcsQ0FBQ3BCLFFBQUQsRUFBV0csUUFBWCxDQUFYO0FBQ0QsS0FKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0U7QUFBSyxPQUFHLEVBQUMsWUFBVDtBQUFzQixTQUFLLEVBQUU7QUFBRTRELFlBQU0sRUFBRSxFQUFWO0FBQWNsQixhQUFPLEVBQUU7QUFBdkIsS0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLENBVkYsQ0FqREosRUFvRUk7QUFBRyxhQUFTLEVBQUVJLCtEQUFNLENBQUNlLFNBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBaUN6RCxPQUFPLENBQUNtRCxPQUFSLEdBQWtCLFlBQWxCLEdBQWlDLG1CQUFsRSxDQXBFSixDQURGLENBREY7QUEyRUQ7O0dBakl1QjNELEs7VUFHUE8scUQsRUFFeUJPLHFFOzs7S0FMbEJkLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWMzMDUyNGI4ODYzYzE4ZWE4MjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgQVBJIGZyb20gJ2NvbmZpZ3MvQVBJJztcclxuaW1wb3J0IHsgVXNlck91dGxpbmVkLCBMb2NrT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcblxyXG4vLyBIb29rXHJcbmltcG9ydCB1c2VMb2NhbFN0b3JhZ2UgZnJvbSAnaGVscGVycy9ob29rcy91c2VMb2NhbFN0b3JhZ2UnO1xyXG5cclxuLy8gU3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvbG9naW4ubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7IExvZ2luQ29udGV4dCB9IGZyb20gJy4vc3RvcmFnZS9Mb2dpbkNvbnRleHQnO1xyXG5cclxuLy8gQWN0aW9uc1xyXG5pbXBvcnQgeyBzZXRMb2FkaW5nLCBzZXRBdXRob3JpemF0aW9uIH0gZnJvbSAnLi9hY3Rpb25zJztcclxuXHJcbi8vc3dpcGUgYnV0dG9uIGxvZ2luXHJcbmltcG9ydCB7IHVzZVN3aXBlYWJsZSwgU3dpcGVhYmxlIH0gZnJvbSAncmVhY3Qtc3dpcGVhYmxlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW3N0b3JhZ2UsIGRpc3BhdGNoXSA9IHVzZUNvbnRleHQoTG9naW5Db250ZXh0KTtcclxuICBjb25zdCBbbG9jYWxzdG9yYWdlLCBzZXRMb2NhbFN0b3JhZ2VdID0gdXNlTG9jYWxTdG9yYWdlKCdzdG9yYWdlJywgc3RvcmFnZSk7XHJcbiAgY29uc3QgW3N3aXBlLCBzZXRTd2lwZV0gPSB1c2VTdGF0ZSg1MSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHJvdXRlci5wdXNoKCcvc2lnbnVwJyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9naW4gPSAodXNlcm5hbWUsIHBhc3N3b3JkKSA9PiB7XHJcbiAgICBkaXNwYXRjaChzZXRMb2FkaW5nKHRydWUpKTtcclxuICAgIEFQSSh7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvYWNjb3VudHMvbG9naW4nLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgdXNlcm5hbWUsXHJcbiAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgIH0sXHJcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBjb25zdCB7IHN0YXR1cywgZGF0YSB9ID0gcmVzcG9uc2U7XHJcblxyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBjb25zdCBkaXNwYXRjaERhdGEgPSBzZXRBdXRob3JpemF0aW9uKGRhdGEpO1xyXG5cclxuICAgICAgICBkaXNwYXRjaChkaXNwYXRjaERhdGEpO1xyXG4gICAgICAgIHNldExvY2FsU3RvcmFnZShkaXNwYXRjaERhdGEucGF5bG9hZCk7XHJcbiAgICAgICAgc2V0VXNlcm5hbWUoJycpO1xyXG4gICAgICAgIHNldFBhc3N3b3JkKCcnKTtcclxuICAgICAgICBzZXRTd2lwZSg1MCk7XHJcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKCdBdXRoZW50aWNhdGlvbiBzdWNjZXNzZnVsJyk7XHJcblxyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvdGltZWxpbmUnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICAgIHNldFN3aXBlKDUwKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICB9LCBbc3RvcmFnZV0pO1xyXG4gIHZhciB1c2VyQ2FjaGUgPSBmYWxzZTtcclxuICBpZihsb2NhbHN0b3JhZ2UudXNlckRhdGEgIT09IG51bGwpIHtcclxuICAgIHVzZXJDYWNoZSA9IGxvY2Fsc3RvcmFnZS51c2VyRGF0YS51c2VybmFtZTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBjb250ZW50LWNlbnRlciB3LWZ1bGwgbWluLWgtc2NyZWVuXCIgc3R5bGU9e3sgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgxMDEsMjA3LDIzMiwxKSAwJSwgcmdiYSg2NCwxNTksMjA4LDEpIDEwMCUpJ319PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tYXV0byBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiIHN0eWxlPXt7IHdpZHRoOiAzMDAgfX0+XHJcbiAgICAgICAgey8qIDxpbWcgc3JjPVwiL2xvZ28ucG5nXCIgY2xhc3NOYW1lPVwibWItMzJcIiBzdHlsZT17eyBoZWlnaHQ6IDU1LCBtYXJnaW5Cb3R0b206ICc0cmVtJyB9fSAvPiAqL31cclxuICAgICAgICB7dXNlckNhY2hlPzw+XHJcbiAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScsIG1hcmdpbjogMCwgZm9udFNpemU6IDI1LCBmb250V2VpZ2h0OiAnYm9sZGVyJyB9fT5IZWxsbyB7dXNlckNhY2hlfTwvcD5cclxuICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgbWFyZ2luQm90dG9tOiAxMiB9fT5XZWxjb21lIGJhY2ssIGxvZ2luIGJlbG93PC9zcGFuPjwvPlxyXG4gICAgICAgIDpudWxsfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1sZyBiZy10cmFuc3BhcmVudCBweS0yIHRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0IH0pID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFVzZXJuYW1lKHRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtbGcgYmctdHJhbnNwYXJlbnQgcHktMiB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldCB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRQYXNzd29yZCh0YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5mb3Jnb3RQYXNzd29yZExpbmt9PkZvcmdvdCB5b3VyIFxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9mb3JnZXQtcGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuZm9yZ290dGVucGFzc3dvcmR9PlBhc3N3b3JkPzwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuY3JlYXRlQWNjb3VudExpbmt9PjxzdHJvbmcgb25DbGljaz17aGFuZGxlQ2xpY2t9IGNsYXNzTmFtZT17c3R5bGVzLmNyZWF0ZUFjY291bnRCdXR0b259PkNyZWF0ZTwvc3Ryb25nPiB5b3VyIGFjY291bnQuPC9wPlxyXG4gICAgXHJcbiAgICAgICAgICA8U3dpcGVhYmxlIG9uU3dpcGVkVXA9eyhkYXRhKSA9PiB7Y29uc29sZS5sb2coZGF0YSwgc3dpcGUpO1xyXG4gICAgICAgICAgICAgIGlmKGRhdGEuYWJzWSA+IDEwKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRTd2lwZSg1KTtcclxuICAgICAgICAgICAgICAgIGlmIChzdG9yYWdlLmxvYWRpbmcpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGhhbmRsZUxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCk7XHJcbiAgICAgICAgICAgICAgfSBcclxuXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25Td2lwZWQ9eyhkYXRhKSA9PiBjb25zb2xlLmxvZyhkYXRhKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuc3dpcGVJbWFnZVdyYXBwZXJ9IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIGN1cnNvcjogJ3BvaW50ZXInLCBtYXJnaW5Ub3A6IHN3aXBlIH19IGlkPVwic3dpcGVcIiBvbkNsaWNrPXsoKT0+IHtcclxuICAgICAgICAgICAgICBzZXRTd2lwZSg1KTtcclxuICAgICAgICAgICAgICBpZiAoc3RvcmFnZS5sb2FkaW5nKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgaGFuZGxlTG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKTtcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3dpcGUucG5nXCIgc3R5bGU9e3sgaGVpZ2h0OiA0MCwgZGlzcGxheTogJ2lubGluZScgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L1N3aXBlYWJsZT5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnN3aXBlVGV4dH0+e3N0b3JhZ2UubG9hZGluZyA/ICdMb2FkaW5nLi4uJyA6ICdTd2lwZSB1cCB0byBsb2dpbid9PC9wPlxyXG4gICAgICAgIHsvKiA8L2Rpdj4gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9