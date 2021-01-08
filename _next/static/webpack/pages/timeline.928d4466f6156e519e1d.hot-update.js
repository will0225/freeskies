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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_22__);







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
  var carouselData = [];
  var firstData = [];
  var secondData = [];
  console.log('initial arrary', data); // data.map((item, i) => {
  //   if(item.src === activeImageId) {
  //     firstData = data.slice(i,data.length);
  //     break;
  //   }
  //   secondData.push(item);
  // })

  data.forEach(function (item, i) {
    console.log(i);
  });
  console.log('first data', firstData);
  console.log('second data', secondData);
  return __jsx(components_common_PhotoModalWrapper__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, {
    profilePhoto: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.actions,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
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
      lineNumber: 167,
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
      lineNumber: 178,
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
      lineNumber: 190,
      columnNumber: 9
    }
  }, carouselData.map(function (item, index) {
    // if(item.src === activeImageId) {
    return __jsx("div", {
      className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.photo_container,
      key: index,
      "data-value": index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.photo,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 15
      }
    }, __jsx(LazyLoader, {
      onLoad: onLoad,
      src: "https://www.freeskies.com/static/".concat((item === null || item === void 0 ? void 0 : item.blob_tn) !== null ? item === null || item === void 0 ? void 0 : item.blob_tn : item === null || item === void 0 ? void 0 : item.src),
      delay: 1000,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 17
      }
    }), ",")); // }
  })), data.length !== 0 && __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.rating_wrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 11
    }
  }, __jsx(components_forms__WEBPACK_IMPORTED_MODULE_12__["RatingSlide"], {
    defaultRate: roundRating,
    withoutText: true,
    onChange: handleRatePhoto,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.commentReaction,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 8
    }
  }, __jsx(components_common_LoadingWrapper__WEBPACK_IMPORTED_MODULE_20__["default"], {
    loading: storage.loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.photo_header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
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
      lineNumber: 234,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.user_info,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.user_name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 13
    }
  }, ((_auth$user4 = auth.user) === null || _auth$user4 === void 0 ? void 0 : _auth$user4.firstName) + " " + ((_auth$user5 = auth.user) === null || _auth$user5 === void 0 ? void 0 : _auth$user5.lastName)))), __jsx("h3", {
    style: {
      marginBottom: 40
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 9
    }
  }, caption), __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.reactions_shares_status,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.reactions_status,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 11
    }
  }, likeData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Tooltip"], {
    placement: "bottom",
    title: getLikeActionUserInfo(likeData),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
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
      lineNumber: 252,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 17
    }
  }, likeData.length))), hahaData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Tooltip"], {
    placement: "bottom",
    title: getLikeActionUserInfo(hahaData),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
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
  }, hahaData.length))), heartData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Tooltip"], {
    placement: "bottom",
    title: getLikeActionUserInfo(heartData),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
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
  }, heartData.length))), wowData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Tooltip"], {
    placement: "bottom",
    title: getLikeActionUserInfo(wowData),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
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
      lineNumber: 272,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 17
    }
  }, wowData.length))), sadData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Tooltip"], {
    placement: "bottom",
    title: getLikeActionUserInfo(sadData),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
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
      lineNumber: 279,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 17
    }
  }, sadData.length)))), shares && shares.length > 0 ? __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.shares_status,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 41
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Tooltip"], {
    placement: "top",
    title: 'Share',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_21__["FontAwesomeIcon"], {
    icon: ['far', 'share-square'],
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
      lineNumber: 292,
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
      lineNumber: 304,
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
      lineNumber: 348,
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
      lineNumber: 348,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlL1Bob3Rvc01vZGFsLmpzIl0sIm5hbWVzIjpbIlRleHRBcmVhIiwiSW5wdXQiLCJQaG90b3NNb2RhbCIsImRhdGEiLCJvblJhdGVQb3N0IiwicGhvdG9JbmRleCIsImxpa2VBY3Rpb24iLCJzaGFyZUFjdGlvbiIsImFjdGl2ZUltYWdlSWQiLCJhdXRoIiwicmVzdCIsInVzZVN0YXRlIiwic2xpZGVySW5kZXgiLCJzZXRTbGlkZXJJbmRleCIsInVzZUNvbnRleHQiLCJQaG90b3NDb250ZXh0Iiwic3RvcmFnZSIsImRpc3BhdGNoIiwibW9kYWxNb2RlIiwic2V0TW9kYWxNb2RlIiwiYWN0aXZlUG9zdElkIiwic2V0QWN0aXZlUG9zdElkIiwic2V0VGltZXN0YW1wIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImdldFBob3RvIiwiaSIsImxlbmd0aCIsInNldExvYWRpbmciLCJpZCIsIkFQSSIsIm1ldGhvZCIsInVybCIsImhlYWRlcnMiLCJ0b2tlbiIsInJlcXVlc3QiLCJzdGF0dXMiLCJzZXRQaG90byIsImhhbmRsZU9uRHJhZ1N0YXJ0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2xpZGVOZXh0Iiwic3RhdGUiLCJzbGlkZVByZXYiLCJvblNsaWRlQ2hhbmdlZCIsIml0ZW0iLCJoYW5kbGVSYXRlUGhvdG8iLCJyYXRlIiwib25VcGRhdGVUaW1lbGluZSIsIm5ld0NvbW1lbnQiLCJjb21tZW50cyIsInBob3RvRGF0YSIsImFkZEVsZW1lbnQiLCJhY2NvdW50IiwidXNlciIsImxhc3RQaG90byIsImhhbmRsZVNob3dDb21tZW50TW9kYWwiLCJnZXRMaWtlQWN0aW9uVXNlckluZm8iLCJmaW5hbERhdGEiLCJtYXAiLCJpbmRleCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwib25Mb2FkIiwiRGF0ZSIsIm5vdyIsInJvdW5kUmF0aW5nIiwicmF0aW5nIiwiY2FwdGlvbiIsImNvbW1lbnRzQ291bnQiLCJyZWFjdGlvbnMiLCJzaGFyZXMiLCJ0eXBlIiwibGlrZURhdGEiLCJmaWx0ZXIiLCJyZWFjdGlvbiIsImhlYXJ0RGF0YSIsIndvd0RhdGEiLCJoYWhhRGF0YSIsInNhZERhdGEiLCJjYXJvdXNlbERhdGEiLCJmaXJzdERhdGEiLCJzZWNvbmREYXRhIiwiZm9yRWFjaCIsInN0eWxlcyIsImNvbnRhaW5lciIsImFjdGlvbnMiLCJwcmV2X2FjdGlvbiIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwib3BhY2l0eSIsIm1hcmdpbkxlZnQiLCJuZXh0X2FjdGlvbiIsIm1hcmdpblJpZ2h0IiwicGhvdG9fY29udGFpbmVyIiwicGhvdG8iLCJibG9iX3RuIiwic3JjIiwicmF0aW5nX3dyYXBwZXIiLCJjb21tZW50UmVhY3Rpb24iLCJsb2FkaW5nIiwicGhvdG9faGVhZGVyIiwiYXZhdGFyIiwicHJvZmlsZVBob3RvIiwidXNlcm5hbWUiLCJ1c2VyX2luZm8iLCJ1c2VyX25hbWUiLCJtYXJnaW5Cb3R0b20iLCJyZWFjdGlvbnNfc2hhcmVzX3N0YXR1cyIsInJlYWN0aW9uc19zdGF0dXMiLCJjdXJzb3IiLCJzaGFyZXNfc3RhdHVzIiwidGVybSIsImRlZmF1bHRQcm9wcyIsIkxhenlMb2FkZXIiLCJwcm9wcyIsInRpbWVySWQiLCJkZWxheSIsImlzTW91bnRlZCIsInNldE1vdW50ZWQiLCJpc0xvYWRpbmciLCJsb2FkSW1hZ2UiLCJpbWFnZSIsIkltYWdlIiwib25sb2FkIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsIndpZHRoIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7SUFDUUEsUSxHQUFhQywyQyxDQUFiRCxRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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ZWJwYWNrL3BhZ2VzL3RpbWVsaW5lLjkyOGQ0NDY2ZjYxNTZlNTE5ZTFkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3RNb2RhbCBmcm9tICdyZWFjdC1tb2RhbCc7XHJcbmltcG9ydCBBbGljZUNhcm91c2VsIGZyb20gJ3JlYWN0LWFsaWNlLWNhcm91c2VsJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy9waG90b3NfbW9kYWwubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgUGhvdG9Nb2RhbFdyYXBwZXIgZnJvbSAnY29tcG9uZW50cy9jb21tb24vUGhvdG9Nb2RhbFdyYXBwZXInO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIExlZnRDaXJjbGVGaWxsZWQsXHJcbiAgUmlnaHRDaXJjbGVGaWxsZWQsXHJcbiAgTGVmdE91dGxpbmVkLFxyXG4gIFJpZ2h0T3V0bGluZWQsXHJcbn0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyBSYXRpbmdTbGlkZSB9IGZyb20gJ2NvbXBvbmVudHMvZm9ybXMnO1xyXG5pbXBvcnQgeyBJbnB1dCwgUG9wb3ZlciwgVG9vbHRpcCwgU3BpbiwgUmF0ZSB9IGZyb20gJ2FudGQnO1xyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuaW1wb3J0IEFQSSBmcm9tICdjb25maWdzL0FQSSc7XHJcbmltcG9ydCBDb21tZW50cyBmcm9tICcuLi90aW1lbGluZS9Db21tZW50cyc7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnY29tcG9uZW50cy9jb21tb24vQXZhdGFyJztcclxuaW1wb3J0IEFjdGlvbnMgZnJvbSAnY29tcG9uZW50cy90aW1lbGluZS9BY3Rpb25zJztcclxuaW1wb3J0IHsgUGhvdG9zQ29udGV4dCB9IGZyb20gJ2NvbnRhaW5lcnMvUGhvdG9zL3N0b3JhZ2UvUGhvdG9Db250ZXh0JztcclxuaW1wb3J0IHsgc2V0UGhvdG8sIHNldExvYWRpbmcgfSBmcm9tICdjb250YWluZXJzL1Bob3Rvcy9hY3Rpb25zJztcclxuaW1wb3J0IExvYWRpbmdXcmFwcGVyIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL0xvYWRpbmdXcmFwcGVyJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IHsgZm9yRWFjaCB9IGZyb20gJ2xvZGFzaCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGhvdG9zTW9kYWwoeyBcclxuICBkYXRhLCBcclxuICBvblJhdGVQb3N0LCBcclxuICBwaG90b0luZGV4LCBcclxuICBsaWtlQWN0aW9uLCBcclxuICBzaGFyZUFjdGlvbiwgXHJcbiAgYWN0aXZlSW1hZ2VJZCxcclxuICBhdXRoLCBcclxuICAuLi5yZXN0IFxyXG59KSB7XHJcbiAgY29uc3QgW3NsaWRlckluZGV4LCBzZXRTbGlkZXJJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbc3RvcmFnZSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChQaG90b3NDb250ZXh0KTtcclxuICBjb25zdCBbbW9kYWxNb2RlLCBzZXRNb2RhbE1vZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFthY3RpdmVQb3N0SWQsIHNldEFjdGl2ZVBvc3RJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbLCBzZXRUaW1lc3RhbXBdID0gdXNlU3RhdGUoMCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGFjdGl2ZUltYWdlSWQpO1xyXG4gICAgZ2V0UGhvdG8oc2xpZGVySW5kZXgpO1xyXG4gIH0sIFtdKTtcclxuIFxyXG4gIGNvbnN0IGdldFBob3RvID0gYXN5bmMgKGkpID0+IHtcclxuICAgIFxyXG4gICAgaWYoZGF0YS5sZW5ndGggPT0gMCkge1xyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKHRydWUpKVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYodHlwZW9mIGRhdGFbaV0uaWQgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcodHJ1ZSkpXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcodHJ1ZSkpXHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybDogJy9waG90b3MvZ2V0JyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBcImlkXCI6IGRhdGFbaV0uaWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyAgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBkaXNwYXRjaChzZXRQaG90byhyZXF1ZXN0LmRhdGEpKVxyXG4gICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKVxyXG4gICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gNDAzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1BsZWFzZSByZWZyZXNoIHRva2VuIScpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIFxyXG4gICAgICB9XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgIFxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVPbkRyYWdTdGFydCA9IChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3Qgc2xpZGVOZXh0ID0gKCkgPT4gc2V0U2xpZGVySW5kZXgoKHN0YXRlKSA9PiB7IFxyXG4gICAgaWYoZGF0YS5sZW5ndGggPD0gc3RhdGUgKyAxKSB7XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGdldFBob3RvKHN0YXRlKzEpO1xyXG4gICAgICByZXR1cm4gc3RhdGUgKyAxO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGNvbnN0IHNsaWRlUHJldiA9ICgpID0+IHNldFNsaWRlckluZGV4KChzdGF0ZSkgPT4ge1xyXG4gICAgaWYoc3RhdGUgPD0gMCkge1xyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGdldFBob3RvKHN0YXRlLTEpO1xyXG4gICAgICByZXR1cm4gc3RhdGUgLSAxO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGNvbnN0IG9uU2xpZGVDaGFuZ2VkID0gKGUpID0+IHNldFNsaWRlckluZGV4KGUuaXRlbSk7XHJcbiAgY29uc3QgaGFuZGxlUmF0ZVBob3RvID0gKHJhdGUpID0+IHtcclxuICAgIGlmKHR5cGVvZiBkYXRhW3NsaWRlckluZGV4XS5pZCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgb25SYXRlUG9zdCgnUGhvdG8nLCBkYXRhW3NsaWRlckluZGV4XS5pZCwgcmF0ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25VcGRhdGVUaW1lbGluZSA9IGFzeW5jIChuZXdDb21tZW50KSA9PiB7XHJcbiAgICBjb25zdCAgeyBjb21tZW50cyB9ID0gc3RvcmFnZS5waG90b0RhdGE7XHJcbiAgICBsZXQgYWRkRWxlbWVudCA9IHtcclxuICAgICAgYWNjb3VudDogYXV0aC51c2VyLCBcclxuICAgICAgLi4ubmV3Q29tbWVudC5jb21tZW50c1swXVxyXG4gICAgfVxyXG4gICAgdmFyIGxhc3RQaG90byA9IHsuLi5zdG9yYWdlLnBob3RvRGF0YSwgY29tbWVudHM6IFsuLi5jb21tZW50cywgYWRkRWxlbWVudF19O1xyXG4gICAgZGlzcGF0Y2goc2V0UGhvdG8obGFzdFBob3RvKSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVTaG93Q29tbWVudE1vZGFsID0gKGlkKSA9PiB7XHJcbiAgICBzZXRNb2RhbE1vZGUoIW1vZGFsTW9kZSk7XHJcbiAgICBzZXRBY3RpdmVQb3N0SWQoaWQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldExpa2VBY3Rpb25Vc2VySW5mbyA9IChkYXRhKSA9PiB7XHJcbiAgICB2YXIgZmluYWxEYXRhID0gJyc7XHJcbiAgICBkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgZmluYWxEYXRhID0gZmluYWxEYXRhICsgJyAnICsgaXRlbS5hY2NvdW50LmZpcnN0TmFtZSArICcnICsgaXRlbS5hY2NvdW50Lmxhc3ROYW1lIDtcclxuICAgIH0pXHJcbiAgICByZXR1cm4gZmluYWxEYXRhO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25Mb2FkID0gKCkgPT4gc2V0VGltZXN0YW1wKERhdGUubm93KCkpO1xyXG5cclxuICBjb25zdCByb3VuZFJhdGluZyA9IHN0b3JhZ2UucGhvdG9EYXRhPy5yYXRpbmc7XHJcbiAgY29uc3QgY2FwdGlvbiA9ICBzdG9yYWdlLnBob3RvRGF0YT8uY2FwdGlvbjtcclxuICBjb25zdCBjb21tZW50cyA9IHN0b3JhZ2UucGhvdG9EYXRhPy5jb21tZW50cztcclxuICBjb25zdCBjb21tZW50c0NvdW50ID0gc3RvcmFnZS5waG90b0RhdGE/LmNvbW1lbnRzQ291bnQ7XHJcbiAgY29uc3QgcmVhY3Rpb25zID0gc3RvcmFnZS5waG90b0RhdGE/LnJlYWN0aW9ucztcclxuICBjb25zdCBzaGFyZXMgPSBzdG9yYWdlLnBob3RvRGF0YT8uc2hhcmVzO1xyXG4gIGNvbnN0IGlkID0gc3RvcmFnZS5waG90b0RhdGE/LmlkO1xyXG4gIGNvbnN0IHR5cGUgPSBkYXRhW3NsaWRlckluZGV4XT8udHlwZTtcclxuICBjb25zdCBsaWtlRGF0YSA9IHJlYWN0aW9ucz8gcmVhY3Rpb25zPy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlYWN0aW9uID09ICdMSUtFJyk6W107XHJcbiAgY29uc3QgaGVhcnREYXRhID0gIHJlYWN0aW9ucz8gcmVhY3Rpb25zPy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlYWN0aW9uID09ICdIRUFSVCcpOltdO1xyXG4gIGNvbnN0IHdvd0RhdGEgPSByZWFjdGlvbnMgPyByZWFjdGlvbnM/LmZpbHRlcihpdGVtID0+IGl0ZW0ucmVhY3Rpb24gPT0gJ1dPVycpOltdO1xyXG4gIGNvbnN0IGhhaGFEYXRhID0gcmVhY3Rpb25zID8gcmVhY3Rpb25zPy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlYWN0aW9uID09ICdIQUhBJyk6W107XHJcbiAgY29uc3Qgc2FkRGF0YSA9IHJlYWN0aW9ucyA/IHJlYWN0aW9ucz8uZmlsdGVyKGl0ZW0gPT4gaXRlbS5yZWFjdGlvbiA9PSAnU0FEJyk6W107XHJcbiAgXHJcbiAgbGV0IGNhcm91c2VsRGF0YSA9IFtdO1xyXG4gIGxldCBmaXJzdERhdGEgPSBbXTtcclxuICBsZXQgc2Vjb25kRGF0YSA9IFtdO1xyXG4gIGNvbnNvbGUubG9nKCdpbml0aWFsIGFycmFyeScsIGRhdGEpXHJcbiAgLy8gZGF0YS5tYXAoKGl0ZW0sIGkpID0+IHtcclxuICAvLyAgIGlmKGl0ZW0uc3JjID09PSBhY3RpdmVJbWFnZUlkKSB7XHJcbiAgLy8gICAgIGZpcnN0RGF0YSA9IGRhdGEuc2xpY2UoaSxkYXRhLmxlbmd0aCk7XHJcbiAgLy8gICAgIGJyZWFrO1xyXG4gIC8vICAgfVxyXG4gIC8vICAgc2Vjb25kRGF0YS5wdXNoKGl0ZW0pO1xyXG4gIC8vIH0pXHJcbiAgXHJcbiAgZGF0YS5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhpKVxyXG4gIH0pXHJcbiAgY29uc29sZS5sb2coJ2ZpcnN0IGRhdGEnLCBmaXJzdERhdGEpO1xyXG4gIGNvbnNvbGUubG9nKCdzZWNvbmQgZGF0YScsIHNlY29uZERhdGEpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8UGhvdG9Nb2RhbFdyYXBwZXIgey4uLnJlc3QgfSBwcm9maWxlUGhvdG8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvbnN9PlxyXG4gICAgICAgICAgPExlZnRPdXRsaW5lZFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wcmV2X2FjdGlvbn1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2xpZGVQcmV2KCl9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyNSxcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnYmxhY2snLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDgsXHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC42LFxyXG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDE1XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFJpZ2h0T3V0bGluZWRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubmV4dF9hY3Rpb259XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNsaWRlTmV4dCgpfVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMjUsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ2JsYWNrJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA4LFxyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNixcclxuICAgICAgICAgICAgICBtYXJnaW5SaWdodDogMTVcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEFsaWNlQ2Fyb3VzZWxcclxuICAgICAgICAgIG1vdXNlVHJhY2tpbmdFbmFibGVkXHJcbiAgICAgICAgICBkb3RzRGlzYWJsZWRcclxuICAgICAgICAgIGJ1dHRvbnNEaXNhYmxlZFxyXG4gICAgICAgICAgc2xpZGVUb0luZGV4PXtzbGlkZXJJbmRleH1cclxuICAgICAgICAgIG9uU2xpZGVDaGFuZ2VkPXtvblNsaWRlQ2hhbmdlZH1cclxuICAgICAgICAgIGluZmluaXRlPXtmYWxzZX1cclxuICAgICAgICAgIC8vIGF1dG9IZWlnaHQgIFxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtjYXJvdXNlbERhdGEubWFwKChpdGVtLCBpbmRleCkgPT4geyBcclxuICAgICAgICAgIC8vIGlmKGl0ZW0uc3JjID09PSBhY3RpdmVJbWFnZUlkKSB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBob3RvX2NvbnRhaW5lcn0ga2V5PXtpbmRleH0gZGF0YS12YWx1ZT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG99PlxyXG4gICAgICAgICAgICAgICAgPExhenlMb2FkZXIgb25Mb2FkPXtvbkxvYWR9IHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7KGl0ZW0/LmJsb2JfdG4gIT09IG51bGwpPyhpdGVtPy5ibG9iX3RuKTooaXRlbT8uc3JjKX1gfSBkZWxheT17MTAwMH0vPixcclxuICAgICAgICAgICAgICAgIHsvKiA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIG9uRHJhZ1N0YXJ0PXtoYW5kbGVPbkRyYWdTdGFydH1cclxuICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHsoaXRlbT8uYmxvYl90biAhPT0gbnVsbCk/KGl0ZW0/LmJsb2JfdG4pOihpdGVtPy5zcmMpfWB9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIClcclxuICAgICAgICAgIC8vIH1cclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvQWxpY2VDYXJvdXNlbD5cclxuICAgICAgICBcclxuICAgICAgICB7ZGF0YS5sZW5ndGggIT09IDAgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yYXRpbmdfd3JhcHBlcn0+XHJcbiAgICAgICAgICAgIDxSYXRpbmdTbGlkZVxyXG4gICAgICAgICAgICBkZWZhdWx0UmF0ZT17cm91bmRSYXRpbmd9XHJcbiAgICAgICAgICAgIHdpdGhvdXRUZXh0XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVSYXRlUGhvdG99XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgey8qIDxzcGFuPntyb3VuZFJhdGluZ308L3NwYW4+ICovfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnRSZWFjdGlvbn0+XHJcbiAgICAgICA8TG9hZGluZ1dyYXBwZXIgbG9hZGluZz17c3RvcmFnZS5sb2FkaW5nfT5cclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9faGVhZGVyfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyfT5cclxuICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgIHRleHQ9e2F1dGgudXNlcj8uZmlyc3ROYW1lICsgXCIgXCIgKyBhdXRoLnVzZXI/Lmxhc3ROYW1lfVxyXG4gICAgICAgICAgICAgIHVybD17YCR7YXV0aC51c2VyLnByb2ZpbGVQaG90by5zcmN9YH1cclxuICAgICAgICAgICAgICBzaXplPXs2MH1cclxuICAgICAgICAgICAgICBib3JkZXJTaXplPXszfVxyXG4gICAgICAgICAgICAgIHVzZXJuYW1lPXthdXRoLnVzZXI/LnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfaW5mb30+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfbmFtZX0+e2F1dGgudXNlcj8uZmlyc3ROYW1lICsgXCIgXCIgKyBhdXRoLnVzZXI/Lmxhc3ROYW1lfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgXHJcbiAgICAgICAgPGgzIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogNDAgfX0+e2NhcHRpb259PC9oMz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlYWN0aW9uc19zaGFyZXNfc3RhdHVzfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVhY3Rpb25zX3N0YXR1c30+XHJcbiAgICAgICAgICAgIHsgbGlrZURhdGEubGVuZ3RoID4gMCAmJiA8PlxyXG4gICAgICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPXtnZXRMaWtlQWN0aW9uVXNlckluZm8obGlrZURhdGEpfT5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAndGh1bWJzLXVwJ119IHNpemU9XCIxeFwiICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJ319Lz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPntsaWtlRGF0YS5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvVG9vbHRpcD48Lz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7IGhhaGFEYXRhLmxlbmd0aCA+IDAgJiYgPD5cclxuICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKGhhaGFEYXRhKX0+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ2dyaW4nXX0gc2l6ZT1cIjF4XCIgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInfX0vPiBcclxuICAgICAgICAgICAgICAgIDxzcGFuPntoYWhhRGF0YS5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7IGhlYXJ0RGF0YS5sZW5ndGggPiAwICYmIDw+IFxyXG4gICAgICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPXtnZXRMaWtlQWN0aW9uVXNlckluZm8oaGVhcnREYXRhKX0+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ2hlYXJ0J119IHNpemU9XCIxeFwiICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJ319Lz4gXHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57aGVhcnREYXRhLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHsgd293RGF0YS5sZW5ndGggPiAwICYmIDw+IFxyXG4gICAgICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPXtnZXRMaWtlQWN0aW9uVXNlckluZm8od293RGF0YSl9PlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdsYXVnaCddfSBzaXplPVwiMXhcIiAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcid9fS8+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57d293RGF0YS5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICA8Lz4gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgeyBzYWREYXRhLmxlbmd0aCA+IDAgJiYgPD5cclxuICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKHNhZERhdGEpfT5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAnZnJvd24nXX0gc2l6ZT1cIjF4XCIgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInfX0vPiBcclxuICAgICAgICAgICAgICAgIDxzcGFuPntzYWREYXRhLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHtzaGFyZXMgJiYgc2hhcmVzLmxlbmd0aCA+IDAgPzxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2hhcmVzX3N0YXR1c30+XHJcbiAgICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cInRvcFwiIHRpdGxlPXsnU2hhcmUnfT5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAnc2hhcmUtc3F1YXJlJ119Lz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPntzaGFyZXMubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgPC9kaXY+Om51bGx9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEFjdGlvbnNcclxuICAgICAgICAgIGlkPXtpZH1cclxuICAgICAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgICAgICBwb3N0UmF0ZT17cm91bmRSYXRpbmd9XHJcbiAgICAgICAgICBjb21tZW50cz17Y29tbWVudHN9XHJcbiAgICAgICAgICBjb21tZW50c0NvdW50PXtjb21tZW50c0NvdW50fVxyXG4gICAgICAgICAgb25SYXRlUG9zdD17b25SYXRlUG9zdH1cclxuICAgICAgICAgIGluZGV4PXtzbGlkZXJJbmRleH1cclxuICAgICAgICAgIGxpa2VBY3Rpb249eyh0ZXJtKSA9PiBsaWtlQWN0aW9uKHR5cGUsIGlkLCB0ZXJtKX1cclxuICAgICAgICAgIHNoYXJlQWN0aW9uPXsoKSA9PiBzaGFyZUFjdGlvbih0eXBlLCBpZCl9XHJcbiAgICAgICAgICBhY3Rpb25zPXsoKSA9PiB7IGhhbmRsZVNob3dDb21tZW50TW9kYWwoaWQpIH0gfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPENvbW1lbnRzXHJcbiAgICAgICAgICBpZD17aWR9XHJcbiAgICAgICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICAgICAgZGF0YT17Y29tbWVudHN9XHJcbiAgICAgICAgICBvblVwZGF0ZVRpbWVsaW5lPXtvblVwZGF0ZVRpbWVsaW5lfVxyXG4gICAgICAgICAgYWN0aXZlUG9zdElkPXthY3RpdmVQb3N0SWR9XHJcbiAgICAgICAgICBtb2RhbE1vZGU9e21vZGFsTW9kZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDwvTG9hZGluZ1dyYXBwZXI+XHJcbiAgICAgICA8L2Rpdj5cclxuICAgIDwvUGhvdG9Nb2RhbFdyYXBwZXI+XHJcbiAgKTtcclxufVxyXG5cclxuUGhvdG9zTW9kYWwuZGVmYXVsdFByb3BzID0ge1xyXG4gIGRhdGE6IFtdLFxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gTGF6eUxvYWRlcihwcm9wcykge1xyXG4gIGxldCB0aW1lcklkO1xyXG4gIGNvbnN0IHsgc3JjID0gJycsIGRlbGF5ID0gMCwgb25Mb2FkIH0gPSBwcm9wcztcclxuICBjb25zdCBbaXNNb3VudGVkLCBzZXRNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBmdW5jdGlvbiBsb2FkSW1hZ2UoKSB7XHJcbiAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgIGltYWdlLnNyYyA9IHNyYztcclxuICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICBvbkxvYWQoKTtcclxuICAgICAgfTtcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWlzTW91bnRlZCkge1xyXG4gICAgICBzZXRNb3VudGVkKHRydWUpO1xyXG4gICAgICBkZWxheSA/ICh0aW1lcklkID0gc2V0VGltZW91dChsb2FkSW1hZ2UsIGRlbGF5KSkgOiBsb2FkSW1hZ2UoKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXJJZCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVPbkRyYWdTdGFydCA9IChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIHJldHVybiBpc0xvYWRpbmcgPyA8U3BpbiBzaXplPVwibGFyZ2VcIi8+IDogPGltZyBvbkRyYWdTdGFydD17aGFuZGxlT25EcmFnU3RhcnR9IHNyYz17c3JjfSAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScgfX0vPjtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=