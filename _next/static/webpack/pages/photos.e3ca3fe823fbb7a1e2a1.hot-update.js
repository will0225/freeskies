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
        console.log(data);
        console.log(data);
      } else if (status === 403) {
        authServices.refreshToken(getPhotos);
      } else {
        message.error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
      }
    } catch (error) {
      console.log(error);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log('PHoto getting ');
    getPhotos();
  }, []);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, __jsx(components_header_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    withoutSearch: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container, _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container_bg, _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container_radius),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.page_title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, "Photos"), __jsx("div", {
    className: _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, (_ref = []) === null || _ref === void 0 ? void 0 : _ref.map(item => __jsx("div", {
    className: _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.photo_container,
    key: item.id,
    onClick: showModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.photo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "https://www.freeskies.com/static/".concat(item.src),
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  })))))));
}

_s(Photos, "Jyc8v2lkFxzvoBOPWUBbk3zP8JU=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9QaG90b3MvUGhvdG9zLmpzIl0sIm5hbWVzIjpbIlBob3RvcyIsImF1dGgiLCJ1c2VyIiwic3RvcmFnZSIsImRpc3BhdGNoIiwidXNlQ29udGV4dCIsIlBob3Rvc0NvbnRleHQiLCJzaG93TW9kYWwiLCJoaWRlTW9kYWwiLCJ1c2VNb2RhbCIsImluIiwib3BlbiIsInJlY2VudFBob3RvcyIsImdldFBob3RvcyIsInRva2VuIiwicmVxdWVzdCIsIkFQSSIsIm1ldGhvZCIsInVybCIsImhlYWRlcnMiLCJkYXRhIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsImF1dGhTZXJ2aWNlcyIsInJlZnJlc2hUb2tlbiIsIm1lc3NhZ2UiLCJlcnJvciIsInVzZUVmZmVjdCIsImNsYXNzbmFtZXMiLCJzdHlsZXMiLCJjb250YWluZXIiLCJjb250YWluZXJfYmciLCJjb250YWluZXJfcmFkaXVzIiwicGFnZV90aXRsZSIsImNvbnRlbnQiLCJtYXAiLCJpdGVtIiwicGhvdG9fY29udGFpbmVyIiwiaWQiLCJwaG90byIsInNyYyIsInJlcXVpcmVBdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsQ0FBZ0I7QUFBRUMsTUFBSSxFQUFFO0FBQUVDO0FBQUY7QUFBUixDQUFoQixFQUFvQztBQUFBOztBQUFBOztBQUVsQyxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBc0JDLHdEQUFVLENBQUNDLG1FQUFELENBQXRDO0FBRUEsUUFBTSxDQUFDQyxTQUFELEVBQVlDLFNBQVosSUFBeUJDLGlFQUFRLENBQUMsQ0FBQztBQUFFQyxNQUFFLEVBQUVDO0FBQU4sR0FBRCxLQUN0QyxNQUFDLHNFQUFEO0FBQ0UsU0FBSyxFQUFDLGNBRFI7QUFFRSxhQUFTLEVBQUVBLElBRmI7QUFHRSxXQUFPLEVBQUVILFNBSFg7QUFJRSxRQUFJLEVBQUVOLElBQUYsYUFBRUEsSUFBRix1QkFBRUEsSUFBSSxDQUFFVSxZQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEcUMsQ0FBdkM7O0FBU0EsUUFBTUMsU0FBUyxHQUFHLE1BQU9DLEtBQVAsSUFBaUI7QUFDakMsUUFBSTtBQUNGLFlBQU1DLE9BQU8sR0FBRyxNQUFNQyw0REFBRyxDQUFDO0FBQ3hCQyxjQUFNLEVBQUUsS0FEZ0I7QUFFeEJDLFdBQUcsRUFBRSxrQkFGbUI7QUFHeEJDLGVBQU8sRUFBRTtBQUFFLHFCQUFXbEIsSUFBSSxDQUFDYTtBQUFsQjtBQUhlLE9BQUQsQ0FBekI7QUFLQSxZQUFNO0FBQUVNLFlBQUY7QUFBUUM7QUFBUixVQUFtQk4sT0FBekI7O0FBQ0EsVUFBSU0sTUFBTSxLQUFLLEdBQWYsRUFBb0I7QUFBQ0MsZUFBTyxDQUFDQyxHQUFSLENBQVlILElBQVo7QUFDbkJFLGVBQU8sQ0FBQ0MsR0FBUixDQUFZSCxJQUFaO0FBQ0QsT0FGRCxNQUVPLElBQUlDLE1BQU0sS0FBSyxHQUFmLEVBQW9CO0FBQ3pCRyxvQkFBWSxDQUFDQyxZQUFiLENBQTBCWixTQUExQjtBQUNELE9BRk0sTUFFQTtBQUNMYSxlQUFPLENBQUNDLEtBQVIsQ0FBYyxDQUFBUCxJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLFlBQUFBLElBQUksQ0FBRU0sT0FBTixLQUFpQixpQkFBL0I7QUFDRDtBQUVGLEtBZkQsQ0FlRSxPQUFPQyxLQUFQLEVBQWM7QUFDZEwsYUFBTyxDQUFDQyxHQUFSLENBQVlJLEtBQVo7QUFDRDtBQUNGLEdBbkJEOztBQXFCQUMseURBQVMsQ0FBQyxNQUFNO0FBQUNOLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaO0FBQ2ZWLGFBQVM7QUFDVixHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnRUFBRDtBQUFRLGlCQUFhLE1BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQ0UsYUFBUyxFQUFFZ0IsaURBQVUsQ0FDbkJDLGlFQUFNLENBQUNDLFNBRFksRUFFbkJELGlFQUFNLENBQUNFLFlBRlksRUFHbkJGLGlFQUFNLENBQUNHLGdCQUhZLENBRHZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPRTtBQUFLLGFBQVMsRUFBRUgsaUVBQU0sQ0FBQ0ksVUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGLEVBU0U7QUFBSyxhQUFTLEVBQUVKLGlFQUFNLENBQUNLLE9BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFDRyxFQURILHlDQUNHLEtBQUlDLEdBQUosQ0FBU0MsSUFBRCxJQUNQO0FBQ0UsYUFBUyxFQUFFUCxpRUFBTSxDQUFDUSxlQURwQjtBQUVFLE9BQUcsRUFBRUQsSUFBSSxDQUFDRSxFQUZaO0FBR0UsV0FBTyxFQUFFaEMsU0FIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0U7QUFBSyxhQUFTLEVBQUV1QixpRUFBTSxDQUFDVSxLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLDZDQUFzQ0gsSUFBSSxDQUFDSSxHQUEzQyxDQUFSO0FBQTBELE9BQUcsRUFBQyxFQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FMRixDQURELENBREgsQ0FURixDQUZGLENBREY7QUE0QkQ7O0dBbEVRekMsTTtVQUl3QlMseUQ7OztLQUp4QlQsTTtBQW9FTSxxRUFBQTBDLHVFQUFXLENBQUMxQyxNQUFELENBQTFCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bob3Rvcy5lM2NhM2ZlODIzZmJiN2ExZTJhMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7IHVzZU1vZGFsIH0gZnJvbSAncmVhY3QtbW9kYWwtaG9vayc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyJztcclxuaW1wb3J0IFBob3Rvc01vZGFsIGZyb20gJ2NvbXBvbmVudHMvcHJvZmlsZS9QaG90b3NNb2RhbCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvcGhvdG9zLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHJlcXVpcmVBdXRoIGZyb20gJ2hlbHBlcnMvaG9jL3JlcXVpcmVBdXRoJztcclxuaW1wb3J0IHsgUGhvdG9zQ29udGV4dCB9IGZyb20gJy4vc3RvcmFnZS9QaG90b0NvbnRleHQnO1xyXG5pbXBvcnQgeyBzZXRMb2FkaW5nLCBzZXRQaG90b3MgfSBmcm9tICcuL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQVBJIGZyb20gJy4uLy4uL2NvbmZpZ3MvQVBJJztcclxuXHJcbmZ1bmN0aW9uIFBob3Rvcyh7IGF1dGg6IHsgdXNlciB9IH0pIHtcclxuXHJcbiAgY29uc3QgW3N0b3JhZ2UsIGRpc3BhdGNoXSA9IHVzZUNvbnRleHQoUGhvdG9zQ29udGV4dCk7XHJcbiAgXHJcbiAgY29uc3QgW3Nob3dNb2RhbCwgaGlkZU1vZGFsXSA9IHVzZU1vZGFsKCh7IGluOiBvcGVuIH0pID0+IChcclxuICAgIDxQaG90b3NNb2RhbFxyXG4gICAgICB0aXRsZT1cIlBob3RvIGRldGFpbFwiXHJcbiAgICAgIHNob3dNb2RhbD17b3Blbn1cclxuICAgICAgb25DbG9zZT17aGlkZU1vZGFsfVxyXG4gICAgICBkYXRhPXt1c2VyPy5yZWNlbnRQaG90b3N9XHJcbiAgICAvPlxyXG4gICkpO1xyXG5cclxuICBjb25zdCBnZXRQaG90b3MgPSBhc3luYyAodG9rZW4pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgdXJsOiAnL2FjY291bnRzL3Bob3RvcycsXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IDQwMykge1xyXG4gICAgICAgIGF1dGhTZXJ2aWNlcy5yZWZyZXNoVG9rZW4oZ2V0UGhvdG9zKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtjb25zb2xlLmxvZygnUEhvdG8gZ2V0dGluZyAnKVxyXG4gICAgZ2V0UGhvdG9zKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWRlciB3aXRob3V0U2VhcmNoIC8+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXHJcbiAgICAgICAgICBzdHlsZXMuY29udGFpbmVyLFxyXG4gICAgICAgICAgc3R5bGVzLmNvbnRhaW5lcl9iZyxcclxuICAgICAgICAgIHN0eWxlcy5jb250YWluZXJfcmFkaXVzXHJcbiAgICAgICAgKX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnZV90aXRsZX0+UGhvdG9zPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICB7W10/Lm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9fY29udGFpbmVyfVxyXG4gICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtzaG93TW9kYWx9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBob3RvfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpdGVtLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlcXVpcmVBdXRoKFBob3Rvcyk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=