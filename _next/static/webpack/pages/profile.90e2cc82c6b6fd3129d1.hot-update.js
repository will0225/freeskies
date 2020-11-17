webpackHotUpdate_N_E("pages/profile",{

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
      console.log(response);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlL1Bvc3RpbmdQb3N0LmpzIl0sIm5hbWVzIjpbIlRleHRBcmVhIiwiSW5wdXQiLCJUYWJQYW5lIiwiVGFicyIsIlBvc3RpbmdQb3N0Iiwib25Qb3N0aW5nIiwibG9hZGluZyIsInRleHQiLCJzZXRUZXh0IiwidXNlU3RhdGUiLCJmaWxlcyIsInNldEZpbGVzIiwiaGFuZGxlQ2hhbmdlVGV4dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUNoYW5nZVRhYkFjdGl2ZSIsImFjdGl2ZUtleSIsInNldEFjdGl2ZVR5cGUiLCJoYW5kbGVTdWJtaXQiLCJkYXRhRm9yUmVxdWVzdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJpIiwibGVuZ3RoIiwidHlwZSIsInNwbGl0IiwiYXBwZW5kIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwiZGF0YSIsIm1lc3NhZ2UiLCJzdWNjZXNzIiwiaGFuZGxlQ2hhbmdlRmlsZSIsImVycm9yIiwic2hvd01vZGFsIiwiaGlkZU1vZGFsIiwidXNlTW9kYWwiLCJpbiIsIm9wZW4iLCJzdHlsZXMiLCJhY3Rpdml0eV9wb3N0aW5nIiwibWluUm93cyIsIm1heFJvd3MiLCJmaWxlX3BsYWNlIiwiYWN0aW9uc19jb250YWluZXIiLCJ3aWR0aCIsImZvbnRTaXplIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxNQUFNO0FBQUVBO0FBQUYsSUFBZUMsMENBQXJCO0FBQ0EsTUFBTTtBQUFFQztBQUFGLElBQWNDLHlDQUFwQjtBQUVlLFNBQVNDLFdBQVQsQ0FBcUI7QUFBRUMsV0FBRjtBQUFhQyxTQUFiO0FBQXNCRjtBQUF0QixDQUFyQixFQUEwRDtBQUFBOztBQUN2RSxRQUFNO0FBQUEsT0FBQ0csSUFBRDtBQUFBLE9B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QUMsUUFBRDtBQUNFLFNBQUssRUFBRXBDLElBRFQ7QUFFRSxZQUFRLEVBQUVLLGdCQUZaO0FBR0UsZUFBVyxFQUFDLGlCQUhkO0FBSUUsWUFBUSxFQUFFO0FBQUVnQyxhQUFPLEVBQUUsQ0FBWDtBQUFjQyxhQUFPLEVBQUU7QUFBdkIsS0FKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFRRTtBQUFLLGFBQVMsRUFBRUgsdUVBQU0sQ0FBQ0ksVUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseURBQUQ7QUFBVSxTQUFLLEVBQUVwQyxLQUFqQjtBQUF3QixZQUFRLEVBQUV5QixnQkFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBUkYsQ0FERixFQWNFO0FBQUssYUFBUyxFQUFFTyx1RUFBTSxDQUFDSyxpQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkNBQUQ7QUFBUSxRQUFJLEVBQUMsU0FBYjtBQUF1QixXQUFPLEVBQUV6QyxPQUFoQztBQUF5QyxXQUFPLEVBQUVhLFlBQWxEO0FBQWdFLFNBQUssRUFBRTtBQUFFNkIsV0FBSyxFQUFFLE1BQVQ7QUFBaUJDLGNBQVEsRUFBRSxNQUEzQjtBQUFtQ0MsWUFBTSxFQUFFLE1BQTNDO0FBQW1EQyxrQkFBWSxFQUFFO0FBQWpFLEtBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixDQWRGLENBRkY7QUF3QkQ7O0dBdkZ1Qi9DLFc7VUFxRFNtQyx5RDs7O0tBckRUbkMsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLjkwZTJjYzgyYzZiNmZkMzEyOWQxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIFRhYnMsIElucHV0IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRmlsZURyb3AgfSBmcm9tICdjb21wb25lbnRzL2Zvcm1zJztcclxuaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gJ2FudGQnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy9wb3N0aW5nLXBvc3QubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgUG9zdE1vZGFsIGZyb20gJy4vUG9zdE1vZGFsJztcclxuaW1wb3J0IHsgdXNlTW9kYWwgfSBmcm9tICdyZWFjdC1tb2RhbC1ob29rJztcclxuXHJcbmNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0O1xyXG5jb25zdCB7IFRhYlBhbmUgfSA9IFRhYnM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0aW5nUG9zdCh7IG9uUG9zdGluZywgbG9hZGluZywgUG9zdGluZ1Bvc3QgfSkge1xyXG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZmlsZXMsIHNldEZpbGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAvLyBjb25zdCBbYWN0aXZlVHlwZSwgc2V0QWN0aXZlVHlwZV0gPSB1c2VTdGF0ZSgndGV4dCcpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VUZXh0ID0gKGUpID0+IHtcclxuICAgIHNldFRleHQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVRhYkFjdGl2ZSA9IChhY3RpdmVLZXkpID0+IHtcclxuICAgIHNldEFjdGl2ZVR5cGUoYWN0aXZlS2V5KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgZGF0YUZvclJlcXVlc3Q7XHJcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhO1xyXG5cclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChmaWxlc1tpXS50eXBlLnNwbGl0KCcvJylbMF0gPT09ICdpbWFnZScpIHtcclxuICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2VzJywgZmlsZXNbaV0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3ZpZGVvcycsIGZpbGVzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGlmICh0ZXh0Lmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndGV4dCcsIHRleHQpXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGRhdGFGb3JSZXF1ZXN0ID0gZm9ybURhdGFcclxuXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgb25Qb3N0aW5nKGRhdGFGb3JSZXF1ZXN0KTtjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgY29uc3QgeyBzdGF0dXMsIGRhdGEgfSA9IHJlc3BvbnNlO1xyXG5cclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKCdZb3VyIHBvc3QgcHVibGlzaGVkIHN1Y2Nlc3NmdWx5Jyk7XHJcbiAgICAgICAgaGFuZGxlQ2hhbmdlRmlsZShbXSlcclxuICAgICAgICBzZXRUZXh0KCcnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIG1lc3NhZ2UuZXJyb3IoJ1BsZWFzZSB0cnkgYWdhaW4hJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlRmlsZSA9IChmaWxlcykgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ29uY2hhbmdlZmlsZScsIGZpbGVzKTtcclxuICAgIHNldEZpbGVzKGZpbGVzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBbc2hvd01vZGFsLCBoaWRlTW9kYWxdID0gdXNlTW9kYWwoKHsgaW46IG9wZW4gfSkgPT4gKFxyXG4gICAgPFBvc3RNb2RhbFxyXG4gICAgICB0aXRsZT1cIlBob3RvIGRldGFpbFwiXHJcbiAgICAgIHNob3dNb2RhbD17b3Blbn1cclxuICAgICAgb25DbG9zZT17aGlkZU1vZGFsfVxyXG4gICAgICBzaG93PXt0cnVlfVxyXG4gICAgICBvbkNsb3NlPXtoaWRlTW9kYWx9XHJcbiAgICAvPlxyXG4gICkpO1xyXG5cclxuICByZXR1cm4gKFxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aXZpdHlfcG9zdGluZ30+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICB2YWx1ZT17dGV4dH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VUZXh0fVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJXcml0ZSBhIG1lc3NhZ2VcIlxyXG4gICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMiwgbWF4Um93czogNSB9fVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmlsZV9wbGFjZX0+XHJcbiAgICAgICAgICA8RmlsZURyb3AgZmlsZXM9e2ZpbGVzfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlRmlsZX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvbnNfY29udGFpbmVyfT5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgbG9hZGluZz17bG9hZGluZ30gb25DbGljaz17aGFuZGxlU3VibWl0fSBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBmb250U2l6ZTogJzIwcHgnLCBoZWlnaHQ6ICc1MHB4JywgYm9yZGVyUmFkaXVzOiAnNnB4J319PlxyXG4gICAgICAgICAgUG9zdFxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=