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
    window.iframely && iframely.load("\n    <a href=\"https://github.com/socketio/socket.io\" data-iframely-url=\"//cdn.iframe.ly/api/iframe?url=https%3A%2F%2Fgithub.com%2Fsocketio%2Fsocket.io&amp;key=febef81570045491b1e84c757f7feb14\"></a>\n    ");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vTGlua1ByZXZpZXcuanMiXSwibmFtZXMiOlsiTGlua1ByZXZpZXciLCJkYXRhIiwidXNlRWZmZWN0Iiwid2luZG93IiwiaWZyYW1lbHkiLCJsb2FkIiwiZ2V0SWZyYW1lbHlIdG1sIiwiaHRtbCIsIl9faHRtbCIsIlJlYWN0SHRtbFBhcnNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLFdBQVQsT0FBK0I7QUFBQTs7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFDNUNDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxVQUFNLENBQUNDLFFBQVAsSUFBbUJBLFFBQVEsQ0FBQ0MsSUFBVCxvTkFBbkI7QUFHRCxHQUpRLEVBSU4sRUFKTSxDQUFUOztBQU1BLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsSUFBRCxFQUFVO0FBQ2hDO0FBQ0EsV0FBTztBQUFDQyxZQUFNLEVBQUVEO0FBQVQsS0FBUCxDQUZnQyxDQUloQztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0QsR0FWRDs7QUFZQSxTQUFRLG1FQUNOO0FBQUssMkJBQXVCLEVBQUVELGVBQWUsQ0FBQ0csd0RBQWUsQ0FBQ1IsSUFBRCxDQUFoQjtBQUE3QyxJQURNLENBQVI7QUFJRDs7R0F2QnVCRCxXOztLQUFBQSxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3RpbWVsaW5lLjI1ZjZiOTQyYjRiN2MyZmQwOTU5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RIdG1sUGFyc2VyIGZyb20gJ3JlYWN0LWh0bWwtcGFyc2VyJzsgXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaW5rUHJldmlldyh7IGRhdGEgfSkge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuaWZyYW1lbHkgJiYgaWZyYW1lbHkubG9hZChgXHJcbiAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3NvY2tldGlvL3NvY2tldC5pb1wiIGRhdGEtaWZyYW1lbHktdXJsPVwiLy9jZG4uaWZyYW1lLmx5L2FwaS9pZnJhbWU/dXJsPWh0dHBzJTNBJTJGJTJGZ2l0aHViLmNvbSUyRnNvY2tldGlvJTJGc29ja2V0LmlvJmFtcDtrZXk9ZmViZWY4MTU3MDA0NTQ5MWIxZTg0Yzc1N2Y3ZmViMTRcIj48L2E+XHJcbiAgICBgKTtcclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3QgZ2V0SWZyYW1lbHlIdG1sID0gKGh0bWwpID0+IHtcclxuICAgIC8vIElmIHlvdSB1c2UgZW1iZWQgY29kZSBmcm9tIEFQSVxyXG4gICAgcmV0dXJuIHtfX2h0bWw6IGh0bWx9O1xyXG5cclxuICAgIC8vIEFsdGVybmF0aXZlbHksIGlmIHlvdSB1c2UgcGxhaW4gZW1iZWQuanMgYXBwcm9hY2ggd2l0aG91dCBBUEkgY2FsbHM6XHJcbiAgICAvLyByZXR1cm4ge19faHRtbDogJzxhIGhyZWY9XCInICsgdGhpcy51cmwgKyAnXCIgZGF0YS1pZnJhbWVseS11cmw+PC9hPid9O1xyXG4gICAgLy8gbm8gdGl0bGUgaW5zaWRlIDxhPiBlbGltaW5hdGVzIHRoZSBmbGlja1xyXG5cclxuICAgIC8vIGJ1dCBnZXR0aW5nIGFjdHVhbCBIVE1MIGZyb20gb3VyIEFQSXMgaXMgc3RpbGwgcmVjb21tZW5kZWQgXHJcbiAgICAvLyBhcyBpdCB3aWxsIGhhdmUgYmV0dGVyIHNpemluZyBpbml0aWFsbHlcclxuICB9XHJcblxyXG4gIHJldHVybiAoPD5cclxuICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e2dldElmcmFtZWx5SHRtbChSZWFjdEh0bWxQYXJzZXIoZGF0YSkpfSAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9