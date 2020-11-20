webpackHotUpdate_N_E("pages/profile",{

/***/ "./containers/Profile/Profile.js":
/*!***************************************!*\
  !*** ./containers/Profile/Profile.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/profile.module.scss */ "./containers/Profile/styles/profile.module.scss");
/* harmony import */ var _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _configs_API__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../configs/API */ "./configs/API.js");
/* harmony import */ var components_profile_PhotoSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/profile/PhotoSection */ "./components/profile/PhotoSection.js");
/* harmony import */ var components_profile_FeedPosts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/profile/FeedPosts */ "./components/profile/FeedPosts.js");
/* harmony import */ var components_profile_PostingPost__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/profile/PostingPost */ "./components/profile/PostingPost.js");
/* harmony import */ var components_profile_RatedSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/profile/RatedSection */ "./components/profile/RatedSection.js");
/* harmony import */ var helpers_hoc_requireAuth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! helpers/hoc/requireAuth */ "./helpers/hoc/requireAuth.js");
/* harmony import */ var _storage_ProfileContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./storage/ProfileContext */ "./containers/Profile/storage/ProfileContext.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./actions */ "./containers/Profile/actions/index.js");
/* harmony import */ var _components_common_Avatar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/common/Avatar */ "./components/common/Avatar.js");
/* harmony import */ var react_rating__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-rating */ "./node_modules/react-rating/lib/react-rating.esm.js");
/* harmony import */ var _components_common_ModalWrapper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/common/ModalWrapper */ "./components/common/ModalWrapper.js");
/* harmony import */ var _components_profile_PostModal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/profile/PostModal */ "./components/profile/PostModal.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./edit */ "./containers/Profile/edit.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var components_header_Header__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! components/header/Header */ "./components/header/Header.js");
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! date-fns/locale */ "./node_modules/date-fns/esm/locale/index.js");


var _jsxFileName = "E:\\freeskies_fe_code\\containers\\Profile\\Profile.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }























const {
  Search
} = antd__WEBPACK_IMPORTED_MODULE_5__["Input"];

const suffix = __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["AudioOutlined"], {
  style: {
    fontSize: 16,
    color: '#1890ff'
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 3
  }
});

const onSearch = value => console.log(value);

function Profile({
  authServices,
  auth
}) {
  _s();

  var _accountData$profileB, _accountData$profileP;

  const {
    0: fileList,
    1: setFileList
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: storage,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_storage_ProfileContext__WEBPACK_IMPORTED_MODULE_12__["ProfileContext"]);
  const {
    0: tab,
    1: setTab
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1);
  const {
    0: postModal,
    1: setPostModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: editProfileModal,
    1: setEditProfileModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: photos,
    1: setPhotos
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: rates,
    1: setRates
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: topRated,
    1: setTopRated
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: mobile_profile_header,
    1: setMobileProfileHeader
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const getFriends = async (token, withoutLoading = false) => {
    try {
      if (!withoutLoading) dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_13__["setLoading"])(true));
      const request = await Object(_configs_API__WEBPACK_IMPORTED_MODULE_6__["default"])({
        method: 'post',
        url: '/accounts/timeline',
        headers: {
          'x-token': auth.token
        }
      });
      const {
        data,
        status
      } = request;

      if (status === 200) {
        dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_13__["setFriendsData"])(data));
      } else if (status === 403) {
        authServices.refreshToken(getFriends);
      } else {
        antd__WEBPACK_IMPORTED_MODULE_5__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
      }

      if (!withoutLoading) dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_13__["setLoading"])(false));
    } catch (error) {
      console.log(error);
      if (!withoutLoading) dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_13__["setLoading"])(false));
    }
  };

  const getAccount = async (token, withoutLoading = false) => {
    try {
      if (!withoutLoading) dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_13__["setLoading"])(true));
      const request = await Object(_configs_API__WEBPACK_IMPORTED_MODULE_6__["default"])({
        method: 'get',
        url: '/accounts',
        headers: {
          'x-token': auth.token
        }
      });
      const {
        data,
        status
      } = request;

      if (status === 200) {
        console.log(data);
        data.activity = data.activity.map(element => {
          element = filterAccountData(element);
          return element;
        });
        dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_13__["setAccountsData"])(data));
      } else if (status === 403) {
        authServices.refreshToken(getFriends);
      } else {
        antd__WEBPACK_IMPORTED_MODULE_5__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
      }

      if (!withoutLoading) dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_13__["setLoading"])(false));
    } catch (error) {
      console.log(error);
      if (!withoutLoading) dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_13__["setLoading"])(false));
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

  const getPhotos = async () => {
    try {
      const request = await Object(_configs_API__WEBPACK_IMPORTED_MODULE_6__["default"])({
        method: 'post',
        url: '/accounts/photos',
        data: {
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
        setPhotos(data);
      } else if (status === 403) {
        authServices.refreshToken(getPhotos);
      } else {}
    } catch (error) {
      console.log(error);
    }
  };

  const getRates = async () => {
    try {
      const request = await Object(_configs_API__WEBPACK_IMPORTED_MODULE_6__["default"])({
        method: 'post',
        url: '/accounts/rated',
        data: {
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
        setRates(data);
      } else if (status === 403) {
        authServices.refreshToken(getRates);
      } else {}
    } catch (error) {
      console.log(error);
    }
  };

  const getTrending = async () => {
    try {
      const request = await Object(_configs_API__WEBPACK_IMPORTED_MODULE_6__["default"])({
        method: 'post',
        url: '/accounts/trending',
        data: {
          "offset": 0,
          "first": 3
        },
        headers: {
          'x-token': auth.token
        }
      });
      const {
        data,
        status
      } = request;

      if (status == 200) {
        dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_13__["setTrendingData"])(data));
      } else if (status == 403) {
        authServices.refreshToken(getTrending);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getTopRated = async () => {
    try {
      const request = await Object(_configs_API__WEBPACK_IMPORTED_MODULE_6__["default"])({
        method: 'post',
        url: '/accounts/top-rated',
        data: {
          "offset": 0,
          "first": 130
        },
        headers: {
          'x-token': auth.token
        }
      });
      const {
        data,
        status
      } = request;
      setTopRated(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAction = async (id, type = "Post") => {
    var url = '';

    if (type === 'Photo') {
      url = '/photos';
    } else if (type === 'VideoClip') {
      url = '/video-clips';
    } else if (type === 'Item') {
      url = '/items';
    } else if (type === 'Post') {
      url = '/posts';
    } else if (type === 'Comment') {
      url = '/comments';
    } else if (type === 'Share') {
      url = '/posts';
    }

    try {
      const request = await Object(_configs_API__WEBPACK_IMPORTED_MODULE_6__["default"])({
        method: 'delete',
        url: url,
        data: {
          "id": id
        },
        headers: {
          'x-token': auth.token
        }
      });
      const {
        data,
        status
      } = request;

      if (status !== 400) {
        var newActivity = accountData.activity.filter(item => {
          return item.id !== id;
        });
        dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_13__["setAccountsData"])(_objectSpread(_objectSpread({}, accountData), {}, {
          activity: newActivity
        })));
        antd__WEBPACK_IMPORTED_MODULE_5__["message"].success('Deleted successfully!');
      } else {
        antd__WEBPACK_IMPORTED_MODULE_5__["message"].error('This post deleting does not allowed!');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const createPost = async dataForRequest => {
    try {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_13__["setLoading"])(true, 'posting'));
      const request = await Object(_configs_API__WEBPACK_IMPORTED_MODULE_6__["default"])({
        method: 'post',
        url: '/posts',
        data: dataForRequest,
        headers: {
          'x-token': auth.token
        }
      });
      const {
        data,
        status
      } = request;

      if (status === 201) {
        setPostModal(0);

        var element = _objectSpread(_objectSpread({
          type: 'Post'
        }, data), {}, {
          comments: [],
          commentsCount: 0,
          rating: null,
          reactions: [],
          reactionsCount: 0,
          shares: [],
          sharesCount: 0
        });

        accountData.activity = [element, ...accountData.activity];
        dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_13__["setAccountsData"])(accountData));
      } else {
        antd__WEBPACK_IMPORTED_MODULE_5__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
      }

      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_13__["setLoading"])(false, 'posting'));
      return await request;
    } catch (error) {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_13__["setLoading"])(false, 'posting'));
    }
  };

  const ratePost = async (type, postId, rate) => {
    try {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_13__["setLoading"])(true, 'posting'));
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
      } else if (type === 'Share') {
        url = '/shares/rate';
      }

      const request = await Object(_configs_API__WEBPACK_IMPORTED_MODULE_6__["default"])({
        method: 'post',
        url,
        data: {
          rated: postId,
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
        // getAccount();
        // message.success('Evaluate successfully');
        accountData.activity.map(element => {
          if (element.id === postId && element.type === type) {
            element.rating = rate;
            return element;
          }
        });
        dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_13__["setAccountsData"])(accountData));
      } else {// message.error(data?.message || 'Something wrong');
      }

      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_13__["setLoading"])(false, 'posting'));
      return await request;
    } catch (error) {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_13__["setLoading"])(false, 'posting'));
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    // getFriends(auth.token);
    getAccount(auth.token);
    getTrending();
    getPhotos();
    getRates();
    getTopRated();
    window.addEventListener('scroll', _.throttle(() => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > 100) {
        setMobileProfileHeader(true);
      } else {
        setMobileProfileHeader(false);
      }
    }, 250));
  }, []);
  const {
    accountData,
    trendingData,
    friendData
  } = storage;
  const isMobile = window.matchMedia('only screen and (max-width: 640px)').matches;
  const imageUploadParams = {
    onRemove: file => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      const result = newFileList.splice(index, 1);
      setFileList(result);
    },
    beforeUpload: file => {
      setFileList([...fileList, file]);
      return false;
    },
    fileList
  };

  const handleUploadCover = async ({
    fileList
  }) => {
    const formData = new FormData();
    fileList.forEach(file => {
      formData.append('profileBackgroundImage', file.originFileObj);
    });
    const request = await Object(_configs_API__WEBPACK_IMPORTED_MODULE_6__["default"])({
      method: 'put',
      url: '/accounts',
      data: formData,
      headers: {
        'x-token': auth.token
      }
    });
    const {
      data,
      status
    } = request;
    getAccount(auth.token);
  };

  const handleUploadAvatar = async ({
    fileList
  }) => {
    const formData = new FormData();
    fileList.forEach(file => {
      formData.append('profilePhoto', file.originFileObj);
    });
    const request = await Object(_configs_API__WEBPACK_IMPORTED_MODULE_6__["default"])({
      method: 'put',
      url: '/accounts',
      data: formData,
      headers: {
        'x-token': auth.token
      }
    });
    const {
      data,
      status
    } = request;
    getAccount(auth.token);
  };

  const coverUrl = accountData !== null && accountData !== undefined ? "url(https://www.freeskies.com/static/".concat((_accountData$profileB = accountData.profileBackgroundImage) === null || _accountData$profileB === void 0 ? void 0 : _accountData$profileB.src, ")") : null;
  const profileUrl = accountData !== null && accountData !== undefined ? "".concat((_accountData$profileP = accountData.profilePhoto) === null || _accountData$profileP === void 0 ? void 0 : _accountData$profileP.src) : null; // const roundRating = Math.round(accountData?.rating || 0)

  const roundRating = accountData === null || accountData === void 0 ? void 0 : accountData.rating;

  const modalPopup = () => {
    setPostModal(true);
  };

  const onUpdate = async dataForRequest => {
    try {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_13__["setLoading"])(true));
      const request = await Object(_configs_API__WEBPACK_IMPORTED_MODULE_6__["default"])({
        method: 'PUT',
        url: '/accounts',
        data: dataForRequest,
        headers: {
          'x-token': auth.token
        }
      });
      const {
        data,
        status
      } = request;

      if (status === 200) {
        console.log(data);
        setEditProfileModal(0);
        dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_13__["setAccountsData"])(_objectSpread(_objectSpread({}, accountData), {}, {
          lastName: data.lastName,
          profilePhoto: data.profilePhoto,
          profileBackgroundImage: data.profileBackgroundImage
        })));
        antd__WEBPACK_IMPORTED_MODULE_5__["message"].success('Successfully updated');
      } else {
        antd__WEBPACK_IMPORTED_MODULE_5__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
      }

      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_13__["setLoading"])(false));
      return await request;
    } catch (error) {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_13__["setLoading"])(false));
    }
  };

  const unfriend = async username => {
    if (username !== '') {
      try {
        dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_13__["setLoading"])(true));
        const request = await Object(_configs_API__WEBPACK_IMPORTED_MODULE_6__["default"])({
          method: 'DELETE',
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
          getAccount();
        } else {
          antd__WEBPACK_IMPORTED_MODULE_5__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
        }

        dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_13__["setLoading"])(false));
        return await request;
      } catch (error) {
        dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_13__["setLoading"])(false));
      }
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
      const request = await Object(_configs_API__WEBPACK_IMPORTED_MODULE_6__["default"])({
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
        antd__WEBPACK_IMPORTED_MODULE_5__["message"].success('Added successfully');
        dispatch({
          type: 'profile/SET_ACCOUNTS_DATA'
        });
      } else if (status == 403) {
        authServices.refreshToken();
      } else {
        antd__WEBPACK_IMPORTED_MODULE_5__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
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
      const request = await Object(_configs_API__WEBPACK_IMPORTED_MODULE_6__["default"])({
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
        antd__WEBPACK_IMPORTED_MODULE_5__["message"].success('Shared successfully');
      } else if (satus == 403) {
        authServices.refreshToken();
      } else {
        antd__WEBPACK_IMPORTED_MODULE_5__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
        throw new Error();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onUpdateTimeline = data => {
    accountData.activity.map(element => {
      if (element.id == data.id) {
        let addElement = _objectSpread({
          account: accountData
        }, data.comments[0]);

        element.comments.push(addElement);
        element.commentsCount += data.commentsCount;
        return element;
      }
    });
    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_13__["setAccountsData"])(accountData));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 602,
      columnNumber: 5
    }
  }, __jsx(components_header_Header__WEBPACK_IMPORTED_MODULE_20__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 603,
      columnNumber: 7
    }
  })), __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 606,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.left,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 607,
      columnNumber: 7
    }
  }, typeof accountData !== 'undefined' ? __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.profile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 609,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 610,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.avatar_image,
    onClick: () => setEditProfileModal(true),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 611,
      columnNumber: 14
    }
  }, __jsx(_components_common_Avatar__WEBPACK_IMPORTED_MODULE_14__["default"], {
    size: isMobile ? 100 : 140,
    url: profileUrl,
    text: accountData === null || accountData === void 0 ? void 0 : accountData.username,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 612,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.user_content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 621,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.user_info,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 622,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.heade_section,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 623,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.left_side,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 624,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.fullname,
    style: {
      cursor: 'pointer'
    },
    onClick: () => setEditProfileModal(true),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 625,
      columnNumber: 19
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 626,
      columnNumber: 21
    }
  }, "".concat(accountData === null || accountData === void 0 ? void 0 : accountData.firstName, " ").concat(accountData === null || accountData === void 0 ? void 0 : accountData.lastName)))), __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.right_side,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 629,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.rating,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 630,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Rate"], {
    disabled: true,
    defaultValue: roundRating,
    style: {
      color: '#fadb14',
      fontSize: '30px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 631,
      columnNumber: 21
    }
  }), __jsx("span", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.rating_text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 636,
      columnNumber: 21
    }
  }, roundRating))))))) : __jsx("div", {
    className: "border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 646,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "animate-pulse flex space-x-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 647,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "rounded-full bg-gray-400 h-12 w-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 648,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "flex-1 space-y-4 py-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 649,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "h-4 bg-gray-400 rounded w-3/4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 650,
      columnNumber: 19
    }
  }), __jsx("div", {
    className: "space-y-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 651,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "h-4 bg-gray-400 rounded",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 652,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "h-4 bg-gray-400 rounded w-5/6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 653,
      columnNumber: 21
    }
  }))))), __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.profile_content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 659,
      columnNumber: 9
    }
  }, __jsx("ul", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("flex border-b", _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.profileTabs),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 660,
      columnNumber: 11
    }
  }, __jsx("li", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('mr-1', _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.tab),
    onClick: () => setTab(1),
    style: {
      borderBottom: tab == 1 ? '5px solid white' : 'none'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 661,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "inline-block py-2 px-4 text-red-500 hover:text-red-800 font-semibold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 662,
      columnNumber: 15
    }
  }, "ACTIVITY")), __jsx("li", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('mr-1', _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.tab),
    onClick: () => setTab(2),
    style: {
      borderBottom: tab == 2 ? '5px solid white' : 'none'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 664,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "inline-block py-2 px-4 text-red-500 hover:text-red-800 font-semibold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 665,
      columnNumber: 15
    }
  }, "Groups")), __jsx("li", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('mr-1', _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.tab),
    onClick: () => setTab(6),
    style: {
      borderBottom: tab == 6 ? '5px solid white' : 'none'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 667,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "inline-block py-2 px-4 text-red-500 hover:text-red-800 font-semibold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 668,
      columnNumber: 15
    }
  }, "Marketplace")), __jsx("li", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('mr-1', _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.tab),
    onClick: () => setTab(3),
    style: {
      borderBottom: tab == 3 ? '5px solid white' : 'none'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 670,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "inline-block py-2 px-4 text-red-500 hover:text-red-800 font-semibold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 671,
      columnNumber: 15
    }
  }, "PHOTOS")), __jsx("li", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('mr-1', _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.tab),
    onClick: () => {
      setTab(4);
      getRates();
    },
    style: {
      borderBottom: tab == 4 ? '5px solid white' : 'none'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 673,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "inline-block py-2 px-4 text-red-500 hover:text-red-800 font-semibold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 674,
      columnNumber: 15
    }
  }, "RATES")), __jsx("li", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('mr-1', _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.tab),
    onClick: () => setTab(5),
    style: {
      borderBottom: tab == 5 ? '5px solid white' : 'none'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 676,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "inline-block py-2 px-4 text-red-500 hover:text-red-800 font-semibold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 677,
      columnNumber: 15
    }
  }, "FRIENDS"))), tab == 1 ? __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.activity,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 684,
      columnNumber: 11
    }
  }, __jsx("h2", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mobile_activity_label,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 685,
      columnNumber: 13
    }
  }, "ACTIVITY"), __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.createPostDiv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 686,
      columnNumber: 13
    }
  }, __jsx(_components_common_Avatar__WEBPACK_IMPORTED_MODULE_14__["default"], {
    size: 50,
    url: profileUrl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 687,
      columnNumber: 15
    }
  }), __jsx("input", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.createPostInput,
    placeholder: "What's on your mind?",
    onClick: modalPopup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 691,
      columnNumber: 15
    }
  })), __jsx(components_profile_FeedPosts__WEBPACK_IMPORTED_MODULE_8__["default"], {
    user: accountData,
    onRatePost: ratePost,
    onUpdateTimeline: onUpdateTimeline,
    likeAction: likeAction,
    shareAction: shareAction,
    deleteAction: deleteAction,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 696,
      columnNumber: 13
    }
  })) : null, tab == 5 ? __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.friends_list, _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.sections_content),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 706,
      columnNumber: 11
    }
  }, accountData === null || accountData === void 0 ? void 0 : accountData.friends.map((item, index) => {
    return __jsx("div", {
      className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.friend,
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 714,
        columnNumber: 17
      }
    }, __jsx(_components_common_Avatar__WEBPACK_IMPORTED_MODULE_14__["default"], {
      size: 80,
      url: item === null || item === void 0 ? void 0 : item.profilePhoto,
      text: item === null || item === void 0 ? void 0 : item.username,
      style: {
        marginRight: 0
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 715,
        columnNumber: 19
      }
    }), __jsx("div", {
      className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.friend_name,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 721,
        columnNumber: 19
      }
    }, __jsx("p", {
      style: {
        textAlign: 'left',
        fontSize: 20
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 722,
        columnNumber: 21
      }
    }, item.firstName, " ", item.lastName), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Rate"], {
      defaultValue: item.rating,
      style: {
        color: '#fadb14',
        fontSize: '15px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 723,
        columnNumber: 21
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      type: "primary",
      shape: "round",
      size: "small",
      style: {
        marginLeft: 5
      },
      onClick: () => unfriend(item.username),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 727,
        columnNumber: 21
      }
    }, "Unfriend")));
  })) : null, tab == 3 ? __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.photoSection,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 738,
      columnNumber: 13
    }
  }, __jsx(components_profile_PhotoSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
    user: photos,
    onRatePost: ratePost,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 739,
      columnNumber: 15
    }
  })) : null, tab == 4 ? __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ratedSection,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 742,
      columnNumber: 13
    }
  }, __jsx(components_profile_RatedSection__WEBPACK_IMPORTED_MODULE_10__["default"], {
    user: {
      recentRated: rates
    },
    onRatePost: ratePost,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 743,
      columnNumber: 13
    }
  })) : null, __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mobile_activity,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 746,
      columnNumber: 11
    }
  }, __jsx("h2", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mobile_activity_label,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 747,
      columnNumber: 13
    }
  }, "ACTIVITY"), __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.createPostDiv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 748,
      columnNumber: 13
    }
  }, __jsx(_components_common_Avatar__WEBPACK_IMPORTED_MODULE_14__["default"], {
    size: 50,
    url: profileUrl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 749,
      columnNumber: 15
    }
  }), __jsx("input", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.createPostInput,
    placeholder: "What's on your mind?",
    onClick: modalPopup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 753,
      columnNumber: 15
    }
  })), __jsx(components_profile_FeedPosts__WEBPACK_IMPORTED_MODULE_8__["default"], {
    user: accountData,
    onRatePost: ratePost,
    onUpdateTimeline: onUpdateTimeline,
    likeAction: likeAction,
    deleteAction: deleteAction,
    shareAction: shareAction,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 758,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mobile_friends_list),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 767,
      columnNumber: 11
    }
  }, __jsx("h2", {
    style: {
      fontWeight: 'bold'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 772,
      columnNumber: 13
    }
  }, "FRIENDS"), accountData === null || accountData === void 0 ? void 0 : accountData.friends.map((item, index) => {
    return __jsx("div", {
      className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.friend,
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 775,
        columnNumber: 17
      }
    }, __jsx(_components_common_Avatar__WEBPACK_IMPORTED_MODULE_14__["default"], {
      size: 80,
      url: item === null || item === void 0 ? void 0 : item.profilePhoto,
      text: item === null || item === void 0 ? void 0 : item.username,
      style: {
        marginRight: 0
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 776,
        columnNumber: 19
      }
    }), __jsx("div", {
      className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.friend_name,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 782,
        columnNumber: 19
      }
    }, __jsx("p", {
      style: {
        textAlign: 'left',
        fontSize: 20
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 783,
        columnNumber: 21
      }
    }, item.firstName, " ", item.lastName), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Rate"], {
      defaultValue: item.rating,
      style: {
        color: '#fadb14',
        fontSize: '15px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 784,
        columnNumber: 21
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      type: "primary",
      shape: "round",
      size: "small",
      style: {
        marginLeft: 5
      },
      onClick: () => unfriend(item.username),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 788,
        columnNumber: 21
      }
    }, "Unfriend")));
  })), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 798,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mobile_groups,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 799,
      columnNumber: 11
    }
  }, __jsx("h2", {
    style: {
      fontWeight: 'bold'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 800,
      columnNumber: 13
    }
  }, "GROUPS")), __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mobile_markets,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 803,
      columnNumber: 11
    }
  }, __jsx("h2", {
    style: {
      fontWeight: 'bold'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 805,
      columnNumber: 13
    }
  }, "Marketplace")), __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mobile_ratesection,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 808,
      columnNumber: 11
    }
  }, __jsx("h2", {
    style: {
      fontWeight: 'bold'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 809,
      columnNumber: 13
    }
  }, "RATES"), __jsx(components_profile_RatedSection__WEBPACK_IMPORTED_MODULE_10__["default"], {
    user: {
      recentRated: rates
    },
    onRatePost: ratePost,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 810,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mobile_photosection,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 813,
      columnNumber: 11
    }
  }, __jsx("h2", {
    style: {
      fontWeight: 'bold'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 814,
      columnNumber: 13
    }
  }, "PHOTOS"), __jsx(components_profile_PhotoSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
    user: photos,
    onRatePost: ratePost,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 815,
      columnNumber: 13
    }
  })))), __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.right,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 822,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.search,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 823,
      columnNumber: 11
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 824,
      columnNumber: 13
    }
  }, "Search:"), __jsx(Search, {
    placeholder: "Search",
    onSearch: onSearch,
    style: {
      width: 200,
      borderColor: 'white',
      backgroundColor: 'transparent'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 825,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.trending,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 827,
      columnNumber: 11
    }
  }, __jsx("h1", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.trendingText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 828,
      columnNumber: 13
    }
  }, "TRENDING"), __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.trending_content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 829,
      columnNumber: 13
    }
  }, trendingData.length > 0 && (trendingData === null || trendingData === void 0 ? void 0 : trendingData.map((item, index) => {
    return __jsx("div", {
      key: index,
      className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.trendingContent,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 832,
        columnNumber: 19
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 833,
        columnNumber: 21
      }
    }, "Type: ", item.type), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 834,
        columnNumber: 21
      }
    }, "Date: ", moment__WEBPACK_IMPORTED_MODULE_19___default()(item.createdAt).format('MMM DD, YYYY - HH:mm A')), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 835,
        columnNumber: 21
      }
    }, "Content: ", item.text), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 836,
        columnNumber: 21
      }
    }, "Comments: ", item.commentsCount), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 837,
        columnNumber: 21
      }
    }, "Reactions: ", item.reactionsCount), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 838,
        columnNumber: 21
      }
    }, "Rating: ", item.rating), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 839,
        columnNumber: 21
      }
    }, "Share: ", item.sharesCount), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 840,
        columnNumber: 21
      }
    }));
  }))), __jsx("h1", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.trendingText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 845,
      columnNumber: 13
    }
  }, "TOP RATED"), __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.trending_content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 846,
      columnNumber: 13
    }
  }, topRated.length > 0 && (topRated === null || topRated === void 0 ? void 0 : topRated.map((item, index) => {
    return __jsx("div", {
      key: index,
      className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.trendingContent,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 849,
        columnNumber: 19
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 850,
        columnNumber: 21
      }
    }, "Type: ", item.type), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 851,
        columnNumber: 21
      }
    }, "Date: ", moment__WEBPACK_IMPORTED_MODULE_19___default()(item.createdAt).format('MMM DD, YYYY - HH:mm A')), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 852,
        columnNumber: 21
      }
    }, "Content: ", item.text), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 853,
        columnNumber: 21
      }
    }, "Comments: ", item.commentsCount), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 854,
        columnNumber: 21
      }
    }, "Reactions: ", item.reactionsCount), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 855,
        columnNumber: 21
      }
    }, "Rating: ", item.rating), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 856,
        columnNumber: 21
      }
    }, "Share: ", item.sharesCount), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 857,
        columnNumber: 21
      }
    }));
  }))))), __jsx(_components_common_ModalWrapper__WEBPACK_IMPORTED_MODULE_16__["default"], {
    title: "Create Post",
    showModal: postModal,
    onClose: () => setPostModal(0),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 865,
      columnNumber: 7
    }
  }, __jsx(components_profile_PostingPost__WEBPACK_IMPORTED_MODULE_9__["default"], {
    loading: storage.postingLoading,
    onPosting: createPost,
    modalPopup: modalPopup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 870,
      columnNumber: 11
    }
  })), __jsx(_components_common_ModalWrapper__WEBPACK_IMPORTED_MODULE_16__["default"], {
    title: "Edit Profile",
    showModal: editProfileModal,
    onClose: () => setEditProfileModal(0),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 876,
      columnNumber: 7
    }
  }, __jsx(_edit__WEBPACK_IMPORTED_MODULE_18__["default"], {
    onUpdate: onUpdate,
    loading: storage.postingLoading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 881,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mobile_header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 884,
      columnNumber: 5
    }
  }, __jsx(components_header_Header__WEBPACK_IMPORTED_MODULE_20__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 885,
      columnNumber: 7
    }
  })));
}

_s(Profile, "txY+tDGGTvsXHGzksA4WunyizV4=");

_c = Profile;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(helpers_hoc_requireAuth__WEBPACK_IMPORTED_MODULE_11__["default"])(Profile));

var _c, _c2;

$RefreshReg$(_c, "Profile");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9Qcm9maWxlL1Byb2ZpbGUuanMiXSwibmFtZXMiOlsiU2VhcmNoIiwiSW5wdXQiLCJzdWZmaXgiLCJmb250U2l6ZSIsImNvbG9yIiwib25TZWFyY2giLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJQcm9maWxlIiwiYXV0aFNlcnZpY2VzIiwiYXV0aCIsImZpbGVMaXN0Iiwic2V0RmlsZUxpc3QiLCJ1c2VTdGF0ZSIsInN0b3JhZ2UiLCJkaXNwYXRjaCIsInVzZUNvbnRleHQiLCJQcm9maWxlQ29udGV4dCIsInRhYiIsInNldFRhYiIsInBvc3RNb2RhbCIsInNldFBvc3RNb2RhbCIsImVkaXRQcm9maWxlTW9kYWwiLCJzZXRFZGl0UHJvZmlsZU1vZGFsIiwicGhvdG9zIiwic2V0UGhvdG9zIiwicmF0ZXMiLCJzZXRSYXRlcyIsInRvcFJhdGVkIiwic2V0VG9wUmF0ZWQiLCJtb2JpbGVfcHJvZmlsZV9oZWFkZXIiLCJzZXRNb2JpbGVQcm9maWxlSGVhZGVyIiwiZ2V0RnJpZW5kcyIsInRva2VuIiwid2l0aG91dExvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVxdWVzdCIsIkFQSSIsIm1ldGhvZCIsInVybCIsImhlYWRlcnMiLCJkYXRhIiwic3RhdHVzIiwic2V0RnJpZW5kc0RhdGEiLCJyZWZyZXNoVG9rZW4iLCJtZXNzYWdlIiwiZXJyb3IiLCJnZXRBY2NvdW50IiwiYWN0aXZpdHkiLCJtYXAiLCJlbGVtZW50IiwiZmlsdGVyQWNjb3VudERhdGEiLCJzZXRBY2NvdW50c0RhdGEiLCJjb21tZW50X3NoYXJlZCIsInR5cGUiLCJjb21tZW50ZWQiLCJjb21tZW50cyIsImFjY291bnQiLCJzaGFyZWQiLCJnZXRQaG90b3MiLCJnZXRSYXRlcyIsImdldFRyZW5kaW5nIiwic2V0VHJlbmRpbmdEYXRhIiwiZ2V0VG9wUmF0ZWQiLCJkZWxldGVBY3Rpb24iLCJpZCIsIm5ld0FjdGl2aXR5IiwiYWNjb3VudERhdGEiLCJmaWx0ZXIiLCJpdGVtIiwic3VjY2VzcyIsImNyZWF0ZVBvc3QiLCJkYXRhRm9yUmVxdWVzdCIsImNvbW1lbnRzQ291bnQiLCJyYXRpbmciLCJyZWFjdGlvbnMiLCJyZWFjdGlvbnNDb3VudCIsInNoYXJlcyIsInNoYXJlc0NvdW50IiwicmF0ZVBvc3QiLCJwb3N0SWQiLCJyYXRlIiwicmF0ZWQiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiXyIsInRocm90dGxlIiwiY3VycmVudFNjcm9sbFBvcyIsInBhZ2VZT2Zmc2V0IiwidHJlbmRpbmdEYXRhIiwiZnJpZW5kRGF0YSIsImlzTW9iaWxlIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJpbWFnZVVwbG9hZFBhcmFtcyIsIm9uUmVtb3ZlIiwiZmlsZSIsImluZGV4IiwiaW5kZXhPZiIsIm5ld0ZpbGVMaXN0Iiwic2xpY2UiLCJyZXN1bHQiLCJzcGxpY2UiLCJiZWZvcmVVcGxvYWQiLCJoYW5kbGVVcGxvYWRDb3ZlciIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJmb3JFYWNoIiwiYXBwZW5kIiwib3JpZ2luRmlsZU9iaiIsImhhbmRsZVVwbG9hZEF2YXRhciIsImNvdmVyVXJsIiwidW5kZWZpbmVkIiwicHJvZmlsZUJhY2tncm91bmRJbWFnZSIsInNyYyIsInByb2ZpbGVVcmwiLCJwcm9maWxlUGhvdG8iLCJyb3VuZFJhdGluZyIsIm1vZGFsUG9wdXAiLCJvblVwZGF0ZSIsImxhc3ROYW1lIiwidW5mcmllbmQiLCJ1c2VybmFtZSIsImxpa2VBY3Rpb24iLCJ0ZXJtIiwicmVhY3RlZCIsInJlYWN0aW9uIiwiRXJyb3IiLCJzaGFyZUFjdGlvbiIsInNhdHVzIiwib25VcGRhdGVUaW1lbGluZSIsImFkZEVsZW1lbnQiLCJwdXNoIiwic3R5bGVzIiwiaGVhZGVyIiwiY29udGFpbmVyIiwibGVmdCIsInByb2ZpbGUiLCJhdmF0YXIiLCJhdmF0YXJfaW1hZ2UiLCJ1c2VyX2NvbnRlbnQiLCJ1c2VyX2luZm8iLCJoZWFkZV9zZWN0aW9uIiwibGVmdF9zaWRlIiwiZnVsbG5hbWUiLCJjdXJzb3IiLCJmaXJzdE5hbWUiLCJyaWdodF9zaWRlIiwicmF0aW5nX3RleHQiLCJwcm9maWxlX2NvbnRlbnQiLCJjbGFzc25hbWVzIiwicHJvZmlsZVRhYnMiLCJib3JkZXJCb3R0b20iLCJtb2JpbGVfYWN0aXZpdHlfbGFiZWwiLCJjcmVhdGVQb3N0RGl2IiwiY3JlYXRlUG9zdElucHV0IiwiZnJpZW5kc19saXN0Iiwic2VjdGlvbnNfY29udGVudCIsImZyaWVuZHMiLCJmcmllbmQiLCJtYXJnaW5SaWdodCIsImZyaWVuZF9uYW1lIiwidGV4dEFsaWduIiwibWFyZ2luTGVmdCIsInBob3RvU2VjdGlvbiIsInJhdGVkU2VjdGlvbiIsInJlY2VudFJhdGVkIiwibW9iaWxlX2FjdGl2aXR5IiwibW9iaWxlX2ZyaWVuZHNfbGlzdCIsImZvbnRXZWlnaHQiLCJtb2JpbGVfZ3JvdXBzIiwibW9iaWxlX21hcmtldHMiLCJtb2JpbGVfcmF0ZXNlY3Rpb24iLCJtb2JpbGVfcGhvdG9zZWN0aW9uIiwicmlnaHQiLCJzZWFyY2giLCJ3aWR0aCIsImJvcmRlckNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwidHJlbmRpbmciLCJ0cmVuZGluZ1RleHQiLCJ0cmVuZGluZ19jb250ZW50IiwibGVuZ3RoIiwidHJlbmRpbmdDb250ZW50IiwibW9tZW50IiwiY3JlYXRlZEF0IiwiZm9ybWF0IiwidGV4dCIsInBvc3RpbmdMb2FkaW5nIiwibW9iaWxlX2hlYWRlciIsInJlcXVpcmVBdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNO0FBQUVBO0FBQUYsSUFBYUMsMENBQW5COztBQUVBLE1BQU1D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QUFBLE1BUkYsQ0FERjtBQVlELEdBYndCLENBQXhCLENBREgsQ0FuQkYsQ0FMSixDQXhORixFQW1RRSxNQUFDLHdFQUFEO0FBQ0ksU0FBSyxFQUFDLGFBRFY7QUFFSSxhQUFTLEVBQUUxRCxTQUZmO0FBR0ksV0FBTyxFQUFFLE1BQU1DLFlBQVksQ0FBQyxDQUFELENBSC9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLSSxNQUFDLHNFQUFEO0FBQ0UsV0FBTyxFQUFFUCxPQUFPLENBQUMrSyxjQURuQjtBQUVFLGFBQVMsRUFBRXRILFVBRmI7QUFHRSxjQUFVLEVBQUVnRCxVQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMSixDQW5RRixFQThRRSxNQUFDLHdFQUFEO0FBQ0ksU0FBSyxFQUFDLGNBRFY7QUFFSSxhQUFTLEVBQUVqRyxnQkFGZjtBQUdJLFdBQU8sRUFBRSxNQUFNQyxtQkFBbUIsQ0FBQyxDQUFELENBSHRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLSSxNQUFDLDhDQUFEO0FBQWEsWUFBUSxFQUFFaUcsUUFBdkI7QUFBaUMsV0FBTyxFQUFFMUcsT0FBTyxDQUFDK0ssY0FBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxKLENBOVFGLENBTEEsRUEyUkE7QUFBSyxhQUFTLEVBQUV2RCxrRUFBTSxDQUFDd0QsYUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBM1JBLENBREY7QUFpU0Q7O0dBcDFCUXRMLE87O0tBQUFBLE87QUFzMUJNLHFFQUFBdUwsd0VBQVcsQ0FBQ3ZMLE9BQUQsQ0FBMUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS5kN2FjODlkZjQ0Yzc0NmZkMGMxNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy9wcm9maWxlLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7IENhbWVyYU91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyBCdXR0b24sIFVwbG9hZCwgbWVzc2FnZSwgSW5wdXQsIFRhYnMsIFJhdGUgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IEFQSSBmcm9tICcuLi8uLi9jb25maWdzL0FQSSc7XHJcbmltcG9ydCBQaG90b1NlY3Rpb24gZnJvbSAnY29tcG9uZW50cy9wcm9maWxlL1Bob3RvU2VjdGlvbic7XHJcbmltcG9ydCBGZWVkUG9zdHMgZnJvbSAnY29tcG9uZW50cy9wcm9maWxlL0ZlZWRQb3N0cyc7XHJcbmltcG9ydCBQb3N0aW5nUG9zdCBmcm9tICdjb21wb25lbnRzL3Byb2ZpbGUvUG9zdGluZ1Bvc3QnO1xyXG5pbXBvcnQgUmF0ZWRTZWN0aW9uIGZyb20gJ2NvbXBvbmVudHMvcHJvZmlsZS9SYXRlZFNlY3Rpb24nO1xyXG5pbXBvcnQgcmVxdWlyZUF1dGggZnJvbSAnaGVscGVycy9ob2MvcmVxdWlyZUF1dGgnO1xyXG5pbXBvcnQgeyBQcm9maWxlQ29udGV4dCB9IGZyb20gJy4vc3RvcmFnZS9Qcm9maWxlQ29udGV4dCc7XHJcbmltcG9ydCB7IHNldExvYWRpbmcsIHNldEZyaWVuZHNEYXRhLCBzZXRBY2NvdW50c0RhdGEsIHNldFRyZW5kaW5nRGF0YSB9IGZyb20gJy4vYWN0aW9ucyc7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb24vQXZhdGFyJztcclxuaW1wb3J0IFJhdGluZyAgZnJvbSAncmVhY3QtcmF0aW5nJztcclxuaW1wb3J0IE1vZGFsV3JhcHBlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9Nb2RhbFdyYXBwZXInO1xyXG5pbXBvcnQgUG9zdE1vZGFsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcHJvZmlsZS9Qb3N0TW9kYWwnO1xyXG5pbXBvcnQgRWRpdFByb2ZpbGUgZnJvbSAnLi9lZGl0JztcclxuaW1wb3J0IHsgQXVkaW9PdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlcic7XHJcbmltcG9ydCB7IGVsIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlJztcclxuXHJcbmNvbnN0IHsgU2VhcmNoIH0gPSBJbnB1dDtcclxuXHJcbmNvbnN0IHN1ZmZpeCA9IChcclxuICA8QXVkaW9PdXRsaW5lZFxyXG4gICAgc3R5bGU9e3tcclxuICAgICAgZm9udFNpemU6IDE2LFxyXG4gICAgICBjb2xvcjogJyMxODkwZmYnLFxyXG4gICAgfX1cclxuICAvPlxyXG4pO1xyXG5cclxuY29uc3Qgb25TZWFyY2ggPSB2YWx1ZSA9PiBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcblxyXG5mdW5jdGlvbiBQcm9maWxlKHthdXRoU2VydmljZXMsICBhdXRoIH0pIHtcclxuICBjb25zdCBbZmlsZUxpc3QsIHNldEZpbGVMaXN0IF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3N0b3JhZ2UsIGRpc3BhdGNoXSA9IHVzZUNvbnRleHQoUHJvZmlsZUNvbnRleHQpO1xyXG4gIGNvbnN0IFt0YWIsIHNldFRhYl0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbcG9zdE1vZGFsLCBzZXRQb3N0TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtlZGl0UHJvZmlsZU1vZGFsLCBzZXRFZGl0UHJvZmlsZU1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcGhvdG9zLCBzZXRQaG90b3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtyYXRlcywgc2V0UmF0ZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFt0b3BSYXRlZCwgc2V0VG9wUmF0ZWRdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFttb2JpbGVfcHJvZmlsZV9oZWFkZXIsIHNldE1vYmlsZVByb2ZpbGVIZWFkZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBnZXRGcmllbmRzID0gYXN5bmMgKHRva2VuLCB3aXRob3V0TG9hZGluZyA9IGZhbHNlKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoIXdpdGhvdXRMb2FkaW5nKSBkaXNwYXRjaChzZXRMb2FkaW5nKHRydWUpKTtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsOiAnL2FjY291bnRzL3RpbWVsaW5lJyxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIGRpc3BhdGNoKHNldEZyaWVuZHNEYXRhKGRhdGEpKTtcclxuICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IDQwMykge1xyXG4gICAgICAgIGF1dGhTZXJ2aWNlcy5yZWZyZXNoVG9rZW4oZ2V0RnJpZW5kcyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCF3aXRob3V0TG9hZGluZykgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICBpZiAoIXdpdGhvdXRMb2FkaW5nKSBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0QWNjb3VudCA9IGFzeW5jICh0b2tlbiwgd2l0aG91dExvYWRpbmcgPSBmYWxzZSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKCF3aXRob3V0TG9hZGluZykgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlKSk7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgdXJsOiAnL2FjY291bnRzJyxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge2NvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIGRhdGEuYWN0aXZpdHkgPSBkYXRhLmFjdGl2aXR5Lm1hcChlbGVtZW50ID0+IHsgXHJcbiAgICAgICAgICBlbGVtZW50ID0gZmlsdGVyQWNjb3VudERhdGEoZWxlbWVudCk7XHJcbiAgICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGRpc3BhdGNoKHNldEFjY291bnRzRGF0YShkYXRhKSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSA0MDMpIHtcclxuICAgICAgICBhdXRoU2VydmljZXMucmVmcmVzaFRva2VuKGdldEZyaWVuZHMpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghd2l0aG91dExvYWRpbmcpIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgaWYgKCF3aXRob3V0TG9hZGluZykgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZmlsdGVyQWNjb3VudERhdGEgPSAoY29tbWVudF9zaGFyZWQpID0+IHtcclxuICAgIGlmKGNvbW1lbnRfc2hhcmVkLnR5cGUgPT09ICdDb21tZW50Jykge1xyXG4gICAgICBpZihjb21tZW50X3NoYXJlZC5jb21tZW50ZWQudHlwZSA9PSAnUG9zdCcpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uY29tbWVudF9zaGFyZWQuY29tbWVudGVkLFxyXG4gICAgICAgICAgY29tbWVudHM6IFt7Li4uY29tbWVudF9zaGFyZWQsIGFjY291bnQ6IGNvbW1lbnRfc2hhcmVkLmFjY291bnR9XVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChjb21tZW50X3NoYXJlZC5jb21tZW50ZWQudHlwZSA9PSAnQ29tbWVudCcpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uY29tbWVudF9zaGFyZWQuY29tbWVudGVkLmNvbW1lbnRlZCxcclxuICAgICAgICAgIGNvbW1lbnRzOiBbey4uLmNvbW1lbnRfc2hhcmVkLmNvbW1lbnRlZCwgY29tbWVudHM6IFtjb21tZW50X3NoYXJlZF19XVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmKGNvbW1lbnRfc2hhcmVkLmNvbW1lbnRlZC50eXBlID09ICdTaGFyZScpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uY29tbWVudF9zaGFyZWQuY29tbWVudGVkLnNoYXJlZCxcclxuICAgICAgICAgIGNvbW1lbnRzOiBbeyAuLi5jb21tZW50X3NoYXJlZCwgYWNjb3VudDogY29tbWVudF9zaGFyZWQuYWNjb3VudCB9XVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uY29tbWVudF9zaGFyZWQuY29tbWVudGVkLFxyXG4gICAgICAgICAgY29tbWVudHM6IFt7IC4uLmNvbW1lbnRfc2hhcmVkLCBhY2NvdW50OiBjb21tZW50X3NoYXJlZC5hY2NvdW50IH1dXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYoY29tbWVudF9zaGFyZWQudHlwZSA9PT0gJ1Bvc3QnKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbW1lbnRfc2hhcmVkO1xyXG4gICAgfSBlbHNlIGlmKGNvbW1lbnRfc2hhcmVkLnR5cGUgPT09ICdTaGFyZScpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5jb21tZW50X3NoYXJlZC5zaGFyZWQsXHJcbiAgICAgICAgY29tbWVudHM6IFt7Li4uY29tbWVudF9zaGFyZWQsIGFjY291bnQ6IGNvbW1lbnRfc2hhcmVkLmFjY291bnQgfV1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGNvbW1lbnRfc2hhcmVkO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBnZXRQaG90b3MgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6ICcvYWNjb3VudHMvcGhvdG9zJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBcIm9mZnNldFwiOiAwLFxyXG4gICAgICAgICAgXCJmaXJzdFwiOiAxMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBzZXRQaG90b3MoZGF0YSlcclxuICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IDQwMykge1xyXG4gICAgICAgIGF1dGhTZXJ2aWNlcy5yZWZyZXNoVG9rZW4oZ2V0UGhvdG9zKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBcclxuICAgICAgfVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICBcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGdldFJhdGVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsOiAnL2FjY291bnRzL3JhdGVkJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBcIm9mZnNldFwiOiAwLFxyXG4gICAgICAgICAgXCJmaXJzdFwiOiAxMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBzZXRSYXRlcyhkYXRhKVxyXG4gICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gNDAzKSB7XHJcbiAgICAgICAgYXV0aFNlcnZpY2VzLnJlZnJlc2hUb2tlbihnZXRSYXRlcyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgIFxyXG4gICAgICB9XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgIFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0VHJlbmRpbmcgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6ICcvYWNjb3VudHMvdHJlbmRpbmcnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIFwib2Zmc2V0XCI6IDAsXHJcbiAgICAgICAgICBcImZpcnN0XCI6IDNcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuICAgICAgaWYoc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgIGRpc3BhdGNoKHNldFRyZW5kaW5nRGF0YShkYXRhKSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09IDQwMykge1xyXG4gICAgICAgIGF1dGhTZXJ2aWNlcy5yZWZyZXNoVG9rZW4oZ2V0VHJlbmRpbmcpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRUb3BSYXRlZCA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybDogJy9hY2NvdW50cy90b3AtcmF0ZWQnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIFwib2Zmc2V0XCI6IDAsXHJcbiAgICAgICAgICBcImZpcnN0XCI6IDEzMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG4gICAgICBzZXRUb3BSYXRlZChkYXRhKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGRlbGV0ZUFjdGlvbiA9IGFzeW5jIChpZCwgdHlwZT1cIlBvc3RcIikgPT4ge1xyXG4gICAgXHJcbiAgICB2YXIgdXJsID0gJyc7XHJcbiAgICBpZiAodHlwZSA9PT0gJ1Bob3RvJykge1xyXG4gICAgICB1cmwgPSAnL3Bob3Rvcyc7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdWaWRlb0NsaXAnKSB7XHJcbiAgICAgIHVybCA9ICcvdmlkZW8tY2xpcHMnO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnSXRlbScpIHtcclxuICAgICAgdXJsID0gJy9pdGVtcyc7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdQb3N0Jykge1xyXG4gICAgICB1cmwgPSAnL3Bvc3RzJztcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0NvbW1lbnQnKSB7XHJcbiAgICAgIHVybCA9ICcvY29tbWVudHMnO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnU2hhcmUnKSB7XHJcbiAgICAgIHVybCA9ICcvcG9zdHMnO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ2RlbGV0ZScsXHJcbiAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgXCJpZFwiOiBpZFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG4gICAgICBpZihzdGF0dXMgIT09IDQwMCkge1xyXG4gICAgICAgIHZhciBuZXdBY3Rpdml0eSA9IGFjY291bnREYXRhLmFjdGl2aXR5LmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGl0ZW0uaWQgIT09IGlkO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZGlzcGF0Y2goc2V0QWNjb3VudHNEYXRhKHtcclxuICAgICAgICAgIC4uLmFjY291bnREYXRhLFxyXG4gICAgICAgICAgYWN0aXZpdHk6IG5ld0FjdGl2aXR5XHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKCdEZWxldGVkIHN1Y2Nlc3NmdWxseSEnKTtcclxuICAgICB9IGVsc2Uge1xyXG4gICAgICAgbWVzc2FnZS5lcnJvcignVGhpcyBwb3N0IGRlbGV0aW5nIGRvZXMgbm90IGFsbG93ZWQhJylcclxuICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcil7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGNyZWF0ZVBvc3QgPSBhc3luYyAoZGF0YUZvclJlcXVlc3QpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcodHJ1ZSwgJ3Bvc3RpbmcnKSk7XHJcblxyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6ICcvcG9zdHMnLFxyXG4gICAgICAgIGRhdGE6IGRhdGFGb3JSZXF1ZXN0LFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgc2V0UG9zdE1vZGFsKDApO1xyXG4gICAgICAgIHZhciBlbGVtZW50ID0gIHtcclxuICAgICAgICAgIHR5cGU6ICdQb3N0JyxcclxuICAgICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgICBjb21tZW50czogW10sXHJcbiAgICAgICAgICBjb21tZW50c0NvdW50OiAwLFxyXG4gICAgICAgICAgcmF0aW5nOiBudWxsLFxyXG4gICAgICAgICAgcmVhY3Rpb25zOiBbXSxcclxuICAgICAgICAgIHJlYWN0aW9uc0NvdW50OiAwLFxyXG4gICAgICAgICAgc2hhcmVzOiBbXSxcclxuICAgICAgICAgIHNoYXJlc0NvdW50OiAwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFjY291bnREYXRhLmFjdGl2aXR5ID0gW1xyXG4gICAgICAgICAgZWxlbWVudCwgLi4uYWNjb3VudERhdGEuYWN0aXZpdHlcclxuICAgICAgICBdXHJcbiAgICAgICAgZGlzcGF0Y2goc2V0QWNjb3VudHNEYXRhKGFjY291bnREYXRhKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSwgJ3Bvc3RpbmcnKSk7XHJcblxyXG4gICAgICByZXR1cm4gYXdhaXQgcmVxdWVzdDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UsICdwb3N0aW5nJykpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJhdGVQb3N0ID0gYXN5bmMgKHR5cGUsIHBvc3RJZCwgcmF0ZSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlLCAncG9zdGluZycpKTtcclxuICAgICAgbGV0IHVybCA9ICcnO1xyXG5cclxuICAgICAgaWYgKHR5cGUgPT09ICdQaG90bycpIHtcclxuICAgICAgICB1cmwgPSAnL3Bob3Rvcy9yYXRlJztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnVmlkZW9DbGlwJykge1xyXG4gICAgICAgIHVybCA9ICcvdmlkZW8tY2xpcHMvcmF0ZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0l0ZW0nKSB7XHJcbiAgICAgICAgdXJsID0gJy9pdGVtcy9yYXRlJztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnUG9zdCcpIHtcclxuICAgICAgICB1cmwgPSAnL3Bvc3RzL3JhdGUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdDb21tZW50Jykge1xyXG4gICAgICAgIHVybCA9ICcvY29tbWVudHMvcmF0ZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1NoYXJlJykge1xyXG4gICAgICAgIHVybCA9ICcvc2hhcmVzL3JhdGUnO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmwsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgcmF0ZWQ6IHBvc3RJZCxcclxuICAgICAgICAgIHJhdGluZzogcmF0ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuXHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgIC8vIGdldEFjY291bnQoKTtcclxuICAgICAgICAvLyBtZXNzYWdlLnN1Y2Nlc3MoJ0V2YWx1YXRlIHN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICAgIGFjY291bnREYXRhLmFjdGl2aXR5Lm1hcChlbGVtZW50ID0+IHtcclxuICAgICAgICAgIGlmKGVsZW1lbnQuaWQgPT09IHBvc3RJZCAmJiBlbGVtZW50LnR5cGUgPT09IHR5cGUpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5yYXRpbmcgPSByYXRlO1xyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGRpc3BhdGNoKHNldEFjY291bnRzRGF0YShhY2NvdW50RGF0YSkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UsICdwb3N0aW5nJykpO1xyXG5cclxuICAgICAgcmV0dXJuIGF3YWl0IHJlcXVlc3Q7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlLCAncG9zdGluZycpKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gZ2V0RnJpZW5kcyhhdXRoLnRva2VuKTtcclxuICAgIGdldEFjY291bnQoYXV0aC50b2tlbik7XHJcbiAgICBnZXRUcmVuZGluZygpO1xyXG4gICAgZ2V0UGhvdG9zKCk7XHJcbiAgICBnZXRSYXRlcygpO1xyXG4gICAgZ2V0VG9wUmF0ZWQoKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBfLnRocm90dGxlKCgpID0+IHtcclxuICAgICAgY29uc3QgY3VycmVudFNjcm9sbFBvcyA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgICAgaWYoY3VycmVudFNjcm9sbFBvcyA+IDEwMCkge1xyXG4gICAgICAgIHNldE1vYmlsZVByb2ZpbGVIZWFkZXIodHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0TW9iaWxlUHJvZmlsZUhlYWRlcihmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH0sIDI1MCkpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgeyBhY2NvdW50RGF0YSwgdHJlbmRpbmdEYXRhLCBmcmllbmREYXRhIH0gPSBzdG9yYWdlXHJcbiBcclxuICBjb25zdCBpc01vYmlsZSA9IHdpbmRvdy5tYXRjaE1lZGlhKCdvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpJykubWF0Y2hlc1xyXG5cclxuICBjb25zdCBpbWFnZVVwbG9hZFBhcmFtcyA9IHtcclxuICAgIG9uUmVtb3ZlOiBmaWxlID0+IHtcclxuICAgICAgY29uc3QgaW5kZXggPSBmaWxlTGlzdC5pbmRleE9mKGZpbGUpO1xyXG4gICAgICBjb25zdCBuZXdGaWxlTGlzdCA9IGZpbGVMaXN0LnNsaWNlKCk7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IG5ld0ZpbGVMaXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgIHNldEZpbGVMaXN0KHJlc3VsdClcclxuICAgIH0sXHJcbiAgICBiZWZvcmVVcGxvYWQ6IGZpbGUgPT4ge1xyXG4gICAgICBzZXRGaWxlTGlzdChbLi4uZmlsZUxpc3QsIGZpbGVdKVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgZmlsZUxpc3QsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVXBsb2FkQ292ZXIgPSBhc3luYyAoeyBmaWxlTGlzdCB9KSA9PiB7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZmlsZUxpc3QuZm9yRWFjaChmaWxlID0+IHtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdwcm9maWxlQmFja2dyb3VuZEltYWdlJywgZmlsZS5vcmlnaW5GaWxlT2JqKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICBtZXRob2Q6ICdwdXQnLFxyXG4gICAgICB1cmw6ICcvYWNjb3VudHMnLFxyXG4gICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcblxyXG4gICAgZ2V0QWNjb3VudChhdXRoLnRva2VuKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVVwbG9hZEF2YXRhciA9IGFzeW5jICh7IGZpbGVMaXN0IH0pID0+IHtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmaWxlTGlzdC5mb3JFYWNoKGZpbGUgPT4ge1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Byb2ZpbGVQaG90bycsIGZpbGUub3JpZ2luRmlsZU9iaik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgbWV0aG9kOiAncHV0JyxcclxuICAgICAgdXJsOiAnL2FjY291bnRzJyxcclxuICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG5cclxuICAgIGdldEFjY291bnQoYXV0aC50b2tlbik7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjb3ZlclVybCA9IGFjY291bnREYXRhICE9PSBudWxsICYmIGFjY291bnREYXRhICE9PSB1bmRlZmluZWQgPyBgdXJsKGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7YWNjb3VudERhdGEucHJvZmlsZUJhY2tncm91bmRJbWFnZT8uc3JjfSlgIDogbnVsbFxyXG4gIGNvbnN0IHByb2ZpbGVVcmwgPSBhY2NvdW50RGF0YSAhPT0gbnVsbCAmJiBhY2NvdW50RGF0YSAhPT0gdW5kZWZpbmVkID8gYCR7YWNjb3VudERhdGEucHJvZmlsZVBob3RvPy5zcmN9YCA6IG51bGxcclxuICAvLyBjb25zdCByb3VuZFJhdGluZyA9IE1hdGgucm91bmQoYWNjb3VudERhdGE/LnJhdGluZyB8fCAwKVxyXG4gIGNvbnN0IHJvdW5kUmF0aW5nID0gYWNjb3VudERhdGE/LnJhdGluZztcclxuXHJcbiAgY29uc3QgbW9kYWxQb3B1cCA9ICgpID0+IHtcclxuICAgIHNldFBvc3RNb2RhbCh0cnVlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uVXBkYXRlID0gYXN5bmMgKGRhdGFGb3JSZXF1ZXN0KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKHRydWUpKTtcclxuXHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgdXJsOiAnL2FjY291bnRzJyxcclxuICAgICAgICBkYXRhOiBkYXRhRm9yUmVxdWVzdCxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcblxyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICBzZXRFZGl0UHJvZmlsZU1vZGFsKDApO1xyXG4gICAgICAgIGRpc3BhdGNoKHNldEFjY291bnRzRGF0YSh7XHJcbiAgICAgICAgICAuLi5hY2NvdW50RGF0YSxcclxuICAgICAgICAgIGxhc3ROYW1lOiBkYXRhLmxhc3ROYW1lLFxyXG4gICAgICAgICAgcHJvZmlsZVBob3RvOiBkYXRhLnByb2ZpbGVQaG90byxcclxuICAgICAgICAgIHByb2ZpbGVCYWNrZ3JvdW5kSW1hZ2U6IGRhdGEucHJvZmlsZUJhY2tncm91bmRJbWFnZSxcclxuICAgICAgICB9KSlcclxuICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoJ1N1Y2Nlc3NmdWxseSB1cGRhdGVkJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpO1xyXG5cclxuICAgICAgcmV0dXJuIGF3YWl0IHJlcXVlc3Q7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdW5mcmllbmQgPSBhc3luYyAodXNlcm5hbWUpID0+IHtcclxuICAgIGlmKHVzZXJuYW1lICE9PSAnJykge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcodHJ1ZSkpO1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICAgIHVybDogJy9hY2NvdW50cy9mcmllbmRzaGlwJyxcclxuICAgICAgICAgIGRhdGE6IHsgdXNlcm5hbWU6IHVzZXJuYW1lIH0sXHJcbiAgICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG4gICAgICAgIGlmIChzdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgICAgZ2V0QWNjb3VudCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlcXVlc3Q7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBsaWtlQWN0aW9uID0gYXN5bmMgKHR5cGUsIGlkLCB0ZXJtKSA9PiB7XHJcbiAgICB2YXIgdXJsID0gJyc7XHJcbiAgICBpZiAodHlwZSA9PT0gJ1Bob3RvJykge1xyXG4gICAgICB1cmwgPSAnL3Bob3Rvcy9yZWFjdCc7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdWaWRlb0NsaXAnKSB7XHJcbiAgICAgIHVybCA9ICcvdmlkZW8tY2xpcHMvcmVhY3QnO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnSXRlbScpIHtcclxuICAgICAgdXJsID0gJy9pdGVtcy9yZWFjdCc7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdQb3N0Jykge1xyXG4gICAgICB1cmwgPSAnL3Bvc3RzL3JlYWN0JztcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0NvbW1lbnQnKSB7XHJcbiAgICAgIHVybCA9ICcvY29tbWVudHMvcmVhY3QnO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnU2hhcmUnKSB7XHJcbiAgICAgIHVybCA9ICcvc2hhcmVzL3JlYWN0JztcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICByZWFjdGVkOiBpZCxcclxuICAgICAgICAgIHJlYWN0aW9uOiB0ZXJtXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgIG1lc3NhZ2Uuc3VjY2VzcygnQWRkZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAncHJvZmlsZS9TRVRfQUNDT1VOVFNfREFUQScgfSlcclxuICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT0gNDAzKSB7XHJcbiAgICAgICAgYXV0aFNlcnZpY2VzLnJlZnJlc2hUb2tlbigpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIFxyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiAgY29uc3Qgc2hhcmVBY3Rpb24gPSBhc3luYyAodHlwZSwgaWQpID0+IHtcclxuXHJcbiAgICB2YXIgdXJsID0gJyc7XHJcbiAgICAgIGlmICh0eXBlID09PSAnUGhvdG8nKSB7XHJcbiAgICAgICAgdXJsID0gJy9waG90b3Mvc2hhcmUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdWaWRlb0NsaXAnKSB7XHJcbiAgICAgICAgdXJsID0gJy92aWRlby1jbGlwcy9zaGFyZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0l0ZW0nKSB7XHJcbiAgICAgICAgdXJsID0gJy9pdGVtcy9zaGFyZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1Bvc3QnKSB7XHJcbiAgICAgICAgdXJsID0gJy9wb3N0cy9zaGFyZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0NvbW1lbnQnKSB7XHJcbiAgICAgICAgdXJsID0gJy9jb21tZW50cy9zaGFyZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1NoYXJlJykge1xyXG4gICAgICAgIHVybCA9ICcvcG9zdHMvc2hhcmUnO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHNoYXJlZDogaWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcblxyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoJ1NoYXJlZCBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgfSBlbHNlIGlmKHNhdHVzID09IDQwMylcclxuICAgICAgICB7XHJcbiAgICAgICAgICBhdXRoU2VydmljZXMucmVmcmVzaFRva2VuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBvblVwZGF0ZVRpbWVsaW5lID0gKGRhdGEpID0+IHtcclxuICAgIGFjY291bnREYXRhLmFjdGl2aXR5Lm1hcChlbGVtZW50ID0+IHtcclxuICAgICAgaWYoZWxlbWVudC5pZCA9PSBkYXRhLmlkKSB7XHJcbiAgICAgICAgbGV0IGFkZEVsZW1lbnQgPSB7XHJcbiAgICAgICAgICBhY2NvdW50OiBhY2NvdW50RGF0YSwgXHJcbiAgICAgICAgICAuLi5kYXRhLmNvbW1lbnRzWzBdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsZW1lbnQuY29tbWVudHMucHVzaChhZGRFbGVtZW50KTtcclxuICAgICAgICBlbGVtZW50LmNvbW1lbnRzQ291bnQgKz0gZGF0YS5jb21tZW50c0NvdW50O1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGRpc3BhdGNoKHNldEFjY291bnRzRGF0YShhY2NvdW50RGF0YSkpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVmdH0+XHJcbiAgICAgICAge3R5cGVvZiBhY2NvdW50RGF0YSAhPT0gJ3VuZGVmaW5lZCc/XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyfT5cclxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyX2ltYWdlfSBvbkNsaWNrPXsoKSA9PiBzZXRFZGl0UHJvZmlsZU1vZGFsKHRydWUpfT5cclxuICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgIHNpemU9e2lzTW9iaWxlID8gMTAwIDogMTQwfVxyXG4gICAgICAgICAgICAgICAgICB1cmw9e3Byb2ZpbGVVcmx9XHJcbiAgICAgICAgICAgICAgICAgIHRleHQ9e2FjY291bnREYXRhPy51c2VybmFtZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcl9jb250ZW50fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyX2luZm99PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVfc2VjdGlvbn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnRfc2lkZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmZ1bGxuYW1lfSBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSBvbkNsaWNrPXsoKSA9PiBzZXRFZGl0UHJvZmlsZU1vZGFsKHRydWUpfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57YCR7YWNjb3VudERhdGE/LmZpcnN0TmFtZX0gJHthY2NvdW50RGF0YT8ubGFzdE5hbWV9YH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yaWdodF9zaWRlfT5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucmF0aW5nfT5cclxuICAgICAgICAgICAgICAgICAgICA8UmF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cm91bmRSYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJyNmYWRiMTQnLCBmb250U2l6ZTogJzMwcHgnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5yYXRpbmdfdGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7cm91bmRSYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA6XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktMzAwIHNoYWRvdyByb3VuZGVkLW1kIHAtNCBtYXgtdy1zbSB3LWZ1bGwgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGUtcHVsc2UgZmxleCBzcGFjZS14LTRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBiZy1ncmF5LTQwMCBoLTEyIHctMTJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIHNwYWNlLXktNCBweS0xXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC00IGJnLWdyYXktNDAwIHJvdW5kZWQgdy0zLzRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNCBiZy1ncmF5LTQwMCByb3VuZGVkXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTQgYmctZ3JheS00MDAgcm91bmRlZCB3LTUvNlwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZV9jb250ZW50fT5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXCJmbGV4IGJvcmRlci1iXCIsIHN0eWxlcy5wcm9maWxlVGFicyl9PlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdtci0xJywgc3R5bGVzLnRhYil9IG9uQ2xpY2s9eygpID0+IHNldFRhYigxKX0gc3R5bGU9e3sgYm9yZGVyQm90dG9tOnRhYj09MT8nNXB4IHNvbGlkIHdoaXRlJzonbm9uZScgfX0+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHB5LTIgcHgtNCB0ZXh0LXJlZC01MDAgaG92ZXI6dGV4dC1yZWQtODAwIGZvbnQtc2VtaWJvbGRcIj5BQ1RJVklUWTwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnbXItMScsIHN0eWxlcy50YWIpfSBvbkNsaWNrPXsoKSA9PiBzZXRUYWIoMil9IHN0eWxlPXt7IGJvcmRlckJvdHRvbTp0YWI9PTI/JzVweCBzb2xpZCB3aGl0ZSc6J25vbmUnIH19PlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBweS0yIHB4LTQgdGV4dC1yZWQtNTAwIGhvdmVyOnRleHQtcmVkLTgwMCBmb250LXNlbWlib2xkXCI+R3JvdXBzPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdtci0xJywgc3R5bGVzLnRhYil9IG9uQ2xpY2s9eygpID0+IHNldFRhYig2KX0gc3R5bGU9e3sgYm9yZGVyQm90dG9tOnRhYj09Nj8nNXB4IHNvbGlkIHdoaXRlJzonbm9uZScgfX0+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHB5LTIgcHgtNCB0ZXh0LXJlZC01MDAgaG92ZXI6dGV4dC1yZWQtODAwIGZvbnQtc2VtaWJvbGRcIj5NYXJrZXRwbGFjZTwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnbXItMScsIHN0eWxlcy50YWIpfSBvbkNsaWNrPXsoKSA9PiBzZXRUYWIoMyl9IHN0eWxlPXt7IGJvcmRlckJvdHRvbTp0YWI9PTM/JzVweCBzb2xpZCB3aGl0ZSc6J25vbmUnIH19PlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBweS0yIHB4LTQgdGV4dC1yZWQtNTAwIGhvdmVyOnRleHQtcmVkLTgwMCBmb250LXNlbWlib2xkXCI+UEhPVE9TPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdtci0xJywgc3R5bGVzLnRhYil9IG9uQ2xpY2s9eygpID0+IHsgc2V0VGFiKDQpOyAgZ2V0UmF0ZXMoKTsgfX0gc3R5bGU9e3sgYm9yZGVyQm90dG9tOnRhYj09ND8nNXB4IHNvbGlkIHdoaXRlJzonbm9uZScgfX0+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHB5LTIgcHgtNCB0ZXh0LXJlZC01MDAgaG92ZXI6dGV4dC1yZWQtODAwIGZvbnQtc2VtaWJvbGRcIj5SQVRFUzwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnbXItMScsIHN0eWxlcy50YWIpfSBvbkNsaWNrPXsoKSA9PiBzZXRUYWIoNSl9IHN0eWxlPXt7IGJvcmRlckJvdHRvbTp0YWI9PTU/JzVweCBzb2xpZCB3aGl0ZSc6J25vbmUnIH19PlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBweS0yIHB4LTQgdGV4dC1yZWQtNTAwIGhvdmVyOnRleHQtcmVkLTgwMCBmb250LXNlbWlib2xkXCI+RlJJRU5EUzwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2JpbGVfc2VhcmNofT5cclxuICAgICAgICAgICAgPFNlYXJjaCBwbGFjZWhvbGRlcj1cImlucHV0IHNlYXJjaCB0ZXh0XCIgb25TZWFyY2g9e29uU2VhcmNofSBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19IC8+XHJcbiAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICB7dGFiPT0xP1xyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpdml0eX0+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5tb2JpbGVfYWN0aXZpdHlfbGFiZWx9PkFDVElWSVRZPC9oMj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jcmVhdGVQb3N0RGl2fT5cclxuICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgIHNpemU9ezUwfVxyXG4gICAgICAgICAgICAgICAgICB1cmw9e3Byb2ZpbGVVcmx9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuY3JlYXRlUG9zdElucHV0fSBwbGFjZWhvbGRlcj1cIldoYXQncyBvbiB5b3VyIG1pbmQ/XCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e21vZGFsUG9wdXB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDwvaW5wdXQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8RmVlZFBvc3RzXHJcbiAgICAgICAgICAgICAgdXNlcj17YWNjb3VudERhdGF9XHJcbiAgICAgICAgICAgICAgb25SYXRlUG9zdD17cmF0ZVBvc3R9XHJcbiAgICAgICAgICAgICAgb25VcGRhdGVUaW1lbGluZT17b25VcGRhdGVUaW1lbGluZX1cclxuICAgICAgICAgICAgICBsaWtlQWN0aW9uPXtsaWtlQWN0aW9ufVxyXG4gICAgICAgICAgICAgIHNoYXJlQWN0aW9uPXtzaGFyZUFjdGlvbn1cclxuICAgICAgICAgICAgICBkZWxldGVBY3Rpb249e2RlbGV0ZUFjdGlvbn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PjpudWxsfVxyXG4gICAgICAgICAge3RhYj09NT9cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxyXG4gICAgICAgICAgICAgIHN0eWxlcy5mcmllbmRzX2xpc3QsXHJcbiAgICAgICAgICAgICAgc3R5bGVzLnNlY3Rpb25zX2NvbnRlbnRcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2FjY291bnREYXRhPy5mcmllbmRzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mcmllbmR9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT17ODB9XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsPXtpdGVtPy5wcm9maWxlUGhvdG99XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dD17aXRlbT8udXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mcmllbmRfbmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGZvbnRTaXplOiAyMCB9fT57aXRlbS5maXJzdE5hbWV9IHtpdGVtLmxhc3ROYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8UmF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtpdGVtLnJhdGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnI2ZhZGIxNCcsIGZvbnRTaXplOiAnMTVweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzaGFwZT1cInJvdW5kXCIgc2l6ZT1cInNtYWxsXCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogNSB9fSBvbkNsaWNrPXsoKSA9PiB1bmZyaWVuZChpdGVtLnVzZXJuYW1lKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgVW5mcmllbmRcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj46bnVsbFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAge3RhYj09Mz9cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5waG90b1NlY3Rpb259PlxyXG4gICAgICAgICAgICAgIDxQaG90b1NlY3Rpb24gdXNlcj17cGhvdG9zfSBvblJhdGVQb3N0PXtyYXRlUG9zdH0gLz48L2Rpdj46bnVsbFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAge3RhYj09ND9cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yYXRlZFNlY3Rpb259PlxyXG4gICAgICAgICAgICA8UmF0ZWRTZWN0aW9uIHVzZXI9e3sgcmVjZW50UmF0ZWQ6IHJhdGVzIH19IG9uUmF0ZVBvc3Q9e3JhdGVQb3N0fSAvPjwvZGl2PjpudWxsXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2JpbGVfYWN0aXZpdHl9PlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMubW9iaWxlX2FjdGl2aXR5X2xhYmVsfT5BQ1RJVklUWTwvaDI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY3JlYXRlUG9zdERpdn0+XHJcbiAgICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgICBzaXplPXs1MH1cclxuICAgICAgICAgICAgICAgICAgdXJsPXtwcm9maWxlVXJsfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLmNyZWF0ZVBvc3RJbnB1dH0gcGxhY2Vob2xkZXI9XCJXaGF0J3Mgb24geW91ciBtaW5kP1wiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXttb2RhbFBvcHVwfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8L2lucHV0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEZlZWRQb3N0c1xyXG4gICAgICAgICAgICAgIHVzZXI9e2FjY291bnREYXRhfVxyXG4gICAgICAgICAgICAgIG9uUmF0ZVBvc3Q9e3JhdGVQb3N0fVxyXG4gICAgICAgICAgICAgIG9uVXBkYXRlVGltZWxpbmU9e29uVXBkYXRlVGltZWxpbmV9XHJcbiAgICAgICAgICAgICAgbGlrZUFjdGlvbj17bGlrZUFjdGlvbn1cclxuICAgICAgICAgICAgICBkZWxldGVBY3Rpb249e2RlbGV0ZUFjdGlvbn1cclxuICAgICAgICAgICAgICBzaGFyZUFjdGlvbj17c2hhcmVBY3Rpb259XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxyXG4gICAgICAgICAgICAgIHN0eWxlcy5tb2JpbGVfZnJpZW5kc19saXN0XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxoMiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0+RlJJRU5EUzwvaDI+IFxyXG4gICAgICAgICAgICB7YWNjb3VudERhdGE/LmZyaWVuZHMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZyaWVuZH0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPXs4MH1cclxuICAgICAgICAgICAgICAgICAgICB1cmw9e2l0ZW0/LnByb2ZpbGVQaG90b31cclxuICAgICAgICAgICAgICAgICAgICB0ZXh0PXtpdGVtPy51c2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogMCB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZyaWVuZF9uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgZm9udFNpemU6IDIwIH19PntpdGVtLmZpcnN0TmFtZX0ge2l0ZW0ubGFzdE5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2l0ZW0ucmF0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICcjZmFkYjE0JywgZm9udFNpemU6ICcxNXB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHNoYXBlPVwicm91bmRcIiBzaXplPVwic21hbGxcIiBzdHlsZT17eyBtYXJnaW5MZWZ0OiA1IH19IG9uQ2xpY2s9eygpID0+IHVuZnJpZW5kKGl0ZW0udXNlcm5hbWUpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICBVbmZyaWVuZFxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2JpbGVfZ3JvdXBzfT5cclxuICAgICAgICAgICAgPGgyIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5HUk9VUFM8L2gyPiBcclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9iaWxlX21hcmtldHN9PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGgyIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5NYXJrZXRwbGFjZTwvaDI+IFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9iaWxlX3JhdGVzZWN0aW9ufT5cclxuICAgICAgICAgICAgPGgyIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5SQVRFUzwvaDI+IFxyXG4gICAgICAgICAgICA8UmF0ZWRTZWN0aW9uIHVzZXI9e3sgcmVjZW50UmF0ZWQ6IHJhdGVzIH19IG9uUmF0ZVBvc3Q9e3JhdGVQb3N0fSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2JpbGVfcGhvdG9zZWN0aW9ufT5cclxuICAgICAgICAgICAgPGgyIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5QSE9UT1M8L2gyPiBcclxuICAgICAgICAgICAgPFBob3RvU2VjdGlvbiB1c2VyPXtwaG90b3N9IG9uUmF0ZVBvc3Q9e3JhdGVQb3N0fSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgXHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yaWdodH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaH0+XHJcbiAgICAgICAgICAgIDxwPlNlYXJjaDo8L3A+XHJcbiAgICAgICAgICAgIDxTZWFyY2ggcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiBvblNlYXJjaD17b25TZWFyY2h9IHN0eWxlPXt7IHdpZHRoOiAyMDAsIGJvcmRlckNvbG9yOiAnd2hpdGUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcgfX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50cmVuZGluZ30+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50cmVuZGluZ1RleHR9PlRSRU5ESU5HPC9oMT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50cmVuZGluZ19jb250ZW50fT5cclxuICAgICAgICAgICAgICB7dHJlbmRpbmdEYXRhLmxlbmd0aCA+IDAgJiYgdHJlbmRpbmdEYXRhPy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLnRyZW5kaW5nQ29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+VHlwZToge2l0ZW0udHlwZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+RGF0ZToge21vbWVudChpdGVtLmNyZWF0ZWRBdCkuZm9ybWF0KCdNTU0gREQsIFlZWVkgLSBISDptbSBBJyl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkNvbnRlbnQ6IHtpdGVtLnRleHR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkNvbW1lbnRzOiB7aXRlbS5jb21tZW50c0NvdW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5SZWFjdGlvbnM6IHtpdGVtLnJlYWN0aW9uc0NvdW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5SYXRpbmc6IHtpdGVtLnJhdGluZ308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+U2hhcmU6IHtpdGVtLnNoYXJlc0NvdW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50cmVuZGluZ1RleHR9PlRPUCBSQVRFRDwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudHJlbmRpbmdfY29udGVudH0+XHJcbiAgICAgICAgICAgICAge3RvcFJhdGVkLmxlbmd0aCA+IDAgICYmIHRvcFJhdGVkPy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLnRyZW5kaW5nQ29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+VHlwZToge2l0ZW0udHlwZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+RGF0ZToge21vbWVudChpdGVtLmNyZWF0ZWRBdCkuZm9ybWF0KCdNTU0gREQsIFlZWVkgLSBISDptbSBBJyl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkNvbnRlbnQ6IHtpdGVtLnRleHR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkNvbW1lbnRzOiB7aXRlbS5jb21tZW50c0NvdW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5SZWFjdGlvbnM6IHtpdGVtLnJlYWN0aW9uc0NvdW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5SYXRpbmc6IHtpdGVtLnJhdGluZ308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+U2hhcmU6IHtpdGVtLnNoYXJlc0NvdW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxNb2RhbFdyYXBwZXJcclxuICAgICAgICAgIHRpdGxlPVwiQ3JlYXRlIFBvc3RcIlxyXG4gICAgICAgICAgc2hvd01vZGFsPXtwb3N0TW9kYWx9XHJcbiAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRQb3N0TW9kYWwoMCl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFBvc3RpbmdQb3N0XHJcbiAgICAgICAgICAgIGxvYWRpbmc9e3N0b3JhZ2UucG9zdGluZ0xvYWRpbmd9XHJcbiAgICAgICAgICAgIG9uUG9zdGluZz17Y3JlYXRlUG9zdH1cclxuICAgICAgICAgICAgbW9kYWxQb3B1cD17bW9kYWxQb3B1cH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgIDwvTW9kYWxXcmFwcGVyPlxyXG4gICAgICA8TW9kYWxXcmFwcGVyXHJcbiAgICAgICAgICB0aXRsZT1cIkVkaXQgUHJvZmlsZVwiXHJcbiAgICAgICAgICBzaG93TW9kYWw9e2VkaXRQcm9maWxlTW9kYWx9XHJcbiAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRFZGl0UHJvZmlsZU1vZGFsKDApfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxFZGl0UHJvZmlsZSBvblVwZGF0ZT17b25VcGRhdGV9IGxvYWRpbmc9e3N0b3JhZ2UucG9zdGluZ0xvYWRpbmd9Lz5cclxuICAgICAgPC9Nb2RhbFdyYXBwZXI+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9iaWxlX2hlYWRlcn0+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZXF1aXJlQXV0aChQcm9maWxlKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==