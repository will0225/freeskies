webpackHotUpdate_N_E("pages/timeline",{

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
/* harmony import */ var _configs_API__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../configs/API */ "./configs/API.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var _jsxFileName = "E:\\freeskies_fe_code\\components\\header\\Header.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












function Header({
  withoutSearch,
  user,
  auth
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
  const {
    0: searchData,
    1: setSearchData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
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

  const searchChange = async event => {
    try {
      const request = await Object(_configs_API__WEBPACK_IMPORTED_MODULE_9__["default"])({
        method: 'post',
        url: '/search',
        data: {
          "query": event.target.value,
          "offset": 0,
          "first": 10
        },
        headers: {
          'x-token': auth.token
        }
      });
      const {
        status,
        data
      } = request;

      if (status == 200) {
        setSearchData(data);
      } else {
        antd__WEBPACK_IMPORTED_MODULE_10__["message"].error('Please try again!');
        setSearchData(data);
      }
    } catch (err) {
      console.log(err);
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
  console.log(searchModal);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.header, {
      [_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.header_hidden]: !visible
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
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
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.logo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/logo.png",
    alt: "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.search,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }, !withoutSearch && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("input", {
    name: "search",
    placeholder: "Search Freeskies",
    onClick: () => setSearchModal(true),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }), __jsx(UserProfile, {
    user: user,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 17
    }
  }))), __jsx(UserProfile, {
    user: user,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.additional_header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.mobile_profile_header, {
      [_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.header_hidden]: !visible
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: ['far', 'star'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: ['far', 'address-card'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
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
      lineNumber: 131,
      columnNumber: 9
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: ['far', 'user-circle'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: ['far', 'list-alt'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.mobile_top_header, {
      [_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.header_hidden]: !visible
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.logo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/logo.png",
    alt: "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.search,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 11
    }
  }, !withoutSearch && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("input", {
    name: "search",
    placeholder: "Search Freeskies",
    onClick: () => setSearchModal(true),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 17
    }
  }))))), searchModal ? __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.searchModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 20
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.searchHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 15
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: ['far', 'hand-point-left'],
    style: {
      fontSize: 25,
      marginTop: 8,
      flex: 1,
      cursor: 'pointer'
    },
    onClick: () => setSearchModal(false),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 17
    }
  }), __jsx("input", {
    name: "search",
    placeholder: "Search Freeskies",
    onChange: searchChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.searchContent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 15
    }
  }, searchData.length > 0 ? searchData.map((item, index) => {
    var _item$profilePhoto;

    return __jsx("div", {
      style: {
        display: 'flex',
        marginBottom: 5
      },
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.avatar,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 19
      }
    }, __jsx(_common_Avatar__WEBPACK_IMPORTED_MODULE_6__["default"], {
      size: 50,
      url: item === null || item === void 0 ? void 0 : (_item$profilePhoto = item.profilePhoto) === null || _item$profilePhoto === void 0 ? void 0 : _item$profilePhoto.src,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 21
      }
    })), __jsx("div", {
      className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.user_info,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 19
      }
    }, __jsx("p", {
      className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.user_name,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 21
      }
    }, item.username)));
  }) : __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 25
    }
  }, "No data"))) : null);
}

_s(Header, "PiO1snRo/augDCT7qupMtsQhCIE=", false, function () {
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
      lineNumber: 187,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 7
    }
  }, (user === null || user === void 0 ? void 0 : user.profilePhoto) ? __jsx(_common_Avatar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: 40,
    url: user === null || user === void 0 ? void 0 : user.profilePhoto.src,
    text: user === null || user === void 0 ? void 0 : user.username,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 13
    }
  }) : __jsx(_common_Avatar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: 40,
    text: user === null || user === void 0 ? void 0 : user.firstName,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 11
    }
  })), __jsx("span", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 7
    }
  }, "".concat(user === null || user === void 0 ? void 0 : user.firstName)));
}

_s2(UserProfile, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c2 = UserProfile;

const mapStateToProps = store => ({
  user: store.auth.user,
  auth: store.auth
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

/***/ }),

/***/ "./components/header/styles/header.module.scss":
/*!*****************************************************!*\
  !*** ./components/header/styles/header.module.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./header.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/header/styles/header.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./header.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/header/styles/header.module.scss",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./header.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/header/styles/header.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./containers/Timeline/TimelinePage.js":
/*!*********************************************!*\
  !*** ./containers/Timeline/TimelinePage.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/header/Header */ "./components/header/Header.js");
/* harmony import */ var components_timeline_TimelinePosts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/timeline/TimelinePosts */ "./components/timeline/TimelinePosts.js");
/* harmony import */ var components_profile_PostingPost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/profile/PostingPost */ "./components/profile/PostingPost.js");
/* harmony import */ var _styles_timeline_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/timeline.module.scss */ "./containers/Timeline/styles/timeline.module.scss");
/* harmony import */ var _styles_timeline_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_timeline_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var configs_API__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! configs/API */ "./configs/API.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _storage_TimelineContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./storage/TimelineContext */ "./containers/Timeline/storage/TimelineContext.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./actions */ "./containers/Timeline/actions/index.js");
/* harmony import */ var components_common_LoadingWrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/common/LoadingWrapper */ "./components/common/LoadingWrapper.js");
/* harmony import */ var _helpers_hoc_requireAuth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../helpers/hoc/requireAuth */ "./helpers/hoc/requireAuth.js");
/* harmony import */ var _components_common_ModalWrapper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/common/ModalWrapper */ "./components/common/ModalWrapper.js");
/* harmony import */ var _components_common_Avatar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/common/Avatar */ "./components/common/Avatar.js");


var _jsxFileName = "E:\\freeskies_fe_code\\containers\\Timeline\\TimelinePage.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }















function TimelinePage({
  authServices,
  auth
}) {
  _s();

  var _user$profilePhoto;

  const {
    0: storage,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_storage_TimelineContext__WEBPACK_IMPORTED_MODULE_8__["TimeLineContext"]);
  const {
    0: postModal,
    1: setPostModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: mobile_profile_header,
    1: setMobileProfileHeader
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const getTimeline = async (token, withoutLoading = false) => {
    // console.warn(authServices.auth, authServices.localstorage);
    try {
      if (!withoutLoading) dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_9__["setLoading"])(true));
      const request = await Object(configs_API__WEBPACK_IMPORTED_MODULE_6__["default"])({
        method: 'post',
        url: '/accounts/timeline',
        headers: {
          'x-token': token
        }
      });
      const {
        data,
        status
      } = request;

      if (status === 200) {
        var totalData = data.map(element => {
          element = filterAccountData(element);
          return element;
        });
        dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_9__["setTimelineData"])(totalData));
        console.log('=========');
      } else if (status === 403) {
        console.log('================= Refresh token !');
        authServices.refreshToken(getTimeline);
      } else {
        antd__WEBPACK_IMPORTED_MODULE_7__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
      }

      if (!withoutLoading) dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_9__["setLoading"])(false));
    } catch (error) {
      console.log(error);
      if (!withoutLoading) dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_9__["setLoading"])(false));
    }
  };

  const filterAccountData = comment_shared => {
    if (comment_shared.type === 'Comment') {
      if (comment_shared.commented.type == 'Post') {
        return _objectSpread(_objectSpread({}, comment_shared.commented), {}, {
          comments: [_objectSpread(_objectSpread({}, comment_shared), {}, {
            account: comment_shared.commented.account
          })]
        });
      } else if (comment_shared.commented.type == 'Comment') {
        return _objectSpread(_objectSpread({}, comment_shared.commented.commented), {}, {
          comments: [_objectSpread(_objectSpread({}, comment_shared.commented), {}, {
            comments: [comment_shared],
            account: comment_shared.commented.commented.account
          })]
        });
      } else if (comment_shared.commented.type == 'Share') {
        return _objectSpread(_objectSpread({}, comment_shared.commented.shared), {}, {
          comments: [_objectSpread(_objectSpread({}, comment_shared), {}, {
            account: comment_shared.commented.shared.account
          })]
        });
      } else {
        return _objectSpread(_objectSpread({}, comment_shared.commented), {}, {
          comments: [_objectSpread(_objectSpread({}, comment_shared), {}, {
            account: comment_shared.commented.account
          })]
        });
      }
    } else if (comment_shared.type === 'Post') {
      return comment_shared;
    } else if (comment_shared.type === 'Share') {
      return _objectSpread(_objectSpread({}, comment_shared.shared), {}, {
        comments: [_objectSpread(_objectSpread({}, comment_shared), {}, {
          account: comment_shared.shared.account
        })]
      });
    } else {
      return comment_shared;
    }
  };

  const createPost = async dataForRequest => {
    try {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_9__["setLoading"])(true, 'posting'));
      const request = await Object(configs_API__WEBPACK_IMPORTED_MODULE_6__["default"])({
        method: 'post',
        url: '/posts',
        data: dataForRequest,
        headers: {
          'x-token': auth.token
        }
      });
      const {
        data,
        status
      } = request;

      if (status === 201) {
        setPostModal(0);

        var element = _objectSpread(_objectSpread({
          type: 'Post'
        }, data), {}, {
          comments: [],
          commentsCount: 0,
          rating: null,
          reactions: [],
          reactionsCount: 0,
          shares: [],
          sharesCount: 0,
          account: auth.user
        });

        let totalData = [element, ...storage.timelineData];
        console.log(totalData);
        dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_9__["setTimelineData"])(totalData));
      } else {
        antd__WEBPACK_IMPORTED_MODULE_7__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
      }

      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_9__["setLoading"])(false, 'posting'));
      return await request;
    } catch (error) {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_9__["setLoading"])(false, 'posting'));
    }
  };

  const ratePost = async (type, postId, rate) => {
    try {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_9__["setLoading"])(true, 'posting'));
      let url = '';

      if (type === 'Photo') {
        url = '/photos/rate';
      } else if (type === 'VideoClip') {
        url = '/video-clips/rate';
      } else if (type === 'Item') {
        url = '/items/rate';
      } else if (type === 'Post') {
        url = '/posts/rate';
      } else if (type === 'Comment') {
        url = '/comments/rate';
      }

      const request = await Object(configs_API__WEBPACK_IMPORTED_MODULE_6__["default"])({
        method: 'post',
        url,
        data: {
          rated: postId,
          rating: rate
        },
        headers: {
          'x-token': auth.token
        }
      });
      const {
        data,
        status
      } = request;
      console.warn('ratePost', data, status);

      if (status === 201) {
        storage.timelineData.map(element => {
          if (element.id === postId && element.type === type) {
            element.rating = rate;
            return element;
          }
        });
        dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_9__["setTimelineData"])(storage.timelineData));
      } else {
        antd__WEBPACK_IMPORTED_MODULE_7__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
      }

      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_9__["setLoading"])(false, 'posting'));
      return await request;
    } catch (error) {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_9__["setLoading"])(false, 'posting'));
    }
  };

  const onUpdateTimeline = data => {
    storage.timelineData.map(element => {
      if (element.id == data.id) {
        let addElement = _objectSpread({
          account: auth.user
        }, data.comments[0]);

        element.comments.push(addElement);
        element.commentsCount += data.commentsCount;
        return element;
      }
    });
    console.log(storage.timelineData);
    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_9__["setTimelineData"])(storage.timelineData));
  };

  const modalPopup = () => {
    setPostModal(true);
  };

  const likeAction = async (type, id, term) => {
    var url = '';

    if (type === 'Photo') {
      url = '/photos/react';
    } else if (type === 'VideoClip') {
      url = '/video-clips/react';
    } else if (type === 'Item') {
      url = '/items/react';
    } else if (type === 'Post') {
      url = '/posts/react';
    } else if (type === 'Comment') {
      url = '/comments/react';
    } else if (type === 'Share') {
      url = '/shares/react';
    }

    try {
      const request = await Object(configs_API__WEBPACK_IMPORTED_MODULE_6__["default"])({
        method: 'post',
        url: url,
        data: {
          reacted: id,
          reaction: term
        },
        headers: {
          'x-token': auth.token
        }
      });
      const {
        data,
        status
      } = request;

      if (status === 201) {
        antd__WEBPACK_IMPORTED_MODULE_7__["message"].success('Evaluate successfully');
      } else {
        antd__WEBPACK_IMPORTED_MODULE_7__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
        throw new Error();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const shareAction = async (type, id) => {
    var url = '';

    if (type === 'Photo') {
      url = '/photos/share';
    } else if (type === 'VideoClip') {
      url = '/video-clips/share';
    } else if (type === 'Item') {
      url = '/items/share';
    } else if (type === 'Post') {
      url = '/posts/share';
    } else if (type === 'Comment') {
      url = '/comments/share';
    } else if (type === 'Share') {
      url = '/posts/share';
    }

    try {
      const request = await Object(configs_API__WEBPACK_IMPORTED_MODULE_6__["default"])({
        method: 'post',
        url: url,
        data: {
          shared: id
        },
        headers: {
          'x-token': auth.token
        }
      });
      const {
        data,
        status
      } = request;

      if (status === 201) {
        antd__WEBPACK_IMPORTED_MODULE_7__["message"].success('Evaluate successfully');
      } else {
        antd__WEBPACK_IMPORTED_MODULE_7__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
        throw new Error();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAction = async id => {
    try {
      const request = await Object(configs_API__WEBPACK_IMPORTED_MODULE_6__["default"])({
        method: 'delete',
        url: '/posts',
        data: {
          "id": id
        },
        headers: {
          'x-token': auth.token
        }
      });
      const {
        data,
        status
      } = request;

      if (status !== 400) {
        var newTimelineData = storage.timelineData.filter(item => {
          return item.id !== id;
        });
        dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_9__["setTimelineData"])(newTimelineData));
        antd__WEBPACK_IMPORTED_MODULE_7__["message"].success('Deleted successfully!');
      } else {
        antd__WEBPACK_IMPORTED_MODULE_7__["message"].error('This post deleting does not allowed!');
      }
    } catch (error) {
      console.log(error);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    getTimeline(auth.token);
    window.addEventListener('scroll', _.throttle(() => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > 100) {
        setMobileProfileHeader(true);
      } else {
        setMobileProfileHeader(false);
      }
    }, 250));
  }, []);
  const {
    user
  } = auth;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(components_header_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: _styles_timeline_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.timeline,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_timeline_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.feed_container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_timeline_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.createPostDiv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 11
    }
  }, __jsx(_components_common_Avatar__WEBPACK_IMPORTED_MODULE_13__["default"], {
    size: 50,
    url: user === null || user === void 0 ? void 0 : (_user$profilePhoto = user.profilePhoto) === null || _user$profilePhoto === void 0 ? void 0 : _user$profilePhoto.src,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 13
    }
  }), __jsx("input", {
    className: _styles_timeline_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.createPostInput,
    placeholder: "What's on your mind?",
    onClick: modalPopup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 13
    }
  })), __jsx(components_common_LoadingWrapper__WEBPACK_IMPORTED_MODULE_10__["default"], {
    loading: storage.loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 11
    }
  }, __jsx(components_timeline_TimelinePosts__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: storage.timelineData,
    onUpdateTimeline: onUpdateTimeline,
    onRatePost: ratePost,
    likeAction: likeAction,
    shareAction: shareAction,
    deleteAction: deleteAction,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 13
    }
  })))), __jsx(_components_common_ModalWrapper__WEBPACK_IMPORTED_MODULE_12__["default"], {
    title: "Create Post",
    showModal: postModal,
    onClose: () => setPostModal(0),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 7
    }
  }, __jsx(components_profile_PostingPost__WEBPACK_IMPORTED_MODULE_4__["default"], {
    loading: storage.postingLoading,
    onPosting: createPost,
    modalPopup: modalPopup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 11
    }
  })));
}

_s(TimelinePage, "af3fwKOdml45YAg23u2UcYEas7s=");

_c = TimelinePage;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(_helpers_hoc_requireAuth__WEBPACK_IMPORTED_MODULE_11__["default"])(TimelinePage));

var _c, _c2;

$RefreshReg$(_c, "TimelinePage");
$RefreshReg$(_c2, "%default%");

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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/header/styles/header.module.scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/header/styles/header.module.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".header_additional_header__Wyu42 {\n  height: 80px;\n}\n\n@media (max-width: 767px) {\n  .header_additional_header__Wyu42 {\n    height: auto;\n  }\n}\n\n.header_header__ecC39 {\n  background: #a0aec0;\n  border-bottom: 1px solid #edf0f5;\n  height: 80px;\n  display: flex;\n  position: fixed;\n  z-index: 99;\n  top: 0;\n  left: 0;\n  right: 0;\n  transition: top 0.6s;\n}\n\n.header_header__ecC39.header_header_hidden__2Q2DD {\n  top: -80px;\n}\n\n@media (max-width: 767px) {\n  .header_header__ecC39.header_header_hidden__2Q2DD {\n    bottom: -150px;\n    top: unset;\n  }\n}\n\n@media (max-width: 767px) {\n  .header_header__ecC39 {\n    height: auto;\n    padding: 18px 0;\n    bottom: 0;\n    top: unset;\n    transition: bottom 0.6s;\n    display: none;\n  }\n}\n\n.header_header__ecC39 .header_container__bXWQQ {\n  width: 95%;\n  margin: 0 auto;\n  display: flex;\n  align-self: stretch;\n  align-items: center;\n}\n\n@media (max-width: 767px) {\n  .header_header__ecC39 .header_container__bXWQQ {\n    width: 95%;\n    flex-direction: column;\n  }\n}\n\n.header_header__ecC39 .header_logo__2MPw_ {\n  width: 150px;\n  height: 35px;\n}\n\n@media (max-width: 767px) {\n  .header_header__ecC39 .header_logo__2MPw_ {\n    margin-bottom: 10px;\n  }\n}\n\n.header_header__ecC39 .header_logo__2MPw_ img {\n  width: 100%;\n}\n\n.header_header__ecC39 .header_search__sw4Be {\n  flex: 1;\n  margin: 0 30px;\n  justify-content: center;\n}\n\n.header_header__ecC39 .header_search__sw4Be .header_profile__1JSwu {\n  display: none;\n}\n\n@media (max-width: 767px) {\n  .header_header__ecC39 .header_search__sw4Be .header_profile__1JSwu {\n    display: flex;\n    margin-left: 15px;\n  }\n}\n\n@media (min-width: 20px) and (max-width: 479px) {\n  .header_header__ecC39 .header_search__sw4Be .header_profile__1JSwu {\n    padding: 5px;\n    margin-left: 5px;\n  }\n\n  .header_header__ecC39 .header_search__sw4Be .header_profile__1JSwu .header_name__3HhTm {\n    display: none;\n  }\n}\n\n@media (max-width: 767px) {\n  .header_header__ecC39 .header_search__sw4Be {\n    width: 100%;\n  }\n}\n\n.header_header__ecC39 .header_search__sw4Be input {\n  flex: 0.5;\n  min-width: 50px;\n  outline: none;\n  font-size: 1em;\n  padding: 0.5em 1em;\n  border: 1px solid #cccccc70;\n  border-radius: 45px;\n  background: #cbd5e0;\n}\n\n@media (min-width: 1074px) and (max-width: 1439px) {\n  .header_header__ecC39 .header_search__sw4Be input {\n    flex: 0.6;\n  }\n}\n\n@media (min-width: 768px) and (max-width: 1073px) {\n  .header_header__ecC39 .header_search__sw4Be input {\n    flex: 0.8;\n  }\n}\n\n@media (max-width: 767px) {\n  .header_header__ecC39 .header_search__sw4Be input {\n    flex: 1;\n  }\n}\n\n.header_header__ecC39 .header_profile__1JSwu {\n  display: flex;\n  align-items: center;\n  background: #e6e6e670;\n  padding: 5px 10px 5px 5px;\n  border-radius: 40px;\n  cursor: pointer;\n}\n\n@media (max-width: 767px) {\n  .header_header__ecC39 .header_profile__1JSwu {\n    display: none;\n  }\n}\n\n.header_header__ecC39 .header_profile__1JSwu .header_avatar__boSZH {\n  width: 40px;\n  height: 40px;\n}\n\n.header_header__ecC39 .header_profile__1JSwu .header_avatar__boSZH img {\n  border-radius: 50%;\n}\n\n.header_header__ecC39 .header_profile__1JSwu .header_name__3HhTm {\n  padding: 0 10px;\n  color: #222;\n}\n\n.header_mobile_profile_header__2TJiv {\n  display: none;\n  background: #a0aec0;\n  border-bottom: 1px solid #edf0f5;\n  height: 60px;\n  position: fixed;\n  z-index: 99;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  transition: bottom 0.6s;\n}\n\n.header_mobile_profile_header__2TJiv .header_container__bXWQQ {\n  margin: 0 auto;\n  margin-top: 15px;\n}\n\n@media (max-width: 767px) {\n  .header_mobile_profile_header__2TJiv {\n    display: flex;\n  }\n}\n\n.header_mobile_profile_header__2TJiv.header_header_hidden__2Q2DD {\n  top: -80px;\n}\n\n@media (max-width: 767px) {\n  .header_mobile_profile_header__2TJiv.header_header_hidden__2Q2DD {\n    bottom: -150px;\n    top: unset;\n  }\n}\n\n.header_mobile_top_header__3ihGH {\n  display: none;\n  background: #a0aec0;\n  border-bottom: 1px solid #edf0f5;\n  height: 75px;\n  position: fixed;\n  z-index: 99;\n  top: 0;\n  left: 0;\n  right: 0;\n  transition: top 0.6s;\n}\n\n.header_mobile_top_header__3ihGH .header_container__bXWQQ {\n  margin: 0 auto;\n  margin-top: 10px;\n}\n\n@media (max-width: 767px) {\n  .header_mobile_top_header__3ihGH {\n    display: flex;\n  }\n}\n\n.header_mobile_top_header__3ihGH.header_header_hidden__2Q2DD {\n  top: -80px;\n}\n\n@media (max-width: 767px) {\n  .header_mobile_top_header__3ihGH.header_header_hidden__2Q2DD {\n    top: -150px;\n  }\n}\n\n.header_mobile_top_header__3ihGH .header_container__bXWQQ {\n  width: 95%;\n  margin: 0 auto;\n  display: flex;\n  align-self: stretch;\n  align-items: center;\n}\n\n@media (max-width: 767px) {\n  .header_mobile_top_header__3ihGH .header_container__bXWQQ {\n    width: 95%;\n  }\n}\n\n.header_mobile_top_header__3ihGH .header_logo__2MPw_ {\n  width: 150px;\n}\n\n.header_mobile_top_header__3ihGH .header_logo__2MPw_ img {\n  width: 100%;\n}\n\n.header_mobile_top_header__3ihGH .header_search__sw4Be {\n  flex: 1;\n  margin: 0 30px;\n  justify-content: center;\n  margin-right: 0;\n}\n\n@media (max-width: 767px) {\n  .header_mobile_top_header__3ihGH .header_search__sw4Be {\n    width: 100%;\n  }\n}\n\n.header_mobile_top_header__3ihGH .header_search__sw4Be input {\n  flex: 0.5;\n  min-width: 50px;\n  outline: none;\n  font-size: 1em;\n  padding: 0.5em 1em;\n  border: 1px solid #cccccc70;\n  border-radius: 45px;\n  background: #cbd5e0;\n}\n\n@media (min-width: 1074px) and (max-width: 1439px) {\n  .header_mobile_top_header__3ihGH .header_search__sw4Be input {\n    flex: 0.6;\n  }\n}\n\n@media (min-width: 768px) and (max-width: 1073px) {\n  .header_mobile_top_header__3ihGH .header_search__sw4Be input {\n    flex: 0.8;\n  }\n}\n\n@media (max-width: 767px) {\n  .header_mobile_top_header__3ihGH .header_search__sw4Be input {\n    flex: 1;\n  }\n}\n\n.header_searchModal__2IFSb {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 470px;\n  padding: 15px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  background-color: #a0aec0;\n  transition: 0.6s;\n  z-index: 900;\n}\n\n@media (max-width: 767px) {\n  .header_searchModal__2IFSb {\n    width: 100%;\n  }\n}\n\n.header_searchModal__2IFSb .header_searchHeader__1R6lW {\n  display: flex;\n}\n\n.header_searchModal__2IFSb .header_searchHeader__1R6lW input {\n  flex: 5;\n  min-width: 50px;\n  outline: none;\n  font-size: 1em;\n  padding: 0.5em 1em;\n  border: 1px solid #cccccc70;\n  border-radius: 45px;\n  background: #cbd5e0;\n}\n\n.header_searchModal__2IFSb .header_searchContent__1NNLM {\n  padding-left: 25px;\n  margin-top: 10px;\n}\n\n.header_searchModal__2IFSb .header_searchContent__1NNLM .header_user_name__25Dcj {\n  font-weight: bold;\n  font-size: 1.2em;\n  padding-bottom: 0.5em;\n  margin-left: 35px;\n}\n\n.header_searchModal__2IFSb .header_searchContent__1NNLM .header_user_info__364pk {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n}", "",{"version":3,"sources":["E:/freeskies_fe_code/components/header/styles/header.module.scss","E:/freeskies_fe_code/css/mixins/_responsive.scss"],"names":[],"mappings":"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","file":"header.module.scss","sourcesContent":["@import 'css/mixins/responsive';\r\n\r\n.additional_header {\r\n  height: 80px;\r\n\r\n  @include mobile {\r\n    height: auto;\r\n  }\r\n}\r\n\r\n.header {\r\n  background: #a0aec0;\r\n  border-bottom: 1px solid #edf0f5;\r\n  height: 80px;\r\n  display: flex;\r\n\r\n  position: fixed;\r\n  z-index: 99;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  transition: top 0.6s;\r\n\r\n  &.header_hidden {\r\n    top: -80px;\r\n    @include mobile {\r\n      bottom: -150px;\r\n      top: unset;\r\n    }\r\n  }\r\n\r\n  @include mobile {\r\n    height: auto;\r\n    padding: 18px 0;\r\n    bottom: 0;\r\n    top: unset;\r\n    transition: bottom 0.6s;\r\n    display: none;\r\n  }\r\n\r\n  .container {\r\n    width: 95%;\r\n    margin: 0 auto;\r\n    display: flex;\r\n    align-self: stretch;\r\n    align-items: center;\r\n\r\n    @include mobile {\r\n      width: 95%;\r\n      flex-direction: column;\r\n    }\r\n  }\r\n\r\n  .logo {\r\n    width: 150px;\r\n    height: 35px;\r\n\r\n    @include mobile {\r\n      margin-bottom: 10px;\r\n    }\r\n\r\n    img {\r\n      width: 100%;\r\n      // height: 100%;\r\n    }\r\n  }\r\n\r\n  .search {\r\n    flex: 1;\r\n    margin: 0 30px;\r\n    //display: flex;\r\n    justify-content: center;\r\n\r\n    .profile {\r\n      display: none;\r\n\r\n      @include mobile {\r\n        display: flex;\r\n        margin-left: 15px;\r\n      }\r\n\r\n      @include extraSmall {\r\n        padding: 5px;\r\n        margin-left: 5px;\r\n        .name {\r\n          display: none;\r\n        }\r\n      }\r\n    }\r\n\r\n    @include mobile {\r\n      width: 100%;\r\n    }\r\n\r\n    input {\r\n      flex: 0.5;\r\n      min-width: 50px;\r\n      outline: none;\r\n      font-size: 1em;\r\n      padding: 0.5em 1em;\r\n      border: 1px solid #cccccc70;\r\n      border-radius: 45px;\r\n      background: #cbd5e0;\r\n      @include desktop {\r\n        flex: 0.6;\r\n      }\r\n\r\n      @include tablet {\r\n        flex: 0.8;\r\n      }\r\n\r\n      @include mobile {\r\n        flex: 1;\r\n      }\r\n    }\r\n  }\r\n\r\n  .profile {\r\n    display: flex;\r\n    align-items: center;\r\n    background: #e6e6e670;\r\n    padding: 5px 10px 5px 5px;\r\n    border-radius: 40px;\r\n    cursor: pointer;\r\n\r\n    @include mobile {\r\n      display: none;\r\n    }\r\n\r\n    .avatar {\r\n      width: 40px;\r\n      height: 40px;\r\n      img {\r\n        border-radius: 50%;\r\n      }\r\n    }\r\n    .name {\r\n      padding: 0 10px;\r\n      color: #222;\r\n    }\r\n  }\r\n}\r\n\r\n.mobile_profile_header {\r\n  display: none;\r\n  background: #a0aec0;\r\n  border-bottom: 1px solid #edf0f5;\r\n  height: 60px;\r\n  position: fixed;\r\n  z-index: 99;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  transition: bottom 0.6s;\r\n    .container {\r\n      margin: 0 auto;\r\n      margin-top: 15px;\r\n    }\r\n  @include mobile {\r\n     display: flex;\r\n  }\r\n\r\n  &.header_hidden {\r\n    top: -80px;\r\n    @include mobile {\r\n      bottom: -150px;\r\n      top: unset;\r\n    }\r\n  }\r\n}\r\n\r\n.mobile_top_header {\r\n  display: none;\r\n  background: #a0aec0;\r\n  border-bottom: 1px solid #edf0f5;\r\n  height: 75px;\r\n  position: fixed;\r\n  z-index: 99;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  transition: top 0.6s;\r\n    .container {\r\n      margin: 0 auto;\r\n      margin-top: 10px;\r\n    }\r\n  @include mobile {\r\n     display: flex;\r\n  }\r\n\r\n  &.header_hidden {\r\n    top: -80px;\r\n    @include mobile {\r\n      top: -150px;\r\n    }\r\n  }\r\n\r\n  .container {\r\n    width: 95%;\r\n    margin: 0 auto;\r\n    display: flex;\r\n    align-self: stretch;\r\n    align-items: center;\r\n\r\n    @include mobile {\r\n      width: 95%;\r\n    }\r\n  }\r\n\r\n  .logo {\r\n    width: 150px;\r\n    //height: 35px;\r\n\r\n    @include mobile {\r\n      //margin-bottom: 10px;\r\n    }\r\n\r\n    img {\r\n      width: 100%;\r\n      // height: 100%;\r\n    }\r\n  }\r\n\r\n  .search {\r\n    flex: 1;\r\n    margin: 0 30px;\r\n    //display: flex;\r\n    justify-content: center;\r\n    margin-right: 0;\r\n    @include mobile {\r\n      width: 100%;\r\n    }\r\n\r\n    input {\r\n      flex: 0.5;\r\n      min-width: 50px;\r\n      outline: none;\r\n      font-size: 1em;\r\n      padding: 0.5em 1em;\r\n      border: 1px solid #cccccc70;\r\n      border-radius: 45px;\r\n      background: #cbd5e0;\r\n      @include desktop {\r\n        flex: 0.6;\r\n      }\r\n\r\n      @include tablet {\r\n        flex: 0.8;\r\n      }\r\n\r\n      @include mobile {\r\n        flex: 1;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.searchModal {\r\n  position: fixed;\r\n  left: 0;\r\n  top: 0;\r\n  width: 470px;\r\n  padding: 15px;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  background-color: #a0aec0;\r\n  transition: 0.6s;\r\n  z-index: 900;\r\n    @include mobile {\r\n      width: 100%;\r\n    }\r\n   .searchHeader {\r\n      display: flex;\r\n        input {\r\n          flex: 5;\r\n          min-width: 50px;\r\n          outline: none;\r\n          font-size: 1em;\r\n          padding: 0.5em 1em;\r\n          border: 1px solid #cccccc70;\r\n          border-radius: 45px;\r\n          background: #cbd5e0;\r\n        \r\n        }\r\n   }\r\n\r\n   .searchContent{\r\n     padding-left: 25px;\r\n     margin-top: 10px;\r\n      .user_name {\r\n        font-weight: bold;\r\n        font-size: 1.2em;\r\n        padding-bottom: 0.5em;\r\n        margin-left: 35px;\r\n      }\r\n      .user_info {\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: flex-end;\r\n      }\r\n   }\r\n}","$extra-small-width: 480px;\r\n$mobile-width: 767px;\r\n$tablet-width: 768px;\r\n$desktop-width: 1074px;\r\n$big-desktop-width: 1440px;\r\n\r\n@mixin extraSmall {\r\n  @media (min-width: 20px) and (max-width: #{$extra-small-width - 1px}) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin mobile {\r\n  @media (max-width: #{$mobile-width}) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin tablet {\r\n  @media (min-width: #{$tablet-width}) and (max-width: #{$desktop-width - 1px}) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin desktop {\r\n  @media (min-width: #{$desktop-width}) and (max-width: #{$big-desktop-width - 1px}) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin bigDesktop {\r\n  @media (min-width: #{$big-desktop-width}) {\r\n    @content;\r\n  }\r\n}\r\n"]}]);
// Exports
exports.locals = {
	"additional_header": "header_additional_header__Wyu42",
	"header": "header_header__ecC39",
	"header_hidden": "header_header_hidden__2Q2DD",
	"container": "header_container__bXWQQ",
	"logo": "header_logo__2MPw_",
	"search": "header_search__sw4Be",
	"profile": "header_profile__1JSwu",
	"name": "header_name__3HhTm",
	"avatar": "header_avatar__boSZH",
	"mobile_profile_header": "header_mobile_profile_header__2TJiv",
	"mobile_top_header": "header_mobile_top_header__3ihGH",
	"searchModal": "header_searchModal__2IFSb",
	"searchHeader": "header_searchHeader__1R6lW",
	"searchContent": "header_searchContent__1NNLM",
	"user_name": "header_user_name__25Dcj",
	"user_info": "header_user_info__364pk"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/enquire.js/src/MediaQuery.js":
/*!***************************************************!*\
  !*** ./node_modules/enquire.js/src/MediaQuery.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var QueryHandler = __webpack_require__(/*! ./QueryHandler */ "./node_modules/enquire.js/src/QueryHandler.js");
var each = __webpack_require__(/*! ./Util */ "./node_modules/enquire.js/src/Util.js").each;

/**
 * Represents a single media query, manages it's state and registered handlers for this query
 *
 * @constructor
 * @param {string} query the media query string
 * @param {boolean} [isUnconditional=false] whether the media query should run regardless of whether the conditions are met. Primarily for helping older browsers deal with mobile-first design
 */
function MediaQuery(query, isUnconditional) {
    this.query = query;
    this.isUnconditional = isUnconditional;
    this.handlers = [];
    this.mql = window.matchMedia(query);

    var self = this;
    this.listener = function(mql) {
        // Chrome passes an MediaQueryListEvent object, while other browsers pass MediaQueryList directly
        self.mql = mql.currentTarget || mql;
        self.assess();
    };
    this.mql.addListener(this.listener);
}

MediaQuery.prototype = {

    constuctor : MediaQuery,

    /**
     * add a handler for this query, triggering if already active
     *
     * @param {object} handler
     * @param {function} handler.match callback for when query is activated
     * @param {function} [handler.unmatch] callback for when query is deactivated
     * @param {function} [handler.setup] callback for immediate execution when a query handler is registered
     * @param {boolean} [handler.deferSetup=false] should the setup callback be deferred until the first time the handler is matched?
     */
    addHandler : function(handler) {
        var qh = new QueryHandler(handler);
        this.handlers.push(qh);

        this.matches() && qh.on();
    },

    /**
     * removes the given handler from the collection, and calls it's destroy methods
     *
     * @param {object || function} handler the handler to remove
     */
    removeHandler : function(handler) {
        var handlers = this.handlers;
        each(handlers, function(h, i) {
            if(h.equals(handler)) {
                h.destroy();
                return !handlers.splice(i,1); //remove from array and exit each early
            }
        });
    },

    /**
     * Determine whether the media query should be considered a match
     *
     * @return {Boolean} true if media query can be considered a match, false otherwise
     */
    matches : function() {
        return this.mql.matches || this.isUnconditional;
    },

    /**
     * Clears all handlers and unbinds events
     */
    clear : function() {
        each(this.handlers, function(handler) {
            handler.destroy();
        });
        this.mql.removeListener(this.listener);
        this.handlers.length = 0; //clear array
    },

    /*
        * Assesses the query, turning on all handlers if it matches, turning them off if it doesn't match
        */
    assess : function() {
        var action = this.matches() ? 'on' : 'off';

        each(this.handlers, function(handler) {
            handler[action]();
        });
    }
};

module.exports = MediaQuery;


/***/ }),

/***/ "./node_modules/enquire.js/src/MediaQueryDispatch.js":
/*!***********************************************************!*\
  !*** ./node_modules/enquire.js/src/MediaQueryDispatch.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MediaQuery = __webpack_require__(/*! ./MediaQuery */ "./node_modules/enquire.js/src/MediaQuery.js");
var Util = __webpack_require__(/*! ./Util */ "./node_modules/enquire.js/src/Util.js");
var each = Util.each;
var isFunction = Util.isFunction;
var isArray = Util.isArray;

/**
 * Allows for registration of query handlers.
 * Manages the query handler's state and is responsible for wiring up browser events
 *
 * @constructor
 */
function MediaQueryDispatch () {
    if(!window.matchMedia) {
        throw new Error('matchMedia not present, legacy browsers require a polyfill');
    }

    this.queries = {};
    this.browserIsIncapable = !window.matchMedia('only all').matches;
}

MediaQueryDispatch.prototype = {

    constructor : MediaQueryDispatch,

    /**
     * Registers a handler for the given media query
     *
     * @param {string} q the media query
     * @param {object || Array || Function} options either a single query handler object, a function, or an array of query handlers
     * @param {function} options.match fired when query matched
     * @param {function} [options.unmatch] fired when a query is no longer matched
     * @param {function} [options.setup] fired when handler first triggered
     * @param {boolean} [options.deferSetup=false] whether setup should be run immediately or deferred until query is first matched
     * @param {boolean} [shouldDegrade=false] whether this particular media query should always run on incapable browsers
     */
    register : function(q, options, shouldDegrade) {
        var queries         = this.queries,
            isUnconditional = shouldDegrade && this.browserIsIncapable;

        if(!queries[q]) {
            queries[q] = new MediaQuery(q, isUnconditional);
        }

        //normalise to object in an array
        if(isFunction(options)) {
            options = { match : options };
        }
        if(!isArray(options)) {
            options = [options];
        }
        each(options, function(handler) {
            if (isFunction(handler)) {
                handler = { match : handler };
            }
            queries[q].addHandler(handler);
        });

        return this;
    },

    /**
     * unregisters a query and all it's handlers, or a specific handler for a query
     *
     * @param {string} q the media query to target
     * @param {object || function} [handler] specific handler to unregister
     */
    unregister : function(q, handler) {
        var query = this.queries[q];

        if(query) {
            if(handler) {
                query.removeHandler(handler);
            }
            else {
                query.clear();
                delete this.queries[q];
            }
        }

        return this;
    }
};

module.exports = MediaQueryDispatch;


/***/ }),

/***/ "./node_modules/enquire.js/src/QueryHandler.js":
/*!*****************************************************!*\
  !*** ./node_modules/enquire.js/src/QueryHandler.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Delegate to handle a media query being matched and unmatched.
 *
 * @param {object} options
 * @param {function} options.match callback for when the media query is matched
 * @param {function} [options.unmatch] callback for when the media query is unmatched
 * @param {function} [options.setup] one-time callback triggered the first time a query is matched
 * @param {boolean} [options.deferSetup=false] should the setup callback be run immediately, rather than first time query is matched?
 * @constructor
 */
function QueryHandler(options) {
    this.options = options;
    !options.deferSetup && this.setup();
}

QueryHandler.prototype = {

    constructor : QueryHandler,

    /**
     * coordinates setup of the handler
     *
     * @function
     */
    setup : function() {
        if(this.options.setup) {
            this.options.setup();
        }
        this.initialised = true;
    },

    /**
     * coordinates setup and triggering of the handler
     *
     * @function
     */
    on : function() {
        !this.initialised && this.setup();
        this.options.match && this.options.match();
    },

    /**
     * coordinates the unmatch event for the handler
     *
     * @function
     */
    off : function() {
        this.options.unmatch && this.options.unmatch();
    },

    /**
     * called when a handler is to be destroyed.
     * delegates to the destroy or unmatch callbacks, depending on availability.
     *
     * @function
     */
    destroy : function() {
        this.options.destroy ? this.options.destroy() : this.off();
    },

    /**
     * determines equality by reference.
     * if object is supplied compare options, if function, compare match callback
     *
     * @function
     * @param {object || function} [target] the target for comparison
     */
    equals : function(target) {
        return this.options === target || this.options.match === target;
    }

};

module.exports = QueryHandler;


/***/ }),

/***/ "./node_modules/enquire.js/src/Util.js":
/*!*********************************************!*\
  !*** ./node_modules/enquire.js/src/Util.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Helper function for iterating over a collection
 *
 * @param collection
 * @param fn
 */
function each(collection, fn) {
    var i      = 0,
        length = collection.length,
        cont;

    for(i; i < length; i++) {
        cont = fn(collection[i], i);
        if(cont === false) {
            break; //allow early exit
        }
    }
}

/**
 * Helper function for determining whether target object is an array
 *
 * @param target the object under test
 * @return {Boolean} true if array, false otherwise
 */
function isArray(target) {
    return Object.prototype.toString.apply(target) === '[object Array]';
}

/**
 * Helper function for determining whether target object is a function
 *
 * @param target the object under test
 * @return {Boolean} true if function, false otherwise
 */
function isFunction(target) {
    return typeof target === 'function';
}

module.exports = {
    isFunction : isFunction,
    isArray : isArray,
    each : each
};


/***/ }),

/***/ "./node_modules/enquire.js/src/index.js":
/*!**********************************************!*\
  !*** ./node_modules/enquire.js/src/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MediaQueryDispatch = __webpack_require__(/*! ./MediaQueryDispatch */ "./node_modules/enquire.js/src/MediaQueryDispatch.js");
module.exports = new MediaQueryDispatch();


/***/ }),

/***/ "./node_modules/lodash.debounce/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.debounce/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/react-slick/lib/arrows.js":
/*!************************************************!*\
  !*** ./node_modules/react-slick/lib/arrows.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NextArrow = exports.PrevArrow = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _innerSliderUtils = __webpack_require__(/*! ./utils/innerSliderUtils */ "./node_modules/react-slick/lib/utils/innerSliderUtils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PrevArrow = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(PrevArrow, _React$PureComponent);

  var _super = _createSuper(PrevArrow);

  function PrevArrow() {
    _classCallCheck(this, PrevArrow);

    return _super.apply(this, arguments);
  }

  _createClass(PrevArrow, [{
    key: "clickHandler",
    value: function clickHandler(options, e) {
      if (e) {
        e.preventDefault();
      }

      this.props.clickHandler(options, e);
    }
  }, {
    key: "render",
    value: function render() {
      var prevClasses = {
        "slick-arrow": true,
        "slick-prev": true
      };
      var prevHandler = this.clickHandler.bind(this, {
        message: "previous"
      });

      if (!this.props.infinite && (this.props.currentSlide === 0 || this.props.slideCount <= this.props.slidesToShow)) {
        prevClasses["slick-disabled"] = true;
        prevHandler = null;
      }

      var prevArrowProps = {
        key: "0",
        "data-role": "none",
        className: (0, _classnames["default"])(prevClasses),
        style: {
          display: "block"
        },
        onClick: prevHandler
      };
      var customProps = {
        currentSlide: this.props.currentSlide,
        slideCount: this.props.slideCount
      };
      var prevArrow;

      if (this.props.prevArrow) {
        prevArrow = /*#__PURE__*/_react["default"].cloneElement(this.props.prevArrow, _objectSpread(_objectSpread({}, prevArrowProps), customProps));
      } else {
        prevArrow = /*#__PURE__*/_react["default"].createElement("button", _extends({
          key: "0",
          type: "button"
        }, prevArrowProps), " ", "Previous");
      }

      return prevArrow;
    }
  }]);

  return PrevArrow;
}(_react["default"].PureComponent);

exports.PrevArrow = PrevArrow;

var NextArrow = /*#__PURE__*/function (_React$PureComponent2) {
  _inherits(NextArrow, _React$PureComponent2);

  var _super2 = _createSuper(NextArrow);

  function NextArrow() {
    _classCallCheck(this, NextArrow);

    return _super2.apply(this, arguments);
  }

  _createClass(NextArrow, [{
    key: "clickHandler",
    value: function clickHandler(options, e) {
      if (e) {
        e.preventDefault();
      }

      this.props.clickHandler(options, e);
    }
  }, {
    key: "render",
    value: function render() {
      var nextClasses = {
        "slick-arrow": true,
        "slick-next": true
      };
      var nextHandler = this.clickHandler.bind(this, {
        message: "next"
      });

      if (!(0, _innerSliderUtils.canGoNext)(this.props)) {
        nextClasses["slick-disabled"] = true;
        nextHandler = null;
      }

      var nextArrowProps = {
        key: "1",
        "data-role": "none",
        className: (0, _classnames["default"])(nextClasses),
        style: {
          display: "block"
        },
        onClick: nextHandler
      };
      var customProps = {
        currentSlide: this.props.currentSlide,
        slideCount: this.props.slideCount
      };
      var nextArrow;

      if (this.props.nextArrow) {
        nextArrow = /*#__PURE__*/_react["default"].cloneElement(this.props.nextArrow, _objectSpread(_objectSpread({}, nextArrowProps), customProps));
      } else {
        nextArrow = /*#__PURE__*/_react["default"].createElement("button", _extends({
          key: "1",
          type: "button"
        }, nextArrowProps), " ", "Next");
      }

      return nextArrow;
    }
  }]);

  return NextArrow;
}(_react["default"].PureComponent);

exports.NextArrow = NextArrow;

/***/ }),

/***/ "./node_modules/react-slick/lib/default-props.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-slick/lib/default-props.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var defaultProps = {
  accessibility: true,
  adaptiveHeight: false,
  afterChange: null,
  appendDots: function appendDots(dots) {
    return /*#__PURE__*/_react["default"].createElement("ul", {
      style: {
        display: "block"
      }
    }, dots);
  },
  arrows: true,
  autoplay: false,
  autoplaySpeed: 3000,
  beforeChange: null,
  centerMode: false,
  centerPadding: "50px",
  className: "",
  cssEase: "ease",
  customPaging: function customPaging(i) {
    return /*#__PURE__*/_react["default"].createElement("button", null, i + 1);
  },
  dots: false,
  dotsClass: "slick-dots",
  draggable: true,
  easing: "linear",
  edgeFriction: 0.35,
  fade: false,
  focusOnSelect: false,
  infinite: true,
  initialSlide: 0,
  lazyLoad: null,
  nextArrow: null,
  onEdge: null,
  onInit: null,
  onLazyLoadError: null,
  onReInit: null,
  pauseOnDotsHover: false,
  pauseOnFocus: false,
  pauseOnHover: true,
  prevArrow: null,
  responsive: null,
  rows: 1,
  rtl: false,
  slide: "div",
  slidesPerRow: 1,
  slidesToScroll: 1,
  slidesToShow: 1,
  speed: 500,
  swipe: true,
  swipeEvent: null,
  swipeToSlide: false,
  touchMove: true,
  touchThreshold: 5,
  useCSS: true,
  useTransform: true,
  variableWidth: false,
  vertical: false,
  waitForAnimate: true
};
var _default = defaultProps;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-slick/lib/dots.js":
/*!**********************************************!*\
  !*** ./node_modules/react-slick/lib/dots.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dots = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _innerSliderUtils = __webpack_require__(/*! ./utils/innerSliderUtils */ "./node_modules/react-slick/lib/utils/innerSliderUtils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var getDotCount = function getDotCount(spec) {
  var dots;

  if (spec.infinite) {
    dots = Math.ceil(spec.slideCount / spec.slidesToScroll);
  } else {
    dots = Math.ceil((spec.slideCount - spec.slidesToShow) / spec.slidesToScroll) + 1;
  }

  return dots;
};

var Dots = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Dots, _React$PureComponent);

  var _super = _createSuper(Dots);

  function Dots() {
    _classCallCheck(this, Dots);

    return _super.apply(this, arguments);
  }

  _createClass(Dots, [{
    key: "clickHandler",
    value: function clickHandler(options, e) {
      // In Autoplay the focus stays on clicked button even after transition
      // to next slide. That only goes away by click somewhere outside
      e.preventDefault();
      this.props.clickHandler(options);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onMouseEnter = _this$props.onMouseEnter,
          onMouseOver = _this$props.onMouseOver,
          onMouseLeave = _this$props.onMouseLeave,
          infinite = _this$props.infinite,
          slidesToScroll = _this$props.slidesToScroll,
          slidesToShow = _this$props.slidesToShow,
          slideCount = _this$props.slideCount,
          currentSlide = _this$props.currentSlide;
      var dotCount = getDotCount({
        slideCount: slideCount,
        slidesToScroll: slidesToScroll,
        slidesToShow: slidesToShow,
        infinite: infinite
      });
      var mouseEvents = {
        onMouseEnter: onMouseEnter,
        onMouseOver: onMouseOver,
        onMouseLeave: onMouseLeave
      };
      var dots = [];

      for (var i = 0; i < dotCount; i++) {
        var _rightBound = (i + 1) * slidesToScroll - 1;

        var rightBound = infinite ? _rightBound : (0, _innerSliderUtils.clamp)(_rightBound, 0, slideCount - 1);

        var _leftBound = rightBound - (slidesToScroll - 1);

        var leftBound = infinite ? _leftBound : (0, _innerSliderUtils.clamp)(_leftBound, 0, slideCount - 1);
        var className = (0, _classnames["default"])({
          "slick-active": infinite ? currentSlide >= leftBound && currentSlide <= rightBound : currentSlide === leftBound
        });
        var dotOptions = {
          message: "dots",
          index: i,
          slidesToScroll: slidesToScroll,
          currentSlide: currentSlide
        };
        var onClick = this.clickHandler.bind(this, dotOptions);
        dots = dots.concat( /*#__PURE__*/_react["default"].createElement("li", {
          key: i,
          className: className
        }, /*#__PURE__*/_react["default"].cloneElement(this.props.customPaging(i), {
          onClick: onClick
        })));
      }

      return /*#__PURE__*/_react["default"].cloneElement(this.props.appendDots(dots), _objectSpread({
        className: this.props.dotsClass
      }, mouseEvents));
    }
  }]);

  return Dots;
}(_react["default"].PureComponent);

exports.Dots = Dots;

/***/ }),

/***/ "./node_modules/react-slick/lib/index.js":
/*!***********************************************!*\
  !*** ./node_modules/react-slick/lib/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slider = _interopRequireDefault(__webpack_require__(/*! ./slider */ "./node_modules/react-slick/lib/slider.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _slider["default"];
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-slick/lib/initial-state.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-slick/lib/initial-state.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var initialState = {
  animating: false,
  autoplaying: null,
  currentDirection: 0,
  currentLeft: null,
  currentSlide: 0,
  direction: 1,
  dragging: false,
  edgeDragged: false,
  initialized: false,
  lazyLoadedList: [],
  listHeight: null,
  listWidth: null,
  scrolling: false,
  slideCount: null,
  slideHeight: null,
  slideWidth: null,
  swipeLeft: null,
  swiped: false,
  // used by swipeEvent. differentites between touch and swipe.
  swiping: false,
  touchObject: {
    startX: 0,
    startY: 0,
    curX: 0,
    curY: 0
  },
  trackStyle: {},
  trackWidth: 0,
  targetSlide: 0
};
var _default = initialState;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-slick/lib/inner-slider.js":
/*!******************************************************!*\
  !*** ./node_modules/react-slick/lib/inner-slider.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InnerSlider = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _initialState = _interopRequireDefault(__webpack_require__(/*! ./initial-state */ "./node_modules/react-slick/lib/initial-state.js"));

var _lodash = _interopRequireDefault(__webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _innerSliderUtils = __webpack_require__(/*! ./utils/innerSliderUtils */ "./node_modules/react-slick/lib/utils/innerSliderUtils.js");

var _track = __webpack_require__(/*! ./track */ "./node_modules/react-slick/lib/track.js");

var _dots = __webpack_require__(/*! ./dots */ "./node_modules/react-slick/lib/dots.js");

var _arrows = __webpack_require__(/*! ./arrows */ "./node_modules/react-slick/lib/arrows.js");

var _resizeObserverPolyfill = _interopRequireDefault(__webpack_require__(/*! resize-observer-polyfill */ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var InnerSlider = /*#__PURE__*/function (_React$Component) {
  _inherits(InnerSlider, _React$Component);

  var _super = _createSuper(InnerSlider);

  function InnerSlider(props) {
    var _this;

    _classCallCheck(this, InnerSlider);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "listRefHandler", function (ref) {
      return _this.list = ref;
    });

    _defineProperty(_assertThisInitialized(_this), "trackRefHandler", function (ref) {
      return _this.track = ref;
    });

    _defineProperty(_assertThisInitialized(_this), "adaptHeight", function () {
      if (_this.props.adaptiveHeight && _this.list) {
        var elem = _this.list.querySelector("[data-index=\"".concat(_this.state.currentSlide, "\"]"));

        _this.list.style.height = (0, _innerSliderUtils.getHeight)(elem) + "px";
      }
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      _this.props.onInit && _this.props.onInit();

      if (_this.props.lazyLoad) {
        var slidesToLoad = (0, _innerSliderUtils.getOnDemandLazySlides)(_objectSpread(_objectSpread({}, _this.props), _this.state));

        if (slidesToLoad.length > 0) {
          _this.setState(function (prevState) {
            return {
              lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad)
            };
          });

          if (_this.props.onLazyLoad) {
            _this.props.onLazyLoad(slidesToLoad);
          }
        }
      }

      var spec = _objectSpread({
        listRef: _this.list,
        trackRef: _this.track
      }, _this.props);

      _this.updateState(spec, true, function () {
        _this.adaptHeight();

        _this.props.autoplay && _this.autoPlay("update");
      });

      if (_this.props.lazyLoad === "progressive") {
        _this.lazyLoadTimer = setInterval(_this.progressiveLazyLoad, 1000);
      }

      _this.ro = new _resizeObserverPolyfill["default"](function () {
        if (_this.state.animating) {
          _this.onWindowResized(false); // don't set trackStyle hence don't break animation


          _this.callbackTimers.push(setTimeout(function () {
            return _this.onWindowResized();
          }, _this.props.speed));
        } else {
          _this.onWindowResized();
        }
      });

      _this.ro.observe(_this.list);

      Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"), function (slide) {
        slide.onfocus = _this.props.pauseOnFocus ? _this.onSlideFocus : null;
        slide.onblur = _this.props.pauseOnFocus ? _this.onSlideBlur : null;
      });

      if (window.addEventListener) {
        window.addEventListener("resize", _this.onWindowResized);
      } else {
        window.attachEvent("onresize", _this.onWindowResized);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function () {
      if (_this.animationEndCallback) {
        clearTimeout(_this.animationEndCallback);
      }

      if (_this.lazyLoadTimer) {
        clearInterval(_this.lazyLoadTimer);
      }

      if (_this.callbackTimers.length) {
        _this.callbackTimers.forEach(function (timer) {
          return clearTimeout(timer);
        });

        _this.callbackTimers = [];
      }

      if (window.addEventListener) {
        window.removeEventListener("resize", _this.onWindowResized);
      } else {
        window.detachEvent("onresize", _this.onWindowResized);
      }

      if (_this.autoplayTimer) {
        clearInterval(_this.autoplayTimer);
      }

      _this.ro.disconnect();
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function (prevProps) {
      _this.checkImagesLoad();

      _this.props.onReInit && _this.props.onReInit();

      if (_this.props.lazyLoad) {
        var slidesToLoad = (0, _innerSliderUtils.getOnDemandLazySlides)(_objectSpread(_objectSpread({}, _this.props), _this.state));

        if (slidesToLoad.length > 0) {
          _this.setState(function (prevState) {
            return {
              lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad)
            };
          });

          if (_this.props.onLazyLoad) {
            _this.props.onLazyLoad(slidesToLoad);
          }
        }
      } // if (this.props.onLazyLoad) {
      //   this.props.onLazyLoad([leftMostSlide])
      // }


      _this.adaptHeight();

      var spec = _objectSpread(_objectSpread({
        listRef: _this.list,
        trackRef: _this.track
      }, _this.props), _this.state);

      var setTrackStyle = _this.didPropsChange(prevProps);

      setTrackStyle && _this.updateState(spec, setTrackStyle, function () {
        if (_this.state.currentSlide >= _react["default"].Children.count(_this.props.children)) {
          _this.changeSlide({
            message: "index",
            index: _react["default"].Children.count(_this.props.children) - _this.props.slidesToShow,
            currentSlide: _this.state.currentSlide
          });
        }

        if (_this.props.autoplay) {
          _this.autoPlay("update");
        } else {
          _this.pause("paused");
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onWindowResized", function (setTrackStyle) {
      if (_this.debouncedResize) _this.debouncedResize.cancel();
      _this.debouncedResize = (0, _lodash["default"])(function () {
        return _this.resizeWindow(setTrackStyle);
      }, 50);

      _this.debouncedResize();
    });

    _defineProperty(_assertThisInitialized(_this), "resizeWindow", function () {
      var setTrackStyle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var isTrackMounted = Boolean(_this.track && _this.track.node); // prevent warning: setting state on unmounted component (server side rendering)

      if (!isTrackMounted) return;

      var spec = _objectSpread(_objectSpread({
        listRef: _this.list,
        trackRef: _this.track
      }, _this.props), _this.state);

      _this.updateState(spec, setTrackStyle, function () {
        if (_this.props.autoplay) _this.autoPlay("update");else _this.pause("paused");
      }); // animating state should be cleared while resizing, otherwise autoplay stops working


      _this.setState({
        animating: false
      });

      clearTimeout(_this.animationEndCallback);
      delete _this.animationEndCallback;
    });

    _defineProperty(_assertThisInitialized(_this), "updateState", function (spec, setTrackStyle, callback) {
      var updatedState = (0, _innerSliderUtils.initializedState)(spec);
      spec = _objectSpread(_objectSpread(_objectSpread({}, spec), updatedState), {}, {
        slideIndex: updatedState.currentSlide
      });
      var targetLeft = (0, _innerSliderUtils.getTrackLeft)(spec);
      spec = _objectSpread(_objectSpread({}, spec), {}, {
        left: targetLeft
      });
      var trackStyle = (0, _innerSliderUtils.getTrackCSS)(spec);

      if (setTrackStyle || _react["default"].Children.count(_this.props.children) !== _react["default"].Children.count(spec.children)) {
        updatedState["trackStyle"] = trackStyle;
      }

      _this.setState(updatedState, callback);
    });

    _defineProperty(_assertThisInitialized(_this), "ssrInit", function () {
      if (_this.props.variableWidth) {
        var _trackWidth = 0,
            _trackLeft = 0;
        var childrenWidths = [];
        var preClones = (0, _innerSliderUtils.getPreClones)(_objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
          slideCount: _this.props.children.length
        }));
        var postClones = (0, _innerSliderUtils.getPostClones)(_objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
          slideCount: _this.props.children.length
        }));

        _this.props.children.forEach(function (child) {
          childrenWidths.push(child.props.style.width);
          _trackWidth += child.props.style.width;
        });

        for (var i = 0; i < preClones; i++) {
          _trackLeft += childrenWidths[childrenWidths.length - 1 - i];
          _trackWidth += childrenWidths[childrenWidths.length - 1 - i];
        }

        for (var _i = 0; _i < postClones; _i++) {
          _trackWidth += childrenWidths[_i];
        }

        for (var _i2 = 0; _i2 < _this.state.currentSlide; _i2++) {
          _trackLeft += childrenWidths[_i2];
        }

        var _trackStyle = {
          width: _trackWidth + "px",
          left: -_trackLeft + "px"
        };

        if (_this.props.centerMode) {
          var currentWidth = "".concat(childrenWidths[_this.state.currentSlide], "px");
          _trackStyle.left = "calc(".concat(_trackStyle.left, " + (100% - ").concat(currentWidth, ") / 2 ) ");
        }

        return {
          trackStyle: _trackStyle
        };
      }

      var childrenCount = _react["default"].Children.count(_this.props.children);

      var spec = _objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
        slideCount: childrenCount
      });

      var slideCount = (0, _innerSliderUtils.getPreClones)(spec) + (0, _innerSliderUtils.getPostClones)(spec) + childrenCount;
      var trackWidth = 100 / _this.props.slidesToShow * slideCount;
      var slideWidth = 100 / slideCount;
      var trackLeft = -slideWidth * ((0, _innerSliderUtils.getPreClones)(spec) + _this.state.currentSlide) * trackWidth / 100;

      if (_this.props.centerMode) {
        trackLeft += (100 - slideWidth * trackWidth / 100) / 2;
      }

      var trackStyle = {
        width: trackWidth + "%",
        left: trackLeft + "%"
      };
      return {
        slideWidth: slideWidth + "%",
        trackStyle: trackStyle
      };
    });

    _defineProperty(_assertThisInitialized(_this), "checkImagesLoad", function () {
      var images = _this.list.querySelectorAll(".slick-slide img");

      var imagesCount = images.length,
          loadedCount = 0;
      Array.prototype.forEach.call(images, function (image) {
        var handler = function handler() {
          return ++loadedCount && loadedCount >= imagesCount && _this.onWindowResized();
        };

        if (!image.onclick) {
          image.onclick = function () {
            return image.parentNode.focus();
          };
        } else {
          var prevClickHandler = image.onclick;

          image.onclick = function () {
            prevClickHandler();
            image.parentNode.focus();
          };
        }

        if (!image.onload) {
          if (_this.props.lazyLoad) {
            image.onload = function () {
              _this.adaptHeight();

              _this.callbackTimers.push(setTimeout(_this.onWindowResized, _this.props.speed));
            };
          } else {
            image.onload = handler;

            image.onerror = function () {
              handler();
              _this.props.onLazyLoadError && _this.props.onLazyLoadError();
            };
          }
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "progressiveLazyLoad", function () {
      var slidesToLoad = [];

      var spec = _objectSpread(_objectSpread({}, _this.props), _this.state);

      for (var index = _this.state.currentSlide; index < _this.state.slideCount + (0, _innerSliderUtils.getPostClones)(spec); index++) {
        if (_this.state.lazyLoadedList.indexOf(index) < 0) {
          slidesToLoad.push(index);
          break;
        }
      }

      for (var _index = _this.state.currentSlide - 1; _index >= -(0, _innerSliderUtils.getPreClones)(spec); _index--) {
        if (_this.state.lazyLoadedList.indexOf(_index) < 0) {
          slidesToLoad.push(_index);
          break;
        }
      }

      if (slidesToLoad.length > 0) {
        _this.setState(function (state) {
          return {
            lazyLoadedList: state.lazyLoadedList.concat(slidesToLoad)
          };
        });

        if (_this.props.onLazyLoad) {
          _this.props.onLazyLoad(slidesToLoad);
        }
      } else {
        if (_this.lazyLoadTimer) {
          clearInterval(_this.lazyLoadTimer);
          delete _this.lazyLoadTimer;
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "slideHandler", function (index) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var _this$props = _this.props,
          asNavFor = _this$props.asNavFor,
          beforeChange = _this$props.beforeChange,
          onLazyLoad = _this$props.onLazyLoad,
          speed = _this$props.speed,
          afterChange = _this$props.afterChange; // capture currentslide before state is updated

      var currentSlide = _this.state.currentSlide;

      var _slideHandler = (0, _innerSliderUtils.slideHandler)(_objectSpread(_objectSpread(_objectSpread({
        index: index
      }, _this.props), _this.state), {}, {
        trackRef: _this.track,
        useCSS: _this.props.useCSS && !dontAnimate
      })),
          state = _slideHandler.state,
          nextState = _slideHandler.nextState;

      if (!state) return;
      beforeChange && beforeChange(currentSlide, state.currentSlide);
      var slidesToLoad = state.lazyLoadedList.filter(function (value) {
        return _this.state.lazyLoadedList.indexOf(value) < 0;
      });
      onLazyLoad && slidesToLoad.length > 0 && onLazyLoad(slidesToLoad);

      if (!_this.props.waitForAnimate && _this.animationEndCallback) {
        clearTimeout(_this.animationEndCallback);
        afterChange && afterChange(currentSlide);
        delete _this.animationEndCallback;
      }

      _this.setState(state, function () {
        // asNavForIndex check is to avoid recursive calls of slideHandler in waitForAnimate=false mode
        if (asNavFor && _this.asNavForIndex !== index) {
          _this.asNavForIndex = index;
          asNavFor.innerSlider.slideHandler(index);
        }

        if (!nextState) return;
        _this.animationEndCallback = setTimeout(function () {
          var animating = nextState.animating,
              firstBatch = _objectWithoutProperties(nextState, ["animating"]);

          _this.setState(firstBatch, function () {
            _this.callbackTimers.push(setTimeout(function () {
              return _this.setState({
                animating: animating
              });
            }, 10));

            afterChange && afterChange(state.currentSlide);
            delete _this.animationEndCallback;
          });
        }, speed);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "changeSlide", function (options) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var spec = _objectSpread(_objectSpread({}, _this.props), _this.state);

      var targetSlide = (0, _innerSliderUtils.changeSlide)(spec, options);
      if (targetSlide !== 0 && !targetSlide) return;

      if (dontAnimate === true) {
        _this.slideHandler(targetSlide, dontAnimate);
      } else {
        _this.slideHandler(targetSlide);
      }

      _this.props.autoplay && _this.autoPlay("update");

      if (_this.props.focusOnSelect) {
        var nodes = _this.list.querySelectorAll(".slick-current");

        nodes[0] && nodes[0].focus();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "clickHandler", function (e) {
      if (_this.clickable === false) {
        e.stopPropagation();
        e.preventDefault();
      }

      _this.clickable = true;
    });

    _defineProperty(_assertThisInitialized(_this), "keyHandler", function (e) {
      var dir = (0, _innerSliderUtils.keyHandler)(e, _this.props.accessibility, _this.props.rtl);
      dir !== "" && _this.changeSlide({
        message: dir
      });
    });

    _defineProperty(_assertThisInitialized(_this), "selectHandler", function (options) {
      _this.changeSlide(options);
    });

    _defineProperty(_assertThisInitialized(_this), "disableBodyScroll", function () {
      var preventDefault = function preventDefault(e) {
        e = e || window.event;
        if (e.preventDefault) e.preventDefault();
        e.returnValue = false;
      };

      window.ontouchmove = preventDefault;
    });

    _defineProperty(_assertThisInitialized(_this), "enableBodyScroll", function () {
      window.ontouchmove = null;
    });

    _defineProperty(_assertThisInitialized(_this), "swipeStart", function (e) {
      if (_this.props.verticalSwiping) {
        _this.disableBodyScroll();
      }

      var state = (0, _innerSliderUtils.swipeStart)(e, _this.props.swipe, _this.props.draggable);
      state !== "" && _this.setState(state);
    });

    _defineProperty(_assertThisInitialized(_this), "swipeMove", function (e) {
      var state = (0, _innerSliderUtils.swipeMove)(e, _objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
        trackRef: _this.track,
        listRef: _this.list,
        slideIndex: _this.state.currentSlide
      }));
      if (!state) return;

      if (state["swiping"]) {
        _this.clickable = false;
      }

      _this.setState(state);
    });

    _defineProperty(_assertThisInitialized(_this), "swipeEnd", function (e) {
      var state = (0, _innerSliderUtils.swipeEnd)(e, _objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
        trackRef: _this.track,
        listRef: _this.list,
        slideIndex: _this.state.currentSlide
      }));
      if (!state) return;
      var triggerSlideHandler = state["triggerSlideHandler"];
      delete state["triggerSlideHandler"];

      _this.setState(state);

      if (triggerSlideHandler === undefined) return;

      _this.slideHandler(triggerSlideHandler);

      if (_this.props.verticalSwiping) {
        _this.enableBodyScroll();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "touchEnd", function (e) {
      _this.swipeEnd(e);

      _this.clickable = true;
    });

    _defineProperty(_assertThisInitialized(_this), "slickPrev", function () {
      // this and fellow methods are wrapped in setTimeout
      // to make sure initialize setState has happened before
      // any of such methods are called
      _this.callbackTimers.push(setTimeout(function () {
        return _this.changeSlide({
          message: "previous"
        });
      }, 0));
    });

    _defineProperty(_assertThisInitialized(_this), "slickNext", function () {
      _this.callbackTimers.push(setTimeout(function () {
        return _this.changeSlide({
          message: "next"
        });
      }, 0));
    });

    _defineProperty(_assertThisInitialized(_this), "slickGoTo", function (slide) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      slide = Number(slide);
      if (isNaN(slide)) return "";

      _this.callbackTimers.push(setTimeout(function () {
        return _this.changeSlide({
          message: "index",
          index: slide,
          currentSlide: _this.state.currentSlide
        }, dontAnimate);
      }, 0));
    });

    _defineProperty(_assertThisInitialized(_this), "play", function () {
      var nextIndex;

      if (_this.props.rtl) {
        nextIndex = _this.state.currentSlide - _this.props.slidesToScroll;
      } else {
        if ((0, _innerSliderUtils.canGoNext)(_objectSpread(_objectSpread({}, _this.props), _this.state))) {
          nextIndex = _this.state.currentSlide + _this.props.slidesToScroll;
        } else {
          return false;
        }
      }

      _this.slideHandler(nextIndex);
    });

    _defineProperty(_assertThisInitialized(_this), "autoPlay", function (playType) {
      if (_this.autoplayTimer) {
        clearInterval(_this.autoplayTimer);
      }

      var autoplaying = _this.state.autoplaying;

      if (playType === "update") {
        if (autoplaying === "hovered" || autoplaying === "focused" || autoplaying === "paused") {
          return;
        }
      } else if (playType === "leave") {
        if (autoplaying === "paused" || autoplaying === "focused") {
          return;
        }
      } else if (playType === "blur") {
        if (autoplaying === "paused" || autoplaying === "hovered") {
          return;
        }
      }

      _this.autoplayTimer = setInterval(_this.play, _this.props.autoplaySpeed + 50);

      _this.setState({
        autoplaying: "playing"
      });
    });

    _defineProperty(_assertThisInitialized(_this), "pause", function (pauseType) {
      if (_this.autoplayTimer) {
        clearInterval(_this.autoplayTimer);
        _this.autoplayTimer = null;
      }

      var autoplaying = _this.state.autoplaying;

      if (pauseType === "paused") {
        _this.setState({
          autoplaying: "paused"
        });
      } else if (pauseType === "focused") {
        if (autoplaying === "hovered" || autoplaying === "playing") {
          _this.setState({
            autoplaying: "focused"
          });
        }
      } else {
        // pauseType  is 'hovered'
        if (autoplaying === "playing") {
          _this.setState({
            autoplaying: "hovered"
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onDotsOver", function () {
      return _this.props.autoplay && _this.pause("hovered");
    });

    _defineProperty(_assertThisInitialized(_this), "onDotsLeave", function () {
      return _this.props.autoplay && _this.state.autoplaying === "hovered" && _this.autoPlay("leave");
    });

    _defineProperty(_assertThisInitialized(_this), "onTrackOver", function () {
      return _this.props.autoplay && _this.pause("hovered");
    });

    _defineProperty(_assertThisInitialized(_this), "onTrackLeave", function () {
      return _this.props.autoplay && _this.state.autoplaying === "hovered" && _this.autoPlay("leave");
    });

    _defineProperty(_assertThisInitialized(_this), "onSlideFocus", function () {
      return _this.props.autoplay && _this.pause("focused");
    });

    _defineProperty(_assertThisInitialized(_this), "onSlideBlur", function () {
      return _this.props.autoplay && _this.state.autoplaying === "focused" && _this.autoPlay("blur");
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      var className = (0, _classnames["default"])("slick-slider", _this.props.className, {
        "slick-vertical": _this.props.vertical,
        "slick-initialized": true
      });

      var spec = _objectSpread(_objectSpread({}, _this.props), _this.state);

      var trackProps = (0, _innerSliderUtils.extractObject)(spec, ["fade", "cssEase", "speed", "infinite", "centerMode", "focusOnSelect", "currentSlide", "lazyLoad", "lazyLoadedList", "rtl", "slideWidth", "slideHeight", "listHeight", "vertical", "slidesToShow", "slidesToScroll", "slideCount", "trackStyle", "variableWidth", "unslick", "centerPadding", "targetSlide", "useCSS"]);
      var pauseOnHover = _this.props.pauseOnHover;
      trackProps = _objectSpread(_objectSpread({}, trackProps), {}, {
        onMouseEnter: pauseOnHover ? _this.onTrackOver : null,
        onMouseLeave: pauseOnHover ? _this.onTrackLeave : null,
        onMouseOver: pauseOnHover ? _this.onTrackOver : null,
        focusOnSelect: _this.props.focusOnSelect && _this.clickable ? _this.selectHandler : null
      });
      var dots;

      if (_this.props.dots === true && _this.state.slideCount >= _this.props.slidesToShow) {
        var dotProps = (0, _innerSliderUtils.extractObject)(spec, ["dotsClass", "slideCount", "slidesToShow", "currentSlide", "slidesToScroll", "clickHandler", "children", "customPaging", "infinite", "appendDots"]);
        var pauseOnDotsHover = _this.props.pauseOnDotsHover;
        dotProps = _objectSpread(_objectSpread({}, dotProps), {}, {
          clickHandler: _this.changeSlide,
          onMouseEnter: pauseOnDotsHover ? _this.onDotsLeave : null,
          onMouseOver: pauseOnDotsHover ? _this.onDotsOver : null,
          onMouseLeave: pauseOnDotsHover ? _this.onDotsLeave : null
        });
        dots = /*#__PURE__*/_react["default"].createElement(_dots.Dots, dotProps);
      }

      var prevArrow, nextArrow;
      var arrowProps = (0, _innerSliderUtils.extractObject)(spec, ["infinite", "centerMode", "currentSlide", "slideCount", "slidesToShow", "prevArrow", "nextArrow"]);
      arrowProps.clickHandler = _this.changeSlide;

      if (_this.props.arrows) {
        prevArrow = /*#__PURE__*/_react["default"].createElement(_arrows.PrevArrow, arrowProps);
        nextArrow = /*#__PURE__*/_react["default"].createElement(_arrows.NextArrow, arrowProps);
      }

      var verticalHeightStyle = null;

      if (_this.props.vertical) {
        verticalHeightStyle = {
          height: _this.state.listHeight
        };
      }

      var centerPaddingStyle = null;

      if (_this.props.vertical === false) {
        if (_this.props.centerMode === true) {
          centerPaddingStyle = {
            padding: "0px " + _this.props.centerPadding
          };
        }
      } else {
        if (_this.props.centerMode === true) {
          centerPaddingStyle = {
            padding: _this.props.centerPadding + " 0px"
          };
        }
      }

      var listStyle = _objectSpread(_objectSpread({}, verticalHeightStyle), centerPaddingStyle);

      var touchMove = _this.props.touchMove;
      var listProps = {
        className: "slick-list",
        style: listStyle,
        onClick: _this.clickHandler,
        onMouseDown: touchMove ? _this.swipeStart : null,
        onMouseMove: _this.state.dragging && touchMove ? _this.swipeMove : null,
        onMouseUp: touchMove ? _this.swipeEnd : null,
        onMouseLeave: _this.state.dragging && touchMove ? _this.swipeEnd : null,
        onTouchStart: touchMove ? _this.swipeStart : null,
        onTouchMove: _this.state.dragging && touchMove ? _this.swipeMove : null,
        onTouchEnd: touchMove ? _this.touchEnd : null,
        onTouchCancel: _this.state.dragging && touchMove ? _this.swipeEnd : null,
        onKeyDown: _this.props.accessibility ? _this.keyHandler : null
      };
      var innerSliderProps = {
        className: className,
        dir: "ltr",
        style: _this.props.style
      };

      if (_this.props.unslick) {
        listProps = {
          className: "slick-list"
        };
        innerSliderProps = {
          className: className
        };
      }

      return /*#__PURE__*/_react["default"].createElement("div", innerSliderProps, !_this.props.unslick ? prevArrow : "", /*#__PURE__*/_react["default"].createElement("div", _extends({
        ref: _this.listRefHandler
      }, listProps), /*#__PURE__*/_react["default"].createElement(_track.Track, _extends({
        ref: _this.trackRefHandler
      }, trackProps), _this.props.children)), !_this.props.unslick ? nextArrow : "", !_this.props.unslick ? dots : "");
    });

    _this.list = null;
    _this.track = null;
    _this.state = _objectSpread(_objectSpread({}, _initialState["default"]), {}, {
      currentSlide: _this.props.initialSlide,
      slideCount: _react["default"].Children.count(_this.props.children)
    });
    _this.callbackTimers = [];
    _this.clickable = true;
    _this.debouncedResize = null;

    var ssrState = _this.ssrInit();

    _this.state = _objectSpread(_objectSpread({}, _this.state), ssrState);
    return _this;
  }

  _createClass(InnerSlider, [{
    key: "didPropsChange",
    value: function didPropsChange(prevProps) {
      var setTrackStyle = false;

      for (var _i3 = 0, _Object$keys = Object.keys(this.props); _i3 < _Object$keys.length; _i3++) {
        var key = _Object$keys[_i3];

        if (!prevProps.hasOwnProperty(key)) {
          setTrackStyle = true;
          break;
        }

        if (_typeof(prevProps[key]) === "object" || typeof prevProps[key] === "function") {
          continue;
        }

        if (prevProps[key] !== this.props[key]) {
          setTrackStyle = true;
          break;
        }
      }

      return setTrackStyle || _react["default"].Children.count(this.props.children) !== _react["default"].Children.count(prevProps.children);
    }
  }]);

  return InnerSlider;
}(_react["default"].Component);

exports.InnerSlider = InnerSlider;

/***/ }),

/***/ "./node_modules/react-slick/lib/slider.js":
/*!************************************************!*\
  !*** ./node_modules/react-slick/lib/slider.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _innerSlider = __webpack_require__(/*! ./inner-slider */ "./node_modules/react-slick/lib/inner-slider.js");

var _json2mq = _interopRequireDefault(__webpack_require__(/*! json2mq */ "./node_modules/json2mq/index.js"));

var _defaultProps = _interopRequireDefault(__webpack_require__(/*! ./default-props */ "./node_modules/react-slick/lib/default-props.js"));

var _innerSliderUtils = __webpack_require__(/*! ./utils/innerSliderUtils */ "./node_modules/react-slick/lib/utils/innerSliderUtils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var enquire = (0, _innerSliderUtils.canUseDOM)() && __webpack_require__(/*! enquire.js */ "./node_modules/enquire.js/src/index.js");

var Slider = /*#__PURE__*/function (_React$Component) {
  _inherits(Slider, _React$Component);

  var _super = _createSuper(Slider);

  function Slider(props) {
    var _this;

    _classCallCheck(this, Slider);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "innerSliderRefHandler", function (ref) {
      return _this.innerSlider = ref;
    });

    _defineProperty(_assertThisInitialized(_this), "slickPrev", function () {
      return _this.innerSlider.slickPrev();
    });

    _defineProperty(_assertThisInitialized(_this), "slickNext", function () {
      return _this.innerSlider.slickNext();
    });

    _defineProperty(_assertThisInitialized(_this), "slickGoTo", function (slide) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return _this.innerSlider.slickGoTo(slide, dontAnimate);
    });

    _defineProperty(_assertThisInitialized(_this), "slickPause", function () {
      return _this.innerSlider.pause("paused");
    });

    _defineProperty(_assertThisInitialized(_this), "slickPlay", function () {
      return _this.innerSlider.autoPlay("play");
    });

    _this.state = {
      breakpoint: null
    };
    _this._responsiveMediaHandlers = [];
    return _this;
  }

  _createClass(Slider, [{
    key: "media",
    value: function media(query, handler) {
      // javascript handler for  css media query
      enquire.register(query, handler);

      this._responsiveMediaHandlers.push({
        query: query,
        handler: handler
      });
    } // handles responsive breakpoints

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // performance monitoring
      //if (process.env.NODE_ENV !== 'production') {
      //const { whyDidYouUpdate } = require('why-did-you-update')
      //whyDidYouUpdate(React)
      //}
      if (this.props.responsive) {
        var breakpoints = this.props.responsive.map(function (breakpt) {
          return breakpt.breakpoint;
        }); // sort them in increasing order of their numerical value

        breakpoints.sort(function (x, y) {
          return x - y;
        });
        breakpoints.forEach(function (breakpoint, index) {
          // media query for each breakpoint
          var bQuery;

          if (index === 0) {
            bQuery = (0, _json2mq["default"])({
              minWidth: 0,
              maxWidth: breakpoint
            });
          } else {
            bQuery = (0, _json2mq["default"])({
              minWidth: breakpoints[index - 1] + 1,
              maxWidth: breakpoint
            });
          } // when not using server side rendering


          (0, _innerSliderUtils.canUseDOM)() && _this2.media(bQuery, function () {
            _this2.setState({
              breakpoint: breakpoint
            });
          });
        }); // Register media query for full screen. Need to support resize from small to large
        // convert javascript object to media query string

        var query = (0, _json2mq["default"])({
          minWidth: breakpoints.slice(-1)[0]
        });
        (0, _innerSliderUtils.canUseDOM)() && this.media(query, function () {
          _this2.setState({
            breakpoint: null
          });
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._responsiveMediaHandlers.forEach(function (obj) {
        enquire.unregister(obj.query, obj.handler);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var settings;
      var newProps;

      if (this.state.breakpoint) {
        newProps = this.props.responsive.filter(function (resp) {
          return resp.breakpoint === _this3.state.breakpoint;
        });
        settings = newProps[0].settings === "unslick" ? "unslick" : _objectSpread(_objectSpread(_objectSpread({}, _defaultProps["default"]), this.props), newProps[0].settings);
      } else {
        settings = _objectSpread(_objectSpread({}, _defaultProps["default"]), this.props);
      } // force scrolling by one if centerMode is on


      if (settings.centerMode) {
        if (settings.slidesToScroll > 1 && "development" !== "production") {
          console.warn("slidesToScroll should be equal to 1 in centerMode, you are using ".concat(settings.slidesToScroll));
        }

        settings.slidesToScroll = 1;
      } // force showing one slide and scrolling by one if the fade mode is on


      if (settings.fade) {
        if (settings.slidesToShow > 1 && "development" !== "production") {
          console.warn("slidesToShow should be equal to 1 when fade is true, you're using ".concat(settings.slidesToShow));
        }

        if (settings.slidesToScroll > 1 && "development" !== "production") {
          console.warn("slidesToScroll should be equal to 1 when fade is true, you're using ".concat(settings.slidesToScroll));
        }

        settings.slidesToShow = 1;
        settings.slidesToScroll = 1;
      } // makes sure that children is an array, even when there is only 1 child


      var children = _react["default"].Children.toArray(this.props.children); // Children may contain false or null, so we should filter them
      // children may also contain string filled with spaces (in certain cases where we use jsx strings)


      children = children.filter(function (child) {
        if (typeof child === "string") {
          return !!child.trim();
        }

        return !!child;
      }); // rows and slidesPerRow logic is handled here

      if (settings.variableWidth && (settings.rows > 1 || settings.slidesPerRow > 1)) {
        console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1");
        settings.variableWidth = false;
      }

      var newChildren = [];
      var currentWidth = null;

      for (var i = 0; i < children.length; i += settings.rows * settings.slidesPerRow) {
        var newSlide = [];

        for (var j = i; j < i + settings.rows * settings.slidesPerRow; j += settings.slidesPerRow) {
          var row = [];

          for (var k = j; k < j + settings.slidesPerRow; k += 1) {
            if (settings.variableWidth && children[k].props.style) {
              currentWidth = children[k].props.style.width;
            }

            if (k >= children.length) break;
            row.push( /*#__PURE__*/_react["default"].cloneElement(children[k], {
              key: 100 * i + 10 * j + k,
              tabIndex: -1,
              style: {
                width: "".concat(100 / settings.slidesPerRow, "%"),
                display: "inline-block"
              }
            }));
          }

          newSlide.push( /*#__PURE__*/_react["default"].createElement("div", {
            key: 10 * i + j
          }, row));
        }

        if (settings.variableWidth) {
          newChildren.push( /*#__PURE__*/_react["default"].createElement("div", {
            key: i,
            style: {
              width: currentWidth
            }
          }, newSlide));
        } else {
          newChildren.push( /*#__PURE__*/_react["default"].createElement("div", {
            key: i
          }, newSlide));
        }
      }

      if (settings === "unslick") {
        var className = "regular slider " + (this.props.className || "");
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: className
        }, children);
      } else if (newChildren.length <= settings.slidesToShow) {
        settings.unslick = true;
      }

      return /*#__PURE__*/_react["default"].createElement(_innerSlider.InnerSlider, _extends({
        style: this.props.style,
        ref: this.innerSliderRefHandler
      }, settings), newChildren);
    }
  }]);

  return Slider;
}(_react["default"].Component);

exports["default"] = Slider;

/***/ }),

/***/ "./node_modules/react-slick/lib/track.js":
/*!***********************************************!*\
  !*** ./node_modules/react-slick/lib/track.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Track = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _innerSliderUtils = __webpack_require__(/*! ./utils/innerSliderUtils */ "./node_modules/react-slick/lib/utils/innerSliderUtils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// given specifications/props for a slide, fetch all the classes that need to be applied to the slide
var getSlideClasses = function getSlideClasses(spec) {
  var slickActive, slickCenter, slickCloned;
  var centerOffset, index;

  if (spec.rtl) {
    index = spec.slideCount - 1 - spec.index;
  } else {
    index = spec.index;
  }

  slickCloned = index < 0 || index >= spec.slideCount;

  if (spec.centerMode) {
    centerOffset = Math.floor(spec.slidesToShow / 2);
    slickCenter = (index - spec.currentSlide) % spec.slideCount === 0;

    if (index > spec.currentSlide - centerOffset - 1 && index <= spec.currentSlide + centerOffset) {
      slickActive = true;
    }
  } else {
    slickActive = spec.currentSlide <= index && index < spec.currentSlide + spec.slidesToShow;
  }

  var focusedSlide;

  if (spec.targetSlide < 0) {
    focusedSlide = spec.targetSlide + spec.slideCount;
  } else if (spec.targetSlide >= spec.slideCount) {
    focusedSlide = spec.targetSlide - spec.slideCount;
  } else {
    focusedSlide = spec.targetSlide;
  }

  var slickCurrent = index === focusedSlide;
  return {
    "slick-slide": true,
    "slick-active": slickActive,
    "slick-center": slickCenter,
    "slick-cloned": slickCloned,
    "slick-current": slickCurrent // dubious in case of RTL

  };
};

var getSlideStyle = function getSlideStyle(spec) {
  var style = {};

  if (spec.variableWidth === undefined || spec.variableWidth === false) {
    style.width = spec.slideWidth;
  }

  if (spec.fade) {
    style.position = "relative";

    if (spec.vertical) {
      style.top = -spec.index * parseInt(spec.slideHeight);
    } else {
      style.left = -spec.index * parseInt(spec.slideWidth);
    }

    style.opacity = spec.currentSlide === spec.index ? 1 : 0;

    if (spec.useCSS) {
      style.transition = "opacity " + spec.speed + "ms " + spec.cssEase + ", " + "visibility " + spec.speed + "ms " + spec.cssEase;
    }
  }

  return style;
};

var getKey = function getKey(child, fallbackKey) {
  return child.key || fallbackKey;
};

var renderSlides = function renderSlides(spec) {
  var key;
  var slides = [];
  var preCloneSlides = [];
  var postCloneSlides = [];

  var childrenCount = _react["default"].Children.count(spec.children);

  var startIndex = (0, _innerSliderUtils.lazyStartIndex)(spec);
  var endIndex = (0, _innerSliderUtils.lazyEndIndex)(spec);

  _react["default"].Children.forEach(spec.children, function (elem, index) {
    var child;
    var childOnClickOptions = {
      message: "children",
      index: index,
      slidesToScroll: spec.slidesToScroll,
      currentSlide: spec.currentSlide
    }; // in case of lazyLoad, whether or not we want to fetch the slide

    if (!spec.lazyLoad || spec.lazyLoad && spec.lazyLoadedList.indexOf(index) >= 0) {
      child = elem;
    } else {
      child = /*#__PURE__*/_react["default"].createElement("div", null);
    }

    var childStyle = getSlideStyle(_objectSpread(_objectSpread({}, spec), {}, {
      index: index
    }));
    var slideClass = child.props.className || "";
    var slideClasses = getSlideClasses(_objectSpread(_objectSpread({}, spec), {}, {
      index: index
    })); // push a cloned element of the desired slide

    slides.push( /*#__PURE__*/_react["default"].cloneElement(child, {
      key: "original" + getKey(child, index),
      "data-index": index,
      className: (0, _classnames["default"])(slideClasses, slideClass),
      tabIndex: "-1",
      "aria-hidden": !slideClasses["slick-active"],
      style: _objectSpread(_objectSpread({
        outline: "none"
      }, child.props.style || {}), childStyle),
      onClick: function onClick(e) {
        child.props && child.props.onClick && child.props.onClick(e);

        if (spec.focusOnSelect) {
          spec.focusOnSelect(childOnClickOptions);
        }
      }
    })); // if slide needs to be precloned or postcloned

    if (spec.infinite && spec.fade === false) {
      var preCloneNo = childrenCount - index;

      if (preCloneNo <= (0, _innerSliderUtils.getPreClones)(spec) && childrenCount !== spec.slidesToShow) {
        key = -preCloneNo;

        if (key >= startIndex) {
          child = elem;
        }

        slideClasses = getSlideClasses(_objectSpread(_objectSpread({}, spec), {}, {
          index: key
        }));
        preCloneSlides.push( /*#__PURE__*/_react["default"].cloneElement(child, {
          key: "precloned" + getKey(child, key),
          "data-index": key,
          tabIndex: "-1",
          className: (0, _classnames["default"])(slideClasses, slideClass),
          "aria-hidden": !slideClasses["slick-active"],
          style: _objectSpread(_objectSpread({}, child.props.style || {}), childStyle),
          onClick: function onClick(e) {
            child.props && child.props.onClick && child.props.onClick(e);

            if (spec.focusOnSelect) {
              spec.focusOnSelect(childOnClickOptions);
            }
          }
        }));
      }

      if (childrenCount !== spec.slidesToShow) {
        key = childrenCount + index;

        if (key < endIndex) {
          child = elem;
        }

        slideClasses = getSlideClasses(_objectSpread(_objectSpread({}, spec), {}, {
          index: key
        }));
        postCloneSlides.push( /*#__PURE__*/_react["default"].cloneElement(child, {
          key: "postcloned" + getKey(child, key),
          "data-index": key,
          tabIndex: "-1",
          className: (0, _classnames["default"])(slideClasses, slideClass),
          "aria-hidden": !slideClasses["slick-active"],
          style: _objectSpread(_objectSpread({}, child.props.style || {}), childStyle),
          onClick: function onClick(e) {
            child.props && child.props.onClick && child.props.onClick(e);

            if (spec.focusOnSelect) {
              spec.focusOnSelect(childOnClickOptions);
            }
          }
        }));
      }
    }
  });

  if (spec.rtl) {
    return preCloneSlides.concat(slides, postCloneSlides).reverse();
  } else {
    return preCloneSlides.concat(slides, postCloneSlides);
  }
};

var Track = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Track, _React$PureComponent);

  var _super = _createSuper(Track);

  function Track() {
    var _this;

    _classCallCheck(this, Track);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "node", null);

    _defineProperty(_assertThisInitialized(_this), "handleRef", function (ref) {
      _this.node = ref;
    });

    return _this;
  }

  _createClass(Track, [{
    key: "render",
    value: function render() {
      var slides = renderSlides(this.props);
      var _this$props = this.props,
          onMouseEnter = _this$props.onMouseEnter,
          onMouseOver = _this$props.onMouseOver,
          onMouseLeave = _this$props.onMouseLeave;
      var mouseEvents = {
        onMouseEnter: onMouseEnter,
        onMouseOver: onMouseOver,
        onMouseLeave: onMouseLeave
      };
      return /*#__PURE__*/_react["default"].createElement("div", _extends({
        ref: this.handleRef,
        className: "slick-track",
        style: this.props.trackStyle
      }, mouseEvents), slides);
    }
  }]);

  return Track;
}(_react["default"].PureComponent);

exports.Track = Track;

/***/ }),

/***/ "./node_modules/react-slick/lib/utils/innerSliderUtils.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-slick/lib/utils/innerSliderUtils.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clamp = clamp;
exports.canUseDOM = exports.slidesOnLeft = exports.slidesOnRight = exports.siblingDirection = exports.getTotalSlides = exports.getPostClones = exports.getPreClones = exports.getTrackLeft = exports.getTrackAnimateCSS = exports.getTrackCSS = exports.checkSpecKeys = exports.getSlideCount = exports.checkNavigable = exports.getNavigableIndexes = exports.swipeEnd = exports.swipeMove = exports.swipeStart = exports.keyHandler = exports.changeSlide = exports.slideHandler = exports.initializedState = exports.extractObject = exports.canGoNext = exports.getSwipeDirection = exports.getHeight = exports.getWidth = exports.lazySlidesOnRight = exports.lazySlidesOnLeft = exports.lazyEndIndex = exports.lazyStartIndex = exports.getRequiredLazySlides = exports.getOnDemandLazySlides = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function clamp(number, lowerBound, upperBound) {
  return Math.max(lowerBound, Math.min(number, upperBound));
}

var getOnDemandLazySlides = function getOnDemandLazySlides(spec) {
  var onDemandSlides = [];
  var startIndex = lazyStartIndex(spec);
  var endIndex = lazyEndIndex(spec);

  for (var slideIndex = startIndex; slideIndex < endIndex; slideIndex++) {
    if (spec.lazyLoadedList.indexOf(slideIndex) < 0) {
      onDemandSlides.push(slideIndex);
    }
  }

  return onDemandSlides;
}; // return list of slides that need to be present


exports.getOnDemandLazySlides = getOnDemandLazySlides;

var getRequiredLazySlides = function getRequiredLazySlides(spec) {
  var requiredSlides = [];
  var startIndex = lazyStartIndex(spec);
  var endIndex = lazyEndIndex(spec);

  for (var slideIndex = startIndex; slideIndex < endIndex; slideIndex++) {
    requiredSlides.push(slideIndex);
  }

  return requiredSlides;
}; // startIndex that needs to be present


exports.getRequiredLazySlides = getRequiredLazySlides;

var lazyStartIndex = function lazyStartIndex(spec) {
  return spec.currentSlide - lazySlidesOnLeft(spec);
};

exports.lazyStartIndex = lazyStartIndex;

var lazyEndIndex = function lazyEndIndex(spec) {
  return spec.currentSlide + lazySlidesOnRight(spec);
};

exports.lazyEndIndex = lazyEndIndex;

var lazySlidesOnLeft = function lazySlidesOnLeft(spec) {
  return spec.centerMode ? Math.floor(spec.slidesToShow / 2) + (parseInt(spec.centerPadding) > 0 ? 1 : 0) : 0;
};

exports.lazySlidesOnLeft = lazySlidesOnLeft;

var lazySlidesOnRight = function lazySlidesOnRight(spec) {
  return spec.centerMode ? Math.floor((spec.slidesToShow - 1) / 2) + 1 + (parseInt(spec.centerPadding) > 0 ? 1 : 0) : spec.slidesToShow;
}; // get width of an element


exports.lazySlidesOnRight = lazySlidesOnRight;

var getWidth = function getWidth(elem) {
  return elem && elem.offsetWidth || 0;
};

exports.getWidth = getWidth;

var getHeight = function getHeight(elem) {
  return elem && elem.offsetHeight || 0;
};

exports.getHeight = getHeight;

var getSwipeDirection = function getSwipeDirection(touchObject) {
  var verticalSwiping = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var xDist, yDist, r, swipeAngle;
  xDist = touchObject.startX - touchObject.curX;
  yDist = touchObject.startY - touchObject.curY;
  r = Math.atan2(yDist, xDist);
  swipeAngle = Math.round(r * 180 / Math.PI);

  if (swipeAngle < 0) {
    swipeAngle = 360 - Math.abs(swipeAngle);
  }

  if (swipeAngle <= 45 && swipeAngle >= 0 || swipeAngle <= 360 && swipeAngle >= 315) {
    return "left";
  }

  if (swipeAngle >= 135 && swipeAngle <= 225) {
    return "right";
  }

  if (verticalSwiping === true) {
    if (swipeAngle >= 35 && swipeAngle <= 135) {
      return "up";
    } else {
      return "down";
    }
  }

  return "vertical";
}; // whether or not we can go next


exports.getSwipeDirection = getSwipeDirection;

var canGoNext = function canGoNext(spec) {
  var canGo = true;

  if (!spec.infinite) {
    if (spec.centerMode && spec.currentSlide >= spec.slideCount - 1) {
      canGo = false;
    } else if (spec.slideCount <= spec.slidesToShow || spec.currentSlide >= spec.slideCount - spec.slidesToShow) {
      canGo = false;
    }
  }

  return canGo;
}; // given an object and a list of keys, return new object with given keys


exports.canGoNext = canGoNext;

var extractObject = function extractObject(spec, keys) {
  var newObject = {};
  keys.forEach(function (key) {
    return newObject[key] = spec[key];
  });
  return newObject;
}; // get initialized state


exports.extractObject = extractObject;

var initializedState = function initializedState(spec) {
  // spec also contains listRef, trackRef
  var slideCount = _react["default"].Children.count(spec.children);

  var listNode = spec.listRef;
  var listWidth = Math.ceil(getWidth(listNode));
  var trackNode = spec.trackRef && spec.trackRef.node;
  var trackWidth = Math.ceil(getWidth(trackNode));
  var slideWidth;

  if (!spec.vertical) {
    var centerPaddingAdj = spec.centerMode && parseInt(spec.centerPadding) * 2;

    if (typeof spec.centerPadding === "string" && spec.centerPadding.slice(-1) === "%") {
      centerPaddingAdj *= listWidth / 100;
    }

    slideWidth = Math.ceil((listWidth - centerPaddingAdj) / spec.slidesToShow);
  } else {
    slideWidth = listWidth;
  }

  var slideHeight = listNode && getHeight(listNode.querySelector('[data-index="0"]'));
  var listHeight = slideHeight * spec.slidesToShow;
  var currentSlide = spec.currentSlide === undefined ? spec.initialSlide : spec.currentSlide;

  if (spec.rtl && spec.currentSlide === undefined) {
    currentSlide = slideCount - 1 - spec.initialSlide;
  }

  var lazyLoadedList = spec.lazyLoadedList || [];
  var slidesToLoad = getOnDemandLazySlides(_objectSpread(_objectSpread({}, spec), {}, {
    currentSlide: currentSlide,
    lazyLoadedList: lazyLoadedList
  }));
  lazyLoadedList.concat(slidesToLoad);
  var state = {
    slideCount: slideCount,
    slideWidth: slideWidth,
    listWidth: listWidth,
    trackWidth: trackWidth,
    currentSlide: currentSlide,
    slideHeight: slideHeight,
    listHeight: listHeight,
    lazyLoadedList: lazyLoadedList
  };

  if (spec.autoplaying === null && spec.autoplay) {
    state["autoplaying"] = "playing";
  }

  return state;
};

exports.initializedState = initializedState;

var slideHandler = function slideHandler(spec) {
  var waitForAnimate = spec.waitForAnimate,
      animating = spec.animating,
      fade = spec.fade,
      infinite = spec.infinite,
      index = spec.index,
      slideCount = spec.slideCount,
      lazyLoadedList = spec.lazyLoadedList,
      lazyLoad = spec.lazyLoad,
      currentSlide = spec.currentSlide,
      centerMode = spec.centerMode,
      slidesToScroll = spec.slidesToScroll,
      slidesToShow = spec.slidesToShow,
      useCSS = spec.useCSS;
  if (waitForAnimate && animating) return {};
  var animationSlide = index,
      finalSlide,
      animationLeft,
      finalLeft;
  var state = {},
      nextState = {};
  var targetSlide = infinite ? index : clamp(index, 0, slideCount - 1);

  if (fade) {
    if (!infinite && (index < 0 || index >= slideCount)) return {};

    if (index < 0) {
      animationSlide = index + slideCount;
    } else if (index >= slideCount) {
      animationSlide = index - slideCount;
    }

    if (lazyLoad && lazyLoadedList.indexOf(animationSlide) < 0) {
      lazyLoadedList.push(animationSlide);
    }

    state = {
      animating: true,
      currentSlide: animationSlide,
      lazyLoadedList: lazyLoadedList,
      targetSlide: animationSlide
    };
    nextState = {
      animating: false,
      targetSlide: animationSlide
    };
  } else {
    finalSlide = animationSlide;

    if (animationSlide < 0) {
      finalSlide = animationSlide + slideCount;
      if (!infinite) finalSlide = 0;else if (slideCount % slidesToScroll !== 0) finalSlide = slideCount - slideCount % slidesToScroll;
    } else if (!canGoNext(spec) && animationSlide > currentSlide) {
      animationSlide = finalSlide = currentSlide;
    } else if (centerMode && animationSlide >= slideCount) {
      animationSlide = infinite ? slideCount : slideCount - 1;
      finalSlide = infinite ? 0 : slideCount - 1;
    } else if (animationSlide >= slideCount) {
      finalSlide = animationSlide - slideCount;
      if (!infinite) finalSlide = slideCount - slidesToShow;else if (slideCount % slidesToScroll !== 0) finalSlide = 0;
    }

    if (!infinite && animationSlide + slidesToShow >= slideCount) {
      finalSlide = slideCount - slidesToShow;
    }

    animationLeft = getTrackLeft(_objectSpread(_objectSpread({}, spec), {}, {
      slideIndex: animationSlide
    }));
    finalLeft = getTrackLeft(_objectSpread(_objectSpread({}, spec), {}, {
      slideIndex: finalSlide
    }));

    if (!infinite) {
      if (animationLeft === finalLeft) animationSlide = finalSlide;
      animationLeft = finalLeft;
    }

    lazyLoad && lazyLoadedList.concat(getOnDemandLazySlides(_objectSpread(_objectSpread({}, spec), {}, {
      currentSlide: animationSlide
    })));

    if (!useCSS) {
      state = {
        currentSlide: finalSlide,
        trackStyle: getTrackCSS(_objectSpread(_objectSpread({}, spec), {}, {
          left: finalLeft
        })),
        lazyLoadedList: lazyLoadedList,
        targetSlide: targetSlide
      };
    } else {
      state = {
        animating: true,
        currentSlide: finalSlide,
        trackStyle: getTrackAnimateCSS(_objectSpread(_objectSpread({}, spec), {}, {
          left: animationLeft
        })),
        lazyLoadedList: lazyLoadedList,
        targetSlide: targetSlide
      };
      nextState = {
        animating: false,
        currentSlide: finalSlide,
        trackStyle: getTrackCSS(_objectSpread(_objectSpread({}, spec), {}, {
          left: finalLeft
        })),
        swipeLeft: null,
        targetSlide: targetSlide
      };
    }
  }

  return {
    state: state,
    nextState: nextState
  };
};

exports.slideHandler = slideHandler;

var changeSlide = function changeSlide(spec, options) {
  var indexOffset, previousInt, slideOffset, unevenOffset, targetSlide;
  var slidesToScroll = spec.slidesToScroll,
      slidesToShow = spec.slidesToShow,
      slideCount = spec.slideCount,
      currentSlide = spec.currentSlide,
      previousTargetSlide = spec.targetSlide,
      lazyLoad = spec.lazyLoad,
      infinite = spec.infinite;
  unevenOffset = slideCount % slidesToScroll !== 0;
  indexOffset = unevenOffset ? 0 : (slideCount - currentSlide) % slidesToScroll;

  if (options.message === "previous") {
    slideOffset = indexOffset === 0 ? slidesToScroll : slidesToShow - indexOffset;
    targetSlide = currentSlide - slideOffset;

    if (lazyLoad && !infinite) {
      previousInt = currentSlide - slideOffset;
      targetSlide = previousInt === -1 ? slideCount - 1 : previousInt;
    }

    if (!infinite) {
      targetSlide = previousTargetSlide - slidesToScroll;
    }
  } else if (options.message === "next") {
    slideOffset = indexOffset === 0 ? slidesToScroll : indexOffset;
    targetSlide = currentSlide + slideOffset;

    if (lazyLoad && !infinite) {
      targetSlide = (currentSlide + slidesToScroll) % slideCount + indexOffset;
    }

    if (!infinite) {
      targetSlide = previousTargetSlide + slidesToScroll;
    }
  } else if (options.message === "dots") {
    // Click on dots
    targetSlide = options.index * options.slidesToScroll;
  } else if (options.message === "children") {
    // Click on the slides
    targetSlide = options.index;

    if (infinite) {
      var direction = siblingDirection(_objectSpread(_objectSpread({}, spec), {}, {
        targetSlide: targetSlide
      }));

      if (targetSlide > options.currentSlide && direction === "left") {
        targetSlide = targetSlide - slideCount;
      } else if (targetSlide < options.currentSlide && direction === "right") {
        targetSlide = targetSlide + slideCount;
      }
    }
  } else if (options.message === "index") {
    targetSlide = Number(options.index);
  }

  return targetSlide;
};

exports.changeSlide = changeSlide;

var keyHandler = function keyHandler(e, accessibility, rtl) {
  if (e.target.tagName.match("TEXTAREA|INPUT|SELECT") || !accessibility) return "";
  if (e.keyCode === 37) return rtl ? "next" : "previous";
  if (e.keyCode === 39) return rtl ? "previous" : "next";
  return "";
};

exports.keyHandler = keyHandler;

var swipeStart = function swipeStart(e, swipe, draggable) {
  e.target.tagName === "IMG" && e.preventDefault();
  if (!swipe || !draggable && e.type.indexOf("mouse") !== -1) return "";
  return {
    dragging: true,
    touchObject: {
      startX: e.touches ? e.touches[0].pageX : e.clientX,
      startY: e.touches ? e.touches[0].pageY : e.clientY,
      curX: e.touches ? e.touches[0].pageX : e.clientX,
      curY: e.touches ? e.touches[0].pageY : e.clientY
    }
  };
};

exports.swipeStart = swipeStart;

var swipeMove = function swipeMove(e, spec) {
  // spec also contains, trackRef and slideIndex
  var scrolling = spec.scrolling,
      animating = spec.animating,
      vertical = spec.vertical,
      swipeToSlide = spec.swipeToSlide,
      verticalSwiping = spec.verticalSwiping,
      rtl = spec.rtl,
      currentSlide = spec.currentSlide,
      edgeFriction = spec.edgeFriction,
      edgeDragged = spec.edgeDragged,
      onEdge = spec.onEdge,
      swiped = spec.swiped,
      swiping = spec.swiping,
      slideCount = spec.slideCount,
      slidesToScroll = spec.slidesToScroll,
      infinite = spec.infinite,
      touchObject = spec.touchObject,
      swipeEvent = spec.swipeEvent,
      listHeight = spec.listHeight,
      listWidth = spec.listWidth;
  if (scrolling) return;
  if (animating) return e.preventDefault();
  if (vertical && swipeToSlide && verticalSwiping) e.preventDefault();
  var swipeLeft,
      state = {};
  var curLeft = getTrackLeft(spec);
  touchObject.curX = e.touches ? e.touches[0].pageX : e.clientX;
  touchObject.curY = e.touches ? e.touches[0].pageY : e.clientY;
  touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curX - touchObject.startX, 2)));
  var verticalSwipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curY - touchObject.startY, 2)));

  if (!verticalSwiping && !swiping && verticalSwipeLength > 10) {
    return {
      scrolling: true
    };
  }

  if (verticalSwiping) touchObject.swipeLength = verticalSwipeLength;
  var positionOffset = (!rtl ? 1 : -1) * (touchObject.curX > touchObject.startX ? 1 : -1);
  if (verticalSwiping) positionOffset = touchObject.curY > touchObject.startY ? 1 : -1;
  var dotCount = Math.ceil(slideCount / slidesToScroll);
  var swipeDirection = getSwipeDirection(spec.touchObject, verticalSwiping);
  var touchSwipeLength = touchObject.swipeLength;

  if (!infinite) {
    if (currentSlide === 0 && swipeDirection === "right" || currentSlide + 1 >= dotCount && swipeDirection === "left" || !canGoNext(spec) && swipeDirection === "left") {
      touchSwipeLength = touchObject.swipeLength * edgeFriction;

      if (edgeDragged === false && onEdge) {
        onEdge(swipeDirection);
        state["edgeDragged"] = true;
      }
    }
  }

  if (!swiped && swipeEvent) {
    swipeEvent(swipeDirection);
    state["swiped"] = true;
  }

  if (!vertical) {
    if (!rtl) {
      swipeLeft = curLeft + touchSwipeLength * positionOffset;
    } else {
      swipeLeft = curLeft - touchSwipeLength * positionOffset;
    }
  } else {
    swipeLeft = curLeft + touchSwipeLength * (listHeight / listWidth) * positionOffset;
  }

  if (verticalSwiping) {
    swipeLeft = curLeft + touchSwipeLength * positionOffset;
  }

  state = _objectSpread(_objectSpread({}, state), {}, {
    touchObject: touchObject,
    swipeLeft: swipeLeft,
    trackStyle: getTrackCSS(_objectSpread(_objectSpread({}, spec), {}, {
      left: swipeLeft
    }))
  });

  if (Math.abs(touchObject.curX - touchObject.startX) < Math.abs(touchObject.curY - touchObject.startY) * 0.8) {
    return state;
  }

  if (touchObject.swipeLength > 10) {
    state["swiping"] = true;
    e.preventDefault();
  }

  return state;
};

exports.swipeMove = swipeMove;

var swipeEnd = function swipeEnd(e, spec) {
  var dragging = spec.dragging,
      swipe = spec.swipe,
      touchObject = spec.touchObject,
      listWidth = spec.listWidth,
      touchThreshold = spec.touchThreshold,
      verticalSwiping = spec.verticalSwiping,
      listHeight = spec.listHeight,
      swipeToSlide = spec.swipeToSlide,
      scrolling = spec.scrolling,
      onSwipe = spec.onSwipe,
      targetSlide = spec.targetSlide,
      currentSlide = spec.currentSlide,
      infinite = spec.infinite;

  if (!dragging) {
    if (swipe) e.preventDefault();
    return {};
  }

  var minSwipe = verticalSwiping ? listHeight / touchThreshold : listWidth / touchThreshold;
  var swipeDirection = getSwipeDirection(touchObject, verticalSwiping); // reset the state of touch related state variables.

  var state = {
    dragging: false,
    edgeDragged: false,
    scrolling: false,
    swiping: false,
    swiped: false,
    swipeLeft: null,
    touchObject: {}
  };

  if (scrolling) {
    return state;
  }

  if (!touchObject.swipeLength) {
    return state;
  }

  if (touchObject.swipeLength > minSwipe) {
    e.preventDefault();

    if (onSwipe) {
      onSwipe(swipeDirection);
    }

    var slideCount, newSlide;
    var activeSlide = infinite ? currentSlide : targetSlide;

    switch (swipeDirection) {
      case "left":
      case "up":
        newSlide = activeSlide + getSlideCount(spec);
        slideCount = swipeToSlide ? checkNavigable(spec, newSlide) : newSlide;
        state["currentDirection"] = 0;
        break;

      case "right":
      case "down":
        newSlide = activeSlide - getSlideCount(spec);
        slideCount = swipeToSlide ? checkNavigable(spec, newSlide) : newSlide;
        state["currentDirection"] = 1;
        break;

      default:
        slideCount = activeSlide;
    }

    state["triggerSlideHandler"] = slideCount;
  } else {
    // Adjust the track back to it's original position.
    var currentLeft = getTrackLeft(spec);
    state["trackStyle"] = getTrackAnimateCSS(_objectSpread(_objectSpread({}, spec), {}, {
      left: currentLeft
    }));
  }

  return state;
};

exports.swipeEnd = swipeEnd;

var getNavigableIndexes = function getNavigableIndexes(spec) {
  var max = spec.infinite ? spec.slideCount * 2 : spec.slideCount;
  var breakpoint = spec.infinite ? spec.slidesToShow * -1 : 0;
  var counter = spec.infinite ? spec.slidesToShow * -1 : 0;
  var indexes = [];

  while (breakpoint < max) {
    indexes.push(breakpoint);
    breakpoint = counter + spec.slidesToScroll;
    counter += Math.min(spec.slidesToScroll, spec.slidesToShow);
  }

  return indexes;
};

exports.getNavigableIndexes = getNavigableIndexes;

var checkNavigable = function checkNavigable(spec, index) {
  var navigables = getNavigableIndexes(spec);
  var prevNavigable = 0;

  if (index > navigables[navigables.length - 1]) {
    index = navigables[navigables.length - 1];
  } else {
    for (var n in navigables) {
      if (index < navigables[n]) {
        index = prevNavigable;
        break;
      }

      prevNavigable = navigables[n];
    }
  }

  return index;
};

exports.checkNavigable = checkNavigable;

var getSlideCount = function getSlideCount(spec) {
  var centerOffset = spec.centerMode ? spec.slideWidth * Math.floor(spec.slidesToShow / 2) : 0;

  if (spec.swipeToSlide) {
    var swipedSlide;
    var slickList = spec.listRef;
    var slides = slickList.querySelectorAll(".slick-slide");
    Array.from(slides).every(function (slide) {
      if (!spec.vertical) {
        if (slide.offsetLeft - centerOffset + getWidth(slide) / 2 > spec.swipeLeft * -1) {
          swipedSlide = slide;
          return false;
        }
      } else {
        if (slide.offsetTop + getHeight(slide) / 2 > spec.swipeLeft * -1) {
          swipedSlide = slide;
          return false;
        }
      }

      return true;
    });

    if (!swipedSlide) {
      return 0;
    }

    var currentIndex = spec.rtl === true ? spec.slideCount - spec.currentSlide : spec.currentSlide;
    var slidesTraversed = Math.abs(swipedSlide.dataset.index - currentIndex) || 1;
    return slidesTraversed;
  } else {
    return spec.slidesToScroll;
  }
};

exports.getSlideCount = getSlideCount;

var checkSpecKeys = function checkSpecKeys(spec, keysArray) {
  return keysArray.reduce(function (value, key) {
    return value && spec.hasOwnProperty(key);
  }, true) ? null : console.error("Keys Missing:", spec);
};

exports.checkSpecKeys = checkSpecKeys;

var getTrackCSS = function getTrackCSS(spec) {
  checkSpecKeys(spec, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth"]);
  var trackWidth, trackHeight;
  var trackChildren = spec.slideCount + 2 * spec.slidesToShow;

  if (!spec.vertical) {
    trackWidth = getTotalSlides(spec) * spec.slideWidth;
  } else {
    trackHeight = trackChildren * spec.slideHeight;
  }

  var style = {
    opacity: 1,
    transition: "",
    WebkitTransition: ""
  };

  if (spec.useTransform) {
    var WebkitTransform = !spec.vertical ? "translate3d(" + spec.left + "px, 0px, 0px)" : "translate3d(0px, " + spec.left + "px, 0px)";
    var transform = !spec.vertical ? "translate3d(" + spec.left + "px, 0px, 0px)" : "translate3d(0px, " + spec.left + "px, 0px)";
    var msTransform = !spec.vertical ? "translateX(" + spec.left + "px)" : "translateY(" + spec.left + "px)";
    style = _objectSpread(_objectSpread({}, style), {}, {
      WebkitTransform: WebkitTransform,
      transform: transform,
      msTransform: msTransform
    });
  } else {
    if (spec.vertical) {
      style["top"] = spec.left;
    } else {
      style["left"] = spec.left;
    }
  }

  if (spec.fade) style = {
    opacity: 1
  };
  if (trackWidth) style.width = trackWidth;
  if (trackHeight) style.height = trackHeight; // Fallback for IE8

  if (window && !window.addEventListener && window.attachEvent) {
    if (!spec.vertical) {
      style.marginLeft = spec.left + "px";
    } else {
      style.marginTop = spec.left + "px";
    }
  }

  return style;
};

exports.getTrackCSS = getTrackCSS;

var getTrackAnimateCSS = function getTrackAnimateCSS(spec) {
  checkSpecKeys(spec, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
  var style = getTrackCSS(spec); // useCSS is true by default so it can be undefined

  if (spec.useTransform) {
    style.WebkitTransition = "-webkit-transform " + spec.speed + "ms " + spec.cssEase;
    style.transition = "transform " + spec.speed + "ms " + spec.cssEase;
  } else {
    if (spec.vertical) {
      style.transition = "top " + spec.speed + "ms " + spec.cssEase;
    } else {
      style.transition = "left " + spec.speed + "ms " + spec.cssEase;
    }
  }

  return style;
};

exports.getTrackAnimateCSS = getTrackAnimateCSS;

var getTrackLeft = function getTrackLeft(spec) {
  if (spec.unslick) {
    return 0;
  }

  checkSpecKeys(spec, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
  var slideIndex = spec.slideIndex,
      trackRef = spec.trackRef,
      infinite = spec.infinite,
      centerMode = spec.centerMode,
      slideCount = spec.slideCount,
      slidesToShow = spec.slidesToShow,
      slidesToScroll = spec.slidesToScroll,
      slideWidth = spec.slideWidth,
      listWidth = spec.listWidth,
      variableWidth = spec.variableWidth,
      slideHeight = spec.slideHeight,
      fade = spec.fade,
      vertical = spec.vertical;
  var slideOffset = 0;
  var targetLeft;
  var targetSlide;
  var verticalOffset = 0;

  if (fade || spec.slideCount === 1) {
    return 0;
  }

  var slidesToOffset = 0;

  if (infinite) {
    slidesToOffset = -getPreClones(spec); // bring active slide to the beginning of visual area
    // if next scroll doesn't have enough children, just reach till the end of original slides instead of shifting slidesToScroll children

    if (slideCount % slidesToScroll !== 0 && slideIndex + slidesToScroll > slideCount) {
      slidesToOffset = -(slideIndex > slideCount ? slidesToShow - (slideIndex - slideCount) : slideCount % slidesToScroll);
    } // shift current slide to center of the frame


    if (centerMode) {
      slidesToOffset += parseInt(slidesToShow / 2);
    }
  } else {
    if (slideCount % slidesToScroll !== 0 && slideIndex + slidesToScroll > slideCount) {
      slidesToOffset = slidesToShow - slideCount % slidesToScroll;
    }

    if (centerMode) {
      slidesToOffset = parseInt(slidesToShow / 2);
    }
  }

  slideOffset = slidesToOffset * slideWidth;
  verticalOffset = slidesToOffset * slideHeight;

  if (!vertical) {
    targetLeft = slideIndex * slideWidth * -1 + slideOffset;
  } else {
    targetLeft = slideIndex * slideHeight * -1 + verticalOffset;
  }

  if (variableWidth === true) {
    var targetSlideIndex;
    var trackElem = trackRef && trackRef.node;
    targetSlideIndex = slideIndex + getPreClones(spec);
    targetSlide = trackElem && trackElem.childNodes[targetSlideIndex];
    targetLeft = targetSlide ? targetSlide.offsetLeft * -1 : 0;

    if (centerMode === true) {
      targetSlideIndex = infinite ? slideIndex + getPreClones(spec) : slideIndex;
      targetSlide = trackElem && trackElem.children[targetSlideIndex];
      targetLeft = 0;

      for (var slide = 0; slide < targetSlideIndex; slide++) {
        targetLeft -= trackElem && trackElem.children[slide] && trackElem.children[slide].offsetWidth;
      }

      targetLeft -= parseInt(spec.centerPadding);
      targetLeft += targetSlide && (listWidth - targetSlide.offsetWidth) / 2;
    }
  }

  return targetLeft;
};

exports.getTrackLeft = getTrackLeft;

var getPreClones = function getPreClones(spec) {
  if (spec.unslick || !spec.infinite) {
    return 0;
  }

  if (spec.variableWidth) {
    return spec.slideCount;
  }

  return spec.slidesToShow + (spec.centerMode ? 1 : 0);
};

exports.getPreClones = getPreClones;

var getPostClones = function getPostClones(spec) {
  if (spec.unslick || !spec.infinite) {
    return 0;
  }

  return spec.slideCount;
};

exports.getPostClones = getPostClones;

var getTotalSlides = function getTotalSlides(spec) {
  return spec.slideCount === 1 ? 1 : getPreClones(spec) + spec.slideCount + getPostClones(spec);
};

exports.getTotalSlides = getTotalSlides;

var siblingDirection = function siblingDirection(spec) {
  if (spec.targetSlide > spec.currentSlide) {
    if (spec.targetSlide > spec.currentSlide + slidesOnRight(spec)) {
      return "left";
    }

    return "right";
  } else {
    if (spec.targetSlide < spec.currentSlide - slidesOnLeft(spec)) {
      return "right";
    }

    return "left";
  }
};

exports.siblingDirection = siblingDirection;

var slidesOnRight = function slidesOnRight(_ref) {
  var slidesToShow = _ref.slidesToShow,
      centerMode = _ref.centerMode,
      rtl = _ref.rtl,
      centerPadding = _ref.centerPadding;

  // returns no of slides on the right of active slide
  if (centerMode) {
    var right = (slidesToShow - 1) / 2 + 1;
    if (parseInt(centerPadding) > 0) right += 1;
    if (rtl && slidesToShow % 2 === 0) right += 1;
    return right;
  }

  if (rtl) {
    return 0;
  }

  return slidesToShow - 1;
};

exports.slidesOnRight = slidesOnRight;

var slidesOnLeft = function slidesOnLeft(_ref2) {
  var slidesToShow = _ref2.slidesToShow,
      centerMode = _ref2.centerMode,
      rtl = _ref2.rtl,
      centerPadding = _ref2.centerPadding;

  // returns no of slides on the left of active slide
  if (centerMode) {
    var left = (slidesToShow - 1) / 2 + 1;
    if (parseInt(centerPadding) > 0) left += 1;
    if (!rtl && slidesToShow % 2 === 0) left += 1;
    return left;
  }

  if (rtl) {
    return slidesToShow - 1;
  }

  return 0;
};

exports.slidesOnLeft = slidesOnLeft;

var canUseDOM = function canUseDOM() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
};

exports.canUseDOM = canUseDOM;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hlYWRlci9zdHlsZXMvaGVhZGVyLm1vZHVsZS5zY3NzP2JjNjIiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRhaW5lcnMvVGltZWxpbmUvVGltZWxpbmVQYWdlLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hlYWRlci9zdHlsZXMvaGVhZGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZW5xdWlyZS5qcy9zcmMvTWVkaWFRdWVyeS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2VucXVpcmUuanMvc3JjL01lZGlhUXVlcnlEaXNwYXRjaC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2VucXVpcmUuanMvc3JjL1F1ZXJ5SGFuZGxlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2VucXVpcmUuanMvc3JjL1V0aWwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9lbnF1aXJlLmpzL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC5kZWJvdW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNsaWNrL2xpYi9hcnJvd3MuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zbGljay9saWIvZGVmYXVsdC1wcm9wcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNsaWNrL2xpYi9kb3RzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2xpY2svbGliL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2xpY2svbGliL2luaXRpYWwtc3RhdGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zbGljay9saWIvaW5uZXItc2xpZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2xpY2svbGliL3NsaWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNsaWNrL2xpYi90cmFjay5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNsaWNrL2xpYi91dGlscy9pbm5lclNsaWRlclV0aWxzLmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsIndpdGhvdXRTZWFyY2giLCJ1c2VyIiwiYXV0aCIsInByZXZTY3JvbGxQb3MiLCJzZXRQcmV2U2Nyb2xsUG9zIiwidXNlU3RhdGUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInNlYXJjaE1vZGFsIiwic2V0U2VhcmNoTW9kYWwiLCJzZWFyY2hEYXRhIiwic2V0U2VhcmNoRGF0YSIsInRpbWUiLCJoYW5kbGVTY3JvbGwiLCJjdXJyZW50U2Nyb2xsUG9zIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwic2VhcmNoQ2hhbmdlIiwiZXZlbnQiLCJyZXF1ZXN0IiwiQVBJIiwibWV0aG9kIiwidXJsIiwiZGF0YSIsInRhcmdldCIsInZhbHVlIiwiaGVhZGVycyIsInRva2VuIiwic3RhdHVzIiwibWVzc2FnZSIsImVyciIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfIiwidGhyb3R0bGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0dGluZ3MiLCJkb3RzIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwicm91dGVyIiwidXNlUm91dGVyIiwiY2xhc3NuYW1lcyIsInN0eWxlcyIsImhlYWRlciIsImhlYWRlcl9oaWRkZW4iLCJjb250YWluZXIiLCJsb2dvIiwic2VhcmNoIiwiYWRkaXRpb25hbF9oZWFkZXIiLCJtb2JpbGVfcHJvZmlsZV9oZWFkZXIiLCJwdXNoIiwibW9iaWxlX3RvcF9oZWFkZXIiLCJzZWFyY2hIZWFkZXIiLCJmb250U2l6ZSIsIm1hcmdpblRvcCIsImZsZXgiLCJjdXJzb3IiLCJzZWFyY2hDb250ZW50IiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImluZGV4IiwiZGlzcGxheSIsIm1hcmdpbkJvdHRvbSIsImF2YXRhciIsInByb2ZpbGVQaG90byIsInNyYyIsInVzZXJfaW5mbyIsInVzZXJfbmFtZSIsInVzZXJuYW1lIiwiVXNlclByb2ZpbGUiLCJwcm9maWxlIiwiZmlyc3ROYW1lIiwibmFtZSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0b3JlIiwiY29ubmVjdCIsIlRpbWVsaW5lUGFnZSIsImF1dGhTZXJ2aWNlcyIsInN0b3JhZ2UiLCJkaXNwYXRjaCIsInVzZUNvbnRleHQiLCJUaW1lTGluZUNvbnRleHQiLCJwb3N0TW9kYWwiLCJzZXRQb3N0TW9kYWwiLCJzZXRNb2JpbGVQcm9maWxlSGVhZGVyIiwiZ2V0VGltZWxpbmUiLCJ3aXRob3V0TG9hZGluZyIsInNldExvYWRpbmciLCJ0b3RhbERhdGEiLCJlbGVtZW50IiwiZmlsdGVyQWNjb3VudERhdGEiLCJzZXRUaW1lbGluZURhdGEiLCJyZWZyZXNoVG9rZW4iLCJjb21tZW50X3NoYXJlZCIsInR5cGUiLCJjb21tZW50ZWQiLCJjb21tZW50cyIsImFjY291bnQiLCJzaGFyZWQiLCJjcmVhdGVQb3N0IiwiZGF0YUZvclJlcXVlc3QiLCJjb21tZW50c0NvdW50IiwicmF0aW5nIiwicmVhY3Rpb25zIiwicmVhY3Rpb25zQ291bnQiLCJzaGFyZXMiLCJzaGFyZXNDb3VudCIsInRpbWVsaW5lRGF0YSIsInJhdGVQb3N0IiwicG9zdElkIiwicmF0ZSIsInJhdGVkIiwid2FybiIsImlkIiwib25VcGRhdGVUaW1lbGluZSIsImFkZEVsZW1lbnQiLCJtb2RhbFBvcHVwIiwibGlrZUFjdGlvbiIsInRlcm0iLCJyZWFjdGVkIiwicmVhY3Rpb24iLCJzdWNjZXNzIiwiRXJyb3IiLCJzaGFyZUFjdGlvbiIsImRlbGV0ZUFjdGlvbiIsIm5ld1RpbWVsaW5lRGF0YSIsImZpbHRlciIsInRpbWVsaW5lIiwiZmVlZF9jb250YWluZXIiLCJjcmVhdGVQb3N0RGl2IiwiY3JlYXRlUG9zdElucHV0IiwibG9hZGluZyIsInBvc3RpbmdMb2FkaW5nIiwicmVxdWlyZUF1dGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsQ0FBZ0I7QUFBRUMsZUFBRjtBQUFpQkMsTUFBakI7QUFBdUJDO0FBQXZCLENBQWhCLEVBQThDO0FBQUE7O0FBQzVDLFFBQU07QUFBQSxPQUFDQyxhQUFEO0FBQUEsT0FBZ0JDO0FBQWhCLE1BQW9DQyxzREFBUSxDQUFDLENBQUQsQ0FBbEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JGLHNEQUFRLENBQUMsSUFBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDRyxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ0osc0RBQVEsQ0FBQyxLQUFELENBQTlDO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQStCTixzREFBUSxDQUFDLEVBQUQsQ0FBN0M7QUFDQSxNQUFJTyxJQUFJLEdBQUcsSUFBWDs7QUFDQSxRQUFNQyxZQUFZLEdBQUcsTUFBTTtBQUN6QixRQUFJO0FBQ0YsWUFBTUMsZ0JBQWdCLEdBQUdDLE1BQU0sQ0FBQ0MsV0FBaEMsQ0FERSxDQUVGOztBQUNBLFVBQUdKLElBQUgsRUFBUztBQUNQSyxvQkFBWSxDQUFDTCxJQUFELENBQVo7QUFDRDs7QUFDREEsVUFBSSxHQUFHTSxVQUFVLENBQUMsTUFBTTtBQUN0Qk4sWUFBSSxHQUFHLElB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LEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssTUFBTSxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsV0FBVyxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sV0FBVyxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsS0FBSyxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLE1BQU0sTUFBTSxXQUFXLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLEtBQUssTUFBTSxNQUFNLE1BQU0sVUFBVSxLQUFLLE1BQU0sTUFBTSxNQUFNLFdBQVcsS0FBSyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLE1BQU0sVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsS0FBSyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLE1BQU0sVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxLQUFLLE1BQU0sTUFBTSxNQUFNLFVBQVUsS0FBSyxNQUFNLE1BQU0sTUFBTSxXQUFXLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxNQUFNLFVBQVUsS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLHFGQUFxRiw0QkFBNEIsbUJBQW1CLDJCQUEyQixxQkFBcUIsT0FBTyxLQUFLLGlCQUFpQiwwQkFBMEIsdUNBQXVDLG1CQUFtQixvQkFBb0IsMEJBQTBCLGtCQUFrQixhQUFhLGNBQWMsZUFBZSwyQkFBMkIsMkJBQTJCLG1CQUFtQix5QkFBeUIseUJBQXlCLHFCQUFxQixTQUFTLE9BQU8sMkJBQTJCLHFCQUFxQix3QkFBd0Isa0JBQWtCLG1CQUFtQixnQ0FBZ0Msc0JBQXNCLE9BQU8sc0JBQXNCLG1CQUFtQix1QkFBdUIsc0JBQXNCLDRCQUE0Qiw0QkFBNEIsNkJBQTZCLHFCQUFxQixpQ0FBaUMsU0FBUyxPQUFPLGlCQUFpQixxQkFBcUIscUJBQXFCLDZCQUE2Qiw4QkFBOEIsU0FBUyxpQkFBaUIsc0JBQXNCLDBCQUEwQixTQUFTLE9BQU8sbUJBQW1CLGdCQUFnQix1QkFBdUIsd0JBQXdCLGdDQUFnQyxzQkFBc0Isd0JBQXdCLCtCQUErQiwwQkFBMEIsOEJBQThCLFdBQVcsbUNBQW1DLHlCQUF5Qiw2QkFBNkIsbUJBQW1CLDRCQUE0QixhQUFhLFdBQVcsU0FBUyw2QkFBNkIsc0JBQXNCLFNBQVMsbUJBQW1CLG9CQUFvQiwwQkFBMEIsd0JBQXdCLHlCQUF5Qiw2QkFBNkIsc0NBQXNDLDhCQUE4Qiw4QkFBOEIsNEJBQTRCLHNCQUFzQixXQUFXLCtCQUErQixzQkFBc0IsV0FBVywrQkFBK0Isb0JBQW9CLFdBQVcsU0FBUyxPQUFPLG9CQUFvQixzQkFBc0IsNEJBQTRCLDhCQUE4QixrQ0FBa0MsNEJBQTRCLHdCQUF3Qiw2QkFBNkIsd0JBQXdCLFNBQVMscUJBQXFCLHNCQUFzQix1QkFBdUIsZUFBZSwrQkFBK0IsV0FBVyxTQUFTLGVBQWUsMEJBQTBCLHNCQUFzQixTQUFTLE9BQU8sS0FBSyxnQ0FBZ0Msb0JBQW9CLDBCQUEwQix1Q0FBdUMsbUJBQW1CLHNCQUFzQixrQkFBa0IsZ0JBQWdCLGNBQWMsZUFBZSw4QkFBOEIsb0JBQW9CLHlCQUF5QiwyQkFBMkIsU0FBUyx1QkFBdUIsdUJBQXVCLE9BQU8sMkJBQTJCLG1CQUFtQix5QkFBeUIseUJBQXlCLHFCQUFxQixTQUFTLE9BQU8sS0FBSyw0QkFBNEIsb0JBQW9CLDBCQUEwQix1Q0FBdUMsbUJBQW1CLHNCQUFzQixrQkFBa0IsYUFBYSxjQUFjLGVBQWUsMkJBQTJCLG9CQUFvQix5QkFBeUIsMkJBQTJCLFNBQVMsdUJBQXVCLHVCQUF1QixPQUFPLDJCQUEyQixtQkFBbUIseUJBQXlCLHNCQUFzQixTQUFTLE9BQU8sc0JBQXNCLG1CQUFtQix1QkFBdUIsc0JBQXNCLDRCQUE0Qiw0QkFBNEIsNkJBQTZCLHFCQUFxQixTQUFTLE9BQU8saUJBQWlCLHFCQUFxQix1QkFBdUIsNkJBQTZCLGdDQUFnQyxTQUFTLGlCQUFpQixzQkFBc0IsMEJBQTBCLFNBQVMsT0FBTyxtQkFBbUIsZ0JBQWdCLHVCQUF1Qix3QkFBd0IsZ0NBQWdDLHdCQUF3Qix5QkFBeUIsc0JBQXNCLFNBQVMsbUJBQW1CLG9CQUFvQiwwQkFBMEIsd0JBQXdCLHlCQUF5Qiw2QkFBNkIsc0NBQXNDLDhCQUE4Qiw4QkFBOEIsNEJBQTRCLHNCQUFzQixXQUFXLCtCQUErQixzQkFBc0IsV0FBVywrQkFBK0Isb0JBQW9CLFdBQVcsU0FBUyxPQUFPLEtBQUssc0JBQXNCLHNCQUFzQixjQUFjLGFBQWEsbUJBQW1CLG9CQUFvQixtRkFBbUYsZ0NBQWdDLHVCQUF1QixtQkFBbUIseUJBQXlCLHNCQUFzQixTQUFTLHNCQUFzQix3QkFBd0IsbUJBQW1CLHNCQUFzQiw4QkFBOEIsNEJBQTRCLDZCQUE2QixpQ0FBaUMsMENBQTBDLGtDQUFrQyxrQ0FBa0MseUJBQXlCLFFBQVEsMEJBQTBCLDRCQUE0QiwwQkFBMEIsc0JBQXNCLDhCQUE4Qiw2QkFBNkIsa0NBQWtDLDhCQUE4QixXQUFXLHNCQUFzQiwwQkFBMEIsbUNBQW1DLHNDQUFzQyxXQUFXLFFBQVEsS0FBSyw2QkFBNkIseUJBQXlCLHlCQUF5QiwyQkFBMkIsK0JBQStCLDJCQUEyQixpREFBaUQseUJBQXlCLEdBQUcsaUJBQWlCLE9BQU8sS0FBSyx1QkFBdUIsMkJBQTJCLGNBQWMsR0FBRyxpQkFBaUIsT0FBTyxLQUFLLHVCQUF1QiwyQkFBMkIsY0FBYyxvQkFBb0IscUJBQXFCLEdBQUcsaUJBQWlCLE9BQU8sS0FBSyx3QkFBd0IsMkJBQTJCLGVBQWUsb0JBQW9CLHlCQUF5QixHQUFHLGlCQUFpQixPQUFPLEtBQUssMkJBQTJCLDJCQUEyQixtQkFBbUIsR0FBRyxpQkFBaUIsT0FBTyxLQUFLLE9BQU87QUFDN3hmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3hCQSxtQkFBbUIsbUJBQU8sQ0FBQyxxRUFBZ0I7QUFDM0MsV0FBVyxtQkFBTyxDQUFDLHFEQUFROztBQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsU0FBUztBQUN4QixlQUFlLFNBQVM7QUFDeEIsZUFBZSxTQUFTO0FBQ3hCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBbUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsU0FBUztBQUNULEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxpQ0FBaUM7QUFDakMsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDNUZBLGlCQUFpQixtQkFBTyxDQUFDLGlFQUFjO0FBQ3ZDLFdBQVcsbUJBQU8sQ0FBQyxxREFBUTtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLDRCQUE0QjtBQUMzQyxlQUFlLFNBQVM7QUFDeEIsZUFBZSxTQUFTO0FBQ3hCLGVBQWUsU0FBUztBQUN4QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsbUJBQW1CO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNwRkE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsU0FBUztBQUNwQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBbUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7OztBQ3pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVLFlBQVk7QUFDdEI7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDM0NBLHlCQUF5QixtQkFBTyxDQUFDLGlGQUFzQjtBQUN2RDs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPLFlBQVk7QUFDOUIsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsOENBQThDLGtCQUFrQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7QUFDQSxxRUFBcUUsV0FBVztBQUNoRjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsV0FBVztBQUN6RTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxxRUFBcUUsV0FBVztBQUNoRjtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHdDQUF3QyxZQUFZO0FBQ3BEO0FBQ0E7QUFDQSwwREFBMEQsV0FBVztBQUNyRTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1RUFBdUU7O0FBRXZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsMkVBQTJFLFdBQVc7QUFDdEY7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLFlBQVk7QUFDdEQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qzs7QUFFOUM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxnQ0FBZ0M7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx5Q0FBeUM7QUFDekM7O0FBRUE7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlCQUF5QiwwQkFBMEI7QUFDbkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDhCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3RpbWVsaW5lLjhjYmUwNDQzNzgzN2U1ZjMwODJiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL2hlYWRlci5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnLi4vY29tbW9uL0F2YXRhcic7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcbmltcG9ydCBBUEkgZnJvbSAnLi4vLi4vY29uZmlncy9BUEknO1xyXG5pbXBvcnQgeyBCdXR0b24sIFVwbG9hZCwgbWVzc2FnZSwgSW5wdXQsIFRhYnMsIFJhdGUgfSBmcm9tICdhbnRkJztcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcih7IHdpdGhvdXRTZWFyY2gsIHVzZXIsIGF1dGh9KSB7XHJcbiAgY29uc3QgW3ByZXZTY3JvbGxQb3MsIHNldFByZXZTY3JvbGxQb3NdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3NlYXJjaE1vZGFsLCBzZXRTZWFyY2hNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3NlYXJjaERhdGEsIHNldFNlYXJjaERhdGEgXSA9IHVzZVN0YXRlKFtdKTtcclxuICBsZXQgdGltZSA9IG51bGw7XHJcbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgY3VycmVudFNjcm9sbFBvcyA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgICAgLy8gY29uc3QgdmlzaWJsZSA9IHByZXZTY3JvbGxQb3MgPiBjdXJyZW50U2Nyb2xsUG9zO1xyXG4gICAgICBpZih0aW1lKSB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWUpOyAgXHJcbiAgICAgIH1cclxuICAgICAgdGltZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRpbWUgPSBudWxsO1xyXG4gICAgICAgIHNldFZpc2libGUodHJ1ZSlcclxuICAgICAgfSwgNTAwKVxyXG4gICAgICBpZih2aXNpYmxlKSB7XHJcbiAgICAgICAgc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gc2V0UHJldlNjcm9sbFBvcyhjdXJyZW50U2Nyb2xsUG9zKTtcclxuICAgICAgLy8gc2V0VmlzaWJsZSh2aXNpYmxlKTtcclxuICAgICAgLy8gdGltZXIgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7IGNvbnNvbGUubG9nKHRpbWVyKX0sIDUwMClcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIC8vIGNhdGNoIHdpbmRpb3cgPT09IHVuZGVmaW5lZCBlcnJvclxyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2VhcmNoQ2hhbmdlID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6ICcvc2VhcmNoJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBcInF1ZXJ5XCI6IGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgIFwib2Zmc2V0XCI6IDAsXHJcbiAgICAgICAgICBcImZpcnN0XCI6IDEwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHsgc3RhdHVzLCBkYXRhIH0gPSByZXF1ZXN0O1xyXG4gICAgICBpZihzdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgc2V0U2VhcmNoRGF0YShkYXRhKTtcclxuICAgICAgfSBlbHNlICB7XHJcbiAgICAgICAgICBtZXNzYWdlLmVycm9yKCdQbGVhc2UgdHJ5IGFnYWluIScpO1xyXG4gICAgICAgICAgc2V0U2VhcmNoRGF0YShkYXRhKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBfLnRocm90dGxlKGhhbmRsZVNjcm9sbCwgMjUwKSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAvLyBjYXRjaCB3aW5kaW93ID09PSB1bmRlZmluZWQgZXJyb3JcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgLy8gdW5tb3VudCBhY3Rpb25cclxuICAgICAgdHJ5IHtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAvLyBjYXRjaCB3aW5kaW93ID09PSB1bmRlZmluZWQgZXJyb3JcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfSwgW3ByZXZTY3JvbGxQb3NdKTtcclxuXHJcbiAgdmFyIHNldHRpbmdzID0ge1xyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgc3BlZWQ6IDUwMCxcclxuICAgIHNsaWRlc1RvU2hvdzogNSxcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgfTtcclxuXHJcbiAgY29uc29sZS5sb2coc2VhcmNoTW9kYWwpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5oZWFkZXIsIHtcclxuICAgICAgICAgIFtzdHlsZXMuaGVhZGVyX2hpZGRlbl06ICF2aXNpYmxlLFxyXG4gICAgICAgIH0pfVxyXG4gICAgICA+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvbG9nby5wbmdcIiBhbHQ9XCJsb2dvXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2h9PlxyXG4gICAgICAgICAgICB7IXdpdGhvdXRTZWFyY2ggJiYgKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIEZyZWVza2llc1wiIG9uQ2xpY2s9eygpPT5zZXRTZWFyY2hNb2RhbCh0cnVlKX0vPlxyXG4gICAgICAgICAgICAgICAgPFVzZXJQcm9maWxlIHVzZXI9e3VzZXJ9Lz5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPFVzZXJQcm9maWxlIHVzZXI9e3VzZXJ9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZGl0aW9uYWxfaGVhZGVyfSAvPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5tb2JpbGVfcHJvZmlsZV9oZWFkZXIsIHtcclxuICAgICAgICAgIFtzdHlsZXMuaGVhZGVyX2hpZGRlbl06ICF2aXNpYmxlLFxyXG4gICAgICAgIH0pfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdzdGFyJ119IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdhZGRyZXNzLWNhcmQnXX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgcm91dGVyLnB1c2goJy9wcm9maWxlJyk7XHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ3VzZXItY2lyY2xlJ119IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdsaXN0LWFsdCddfSAvPlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5tb2JpbGVfdG9wX2hlYWRlciwge1xyXG4gICAgICAgICAgW3N0eWxlcy5oZWFkZXJfaGlkZGVuXTogIXZpc2libGUsXHJcbiAgICAgICAgfSl9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ299PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9sb2dvLnBuZ1wiIGFsdD1cImxvZ29cIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaH0+XHJcbiAgICAgICAgICAgIHshd2l0aG91dFNlYXJjaCAmJiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggRnJlZXNraWVzXCIgb25DbGljaz17KCk9PnNldFNlYXJjaE1vZGFsKHRydWUpfSAvPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7c2VhcmNoTW9kYWw/PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hNb2RhbH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hIZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdoYW5kLXBvaW50LWxlZnQnXX0gc3R5bGU9e3sgZm9udFNpemU6IDI1LCBtYXJnaW5Ub3A6IDgsIGZsZXg6IDEsIGN1cnNvcjogJ3BvaW50ZXInfX0gb25DbGljaz17KCk9PnNldFNlYXJjaE1vZGFsKGZhbHNlKX0vPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0ICBuYW1lPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggRnJlZXNraWVzXCIgb25DaGFuZ2U9e3NlYXJjaENoYW5nZX0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAge3NlYXJjaERhdGEubGVuZ3RoID4gMD9zZWFyY2hEYXRhLm1hcCgoaXRlbSwgaW5kZXggKT0+IFxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIG1hcmdpbkJvdHRvbTogNSB9fSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezUwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdXJsPXtpdGVtPy5wcm9maWxlUGhvdG8/LnNyY31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyX2luZm99PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfbmFtZX0+e2l0ZW0udXNlcm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4pOjxkaXY+Tm8gZGF0YTwvZGl2Pn1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+Om51bGx9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBVc2VyUHJvZmlsZSh7IHVzZXIgPSB7fSB9KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZX1cclxuICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvcHJvZmlsZScpO1xyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn0+XHJcbiAgICAgICAgeyB1c2VyPy5wcm9maWxlUGhvdG8gPyAoXHJcbiAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICBzaXplPXs0MH1cclxuICAgICAgICAgICAgICB1cmw9e3VzZXI/LnByb2ZpbGVQaG90by5zcmN9XHJcbiAgICAgICAgICAgICAgdGV4dD17dXNlcj8udXNlcm5hbWV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgPEF2YXRhciBzaXplPXs0MH0gdGV4dD17dXNlcj8uZmlyc3ROYW1lfSAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT57YCR7dXNlcj8uZmlyc3ROYW1lfWB9PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0b3JlKSA9PiAoe1xyXG4gIHVzZXI6IHN0b3JlLmF1dGgudXNlcixcclxuICBhdXRoOiBzdG9yZS5hdXRoXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEhlYWRlcik7XHJcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8/X19uZXh0anNfcG9zdGNzcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL2hlYWRlci5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiKSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8/X19uZXh0anNfcG9zdGNzcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL2hlYWRlci5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8/X19uZXh0anNfcG9zdGNzcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL2hlYWRlci5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlcic7XHJcbmltcG9ydCBUaW1lbGluZVBvc3RzIGZyb20gJ2NvbXBvbmVudHMvdGltZWxpbmUvVGltZWxpbmVQb3N0cyc7XHJcbmltcG9ydCBQb3N0aW5nUG9zdCBmcm9tICdjb21wb25lbnRzL3Byb2ZpbGUvUG9zdGluZ1Bvc3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL3RpbWVsaW5lLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IEFQSSBmcm9tICdjb25maWdzL0FQSSc7XHJcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgVGltZUxpbmVDb250ZXh0IH0gZnJvbSAnLi9zdG9yYWdlL1RpbWVsaW5lQ29udGV4dCc7XHJcbmltcG9ydCB7IHNldExvYWRpbmcsIHNldFRpbWVsaW5lRGF0YSB9IGZyb20gJy4vYWN0aW9ucyc7XHJcbmltcG9ydCBMb2FkaW5nV3JhcHBlciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9Mb2FkaW5nV3JhcHBlcic7XHJcbmltcG9ydCByZXF1aXJlQXV0aCBmcm9tICcuLi8uLi9oZWxwZXJzL2hvYy9yZXF1aXJlQXV0aCc7XHJcbmltcG9ydCBNb2RhbFdyYXBwZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb24vTW9kYWxXcmFwcGVyJztcclxuaW1wb3J0IEF2YXRhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9BdmF0YXInO1xyXG5cclxuZnVuY3Rpb24gVGltZWxpbmVQYWdlKHsgYXV0aFNlcnZpY2VzLCBhdXRoIH0pIHtcclxuICBjb25zdCBbc3RvcmFnZSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChUaW1lTGluZUNvbnRleHQpO1xyXG4gIGNvbnN0IFtwb3N0TW9kYWwsIHNldFBvc3RNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW21vYmlsZV9wcm9maWxlX2hlYWRlciwgc2V0TW9iaWxlUHJvZmlsZUhlYWRlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGdldFRpbWVsaW5lID0gYXN5bmMgKHRva2VuLCB3aXRob3V0TG9hZGluZyA9IGZhbHNlKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLndhcm4oYXV0aFNlcnZpY2VzLmF1dGgsIGF1dGhTZXJ2aWNlcy5sb2NhbHN0b3JhZ2UpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKCF3aXRob3V0TG9hZGluZykgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlKSk7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybDogJy9hY2NvdW50cy90aW1lbGluZScsXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IHRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgdmFyIHRvdGFsRGF0YSA9IGRhdGEubWFwKGVsZW1lbnQgPT4geyBcclxuICAgICAgICAgIGVsZW1lbnQgPSBmaWx0ZXJBY2NvdW50RGF0YShlbGVtZW50KTtcclxuICAgICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgZGlzcGF0Y2goc2V0VGltZWxpbmVEYXRhKHRvdGFsRGF0YSkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCc9PT09PT09PT0nKTtcclxuICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IDQwMykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCc9PT09PT09PT09PT09PT09PSBSZWZyZXNoIHRva2VuICEnKTtcclxuXHJcbiAgICAgICAgYXV0aFNlcnZpY2VzLnJlZnJlc2hUb2tlbihnZXRUaW1lbGluZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCF3aXRob3V0TG9hZGluZykgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICBpZiAoIXdpdGhvdXRMb2FkaW5nKSBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmlsdGVyQWNjb3VudERhdGEgPSAoY29tbWVudF9zaGFyZWQpID0+IHtcclxuICAgIGlmKGNvbW1lbnRfc2hhcmVkLnR5cGUgPT09ICdDb21tZW50Jykge1xyXG4gICAgICBpZihjb21tZW50X3NoYXJlZC5jb21tZW50ZWQudHlwZSA9PSAnUG9zdCcpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uY29tbWVudF9zaGFyZWQuY29tbWVudGVkLFxyXG4gICAgICAgICAgY29tbWVudHM6IFt7Li4uY29tbWVudF9zaGFyZWQsIGFjY291bnQ6IGNvbW1lbnRfc2hhcmVkLmNvbW1lbnRlZC5hY2NvdW50fV1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoY29tbWVudF9zaGFyZWQuY29tbWVudGVkLnR5cGUgPT0gJ0NvbW1lbnQnKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLmNvbW1lbnRfc2hhcmVkLmNvbW1lbnRlZC5jb21tZW50ZWQsXHJcbiAgICAgICAgICBjb21tZW50czogW3suLi5jb21tZW50X3NoYXJlZC5jb21tZW50ZWQsIGNvbW1lbnRzOiBbY29tbWVudF9zaGFyZWRdLCBhY2NvdW50OiBjb21tZW50X3NoYXJlZC5jb21tZW50ZWQuY29tbWVudGVkLmFjY291bnR9XVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmKGNvbW1lbnRfc2hhcmVkLmNvbW1lbnRlZC50eXBlID09ICdTaGFyZScpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uY29tbWVudF9zaGFyZWQuY29tbWVudGVkLnNoYXJlZCxcclxuICAgICAgICAgIGNvbW1lbnRzOiBbeyAuLi5jb21tZW50X3NoYXJlZCwgYWNjb3VudDogY29tbWVudF9zaGFyZWQuY29tbWVudGVkLnNoYXJlZC5hY2NvdW50IH1dXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5jb21tZW50X3NoYXJlZC5jb21tZW50ZWQsXHJcbiAgICAgICAgICBjb21tZW50czogW3sgLi4uY29tbWVudF9zaGFyZWQsIGFjY291bnQ6IGNvbW1lbnRfc2hhcmVkLmNvbW1lbnRlZC5hY2NvdW50IH1dXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYoY29tbWVudF9zaGFyZWQudHlwZSA9PT0gJ1Bvc3QnKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbW1lbnRfc2hhcmVkO1xyXG4gICAgfSBlbHNlIGlmKGNvbW1lbnRfc2hhcmVkLnR5cGUgPT09ICdTaGFyZScpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5jb21tZW50X3NoYXJlZC5zaGFyZWQsXHJcbiAgICAgICAgY29tbWVudHM6IFt7Li4uY29tbWVudF9zaGFyZWQsIGFjY291bnQ6IGNvbW1lbnRfc2hhcmVkLnNoYXJlZC5hY2NvdW50IH1dXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBjb21tZW50X3NoYXJlZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGNyZWF0ZVBvc3QgPSBhc3luYyAoZGF0YUZvclJlcXVlc3QpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcodHJ1ZSwgJ3Bvc3RpbmcnKSk7XHJcblxyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6ICcvcG9zdHMnLFxyXG4gICAgICAgIGRhdGE6IGRhdGFGb3JSZXF1ZXN0LFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuXHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgIHNldFBvc3RNb2RhbCgwKTtcclxuICAgICAgICB2YXIgZWxlbWVudCA9ICB7XHJcbiAgICAgICAgICB0eXBlOiAnUG9zdCcsXHJcbiAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgY29tbWVudHM6IFtdLFxyXG4gICAgICAgICAgY29tbWVudHNDb3VudDogMCxcclxuICAgICAgICAgIHJhdGluZzogbnVsbCxcclxuICAgICAgICAgIHJlYWN0aW9uczogW10sXHJcbiAgICAgICAgICByZWFjdGlvbnNDb3VudDogMCxcclxuICAgICAgICAgIHNoYXJlczogW10sXHJcbiAgICAgICAgICBzaGFyZXNDb3VudDogMCxcclxuICAgICAgICAgIGFjY291bnQ6IGF1dGgudXNlclxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdG90YWxEYXRhID0gW1xyXG4gICAgICAgICAgZWxlbWVudCwgLi4uc3RvcmFnZS50aW1lbGluZURhdGFcclxuICAgICAgICBdXHJcbiAgICAgICAgY29uc29sZS5sb2codG90YWxEYXRhKTtcclxuICAgICAgICBkaXNwYXRjaChzZXRUaW1lbGluZURhdGEodG90YWxEYXRhKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSwgJ3Bvc3RpbmcnKSk7XHJcblxyXG4gICAgICByZXR1cm4gYXdhaXQgcmVxdWVzdDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UsICdwb3N0aW5nJykpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJhdGVQb3N0ID0gYXN5bmMgKHR5cGUsIHBvc3RJZCwgcmF0ZSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlLCAncG9zdGluZycpKTtcclxuICAgICAgbGV0IHVybCA9ICcnO1xyXG5cclxuICAgICAgaWYgKHR5cGUgPT09ICdQaG90bycpIHtcclxuICAgICAgICB1cmwgPSAnL3Bob3Rvcy9yYXRlJztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnVmlkZW9DbGlwJykge1xyXG4gICAgICAgIHVybCA9ICcvdmlkZW8tY2xpcHMvcmF0ZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0l0ZW0nKSB7XHJcbiAgICAgICAgdXJsID0gJy9pdGVtcy9yYXRlJztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnUG9zdCcpIHtcclxuICAgICAgICB1cmwgPSAnL3Bvc3RzL3JhdGUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdDb21tZW50Jykge1xyXG4gICAgICAgIHVybCA9ICcvY29tbWVudHMvcmF0ZSc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICByYXRlZDogcG9zdElkLFxyXG4gICAgICAgICAgcmF0aW5nOiByYXRlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG5cclxuICAgICAgY29uc29sZS53YXJuKCdyYXRlUG9zdCcsIGRhdGEsIHN0YXR1cyk7XHJcblxyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICBzdG9yYWdlLnRpbWVsaW5lRGF0YS5tYXAoZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICBpZihlbGVtZW50LmlkID09PSBwb3N0SWQgJiYgZWxlbWVudC50eXBlID09PSB0eXBlKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQucmF0aW5nID0gcmF0ZTtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBkaXNwYXRjaChzZXRUaW1lbGluZURhdGEoc3RvcmFnZS50aW1lbGluZURhdGEpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlLCAncG9zdGluZycpKTtcclxuXHJcbiAgICAgIHJldHVybiBhd2FpdCByZXF1ZXN0O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSwgJ3Bvc3RpbmcnKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcblxyXG4gIGNvbnN0IG9uVXBkYXRlVGltZWxpbmUgPSAoZGF0YSkgPT4ge1xyXG4gICAgc3RvcmFnZS50aW1lbGluZURhdGEubWFwKGVsZW1lbnQgPT4ge1xyXG4gICAgICBpZihlbGVtZW50LmlkID09IGRhdGEuaWQpIHtcclxuICAgICAgICBsZXQgYWRkRWxlbWVudCA9IHtcclxuICAgICAgICAgIGFjY291bnQ6IGF1dGgudXNlciwgXHJcbiAgICAgICAgICAuLi5kYXRhLmNvbW1lbnRzWzBdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsZW1lbnQuY29tbWVudHMucHVzaChhZGRFbGVtZW50KTtcclxuICAgICAgICBlbGVtZW50LmNvbW1lbnRzQ291bnQgKz0gZGF0YS5jb21tZW50c0NvdW50O1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgY29uc29sZS5sb2coc3RvcmFnZS50aW1lbGluZURhdGEpO1xyXG4gICAgZGlzcGF0Y2goc2V0VGltZWxpbmVEYXRhKHN0b3JhZ2UudGltZWxpbmVEYXRhKSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBtb2RhbFBvcHVwID0gKCkgPT4ge1xyXG4gICAgc2V0UG9zdE1vZGFsKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbGlrZUFjdGlvbiA9IGFzeW5jICh0eXBlLCBpZCwgdGVybSkgPT4ge1xyXG4gICAgdmFyIHVybCA9ICcnO1xyXG4gICAgaWYgKHR5cGUgPT09ICdQaG90bycpIHtcclxuICAgICAgdXJsID0gJy9waG90b3MvcmVhY3QnO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnVmlkZW9DbGlwJykge1xyXG4gICAgICB1cmwgPSAnL3ZpZGVvLWNsaXBzL3JlYWN0JztcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0l0ZW0nKSB7XHJcbiAgICAgIHVybCA9ICcvaXRlbXMvcmVhY3QnO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnUG9zdCcpIHtcclxuICAgICAgdXJsID0gJy9wb3N0cy9yZWFjdCc7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdDb21tZW50Jykge1xyXG4gICAgICB1cmwgPSAnL2NvbW1lbnRzL3JlYWN0JztcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1NoYXJlJykge1xyXG4gICAgICB1cmwgPSAnL3NoYXJlcy9yZWFjdCc7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgcmVhY3RlZDogaWQsXHJcbiAgICAgICAgICByZWFjdGlvbjogdGVybVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG5cclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKCdFdmFsdWF0ZSBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4gIGNvbnN0IHNoYXJlQWN0aW9uID0gYXN5bmMgKHR5cGUsIGlkKSA9PiB7XHJcblxyXG4gICAgdmFyIHVybCA9ICcnO1xyXG4gICAgICBpZiAodHlwZSA9PT0gJ1Bob3RvJykge1xyXG4gICAgICAgIHVybCA9ICcvcGhvdG9zL3NoYXJlJztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnVmlkZW9DbGlwJykge1xyXG4gICAgICAgIHVybCA9ICcvdmlkZW8tY2xpcHMvc2hhcmUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdJdGVtJykge1xyXG4gICAgICAgIHVybCA9ICcvaXRlbXMvc2hhcmUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdQb3N0Jykge1xyXG4gICAgICAgIHVybCA9ICcvcG9zdHMvc2hhcmUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdDb21tZW50Jykge1xyXG4gICAgICAgIHVybCA9ICcvY29tbWVudHMvc2hhcmUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdTaGFyZScpIHtcclxuICAgICAgICB1cmwgPSAnL3Bvc3RzL3NoYXJlJztcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzaGFyZWQ6IGlkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG5cclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKCdFdmFsdWF0ZSBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBkZWxldGVBY3Rpb24gPSBhc3luYyAoaWQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ2RlbGV0ZScsXHJcbiAgICAgICAgdXJsOiAnL3Bvc3RzJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBcImlkXCI6IGlkXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcbiAgICAgIGlmKHN0YXR1cyAhPT0gNDAwKSB7XHJcbiAgICAgICAgdmFyIG5ld1RpbWVsaW5lRGF0YSA9IHN0b3JhZ2UudGltZWxpbmVEYXRhLmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGl0ZW0uaWQgIT09IGlkO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZGlzcGF0Y2goc2V0VGltZWxpbmVEYXRhKG5ld1RpbWVsaW5lRGF0YSkpXHJcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKCdEZWxldGVkIHN1Y2Nlc3NmdWxseSEnKTtcclxuICAgICB9IGVsc2Uge1xyXG4gICAgICAgbWVzc2FnZS5lcnJvcignVGhpcyBwb3N0IGRlbGV0aW5nIGRvZXMgbm90IGFsbG93ZWQhJylcclxuICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcil7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRUaW1lbGluZShhdXRoLnRva2VuKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBfLnRocm90dGxlKCgpID0+IHtcclxuICAgICAgY29uc3QgY3VycmVudFNjcm9sbFBvcyA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgICAgaWYoY3VycmVudFNjcm9sbFBvcyA+IDEwMCkge1xyXG4gICAgICAgIHNldE1vYmlsZVByb2ZpbGVIZWFkZXIodHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0TW9iaWxlUHJvZmlsZUhlYWRlcihmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH0sIDI1MCkpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgeyB1c2VyIH0gPSBhdXRoO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVsaW5lfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZlZWRfY29udGFpbmVyfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY3JlYXRlUG9zdERpdn0+XHJcbiAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICAgIHNpemU9ezUwfVxyXG4gICAgICAgICAgICAgICAgdXJsPXt1c2VyPy5wcm9maWxlUGhvdG8/LnNyY31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLmNyZWF0ZVBvc3RJbnB1dH0gcGxhY2Vob2xkZXI9XCJXaGF0J3Mgb24geW91ciBtaW5kP1wiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17bW9kYWxQb3B1cH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICA8L2lucHV0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8TG9hZGluZ1dyYXBwZXIgbG9hZGluZz17c3RvcmFnZS5sb2FkaW5nfT5cclxuICAgICAgICAgICAgPFRpbWVsaW5lUG9zdHNcclxuICAgICAgICAgICAgICBkYXRhPXtzdG9yYWdlLnRpbWVsaW5lRGF0YX1cclxuICAgICAgICAgICAgICBvblVwZGF0ZVRpbWVsaW5lPXtvblVwZGF0ZVRpbWVsaW5lfVxyXG4gICAgICAgICAgICAgIG9uUmF0ZVBvc3Q9e3JhdGVQb3N0fVxyXG4gICAgICAgICAgICAgIGxpa2VBY3Rpb249e2xpa2VBY3Rpb259XHJcbiAgICAgICAgICAgICAgc2hhcmVBY3Rpb249e3NoYXJlQWN0aW9ufVxyXG4gICAgICAgICAgICAgIGRlbGV0ZUFjdGlvbj17ZGVsZXRlQWN0aW9ufVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Mb2FkaW5nV3JhcHBlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxNb2RhbFdyYXBwZXJcclxuICAgICAgICAgIHRpdGxlPVwiQ3JlYXRlIFBvc3RcIlxyXG4gICAgICAgICAgc2hvd01vZGFsPXtwb3N0TW9kYWx9XHJcbiAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRQb3N0TW9kYWwoMCl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFBvc3RpbmdQb3N0XHJcbiAgICAgICAgICAgICAgbG9hZGluZz17c3RvcmFnZS5wb3N0aW5nTG9hZGluZ31cclxuICAgICAgICAgICAgICBvblBvc3Rpbmc9e2NyZWF0ZVBvc3R9XHJcbiAgICAgICAgICAgICAgbW9kYWxQb3B1cD17bW9kYWxQb3B1cH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgIDwvTW9kYWxXcmFwcGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVxdWlyZUF1dGgoVGltZWxpbmVQYWdlKTtcclxuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmhlYWRlcl9hZGRpdGlvbmFsX2hlYWRlcl9fV3l1NDIge1xcbiAgaGVpZ2h0OiA4MHB4O1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC5oZWFkZXJfYWRkaXRpb25hbF9oZWFkZXJfX1d5dTQyIHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgfVxcbn1cXG5cXG4uaGVhZGVyX2hlYWRlcl9fZWNDMzkge1xcbiAgYmFja2dyb3VuZDogI2EwYWVjMDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWRmMGY1O1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDk5O1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdHJhbnNpdGlvbjogdG9wIDAuNnM7XFxufVxcblxcbi5oZWFkZXJfaGVhZGVyX19lY0MzOS5oZWFkZXJfaGVhZGVyX2hpZGRlbl9fMlEyREQge1xcbiAgdG9wOiAtODBweDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAuaGVhZGVyX2hlYWRlcl9fZWNDMzkuaGVhZGVyX2hlYWRlcl9oaWRkZW5fXzJRMkREIHtcXG4gICAgYm90dG9tOiAtMTUwcHg7XFxuICAgIHRvcDogdW5zZXQ7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLmhlYWRlcl9oZWFkZXJfX2VjQzM5IHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBwYWRkaW5nOiAxOHB4IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgdG9wOiB1bnNldDtcXG4gICAgdHJhbnNpdGlvbjogYm90dG9tIDAuNnM7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcblxcbi5oZWFkZXJfaGVhZGVyX19lY0MzOSAuaGVhZGVyX2NvbnRhaW5lcl9fYlhXUVEge1xcbiAgd2lkdGg6IDk1JTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC5oZWFkZXJfaGVhZGVyX19lY0MzOSAuaGVhZGVyX2NvbnRhaW5lcl9fYlhXUVEge1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbn1cXG5cXG4uaGVhZGVyX2hlYWRlcl9fZWNDMzkgLmhlYWRlcl9sb2dvX18yTVB3XyB7XFxuICB3aWR0aDogMTUwcHg7XFxuICBoZWlnaHQ6IDM1cHg7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLmhlYWRlcl9oZWFkZXJfX2VjQzM5IC5oZWFkZXJfbG9nb19fMk1Qd18ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgfVxcbn1cXG5cXG4uaGVhZGVyX2hlYWRlcl9fZWNDMzkgLmhlYWRlcl9sb2dvX18yTVB3XyBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5oZWFkZXJfaGVhZGVyX19lY0MzOSAuaGVhZGVyX3NlYXJjaF9fc3c0QmUge1xcbiAgZmxleDogMTtcXG4gIG1hcmdpbjogMCAzMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXJfaGVhZGVyX19lY0MzOSAuaGVhZGVyX3NlYXJjaF9fc3c0QmUgLmhlYWRlcl9wcm9maWxlX18xSlN3dSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC5oZWFkZXJfaGVhZGVyX19lY0MzOSAuaGVhZGVyX3NlYXJjaF9fc3c0QmUgLmhlYWRlcl9wcm9maWxlX18xSlN3dSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMjBweCkgYW5kIChtYXgtd2lkdGg6IDQ3OXB4KSB7XFxuICAuaGVhZGVyX2hlYWRlcl9fZWNDMzkgLmhlYWRlcl9zZWFyY2hfX3N3NEJlIC5oZWFkZXJfcHJvZmlsZV9fMUpTd3Uge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICB9XFxuXFxuICAuaGVhZGVyX2hlYWRlcl9fZWNDMzkgLmhlYWRlcl9zZWFyY2hfX3N3NEJlIC5oZWFkZXJfcHJvZmlsZV9fMUpTd3UgLmhlYWRlcl9uYW1lX18zSGhUbSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLmhlYWRlcl9oZWFkZXJfX2VjQzM5IC5oZWFkZXJfc2VhcmNoX19zdzRCZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG4uaGVhZGVyX2hlYWRlcl9fZWNDMzkgLmhlYWRlcl9zZWFyY2hfX3N3NEJlIGlucHV0IHtcXG4gIGZsZXg6IDAuNTtcXG4gIG1pbi13aWR0aDogNTBweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M3MDtcXG4gIGJvcmRlci1yYWRpdXM6IDQ1cHg7XFxuICBiYWNrZ3JvdW5kOiAjY2JkNWUwO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMTA3NHB4KSBhbmQgKG1heC13aWR0aDogMTQzOXB4KSB7XFxuICAuaGVhZGVyX2hlYWRlcl9fZWNDMzkgLmhlYWRlcl9zZWFyY2hfX3N3NEJlIGlucHV0IHtcXG4gICAgZmxleDogMC42O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDczcHgpIHtcXG4gIC5oZWFkZXJfaGVhZGVyX19lY0MzOSAuaGVhZGVyX3NlYXJjaF9fc3c0QmUgaW5wdXQge1xcbiAgICBmbGV4OiAwLjg7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLmhlYWRlcl9oZWFkZXJfX2VjQzM5IC5oZWFkZXJfc2VhcmNoX19zdzRCZSBpbnB1dCB7XFxuICAgIGZsZXg6IDE7XFxuICB9XFxufVxcblxcbi5oZWFkZXJfaGVhZGVyX19lY0MzOSAuaGVhZGVyX3Byb2ZpbGVfXzFKU3d1IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogI2U2ZTZlNjcwO1xcbiAgcGFkZGluZzogNXB4IDEwcHggNXB4IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLmhlYWRlcl9oZWFkZXJfX2VjQzM5IC5oZWFkZXJfcHJvZmlsZV9fMUpTd3Uge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5cXG4uaGVhZGVyX2hlYWRlcl9fZWNDMzkgLmhlYWRlcl9wcm9maWxlX18xSlN3dSAuaGVhZGVyX2F2YXRhcl9fYm9TWkgge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbi5oZWFkZXJfaGVhZGVyX19lY0MzOSAuaGVhZGVyX3Byb2ZpbGVfXzFKU3d1IC5oZWFkZXJfYXZhdGFyX19ib1NaSCBpbWcge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uaGVhZGVyX2hlYWRlcl9fZWNDMzkgLmhlYWRlcl9wcm9maWxlX18xSlN3dSAuaGVhZGVyX25hbWVfXzNIaFRtIHtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIGNvbG9yOiAjMjIyO1xcbn1cXG5cXG4uaGVhZGVyX21vYmlsZV9wcm9maWxlX2hlYWRlcl9fMlRKaXYge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJhY2tncm91bmQ6ICNhMGFlYzA7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VkZjBmNTtcXG4gIGhlaWdodDogNjBweDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDk5O1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdHJhbnNpdGlvbjogYm90dG9tIDAuNnM7XFxufVxcblxcbi5oZWFkZXJfbW9iaWxlX3Byb2ZpbGVfaGVhZGVyX18yVEppdiAuaGVhZGVyX2NvbnRhaW5lcl9fYlhXUVEge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC5oZWFkZXJfbW9iaWxlX3Byb2ZpbGVfaGVhZGVyX18yVEppdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxufVxcblxcbi5oZWFkZXJfbW9iaWxlX3Byb2ZpbGVfaGVhZGVyX18yVEppdi5oZWFkZXJfaGVhZGVyX2hpZGRlbl9fMlEyREQge1xcbiAgdG9wOiAtODBweDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAuaGVhZGVyX21vYmlsZV9wcm9maWxlX2hlYWRlcl9fMlRKaXYuaGVhZGVyX2hlYWRlcl9oaWRkZW5fXzJRMkREIHtcXG4gICAgYm90dG9tOiAtMTUwcHg7XFxuICAgIHRvcDogdW5zZXQ7XFxuICB9XFxufVxcblxcbi5oZWFkZXJfbW9iaWxlX3RvcF9oZWFkZXJfXzNpaEdIIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiAjYTBhZWMwO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZGYwZjU7XFxuICBoZWlnaHQ6IDc1cHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiA5OTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRyYW5zaXRpb246IHRvcCAwLjZzO1xcbn1cXG5cXG4uaGVhZGVyX21vYmlsZV90b3BfaGVhZGVyX18zaWhHSCAuaGVhZGVyX2NvbnRhaW5lcl9fYlhXUVEge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC5oZWFkZXJfbW9iaWxlX3RvcF9oZWFkZXJfXzNpaEdIIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG59XFxuXFxuLmhlYWRlcl9tb2JpbGVfdG9wX2hlYWRlcl9fM2loR0guaGVhZGVyX2hlYWRlcl9oaWRkZW5fXzJRMkREIHtcXG4gIHRvcDogLTgwcHg7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLmhlYWRlcl9tb2JpbGVfdG9wX2hlYWRlcl9fM2loR0guaGVhZGVyX2hlYWRlcl9oaWRkZW5fXzJRMkREIHtcXG4gICAgdG9wOiAtMTUwcHg7XFxuICB9XFxufVxcblxcbi5oZWFkZXJfbW9iaWxlX3RvcF9oZWFkZXJfXzNpaEdIIC5oZWFkZXJfY29udGFpbmVyX19iWFdRUSB7XFxuICB3aWR0aDogOTUlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLmhlYWRlcl9tb2JpbGVfdG9wX2hlYWRlcl9fM2loR0ggLmhlYWRlcl9jb250YWluZXJfX2JYV1FRIHtcXG4gICAgd2lkdGg6IDk1JTtcXG4gIH1cXG59XFxuXFxuLmhlYWRlcl9tb2JpbGVfdG9wX2hlYWRlcl9fM2loR0ggLmhlYWRlcl9sb2dvX18yTVB3XyB7XFxuICB3aWR0aDogMTUwcHg7XFxufVxcblxcbi5oZWFkZXJfbW9iaWxlX3RvcF9oZWFkZXJfXzNpaEdIIC5oZWFkZXJfbG9nb19fMk1Qd18gaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaGVhZGVyX21vYmlsZV90b3BfaGVhZGVyX18zaWhHSCAuaGVhZGVyX3NlYXJjaF9fc3c0QmUge1xcbiAgZmxleDogMTtcXG4gIG1hcmdpbjogMCAzMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLmhlYWRlcl9tb2JpbGVfdG9wX2hlYWRlcl9fM2loR0ggLmhlYWRlcl9zZWFyY2hfX3N3NEJlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcblxcbi5oZWFkZXJfbW9iaWxlX3RvcF9oZWFkZXJfXzNpaEdIIC5oZWFkZXJfc2VhcmNoX19zdzRCZSBpbnB1dCB7XFxuICBmbGV4OiAwLjU7XFxuICBtaW4td2lkdGg6IDUwcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBwYWRkaW5nOiAwLjVlbSAxZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjNzA7XFxuICBib3JkZXItcmFkaXVzOiA0NXB4O1xcbiAgYmFja2dyb3VuZDogI2NiZDVlMDtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDEwNzRweCkgYW5kIChtYXgtd2lkdGg6IDE0MzlweCkge1xcbiAgLmhlYWRlcl9tb2JpbGVfdG9wX2hlYWRlcl9fM2loR0ggLmhlYWRlcl9zZWFyY2hfX3N3NEJlIGlucHV0IHtcXG4gICAgZmxleDogMC42O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDczcHgpIHtcXG4gIC5oZWFkZXJfbW9iaWxlX3RvcF9oZWFkZXJfXzNpaEdIIC5oZWFkZXJfc2VhcmNoX19zdzRCZSBpbnB1dCB7XFxuICAgIGZsZXg6IDAuODtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAuaGVhZGVyX21vYmlsZV90b3BfaGVhZGVyX18zaWhHSCAuaGVhZGVyX3NlYXJjaF9fc3c0QmUgaW5wdXQge1xcbiAgICBmbGV4OiAxO1xcbiAgfVxcbn1cXG5cXG4uaGVhZGVyX3NlYXJjaE1vZGFsX18ySUZTYiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDQ3MHB4O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTBhZWMwO1xcbiAgdHJhbnNpdGlvbjogMC42cztcXG4gIHotaW5kZXg6IDkwMDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAuaGVhZGVyX3NlYXJjaE1vZGFsX18ySUZTYiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG4uaGVhZGVyX3NlYXJjaE1vZGFsX18ySUZTYiAuaGVhZGVyX3NlYXJjaEhlYWRlcl9fMVI2bFcge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmhlYWRlcl9zZWFyY2hNb2RhbF9fMklGU2IgLmhlYWRlcl9zZWFyY2hIZWFkZXJfXzFSNmxXIGlucHV0IHtcXG4gIGZsZXg6IDU7XFxuICBtaW4td2lkdGg6IDUwcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBwYWRkaW5nOiAwLjVlbSAxZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjNzA7XFxuICBib3JkZXItcmFkaXVzOiA0NXB4O1xcbiAgYmFja2dyb3VuZDogI2NiZDVlMDtcXG59XFxuXFxuLmhlYWRlcl9zZWFyY2hNb2RhbF9fMklGU2IgLmhlYWRlcl9zZWFyY2hDb250ZW50X18xTk5MTSB7XFxuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4uaGVhZGVyX3NlYXJjaE1vZGFsX18ySUZTYiAuaGVhZGVyX3NlYXJjaENvbnRlbnRfXzFOTkxNIC5oZWFkZXJfdXNlcl9uYW1lX18yNURjaiB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XFxuICBtYXJnaW4tbGVmdDogMzVweDtcXG59XFxuXFxuLmhlYWRlcl9zZWFyY2hNb2RhbF9fMklGU2IgLmhlYWRlcl9zZWFyY2hDb250ZW50X18xTk5MTSAuaGVhZGVyX3VzZXJfaW5mb19fMzY0cGsge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJFOi9mcmVlc2tpZXNfZmVfY29kZS9jb21wb25lbnRzL2hlYWRlci9zdHlsZXMvaGVhZGVyLm1vZHVsZS5zY3NzXCIsXCJFOi9mcmVlc2tpZXNfZmVfY29kZS9jc3MvbWl4aW5zL19yZXNwb25zaXZlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxZQUFBO0FBREY7O0FDV0U7RURYRjtJQUlJLFlBQUE7RUFBRjtBQUNGOztBQUdBO0VBQ0UsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBRUEsZUFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxvQkFBQTtBQURGOztBQUdFO0VBQ0UsVUFBQTtBQURKOztBQ1ZFO0VEVUE7SUFHSSxjQUFBO0lBQ0EsVUFBQTtFQUNKO0FBQ0Y7O0FDaEJFO0VESEY7SUFzQkksWUFBQTtJQUNBLGVBQUE7SUFDQSxTQUFBO0lBQ0EsVUFBQTtJQUNBLHVCQUFBO0lBQ0EsYUFBQTtFQUNGO0FB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RjtJQVdNLFdBQUE7RUFJSjtBQUNGOztBQUhHO0VBQ0csYUFBQTtBQUtOOztBQUpRO0VBQ0UsT0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBTVY7O0FBREc7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBR0w7O0FBRk07RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQUlSOztBQUZNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUFJUlwiLFwiZmlsZVwiOlwiaGVhZGVyLm1vZHVsZS5zY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJ2Nzcy9taXhpbnMvcmVzcG9uc2l2ZSc7XFxyXFxuXFxyXFxuLmFkZGl0aW9uYWxfaGVhZGVyIHtcXHJcXG4gIGhlaWdodDogODBweDtcXHJcXG5cXHJcXG4gIEBpbmNsdWRlIG1vYmlsZSB7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjYTBhZWMwO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZGYwZjU7XFxyXFxuICBoZWlnaHQ6IDgwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcblxcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgei1pbmRleDogOTk7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB0cmFuc2l0aW9uOiB0b3AgMC42cztcXHJcXG5cXHJcXG4gICYuaGVhZGVyX2hpZGRlbiB7XFxyXFxuICAgIHRvcDogLTgwcHg7XFxyXFxuICAgIEBpbmNsdWRlIG1vYmlsZSB7XFxyXFxuICAgICAgYm90dG9tOiAtMTUwcHg7XFxyXFxuICAgICAgdG9wOiB1bnNldDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgQGluY2x1ZGUgbW9iaWxlIHtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAxOHB4IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgdG9wOiB1bnNldDtcXHJcXG4gICAgdHJhbnNpdGlvbjogYm90dG9tIDAuNnM7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDk1JTtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIEBpbmNsdWRlIG1vYmlsZSB7XFxyXFxuICAgICAgd2lkdGg6IDk1JTtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubG9nbyB7XFxyXFxuICAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICAgaGVpZ2h0OiAzNXB4O1xcclxcblxcclxcbiAgICBAaW5jbHVkZSBtb2JpbGUge1xcclxcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgaW1nIHtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAvLyBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zZWFyY2gge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBtYXJnaW46IDAgMzBweDtcXHJcXG4gICAgLy9kaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgLnByb2ZpbGUge1xcclxcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuXFxyXFxuICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgQGluY2x1ZGUgZXh0cmFTbWFsbCB7XFxyXFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbiAgICAgICAgLm5hbWUge1xcclxcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBAaW5jbHVkZSBtb2JpbGUge1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGlucHV0IHtcXHJcXG4gICAgICBmbGV4OiAwLjU7XFxyXFxuICAgICAgbWluLXdpZHRoOiA1MHB4O1xcclxcbiAgICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgICAgZm9udC1zaXplOiAxZW07XFxyXFxuICAgICAgcGFkZGluZzogMC41ZW0gMWVtO1xcclxcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M3MDtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiA0NXB4O1xcclxcbiAgICAgIGJhY2tncm91bmQ6ICNjYmQ1ZTA7XFxyXFxuICAgICAgQGluY2x1ZGUgZGVza3RvcCB7XFxyXFxuICAgICAgICBmbGV4OiAwLjY7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIEBpbmNsdWRlIHRhYmxldCB7XFxyXFxuICAgICAgICBmbGV4OiAwLjg7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XFxyXFxuICAgICAgICBmbGV4OiAxO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLnByb2ZpbGUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZTZlNmU2NzA7XFxyXFxuICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCA1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHJcXG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcXHJcXG4gICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5hdmF0YXIge1xcclxcbiAgICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgICBpbWcge1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICAubmFtZSB7XFxyXFxuICAgICAgcGFkZGluZzogMCAxMHB4O1xcclxcbiAgICAgIGNvbG9yOiAjMjIyO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5tb2JpbGVfcHJvZmlsZV9oZWFkZXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQ6ICNhMGFlYzA7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VkZjBmNTtcXHJcXG4gIGhlaWdodDogNjBweDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHotaW5kZXg6IDk5O1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgdHJhbnNpdGlvbjogYm90dG9tIDAuNnM7XFxyXFxuICAgIC5jb250YWluZXIge1xcclxcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxuICAgIH1cXHJcXG4gIEBpbmNsdWRlIG1vYmlsZSB7XFxyXFxuICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5oZWFkZXJfaGlkZGVuIHtcXHJcXG4gICAgdG9wOiAtODBweDtcXHJcXG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcXHJcXG4gICAgICBib3R0b206IC0xNTBweDtcXHJcXG4gICAgICB0b3A6IHVuc2V0O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5tb2JpbGVfdG9wX2hlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogI2EwYWVjMDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWRmMGY1O1xcclxcbiAgaGVpZ2h0OiA3NXB4O1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgei1pbmRleDogOTk7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB0cmFuc2l0aW9uOiB0b3AgMC42cztcXHJcXG4gICAgLmNvbnRhaW5lciB7XFxyXFxuICAgICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgfVxcclxcbiAgQGluY2x1ZGUgbW9iaWxlIHtcXHJcXG4gICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmhlYWRlcl9oaWRkZW4ge1xcclxcbiAgICB0b3A6IC04MHB4O1xcclxcbiAgICBAaW5jbHVkZSBtb2JpbGUge1xcclxcbiAgICAgIHRvcDogLTE1MHB4O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDk1JTtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIEBpbmNsdWRlIG1vYmlsZSB7XFxyXFxuICAgICAgd2lkdGg6IDk1JTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLmxvZ28ge1xcclxcbiAgICB3aWR0aDogMTUwcHg7XFxyXFxuICAgIC8vaGVpZ2h0OiAzNXB4O1xcclxcblxcclxcbiAgICBAaW5jbHVkZSBtb2JpbGUge1xcclxcbiAgICAgIC8vbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBpbWcge1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgIC8vIGhlaWdodDogMTAwJTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLnNlYXJjaCB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIG1hcmdpbjogMCAzMHB4O1xcclxcbiAgICAvL2Rpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxyXFxuICAgIEBpbmNsdWRlIG1vYmlsZSB7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgaW5wdXQge1xcclxcbiAgICAgIGZsZXg6IDAuNTtcXHJcXG4gICAgICBtaW4td2lkdGg6IDUwcHg7XFxyXFxuICAgICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgICBmb250LXNpemU6IDFlbTtcXHJcXG4gICAgICBwYWRkaW5nOiAwLjVlbSAxZW07XFxyXFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYzcwO1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDQ1cHg7XFxyXFxuICAgICAgYmFja2dyb3VuZDogI2NiZDVlMDtcXHJcXG4gICAgICBAaW5jbHVkZSBkZXNrdG9wIHtcXHJcXG4gICAgICAgIGZsZXg6IDAuNjtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgQGluY2x1ZGUgdGFibGV0IHtcXHJcXG4gICAgICAgIGZsZXg6IDAuODtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcXHJcXG4gICAgICAgIGZsZXg6IDE7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2hNb2RhbCB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgd2lkdGg6IDQ3MHB4O1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTBhZWMwO1xcclxcbiAgdHJhbnNpdGlvbjogMC42cztcXHJcXG4gIHotaW5kZXg6IDkwMDtcXHJcXG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcbiAgIC5zZWFyY2hIZWFkZXIge1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBpbnB1dCB7XFxyXFxuICAgICAgICAgIGZsZXg6IDU7XFxyXFxuICAgICAgICAgIG1pbi13aWR0aDogNTBweDtcXHJcXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgICAgICAgZm9udC1zaXplOiAxZW07XFxyXFxuICAgICAgICAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcXHJcXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYzcwO1xcclxcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0NXB4O1xcclxcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjY2JkNWUwO1xcclxcbiAgICAgICAgXFxyXFxuICAgICAgICB9XFxyXFxuICAgfVxcclxcblxcclxcbiAgIC5zZWFyY2hDb250ZW50e1xcclxcbiAgICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcclxcbiAgICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgICAudXNlcl9uYW1lIHtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xcclxcbiAgICAgIH1cXHJcXG4gICAgICAudXNlcl9pbmZvIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgICB9XFxyXFxuICAgfVxcclxcbn1cIixcIiRleHRyYS1zbWFsbC13aWR0aDogNDgwcHg7XFxyXFxuJG1vYmlsZS13aWR0aDogNzY3cHg7XFxyXFxuJHRhYmxldC13aWR0aDogNzY4cHg7XFxyXFxuJGRlc2t0b3Atd2lkdGg6IDEwNzRweDtcXHJcXG4kYmlnLWRlc2t0b3Atd2lkdGg6IDE0NDBweDtcXHJcXG5cXHJcXG5AbWl4aW4gZXh0cmFTbWFsbCB7XFxyXFxuICBAbWVkaWEgKG1pbi13aWR0aDogMjBweCkgYW5kIChtYXgtd2lkdGg6ICN7JGV4dHJhLXNtYWxsLXdpZHRoIC0gMXB4fSkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIG1vYmlsZSB7XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogI3skbW9iaWxlLXdpZHRofSkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIHRhYmxldCB7XFxyXFxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skdGFibGV0LXdpZHRofSkgYW5kIChtYXgtd2lkdGg6ICN7JGRlc2t0b3Atd2lkdGggLSAxcHh9KSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gZGVza3RvcCB7XFxyXFxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skZGVza3RvcC13aWR0aH0pIGFuZCAobWF4LXdpZHRoOiAjeyRiaWctZGVza3RvcC13aWR0aCAtIDFweH0pIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBiaWdEZXNrdG9wIHtcXHJcXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRiaWctZGVza3RvcC13aWR0aH0pIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXX1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImFkZGl0aW9uYWxfaGVhZGVyXCI6IFwiaGVhZGVyX2FkZGl0aW9uYWxfaGVhZGVyX19XeXU0MlwiLFxuXHRcImhlYWRlclwiOiBcImhlYWRlcl9oZWFkZXJfX2VjQzM5XCIsXG5cdFwiaGVhZGVyX2hpZGRlblwiOiBcImhlYWRlcl9oZWFkZXJfaGlkZGVuX18yUTJERFwiLFxuXHRcImNvbnRhaW5lclwiOiBcImhlYWRlcl9jb250YWluZXJfX2JYV1FRXCIsXG5cdFwibG9nb1wiOiBcImhlYWRlcl9sb2dvX18yTVB3X1wiLFxuXHRcInNlYXJjaFwiOiBcImhlYWRlcl9zZWFyY2hfX3N3NEJlXCIsXG5cdFwicHJvZmlsZVwiOiBcImhlYWRlcl9wcm9maWxlX18xSlN3dVwiLFxuXHRcIm5hbWVcIjogXCJoZWFkZXJfbmFtZV9fM0hoVG1cIixcblx0XCJhdmF0YXJcIjogXCJoZWFkZXJfYXZhdGFyX19ib1NaSFwiLFxuXHRcIm1vYmlsZV9wcm9maWxlX2hlYWRlclwiOiBcImhlYWRlcl9tb2JpbGVfcHJvZmlsZV9oZWFkZXJfXzJUSml2XCIsXG5cdFwibW9iaWxlX3RvcF9oZWFkZXJcIjogXCJoZWFkZXJfbW9iaWxlX3RvcF9oZWFkZXJfXzNpaEdIXCIsXG5cdFwic2VhcmNoTW9kYWxcIjogXCJoZWFkZXJfc2VhcmNoTW9kYWxfXzJJRlNiXCIsXG5cdFwic2VhcmNoSGVhZGVyXCI6IFwiaGVhZGVyX3NlYXJjaEhlYWRlcl9fMVI2bFdcIixcblx0XCJzZWFyY2hDb250ZW50XCI6IFwiaGVhZGVyX3NlYXJjaENvbnRlbnRfXzFOTkxNXCIsXG5cdFwidXNlcl9uYW1lXCI6IFwiaGVhZGVyX3VzZXJfbmFtZV9fMjVEY2pcIixcblx0XCJ1c2VyX2luZm9cIjogXCJoZWFkZXJfdXNlcl9pbmZvX18zNjRwa1wiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIFF1ZXJ5SGFuZGxlciA9IHJlcXVpcmUoJy4vUXVlcnlIYW5kbGVyJyk7XG52YXIgZWFjaCA9IHJlcXVpcmUoJy4vVXRpbCcpLmVhY2g7XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHNpbmdsZSBtZWRpYSBxdWVyeSwgbWFuYWdlcyBpdCdzIHN0YXRlIGFuZCByZWdpc3RlcmVkIGhhbmRsZXJzIGZvciB0aGlzIHF1ZXJ5XG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkgdGhlIG1lZGlhIHF1ZXJ5IHN0cmluZ1xuICogQHBhcmFtIHtib29sZWFufSBbaXNVbmNvbmRpdGlvbmFsPWZhbHNlXSB3aGV0aGVyIHRoZSBtZWRpYSBxdWVyeSBzaG91bGQgcnVuIHJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGUgY29uZGl0aW9ucyBhcmUgbWV0LiBQcmltYXJpbHkgZm9yIGhlbHBpbmcgb2xkZXIgYnJvd3NlcnMgZGVhbCB3aXRoIG1vYmlsZS1maXJzdCBkZXNpZ25cbiAqL1xuZnVuY3Rpb24gTWVkaWFRdWVyeShxdWVyeSwgaXNVbmNvbmRpdGlvbmFsKSB7XG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgIHRoaXMuaXNVbmNvbmRpdGlvbmFsID0gaXNVbmNvbmRpdGlvbmFsO1xuICAgIHRoaXMuaGFuZGxlcnMgPSBbXTtcbiAgICB0aGlzLm1xbCA9IHdpbmRvdy5tYXRjaE1lZGlhKHF1ZXJ5KTtcblxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB0aGlzLmxpc3RlbmVyID0gZnVuY3Rpb24obXFsKSB7XG4gICAgICAgIC8vIENocm9tZSBwYXNzZXMgYW4gTWVkaWFRdWVyeUxpc3RFdmVudCBvYmplY3QsIHdoaWxlIG90aGVyIGJyb3dzZXJzIHBhc3MgTWVkaWFRdWVyeUxpc3QgZGlyZWN0bHlcbiAgICAgICAgc2VsZi5tcWwgPSBtcWwuY3VycmVudFRhcmdldCB8fCBtcWw7XG4gICAgICAgIHNlbGYuYXNzZXNzKCk7XG4gICAgfTtcbiAgICB0aGlzLm1xbC5hZGRMaXN0ZW5lcih0aGlzLmxpc3RlbmVyKTtcbn1cblxuTWVkaWFRdWVyeS5wcm90b3R5cGUgPSB7XG5cbiAgICBjb25zdHVjdG9yIDogTWVkaWFRdWVyeSxcblxuICAgIC8qKlxuICAgICAqIGFkZCBhIGhhbmRsZXIgZm9yIHRoaXMgcXVlcnksIHRyaWdnZXJpbmcgaWYgYWxyZWFkeSBhY3RpdmVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBoYW5kbGVyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gaGFuZGxlci5tYXRjaCBjYWxsYmFjayBmb3Igd2hlbiBxdWVyeSBpcyBhY3RpdmF0ZWRcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbaGFuZGxlci51bm1hdGNoXSBjYWxsYmFjayBmb3Igd2hlbiBxdWVyeSBpcyBkZWFjdGl2YXRlZFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtoYW5kbGVyLnNldHVwXSBjYWxsYmFjayBmb3IgaW1tZWRpYXRlIGV4ZWN1dGlvbiB3aGVuIGEgcXVlcnkgaGFuZGxlciBpcyByZWdpc3RlcmVkXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbaGFuZGxlci5kZWZlclNldHVwPWZhbHNlXSBzaG91bGQgdGhlIHNldHVwIGNhbGxiYWNrIGJlIGRlZmVycmVkIHVudGlsIHRoZSBmaXJzdCB0aW1lIHRoZSBoYW5kbGVyIGlzIG1hdGNoZWQ/XG4gICAgICovXG4gICAgYWRkSGFuZGxlciA6IGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICAgICAgdmFyIHFoID0gbmV3IFF1ZXJ5SGFuZGxlcihoYW5kbGVyKTtcbiAgICAgICAgdGhpcy5oYW5kbGVycy5wdXNoKHFoKTtcblxuICAgICAgICB0aGlzLm1hdGNoZXMoKSAmJiBxaC5vbigpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiByZW1vdmVzIHRoZSBnaXZlbiBoYW5kbGVyIGZyb20gdGhlIGNvbGxlY3Rpb24sIGFuZCBjYWxscyBpdCdzIGRlc3Ryb3kgbWV0aG9kc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3QgfHwgZnVuY3Rpb259IGhhbmRsZXIgdGhlIGhhbmRsZXIgdG8gcmVtb3ZlXG4gICAgICovXG4gICAgcmVtb3ZlSGFuZGxlciA6IGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICAgICAgdmFyIGhhbmRsZXJzID0gdGhpcy5oYW5kbGVycztcbiAgICAgICAgZWFjaChoYW5kbGVycywgZnVuY3Rpb24oaCwgaSkge1xuICAgICAgICAgICAgaWYoaC5lcXVhbHMoaGFuZGxlcikpIHtcbiAgICAgICAgICAgICAgICBoLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gIWhhbmRsZXJzLnNwbGljZShpLDEpOyAvL3JlbW92ZSBmcm9tIGFycmF5IGFuZCBleGl0IGVhY2ggZWFybHlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIERldGVybWluZSB3aGV0aGVyIHRoZSBtZWRpYSBxdWVyeSBzaG91bGQgYmUgY29uc2lkZXJlZCBhIG1hdGNoXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIG1lZGlhIHF1ZXJ5IGNhbiBiZSBjb25zaWRlcmVkIGEgbWF0Y2gsIGZhbHNlIG90aGVyd2lzZVxuICAgICAqL1xuICAgIG1hdGNoZXMgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubXFsLm1hdGNoZXMgfHwgdGhpcy5pc1VuY29uZGl0aW9uYWw7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENsZWFycyBhbGwgaGFuZGxlcnMgYW5kIHVuYmluZHMgZXZlbnRzXG4gICAgICovXG4gICAgY2xlYXIgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgZWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICAgICAgICBoYW5kbGVyLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubXFsLnJlbW92ZUxpc3RlbmVyKHRoaXMubGlzdGVuZXIpO1xuICAgICAgICB0aGlzLmhhbmRsZXJzLmxlbmd0aCA9IDA7IC8vY2xlYXIgYXJyYXlcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgKiBBc3Nlc3NlcyB0aGUgcXVlcnksIHR1cm5pbmcgb24gYWxsIGhhbmRsZXJzIGlmIGl0IG1hdGNoZXMsIHR1cm5pbmcgdGhlbSBvZmYgaWYgaXQgZG9lc24ndCBtYXRjaFxuICAgICAgICAqL1xuICAgIGFzc2VzcyA6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgYWN0aW9uID0gdGhpcy5tYXRjaGVzKCkgPyAnb24nIDogJ29mZic7XG5cbiAgICAgICAgZWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICAgICAgICBoYW5kbGVyW2FjdGlvbl0oKTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBNZWRpYVF1ZXJ5O1xuIiwidmFyIE1lZGlhUXVlcnkgPSByZXF1aXJlKCcuL01lZGlhUXVlcnknKTtcbnZhciBVdGlsID0gcmVxdWlyZSgnLi9VdGlsJyk7XG52YXIgZWFjaCA9IFV0aWwuZWFjaDtcbnZhciBpc0Z1bmN0aW9uID0gVXRpbC5pc0Z1bmN0aW9uO1xudmFyIGlzQXJyYXkgPSBVdGlsLmlzQXJyYXk7XG5cbi8qKlxuICogQWxsb3dzIGZvciByZWdpc3RyYXRpb24gb2YgcXVlcnkgaGFuZGxlcnMuXG4gKiBNYW5hZ2VzIHRoZSBxdWVyeSBoYW5kbGVyJ3Mgc3RhdGUgYW5kIGlzIHJlc3BvbnNpYmxlIGZvciB3aXJpbmcgdXAgYnJvd3NlciBldmVudHNcbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gTWVkaWFRdWVyeURpc3BhdGNoICgpIHtcbiAgICBpZighd2luZG93Lm1hdGNoTWVkaWEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtYXRjaE1lZGlhIG5vdCBwcmVzZW50LCBsZWdhY3kgYnJvd3NlcnMgcmVxdWlyZSBhIHBvbHlmaWxsJyk7XG4gICAgfVxuXG4gICAgdGhpcy5xdWVyaWVzID0ge307XG4gICAgdGhpcy5icm93c2VySXNJbmNhcGFibGUgPSAhd2luZG93Lm1hdGNoTWVkaWEoJ29ubHkgYWxsJykubWF0Y2hlcztcbn1cblxuTWVkaWFRdWVyeURpc3BhdGNoLnByb3RvdHlwZSA9IHtcblxuICAgIGNvbnN0cnVjdG9yIDogTWVkaWFRdWVyeURpc3BhdGNoLFxuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXJzIGEgaGFuZGxlciBmb3IgdGhlIGdpdmVuIG1lZGlhIHF1ZXJ5XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcSB0aGUgbWVkaWEgcXVlcnlcbiAgICAgKiBAcGFyYW0ge29iamVjdCB8fCBBcnJheSB8fCBGdW5jdGlvbn0gb3B0aW9ucyBlaXRoZXIgYSBzaW5nbGUgcXVlcnkgaGFuZGxlciBvYmplY3QsIGEgZnVuY3Rpb24sIG9yIGFuIGFycmF5IG9mIHF1ZXJ5IGhhbmRsZXJzXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gb3B0aW9ucy5tYXRjaCBmaXJlZCB3aGVuIHF1ZXJ5IG1hdGNoZWRcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy51bm1hdGNoXSBmaXJlZCB3aGVuIGEgcXVlcnkgaXMgbm8gbG9uZ2VyIG1hdGNoZWRcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5zZXR1cF0gZmlyZWQgd2hlbiBoYW5kbGVyIGZpcnN0IHRyaWdnZXJlZFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuZGVmZXJTZXR1cD1mYWxzZV0gd2hldGhlciBzZXR1cCBzaG91bGQgYmUgcnVuIGltbWVkaWF0ZWx5IG9yIGRlZmVycmVkIHVudGlsIHF1ZXJ5IGlzIGZpcnN0IG1hdGNoZWRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtzaG91bGREZWdyYWRlPWZhbHNlXSB3aGV0aGVyIHRoaXMgcGFydGljdWxhciBtZWRpYSBxdWVyeSBzaG91bGQgYWx3YXlzIHJ1biBvbiBpbmNhcGFibGUgYnJvd3NlcnNcbiAgICAgKi9cbiAgICByZWdpc3RlciA6IGZ1bmN0aW9uKHEsIG9wdGlvbnMsIHNob3VsZERlZ3JhZGUpIHtcbiAgICAgICAgdmFyIHF1ZXJpZXMgICAgICAgICA9IHRoaXMucXVlcmllcyxcbiAgICAgICAgICAgIGlzVW5jb25kaXRpb25hbCA9IHNob3VsZERlZ3JhZGUgJiYgdGhpcy5icm93c2VySXNJbmNhcGFibGU7XG5cbiAgICAgICAgaWYoIXF1ZXJpZXNbcV0pIHtcbiAgICAgICAgICAgIHF1ZXJpZXNbcV0gPSBuZXcgTWVkaWFRdWVyeShxLCBpc1VuY29uZGl0aW9uYWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9ub3JtYWxpc2UgdG8gb2JqZWN0IGluIGFuIGFycmF5XG4gICAgICAgIGlmKGlzRnVuY3Rpb24ob3B0aW9ucykpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7IG1hdGNoIDogb3B0aW9ucyB9O1xuICAgICAgICB9XG4gICAgICAgIGlmKCFpc0FycmF5KG9wdGlvbnMpKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gW29wdGlvbnNdO1xuICAgICAgICB9XG4gICAgICAgIGVhY2gob3B0aW9ucywgZnVuY3Rpb24oaGFuZGxlcikge1xuICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb24oaGFuZGxlcikpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyID0geyBtYXRjaCA6IGhhbmRsZXIgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHF1ZXJpZXNbcV0uYWRkSGFuZGxlcihoYW5kbGVyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIHVucmVnaXN0ZXJzIGEgcXVlcnkgYW5kIGFsbCBpdCdzIGhhbmRsZXJzLCBvciBhIHNwZWNpZmljIGhhbmRsZXIgZm9yIGEgcXVlcnlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBxIHRoZSBtZWRpYSBxdWVyeSB0byB0YXJnZXRcbiAgICAgKiBAcGFyYW0ge29iamVjdCB8fCBmdW5jdGlvbn0gW2hhbmRsZXJdIHNwZWNpZmljIGhhbmRsZXIgdG8gdW5yZWdpc3RlclxuICAgICAqL1xuICAgIHVucmVnaXN0ZXIgOiBmdW5jdGlvbihxLCBoYW5kbGVyKSB7XG4gICAgICAgIHZhciBxdWVyeSA9IHRoaXMucXVlcmllc1txXTtcblxuICAgICAgICBpZihxdWVyeSkge1xuICAgICAgICAgICAgaWYoaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIHF1ZXJ5LnJlbW92ZUhhbmRsZXIoaGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBxdWVyeS5jbGVhcigpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnF1ZXJpZXNbcV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1lZGlhUXVlcnlEaXNwYXRjaDtcbiIsIi8qKlxuICogRGVsZWdhdGUgdG8gaGFuZGxlIGEgbWVkaWEgcXVlcnkgYmVpbmcgbWF0Y2hlZCBhbmQgdW5tYXRjaGVkLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvcHRpb25zLm1hdGNoIGNhbGxiYWNrIGZvciB3aGVuIHRoZSBtZWRpYSBxdWVyeSBpcyBtYXRjaGVkXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy51bm1hdGNoXSBjYWxsYmFjayBmb3Igd2hlbiB0aGUgbWVkaWEgcXVlcnkgaXMgdW5tYXRjaGVkXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5zZXR1cF0gb25lLXRpbWUgY2FsbGJhY2sgdHJpZ2dlcmVkIHRoZSBmaXJzdCB0aW1lIGEgcXVlcnkgaXMgbWF0Y2hlZFxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5kZWZlclNldHVwPWZhbHNlXSBzaG91bGQgdGhlIHNldHVwIGNhbGxiYWNrIGJlIHJ1biBpbW1lZGlhdGVseSwgcmF0aGVyIHRoYW4gZmlyc3QgdGltZSBxdWVyeSBpcyBtYXRjaGVkP1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIFF1ZXJ5SGFuZGxlcihvcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAhb3B0aW9ucy5kZWZlclNldHVwICYmIHRoaXMuc2V0dXAoKTtcbn1cblxuUXVlcnlIYW5kbGVyLnByb3RvdHlwZSA9IHtcblxuICAgIGNvbnN0cnVjdG9yIDogUXVlcnlIYW5kbGVyLFxuXG4gICAgLyoqXG4gICAgICogY29vcmRpbmF0ZXMgc2V0dXAgb2YgdGhlIGhhbmRsZXJcbiAgICAgKlxuICAgICAqIEBmdW5jdGlvblxuICAgICAqL1xuICAgIHNldHVwIDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmKHRoaXMub3B0aW9ucy5zZXR1cCkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnNldHVwKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbml0aWFsaXNlZCA9IHRydWU7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIGNvb3JkaW5hdGVzIHNldHVwIGFuZCB0cmlnZ2VyaW5nIG9mIHRoZSBoYW5kbGVyXG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKi9cbiAgICBvbiA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAhdGhpcy5pbml0aWFsaXNlZCAmJiB0aGlzLnNldHVwKCk7XG4gICAgICAgIHRoaXMub3B0aW9ucy5tYXRjaCAmJiB0aGlzLm9wdGlvbnMubWF0Y2goKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogY29vcmRpbmF0ZXMgdGhlIHVubWF0Y2ggZXZlbnQgZm9yIHRoZSBoYW5kbGVyXG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKi9cbiAgICBvZmYgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLnVubWF0Y2ggJiYgdGhpcy5vcHRpb25zLnVubWF0Y2goKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogY2FsbGVkIHdoZW4gYSBoYW5kbGVyIGlzIHRvIGJlIGRlc3Ryb3llZC5cbiAgICAgKiBkZWxlZ2F0ZXMgdG8gdGhlIGRlc3Ryb3kgb3IgdW5tYXRjaCBjYWxsYmFja3MsIGRlcGVuZGluZyBvbiBhdmFpbGFiaWxpdHkuXG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKi9cbiAgICBkZXN0cm95IDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5kZXN0cm95ID8gdGhpcy5vcHRpb25zLmRlc3Ryb3koKSA6IHRoaXMub2ZmKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIGRldGVybWluZXMgZXF1YWxpdHkgYnkgcmVmZXJlbmNlLlxuICAgICAqIGlmIG9iamVjdCBpcyBzdXBwbGllZCBjb21wYXJlIG9wdGlvbnMsIGlmIGZ1bmN0aW9uLCBjb21wYXJlIG1hdGNoIGNhbGxiYWNrXG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge29iamVjdCB8fCBmdW5jdGlvbn0gW3RhcmdldF0gdGhlIHRhcmdldCBmb3IgY29tcGFyaXNvblxuICAgICAqL1xuICAgIGVxdWFscyA6IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zID09PSB0YXJnZXQgfHwgdGhpcy5vcHRpb25zLm1hdGNoID09PSB0YXJnZXQ7XG4gICAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFF1ZXJ5SGFuZGxlcjtcbiIsIi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIGZvciBpdGVyYXRpbmcgb3ZlciBhIGNvbGxlY3Rpb25cbiAqXG4gKiBAcGFyYW0gY29sbGVjdGlvblxuICogQHBhcmFtIGZuXG4gKi9cbmZ1bmN0aW9uIGVhY2goY29sbGVjdGlvbiwgZm4pIHtcbiAgICB2YXIgaSAgICAgID0gMCxcbiAgICAgICAgbGVuZ3RoID0gY29sbGVjdGlvbi5sZW5ndGgsXG4gICAgICAgIGNvbnQ7XG5cbiAgICBmb3IoaTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnQgPSBmbihjb2xsZWN0aW9uW2ldLCBpKTtcbiAgICAgICAgaWYoY29udCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGJyZWFrOyAvL2FsbG93IGVhcmx5IGV4aXRcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gZm9yIGRldGVybWluaW5nIHdoZXRoZXIgdGFyZ2V0IG9iamVjdCBpcyBhbiBhcnJheVxuICpcbiAqIEBwYXJhbSB0YXJnZXQgdGhlIG9iamVjdCB1bmRlciB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGFycmF5LCBmYWxzZSBvdGhlcndpc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5hcHBseSh0YXJnZXQpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiBmb3IgZGV0ZXJtaW5pbmcgd2hldGhlciB0YXJnZXQgb2JqZWN0IGlzIGEgZnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0gdGFyZ2V0IHRoZSBvYmplY3QgdW5kZXIgdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBmdW5jdGlvbiwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbic7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGlzRnVuY3Rpb24gOiBpc0Z1bmN0aW9uLFxuICAgIGlzQXJyYXkgOiBpc0FycmF5LFxuICAgIGVhY2ggOiBlYWNoXG59O1xuIiwidmFyIE1lZGlhUXVlcnlEaXNwYXRjaCA9IHJlcXVpcmUoJy4vTWVkaWFRdWVyeURpc3BhdGNoJyk7XG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBNZWRpYVF1ZXJ5RGlzcGF0Y2goKTtcbiIsIi8qKlxuICogbG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9qcXVlcnkub3JnLz5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqL1xuXG4vKiogVXNlZCBhcyB0aGUgYFR5cGVFcnJvcmAgbWVzc2FnZSBmb3IgXCJGdW5jdGlvbnNcIiBtZXRob2RzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTkFOID0gMCAvIDA7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZS4gKi9cbnZhciByZVRyaW0gPSAvXlxccyt8XFxzKyQvZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJhZCBzaWduZWQgaGV4YWRlY2ltYWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmFkSGV4ID0gL15bLStdMHhbMC05YS1mXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiaW5hcnkgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmluYXJ5ID0gL14wYlswMV0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb2N0YWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzT2N0YWwgPSAvXjBvWzAtN10rJC9pO1xuXG4vKiogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgd2l0aG91dCBhIGRlcGVuZGVuY3kgb24gYHJvb3RgLiAqL1xudmFyIGZyZWVQYXJzZUludCA9IHBhcnNlSW50O1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXgsXG4gICAgbmF0aXZlTWluID0gTWF0aC5taW47XG5cbi8qKlxuICogR2V0cyB0aGUgdGltZXN0YW1wIG9mIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgaGF2ZSBlbGFwc2VkIHNpbmNlXG4gKiB0aGUgVW5peCBlcG9jaCAoMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgRGF0ZVxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgdGltZXN0YW1wLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmRlZmVyKGZ1bmN0aW9uKHN0YW1wKSB7XG4gKiAgIGNvbnNvbGUubG9nKF8ubm93KCkgLSBzdGFtcCk7XG4gKiB9LCBfLm5vdygpKTtcbiAqIC8vID0+IExvZ3MgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaXQgdG9vayBmb3IgdGhlIGRlZmVycmVkIGludm9jYXRpb24uXG4gKi9cbnZhciBub3cgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJvb3QuRGF0ZS5ub3coKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGRlYm91bmNlZCBmdW5jdGlvbiB0aGF0IGRlbGF5cyBpbnZva2luZyBgZnVuY2AgdW50aWwgYWZ0ZXIgYHdhaXRgXG4gKiBtaWxsaXNlY29uZHMgaGF2ZSBlbGFwc2VkIHNpbmNlIHRoZSBsYXN0IHRpbWUgdGhlIGRlYm91bmNlZCBmdW5jdGlvbiB3YXNcbiAqIGludm9rZWQuIFRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgIG1ldGhvZCB0byBjYW5jZWxcbiAqIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLlxuICogUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2Agc2hvdWxkIGJlIGludm9rZWQgb24gdGhlXG4gKiBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGAgdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkXG4gKiB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50XG4gKiBjYWxscyB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHJldHVybiB0aGUgcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYFxuICogaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIGRlYm91bmNlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy5kZWJvdW5jZWAgYW5kIGBfLnRocm90dGxlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRlYm91bmNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIGRlbGF5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9ZmFsc2VdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heFdhaXRdXG4gKiAgVGhlIG1heGltdW0gdGltZSBgZnVuY2AgaXMgYWxsb3dlZCB0byBiZSBkZWxheWVkIGJlZm9yZSBpdCdzIGludm9rZWQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGRlYm91bmNlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgY29zdGx5IGNhbGN1bGF0aW9ucyB3aGlsZSB0aGUgd2luZG93IHNpemUgaXMgaW4gZmx1eC5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdyZXNpemUnLCBfLmRlYm91bmNlKGNhbGN1bGF0ZUxheW91dCwgMTUwKSk7XG4gKlxuICogLy8gSW52b2tlIGBzZW5kTWFpbGAgd2hlbiBjbGlja2VkLCBkZWJvdW5jaW5nIHN1YnNlcXVlbnQgY2FsbHMuXG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgXy5kZWJvdW5jZShzZW5kTWFpbCwgMzAwLCB7XG4gKiAgICdsZWFkaW5nJzogdHJ1ZSxcbiAqICAgJ3RyYWlsaW5nJzogZmFsc2VcbiAqIH0pKTtcbiAqXG4gKiAvLyBFbnN1cmUgYGJhdGNoTG9nYCBpcyBpbnZva2VkIG9uY2UgYWZ0ZXIgMSBzZWNvbmQgb2YgZGVib3VuY2VkIGNhbGxzLlxuICogdmFyIGRlYm91bmNlZCA9IF8uZGVib3VuY2UoYmF0Y2hMb2csIDI1MCwgeyAnbWF4V2FpdCc6IDEwMDAgfSk7XG4gKiB2YXIgc291cmNlID0gbmV3IEV2ZW50U291cmNlKCcvc3RyZWFtJyk7XG4gKiBqUXVlcnkoc291cmNlKS5vbignbWVzc2FnZScsIGRlYm91bmNlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyBkZWJvdW5jZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIGRlYm91bmNlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsYXN0QXJncyxcbiAgICAgIGxhc3RUaGlzLFxuICAgICAgbWF4V2FpdCxcbiAgICAgIHJlc3VsdCxcbiAgICAgIHRpbWVySWQsXG4gICAgICBsYXN0Q2FsbFRpbWUsXG4gICAgICBsYXN0SW52b2tlVGltZSA9IDAsXG4gICAgICBsZWFkaW5nID0gZmFsc2UsXG4gICAgICBtYXhpbmcgPSBmYWxzZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB3YWl0ID0gdG9OdW1iZXIod2FpdCkgfHwgMDtcbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICEhb3B0aW9ucy5sZWFkaW5nO1xuICAgIG1heGluZyA9ICdtYXhXYWl0JyBpbiBvcHRpb25zO1xuICAgIG1heFdhaXQgPSBtYXhpbmcgPyBuYXRpdmVNYXgodG9OdW1iZXIob3B0aW9ucy5tYXhXYWl0KSB8fCAwLCB3YWl0KSA6IG1heFdhaXQ7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIGludm9rZUZ1bmModGltZSkge1xuICAgIHZhciBhcmdzID0gbGFzdEFyZ3MsXG4gICAgICAgIHRoaXNBcmcgPSBsYXN0VGhpcztcblxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxlYWRpbmdFZGdlKHRpbWUpIHtcbiAgICAvLyBSZXNldCBhbnkgYG1heFdhaXRgIHRpbWVyLlxuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICAvLyBTdGFydCB0aGUgdGltZXIgZm9yIHRoZSB0cmFpbGluZyBlZGdlLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgLy8gSW52b2tlIHRoZSBsZWFkaW5nIGVkZ2UuXG4gICAgcmV0dXJuIGxlYWRpbmcgPyBpbnZva2VGdW5jKHRpbWUpIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtYWluaW5nV2FpdCh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZSxcbiAgICAgICAgcmVzdWx0ID0gd2FpdCAtIHRpbWVTaW5jZUxhc3RDYWxsO1xuXG4gICAgcmV0dXJuIG1heGluZyA/IG5hdGl2ZU1pbihyZXN1bHQsIG1heFdhaXQgLSB0aW1lU2luY2VMYXN0SW52b2tlKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZEludm9rZSh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZTtcblxuICAgIC8vIEVpdGhlciB0aGlzIGlzIHRoZSBmaXJzdCBjYWxsLCBhY3Rpdml0eSBoYXMgc3RvcHBlZCBhbmQgd2UncmUgYXQgdGhlXG4gICAgLy8gdHJhaWxpbmcgZWRnZSwgdGhlIHN5c3RlbSB0aW1lIGhhcyBnb25lIGJhY2t3YXJkcyBhbmQgd2UncmUgdHJlYXRpbmdcbiAgICAvLyBpdCBhcyB0aGUgdHJhaWxpbmcgZWRnZSwgb3Igd2UndmUgaGl0IHRoZSBgbWF4V2FpdGAgbGltaXQuXG4gICAgcmV0dXJuIChsYXN0Q2FsbFRpbWUgPT09IHVuZGVmaW5lZCB8fCAodGltZVNpbmNlTGFzdENhbGwgPj0gd2FpdCkgfHxcbiAgICAgICh0aW1lU2luY2VMYXN0Q2FsbCA8IDApIHx8IChtYXhpbmcgJiYgdGltZVNpbmNlTGFzdEludm9rZSA+PSBtYXhXYWl0KSk7XG4gIH1cblxuICBmdW5jdGlvbiB0aW1lckV4cGlyZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKTtcbiAgICBpZiAoc2hvdWxkSW52b2tlKHRpbWUpKSB7XG4gICAgICByZXR1cm4gdHJhaWxpbmdFZGdlKHRpbWUpO1xuICAgIH1cbiAgICAvLyBSZXN0YXJ0IHRoZSB0aW1lci5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHJlbWFpbmluZ1dhaXQodGltZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhaWxpbmdFZGdlKHRpbWUpIHtcbiAgICB0aW1lcklkID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gT25seSBpbnZva2UgaWYgd2UgaGF2ZSBgbGFzdEFyZ3NgIHdoaWNoIG1lYW5zIGBmdW5jYCBoYXMgYmVlblxuICAgIC8vIGRlYm91bmNlZCBhdCBsZWFzdCBvbmNlLlxuICAgIGlmICh0cmFpbGluZyAmJiBsYXN0QXJncykge1xuICAgICAgcmV0dXJuIGludm9rZUZ1bmModGltZSk7XG4gICAgfVxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBpZiAodGltZXJJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgfVxuICAgIGxhc3RJbnZva2VUaW1lID0gMDtcbiAgICBsYXN0QXJncyA9IGxhc3RDYWxsVGltZSA9IGxhc3RUaGlzID0gdGltZXJJZCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHJldHVybiB0aW1lcklkID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiB0cmFpbGluZ0VkZ2Uobm93KCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVib3VuY2VkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCksXG4gICAgICAgIGlzSW52b2tpbmcgPSBzaG91bGRJbnZva2UodGltZSk7XG5cbiAgICBsYXN0QXJncyA9IGFyZ3VtZW50cztcbiAgICBsYXN0VGhpcyA9IHRoaXM7XG4gICAgbGFzdENhbGxUaW1lID0gdGltZTtcblxuICAgIGlmIChpc0ludm9raW5nKSB7XG4gICAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBsZWFkaW5nRWRnZShsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgICAgaWYgKG1heGluZykge1xuICAgICAgICAvLyBIYW5kbGUgaW52b2NhdGlvbnMgaW4gYSB0aWdodCBsb29wLlxuICAgICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgICAgICByZXR1cm4gaW52b2tlRnVuYyhsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGRlYm91bmNlZC5jYW5jZWwgPSBjYW5jZWw7XG4gIGRlYm91bmNlZC5mbHVzaCA9IGZsdXNoO1xuICByZXR1cm4gZGVib3VuY2VkO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIG51bWJlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIG51bWJlci5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b051bWJlcigzLjIpO1xuICogLy8gPT4gMy4yXG4gKlxuICogXy50b051bWJlcihOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IDVlLTMyNFxuICpcbiAqIF8udG9OdW1iZXIoSW5maW5pdHkpO1xuICogLy8gPT4gSW5maW5pdHlcbiAqXG4gKiBfLnRvTnVtYmVyKCczLjInKTtcbiAqIC8vID0+IDMuMlxuICovXG5mdW5jdGlvbiB0b051bWJlcih2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gTkFOO1xuICB9XG4gIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB2YXIgb3RoZXIgPSB0eXBlb2YgdmFsdWUudmFsdWVPZiA9PSAnZnVuY3Rpb24nID8gdmFsdWUudmFsdWVPZigpIDogdmFsdWU7XG4gICAgdmFsdWUgPSBpc09iamVjdChvdGhlcikgPyAob3RoZXIgKyAnJykgOiBvdGhlcjtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAwID8gdmFsdWUgOiArdmFsdWU7XG4gIH1cbiAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKHJlVHJpbSwgJycpO1xuICB2YXIgaXNCaW5hcnkgPSByZUlzQmluYXJ5LnRlc3QodmFsdWUpO1xuICByZXR1cm4gKGlzQmluYXJ5IHx8IHJlSXNPY3RhbC50ZXN0KHZhbHVlKSlcbiAgICA/IGZyZWVQYXJzZUludCh2YWx1ZS5zbGljZSgyKSwgaXNCaW5hcnkgPyAyIDogOClcbiAgICA6IChyZUlzQmFkSGV4LnRlc3QodmFsdWUpID8gTkFOIDogK3ZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWJvdW5jZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5OZXh0QXJyb3cgPSBleHBvcnRzLlByZXZBcnJvdyA9IHZvaWQgMDtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfaW5uZXJTbGlkZXJVdGlscyA9IHJlcXVpcmUoXCIuL3V0aWxzL2lubmVyU2xpZGVyVXRpbHNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG52YXIgUHJldkFycm93ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkUHVyZUNvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoUHJldkFycm93LCBfUmVhY3QkUHVyZUNvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihQcmV2QXJyb3cpO1xuXG4gIGZ1bmN0aW9uIFByZXZBcnJvdygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUHJldkFycm93KTtcblxuICAgIHJldHVybiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhQcmV2QXJyb3csIFt7XG4gICAga2V5OiBcImNsaWNrSGFuZGxlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbGlja0hhbmRsZXIob3B0aW9ucywgZSkge1xuICAgICAgaWYgKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnByb3BzLmNsaWNrSGFuZGxlcihvcHRpb25zLCBlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBwcmV2Q2xhc3NlcyA9IHtcbiAgICAgICAgXCJzbGljay1hcnJvd1wiOiB0cnVlLFxuICAgICAgICBcInNsaWNrLXByZXZcIjogdHJ1ZVxuICAgICAgfTtcbiAgICAgIHZhciBwcmV2SGFuZGxlciA9IHRoaXMuY2xpY2tIYW5kbGVyLmJpbmQodGhpcywge1xuICAgICAgICBtZXNzYWdlOiBcInByZXZpb3VzXCJcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIXRoaXMucHJvcHMuaW5maW5pdGUgJiYgKHRoaXMucHJvcHMuY3VycmVudFNsaWRlID09PSAwIHx8IHRoaXMucHJvcHMuc2xpZGVDb3VudCA8PSB0aGlzLnByb3BzLnNsaWRlc1RvU2hvdykpIHtcbiAgICAgICAgcHJldkNsYXNzZXNbXCJzbGljay1kaXNhYmxlZFwiXSA9IHRydWU7XG4gICAgICAgIHByZXZIYW5kbGVyID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHByZXZBcnJvd1Byb3BzID0ge1xuICAgICAgICBrZXk6IFwiMFwiLFxuICAgICAgICBcImRhdGEtcm9sZVwiOiBcIm5vbmVcIixcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShwcmV2Q2xhc3NlcyksXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiXG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2xpY2s6IHByZXZIYW5kbGVyXG4gICAgICB9O1xuICAgICAgdmFyIGN1c3RvbVByb3BzID0ge1xuICAgICAgICBjdXJyZW50U2xpZGU6IHRoaXMucHJvcHMuY3VycmVudFNsaWRlLFxuICAgICAgICBzbGlkZUNvdW50OiB0aGlzLnByb3BzLnNsaWRlQ291bnRcbiAgICAgIH07XG4gICAgICB2YXIgcHJldkFycm93O1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5wcmV2QXJyb3cpIHtcbiAgICAgICAgcHJldkFycm93ID0gLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY2xvbmVFbGVtZW50KHRoaXMucHJvcHMucHJldkFycm93LCBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHByZXZBcnJvd1Byb3BzKSwgY3VzdG9tUHJvcHMpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByZXZBcnJvdyA9IC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgX2V4dGVuZHMoe1xuICAgICAgICAgIGtleTogXCIwXCIsXG4gICAgICAgICAgdHlwZTogXCJidXR0b25cIlxuICAgICAgICB9LCBwcmV2QXJyb3dQcm9wcyksIFwiIFwiLCBcIlByZXZpb3VzXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldkFycm93O1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBQcmV2QXJyb3c7XG59KF9yZWFjdFtcImRlZmF1bHRcIl0uUHVyZUNvbXBvbmVudCk7XG5cbmV4cG9ydHMuUHJldkFycm93ID0gUHJldkFycm93O1xuXG52YXIgTmV4dEFycm93ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkUHVyZUNvbXBvbmVudDIpIHtcbiAgX2luaGVyaXRzKE5leHRBcnJvdywgX1JlYWN0JFB1cmVDb21wb25lbnQyKTtcblxuICB2YXIgX3N1cGVyMiA9IF9jcmVhdGVTdXBlcihOZXh0QXJyb3cpO1xuXG4gIGZ1bmN0aW9uIE5leHRBcnJvdygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTmV4dEFycm93KTtcblxuICAgIHJldHVybiBfc3VwZXIyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTmV4dEFycm93LCBbe1xuICAgIGtleTogXCJjbGlja0hhbmRsZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2xpY2tIYW5kbGVyKG9wdGlvbnMsIGUpIHtcbiAgICAgIGlmIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5wcm9wcy5jbGlja0hhbmRsZXIob3B0aW9ucywgZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgbmV4dENsYXNzZXMgPSB7XG4gICAgICAgIFwic2xpY2stYXJyb3dcIjogdHJ1ZSxcbiAgICAgICAgXCJzbGljay1uZXh0XCI6IHRydWVcbiAgICAgIH07XG4gICAgICB2YXIgbmV4dEhhbmRsZXIgPSB0aGlzLmNsaWNrSGFuZGxlci5iaW5kKHRoaXMsIHtcbiAgICAgICAgbWVzc2FnZTogXCJuZXh0XCJcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoISgwLCBfaW5uZXJTbGlkZXJVdGlscy5jYW5Hb05leHQpKHRoaXMucHJvcHMpKSB7XG4gICAgICAgIG5leHRDbGFzc2VzW1wic2xpY2stZGlzYWJsZWRcIl0gPSB0cnVlO1xuICAgICAgICBuZXh0SGFuZGxlciA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciBuZXh0QXJyb3dQcm9wcyA9IHtcbiAgICAgICAga2V5OiBcIjFcIixcbiAgICAgICAgXCJkYXRhLXJvbGVcIjogXCJub25lXCIsXG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkobmV4dENsYXNzZXMpLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIlxuICAgICAgICB9LFxuICAgICAgICBvbkNsaWNrOiBuZXh0SGFuZGxlclxuICAgICAgfTtcbiAgICAgIHZhciBjdXN0b21Qcm9wcyA9IHtcbiAgICAgICAgY3VycmVudFNsaWRlOiB0aGlzLnByb3BzLmN1cnJlbnRTbGlkZSxcbiAgICAgICAgc2xpZGVDb3VudDogdGhpcy5wcm9wcy5zbGlkZUNvdW50XG4gICAgICB9O1xuICAgICAgdmFyIG5leHRBcnJvdztcblxuICAgICAgaWYgKHRoaXMucHJvcHMubmV4dEFycm93KSB7XG4gICAgICAgIG5leHRBcnJvdyA9IC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNsb25lRWxlbWVudCh0aGlzLnByb3BzLm5leHRBcnJvdywgX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBuZXh0QXJyb3dQcm9wcyksIGN1c3RvbVByb3BzKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXh0QXJyb3cgPSAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIF9leHRlbmRzKHtcbiAgICAgICAgICBrZXk6IFwiMVwiLFxuICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCJcbiAgICAgICAgfSwgbmV4dEFycm93UHJvcHMpLCBcIiBcIiwgXCJOZXh0XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV4dEFycm93O1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBOZXh0QXJyb3c7XG59KF9yZWFjdFtcImRlZmF1bHRcIl0uUHVyZUNvbXBvbmVudCk7XG5cbmV4cG9ydHMuTmV4dEFycm93ID0gTmV4dEFycm93OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBhY2Nlc3NpYmlsaXR5OiB0cnVlLFxuICBhZGFwdGl2ZUhlaWdodDogZmFsc2UsXG4gIGFmdGVyQ2hhbmdlOiBudWxsLFxuICBhcHBlbmREb3RzOiBmdW5jdGlvbiBhcHBlbmREb3RzKGRvdHMpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcInVsXCIsIHtcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIlxuICAgICAgfVxuICAgIH0sIGRvdHMpO1xuICB9LFxuICBhcnJvd3M6IHRydWUsXG4gIGF1dG9wbGF5OiBmYWxzZSxcbiAgYXV0b3BsYXlTcGVlZDogMzAwMCxcbiAgYmVmb3JlQ2hhbmdlOiBudWxsLFxuICBjZW50ZXJNb2RlOiBmYWxzZSxcbiAgY2VudGVyUGFkZGluZzogXCI1MHB4XCIsXG4gIGNsYXNzTmFtZTogXCJcIixcbiAgY3NzRWFzZTogXCJlYXNlXCIsXG4gIGN1c3RvbVBhZ2luZzogZnVuY3Rpb24gY3VzdG9tUGFnaW5nKGkpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBudWxsLCBpICsgMSk7XG4gIH0sXG4gIGRvdHM6IGZhbHNlLFxuICBkb3RzQ2xhc3M6IFwic2xpY2stZG90c1wiLFxuICBkcmFnZ2FibGU6IHRydWUsXG4gIGVhc2luZzogXCJsaW5lYXJcIixcbiAgZWRnZUZyaWN0aW9uOiAwLjM1LFxuICBmYWRlOiBmYWxzZSxcbiAgZm9jdXNPblNlbGVjdDogZmFsc2UsXG4gIGluZmluaXRlOiB0cnVlLFxuICBpbml0aWFsU2xpZGU6IDAsXG4gIGxhenlMb2FkOiBudWxsLFxuICBuZXh0QXJyb3c6IG51bGwsXG4gIG9uRWRnZTogbnVsbCxcbiAgb25Jbml0OiBudWxsLFxuICBvbkxhenlMb2FkRXJyb3I6IG51bGwsXG4gIG9uUmVJbml0OiBudWxsLFxuICBwYXVzZU9uRG90c0hvdmVyOiBmYWxzZSxcbiAgcGF1c2VPbkZvY3VzOiBmYWxzZSxcbiAgcGF1c2VPbkhvdmVyOiB0cnVlLFxuICBwcmV2QXJyb3c6IG51bGwsXG4gIHJlc3BvbnNpdmU6IG51bGwsXG4gIHJvd3M6IDEsXG4gIHJ0bDogZmFsc2UsXG4gIHNsaWRlOiBcImRpdlwiLFxuICBzbGlkZXNQZXJSb3c6IDEsXG4gIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICBzbGlkZXNUb1Nob3c6IDEsXG4gIHNwZWVkOiA1MDAsXG4gIHN3aXBlOiB0cnVlLFxuICBzd2lwZUV2ZW50OiBudWxsLFxuICBzd2lwZVRvU2xpZGU6IGZhbHNlLFxuICB0b3VjaE1vdmU6IHRydWUsXG4gIHRvdWNoVGhyZXNob2xkOiA1LFxuICB1c2VDU1M6IHRydWUsXG4gIHVzZVRyYW5zZm9ybTogdHJ1ZSxcbiAgdmFyaWFibGVXaWR0aDogZmFsc2UsXG4gIHZlcnRpY2FsOiBmYWxzZSxcbiAgd2FpdEZvckFuaW1hdGU6IHRydWVcbn07XG52YXIgX2RlZmF1bHQgPSBkZWZhdWx0UHJvcHM7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5Eb3RzID0gdm9pZCAwO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9pbm5lclNsaWRlclV0aWxzID0gcmVxdWlyZShcIi4vdXRpbHMvaW5uZXJTbGlkZXJVdGlsc1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbnZhciBnZXREb3RDb3VudCA9IGZ1bmN0aW9uIGdldERvdENvdW50KHNwZWMpIHtcbiAgdmFyIGRvdHM7XG5cbiAgaWYgKHNwZWMuaW5maW5pdGUpIHtcbiAgICBkb3RzID0gTWF0aC5jZWlsKHNwZWMuc2xpZGVDb3VudCAvIHNwZWMuc2xpZGVzVG9TY3JvbGwpO1xuICB9IGVsc2Uge1xuICAgIGRvdHMgPSBNYXRoLmNlaWwoKHNwZWMuc2xpZGVDb3VudCAtIHNwZWMuc2xpZGVzVG9TaG93KSAvIHNwZWMuc2xpZGVzVG9TY3JvbGwpICsgMTtcbiAgfVxuXG4gIHJldHVybiBkb3RzO1xufTtcblxudmFyIERvdHMgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRQdXJlQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhEb3RzLCBfUmVhY3QkUHVyZUNvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihEb3RzKTtcblxuICBmdW5jdGlvbiBEb3RzKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEb3RzKTtcblxuICAgIHJldHVybiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhEb3RzLCBbe1xuICAgIGtleTogXCJjbGlja0hhbmRsZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2xpY2tIYW5kbGVyKG9wdGlvbnMsIGUpIHtcbiAgICAgIC8vIEluIEF1dG9wbGF5IHRoZSBmb2N1cyBzdGF5cyBvbiBjbGlja2VkIGJ1dHRvbiBldmVuIGFmdGVyIHRyYW5zaXRpb25cbiAgICAgIC8vIHRvIG5leHQgc2xpZGUuIFRoYXQgb25seSBnb2VzIGF3YXkgYnkgY2xpY2sgc29tZXdoZXJlIG91dHNpZGVcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMucHJvcHMuY2xpY2tIYW5kbGVyKG9wdGlvbnMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBvbk1vdXNlRW50ZXIgPSBfdGhpcyRwcm9wcy5vbk1vdXNlRW50ZXIsXG4gICAgICAgICAgb25Nb3VzZU92ZXIgPSBfdGhpcyRwcm9wcy5vbk1vdXNlT3ZlcixcbiAgICAgICAgICBvbk1vdXNlTGVhdmUgPSBfdGhpcyRwcm9wcy5vbk1vdXNlTGVhdmUsXG4gICAgICAgICAgaW5maW5pdGUgPSBfdGhpcyRwcm9wcy5pbmZpbml0ZSxcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbCA9IF90aGlzJHByb3BzLnNsaWRlc1RvU2Nyb2xsLFxuICAgICAgICAgIHNsaWRlc1RvU2hvdyA9IF90aGlzJHByb3BzLnNsaWRlc1RvU2hvdyxcbiAgICAgICAgICBzbGlkZUNvdW50ID0gX3RoaXMkcHJvcHMuc2xpZGVDb3VudCxcbiAgICAgICAgICBjdXJyZW50U2xpZGUgPSBfdGhpcyRwcm9wcy5jdXJyZW50U2xpZGU7XG4gICAgICB2YXIgZG90Q291bnQgPSBnZXREb3RDb3VudCh7XG4gICAgICAgIHNsaWRlQ291bnQ6IHNsaWRlQ291bnQsXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiBzbGlkZXNUb1Njcm9sbCxcbiAgICAgICAgc2xpZGVzVG9TaG93OiBzbGlkZXNUb1Nob3csXG4gICAgICAgIGluZmluaXRlOiBpbmZpbml0ZVxuICAgICAgfSk7XG4gICAgICB2YXIgbW91c2VFdmVudHMgPSB7XG4gICAgICAgIG9uTW91c2VFbnRlcjogb25Nb3VzZUVudGVyLFxuICAgICAgICBvbk1vdXNlT3Zlcjogb25Nb3VzZU92ZXIsXG4gICAgICAgIG9uTW91c2VMZWF2ZTogb25Nb3VzZUxlYXZlXG4gICAgICB9O1xuICAgICAgdmFyIGRvdHMgPSBbXTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkb3RDb3VudDsgaSsrKSB7XG4gICAgICAgIHZhciBfcmlnaHRCb3VuZCA9IChpICsgMSkgKiBzbGlkZXNUb1Njcm9sbCAtIDE7XG5cbiAgICAgICAgdmFyIHJpZ2h0Qm91bmQgPSBpbmZpbml0ZSA/IF9yaWdodEJvdW5kIDogKDAsIF9pbm5lclNsaWRlclV0aWxzLmNsYW1wKShfcmlnaHRCb3VuZCwgMCwgc2xpZGVDb3VudCAtIDEpO1xuXG4gICAgICAgIHZhciBfbGVmdEJvdW5kID0gcmlnaHRCb3VuZCAtIChzbGlkZXNUb1Njcm9sbCAtIDEpO1xuXG4gICAgICAgIHZhciBsZWZ0Qm91bmQgPSBpbmZpbml0ZSA/IF9sZWZ0Qm91bmQgOiAoMCwgX2lubmVyU2xpZGVyVXRpbHMuY2xhbXApKF9sZWZ0Qm91bmQsIDAsIHNsaWRlQ291bnQgLSAxKTtcbiAgICAgICAgdmFyIGNsYXNzTmFtZSA9ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKHtcbiAgICAgICAgICBcInNsaWNrLWFjdGl2ZVwiOiBpbmZpbml0ZSA/IGN1cnJlbnRTbGlkZSA+PSBsZWZ0Qm91bmQgJiYgY3VycmVudFNsaWRlIDw9IHJpZ2h0Qm91bmQgOiBjdXJyZW50U2xpZGUgPT09IGxlZnRCb3VuZFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGRvdE9wdGlvbnMgPSB7XG4gICAgICAgICAgbWVzc2FnZTogXCJkb3RzXCIsXG4gICAgICAgICAgaW5kZXg6IGksXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IHNsaWRlc1RvU2Nyb2xsLFxuICAgICAgICAgIGN1cnJlbnRTbGlkZTogY3VycmVudFNsaWRlXG4gICAgICAgIH07XG4gICAgICAgIHZhciBvbkNsaWNrID0gdGhpcy5jbGlja0hhbmRsZXIuYmluZCh0aGlzLCBkb3RPcHRpb25zKTtcbiAgICAgICAgZG90cyA9IGRvdHMuY29uY2F0KCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwibGlcIiwge1xuICAgICAgICAgIGtleTogaSxcbiAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZVxuICAgICAgICB9LCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jbG9uZUVsZW1lbnQodGhpcy5wcm9wcy5jdXN0b21QYWdpbmcoaSksIHtcbiAgICAgICAgICBvbkNsaWNrOiBvbkNsaWNrXG4gICAgICAgIH0pKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jbG9uZUVsZW1lbnQodGhpcy5wcm9wcy5hcHBlbmREb3RzKGRvdHMpLCBfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmRvdHNDbGFzc1xuICAgICAgfSwgbW91c2VFdmVudHMpKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRG90cztcbn0oX3JlYWN0W1wiZGVmYXVsdFwiXS5QdXJlQ29tcG9uZW50KTtcblxuZXhwb3J0cy5Eb3RzID0gRG90czsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX3NsaWRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc2xpZGVyXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBfZGVmYXVsdCA9IF9zbGlkZXJbXCJkZWZhdWx0XCJdO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIGluaXRpYWxTdGF0ZSA9IHtcbiAgYW5pbWF0aW5nOiBmYWxzZSxcbiAgYXV0b3BsYXlpbmc6IG51bGwsXG4gIGN1cnJlbnREaXJlY3Rpb246IDAsXG4gIGN1cnJlbnRMZWZ0OiBudWxsLFxuICBjdXJyZW50U2xpZGU6IDAsXG4gIGRpcmVjdGlvbjogMSxcbiAgZHJhZ2dpbmc6IGZhbHNlLFxuICBlZGdlRHJhZ2dlZDogZmFsc2UsXG4gIGluaXRpYWxpemVkOiBmYWxzZSxcbiAgbGF6eUxvYWRlZExpc3Q6IFtdLFxuICBsaXN0SGVpZ2h0OiBudWxsLFxuICBsaXN0V2lkdGg6IG51bGwsXG4gIHNjcm9sbGluZzogZmFsc2UsXG4gIHNsaWRlQ291bnQ6IG51bGwsXG4gIHNsaWRlSGVpZ2h0OiBudWxsLFxuICBzbGlkZVdpZHRoOiBudWxsLFxuICBzd2lwZUxlZnQ6IG51bGwsXG4gIHN3aXBlZDogZmFsc2UsXG4gIC8vIHVzZWQgYnkgc3dpcGVFdmVudC4gZGlmZmVyZW50aXRlcyBiZXR3ZWVuIHRvdWNoIGFuZCBzd2lwZS5cbiAgc3dpcGluZzogZmFsc2UsXG4gIHRvdWNoT2JqZWN0OiB7XG4gICAgc3RhcnRYOiAwLFxuICAgIHN0YXJ0WTogMCxcbiAgICBjdXJYOiAwLFxuICAgIGN1clk6IDBcbiAgfSxcbiAgdHJhY2tTdHlsZToge30sXG4gIHRyYWNrV2lkdGg6IDAsXG4gIHRhcmdldFNsaWRlOiAwXG59O1xudmFyIF9kZWZhdWx0ID0gaW5pdGlhbFN0YXRlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuSW5uZXJTbGlkZXIgPSB2b2lkIDA7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfaW5pdGlhbFN0YXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9pbml0aWFsLXN0YXRlXCIpKTtcblxudmFyIF9sb2Rhc2ggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJsb2Rhc2guZGVib3VuY2VcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9pbm5lclNsaWRlclV0aWxzID0gcmVxdWlyZShcIi4vdXRpbHMvaW5uZXJTbGlkZXJVdGlsc1wiKTtcblxudmFyIF90cmFjayA9IHJlcXVpcmUoXCIuL3RyYWNrXCIpO1xuXG52YXIgX2RvdHMgPSByZXF1aXJlKFwiLi9kb3RzXCIpO1xuXG52YXIgX2Fycm93cyA9IHJlcXVpcmUoXCIuL2Fycm93c1wiKTtcblxudmFyIF9yZXNpemVPYnNlcnZlclBvbHlmaWxsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVzaXplLW9ic2VydmVyLXBvbHlmaWxsXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTsgdmFyIGtleSwgaTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSB7fTsgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyB2YXIga2V5LCBpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBJbm5lclNsaWRlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoSW5uZXJTbGlkZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoSW5uZXJTbGlkZXIpO1xuXG4gIGZ1bmN0aW9uIElubmVyU2xpZGVyKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIElubmVyU2xpZGVyKTtcblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImxpc3RSZWZIYW5kbGVyXCIsIGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgIHJldHVybiBfdGhpcy5saXN0ID0gcmVmO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInRyYWNrUmVmSGFuZGxlclwiLCBmdW5jdGlvbiAocmVmKSB7XG4gICAgICByZXR1cm4gX3RoaXMudHJhY2sgPSByZWY7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiYWRhcHRIZWlnaHRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLnByb3BzLmFkYXB0aXZlSGVpZ2h0ICYmIF90aGlzLmxpc3QpIHtcbiAgICAgICAgdmFyIGVsZW0gPSBfdGhpcy5saXN0LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1pbmRleD1cXFwiXCIuY29uY2F0KF90aGlzLnN0YXRlLmN1cnJlbnRTbGlkZSwgXCJcXFwiXVwiKSk7XG5cbiAgICAgICAgX3RoaXMubGlzdC5zdHlsZS5oZWlnaHQgPSAoMCwgX2lubmVyU2xpZGVyVXRpbHMuZ2V0SGVpZ2h0KShlbGVtKSArIFwicHhcIjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJjb21wb25lbnREaWRNb3VudFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5wcm9wcy5vbkluaXQgJiYgX3RoaXMucHJvcHMub25Jbml0KCk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5sYXp5TG9hZCkge1xuICAgICAgICB2YXIgc2xpZGVzVG9Mb2FkID0gKDAsIF9pbm5lclNsaWRlclV0aWxzLmdldE9uRGVtYW5kTGF6eVNsaWRlcykoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBfdGhpcy5wcm9wcyksIF90aGlzLnN0YXRlKSk7XG5cbiAgICAgICAgaWYgKHNsaWRlc1RvTG9hZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgX3RoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHByZXZTdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgbGF6eUxvYWRlZExpc3Q6IHByZXZTdGF0ZS5sYXp5TG9hZGVkTGlzdC5jb25jYXQoc2xpZGVzVG9Mb2FkKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkxhenlMb2FkKSB7XG4gICAgICAgICAgICBfdGhpcy5wcm9wcy5vbkxhenlMb2FkKHNsaWRlc1RvTG9hZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBzcGVjID0gX29iamVjdFNwcmVhZCh7XG4gICAgICAgIGxpc3RSZWY6IF90aGlzLmxpc3QsXG4gICAgICAgIHRyYWNrUmVmOiBfdGhpcy50cmFja1xuICAgICAgfSwgX3RoaXMucHJvcHMpO1xuXG4gICAgICBfdGhpcy51cGRhdGVTdGF0ZShzcGVjLCB0cnVlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLmFkYXB0SGVpZ2h0KCk7XG5cbiAgICAgICAgX3RoaXMucHJvcHMuYXV0b3BsYXkgJiYgX3RoaXMuYXV0b1BsYXkoXCJ1cGRhdGVcIik7XG4gICAgICB9KTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLmxhenlMb2FkID09PSBcInByb2dyZXNzaXZlXCIpIHtcbiAgICAgICAgX3RoaXMubGF6eUxvYWRUaW1lciA9IHNldEludGVydmFsKF90aGlzLnByb2dyZXNzaXZlTGF6eUxvYWQsIDEwMDApO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5ybyA9IG5ldyBfcmVzaXplT2JzZXJ2ZXJQb2x5ZmlsbFtcImRlZmF1bHRcIl0oZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoX3RoaXMuc3RhdGUuYW5pbWF0aW5nKSB7XG4gICAgICAgICAgX3RoaXMub25XaW5kb3dSZXNpemVkKGZhbHNlKTsgLy8gZG9uJ3Qgc2V0IHRyYWNrU3R5bGUgaGVuY2UgZG9uJ3QgYnJlYWsgYW5pbWF0aW9uXG5cblxuICAgICAgICAgIF90aGlzLmNhbGxiYWNrVGltZXJzLnB1c2goc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMub25XaW5kb3dSZXNpemVkKCk7XG4gICAgICAgICAgfSwgX3RoaXMucHJvcHMuc3BlZWQpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpcy5vbldpbmRvd1Jlc2l6ZWQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIF90aGlzLnJvLm9ic2VydmUoX3RoaXMubGlzdCk7XG5cbiAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zbGljay1zbGlkZVwiKSwgZnVuY3Rpb24gKHNsaWRlKSB7XG4gICAgICAgIHNsaWRlLm9uZm9jdXMgPSBfdGhpcy5wcm9wcy5wYXVzZU9uRm9jdXMgPyBfdGhpcy5vblNsaWRlRm9jdXMgOiBudWxsO1xuICAgICAgICBzbGlkZS5vbmJsdXIgPSBfdGhpcy5wcm9wcy5wYXVzZU9uRm9jdXMgPyBfdGhpcy5vblNsaWRlQmx1ciA6IG51bGw7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIF90aGlzLm9uV2luZG93UmVzaXplZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cuYXR0YWNoRXZlbnQoXCJvbnJlc2l6ZVwiLCBfdGhpcy5vbldpbmRvd1Jlc2l6ZWQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5hbmltYXRpb25FbmRDYWxsYmFjaykge1xuICAgICAgICBjbGVhclRpbWVvdXQoX3RoaXMuYW5pbWF0aW9uRW5kQ2FsbGJhY2spO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMubGF6eUxvYWRUaW1lcikge1xuICAgICAgICBjbGVhckludGVydmFsKF90aGlzLmxhenlMb2FkVGltZXIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMuY2FsbGJhY2tUaW1lcnMubGVuZ3RoKSB7XG4gICAgICAgIF90aGlzLmNhbGxiYWNrVGltZXJzLmZvckVhY2goZnVuY3Rpb24gKHRpbWVyKSB7XG4gICAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF90aGlzLmNhbGxiYWNrVGltZXJzID0gW107XG4gICAgICB9XG5cbiAgICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBfdGhpcy5vbldpbmRvd1Jlc2l6ZWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmRldGFjaEV2ZW50KFwib25yZXNpemVcIiwgX3RoaXMub25XaW5kb3dSZXNpemVkKTtcbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLmF1dG9wbGF5VGltZXIpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChfdGhpcy5hdXRvcGxheVRpbWVyKTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMucm8uZGlzY29ubmVjdCgpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImNvbXBvbmVudERpZFVwZGF0ZVwiLCBmdW5jdGlvbiAocHJldlByb3BzKSB7XG4gICAgICBfdGhpcy5jaGVja0ltYWdlc0xvYWQoKTtcblxuICAgICAgX3RoaXMucHJvcHMub25SZUluaXQgJiYgX3RoaXMucHJvcHMub25SZUluaXQoKTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLmxhenlMb2FkKSB7XG4gICAgICAgIHZhciBzbGlkZXNUb0xvYWQgPSAoMCwgX2lubmVyU2xpZGVyVXRpbHMuZ2V0T25EZW1hbmRMYXp5U2xpZGVzKShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIF90aGlzLnByb3BzKSwgX3RoaXMuc3RhdGUpKTtcblxuICAgICAgICBpZiAoc2xpZGVzVG9Mb2FkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBfdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAocHJldlN0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBsYXp5TG9hZGVkTGlzdDogcHJldlN0YXRlLmxhenlMb2FkZWRMaXN0LmNvbmNhdChzbGlkZXNUb0xvYWQpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKF90aGlzLnByb3BzLm9uTGF6eUxvYWQpIHtcbiAgICAgICAgICAgIF90aGlzLnByb3BzLm9uTGF6eUxvYWQoc2xpZGVzVG9Mb2FkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gLy8gaWYgKHRoaXMucHJvcHMub25MYXp5TG9hZCkge1xuICAgICAgLy8gICB0aGlzLnByb3BzLm9uTGF6eUxvYWQoW2xlZnRNb3N0U2xpZGVdKVxuICAgICAgLy8gfVxuXG5cbiAgICAgIF90aGlzLmFkYXB0SGVpZ2h0KCk7XG5cbiAgICAgIHZhciBzcGVjID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgbGlzdFJlZjogX3RoaXMubGlzdCxcbiAgICAgICAgdHJhY2tSZWY6IF90aGlzLnRyYWNrXG4gICAgICB9LCBfdGhpcy5wcm9wcyksIF90aGlzLnN0YXRlKTtcblxuICAgICAgdmFyIHNldFRyYWNrU3R5bGUgPSBfdGhpcy5kaWRQcm9wc0NoYW5nZShwcmV2UHJvcHMpO1xuXG4gICAgICBzZXRUcmFja1N0eWxlICYmIF90aGlzLnVwZGF0ZVN0YXRlKHNwZWMsIHNldFRyYWNrU3R5bGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKF90aGlzLnN0YXRlLmN1cnJlbnRTbGlkZSA+PSBfcmVhY3RbXCJkZWZhdWx0XCJdLkNoaWxkcmVuLmNvdW50KF90aGlzLnByb3BzLmNoaWxkcmVuKSkge1xuICAgICAgICAgIF90aGlzLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiaW5kZXhcIixcbiAgICAgICAgICAgIGluZGV4OiBfcmVhY3RbXCJkZWZhdWx0XCJdLkNoaWxkcmVuLmNvdW50KF90aGlzLnByb3BzLmNoaWxkcmVuKSAtIF90aGlzLnByb3BzLnNsaWRlc1RvU2hvdyxcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZTogX3RoaXMuc3RhdGUuY3VycmVudFNsaWRlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoX3RoaXMucHJvcHMuYXV0b3BsYXkpIHtcbiAgICAgICAgICBfdGhpcy5hdXRvUGxheShcInVwZGF0ZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpcy5wYXVzZShcInBhdXNlZFwiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25XaW5kb3dSZXNpemVkXCIsIGZ1bmN0aW9uIChzZXRUcmFja1N0eWxlKSB7XG4gICAgICBpZiAoX3RoaXMuZGVib3VuY2VkUmVzaXplKSBfdGhpcy5kZWJvdW5jZWRSZXNpemUuY2FuY2VsKCk7XG4gICAgICBfdGhpcy5kZWJvdW5jZWRSZXNpemUgPSAoMCwgX2xvZGFzaFtcImRlZmF1bHRcIl0pKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnJlc2l6ZVdpbmRvdyhzZXRUcmFja1N0eWxlKTtcbiAgICAgIH0sIDUwKTtcblxuICAgICAgX3RoaXMuZGVib3VuY2VkUmVzaXplKCk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicmVzaXplV2luZG93XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzZXRUcmFja1N0eWxlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB0cnVlO1xuICAgICAgdmFyIGlzVHJhY2tNb3VudGVkID0gQm9vbGVhbihfdGhpcy50cmFjayAmJiBfdGhpcy50cmFjay5ub2RlKTsgLy8gcHJldmVudCB3YXJuaW5nOiBzZXR0aW5nIHN0YXRlIG9uIHVubW91bnRlZCBjb21wb25lbnQgKHNlcnZlciBzaWRlIHJlbmRlcmluZylcblxuICAgICAgaWYgKCFpc1RyYWNrTW91bnRlZCkgcmV0dXJuO1xuXG4gICAgICB2YXIgc3BlYyA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7XG4gICAgICAgIGxpc3RSZWY6IF90aGlzLmxpc3QsXG4gICAgICAgIHRyYWNrUmVmOiBfdGhpcy50cmFja1xuICAgICAgfSwgX3RoaXMucHJvcHMpLCBfdGhpcy5zdGF0ZSk7XG5cbiAgICAgIF90aGlzLnVwZGF0ZVN0YXRlKHNwZWMsIHNldFRyYWNrU3R5bGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKF90aGlzLnByb3BzLmF1dG9wbGF5KSBfdGhpcy5hdXRvUGxheShcInVwZGF0ZVwiKTtlbHNlIF90aGlzLnBhdXNlKFwicGF1c2VkXCIpO1xuICAgICAgfSk7IC8vIGFuaW1hdGluZyBzdGF0ZSBzaG91bGQgYmUgY2xlYXJlZCB3aGlsZSByZXNpemluZywgb3RoZXJ3aXNlIGF1dG9wbGF5IHN0b3BzIHdvcmtpbmdcblxuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGFuaW1hdGluZzogZmFsc2VcbiAgICAgIH0pO1xuXG4gICAgICBjbGVhclRpbWVvdXQoX3RoaXMuYW5pbWF0aW9uRW5kQ2FsbGJhY2spO1xuICAgICAgZGVsZXRlIF90aGlzLmFuaW1hdGlvbkVuZENhbGxiYWNrO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInVwZGF0ZVN0YXRlXCIsIGZ1bmN0aW9uIChzcGVjLCBzZXRUcmFja1N0eWxlLCBjYWxsYmFjaykge1xuICAgICAgdmFyIHVwZGF0ZWRTdGF0ZSA9ICgwLCBfaW5uZXJTbGlkZXJVdGlscy5pbml0aWFsaXplZFN0YXRlKShzcGVjKTtcbiAgICAgIHNwZWMgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgc3BlYyksIHVwZGF0ZWRTdGF0ZSksIHt9LCB7XG4gICAgICAgIHNsaWRlSW5kZXg6IHVwZGF0ZWRTdGF0ZS5jdXJyZW50U2xpZGVcbiAgICAgIH0pO1xuICAgICAgdmFyIHRhcmdldExlZnQgPSAoMCwgX2lubmVyU2xpZGVyVXRpbHMuZ2V0VHJhY2tMZWZ0KShzcGVjKTtcbiAgICAgIHNwZWMgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHNwZWMpLCB7fSwge1xuICAgICAgICBsZWZ0OiB0YXJnZXRMZWZ0XG4gICAgICB9KTtcbiAgICAgIHZhciB0cmFja1N0eWxlID0gKDAsIF9pbm5lclNsaWRlclV0aWxzLmdldFRyYWNrQ1NTKShzcGVjKTtcblxuICAgICAgaWYgKHNldFRyYWNrU3R5bGUgfHwgX3JlYWN0W1wiZGVmYXVsdFwiXS5DaGlsZHJlbi5jb3VudChfdGhpcy5wcm9wcy5jaGlsZHJlbikgIT09IF9yZWFjdFtcImRlZmF1bHRcIl0uQ2hpbGRyZW4uY291bnQoc3BlYy5jaGlsZHJlbikpIHtcbiAgICAgICAgdXBkYXRlZFN0YXRlW1widHJhY2tTdHlsZVwiXSA9IHRyYWNrU3R5bGU7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHVwZGF0ZWRTdGF0ZSwgY2FsbGJhY2spO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInNzckluaXRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLnByb3BzLnZhcmlhYmxlV2lkdGgpIHtcbiAgICAgICAgdmFyIF90cmFja1dpZHRoID0gMCxcbiAgICAgICAgICAgIF90cmFja0xlZnQgPSAwO1xuICAgICAgICB2YXIgY2hpbGRyZW5XaWR0aHMgPSBbXTtcbiAgICAgICAgdmFyIHByZUNsb25lcyA9ICgwLCBfaW5uZXJTbGlkZXJVdGlscy5nZXRQcmVDbG9uZXMpKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBfdGhpcy5wcm9wcyksIF90aGlzLnN0YXRlKSwge30sIHtcbiAgICAgICAgICBzbGlkZUNvdW50OiBfdGhpcy5wcm9wcy5jaGlsZHJlbi5sZW5ndGhcbiAgICAgICAgfSkpO1xuICAgICAgICB2YXIgcG9zdENsb25lcyA9ICgwLCBfaW5uZXJTbGlkZXJVdGlscy5nZXRQb3N0Q2xvbmVzKShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgX3RoaXMucHJvcHMpLCBfdGhpcy5zdGF0ZSksIHt9LCB7XG4gICAgICAgICAgc2xpZGVDb3VudDogX3RoaXMucHJvcHMuY2hpbGRyZW4ubGVuZ3RoXG4gICAgICAgIH0pKTtcblxuICAgICAgICBfdGhpcy5wcm9wcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgIGNoaWxkcmVuV2lkdGhzLnB1c2goY2hpbGQucHJvcHMuc3R5bGUud2lkdGgpO1xuICAgICAgICAgIF90cmFja1dpZHRoICs9IGNoaWxkLnByb3BzLnN0eWxlLndpZHRoO1xuICAgICAgICB9KTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByZUNsb25lczsgaSsrKSB7XG4gICAgICAgICAgX3RyYWNrTGVmdCArPSBjaGlsZHJlbldpZHRoc1tjaGlsZHJlbldpZHRocy5sZW5ndGggLSAxIC0gaV07XG4gICAgICAgICAgX3RyYWNrV2lkdGggKz0gY2hpbGRyZW5XaWR0aHNbY2hpbGRyZW5XaWR0aHMubGVuZ3RoIC0gMSAtIGldO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHBvc3RDbG9uZXM7IF9pKyspIHtcbiAgICAgICAgICBfdHJhY2tXaWR0aCArPSBjaGlsZHJlbldpZHRoc1tfaV07XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBfdGhpcy5zdGF0ZS5jdXJyZW50U2xpZGU7IF9pMisrKSB7XG4gICAgICAgICAgX3RyYWNrTGVmdCArPSBjaGlsZHJlbldpZHRoc1tfaTJdO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF90cmFja1N0eWxlID0ge1xuICAgICAgICAgIHdpZHRoOiBfdHJhY2tXaWR0aCArIFwicHhcIixcbiAgICAgICAgICBsZWZ0OiAtX3RyYWNrTGVmdCArIFwicHhcIlxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChfdGhpcy5wcm9wcy5jZW50ZXJNb2RlKSB7XG4gICAgICAgICAgdmFyIGN1cnJlbnRXaWR0aCA9IFwiXCIuY29uY2F0KGNoaWxkcmVuV2lkdGhzW190aGlzLnN0YXRlLmN1cnJlbnRTbGlkZV0sIFwicHhcIik7XG4gICAgICAgICAgX3RyYWNrU3R5bGUubGVmdCA9IFwiY2FsYyhcIi5jb25jYXQoX3RyYWNrU3R5bGUubGVmdCwgXCIgKyAoMTAwJSAtIFwiKS5jb25jYXQoY3VycmVudFdpZHRoLCBcIikgLyAyICkgXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0cmFja1N0eWxlOiBfdHJhY2tTdHlsZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICB2YXIgY2hpbGRyZW5Db3VudCA9IF9yZWFjdFtcImRlZmF1bHRcIl0uQ2hpbGRyZW4uY291bnQoX3RoaXMucHJvcHMuY2hpbGRyZW4pO1xuXG4gICAgICB2YXIgc3BlYyA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBfdGhpcy5wcm9wcyksIF90aGlzLnN0YXRlKSwge30sIHtcbiAgICAgICAgc2xpZGVDb3VudDogY2hpbGRyZW5Db3VudFxuICAgICAgfSk7XG5cbiAgICAgIHZhciBzbGlkZUNvdW50ID0gKDAsIF9pbm5lclNsaWRlclV0aWxzLmdldFByZUNsb25lcykoc3BlYykgKyAoMCwgX2lubmVyU2xpZGVyVXRpbHMuZ2V0UG9zdENsb25lcykoc3BlYykgKyBjaGlsZHJlbkNvdW50O1xuICAgICAgdmFyIHRyYWNrV2lkdGggPSAxMDAgLyBfdGhpcy5wcm9wcy5zbGlkZXNUb1Nob3cgKiBzbGlkZUNvdW50O1xuICAgICAgdmFyIHNsaWRlV2lkdGggPSAxMDAgLyBzbGlkZUNvdW50O1xuICAgICAgdmFyIHRyYWNrTGVmdCA9IC1zbGlkZVdpZHRoICogKCgwLCBfaW5uZXJTbGlkZXJVdGlscy5nZXRQcmVDbG9uZXMpKHNwZWMpICsgX3RoaXMuc3RhdGUuY3VycmVudFNsaWRlKSAqIHRyYWNrV2lkdGggLyAxMDA7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5jZW50ZXJNb2RlKSB7XG4gICAgICAgIHRyYWNrTGVmdCArPSAoMTAwIC0gc2xpZGVXaWR0aCAqIHRyYWNrV2lkdGggLyAxMDApIC8gMjtcbiAgICAgIH1cblxuICAgICAgdmFyIHRyYWNrU3R5bGUgPSB7XG4gICAgICAgIHdpZHRoOiB0cmFja1dpZHRoICsgXCIlXCIsXG4gICAgICAgIGxlZnQ6IHRyYWNrTGVmdCArIFwiJVwiXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2xpZGVXaWR0aDogc2xpZGVXaWR0aCArIFwiJVwiLFxuICAgICAgICB0cmFja1N0eWxlOiB0cmFja1N0eWxlXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImNoZWNrSW1hZ2VzTG9hZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaW1hZ2VzID0gX3RoaXMubGlzdC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNsaWNrLXNsaWRlIGltZ1wiKTtcblxuICAgICAgdmFyIGltYWdlc0NvdW50ID0gaW1hZ2VzLmxlbmd0aCxcbiAgICAgICAgICBsb2FkZWRDb3VudCA9IDA7XG4gICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGltYWdlcywgZnVuY3Rpb24gKGltYWdlKSB7XG4gICAgICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24gaGFuZGxlcigpIHtcbiAgICAgICAgICByZXR1cm4gKytsb2FkZWRDb3VudCAmJiBsb2FkZWRDb3VudCA+PSBpbWFnZXNDb3VudCAmJiBfdGhpcy5vbldpbmRvd1Jlc2l6ZWQoKTtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoIWltYWdlLm9uY2xpY2spIHtcbiAgICAgICAgICBpbWFnZS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGltYWdlLnBhcmVudE5vZGUuZm9jdXMoKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBwcmV2Q2xpY2tIYW5kbGVyID0gaW1hZ2Uub25jbGljaztcblxuICAgICAgICAgIGltYWdlLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBwcmV2Q2xpY2tIYW5kbGVyKCk7XG4gICAgICAgICAgICBpbWFnZS5wYXJlbnROb2RlLmZvY3VzKCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaW1hZ2Uub25sb2FkKSB7XG4gICAgICAgICAgaWYgKF90aGlzLnByb3BzLmxhenlMb2FkKSB7XG4gICAgICAgICAgICBpbWFnZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIF90aGlzLmFkYXB0SGVpZ2h0KCk7XG5cbiAgICAgICAgICAgICAgX3RoaXMuY2FsbGJhY2tUaW1lcnMucHVzaChzZXRUaW1lb3V0KF90aGlzLm9uV2luZG93UmVzaXplZCwgX3RoaXMucHJvcHMuc3BlZWQpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9IGhhbmRsZXI7XG5cbiAgICAgICAgICAgIGltYWdlLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGhhbmRsZXIoKTtcbiAgICAgICAgICAgICAgX3RoaXMucHJvcHMub25MYXp5TG9hZEVycm9yICYmIF90aGlzLnByb3BzLm9uTGF6eUxvYWRFcnJvcigpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInByb2dyZXNzaXZlTGF6eUxvYWRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHNsaWRlc1RvTG9hZCA9IFtdO1xuXG4gICAgICB2YXIgc3BlYyA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgX3RoaXMucHJvcHMpLCBfdGhpcy5zdGF0ZSk7XG5cbiAgICAgIGZvciAodmFyIGluZGV4ID0gX3RoaXMuc3RhdGUuY3VycmVudFNsaWRlOyBpbmRleCA8IF90aGlzLnN0YXRlLnNsaWRlQ291bnQgKyAoMCwgX2lubmVyU2xpZGVyVXRpbHMuZ2V0UG9zdENsb25lcykoc3BlYyk7IGluZGV4KyspIHtcbiAgICAgICAgaWYgKF90aGlzLnN0YXRlLmxhenlMb2FkZWRMaXN0LmluZGV4T2YoaW5kZXgpIDwgMCkge1xuICAgICAgICAgIHNsaWRlc1RvTG9hZC5wdXNoKGluZGV4KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBfaW5kZXggPSBfdGhpcy5zdGF0ZS5jdXJyZW50U2xpZGUgLSAxOyBfaW5kZXggPj0gLSgwLCBfaW5uZXJTbGlkZXJVdGlscy5nZXRQcmVDbG9uZXMpKHNwZWMpOyBfaW5kZXgtLSkge1xuICAgICAgICBpZiAoX3RoaXMuc3RhdGUubGF6eUxvYWRlZExpc3QuaW5kZXhPZihfaW5kZXgpIDwgMCkge1xuICAgICAgICAgIHNsaWRlc1RvTG9hZC5wdXNoKF9pbmRleCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHNsaWRlc1RvTG9hZC5sZW5ndGggPiAwKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsYXp5TG9hZGVkTGlzdDogc3RhdGUubGF6eUxvYWRlZExpc3QuY29uY2F0KHNsaWRlc1RvTG9hZClcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoX3RoaXMucHJvcHMub25MYXp5TG9hZCkge1xuICAgICAgICAgIF90aGlzLnByb3BzLm9uTGF6eUxvYWQoc2xpZGVzVG9Mb2FkKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKF90aGlzLmxhenlMb2FkVGltZXIpIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKF90aGlzLmxhenlMb2FkVGltZXIpO1xuICAgICAgICAgIGRlbGV0ZSBfdGhpcy5sYXp5TG9hZFRpbWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic2xpZGVIYW5kbGVyXCIsIGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgdmFyIGRvbnRBbmltYXRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGFzTmF2Rm9yID0gX3RoaXMkcHJvcHMuYXNOYXZGb3IsXG4gICAgICAgICAgYmVmb3JlQ2hhbmdlID0gX3RoaXMkcHJvcHMuYmVmb3JlQ2hhbmdlLFxuICAgICAgICAgIG9uTGF6eUxvYWQgPSBfdGhpcyRwcm9wcy5vbkxhenlMb2FkLFxuICAgICAgICAgIHNwZWVkID0gX3RoaXMkcHJvcHMuc3BlZWQsXG4gICAgICAgICAgYWZ0ZXJDaGFuZ2UgPSBfdGhpcyRwcm9wcy5hZnRlckNoYW5nZTsgLy8gY2FwdHVyZSBjdXJyZW50c2xpZGUgYmVmb3JlIHN0YXRlIGlzIHVwZGF0ZWRcblxuICAgICAgdmFyIGN1cnJlbnRTbGlkZSA9IF90aGlzLnN0YXRlLmN1cnJlbnRTbGlkZTtcblxuICAgICAgdmFyIF9zbGlkZUhhbmRsZXIgPSAoMCwgX2lubmVyU2xpZGVyVXRpbHMuc2xpZGVIYW5kbGVyKShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7XG4gICAgICAgIGluZGV4OiBpbmRleFxuICAgICAgfSwgX3RoaXMucHJvcHMpLCBfdGhpcy5zdGF0ZSksIHt9LCB7XG4gICAgICAgIHRyYWNrUmVmOiBfdGhpcy50cmFjayxcbiAgICAgICAgdXNlQ1NTOiBfdGhpcy5wcm9wcy51c2VDU1MgJiYgIWRvbnRBbmltYXRlXG4gICAgICB9KSksXG4gICAgICAgICAgc3RhdGUgPSBfc2xpZGVIYW5kbGVyLnN0YXRlLFxuICAgICAgICAgIG5leHRTdGF0ZSA9IF9zbGlkZUhhbmRsZXIubmV4dFN0YXRlO1xuXG4gICAgICBpZiAoIXN0YXRlKSByZXR1cm47XG4gICAgICBiZWZvcmVDaGFuZ2UgJiYgYmVmb3JlQ2hhbmdlKGN1cnJlbnRTbGlkZSwgc3RhdGUuY3VycmVudFNsaWRlKTtcbiAgICAgIHZhciBzbGlkZXNUb0xvYWQgPSBzdGF0ZS5sYXp5TG9hZGVkTGlzdC5maWx0ZXIoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5zdGF0ZS5sYXp5TG9hZGVkTGlzdC5pbmRleE9mKHZhbHVlKSA8IDA7XG4gICAgICB9KTtcbiAgICAgIG9uTGF6eUxvYWQgJiYgc2xpZGVzVG9Mb2FkLmxlbmd0aCA+IDAgJiYgb25MYXp5TG9hZChzbGlkZXNUb0xvYWQpO1xuXG4gICAgICBpZiAoIV90aGlzLnByb3BzLndhaXRGb3JBbmltYXRlICYmIF90aGlzLmFuaW1hdGlvbkVuZENhbGxiYWNrKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChfdGhpcy5hbmltYXRpb25FbmRDYWxsYmFjayk7XG4gICAgICAgIGFmdGVyQ2hhbmdlICYmIGFmdGVyQ2hhbmdlKGN1cnJlbnRTbGlkZSk7XG4gICAgICAgIGRlbGV0ZSBfdGhpcy5hbmltYXRpb25FbmRDYWxsYmFjaztcbiAgICAgIH1cblxuICAgICAgX3RoaXMuc2V0U3RhdGUoc3RhdGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gYXNOYXZGb3JJbmRleCBjaGVjayBpcyB0byBhdm9pZCByZWN1cnNpdmUgY2FsbHMgb2Ygc2xpZGVIYW5kbGVyIGluIHdhaXRGb3JBbmltYXRlPWZhbHNlIG1vZGVcbiAgICAgICAgaWYgKGFzTmF2Rm9yICYmIF90aGlzLmFzTmF2Rm9ySW5kZXggIT09IGluZGV4KSB7XG4gICAgICAgICAgX3RoaXMuYXNOYXZGb3JJbmRleCA9IGluZGV4O1xuICAgICAgICAgIGFzTmF2Rm9yLmlubmVyU2xpZGVyLnNsaWRlSGFuZGxlcihpbmRleCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW5leHRTdGF0ZSkgcmV0dXJuO1xuICAgICAgICBfdGhpcy5hbmltYXRpb25FbmRDYWxsYmFjayA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBhbmltYXRpbmcgPSBuZXh0U3RhdGUuYW5pbWF0aW5nLFxuICAgICAgICAgICAgICBmaXJzdEJhdGNoID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG5leHRTdGF0ZSwgW1wiYW5pbWF0aW5nXCJdKTtcblxuICAgICAgICAgIF90aGlzLnNldFN0YXRlKGZpcnN0QmF0Y2gsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmNhbGxiYWNrVGltZXJzLnB1c2goc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW5nOiBhbmltYXRpbmdcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCAxMCkpO1xuXG4gICAgICAgICAgICBhZnRlckNoYW5nZSAmJiBhZnRlckNoYW5nZShzdGF0ZS5jdXJyZW50U2xpZGUpO1xuICAgICAgICAgICAgZGVsZXRlIF90aGlzLmFuaW1hdGlvbkVuZENhbGxiYWNrO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9LCBzcGVlZCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJjaGFuZ2VTbGlkZVwiLCBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgdmFyIGRvbnRBbmltYXRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcblxuICAgICAgdmFyIHNwZWMgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIF90aGlzLnByb3BzKSwgX3RoaXMuc3RhdGUpO1xuXG4gICAgICB2YXIgdGFyZ2V0U2xpZGUgPSAoMCwgX2lubmVyU2xpZGVyVXRpbHMuY2hhbmdlU2xpZGUpKHNwZWMsIG9wdGlvbnMpO1xuICAgICAgaWYgKHRhcmdldFNsaWRlICE9PSAwICYmICF0YXJnZXRTbGlkZSkgcmV0dXJuO1xuXG4gICAgICBpZiAoZG9udEFuaW1hdGUgPT09IHRydWUpIHtcbiAgICAgICAgX3RoaXMuc2xpZGVIYW5kbGVyKHRhcmdldFNsaWRlLCBkb250QW5pbWF0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5zbGlkZUhhbmRsZXIodGFyZ2V0U2xpZGUpO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5wcm9wcy5hdXRvcGxheSAmJiBfdGhpcy5hdXRvUGxheShcInVwZGF0ZVwiKTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLmZvY3VzT25TZWxlY3QpIHtcbiAgICAgICAgdmFyIG5vZGVzID0gX3RoaXMubGlzdC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNsaWNrLWN1cnJlbnRcIik7XG5cbiAgICAgICAgbm9kZXNbMF0gJiYgbm9kZXNbMF0uZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJjbGlja0hhbmRsZXJcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChfdGhpcy5jbGlja2FibGUgPT09IGZhbHNlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuY2xpY2thYmxlID0gdHJ1ZTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJrZXlIYW5kbGVyXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgZGlyID0gKDAsIF9pbm5lclNsaWRlclV0aWxzLmtleUhhbmRsZXIpKGUsIF90aGlzLnByb3BzLmFjY2Vzc2liaWxpdHksIF90aGlzLnByb3BzLnJ0bCk7XG4gICAgICBkaXIgIT09IFwiXCIgJiYgX3RoaXMuY2hhbmdlU2xpZGUoe1xuICAgICAgICBtZXNzYWdlOiBkaXJcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInNlbGVjdEhhbmRsZXJcIiwgZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgIF90aGlzLmNoYW5nZVNsaWRlKG9wdGlvbnMpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImRpc2FibGVCb2R5U2Nyb2xsXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBwcmV2ZW50RGVmYXVsdCA9IGZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KGUpIHtcbiAgICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuICAgICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICB9O1xuXG4gICAgICB3aW5kb3cub250b3VjaG1vdmUgPSBwcmV2ZW50RGVmYXVsdDtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJlbmFibGVCb2R5U2Nyb2xsXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHdpbmRvdy5vbnRvdWNobW92ZSA9IG51bGw7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic3dpcGVTdGFydFwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKF90aGlzLnByb3BzLnZlcnRpY2FsU3dpcGluZykge1xuICAgICAgICBfdGhpcy5kaXNhYmxlQm9keVNjcm9sbCgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgc3RhdGUgPSAoMCwgX2lubmVyU2xpZGVyVXRpbHMuc3dpcGVTdGFydCkoZSwgX3RoaXMucHJvcHMuc3dpcGUsIF90aGlzLnByb3BzLmRyYWdnYWJsZSk7XG4gICAgICBzdGF0ZSAhPT0gXCJcIiAmJiBfdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic3dpcGVNb3ZlXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgc3RhdGUgPSAoMCwgX2lubmVyU2xpZGVyVXRpbHMuc3dpcGVNb3ZlKShlLCBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgX3RoaXMucHJvcHMpLCBfdGhpcy5zdGF0ZSksIHt9LCB7XG4gICAgICAgIHRyYWNrUmVmOiBfdGhpcy50cmFjayxcbiAgICAgICAgbGlzdFJlZjogX3RoaXMubGlzdCxcbiAgICAgICAgc2xpZGVJbmRleDogX3RoaXMuc3RhdGUuY3VycmVudFNsaWRlXG4gICAgICB9KSk7XG4gICAgICBpZiAoIXN0YXRlKSByZXR1cm47XG5cbiAgICAgIGlmIChzdGF0ZVtcInN3aXBpbmdcIl0pIHtcbiAgICAgICAgX3RoaXMuY2xpY2thYmxlID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJzd2lwZUVuZFwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIHN0YXRlID0gKDAsIF9pbm5lclNsaWRlclV0aWxzLnN3aXBlRW5kKShlLCBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgX3RoaXMucHJvcHMpLCBfdGhpcy5zdGF0ZSksIHt9LCB7XG4gICAgICAgIHRyYWNrUmVmOiBfdGhpcy50cmFjayxcbiAgICAgICAgbGlzdFJlZjogX3RoaXMubGlzdCxcbiAgICAgICAgc2xpZGVJbmRleDogX3RoaXMuc3RhdGUuY3VycmVudFNsaWRlXG4gICAgICB9KSk7XG4gICAgICBpZiAoIXN0YXRlKSByZXR1cm47XG4gICAgICB2YXIgdHJpZ2dlclNsaWRlSGFuZGxlciA9IHN0YXRlW1widHJpZ2dlclNsaWRlSGFuZGxlclwiXTtcbiAgICAgIGRlbGV0ZSBzdGF0ZVtcInRyaWdnZXJTbGlkZUhhbmRsZXJcIl07XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHN0YXRlKTtcblxuICAgICAgaWYgKHRyaWdnZXJTbGlkZUhhbmRsZXIgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuXG4gICAgICBfdGhpcy5zbGlkZUhhbmRsZXIodHJpZ2dlclNsaWRlSGFuZGxlcik7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy52ZXJ0aWNhbFN3aXBpbmcpIHtcbiAgICAgICAgX3RoaXMuZW5hYmxlQm9keVNjcm9sbCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInRvdWNoRW5kXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBfdGhpcy5zd2lwZUVuZChlKTtcblxuICAgICAgX3RoaXMuY2xpY2thYmxlID0gdHJ1ZTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJzbGlja1ByZXZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gdGhpcyBhbmQgZmVsbG93IG1ldGhvZHMgYXJlIHdyYXBwZWQgaW4gc2V0VGltZW91dFxuICAgICAgLy8gdG8gbWFrZSBzdXJlIGluaXRpYWxpemUgc2V0U3RhdGUgaGFzIGhhcHBlbmVkIGJlZm9yZVxuICAgICAgLy8gYW55IG9mIHN1Y2ggbWV0aG9kcyBhcmUgY2FsbGVkXG4gICAgICBfdGhpcy5jYWxsYmFja1RpbWVycy5wdXNoKHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMuY2hhbmdlU2xpZGUoe1xuICAgICAgICAgIG1lc3NhZ2U6IFwicHJldmlvdXNcIlxuICAgICAgICB9KTtcbiAgICAgIH0sIDApKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJzbGlja05leHRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuY2FsbGJhY2tUaW1lcnMucHVzaChzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgICBtZXNzYWdlOiBcIm5leHRcIlxuICAgICAgICB9KTtcbiAgICAgIH0sIDApKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJzbGlja0dvVG9cIiwgZnVuY3Rpb24gKHNsaWRlKSB7XG4gICAgICB2YXIgZG9udEFuaW1hdGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuICAgICAgc2xpZGUgPSBOdW1iZXIoc2xpZGUpO1xuICAgICAgaWYgKGlzTmFOKHNsaWRlKSkgcmV0dXJuIFwiXCI7XG5cbiAgICAgIF90aGlzLmNhbGxiYWNrVGltZXJzLnB1c2goc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5jaGFuZ2VTbGlkZSh7XG4gICAgICAgICAgbWVzc2FnZTogXCJpbmRleFwiLFxuICAgICAgICAgIGluZGV4OiBzbGlkZSxcbiAgICAgICAgICBjdXJyZW50U2xpZGU6IF90aGlzLnN0YXRlLmN1cnJlbnRTbGlkZVxuICAgICAgICB9LCBkb250QW5pbWF0ZSk7XG4gICAgICB9LCAwKSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicGxheVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgbmV4dEluZGV4O1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMucnRsKSB7XG4gICAgICAgIG5leHRJbmRleCA9IF90aGlzLnN0YXRlLmN1cnJlbnRTbGlkZSAtIF90aGlzLnByb3BzLnNsaWRlc1RvU2Nyb2xsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCgwLCBfaW5uZXJTbGlkZXJVdGlscy5jYW5Hb05leHQpKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgX3RoaXMucHJvcHMpLCBfdGhpcy5zdGF0ZSkpKSB7XG4gICAgICAgICAgbmV4dEluZGV4ID0gX3RoaXMuc3RhdGUuY3VycmVudFNsaWRlICsgX3RoaXMucHJvcHMuc2xpZGVzVG9TY3JvbGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnNsaWRlSGFuZGxlcihuZXh0SW5kZXgpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImF1dG9QbGF5XCIsIGZ1bmN0aW9uIChwbGF5VHlwZSkge1xuICAgICAgaWYgKF90aGlzLmF1dG9wbGF5VGltZXIpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChfdGhpcy5hdXRvcGxheVRpbWVyKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGF1dG9wbGF5aW5nID0gX3RoaXMuc3RhdGUuYXV0b3BsYXlpbmc7XG5cbiAgICAgIGlmIChwbGF5VHlwZSA9PT0gXCJ1cGRhdGVcIikge1xuICAgICAgICBpZiAoYXV0b3BsYXlpbmcgPT09IFwiaG92ZXJlZFwiIHx8IGF1dG9wbGF5aW5nID09PSBcImZvY3VzZWRcIiB8fCBhdXRvcGxheWluZyA9PT0gXCJwYXVzZWRcIikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChwbGF5VHlwZSA9PT0gXCJsZWF2ZVwiKSB7XG4gICAgICAgIGlmIChhdXRvcGxheWluZyA9PT0gXCJwYXVzZWRcIiB8fCBhdXRvcGxheWluZyA9PT0gXCJmb2N1c2VkXCIpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocGxheVR5cGUgPT09IFwiYmx1clwiKSB7XG4gICAgICAgIGlmIChhdXRvcGxheWluZyA9PT0gXCJwYXVzZWRcIiB8fCBhdXRvcGxheWluZyA9PT0gXCJob3ZlcmVkXCIpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgX3RoaXMuYXV0b3BsYXlUaW1lciA9IHNldEludGVydmFsKF90aGlzLnBsYXksIF90aGlzLnByb3BzLmF1dG9wbGF5U3BlZWQgKyA1MCk7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYXV0b3BsYXlpbmc6IFwicGxheWluZ1wiXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJwYXVzZVwiLCBmdW5jdGlvbiAocGF1c2VUeXBlKSB7XG4gICAgICBpZiAoX3RoaXMuYXV0b3BsYXlUaW1lcikge1xuICAgICAgICBjbGVhckludGVydmFsKF90aGlzLmF1dG9wbGF5VGltZXIpO1xuICAgICAgICBfdGhpcy5hdXRvcGxheVRpbWVyID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIGF1dG9wbGF5aW5nID0gX3RoaXMuc3RhdGUuYXV0b3BsYXlpbmc7XG5cbiAgICAgIGlmIChwYXVzZVR5cGUgPT09IFwicGF1c2VkXCIpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGF1dG9wbGF5aW5nOiBcInBhdXNlZFwiXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChwYXVzZVR5cGUgPT09IFwiZm9jdXNlZFwiKSB7XG4gICAgICAgIGlmIChhdXRvcGxheWluZyA9PT0gXCJob3ZlcmVkXCIgfHwgYXV0b3BsYXlpbmcgPT09IFwicGxheWluZ1wiKSB7XG4gICAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYXV0b3BsYXlpbmc6IFwiZm9jdXNlZFwiXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHBhdXNlVHlwZSAgaXMgJ2hvdmVyZWQnXG4gICAgICAgIGlmIChhdXRvcGxheWluZyA9PT0gXCJwbGF5aW5nXCIpIHtcbiAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhdXRvcGxheWluZzogXCJob3ZlcmVkXCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uRG90c092ZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLnByb3BzLmF1dG9wbGF5ICYmIF90aGlzLnBhdXNlKFwiaG92ZXJlZFwiKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvbkRvdHNMZWF2ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMucHJvcHMuYXV0b3BsYXkgJiYgX3RoaXMuc3RhdGUuYXV0b3BsYXlpbmcgPT09IFwiaG92ZXJlZFwiICYmIF90aGlzLmF1dG9QbGF5KFwibGVhdmVcIik7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25UcmFja092ZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLnByb3BzLmF1dG9wbGF5ICYmIF90aGlzLnBhdXNlKFwiaG92ZXJlZFwiKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvblRyYWNrTGVhdmVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLnByb3BzLmF1dG9wbGF5ICYmIF90aGlzLnN0YXRlLmF1dG9wbGF5aW5nID09PSBcImhvdmVyZWRcIiAmJiBfdGhpcy5hdXRvUGxheShcImxlYXZlXCIpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uU2xpZGVGb2N1c1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMucHJvcHMuYXV0b3BsYXkgJiYgX3RoaXMucGF1c2UoXCJmb2N1c2VkXCIpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uU2xpZGVCbHVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5wcm9wcy5hdXRvcGxheSAmJiBfdGhpcy5zdGF0ZS5hdXRvcGxheWluZyA9PT0gXCJmb2N1c2VkXCIgJiYgX3RoaXMuYXV0b1BsYXkoXCJibHVyXCIpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInJlbmRlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgY2xhc3NOYW1lID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoXCJzbGljay1zbGlkZXJcIiwgX3RoaXMucHJvcHMuY2xhc3NOYW1lLCB7XG4gICAgICAgIFwic2xpY2stdmVydGljYWxcIjogX3RoaXMucHJvcHMudmVydGljYWwsXG4gICAgICAgIFwic2xpY2staW5pdGlhbGl6ZWRcIjogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICAgIHZhciBzcGVjID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBfdGhpcy5wcm9wcyksIF90aGlzLnN0YXRlKTtcblxuICAgICAgdmFyIHRyYWNrUHJvcHMgPSAoMCwgX2lubmVyU2xpZGVyVXRpbHMuZXh0cmFjdE9iamVjdCkoc3BlYywgW1wiZmFkZVwiLCBcImNzc0Vhc2VcIiwgXCJzcGVlZFwiLCBcImluZmluaXRlXCIsIFwiY2VudGVyTW9kZVwiLCBcImZvY3VzT25TZWxlY3RcIiwgXCJjdXJyZW50U2xpZGVcIiwgXCJsYXp5TG9hZFwiLCBcImxhenlMb2FkZWRMaXN0XCIsIFwicnRsXCIsIFwic2xpZGVXaWR0aFwiLCBcInNsaWRlSGVpZ2h0XCIsIFwibGlzdEhlaWdodFwiLCBcInZlcnRpY2FsXCIsIFwic2xpZGVzVG9TaG93XCIsIFwic2xpZGVzVG9TY3JvbGxcIiwgXCJzbGlkZUNvdW50XCIsIFwidHJhY2tTdHlsZVwiLCBcInZhcmlhYmxlV2lkdGhcIiwgXCJ1bnNsaWNrXCIsIFwiY2VudGVyUGFkZGluZ1wiLCBcInRhcmdldFNsaWRlXCIsIFwidXNlQ1NTXCJdKTtcbiAgICAgIHZhciBwYXVzZU9uSG92ZXIgPSBfdGhpcy5wcm9wcy5wYXVzZU9uSG92ZXI7XG4gICAgICB0cmFja1Byb3BzID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB0cmFja1Byb3BzKSwge30sIHtcbiAgICAgICAgb25Nb3VzZUVudGVyOiBwYXVzZU9uSG92ZXIgPyBfdGhpcy5vblRyYWNrT3ZlciA6IG51bGwsXG4gICAgICAgIG9uTW91c2VMZWF2ZTogcGF1c2VPbkhvdmVyID8gX3RoaXMub25UcmFja0xlYXZlIDogbnVsbCxcbiAgICAgICAgb25Nb3VzZU92ZXI6IHBhdXNlT25Ib3ZlciA/IF90aGlzLm9uVHJhY2tPdmVyIDogbnVsbCxcbiAgICAgICAgZm9jdXNPblNlbGVjdDogX3RoaXMucHJvcHMuZm9jdXNPblNlbGVjdCAmJiBfdGhpcy5jbGlja2FibGUgPyBfdGhpcy5zZWxlY3RIYW5kbGVyIDogbnVsbFxuICAgICAgfSk7XG4gICAgICB2YXIgZG90cztcblxuICAgICAgaWYgKF90aGlzLnByb3BzLmRvdHMgPT09IHRydWUgJiYgX3RoaXMuc3RhdGUuc2xpZGVDb3VudCA+PSBfdGhpcy5wcm9wcy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgdmFyIGRvdFByb3BzID0gKDAsIF9pbm5lclNsaWRlclV0aWxzLmV4dHJhY3RPYmplY3QpKHNwZWMsIFtcImRvdHNDbGFzc1wiLCBcInNsaWRlQ291bnRcIiwgXCJzbGlkZXNUb1Nob3dcIiwgXCJjdXJyZW50U2xpZGVcIiwgXCJzbGlkZXNUb1Njcm9sbFwiLCBcImNsaWNrSGFuZGxlclwiLCBcImNoaWxkcmVuXCIsIFwiY3VzdG9tUGFnaW5nXCIsIFwiaW5maW5pdGVcIiwgXCJhcHBlbmREb3RzXCJdKTtcbiAgICAgICAgdmFyIHBhdXNlT25Eb3RzSG92ZXIgPSBfdGhpcy5wcm9wcy5wYXVzZU9uRG90c0hvdmVyO1xuICAgICAgICBkb3RQcm9wcyA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgZG90UHJvcHMpLCB7fSwge1xuICAgICAgICAgIGNsaWNrSGFuZGxlcjogX3RoaXMuY2hhbmdlU2xpZGUsXG4gICAgICAgICAgb25Nb3VzZUVudGVyOiBwYXVzZU9uRG90c0hvdmVyID8gX3RoaXMub25Eb3RzTGVhdmUgOiBudWxsLFxuICAgICAgICAgIG9uTW91c2VPdmVyOiBwYXVzZU9uRG90c0hvdmVyID8gX3RoaXMub25Eb3RzT3ZlciA6IG51bGwsXG4gICAgICAgICAgb25Nb3VzZUxlYXZlOiBwYXVzZU9uRG90c0hvdmVyID8gX3RoaXMub25Eb3RzTGVhdmUgOiBudWxsXG4gICAgICAgIH0pO1xuICAgICAgICBkb3RzID0gLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChfZG90cy5Eb3RzLCBkb3RQcm9wcyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBwcmV2QXJyb3csIG5leHRBcnJvdztcbiAgICAgIHZhciBhcnJvd1Byb3BzID0gKDAsIF9pbm5lclNsaWRlclV0aWxzLmV4dHJhY3RPYmplY3QpKHNwZWMsIFtcImluZmluaXRlXCIsIFwiY2VudGVyTW9kZVwiLCBcImN1cnJlbnRTbGlkZVwiLCBcInNsaWRlQ291bnRcIiwgXCJzbGlkZXNUb1Nob3dcIiwgXCJwcmV2QXJyb3dcIiwgXCJuZXh0QXJyb3dcIl0pO1xuICAgICAgYXJyb3dQcm9wcy5jbGlja0hhbmRsZXIgPSBfdGhpcy5jaGFuZ2VTbGlkZTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLmFycm93cykge1xuICAgICAgICBwcmV2QXJyb3cgPSAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KF9hcnJvd3MuUHJldkFycm93LCBhcnJvd1Byb3BzKTtcbiAgICAgICAgbmV4dEFycm93ID0gLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChfYXJyb3dzLk5leHRBcnJvdywgYXJyb3dQcm9wcyk7XG4gICAgICB9XG5cbiAgICAgIHZhciB2ZXJ0aWNhbEhlaWdodFN0eWxlID0gbnVsbDtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLnZlcnRpY2FsKSB7XG4gICAgICAgIHZlcnRpY2FsSGVpZ2h0U3R5bGUgPSB7XG4gICAgICAgICAgaGVpZ2h0OiBfdGhpcy5zdGF0ZS5saXN0SGVpZ2h0XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHZhciBjZW50ZXJQYWRkaW5nU3R5bGUgPSBudWxsO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgIGlmIChfdGhpcy5wcm9wcy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgY2VudGVyUGFkZGluZ1N0eWxlID0ge1xuICAgICAgICAgICAgcGFkZGluZzogXCIwcHggXCIgKyBfdGhpcy5wcm9wcy5jZW50ZXJQYWRkaW5nXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKF90aGlzLnByb3BzLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICBjZW50ZXJQYWRkaW5nU3R5bGUgPSB7XG4gICAgICAgICAgICBwYWRkaW5nOiBfdGhpcy5wcm9wcy5jZW50ZXJQYWRkaW5nICsgXCIgMHB4XCJcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBsaXN0U3R5bGUgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHZlcnRpY2FsSGVpZ2h0U3R5bGUpLCBjZW50ZXJQYWRkaW5nU3R5bGUpO1xuXG4gICAgICB2YXIgdG91Y2hNb3ZlID0gX3RoaXMucHJvcHMudG91Y2hNb3ZlO1xuICAgICAgdmFyIGxpc3RQcm9wcyA9IHtcbiAgICAgICAgY2xhc3NOYW1lOiBcInNsaWNrLWxpc3RcIixcbiAgICAgICAgc3R5bGU6IGxpc3RTdHlsZSxcbiAgICAgICAgb25DbGljazogX3RoaXMuY2xpY2tIYW5kbGVyLFxuICAgICAgICBvbk1vdXNlRG93bjogdG91Y2hNb3ZlID8gX3RoaXMuc3dpcGVTdGFydCA6IG51bGwsXG4gICAgICAgIG9uTW91c2VNb3ZlOiBfdGhpcy5zdGF0ZS5kcmFnZ2luZyAmJiB0b3VjaE1vdmUgPyBfdGhpcy5zd2lwZU1vdmUgOiBudWxsLFxuICAgICAgICBvbk1vdXNlVXA6IHRvdWNoTW92ZSA/IF90aGlzLnN3aXBlRW5kIDogbnVsbCxcbiAgICAgICAgb25Nb3VzZUxlYXZlOiBfdGhpcy5zdGF0ZS5kcmFnZ2luZyAmJiB0b3VjaE1vdmUgPyBfdGhpcy5zd2lwZUVuZCA6IG51bGwsXG4gICAgICAgIG9uVG91Y2hTdGFydDogdG91Y2hNb3ZlID8gX3RoaXMuc3dpcGVTdGFydCA6IG51bGwsXG4gICAgICAgIG9uVG91Y2hNb3ZlOiBfdGhpcy5zdGF0ZS5kcmFnZ2luZyAmJiB0b3VjaE1vdmUgPyBfdGhpcy5zd2lwZU1vdmUgOiBudWxsLFxuICAgICAgICBvblRvdWNoRW5kOiB0b3VjaE1vdmUgPyBfdGhpcy50b3VjaEVuZCA6IG51bGwsXG4gICAgICAgIG9uVG91Y2hDYW5jZWw6IF90aGlzLnN0YXRlLmRyYWdnaW5nICYmIHRvdWNoTW92ZSA/IF90aGlzLnN3aXBlRW5kIDogbnVsbCxcbiAgICAgICAgb25LZXlEb3duOiBfdGhpcy5wcm9wcy5hY2Nlc3NpYmlsaXR5ID8gX3RoaXMua2V5SGFuZGxlciA6IG51bGxcbiAgICAgIH07XG4gICAgICB2YXIgaW5uZXJTbGlkZXJQcm9wcyA9IHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIGRpcjogXCJsdHJcIixcbiAgICAgICAgc3R5bGU6IF90aGlzLnByb3BzLnN0eWxlXG4gICAgICB9O1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMudW5zbGljaykge1xuICAgICAgICBsaXN0UHJvcHMgPSB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBcInNsaWNrLWxpc3RcIlxuICAgICAgICB9O1xuICAgICAgICBpbm5lclNsaWRlclByb3BzID0ge1xuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIGlubmVyU2xpZGVyUHJvcHMsICFfdGhpcy5wcm9wcy51bnNsaWNrID8gcHJldkFycm93IDogXCJcIiwgLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgICAgIHJlZjogX3RoaXMubGlzdFJlZkhhbmRsZXJcbiAgICAgIH0sIGxpc3RQcm9wcyksIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoX3RyYWNrLlRyYWNrLCBfZXh0ZW5kcyh7XG4gICAgICAgIHJlZjogX3RoaXMudHJhY2tSZWZIYW5kbGVyXG4gICAgICB9LCB0cmFja1Byb3BzKSwgX3RoaXMucHJvcHMuY2hpbGRyZW4pKSwgIV90aGlzLnByb3BzLnVuc2xpY2sgPyBuZXh0QXJyb3cgOiBcIlwiLCAhX3RoaXMucHJvcHMudW5zbGljayA/IGRvdHMgOiBcIlwiKTtcbiAgICB9KTtcblxuICAgIF90aGlzLmxpc3QgPSBudWxsO1xuICAgIF90aGlzLnRyYWNrID0gbnVsbDtcbiAgICBfdGhpcy5zdGF0ZSA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgX2luaXRpYWxTdGF0ZVtcImRlZmF1bHRcIl0pLCB7fSwge1xuICAgICAgY3VycmVudFNsaWRlOiBfdGhpcy5wcm9wcy5pbml0aWFsU2xpZGUsXG4gICAgICBzbGlkZUNvdW50OiBfcmVhY3RbXCJkZWZhdWx0XCJdLkNoaWxkcmVuLmNvdW50KF90aGlzLnByb3BzLmNoaWxkcmVuKVxuICAgIH0pO1xuICAgIF90aGlzLmNhbGxiYWNrVGltZXJzID0gW107XG4gICAgX3RoaXMuY2xpY2thYmxlID0gdHJ1ZTtcbiAgICBfdGhpcy5kZWJvdW5jZWRSZXNpemUgPSBudWxsO1xuXG4gICAgdmFyIHNzclN0YXRlID0gX3RoaXMuc3NySW5pdCgpO1xuXG4gICAgX3RoaXMuc3RhdGUgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIF90aGlzLnN0YXRlKSwgc3NyU3RhdGUpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhJbm5lclNsaWRlciwgW3tcbiAgICBrZXk6IFwiZGlkUHJvcHNDaGFuZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGlkUHJvcHNDaGFuZ2UocHJldlByb3BzKSB7XG4gICAgICB2YXIgc2V0VHJhY2tTdHlsZSA9IGZhbHNlO1xuXG4gICAgICBmb3IgKHZhciBfaTMgPSAwLCBfT2JqZWN0JGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLnByb3BzKTsgX2kzIDwgX09iamVjdCRrZXlzLmxlbmd0aDsgX2kzKyspIHtcbiAgICAgICAgdmFyIGtleSA9IF9PYmplY3Qka2V5c1tfaTNdO1xuXG4gICAgICAgIGlmICghcHJldlByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBzZXRUcmFja1N0eWxlID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfdHlwZW9mKHByZXZQcm9wc1trZXldKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgcHJldlByb3BzW2tleV0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByZXZQcm9wc1trZXldICE9PSB0aGlzLnByb3BzW2tleV0pIHtcbiAgICAgICAgICBzZXRUcmFja1N0eWxlID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2V0VHJhY2tTdHlsZSB8fCBfcmVhY3RbXCJkZWZhdWx0XCJdLkNoaWxkcmVuLmNvdW50KHRoaXMucHJvcHMuY2hpbGRyZW4pICE9PSBfcmVhY3RbXCJkZWZhdWx0XCJdLkNoaWxkcmVuLmNvdW50KHByZXZQcm9wcy5jaGlsZHJlbik7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIElubmVyU2xpZGVyO1xufShfcmVhY3RbXCJkZWZhdWx0XCJdLkNvbXBvbmVudCk7XG5cbmV4cG9ydHMuSW5uZXJTbGlkZXIgPSBJbm5lclNsaWRlcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2lubmVyU2xpZGVyID0gcmVxdWlyZShcIi4vaW5uZXItc2xpZGVyXCIpO1xuXG52YXIgX2pzb24ybXEgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJqc29uMm1xXCIpKTtcblxudmFyIF9kZWZhdWx0UHJvcHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2RlZmF1bHQtcHJvcHNcIikpO1xuXG52YXIgX2lubmVyU2xpZGVyVXRpbHMgPSByZXF1aXJlKFwiLi91dGlscy9pbm5lclNsaWRlclV0aWxzXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIGVucXVpcmUgPSAoMCwgX2lubmVyU2xpZGVyVXRpbHMuY2FuVXNlRE9NKSgpICYmIHJlcXVpcmUoXCJlbnF1aXJlLmpzXCIpO1xuXG52YXIgU2xpZGVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhTbGlkZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoU2xpZGVyKTtcblxuICBmdW5jdGlvbiBTbGlkZXIocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2xpZGVyKTtcblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImlubmVyU2xpZGVyUmVmSGFuZGxlclwiLCBmdW5jdGlvbiAocmVmKSB7XG4gICAgICByZXR1cm4gX3RoaXMuaW5uZXJTbGlkZXIgPSByZWY7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic2xpY2tQcmV2XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5pbm5lclNsaWRlci5zbGlja1ByZXYoKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJzbGlja05leHRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLmlubmVyU2xpZGVyLnNsaWNrTmV4dCgpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInNsaWNrR29Ub1wiLCBmdW5jdGlvbiAoc2xpZGUpIHtcbiAgICAgIHZhciBkb250QW5pbWF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG4gICAgICByZXR1cm4gX3RoaXMuaW5uZXJTbGlkZXIuc2xpY2tHb1RvKHNsaWRlLCBkb250QW5pbWF0ZSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic2xpY2tQYXVzZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMuaW5uZXJTbGlkZXIucGF1c2UoXCJwYXVzZWRcIik7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic2xpY2tQbGF5XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5pbm5lclNsaWRlci5hdXRvUGxheShcInBsYXlcIik7XG4gICAgfSk7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGJyZWFrcG9pbnQ6IG51bGxcbiAgICB9O1xuICAgIF90aGlzLl9yZXNwb25zaXZlTWVkaWFIYW5kbGVycyA9IFtdO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTbGlkZXIsIFt7XG4gICAga2V5OiBcIm1lZGlhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1lZGlhKHF1ZXJ5LCBoYW5kbGVyKSB7XG4gICAgICAvLyBqYXZhc2NyaXB0IGhhbmRsZXIgZm9yICBjc3MgbWVkaWEgcXVlcnlcbiAgICAgIGVucXVpcmUucmVnaXN0ZXIocXVlcnksIGhhbmRsZXIpO1xuXG4gICAgICB0aGlzLl9yZXNwb25zaXZlTWVkaWFIYW5kbGVycy5wdXNoKHtcbiAgICAgICAgcXVlcnk6IHF1ZXJ5LFxuICAgICAgICBoYW5kbGVyOiBoYW5kbGVyXG4gICAgICB9KTtcbiAgICB9IC8vIGhhbmRsZXMgcmVzcG9uc2l2ZSBicmVha3BvaW50c1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgLy8gcGVyZm9ybWFuY2UgbW9uaXRvcmluZ1xuICAgICAgLy9pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy9jb25zdCB7IHdoeURpZFlvdVVwZGF0ZSB9ID0gcmVxdWlyZSgnd2h5LWRpZC15b3UtdXBkYXRlJylcbiAgICAgIC8vd2h5RGlkWW91VXBkYXRlKFJlYWN0KVxuICAgICAgLy99XG4gICAgICBpZiAodGhpcy5wcm9wcy5yZXNwb25zaXZlKSB7XG4gICAgICAgIHZhciBicmVha3BvaW50cyA9IHRoaXMucHJvcHMucmVzcG9uc2l2ZS5tYXAoZnVuY3Rpb24gKGJyZWFrcHQpIHtcbiAgICAgICAgICByZXR1cm4gYnJlYWtwdC5icmVha3BvaW50O1xuICAgICAgICB9KTsgLy8gc29ydCB0aGVtIGluIGluY3JlYXNpbmcgb3JkZXIgb2YgdGhlaXIgbnVtZXJpY2FsIHZhbHVlXG5cbiAgICAgICAgYnJlYWtwb2ludHMuc29ydChmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICAgIHJldHVybiB4IC0geTtcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrcG9pbnRzLmZvckVhY2goZnVuY3Rpb24gKGJyZWFrcG9pbnQsIGluZGV4KSB7XG4gICAgICAgICAgLy8gbWVkaWEgcXVlcnkgZm9yIGVhY2ggYnJlYWtwb2ludFxuICAgICAgICAgIHZhciBiUXVlcnk7XG5cbiAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIGJRdWVyeSA9ICgwLCBfanNvbjJtcVtcImRlZmF1bHRcIl0pKHtcbiAgICAgICAgICAgICAgbWluV2lkdGg6IDAsXG4gICAgICAgICAgICAgIG1heFdpZHRoOiBicmVha3BvaW50XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYlF1ZXJ5ID0gKDAsIF9qc29uMm1xW1wiZGVmYXVsdFwiXSkoe1xuICAgICAgICAgICAgICBtaW5XaWR0aDogYnJlYWtwb2ludHNbaW5kZXggLSAxXSArIDEsXG4gICAgICAgICAgICAgIG1heFdpZHRoOiBicmVha3BvaW50XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IC8vIHdoZW4gbm90IHVzaW5nIHNlcnZlciBzaWRlIHJlbmRlcmluZ1xuXG5cbiAgICAgICAgICAoMCwgX2lubmVyU2xpZGVyVXRpbHMuY2FuVXNlRE9NKSgpICYmIF90aGlzMi5tZWRpYShiUXVlcnksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzMi5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IGJyZWFrcG9pbnRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTsgLy8gUmVnaXN0ZXIgbWVkaWEgcXVlcnkgZm9yIGZ1bGwgc2NyZWVuLiBOZWVkIHRvIHN1cHBvcnQgcmVzaXplIGZyb20gc21hbGwgdG8gbGFyZ2VcbiAgICAgICAgLy8gY29udmVydCBqYXZhc2NyaXB0IG9iamVjdCB0byBtZWRpYSBxdWVyeSBzdHJpbmdcblxuICAgICAgICB2YXIgcXVlcnkgPSAoMCwgX2pzb24ybXFbXCJkZWZhdWx0XCJdKSh7XG4gICAgICAgICAgbWluV2lkdGg6IGJyZWFrcG9pbnRzLnNsaWNlKC0xKVswXVxuICAgICAgICB9KTtcbiAgICAgICAgKDAsIF9pbm5lclNsaWRlclV0aWxzLmNhblVzZURPTSkoKSAmJiB0aGlzLm1lZGlhKHF1ZXJ5LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMyLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IG51bGxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5fcmVzcG9uc2l2ZU1lZGlhSGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIGVucXVpcmUudW5yZWdpc3RlcihvYmoucXVlcnksIG9iai5oYW5kbGVyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHZhciBzZXR0aW5ncztcbiAgICAgIHZhciBuZXdQcm9wcztcblxuICAgICAgaWYgKHRoaXMuc3RhdGUuYnJlYWtwb2ludCkge1xuICAgICAgICBuZXdQcm9wcyA9IHRoaXMucHJvcHMucmVzcG9uc2l2ZS5maWx0ZXIoZnVuY3Rpb24gKHJlc3ApIHtcbiAgICAgICAgICByZXR1cm4gcmVzcC5icmVha3BvaW50ID09PSBfdGhpczMuc3RhdGUuYnJlYWtwb2ludDtcbiAgICAgICAgfSk7XG4gICAgICAgIHNldHRpbmdzID0gbmV3UHJvcHNbMF0uc2V0dGluZ3MgPT09IFwidW5zbGlja1wiID8gXCJ1bnNsaWNrXCIgOiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgX2RlZmF1bHRQcm9wc1tcImRlZmF1bHRcIl0pLCB0aGlzLnByb3BzKSwgbmV3UHJvcHNbMF0uc2V0dGluZ3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0dGluZ3MgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIF9kZWZhdWx0UHJvcHNbXCJkZWZhdWx0XCJdKSwgdGhpcy5wcm9wcyk7XG4gICAgICB9IC8vIGZvcmNlIHNjcm9sbGluZyBieSBvbmUgaWYgY2VudGVyTW9kZSBpcyBvblxuXG5cbiAgICAgIGlmIChzZXR0aW5ncy5jZW50ZXJNb2RlKSB7XG4gICAgICAgIGlmIChzZXR0aW5ncy5zbGlkZXNUb1Njcm9sbCA+IDEgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFwic2xpZGVzVG9TY3JvbGwgc2hvdWxkIGJlIGVxdWFsIHRvIDEgaW4gY2VudGVyTW9kZSwgeW91IGFyZSB1c2luZyBcIi5jb25jYXQoc2V0dGluZ3Muc2xpZGVzVG9TY3JvbGwpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldHRpbmdzLnNsaWRlc1RvU2Nyb2xsID0gMTtcbiAgICAgIH0gLy8gZm9yY2Ugc2hvd2luZyBvbmUgc2xpZGUgYW5kIHNjcm9sbGluZyBieSBvbmUgaWYgdGhlIGZhZGUgbW9kZSBpcyBvblxuXG5cbiAgICAgIGlmIChzZXR0aW5ncy5mYWRlKSB7XG4gICAgICAgIGlmIChzZXR0aW5ncy5zbGlkZXNUb1Nob3cgPiAxICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcInNsaWRlc1RvU2hvdyBzaG91bGQgYmUgZXF1YWwgdG8gMSB3aGVuIGZhZGUgaXMgdHJ1ZSwgeW91J3JlIHVzaW5nIFwiLmNvbmNhdChzZXR0aW5ncy5zbGlkZXNUb1Nob3cpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZXR0aW5ncy5zbGlkZXNUb1Njcm9sbCA+IDEgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFwic2xpZGVzVG9TY3JvbGwgc2hvdWxkIGJlIGVxdWFsIHRvIDEgd2hlbiBmYWRlIGlzIHRydWUsIHlvdSdyZSB1c2luZyBcIi5jb25jYXQoc2V0dGluZ3Muc2xpZGVzVG9TY3JvbGwpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldHRpbmdzLnNsaWRlc1RvU2hvdyA9IDE7XG4gICAgICAgIHNldHRpbmdzLnNsaWRlc1RvU2Nyb2xsID0gMTtcbiAgICAgIH0gLy8gbWFrZXMgc3VyZSB0aGF0IGNoaWxkcmVuIGlzIGFuIGFycmF5LCBldmVuIHdoZW4gdGhlcmUgaXMgb25seSAxIGNoaWxkXG5cblxuICAgICAgdmFyIGNoaWxkcmVuID0gX3JlYWN0W1wiZGVmYXVsdFwiXS5DaGlsZHJlbi50b0FycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4pOyAvLyBDaGlsZHJlbiBtYXkgY29udGFpbiBmYWxzZSBvciBudWxsLCBzbyB3ZSBzaG91bGQgZmlsdGVyIHRoZW1cbiAgICAgIC8vIGNoaWxkcmVuIG1heSBhbHNvIGNvbnRhaW4gc3RyaW5nIGZpbGxlZCB3aXRoIHNwYWNlcyAoaW4gY2VydGFpbiBjYXNlcyB3aGVyZSB3ZSB1c2UganN4IHN0cmluZ3MpXG5cblxuICAgICAgY2hpbGRyZW4gPSBjaGlsZHJlbi5maWx0ZXIoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICByZXR1cm4gISFjaGlsZC50cmltKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISFjaGlsZDtcbiAgICAgIH0pOyAvLyByb3dzIGFuZCBzbGlkZXNQZXJSb3cgbG9naWMgaXMgaGFuZGxlZCBoZXJlXG5cbiAgICAgIGlmIChzZXR0aW5ncy52YXJpYWJsZVdpZHRoICYmIChzZXR0aW5ncy5yb3dzID4gMSB8fCBzZXR0aW5ncy5zbGlkZXNQZXJSb3cgPiAxKSkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJ2YXJpYWJsZVdpZHRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gY2FzZSBvZiByb3dzID4gMSBvciBzbGlkZXNQZXJSb3cgPiAxXCIpO1xuICAgICAgICBzZXR0aW5ncy52YXJpYWJsZVdpZHRoID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZhciBuZXdDaGlsZHJlbiA9IFtdO1xuICAgICAgdmFyIGN1cnJlbnRXaWR0aCA9IG51bGw7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpICs9IHNldHRpbmdzLnJvd3MgKiBzZXR0aW5ncy5zbGlkZXNQZXJSb3cpIHtcbiAgICAgICAgdmFyIG5ld1NsaWRlID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgaiA9IGk7IGogPCBpICsgc2V0dGluZ3Mucm93cyAqIHNldHRpbmdzLnNsaWRlc1BlclJvdzsgaiArPSBzZXR0aW5ncy5zbGlkZXNQZXJSb3cpIHtcbiAgICAgICAgICB2YXIgcm93ID0gW107XG5cbiAgICAgICAgICBmb3IgKHZhciBrID0gajsgayA8IGogKyBzZXR0aW5ncy5zbGlkZXNQZXJSb3c7IGsgKz0gMSkge1xuICAgICAgICAgICAgaWYgKHNldHRpbmdzLnZhcmlhYmxlV2lkdGggJiYgY2hpbGRyZW5ba10ucHJvcHMuc3R5bGUpIHtcbiAgICAgICAgICAgICAgY3VycmVudFdpZHRoID0gY2hpbGRyZW5ba10ucHJvcHMuc3R5bGUud2lkdGg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChrID49IGNoaWxkcmVuLmxlbmd0aCkgYnJlYWs7XG4gICAgICAgICAgICByb3cucHVzaCggLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY2xvbmVFbGVtZW50KGNoaWxkcmVuW2tdLCB7XG4gICAgICAgICAgICAgIGtleTogMTAwICogaSArIDEwICogaiArIGssXG4gICAgICAgICAgICAgIHRhYkluZGV4OiAtMSxcbiAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogXCJcIi5jb25jYXQoMTAwIC8gc2V0dGluZ3Muc2xpZGVzUGVyUm93LCBcIiVcIiksXG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV3U2xpZGUucHVzaCggLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgICBrZXk6IDEwICogaSArIGpcbiAgICAgICAgICB9LCByb3cpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZXR0aW5ncy52YXJpYWJsZVdpZHRoKSB7XG4gICAgICAgICAgbmV3Q2hpbGRyZW4ucHVzaCggLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgICBrZXk6IGksXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICB3aWR0aDogY3VycmVudFdpZHRoXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgbmV3U2xpZGUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdDaGlsZHJlbi5wdXNoKCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICAgIGtleTogaVxuICAgICAgICAgIH0sIG5ld1NsaWRlKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHNldHRpbmdzID09PSBcInVuc2xpY2tcIikge1xuICAgICAgICB2YXIgY2xhc3NOYW1lID0gXCJyZWd1bGFyIHNsaWRlciBcIiArICh0aGlzLnByb3BzLmNsYXNzTmFtZSB8fCBcIlwiKTtcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lXG4gICAgICAgIH0sIGNoaWxkcmVuKTtcbiAgICAgIH0gZWxzZSBpZiAobmV3Q2hpbGRyZW4ubGVuZ3RoIDw9IHNldHRpbmdzLnNsaWRlc1RvU2hvdykge1xuICAgICAgICBzZXR0aW5ncy51bnNsaWNrID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoX2lubmVyU2xpZGVyLklubmVyU2xpZGVyLCBfZXh0ZW5kcyh7XG4gICAgICAgIHN0eWxlOiB0aGlzLnByb3BzLnN0eWxlLFxuICAgICAgICByZWY6IHRoaXMuaW5uZXJTbGlkZXJSZWZIYW5kbGVyXG4gICAgICB9LCBzZXR0aW5ncyksIG5ld0NoaWxkcmVuKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU2xpZGVyO1xufShfcmVhY3RbXCJkZWZhdWx0XCJdLkNvbXBvbmVudCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gU2xpZGVyOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5UcmFjayA9IHZvaWQgMDtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfaW5uZXJTbGlkZXJVdGlscyA9IHJlcXVpcmUoXCIuL3V0aWxzL2lubmVyU2xpZGVyVXRpbHNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG4vLyBnaXZlbiBzcGVjaWZpY2F0aW9ucy9wcm9wcyBmb3IgYSBzbGlkZSwgZmV0Y2ggYWxsIHRoZSBjbGFzc2VzIHRoYXQgbmVlZCB0byBiZSBhcHBsaWVkIHRvIHRoZSBzbGlkZVxudmFyIGdldFNsaWRlQ2xhc3NlcyA9IGZ1bmN0aW9uIGdldFNsaWRlQ2xhc3NlcyhzcGVjKSB7XG4gIHZhciBzbGlja0FjdGl2ZSwgc2xpY2tDZW50ZXIsIHNsaWNrQ2xvbmVkO1xuICB2YXIgY2VudGVyT2Zmc2V0LCBpbmRleDtcblxuICBpZiAoc3BlYy5ydGwpIHtcbiAgICBpbmRleCA9IHNwZWMuc2xpZGVDb3VudCAtIDEgLSBzcGVjLmluZGV4O1xuICB9IGVsc2Uge1xuICAgIGluZGV4ID0gc3BlYy5pbmRleDtcbiAgfVxuXG4gIHNsaWNrQ2xvbmVkID0gaW5kZXggPCAwIHx8IGluZGV4ID49IHNwZWMuc2xpZGVDb3VudDtcblxuICBpZiAoc3BlYy5jZW50ZXJNb2RlKSB7XG4gICAgY2VudGVyT2Zmc2V0ID0gTWF0aC5mbG9vcihzcGVjLnNsaWRlc1RvU2hvdyAvIDIpO1xuICAgIHNsaWNrQ2VudGVyID0gKGluZGV4IC0gc3BlYy5jdXJyZW50U2xpZGUpICUgc3BlYy5zbGlkZUNvdW50ID09PSAwO1xuXG4gICAgaWYgKGluZGV4ID4gc3BlYy5jdXJyZW50U2xpZGUgLSBjZW50ZXJPZmZzZXQgLSAxICYmIGluZGV4IDw9IHNwZWMuY3VycmVudFNsaWRlICsgY2VudGVyT2Zmc2V0KSB7XG4gICAgICBzbGlja0FjdGl2ZSA9IHRydWU7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHNsaWNrQWN0aXZlID0gc3BlYy5jdXJyZW50U2xpZGUgPD0gaW5kZXggJiYgaW5kZXggPCBzcGVjLmN1cnJlbnRTbGlkZSArIHNwZWMuc2xpZGVzVG9TaG93O1xuICB9XG5cbiAgdmFyIGZvY3VzZWRTbGlkZTtcblxuICBpZiAoc3BlYy50YXJnZXRTbGlkZSA8IDApIHtcbiAgICBmb2N1c2VkU2xpZGUgPSBzcGVjLnRhcmdldFNsaWRlICsgc3BlYy5zbGlkZUNvdW50O1xuICB9IGVsc2UgaWYgKHNwZWMudGFyZ2V0U2xpZGUgPj0gc3BlYy5zbGlkZUNvdW50KSB7XG4gICAgZm9jdXNlZFNsaWRlID0gc3BlYy50YXJnZXRTbGlkZSAtIHNwZWMuc2xpZGVDb3VudDtcbiAgfSBlbHNlIHtcbiAgICBmb2N1c2VkU2xpZGUgPSBzcGVjLnRhcmdldFNsaWRlO1xuICB9XG5cbiAgdmFyIHNsaWNrQ3VycmVudCA9IGluZGV4ID09PSBmb2N1c2VkU2xpZGU7XG4gIHJldHVybiB7XG4gICAgXCJzbGljay1zbGlkZVwiOiB0cnVlLFxuICAgIFwic2xpY2stYWN0aXZlXCI6IHNsaWNrQWN0aXZlLFxuICAgIFwic2xpY2stY2VudGVyXCI6IHNsaWNrQ2VudGVyLFxuICAgIFwic2xpY2stY2xvbmVkXCI6IHNsaWNrQ2xvbmVkLFxuICAgIFwic2xpY2stY3VycmVudFwiOiBzbGlja0N1cnJlbnQgLy8gZHViaW91cyBpbiBjYXNlIG9mIFJUTFxuXG4gIH07XG59O1xuXG52YXIgZ2V0U2xpZGVTdHlsZSA9IGZ1bmN0aW9uIGdldFNsaWRlU3R5bGUoc3BlYykge1xuICB2YXIgc3R5bGUgPSB7fTtcblxuICBpZiAoc3BlYy52YXJpYWJsZVdpZHRoID09PSB1bmRlZmluZWQgfHwgc3BlYy52YXJpYWJsZVdpZHRoID09PSBmYWxzZSkge1xuICAgIHN0eWxlLndpZHRoID0gc3BlYy5zbGlkZVdpZHRoO1xuICB9XG5cbiAgaWYgKHNwZWMuZmFkZSkge1xuICAgIHN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuXG4gICAgaWYgKHNwZWMudmVydGljYWwpIHtcbiAgICAgIHN0eWxlLnRvcCA9IC1zcGVjLmluZGV4ICogcGFyc2VJbnQoc3BlYy5zbGlkZUhlaWdodCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmxlZnQgPSAtc3BlYy5pbmRleCAqIHBhcnNlSW50KHNwZWMuc2xpZGVXaWR0aCk7XG4gICAgfVxuXG4gICAgc3R5bGUub3BhY2l0eSA9IHNwZWMuY3VycmVudFNsaWRlID09PSBzcGVjLmluZGV4ID8gMSA6IDA7XG5cbiAgICBpZiAoc3BlYy51c2VDU1MpIHtcbiAgICAgIHN0eWxlLnRyYW5zaXRpb24gPSBcIm9wYWNpdHkgXCIgKyBzcGVjLnNwZWVkICsgXCJtcyBcIiArIHNwZWMuY3NzRWFzZSArIFwiLCBcIiArIFwidmlzaWJpbGl0eSBcIiArIHNwZWMuc3BlZWQgKyBcIm1zIFwiICsgc3BlYy5jc3NFYXNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn07XG5cbnZhciBnZXRLZXkgPSBmdW5jdGlvbiBnZXRLZXkoY2hpbGQsIGZhbGxiYWNrS2V5KSB7XG4gIHJldHVybiBjaGlsZC5rZXkgfHwgZmFsbGJhY2tLZXk7XG59O1xuXG52YXIgcmVuZGVyU2xpZGVzID0gZnVuY3Rpb24gcmVuZGVyU2xpZGVzKHNwZWMpIHtcbiAgdmFyIGtleTtcbiAgdmFyIHNsaWRlcyA9IFtdO1xuICB2YXIgcHJlQ2xvbmVTbGlkZXMgPSBbXTtcbiAgdmFyIHBvc3RDbG9uZVNsaWRlcyA9IFtdO1xuXG4gIHZhciBjaGlsZHJlbkNvdW50ID0gX3JlYWN0W1wiZGVmYXVsdFwiXS5DaGlsZHJlbi5jb3VudChzcGVjLmNoaWxkcmVuKTtcblxuICB2YXIgc3RhcnRJbmRleCA9ICgwLCBfaW5uZXJTbGlkZXJVdGlscy5sYXp5U3RhcnRJbmRleCkoc3BlYyk7XG4gIHZhciBlbmRJbmRleCA9ICgwLCBfaW5uZXJTbGlkZXJVdGlscy5sYXp5RW5kSW5kZXgpKHNwZWMpO1xuXG4gIF9yZWFjdFtcImRlZmF1bHRcIl0uQ2hpbGRyZW4uZm9yRWFjaChzcGVjLmNoaWxkcmVuLCBmdW5jdGlvbiAoZWxlbSwgaW5kZXgpIHtcbiAgICB2YXIgY2hpbGQ7XG4gICAgdmFyIGNoaWxkT25DbGlja09wdGlvbnMgPSB7XG4gICAgICBtZXNzYWdlOiBcImNoaWxkcmVuXCIsXG4gICAgICBpbmRleDogaW5kZXgsXG4gICAgICBzbGlkZXNUb1Njcm9sbDogc3BlYy5zbGlkZXNUb1Njcm9sbCxcbiAgICAgIGN1cnJlbnRTbGlkZTogc3BlYy5jdXJyZW50U2xpZGVcbiAgICB9OyAvLyBpbiBjYXNlIG9mIGxhenlMb2FkLCB3aGV0aGVyIG9yIG5vdCB3ZSB3YW50IHRvIGZldGNoIHRoZSBzbGlkZVxuXG4gICAgaWYgKCFzcGVjLmxhenlMb2FkIHx8IHNwZWMubGF6eUxvYWQgJiYgc3BlYy5sYXp5TG9hZGVkTGlzdC5pbmRleE9mKGluZGV4KSA+PSAwKSB7XG4gICAgICBjaGlsZCA9IGVsZW07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoaWxkID0gLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsKTtcbiAgICB9XG5cbiAgICB2YXIgY2hpbGRTdHlsZSA9IGdldFNsaWRlU3R5bGUoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBzcGVjKSwge30sIHtcbiAgICAgIGluZGV4OiBpbmRleFxuICAgIH0pKTtcbiAgICB2YXIgc2xpZGVDbGFzcyA9IGNoaWxkLnByb3BzLmNsYXNzTmFtZSB8fCBcIlwiO1xuICAgIHZhciBzbGlkZUNsYXNzZXMgPSBnZXRTbGlkZUNsYXNzZXMoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBzcGVjKSwge30sIHtcbiAgICAgIGluZGV4OiBpbmRleFxuICAgIH0pKTsgLy8gcHVzaCBhIGNsb25lZCBlbGVtZW50IG9mIHRoZSBkZXNpcmVkIHNsaWRlXG5cbiAgICBzbGlkZXMucHVzaCggLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICBrZXk6IFwib3JpZ2luYWxcIiArIGdldEtleShjaGlsZCwgaW5kZXgpLFxuICAgICAgXCJkYXRhLWluZGV4XCI6IGluZGV4LFxuICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShzbGlkZUNsYXNzZXMsIHNsaWRlQ2xhc3MpLFxuICAgICAgdGFiSW5kZXg6IFwiLTFcIixcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogIXNsaWRlQ2xhc3Nlc1tcInNsaWNrLWFjdGl2ZVwiXSxcbiAgICAgIHN0eWxlOiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICBvdXRsaW5lOiBcIm5vbmVcIlxuICAgICAgfSwgY2hpbGQucHJvcHMuc3R5bGUgfHwge30pLCBjaGlsZFN0eWxlKSxcbiAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgICAgICBjaGlsZC5wcm9wcyAmJiBjaGlsZC5wcm9wcy5vbkNsaWNrICYmIGNoaWxkLnByb3BzLm9uQ2xpY2soZSk7XG5cbiAgICAgICAgaWYgKHNwZWMuZm9jdXNPblNlbGVjdCkge1xuICAgICAgICAgIHNwZWMuZm9jdXNPblNlbGVjdChjaGlsZE9uQ2xpY2tPcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pKTsgLy8gaWYgc2xpZGUgbmVlZHMgdG8gYmUgcHJlY2xvbmVkIG9yIHBvc3RjbG9uZWRcblxuICAgIGlmIChzcGVjLmluZmluaXRlICYmIHNwZWMuZmFkZSA9PT0gZmFsc2UpIHtcbiAgICAgIHZhciBwcmVDbG9uZU5vID0gY2hpbGRyZW5Db3VudCAtIGluZGV4O1xuXG4gICAgICBpZiAocHJlQ2xvbmVObyA8PSAoMCwgX2lubmVyU2xpZGVyVXRpbHMuZ2V0UHJlQ2xvbmVzKShzcGVjKSAmJiBjaGlsZHJlbkNvdW50ICE9PSBzcGVjLnNsaWRlc1RvU2hvdykge1xuICAgICAgICBrZXkgPSAtcHJlQ2xvbmVObztcblxuICAgICAgICBpZiAoa2V5ID49IHN0YXJ0SW5kZXgpIHtcbiAgICAgICAgICBjaGlsZCA9IGVsZW07XG4gICAgICAgIH1cblxuICAgICAgICBzbGlkZUNsYXNzZXMgPSBnZXRTbGlkZUNsYXNzZXMoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBzcGVjKSwge30sIHtcbiAgICAgICAgICBpbmRleDoga2V5XG4gICAgICAgIH0pKTtcbiAgICAgICAgcHJlQ2xvbmVTbGlkZXMucHVzaCggLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgICAga2V5OiBcInByZWNsb25lZFwiICsgZ2V0S2V5KGNoaWxkLCBrZXkpLFxuICAgICAgICAgIFwiZGF0YS1pbmRleFwiOiBrZXksXG4gICAgICAgICAgdGFiSW5kZXg6IFwiLTFcIixcbiAgICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKHNsaWRlQ2xhc3Nlcywgc2xpZGVDbGFzcyksXG4gICAgICAgICAgXCJhcmlhLWhpZGRlblwiOiAhc2xpZGVDbGFzc2VzW1wic2xpY2stYWN0aXZlXCJdLFxuICAgICAgICAgIHN0eWxlOiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGNoaWxkLnByb3BzLnN0eWxlIHx8IHt9KSwgY2hpbGRTdHlsZSksXG4gICAgICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgICAgICAgICBjaGlsZC5wcm9wcyAmJiBjaGlsZC5wcm9wcy5vbkNsaWNrICYmIGNoaWxkLnByb3BzLm9uQ2xpY2soZSk7XG5cbiAgICAgICAgICAgIGlmIChzcGVjLmZvY3VzT25TZWxlY3QpIHtcbiAgICAgICAgICAgICAgc3BlYy5mb2N1c09uU2VsZWN0KGNoaWxkT25DbGlja09wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2hpbGRyZW5Db3VudCAhPT0gc3BlYy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAga2V5ID0gY2hpbGRyZW5Db3VudCArIGluZGV4O1xuXG4gICAgICAgIGlmIChrZXkgPCBlbmRJbmRleCkge1xuICAgICAgICAgIGNoaWxkID0gZWxlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNsaWRlQ2xhc3NlcyA9IGdldFNsaWRlQ2xhc3Nlcyhfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHNwZWMpLCB7fSwge1xuICAgICAgICAgIGluZGV4OiBrZXlcbiAgICAgICAgfSkpO1xuICAgICAgICBwb3N0Q2xvbmVTbGlkZXMucHVzaCggLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgICAga2V5OiBcInBvc3RjbG9uZWRcIiArIGdldEtleShjaGlsZCwga2V5KSxcbiAgICAgICAgICBcImRhdGEtaW5kZXhcIjoga2V5LFxuICAgICAgICAgIHRhYkluZGV4OiBcIi0xXCIsXG4gICAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShzbGlkZUNsYXNzZXMsIHNsaWRlQ2xhc3MpLFxuICAgICAgICAgIFwiYXJpYS1oaWRkZW5cIjogIXNsaWRlQ2xhc3Nlc1tcInNsaWNrLWFjdGl2ZVwiXSxcbiAgICAgICAgICBzdHlsZTogX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBjaGlsZC5wcm9wcy5zdHlsZSB8fCB7fSksIGNoaWxkU3R5bGUpLFxuICAgICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgICAgICAgICAgY2hpbGQucHJvcHMgJiYgY2hpbGQucHJvcHMub25DbGljayAmJiBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO1xuXG4gICAgICAgICAgICBpZiAoc3BlYy5mb2N1c09uU2VsZWN0KSB7XG4gICAgICAgICAgICAgIHNwZWMuZm9jdXNPblNlbGVjdChjaGlsZE9uQ2xpY2tPcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGlmIChzcGVjLnJ0bCkge1xuICAgIHJldHVybiBwcmVDbG9uZVNsaWRlcy5jb25jYXQoc2xpZGVzLCBwb3N0Q2xvbmVTbGlkZXMpLnJldmVyc2UoKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcHJlQ2xvbmVTbGlkZXMuY29uY2F0KHNsaWRlcywgcG9zdENsb25lU2xpZGVzKTtcbiAgfVxufTtcblxudmFyIFRyYWNrID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkUHVyZUNvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoVHJhY2ssIF9SZWFjdCRQdXJlQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKFRyYWNrKTtcblxuICBmdW5jdGlvbiBUcmFjaygpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHJhY2spO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJub2RlXCIsIG51bGwpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImhhbmRsZVJlZlwiLCBmdW5jdGlvbiAocmVmKSB7XG4gICAgICBfdGhpcy5ub2RlID0gcmVmO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFRyYWNrLCBbe1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIHNsaWRlcyA9IHJlbmRlclNsaWRlcyh0aGlzLnByb3BzKTtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgb25Nb3VzZUVudGVyID0gX3RoaXMkcHJvcHMub25Nb3VzZUVudGVyLFxuICAgICAgICAgIG9uTW91c2VPdmVyID0gX3RoaXMkcHJvcHMub25Nb3VzZU92ZXIsXG4gICAgICAgICAgb25Nb3VzZUxlYXZlID0gX3RoaXMkcHJvcHMub25Nb3VzZUxlYXZlO1xuICAgICAgdmFyIG1vdXNlRXZlbnRzID0ge1xuICAgICAgICBvbk1vdXNlRW50ZXI6IG9uTW91c2VFbnRlcixcbiAgICAgICAgb25Nb3VzZU92ZXI6IG9uTW91c2VPdmVyLFxuICAgICAgICBvbk1vdXNlTGVhdmU6IG9uTW91c2VMZWF2ZVxuICAgICAgfTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICAgICAgcmVmOiB0aGlzLmhhbmRsZVJlZixcbiAgICAgICAgY2xhc3NOYW1lOiBcInNsaWNrLXRyYWNrXCIsXG4gICAgICAgIHN0eWxlOiB0aGlzLnByb3BzLnRyYWNrU3R5bGVcbiAgICAgIH0sIG1vdXNlRXZlbnRzKSwgc2xpZGVzKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVHJhY2s7XG59KF9yZWFjdFtcImRlZmF1bHRcIl0uUHVyZUNvbXBvbmVudCk7XG5cbmV4cG9ydHMuVHJhY2sgPSBUcmFjazsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY2xhbXAgPSBjbGFtcDtcbmV4cG9ydHMuY2FuVXNlRE9NID0gZXhwb3J0cy5zbGlkZXNPbkxlZnQgPSBleHBvcnRzLnNsaWRlc09uUmlnaHQgPSBleHBvcnRzLnNpYmxpbmdEaXJlY3Rpb24gPSBleHBvcnRzLmdldFRvdGFsU2xpZGVzID0gZXhwb3J0cy5nZXRQb3N0Q2xvbmVzID0gZXhwb3J0cy5nZXRQcmVDbG9uZXMgPSBleHBvcnRzLmdldFRyYWNrTGVmdCA9IGV4cG9ydHMuZ2V0VHJhY2tBbmltYXRlQ1NTID0gZXhwb3J0cy5nZXRUcmFja0NTUyA9IGV4cG9ydHMuY2hlY2tTcGVjS2V5cyA9IGV4cG9ydHMuZ2V0U2xpZGVDb3VudCA9IGV4cG9ydHMuY2hlY2tOYXZpZ2FibGUgPSBleHBvcnRzLmdldE5hdmlnYWJsZUluZGV4ZXMgPSBleHBvcnRzLnN3aXBlRW5kID0gZXhwb3J0cy5zd2lwZU1vdmUgPSBleHBvcnRzLnN3aXBlU3RhcnQgPSBleHBvcnRzLmtleUhhbmRsZXIgPSBleHBvcnRzLmNoYW5nZVNsaWRlID0gZXhwb3J0cy5zbGlkZUhhbmRsZXIgPSBleHBvcnRzLmluaXRpYWxpemVkU3RhdGUgPSBleHBvcnRzLmV4dHJhY3RPYmplY3QgPSBleHBvcnRzLmNhbkdvTmV4dCA9IGV4cG9ydHMuZ2V0U3dpcGVEaXJlY3Rpb24gPSBleHBvcnRzLmdldEhlaWdodCA9IGV4cG9ydHMuZ2V0V2lkdGggPSBleHBvcnRzLmxhenlTbGlkZXNPblJpZ2h0ID0gZXhwb3J0cy5sYXp5U2xpZGVzT25MZWZ0ID0gZXhwb3J0cy5sYXp5RW5kSW5kZXggPSBleHBvcnRzLmxhenlTdGFydEluZGV4ID0gZXhwb3J0cy5nZXRSZXF1aXJlZExhenlTbGlkZXMgPSBleHBvcnRzLmdldE9uRGVtYW5kTGF6eVNsaWRlcyA9IHZvaWQgMDtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBjbGFtcChudW1iZXIsIGxvd2VyQm91bmQsIHVwcGVyQm91bmQpIHtcbiAgcmV0dXJuIE1hdGgubWF4KGxvd2VyQm91bmQsIE1hdGgubWluKG51bWJlciwgdXBwZXJCb3VuZCkpO1xufVxuXG52YXIgZ2V0T25EZW1hbmRMYXp5U2xpZGVzID0gZnVuY3Rpb24gZ2V0T25EZW1hbmRMYXp5U2xpZGVzKHNwZWMpIHtcbiAgdmFyIG9uRGVtYW5kU2xpZGVzID0gW107XG4gIHZhciBzdGFydEluZGV4ID0gbGF6eVN0YXJ0SW5kZXgoc3BlYyk7XG4gIHZhciBlbmRJbmRleCA9IGxhenlFbmRJbmRleChzcGVjKTtcblxuICBmb3IgKHZhciBzbGlkZUluZGV4ID0gc3RhcnRJbmRleDsgc2xpZGVJbmRleCA8IGVuZEluZGV4OyBzbGlkZUluZGV4KyspIHtcbiAgICBpZiAoc3BlYy5sYXp5TG9hZGVkTGlzdC5pbmRleE9mKHNsaWRlSW5kZXgpIDwgMCkge1xuICAgICAgb25EZW1hbmRTbGlkZXMucHVzaChzbGlkZUluZGV4KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb25EZW1hbmRTbGlkZXM7XG59OyAvLyByZXR1cm4gbGlzdCBvZiBzbGlkZXMgdGhhdCBuZWVkIHRvIGJlIHByZXNlbnRcblxuXG5leHBvcnRzLmdldE9uRGVtYW5kTGF6eVNsaWRlcyA9IGdldE9uRGVtYW5kTGF6eVNsaWRlcztcblxudmFyIGdldFJlcXVpcmVkTGF6eVNsaWRlcyA9IGZ1bmN0aW9uIGdldFJlcXVpcmVkTGF6eVNsaWRlcyhzcGVjKSB7XG4gIHZhciByZXF1aXJlZFNsaWRlcyA9IFtdO1xuICB2YXIgc3RhcnRJbmRleCA9IGxhenlTdGFydEluZGV4KHNwZWMpO1xuICB2YXIgZW5kSW5kZXggPSBsYXp5RW5kSW5kZXgoc3BlYyk7XG5cbiAgZm9yICh2YXIgc2xpZGVJbmRleCA9IHN0YXJ0SW5kZXg7IHNsaWRlSW5kZXggPCBlbmRJbmRleDsgc2xpZGVJbmRleCsrKSB7XG4gICAgcmVxdWlyZWRTbGlkZXMucHVzaChzbGlkZUluZGV4KTtcbiAgfVxuXG4gIHJldHVybiByZXF1aXJlZFNsaWRlcztcbn07IC8vIHN0YXJ0SW5kZXggdGhhdCBuZWVkcyB0byBiZSBwcmVzZW50XG5cblxuZXhwb3J0cy5nZXRSZXF1aXJlZExhenlTbGlkZXMgPSBnZXRSZXF1aXJlZExhenlTbGlkZXM7XG5cbnZhciBsYXp5U3RhcnRJbmRleCA9IGZ1bmN0aW9uIGxhenlTdGFydEluZGV4KHNwZWMpIHtcbiAgcmV0dXJuIHNwZWMuY3VycmVudFNsaWRlIC0gbGF6eVNsaWRlc09uTGVmdChzcGVjKTtcbn07XG5cbmV4cG9ydHMubGF6eVN0YXJ0SW5kZXggPSBsYXp5U3RhcnRJbmRleDtcblxudmFyIGxhenlFbmRJbmRleCA9IGZ1bmN0aW9uIGxhenlFbmRJbmRleChzcGVjKSB7XG4gIHJldHVybiBzcGVjLmN1cnJlbnRTbGlkZSArIGxhenlTbGlkZXNPblJpZ2h0KHNwZWMpO1xufTtcblxuZXhwb3J0cy5sYXp5RW5kSW5kZXggPSBsYXp5RW5kSW5kZXg7XG5cbnZhciBsYXp5U2xpZGVzT25MZWZ0ID0gZnVuY3Rpb24gbGF6eVNsaWRlc09uTGVmdChzcGVjKSB7XG4gIHJldHVybiBzcGVjLmNlbnRlck1vZGUgPyBNYXRoLmZsb29yKHNwZWMuc2xpZGVzVG9TaG93IC8gMikgKyAocGFyc2VJbnQoc3BlYy5jZW50ZXJQYWRkaW5nKSA+IDAgPyAxIDogMCkgOiAwO1xufTtcblxuZXhwb3J0cy5sYXp5U2xpZGVzT25MZWZ0ID0gbGF6eVNsaWRlc09uTGVmdDtcblxudmFyIGxhenlTbGlkZXNPblJpZ2h0ID0gZnVuY3Rpb24gbGF6eVNsaWRlc09uUmlnaHQoc3BlYykge1xuICByZXR1cm4gc3BlYy5jZW50ZXJNb2RlID8gTWF0aC5mbG9vcigoc3BlYy5zbGlkZXNUb1Nob3cgLSAxKSAvIDIpICsgMSArIChwYXJzZUludChzcGVjLmNlbnRlclBhZGRpbmcpID4gMCA/IDEgOiAwKSA6IHNwZWMuc2xpZGVzVG9TaG93O1xufTsgLy8gZ2V0IHdpZHRoIG9mIGFuIGVsZW1lbnRcblxuXG5leHBvcnRzLmxhenlTbGlkZXNPblJpZ2h0ID0gbGF6eVNsaWRlc09uUmlnaHQ7XG5cbnZhciBnZXRXaWR0aCA9IGZ1bmN0aW9uIGdldFdpZHRoKGVsZW0pIHtcbiAgcmV0dXJuIGVsZW0gJiYgZWxlbS5vZmZzZXRXaWR0aCB8fCAwO1xufTtcblxuZXhwb3J0cy5nZXRXaWR0aCA9IGdldFdpZHRoO1xuXG52YXIgZ2V0SGVpZ2h0ID0gZnVuY3Rpb24gZ2V0SGVpZ2h0KGVsZW0pIHtcbiAgcmV0dXJuIGVsZW0gJiYgZWxlbS5vZmZzZXRIZWlnaHQgfHwgMDtcbn07XG5cbmV4cG9ydHMuZ2V0SGVpZ2h0ID0gZ2V0SGVpZ2h0O1xuXG52YXIgZ2V0U3dpcGVEaXJlY3Rpb24gPSBmdW5jdGlvbiBnZXRTd2lwZURpcmVjdGlvbih0b3VjaE9iamVjdCkge1xuICB2YXIgdmVydGljYWxTd2lwaW5nID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcbiAgdmFyIHhEaXN0LCB5RGlzdCwgciwgc3dpcGVBbmdsZTtcbiAgeERpc3QgPSB0b3VjaE9iamVjdC5zdGFydFggLSB0b3VjaE9iamVjdC5jdXJYO1xuICB5RGlzdCA9IHRvdWNoT2JqZWN0LnN0YXJ0WSAtIHRvdWNoT2JqZWN0LmN1clk7XG4gIHIgPSBNYXRoLmF0YW4yKHlEaXN0LCB4RGlzdCk7XG4gIHN3aXBlQW5nbGUgPSBNYXRoLnJvdW5kKHIgKiAxODAgLyBNYXRoLlBJKTtcblxuICBpZiAoc3dpcGVBbmdsZSA8IDApIHtcbiAgICBzd2lwZUFuZ2xlID0gMzYwIC0gTWF0aC5hYnMoc3dpcGVBbmdsZSk7XG4gIH1cblxuICBpZiAoc3dpcGVBbmdsZSA8PSA0NSAmJiBzd2lwZUFuZ2xlID49IDAgfHwgc3dpcGVBbmdsZSA8PSAzNjAgJiYgc3dpcGVBbmdsZSA+PSAzMTUpIHtcbiAgICByZXR1cm4gXCJsZWZ0XCI7XG4gIH1cblxuICBpZiAoc3dpcGVBbmdsZSA+PSAxMzUgJiYgc3dpcGVBbmdsZSA8PSAyMjUpIHtcbiAgICByZXR1cm4gXCJyaWdodFwiO1xuICB9XG5cbiAgaWYgKHZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xuICAgIGlmIChzd2lwZUFuZ2xlID49IDM1ICYmIHN3aXBlQW5nbGUgPD0gMTM1KSB7XG4gICAgICByZXR1cm4gXCJ1cFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gXCJkb3duXCI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFwidmVydGljYWxcIjtcbn07IC8vIHdoZXRoZXIgb3Igbm90IHdlIGNhbiBnbyBuZXh0XG5cblxuZXhwb3J0cy5nZXRTd2lwZURpcmVjdGlvbiA9IGdldFN3aXBlRGlyZWN0aW9uO1xuXG52YXIgY2FuR29OZXh0ID0gZnVuY3Rpb24gY2FuR29OZXh0KHNwZWMpIHtcbiAgdmFyIGNhbkdvID0gdHJ1ZTtcblxuICBpZiAoIXNwZWMuaW5maW5pdGUpIHtcbiAgICBpZiAoc3BlYy5jZW50ZXJNb2RlICYmIHNwZWMuY3VycmVudFNsaWRlID49IHNwZWMuc2xpZGVDb3VudCAtIDEpIHtcbiAgICAgIGNhbkdvID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChzcGVjLnNsaWRlQ291bnQgPD0gc3BlYy5zbGlkZXNUb1Nob3cgfHwgc3BlYy5jdXJyZW50U2xpZGUgPj0gc3BlYy5zbGlkZUNvdW50IC0gc3BlYy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgIGNhbkdvID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNhbkdvO1xufTsgLy8gZ2l2ZW4gYW4gb2JqZWN0IGFuZCBhIGxpc3Qgb2Yga2V5cywgcmV0dXJuIG5ldyBvYmplY3Qgd2l0aCBnaXZlbiBrZXlzXG5cblxuZXhwb3J0cy5jYW5Hb05leHQgPSBjYW5Hb05leHQ7XG5cbnZhciBleHRyYWN0T2JqZWN0ID0gZnVuY3Rpb24gZXh0cmFjdE9iamVjdChzcGVjLCBrZXlzKSB7XG4gIHZhciBuZXdPYmplY3QgPSB7fTtcbiAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gbmV3T2JqZWN0W2tleV0gPSBzcGVjW2tleV07XG4gIH0pO1xuICByZXR1cm4gbmV3T2JqZWN0O1xufTsgLy8gZ2V0IGluaXRpYWxpemVkIHN0YXRlXG5cblxuZXhwb3J0cy5leHRyYWN0T2JqZWN0ID0gZXh0cmFjdE9iamVjdDtcblxudmFyIGluaXRpYWxpemVkU3RhdGUgPSBmdW5jdGlvbiBpbml0aWFsaXplZFN0YXRlKHNwZWMpIHtcbiAgLy8gc3BlYyBhbHNvIGNvbnRhaW5zIGxpc3RSZWYsIHRyYWNrUmVmXG4gIHZhciBzbGlkZUNvdW50ID0gX3JlYWN0W1wiZGVmYXVsdFwiXS5DaGlsZHJlbi5jb3VudChzcGVjLmNoaWxkcmVuKTtcblxuICB2YXIgbGlzdE5vZGUgPSBzcGVjLmxpc3RSZWY7XG4gIHZhciBsaXN0V2lkdGggPSBNYXRoLmNlaWwoZ2V0V2lkdGgobGlzdE5vZGUpKTtcbiAgdmFyIHRyYWNrTm9kZSA9IHNwZWMudHJhY2tSZWYgJiYgc3BlYy50cmFja1JlZi5ub2RlO1xuICB2YXIgdHJhY2tXaWR0aCA9IE1hdGguY2VpbChnZXRXaWR0aCh0cmFja05vZGUpKTtcbiAgdmFyIHNsaWRlV2lkdGg7XG5cbiAgaWYgKCFzcGVjLnZlcnRpY2FsKSB7XG4gICAgdmFyIGNlbnRlclBhZGRpbmdBZGogPSBzcGVjLmNlbnRlck1vZGUgJiYgcGFyc2VJbnQoc3BlYy5jZW50ZXJQYWRkaW5nKSAqIDI7XG5cbiAgICBpZiAodHlwZW9mIHNwZWMuY2VudGVyUGFkZGluZyA9PT0gXCJzdHJpbmdcIiAmJiBzcGVjLmNlbnRlclBhZGRpbmcuc2xpY2UoLTEpID09PSBcIiVcIikge1xuICAgICAgY2VudGVyUGFkZGluZ0FkaiAqPSBsaXN0V2lkdGggLyAxMDA7XG4gICAgfVxuXG4gICAgc2xpZGVXaWR0aCA9IE1hdGguY2VpbCgobGlzdFdpZHRoIC0gY2VudGVyUGFkZGluZ0FkaikgLyBzcGVjLnNsaWRlc1RvU2hvdyk7XG4gIH0gZWxzZSB7XG4gICAgc2xpZGVXaWR0aCA9IGxpc3RXaWR0aDtcbiAgfVxuXG4gIHZhciBzbGlkZUhlaWdodCA9IGxpc3ROb2RlICYmIGdldEhlaWdodChsaXN0Tm9kZS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1pbmRleD1cIjBcIl0nKSk7XG4gIHZhciBsaXN0SGVpZ2h0ID0gc2xpZGVIZWlnaHQgKiBzcGVjLnNsaWRlc1RvU2hvdztcbiAgdmFyIGN1cnJlbnRTbGlkZSA9IHNwZWMuY3VycmVudFNsaWRlID09PSB1bmRlZmluZWQgPyBzcGVjLmluaXRpYWxTbGlkZSA6IHNwZWMuY3VycmVudFNsaWRlO1xuXG4gIGlmIChzcGVjLnJ0bCAmJiBzcGVjLmN1cnJlbnRTbGlkZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY3VycmVudFNsaWRlID0gc2xpZGVDb3VudCAtIDEgLSBzcGVjLmluaXRpYWxTbGlkZTtcbiAgfVxuXG4gIHZhciBsYXp5TG9hZGVkTGlzdCA9IHNwZWMubGF6eUxvYWRlZExpc3QgfHwgW107XG4gIHZhciBzbGlkZXNUb0xvYWQgPSBnZXRPbkRlbWFuZExhenlTbGlkZXMoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBzcGVjKSwge30sIHtcbiAgICBjdXJyZW50U2xpZGU6IGN1cnJlbnRTbGlkZSxcbiAgICBsYXp5TG9hZGVkTGlzdDogbGF6eUxvYWRlZExpc3RcbiAgfSkpO1xuICBsYXp5TG9hZGVkTGlzdC5jb25jYXQoc2xpZGVzVG9Mb2FkKTtcbiAgdmFyIHN0YXRlID0ge1xuICAgIHNsaWRlQ291bnQ6IHNsaWRlQ291bnQsXG4gICAgc2xpZGVXaWR0aDogc2xpZGVXaWR0aCxcbiAgICBsaXN0V2lkdGg6IGxpc3RXaWR0aCxcbiAgICB0cmFja1dpZHRoOiB0cmFja1dpZHRoLFxuICAgIGN1cnJlbnRTbGlkZTogY3VycmVudFNsaWRlLFxuICAgIHNsaWRlSGVpZ2h0OiBzbGlkZUhlaWdodCxcbiAgICBsaXN0SGVpZ2h0OiBsaXN0SGVpZ2h0LFxuICAgIGxhenlMb2FkZWRMaXN0OiBsYXp5TG9hZGVkTGlzdFxuICB9O1xuXG4gIGlmIChzcGVjLmF1dG9wbGF5aW5nID09PSBudWxsICYmIHNwZWMuYXV0b3BsYXkpIHtcbiAgICBzdGF0ZVtcImF1dG9wbGF5aW5nXCJdID0gXCJwbGF5aW5nXCI7XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59O1xuXG5leHBvcnRzLmluaXRpYWxpemVkU3RhdGUgPSBpbml0aWFsaXplZFN0YXRlO1xuXG52YXIgc2xpZGVIYW5kbGVyID0gZnVuY3Rpb24gc2xpZGVIYW5kbGVyKHNwZWMpIHtcbiAgdmFyIHdhaXRGb3JBbmltYXRlID0gc3BlYy53YWl0Rm9yQW5pbWF0ZSxcbiAgICAgIGFuaW1hdGluZyA9IHNwZWMuYW5pbWF0aW5nLFxuICAgICAgZmFkZSA9IHNwZWMuZmFkZSxcbiAgICAgIGluZmluaXRlID0gc3BlYy5pbmZpbml0ZSxcbiAgICAgIGluZGV4ID0gc3BlYy5pbmRleCxcbiAgICAgIHNsaWRlQ291bnQgPSBzcGVjLnNsaWRlQ291bnQsXG4gICAgICBsYXp5TG9hZGVkTGlzdCA9IHNwZWMubGF6eUxvYWRlZExpc3QsXG4gICAgICBsYXp5TG9hZCA9IHNwZWMubGF6eUxvYWQsXG4gICAgICBjdXJyZW50U2xpZGUgPSBzcGVjLmN1cnJlbnRTbGlkZSxcbiAgICAgIGNlbnRlck1vZGUgPSBzcGVjLmNlbnRlck1vZGUsXG4gICAgICBzbGlkZXNUb1Njcm9sbCA9IHNwZWMuc2xpZGVzVG9TY3JvbGwsXG4gICAgICBzbGlkZXNUb1Nob3cgPSBzcGVjLnNsaWRlc1RvU2hvdyxcbiAgICAgIHVzZUNTUyA9IHNwZWMudXNlQ1NTO1xuICBpZiAod2FpdEZvckFuaW1hdGUgJiYgYW5pbWF0aW5nKSByZXR1cm4ge307XG4gIHZhciBhbmltYXRpb25TbGlkZSA9IGluZGV4LFxuICAgICAgZmluYWxTbGlkZSxcbiAgICAgIGFuaW1hdGlvbkxlZnQsXG4gICAgICBmaW5hbExlZnQ7XG4gIHZhciBzdGF0ZSA9IHt9LFxuICAgICAgbmV4dFN0YXRlID0ge307XG4gIHZhciB0YXJnZXRTbGlkZSA9IGluZmluaXRlID8gaW5kZXggOiBjbGFtcChpbmRleCwgMCwgc2xpZGVDb3VudCAtIDEpO1xuXG4gIGlmIChmYWRlKSB7XG4gICAgaWYgKCFpbmZpbml0ZSAmJiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHNsaWRlQ291bnQpKSByZXR1cm4ge307XG5cbiAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICBhbmltYXRpb25TbGlkZSA9IGluZGV4ICsgc2xpZGVDb3VudDtcbiAgICB9IGVsc2UgaWYgKGluZGV4ID49IHNsaWRlQ291bnQpIHtcbiAgICAgIGFuaW1hdGlvblNsaWRlID0gaW5kZXggLSBzbGlkZUNvdW50O1xuICAgIH1cblxuICAgIGlmIChsYXp5TG9hZCAmJiBsYXp5TG9hZGVkTGlzdC5pbmRleE9mKGFuaW1hdGlvblNsaWRlKSA8IDApIHtcbiAgICAgIGxhenlMb2FkZWRMaXN0LnB1c2goYW5pbWF0aW9uU2xpZGUpO1xuICAgIH1cblxuICAgIHN0YXRlID0ge1xuICAgICAgYW5pbWF0aW5nOiB0cnVlLFxuICAgICAgY3VycmVudFNsaWRlOiBhbmltYXRpb25TbGlkZSxcbiAgICAgIGxhenlMb2FkZWRMaXN0OiBsYXp5TG9hZGVkTGlzdCxcbiAgICAgIHRhcmdldFNsaWRlOiBhbmltYXRpb25TbGlkZVxuICAgIH07XG4gICAgbmV4dFN0YXRlID0ge1xuICAgICAgYW5pbWF0aW5nOiBmYWxzZSxcbiAgICAgIHRhcmdldFNsaWRlOiBhbmltYXRpb25TbGlkZVxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgZmluYWxTbGlkZSA9IGFuaW1hdGlvblNsaWRlO1xuXG4gICAgaWYgKGFuaW1hdGlvblNsaWRlIDwgMCkge1xuICAgICAgZmluYWxTbGlkZSA9IGFuaW1hdGlvblNsaWRlICsgc2xpZGVDb3VudDtcbiAgICAgIGlmICghaW5maW5pdGUpIGZpbmFsU2xpZGUgPSAwO2Vsc2UgaWYgKHNsaWRlQ291bnQgJSBzbGlkZXNUb1Njcm9sbCAhPT0gMCkgZmluYWxTbGlkZSA9IHNsaWRlQ291bnQgLSBzbGlkZUNvdW50ICUgc2xpZGVzVG9TY3JvbGw7XG4gICAgfSBlbHNlIGlmICghY2FuR29OZXh0KHNwZWMpICYmIGFuaW1hdGlvblNsaWRlID4gY3VycmVudFNsaWRlKSB7XG4gICAgICBhbmltYXRpb25TbGlkZSA9IGZpbmFsU2xpZGUgPSBjdXJyZW50U2xpZGU7XG4gICAgfSBlbHNlIGlmIChjZW50ZXJNb2RlICYmIGFuaW1hdGlvblNsaWRlID49IHNsaWRlQ291bnQpIHtcbiAgICAgIGFuaW1hdGlvblNsaWRlID0gaW5maW5pdGUgPyBzbGlkZUNvdW50IDogc2xpZGVDb3VudCAtIDE7XG4gICAgICBmaW5hbFNsaWRlID0gaW5maW5pdGUgPyAwIDogc2xpZGVDb3VudCAtIDE7XG4gICAgfSBlbHNlIGlmIChhbmltYXRpb25TbGlkZSA+PSBzbGlkZUNvdW50KSB7XG4gICAgICBmaW5hbFNsaWRlID0gYW5pbWF0aW9uU2xpZGUgLSBzbGlkZUNvdW50O1xuICAgICAgaWYgKCFpbmZpbml0ZSkgZmluYWxTbGlkZSA9IHNsaWRlQ291bnQgLSBzbGlkZXNUb1Nob3c7ZWxzZSBpZiAoc2xpZGVDb3VudCAlIHNsaWRlc1RvU2Nyb2xsICE9PSAwKSBmaW5hbFNsaWRlID0gMDtcbiAgICB9XG5cbiAgICBpZiAoIWluZmluaXRlICYmIGFuaW1hdGlvblNsaWRlICsgc2xpZGVzVG9TaG93ID49IHNsaWRlQ291bnQpIHtcbiAgICAgIGZpbmFsU2xpZGUgPSBzbGlkZUNvdW50IC0gc2xpZGVzVG9TaG93O1xuICAgIH1cblxuICAgIGFuaW1hdGlvbkxlZnQgPSBnZXRUcmFja0xlZnQoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBzcGVjKSwge30sIHtcbiAgICAgIHNsaWRlSW5kZXg6IGFuaW1hdGlvblNsaWRlXG4gICAgfSkpO1xuICAgIGZpbmFsTGVmdCA9IGdldFRyYWNrTGVmdChfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHNwZWMpLCB7fSwge1xuICAgICAgc2xpZGVJbmRleDogZmluYWxTbGlkZVxuICAgIH0pKTtcblxuICAgIGlmICghaW5maW5pdGUpIHtcbiAgICAgIGlmIChhbmltYXRpb25MZWZ0ID09PSBmaW5hbExlZnQpIGFuaW1hdGlvblNsaWRlID0gZmluYWxTbGlkZTtcbiAgICAgIGFuaW1hdGlvbkxlZnQgPSBmaW5hbExlZnQ7XG4gICAgfVxuXG4gICAgbGF6eUxvYWQgJiYgbGF6eUxvYWRlZExpc3QuY29uY2F0KGdldE9uRGVtYW5kTGF6eVNsaWRlcyhfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHNwZWMpLCB7fSwge1xuICAgICAgY3VycmVudFNsaWRlOiBhbmltYXRpb25TbGlkZVxuICAgIH0pKSk7XG5cbiAgICBpZiAoIXVzZUNTUykge1xuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIGN1cnJlbnRTbGlkZTogZmluYWxTbGlkZSxcbiAgICAgICAgdHJhY2tTdHlsZTogZ2V0VHJhY2tDU1MoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBzcGVjKSwge30sIHtcbiAgICAgICAgICBsZWZ0OiBmaW5hbExlZnRcbiAgICAgICAgfSkpLFxuICAgICAgICBsYXp5TG9hZGVkTGlzdDogbGF6eUxvYWRlZExpc3QsXG4gICAgICAgIHRhcmdldFNsaWRlOiB0YXJnZXRTbGlkZVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIGFuaW1hdGluZzogdHJ1ZSxcbiAgICAgICAgY3VycmVudFNsaWRlOiBmaW5hbFNsaWRlLFxuICAgICAgICB0cmFja1N0eWxlOiBnZXRUcmFja0FuaW1hdGVDU1MoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBzcGVjKSwge30sIHtcbiAgICAgICAgICBsZWZ0OiBhbmltYXRpb25MZWZ0XG4gICAgICAgIH0pKSxcbiAgICAgICAgbGF6eUxvYWRlZExpc3Q6IGxhenlMb2FkZWRMaXN0LFxuICAgICAgICB0YXJnZXRTbGlkZTogdGFyZ2V0U2xpZGVcbiAgICAgIH07XG4gICAgICBuZXh0U3RhdGUgPSB7XG4gICAgICAgIGFuaW1hdGluZzogZmFsc2UsXG4gICAgICAgIGN1cnJlbnRTbGlkZTogZmluYWxTbGlkZSxcbiAgICAgICAgdHJhY2tTdHlsZTogZ2V0VHJhY2tDU1MoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBzcGVjKSwge30sIHtcbiAgICAgICAgICBsZWZ0OiBmaW5hbExlZnRcbiAgICAgICAgfSkpLFxuICAgICAgICBzd2lwZUxlZnQ6IG51bGwsXG4gICAgICAgIHRhcmdldFNsaWRlOiB0YXJnZXRTbGlkZVxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHN0YXRlOiBzdGF0ZSxcbiAgICBuZXh0U3RhdGU6IG5leHRTdGF0ZVxuICB9O1xufTtcblxuZXhwb3J0cy5zbGlkZUhhbmRsZXIgPSBzbGlkZUhhbmRsZXI7XG5cbnZhciBjaGFuZ2VTbGlkZSA9IGZ1bmN0aW9uIGNoYW5nZVNsaWRlKHNwZWMsIG9wdGlvbnMpIHtcbiAgdmFyIGluZGV4T2Zmc2V0LCBwcmV2aW91c0ludCwgc2xpZGVPZmZzZXQsIHVuZXZlbk9mZnNldCwgdGFyZ2V0U2xpZGU7XG4gIHZhciBzbGlkZXNUb1Njcm9sbCA9IHNwZWMuc2xpZGVzVG9TY3JvbGwsXG4gICAgICBzbGlkZXNUb1Nob3cgPSBzcGVjLnNsaWRlc1RvU2hvdyxcbiAgICAgIHNsaWRlQ291bnQgPSBzcGVjLnNsaWRlQ291bnQsXG4gICAgICBjdXJyZW50U2xpZGUgPSBzcGVjLmN1cnJlbnRTbGlkZSxcbiAgICAgIHByZXZpb3VzVGFyZ2V0U2xpZGUgPSBzcGVjLnRhcmdldFNsaWRlLFxuICAgICAgbGF6eUxvYWQgPSBzcGVjLmxhenlMb2FkLFxuICAgICAgaW5maW5pdGUgPSBzcGVjLmluZmluaXRlO1xuICB1bmV2ZW5PZmZzZXQgPSBzbGlkZUNvdW50ICUgc2xpZGVzVG9TY3JvbGwgIT09IDA7XG4gIGluZGV4T2Zmc2V0ID0gdW5ldmVuT2Zmc2V0ID8gMCA6IChzbGlkZUNvdW50IC0gY3VycmVudFNsaWRlKSAlIHNsaWRlc1RvU2Nyb2xsO1xuXG4gIGlmIChvcHRpb25zLm1lc3NhZ2UgPT09IFwicHJldmlvdXNcIikge1xuICAgIHNsaWRlT2Zmc2V0ID0gaW5kZXhPZmZzZXQgPT09IDAgPyBzbGlkZXNUb1Njcm9sbCA6IHNsaWRlc1RvU2hvdyAtIGluZGV4T2Zmc2V0O1xuICAgIHRhcmdldFNsaWRlID0gY3VycmVudFNsaWRlIC0gc2xpZGVPZmZzZXQ7XG5cbiAgICBpZiAobGF6eUxvYWQgJiYgIWluZmluaXRlKSB7XG4gICAgICBwcmV2aW91c0ludCA9IGN1cnJlbnRTbGlkZSAtIHNsaWRlT2Zmc2V0O1xuICAgICAgdGFyZ2V0U2xpZGUgPSBwcmV2aW91c0ludCA9PT0gLTEgPyBzbGlkZUNvdW50IC0gMSA6IHByZXZpb3VzSW50O1xuICAgIH1cblxuICAgIGlmICghaW5maW5pdGUpIHtcbiAgICAgIHRhcmdldFNsaWRlID0gcHJldmlvdXNUYXJnZXRTbGlkZSAtIHNsaWRlc1RvU2Nyb2xsO1xuICAgIH1cbiAgfSBlbHNlIGlmIChvcHRpb25zLm1lc3NhZ2UgPT09IFwibmV4dFwiKSB7XG4gICAgc2xpZGVPZmZzZXQgPSBpbmRleE9mZnNldCA9PT0gMCA/IHNsaWRlc1RvU2Nyb2xsIDogaW5kZXhPZmZzZXQ7XG4gICAgdGFyZ2V0U2xpZGUgPSBjdXJyZW50U2xpZGUgKyBzbGlkZU9mZnNldDtcblxuICAgIGlmIChsYXp5TG9hZCAmJiAhaW5maW5pdGUpIHtcbiAgICAgIHRhcmdldFNsaWRlID0gKGN1cnJlbnRTbGlkZSArIHNsaWRlc1RvU2Nyb2xsKSAlIHNsaWRlQ291bnQgKyBpbmRleE9mZnNldDtcbiAgICB9XG5cbiAgICBpZiAoIWluZmluaXRlKSB7XG4gICAgICB0YXJnZXRTbGlkZSA9IHByZXZpb3VzVGFyZ2V0U2xpZGUgKyBzbGlkZXNUb1Njcm9sbDtcbiAgICB9XG4gIH0gZWxzZSBpZiAob3B0aW9ucy5tZXNzYWdlID09PSBcImRvdHNcIikge1xuICAgIC8vIENsaWNrIG9uIGRvdHNcbiAgICB0YXJnZXRTbGlkZSA9IG9wdGlvbnMuaW5kZXggKiBvcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuICB9IGVsc2UgaWYgKG9wdGlvbnMubWVzc2FnZSA9PT0gXCJjaGlsZHJlblwiKSB7XG4gICAgLy8gQ2xpY2sgb24gdGhlIHNsaWRlc1xuICAgIHRhcmdldFNsaWRlID0gb3B0aW9ucy5pbmRleDtcblxuICAgIGlmIChpbmZpbml0ZSkge1xuICAgICAgdmFyIGRpcmVjdGlvbiA9IHNpYmxpbmdEaXJlY3Rpb24oX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBzcGVjKSwge30sIHtcbiAgICAgICAgdGFyZ2V0U2xpZGU6IHRhcmdldFNsaWRlXG4gICAgICB9KSk7XG5cbiAgICAgIGlmICh0YXJnZXRTbGlkZSA+IG9wdGlvbnMuY3VycmVudFNsaWRlICYmIGRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgdGFyZ2V0U2xpZGUgPSB0YXJnZXRTbGlkZSAtIHNsaWRlQ291bnQ7XG4gICAgICB9IGVsc2UgaWYgKHRhcmdldFNsaWRlIDwgb3B0aW9ucy5jdXJyZW50U2xpZGUgJiYgZGlyZWN0aW9uID09PSBcInJpZ2h0XCIpIHtcbiAgICAgICAgdGFyZ2V0U2xpZGUgPSB0YXJnZXRTbGlkZSArIHNsaWRlQ291bnQ7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKG9wdGlvbnMubWVzc2FnZSA9PT0gXCJpbmRleFwiKSB7XG4gICAgdGFyZ2V0U2xpZGUgPSBOdW1iZXIob3B0aW9ucy5pbmRleCk7XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0U2xpZGU7XG59O1xuXG5leHBvcnRzLmNoYW5nZVNsaWRlID0gY2hhbmdlU2xpZGU7XG5cbnZhciBrZXlIYW5kbGVyID0gZnVuY3Rpb24ga2V5SGFuZGxlcihlLCBhY2Nlc3NpYmlsaXR5LCBydGwpIHtcbiAgaWYgKGUudGFyZ2V0LnRhZ05hbWUubWF0Y2goXCJURVhUQVJFQXxJTlBVVHxTRUxFQ1RcIikgfHwgIWFjY2Vzc2liaWxpdHkpIHJldHVybiBcIlwiO1xuICBpZiAoZS5rZXlDb2RlID09PSAzNykgcmV0dXJuIHJ0bCA/IFwibmV4dFwiIDogXCJwcmV2aW91c1wiO1xuICBpZiAoZS5rZXlDb2RlID09PSAzOSkgcmV0dXJuIHJ0bCA/IFwicHJldmlvdXNcIiA6IFwibmV4dFwiO1xuICByZXR1cm4gXCJcIjtcbn07XG5cbmV4cG9ydHMua2V5SGFuZGxlciA9IGtleUhhbmRsZXI7XG5cbnZhciBzd2lwZVN0YXJ0ID0gZnVuY3Rpb24gc3dpcGVTdGFydChlLCBzd2lwZSwgZHJhZ2dhYmxlKSB7XG4gIGUudGFyZ2V0LnRhZ05hbWUgPT09IFwiSU1HXCIgJiYgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBpZiAoIXN3aXBlIHx8ICFkcmFnZ2FibGUgJiYgZS50eXBlLmluZGV4T2YoXCJtb3VzZVwiKSAhPT0gLTEpIHJldHVybiBcIlwiO1xuICByZXR1cm4ge1xuICAgIGRyYWdnaW5nOiB0cnVlLFxuICAgIHRvdWNoT2JqZWN0OiB7XG4gICAgICBzdGFydFg6IGUudG91Y2hlcyA/IGUudG91Y2hlc1swXS5wYWdlWCA6IGUuY2xpZW50WCxcbiAgICAgIHN0YXJ0WTogZS50b3VjaGVzID8gZS50b3VjaGVzWzBdLnBhZ2VZIDogZS5jbGllbnRZLFxuICAgICAgY3VyWDogZS50b3VjaGVzID8gZS50b3VjaGVzWzBdLnBhZ2VYIDogZS5jbGllbnRYLFxuICAgICAgY3VyWTogZS50b3VjaGVzID8gZS50b3VjaGVzWzBdLnBhZ2VZIDogZS5jbGllbnRZXG4gICAgfVxuICB9O1xufTtcblxuZXhwb3J0cy5zd2lwZVN0YXJ0ID0gc3dpcGVTdGFydDtcblxudmFyIHN3aXBlTW92ZSA9IGZ1bmN0aW9uIHN3aXBlTW92ZShlLCBzcGVjKSB7XG4gIC8vIHNwZWMgYWxzbyBjb250YWlucywgdHJhY2tSZWYgYW5kIHNsaWRlSW5kZXhcbiAgdmFyIHNjcm9sbGluZyA9IHNwZWMuc2Nyb2xsaW5nLFxuICAgICAgYW5pbWF0aW5nID0gc3BlYy5hbmltYXRpbmcsXG4gICAgICB2ZXJ0aWNhbCA9IHNwZWMudmVydGljYWwsXG4gICAgICBzd2lwZVRvU2xpZGUgPSBzcGVjLnN3aXBlVG9TbGlkZSxcbiAgICAgIHZlcnRpY2FsU3dpcGluZyA9IHNwZWMudmVydGljYWxTd2lwaW5nLFxuICAgICAgcnRsID0gc3BlYy5ydGwsXG4gICAgICBjdXJyZW50U2xpZGUgPSBzcGVjLmN1cnJlbnRTbGlkZSxcbiAgICAgIGVkZ2VGcmljdGlvbiA9IHNwZWMuZWRnZUZyaWN0aW9uLFxuICAgICAgZWRnZURyYWdnZWQgPSBzcGVjLmVkZ2VEcmFnZ2VkLFxuICAgICAgb25FZGdlID0gc3BlYy5vbkVkZ2UsXG4gICAgICBzd2lwZWQgPSBzcGVjLnN3aXBlZCxcbiAgICAgIHN3aXBpbmcgPSBzcGVjLnN3aXBpbmcsXG4gICAgICBzbGlkZUNvdW50ID0gc3BlYy5zbGlkZUNvdW50LFxuICAgICAgc2xpZGVzVG9TY3JvbGwgPSBzcGVjLnNsaWRlc1RvU2Nyb2xsLFxuICAgICAgaW5maW5pdGUgPSBzcGVjLmluZmluaXRlLFxuICAgICAgdG91Y2hPYmplY3QgPSBzcGVjLnRvdWNoT2JqZWN0LFxuICAgICAgc3dpcGVFdmVudCA9IHNwZWMuc3dpcGVFdmVudCxcbiAgICAgIGxpc3RIZWlnaHQgPSBzcGVjLmxpc3RIZWlnaHQsXG4gICAgICBsaXN0V2lkdGggPSBzcGVjLmxpc3RXaWR0aDtcbiAgaWYgKHNjcm9sbGluZykgcmV0dXJuO1xuICBpZiAoYW5pbWF0aW5nKSByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBpZiAodmVydGljYWwgJiYgc3dpcGVUb1NsaWRlICYmIHZlcnRpY2FsU3dpcGluZykgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB2YXIgc3dpcGVMZWZ0LFxuICAgICAgc3RhdGUgPSB7fTtcbiAgdmFyIGN1ckxlZnQgPSBnZXRUcmFja0xlZnQoc3BlYyk7XG4gIHRvdWNoT2JqZWN0LmN1clggPSBlLnRvdWNoZXMgPyBlLnRvdWNoZXNbMF0ucGFnZVggOiBlLmNsaWVudFg7XG4gIHRvdWNoT2JqZWN0LmN1clkgPSBlLnRvdWNoZXMgPyBlLnRvdWNoZXNbMF0ucGFnZVkgOiBlLmNsaWVudFk7XG4gIHRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID0gTWF0aC5yb3VuZChNYXRoLnNxcnQoTWF0aC5wb3codG91Y2hPYmplY3QuY3VyWCAtIHRvdWNoT2JqZWN0LnN0YXJ0WCwgMikpKTtcbiAgdmFyIHZlcnRpY2FsU3dpcGVMZW5ndGggPSBNYXRoLnJvdW5kKE1hdGguc3FydChNYXRoLnBvdyh0b3VjaE9iamVjdC5jdXJZIC0gdG91Y2hPYmplY3Quc3RhcnRZLCAyKSkpO1xuXG4gIGlmICghdmVydGljYWxTd2lwaW5nICYmICFzd2lwaW5nICYmIHZlcnRpY2FsU3dpcGVMZW5ndGggPiAxMCkge1xuICAgIHJldHVybiB7XG4gICAgICBzY3JvbGxpbmc6IHRydWVcbiAgICB9O1xuICB9XG5cbiAgaWYgKHZlcnRpY2FsU3dpcGluZykgdG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPSB2ZXJ0aWNhbFN3aXBlTGVuZ3RoO1xuICB2YXIgcG9zaXRpb25PZmZzZXQgPSAoIXJ0bCA/IDEgOiAtMSkgKiAodG91Y2hPYmplY3QuY3VyWCA+IHRvdWNoT2JqZWN0LnN0YXJ0WCA/IDEgOiAtMSk7XG4gIGlmICh2ZXJ0aWNhbFN3aXBpbmcpIHBvc2l0aW9uT2Zmc2V0ID0gdG91Y2hPYmplY3QuY3VyWSA+IHRvdWNoT2JqZWN0LnN0YXJ0WSA/IDEgOiAtMTtcbiAgdmFyIGRvdENvdW50ID0gTWF0aC5jZWlsKHNsaWRlQ291bnQgLyBzbGlkZXNUb1Njcm9sbCk7XG4gIHZhciBzd2lwZURpcmVjdGlvbiA9IGdldFN3aXBlRGlyZWN0aW9uKHNwZWMudG91Y2hPYmplY3QsIHZlcnRpY2FsU3dpcGluZyk7XG4gIHZhciB0b3VjaFN3aXBlTGVuZ3RoID0gdG91Y2hPYmplY3Quc3dpcGVMZW5ndGg7XG5cbiAgaWYgKCFpbmZpbml0ZSkge1xuICAgIGlmIChjdXJyZW50U2xpZGUgPT09IDAgJiYgc3dpcGVEaXJlY3Rpb24gPT09IFwicmlnaHRcIiB8fCBjdXJyZW50U2xpZGUgKyAxID49IGRvdENvdW50ICYmIHN3aXBlRGlyZWN0aW9uID09PSBcImxlZnRcIiB8fCAhY2FuR29OZXh0KHNwZWMpICYmIHN3aXBlRGlyZWN0aW9uID09PSBcImxlZnRcIikge1xuICAgICAgdG91Y2hTd2lwZUxlbmd0aCA9IHRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoICogZWRnZUZyaWN0aW9uO1xuXG4gICAgICBpZiAoZWRnZURyYWdnZWQgPT09IGZhbHNlICYmIG9uRWRnZSkge1xuICAgICAgICBvbkVkZ2Uoc3dpcGVEaXJlY3Rpb24pO1xuICAgICAgICBzdGF0ZVtcImVkZ2VEcmFnZ2VkXCJdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoIXN3aXBlZCAmJiBzd2lwZUV2ZW50KSB7XG4gICAgc3dpcGVFdmVudChzd2lwZURpcmVjdGlvbik7XG4gICAgc3RhdGVbXCJzd2lwZWRcIl0gPSB0cnVlO1xuICB9XG5cbiAgaWYgKCF2ZXJ0aWNhbCkge1xuICAgIGlmICghcnRsKSB7XG4gICAgICBzd2lwZUxlZnQgPSBjdXJMZWZ0ICsgdG91Y2hTd2lwZUxlbmd0aCAqIHBvc2l0aW9uT2Zmc2V0O1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZUxlZnQgPSBjdXJMZWZ0IC0gdG91Y2hTd2lwZUxlbmd0aCAqIHBvc2l0aW9uT2Zmc2V0O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzd2lwZUxlZnQgPSBjdXJMZWZ0ICsgdG91Y2hTd2lwZUxlbmd0aCAqIChsaXN0SGVpZ2h0IC8gbGlzdFdpZHRoKSAqIHBvc2l0aW9uT2Zmc2V0O1xuICB9XG5cbiAgaWYgKHZlcnRpY2FsU3dpcGluZykge1xuICAgIHN3aXBlTGVmdCA9IGN1ckxlZnQgKyB0b3VjaFN3aXBlTGVuZ3RoICogcG9zaXRpb25PZmZzZXQ7XG4gIH1cblxuICBzdGF0ZSA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgc3RhdGUpLCB7fSwge1xuICAgIHRvdWNoT2JqZWN0OiB0b3VjaE9iamVjdCxcbiAgICBzd2lwZUxlZnQ6IHN3aXBlTGVmdCxcbiAgICB0cmFja1N0eWxlOiBnZXRUcmFja0NTUyhfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHNwZWMpLCB7fSwge1xuICAgICAgbGVmdDogc3dpcGVMZWZ0XG4gICAgfSkpXG4gIH0pO1xuXG4gIGlmIChNYXRoLmFicyh0b3VjaE9iamVjdC5jdXJYIC0gdG91Y2hPYmplY3Quc3RhcnRYKSA8IE1hdGguYWJzKHRvdWNoT2JqZWN0LmN1clkgLSB0b3VjaE9iamVjdC5zdGFydFkpICogMC44KSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgaWYgKHRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID4gMTApIHtcbiAgICBzdGF0ZVtcInN3aXBpbmdcIl0gPSB0cnVlO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn07XG5cbmV4cG9ydHMuc3dpcGVNb3ZlID0gc3dpcGVNb3ZlO1xuXG52YXIgc3dpcGVFbmQgPSBmdW5jdGlvbiBzd2lwZUVuZChlLCBzcGVjKSB7XG4gIHZhciBkcmFnZ2luZyA9IHNwZWMuZHJhZ2dpbmcsXG4gICAgICBzd2lwZSA9IHNwZWMuc3dpcGUsXG4gICAgICB0b3VjaE9iamVjdCA9IHNwZWMudG91Y2hPYmplY3QsXG4gICAgICBsaXN0V2lkdGggPSBzcGVjLmxpc3RXaWR0aCxcbiAgICAgIHRvdWNoVGhyZXNob2xkID0gc3BlYy50b3VjaFRocmVzaG9sZCxcbiAgICAgIHZlcnRpY2FsU3dpcGluZyA9IHNwZWMudmVydGljYWxTd2lwaW5nLFxuICAgICAgbGlzdEhlaWdodCA9IHNwZWMubGlzdEhlaWdodCxcbiAgICAgIHN3aXBlVG9TbGlkZSA9IHNwZWMuc3dpcGVUb1NsaWRlLFxuICAgICAgc2Nyb2xsaW5nID0gc3BlYy5zY3JvbGxpbmcsXG4gICAgICBvblN3aXBlID0gc3BlYy5vblN3aXBlLFxuICAgICAgdGFyZ2V0U2xpZGUgPSBzcGVjLnRhcmdldFNsaWRlLFxuICAgICAgY3VycmVudFNsaWRlID0gc3BlYy5jdXJyZW50U2xpZGUsXG4gICAgICBpbmZpbml0ZSA9IHNwZWMuaW5maW5pdGU7XG5cbiAgaWYgKCFkcmFnZ2luZykge1xuICAgIGlmIChzd2lwZSkgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIHZhciBtaW5Td2lwZSA9IHZlcnRpY2FsU3dpcGluZyA/IGxpc3RIZWlnaHQgLyB0b3VjaFRocmVzaG9sZCA6IGxpc3RXaWR0aCAvIHRvdWNoVGhyZXNob2xkO1xuICB2YXIgc3dpcGVEaXJlY3Rpb24gPSBnZXRTd2lwZURpcmVjdGlvbih0b3VjaE9iamVjdCwgdmVydGljYWxTd2lwaW5nKTsgLy8gcmVzZXQgdGhlIHN0YXRlIG9mIHRvdWNoIHJlbGF0ZWQgc3RhdGUgdmFyaWFibGVzLlxuXG4gIHZhciBzdGF0ZSA9IHtcbiAgICBkcmFnZ2luZzogZmFsc2UsXG4gICAgZWRnZURyYWdnZWQ6IGZhbHNlLFxuICAgIHNjcm9sbGluZzogZmFsc2UsXG4gICAgc3dpcGluZzogZmFsc2UsXG4gICAgc3dpcGVkOiBmYWxzZSxcbiAgICBzd2lwZUxlZnQ6IG51bGwsXG4gICAgdG91Y2hPYmplY3Q6IHt9XG4gIH07XG5cbiAgaWYgKHNjcm9sbGluZykge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIGlmICghdG91Y2hPYmplY3Quc3dpcGVMZW5ndGgpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICBpZiAodG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPiBtaW5Td2lwZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmIChvblN3aXBlKSB7XG4gICAgICBvblN3aXBlKHN3aXBlRGlyZWN0aW9uKTtcbiAgICB9XG5cbiAgICB2YXIgc2xpZGVDb3VudCwgbmV3U2xpZGU7XG4gICAgdmFyIGFjdGl2ZVNsaWRlID0gaW5maW5pdGUgPyBjdXJyZW50U2xpZGUgOiB0YXJnZXRTbGlkZTtcblxuICAgIHN3aXRjaCAoc3dpcGVEaXJlY3Rpb24pIHtcbiAgICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICBjYXNlIFwidXBcIjpcbiAgICAgICAgbmV3U2xpZGUgPSBhY3RpdmVTbGlkZSArIGdldFNsaWRlQ291bnQoc3BlYyk7XG4gICAgICAgIHNsaWRlQ291bnQgPSBzd2lwZVRvU2xpZGUgPyBjaGVja05hdmlnYWJsZShzcGVjLCBuZXdTbGlkZSkgOiBuZXdTbGlkZTtcbiAgICAgICAgc3RhdGVbXCJjdXJyZW50RGlyZWN0aW9uXCJdID0gMDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgY2FzZSBcImRvd25cIjpcbiAgICAgICAgbmV3U2xpZGUgPSBhY3RpdmVTbGlkZSAtIGdldFNsaWRlQ291bnQoc3BlYyk7XG4gICAgICAgIHNsaWRlQ291bnQgPSBzd2lwZVRvU2xpZGUgPyBjaGVja05hdmlnYWJsZShzcGVjLCBuZXdTbGlkZSkgOiBuZXdTbGlkZTtcbiAgICAgICAgc3RhdGVbXCJjdXJyZW50RGlyZWN0aW9uXCJdID0gMTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHNsaWRlQ291bnQgPSBhY3RpdmVTbGlkZTtcbiAgICB9XG5cbiAgICBzdGF0ZVtcInRyaWdnZXJTbGlkZUhhbmRsZXJcIl0gPSBzbGlkZUNvdW50O1xuICB9IGVsc2Uge1xuICAgIC8vIEFkanVzdCB0aGUgdHJhY2sgYmFjayB0byBpdCdzIG9yaWdpbmFsIHBvc2l0aW9uLlxuICAgIHZhciBjdXJyZW50TGVmdCA9IGdldFRyYWNrTGVmdChzcGVjKTtcbiAgICBzdGF0ZVtcInRyYWNrU3R5bGVcIl0gPSBnZXRUcmFja0FuaW1hdGVDU1MoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBzcGVjKSwge30sIHtcbiAgICAgIGxlZnQ6IGN1cnJlbnRMZWZ0XG4gICAgfSkpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufTtcblxuZXhwb3J0cy5zd2lwZUVuZCA9IHN3aXBlRW5kO1xuXG52YXIgZ2V0TmF2aWdhYmxlSW5kZXhlcyA9IGZ1bmN0aW9uIGdldE5hdmlnYWJsZUluZGV4ZXMoc3BlYykge1xuICB2YXIgbWF4ID0gc3BlYy5pbmZpbml0ZSA/IHNwZWMuc2xpZGVDb3VudCAqIDIgOiBzcGVjLnNsaWRlQ291bnQ7XG4gIHZhciBicmVha3BvaW50ID0gc3BlYy5pbmZpbml0ZSA/IHNwZWMuc2xpZGVzVG9TaG93ICogLTEgOiAwO1xuICB2YXIgY291bnRlciA9IHNwZWMuaW5maW5pdGUgPyBzcGVjLnNsaWRlc1RvU2hvdyAqIC0xIDogMDtcbiAgdmFyIGluZGV4ZXMgPSBbXTtcblxuICB3aGlsZSAoYnJlYWtwb2ludCA8IG1heCkge1xuICAgIGluZGV4ZXMucHVzaChicmVha3BvaW50KTtcbiAgICBicmVha3BvaW50ID0gY291bnRlciArIHNwZWMuc2xpZGVzVG9TY3JvbGw7XG4gICAgY291bnRlciArPSBNYXRoLm1pbihzcGVjLnNsaWRlc1RvU2Nyb2xsLCBzcGVjLnNsaWRlc1RvU2hvdyk7XG4gIH1cblxuICByZXR1cm4gaW5kZXhlcztcbn07XG5cbmV4cG9ydHMuZ2V0TmF2aWdhYmxlSW5kZXhlcyA9IGdldE5hdmlnYWJsZUluZGV4ZXM7XG5cbnZhciBjaGVja05hdmlnYWJsZSA9IGZ1bmN0aW9uIGNoZWNrTmF2aWdhYmxlKHNwZWMsIGluZGV4KSB7XG4gIHZhciBuYXZpZ2FibGVzID0gZ2V0TmF2aWdhYmxlSW5kZXhlcyhzcGVjKTtcbiAgdmFyIHByZXZOYXZpZ2FibGUgPSAwO1xuXG4gIGlmIChpbmRleCA+IG5hdmlnYWJsZXNbbmF2aWdhYmxlcy5sZW5ndGggLSAxXSkge1xuICAgIGluZGV4ID0gbmF2aWdhYmxlc1tuYXZpZ2FibGVzLmxlbmd0aCAtIDFdO1xuICB9IGVsc2Uge1xuICAgIGZvciAodmFyIG4gaW4gbmF2aWdhYmxlcykge1xuICAgICAgaWYgKGluZGV4IDwgbmF2aWdhYmxlc1tuXSkge1xuICAgICAgICBpbmRleCA9IHByZXZOYXZpZ2FibGU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBwcmV2TmF2aWdhYmxlID0gbmF2aWdhYmxlc1tuXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW5kZXg7XG59O1xuXG5leHBvcnRzLmNoZWNrTmF2aWdhYmxlID0gY2hlY2tOYXZpZ2FibGU7XG5cbnZhciBnZXRTbGlkZUNvdW50ID0gZnVuY3Rpb24gZ2V0U2xpZGVDb3VudChzcGVjKSB7XG4gIHZhciBjZW50ZXJPZmZzZXQgPSBzcGVjLmNlbnRlck1vZGUgPyBzcGVjLnNsaWRlV2lkdGggKiBNYXRoLmZsb29yKHNwZWMuc2xpZGVzVG9TaG93IC8gMikgOiAwO1xuXG4gIGlmIChzcGVjLnN3aXBlVG9TbGlkZSkge1xuICAgIHZhciBzd2lwZWRTbGlkZTtcbiAgICB2YXIgc2xpY2tMaXN0ID0gc3BlYy5saXN0UmVmO1xuICAgIHZhciBzbGlkZXMgPSBzbGlja0xpc3QucXVlcnlTZWxlY3RvckFsbChcIi5zbGljay1zbGlkZVwiKTtcbiAgICBBcnJheS5mcm9tKHNsaWRlcykuZXZlcnkoZnVuY3Rpb24gKHNsaWRlKSB7XG4gICAgICBpZiAoIXNwZWMudmVydGljYWwpIHtcbiAgICAgICAgaWYgKHNsaWRlLm9mZnNldExlZnQgLSBjZW50ZXJPZmZzZXQgKyBnZXRXaWR0aChzbGlkZSkgLyAyID4gc3BlYy5zd2lwZUxlZnQgKiAtMSkge1xuICAgICAgICAgIHN3aXBlZFNsaWRlID0gc2xpZGU7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc2xpZGUub2Zmc2V0VG9wICsgZ2V0SGVpZ2h0KHNsaWRlKSAvIDIgPiBzcGVjLnN3aXBlTGVmdCAqIC0xKSB7XG4gICAgICAgICAgc3dpcGVkU2xpZGUgPSBzbGlkZTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG5cbiAgICBpZiAoIXN3aXBlZFNsaWRlKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICB2YXIgY3VycmVudEluZGV4ID0gc3BlYy5ydGwgPT09IHRydWUgPyBzcGVjLnNsaWRlQ291bnQgLSBzcGVjLmN1cnJlbnRTbGlkZSA6IHNwZWMuY3VycmVudFNsaWRlO1xuICAgIHZhciBzbGlkZXNUcmF2ZXJzZWQgPSBNYXRoLmFicyhzd2lwZWRTbGlkZS5kYXRhc2V0LmluZGV4IC0gY3VycmVudEluZGV4KSB8fCAxO1xuICAgIHJldHVybiBzbGlkZXNUcmF2ZXJzZWQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHNwZWMuc2xpZGVzVG9TY3JvbGw7XG4gIH1cbn07XG5cbmV4cG9ydHMuZ2V0U2xpZGVDb3VudCA9IGdldFNsaWRlQ291bnQ7XG5cbnZhciBjaGVja1NwZWNLZXlzID0gZnVuY3Rpb24gY2hlY2tTcGVjS2V5cyhzcGVjLCBrZXlzQXJyYXkpIHtcbiAgcmV0dXJuIGtleXNBcnJheS5yZWR1Y2UoZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgc3BlYy5oYXNPd25Qcm9wZXJ0eShrZXkpO1xuICB9LCB0cnVlKSA/IG51bGwgOiBjb25zb2xlLmVycm9yKFwiS2V5cyBNaXNzaW5nOlwiLCBzcGVjKTtcbn07XG5cbmV4cG9ydHMuY2hlY2tTcGVjS2V5cyA9IGNoZWNrU3BlY0tleXM7XG5cbnZhciBnZXRUcmFja0NTUyA9IGZ1bmN0aW9uIGdldFRyYWNrQ1NTKHNwZWMpIHtcbiAgY2hlY2tTcGVjS2V5cyhzcGVjLCBbXCJsZWZ0XCIsIFwidmFyaWFibGVXaWR0aFwiLCBcInNsaWRlQ291bnRcIiwgXCJzbGlkZXNUb1Nob3dcIiwgXCJzbGlkZVdpZHRoXCJdKTtcbiAgdmFyIHRyYWNrV2lkdGgsIHRyYWNrSGVpZ2h0O1xuICB2YXIgdHJhY2tDaGlsZHJlbiA9IHNwZWMuc2xpZGVDb3VudCArIDIgKiBzcGVjLnNsaWRlc1RvU2hvdztcblxuICBpZiAoIXNwZWMudmVydGljYWwpIHtcbiAgICB0cmFja1dpZHRoID0gZ2V0VG90YWxTbGlkZXMoc3BlYykgKiBzcGVjLnNsaWRlV2lkdGg7XG4gIH0gZWxzZSB7XG4gICAgdHJhY2tIZWlnaHQgPSB0cmFja0NoaWxkcmVuICogc3BlYy5zbGlkZUhlaWdodDtcbiAgfVxuXG4gIHZhciBzdHlsZSA9IHtcbiAgICBvcGFjaXR5OiAxLFxuICAgIHRyYW5zaXRpb246IFwiXCIsXG4gICAgV2Via2l0VHJhbnNpdGlvbjogXCJcIlxuICB9O1xuXG4gIGlmIChzcGVjLnVzZVRyYW5zZm9ybSkge1xuICAgIHZhciBXZWJraXRUcmFuc2Zvcm0gPSAhc3BlYy52ZXJ0aWNhbCA/IFwidHJhbnNsYXRlM2QoXCIgKyBzcGVjLmxlZnQgKyBcInB4LCAwcHgsIDBweClcIiA6IFwidHJhbnNsYXRlM2QoMHB4LCBcIiArIHNwZWMubGVmdCArIFwicHgsIDBweClcIjtcbiAgICB2YXIgdHJhbnNmb3JtID0gIXNwZWMudmVydGljYWwgPyBcInRyYW5zbGF0ZTNkKFwiICsgc3BlYy5sZWZ0ICsgXCJweCwgMHB4LCAwcHgpXCIgOiBcInRyYW5zbGF0ZTNkKDBweCwgXCIgKyBzcGVjLmxlZnQgKyBcInB4LCAwcHgpXCI7XG4gICAgdmFyIG1zVHJhbnNmb3JtID0gIXNwZWMudmVydGljYWwgPyBcInRyYW5zbGF0ZVgoXCIgKyBzcGVjLmxlZnQgKyBcInB4KVwiIDogXCJ0cmFuc2xhdGVZKFwiICsgc3BlYy5sZWZ0ICsgXCJweClcIjtcbiAgICBzdHlsZSA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgc3R5bGUpLCB7fSwge1xuICAgICAgV2Via2l0VHJhbnNmb3JtOiBXZWJraXRUcmFuc2Zvcm0sXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICAgIG1zVHJhbnNmb3JtOiBtc1RyYW5zZm9ybVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGlmIChzcGVjLnZlcnRpY2FsKSB7XG4gICAgICBzdHlsZVtcInRvcFwiXSA9IHNwZWMubGVmdDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVbXCJsZWZ0XCJdID0gc3BlYy5sZWZ0O1xuICAgIH1cbiAgfVxuXG4gIGlmIChzcGVjLmZhZGUpIHN0eWxlID0ge1xuICAgIG9wYWNpdHk6IDFcbiAgfTtcbiAgaWYgKHRyYWNrV2lkdGgpIHN0eWxlLndpZHRoID0gdHJhY2tXaWR0aDtcbiAgaWYgKHRyYWNrSGVpZ2h0KSBzdHlsZS5oZWlnaHQgPSB0cmFja0hlaWdodDsgLy8gRmFsbGJhY2sgZm9yIElFOFxuXG4gIGlmICh3aW5kb3cgJiYgIXdpbmRvdy5hZGRFdmVudExpc3RlbmVyICYmIHdpbmRvdy5hdHRhY2hFdmVudCkge1xuICAgIGlmICghc3BlYy52ZXJ0aWNhbCkge1xuICAgICAgc3R5bGUubWFyZ2luTGVmdCA9IHNwZWMubGVmdCArIFwicHhcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUubWFyZ2luVG9wID0gc3BlYy5sZWZ0ICsgXCJweFwiO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn07XG5cbmV4cG9ydHMuZ2V0VHJhY2tDU1MgPSBnZXRUcmFja0NTUztcblxudmFyIGdldFRyYWNrQW5pbWF0ZUNTUyA9IGZ1bmN0aW9uIGdldFRyYWNrQW5pbWF0ZUNTUyhzcGVjKSB7XG4gIGNoZWNrU3BlY0tleXMoc3BlYywgW1wibGVmdFwiLCBcInZhcmlhYmxlV2lkdGhcIiwgXCJzbGlkZUNvdW50XCIsIFwic2xpZGVzVG9TaG93XCIsIFwic2xpZGVXaWR0aFwiLCBcInNwZWVkXCIsIFwiY3NzRWFzZVwiXSk7XG4gIHZhciBzdHlsZSA9IGdldFRyYWNrQ1NTKHNwZWMpOyAvLyB1c2VDU1MgaXMgdHJ1ZSBieSBkZWZhdWx0IHNvIGl0IGNhbiBiZSB1bmRlZmluZWRcblxuICBpZiAoc3BlYy51c2VUcmFuc2Zvcm0pIHtcbiAgICBzdHlsZS5XZWJraXRUcmFuc2l0aW9uID0gXCItd2Via2l0LXRyYW5zZm9ybSBcIiArIHNwZWMuc3BlZWQgKyBcIm1zIFwiICsgc3BlYy5jc3NFYXNlO1xuICAgIHN0eWxlLnRyYW5zaXRpb24gPSBcInRyYW5zZm9ybSBcIiArIHNwZWMuc3BlZWQgKyBcIm1zIFwiICsgc3BlYy5jc3NFYXNlO1xuICB9IGVsc2Uge1xuICAgIGlmIChzcGVjLnZlcnRpY2FsKSB7XG4gICAgICBzdHlsZS50cmFuc2l0aW9uID0gXCJ0b3AgXCIgKyBzcGVjLnNwZWVkICsgXCJtcyBcIiArIHNwZWMuY3NzRWFzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUudHJhbnNpdGlvbiA9IFwibGVmdCBcIiArIHNwZWMuc3BlZWQgKyBcIm1zIFwiICsgc3BlYy5jc3NFYXNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn07XG5cbmV4cG9ydHMuZ2V0VHJhY2tBbmltYXRlQ1NTID0gZ2V0VHJhY2tBbmltYXRlQ1NTO1xuXG52YXIgZ2V0VHJhY2tMZWZ0ID0gZnVuY3Rpb24gZ2V0VHJhY2tMZWZ0KHNwZWMpIHtcbiAgaWYgKHNwZWMudW5zbGljaykge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgY2hlY2tTcGVjS2V5cyhzcGVjLCBbXCJzbGlkZUluZGV4XCIsIFwidHJhY2tSZWZcIiwgXCJpbmZpbml0ZVwiLCBcImNlbnRlck1vZGVcIiwgXCJzbGlkZUNvdW50XCIsIFwic2xpZGVzVG9TaG93XCIsIFwic2xpZGVzVG9TY3JvbGxcIiwgXCJzbGlkZVdpZHRoXCIsIFwibGlzdFdpZHRoXCIsIFwidmFyaWFibGVXaWR0aFwiLCBcInNsaWRlSGVpZ2h0XCJdKTtcbiAgdmFyIHNsaWRlSW5kZXggPSBzcGVjLnNsaWRlSW5kZXgsXG4gICAgICB0cmFja1JlZiA9IHNwZWMudHJhY2tSZWYsXG4gICAgICBpbmZpbml0ZSA9IHNwZWMuaW5maW5pdGUsXG4gICAgICBjZW50ZXJNb2RlID0gc3BlYy5jZW50ZXJNb2RlLFxuICAgICAgc2xpZGVDb3VudCA9IHNwZWMuc2xpZGVDb3VudCxcbiAgICAgIHNsaWRlc1RvU2hvdyA9IHNwZWMuc2xpZGVzVG9TaG93LFxuICAgICAgc2xpZGVzVG9TY3JvbGwgPSBzcGVjLnNsaWRlc1RvU2Nyb2xsLFxuICAgICAgc2xpZGVXaWR0aCA9IHNwZWMuc2xpZGVXaWR0aCxcbiAgICAgIGxpc3RXaWR0aCA9IHNwZWMubGlzdFdpZHRoLFxuICAgICAgdmFyaWFibGVXaWR0aCA9IHNwZWMudmFyaWFibGVXaWR0aCxcbiAgICAgIHNsaWRlSGVpZ2h0ID0gc3BlYy5zbGlkZUhlaWdodCxcbiAgICAgIGZhZGUgPSBzcGVjLmZhZGUsXG4gICAgICB2ZXJ0aWNhbCA9IHNwZWMudmVydGljYWw7XG4gIHZhciBzbGlkZU9mZnNldCA9IDA7XG4gIHZhciB0YXJnZXRMZWZ0O1xuICB2YXIgdGFyZ2V0U2xpZGU7XG4gIHZhciB2ZXJ0aWNhbE9mZnNldCA9IDA7XG5cbiAgaWYgKGZhZGUgfHwgc3BlYy5zbGlkZUNvdW50ID09PSAxKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICB2YXIgc2xpZGVzVG9PZmZzZXQgPSAwO1xuXG4gIGlmIChpbmZpbml0ZSkge1xuICAgIHNsaWRlc1RvT2Zmc2V0ID0gLWdldFByZUNsb25lcyhzcGVjKTsgLy8gYnJpbmcgYWN0aXZlIHNsaWRlIHRvIHRoZSBiZWdpbm5pbmcgb2YgdmlzdWFsIGFyZWFcbiAgICAvLyBpZiBuZXh0IHNjcm9sbCBkb2Vzbid0IGhhdmUgZW5vdWdoIGNoaWxkcmVuLCBqdXN0IHJlYWNoIHRpbGwgdGhlIGVuZCBvZiBvcmlnaW5hbCBzbGlkZXMgaW5zdGVhZCBvZiBzaGlmdGluZyBzbGlkZXNUb1Njcm9sbCBjaGlsZHJlblxuXG4gICAgaWYgKHNsaWRlQ291bnQgJSBzbGlkZXNUb1Njcm9sbCAhPT0gMCAmJiBzbGlkZUluZGV4ICsgc2xpZGVzVG9TY3JvbGwgPiBzbGlkZUNvdW50KSB7XG4gICAgICBzbGlkZXNUb09mZnNldCA9IC0oc2xpZGVJbmRleCA+IHNsaWRlQ291bnQgPyBzbGlkZXNUb1Nob3cgLSAoc2xpZGVJbmRleCAtIHNsaWRlQ291bnQpIDogc2xpZGVDb3VudCAlIHNsaWRlc1RvU2Nyb2xsKTtcbiAgICB9IC8vIHNoaWZ0IGN1cnJlbnQgc2xpZGUgdG8gY2VudGVyIG9mIHRoZSBmcmFtZVxuXG5cbiAgICBpZiAoY2VudGVyTW9kZSkge1xuICAgICAgc2xpZGVzVG9PZmZzZXQgKz0gcGFyc2VJbnQoc2xpZGVzVG9TaG93IC8gMik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChzbGlkZUNvdW50ICUgc2xpZGVzVG9TY3JvbGwgIT09IDAgJiYgc2xpZGVJbmRleCArIHNsaWRlc1RvU2Nyb2xsID4gc2xpZGVDb3VudCkge1xuICAgICAgc2xpZGVzVG9PZmZzZXQgPSBzbGlkZXNUb1Nob3cgLSBzbGlkZUNvdW50ICUgc2xpZGVzVG9TY3JvbGw7XG4gICAgfVxuXG4gICAgaWYgKGNlbnRlck1vZGUpIHtcbiAgICAgIHNsaWRlc1RvT2Zmc2V0ID0gcGFyc2VJbnQoc2xpZGVzVG9TaG93IC8gMik7XG4gICAgfVxuICB9XG5cbiAgc2xpZGVPZmZzZXQgPSBzbGlkZXNUb09mZnNldCAqIHNsaWRlV2lkdGg7XG4gIHZlcnRpY2FsT2Zmc2V0ID0gc2xpZGVzVG9PZmZzZXQgKiBzbGlkZUhlaWdodDtcblxuICBpZiAoIXZlcnRpY2FsKSB7XG4gICAgdGFyZ2V0TGVmdCA9IHNsaWRlSW5kZXggKiBzbGlkZVdpZHRoICogLTEgKyBzbGlkZU9mZnNldDtcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXRMZWZ0ID0gc2xpZGVJbmRleCAqIHNsaWRlSGVpZ2h0ICogLTEgKyB2ZXJ0aWNhbE9mZnNldDtcbiAgfVxuXG4gIGlmICh2YXJpYWJsZVdpZHRoID09PSB0cnVlKSB7XG4gICAgdmFyIHRhcmdldFNsaWRlSW5kZXg7XG4gICAgdmFyIHRyYWNrRWxlbSA9IHRyYWNrUmVmICYmIHRyYWNrUmVmLm5vZGU7XG4gICAgdGFyZ2V0U2xpZGVJbmRleCA9IHNsaWRlSW5kZXggKyBnZXRQcmVDbG9uZXMoc3BlYyk7XG4gICAgdGFyZ2V0U2xpZGUgPSB0cmFja0VsZW0gJiYgdHJhY2tFbGVtLmNoaWxkTm9kZXNbdGFyZ2V0U2xpZGVJbmRleF07XG4gICAgdGFyZ2V0TGVmdCA9IHRhcmdldFNsaWRlID8gdGFyZ2V0U2xpZGUub2Zmc2V0TGVmdCAqIC0xIDogMDtcblxuICAgIGlmIChjZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICB0YXJnZXRTbGlkZUluZGV4ID0gaW5maW5pdGUgPyBzbGlkZUluZGV4ICsgZ2V0UHJlQ2xvbmVzKHNwZWMpIDogc2xpZGVJbmRleDtcbiAgICAgIHRhcmdldFNsaWRlID0gdHJhY2tFbGVtICYmIHRyYWNrRWxlbS5jaGlsZHJlblt0YXJnZXRTbGlkZUluZGV4XTtcbiAgICAgIHRhcmdldExlZnQgPSAwO1xuXG4gICAgICBmb3IgKHZhciBzbGlkZSA9IDA7IHNsaWRlIDwgdGFyZ2V0U2xpZGVJbmRleDsgc2xpZGUrKykge1xuICAgICAgICB0YXJnZXRMZWZ0IC09IHRyYWNrRWxlbSAmJiB0cmFja0VsZW0uY2hpbGRyZW5bc2xpZGVdICYmIHRyYWNrRWxlbS5jaGlsZHJlbltzbGlkZV0ub2Zmc2V0V2lkdGg7XG4gICAgICB9XG5cbiAgICAgIHRhcmdldExlZnQgLT0gcGFyc2VJbnQoc3BlYy5jZW50ZXJQYWRkaW5nKTtcbiAgICAgIHRhcmdldExlZnQgKz0gdGFyZ2V0U2xpZGUgJiYgKGxpc3RXaWR0aCAtIHRhcmdldFNsaWRlLm9mZnNldFdpZHRoKSAvIDI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldExlZnQ7XG59O1xuXG5leHBvcnRzLmdldFRyYWNrTGVmdCA9IGdldFRyYWNrTGVmdDtcblxudmFyIGdldFByZUNsb25lcyA9IGZ1bmN0aW9uIGdldFByZUNsb25lcyhzcGVjKSB7XG4gIGlmIChzcGVjLnVuc2xpY2sgfHwgIXNwZWMuaW5maW5pdGUpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGlmIChzcGVjLnZhcmlhYmxlV2lkdGgpIHtcbiAgICByZXR1cm4gc3BlYy5zbGlkZUNvdW50O1xuICB9XG5cbiAgcmV0dXJuIHNwZWMuc2xpZGVzVG9TaG93ICsgKHNwZWMuY2VudGVyTW9kZSA/IDEgOiAwKTtcbn07XG5cbmV4cG9ydHMuZ2V0UHJlQ2xvbmVzID0gZ2V0UHJlQ2xvbmVzO1xuXG52YXIgZ2V0UG9zdENsb25lcyA9IGZ1bmN0aW9uIGdldFBvc3RDbG9uZXMoc3BlYykge1xuICBpZiAoc3BlYy51bnNsaWNrIHx8ICFzcGVjLmluZmluaXRlKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICByZXR1cm4gc3BlYy5zbGlkZUNvdW50O1xufTtcblxuZXhwb3J0cy5nZXRQb3N0Q2xvbmVzID0gZ2V0UG9zdENsb25lcztcblxudmFyIGdldFRvdGFsU2xpZGVzID0gZnVuY3Rpb24gZ2V0VG90YWxTbGlkZXMoc3BlYykge1xuICByZXR1cm4gc3BlYy5zbGlkZUNvdW50ID09PSAxID8gMSA6IGdldFByZUNsb25lcyhzcGVjKSArIHNwZWMuc2xpZGVDb3VudCArIGdldFBvc3RDbG9uZXMoc3BlYyk7XG59O1xuXG5leHBvcnRzLmdldFRvdGFsU2xpZGVzID0gZ2V0VG90YWxTbGlkZXM7XG5cbnZhciBzaWJsaW5nRGlyZWN0aW9uID0gZnVuY3Rpb24gc2libGluZ0RpcmVjdGlvbihzcGVjKSB7XG4gIGlmIChzcGVjLnRhcmdldFNsaWRlID4gc3BlYy5jdXJyZW50U2xpZGUpIHtcbiAgICBpZiAoc3BlYy50YXJnZXRTbGlkZSA+IHNwZWMuY3VycmVudFNsaWRlICsgc2xpZGVzT25SaWdodChzcGVjKSkge1xuICAgICAgcmV0dXJuIFwibGVmdFwiO1xuICAgIH1cblxuICAgIHJldHVybiBcInJpZ2h0XCI7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHNwZWMudGFyZ2V0U2xpZGUgPCBzcGVjLmN1cnJlbnRTbGlkZSAtIHNsaWRlc09uTGVmdChzcGVjKSkge1xuICAgICAgcmV0dXJuIFwicmlnaHRcIjtcbiAgICB9XG5cbiAgICByZXR1cm4gXCJsZWZ0XCI7XG4gIH1cbn07XG5cbmV4cG9ydHMuc2libGluZ0RpcmVjdGlvbiA9IHNpYmxpbmdEaXJlY3Rpb247XG5cbnZhciBzbGlkZXNPblJpZ2h0ID0gZnVuY3Rpb24gc2xpZGVzT25SaWdodChfcmVmKSB7XG4gIHZhciBzbGlkZXNUb1Nob3cgPSBfcmVmLnNsaWRlc1RvU2hvdyxcbiAgICAgIGNlbnRlck1vZGUgPSBfcmVmLmNlbnRlck1vZGUsXG4gICAgICBydGwgPSBfcmVmLnJ0bCxcbiAgICAgIGNlbnRlclBhZGRpbmcgPSBfcmVmLmNlbnRlclBhZGRpbmc7XG5cbiAgLy8gcmV0dXJucyBubyBvZiBzbGlkZXMgb24gdGhlIHJpZ2h0IG9mIGFjdGl2ZSBzbGlkZVxuICBpZiAoY2VudGVyTW9kZSkge1xuICAgIHZhciByaWdodCA9IChzbGlkZXNUb1Nob3cgLSAxKSAvIDIgKyAxO1xuICAgIGlmIChwYXJzZUludChjZW50ZXJQYWRkaW5nKSA+IDApIHJpZ2h0ICs9IDE7XG4gICAgaWYgKHJ0bCAmJiBzbGlkZXNUb1Nob3cgJSAyID09PSAwKSByaWdodCArPSAxO1xuICAgIHJldHVybiByaWdodDtcbiAgfVxuXG4gIGlmIChydGwpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIHJldHVybiBzbGlkZXNUb1Nob3cgLSAxO1xufTtcblxuZXhwb3J0cy5zbGlkZXNPblJpZ2h0ID0gc2xpZGVzT25SaWdodDtcblxudmFyIHNsaWRlc09uTGVmdCA9IGZ1bmN0aW9uIHNsaWRlc09uTGVmdChfcmVmMikge1xuICB2YXIgc2xpZGVzVG9TaG93ID0gX3JlZjIuc2xpZGVzVG9TaG93LFxuICAgICAgY2VudGVyTW9kZSA9IF9yZWYyLmNlbnRlck1vZGUsXG4gICAgICBydGwgPSBfcmVmMi5ydGwsXG4gICAgICBjZW50ZXJQYWRkaW5nID0gX3JlZjIuY2VudGVyUGFkZGluZztcblxuICAvLyByZXR1cm5zIG5vIG9mIHNsaWRlcyBvbiB0aGUgbGVmdCBvZiBhY3RpdmUgc2xpZGVcbiAgaWYgKGNlbnRlck1vZGUpIHtcbiAgICB2YXIgbGVmdCA9IChzbGlkZXNUb1Nob3cgLSAxKSAvIDIgKyAxO1xuICAgIGlmIChwYXJzZUludChjZW50ZXJQYWRkaW5nKSA+IDApIGxlZnQgKz0gMTtcbiAgICBpZiAoIXJ0bCAmJiBzbGlkZXNUb1Nob3cgJSAyID09PSAwKSBsZWZ0ICs9IDE7XG4gICAgcmV0dXJuIGxlZnQ7XG4gIH1cblxuICBpZiAocnRsKSB7XG4gICAgcmV0dXJuIHNsaWRlc1RvU2hvdyAtIDE7XG4gIH1cblxuICByZXR1cm4gMDtcbn07XG5cbmV4cG9ydHMuc2xpZGVzT25MZWZ0ID0gc2xpZGVzT25MZWZ0O1xuXG52YXIgY2FuVXNlRE9NID0gZnVuY3Rpb24gY2FuVXNlRE9NKCkge1xuICByZXR1cm4gISEodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xufTtcblxuZXhwb3J0cy5jYW5Vc2VET00gPSBjYW5Vc2VET007Il0sInNvdXJjZVJvb3QiOiIifQ==