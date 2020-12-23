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

  var contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79'
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
      lineNumber: 118,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.logo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/logo.png",
    alt: "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.search,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
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
      lineNumber: 131,
      columnNumber: 17
    }
  }), __jsx(UserProfile, {
    user: user,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.profileMenu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 11
    }
  }, __jsx(UserProfile, {
    user: user,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Tooltip"], {
    placement: "bottom",
    title: 'Groups',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
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
      lineNumber: 141,
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
      lineNumber: 142,
      columnNumber: 15
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Tooltip"], {
    placement: "bottom",
    title: 'Marketplace',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
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
      lineNumber: 146,
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
      lineNumber: 147,
      columnNumber: 15
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Tooltip"], {
    placement: "bottom",
    title: 'Timeline',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
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
      lineNumber: 151,
      columnNumber: 13
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_14__["HomeOutlined"], {
    style: {
      fontSize: 20
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 15
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Tooltip"], {
    placement: "bottom",
    title: 'Notifications',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.menuIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 13
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_14__["BellOutlined"], {
    style: {
      fontSize: 20
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 15
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Tooltip"], {
    placement: "bottom",
    title: 'Settings',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.menuIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 13
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_14__["SettingOutlined"], {
    style: {
      fontSize: 20
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 15
    }
  }))))), __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.additional_header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.mobile_profile_header, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.header_hidden, !visible)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Carousel"], {
    afterChange: function afterChange() {
      console.log('dfdfdsa');
    },
    rows: 4,
    autoplay: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.containerd,
    style: contentStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.containerd,
    style: contentStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.containerd,
    style: contentStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.containerd,
    style: contentStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.mobile_top_header, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.header_hidden, !visible)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.logo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/logo.png",
    alt: "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.search,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
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
      lineNumber: 204,
      columnNumber: 17
    }
  }))))), searchModal ? __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.searchModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 20
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.searchHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
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
      lineNumber: 213,
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
      lineNumber: 214,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.searchContent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
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
          lineNumber: 220,
          columnNumber: 19
        }
      }, __jsx("div", {
        className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.avatar,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 21
        }
      }, __jsx(_common_Avatar__WEBPACK_IMPORTED_MODULE_9__["default"], {
        size: 50,
        url: item === null || item === void 0 ? void 0 : (_item$profilePhoto = item.profilePhoto) === null || _item$profilePhoto === void 0 ? void 0 : _item$profilePhoto.src,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 23
        }
      })), __jsx("div", {
        className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.user_info,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 21
        }
      }, __jsx("p", {
        className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.user_name,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228,
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
          lineNumber: 234,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.avatar,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 23
        }
      }, __jsx(_common_Avatar__WEBPACK_IMPORTED_MODULE_9__["default"], {
        size: 50,
        url: (_item$account = item.account) === null || _item$account === void 0 ? void 0 : (_item$account$profile = _item$account.profilePhoto) === null || _item$account$profile === void 0 ? void 0 : _item$account$profile.src,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 25
        }
      })), __jsx("div", {
        className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.user_info,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 23
        }
      }, __jsx("p", {
        className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.user_post,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 25
        }
      }, item.text)));
    }
  }) : __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
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
      lineNumber: 257,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 7
    }
  }, user !== null && user !== void 0 && user.profilePhoto ? __jsx(_common_Avatar__WEBPACK_IMPORTED_MODULE_9__["default"], {
    size: 40,
    url: user === null || user === void 0 ? void 0 : user.profilePhoto.src,
    text: user === null || user === void 0 ? void 0 : user.username,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 13
    }
  }) : __jsx(_common_Avatar__WEBPACK_IMPORTED_MODULE_9__["default"], {
    size: 40,
    text: user === null || user === void 0 ? void 0 : user.firstName,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 11
    }
  })), __jsx("span", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsIndpdGhvdXRTZWFyY2giLCJ1c2VyIiwiYXV0aCIsInVzZVN0YXRlIiwicHJldlNjcm9sbFBvcyIsInNldFByZXZTY3JvbGxQb3MiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInNlYXJjaE1vZGFsIiwic2V0U2VhcmNoTW9kYWwiLCJzZWFyY2hEYXRhIiwic2V0U2VhcmNoRGF0YSIsImlucHV0RWxlbWVudCIsInVzZVJlZiIsInRpbWUiLCJoYW5kbGVTY3JvbGwiLCJjdXJyZW50U2Nyb2xsUG9zIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwic2VhcmNoQ2hhbmdlIiwiZXZlbnQiLCJBUEkiLCJtZXRob2QiLCJ1cmwiLCJkYXRhIiwidGFyZ2V0IiwidmFsdWUiLCJoZWFkZXJzIiwidG9rZW4iLCJyZXF1ZXN0Iiwic3RhdHVzIiwibWVzc2FnZSIsIm5hdmlnYXRlVXNlclByb2ZpbGUiLCJwYXJhbSIsImxvY2F0aW9uIiwiY29udGVudFN0eWxlIiwiaGVpZ2h0IiwiY29sb3IiLCJsaW5lSGVpZ2h0IiwidGV4dEFsaWduIiwiYmFja2dyb3VuZCIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJmb2N1cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJfIiwidGhyb3R0bGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0dGluZ3MiLCJkb3RzIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwicm91dGVyIiwidXNlUm91dGVyIiwiY2xhc3NuYW1lcyIsInN0eWxlcyIsImhlYWRlciIsImhlYWRlcl9oaWRkZW4iLCJjb250YWluZXIiLCJsb2dvIiwic2VhcmNoIiwicHJvZmlsZU1lbnUiLCJtZW51SWNvbiIsInBhZGRpbmdUb3AiLCJ3aWR0aCIsInB1c2giLCJmb250U2l6ZSIsImFkZGl0aW9uYWxfaGVhZGVyIiwibW9iaWxlX3Byb2ZpbGVfaGVhZGVyIiwiY29udGFpbmVyZCIsIm1vYmlsZV90b3BfaGVhZGVyIiwic2VhcmNoSGVhZGVyIiwibWFyZ2luVG9wIiwiZmxleCIsImN1cnNvciIsInNlYXJjaENvbnRlbnQiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJ0eXBlIiwidXNlcm5hbWUiLCJzZWFyY2hJdGVtIiwiYXZhdGFyIiwicHJvZmlsZVBob3RvIiwic3JjIiwidXNlcl9pbmZvIiwidXNlcl9uYW1lIiwiYWNjb3VudCIsInVzZXJfcG9zdCIsInRleHQiLCJVc2VyUHJvZmlsZSIsInByb2ZpbGUiLCJmaXJzdE5hbWUiLCJuYW1lIiwibWFwU3RhdGVUb1Byb3BzIiwic3RvcmUiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsT0FBOEM7QUFBQTs7QUFBQTs7QUFBQSxNQUE1QkMsYUFBNEIsUUFBNUJBLGFBQTRCO0FBQUEsTUFBYkMsSUFBYSxRQUFiQSxJQUFhO0FBQUEsTUFBUEMsSUFBTyxRQUFQQSxJQUFPOztBQUFBLGtCQUNGQyxzREFBUSxDQUFDLENBQUQsQ0FETjtBQUFBLE1BQ3JDQyxhQURxQztBQUFBLE1BQ3RCQyxnQkFEc0I7O0FBQUEsbUJBRWRGLHNEQUFRLENBQUMsSUFBRCxDQUZNO0FBQUEsTUFFckNHLE9BRnFDO0FBQUEsTUFFNUJDLFVBRjRCOztBQUFBLG1CQUdOSixzREFBUSxDQUFDLEtBQUQsQ0FIRjtBQUFBLE1BR3JDSyxXQUhxQztBQUFBLE1BR3hCQyxjQUh3Qjs7QUFBQSxtQkFJUE4sc0RBQVEsQ0FBQyxFQUFELENBSkQ7QUFBQSxNQUlyQ08sVUFKcUM7QUFBQSxNQUl6QkMs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QUVBLElBQUYsdUJBQUVBLElBQUksQ0FBRXVGLFFBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEdBT0EsTUFBQyxzREFBRDtBQUFRLFFBQUksRUFBRSxFQUFkO0FBQWtCLFFBQUksRUFBRXZGLElBQUYsYUFBRUEsSUFBRix1QkFBRUEsSUFBSSxDQUFFbUcsU0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJKLENBTkYsRUFpQkU7QUFBTSxhQUFTLEVBQUV0QyxpRUFBTSxDQUFDdUMsSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFrQ3BHLElBQWxDLGFBQWtDQSxJQUFsQyx1QkFBa0NBLElBQUksQ0FBRW1HLFNBQXhDLEVBakJGLENBREY7QUFxQkQ7O0lBdkJRRixXO1VBQ1F0QyxxRDs7O01BRFJzQyxXOztBQXlCVCxJQUFNSSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ2xDdEcsUUFBSSxFQUFFc0csS0FBSyxDQUFDckcsSUFBTixDQUFXRCxJQURpQjtBQUVsQ0MsUUFBSSxFQUFFcUcsS0FBSyxDQUFDckc7QUFGc0IsR0FBWjtBQUFBLENBQXhCOztBQUtlc0csMEhBQU8sQ0FBQ0YsZUFBRCxDQUFQLENBQXlCdkcsTUFBekIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90aW1lbGluZS5kMzEwNTMyNDEyNGE4ZjcwZDY3MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy9oZWFkZXIubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnLi4vY29tbW9uL0F2YXRhcic7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcbmltcG9ydCBBUEkgZnJvbSAnLi4vLi4vY29uZmlncy9BUEknO1xyXG5pbXBvcnQgeyBCdXR0b24sIFVwbG9hZCwgbWVzc2FnZSwgSW5wdXQsIFRhYnMsIFJhdGUsIFRvb2x0aXAsIENhcm91c2VsIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IENhbWVyYU91dGxpbmVkLCAgSG9tZU91dGxpbmVkLCBCZWxsT3V0bGluZWQsIFNldHRpbmdPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcih7IHdpdGhvdXRTZWFyY2gsIHVzZXIsIGF1dGh9KSB7XHJcbiAgY29uc3QgW3ByZXZTY3JvbGxQb3MsIHNldFByZXZTY3JvbGxQb3NdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3NlYXJjaE1vZGFsLCBzZXRTZWFyY2hNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3NlYXJjaERhdGEsIHNldFNlYXJjaERhdGEgXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBpbnB1dEVsZW1lbnQgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGxldCB0aW1lID0gbnVsbDtcclxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBjdXJyZW50U2Nyb2xsUG9zID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgICAvLyBjb25zdCB2aXNpYmxlID0gcHJldlNjcm9sbFBvcyA+IGN1cnJlbnRTY3JvbGxQb3M7XHJcbiAgICAgIGlmKHRpbWUpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGltZSk7ICBcclxuICAgICAgfVxyXG4gICAgICB0aW1lID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGltZSA9IG51bGw7XHJcbiAgICAgICAgc2V0VmlzaWJsZSh0cnVlKVxyXG4gICAgICB9LCA1MDApXHJcbiAgICAgIGlmKHZpc2libGUpIHtcclxuICAgICAgICBzZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgICAvLyBzZXRQcmV2U2Nyb2xsUG9zKGN1cnJlbnRTY3JvbGxQb3MpO1xyXG4gICAgICAvLyBzZXRWaXNpYmxlKHZpc2libGUpO1xyXG4gICAgICAvLyB0aW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHsgY29uc29sZS5sb2codGltZXIpfSwgNTAwKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgLy8gY2F0Y2ggd2luZGlvdyA9PT0gdW5kZWZpbmVkIGVycm9yXHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBzZWFyY2hDaGFuZ2UgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybDogJy9zZWFyY2gnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIFwicXVlcnlcIjogZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgXCJvZmZzZXRcIjogMCxcclxuICAgICAgICAgIFwiZmlyc3RcIjogMTBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgeyBzdGF0dXMsIGRhdGEgfSA9IHJlcXVlc3Q7Y29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIGlmKHN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICBzZXRTZWFyY2hEYXRhKGRhdGEpO1xyXG4gICAgICB9IGVsc2UgIHtcclxuICAgICAgICAgIG1lc3NhZ2UuZXJyb3IoJ1BsZWFzZSB0cnkgYWdhaW4hJyk7XHJcbiAgICAgICAgICBzZXRTZWFyY2hEYXRhKGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBuYXZpZ2F0ZVVzZXJQcm9maWxlID0gKHBhcmFtKSA9PiB7XHJcbiAgICAvLyByb3V0ZXIucHVzaCh7XHJcbiAgICAvLyAgIHBhdGhuYW1lOiBgL3Byb2ZpbGVzL2AsXHJcbiAgICAvLyAgIHNsdWc6IFtwYXJhbV0sXHJcbiAgICAvLyB9KVxyXG4gICAgd2luZG93LmxvY2F0aW9uID0gJy9wcm9maWxlcy8nK3BhcmFtO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY29udGVudFN0eWxlID0ge1xyXG4gICAgaGVpZ2h0OiAnMTYwcHgnLFxyXG4gICAgY29sb3I6ICcjZmZmJyxcclxuICAgIGxpbmVIZWlnaHQ6ICcxNjBweCcsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgYmFja2dyb3VuZDogJyMzNjRkNzknLFxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaW5wdXRFbGVtZW50LmN1cnJlbnQpIHtcclxuICAgICAgaW5wdXRFbGVtZW50LmN1cnJlbnQuZm9jdXMoKTtcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBfLnRocm90dGxlKGhhbmRsZVNjcm9sbCwgMjUwKSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAvLyBjYXRjaCB3aW5kaW93ID09PSB1bmRlZmluZWQgZXJyb3JcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgLy8gdW5tb3VudCBhY3Rpb25cclxuICAgICAgdHJ5IHtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAvLyBjYXRjaCB3aW5kaW93ID09PSB1bmRlZmluZWQgZXJyb3JcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfSwgW3ByZXZTY3JvbGxQb3NdKTtcclxuXHJcbiAgdmFyIHNldHRpbmdzID0ge1xyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgc3BlZWQ6IDUwMCxcclxuICAgIHNsaWRlc1RvU2hvdzogNSxcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmhlYWRlciwge1xyXG4gICAgICAgICAgW3N0eWxlcy5oZWFkZXJfaGlkZGVuXTogIXZpc2libGUsXHJcbiAgICAgICAgfSl9XHJcbiAgICAgID5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ299PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9sb2dvLnBuZ1wiIGFsdD1cImxvZ29cIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaH0+XHJcbiAgICAgICAgICAgIHshd2l0aG91dFNlYXJjaCAmJiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggRnJlZXNraWVzXCIgb25DbGljaz17KCk9Pnsgc2V0U2VhcmNoTW9kYWwodHJ1ZSk7IGlmKGlucHV0RWxlbWVudC5jdXJyZW50KSB7aW5wdXRFbGVtZW50LmN1cnJlbnQuZm9jdXMoKTt9fX0vPlxyXG4gICAgICAgICAgICAgICAgPFVzZXJQcm9maWxlIHVzZXI9e3VzZXJ9Lz5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlTWVudX0+XHJcbiAgICAgICAgICAgIDxVc2VyUHJvZmlsZSB1c2VyPXt1c2VyfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9eydHcm91cHMnfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51SWNvbn0gc3R5bGU9e3sgcGFkZGluZ1RvcDogMTIgfX0+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZ3JvdXBzX2ljb24ucG5nXCIgYWx0PVwibG9nb1wiIHN0eWxlPXt7IGhlaWdodDogMjIgfX0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPXsnTWFya2V0cGxhY2UnfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51SWNvbn0gc3R5bGU9e3sgcGFkZGluZ1RvcDogMTUgfX0+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvbWFya2V0cGxhY2VfaWNvbi5wbmdcIiBhbHQ9XCJsb2dvXCIgc3R5bGU9e3sgd2lkdGg6IDIxIH19Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17J1RpbWVsaW5lJ30+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudUljb259IG9uQ2xpY2s9eygpID0+IHsgcm91dGVyLnB1c2goJy90aW1lbGluZScpfX0+XHJcbiAgICAgICAgICAgICAgPEhvbWVPdXRsaW5lZCBzdHlsZT17eyBmb250U2l6ZTogMjAgfX0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPXsnTm90aWZpY2F0aW9ucyd9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnVJY29ufT5cclxuICAgICAgICAgICAgICA8QmVsbE91dGxpbmVkIHN0eWxlPXt7IGZvbnRTaXplOiAyMCB9fS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9eydTZXR0aW5ncyd9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnVJY29ufSA+XHJcbiAgICAgICAgICAgICAgPFNldHRpbmdPdXRsaW5lZCBzdHlsZT17eyBmb250U2l6ZTogMjAgfX0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRkaXRpb25hbF9oZWFkZXJ9IC8+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLm1vYmlsZV9wcm9maWxlX2hlYWRlciwge1xyXG4gICAgICAgICAgW3N0eWxlcy5oZWFkZXJfaGlkZGVuXTogIXZpc2libGUsXHJcbiAgICAgICAgfSl9XHJcbiAgICAgID5cclxuICAgICAgICA8Q2Fyb3VzZWwgYWZ0ZXJDaGFuZ2U9eygpID0+IHtjb25zb2xlLmxvZygnZGZkZmRzYScpfX0gcm93cz17NH0gYXV0b3BsYXk+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcmR9IHN0eWxlPXtjb250ZW50U3R5bGV9PlxyXG4gICAgICAgICAgICB7LyogPEhvbWVPdXRsaW5lZCBzdHlsZT17eyBmb250U2l6ZTogMTggfX0gb25DbGljaz17KCkgPT4geyByb3V0ZXIucHVzaCgnL3RpbWVsaW5lJyl9fS8+ICovfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcmR9IHN0eWxlPXtjb250ZW50U3R5bGV9PlxyXG4gICAgICAgICAgICB7LyogPEZvbnRBd2Vzb21lSWNvbiBzdHlsZT17eyBtYXJnaW5Ub3A6IDh9fSBpY29uPXtbJ2ZhcicsICdhZGRyZXNzLWNhcmQnXX0gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnL3Byb2ZpbGUnKTtcclxuICAgICAgICAgIH19Lz4gKi99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyZH0gc3R5bGU9e2NvbnRlbnRTdHlsZX0+XHJcbiAgICAgICAgICAgIHsvKiA8Rm9udEF3ZXNvbWVJY29uIHN0eWxlPXt7IG1hcmdpblRvcDogOH19IGljb249e1snZmFyJywgJ3VzZXItY2lyY2xlJ119IFxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgcm91dGVyLnB1c2goJy9mcmllbmQnKTsgfX0vPiAqL31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJkfSBzdHlsZT17Y29udGVudFN0eWxlfT5cclxuICAgICAgICAgICAgey8qIDxCZWxsT3V0bGluZWQgc3R5bGU9e3sgZm9udFNpemU6IDE4IH19Lz4gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMubW9iaWxlX3RvcF9oZWFkZXIsIHtcclxuICAgICAgICAgIFtzdHlsZXMuaGVhZGVyX2hpZGRlbl06ICF2aXNpYmxlLFxyXG4gICAgICAgIH0pfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvbG9nby5wbmdcIiBhbHQ9XCJsb2dvXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2h9PlxyXG4gICAgICAgICAgICB7IXdpdGhvdXRTZWFyY2ggJiYgKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIEZyZWVza2llc1wiIG9uQ2xpY2s9eygpPT57IHNldFNlYXJjaE1vZGFsKHRydWUpOyBpZihpbnB1dEVsZW1lbnQuY3VycmVudCl7aW5wdXRFbGVtZW50LmN1cnJlbnQuZm9jdXMoKTt9fX0gLz5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3NlYXJjaE1vZGFsPzxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoTW9kYWx9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoSGVhZGVyfT5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAnaGFuZC1wb2ludC1sZWZ0J119IHN0eWxlPXt7IGZvbnRTaXplOiAyNSwgbWFyZ2luVG9wOiA4LCBmbGV4OiAxLCBjdXJzb3I6ICdwb2ludGVyJ319IG9uQ2xpY2s9eygpPT5zZXRTZWFyY2hNb2RhbChmYWxzZSl9Lz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCAgbmFtZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIEZyZWVza2llc1wiIG9uQ2hhbmdlPXtzZWFyY2hDaGFuZ2V9IGF1dG9Gb2N1cz17dHJ1ZX0gcmVmPXtpbnB1dEVsZW1lbnR9IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hDb250ZW50fT5cclxuICAgICAgICAgICAgICAgIHtzZWFyY2hEYXRhLmxlbmd0aCA+IDA/c2VhcmNoRGF0YS5tYXAoKGl0ZW0sIGluZGV4ICk9PiB7IFxyXG4gICAgICAgICAgICAgICAgaWYoaXRlbS50eXBlID09ICdBY2NvdW50Jykge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlVXNlclByb2ZpbGUoYCR7aXRlbS51c2VybmFtZX1gKSB9IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaEl0ZW19IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17NTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybD17aXRlbT8ucHJvZmlsZVBob3RvPy5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcl9pbmZvfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfbmFtZX0+e2l0ZW0udXNlcm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbS50eXBlID09ICdQb3N0Jykge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgIGtleT17J3Bvc3QnK2luZGV4fSBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hJdGVtfSBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZVVzZXJQcm9maWxlKGAke2l0ZW0uYWNjb3VudC51c2VybmFtZX1gKSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17NTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsPXtpdGVtLmFjY291bnQ/LnByb2ZpbGVQaG90bz8uc3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfaW5mb30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfcG9zdH0+e2l0ZW0udGV4dH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTo8ZGl2Pk5vIGRhdGE8L2Rpdj59XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PjpudWxsfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gVXNlclByb2ZpbGUoeyB1c2VyID0ge30gfSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGV9XHJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICByb3V0ZXIucHVzaCgnL3Byb2ZpbGUnKTtcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9PlxyXG4gICAgICAgIHsgdXNlcj8ucHJvZmlsZVBob3RvID8gKFxyXG4gICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgc2l6ZT17NDB9XHJcbiAgICAgICAgICAgICAgdXJsPXt1c2VyPy5wcm9maWxlUGhvdG8uc3JjfVxyXG4gICAgICAgICAgICAgIHRleHQ9e3VzZXI/LnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxBdmF0YXIgc2l6ZT17NDB9IHRleHQ9e3VzZXI/LmZpcnN0TmFtZX0gLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubmFtZX0+e2Ake3VzZXI/LmZpcnN0TmFtZX1gfTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdG9yZSkgPT4gKHtcclxuICB1c2VyOiBzdG9yZS5hdXRoLnVzZXIsXHJcbiAgYXV0aDogc3RvcmUuYXV0aFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShIZWFkZXIpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9