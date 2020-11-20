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
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
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
  const {
    0: searchModal,
    1: setSearchModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
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
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.header, {
      [_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.header_hidden]: !visible
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.logo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/logo.png",
    alt: "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.search,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }, !withoutSearch && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("input", {
    name: "search",
    placeholder: "Search Freeskies",
    onClick: () => setSearchModal(true),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }), __jsx(UserProfile, {
    user: user,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }))), __jsx(UserProfile, {
    user: user,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.searchModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.searchHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 15
    }
  }, __jsx("input", {
    placeholder: "search content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.searchContent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 15
    }
  }, "dsafdsafd"))), __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.additional_header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.mobile_profile_header, {
      [_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.header_hidden]: !visible
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: ['far', 'star'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: ['far', 'address-card'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    onClick: () => {
      router.push('/profile');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: ['far', 'user-circle'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: ['far', 'list-alt'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.mobile_top_header, {
      [_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.header_hidden]: !visible
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.logo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/logo.png",
    alt: "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.search,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 11
    }
  }, !withoutSearch && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("input", {
    name: "search",
    placeholder: "Search Freeskies",
    onClick: () => setSearchModal(true),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 17
    }
  }))))));
}

_s(Header, "yn+/KiLj6Lep0QlQGtZgMAIIU8s=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

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
      lineNumber: 143,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 7
    }
  }, (user === null || user === void 0 ? void 0 : user.profilePhoto) ? __jsx(_common_Avatar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: 40,
    url: user === null || user === void 0 ? void 0 : user.profilePhoto.src,
    text: user === null || user === void 0 ? void 0 : user.username,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 13
    }
  }) : __jsx(_common_Avatar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: 40,
    text: user === null || user === void 0 ? void 0 : user.firstName,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 11
    }
  })), __jsx("span", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsIndpdGhvdXRTZWFyY2giLCJ1c2VyIiwicHJldlNjcm9sbFBvcyIsInNldFByZXZTY3JvbGxQb3MiLCJ1c2VTdGF0ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwic2VhcmNoTW9kYWwiLCJzZXRTZWFyY2hNb2RhbCIsInRpbWUiLCJoYW5kbGVTY3JvbGwiLCJjdXJyZW50U2Nyb2xsUG9zIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsIl8iLCJ0aHJvdHRsZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXR0aW5ncyIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjbGFzc25hbWVzIiwic3R5bGVzIiwiaGVhZGVyIiwiaGVhZGVyX2hpZGRlbiIsImNvbnRhaW5lciIsImxvZ28iLCJzZWFyY2giLCJzZWFyY2hIZWFkZXIiLCJzZWFyY2hDb250ZW50IiwiYWRkaXRpb25hbF9oZWFkZXIiLCJtb2JpbGVfcHJvZmlsZV9oZWFkZXIiLCJwdXNoIiwibW9iaWxlX3RvcF9oZWFkZXIiLCJVc2VyUHJvZmlsZSIsInByb2ZpbGUiLCJhdmF0YXIiLCJwcm9maWxlUGhvdG8iLCJzcmMiLCJ1c2VybmFtZSIsImZpcnN0TmFtZSIsIm5hbWUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdG9yZSIsImF1dGgiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxNQUFULENB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O0FBRUUsT0FBRyxFQUFFL0MsSUFBRixhQUFFQSxJQUFGLHVCQUFFQSxJQUFJLENBQUUrQyxZQUFOLENBQW1CQyxHQUYxQjtBQUdFLFFBQUksRUFBRWhELElBQUYsYUFBRUEsSUFBRix1QkFBRUEsSUFBSSxDQUFFaUQsUUFIZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsR0FPQSxNQUFDLHNEQUFEO0FBQVEsUUFBSSxFQUFFLEVBQWQ7QUFBa0IsUUFBSSxFQUFFakQsSUFBRixhQUFFQSxJQUFGLHVCQUFFQSxJQUFJLENBQUVrRCxTQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkosQ0FORixFQWlCRTtBQUFNLGFBQVMsRUFBRWxCLGlFQUFNLENBQUNtQixJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQWtDbkQsSUFBbEMsYUFBa0NBLElBQWxDLHVCQUFrQ0EsSUFBSSxDQUFFa0QsU0FBeEMsRUFqQkYsQ0FERjtBQXFCRDs7SUF2QlFOLFc7VUFDUWQscUQ7OztNQURSYyxXOztBQXlCVCxNQUFNUSxlQUFlLEdBQUlDLEtBQUQsS0FBWTtBQUNsQ3JELE1BQUksRUFBRXFELEtBQUssQ0FBQ0MsSUFBTixDQUFXdEQ7QUFEaUIsQ0FBWixDQUF4Qjs7QUFJZXVELDBIQUFPLENBQUNILGVBQUQsQ0FBUCxDQUF5QnRELE1BQXpCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS5jMDRlYWYzYWFhNDA2YWQzZmFmNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy9oZWFkZXIubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJy4uL2NvbW1vbi9BdmF0YXInO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIEhlYWRlcih7IHdpdGhvdXRTZWFyY2gsIHVzZXIgfSkge1xyXG4gIGNvbnN0IFtwcmV2U2Nyb2xsUG9zLCBzZXRQcmV2U2Nyb2xsUG9zXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtzZWFyY2hNb2RhbCwgc2V0U2VhcmNoTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBsZXQgdGltZSA9IG51bGw7XHJcbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgY3VycmVudFNjcm9sbFBvcyA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgICAgLy8gY29uc3QgdmlzaWJsZSA9IHByZXZTY3JvbGxQb3MgPiBjdXJyZW50U2Nyb2xsUG9zO1xyXG4gICAgICBpZih0aW1lKSB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWUpOyAgXHJcbiAgICAgIH1cclxuICAgICAgdGltZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRpbWUgPSBudWxsO1xyXG4gICAgICAgIHNldFZpc2libGUodHJ1ZSlcclxuICAgICAgfSwgNTAwKVxyXG4gICAgICBpZih2aXNpYmxlKSB7XHJcbiAgICAgICAgc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gc2V0UHJldlNjcm9sbFBvcyhjdXJyZW50U2Nyb2xsUG9zKTtcclxuICAgICAgLy8gc2V0VmlzaWJsZSh2aXNpYmxlKTtcclxuICAgICAgLy8gdGltZXIgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7IGNvbnNvbGUubG9nKHRpbWVyKX0sIDUwMClcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIC8vIGNhdGNoIHdpbmRpb3cgPT09IHVuZGVmaW5lZCBlcnJvclxyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBfLnRocm90dGxlKGhhbmRsZVNjcm9sbCwgMjUwKSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAvLyBjYXRjaCB3aW5kaW93ID09PSB1bmRlZmluZWQgZXJyb3JcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgLy8gdW5tb3VudCBhY3Rpb25cclxuICAgICAgdHJ5IHtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAvLyBjYXRjaCB3aW5kaW93ID09PSB1bmRlZmluZWQgZXJyb3JcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfSwgW3ByZXZTY3JvbGxQb3NdKTtcclxuXHJcbiAgdmFyIHNldHRpbmdzID0ge1xyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgc3BlZWQ6IDUwMCxcclxuICAgIHNsaWRlc1RvU2hvdzogNSxcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgfTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuaGVhZGVyLCB7XHJcbiAgICAgICAgICBbc3R5bGVzLmhlYWRlcl9oaWRkZW5dOiAhdmlzaWJsZSxcclxuICAgICAgICB9KX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2xvZ28ucG5nXCIgYWx0PVwibG9nb1wiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNofT5cclxuICAgICAgICAgICAgeyF3aXRob3V0U2VhcmNoICYmIChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCBGcmVlc2tpZXNcIiBvbkNsaWNrPXsoKT0+c2V0U2VhcmNoTW9kYWwodHJ1ZSl9Lz5cclxuICAgICAgICAgICAgICAgIDxVc2VyUHJvZmlsZSB1c2VyPXt1c2VyfS8+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxVc2VyUHJvZmlsZSB1c2VyPXt1c2VyfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoTW9kYWx9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoSGVhZGVyfT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cInNlYXJjaCBjb250ZW50XCIvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoQ29udGVudH0+XHJcbiAgICAgICAgICAgICAgICBkc2FmZHNhZmRcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRkaXRpb25hbF9oZWFkZXJ9IC8+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLm1vYmlsZV9wcm9maWxlX2hlYWRlciwge1xyXG4gICAgICAgICAgW3N0eWxlcy5oZWFkZXJfaGlkZGVuXTogIXZpc2libGUsXHJcbiAgICAgICAgfSl9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ3N0YXInXX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ2FkZHJlc3MtY2FyZCddfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICByb3V0ZXIucHVzaCgnL3Byb2ZpbGUnKTtcclxuICAgICAgICB9fT5cclxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAndXNlci1jaXJjbGUnXX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ2xpc3QtYWx0J119IC8+XHJcbiAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLm1vYmlsZV90b3BfaGVhZGVyLCB7XHJcbiAgICAgICAgICBbc3R5bGVzLmhlYWRlcl9oaWRkZW5dOiAhdmlzaWJsZSxcclxuICAgICAgICB9KX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2xvZ28ucG5nXCIgYWx0PVwibG9nb1wiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNofT5cclxuICAgICAgICAgICAgeyF3aXRob3V0U2VhcmNoICYmIChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCBGcmVlc2tpZXNcIiBvbkNsaWNrPXsoKT0+c2V0U2VhcmNoTW9kYWwodHJ1ZSl9Lz5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFVzZXJQcm9maWxlKHsgdXNlciA9IHt9IH0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlfVxyXG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy9wcm9maWxlJyk7XHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyfT5cclxuICAgICAgICB7IHVzZXI/LnByb2ZpbGVQaG90byA/IChcclxuICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgIHNpemU9ezQwfVxyXG4gICAgICAgICAgICAgIHVybD17dXNlcj8ucHJvZmlsZVBob3RvLnNyY31cclxuICAgICAgICAgICAgICB0ZXh0PXt1c2VyPy51c2VybmFtZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8QXZhdGFyIHNpemU9ezQwfSB0ZXh0PXt1c2VyPy5maXJzdE5hbWV9IC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm5hbWV9PntgJHt1c2VyPy5maXJzdE5hbWV9YH08L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RvcmUpID0+ICh7XHJcbiAgdXNlcjogc3RvcmUuYXV0aC51c2VyLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShIZWFkZXIpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9