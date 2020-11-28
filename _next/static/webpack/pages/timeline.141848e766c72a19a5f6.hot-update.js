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
        antd__WEBPACK_IMPORTED_MODULE_7__["message"].success('Added successfully');
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
        antd__WEBPACK_IMPORTED_MODULE_7__["message"].success('Shared successfully');
      } else {
        antd__WEBPACK_IMPORTED_MODULE_7__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
        throw new Error();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAction = async id => {
    try {
      const request = await Object(configs_API__WEBPACK_IMPORTED_MODULE_6__["default"])({
        method: 'delete',
        url: '/posts',
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
        var newTimelineData = storage.timelineData.filter(item => {
          return item.id !== id;
        });
        dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_9__["setTimelineData"])(newTimelineData));
        antd__WEBPACK_IMPORTED_MODULE_7__["message"].success('Deleted successfully!');
      } else {
        antd__WEBPACK_IMPORTED_MODULE_7__["message"].error('This post deleting does not allowed!');
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
      lineNumber: 322,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: _styles_timeline_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.timeline,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_timeline_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.feed_container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_timeline_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.createPostDiv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 11
    }
  }, __jsx(_components_common_Avatar__WEBPACK_IMPORTED_MODULE_13__["default"], {
    size: 50,
    url: user === null || user === void 0 ? void 0 : (_user$profilePhoto = user.profilePhoto) === null || _user$profilePhoto === void 0 ? void 0 : _user$profilePhoto.src,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 13
    }
  }), __jsx("input", {
    className: _styles_timeline_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.createPostInput,
    placeholder: "What's on your mind?",
    onClick: modalPopup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 13
    }
  })), __jsx(components_common_LoadingWrapper__WEBPACK_IMPORTED_MODULE_10__["default"], {
    loading: storage.loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 11
    }
  }, __jsx(components_timeline_TimelinePosts__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: storage.timelineData,
    onUpdateTimeline: onUpdateTimeline,
    onRatePost: ratePost,
    likeAction: likeAction,
    shareAction: shareAction,
    deleteAction: deleteAction,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 13
    }
  })))), __jsx(_components_common_ModalWrapper__WEBPACK_IMPORTED_MODULE_12__["default"], {
    title: "Create Post",
    showModal: postModal,
    onClose: () => setPostModal(0),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 7
    }
  }, __jsx(components_profile_PostingPost__WEBPACK_IMPORTED_MODULE_4__["default"], {
    loading: storage.postingLoading,
    onPosting: createPost,
    modalPopup: modalPopup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9UaW1lbGluZS9UaW1lbGluZVBhZ2UuanMiXSwibmFtZXMiOlsiVGltZWxpbmVQYWdlIiwiYXV0aFNlcnZpY2VzIiwiYXV0aCIsInN0b3JhZ2UiLCJkaXNwYXRjaCIsInVzZUNvbnRleHQiLCJUaW1lTGluZUNvbnRleHQiLCJwb3N0TW9kYWwiLCJzZXRQb3N0TW9kYWwiLCJ1c2VTdGF0ZSIsIm1vYmlsZV9wcm9maWxlX2hlYWRlciIsInNldE1vYmlsZVByb2ZpbGVIZWFkZXIiLCJnZXRUaW1lbGluZSIsInRva2VuIiwid2l0aG91dExvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVxdWVzdCIsIkFQSSIsIm1ldGhvZCIsInVybCIsImhlYWRlcnMiLCJkYXRhIiwic3RhdHVzIiwidG90YWxEYXRhIiwibWFwIiwiZWxlbWVudCIsImZpbHRlckFjY291bnREYXRhIiwic2V0VGltZWxpbmVEYXRhIiwiY29uc29sZSIsImxvZyIsInJlZnJlc2hUb2tlbiIsIm1lc3NhZ2UiLCJlcnJvciIsImNvbW1lbnRfc2hhcmVkIiwidHlwZSIsImNvbW1lbnRlZCIsImNvbW1lbnRzIiwic2hhcmVkIiwiYWNjb3VudCIsImNyZWF0ZVBvc3QiLCJkYXRhRm9yUmVxdWVzdCIsImNvbW1lbnRzQ291bnQiLCJyYXRpbmciLCJyZWFjdGlvbnMiLCJyZWFjdGlvbnNDb3VudCIsInNoYXJlcyIsInNoYXJlc0NvdW50IiwidXNlciIsInRpbWVsaW5lRGF0YSIsInJhdGVQb3N0IiwicG9zdElkIiwicmF0ZSIsImlkIiwid2FybiIsIm9uVXBkYXRlVGltZWxpbmUiLCJhZGRFbGVtZW50IiwicHVzaCIsIm1vZGFsUG9wdXAiLCJsaWtlQWN0aW9uIiwidGVybSIsInJlYWN0ZWQiLCJyZWFjdGlvbiIsInN1Y2Nlc3MiLCJFcnJvciIsInNoYXJlQWN0aW9uIiwiZGVsZXRlQWN0aW9uIiwibmV3VGltZWxpbmVEYXRhIiwiZmlsdGVyIiwiaXRlbSIsInVzZUVmZmVjdCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJfIiwidGhyb3R0bGUiLCJjdXJyZW50U2Nyb2xsUG9zIiwicGFnZVlPZmZzZXQiLCJzdHlsZXMiLCJ0aW1lbGluZSIsImZlZWRfY29udGFpbmVyIiwiY3JlYXRlUG9zdERpdiIsInByb2ZpbGVQaG90byIsInNyYyIsImNyZWF0ZVBvc3RJbnB1dCIsImxvYWRpbmciLCJwb3N0aW5nTG9hZGluZyIsInJlcXVpcmVBdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxZQUFULENBQXNCO0FBQUVDLGNBQUY7QUFBZ0JDO0FBQWhCLENBQXRCLEVBQThDO0FBQUE7O0FBQUE7O0FBQzVDLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUFzQkMsd0RBQVUsQ0FBQ0Msd0VBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJDLHNEQUFRLENBQUMsS0FBRCxDQUExQztBQUNBLFFBQU07QUFBQSxPQUFDQyxxQkFBRDtBQUFBLE9BQXdCQztBQUF4QixNQUFrREYsc0RBQVEsQ0FBQyxLQUFELENBQWhFOztBQUVBLFFBQU1HLFdBQVcsR0FBRyxPQUFPQyxLQUFQLEVBQWNDLGNBQWMsR0FBRyxLQUEvQixLQUF5QztBQUMzRDtBQUNBLFFBQUk7QUFDRixVQUFJLENBQUNBLGNBQUwsRUFBcUJWLFFBQVEsQ0FBQ1csMkRBQVUsQ0FBQyxJQUFELENBQVgsQ0FBUjtBQUNyQixZQUFNQyxPQUFPLEdBQUcsTUFBTUMsMkRBQUcsQ0FBQztBQUN4QkMsY0FBTSxFQUFFLE1BRGdCO0FBRXhCQyxXQUFHLEVBQUUsb0JBRm1CO0FBR3hCQyxlQUFPLEVBQUU7QUFBRSxxQkFBV1A7QUFBYjtBQUhlLE9BQUQsQ0FB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YWdlcy90aW1lbGluZS4xNDE4NDhlNzY2YzcyYTE5YTVmNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWRlciBmcm9tICdjb21wb25lbnRzL2hlYWRlci9IZWFkZXInO1xyXG5pbXBvcnQgVGltZWxpbmVQb3N0cyBmcm9tICdjb21wb25lbnRzL3RpbWVsaW5lL1RpbWVsaW5lUG9zdHMnO1xyXG5pbXBvcnQgUG9zdGluZ1Bvc3QgZnJvbSAnY29tcG9uZW50cy9wcm9maWxlL1Bvc3RpbmdQb3N0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy90aW1lbGluZS5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBBUEkgZnJvbSAnY29uZmlncy9BUEknO1xyXG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IFRpbWVMaW5lQ29udGV4dCB9IGZyb20gJy4vc3RvcmFnZS9UaW1lbGluZUNvbnRleHQnO1xyXG5pbXBvcnQgeyBzZXRMb2FkaW5nLCBzZXRUaW1lbGluZURhdGEgfSBmcm9tICcuL2FjdGlvbnMnO1xyXG5pbXBvcnQgTG9hZGluZ1dyYXBwZXIgZnJvbSAnY29tcG9uZW50cy9jb21tb24vTG9hZGluZ1dyYXBwZXInO1xyXG5pbXBvcnQgcmVxdWlyZUF1dGggZnJvbSAnLi4vLi4vaGVscGVycy9ob2MvcmVxdWlyZUF1dGgnO1xyXG5pbXBvcnQgTW9kYWxXcmFwcGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9uL01vZGFsV3JhcHBlcic7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb24vQXZhdGFyJztcclxuXHJcbmZ1bmN0aW9uIFRpbWVsaW5lUGFnZSh7IGF1dGhTZXJ2aWNlcywgYXV0aCB9KSB7XHJcbiAgY29uc3QgW3N0b3JhZ2UsIGRpc3BhdGNoXSA9IHVzZUNvbnRleHQoVGltZUxpbmVDb250ZXh0KTtcclxuICBjb25zdCBbcG9zdE1vZGFsLCBzZXRQb3N0TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFttb2JpbGVfcHJvZmlsZV9oZWFkZXIsIHNldE1vYmlsZVByb2ZpbGVIZWFkZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBnZXRUaW1lbGluZSA9IGFzeW5jICh0b2tlbiwgd2l0aG91dExvYWRpbmcgPSBmYWxzZSkgPT4ge1xyXG4gICAgLy8gY29uc29sZS53YXJuKGF1dGhTZXJ2aWNlcy5hdXRoLCBhdXRoU2VydmljZXMubG9jYWxzdG9yYWdlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICghd2l0aG91dExvYWRpbmcpIGRpc3BhdGNoKHNldExvYWRpbmcodHJ1ZSkpO1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6ICcvYWNjb3VudHMvdGltZWxpbmUnLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiB0b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIHZhciB0b3RhbERhdGEgPSBkYXRhLm1hcChlbGVtZW50ID0+IHsgXHJcbiAgICAgICAgICBlbGVtZW50ID0gZmlsdGVyQWNjb3VudERhdGEoZWxlbWVudCk7XHJcbiAgICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIGRpc3BhdGNoKHNldFRpbWVsaW5lRGF0YSh0b3RhbERhdGEpKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnPT09PT09PT09Jyk7XHJcbiAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSA0MDMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnPT09PT09PT09PT09PT09PT0gUmVmcmVzaCB0b2tlbiAhJyk7XHJcblxyXG4gICAgICAgIGF1dGhTZXJ2aWNlcy5yZWZyZXNoVG9rZW4oZ2V0VGltZWxpbmUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghd2l0aG91dExvYWRpbmcpIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgaWYgKCF3aXRob3V0TG9hZGluZykgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZpbHRlckFjY291bnREYXRhID0gKGNvbW1lbnRfc2hhcmVkKSA9PiB7XHJcbiAgICBpZihjb21tZW50X3NoYXJlZC50eXBlID09PSAnQ29tbWVudCcpIHtcclxuICAgICAgaWYoY29tbWVudF9zaGFyZWQuY29tbWVudGVkLnR5cGUgPT0gJ1Bvc3QnKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLmNvbW1lbnRfc2hhcmVkLmNvbW1lbnRlZCxcclxuICAgICAgICAgIGNvbW1lbnRzOiBbey4uLmNvbW1lbnRfc2hhcmVkfV1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoY29tbWVudF9zaGFyZWQuY29tbWVudGVkLnR5cGUgPT0gJ0NvbW1lbnQnKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLmNvbW1lbnRfc2hhcmVkLmNvbW1lbnRlZC5jb21tZW50ZWQsXHJcbiAgICAgICAgICBjb21tZW50czogW3suLi5jb21tZW50X3NoYXJlZC5jb21tZW50ZWQsIGNvbW1lbnRzOiBbY29tbWVudF9zaGFyZWRdIH1dXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYoY29tbWVudF9zaGFyZWQuY29tbWVudGVkLnR5cGUgPT0gJ1NoYXJlJykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5jb21tZW50X3NoYXJlZC5jb21tZW50ZWQuc2hhcmVkLFxyXG4gICAgICAgICAgY29tbWVudHM6IFt7IC4uLmNvbW1lbnRfc2hhcmVkIH1dXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5jb21tZW50X3NoYXJlZC5jb21tZW50ZWQsXHJcbiAgICAgICAgICBjb21tZW50czogW3sgLi4uY29tbWVudF9zaGFyZWQgfV1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZihjb21tZW50X3NoYXJlZC50eXBlID09PSAnUG9zdCcpIHtcclxuICAgICAgICByZXR1cm4gY29tbWVudF9zaGFyZWQ7XHJcbiAgICB9IGVsc2UgaWYoY29tbWVudF9zaGFyZWQudHlwZSA9PT0gJ1NoYXJlJykge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLmNvbW1lbnRfc2hhcmVkLnNoYXJlZCxcclxuICAgICAgICBjb21tZW50czogW3suLi5jb21tZW50X3NoYXJlZCwgYWNjb3VudDogY29tbWVudF9zaGFyZWQuc2hhcmVkLmFjY291bnQgfV1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGNvbW1lbnRfc2hhcmVkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY3JlYXRlUG9zdCA9IGFzeW5jIChkYXRhRm9yUmVxdWVzdCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlLCAncG9zdGluZycpKTtcclxuXHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybDogJy9wb3N0cycsXHJcbiAgICAgICAgZGF0YTogZGF0YUZvclJlcXVlc3QsXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG5cclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgc2V0UG9zdE1vZGFsKDApO1xyXG4gICAgICAgIHZhciBlbGVtZW50ID0gIHtcclxuICAgICAgICAgIHR5cGU6ICdQb3N0JyxcclxuICAgICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgICBjb21tZW50czogW10sXHJcbiAgICAgICAgICBjb21tZW50c0NvdW50OiAwLFxyXG4gICAgICAgICAgcmF0aW5nOiBudWxsLFxyXG4gICAgICAgICAgcmVhY3Rpb25zOiBbXSxcclxuICAgICAgICAgIHJlYWN0aW9uc0NvdW50OiAwLFxyXG4gICAgICAgICAgc2hhcmVzOiBbXSxcclxuICAgICAgICAgIHNoYXJlc0NvdW50OiAwLFxyXG4gICAgICAgICAgYWNjb3VudDogYXV0aC51c2VyXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB0b3RhbERhdGEgPSBbXHJcbiAgICAgICAgICBlbGVtZW50LCAuLi5zdG9yYWdlLnRpbWVsaW5lRGF0YVxyXG4gICAgICAgIF1cclxuICAgICAgICBjb25zb2xlLmxvZyh0b3RhbERhdGEpO1xyXG4gICAgICAgIGRpc3BhdGNoKHNldFRpbWVsaW5lRGF0YSh0b3RhbERhdGEpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlLCAncG9zdGluZycpKTtcclxuXHJcbiAgICAgIHJldHVybiBhd2FpdCByZXF1ZXN0O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSwgJ3Bvc3RpbmcnKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmF0ZVBvc3QgPSBhc3luYyAodHlwZSwgcG9zdElkLCByYXRlKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKHRydWUsICdwb3N0aW5nJykpO1xyXG4gICAgICBsZXQgdXJsID0gJyc7XHJcblxyXG4gICAgICBpZiAodHlwZSA9PT0gJ1Bob3RvJykge1xyXG4gICAgICAgIHVybCA9ICcvcGhvdG9zL3JhdGUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdWaWRlb0NsaXAnKSB7XHJcbiAgICAgICAgdXJsID0gJy92aWRlby1jbGlwcy9yYXRlJztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnSXRlbScpIHtcclxuICAgICAgICB1cmwgPSAnL2l0ZW1zL3JhdGUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdQb3N0Jykge1xyXG4gICAgICAgIHVybCA9ICcvcG9zdHMvcmF0ZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0NvbW1lbnQnKSB7XHJcbiAgICAgICAgdXJsID0gJy9jb21tZW50cy9yYXRlJztcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGlkOiBwb3N0SWQsXHJcbiAgICAgICAgICByYXRpbmc6IHJhdGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcblxyXG4gICAgICBjb25zb2xlLndhcm4oJ3JhdGVQb3N0JywgZGF0YSwgc3RhdHVzKTtcclxuXHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgIHN0b3JhZ2UudGltZWxpbmVEYXRhLm1hcChlbGVtZW50ID0+IHtcclxuICAgICAgICAgIGlmKGVsZW1lbnQuaWQgPT09IHBvc3RJZCAmJiBlbGVtZW50LnR5cGUgPT09IHR5cGUpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5yYXRpbmcgPSByYXRlO1xyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGRpc3BhdGNoKHNldFRpbWVsaW5lRGF0YShzdG9yYWdlLnRpbWVsaW5lRGF0YSkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UsICdwb3N0aW5nJykpO1xyXG5cclxuICAgICAgcmV0dXJuIGF3YWl0IHJlcXVlc3Q7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlLCAncG9zdGluZycpKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuXHJcbiAgY29uc3Qgb25VcGRhdGVUaW1lbGluZSA9IChkYXRhKSA9PiB7XHJcbiAgICBzdG9yYWdlLnRpbWVsaW5lRGF0YS5tYXAoZWxlbWVudCA9PiB7XHJcbiAgICAgIGlmKGVsZW1lbnQuaWQgPT0gZGF0YS5pZCkge1xyXG4gICAgICAgIGxldCBhZGRFbGVtZW50ID0ge1xyXG4gICAgICAgICAgYWNjb3VudDogYXV0aC51c2VyLCBcclxuICAgICAgICAgIC4uLmRhdGEuY29tbWVudHNbMF1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxlbWVudC5jb21tZW50cy5wdXNoKGFkZEVsZW1lbnQpO1xyXG4gICAgICAgIGVsZW1lbnQuY29tbWVudHNDb3VudCArPSBkYXRhLmNvbW1lbnRzQ291bnQ7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICBkaXNwYXRjaChzZXRUaW1lbGluZURhdGEoc3RvcmFnZS50aW1lbGluZURhdGEpKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG1vZGFsUG9wdXAgPSAoKSA9PiB7XHJcbiAgICBzZXRQb3N0TW9kYWwodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBsaWtlQWN0aW9uID0gYXN5bmMgKHR5cGUsIGlkLCB0ZXJtKSA9PiB7XHJcbiAgICB2YXIgdXJsID0gJyc7XHJcbiAgICBpZiAodHlwZSA9PT0gJ1Bob3RvJykge1xyXG4gICAgICB1cmwgPSAnL3Bob3Rvcy9yZWFjdCc7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdWaWRlb0NsaXAnKSB7XHJcbiAgICAgIHVybCA9ICcvdmlkZW8tY2xpcHMvcmVhY3QnO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnSXRlbScpIHtcclxuICAgICAgdXJsID0gJy9pdGVtcy9yZWFjdCc7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdQb3N0Jykge1xyXG4gICAgICB1cmwgPSAnL3Bvc3RzL3JlYWN0JztcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0NvbW1lbnQnKSB7XHJcbiAgICAgIHVybCA9ICcvY29tbWVudHMvcmVhY3QnO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnU2hhcmUnKSB7XHJcbiAgICAgIHVybCA9ICcvc2hhcmVzL3JlYWN0JztcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICByZWFjdGVkOiBpZCxcclxuICAgICAgICAgIHJlYWN0aW9uOiB0ZXJtXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcblxyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoJ0FkZGVkIHN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiAgY29uc3Qgc2hhcmVBY3Rpb24gPSBhc3luYyAodHlwZSwgaWQpID0+IHtcclxuXHJcbiAgICB2YXIgdXJsID0gJyc7XHJcbiAgICAgIGlmICh0eXBlID09PSAnUGhvdG8nKSB7XHJcbiAgICAgICAgdXJsID0gJy9waG90b3Mvc2hhcmUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdWaWRlb0NsaXAnKSB7XHJcbiAgICAgICAgdXJsID0gJy92aWRlby1jbGlwcy9zaGFyZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0l0ZW0nKSB7XHJcbiAgICAgICAgdXJsID0gJy9pdGVtcy9zaGFyZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1Bvc3QnKSB7XHJcbiAgICAgICAgdXJsID0gJy9wb3N0cy9zaGFyZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0NvbW1lbnQnKSB7XHJcbiAgICAgICAgdXJsID0gJy9jb21tZW50cy9zaGFyZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1NoYXJlJykge1xyXG4gICAgICAgIHVybCA9ICcvcG9zdHMvc2hhcmUnO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHNoYXJlZDogaWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcblxyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoJ1NoYXJlZCBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBkZWxldGVBY3Rpb24gPSBhc3luYyAoaWQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ2RlbGV0ZScsXHJcbiAgICAgICAgdXJsOiAnL3Bvc3RzJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBcImlkXCI6IGlkXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcbiAgICAgIGlmKHN0YXR1cyAhPT0gNDAwKSB7XHJcbiAgICAgICAgdmFyIG5ld1RpbWVsaW5lRGF0YSA9IHN0b3JhZ2UudGltZWxpbmVEYXRhLmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGl0ZW0uaWQgIT09IGlkO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZGlzcGF0Y2goc2V0VGltZWxpbmVEYXRhKG5ld1RpbWVsaW5lRGF0YSkpXHJcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKCdEZWxldGVkIHN1Y2Nlc3NmdWxseSEnKTtcclxuICAgICB9IGVsc2Uge1xyXG4gICAgICAgbWVzc2FnZS5lcnJvcignVGhpcyBwb3N0IGRlbGV0aW5nIGRvZXMgbm90IGFsbG93ZWQhJylcclxuICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcil7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRUaW1lbGluZShhdXRoLnRva2VuKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBfLnRocm90dGxlKCgpID0+IHtcclxuICAgICAgY29uc3QgY3VycmVudFNjcm9sbFBvcyA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgICAgaWYoY3VycmVudFNjcm9sbFBvcyA+IDEwMCkge1xyXG4gICAgICAgIHNldE1vYmlsZVByb2ZpbGVIZWFkZXIodHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0TW9iaWxlUHJvZmlsZUhlYWRlcihmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH0sIDI1MCkpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgeyB1c2VyIH0gPSBhdXRoO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVsaW5lfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZlZWRfY29udGFpbmVyfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY3JlYXRlUG9zdERpdn0+XHJcbiAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICAgIHNpemU9ezUwfVxyXG4gICAgICAgICAgICAgICAgdXJsPXt1c2VyPy5wcm9maWxlUGhvdG8/LnNyY31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLmNyZWF0ZVBvc3RJbnB1dH0gcGxhY2Vob2xkZXI9XCJXaGF0J3Mgb24geW91ciBtaW5kP1wiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17bW9kYWxQb3B1cH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICA8L2lucHV0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8TG9hZGluZ1dyYXBwZXIgbG9hZGluZz17c3RvcmFnZS5sb2FkaW5nfT5cclxuICAgICAgICAgICAgPFRpbWVsaW5lUG9zdHNcclxuICAgICAgICAgICAgICBkYXRhPXtzdG9yYWdlLnRpbWVsaW5lRGF0YX1cclxuICAgICAgICAgICAgICBvblVwZGF0ZVRpbWVsaW5lPXtvblVwZGF0ZVRpbWVsaW5lfVxyXG4gICAgICAgICAgICAgIG9uUmF0ZVBvc3Q9e3JhdGVQb3N0fVxyXG4gICAgICAgICAgICAgIGxpa2VBY3Rpb249e2xpa2VBY3Rpb259XHJcbiAgICAgICAgICAgICAgc2hhcmVBY3Rpb249e3NoYXJlQWN0aW9ufVxyXG4gICAgICAgICAgICAgIGRlbGV0ZUFjdGlvbj17ZGVsZXRlQWN0aW9ufVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Mb2FkaW5nV3JhcHBlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxNb2RhbFdyYXBwZXJcclxuICAgICAgICAgIHRpdGxlPVwiQ3JlYXRlIFBvc3RcIlxyXG4gICAgICAgICAgc2hvd01vZGFsPXtwb3N0TW9kYWx9XHJcbiAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRQb3N0TW9kYWwoMCl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFBvc3RpbmdQb3N0XHJcbiAgICAgICAgICAgICAgbG9hZGluZz17c3RvcmFnZS5wb3N0aW5nTG9hZGluZ31cclxuICAgICAgICAgICAgICBvblBvc3Rpbmc9e2NyZWF0ZVBvc3R9XHJcbiAgICAgICAgICAgICAgbW9kYWxQb3B1cD17bW9kYWxQb3B1cH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgIDwvTW9kYWxXcmFwcGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVxdWlyZUF1dGgoVGltZWxpbmVQYWdlKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==