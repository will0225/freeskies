webpackHotUpdate_N_E("pages/activity",{

/***/ "./containers/Feed/Feed.js":
/*!*********************************!*\
  !*** ./containers/Feed/Feed.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_header_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/header/Header */ "./components/header/Header.js");
/* harmony import */ var components_profile_FeedPosts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/profile/FeedPosts */ "./components/profile/FeedPosts.js");
/* harmony import */ var components_profile_PostingPost__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/profile/PostingPost */ "./components/profile/PostingPost.js");
/* harmony import */ var _styles_feed_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/feed.module.scss */ "./containers/Feed/styles/feed.module.scss");
/* harmony import */ var _styles_feed_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_feed_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_common_ModalWrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/common/ModalWrapper */ "./components/common/ModalWrapper.js");
/* harmony import */ var _components_common_Avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/common/Avatar */ "./components/common/Avatar.js");
/* harmony import */ var configs_API__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! configs/API */ "./configs/API.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _helpers_hoc_requireAuth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../helpers/hoc/requireAuth */ "./helpers/hoc/requireAuth.js");
/* harmony import */ var _storage_ActivityContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./storage/ActivityContext */ "./containers/Feed/storage/ActivityContext.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./actions */ "./containers/Feed/actions/index.js");
/* harmony import */ var components_timeline_TimelinePosts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/timeline/TimelinePosts */ "./components/timeline/TimelinePosts.js");
/* harmony import */ var components_common_LoadingWrapper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! components/common/LoadingWrapper */ "./components/common/LoadingWrapper.js");





var _jsxFileName = "D:\\Freeskies-development-\\containers\\Feed\\Feed.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
















function Feed(_ref) {
  _s();

  var _user$profilePhoto;

  var authServices = _ref.authServices,
      auth = _ref.auth;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_storage_ActivityContext__WEBPACK_IMPORTED_MODULE_14__["ActivityContext"]),
      storage = _useContext[0],
      dispatch = _useContext[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      postModal = _useState[0],
      setPostModal = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      mobile_profile_header = _useState2[0],
      setMobileProfileHeader = _useState2[1];

  var getActivity = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(token) {
      var request, data, status, totalData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return Object(configs_API__WEBPACK_IMPORTED_MODULE_11__["default"])({
                method: 'post',
                url: '/accounts/activity',
                headers: {
                  'x-token': token
                }
              });

            case 3:
              request = _context.sent;
              data = request.data, status = request.status;

              if (status === 200) {
                totalData = data.map(function (element) {
                  element = filterAccountData(element);
                  return element;
                });
                dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["setActivity"])(totalData));
              } else if (status === 403) {
                authServices.refreshToken(getActivity);
              } else {
                antd__WEBPACK_IMPORTED_MODULE_12__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
              }

              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));

    return function getActivity(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var filterAccountData = function filterAccountData(comment_shared) {
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

  var createPost = /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(dataForRequest) {
      var request, data, status, element, totalData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["setLoading"])(true, 'posting'));
              _context2.next = 4;
              return Object(configs_API__WEBPACK_IMPORTED_MODULE_11__["default"])({
                method: 'post',
                url: '/posts',
                data: dataForRequest,
                headers: {
                  'x-token': auth.token
                }
              });

            case 4:
              request = _context2.sent;
              data = request.data, status = request.status;

              if (status === 201) {
                setPostModal(0);
                element = _objectSpread(_objectSpread({
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
                totalData = [element].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(storage.activityData));
                console.log(totalData);
                dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["setActivity"])(totalData));
              } else {
                antd__WEBPACK_IMPORTED_MODULE_12__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
              }

              dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["setLoading"])(false, 'posting'));
              _context2.next = 10;
              return request;

            case 10:
              return _context2.abrupt("return", _context2.sent);

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](0);
              dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["setLoading"])(false, 'posting'));

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 13]]);
    }));

    return function createPost(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  var ratePost = /*#__PURE__*/function () {
    var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3(type, postId, rate) {
      var url, request, data, status;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["setLoading"])(true, 'posting'));
              url = '';

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

              _context3.next = 6;
              return Object(configs_API__WEBPACK_IMPORTED_MODULE_11__["default"])({
                method: 'post',
                url: url,
                data: {
                  id: postId,
                  rating: rate
                },
                headers: {
                  'x-token': auth.token
                }
              });

            case 6:
              request = _context3.sent;
              data = request.data, status = request.status;
              console.warn('ratePost', data, status);

              if (status === 201) {
                storage.activityData.map(function (element) {
                  if (element.id === postId && element.type === type) {
                    element.rating = rate;
                    return element;
                  }
                });
                dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["setActivity"])(storage.activityData));
              } else {
                antd__WEBPACK_IMPORTED_MODULE_12__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
              }

              dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["setLoading"])(false, 'posting'));
              _context3.next = 13;
              return request;

            case 13:
              return _context3.abrupt("return", _context3.sent);

            case 16:
              _context3.prev = 16;
              _context3.t0 = _context3["catch"](0);
              dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["setLoading"])(false, 'posting'));

            case 19:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 16]]);
    }));

    return function ratePost(_x3, _x4, _x5) {
      return _ref4.apply(this, arguments);
    };
  }();

  var onUpdateTimeline = function onUpdateTimeline(data) {
    storage.activityData.map(function (element) {
      if (element.id == data.id) {
        var addElement = _objectSpread({
          account: auth.user
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
    console.log(storage.activityData);
    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["setActivity"])(storage.activityData));
  };

  var modalPopup = function modalPopup() {
    setPostModal(true);
  };

  var likeAction = /*#__PURE__*/function () {
    var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee4(type, id, term) {
      var url, request, data, status;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              url = '';

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

              _context4.prev = 2;
              _context4.next = 5;
              return Object(configs_API__WEBPACK_IMPORTED_MODULE_11__["default"])({
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

            case 5:
              request = _context4.sent;
              data = request.data, status = request.status;

              if (!(status === 201)) {
                _context4.next = 11;
                break;
              }

              antd__WEBPACK_IMPORTED_MODULE_12__["message"].success('Added successfully');
              _context4.next = 13;
              break;

            case 11:
              antd__WEBPACK_IMPORTED_MODULE_12__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
              throw new Error();

            case 13:
              _context4.next = 18;
              break;

            case 15:
              _context4.prev = 15;
              _context4.t0 = _context4["catch"](2);
              console.log(_context4.t0);

            case 18:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[2, 15]]);
    }));

    return function likeAction(_x6, _x7, _x8) {
      return _ref5.apply(this, arguments);
    };
  }();

  var shareAction = /*#__PURE__*/function () {
    var _ref6 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee5(type, id) {
      var url, request, data, status;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              url = '';

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

              _context5.prev = 2;
              _context5.next = 5;
              return Object(configs_API__WEBPACK_IMPORTED_MODULE_11__["default"])({
                method: 'post',
                url: url,
                data: {
                  shared: id
                },
                headers: {
                  'x-token': auth.token
                }
              });

            case 5:
              request = _context5.sent;
              data = request.data, status = request.status;

              if (!(status === 201)) {
                _context5.next = 11;
                break;
              }

              antd__WEBPACK_IMPORTED_MODULE_12__["message"].success('Shared successfully');
              _context5.next = 13;
              break;

            case 11:
              antd__WEBPACK_IMPORTED_MODULE_12__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
              throw new Error();

            case 13:
              _context5.next = 18;
              break;

            case 15:
              _context5.prev = 15;
              _context5.t0 = _context5["catch"](2);
              console.log(_context5.t0);

            case 18:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[2, 15]]);
    }));

    return function shareAction(_x9, _x10) {
      return _ref6.apply(this, arguments);
    };
  }();

  var deleteAction = /*#__PURE__*/function () {
    var _ref7 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee6(id) {
      var request, data, status, newactivityData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _context6.next = 3;
              return Object(configs_API__WEBPACK_IMPORTED_MODULE_11__["default"])({
                method: 'delete',
                url: '/posts',
                data: {
                  "id": id
                },
                headers: {
                  'x-token': auth.token
                }
              });

            case 3:
              request = _context6.sent;
              data = request.data, status = request.status;

              if (status !== 400) {
                newactivityData = storage.activityData.filter(function (item) {
                  return item.id !== id;
                });
                dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["setActivity"])(newactivityData));
                antd__WEBPACK_IMPORTED_MODULE_12__["message"].success('Deleted successfully!');
              } else {
                antd__WEBPACK_IMPORTED_MODULE_12__["message"].error('This post deleting does not allowed!');
              }

              _context6.next = 11;
              break;

            case 8:
              _context6.prev = 8;
              _context6.t0 = _context6["catch"](0);
              console.log(_context6.t0);

            case 11:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[0, 8]]);
    }));

    return function deleteAction(_x11) {
      return _ref7.apply(this, arguments);
    };
  }();

  var processedVideoUpdate = /*#__PURE__*/function () {
    var _ref8 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee7(video) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              console.log(video);

            case 1:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function processedVideoUpdate(_x12) {
      return _ref8.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    getActivity(auth.token);
  });
  var user = auth.user;
  console.log(storage.activityData);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(components_header_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: _styles_feed_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.feed,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_feed_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.feed_container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_feed_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.createPostDiv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 11
    }
  }, __jsx(_components_common_Avatar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    size: 50,
    url: user === null || user === void 0 ? void 0 : (_user$profilePhoto = user.profilePhoto) === null || _user$profilePhoto === void 0 ? void 0 : _user$profilePhoto.src,
    username: user === null || user === void 0 ? void 0 : user.username,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 13
    }
  }), __jsx("input", {
    className: _styles_feed_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.createPostInput,
    placeholder: "What's on your mind?",
    onClick: modalPopup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 13
    }
  })), __jsx(components_common_LoadingWrapper__WEBPACK_IMPORTED_MODULE_17__["default"], {
    loading: storage.loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 11
    }
  }, __jsx(components_timeline_TimelinePosts__WEBPACK_IMPORTED_MODULE_16__["default"], {
    data: storage.activityData,
    onUpdateTimeline: onUpdateTimeline,
    onRatePost: ratePost,
    likeAction: likeAction,
    shareAction: shareAction,
    deleteAction: deleteAction,
    processedVideoUpdate: processedVideoUpdate,
    auth: auth,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 13
    }
  })))), __jsx(_components_common_ModalWrapper__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: "Create Post",
    showModal: postModal,
    onClose: function onClose() {
      return setPostModal(0);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 7
    }
  }, __jsx(components_profile_PostingPost__WEBPACK_IMPORTED_MODULE_7__["default"], {
    loading: storage.postingLoading,
    onPosting: createPost,
    modalPopup: modalPopup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 11
    }
  })));
}

_s(Feed, "af3fwKOdml45YAg23u2UcYEas7s=");

_c = Feed;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(_helpers_hoc_requireAuth__WEBPACK_IMPORTED_MODULE_13__["default"])(Feed));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9GZWVkL0ZlZWQuanMiXSwibmFtZXMiOlsiRmVlZCIsImF1dGhTZXJ2aWNlcyIsImF1dGgiLCJ1c2VDb250ZXh0IiwiQWN0aXZpdHlDb250ZXh0Iiwic3RvcmFnZSIsImRpc3BhdGNoIiwidXNlU3RhdGUiLCJwb3N0TW9kYWwiLCJzZXRQb3N0TW9kYWwiLCJtb2JpbGVfcHJvZmlsZV9oZWFkZXIiLCJzZXRNb2JpbGVQcm9maWxlSGVhZGVyIiwiZ2V0QWN0aXZpdHkiLCJ0b2tlbiIsIkFQSSIsIm1ldGhvZCIsInVybCIsImhlYWRlcnMiLCJyZXF1ZXN0IiwiZGF0YSIsInN0YXR1cyIsInRvdGFsRGF0YSIsIm1hcCIsImVsZW1lbnQiLCJmaWx0ZXJBY2NvdW50RGF0YSIsInNldEFjdGl2aXR5IiwicmVmcmVzaFRva2VuIiwibWVzc2FnZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNvbW1lbnRfc2hhcmVkIiwidHlwZSIsImNvbW1lbnRlZCIsImNvbW1lbnRzIiwic2hhcmVkIiwic2hhcmVzIiwiY3JlYXRlUG9zdCIsImRhdGFGb3JSZXF1ZXN0Iiwic2V0TG9hZGluZyIsImNvbW1lbnRzQ291bnQiLCJyYXRpbmciLCJyZWFjdGlvbnMiLCJyZWFjdGlvbnNDb3VudCIsInNoYXJlc0NvdW50IiwiYWNjb3VudCIsInVzZXIiLCJhY3Rpdml0eURhdGEiLCJyYXRlUG9zdCIsInBvc3RJZCIsInJhdGUiLCJpZCIsIndhcm4iLCJvblVwZGF0ZVRpbWVsaW5lIiwiYWRkRWxlbWVudCIsInB1c2giLCJtb2RhbFBvcHVwIiwibGlrZUFjdGlvbiIsInRlcm0iLCJyZWFjdGVkIiwicmVhY3Rpb24iLCJzdWNjZXNzIiwiRXJyb3IiLCJzaGFyZUFjdGlvbiIsImRlbGV0ZUFjdGlvbiIsIm5ld2FjdGl2aXR5RGF0YSIsImZpbHRlciIsIml0ZW0iLCJwcm9jZXNzZWRWaWRlb1VwZGF0ZSIsInZpZGVvIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiZmVlZCIsImZlZWRfY29udGFpbmVyIiwiY3JlYXRlUG9zdERpdiIsInByb2ZpbGVQaG90byIsInNyYyIsInVzZXJuYW1lIiwiY3JlYXRlUG9zdElucHV0IiwibG9hZGluZyIsInBvc3RpbmdMb2FkaW5nIiwicmVxdWlyZUF1dGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxJQUFULE9BQXNDO0FBQUE7O0FBQUE7O0FBQUEsTUFBdEJDLFlBQXNCLFFBQXRCQSxZQUFzQjtBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTs7QUFBQSxvQkFDUkMsd0RBQVUsQ0FBQ0MseUVBQUQsQ0FERjtBQUFBLE1BQzdCQyxPQUQ2QjtBQUFBLE1BQ3BCQyxRQURvQjs7QUFBQSxrQkFFRkMsc0RBQVEsQ0FBQyxLQUFELENBRk47QUFBQSxNQUU3QkMsU0FGNkI7QUFBQSxNQUVsQkMsWUFGa0I7O0FBQUEsbUJBR29CRixzREFBUSxDQUFDLEtBQUQsQ0FINUI7QUFBQSxNQUc3QkcscUJBSDZCO0FBQUEsTUFHTkMsc0JBSE07O0FBS3BDLE1BQU1DLFdBQVc7QUFBQSxpTUFBRyxpQkFBT0MsS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRU1DLDREQUFHLENBQUM7QUFDeEJDLHNCQUFNLEVBQUUsTUFEZ0I7QUFFeEJDLG1CQUFHLEVBQUUsb0JBRm1CO0FBR3hCQyx1QkFBTyxFQUFFO0FBQUUsNkJBQVdKO0FBQWI7QUFIZSxlQUFELENBRlQ7O0FBQUE7QUFFVksscUJBRlU7QUFPUkMsa0JBUFEsR0FPU0QsT0FQVCxDQU9SQyxJQVBRLEVBT0ZDLE1BUEUsR0FPU0YsT0FQVCxDQU9GRSxNQVBFOztBQVFoQixrQkFBSUEsTUFBTSxLQUFLLEdBQWYsRUFBb0I7QUFDZEMs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SUFORixDQURGLEVBWUUsTUFBQyx5RUFBRDtBQUFnQixXQUFPLEVBQUVuRCxPQUFPLENBQUMwRSxPQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwRUFBRDtBQUNFLFFBQUksRUFBRTFFLE9BQU8sQ0FBQzBDLFlBRGhCO0FBRUUsb0JBQWdCLEVBQUVNLGdCQUZwQjtBQUdFLGNBQVUsRUFBRUwsUUFIZDtBQUlFLGNBQVUsRUFBRVMsVUFKZDtBQUtFLGVBQVcsRUFBRU0sV0FMZjtBQU1FLGdCQUFZLEVBQUVDLFlBTmhCO0FBT0Usd0JBQW9CLEVBQUVJLG9CQVB4QjtBQVFFLFFBQUksRUFBRWxFLElBUlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBWkYsQ0FERixDQUZGLEVBNkJFLE1BQUMsdUVBQUQ7QUFDSSxTQUFLLEVBQUMsYUFEVjtBQUVJLGFBQVMsRUFBRU0sU0FGZjtBQUdJLFdBQU8sRUFBRTtBQUFBLGFBQU1DLFlBQVksQ0FBQyxDQUFELENBQWxCO0FBQUEsS0FIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0ksTUFBQyxzRUFBRDtBQUNJLFdBQU8sRUFBRUosT0FBTyxDQUFDMkUsY0FEckI7QUFFSSxhQUFTLEVBQUUzQyxVQUZmO0FBR0ksY0FBVSxFQUFFbUIsVUFIaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxKLENBN0JGLENBREY7QUEyQ0Q7O0dBcFZReEQsSTs7S0FBQUEsSTtBQXVWTSxxRUFBQWlGLHlFQUFXLENBQUNqRixJQUFELENBQTFCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FjdGl2aXR5LjNjNjhmZmU4N2I3ODdjYWQxNjJmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlcic7XHJcbmltcG9ydCBGZWVkUG9zdHMgZnJvbSAnY29tcG9uZW50cy9wcm9maWxlL0ZlZWRQb3N0cyc7XHJcbmltcG9ydCBQb3N0aW5nUG9zdCBmcm9tICdjb21wb25lbnRzL3Byb2ZpbGUvUG9zdGluZ1Bvc3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL2ZlZWQubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgTW9kYWxXcmFwcGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9uL01vZGFsV3JhcHBlcic7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb24vQXZhdGFyJztcclxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEFQSSBmcm9tICdjb25maWdzL0FQSSc7XHJcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHJlcXVpcmVBdXRoIGZyb20gJy4uLy4uL2hlbHBlcnMvaG9jL3JlcXVpcmVBdXRoJztcclxuaW1wb3J0IHsgQWN0aXZpdHlDb250ZXh0IH0gZnJvbSAnLi9zdG9yYWdlL0FjdGl2aXR5Q29udGV4dCc7XHJcbmltcG9ydCB7IHNldExvYWRpbmcsIHNldEFjdGl2aXR5IH0gZnJvbSAnLi9hY3Rpb25zJztcclxuaW1wb3J0IFRpbWVsaW5lUG9zdHMgZnJvbSAnY29tcG9uZW50cy90aW1lbGluZS9UaW1lbGluZVBvc3RzJztcclxuaW1wb3J0IExvYWRpbmdXcmFwcGVyIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL0xvYWRpbmdXcmFwcGVyJztcclxuXHJcbmZ1bmN0aW9uIEZlZWQoeyBhdXRoU2VydmljZXMsIGF1dGggfSkge1xyXG4gIGNvbnN0IFtzdG9yYWdlLCBkaXNwYXRjaF0gPSB1c2VDb250ZXh0KEFjdGl2aXR5Q29udGV4dCk7ICBcclxuICBjb25zdCBbcG9zdE1vZGFsLCBzZXRQb3N0TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFttb2JpbGVfcHJvZmlsZV9oZWFkZXIsIHNldE1vYmlsZVByb2ZpbGVIZWFkZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIFxyXG4gIGNvbnN0IGdldEFjdGl2aXR5ID0gYXN5bmMgKHRva2VuKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6ICcvYWNjb3VudHMvYWN0aXZpdHknLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiB0b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIHZhciB0b3RhbERhdGEgPSBkYXRhLm1hcChlbGVtZW50ID0+IHsgXHJcbiAgICAgICAgICBlbGVtZW50ID0gZmlsdGVyQWNjb3VudERhdGEoZWxlbWVudCk7XHJcbiAgICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGRpc3BhdGNoKHNldEFjdGl2aXR5KHRvdGFsRGF0YSkpO1xyXG4gICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gNDAzKSB7XHJcbiAgICAgICAgYXV0aFNlcnZpY2VzLnJlZnJlc2hUb2tlbihnZXRBY3Rpdml0eSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZmlsdGVyQWNjb3VudERhdGEgPSAoY29tbWVudF9zaGFyZWQpID0+IHtcclxuICAgIGlmKGNvbW1lbnRfc2hhcmVkLnR5cGUgPT09ICdDb21tZW50Jykge1xyXG4gICAgICBpZihjb21tZW50X3NoYXJlZC5jb21tZW50ZWQudHlwZSA9PSAnUG9zdCcpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uY29tbWVudF9zaGFyZWQuY29tbWVudGVkLFxyXG4gICAgICAgICAgY29tbWVudHM6IFt7Li4uY29tbWVudF9zaGFyZWR9XVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChjb21tZW50X3NoYXJlZC5jb21tZW50ZWQudHlwZSA9PSAnQ29tbWVudCcpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uY29tbWVudF9zaGFyZWQuY29tbWVudGVkLmNvbW1lbnRlZCxcclxuICAgICAgICAgIGNvbW1lbnRzOiBbey4uLmNvbW1lbnRfc2hhcmVkLmNvbW1lbnRlZCwgY29tbWVudHM6IFtjb21tZW50X3NoYXJlZF0gfV1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZihjb21tZW50X3NoYXJlZC5jb21tZW50ZWQudHlwZSA9PSAnU2hhcmUnKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLmNvbW1lbnRfc2hhcmVkLmNvbW1lbnRlZC5zaGFyZWQsXHJcbiAgICAgICAgICBjb21tZW50czogW3sgLi4uY29tbWVudF9zaGFyZWQgfV1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLmNvbW1lbnRfc2hhcmVkLmNvbW1lbnRlZCxcclxuICAgICAgICAgIGNvbW1lbnRzOiBbeyAuLi5jb21tZW50X3NoYXJlZCB9XVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmKGNvbW1lbnRfc2hhcmVkLnR5cGUgPT09ICdQb3N0Jykge1xyXG4gICAgICAgIHJldHVybiBjb21tZW50X3NoYXJlZDtcclxuICAgIH0gZWxzZSBpZihjb21tZW50X3NoYXJlZC50eXBlID09PSAnU2hhcmUnKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uY29tbWVudF9zaGFyZWQuc2hhcmVkLFxyXG4gICAgICAgIHNoYXJlczogW3suLi5jb21tZW50X3NoYXJlZCB9XVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gY29tbWVudF9zaGFyZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBjcmVhdGVQb3N0ID0gYXN5bmMgKGRhdGFGb3JSZXF1ZXN0KSA9PiB7XHJcbiAgICB0cnkge1xyXG5cclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlLCAncG9zdGluZycpKTtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsOiAnL3Bvc3RzJyxcclxuICAgICAgICBkYXRhOiBkYXRhRm9yUmVxdWVzdCxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcblxyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICBzZXRQb3N0TW9kYWwoMCk7XHJcbiAgICAgICAgdmFyIGVsZW1lbnQgPSAge1xyXG4gICAgICAgICAgdHlwZTogJ1Bvc3QnLFxyXG4gICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAgIGNvbW1lbnRzOiBbXSxcclxuICAgICAgICAgIGNvbW1lbnRzQ291bnQ6IDAsXHJcbiAgICAgICAgICByYXRpbmc6IG51bGwsXHJcbiAgICAgICAgICByZWFjdGlvbnM6IFtdLFxyXG4gICAgICAgICAgcmVhY3Rpb25zQ291bnQ6IDAsXHJcbiAgICAgICAgICBzaGFyZXM6IFtdLFxyXG4gICAgICAgICAgc2hhcmVzQ291bnQ6IDAsXHJcbiAgICAgICAgICBhY2NvdW50OiBhdXRoLnVzZXJcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHRvdGFsRGF0YSA9IFtcclxuICAgICAgICAgIGVsZW1lbnQsIC4uLnN0b3JhZ2UuYWN0aXZpdHlEYXRhXHJcbiAgICAgICAgXVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRvdGFsRGF0YSk7XHJcbiAgICAgICAgZGlzcGF0Y2goc2V0QWN0aXZpdHkodG90YWxEYXRhKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSwgJ3Bvc3RpbmcnKSk7XHJcblxyXG4gICAgICByZXR1cm4gYXdhaXQgcmVxdWVzdDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UsICdwb3N0aW5nJykpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJhdGVQb3N0ID0gYXN5bmMgKHR5cGUsIHBvc3RJZCwgcmF0ZSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlLCAncG9zdGluZycpKTtcclxuICAgICAgbGV0IHVybCA9ICcnO1xyXG5cclxuICAgICAgaWYgKHR5cGUgPT09ICdQaG90bycpIHtcclxuICAgICAgICB1cmwgPSAnL3Bob3Rvcy9yYXRlJztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnVmlkZW9DbGlwJykge1xyXG4gICAgICAgIHVybCA9ICcvdmlkZW8tY2xpcHMvcmF0ZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0l0ZW0nKSB7XHJcbiAgICAgICAgdXJsID0gJy9pdGVtcy9yYXRlJztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnUG9zdCcpIHtcclxuICAgICAgICB1cmwgPSAnL3Bvc3RzL3JhdGUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdDb21tZW50Jykge1xyXG4gICAgICAgIHVybCA9ICcvY29tbWVudHMvcmF0ZSc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBpZDogcG9zdElkLFxyXG4gICAgICAgICAgcmF0aW5nOiByYXRlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG5cclxuICAgICAgY29uc29sZS53YXJuKCdyYXRlUG9zdCcsIGRhdGEsIHN0YXR1cyk7XHJcblxyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICBzdG9yYWdlLmFjdGl2aXR5RGF0YS5tYXAoZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICBpZihlbGVtZW50LmlkID09PSBwb3N0SWQgJiYgZWxlbWVudC50eXBlID09PSB0eXBlKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQucmF0aW5nID0gcmF0ZTtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBkaXNwYXRjaChzZXRBY3Rpdml0eShzdG9yYWdlLmFjdGl2aXR5RGF0YSkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UsICdwb3N0aW5nJykpO1xyXG5cclxuICAgICAgcmV0dXJuIGF3YWl0IHJlcXVlc3Q7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlLCAncG9zdGluZycpKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuXHJcbiAgY29uc3Qgb25VcGRhdGVUaW1lbGluZSA9IChkYXRhKSA9PiB7XHJcbiAgICBzdG9yYWdlLmFjdGl2aXR5RGF0YS5tYXAoZWxlbWVudCA9PiB7XHJcbiAgICAgIGlmKGVsZW1lbnQuaWQgPT0gZGF0YS5pZCkge1xyXG4gICAgICAgIGxldCBhZGRFbGVtZW50ID0ge1xyXG4gICAgICAgICAgYWNjb3VudDogYXV0aC51c2VyLCBcclxuICAgICAgICAgIC4uLmRhdGEuY29tbWVudHNbMF1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodHlwZW9mIGVsZW1lbnQuY29tbWVudHMgPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgIGVsZW1lbnRbJ2NvbW1lbnRzJ10gPSBbYWRkRWxlbWVudF07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGVsZW1lbnQuY29tbWVudHMucHVzaChhZGRFbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxlbWVudC5jb21tZW50c0NvdW50ICs9IGRhdGEuY29tbWVudHNDb3VudDtcclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIGNvbnNvbGUubG9nKHN0b3JhZ2UuYWN0aXZpdHlEYXRhKTtcclxuICAgIGRpc3BhdGNoKHNldEFjdGl2aXR5KHN0b3JhZ2UuYWN0aXZpdHlEYXRhKSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBtb2RhbFBvcHVwID0gKCkgPT4ge1xyXG4gICAgc2V0UG9zdE1vZGFsKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbGlrZUFjdGlvbiA9IGFzeW5jICh0eXBlLCBpZCwgdGVybSkgPT4ge1xyXG4gICAgdmFyIHVybCA9ICcnO1xyXG4gICAgaWYgKHR5cGUgPT09ICdQaG90bycpIHtcclxuICAgICAgdXJsID0gJy9waG90b3MvcmVhY3QnO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnVmlkZW9DbGlwJykge1xyXG4gICAgICB1cmwgPSAnL3ZpZGVvLWNsaXBzL3JlYWN0JztcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0l0ZW0nKSB7XHJcbiAgICAgIHVybCA9ICcvaXRlbXMvcmVhY3QnO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnUG9zdCcpIHtcclxuICAgICAgdXJsID0gJy9wb3N0cy9yZWFjdCc7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdDb21tZW50Jykge1xyXG4gICAgICB1cmwgPSAnL2NvbW1lbnRzL3JlYWN0JztcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1NoYXJlJykge1xyXG4gICAgICB1cmwgPSAnL3NoYXJlcy9yZWFjdCc7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgcmVhY3RlZDogaWQsXHJcbiAgICAgICAgICByZWFjdGlvbjogdGVybVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG5cclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKCdBZGRlZCBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4gIGNvbnN0IHNoYXJlQWN0aW9uID0gYXN5bmMgKHR5cGUsIGlkKSA9PiB7XHJcblxyXG4gICAgdmFyIHVybCA9ICcnO1xyXG4gICAgICBpZiAodHlwZSA9PT0gJ1Bob3RvJykge1xyXG4gICAgICAgIHVybCA9ICcvcGhvdG9zL3NoYXJlJztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnVmlkZW9DbGlwJykge1xyXG4gICAgICAgIHVybCA9ICcvdmlkZW8tY2xpcHMvc2hhcmUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdJdGVtJykge1xyXG4gICAgICAgIHVybCA9ICcvaXRlbXMvc2hhcmUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdQb3N0Jykge1xyXG4gICAgICAgIHVybCA9ICcvcG9zdHMvc2hhcmUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdDb21tZW50Jykge1xyXG4gICAgICAgIHVybCA9ICcvY29tbWVudHMvc2hhcmUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdTaGFyZScpIHtcclxuICAgICAgICB1cmwgPSAnL3Bvc3RzL3NoYXJlJztcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzaGFyZWQ6IGlkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG5cclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKCdTaGFyZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZGVsZXRlQWN0aW9uID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdkZWxldGUnLFxyXG4gICAgICAgIHVybDogJy9wb3N0cycsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgXCJpZFwiOiBpZFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG4gICAgICBpZihzdGF0dXMgIT09IDQwMCkge1xyXG4gICAgICAgIHZhciBuZXdhY3Rpdml0eURhdGEgPSBzdG9yYWdlLmFjdGl2aXR5RGF0YS5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgICAgICAgIHJldHVybiBpdGVtLmlkICE9PSBpZDtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGRpc3BhdGNoKHNldEFjdGl2aXR5KG5ld2FjdGl2aXR5RGF0YSkpXHJcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKCdEZWxldGVkIHN1Y2Nlc3NmdWxseSEnKTtcclxuICAgICB9IGVsc2Uge1xyXG4gICAgICAgbWVzc2FnZS5lcnJvcignVGhpcyBwb3N0IGRlbGV0aW5nIGRvZXMgbm90IGFsbG93ZWQhJylcclxuICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcil7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHByb2Nlc3NlZFZpZGVvVXBkYXRlID0gYXN5bmMgKHZpZGVvKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyh2aWRlbyk7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0QWN0aXZpdHkoYXV0aC50b2tlbik7XHJcbiAgfSk7XHJcbiAgXHJcbiAgY29uc3QgeyB1c2VyIH0gPSBhdXRoO1xyXG4gIGNvbnNvbGUubG9nKHN0b3JhZ2UuYWN0aXZpdHlEYXRhKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZlZWR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmVlZF9jb250YWluZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jcmVhdGVQb3N0RGl2fT5cclxuICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgc2l6ZT17NTB9XHJcbiAgICAgICAgICAgICAgICB1cmw9e3VzZXI/LnByb2ZpbGVQaG90bz8uc3JjfVxyXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU9e3VzZXI/LnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuY3JlYXRlUG9zdElucHV0fSBwbGFjZWhvbGRlcj1cIldoYXQncyBvbiB5b3VyIG1pbmQ/XCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXttb2RhbFBvcHVwfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDwvaW5wdXQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxMb2FkaW5nV3JhcHBlciBsb2FkaW5nPXtzdG9yYWdlLmxvYWRpbmd9PlxyXG4gICAgICAgICAgICA8VGltZWxpbmVQb3N0c1xyXG4gICAgICAgICAgICAgIGRhdGE9e3N0b3JhZ2UuYWN0aXZpdHlEYXRhfVxyXG4gICAgICAgICAgICAgIG9uVXBkYXRlVGltZWxpbmU9e29uVXBkYXRlVGltZWxpbmV9XHJcbiAgICAgICAgICAgICAgb25SYXRlUG9zdD17cmF0ZVBvc3R9XHJcbiAgICAgICAgICAgICAgbGlrZUFjdGlvbj17bGlrZUFjdGlvbn1cclxuICAgICAgICAgICAgICBzaGFyZUFjdGlvbj17c2hhcmVBY3Rpb259XHJcbiAgICAgICAgICAgICAgZGVsZXRlQWN0aW9uPXtkZWxldGVBY3Rpb259XHJcbiAgICAgICAgICAgICAgcHJvY2Vzc2VkVmlkZW9VcGRhdGU9e3Byb2Nlc3NlZFZpZGVvVXBkYXRlfVxyXG4gICAgICAgICAgICAgIGF1dGg9e2F1dGh9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0xvYWRpbmdXcmFwcGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPE1vZGFsV3JhcHBlclxyXG4gICAgICAgICAgdGl0bGU9XCJDcmVhdGUgUG9zdFwiXHJcbiAgICAgICAgICBzaG93TW9kYWw9e3Bvc3RNb2RhbH1cclxuICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFBvc3RNb2RhbCgwKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8UG9zdGluZ1Bvc3RcclxuICAgICAgICAgICAgICBsb2FkaW5nPXtzdG9yYWdlLnBvc3RpbmdMb2FkaW5nfVxyXG4gICAgICAgICAgICAgIG9uUG9zdGluZz17Y3JlYXRlUG9zdH1cclxuICAgICAgICAgICAgICBtb2RhbFBvcHVwPXttb2RhbFBvcHVwfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgPC9Nb2RhbFdyYXBwZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVxdWlyZUF1dGgoRmVlZCk7Il0sInNvdXJjZVJvb3QiOiIifQ==