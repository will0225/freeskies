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

  const {
    0: sliderIndex,
    1: setSliderIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0);
  const {
    0: storage,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(containers_Photos_storage_PhotoContext__WEBPACK_IMPORTED_MODULE_15__["PhotosContext"]);
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
      lineNumber: 134,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.actions,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
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
      lineNumber: 137,
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
      lineNumber: 148,
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
      lineNumber: 160,
      columnNumber: 9
    }
  }, data.map((item, index) => __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.photo_container,
    key: index,
    "data-value": index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.photo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
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
      lineNumber: 173,
      columnNumber: 19
    }
  }))))), data.length !== 0 && __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.rating_wrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 11
    }
  }, __jsx(components_forms__WEBPACK_IMPORTED_MODULE_10__["RatingSlide"], {
    defaultRate: roundRating,
    withoutText: true,
    onChange: handleRatePhoto,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.commentReaction,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 8
    }
  }, __jsx(components_common_LoadingWrapper__WEBPACK_IMPORTED_MODULE_17__["default"], {
    loading: storage.loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.photo_header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
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
      lineNumber: 200,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.user_info,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.user_name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 13
    }
  }, ((_auth$user4 = auth.user) === null || _auth$user4 === void 0 ? void 0 : _auth$user4.firstName) + " " + ((_auth$user5 = auth.user) === null || _auth$user5 === void 0 ? void 0 : _auth$user5.lastName)))), __jsx("h3", {
    style: {
      marginBottom: 40
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 9
    }
  }, caption), __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.reactions_shares_status,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.reactions_status,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 11
    }
  }, likeData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Tooltip"], {
    placement: "bottom",
    title: getLikeActionUserInfo(likeData),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
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
      lineNumber: 218,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 17
    }
  }, likeData.length))), hahaData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Tooltip"], {
    placement: "bottom",
    title: getLikeActionUserInfo(hahaData),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
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
      lineNumber: 224,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 17
    }
  }, hahaData.length))), heartData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Tooltip"], {
    placement: "bottom",
    title: getLikeActionUserInfo(heartData),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
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
  }, heartData.length))), wowData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Tooltip"], {
    placement: "bottom",
    title: getLikeActionUserInfo(wowData),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
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
      lineNumber: 238,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 17
    }
  }, wowData.length))), sadData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Tooltip"], {
    placement: "bottom",
    title: getLikeActionUserInfo(sadData),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
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
      lineNumber: 245,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 17
    }
  }, sadData.length)))), shares && shares.length > 0 ? __jsx("div", {
    className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.shares_status,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 41
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Tooltip"], {
    placement: "top",
    title: 'Share',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_18__["FontAwesomeIcon"], {
    icon: ['far', 'share-square'],
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
      lineNumber: 258,
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
      lineNumber: 269,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlL1Bob3Rvc01vZGFsLmpzIl0sIm5hbWVzIjpbIlRleHRBcmVhIiwiSW5wdXQiLCJQaG90b3NNb2RhbCIsImRhdGEiLCJvblJhdGVQb3N0IiwicGhvdG9JbmRleCIsImxpa2VBY3Rpb24iLCJzaGFyZUFjdGlvbiIsImF1dGgiLCJyZXN0Iiwic2xpZGVySW5kZXgiLCJzZXRTbGlkZXJJbmRleCIsInVzZVN0YXRlIiwic3RvcmFnZSIsImRpc3BhdGNoIiwidXNlQ29udGV4dCIsIlBob3Rvc0NvbnRleHQiLCJtb2RhbE1vZGUiLCJzZXRNb2RhbE1vZGUiLCJhY3RpdmVQb3N0SWQiLCJzZXRBY3RpdmVQb3N0SWQiLCJ1c2VFZmZlY3QiLCJnZXRQaG90byIsImkiLCJsZW5ndGgiLCJzZXRMb2FkaW5nIiwiaWQiLCJyZXF1ZXN0IiwiQVBJIiwibWV0aG9kIiwidXJsIiwiaGVhZGVycyIsInRva2VuIiwic3RhdHVzIiwic2V0UGhvdG8iLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJoYW5kbGVPbkRyYWdTdGFydCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNsaWRlTmV4dCIsInN0YXRlIiwic2xpZGVQcmV2Iiwib25TbGlkZUNoYW5nZWQiLCJpdGVtIiwiaGFuZGxlUmF0ZVBob3RvIiwicmF0ZSIsIm9uVXBkYXRlVGltZWxpbmUiLCJuZXdDb21tZW50IiwiY29tbWVudHMiLCJwaG90b0RhdGEiLCJhZGRFbGVtZW50IiwiYWNjb3VudCIsInVzZXIiLCJsYXN0UGhvdG8iLCJoYW5kbGVTaG93Q29tbWVudE1vZGFsIiwiZ2V0TGlrZUFjdGlvblVzZXJJbmZvIiwiZmluYWxEYXRhIiwibWFwIiwiaW5kZXgiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInByb2ZpbGVQaG90byIsInNyYyIsInJvdW5kUmF0aW5nIiwicmF0aW5nIiwiY2FwdGlvbiIsInJlYWN0aW9ucyIsInNoYXJlcyIsInR5cGUiLCJsaWtlRGF0YSIsImZpbHRlciIsInJlYWN0aW9uIiwiaGVhcnREYXRhIiwid293RGF0YSIsImhhaGFEYXRhIiwic2FkRGF0YSIsInN0eWxlcyIsImNvbnRhaW5lciIsImFjdGlvbnMiLCJwcmV2X2FjdGlvbiIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwib3BhY2l0eSIsIm1hcmdpbkxlZnQiLCJuZXh0X2FjdGlvbiIsIm1hcmdpblJpZ2h0IiwicGhvdG9fY29udGFpbmVyIiwicGhvdG8iLCJibG9iX3RuIiwid2lkdGgiLCJoZWlnaHQiLCJyYXRpbmdfd3JhcHBlciIsImNvbW1lbnRSZWFjdGlvbiIsImxvYWRpbmciLCJwaG90b19oZWFkZXIiLCJhdmF0YXIiLCJ1c2VybmFtZSIsInVzZXJfaW5mbyIsInVzZXJfbmFtZSIsIm1hcmdpbkJvdHRvbSIsInJlYWN0aW9uc19zaGFyZXNfc3RhdHVzIiwicmVhY3Rpb25zX3N0YXR1cyIsImN1cnNvciIsInNoYXJlc19zdGF0dXMiLCJ0ZXJtIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0EsTUFBTTtBQUFFQTtBQUFGLElBQWVDLDBDQUFyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQyxXQUFULE9BQStGO0FBQUE7O0FBQUE7O0FBQUEsTUFBMUU7QUFBRUMsUUFBRjtBQUFRQyxjQUFSO0FBQW9CQyxjQUFwQjtBQUFnQ0MsY0FBaEM7QUFBNENDLGVBQTVDO0FBQXlEQztBQUF6RCxHQUEwRTtBQUFBLE1BQVJDLElBQVE7O0FBQzVHLFFBQU07QUFBQSxPQUFDQyxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ0Msc0RBQVEsQ0FBQyxDQUFELENBQTlDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFW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QURBLENBOURILENBREY7QUFvSkQ7O0dBL1B1QmYsVzs7S0FBQUEsVztBQWlReEJBLFdBQVcsQ0FBQzBHLFlBQVosR0FBMkI7QUFDekJ6RyxNQUFJLEVBQUU7QUFEbUIsQ0FBM0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGltZWxpbmUuMTM5MTA4ZTE0ZTlkMWZhNzA3YTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdE1vZGFsIGZyb20gJ3JlYWN0LW1vZGFsJztcclxuaW1wb3J0IEFsaWNlQ2Fyb3VzZWwgZnJvbSAncmVhY3QtYWxpY2UtY2Fyb3VzZWwnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL3Bob3Rvc19tb2RhbC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBQaG90b01vZGFsV3JhcHBlciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9QaG90b01vZGFsV3JhcHBlcic7XHJcbmltcG9ydCB7IFJhdGUgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBMZWZ0Q2lyY2xlRmlsbGVkLFxyXG4gIFJpZ2h0Q2lyY2xlRmlsbGVkLFxyXG4gIExlZnRPdXRsaW5lZCxcclxuICBSaWdodE91dGxpbmVkLFxyXG59IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgUmF0aW5nU2xpZGUgfSBmcm9tICdjb21wb25lbnRzL2Zvcm1zJztcclxuaW1wb3J0IHsgSW5wdXQsIFBvcG92ZXIsIFRvb2x0aXAgfSBmcm9tICdhbnRkJztcclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcbmltcG9ydCBBUEkgZnJvbSAnY29uZmlncy9BUEknO1xyXG5pbXBvcnQgQ29tbWVudHMgZnJvbSAnLi4vdGltZWxpbmUvQ29tbWVudHMnO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL0F2YXRhcic7XHJcbmltcG9ydCBBY3Rpb25zIGZyb20gJ2NvbXBvbmVudHMvdGltZWxpbmUvQWN0aW9ucyc7XHJcbmltcG9ydCB7IFBob3Rvc0NvbnRleHQgfSBmcm9tICdjb250YWluZXJzL1Bob3Rvcy9zdG9yYWdlL1Bob3RvQ29udGV4dCc7XHJcbmltcG9ydCB7IHNldFBob3RvLCBzZXRMb2FkaW5nIH0gZnJvbSAnY29udGFpbmVycy9QaG90b3MvYWN0aW9ucyc7XHJcbmltcG9ydCBMb2FkaW5nV3JhcHBlciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9Mb2FkaW5nV3JhcHBlcic7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGhvdG9zTW9kYWwoeyBkYXRhLCBvblJhdGVQb3N0LCBwaG90b0luZGV4LCBsaWtlQWN0aW9uLCBzaGFyZUFjdGlvbiwgYXV0aCwgLi4ucmVzdCB9KSB7XHJcbiAgY29uc3QgW3NsaWRlckluZGV4LCBzZXRTbGlkZXJJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbc3RvcmFnZSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChQaG90b3NDb250ZXh0KTtcclxuICBjb25zdCBbbW9kYWxNb2RlLCBzZXRNb2RhbE1vZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFthY3RpdmVQb3N0SWQsIHNldEFjdGl2ZVBvc3RJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0UGhvdG8oc2xpZGVySW5kZXgpO1xyXG4gIH0sIFtdKTtcclxuIFxyXG4gIGNvbnN0IGdldFBob3RvID0gYXN5bmMgKGkpID0+IHtcclxuICAgIFxyXG4gICAgaWYoZGF0YS5sZW5ndGggPT0gMCkge1xyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKHRydWUpKVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYodHlwZW9mIGRhdGFbaV0uaWQgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcodHJ1ZSkpXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcodHJ1ZSkpXHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybDogJy9waG90b3MvZ2V0JyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBcImlkXCI6IGRhdGFbaV0uaWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyAgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBkaXNwYXRjaChzZXRQaG90byhyZXF1ZXN0LmRhdGEpKVxyXG4gICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKVxyXG4gICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gNDAzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1BsZWFzZSByZWZyZXNoIHRva2VuIScpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIFxyXG4gICAgICB9XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgIFxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVPbkRyYWdTdGFydCA9IChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3Qgc2xpZGVOZXh0ID0gKCkgPT4gc2V0U2xpZGVySW5kZXgoKHN0YXRlKSA9PiB7IFxyXG4gICAgaWYoZGF0YS5sZW5ndGggPD0gc3RhdGUgKyAxKSB7XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGdldFBob3RvKHN0YXRlKzEpO1xyXG4gICAgICByZXR1cm4gc3RhdGUgKyAxO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGNvbnN0IHNsaWRlUHJldiA9ICgpID0+IHNldFNsaWRlckluZGV4KChzdGF0ZSkgPT4ge1xyXG4gICAgaWYoc3RhdGUgPD0gMCkge1xyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGdldFBob3RvKHN0YXRlLTEpO1xyXG4gICAgICByZXR1cm4gc3RhdGUgLSAxO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGNvbnN0IG9uU2xpZGVDaGFuZ2VkID0gKGUpID0+IHNldFNsaWRlckluZGV4KGUuaXRlbSk7XHJcbiAgY29uc3QgaGFuZGxlUmF0ZVBob3RvID0gKHJhdGUpID0+IHtcclxuICAgIG9uUmF0ZVBvc3QoJ1Bob3RvJywgZGF0YVtzbGlkZXJJbmRleF0uaWQsIHJhdGUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uVXBkYXRlVGltZWxpbmUgPSBhc3luYyAobmV3Q29tbWVudCkgPT4ge1xyXG4gICAgY29uc3QgIHsgY29tbWVudHMgfSA9IHN0b3JhZ2UucGhvdG9EYXRhO1xyXG4gICAgbGV0IGFkZEVsZW1lbnQgPSB7XHJcbiAgICAgIGFjY291bnQ6IGF1dGgudXNlciwgXHJcbiAgICAgIC4uLm5ld0NvbW1lbnQuY29tbWVudHNbMF1cclxuICAgIH1cclxuICAgIHZhciBsYXN0UGhvdG8gPSB7Li4uc3RvcmFnZS5waG90b0RhdGEsIGNvbW1lbnRzOiBbLi4uY29tbWVudHMsIGFkZEVsZW1lbnRdfTtcclxuICAgIGRpc3BhdGNoKHNldFBob3RvKGxhc3RQaG90bykpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlU2hvd0NvbW1lbnRNb2RhbCA9IChpZCkgPT4ge2NvbnNvbGUubG9nKGlkKTtcclxuICAgIHNldE1vZGFsTW9kZSghbW9kYWxNb2RlKTtcclxuICAgIHNldEFjdGl2ZVBvc3RJZChpZCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0TGlrZUFjdGlvblVzZXJJbmZvID0gKGRhdGEpID0+IHtcclxuICAgIHZhciBmaW5hbERhdGEgPSAnJztcclxuICAgIGRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICBmaW5hbERhdGEgPSBmaW5hbERhdGEgKyAnICcgKyBpdGVtLmFjY291bnQuZmlyc3ROYW1lICsgJycgKyBpdGVtLmFjY291bnQubGFzdE5hbWUgO1xyXG4gICAgfSlcclxuICAgIHJldHVybiBmaW5hbERhdGE7XHJcbiAgfVxyXG5cclxuICBjb25zb2xlLmxvZyhhdXRoKTtcclxuICBjb25zb2xlLmxvZyhzdG9yYWdlKTtcclxuIGNvbnNvbGUubG9nKGF1dGgudXNlci5wcm9maWxlUGhvdG8uc3JjKTtcclxuICBjb25zdCByb3VuZFJhdGluZyA9IHN0b3JhZ2UucGhvdG9EYXRhPy5yYXRpbmc7XHJcbiAgY29uc3QgY2FwdGlvbiA9ICBzdG9yYWdlLnBob3RvRGF0YT8uY2FwdGlvbjtcclxuICBjb25zdCBjb21tZW50cyA9IHN0b3JhZ2UucGhvdG9EYXRhPy5jb21tZW50cztcclxuICBjb25zdCByZWFjdGlvbnMgPSBzdG9yYWdlLnBob3RvRGF0YT8ucmVhY3Rpb25zO1xyXG4gIGNvbnN0IHNoYXJlcyA9IHN0b3JhZ2UucGhvdG9EYXRhPy5zaGFyZXM7XHJcbiAgY29uc3QgaWQgPSBzdG9yYWdlLnBob3RvRGF0YT8uaWQ7XHJcbiAgY29uc3QgdHlwZSA9IGRhdGFbc2xpZGVySW5kZXhdPy50eXBlO1xyXG4gIGNvbnNvbGUubG9nKCdzaGFyZXMnLCBzdG9yYWdlLnBob3RvRGF0YT8uc2hhcmVzKTtcclxuICBjb25zdCBsaWtlRGF0YSA9IHJlYWN0aW9ucz8gcmVhY3Rpb25zPy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlYWN0aW9uID09ICdMSUtFJyk6W107XHJcbiAgY29uc3QgaGVhcnREYXRhID0gIHJlYWN0aW9ucz8gcmVhY3Rpb25zPy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlYWN0aW9uID09ICdIRUFSVCcpOltdO1xyXG4gIGNvbnN0IHdvd0RhdGEgPSByZWFjdGlvbnMgPyByZWFjdGlvbnM/LmZpbHRlcihpdGVtID0+IGl0ZW0ucmVhY3Rpb24gPT0gJ1dPVycpOltdO1xyXG4gIGNvbnN0IGhhaGFEYXRhID0gcmVhY3Rpb25zID8gcmVhY3Rpb25zPy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlYWN0aW9uID09ICdIQUhBJyk6W107XHJcbiAgY29uc3Qgc2FkRGF0YSA9IHJlYWN0aW9ucyA/IHJlYWN0aW9ucz8uZmlsdGVyKGl0ZW0gPT4gaXRlbS5yZWFjdGlvbiA9PSAnU0FEJyk6W107XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGhvdG9Nb2RhbFdyYXBwZXIgey4uLnJlc3QgfSBwcm9maWxlUGhvdG8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvbnN9PlxyXG4gICAgICAgICAgPExlZnRPdXRsaW5lZFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wcmV2X2FjdGlvbn1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2xpZGVQcmV2KCl9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyNSxcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnYmxhY2snLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDgsXHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC42LFxyXG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDE1XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFJpZ2h0T3V0bGluZWRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubmV4dF9hY3Rpb259XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNsaWRlTmV4dCgpfVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMjUsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ2JsYWNrJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA4LFxyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNixcclxuICAgICAgICAgICAgICBtYXJnaW5SaWdodDogMTVcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEFsaWNlQ2Fyb3VzZWxcclxuICAgICAgICAgIG1vdXNlVHJhY2tpbmdFbmFibGVkXHJcbiAgICAgICAgICBkb3RzRGlzYWJsZWRcclxuICAgICAgICAgIGJ1dHRvbnNEaXNhYmxlZFxyXG4gICAgICAgICAgc2xpZGVUb0luZGV4PXtzbGlkZXJJbmRleH1cclxuICAgICAgICAgIG9uU2xpZGVDaGFuZ2VkPXtvblNsaWRlQ2hhbmdlZH1cclxuICAgICAgICAgIGluZmluaXRlPXtmYWxzZX1cclxuICAgICAgICBcclxuICAgICAgICAgIC8vIGF1dG9IZWlnaHQgIFxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBob3RvX2NvbnRhaW5lcn0ga2V5PXtpbmRleH0gZGF0YS12YWx1ZT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5waG90b30+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBvbkRyYWdTdGFydD17aGFuZGxlT25EcmFnU3RhcnR9XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHsoaXRlbT8uYmxvYl90biAhPT0gbnVsbCk/KGl0ZW0/LmJsb2JfdG4pOihpdGVtPy5zcmMpfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvQWxpY2VDYXJvdXNlbD5cclxuICAgICAgICBcclxuICAgICAgICB7ZGF0YS5sZW5ndGggIT09IDAgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yYXRpbmdfd3JhcHBlcn0+XHJcbiAgICAgICAgICAgIDxSYXRpbmdTbGlkZVxyXG4gICAgICAgICAgICBkZWZhdWx0UmF0ZT17cm91bmRSYXRpbmd9XHJcbiAgICAgICAgICAgIHdpdGhvdXRUZXh0XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVSYXRlUGhvdG99XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgey8qIDxzcGFuPntyb3VuZFJhdGluZ308L3NwYW4+ICovfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnRSZWFjdGlvbn0+XHJcbiAgICAgICA8TG9hZGluZ1dyYXBwZXIgbG9hZGluZz17c3RvcmFnZS5sb2FkaW5nfT5cclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9faGVhZGVyfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyfT5cclxuICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgIHRleHQ9e2F1dGgudXNlcj8uZmlyc3ROYW1lICsgXCIgXCIgKyBhdXRoLnVzZXI/Lmxhc3ROYW1lfVxyXG4gICAgICAgICAgICAgIHVybD17YCR7YXV0aC51c2VyLnByb2ZpbGVQaG90by5zcmN9YH1cclxuICAgICAgICAgICAgICBzaXplPXs2MH1cclxuICAgICAgICAgICAgICBib3JkZXJTaXplPXszfVxyXG4gICAgICAgICAgICAgIHVzZXJuYW1lPXthdXRoLnVzZXI/LnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfaW5mb30+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfbmFtZX0+e2F1dGgudXNlcj8uZmlyc3ROYW1lICsgXCIgXCIgKyBhdXRoLnVzZXI/Lmxhc3ROYW1lfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgXHJcbiAgICAgICAgPGgzIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogNDAgfX0+e2NhcHRpb259PC9oMz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlYWN0aW9uc19zaGFyZXNfc3RhdHVzfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVhY3Rpb25zX3N0YXR1c30+XHJcbiAgICAgICAgICAgIHsgbGlrZURhdGEubGVuZ3RoID4gMCAmJiA8PlxyXG4gICAgICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPXtnZXRMaWtlQWN0aW9uVXNlckluZm8obGlrZURhdGEpfT5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAndGh1bWJzLXVwJ119IHNpemU9XCIxeFwiICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJ319Lz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPntsaWtlRGF0YS5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvVG9vbHRpcD48Lz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7IGhhaGFEYXRhLmxlbmd0aCA+IDAgJiYgPD5cclxuICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKGhhaGFEYXRhKX0+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ2dyaW4nXX0gc2l6ZT1cIjF4XCIgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInfX0vPiBcclxuICAgICAgICAgICAgICAgIDxzcGFuPntoYWhhRGF0YS5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7IGhlYXJ0RGF0YS5sZW5ndGggPiAwICYmIDw+IFxyXG4gICAgICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPXtnZXRMaWtlQWN0aW9uVXNlckluZm8oaGVhcnREYXRhKX0+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ2hlYXJ0J119IHNpemU9XCIxeFwiICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJ319Lz4gXHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57aGVhcnREYXRhLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHsgd293RGF0YS5sZW5ndGggPiAwICYmIDw+IFxyXG4gICAgICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPXtnZXRMaWtlQWN0aW9uVXNlckluZm8od293RGF0YSl9PlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdsYXVnaCddfSBzaXplPVwiMXhcIiAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcid9fS8+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57d293RGF0YS5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICA8Lz4gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgeyBzYWREYXRhLmxlbmd0aCA+IDAgJiYgPD5cclxuICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKHNhZERhdGEpfT5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAnZnJvd24nXX0gc2l6ZT1cIjF4XCIgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInfX0vPiBcclxuICAgICAgICAgICAgICAgIDxzcGFuPntzYWREYXRhLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHtzaGFyZXMgJiYgc2hhcmVzLmxlbmd0aCA+IDAgPzxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2hhcmVzX3N0YXR1c30+XHJcbiAgICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cInRvcFwiIHRpdGxlPXsnU2hhcmUnfT5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAnc2hhcmUtc3F1YXJlJ119Lz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPntzaGFyZXMubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgPC9kaXY+Om51bGx9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEFjdGlvbnNcclxuICAgICAgICAgIGlkPXtpZH1cclxuICAgICAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgICAgICBwb3N0UmF0ZT17cm91bmRSYXRpbmd9XHJcbiAgICAgICAgICBjb21tZW50cz17Y29tbWVudHN9XHJcbiAgICAgICAgICBvblJhdGVQb3N0PXtvblJhdGVQb3N0fVxyXG4gICAgICAgICAgaW5kZXg9e3NsaWRlckluZGV4fVxyXG4gICAgICAgICAgbGlrZUFjdGlvbj17KHRlcm0pID0+IGxpa2VBY3Rpb24odHlwZSwgaWQsIHRlcm0pfVxyXG4gICAgICAgICAgc2hhcmVBY3Rpb249eygpID0+IHNoYXJlQWN0aW9uKHR5cGUsIGlkKX1cclxuICAgICAgICAgIGFjdGlvbnM9eygpID0+IHsgaGFuZGxlU2hvd0NvbW1lbnRNb2RhbChpZCkgfSB9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Q29tbWVudHNcclxuICAgICAgICAgIGlkPXtpZH1cclxuICAgICAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgICAgICBkYXRhPXtjb21tZW50c31cclxuICAgICAgICAgIG9uVXBkYXRlVGltZWxpbmU9e29uVXBkYXRlVGltZWxpbmV9XHJcbiAgICAgICAgICBhY3RpdmVQb3N0SWQ9e2FjdGl2ZVBvc3RJZH1cclxuICAgICAgICAgIG1vZGFsTW9kZT17bW9kYWxNb2RlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPC9Mb2FkaW5nV3JhcHBlcj5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgPC9QaG90b01vZGFsV3JhcHBlcj5cclxuICApO1xyXG59XHJcblxyXG5QaG90b3NNb2RhbC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgZGF0YTogW10sXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9