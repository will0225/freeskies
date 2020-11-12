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
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./actions */ "./containers/Feed/actions/index.js");
/* harmony import */ var components_timeline_TimelinePosts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/timeline/TimelinePosts */ "./components/timeline/TimelinePosts.js");
/* harmony import */ var components_common_LoadingWrapper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/common/LoadingWrapper */ "./components/common/LoadingWrapper.js");


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

  var _user$profilePhoto, _user$profilePhoto2;

  const {
    0: storage,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_storage_ActivityContext__WEBPACK_IMPORTED_MODULE_11__["ActivityContext"]);
  const {
    0: postModal,
    1: setPostModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

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
        dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_12__["setActivity"])(totalData));
      } else if (status === 403) {
        authServices.refreshToken(getActivity);
      } else {
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
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_12__["setLoading"])(true, 'posting'));
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

        let totalData = [element, ...storage.activityData];
        console.log(totalData);
        dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_12__["setActivity"])(totalData));
      } else {
        antd__WEBPACK_IMPORTED_MODULE_9__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
      }

      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_12__["setLoading"])(false, 'posting'));
      return await request;
    } catch (error) {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_12__["setLoading"])(false, 'posting'));
    }
  };

  const ratePost = async (type, postId, rate) => {
    try {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_12__["setLoading"])(true, 'posting'));
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
        storage.activityData.map(element => {
          if (element.id === postId && element.type === type) {
            element.rating = rate;
            return element;
          }
        });
        dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_12__["setActivity"])(storage.activityData));
      } else {
        antd__WEBPACK_IMPORTED_MODULE_9__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
      }

      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_12__["setLoading"])(false, 'posting'));
      return await request;
    } catch (error) {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_12__["setLoading"])(false, 'posting'));
    }
  };

  const onUpdateTimeline = data => {
    storage.activityData.map(element => {
      if (element.id == data.id) {
        let addElement = _objectSpread({
          account: auth.user
        }, data.comments[0]);

        element.comments.push(addElement);
        element.commentsCount += data.commentsCount;
        return element;
      }
    });
    console.log(storage.activityData);
    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_12__["setActivity"])(storage.activityData));
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
  const {
    user
  } = auth;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(components_header_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 7
    }
  }), mobile_profile_header ? __jsx("div", {
    className: _styles_feed_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.mobile_profile_header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 30
    }
  }, __jsx("div", {
    className: _styles_feed_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_feed_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.avatar_image,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 13
    }
  }, __jsx(_components_common_Avatar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    size: 40,
    url: user === null || user === void 0 ? void 0 : (_user$profilePhoto = user.profilePhoto) === null || _user$profilePhoto === void 0 ? void 0 : _user$profilePhoto.src,
    text: user === null || user === void 0 ? void 0 : user.username,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 15
    }
  }))), __jsx("p", {
    className: _styles_feed_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.mobile_fullname,
    style: {
      cursor: 'pointer'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 7
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 9
    }
  }, "".concat(user === null || user === void 0 ? void 0 : user.firstName, " ").concat(user === null || user === void 0 ? void 0 : user.lastName)))) : null, __jsx("div", {
    className: _styles_feed_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.feed,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_feed_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.feed_container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_feed_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.createPostDiv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 11
    }
  }, __jsx(_components_common_Avatar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    size: 50,
    url: user === null || user === void 0 ? void 0 : (_user$profilePhoto2 = user.profilePhoto) === null || _user$profilePhoto2 === void 0 ? void 0 : _user$profilePhoto2.src,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 13
    }
  }), __jsx("input", {
    className: _styles_feed_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.createPostInput,
    placeholder: "What's on your mind?",
    onClick: modalPopup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 13
    }
  })), __jsx(components_common_LoadingWrapper__WEBPACK_IMPORTED_MODULE_14__["default"], {
    loading: storage.loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 11
    }
  }, __jsx(components_timeline_TimelinePosts__WEBPACK_IMPORTED_MODULE_13__["default"], {
    data: storage.activityData,
    onUpdateTimeline: onUpdateTimeline,
    onRatePost: ratePost,
    likeAction: likeAction,
    shareAction: shareAction,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 13
    }
  })))), __jsx(_components_common_ModalWrapper__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Create Post",
    showModal: postModal,
    onClose: () => setPostModal(0),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 7
    }
  }, __jsx(components_profile_PostingPost__WEBPACK_IMPORTED_MODULE_4__["default"], {
    loading: storage.postingLoading,
    onPosting: createPost,
    modalPopup: modalPopup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 11
    }
  })));
}

_s(Feed, "rs5wtYecd/QO1D6A7bErdNfN5ho=");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9GZWVkL0ZlZWQuanMiXSwibmFtZXMiOlsiRmVlZCIsImF1dGhTZXJ2aWNlcyIsImF1dGgiLCJzdG9yYWdlIiwiZGlzcGF0Y2giLCJ1c2VDb250ZXh0IiwiQWN0aXZpdHlDb250ZXh0IiwicG9zdE1vZGFsIiwic2V0UG9zdE1vZGFsIiwidXNlU3RhdGUiLCJnZXRBY3Rpdml0eSIsInRva2VuIiwicmVxdWVzdCIsIkFQSSIsIm1ldGhvZCIsInVybCIsImhlYWRlcnMiLCJkYXRhIiwic3RhdHVzIiwidG90YWxEYXRhIiwibWFwIiwiZWxlbWVudCIsImZpbHRlckFjY291bnREYXRhIiwic2V0QWN0aXZpdHkiLCJyZWZyZXNoVG9rZW4iLCJtZXNzYWdlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY29tbWVudF9zaGFyZWQiLCJ0eXBlIiwiY29tbWVudGVkIiwiY29tbWVudHMiLCJhY2NvdW50Iiwic2hhcmVkIiwiY3JlYXRlUG9zdCIsImRhdGFGb3JSZXF1ZXN0Iiwic2V0TG9hZGluZyIsImNvbW1lbnRzQ291bnQiLCJyYXRpbmciLCJyZWFjdGlvbnMiLCJyZWFjdGlvbnNDb3VudCIsInNoYXJlcyIsInNoYXJlc0NvdW50IiwidXNlciIsImFjdGl2aXR5RGF0YSIsInJhdGVQb3N0IiwicG9zdElkIiwicmF0ZSIsInJhdGVkIiwid2FybiIsImlkIiwib25VcGRhdGVUaW1lbGluZSIsImFkZEVsZW1lbnQiLCJwdXNoIiwibW9kYWxQb3B1cCIsImxpa2VBY3Rpb24iLCJ0ZXJtIiwicmVhY3RlZCIsInJlYWN0aW9uIiwic3VjY2VzcyIsIkVycm9yIiwic2hhcmVBY3Rpb24iLCJ1c2VFZmZlY3QiLCJtb2JpbGVfcHJvZmlsZV9oZWFkZXIiLCJzdHlsZXMiLCJhdmF0YXIiLCJhdmF0YXJfaW1hZ2UiLCJwcm9maWxlUGhvdG8iLCJzcmMiLCJ1c2VybmFtZSIsIm1vYmlsZV9mdWxsbmFtZSIsImN1cnNvciIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZmVlZCIsImZlZWRfY29udGFpbmVyIiwiY3JlYXRlUG9zdERpdiIsImNyZWF0ZVBvc3RJbnB1dCIsImxvYWRpbmciLCJwb3N0aW5nTG9hZGluZyIsInJlcXVpcmVBdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxJQUFULENBQWM7QUFBRUMsY0FBRjtBQUFnQkM7QUFBaEIsQ0FBZCxFQUFzQztBQUFBOztBQUFBOztBQUNwQyxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBc0JDLHdEQUFVLENBQUNDLHlFQUFELENBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCQyxzREFBUSxDQUFDLEtBQUQsQ0FBMUM7O0FBQ0EsUUFBTUMsV0FBVyxHQUFHLE1BQU9DLEtBQVAsSUFBaUI7QUFDbkMsUUFBSTtBQUNGLFlBQU1DLE9BQU8sR0FBRyxNQUFNQywyREFBRyxDQUFDO0FBQ3hCQyxjQUFNLEVBQUUsTUFEZ0I7QUFFeEJDLFdBQUcsRUFBRSxvQkFGbUI7QUFHeEJDLGVBQU8sRUFBRTtBQUFFLHFCQUFXTDtBQUFiO0FBSGUsT0FBRCxDQUF6QjtBQUtBLFlBQU07QUFBRU0sWUFBRjtBQUFRQztBQUFSLFVBQW1CTixPQUF6Qjs7QUFDQSxVQUFJTSxNQUFNLEtBQUssR0FBZixFQUFvQjtBQUNsQixZQUFJQyxTQUFTLEdBQUdGLElBQUksQ0FBQ0csR0FBTCxDQUFTQyxPQUFPLElBQUk7QUFDbENBLGlCQUFPLEdBQUdDLGlCQUFpQixDQUFDRCxPQUFELENBQTNCO0FBQ0EsaUJBQU9BLE9BQVA7QUFDRCxTQUhlLENBQWhCO0FBSUFqQixnQkFBUSxDQUFDbUIsNkRBQVcsQ0FBQ0osU0FBRCxDQUFaLENBQVI7QUFDRCxP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R0UsY0FBVSxFQUFFTixRQUhkO0FBSUUsY0FBVSxFQUFFVSxVQUpkO0FBS0UsZUFBVyxFQUFFTSxXQUxmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVhGLENBREYsQ0FqQkYsRUF3Q0UsTUFBQyx1RUFBRDtBQUNJLFNBQUssRUFBQyxhQURWO0FBRUksYUFBUyxFQUFFdkQsU0FGZjtBQUdJLFdBQU8sRUFBRSxNQUFNQyxZQUFZLENBQUMsQ0FBRCxDQUgvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0ksTUFBQyxzRUFBRDtBQUNJLFdBQU8sRUFBRUwsT0FBTyxDQUFDNkUsY0FEckI7QUFFSSxhQUFTLEVBQUU3QyxVQUZmO0FBR0ksY0FBVSxFQUFFb0IsVUFIaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxKLENBeENGLENBREY7QUFzREQ7O0dBN1RRdkQsSTs7S0FBQUEsSTtBQWdVTSxxRUFBQWlGLHlFQUFXLENBQUNqRixJQUFELENBQTFCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FjdGl2aXR5LjA2YTNjYzEyMWUzNGEwOTA5ZGYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlcic7XHJcbmltcG9ydCBGZWVkUG9zdHMgZnJvbSAnY29tcG9uZW50cy9wcm9maWxlL0ZlZWRQb3N0cyc7XHJcbmltcG9ydCBQb3N0aW5nUG9zdCBmcm9tICdjb21wb25lbnRzL3Byb2ZpbGUvUG9zdGluZ1Bvc3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL2ZlZWQubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgTW9kYWxXcmFwcGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9uL01vZGFsV3JhcHBlcic7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb24vQXZhdGFyJztcclxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEFQSSBmcm9tICdjb25maWdzL0FQSSc7XHJcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHJlcXVpcmVBdXRoIGZyb20gJy4uLy4uL2hlbHBlcnMvaG9jL3JlcXVpcmVBdXRoJztcclxuaW1wb3J0IHsgQWN0aXZpdHlDb250ZXh0IH0gZnJvbSAnLi9zdG9yYWdlL0FjdGl2aXR5Q29udGV4dCc7XHJcbmltcG9ydCB7IHNldExvYWRpbmcsIHNldEFjdGl2aXR5IH0gZnJvbSAnLi9hY3Rpb25zJztcclxuaW1wb3J0IFRpbWVsaW5lUG9zdHMgZnJvbSAnY29tcG9uZW50cy90aW1lbGluZS9UaW1lbGluZVBvc3RzJztcclxuaW1wb3J0IExvYWRpbmdXcmFwcGVyIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL0xvYWRpbmdXcmFwcGVyJztcclxuXHJcbmZ1bmN0aW9uIEZlZWQoeyBhdXRoU2VydmljZXMsIGF1dGggfSkge1xyXG4gIGNvbnN0IFtzdG9yYWdlLCBkaXNwYXRjaF0gPSB1c2VDb250ZXh0KEFjdGl2aXR5Q29udGV4dCk7ICBcclxuICBjb25zdCBbcG9zdE1vZGFsLCBzZXRQb3N0TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGdldEFjdGl2aXR5ID0gYXN5bmMgKHRva2VuKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6ICcvYWNjb3VudHMvYWN0aXZpdHknLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiB0b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIHZhciB0b3RhbERhdGEgPSBkYXRhLm1hcChlbGVtZW50ID0+IHsgXHJcbiAgICAgICAgICBlbGVtZW50ID0gZmlsdGVyQWNjb3VudERhdGEoZWxlbWVudCk7XHJcbiAgICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGRpc3BhdGNoKHNldEFjdGl2aXR5KHRvdGFsRGF0YSkpO1xyXG4gICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gNDAzKSB7XHJcbiAgICAgICAgYXV0aFNlcnZpY2VzLnJlZnJlc2hUb2tlbihnZXRBY3Rpdml0eSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZmlsdGVyQWNjb3VudERhdGEgPSAoY29tbWVudF9zaGFyZWQpID0+IHtcclxuICAgIGlmKGNvbW1lbnRfc2hhcmVkLnR5cGUgPT09ICdDb21tZW50Jykge1xyXG4gICAgICBpZihjb21tZW50X3NoYXJlZC5jb21tZW50ZWQudHlwZSA9PSAnUG9zdCcpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uY29tbWVudF9zaGFyZWQuY29tbWVudGVkLFxyXG4gICAgICAgICAgY29tbWVudHM6IFt7Li4uY29tbWVudF9zaGFyZWQsIGFjY291bnQ6IGNvbW1lbnRfc2hhcmVkLmNvbW1lbnRlZC5hY2NvdW50fV1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoY29tbWVudF9zaGFyZWQuY29tbWVudGVkLnR5cGUgPT0gJ0NvbW1lbnQnKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLmNvbW1lbnRfc2hhcmVkLmNvbW1lbnRlZC5jb21tZW50ZWQsXHJcbiAgICAgICAgICBjb21tZW50czogW3suLi5jb21tZW50X3NoYXJlZC5jb21tZW50ZWQsIGNvbW1lbnRzOiBbY29tbWVudF9zaGFyZWRdLCBhY2NvdW50OiBjb21tZW50X3NoYXJlZC5jb21tZW50ZWQuY29tbWVudGVkLmFjY291bnR9XVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmKGNvbW1lbnRfc2hhcmVkLmNvbW1lbnRlZC50eXBlID09ICdTaGFyZScpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uY29tbWVudF9zaGFyZWQuY29tbWVudGVkLnNoYXJlZCxcclxuICAgICAgICAgIGNvbW1lbnRzOiBbeyAuLi5jb21tZW50X3NoYXJlZCwgYWNjb3VudDogY29tbWVudF9zaGFyZWQuY29tbWVudGVkLnNoYXJlZC5hY2NvdW50IH1dXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5jb21tZW50X3NoYXJlZC5jb21tZW50ZWQsXHJcbiAgICAgICAgICBjb21tZW50czogW3sgLi4uY29tbWVudF9zaGFyZWQsIGFjY291bnQ6IGNvbW1lbnRfc2hhcmVkLmNvbW1lbnRlZC5hY2NvdW50IH1dXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYoY29tbWVudF9zaGFyZWQudHlwZSA9PT0gJ1Bvc3QnKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbW1lbnRfc2hhcmVkO1xyXG4gICAgfSBlbHNlIGlmKGNvbW1lbnRfc2hhcmVkLnR5cGUgPT09ICdTaGFyZScpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5jb21tZW50X3NoYXJlZC5zaGFyZWQsXHJcbiAgICAgICAgY29tbWVudHM6IFt7Li4uY29tbWVudF9zaGFyZWQsIGFjY291bnQ6IGNvbW1lbnRfc2hhcmVkLnNoYXJlZC5hY2NvdW50IH1dXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBjb21tZW50X3NoYXJlZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGNyZWF0ZVBvc3QgPSBhc3luYyAoZGF0YUZvclJlcXVlc3QpID0+IHtcclxuICAgIHRyeSB7XHJcblxyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKHRydWUsICdwb3N0aW5nJykpO1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6ICcvcG9zdHMnLFxyXG4gICAgICAgIGRhdGE6IGRhdGFGb3JSZXF1ZXN0LFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuXHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgIHNldFBvc3RNb2RhbCgwKTtcclxuICAgICAgICB2YXIgZWxlbWVudCA9ICB7XHJcbiAgICAgICAgICB0eXBlOiAnUG9zdCcsXHJcbiAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgY29tbWVudHM6IFtdLFxyXG4gICAgICAgICAgY29tbWVudHNDb3VudDogMCxcclxuICAgICAgICAgIHJhdGluZzogbnVsbCxcclxuICAgICAgICAgIHJlYWN0aW9uczogW10sXHJcbiAgICAgICAgICByZWFjdGlvbnNDb3VudDogMCxcclxuICAgICAgICAgIHNoYXJlczogW10sXHJcbiAgICAgICAgICBzaGFyZXNDb3VudDogMCxcclxuICAgICAgICAgIGFjY291bnQ6IGF1dGgudXNlclxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdG90YWxEYXRhID0gW1xyXG4gICAgICAgICAgZWxlbWVudCwgLi4uc3RvcmFnZS5hY3Rpdml0eURhdGFcclxuICAgICAgICBdXHJcbiAgICAgICAgY29uc29sZS5sb2codG90YWxEYXRhKTtcclxuICAgICAgICBkaXNwYXRjaChzZXRBY3Rpdml0eSh0b3RhbERhdGEpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlLCAncG9zdGluZycpKTtcclxuXHJcbiAgICAgIHJldHVybiBhd2FpdCByZXF1ZXN0O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSwgJ3Bvc3RpbmcnKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmF0ZVBvc3QgPSBhc3luYyAodHlwZSwgcG9zdElkLCByYXRlKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKHRydWUsICdwb3N0aW5nJykpO1xyXG4gICAgICBsZXQgdXJsID0gJyc7XHJcblxyXG4gICAgICBpZiAodHlwZSA9PT0gJ1Bob3RvJykge1xyXG4gICAgICAgIHVybCA9ICcvcGhvdG9zL3JhdGUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdWaWRlb0NsaXAnKSB7XHJcbiAgICAgICAgdXJsID0gJy92aWRlby1jbGlwcy9yYXRlJztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnSXRlbScpIHtcclxuICAgICAgICB1cmwgPSAnL2l0ZW1zL3JhdGUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdQb3N0Jykge1xyXG4gICAgICAgIHVybCA9ICcvcG9zdHMvcmF0ZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0NvbW1lbnQnKSB7XHJcbiAgICAgICAgdXJsID0gJy9jb21tZW50cy9yYXRlJztcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHJhdGVkOiBwb3N0SWQsXHJcbiAgICAgICAgICByYXRpbmc6IHJhdGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcblxyXG4gICAgICBjb25zb2xlLndhcm4oJ3JhdGVQb3N0JywgZGF0YSwgc3RhdHVzKTtcclxuXHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgIHN0b3JhZ2UuYWN0aXZpdHlEYXRhLm1hcChlbGVtZW50ID0+IHtcclxuICAgICAgICAgIGlmKGVsZW1lbnQuaWQgPT09IHBvc3RJZCAmJiBlbGVtZW50LnR5cGUgPT09IHR5cGUpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5yYXRpbmcgPSByYXRlO1xyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGRpc3BhdGNoKHNldEFjdGl2aXR5KHN0b3JhZ2UuYWN0aXZpdHlEYXRhKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSwgJ3Bvc3RpbmcnKSk7XHJcblxyXG4gICAgICByZXR1cm4gYXdhaXQgcmVxdWVzdDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UsICdwb3N0aW5nJykpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG5cclxuICBjb25zdCBvblVwZGF0ZVRpbWVsaW5lID0gKGRhdGEpID0+IHtcclxuICAgIHN0b3JhZ2UuYWN0aXZpdHlEYXRhLm1hcChlbGVtZW50ID0+IHtcclxuICAgICAgaWYoZWxlbWVudC5pZCA9PSBkYXRhLmlkKSB7XHJcbiAgICAgICAgbGV0IGFkZEVsZW1lbnQgPSB7XHJcbiAgICAgICAgICBhY2NvdW50OiBhdXRoLnVzZXIsIFxyXG4gICAgICAgICAgLi4uZGF0YS5jb21tZW50c1swXVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbGVtZW50LmNvbW1lbnRzLnB1c2goYWRkRWxlbWVudCk7XHJcbiAgICAgICAgZWxlbWVudC5jb21tZW50c0NvdW50ICs9IGRhdGEuY29tbWVudHNDb3VudDtcclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIGNvbnNvbGUubG9nKHN0b3JhZ2UuYWN0aXZpdHlEYXRhKTtcclxuICAgIGRpc3BhdGNoKHNldEFjdGl2aXR5KHN0b3JhZ2UuYWN0aXZpdHlEYXRhKSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBtb2RhbFBvcHVwID0gKCkgPT4ge1xyXG4gICAgc2V0UG9zdE1vZGFsKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbGlrZUFjdGlvbiA9IGFzeW5jICh0eXBlLCBpZCwgdGVybSkgPT4ge1xyXG4gICAgdmFyIHVybCA9ICcnO1xyXG4gICAgaWYgKHR5cGUgPT09ICdQaG90bycpIHtcclxuICAgICAgdXJsID0gJy9waG90b3MvcmVhY3QnO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnVmlkZW9DbGlwJykge1xyXG4gICAgICB1cmwgPSAnL3ZpZGVvLWNsaXBzL3JlYWN0JztcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0l0ZW0nKSB7XHJcbiAgICAgIHVybCA9ICcvaXRlbXMvcmVhY3QnO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnUG9zdCcpIHtcclxuICAgICAgdXJsID0gJy9wb3N0cy9yZWFjdCc7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdDb21tZW50Jykge1xyXG4gICAgICB1cmwgPSAnL2NvbW1lbnRzL3JlYWN0JztcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1NoYXJlJykge1xyXG4gICAgICB1cmwgPSAnL3NoYXJlcy9yZWFjdCc7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgcmVhY3RlZDogaWQsXHJcbiAgICAgICAgICByZWFjdGlvbjogdGVybVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG5cclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKCdFdmFsdWF0ZSBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4gIGNvbnN0IHNoYXJlQWN0aW9uID0gYXN5bmMgKHR5cGUsIGlkKSA9PiB7XHJcblxyXG4gICAgdmFyIHVybCA9ICcnO1xyXG4gICAgICBpZiAodHlwZSA9PT0gJ1Bob3RvJykge1xyXG4gICAgICAgIHVybCA9ICcvcGhvdG9zL3NoYXJlJztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnVmlkZW9DbGlwJykge1xyXG4gICAgICAgIHVybCA9ICcvdmlkZW8tY2xpcHMvc2hhcmUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdJdGVtJykge1xyXG4gICAgICAgIHVybCA9ICcvaXRlbXMvc2hhcmUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdQb3N0Jykge1xyXG4gICAgICAgIHVybCA9ICcvcG9zdHMvc2hhcmUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdDb21tZW50Jykge1xyXG4gICAgICAgIHVybCA9ICcvY29tbWVudHMvc2hhcmUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdTaGFyZScpIHtcclxuICAgICAgICB1cmwgPSAnL3Bvc3RzL3NoYXJlJztcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzaGFyZWQ6IGlkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG5cclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKCdFdmFsdWF0ZSBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldEFjdGl2aXR5KGF1dGgudG9rZW4pO1xyXG4gIH0sIFtdKTtcclxuICBcclxuICBjb25zdCB7IHVzZXIgfSA9IGF1dGg7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIHttb2JpbGVfcHJvZmlsZV9oZWFkZXI/PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2JpbGVfcHJvZmlsZV9oZWFkZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyX2ltYWdlfT5cclxuICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgIHNpemU9ezQwfVxyXG4gICAgICAgICAgICAgICAgICB1cmw9e3VzZXI/LnByb2ZpbGVQaG90bz8uc3JjfVxyXG4gICAgICAgICAgICAgICAgICB0ZXh0PXt1c2VyPy51c2VybmFtZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMubW9iaWxlX2Z1bGxuYW1lfSBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fT5cclxuICAgICAgICA8c3Bhbj57YCR7dXNlcj8uZmlyc3ROYW1lfSAke3VzZXI/Lmxhc3ROYW1lfWB9PC9zcGFuPlxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj46bnVsbH1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mZWVkfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZlZWRfY29udGFpbmVyfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY3JlYXRlUG9zdERpdn0+XHJcbiAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICAgIHNpemU9ezUwfVxyXG4gICAgICAgICAgICAgICAgdXJsPXt1c2VyPy5wcm9maWxlUGhvdG8/LnNyY31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLmNyZWF0ZVBvc3RJbnB1dH0gcGxhY2Vob2xkZXI9XCJXaGF0J3Mgb24geW91ciBtaW5kP1wiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17bW9kYWxQb3B1cH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICA8L2lucHV0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8TG9hZGluZ1dyYXBwZXIgbG9hZGluZz17c3RvcmFnZS5sb2FkaW5nfT5cclxuICAgICAgICAgICAgPFRpbWVsaW5lUG9zdHNcclxuICAgICAgICAgICAgICBkYXRhPXtzdG9yYWdlLmFjdGl2aXR5RGF0YX1cclxuICAgICAgICAgICAgICBvblVwZGF0ZVRpbWVsaW5lPXtvblVwZGF0ZVRpbWVsaW5lfVxyXG4gICAgICAgICAgICAgIG9uUmF0ZVBvc3Q9e3JhdGVQb3N0fVxyXG4gICAgICAgICAgICAgIGxpa2VBY3Rpb249e2xpa2VBY3Rpb259XHJcbiAgICAgICAgICAgICAgc2hhcmVBY3Rpb249e3NoYXJlQWN0aW9ufVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Mb2FkaW5nV3JhcHBlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxNb2RhbFdyYXBwZXJcclxuICAgICAgICAgIHRpdGxlPVwiQ3JlYXRlIFBvc3RcIlxyXG4gICAgICAgICAgc2hvd01vZGFsPXtwb3N0TW9kYWx9XHJcbiAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRQb3N0TW9kYWwoMCl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFBvc3RpbmdQb3N0XHJcbiAgICAgICAgICAgICAgbG9hZGluZz17c3RvcmFnZS5wb3N0aW5nTG9hZGluZ31cclxuICAgICAgICAgICAgICBvblBvc3Rpbmc9e2NyZWF0ZVBvc3R9XHJcbiAgICAgICAgICAgICAgbW9kYWxQb3B1cD17bW9kYWxQb3B1cH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgIDwvTW9kYWxXcmFwcGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlcXVpcmVBdXRoKEZlZWQpOyJdLCJzb3VyY2VSb290IjoiIn0=