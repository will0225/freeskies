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
    className: "",
    value: username,
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
      lineNumber: 95,
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
      lineNumber: 102,
      columnNumber: 13
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["LockOutlined"], {
    style: {
      fontSize: 18
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
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
      lineNumber: 105,
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
      lineNumber: 120,
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
      lineNumber: 131,
      columnNumber: 9
    }
  }, "JOIN"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/forget-password",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: _styles_login_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.forgottenpassword,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9Mb2dpbi9Mb2dpbi5qcyJdLCJuYW1lcyI6WyJMb2dpbiIsInVzZVN0YXRlIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VDb250ZXh0IiwiTG9naW5Db250ZXh0Iiwic3RvcmFnZSIsImRpc3BhdGNoIiwidXNlTG9jYWxTdG9yYWdlIiwibG9jYWxzdG9yYWdlIiwic2V0TG9jYWxTdG9yYWdlIiwiaGFuZGxlQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwiaGFuZGxlTG9naW4iLCJzZXRMb2FkaW5nIiwiQVBJIiwibWV0aG9kIiwidXJsIiwiZGF0YSIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsImRpc3BhdGNoRGF0YSIsInNldEF1dGhvcml6YXRpb24iLCJwYXlsb2FkIiwibWVzc2FnZSIsInN1Y2Nlc3MiLCJlcnJvciIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJ3aWR0aCIsImhlaWdodCIsImRpc3BsYXkiLCJib3JkZXJCb3R0b20iLCJhbGlnbkl0ZW1zIiwiY29sb3IiLCJtYXJnaW5SaWdodCIsImZvbnRTaXplIiwidGFyZ2V0IiwidmFsdWUiLCJvdXRsaW5lIiwiY2FyZXRDb2xvciIsImJhY2tncm91bmQiLCJsb2FkaW5nIiwic3R5bGVzIiwiZm9yZ290dGVucGFzc3dvcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0NBR0E7O0FBQ0E7Q0FHQTs7QUFDQTtBQUVlLFNBQVNBLEtBQVQsR0FBaUI7QUFBQTs7QUFBQSxrQkFDRUMsc0RBQVEsQ0FBQyxFQUFELENBRFY7QUFBQSxNQUN2QkMsUUFEdUI7QUFBQSxNQUNiQyxXQURhOztBQUFBLG1CQUVFRixzREFBUSxDQUFDLEVBQUQsQ0FG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MTVkOTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgQVBJIGZyb20gJ2NvbmZpZ3MvQVBJJztcclxuaW1wb3J0IHsgVXNlck91dGxpbmVkLCBMb2NrT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcblxyXG4vLyBIb29rXHJcbmltcG9ydCB1c2VMb2NhbFN0b3JhZ2UgZnJvbSAnaGVscGVycy9ob29rcy91c2VMb2NhbFN0b3JhZ2UnO1xyXG5cclxuLy8gU3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvbG9naW4ubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7IExvZ2luQ29udGV4dCB9IGZyb20gJy4vc3RvcmFnZS9Mb2dpbkNvbnRleHQnO1xyXG5cclxuLy8gQWN0aW9uc1xyXG5pbXBvcnQgeyBzZXRMb2FkaW5nLCBzZXRBdXRob3JpemF0aW9uIH0gZnJvbSAnLi9hY3Rpb25zJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtzdG9yYWdlLCBkaXNwYXRjaF0gPSB1c2VDb250ZXh0KExvZ2luQ29udGV4dCk7XHJcbiAgY29uc3QgW2xvY2Fsc3RvcmFnZSwgc2V0TG9jYWxTdG9yYWdlXSA9IHVzZUxvY2FsU3RvcmFnZSgnc3RvcmFnZScsIHN0b3JhZ2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICByb3V0ZXIucHVzaCgnL3NpZ251cCcpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ2luID0gKHVzZXJuYW1lLCBwYXNzd29yZCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlKSk7XHJcbiAgICBBUEkoe1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL2FjY291bnRzL2xvZ2luJyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICB9LFxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgY29uc3QgeyBzdGF0dXMsIGRhdGEgfSA9IHJlc3BvbnNlO1xyXG5cclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgY29uc3QgZGlzcGF0Y2hEYXRhID0gc2V0QXV0aG9yaXphdGlvbihkYXRhKTtcclxuXHJcbiAgICAgICAgZGlzcGF0Y2goZGlzcGF0Y2hEYXRhKTtcclxuICAgICAgICBzZXRMb2NhbFN0b3JhZ2UoZGlzcGF0Y2hEYXRhLnBheWxvYWQpO1xyXG4gICAgICAgIHNldFVzZXJuYW1lKCcnKTtcclxuICAgICAgICBzZXRQYXNzd29yZCgnJyk7XHJcblxyXG4gICAgICAgIG1lc3NhZ2Uuc3VjY2VzcygnQXV0aGVudGljYXRpb24gc3VjY2Vzc2Z1bCcpO1xyXG5cclxuICAgICAgICByb3V0ZXIucHVzaCgnL3RpbWVsaW5lJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHN0b3JhZ2UsIHsgbG9jYWxzdG9yYWdlIH0pO1xyXG4gIH0sIFtzdG9yYWdlXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggY29udGVudC1jZW50ZXIgdy1mdWxsIG1pbi1oLXNjcmVlbiBiZy1ibHVlLTkwMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tYXV0byBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiIHN0eWxlPXt7IHdpZHRoOiAzMDAgfX0+XHJcbiAgICAgICAgPGltZyBzcmM9XCIvbG9nby5wbmdcIiBjbGFzc05hbWU9XCJtYi0zMlwiIHN0eWxlPXt7IGhlaWdodDogNTUgfX0gLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0REREZFMjlFJyxcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICcjZmZmZmZmNjknLCBtYXJnaW5SaWdodDogMTAgfX0+XHJcbiAgICAgICAgICAgICAgPFVzZXJPdXRsaW5lZCBzdHlsZT17eyBmb250U2l6ZTogMTggfX0gLz5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0IH0pID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFVzZXJuYW1lKHRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgY2FyZXRDb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCdcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0REREZFMjlFJyxcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICcjZmZmZmZmNjknLCBtYXJnaW5SaWdodDogMTAgfX0+XHJcbiAgICAgICAgICAgICAgPExvY2tPdXRsaW5lZCBzdHlsZT17eyBmb250U2l6ZTogMTggfX0gLz5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LWxnIGJnLXRyYW5zcGFyZW50IHB5LTIgdGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0UGFzc3dvcmQodGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICBjYXJldENvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLW1kIGJnLWJsdWUtNzAwIGgtMTIgbXQtOCB0ZXh0LXdoaXRlIHRleHQtbGcgZm9udC1tZWRpdW1cIlxyXG4gICAgICAgICAgc3R5bGU9e3sgb3V0bGluZTogJ25vbmUnIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzdG9yYWdlLmxvYWRpbmcpIHJldHVybjtcclxuICAgICAgICAgICAgaGFuZGxlTG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3N0b3JhZ2UubG9hZGluZyA/ICdMb2FkaW5nLi4uJyA6ICdTSUdOIElOJ31cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1tZCBiZy1ncmVlbi03MDAgaC0xMiBtdC04IHRleHQtd2hpdGUgdGV4dC1sZyBmb250LW1lZGl1bVwiXHJcbiAgICAgICAgICBzdHlsZT17eyBvdXRsaW5lOiAnbm9uZScgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEpPSU5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8TGluayBocmVmPVwiL2ZvcmdldC1wYXNzd29yZFwiPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuZm9yZ290dGVucGFzc3dvcmR9PkZvcmdvdCBQYXNzd29yZD88L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==