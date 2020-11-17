webpackHotUpdate_N_E("pages/signup",{

/***/ "./containers/Signup/Signup.js":
/*!*************************************!*\
  !*** ./containers/Signup/Signup.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Signup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_signup_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/signup.module.scss */ "./containers/Signup/styles/signup.module.scss");
/* harmony import */ var _styles_signup_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_signup_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_step_wizard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-step-wizard */ "./node_modules/react-step-wizard/dist/react-step-wizard.min.js");
/* harmony import */ var react_step_wizard__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_step_wizard__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _storage_RegistrationContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./storage/RegistrationContext */ "./containers/Signup/storage/RegistrationContext.js");
/* harmony import */ var _actions_setLoading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./actions/setLoading */ "./containers/Signup/actions/setLoading.js");
/* harmony import */ var configs_API__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! configs/API */ "./configs/API.js");
/* harmony import */ var _steps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./steps */ "./containers/Signup/steps/index.js");
var _jsxFileName = "E:\\freeskies_fe_code\\containers\\Signup\\Signup.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










function Signup() {
  _s();

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    0: formStore,
    1: setFormStore
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    female: '',
    email: '',
    phone: '',
    DoB: []
  });
  const {
    0: storage,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_storage_RegistrationContext__WEBPACK_IMPORTED_MODULE_6__["RegistrationContext"]);

  const handleRegistration = () => {
    dispatch(Object(_actions_setLoading__WEBPACK_IMPORTED_MODULE_7__["default"])(true));
    console.log(formStore);
    const {
      username,
      password,
      firstName,
      lastName,
      gender,
      email,
      phone,
      DOB
    } = formStore;
    const data = {
      username,
      password,
      firstName,
      lastName,
      female: gender === 'female',
      email,
      phone,
      DoB: "".concat(DOB[2], "-").concat(DOB[1], "-").concat(DOB[0])
    };
    Object(configs_API__WEBPACK_IMPORTED_MODULE_8__["default"])({
      method: 'post',
      url: '/accounts/register',
      data
    }).then(response => {
      const {
        status,
        data
      } = response;

      if (status === 200) {
        setFormStore({});
        antd__WEBPACK_IMPORTED_MODULE_2__["message"].success('Congratulation! You are registered successfully.');
        router.push('/');
      } else {
        antd__WEBPACK_IMPORTED_MODULE_2__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
      }

      dispatch(Object(_actions_setLoading__WEBPACK_IMPORTED_MODULE_7__["default"])(false));
    });
  };

  return __jsx("div", {
    className: "flex content-center w-full min-h-screen",
    style: {
      background: 'linear-gradient(90deg, rgba(101,207,232,1) 0%, rgba(64,159,208,1) 100%)'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
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
      lineNumber: 85,
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
      lineNumber: 86,
      columnNumber: 9
    }
  }), __jsx(react_step_wizard__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: _styles_signup_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.stepwizard,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, __jsx(_steps__WEBPACK_IMPORTED_MODULE_9__["Personal"], {
    setFormStore: setFormStore,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }), __jsx(_steps__WEBPACK_IMPORTED_MODULE_9__["Gender"], {
    setFormStore: setFormStore,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }), __jsx(_steps__WEBPACK_IMPORTED_MODULE_9__["Email"], {
    setFormStore: setFormStore,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }), __jsx(_steps__WEBPACK_IMPORTED_MODULE_9__["Phone"], {
    setFormStore: setFormStore,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }), __jsx(_steps__WEBPACK_IMPORTED_MODULE_9__["Birthday"], {
    setFormStore: setFormStore,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  }), __jsx(_steps__WEBPACK_IMPORTED_MODULE_9__["Password"], {
    setFormStore: setFormStore,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }), __jsx(_steps__WEBPACK_IMPORTED_MODULE_9__["ReCaptcha"], {
    setFormStore: setFormStore,
    loading: storage.loading,
    onRegistration: handleRegistration,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }))));
}

_s(Signup, "w8Zq4+xaFwb60uLET5spbJBZwL4=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c = Signup;

var _c;

$RefreshReg$(_c, "Signup");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9TaWdudXAvU2lnbnVwLmpzIl0sIm5hbWVzIjpbIlNpZ251cCIsInJvdXRlciIsInVzZVJvdXRlciIsImZvcm1TdG9yZSIsInNldEZvcm1TdG9yZSIsInVzZVN0YXRlIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZmVtYWxlIiwiZW1haWwiLCJwaG9uZSIsIkRvQiIsInN0b3JhZ2UiLCJkaXNwYXRjaCIsInVzZUNvbnRleHQiLCJSZWdpc3RyYXRpb25Db250ZXh0IiwiaGFuZGxlUmVnaXN0cmF0aW9uIiwic2V0TG9hZGluZyIsImNvbnNvbGUiLCJsb2ciLCJnZW5kZXIiLCJET0IiLCJkYXRhIiwiQVBJIiwibWV0aG9kIiwidXJsIiwidGhlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwibWVzc2FnZSIsInN1Y2Nlc3MiLCJwdXNoIiwiZXJyb3IiLCJiYWNrZ3JvdW5kIiwid2lkdGgiLCJoZWlnaHQiLCJzdHlsZXMiLCJzdGVwd2l6YXJkIiwibG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVVlLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFDL0IsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLFFBQU07QUFBQSxPQUFDQyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QkMsc0RBQVEsQ0FBQztBQUN6Q0MsWUFBUSxFQUFFLEVBRCtCO0FBRXpDQyxZQUFRLEVBQUUsRUFGK0I7QUFHekNDLGFBQVMsRUFBRSxFQUg4QjtBQUl6Q0MsWUFBUSxFQUFFLEVBSitCO0FBS3pDQyxVQUFNLEVBQUUsRUFMaUM7QUFNekNDLFNBQUssRUFBRSxFQU5rQztBQU96Q0MsU0FBSyxFQUFFLEVBUGtDO0FBUXpDQyxPQUFHLEVBQUU7QUFSb0Ms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QTtBQUFBO0FBQUE7QUFBQSxJQUxGLEVBTUUsTUFBQywrQ0FBRDtBQUFVLGdCQUFZLEVBQUVBLFlBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixFQU9FLE1BQUMsZ0RBQUQ7QUFDRSxnQkFBWSxFQUFFQSxZQURoQjtBQUVFLFdBQU8sRUFBRVUsT0FBTyxDQUFDMEIsT0FGbkI7QUFHRSxrQkFBYyxFQUFFdEIsa0JBSGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixDQUhGLENBREYsQ0FERjtBQXFCRDs7R0FsRnVCbEIsTTtVQUNQRSxxRDs7O0tBRE9GLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbnVwLjc3OTFmZDJlZjRjYTdjMDQ3Y2U1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvc2lnbnVwLm1vZHVsZS5zY3NzJztcclxuXHJcbmltcG9ydCBTdGVwV2l6YXJkIGZyb20gJ3JlYWN0LXN0ZXAtd2l6YXJkJztcclxuaW1wb3J0IHsgUmVnaXN0cmF0aW9uQ29udGV4dCB9IGZyb20gJy4vc3RvcmFnZS9SZWdpc3RyYXRpb25Db250ZXh0JztcclxuaW1wb3J0IHNldExvYWRpbmcgZnJvbSAnLi9hY3Rpb25zL3NldExvYWRpbmcnO1xyXG5pbXBvcnQgQVBJIGZyb20gJ2NvbmZpZ3MvQVBJJztcclxuaW1wb3J0IHtcclxuICBQZXJzb25hbCxcclxuICBHZW5kZXIsXHJcbiAgRW1haWwsXHJcbiAgUGhvbmUsXHJcbiAgQmlydGhkYXksXHJcbiAgUGFzc3dvcmQsXHJcbiAgUmVDYXB0Y2hhLFxyXG59IGZyb20gJy4vc3RlcHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbnVwKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtmb3JtU3RvcmUsIHNldEZvcm1TdG9yZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICB1c2VybmFtZTogJycsXHJcbiAgICBwYXNzd29yZDogJycsXHJcbiAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgbGFzdE5hbWU6ICcnLFxyXG4gICAgZmVtYWxlOiAnJyxcclxuICAgIGVtYWlsOiAnJyxcclxuICAgIHBob25lOiAnJyxcclxuICAgIERvQjogW10sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IFtzdG9yYWdlLCBkaXNwYXRjaF0gPSB1c2VDb250ZXh0KFJlZ2lzdHJhdGlvbkNvbnRleHQpO1xyXG5cclxuICBjb25zdCBoYW5kbGVSZWdpc3RyYXRpb24gPSAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChzZXRMb2FkaW5nKHRydWUpKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhmb3JtU3RvcmUpO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICB1c2VybmFtZSxcclxuICAgICAgcGFzc3dvcmQsXHJcbiAgICAgIGZpcnN0TmFtZSxcclxuICAgICAgbGFzdE5hbWUsXHJcbiAgICAgIGdlbmRlcixcclxuICAgICAgZW1haWwsXHJcbiAgICAgIHBob25lLFxyXG4gICAgICBET0IsXHJcbiAgICB9ID0gZm9ybVN0b3JlO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIHVzZXJuYW1lLFxyXG4gICAgICBwYXNzd29yZCxcclxuICAgICAgZmlyc3ROYW1lLFxyXG4gICAgICBsYXN0TmFtZSxcclxuICAgICAgZmVtYWxlOiBnZW5kZXIgPT09ICdmZW1hbGUnLFxyXG4gICAgICBlbWFpbCxcclxuICAgICAgcGhvbmUsXHJcbiAgICAgIERvQjogYCR7RE9CWzJdfS0ke0RPQlsxXX0tJHtET0JbMF19YCxcclxuICAgIH07XHJcblxyXG4gICAgQVBJKHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy9hY2NvdW50cy9yZWdpc3RlcicsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBjb25zdCB7IHN0YXR1cywgZGF0YSB9ID0gcmVzcG9uc2U7XHJcblxyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBzZXRGb3JtU3RvcmUoe30pO1xyXG5cclxuICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoJ0NvbmdyYXR1bGF0aW9uISBZb3UgYXJlIHJlZ2lzdGVyZWQgc3VjY2Vzc2Z1bGx5LicpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBjb250ZW50LWNlbnRlciB3LWZ1bGwgbWluLWgtc2NyZWVuXCIgc3R5bGU9e3sgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgxMDEsMjA3LDIzMiwxKSAwJSwgcmdiYSg2NCwxNTksMjA4LDEpIDEwMCUpJ319PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tYXV0byBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiIHN0eWxlPXt7IHdpZHRoOiAzMDAgfX0+XHJcbiAgICAgICAgPGltZyBzcmM9XCIvbG9nby5wbmdcIiBjbGFzc05hbWU9XCJtYi0zMlwiIHN0eWxlPXt7IGhlaWdodDogNTUgfX0gLz5cclxuXHJcbiAgICAgICAgPFN0ZXBXaXphcmQgY2xhc3NOYW1lPXtzdHlsZXMuc3RlcHdpemFyZH0+XHJcbiAgICAgICAgICA8UGVyc29uYWwgc2V0Rm9ybVN0b3JlPXtzZXRGb3JtU3RvcmV9IC8+XHJcbiAgICAgICAgICA8R2VuZGVyIHNldEZvcm1TdG9yZT17c2V0Rm9ybVN0b3JlfSAvPlxyXG4gICAgICAgICAgPEVtYWlsIHNldEZvcm1TdG9yZT17c2V0Rm9ybVN0b3JlfSAvPlxyXG4gICAgICAgICAgPFBob25lIHNldEZvcm1TdG9yZT17c2V0Rm9ybVN0b3JlfSAvPlxyXG4gICAgICAgICAgPEJpcnRoZGF5IHNldEZvcm1TdG9yZT17c2V0Rm9ybVN0b3JlfSAvPlxyXG4gICAgICAgICAgPFBhc3N3b3JkIHNldEZvcm1TdG9yZT17c2V0Rm9ybVN0b3JlfSAvPlxyXG4gICAgICAgICAgPFJlQ2FwdGNoYVxyXG4gICAgICAgICAgICBzZXRGb3JtU3RvcmU9e3NldEZvcm1TdG9yZX1cclxuICAgICAgICAgICAgbG9hZGluZz17c3RvcmFnZS5sb2FkaW5nfVxyXG4gICAgICAgICAgICBvblJlZ2lzdHJhdGlvbj17aGFuZGxlUmVnaXN0cmF0aW9ufVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L1N0ZXBXaXphcmQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9