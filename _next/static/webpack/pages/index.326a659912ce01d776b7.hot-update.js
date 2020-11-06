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
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var configs_API__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! configs/API */ "./configs/API.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var helpers_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! helpers/hooks/useLocalStorage */ "./helpers/hooks/useLocalStorage.js");
/* harmony import */ var _styles_login_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/login.module.css */ "./containers/Login/styles/login.module.css");
/* harmony import */ var _styles_login_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_login_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _storage_LoginContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./storage/LoginContext */ "./containers/Login/storage/LoginContext.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./actions */ "./containers/Login/actions/index.js");


var _jsxFileName = "D:\\2020_10_29_React_design\\freeskies_fe_code\\containers\\Login\\Login.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





 // Hook

 // Styles


 // Actions


function Login() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      username = _useState[0],
      setUsername = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      password = _useState2[0],
      setPassword = _useState2[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_storage_LoginContext__WEBPACK_IMPORTED_MODULE_9__["LoginContext"]),
      storage = _useContext[0],
      dispatch = _useContext[1];

  var _useLocalStorage = Object(helpers_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_7__["default"])('storage', storage),
      _useLocalStorage2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useLocalStorage, 2),
      localstorage = _useLocalStorage2[0],
      setLocalStorage = _useLocalStorage2[1];

  var handleClick = function handleClick(e) {
    e.preventDefault();
    router.push('/signup');
  };

  var handleLogin = function handleLogin(username, password) {
    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_10__["setLoading"])(true));
    Object(configs_API__WEBPACK_IMPORTED_MODULE_5__["default"])({
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
        var dispatchData = Object(_actions__WEBPACK_IMPORTED_MODULE_10__["setAuthorization"])(data);
        dispatch(dispatchData);
        setLocalStorage(dispatchData.payload);
        setUsername('');
        setPassword('');
        antd__WEBPACK_IMPORTED_MODULE_4__["message"].success('Authentication successful');
        router.push('/timeline');
      } else {
        antd__WEBPACK_IMPORTED_MODULE_4__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
      }

      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_10__["setLoading"])(false));
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    console.log(storage, {
      localstorage: localstorage
    });
  }, [storage]);
  return __jsx("div", {
    className: "flex content-center w-full min-h-screen bg-blue-900",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
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
      lineNumber: 67,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/logo.png",
    className: "mb-32",
    style: {
      height: 55
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      display: 'flex',
      borderBottom: '1px solid #DDDFE29E',
      alignItems: 'center'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, __jsx("span", {
    style: {
      color: '#ffffff69',
      marginRight: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["UserOutlined"], {
    style: {
      fontSize: 18
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 15
    }
  })), __jsx("input", {
    className: "w-full text-lg bg-transparent py-2 text-white",
    value: 'fdf',
    onChange: function onChange(_ref) {
      var target = _ref.target;
      setUsername(target.value);
    },
    style: {
      outline: 'none',
      caretColor: 'white',
      background: 'transparent'
    },
    placeholder: "Username",
    autoComplete: "off",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  })), __jsx("div", {
    style: {
      display: 'flex',
      borderBottom: '1px solid #DDDFE29E',
      alignItems: 'center'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }, __jsx("span", {
    style: {
      color: '#ffffff69',
      marginRight: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["LockOutlined"], {
    style: {
      fontSize: 18
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 15
    }
  })), __jsx("input", {
    type: "password",
    className: "w-full text-lg bg-transparent py-2 text-white",
    value: password,
    onChange: function onChange(_ref2) {
      var target = _ref2.target;
      setPassword(target.value);
    },
    style: {
      outline: 'none',
      caretColor: 'white'
    },
    placeholder: "Password",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }))), __jsx("button", {
    type: "button",
    className: "w-full rounded-md bg-blue-700 h-12 mt-8 text-white text-lg font-medium",
    style: {
      outline: 'none'
    },
    onClick: function onClick() {
      if (storage.loading) return;
      handleLogin(username, password);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }, storage.loading ? 'Loading...' : 'SIGN IN'), __jsx("button", {
    className: "w-full rounded-md bg-green-700 h-12 mt-8 text-white text-lg font-medium",
    style: {
      outline: 'none'
    },
    onClick: handleClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }
  }, "JOIN"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/forget-password",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: _styles_login_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.forgottenpassword,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 11
    }
  }, "Forgot Password?"))));
}

_s(Login, "szqCsLCtuxbCyslvhvyCZuVY5Wc=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"], helpers_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_7__["default"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9Mb2dpbi9Mb2dpbi5qcyJdLCJuYW1lcyI6WyJMb2dpbiIsInVzZVN0YXRlIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VDb250ZXh0IiwiTG9naW5Db250ZXh0Iiwic3RvcmFnZSIsImRpc3BhdGNoIiwidXNlTG9jYWxTdG9yYWdlIiwibG9jYWxzdG9yYWdlIiwic2V0TG9jYWxTdG9yYWdlIiwiaGFuZGxlQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwiaGFuZGxlTG9naW4iLCJzZXRMb2FkaW5nIiwiQVBJIiwibWV0aG9kIiwidXJsIiwiZGF0YSIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsImRpc3BhdGNoRGF0YSIsInNldEF1dGhvcml6YXRpb24iLCJwYXlsb2FkIiwibWVzc2FnZSIsInN1Y2Nlc3MiLCJlcnJvciIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJ3aWR0aCIsImhlaWdodCIsImRpc3BsYXkiLCJib3JkZXJCb3R0b20iLCJhbGlnbkl0ZW1zIiwiY29sb3IiLCJtYXJnaW5SaWdodCIsImZvbnRTaXplIiwidGFyZ2V0IiwidmFsdWUiLCJvdXRsaW5lIiwiY2FyZXRDb2xvciIsImJhY2tncm91bmQiLCJsb2FkaW5nIiwic3R5bGVzIiwiZm9yZ290dGVucGFzc3dvcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0NBR0E7O0FBQ0E7Q0FHQTs7QUFDQTtBQUVlLFNBQVNBLEtBQVQsR0FBaUI7QUFBQTs7QUFBQSxrQkFDRUMsc0RBQVEsQ0FBQyxFQUFELENBRFY7QUFBQSxNQUN2QkMsUUFEdUI7QUFBQSxNQUNiQyxXQURhOztBQUFBLG1CQUVFRixzREFBUSxDQUFDLEVBQUQsQ0FG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ZGV4LjMyNmE2NTk5MTJjZTAxZDc3NmI3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IEFQSSBmcm9tICdjb25maWdzL0FQSSc7XHJcbmltcG9ydCB7IFVzZXJPdXRsaW5lZCwgTG9ja091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5cclxuLy8gSG9va1xyXG5pbXBvcnQgdXNlTG9jYWxTdG9yYWdlIGZyb20gJ2hlbHBlcnMvaG9va3MvdXNlTG9jYWxTdG9yYWdlJztcclxuXHJcbi8vIFN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL2xvZ2luLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyBMb2dpbkNvbnRleHQgfSBmcm9tICcuL3N0b3JhZ2UvTG9naW5Db250ZXh0JztcclxuXHJcbi8vIEFjdGlvbnNcclxuaW1wb3J0IHsgc2V0TG9hZGluZywgc2V0QXV0aG9yaXphdGlvbiB9IGZyb20gJy4vYWN0aW9ucyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbc3RvcmFnZSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChMb2dpbkNvbnRleHQpO1xyXG4gIGNvbnN0IFtsb2NhbHN0b3JhZ2UsIHNldExvY2FsU3RvcmFnZV0gPSB1c2VMb2NhbFN0b3JhZ2UoJ3N0b3JhZ2UnLCBzdG9yYWdlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgcm91dGVyLnB1c2goJy9zaWdudXAnKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dpbiA9ICh1c2VybmFtZSwgcGFzc3dvcmQpID0+IHtcclxuICAgIGRpc3BhdGNoKHNldExvYWRpbmcodHJ1ZSkpO1xyXG4gICAgQVBJKHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy9hY2NvdW50cy9sb2dpbicsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICBwYXNzd29yZCxcclxuICAgICAgfSxcclxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgc3RhdHVzLCBkYXRhIH0gPSByZXNwb25zZTtcclxuXHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIGNvbnN0IGRpc3BhdGNoRGF0YSA9IHNldEF1dGhvcml6YXRpb24oZGF0YSk7XHJcblxyXG4gICAgICAgIGRpc3BhdGNoKGRpc3BhdGNoRGF0YSk7XHJcbiAgICAgICAgc2V0TG9jYWxTdG9yYWdlKGRpc3BhdGNoRGF0YS5wYXlsb2FkKTtcclxuICAgICAgICBzZXRVc2VybmFtZSgnJyk7XHJcbiAgICAgICAgc2V0UGFzc3dvcmQoJycpO1xyXG5cclxuICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoJ0F1dGhlbnRpY2F0aW9uIHN1Y2Nlc3NmdWwnKTtcclxuXHJcbiAgICAgICAgcm91dGVyLnB1c2goJy90aW1lbGluZScpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhzdG9yYWdlLCB7IGxvY2Fsc3RvcmFnZSB9KTtcclxuICB9LCBbc3RvcmFnZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGNvbnRlbnQtY2VudGVyIHctZnVsbCBtaW4taC1zY3JlZW4gYmctYmx1ZS05MDBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLWF1dG8gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIiBzdHlsZT17eyB3aWR0aDogMzAwIH19PlxyXG4gICAgICAgIDxpbWcgc3JjPVwiL2xvZ28ucG5nXCIgY2xhc3NOYW1lPVwibWItMzJcIiBzdHlsZT17eyBoZWlnaHQ6IDU1IH19IC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNERERGRTI5RScsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAnI2ZmZmZmZjY5JywgbWFyZ2luUmlnaHQ6IDEwIH19PlxyXG4gICAgICAgICAgICAgIDxVc2VyT3V0bGluZWQgc3R5bGU9e3sgZm9udFNpemU6IDE4IH19IC8+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtbGcgYmctdHJhbnNwYXJlbnQgcHktMiB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17J2ZkZid9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldCB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRVc2VybmFtZSh0YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgICAgICAgICAgICAgIGNhcmV0Q29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0REREZFMjlFJyxcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICcjZmZmZmZmNjknLCBtYXJnaW5SaWdodDogMTAgfX0+XHJcbiAgICAgICAgICAgICAgPExvY2tPdXRsaW5lZCBzdHlsZT17eyBmb250U2l6ZTogMTggfX0gLz5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LWxnIGJnLXRyYW5zcGFyZW50IHB5LTIgdGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0UGFzc3dvcmQodGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICBjYXJldENvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLW1kIGJnLWJsdWUtNzAwIGgtMTIgbXQtOCB0ZXh0LXdoaXRlIHRleHQtbGcgZm9udC1tZWRpdW1cIlxyXG4gICAgICAgICAgc3R5bGU9e3sgb3V0bGluZTogJ25vbmUnIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzdG9yYWdlLmxvYWRpbmcpIHJldHVybjtcclxuICAgICAgICAgICAgaGFuZGxlTG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3N0b3JhZ2UubG9hZGluZyA/ICdMb2FkaW5nLi4uJyA6ICdTSUdOIElOJ31cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1tZCBiZy1ncmVlbi03MDAgaC0xMiBtdC04IHRleHQtd2hpdGUgdGV4dC1sZyBmb250LW1lZGl1bVwiXHJcbiAgICAgICAgICBzdHlsZT17eyBvdXRsaW5lOiAnbm9uZScgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEpPSU5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8TGluayBocmVmPVwiL2ZvcmdldC1wYXNzd29yZFwiPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuZm9yZ290dGVucGFzc3dvcmR9PkZvcmdvdCBQYXNzd29yZD88L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==