webpackHotUpdate_N_E("pages/timeline",{

/***/ "./components/profile/PhotosModal.js":
/*!*******************************************!*\
  !*** ./components/profile/PhotosModal.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PhotosModal; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-alice-carousel */ "./node_modules/react-alice-carousel/lib/react-alice-carousel.js");
/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_alice_carousel__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/photos_modal.module.scss */ "./components/profile/styles/photos_modal.module.scss");
/* harmony import */ var _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var components_common_PhotoModalWrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/common/PhotoModalWrapper */ "./components/common/PhotoModalWrapper.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var components_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/forms */ "./components/forms/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var configs_API__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! configs/API */ "./configs/API.js");
/* harmony import */ var _timeline_Comments__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../timeline/Comments */ "./components/timeline/Comments.js");
/* harmony import */ var components_common_Avatar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/common/Avatar */ "./components/common/Avatar.js");
/* harmony import */ var components_timeline_Actions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! components/timeline/Actions */ "./components/timeline/Actions.js");
/* harmony import */ var containers_Photos_storage_PhotoContext__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! containers/Photos/storage/PhotoContext */ "./containers/Photos/storage/PhotoContext.js");
/* harmony import */ var containers_Photos_actions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! containers/Photos/actions */ "./containers/Photos/actions/index.js");
/* harmony import */ var components_common_LoadingWrapper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! components/common/LoadingWrapper */ "./components/common/LoadingWrapper.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");







var _jsxFileName = "D:\\Freeskies-development-\\components\\profile\\PhotosModal.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var TextArea = antd__WEBPACK_IMPORTED_MODULE_13__["Input"].TextArea;








function PhotosModal(_ref) {
  _s();

  var _storage$photoData,
      _storage$photoData2,
      _storage$photoData3,
      _storage$photoData4,
      _storage$photoData5,
      _storage$photoData6,
      _storage$photoData7,
      _data$sliderIndex,
      _this = this,
      _auth$user,
      _auth$user2,
      _auth$user3,
      _auth$user4,
      _auth$user5;

  var data = _ref.data,
      onRatePost = _ref.onRatePost,
      photoIndex = _ref.photoIndex,
      _likeAction = _ref.likeAction,
      _shareAction = _ref.shareAction,
      auth = _ref.auth,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__["default"])(_ref, ["data", "onRatePost", "photoIndex", "likeAction", "shareAction", "auth"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(0),
      sliderIndex = _useState[0],
      setSliderIndex = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_6__["useContext"])(containers_Photos_storage_PhotoContext__WEBPACK_IMPORTED_MODULE_18__["PhotosContext"]),
      storage = _useContext[0],
      dispatch = _useContext[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      modalMode = _useState2[0],
      setModalMode = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(null),
      activePostId = _useState3[0],
      setActivePostId = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(0),
      setTimestamp = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    getPhoto(sliderIndex);
  }, []);

  var getPhoto = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee(i) {
      var request, status;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(data.length == 0)) {
                _context.next = 3;
                break;
              }

              dispatch(Object(containers_Photos_actions__WEBPACK_IMPORTED_MODULE_19__["setLoading"])(true));
              return _context.abrupt("return");

            case 3:
              if (!(typeof data[i].id === 'undefined')) {
                _context.next = 6;
                break;
              }

              dispatch(Object(containers_Photos_actions__WEBPACK_IMPORTED_MODULE_19__["setLoading"])(true));
              return _context.abrupt("return");

            case 6:
              _context.prev = 6;
              dispatch(Object(containers_Photos_actions__WEBPACK_IMPORTED_MODULE_19__["setLoading"])(true));
              _context.next = 10;
              return Object(configs_API__WEBPACK_IMPORTED_MODULE_14__["default"])({
                method: 'post',
                url: '/photos/get',
                data: {
                  "id": data[i].id
                },
                headers: {
                  'x-token': auth.token
                }
              });

            case 10:
              request = _context.sent;
              status = request.status;

              if (status === 200) {
                dispatch(Object(containers_Photos_actions__WEBPACK_IMPORTED_MODULE_19__["setPhoto"])(request.data));
                dispatch(Object(containers_Photos_actions__WEBPACK_IMPORTED_MODULE_19__["setLoading"])(false));
              } else if (status === 403) {
                console.log('Please refresh token!');
              } else {}

              _context.next = 18;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](6);
              console.log(_context.t0);

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[6, 15]]);
    }));

    return function getPhoto(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleOnDragStart = function handleOnDragStart(e) {
    return e.preventDefault();
  };

  var slideNext = function slideNext() {
    return setSliderIndex(function (state) {
      if (data.length <= state + 1) {
        return state;
      } else {
        getPhoto(state + 1);
        return state + 1;
      }
    });
  };

  var slidePrev = function slidePrev() {
    return setSliderIndex(function (state) {
      if (state <= 0) {
        return 0;
      } else {
        getPhoto(state - 1);
        return state - 1;
      }
    });
  };

  var onSlideChanged = function onSlideChanged(e) {
    return setSliderIndex(e.item);
  };

  var handleRatePhoto = function handleRatePhoto(rate) {
    if (typeof data[sliderIndex].id === 'undefined') {
      return;
    }

    onRatePost('Photo', data[sliderIndex].id, rate);
  };

  var onUpdateTimeline = /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2(newComment) {
      var comments, addElement, lastPhoto;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              comments = storage.photoData.comments;
              addElement = _objectSpread({
                account: auth.user
              }, newComment.comments[0]);
              lastPhoto = _objectSpread(_objectSpread({}, storage.photoData), {}, {
                comments: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(comments), [addElement])
              });
              dispatch(Object(containers_Photos_actions__WEBPACK_IMPORTED_MODULE_19__["setPhoto"])(lastPhoto));

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function onUpdateTimeline(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  var handleShowCommentModal = function handleShowCommentModal(id) {
    setModalMode(!modalMode);
    setActivePostId(id);
  };

  var getLikeActionUserInfo = function getLikeActionUserInfo(data) {
    var finalData = '';
    data.map(function (item, index) {
      finalData = finalData + ' ' + item.account.firstName + '' + item.account.lastName;
    });
    return finalData;
  };

  var onLoad = function onLoad() {
    return setTimestamp(Date.now());
  };

  var roundRating = (_storage$photoData = storage.photoData) === null || _storage$photoData === void 0 ? void 0 : _storage$photoData.rating;
  var caption = (_storage$photoData2 = storage.photoData) === null || _storage$photoData2 === void 0 ? void 0 : _storage$photoData2.caption;
  var comments = (_storage$photoData3 = storage.photoData) === null || _storage$photoData3 === void 0 ? void 0 : _storage$photoData3.comments;
  var commentsCount = (_storage$photoData4 = storage.photoData) === null || _storage$photoData4 === void 0 ? void 0 : _storage$photoData4.commentsCount;
  var reactions = (_storage$photoData5 = storage.photoData) === null || _storage$photoData5 === void 0 ? void 0 : _storage$photoData5.reactions;
  var shares = (_storage$photoData6 = storage.photoData) === null || _storage$photoData6 === void 0 ? void 0 : _storage$photoData6.shares;
  var id = (_storage$photoData7 = storage.photoData) === null || _storage$photoData7 === void 0 ? void 0 : _storage$photoData7.id;
  var type = (_data$sliderIndex = data[sliderIndex]) === null || _data$sliderIndex === void 0 ? void 0 : _data$sliderIndex.type;
  var likeData = reactions ? reactions === null || reactions === void 0 ? void 0 : reactions.filter(function (item) {
    return item.reaction == 'LIKE';
  }) : [];
  var heartData = reactions ? reactions === null || reactions === void 0 ? void 0 : reactions.filter(function (item) {
    return item.reaction == 'HEART';
  }) : [];
  var wowData = reactions ? reactions === null || reactions === void 0 ? void 0 : reactions.filter(function (item) {
    return item.reaction == 'WOW';
  }) : [];
  var hahaData = reactions ? reactions === null || reactions === void 0 ? void 0 : reactions.filter(function (item) {
    return item.reaction == 'HAHA';
  }) : [];
  var sadData = reactions ? reactions === null || reactions === void 0 ? void 0 : reactions.filter(function (item) {
    return item.reaction == 'SAD';
  }) : [];
  return __jsx(components_common_PhotoModalWrapper__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, {
    profilePhoto: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.actions,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 9
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_11__["LeftOutlined"], {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.prev_action,
    onClick: function onClick() {
      return slidePrev();
    },
    style: {
      borderRadius: 25,
      background: 'black',
      padding: 8,
      opacity: 0.6,
      marginLeft: 15
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 11
    }
  }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_11__["RightOutlined"], {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.next_action,
    onClick: function onClick() {
      return slideNext();
    },
    style: {
      borderRadius: 25,
      background: 'black',
      padding: 8,
      opacity: 0.6,
      marginRight: 15
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 11
    }
  })), __jsx(react_alice_carousel__WEBPACK_IMPORTED_MODULE_8___default.a, {
    mouseTrackingEnabled: true,
    dotsDisabled: true,
    buttonsDisabled: true,
    slideToIndex: sliderIndex,
    onSlideChanged: onSlideChanged,
    infinite: false,
    activeIndex: 3 // autoHeight  
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 9
    }
  }, data.map(function (item, index) {
    return __jsx("div", {
      className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.photo_container,
      key: index,
      "data-value": index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.photo,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 15
      }
    }, __jsx(LazyLoader, {
      onLoad: onLoad,
      src: "https://www.freeskies.com/static/".concat((item === null || item === void 0 ? void 0 : item.blob_tn) !== null ? item === null || item === void 0 ? void 0 : item.blob_tn : item === null || item === void 0 ? void 0 : item.src),
      delay: 1000,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 15
      }
    }), ","));
  })), data.length !== 0 && __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.rating_wrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 11
    }
  }, __jsx(components_forms__WEBPACK_IMPORTED_MODULE_12__["RatingSlide"], {
    defaultRate: roundRating,
    withoutText: true,
    onChange: handleRatePhoto,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.commentReaction,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 8
    }
  }, __jsx(components_common_LoadingWrapper__WEBPACK_IMPORTED_MODULE_20__["default"], {
    loading: storage.loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.photo_header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 11
    }
  }, __jsx(components_common_Avatar__WEBPACK_IMPORTED_MODULE_16__["default"], {
    text: ((_auth$user = auth.user) === null || _auth$user === void 0 ? void 0 : _auth$user.firstName) + " " + ((_auth$user2 = auth.user) === null || _auth$user2 === void 0 ? void 0 : _auth$user2.lastName),
    url: "".concat(auth.user.profilePhoto.src),
    size: 60,
    borderSize: 3,
    username: (_auth$user3 = auth.user) === null || _auth$user3 === void 0 ? void 0 : _auth$user3.username,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.user_info,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.user_name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 13
    }
  }, ((_auth$user4 = auth.user) === null || _auth$user4 === void 0 ? void 0 : _auth$user4.firstName) + " " + ((_auth$user5 = auth.user) === null || _auth$user5 === void 0 ? void 0 : _auth$user5.lastName)))), __jsx("h3", {
    style: {
      marginBottom: 40
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 9
    }
  }, caption), __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.reactions_shares_status,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.reactions_status,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 11
    }
  }, likeData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Tooltip"], {
    placement: "bottom",
    title: getLikeActionUserInfo(likeData),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 15
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_21__["FontAwesomeIcon"], {
    icon: ['far', 'thumbs-up'],
    size: "1x",
    style: {
      cursor: 'pointer'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 17
    }
  }, likeData.length))), hahaData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Tooltip"], {
    placement: "bottom",
    title: getLikeActionUserInfo(hahaData),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 15
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_21__["FontAwesomeIcon"], {
    icon: ['far', 'grin'],
    size: "1x",
    style: {
      cursor: 'pointer'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 17
    }
  }, hahaData.length))), heartData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Tooltip"], {
    placement: "bottom",
    title: getLikeActionUserInfo(heartData),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 15
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_21__["FontAwesomeIcon"], {
    icon: ['far', 'heart'],
    size: "1x",
    style: {
      cursor: 'pointer'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 17
    }
  }, heartData.length))), wowData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Tooltip"], {
    placement: "bottom",
    title: getLikeActionUserInfo(wowData),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 15
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_21__["FontAwesomeIcon"], {
    icon: ['far', 'laugh'],
    size: "1x",
    style: {
      cursor: 'pointer'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 17
    }
  }, wowData.length))), sadData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Tooltip"], {
    placement: "bottom",
    title: getLikeActionUserInfo(sadData),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 15
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_21__["FontAwesomeIcon"], {
    icon: ['far', 'frown'],
    size: "1x",
    style: {
      cursor: 'pointer'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 17
    }
  }, sadData.length)))), shares && shares.length > 0 ? __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.shares_status,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 41
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Tooltip"], {
    placement: "top",
    title: 'Share',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_21__["FontAwesomeIcon"], {
    icon: ['far', 'share-square'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 17
    }
  }, shares.length))) : null), __jsx(components_timeline_Actions__WEBPACK_IMPORTED_MODULE_17__["default"], {
    id: id,
    type: type,
    postRate: roundRating,
    comments: comments,
    commentsCount: commentsCount,
    onRatePost: onRatePost,
    index: sliderIndex,
    likeAction: function likeAction(term) {
      return _likeAction(type, id, term);
    },
    shareAction: function shareAction() {
      return _shareAction(type, id);
    },
    actions: function actions() {
      handleShowCommentModal(id);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 9
    }
  }), __jsx(_timeline_Comments__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: id,
    type: type,
    data: comments,
    onUpdateTimeline: onUpdateTimeline,
    activePostId: activePostId,
    modalMode: modalMode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 9
    }
  }))));
}

_s(PhotosModal, "aQKpc51wQJ8o9MmYTCqtKom7zP4=");

_c = PhotosModal;
PhotosModal.defaultProps = {
  data: []
};

function LazyLoader(props) {
  _s2();

  var timerId;
  var _props$src = props.src,
      src = _props$src === void 0 ? '' : _props$src,
      _props$delay = props.delay,
      delay = _props$delay === void 0 ? 0 : _props$delay,
      onLoad = props.onLoad;

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      isMounted = _useState5[0],
      setMounted = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(true),
      isLoading = _useState6[0],
      setLoading = _useState6[1];

  function loadImage() {
    var image = new Image();
    image.src = src;

    image.onload = function () {
      setLoading(false);
      onLoad();
    };
  }

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    if (!isMounted) {
      setMounted(true);
      delay ? timerId = setTimeout(loadImage, delay) : loadImage();
    }

    return function () {
      return clearTimeout(timerId);
    };
  }, []);

  var handleOnDragStart = function handleOnDragStart(e) {
    return e.preventDefault();
  };

  return isLoading ? __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Spin"], {
    size: "large",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 22
    }
  }) : __jsx("img", {
    onDragStart: handleOnDragStart,
    src: src,
    style: {
      width: '100%',
      height: '100%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 45
    }
  });
}

_s2(LazyLoader, "jQehA98DZlDJQVYGVPFfzJ5Dzjg=");

_c2 = LazyLoader;

var _c, _c2;

$RefreshReg$(_c, "PhotosModal");
$RefreshReg$(_c2, "LazyLoader");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlL1Bob3Rvc01vZGFsLmpzIl0sIm5hbWVzIjpbIlRleHRBcmVhIiwiSW5wdXQiLCJQaG90b3NNb2RhbCIsImRhdGEiLCJvblJhdGVQb3N0IiwicGhvdG9JbmRleCIsImxpa2VBY3Rpb24iLCJzaGFyZUFjdGlvbiIsImF1dGgiLCJyZXN0IiwidXNlU3RhdGUiLCJzbGlkZXJJbmRleCIsInNldFNsaWRlckluZGV4IiwidXNlQ29udGV4dCIsIlBob3Rvc0NvbnRleHQiLCJzdG9yYWdlIiwiZGlzcGF0Y2giLCJtb2RhbE1vZGUiLCJzZXRNb2RhbE1vZGUiLCJhY3RpdmVQb3N0SWQiLCJzZXRBY3RpdmVQb3N0SWQiLCJzZXRUaW1lc3RhbXAiLCJ1c2VFZmZlY3QiLCJnZXRQaG90byIsImkiLCJsZW5ndGgiLCJzZXRMb2FkaW5nIiwiaWQiLCJBUEkiLCJtZXRob2QiLCJ1cmwiLCJoZWFkZXJzIiwidG9rZW4iLCJyZXF1ZXN0Iiwic3RhdHVzIiwic2V0UGhvdG8iLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlT25EcmFnU3RhcnQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzbGlkZU5leHQiLCJzdGF0ZSIsInNsaWRlUHJldiIsIm9uU2xpZGVDaGFuZ2VkIiwiaXRlbSIsImhhbmRsZVJhdGVQaG90byIsInJhdGUiLCJvblVwZGF0ZVRpbWVsaW5lIiwibmV3Q29tbWVudCIsImNvbW1lbnRzIiwicGhvdG9EYXRhIiwiYWRkRWxlbWVudCIsImFjY291bnQiLCJ1c2VyIiwibGFzdFBob3RvIiwiaGFuZGxlU2hvd0NvbW1lbnRNb2RhbCIsImdldExpa2VBY3Rpb25Vc2VySW5mbyIsImZpbmFsRGF0YSIsIm1hcCIsImluZGV4IiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJvbkxvYWQiLCJEYXRlIiwibm93Iiwicm91bmRSYXRpbmciLCJyYXRpbmciLCJjYXB0aW9uIiwiY29tbWVudHNDb3VudCIsInJlYWN0aW9ucyIsInNoYXJlcyIsInR5cGUiLCJsaWtlRGF0YSIsImZpbHRlciIsInJlYWN0aW9uIiwiaGVhcnREYXRhIiwid293RGF0YSIsImhhaGFEYXRhIiwic2FkRGF0YSIsInN0eWxlcyIsImNvbnRhaW5lciIsImFjdGlvbnMiLCJwcmV2X2FjdGlvbiIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwib3BhY2l0eSIsIm1hcmdpbkxlZnQiLCJuZXh0X2FjdGlvbiIsIm1hcmdpblJpZ2h0IiwicGhvdG9fY29udGFpbmVyIiwicGhvdG8iLCJibG9iX3RuIiwic3JjIiwicmF0aW5nX3dyYXBwZXIiLCJjb21tZW50UmVhY3Rpb24iLCJsb2FkaW5nIiwicGhvdG9faGVhZGVyIiwiYXZhdGFyIiwicHJvZmlsZVBob3RvIiwidXNlcm5hbWUiLCJ1c2VyX2luZm8iLCJ1c2VyX25hbWUiLCJtYXJnaW5Cb3R0b20iLCJyZWFjdGlvbnNfc2hhcmVzX3N0YXR1cyIsInJlYWN0aW9uc19zdGF0dXMiLCJjdXJzb3IiLCJzaGFyZXNfc3RhdHVzIiwidGVybSIsImRlZmF1bHRQcm9wcyIsIkxhenlMb2FkZXIiLCJwcm9wcyIsInRpbWVySWQiLCJkZWxheSIsImlzTW91bnRlZCIsInNldE1vdW50ZWQiLCJpc0xvYWRpbmciLCJsb2FkSW1hZ2UiLCJpbWFnZSIsIkltYWdlIiwib25sb2FkIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsIndpZHRoIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0lBQ1FBLFEsR0FBYUMsMkMsQ0FBYkQsUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHZSxTQUFTRSxXQUFULE9BUVo7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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VDs7QUFRQSxNQUFNM0UsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxDQUFEO0FBQUEsV0FBT0EsQ0FBQyxDQUFDQyxjQUFGLEVBQVA7QUFBQSxHQUExQjs7QUFFQSxTQUFPNkUsU0FBUyxHQUFHLE1BQUMsMENBQUQ7QUFBTSxRQUFJLEVBQUMsT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQUgsR0FBMEI7QUFBSyxlQUFXLEVBQUUvRSxpQkFBbEI7QUFBcUMsT0FBRyxFQUFFd0QsR0FBMUM7QUFBZ0QsU0FBSyxFQUFFO0FBQUU4QixXQUFLLEVBQUUsTUFBVDtBQUFpQkMsWUFBTSxFQUFFO0FBQXpCLEtBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBMUM7QUFDRDs7SUExQlFkLFU7O01BQUFBLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGltZWxpbmUuM2FlMmZiMzgxMzgzZjViMTMxMmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdE1vZGFsIGZyb20gJ3JlYWN0LW1vZGFsJztcclxuaW1wb3J0IEFsaWNlQ2Fyb3VzZWwgZnJvbSAncmVhY3QtYWxpY2UtY2Fyb3VzZWwnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL3Bob3Rvc19tb2RhbC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBQaG90b01vZGFsV3JhcHBlciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9QaG90b01vZGFsV3JhcHBlcic7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgTGVmdENpcmNsZUZpbGxlZCxcclxuICBSaWdodENpcmNsZUZpbGxlZCxcclxuICBMZWZ0T3V0bGluZWQsXHJcbiAgUmlnaHRPdXRsaW5lZCxcclxufSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IFJhdGluZ1NsaWRlIH0gZnJvbSAnY29tcG9uZW50cy9mb3Jtcyc7XHJcbmltcG9ydCB7IElucHV0LCBQb3BvdmVyLCBUb29sdGlwLCBTcGluLCBSYXRlIH0gZnJvbSAnYW50ZCc7XHJcbmNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0O1xyXG5pbXBvcnQgQVBJIGZyb20gJ2NvbmZpZ3MvQVBJJztcclxuaW1wb3J0IENvbW1lbnRzIGZyb20gJy4uL3RpbWVsaW5lL0NvbW1lbnRzJztcclxuaW1wb3J0IEF2YXRhciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9BdmF0YXInO1xyXG5pbXBvcnQgQWN0aW9ucyBmcm9tICdjb21wb25lbnRzL3RpbWVsaW5lL0FjdGlvbnMnO1xyXG5pbXBvcnQgeyBQaG90b3NDb250ZXh0IH0gZnJvbSAnY29udGFpbmVycy9QaG90b3Mvc3RvcmFnZS9QaG90b0NvbnRleHQnO1xyXG5pbXBvcnQgeyBzZXRQaG90bywgc2V0TG9hZGluZyB9IGZyb20gJ2NvbnRhaW5lcnMvUGhvdG9zL2FjdGlvbnMnO1xyXG5pbXBvcnQgTG9hZGluZ1dyYXBwZXIgZnJvbSAnY29tcG9uZW50cy9jb21tb24vTG9hZGluZ1dyYXBwZXInO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBob3Rvc01vZGFsKHsgXHJcbiAgZGF0YSwgXHJcbiAgb25SYXRlUG9zdCwgXHJcbiAgcGhvdG9JbmRleCwgXHJcbiAgbGlrZUFjdGlvbiwgXHJcbiAgc2hhcmVBY3Rpb24sIFxyXG4gIGF1dGgsIFxyXG4gIC4uLnJlc3QgXHJcbn0pIHtcclxuICBjb25zdCBbc2xpZGVySW5kZXgsIHNldFNsaWRlckluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtzdG9yYWdlLCBkaXNwYXRjaF0gPSB1c2VDb250ZXh0KFBob3Rvc0NvbnRleHQpO1xyXG4gIGNvbnN0IFttb2RhbE1vZGUsIHNldE1vZGFsTW9kZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2FjdGl2ZVBvc3RJZCwgc2V0QWN0aXZlUG9zdElkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFssIHNldFRpbWVzdGFtcF0gPSB1c2VTdGF0ZSgwKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0UGhvdG8oc2xpZGVySW5kZXgpO1xyXG4gIH0sIFtdKTtcclxuIFxyXG4gIGNvbnN0IGdldFBob3RvID0gYXN5bmMgKGkpID0+IHtcclxuICAgIFxyXG4gICAgaWYoZGF0YS5sZW5ndGggPT0gMCkge1xyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKHRydWUpKVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYodHlwZW9mIGRhdGFbaV0uaWQgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcodHJ1ZSkpXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcodHJ1ZSkpXHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybDogJy9waG90b3MvZ2V0JyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBcImlkXCI6IGRhdGFbaV0uaWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyAgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBkaXNwYXRjaChzZXRQaG90byhyZXF1ZXN0LmRhdGEpKVxyXG4gICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKVxyXG4gICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gNDAzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1BsZWFzZSByZWZyZXNoIHRva2VuIScpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIFxyXG4gICAgICB9XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgIFxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVPbkRyYWdTdGFydCA9IChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3Qgc2xpZGVOZXh0ID0gKCkgPT4gc2V0U2xpZGVySW5kZXgoKHN0YXRlKSA9PiB7IFxyXG4gICAgaWYoZGF0YS5sZW5ndGggPD0gc3RhdGUgKyAxKSB7XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGdldFBob3RvKHN0YXRlKzEpO1xyXG4gICAgICByZXR1cm4gc3RhdGUgKyAxO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGNvbnN0IHNsaWRlUHJldiA9ICgpID0+IHNldFNsaWRlckluZGV4KChzdGF0ZSkgPT4ge1xyXG4gICAgaWYoc3RhdGUgPD0gMCkge1xyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGdldFBob3RvKHN0YXRlLTEpO1xyXG4gICAgICByZXR1cm4gc3RhdGUgLSAxO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGNvbnN0IG9uU2xpZGVDaGFuZ2VkID0gKGUpID0+IHNldFNsaWRlckluZGV4KGUuaXRlbSk7XHJcbiAgY29uc3QgaGFuZGxlUmF0ZVBob3RvID0gKHJhdGUpID0+IHtcclxuICAgIGlmKHR5cGVvZiBkYXRhW3NsaWRlckluZGV4XS5pZCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgb25SYXRlUG9zdCgnUGhvdG8nLCBkYXRhW3NsaWRlckluZGV4XS5pZCwgcmF0ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25VcGRhdGVUaW1lbGluZSA9IGFzeW5jIChuZXdDb21tZW50KSA9PiB7XHJcbiAgICBjb25zdCAgeyBjb21tZW50cyB9ID0gc3RvcmFnZS5waG90b0RhdGE7XHJcbiAgICBsZXQgYWRkRWxlbWVudCA9IHtcclxuICAgICAgYWNjb3VudDogYXV0aC51c2VyLCBcclxuICAgICAgLi4ubmV3Q29tbWVudC5jb21tZW50c1swXVxyXG4gICAgfVxyXG4gICAgdmFyIGxhc3RQaG90byA9IHsuLi5zdG9yYWdlLnBob3RvRGF0YSwgY29tbWVudHM6IFsuLi5jb21tZW50cywgYWRkRWxlbWVudF19O1xyXG4gICAgZGlzcGF0Y2goc2V0UGhvdG8obGFzdFBob3RvKSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVTaG93Q29tbWVudE1vZGFsID0gKGlkKSA9PiB7XHJcbiAgICBzZXRNb2RhbE1vZGUoIW1vZGFsTW9kZSk7XHJcbiAgICBzZXRBY3RpdmVQb3N0SWQoaWQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldExpa2VBY3Rpb25Vc2VySW5mbyA9IChkYXRhKSA9PiB7XHJcbiAgICB2YXIgZmluYWxEYXRhID0gJyc7XHJcbiAgICBkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgZmluYWxEYXRhID0gZmluYWxEYXRhICsgJyAnICsgaXRlbS5hY2NvdW50LmZpcnN0TmFtZSArICcnICsgaXRlbS5hY2NvdW50Lmxhc3ROYW1lIDtcclxuICAgIH0pXHJcbiAgICByZXR1cm4gZmluYWxEYXRhO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25Mb2FkID0gKCkgPT4gc2V0VGltZXN0YW1wKERhdGUubm93KCkpO1xyXG5cclxuICBjb25zdCByb3VuZFJhdGluZyA9IHN0b3JhZ2UucGhvdG9EYXRhPy5yYXRpbmc7XHJcbiAgY29uc3QgY2FwdGlvbiA9ICBzdG9yYWdlLnBob3RvRGF0YT8uY2FwdGlvbjtcclxuICBjb25zdCBjb21tZW50cyA9IHN0b3JhZ2UucGhvdG9EYXRhPy5jb21tZW50cztcclxuICBjb25zdCBjb21tZW50c0NvdW50ID0gc3RvcmFnZS5waG90b0RhdGE/LmNvbW1lbnRzQ291bnQ7XHJcbiAgY29uc3QgcmVhY3Rpb25zID0gc3RvcmFnZS5waG90b0RhdGE/LnJlYWN0aW9ucztcclxuICBjb25zdCBzaGFyZXMgPSBzdG9yYWdlLnBob3RvRGF0YT8uc2hhcmVzO1xyXG4gIGNvbnN0IGlkID0gc3RvcmFnZS5waG90b0RhdGE/LmlkO1xyXG4gIGNvbnN0IHR5cGUgPSBkYXRhW3NsaWRlckluZGV4XT8udHlwZTtcclxuICBjb25zdCBsaWtlRGF0YSA9IHJlYWN0aW9ucz8gcmVhY3Rpb25zPy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlYWN0aW9uID09ICdMSUtFJyk6W107XHJcbiAgY29uc3QgaGVhcnREYXRhID0gIHJlYWN0aW9ucz8gcmVhY3Rpb25zPy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlYWN0aW9uID09ICdIRUFSVCcpOltdO1xyXG4gIGNvbnN0IHdvd0RhdGEgPSByZWFjdGlvbnMgPyByZWFjdGlvbnM/LmZpbHRlcihpdGVtID0+IGl0ZW0ucmVhY3Rpb24gPT0gJ1dPVycpOltdO1xyXG4gIGNvbnN0IGhhaGFEYXRhID0gcmVhY3Rpb25zID8gcmVhY3Rpb25zPy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlYWN0aW9uID09ICdIQUhBJyk6W107XHJcbiAgY29uc3Qgc2FkRGF0YSA9IHJlYWN0aW9ucyA/IHJlYWN0aW9ucz8uZmlsdGVyKGl0ZW0gPT4gaXRlbS5yZWFjdGlvbiA9PSAnU0FEJyk6W107XHJcbiAgXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGhvdG9Nb2RhbFdyYXBwZXIgey4uLnJlc3QgfSBwcm9maWxlUGhvdG8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvbnN9PlxyXG4gICAgICAgICAgPExlZnRPdXRsaW5lZFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wcmV2X2FjdGlvbn1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2xpZGVQcmV2KCl9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyNSxcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnYmxhY2snLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDgsXHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC42LFxyXG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDE1XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFJpZ2h0T3V0bGluZWRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubmV4dF9hY3Rpb259XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNsaWRlTmV4dCgpfVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMjUsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ2JsYWNrJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA4LFxyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNixcclxuICAgICAgICAgICAgICBtYXJnaW5SaWdodDogMTVcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEFsaWNlQ2Fyb3VzZWxcclxuICAgICAgICAgIG1vdXNlVHJhY2tpbmdFbmFibGVkXHJcbiAgICAgICAgICBkb3RzRGlzYWJsZWRcclxuICAgICAgICAgIGJ1dHRvbnNEaXNhYmxlZFxyXG4gICAgICAgICAgc2xpZGVUb0luZGV4PXtzbGlkZXJJbmRleH1cclxuICAgICAgICAgIG9uU2xpZGVDaGFuZ2VkPXtvblNsaWRlQ2hhbmdlZH1cclxuICAgICAgICAgIGluZmluaXRlPXtmYWxzZX1cclxuICAgICAgICAgIGFjdGl2ZUluZGV4PXszfVxyXG4gICAgICAgICAgLy8gYXV0b0hlaWdodCAgXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBob3RvX2NvbnRhaW5lcn0ga2V5PXtpbmRleH0gZGF0YS12YWx1ZT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG99PlxyXG4gICAgICAgICAgICAgIDxMYXp5TG9hZGVyIG9uTG9hZD17b25Mb2FkfSBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8keyhpdGVtPy5ibG9iX3RuICE9PSBudWxsKT8oaXRlbT8uYmxvYl90bik6KGl0ZW0/LnNyYyl9YH0gZGVsYXk9ezEwMDB9Lz4sXHJcbiAgICAgICAgICAgICAgICB7LyogPGltZ1xyXG4gICAgICAgICAgICAgICAgICBvbkRyYWdTdGFydD17aGFuZGxlT25EcmFnU3RhcnR9XHJcbiAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7KGl0ZW0/LmJsb2JfdG4gIT09IG51bGwpPyhpdGVtPy5ibG9iX3RuKTooaXRlbT8uc3JjKX1gfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0FsaWNlQ2Fyb3VzZWw+XHJcbiAgICAgICAgXHJcbiAgICAgICAge2RhdGEubGVuZ3RoICE9PSAwICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmF0aW5nX3dyYXBwZXJ9PlxyXG4gICAgICAgICAgICA8UmF0aW5nU2xpZGVcclxuICAgICAgICAgICAgZGVmYXVsdFJhdGU9e3JvdW5kUmF0aW5nfVxyXG4gICAgICAgICAgICB3aXRob3V0VGV4dFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUmF0ZVBob3RvfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHsvKiA8c3Bhbj57cm91bmRSYXRpbmd9PC9zcGFuPiAqL31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50UmVhY3Rpb259PlxyXG4gICAgICAgPExvYWRpbmdXcmFwcGVyIGxvYWRpbmc9e3N0b3JhZ2UubG9hZGluZ30+XHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBob3RvX2hlYWRlcn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn0+XHJcbiAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICB0ZXh0PXthdXRoLnVzZXI/LmZpcnN0TmFtZSArIFwiIFwiICsgYXV0aC51c2VyPy5sYXN0TmFtZX1cclxuICAgICAgICAgICAgICB1cmw9e2Ake2F1dGgudXNlci5wcm9maWxlUGhvdG8uc3JjfWB9XHJcbiAgICAgICAgICAgICAgc2l6ZT17NjB9XHJcbiAgICAgICAgICAgICAgYm9yZGVyU2l6ZT17M31cclxuICAgICAgICAgICAgICB1c2VybmFtZT17YXV0aC51c2VyPy51c2VybmFtZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyX2luZm99PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy51c2VyX25hbWV9PnthdXRoLnVzZXI/LmZpcnN0TmFtZSArIFwiIFwiICsgYXV0aC51c2VyPy5sYXN0TmFtZX08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgIFxyXG4gICAgICAgIDxoMyBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDQwIH19PntjYXB0aW9ufTwvaDM+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZWFjdGlvbnNfc2hhcmVzX3N0YXR1c30+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlYWN0aW9uc19zdGF0dXN9PlxyXG4gICAgICAgICAgICB7IGxpa2VEYXRhLmxlbmd0aCA+IDAgJiYgPD5cclxuICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKGxpa2VEYXRhKX0+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ3RodW1icy11cCddfSBzaXplPVwiMXhcIiAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcid9fS8+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57bGlrZURhdGEubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+PC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgeyBoYWhhRGF0YS5sZW5ndGggPiAwICYmIDw+XHJcbiAgICAgICAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9e2dldExpa2VBY3Rpb25Vc2VySW5mbyhoYWhhRGF0YSl9PlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdncmluJ119IHNpemU9XCIxeFwiICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJ319Lz4gXHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57aGFoYURhdGEubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgeyBoZWFydERhdGEubGVuZ3RoID4gMCAmJiA8PiBcclxuICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKGhlYXJ0RGF0YSl9PlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdoZWFydCddfSBzaXplPVwiMXhcIiAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcid9fS8+IFxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e2hlYXJ0RGF0YS5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7IHdvd0RhdGEubGVuZ3RoID4gMCAmJiA8PiBcclxuICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKHdvd0RhdGEpfT5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAnbGF1Z2gnXX0gc2l6ZT1cIjF4XCIgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInfX0vPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3dvd0RhdGEubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgPC8+IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHsgc2FkRGF0YS5sZW5ndGggPiAwICYmIDw+XHJcbiAgICAgICAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9e2dldExpa2VBY3Rpb25Vc2VySW5mbyhzYWREYXRhKX0+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ2Zyb3duJ119IHNpemU9XCIxeFwiICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJ319Lz4gXHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57c2FkRGF0YS5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7c2hhcmVzICYmIHNoYXJlcy5sZW5ndGggPiAwID88ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNoYXJlc19zdGF0dXN9PlxyXG4gICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJ0b3BcIiB0aXRsZT17J1NoYXJlJ30+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ3NoYXJlLXNxdWFyZSddfS8+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57c2hhcmVzLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgIDwvZGl2PjpudWxsfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxBY3Rpb25zXHJcbiAgICAgICAgICBpZD17aWR9XHJcbiAgICAgICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICAgICAgcG9zdFJhdGU9e3JvdW5kUmF0aW5nfVxyXG4gICAgICAgICAgY29tbWVudHM9e2NvbW1lbnRzfVxyXG4gICAgICAgICAgY29tbWVudHNDb3VudD17Y29tbWVudHNDb3VudH1cclxuICAgICAgICAgIG9uUmF0ZVBvc3Q9e29uUmF0ZVBvc3R9XHJcbiAgICAgICAgICBpbmRleD17c2xpZGVySW5kZXh9XHJcbiAgICAgICAgICBsaWtlQWN0aW9uPXsodGVybSkgPT4gbGlrZUFjdGlvbih0eXBlLCBpZCwgdGVybSl9XHJcbiAgICAgICAgICBzaGFyZUFjdGlvbj17KCkgPT4gc2hhcmVBY3Rpb24odHlwZSwgaWQpfVxyXG4gICAgICAgICAgYWN0aW9ucz17KCkgPT4geyBoYW5kbGVTaG93Q29tbWVudE1vZGFsKGlkKSB9IH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxDb21tZW50c1xyXG4gICAgICAgICAgaWQ9e2lkfVxyXG4gICAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICAgIGRhdGE9e2NvbW1lbnRzfVxyXG4gICAgICAgICAgb25VcGRhdGVUaW1lbGluZT17b25VcGRhdGVUaW1lbGluZX1cclxuICAgICAgICAgIGFjdGl2ZVBvc3RJZD17YWN0aXZlUG9zdElkfVxyXG4gICAgICAgICAgbW9kYWxNb2RlPXttb2RhbE1vZGV9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8L0xvYWRpbmdXcmFwcGVyPlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICA8L1Bob3RvTW9kYWxXcmFwcGVyPlxyXG4gICk7XHJcbn1cclxuXHJcblBob3Rvc01vZGFsLmRlZmF1bHRQcm9wcyA9IHtcclxuICBkYXRhOiBbXSxcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIExhenlMb2FkZXIocHJvcHMpIHtcclxuICBsZXQgdGltZXJJZDtcclxuICBjb25zdCB7IHNyYyA9ICcnLCBkZWxheSA9IDAsIG9uTG9hZCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW2lzTW91bnRlZCwgc2V0TW91bnRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgZnVuY3Rpb24gbG9hZEltYWdlKCkge1xyXG4gICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICBpbWFnZS5zcmMgPSBzcmM7XHJcbiAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgb25Mb2FkKCk7XHJcbiAgICAgIH07XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFpc01vdW50ZWQpIHtcclxuICAgICAgc2V0TW91bnRlZCh0cnVlKTtcclxuICAgICAgZGVsYXkgPyAodGltZXJJZCA9IHNldFRpbWVvdXQobG9hZEltYWdlLCBkZWxheSkpIDogbG9hZEltYWdlKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT25EcmFnU3RhcnQgPSAoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICByZXR1cm4gaXNMb2FkaW5nID8gPFNwaW4gc2l6ZT1cImxhcmdlXCIvPiA6IDxpbWcgb25EcmFnU3RhcnQ9e2hhbmRsZU9uRHJhZ1N0YXJ0fSBzcmM9e3NyY30gIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnIH19Lz47XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9