webpackHotUpdate_N_E("pages/photos",{

/***/ "./containers/Photos/Photos.js":
/*!*************************************!*\
  !*** ./containers/Photos/Photos.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal_hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal-hook */ "./node_modules/react-modal-hook/dist/index.es.js");
/* harmony import */ var components_header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/header/Header */ "./components/header/Header.js");
/* harmony import */ var components_profile_PhotosModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/profile/PhotosModal */ "./components/profile/PhotosModal.js");
/* harmony import */ var _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/photos.module.scss */ "./containers/Photos/styles/photos.module.scss");
/* harmony import */ var _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var helpers_hoc_requireAuth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! helpers/hoc/requireAuth */ "./helpers/hoc/requireAuth.js");
/* harmony import */ var _storage_PhotoContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./storage/PhotoContext */ "./containers/Photos/storage/PhotoContext.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./actions */ "./containers/Photos/actions/index.js");
/* harmony import */ var _configs_API__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../configs/API */ "./configs/API.js");
var _jsxFileName = "E:\\freeskies_fe_code\\containers\\Photos\\Photos.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











function Photos({
  auth: {
    user
  }
}) {
  _s();

  var _ref;

  const {
    0: storage,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_storage_PhotoContext__WEBPACK_IMPORTED_MODULE_7__["PhotosContext"]);
  const [showModal, hideModal] = Object(react_modal_hook__WEBPACK_IMPORTED_MODULE_2__["useModal"])(({
    in: open
  }) => __jsx(components_profile_PhotosModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Photo detail",
    showModal: open,
    onClose: hideModal,
    data: user === null || user === void 0 ? void 0 : user.recentPhotos,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }));

  const getPhotos = async token => {
    try {
      const request = await Object(_configs_API__WEBPACK_IMPORTED_MODULE_9__["default"])({
        method: 'get',
        url: '/accounts',
        headers: {
          'x-token': auth.token
        }
      });
      const {
        data,
        status
      } = request;

      if (status === 200) {
        console.log(data);
        data.activity = data.activity.map(element => {
          element = filterAccountData(element);
          return element;
        });
        dispatch(setAccountsData(data));
      } else if (status === 403) {
        authServices.refreshToken(getFriends);
      } else {
        message.error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
      }

      if (!withoutLoading) dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_8__["setLoading"])(false));
    } catch (error) {
      console.log(error);
      if (!withoutLoading) dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_8__["setLoading"])(false));
    }
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }, __jsx(components_header_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    withoutSearch: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container, _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container_bg, _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container_radius),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.page_title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, "Photos"), __jsx("div", {
    className: _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, (_ref = []) === null || _ref === void 0 ? void 0 : _ref.map(item => __jsx("div", {
    className: _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.photo_container,
    key: item.id,
    onClick: showModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.photo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "https://www.freeskies.com/static/".concat(item.src),
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  })))))));
}

_s(Photos, "9HkySTn5ygDzcsr+5wbz43DiAX8=", false, function () {
  return [react_modal_hook__WEBPACK_IMPORTED_MODULE_2__["useModal"]];
});

_c = Photos;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(helpers_hoc_requireAuth__WEBPACK_IMPORTED_MODULE_6__["default"])(Photos));

var _c, _c2;

$RefreshReg$(_c, "Photos");
$RefreshReg$(_c2, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9QaG90b3MvUGhvdG9zLmpzIl0sIm5hbWVzIjpbIlBob3RvcyIsImF1dGgiLCJ1c2VyIiwic3RvcmFnZSIsImRpc3BhdGNoIiwidXNlQ29udGV4dCIsIlBob3Rvc0NvbnRleHQiLCJzaG93TW9kYWwiLCJoaWRlTW9kYWwiLCJ1c2VNb2RhbCIsImluIiwib3BlbiIsInJlY2VudFBob3RvcyIsImdldFBob3RvcyIsInRva2VuIiwicmVxdWVzdCIsIkFQSSIsIm1ldGhvZCIsInVybCIsImhlYWRlcnMiLCJkYXRhIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsImFjdGl2aXR5IiwibWFwIiwiZWxlbWVudCIsImZpbHRlckFjY291bnREYXRhIiwic2V0QWNjb3VudHNEYXRhIiwiYXV0aFNlcnZpY2VzIiwicmVmcmVzaFRva2VuIiwiZ2V0RnJpZW5kcyIsIm1lc3NhZ2UiLCJlcnJvciIsIndpdGhvdXRMb2FkaW5nIiwic2V0TG9hZGluZyIsImNsYXNzbmFtZXMiLCJzdHlsZXMiLCJjb250YWluZXIiLCJjb250YWluZXJfYmciLCJjb250YWluZXJfcmFkaXVzIiwicGFnZV90aXRsZSIsImNvbnRlbnQiLCJpdGVtIiwicGhvdG9fY29udGFpbmVyIiwiaWQiLCJwaG90byIsInNyYyIsInJlcXVpcmVBdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsQ0FBZ0I7QUFBRUMsTUFBSSxFQUFFO0FBQUVDO0FBQUY7QUFBUixDQUFoQixFQUFvQztBQUFBOztBQUFBOztBQUVsQyxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBc0JDLHdEQUFVLENBQUNDLG1FQUFELENBQXRDO0FBRUEsUUFBTSxDQUFDQyxTQUFELEVBQVlDLFNBQVosSUFBeUJDLGlF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O0FBQUssT0FBRyw2Q0FBc0NILElBQUksQ0FBQ0ksR0FBM0MsQ0FBUjtBQUEwRCxPQUFHLEVBQUMsRUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBTEYsQ0FERCxDQURILENBVEYsQ0FGRixDQURGO0FBNEJEOztHQXBFUS9DLE07VUFJd0JTLHlEOzs7S0FKeEJULE07QUFzRU0scUVBQUFnRCx1RUFBVyxDQUFDaEQsTUFBRCxDQUExQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9waG90b3MuNTliMmI0YTcxMDQ5NTcxYzE0NjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyB1c2VNb2RhbCB9IGZyb20gJ3JlYWN0LW1vZGFsLWhvb2snO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlcic7XHJcbmltcG9ydCBQaG90b3NNb2RhbCBmcm9tICdjb21wb25lbnRzL3Byb2ZpbGUvUGhvdG9zTW9kYWwnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL3Bob3Rvcy5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCByZXF1aXJlQXV0aCBmcm9tICdoZWxwZXJzL2hvYy9yZXF1aXJlQXV0aCc7XHJcbmltcG9ydCB7IFBob3Rvc0NvbnRleHQgfSBmcm9tICcuL3N0b3JhZ2UvUGhvdG9Db250ZXh0JztcclxuaW1wb3J0IHsgc2V0TG9hZGluZywgc2V0UGhvdG9zIH0gZnJvbSAnLi9hY3Rpb25zJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEFQSSBmcm9tICcuLi8uLi9jb25maWdzL0FQSSc7XHJcblxyXG5mdW5jdGlvbiBQaG90b3MoeyBhdXRoOiB7IHVzZXIgfSB9KSB7XHJcblxyXG4gIGNvbnN0IFtzdG9yYWdlLCBkaXNwYXRjaF0gPSB1c2VDb250ZXh0KFBob3Rvc0NvbnRleHQpO1xyXG4gIFxyXG4gIGNvbnN0IFtzaG93TW9kYWwsIGhpZGVNb2RhbF0gPSB1c2VNb2RhbCgoeyBpbjogb3BlbiB9KSA9PiAoXHJcbiAgICA8UGhvdG9zTW9kYWxcclxuICAgICAgdGl0bGU9XCJQaG90byBkZXRhaWxcIlxyXG4gICAgICBzaG93TW9kYWw9e29wZW59XHJcbiAgICAgIG9uQ2xvc2U9e2hpZGVNb2RhbH1cclxuICAgICAgZGF0YT17dXNlcj8ucmVjZW50UGhvdG9zfVxyXG4gICAgLz5cclxuICApKTtcclxuXHJcbiAgY29uc3QgZ2V0UGhvdG9zID0gYXN5bmMgKHRva2VuKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHVybDogJy9hY2NvdW50cycsXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICBkYXRhLmFjdGl2aXR5ID0gZGF0YS5hY3Rpdml0eS5tYXAoZWxlbWVudCA9PiB7IFxyXG4gICAgICAgICAgZWxlbWVudCA9IGZpbHRlckFjY291bnREYXRhKGVsZW1lbnQpO1xyXG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBkaXNwYXRjaChzZXRBY2NvdW50c0RhdGEoZGF0YSkpO1xyXG4gICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gNDAzKSB7XHJcbiAgICAgICAgYXV0aFNlcnZpY2VzLnJlZnJlc2hUb2tlbihnZXRGcmllbmRzKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIXdpdGhvdXRMb2FkaW5nKSBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIGlmICghd2l0aG91dExvYWRpbmcpIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZGVyIHdpdGhvdXRTZWFyY2ggLz5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcclxuICAgICAgICAgIHN0eWxlcy5jb250YWluZXIsXHJcbiAgICAgICAgICBzdHlsZXMuY29udGFpbmVyX2JnLFxyXG4gICAgICAgICAgc3R5bGVzLmNvbnRhaW5lcl9yYWRpdXNcclxuICAgICAgICApfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWdlX3RpdGxlfT5QaG90b3M8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgIHtbXT8ubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5waG90b19jb250YWluZXJ9XHJcbiAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dNb2RhbH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG99PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2l0ZW0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVxdWlyZUF1dGgoUGhvdG9zKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==