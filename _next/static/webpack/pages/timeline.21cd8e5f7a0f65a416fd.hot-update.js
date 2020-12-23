webpackHotUpdate_N_E("pages/timeline",{

/***/ "./components/header/Header.js":
/*!*************************************!*\
  !*** ./components/header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/header.module.scss */ "./components/header/styles/header.module.scss");
/* harmony import */ var _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/Avatar */ "./components/common/Avatar.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _configs_API__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../configs/API */ "./configs/API.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");




var _jsxFileName = "D:\\Freeskies-development-\\components\\header\\Header.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;













function Header(_ref) {
  _s();

  var _this = this;

  var withoutSearch = _ref.withoutSearch,
      user = _ref.user,
      auth = _ref.auth;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      prevScrollPos = _useState[0],
      setPrevScrollPos = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      searchModal = _useState3[0],
      setSearchModal = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      searchData = _useState4[0],
      setSearchData = _useState4[1];

  var inputElement = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var time = null;

  var handleScroll = function handleScroll() {
    try {
      var currentScrollPos = window.pageYOffset; // const visible = prevScrollPos > currentScrollPos;

      if (time) {
        clearTimeout(time);
      }

      time = setTimeout(function () {
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

  var searchChange = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(event) {
      var request, status, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return Object(_configs_API__WEBPACK_IMPORTED_MODULE_12__["default"])({
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

            case 3:
              request = _context.sent;
              status = request.status, data = request.data;
              console.log(data);

              if (status == 200) {
                setSearchData(data);
              } else {
                antd__WEBPACK_IMPORTED_MODULE_13__["message"].error('Please try again!');
                setSearchData(data);
              }

              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    }));

    return function searchChange(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var navigateUserProfile = function navigateUserProfile(param) {
    // router.push({
    //   pathname: `/profiles/`,
    //   slug: [param],
    // })
    window.location = '/profiles/' + param;
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (inputElement.current) {
      inputElement.current.focus();
    }

    try {
      window.addEventListener('scroll', lodash__WEBPACK_IMPORTED_MODULE_7___default.a.throttle(handleScroll, 250));
    } catch (error) {
      // catch windiow === undefined error
      console.log(error);
    }

    return function () {
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
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.header, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.header_hidden, !visible)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.logo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/logo.png",
    alt: "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.search,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  }, !withoutSearch && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("input", {
    name: "search",
    placeholder: "Search Freeskies",
    onClick: function onClick() {
      setSearchModal(true);

      if (inputElement.current) {
        inputElement.current.focus();
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 17
    }
  }), __jsx(UserProfile, {
    user: user,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.profileMenu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 11
    }
  }, __jsx(UserProfile, {
    user: user,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }
  })), __jsx(Tooltip, {
    placement: "top",
    title: 'Groups',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.menuIcon,
    style: {
      paddingTop: 12
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/groups_icon.png",
    alt: "logo",
    style: {
      height: 22
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 15
    }
  }))), __jsx(Tooltip, {
    placement: "top",
    title: 'Marketplace',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.menuIcon,
    style: {
      paddingTop: 15
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/marketplace_icon.png",
    alt: "logo",
    style: {
      width: 21
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 15
    }
  }))), __jsx(Tooltip, {
    placement: "top",
    title: 'Timeline',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.menuIcon,
    onClick: function onClick() {
      router.push('/timeline');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_14__["HomeOutlined"], {
    style: {
      fontSize: 20
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 15
    }
  }))), __jsx(Tooltip, {
    placement: "top",
    title: 'Notifications',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.menuIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 13
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_14__["BellOutlined"], {
    style: {
      fontSize: 20
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 15
    }
  }))), __jsx(Tooltip, {
    placement: "top",
    title: 'Settings',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.menuIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 13
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_14__["SettingOutlined"], {
    style: {
      fontSize: 20
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 15
    }
  }))))), __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.additional_header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.mobile_profile_header, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.header_hidden, !visible)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 9
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_14__["HomeOutlined"], {
    style: {
      fontSize: 18
    },
    onClick: function onClick() {
      router.push('/timeline');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 9
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
    style: {
      marginTop: 8
    },
    icon: ['far', 'address-card'],
    onClick: function onClick() {
      router.push('/profile');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 9
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
    style: {
      marginTop: 8
    },
    icon: ['far', 'user-circle'],
    onClick: function onClick() {
      router.push('/friend');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 9
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_14__["BellOutlined"], {
    style: {
      fontSize: 18
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.mobile_top_header, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.header_hidden, !visible)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.logo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/logo.png",
    alt: "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.search,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 11
    }
  }, !withoutSearch && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("input", {
    name: "search",
    placeholder: "Search Freeskies",
    onClick: function onClick() {
      setSearchModal(true);

      if (inputElement.current) {
        inputElement.current.focus();
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 17
    }
  }))))), searchModal ? __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.searchModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 20
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.searchHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 15
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
    icon: ['far', 'hand-point-left'],
    style: {
      fontSize: 25,
      marginTop: 8,
      flex: 1,
      cursor: 'pointer'
    },
    onClick: function onClick() {
      return setSearchModal(false);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 17
    }
  }), __jsx("input", {
    name: "search",
    placeholder: "Search Freeskies",
    onChange: searchChange,
    autoFocus: true,
    ref: inputElement,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.searchContent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 15
    }
  }, searchData.length > 0 ? searchData.map(function (item, index) {
    if (item.type == 'Account') {
      var _item$profilePhoto;

      return __jsx("div", {
        onClick: function onClick() {
          return navigateUserProfile("".concat(item.username));
        },
        className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.searchItem,
        key: index,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 19
        }
      }, __jsx("div", {
        className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.avatar,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 21
        }
      }, __jsx(_common_Avatar__WEBPACK_IMPORTED_MODULE_9__["default"], {
        size: 50,
        url: item === null || item === void 0 ? void 0 : (_item$profilePhoto = item.profilePhoto) === null || _item$profilePhoto === void 0 ? void 0 : _item$profilePhoto.src,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 23
        }
      })), __jsx("div", {
        className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.user_info,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 21
        }
      }, __jsx("p", {
        className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.user_name,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 23
        }
      }, item.username)));
    } else if (item.type == 'Post') {
      var _item$account, _item$account$profile;

      return __jsx("div", {
        key: 'post' + index,
        className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.searchItem,
        onClick: function onClick() {
          return navigateUserProfile("".concat(item.account.username));
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.avatar,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 23
        }
      }, __jsx(_common_Avatar__WEBPACK_IMPORTED_MODULE_9__["default"], {
        size: 50,
        url: (_item$account = item.account) === null || _item$account === void 0 ? void 0 : (_item$account$profile = _item$account.profilePhoto) === null || _item$account$profile === void 0 ? void 0 : _item$account$profile.src,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 25
        }
      })), __jsx("div", {
        className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.user_info,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 23
        }
      }, __jsx("p", {
        className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.user_post,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 25
        }
      }, item.text)));
    }
  }) : __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 20
    }
  }, "No data"))) : null);
}

_s(Header, "jiXFR76NEBlO+wWzJJm1v/GWqb8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c = Header;

function UserProfile(_ref3) {
  _s2();

  var _ref3$user = _ref3.user,
      user = _ref3$user === void 0 ? {} : _ref3$user;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  return __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.profile,
    onClick: function onClick() {
      router.push('/profile');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 7
    }
  }, user !== null && user !== void 0 && user.profilePhoto ? __jsx(_common_Avatar__WEBPACK_IMPORTED_MODULE_9__["default"], {
    size: 40,
    url: user === null || user === void 0 ? void 0 : user.profilePhoto.src,
    text: user === null || user === void 0 ? void 0 : user.username,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 13
    }
  }) : __jsx(_common_Avatar__WEBPACK_IMPORTED_MODULE_9__["default"], {
    size: 40,
    text: user === null || user === void 0 ? void 0 : user.firstName,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 11
    }
  })), __jsx("span", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 7
    }
  }, "".concat(user === null || user === void 0 ? void 0 : user.firstName)));
}

_s2(UserProfile, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c2 = UserProfile;

var mapStateToProps = function mapStateToProps(store) {
  return {
    user: store.auth.user,
    auth: store.auth
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps)(Header));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsIndpdGhvdXRTZWFyY2giLCJ1c2VyIiwiYXV0aCIsInVzZVN0YXRlIiwicHJldlNjcm9sbFBvcyIsInNldFByZXZTY3JvbGxQb3MiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInNlYXJjaE1vZGFsIiwic2V0U2VhcmNoTW9kYWwiLCJzZWFyY2hEYXRhIiwic2V0U2VhcmNoRGF0YSIsImlucHV0RWxlbWVudCIsInVzZVJlZiIsInRpbWUiLCJoYW5kbGVTY3JvbGwiLCJjdXJyZW50U2Nyb2xsUG9zIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwic2VhcmNoQ2hhbmdlIiwiZXZlbnQiLCJBUEkiLCJtZXRob2QiLCJ1cmwiLCJkYXRhIiwidGFyZ2V0IiwidmFsdWUiLCJoZWFkZXJzIiwidG9rZW4iLCJyZXF1ZXN0Iiwic3RhdHVzIiwibWVzc2FnZSIsIm5hdmlnYXRlVXNlclByb2ZpbGUiLCJwYXJhbSIsImxvY2F0aW9uIiwidXNlRWZmZWN0IiwiY3VycmVudCIsImZvY3VzIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl8iLCJ0aHJvdHRsZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXR0aW5ncyIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjbGFzc25hbWVzIiwic3R5bGVzIiwiaGVhZGVyIiwiaGVhZGVyX2hpZGRlbiIsImNvbnRhaW5lciIsImxvZ28iLCJzZWFyY2giLCJwcm9maWxlTWVudSIsIm1lbnVJY29uIiwicGFkZGluZ1RvcCIsImhlaWdodCIsIndpZHRoIiwicHVzaCIsImZvbnRTaXplIiwiYWRkaXRpb25hbF9oZWFkZXIiLCJtb2JpbGVfcHJvZmlsZV9oZWFkZXIiLCJtYXJnaW5Ub3AiLCJtb2JpbGVfdG9wX2hlYWRlciIsInNlYXJjaEhlYWRlciIsImZsZXgiLCJjdXJzb3IiLCJzZWFyY2hDb250ZW50IiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImluZGV4IiwidHlwZSIsInVzZXJuYW1lIiwic2VhcmNoSXRlbSIsImF2YXRhciIsInByb2ZpbGVQaG90byIsInNyYyIsInVzZXJfaW5mbyIsInVzZXJfbmFtZSIsImFjY291bnQiLCJ1c2VyX3Bvc3QiLCJ0ZXh0IiwiVXNlclByb2ZpbGUiLCJwcm9maWxlIiwiZmlyc3ROYW1lIiwibmFtZSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0b3JlIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxNQUFULE9BQThDO0FBQUE7O0FBQUE7O0FBQUEsTUFBNUJDLGFBQTRCLFFBQTVCQSxhQUE0QjtBQUFBLE1BQWJDLElBQWEsUUFBYkEsSUFBYTtBQUFBLE1BQVBDLElBQU8sUUFBUEEsSUFBTzs7QUFBQSxrQkFDRkMsc0RBQVEsQ0FBQyxDQUFELENBRE47QUFBQSxNQUNyQ0MsYUFEcUM7QUFBQSxNQUN0QkMsZ0JBRHNCOztBQUFBLG1CQUVkRixzREFBUSxDQUFDLElBQUQsQ0FGTTtBQUFBLE1BRXJDRyxPQUZxQztBQUFBLE1BRTVCQyxVQUY0Qjs7QUFBQSxtQkFHTkosc0RBQVEsQ0FBQyxLQUFELENBSEY7QUFBQSxNQUdyQ0ssV0FIcUM7QUFBQSxNQUd4QkMsY0FId0I7O0FBQUEsbUJBSVBOLHNEQUFRLENBQUMsRUFBRCxDQUpEO0FBQUEsTUFJckNPLFVBSnFDO0FBQUEsTUFJekJDLGFBSnlCOztBQUs1QyxNQUFNQyxZQUFZLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUEzQjtBQUVBLE1BQUlDLElBQUksR0FBRyxJ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QUFBQTtBQUFBO0FBQUEsS0FDSW5GLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosSUFBQUEsSUFBSSxDQUFFb0YsWUFBTixHQUNFLE1BQUMsc0RBQUQ7QUFDRSxRQUFJLEVBQUUsRUFEUjtBQUVFLE9BQUcsRUFBRXBGLElBQUYsYUFBRUEsSUFBRix1QkFBRUEsSUFBSSxDQUFFb0YsWUFBTixDQUFtQkMsR0FGMUI7QUFHRSxRQUFJLEVBQUVyRixJQUFGLGFBQUVBLElBQUYsdUJBQUVBLElBQUksQ0FBRWlGLFFBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEdBT0EsTUFBQyxzREFBRDtBQUFRLFFBQUksRUFBRSxFQUFkO0FBQWtCLFFBQUksRUFBRWpGLElBQUYsYUFBRUEsSUFBRix1QkFBRUEsSUFBSSxDQUFFNkYsU0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJKLENBTkYsRUFpQkU7QUFBTSxhQUFTLEVBQUV0QyxpRUFBTSxDQUFDdUMsSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFrQzlGLElBQWxDLGFBQWtDQSxJQUFsQyx1QkFBa0NBLElBQUksQ0FBRTZGLFNBQXhDLEVBakJGLENBREY7QUFxQkQ7O0lBdkJRRixXO1VBQ1F0QyxxRDs7O01BRFJzQyxXOztBQXlCVCxJQUFNSSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ2xDaEcsUUFBSSxFQUFFZ0csS0FBSyxDQUFDL0YsSUFBTixDQUFXRCxJQURpQjtBQUVsQ0MsUUFBSSxFQUFFK0YsS0FBSyxDQUFDL0Y7QUFGc0IsR0FBWjtBQUFBLENBQXhCOztBQUtlZ0csMEhBQU8sQ0FBQ0YsZUFBRCxDQUFQLENBQXlCakcsTUFBekIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90aW1lbGluZS4yMWNkOGU1ZjdhMGY2NWE0MTZmZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy9oZWFkZXIubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnLi4vY29tbW9uL0F2YXRhcic7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcbmltcG9ydCBBUEkgZnJvbSAnLi4vLi4vY29uZmlncy9BUEknO1xyXG5pbXBvcnQgeyBCdXR0b24sIFVwbG9hZCwgbWVzc2FnZSwgSW5wdXQsIFRhYnMsIFJhdGUgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgQ2FtZXJhT3V0bGluZWQsICBIb21lT3V0bGluZWQsIEJlbGxPdXRsaW5lZCwgU2V0dGluZ091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5cclxuZnVuY3Rpb24gSGVhZGVyKHsgd2l0aG91dFNlYXJjaCwgdXNlciwgYXV0aH0pIHtcclxuICBjb25zdCBbcHJldlNjcm9sbFBvcywgc2V0UHJldlNjcm9sbFBvc10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbc2VhcmNoTW9kYWwsIHNldFNlYXJjaE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2VhcmNoRGF0YSwgc2V0U2VhcmNoRGF0YSBdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IGlucHV0RWxlbWVudCA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgbGV0IHRpbWUgPSBudWxsO1xyXG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRTY3JvbGxQb3MgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICAgIC8vIGNvbnN0IHZpc2libGUgPSBwcmV2U2Nyb2xsUG9zID4gY3VycmVudFNjcm9sbFBvcztcclxuICAgICAgaWYodGltZSkge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lKTsgIFxyXG4gICAgICB9XHJcbiAgICAgIHRpbWUgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aW1lID0gbnVsbDtcclxuICAgICAgICBzZXRWaXNpYmxlKHRydWUpXHJcbiAgICAgIH0sIDUwMClcclxuICAgICAgaWYodmlzaWJsZSkge1xyXG4gICAgICAgIHNldFZpc2libGUoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIHNldFByZXZTY3JvbGxQb3MoY3VycmVudFNjcm9sbFBvcyk7XHJcbiAgICAgIC8vIHNldFZpc2libGUodmlzaWJsZSk7XHJcbiAgICAgIC8vIHRpbWVyID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4geyBjb25zb2xlLmxvZyh0aW1lcil9LCA1MDApXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAvLyBjYXRjaCB3aW5kaW93ID09PSB1bmRlZmluZWQgZXJyb3JcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNlYXJjaENoYW5nZSA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsOiAnL3NlYXJjaCcsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgXCJxdWVyeVwiOiBldmVudC50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICBcIm9mZnNldFwiOiAwLFxyXG4gICAgICAgICAgXCJmaXJzdFwiOiAxMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCB7IHN0YXR1cywgZGF0YSB9ID0gcmVxdWVzdDtjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgaWYoc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgIHNldFNlYXJjaERhdGEoZGF0YSk7XHJcbiAgICAgIH0gZWxzZSAge1xyXG4gICAgICAgICAgbWVzc2FnZS5lcnJvcignUGxlYXNlIHRyeSBhZ2FpbiEnKTtcclxuICAgICAgICAgIHNldFNlYXJjaERhdGEoZGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IG5hdmlnYXRlVXNlclByb2ZpbGUgPSAocGFyYW0pID0+IHtcclxuICAgIC8vIHJvdXRlci5wdXNoKHtcclxuICAgIC8vICAgcGF0aG5hbWU6IGAvcHJvZmlsZXMvYCxcclxuICAgIC8vICAgc2x1ZzogW3BhcmFtXSxcclxuICAgIC8vIH0pXHJcbiAgICB3aW5kb3cubG9jYXRpb24gPSAnL3Byb2ZpbGVzLycrcGFyYW07XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGlucHV0RWxlbWVudC5jdXJyZW50KSB7XHJcbiAgICAgIGlucHV0RWxlbWVudC5jdXJyZW50LmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgXy50aHJvdHRsZShoYW5kbGVTY3JvbGwsIDI1MCkpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgLy8gY2F0Y2ggd2luZGlvdyA9PT0gdW5kZWZpbmVkIGVycm9yXHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIC8vIHVubW91bnQgYWN0aW9uXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgLy8gY2F0Y2ggd2luZGlvdyA9PT0gdW5kZWZpbmVkIGVycm9yXHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH0sIFtwcmV2U2Nyb2xsUG9zXSk7XHJcblxyXG4gIHZhciBzZXR0aW5ncyA9IHtcclxuICAgIGRvdHM6IHRydWUsXHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIHNwZWVkOiA1MDAsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDUsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5oZWFkZXIsIHtcclxuICAgICAgICAgIFtzdHlsZXMuaGVhZGVyX2hpZGRlbl06ICF2aXNpYmxlLFxyXG4gICAgICAgIH0pfVxyXG4gICAgICA+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvbG9nby5wbmdcIiBhbHQ9XCJsb2dvXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2h9PlxyXG4gICAgICAgICAgICB7IXdpdGhvdXRTZWFyY2ggJiYgKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIEZyZWVza2llc1wiIG9uQ2xpY2s9eygpPT57IHNldFNlYXJjaE1vZGFsKHRydWUpOyBpZihpbnB1dEVsZW1lbnQuY3VycmVudCkge2lucHV0RWxlbWVudC5jdXJyZW50LmZvY3VzKCk7fX19Lz5cclxuICAgICAgICAgICAgICAgIDxVc2VyUHJvZmlsZSB1c2VyPXt1c2VyfS8+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZU1lbnV9PlxyXG4gICAgICAgICAgICA8VXNlclByb2ZpbGUgdXNlcj17dXNlcn0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cInRvcFwiIHRpdGxlPXsnR3JvdXBzJ30+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudUljb259IHN0eWxlPXt7IHBhZGRpbmdUb3A6IDEyIH19PlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2dyb3Vwc19pY29uLnBuZ1wiIGFsdD1cImxvZ29cIiBzdHlsZT17eyBoZWlnaHQ6IDIyIH19Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJ0b3BcIiB0aXRsZT17J01hcmtldHBsYWNlJ30+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudUljb259IHN0eWxlPXt7IHBhZGRpbmdUb3A6IDE1IH19PlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL21hcmtldHBsYWNlX2ljb24ucG5nXCIgYWx0PVwibG9nb1wiIHN0eWxlPXt7IHdpZHRoOiAyMSB9fS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwidG9wXCIgdGl0bGU9eydUaW1lbGluZSd9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnVJY29ufSBvbkNsaWNrPXsoKSA9PiB7IHJvdXRlci5wdXNoKCcvdGltZWxpbmUnKX19PlxyXG4gICAgICAgICAgICAgIDxIb21lT3V0bGluZWQgc3R5bGU9e3sgZm9udFNpemU6IDIwIH19Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJ0b3BcIiB0aXRsZT17J05vdGlmaWNhdGlvbnMnfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51SWNvbn0+XHJcbiAgICAgICAgICAgICAgPEJlbGxPdXRsaW5lZCBzdHlsZT17eyBmb250U2l6ZTogMjAgfX0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cInRvcFwiIHRpdGxlPXsnU2V0dGluZ3MnfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51SWNvbn0gPlxyXG4gICAgICAgICAgICAgIDxTZXR0aW5nT3V0bGluZWQgc3R5bGU9e3sgZm9udFNpemU6IDIwIH19Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZGl0aW9uYWxfaGVhZGVyfSAvPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5tb2JpbGVfcHJvZmlsZV9oZWFkZXIsIHtcclxuICAgICAgICAgIFtzdHlsZXMuaGVhZGVyX2hpZGRlbl06ICF2aXNpYmxlLFxyXG4gICAgICAgIH0pfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgPEhvbWVPdXRsaW5lZCBzdHlsZT17eyBmb250U2l6ZTogMTggfX0gb25DbGljaz17KCkgPT4geyByb3V0ZXIucHVzaCgnL3RpbWVsaW5lJyl9fS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzdHlsZT17eyBtYXJnaW5Ub3A6IDh9fSBpY29uPXtbJ2ZhcicsICdhZGRyZXNzLWNhcmQnXX0gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgcm91dGVyLnB1c2goJy9wcm9maWxlJyk7XHJcbiAgICAgICAgfX0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSA+XHJcbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHN0eWxlPXt7IG1hcmdpblRvcDogOH19IGljb249e1snZmFyJywgJ3VzZXItY2lyY2xlJ119IG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIHJvdXRlci5wdXNoKCcvZnJpZW5kJyk7XHJcbiAgICAgICAgfX0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgIDxCZWxsT3V0bGluZWQgc3R5bGU9e3sgZm9udFNpemU6IDE4IH19Lz5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMubW9iaWxlX3RvcF9oZWFkZXIsIHtcclxuICAgICAgICAgIFtzdHlsZXMuaGVhZGVyX2hpZGRlbl06ICF2aXNpYmxlLFxyXG4gICAgICAgIH0pfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvbG9nby5wbmdcIiBhbHQ9XCJsb2dvXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2h9PlxyXG4gICAgICAgICAgICB7IXdpdGhvdXRTZWFyY2ggJiYgKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIEZyZWVza2llc1wiIG9uQ2xpY2s9eygpPT57IHNldFNlYXJjaE1vZGFsKHRydWUpOyBpZihpbnB1dEVsZW1lbnQuY3VycmVudCl7aW5wdXRFbGVtZW50LmN1cnJlbnQuZm9jdXMoKTt9fX0gLz5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3NlYXJjaE1vZGFsPzxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoTW9kYWx9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoSGVhZGVyfT5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAnaGFuZC1wb2ludC1sZWZ0J119IHN0eWxlPXt7IGZvbnRTaXplOiAyNSwgbWFyZ2luVG9wOiA4LCBmbGV4OiAxLCBjdXJzb3I6ICdwb2ludGVyJ319IG9uQ2xpY2s9eygpPT5zZXRTZWFyY2hNb2RhbChmYWxzZSl9Lz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCAgbmFtZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIEZyZWVza2llc1wiIG9uQ2hhbmdlPXtzZWFyY2hDaGFuZ2V9IGF1dG9Gb2N1cz17dHJ1ZX0gcmVmPXtpbnB1dEVsZW1lbnR9IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hDb250ZW50fT5cclxuICAgICAgICAgICAgICAgIHtzZWFyY2hEYXRhLmxlbmd0aCA+IDA/c2VhcmNoRGF0YS5tYXAoKGl0ZW0sIGluZGV4ICk9PiB7IFxyXG4gICAgICAgICAgICAgICAgaWYoaXRlbS50eXBlID09ICdBY2NvdW50Jykge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlVXNlclByb2ZpbGUoYCR7aXRlbS51c2VybmFtZX1gKSB9IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaEl0ZW19IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17NTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybD17aXRlbT8ucHJvZmlsZVBob3RvPy5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcl9pbmZvfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfbmFtZX0+e2l0ZW0udXNlcm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbS50eXBlID09ICdQb3N0Jykge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgIGtleT17J3Bvc3QnK2luZGV4fSBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hJdGVtfSBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZVVzZXJQcm9maWxlKGAke2l0ZW0uYWNjb3VudC51c2VybmFtZX1gKSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17NTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsPXtpdGVtLmFjY291bnQ/LnByb2ZpbGVQaG90bz8uc3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfaW5mb30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfcG9zdH0+e2l0ZW0udGV4dH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTo8ZGl2Pk5vIGRhdGE8L2Rpdj59XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PjpudWxsfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gVXNlclByb2ZpbGUoeyB1c2VyID0ge30gfSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGV9XHJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICByb3V0ZXIucHVzaCgnL3Byb2ZpbGUnKTtcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9PlxyXG4gICAgICAgIHsgdXNlcj8ucHJvZmlsZVBob3RvID8gKFxyXG4gICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgc2l6ZT17NDB9XHJcbiAgICAgICAgICAgICAgdXJsPXt1c2VyPy5wcm9maWxlUGhvdG8uc3JjfVxyXG4gICAgICAgICAgICAgIHRleHQ9e3VzZXI/LnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxBdmF0YXIgc2l6ZT17NDB9IHRleHQ9e3VzZXI/LmZpcnN0TmFtZX0gLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubmFtZX0+e2Ake3VzZXI/LmZpcnN0TmFtZX1gfTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdG9yZSkgPT4gKHtcclxuICB1c2VyOiBzdG9yZS5hdXRoLnVzZXIsXHJcbiAgYXV0aDogc3RvcmUuYXV0aFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShIZWFkZXIpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9