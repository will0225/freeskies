webpackHotUpdate_N_E("pages/profile",{

/***/ "./containers/Profile/edit.js":
/*!************************************!*\
  !*** ./containers/Profile/edit.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/profile.module.scss */ "./containers/Profile/styles/profile.module.scss");
/* harmony import */ var _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _configs_API__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../configs/API */ "./configs/API.js");
/* harmony import */ var components_profile_PhotoSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/profile/PhotoSection */ "./components/profile/PhotoSection.js");
/* harmony import */ var components_profile_FeedPosts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/profile/FeedPosts */ "./components/profile/FeedPosts.js");
/* harmony import */ var components_profile_PostingPost__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/profile/PostingPost */ "./components/profile/PostingPost.js");
/* harmony import */ var components_profile_RatedSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/profile/RatedSection */ "./components/profile/RatedSection.js");
/* harmony import */ var helpers_hoc_requireAuth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! helpers/hoc/requireAuth */ "./helpers/hoc/requireAuth.js");
/* harmony import */ var _storage_ProfileContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./storage/ProfileContext */ "./containers/Profile/storage/ProfileContext.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./actions */ "./containers/Profile/actions/index.js");
/* harmony import */ var _components_common_Avatar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/common/Avatar */ "./components/common/Avatar.js");
/* harmony import */ var react_rating__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-rating */ "./node_modules/react-rating/lib/react-rating.esm.js");
/* harmony import */ var components_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/forms */ "./components/forms/index.js");
var _jsxFileName = "E:\\freeskies_fe_code\\containers\\Profile\\edit.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















const {
  TextArea
} = antd__WEBPACK_IMPORTED_MODULE_4__["Input"];

function EditProfile({
  auth,
  onUpdate,
  loading
}) {
  _s();

  const {
    0: storage,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_storage_ProfileContext__WEBPACK_IMPORTED_MODULE_11__["ProfileContext"]);
  const {
    accountData
  } = storage;
  console.log(accountData);
  const {
    0: text,
    1: setText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(accountData === null || accountData === void 0 ? void 0 : accountData.lastName);
  const {
    0: profilePhoto,
    1: setProfilePhoto
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: backgroundPhoto,
    1: setBackgroundPhoto
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);

  const handleChangeText = e => {
    console.log(text);
    setText(e.target.value);
  };

  const handleChangeTabActive = activeKey => {
    setActiveType(activeKey);
  };

  const handleSubmit = async () => {
    try {
      let dataForRequest;
      const formData = new FormData();

      for (var i = 0; i < profilePhoto.length; i++) {
        if (profilePhoto[i].type.split('/')[0] === 'image') {
          formData.append('profilePhoto', profilePhoto[i]);
        } else {
          formData.append('videos', profilePhoto[i]);
        }
      }

      for (var i = 0; i < backgroundPhoto.length; i++) {
        if (backgroundPhoto[i].type.split('/')[0] === 'image') {
          formData.append('profileBackgroundImage', backgroundPhoto[i]);
        } else {
          formData.append('videos', backgroundPhoto[i]);
        }
      }

      if (text.length !== 0) {
        formData.append('lastName', text);
      }

      dataForRequest = formData;
      onUpdate(dataForRequest);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangePhotoFile = files => {
    console.log(files);
    setProfilePhoto(files);
  };

  const handleChangeBackgroundFile = files => {
    console.log(files);
    setBackgroundPhoto(files);
  };

  return __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.editContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 5
    }
  }, __jsx("p", {
    style: {
      color: 'white'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, "User Name"), __jsx(TextArea, {
    value: text,
    onChange: handleChangeText,
    placeholder: "Write a message",
    autoSize: {
      minRows: 2,
      maxRows: 5
    },
    style: {
      borderRadius: 90,
      marginBottom: 20,
      paddingTop: 13,
      paddingLeft: 23,
      color: 'white'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }), __jsx("p", {
    style: {
      color: 'white'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }, "Profile Phooto"), __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.file_place,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, __jsx(components_forms__WEBPACK_IMPORTED_MODULE_15__["FileDrop"], {
    files: profilePhoto,
    onChange: handleChangePhotoFile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  })), __jsx("p", {
    style: {
      color: 'white'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }, "Profile Background"), __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.file_place,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }, __jsx(components_forms__WEBPACK_IMPORTED_MODULE_15__["FileDrop"], {
    files: backgroundPhoto,
    onChange: handleChangeBackgroundFile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.actions_container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "primary",
    loading: loading,
    onClick: handleSubmit,
    style: {
      width: '100%',
      fontSize: '20px',
      height: '50px',
      borderRadius: '6px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, "Edit")));
}

_s(EditProfile, "KQLDBPiG1/EWALNT6MS+c93qP8I=");

_c = EditProfile;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(helpers_hoc_requireAuth__WEBPACK_IMPORTED_MODULE_10__["default"])(EditProfile));

var _c, _c2;

$RefreshReg$(_c, "EditProfile");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9Qcm9maWxlL2VkaXQuanMiXSwibmFtZXMiOlsiVGV4dEFyZWEiLCJJbnB1dCIsIkVkaXRQcm9maWxlIiwiYXV0aCIsIm9uVXBkYXRlIiwibG9hZGluZyIsInN0b3JhZ2UiLCJkaXNwYXRjaCIsInVzZUNvbnRleHQiLCJQcm9maWxlQ29udGV4dCIsImFjY291bnREYXRhIiwiY29uc29sZSIsImxvZyIsInRleHQiLCJzZXRUZXh0IiwidXNlU3RhdGUiLCJsYXN0TmFtZSIsInByb2ZpbGVQaG90byIsInNldFByb2ZpbGVQaG90byIsImJhY2tncm91bmRQaG90byIsInNldEJhY2tncm91bmRQaG90byIsImhhbmRsZUNoYW5nZVRleHQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVDaGFuZ2VUYWJBY3RpdmUiLCJhY3RpdmVLZXkiLCJzZXRBY3RpdmVUeXBlIiwiaGFuZGxlU3VibWl0IiwiZGF0YUZvclJlcXVlc3QiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiaSIsImxlbmd0aCIsInR5cGUiLCJzcGxpdCIsImFwcGVuZCIsImVycm9yIiwiaGFuZGxlQ2hhbmdlUGhvdG9GaWxlIiwiZmlsZXMiLCJoYW5kbGVDaGFuZ2VCYWNrZ3JvdW5kRmlsZSIsInN0eWxlcyIsImVkaXRDb250YWluZXIiLCJjb2xvciIsIm1pblJvd3MiLCJtYXhSb3dzIiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luQm90dG9tIiwicGFkZGluZ1RvcCIsInBhZGRpbmdMZWZ0IiwiZmlsZV9wbGFjZSIsImFjdGlvbnNfY29udGFpbmVyIiwid2lkdGgiLCJmb250U2l6ZSIsImhlaWdodCIsInJlcXVpcmVBdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFBQTtBQUFBLElBREYsQ0FWRixFQWFFO0FBQUcsU0FBSyxFQUFFO0FBQUVLLFdBQUssRUFBRTtBQUFULEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFiRixFQWNFO0FBQUssYUFBUyxFQUFFRixrRUFBTSxDQUFDUyxVQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwREFBRDtBQUFVLFNBQUssRUFBRS9CLGVBQWpCO0FBQWtDLFlBQVEsRUFBRXFCLDBCQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FkRixFQWtCRTtBQUFLLGFBQVMsRUFBRUMsa0VBQU0sQ0FBQ1UsaUJBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJDQUFEO0FBQVEsUUFBSSxFQUFDLFNBQWI7QUFBdUIsV0FBTyxFQUFFOUMsT0FBaEM7QUFBMEMsV0FBTyxFQUFFdUIsWUFBbkQ7QUFBaUUsU0FBSyxFQUFFO0FBQUV3QixXQUFLLEVBQUUsTUFBVDtBQUFpQkMsY0FBUSxFQUFFLE1BQTNCO0FBQW1DQyxZQUFNLEVBQUUsTUFBM0M7QUFBbURSLGtCQUFZLEVBQUU7QUFBakUsS0FBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLENBbEJGLENBREY7QUEyQkQ7O0dBakZRNUMsVzs7S0FBQUEsVztBQW1GTSxxRUFBQXFELHdFQUFXLENBQUNyRCxXQUFELENBQTFCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuMjQ0MjVlM2JhNTAwMzFlOTQ4ZjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvcHJvZmlsZS5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyBDYW1lcmFPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgQnV0dG9uLCBVcGxvYWQsIG1lc3NhZ2UsIElucHV0LCBUYWJzLCBSYXRlIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBBUEkgZnJvbSAnLi4vLi4vY29uZmlncy9BUEknO1xyXG5pbXBvcnQgUGhvdG9TZWN0aW9uIGZyb20gJ2NvbXBvbmVudHMvcHJvZmlsZS9QaG90b1NlY3Rpb24nO1xyXG5pbXBvcnQgRmVlZFBvc3RzIGZyb20gJ2NvbXBvbmVudHMvcHJvZmlsZS9GZWVkUG9zdHMnO1xyXG5pbXBvcnQgUG9zdGluZ1Bvc3QgZnJvbSAnY29tcG9uZW50cy9wcm9maWxlL1Bvc3RpbmdQb3N0JztcclxuaW1wb3J0IFJhdGVkU2VjdGlvbiBmcm9tICdjb21wb25lbnRzL3Byb2ZpbGUvUmF0ZWRTZWN0aW9uJztcclxuaW1wb3J0IHJlcXVpcmVBdXRoIGZyb20gJ2hlbHBlcnMvaG9jL3JlcXVpcmVBdXRoJztcclxuaW1wb3J0IHsgUHJvZmlsZUNvbnRleHQgfSBmcm9tICcuL3N0b3JhZ2UvUHJvZmlsZUNvbnRleHQnO1xyXG5pbXBvcnQgeyBzZXRMb2FkaW5nLCBzZXRGcmllbmRzRGF0YSwgc2V0QWNjb3VudHNEYXRhIH0gZnJvbSAnLi9hY3Rpb25zJztcclxuaW1wb3J0IEF2YXRhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9BdmF0YXInO1xyXG5pbXBvcnQgUmF0aW5nICBmcm9tICdyZWFjdC1yYXRpbmcnO1xyXG5pbXBvcnQgeyBGaWxlRHJvcCB9IGZyb20gJ2NvbXBvbmVudHMvZm9ybXMnO1xyXG5cclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcblxyXG5mdW5jdGlvbiBFZGl0UHJvZmlsZSh7IGF1dGgsIG9uVXBkYXRlLCBsb2FkaW5nIH0pIHtcclxuICBcclxuICBjb25zdCBbc3RvcmFnZSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChQcm9maWxlQ29udGV4dCk7XHJcbiAgY29uc3QgeyBhY2NvdW50RGF0YSB9ID0gc3RvcmFnZTtjb25zb2xlLmxvZyhhY2NvdW50RGF0YSk7XHJcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoYWNjb3VudERhdGE/Lmxhc3ROYW1lKTtcclxuICBjb25zdCBbcHJvZmlsZVBob3RvLCBzZXRQcm9maWxlUGhvdG9dID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtiYWNrZ3JvdW5kUGhvdG8sIHNldEJhY2tncm91bmRQaG90b10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVRleHQgPSAoZSkgPT4ge2NvbnNvbGUubG9nKHRleHQpXHJcbiAgICBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVRhYkFjdGl2ZSA9IChhY3RpdmVLZXkpID0+IHtcclxuICAgIHNldEFjdGl2ZVR5cGUoYWN0aXZlS2V5KTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCBkYXRhRm9yUmVxdWVzdDtcclxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGE7XHJcbiAgICAgXHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvZmlsZVBob3RvLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHByb2ZpbGVQaG90b1tpXS50eXBlLnNwbGl0KCcvJylbMF0gPT09ICdpbWFnZScpIHtcclxuICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncHJvZmlsZVBob3RvJywgcHJvZmlsZVBob3RvW2ldKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd2aWRlb3MnLCBwcm9maWxlUGhvdG9baV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBiYWNrZ3JvdW5kUGhvdG8ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoYmFja2dyb3VuZFBob3RvW2ldLnR5cGUuc3BsaXQoJy8nKVswXSA9PT0gJ2ltYWdlJykge1xyXG4gICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdwcm9maWxlQmFja2dyb3VuZEltYWdlJywgYmFja2dyb3VuZFBob3RvW2ldKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd2aWRlb3MnLCBiYWNrZ3JvdW5kUGhvdG9baV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaWYgKHRleHQubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdsYXN0TmFtZScsIHRleHQpXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGRhdGFGb3JSZXF1ZXN0ID0gZm9ybURhdGFcclxuICAgICAgb25VcGRhdGUoZGF0YUZvclJlcXVlc3QpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVBob3RvRmlsZSA9IChmaWxlcykgPT4ge2NvbnNvbGUubG9nKGZpbGVzKTtcclxuICAgIHNldFByb2ZpbGVQaG90byhmaWxlcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlQmFja2dyb3VuZEZpbGUgPSAoZmlsZXMpID0+IHtjb25zb2xlLmxvZyhmaWxlcyk7XHJcbiAgICBzZXRCYWNrZ3JvdW5kUGhvdG8oZmlsZXMpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVkaXRDb250YWluZXJ9PlxyXG4gICAgICA8cCBzdHlsZT17eyBjb2xvcjogJ3doaXRlJ319PlVzZXIgTmFtZTwvcD5cclxuICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICB2YWx1ZT17dGV4dH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VUZXh0fVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJXcml0ZSBhIG1lc3NhZ2VcIlxyXG4gICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMiwgbWF4Um93czogNSB9fVxyXG4gICAgICAgICAgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiA5MCwgbWFyZ2luQm90dG9tOiAyMCwgcGFkZGluZ1RvcDogMTMsIHBhZGRpbmdMZWZ0OiAyMywgY29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8cCBzdHlsZT17eyBjb2xvcjogJ3doaXRlJ319PlByb2ZpbGUgUGhvb3RvPC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpbGVfcGxhY2V9PlxyXG4gICAgICAgIDxGaWxlRHJvcCBmaWxlcz17cHJvZmlsZVBob3RvfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlUGhvdG9GaWxlfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZSd9fT5Qcm9maWxlIEJhY2tncm91bmQ8L3A+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmlsZV9wbGFjZX0+XHJcbiAgICAgICAgPEZpbGVEcm9wIGZpbGVzPXtiYWNrZ3JvdW5kUGhvdG99IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VCYWNrZ3JvdW5kRmlsZX0gLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvbnNfY29udGFpbmVyfT5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgbG9hZGluZz17bG9hZGluZ30gIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0gc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgZm9udFNpemU6ICcyMHB4JywgaGVpZ2h0OiAnNTBweCcsIGJvcmRlclJhZGl1czogJzZweCd9fT5cclxuICAgICAgICAgIEVkaXRcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZXF1aXJlQXV0aChFZGl0UHJvZmlsZSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=