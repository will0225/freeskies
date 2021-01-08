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
    console.log(activeImageId);
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
  console.log(data);
  return __jsx(components_common_PhotoModalWrapper__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, {
    profilePhoto: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.actions,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
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
      lineNumber: 150,
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
      lineNumber: 161,
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
      lineNumber: 173,
      columnNumber: 9
    }
  }, data.map(function (item, index) {
    if (item.src === activeImageId) {
      return __jsx("div", {
        className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.photo_container,
        key: index,
        "data-value": index,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.photo,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 15
        }
      }, __jsx(LazyLoader, {
        onLoad: onLoad,
        src: "https://www.freeskies.com/static/".concat((item === null || item === void 0 ? void 0 : item.blob_tn) !== null ? item === null || item === void 0 ? void 0 : item.blob_tn : item === null || item === void 0 ? void 0 : item.src),
        delay: 1000,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 17
        }
      }), ","));
    }
  })), data.length !== 0 && __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.rating_wrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 11
    }
  }, __jsx(components_forms__WEBPACK_IMPORTED_MODULE_12__["RatingSlide"], {
    defaultRate: roundRating,
    withoutText: true,
    onChange: handleRatePhoto,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.commentReaction,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 8
    }
  }, __jsx(components_common_LoadingWrapper__WEBPACK_IMPORTED_MODULE_20__["default"], {
    loading: storage.loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.photo_header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
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
      lineNumber: 215,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.user_info,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.user_name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 13
    }
  }, ((_auth$user4 = auth.user) === null || _auth$user4 === void 0 ? void 0 : _auth$user4.firstName) + " " + ((_auth$user5 = auth.user) === null || _auth$user5 === void 0 ? void 0 : _auth$user5.lastName)))), __jsx("h3", {
    style: {
      marginBottom: 40
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 9
    }
  }, caption), __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.reactions_shares_status,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.reactions_status,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 11
    }
  }, likeData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Tooltip"], {
    placement: "bottom",
    title: getLikeActionUserInfo(likeData),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
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
      lineNumber: 233,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 17
    }
  }, likeData.length))), hahaData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Tooltip"], {
    placement: "bottom",
    title: getLikeActionUserInfo(hahaData),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
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
      lineNumber: 239,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 17
    }
  }, hahaData.length))), heartData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Tooltip"], {
    placement: "bottom",
    title: getLikeActionUserInfo(heartData),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
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
      lineNumber: 246,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 17
    }
  }, heartData.length))), wowData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Tooltip"], {
    placement: "bottom",
    title: getLikeActionUserInfo(wowData),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
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
      lineNumber: 253,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 17
    }
  }, wowData.length))), sadData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Tooltip"], {
    placement: "bottom",
    title: getLikeActionUserInfo(sadData),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
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
      lineNumber: 260,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 17
    }
  }, sadData.length)))), shares && shares.length > 0 ? __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.shares_status,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 41
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Tooltip"], {
    placement: "top",
    title: 'Share',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_21__["FontAwesomeIcon"], {
    icon: ['far', 'share-square'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
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
      lineNumber: 273,
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
      lineNumber: 285,
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
      lineNumber: 329,
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
      lineNumber: 329,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlL1Bob3Rvc01vZGFsLmpzIl0sIm5hbWVzIjpbIlRleHRBcmVhIiwiSW5wdXQiLCJQaG90b3NNb2RhbCIsImRhdGEiLCJvblJhdGVQb3N0IiwicGhvdG9JbmRleCIsImxpa2VBY3Rpb24iLCJzaGFyZUFjdGlvbiIsImFjdGl2ZUltYWdlSWQiLCJhdXRoIiwicmVzdCIsInVzZVN0YXRlIiwic2xpZGVySW5kZXgiLCJzZXRTbGlkZXJJbmRleCIsInVzZUNvbnRleHQiLCJQaG90b3NDb250ZXh0Iiwic3RvcmFnZSIsImRpc3BhdGNoIiwibW9kYWxNb2RlIiwic2V0TW9kYWxNb2RlIiwiYWN0aXZlUG9zdElkIiwic2V0QWN0aXZlUG9zdElkIiwic2V0VGltZXN0YW1wIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImdldFBob3RvIiwiaSIsImxlbmd0aCIsInNldExvYWRpbmciLCJpZCIsIkFQSSIsIm1ldGhvZCIsInVybCIsImhlYWRlcnMiLCJ0b2tlbiIsInJlcXVlc3QiLCJzdGF0dXMiLCJzZXRQaG90byIsImhhbmRsZU9uRHJhZ1N0YXJ0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2xpZGVOZXh0Iiwic3RhdGUiLCJzbGlkZVByZXYiLCJvblNsaWRlQ2hhbmdlZCIsIml0ZW0iLCJoYW5kbGVSYXRlUGhvdG8iLCJyYXRlIiwib25VcGRhdGVUaW1lbGluZSIsIm5ld0NvbW1lbnQiLCJjb21tZW50cyIsInBob3RvRGF0YSIsImFkZEVsZW1lbnQiLCJhY2NvdW50IiwidXNlciIsImxhc3RQaG90byIsImhhbmRsZVNob3dDb21tZW50TW9kYWwiLCJnZXRMaWtlQWN0aW9uVXNlckluZm8iLCJmaW5hbERhdGEiLCJtYXAiLCJpbmRleCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwib25Mb2FkIiwiRGF0ZSIsIm5vdyIsInJvdW5kUmF0aW5nIiwicmF0aW5nIiwiY2FwdGlvbiIsImNvbW1lbnRzQ291bnQiLCJyZWFjdGlvbnMiLCJzaGFyZXMiLCJ0eXBlIiwibGlrZURhdGEiLCJmaWx0ZXIiLCJyZWFjdGlvbiIsImhlYXJ0RGF0YSIsIndvd0RhdGEiLCJoYWhhRGF0YSIsInNhZERhdGEiLCJzdHlsZXMiLCJjb250YWluZXIiLCJhY3Rpb25zIiwicHJldl9hY3Rpb24iLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kIiwicGFkZGluZyIsIm9wYWNpdHkiLCJtYXJnaW5MZWZ0IiwibmV4dF9hY3Rpb24iLCJtYXJnaW5SaWdodCIsInNyYyIsInBob3RvX2NvbnRhaW5lciIsInBob3RvIiwiYmxvYl90biIsInJhdGluZ193cmFwcGVyIiwiY29tbWVudFJlYWN0aW9uIiwibG9hZGluZyIsInBob3RvX2hlYWRlciIsImF2YXRhciIsInByb2ZpbGVQaG90byIsInVzZXJuYW1lIiwidXNlcl9pbmZvIiwidXNlcl9uYW1lIiwibWFyZ2luQm90dG9tIiwicmVhY3Rpb25zX3NoYXJlc19zdGF0dXMiLCJyZWFjdGlvbnNfc3RhdHVzIiwiY3Vyc29yIiwic2hhcmVzX3N0YXR1cyIsInRlcm0iLCJkZWZhdWx0UHJvcHMiLCJMYXp5TG9hZGVyIiwicHJvcHMiLCJ0aW1lcklkIiwiZGVsYXkiLCJpc01vdW50ZWQiLCJzZXRNb3VudGVkIiwiaXNMb2FkaW5nIiwibG9hZEltYWdlIiwiaW1hZ2UiLCJJbWFnZSIsIm9ubG9hZCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJ3aWR0aCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtJQUNRQSxRLEdBQWFDLDJDLENBQWJELFE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR2UsU0FBU0UsV0FBVCxPQVNaO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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QUFLLEdBQUlELE9BQU8sR0FBR1MsVUFBVSxDQUFDSixTQUFELEVBQVlKLEtBQVosQ0FBeEIsR0FBOENJLFNBQVMsRUFBNUQ7QUFDRDs7QUFDRCxXQUFPO0FBQUEsYUFBTUssWUFBWSxDQUFDVixPQUFELENBQWxCO0FBQUEsS0FBUDtBQUNELEdBTlEsRUFNTixFQU5NLENBQVQ7O0FBUUEsTUFBTTNFLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsQ0FBRDtBQUFBLFdBQU9BLENBQUMsQ0FBQ0MsY0FBRixFQUFQO0FBQUEsR0FBMUI7O0FBRUEsU0FBTzZFLFNBQVMsR0FBRyxNQUFDLDBDQUFEO0FBQU0sUUFBSSxFQUFDLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFILEdBQTBCO0FBQUssZUFBVyxFQUFFL0UsaUJBQWxCO0FBQXFDLE9BQUcsRUFBRXFELEdBQTFDO0FBQWdELFNBQUssRUFBRTtBQUFFaUMsV0FBSyxFQUFFLE1BQVQ7QUFBaUJDLFlBQU0sRUFBRTtBQUF6QixLQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQTFDO0FBQ0Q7O0lBMUJRZCxVOztNQUFBQSxVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3RpbWVsaW5lLmFiNjNiYzIwMGUwY2IzMTFjZjk1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3RNb2RhbCBmcm9tICdyZWFjdC1tb2RhbCc7XHJcbmltcG9ydCBBbGljZUNhcm91c2VsIGZyb20gJ3JlYWN0LWFsaWNlLWNhcm91c2VsJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy9waG90b3NfbW9kYWwubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgUGhvdG9Nb2RhbFdyYXBwZXIgZnJvbSAnY29tcG9uZW50cy9jb21tb24vUGhvdG9Nb2RhbFdyYXBwZXInO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIExlZnRDaXJjbGVGaWxsZWQsXHJcbiAgUmlnaHRDaXJjbGVGaWxsZWQsXHJcbiAgTGVmdE91dGxpbmVkLFxyXG4gIFJpZ2h0T3V0bGluZWQsXHJcbn0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyBSYXRpbmdTbGlkZSB9IGZyb20gJ2NvbXBvbmVudHMvZm9ybXMnO1xyXG5pbXBvcnQgeyBJbnB1dCwgUG9wb3ZlciwgVG9vbHRpcCwgU3BpbiwgUmF0ZSB9IGZyb20gJ2FudGQnO1xyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuaW1wb3J0IEFQSSBmcm9tICdjb25maWdzL0FQSSc7XHJcbmltcG9ydCBDb21tZW50cyBmcm9tICcuLi90aW1lbGluZS9Db21tZW50cyc7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnY29tcG9uZW50cy9jb21tb24vQXZhdGFyJztcclxuaW1wb3J0IEFjdGlvbnMgZnJvbSAnY29tcG9uZW50cy90aW1lbGluZS9BY3Rpb25zJztcclxuaW1wb3J0IHsgUGhvdG9zQ29udGV4dCB9IGZyb20gJ2NvbnRhaW5lcnMvUGhvdG9zL3N0b3JhZ2UvUGhvdG9Db250ZXh0JztcclxuaW1wb3J0IHsgc2V0UGhvdG8sIHNldExvYWRpbmcgfSBmcm9tICdjb250YWluZXJzL1Bob3Rvcy9hY3Rpb25zJztcclxuaW1wb3J0IExvYWRpbmdXcmFwcGVyIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL0xvYWRpbmdXcmFwcGVyJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQaG90b3NNb2RhbCh7IFxyXG4gIGRhdGEsIFxyXG4gIG9uUmF0ZVBvc3QsIFxyXG4gIHBob3RvSW5kZXgsIFxyXG4gIGxpa2VBY3Rpb24sIFxyXG4gIHNoYXJlQWN0aW9uLCBcclxuICBhY3RpdmVJbWFnZUlkLFxyXG4gIGF1dGgsIFxyXG4gIC4uLnJlc3QgXHJcbn0pIHtcclxuICBjb25zdCBbc2xpZGVySW5kZXgsIHNldFNsaWRlckluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtzdG9yYWdlLCBkaXNwYXRjaF0gPSB1c2VDb250ZXh0KFBob3Rvc0NvbnRleHQpO1xyXG4gIGNvbnN0IFttb2RhbE1vZGUsIHNldE1vZGFsTW9kZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2FjdGl2ZVBvc3RJZCwgc2V0QWN0aXZlUG9zdElkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFssIHNldFRpbWVzdGFtcF0gPSB1c2VTdGF0ZSgwKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYWN0aXZlSW1hZ2VJZCk7XHJcbiAgICBnZXRQaG90byhzbGlkZXJJbmRleCk7XHJcbiAgfSwgW10pO1xyXG4gXHJcbiAgY29uc3QgZ2V0UGhvdG8gPSBhc3luYyAoaSkgPT4ge1xyXG4gICAgXHJcbiAgICBpZihkYXRhLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcodHJ1ZSkpXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZih0eXBlb2YgZGF0YVtpXS5pZCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlKSlcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlKSlcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsOiAnL3Bob3Rvcy9nZXQnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIFwiaWRcIjogZGF0YVtpXS5pZCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7ICBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIGRpc3BhdGNoKHNldFBob3RvKHJlcXVlc3QuZGF0YSkpXHJcbiAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpXHJcbiAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSA0MDMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnUGxlYXNlIHJlZnJlc2ggdG9rZW4hJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZU9uRHJhZ1N0YXJ0ID0gKGUpID0+IGUucHJldmVudERlZmF1bHQoKTtcclxuICBjb25zdCBzbGlkZU5leHQgPSAoKSA9PiBzZXRTbGlkZXJJbmRleCgoc3RhdGUpID0+IHsgXHJcbiAgICBpZihkYXRhLmxlbmd0aCA8PSBzdGF0ZSArIDEpIHtcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZ2V0UGhvdG8oc3RhdGUrMSk7XHJcbiAgICAgIHJldHVybiBzdGF0ZSArIDE7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgY29uc3Qgc2xpZGVQcmV2ID0gKCkgPT4gc2V0U2xpZGVySW5kZXgoKHN0YXRlKSA9PiB7XHJcbiAgICBpZihzdGF0ZSA8PSAwKSB7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZ2V0UGhvdG8oc3RhdGUtMSk7XHJcbiAgICAgIHJldHVybiBzdGF0ZSAtIDE7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgY29uc3Qgb25TbGlkZUNoYW5nZWQgPSAoZSkgPT4gc2V0U2xpZGVySW5kZXgoZS5pdGVtKTtcclxuICBjb25zdCBoYW5kbGVSYXRlUGhvdG8gPSAocmF0ZSkgPT4ge1xyXG4gICAgaWYodHlwZW9mIGRhdGFbc2xpZGVySW5kZXhdLmlkID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBvblJhdGVQb3N0KCdQaG90bycsIGRhdGFbc2xpZGVySW5kZXhdLmlkLCByYXRlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvblVwZGF0ZVRpbWVsaW5lID0gYXN5bmMgKG5ld0NvbW1lbnQpID0+IHtcclxuICAgIGNvbnN0ICB7IGNvbW1lbnRzIH0gPSBzdG9yYWdlLnBob3RvRGF0YTtcclxuICAgIGxldCBhZGRFbGVtZW50ID0ge1xyXG4gICAgICBhY2NvdW50OiBhdXRoLnVzZXIsIFxyXG4gICAgICAuLi5uZXdDb21tZW50LmNvbW1lbnRzWzBdXHJcbiAgICB9XHJcbiAgICB2YXIgbGFzdFBob3RvID0gey4uLnN0b3JhZ2UucGhvdG9EYXRhLCBjb21tZW50czogWy4uLmNvbW1lbnRzLCBhZGRFbGVtZW50XX07XHJcbiAgICBkaXNwYXRjaChzZXRQaG90byhsYXN0UGhvdG8pKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNob3dDb21tZW50TW9kYWwgPSAoaWQpID0+IHtcclxuICAgIHNldE1vZGFsTW9kZSghbW9kYWxNb2RlKTtcclxuICAgIHNldEFjdGl2ZVBvc3RJZChpZCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0TGlrZUFjdGlvblVzZXJJbmZvID0gKGRhdGEpID0+IHtcclxuICAgIHZhciBmaW5hbERhdGEgPSAnJztcclxuICAgIGRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICBmaW5hbERhdGEgPSBmaW5hbERhdGEgKyAnICcgKyBpdGVtLmFjY291bnQuZmlyc3ROYW1lICsgJycgKyBpdGVtLmFjY291bnQubGFzdE5hbWUgO1xyXG4gICAgfSlcclxuICAgIHJldHVybiBmaW5hbERhdGE7XHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkxvYWQgPSAoKSA9PiBzZXRUaW1lc3RhbXAoRGF0ZS5ub3coKSk7XHJcblxyXG4gIGNvbnN0IHJvdW5kUmF0aW5nID0gc3RvcmFnZS5waG90b0RhdGE/LnJhdGluZztcclxuICBjb25zdCBjYXB0aW9uID0gIHN0b3JhZ2UucGhvdG9EYXRhPy5jYXB0aW9uO1xyXG4gIGNvbnN0IGNvbW1lbnRzID0gc3RvcmFnZS5waG90b0RhdGE/LmNvbW1lbnRzO1xyXG4gIGNvbnN0IGNvbW1lbnRzQ291bnQgPSBzdG9yYWdlLnBob3RvRGF0YT8uY29tbWVudHNDb3VudDtcclxuICBjb25zdCByZWFjdGlvbnMgPSBzdG9yYWdlLnBob3RvRGF0YT8ucmVhY3Rpb25zO1xyXG4gIGNvbnN0IHNoYXJlcyA9IHN0b3JhZ2UucGhvdG9EYXRhPy5zaGFyZXM7XHJcbiAgY29uc3QgaWQgPSBzdG9yYWdlLnBob3RvRGF0YT8uaWQ7XHJcbiAgY29uc3QgdHlwZSA9IGRhdGFbc2xpZGVySW5kZXhdPy50eXBlO1xyXG4gIGNvbnN0IGxpa2VEYXRhID0gcmVhY3Rpb25zPyByZWFjdGlvbnM/LmZpbHRlcihpdGVtID0+IGl0ZW0ucmVhY3Rpb24gPT0gJ0xJS0UnKTpbXTtcclxuICBjb25zdCBoZWFydERhdGEgPSAgcmVhY3Rpb25zPyByZWFjdGlvbnM/LmZpbHRlcihpdGVtID0+IGl0ZW0ucmVhY3Rpb24gPT0gJ0hFQVJUJyk6W107XHJcbiAgY29uc3Qgd293RGF0YSA9IHJlYWN0aW9ucyA/IHJlYWN0aW9ucz8uZmlsdGVyKGl0ZW0gPT4gaXRlbS5yZWFjdGlvbiA9PSAnV09XJyk6W107XHJcbiAgY29uc3QgaGFoYURhdGEgPSByZWFjdGlvbnMgPyByZWFjdGlvbnM/LmZpbHRlcihpdGVtID0+IGl0ZW0ucmVhY3Rpb24gPT0gJ0hBSEEnKTpbXTtcclxuICBjb25zdCBzYWREYXRhID0gcmVhY3Rpb25zID8gcmVhY3Rpb25zPy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlYWN0aW9uID09ICdTQUQnKTpbXTtcclxuICBcclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFBob3RvTW9kYWxXcmFwcGVyIHsuLi5yZXN0IH0gcHJvZmlsZVBob3RvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpb25zfT5cclxuICAgICAgICAgIDxMZWZ0T3V0bGluZWRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucHJldl9hY3Rpb259XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNsaWRlUHJldigpfVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMjUsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ2JsYWNrJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA4LFxyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNixcclxuICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAxNVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxSaWdodE91dGxpbmVkXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5leHRfYWN0aW9ufVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzbGlkZU5leHQoKX1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDI1LFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdibGFjaycsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogOCxcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjYsXHJcbiAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDE1XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxBbGljZUNhcm91c2VsXHJcbiAgICAgICAgICBtb3VzZVRyYWNraW5nRW5hYmxlZFxyXG4gICAgICAgICAgZG90c0Rpc2FibGVkXHJcbiAgICAgICAgICBidXR0b25zRGlzYWJsZWRcclxuICAgICAgICAgIHNsaWRlVG9JbmRleD17c2xpZGVySW5kZXh9XHJcbiAgICAgICAgICBvblNsaWRlQ2hhbmdlZD17b25TbGlkZUNoYW5nZWR9XHJcbiAgICAgICAgICBpbmZpbml0ZT17ZmFsc2V9XHJcbiAgICAgICAgICAvLyBhdXRvSGVpZ2h0ICBcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7IFxyXG4gICAgICAgICAgaWYoaXRlbS5zcmMgPT09IGFjdGl2ZUltYWdlSWQpIHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9fY29udGFpbmVyfSBrZXk9e2luZGV4fSBkYXRhLXZhbHVlPXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5waG90b30+XHJcbiAgICAgICAgICAgICAgICA8TGF6eUxvYWRlciBvbkxvYWQ9e29uTG9hZH0gc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHsoaXRlbT8uYmxvYl90biAhPT0gbnVsbCk/KGl0ZW0/LmJsb2JfdG4pOihpdGVtPy5zcmMpfWB9IGRlbGF5PXsxMDAwfS8+LFxyXG4gICAgICAgICAgICAgICAgey8qIDxpbWdcclxuICAgICAgICAgICAgICAgICAgb25EcmFnU3RhcnQ9e2hhbmRsZU9uRHJhZ1N0YXJ0fVxyXG4gICAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8keyhpdGVtPy5ibG9iX3RuICE9PSBudWxsKT8oaXRlbT8uYmxvYl90bik6KGl0ZW0/LnNyYyl9YH1cclxuICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX19KX1cclxuICAgICAgICA8L0FsaWNlQ2Fyb3VzZWw+XHJcbiAgICAgICAgXHJcbiAgICAgICAge2RhdGEubGVuZ3RoICE9PSAwICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmF0aW5nX3dyYXBwZXJ9PlxyXG4gICAgICAgICAgICA8UmF0aW5nU2xpZGVcclxuICAgICAgICAgICAgZGVmYXVsdFJhdGU9e3JvdW5kUmF0aW5nfVxyXG4gICAgICAgICAgICB3aXRob3V0VGV4dFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUmF0ZVBob3RvfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHsvKiA8c3Bhbj57cm91bmRSYXRpbmd9PC9zcGFuPiAqL31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50UmVhY3Rpb259PlxyXG4gICAgICAgPExvYWRpbmdXcmFwcGVyIGxvYWRpbmc9e3N0b3JhZ2UubG9hZGluZ30+XHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBob3RvX2hlYWRlcn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn0+XHJcbiAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICB0ZXh0PXthdXRoLnVzZXI/LmZpcnN0TmFtZSArIFwiIFwiICsgYXV0aC51c2VyPy5sYXN0TmFtZX1cclxuICAgICAgICAgICAgICB1cmw9e2Ake2F1dGgudXNlci5wcm9maWxlUGhvdG8uc3JjfWB9XHJcbiAgICAgICAgICAgICAgc2l6ZT17NjB9XHJcbiAgICAgICAgICAgICAgYm9yZGVyU2l6ZT17M31cclxuICAgICAgICAgICAgICB1c2VybmFtZT17YXV0aC51c2VyPy51c2VybmFtZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyX2luZm99PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy51c2VyX25hbWV9PnthdXRoLnVzZXI/LmZpcnN0TmFtZSArIFwiIFwiICsgYXV0aC51c2VyPy5sYXN0TmFtZX08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgIFxyXG4gICAgICAgIDxoMyBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDQwIH19PntjYXB0aW9ufTwvaDM+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZWFjdGlvbnNfc2hhcmVzX3N0YXR1c30+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlYWN0aW9uc19zdGF0dXN9PlxyXG4gICAgICAgICAgICB7IGxpa2VEYXRhLmxlbmd0aCA+IDAgJiYgPD5cclxuICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKGxpa2VEYXRhKX0+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ3RodW1icy11cCddfSBzaXplPVwiMXhcIiAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcid9fS8+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57bGlrZURhdGEubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+PC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgeyBoYWhhRGF0YS5sZW5ndGggPiAwICYmIDw+XHJcbiAgICAgICAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9e2dldExpa2VBY3Rpb25Vc2VySW5mbyhoYWhhRGF0YSl9PlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdncmluJ119IHNpemU9XCIxeFwiICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJ319Lz4gXHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57aGFoYURhdGEubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgeyBoZWFydERhdGEubGVuZ3RoID4gMCAmJiA8PiBcclxuICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKGhlYXJ0RGF0YSl9PlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdoZWFydCddfSBzaXplPVwiMXhcIiAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcid9fS8+IFxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e2hlYXJ0RGF0YS5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7IHdvd0RhdGEubGVuZ3RoID4gMCAmJiA8PiBcclxuICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKHdvd0RhdGEpfT5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAnbGF1Z2gnXX0gc2l6ZT1cIjF4XCIgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInfX0vPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3dvd0RhdGEubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgPC8+IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHsgc2FkRGF0YS5sZW5ndGggPiAwICYmIDw+XHJcbiAgICAgICAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9e2dldExpa2VBY3Rpb25Vc2VySW5mbyhzYWREYXRhKX0+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ2Zyb3duJ119IHNpemU9XCIxeFwiICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJ319Lz4gXHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57c2FkRGF0YS5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7c2hhcmVzICYmIHNoYXJlcy5sZW5ndGggPiAwID88ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNoYXJlc19zdGF0dXN9PlxyXG4gICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJ0b3BcIiB0aXRsZT17J1NoYXJlJ30+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ3NoYXJlLXNxdWFyZSddfS8+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57c2hhcmVzLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgIDwvZGl2PjpudWxsfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxBY3Rpb25zXHJcbiAgICAgICAgICBpZD17aWR9XHJcbiAgICAgICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICAgICAgcG9zdFJhdGU9e3JvdW5kUmF0aW5nfVxyXG4gICAgICAgICAgY29tbWVudHM9e2NvbW1lbnRzfVxyXG4gICAgICAgICAgY29tbWVudHNDb3VudD17Y29tbWVudHNDb3VudH1cclxuICAgICAgICAgIG9uUmF0ZVBvc3Q9e29uUmF0ZVBvc3R9XHJcbiAgICAgICAgICBpbmRleD17c2xpZGVySW5kZXh9XHJcbiAgICAgICAgICBsaWtlQWN0aW9uPXsodGVybSkgPT4gbGlrZUFjdGlvbih0eXBlLCBpZCwgdGVybSl9XHJcbiAgICAgICAgICBzaGFyZUFjdGlvbj17KCkgPT4gc2hhcmVBY3Rpb24odHlwZSwgaWQpfVxyXG4gICAgICAgICAgYWN0aW9ucz17KCkgPT4geyBoYW5kbGVTaG93Q29tbWVudE1vZGFsKGlkKSB9IH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxDb21tZW50c1xyXG4gICAgICAgICAgaWQ9e2lkfVxyXG4gICAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICAgIGRhdGE9e2NvbW1lbnRzfVxyXG4gICAgICAgICAgb25VcGRhdGVUaW1lbGluZT17b25VcGRhdGVUaW1lbGluZX1cclxuICAgICAgICAgIGFjdGl2ZVBvc3RJZD17YWN0aXZlUG9zdElkfVxyXG4gICAgICAgICAgbW9kYWxNb2RlPXttb2RhbE1vZGV9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8L0xvYWRpbmdXcmFwcGVyPlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICA8L1Bob3RvTW9kYWxXcmFwcGVyPlxyXG4gICk7XHJcbn1cclxuXHJcblBob3Rvc01vZGFsLmRlZmF1bHRQcm9wcyA9IHtcclxuICBkYXRhOiBbXSxcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIExhenlMb2FkZXIocHJvcHMpIHtcclxuICBsZXQgdGltZXJJZDtcclxuICBjb25zdCB7IHNyYyA9ICcnLCBkZWxheSA9IDAsIG9uTG9hZCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW2lzTW91bnRlZCwgc2V0TW91bnRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgZnVuY3Rpb24gbG9hZEltYWdlKCkge1xyXG4gICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICBpbWFnZS5zcmMgPSBzcmM7XHJcbiAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgb25Mb2FkKCk7XHJcbiAgICAgIH07XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFpc01vdW50ZWQpIHtcclxuICAgICAgc2V0TW91bnRlZCh0cnVlKTtcclxuICAgICAgZGVsYXkgPyAodGltZXJJZCA9IHNldFRpbWVvdXQobG9hZEltYWdlLCBkZWxheSkpIDogbG9hZEltYWdlKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT25EcmFnU3RhcnQgPSAoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICByZXR1cm4gaXNMb2FkaW5nID8gPFNwaW4gc2l6ZT1cImxhcmdlXCIvPiA6IDxpbWcgb25EcmFnU3RhcnQ9e2hhbmRsZU9uRHJhZ1N0YXJ0fSBzcmM9e3NyY30gIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnIH19Lz47XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9