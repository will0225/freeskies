webpackHotUpdate_N_E("pages/profile/[username]",{

/***/ "./containers/UserProfile/UserProfile.js":
/*!***********************************************!*\
  !*** ./containers/UserProfile/UserProfile.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _configs_API__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../configs/API */ "./configs/API.js");
/* harmony import */ var components_profile_PhotoSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/profile/PhotoSection */ "./components/profile/PhotoSection.js");
/* harmony import */ var components_profile_FeedPosts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/profile/FeedPosts */ "./components/profile/FeedPosts.js");
/* harmony import */ var components_profile_PostingPost__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/profile/PostingPost */ "./components/profile/PostingPost.js");
/* harmony import */ var components_profile_RatedSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/profile/RatedSection */ "./components/profile/RatedSection.js");
/* harmony import */ var helpers_hoc_requireAuth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! helpers/hoc/requireAuth */ "./helpers/hoc/requireAuth.js");
/* harmony import */ var _components_common_Avatar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/common/Avatar */ "./components/common/Avatar.js");
/* harmony import */ var react_rating__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-rating */ "./node_modules/react-rating/lib/react-rating.esm.js");
/* harmony import */ var _components_common_ModalWrapper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/common/ModalWrapper */ "./components/common/ModalWrapper.js");
/* harmony import */ var _components_profile_PostModal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/profile/PostModal */ "./components/profile/PostModal.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var components_header_Header__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/header/Header */ "./components/header/Header.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./actions */ "./containers/UserProfile/actions/index.js");
/* harmony import */ var _storage_UserProfileContext__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./storage/UserProfileContext */ "./containers/UserProfile/storage/UserProfileContext.js");
/* harmony import */ var components_timeline_TimelinePosts__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! components/timeline/TimelinePosts */ "./components/timeline/TimelinePosts.js");
/* harmony import */ var _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./styles/userprofile.module.scss */ "./containers/UserProfile/styles/userprofile.module.scss");
/* harmony import */ var _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21__);


var _jsxFileName = "E:\\freeskies_fe_code\\containers\\UserProfile\\UserProfile.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }























const {
  TabPane
} = antd__WEBPACK_IMPORTED_MODULE_4__["Tabs"];

function UserProfile({
  auth,
  authServices
}) {
  _s();

  var _storage$user_account, _storage$user_account2, _storage$user_account3, _storage$user_account4, _storage$user_account5, _storage$user_account6, _storage$user_account7;

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_17__["useRouter"])();
  const {
    username
  } = router.query;
  const {
    0: storage,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_storage_UserProfileContext__WEBPACK_IMPORTED_MODULE_19__["UserProfileContext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    getAccount();
    getActivity();
    getFriends();
    getPhotos();
    getRates();
  }, []);

  const getAccount = async () => {
    try {
      const request = await Object(_configs_API__WEBPACK_IMPORTED_MODULE_5__["default"])({
        method: 'post',
        url: '/accounts/get-account',
        data: {
          "username": username
        },
        headers: {
          'x-token': auth.token
        }
      });
      const {
        data,
        status
      } = request;

      if (status === 200) {
        dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_18__["setUserProfileData"])(data));
      } else if (status === 403) {
        authServices.refreshToken();
      } else {
        antd__WEBPACK_IMPORTED_MODULE_4__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getActivity = async () => {
    try {
      const request = await Object(_configs_API__WEBPACK_IMPORTED_MODULE_5__["default"])({
        method: 'post',
        url: '/accounts/get-account-activity',
        data: {
          "username": username
        },
        headers: {
          'x-token': auth.token
        }
      });
      const {
        data,
        status
      } = request;

      if (status === 200) {
        var activityData = data.map(element => {
          element = filterAccountData(element);
          return element;
        });
        dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_18__["setActivityData"])(activityData));
      } else if (status === 403) {
        authServices.refreshToken();
      } else {
        antd__WEBPACK_IMPORTED_MODULE_4__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getFriends = async () => {
    try {
      const request = await Object(_configs_API__WEBPACK_IMPORTED_MODULE_5__["default"])({
        method: 'post',
        url: '/accounts/get-account-friends',
        data: {
          "username": username,
          "offset": 0,
          "first": 10
        },
        headers: {
          'x-token': auth.token
        }
      });
      const {
        data,
        status
      } = request;

      if (status === 200) {
        dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_18__["setFriendsData"])(data));
      } else if (status === 403) {
        authServices.refreshToken();
      } else {
        antd__WEBPACK_IMPORTED_MODULE_4__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getPhotos = async () => {
    try {
      const request = await Object(_configs_API__WEBPACK_IMPORTED_MODULE_5__["default"])({
        method: 'post',
        url: '/accounts/get-account-photos',
        data: {
          "username": username,
          "offset": 0,
          "first": 10
        },
        headers: {
          'x-token': auth.token
        }
      });
      const {
        data,
        status
      } = request;

      if (status === 200) {
        dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_18__["setPhotosData"])(data));
      } else if (status === 403) {
        authServices.refreshToken();
      } else {
        antd__WEBPACK_IMPORTED_MODULE_4__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getRates = async () => {
    try {
      const request = await Object(_configs_API__WEBPACK_IMPORTED_MODULE_5__["default"])({
        method: 'post',
        url: '/accounts/get-account-rated',
        data: {
          "username": username,
          "offset": 0,
          "first": 10
        },
        headers: {
          'x-token': auth.token
        }
      });
      const {
        data,
        status
      } = request;

      if (status === 200) {
        dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_18__["setRatesData"])(data));
      } else if (status === 403) {
        authServices.refreshToken();
      } else {
        antd__WEBPACK_IMPORTED_MODULE_4__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const filterAccountData = comment_shared => {
    if (comment_shared.type === 'Comment') {
      if (comment_shared.commented.type == 'Post') {
        return _objectSpread(_objectSpread({}, comment_shared.commented), {}, {
          comments: [_objectSpread(_objectSpread({}, comment_shared), {}, {
            account: comment_shared.account
          })]
        });
      } else if (comment_shared.commented.type == 'Comment') {
        return _objectSpread(_objectSpread({}, comment_shared.commented.commented), {}, {
          comments: [_objectSpread(_objectSpread({}, comment_shared.commented), {}, {
            comments: [comment_shared]
          })]
        });
      } else if (comment_shared.commented.type == 'Share') {
        return _objectSpread(_objectSpread({}, comment_shared.commented.shared), {}, {
          comments: [_objectSpread(_objectSpread({}, comment_shared), {}, {
            account: comment_shared.account
          })]
        });
      } else {
        return _objectSpread(_objectSpread({}, comment_shared.commented), {}, {
          comments: [_objectSpread(_objectSpread({}, comment_shared), {}, {
            account: comment_shared.account
          })]
        });
      }
    } else if (comment_shared.type === 'Post') {
      return comment_shared;
    } else if (comment_shared.type === 'Share') {
      return _objectSpread(_objectSpread({}, comment_shared.shared), {}, {
        comments: [_objectSpread(_objectSpread({}, comment_shared), {}, {
          account: comment_shared.account
        })]
      });
    } else {
      return comment_shared;
    }
  };

  const ratePost = async (type, postId, rate) => {
    try {
      let url = '';

      if (type === 'Photo') {
        url = '/photos/rate';
      } else if (type === 'VideoClip') {
        url = '/video-clips/rate';
      } else if (type === 'Item') {
        url = '/items/rate';
      } else if (type === 'Post') {
        url = '/posts/rate';
      } else if (type === 'Comment') {
        url = '/comments/rate';
      }

      const request = await Object(_configs_API__WEBPACK_IMPORTED_MODULE_5__["default"])({
        method: 'post',
        url,
        data: {
          id: postId,
          rating: rate
        },
        headers: {
          'x-token': auth.token
        }
      });
      const {
        data,
        status
      } = request;

      if (status === 201) {
        storage.activityData.map(element => {
          if (element.id === postId && element.type === type) {
            element.rating = rate;
            return element;
          }
        });
        dispatch(setActivity(storage.activityData));
      } else {
        antd__WEBPACK_IMPORTED_MODULE_4__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
      }

      return await request;
    } catch (error) {
      console.log(error);
    }
  };

  const likeAction = async (type, id, term) => {
    var url = '';

    if (type === 'Photo') {
      url = '/photos/react';
    } else if (type === 'VideoClip') {
      url = '/video-clips/react';
    } else if (type === 'Item') {
      url = '/items/react';
    } else if (type === 'Post') {
      url = '/posts/react';
    } else if (type === 'Comment') {
      url = '/comments/react';
    } else if (type === 'Share') {
      url = '/shares/react';
    }

    try {
      const request = await Object(_configs_API__WEBPACK_IMPORTED_MODULE_5__["default"])({
        method: 'post',
        url: url,
        data: {
          reacted: id,
          reaction: term
        },
        headers: {
          'x-token': auth.token
        }
      });
      const {
        data,
        status
      } = request;

      if (status === 201) {
        antd__WEBPACK_IMPORTED_MODULE_4__["message"].success('Added successfully');
      } else {
        antd__WEBPACK_IMPORTED_MODULE_4__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
        throw new Error();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const shareAction = async (type, id) => {
    var url = '';

    if (type === 'Photo') {
      url = '/photos/share';
    } else if (type === 'VideoClip') {
      url = '/video-clips/share';
    } else if (type === 'Item') {
      url = '/items/share';
    } else if (type === 'Post') {
      url = '/posts/share';
    } else if (type === 'Comment') {
      url = '/comments/share';
    } else if (type === 'Share') {
      url = '/posts/share';
    }

    try {
      const request = await Object(_configs_API__WEBPACK_IMPORTED_MODULE_5__["default"])({
        method: 'post',
        url: url,
        data: {
          shared: id
        },
        headers: {
          'x-token': auth.token
        }
      });
      const {
        data,
        status
      } = request;

      if (status === 201) {
        antd__WEBPACK_IMPORTED_MODULE_4__["message"].success('Shared successfully');
      } else {
        antd__WEBPACK_IMPORTED_MODULE_4__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
        throw new Error();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const friend = async username => {
    if (username !== '') {
      try {
        const request = await Object(_configs_API__WEBPACK_IMPORTED_MODULE_5__["default"])({
          method: 'post',
          url: '/accounts/friendship',
          data: {
            username: username
          },
          headers: {
            'x-token': auth.token
          }
        });
        const {
          data,
          status
        } = request;

        if (status === 201) {
          antd__WEBPACK_IMPORTED_MODULE_4__["message"].success('Added Friend successfully');
        } else {
          antd__WEBPACK_IMPORTED_MODULE_4__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
        }

        return await request;
      } catch (error) {
        console.log(error);
      }
    }
  };

  const unfriend = async username => {
    if (username !== '') {
      try {
        const request = await Object(_configs_API__WEBPACK_IMPORTED_MODULE_5__["default"])({
          method: 'delete',
          url: '/accounts/friendship',
          data: {
            username: username
          },
          headers: {
            'x-token': auth.token
          }
        });
        const {
          data,
          status
        } = request;

        if (status === 201) {
          antd__WEBPACK_IMPORTED_MODULE_4__["message"].success('Deleted Friend successfully');
        } else {
          antd__WEBPACK_IMPORTED_MODULE_4__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
        }

        return await request;
      } catch (error) {
        console.log(error);
      }
    }
  };

  const unfollow = async username => {
    if (username !== '') {
      try {
        const request = await Object(_configs_API__WEBPACK_IMPORTED_MODULE_5__["default"])({
          method: 'delete',
          url: '/accounts/followship',
          data: {
            username: username
          },
          headers: {
            'x-token': auth.token
          }
        });
        const {
          data,
          status
        } = request;
        antd__WEBPACK_IMPORTED_MODULE_4__["message"].success('Unfollowed successfully!');
        return;

        if (status === 200) {
          antd__WEBPACK_IMPORTED_MODULE_4__["message"].success('Unfollowed successfully!');
        } else {
          antd__WEBPACK_IMPORTED_MODULE_4__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
        }

        dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_18__["setLoading"])(false));
        return await request;
      } catch (error) {
        dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_18__["setLoading"])(false));
      }
    }
  };

  const follow = async username => {
    if (username !== '') {
      try {
        dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_18__["setLoading"])(true));
        const request = await Object(_configs_API__WEBPACK_IMPORTED_MODULE_5__["default"])({
          method: 'post',
          url: '/accounts/followship',
          data: {
            username: username
          },
          headers: {
            'x-token': auth.token
          }
        });
        const {
          data,
          status
        } = request;
        antd__WEBPACK_IMPORTED_MODULE_4__["message"].success('Followed successfully!');
        return;

        if (status === 200) {
          antd__WEBPACK_IMPORTED_MODULE_4__["message"].success('Unfollowed successfully!');
        } else {
          antd__WEBPACK_IMPORTED_MODULE_4__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
        }

        dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_18__["setLoading"])(false));
        return await request;
      } catch (error) {
        dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_18__["setLoading"])(false));
      }
    }
  };

  console.log(storage);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 9
    }
  }, __jsx(components_header_Header__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.left,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424,
      columnNumber: 11
    }
  }, storage.user_accountData.length !== 0 ? __jsx("div", {
    className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.profile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.avatar_image,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428,
      columnNumber: 17
    }
  }, __jsx(_components_common_Avatar__WEBPACK_IMPORTED_MODULE_11__["default"], {
    size: 140,
    url: "".concat((_storage$user_account = storage.user_accountData) === null || _storage$user_account === void 0 ? void 0 : (_storage$user_account2 = _storage$user_account.profilePhoto) === null || _storage$user_account2 === void 0 ? void 0 : _storage$user_account2.src),
    text: (_storage$user_account3 = storage.user_accountData) === null || _storage$user_account3 === void 0 ? void 0 : _storage$user_account3.username,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.user_content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.user_info,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.heade_section,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.left_side,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 21
    }
  }, __jsx("p", {
    className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.fullname,
    style: {
      cursor: 'pointer'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441,
      columnNumber: 23
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442,
      columnNumber: 25
    }
  }, "".concat((_storage$user_account4 = storage.user_accountData) === null || _storage$user_account4 === void 0 ? void 0 : _storage$user_account4.firstName, " ").concat((_storage$user_account5 = storage.user_accountData) === null || _storage$user_account5 === void 0 ? void 0 : _storage$user_account5.lastName)))), __jsx("div", {
    className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.right_side,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 21
    }
  }, __jsx("p", {
    className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.rating,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446,
      columnNumber: 23
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Rate"], {
    defaultValue: (_storage$user_account6 = storage.user_accountData) === null || _storage$user_account6 === void 0 ? void 0 : _storage$user_account6.rating,
    style: {
      color: '#fadb14',
      fontSize: '30px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.rating_text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 25
    }
  }, (_storage$user_account7 = storage.user_accountData) === null || _storage$user_account7 === void 0 ? void 0 : _storage$user_account7.rating))))))) : __jsx("div", {
    className: "border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 461,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "animate-pulse flex space-x-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "rounded-full bg-gray-400 h-12 w-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463,
      columnNumber: 19
    }
  }), __jsx("div", {
    className: "flex-1 space-y-4 py-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 464,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "h-4 bg-gray-400 rounded w-3/4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 465,
      columnNumber: 23
    }
  }), __jsx("div", {
    className: "space-y-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 466,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "h-4 bg-gray-400 rounded",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "h-4 bg-gray-400 rounded w-5/6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 468,
      columnNumber: 25
    }
  }))))), __jsx("div", {
    className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.profile_user_button,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 474,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.profile_content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 493,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.profile_tabs,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 494,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Tabs"], {
    defaultActiveKey: "1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 495,
      columnNumber: 17
    }
  }, __jsx(TabPane, {
    tab: __jsx("span", {
      className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.tab,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 498,
        columnNumber: 21
      }
    }, "ACTIVITY"),
    key: "1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.activity_label,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504,
      columnNumber: 19
    }
  }, "ACTIVITY"), __jsx(components_timeline_TimelinePosts__WEBPACK_IMPORTED_MODULE_20__["default"], {
    data: storage.activityData,
    onUpdateTimeline: () => {},
    onRatePost: ratePost,
    likeAction: likeAction,
    shareAction: shareAction,
    deleteAction: () => {},
    disableDelete: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505,
      columnNumber: 19
    }
  })), __jsx(TabPane, {
    tab: __jsx("span", {
      className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.tab,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 517,
        columnNumber: 21
      }
    }, "FRIENDS"),
    key: "2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 515,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.friends_list, _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.sections_content),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523,
      columnNumber: 19
    }
  }, storage === null || storage === void 0 ? void 0 : storage.friendsData.map((item, index) => {
    return __jsx("div", {
      className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.friend,
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 532,
        columnNumber: 25
      }
    }, __jsx(_components_common_Avatar__WEBPACK_IMPORTED_MODULE_11__["default"], {
      size: 80,
      url: item === null || item === void 0 ? void 0 : item.profilePhoto,
      text: item === null || item === void 0 ? void 0 : item.username,
      style: {
        marginRight: 0
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 533,
        columnNumber: 27
      }
    }), __jsx("div", {
      className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.friend_name,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 539,
        columnNumber: 27
      }
    }, __jsx("p", {
      style: {
        textAlign: 'left',
        fontSize: 20
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 540,
        columnNumber: 29
      }
    }, item.firstName, " ", item.lastName), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Rate"], {
      defaultValue: item.rating,
      style: {
        color: '#fadb14',
        fontSize: '15px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 541,
        columnNumber: 29
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      type: "default",
      shape: "round",
      size: "small",
      style: {
        marginLeft: 5
      },
      onClick: () => friend(item.username),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 545,
        columnNumber: 29
      }
    }, "Friend")));
  }))), __jsx(TabPane, {
    tab: __jsx("span", {
      className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.tab,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 557,
        columnNumber: 21
      }
    }, "PHOTOS"),
    key: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 555,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.photoSection,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 563,
      columnNumber: 19
    }
  }, __jsx(components_profile_PhotoSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
    user: storage.photosData,
    onRatePost: ratePost,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 564,
      columnNumber: 21
    }
  }))), __jsx(TabPane, {
    tab: __jsx("span", {
      className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.tab,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 569,
        columnNumber: 21
      }
    }, "RATED"),
    key: "4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 567,
      columnNumber: 17
    }
  }, __jsx(components_profile_RatedSection__WEBPACK_IMPORTED_MODULE_9__["default"], {
    user: {
      recentRated: storage.ratesData
    },
    onRatePost: ratePost,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 575,
      columnNumber: 19
    }
  }))))))));
}

_s(UserProfile, "RcsePKslwohTu3w2Xx5GDbpfOIU=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_17__["useRouter"]];
});

_c = UserProfile;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(helpers_hoc_requireAuth__WEBPACK_IMPORTED_MODULE_10__["default"])(UserProfile));

var _c, _c2;

$RefreshReg$(_c, "UserProfile");
$RefreshReg$(_c2, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9Vc2VyUHJvZmlsZS9Vc2VyUHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJUYWJQYW5lIiwiVGFicyIsIlVzZXJQcm9maWxlIiwiYXV0aCIsImF1dGhTZXJ2aWNlcyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZXJuYW1lIiwicXVlcnkiLCJzdG9yYWdlIiwiZGlzcGF0Y2giLCJ1c2VDb250ZXh0IiwiVXNlclByb2ZpbGVDb250ZXh0IiwidXNlRWZmZWN0IiwiZ2V0QWNjb3VudCIsImdldEFjdGl2aXR5IiwiZ2V0RnJpZW5kcyIsImdldFBob3RvcyIsImdldFJhdGVzIiwicmVxdWVzdCIsIkFQSSIsIm1ldGhvZCIsInVybCIsImRhdGEiLCJoZWFkZXJzIiwidG9rZW4iLCJzdGF0dXMiLCJzZXRVc2VyUHJvZmlsZURhdGEiLCJyZWZyZXNoVG9rZW4iLCJtZXNzYWdlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiYWN0aXZpdHlEYXRhIiwibWFwIiwiZWxlbWVudCIsImZpbHRlckFjY291bnREYXRhIiwic2V0QWN0aXZpdHlEYXRhIiwic2V0RnJpZW5kc0RhdGEiLCJzZXRQaG90b3NEYXRhIiwic2V0UmF0ZXNEYXRhIiwiY29tbWVudF9zaGFyZWQiLCJ0eXBlIiwiY29tbWVudGVkIiwiY29tbWVudHMiLCJhY2NvdW50Iiwic2hhcmVkIiwicmF0ZVBvc3QiLCJwb3N0SWQiLCJyYXRlIiwiaWQiLCJyYXRpbmciLCJzZXRBY3Rpdml0eSIsImxpa2VBY3Rpb24iLCJ0ZXJtIiwicmVhY3RlZCIsInJlYWN0aW9uIiwic3VjY2VzcyIsIkVycm9yIiwic2hhcmVBY3Rpb24iLCJmcmllbmQiLCJ1bmZyaWVuZCIsInVuZm9sbG93Iiwic2V0TG9hZGluZyIsImZvbGxvdyIsInN0eWxlcyIsImhlYWRlciIsImNvbnRhaW5lciIsImxlZnQiLCJ1c2VyX2FjY291bnREYXRhIiwibGVuZ3RoIiwicHJvZmlsZSIsImF2YXRhciIsImF2YXRhcl9pbWFnZSIsInByb2ZpbGVQaG90byIsInNyYyIsInVzZXJfY29udGVudCIsInVzZXJfaW5mbyIsImhlYWRlX3NlY3Rpb24iLCJsZWZ0X3NpZGUiLCJmdWxsbmFtZSIsImN1cnNvciIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwicmlnaHRfc2lkZSIsImNvbG9yIiwiZm9udFNpemUiLCJyYXRpbmdfdGV4dCIsInByb2ZpbGVfdXNlcl9idXR0b24iLCJwcm9maWxlX2NvbnRlbnQiLCJwcm9maWxlX3RhYnMiLCJ0YWIiLCJhY3Rpdml0eV9sYWJlbCIsImNsYXNzbmFtZXMiLCJmcmllbmRzX2xpc3QiLCJzZWN0aW9uc19jb250ZW50IiwiZnJpZW5kc0RhdGEiLCJpdGVtIiwiaW5kZXgiLCJtYXJnaW5SaWdodCIsImZyaWVuZF9uYW1lIiwidGV4dEFsaWduIiwibWFyZ2luTGVmdCIsInBob3RvU2VjdGlvbiIsInBob3Rvc0RhdGEiLCJyZWNlbnRSYXRlZCIsInJhdGVzRGF0YSIsInJlcXVpcmVBdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUFFQTtBQUFGLElBQWNDLHlDQUFwQjs7QUFDQSxTQUFTQyxXQUFULENBQXFCO0FBQUNDLE1BQUQ7QUFBT0M7QUFBUCxDQUFyQixFQUEyQztBQUFBOztBQUFBOztBQUN2QyxRQUFNQyxNQUFNLEdBQUdDLDhEQUFTLEVBQXhCO0FBQ0EsUUFBTTtBQUFFQztBQUFGLE1BQWVGLE1BQU0sQ0FBQ0csS0FBNUI7QUFDQSxRQUFNO0FBQUEsT0FBRUMsT0FBRjtBQUFBLE9BQVdDO0FBQVgsTUFBd0JDLHdEQUFVLENBQUNDLCtFQUFELENBQXhDO0FBRUFDLHlEQUFTLENBQUMsTUFB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TUFBQyx1RUFBRDtBQUFjLFFBQUksRUFBRTlGLE9BQU8sQ0FBQytGLFVBQTVCO0FBQXdDLGNBQVUsRUFBRXpELFFBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVJGLENBNURBLEVBd0VBLE1BQUMsT0FBRDtBQUNFLE9BQUcsRUFDRDtBQUFNLGVBQVMsRUFBRWtCLHVFQUFNLENBQUMwQixHQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFNRSxPQUFHLEVBQUMsR0FOTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUUsTUFBQyx1RUFBRDtBQUFjLFFBQUksRUFBRTtBQUFFYyxpQkFBVyxFQUFFaEcsT0FBTyxDQUFDaUc7QUFBdkIsS0FBcEI7QUFBd0QsY0FBVSxFQUFFM0QsUUFBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLENBeEVBLENBREYsQ0FERixDQXJFRixDQURGLENBSkYsQ0FERjtBQXVLSDs7R0FqakJRN0MsVztVQUNVSSxzRDs7O0tBRFZKLFc7QUFtakJNLHFFQUFDeUcsd0VBQVcsQ0FBQ3pHLFdBQUQsQ0FBM0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS9bdXNlcm5hbWVdLmQ2MTliNmZjOTMyYTI2MDE4MDBhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgQ2FtZXJhT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgVXBsb2FkLCBtZXNzYWdlLCBJbnB1dCwgVGFicywgUmF0ZSB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgQVBJIGZyb20gJy4uLy4uL2NvbmZpZ3MvQVBJJztcclxuaW1wb3J0IFBob3RvU2VjdGlvbiBmcm9tICdjb21wb25lbnRzL3Byb2ZpbGUvUGhvdG9TZWN0aW9uJztcclxuaW1wb3J0IEZlZWRQb3N0cyBmcm9tICdjb21wb25lbnRzL3Byb2ZpbGUvRmVlZFBvc3RzJztcclxuaW1wb3J0IFBvc3RpbmdQb3N0IGZyb20gJ2NvbXBvbmVudHMvcHJvZmlsZS9Qb3N0aW5nUG9zdCc7XHJcbmltcG9ydCBSYXRlZFNlY3Rpb24gZnJvbSAnY29tcG9uZW50cy9wcm9maWxlL1JhdGVkU2VjdGlvbic7XHJcbmltcG9ydCByZXF1aXJlQXV0aCBmcm9tICdoZWxwZXJzL2hvYy9yZXF1aXJlQXV0aCc7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb24vQXZhdGFyJztcclxuaW1wb3J0IFJhdGluZyAgZnJvbSAncmVhY3QtcmF0aW5nJztcclxuaW1wb3J0IE1vZGFsV3JhcHBlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9Nb2RhbFdyYXBwZXInO1xyXG5pbXBvcnQgUG9zdE1vZGFsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcHJvZmlsZS9Qb3N0TW9kYWwnO1xyXG5pbXBvcnQgeyBBdWRpb091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBzZXRVc2VyUHJvZmlsZURhdGEsIHNldExvYWRpbmcsIHNldEFjdGl2aXR5RGF0YSwgc2V0RnJpZW5kc0RhdGEsIHNldFBob3Rvc0RhdGEsIHNldFJhdGVzRGF0YSAgfSBmcm9tICcuL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBVc2VyUHJvZmlsZUNvbnRleHQgfSBmcm9tICcuL3N0b3JhZ2UvVXNlclByb2ZpbGVDb250ZXh0JztcclxuaW1wb3J0IFRpbWVsaW5lUG9zdHMgZnJvbSAnY29tcG9uZW50cy90aW1lbGluZS9UaW1lbGluZVBvc3RzJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy91c2VycHJvZmlsZS5tb2R1bGUuc2Nzcyc7XHJcbmNvbnN0IHsgVGFiUGFuZSB9ID0gVGFicztcclxuZnVuY3Rpb24gVXNlclByb2ZpbGUoe2F1dGgsIGF1dGhTZXJ2aWNlc30pIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCB7IHVzZXJuYW1lIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgICBjb25zdCBbIHN0b3JhZ2UsIGRpc3BhdGNoIF0gPSB1c2VDb250ZXh0KFVzZXJQcm9maWxlQ29udGV4dCk7XHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0QWNjb3VudCgpO1xyXG4gICAgICAgIGdldEFjdGl2aXR5KCk7XHJcbiAgICAgICAgZ2V0RnJpZW5kcygpO1xyXG4gICAgICAgIGdldFBob3RvcygpO1xyXG4gICAgICAgIGdldFJhdGVzKCk7XHJcbiAgICB9LCBbXSlcclxuICAgIGNvbnN0IGdldEFjY291bnQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCAgICAgQVBJKHtcclxuICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICAgIHVybDogJy9hY2NvdW50cy9nZXQtYWNjb3VudCcsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIFwidXNlcm5hbWVcIjogdXNlcm5hbWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcbiAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goc2V0VXNlclByb2ZpbGVEYXRhKGRhdGEpKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSA0MDMpIHtcclxuICAgICAgICAgICAgYXV0aFNlcnZpY2VzLnJlZnJlc2hUb2tlbigpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgZ2V0QWN0aXZpdHkgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0ICBBUEkoe1xyXG4gICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICB1cmw6ICcvYWNjb3VudHMvZ2V0LWFjY291bnQtYWN0aXZpdHknLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgIFwidXNlcm5hbWVcIjogdXNlcm5hbWVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG4gICAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgdmFyIGFjdGl2aXR5RGF0YSA9IGRhdGEubWFwKGVsZW1lbnQgPT4geyBcclxuICAgICAgICAgICAgZWxlbWVudCA9IGZpbHRlckFjY291bnREYXRhKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBkaXNwYXRjaChzZXRBY3Rpdml0eURhdGEoYWN0aXZpdHlEYXRhKSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IDQwMykge1xyXG4gICAgICAgICAgYXV0aFNlcnZpY2VzLnJlZnJlc2hUb2tlbigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRGcmllbmRzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCAgQVBJKHtcclxuICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgICAgdXJsOiAnL2FjY291bnRzL2dldC1hY2NvdW50LWZyaWVuZHMnLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgIFwidXNlcm5hbWVcIjogdXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgXCJvZmZzZXRcIjogMCxcclxuICAgICAgICAgICAgICBcImZpcnN0XCI6IDEwXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuICAgICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgIGRpc3BhdGNoKHNldEZyaWVuZHNEYXRhKGRhdGEpKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gNDAzKSB7XHJcbiAgICAgICAgICBhdXRoU2VydmljZXMucmVmcmVzaFRva2VuKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldFBob3RvcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgIEFQSSh7XHJcbiAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgIHVybDogJy9hY2NvdW50cy9nZXQtYWNjb3VudC1waG90b3MnLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgIFwidXNlcm5hbWVcIjogdXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgXCJvZmZzZXRcIjogMCxcclxuICAgICAgICAgICAgICBcImZpcnN0XCI6IDEwXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuICAgICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgIGRpc3BhdGNoKHNldFBob3Rvc0RhdGEoZGF0YSkpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSA0MDMpIHtcclxuICAgICAgICAgIGF1dGhTZXJ2aWNlcy5yZWZyZXNoVG9rZW4oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0UmF0ZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0ICBBUEkoe1xyXG4gICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICB1cmw6ICcvYWNjb3VudHMvZ2V0LWFjY291bnQtcmF0ZWQnLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgIFwidXNlcm5hbWVcIjogdXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgXCJvZmZzZXRcIjogMCxcclxuICAgICAgICAgICAgICBcImZpcnN0XCI6IDEwXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuICAgICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgIGRpc3BhdGNoKHNldFJhdGVzRGF0YShkYXRhKSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IDQwMykge1xyXG4gICAgICAgICAgYXV0aFNlcnZpY2VzLnJlZnJlc2hUb2tlbigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmaWx0ZXJBY2NvdW50RGF0YSA9IChjb21tZW50X3NoYXJlZCkgPT4ge1xyXG4gICAgICBpZihjb21tZW50X3NoYXJlZC50eXBlID09PSAnQ29tbWVudCcpIHtcclxuICAgICAgICBpZihjb21tZW50X3NoYXJlZC5jb21tZW50ZWQudHlwZSA9PSAnUG9zdCcpIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLmNvbW1lbnRfc2hhcmVkLmNvbW1lbnRlZCxcclxuICAgICAgICAgICAgY29tbWVudHM6IFt7Li4uY29tbWVudF9zaGFyZWQsIGFjY291bnQ6IGNvbW1lbnRfc2hhcmVkLmFjY291bnR9XVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoY29tbWVudF9zaGFyZWQuY29tbWVudGVkLnR5cGUgPT0gJ0NvbW1lbnQnKSB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5jb21tZW50X3NoYXJlZC5jb21tZW50ZWQuY29tbWVudGVkLFxyXG4gICAgICAgICAgICBjb21tZW50czogW3suLi5jb21tZW50X3NoYXJlZC5jb21tZW50ZWQsIGNvbW1lbnRzOiBbY29tbWVudF9zaGFyZWRdfV1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYoY29tbWVudF9zaGFyZWQuY29tbWVudGVkLnR5cGUgPT0gJ1NoYXJlJykge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uY29tbWVudF9zaGFyZWQuY29tbWVudGVkLnNoYXJlZCxcclxuICAgICAgICAgICAgY29tbWVudHM6IFt7IC4uLmNvbW1lbnRfc2hhcmVkLCBhY2NvdW50OiBjb21tZW50X3NoYXJlZC5hY2NvdW50IH1dXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLmNvbW1lbnRfc2hhcmVkLmNvbW1lbnRlZCxcclxuICAgICAgICAgICAgY29tbWVudHM6IFt7IC4uLmNvbW1lbnRfc2hhcmVkLCBhY2NvdW50OiBjb21tZW50X3NoYXJlZC5hY2NvdW50IH1dXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYoY29tbWVudF9zaGFyZWQudHlwZSA9PT0gJ1Bvc3QnKSB7XHJcbiAgICAgICAgICByZXR1cm4gY29tbWVudF9zaGFyZWQ7XHJcbiAgICAgIH0gZWxzZSBpZihjb21tZW50X3NoYXJlZC50eXBlID09PSAnU2hhcmUnKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLmNvbW1lbnRfc2hhcmVkLnNoYXJlZCxcclxuICAgICAgICAgIGNvbW1lbnRzOiBbey4uLmNvbW1lbnRfc2hhcmVkLCBhY2NvdW50OiBjb21tZW50X3NoYXJlZC5hY2NvdW50IH1dXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBjb21tZW50X3NoYXJlZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJhdGVQb3N0ID0gYXN5bmMgKHR5cGUsIHBvc3RJZCwgcmF0ZSkgPT4ge1xyXG4gICAgICB0cnkge1xyXG5cclxuICAgICAgICBsZXQgdXJsID0gJyc7XHJcbiAgXHJcbiAgICAgICAgaWYgKHR5cGUgPT09ICdQaG90bycpIHtcclxuICAgICAgICAgIHVybCA9ICcvcGhvdG9zL3JhdGUnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1ZpZGVvQ2xpcCcpIHtcclxuICAgICAgICAgIHVybCA9ICcvdmlkZW8tY2xpcHMvcmF0ZSc7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnSXRlbScpIHtcclxuICAgICAgICAgIHVybCA9ICcvaXRlbXMvcmF0ZSc7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnUG9zdCcpIHtcclxuICAgICAgICAgIHVybCA9ICcvcG9zdHMvcmF0ZSc7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnQ29tbWVudCcpIHtcclxuICAgICAgICAgIHVybCA9ICcvY29tbWVudHMvcmF0ZSc7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGlkOiBwb3N0SWQsXHJcbiAgICAgICAgICAgIHJhdGluZzogcmF0ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG4gIFxyXG4gICAgICAgIGlmIChzdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgICAgc3RvcmFnZS5hY3Rpdml0eURhdGEubWFwKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBpZihlbGVtZW50LmlkID09PSBwb3N0SWQgJiYgZWxlbWVudC50eXBlID09PSB0eXBlKSB7XHJcbiAgICAgICAgICAgICAgZWxlbWVudC5yYXRpbmcgPSByYXRlO1xyXG4gICAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgZGlzcGF0Y2goc2V0QWN0aXZpdHkoc3RvcmFnZS5hY3Rpdml0eURhdGEpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhd2FpdCByZXF1ZXN0O1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBsaWtlQWN0aW9uID0gYXN5bmMgKHR5cGUsIGlkLCB0ZXJtKSA9PiB7XHJcbiAgICAgIHZhciB1cmwgPSAnJztcclxuICAgICAgaWYgKHR5cGUgPT09ICdQaG90bycpIHtcclxuICAgICAgICB1cmwgPSAnL3Bob3Rvcy9yZWFjdCc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1ZpZGVvQ2xpcCcpIHtcclxuICAgICAgICB1cmwgPSAnL3ZpZGVvLWNsaXBzL3JlYWN0JztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnSXRlbScpIHtcclxuICAgICAgICB1cmwgPSAnL2l0ZW1zL3JlYWN0JztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnUG9zdCcpIHtcclxuICAgICAgICB1cmwgPSAnL3Bvc3RzL3JlYWN0JztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnQ29tbWVudCcpIHtcclxuICAgICAgICB1cmwgPSAnL2NvbW1lbnRzL3JlYWN0JztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnU2hhcmUnKSB7XHJcbiAgICAgICAgdXJsID0gJy9zaGFyZXMvcmVhY3QnO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICByZWFjdGVkOiBpZCxcclxuICAgICAgICAgICAgcmVhY3Rpb246IHRlcm1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG4gIFxyXG4gICAgICAgIGlmIChzdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKCdBZGRlZCBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH1cclxuICBcclxuICB9XHJcbiAgXHJcbiAgICBjb25zdCBzaGFyZUFjdGlvbiA9IGFzeW5jICh0eXBlLCBpZCkgPT4ge1xyXG4gIFxyXG4gICAgICB2YXIgdXJsID0gJyc7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09ICdQaG90bycpIHtcclxuICAgICAgICAgIHVybCA9ICcvcGhvdG9zL3NoYXJlJztcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdWaWRlb0NsaXAnKSB7XHJcbiAgICAgICAgICB1cmwgPSAnL3ZpZGVvLWNsaXBzL3NoYXJlJztcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdJdGVtJykge1xyXG4gICAgICAgICAgdXJsID0gJy9pdGVtcy9zaGFyZSc7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnUG9zdCcpIHtcclxuICAgICAgICAgIHVybCA9ICcvcG9zdHMvc2hhcmUnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0NvbW1lbnQnKSB7XHJcbiAgICAgICAgICB1cmwgPSAnL2NvbW1lbnRzL3NoYXJlJztcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdTaGFyZScpIHtcclxuICAgICAgICAgIHVybCA9ICcvcG9zdHMvc2hhcmUnO1xyXG4gICAgICAgIH1cclxuICBcclxuICBcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIHNoYXJlZDogaWQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuICBcclxuICAgICAgICBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcygnU2hhcmVkIHN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZyaWVuZCA9IGFzeW5jICh1c2VybmFtZSkgPT4ge1xyXG4gICAgICBpZih1c2VybmFtZSAhPT0gJycpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgICAgICB1cmw6ICcvYWNjb3VudHMvZnJpZW5kc2hpcCcsXHJcbiAgICAgICAgICAgIGRhdGE6IHsgdXNlcm5hbWU6IHVzZXJuYW1lIH0sXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG4gICAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcygnQWRkZWQgRnJpZW5kIHN1Y2Nlc3NmdWxseScpXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIGF3YWl0IHJlcXVlc3Q7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVuZnJpZW5kID0gYXN5bmMgKHVzZXJuYW1lKSA9PiB7XHJcbiAgICAgIGlmKHVzZXJuYW1lICE9PSAnJykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnZGVsZXRlJyxcclxuICAgICAgICAgICAgdXJsOiAnL2FjY291bnRzL2ZyaWVuZHNoaXAnLFxyXG4gICAgICAgICAgICBkYXRhOiB7IHVzZXJuYW1lOiB1c2VybmFtZSB9LFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuICAgICAgICAgIGlmIChzdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoJ0RlbGV0ZWQgRnJpZW5kIHN1Y2Nlc3NmdWxseScpXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIGF3YWl0IHJlcXVlc3Q7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVuZm9sbG93ID0gYXN5bmMgKHVzZXJuYW1lKSA9PiB7XHJcbiAgICAgIGlmKHVzZXJuYW1lICE9PSAnJykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnZGVsZXRlJyxcclxuICAgICAgICAgICAgdXJsOiAnL2FjY291bnRzL2ZvbGxvd3NoaXAnLFxyXG4gICAgICAgICAgICBkYXRhOiB7IHVzZXJuYW1lOiB1c2VybmFtZSB9LFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDttZXNzYWdlLnN1Y2Nlc3MoJ1VuZm9sbG93ZWQgc3VjY2Vzc2Z1bGx5IScpO3JldHVybjtcclxuICAgICAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKCdVbmZvbGxvd2VkIHN1Y2Nlc3NmdWxseSEnKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKTtcclxuICAgICAgICAgIHJldHVybiBhd2FpdCByZXF1ZXN0O1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZm9sbG93ID0gYXN5bmMgKHVzZXJuYW1lKSA9PiB7XHJcbiAgICAgIGlmKHVzZXJuYW1lICE9PSAnJykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKHRydWUpKTtcclxuICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgICAgdXJsOiAnL2FjY291bnRzL2ZvbGxvd3NoaXAnLFxyXG4gICAgICAgICAgICBkYXRhOiB7IHVzZXJuYW1lOiB1c2VybmFtZSB9LFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDttZXNzYWdlLnN1Y2Nlc3MoJ0ZvbGxvd2VkIHN1Y2Nlc3NmdWxseSEnKTtyZXR1cm47XHJcbiAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcygnVW5mb2xsb3dlZCBzdWNjZXNzZnVsbHkhJylcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICAgICAgICByZXR1cm4gYXdhaXQgcmVxdWVzdDtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgY29uc29sZS5sb2coc3RvcmFnZSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnR9PlxyXG4gICAgICAgICAgICB7c3RvcmFnZS51c2VyX2FjY291bnREYXRhLmxlbmd0aCAhPT0gMD9cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcl9pbWFnZX0gPlxyXG4gICAgICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPXsxNDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB1cmw9e2Ake3N0b3JhZ2UudXNlcl9hY2NvdW50RGF0YT8ucHJvZmlsZVBob3RvPy5zcmN9YH1cclxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e3N0b3JhZ2UudXNlcl9hY2NvdW50RGF0YT8udXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyX2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyX2luZm99PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlX3NlY3Rpb259PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVmdF9zaWRlfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmZ1bGxuYW1lfSBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntgJHtzdG9yYWdlLnVzZXJfYWNjb3VudERhdGE/LmZpcnN0TmFtZX0gJHtzdG9yYWdlLnVzZXJfYWNjb3VudERhdGE/Lmxhc3ROYW1lfWB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHRfc2lkZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5yYXRpbmd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17c3RvcmFnZS51c2VyX2FjY291bnREYXRhPy5yYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICcjZmFkYjE0JywgZm9udFNpemU6ICczMHB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5yYXRpbmdfdGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3N0b3JhZ2UudXNlcl9hY2NvdW50RGF0YT8ucmF0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBzaGFkb3cgcm91bmRlZC1tZCBwLTQgbWF4LXctc20gdy1mdWxsIG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWF0ZS1wdWxzZSBmbGV4IHNwYWNlLXgtNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBiZy1ncmF5LTQwMCBoLTEyIHctMTJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBzcGFjZS15LTQgcHktMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTQgYmctZ3JheS00MDAgcm91bmRlZCB3LTMvNFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTQgYmctZ3JheS00MDAgcm91bmRlZFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNCBiZy1ncmF5LTQwMCByb3VuZGVkIHctNS82XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlX3VzZXJfYnV0dG9ufT5cclxuICAgICAgICAgICAgICAgIHsvKiB7IXN0b3JhZ2UudXNlcl9hY2NvdW50RGF0YS5pc0ZyaWVuZD88QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPXtzdHlsZXMuZm9sbG93X2J1dHRvbn0gb25DbGljaz17KCkgPT4gZnJpZW5kKHN0b3JhZ2UudXNlcl9hY2NvdW50RGF0YS51c2VybmFtZSl9PlxyXG4gICAgICAgICAgICAgICAgICBBREQgRlJJRU5EXHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPjpcclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGNsYXNzTmFtZT17c3R5bGVzLmZvbGxvd19idXR0b259IGNsYXNzTmFtZT17c3R5bGVzLmZvbGxvd19idXR0b259IG9uQ2xpY2s9eygpID0+IHVuZnJpZW5kKHN0b3JhZ2UudXNlcl9hY2NvdW50RGF0YS51c2VybmFtZSl9PlxyXG4gICAgICAgICAgICAgICAgICBVTkZSSUVORFxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHshc3RvcmFnZS51c2VyX2FjY291bnREYXRhLmlzRm9sbG93P1xyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPXtzdHlsZXMuZm9sbG93X2J1dHRvbn0gb25DbGljaz17KCkgPT4gZm9sbG93KHN0b3JhZ2UudXNlcl9hY2NvdW50RGF0YS51c2VybmFtZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIEZPTExPV1xyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPXtzdHlsZXMuZm9sbG93X2J1dHRvbn0gb25DbGljaz17KCkgPT4gdW5mb2xsb3coc3RvcmFnZS51c2VyX2FjY291bnREYXRhLnVzZXJuYW1lKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgVU5GT0xMT1dcclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICB9ICovfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVfY29udGVudH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlX3RhYnN9PiBcclxuICAgICAgICAgICAgICAgIDxUYWJzIGRlZmF1bHRBY3RpdmVLZXk9XCIxXCI+XHJcbiAgICAgICAgICAgICAgICA8VGFiUGFuZVxyXG4gICAgICAgICAgICAgICAgICB0YWI9e1xyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRhYn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICBBQ1RJVklUWVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBrZXk9XCIxXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmFjdGl2aXR5X2xhYmVsfT5BQ1RJVklUWTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDxUaW1lbGluZVBvc3RzXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17c3RvcmFnZS5hY3Rpdml0eURhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgb25VcGRhdGVUaW1lbGluZT17KCkgPT4ge319XHJcbiAgICAgICAgICAgICAgICAgICAgb25SYXRlUG9zdD17cmF0ZVBvc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgbGlrZUFjdGlvbj17bGlrZUFjdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICBzaGFyZUFjdGlvbj17c2hhcmVBY3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlQWN0aW9uPXsoKSA9PiB7fX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlRGVsZXRlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9UYWJQYW5lPlxyXG4gICAgICAgICAgICAgICAgPFRhYlBhbmVcclxuICAgICAgICAgICAgICAgICAgdGFiPXtcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50YWJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgRlJJRU5EU1xyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBrZXk9XCIyXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcy5mcmllbmRzX2xpc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZXMuc2VjdGlvbnNfY29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB7c3RvcmFnZT8uZnJpZW5kc0RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mcmllbmR9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezgwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsPXtpdGVtPy5wcm9maWxlUGhvdG99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtpdGVtPy51c2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZyaWVuZF9uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBmb250U2l6ZTogMjAgfX0+e2l0ZW0uZmlyc3ROYW1lfSB7aXRlbS5sYXN0TmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2l0ZW0ucmF0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJyNmYWRiMTQnLCBmb250U2l6ZTogJzE1cHgnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiZGVmYXVsdFwiIHNoYXBlPVwicm91bmRcIiBzaXplPVwic21hbGxcIiBzdHlsZT17eyBtYXJnaW5MZWZ0OiA1IH19IG9uQ2xpY2s9eygpID0+IGZyaWVuZChpdGVtLnVzZXJuYW1lKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZyaWVuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1RhYlBhbmU+XHJcbiAgICAgICAgICAgICAgICA8VGFiUGFuZVxyXG4gICAgICAgICAgICAgICAgICB0YWI9e1xyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRhYn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICBQSE9UT1NcclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAga2V5PVwiM1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9TZWN0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICA8UGhvdG9TZWN0aW9uIHVzZXI9e3N0b3JhZ2UucGhvdG9zRGF0YX0gb25SYXRlUG9zdD17cmF0ZVBvc3R9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9UYWJQYW5lPlxyXG4gICAgICAgICAgICAgICAgPFRhYlBhbmVcclxuICAgICAgICAgICAgICAgICAgdGFiPXtcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50YWJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgUkFURURcclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAga2V5PVwiNFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxSYXRlZFNlY3Rpb24gdXNlcj17eyByZWNlbnRSYXRlZDogc3RvcmFnZS5yYXRlc0RhdGEgfX0gb25SYXRlUG9zdD17cmF0ZVBvc3R9IC8+XHJcbiAgICAgICAgICAgICAgICA8L1RhYlBhbmU+XHJcbiAgICAgICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgIHJlcXVpcmVBdXRoKFVzZXJQcm9maWxlKTsiXSwic291cmNlUm9vdCI6IiJ9