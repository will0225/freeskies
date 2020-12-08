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
/* harmony import */ var _components_profile_MarketSection__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/profile/MarketSection */ "./components/profile/MarketSection.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./edit */ "./containers/Profile/edit.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var components_header_Header__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! components/header/Header */ "./components/header/Header.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _components_common_LoadingWrapper__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../components/common/LoadingWrapper */ "./components/common/LoadingWrapper.js");
/* harmony import */ var _AddMarketItem__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./AddMarketItem */ "./containers/Profile/AddMarketItem.js");
/* harmony import */ var _EditMarketItem__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./EditMarketItem */ "./containers/Profile/EditMarketItem.js");


var _jsxFileName = "E:\\freeskies_fe_code\\containers\\Profile\\Profile.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

















 // import PostModal from '../../components/profile/PostModal';









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
    lineNumber: 31,
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
    0: topRatedModal,
    1: setTopRatedModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: trendingModal,
    1: setTrendingModal
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
    0: categories,
    1: setCategories
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: marketModal,
    1: setMarketModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: editMarketModal,
    1: setEditMarketModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: marketItem,
    1: setMarketItem
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_21__["useRouter"])();
  const {
    TabPane
  } = antd__WEBPACK_IMPORTED_MODULE_5__["Tabs"];
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    getAccount(auth.token);
    getTrending();
    getPhotos();
    getRates();
    getTopRated();
    getMarketPlaceForSale();
    getMarketPlaceToBuy();
  }, []);

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
          comments: [_objectSpread({}, comment_shared)]
        });
      } else if (comment_shared.commented.type == 'Comment') {
        return _objectSpread(_objectSpread({}, comment_shared.commented.commented), {}, {
          comments: [_objectSpread(_objectSpread({}, comment_shared.commented), {}, {
            comments: [comment_shared]
          })]
        });
      } else if (comment_shared.commented.type == 'Share') {
        return _objectSpread(_objectSpread({}, comment_shared.commented.shared), {}, {
          comments: [_objectSpread({}, comment_shared)]
        });
      } else {
        return _objectSpread(_objectSpread({}, comment_shared.commented), {}, {
          comments: [_objectSpread({}, comment_shared)]
        });
      }
    } else if (comment_shared.type === 'Post') {
      return comment_shared;
    } else if (comment_shared.type === 'Share') {
      return _objectSpread(_objectSpread({}, comment_shared.shared), {}, {
        shares: [_objectSpread({}, comment_shared)]
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

  const getMarketPlaceForSale = async () => {
    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_13__["setLoading"])(true));

    try {
      const request = await Object(_configs_API__WEBPACK_IMPORTED_MODULE_6__["default"])({
        method: 'post',
        url: '/accounts/marketplace/get-items-for-sale',
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
        dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_13__["setMarketSaleData"])(data));
        dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_13__["setLoading"])(false));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getMarketPlaceToBuy = async () => {
    try {
      const request = await Object(_configs_API__WEBPACK_IMPORTED_MODULE_6__["default"])({
        method: 'post',
        url: '/accounts/marketplace/get-items-to-buy',
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
        dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_13__["setMarketBuyData"])(data));
      }
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
    } else if (type === 'MarketplaceItemForSale') {
      url = '/marketplace/items-for-sale';
    } else if (type === 'MarketplaceItemToBuy') url = '/marketplace/items-to-buy';

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
        setPostModal(false);

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
      } else if (type === 'MarketplaceItemForSale') {
        url = '/marketplace/items-for-sale/rate';
      } else if (type === 'MarketplaceItemToBuy') {
        url = '/marketplace/items-to-buy/rate';
      }

      const request = await Object(_configs_API__WEBPACK_IMPORTED_MODULE_6__["default"])({
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
    } else if (type === 'MarketplaceItemForSale') {
      url = '/marketplace/items-for-sale/react';
    } else if (type === 'MarketplaceItemToBuy') {
      url = '/marketplace/items-to-buy/react';
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
        accountData.activity.map((element, index) => {
          if (element.id === id) {
            element.reactions[0].reaction == term;
            return element;
          }

          dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_13__["setAccountsData"])(accountData));
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
    } else if (type === 'MarketplaceItemForSale') {
      url = '/marketplace/items-for-sale/share';
    } else if (type === 'MarketplaceItemToBuy') {
      url = '/marketplace/items-to-buy/share';
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

        if (typeof element.comments == 'undefined') {
          element['comments'] = [addElement];
        } else {
          element.comments.push(addElement);
        }

        element.commentsCount += data.commentsCount;
        return element;
      }
    });
    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_13__["setAccountsData"])(accountData));
  };

  const onPosting = async requestData => {
    try {
      const request = await Object(_configs_API__WEBPACK_IMPORTED_MODULE_6__["default"])({
        method: 'post',
        url: '/photos',
        data: requestData,
        headers: {
          'x-token': auth.token
        }
      });
      const {
        data,
        status
      } = request;

      if (status === 201) {// dispatch(setPhotos([...storage.photosData, data]))
      } else if (status === 403) {// authServices.refreshToken(onPosting);
      } else {
        antd__WEBPACK_IMPORTED_MODULE_5__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deletePhoto = async photoId => {
    try {
      const request = await Object(_configs_API__WEBPACK_IMPORTED_MODULE_6__["default"])({
        method: 'delete',
        url: '/photos',
        data: {
          id: photoId
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
        const newPhotos = photos.filter(item => item.id !== photoId);
        console.log(newPhotos);
        setPhotos(newPhotos);
        antd__WEBPACK_IMPORTED_MODULE_5__["message"].success('Deleted successfully!');
      } else if (status === 403) {
        antd__WEBPACK_IMPORTED_MODULE_5__["message"].error('Please refresh page!');
      } else {
        antd__WEBPACK_IMPORTED_MODULE_5__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getCategories = async () => {
    try {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_13__["setLoading"])(true));
      const request = await Object(_configs_API__WEBPACK_IMPORTED_MODULE_6__["default"])({
        method: 'get',
        url: '/marketplace/categories',
        headers: {
          'x-token': auth.token
        }
      });
      const {
        data,
        status
      } = request;

      if (status === 200) {
        dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_13__["setLoading"])(false));
        setCategories(data);
      } else if (status === 403) {
        antd__WEBPACK_IMPORTED_MODULE_5__["message"].error('Please refresh page!');
      } else {
        antd__WEBPACK_IMPORTED_MODULE_5__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addMarketItemModal = async () => {
    getCategories();
    setMarketModal(true);
  };

  const addMarketItem = async (requestData, saleOrbuy) => {
    try {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_13__["setLoading"])(true));
      const request = await Object(_configs_API__WEBPACK_IMPORTED_MODULE_6__["default"])({
        method: 'post',
        url: saleOrbuy ? '/marketplace/items-for-sale' : '/marketplace/items-to-buy',
        data: requestData,
        headers: {
          'x-token': auth.token
        }
      });
      const {
        data,
        status
      } = request;

      if (status === 201) {
        if (saleOrbuy) {// dispatch(setMarketSaleData([...storage.marketSaleData, data]))
        } else {// dispatch(setMarketBuyData([...storage.marketBuyData, data]))
          }

        setMarketModal(false);
        antd__WEBPACK_IMPORTED_MODULE_5__["message"].success('Successfully Added');
      } else {
        antd__WEBPACK_IMPORTED_MODULE_5__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
      }

      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_13__["setLoading"])(false));
      return await request;
    } catch (error) {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_13__["setLoading"])(false));
    }
  };

  const editItem = async (item_id, saleOrbuy) => {
    return;

    try {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_13__["setLoading"])(true));
      const request = await Object(_configs_API__WEBPACK_IMPORTED_MODULE_6__["default"])({
        method: 'post',
        url: saleOrbuy ? '/marketplace/items-for-sale/get' : '/marketplace/items-to-buy/get',
        data: {
          id: item_id
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
        if (saleOrbuy) {// dispatch(setMarketSaleData([...storage.marketSaleData, data]))
        } else {// dispatch(setMarketBuyData([...storage.marketBuyData, data]))
          }

        setEditMarketModal(true);
      } else {
        antd__WEBPACK_IMPORTED_MODULE_5__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
      }

      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_13__["setLoading"])(false));
      return await request;
    } catch (error) {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_13__["setLoading"])(false));
    }
  };

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
  const coverUrl = accountData !== null && accountData !== undefined ? "url(https://www.freeskies.com/static/".concat((_accountData$profileB = accountData.profileBackgroundImage) === null || _accountData$profileB === void 0 ? void 0 : _accountData$profileB.src, ")") : null;
  const profileUrl = accountData !== null && accountData !== undefined ? "".concat((_accountData$profileP = accountData.profilePhoto) === null || _accountData$profileP === void 0 ? void 0 : _accountData$profileP.src) : null; // const roundRating = Math.round(accountData?.rating || 0)

  const roundRating = accountData === null || accountData === void 0 ? void 0 : accountData.rating;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 806,
      columnNumber: 5
    }
  }, __jsx(components_header_Header__WEBPACK_IMPORTED_MODULE_20__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 807,
      columnNumber: 7
    }
  })), __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 810,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.left,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 811,
      columnNumber: 7
    }
  }, typeof accountData !== 'undefined' ? __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.profile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 813,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 814,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.avatar_image,
    onClick: () => setEditProfileModal(true),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 815,
      columnNumber: 14
    }
  }, __jsx(_components_common_Avatar__WEBPACK_IMPORTED_MODULE_14__["default"], {
    size: isMobile ? 100 : 140,
    url: profileUrl,
    text: accountData === null || accountData === void 0 ? void 0 : accountData.username,
    username: accountData === null || accountData === void 0 ? void 0 : accountData.username,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 816,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.user_content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 825,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.user_info,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 826,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.heade_section,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 827,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.left_side,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 828,
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
      lineNumber: 829,
      columnNumber: 19
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 830,
      columnNumber: 21
    }
  }, "".concat(accountData === null || accountData === void 0 ? void 0 : accountData.firstName, " ").concat(accountData === null || accountData === void 0 ? void 0 : accountData.lastName)))), __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.right_side,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 833,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.rating,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 834,
      columnNumber: 19
    }
  }, __jsx("span", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.rating_text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 840,
      columnNumber: 21
    }
  }, roundRating))))))) : __jsx("div", {
    className: "border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 850,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "animate-pulse flex space-x-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 851,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "rounded-full bg-gray-400 h-12 w-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 852,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "flex-1 space-y-4 py-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 853,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "h-4 bg-gray-400 rounded w-3/4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 854,
      columnNumber: 19
    }
  }), __jsx("div", {
    className: "space-y-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 855,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "h-4 bg-gray-400 rounded",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 856,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "h-4 bg-gray-400 rounded w-5/6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 857,
      columnNumber: 21
    }
  }))))), __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.profile_content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 863,
      columnNumber: 9
    }
  }, __jsx("ul", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("flex border-b", _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.profileTabs),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 864,
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
      lineNumber: 865,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "inline-block py-2 px-4 text-red-500 hover:text-red-800 font-semibold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 866,
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
      lineNumber: 868,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "inline-block py-2 px-4 text-red-500 hover:text-red-800 font-semibold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 869,
      columnNumber: 15
    }
  }, "Groups")), __jsx("li", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('mr-1', _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.tab),
    onClick: () => {
      setTab(6);
      getMarketPlaceForSale();
      getMarketPlaceToBuy();
    },
    style: {
      borderBottom: tab == 6 ? '5px solid white' : 'none'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 871,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "inline-block py-2 px-4 text-red-500 hover:text-red-800 font-semibold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 872,
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
      lineNumber: 874,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "inline-block py-2 px-4 text-red-500 hover:text-red-800 font-semibold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 875,
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
      lineNumber: 877,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "inline-block py-2 px-4 text-red-500 hover:text-red-800 font-semibold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 878,
      columnNumber: 15
    }
  }, "RATED")), __jsx("li", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('mr-1', _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.tab),
    onClick: () => setTab(5),
    style: {
      borderBottom: tab == 5 ? '5px solid white' : 'none'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 880,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "inline-block py-2 px-4 text-red-500 hover:text-red-800 font-semibold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 881,
      columnNumber: 15
    }
  }, "FRIENDS"))), tab == 1 ? __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.activity,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 888,
      columnNumber: 11
    }
  }, __jsx("h2", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mobile_activity_label,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 889,
      columnNumber: 13
    }
  }, "ACTIVITY"), __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.createPostDiv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 890,
      columnNumber: 13
    }
  }, __jsx(_components_common_Avatar__WEBPACK_IMPORTED_MODULE_14__["default"], {
    size: 50,
    url: profileUrl,
    username: accountData === null || accountData === void 0 ? void 0 : accountData.username,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 891,
      columnNumber: 15
    }
  }), __jsx("input", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.createPostInput,
    placeholder: "What's on your mind?",
    onClick: modalPopup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 896,
      columnNumber: 15
    }
  })), __jsx(components_profile_FeedPosts__WEBPACK_IMPORTED_MODULE_8__["default"], {
    user: accountData,
    onRatePost: ratePost,
    onUpdateTimeline: onUpdateTimeline,
    likeAction: likeAction,
    shareAction: shareAction,
    deleteAction: deleteAction,
    auth: auth,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 901,
      columnNumber: 13
    }
  })) : null, tab == 5 ? __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.friends_list, _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.sections_content),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 912,
      columnNumber: 11
    }
  }, accountData === null || accountData === void 0 ? void 0 : accountData.friends.map((item, index) => {
    return __jsx("div", {
      className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.friend,
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 921,
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
        lineNumber: 922,
        columnNumber: 19
      }
    }), __jsx("div", {
      className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.friend_name,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 928,
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
        lineNumber: 929,
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
        lineNumber: 930,
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
        lineNumber: 934,
        columnNumber: 21
      }
    }, "Unfriend")));
  })) : null, tab == 3 ? __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.photoSection,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 945,
      columnNumber: 13
    }
  }, __jsx(components_profile_PhotoSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
    user: photos,
    onRatePost: ratePost,
    onPosting: onPosting,
    deletePhoto: deletePhoto,
    onUpdateTimeline: onUpdateTimeline,
    likeAction: likeAction,
    shareAction: shareAction,
    auth: auth,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 946,
      columnNumber: 15
    }
  })) : null, tab == 4 ? __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ratedSection,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 950,
      columnNumber: 13
    }
  }, __jsx(components_profile_RatedSection__WEBPACK_IMPORTED_MODULE_10__["default"], {
    user: {
      recentRated: rates
    },
    onRatePost: ratePost,
    likeAction: likeAction,
    shareAction: shareAction,
    auth: auth,
    onUpdateTimeline: onUpdateTimeline,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 951,
      columnNumber: 13
    }
  })) : null, tab == 6 ? __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.marketPlaceSection,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 957,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Tabs"], {
    defaultActiveKey: "1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 958,
      columnNumber: 17
    }
  }, __jsx(TabPane, {
    tab: __jsx("span", {
      style: {
        fontSize: 20
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 961,
        columnNumber: 25
      }
    }, "Sale"),
    key: "1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 959,
      columnNumber: 21
    }
  }, __jsx(_components_common_LoadingWrapper__WEBPACK_IMPORTED_MODULE_22__["default"], {
    loading: storage.loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 967,
      columnNumber: 23
    }
  }, __jsx(_components_profile_MarketSection__WEBPACK_IMPORTED_MODULE_17__["default"], {
    data: storage.marketSaleData,
    editItem: editItem,
    sale: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 968,
      columnNumber: 25
    }
  }))), __jsx(TabPane, {
    tab: __jsx("span", {
      style: {
        fontSize: 20
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 973,
        columnNumber: 25
      }
    }, "Buy"),
    key: "2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 971,
      columnNumber: 21
    }
  }, __jsx(_components_profile_MarketSection__WEBPACK_IMPORTED_MODULE_17__["default"], {
    data: storage.marketBuyData,
    editItem: editItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 979,
      columnNumber: 23
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    className: "btn btn-primary",
    style: {
      marginTop: 10
    },
    onClick: addMarketItemModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 982,
      columnNumber: 17
    }
  }, "Add Marketplace Item")) : null, __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mobile_activity,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 988,
      columnNumber: 11
    }
  }, __jsx("h2", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mobile_activity_label,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 989,
      columnNumber: 13
    }
  }, "ACTIVITY"), __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.createPostDiv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 990,
      columnNumber: 13
    }
  }, __jsx(_components_common_Avatar__WEBPACK_IMPORTED_MODULE_14__["default"], {
    size: 50,
    url: profileUrl,
    username: accountData === null || accountData === void 0 ? void 0 : accountData.username,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 991,
      columnNumber: 15
    }
  }), __jsx("input", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.createPostInput,
    placeholder: "What's on your mind?",
    onClick: modalPopup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 996,
      columnNumber: 15
    }
  })), __jsx(components_profile_FeedPosts__WEBPACK_IMPORTED_MODULE_8__["default"], {
    user: accountData,
    onRatePost: ratePost,
    onUpdateTimeline: onUpdateTimeline,
    likeAction: likeAction,
    deleteAction: deleteAction,
    shareAction: shareAction,
    auth: auth,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1001,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mobile_friends_list),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1011,
      columnNumber: 11
    }
  }, __jsx("h2", {
    style: {
      fontWeight: 'bold'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1016,
      columnNumber: 13
    }
  }, "FRIENDS"), accountData === null || accountData === void 0 ? void 0 : accountData.friends.map((item, index) => {
    return __jsx("div", {
      className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.friend,
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1019,
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
        lineNumber: 1020,
        columnNumber: 19
      }
    }), __jsx("div", {
      className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.friend_name,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1026,
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
        lineNumber: 1027,
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
        lineNumber: 1028,
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
        lineNumber: 1032,
        columnNumber: 21
      }
    }, "Unfriend")));
  })), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1042,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mobile_groups,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1043,
      columnNumber: 11
    }
  }, __jsx("h2", {
    style: {
      fontWeight: 'bold'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1044,
      columnNumber: 13
    }
  }, "GROUPS")), __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mobile_marketPlaceSection,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1047,
      columnNumber: 11
    }
  }, __jsx("h2", {
    style: {
      fontWeight: 'bold'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1048,
      columnNumber: 13
    }
  }, "Marketplace"), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    className: "btn btn-primary",
    style: {
      marginTop: 10
    },
    onClick: addMarketItemModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1049,
      columnNumber: 13
    }
  }, "Add Marketplace Item"), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Tabs"], {
    defaultActiveKey: "1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1052,
      columnNumber: 13
    }
  }, __jsx(TabPane, {
    tab: __jsx("span", {
      style: {
        fontSize: 20
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1055,
        columnNumber: 19
      }
    }, "Sale"),
    key: "1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1053,
      columnNumber: 15
    }
  }, __jsx(_components_common_LoadingWrapper__WEBPACK_IMPORTED_MODULE_22__["default"], {
    loading: storage.loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1061,
      columnNumber: 17
    }
  }, __jsx(_components_profile_MarketSection__WEBPACK_IMPORTED_MODULE_17__["default"], {
    data: storage.marketSaleData,
    editItem: editItem,
    sale: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1062,
      columnNumber: 19
    }
  }))), __jsx(TabPane, {
    tab: __jsx("span", {
      style: {
        fontSize: 20
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1067,
        columnNumber: 19
      }
    }, "Buy"),
    key: "2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1065,
      columnNumber: 15
    }
  }, __jsx(_components_profile_MarketSection__WEBPACK_IMPORTED_MODULE_17__["default"], {
    data: storage.marketBuyData,
    editItem: editItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1073,
      columnNumber: 17
    }
  })))), __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mobile_ratesection,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1078,
      columnNumber: 11
    }
  }, __jsx("h2", {
    style: {
      fontWeight: 'bold'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1079,
      columnNumber: 13
    }
  }, "RATED"), __jsx(components_profile_RatedSection__WEBPACK_IMPORTED_MODULE_10__["default"], {
    user: {
      recentRated: rates
    },
    onRatePost: ratePost,
    likeAction: likeAction,
    shareAction: shareAction,
    auth: auth,
    onUpdateTimeline: onUpdateTimeline,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1080,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mobile_photosection,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1085,
      columnNumber: 11
    }
  }, __jsx("h2", {
    style: {
      fontWeight: 'bold'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1086,
      columnNumber: 13
    }
  }, "PHOTOS"), __jsx(components_profile_PhotoSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
    user: photos,
    onRatePost: ratePost,
    onPosting: onPosting,
    deletePhoto: deletePhoto,
    likeAction: likeAction,
    shareAction: shareAction,
    onUpdateTimeline: onUpdateTimeline,
    auth: auth,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1087,
      columnNumber: 13
    }
  })))), __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.right,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1095,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.search,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1096,
      columnNumber: 11
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1097,
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
      lineNumber: 1098,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.trending,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1100,
      columnNumber: 11
    }
  }, __jsx("h1", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.trendingText,
    onClick: () => setTrendingModal(true),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1101,
      columnNumber: 13
    }
  }, "TRENDING"), __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.trending_content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1102,
      columnNumber: 13
    }
  }, trendingData.length > 0 && (trendingData === null || trendingData === void 0 ? void 0 : trendingData.map((item, index) => {
    return __jsx("div", {
      key: index,
      className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.trendingContent,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1105,
        columnNumber: 19
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1106,
        columnNumber: 21
      }
    }, "Type: ", item.type), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1107,
        columnNumber: 21
      }
    }, "Date: ", moment__WEBPACK_IMPORTED_MODULE_19___default()(item.createdAt).format('MMM DD, YYYY - HH:mm A')), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1108,
        columnNumber: 21
      }
    }, "Content: ", item.text), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1109,
        columnNumber: 21
      }
    }, "Comments: ", item.commentsCount), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1110,
        columnNumber: 21
      }
    }, "Reactions: ", item.reactionsCount), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1111,
        columnNumber: 21
      }
    }, "Rating: ", item.rating), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1112,
        columnNumber: 21
      }
    }, "Share: ", item.sharesCount), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1113,
        columnNumber: 21
      }
    }));
  }))), __jsx("h1", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.trendingText,
    onClick: () => setTopRatedModal(true),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1118,
      columnNumber: 13
    }
  }, "TOP RATED"), __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.trending_content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1119,
      columnNumber: 13
    }
  }, topRated.length > 0 && (topRated === null || topRated === void 0 ? void 0 : topRated.map((item, index) => {
    return __jsx("div", {
      key: index,
      className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.trendingContent,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1122,
        columnNumber: 19
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1123,
        columnNumber: 21
      }
    }, "Type: ", item.type), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1124,
        columnNumber: 21
      }
    }, "Date: ", moment__WEBPACK_IMPORTED_MODULE_19___default()(item.createdAt).format('MMM DD, YYYY - HH:mm A')), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1125,
        columnNumber: 21
      }
    }, "Content: ", item.text), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1126,
        columnNumber: 21
      }
    }, "Comments: ", item.commentsCount), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1127,
        columnNumber: 21
      }
    }, "Reactions: ", item.reactionsCount), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1128,
        columnNumber: 21
      }
    }, "Rating: ", item.rating), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1129,
        columnNumber: 21
      }
    }, "Share: ", item.sharesCount), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1130,
        columnNumber: 21
      }
    }));
  }))))), __jsx(_components_common_ModalWrapper__WEBPACK_IMPORTED_MODULE_16__["default"], {
    title: "Create Post",
    showModal: postModal,
    onClose: () => setPostModal(false),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1138,
      columnNumber: 7
    }
  }, __jsx(components_profile_PostingPost__WEBPACK_IMPORTED_MODULE_9__["default"], {
    loading: storage.postingLoading,
    onPosting: createPost,
    modalPopup: modalPopup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1143,
      columnNumber: 11
    }
  })), __jsx(_components_common_ModalWrapper__WEBPACK_IMPORTED_MODULE_16__["default"], {
    title: "Edit Profile",
    showModal: editProfileModal,
    onClose: () => setEditProfileModal(false),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1149,
      columnNumber: 7
    }
  }, __jsx(_edit__WEBPACK_IMPORTED_MODULE_18__["default"], {
    onUpdate: onUpdate,
    loading: storage.postingLoading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1154,
      columnNumber: 11
    }
  })), __jsx(_components_common_ModalWrapper__WEBPACK_IMPORTED_MODULE_16__["default"], {
    title: "Top Rated",
    showModal: topRatedModal,
    onClose: () => setTopRatedModal(false),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1156,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.trending_content_modal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1161,
      columnNumber: 11
    }
  }, topRated.length > 0 && (topRated === null || topRated === void 0 ? void 0 : topRated.map((item, index) => {
    return __jsx("div", {
      key: index,
      className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.trendingContent,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1164,
        columnNumber: 19
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1165,
        columnNumber: 21
      }
    }, "Type: ", item.type), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1166,
        columnNumber: 21
      }
    }, "Date: ", moment__WEBPACK_IMPORTED_MODULE_19___default()(item.createdAt).format('MMM DD, YYYY - HH:mm A')), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1167,
        columnNumber: 21
      }
    }, "Content: ", item.text), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1168,
        columnNumber: 21
      }
    }, "Comments: ", item.commentsCount), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1169,
        columnNumber: 21
      }
    }, "Reactions: ", item.reactionsCount), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1170,
        columnNumber: 21
      }
    }, "Rating: ", item.rating), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1171,
        columnNumber: 21
      }
    }, "Share: ", item.sharesCount), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1172,
        columnNumber: 21
      }
    }));
  })))), __jsx(_components_common_ModalWrapper__WEBPACK_IMPORTED_MODULE_16__["default"], {
    title: "Trending",
    showModal: trendingModal,
    onClose: () => setTrendingModal(false),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1178,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.trending_content_modal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1183,
      columnNumber: 11
    }
  }, trendingData.length > 0 && (trendingData === null || trendingData === void 0 ? void 0 : trendingData.map((item, index) => {
    return __jsx("div", {
      key: index,
      className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.trendingContent,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1186,
        columnNumber: 19
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1187,
        columnNumber: 21
      }
    }, "Type: ", item.type), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1188,
        columnNumber: 21
      }
    }, "Date: ", moment__WEBPACK_IMPORTED_MODULE_19___default()(item.createdAt).format('MMM DD, YYYY - HH:mm A')), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1189,
        columnNumber: 21
      }
    }, "Content: ", item.text), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1190,
        columnNumber: 21
      }
    }, "Comments: ", item.commentsCount), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1191,
        columnNumber: 21
      }
    }, "Reactions: ", item.reactionsCount), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1192,
        columnNumber: 21
      }
    }, "Rating: ", item.rating), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1193,
        columnNumber: 21
      }
    }, "Share: ", item.sharesCount), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1194,
        columnNumber: 21
      }
    }));
  })))), __jsx(_components_common_ModalWrapper__WEBPACK_IMPORTED_MODULE_16__["default"], {
    title: "Add Market Item",
    showModal: marketModal,
    onClose: () => setMarketModal(false),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1200,
      columnNumber: 7
    }
  }, __jsx(_AddMarketItem__WEBPACK_IMPORTED_MODULE_23__["default"], {
    auth: auth,
    onUpdate: addMarketItem,
    loading: storage.loading,
    categories: categories,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1205,
      columnNumber: 10
    }
  })), __jsx(_components_common_ModalWrapper__WEBPACK_IMPORTED_MODULE_16__["default"], {
    title: "Add Market Item",
    showModal: editMarketModal,
    onClose: () => setEditMarketModal(false),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1207,
      columnNumber: 7
    }
  }, __jsx(_EditMarketItem__WEBPACK_IMPORTED_MODULE_24__["default"], {
    auth: auth,
    onUpdate: _EditMarketItem__WEBPACK_IMPORTED_MODULE_24__["default"],
    loading: storage.loading,
    categories: categories,
    item: marketItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1212,
      columnNumber: 10
    }
  })), __jsx(_components_common_ModalWrapper__WEBPACK_IMPORTED_MODULE_16__["default"], {
    title: "Market Item Detail",
    showModal: detailMarketModal,
    onClose: () => setDetailMarketModal(false),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1214,
      columnNumber: 7
    }
  }, __jsx(_EditMarketItem__WEBPACK_IMPORTED_MODULE_24__["default"], {
    auth: auth,
    onUpdate: _EditMarketItem__WEBPACK_IMPORTED_MODULE_24__["default"],
    loading: storage.loading,
    categories: categories,
    item: marketItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1219,
      columnNumber: 10
    }
  }))), __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mobile_header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1223,
      columnNumber: 5
    }
  }, __jsx(components_header_Header__WEBPACK_IMPORTED_MODULE_20__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1224,
      columnNumber: 7
    }
  })));
}

_s(Profile, "nwOCMDm4BXtQdlQlfEoLdn108hM=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_21__["useRouter"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9Qcm9maWxlL1Byb2ZpbGUuanMiXSwibmFtZXMiOlsiU2VhcmNoIiwiSW5wdXQiLCJzdWZmaXgiLCJmb250U2l6ZSIsImNvbG9yIiwib25TZWFyY2giLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJQcm9maWxlIiwiYXV0aFNlcnZpY2VzIiwiYXV0aCIsImZpbGVMaXN0Iiwic2V0RmlsZUxpc3QiLCJ1c2VTdGF0ZSIsInN0b3JhZ2UiLCJkaXNwYXRjaCIsInVzZUNvbnRleHQiLCJQcm9maWxlQ29udGV4dCIsInRhYiIsInNldFRhYiIsInBvc3RNb2RhbCIsInNldFBvc3RNb2RhbCIsImVkaXRQcm9maWxlTW9kYWwiLCJzZXRFZGl0UHJvZmlsZU1vZGFsIiwidG9wUmF0ZWRNb2RhbCIsInNldFRvcFJhdGVkTW9kYWwiLCJ0cmVuZGluZ01vZGFsIiwic2V0VHJlbmRpbmdNb2RhbCIsInBob3RvcyIsInNldFBob3RvcyIsInJhdGVzIiwic2V0UmF0ZXMiLCJ0b3BSYXRlZCIsInNldFRvcFJhdGVkIiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJtYXJrZXRNb2RhbCIsInNldE1hcmtldE1vZGFsIiwiZWRpdE1hcmtldE1vZGFsIiwic2V0RWRpdE1hcmtldE1vZGFsIiwibWFya2V0SXRlbSIsInNldE1hcmtldEl0ZW0iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJUYWJQYW5lIiwiVGFicyIsInVzZUVmZmVjdCIsImdldEFjY291bnQiLCJ0b2tlbiIsImdldFRyZW5kaW5nIiwiZ2V0UGhvdG9zIiwiZ2V0UmF0ZXMiLCJnZXRUb3BSYXRlZCIsImdldE1hcmtldFBsYWNlRm9yU2FsZSIsImdldE1hcmtldFBsYWNlVG9CdXkiLCJnZXRGcmllbmRzIiwid2l0aG91dExvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVxdWVzdCIsIkFQSSIsIm1ldGhvZCIsInVybCIsImhlYWRlcnMiLCJkYXRhIiwic3RhdHVzIiwic2V0RnJpZW5kc0RhdGEiLCJyZWZyZXNoVG9rZW4iLCJtZXNzYWdlIiwiZXJyb3IiLCJhY3Rpdml0eSIsIm1hcCIsImVsZW1lbnQiLCJmaWx0ZXJBY2NvdW50RGF0YSIsInNldEFjY291bnRzRGF0YSIsImNvbW1lbnRfc2hhcmVkIiwidHlwZSIsImNvbW1lbnRlZCIsImNvbW1lbnRzIiwic2hhcmVkIiwic2hhcmVzIiwic2V0VHJlbmRpbmdEYXRhIiwic2V0TWFya2V0U2FsZURhdGEiLCJzZXRNYXJrZXRCdXlEYXRhIiwiZGVsZXRlQWN0aW9uIiwiaWQiLCJuZXdBY3Rpdml0eSIsImFjY291bnREYXRhIiwiZmlsdGVyIiwiaXRlbSIsInN1Y2Nlc3MiLCJjcmVhdGVQb3N0IiwiZGF0YUZvclJlcXVlc3QiLCJjb21tZW50c0NvdW50IiwicmF0aW5nIiwicmVhY3Rpb25zIiwicmVhY3Rpb25zQ291bnQiLCJzaGFyZXNDb3VudCIsInJhdGVQb3N0IiwicG9zdElkIiwicmF0ZSIsImhhbmRsZVVwbG9hZENvdmVyIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImZvckVhY2giLCJmaWxlIiwiYXBwZW5kIiwib3JpZ2luRmlsZU9iaiIsImhhbmRsZVVwbG9hZEF2YXRhciIsIm1vZGFsUG9wdXAiLCJvblVwZGF0ZSIsImxhc3ROYW1lIiwicHJvZmlsZVBob3RvIiwicHJvZmlsZUJhY2tncm91bmRJbWFnZSIsInVuZnJpZW5kIiwidXNlcm5hbWUiLCJsaWtlQWN0aW9uIiwidGVybSIsInJlYWN0ZWQiLCJyZWFjdGlvbiIsImluZGV4IiwiRXJyb3IiLCJzaGFyZUFjdGlvbiIsInNhdHVzIiwib25VcGRhdGVUaW1lbGluZSIsImFkZEVsZW1lbnQiLCJhY2NvdW50IiwicHVzaCIsIm9uUG9zdGluZyIsInJlcXVlc3REYXRhIiwiZGVsZXRlUGhvdG8iLCJwaG90b0lkIiwibmV3UGhvdG9zIiwiZ2V0Q2F0ZWdvcmllcyIsImFkZE1hcmtldEl0ZW1Nb2RhbCIsImFkZE1hcmtldEl0ZW0iLCJzYWxlT3JidXkiLCJlZGl0SXRlbSIsIml0ZW1faWQiLCJ0cmVuZGluZ0RhdGEiLCJmcmllbmREYXRhIiwiaXNNb2JpbGUiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImltYWdlVXBsb2FkUGFyYW1zIiwib25SZW1vdmUiLCJpbmRleE9mIiwibmV3RmlsZUxpc3QiLCJzbGljZSIsInJlc3VsdCIsInNwbGljZSIsImJlZm9yZVVwbG9hZCIsImNvdmVyVXJsIiwidW5kZWZpbmVkIiwic3JjIiwicHJvZmlsZVVybCIsInJvdW5kUmF0aW5nIiwic3R5bGVzIiwiaGVhZGVyIiwiY29udGFpbmVyIiwibGVmdCIsInByb2ZpbGUiLCJhdmF0YXIiLCJhdmF0YXJfaW1hZ2UiLCJ1c2VyX2NvbnRlbnQiLCJ1c2VyX2luZm8iLCJoZWFkZV9zZWN0aW9uIiwibGVmdF9zaWRlIiwiZnVsbG5hbWUiLCJjdXJzb3IiLCJmaXJzdE5hbWUiLCJyaWdodF9zaWRlIiwicmF0aW5nX3RleHQiLCJwcm9maWxlX2NvbnRlbnQiLCJjbGFzc25hbWVzIiwicHJvZmlsZVRhYnMiLCJib3JkZXJCb3R0b20iLCJtb2JpbGVfYWN0aXZpdHlfbGFiZWwiLCJjcmVhdGVQb3N0RGl2IiwiY3JlYXRlUG9zdElucHV0IiwiZnJpZW5kc19saXN0Iiwic2VjdGlvbnNfY29udGVudCIsImZyaWVuZHMiLCJmcmllbmQiLCJtYXJnaW5SaWdodCIsImZyaWVuZF9uYW1lIiwidGV4dEFsaWduIiwibWFyZ2luTGVmdCIsInBob3RvU2VjdGlvbiIsInJhdGVkU2VjdGlvbiIsInJlY2VudFJhdGVkIiwibWFya2V0UGxhY2VTZWN0aW9uIiwibG9hZGluZyIsIm1hcmtldFNhbGVEYXRhIiwibWFya2V0QnV5RGF0YSIsIm1hcmdpblRvcCIsIm1vYmlsZV9hY3Rpdml0eSIsIm1vYmlsZV9mcmllbmRzX2xpc3QiLCJmb250V2VpZ2h0IiwibW9iaWxlX2dyb3VwcyIsIm1vYmlsZV9tYXJrZXRQbGFjZVNlY3Rpb24iLCJtb2JpbGVfcmF0ZXNlY3Rpb24iLCJtb2JpbGVfcGhvdG9zZWN0aW9uIiwicmlnaHQiLCJzZWFyY2giLCJ3aWR0aCIsImJvcmRlckNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwidHJlbmRpbmciLCJ0cmVuZGluZ1RleHQiLCJ0cmVuZGluZ19jb250ZW50IiwibGVuZ3RoIiwidHJlbmRpbmdDb250ZW50IiwibW9tZW50IiwiY3JlYXRlZEF0IiwiZm9ybWF0IiwidGV4dCIsInBvc3RpbmdMb2FkaW5nIiwidHJlbmRpbmdfY29udGVudF9tb2RhbCIsIkVkaXRNYXJrZXRJdGVtIiwiZGV0YWlsTWFya2V0TW9kYWwiLCJzZXREZXRhaWxNYXJrZXRNb2RhbCIsIm1vYmlsZV9oZWFkZXIiLCJyZXF1aXJlQXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNO0FBQUVBO0FBQUYsSUFBYUMsMENBQW5COztBQUVBLE1BQU1DLE1BQU0sR0FDVixNQUFDLCtEQUFEO0FBQ0UsT0FBSyxFQUFFO0FBQ0xDLFlBQVEsRUFBRSxFQURMO0FBRUxDLFNBQUssRUFBRTtBQUZGLEdBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURGOztBQVNBLE1BQU1DLFFBQVEsR0FBR0MsS0FBSyxJQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWixDQUExQjs7QUFFQSxTQUFTRyxPQUFULENBQWlCO0FBQUNDLGNBQUQ7QUFBZ0JDO0FBQWhCLENBQWpCLEVBQXlDO0FBQUE7O0FBQUE7O0FBQ3ZDLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEyQkMsc0RBQVEsQ0FBQyxFQUFELENBQXpDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFB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QUFDdk4sT0FBRCxDQUExQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLjQ3ODA1M2Y0MGE2MzkzNGJjN2E2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL3Byb2ZpbGUubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgQ2FtZXJhT3V0bGluZWQsICBIb21lT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgVXBsb2FkLCBtZXNzYWdlLCBJbnB1dCwgVGFicywgUmF0ZSB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgQVBJIGZyb20gJy4uLy4uL2NvbmZpZ3MvQVBJJztcclxuaW1wb3J0IFBob3RvU2VjdGlvbiBmcm9tICdjb21wb25lbnRzL3Byb2ZpbGUvUGhvdG9TZWN0aW9uJztcclxuaW1wb3J0IEZlZWRQb3N0cyBmcm9tICdjb21wb25lbnRzL3Byb2ZpbGUvRmVlZFBvc3RzJztcclxuaW1wb3J0IFBvc3RpbmdQb3N0IGZyb20gJ2NvbXBvbmVudHMvcHJvZmlsZS9Qb3N0aW5nUG9zdCc7XHJcbmltcG9ydCBSYXRlZFNlY3Rpb24gZnJvbSAnY29tcG9uZW50cy9wcm9maWxlL1JhdGVkU2VjdGlvbic7XHJcbmltcG9ydCByZXF1aXJlQXV0aCBmcm9tICdoZWxwZXJzL2hvYy9yZXF1aXJlQXV0aCc7XHJcbmltcG9ydCB7IFByb2ZpbGVDb250ZXh0IH0gZnJvbSAnLi9zdG9yYWdlL1Byb2ZpbGVDb250ZXh0JztcclxuaW1wb3J0IHsgc2V0TG9hZGluZywgc2V0RnJpZW5kc0RhdGEsIHNldEFjY291bnRzRGF0YSwgc2V0VHJlbmRpbmdEYXRhLCBzZXRNYXJrZXRCdXlEYXRhLCBzZXRNYXJrZXRTYWxlRGF0YSB9IGZyb20gJy4vYWN0aW9ucyc7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb24vQXZhdGFyJztcclxuaW1wb3J0IFJhdGluZyAgZnJvbSAncmVhY3QtcmF0aW5nJztcclxuaW1wb3J0IE1vZGFsV3JhcHBlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9Nb2RhbFdyYXBwZXInO1xyXG5pbXBvcnQgTWFya2V0U2VjdGlvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Byb2ZpbGUvTWFya2V0U2VjdGlvbic7XHJcbi8vIGltcG9ydCBQb3N0TW9kYWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wcm9maWxlL1Bvc3RNb2RhbCc7XHJcbmltcG9ydCBFZGl0UHJvZmlsZSBmcm9tICcuL2VkaXQnO1xyXG5pbXBvcnQgeyBBdWRpb091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTG9hZGluZ1dyYXBwZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb24vTG9hZGluZ1dyYXBwZXInO1xyXG5pbXBvcnQgQWRkTWFya2V0SXRlbSBmcm9tICcuL0FkZE1hcmtldEl0ZW0nO1xyXG5pbXBvcnQgRWRpdE1hcmtldEl0ZW0gZnJvbSAnLi9FZGl0TWFya2V0SXRlbSc7XHJcblxyXG5jb25zdCB7IFNlYXJjaCB9ID0gSW5wdXQ7XHJcblxyXG5jb25zdCBzdWZmaXggPSAoXHJcbiAgPEF1ZGlvT3V0bGluZWRcclxuICAgIHN0eWxlPXt7XHJcbiAgICAgIGZvbnRTaXplOiAxNixcclxuICAgICAgY29sb3I6ICcjMTg5MGZmJyxcclxuICAgIH19XHJcbiAgLz5cclxuKTtcclxuXHJcbmNvbnN0IG9uU2VhcmNoID0gdmFsdWUgPT4gY29uc29sZS5sb2codmFsdWUpO1xyXG5cclxuZnVuY3Rpb24gUHJvZmlsZSh7YXV0aFNlcnZpY2VzLCAgYXV0aCB9KSB7XHJcbiAgY29uc3QgW2ZpbGVMaXN0LCBzZXRGaWxlTGlzdCBdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzdG9yYWdlLCBkaXNwYXRjaF0gPSB1c2VDb250ZXh0KFByb2ZpbGVDb250ZXh0KTtcclxuICBjb25zdCBbdGFiLCBzZXRUYWJdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW3Bvc3RNb2RhbCwgc2V0UG9zdE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZWRpdFByb2ZpbGVNb2RhbCwgc2V0RWRpdFByb2ZpbGVNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3RvcFJhdGVkTW9kYWwsIHNldFRvcFJhdGVkTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt0cmVuZGluZ01vZGFsLCBzZXRUcmVuZGluZ01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcGhvdG9zLCBzZXRQaG90b3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtyYXRlcywgc2V0UmF0ZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFt0b3BSYXRlZCwgc2V0VG9wUmF0ZWRdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbWFya2V0TW9kYWwsIHNldE1hcmtldE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZWRpdE1hcmtldE1vZGFsLCBzZXRFZGl0TWFya2V0TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFttYXJrZXRJdGVtLCBzZXRNYXJrZXRJdGVtXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IFRhYlBhbmUgfSA9IFRhYnM7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldEFjY291bnQoYXV0aC50b2tlbik7XHJcbiAgICBnZXRUcmVuZGluZygpO1xyXG4gICAgZ2V0UGhvdG9zKCk7XHJcbiAgICBnZXRSYXRlcygpO1xyXG4gICAgZ2V0VG9wUmF0ZWQoKTtcclxuICAgIGdldE1hcmtldFBsYWNlRm9yU2FsZSgpOyBcclxuICAgIGdldE1hcmtldFBsYWNlVG9CdXkoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGdldEZyaWVuZHMgPSBhc3luYyAodG9rZW4sIHdpdGhvdXRMb2FkaW5nID0gZmFsc2UpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICghd2l0aG91dExvYWRpbmcpIGRpc3BhdGNoKHNldExvYWRpbmcodHJ1ZSkpO1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6ICcvYWNjb3VudHMvdGltZWxpbmUnLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goc2V0RnJpZW5kc0RhdGEoZGF0YSkpO1xyXG4gICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gNDAzKSB7XHJcbiAgICAgICAgYXV0aFNlcnZpY2VzLnJlZnJlc2hUb2tlbihnZXRGcmllbmRzKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIXdpdGhvdXRMb2FkaW5nKSBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIGlmICghd2l0aG91dExvYWRpbmcpIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRBY2NvdW50ID0gYXN5bmMgKHRva2VuLCB3aXRob3V0TG9hZGluZyA9IGZhbHNlKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoIXdpdGhvdXRMb2FkaW5nKSBkaXNwYXRjaChzZXRMb2FkaW5nKHRydWUpKTtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICB1cmw6ICcvYWNjb3VudHMnLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7Y29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgZGF0YS5hY3Rpdml0eSA9IGRhdGEuYWN0aXZpdHkubWFwKGVsZW1lbnQgPT4geyBcclxuICAgICAgICAgIGVsZW1lbnQgPSBmaWx0ZXJBY2NvdW50RGF0YShlbGVtZW50KTtcclxuICAgICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZGlzcGF0Y2goc2V0QWNjb3VudHNEYXRhKGRhdGEpKTtcclxuICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IDQwMykge1xyXG4gICAgICAgIGF1dGhTZXJ2aWNlcy5yZWZyZXNoVG9rZW4oZ2V0RnJpZW5kcyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCF3aXRob3V0TG9hZGluZykgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICBpZiAoIXdpdGhvdXRMb2FkaW5nKSBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBmaWx0ZXJBY2NvdW50RGF0YSA9IChjb21tZW50X3NoYXJlZCkgPT4ge1xyXG4gICAgaWYoY29tbWVudF9zaGFyZWQudHlwZSA9PT0gJ0NvbW1lbnQnKSB7XHJcbiAgICAgIGlmKGNvbW1lbnRfc2hhcmVkLmNvbW1lbnRlZC50eXBlID09ICdQb3N0Jykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5jb21tZW50X3NoYXJlZC5jb21tZW50ZWQsXHJcbiAgICAgICAgICBjb21tZW50czogW3suLi5jb21tZW50X3NoYXJlZH1dXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKGNvbW1lbnRfc2hhcmVkLmNvbW1lbnRlZC50eXBlID09ICdDb21tZW50Jykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5jb21tZW50X3NoYXJlZC5jb21tZW50ZWQuY29tbWVudGVkLFxyXG4gICAgICAgICAgY29tbWVudHM6IFt7Li4uY29tbWVudF9zaGFyZWQuY29tbWVudGVkLCBjb21tZW50czogW2NvbW1lbnRfc2hhcmVkXSB9XVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmKGNvbW1lbnRfc2hhcmVkLmNvbW1lbnRlZC50eXBlID09ICdTaGFyZScpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uY29tbWVudF9zaGFyZWQuY29tbWVudGVkLnNoYXJlZCxcclxuICAgICAgICAgIGNvbW1lbnRzOiBbeyAuLi5jb21tZW50X3NoYXJlZCB9XVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uY29tbWVudF9zaGFyZWQuY29tbWVudGVkLFxyXG4gICAgICAgICAgY29tbWVudHM6IFt7IC4uLmNvbW1lbnRfc2hhcmVkIH1dXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYoY29tbWVudF9zaGFyZWQudHlwZSA9PT0gJ1Bvc3QnKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbW1lbnRfc2hhcmVkO1xyXG4gICAgfSBlbHNlIGlmKGNvbW1lbnRfc2hhcmVkLnR5cGUgPT09ICdTaGFyZScpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5jb21tZW50X3NoYXJlZC5zaGFyZWQsXHJcbiAgICAgICAgc2hhcmVzOiBbey4uLmNvbW1lbnRfc2hhcmVkIH1dXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBjb21tZW50X3NoYXJlZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGdldFBob3RvcyA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybDogJy9hY2NvdW50cy9waG90b3MnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIFwib2Zmc2V0XCI6IDAsXHJcbiAgICAgICAgICBcImZpcnN0XCI6IDEwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIHNldFBob3RvcyhkYXRhKVxyXG4gICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gNDAzKSB7XHJcbiAgICAgICAgYXV0aFNlcnZpY2VzLnJlZnJlc2hUb2tlbihnZXRQaG90b3MpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIFxyXG4gICAgICB9XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgIFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0UmF0ZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6ICcvYWNjb3VudHMvcmF0ZWQnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIFwib2Zmc2V0XCI6IDAsXHJcbiAgICAgICAgICBcImZpcnN0XCI6IDEwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIHNldFJhdGVzKGRhdGEpXHJcbiAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSA0MDMpIHtcclxuICAgICAgICBhdXRoU2VydmljZXMucmVmcmVzaFRva2VuKGdldFJhdGVzKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgXHJcbiAgICAgIH1cclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRUcmVuZGluZyA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybDogJy9hY2NvdW50cy90cmVuZGluZycsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgXCJvZmZzZXRcIjogMCxcclxuICAgICAgICAgIFwiZmlyc3RcIjogM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG4gICAgICBpZihzdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goc2V0VHJlbmRpbmdEYXRhKGRhdGEpKTtcclxuICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT0gNDAzKSB7XHJcbiAgICAgICAgYXV0aFNlcnZpY2VzLnJlZnJlc2hUb2tlbihnZXRUcmVuZGluZyk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGdldFRvcFJhdGVkID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsOiAnL2FjY291bnRzL3RvcC1yYXRlZCcsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgXCJvZmZzZXRcIjogMCxcclxuICAgICAgICAgIFwiZmlyc3RcIjogMTMwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcbiAgICAgIHNldFRvcFJhdGVkKGRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0TWFya2V0UGxhY2VGb3JTYWxlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlKSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6ICcvYWNjb3VudHMvbWFya2V0cGxhY2UvZ2V0LWl0ZW1zLWZvci1zYWxlJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBcIm9mZnNldFwiOiAwLFxyXG4gICAgICAgICAgXCJmaXJzdFwiOiAxMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG4gICAgICBpZihzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIGRpc3BhdGNoKHNldE1hcmtldFNhbGVEYXRhKGRhdGEpKTtcclxuICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGdldE1hcmtldFBsYWNlVG9CdXkgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6ICcvYWNjb3VudHMvbWFya2V0cGxhY2UvZ2V0LWl0ZW1zLXRvLWJ1eScsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgXCJvZmZzZXRcIjogMCxcclxuICAgICAgICAgIFwiZmlyc3RcIjogMTBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuICAgICAgaWYoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBkaXNwYXRjaChzZXRNYXJrZXRCdXlEYXRhKGRhdGEpKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZGVsZXRlQWN0aW9uID0gYXN5bmMgKGlkLCB0eXBlPVwiUG9zdFwiKSA9PiB7XHJcbiAgICBcclxuICAgIHZhciB1cmwgPSAnJztcclxuICAgIGlmICh0eXBlID09PSAnUGhvdG8nKSB7XHJcbiAgICAgIHVybCA9ICcvcGhvdG9zJztcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1ZpZGVvQ2xpcCcpIHtcclxuICAgICAgdXJsID0gJy92aWRlby1jbGlwcyc7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdJdGVtJykge1xyXG4gICAgICB1cmwgPSAnL2l0ZW1zJztcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1Bvc3QnKSB7XHJcbiAgICAgIHVybCA9ICcvcG9zdHMnO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnQ29tbWVudCcpIHtcclxuICAgICAgdXJsID0gJy9jb21tZW50cyc7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdTaGFyZScpIHtcclxuICAgICAgdXJsID0gJy9wb3N0cyc7XHJcbiAgICB9IGVsc2UgaWYodHlwZSA9PT0gJ01hcmtldHBsYWNlSXRlbUZvclNhbGUnKSB7XHJcbiAgICAgIHVybCA9ICcvbWFya2V0cGxhY2UvaXRlbXMtZm9yLXNhbGUnO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnTWFya2V0cGxhY2VJdGVtVG9CdXknKVxyXG4gICAgICB1cmwgPSAnL21hcmtldHBsYWNlL2l0ZW1zLXRvLWJ1eSc7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAnZGVsZXRlJyxcclxuICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBcImlkXCI6IGlkXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcbiAgICAgIGlmKHN0YXR1cyAhPT0gNDAwKSB7XHJcbiAgICAgICAgdmFyIG5ld0FjdGl2aXR5ID0gYWNjb3VudERhdGEuYWN0aXZpdHkuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gaXRlbS5pZCAhPT0gaWQ7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBkaXNwYXRjaChzZXRBY2NvdW50c0RhdGEoe1xyXG4gICAgICAgICAgLi4uYWNjb3VudERhdGEsXHJcbiAgICAgICAgICBhY3Rpdml0eTogbmV3QWN0aXZpdHlcclxuICAgICAgICB9KSlcclxuICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoJ0RlbGV0ZWQgc3VjY2Vzc2Z1bGx5IScpO1xyXG4gICAgIH0gZWxzZSB7XHJcbiAgICAgICBtZXNzYWdlLmVycm9yKCdUaGlzIHBvc3QgZGVsZXRpbmcgZG9lcyBub3QgYWxsb3dlZCEnKVxyXG4gICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKXtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY3JlYXRlUG9zdCA9IGFzeW5jIChkYXRhRm9yUmVxdWVzdCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlLCAncG9zdGluZycpKTtcclxuXHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybDogJy9wb3N0cycsXHJcbiAgICAgICAgZGF0YTogZGF0YUZvclJlcXVlc3QsXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICBzZXRQb3N0TW9kYWwoZmFsc2UpO1xyXG4gICAgICAgIHZhciBlbGVtZW50ID0gIHtcclxuICAgICAgICAgIHR5cGU6ICdQb3N0JyxcclxuICAgICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgICBjb21tZW50czogW10sXHJcbiAgICAgICAgICBjb21tZW50c0NvdW50OiAwLFxyXG4gICAgICAgICAgcmF0aW5nOiBudWxsLFxyXG4gICAgICAgICAgcmVhY3Rpb25zOiBbXSxcclxuICAgICAgICAgIHJlYWN0aW9uc0NvdW50OiAwLFxyXG4gICAgICAgICAgc2hhcmVzOiBbXSxcclxuICAgICAgICAgIHNoYXJlc0NvdW50OiAwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFjY291bnREYXRhLmFjdGl2aXR5ID0gW1xyXG4gICAgICAgICAgZWxlbWVudCwgLi4uYWNjb3VudERhdGEuYWN0aXZpdHlcclxuICAgICAgICBdXHJcbiAgICAgICAgZGlzcGF0Y2goc2V0QWNjb3VudHNEYXRhKGFjY291bnREYXRhKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSwgJ3Bvc3RpbmcnKSk7XHJcblxyXG4gICAgICByZXR1cm4gYXdhaXQgcmVxdWVzdDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UsICdwb3N0aW5nJykpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJhdGVQb3N0ID0gYXN5bmMgKHR5cGUsIHBvc3RJZCwgcmF0ZSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlLCAncG9zdGluZycpKTtcclxuICAgICAgbGV0IHVybCA9ICcnO1xyXG5cclxuICAgICAgaWYgKHR5cGUgPT09ICdQaG90bycpIHtcclxuICAgICAgICB1cmwgPSAnL3Bob3Rvcy9yYXRlJztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnVmlkZW9DbGlwJykge1xyXG4gICAgICAgIHVybCA9ICcvdmlkZW8tY2xpcHMvcmF0ZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0l0ZW0nKSB7XHJcbiAgICAgICAgdXJsID0gJy9pdGVtcy9yYXRlJztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnUG9zdCcpIHtcclxuICAgICAgICB1cmwgPSAnL3Bvc3RzL3JhdGUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdDb21tZW50Jykge1xyXG4gICAgICAgIHVybCA9ICcvY29tbWVudHMvcmF0ZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1NoYXJlJykge1xyXG4gICAgICAgIHVybCA9ICcvc2hhcmVzL3JhdGUnO1xyXG4gICAgICB9IGVsc2UgaWYodHlwZSA9PT0gJ01hcmtldHBsYWNlSXRlbUZvclNhbGUnKSB7XHJcbiAgICAgICAgdXJsID0gJy9tYXJrZXRwbGFjZS9pdGVtcy1mb3Itc2FsZS9yYXRlJztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnTWFya2V0cGxhY2VJdGVtVG9CdXknKSB7XHJcbiAgICAgICAgdXJsID0gJy9tYXJrZXRwbGFjZS9pdGVtcy10by1idXkvcmF0ZSc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBpZDogcG9zdElkLFxyXG4gICAgICAgICAgcmF0aW5nOiByYXRlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG5cclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgLy8gZ2V0QWNjb3VudCgpO1xyXG4gICAgICAgIC8vIG1lc3NhZ2Uuc3VjY2VzcygnRXZhbHVhdGUgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgICAgYWNjb3VudERhdGEuYWN0aXZpdHkubWFwKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgaWYoZWxlbWVudC5pZCA9PT0gcG9zdElkICYmIGVsZW1lbnQudHlwZSA9PT0gdHlwZSkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnJhdGluZyA9IHJhdGU7XHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZGlzcGF0Y2goc2V0QWNjb3VudHNEYXRhKGFjY291bnREYXRhKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSwgJ3Bvc3RpbmcnKSk7XHJcblxyXG4gICAgICByZXR1cm4gYXdhaXQgcmVxdWVzdDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UsICdwb3N0aW5nJykpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVVwbG9hZENvdmVyID0gYXN5bmMgKHsgZmlsZUxpc3QgfSkgPT4ge1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZpbGVMaXN0LmZvckVhY2goZmlsZSA9PiB7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgncHJvZmlsZUJhY2tncm91bmRJbWFnZScsIGZpbGUub3JpZ2luRmlsZU9iaik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgbWV0aG9kOiAncHV0JyxcclxuICAgICAgdXJsOiAnL2FjY291bnRzJyxcclxuICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG5cclxuICAgIGdldEFjY291bnQoYXV0aC50b2tlbik7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVVcGxvYWRBdmF0YXIgPSBhc3luYyAoeyBmaWxlTGlzdCB9KSA9PiB7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZmlsZUxpc3QuZm9yRWFjaChmaWxlID0+IHtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdwcm9maWxlUGhvdG8nLCBmaWxlLm9yaWdpbkZpbGVPYmopO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgIG1ldGhvZDogJ3B1dCcsXHJcbiAgICAgIHVybDogJy9hY2NvdW50cycsXHJcbiAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuXHJcbiAgICBnZXRBY2NvdW50KGF1dGgudG9rZW4pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbW9kYWxQb3B1cCA9ICgpID0+IHtcclxuICAgIHNldFBvc3RNb2RhbCh0cnVlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uVXBkYXRlID0gYXN5bmMgKGRhdGFGb3JSZXF1ZXN0KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKHRydWUpKTtcclxuXHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgdXJsOiAnL2FjY291bnRzJyxcclxuICAgICAgICBkYXRhOiBkYXRhRm9yUmVxdWVzdCxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcblxyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICBzZXRFZGl0UHJvZmlsZU1vZGFsKDApO1xyXG4gICAgICAgIGRpc3BhdGNoKHNldEFjY291bnRzRGF0YSh7XHJcbiAgICAgICAgICAuLi5hY2NvdW50RGF0YSxcclxuICAgICAgICAgIGxhc3ROYW1lOiBkYXRhLmxhc3ROYW1lLFxyXG4gICAgICAgICAgcHJvZmlsZVBob3RvOiBkYXRhLnByb2ZpbGVQaG90byxcclxuICAgICAgICAgIHByb2ZpbGVCYWNrZ3JvdW5kSW1hZ2U6IGRhdGEucHJvZmlsZUJhY2tncm91bmRJbWFnZSxcclxuICAgICAgICB9KSlcclxuICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoJ1N1Y2Nlc3NmdWxseSB1cGRhdGVkJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpO1xyXG5cclxuICAgICAgcmV0dXJuIGF3YWl0IHJlcXVlc3Q7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdW5mcmllbmQgPSBhc3luYyAodXNlcm5hbWUpID0+IHtcclxuICAgIGlmKHVzZXJuYW1lICE9PSAnJykge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcodHJ1ZSkpO1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICAgIHVybDogJy9hY2NvdW50cy9mcmllbmRzaGlwJyxcclxuICAgICAgICAgIGRhdGE6IHsgdXNlcm5hbWU6IHVzZXJuYW1lIH0sXHJcbiAgICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG4gICAgICAgIGlmIChzdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgICAgZ2V0QWNjb3VudCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlcXVlc3Q7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBsaWtlQWN0aW9uID0gYXN5bmMgKHR5cGUsIGlkLCB0ZXJtKSA9PiB7XHJcbiAgICB2YXIgdXJsID0gJyc7XHJcbiAgICBpZiAodHlwZSA9PT0gJ1Bob3RvJykge1xyXG4gICAgICB1cmwgPSAnL3Bob3Rvcy9yZWFjdCc7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdWaWRlb0NsaXAnKSB7XHJcbiAgICAgIHVybCA9ICcvdmlkZW8tY2xpcHMvcmVhY3QnO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnSXRlbScpIHtcclxuICAgICAgdXJsID0gJy9pdGVtcy9yZWFjdCc7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdQb3N0Jykge1xyXG4gICAgICB1cmwgPSAnL3Bvc3RzL3JlYWN0JztcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0NvbW1lbnQnKSB7XHJcbiAgICAgIHVybCA9ICcvY29tbWVudHMvcmVhY3QnO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnU2hhcmUnKSB7XHJcbiAgICAgIHVybCA9ICcvc2hhcmVzL3JlYWN0JztcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ01hcmtldHBsYWNlSXRlbUZvclNhbGUnKSB7XHJcbiAgICAgIHVybCA9ICcvbWFya2V0cGxhY2UvaXRlbXMtZm9yLXNhbGUvcmVhY3QnO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnTWFya2V0cGxhY2VJdGVtVG9CdXknKSB7XHJcbiAgICAgIHVybCA9ICcvbWFya2V0cGxhY2UvaXRlbXMtdG8tYnV5L3JlYWN0JztcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICByZWFjdGVkOiBpZCxcclxuICAgICAgICAgIHJlYWN0aW9uOiB0ZXJtXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgIGFjY291bnREYXRhLmFjdGl2aXR5Lm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIGlmKGVsZW1lbnQuaWQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQucmVhY3Rpb25zWzBdLnJlYWN0aW9uID09IHRlcm07XHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZGlzcGF0Y2goc2V0QWNjb3VudHNEYXRhKGFjY291bnREYXRhKSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT0gNDAzKSB7XHJcbiAgICAgICAgYXV0aFNlcnZpY2VzLnJlZnJlc2hUb2tlbigpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIFxyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiAgY29uc3Qgc2hhcmVBY3Rpb24gPSBhc3luYyAodHlwZSwgaWQpID0+IHtcclxuXHJcbiAgICB2YXIgdXJsID0gJyc7XHJcbiAgICAgIGlmICh0eXBlID09PSAnUGhvdG8nKSB7XHJcbiAgICAgICAgdXJsID0gJy9waG90b3Mvc2hhcmUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdWaWRlb0NsaXAnKSB7XHJcbiAgICAgICAgdXJsID0gJy92aWRlby1jbGlwcy9zaGFyZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0l0ZW0nKSB7XHJcbiAgICAgICAgdXJsID0gJy9pdGVtcy9zaGFyZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1Bvc3QnKSB7XHJcbiAgICAgICAgdXJsID0gJy9wb3N0cy9zaGFyZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0NvbW1lbnQnKSB7XHJcbiAgICAgICAgdXJsID0gJy9jb21tZW50cy9zaGFyZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1NoYXJlJykge1xyXG4gICAgICAgIHVybCA9ICcvcG9zdHMvc2hhcmUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdNYXJrZXRwbGFjZUl0ZW1Gb3JTYWxlJykge1xyXG4gICAgICAgIHVybCA9ICcvbWFya2V0cGxhY2UvaXRlbXMtZm9yLXNhbGUvc2hhcmUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdNYXJrZXRwbGFjZUl0ZW1Ub0J1eScpIHtcclxuICAgICAgICB1cmwgPSAnL21hcmtldHBsYWNlL2l0ZW1zLXRvLWJ1eS9zaGFyZSc7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc2hhcmVkOiBpZCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuXHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgIG1lc3NhZ2Uuc3VjY2VzcygnU2hhcmVkIHN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICB9IGVsc2UgaWYoc2F0dXMgPT0gNDAzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGF1dGhTZXJ2aWNlcy5yZWZyZXNoVG9rZW4oKTtcclxuICAgICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IG9uVXBkYXRlVGltZWxpbmUgPSAoZGF0YSkgPT4ge1xyXG4gICAgYWNjb3VudERhdGEuYWN0aXZpdHkubWFwKGVsZW1lbnQgPT4ge1xyXG4gICAgICBpZihlbGVtZW50LmlkID09IGRhdGEuaWQpIHtcclxuICAgICAgICBsZXQgYWRkRWxlbWVudCA9IHtcclxuICAgICAgICAgIGFjY291bnQ6IGFjY291bnREYXRhLCBcclxuICAgICAgICAgIC4uLmRhdGEuY29tbWVudHNbMF1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodHlwZW9mIGVsZW1lbnQuY29tbWVudHMgPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgIGVsZW1lbnRbJ2NvbW1lbnRzJ10gPSBbYWRkRWxlbWVudF07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGVsZW1lbnQuY29tbWVudHMucHVzaChhZGRFbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxlbWVudC5jb21tZW50c0NvdW50ICs9IGRhdGEuY29tbWVudHNDb3VudDtcclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBkaXNwYXRjaChzZXRBY2NvdW50c0RhdGEoYWNjb3VudERhdGEpKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uUG9zdGluZyA9IGFzeW5jIChyZXF1ZXN0RGF0YSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsOiAnL3Bob3RvcycsXHJcbiAgICAgICAgZGF0YTogcmVxdWVzdERhdGEsXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICAvLyBkaXNwYXRjaChzZXRQaG90b3MoWy4uLnN0b3JhZ2UucGhvdG9zRGF0YSwgZGF0YV0pKVxyXG4gICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gNDAzKSB7XHJcbiAgICAgICAgLy8gYXV0aFNlcnZpY2VzLnJlZnJlc2hUb2tlbihvblBvc3RpbmcpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBkZWxldGVQaG90byA9IGFzeW5jIChwaG90b0lkKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdkZWxldGUnLFxyXG4gICAgICAgIHVybDogJy9waG90b3MnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGlkOiBwaG90b0lkXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwNCkge1xyXG4gICAgICAgIGNvbnN0IG5ld1Bob3RvcyA9IHBob3Rvcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkICE9PSBwaG90b0lkICk7XHJcbiAgICAgICAgY29uc29sZS5sb2cobmV3UGhvdG9zKTtcclxuICAgICAgICBzZXRQaG90b3MobmV3UGhvdG9zKTtcclxuICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoJ0RlbGV0ZWQgc3VjY2Vzc2Z1bGx5IScpO1xyXG4gICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gNDAzKSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcignUGxlYXNlIHJlZnJlc2ggcGFnZSEnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0Q2F0ZWdvcmllcyA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcodHJ1ZSkpXHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgdXJsOiAnL21hcmtldHBsYWNlL2NhdGVnb3JpZXMnLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpXHJcbiAgICAgICAgc2V0Q2F0ZWdvcmllcyhkYXRhKTtcclxuICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IDQwMykge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoJ1BsZWFzZSByZWZyZXNoIHBhZ2UhJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgfVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGFkZE1hcmtldEl0ZW1Nb2RhbCA9IGFzeW5jICgpID0+IHtcclxuICAgIGdldENhdGVnb3JpZXMoKTtcclxuICAgIHNldE1hcmtldE1vZGFsKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYWRkTWFya2V0SXRlbSA9IGFzeW5jIChyZXF1ZXN0RGF0YSwgc2FsZU9yYnV5KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKHRydWUpKTtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsOiBzYWxlT3JidXk/Jy9tYXJrZXRwbGFjZS9pdGVtcy1mb3Itc2FsZSc6Jy9tYXJrZXRwbGFjZS9pdGVtcy10by1idXknLFxyXG4gICAgICAgIGRhdGE6IHJlcXVlc3REYXRhLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgaWYoc2FsZU9yYnV5KSB7XHJcbiAgICAgICAgICAvLyBkaXNwYXRjaChzZXRNYXJrZXRTYWxlRGF0YShbLi4uc3RvcmFnZS5tYXJrZXRTYWxlRGF0YSwgZGF0YV0pKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBkaXNwYXRjaChzZXRNYXJrZXRCdXlEYXRhKFsuLi5zdG9yYWdlLm1hcmtldEJ1eURhdGEsIGRhdGFdKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0TWFya2V0TW9kYWwoZmFsc2UpO1xyXG4gICAgICAgIG1lc3NhZ2Uuc3VjY2VzcygnU3VjY2Vzc2Z1bGx5IEFkZGVkJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgfVxyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICAgIHJldHVybiBhd2FpdCByZXF1ZXN0O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZWRpdEl0ZW0gPSBhc3luYyAoaXRlbV9pZCwgc2FsZU9yYnV5KSA9PiB7cmV0dXJuO1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlKSk7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybDogc2FsZU9yYnV5PycvbWFya2V0cGxhY2UvaXRlbXMtZm9yLXNhbGUvZ2V0JzonL21hcmtldHBsYWNlL2l0ZW1zLXRvLWJ1eS9nZXQnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGlkOiBpdGVtX2lkXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgIGlmKHNhbGVPcmJ1eSkge1xyXG4gICAgICAgICAgLy8gZGlzcGF0Y2goc2V0TWFya2V0U2FsZURhdGEoWy4uLnN0b3JhZ2UubWFya2V0U2FsZURhdGEsIGRhdGFdKSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gZGlzcGF0Y2goc2V0TWFya2V0QnV5RGF0YShbLi4uc3RvcmFnZS5tYXJrZXRCdXlEYXRhLCBkYXRhXSkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEVkaXRNYXJrZXRNb2RhbCh0cnVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICB9XHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKTtcclxuICAgICAgcmV0dXJuIGF3YWl0IHJlcXVlc3Q7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IHsgYWNjb3VudERhdGEsIHRyZW5kaW5nRGF0YSwgZnJpZW5kRGF0YSB9ID0gc3RvcmFnZVxyXG4gXHJcbiAgY29uc3QgaXNNb2JpbGUgPSB3aW5kb3cubWF0Y2hNZWRpYSgnb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KScpLm1hdGNoZXNcclxuXHJcbiAgY29uc3QgaW1hZ2VVcGxvYWRQYXJhbXMgPSB7XHJcbiAgICBvblJlbW92ZTogZmlsZSA9PiB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gZmlsZUxpc3QuaW5kZXhPZihmaWxlKTtcclxuICAgICAgY29uc3QgbmV3RmlsZUxpc3QgPSBmaWxlTGlzdC5zbGljZSgpO1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBuZXdGaWxlTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICBzZXRGaWxlTGlzdChyZXN1bHQpXHJcbiAgICB9LFxyXG4gICAgYmVmb3JlVXBsb2FkOiBmaWxlID0+IHtcclxuICAgICAgc2V0RmlsZUxpc3QoWy4uLmZpbGVMaXN0LCBmaWxlXSlcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSxcclxuICAgIGZpbGVMaXN0LFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvdmVyVXJsID0gYWNjb3VudERhdGEgIT09IG51bGwgJiYgYWNjb3VudERhdGEgIT09IHVuZGVmaW5lZCA/IGB1cmwoaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHthY2NvdW50RGF0YS5wcm9maWxlQmFja2dyb3VuZEltYWdlPy5zcmN9KWAgOiBudWxsXHJcbiAgY29uc3QgcHJvZmlsZVVybCA9IGFjY291bnREYXRhICE9PSBudWxsICYmIGFjY291bnREYXRhICE9PSB1bmRlZmluZWQgPyBgJHthY2NvdW50RGF0YS5wcm9maWxlUGhvdG8/LnNyY31gIDogbnVsbFxyXG4gIC8vIGNvbnN0IHJvdW5kUmF0aW5nID0gTWF0aC5yb3VuZChhY2NvdW50RGF0YT8ucmF0aW5nIHx8IDApXHJcbiAgY29uc3Qgcm91bmRSYXRpbmcgPSBhY2NvdW50RGF0YT8ucmF0aW5nO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0fT5cclxuICAgICAgICB7dHlwZW9mIGFjY291bnREYXRhICE9PSAndW5kZWZpbmVkJz9cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGV9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9PlxyXG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJfaW1hZ2V9IG9uQ2xpY2s9eygpID0+IHNldEVkaXRQcm9maWxlTW9kYWwodHJ1ZSl9PlxyXG4gICAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICAgICAgc2l6ZT17aXNNb2JpbGUgPyAxMDAgOiAxNDB9XHJcbiAgICAgICAgICAgICAgICAgIHVybD17cHJvZmlsZVVybH1cclxuICAgICAgICAgICAgICAgICAgdGV4dD17YWNjb3VudERhdGE/LnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICB1c2VybmFtZT17YWNjb3VudERhdGE/LnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcl9jb250ZW50fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyX2luZm99PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVfc2VjdGlvbn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnRfc2lkZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmZ1bGxuYW1lfSBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSBvbkNsaWNrPXsoKSA9PiBzZXRFZGl0UHJvZmlsZU1vZGFsKHRydWUpfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57YCR7YWNjb3VudERhdGE/LmZpcnN0TmFtZX0gJHthY2NvdW50RGF0YT8ubGFzdE5hbWV9YH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yaWdodF9zaWRlfT5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucmF0aW5nfT5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPFJhdGVcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3JvdW5kUmF0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICcjZmFkYjE0JywgZm9udFNpemU6ICczMHB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnJhdGluZ190ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtyb3VuZFJhdGluZ31cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDpcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItZ3JheS0zMDAgc2hhZG93IHJvdW5kZWQtbWQgcC00IG1heC13LXNtIHctZnVsbCBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWF0ZS1wdWxzZSBmbGV4IHNwYWNlLXgtNFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGJnLWdyYXktNDAwIGgtMTIgdy0xMlwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgc3BhY2UteS00IHB5LTFcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTQgYmctZ3JheS00MDAgcm91bmRlZCB3LTMvNFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC00IGJnLWdyYXktNDAwIHJvdW5kZWRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNCBiZy1ncmF5LTQwMCByb3VuZGVkIHctNS82XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlX2NvbnRlbnR9PlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcImZsZXggYm9yZGVyLWJcIiwgc3R5bGVzLnByb2ZpbGVUYWJzKX0+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ21yLTEnLCBzdHlsZXMudGFiKX0gb25DbGljaz17KCkgPT4gc2V0VGFiKDEpfSBzdHlsZT17eyBib3JkZXJCb3R0b206dGFiPT0xPyc1cHggc29saWQgd2hpdGUnOidub25lJyB9fT5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgcHktMiBweC00IHRleHQtcmVkLTUwMCBob3Zlcjp0ZXh0LXJlZC04MDAgZm9udC1zZW1pYm9sZFwiPkFDVElWSVRZPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdtci0xJywgc3R5bGVzLnRhYil9IG9uQ2xpY2s9eygpID0+IHNldFRhYigyKX0gc3R5bGU9e3sgYm9yZGVyQm90dG9tOnRhYj09Mj8nNXB4IHNvbGlkIHdoaXRlJzonbm9uZScgfX0+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHB5LTIgcHgtNCB0ZXh0LXJlZC01MDAgaG92ZXI6dGV4dC1yZWQtODAwIGZvbnQtc2VtaWJvbGRcIj5Hcm91cHM8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ21yLTEnLCBzdHlsZXMudGFiKX0gb25DbGljaz17KCkgPT4geyBzZXRUYWIoNik7IGdldE1hcmtldFBsYWNlRm9yU2FsZSgpOyBnZXRNYXJrZXRQbGFjZVRvQnV5KCk7IH19IHN0eWxlPXt7IGJvcmRlckJvdHRvbTp0YWI9PTY/JzVweCBzb2xpZCB3aGl0ZSc6J25vbmUnIH19PlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBweS0yIHB4LTQgdGV4dC1yZWQtNTAwIGhvdmVyOnRleHQtcmVkLTgwMCBmb250LXNlbWlib2xkXCI+TWFya2V0cGxhY2U8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ21yLTEnLCBzdHlsZXMudGFiKX0gb25DbGljaz17KCkgPT4gc2V0VGFiKDMpfSBzdHlsZT17eyBib3JkZXJCb3R0b206dGFiPT0zPyc1cHggc29saWQgd2hpdGUnOidub25lJyB9fT5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgcHktMiBweC00IHRleHQtcmVkLTUwMCBob3Zlcjp0ZXh0LXJlZC04MDAgZm9udC1zZW1pYm9sZFwiPlBIT1RPUzwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnbXItMScsIHN0eWxlcy50YWIpfSBvbkNsaWNrPXsoKSA9PiB7IHNldFRhYig0KTsgIGdldFJhdGVzKCk7IH19IHN0eWxlPXt7IGJvcmRlckJvdHRvbTp0YWI9PTQ/JzVweCBzb2xpZCB3aGl0ZSc6J25vbmUnIH19PlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBweS0yIHB4LTQgdGV4dC1yZWQtNTAwIGhvdmVyOnRleHQtcmVkLTgwMCBmb250LXNlbWlib2xkXCI+UkFURUQ8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ21yLTEnLCBzdHlsZXMudGFiKX0gb25DbGljaz17KCkgPT4gc2V0VGFiKDUpfSBzdHlsZT17eyBib3JkZXJCb3R0b206dGFiPT01Pyc1cHggc29saWQgd2hpdGUnOidub25lJyB9fT5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgcHktMiBweC00IHRleHQtcmVkLTUwMCBob3Zlcjp0ZXh0LXJlZC04MDAgZm9udC1zZW1pYm9sZFwiPkZSSUVORFM8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9iaWxlX3NlYXJjaH0+XHJcbiAgICAgICAgICAgIDxTZWFyY2ggcGxhY2Vob2xkZXI9XCJpbnB1dCBzZWFyY2ggdGV4dFwiIG9uU2VhcmNoPXtvblNlYXJjaH0gc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fSAvPlxyXG4gICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAge3RhYj09MT9cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aXZpdHl9PlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMubW9iaWxlX2FjdGl2aXR5X2xhYmVsfT5BQ1RJVklUWTwvaDI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY3JlYXRlUG9zdERpdn0+XHJcbiAgICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgICBzaXplPXs1MH1cclxuICAgICAgICAgICAgICAgICAgdXJsPXtwcm9maWxlVXJsfVxyXG4gICAgICAgICAgICAgICAgICB1c2VybmFtZT17YWNjb3VudERhdGE/LnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLmNyZWF0ZVBvc3RJbnB1dH0gcGxhY2Vob2xkZXI9XCJXaGF0J3Mgb24geW91ciBtaW5kP1wiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXttb2RhbFBvcHVwfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8L2lucHV0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEZlZWRQb3N0c1xyXG4gICAgICAgICAgICAgIHVzZXI9e2FjY291bnREYXRhfVxyXG4gICAgICAgICAgICAgIG9uUmF0ZVBvc3Q9e3JhdGVQb3N0fVxyXG4gICAgICAgICAgICAgIG9uVXBkYXRlVGltZWxpbmU9e29uVXBkYXRlVGltZWxpbmV9XHJcbiAgICAgICAgICAgICAgbGlrZUFjdGlvbj17bGlrZUFjdGlvbn1cclxuICAgICAgICAgICAgICBzaGFyZUFjdGlvbj17c2hhcmVBY3Rpb259XHJcbiAgICAgICAgICAgICAgZGVsZXRlQWN0aW9uPXtkZWxldGVBY3Rpb259XHJcbiAgICAgICAgICAgICAgYXV0aD17YXV0aH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PjpudWxsfVxyXG4gICAgICAgICAge3RhYj09NT9cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxyXG4gICAgICAgICAgICAgIHN0eWxlcy5mcmllbmRzX2xpc3QsXHJcbiAgICAgICAgICAgICAgc3R5bGVzLnNlY3Rpb25zX2NvbnRlbnRcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHthY2NvdW50RGF0YT8uZnJpZW5kcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZnJpZW5kfSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9ezgwfVxyXG4gICAgICAgICAgICAgICAgICAgIHVybD17aXRlbT8ucHJvZmlsZVBob3RvfVxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9e2l0ZW0/LnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAwIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZnJpZW5kX25hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBmb250U2l6ZTogMjAgfX0+e2l0ZW0uZmlyc3ROYW1lfSB7aXRlbS5sYXN0TmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJhdGVcclxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17aXRlbS5yYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJyNmYWRiMTQnLCBmb250U2l6ZTogJzE1cHgnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc2hhcGU9XCJyb3VuZFwiIHNpemU9XCJzbWFsbFwiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDUgfX0gb25DbGljaz17KCkgPT4gdW5mcmllbmQoaXRlbS51c2VybmFtZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIFVuZnJpZW5kXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9kaXY+Om51bGxcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHt0YWI9PTM/XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9TZWN0aW9ufT5cclxuICAgICAgICAgICAgICA8UGhvdG9TZWN0aW9uIHVzZXI9e3Bob3Rvc30gb25SYXRlUG9zdD17cmF0ZVBvc3R9IG9uUG9zdGluZz17b25Qb3N0aW5nfSBkZWxldGVQaG90bz17ZGVsZXRlUGhvdG99IG9uVXBkYXRlVGltZWxpbmU9e29uVXBkYXRlVGltZWxpbmV9XHJcbiAgICAgICAgICAgICAgbGlrZUFjdGlvbj17bGlrZUFjdGlvbn0gc2hhcmVBY3Rpb249e3NoYXJlQWN0aW9ufSBhdXRoPXthdXRofS8+PC9kaXY+Om51bGxcclxuICAgICAgICAgIH0gXHJcbiAgICAgICAgICB7dGFiPT00P1xyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJhdGVkU2VjdGlvbn0+XHJcbiAgICAgICAgICAgIDxSYXRlZFNlY3Rpb24gdXNlcj17eyByZWNlbnRSYXRlZDogcmF0ZXMgfX0gb25SYXRlUG9zdD17cmF0ZVBvc3R9IFxyXG4gICAgICAgICAgICBsaWtlQWN0aW9uPXtsaWtlQWN0aW9ufSBzaGFyZUFjdGlvbj17c2hhcmVBY3Rpb259IFxyXG4gICAgICAgICAgICBhdXRoPXthdXRofSBvblVwZGF0ZVRpbWVsaW5lPXtvblVwZGF0ZVRpbWVsaW5lfS8+PC9kaXY+Om51bGxcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB7dGFiPT02P1xyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1hcmtldFBsYWNlU2VjdGlvbn0+XHJcbiAgICAgICAgICAgICAgICA8VGFicyBkZWZhdWx0QWN0aXZlS2V5PVwiMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICB0YWI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogMjAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgU2FsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICA+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgPExvYWRpbmdXcmFwcGVyIGxvYWRpbmc9e3N0b3JhZ2UubG9hZGluZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNYXJrZXRTZWN0aW9uIGRhdGE9e3N0b3JhZ2UubWFya2V0U2FsZURhdGF9IGVkaXRJdGVtPXtlZGl0SXRlbX0gc2FsZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Mb2FkaW5nV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYlBhbmVcclxuICAgICAgICAgICAgICAgICAgICAgIHRhYj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAyMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBCdXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PVwiMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPE1hcmtldFNlY3Rpb24gZGF0YT17c3RvcmFnZS5tYXJrZXRCdXlEYXRhfSBlZGl0SXRlbT17ZWRpdEl0ZW19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lPlxyXG4gICAgICAgICAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIHN0eWxlPXt7IG1hcmdpblRvcDogMTAgfX0gb25DbGljaz17YWRkTWFya2V0SXRlbU1vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgIEFkZCBNYXJrZXRwbGFjZSBJdGVtXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+Om51bGxcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vYmlsZV9hY3Rpdml0eX0+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5tb2JpbGVfYWN0aXZpdHlfbGFiZWx9PkFDVElWSVRZPC9oMj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jcmVhdGVQb3N0RGl2fT5cclxuICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgIHNpemU9ezUwfVxyXG4gICAgICAgICAgICAgICAgICB1cmw9e3Byb2ZpbGVVcmx9XHJcbiAgICAgICAgICAgICAgICAgIHVzZXJuYW1lPXthY2NvdW50RGF0YT8udXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuY3JlYXRlUG9zdElucHV0fSBwbGFjZWhvbGRlcj1cIldoYXQncyBvbiB5b3VyIG1pbmQ/XCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e21vZGFsUG9wdXB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDwvaW5wdXQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8RmVlZFBvc3RzXHJcbiAgICAgICAgICAgICAgdXNlcj17YWNjb3VudERhdGF9XHJcbiAgICAgICAgICAgICAgb25SYXRlUG9zdD17cmF0ZVBvc3R9XHJcbiAgICAgICAgICAgICAgb25VcGRhdGVUaW1lbGluZT17b25VcGRhdGVUaW1lbGluZX1cclxuICAgICAgICAgICAgICBsaWtlQWN0aW9uPXtsaWtlQWN0aW9ufVxyXG4gICAgICAgICAgICAgIGRlbGV0ZUFjdGlvbj17ZGVsZXRlQWN0aW9ufVxyXG4gICAgICAgICAgICAgIHNoYXJlQWN0aW9uPXtzaGFyZUFjdGlvbn1cclxuICAgICAgICAgICAgICBhdXRoPXthdXRofVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcclxuICAgICAgICAgICAgICBzdHlsZXMubW9iaWxlX2ZyaWVuZHNfbGlzdFxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aDIgc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19PkZSSUVORFM8L2gyPiBcclxuICAgICAgICAgICAge2FjY291bnREYXRhPy5mcmllbmRzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mcmllbmR9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT17ODB9XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsPXtpdGVtPy5wcm9maWxlUGhvdG99XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dD17aXRlbT8udXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mcmllbmRfbmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGZvbnRTaXplOiAyMCB9fT57aXRlbS5maXJzdE5hbWV9IHtpdGVtLmxhc3ROYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8UmF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtpdGVtLnJhdGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnI2ZhZGIxNCcsIGZvbnRTaXplOiAnMTVweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzaGFwZT1cInJvdW5kXCIgc2l6ZT1cInNtYWxsXCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogNSB9fSBvbkNsaWNrPXsoKSA9PiB1bmZyaWVuZChpdGVtLnVzZXJuYW1lKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgVW5mcmllbmRcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9iaWxlX2dyb3Vwc30+XHJcbiAgICAgICAgICAgIDxoMiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0+R1JPVVBTPC9oMj4gXHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vYmlsZV9tYXJrZXRQbGFjZVNlY3Rpb259PlxyXG4gICAgICAgICAgICA8aDIgc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19Pk1hcmtldHBsYWNlPC9oMj4gXHJcbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiAxMCB9fSBvbkNsaWNrPXthZGRNYXJrZXRJdGVtTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgQWRkIE1hcmtldHBsYWNlIEl0ZW1cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxUYWJzIGRlZmF1bHRBY3RpdmVLZXk9XCIxXCI+XHJcbiAgICAgICAgICAgICAgPFRhYlBhbmVcclxuICAgICAgICAgICAgICAgIHRhYj17XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAyMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICBTYWxlXHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGtleT1cIjFcIlxyXG4gICAgICAgICAgICAgID4gXHJcbiAgICAgICAgICAgICAgICA8TG9hZGluZ1dyYXBwZXIgbG9hZGluZz17c3RvcmFnZS5sb2FkaW5nfT5cclxuICAgICAgICAgICAgICAgICAgPE1hcmtldFNlY3Rpb24gZGF0YT17c3RvcmFnZS5tYXJrZXRTYWxlRGF0YX0gZWRpdEl0ZW09e2VkaXRJdGVtfSBzYWxlLz5cclxuICAgICAgICAgICAgICAgIDwvTG9hZGluZ1dyYXBwZXI+XHJcbiAgICAgICAgICAgICAgPC9UYWJQYW5lPlxyXG4gICAgICAgICAgICAgIDxUYWJQYW5lXHJcbiAgICAgICAgICAgICAgICB0YWI9e1xyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogMjAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgQnV5XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGtleT1cIjJcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxNYXJrZXRTZWN0aW9uIGRhdGE9e3N0b3JhZ2UubWFya2V0QnV5RGF0YX0gZWRpdEl0ZW09e2VkaXRJdGVtfS8+XHJcbiAgICAgICAgICAgICAgPC9UYWJQYW5lPlxyXG4gICAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2JpbGVfcmF0ZXNlY3Rpb259PlxyXG4gICAgICAgICAgICA8aDIgc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19PlJBVEVEPC9oMj4gXHJcbiAgICAgICAgICAgIDxSYXRlZFNlY3Rpb24gdXNlcj17eyByZWNlbnRSYXRlZDogcmF0ZXMgfX0gb25SYXRlUG9zdD17cmF0ZVBvc3R9IFxyXG4gICAgICAgICAgICBsaWtlQWN0aW9uPXtsaWtlQWN0aW9ufSBzaGFyZUFjdGlvbj17c2hhcmVBY3Rpb259XHJcbiAgICAgICAgICAgIGF1dGg9e2F1dGh9IG9uVXBkYXRlVGltZWxpbmU9e29uVXBkYXRlVGltZWxpbmV9Lz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9iaWxlX3Bob3Rvc2VjdGlvbn0+XHJcbiAgICAgICAgICAgIDxoMiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0+UEhPVE9TPC9oMj4gXHJcbiAgICAgICAgICAgIDxQaG90b1NlY3Rpb24gdXNlcj17cGhvdG9zfSBvblJhdGVQb3N0PXtyYXRlUG9zdH0gb25Qb3N0aW5nPXtvblBvc3Rpbmd9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZVBob3RvPXtkZWxldGVQaG90b30gbGlrZUFjdGlvbj17bGlrZUFjdGlvbn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVBY3Rpb249e3NoYXJlQWN0aW9ufSBvblVwZGF0ZVRpbWVsaW5lPXtvblVwZGF0ZVRpbWVsaW5lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGg9e2F1dGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yaWdodH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaH0+XHJcbiAgICAgICAgICAgIDxwPlNlYXJjaDo8L3A+XHJcbiAgICAgICAgICAgIDxTZWFyY2ggcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiBvblNlYXJjaD17b25TZWFyY2h9IHN0eWxlPXt7IHdpZHRoOiAyMDAsIGJvcmRlckNvbG9yOiAnd2hpdGUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcgfX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50cmVuZGluZ30+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50cmVuZGluZ1RleHR9IG9uQ2xpY2s9eygpID0+IHNldFRyZW5kaW5nTW9kYWwodHJ1ZSl9PlRSRU5ESU5HPC9oMT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50cmVuZGluZ19jb250ZW50fT5cclxuICAgICAgICAgICAgICB7dHJlbmRpbmdEYXRhLmxlbmd0aCA+IDAgJiYgdHJlbmRpbmdEYXRhPy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLnRyZW5kaW5nQ29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+VHlwZToge2l0ZW0udHlwZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+RGF0ZToge21vbWVudChpdGVtLmNyZWF0ZWRBdCkuZm9ybWF0KCdNTU0gREQsIFlZWVkgLSBISDptbSBBJyl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkNvbnRlbnQ6IHtpdGVtLnRleHR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkNvbW1lbnRzOiB7aXRlbS5jb21tZW50c0NvdW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5SZWFjdGlvbnM6IHtpdGVtLnJlYWN0aW9uc0NvdW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5SYXRpbmc6IHtpdGVtLnJhdGluZ308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+U2hhcmU6IHtpdGVtLnNoYXJlc0NvdW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50cmVuZGluZ1RleHR9IG9uQ2xpY2s9eygpID0+IHNldFRvcFJhdGVkTW9kYWwodHJ1ZSl9PlRPUCBSQVRFRDwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudHJlbmRpbmdfY29udGVudH0+XHJcbiAgICAgICAgICAgICAge3RvcFJhdGVkLmxlbmd0aCA+IDAgICYmIHRvcFJhdGVkPy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLnRyZW5kaW5nQ29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+VHlwZToge2l0ZW0udHlwZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+RGF0ZToge21vbWVudChpdGVtLmNyZWF0ZWRBdCkuZm9ybWF0KCdNTU0gREQsIFlZWVkgLSBISDptbSBBJyl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkNvbnRlbnQ6IHtpdGVtLnRleHR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkNvbW1lbnRzOiB7aXRlbS5jb21tZW50c0NvdW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5SZWFjdGlvbnM6IHtpdGVtLnJlYWN0aW9uc0NvdW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5SYXRpbmc6IHtpdGVtLnJhdGluZ308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+U2hhcmU6IHtpdGVtLnNoYXJlc0NvdW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxNb2RhbFdyYXBwZXJcclxuICAgICAgICAgIHRpdGxlPVwiQ3JlYXRlIFBvc3RcIlxyXG4gICAgICAgICAgc2hvd01vZGFsPXtwb3N0TW9kYWx9XHJcbiAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRQb3N0TW9kYWwoZmFsc2UpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxQb3N0aW5nUG9zdFxyXG4gICAgICAgICAgICBsb2FkaW5nPXtzdG9yYWdlLnBvc3RpbmdMb2FkaW5nfVxyXG4gICAgICAgICAgICBvblBvc3Rpbmc9e2NyZWF0ZVBvc3R9XHJcbiAgICAgICAgICAgIG1vZGFsUG9wdXA9e21vZGFsUG9wdXB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICA8L01vZGFsV3JhcHBlcj5cclxuICAgICAgPE1vZGFsV3JhcHBlclxyXG4gICAgICAgICAgdGl0bGU9XCJFZGl0IFByb2ZpbGVcIlxyXG4gICAgICAgICAgc2hvd01vZGFsPXtlZGl0UHJvZmlsZU1vZGFsfVxyXG4gICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0RWRpdFByb2ZpbGVNb2RhbChmYWxzZSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEVkaXRQcm9maWxlIG9uVXBkYXRlPXtvblVwZGF0ZX0gbG9hZGluZz17c3RvcmFnZS5wb3N0aW5nTG9hZGluZ30vPlxyXG4gICAgICA8L01vZGFsV3JhcHBlcj5cclxuICAgICAgPE1vZGFsV3JhcHBlclxyXG4gICAgICAgICAgdGl0bGU9XCJUb3AgUmF0ZWRcIlxyXG4gICAgICAgICAgc2hvd01vZGFsPXt0b3BSYXRlZE1vZGFsfVxyXG4gICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0VG9wUmF0ZWRNb2RhbChmYWxzZSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50cmVuZGluZ19jb250ZW50X21vZGFsfT5cclxuICAgICAgICAgICAgICB7dG9wUmF0ZWQubGVuZ3RoID4gMCAgJiYgdG9wUmF0ZWQ/Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtzdHlsZXMudHJlbmRpbmdDb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICA8cD5UeXBlOiB7aXRlbS50eXBlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5EYXRlOiB7bW9tZW50KGl0ZW0uY3JlYXRlZEF0KS5mb3JtYXQoJ01NTSBERCwgWVlZWSAtIEhIOm1tIEEnKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+Q29udGVudDoge2l0ZW0udGV4dH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+Q29tbWVudHM6IHtpdGVtLmNvbW1lbnRzQ291bnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlJlYWN0aW9uczoge2l0ZW0ucmVhY3Rpb25zQ291bnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlJhdGluZzoge2l0ZW0ucmF0aW5nfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5TaGFyZToge2l0ZW0uc2hhcmVzQ291bnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Nb2RhbFdyYXBwZXI+XHJcbiAgICAgIDxNb2RhbFdyYXBwZXJcclxuICAgICAgICAgIHRpdGxlPVwiVHJlbmRpbmdcIlxyXG4gICAgICAgICAgc2hvd01vZGFsPXt0cmVuZGluZ01vZGFsfVxyXG4gICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0VHJlbmRpbmdNb2RhbChmYWxzZSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50cmVuZGluZ19jb250ZW50X21vZGFsfT5cclxuICAgICAgICAgICAgICB7dHJlbmRpbmdEYXRhLmxlbmd0aCA+IDAgJiYgdHJlbmRpbmdEYXRhPy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLnRyZW5kaW5nQ29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+VHlwZToge2l0ZW0udHlwZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+RGF0ZToge21vbWVudChpdGVtLmNyZWF0ZWRBdCkuZm9ybWF0KCdNTU0gREQsIFlZWVkgLSBISDptbSBBJyl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkNvbnRlbnQ6IHtpdGVtLnRleHR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkNvbW1lbnRzOiB7aXRlbS5jb21tZW50c0NvdW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5SZWFjdGlvbnM6IHtpdGVtLnJlYWN0aW9uc0NvdW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5SYXRpbmc6IHtpdGVtLnJhdGluZ308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+U2hhcmU6IHtpdGVtLnNoYXJlc0NvdW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L01vZGFsV3JhcHBlcj5cclxuICAgICAgPE1vZGFsV3JhcHBlclxyXG4gICAgICAgICAgdGl0bGU9XCJBZGQgTWFya2V0IEl0ZW1cIlxyXG4gICAgICAgICAgc2hvd01vZGFsPXttYXJrZXRNb2RhbH1cclxuICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldE1hcmtldE1vZGFsKGZhbHNlKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgIDxBZGRNYXJrZXRJdGVtIGF1dGg9e2F1dGh9IG9uVXBkYXRlPXthZGRNYXJrZXRJdGVtfSBsb2FkaW5nPXtzdG9yYWdlLmxvYWRpbmd9IGNhdGVnb3JpZXM9e2NhdGVnb3JpZXN9Lz5cclxuICAgICAgPC9Nb2RhbFdyYXBwZXI+XHJcbiAgICAgIDxNb2RhbFdyYXBwZXJcclxuICAgICAgICAgIHRpdGxlPVwiQWRkIE1hcmtldCBJdGVtXCJcclxuICAgICAgICAgIHNob3dNb2RhbD17ZWRpdE1hcmtldE1vZGFsfVxyXG4gICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0RWRpdE1hcmtldE1vZGFsKGZhbHNlKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgIDxFZGl0TWFya2V0SXRlbSBhdXRoPXthdXRofSBvblVwZGF0ZT17RWRpdE1hcmtldEl0ZW19IGxvYWRpbmc9e3N0b3JhZ2UubG9hZGluZ30gY2F0ZWdvcmllcz17Y2F0ZWdvcmllc30gaXRlbT17bWFya2V0SXRlbX0vPlxyXG4gICAgICA8L01vZGFsV3JhcHBlcj5cclxuICAgICAgPE1vZGFsV3JhcHBlclxyXG4gICAgICAgICAgdGl0bGU9XCJNYXJrZXQgSXRlbSBEZXRhaWxcIlxyXG4gICAgICAgICAgc2hvd01vZGFsPXtkZXRhaWxNYXJrZXRNb2RhbH1cclxuICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldERldGFpbE1hcmtldE1vZGFsKGZhbHNlKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgIDxFZGl0TWFya2V0SXRlbSBhdXRoPXthdXRofSBvblVwZGF0ZT17RWRpdE1hcmtldEl0ZW19IGxvYWRpbmc9e3N0b3JhZ2UubG9hZGluZ30gY2F0ZWdvcmllcz17Y2F0ZWdvcmllc30gaXRlbT17bWFya2V0SXRlbX0vPlxyXG4gICAgICA8L01vZGFsV3JhcHBlcj5cclxuICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vYmlsZV9oZWFkZXJ9PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVxdWlyZUF1dGgoUHJvZmlsZSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=