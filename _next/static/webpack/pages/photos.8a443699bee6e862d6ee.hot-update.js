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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var _jsxFileName = "E:\\freeskies_fe_code\\containers\\Photos\\Photos.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












function Photos({
  auth,
  authServices
}) {
  _s();

  const {
    0: storage,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_storage_PhotoContext__WEBPACK_IMPORTED_MODULE_7__["PhotosContext"]);
  const {
    0: photos,
    1: setStatePhotos
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);

  const getPhotos = async token => {
    try {
      const request = await Object(_configs_API__WEBPACK_IMPORTED_MODULE_9__["default"])({
        method: 'post',
        url: '/accounts/photos',
        headers: {
          'x-token': auth.token
        }
      });
      const {
        data,
        status
      } = request;

      if (status === 200) {
        dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_8__["setPhotos"])(data));
      } else if (status === 403) {
        authServices.refreshToken(getPhotos);
      } else {
        antd__WEBPACK_IMPORTED_MODULE_10__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
      }
    } catch (error) {
      console.log(error);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getPhotos();
  }, []);
  const [showModal, hideModal] = Object(react_modal_hook__WEBPACK_IMPORTED_MODULE_2__["useModal"])(({
    in: open
  }) => __jsx(components_profile_PhotosModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Photo detail",
    showModal: open,
    onClose: hideModal,
    data: storage.photosData,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }));
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, __jsx(components_header_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    withoutSearch: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container, _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container_bg, _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container_radius),
    onClick: () => showModal(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.page_title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, "Photos"), __jsx("div", {
    className: _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, storage === null || storage === void 0 ? void 0 : storage.photosData.map(item => __jsx("div", {
    className: _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.photo_container,
    key: item.id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.photo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "https://www.freeskies.com/static/".concat(item.src),
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  })))))));
}

_s(Photos, "YvwCmvPqP3onXYJXDRHUxXYhsgc=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9QaG90b3MvUGhvdG9zLmpzIl0sIm5hbWVzIjpbIlBob3RvcyIsImF1dGgiLCJhdXRoU2VydmljZXMiLCJzdG9yYWdlIiwiZGlzcGF0Y2giLCJ1c2VDb250ZXh0IiwiUGhvdG9zQ29udGV4dCIsInBob3RvcyIsInNldFN0YXRlUGhvdG9zIiwidXNlU3RhdGUiLCJnZXRQaG90b3MiLCJ0b2tlbiIsInJlcXVlc3QiLCJBUEkiLCJtZXRob2QiLCJ1cmwiLCJoZWFkZXJzIiwiZGF0YSIsInN0YXR1cyIsInNldFBob3RvcyIsInJlZnJlc2hUb2tlbiIsIm1lc3NhZ2UiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJzaG93TW9kYWwiLCJoaWRlTW9kYWwiLCJ1c2VNb2RhbCIsImluIiwib3BlbiIsInBob3Rvc0RhdGEiLCJjbGFzc25hbWVzIiwic3R5bGVzIiwiY29udGFpbmVyIiwiY29udGFpbmVyX2JnIiwiY29udGFpbmVyX3JhZGl1cyIsInBhZ2VfdGl0bGUiLCJjb250ZW50IiwibWFwIiwiaXRlbSIsInBob3RvX2NvbnRhaW5lciIsImlkIiwicGhvdG8iLCJzcmMiLCJyZXF1aXJlQXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxNQUFULENBQWdCO0FBQUVDLE1BQUY7QUFBUUM7QUFBUixDQUFoQixFQUF3QztBQUFBOztBQUV0QyxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBc0JDLHdEQUFVLENBQUNDLG1FQUFELENBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQTJCQyxzREFBUSxDQUFDLEVBQUQsQ0FBekM7O0FBRUEsUUFBTUMsU0FBUyxHQUFHLE1BQU9DLEtB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L3dlYnBhY2svcGFnZXMvcGhvdG9zLjhhNDQzNjk5YmVlNmU4NjJkNmVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgdXNlTW9kYWwgfSBmcm9tICdyZWFjdC1tb2RhbC1ob29rJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICdjb21wb25lbnRzL2hlYWRlci9IZWFkZXInO1xyXG5pbXBvcnQgUGhvdG9zTW9kYWwgZnJvbSAnY29tcG9uZW50cy9wcm9maWxlL1Bob3Rvc01vZGFsJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy9waG90b3MubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgcmVxdWlyZUF1dGggZnJvbSAnaGVscGVycy9ob2MvcmVxdWlyZUF1dGgnO1xyXG5pbXBvcnQgeyBQaG90b3NDb250ZXh0IH0gZnJvbSAnLi9zdG9yYWdlL1Bob3RvQ29udGV4dCc7XHJcbmltcG9ydCB7IHNldExvYWRpbmcsIHNldFBob3RvcyB9IGZyb20gJy4vYWN0aW9ucyc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBUEkgZnJvbSAnLi4vLi4vY29uZmlncy9BUEknO1xyXG5pbXBvcnQgeyBCdXR0b24sIFVwbG9hZCwgbWVzc2FnZSwgSW5wdXQsIFRhYnMsIFJhdGUgfSBmcm9tICdhbnRkJztcclxuXHJcbmZ1bmN0aW9uIFBob3Rvcyh7IGF1dGgsIGF1dGhTZXJ2aWNlcyB9KSB7XHJcblxyXG4gIGNvbnN0IFtzdG9yYWdlLCBkaXNwYXRjaF0gPSB1c2VDb250ZXh0KFBob3Rvc0NvbnRleHQpO1xyXG4gIGNvbnN0IFtwaG90b3MsIHNldFN0YXRlUGhvdG9zXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgZ2V0UGhvdG9zID0gYXN5bmMgKHRva2VuKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6ICcvYWNjb3VudHMvcGhvdG9zJyxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIGRpc3BhdGNoKHNldFBob3RvcyhkYXRhKSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSA0MDMpIHtcclxuICAgICAgICBhdXRoU2VydmljZXMucmVmcmVzaFRva2VuKGdldFBob3Rvcyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgfVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRQaG90b3MoKTtcclxuICB9LCBbXSk7XHJcbiAgXHJcblxyXG4gIGNvbnN0IFtzaG93TW9kYWwsIGhpZGVNb2RhbF0gPSB1c2VNb2RhbCgoeyBpbjogb3BlbiB9KSA9PiAoXHJcbiAgICA8UGhvdG9zTW9kYWxcclxuICAgICAgdGl0bGU9XCJQaG90byBkZXRhaWxcIlxyXG4gICAgICBzaG93TW9kYWw9e29wZW59XHJcbiAgICAgIG9uQ2xvc2U9e2hpZGVNb2RhbH1cclxuICAgICAgZGF0YT17c3RvcmFnZS5waG90b3NEYXRhfVxyXG4gICAgLz5cclxuICApKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkZXIgd2l0aG91dFNlYXJjaCAvPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxyXG4gICAgICAgICAgc3R5bGVzLmNvbnRhaW5lcixcclxuICAgICAgICAgIHN0eWxlcy5jb250YWluZXJfYmcsXHJcbiAgICAgICAgICBzdHlsZXMuY29udGFpbmVyX3JhZGl1c1xyXG4gICAgICAgICl9XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2hvd01vZGFsKCl9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhZ2VfdGl0bGV9PlBob3RvczwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAge3N0b3JhZ2U/LnBob3Rvc0RhdGEubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5waG90b19jb250YWluZXJ9XHJcbiAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5waG90b30+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aXRlbS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZXF1aXJlQXV0aChQaG90b3MpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9