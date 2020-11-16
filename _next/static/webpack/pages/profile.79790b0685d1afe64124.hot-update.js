webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/header/Header.js":
/*!*************************************!*\
  !*** ./components/header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/header.module.scss */ "./components/header/styles/header.module.scss");
/* harmony import */ var _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/Avatar */ "./components/common/Avatar.js");
var _jsxFileName = "E:\\freeskies_fe_code\\components\\header\\Header.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function Header({
  withoutSearch,
  user
}) {
  _s();

  const {
    0: prevScrollPos,
    1: setPrevScrollPos
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  let time = null;

  const handleScroll = () => {
    try {
      const currentScrollPos = window.pageYOffset; // const visible = prevScrollPos > currentScrollPos;

      if (time) {
        clearTimeout(time);
      }

      time = setTimeout(() => {
        time = null;
        setVisible(true);
      }, 500);

      if (visible) {
        setVisible(false);
      } // setPrevScrollPos(currentScrollPos);
      // setVisible(visible);
      // timer = window.setTimeout(() => { console.log(timer)}, 500)

    } catch (error) {
      // catch windiow === undefined error
      console.log(error);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    try {
      window.addEventListener('scroll', lodash__WEBPACK_IMPORTED_MODULE_4___default.a.throttle(handleScroll, 250));
    } catch (error) {
      // catch windiow === undefined error
      console.log(error);
    }

    return () => {
      // unmount action
      try {
        window.removeEventListener('scroll', handleScroll);
      } catch (error) {
        // catch windiow === undefined error
        console.log(error);
      }
    };
  }, [prevScrollPos]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.header, {
      [_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.header_hidden]: !visible
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.logo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/logo.png",
    alt: "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.search,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, !withoutSearch && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("input", {
    name: "search",
    placeholder: "Search Freeskies",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }), __jsx(UserProfile, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }))), __jsx(UserProfile, {
    user: user,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.additional_header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.mobile_header, {
      [_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.header_hidden]: !visible
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, __jsx(UserProfile, {
    user: user,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }))));
}

_s(Header, "Xl9iMSLW1ykMo8qdIc4wCAIDyfw=");

_c = Header;

function UserProfile({
  user = {}
}) {
  _s2();

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  return __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.profile,
    onClick: () => {
      router.push('/profile');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }, (user === null || user === void 0 ? void 0 : user.profilePhoto) ? __jsx(_common_Avatar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: 40,
    url: user === null || user === void 0 ? void 0 : user.profilePhoto.src,
    text: user === null || user === void 0 ? void 0 : user.username,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }) : __jsx(_common_Avatar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: 40,
    text: user === null || user === void 0 ? void 0 : user.firstName,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  })), __jsx("span", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }, "".concat(user === null || user === void 0 ? void 0 : user.firstName)));
}

_s2(UserProfile, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c2 = UserProfile;

const mapStateToProps = store => ({
  user: store.auth.user
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps)(Header));

var _c, _c2;

$RefreshReg$(_c, "Header");
$RefreshReg$(_c2, "UserProfile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsIndpdGhvdXRTZWFyY2giLCJ1c2VyIiwicHJldlNjcm9sbFBvcyIsInNldFByZXZTY3JvbGxQb3MiLCJ1c2VTdGF0ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidGltZSIsImhhbmRsZVNjcm9sbCIsImN1cnJlbnRTY3JvbGxQb3MiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwiXyIsInRocm90dGxlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNsYXNzbmFtZXMiLCJzdHlsZXMiLCJoZWFkZXIiLCJoZWFkZXJfaGlkZGVuIiwiY29udGFpbmVyIiwibG9nbyIsInNlYXJjaCIsImFkZGl0aW9uYWxfaGVhZGVyIiwibW9iaWxlX2hlYWRlciIsIlVzZXJQcm9maWxlIiwicm91dGVyIiwidXNlUm91dGVyIiwicHJvZmlsZSIsInB1c2giLCJhdmF0YXIiLCJwcm9maWxlUGhvdG8iLCJzcmMiLCJ1c2VybmFtZSIsImZpcnN0TmFtZSIsIm5hbWUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdG9yZSIsImF1dGgiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsQ0FBZ0I7QUFBRUMsZUFBRjtBQUFpQkM7QUFBakIsQ0FBaEIsRUFBeUM7QUFBQTs7QUFDdkMsUUFBTTtBQUFBLE9BQUNDLGFBQUQ7QUFBQSxPQUFnQkM7QUFBaEIsTUFBb0NDLHNEQUFRLENBQUMsQ0FBRCxDQUFsRDtBQUNBLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkYsc0RB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OUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJKLENBTkYsRUFpQkU7QUFBTSxhQUFTLEVBQUVqQixpRUFBTSxDQUFDa0IsSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFrQ3hDLElBQWxDLGFBQWtDQSxJQUFsQyx1QkFBa0NBLElBQUksQ0FBRXVDLFNBQXhDLEVBakJGLENBREY7QUFxQkQ7O0lBdkJRVCxXO1VBQ1FFLHFEOzs7TUFEUkYsVzs7QUF5QlQsTUFBTVcsZUFBZSxHQUFJQyxLQUFELEtBQVk7QUFDbEMxQyxNQUFJLEVBQUUwQyxLQUFLLENBQUNDLElBQU4sQ0FBVzNDO0FBRGlCLENBQVosQ0FBeEI7O0FBSWU0QywwSEFBTyxDQUFDSCxlQUFELENBQVAsQ0FBeUIzQyxNQUF6QixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuNzk3OTBiMDY4NWQxYWZlNjQxMjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvaGVhZGVyLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IEF2YXRhciBmcm9tICcuLi9jb21tb24vQXZhdGFyJztcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcih7IHdpdGhvdXRTZWFyY2gsIHVzZXIgfSkge1xyXG4gIGNvbnN0IFtwcmV2U2Nyb2xsUG9zLCBzZXRQcmV2U2Nyb2xsUG9zXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBsZXQgdGltZSA9IG51bGw7XHJcbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgY3VycmVudFNjcm9sbFBvcyA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgICAgLy8gY29uc3QgdmlzaWJsZSA9IHByZXZTY3JvbGxQb3MgPiBjdXJyZW50U2Nyb2xsUG9zO1xyXG4gICAgICBpZih0aW1lKSB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWUpOyAgXHJcbiAgICAgIH1cclxuICAgICAgdGltZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRpbWUgPSBudWxsO1xyXG4gICAgICAgIHNldFZpc2libGUodHJ1ZSlcclxuICAgICAgfSwgNTAwKVxyXG4gICAgICBpZih2aXNpYmxlKSB7XHJcbiAgICAgICAgc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gc2V0UHJldlNjcm9sbFBvcyhjdXJyZW50U2Nyb2xsUG9zKTtcclxuICAgICAgLy8gc2V0VmlzaWJsZSh2aXNpYmxlKTtcclxuICAgICAgLy8gdGltZXIgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7IGNvbnNvbGUubG9nKHRpbWVyKX0sIDUwMClcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIC8vIGNhdGNoIHdpbmRpb3cgPT09IHVuZGVmaW5lZCBlcnJvclxyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBfLnRocm90dGxlKGhhbmRsZVNjcm9sbCwgMjUwKSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAvLyBjYXRjaCB3aW5kaW93ID09PSB1bmRlZmluZWQgZXJyb3JcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgLy8gdW5tb3VudCBhY3Rpb25cclxuICAgICAgdHJ5IHtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAvLyBjYXRjaCB3aW5kaW93ID09PSB1bmRlZmluZWQgZXJyb3JcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfSwgW3ByZXZTY3JvbGxQb3NdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmhlYWRlciwge1xyXG4gICAgICAgICAgW3N0eWxlcy5oZWFkZXJfaGlkZGVuXTogIXZpc2libGUsXHJcbiAgICAgICAgfSl9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ299PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9sb2dvLnBuZ1wiIGFsdD1cImxvZ29cIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaH0+XHJcbiAgICAgICAgICAgIHshd2l0aG91dFNlYXJjaCAmJiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggRnJlZXNraWVzXCIgLz5cclxuICAgICAgICAgICAgICAgIDxVc2VyUHJvZmlsZSAvPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8VXNlclByb2ZpbGUgdXNlcj17dXNlcn0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRkaXRpb25hbF9oZWFkZXJ9IC8+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLm1vYmlsZV9oZWFkZXIsIHtcclxuICAgICAgICAgIFtzdHlsZXMuaGVhZGVyX2hpZGRlbl06ICF2aXNpYmxlLFxyXG4gICAgICAgIH0pfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgPFVzZXJQcm9maWxlIHVzZXI9e3VzZXJ9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gVXNlclByb2ZpbGUoeyB1c2VyID0ge30gfSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGV9XHJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICByb3V0ZXIucHVzaCgnL3Byb2ZpbGUnKTtcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9PlxyXG4gICAgICAgIHsgdXNlcj8ucHJvZmlsZVBob3RvID8gKFxyXG4gICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgc2l6ZT17NDB9XHJcbiAgICAgICAgICAgICAgdXJsPXt1c2VyPy5wcm9maWxlUGhvdG8uc3JjfVxyXG4gICAgICAgICAgICAgIHRleHQ9e3VzZXI/LnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxBdmF0YXIgc2l6ZT17NDB9IHRleHQ9e3VzZXI/LmZpcnN0TmFtZX0gLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubmFtZX0+e2Ake3VzZXI/LmZpcnN0TmFtZX1gfTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdG9yZSkgPT4gKHtcclxuICB1c2VyOiBzdG9yZS5hdXRoLnVzZXIsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEhlYWRlcik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=