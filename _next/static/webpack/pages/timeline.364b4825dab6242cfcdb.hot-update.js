webpackHotUpdate_N_E("pages/timeline",{

/***/ "./components/common/PhotoModalWrapper.js":
/*!************************************************!*\
  !*** ./components/common/PhotoModalWrapper.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PhotoModalWrapper; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/modal.module.scss */ "./components/common/styles/modal.module.scss");
/* harmony import */ var _styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_swipeable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-swipeable */ "./node_modules/react-swipeable/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "E:\\freeskies_fe_code\\components\\common\\PhotoModalWrapper.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const customStyles = {
  content: {},
  overlay: {
    backgroundColor: 'rgba(50, 50, 50, .8)'
  }
};
function PhotoModalWrapper(_ref) {
  _s();

  let {
    children,
    showModal,
    title
  } = _ref,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["children", "showModal", "title"]);

  const {
    0: swipe,
    1: setSwipe
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(30);
  return __jsx(react_modal__WEBPACK_IMPORTED_MODULE_2___default.a, {
    isOpen: showModal,
    style: customStyles,
    className: _styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.modal_content_photo,
    shouldCloseOnOverlayClick: true,
    onRequestClose: rest.onClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx("button", {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.close, _styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.desktop_close),
    type: "button",
    onClick: rest.onClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["CloseOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: _styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, children), __jsx(react_swipeable__WEBPACK_IMPORTED_MODULE_5__["Swipeable"], {
    onSwipedUp: data => {
      if (data.absY > 10) {
        setSwipe(5);
        rest.onClose();
      }
    },
    onSwiped: data => console.log(data),
    style: {
      textAlign: 'center'
    },
    className: _styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.mobile_close,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: _styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.swipeImageWrapper,
    style: {
      cursor: 'pointer',
      marginTop: swipe
    },
    id: "swipe",
    onClick: () => {
      setSwipe(5);
      setTimeout(() => {
        rest.onClose();
        setSwipe(500);
      });
    },
    onTouchStart: () => {
      setSwipe(5);
      setTimeout(() => {
        rest.onClose();
        setSwipe(500);
      });
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/swipe.png",
    style: {
      height: 40,
      display: 'inline'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }))));
}

_s(PhotoModalWrapper, "+q/PjkDENW7WfN2A8Z8xA6qfabk=");

_c = PhotoModalWrapper;

var _c;

$RefreshReg$(_c, "PhotoModalWrapper");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vUGhvdG9Nb2RhbFdyYXBwZXIuanMiXSwibmFtZXMiOlsiY3VzdG9tU3R5bGVzIiwiY29udGVudCIsIm92ZXJsYXkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJQaG90b01vZGFsV3JhcHBlciIsImNoaWxkcmVuIiwic2hvd01vZGFsIiwidGl0bGUiLCJyZXN0Iiwic3dpcGUiLCJzZXRTd2lwZSIsInVzZVN0YXRlIiwic3R5bGVzIiwibW9kYWxfY29udGVudF9waG90byIsIm9uQ2xvc2UiLCJoZWFkZXIiLCJjbGFzc25hbWVzIiwiY2xvc2UiLCJkZXNrdG9wX2Nsb3NlIiwiZGF0YSIsImFic1kiLCJjb25zb2xlIiwibG9nIiwidGV4dEFsaWduIiwibW9iaWxlX2Nsb3NlIiwic3dpcGVJbWFnZVdyYXBwZXIiLCJjdXJzb3IiLCJtYXJnaW5Ub3AiLCJzZXRUaW1lb3V0IiwiaGVpZ2h0IiwiZGlzcGxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxTQUFPLEVBQUUsRUFEVTtBQUVuQkMsU0FBTyxFQUFFO0FBQ1BDLG1CQUFlLEVBQUU7QUFEVjtBQUZVLENBQXJCO0FBT2UsU0FBU0MsaUJBQVQsT0FLWjtBQUFBOztBQUFBLE1BTHVDO0FBQ3hDQyxZQUR3QztBQUV4Q0MsYUFGd0M7QUFHeENDO0FBSHdDLEdBS3ZDO0FBQUEsTUFERUMsSUFDRjs7QUFFRCxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLHNEQUFRLENBQUMsRUFBRCxDQUFsQztBQUVBLFNBQ0UsTUFBQyxrREFBRDtBQUNFLFVBQU0sRUFBRUwsU0FEVjtBQUVFLFNBQUssRUFBRU4sWUFGVDtBQUdFLGFBQVMsRUFBRVksZ0VBQU0sQ0FBQ0MsbUJBSHBCO0FBSUUsNkJBQXlCLE1BSjNCO0FBS0Usa0JBQWMsRUFBRUwsSUFBSSxDQUFDTSxPQUx2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0U7QUFBSyxhQUFTLEVBQUVGLGdFQUFNLENBQUNHLE1BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLGFBQVMsRUFBRUMsaURBQVUsQ0FBQ0osZ0VBQU0sQ0FBQ0ssS0FBUixFQUFlTCxnRUFBTSxDQUFDTSxhQUF0QixDQUE3QjtBQUFtRSxRQUFJLEVBQUMsUUFBeEU7QUFBaUYsV0FBTyxFQUFFVixJQUFJLENBQUNNLE9BQS9GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBUEYsRUFZRTtBQUFLLGFBQVMsRUFBRUYsZ0VBQU0sQ0FBQ1gsT0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFpQ0ksUUFBakMsQ0FaRixFQWFFLE1BQUMseURBQUQ7QUFBVyxjQUFVLEVBQUdjLElBQUQsSUFBVTtBQUMvQixVQUFHQSxJQUFJLENBQUNDLElBQUwsR0FBWSxFQUFmLEVBQW1CO0FBQ2pCVixnQkFBUSxDQUFDLENBQUQsQ0FBUjtBQUNBRixZQUFJLENBQUNNLE9BQUw7QUFDRDtBQUNGLEtBTEQ7QUFNQSxZQUFRLEVBQUdLLElBQUQsSUFBVUUsT0FBTyxDQUFDQyxHQUFSLENBQVlILElBQVosQ0FOcEI7QUFPQSxTQUFLLEVBQUU7QUFBRUksZUFBUyxFQUFFO0FBQWIsS0FQUDtBQVFBLGFBQVMsRUFBRVgsZ0VBQU0sQ0FBQ1ksWUFSbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVVFO0FBQUcsYUFBUyxFQUFFWixnRUFBTSxDQUFDYSxpQkFBckI7QUFBd0MsU0FBSyxFQUFFO0FBQUdDLFlBQU0sRUFBRSxTQUFYO0FBQXNCQyxlQUFTLEVBQUVsQjtBQUFqQyxLQUEvQztBQUF5RixNQUFFLEVBQUMsT0FBNUY7QUFBb0csV0FBTyxFQUFFLE1BQUs7QUFDaEhDLGNBQVEsQ0FBQyxDQUFELENBQVI7QUFDQWtCLGdCQUFVLENBQUMsTUFBTTtBQUNmcEIsWUFBSSxDQUFDTSxPQUFMO0FBQ0FKLGdCQUFRLENBQUMsR0FBRCxDQUFSO0FBQ0QsT0FIUyxDQUFWO0FBS0QsS0FQRDtBQVFBLGdCQUFZLEVBQUUsTUFBTTtBQUNoQkEsY0FBUSxDQUFDLENBQUQsQ0FBUjtBQUNBa0IsZ0JBQVUsQ0FBQyxNQUFNO0FBQ2ZwQixZQUFJLENBQUNNLE9BQUw7QUFDQUosZ0JBQVEsQ0FBQyxHQUFELENBQVI7QUFDRCxPQUhTLENBQVY7QUFJSCxLQWREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FnQkU7QUFBSyxPQUFHLEVBQUMsWUFBVDtBQUFzQixTQUFLLEVBQUU7QUFBRW1CLFlBQU0sRUFBRSxFQUFWO0FBQWNDLGFBQU8sRUFBRTtBQUF2QixLQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaEJGLENBVkYsQ0FiRixDQURGO0FBOENEOztHQXZEdUIxQixpQjs7S0FBQUEsaUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGltZWxpbmUuMzY0YjQ4MjVkYWI2MjQyY2ZjZGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdE1vZGFsIGZyb20gJ3JlYWN0LW1vZGFsJztcclxuaW1wb3J0IHsgQ2xvc2VPdXRsaW5lZCwgQ2xvc2VDaXJjbGVGaWxsZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvbW9kYWwubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyB1c2VTd2lwZWFibGUsIFN3aXBlYWJsZSB9IGZyb20gJ3JlYWN0LXN3aXBlYWJsZSdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5cclxuY29uc3QgY3VzdG9tU3R5bGVzID0ge1xyXG4gIGNvbnRlbnQ6IHt9LFxyXG4gIG92ZXJsYXk6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoNTAsIDUwLCA1MCwgLjgpJyxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGhvdG9Nb2RhbFdyYXBwZXIoe1xyXG4gIGNoaWxkcmVuLFxyXG4gIHNob3dNb2RhbCxcclxuICB0aXRsZSxcclxuICAuLi5yZXN0XHJcbn0pIHtcclxuXHJcbiAgY29uc3QgW3N3aXBlLCBzZXRTd2lwZV0gPSB1c2VTdGF0ZSgzMCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3RNb2RhbFxyXG4gICAgICBpc09wZW49e3Nob3dNb2RhbH1cclxuICAgICAgc3R5bGU9e2N1c3RvbVN0eWxlc31cclxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxfY29udGVudF9waG90b31cclxuICAgICAgc2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGlja1xyXG4gICAgICBvblJlcXVlc3RDbG9zZT17cmVzdC5vbkNsb3NlfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmNsb3NlLCBzdHlsZXMuZGVza3RvcF9jbG9zZSl9IHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtyZXN0Lm9uQ2xvc2V9PlxyXG4gICAgICAgICAgPENsb3NlT3V0bGluZWQgLz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+e2NoaWxkcmVufTwvZGl2PlxyXG4gICAgICA8U3dpcGVhYmxlIG9uU3dpcGVkVXA9eyhkYXRhKSA9PiB7XHJcbiAgICAgICAgaWYoZGF0YS5hYnNZID4gMTApIHtcclxuICAgICAgICAgIHNldFN3aXBlKDUpO1xyXG4gICAgICAgICAgcmVzdC5vbkNsb3NlKCk7XHJcbiAgICAgICAgfSBcclxuICAgICAgfX1cclxuICAgICAgb25Td2lwZWQ9eyhkYXRhKSA9PiBjb25zb2xlLmxvZyhkYXRhKX1cclxuICAgICAgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fVxyXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5tb2JpbGVfY2xvc2V9XHJcbiAgICAgID5cclxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5zd2lwZUltYWdlV3JhcHBlcn0gc3R5bGU9e3sgIGN1cnNvcjogJ3BvaW50ZXInLCBtYXJnaW5Ub3A6IHN3aXBlIH19IGlkPVwic3dpcGVcIiBvbkNsaWNrPXsoKT0+IHtcclxuICAgICAgICAgIHNldFN3aXBlKDUpO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc3Qub25DbG9zZSgpO1xyXG4gICAgICAgICAgICBzZXRTd2lwZSg1MDApO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgb25Ub3VjaFN0YXJ0PXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFN3aXBlKDUpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICByZXN0Lm9uQ2xvc2UoKTtcclxuICAgICAgICAgICAgICBzZXRTd2lwZSg1MDApO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvc3dpcGUucG5nXCIgc3R5bGU9e3sgaGVpZ2h0OiA0MCwgZGlzcGxheTogJ2lubGluZScgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L1N3aXBlYWJsZT5cclxuICAgIDwvUmVhY3RNb2RhbD5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=