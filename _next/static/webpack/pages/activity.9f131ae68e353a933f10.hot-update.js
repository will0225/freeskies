webpackHotUpdate_N_E("pages/activity",{

/***/ "./containers/Feed/Feed.js":
/*!*********************************!*\
  !*** ./containers/Feed/Feed.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/header/Header */ "./components/header/Header.js");
/* harmony import */ var components_profile_FeedPosts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/profile/FeedPosts */ "./components/profile/FeedPosts.js");
/* harmony import */ var components_profile_PostingPost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/profile/PostingPost */ "./components/profile/PostingPost.js");
/* harmony import */ var _styles_feed_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/feed.module.scss */ "./containers/Feed/styles/feed.module.scss");
/* harmony import */ var _styles_feed_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_feed_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_common_ModalWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/common/ModalWrapper */ "./components/common/ModalWrapper.js");
/* harmony import */ var _components_common_Avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/common/Avatar */ "./components/common/Avatar.js");
/* harmony import */ var configs_API__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! configs/API */ "./configs/API.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _helpers_hoc_requireAuth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../helpers/hoc/requireAuth */ "./helpers/hoc/requireAuth.js");
/* harmony import */ var _storage_ActivityContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./storage/ActivityContext */ "./containers/Feed/storage/ActivityContext.js");


var _jsxFileName = "E:\\freeskies_fe_code\\containers\\Feed\\Feed.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }













function Feed({
  authServices,
  auth
}) {
  _s();

  const {
    0: postModal,
    1: setPostModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: activity,
    1: setActivity
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);

  const getActivity = async token => {
    try {
      const request = await Object(configs_API__WEBPACK_IMPORTED_MODULE_8__["default"])({
        method: 'post',
        url: '/accounts/activity',
        headers: {
          'x-token': token
        }
      });
      const {
        data,
        status
      } = request;

      if (status === 200) {
        var totalData = data.map(element => {
          element = filterAccountData(element);
          return element;
        });
        activity = totalData;
      } else if (status === 403) {} else {
        antd__WEBPACK_IMPORTED_MODULE_9__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
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
            account: comment_shared.commented.account
          })]
        });
      } else if (comment_shared.commented.type == 'Comment') {
        return _objectSpread(_objectSpread({}, comment_shared.commented.commented), {}, {
          comments: [_objectSpread(_objectSpread({}, comment_shared.commented), {}, {
            comments: [comment_shared],
            account: comment_shared.commented.commented.account
          })]
        });
      } else if (comment_shared.commented.type == 'Share') {
        return _objectSpread(_objectSpread({}, comment_shared.commented.shared), {}, {
          comments: [_objectSpread(_objectSpread({}, comment_shared), {}, {
            account: comment_shared.commented.shared.account
          })]
        });
      } else {
        return _objectSpread(_objectSpread({}, comment_shared.commented), {}, {
          comments: [_objectSpread(_objectSpread({}, comment_shared), {}, {
            account: comment_shared.commented.account
          })]
        });
      }
    } else if (comment_shared.type === 'Post') {
      return comment_shared;
    } else if (comment_shared.type === 'Share') {
      return _objectSpread(_objectSpread({}, comment_shared.shared), {}, {
        comments: [_objectSpread(_objectSpread({}, comment_shared), {}, {
          account: comment_shared.shared.account
        })]
      });
    } else {
      return comment_shared;
    }
  };

  const createPost = async dataForRequest => {
    try {
      // dispatch(setLoading(true, 'posting'));
      const request = await Object(configs_API__WEBPACK_IMPORTED_MODULE_8__["default"])({
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
          sharesCount: 0,
          account: auth.user
        });

        let totalData = [element, ...storage.timelineData];
        console.log(totalData);
        dispatch(setTimelineData(totalData));
      } else {
        antd__WEBPACK_IMPORTED_MODULE_9__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
      }

      dispatch(setLoading(false, 'posting'));
      return await request;
    } catch (error) {
      dispatch(setLoading(false, 'posting'));
    }
  };

  const ratePost = async (type, postId, rate) => {
    try {
      dispatch(setLoading(true, 'posting'));
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

      const request = await Object(configs_API__WEBPACK_IMPORTED_MODULE_8__["default"])({
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
      console.warn('ratePost', data, status);

      if (status === 201) {
        storage.timelineData.map(element => {
          if (element.id === postId && element.type === type) {
            element.rating = rate;
            return element;
          }
        });
        dispatch(setTimelineData(storage.timelineData));
      } else {
        antd__WEBPACK_IMPORTED_MODULE_9__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
      }

      dispatch(setLoading(false, 'posting'));
      return await request;
    } catch (error) {
      dispatch(setLoading(false, 'posting'));
    }
  };

  const onUpdateTimeline = data => {// storage.timelineData.map(element => {
    //   if(element.id == data.id) {
    //     let addElement = {
    //       account: auth.user, 
    //       ...data.comments[0]
    //     }
    //     element.comments.push(addElement);
    //     element.commentsCount += data.commentsCount;
    //     return element;
    //   }
    // })
    // console.log(storage.timelineData);
    // dispatch(setTimelineData(storage.timelineData));
  };

  const modalPopup = () => {
    setPostModal(true);
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
      const request = await Object(configs_API__WEBPACK_IMPORTED_MODULE_8__["default"])({
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
        antd__WEBPACK_IMPORTED_MODULE_9__["message"].success('Evaluate successfully');
      } else {
        antd__WEBPACK_IMPORTED_MODULE_9__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
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
      const request = await Object(configs_API__WEBPACK_IMPORTED_MODULE_8__["default"])({
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
        antd__WEBPACK_IMPORTED_MODULE_9__["message"].success('Evaluate successfully');
      } else {
        antd__WEBPACK_IMPORTED_MODULE_9__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
        throw new Error();
      }
    } catch (error) {
      console.log(error);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    getActivity(auth.token);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(components_header_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: _styles_feed_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.feed,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_feed_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.feed_container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 9
    }
  }, __jsx(components_profile_FeedPosts__WEBPACK_IMPORTED_MODULE_3__["default"], {
    profileFeed: activity,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 11
    }
  }))), __jsx(_components_common_ModalWrapper__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Create Post",
    showModal: postModal // onClose={() => setPostModal(0)}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 7
    }
  }, __jsx(components_profile_PostingPost__WEBPACK_IMPORTED_MODULE_4__["default"] // loading={storage.postingLoading}
  // onPosting={createPost}
  // modalPopup={modalPopup}
  , {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 11
    }
  })));
}

_s(Feed, "6+n1l01l5Stcp93n+axpPdRqiaQ=");

_c = Feed;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(_helpers_hoc_requireAuth__WEBPACK_IMPORTED_MODULE_10__["default"])(Feed));

var _c, _c2;

$RefreshReg$(_c, "Feed");
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

/***/ }),

/***/ "./containers/Feed/storage/ActivityContext.js":
/*!****************************************************!*\
  !*** ./containers/Feed/storage/ActivityContext.js ***!
  \****************************************************/
/*! exports provided: SET_LOADING, SET_POSTING_LOADING, SET_ACTIVITY_DATA, ActivityContext, ActivityProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LOADING", function() { return SET_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_POSTING_LOADING", function() { return SET_POSTING_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ACTIVITY_DATA", function() { return SET_ACTIVITY_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityContext", function() { return ActivityContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityProvider", function() { return ActivityProvider; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "E:\\freeskies_fe_code\\containers\\Feed\\storage\\ActivityContext.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

 // Actions Type

const SET_LOADING = 'activity/SET_LOADING';
const SET_POSTING_LOADING = 'activity/SET_POSTING_LOADING';
const SET_ACTIVITY_DATA = 'activity/SET_ACTIVITY_DATA';
const initialState = {
  loading: false,
  postingLoading: false,
  activityData: []
};

function reducer(state, {
  type,
  payload
}) {
  switch (type) {
    case SET_LOADING:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: payload
      });

    case SET_POSTING_LOADING:
      return _objectSpread(_objectSpread({}, state), {}, {
        postingLoading: payload
      });

    case SET_ACTIVITY_DATA:
      return _objectSpread(_objectSpread({}, state), {}, {
        activityData: payload
      });

    default:
      return state;
  }
}

const ActivityContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])([{}, () => {}]);
const ActivityProvider = ({
  children
}) => {
  _s();

  const value = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(reducer, initialState);
  return __jsx(ActivityContext.Provider, {
    value: value,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, children);
};

_s(ActivityProvider, "HDl9A1duRDI+maTNi9v2R1p+EwQ=");

_c = ActivityProvider;

var _c;

$RefreshReg$(_c, "ActivityProvider");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9GZWVkL0ZlZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRhaW5lcnMvRmVlZC9zdG9yYWdlL0FjdGl2aXR5Q29udGV4dC5qcyJdLCJuYW1lcyI6WyJGZWVkIiwiYXV0aFNlcnZpY2VzIiwiYXV0aCIsInBvc3RNb2RhbCIsInNldFBvc3RNb2RhbCIsInVzZVN0YXRlIiwiYWN0aXZpdHkiLCJzZXRBY3Rpdml0eSIsImdldEFjdGl2aXR5IiwidG9rZW4iLCJyZXF1ZXN0IiwiQVBJIiwibWV0aG9kIiwidXJsIiwiaGVhZGVycyIsImRhdGEiLCJzdGF0dXMiLCJ0b3RhbERhdGEiLCJtYXAiLCJlbGVtZW50IiwiZmlsdGVyQWNjb3VudERhdGEiLCJtZXNzYWdlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY29tbWVudF9zaGFyZWQiLCJ0eXBlIiwiY29tbWVudGVkIiwiY29tbWVudHMiLCJhY2NvdW50Iiwic2hhcmVkIiwiY3JlYXRlUG9zdCIsImRhdGFGb3JSZXF1ZXN0IiwiY29tbWVudHNDb3VudCIsInJhdGluZyIsInJlYWN0aW9ucyIsInJlYWN0aW9uc0NvdW50Iiwic2hhcmVzIiwic2hhcmVzQ291bnQiLCJ1c2VyIiwic3RvcmFnZSIsInRpbWVsaW5lRGF0YSIsImRpc3BhdGNoIiwic2V0VGltZWxpbmVEYXRhIiwic2V0TG9hZGluZyIsInJhdGVQb3N0IiwicG9zdElkIiwicmF0ZSIsInJhdGVkIiwid2FybiIsImlkIiwib25VcGRhdGVUaW1lbGluZSIsIm1vZGFsUG9wdXAiLCJsaWtlQWN0aW9uIiwidGVybSIsInJlYWN0ZWQiLCJyZWFjdGlvbiIsInN1Y2Nlc3MiLCJFcnJvciIsInNoYXJlQWN0aW9uIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiZmVlZCIsImZlZWRfY29udGFpbmVyIiwicmVxdWlyZUF1dGgiLCJTRVRfTE9BRElORyIsIlNFVF9QT1NUSU5HX0xPQURJTkciLCJTRVRfQUNUSVZJVFlfREFUQSIsImluaXRpYWxTdGF0ZSIsImxvYWRpbmciLCJwb3N0aW5nTG9hZGluZyIsImFjdGl2aXR5RGF0YSIsInJlZHVjZXIiLCJzdGF0ZSIsInBheWxvYWQiLCJBY3Rpdml0eUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQWN0aXZpdHlQcm92aWRlciIsImNoaWxkcmVuIiwidmFsdWUiLCJ1c2VSZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxJQUFULENBQWM7QUFBRUMsY0FBRjtBQUFnQkM7QUFBaEIsQ0FBZCxFQUFzQztBQUFBOztBQUNwQyxRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJDLHNEQUFRLENBQUMsS0FBRCxDQUExQztBQUNBLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkYsc0RBQVEsQ0FBQyxFQUFELENBQXhDOztBQUVBLFFBQU1HLFdBQVcsR0FBRyxNQUFPQyxLQUFQLElBQWlCO0FBQ25DLFFBQUk7QUFDRixZQUFNQyxPQUFPLEdBQUcsTUFBTUMsMkRBQUcsQ0FBQztBQUN4QkMsY0FBTSxFQUFFLE1BRGdCO0FBRXhCQyxXQUFHLEVBQUUsb0JBRm1CO0FBR3hCQyxlQUFPLEVBQUU7QUFBRSxxQkFBV0w7QUFBYjtBQUhlLE9BQUQsQ0FBekI7QUFLQSxZQUFNO0FBQUVNLFlBQUY7QUFBUUM7QUFBUixVQUFtQk4sT0FBekI7O0FBQ0EsVUFBSU0sTUFBTSxLQUFLLEdBQWYsRUFBb0I7QUFDbEIsWUFBSUMsU0FBUyxHQUFHRixJQUFJLENBQUNHLEdBQUwsQ0FBU0MsT0FBTyxJQUFJO0FBQ2xDQSxpQkFBTyxHQUFHQyxpQkFBaUIsQ0FBQ0QsT0FBRCxDQUEzQjtBQUNBLGlCQUFPQSxPQUFQO0FBQ0QsU0FIZSxDQUFoQjtBQUlBYixnQkFBUSxHQUFHVyxT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RUFBRUc7QUFBakM7O0FBRUY7QUFDRSxhQUFPRCxLQUFQO0FBWEo7QUFhRDs7QUFFTSxNQUFNRSxlQUFlLGdCQUFHQywyREFBYSxDQUFDLENBQUMsRUFBRCxFQUFLLE1BQU0sQ0FBRSxDQUFiLENBQUQsQ0FBckM7QUFFQSxNQUFNQyxnQkFBZ0IsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFrQjtBQUFBOztBQUNoRCxRQUFNQyxLQUFLLEdBQUdDLHdEQUFVLENBQUNSLE9BQUQsRUFBVUosWUFBVixDQUF4QjtBQUNBLFNBQ0UsTUFBQyxlQUFELENBQWlCLFFBQWpCO0FBQTBCLFNBQUssRUFBRVcsS0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRCxRQURILENBREY7QUFLRCxDQVBNOztHQUFNRCxnQjs7S0FBQUEsZ0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWN0aXZpdHkuOWYxMzFhZTY4ZTM1M2E5MzNmMTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSAnY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyJztcclxuaW1wb3J0IEZlZWRQb3N0cyBmcm9tICdjb21wb25lbnRzL3Byb2ZpbGUvRmVlZFBvc3RzJztcclxuaW1wb3J0IFBvc3RpbmdQb3N0IGZyb20gJ2NvbXBvbmVudHMvcHJvZmlsZS9Qb3N0aW5nUG9zdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvZmVlZC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBNb2RhbFdyYXBwZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb24vTW9kYWxXcmFwcGVyJztcclxuaW1wb3J0IEF2YXRhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9BdmF0YXInO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQVBJIGZyb20gJ2NvbmZpZ3MvQVBJJztcclxuaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgcmVxdWlyZUF1dGggZnJvbSAnLi4vLi4vaGVscGVycy9ob2MvcmVxdWlyZUF1dGgnO1xyXG5pbXBvcnQgeyBBY3Rpdml0eUNvbnRleHQgfSBmcm9tICcuL3N0b3JhZ2UvQWN0aXZpdHlDb250ZXh0JztcclxuXHJcbmZ1bmN0aW9uIEZlZWQoeyBhdXRoU2VydmljZXMsIGF1dGggfSkge1xyXG4gIGNvbnN0IFtwb3N0TW9kYWwsIHNldFBvc3RNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2FjdGl2aXR5LCBzZXRBY3Rpdml0eV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IGdldEFjdGl2aXR5ID0gYXN5bmMgKHRva2VuKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6ICcvYWNjb3VudHMvYWN0aXZpdHknLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiB0b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIHZhciB0b3RhbERhdGEgPSBkYXRhLm1hcChlbGVtZW50ID0+IHsgXHJcbiAgICAgICAgICBlbGVtZW50ID0gZmlsdGVyQWNjb3VudERhdGEoZWxlbWVudCk7XHJcbiAgICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGFjdGl2aXR5ID0gdG90YWxEYXRhO1xyXG4gICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gNDAzKSB7XHJcbiAgICAgICAgXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZmlsdGVyQWNjb3VudERhdGEgPSAoY29tbWVudF9zaGFyZWQpID0+IHtcclxuICAgIGlmKGNvbW1lbnRfc2hhcmVkLnR5cGUgPT09ICdDb21tZW50Jykge1xyXG4gICAgICBpZihjb21tZW50X3NoYXJlZC5jb21tZW50ZWQudHlwZSA9PSAnUG9zdCcpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uY29tbWVudF9zaGFyZWQuY29tbWVudGVkLFxyXG4gICAgICAgICAgY29tbWVudHM6IFt7Li4uY29tbWVudF9zaGFyZWQsIGFjY291bnQ6IGNvbW1lbnRfc2hhcmVkLmNvbW1lbnRlZC5hY2NvdW50fV1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoY29tbWVudF9zaGFyZWQuY29tbWVudGVkLnR5cGUgPT0gJ0NvbW1lbnQnKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLmNvbW1lbnRfc2hhcmVkLmNvbW1lbnRlZC5jb21tZW50ZWQsXHJcbiAgICAgICAgICBjb21tZW50czogW3suLi5jb21tZW50X3NoYXJlZC5jb21tZW50ZWQsIGNvbW1lbnRzOiBbY29tbWVudF9zaGFyZWRdLCBhY2NvdW50OiBjb21tZW50X3NoYXJlZC5jb21tZW50ZWQuY29tbWVudGVkLmFjY291bnR9XVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmKGNvbW1lbnRfc2hhcmVkLmNvbW1lbnRlZC50eXBlID09ICdTaGFyZScpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uY29tbWVudF9zaGFyZWQuY29tbWVudGVkLnNoYXJlZCxcclxuICAgICAgICAgIGNvbW1lbnRzOiBbeyAuLi5jb21tZW50X3NoYXJlZCwgYWNjb3VudDogY29tbWVudF9zaGFyZWQuY29tbWVudGVkLnNoYXJlZC5hY2NvdW50IH1dXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5jb21tZW50X3NoYXJlZC5jb21tZW50ZWQsXHJcbiAgICAgICAgICBjb21tZW50czogW3sgLi4uY29tbWVudF9zaGFyZWQsIGFjY291bnQ6IGNvbW1lbnRfc2hhcmVkLmNvbW1lbnRlZC5hY2NvdW50IH1dXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYoY29tbWVudF9zaGFyZWQudHlwZSA9PT0gJ1Bvc3QnKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbW1lbnRfc2hhcmVkO1xyXG4gICAgfSBlbHNlIGlmKGNvbW1lbnRfc2hhcmVkLnR5cGUgPT09ICdTaGFyZScpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5jb21tZW50X3NoYXJlZC5zaGFyZWQsXHJcbiAgICAgICAgY29tbWVudHM6IFt7Li4uY29tbWVudF9zaGFyZWQsIGFjY291bnQ6IGNvbW1lbnRfc2hhcmVkLnNoYXJlZC5hY2NvdW50IH1dXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBjb21tZW50X3NoYXJlZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGNyZWF0ZVBvc3QgPSBhc3luYyAoZGF0YUZvclJlcXVlc3QpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIGRpc3BhdGNoKHNldExvYWRpbmcodHJ1ZSwgJ3Bvc3RpbmcnKSk7XHJcblxyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6ICcvcG9zdHMnLFxyXG4gICAgICAgIGRhdGE6IGRhdGFGb3JSZXF1ZXN0LFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuXHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgIHNldFBvc3RNb2RhbCgwKTtcclxuICAgICAgICB2YXIgZWxlbWVudCA9ICB7XHJcbiAgICAgICAgICB0eXBlOiAnUG9zdCcsXHJcbiAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgY29tbWVudHM6IFtdLFxyXG4gICAgICAgICAgY29tbWVudHNDb3VudDogMCxcclxuICAgICAgICAgIHJhdGluZzogbnVsbCxcclxuICAgICAgICAgIHJlYWN0aW9uczogW10sXHJcbiAgICAgICAgICByZWFjdGlvbnNDb3VudDogMCxcclxuICAgICAgICAgIHNoYXJlczogW10sXHJcbiAgICAgICAgICBzaGFyZXNDb3VudDogMCxcclxuICAgICAgICAgIGFjY291bnQ6IGF1dGgudXNlclxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdG90YWxEYXRhID0gW1xyXG4gICAgICAgICAgZWxlbWVudCwgLi4uc3RvcmFnZS50aW1lbGluZURhdGFcclxuICAgICAgICBdXHJcbiAgICAgICAgY29uc29sZS5sb2codG90YWxEYXRhKTtcclxuICAgICAgICBkaXNwYXRjaChzZXRUaW1lbGluZURhdGEodG90YWxEYXRhKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSwgJ3Bvc3RpbmcnKSk7XHJcblxyXG4gICAgICByZXR1cm4gYXdhaXQgcmVxdWVzdDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UsICdwb3N0aW5nJykpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJhdGVQb3N0ID0gYXN5bmMgKHR5cGUsIHBvc3RJZCwgcmF0ZSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlLCAncG9zdGluZycpKTtcclxuICAgICAgbGV0IHVybCA9ICcnO1xyXG5cclxuICAgICAgaWYgKHR5cGUgPT09ICdQaG90bycpIHtcclxuICAgICAgICB1cmwgPSAnL3Bob3Rvcy9yYXRlJztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnVmlkZW9DbGlwJykge1xyXG4gICAgICAgIHVybCA9ICcvdmlkZW8tY2xpcHMvcmF0ZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0l0ZW0nKSB7XHJcbiAgICAgICAgdXJsID0gJy9pdGVtcy9yYXRlJztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnUG9zdCcpIHtcclxuICAgICAgICB1cmwgPSAnL3Bvc3RzL3JhdGUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdDb21tZW50Jykge1xyXG4gICAgICAgIHVybCA9ICcvY29tbWVudHMvcmF0ZSc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICByYXRlZDogcG9zdElkLFxyXG4gICAgICAgICAgcmF0aW5nOiByYXRlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG5cclxuICAgICAgY29uc29sZS53YXJuKCdyYXRlUG9zdCcsIGRhdGEsIHN0YXR1cyk7XHJcblxyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICBzdG9yYWdlLnRpbWVsaW5lRGF0YS5tYXAoZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICBpZihlbGVtZW50LmlkID09PSBwb3N0SWQgJiYgZWxlbWVudC50eXBlID09PSB0eXBlKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQucmF0aW5nID0gcmF0ZTtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBkaXNwYXRjaChzZXRUaW1lbGluZURhdGEoc3RvcmFnZS50aW1lbGluZURhdGEpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlLCAncG9zdGluZycpKTtcclxuXHJcbiAgICAgIHJldHVybiBhd2FpdCByZXF1ZXN0O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSwgJ3Bvc3RpbmcnKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcblxyXG4gIGNvbnN0IG9uVXBkYXRlVGltZWxpbmUgPSAoZGF0YSkgPT4ge1xyXG4gICAgLy8gc3RvcmFnZS50aW1lbGluZURhdGEubWFwKGVsZW1lbnQgPT4ge1xyXG4gICAgLy8gICBpZihlbGVtZW50LmlkID09IGRhdGEuaWQpIHtcclxuICAgIC8vICAgICBsZXQgYWRkRWxlbWVudCA9IHtcclxuICAgIC8vICAgICAgIGFjY291bnQ6IGF1dGgudXNlciwgXHJcbiAgICAvLyAgICAgICAuLi5kYXRhLmNvbW1lbnRzWzBdXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGVsZW1lbnQuY29tbWVudHMucHVzaChhZGRFbGVtZW50KTtcclxuICAgIC8vICAgICBlbGVtZW50LmNvbW1lbnRzQ291bnQgKz0gZGF0YS5jb21tZW50c0NvdW50O1xyXG4gICAgLy8gICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9KVxyXG4gICAgLy8gY29uc29sZS5sb2coc3RvcmFnZS50aW1lbGluZURhdGEpO1xyXG4gICAgLy8gZGlzcGF0Y2goc2V0VGltZWxpbmVEYXRhKHN0b3JhZ2UudGltZWxpbmVEYXRhKSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBtb2RhbFBvcHVwID0gKCkgPT4ge1xyXG4gICAgc2V0UG9zdE1vZGFsKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbGlrZUFjdGlvbiA9IGFzeW5jICh0eXBlLCBpZCwgdGVybSkgPT4ge1xyXG4gICAgdmFyIHVybCA9ICcnO1xyXG4gICAgaWYgKHR5cGUgPT09ICdQaG90bycpIHtcclxuICAgICAgdXJsID0gJy9waG90b3MvcmVhY3QnO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnVmlkZW9DbGlwJykge1xyXG4gICAgICB1cmwgPSAnL3ZpZGVvLWNsaXBzL3JlYWN0JztcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0l0ZW0nKSB7XHJcbiAgICAgIHVybCA9ICcvaXRlbXMvcmVhY3QnO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnUG9zdCcpIHtcclxuICAgICAgdXJsID0gJy9wb3N0cy9yZWFjdCc7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdDb21tZW50Jykge1xyXG4gICAgICB1cmwgPSAnL2NvbW1lbnRzL3JlYWN0JztcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1NoYXJlJykge1xyXG4gICAgICB1cmwgPSAnL3NoYXJlcy9yZWFjdCc7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgcmVhY3RlZDogaWQsXHJcbiAgICAgICAgICByZWFjdGlvbjogdGVybVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG5cclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKCdFdmFsdWF0ZSBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4gIGNvbnN0IHNoYXJlQWN0aW9uID0gYXN5bmMgKHR5cGUsIGlkKSA9PiB7XHJcblxyXG4gICAgdmFyIHVybCA9ICcnO1xyXG4gICAgICBpZiAodHlwZSA9PT0gJ1Bob3RvJykge1xyXG4gICAgICAgIHVybCA9ICcvcGhvdG9zL3NoYXJlJztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnVmlkZW9DbGlwJykge1xyXG4gICAgICAgIHVybCA9ICcvdmlkZW8tY2xpcHMvc2hhcmUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdJdGVtJykge1xyXG4gICAgICAgIHVybCA9ICcvaXRlbXMvc2hhcmUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdQb3N0Jykge1xyXG4gICAgICAgIHVybCA9ICcvcG9zdHMvc2hhcmUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdDb21tZW50Jykge1xyXG4gICAgICAgIHVybCA9ICcvY29tbWVudHMvc2hhcmUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdTaGFyZScpIHtcclxuICAgICAgICB1cmwgPSAnL3Bvc3RzL3NoYXJlJztcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzaGFyZWQ6IGlkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG5cclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKCdFdmFsdWF0ZSBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldEFjdGl2aXR5KGF1dGgudG9rZW4pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mZWVkfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZlZWRfY29udGFpbmVyfT5cclxuICAgICAgICAgIDxGZWVkUG9zdHMgcHJvZmlsZUZlZWQ9e2FjdGl2aXR5fS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TW9kYWxXcmFwcGVyXHJcbiAgICAgICAgICB0aXRsZT1cIkNyZWF0ZSBQb3N0XCJcclxuICAgICAgICAgIHNob3dNb2RhbD17cG9zdE1vZGFsfVxyXG4gICAgICAgICAgLy8gb25DbG9zZT17KCkgPT4gc2V0UG9zdE1vZGFsKDApfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxQb3N0aW5nUG9zdFxyXG4gICAgICAgICAgICAgIC8vIGxvYWRpbmc9e3N0b3JhZ2UucG9zdGluZ0xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgLy8gb25Qb3N0aW5nPXtjcmVhdGVQb3N0fVxyXG4gICAgICAgICAgICAgIC8vIG1vZGFsUG9wdXA9e21vZGFsUG9wdXB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICA8L01vZGFsV3JhcHBlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCByZXF1aXJlQXV0aChGZWVkKTsiLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gQWN0aW9ucyBUeXBlXHJcbmV4cG9ydCBjb25zdCBTRVRfTE9BRElORyA9ICdhY3Rpdml0eS9TRVRfTE9BRElORyc7XHJcbmV4cG9ydCBjb25zdCBTRVRfUE9TVElOR19MT0FESU5HID0gJ2FjdGl2aXR5L1NFVF9QT1NUSU5HX0xPQURJTkcnO1xyXG5leHBvcnQgY29uc3QgU0VUX0FDVElWSVRZX0RBVEEgPSAnYWN0aXZpdHkvU0VUX0FDVElWSVRZX0RBVEEnO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGxvYWRpbmc6IGZhbHNlLFxyXG4gIHBvc3RpbmdMb2FkaW5nOiBmYWxzZSxcclxuICBhY3Rpdml0eURhdGE6IFtdLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgeyB0eXBlLCBwYXlsb2FkIH0pIHtcclxuICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgIGNhc2UgU0VUX0xPQURJTkc6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiBwYXlsb2FkIH07XHJcblxyXG4gICAgY2FzZSBTRVRfUE9TVElOR19MT0FESU5HOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcG9zdGluZ0xvYWRpbmc6IHBheWxvYWQgfTtcclxuXHJcbiAgICBjYXNlIFNFVF9BQ1RJVklUWV9EQVRBOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgYWN0aXZpdHlEYXRhOiBwYXlsb2FkIH07XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFjdGl2aXR5Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoW3t9LCAoKSA9PiB7fV0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFjdGl2aXR5UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgdmFsdWUgPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBY3Rpdml0eUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9BY3Rpdml0eUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==