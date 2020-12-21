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
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component); // import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import videojs from 'video.js';
// import 'video.js/dist/video-js.css';
// //import 'videojs-contrib-hls/dist/videojs-contrib-hls.js';
// // Workaround for webworkify not working with webpack
// if(typeof window !== 'undefined') {
//     window.videojs = videojs;
// }
// require('videojs-contrib-hls/dist/videojs-contrib-hls.js');
// class VideoPlayer extends Component {
//     startVideo(video) {
//         videojs(video);
//     }
//     render() {
//         return (
//                 <video ref={this.startVideo} preload controls width={this.props.width} height={this.props.height} className="video-js vjs-default-skin" controls>
//                     <source src={this.props.source} type="application/x-mpegURL" />
//                 </video>
//         );
//     }
// }
// VideoPlayer.propTypes = {
//     width: PropTypes.string.isRequired,
//     height: PropTypes.string.isRequired,
//     source: PropTypes.string.isRequired,
// };
// export default VideoPlayer;




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

/***/ }),

/***/ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/video.js/dist/video-js.css":
false,

/***/ "./node_modules/video.js/dist/video-js.css":
false,

/***/ "./node_modules/videojs-contrib-hls/dist/videojs-contrib-hls.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vVmlkZW9QbGF5ZXIuanMiXSwibmFtZXMiOlsiVmlkZW9QbGF5ZXIiLCJwbGF5ZXIiLCJ2aWRlb2pzIiwidmlkZW9Ob2RlIiwicHJvcHMiLCJvblBsYXllclJlYWR5IiwiY29uc29sZSIsImxvZyIsImRpc3Bvc2UiLCJub2RlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBRXFCQSxXOzs7Ozs7Ozs7Ozs7O3dDQUNHO0FBQ2hCO0FBQ0EsV0FBS0MsTUFBTCxHQUFjQywrQ0FBTyxDQUFDLEtBQUtDLFNBQU4sRUFBaUIsS0FBS0MsS0FBdEIsRUFBNkIsU0FBU0MsYUFBVCxHQUF5QjtBQUN2RUMsZUFBTyxDQUFDQyxHQUFSLENBQVksZUFBWixFQUE2QixJQUE3QjtBQUNILE9BRm9CLENBQXJCO0FBR0gsSyxDQUVEOzs7OzJDQUN1QjtBQUNuQixVQUFHLEtBQUtOLE1BQVIsRUFBZ0I7QUFDWixhQUFLQSxNQUFMLENBQVlPLE9BQVo7QUFDSDtBQUNKOzs7NkJBR1E7QUFBQTs7QUFDTCxhQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFLLCtCQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFPLFdBQUcsRUFBRyxhQUFBQyxJQUFJO0FBQUEsaUJBQUksS0FBSSxDQUFDTixTQUFMLEdBQWlCTSxJQUFyQjtBQUFBLFNBQWpCO0FBQTZDLGlCQUFTLEVBQUMsV0FBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLENBREosQ0FESjtBQU9IOzs7O0VBeEJvQ0MsNENBQUssQ0FBQ0MsUyxHQTJCL0M7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGltZWxpbmUuYTA5MjQ3MTkyY2M0ZWI2YWNhMGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB2aWRlb2pzIGZyb20gJ3ZpZGVvLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZGVvUGxheWVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIC8vIGluc3RhbnRpYXRlIHZpZGVvLmpzXHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSB2aWRlb2pzKHRoaXMudmlkZW9Ob2RlLCB0aGlzLnByb3BzLCBmdW5jdGlvbiBvblBsYXllclJlYWR5KCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnb25QbGF5ZXJSZWFkeScsIHRoaXMpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvL2Rlc3Ryb3kgcGxheWVyIG9uIHVubW91bnRcclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIGlmKHRoaXMucGxheWVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmRpc3Bvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXZqcy1wbGF5ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHZpZGVvIHJlZj17IG5vZGUgPT4gdGhpcy52aWRlb05vZGUgPSBub2RlIH0gY2xhc3NOYW1lPVwidmlkZW9sLWpzXCI+IDwvdmlkZW8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG4vLyBpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuLy8gaW1wb3J0IHZpZGVvanMgZnJvbSAndmlkZW8uanMnO1xyXG4vLyBpbXBvcnQgJ3ZpZGVvLmpzL2Rpc3QvdmlkZW8tanMuY3NzJztcclxuXHJcbi8vIC8vaW1wb3J0ICd2aWRlb2pzLWNvbnRyaWItaGxzL2Rpc3QvdmlkZW9qcy1jb250cmliLWhscy5qcyc7XHJcbi8vIC8vIFdvcmthcm91bmQgZm9yIHdlYndvcmtpZnkgbm90IHdvcmtpbmcgd2l0aCB3ZWJwYWNrXHJcbi8vIGlmKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbi8vICAgICB3aW5kb3cudmlkZW9qcyA9IHZpZGVvanM7XHJcbi8vIH1cclxuLy8gcmVxdWlyZSgndmlkZW9qcy1jb250cmliLWhscy9kaXN0L3ZpZGVvanMtY29udHJpYi1obHMuanMnKTtcclxuXHJcbi8vIGNsYXNzIFZpZGVvUGxheWVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuLy8gICAgIHN0YXJ0VmlkZW8odmlkZW8pIHtcclxuLy8gICAgICAgICB2aWRlb2pzKHZpZGVvKTtcclxuLy8gICAgIH1cclxuICAgIFxyXG4vLyAgICAgcmVuZGVyKCkge1xyXG4vLyAgICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgICAgICAgICA8dmlkZW8gcmVmPXt0aGlzLnN0YXJ0VmlkZW99IHByZWxvYWQgY29udHJvbHMgd2lkdGg9e3RoaXMucHJvcHMud2lkdGh9IGhlaWdodD17dGhpcy5wcm9wcy5oZWlnaHR9IGNsYXNzTmFtZT1cInZpZGVvLWpzIHZqcy1kZWZhdWx0LXNraW5cIiBjb250cm9scz5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8c291cmNlIHNyYz17dGhpcy5wcm9wcy5zb3VyY2V9IHR5cGU9XCJhcHBsaWNhdGlvbi94LW1wZWdVUkxcIiAvPlxyXG4vLyAgICAgICAgICAgICAgICAgPC92aWRlbz5cclxuLy8gICAgICAgICApO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyBWaWRlb1BsYXllci5wcm9wVHlwZXMgPSB7XHJcbi8vICAgICB3aWR0aDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4vLyAgICAgaGVpZ2h0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbi8vICAgICBzb3VyY2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IFZpZGVvUGxheWVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9