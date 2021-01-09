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
var _jsxFileName = "D:\\Freeskies-development-\\containers\\Signup\\Signup.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










function Signup() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    female: '',
    email: '',
    phone: '',
    DoB: []
  }),
      formStore = _useState[0],
      setFormStore = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_storage_RegistrationContext__WEBPACK_IMPORTED_MODULE_6__["RegistrationContext"]),
      storage = _useContext[0],
      dispatch = _useContext[1];

  var handleRegistration = function handleRegistration() {
    dispatch(Object(_actions_setLoading__WEBPACK_IMPORTED_MODULE_7__["default"])(true));
    var username = formStore.username,
        password = formStore.password,
        firstName = formStore.firstName,
        lastName = formStore.lastName,
        gender = formStore.gender,
        email = formStore.email,
        phone = formStore.phone,
        DOB = formStore.DOB;
    var data = {
      username: username,
      password: password,
      firstName: firstName,
      lastName: lastName,
      female: gender === 'female',
      email: email,
      phone: phone,
      DoB: "".concat(DOB[2], "-").concat(DOB[1], "-").concat(DOB[0])
    };
    Object(configs_API__WEBPACK_IMPORTED_MODULE_8__["default"])({
      method: 'post',
      url: '/accounts/register',
      data: data
    }).then(function (response) {
      var status = response.status,
          data = response.data;

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

  console.log('formStore', formStore);
  return __jsx("div", {
    className: "flex content-center w-full min-h-screen",
    style: {
      background: 'linear-gradient(90deg, rgba(101,207,232,1) 0%, rgba(64,159,208,1) 100%)'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
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
      lineNumber: 83,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/logo.png",
    style: {
      height: 55
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }), __jsx(react_step_wizard__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: _styles_signup_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.stepwizard,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, __jsx(_steps__WEBPACK_IMPORTED_MODULE_9__["Personal"], {
    setFormStore: setFormStore,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }), __jsx(_steps__WEBPACK_IMPORTED_MODULE_9__["Gender"], {
    setFormStore: setFormStore,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }), __jsx(_steps__WEBPACK_IMPORTED_MODULE_9__["Email"], {
    setFormStore: setFormStore,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }), __jsx(_steps__WEBPACK_IMPORTED_MODULE_9__["Phone"], {
    setFormStore: setFormStore,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }), __jsx(_steps__WEBPACK_IMPORTED_MODULE_9__["Birthday"], {
    setFormStore: setFormStore,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }), __jsx(_steps__WEBPACK_IMPORTED_MODULE_9__["Password"], {
    setFormStore: setFormStore,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }), __jsx(_steps__WEBPACK_IMPORTED_MODULE_9__["ReCaptcha"], {
    setFormStore: setFormStore,
    loading: storage.loading,
    onRegistration: handleRegistration,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9TaWdudXAvU2lnbnVwLmpzIl0sIm5hbWVzIjpbIlNpZ251cCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZmVtYWxlIiwiZW1haWwiLCJwaG9uZSIsIkRvQiIsImZvcm1TdG9yZSIsInNldEZvcm1TdG9yZSIsInVzZUNvbnRleHQiLCJSZWdpc3RyYXRpb25Db250ZXh0Iiwic3RvcmFnZSIsImRpc3BhdGNoIiwiaGFuZGxlUmVnaXN0cmF0aW9uIiwic2V0TG9hZGluZyIsImdlbmRlciIsIkRPQiIsImRhdGEiLCJBUEkiLCJtZXRob2QiLCJ1cmwiLCJ0aGVuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJtZXNzYWdlIiwic3VjY2VzcyIsInB1c2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJiYWNrZ3JvdW5kIiwid2lkdGgiLCJoZWlnaHQiLCJzdHlsZXMiLCJzdGVwd2l6YXJkIiwibG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVVlLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFDL0IsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEK0Isa0JBRUdDLHNEQUFRLENBQUM7QUFDekNDLFlBQVEsRUFBRSxFQUQrQjtBQUV6Q0MsWUFBUSxFQUFFLEVBRitCO0FBR3pDQyxhQUFTLEVBQUUsRUFIOEI7QUFJekNDLFlBQVEsRUFBRSxFQUorQjtBQUt6Q0MsVUFBTSxFQUFFLEVBTGlDO0FBTXpDQyxTQUFLLEVBQUUsRUFOa0M7QUFPekNDLFNBQUssRUFBRSxFQVBrQztBQVF6Q0MsT0FBRyxFQUFFO0FBUm9DLEdBQUQsQ0FGWDtBQUFBLE1BRXhCQyxTQUZ3QjtBQUFBLE1B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LGdCQUFZLEVBQUUxQixZQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLDZDQUFEO0FBQVEsZ0JBQVksRUFBRUEsWUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0UsTUFBQyw0Q0FBRDtBQUFPLGdCQUFZLEVBQUVBLFlBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixFQUlFLE1BQUMsNENBQUQ7QUFBTyxnQkFBWSxFQUFFQSxZQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFLRSxNQUFDLCtDQUFEO0FBQVUsZ0JBQVksRUFBRUEsWUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLEVBTUUsTUFBQywrQ0FBRDtBQUFVLGdCQUFZLEVBQUVBLFlBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixFQU9FLE1BQUMsZ0RBQUQ7QUFDRSxnQkFBWSxFQUFFQSxZQURoQjtBQUVFLFdBQU8sRUFBRUcsT0FBTyxDQUFDd0IsT0FGbkI7QUFHRSxrQkFBYyxFQUFFdEIsa0JBSGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixDQUZGLENBREYsQ0FERjtBQW9CRDs7R0FqRnVCbEIsTTtVQUNQRSxxRDs7O0tBRE9GLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbnVwLjFjN2NhMzgwMmUxYjM1ZjJjNDlmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy9zaWdudXAubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgU3RlcFdpemFyZCBmcm9tICdyZWFjdC1zdGVwLXdpemFyZCc7XHJcbmltcG9ydCB7IFJlZ2lzdHJhdGlvbkNvbnRleHQgfSBmcm9tICcuL3N0b3JhZ2UvUmVnaXN0cmF0aW9uQ29udGV4dCc7XHJcbmltcG9ydCBzZXRMb2FkaW5nIGZyb20gJy4vYWN0aW9ucy9zZXRMb2FkaW5nJztcclxuaW1wb3J0IEFQSSBmcm9tICdjb25maWdzL0FQSSc7XHJcbmltcG9ydCB7XHJcbiAgUGVyc29uYWwsXHJcbiAgR2VuZGVyLFxyXG4gIEVtYWlsLFxyXG4gIFBob25lLFxyXG4gIEJpcnRoZGF5LFxyXG4gIFBhc3N3b3JkLFxyXG4gIFJlQ2FwdGNoYSxcclxufSBmcm9tICcuL3N0ZXBzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ251cCgpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbZm9ybVN0b3JlLCBzZXRGb3JtU3RvcmVdID0gdXNlU3RhdGUoe1xyXG4gICAgdXNlcm5hbWU6ICcnLFxyXG4gICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgZmlyc3ROYW1lOiAnJyxcclxuICAgIGxhc3ROYW1lOiAnJyxcclxuICAgIGZlbWFsZTogJycsXHJcbiAgICBlbWFpbDogJycsXHJcbiAgICBwaG9uZTogJycsXHJcbiAgICBEb0I6IFtdLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBbc3RvcmFnZSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChSZWdpc3RyYXRpb25Db250ZXh0KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVnaXN0cmF0aW9uID0gKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlKSk7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICB1c2VybmFtZSxcclxuICAgICAgcGFzc3dvcmQsXHJcbiAgICAgIGZpcnN0TmFtZSxcclxuICAgICAgbGFzdE5hbWUsXHJcbiAgICAgIGdlbmRlcixcclxuICAgICAgZW1haWwsXHJcbiAgICAgIHBob25lLFxyXG4gICAgICBET0IsXHJcbiAgICB9ID0gZm9ybVN0b3JlO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIHVzZXJuYW1lLFxyXG4gICAgICBwYXNzd29yZCxcclxuICAgICAgZmlyc3ROYW1lLFxyXG4gICAgICBsYXN0TmFtZSxcclxuICAgICAgZmVtYWxlOiBnZW5kZXIgPT09ICdmZW1hbGUnLFxyXG4gICAgICBlbWFpbCxcclxuICAgICAgcGhvbmUsXHJcbiAgICAgIERvQjogYCR7RE9CWzJdfS0ke0RPQlsxXX0tJHtET0JbMF19YCxcclxuICAgIH07XHJcblxyXG4gICAgQVBJKHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy9hY2NvdW50cy9yZWdpc3RlcicsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBjb25zdCB7IHN0YXR1cywgZGF0YSB9ID0gcmVzcG9uc2U7XHJcblxyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBzZXRGb3JtU3RvcmUoe30pO1xyXG5cclxuICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoJ0NvbmdyYXR1bGF0aW9uISBZb3UgYXJlIHJlZ2lzdGVyZWQgc3VjY2Vzc2Z1bGx5LicpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc29sZS5sb2coJ2Zvcm1TdG9yZScsIGZvcm1TdG9yZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBjb250ZW50LWNlbnRlciB3LWZ1bGwgbWluLWgtc2NyZWVuXCIgc3R5bGU9e3sgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgxMDEsMjA3LDIzMiwxKSAwJSwgcmdiYSg2NCwxNTksMjA4LDEpIDEwMCUpJ319PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tYXV0byBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiIHN0eWxlPXt7IHdpZHRoOiAzMDAgfX0+XHJcbiAgICAgICAgPGltZyBzcmM9XCIvbG9nby5wbmdcIiAgc3R5bGU9e3sgaGVpZ2h0OiA1NSB9fSAvPlxyXG4gICAgICAgIDxTdGVwV2l6YXJkIGNsYXNzTmFtZT17c3R5bGVzLnN0ZXB3aXphcmR9PlxyXG4gICAgICAgICAgPFBlcnNvbmFsIHNldEZvcm1TdG9yZT17c2V0Rm9ybVN0b3JlfSAvPlxyXG4gICAgICAgICAgPEdlbmRlciBzZXRGb3JtU3RvcmU9e3NldEZvcm1TdG9yZX0gLz5cclxuICAgICAgICAgIDxFbWFpbCBzZXRGb3JtU3RvcmU9e3NldEZvcm1TdG9yZX0gLz5cclxuICAgICAgICAgIDxQaG9uZSBzZXRGb3JtU3RvcmU9e3NldEZvcm1TdG9yZX0gLz5cclxuICAgICAgICAgIDxCaXJ0aGRheSBzZXRGb3JtU3RvcmU9e3NldEZvcm1TdG9yZX0gLz5cclxuICAgICAgICAgIDxQYXNzd29yZCBzZXRGb3JtU3RvcmU9e3NldEZvcm1TdG9yZX0gLz5cclxuICAgICAgICAgIDxSZUNhcHRjaGFcclxuICAgICAgICAgICAgc2V0Rm9ybVN0b3JlPXtzZXRGb3JtU3RvcmV9XHJcbiAgICAgICAgICAgIGxvYWRpbmc9e3N0b3JhZ2UubG9hZGluZ31cclxuICAgICAgICAgICAgb25SZWdpc3RyYXRpb249e2hhbmRsZVJlZ2lzdHJhdGlvbn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9TdGVwV2l6YXJkPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==