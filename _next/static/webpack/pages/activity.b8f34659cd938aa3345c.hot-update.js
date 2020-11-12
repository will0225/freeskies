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
    0: storage,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_storage_ActivityContext__WEBPACK_IMPORTED_MODULE_11__["ActivityContext"]);
  console.log(storage);

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

      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_12__["setLoading"])(false, 'posting'));
      return await request;
    } catch (error) {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_12__["setLoading"])(false, 'posting'));
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
      lineNumber: 278,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: _styles_feed_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.feed,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_feed_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.feed_container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 9
    }
  }, __jsx(components_profile_FeedPosts__WEBPACK_IMPORTED_MODULE_3__["default"], {
    profileFeed: [],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 11
    }
  }))), __jsx(_components_common_ModalWrapper__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Create Post",
    showModal: postModal // onClose={() => setPostModal(0)}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 7
    }
  }, __jsx(components_profile_PostingPost__WEBPACK_IMPORTED_MODULE_4__["default"] // loading={storage.postingLoading}
  // onPosting={createPost}
  // modalPopup={modalPopup}
  , {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 11
    }
  })));
}

_s(Feed, "r/kUMXMQiigvpFQ/2e2wEeHN5ok=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9GZWVkL0ZlZWQuanMiXSwibmFtZXMiOlsiRmVlZCIsImF1dGhTZXJ2aWNlcyIsImF1dGgiLCJwb3N0TW9kYWwiLCJzZXRQb3N0TW9kYWwiLCJ1c2VTdGF0ZSIsInN0b3JhZ2UiLCJkaXNwYXRjaCIsInVzZUNvbnRleHQiLCJBY3Rpdml0eUNvbnRleHQiLCJjb25zb2xlIiwibG9nIiwiZ2V0QWN0aXZpdHkiLCJ0b2tlbiIsInJlcXVlc3QiLCJBUEkiLCJtZXRob2QiLCJ1cmwiLCJoZWFkZXJzIiwiZGF0YSIsInN0YXR1cyIsInRvdGFsRGF0YSIsIm1hcCIsImVsZW1lbnQiLCJmaWx0ZXJBY2NvdW50RGF0YSIsImFjdGl2aXR5IiwibWVzc2FnZSIsImVycm9yIiwiY29tbWVudF9zaGFyZWQiLCJ0eXBlIiwiY29tbWVudGVkIiwiY29tbWVudHMiLCJhY2NvdW50Iiwic2hhcmVkIiwiY3JlYXRlUG9zdCIsImRhdGFGb3JSZXF1ZXN0IiwiY29tbWVudHNDb3VudCIsInJhdGluZyIsInJlYWN0aW9ucyIsInJlYWN0aW9uc0NvdW50Iiwic2hhcmVzIiwic2hhcmVzQ291bnQiLCJ1c2VyIiwidGltZWxpbmVEYXRhIiwic2V0VGltZWxpbmVEYXRhIiwic2V0TG9hZGluZyIsInJhdGVQb3N0IiwicG9zdElkIiwicmF0ZSIsInJhdGVkIiwid2FybiIsImlkIiwib25VcGRhdGVUaW1lbGluZSIsIm1vZGFsUG9wdXAiLCJsaWtlQWN0aW9uIiwidGVybSIsInJlYWN0ZWQiLCJyZWFjdGlvbiIsInN1Y2Nlc3MiLCJFcnJvciIsInNoYXJlQWN0aW9uIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiZmVlZCIsImZlZWRfY29udGFpbmVyIiwicmVxdWlyZUF1dGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTtBQUFBLEtBS0ksTUFBQyxzRUFBRCxDQUNJO0FBQ0E7QUFDQTtBQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMSixDQVBGLENBREY7QUFxQkQ7O0dBM1JRSCxJOztLQUFBQSxJO0FBOFJNLHFFQUFBaUUseUVBQVcsQ0FBQ2pFLElBQUQsQ0FBMUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWN0aXZpdHkuYjhmMzQ2NTljZDkzOGFhMzM0NWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSAnY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyJztcclxuaW1wb3J0IEZlZWRQb3N0cyBmcm9tICdjb21wb25lbnRzL3Byb2ZpbGUvRmVlZFBvc3RzJztcclxuaW1wb3J0IFBvc3RpbmdQb3N0IGZyb20gJ2NvbXBvbmVudHMvcHJvZmlsZS9Qb3N0aW5nUG9zdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvZmVlZC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBNb2RhbFdyYXBwZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb24vTW9kYWxXcmFwcGVyJztcclxuaW1wb3J0IEF2YXRhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9BdmF0YXInO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQVBJIGZyb20gJ2NvbmZpZ3MvQVBJJztcclxuaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgcmVxdWlyZUF1dGggZnJvbSAnLi4vLi4vaGVscGVycy9ob2MvcmVxdWlyZUF1dGgnO1xyXG5pbXBvcnQgeyBBY3Rpdml0eUNvbnRleHQgfSBmcm9tICcuL3N0b3JhZ2UvQWN0aXZpdHlDb250ZXh0JztcclxuaW1wb3J0IHsgc2V0TG9hZGluZywgc2V0QWN0aXZpdHkgfSBmcm9tICcuL2FjdGlvbnMnO1xyXG5cclxuZnVuY3Rpb24gRmVlZCh7IGF1dGhTZXJ2aWNlcywgYXV0aCB9KSB7XHJcbiAgY29uc3QgW3Bvc3RNb2RhbCwgc2V0UG9zdE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc3RvcmFnZSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChBY3Rpdml0eUNvbnRleHQpOyAgXHJcbiAgY29uc29sZS5sb2coc3RvcmFnZSlcclxuICBjb25zdCBnZXRBY3Rpdml0eSA9IGFzeW5jICh0b2tlbikgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsOiAnL2FjY291bnRzL2FjdGl2aXR5JyxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogdG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICB2YXIgdG90YWxEYXRhID0gZGF0YS5tYXAoZWxlbWVudCA9PiB7IFxyXG4gICAgICAgICAgZWxlbWVudCA9IGZpbHRlckFjY291bnREYXRhKGVsZW1lbnQpO1xyXG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBhY3Rpdml0eSA9IHRvdGFsRGF0YTtcclxuICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IDQwMykge1xyXG4gICAgICAgIFxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGZpbHRlckFjY291bnREYXRhID0gKGNvbW1lbnRfc2hhcmVkKSA9PiB7XHJcbiAgICBpZihjb21tZW50X3NoYXJlZC50eXBlID09PSAnQ29tbWVudCcpIHtcclxuICAgICAgaWYoY29tbWVudF9zaGFyZWQuY29tbWVudGVkLnR5cGUgPT0gJ1Bvc3QnKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLmNvbW1lbnRfc2hhcmVkLmNvbW1lbnRlZCxcclxuICAgICAgICAgIGNvbW1lbnRzOiBbey4uLmNvbW1lbnRfc2hhcmVkLCBhY2NvdW50OiBjb21tZW50X3NoYXJlZC5jb21tZW50ZWQuYWNjb3VudH1dXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKGNvbW1lbnRfc2hhcmVkLmNvbW1lbnRlZC50eXBlID09ICdDb21tZW50Jykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5jb21tZW50X3NoYXJlZC5jb21tZW50ZWQuY29tbWVudGVkLFxyXG4gICAgICAgICAgY29tbWVudHM6IFt7Li4uY29tbWVudF9zaGFyZWQuY29tbWVudGVkLCBjb21tZW50czogW2NvbW1lbnRfc2hhcmVkXSwgYWNjb3VudDogY29tbWVudF9zaGFyZWQuY29tbWVudGVkLmNvbW1lbnRlZC5hY2NvdW50fV1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZihjb21tZW50X3NoYXJlZC5jb21tZW50ZWQudHlwZSA9PSAnU2hhcmUnKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLmNvbW1lbnRfc2hhcmVkLmNvbW1lbnRlZC5zaGFyZWQsXHJcbiAgICAgICAgICBjb21tZW50czogW3sgLi4uY29tbWVudF9zaGFyZWQsIGFjY291bnQ6IGNvbW1lbnRfc2hhcmVkLmNvbW1lbnRlZC5zaGFyZWQuYWNjb3VudCB9XVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uY29tbWVudF9zaGFyZWQuY29tbWVudGVkLFxyXG4gICAgICAgICAgY29tbWVudHM6IFt7IC4uLmNvbW1lbnRfc2hhcmVkLCBhY2NvdW50OiBjb21tZW50X3NoYXJlZC5jb21tZW50ZWQuYWNjb3VudCB9XVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmKGNvbW1lbnRfc2hhcmVkLnR5cGUgPT09ICdQb3N0Jykge1xyXG4gICAgICAgIHJldHVybiBjb21tZW50X3NoYXJlZDtcclxuICAgIH0gZWxzZSBpZihjb21tZW50X3NoYXJlZC50eXBlID09PSAnU2hhcmUnKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uY29tbWVudF9zaGFyZWQuc2hhcmVkLFxyXG4gICAgICAgIGNvbW1lbnRzOiBbey4uLmNvbW1lbnRfc2hhcmVkLCBhY2NvdW50OiBjb21tZW50X3NoYXJlZC5zaGFyZWQuYWNjb3VudCB9XVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gY29tbWVudF9zaGFyZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBjcmVhdGVQb3N0ID0gYXN5bmMgKGRhdGFGb3JSZXF1ZXN0KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBkaXNwYXRjaChzZXRMb2FkaW5nKHRydWUsICdwb3N0aW5nJykpO1xyXG5cclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsOiAnL3Bvc3RzJyxcclxuICAgICAgICBkYXRhOiBkYXRhRm9yUmVxdWVzdCxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcblxyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICBzZXRQb3N0TW9kYWwoMCk7XHJcbiAgICAgICAgdmFyIGVsZW1lbnQgPSAge1xyXG4gICAgICAgICAgdHlwZTogJ1Bvc3QnLFxyXG4gICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAgIGNvbW1lbnRzOiBbXSxcclxuICAgICAgICAgIGNvbW1lbnRzQ291bnQ6IDAsXHJcbiAgICAgICAgICByYXRpbmc6IG51bGwsXHJcbiAgICAgICAgICByZWFjdGlvbnM6IFtdLFxyXG4gICAgICAgICAgcmVhY3Rpb25zQ291bnQ6IDAsXHJcbiAgICAgICAgICBzaGFyZXM6IFtdLFxyXG4gICAgICAgICAgc2hhcmVzQ291bnQ6IDAsXHJcbiAgICAgICAgICBhY2NvdW50OiBhdXRoLnVzZXJcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHRvdGFsRGF0YSA9IFtcclxuICAgICAgICAgIGVsZW1lbnQsIC4uLnN0b3JhZ2UudGltZWxpbmVEYXRhXHJcbiAgICAgICAgXVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRvdGFsRGF0YSk7XHJcbiAgICAgICAgZGlzcGF0Y2goc2V0VGltZWxpbmVEYXRhKHRvdGFsRGF0YSkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UsICdwb3N0aW5nJykpO1xyXG5cclxuICAgICAgcmV0dXJuIGF3YWl0IHJlcXVlc3Q7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlLCAncG9zdGluZycpKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCByYXRlUG9zdCA9IGFzeW5jICh0eXBlLCBwb3N0SWQsIHJhdGUpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcodHJ1ZSwgJ3Bvc3RpbmcnKSk7XHJcbiAgICAgIGxldCB1cmwgPSAnJztcclxuXHJcbiAgICAgIGlmICh0eXBlID09PSAnUGhvdG8nKSB7XHJcbiAgICAgICAgdXJsID0gJy9waG90b3MvcmF0ZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1ZpZGVvQ2xpcCcpIHtcclxuICAgICAgICB1cmwgPSAnL3ZpZGVvLWNsaXBzL3JhdGUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdJdGVtJykge1xyXG4gICAgICAgIHVybCA9ICcvaXRlbXMvcmF0ZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1Bvc3QnKSB7XHJcbiAgICAgICAgdXJsID0gJy9wb3N0cy9yYXRlJztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnQ29tbWVudCcpIHtcclxuICAgICAgICB1cmwgPSAnL2NvbW1lbnRzL3JhdGUnO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmwsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgcmF0ZWQ6IHBvc3RJZCxcclxuICAgICAgICAgIHJhdGluZzogcmF0ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuXHJcbiAgICAgIGNvbnNvbGUud2FybigncmF0ZVBvc3QnLCBkYXRhLCBzdGF0dXMpO1xyXG5cclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgc3RvcmFnZS50aW1lbGluZURhdGEubWFwKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgaWYoZWxlbWVudC5pZCA9PT0gcG9zdElkICYmIGVsZW1lbnQudHlwZSA9PT0gdHlwZSkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnJhdGluZyA9IHJhdGU7XHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZGlzcGF0Y2goc2V0VGltZWxpbmVEYXRhKHN0b3JhZ2UudGltZWxpbmVEYXRhKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSwgJ3Bvc3RpbmcnKSk7XHJcblxyXG4gICAgICByZXR1cm4gYXdhaXQgcmVxdWVzdDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UsICdwb3N0aW5nJykpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG5cclxuICBjb25zdCBvblVwZGF0ZVRpbWVsaW5lID0gKGRhdGEpID0+IHtcclxuICAgIC8vIHN0b3JhZ2UudGltZWxpbmVEYXRhLm1hcChlbGVtZW50ID0+IHtcclxuICAgIC8vICAgaWYoZWxlbWVudC5pZCA9PSBkYXRhLmlkKSB7XHJcbiAgICAvLyAgICAgbGV0IGFkZEVsZW1lbnQgPSB7XHJcbiAgICAvLyAgICAgICBhY2NvdW50OiBhdXRoLnVzZXIsIFxyXG4gICAgLy8gICAgICAgLi4uZGF0YS5jb21tZW50c1swXVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBlbGVtZW50LmNvbW1lbnRzLnB1c2goYWRkRWxlbWVudCk7XHJcbiAgICAvLyAgICAgZWxlbWVudC5jb21tZW50c0NvdW50ICs9IGRhdGEuY29tbWVudHNDb3VudDtcclxuICAgIC8vICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfSlcclxuICAgIC8vIGNvbnNvbGUubG9nKHN0b3JhZ2UudGltZWxpbmVEYXRhKTtcclxuICAgIC8vIGRpc3BhdGNoKHNldFRpbWVsaW5lRGF0YShzdG9yYWdlLnRpbWVsaW5lRGF0YSkpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbW9kYWxQb3B1cCA9ICgpID0+IHtcclxuICAgIHNldFBvc3RNb2RhbCh0cnVlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGxpa2VBY3Rpb24gPSBhc3luYyAodHlwZSwgaWQsIHRlcm0pID0+IHtcclxuICAgIHZhciB1cmwgPSAnJztcclxuICAgIGlmICh0eXBlID09PSAnUGhvdG8nKSB7XHJcbiAgICAgIHVybCA9ICcvcGhvdG9zL3JlYWN0JztcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1ZpZGVvQ2xpcCcpIHtcclxuICAgICAgdXJsID0gJy92aWRlby1jbGlwcy9yZWFjdCc7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdJdGVtJykge1xyXG4gICAgICB1cmwgPSAnL2l0ZW1zL3JlYWN0JztcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1Bvc3QnKSB7XHJcbiAgICAgIHVybCA9ICcvcG9zdHMvcmVhY3QnO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnQ29tbWVudCcpIHtcclxuICAgICAgdXJsID0gJy9jb21tZW50cy9yZWFjdCc7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdTaGFyZScpIHtcclxuICAgICAgdXJsID0gJy9zaGFyZXMvcmVhY3QnO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHJlYWN0ZWQ6IGlkLFxyXG4gICAgICAgICAgcmVhY3Rpb246IHRlcm1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuXHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgIG1lc3NhZ2Uuc3VjY2VzcygnRXZhbHVhdGUgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuICBjb25zdCBzaGFyZUFjdGlvbiA9IGFzeW5jICh0eXBlLCBpZCkgPT4ge1xyXG5cclxuICAgIHZhciB1cmwgPSAnJztcclxuICAgICAgaWYgKHR5cGUgPT09ICdQaG90bycpIHtcclxuICAgICAgICB1cmwgPSAnL3Bob3Rvcy9zaGFyZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1ZpZGVvQ2xpcCcpIHtcclxuICAgICAgICB1cmwgPSAnL3ZpZGVvLWNsaXBzL3NoYXJlJztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnSXRlbScpIHtcclxuICAgICAgICB1cmwgPSAnL2l0ZW1zL3NoYXJlJztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnUG9zdCcpIHtcclxuICAgICAgICB1cmwgPSAnL3Bvc3RzL3NoYXJlJztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnQ29tbWVudCcpIHtcclxuICAgICAgICB1cmwgPSAnL2NvbW1lbnRzL3NoYXJlJztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnU2hhcmUnKSB7XHJcbiAgICAgICAgdXJsID0gJy9wb3N0cy9zaGFyZSc7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc2hhcmVkOiBpZCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuXHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgIG1lc3NhZ2Uuc3VjY2VzcygnRXZhbHVhdGUgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRBY3Rpdml0eShhdXRoLnRva2VuKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmVlZH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mZWVkX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8RmVlZFBvc3RzIHByb2ZpbGVGZWVkPXtbXX0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPE1vZGFsV3JhcHBlclxyXG4gICAgICAgICAgdGl0bGU9XCJDcmVhdGUgUG9zdFwiXHJcbiAgICAgICAgICBzaG93TW9kYWw9e3Bvc3RNb2RhbH1cclxuICAgICAgICAgIC8vIG9uQ2xvc2U9eygpID0+IHNldFBvc3RNb2RhbCgwKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8UG9zdGluZ1Bvc3RcclxuICAgICAgICAgICAgICAvLyBsb2FkaW5nPXtzdG9yYWdlLnBvc3RpbmdMb2FkaW5nfVxyXG4gICAgICAgICAgICAgIC8vIG9uUG9zdGluZz17Y3JlYXRlUG9zdH1cclxuICAgICAgICAgICAgICAvLyBtb2RhbFBvcHVwPXttb2RhbFBvcHVwfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgPC9Nb2RhbFdyYXBwZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVxdWlyZUF1dGgoRmVlZCk7Il0sInNvdXJjZVJvb3QiOiIifQ==