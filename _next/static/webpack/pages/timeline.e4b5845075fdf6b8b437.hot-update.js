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
        shared: [_objectSpread(_objectSpread({}, comment_shared), {}, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9UaW1lbGluZS9UaW1lbGluZVBhZ2UuanMiXSwibmFtZXMiOlsiVGltZWxpbmVQYWdlIiwiYXV0aFNlcnZpY2VzIiwiYXV0aCIsInN0b3JhZ2UiLCJkaXNwYXRjaCIsInVzZUNvbnRleHQiLCJUaW1lTGluZUNvbnRleHQiLCJwb3N0TW9kYWwiLCJzZXRQb3N0TW9kYWwiLCJ1c2VTdGF0ZSIsIm1vYmlsZV9wcm9maWxlX2hlYWRlciIsInNldE1vYmlsZVByb2ZpbGVIZWFkZXIiLCJnZXRUaW1lbGluZSIsInRva2VuIiwid2l0aG91dExvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVxdWVzdCIsIkFQSSIsIm1ldGhvZCIsInVybCIsImhlYWRlcnMiLCJkYXRhIiwic3RhdHVzIiwidG90YWxEYXRhIiwibWFwIiwiZWxlbWVudCIsImZpbHRlckFjY291bnREYXRhIiwic2V0VGltZWxpbmVEYXRhIiwiY29uc29sZSIsImxvZyIsInJlZnJlc2hUb2tlbiIsIm1lc3NhZ2UiLCJlcnJvciIsImNvbW1lbnRfc2hhcmVkIiwidHlwZSIsImNvbW1lbnRlZCIsImNvbW1lbnRzIiwic2hhcmVkIiwiYWNjb3VudCIsImNyZWF0ZVBvc3QiLCJkYXRhRm9yUmVxdWVzdCIsImNvbW1lbnRzQ291bnQiLCJyYXRpbmciLCJyZWFjdGlvbnMiLCJyZWFjdGlvbnNDb3VudCIsInNoYXJlcyIsInNoYXJlc0NvdW50IiwidXNlciIsInRpbWVsaW5lRGF0YSIsInJhdGVQb3N0IiwicG9zdElkIiwicmF0ZSIsImlkIiwid2FybiIsIm9uVXBkYXRlVGltZWxpbmUiLCJhZGRFbGVtZW50IiwicHVzaCIsIm1vZGFsUG9wdXAiLCJsaWtlQWN0aW9uIiwidGVybSIsInJlYWN0ZWQiLCJyZWFjdGlvbiIsInN1Y2Nlc3MiLCJFcnJvciIsInNoYXJlQWN0aW9uIiwiZGVsZXRlQWN0aW9uIiwibmV3VGltZWxpbmVEYXRhIiwiZmlsdGVyIiwiaXRlbSIsInVzZUVmZmVjdCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJfIiwidGhyb3R0bGUiLCJjdXJyZW50U2Nyb2xsUG9zIiwicGFnZVlPZmZzZXQiLCJzdHlsZXMiLCJ0aW1lbGluZSIsImZlZWRfY29udGFpbmVyIiwiY3JlYXRlUG9zdERpdiIsInByb2ZpbGVQaG90byIsInNyYyIsImNyZWF0ZVBvc3RJbnB1dCIsImxvYWRpbmciLCJwb3N0aW5nTG9hZGluZyIsInJlcXVpcmVBdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxZQUFULENBQXNCO0FBQUVDLGNBQUY7QUFBZ0JDO0FBQWhCLENBQXRCLEVBQThDO0FBQUE7O0FBQUE7O0FBQzVDLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUFzQkMsd0RBQVUsQ0FBQ0Msd0VBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJDLHNEQUFRLENBQUMsS0FBRCxDQUExQztBQUNBLFFBQU07QUFBQSxPQUFDQyxxQkFBRDtBQUFBLE9BQXdCQztBQUF4QixNQUFrREYsc0RBQVEsQ0FBQyxLQUFELENBQWhFOztBQUVBLFFBQU1HLFdBQVcsR0FBRyxPQUFPQyxLQUFQLEVBQWNDLGNBQWMsR0FBRyxLQUEvQixLQUF5QztBQUMzRDtBQUNBLFFBQUk7QUFDRixVQUFJLENBQUNBLGNBQUwsRUFBcUJWLFFBQVEsQ0FBQ1csMkRBQVUsQ0FBQyxJQUFELENBQVgsQ0FBUjtBQUNyQixZQUFNQyxPQUFPLEdBQUcsTUFBTUMsMkRBQUcsQ0FBQztBQUN4QkMsY0FBTSxFQUFFLE1BRGdCO0FBRXhCQyxXQUFHLEVBQUUsb0JBRm1CO0FBR3hCQyxlQUFPLEVBQUU7QUFBRSxxQkFBV1A7QUFBYjtBQUhlLE9BQUQsQ0FB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Z2VzL3RpbWVsaW5lLmU0YjU4NDUwNzVmZGY2YjhiNDM3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlcic7XHJcbmltcG9ydCBUaW1lbGluZVBvc3RzIGZyb20gJ2NvbXBvbmVudHMvdGltZWxpbmUvVGltZWxpbmVQb3N0cyc7XHJcbmltcG9ydCBQb3N0aW5nUG9zdCBmcm9tICdjb21wb25lbnRzL3Byb2ZpbGUvUG9zdGluZ1Bvc3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL3RpbWVsaW5lLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IEFQSSBmcm9tICdjb25maWdzL0FQSSc7XHJcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgVGltZUxpbmVDb250ZXh0IH0gZnJvbSAnLi9zdG9yYWdlL1RpbWVsaW5lQ29udGV4dCc7XHJcbmltcG9ydCB7IHNldExvYWRpbmcsIHNldFRpbWVsaW5lRGF0YSB9IGZyb20gJy4vYWN0aW9ucyc7XHJcbmltcG9ydCBMb2FkaW5nV3JhcHBlciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9Mb2FkaW5nV3JhcHBlcic7XHJcbmltcG9ydCByZXF1aXJlQXV0aCBmcm9tICcuLi8uLi9oZWxwZXJzL2hvYy9yZXF1aXJlQXV0aCc7XHJcbmltcG9ydCBNb2RhbFdyYXBwZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb24vTW9kYWxXcmFwcGVyJztcclxuaW1wb3J0IEF2YXRhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9BdmF0YXInO1xyXG5cclxuZnVuY3Rpb24gVGltZWxpbmVQYWdlKHsgYXV0aFNlcnZpY2VzLCBhdXRoIH0pIHtcclxuICBjb25zdCBbc3RvcmFnZSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChUaW1lTGluZUNvbnRleHQpO1xyXG4gIGNvbnN0IFtwb3N0TW9kYWwsIHNldFBvc3RNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW21vYmlsZV9wcm9maWxlX2hlYWRlciwgc2V0TW9iaWxlUHJvZmlsZUhlYWRlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGdldFRpbWVsaW5lID0gYXN5bmMgKHRva2VuLCB3aXRob3V0TG9hZGluZyA9IGZhbHNlKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLndhcm4oYXV0aFNlcnZpY2VzLmF1dGgsIGF1dGhTZXJ2aWNlcy5sb2NhbHN0b3JhZ2UpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKCF3aXRob3V0TG9hZGluZykgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlKSk7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybDogJy9hY2NvdW50cy90aW1lbGluZScsXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IHRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgdmFyIHRvdGFsRGF0YSA9IGRhdGEubWFwKGVsZW1lbnQgPT4geyBcclxuICAgICAgICAgIGVsZW1lbnQgPSBmaWx0ZXJBY2NvdW50RGF0YShlbGVtZW50KTtcclxuICAgICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgZGlzcGF0Y2goc2V0VGltZWxpbmVEYXRhKHRvdGFsRGF0YSkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCc9PT09PT09PT0nKTtcclxuICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IDQwMykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCc9PT09PT09PT09PT09PT09PSBSZWZyZXNoIHRva2VuICEnKTtcclxuXHJcbiAgICAgICAgYXV0aFNlcnZpY2VzLnJlZnJlc2hUb2tlbihnZXRUaW1lbGluZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCF3aXRob3V0TG9hZGluZykgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICBpZiAoIXdpdGhvdXRMb2FkaW5nKSBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmlsdGVyQWNjb3VudERhdGEgPSAoY29tbWVudF9zaGFyZWQpID0+IHtcclxuICAgIGlmKGNvbW1lbnRfc2hhcmVkLnR5cGUgPT09ICdDb21tZW50Jykge1xyXG4gICAgICBpZihjb21tZW50X3NoYXJlZC5jb21tZW50ZWQudHlwZSA9PSAnUG9zdCcpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uY29tbWVudF9zaGFyZWQuY29tbWVudGVkLFxyXG4gICAgICAgICAgY29tbWVudHM6IFt7Li4uY29tbWVudF9zaGFyZWR9XVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChjb21tZW50X3NoYXJlZC5jb21tZW50ZWQudHlwZSA9PSAnQ29tbWVudCcpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uY29tbWVudF9zaGFyZWQuY29tbWVudGVkLmNvbW1lbnRlZCxcclxuICAgICAgICAgIGNvbW1lbnRzOiBbey4uLmNvbW1lbnRfc2hhcmVkLmNvbW1lbnRlZCwgY29tbWVudHM6IFtjb21tZW50X3NoYXJlZF0gfV1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZihjb21tZW50X3NoYXJlZC5jb21tZW50ZWQudHlwZSA9PSAnU2hhcmUnKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLmNvbW1lbnRfc2hhcmVkLmNvbW1lbnRlZC5zaGFyZWQsXHJcbiAgICAgICAgICBjb21tZW50czogW3sgLi4uY29tbWVudF9zaGFyZWQgfV1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLmNvbW1lbnRfc2hhcmVkLmNvbW1lbnRlZCxcclxuICAgICAgICAgIGNvbW1lbnRzOiBbeyAuLi5jb21tZW50X3NoYXJlZCB9XVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmKGNvbW1lbnRfc2hhcmVkLnR5cGUgPT09ICdQb3N0Jykge1xyXG4gICAgICAgIHJldHVybiBjb21tZW50X3NoYXJlZDtcclxuICAgIH0gZWxzZSBpZihjb21tZW50X3NoYXJlZC50eXBlID09PSAnU2hhcmUnKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uY29tbWVudF9zaGFyZWQuc2hhcmVkLFxyXG4gICAgICAgIHNoYXJlZDogW3suLi5jb21tZW50X3NoYXJlZCwgYWNjb3VudDogY29tbWVudF9zaGFyZWQuc2hhcmVkLmFjY291bnQgfV1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGNvbW1lbnRfc2hhcmVkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY3JlYXRlUG9zdCA9IGFzeW5jIChkYXRhRm9yUmVxdWVzdCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlLCAncG9zdGluZycpKTtcclxuXHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybDogJy9wb3N0cycsXHJcbiAgICAgICAgZGF0YTogZGF0YUZvclJlcXVlc3QsXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG5cclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgc2V0UG9zdE1vZGFsKDApO1xyXG4gICAgICAgIHZhciBlbGVtZW50ID0gIHtcclxuICAgICAgICAgIHR5cGU6ICdQb3N0JyxcclxuICAgICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgICBjb21tZW50czogW10sXHJcbiAgICAgICAgICBjb21tZW50c0NvdW50OiAwLFxyXG4gICAgICAgICAgcmF0aW5nOiBudWxsLFxyXG4gICAgICAgICAgcmVhY3Rpb25zOiBbXSxcclxuICAgICAgICAgIHJlYWN0aW9uc0NvdW50OiAwLFxyXG4gICAgICAgICAgc2hhcmVzOiBbXSxcclxuICAgICAgICAgIHNoYXJlc0NvdW50OiAwLFxyXG4gICAgICAgICAgYWNjb3VudDogYXV0aC51c2VyXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB0b3RhbERhdGEgPSBbXHJcbiAgICAgICAgICBlbGVtZW50LCAuLi5zdG9yYWdlLnRpbWVsaW5lRGF0YVxyXG4gICAgICAgIF1cclxuICAgICAgICBjb25zb2xlLmxvZyh0b3RhbERhdGEpO1xyXG4gICAgICAgIGRpc3BhdGNoKHNldFRpbWVsaW5lRGF0YSh0b3RhbERhdGEpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlLCAncG9zdGluZycpKTtcclxuXHJcbiAgICAgIHJldHVybiBhd2FpdCByZXF1ZXN0O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSwgJ3Bvc3RpbmcnKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmF0ZVBvc3QgPSBhc3luYyAodHlwZSwgcG9zdElkLCByYXRlKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKHRydWUsICdwb3N0aW5nJykpO1xyXG4gICAgICBsZXQgdXJsID0gJyc7XHJcblxyXG4gICAgICBpZiAodHlwZSA9PT0gJ1Bob3RvJykge1xyXG4gICAgICAgIHVybCA9ICcvcGhvdG9zL3JhdGUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdWaWRlb0NsaXAnKSB7XHJcbiAgICAgICAgdXJsID0gJy92aWRlby1jbGlwcy9yYXRlJztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnSXRlbScpIHtcclxuICAgICAgICB1cmwgPSAnL2l0ZW1zL3JhdGUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdQb3N0Jykge1xyXG4gICAgICAgIHVybCA9ICcvcG9zdHMvcmF0ZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0NvbW1lbnQnKSB7XHJcbiAgICAgICAgdXJsID0gJy9jb21tZW50cy9yYXRlJztcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGlkOiBwb3N0SWQsXHJcbiAgICAgICAgICByYXRpbmc6IHJhdGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcblxyXG4gICAgICBjb25zb2xlLndhcm4oJ3JhdGVQb3N0JywgZGF0YSwgc3RhdHVzKTtcclxuXHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgIHN0b3JhZ2UudGltZWxpbmVEYXRhLm1hcChlbGVtZW50ID0+IHtcclxuICAgICAgICAgIGlmKGVsZW1lbnQuaWQgPT09IHBvc3RJZCAmJiBlbGVtZW50LnR5cGUgPT09IHR5cGUpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5yYXRpbmcgPSByYXRlO1xyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGRpc3BhdGNoKHNldFRpbWVsaW5lRGF0YShzdG9yYWdlLnRpbWVsaW5lRGF0YSkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UsICdwb3N0aW5nJykpO1xyXG5cclxuICAgICAgcmV0dXJuIGF3YWl0IHJlcXVlc3Q7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlLCAncG9zdGluZycpKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuXHJcbiAgY29uc3Qgb25VcGRhdGVUaW1lbGluZSA9IChkYXRhKSA9PiB7XHJcbiAgICBzdG9yYWdlLnRpbWVsaW5lRGF0YS5tYXAoZWxlbWVudCA9PiB7XHJcbiAgICAgIGlmKGVsZW1lbnQuaWQgPT0gZGF0YS5pZCkge1xyXG4gICAgICAgIGxldCBhZGRFbGVtZW50ID0ge1xyXG4gICAgICAgICAgYWNjb3VudDogYXV0aC51c2VyLCBcclxuICAgICAgICAgIC4uLmRhdGEuY29tbWVudHNbMF1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxlbWVudC5jb21tZW50cy5wdXNoKGFkZEVsZW1lbnQpO1xyXG4gICAgICAgIGVsZW1lbnQuY29tbWVudHNDb3VudCArPSBkYXRhLmNvbW1lbnRzQ291bnQ7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICBkaXNwYXRjaChzZXRUaW1lbGluZURhdGEoc3RvcmFnZS50aW1lbGluZURhdGEpKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG1vZGFsUG9wdXAgPSAoKSA9PiB7XHJcbiAgICBzZXRQb3N0TW9kYWwodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBsaWtlQWN0aW9uID0gYXN5bmMgKHR5cGUsIGlkLCB0ZXJtKSA9PiB7XHJcbiAgICB2YXIgdXJsID0gJyc7XHJcbiAgICBpZiAodHlwZSA9PT0gJ1Bob3RvJykge1xyXG4gICAgICB1cmwgPSAnL3Bob3Rvcy9yZWFjdCc7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdWaWRlb0NsaXAnKSB7XHJcbiAgICAgIHVybCA9ICcvdmlkZW8tY2xpcHMvcmVhY3QnO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnSXRlbScpIHtcclxuICAgICAgdXJsID0gJy9pdGVtcy9yZWFjdCc7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdQb3N0Jykge1xyXG4gICAgICB1cmwgPSAnL3Bvc3RzL3JlYWN0JztcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0NvbW1lbnQnKSB7XHJcbiAgICAgIHVybCA9ICcvY29tbWVudHMvcmVhY3QnO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnU2hhcmUnKSB7XHJcbiAgICAgIHVybCA9ICcvc2hhcmVzL3JlYWN0JztcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICByZWFjdGVkOiBpZCxcclxuICAgICAgICAgIHJlYWN0aW9uOiB0ZXJtXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcblxyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoJ0FkZGVkIHN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiAgY29uc3Qgc2hhcmVBY3Rpb24gPSBhc3luYyAodHlwZSwgaWQpID0+IHtcclxuXHJcbiAgICB2YXIgdXJsID0gJyc7XHJcbiAgICAgIGlmICh0eXBlID09PSAnUGhvdG8nKSB7XHJcbiAgICAgICAgdXJsID0gJy9waG90b3Mvc2hhcmUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdWaWRlb0NsaXAnKSB7XHJcbiAgICAgICAgdXJsID0gJy92aWRlby1jbGlwcy9zaGFyZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0l0ZW0nKSB7XHJcbiAgICAgICAgdXJsID0gJy9pdGVtcy9zaGFyZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1Bvc3QnKSB7XHJcbiAgICAgICAgdXJsID0gJy9wb3N0cy9zaGFyZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0NvbW1lbnQnKSB7XHJcbiAgICAgICAgdXJsID0gJy9jb21tZW50cy9zaGFyZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1NoYXJlJykge1xyXG4gICAgICAgIHVybCA9ICcvcG9zdHMvc2hhcmUnO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHNoYXJlZDogaWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcblxyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoJ1NoYXJlZCBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBkZWxldGVBY3Rpb24gPSBhc3luYyAoaWQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ2RlbGV0ZScsXHJcbiAgICAgICAgdXJsOiAnL3Bvc3RzJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBcImlkXCI6IGlkXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcbiAgICAgIGlmKHN0YXR1cyAhPT0gNDAwKSB7XHJcbiAgICAgICAgdmFyIG5ld1RpbWVsaW5lRGF0YSA9IHN0b3JhZ2UudGltZWxpbmVEYXRhLmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGl0ZW0uaWQgIT09IGlkO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZGlzcGF0Y2goc2V0VGltZWxpbmVEYXRhKG5ld1RpbWVsaW5lRGF0YSkpXHJcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKCdEZWxldGVkIHN1Y2Nlc3NmdWxseSEnKTtcclxuICAgICB9IGVsc2Uge1xyXG4gICAgICAgbWVzc2FnZS5lcnJvcignVGhpcyBwb3N0IGRlbGV0aW5nIGRvZXMgbm90IGFsbG93ZWQhJylcclxuICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcil7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRUaW1lbGluZShhdXRoLnRva2VuKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBfLnRocm90dGxlKCgpID0+IHtcclxuICAgICAgY29uc3QgY3VycmVudFNjcm9sbFBvcyA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgICAgaWYoY3VycmVudFNjcm9sbFBvcyA+IDEwMCkge1xyXG4gICAgICAgIHNldE1vYmlsZVByb2ZpbGVIZWFkZXIodHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0TW9iaWxlUHJvZmlsZUhlYWRlcihmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH0sIDI1MCkpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgeyB1c2VyIH0gPSBhdXRoO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVsaW5lfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZlZWRfY29udGFpbmVyfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY3JlYXRlUG9zdERpdn0+XHJcbiAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICAgIHNpemU9ezUwfVxyXG4gICAgICAgICAgICAgICAgdXJsPXt1c2VyPy5wcm9maWxlUGhvdG8/LnNyY31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLmNyZWF0ZVBvc3RJbnB1dH0gcGxhY2Vob2xkZXI9XCJXaGF0J3Mgb24geW91ciBtaW5kP1wiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17bW9kYWxQb3B1cH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICA8L2lucHV0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8TG9hZGluZ1dyYXBwZXIgbG9hZGluZz17c3RvcmFnZS5sb2FkaW5nfT5cclxuICAgICAgICAgICAgPFRpbWVsaW5lUG9zdHNcclxuICAgICAgICAgICAgICBkYXRhPXtzdG9yYWdlLnRpbWVsaW5lRGF0YX1cclxuICAgICAgICAgICAgICBvblVwZGF0ZVRpbWVsaW5lPXtvblVwZGF0ZVRpbWVsaW5lfVxyXG4gICAgICAgICAgICAgIG9uUmF0ZVBvc3Q9e3JhdGVQb3N0fVxyXG4gICAgICAgICAgICAgIGxpa2VBY3Rpb249e2xpa2VBY3Rpb259XHJcbiAgICAgICAgICAgICAgc2hhcmVBY3Rpb249e3NoYXJlQWN0aW9ufVxyXG4gICAgICAgICAgICAgIGRlbGV0ZUFjdGlvbj17ZGVsZXRlQWN0aW9ufVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Mb2FkaW5nV3JhcHBlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxNb2RhbFdyYXBwZXJcclxuICAgICAgICAgIHRpdGxlPVwiQ3JlYXRlIFBvc3RcIlxyXG4gICAgICAgICAgc2hvd01vZGFsPXtwb3N0TW9kYWx9XHJcbiAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRQb3N0TW9kYWwoMCl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFBvc3RpbmdQb3N0XHJcbiAgICAgICAgICAgICAgbG9hZGluZz17c3RvcmFnZS5wb3N0aW5nTG9hZGluZ31cclxuICAgICAgICAgICAgICBvblBvc3Rpbmc9e2NyZWF0ZVBvc3R9XHJcbiAgICAgICAgICAgICAgbW9kYWxQb3B1cD17bW9kYWxQb3B1cH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgIDwvTW9kYWxXcmFwcGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVxdWlyZUF1dGgoVGltZWxpbmVQYWdlKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==