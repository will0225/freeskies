webpackHotUpdate_N_E("pages/timeline",{

/***/ "./components/common/VideoPlayer.js":
/*!******************************************!*\
  !*** ./components/common/VideoPlayer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VideoPlayer; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! video.js */ "./node_modules/video.js/dist/video.cjs.js");
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(video_js__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "D:\\Freeskies-development-\\components\\common\\VideoPlayer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var VideoPlayer = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(VideoPlayer, _React$Component);

  var _super = _createSuper(VideoPlayer);

  function VideoPlayer() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, VideoPlayer);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(VideoPlayer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // instantiate video.js
      this.player = video_js__WEBPACK_IMPORTED_MODULE_6___default()(this.videoNode, this.props, function onPlayerReady() {
        console.log('onPlayerReady', this);
      });
    } //destroy player on unmount

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.player) {
        this.player.dispose();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 13
        }
      }, __jsx("div", {
        "data-vjs-player": true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 17
        }
      }, __jsx("video", {
        ref: function ref(node) {
          return _this.videoNode = node;
        },
        className: "videol-js",
        width: "100%",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 21
        }
      }, " ")));
    }
  }]);

  return VideoPlayer;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vVmlkZW9QbGF5ZXIuanMiXSwibmFtZXMiOlsiVmlkZW9QbGF5ZXIiLCJwbGF5ZXIiLCJ2aWRlb2pzIiwidmlkZW9Ob2RlIiwicHJvcHMiLCJvblBsYXllclJlYWR5IiwiY29uc29sZSIsImxvZyIsImRpc3Bvc2UiLCJub2RlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBRXFCQSxXOzs7Ozs7Ozs7Ozs7O3dDQUNHO0FBQ2hCO0FBQ0EsV0FBS0MsTUFBTCxHQUFjQywrQ0FBTyxDQUFDLEtBQUtDLFNBQU4sRUFBaUIsS0FBS0MsS0FBdEIsRUFBNkIsU0FBU0MsYUFBVCxHQUF5QjtBQUN2RUMsZUFBTyxDQUFDQyxHQUFSLENBQVksZUFBWixFQUE2QixJQUE3QjtBQUNILE9BRm9CLENBQXJCO0FBR0gsSyxDQUVEOzs7OzJDQUN1QjtBQUNuQixVQUFHLEtBQUtOLE1BQVIsRUFBZ0I7QUFDWixhQUFLQSxNQUFMLENBQVlPLE9BQVo7QUFDSDtBQUNKOzs7NkJBR1E7QUFBQTs7QUFDTCxhQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFLLCtCQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFPLFdBQUcsRUFBRyxhQUFBQyxJQUFJO0FBQUEsaUJBQUksS0FBSSxDQUFDTixTQUFMLEdBQWlCTSxJQUFyQjtBQUFBLFNBQWpCO0FBQTZDLGlCQUFTLEVBQUMsV0FBdkQ7QUFBbUUsYUFBSyxFQUFDLE1BQXpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixDQURKLENBREo7QUFPSDs7OztFQXhCb0NDLDRDQUFLLENBQUNDLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGltZWxpbmUuOTMzZTZlNmNhY2ExOTZkMWZkNzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB2aWRlb2pzIGZyb20gJ3ZpZGVvLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZGVvUGxheWVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIC8vIGluc3RhbnRpYXRlIHZpZGVvLmpzXHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSB2aWRlb2pzKHRoaXMudmlkZW9Ob2RlLCB0aGlzLnByb3BzLCBmdW5jdGlvbiBvblBsYXllclJlYWR5KCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnb25QbGF5ZXJSZWFkeScsIHRoaXMpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvL2Rlc3Ryb3kgcGxheWVyIG9uIHVubW91bnRcclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIGlmKHRoaXMucGxheWVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmRpc3Bvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXZqcy1wbGF5ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHZpZGVvIHJlZj17IG5vZGUgPT4gdGhpcy52aWRlb05vZGUgPSBub2RlIH0gY2xhc3NOYW1lPVwidmlkZW9sLWpzXCIgd2lkdGg9XCIxMDAlXCI+IDwvdmlkZW8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9