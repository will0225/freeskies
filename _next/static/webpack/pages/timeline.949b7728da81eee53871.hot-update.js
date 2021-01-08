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
      setTimestamp = _useState4[1]; // const index = data.findIndex((element, index) => {
  //   if(element.src === activeImageId) {
  //     return true;
  //   }
  // })
  // console.log(index, activeImageId);
  // setSliderIndex(index);


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
              if (!(typeof activeImageId === 'undefined')) {
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
                  "id": i
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
  var carouselData = [];
  var firstData = [];
  var secondData = [];

  for (var i = 0; i < data.length; i++) {
    if (data[i].src === activeImageId) {
      firstData = data.slice(i, data.length);
      break;
    }

    secondData.push(data[i]);
  }

  carouselData = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(firstData), secondData);
  return __jsx(components_common_PhotoModalWrapper__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, {
    profilePhoto: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.actions,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
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
      lineNumber: 177,
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
      lineNumber: 188,
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
      lineNumber: 200,
      columnNumber: 9
    }
  }, carouselData.map(function (item, index) {
    return __jsx("div", {
      className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.photo_container,
      key: index,
      "data-value": index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.photo,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 17
      }
    }, __jsx(LazyLoader, {
      onLoad: onLoad,
      src: "https://www.freeskies.com/static/".concat((item === null || item === void 0 ? void 0 : item.blob_tn) !== null ? item === null || item === void 0 ? void 0 : item.blob_tn : item === null || item === void 0 ? void 0 : item.src),
      delay: 1000,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 19
      }
    }), ","));
  })), data.length !== 0 && __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.rating_wrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 11
    }
  }, __jsx(components_forms__WEBPACK_IMPORTED_MODULE_12__["RatingSlide"], {
    defaultRate: roundRating,
    withoutText: true,
    onChange: handleRatePhoto,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.commentReaction,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 8
    }
  }, __jsx(components_common_LoadingWrapper__WEBPACK_IMPORTED_MODULE_20__["default"], {
    loading: storage.loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.photo_header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
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
      lineNumber: 242,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.user_info,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.user_name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 13
    }
  }, ((_auth$user4 = auth.user) === null || _auth$user4 === void 0 ? void 0 : _auth$user4.firstName) + " " + ((_auth$user5 = auth.user) === null || _auth$user5 === void 0 ? void 0 : _auth$user5.lastName)))), __jsx("h3", {
    style: {
      marginBottom: 40
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 9
    }
  }, caption), __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.reactions_shares_status,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.reactions_status,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 11
    }
  }, likeData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Tooltip"], {
    placement: "bottom",
    title: getLikeActionUserInfo(likeData),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
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
  }, likeData.length))), hahaData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Tooltip"], {
    placement: "bottom",
    title: getLikeActionUserInfo(hahaData),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
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
  }, hahaData.length))), heartData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Tooltip"], {
    placement: "bottom",
    title: getLikeActionUserInfo(heartData),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
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
      lineNumber: 273,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 17
    }
  }, heartData.length))), wowData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Tooltip"], {
    placement: "bottom",
    title: getLikeActionUserInfo(wowData),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
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
      lineNumber: 280,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 17
    }
  }, wowData.length))), sadData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Tooltip"], {
    placement: "bottom",
    title: getLikeActionUserInfo(sadData),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
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
      lineNumber: 287,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 17
    }
  }, sadData.length)))), shares && shares.length > 0 ? __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.shares_status,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 41
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Tooltip"], {
    placement: "top",
    title: 'Share',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_21__["FontAwesomeIcon"], {
    icon: ['far', 'share-square'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
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
      lineNumber: 300,
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
      lineNumber: 312,
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
      lineNumber: 356,
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
      lineNumber: 356,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlL1Bob3Rvc01vZGFsLmpzIl0sIm5hbWVzIjpbIlRleHRBcmVhIiwiSW5wdXQiLCJQaG90b3NNb2RhbCIsImRhdGEiLCJvblJhdGVQb3N0IiwicGhvdG9JbmRleCIsImxpa2VBY3Rpb24iLCJzaGFyZUFjdGlvbiIsImFjdGl2ZUltYWdlSWQiLCJhdXRoIiwicmVzdCIsInVzZVN0YXRlIiwic2xpZGVySW5kZXgiLCJzZXRTbGlkZXJJbmRleCIsInVzZUNvbnRleHQiLCJQaG90b3NDb250ZXh0Iiwic3RvcmFnZSIsImRpc3BhdGNoIiwibW9kYWxNb2RlIiwic2V0TW9kYWxNb2RlIiwiYWN0aXZlUG9zdElkIiwic2V0QWN0aXZlUG9zdElkIiwic2V0VGltZXN0YW1wIiwidXNlRWZmZWN0IiwiZ2V0UGhvdG8iLCJpIiwibGVuZ3RoIiwic2V0TG9hZGluZyIsIkFQSSIsIm1ldGhvZCIsInVybCIsImhlYWRlcnMiLCJ0b2tlbiIsInJlcXVlc3QiLCJzdGF0dXMiLCJzZXRQaG90byIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVPbkRyYWdTdGFydCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNsaWRlTmV4dCIsInN0YXRlIiwic2xpZGVQcmV2Iiwib25TbGlkZUNoYW5nZWQiLCJpdGVtIiwiaGFuZGxlUmF0ZVBob3RvIiwicmF0ZSIsImlkIiwib25VcGRhdGVUaW1lbGluZSIsIm5ld0NvbW1lbnQiLCJjb21tZW50cyIsInBob3RvRGF0YSIsImFkZEVsZW1lbnQiLCJhY2NvdW50IiwidXNlciIsImxhc3RQaG90byIsImhhbmRsZVNob3dDb21tZW50TW9kYWwiLCJnZXRMaWtlQWN0aW9uVXNlckluZm8iLCJmaW5hbERhdGEiLCJtYXAiLCJpbmRleCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwib25Mb2FkIiwiRGF0ZSIsIm5vdyIsInJvdW5kUmF0aW5nIiwicmF0aW5nIiwiY2FwdGlvbiIsImNvbW1lbnRzQ291bnQiLCJyZWFjdGlvbnMiLCJzaGFyZXMiLCJ0eXBlIiwibGlrZURhdGEiLCJmaWx0ZXIiLCJyZWFjdGlvbiIsImhlYXJ0RGF0YSIsIndvd0RhdGEiLCJoYWhhRGF0YSIsInNhZERhdGEiLCJjYXJvdXNlbERhdGEiLCJmaXJzdERhdGEiLCJzZWNvbmREYXRhIiwic3JjIiwic2xpY2UiLCJwdXNoIiwic3R5bGVzIiwiY29udGFpbmVyIiwiYWN0aW9ucyIsInByZXZfYWN0aW9uIiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZCIsInBhZGRpbmciLCJvcGFjaXR5IiwibWFyZ2luTGVmdCIsIm5leHRfYWN0aW9uIiwibWFyZ2luUmlnaHQiLCJwaG90b19jb250YWluZXIiLCJwaG90byIsImJsb2JfdG4iLCJyYXRpbmdfd3JhcHBlciIsImNvbW1lbnRSZWFjdGlvbiIsImxvYWRpbmciLCJwaG90b19oZWFkZXIiLCJhdmF0YXIiLCJwcm9maWxlUGhvdG8iLCJ1c2VybmFtZSIsInVzZXJfaW5mbyIsInVzZXJfbmFtZSIsIm1hcmdpbkJvdHRvbSIsInJlYWN0aW9uc19zaGFyZXNfc3RhdHVzIiwicmVhY3Rpb25zX3N0YXR1cyIsImN1cnNvciIsInNoYXJlc19zdGF0dXMiLCJ0ZXJtIiwiZGVmYXVsdFByb3BzIiwiTGF6eUxvYWRlciIsInByb3BzIiwidGltZXJJZCIsImRlbGF5IiwiaXNNb3VudGVkIiwic2V0TW91bnRlZCIsImlzTG9hZGluZyIsImxvYWRJbWFnZSIsImltYWdlIiwiSW1hZ2UiLCJvbmxvYWQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwid2lkdGgiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7SUFDUUEsUSxHQUFhQywyQyxDQUFiRCxRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdl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ay9wYWdlcy90aW1lbGluZS45NDliNzcyOGRhODFlZWU1Mzg3MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0TW9kYWwgZnJvbSAncmVhY3QtbW9kYWwnO1xyXG5pbXBvcnQgQWxpY2VDYXJvdXNlbCBmcm9tICdyZWFjdC1hbGljZS1jYXJvdXNlbCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvcGhvdG9zX21vZGFsLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IFBob3RvTW9kYWxXcmFwcGVyIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL1Bob3RvTW9kYWxXcmFwcGVyJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBMZWZ0Q2lyY2xlRmlsbGVkLFxyXG4gIFJpZ2h0Q2lyY2xlRmlsbGVkLFxyXG4gIExlZnRPdXRsaW5lZCxcclxuICBSaWdodE91dGxpbmVkLFxyXG59IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgUmF0aW5nU2xpZGUgfSBmcm9tICdjb21wb25lbnRzL2Zvcm1zJztcclxuaW1wb3J0IHsgSW5wdXQsIFBvcG92ZXIsIFRvb2x0aXAsIFNwaW4sIFJhdGUgfSBmcm9tICdhbnRkJztcclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcbmltcG9ydCBBUEkgZnJvbSAnY29uZmlncy9BUEknO1xyXG5pbXBvcnQgQ29tbWVudHMgZnJvbSAnLi4vdGltZWxpbmUvQ29tbWVudHMnO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL0F2YXRhcic7XHJcbmltcG9ydCBBY3Rpb25zIGZyb20gJ2NvbXBvbmVudHMvdGltZWxpbmUvQWN0aW9ucyc7XHJcbmltcG9ydCB7IFBob3Rvc0NvbnRleHQgfSBmcm9tICdjb250YWluZXJzL1Bob3Rvcy9zdG9yYWdlL1Bob3RvQ29udGV4dCc7XHJcbmltcG9ydCB7IHNldFBob3RvLCBzZXRMb2FkaW5nIH0gZnJvbSAnY29udGFpbmVycy9QaG90b3MvYWN0aW9ucyc7XHJcbmltcG9ydCBMb2FkaW5nV3JhcHBlciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9Mb2FkaW5nV3JhcHBlcic7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGhvdG9zTW9kYWwoeyBcclxuICBkYXRhLCBcclxuICBvblJhdGVQb3N0LCBcclxuICBwaG90b0luZGV4LCBcclxuICBsaWtlQWN0aW9uLCBcclxuICBzaGFyZUFjdGlvbiwgXHJcbiAgYWN0aXZlSW1hZ2VJZCxcclxuICBhdXRoLCBcclxuICAuLi5yZXN0IFxyXG59KSB7XHJcbiAgY29uc3QgW3NsaWRlckluZGV4LCBzZXRTbGlkZXJJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbc3RvcmFnZSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChQaG90b3NDb250ZXh0KTtcclxuICBjb25zdCBbbW9kYWxNb2RlLCBzZXRNb2RhbE1vZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFthY3RpdmVQb3N0SWQsIHNldEFjdGl2ZVBvc3RJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbLCBzZXRUaW1lc3RhbXBdID0gdXNlU3RhdGUoMCk7XHJcbiAgXHJcbiAgLy8gY29uc3QgaW5kZXggPSBkYXRhLmZpbmRJbmRleCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAvLyAgIGlmKGVsZW1lbnQuc3JjID09PSBhY3RpdmVJbWFnZUlkKSB7XHJcbiAgLy8gICAgIHJldHVybiB0cnVlO1xyXG4gIC8vICAgfVxyXG4gIC8vIH0pXHJcbiAgLy8gY29uc29sZS5sb2coaW5kZXgsIGFjdGl2ZUltYWdlSWQpO1xyXG4gIC8vIHNldFNsaWRlckluZGV4KGluZGV4KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldFBob3RvKHNsaWRlckluZGV4KTtcclxuICB9LCBbXSk7XHJcbiBcclxuICBjb25zdCBnZXRQaG90byA9IGFzeW5jIChpKSA9PiB7XHJcbiAgICBcclxuICAgIGlmKGRhdGEubGVuZ3RoID09IDApIHtcclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlKSlcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHR5cGVvZiBhY3RpdmVJbWFnZUlkID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKHRydWUpKVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlKSlcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsOiAnL3Bob3Rvcy9nZXQnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIFwiaWRcIjogaSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goc2V0UGhvdG8ocmVxdWVzdC5kYXRhKSlcclxuICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSlcclxuICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IDQwMykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdQbGVhc2UgcmVmcmVzaCB0b2tlbiEnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBcclxuICAgICAgfVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICBcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9uRHJhZ1N0YXJ0ID0gKGUpID0+IGUucHJldmVudERlZmF1bHQoKTtcclxuICBcclxuICBjb25zdCBzbGlkZU5leHQgPSAoKSA9PiBzZXRTbGlkZXJJbmRleCgoc3RhdGUpID0+IHsgXHJcbiAgICBpZihkYXRhLmxlbmd0aCA8PSBzdGF0ZSArIDEpIHtcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZ2V0UGhvdG8oc3RhdGUrMSk7XHJcbiAgICAgIHJldHVybiBzdGF0ZSArIDE7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgXHJcbiAgY29uc3Qgc2xpZGVQcmV2ID0gKCkgPT4gc2V0U2xpZGVySW5kZXgoKHN0YXRlKSA9PiB7XHJcbiAgICBpZihzdGF0ZSA8PSAwKSB7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZ2V0UGhvdG8oc3RhdGUtMSk7XHJcbiAgICAgIHJldHVybiBzdGF0ZSAtIDE7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgXHJcbiAgY29uc3Qgb25TbGlkZUNoYW5nZWQgPSAoZSkgPT4gc2V0U2xpZGVySW5kZXgoZS5pdGVtKTtcclxuICBcclxuICBjb25zdCBoYW5kbGVSYXRlUGhvdG8gPSAocmF0ZSkgPT4ge1xyXG4gICAgaWYodHlwZW9mIGRhdGFbc2xpZGVySW5kZXhdLmlkID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBvblJhdGVQb3N0KCdQaG90bycsIGRhdGFbc2xpZGVySW5kZXhdLmlkLCByYXRlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvblVwZGF0ZVRpbWVsaW5lID0gYXN5bmMgKG5ld0NvbW1lbnQpID0+IHtcclxuICAgIGNvbnN0ICB7IGNvbW1lbnRzIH0gPSBzdG9yYWdlLnBob3RvRGF0YTtcclxuICAgIGxldCBhZGRFbGVtZW50ID0ge1xyXG4gICAgICBhY2NvdW50OiBhdXRoLnVzZXIsIFxyXG4gICAgICAuLi5uZXdDb21tZW50LmNvbW1lbnRzWzBdXHJcbiAgICB9XHJcbiAgICB2YXIgbGFzdFBob3RvID0gey4uLnN0b3JhZ2UucGhvdG9EYXRhLCBjb21tZW50czogWy4uLmNvbW1lbnRzLCBhZGRFbGVtZW50XX07XHJcbiAgICBkaXNwYXRjaChzZXRQaG90byhsYXN0UGhvdG8pKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNob3dDb21tZW50TW9kYWwgPSAoaWQpID0+IHtcclxuICAgIHNldE1vZGFsTW9kZSghbW9kYWxNb2RlKTtcclxuICAgIHNldEFjdGl2ZVBvc3RJZChpZCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0TGlrZUFjdGlvblVzZXJJbmZvID0gKGRhdGEpID0+IHtcclxuICAgIHZhciBmaW5hbERhdGEgPSAnJztcclxuICAgIGRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICBmaW5hbERhdGEgPSBmaW5hbERhdGEgKyAnICcgKyBpdGVtLmFjY291bnQuZmlyc3ROYW1lICsgJycgKyBpdGVtLmFjY291bnQubGFzdE5hbWUgO1xyXG4gICAgfSlcclxuICAgIHJldHVybiBmaW5hbERhdGE7XHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkxvYWQgPSAoKSA9PiBzZXRUaW1lc3RhbXAoRGF0ZS5ub3coKSk7XHJcblxyXG4gIGNvbnN0IHJvdW5kUmF0aW5nID0gc3RvcmFnZS5waG90b0RhdGE/LnJhdGluZztcclxuICBjb25zdCBjYXB0aW9uID0gIHN0b3JhZ2UucGhvdG9EYXRhPy5jYXB0aW9uO1xyXG4gIGNvbnN0IGNvbW1lbnRzID0gc3RvcmFnZS5waG90b0RhdGE/LmNvbW1lbnRzO1xyXG4gIGNvbnN0IGNvbW1lbnRzQ291bnQgPSBzdG9yYWdlLnBob3RvRGF0YT8uY29tbWVudHNDb3VudDtcclxuICBjb25zdCByZWFjdGlvbnMgPSBzdG9yYWdlLnBob3RvRGF0YT8ucmVhY3Rpb25zO1xyXG4gIGNvbnN0IHNoYXJlcyA9IHN0b3JhZ2UucGhvdG9EYXRhPy5zaGFyZXM7XHJcbiAgY29uc3QgaWQgPSBzdG9yYWdlLnBob3RvRGF0YT8uaWQ7XHJcbiAgY29uc3QgdHlwZSA9IGRhdGFbc2xpZGVySW5kZXhdPy50eXBlO1xyXG4gIGNvbnN0IGxpa2VEYXRhID0gcmVhY3Rpb25zPyByZWFjdGlvbnM/LmZpbHRlcihpdGVtID0+IGl0ZW0ucmVhY3Rpb24gPT0gJ0xJS0UnKTpbXTtcclxuICBjb25zdCBoZWFydERhdGEgPSAgcmVhY3Rpb25zPyByZWFjdGlvbnM/LmZpbHRlcihpdGVtID0+IGl0ZW0ucmVhY3Rpb24gPT0gJ0hFQVJUJyk6W107XHJcbiAgY29uc3Qgd293RGF0YSA9IHJlYWN0aW9ucyA/IHJlYWN0aW9ucz8uZmlsdGVyKGl0ZW0gPT4gaXRlbS5yZWFjdGlvbiA9PSAnV09XJyk6W107XHJcbiAgY29uc3QgaGFoYURhdGEgPSByZWFjdGlvbnMgPyByZWFjdGlvbnM/LmZpbHRlcihpdGVtID0+IGl0ZW0ucmVhY3Rpb24gPT0gJ0hBSEEnKTpbXTtcclxuICBjb25zdCBzYWREYXRhID0gcmVhY3Rpb25zID8gcmVhY3Rpb25zPy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlYWN0aW9uID09ICdTQUQnKTpbXTtcclxuICBcclxuICBsZXQgY2Fyb3VzZWxEYXRhID0gW107XHJcbiAgbGV0IGZpcnN0RGF0YSA9IFtdO1xyXG4gIGxldCBzZWNvbmREYXRhID0gW107XHJcblxyXG4gIGZvcih2YXIgaT0wOyBpPGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmKGRhdGFbaV0uc3JjID09PSBhY3RpdmVJbWFnZUlkKSB7XHJcbiAgICAgIGZpcnN0RGF0YSA9IGRhdGEuc2xpY2UoaSxkYXRhLmxlbmd0aCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgc2Vjb25kRGF0YS5wdXNoKGRhdGFbaV0pO1xyXG4gIH1cclxuICBcclxuICBjYXJvdXNlbERhdGEgPSBbLi4uZmlyc3REYXRhLCAuLi5zZWNvbmREYXRhXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQaG90b01vZGFsV3JhcHBlciB7Li4ucmVzdCB9IHByb2ZpbGVQaG90bz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uc30+XHJcbiAgICAgICAgICA8TGVmdE91dGxpbmVkXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnByZXZfYWN0aW9ufVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzbGlkZVByZXYoKX1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDI1LFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdibGFjaycsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogOCxcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjYsXHJcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdDogMTVcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8UmlnaHRPdXRsaW5lZFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5uZXh0X2FjdGlvbn1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2xpZGVOZXh0KCl9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyNSxcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnYmxhY2snLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDgsXHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC42LFxyXG4gICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAxNVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8QWxpY2VDYXJvdXNlbFxyXG4gICAgICAgICAgbW91c2VUcmFja2luZ0VuYWJsZWRcclxuICAgICAgICAgIGRvdHNEaXNhYmxlZFxyXG4gICAgICAgICAgYnV0dG9uc0Rpc2FibGVkXHJcbiAgICAgICAgICBzbGlkZVRvSW5kZXg9e3NsaWRlckluZGV4fVxyXG4gICAgICAgICAgb25TbGlkZUNoYW5nZWQ9e29uU2xpZGVDaGFuZ2VkfVxyXG4gICAgICAgICAgaW5maW5pdGU9e2ZhbHNlfVxyXG4gICAgICAgICAgLy8gYXV0b0hlaWdodCAgXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2Nhcm91c2VsRGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7IFxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9fY29udGFpbmVyfSBrZXk9e2luZGV4fSBkYXRhLXZhbHVlPXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBob3RvfT5cclxuICAgICAgICAgICAgICAgICAgPExhenlMb2FkZXIgb25Mb2FkPXtvbkxvYWR9IHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7KGl0ZW0/LmJsb2JfdG4gIT09IG51bGwpPyhpdGVtPy5ibG9iX3RuKTooaXRlbT8uc3JjKX1gfSBkZWxheT17MTAwMH0vPixcclxuICAgICAgICAgICAgICAgICAgey8qIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBvbkRyYWdTdGFydD17aGFuZGxlT25EcmFnU3RhcnR9XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHsoaXRlbT8uYmxvYl90biAhPT0gbnVsbCk/KGl0ZW0/LmJsb2JfdG4pOihpdGVtPy5zcmMpfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvQWxpY2VDYXJvdXNlbD5cclxuICAgICAgICBcclxuICAgICAgICB7ZGF0YS5sZW5ndGggIT09IDAgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yYXRpbmdfd3JhcHBlcn0+XHJcbiAgICAgICAgICAgIDxSYXRpbmdTbGlkZVxyXG4gICAgICAgICAgICBkZWZhdWx0UmF0ZT17cm91bmRSYXRpbmd9XHJcbiAgICAgICAgICAgIHdpdGhvdXRUZXh0XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVSYXRlUGhvdG99XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgey8qIDxzcGFuPntyb3VuZFJhdGluZ308L3NwYW4+ICovfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnRSZWFjdGlvbn0+XHJcbiAgICAgICA8TG9hZGluZ1dyYXBwZXIgbG9hZGluZz17c3RvcmFnZS5sb2FkaW5nfT5cclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9faGVhZGVyfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyfT5cclxuICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgIHRleHQ9e2F1dGgudXNlcj8uZmlyc3ROYW1lICsgXCIgXCIgKyBhdXRoLnVzZXI/Lmxhc3ROYW1lfVxyXG4gICAgICAgICAgICAgIHVybD17YCR7YXV0aC51c2VyLnByb2ZpbGVQaG90by5zcmN9YH1cclxuICAgICAgICAgICAgICBzaXplPXs2MH1cclxuICAgICAgICAgICAgICBib3JkZXJTaXplPXszfVxyXG4gICAgICAgICAgICAgIHVzZXJuYW1lPXthdXRoLnVzZXI/LnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfaW5mb30+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfbmFtZX0+e2F1dGgudXNlcj8uZmlyc3ROYW1lICsgXCIgXCIgKyBhdXRoLnVzZXI/Lmxhc3ROYW1lfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgXHJcbiAgICAgICAgPGgzIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogNDAgfX0+e2NhcHRpb259PC9oMz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlYWN0aW9uc19zaGFyZXNfc3RhdHVzfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVhY3Rpb25zX3N0YXR1c30+XHJcbiAgICAgICAgICAgIHsgbGlrZURhdGEubGVuZ3RoID4gMCAmJiA8PlxyXG4gICAgICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPXtnZXRMaWtlQWN0aW9uVXNlckluZm8obGlrZURhdGEpfT5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAndGh1bWJzLXVwJ119IHNpemU9XCIxeFwiICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJ319Lz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPntsaWtlRGF0YS5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvVG9vbHRpcD48Lz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7IGhhaGFEYXRhLmxlbmd0aCA+IDAgJiYgPD5cclxuICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKGhhaGFEYXRhKX0+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ2dyaW4nXX0gc2l6ZT1cIjF4XCIgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInfX0vPiBcclxuICAgICAgICAgICAgICAgIDxzcGFuPntoYWhhRGF0YS5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7IGhlYXJ0RGF0YS5sZW5ndGggPiAwICYmIDw+IFxyXG4gICAgICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPXtnZXRMaWtlQWN0aW9uVXNlckluZm8oaGVhcnREYXRhKX0+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ2hlYXJ0J119IHNpemU9XCIxeFwiICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJ319Lz4gXHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57aGVhcnREYXRhLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHsgd293RGF0YS5sZW5ndGggPiAwICYmIDw+IFxyXG4gICAgICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPXtnZXRMaWtlQWN0aW9uVXNlckluZm8od293RGF0YSl9PlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdsYXVnaCddfSBzaXplPVwiMXhcIiAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcid9fS8+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57d293RGF0YS5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICA8Lz4gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgeyBzYWREYXRhLmxlbmd0aCA+IDAgJiYgPD5cclxuICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKHNhZERhdGEpfT5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAnZnJvd24nXX0gc2l6ZT1cIjF4XCIgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInfX0vPiBcclxuICAgICAgICAgICAgICAgIDxzcGFuPntzYWREYXRhLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHtzaGFyZXMgJiYgc2hhcmVzLmxlbmd0aCA+IDAgPzxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2hhcmVzX3N0YXR1c30+XHJcbiAgICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cInRvcFwiIHRpdGxlPXsnU2hhcmUnfT5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAnc2hhcmUtc3F1YXJlJ119Lz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPntzaGFyZXMubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgPC9kaXY+Om51bGx9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEFjdGlvbnNcclxuICAgICAgICAgIGlkPXtpZH1cclxuICAgICAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgICAgICBwb3N0UmF0ZT17cm91bmRSYXRpbmd9XHJcbiAgICAgICAgICBjb21tZW50cz17Y29tbWVudHN9XHJcbiAgICAgICAgICBjb21tZW50c0NvdW50PXtjb21tZW50c0NvdW50fVxyXG4gICAgICAgICAgb25SYXRlUG9zdD17b25SYXRlUG9zdH1cclxuICAgICAgICAgIGluZGV4PXtzbGlkZXJJbmRleH1cclxuICAgICAgICAgIGxpa2VBY3Rpb249eyh0ZXJtKSA9PiBsaWtlQWN0aW9uKHR5cGUsIGlkLCB0ZXJtKX1cclxuICAgICAgICAgIHNoYXJlQWN0aW9uPXsoKSA9PiBzaGFyZUFjdGlvbih0eXBlLCBpZCl9XHJcbiAgICAgICAgICBhY3Rpb25zPXsoKSA9PiB7IGhhbmRsZVNob3dDb21tZW50TW9kYWwoaWQpIH0gfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPENvbW1lbnRzXHJcbiAgICAgICAgICBpZD17aWR9XHJcbiAgICAgICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICAgICAgZGF0YT17Y29tbWVudHN9XHJcbiAgICAgICAgICBvblVwZGF0ZVRpbWVsaW5lPXtvblVwZGF0ZVRpbWVsaW5lfVxyXG4gICAgICAgICAgYWN0aXZlUG9zdElkPXthY3RpdmVQb3N0SWR9XHJcbiAgICAgICAgICBtb2RhbE1vZGU9e21vZGFsTW9kZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDwvTG9hZGluZ1dyYXBwZXI+XHJcbiAgICAgICA8L2Rpdj5cclxuICAgIDwvUGhvdG9Nb2RhbFdyYXBwZXI+XHJcbiAgKTtcclxufVxyXG5cclxuUGhvdG9zTW9kYWwuZGVmYXVsdFByb3BzID0ge1xyXG4gIGRhdGE6IFtdLFxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gTGF6eUxvYWRlcihwcm9wcykge1xyXG4gIGxldCB0aW1lcklkO1xyXG4gIGNvbnN0IHsgc3JjID0gJycsIGRlbGF5ID0gMCwgb25Mb2FkIH0gPSBwcm9wcztcclxuICBjb25zdCBbaXNNb3VudGVkLCBzZXRNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBmdW5jdGlvbiBsb2FkSW1hZ2UoKSB7XHJcbiAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgIGltYWdlLnNyYyA9IHNyYztcclxuICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICBvbkxvYWQoKTtcclxuICAgICAgfTtcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWlzTW91bnRlZCkge1xyXG4gICAgICBzZXRNb3VudGVkKHRydWUpO1xyXG4gICAgICBkZWxheSA/ICh0aW1lcklkID0gc2V0VGltZW91dChsb2FkSW1hZ2UsIGRlbGF5KSkgOiBsb2FkSW1hZ2UoKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXJJZCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVPbkRyYWdTdGFydCA9IChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIHJldHVybiBpc0xvYWRpbmcgPyA8U3BpbiBzaXplPVwibGFyZ2VcIi8+IDogPGltZyBvbkRyYWdTdGFydD17aGFuZGxlT25EcmFnU3RhcnR9IHNyYz17c3JjfSAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScgfX0vPjtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=