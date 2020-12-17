webpackHotUpdate_N_E("pages/timeline",{

/***/ "./components/common/VideoPlayer.js":
/*!******************************************!*\
  !*** ./components/common/VideoPlayer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! video.js */ "./node_modules/video.js/dist/video.cjs.js");
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(video_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var videojs_contrib_hls__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! videojs-contrib-hls */ "./node_modules/videojs-contrib-hls/es5/videojs-contrib-hls.js");
/* harmony import */ var videojs_contrib_hls__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(videojs_contrib_hls__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var video_js_dist_video_js_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! video.js/dist/video-js.css */ "./node_modules/video.js/dist/video-js.css");
/* harmony import */ var video_js_dist_video_js_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(video_js_dist_video_js_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _styles_video_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./styles/video.module.scss */ "./components/common/styles/video.module.scss");
/* harmony import */ var _styles_video_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_video_module_scss__WEBPACK_IMPORTED_MODULE_12__);







var _jsxFileName = "D:\\Freeskies-development-\\components\\common\\VideoPlayer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



 // Add hls plug-in to guarantee to play m3u8 format video

 // Import videojs style

 // Custom style (see below)

 // Add videojs to window, zh-CN.js language registration depends on videojs.addLanguage() method
// If the configuration does not take effect, set the <html lang="en"> </html> lang in public/index.html to "zh-CN"
// window.videojs = Videojs;

__webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! video.js/dist/lang/zh-CN.js */ "./node_modules/video.js/dist/lang/zh-CN.js", 7));

var VideoPlayer = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(VideoPlayer, _Component);

  var _super = _createSuper(VideoPlayer);

  function VideoPlayer() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, VideoPlayer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      videoId: "custom-video" + +new Date()
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(VideoPlayer, [{
    key: "UNSAFE_componentWillReceiveProps",
    // Initialize content
    value: function UNSAFE_componentWillReceiveProps(props) {
      try {
        var src = props.src;
        if (!src || src === this.props.src) return;
        this.initVideo(src);
      } catch (error) {
        console.log(error);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // Destroy the player
      if (this.player) {
        this.player.dispose();
      }
    } // initialize

  }, {
    key: "initVideo",
    value: function initVideo(src) {
      var videoId = this.state.videoId;
      var _this$props = this.props,
          height = _this$props.height,
          width = _this$props.width;
      this.player = video_js__WEBPACK_IMPORTED_MODULE_9___default()(videoId, {
        height: height,
        width: width,
        controls: true,
        preload: "auto",
        fluid: true
      });
      this.player.src({
        src: src
      });
    }
  }, {
    key: "render",
    value: function render() {
      var videoId = this.state.videoId;
      return __jsx("div", {
        className: _styles_video_module_scss__WEBPACK_IMPORTED_MODULE_12___default.a.custom_video_warpper,
        style: {
          display: this.props.src ? "block" : "none"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 7
        }
      }, __jsx("video", {
        id: videoId,
        className: _styles_video_module_scss__WEBPACK_IMPORTED_MODULE_12___default.a.video_js,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 9
        }
      }));
    }
  }]);

  return VideoPlayer;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(VideoPlayer, "propTypes", {
  // video address
  src: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  // Video height
  height: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  // video width
  width: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string
});

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(VideoPlayer, "defaultProps", {
  src: "",
  height: 360,
  width: 640
});

/* harmony default export */ __webpack_exports__["default"] = (VideoPlayer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vVmlkZW9QbGF5ZXIuanMiXSwibmFtZXMiOlsiVmlkZW9QbGF5ZXIiLCJ2aWRlb0lkIiwiRGF0ZSIsInByb3BzIiwic3JjIiwiaW5pdFZpZGVvIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwicGxheWVyIiwiZGlzcG9zZSIsInN0YXRlIiwiaGVpZ2h0Iiwid2lkdGgiLCJWaWRlb2pzIiwiY29udHJvbHMiLCJwcmVsb2FkIiwiZmx1aWQiLCJzdHlsZXMiLCJjdXN0b21fdmlkZW9fd2FycHBlciIsImRpc3BsYXkiLCJ2aWRlb19qcyIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBSUE7O0NBRUE7O0NBRUE7O0NBR0E7QUFDQTtBQUNBOztBQUNBOztJQUVNQSxXOzs7Ozs7Ozs7Ozs7Ozs7O2dOQWlCSTtBQUNOQyxhQUFPLEVBQUUsaUJBQWlCLENBQUMsSUFBSUMsSUFBSjtBQURyQixLOzs7Ozs7O0FBSVI7cURBQ2lDQyxLLEVBQU87QUFDdEMsVUFBSTtBQUFBLFlBQ01DLEdBRE4sR0FDY0QsS0FEZCxDQUNNQyxHQUROO0FBRUYsWUFBSSxDQUFDQSxHQUFELElBQVFBLEdBQUcsS0FBSyxLQUFLRCxLQUFMLENBQVdDLEdBQS9CLEVBQW9DO0FBQ3BDLGFBQUtDLFNBQUwsQ0FBZUQsR0FBZjtBQUNELE9BSkQsQ0FJRSxPQUFPRSxLQUFQLEVBQWM7QUFDZEMsZUFBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDRDtBQUNGOzs7MkNBRXNCO0FBQ3JCO0FBQ0EsVUFBSSxLQUFLRyxNQUFULEVBQWlCO0FBQ2YsYUFBS0EsTUFBTCxDQUFZQyxPQUFaO0FBQ0Q7QUFDRixLLENBRUQ7Ozs7OEJBQ1VOLEcsRUFBSztBQUFBLFVBQ0xILE9BREssR0FDTyxLQUFLVSxLQURaLENBQ0xWLE9BREs7QUFBQSx3QkFFYSxLQUFLRSxLQUZsQjtBQUFBLFVBRUxTLE1BRkssZUFFTEEsTUFGSztBQUFBLFVBRUdDLEtBRkgsZUFFR0EsS0FGSDtBQUdiLFdBQUtKLE1BQUwsR0FBY0ssK0NBQU8sQ0FBQ2IsT0FBRCxFQUFVO0FBQzdCVyxjQUFNLEVBQU5BLE1BRDZCO0FBRTdCQyxhQUFLLEVBQUxBLEtBRjZCO0FBRzdCRSxnQkFBUSxFQUFFLElBSG1CO0FBSTdCQyxlQUFPLEVBQUUsTUFKb0I7QUFLN0JDLGFBQUssRUFBRTtBQUxzQixPQUFWLENBQXJCO0FBUUEsV0FBS1IsTUFBTCxDQUFZTCxHQUFaLENBQWdCO0FBQUVBLFdBQUcsRUFBSEE7QUFBRixPQUFoQjtBQUNEOzs7NkJBRVE7QUFBQSxVQUNDSCxPQURELEdBQ2EsS0FBS1UsS0FEbEIsQ0FDQ1YsT0FERDtBQUVQLGFBQ0U7QUFDRSxpQkFBUyxFQUFFaUIsaUVBQU0sQ0FBQ0Msb0JBRHBCO0FBRUUsYUFBSyxFQUFFO0FBQ0xDLGlCQUFPLEVBQUUsS0FBS2pCLEtBQUwsQ0FBV0MsR0FBWCxHQUFpQixPQUFqQixHQUEyQjtBQUQvQixTQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FPRTtBQUFPLFVBQUUsRUFBRUgsT0FBWDtBQUFvQixpQkFBUyxFQUFFaUIsaUVBQU0sQ0FBQ0csUUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVBGLENBREY7QUFXRDs7OztFQW5FdUJDLCtDOzswRkFBcEJ0QixXLGVBQ2U7QUFDakI7QUFDQUksS0FBRyxFQUFFbUIsaURBQVMsQ0FBQ0MsTUFGRTtBQUdqQjtBQUNBWixRQUFNLEVBQUVXLGlEQUFTLENBQUNDLE1BSkQ7QUFLakI7QUFDQVgsT0FBSyxFQUFFVSxpREFBUyxDQUFDQztBQU5BLEM7OzBGQURmeEIsVyxrQkFXa0I7QUFDcEJJLEtBQUcsRUFBRSxFQURlO0FBRXBCUSxRQUFNLEVBQUUsR0FGWTtBQUdwQkMsT0FBSyxFQUFFO0FBSGEsQzs7QUEyRFRiLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3RpbWVsaW5lLjYyOTMzOTFhN2YzYjQ3Yzc3YWUxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbmltcG9ydCBWaWRlb2pzIGZyb20gXCJ2aWRlby5qc1wiO1xyXG5cclxuLy8gQWRkIGhscyBwbHVnLWluIHRvIGd1YXJhbnRlZSB0byBwbGF5IG0zdTggZm9ybWF0IHZpZGVvXHJcbmltcG9ydCBcInZpZGVvanMtY29udHJpYi1obHNcIjtcclxuLy8gSW1wb3J0IHZpZGVvanMgc3R5bGVcclxuaW1wb3J0IFwidmlkZW8uanMvZGlzdC92aWRlby1qcy5jc3NcIjtcclxuLy8gQ3VzdG9tIHN0eWxlIChzZWUgYmVsb3cpXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAgXCIuL3N0eWxlcy92aWRlby5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuLy8gQWRkIHZpZGVvanMgdG8gd2luZG93LCB6aC1DTi5qcyBsYW5ndWFnZSByZWdpc3RyYXRpb24gZGVwZW5kcyBvbiB2aWRlb2pzLmFkZExhbmd1YWdlKCkgbWV0aG9kXHJcbi8vIElmIHRoZSBjb25maWd1cmF0aW9uIGRvZXMgbm90IHRha2UgZWZmZWN0LCBzZXQgdGhlIDxodG1sIGxhbmc9XCJlblwiPiA8L2h0bWw+IGxhbmcgaW4gcHVibGljL2luZGV4Lmh0bWwgdG8gXCJ6aC1DTlwiXHJcbi8vIHdpbmRvdy52aWRlb2pzID0gVmlkZW9qcztcclxuaW1wb3J0KFwidmlkZW8uanMvZGlzdC9sYW5nL3poLUNOLmpzXCIpO1xyXG5cclxuY2xhc3MgVmlkZW9QbGF5ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAvLyB2aWRlbyBhZGRyZXNzXHJcbiAgICBzcmM6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAvLyBWaWRlbyBoZWlnaHRcclxuICAgIGhlaWdodDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIC8vIHZpZGVvIHdpZHRoXHJcbiAgICB3aWR0aDogUHJvcFR5cGVzLnN0cmluZ1xyXG4gIH07XHJcblxyXG4gIC8vIGRlZmF1bHQgcHJvcHNcclxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgc3JjOiBcIlwiLFxyXG4gICAgaGVpZ2h0OiAzNjAsXHJcbiAgICB3aWR0aDogNjQwXHJcbiAgfTtcclxuXHJcbiAgc3RhdGUgPSB7XHJcbiAgICB2aWRlb0lkOiBcImN1c3RvbS12aWRlb1wiICsgK25ldyBEYXRlKClcclxuICB9O1xyXG5cclxuICAvLyBJbml0aWFsaXplIGNvbnRlbnRcclxuICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBzcmMgfSA9IHByb3BzO1xyXG4gICAgICBpZiAoIXNyYyB8fCBzcmMgPT09IHRoaXMucHJvcHMuc3JjKSByZXR1cm47XHJcbiAgICAgIHRoaXMuaW5pdFZpZGVvKHNyYyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIC8vIERlc3Ryb3kgdGhlIHBsYXllclxyXG4gICAgaWYgKHRoaXMucGxheWVyKSB7XHJcbiAgICAgIHRoaXMucGxheWVyLmRpc3Bvc2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGluaXRpYWxpemVcclxuICBpbml0VmlkZW8oc3JjKSB7XHJcbiAgICBjb25zdCB7IHZpZGVvSWQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zdCB7IGhlaWdodCwgd2lkdGggfSA9IHRoaXMucHJvcHM7XHJcbiAgICB0aGlzLnBsYXllciA9IFZpZGVvanModmlkZW9JZCwge1xyXG4gICAgICBoZWlnaHQsXHJcbiAgICAgIHdpZHRoLFxyXG4gICAgICBjb250cm9sczogdHJ1ZSxcclxuICAgICAgcHJlbG9hZDogXCJhdXRvXCIsXHJcbiAgICAgIGZsdWlkOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnBsYXllci5zcmMoeyBzcmMgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IHZpZGVvSWQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY3VzdG9tX3ZpZGVvX3dhcnBwZXJ9XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGRpc3BsYXk6IHRoaXMucHJvcHMuc3JjID8gXCJibG9ja1wiIDogXCJub25lXCJcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgey8qIFRoZSBjbGFzc05hbWUgb2YgdGhlIHZpZGVvIHRhZyBtdXN0IGJlIFwidmlkZW8tanNcIiwgb3RoZXJ3aXNlIHRoZSBzdHlsZSB3aWxsIG5vdCB0YWtlIGVmZmVjdCAqL31cclxuICAgICAgICA8dmlkZW8gaWQ9e3ZpZGVvSWR9IGNsYXNzTmFtZT17c3R5bGVzLnZpZGVvX2pzfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWaWRlb1BsYXllcjsiXSwic291cmNlUm9vdCI6IiJ9