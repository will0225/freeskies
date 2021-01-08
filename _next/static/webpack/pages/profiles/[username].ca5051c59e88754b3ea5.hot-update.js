webpackHotUpdate_N_E("pages/profiles/[username]",{

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
      activeImageId = _ref.activeImageId,
      auth = _ref.auth,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__["default"])(_ref, ["data", "onRatePost", "photoIndex", "likeAction", "shareAction", "activeImageId", "auth"]);

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
              console.log(data, i);

              if (!(data.length == 0)) {
                _context.next = 4;
                break;
              }

              dispatch(Object(containers_Photos_actions__WEBPACK_IMPORTED_MODULE_19__["setLoading"])(true));
              return _context.abrupt("return");

            case 4:
              if (!(typeof data[i].id === 'undefined')) {
                _context.next = 7;
                break;
              }

              dispatch(Object(containers_Photos_actions__WEBPACK_IMPORTED_MODULE_19__["setLoading"])(true));
              return _context.abrupt("return");

            case 7:
              _context.prev = 7;
              dispatch(Object(containers_Photos_actions__WEBPACK_IMPORTED_MODULE_19__["setLoading"])(true));
              _context.next = 11;
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

            case 11:
              request = _context.sent;
              status = request.status;

              if (status === 200) {
                dispatch(Object(containers_Photos_actions__WEBPACK_IMPORTED_MODULE_19__["setPhoto"])(request.data));
                dispatch(Object(containers_Photos_actions__WEBPACK_IMPORTED_MODULE_19__["setLoading"])(false));
              } else if (status === 403) {
                console.log('Please refresh token!');
              } else {}

              _context.next = 19;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](7);
              console.log(_context.t0);

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[7, 16]]);
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
      lineNumber: 154,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.actions,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
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
      lineNumber: 157,
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
      lineNumber: 168,
      columnNumber: 11
    }
  })), __jsx(react_alice_carousel__WEBPACK_IMPORTED_MODULE_8___default.a, {
    mouseTrackingEnabled: true,
    dotsDisabled: true,
    buttonsDisabled: true,
    slideToIndex: sliderIndex,
    onSlideChanged: onSlideChanged,
    infinite: false // autoHeight  
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
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
        lineNumber: 191,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.photo,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 17
      }
    }, __jsx(LazyLoader, {
      onLoad: onLoad,
      src: "https://www.freeskies.com/static/".concat((item === null || item === void 0 ? void 0 : item.blob_tn) !== null ? item === null || item === void 0 ? void 0 : item.blob_tn : item === null || item === void 0 ? void 0 : item.src),
      delay: 1000,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 19
      }
    }), ","));
  })), data.length !== 0 && __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.rating_wrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 11
    }
  }, __jsx(components_forms__WEBPACK_IMPORTED_MODULE_12__["RatingSlide"], {
    defaultRate: roundRating,
    withoutText: true,
    onChange: handleRatePhoto,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.commentReaction,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 8
    }
  }, __jsx(components_common_LoadingWrapper__WEBPACK_IMPORTED_MODULE_20__["default"], {
    loading: storage.loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.photo_header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 13
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
      lineNumber: 222,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.user_info,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.user_name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 15
    }
  }, ((_auth$user4 = auth.user) === null || _auth$user4 === void 0 ? void 0 : _auth$user4.firstName) + " " + ((_auth$user5 = auth.user) === null || _auth$user5 === void 0 ? void 0 : _auth$user5.lastName)))), __jsx("h3", {
    style: {
      marginBottom: 40
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 11
    }
  }, caption), __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.reactions_shares_status,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.reactions_status,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 13
    }
  }, likeData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Tooltip"], {
    placement: "bottom",
    title: getLikeActionUserInfo(likeData),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 17
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
      lineNumber: 240,
      columnNumber: 19
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 19
    }
  }, likeData.length))), hahaData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Tooltip"], {
    placement: "bottom",
    title: getLikeActionUserInfo(hahaData),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 17
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
      lineNumber: 246,
      columnNumber: 19
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 19
    }
  }, hahaData.length))), heartData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Tooltip"], {
    placement: "bottom",
    title: getLikeActionUserInfo(heartData),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 17
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
      lineNumber: 253,
      columnNumber: 19
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 19
    }
  }, heartData.length))), wowData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Tooltip"], {
    placement: "bottom",
    title: getLikeActionUserInfo(wowData),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 17
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
      lineNumber: 260,
      columnNumber: 19
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 19
    }
  }, wowData.length))), sadData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Tooltip"], {
    placement: "bottom",
    title: getLikeActionUserInfo(sadData),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 17
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
      lineNumber: 267,
      columnNumber: 19
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 19
    }
  }, sadData.length)))), shares && shares.length > 0 ? __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.shares_status,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 43
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Tooltip"], {
    placement: "top",
    title: 'Share',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 15
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_21__["FontAwesomeIcon"], {
    icon: ['far', 'share-square'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 19
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 19
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
      lineNumber: 280,
      columnNumber: 11
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
      lineNumber: 292,
      columnNumber: 11
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
      lineNumber: 336,
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
      lineNumber: 336,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlL1Bob3Rvc01vZGFsLmpzIl0sIm5hbWVzIjpbIlRleHRBcmVhIiwiSW5wdXQiLCJQaG90b3NNb2RhbCIsImRhdGEiLCJvblJhdGVQb3N0IiwicGhvdG9JbmRleCIsImxpa2VBY3Rpb24iLCJzaGFyZUFjdGlvbiIsImFjdGl2ZUltYWdlSWQiLCJhdXRoIiwicmVzdCIsInVzZVN0YXRlIiwic2xpZGVySW5kZXgiLCJzZXRTbGlkZXJJbmRleCIsInVzZUNvbnRleHQiLCJQaG90b3NDb250ZXh0Iiwic3RvcmFnZSIsImRpc3BhdGNoIiwibW9kYWxNb2RlIiwic2V0TW9kYWxNb2RlIiwiYWN0aXZlUG9zdElkIiwic2V0QWN0aXZlUG9zdElkIiwic2V0VGltZXN0YW1wIiwidXNlRWZmZWN0IiwiZ2V0UGhvdG8iLCJpIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsInNldExvYWRpbmciLCJpZCIsIkFQSSIsIm1ldGhvZCIsInVybCIsImhlYWRlcnMiLCJ0b2tlbiIsInJlcXVlc3QiLCJzdGF0dXMiLCJzZXRQaG90byIsImhhbmRsZU9uRHJhZ1N0YXJ0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2xpZGVOZXh0Iiwic3RhdGUiLCJzbGlkZVByZXYiLCJvblNsaWRlQ2hhbmdlZCIsIml0ZW0iLCJoYW5kbGVSYXRlUGhvdG8iLCJyYXRlIiwib25VcGRhdGVUaW1lbGluZSIsIm5ld0NvbW1lbnQiLCJjb21tZW50cyIsInBob3RvRGF0YSIsImFkZEVsZW1lbnQiLCJhY2NvdW50IiwidXNlciIsImxhc3RQaG90byIsImhhbmRsZVNob3dDb21tZW50TW9kYWwiLCJnZXRMaWtlQWN0aW9uVXNlckluZm8iLCJmaW5hbERhdGEiLCJtYXAiLCJpbmRleCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwib25Mb2FkIiwiRGF0ZSIsIm5vdyIsInJvdW5kUmF0aW5nIiwicmF0aW5nIiwiY2FwdGlvbiIsImNvbW1lbnRzQ291bnQiLCJyZWFjdGlvbnMiLCJzaGFyZXMiLCJ0eXBlIiwibGlrZURhdGEiLCJmaWx0ZXIiLCJyZWFjdGlvbiIsImhlYXJ0RGF0YSIsIndvd0RhdGEiLCJoYWhhRGF0YSIsInNhZERhdGEiLCJzdHlsZXMiLCJjb250YWluZXIiLCJhY3Rpb25zIiwicHJldl9hY3Rpb24iLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kIiwicGFkZGluZyIsIm9wYWNpdHkiLCJtYXJnaW5MZWZ0IiwibmV4dF9hY3Rpb24iLCJtYXJnaW5SaWdodCIsInBob3RvX2NvbnRhaW5lciIsInBob3RvIiwiYmxvYl90biIsInNyYyIsInJhdGluZ193cmFwcGVyIiwiY29tbWVudFJlYWN0aW9uIiwibG9hZGluZyIsInBob3RvX2hlYWRlciIsImF2YXRhciIsInByb2ZpbGVQaG90byIsInVzZXJuYW1lIiwidXNlcl9pbmZvIiwidXNlcl9uYW1lIiwibWFyZ2luQm90dG9tIiwicmVhY3Rpb25zX3NoYXJlc19zdGF0dXMiLCJyZWFjdGlvbnNfc3RhdHVzIiwiY3Vyc29yIiwic2hhcmVzX3N0YXR1cyIsInRlcm0iLCJkZWZhdWx0UHJvcHMiLCJMYXp5TG9hZGVyIiwicHJvcHMiLCJ0aW1lcklkIiwiZGVsYXkiLCJpc01vdW50ZWQiLCJzZXRNb3VudGVkIiwiaXNMb2FkaW5nIiwibG9hZEltYWdlIiwiaW1hZ2UiLCJJbWFnZSIsIm9ubG9hZCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJ3aWR0aCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtJQUNRQSxRLEdBQWFDLDJDLENBQWJELFE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR2UsU0FBU0UsV0FBVCxPQVNaO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxNQVJEQyxJQVFDLFFBUkRBLElBUUM7QUFBQSxNQVBEQyxVQU9DLFFBUERBLFVBT0M7QUFBQSxNQU5EQyxVQU1DLFFBTkRBLFVBTUM7QUFBQSxNQUxEQyxXQUtDLFFBTERBLFVBS0M7QUFBQSxNQUpEQyxZQUlDLFFBSkRBLFdBSUM7QUFBQSxNQUhEQyxhQUdDLFFBSERBLGFBR0M7QUFBQSxNQUZEQyxJQUVDLFFBRkRBLElBRUM7QUFBQSxNQURFQyxJQUNGOztBQUFBLGtCQUNxQ0Msc0RBQVEsQ0FBQyxDQUFELENBRDdDO0FBQUEsTUFDTUMsV0FETjtBQUFBLE1BQ21CQyxjQURuQjs7QUFBQSxvQkFFMkJDLHdEQUFVLENBQUNDLHFGQUFELENBRnJDO0FBQUEsTUFFTUMsT0FGTjtBQUFBLE1BRWVDLFFBRmY7O0FBQUEsbUJBR2lDTixzREFBUSxDQUFDLEtBQUQsQ0FIekM7QUFBQSxNQUdNTyxTQUhOO0FBQUEsTUFHaUJDLFlBSGpCOztBQUFBLG1CQUl1Q1Isc0RBQVEsQ0FBQyxJQUFELENBSi9DO0FBQUEsTUFJTVMsWUFKTjtBQUFBLE1BSW9CQyxlQUpwQjs7QUFBQSxtQkFLd0JWLHNEQUFRLENBQUMsQ0FBRCxDQUxoQztBQUFBLE1BS1FXLFlBTFI7O0FBUURDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxZQUFRLENBQUNaLFdBQUQsQ0FBUjtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBSUEsTUFBTVksUUFBUTtBQUFBLGlNQUFHLGlCQUFPQyxDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNmQyxxQkFBTyxDQUFDQyxHQUFSLENBQVl4QixJQUFaLEVBQWtCc0IsQ0FBbEI7O0FBRGUsb0JBRVp0QixJQUFJLENBQUN5QixNQUFMLElBQWUsQ0FGSDtBQUFBO0FBQUE7QUFBQTs7QUFHYlgsc0JBQVEsQ0FBQ1ksNkVBQVUsQ0FBQyxJQUFELENBQVgsQ0FBUjtBQUhhOztBQUFBO0FBQUEsb0JBT1osT0FBTzFCLElBQUksQ0FBQ3NCLENBQUQsQ0FBSixDQUFRSyxFQUFmLEtBQXNCLFdBUFY7QUFBQTtBQUFBO0FBQUE7O0FBUWJiLHNCQUFRLENBQUNZLDZFQUFVLENBQUMsSUFBRCxDQUFYLENBQVI7QUFSYTs7QUFBQTtBQUFBO0FBYWJaLHNCQUFRLENBQUNZLDZFQUFVLENBQUMsSUFBRCxDQUFYLENBQVI7QUFiYTtBQUFBLHFCQWNTRSw0REFBRyxDQUFDO0FBQ3hCQyxzQkFBTSxFQUFFLE1BRGdCO0FBRXhCQyxtQkFBRyxFQUFFLGFBRm1CO0FBR3hCOUIsb0JBQUksRUFBRTtBQUNKLHdCQUFNQSxJQUFJLENBQUNzQixDQUFELENBQUosQ0FBUUs7QUFEVixpQkFIa0I7QUFNeEJJLHVCQUFPLEVBQUU7QUFBRSw2QkFBV3pCLElBQUksQ0FBQzBCO0FBQWxCO0FBTmUsZUFBRCxDQWRaOztBQUFBO0FBY1BDLHFCQWRPO0FBc0JMQyxvQkF0QkssR0FzQk1ELE9BdEJOLENBc0JMQyxNQXRCSzs7QUF1QmIsa0JBQUlBLE1BQU0sS0FBSyxHQUFmLEVBQW9CO0FBQ2xCcEIsd0JBQVEsQ0FBQ3FCLDJFQUFRLENBQUNGLE9BQU8sQ0FBQ2pDLElBQVQsQ0FBVCxDQUFSO0FBQ0FjLHdCQUFRLENBQUNZLDZFQUFVLENBQUMsS0FBRCxDQUFYLENBQVI7QUFDRCxlQUhELE1BR08sSUFBSVEsTUFBTSxLQUFLLEdBQWYsRUFBb0I7QUFDekJYLHVCQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWjtBQUNELGVBRk0sTUFFQSxDQUVOOztBQTlCWTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWlDYkQscUJBQU8sQ0FBQ0MsR0FBUjs7QUFqQ2E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBUkgsUUFBUTtBQUFBO0FBQUE7QUFBQSxLQUFkOztBQXNDQSxNQUFNZSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLENBQUQ7QUFBQSxXQUFPQSxDQUFDLENBQUNDLGNBQUYsRUFBUDtBQUFBLEdBQTFCOztBQUVBLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsV0FBTTdCLGNBQWMsQ0FBQyxVQUFDOEIsS0FBRCxFQUFXO0FBQ2hELFVBQUd4QyxJQUFJLENBQUN5QixNQUFMLElBQWVlLEtBQUssR0FBRyxDQUExQixFQUE2QjtBQUMzQixlQUFPQSxLQUFQO0FBQ0QsT0FGRCxNQUVPO0FBQ0xuQixnQkFBUSxDQUFDbUIsS0FBSyxHQUFDLENBQVAsQ0FBUjtBQUNBLGVBQU9BLEtBQUssR0FBRyxDQUFmO0FBQ0Q7QUFDRixLQVBxQyxDQUFwQjtBQUFBLEdBQWxCOztBQVNBLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsV0FBTS9CLGNBQWMsQ0FBQyxVQUFDOEIsS0FBRCxFQUFXO0FBQ2hELFVBQUdBLEtBQUssSUFBSSxDQUFaLEVBQWU7QUFDYixlQUFPLENBQVA7QUFDRCxPQUZELE1BRU87QUFDTG5CLGdCQUFRLENBQUNtQixLQUFLLEdBQUMsQ0FBUCxDQUFSO0FBQ0EsZUFBT0EsS0FBSyxHQUFHLENBQWY7QUFDRDtBQUNGLEtBUHFDLENBQXBCO0FBQUEsR0FBbEI7O0FBU0EsTUFBTUUsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDTCxDQUFEO0FBQUEsV0FBTzNCLGNBQWMsQ0FBQzJCLENBQUMsQ0FBQ00sSUFBSCxDQUFyQjtBQUFBLEdBQXZCOztBQUVBLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsSUFBRCxFQUFVO0FBQ2hDLFFBQUcsT0FBTzdDLElBQUksQ0FBQ1MsV0FBRCxDQUFKLENBQWtCa0IsRUFBekIsS0FBZ0MsV0FBbkMsRUFBZ0Q7QUFDOUM7QUFDRDs7QUFDRDFCLGNBQVUsQ0FBQyxPQUFELEVBQVVELElBQUksQ0FBQ1MsV0FBRCxDQUFKLENBQWtCa0IsRUFBNUIsRUFBZ0NrQixJQUFoQyxDQUFWO0FBQ0QsR0FMRDs7QUFPQSxNQUFNQyxnQkFBZ0I7QUFBQSxpTUFBRyxrQkFBT0MsVUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZEMsc0JBRGMsR0FDRG5DLE9BQU8sQ0FBQ29DLFNBRFAsQ0FDZEQsUUFEYztBQUVuQkUsd0JBRm1CO0FBR3JCQyx1QkFBTyxFQUFFN0MsSUFBSSxDQUFDOEM7QUFITyxpQkFJbEJMLFVBQVUsQ0FBQ0MsUUFBWCxDQUFvQixDQUFwQixDQUprQjtBQU1uQkssdUJBTm1CLG1DQU1IeEMsT0FBTyxDQUFDb0MsU0FOTDtBQU1nQkQsd0JBQVEseUdBQU1BLFFBQU4sSUFBZ0JFLFVBQWhCO0FBTnhCO0FBT3ZCcEMsc0JBQVEsQ0FBQ3FCLDJFQUFRLENBQUNrQixTQUFELENBQVQsQ0FBUjs7QUFQdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBaEJQLGdCQUFnQjtBQUFBO0FBQUE7QUFBQSxLQUF0Qjs7QUFVQSxNQUFNUSxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLENBQUMzQixFQUFELEVBQVE7QUFDckNYLGdCQUFZLENBQUMsQ0FBQ0QsU0FBRixDQUFaO0FBQ0FHLG1CQUFlLENBQUNTLEVBQUQsQ0FBZjtBQUNELEdBSEQ7O0FBS0EsTUFBTTRCLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBQ3ZELElBQUQsRUFBVTtBQUN0QyxRQUFJd0QsU0FBUyxHQUFHLEVBQWhCO0FBQ0F4RCxRQUFJLENBQUN5RCxHQUFMLENBQVMsVUFBQ2QsSUFBRCxFQUFPZSxLQUFQLEVBQWlCO0FBQ3hCRixlQUFTLEdBQUdBLFNBQVMsR0FBRyxHQUFaLEdBQWtCYixJQUFJLENBQUNRLE9BQUwsQ0FBYVEsU0FBL0IsR0FBMkMsRUFBM0MsR0FBZ0RoQixJQUFJLENBQUNRLE9BQUwsQ0FBYVMsUUFBekU7QUFDRCxLQUZEO0FBR0EsV0FBT0osU0FBUDtBQUNELEdBTkQ7O0FBUUEsTUFBTUssTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxXQUFNMUMsWUFBWSxDQUFDMkMsSUFBSSxDQUFDQyxHQUFMLEVBQUQsQ0FBbEI7QUFBQSxHQUFmOztBQUVBLE1BQU1DLFdBQVcseUJBQUduRCxPQUFPLENBQUNvQyxTQUFYLHVEQUFHLG1CQUFtQmdCLE1BQXZDO0FBQ0EsTUFBTUMsT0FBTywwQkFBSXJELE9BQU8sQ0FBQ29DLFNBQVosd0RBQUksb0JBQW1CaUIsT0FBcEM7QUFDQSxNQUFNbEIsUUFBUSwwQkFBR25DLE9BQU8sQ0FBQ29DLFNBQVgsd0RBQUcsb0JBQW1CRCxRQUFwQztBQUNBLE1BQU1tQixhQUFhLDBCQUFHdEQsT0FBTyxDQUFDb0MsU0FBWCx3REFBRyxvQkFBbUJrQixhQUF6QztBQUNBLE1BQU1DLFNBQVMsMEJBQUd2RCxPQUFPLENBQUNvQyxTQUFYLHdEQUFHLG9CQUFtQm1CLFNBQXJDO0FBQ0EsTUFBTUMsTUFBTSwwQkFBR3hELE9BQU8sQ0FBQ29DLFNBQVgsd0RBQUcsb0JBQW1Cb0IsTUFBbEM7QUFDQSxNQUFNMUMsRUFBRSwwQkFBR2QsT0FBTyxDQUFDb0MsU0FBWCx3REFBRyxvQkFBbUJ0QixFQUE5QjtBQUNBLE1BQU0yQyxJQUFJLHdCQUFHdEUsSUFBSSxDQUFDUyxXQUFELENBQVAsc0RBQUcsa0JBQW1CNkQsSUFBaEM7QUFDQSxNQUFNQyxRQUFRLEdBQUdILFNBQVMsR0FBRUEsU0FBRixhQUFFQSxTQUFGLHVCQUFFQSxTQUFTLENBQUVJLE1BQVgsQ0FBa0IsVUFBQTdCLElBQUk7QUFBQSxXQUFJQSxJQUFJLENBQUM4QixRQUFMLElBQWlCLE1BQXJCO0FBQUEsR0FBdEIsQ0FBRixHQUFxRCxFQUEvRTtBQUNBLE1BQU1DLFNBQVMsR0FBSU4sU0FBUyxHQUFFQSxTQUFGLGFBQUVBLFNBQUYsdUJBQUVBLFNBQVMsQ0FBRUksTUFBWCxDQUFrQixVQUFBN0IsSUFBSTtBQUFBLFdBQUlBLElBQUksQ0FBQzhCLFFBQUwsSUFBaUIsT0FBckI7QUFBQSxHQUF0QixDQUFGLEdBQXNELEVBQWxGO0FBQ0EsTUFBTUUsT0FBTyxHQUFHUCxTQUFTLEdBQUdBLFNBQUgsYUFBR0EsU0FBSCx1QkFBR0EsU0FBUyxDQUFFSSxNQUFYLENBQWtCLFVBQUE3QixJQUFJO0FBQUEsV0FBSUEsSUFBSSxDQUFDOEIsUUFBTCxJQUFpQixLQUFyQjtBQUFBLEdBQXRCLENBQUgsR0FBcUQsRUFBOUU7QUFDQSxNQUFNRyxRQUFRLEdBQUdSLFNBQVMsR0FBR0EsU0FBSCxhQUFHQSxTQUFILHVCQUFHQSxTQUFTLENBQUVJLE1BQVgsQ0FBa0IsVUFBQTdCLElBQUk7QUFBQSxXQUFJQSxJQUFJLENBQUM4QixRQUFMLElBQWlCLE1BQXJCO0FBQUEsR0FBdEIsQ0FBSCxHQUFzRCxFQUFoRjtBQUNBLE1BQU1JLE9BQU8sR0FBR1QsU0FBUyxHQUFHQSxTQUFILGFBQUdBLFNBQUgsdUJBQUdBLFNBQVMsQ0FBRUksTUFBWCxDQUFrQixVQUFBN0IsSUFBSTtBQUFBLFdBQUlBLElBQUksQ0FBQzhCLFFBQUwsSUFBaUIsS0FBckI7QUFBQSxHQUF0QixDQUFILEdBQXFELEVBQTlFO0FBR0EsU0FDRSxNQUFDLDRFQUFELHlGQUF1QmxFLElBQXZCO0FBQThCLGdCQUFZLE1BQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFDRTtBQUFLLGFBQVMsRUFBRXVFLHVFQUFNLENBQUNDLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUQsdUVBQU0sQ0FBQ0UsT0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0RBQUQ7QUFDRSxhQUFTLEVBQUVGLHVFQUFNLENBQUNHLFdBRHBCO0FBRUUsV0FBTyxFQUFFO0FBQUEsYUFBTXhDLFNBQVMsRUFBZjtBQUFBLEtBRlg7QUFHRSxTQUFLLEVBQUU7QUFDTHlDLGtCQUFZLEVBQUUsRUFEVDtBQUVMQyxnQkFBVSxFQUFFLE9BRlA7QUFHTEMsYUFBTyxFQUFFLENBSEo7QUFJTEMsYUFBTyxFQUFFLEdBSko7QUFLTEMsZ0JBQVUsRUFBRTtBQUxQLEtBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBWUUsTUFBQyxnRUFBRDtBQUNFLGFBQVMsRUFBRVIsdUVBQU0sQ0FBQ1MsV0FEcEI7QUFFRSxXQUFPLEVBQUU7QUFBQSxhQUFNaEQsU0FBUyxFQUFmO0FBQUEsS0FGWDtBQUdFLFNBQUssRUFBRTtBQUNMMkMsa0JBQVksRUFBRSxFQURUO0FBRUxDLGdCQUFVLEVBQUUsT0FGUDtBQUdMQyxhQUFPLEVBQUUsQ0FISjtBQUlMQyxhQUFPLEVBQUUsR0FKSjtBQUtMRyxpQkFBVyxFQUFFO0FBTFIsS0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkYsQ0FERixFQXlCRSxNQUFDLDJEQUFEO0FBQ0Usd0JBQW9CLE1BRHRCO0FBRUUsZ0JBQVksTUFGZDtBQUdFLG1CQUFlLE1BSGpCO0FBSUUsZ0JBQVksRUFBRS9FLFdBSmhCO0FBS0Usa0JBQWMsRUFBRWlDLGNBTGxCO0FBTUUsWUFBUSxFQUFFLEtBTlosQ0FPRTtBQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FTRzFDLElBQUksQ0FBQ3lELEdBQUwsQ0FBUyxVQUFDZCxJQUFELEVBQU9lLEtBQVAsRUFBaUI7QUFDekIsV0FDRTtBQUFLLGVBQVMsRUFBRW9CLHVFQUFNLENBQUNXLGVBQXZCO0FBQXdDLFNBQUcsRUFBRS9CLEtBQTdDO0FBQW9ELG9CQUFZQSxLQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUVvQix1RUFBTSxDQUFDWSxLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxVQUFEO0FBQVksWUFBTSxFQUFFN0IsTUFBcEI7QUFBNEIsU0FBRyw2Q0FBdUMsQ0FBQWxCLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFZ0QsT0FBTixNQUFrQixJQUFuQixHQUEwQmhELElBQTFCLGFBQTBCQSxJQUExQix1QkFBMEJBLElBQUksQ0FBRWdELE9BQWhDLEdBQTBDaEQsSUFBMUMsYUFBMENBLElBQTFDLHVCQUEwQ0EsSUFBSSxDQUFFaUQsR0FBdEYsQ0FBL0I7QUFBNkgsV0FBSyxFQUFFLElBQXBJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixNQURGLENBREY7QUFhRCxHQWRBLENBVEgsQ0F6QkYsRUFtREc1RixJQUFJLENBQUN5QixNQUFMLEtBQWdCLENBQWhCLElBQ0M7QUFBSyxhQUFTLEVBQUVxRCx1RUFBTSxDQUFDZSxjQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2REFBRDtBQUNFLGVBQVcsRUFBRTdCLFdBRGY7QUFFRSxlQUFXLE1BRmI7QUFHRSxZQUFRLEVBQUVwQixlQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQXBESixDQURGLEVBZ0VHO0FBQUssYUFBUyxFQUFFa0MsdUVBQU0sQ0FBQ2dCLGVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLHlFQUFEO0FBQWdCLFdBQU8sRUFBRWpGLE9BQU8sQ0FBQ2tGLE9BQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRztBQUFLLGFBQVMsRUFBRWpCLHVFQUFNLENBQUNrQixZQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVsQix1RUFBTSxDQUFDbUIsTUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsaUVBQUQ7QUFDRSxRQUFJLEVBQUUsZUFBQTNGLElBQUksQ0FBQzhDLElBQUwsMERBQVdPLFNBQVgsSUFBdUIsR0FBdkIsbUJBQTZCckQsSUFBSSxDQUFDOEMsSUFBbEMsZ0RBQTZCLFlBQVdRLFFBQXhDLENBRFI7QUFFRSxPQUFHLFlBQUt0RCxJQUFJLENBQUM4QyxJQUFMLENBQVU4QyxZQUFWLENBQXVCTixHQUE1QixDQUZMO0FBR0UsUUFBSSxFQUFFLEVBSFI7QUFJRSxjQUFVLEVBQUUsQ0FKZDtBQUtFLFlBQVEsaUJBQUV0RixJQUFJLENBQUM4QyxJQUFQLGdEQUFFLFlBQVcrQyxRQUx2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQVVFO0FBQUssYUFBUyxFQUFFckIsdUVBQU0sQ0FBQ3NCLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBRXRCLHVFQUFNLENBQUN1QixTQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWlDLGdCQUFBL0YsSUFBSSxDQUFDOEMsSUFBTCw0REFBV08sU0FBWCxJQUF1QixHQUF2QixtQkFBNkJyRCxJQUFJLENBQUM4QyxJQUFsQyxnREFBNkIsWUFBV1EsUUFBeEMsQ0FBakMsQ0FERixDQVZGLENBREgsRUFnQkc7QUFBSSxTQUFLLEVBQUU7QUFBRTBDLGtCQUFZLEVBQUU7QUFBaEIsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWtDcEMsT0FBbEMsQ0FoQkgsRUFpQkc7QUFBSyxhQUFTLEVBQUVZLHVFQUFNLENBQUN5Qix1QkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFekIsdUVBQU0sQ0FBQzBCLGdCQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0lqQyxRQUFRLENBQUM5QyxNQUFULEdBQWtCLENBQWxCLElBQXVCLG1FQUN2QixNQUFDLDZDQUFEO0FBQVMsYUFBUyxFQUFDLFFBQW5CO0FBQTRCLFNBQUssRUFBRThCLHFCQUFxQixDQUFDZ0IsUUFBRCxDQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrRUFBRDtBQUFpQixRQUFJLEVBQUUsQ0FBQyxLQUFELEVBQVEsV0FBUixDQUF2QjtBQUE2QyxRQUFJLEVBQUMsSUFBbEQ7QUFBd0QsU0FBSyxFQUFFO0FBQUVrQyxZQUFNLEVBQUU7QUFBVixLQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU9sQyxRQUFRLENBQUM5QyxNQUFoQixDQUZGLENBRHVCLENBRDNCLEVBT0ltRCxRQUFRLENBQUNuRCxNQUFULEdBQWtCLENBQWxCLElBQXVCLG1FQUN2QixNQUFDLDZDQUFEO0FBQVMsYUFBUyxFQUFDLFFBQW5CO0FBQTRCLFNBQUssRUFBRThCLHFCQUFxQixDQUFDcUIsUUFBRCxDQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrRUFBRDtBQUFpQixRQUFJLEVBQUUsQ0FBQyxLQUFELEVBQVEsTUFBUixDQUF2QjtBQUF3QyxRQUFJLEVBQUMsSUFBN0M7QUFBbUQsU0FBSyxFQUFFO0FBQUU2QixZQUFNLEVBQUU7QUFBVixLQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU83QixRQUFRLENBQUNuRCxNQUFoQixDQUZGLENBRHVCLENBUDNCLEVBY0lpRCxTQUFTLENBQUNqRCxNQUFWLEdBQW1CLENBQW5CLElBQXdCLG1FQUN4QixNQUFDLDZDQUFEO0FBQVMsYUFBUyxFQUFDLFFBQW5CO0FBQTRCLFNBQUssRUFBRThCLHFCQUFxQixDQUFDbUIsU0FBRCxDQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrRUFBRDtBQUFpQixRQUFJLEVBQUUsQ0FBQyxLQUFELEVBQVEsT0FBUixDQUF2QjtBQUF5QyxRQUFJLEVBQUMsSUFBOUM7QUFBb0QsU0FBSyxFQUFFO0FBQUUrQixZQUFNLEVBQUU7QUFBVixLQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU8vQixTQUFTLENBQUNqRCxNQUFqQixDQUZGLENBRHdCLENBZDVCLEVBcUJJa0QsT0FBTyxDQUFDbEQsTUFBUixHQUFpQixDQUFqQixJQUFzQixtRUFDdEIsTUFBQyw2Q0FBRDtBQUFTLGFBQVMsRUFBQyxRQUFuQjtBQUE0QixTQUFLLEVBQUU4QixxQkFBcUIsQ0FBQ29CLE9BQUQsQ0FBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0VBQUQ7QUFBaUIsUUFBSSxFQUFFLENBQUMsS0FBRCxFQUFRLE9BQVIsQ0FBdkI7QUFBeUMsUUFBSSxFQUFDLElBQTlDO0FBQW9ELFNBQUssRUFBRTtBQUFFOEIsWUFBTSxFQUFFO0FBQVYsS0FBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPOUIsT0FBTyxDQUFDbEQsTUFBZixDQUZGLENBRHNCLENBckIxQixFQTRCSW9ELE9BQU8sQ0FBQ3BELE1BQVIsR0FBaUIsQ0FBakIsSUFBc0IsbUVBQ3RCLE1BQUMsNkNBQUQ7QUFBUyxhQUFTLEVBQUMsUUFBbkI7QUFBNEIsU0FBSyxFQUFFOEIscUJBQXFCLENBQUNzQixPQUFELENBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtFQUFEO0FBQWlCLFFBQUksRUFBRSxDQUFDLEtBQUQsRUFBUSxPQUFSLENBQXZCO0FBQXlDLFFBQUksRUFBQyxJQUE5QztBQUFvRCxTQUFLLEVBQUU7QUFBRTRCLFlBQU0sRUFBRTtBQUFWLEtBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTzVCLE9BQU8sQ0FBQ3BELE1BQWYsQ0FGRixDQURzQixDQTVCMUIsQ0FERixFQXFDRzRDLE1BQU0sSUFBSUEsTUFBTSxDQUFDNUMsTUFBUCxHQUFnQixDQUExQixHQUE2QjtBQUFLLGFBQVMsRUFBRXFELHVFQUFNLENBQUM0QixhQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQzVCLE1BQUMsNkNBQUQ7QUFBUyxhQUFTLEVBQUMsS0FBbkI7QUFBeUIsU0FBSyxFQUFFLE9BQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLCtFQUFEO0FBQWlCLFFBQUksRUFBRSxDQUFDLEtBQUQsRUFBUSxjQUFSLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT3JDLE1BQU0sQ0FBQzVDLE1BQWQsQ0FGSixDQUQ0QixDQUE3QixHQUtNLElBMUNULENBakJILEVBNkRHLE1BQUMsb0VBQUQ7QUFDRSxNQUFFLEVBQUVFLEVBRE47QUFFRSxRQUFJLEVBQUUyQyxJQUZSO0FBR0UsWUFBUSxFQUFFTixXQUhaO0FBSUUsWUFBUSxFQUFFaEIsUUFKWjtBQUtFLGlCQUFhLEVBQUVtQixhQUxqQjtBQU1FLGNBQVUsRUFBRWxFLFVBTmQ7QUFPRSxTQUFLLEVBQUVRLFdBUFQ7QUFRRSxjQUFVLEVBQUUsb0JBQUNrRyxJQUFEO0FBQUEsYUFBVXhHLFdBQVUsQ0FBQ21FLElBQUQsRUFBTzNDLEVBQVAsRUFBV2dGLElBQVgsQ0FBcEI7QUFBQSxLQVJkO0FBU0UsZUFBVyxFQUFFO0FBQUEsYUFBTXZHLFlBQVcsQ0FBQ2tFLElBQUQsRUFBTzNDLEVBQVAsQ0FBakI7QUFBQSxLQVRmO0FBVUUsV0FBTyxFQUFFLG1CQUFNO0FBQUUyQiw0QkFBc0IsQ0FBQzNCLEVBQUQsQ0FBdEI7QUFBNEIsS0FWL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTdESCxFQXlFRyxNQUFDLDJEQUFEO0FBQ0UsTUFBRSxFQUFFQSxFQUROO0FBRUUsUUFBSSxFQUFFMkMsSUFGUjtBQUdFLFFBQUksRUFBRXRCLFFBSFI7QUFJRSxvQkFBZ0IsRUFBRUYsZ0JBSnBCO0FBS0UsZ0JBQVksRUFBRTdCLFlBTGhCO0FBTUUsYUFBUyxFQUFFRixTQU5iO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF6RUgsQ0FEQSxDQWhFSCxDQURGO0FBdUpEOztHQXZSdUJoQixXOztLQUFBQSxXO0FBeVJ4QkEsV0FBVyxDQUFDNkcsWUFBWixHQUEyQjtBQUN6QjVHLE1BQUksRUFBRTtBQURtQixDQUEzQjs7QUFLQSxTQUFTNkcsVUFBVCxDQUFvQkMsS0FBcEIsRUFBMkI7QUFBQTs7QUFDekIsTUFBSUMsT0FBSjtBQUR5QixtQkFFZUQsS0FGZixDQUVqQmxCLEdBRmlCO0FBQUEsTUFFakJBLEdBRmlCLDJCQUVYLEVBRlc7QUFBQSxxQkFFZWtCLEtBRmYsQ0FFUEUsS0FGTztBQUFBLE1BRVBBLEtBRk8sNkJBRUMsQ0FGRDtBQUFBLE1BRUluRCxNQUZKLEdBRWVpRCxLQUZmLENBRUlqRCxNQUZKOztBQUFBLG1CQUdPckQsc0RBQVEsQ0FBQyxLQUFELENBSGY7QUFBQSxNQUdsQnlHLFNBSGtCO0FBQUEsTUFHUEMsVUFITzs7QUFBQSxtQkFJTzFHLHNEQUFRLENBQUMsSUFBRCxDQUpmO0FBQUEsTUFJbEIyRyxTQUprQjtBQUFBLE1BSVB6RixVQUpPOztBQU16QixXQUFTMEYsU0FBVCxHQUFxQjtBQUNqQixRQUFNQyxLQUFLLEdBQUcsSUFBSUMsS0FBSixFQUFkO0FBQ0FELFNBQUssQ0FBQ3pCLEdBQU4sR0FBWUEsR0FBWjs7QUFDQXlCLFNBQUssQ0FBQ0UsTUFBTixHQUFlLFlBQU07QUFDakI3RixnQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNBbUMsWUFBTTtBQUNULEtBSEQ7QUFJSDs7QUFFRHpDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUksQ0FBQzZGLFNBQUwsRUFBZ0I7QUFDZEMsZ0JBQVUsQ0FBQyxJQUFELENBQVY7QUFDQUYsV0FBSyxHQUFJRCxPQUFPLEdBQUdTLFVBQVUsQ0FBQ0osU0FBRCxFQUFZSixLQUFaLENBQXhCLEdBQThDSSxTQUFTLEVBQTVEO0FBQ0Q7O0FBQ0QsV0FBTztBQUFBLGFBQU1LLFlBQVksQ0FBQ1YsT0FBRCxDQUFsQjtBQUFBLEtBQVA7QUFDRCxHQU5RLEVBTU4sRUFOTSxDQUFUOztBQVFBLE1BQU0zRSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLENBQUQ7QUFBQSxXQUFPQSxDQUFDLENBQUNDLGNBQUYsRUFBUDtBQUFBLEdBQTFCOztBQUVBLFNBQU82RSxTQUFTLEdBQUcsTUFBQywwQ0FBRDtBQUFNLFFBQUksRUFBQyxPQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBSCxHQUEwQjtBQUFLLGVBQVcsRUFBRS9FLGlCQUFsQjtBQUFxQyxPQUFHLEVBQUV3RCxHQUExQztBQUFnRCxTQUFLLEVBQUU7QUFBRThCLFdBQUssRUFBRSxNQUFUO0FBQWlCQyxZQUFNLEVBQUU7QUFBekIsS0FBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUExQztBQUNEOztJQTFCUWQsVTs7TUFBQUEsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlcy9bdXNlcm5hbWVdLmNhNTA1MWM1OWU4ODc1NGIzZWE1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3RNb2RhbCBmcm9tICdyZWFjdC1tb2RhbCc7XHJcbmltcG9ydCBBbGljZUNhcm91c2VsIGZyb20gJ3JlYWN0LWFsaWNlLWNhcm91c2VsJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy9waG90b3NfbW9kYWwubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgUGhvdG9Nb2RhbFdyYXBwZXIgZnJvbSAnY29tcG9uZW50cy9jb21tb24vUGhvdG9Nb2RhbFdyYXBwZXInO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIExlZnRDaXJjbGVGaWxsZWQsXHJcbiAgUmlnaHRDaXJjbGVGaWxsZWQsXHJcbiAgTGVmdE91dGxpbmVkLFxyXG4gIFJpZ2h0T3V0bGluZWQsXHJcbn0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyBSYXRpbmdTbGlkZSB9IGZyb20gJ2NvbXBvbmVudHMvZm9ybXMnO1xyXG5pbXBvcnQgeyBJbnB1dCwgUG9wb3ZlciwgVG9vbHRpcCwgU3BpbiwgUmF0ZSB9IGZyb20gJ2FudGQnO1xyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuaW1wb3J0IEFQSSBmcm9tICdjb25maWdzL0FQSSc7XHJcbmltcG9ydCBDb21tZW50cyBmcm9tICcuLi90aW1lbGluZS9Db21tZW50cyc7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnY29tcG9uZW50cy9jb21tb24vQXZhdGFyJztcclxuaW1wb3J0IEFjdGlvbnMgZnJvbSAnY29tcG9uZW50cy90aW1lbGluZS9BY3Rpb25zJztcclxuaW1wb3J0IHsgUGhvdG9zQ29udGV4dCB9IGZyb20gJ2NvbnRhaW5lcnMvUGhvdG9zL3N0b3JhZ2UvUGhvdG9Db250ZXh0JztcclxuaW1wb3J0IHsgc2V0UGhvdG8sIHNldExvYWRpbmcgfSBmcm9tICdjb250YWluZXJzL1Bob3Rvcy9hY3Rpb25zJztcclxuaW1wb3J0IExvYWRpbmdXcmFwcGVyIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL0xvYWRpbmdXcmFwcGVyJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQaG90b3NNb2RhbCh7IFxyXG4gIGRhdGEsIFxyXG4gIG9uUmF0ZVBvc3QsIFxyXG4gIHBob3RvSW5kZXgsIFxyXG4gIGxpa2VBY3Rpb24sIFxyXG4gIHNoYXJlQWN0aW9uLCBcclxuICBhY3RpdmVJbWFnZUlkLFxyXG4gIGF1dGgsIFxyXG4gIC4uLnJlc3QgXHJcbn0pIHtcclxuICBjb25zdCBbc2xpZGVySW5kZXgsIHNldFNsaWRlckluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtzdG9yYWdlLCBkaXNwYXRjaF0gPSB1c2VDb250ZXh0KFBob3Rvc0NvbnRleHQpO1xyXG4gIGNvbnN0IFttb2RhbE1vZGUsIHNldE1vZGFsTW9kZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2FjdGl2ZVBvc3RJZCwgc2V0QWN0aXZlUG9zdElkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFssIHNldFRpbWVzdGFtcF0gPSB1c2VTdGF0ZSgwKTtcclxuICBcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldFBob3RvKHNsaWRlckluZGV4KTtcclxuICB9LCBbXSk7XHJcbiBcclxuICBjb25zdCBnZXRQaG90byA9IGFzeW5jIChpKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhLCBpKVxyXG4gICAgaWYoZGF0YS5sZW5ndGggPT0gMCkge1xyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKHRydWUpKVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYodHlwZW9mIGRhdGFbaV0uaWQgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcodHJ1ZSkpXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlKSlcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsOiAnL3Bob3Rvcy9nZXQnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIFwiaWRcIjogZGF0YVtpXS5pZCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goc2V0UGhvdG8ocmVxdWVzdC5kYXRhKSlcclxuICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSlcclxuICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IDQwMykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdQbGVhc2UgcmVmcmVzaCB0b2tlbiEnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBcclxuICAgICAgfVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICBcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9uRHJhZ1N0YXJ0ID0gKGUpID0+IGUucHJldmVudERlZmF1bHQoKTtcclxuICBcclxuICBjb25zdCBzbGlkZU5leHQgPSAoKSA9PiBzZXRTbGlkZXJJbmRleCgoc3RhdGUpID0+IHsgXHJcbiAgICBpZihkYXRhLmxlbmd0aCA8PSBzdGF0ZSArIDEpIHtcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZ2V0UGhvdG8oc3RhdGUrMSk7XHJcbiAgICAgIHJldHVybiBzdGF0ZSArIDE7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgXHJcbiAgY29uc3Qgc2xpZGVQcmV2ID0gKCkgPT4gc2V0U2xpZGVySW5kZXgoKHN0YXRlKSA9PiB7XHJcbiAgICBpZihzdGF0ZSA8PSAwKSB7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZ2V0UGhvdG8oc3RhdGUtMSk7XHJcbiAgICAgIHJldHVybiBzdGF0ZSAtIDE7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgXHJcbiAgY29uc3Qgb25TbGlkZUNoYW5nZWQgPSAoZSkgPT4gc2V0U2xpZGVySW5kZXgoZS5pdGVtKTtcclxuICBcclxuICBjb25zdCBoYW5kbGVSYXRlUGhvdG8gPSAocmF0ZSkgPT4ge1xyXG4gICAgaWYodHlwZW9mIGRhdGFbc2xpZGVySW5kZXhdLmlkID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBvblJhdGVQb3N0KCdQaG90bycsIGRhdGFbc2xpZGVySW5kZXhdLmlkLCByYXRlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvblVwZGF0ZVRpbWVsaW5lID0gYXN5bmMgKG5ld0NvbW1lbnQpID0+IHtcclxuICAgIGNvbnN0ICB7IGNvbW1lbnRzIH0gPSBzdG9yYWdlLnBob3RvRGF0YTtcclxuICAgIGxldCBhZGRFbGVtZW50ID0ge1xyXG4gICAgICBhY2NvdW50OiBhdXRoLnVzZXIsIFxyXG4gICAgICAuLi5uZXdDb21tZW50LmNvbW1lbnRzWzBdXHJcbiAgICB9XHJcbiAgICB2YXIgbGFzdFBob3RvID0gey4uLnN0b3JhZ2UucGhvdG9EYXRhLCBjb21tZW50czogWy4uLmNvbW1lbnRzLCBhZGRFbGVtZW50XX07XHJcbiAgICBkaXNwYXRjaChzZXRQaG90byhsYXN0UGhvdG8pKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNob3dDb21tZW50TW9kYWwgPSAoaWQpID0+IHtcclxuICAgIHNldE1vZGFsTW9kZSghbW9kYWxNb2RlKTtcclxuICAgIHNldEFjdGl2ZVBvc3RJZChpZCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0TGlrZUFjdGlvblVzZXJJbmZvID0gKGRhdGEpID0+IHtcclxuICAgIHZhciBmaW5hbERhdGEgPSAnJztcclxuICAgIGRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICBmaW5hbERhdGEgPSBmaW5hbERhdGEgKyAnICcgKyBpdGVtLmFjY291bnQuZmlyc3ROYW1lICsgJycgKyBpdGVtLmFjY291bnQubGFzdE5hbWUgO1xyXG4gICAgfSlcclxuICAgIHJldHVybiBmaW5hbERhdGE7XHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkxvYWQgPSAoKSA9PiBzZXRUaW1lc3RhbXAoRGF0ZS5ub3coKSk7XHJcblxyXG4gIGNvbnN0IHJvdW5kUmF0aW5nID0gc3RvcmFnZS5waG90b0RhdGE/LnJhdGluZztcclxuICBjb25zdCBjYXB0aW9uID0gIHN0b3JhZ2UucGhvdG9EYXRhPy5jYXB0aW9uO1xyXG4gIGNvbnN0IGNvbW1lbnRzID0gc3RvcmFnZS5waG90b0RhdGE/LmNvbW1lbnRzO1xyXG4gIGNvbnN0IGNvbW1lbnRzQ291bnQgPSBzdG9yYWdlLnBob3RvRGF0YT8uY29tbWVudHNDb3VudDtcclxuICBjb25zdCByZWFjdGlvbnMgPSBzdG9yYWdlLnBob3RvRGF0YT8ucmVhY3Rpb25zO1xyXG4gIGNvbnN0IHNoYXJlcyA9IHN0b3JhZ2UucGhvdG9EYXRhPy5zaGFyZXM7XHJcbiAgY29uc3QgaWQgPSBzdG9yYWdlLnBob3RvRGF0YT8uaWQ7XHJcbiAgY29uc3QgdHlwZSA9IGRhdGFbc2xpZGVySW5kZXhdPy50eXBlO1xyXG4gIGNvbnN0IGxpa2VEYXRhID0gcmVhY3Rpb25zPyByZWFjdGlvbnM/LmZpbHRlcihpdGVtID0+IGl0ZW0ucmVhY3Rpb24gPT0gJ0xJS0UnKTpbXTtcclxuICBjb25zdCBoZWFydERhdGEgPSAgcmVhY3Rpb25zPyByZWFjdGlvbnM/LmZpbHRlcihpdGVtID0+IGl0ZW0ucmVhY3Rpb24gPT0gJ0hFQVJUJyk6W107XHJcbiAgY29uc3Qgd293RGF0YSA9IHJlYWN0aW9ucyA/IHJlYWN0aW9ucz8uZmlsdGVyKGl0ZW0gPT4gaXRlbS5yZWFjdGlvbiA9PSAnV09XJyk6W107XHJcbiAgY29uc3QgaGFoYURhdGEgPSByZWFjdGlvbnMgPyByZWFjdGlvbnM/LmZpbHRlcihpdGVtID0+IGl0ZW0ucmVhY3Rpb24gPT0gJ0hBSEEnKTpbXTtcclxuICBjb25zdCBzYWREYXRhID0gcmVhY3Rpb25zID8gcmVhY3Rpb25zPy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlYWN0aW9uID09ICdTQUQnKTpbXTtcclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQaG90b01vZGFsV3JhcHBlciB7Li4ucmVzdCB9IHByb2ZpbGVQaG90bz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uc30+XHJcbiAgICAgICAgICA8TGVmdE91dGxpbmVkXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnByZXZfYWN0aW9ufVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzbGlkZVByZXYoKX1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDI1LFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdibGFjaycsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogOCxcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjYsXHJcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdDogMTVcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8UmlnaHRPdXRsaW5lZFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5uZXh0X2FjdGlvbn1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2xpZGVOZXh0KCl9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyNSxcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnYmxhY2snLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDgsXHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC42LFxyXG4gICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAxNVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8QWxpY2VDYXJvdXNlbFxyXG4gICAgICAgICAgbW91c2VUcmFja2luZ0VuYWJsZWRcclxuICAgICAgICAgIGRvdHNEaXNhYmxlZFxyXG4gICAgICAgICAgYnV0dG9uc0Rpc2FibGVkXHJcbiAgICAgICAgICBzbGlkZVRvSW5kZXg9e3NsaWRlckluZGV4fVxyXG4gICAgICAgICAgb25TbGlkZUNoYW5nZWQ9e29uU2xpZGVDaGFuZ2VkfVxyXG4gICAgICAgICAgaW5maW5pdGU9e2ZhbHNlfVxyXG4gICAgICAgICAgLy8gYXV0b0hlaWdodCAgXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4geyBcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBob3RvX2NvbnRhaW5lcn0ga2V5PXtpbmRleH0gZGF0YS12YWx1ZT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5waG90b30+XHJcbiAgICAgICAgICAgICAgICAgIDxMYXp5TG9hZGVyIG9uTG9hZD17b25Mb2FkfSBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8keyhpdGVtPy5ibG9iX3RuICE9PSBudWxsKT8oaXRlbT8uYmxvYl90bik6KGl0ZW0/LnNyYyl9YH0gZGVsYXk9ezEwMDB9Lz4sXHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgb25EcmFnU3RhcnQ9e2hhbmRsZU9uRHJhZ1N0YXJ0fVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7KGl0ZW0/LmJsb2JfdG4gIT09IG51bGwpPyhpdGVtPy5ibG9iX3RuKTooaXRlbT8uc3JjKX1gfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L0FsaWNlQ2Fyb3VzZWw+XHJcbiAgICAgICAgXHJcbiAgICAgICAge2RhdGEubGVuZ3RoICE9PSAwICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmF0aW5nX3dyYXBwZXJ9PlxyXG4gICAgICAgICAgICA8UmF0aW5nU2xpZGVcclxuICAgICAgICAgICAgICBkZWZhdWx0UmF0ZT17cm91bmRSYXRpbmd9XHJcbiAgICAgICAgICAgICAgd2l0aG91dFRleHRcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUmF0ZVBob3RvfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgey8qIDxzcGFuPntyb3VuZFJhdGluZ308L3NwYW4+ICovfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnRSZWFjdGlvbn0+XHJcbiAgICAgICA8TG9hZGluZ1dyYXBwZXIgbG9hZGluZz17c3RvcmFnZS5sb2FkaW5nfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9faGVhZGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9PlxyXG4gICAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICAgIHRleHQ9e2F1dGgudXNlcj8uZmlyc3ROYW1lICsgXCIgXCIgKyBhdXRoLnVzZXI/Lmxhc3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgdXJsPXtgJHthdXRoLnVzZXIucHJvZmlsZVBob3RvLnNyY31gfVxyXG4gICAgICAgICAgICAgICAgc2l6ZT17NjB9XHJcbiAgICAgICAgICAgICAgICBib3JkZXJTaXplPXszfVxyXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU9e2F1dGgudXNlcj8udXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcl9pbmZvfT5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy51c2VyX25hbWV9PnthdXRoLnVzZXI/LmZpcnN0TmFtZSArIFwiIFwiICsgYXV0aC51c2VyPy5sYXN0TmFtZX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICBcclxuICAgICAgICAgIDxoMyBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDQwIH19PntjYXB0aW9ufTwvaDM+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlYWN0aW9uc19zaGFyZXNfc3RhdHVzfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZWFjdGlvbnNfc3RhdHVzfT5cclxuICAgICAgICAgICAgICB7IGxpa2VEYXRhLmxlbmd0aCA+IDAgJiYgPD5cclxuICAgICAgICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPXtnZXRMaWtlQWN0aW9uVXNlckluZm8obGlrZURhdGEpfT5cclxuICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICd0aHVtYnMtdXAnXX0gc2l6ZT1cIjF4XCIgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInfX0vPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj57bGlrZURhdGEubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvVG9vbHRpcD48Lz5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgeyBoYWhhRGF0YS5sZW5ndGggPiAwICYmIDw+XHJcbiAgICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKGhhaGFEYXRhKX0+XHJcbiAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAnZ3JpbiddfSBzaXplPVwiMXhcIiAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcid9fS8+IFxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj57aGFoYURhdGEubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB7IGhlYXJ0RGF0YS5sZW5ndGggPiAwICYmIDw+IFxyXG4gICAgICAgICAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9e2dldExpa2VBY3Rpb25Vc2VySW5mbyhoZWFydERhdGEpfT5cclxuICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdoZWFydCddfSBzaXplPVwiMXhcIiAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcid9fS8+IFxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj57aGVhcnREYXRhLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgeyB3b3dEYXRhLmxlbmd0aCA+IDAgJiYgPD4gXHJcbiAgICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKHdvd0RhdGEpfT5cclxuICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdsYXVnaCddfSBzaXplPVwiMXhcIiAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcid9fS8+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPnt3b3dEYXRhLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICA8Lz4gXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHsgc2FkRGF0YS5sZW5ndGggPiAwICYmIDw+XHJcbiAgICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKHNhZERhdGEpfT5cclxuICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdmcm93biddfSBzaXplPVwiMXhcIiAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcid9fS8+IFxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj57c2FkRGF0YS5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3NoYXJlcyAmJiBzaGFyZXMubGVuZ3RoID4gMCA/PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaGFyZXNfc3RhdHVzfT5cclxuICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJ0b3BcIiB0aXRsZT17J1NoYXJlJ30+XHJcbiAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAnc2hhcmUtc3F1YXJlJ119Lz5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+e3NoYXJlcy5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgPC9kaXY+Om51bGx9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxBY3Rpb25zXHJcbiAgICAgICAgICAgIGlkPXtpZH1cclxuICAgICAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICAgICAgcG9zdFJhdGU9e3JvdW5kUmF0aW5nfVxyXG4gICAgICAgICAgICBjb21tZW50cz17Y29tbWVudHN9XHJcbiAgICAgICAgICAgIGNvbW1lbnRzQ291bnQ9e2NvbW1lbnRzQ291bnR9XHJcbiAgICAgICAgICAgIG9uUmF0ZVBvc3Q9e29uUmF0ZVBvc3R9XHJcbiAgICAgICAgICAgIGluZGV4PXtzbGlkZXJJbmRleH1cclxuICAgICAgICAgICAgbGlrZUFjdGlvbj17KHRlcm0pID0+IGxpa2VBY3Rpb24odHlwZSwgaWQsIHRlcm0pfVxyXG4gICAgICAgICAgICBzaGFyZUFjdGlvbj17KCkgPT4gc2hhcmVBY3Rpb24odHlwZSwgaWQpfVxyXG4gICAgICAgICAgICBhY3Rpb25zPXsoKSA9PiB7IGhhbmRsZVNob3dDb21tZW50TW9kYWwoaWQpIH0gfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxDb21tZW50c1xyXG4gICAgICAgICAgICBpZD17aWR9XHJcbiAgICAgICAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgICAgICAgIGRhdGE9e2NvbW1lbnRzfVxyXG4gICAgICAgICAgICBvblVwZGF0ZVRpbWVsaW5lPXtvblVwZGF0ZVRpbWVsaW5lfVxyXG4gICAgICAgICAgICBhY3RpdmVQb3N0SWQ9e2FjdGl2ZVBvc3RJZH1cclxuICAgICAgICAgICAgbW9kYWxNb2RlPXttb2RhbE1vZGV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTG9hZGluZ1dyYXBwZXI+XHJcbiAgICAgICA8L2Rpdj5cclxuICAgIDwvUGhvdG9Nb2RhbFdyYXBwZXI+XHJcbiAgKTtcclxufVxyXG5cclxuUGhvdG9zTW9kYWwuZGVmYXVsdFByb3BzID0ge1xyXG4gIGRhdGE6IFtdLFxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gTGF6eUxvYWRlcihwcm9wcykge1xyXG4gIGxldCB0aW1lcklkO1xyXG4gIGNvbnN0IHsgc3JjID0gJycsIGRlbGF5ID0gMCwgb25Mb2FkIH0gPSBwcm9wcztcclxuICBjb25zdCBbaXNNb3VudGVkLCBzZXRNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBmdW5jdGlvbiBsb2FkSW1hZ2UoKSB7XHJcbiAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgIGltYWdlLnNyYyA9IHNyYztcclxuICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICBvbkxvYWQoKTtcclxuICAgICAgfTtcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWlzTW91bnRlZCkge1xyXG4gICAgICBzZXRNb3VudGVkKHRydWUpO1xyXG4gICAgICBkZWxheSA/ICh0aW1lcklkID0gc2V0VGltZW91dChsb2FkSW1hZ2UsIGRlbGF5KSkgOiBsb2FkSW1hZ2UoKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXJJZCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVPbkRyYWdTdGFydCA9IChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIHJldHVybiBpc0xvYWRpbmcgPyA8U3BpbiBzaXplPVwibGFyZ2VcIi8+IDogPGltZyBvbkRyYWdTdGFydD17aGFuZGxlT25EcmFnU3RhcnR9IHNyYz17c3JjfSAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScgfX0vPjtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=