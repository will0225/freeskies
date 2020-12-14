webpackHotUpdate_N_E("pages/timeline",{

/***/ "./components/common/LinkPreview.js":
/*!******************************************!*\
  !*** ./components/common/LinkPreview.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LinkPreview; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\Freeskies-development-\\components\\common\\LinkPreview.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function LinkPreview(_ref) {
  _s();

  var data = _ref.data;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log('iframly check', iframely);
    window.iframely && iframely.load();
  }, []);

  var getIframelyHtml = function getIframelyHtml(html) {
    // If you use embed code from API
    return {
      __html: html
    }; // Alternatively, if you use plain embed.js approach without API calls:
    // return {__html: '<a href="' + this.url + '" data-iframely-url></a>'};
    // no title inside <a> eliminates the flick
    // but getting actual HTML from our APIs is still recommended 
    // as it will have better sizing initially
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    dangerouslySetInnerHTML: getIframelyHtml(react_html_parser__WEBPACK_IMPORTED_MODULE_1___default()(data))
  }));
}

_s(LinkPreview, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = LinkPreview;

var _c;

$RefreshReg$(_c, "LinkPreview");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vTGlua1ByZXZpZXcuanMiXSwibmFtZXMiOlsiTGlua1ByZXZpZXciLCJkYXRhIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImlmcmFtZWx5Iiwid2luZG93IiwibG9hZCIsImdldElmcmFtZWx5SHRtbCIsImh0bWwiLCJfX2h0bWwiLCJSZWFjdEh0bWxQYXJzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxXQUFULE9BQStCO0FBQUE7O0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQzVDQyx5REFBUyxDQUFDLFlBQU07QUFBQ0MsV0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWixFQUE2QkMsUUFBN0I7QUFDZkMsVUFBTSxDQUFDRCxRQUFQLElBQW1CQSxRQUFRLENBQUNFLElBQVQsRUFBbkI7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUOztBQUlBLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsSUFBRCxFQUFVO0FBQ2hDO0FBQ0EsV0FBTztBQUFDQyxZQUFNLEVBQUVEO0FBQVQsS0FBUCxDQUZnQyxDQUloQztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0QsR0FWRDs7QUFZQSxTQUFRLG1FQUNOO0FBQUssMkJBQXVCLEVBQUVELGVBQWUsQ0FBQ0csd0RBQWUsQ0FBQ1YsSUFBRCxDQUFoQjtBQUE3QyxJQURNLENBQVI7QUFJRDs7R0FyQnVCRCxXOztLQUFBQSxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3RpbWVsaW5lLjcyOTgwNTczNGM2ZDFmMzViYmNhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RIdG1sUGFyc2VyIGZyb20gJ3JlYWN0LWh0bWwtcGFyc2VyJzsgXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaW5rUHJldmlldyh7IGRhdGEgfSkge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7Y29uc29sZS5sb2coJ2lmcmFtbHkgY2hlY2snLCBpZnJhbWVseSk7XHJcbiAgICB3aW5kb3cuaWZyYW1lbHkgJiYgaWZyYW1lbHkubG9hZCgpO1xyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBnZXRJZnJhbWVseUh0bWwgPSAoaHRtbCkgPT4ge1xyXG4gICAgLy8gSWYgeW91IHVzZSBlbWJlZCBjb2RlIGZyb20gQVBJXHJcbiAgICByZXR1cm4ge19faHRtbDogaHRtbH07XHJcblxyXG4gICAgLy8gQWx0ZXJuYXRpdmVseSwgaWYgeW91IHVzZSBwbGFpbiBlbWJlZC5qcyBhcHByb2FjaCB3aXRob3V0IEFQSSBjYWxsczpcclxuICAgIC8vIHJldHVybiB7X19odG1sOiAnPGEgaHJlZj1cIicgKyB0aGlzLnVybCArICdcIiBkYXRhLWlmcmFtZWx5LXVybD48L2E+J307XHJcbiAgICAvLyBubyB0aXRsZSBpbnNpZGUgPGE+IGVsaW1pbmF0ZXMgdGhlIGZsaWNrXHJcblxyXG4gICAgLy8gYnV0IGdldHRpbmcgYWN0dWFsIEhUTUwgZnJvbSBvdXIgQVBJcyBpcyBzdGlsbCByZWNvbW1lbmRlZCBcclxuICAgIC8vIGFzIGl0IHdpbGwgaGF2ZSBiZXR0ZXIgc2l6aW5nIGluaXRpYWxseVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuICg8PlxyXG4gICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17Z2V0SWZyYW1lbHlIdG1sKFJlYWN0SHRtbFBhcnNlcihkYXRhKSl9IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=