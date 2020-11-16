webpackHotUpdate_N_E("pages/timeline",{

/***/ "./containers/Timeline/TimelinePage.js":
/*!*********************************************!*\
  !*** ./containers/Timeline/TimelinePage.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/header/Header */ "./components/header/Header.js");
/* harmony import */ var components_timeline_TimelinePosts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/timeline/TimelinePosts */ "./components/timeline/TimelinePosts.js");
/* harmony import */ var components_profile_PostingPost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/profile/PostingPost */ "./components/profile/PostingPost.js");
/* harmony import */ var _styles_timeline_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/timeline.module.scss */ "./containers/Timeline/styles/timeline.module.scss");
/* harmony import */ var _styles_timeline_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_timeline_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var configs_API__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! configs/API */ "./configs/API.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _storage_TimelineContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./storage/TimelineContext */ "./containers/Timeline/storage/TimelineContext.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./actions */ "./containers/Timeline/actions/index.js");
/* harmony import */ var components_common_LoadingWrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/common/LoadingWrapper */ "./components/common/LoadingWrapper.js");
/* harmony import */ var _helpers_hoc_requireAuth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../helpers/hoc/requireAuth */ "./helpers/hoc/requireAuth.js");
/* harmony import */ var _components_common_ModalWrapper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/common/ModalWrapper */ "./components/common/ModalWrapper.js");
/* harmony import */ var _components_common_Avatar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/common/Avatar */ "./components/common/Avatar.js");


var _jsxFileName = "E:\\freeskies_fe_code\\containers\\Timeline\\TimelinePage.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }















function TimelinePage({
  authServices,
  auth
}) {
  _s();

  var _user$profilePhoto;

  const {
    0: storage,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_storage_TimelineContext__WEBPACK_IMPORTED_MODULE_8__["TimeLineContext"]);
  const {
    0: postModal,
    1: setPostModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: mobile_profile_header,
    1: setMobileProfileHeader
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const getTimeline = async (token, withoutLoading = false) => {
    // console.warn(authServices.auth, authServices.localstorage);
    try {
      if (!withoutLoading) dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_9__["setLoading"])(true));
      const request = await Object(configs_API__WEBPACK_IMPORTED_MODULE_6__["default"])({
        method: 'post',
        url: '/accounts/timeline',
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
        dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_9__["setTimelineData"])(totalData));
        console.log('=========');
      } else if (status === 403) {
        console.log('================= Refresh token !');
        authServices.refreshToken(getTimeline);
      } else {
        antd__WEBPACK_IMPORTED_MODULE_7__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
      }

      if (!withoutLoading) dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_9__["setLoading"])(false));
    } catch (error) {
      console.log(error);
      if (!withoutLoading) dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_9__["setLoading"])(false));
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
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_9__["setLoading"])(true, 'posting'));
      const request = await Object(configs_API__WEBPACK_IMPORTED_MODULE_6__["default"])({
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
        dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_9__["setTimelineData"])(totalData));
      } else {
        antd__WEBPACK_IMPORTED_MODULE_7__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
      }

      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_9__["setLoading"])(false, 'posting'));
      return await request;
    } catch (error) {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_9__["setLoading"])(false, 'posting'));
    }
  };

  const ratePost = async (type, postId, rate) => {
    try {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_9__["setLoading"])(true, 'posting'));
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

      const request = await Object(configs_API__WEBPACK_IMPORTED_MODULE_6__["default"])({
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
        dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_9__["setTimelineData"])(storage.timelineData));
      } else {
        antd__WEBPACK_IMPORTED_MODULE_7__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
      }

      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_9__["setLoading"])(false, 'posting'));
      return await request;
    } catch (error) {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_9__["setLoading"])(false, 'posting'));
    }
  };

  const onUpdateTimeline = data => {
    storage.timelineData.map(element => {
      if (element.id == data.id) {
        let addElement = _objectSpread({
          account: auth.user
        }, data.comments[0]);

        element.comments.push(addElement);
        element.commentsCount += data.commentsCount;
        return element;
      }
    });
    console.log(storage.timelineData);
    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_9__["setTimelineData"])(storage.timelineData));
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
      const request = await Object(configs_API__WEBPACK_IMPORTED_MODULE_6__["default"])({
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
        antd__WEBPACK_IMPORTED_MODULE_7__["message"].success('Evaluate successfully');
      } else {
        antd__WEBPACK_IMPORTED_MODULE_7__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
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
      const request = await Object(configs_API__WEBPACK_IMPORTED_MODULE_6__["default"])({
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
        antd__WEBPACK_IMPORTED_MODULE_7__["message"].success('Evaluate successfully');
      } else {
        antd__WEBPACK_IMPORTED_MODULE_7__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
        throw new Error();
      }
    } catch (error) {
      console.log(error);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    getTimeline(auth.token);
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
    user
  } = auth;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(components_header_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: _styles_timeline_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.timeline,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_timeline_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.feed_container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_timeline_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.createPostDiv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 11
    }
  }, __jsx(_components_common_Avatar__WEBPACK_IMPORTED_MODULE_13__["default"], {
    size: 50,
    url: user === null || user === void 0 ? void 0 : (_user$profilePhoto = user.profilePhoto) === null || _user$profilePhoto === void 0 ? void 0 : _user$profilePhoto.src,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 13
    }
  }), __jsx("input", {
    className: _styles_timeline_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.createPostInput,
    placeholder: "What's on your mind?",
    onClick: modalPopup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 13
    }
  })), __jsx(components_common_LoadingWrapper__WEBPACK_IMPORTED_MODULE_10__["default"], {
    loading: storage.loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 11
    }
  }, __jsx(components_timeline_TimelinePosts__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: storage.timelineData,
    onUpdateTimeline: onUpdateTimeline,
    onRatePost: ratePost,
    likeAction: likeAction,
    shareAction: shareAction,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 13
    }
  })))), __jsx(_components_common_ModalWrapper__WEBPACK_IMPORTED_MODULE_12__["default"], {
    title: "Create Post",
    showModal: postModal,
    onClose: () => setPostModal(0),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 7
    }
  }, __jsx(components_profile_PostingPost__WEBPACK_IMPORTED_MODULE_4__["default"], {
    loading: storage.postingLoading,
    onPosting: createPost,
    modalPopup: modalPopup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 11
    }
  })));
}

_s(TimelinePage, "af3fwKOdml45YAg23u2UcYEas7s=");

_c = TimelinePage;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(_helpers_hoc_requireAuth__WEBPACK_IMPORTED_MODULE_11__["default"])(TimelinePage));

var _c, _c2;

$RefreshReg$(_c, "TimelinePage");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9UaW1lbGluZS9UaW1lbGluZVBhZ2UuanMiXSwibmFtZXMiOlsiVGltZWxpbmVQYWdlIiwiYXV0aFNlcnZpY2VzIiwiYXV0aCIsInN0b3JhZ2UiLCJkaXNwYXRjaCIsInVzZUNvbnRleHQiLCJUaW1lTGluZUNvbnRleHQiLCJwb3N0TW9kYWwiLCJzZXRQb3N0TW9kYWwiLCJ1c2VTdGF0ZSIsIm1vYmlsZV9wcm9maWxlX2hlYWRlciIsInNldE1vYmlsZVByb2ZpbGVIZWFkZXIiLCJnZXRUaW1lbGluZSIsInRva2VuIiwid2l0aG91dExvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVxdWVzdCIsIkFQSSIsIm1ldGhvZCIsInVybCIsImhlYWRlcnMiLCJkYXRhIiwic3RhdHVzIiwidG90YWxEYXRhIiwibWFwIiwiZWxlbWVudCIsImZpbHRlckFjY291bnREYXRhIiwic2V0VGltZWxpbmVEYXRhIiwiY29uc29sZSIsImxvZyIsInJlZnJlc2hUb2tlbiIsIm1lc3NhZ2UiLCJlcnJvciIsImNvbW1lbnRfc2hhcmVkIiwidHlwZSIsImNvbW1lbnRlZCIsImNvbW1lbnRzIiwiYWNjb3VudCIsInNoYXJlZCIsImNyZWF0ZVBvc3QiLCJkYXRhRm9yUmVxdWVzdCIsImNvbW1lbnRzQ291bnQiLCJyYXRpbmciLCJyZWFjdGlvbnMiLCJyZWFjdGlvbnNDb3VudCIsInNoYXJlcyIsInNoYXJlc0NvdW50IiwidXNlciIsInRpbWVsaW5lRGF0YSIsInJhdGVQb3N0IiwicG9zdElkIiwicmF0ZSIsInJhdGVkIiwid2FybiIsImlkIiwib25VcGRhdGVUaW1lbGluZSIsImFkZEVsZW1lbnQiLCJwdXNoIiwibW9kYWxQb3B1cCIsImxpa2VBY3Rpb24iLCJ0ZXJtIiwicmVhY3RlZCIsInJlYWN0aW9uIiwic3VjY2VzcyIsIkVycm9yIiwic2hhcmVBY3Rpb24iLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiXyIsInRocm90dGxlIiwiY3VycmVudFNjcm9sbFBvcyIsInBhZ2VZT2Zmc2V0Iiwic3R5bGVzIiwidGltZWxpbmUiLCJmZWVkX2NvbnRhaW5lciIsImNyZWF0ZVBvc3REaXYiLCJwcm9maWxlUGhvdG8iLCJzcmMiLCJjcmVhdGVQb3N0SW5wdXQiLCJsb2FkaW5nIiwicG9zdGluZ0xvYWRpbmciLCJyZXF1aXJlQXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsWUFBVCxDQUFzQjtBQUFFQyxjQUFGO0FBQWdCQztBQUFoQixDQUF0QixFQUE4QztBQUFBOztBQUFBOztBQUM1QyxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBc0JDLHdEQUFVLENBQUNDLHdFQUFELENBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCQyxzREFBUSxDQUFDLEtBQUQsQ0FBMUM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MscUJBQUQ7QUFBQSxPQUF3QkM7QUFBeEIsTUFBa0RGLHNEQUFRLENBQUMsS0FBRCxDQUFoRTs7QUFFQSxRQUFNRyxXQUFXLEdBQUcsT0FBT0MsS0FBUCxFQUFjQyxjQUFjLEdBQUcsS0FBL0IsS0FBeUM7QUFDM0Q7QUFDQSxRQUFJO0FBQ0YsVUFBSSxDQUFDQSxjQUFMLEVBQXFCVixRQUFRLENBQUNXLDJEQUFVLENBQUMsSUFBRCxDQUFYLENBQVI7QUFDckIsWUFBTUMsT0FBTyxHQUFHLE1BQU1DLDJEQUFHLENBQUM7QUFDeEJDLGNBQU0sRUFBRSxNQURnQjtBQUV4QkMsV0FBRyxFQUFFLG9CQUZtQjtBQUd4QkMsZUFBTyxFQUFFO0FBQUUscUJBQVdQO0FBQWI7QUFIZSxPQUFELENBQXpCO0FBS0EsWUFBTTtBQUFFUSxZQUFGO0FBQVFDO0FBQVIsVUFBbUJO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ZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FYRixDQURGLENBRkYsRUF5QkUsTUFBQyx3RUFBRDtBQUNJLFNBQUssRUFBQyxhQURWO0FBRUksYUFBUyxFQUFFMUQsU0FGZjtBQUdJLFdBQU8sRUFBRSxNQUFNQyxZQUFZLENBQUMsQ0FBRCxDQUgvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0ksTUFBQyxzRUFBRDtBQUNJLFdBQU8sRUFBRUwsT0FBTyxDQUFDOEUsY0FEckI7QUFFSSxhQUFTLEVBQUUxQyxVQUZmO0FBR0ksY0FBVSxFQUFFbUIsVUFIaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxKLENBekJGLENBREY7QUF1Q0Q7O0dBalVRMUQsWTs7S0FBQUEsWTtBQW1VTSxxRUFBQWtGLHlFQUFXLENBQUNsRixZQUFELENBQTFCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3RpbWVsaW5lLmFjY2EwZTkxMmVhNDgxODZhZGVmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlcic7XHJcbmltcG9ydCBUaW1lbGluZVBvc3RzIGZyb20gJ2NvbXBvbmVudHMvdGltZWxpbmUvVGltZWxpbmVQb3N0cyc7XHJcbmltcG9ydCBQb3N0aW5nUG9zdCBmcm9tICdjb21wb25lbnRzL3Byb2ZpbGUvUG9zdGluZ1Bvc3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL3RpbWVsaW5lLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IEFQSSBmcm9tICdjb25maWdzL0FQSSc7XHJcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgVGltZUxpbmVDb250ZXh0IH0gZnJvbSAnLi9zdG9yYWdlL1RpbWVsaW5lQ29udGV4dCc7XHJcbmltcG9ydCB7IHNldExvYWRpbmcsIHNldFRpbWVsaW5lRGF0YSB9IGZyb20gJy4vYWN0aW9ucyc7XHJcbmltcG9ydCBMb2FkaW5nV3JhcHBlciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9Mb2FkaW5nV3JhcHBlcic7XHJcbmltcG9ydCByZXF1aXJlQXV0aCBmcm9tICcuLi8uLi9oZWxwZXJzL2hvYy9yZXF1aXJlQXV0aCc7XHJcbmltcG9ydCBNb2RhbFdyYXBwZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb24vTW9kYWxXcmFwcGVyJztcclxuaW1wb3J0IEF2YXRhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9BdmF0YXInO1xyXG5cclxuZnVuY3Rpb24gVGltZWxpbmVQYWdlKHsgYXV0aFNlcnZpY2VzLCBhdXRoIH0pIHtcclxuICBjb25zdCBbc3RvcmFnZSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChUaW1lTGluZUNvbnRleHQpO1xyXG4gIGNvbnN0IFtwb3N0TW9kYWwsIHNldFBvc3RNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW21vYmlsZV9wcm9maWxlX2hlYWRlciwgc2V0TW9iaWxlUHJvZmlsZUhlYWRlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGdldFRpbWVsaW5lID0gYXN5bmMgKHRva2VuLCB3aXRob3V0TG9hZGluZyA9IGZhbHNlKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLndhcm4oYXV0aFNlcnZpY2VzLmF1dGgsIGF1dGhTZXJ2aWNlcy5sb2NhbHN0b3JhZ2UpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKCF3aXRob3V0TG9hZGluZykgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlKSk7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybDogJy9hY2NvdW50cy90aW1lbGluZScsXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IHRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgdmFyIHRvdGFsRGF0YSA9IGRhdGEubWFwKGVsZW1lbnQgPT4geyBcclxuICAgICAgICAgIGVsZW1lbnQgPSBmaWx0ZXJBY2NvdW50RGF0YShlbGVtZW50KTtcclxuICAgICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgZGlzcGF0Y2goc2V0VGltZWxpbmVEYXRhKHRvdGFsRGF0YSkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCc9PT09PT09PT0nKTtcclxuICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IDQwMykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCc9PT09PT09PT09PT09PT09PSBSZWZyZXNoIHRva2VuICEnKTtcclxuXHJcbiAgICAgICAgYXV0aFNlcnZpY2VzLnJlZnJlc2hUb2tlbihnZXRUaW1lbGluZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCF3aXRob3V0TG9hZGluZykgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICBpZiAoIXdpdGhvdXRMb2FkaW5nKSBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmlsdGVyQWNjb3VudERhdGEgPSAoY29tbWVudF9zaGFyZWQpID0+IHtcclxuICAgIGlmKGNvbW1lbnRfc2hhcmVkLnR5cGUgPT09ICdDb21tZW50Jykge1xyXG4gICAgICBpZihjb21tZW50X3NoYXJlZC5jb21tZW50ZWQudHlwZSA9PSAnUG9zdCcpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uY29tbWVudF9zaGFyZWQuY29tbWVudGVkLFxyXG4gICAgICAgICAgY29tbWVudHM6IFt7Li4uY29tbWVudF9zaGFyZWQsIGFjY291bnQ6IGNvbW1lbnRfc2hhcmVkLmNvbW1lbnRlZC5hY2NvdW50fV1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoY29tbWVudF9zaGFyZWQuY29tbWVudGVkLnR5cGUgPT0gJ0NvbW1lbnQnKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLmNvbW1lbnRfc2hhcmVkLmNvbW1lbnRlZC5jb21tZW50ZWQsXHJcbiAgICAgICAgICBjb21tZW50czogW3suLi5jb21tZW50X3NoYXJlZC5jb21tZW50ZWQsIGNvbW1lbnRzOiBbY29tbWVudF9zaGFyZWRdLCBhY2NvdW50OiBjb21tZW50X3NoYXJlZC5jb21tZW50ZWQuY29tbWVudGVkLmFjY291bnR9XVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmKGNvbW1lbnRfc2hhcmVkLmNvbW1lbnRlZC50eXBlID09ICdTaGFyZScpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uY29tbWVudF9zaGFyZWQuY29tbWVudGVkLnNoYXJlZCxcclxuICAgICAgICAgIGNvbW1lbnRzOiBbeyAuLi5jb21tZW50X3NoYXJlZCwgYWNjb3VudDogY29tbWVudF9zaGFyZWQuY29tbWVudGVkLnNoYXJlZC5hY2NvdW50IH1dXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5jb21tZW50X3NoYXJlZC5jb21tZW50ZWQsXHJcbiAgICAgICAgICBjb21tZW50czogW3sgLi4uY29tbWVudF9zaGFyZWQsIGFjY291bnQ6IGNvbW1lbnRfc2hhcmVkLmNvbW1lbnRlZC5hY2NvdW50IH1dXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYoY29tbWVudF9zaGFyZWQudHlwZSA9PT0gJ1Bvc3QnKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbW1lbnRfc2hhcmVkO1xyXG4gICAgfSBlbHNlIGlmKGNvbW1lbnRfc2hhcmVkLnR5cGUgPT09ICdTaGFyZScpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5jb21tZW50X3NoYXJlZC5zaGFyZWQsXHJcbiAgICAgICAgY29tbWVudHM6IFt7Li4uY29tbWVudF9zaGFyZWQsIGFjY291bnQ6IGNvbW1lbnRfc2hhcmVkLnNoYXJlZC5hY2NvdW50IH1dXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBjb21tZW50X3NoYXJlZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGNyZWF0ZVBvc3QgPSBhc3luYyAoZGF0YUZvclJlcXVlc3QpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcodHJ1ZSwgJ3Bvc3RpbmcnKSk7XHJcblxyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6ICcvcG9zdHMnLFxyXG4gICAgICAgIGRhdGE6IGRhdGFGb3JSZXF1ZXN0LFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuXHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgIHNldFBvc3RNb2RhbCgwKTtcclxuICAgICAgICB2YXIgZWxlbWVudCA9ICB7XHJcbiAgICAgICAgICB0eXBlOiAnUG9zdCcsXHJcbiAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgY29tbWVudHM6IFtdLFxyXG4gICAgICAgICAgY29tbWVudHNDb3VudDogMCxcclxuICAgICAgICAgIHJhdGluZzogbnVsbCxcclxuICAgICAgICAgIHJlYWN0aW9uczogW10sXHJcbiAgICAgICAgICByZWFjdGlvbnNDb3VudDogMCxcclxuICAgICAgICAgIHNoYXJlczogW10sXHJcbiAgICAgICAgICBzaGFyZXNDb3VudDogMCxcclxuICAgICAgICAgIGFjY291bnQ6IGF1dGgudXNlclxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdG90YWxEYXRhID0gW1xyXG4gICAgICAgICAgZWxlbWVudCwgLi4uc3RvcmFnZS50aW1lbGluZURhdGFcclxuICAgICAgICBdXHJcbiAgICAgICAgY29uc29sZS5sb2codG90YWxEYXRhKTtcclxuICAgICAgICBkaXNwYXRjaChzZXRUaW1lbGluZURhdGEodG90YWxEYXRhKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSwgJ3Bvc3RpbmcnKSk7XHJcblxyXG4gICAgICByZXR1cm4gYXdhaXQgcmVxdWVzdDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UsICdwb3N0aW5nJykpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJhdGVQb3N0ID0gYXN5bmMgKHR5cGUsIHBvc3RJZCwgcmF0ZSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlLCAncG9zdGluZycpKTtcclxuICAgICAgbGV0IHVybCA9ICcnO1xyXG5cclxuICAgICAgaWYgKHR5cGUgPT09ICdQaG90bycpIHtcclxuICAgICAgICB1cmwgPSAnL3Bob3Rvcy9yYXRlJztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnVmlkZW9DbGlwJykge1xyXG4gICAgICAgIHVybCA9ICcvdmlkZW8tY2xpcHMvcmF0ZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0l0ZW0nKSB7XHJcbiAgICAgICAgdXJsID0gJy9pdGVtcy9yYXRlJztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnUG9zdCcpIHtcclxuICAgICAgICB1cmwgPSAnL3Bvc3RzL3JhdGUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdDb21tZW50Jykge1xyXG4gICAgICAgIHVybCA9ICcvY29tbWVudHMvcmF0ZSc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICByYXRlZDogcG9zdElkLFxyXG4gICAgICAgICAgcmF0aW5nOiByYXRlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG5cclxuICAgICAgY29uc29sZS53YXJuKCdyYXRlUG9zdCcsIGRhdGEsIHN0YXR1cyk7XHJcblxyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICBzdG9yYWdlLnRpbWVsaW5lRGF0YS5tYXAoZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICBpZihlbGVtZW50LmlkID09PSBwb3N0SWQgJiYgZWxlbWVudC50eXBlID09PSB0eXBlKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQucmF0aW5nID0gcmF0ZTtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBkaXNwYXRjaChzZXRUaW1lbGluZURhdGEoc3RvcmFnZS50aW1lbGluZURhdGEpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlLCAncG9zdGluZycpKTtcclxuXHJcbiAgICAgIHJldHVybiBhd2FpdCByZXF1ZXN0O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSwgJ3Bvc3RpbmcnKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcblxyXG4gIGNvbnN0IG9uVXBkYXRlVGltZWxpbmUgPSAoZGF0YSkgPT4ge1xyXG4gICAgc3RvcmFnZS50aW1lbGluZURhdGEubWFwKGVsZW1lbnQgPT4ge1xyXG4gICAgICBpZihlbGVtZW50LmlkID09IGRhdGEuaWQpIHtcclxuICAgICAgICBsZXQgYWRkRWxlbWVudCA9IHtcclxuICAgICAgICAgIGFjY291bnQ6IGF1dGgudXNlciwgXHJcbiAgICAgICAgICAuLi5kYXRhLmNvbW1lbnRzWzBdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsZW1lbnQuY29tbWVudHMucHVzaChhZGRFbGVtZW50KTtcclxuICAgICAgICBlbGVtZW50LmNvbW1lbnRzQ291bnQgKz0gZGF0YS5jb21tZW50c0NvdW50O1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgY29uc29sZS5sb2coc3RvcmFnZS50aW1lbGluZURhdGEpO1xyXG4gICAgZGlzcGF0Y2goc2V0VGltZWxpbmVEYXRhKHN0b3JhZ2UudGltZWxpbmVEYXRhKSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBtb2RhbFBvcHVwID0gKCkgPT4ge1xyXG4gICAgc2V0UG9zdE1vZGFsKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbGlrZUFjdGlvbiA9IGFzeW5jICh0eXBlLCBpZCwgdGVybSkgPT4ge1xyXG4gICAgdmFyIHVybCA9ICcnO1xyXG4gICAgaWYgKHR5cGUgPT09ICdQaG90bycpIHtcclxuICAgICAgdXJsID0gJy9waG90b3MvcmVhY3QnO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnVmlkZW9DbGlwJykge1xyXG4gICAgICB1cmwgPSAnL3ZpZGVvLWNsaXBzL3JlYWN0JztcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0l0ZW0nKSB7XHJcbiAgICAgIHVybCA9ICcvaXRlbXMvcmVhY3QnO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnUG9zdCcpIHtcclxuICAgICAgdXJsID0gJy9wb3N0cy9yZWFjdCc7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdDb21tZW50Jykge1xyXG4gICAgICB1cmwgPSAnL2NvbW1lbnRzL3JlYWN0JztcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1NoYXJlJykge1xyXG4gICAgICB1cmwgPSAnL3NoYXJlcy9yZWFjdCc7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgcmVhY3RlZDogaWQsXHJcbiAgICAgICAgICByZWFjdGlvbjogdGVybVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG5cclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKCdFdmFsdWF0ZSBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4gIGNvbnN0IHNoYXJlQWN0aW9uID0gYXN5bmMgKHR5cGUsIGlkKSA9PiB7XHJcblxyXG4gICAgdmFyIHVybCA9ICcnO1xyXG4gICAgICBpZiAodHlwZSA9PT0gJ1Bob3RvJykge1xyXG4gICAgICAgIHVybCA9ICcvcGhvdG9zL3NoYXJlJztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnVmlkZW9DbGlwJykge1xyXG4gICAgICAgIHVybCA9ICcvdmlkZW8tY2xpcHMvc2hhcmUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdJdGVtJykge1xyXG4gICAgICAgIHVybCA9ICcvaXRlbXMvc2hhcmUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdQb3N0Jykge1xyXG4gICAgICAgIHVybCA9ICcvcG9zdHMvc2hhcmUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdDb21tZW50Jykge1xyXG4gICAgICAgIHVybCA9ICcvY29tbWVudHMvc2hhcmUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdTaGFyZScpIHtcclxuICAgICAgICB1cmwgPSAnL3Bvc3RzL3NoYXJlJztcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzaGFyZWQ6IGlkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG5cclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKCdFdmFsdWF0ZSBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldFRpbWVsaW5lKGF1dGgudG9rZW4pO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIF8udGhyb3R0bGUoKCkgPT4ge1xyXG4gICAgICBjb25zdCBjdXJyZW50U2Nyb2xsUG9zID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgICBpZihjdXJyZW50U2Nyb2xsUG9zID4gMTAwKSB7XHJcbiAgICAgICAgc2V0TW9iaWxlUHJvZmlsZUhlYWRlcih0cnVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRNb2JpbGVQcm9maWxlSGVhZGVyKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfSwgMjUwKSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCB7IHVzZXIgfSA9IGF1dGg7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZWxpbmV9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmVlZF9jb250YWluZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jcmVhdGVQb3N0RGl2fT5cclxuICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgc2l6ZT17NTB9XHJcbiAgICAgICAgICAgICAgICB1cmw9e3VzZXI/LnByb2ZpbGVQaG90bz8uc3JjfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuY3JlYXRlUG9zdElucHV0fSBwbGFjZWhvbGRlcj1cIldoYXQncyBvbiB5b3VyIG1pbmQ/XCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXttb2RhbFBvcHVwfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDwvaW5wdXQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxMb2FkaW5nV3JhcHBlciBsb2FkaW5nPXtzdG9yYWdlLmxvYWRpbmd9PlxyXG4gICAgICAgICAgICA8VGltZWxpbmVQb3N0c1xyXG4gICAgICAgICAgICAgIGRhdGE9e3N0b3JhZ2UudGltZWxpbmVEYXRhfVxyXG4gICAgICAgICAgICAgIG9uVXBkYXRlVGltZWxpbmU9e29uVXBkYXRlVGltZWxpbmV9XHJcbiAgICAgICAgICAgICAgb25SYXRlUG9zdD17cmF0ZVBvc3R9XHJcbiAgICAgICAgICAgICAgbGlrZUFjdGlvbj17bGlrZUFjdGlvbn1cclxuICAgICAgICAgICAgICBzaGFyZUFjdGlvbj17c2hhcmVBY3Rpb259XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0xvYWRpbmdXcmFwcGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPE1vZGFsV3JhcHBlclxyXG4gICAgICAgICAgdGl0bGU9XCJDcmVhdGUgUG9zdFwiXHJcbiAgICAgICAgICBzaG93TW9kYWw9e3Bvc3RNb2RhbH1cclxuICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFBvc3RNb2RhbCgwKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8UG9zdGluZ1Bvc3RcclxuICAgICAgICAgICAgICBsb2FkaW5nPXtzdG9yYWdlLnBvc3RpbmdMb2FkaW5nfVxyXG4gICAgICAgICAgICAgIG9uUG9zdGluZz17Y3JlYXRlUG9zdH1cclxuICAgICAgICAgICAgICBtb2RhbFBvcHVwPXttb2RhbFBvcHVwfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgPC9Nb2RhbFdyYXBwZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZXF1aXJlQXV0aChUaW1lbGluZVBhZ2UpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9