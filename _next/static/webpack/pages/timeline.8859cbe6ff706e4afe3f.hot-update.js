webpackHotUpdate_N_E("pages/timeline",{

/***/ "./components/profile/PostingPost.js":
/*!*******************************************!*\
  !*** ./components/profile/PostingPost.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostingPost; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var components_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/forms */ "./components/forms/index.js");
/* harmony import */ var _styles_posting_post_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/posting-post.module.scss */ "./components/profile/styles/posting-post.module.scss");
/* harmony import */ var _styles_posting_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_posting_post_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _PostModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PostModal */ "./components/profile/PostModal.js");
/* harmony import */ var react_modal_hook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-modal-hook */ "./node_modules/react-modal-hook/dist/index.es.js");
var _jsxFileName = "E:\\freeskies_fe_code\\components\\profile\\PostingPost.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const {
  TextArea
} = antd__WEBPACK_IMPORTED_MODULE_1__["Input"];
const {
  TabPane
} = antd__WEBPACK_IMPORTED_MODULE_1__["Tabs"];
function PostingPost({
  onPosting,
  loading,
  PostingPost
}) {
  _s();

  const {
    0: text,
    1: setText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: files,
    1: setFiles
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]); // const [activeType, setActiveType] = useState('text');

  const handleChangeText = e => {
    setText(e.target.value);
  };

  const handleChangeTabActive = activeKey => {
    setActiveType(activeKey);
  };

  const handleSubmit = async () => {
    try {
      let dataForRequest;
      const formData = new FormData();

      for (var i = 0; i < files.length; i++) {
        if (files[i].type.split('/')[0] === 'image') {
          formData.append('images', files[i]);
        } else {
          formData.append('videos', files[i]);
        }
      }

      if (text.length !== 0) {
        formData.append('text', text);
      }

      dataForRequest = formData;
      const response = await onPosting(dataForRequest);
      const {
        status,
        data
      } = response;

      if (status === 201) {
        antd__WEBPACK_IMPORTED_MODULE_1__["message"].success('Your post published successfuly');
        handleChangeFile([]);
        setText('');
      } else {
        antd__WEBPACK_IMPORTED_MODULE_1__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
      }
    } catch (error) {
      console.log(error);
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error('Please try again!');
    }
  };

  const handleChangeFile = files => {
    // console.log('onchangefile', files);
    setFiles(files);
  };

  const [showModal, hideModal] = Object(react_modal_hook__WEBPACK_IMPORTED_MODULE_5__["useModal"])(({
    in: open
  }) => __jsx(_PostModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Photo detail",
    showModal: open,
    onClose: hideModal,
    show: true,
    onClose: hideModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }
  }));
  return __jsx("div", {
    className: _styles_posting_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.activity_posting,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }, __jsx(TextArea, {
    value: text,
    onChange: handleChangeText,
    placeholder: "Write a message",
    autoSize: {
      minRows: 2,
      maxRows: 5
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: _styles_posting_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.file_place,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, __jsx(components_forms__WEBPACK_IMPORTED_MODULE_2__["FileDrop"], {
    files: files,
    onChange: handleChangeFile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: _styles_posting_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.actions_container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
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
      lineNumber: 93,
      columnNumber: 9
    }
  }, "Post")));
}

_s(PostingPost, "407n5Sqk6qzYwBREcUD9z7TlfH0=", false, function () {
  return [react_modal_hook__WEBPACK_IMPORTED_MODULE_5__["useModal"]];
});

_c = PostingPost;

var _c;

$RefreshReg$(_c, "PostingPost");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlL1Bvc3RpbmdQb3N0LmpzIl0sIm5hbWVzIjpbIlRleHRBcmVhIiwiSW5wdXQiLCJUYWJQYW5lIiwiVGFicyIsIlBvc3RpbmdQb3N0Iiwib25Qb3N0aW5nIiwibG9hZGluZyIsInRleHQiLCJzZXRUZXh0IiwidXNlU3RhdGUiLCJmaWxlcyIsInNldEZpbGVzIiwiaGFuZGxlQ2hhbmdlVGV4dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUNoYW5nZVRhYkFjdGl2ZSIsImFjdGl2ZUtleSIsInNldEFjdGl2ZVR5cGUiLCJoYW5kbGVTdWJtaXQiLCJkYXRhRm9yUmVxdWVzdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJpIiwibGVuZ3RoIiwidHlwZSIsInNwbGl0IiwiYXBwZW5kIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJkYXRhIiwibWVzc2FnZSIsInN1Y2Nlc3MiLCJoYW5kbGVDaGFuZ2VGaWxlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwic2hvd01vZGFsIiwiaGlkZU1vZGFsIiwidXNlTW9kYWwiLCJpbiIsIm9wZW4iLCJzdHlsZXMiLCJhY3Rpdml0eV9wb3N0aW5nIiwibWluUm93cyIsIm1heFJvd3MiLCJmaWxlX3BsYWNlIiwiYWN0aW9uc19jb250YWluZXIiLCJ3aWR0aCIsImZvbnRTaXplIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxNQUFNO0FBQUVBO0FBQUYsSUFBZUMsMENBQXJCO0FBQ0EsTUFBTTtBQUFFQztBQUFGLElBQWNDLHlDQUFwQjtBQUVlLFNBQVNDLFdBQVQsQ0FBcUI7QUFBRUMsV0FBRjtBQUFhQyxTQUFiO0FBQXNCRjtBQUF0QixDQUFyQixFQUEwRDtBQUFBOztBQUN2RSxRQUFNO0FBQUEsT0FBQ0csSUFBRDtBQUFBLE9B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WUFBUSxFQUFFSyxnQkFGWjtBQUdFLGVBQVcsRUFBQyxpQkFIZDtBQUlFLFlBQVEsRUFBRTtBQUFFZ0MsYUFBTyxFQUFFLENBQVg7QUFBY0MsYUFBTyxFQUFFO0FBQXZCLEtBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBUUU7QUFBSyxhQUFTLEVBQUVILHVFQUFNLENBQUNJLFVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlEQUFEO0FBQVUsU0FBSyxFQUFFcEMsS0FBakI7QUFBd0IsWUFBUSxFQUFFdUIsZ0JBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVJGLENBREYsRUFjRTtBQUFLLGFBQVMsRUFBRVMsdUVBQU0sQ0FBQ0ssaUJBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJDQUFEO0FBQVEsUUFBSSxFQUFDLFNBQWI7QUFBdUIsV0FBTyxFQUFFekMsT0FBaEM7QUFBeUMsV0FBTyxFQUFFYSxZQUFsRDtBQUFnRSxTQUFLLEVBQUU7QUFBRTZCLFdBQUssRUFBRSxNQUFUO0FBQWlCQyxjQUFRLEVBQUUsTUFBM0I7QUFBbUNDLFlBQU0sRUFBRSxNQUEzQztBQUFtREMsa0JBQVksRUFBRTtBQUFqRSxLQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsQ0FkRixDQUZGO0FBd0JEOztHQXZGdUIvQyxXO1VBcURTbUMseUQ7OztLQXJEVG5DLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGltZWxpbmUuODg1OWNiZTZmZjcwNmU0YWZlM2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgVGFicywgSW5wdXQgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGaWxlRHJvcCB9IGZyb20gJ2NvbXBvbmVudHMvZm9ybXMnO1xyXG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSAnYW50ZCc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL3Bvc3RpbmctcG9zdC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBQb3N0TW9kYWwgZnJvbSAnLi9Qb3N0TW9kYWwnO1xyXG5pbXBvcnQgeyB1c2VNb2RhbCB9IGZyb20gJ3JlYWN0LW1vZGFsLWhvb2snO1xyXG5cclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcbmNvbnN0IHsgVGFiUGFuZSB9ID0gVGFicztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RpbmdQb3N0KHsgb25Qb3N0aW5nLCBsb2FkaW5nLCBQb3N0aW5nUG9zdCB9KSB7XHJcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtmaWxlcywgc2V0RmlsZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIC8vIGNvbnN0IFthY3RpdmVUeXBlLCBzZXRBY3RpdmVUeXBlXSA9IHVzZVN0YXRlKCd0ZXh0Jyk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVRleHQgPSAoZSkgPT4ge1xyXG4gICAgc2V0VGV4dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlVGFiQWN0aXZlID0gKGFjdGl2ZUtleSkgPT4ge1xyXG4gICAgc2V0QWN0aXZlVHlwZShhY3RpdmVLZXkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCBkYXRhRm9yUmVxdWVzdDtcclxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGE7XHJcblxyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGZpbGVzW2ldLnR5cGUuc3BsaXQoJy8nKVswXSA9PT0gJ2ltYWdlJykge1xyXG4gICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpbWFnZXMnLCBmaWxlc1tpXSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndmlkZW9zJywgZmlsZXNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaWYgKHRleHQubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd0ZXh0JywgdGV4dClcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgZGF0YUZvclJlcXVlc3QgPSBmb3JtRGF0YVxyXG5cclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBvblBvc3RpbmcoZGF0YUZvclJlcXVlc3QpO1xyXG4gICAgICBjb25zdCB7IHN0YXR1cywgZGF0YSB9ID0gcmVzcG9uc2U7XHJcblxyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoJ1lvdXIgcG9zdCBwdWJsaXNoZWQgc3VjY2Vzc2Z1bHknKTtcclxuICAgICAgICBoYW5kbGVDaGFuZ2VGaWxlKFtdKVxyXG4gICAgICAgIHNldFRleHQoJycpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgbWVzc2FnZS5lcnJvcignUGxlYXNlIHRyeSBhZ2FpbiEnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VGaWxlID0gKGZpbGVzKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnb25jaGFuZ2VmaWxlJywgZmlsZXMpO1xyXG4gICAgc2V0RmlsZXMoZmlsZXMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtzaG93TW9kYWwsIGhpZGVNb2RhbF0gPSB1c2VNb2RhbCgoeyBpbjogb3BlbiB9KSA9PiAoXHJcbiAgICA8UG9zdE1vZGFsXHJcbiAgICAgIHRpdGxlPVwiUGhvdG8gZGV0YWlsXCJcclxuICAgICAgc2hvd01vZGFsPXtvcGVufVxyXG4gICAgICBvbkNsb3NlPXtoaWRlTW9kYWx9XHJcbiAgICAgIHNob3c9e3RydWV9XHJcbiAgICAgIG9uQ2xvc2U9e2hpZGVNb2RhbH1cclxuICAgIC8+XHJcbiAgKSk7XHJcblxyXG4gIHJldHVybiAoXHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpdml0eV9wb3N0aW5nfT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgIHZhbHVlPXt0ZXh0fVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVRleHR9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIldyaXRlIGEgbWVzc2FnZVwiXHJcbiAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAyLCBtYXhSb3dzOiA1IH19XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWxlX3BsYWNlfT5cclxuICAgICAgICAgIDxGaWxlRHJvcCBmaWxlcz17ZmlsZXN9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VGaWxlfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uc19jb250YWluZXJ9PlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBsb2FkaW5nPXtsb2FkaW5nfSBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGZvbnRTaXplOiAnMjBweCcsIGhlaWdodDogJzUwcHgnLCBib3JkZXJSYWRpdXM6ICc2cHgnfX0+XHJcbiAgICAgICAgICBQb3N0XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==