webpackHotUpdate_N_E("pages/friend",{

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
    onClick: () => {
      router.push('/profile');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
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
      lineNumber: 134,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 9
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: ['far', 'list-alt'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.mobile_top_header, {
      [_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.header_hidden]: !visible
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.logo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/logo.png",
    alt: "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.search,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 11
    }
  }, !withoutSearch && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("input", {
    name: "search",
    placeholder: "Search Freeskies",
    onClick: () => setSearchModal(true),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 17
    }
  }))))), searchModal ? __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.searchModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 20
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.searchHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
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
      lineNumber: 163,
      columnNumber: 17
    }
  }), __jsx("input", {
    name: "search",
    placeholder: "Search Freeskies",
    onChange: searchChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.searchContent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 15
    }
  }, searchData.length > 0 ? searchData.map((item, index) => {
    if (item.type == 'Account') {
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
          lineNumber: 170,
          columnNumber: 19
        }
      }, __jsx("div", {
        className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.avatar,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 21
        }
      }, __jsx(_common_Avatar__WEBPACK_IMPORTED_MODULE_6__["default"], {
        size: 50,
        url: item === null || item === void 0 ? void 0 : (_item$profilePhoto = item.profilePhoto) === null || _item$profilePhoto === void 0 ? void 0 : _item$profilePhoto.src,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 23
        }
      })), __jsx("div", {
        className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.user_info,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 21
        }
      }, __jsx("p", {
        className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.user_name,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 23
        }
      }, item.username)));
    } else if (item.type == 'Post') {
      var _item$account, _item$account$profile;

      return __jsx("div", {
        style: {
          display: 'flex',
          marginBottom: 5
        },
        key: 'post' + index,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.avatar,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 23
        }
      }, __jsx(_common_Avatar__WEBPACK_IMPORTED_MODULE_6__["default"], {
        size: 50,
        url: (_item$account = item.account) === null || _item$account === void 0 ? void 0 : (_item$account$profile = _item$account.profilePhoto) === null || _item$account$profile === void 0 ? void 0 : _item$account$profile.src,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 25
        }
      })), __jsx("div", {
        className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.user_info,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 23
        }
      }, __jsx("p", {
        className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.user_post,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 25
        }
      }, item.text)));
    }
  }) : __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
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
      lineNumber: 207,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 7
    }
  }, (user === null || user === void 0 ? void 0 : user.profilePhoto) ? __jsx(_common_Avatar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: 40,
    url: user === null || user === void 0 ? void 0 : user.profilePhoto.src,
    text: user === null || user === void 0 ? void 0 : user.username,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 13
    }
  }) : __jsx(_common_Avatar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: 40,
    text: user === null || user === void 0 ? void 0 : user.firstName,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 11
    }
  })), __jsx("span", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsIndpdGhvdXRTZWFyY2giLCJ1c2VyIiwiYXV0aCIsInByZXZTY3JvbGxQb3MiLCJzZXRQcmV2U2Nyb2xsUG9zIiwidXNlU3RhdGUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInNlYXJjaE1vZGFsIiwic2V0U2VhcmNoTW9kYWwiLCJzZWFyY2hEYXRhIiwic2V0U2VhcmNoRGF0YSIsInRpbWUiLCJoYW5kbGVTY3JvbGwiLCJjdXJyZW50U2Nyb2xsUG9zIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwic2VhcmNoQ2hhbmdlIiwiZXZlbnQiLCJyZXF1ZXN0IiwiQVBJIiwibWV0aG9kIiwidXJsIiwiZGF0YSIsInRhcmdldCIsInZhbHVlIiwiaGVhZGVycyIsInRva2VuIiwic3RhdHVzIiwibWVzc2FnZSIsImVyciIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfIiwidGhyb3R0bGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0dGluZ3MiLCJkb3RzIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwicm91dGVyIiwidXNlUm91dGVyIiwiY2xhc3NuYW1lcyIsInN0eWxlcyIsImhlYWRlciIsImhlYWRlcl9oaWRkZW4iLCJjb250YWluZXIiLCJsb2dvIiwic2VhcmNoIiwiYWRkaXRpb25hbF9oZWFkZXIiLCJtb2JpbGVfcHJvZmlsZV9oZWFkZXIiLCJwdXNoIiwibW9iaWxlX3RvcF9oZWFkZXIiLCJzZWFyY2hIZWFkZXIiLCJmb250U2l6ZSIsIm1hcmdpblRvcCIsImZsZXgiLCJjdXJzb3IiLCJzZWFyY2hDb250ZW50IiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImluZGV4IiwidHlwZSIsImRpc3BsYXkiLCJtYXJnaW5Cb3R0b20iLCJhdmF0YXIiLCJwcm9maWxlUGhvdG8iLCJzcmMiLCJ1c2VyX2luZm8iLCJ1c2VyX25hbWUiLCJ1c2VybmFtZSIsImFjY291bnQiLCJ1c2VyX3Bvc3QiLCJ0ZXh0IiwiVXNlclByb2ZpbGUiLCJwcm9maWxlIiwiZmlyc3ROYW1lIiwibmFtZSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0b3JlIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxDQUFnQjtBQUFFQyxlQUFGO0FBQWlCQyxNQUFqQjtBQUF1QkM7QUFBdkIsQ0FBaEIsRUFBOEM7QUFBQTs7QUFDNUMsUUFBTTtBQUFBLE9BQUNDLGFBQUQ7QUFBQSxPQUFnQkM7QUFBaEIsTUFBb0NDLHNEQUFRLENBQUMsQ0FBRCxDQUFsRDtBQUNBLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkYsc0RBQVEsQ0FBQyxJQUFELENBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLFdBQUQ7QUFBQSxPQUFjQztBQUFkLE1BQWdDSixzREFBUSxDQUFDLEtBQUQsQ0FBOUM7QUFDQSxRQUFNO0FBQUEsT0FBQ0ssVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBK0JOLHNEQUFRLENBQUMsRUFBRCxDQUE3QztBQUNBLE1BQUlPLElBQUksR0FBRyxJQUFYOztBQUNBLFFBQU1DLFlBQVksR0FBRyxNQUFNO0FBQ3pCLFFBQUk7QUFDRixZQUFNQyxnQkFBZ0IsR0FBR0MsTUFBTSxDQUFDQyxXQUFoQyxDQURFLENBRUY7O0FBQ0EsVUFBR0osSUFBSCxFQUFTO0FBQ1BLLG9CQUFZLENBQUNMLElBQUQsQ0FBWjtBQUNEOztBQUNEQSxVQUFJLEdBQUdNLFVBQVUsQ0FBQyxNQUFNO0FBQ3RCTixZQUFJLEdBQUcsSUFBUDtBQUNBTCxrQkFBVSxD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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLENBQUF4RSxJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLFlBQUFBLElBQUksQ0FBRXlFLFlBQU4sSUFDRSxNQUFDLHNEQUFEO0FBQ0UsUUFBSSxFQUFFLEVBRFI7QUFFRSxPQUFHLEVBQUV6RSxJQUFGLGFBQUVBLElBQUYsdUJBQUVBLElBQUksQ0FBRXlFLFlBQU4sQ0FBbUJDLEdBRjFCO0FBR0UsUUFBSSxFQUFFMUUsSUFBRixhQUFFQSxJQUFGLHVCQUFFQSxJQUFJLENBQUU2RSxRQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixHQU9BLE1BQUMsc0RBQUQ7QUFBUSxRQUFJLEVBQUUsRUFBZDtBQUFrQixRQUFJLEVBQUU3RSxJQUFGLGFBQUVBLElBQUYsdUJBQUVBLElBQUksQ0FBRW1GLFNBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSSixDQU5GLEVBaUJFO0FBQU0sYUFBUyxFQUFFbEMsaUVBQU0sQ0FBQ21DLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBa0NwRixJQUFsQyxhQUFrQ0EsSUFBbEMsdUJBQWtDQSxJQUFJLENBQUVtRixTQUF4QyxFQWpCRixDQURGO0FBcUJEOztJQXZCUUYsVztVQUNRbEMscUQ7OztNQURSa0MsVzs7QUF5QlQsTUFBTUksZUFBZSxHQUFJQyxLQUFELEtBQVk7QUFDbEN0RixNQUFJLEVBQUVzRixLQUFLLENBQUNyRixJQUFOLENBQVdELElBRGlCO0FBRWxDQyxNQUFJLEVBQUVxRixLQUFLLENBQUNyRjtBQUZzQixDQUFaLENBQXhCOztBQUtlc0YsMEhBQU8sQ0FBQ0YsZUFBRCxDQUFQLENBQXlCdkYsTUFBekIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9mcmllbmQuMWNiNDQ3ZGFmMzVkMDEwZDkzMTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvaGVhZGVyLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IEF2YXRhciBmcm9tICcuLi9jb21tb24vQXZhdGFyJztcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IEFQSSBmcm9tICcuLi8uLi9jb25maWdzL0FQSSc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgVXBsb2FkLCBtZXNzYWdlLCBJbnB1dCwgVGFicywgUmF0ZSB9IGZyb20gJ2FudGQnO1xyXG5cclxuZnVuY3Rpb24gSGVhZGVyKHsgd2l0aG91dFNlYXJjaCwgdXNlciwgYXV0aH0pIHtcclxuICBjb25zdCBbcHJldlNjcm9sbFBvcywgc2V0UHJldlNjcm9sbFBvc10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbc2VhcmNoTW9kYWwsIHNldFNlYXJjaE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2VhcmNoRGF0YSwgc2V0U2VhcmNoRGF0YSBdID0gdXNlU3RhdGUoW10pO1xyXG4gIGxldCB0aW1lID0gbnVsbDtcclxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBjdXJyZW50U2Nyb2xsUG9zID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgICAvLyBjb25zdCB2aXNpYmxlID0gcHJldlNjcm9sbFBvcyA+IGN1cnJlbnRTY3JvbGxQb3M7XHJcbiAgICAgIGlmKHRpbWUpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGltZSk7ICBcclxuICAgICAgfVxyXG4gICAgICB0aW1lID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGltZSA9IG51bGw7XHJcbiAgICAgICAgc2V0VmlzaWJsZSh0cnVlKVxyXG4gICAgICB9LCA1MDApXHJcbiAgICAgIGlmKHZpc2libGUpIHtcclxuICAgICAgICBzZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgICAvLyBzZXRQcmV2U2Nyb2xsUG9zKGN1cnJlbnRTY3JvbGxQb3MpO1xyXG4gICAgICAvLyBzZXRWaXNpYmxlKHZpc2libGUpO1xyXG4gICAgICAvLyB0aW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHsgY29uc29sZS5sb2codGltZXIpfSwgNTAwKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgLy8gY2F0Y2ggd2luZGlvdyA9PT0gdW5kZWZpbmVkIGVycm9yXHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBzZWFyY2hDaGFuZ2UgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybDogJy9zZWFyY2gnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIFwicXVlcnlcIjogZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgXCJvZmZzZXRcIjogMCxcclxuICAgICAgICAgIFwiZmlyc3RcIjogMTBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgeyBzdGF0dXMsIGRhdGEgfSA9IHJlcXVlc3Q7Y29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIGlmKHN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICBzZXRTZWFyY2hEYXRhKGRhdGEpO1xyXG4gICAgICB9IGVsc2UgIHtcclxuICAgICAgICAgIG1lc3NhZ2UuZXJyb3IoJ1BsZWFzZSB0cnkgYWdhaW4hJyk7XHJcbiAgICAgICAgICBzZXRTZWFyY2hEYXRhKGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIF8udGhyb3R0bGUoaGFuZGxlU2Nyb2xsLCAyNTApKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIC8vIGNhdGNoIHdpbmRpb3cgPT09IHVuZGVmaW5lZCBlcnJvclxyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAvLyB1bm1vdW50IGFjdGlvblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIC8vIGNhdGNoIHdpbmRpb3cgPT09IHVuZGVmaW5lZCBlcnJvclxyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9LCBbcHJldlNjcm9sbFBvc10pO1xyXG5cclxuICB2YXIgc2V0dGluZ3MgPSB7XHJcbiAgICBkb3RzOiB0cnVlLFxyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBzcGVlZDogNTAwLFxyXG4gICAgc2xpZGVzVG9TaG93OiA1LFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICB9O1xyXG5cclxuICBjb25zb2xlLmxvZyhzZWFyY2hNb2RhbCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmhlYWRlciwge1xyXG4gICAgICAgICAgW3N0eWxlcy5oZWFkZXJfaGlkZGVuXTogIXZpc2libGUsXHJcbiAgICAgICAgfSl9XHJcbiAgICAgID5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ299PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9sb2dvLnBuZ1wiIGFsdD1cImxvZ29cIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaH0+XHJcbiAgICAgICAgICAgIHshd2l0aG91dFNlYXJjaCAmJiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggRnJlZXNraWVzXCIgb25DbGljaz17KCk9PnNldFNlYXJjaE1vZGFsKHRydWUpfS8+XHJcbiAgICAgICAgICAgICAgICA8VXNlclByb2ZpbGUgdXNlcj17dXNlcn0vPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8VXNlclByb2ZpbGUgdXNlcj17dXNlcn0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRkaXRpb25hbF9oZWFkZXJ9IC8+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLm1vYmlsZV9wcm9maWxlX2hlYWRlciwge1xyXG4gICAgICAgICAgW3N0eWxlcy5oZWFkZXJfaGlkZGVuXTogIXZpc2libGUsXHJcbiAgICAgICAgfSl9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ3N0YXInXX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ2FkZHJlc3MtY2FyZCddfSBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICByb3V0ZXIucHVzaCgnL3Byb2ZpbGUnKTtcclxuICAgICAgICB9fS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9ID5cclxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAndXNlci1jaXJjbGUnXX0gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgcm91dGVyLnB1c2goJy9mcmllbmQnKTtcclxuICAgICAgICB9fS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdsaXN0LWFsdCddfSAvPlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5tb2JpbGVfdG9wX2hlYWRlciwge1xyXG4gICAgICAgICAgW3N0eWxlcy5oZWFkZXJfaGlkZGVuXTogIXZpc2libGUsXHJcbiAgICAgICAgfSl9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ299PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9sb2dvLnBuZ1wiIGFsdD1cImxvZ29cIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaH0+XHJcbiAgICAgICAgICAgIHshd2l0aG91dFNlYXJjaCAmJiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggRnJlZXNraWVzXCIgb25DbGljaz17KCk9PnNldFNlYXJjaE1vZGFsKHRydWUpfSAvPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7c2VhcmNoTW9kYWw/PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hNb2RhbH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hIZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdoYW5kLXBvaW50LWxlZnQnXX0gc3R5bGU9e3sgZm9udFNpemU6IDI1LCBtYXJnaW5Ub3A6IDgsIGZsZXg6IDEsIGN1cnNvcjogJ3BvaW50ZXInfX0gb25DbGljaz17KCk9PnNldFNlYXJjaE1vZGFsKGZhbHNlKX0vPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0ICBuYW1lPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggRnJlZXNraWVzXCIgb25DaGFuZ2U9e3NlYXJjaENoYW5nZX0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAge3NlYXJjaERhdGEubGVuZ3RoID4gMD9zZWFyY2hEYXRhLm1hcCgoaXRlbSwgaW5kZXggKT0+IHsgXHJcbiAgICAgICAgICAgICAgICBpZihpdGVtLnR5cGUgPT0gJ0FjY291bnQnKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBtYXJnaW5Cb3R0b206IDUgfX0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPXs1MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsPXtpdGVtPy5wcm9maWxlUGhvdG8/LnNyY31cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyX2luZm99PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudXNlcl9uYW1lfT57aXRlbS51c2VybmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLnR5cGUgPT0gJ1Bvc3QnKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIG1hcmdpbkJvdHRvbTogNSB9fSBrZXk9eydwb3N0JytpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXs1MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw9e2l0ZW0uYWNjb3VudD8ucHJvZmlsZVBob3RvPy5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcl9pbmZvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudXNlcl9wb3N0fT57aXRlbS50ZXh0fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pOjxkaXY+Tm8gZGF0YTwvZGl2Pn1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+Om51bGx9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBVc2VyUHJvZmlsZSh7IHVzZXIgPSB7fSB9KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZX1cclxuICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvcHJvZmlsZScpO1xyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn0+XHJcbiAgICAgICAgeyB1c2VyPy5wcm9maWxlUGhvdG8gPyAoXHJcbiAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICBzaXplPXs0MH1cclxuICAgICAgICAgICAgICB1cmw9e3VzZXI/LnByb2ZpbGVQaG90by5zcmN9XHJcbiAgICAgICAgICAgICAgdGV4dD17dXNlcj8udXNlcm5hbWV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgPEF2YXRhciBzaXplPXs0MH0gdGV4dD17dXNlcj8uZmlyc3ROYW1lfSAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT57YCR7dXNlcj8uZmlyc3ROYW1lfWB9PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0b3JlKSA9PiAoe1xyXG4gIHVzZXI6IHN0b3JlLmF1dGgudXNlcixcclxuICBhdXRoOiBzdG9yZS5hdXRoXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEhlYWRlcik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=