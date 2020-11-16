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
/* harmony import */ var components_photos_PostingPhotos__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/photos/PostingPhotos */ "./components/photos/PostingPhotos.js");
/* harmony import */ var _components_common_ModalWrapper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/common/ModalWrapper */ "./components/common/ModalWrapper.js");
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
  const {
    0: postModal,
    1: setPostModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

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

  const onPosting = async requestData => {
    try {
      const request = await Object(_configs_API__WEBPACK_IMPORTED_MODULE_9__["default"])({
        method: 'post',
        url: '/photos',
        data: requestData,
        headers: {
          'x-token': auth.token
        }
      });
      const {
        data,
        status
      } = request;

      if (status === 201) {
        setPostModal(0);
        dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_8__["setPhotos"])([...storage.photosData, data]));
      } else if (status === 403) {
        authServices.refreshToken(onPosting);
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
    data: storage === null || storage === void 0 ? void 0 : storage.photosData,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 5
    }
  }));
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 5
    }
  }, __jsx(components_header_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container, _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container_bg, _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container_radius),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.page_title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, "Photos", __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Button"], {
    style: {
      float: 'right',
      background: 'transparent',
      color: '#0d7ac7'
    },
    onClick: () => setPostModal(true),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }, "Add Photos/Video")), __jsx("div", {
    className: _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, storage === null || storage === void 0 ? void 0 : storage.photosData.map(item => __jsx("div", {
    className: _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.photo_container,
    key: item.id,
    onClick: () => showModal(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.photo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "https://www.freeskies.com/static/".concat(item.src),
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 17
    }
  })))))), __jsx(_components_common_ModalWrapper__WEBPACK_IMPORTED_MODULE_12__["default"], {
    title: "Create Photos",
    showModal: postModal,
    onClose: () => setPostModal(0),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }
  }, __jsx(components_photos_PostingPhotos__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onPosting: onPosting,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 11
    }
  })));
}

_s(Photos, "UP15JARUBSiSWhIK4WHNmieC5NY=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9QaG90b3MvUGhvdG9zLmpzIl0sIm5hbWVzIjpbIlBob3RvcyIsImF1dGgiLCJhdXRoU2VydmljZXMiLCJzdG9yYWdlIiwiZGlzcGF0Y2giLCJ1c2VDb250ZXh0IiwiUGhvdG9zQ29udGV4dCIsInBob3RvcyIsInNldFN0YXRlUGhvdG9zIiwidXNlU3RhdGUiLCJwb3N0TW9kYWwiLCJzZXRQb3N0TW9kYWwiLCJnZXRQaG90b3MiLCJ0b2tlbiIsInJlcXVlc3QiLCJBUEkiLCJtZXRob2QiLCJ1cmwiLCJoZWFkZXJzIiwiZGF0YSIsInN0YXR1cyIsInNldFBob3RvcyIsInJlZnJlc2hUb2tlbiIsIm1lc3NhZ2UiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJvblBvc3RpbmciLCJyZXF1ZXN0RGF0YSIsInBob3Rvc0RhdGEiLCJ1c2VFZmZlY3QiLCJzaG93TW9kYWwiLCJoaWRlTW9kYWwiLCJ1c2VNb2RhbCIsImluIiwib3BlbiIsImNsYXNzbmFtZXMiLCJzdHlsZXMiLCJjb250YWluZXIiLCJjb250YWluZXJfYmciLCJjb250YWluZXJfcmFkaXVzIiwicGFnZV90aXRsZSIsImZsb2F0IiwiYmFja2dyb3VuZCIsImNvbG9yIiwiY29udGVudCIsIm1hcCIsIml0ZW0iLCJwaG90b19jb250YWluZXIiLCJpZCIsInBob3RvIiwic3JjIiwicmVxdWlyZUF1dGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxDQUFnQjtBQUFFQyxNQUFGO0FBQVFDO0FBQVIsQ0FBaEIsRUFBd0M7QUFBQTs7QUFFdEMsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXNCQyx3REFBVSxDQUFDQyxtRUFBRCxDQUF0QztBQUNBLFFB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUxGLENBREQsQ0FESCxDQVpGLENBRkYsRUE0QkUsTUFBQyx3RUFBRDtBQUNJLFNBQUssRUFBQyxlQURWO0FBRUksYUFBUyxFQUFFekMsU0FGZjtBQUdJLFdBQU8sRUFBRSxNQUFNQyxZQUFZLENBQUMsQ0FBRCxDQUgvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0ksTUFBQyx3RUFBRDtBQUFlLGFBQVMsRUFBRWdCLFNBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMSixDQTVCRixDQURGO0FBc0NEOztHQXRHUTNCLE07VUF1RHdCaUMseUQ7OztLQXZEeEJqQyxNO0FBd0dNLHFFQUFBb0QsdUVBQVcsQ0FBQ3BELE1BQUQsQ0FBMUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGhvdG9zLmNmOGJiZTE2Y2Y5ZTYxNjRhMjc1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgdXNlTW9kYWwgfSBmcm9tICdyZWFjdC1tb2RhbC1ob29rJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICdjb21wb25lbnRzL2hlYWRlci9IZWFkZXInO1xyXG5pbXBvcnQgUGhvdG9zTW9kYWwgZnJvbSAnY29tcG9uZW50cy9wcm9maWxlL1Bob3Rvc01vZGFsJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy9waG90b3MubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgcmVxdWlyZUF1dGggZnJvbSAnaGVscGVycy9ob2MvcmVxdWlyZUF1dGgnO1xyXG5pbXBvcnQgeyBQaG90b3NDb250ZXh0IH0gZnJvbSAnLi9zdG9yYWdlL1Bob3RvQ29udGV4dCc7XHJcbmltcG9ydCB7IHNldExvYWRpbmcsIHNldFBob3RvcyB9IGZyb20gJy4vYWN0aW9ucyc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBUEkgZnJvbSAnLi4vLi4vY29uZmlncy9BUEknO1xyXG5pbXBvcnQgeyBCdXR0b24sIFVwbG9hZCwgbWVzc2FnZSwgSW5wdXQsIFRhYnMsIFJhdGUgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0ICBQb3N0aW5nUGhvdG9zICBmcm9tICdjb21wb25lbnRzL3Bob3Rvcy9Qb3N0aW5nUGhvdG9zJztcclxuaW1wb3J0IE1vZGFsV3JhcHBlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9Nb2RhbFdyYXBwZXInO1xyXG5cclxuZnVuY3Rpb24gUGhvdG9zKHsgYXV0aCwgYXV0aFNlcnZpY2VzIH0pIHtcclxuXHJcbiAgY29uc3QgW3N0b3JhZ2UsIGRpc3BhdGNoXSA9IHVzZUNvbnRleHQoUGhvdG9zQ29udGV4dCk7XHJcbiAgY29uc3QgW3Bob3Rvcywgc2V0U3RhdGVQaG90b3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtwb3N0TW9kYWwsIHNldFBvc3RNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGdldFBob3RvcyA9IGFzeW5jICh0b2tlbikgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsOiAnL2FjY291bnRzL3Bob3RvcycsXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBkaXNwYXRjaChzZXRQaG90b3MoZGF0YSkpO1xyXG4gICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gNDAzKSB7XHJcbiAgICAgICAgYXV0aFNlcnZpY2VzLnJlZnJlc2hUb2tlbihnZXRQaG90b3MpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBvblBvc3RpbmcgPSBhc3luYyAocmVxdWVzdERhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybDogJy9waG90b3MnLFxyXG4gICAgICAgIGRhdGE6IHJlcXVlc3REYXRhLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgc2V0UG9zdE1vZGFsKDApO1xyXG4gICAgICAgIGRpc3BhdGNoKHNldFBob3RvcyhbLi4uc3RvcmFnZS5waG90b3NEYXRhLCBkYXRhXSkpXHJcbiAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSA0MDMpIHtcclxuICAgICAgICBhdXRoU2VydmljZXMucmVmcmVzaFRva2VuKG9uUG9zdGluZyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgfVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRQaG90b3MoKTtcclxuICB9LCBbXSk7XHJcbiAgXHJcblxyXG4gIGNvbnN0IFtzaG93TW9kYWwsIGhpZGVNb2RhbF0gPSB1c2VNb2RhbCgoeyBpbjogb3BlbiB9KSA9PiAoXHJcbiAgICA8UGhvdG9zTW9kYWxcclxuICAgICAgdGl0bGU9XCJQaG90byBkZXRhaWxcIlxyXG4gICAgICBzaG93TW9kYWw9e29wZW59XHJcbiAgICAgIG9uQ2xvc2U9e2hpZGVNb2RhbH1cclxuICAgICAgZGF0YT17c3RvcmFnZT8ucGhvdG9zRGF0YX1cclxuICAgIC8+XHJcbiAgKSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXHJcbiAgICAgICAgICBzdHlsZXMuY29udGFpbmVyLFxyXG4gICAgICAgICAgc3R5bGVzLmNvbnRhaW5lcl9iZyxcclxuICAgICAgICAgIHN0eWxlcy5jb250YWluZXJfcmFkaXVzXHJcbiAgICAgICAgKX1cclxuICAgICAgICBcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnZV90aXRsZX0+XHJcbiAgICAgICAgICBQaG90b3NcclxuICAgICAgICAgIDxCdXR0b24gc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcsIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsIGNvbG9yOiAnIzBkN2FjNycgfX0gb25DbGljaz17KCkgPT4gc2V0UG9zdE1vZGFsKHRydWUpfT5BZGQgUGhvdG9zL1ZpZGVvPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgIHtzdG9yYWdlPy5waG90b3NEYXRhLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9fY29udGFpbmVyfVxyXG4gICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzaG93TW9kYWwoKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG99PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2l0ZW0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TW9kYWxXcmFwcGVyXHJcbiAgICAgICAgICB0aXRsZT1cIkNyZWF0ZSBQaG90b3NcIlxyXG4gICAgICAgICAgc2hvd01vZGFsPXtwb3N0TW9kYWx9XHJcbiAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRQb3N0TW9kYWwoMCl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFBvc3RpbmdQaG90b3Mgb25Qb3N0aW5nPXtvblBvc3Rpbmd9Lz5cclxuICAgICAgPC9Nb2RhbFdyYXBwZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZXF1aXJlQXV0aChQaG90b3MpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9