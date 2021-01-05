webpackHotUpdate_N_E("pages/profile",{

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
    color: 'white',
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
      lineNumber: 117,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.logo,
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
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.search,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
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
      lineNumber: 130,
      columnNumber: 17
    }
  }), __jsx(UserProfile, {
    user: user,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.profileMenu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 11
    }
  }, __jsx(UserProfile, {
    user: user,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Tooltip"], {
    placement: "bottom",
    title: 'Groups',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
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
      lineNumber: 140,
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
      lineNumber: 141,
      columnNumber: 15
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Tooltip"], {
    placement: "bottom",
    title: 'Marketplace',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.menuIcon,
    style: {
      paddingTop: 15
    },
    onClick: function onClick() {
      return router.push('/marketplace');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
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
      lineNumber: 146,
      columnNumber: 15
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Tooltip"], {
    placement: "bottom",
    title: 'Timeline',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
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
      lineNumber: 150,
      columnNumber: 13
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_14__["HomeOutlined"], {
    style: {
      fontSize: 20
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 15
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Tooltip"], {
    placement: "bottom",
    title: 'Notifications',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.menuIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Badge"], {
    count: 5,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 15
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_14__["BellOutlined"], {
    style: {
      fontSize: 20
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 17
    }
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Tooltip"], {
    placement: "bottom",
    title: 'Settings',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.menuIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 13
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_14__["SettingOutlined"], {
    style: {
      fontSize: 20
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 15
    }
  }))))), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.mobile_profile_header, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.header_hidden, !visible)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Carousel"], {
    afterChange: function afterChange() {
      console.log('dfdfdsa');
    },
    touchMove: true,
    dots: false,
    swipeToSlide: true,
    slidesToShow: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Tooltip"], {
    placement: "bottom",
    title: 'Timeline',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Mobile_menuIcon,
    style: {
      paddingTop: 16
    },
    onClick: function onClick() {
      router.push('/timeline');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 13
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_14__["HomeOutlined"], {
    style: {
      fontSize: 20
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 15
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Tooltip"], {
    placement: "bottom",
    title: 'Profile',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Mobile_menuIcon,
    style: {
      paddingTop: 20
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 11
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
    style: {
      fontSize: 20
    },
    icon: ['far', 'address-card'],
    onClick: function onClick() {
      router.push('/profile');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 13
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Tooltip"], {
    placement: "bottom",
    title: 'Notifications',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Mobile_menuIcon,
    style: {
      paddingTop: 15
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Badge"], {
    count: 5,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 15
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_14__["BellOutlined"], {
    style: {
      fontSize: 20
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 17
    }
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Tooltip"], {
    placement: "bottom",
    title: 'Settings',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Mobile_menuIcon,
    style: {
      paddingTop: 15
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 13
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_14__["SettingOutlined"], {
    style: {
      fontSize: 20
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 15
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Tooltip"], {
    placement: "bottom",
    title: 'Groups',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Mobile_menuIcon,
    style: {
      paddingTop: 17
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
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
      lineNumber: 207,
      columnNumber: 15
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Tooltip"], {
    placement: "bottom",
    title: 'Marketplace',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Mobile_menuIcon,
    style: {
      paddingTop: 17
    },
    onClick: function onClick() {
      return router.push('/marketplace');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
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
      lineNumber: 212,
      columnNumber: 15
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Tooltip"], {
    placement: "bottom",
    title: 'Friend',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Mobile_menuIcon,
    style: {
      paddingTop: 20
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 11
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
    style: {
      fontSize: 20
    },
    icon: ['far', 'user-circle'],
    onClick: function onClick() {
      router.push('/friend');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 13
    }
  }))))), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.mobile_top_header, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.header_hidden, !visible)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.logo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/logo.png",
    alt: "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.search,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
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
      lineNumber: 237,
      columnNumber: 17
    }
  }))))), searchModal ? __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.searchModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 20
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.searchHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
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
      lineNumber: 246,
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
      lineNumber: 247,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.searchContent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
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
          lineNumber: 253,
          columnNumber: 19
        }
      }, __jsx("div", {
        className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.avatar,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 21
        }
      }, __jsx(_common_Avatar__WEBPACK_IMPORTED_MODULE_9__["default"], {
        size: 50,
        url: item === null || item === void 0 ? void 0 : (_item$profilePhoto = item.profilePhoto) === null || _item$profilePhoto === void 0 ? void 0 : _item$profilePhoto.src,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 23
        }
      })), __jsx("div", {
        className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.user_info,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260,
          columnNumber: 21
        }
      }, __jsx("p", {
        className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.user_name,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261,
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
          lineNumber: 267,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.avatar,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268,
          columnNumber: 23
        }
      }, __jsx(_common_Avatar__WEBPACK_IMPORTED_MODULE_9__["default"], {
        size: 50,
        url: (_item$account = item.account) === null || _item$account === void 0 ? void 0 : (_item$account$profile = _item$account.profilePhoto) === null || _item$account$profile === void 0 ? void 0 : _item$account$profile.src,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 25
        }
      })), __jsx("div", {
        className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.user_info,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274,
          columnNumber: 23
        }
      }, __jsx("p", {
        className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.user_post,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275,
          columnNumber: 25
        }
      }, item.text)));
    }
  }) : __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
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
      lineNumber: 290,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 7
    }
  }, user !== null && user !== void 0 && user.profilePhoto ? __jsx(_common_Avatar__WEBPACK_IMPORTED_MODULE_9__["default"], {
    size: 40,
    url: user === null || user === void 0 ? void 0 : user.profilePhoto.src,
    text: user === null || user === void 0 ? void 0 : user.username,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 13
    }
  }) : __jsx(_common_Avatar__WEBPACK_IMPORTED_MODULE_9__["default"], {
    size: 40,
    text: user === null || user === void 0 ? void 0 : user.firstName,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 11
    }
  })), __jsx("span", {
    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsIndpdGhvdXRTZWFyY2giLCJ1c2VyIiwiYXV0aCIsInVzZVN0YXRlIiwicHJldlNjcm9sbFBvcyIsInNldFByZXZTY3JvbGxQb3MiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInNlYXJjaE1vZGFsIiwic2V0U2VhcmNoTW9kYWwiLCJzZWFyY2hEYXRhIiwic2V0U2VhcmNoRGF0YSIsImlucHV0RWxlbWVudCIsInVzZVJlZiIsInRpbWUiLCJoYW5kbGVTY3JvbGwiLCJjdXJyZW50U2Nyb2xsUG9zIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwic2VhcmNoQ2hhbmdlIiwiZXZlbnQiLCJBUEkiLCJtZXRob2QiLCJ1cmwiLCJkYXRhIiwidGFyZ2V0IiwidmFsdWUiLCJoZWFkZXJzIiwidG9rZW4iLCJyZXF1ZXN0Iiwic3RhdHVzIiwibWVzc2FnZSIsIm5hdmlnYXRlVXNlclByb2ZpbGUiLCJwYXJhbSIsImxvY2F0aW9uIiwiY29udGVudFN0eWxlIiwiY29sb3IiLCJsaW5lSGVpZ2h0IiwidGV4dEFsaWduIiwiYmFja2dyb3VuZCIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJmb2N1cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJfIiwidGhyb3R0bGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0dGluZ3MiLCJkb3RzIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwicm91dGVyIiwidXNlUm91dGVyIiwiY2xhc3NuYW1lcyIsInN0eWxlcyIsImhlYWRlciIsImhlYWRlcl9oaWRkZW4iLCJjb250YWluZXIiLCJsb2dvIiwic2VhcmNoIiwicHJvZmlsZU1lbnUiLCJtZW51SWNvbiIsInBhZGRpbmdUb3AiLCJoZWlnaHQiLCJwdXNoIiwid2lkdGgiLCJmb250U2l6ZSIsIm1vYmlsZV9wcm9maWxlX2hlYWRlciIsIk1vYmlsZV9tZW51SWNvbiIsIm1vYmlsZV90b3BfaGVhZGVyIiwic2VhcmNoSGVhZGVyIiwibWFyZ2luVG9wIiwiZmxleCIsImN1cnNvciIsInNlYXJjaENvbnRlbnQiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJ0eXBlIiwidXNlcm5hbWUiLCJzZWFyY2hJdGVtIiwiYXZhdGFyIiwicHJvZmlsZVBob3RvIiwic3JjIiwidXNlcl9pbmZvIiwidXNlcl9uYW1lIiwiYWNjb3VudCIsInVzZXJfcG9zdCIsInRleHQiLCJVc2VyUHJvZmlsZSIsInByb2ZpbGUiLCJmaXJzdE5hbWUiLCJuYW1lIiwibWFwU3RhdGVUb1Byb3BzIiwic3RvcmUiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsT0FBOEM7QUFBQTs7QUFBQTs7QUFBQSxNQUE1QkMsYUFBNEIsUUFBNUJBLGFBQTRCO0FBQUEsTUFBYkMsSUFBYSxRQUFiQSxJQUFhO0FBQUEsTUFBUEMsSUFBTyxRQUFQQSxJQUFPOztBQUFBLGtCQUNGQyxzREFBUSxDQUFDLENBQUQsQ0FETjtBQUFBLE1BQ3JDQyxhQURxQztBQUFBLE1BQ3RCQyxnQkFEc0I7O0FBQUEsbUJBRWRGLHNEQUFRLENBQUMsSUFBRCxDQUZNO0FBQUEsTUFFckNHLE9BRnFDO0FBQUEsTUFFNUJDLFVBRjRCOztBQUFBLG1CQUdOSixzREFBUSxDQUFDLEtBQUQsQ0FIRjtBQUFBLE1BR3JDSyxXQUhxQztBQUFBLE1BR3hCQyxjQUh3Qjs7QUFBQSxtQkFJUE4sc0RBQVEsQ0FBQyxFQUFELENBSkQ7QUFBQSxNQUlyQ08sVUFKcUM7QUFBQSxNQUl6QkMsYUFKeUI7O0FBSzVDLE1B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LGFBQWtDQSxJQUFsQyx1QkFBa0NBLElBQUksQ0FBRWtHLFNBQXhDLEVBakJGLENBREY7QUFxQkQ7O0lBdkJRRixXO1VBQ1F0QyxxRDs7O01BRFJzQyxXOztBQXlCVCxJQUFNSSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ2xDckcsUUFBSSxFQUFFcUcsS0FBSyxDQUFDcEcsSUFBTixDQUFXRCxJQURpQjtBQUVsQ0MsUUFBSSxFQUFFb0csS0FBSyxDQUFDcEc7QUFGc0IsR0FBWjtBQUFBLENBQXhCOztBQUtlcUcsMEhBQU8sQ0FBQ0YsZUFBRCxDQUFQLENBQXlCdEcsTUFBekIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLjk0ZTIxZTk3NTQxODMxYWQxMzI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL2hlYWRlci5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IEF2YXRhciBmcm9tICcuLi9jb21tb24vQXZhdGFyJztcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IEFQSSBmcm9tICcuLi8uLi9jb25maWdzL0FQSSc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgVXBsb2FkLCBtZXNzYWdlLCBJbnB1dCwgVGFicywgUmF0ZSwgVG9vbHRpcCwgQ2Fyb3VzZWwsIEJhZGdlIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IENhbWVyYU91dGxpbmVkLCAgSG9tZU91dGxpbmVkLCBCZWxsT3V0bGluZWQsIFNldHRpbmdPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcih7IHdpdGhvdXRTZWFyY2gsIHVzZXIsIGF1dGh9KSB7XHJcbiAgY29uc3QgW3ByZXZTY3JvbGxQb3MsIHNldFByZXZTY3JvbGxQb3NdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3NlYXJjaE1vZGFsLCBzZXRTZWFyY2hNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3NlYXJjaERhdGEsIHNldFNlYXJjaERhdGEgXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBpbnB1dEVsZW1lbnQgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGxldCB0aW1lID0gbnVsbDtcclxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBjdXJyZW50U2Nyb2xsUG9zID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgICAvLyBjb25zdCB2aXNpYmxlID0gcHJldlNjcm9sbFBvcyA+IGN1cnJlbnRTY3JvbGxQb3M7XHJcbiAgICAgIGlmKHRpbWUpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGltZSk7ICBcclxuICAgICAgfVxyXG4gICAgICB0aW1lID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGltZSA9IG51bGw7XHJcbiAgICAgICAgc2V0VmlzaWJsZSh0cnVlKVxyXG4gICAgICB9LCA1MDApXHJcbiAgICAgIGlmKHZpc2libGUpIHtcclxuICAgICAgICBzZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgICAvLyBzZXRQcmV2U2Nyb2xsUG9zKGN1cnJlbnRTY3JvbGxQb3MpO1xyXG4gICAgICAvLyBzZXRWaXNpYmxlKHZpc2libGUpO1xyXG4gICAgICAvLyB0aW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHsgY29uc29sZS5sb2codGltZXIpfSwgNTAwKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgLy8gY2F0Y2ggd2luZGlvdyA9PT0gdW5kZWZpbmVkIGVycm9yXHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBzZWFyY2hDaGFuZ2UgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybDogJy9zZWFyY2gnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIFwicXVlcnlcIjogZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgXCJvZmZzZXRcIjogMCxcclxuICAgICAgICAgIFwiZmlyc3RcIjogMTBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgeyBzdGF0dXMsIGRhdGEgfSA9IHJlcXVlc3Q7Y29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIGlmKHN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICBzZXRTZWFyY2hEYXRhKGRhdGEpO1xyXG4gICAgICB9IGVsc2UgIHtcclxuICAgICAgICAgIG1lc3NhZ2UuZXJyb3IoJ1BsZWFzZSB0cnkgYWdhaW4hJyk7XHJcbiAgICAgICAgICBzZXRTZWFyY2hEYXRhKGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBuYXZpZ2F0ZVVzZXJQcm9maWxlID0gKHBhcmFtKSA9PiB7XHJcbiAgICAvLyByb3V0ZXIucHVzaCh7XHJcbiAgICAvLyAgIHBhdGhuYW1lOiBgL3Byb2ZpbGVzL2AsXHJcbiAgICAvLyAgIHNsdWc6IFtwYXJhbV0sXHJcbiAgICAvLyB9KVxyXG4gICAgd2luZG93LmxvY2F0aW9uID0gJy9wcm9maWxlcy8nK3BhcmFtO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY29udGVudFN0eWxlID0ge1xyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBsaW5lSGVpZ2h0OiAnMTYwcHgnLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIGJhY2tncm91bmQ6ICcjMzY0ZDc5JyxcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGlucHV0RWxlbWVudC5jdXJyZW50KSB7XHJcbiAgICAgIGlucHV0RWxlbWVudC5jdXJyZW50LmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgXy50aHJvdHRsZShoYW5kbGVTY3JvbGwsIDI1MCkpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgLy8gY2F0Y2ggd2luZGlvdyA9PT0gdW5kZWZpbmVkIGVycm9yXHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIC8vIHVubW91bnQgYWN0aW9uXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgLy8gY2F0Y2ggd2luZGlvdyA9PT0gdW5kZWZpbmVkIGVycm9yXHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH0sIFtwcmV2U2Nyb2xsUG9zXSk7XHJcblxyXG4gIHZhciBzZXR0aW5ncyA9IHtcclxuICAgIGRvdHM6IHRydWUsXHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIHNwZWVkOiA1MDAsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDUsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5oZWFkZXIsIHtcclxuICAgICAgICAgIFtzdHlsZXMuaGVhZGVyX2hpZGRlbl06ICF2aXNpYmxlLFxyXG4gICAgICAgIH0pfVxyXG4gICAgICA+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvbG9nby5wbmdcIiBhbHQ9XCJsb2dvXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2h9PlxyXG4gICAgICAgICAgICB7IXdpdGhvdXRTZWFyY2ggJiYgKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIEZyZWVza2llc1wiIG9uQ2xpY2s9eygpPT57IHNldFNlYXJjaE1vZGFsKHRydWUpOyBpZihpbnB1dEVsZW1lbnQuY3VycmVudCkge2lucHV0RWxlbWVudC5jdXJyZW50LmZvY3VzKCk7fX19Lz5cclxuICAgICAgICAgICAgICAgIDxVc2VyUHJvZmlsZSB1c2VyPXt1c2VyfS8+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZU1lbnV9PlxyXG4gICAgICAgICAgICA8VXNlclByb2ZpbGUgdXNlcj17dXNlcn0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPXsnR3JvdXBzJ30+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudUljb259IHN0eWxlPXt7IHBhZGRpbmdUb3A6IDEyIH19PlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2dyb3Vwc19pY29uLnBuZ1wiIGFsdD1cImxvZ29cIiBzdHlsZT17eyBoZWlnaHQ6IDIyIH19Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17J01hcmtldHBsYWNlJ30+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudUljb259IHN0eWxlPXt7IHBhZGRpbmdUb3A6IDE1IH19IG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvbWFya2V0cGxhY2UnKX0+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvbWFya2V0cGxhY2VfaWNvbi5wbmdcIiBhbHQ9XCJsb2dvXCIgc3R5bGU9e3sgd2lkdGg6IDIxIH19Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17J1RpbWVsaW5lJ30+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudUljb259IG9uQ2xpY2s9eygpID0+IHsgcm91dGVyLnB1c2goJy90aW1lbGluZScpfX0+XHJcbiAgICAgICAgICAgICAgPEhvbWVPdXRsaW5lZCBzdHlsZT17eyBmb250U2l6ZTogMjAgfX0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPXsnTm90aWZpY2F0aW9ucyd9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnVJY29ufT5cclxuICAgICAgICAgICAgICA8QmFkZ2UgY291bnQ9ezV9PlxyXG4gICAgICAgICAgICAgICAgPEJlbGxPdXRsaW5lZCBzdHlsZT17eyBmb250U2l6ZTogMjAgfX0vPlxyXG4gICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9eydTZXR0aW5ncyd9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnVJY29ufSA+XHJcbiAgICAgICAgICAgICAgPFNldHRpbmdPdXRsaW5lZCBzdHlsZT17eyBmb250U2l6ZTogMjAgfX0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZGl0aW9uYWxfaGVhZGVyfSAvPiAqL31cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMubW9iaWxlX3Byb2ZpbGVfaGVhZGVyLCB7XHJcbiAgICAgICAgICBbc3R5bGVzLmhlYWRlcl9oaWRkZW5dOiAhdmlzaWJsZSxcclxuICAgICAgICB9KX1cclxuICAgICAgPlxyXG4gICAgICAgIDxDYXJvdXNlbCBhZnRlckNoYW5nZT17KCkgPT4ge2NvbnNvbGUubG9nKCdkZmRmZHNhJyl9fSBcclxuICAgICAgICAgIHRvdWNoTW92ZT17dHJ1ZX1cclxuICAgICAgICAgIGRvdHM9e2ZhbHNlfVxyXG4gICAgICAgICAgc3dpcGVUb1NsaWRlPXt0cnVlfSAgXHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c9ezR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9eydUaW1lbGluZSd9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk1vYmlsZV9tZW51SWNvbn0gc3R5bGU9e3sgcGFkZGluZ1RvcDogMTZ9fSBvbkNsaWNrPXsoKSA9PiB7IHJvdXRlci5wdXNoKCcvdGltZWxpbmUnKX19PlxyXG4gICAgICAgICAgICAgIDxIb21lT3V0bGluZWQgc3R5bGU9e3sgZm9udFNpemU6IDIwIH19Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17J1Byb2ZpbGUnfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTW9iaWxlX21lbnVJY29ufSBzdHlsZT17eyBwYWRkaW5nVG9wOiAyMH19PlxyXG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHN0eWxlPXt7ICBmb250U2l6ZTogMjAgfX0gaWNvbj17WydmYXInLCAnYWRkcmVzcy1jYXJkJ119IG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy9wcm9maWxlJyk7XHJcbiAgICAgICAgICB9fS8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPXsnTm90aWZpY2F0aW9ucyd9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk1vYmlsZV9tZW51SWNvbn0gc3R5bGU9e3sgcGFkZGluZ1RvcDogMTV9fT5cclxuICAgICAgICAgICAgICA8QmFkZ2UgY291bnQ9ezV9PlxyXG4gICAgICAgICAgICAgICAgPEJlbGxPdXRsaW5lZCBzdHlsZT17eyBmb250U2l6ZTogMjAgfX0vPlxyXG4gICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9eydTZXR0aW5ncyd9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk1vYmlsZV9tZW51SWNvbn0gc3R5bGU9e3sgcGFkZGluZ1RvcDogMTV9fT5cclxuICAgICAgICAgICAgICA8U2V0dGluZ091dGxpbmVkIHN0eWxlPXt7IGZvbnRTaXplOiAyMCB9fS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9eydHcm91cHMnfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Nb2JpbGVfbWVudUljb259IHN0eWxlPXt7IHBhZGRpbmdUb3A6IDE3IH19PlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2dyb3Vwc19pY29uLnBuZ1wiIGFsdD1cImxvZ29cIiBzdHlsZT17eyBoZWlnaHQ6IDIyIH19Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17J01hcmtldHBsYWNlJ30+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTW9iaWxlX21lbnVJY29ufSBzdHlsZT17eyBwYWRkaW5nVG9wOiAxNyB9fSBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL21hcmtldHBsYWNlJyl9PlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL21hcmtldHBsYWNlX2ljb24ucG5nXCIgYWx0PVwibG9nb1wiIHN0eWxlPXt7IHdpZHRoOiAyMSB9fS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICBcclxuICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPXsnRnJpZW5kJ30+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk1vYmlsZV9tZW51SWNvbn0gIHN0eWxlPXt7IHBhZGRpbmdUb3A6IDIwfX0+XHJcbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc3R5bGU9e3sgZm9udFNpemU6IDIwIH19IGljb249e1snZmFyJywgJ3VzZXItY2lyY2xlJ119IFxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgcm91dGVyLnB1c2goJy9mcmllbmQnKTsgfX0vPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICBcclxuICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5tb2JpbGVfdG9wX2hlYWRlciwge1xyXG4gICAgICAgICAgW3N0eWxlcy5oZWFkZXJfaGlkZGVuXTogIXZpc2libGUsXHJcbiAgICAgICAgfSl9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ299PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9sb2dvLnBuZ1wiIGFsdD1cImxvZ29cIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaH0+XHJcbiAgICAgICAgICAgIHshd2l0aG91dFNlYXJjaCAmJiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggRnJlZXNraWVzXCIgb25DbGljaz17KCk9Pnsgc2V0U2VhcmNoTW9kYWwodHJ1ZSk7IGlmKGlucHV0RWxlbWVudC5jdXJyZW50KXtpbnB1dEVsZW1lbnQuY3VycmVudC5mb2N1cygpO319fSAvPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7c2VhcmNoTW9kYWw/PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hNb2RhbH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hIZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdoYW5kLXBvaW50LWxlZnQnXX0gc3R5bGU9e3sgZm9udFNpemU6IDI1LCBtYXJnaW5Ub3A6IDgsIGZsZXg6IDEsIGN1cnNvcjogJ3BvaW50ZXInfX0gb25DbGljaz17KCk9PnNldFNlYXJjaE1vZGFsKGZhbHNlKX0vPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0ICBuYW1lPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggRnJlZXNraWVzXCIgb25DaGFuZ2U9e3NlYXJjaENoYW5nZX0gYXV0b0ZvY3VzPXt0cnVlfSByZWY9e2lucHV0RWxlbWVudH0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAge3NlYXJjaERhdGEubGVuZ3RoID4gMD9zZWFyY2hEYXRhLm1hcCgoaXRlbSwgaW5kZXggKT0+IHsgXHJcbiAgICAgICAgICAgICAgICBpZihpdGVtLnR5cGUgPT0gJ0FjY291bnQnKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gbmF2aWdhdGVVc2VyUHJvZmlsZShgJHtpdGVtLnVzZXJuYW1lfWApIH0gY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoSXRlbX0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPXs1MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsPXtpdGVtPy5wcm9maWxlUGhvdG8/LnNyY31cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyX2luZm99PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudXNlcl9uYW1lfT57aXRlbS51c2VybmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLnR5cGUgPT0gJ1Bvc3QnKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiAga2V5PXsncG9zdCcraW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaEl0ZW19IG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlVXNlclByb2ZpbGUoYCR7aXRlbS5hY2NvdW50LnVzZXJuYW1lfWApIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXs1MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw9e2l0ZW0uYWNjb3VudD8ucHJvZmlsZVBob3RvPy5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcl9pbmZvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudXNlcl9wb3N0fT57aXRlbS50ZXh0fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pOjxkaXY+Tm8gZGF0YTwvZGl2Pn1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+Om51bGx9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBVc2VyUHJvZmlsZSh7IHVzZXIgPSB7fSB9KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZX1cclxuICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvcHJvZmlsZScpO1xyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn0+XHJcbiAgICAgICAgeyB1c2VyPy5wcm9maWxlUGhvdG8gPyAoXHJcbiAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICBzaXplPXs0MH1cclxuICAgICAgICAgICAgICB1cmw9e3VzZXI/LnByb2ZpbGVQaG90by5zcmN9XHJcbiAgICAgICAgICAgICAgdGV4dD17dXNlcj8udXNlcm5hbWV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgPEF2YXRhciBzaXplPXs0MH0gdGV4dD17dXNlcj8uZmlyc3ROYW1lfSAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT57YCR7dXNlcj8uZmlyc3ROYW1lfWB9PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0b3JlKSA9PiAoe1xyXG4gIHVzZXI6IHN0b3JlLmF1dGgudXNlcixcclxuICBhdXRoOiBzdG9yZS5hdXRoXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEhlYWRlcik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=