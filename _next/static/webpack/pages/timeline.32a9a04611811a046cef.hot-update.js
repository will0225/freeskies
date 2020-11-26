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
      console.log(data);

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

  const navigateUserProfile = param => {
    router.push({
      pathname: '/profiles/[username]',
      query: {
        username: param
      }
    });
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
      lineNumber: 103,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.logo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/logo.png",
    alt: "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.search,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 11
    }
  }, !withoutSearch && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("input", {
    name: "search",
    placeholder: "Search Freeskies",
    onClick: () => setSearchModal(true),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }
  }), __jsx(UserProfile, {
    user: user,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 17
    }
  }))), __jsx(UserProfile, {
    user: user,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.additional_header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.mobile_profile_header, {
      [_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.header_hidden]: !visible
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 9
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: ['far', 'star'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 9
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: ['far', 'address-card'],
    onClick: () => {
      router.push('/profile');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 9
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: ['far', 'user-circle'],
    onClick: () => {
      router.push('/friend');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 9
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: ['far', 'list-alt'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.mobile_top_header, {
      [_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.header_hidden]: !visible
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.logo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/logo.png",
    alt: "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.search,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 11
    }
  }, !withoutSearch && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("input", {
    name: "search",
    placeholder: "Search Freeskies",
    onClick: () => setSearchModal(true),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 17
    }
  }))))), searchModal ? __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.searchModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 20
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.searchHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
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
      lineNumber: 169,
      columnNumber: 17
    }
  }), __jsx("input", {
    name: "search",
    placeholder: "Search Freeskies",
    onChange: searchChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.searchContent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 15
    }
  }, searchData.length > 0 ? searchData.map((item, index) => {
    if (item.type == 'Account') {
      var _item$profilePhoto;

      return __jsx("div", {
        onClick: () => navigateUserProfile("".concat(item.username)),
        className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.searchItem,
        key: index,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 19
        }
      }, __jsx("div", {
        className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.avatar,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 21
        }
      }, __jsx(_common_Avatar__WEBPACK_IMPORTED_MODULE_6__["default"], {
        size: 50,
        url: item === null || item === void 0 ? void 0 : (_item$profilePhoto = item.profilePhoto) === null || _item$profilePhoto === void 0 ? void 0 : _item$profilePhoto.src,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 23
        }
      })), __jsx("div", {
        className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.user_info,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 21
        }
      }, __jsx("p", {
        className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.user_name,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 23
        }
      }, item.username)));
    } else if (item.type == 'Post') {
      var _item$account, _item$account$profile;

      return __jsx("div", {
        key: 'post' + index,
        className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.searchItem,
        onClick: () => navigateUserProfile("".concat(item.account.username)),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.avatar,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 23
        }
      }, __jsx(_common_Avatar__WEBPACK_IMPORTED_MODULE_6__["default"], {
        size: 50,
        url: (_item$account = item.account) === null || _item$account === void 0 ? void 0 : (_item$account$profile = _item$account.profilePhoto) === null || _item$account$profile === void 0 ? void 0 : _item$account$profile.src,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 25
        }
      })), __jsx("div", {
        className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.user_info,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 23
        }
      }, __jsx("p", {
        className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.user_post,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 25
        }
      }, item.text)));
    }
  }) : __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 20
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
      lineNumber: 213,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 7
    }
  }, (user === null || user === void 0 ? void 0 : user.profilePhoto) ? __jsx(_common_Avatar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: 40,
    url: user === null || user === void 0 ? void 0 : user.profilePhoto.src,
    text: user === null || user === void 0 ? void 0 : user.username,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 13
    }
  }) : __jsx(_common_Avatar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: 40,
    text: user === null || user === void 0 ? void 0 : user.firstName,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 11
    }
  })), __jsx("span", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsIndpdGhvdXRTZWFyY2giLCJ1c2VyIiwiYXV0aCIsInByZXZTY3JvbGxQb3MiLCJzZXRQcmV2U2Nyb2xsUG9zIiwidXNlU3RhdGUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInNlYXJjaE1vZGFsIiwic2V0U2VhcmNoTW9kYWwiLCJzZWFyY2hEYXRhIiwic2V0U2VhcmNoRGF0YSIsInRpbWUiLCJoYW5kbGVTY3JvbGwiLCJjdXJyZW50U2Nyb2xsUG9zIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwic2VhcmNoQ2hhbmdlIiwiZXZlbnQiLCJyZXF1ZXN0IiwiQVBJIiwibWV0aG9kIiwidXJsIiwiZGF0YSIsInRhcmdldCIsInZhbHVlIiwiaGVhZGVycyIsInRva2VuIiwic3RhdHVzIiwibWVzc2FnZSIsImVyciIsIm5hdmlnYXRlVXNlclByb2ZpbGUiLCJwYXJhbSIsInJvdXRlciIsInB1c2giLCJwYXRobmFtZSIsInF1ZXJ5IiwidXNlcm5hbWUiLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwiXyIsInRocm90dGxlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNldHRpbmdzIiwiZG90cyIsImluZmluaXRlIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsInVzZVJvdXRlciIsImNsYXNzbmFtZXMiLCJzdHlsZXMiLCJoZWFkZXIiLCJoZWFkZXJfaGlkZGVuIiwiY29udGFpbmVyIiwibG9nbyIsInNlYXJjaCIsImFkZGl0aW9uYWxfaGVhZGVyIiwibW9iaWxlX3Byb2ZpbGVfaGVhZGVyIiwibW9iaWxlX3RvcF9oZWFkZXIiLCJzZWFyY2hIZWFkZXIiLCJmb250U2l6ZSIsIm1hcmdpblRvcCIsImZsZXgiLCJjdXJzb3IiLCJzZWFyY2hDb250ZW50IiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImluZGV4IiwidHlwZSIsInNlYXJjaEl0ZW0iLCJhdmF0YXIiLCJwcm9maWxlUGhvdG8iLCJzcmMiLCJ1c2VyX2luZm8iLCJ1c2VyX25hbWUiLCJhY2NvdW50IiwidXNlcl9wb3N0IiwidGV4dCIsIlVzZXJQcm9maWxlIiwicHJvZmlsZSIsImZpcnN0TmFtZSIsIm5hbWUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdG9yZSIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsQ0FBZ0I7QUFBRUMsZUFBRjtBQUFpQkMsTUFBakI7QUFBdUJDO0FBQXZCLENBQWhCLEVBQThDO0FBQUE7O0FBQzVDLFFBQU07QUFBQSxPQUFDQyxhQUFEO0FBQUEsT0FBZ0JDO0FBQWhCLE1BQW9DQyxzREFBUSxDQUFDLENBQUQsQ0FBbEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JGLHNEQUFRLENBQUMsSUFBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDRyxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ0osc0RBQVEsQ0FBQyxLQUFELENBQTlDO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQStCTixzREFBUSxDQUFDLEVBQUQsQ0FBN0M7QUFDQSxNQUFJTyxJQUFJLEdBQUcsSUFBWDs7QUFDQSxRQUFNQyxZQUFZLEdBQUcsTUFBTTtBQUN6QixRQUFJO0FBQ0YsWUFBTUMsZ0JBQWdCLEdBQUdDLE1BQU0sQ0FBQ0MsV0FBaEMsQ0FERSxDQUVGOztBQUNBLFVBQUdKLElBQUgsRUFBUztBQUNQSyxvQkFBWSxDQUFDTCxJQUFELENBQVo7QUFDRDs7QUFDREEsVUFBSSxHQUFHTSxVQUFVLENBQUMsTUFBTTtBQUN0Qk4sWUFBSSxHQUFHLElBQVA7QUFDQUwsa0JBQVUsQ0FBQyxJQUFELENBQVY7QUFDRCxPQUhnQixFQUdkLEdBSGMsQ0FBakI7O0FBSUEsVUFBR0QsT0FBSCxFQUFZO0FBQ1ZDLGtCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0QsT0FaQyxDQWFGO0FBQ0E7QUFDQTs7QUFDRCxLQWhCRCxDQWdCRSxPQUFPWSxLQUFQLEVBQWM7QUFDZDtBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNEO0FBQ0YsR0FyQkQ7O0FBdUJBLFFBQU1HLFlBQVksR0FBRyxNQUFPQyxLQUFQLElBQWlCO0FBQ3BDLFFBQUk7QUFDRixZQUFNQyxPQUFPLEdBQUcsTUFBTUMsNERBQUcsQ0FBQztBQUN4QkMsY0FBTSxFQUFFLE1BRGdCO0FBRXhCQyxXQUFHLEVBQUUsU0FGbUI7QUFHeEJDLFlBQUksRUFBRTtBQUNKLG1CQUFTTCxLQUFLLENBQUNNLE1BQU4sQ0FBYUMsS0FEbEI7QUFFSixvQkFBVSxDQUZOO0FBR0osbUJBQVM7QUFITCxTQUhrQjtBQVF4QkMsZUFBTyxFQUFFO0FBQUUscUJBQVc3QixJQUFJLENBQUM4QjtBQUFsQjtBQVJlLE9BQUQsQ0FBekI7QUFXQSxZQUFNO0FBQUVDLGNBQUY7QUFBVUw7QUFBVixVQUFtQkosT0FBekI7QUFBaUNKLGFBQU8sQ0FBQ0MsR0FBUixDQUFZTyxJQUFaOztBQUNqQyxVQUFHSyxNQUFNLElBQUksR0FBYixFQUFrQjtBQUNoQnRCLHFCQUFhLENBQUNpQixJQUFELENBQWI7QUFDRCxPQUZELE1BRVE7QUFDSk0scURBQU8sQ0FBQ2YsS0FBUixDQUFjLG1CQUFkO0FBQ0FSLHFCQUFhLENBQUNpQixJQUFELENBQWI7QUFDSDtBQUNGLEtBbkJELENBbUJFLE9BQU1PLEdBQU4sRUFBVztBQUNYZixhQUFPLENBQUNDLEdBQVIsQ0FBWWMsR0FBWjtBQUNEO0FBQ0YsR0F2QkQ7O0FBeUJBLFFBQU1DLG1CQUFtQixHQUFJQyxLQUFELElBQVc7QUFDckNDLFVBQU0sQ0FBQ0MsSUFBUCxDQUFZO0FBQ1ZDLGNBQVEsRUFBRSxzQkFEQTtBQUVWQyxXQUFLLEVBQUU7QUFBRUMsZ0JBQVEsRUFBRUw7QUFBWjtBQUZHLEtBQVo7QUFJRCxHQUxEOztBQU9BTSx5REFBUyxDQUFDLE1BQU07QUFDZCxRQUFJO0FBQ0Y1QixZQUFNLENBQUM2QixnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0MsNkNBQUMsQ0FBQ0MsUUFBRixDQUFXakMsWUFBWCxFQUF5QixHQUF6QixDQUFsQztBQUNELEtBRkQsQ0FFRSxPQUFPTSxLQUFQLEVBQWM7QUFDZDtBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNEOztBQUNELFdBQU8sTUFBTTtBQUNYO0FBQ0EsVUFBSTtBQUNGSixjQUFNLENBQUNnQyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ2xDLFlBQXJDO0FBQ0QsT0FGRCxDQUVFLE9BQU9NLEtBQVAsRUFBYztBQUNkO0FBQ0FDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0Q7QUFDRixLQVJEO0FBU0QsR0FoQlEsRUFnQk4sQ0FBQ2hCLGFBQUQsQ0FoQk0sQ0FBVDtBQWtCQSxNQUFJNkMsUUFBUSxHQUFHO0FBQ2JDLFFBQUksRUFBRSxJQURPO0FBRWJDLFlBQVEsRUFBRSxJQUZHO0FBR2JDLFNBQUssRUFBRSxHQUhNO0FBSWJDLGdCQUFZLEVBQUUsQ0FKRDtBQUtiQyxrQkFBYyxFQUFFO0FBTEgsR0FBZjtBQVFBLFFBQU1mLE1BQU0sR0FBR2dCLDZEQUFTLEVBQXhCO0FBQ0EsU0FDRSxtRUFDRTtBQUNFLGFBQVMsRUFBRUMsaURBQVUsQ0FBQ0MsaUVBQU0sQ0FBQ0MsTUFBUixFQUFnQjtBQUNuQyxPQUFDRCxpRUFBTSxDQUFDRSxhQUFSLEdBQXdCLENBQUNwRDtBQURVLEtBQWhCLENBRHZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRTtBQUFLLGFBQVMsRUFBRWtELGlFQUFNLENBQUNHLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUgsaUVBQU0sQ0FBQ0ksSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFDLFdBQVQ7QUFBcUIsT0FBRyxFQUFDLE1BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUU7QUFBSyxhQUFTLEVBQUVKLGlFQUFNLENBQUNLLE1BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRyxDQUFDN0QsYUFBRCxJQUNDLG1FQUNFO0FBQU8sUUFBSSxFQUFDLFFBQVo7QUFBcUIsZUFBVyxFQUFDLGtCQUFqQztBQUFvRCxXQUFPLEVBQUUsTUFBSVMsY0FBYyxDQUFDLElBQUQsQ0FBL0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxXQUFEO0FBQWEsUUFBSSxFQUFFUixJQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FGSixDQUpGLEVBWUUsTUFBQyxXQUFEO0FBQWEsUUFBSSxFQUFFQSxJQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkYsQ0FORixDQURGLEVBdUJFO0FBQUssYUFBUyxFQUFFdUQsaUVBQU0sQ0FBQ00saUJBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF2QkYsRUF3QkU7QUFDRSxhQUFTLEVBQUVQLGlEQUFVLENBQUNDLGlFQUFNLENBQUNPLHFCQUFSLEVBQStCO0FBQ2xELE9BQUNQLGlFQUFNLENBQUNFLGFBQVIsR0FBd0IsQ0FBQ3BEO0FBRHlCLEtBQS9CLENBRHZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRTtBQUFLLGFBQVMsRUFBRWtELGlFQUFNLENBQUNHLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhFQUFEO0FBQWlCLFFBQUksRUFBRSxDQUFDLEtBQUQsRUFBUSxNQUFSLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUxGLEVBUUU7QUFBSyxhQUFTLEVBQUVILGlFQUFNLENBQUNHLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhFQUFEO0FBQWlCLFFBQUksRUFBRSxDQUFDLEtBQUQsRUFBUSxjQUFSLENBQXZCO0FBQWdELFdBQU8sRUFBRSxNQUFNO0FBQy9EckIsWUFBTSxDQUFDQyxJQUFQLENBQVksVUFBWjtBQUNELEtBRkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBUkYsRUFhRTtBQUFLLGFBQVMsRUFBRWlCLGlFQUFNLENBQUNHLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhFQUFEO0FBQWlCLFFBQUksRUFBRSxDQUFDLEtBQUQsRUFBUSxhQUFSLENBQXZCO0FBQStDLFdBQU8sRUFBRSxNQUFNO0FBQzlEckIsWUFBTSxDQUFDQyxJQUFQLENBQVksU0FBWjtBQUNELEtBRkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBYkYsRUFrQkU7QUFBSyxhQUFTLEVBQUVpQixpRUFBTSxDQUFDRyxTQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4RUFBRDtBQUFpQixRQUFJLEVBQUUsQ0FBQyxLQUFELEVBQVEsVUFBUixDQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FsQkYsQ0F4QkYsRUE4Q0U7QUFDRSxhQUFTLEVBQUVKLGlEQUFVLENBQUNDLGlFQUFNLENBQUNRLGlCQUFSLEVBQTJCO0FBQzlDLE9BQUNSLGlFQUFNLENBQUNFLGFBQVIsR0FBd0IsQ0FBQ3BEO0FBRHFCLEtBQTNCLENBRHZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRTtBQUFLLGFBQVMsRUFBRWtELGlFQUFNLENBQUNHLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUgsaUVBQU0sQ0FBQ0ksSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFDLFdBQVQ7QUFBcUIsT0FBRyxFQUFDLE1BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUU7QUFBSyxhQUFTLEVBQUVKLGlFQUFNLENBQUNLLE1BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRyxDQUFDN0QsYUFBRCxJQUNDLG1FQUNFO0FBQU8sUUFBSSxFQUFDLFFBQVo7QUFBcUIsZUFBVyxFQUFDLGtCQUFqQztBQUFvRCxXQUFPLEVBQUUsTUFBSVMsY0FBYyxDQUFDLElBQUQsQ0FBL0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBRkosQ0FKRixDQUxGLENBOUNGLEVBaUVHRCxXQUFXLEdBQUM7QUFBSyxhQUFTLEVBQUVnRCxpRUFBTSxDQUFDaEQsV0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNMO0FBQUssYUFBUyxFQUFFZ0QsaUVBQU0sQ0FBQ1MsWUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOEVBQUQ7QUFBaUIsUUFBSSxFQUFFLENBQUMsS0FBRCxFQUFRLGlCQUFSLENBQXZCO0FBQW1ELFNBQUssRUFBRTtBQUFFQyxjQUFRLEVBQUUsRUFBWjtBQUFnQkMsZUFBUyxFQUFFLENBQTNCO0FBQThCQyxVQUFJLEVBQUUsQ0FBcEM7QUFBdUNDLFlBQU0sRUFBRTtBQUEvQyxLQUExRDtBQUFxSCxXQUFPLEVBQUUsTUFBSTVELGNBQWMsQ0FBQyxLQUFELENBQWhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsZUFBVyxFQUFDLGtCQUFsQztBQUFxRCxZQUFRLEVBQUVhLFlBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURLLEVBS0w7QUFBSyxhQUFTLEVBQUVrQyxpRUFBTSxDQUFDYyxhQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0c1RCxVQUFVLENBQUM2RCxNQUFYLEdBQW9CLENBQXBCLEdBQXNCN0QsVUFBVSxDQUFDOEQsR0FBWCxDQUFlLENBQUNDLElBQUQsRUFBT0MsS0FBUCxLQUFpQjtBQUN2RCxRQUFHRCxJQUFJLENBQUNFLElBQUwsSUFBYSxTQUFoQixFQUEyQjtBQUFBOztBQUN6QixhQUNBO0FBQUssZUFBTyxFQUFFLE1BQU12QyxtQkFBbUIsV0FBSXFDLElBQUksQ0FBQy9CLFFBQVQsRUFBdkM7QUFBOEQsaUJBQVMsRUFBRWMsaUVBQU0sQ0FBQ29CLFVBQWhGO0FBQTRGLFdBQUcsRUFBRUYsS0FBakc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsRUFBRWxCLGlFQUFNLENBQUNxQixNQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxzREFBRDtBQUNFLFlBQUksRUFBRSxFQURSO0FBRUUsV0FBRyxFQUFFSixJQUFGLGFBQUVBLElBQUYsNkNBQUVBLElBQUksQ0FBRUssWUFBUix1REFBRSxtQkFBb0JDLEdBRjNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixDQURGLEVBT0U7QUFBSyxpQkFBUyxFQUFFdkIsaUVBQU0sQ0FBQ3dCLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFHLGlCQUFTLEVBQUV4QixpRUFBTSxDQUFDeUIsU0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFpQ1IsSUFBSSxDQUFDL0IsUUFBdEMsQ0FERixDQVBGLENBREE7QUFhRCxLQWRELE1BY08sSUFBSStCLElBQUksQ0FBQ0UsSUFBTCxJQUFhLE1BQWpCLEVBQXlCO0FBQUE7O0FBQzlCLGFBQ0U7QUFBTSxXQUFHLEVBQUUsU0FBT0QsS0FBbEI7QUFBeUIsaUJBQVMsRUFBRWxCLGlFQUFNLENBQUNvQixVQUEzQztBQUF1RCxlQUFPLEVBQUUsTUFBTXhDLG1CQUFtQixXQUFJcUMsSUFBSSxDQUFDUyxPQUFMLENBQWF4QyxRQUFqQixFQUF6RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxpQkFBUyxFQUFFYyxpRUFBTSxDQUFDcUIsTUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsc0RBQUQ7QUFDRSxZQUFJLEVBQUUsRUFEUjtBQUVFLFdBQUcsbUJBQUVKLElBQUksQ0FBQ1MsT0FBUCwyRUFBRSxjQUFjSixZQUFoQiwwREFBRSxzQkFBNEJDLEdBRm5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixDQURGLEVBT0U7QUFBSyxpQkFBUyxFQUFFdkIsaUVBQU0sQ0FBQ3dCLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFHLGlCQUFTLEVBQUV4QixpRUFBTSxDQUFDMkIsU0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFpQ1YsSUFBSSxDQUFDVyxJQUF0QyxDQURGLENBUEYsQ0FERjtBQWFEO0FBQ0EsR0E5QnNCLENBQXRCLEdBOEJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUEvQkwsQ0FMSyxDQUFELEdBc0NMLElBdkdULENBREY7QUEyR0Q7O0dBbk1RckYsTTtVQXVGUXVELHFEOzs7S0F2RlJ2RCxNOztBQXFNVCxTQUFTc0YsV0FBVCxDQUFxQjtBQUFFcEYsTUFBSSxHQUFHO0FBQVQsQ0FBckIsRUFBb0M7QUFBQTs7QUFDbEMsUUFBTXFDLE1BQU0sR0FBR2dCLDZEQUFTLEVBQXhCO0FBQ0EsU0FDRTtBQUNFLGFBQVMsRUFBRUUsaUVBQU0sQ0FBQzhCLE9BRHBCO0FBRUUsV0FBTyxFQUFFLE1BQU07QUFDYmhELFlBQU0sQ0FBQ0MsSUFBUCxDQUFZLFVBQVo7QUFDRCxLQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRTtBQUFLLGFBQVMsRUFBRWlCLGlFQUFNLENBQUNxQixNQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksQ0FBQTVFLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFNkUsWUFBTixJQUNFLE1BQUMsc0RBQUQ7QUFDRSxRQUFJLEVBQUUsRUFEUjtBQUVFLE9BQUcsRUFBRTdFLElBQUYsYUFBRUEsSUFBRix1QkFBRUEsSUFBSSxDQUFFNkUsWUFBTixDQUFtQkMsR0FGMUI7QUFHRSxRQUFJLEVBQUU5RSxJQUFGLGFBQUVBLElBQUYsdUJBQUVBLElBQUksQ0FBRXlDLFFBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEdBT0EsTUFBQyxzREFBRDtBQUFRLFFBQUksRUFBRSxFQUFkO0FBQWtCLFFBQUksRUFBRXpDLElBQUYsYUFBRUEsSUFBRix1QkFBRUEsSUFBSSxDQUFFc0YsU0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJKLENBTkYsRUFpQkU7QUFBTSxhQUFTLEVBQUUvQixpRUFBTSxDQUFDZ0MsSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFrQ3ZGLElBQWxDLGFBQWtDQSxJQUFsQyx1QkFBa0NBLElBQUksQ0FBRXNGLFNBQXhDLEVBakJGLENBREY7QUFxQkQ7O0lBdkJRRixXO1VBQ1EvQixxRDs7O01BRFIrQixXOztBQXlCVCxNQUFNSSxlQUFlLEdBQUlDLEtBQUQsS0FBWTtBQUNsQ3pGLE1BQUksRUFBRXlGLEtBQUssQ0FBQ3hGLElBQU4sQ0FBV0QsSUFEaUI7QUFFbENDLE1BQUksRUFBRXdGLEtBQUssQ0FBQ3hGO0FBRnNCLENBQVosQ0FBeEI7O0FBS2V5RiwwSEFBTyxDQUFDRixlQUFELENBQVAsQ0FBeUIxRixNQUF6QixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3RpbWVsaW5lLjMyYTlhMDQ2MTE4MTFhMDQ2Y2VmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL2hlYWRlci5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnLi4vY29tbW9uL0F2YXRhcic7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcbmltcG9ydCBBUEkgZnJvbSAnLi4vLi4vY29uZmlncy9BUEknO1xyXG5pbXBvcnQgeyBCdXR0b24sIFVwbG9hZCwgbWVzc2FnZSwgSW5wdXQsIFRhYnMsIFJhdGUgfSBmcm9tICdhbnRkJztcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcih7IHdpdGhvdXRTZWFyY2gsIHVzZXIsIGF1dGh9KSB7XHJcbiAgY29uc3QgW3ByZXZTY3JvbGxQb3MsIHNldFByZXZTY3JvbGxQb3NdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3NlYXJjaE1vZGFsLCBzZXRTZWFyY2hNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3NlYXJjaERhdGEsIHNldFNlYXJjaERhdGEgXSA9IHVzZVN0YXRlKFtdKTtcclxuICBsZXQgdGltZSA9IG51bGw7XHJcbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgY3VycmVudFNjcm9sbFBvcyA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgICAgLy8gY29uc3QgdmlzaWJsZSA9IHByZXZTY3JvbGxQb3MgPiBjdXJyZW50U2Nyb2xsUG9zO1xyXG4gICAgICBpZih0aW1lKSB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWUpOyAgXHJcbiAgICAgIH1cclxuICAgICAgdGltZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRpbWUgPSBudWxsO1xyXG4gICAgICAgIHNldFZpc2libGUodHJ1ZSlcclxuICAgICAgfSwgNTAwKVxyXG4gICAgICBpZih2aXNpYmxlKSB7XHJcbiAgICAgICAgc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gc2V0UHJldlNjcm9sbFBvcyhjdXJyZW50U2Nyb2xsUG9zKTtcclxuICAgICAgLy8gc2V0VmlzaWJsZSh2aXNpYmxlKTtcclxuICAgICAgLy8gdGltZXIgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7IGNvbnNvbGUubG9nKHRpbWVyKX0sIDUwMClcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIC8vIGNhdGNoIHdpbmRpb3cgPT09IHVuZGVmaW5lZCBlcnJvclxyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2VhcmNoQ2hhbmdlID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6ICcvc2VhcmNoJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBcInF1ZXJ5XCI6IGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgIFwib2Zmc2V0XCI6IDAsXHJcbiAgICAgICAgICBcImZpcnN0XCI6IDEwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHsgc3RhdHVzLCBkYXRhIH0gPSByZXF1ZXN0O2NvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICBpZihzdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgc2V0U2VhcmNoRGF0YShkYXRhKTtcclxuICAgICAgfSBlbHNlICB7XHJcbiAgICAgICAgICBtZXNzYWdlLmVycm9yKCdQbGVhc2UgdHJ5IGFnYWluIScpO1xyXG4gICAgICAgICAgc2V0U2VhcmNoRGF0YShkYXRhKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgbmF2aWdhdGVVc2VyUHJvZmlsZSA9IChwYXJhbSkgPT4ge1xyXG4gICAgcm91dGVyLnB1c2goe1xyXG4gICAgICBwYXRobmFtZTogJy9wcm9maWxlcy9bdXNlcm5hbWVdJyxcclxuICAgICAgcXVlcnk6IHsgdXNlcm5hbWU6IHBhcmFtICB9LFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgXy50aHJvdHRsZShoYW5kbGVTY3JvbGwsIDI1MCkpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgLy8gY2F0Y2ggd2luZGlvdyA9PT0gdW5kZWZpbmVkIGVycm9yXHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIC8vIHVubW91bnQgYWN0aW9uXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgLy8gY2F0Y2ggd2luZGlvdyA9PT0gdW5kZWZpbmVkIGVycm9yXHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH0sIFtwcmV2U2Nyb2xsUG9zXSk7XHJcblxyXG4gIHZhciBzZXR0aW5ncyA9IHtcclxuICAgIGRvdHM6IHRydWUsXHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIHNwZWVkOiA1MDAsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDUsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5oZWFkZXIsIHtcclxuICAgICAgICAgIFtzdHlsZXMuaGVhZGVyX2hpZGRlbl06ICF2aXNpYmxlLFxyXG4gICAgICAgIH0pfVxyXG4gICAgICA+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvbG9nby5wbmdcIiBhbHQ9XCJsb2dvXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2h9PlxyXG4gICAgICAgICAgICB7IXdpdGhvdXRTZWFyY2ggJiYgKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIEZyZWVza2llc1wiIG9uQ2xpY2s9eygpPT5zZXRTZWFyY2hNb2RhbCh0cnVlKX0vPlxyXG4gICAgICAgICAgICAgICAgPFVzZXJQcm9maWxlIHVzZXI9e3VzZXJ9Lz5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPFVzZXJQcm9maWxlIHVzZXI9e3VzZXJ9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZGl0aW9uYWxfaGVhZGVyfSAvPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5tb2JpbGVfcHJvZmlsZV9oZWFkZXIsIHtcclxuICAgICAgICAgIFtzdHlsZXMuaGVhZGVyX2hpZGRlbl06ICF2aXNpYmxlLFxyXG4gICAgICAgIH0pfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdzdGFyJ119IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdhZGRyZXNzLWNhcmQnXX0gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgcm91dGVyLnB1c2goJy9wcm9maWxlJyk7XHJcbiAgICAgICAgfX0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSA+XHJcbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ3VzZXItY2lyY2xlJ119IG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIHJvdXRlci5wdXNoKCcvZnJpZW5kJyk7XHJcbiAgICAgICAgfX0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAnbGlzdC1hbHQnXX0gLz5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMubW9iaWxlX3RvcF9oZWFkZXIsIHtcclxuICAgICAgICAgIFtzdHlsZXMuaGVhZGVyX2hpZGRlbl06ICF2aXNpYmxlLFxyXG4gICAgICAgIH0pfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvbG9nby5wbmdcIiBhbHQ9XCJsb2dvXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2h9PlxyXG4gICAgICAgICAgICB7IXdpdGhvdXRTZWFyY2ggJiYgKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIEZyZWVza2llc1wiIG9uQ2xpY2s9eygpPT5zZXRTZWFyY2hNb2RhbCh0cnVlKX0gLz5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3NlYXJjaE1vZGFsPzxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoTW9kYWx9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoSGVhZGVyfT5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAnaGFuZC1wb2ludC1sZWZ0J119IHN0eWxlPXt7IGZvbnRTaXplOiAyNSwgbWFyZ2luVG9wOiA4LCBmbGV4OiAxLCBjdXJzb3I6ICdwb2ludGVyJ319IG9uQ2xpY2s9eygpPT5zZXRTZWFyY2hNb2RhbChmYWxzZSl9Lz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCAgbmFtZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIEZyZWVza2llc1wiIG9uQ2hhbmdlPXtzZWFyY2hDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hDb250ZW50fT5cclxuICAgICAgICAgICAgICAgIHtzZWFyY2hEYXRhLmxlbmd0aCA+IDA/c2VhcmNoRGF0YS5tYXAoKGl0ZW0sIGluZGV4ICk9PiB7IFxyXG4gICAgICAgICAgICAgICAgaWYoaXRlbS50eXBlID09ICdBY2NvdW50Jykge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlVXNlclByb2ZpbGUoYCR7aXRlbS51c2VybmFtZX1gKSB9IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaEl0ZW19IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17NTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybD17aXRlbT8ucHJvZmlsZVBob3RvPy5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcl9pbmZvfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfbmFtZX0+e2l0ZW0udXNlcm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbS50eXBlID09ICdQb3N0Jykge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgIGtleT17J3Bvc3QnK2luZGV4fSBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hJdGVtfSBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZVVzZXJQcm9maWxlKGAke2l0ZW0uYWNjb3VudC51c2VybmFtZX1gKSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17NTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsPXtpdGVtLmFjY291bnQ/LnByb2ZpbGVQaG90bz8uc3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfaW5mb30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfcG9zdH0+e2l0ZW0udGV4dH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTo8ZGl2Pk5vIGRhdGE8L2Rpdj59XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PjpudWxsfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gVXNlclByb2ZpbGUoeyB1c2VyID0ge30gfSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGV9XHJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICByb3V0ZXIucHVzaCgnL3Byb2ZpbGUnKTtcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9PlxyXG4gICAgICAgIHsgdXNlcj8ucHJvZmlsZVBob3RvID8gKFxyXG4gICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgc2l6ZT17NDB9XHJcbiAgICAgICAgICAgICAgdXJsPXt1c2VyPy5wcm9maWxlUGhvdG8uc3JjfVxyXG4gICAgICAgICAgICAgIHRleHQ9e3VzZXI/LnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxBdmF0YXIgc2l6ZT17NDB9IHRleHQ9e3VzZXI/LmZpcnN0TmFtZX0gLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubmFtZX0+e2Ake3VzZXI/LmZpcnN0TmFtZX1gfTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdG9yZSkgPT4gKHtcclxuICB1c2VyOiBzdG9yZS5hdXRoLnVzZXIsXHJcbiAgYXV0aDogc3RvcmUuYXV0aFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShIZWFkZXIpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9