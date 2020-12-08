webpackHotUpdate_N_E("pages/profile",{

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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-alice-carousel */ "./node_modules/react-alice-carousel/lib/react-alice-carousel.js");
/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_alice_carousel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/photos_modal.module.scss */ "./components/profile/styles/photos_modal.module.scss");
/* harmony import */ var _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components_common_PhotoModalWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/common/PhotoModalWrapper */ "./components/common/PhotoModalWrapper.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var components_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/forms */ "./components/forms/index.js");
/* harmony import */ var configs_API__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! configs/API */ "./configs/API.js");
/* harmony import */ var _timeline_Comments__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../timeline/Comments */ "./components/timeline/Comments.js");
/* harmony import */ var components_common_Avatar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/common/Avatar */ "./components/common/Avatar.js");
/* harmony import */ var components_timeline_Actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/timeline/Actions */ "./components/timeline/Actions.js");
/* harmony import */ var containers_Photos_storage_PhotoContext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! containers/Photos/storage/PhotoContext */ "./containers/Photos/storage/PhotoContext.js");
/* harmony import */ var containers_Photos_actions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! containers/Photos/actions */ "./containers/Photos/actions/index.js");
/* harmony import */ var components_common_LoadingWrapper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! components/common/LoadingWrapper */ "./components/common/LoadingWrapper.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");




var _jsxFileName = "E:\\freeskies_fe_code\\components\\profile\\PhotosModal.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










const {
  TextArea
} = antd__WEBPACK_IMPORTED_MODULE_8__["Input"];








function PhotosModal(_ref) {
  _s();

  var _storage$photoData, _storage$photoData2, _storage$photoData3, _storage$photoData4, _storage$photoData5, _storage$photoData6, _data$sliderIndex, _storage$photoData7, _auth$user, _auth$user2, _auth$user3, _auth$user4, _auth$user5;

  let {
    data,
    onRatePost,
    photoIndex,
    likeAction,
    shareAction,
    auth
  } = _ref,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["data", "onRatePost", "photoIndex", "likeAction", "shareAction", "auth"]);

  console.log(data);
  const {
    0: sliderIndex,
    1: setSliderIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0);
  const {
    0: storage,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(containers_Photos_storage_PhotoContext__WEBPACK_IMPORTED_MODULE_15__["PhotosContext"]);
  console.log(storage);
  const {
    0: modalMode,
    1: setModalMode
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  const {
    0: activePostId,
    1: setActivePostId
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    getPhoto(sliderIndex);
  }, []);

  const getPhoto = async i => {
    if (data.length == 0) {
      dispatch(Object(containers_Photos_actions__WEBPACK_IMPORTED_MODULE_16__["setLoading"])(true));
      return;
    }

    if (typeof data[i].id === 'undefined') {
      dispatch(Object(containers_Photos_actions__WEBPACK_IMPORTED_MODULE_16__["setLoading"])(true));
      return;
    }

    try {
      dispatch(Object(containers_Photos_actions__WEBPACK_IMPORTED_MODULE_16__["setLoading"])(true));
      const request = await Object(configs_API__WEBPACK_IMPORTED_MODULE_11__["default"])({
        method: 'post',
        url: '/photos/get',
        data: {
          "id": data[i].id
        },
        headers: {
          'x-token': auth.token
        }
      });
      const {
        status
      } = request;

      if (status === 200) {
        dispatch(Object(containers_Photos_actions__WEBPACK_IMPORTED_MODULE_16__["setPhoto"])(request.data));
        dispatch(Object(containers_Photos_actions__WEBPACK_IMPORTED_MODULE_16__["setLoading"])(false));
      } else if (status === 403) {
        console.log('Please refresh token!');
      } else {}
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnDragStart = e => e.preventDefault();

  const slideNext = () => setSliderIndex(state => {
    if (data.length <= state + 1) {
      return state;
    } else {
      getPhoto(state + 1);
      return state + 1;
    }
  });

  const slidePrev = () => setSliderIndex(state => {
    if (state <= 0) {
      return 0;
    } else {
      getPhoto(state - 1);
      return state - 1;
    }
  });

  const onSlideChanged = e => setSliderIndex(e.item);

  const handleRatePhoto = rate => {
    if (typeof data[sliderIndex].id === 'undefined') {
      return;
    }

    onRatePost('Photo', data[sliderIndex].id, rate);
  };

  const onUpdateTimeline = async newComment => {
    const {
      comments
    } = storage.photoData;

    let addElement = _objectSpread({
      account: auth.user
    }, newComment.comments[0]);

    var lastPhoto = _objectSpread(_objectSpread({}, storage.photoData), {}, {
      comments: [...comments, addElement]
    });

    dispatch(Object(containers_Photos_actions__WEBPACK_IMPORTED_MODULE_16__["setPhoto"])(lastPhoto));
  };

  const handleShowCommentModal = id => {
    console.log(id);
    setModalMode(!modalMode);
    setActivePostId(id);
  };

  const getLikeActionUserInfo = data => {
    var finalData = '';
    data.map((item, index) => {
      finalData = finalData + ' ' + item.account.firstName + '' + item.account.lastName;
    });
    return finalData;
  };

  console.log(auth);
  console.log(storage);
  console.log(auth.user.profilePhoto.src);
  const roundRating = (_storage$photoData = storage.photoData) === null || _storage$photoData === void 0 ? void 0 : _storage$photoData.rating;
  const caption = (_storage$photoData2 = storage.photoData) === null || _storage$photoData2 === void 0 ? void 0 : _storage$photoData2.caption;
  const comments = (_storage$photoData3 = storage.photoData) === null || _storage$photoData3 === void 0 ? void 0 : _storage$photoData3.comments;
  const reactions = (_storage$photoData4 = storage.photoData) === null || _storage$photoData4 === void 0 ? void 0 : _storage$photoData4.reactions;
  const shares = (_storage$photoData5 = storage.photoData) === null || _storage$photoData5 === void 0 ? void 0 : _storage$photoData5.shares;
  const id = (_storage$photoData6 = storage.photoData) === null || _storage$photoData6 === void 0 ? void 0 : _storage$photoData6.id;
  const type = (_data$sliderIndex = data[sliderIndex]) === null || _data$sliderIndex === void 0 ? void 0 : _data$sliderIndex.type;
  console.log('shares', (_storage$photoData7 = storage.photoData) === null || _storage$photoData7 === void 0 ? void 0 : _storage$photoData7.shares);
  const likeData = reactions ? reactions === null || reactions === void 0 ? void 0 : reactions.filter(item => item.reaction == 'LIKE') : [];
  const heartData = reactions ? reactions === null || reactions === void 0 ? void 0 : reactions.filter(item => item.reaction == 'HEART') : [];
  const wowData = reactions ? reactions === null || reactions === void 0 ? void 0 : reactions.filter(item => item.reaction == 'WOW') : [];
  const hahaData = reactions ? reactions === null || reactions === void 0 ? void 0 : reactions.filter(item => item.reaction == 'HAHA') : [];
  const sadData = reactions ? reactions === null || reactions === void 0 ? void 0 : reactions.filter(item => item.reaction == 'SAD') : [];
  return __jsx(components_common_PhotoModalWrapper__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, {
    profilePhoto: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.actions,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 9
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["LeftOutlined"], {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.prev_action,
    onClick: () => slidePrev(),
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
      lineNumber: 140,
      columnNumber: 11
    }
  }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["RightOutlined"], {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.next_action,
    onClick: () => slideNext(),
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
      lineNumber: 151,
      columnNumber: 11
    }
  })), __jsx(react_alice_carousel__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
      lineNumber: 163,
      columnNumber: 9
    }
  }, data.map((item, index) => __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.photo_container,
    key: index,
    "data-value": index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.photo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 17
    }
  }, __jsx("img", {
    onDragStart: handleOnDragStart,
    src: "https://www.freeskies.com/static/".concat((item === null || item === void 0 ? void 0 : item.blob_tn) !== null ? item === null || item === void 0 ? void 0 : item.blob_tn : item === null || item === void 0 ? void 0 : item.src),
    alt: "",
    style: {
      width: '100%',
      height: "100%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 19
    }
  }))))), data.length !== 0 && __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.rating_wrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 11
    }
  }, __jsx(components_forms__WEBPACK_IMPORTED_MODULE_10__["RatingSlide"], {
    defaultRate: roundRating,
    withoutText: true,
    onChange: handleRatePhoto,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.commentReaction,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 8
    }
  }, __jsx(components_common_LoadingWrapper__WEBPACK_IMPORTED_MODULE_17__["default"], {
    loading: storage.loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.photo_header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 11
    }
  }, __jsx(components_common_Avatar__WEBPACK_IMPORTED_MODULE_13__["default"], {
    text: ((_auth$user = auth.user) === null || _auth$user === void 0 ? void 0 : _auth$user.firstName) + " " + ((_auth$user2 = auth.user) === null || _auth$user2 === void 0 ? void 0 : _auth$user2.lastName),
    url: "".concat(auth.user.profilePhoto.src),
    size: 60,
    borderSize: 3,
    username: (_auth$user3 = auth.user) === null || _auth$user3 === void 0 ? void 0 : _auth$user3.username,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.user_info,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.user_name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 13
    }
  }, ((_auth$user4 = auth.user) === null || _auth$user4 === void 0 ? void 0 : _auth$user4.firstName) + " " + ((_auth$user5 = auth.user) === null || _auth$user5 === void 0 ? void 0 : _auth$user5.lastName)))), __jsx("h3", {
    style: {
      marginBottom: 40
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 9
    }
  }, caption), __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.reactions_shares_status,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.reactions_status,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 11
    }
  }, likeData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Tooltip"], {
    placement: "bottom",
    title: getLikeActionUserInfo(likeData),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 15
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_18__["FontAwesomeIcon"], {
    icon: ['far', 'thumbs-up'],
    size: "1x",
    style: {
      cursor: 'pointer'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 17
    }
  }, likeData.length))), hahaData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Tooltip"], {
    placement: "bottom",
    title: getLikeActionUserInfo(hahaData),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 15
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_18__["FontAwesomeIcon"], {
    icon: ['far', 'grin'],
    size: "1x",
    style: {
      cursor: 'pointer'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 17
    }
  }, hahaData.length))), heartData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Tooltip"], {
    placement: "bottom",
    title: getLikeActionUserInfo(heartData),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 15
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_18__["FontAwesomeIcon"], {
    icon: ['far', 'heart'],
    size: "1x",
    style: {
      cursor: 'pointer'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 17
    }
  }, heartData.length))), wowData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Tooltip"], {
    placement: "bottom",
    title: getLikeActionUserInfo(wowData),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 15
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_18__["FontAwesomeIcon"], {
    icon: ['far', 'laugh'],
    size: "1x",
    style: {
      cursor: 'pointer'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 17
    }
  }, wowData.length))), sadData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Tooltip"], {
    placement: "bottom",
    title: getLikeActionUserInfo(sadData),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 15
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_18__["FontAwesomeIcon"], {
    icon: ['far', 'frown'],
    size: "1x",
    style: {
      cursor: 'pointer'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 17
    }
  }, sadData.length)))), shares && shares.length > 0 ? __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.shares_status,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 41
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Tooltip"], {
    placement: "top",
    title: 'Share',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_18__["FontAwesomeIcon"], {
    icon: ['far', 'share-square'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 17
    }
  }, shares.length))) : null), __jsx(components_timeline_Actions__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: id,
    type: type,
    postRate: roundRating,
    comments: comments,
    onRatePost: onRatePost,
    index: sliderIndex,
    likeAction: term => likeAction(type, id, term),
    shareAction: () => shareAction(type, id),
    actions: () => {
      handleShowCommentModal(id);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 9
    }
  }), __jsx(_timeline_Comments__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: id,
    type: type,
    data: comments,
    onUpdateTimeline: onUpdateTimeline,
    activePostId: activePostId,
    modalMode: modalMode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 9
    }
  }))));
}

_s(PhotosModal, "WM0JlyjzpjK1RNHySW4iDzDuwXw=");

_c = PhotosModal;
PhotosModal.defaultProps = {
  data: []
};

var _c;

$RefreshReg$(_c, "PhotosModal");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlL1Bob3Rvc01vZGFsLmpzIl0sIm5hbWVzIjpbIlRleHRBcmVhIiwiSW5wdXQiLCJQaG90b3NNb2RhbCIsImRhdGEiLCJvblJhdGVQb3N0IiwicGhvdG9JbmRleCIsImxpa2VBY3Rpb24iLCJzaGFyZUFjdGlvbiIsImF1dGgiLCJyZXN0IiwiY29uc29sZSIsImxvZyIsInNsaWRlckluZGV4Iiwic2V0U2xpZGVySW5kZXgiLCJ1c2VTdGF0ZSIsInN0b3JhZ2UiLCJkaXNwYXRjaCIsInVzZUNvbnRleHQiLCJQaG90b3NDb250ZXh0IiwibW9kYWxNb2RlIiwic2V0TW9kYWxNb2RlIiwiYWN0aXZlUG9zdElkIiwic2V0QWN0aXZlUG9zdElkIiwidXNlRWZmZWN0IiwiZ2V0UGhvdG8iLCJpIiwibGVuZ3RoIiwic2V0TG9hZGluZyIsImlkIiwicmVxdWVzdCIsIkFQSSIsIm1ldGhvZCIsInVybCIsImhlYWRlcnMiLCJ0b2tlbiIsInN0YXR1cyIsInNldFBob3RvIiwiZXJyb3IiLCJoYW5kbGVPbkRyYWdTdGFydCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNsaWRlTmV4dCIsInN0YXRlIiwic2xpZGVQcmV2Iiwib25TbGlkZUNoYW5nZWQiLCJpdGVtIiwiaGFuZGxlUmF0ZVBob3RvIiwicmF0ZSIsIm9uVXBkYXRlVGltZWxpbmUiLCJuZXdDb21tZW50IiwiY29tbWVudHMiLCJwaG90b0RhdGEiLCJhZGRFbGVtZW50IiwiYWNjb3VudCIsInVzZXIiLCJsYXN0UGhvdG8iLCJoYW5kbGVTaG93Q29tbWVudE1vZGFsIiwiZ2V0TGlrZUFjdGlvblVzZXJJbmZvIiwiZmluYWxEYXRhIiwibWFwIiwiaW5kZXgiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInByb2ZpbGVQaG90byIsInNyYyIsInJvdW5kUmF0aW5nIiwicmF0aW5nIiwiY2FwdGlvbiIsInJlYWN0aW9ucyIsInNoYXJlcyIsInR5cGUiLCJsaWtlRGF0YSIsImZpbHRlciIsInJlYWN0aW9uIiwiaGVhcnREYXRhIiwid293RGF0YSIsImhhaGFEYXRhIiwic2FkRGF0YSIsInN0eWxlcyIsImNvbnRhaW5lciIsImFjdGlvbnMiLCJwcmV2X2FjdGlvbiIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwib3BhY2l0eSIsIm1hcmdpbkxlZnQiLCJuZXh0X2FjdGlvbiIsIm1hcmdpblJpZ2h0IiwicGhvdG9fY29udGFpbmVyIiwicGhvdG8iLCJibG9iX3RuIiwid2lkdGgiLCJoZWlnaHQiLCJyYXRpbmdfd3JhcHBlciIsImNvbW1lbnRSZWFjdGlvbiIsImxvYWRpbmciLCJwaG90b19oZWFkZXIiLCJhdmF0YXIiLCJ1c2VybmFtZSIsInVzZXJfaW5mbyIsInVzZXJfbmFtZSIsIm1hcmdpbkJvdHRvbSIsInJlYWN0aW9uc19zaGFyZXNfc3RhdHVzIiwicmVhY3Rpb25zX3N0YXR1cyIsImN1cnNvciIsInNoYXJlc19zdGF0dXMiLCJ0ZXJtIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0EsTUFBTTtBQUFFQTtBQUFGLElBQWVDLDBDQUFyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQyxXQUFULE9BQStGO0FBQUE7O0FBQUE7O0FBQUEsTUFBMUU7QUFBRUMsUUFBRjtBQUFRQyxjQUFSO0FBQW9CQyxjQUFwQjtBQUFnQ0MsY0FBaEM7QUFBNENDLGVBQTVDO0FBQXlEQztBQUF6RCxHQUEwRTtBQUFBLE1BQVJDLElBQVE7O0FBQUNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZUixJQUFaO0FBQzdHLFFBQU07QUFBQSxPQUFDUyxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ0Msc0RBQVEsQ0FBQyxDQUFELENBQTlDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXNCQyx3REFBVSxDQUFDQyxxRkFBRCxDQUF0QztBQUFzRFIsU0FBTyxDQUFDQyxHQUFSLENBQVlJLE9BQVo7QUFDdEQsUUFBTTtBQUFBLE9BQUNJLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCTixzREFBUSxDQUFDLEtBQUQsQ0FBMUM7QUFDQSxRQUFNO0FBQUEsT0FBQ08sWUFBRDtBQUFBLE9BQWVDO0FBQWYsTUFBa0NSLHNEQUFRLENBQUMsSUFBRCxDQUFoRDtBQUNBUyx5REFBUyxDQUFDLE1BQU07QUFDZEMsWUFBUSxDQUFDWixXQUFELENBQVI7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUOztBQUlBLFFBQU1ZLFFBQVEsR0FBRyxNQUFPQyxDQUFQLElBQWE7QUFFNUIsUUFBR3RCLElBQUksQ0FBQ3VCLE1BQUwsSUFBZSxDQUFsQixFQUFxQjtBQUNuQlYsY0FBUSxDQUFDVyw2RUFBVSxDQUFDLElBQUQsQ0FBWCxDQUFSO0FBQ0E7QUFDRDs7QUFFRCxRQUFHLE9BQU94QixJQUFJLENBQUNzQixDQUFELENBQUosQ0FBUUcsRUFBZixLQUFzQixXQUF6QixFQUFzQztBQUNwQ1osY0FBUSxDQUFDVyw2RUFBVSxDQUFDLElBQUQsQ0FBWCxDQUFSO0FBQ0E7QUFDRDs7QUFDRCxRQUFJO0FBQ0ZYLGNBQVEsQ0FBQ1csNkVBQVUsQ0FBQyxJQUFELENBQVgsQ0FBUjtBQUNBLFlBQU1FLE9BQU8sR0FBRyxNQUFNQyw0REFBRyxDQUFDO0FBQ3hCQyxjQUFNLEVBQUUsTUFEZ0I7QUFFeEJDLFdBQUcsRUFBRSxhQUZtQjtBQUd4QjdCLFlBQUksRUFBRTtBQUNKLGdCQUFNQSxJQUFJLENBQUNzQixDQUFELENBQUosQ0FBUUc7QUFEVixTQUhrQjtBQU14QkssZUFBTyxFQUFFO0FBQUUscUJBQVd6QixJQUFJLENBQUMwQjtBQUFsQjtBQU5lLE9BQUQsQ0FBekI7QUFRQSxZQUFNO0FBQUdDO0FBQUgsVUFBY04sT0FBcEI7O0FBQ0EsVUFBSU0sTUFBTSxLQUFLLEdBQWYsRUFBb0I7QUFDbEJuQixnQkFBUSxDQUFDb0IsMkVBQVEsQ0FBQ1AsT0FBTyxDQUFDMUIsSUFBVCxDQUFULENBQVI7QUFDQWEsZ0JBQVEsQ0FBQ1csNkVBQVUsQ0FBQyxLQUFELENBQVgsQ0FBUjtBQUNELE9BSEQsTUFHTyxJQUFJUSxNQUFNLEtBQUssR0FBZixFQUFvQjtBQUN6QnpCLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaO0FBQ0QsT0FGTSxNQUVBLENBRU47QUFFRixLQXBCRCxDQW9CRSxPQUFPMEIsS0FBUCxFQUFjO0FBQ2QzQixhQUFPLENBQUNDLEdBQVIsQ0FBWTBCLEtBQVo7QUFFRDtBQUNGLEdBbkNEOztBQW9DQSxRQUFNQyxpQkFBaUIsR0FBSUMsQ0FBRCxJQUFPQSxDQUFDLENBQUNDLGNBQUYsRUFBakM7O0FBQ0EsUUFBTUMsU0FBUyxHQUFHLE1BQU01QixjQUFjLENBQUU2QixLQUFELElBQVc7QUFDaEQsUUFBR3ZDLElBQUksQ0FBQ3VCLE1BQUwsSUFBZWdCLEtBQUssR0FBRyxDQUExQixFQUE2QjtBQUMzQixhQUFPQSxLQUFQO0FBQ0QsS0FGRCxNQUVPO0FBQ0xsQixjQUFRLENBQUNrQixLQUFLLEdBQUMsQ0FBUCxDQUFSO0FBQ0EsYUFBT0EsS0FBSyxHQUFHLENBQWY7QUFDRDtBQUNGLEdBUHFDLENBQXRDOztBQVFBLFFBQU1DLFNBQVMsR0FBRyxNQUFNOUIsY0FBYyxDQUFFNkIsS0FBRCxJQUFXO0FBQ2hELFFBQUdBLEtBQUssSUFBSSxDQUFaLEVBQWU7QUFDYixhQUFPLENBQVA7QUFDRCxLQUZELE1BRU87QUFDTGxCLGNBQVEsQ0FBQ2tCLEtBQUssR0FBQyxDQUFQLENBQVI7QUFDQSxhQUFPQSxLQUFLLEdBQUcsQ0FBZjtBQUNEO0FBQ0YsR0FQcUMsQ0FBdEM7O0FBUUEsUUFBTUUsY0FBYyxHQUFJTCxDQUFELElBQU8xQixjQUFjLENBQUMwQixDQUFDLENBQUNNLElBQUgsQ0FBNUM7O0FBQ0EsUUFBTUMsZUFBZSxHQUFJQyxJQUFELElBQVU7QUFDaEMsUUFBRyxPQUFPNUMsSUFBSSxDQUFDUyxXQUFELENBQUosQ0FBa0JnQixFQUF6QixLQUFnQyxXQUFuQyxFQUFnRDtBQUM5QztBQUNEOztBQUNEeEIsY0FBVSxDQUFDLE9BQUQsRUFBVUQsSUFBSSxDQUFDUyxXQUFELENBQUosQ0FBa0JnQixFQUE1QixFQUFnQ21CLElBQWhDLENBQVY7QUFDRCxHQUxEOztBQU9BLFFBQU1DLGdCQUFnQixHQUFHLE1BQU9DLFVBQVAsSUFBc0I7QUFDN0MsVUFBTztBQUFFQztBQUFGLFFBQWVuQyxPQUFPLENBQUNvQyxTQUE5Qjs7QUFDQSxRQUFJQyxVQUFVO0FBQ1pDLGFBQU8sRUFBRTdDLElBQUksQ0FBQzhDO0FBREYsT0FFVEwsVUFBVSxDQUFDQyxRQUFYLENBQW9CLENBQXBCLENBRlMsQ0FBZDs7QUFJQSxRQUFJSyxTQUFTLG1DQUFPeEMsT0FBTyxDQUFDb0MsU0FBZjtBQUEwQkQsY0FBUSxFQUFFLENBQUMsR0FBR0EsUUFBSixFQUFjRSxVQUFkO0FBQXBDLE1BQWI7O0FBQ0FwQyxZQUFRLENBQUNvQiwyRUFBUSxDQUFDbUIsU0FBRCxDQUFULENBQVI7QUFDRCxHQVJEOztBQVVBLFFBQU1DLHNCQUFzQixHQUFJNUIsRUFBRCxJQUFRO0FBQUNsQixXQUFPLENBQUNDLEdBQVIsQ0FBWWlCLEVBQVo7QUFDdENSLGdCQUFZLENBQUMsQ0FBQ0QsU0FBRixDQUFaO0FBQ0FHLG1CQUFlLENBQUNNLEVBQUQsQ0FBZjtBQUNELEdBSEQ7O0FBS0EsUUFBTTZCLHFCQUFxQixHQUFJdEQsSUFBRCxJQUFVO0FBQ3RDLFFBQUl1RCxTQUFTLEdBQUcsRUFBaEI7QUFDQXZELFFBQUksQ0FBQ3dELEdBQUwsQ0FBUyxDQUFDZCxJQUFELEVBQU9lLEtBQVAsS0FBaUI7QUFDeEJGLGVBQVMsR0FBR0EsU0FBUyxHQUFHLEdBQVosR0FBa0JiLElBQUksQ0FBQ1EsT0FBTCxDQUFhUSxTQUEvQixHQUEyQyxFQUEzQyxHQUFnRGhCLElBQUksQ0FBQ1EsT0FBTCxDQUFhUyxRQUF6RTtBQUNELEtBRkQ7QUFHQSxXQUFPSixTQUFQO0FBQ0QsR0FORDs7QUFRQWhELFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxJQUFaO0FBQ0FFLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSSxPQUFaO0FBQ0RMLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxJQUFJLENBQUM4QyxJQUFMLENBQVVTLFlBQVYsQ0FBdUJDLEdBQW5DO0FBQ0MsUUFBTUMsV0FBVyx5QkFBR2xELE9BQU8sQ0FBQ29DLFNBQVgsdURBQUcsbUJBQW1CZSxNQUF2QztBQUNBLFFBQU1DLE9BQU8sMEJBQUlwRCxPQUFPLENBQUNvQyxTQUFaLHdEQUFJLG9CQUFtQmdCLE9BQXBDO0FBQ0EsUUFBTWpCLFFBQVEsMEJBQUduQyxPQUFPLENBQUNvQyxTQUFYLHdEQUFHLG9CQUFtQkQsUUFBcEM7QUFDQSxRQUFNa0IsU0FBUywwQkFBR3JELE9BQU8sQ0FBQ29DLFNBQVgsd0RBQUcsb0JBQW1CaUIsU0FBckM7QUFDQSxRQUFNQyxNQUFNLDBCQUFHdEQsT0FBTyxDQUFDb0MsU0FBWCx3REFBRyxvQkFBbUJrQixNQUFsQztBQUNBLFFBQU16QyxFQUFFLDBCQUFHYixPQUFPLENBQUNvQyxTQUFYLHdEQUFHLG9CQUFtQnZCLEVBQTlCO0FBQ0EsUUFBTTBDLElBQUksd0JBQUduRSxJQUFJLENBQUNTLFdBQUQsQ0FBUCxzREFBRyxrQkFBbUIwRCxJQUFoQztBQUNBNUQsU0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWix5QkFBc0JJLE9BQU8sQ0FBQ29DLFNBQTlCLHdEQUFzQixvQkFBbUJrQixNQUF6QztBQUNBLFFBQU1FLFFBQVEsR0FBR0gsU0FBUyxHQUFFQSxTQUFGLGFBQUVBLFNBQUYsdUJBQUVBLFNBQVMsQ0FBRUksTUFBWCxDQUFrQjNCLElBQUksSUFBSUEsSUFBSSxDQUFDNEIsUUFBTCxJQUFpQixNQUEzQyxDQUFGLEdBQXFELEVBQS9FO0FBQ0EsUUFBTUMsU0FBUyxHQUFJTixTQUFTLEdBQUVBLFNBQUYsYUFBRUEsU0FBRix1QkFBRUEsU0FBUyxDQUFFSSxNQUFYLENBQWtCM0IsSUFBSSxJQUFJQSxJQUFJLENBQUM0QixRQUFMLElBQWlCLE9BQTNDLENBQUYsR0FBc0QsRUFBbEY7QUFDQSxRQUFNRSxPQUFPLEdBQUdQLFNBQVMsR0FBR0EsU0FBSCxhQUFHQSxTQUFILHVCQUFHQSxTQUFTLENBQUVJLE1BQVgsQ0FBa0IzQixJQUFJLElBQUlBLElBQUksQ0FBQzRCLFFBQUwsSUFBaUIsS0FBM0MsQ0FBSCxHQUFxRCxFQUE5RTtBQUNBLFFBQU1HLFFBQVEsR0FBR1IsU0FBUyxHQUFHQSxTQUFILGFBQUdBLFNBQUgsdUJBQUdBLFNBQVMsQ0FBRUksTUFBWCxDQUFrQjNCLElBQUksSUFBSUEsSUFBSSxDQUFDNEIsUUFBTCxJQUFpQixNQUEzQyxDQUFILEdBQXNELEVBQWhGO0FBQ0EsUUFBTUksT0FBTyxHQUFHVCxTQUFTLEdBQUdBLFNBQUgsYUFBR0EsU0FBSCx1QkFBR0EsU0FBUyxDQUFFSSxNQUFYLENBQWtCM0IsSUFBSSxJQUFJQSxJQUFJLENBQUM0QixRQUFMLElBQWlCLEtBQTNDLENBQUgsR0FBcUQsRUFBOUU7QUFFQSxTQUNFLE1BQUMsMkVBQUQseUZBQXVCaEUsSUFBdkI7QUFBOEIsZ0JBQVksTUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUNFO0FBQUssYUFBUyxFQUFFcUUsdUVBQU0sQ0FBQ0MsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFRCx1RUFBTSxDQUFDRSxPQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4REFBRDtBQUNFLGFBQVMsRUFBRUYsdUVBQU0sQ0FBQ0csV0FEcEI7QUFFRSxXQUFPLEVBQUUsTUFBTXRDLFNBQVMsRUFGMUI7QUFHRSxTQUFLLEVBQUU7QUFDTHVDLGtCQUFZLEVBQUUsRUFEVDtBQUVMQyxnQkFBVSxFQUFFLE9BRlA7QUFHTEMsYUFBTyxFQUFFLENBSEo7QUFJTEMsYUFBTyxFQUFFLEdBSko7QUFLTEMsZ0JBQVUsRUFBRTtBQUxQLEtBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBWUUsTUFBQywrREFBRDtBQUNFLGFBQVMsRUFBRVIsdUVBQU0sQ0FBQ1MsV0FEcEI7QUFFRSxXQUFPLEVBQUUsTUFBTTlDLFNBQVMsRUFGMUI7QUFHRSxTQUFLLEVBQUU7QUFDTHlDLGtCQUFZLEVBQUUsRUFEVDtBQUVMQyxnQkFBVSxFQUFFLE9BRlA7QUFHTEMsYUFBTyxFQUFFLENBSEo7QUFJTEMsYUFBTyxFQUFFLEdBSko7QUFLTEcsaUJBQVcsRUFBRTtBQUxSLEtBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpGLENBREYsRUF5QkUsTUFBQywyREFBRDtBQUNFLHdCQUFvQixNQUR0QjtBQUVFLGdCQUFZLE1BRmQ7QUFHRSxtQkFBZSxNQUhqQjtBQUlFLGdCQUFZLEVBQUU1RSxXQUpoQjtBQUtFLGtCQUFjLEVBQUVnQyxjQUxsQjtBQU1FLFlBQVEsRUFBRSxLQU5aLENBUUU7QUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBVUd6QyxJQUFJLENBQUN3RCxHQUFMLENBQVMsQ0FBQ2QsSUFBRCxFQUFPZSxLQUFQLEtBQ047QUFBSyxhQUFTLEVBQUVrQix1RUFBTSxDQUFDVyxlQUF2QjtBQUF3QyxPQUFHLEVBQUU3QixLQUE3QztBQUFvRCxrQkFBWUEsS0FBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFa0IsdUVBQU0sQ0FBQ1ksS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsZUFBVyxFQUFFcEQsaUJBRGY7QUFFRSxPQUFHLDZDQUF1QyxDQUFBTyxJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLFlBQUFBLElBQUksQ0FBRThDLE9BQU4sTUFBa0IsSUFBbkIsR0FBMEI5QyxJQUExQixhQUEwQkEsSUFBMUIsdUJBQTBCQSxJQUFJLENBQUU4QyxPQUFoQyxHQUEwQzlDLElBQTFDLGFBQTBDQSxJQUExQyx1QkFBMENBLElBQUksQ0FBRW1CLEdBQXRGLENBRkw7QUFHRSxPQUFHLEVBQUMsRUFITjtBQUlFLFNBQUssRUFBRTtBQUFFNEIsV0FBSyxFQUFFLE1BQVQ7QUFBaUJDLFlBQU0sRUFBRTtBQUF6QixLQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBREgsQ0FWSCxDQXpCRixFQWlERzFGLElBQUksQ0FBQ3VCLE1BQUwsS0FBZ0IsQ0FBaEIsSUFDQztBQUFLLGFBQVMsRUFBRW9ELHVFQUFNLENBQUNnQixjQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2REFBRDtBQUNBLGVBQVcsRUFBRTdCLFdBRGI7QUFFQSxlQUFXLE1BRlg7QUFHQSxZQUFRLEVBQUVuQixlQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQWxESixDQURGLEVBOERHO0FBQUssYUFBUyxFQUFFZ0MsdUVBQU0sQ0FBQ2lCLGVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLHlFQUFEO0FBQWdCLFdBQU8sRUFBRWhGLE9BQU8sQ0FBQ2lGLE9BQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFLLGFBQVMsRUFBRWxCLHVFQUFNLENBQUNtQixZQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0c7QUFBSyxhQUFTLEVBQUVuQix1RUFBTSxDQUFDb0IsTUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsaUVBQUQ7QUFDRSxRQUFJLEVBQUUsZUFBQTFGLElBQUksQ0FBQzhDLElBQUwsMERBQVdPLFNBQVgsSUFBdUIsR0FBdkIsbUJBQTZCckQsSUFBSSxDQUFDOEMsSUFBbEMsZ0RBQTZCLFlBQVdRLFFBQXhDLENBRFI7QUFFRSxPQUFHLFlBQUt0RCxJQUFJLENBQUM4QyxJQUFMLENBQVVTLFlBQVYsQ0FBdUJDLEdBQTVCLENBRkw7QUFHRSxRQUFJLEVBQUUsRUFIUjtBQUlFLGNBQVUsRUFBRSxDQUpkO0FBS0UsWUFBUSxpQkFBRXhELElBQUksQ0FBQzhDLElBQVAsZ0RBQUUsWUFBVzZDLFFBTHZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURILEVBVUc7QUFBSyxhQUFTLEVBQUVyQix1RUFBTSxDQUFDc0IsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFFdEIsdUVBQU0sQ0FBQ3VCLFNBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBaUMsZ0JBQUE3RixJQUFJLENBQUM4QyxJQUFMLDREQUFXTyxTQUFYLElBQXVCLEdBQXZCLG1CQUE2QnJELElBQUksQ0FBQzhDLElBQWxDLGdEQUE2QixZQUFXUSxRQUF4QyxDQUFqQyxDQURGLENBVkgsQ0FEQSxFQWdCQztBQUFJLFNBQUssRUFBRTtBQUFFd0Msa0JBQVksRUFBRTtBQUFoQixLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBa0NuQyxPQUFsQyxDQWhCRCxFQWlCQztBQUFLLGFBQVMsRUFBRVcsdUVBQU0sQ0FBQ3lCLHVCQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUV6Qix1RUFBTSxDQUFDMEIsZ0JBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSWpDLFFBQVEsQ0FBQzdDLE1BQVQsR0FBa0IsQ0FBbEIsSUFBdUIsbUVBQ3ZCLE1BQUMsNENBQUQ7QUFBUyxhQUFTLEVBQUMsUUFBbkI7QUFBNEIsU0FBSyxFQUFFK0IscUJBQXFCLENBQUNjLFFBQUQsQ0FBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0VBQUQ7QUFBaUIsUUFBSSxFQUFFLENBQUMsS0FBRCxFQUFRLFdBQVIsQ0FBdkI7QUFBNkMsUUFBSSxFQUFDLElBQWxEO0FBQXdELFNBQUssRUFBRTtBQUFFa0MsWUFBTSxFQUFFO0FBQVYsS0FBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPbEMsUUFBUSxDQUFDN0MsTUFBaEIsQ0FGRixDQUR1QixDQUQzQixFQU9Ja0QsUUFBUSxDQUFDbEQsTUFBVCxHQUFrQixDQUFsQixJQUF1QixtRUFDdkIsTUFBQyw0Q0FBRDtBQUFTLGFBQVMsRUFBQyxRQUFuQjtBQUE0QixTQUFLLEVBQUUrQixxQkFBcUIsQ0FBQ21CLFFBQUQsQ0FBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0VBQUQ7QUFBaUIsUUFBSSxFQUFFLENBQUMsS0FBRCxFQUFRLE1BQVIsQ0FBdkI7QUFBd0MsUUFBSSxFQUFDLElBQTdDO0FBQW1ELFNBQUssRUFBRTtBQUFFNkIsWUFBTSxFQUFFO0FBQVYsS0FBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPN0IsUUFBUSxDQUFDbEQsTUFBaEIsQ0FGRixDQUR1QixDQVAzQixFQWNJZ0QsU0FBUyxDQUFDaEQsTUFBVixHQUFtQixDQUFuQixJQUF3QixtRUFDeEIsTUFBQyw0Q0FBRDtBQUFTLGFBQVMsRUFBQyxRQUFuQjtBQUE0QixTQUFLLEVBQUUrQixxQkFBcUIsQ0FBQ2lCLFNBQUQsQ0FBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0VBQUQ7QUFBaUIsUUFBSSxFQUFFLENBQUMsS0FBRCxFQUFRLE9BQVIsQ0FBdkI7QUFBeUMsUUFBSSxFQUFDLElBQTlDO0FBQW9ELFNBQUssRUFBRTtBQUFFK0IsWUFBTSxFQUFFO0FBQVYsS0FBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPL0IsU0FBUyxDQUFDaEQsTUFBakIsQ0FGRixDQUR3QixDQWQ1QixFQXFCSWlELE9BQU8sQ0FBQ2pELE1BQVIsR0FBaUIsQ0FBakIsSUFBc0IsbUVBQ3RCLE1BQUMsNENBQUQ7QUFBUyxhQUFTLEVBQUMsUUFBbkI7QUFBNEIsU0FBSyxFQUFFK0IscUJBQXFCLENBQUNrQixPQUFELENBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtFQUFEO0FBQWlCLFFBQUksRUFBRSxDQUFDLEtBQUQsRUFBUSxPQUFSLENBQXZCO0FBQXlDLFFBQUksRUFBQyxJQUE5QztBQUFvRCxTQUFLLEVBQUU7QUFBRThCLFlBQU0sRUFBRTtBQUFWLEtBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTzlCLE9BQU8sQ0FBQ2pELE1BQWYsQ0FGRixDQURzQixDQXJCMUIsRUE0QkltRCxPQUFPLENBQUNuRCxNQUFSLEdBQWlCLENBQWpCLElBQXNCLG1FQUN0QixNQUFDLDRDQUFEO0FBQVMsYUFBUyxFQUFDLFFBQW5CO0FBQTRCLFNBQUssRUFBRStCLHFCQUFxQixDQUFDb0IsT0FBRCxDQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrRUFBRDtBQUFpQixRQUFJLEVBQUUsQ0FBQyxLQUFELEVBQVEsT0FBUixDQUF2QjtBQUF5QyxRQUFJLEVBQUMsSUFBOUM7QUFBb0QsU0FBSyxFQUFFO0FBQUU0QixZQUFNLEVBQUU7QUFBVixLQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU81QixPQUFPLENBQUNuRCxNQUFmLENBRkYsQ0FEc0IsQ0E1QjFCLENBREYsRUFxQ0cyQyxNQUFNLElBQUlBLE1BQU0sQ0FBQzNDLE1BQVAsR0FBZ0IsQ0FBMUIsR0FBNkI7QUFBSyxhQUFTLEVBQUVvRCx1RUFBTSxDQUFDNEIsYUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUM1QixNQUFDLDRDQUFEO0FBQVMsYUFBUyxFQUFDLEtBQW5CO0FBQXlCLFNBQUssRUFBRSxPQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywrRUFBRDtBQUFpQixRQUFJLEVBQUUsQ0FBQyxLQUFELEVBQVEsY0FBUixDQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU9yQyxNQUFNLENBQUMzQyxNQUFkLENBRkosQ0FENEIsQ0FBN0IsR0FLTSxJQTFDVCxDQWpCRCxFQTZEQyxNQUFDLG9FQUFEO0FBQ0UsTUFBRSxFQUFFRSxFQUROO0FBRUUsUUFBSSxFQUFFMEMsSUFGUjtBQUdFLFlBQVEsRUFBRUwsV0FIWjtBQUlFLFlBQVEsRUFBRWYsUUFKWjtBQUtFLGNBQVUsRUFBRTlDLFVBTGQ7QUFNRSxTQUFLLEVBQUVRLFdBTlQ7QUFPRSxjQUFVLEVBQUcrRixJQUFELElBQVVyRyxVQUFVLENBQUNnRSxJQUFELEVBQU8xQyxFQUFQLEVBQVcrRSxJQUFYLENBUGxDO0FBUUUsZUFBVyxFQUFFLE1BQU1wRyxXQUFXLENBQUMrRCxJQUFELEVBQU8xQyxFQUFQLENBUmhDO0FBU0UsV0FBTyxFQUFFLE1BQU07QUFBRTRCLDRCQUFzQixDQUFDNUIsRUFBRCxDQUF0QjtBQUE0QixLQVQvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBN0RELEVBd0VDLE1BQUMsMkRBQUQ7QUFDRSxNQUFFLEVBQUVBLEVBRE47QUFFRSxRQUFJLEVBQUUwQyxJQUZSO0FBR0UsUUFBSSxFQUFFcEIsUUFIUjtBQUlFLG9CQUFnQixFQUFFRixnQkFKcEI7QUFLRSxnQkFBWSxFQUFFM0IsWUFMaEI7QUFNRSxhQUFTLEVBQUVGLFNBTmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXhFRCxDQURBLENBOURILENBREY7QUFvSkQ7O0dBbFF1QmpCLFc7O0tBQUFBLFc7QUFvUXhCQSxXQUFXLENBQUMwRyxZQUFaLEdBQTJCO0FBQ3pCekcsTUFBSSxFQUFFO0FBRG1CLENBQTNCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuNWZiMDQ1MzZlYjcxMTdkNzUyMWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdE1vZGFsIGZyb20gJ3JlYWN0LW1vZGFsJztcclxuaW1wb3J0IEFsaWNlQ2Fyb3VzZWwgZnJvbSAncmVhY3QtYWxpY2UtY2Fyb3VzZWwnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL3Bob3Rvc19tb2RhbC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBQaG90b01vZGFsV3JhcHBlciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9QaG90b01vZGFsV3JhcHBlcic7XHJcbmltcG9ydCB7IFJhdGUgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBMZWZ0Q2lyY2xlRmlsbGVkLFxyXG4gIFJpZ2h0Q2lyY2xlRmlsbGVkLFxyXG4gIExlZnRPdXRsaW5lZCxcclxuICBSaWdodE91dGxpbmVkLFxyXG59IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgUmF0aW5nU2xpZGUgfSBmcm9tICdjb21wb25lbnRzL2Zvcm1zJztcclxuaW1wb3J0IHsgSW5wdXQsIFBvcG92ZXIsIFRvb2x0aXAgfSBmcm9tICdhbnRkJztcclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcbmltcG9ydCBBUEkgZnJvbSAnY29uZmlncy9BUEknO1xyXG5pbXBvcnQgQ29tbWVudHMgZnJvbSAnLi4vdGltZWxpbmUvQ29tbWVudHMnO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL0F2YXRhcic7XHJcbmltcG9ydCBBY3Rpb25zIGZyb20gJ2NvbXBvbmVudHMvdGltZWxpbmUvQWN0aW9ucyc7XHJcbmltcG9ydCB7IFBob3Rvc0NvbnRleHQgfSBmcm9tICdjb250YWluZXJzL1Bob3Rvcy9zdG9yYWdlL1Bob3RvQ29udGV4dCc7XHJcbmltcG9ydCB7IHNldFBob3RvLCBzZXRMb2FkaW5nIH0gZnJvbSAnY29udGFpbmVycy9QaG90b3MvYWN0aW9ucyc7XHJcbmltcG9ydCBMb2FkaW5nV3JhcHBlciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9Mb2FkaW5nV3JhcHBlcic7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGhvdG9zTW9kYWwoeyBkYXRhLCBvblJhdGVQb3N0LCBwaG90b0luZGV4LCBsaWtlQWN0aW9uLCBzaGFyZUFjdGlvbiwgYXV0aCwgLi4ucmVzdCB9KSB7Y29uc29sZS5sb2coZGF0YSk7XHJcbiAgY29uc3QgW3NsaWRlckluZGV4LCBzZXRTbGlkZXJJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbc3RvcmFnZSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChQaG90b3NDb250ZXh0KTtjb25zb2xlLmxvZyhzdG9yYWdlKTtcclxuICBjb25zdCBbbW9kYWxNb2RlLCBzZXRNb2RhbE1vZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFthY3RpdmVQb3N0SWQsIHNldEFjdGl2ZVBvc3RJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0UGhvdG8oc2xpZGVySW5kZXgpO1xyXG4gIH0sIFtdKTtcclxuIFxyXG4gIGNvbnN0IGdldFBob3RvID0gYXN5bmMgKGkpID0+IHtcclxuICAgIFxyXG4gICAgaWYoZGF0YS5sZW5ndGggPT0gMCkge1xyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKHRydWUpKVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYodHlwZW9mIGRhdGFbaV0uaWQgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcodHJ1ZSkpXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcodHJ1ZSkpXHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybDogJy9waG90b3MvZ2V0JyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBcImlkXCI6IGRhdGFbaV0uaWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyAgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBkaXNwYXRjaChzZXRQaG90byhyZXF1ZXN0LmRhdGEpKVxyXG4gICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKVxyXG4gICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gNDAzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1BsZWFzZSByZWZyZXNoIHRva2VuIScpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIFxyXG4gICAgICB9XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgIFxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVPbkRyYWdTdGFydCA9IChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3Qgc2xpZGVOZXh0ID0gKCkgPT4gc2V0U2xpZGVySW5kZXgoKHN0YXRlKSA9PiB7IFxyXG4gICAgaWYoZGF0YS5sZW5ndGggPD0gc3RhdGUgKyAxKSB7XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGdldFBob3RvKHN0YXRlKzEpO1xyXG4gICAgICByZXR1cm4gc3RhdGUgKyAxO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGNvbnN0IHNsaWRlUHJldiA9ICgpID0+IHNldFNsaWRlckluZGV4KChzdGF0ZSkgPT4ge1xyXG4gICAgaWYoc3RhdGUgPD0gMCkge1xyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGdldFBob3RvKHN0YXRlLTEpO1xyXG4gICAgICByZXR1cm4gc3RhdGUgLSAxO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGNvbnN0IG9uU2xpZGVDaGFuZ2VkID0gKGUpID0+IHNldFNsaWRlckluZGV4KGUuaXRlbSk7XHJcbiAgY29uc3QgaGFuZGxlUmF0ZVBob3RvID0gKHJhdGUpID0+IHtcclxuICAgIGlmKHR5cGVvZiBkYXRhW3NsaWRlckluZGV4XS5pZCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgb25SYXRlUG9zdCgnUGhvdG8nLCBkYXRhW3NsaWRlckluZGV4XS5pZCwgcmF0ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25VcGRhdGVUaW1lbGluZSA9IGFzeW5jIChuZXdDb21tZW50KSA9PiB7XHJcbiAgICBjb25zdCAgeyBjb21tZW50cyB9ID0gc3RvcmFnZS5waG90b0RhdGE7XHJcbiAgICBsZXQgYWRkRWxlbWVudCA9IHtcclxuICAgICAgYWNjb3VudDogYXV0aC51c2VyLCBcclxuICAgICAgLi4ubmV3Q29tbWVudC5jb21tZW50c1swXVxyXG4gICAgfVxyXG4gICAgdmFyIGxhc3RQaG90byA9IHsuLi5zdG9yYWdlLnBob3RvRGF0YSwgY29tbWVudHM6IFsuLi5jb21tZW50cywgYWRkRWxlbWVudF19O1xyXG4gICAgZGlzcGF0Y2goc2V0UGhvdG8obGFzdFBob3RvKSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVTaG93Q29tbWVudE1vZGFsID0gKGlkKSA9PiB7Y29uc29sZS5sb2coaWQpO1xyXG4gICAgc2V0TW9kYWxNb2RlKCFtb2RhbE1vZGUpO1xyXG4gICAgc2V0QWN0aXZlUG9zdElkKGlkKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRMaWtlQWN0aW9uVXNlckluZm8gPSAoZGF0YSkgPT4ge1xyXG4gICAgdmFyIGZpbmFsRGF0YSA9ICcnO1xyXG4gICAgZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgIGZpbmFsRGF0YSA9IGZpbmFsRGF0YSArICcgJyArIGl0ZW0uYWNjb3VudC5maXJzdE5hbWUgKyAnJyArIGl0ZW0uYWNjb3VudC5sYXN0TmFtZSA7XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIGZpbmFsRGF0YTtcclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKGF1dGgpO1xyXG4gIGNvbnNvbGUubG9nKHN0b3JhZ2UpO1xyXG4gY29uc29sZS5sb2coYXV0aC51c2VyLnByb2ZpbGVQaG90by5zcmMpO1xyXG4gIGNvbnN0IHJvdW5kUmF0aW5nID0gc3RvcmFnZS5waG90b0RhdGE/LnJhdGluZztcclxuICBjb25zdCBjYXB0aW9uID0gIHN0b3JhZ2UucGhvdG9EYXRhPy5jYXB0aW9uO1xyXG4gIGNvbnN0IGNvbW1lbnRzID0gc3RvcmFnZS5waG90b0RhdGE/LmNvbW1lbnRzO1xyXG4gIGNvbnN0IHJlYWN0aW9ucyA9IHN0b3JhZ2UucGhvdG9EYXRhPy5yZWFjdGlvbnM7XHJcbiAgY29uc3Qgc2hhcmVzID0gc3RvcmFnZS5waG90b0RhdGE/LnNoYXJlcztcclxuICBjb25zdCBpZCA9IHN0b3JhZ2UucGhvdG9EYXRhPy5pZDtcclxuICBjb25zdCB0eXBlID0gZGF0YVtzbGlkZXJJbmRleF0/LnR5cGU7XHJcbiAgY29uc29sZS5sb2coJ3NoYXJlcycsIHN0b3JhZ2UucGhvdG9EYXRhPy5zaGFyZXMpO1xyXG4gIGNvbnN0IGxpa2VEYXRhID0gcmVhY3Rpb25zPyByZWFjdGlvbnM/LmZpbHRlcihpdGVtID0+IGl0ZW0ucmVhY3Rpb24gPT0gJ0xJS0UnKTpbXTtcclxuICBjb25zdCBoZWFydERhdGEgPSAgcmVhY3Rpb25zPyByZWFjdGlvbnM/LmZpbHRlcihpdGVtID0+IGl0ZW0ucmVhY3Rpb24gPT0gJ0hFQVJUJyk6W107XHJcbiAgY29uc3Qgd293RGF0YSA9IHJlYWN0aW9ucyA/IHJlYWN0aW9ucz8uZmlsdGVyKGl0ZW0gPT4gaXRlbS5yZWFjdGlvbiA9PSAnV09XJyk6W107XHJcbiAgY29uc3QgaGFoYURhdGEgPSByZWFjdGlvbnMgPyByZWFjdGlvbnM/LmZpbHRlcihpdGVtID0+IGl0ZW0ucmVhY3Rpb24gPT0gJ0hBSEEnKTpbXTtcclxuICBjb25zdCBzYWREYXRhID0gcmVhY3Rpb25zID8gcmVhY3Rpb25zPy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlYWN0aW9uID09ICdTQUQnKTpbXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQaG90b01vZGFsV3JhcHBlciB7Li4ucmVzdCB9IHByb2ZpbGVQaG90bz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uc30+XHJcbiAgICAgICAgICA8TGVmdE91dGxpbmVkXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnByZXZfYWN0aW9ufVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzbGlkZVByZXYoKX1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDI1LFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdibGFjaycsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogOCxcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjYsXHJcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdDogMTVcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8UmlnaHRPdXRsaW5lZFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5uZXh0X2FjdGlvbn1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2xpZGVOZXh0KCl9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyNSxcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnYmxhY2snLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDgsXHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC42LFxyXG4gICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAxNVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8QWxpY2VDYXJvdXNlbFxyXG4gICAgICAgICAgbW91c2VUcmFja2luZ0VuYWJsZWRcclxuICAgICAgICAgIGRvdHNEaXNhYmxlZFxyXG4gICAgICAgICAgYnV0dG9uc0Rpc2FibGVkXHJcbiAgICAgICAgICBzbGlkZVRvSW5kZXg9e3NsaWRlckluZGV4fVxyXG4gICAgICAgICAgb25TbGlkZUNoYW5nZWQ9e29uU2xpZGVDaGFuZ2VkfVxyXG4gICAgICAgICAgaW5maW5pdGU9e2ZhbHNlfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgLy8gYXV0b0hlaWdodCAgXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9fY29udGFpbmVyfSBrZXk9e2luZGV4fSBkYXRhLXZhbHVlPXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBob3RvfT5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIG9uRHJhZ1N0YXJ0PXtoYW5kbGVPbkRyYWdTdGFydH1cclxuICAgICAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8keyhpdGVtPy5ibG9iX3RuICE9PSBudWxsKT8oaXRlbT8uYmxvYl90bik6KGl0ZW0/LnNyYyl9YH1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9BbGljZUNhcm91c2VsPlxyXG4gICAgICAgIFxyXG4gICAgICAgIHtkYXRhLmxlbmd0aCAhPT0gMCAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJhdGluZ193cmFwcGVyfT5cclxuICAgICAgICAgICAgPFJhdGluZ1NsaWRlXHJcbiAgICAgICAgICAgIGRlZmF1bHRSYXRlPXtyb3VuZFJhdGluZ31cclxuICAgICAgICAgICAgd2l0aG91dFRleHRcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVJhdGVQaG90b31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7LyogPHNwYW4+e3JvdW5kUmF0aW5nfTwvc3Bhbj4gKi99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tbWVudFJlYWN0aW9ufT5cclxuICAgICAgIDxMb2FkaW5nV3JhcHBlciBsb2FkaW5nPXtzdG9yYWdlLmxvYWRpbmd9PlxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5waG90b19oZWFkZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9PlxyXG4gICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgdGV4dD17YXV0aC51c2VyPy5maXJzdE5hbWUgKyBcIiBcIiArIGF1dGgudXNlcj8ubGFzdE5hbWV9XHJcbiAgICAgICAgICAgICAgdXJsPXtgJHthdXRoLnVzZXIucHJvZmlsZVBob3RvLnNyY31gfVxyXG4gICAgICAgICAgICAgIHNpemU9ezYwfVxyXG4gICAgICAgICAgICAgIGJvcmRlclNpemU9ezN9XHJcbiAgICAgICAgICAgICAgdXNlcm5hbWU9e2F1dGgudXNlcj8udXNlcm5hbWV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcl9pbmZvfT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudXNlcl9uYW1lfT57YXV0aC51c2VyPy5maXJzdE5hbWUgKyBcIiBcIiArIGF1dGgudXNlcj8ubGFzdE5hbWV9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICBcclxuICAgICAgICA8aDMgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA0MCB9fT57Y2FwdGlvbn08L2gzPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVhY3Rpb25zX3NoYXJlc19zdGF0dXN9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZWFjdGlvbnNfc3RhdHVzfT5cclxuICAgICAgICAgICAgeyBsaWtlRGF0YS5sZW5ndGggPiAwICYmIDw+XHJcbiAgICAgICAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9e2dldExpa2VBY3Rpb25Vc2VySW5mbyhsaWtlRGF0YSl9PlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICd0aHVtYnMtdXAnXX0gc2l6ZT1cIjF4XCIgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInfX0vPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e2xpa2VEYXRhLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9Ub29sdGlwPjwvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHsgaGFoYURhdGEubGVuZ3RoID4gMCAmJiA8PlxyXG4gICAgICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPXtnZXRMaWtlQWN0aW9uVXNlckluZm8oaGFoYURhdGEpfT5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAnZ3JpbiddfSBzaXplPVwiMXhcIiAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcid9fS8+IFxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e2hhaGFEYXRhLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHsgaGVhcnREYXRhLmxlbmd0aCA+IDAgJiYgPD4gXHJcbiAgICAgICAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9e2dldExpa2VBY3Rpb25Vc2VySW5mbyhoZWFydERhdGEpfT5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAnaGVhcnQnXX0gc2l6ZT1cIjF4XCIgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInfX0vPiBcclxuICAgICAgICAgICAgICAgIDxzcGFuPntoZWFydERhdGEubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgeyB3b3dEYXRhLmxlbmd0aCA+IDAgJiYgPD4gXHJcbiAgICAgICAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9e2dldExpa2VBY3Rpb25Vc2VySW5mbyh3b3dEYXRhKX0+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ2xhdWdoJ119IHNpemU9XCIxeFwiICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJ319Lz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPnt3b3dEYXRhLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgIDwvPiBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7IHNhZERhdGEubGVuZ3RoID4gMCAmJiA8PlxyXG4gICAgICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPXtnZXRMaWtlQWN0aW9uVXNlckluZm8oc2FkRGF0YSl9PlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdmcm93biddfSBzaXplPVwiMXhcIiAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcid9fS8+IFxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3NhZERhdGEubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge3NoYXJlcyAmJiBzaGFyZXMubGVuZ3RoID4gMCA/PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaGFyZXNfc3RhdHVzfT5cclxuICAgICAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwidG9wXCIgdGl0bGU9eydTaGFyZSd9PlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdzaGFyZS1zcXVhcmUnXX0vPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3NoYXJlcy5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICA8L2Rpdj46bnVsbH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8QWN0aW9uc1xyXG4gICAgICAgICAgaWQ9e2lkfVxyXG4gICAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICAgIHBvc3RSYXRlPXtyb3VuZFJhdGluZ31cclxuICAgICAgICAgIGNvbW1lbnRzPXtjb21tZW50c31cclxuICAgICAgICAgIG9uUmF0ZVBvc3Q9e29uUmF0ZVBvc3R9XHJcbiAgICAgICAgICBpbmRleD17c2xpZGVySW5kZXh9XHJcbiAgICAgICAgICBsaWtlQWN0aW9uPXsodGVybSkgPT4gbGlrZUFjdGlvbih0eXBlLCBpZCwgdGVybSl9XHJcbiAgICAgICAgICBzaGFyZUFjdGlvbj17KCkgPT4gc2hhcmVBY3Rpb24odHlwZSwgaWQpfVxyXG4gICAgICAgICAgYWN0aW9ucz17KCkgPT4geyBoYW5kbGVTaG93Q29tbWVudE1vZGFsKGlkKSB9IH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxDb21tZW50c1xyXG4gICAgICAgICAgaWQ9e2lkfVxyXG4gICAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICAgIGRhdGE9e2NvbW1lbnRzfVxyXG4gICAgICAgICAgb25VcGRhdGVUaW1lbGluZT17b25VcGRhdGVUaW1lbGluZX1cclxuICAgICAgICAgIGFjdGl2ZVBvc3RJZD17YWN0aXZlUG9zdElkfVxyXG4gICAgICAgICAgbW9kYWxNb2RlPXttb2RhbE1vZGV9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8L0xvYWRpbmdXcmFwcGVyPlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICA8L1Bob3RvTW9kYWxXcmFwcGVyPlxyXG4gICk7XHJcbn1cclxuXHJcblBob3Rvc01vZGFsLmRlZmF1bHRQcm9wcyA9IHtcclxuICBkYXRhOiBbXSxcclxufSJdLCJzb3VyY2VSb290IjoiIn0=