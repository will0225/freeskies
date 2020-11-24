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

        if (status === 204) {
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

  const accontRate = async value => {
    if (username !== '') {
      try {
        dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_18__["setLoading"])(true));
        const request = await Object(_configs_API__WEBPACK_IMPORTED_MODULE_5__["default"])({
          method: 'post',
          url: '/accounts/rate',
          data: {
            username: username,
            rating: value
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
          getAccount();
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

  const onUpdateTimeline = data => {
    storage.activityData.map(element => {
      if (element.id == data.id) {
        let addElement = _objectSpread({
          account: accountData
        }, data.comments[0]);

        element.comments.push(addElement);
        element.commentsCount += data.commentsCount;
        return element;
      }
    });
    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_18__["setActivityData"])(storage.activityData));
  };

  console.log(storage);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(components_header_Header__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 461,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.left,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462,
      columnNumber: 11
    }
  }, storage.user_accountData.length !== 0 ? __jsx("div", {
    className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.profile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 464,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 465,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.avatar_image,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 466,
      columnNumber: 17
    }
  }, __jsx(_components_common_Avatar__WEBPACK_IMPORTED_MODULE_11__["default"], {
    size: 140,
    url: "".concat((_storage$user_account = storage.user_accountData) === null || _storage$user_account === void 0 ? void 0 : (_storage$user_account2 = _storage$user_account.profilePhoto) === null || _storage$user_account2 === void 0 ? void 0 : _storage$user_account2.src),
    text: (_storage$user_account3 = storage.user_accountData) === null || _storage$user_account3 === void 0 ? void 0 : _storage$user_account3.username,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.user_content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 475,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.user_info,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 476,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.heade_section,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.left_side,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478,
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
      lineNumber: 479,
      columnNumber: 23
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480,
      columnNumber: 25
    }
  }, "".concat((_storage$user_account4 = storage.user_accountData) === null || _storage$user_account4 === void 0 ? void 0 : _storage$user_account4.firstName, " ").concat((_storage$user_account5 = storage.user_accountData) === null || _storage$user_account5 === void 0 ? void 0 : _storage$user_account5.lastName)))), __jsx("div", {
    className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.right_side,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 483,
      columnNumber: 21
    }
  }, __jsx("p", {
    className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.rating,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 484,
      columnNumber: 23
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Rate"], {
    defaultValue: (_storage$user_account6 = storage.user_accountData) === null || _storage$user_account6 === void 0 ? void 0 : _storage$user_account6.rating,
    style: {
      color: '#fadb14',
      fontSize: '30px'
    },
    onHoverChange: e => {
      if (typeof e !== 'undefined') {
        accontRate(e);
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 485,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.rating_text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 494,
      columnNumber: 25
    }
  }, (_storage$user_account7 = storage.user_accountData) === null || _storage$user_account7 === void 0 ? void 0 : _storage$user_account7.rating))))))) : __jsx("div", {
    className: "border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "animate-pulse flex space-x-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "rounded-full bg-gray-400 h-12 w-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506,
      columnNumber: 19
    }
  }), __jsx("div", {
    className: "flex-1 space-y-4 py-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "h-4 bg-gray-400 rounded w-3/4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508,
      columnNumber: 23
    }
  }), __jsx("div", {
    className: "space-y-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "h-4 bg-gray-400 rounded",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 510,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "h-4 bg-gray-400 rounded w-5/6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511,
      columnNumber: 25
    }
  }))))), __jsx("div", {
    className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.profile_user_button,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 517,
      columnNumber: 13
    }
  }, !storage.user_accountData.isFriend ? __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "primary",
    className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.follow_button,
    onClick: () => friend(storage.user_accountData.username),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 518,
      columnNumber: 53
    }
  }, "ADD FRIEND") : __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "primary",
    className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.follow_button,
    className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.follow_button,
    onClick: () => unfriend(storage.user_accountData.username),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521,
      columnNumber: 19
    }
  }, "UNFRIEND"), __jsx("div", {
    className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.profile_user_button_space,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525,
      columnNumber: 17
    }
  }), !storage.user_accountData.isFollow ? __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "primary",
    className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.follow_button,
    onClick: () => follow(storage.user_accountData.username),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 529,
      columnNumber: 19
    }
  }, "FOLLOW") : __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "primary",
    className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.follow_button,
    onClick: () => unfollow(storage.user_accountData.username),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 533,
      columnNumber: 19
    }
  }, "UNFOLLOW")), __jsx("div", {
    className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.profile_content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.profile_tabs,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Tabs"], {
    defaultActiveKey: "1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541,
      columnNumber: 17
    }
  }, __jsx(TabPane, {
    tab: __jsx("span", {
      className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.tab,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 544,
        columnNumber: 23
      }
    }, "ACTIVITY"),
    key: "1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 542,
      columnNumber: 19
    }
  }, __jsx("h2", {
    className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.activity_label,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550,
      columnNumber: 21
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
      lineNumber: 551,
      columnNumber: 21
    }
  })), __jsx(TabPane, {
    tab: __jsx("span", {
      className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.tab,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 563,
        columnNumber: 23
      }
    }, "FRIENDS"),
    key: "2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 561,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.friends_list, _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.sections_content),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 569,
      columnNumber: 21
    }
  }, storage === null || storage === void 0 ? void 0 : storage.friendsData.map((item, index) => {
    return __jsx("div", {
      className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.friend,
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 578,
        columnNumber: 27
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
        lineNumber: 579,
        columnNumber: 29
      }
    }), __jsx("div", {
      className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.friend_name,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 585,
        columnNumber: 29
      }
    }, __jsx("p", {
      style: {
        textAlign: 'left',
        fontSize: 20
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 586,
        columnNumber: 31
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
        lineNumber: 587,
        columnNumber: 31
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
        lineNumber: 591,
        columnNumber: 31
      }
    }, "Friend")));
  }))), __jsx(TabPane, {
    tab: __jsx("span", {
      className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.tab,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 603,
        columnNumber: 23
      }
    }, "PHOTOS"),
    key: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 601,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.photoSection,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 609,
      columnNumber: 21
    }
  }, __jsx(components_profile_PhotoSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
    user: storage.photosData,
    onRatePost: ratePost,
    otherUser: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 610,
      columnNumber: 23
    }
  }))), __jsx(TabPane, {
    tab: __jsx("span", {
      className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.tab,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 615,
        columnNumber: 21
      }
    }, "RATED"),
    key: "4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 613,
      columnNumber: 19
    }
  }, __jsx(components_profile_RatedSection__WEBPACK_IMPORTED_MODULE_9__["default"], {
    user: {
      recentRated: storage.ratesData
    },
    onRatePost: ratePost,
    otherUser: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 621,
      columnNumber: 19
    }
  })))), __jsx("div", {
    className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.mobile_profile_tabs,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 625,
      columnNumber: 15
    }
  }, __jsx("h2", {
    className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.activity_label,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 626,
      columnNumber: 19
    }
  }, "ACTIVITY"), __jsx(components_timeline_TimelinePosts__WEBPACK_IMPORTED_MODULE_20__["default"], {
    data: storage.activityData,
    onUpdateTimeline: onUpdateTimeline,
    onRatePost: ratePost,
    likeAction: likeAction,
    shareAction: shareAction,
    deleteAction: () => {},
    disableDelete: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 627,
      columnNumber: 19
    }
  }), __jsx("h2", {
    className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.activity_label,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 636,
      columnNumber: 19
    }
  }, "FRIENDS"), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.friends_list, _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.sections_content),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 637,
      columnNumber: 19
    }
  }, storage === null || storage === void 0 ? void 0 : storage.friendsData.map((item, index) => {
    return __jsx("div", {
      className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.friend,
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 646,
        columnNumber: 27
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
        lineNumber: 647,
        columnNumber: 29
      }
    }), __jsx("div", {
      className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.friend_name,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 653,
        columnNumber: 29
      }
    }, __jsx("p", {
      style: {
        textAlign: 'left',
        fontSize: 20
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 654,
        columnNumber: 31
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
        lineNumber: 655,
        columnNumber: 31
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
        lineNumber: 659,
        columnNumber: 31
      }
    }, "Friend")));
  })), __jsx("h2", {
    className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.activity_label,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 668,
      columnNumber: 19
    }
  }, "PHOTOS"), __jsx(components_profile_PhotoSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
    user: storage.photosData,
    onRatePost: ratePost,
    otherUser: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 669,
      columnNumber: 19
    }
  }), __jsx("h2", {
    className: _styles_userprofile_module_scss__WEBPACK_IMPORTED_MODULE_21___default.a.activity_label,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 670,
      columnNumber: 19
    }
  }, "RATES"), __jsx(components_profile_RatedSection__WEBPACK_IMPORTED_MODULE_9__["default"], {
    user: {
      recentRated: storage.ratesData
    },
    onRatePost: ratePost,
    otherUser: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 671,
      columnNumber: 19
    }
  }))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9Vc2VyUHJvZmlsZS9Vc2VyUHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJUYWJQYW5lIiwiVGFicyIsIlVzZXJQcm9maWxlIiwiYXV0aCIsImF1dGhTZXJ2aWNlcyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZXJuYW1lIiwicXVlcnkiLCJzdG9yYWdlIiwiZGlzcGF0Y2giLCJ1c2VDb250ZXh0IiwiVXNlclByb2ZpbGVDb250ZXh0IiwidXNlRWZmZWN0IiwiZ2V0QWNjb3VudCIsImdldEFjdGl2aXR5IiwiZ2V0RnJpZW5kcyIsImdldFBob3RvcyIsImdldFJhdGVzIiwicmVxdWVzdCIsIkFQSSIsIm1ldGhvZCIsInVybCIsImRhdGEiLCJoZWFkZXJzIiwidG9rZW4iLCJzdGF0dXMiLCJzZXRVc2VyUHJvZmlsZURhdGEiLCJyZWZyZXNoVG9rZW4iLCJtZXNzYWdlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiYWN0aXZpdHlEYXRhIiwibWFwIiwiZWxlbWVudCIsImZpbHRlckFjY291bnREYXRhIiwic2V0QWN0aXZpdHlEYXRhIiwic2V0RnJpZW5kc0RhdGEiLCJzZXRQaG90b3NEYXRhIiwic2V0UmF0ZXNEYXRhIiwiY29tbWVudF9zaGFyZWQiLCJ0eXBlIiwiY29tbWVudGVkIiwiY29tbWVudHMiLCJhY2NvdW50Iiwic2hhcmVkIiwicmF0ZVBvc3QiLCJwb3N0SWQiLCJyYXRlIiwiaWQiLCJyYXRpbmciLCJzZXRBY3Rpdml0eSIsImxpa2VBY3Rpb24iLCJ0ZXJtIiwicmVhY3RlZCIsInJlYWN0aW9uIiwic3VjY2VzcyIsIkVycm9yIiwic2hhcmVBY3Rpb24iLCJmcmllbmQiLCJ1bmZyaWVuZCIsInVuZm9sbG93Iiwic2V0TG9hZGluZyIsImZvbGxvdyIsImFjY29udFJhdGUiLCJ2YWx1ZSIsIm9uVXBkYXRlVGltZWxpbmUiLCJhZGRFbGVtZW50IiwiYWNjb3VudERhdGEiLCJwdXNoIiwiY29tbWVudHNDb3VudCIsInN0eWxlcyIsImNvbnRhaW5lciIsImxlZnQiLCJ1c2VyX2FjY291bnREYXRhIiwibGVuZ3RoIiwicHJvZmlsZSIsImF2YXRhciIsImF2YXRhcl9pbWFnZSIsInByb2ZpbGVQaG90byIsInNyYyIsInVzZXJfY29udGVudCIsInVzZXJfaW5mbyIsImhlYWRlX3NlY3Rpb24iLCJsZWZ0X3NpZGUiLCJmdWxsbmFtZSIsImN1cnNvciIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwicmlnaHRfc2lkZSIsImNvbG9yIiwiZm9udFNpemUiLCJlIiwicmF0aW5nX3RleHQiLCJwcm9maWxlX3VzZXJfYnV0dG9uIiwiaXNGcmllbmQiLCJmb2xsb3dfYnV0dG9uIiwicHJvZmlsZV91c2VyX2J1dHRvbl9zcGFjZSIsImlzRm9sbG93IiwicHJvZmlsZV9jb250ZW50IiwicHJvZmlsZV90YWJzIiwidGFiIiwiYWN0aXZpdHlfbGFiZWwiLCJjbGFzc25hbWVzIiwiZnJpZW5kc19saXN0Iiwic2VjdGlvbnNfY29udGVudCIsImZyaWVuZHNEYXRhIiwiaXRlbSIsImluZGV4IiwibWFyZ2luUmlnaHQiLCJmcmllbmRfbmFtZSIsInRleHRBbGlnbiIsIm1hcmdpbkxlZnQiLCJwaG90b1NlY3Rpb24iLCJwaG90b3NEYXRhIiwicmVjZW50UmF0ZWQiLCJyYXRlc0RhdGEiLCJtb2JpbGVfcHJvZmlsZV90YWJzIiwicmVxdWlyZUF1dGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQUVBO0FBQUYsSUFBY0MseUNBQXBCOztBQUNBLFNBQVNDLFdBQVQsQ0FBcUI7QUFBQ0MsTUFBRDtBQUFPQztBQUFQLENBQXJCLEVBQTJDO0FBQUE7O0FBQUE7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Q0FaSixFQTJDSTtBQUFJLGFBQVMsRUFBRWlFLHVFQUFNLENBQUMrQixjQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBM0NKLEVBNENJLE1BQUMsdUVBQUQ7QUFBYyxRQUFJLEVBQUU5RixPQUFPLENBQUMwRyxVQUE1QjtBQUF3QyxjQUFVLEVBQUVwRSxRQUFwRDtBQUE4RCxhQUFTLEVBQUUsSUFBekU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTVDSixFQTZDSTtBQUFJLGFBQVMsRUFBRXlCLHVFQUFNLENBQUMrQixjQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBN0NKLEVBOENJLE1BQUMsdUVBQUQ7QUFBYyxRQUFJLEVBQUU7QUFBRWEsaUJBQVcsRUFBRTNHLE9BQU8sQ0FBQzRHO0FBQXZCLEtBQXBCO0FBQXdELGNBQVUsRUFBRXRFLFFBQXBFO0FBQStFLGFBQVMsRUFBRSxJQUExRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBOUNKLENBdEZGLENBN0VGLENBREYsQ0FGRixDQURGO0FBNE5IOztHQTlvQlE3QyxXO1VBQ1VJLHNEOzs7S0FEVkosVztBQWdwQk0scUVBQUNxSCx3RUFBVyxDQUFDckgsV0FBRCxDQUEzQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlL1t1c2VybmFtZV0uYzg0ZWM3ZjlkNmFlZmNkZjcwMGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyBDYW1lcmFPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgQnV0dG9uLCBVcGxvYWQsIG1lc3NhZ2UsIElucHV0LCBUYWJzLCBSYXRlIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBBUEkgZnJvbSAnLi4vLi4vY29uZmlncy9BUEknO1xyXG5pbXBvcnQgUGhvdG9TZWN0aW9uIGZyb20gJ2NvbXBvbmVudHMvcHJvZmlsZS9QaG90b1NlY3Rpb24nO1xyXG5pbXBvcnQgRmVlZFBvc3RzIGZyb20gJ2NvbXBvbmVudHMvcHJvZmlsZS9GZWVkUG9zdHMnO1xyXG5pbXBvcnQgUG9zdGluZ1Bvc3QgZnJvbSAnY29tcG9uZW50cy9wcm9maWxlL1Bvc3RpbmdQb3N0JztcclxuaW1wb3J0IFJhdGVkU2VjdGlvbiBmcm9tICdjb21wb25lbnRzL3Byb2ZpbGUvUmF0ZWRTZWN0aW9uJztcclxuaW1wb3J0IHJlcXVpcmVBdXRoIGZyb20gJ2hlbHBlcnMvaG9jL3JlcXVpcmVBdXRoJztcclxuaW1wb3J0IEF2YXRhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9BdmF0YXInO1xyXG5pbXBvcnQgUmF0aW5nICBmcm9tICdyZWFjdC1yYXRpbmcnO1xyXG5pbXBvcnQgTW9kYWxXcmFwcGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9uL01vZGFsV3JhcHBlcic7XHJcbmltcG9ydCBQb3N0TW9kYWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wcm9maWxlL1Bvc3RNb2RhbCc7XHJcbmltcG9ydCB7IEF1ZGlvT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IEhlYWRlciBmcm9tICdjb21wb25lbnRzL2hlYWRlci9IZWFkZXInO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHNldFVzZXJQcm9maWxlRGF0YSwgc2V0TG9hZGluZywgc2V0QWN0aXZpdHlEYXRhLCBzZXRGcmllbmRzRGF0YSwgc2V0UGhvdG9zRGF0YSwgc2V0UmF0ZXNEYXRhICB9IGZyb20gJy4vYWN0aW9ucyc7XHJcbmltcG9ydCB7IFVzZXJQcm9maWxlQ29udGV4dCB9IGZyb20gJy4vc3RvcmFnZS9Vc2VyUHJvZmlsZUNvbnRleHQnO1xyXG5pbXBvcnQgVGltZWxpbmVQb3N0cyBmcm9tICdjb21wb25lbnRzL3RpbWVsaW5lL1RpbWVsaW5lUG9zdHMnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL3VzZXJwcm9maWxlLm1vZHVsZS5zY3NzJztcclxuY29uc3QgeyBUYWJQYW5lIH0gPSBUYWJzO1xyXG5mdW5jdGlvbiBVc2VyUHJvZmlsZSh7YXV0aCwgYXV0aFNlcnZpY2VzfSkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IHsgdXNlcm5hbWUgfSA9IHJvdXRlci5xdWVyeTtcclxuICAgIGNvbnN0IFsgc3RvcmFnZSwgZGlzcGF0Y2ggXSA9IHVzZUNvbnRleHQoVXNlclByb2ZpbGVDb250ZXh0KTtcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXRBY2NvdW50KCk7XHJcbiAgICAgICAgZ2V0QWN0aXZpdHkoKTtcclxuICAgICAgICBnZXRGcmllbmRzKCk7XHJcbiAgICAgICAgZ2V0UGhvdG9zKCk7XHJcbiAgICAgICAgZ2V0UmF0ZXMoKTtcclxuICAgIH0sIFtdKVxyXG4gICAgY29uc3QgZ2V0QWNjb3VudCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0ICAgICBBUEkoe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgICAgdXJsOiAnL2FjY291bnRzL2dldC1hY2NvdW50JyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgXCJ1c2VybmFtZVwiOiB1c2VybmFtZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuICAgICAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChzZXRVc2VyUHJvZmlsZURhdGEoZGF0YSkpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IDQwMykge1xyXG4gICAgICAgICAgICBhdXRoU2VydmljZXMucmVmcmVzaFRva2VuKCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXRBY3Rpdml0eSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgIEFQSSh7XHJcbiAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgIHVybDogJy9hY2NvdW50cy9nZXQtYWNjb3VudC1hY3Rpdml0eScsXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgXCJ1c2VybmFtZVwiOiB1c2VybmFtZVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICB2YXIgYWN0aXZpdHlEYXRhID0gZGF0YS5tYXAoZWxlbWVudCA9PiB7IFxyXG4gICAgICAgICAgICBlbGVtZW50ID0gZmlsdGVyQWNjb3VudERhdGEoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIGRpc3BhdGNoKHNldEFjdGl2aXR5RGF0YShhY3Rpdml0eURhdGEpKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gNDAzKSB7XHJcbiAgICAgICAgICBhdXRoU2VydmljZXMucmVmcmVzaFRva2VuKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldEZyaWVuZHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0ICBBUEkoe1xyXG4gICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICB1cmw6ICcvYWNjb3VudHMvZ2V0LWFjY291bnQtZnJpZW5kcycsXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgXCJ1c2VybmFtZVwiOiB1c2VybmFtZSxcclxuICAgICAgICAgICAgICBcIm9mZnNldFwiOiAwLFxyXG4gICAgICAgICAgICAgIFwiZmlyc3RcIjogMTBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG4gICAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgZGlzcGF0Y2goc2V0RnJpZW5kc0RhdGEoZGF0YSkpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSA0MDMpIHtcclxuICAgICAgICAgIGF1dGhTZXJ2aWNlcy5yZWZyZXNoVG9rZW4oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0UGhvdG9zID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCAgQVBJKHtcclxuICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgICAgdXJsOiAnL2FjY291bnRzL2dldC1hY2NvdW50LXBob3RvcycsXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgXCJ1c2VybmFtZVwiOiB1c2VybmFtZSxcclxuICAgICAgICAgICAgICBcIm9mZnNldFwiOiAwLFxyXG4gICAgICAgICAgICAgIFwiZmlyc3RcIjogMTBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG4gICAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgZGlzcGF0Y2goc2V0UGhvdG9zRGF0YShkYXRhKSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IDQwMykge1xyXG4gICAgICAgICAgYXV0aFNlcnZpY2VzLnJlZnJlc2hUb2tlbigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRSYXRlcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgIEFQSSh7XHJcbiAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgIHVybDogJy9hY2NvdW50cy9nZXQtYWNjb3VudC1yYXRlZCcsXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgXCJ1c2VybmFtZVwiOiB1c2VybmFtZSxcclxuICAgICAgICAgICAgICBcIm9mZnNldFwiOiAwLFxyXG4gICAgICAgICAgICAgIFwiZmlyc3RcIjogMTBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG4gICAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgZGlzcGF0Y2goc2V0UmF0ZXNEYXRhKGRhdGEpKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gNDAzKSB7XHJcbiAgICAgICAgICBhdXRoU2VydmljZXMucmVmcmVzaFRva2VuKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZpbHRlckFjY291bnREYXRhID0gKGNvbW1lbnRfc2hhcmVkKSA9PiB7XHJcbiAgICAgIGlmKGNvbW1lbnRfc2hhcmVkLnR5cGUgPT09ICdDb21tZW50Jykge1xyXG4gICAgICAgIGlmKGNvbW1lbnRfc2hhcmVkLmNvbW1lbnRlZC50eXBlID09ICdQb3N0Jykge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uY29tbWVudF9zaGFyZWQuY29tbWVudGVkLFxyXG4gICAgICAgICAgICBjb21tZW50czogW3suLi5jb21tZW50X3NoYXJlZCwgYWNjb3VudDogY29tbWVudF9zaGFyZWQuYWNjb3VudH1dXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChjb21tZW50X3NoYXJlZC5jb21tZW50ZWQudHlwZSA9PSAnQ29tbWVudCcpIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLmNvbW1lbnRfc2hhcmVkLmNvbW1lbnRlZC5jb21tZW50ZWQsXHJcbiAgICAgICAgICAgIGNvbW1lbnRzOiBbey4uLmNvbW1lbnRfc2hhcmVkLmNvbW1lbnRlZCwgY29tbWVudHM6IFtjb21tZW50X3NoYXJlZF19XVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZihjb21tZW50X3NoYXJlZC5jb21tZW50ZWQudHlwZSA9PSAnU2hhcmUnKSB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5jb21tZW50X3NoYXJlZC5jb21tZW50ZWQuc2hhcmVkLFxyXG4gICAgICAgICAgICBjb21tZW50czogW3sgLi4uY29tbWVudF9zaGFyZWQsIGFjY291bnQ6IGNvbW1lbnRfc2hhcmVkLmFjY291bnQgfV1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uY29tbWVudF9zaGFyZWQuY29tbWVudGVkLFxyXG4gICAgICAgICAgICBjb21tZW50czogW3sgLi4uY29tbWVudF9zaGFyZWQsIGFjY291bnQ6IGNvbW1lbnRfc2hhcmVkLmFjY291bnQgfV1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZihjb21tZW50X3NoYXJlZC50eXBlID09PSAnUG9zdCcpIHtcclxuICAgICAgICAgIHJldHVybiBjb21tZW50X3NoYXJlZDtcclxuICAgICAgfSBlbHNlIGlmKGNvbW1lbnRfc2hhcmVkLnR5cGUgPT09ICdTaGFyZScpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uY29tbWVudF9zaGFyZWQuc2hhcmVkLFxyXG4gICAgICAgICAgY29tbWVudHM6IFt7Li4uY29tbWVudF9zaGFyZWQsIGFjY291bnQ6IGNvbW1lbnRfc2hhcmVkLmFjY291bnQgfV1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbW1lbnRfc2hhcmVkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmF0ZVBvc3QgPSBhc3luYyAodHlwZSwgcG9zdElkLCByYXRlKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgIGxldCB1cmwgPSAnJztcclxuICBcclxuICAgICAgICBpZiAodHlwZSA9PT0gJ1Bob3RvJykge1xyXG4gICAgICAgICAgdXJsID0gJy9waG90b3MvcmF0ZSc7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnVmlkZW9DbGlwJykge1xyXG4gICAgICAgICAgdXJsID0gJy92aWRlby1jbGlwcy9yYXRlJztcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdJdGVtJykge1xyXG4gICAgICAgICAgdXJsID0gJy9pdGVtcy9yYXRlJztcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdQb3N0Jykge1xyXG4gICAgICAgICAgdXJsID0gJy9wb3N0cy9yYXRlJztcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdDb21tZW50Jykge1xyXG4gICAgICAgICAgdXJsID0gJy9jb21tZW50cy9yYXRlJztcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgIHVybCxcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgaWQ6IHBvc3RJZCxcclxuICAgICAgICAgICAgcmF0aW5nOiByYXRlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcbiAgXHJcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgICBzdG9yYWdlLmFjdGl2aXR5RGF0YS5tYXAoZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmKGVsZW1lbnQuaWQgPT09IHBvc3RJZCAmJiBlbGVtZW50LnR5cGUgPT09IHR5cGUpIHtcclxuICAgICAgICAgICAgICBlbGVtZW50LnJhdGluZyA9IHJhdGU7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBkaXNwYXRjaChzZXRBY3Rpdml0eShzdG9yYWdlLmFjdGl2aXR5RGF0YSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlcXVlc3Q7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGxpa2VBY3Rpb24gPSBhc3luYyAodHlwZSwgaWQsIHRlcm0pID0+IHtcclxuICAgICAgdmFyIHVybCA9ICcnO1xyXG4gICAgICBpZiAodHlwZSA9PT0gJ1Bob3RvJykge1xyXG4gICAgICAgIHVybCA9ICcvcGhvdG9zL3JlYWN0JztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnVmlkZW9DbGlwJykge1xyXG4gICAgICAgIHVybCA9ICcvdmlkZW8tY2xpcHMvcmVhY3QnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdJdGVtJykge1xyXG4gICAgICAgIHVybCA9ICcvaXRlbXMvcmVhY3QnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdQb3N0Jykge1xyXG4gICAgICAgIHVybCA9ICcvcG9zdHMvcmVhY3QnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdDb21tZW50Jykge1xyXG4gICAgICAgIHVybCA9ICcvY29tbWVudHMvcmVhY3QnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdTaGFyZScpIHtcclxuICAgICAgICB1cmwgPSAnL3NoYXJlcy9yZWFjdCc7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIHJlYWN0ZWQ6IGlkLFxyXG4gICAgICAgICAgICByZWFjdGlvbjogdGVybVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcbiAgXHJcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoJ0FkZGVkIHN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfVxyXG4gIFxyXG4gIH1cclxuICBcclxuICAgIGNvbnN0IHNoYXJlQWN0aW9uID0gYXN5bmMgKHR5cGUsIGlkKSA9PiB7XHJcbiAgXHJcbiAgICAgIHZhciB1cmwgPSAnJztcclxuICAgICAgICBpZiAodHlwZSA9PT0gJ1Bob3RvJykge1xyXG4gICAgICAgICAgdXJsID0gJy9waG90b3Mvc2hhcmUnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1ZpZGVvQ2xpcCcpIHtcclxuICAgICAgICAgIHVybCA9ICcvdmlkZW8tY2xpcHMvc2hhcmUnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0l0ZW0nKSB7XHJcbiAgICAgICAgICB1cmwgPSAnL2l0ZW1zL3NoYXJlJztcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdQb3N0Jykge1xyXG4gICAgICAgICAgdXJsID0gJy9wb3N0cy9zaGFyZSc7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnQ29tbWVudCcpIHtcclxuICAgICAgICAgIHVybCA9ICcvY29tbWVudHMvc2hhcmUnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1NoYXJlJykge1xyXG4gICAgICAgICAgdXJsID0gJy9wb3N0cy9zaGFyZSc7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gIFxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgc2hhcmVkOiBpZCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG4gIFxyXG4gICAgICAgIGlmIChzdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKCdTaGFyZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZnJpZW5kID0gYXN5bmMgKHVzZXJuYW1lKSA9PiB7XHJcbiAgICAgIGlmKHVzZXJuYW1lICE9PSAnJykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICAgIHVybDogJy9hY2NvdW50cy9mcmllbmRzaGlwJyxcclxuICAgICAgICAgICAgZGF0YTogeyB1c2VybmFtZTogdXNlcm5hbWUgfSxcclxuICAgICAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcbiAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDQpIHtcclxuICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKCdBZGRlZCBGcmllbmQgc3VjY2Vzc2Z1bGx5JylcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gYXdhaXQgcmVxdWVzdDtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdW5mcmllbmQgPSBhc3luYyAodXNlcm5hbWUpID0+IHtcclxuICAgICAgaWYodXNlcm5hbWUgIT09ICcnKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdkZWxldGUnLFxyXG4gICAgICAgICAgICB1cmw6ICcvYWNjb3VudHMvZnJpZW5kc2hpcCcsXHJcbiAgICAgICAgICAgIGRhdGE6IHsgdXNlcm5hbWU6IHVzZXJuYW1lIH0sXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG4gICAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcygnRGVsZXRlZCBGcmllbmQgc3VjY2Vzc2Z1bGx5JylcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gYXdhaXQgcmVxdWVzdDtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdW5mb2xsb3cgPSBhc3luYyAodXNlcm5hbWUpID0+IHtcclxuICAgICAgaWYodXNlcm5hbWUgIT09ICcnKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdkZWxldGUnLFxyXG4gICAgICAgICAgICB1cmw6ICcvYWNjb3VudHMvZm9sbG93c2hpcCcsXHJcbiAgICAgICAgICAgIGRhdGE6IHsgdXNlcm5hbWU6IHVzZXJuYW1lIH0sXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O21lc3NhZ2Uuc3VjY2VzcygnVW5mb2xsb3dlZCBzdWNjZXNzZnVsbHkhJyk7cmV0dXJuO1xyXG4gICAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoJ1VuZm9sbG93ZWQgc3VjY2Vzc2Z1bGx5IScpXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpO1xyXG4gICAgICAgICAgcmV0dXJuIGF3YWl0IHJlcXVlc3Q7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmb2xsb3cgPSBhc3luYyAodXNlcm5hbWUpID0+IHtcclxuICAgICAgaWYodXNlcm5hbWUgIT09ICcnKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcodHJ1ZSkpO1xyXG4gICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgICAgICB1cmw6ICcvYWNjb3VudHMvZm9sbG93c2hpcCcsXHJcbiAgICAgICAgICAgIGRhdGE6IHsgdXNlcm5hbWU6IHVzZXJuYW1lIH0sXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O21lc3NhZ2Uuc3VjY2VzcygnRm9sbG93ZWQgc3VjY2Vzc2Z1bGx5IScpO3JldHVybjtcclxuICAgICAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKCdVbmZvbGxvd2VkIHN1Y2Nlc3NmdWxseSEnKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKTtcclxuICAgICAgICAgIHJldHVybiBhd2FpdCByZXF1ZXN0O1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGFjY29udFJhdGUgID0gYXN5bmMgKHZhbHVlKSA9PiB7XHJcbiAgICAgIGlmKHVzZXJuYW1lICE9PSAnJykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKHRydWUpKTtcclxuICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgICAgdXJsOiAnL2FjY291bnRzL3JhdGUnLFxyXG4gICAgICAgICAgICBkYXRhOiB7IHVzZXJuYW1lOiB1c2VybmFtZSwgcmF0aW5nOiB2YWx1ZSB9LFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuICAgICAgICAgIGlmIChzdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgICAgICBnZXRBY2NvdW50KCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpO1xyXG4gICAgICAgICAgcmV0dXJuIGF3YWl0IHJlcXVlc3Q7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3Qgb25VcGRhdGVUaW1lbGluZSA9IChkYXRhKSA9PiB7XHJcbiAgICAgIHN0b3JhZ2UuYWN0aXZpdHlEYXRhLm1hcChlbGVtZW50ID0+IHtcclxuICAgICAgICBpZihlbGVtZW50LmlkID09IGRhdGEuaWQpIHtcclxuICAgICAgICAgIGxldCBhZGRFbGVtZW50ID0ge1xyXG4gICAgICAgICAgICBhY2NvdW50OiBhY2NvdW50RGF0YSwgXHJcbiAgICAgICAgICAgIC4uLmRhdGEuY29tbWVudHNbMF1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsZW1lbnQuY29tbWVudHMucHVzaChhZGRFbGVtZW50KTtcclxuICAgICAgICAgIGVsZW1lbnQuY29tbWVudHNDb3VudCArPSBkYXRhLmNvbW1lbnRzQ291bnQ7XHJcbiAgICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgXHJcbiAgICAgIGRpc3BhdGNoKHNldEFjdGl2aXR5RGF0YShzdG9yYWdlLmFjdGl2aXR5RGF0YSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHN0b3JhZ2UpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0fT5cclxuICAgICAgICAgICAge3N0b3JhZ2UudXNlcl9hY2NvdW50RGF0YS5sZW5ndGggIT09IDA/XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJfaW1hZ2V9ID5cclxuICAgICAgICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MTQwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdXJsPXtgJHtzdG9yYWdlLnVzZXJfYWNjb3VudERhdGE/LnByb2ZpbGVQaG90bz8uc3JjfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtzdG9yYWdlLnVzZXJfYWNjb3VudERhdGE/LnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcl9jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcl9pbmZvfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZV9zZWN0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnRfc2lkZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5mdWxsbmFtZX0gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57YCR7c3RvcmFnZS51c2VyX2FjY291bnREYXRhPy5maXJzdE5hbWV9ICR7c3RvcmFnZS51c2VyX2FjY291bnREYXRhPy5sYXN0TmFtZX1gfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0X3NpZGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucmF0aW5nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3N0b3JhZ2UudXNlcl9hY2NvdW50RGF0YT8ucmF0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnI2ZhZGIxNCcsIGZvbnRTaXplOiAnMzBweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkhvdmVyQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodHlwZW9mIGUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY29udFJhdGUoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucmF0aW5nX3RleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtzdG9yYWdlLnVzZXJfYWNjb3VudERhdGE/LnJhdGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItZ3JheS0zMDAgc2hhZG93IHJvdW5kZWQtbWQgcC00IG1heC13LXNtIHctZnVsbCBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGUtcHVsc2UgZmxleCBzcGFjZS14LTRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgYmctZ3JheS00MDAgaC0xMiB3LTEyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgc3BhY2UteS00IHB5LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC00IGJnLWdyYXktNDAwIHJvdW5kZWQgdy0zLzRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC00IGJnLWdyYXktNDAwIHJvdW5kZWRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTQgYmctZ3JheS00MDAgcm91bmRlZCB3LTUvNlwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZV91c2VyX2J1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICB7IXN0b3JhZ2UudXNlcl9hY2NvdW50RGF0YS5pc0ZyaWVuZD88QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPXtzdHlsZXMuZm9sbG93X2J1dHRvbn0gb25DbGljaz17KCkgPT4gZnJpZW5kKHN0b3JhZ2UudXNlcl9hY2NvdW50RGF0YS51c2VybmFtZSl9PlxyXG4gICAgICAgICAgICAgICAgICBBREQgRlJJRU5EXHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPjpcclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGNsYXNzTmFtZT17c3R5bGVzLmZvbGxvd19idXR0b259IGNsYXNzTmFtZT17c3R5bGVzLmZvbGxvd19idXR0b259IG9uQ2xpY2s9eygpID0+IHVuZnJpZW5kKHN0b3JhZ2UudXNlcl9hY2NvdW50RGF0YS51c2VybmFtZSl9PlxyXG4gICAgICAgICAgICAgICAgICBVTkZSSUVORFxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZV91c2VyX2J1dHRvbl9zcGFjZX0+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7IXN0b3JhZ2UudXNlcl9hY2NvdW50RGF0YS5pc0ZvbGxvdz9cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGNsYXNzTmFtZT17c3R5bGVzLmZvbGxvd19idXR0b259IG9uQ2xpY2s9eygpID0+IGZvbGxvdyhzdG9yYWdlLnVzZXJfYWNjb3VudERhdGEudXNlcm5hbWUpfT5cclxuICAgICAgICAgICAgICAgICAgICBGT0xMT1dcclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGNsYXNzTmFtZT17c3R5bGVzLmZvbGxvd19idXR0b259IG9uQ2xpY2s9eygpID0+IHVuZm9sbG93KHN0b3JhZ2UudXNlcl9hY2NvdW50RGF0YS51c2VybmFtZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIFVORk9MTE9XXHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVfY29udGVudH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlX3RhYnN9PiBcclxuICAgICAgICAgICAgICAgIDxUYWJzIGRlZmF1bHRBY3RpdmVLZXk9XCIxXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxUYWJQYW5lXHJcbiAgICAgICAgICAgICAgICAgICAgdGFiPXtcclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRhYn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFDVElWSVRZXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmFjdGl2aXR5X2xhYmVsfT5BQ1RJVklUWTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRpbWVsaW5lUG9zdHNcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e3N0b3JhZ2UuYWN0aXZpdHlEYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25VcGRhdGVUaW1lbGluZT17KCkgPT4ge319XHJcbiAgICAgICAgICAgICAgICAgICAgICBvblJhdGVQb3N0PXtyYXRlUG9zdH1cclxuICAgICAgICAgICAgICAgICAgICAgIGxpa2VBY3Rpb249e2xpa2VBY3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICBzaGFyZUFjdGlvbj17c2hhcmVBY3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICBkZWxldGVBY3Rpb249eygpID0+IHt9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZURlbGV0ZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L1RhYlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgIDxUYWJQYW5lXHJcbiAgICAgICAgICAgICAgICAgICAgdGFiPXtcclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRhYn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEZSSUVORFNcclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAga2V5PVwiMlwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcy5mcmllbmRzX2xpc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcy5zZWN0aW9uc19jb250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAge3N0b3JhZ2U/LmZyaWVuZHNEYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZyaWVuZH0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezgwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw9e2l0ZW0/LnByb2ZpbGVQaG90b31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17aXRlbT8udXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mcmllbmRfbmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBmb250U2l6ZTogMjAgfX0+e2l0ZW0uZmlyc3ROYW1lfSB7aXRlbS5sYXN0TmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtpdGVtLnJhdGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJyNmYWRiMTQnLCBmb250U2l6ZTogJzE1cHgnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cImRlZmF1bHRcIiBzaGFwZT1cInJvdW5kXCIgc2l6ZT1cInNtYWxsXCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogNSB9fSBvbkNsaWNrPXsoKSA9PiBmcmllbmQoaXRlbS51c2VybmFtZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZyaWVuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lPlxyXG4gICAgICAgICAgICAgICAgICA8VGFiUGFuZVxyXG4gICAgICAgICAgICAgICAgICAgIHRhYj17XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50YWJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQSE9UT1NcclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAga2V5PVwiM1wiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBob3RvU2VjdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8UGhvdG9TZWN0aW9uIHVzZXI9e3N0b3JhZ2UucGhvdG9zRGF0YX0gb25SYXRlUG9zdD17cmF0ZVBvc3R9IG90aGVyVXNlcj17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lPlxyXG4gICAgICAgICAgICAgICAgICA8VGFiUGFuZVxyXG4gICAgICAgICAgICAgICAgICB0YWI9e1xyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRhYn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICBSQVRFRFxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBrZXk9XCI0XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPFJhdGVkU2VjdGlvbiB1c2VyPXt7IHJlY2VudFJhdGVkOiBzdG9yYWdlLnJhdGVzRGF0YSB9fSBvblJhdGVQb3N0PXtyYXRlUG9zdH0gb3RoZXJVc2VyPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9UYWJQYW5lPlxyXG4gICAgICAgICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9iaWxlX3Byb2ZpbGVfdGFic30+XHJcbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpdml0eV9sYWJlbH0+QUNUSVZJVFk8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8VGltZWxpbmVQb3N0c1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e3N0b3JhZ2UuYWN0aXZpdHlEYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uVXBkYXRlVGltZWxpbmU9e29uVXBkYXRlVGltZWxpbmV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25SYXRlUG9zdD17cmF0ZVBvc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgbGlrZUFjdGlvbj17bGlrZUFjdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICBzaGFyZUFjdGlvbj17c2hhcmVBY3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlQWN0aW9uPXsoKSA9PiB7fX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlRGVsZXRlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aXZpdHlfbGFiZWx9PkZSSUVORFM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcy5mcmllbmRzX2xpc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcy5zZWN0aW9uc19jb250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAge3N0b3JhZ2U/LmZyaWVuZHNEYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZyaWVuZH0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezgwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw9e2l0ZW0/LnByb2ZpbGVQaG90b31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17aXRlbT8udXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mcmllbmRfbmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBmb250U2l6ZTogMjAgfX0+e2l0ZW0uZmlyc3ROYW1lfSB7aXRlbS5sYXN0TmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtpdGVtLnJhdGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJyNmYWRiMTQnLCBmb250U2l6ZTogJzE1cHgnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cImRlZmF1bHRcIiBzaGFwZT1cInJvdW5kXCIgc2l6ZT1cInNtYWxsXCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogNSB9fSBvbkNsaWNrPXsoKSA9PiBmcmllbmQoaXRlbS51c2VybmFtZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZyaWVuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmFjdGl2aXR5X2xhYmVsfT5QSE9UT1M8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8UGhvdG9TZWN0aW9uIHVzZXI9e3N0b3JhZ2UucGhvdG9zRGF0YX0gb25SYXRlUG9zdD17cmF0ZVBvc3R9IG90aGVyVXNlcj17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmFjdGl2aXR5X2xhYmVsfT5SQVRFUzwvaDI+ICAgIFxyXG4gICAgICAgICAgICAgICAgICA8UmF0ZWRTZWN0aW9uIHVzZXI9e3sgcmVjZW50UmF0ZWQ6IHN0b3JhZ2UucmF0ZXNEYXRhIH19IG9uUmF0ZVBvc3Q9e3JhdGVQb3N0fSAgb3RoZXJVc2VyPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgIHJlcXVpcmVBdXRoKFVzZXJQcm9maWxlKTsiXSwic291cmNlUm9vdCI6IiJ9