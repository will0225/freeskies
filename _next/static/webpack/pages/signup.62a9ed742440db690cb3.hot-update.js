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
    style: {
      height: 55,
      marginBottom: 30
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9TaWdudXAvU2lnbnVwLmpzIl0sIm5hbWVzIjpbIlNpZ251cCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZmVtYWxlIiwiZW1haWwiLCJwaG9uZSIsIkRvQiIsImZvcm1TdG9yZSIsInNldEZvcm1TdG9yZSIsInVzZUNvbnRleHQiLCJSZWdpc3RyYXRpb25Db250ZXh0Iiwic3RvcmFnZSIsImRpc3BhdGNoIiwiaGFuZGxlUmVnaXN0cmF0aW9uIiwic2V0TG9hZGluZyIsImdlbmRlciIsIkRPQiIsImRhdGEiLCJBUEkiLCJtZXRob2QiLCJ1cmwiLCJ0aGVuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJtZXNzYWdlIiwic3VjY2VzcyIsInB1c2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJiYWNrZ3JvdW5kIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJzdHlsZXMiLCJzdGVwd2l6YXJkIiwibG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVVlLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFDL0IsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEK0Isa0JBRUdDLHNEQUFRLENBQUM7QUFDekNDLFlBQVEsRUFBRSxFQUQrQjtBQUV6Q0MsWUFBUSxFQUFFLEVBRitCO0FBR3pDQyxhQUFTLEVBQUUsRUFIOEI7QUFJekNDLFlBQVEsRUFBRSxFQUorQjtBQUt6Q0MsVUFBTSxFQUFFLEVBTGlDO0FBTXpDQyxTQUFLLEVBQUUsRUFOa0M7QUFPekNDLFNBQUssRUFBRSxFQVBrQztBQVF6Q0MsT0FBRyxFQUFFO0FBUm9DLEdBQUQsQ0FGWDtBQUFBLE1BRXhC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QUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtDQUFEO0FBQVUsZ0JBQVksRUFBRTNCLFlBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsNkNBQUQ7QUFBUSxnQkFBWSxFQUFFQSxZQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRSxNQUFDLDRDQUFEO0FBQU8sZ0JBQVksRUFBRUEsWUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBSUUsTUFBQyw0Q0FBRDtBQUFPLGdCQUFZLEVBQUVBLFlBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQUtFLE1BQUMsK0NBQUQ7QUFBVSxnQkFBWSxFQUFFQSxZQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsRUFNRSxNQUFDLCtDQUFEO0FBQVUsZ0JBQVksRUFBRUEsWUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLEVBT0UsTUFBQyxnREFBRDtBQUNFLGdCQUFZLEVBQUVBLFlBRGhCO0FBRUUsV0FBTyxFQUFFRyxPQUFPLENBQUN5QixPQUZuQjtBQUdFLGtCQUFjLEVBQUV2QixrQkFIbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLENBSEYsQ0FERixDQURGO0FBcUJEOztHQWxGdUJsQixNO1VBQ1BFLHFEOzs7S0FET0YsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaWdudXAuNjJhOWVkNzQyNDQwZGI2OTBjYjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy9zaWdudXAubW9kdWxlLnNjc3MnO1xyXG5cclxuaW1wb3J0IFN0ZXBXaXphcmQgZnJvbSAncmVhY3Qtc3RlcC13aXphcmQnO1xyXG5pbXBvcnQgeyBSZWdpc3RyYXRpb25Db250ZXh0IH0gZnJvbSAnLi9zdG9yYWdlL1JlZ2lzdHJhdGlvbkNvbnRleHQnO1xyXG5pbXBvcnQgc2V0TG9hZGluZyBmcm9tICcuL2FjdGlvbnMvc2V0TG9hZGluZyc7XHJcbmltcG9ydCBBUEkgZnJvbSAnY29uZmlncy9BUEknO1xyXG5pbXBvcnQge1xyXG4gIFBlcnNvbmFsLFxyXG4gIEdlbmRlcixcclxuICBFbWFpbCxcclxuICBQaG9uZSxcclxuICBCaXJ0aGRheSxcclxuICBQYXNzd29yZCxcclxuICBSZUNhcHRjaGEsXHJcbn0gZnJvbSAnLi9zdGVwcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWdudXAoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW2Zvcm1TdG9yZSwgc2V0Rm9ybVN0b3JlXSA9IHVzZVN0YXRlKHtcclxuICAgIHVzZXJuYW1lOiAnJyxcclxuICAgIHBhc3N3b3JkOiAnJyxcclxuICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICBsYXN0TmFtZTogJycsXHJcbiAgICBmZW1hbGU6ICcnLFxyXG4gICAgZW1haWw6ICcnLFxyXG4gICAgcGhvbmU6ICcnLFxyXG4gICAgRG9COiBbXSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgW3N0b3JhZ2UsIGRpc3BhdGNoXSA9IHVzZUNvbnRleHQoUmVnaXN0cmF0aW9uQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlZ2lzdHJhdGlvbiA9ICgpID0+IHtcclxuICAgIGRpc3BhdGNoKHNldExvYWRpbmcodHJ1ZSkpO1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgdXNlcm5hbWUsXHJcbiAgICAgIHBhc3N3b3JkLFxyXG4gICAgICBmaXJzdE5hbWUsXHJcbiAgICAgIGxhc3ROYW1lLFxyXG4gICAgICBnZW5kZXIsXHJcbiAgICAgIGVtYWlsLFxyXG4gICAgICBwaG9uZSxcclxuICAgICAgRE9CLFxyXG4gICAgfSA9IGZvcm1TdG9yZTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICB1c2VybmFtZSxcclxuICAgICAgcGFzc3dvcmQsXHJcbiAgICAgIGZpcnN0TmFtZSxcclxuICAgICAgbGFzdE5hbWUsXHJcbiAgICAgIGZlbWFsZTogZ2VuZGVyID09PSAnZmVtYWxlJyxcclxuICAgICAgZW1haWwsXHJcbiAgICAgIHBob25lLFxyXG4gICAgICBEb0I6IGAke0RPQlsyXX0tJHtET0JbMV19LSR7RE9CWzBdfWAsXHJcbiAgICB9O1xyXG5cclxuICAgIEFQSSh7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvYWNjb3VudHMvcmVnaXN0ZXInLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgY29uc3QgeyBzdGF0dXMsIGRhdGEgfSA9IHJlc3BvbnNlO1xyXG5cclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgc2V0Rm9ybVN0b3JlKHt9KTtcclxuXHJcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKCdDb25ncmF0dWxhdGlvbiEgWW91IGFyZSByZWdpc3RlcmVkIHN1Y2Nlc3NmdWxseS4nKTtcclxuICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnNvbGUubG9nKCdmb3JtU3RvcmUnLCBmb3JtU3RvcmUpXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBjb250ZW50LWNlbnRlciB3LWZ1bGwgbWluLWgtc2NyZWVuXCIgc3R5bGU9e3sgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgxMDEsMjA3LDIzMiwxKSAwJSwgcmdiYSg2NCwxNTksMjA4LDEpIDEwMCUpJ319PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tYXV0byBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiIHN0eWxlPXt7IHdpZHRoOiAzMDAgfX0+XHJcbiAgICAgICAgPGltZyBzcmM9XCIvbG9nby5wbmdcIiAgc3R5bGU9e3sgaGVpZ2h0OiA1NSwgbWFyZ2luQm90dG9tOiAzMCB9fSAvPlxyXG5cclxuICAgICAgICA8U3RlcFdpemFyZCBjbGFzc05hbWU9e3N0eWxlcy5zdGVwd2l6YXJkfT5cclxuICAgICAgICAgIDxQZXJzb25hbCBzZXRGb3JtU3RvcmU9e3NldEZvcm1TdG9yZX0gLz5cclxuICAgICAgICAgIDxHZW5kZXIgc2V0Rm9ybVN0b3JlPXtzZXRGb3JtU3RvcmV9IC8+XHJcbiAgICAgICAgICA8RW1haWwgc2V0Rm9ybVN0b3JlPXtzZXRGb3JtU3RvcmV9IC8+XHJcbiAgICAgICAgICA8UGhvbmUgc2V0Rm9ybVN0b3JlPXtzZXRGb3JtU3RvcmV9IC8+XHJcbiAgICAgICAgICA8QmlydGhkYXkgc2V0Rm9ybVN0b3JlPXtzZXRGb3JtU3RvcmV9IC8+XHJcbiAgICAgICAgICA8UGFzc3dvcmQgc2V0Rm9ybVN0b3JlPXtzZXRGb3JtU3RvcmV9IC8+XHJcbiAgICAgICAgICA8UmVDYXB0Y2hhXHJcbiAgICAgICAgICAgIHNldEZvcm1TdG9yZT17c2V0Rm9ybVN0b3JlfVxyXG4gICAgICAgICAgICBsb2FkaW5nPXtzdG9yYWdlLmxvYWRpbmd9XHJcbiAgICAgICAgICAgIG9uUmVnaXN0cmF0aW9uPXtoYW5kbGVSZWdpc3RyYXRpb259XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvU3RlcFdpemFyZD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=