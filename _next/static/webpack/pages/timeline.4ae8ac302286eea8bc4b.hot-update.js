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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var components_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/forms */ "./components/forms/index.js");
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










var TextArea = antd__WEBPACK_IMPORTED_MODULE_11__["Input"].TextArea;








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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(4),
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
    console.log(id);
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
      lineNumber: 146,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.actions,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 9
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_12__["LeftOutlined"], {
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
      lineNumber: 149,
      columnNumber: 11
    }
  }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_12__["RightOutlined"], {
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
      lineNumber: 160,
      columnNumber: 11
    }
  })), __jsx(react_alice_carousel__WEBPACK_IMPORTED_MODULE_8___default.a, {
    mouseTrackingEnabled: true,
    dotsDisabled: true,
    buttonsDisabled: true,
    slideToIndex: sliderIndex,
    onSlideChanged: onSlideChanged,
    infinite: false,
    activeIndex: 5 // autoHeight  
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
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
        lineNumber: 183,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.photo,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 15
      }
    }, __jsx(LazyLoader, {
      onLoad: onLoad,
      src: "https://www.freeskies.com/static/".concat((item === null || item === void 0 ? void 0 : item.blob_tn) !== null ? item === null || item === void 0 ? void 0 : item.blob_tn : item === null || item === void 0 ? void 0 : item.src),
      delay: 1000,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 15
      }
    }), ","));
  })), data.length !== 0 && __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.rating_wrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 11
    }
  }, __jsx(components_forms__WEBPACK_IMPORTED_MODULE_13__["RatingSlide"], {
    defaultRate: roundRating,
    withoutText: true,
    onChange: handleRatePhoto,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.commentReaction,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 8
    }
  }, __jsx(components_common_LoadingWrapper__WEBPACK_IMPORTED_MODULE_20__["default"], {
    loading: storage.loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.photo_header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
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
      lineNumber: 213,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.user_info,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.user_name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 13
    }
  }, ((_auth$user4 = auth.user) === null || _auth$user4 === void 0 ? void 0 : _auth$user4.firstName) + " " + ((_auth$user5 = auth.user) === null || _auth$user5 === void 0 ? void 0 : _auth$user5.lastName)))), __jsx("h3", {
    style: {
      marginBottom: 40
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 9
    }
  }, caption), __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.reactions_shares_status,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.reactions_status,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 11
    }
  }, likeData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_11__["Tooltip"], {
    placement: "bottom",
    title: getLikeActionUserInfo(likeData),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
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
      lineNumber: 231,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 17
    }
  }, likeData.length))), hahaData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_11__["Tooltip"], {
    placement: "bottom",
    title: getLikeActionUserInfo(hahaData),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
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
      lineNumber: 237,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 17
    }
  }, hahaData.length))), heartData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_11__["Tooltip"], {
    placement: "bottom",
    title: getLikeActionUserInfo(heartData),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
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
      lineNumber: 244,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 17
    }
  }, heartData.length))), wowData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_11__["Tooltip"], {
    placement: "bottom",
    title: getLikeActionUserInfo(wowData),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
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
      lineNumber: 251,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 17
    }
  }, wowData.length))), sadData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_11__["Tooltip"], {
    placement: "bottom",
    title: getLikeActionUserInfo(sadData),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
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
      lineNumber: 258,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 17
    }
  }, sadData.length)))), shares && shares.length > 0 ? __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.shares_status,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 41
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_11__["Tooltip"], {
    placement: "top",
    title: 'Share',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_21__["FontAwesomeIcon"], {
    icon: ['far', 'share-square'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
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
      lineNumber: 271,
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
      lineNumber: 283,
      columnNumber: 9
    }
  }))));
}

_s(PhotosModal, "9/Fu5PPf74HpDwhUQIdwfqoMI+8=");

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

  return isLoading ? __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 22
    }
  }, "Loading...") : __jsx("img", {
    onDragStart: handleOnDragStart,
    src: src,
    style: {
      width: '100%',
      height: "100%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 46
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlL1Bob3Rvc01vZGFsLmpzIl0sIm5hbWVzIjpbIlRleHRBcmVhIiwiSW5wdXQiLCJQaG90b3NNb2RhbCIsImRhdGEiLCJvblJhdGVQb3N0IiwicGhvdG9JbmRleCIsImxpa2VBY3Rpb24iLCJzaGFyZUFjdGlvbiIsImF1dGgiLCJyZXN0IiwidXNlU3RhdGUiLCJzbGlkZXJJbmRleCIsInNldFNsaWRlckluZGV4IiwidXNlQ29udGV4dCIsIlBob3Rvc0NvbnRleHQiLCJzdG9yYWdlIiwiZGlzcGF0Y2giLCJtb2RhbE1vZGUiLCJzZXRNb2RhbE1vZGUiLCJhY3RpdmVQb3N0SWQiLCJzZXRBY3RpdmVQb3N0SWQiLCJzZXRUaW1lc3RhbXAiLCJ1c2VFZmZlY3QiLCJnZXRQaG90byIsImkiLCJsZW5ndGgiLCJzZXRMb2FkaW5nIiwiaWQiLCJBUEkiLCJtZXRob2QiLCJ1cmwiLCJoZWFkZXJzIiwidG9rZW4iLCJyZXF1ZXN0Iiwic3RhdHVzIiwic2V0UGhvdG8iLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlT25EcmFnU3RhcnQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzbGlkZU5leHQiLCJzdGF0ZSIsInNsaWRlUHJldiIsIm9uU2xpZGVDaGFuZ2VkIiwiaXRlbSIsImhhbmRsZVJhdGVQaG90byIsInJhdGUiLCJvblVwZGF0ZVRpbWVsaW5lIiwibmV3Q29tbWVudCIsImNvbW1lbnRzIiwicGhvdG9EYXRhIiwiYWRkRWxlbWVudCIsImFjY291bnQiLCJ1c2VyIiwibGFzdFBob3RvIiwiaGFuZGxlU2hvd0NvbW1lbnRNb2RhbCIsImdldExpa2VBY3Rpb25Vc2VySW5mbyIsImZpbmFsRGF0YSIsIm1hcCIsImluZGV4IiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJvbkxvYWQiLCJEYXRlIiwibm93Iiwicm91bmRSYXRpbmciLCJyYXRpbmciLCJjYXB0aW9uIiwiY29tbWVudHNDb3VudCIsInJlYWN0aW9ucyIsInNoYXJlcyIsInR5cGUiLCJsaWtlRGF0YSIsImZpbHRlciIsInJlYWN0aW9uIiwiaGVhcnREYXRhIiwid293RGF0YSIsImhhaGFEYXRhIiwic2FkRGF0YSIsInN0eWxlcyIsImNvbnRhaW5lciIsImFjdGlvbnMiLCJwcmV2X2FjdGlvbiIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwib3BhY2l0eSIsIm1hcmdpbkxlZnQiLCJuZXh0X2FjdGlvbiIsIm1hcmdpblJpZ2h0IiwicGhvdG9fY29udGFpbmVyIiwicGhvdG8iLCJibG9iX3RuIiwic3JjIiwicmF0aW5nX3dyYXBwZXIiLCJjb21tZW50UmVhY3Rpb24iLCJsb2FkaW5nIiwicGhvdG9faGVhZGVyIiwiYXZhdGFyIiwicHJvZmlsZVBob3RvIiwidXNlcm5hbWUiLCJ1c2VyX2luZm8iLCJ1c2VyX25hbWUiLCJtYXJnaW5Cb3R0b20iLCJyZWFjdGlvbnNfc2hhcmVzX3N0YXR1cyIsInJlYWN0aW9uc19zdGF0dXMiLCJjdXJzb3IiLCJzaGFyZXNfc3RhdHVzIiwidGVybSIsImRlZmF1bHRQcm9wcyIsIkxhenlMb2FkZXIiLCJwcm9wcyIsInRpbWVySWQiLCJkZWxheSIsImlzTW91bnRlZCIsInNldE1vdW50ZWQiLCJpc0xvYWRpbmciLCJsb2FkSW1hZ2UiLCJpbWFnZSIsIkltYWdlIiwib25sb2FkIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsIndpZHRoIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7SUFDUUEsUSxHQUFhQywyQyxDQUFiRCxRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdlLFNBQVNFLFdBQVQsT0FRWjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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QUFsQjtBQUFBLEtBQVA7QUFDSCxHQU5RLEVBTU4sRUFOTSxDQUFUOztBQVFBLE1BQU0zRSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLENBQUQ7QUFBQSxXQUFPQSxDQUFDLENBQUNDLGNBQUYsRUFBUDtBQUFBLEdBQTFCOztBQUVBLFNBQU82RSxTQUFTLEdBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBSCxHQUEyQjtBQUFLLGVBQVcsRUFBRS9FLGlCQUFsQjtBQUFxQyxPQUFHLEVBQUV3RCxHQUExQztBQUFnRCxTQUFLLEVBQUU7QUFBRThCLFdBQUssRUFBRSxNQUFUO0FBQWlCQyxZQUFNLEVBQUU7QUFBekIsS0FBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUEzQztBQUNEOztJQTNCUWQsVTs7TUFBQUEsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90aW1lbGluZS40YWU4YWMzMDIyODZlZWE4YmM0Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0TW9kYWwgZnJvbSAncmVhY3QtbW9kYWwnO1xyXG5pbXBvcnQgQWxpY2VDYXJvdXNlbCBmcm9tICdyZWFjdC1hbGljZS1jYXJvdXNlbCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvcGhvdG9zX21vZGFsLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IFBob3RvTW9kYWxXcmFwcGVyIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL1Bob3RvTW9kYWxXcmFwcGVyJztcclxuaW1wb3J0IHsgUmF0ZSB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIExlZnRDaXJjbGVGaWxsZWQsXHJcbiAgUmlnaHRDaXJjbGVGaWxsZWQsXHJcbiAgTGVmdE91dGxpbmVkLFxyXG4gIFJpZ2h0T3V0bGluZWQsXHJcbn0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyBSYXRpbmdTbGlkZSB9IGZyb20gJ2NvbXBvbmVudHMvZm9ybXMnO1xyXG5pbXBvcnQgeyBJbnB1dCwgUG9wb3ZlciwgVG9vbHRpcCB9IGZyb20gJ2FudGQnO1xyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuaW1wb3J0IEFQSSBmcm9tICdjb25maWdzL0FQSSc7XHJcbmltcG9ydCBDb21tZW50cyBmcm9tICcuLi90aW1lbGluZS9Db21tZW50cyc7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnY29tcG9uZW50cy9jb21tb24vQXZhdGFyJztcclxuaW1wb3J0IEFjdGlvbnMgZnJvbSAnY29tcG9uZW50cy90aW1lbGluZS9BY3Rpb25zJztcclxuaW1wb3J0IHsgUGhvdG9zQ29udGV4dCB9IGZyb20gJ2NvbnRhaW5lcnMvUGhvdG9zL3N0b3JhZ2UvUGhvdG9Db250ZXh0JztcclxuaW1wb3J0IHsgc2V0UGhvdG8sIHNldExvYWRpbmcgfSBmcm9tICdjb250YWluZXJzL1Bob3Rvcy9hY3Rpb25zJztcclxuaW1wb3J0IExvYWRpbmdXcmFwcGVyIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL0xvYWRpbmdXcmFwcGVyJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQaG90b3NNb2RhbCh7IFxyXG4gIGRhdGEsIFxyXG4gIG9uUmF0ZVBvc3QsIFxyXG4gIHBob3RvSW5kZXgsIFxyXG4gIGxpa2VBY3Rpb24sIFxyXG4gIHNoYXJlQWN0aW9uLCBcclxuICBhdXRoLCBcclxuICAuLi5yZXN0IFxyXG59KSB7XHJcbiAgY29uc3QgW3NsaWRlckluZGV4LCBzZXRTbGlkZXJJbmRleF0gPSB1c2VTdGF0ZSg0KTtcclxuICBjb25zdCBbc3RvcmFnZSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChQaG90b3NDb250ZXh0KTtcclxuICBjb25zdCBbbW9kYWxNb2RlLCBzZXRNb2RhbE1vZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFthY3RpdmVQb3N0SWQsIHNldEFjdGl2ZVBvc3RJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbLCBzZXRUaW1lc3RhbXBdID0gdXNlU3RhdGUoMCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldFBob3RvKHNsaWRlckluZGV4KTtcclxuICB9LCBbXSk7XHJcbiBcclxuICBjb25zdCBnZXRQaG90byA9IGFzeW5jIChpKSA9PiB7XHJcbiAgICBcclxuICAgIGlmKGRhdGEubGVuZ3RoID09IDApIHtcclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlKSlcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHR5cGVvZiBkYXRhW2ldLmlkID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKHRydWUpKVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKHRydWUpKVxyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6ICcvcGhvdG9zL2dldCcsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgXCJpZFwiOiBkYXRhW2ldLmlkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goc2V0UGhvdG8ocmVxdWVzdC5kYXRhKSlcclxuICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSlcclxuICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IDQwMykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdQbGVhc2UgcmVmcmVzaCB0b2tlbiEnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBcclxuICAgICAgfVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICBcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgaGFuZGxlT25EcmFnU3RhcnQgPSAoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IHNsaWRlTmV4dCA9ICgpID0+IHNldFNsaWRlckluZGV4KChzdGF0ZSkgPT4geyBcclxuICAgIGlmKGRhdGEubGVuZ3RoIDw9IHN0YXRlICsgMSkge1xyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBnZXRQaG90byhzdGF0ZSsxKTtcclxuICAgICAgcmV0dXJuIHN0YXRlICsgMTtcclxuICAgIH1cclxuICB9KTtcclxuICBjb25zdCBzbGlkZVByZXYgPSAoKSA9PiBzZXRTbGlkZXJJbmRleCgoc3RhdGUpID0+IHtcclxuICAgIGlmKHN0YXRlIDw9IDApIHtcclxuICAgICAgcmV0dXJuIDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBnZXRQaG90byhzdGF0ZS0xKTtcclxuICAgICAgcmV0dXJuIHN0YXRlIC0gMTtcclxuICAgIH1cclxuICB9KTtcclxuICBjb25zdCBvblNsaWRlQ2hhbmdlZCA9IChlKSA9PiBzZXRTbGlkZXJJbmRleChlLml0ZW0pO1xyXG4gIGNvbnN0IGhhbmRsZVJhdGVQaG90byA9IChyYXRlKSA9PiB7XHJcbiAgICBpZih0eXBlb2YgZGF0YVtzbGlkZXJJbmRleF0uaWQgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIG9uUmF0ZVBvc3QoJ1Bob3RvJywgZGF0YVtzbGlkZXJJbmRleF0uaWQsIHJhdGUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uVXBkYXRlVGltZWxpbmUgPSBhc3luYyAobmV3Q29tbWVudCkgPT4ge1xyXG4gICAgY29uc3QgIHsgY29tbWVudHMgfSA9IHN0b3JhZ2UucGhvdG9EYXRhO1xyXG4gICAgbGV0IGFkZEVsZW1lbnQgPSB7XHJcbiAgICAgIGFjY291bnQ6IGF1dGgudXNlciwgXHJcbiAgICAgIC4uLm5ld0NvbW1lbnQuY29tbWVudHNbMF1cclxuICAgIH1cclxuICAgIHZhciBsYXN0UGhvdG8gPSB7Li4uc3RvcmFnZS5waG90b0RhdGEsIGNvbW1lbnRzOiBbLi4uY29tbWVudHMsIGFkZEVsZW1lbnRdfTtcclxuICAgIGRpc3BhdGNoKHNldFBob3RvKGxhc3RQaG90bykpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlU2hvd0NvbW1lbnRNb2RhbCA9IChpZCkgPT4ge2NvbnNvbGUubG9nKGlkKTtcclxuICAgIHNldE1vZGFsTW9kZSghbW9kYWxNb2RlKTtcclxuICAgIHNldEFjdGl2ZVBvc3RJZChpZCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0TGlrZUFjdGlvblVzZXJJbmZvID0gKGRhdGEpID0+IHtcclxuICAgIHZhciBmaW5hbERhdGEgPSAnJztcclxuICAgIGRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICBmaW5hbERhdGEgPSBmaW5hbERhdGEgKyAnICcgKyBpdGVtLmFjY291bnQuZmlyc3ROYW1lICsgJycgKyBpdGVtLmFjY291bnQubGFzdE5hbWUgO1xyXG4gICAgfSlcclxuICAgIHJldHVybiBmaW5hbERhdGE7XHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkxvYWQgPSAoKSA9PiBzZXRUaW1lc3RhbXAoRGF0ZS5ub3coKSk7XHJcblxyXG4gIGNvbnN0IHJvdW5kUmF0aW5nID0gc3RvcmFnZS5waG90b0RhdGE/LnJhdGluZztcclxuICBjb25zdCBjYXB0aW9uID0gIHN0b3JhZ2UucGhvdG9EYXRhPy5jYXB0aW9uO1xyXG4gIGNvbnN0IGNvbW1lbnRzID0gc3RvcmFnZS5waG90b0RhdGE/LmNvbW1lbnRzO1xyXG4gIGNvbnN0IGNvbW1lbnRzQ291bnQgPSBzdG9yYWdlLnBob3RvRGF0YT8uY29tbWVudHNDb3VudDtcclxuICBjb25zdCByZWFjdGlvbnMgPSBzdG9yYWdlLnBob3RvRGF0YT8ucmVhY3Rpb25zO1xyXG4gIGNvbnN0IHNoYXJlcyA9IHN0b3JhZ2UucGhvdG9EYXRhPy5zaGFyZXM7XHJcbiAgY29uc3QgaWQgPSBzdG9yYWdlLnBob3RvRGF0YT8uaWQ7XHJcbiAgY29uc3QgdHlwZSA9IGRhdGFbc2xpZGVySW5kZXhdPy50eXBlO1xyXG4gIGNvbnN0IGxpa2VEYXRhID0gcmVhY3Rpb25zPyByZWFjdGlvbnM/LmZpbHRlcihpdGVtID0+IGl0ZW0ucmVhY3Rpb24gPT0gJ0xJS0UnKTpbXTtcclxuICBjb25zdCBoZWFydERhdGEgPSAgcmVhY3Rpb25zPyByZWFjdGlvbnM/LmZpbHRlcihpdGVtID0+IGl0ZW0ucmVhY3Rpb24gPT0gJ0hFQVJUJyk6W107XHJcbiAgY29uc3Qgd293RGF0YSA9IHJlYWN0aW9ucyA/IHJlYWN0aW9ucz8uZmlsdGVyKGl0ZW0gPT4gaXRlbS5yZWFjdGlvbiA9PSAnV09XJyk6W107XHJcbiAgY29uc3QgaGFoYURhdGEgPSByZWFjdGlvbnMgPyByZWFjdGlvbnM/LmZpbHRlcihpdGVtID0+IGl0ZW0ucmVhY3Rpb24gPT0gJ0hBSEEnKTpbXTtcclxuICBjb25zdCBzYWREYXRhID0gcmVhY3Rpb25zID8gcmVhY3Rpb25zPy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlYWN0aW9uID09ICdTQUQnKTpbXTtcclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQaG90b01vZGFsV3JhcHBlciB7Li4ucmVzdCB9IHByb2ZpbGVQaG90bz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uc30+XHJcbiAgICAgICAgICA8TGVmdE91dGxpbmVkXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnByZXZfYWN0aW9ufVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzbGlkZVByZXYoKX1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDI1LFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdibGFjaycsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogOCxcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjYsXHJcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdDogMTVcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8UmlnaHRPdXRsaW5lZFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5uZXh0X2FjdGlvbn1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2xpZGVOZXh0KCl9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyNSxcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnYmxhY2snLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDgsXHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC42LFxyXG4gICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAxNVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8QWxpY2VDYXJvdXNlbFxyXG4gICAgICAgICAgbW91c2VUcmFja2luZ0VuYWJsZWRcclxuICAgICAgICAgIGRvdHNEaXNhYmxlZFxyXG4gICAgICAgICAgYnV0dG9uc0Rpc2FibGVkXHJcbiAgICAgICAgICBzbGlkZVRvSW5kZXg9e3NsaWRlckluZGV4fVxyXG4gICAgICAgICAgb25TbGlkZUNoYW5nZWQ9e29uU2xpZGVDaGFuZ2VkfVxyXG4gICAgICAgICAgaW5maW5pdGU9e2ZhbHNlfVxyXG4gICAgICAgICAgYWN0aXZlSW5kZXg9ezV9XHJcbiAgICAgICAgICAvLyBhdXRvSGVpZ2h0ICBcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9fY29udGFpbmVyfSBrZXk9e2luZGV4fSBkYXRhLXZhbHVlPXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5waG90b30+XHJcbiAgICAgICAgICAgICAgPExhenlMb2FkZXIgb25Mb2FkPXtvbkxvYWR9IHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7KGl0ZW0/LmJsb2JfdG4gIT09IG51bGwpPyhpdGVtPy5ibG9iX3RuKTooaXRlbT8uc3JjKX1gfSBkZWxheT17MTAwMH0vPixcclxuICAgICAgICAgICAgICAgIHsvKiA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIG9uRHJhZ1N0YXJ0PXtoYW5kbGVPbkRyYWdTdGFydH1cclxuICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHsoaXRlbT8uYmxvYl90biAhPT0gbnVsbCk/KGl0ZW0/LmJsb2JfdG4pOihpdGVtPy5zcmMpfWB9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvQWxpY2VDYXJvdXNlbD5cclxuICAgICAgICBcclxuICAgICAgICB7ZGF0YS5sZW5ndGggIT09IDAgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yYXRpbmdfd3JhcHBlcn0+XHJcbiAgICAgICAgICAgIDxSYXRpbmdTbGlkZVxyXG4gICAgICAgICAgICBkZWZhdWx0UmF0ZT17cm91bmRSYXRpbmd9XHJcbiAgICAgICAgICAgIHdpdGhvdXRUZXh0XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVSYXRlUGhvdG99XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgey8qIDxzcGFuPntyb3VuZFJhdGluZ308L3NwYW4+ICovfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnRSZWFjdGlvbn0+XHJcbiAgICAgICA8TG9hZGluZ1dyYXBwZXIgbG9hZGluZz17c3RvcmFnZS5sb2FkaW5nfT5cclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9faGVhZGVyfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyfT5cclxuICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgIHRleHQ9e2F1dGgudXNlcj8uZmlyc3ROYW1lICsgXCIgXCIgKyBhdXRoLnVzZXI/Lmxhc3ROYW1lfVxyXG4gICAgICAgICAgICAgIHVybD17YCR7YXV0aC51c2VyLnByb2ZpbGVQaG90by5zcmN9YH1cclxuICAgICAgICAgICAgICBzaXplPXs2MH1cclxuICAgICAgICAgICAgICBib3JkZXJTaXplPXszfVxyXG4gICAgICAgICAgICAgIHVzZXJuYW1lPXthdXRoLnVzZXI/LnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfaW5mb30+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfbmFtZX0+e2F1dGgudXNlcj8uZmlyc3ROYW1lICsgXCIgXCIgKyBhdXRoLnVzZXI/Lmxhc3ROYW1lfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgXHJcbiAgICAgICAgPGgzIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogNDAgfX0+e2NhcHRpb259PC9oMz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlYWN0aW9uc19zaGFyZXNfc3RhdHVzfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVhY3Rpb25zX3N0YXR1c30+XHJcbiAgICAgICAgICAgIHsgbGlrZURhdGEubGVuZ3RoID4gMCAmJiA8PlxyXG4gICAgICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPXtnZXRMaWtlQWN0aW9uVXNlckluZm8obGlrZURhdGEpfT5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAndGh1bWJzLXVwJ119IHNpemU9XCIxeFwiICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJ319Lz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPntsaWtlRGF0YS5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvVG9vbHRpcD48Lz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7IGhhaGFEYXRhLmxlbmd0aCA+IDAgJiYgPD5cclxuICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKGhhaGFEYXRhKX0+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ2dyaW4nXX0gc2l6ZT1cIjF4XCIgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInfX0vPiBcclxuICAgICAgICAgICAgICAgIDxzcGFuPntoYWhhRGF0YS5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7IGhlYXJ0RGF0YS5sZW5ndGggPiAwICYmIDw+IFxyXG4gICAgICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPXtnZXRMaWtlQWN0aW9uVXNlckluZm8oaGVhcnREYXRhKX0+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ2hlYXJ0J119IHNpemU9XCIxeFwiICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJ319Lz4gXHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57aGVhcnREYXRhLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHsgd293RGF0YS5sZW5ndGggPiAwICYmIDw+IFxyXG4gICAgICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPXtnZXRMaWtlQWN0aW9uVXNlckluZm8od293RGF0YSl9PlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdsYXVnaCddfSBzaXplPVwiMXhcIiAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcid9fS8+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57d293RGF0YS5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICA8Lz4gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgeyBzYWREYXRhLmxlbmd0aCA+IDAgJiYgPD5cclxuICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKHNhZERhdGEpfT5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAnZnJvd24nXX0gc2l6ZT1cIjF4XCIgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInfX0vPiBcclxuICAgICAgICAgICAgICAgIDxzcGFuPntzYWREYXRhLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHtzaGFyZXMgJiYgc2hhcmVzLmxlbmd0aCA+IDAgPzxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2hhcmVzX3N0YXR1c30+XHJcbiAgICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cInRvcFwiIHRpdGxlPXsnU2hhcmUnfT5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAnc2hhcmUtc3F1YXJlJ119Lz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPntzaGFyZXMubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgPC9kaXY+Om51bGx9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEFjdGlvbnNcclxuICAgICAgICAgIGlkPXtpZH1cclxuICAgICAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgICAgICBwb3N0UmF0ZT17cm91bmRSYXRpbmd9XHJcbiAgICAgICAgICBjb21tZW50cz17Y29tbWVudHN9XHJcbiAgICAgICAgICBjb21tZW50c0NvdW50PXtjb21tZW50c0NvdW50fVxyXG4gICAgICAgICAgb25SYXRlUG9zdD17b25SYXRlUG9zdH1cclxuICAgICAgICAgIGluZGV4PXtzbGlkZXJJbmRleH1cclxuICAgICAgICAgIGxpa2VBY3Rpb249eyh0ZXJtKSA9PiBsaWtlQWN0aW9uKHR5cGUsIGlkLCB0ZXJtKX1cclxuICAgICAgICAgIHNoYXJlQWN0aW9uPXsoKSA9PiBzaGFyZUFjdGlvbih0eXBlLCBpZCl9XHJcbiAgICAgICAgICBhY3Rpb25zPXsoKSA9PiB7IGhhbmRsZVNob3dDb21tZW50TW9kYWwoaWQpIH0gfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPENvbW1lbnRzXHJcbiAgICAgICAgICBpZD17aWR9XHJcbiAgICAgICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICAgICAgZGF0YT17Y29tbWVudHN9XHJcbiAgICAgICAgICBvblVwZGF0ZVRpbWVsaW5lPXtvblVwZGF0ZVRpbWVsaW5lfVxyXG4gICAgICAgICAgYWN0aXZlUG9zdElkPXthY3RpdmVQb3N0SWR9XHJcbiAgICAgICAgICBtb2RhbE1vZGU9e21vZGFsTW9kZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDwvTG9hZGluZ1dyYXBwZXI+XHJcbiAgICAgICA8L2Rpdj5cclxuICAgIDwvUGhvdG9Nb2RhbFdyYXBwZXI+XHJcbiAgKTtcclxufVxyXG5cclxuUGhvdG9zTW9kYWwuZGVmYXVsdFByb3BzID0ge1xyXG4gIGRhdGE6IFtdLFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBMYXp5TG9hZGVyKHByb3BzKSB7XHJcbiAgbGV0IHRpbWVySWQ7XHJcbiAgY29uc3QgeyBzcmMgPSAnJywgZGVsYXkgPSAwLCBvbkxvYWQgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtpc01vdW50ZWQsIHNldE1vdW50ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGZ1bmN0aW9uIGxvYWRJbWFnZSgpIHtcclxuICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuXHJcbiAgICAgIGltYWdlLnNyYyA9IHNyYztcclxuICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICBvbkxvYWQoKTtcclxuICAgICAgfTtcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGlmICghaXNNb3VudGVkKSB7XHJcbiAgICAgICAgICBzZXRNb3VudGVkKHRydWUpO1xyXG4gICAgICAgICAgZGVsYXkgPyAodGltZXJJZCA9IHNldFRpbWVvdXQobG9hZEltYWdlLCBkZWxheSkpIDogbG9hZEltYWdlKCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lcklkKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9uRHJhZ1N0YXJ0ID0gKGUpID0+IGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgcmV0dXJuIGlzTG9hZGluZyA/IDxkaXY+TG9hZGluZy4uLjwvZGl2PiA6IDxpbWcgb25EcmFnU3RhcnQ9e2hhbmRsZU9uRHJhZ1N0YXJ0fSBzcmM9e3NyY30gIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogXCIxMDAlXCIgfX0vPjtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=