webpackHotUpdate_N_E("pages/timeline",{

/***/ "./containers/Timeline/TimelinePage.js":
/*!*********************************************!*\
  !*** ./containers/Timeline/TimelinePage.js ***!
  \*********************************************/
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
/* harmony import */ var components_timeline_TimelinePosts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/timeline/TimelinePosts */ "./components/timeline/TimelinePosts.js");
/* harmony import */ var components_profile_PostingPost__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/profile/PostingPost */ "./components/profile/PostingPost.js");
/* harmony import */ var _styles_timeline_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/timeline.module.scss */ "./containers/Timeline/styles/timeline.module.scss");
/* harmony import */ var _styles_timeline_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_timeline_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var configs_API__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! configs/API */ "./configs/API.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _storage_TimelineContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./storage/TimelineContext */ "./containers/Timeline/storage/TimelineContext.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./actions */ "./containers/Timeline/actions/index.js");
/* harmony import */ var components_common_LoadingWrapper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/common/LoadingWrapper */ "./components/common/LoadingWrapper.js");
/* harmony import */ var _helpers_hoc_requireAuth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../helpers/hoc/requireAuth */ "./helpers/hoc/requireAuth.js");
/* harmony import */ var _components_common_ModalWrapper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/common/ModalWrapper */ "./components/common/ModalWrapper.js");
/* harmony import */ var _components_common_Avatar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/common/Avatar */ "./components/common/Avatar.js");





var _jsxFileName = "E:\\freeskies_fe_code\\containers\\Timeline\\TimelinePage.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }















function TimelinePage(_ref) {
  _s();

  var _accountData, _accountData2, _accountData3, _user$profilePhoto;

  var authServices = _ref.authServices,
      auth = _ref.auth;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_storage_TimelineContext__WEBPACK_IMPORTED_MODULE_11__["TimeLineContext"]),
      storage = _useContext[0],
      dispatch = _useContext[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      postModal = _useState[0],
      setPostModal = _useState[1];

  var getTimeline = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(token) {
      var withoutLoading,
          request,
          data,
          status,
          totalData,
          _args = arguments;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              withoutLoading = _args.length > 1 && _args[1] !== undefined ? _args[1] : false;
              _context.prev = 1;
              if (!withoutLoading) dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_12__["setLoading"])(true));
              _context.next = 5;
              return Object(configs_API__WEBPACK_IMPORTED_MODULE_9__["default"])({
                method: 'post',
                url: '/accounts/timeline',
                headers: {
                  'x-token': token
                }
              });

            case 5:
              request = _context.sent;
              data = request.data, status = request.status;

              if (status === 200) {
                totalData = data.map(function (element) {
                  element = filterAccountData(element);
                  return element;
                });
                console.log(totalData);
                dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_12__["setTimelineData"])(totalData));
                console.log('=========');
              } else if (status === 403) {
                console.log('================= Refresh token !');
                authServices.refreshToken(getTimeline);
              } else {
                antd__WEBPACK_IMPORTED_MODULE_10__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
              }

              if (!withoutLoading) dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_12__["setLoading"])(false));
              _context.next = 15;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);
              if (!withoutLoading) dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_12__["setLoading"])(false));

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 11]]);
    }));

    return function getTimeline(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var filterAccountData = function filterAccountData(comment_shared) {
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

  var createPost = /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(dataForRequest) {
      var request, data, status, element, totalData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_12__["setLoading"])(true, 'posting'));
              _context2.next = 4;
              return Object(configs_API__WEBPACK_IMPORTED_MODULE_9__["default"])({
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
                totalData = [element].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(storage.timelineData));
                console.log(totalData);
                dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_12__["setTimelineData"])(totalData));
              } else {
                antd__WEBPACK_IMPORTED_MODULE_10__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
              }

              dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_12__["setLoading"])(false, 'posting'));
              _context2.next = 10;
              return request;

            case 10:
              return _context2.abrupt("return", _context2.sent);

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](0);
              dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_12__["setLoading"])(false, 'posting'));

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
              dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_12__["setLoading"])(true, 'posting'));
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
              return Object(configs_API__WEBPACK_IMPORTED_MODULE_9__["default"])({
                method: 'post',
                url: url,
                data: {
                  rated: postId,
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
                onUpdateTimeline();
                antd__WEBPACK_IMPORTED_MODULE_10__["message"].success('Evaluate successfully');
              } else {
                antd__WEBPACK_IMPORTED_MODULE_10__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
              }

              dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_12__["setLoading"])(false, 'posting'));
              _context3.next = 13;
              return request;

            case 13:
              return _context3.abrupt("return", _context3.sent);

            case 16:
              _context3.prev = 16;
              _context3.t0 = _context3["catch"](0);
              dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_12__["setLoading"])(false, 'posting'));

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
    storage.timelineData.map(function (element) {
      if (element.id == data.id) {
        var addElement = _objectSpread({
          account: auth.user
        }, data.comments[0]);

        element.comments.push(addElement);
        element.commentsCount += data.commentsCount;
        return element;
      }
    });
    console.log(storage.timelineData);
    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_12__["setTimelineData"])(storage.timelineData));
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
              return Object(configs_API__WEBPACK_IMPORTED_MODULE_9__["default"])({
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

              antd__WEBPACK_IMPORTED_MODULE_10__["message"].success('Evaluate successfully');
              _context4.next = 13;
              break;

            case 11:
              antd__WEBPACK_IMPORTED_MODULE_10__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
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
              return Object(configs_API__WEBPACK_IMPORTED_MODULE_9__["default"])({
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

              antd__WEBPACK_IMPORTED_MODULE_10__["message"].success('Evaluate successfully');
              _context5.next = 13;
              break;

            case 11:
              antd__WEBPACK_IMPORTED_MODULE_10__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
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

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    getTimeline(auth.token);
  }, []);
  var user = auth.user;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(components_header_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 7
    }
  }), mobile_profile_header ? __jsx("div", {
    className: _styles_timeline_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.mobile_profile_header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 30
    }
  }, __jsx("div", {
    className: _styles_timeline_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_timeline_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.avatar_image,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 13
    }
  }, __jsx(_components_common_Avatar__WEBPACK_IMPORTED_MODULE_16__["default"], {
    size: 40,
    url: profileUrl,
    text: (_accountData = accountData) === null || _accountData === void 0 ? void 0 : _accountData.username,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 15
    }
  }))), __jsx("p", {
    className: _styles_timeline_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.mobile_fullname,
    style: {
      cursor: 'pointer'
    },
    onClick: function onClick() {
      return setEditProfileModal(true);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 7
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 9
    }
  }, "".concat((_accountData2 = accountData) === null || _accountData2 === void 0 ? void 0 : _accountData2.firstName, " ").concat((_accountData3 = accountData) === null || _accountData3 === void 0 ? void 0 : _accountData3.lastName)))) : null, __jsx("div", {
    className: _styles_timeline_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.timeline,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_timeline_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.feed_container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_timeline_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.createPostDiv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 11
    }
  }, __jsx(_components_common_Avatar__WEBPACK_IMPORTED_MODULE_16__["default"], {
    size: 50,
    url: user === null || user === void 0 ? void 0 : (_user$profilePhoto = user.profilePhoto) === null || _user$profilePhoto === void 0 ? void 0 : _user$profilePhoto.src,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 13
    }
  }), __jsx("input", {
    className: _styles_timeline_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.createPostInput,
    placeholder: "What's on your mind?",
    onClick: modalPopup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 13
    }
  })), __jsx(components_common_LoadingWrapper__WEBPACK_IMPORTED_MODULE_13__["default"], {
    loading: storage.loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 11
    }
  }, __jsx(components_timeline_TimelinePosts__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: storage.timelineData,
    onUpdateTimeline: onUpdateTimeline,
    onRatePost: ratePost,
    likeAction: likeAction,
    shareAction: shareAction,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 13
    }
  })))), __jsx(_components_common_ModalWrapper__WEBPACK_IMPORTED_MODULE_15__["default"], {
    title: "Create Post",
    showModal: postModal,
    onClose: function onClose() {
      return setPostModal(0);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 7
    }
  }, __jsx(components_profile_PostingPost__WEBPACK_IMPORTED_MODULE_7__["default"], {
    loading: storage.postingLoading,
    onPosting: createPost,
    modalPopup: modalPopup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 11
    }
  })));
}

_s(TimelinePage, "rs5wtYecd/QO1D6A7bErdNfN5ho=");

_c = TimelinePage;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(_helpers_hoc_requireAuth__WEBPACK_IMPORTED_MODULE_14__["default"])(TimelinePage));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9UaW1lbGluZS9UaW1lbGluZVBhZ2UuanMiXSwibmFtZXMiOlsiVGltZWxpbmVQYWdlIiwiYXV0aFNlcnZpY2VzIiwiYXV0aCIsInVzZUNvbnRleHQiLCJUaW1lTGluZUNvbnRleHQiLCJzdG9yYWdlIiwiZGlzcGF0Y2giLCJ1c2VTdGF0ZSIsInBvc3RNb2RhbCIsInNldFBvc3RNb2RhbCIsImdldFRpbWVsaW5lIiwidG9rZW4iLCJ3aXRob3V0TG9hZGluZyIsInNldExvYWRpbmciLCJBUEkiLCJtZXRob2QiLCJ1cmwiLCJoZWFkZXJzIiwicmVxdWVzdCIsImRhdGEiLCJzdGF0dXMiLCJ0b3RhbERhdGEiLCJtYXAiLCJlbGVtZW50IiwiZmlsdGVyQWNjb3VudERhdGEiLCJjb25zb2xlIiwibG9nIiwic2V0VGltZWxpbmVEYXRhIiwicmVmcmVzaFRva2VuIiwibWVzc2FnZSIsImVycm9yIiwiY29tbWVudF9zaGFyZWQiLCJ0eXBlIiwiY29tbWVudGVkIiwiY29tbWVudHMiLCJhY2NvdW50Iiwic2hhcmVkIiwiY3JlYXRlUG9zdCIsImRhdGFGb3JSZXF1ZXN0IiwiY29tbWVudHNDb3VudCIsInJhdGluZyIsInJlYWN0aW9ucyIsInJlYWN0aW9uc0NvdW50Iiwic2hhcmVzIiwic2hhcmVzQ291bnQiLCJ1c2VyIiwidGltZWxpbmVEYXRhIiwicmF0ZVBvc3QiLCJwb3N0SWQiLCJyYXRlIiwicmF0ZWQiLCJ3YXJuIiwib25VcGRhdGVUaW1lbGluZSIsInN1Y2Nlc3MiLCJpZCIsImFkZEVsZW1lbnQiLCJwdXNoIiwibW9kYWxQb3B1cCIsImxpa2VBY3Rpb24iLCJ0ZXJtIiwicmVhY3RlZCIsInJlYWN0aW9uIiwiRXJyb3IiLCJzaGFyZUFjdGlvbiIsInVzZUVmZmVjdCIsIm1vYmlsZV9wcm9maWxlX2hlYWRlciIsInN0eWxlcyIsImF2YXRhciIsImF2YXRhcl9pbWFnZSIsInByb2ZpbGVVcmwiLCJhY2NvdW50RGF0YSIsInVzZXJuYW1lIiwibW9iaWxlX2Z1bGxuYW1lIiwiY3Vyc29yIiwic2V0RWRpdFByb2ZpbGVNb2RhbCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwidGltZWxpbmUiLCJmZWVkX2NvbnRhaW5lciIsImNyZWF0ZVBvc3REaXYiLCJwcm9maWxlUGhvdG8iLCJzcmMiLCJjcmVhdGVQb3N0SW5wdXQiLCJsb2FkaW5nIiwicG9zdGluZ0xvYWRpbmciLCJyZXF1aXJlQXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFlBQVQsT0FBOEM7QUFBQTs7QUFBQTs7QUFBQSxNQUF0QkMsWUFBc0IsUUFBdEJBLFlBQXNCO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFROztBQUFBLG9CQUNoQkMsd0RBQVUsQ0FBQ0MseUVBQUQsQ0FETTtBQUFBLE1BQ3JDQyxPQURxQztBQUFBLE1BQzVCQyxRQUQ0Qjs7QUFBQSxrQkFFVkMsc0RBQVEsQ0FBQyxLQUFELENBRkU7QUFBQSxNQUVyQ0MsU0FGcUM7QUFBQSxNQUUxQkMsWUFGMEI7O0FBSTVDLE1BQU1DLFdBQVc7QUFBQSxpTUFBRyxpQkFBT0MsS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWNDLDRCQUFkLDJEQUErQixLQUEvQjtBQUFBO0FBR2hCLGtCQUFJLENBQUNBLGNBQUwsRUFBcUJOLFFBQVEsQ0FBQ08sNERBQVUsQ0FBQyxJQUFELENBQVgsQ0FBUjtBQUhMO0FBQUEscUJBSU1DLDJEQUFHLENBQUM7QUFDeEJDLHNCQUFNLEVBQUUsTUFEZ0I7QUFFeEJDLG1CQUFHLEVBQUUsb0JBRm1CO0FBR3hCQyx1QkFBTyxFQUFFO0FBQUUsNkJBQVdOO0FBQWI7QUFIZSxlQUFELENBSlQ7O0FBQUE7QUFJVk8scUJB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QUQ7QUFDRSxRQUFJLEVBQUU5RSxPQUFPLENBQUN5QyxZQURoQjtBQUVFLG9CQUFnQixFQUFFTSxnQkFGcEI7QUFHRSxjQUFVLEVBQUVMLFFBSGQ7QUFJRSxjQUFVLEVBQUVXLFVBSmQ7QUFLRSxlQUFXLEVBQUVLLFdBTGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBWEYsQ0FERixDQWpCRixFQXdDRSxNQUFDLHdFQUFEO0FBQ0ksU0FBSyxFQUFDLGFBRFY7QUFFSSxhQUFTLEVBQUV2RCxTQUZmO0FBR0ksV0FBTyxFQUFFO0FBQUEsYUFBTUMsWUFBWSxDQUFDLENBQUQsQ0FBbEI7QUFBQSxLQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLSSxNQUFDLHNFQUFEO0FBQ0ksV0FBTyxFQUFFSixPQUFPLENBQUMrRSxjQURyQjtBQUVJLGFBQVMsRUFBRS9DLFVBRmY7QUFHSSxjQUFVLEVBQUVvQixVQUhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEosQ0F4Q0YsQ0FERjtBQXNERDs7R0FsVVF6RCxZOztLQUFBQSxZO0FBb1VNLHFFQUFBcUYseUVBQVcsQ0FBQ3JGLFlBQUQsQ0FBMUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGltZWxpbmUuNjcyMmFiODQ4MjQ3YWI0YWMyMzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyJztcclxuaW1wb3J0IFRpbWVsaW5lUG9zdHMgZnJvbSAnY29tcG9uZW50cy90aW1lbGluZS9UaW1lbGluZVBvc3RzJztcclxuaW1wb3J0IFBvc3RpbmdQb3N0IGZyb20gJ2NvbXBvbmVudHMvcHJvZmlsZS9Qb3N0aW5nUG9zdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvdGltZWxpbmUubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgQVBJIGZyb20gJ2NvbmZpZ3MvQVBJJztcclxuaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBUaW1lTGluZUNvbnRleHQgfSBmcm9tICcuL3N0b3JhZ2UvVGltZWxpbmVDb250ZXh0JztcclxuaW1wb3J0IHsgc2V0TG9hZGluZywgc2V0VGltZWxpbmVEYXRhIH0gZnJvbSAnLi9hY3Rpb25zJztcclxuaW1wb3J0IExvYWRpbmdXcmFwcGVyIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL0xvYWRpbmdXcmFwcGVyJztcclxuaW1wb3J0IHJlcXVpcmVBdXRoIGZyb20gJy4uLy4uL2hlbHBlcnMvaG9jL3JlcXVpcmVBdXRoJztcclxuaW1wb3J0IE1vZGFsV3JhcHBlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9Nb2RhbFdyYXBwZXInO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9uL0F2YXRhcic7XHJcblxyXG5mdW5jdGlvbiBUaW1lbGluZVBhZ2UoeyBhdXRoU2VydmljZXMsIGF1dGggfSkge1xyXG4gIGNvbnN0IFtzdG9yYWdlLCBkaXNwYXRjaF0gPSB1c2VDb250ZXh0KFRpbWVMaW5lQ29udGV4dCk7XHJcbiAgY29uc3QgW3Bvc3RNb2RhbCwgc2V0UG9zdE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgZ2V0VGltZWxpbmUgPSBhc3luYyAodG9rZW4sIHdpdGhvdXRMb2FkaW5nID0gZmFsc2UpID0+IHtcclxuICAgIC8vIGNvbnNvbGUud2FybihhdXRoU2VydmljZXMuYXV0aCwgYXV0aFNlcnZpY2VzLmxvY2Fsc3RvcmFnZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoIXdpdGhvdXRMb2FkaW5nKSBkaXNwYXRjaChzZXRMb2FkaW5nKHRydWUpKTtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsOiAnL2FjY291bnRzL3RpbWVsaW5lJyxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogdG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICB2YXIgdG90YWxEYXRhID0gZGF0YS5tYXAoZWxlbWVudCA9PiB7IFxyXG4gICAgICAgICAgZWxlbWVudCA9IGZpbHRlckFjY291bnREYXRhKGVsZW1lbnQpO1xyXG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zb2xlLmxvZyh0b3RhbERhdGEpO1xyXG4gICAgICAgIGRpc3BhdGNoKHNldFRpbWVsaW5lRGF0YSh0b3RhbERhdGEpKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnPT09PT09PT09Jyk7XHJcbiAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSA0MDMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnPT09PT09PT09PT09PT09PT0gUmVmcmVzaCB0b2tlbiAhJyk7XHJcblxyXG4gICAgICAgIGF1dGhTZXJ2aWNlcy5yZWZyZXNoVG9rZW4oZ2V0VGltZWxpbmUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghd2l0aG91dExvYWRpbmcpIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgaWYgKCF3aXRob3V0TG9hZGluZykgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZpbHRlckFjY291bnREYXRhID0gKGNvbW1lbnRfc2hhcmVkKSA9PiB7XHJcbiAgICBpZihjb21tZW50X3NoYXJlZC50eXBlID09PSAnQ29tbWVudCcpIHtcclxuICAgICAgaWYoY29tbWVudF9zaGFyZWQuY29tbWVudGVkLnR5cGUgPT0gJ1Bvc3QnKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLmNvbW1lbnRfc2hhcmVkLmNvbW1lbnRlZCxcclxuICAgICAgICAgIGNvbW1lbnRzOiBbey4uLmNvbW1lbnRfc2hhcmVkLCBhY2NvdW50OiBjb21tZW50X3NoYXJlZC5jb21tZW50ZWQuYWNjb3VudH1dXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKGNvbW1lbnRfc2hhcmVkLmNvbW1lbnRlZC50eXBlID09ICdDb21tZW50Jykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5jb21tZW50X3NoYXJlZC5jb21tZW50ZWQuY29tbWVudGVkLFxyXG4gICAgICAgICAgY29tbWVudHM6IFt7Li4uY29tbWVudF9zaGFyZWQuY29tbWVudGVkLCBjb21tZW50czogW2NvbW1lbnRfc2hhcmVkXSwgYWNjb3VudDogY29tbWVudF9zaGFyZWQuY29tbWVudGVkLmNvbW1lbnRlZC5hY2NvdW50fV1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZihjb21tZW50X3NoYXJlZC5jb21tZW50ZWQudHlwZSA9PSAnU2hhcmUnKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLmNvbW1lbnRfc2hhcmVkLmNvbW1lbnRlZC5zaGFyZWQsXHJcbiAgICAgICAgICBjb21tZW50czogW3sgLi4uY29tbWVudF9zaGFyZWQsIGFjY291bnQ6IGNvbW1lbnRfc2hhcmVkLmNvbW1lbnRlZC5zaGFyZWQuYWNjb3VudCB9XVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uY29tbWVudF9zaGFyZWQuY29tbWVudGVkLFxyXG4gICAgICAgICAgY29tbWVudHM6IFt7IC4uLmNvbW1lbnRfc2hhcmVkLCBhY2NvdW50OiBjb21tZW50X3NoYXJlZC5jb21tZW50ZWQuYWNjb3VudCB9XVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmKGNvbW1lbnRfc2hhcmVkLnR5cGUgPT09ICdQb3N0Jykge1xyXG4gICAgICAgIHJldHVybiBjb21tZW50X3NoYXJlZDtcclxuICAgIH0gZWxzZSBpZihjb21tZW50X3NoYXJlZC50eXBlID09PSAnU2hhcmUnKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uY29tbWVudF9zaGFyZWQuc2hhcmVkLFxyXG4gICAgICAgIGNvbW1lbnRzOiBbey4uLmNvbW1lbnRfc2hhcmVkLCBhY2NvdW50OiBjb21tZW50X3NoYXJlZC5zaGFyZWQuYWNjb3VudCB9XVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gY29tbWVudF9zaGFyZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBjcmVhdGVQb3N0ID0gYXN5bmMgKGRhdGFGb3JSZXF1ZXN0KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKHRydWUsICdwb3N0aW5nJykpO1xyXG5cclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsOiAnL3Bvc3RzJyxcclxuICAgICAgICBkYXRhOiBkYXRhRm9yUmVxdWVzdCxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcblxyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICBzZXRQb3N0TW9kYWwoMCk7XHJcbiAgICAgICAgdmFyIGVsZW1lbnQgPSAge1xyXG4gICAgICAgICAgdHlwZTogJ1Bvc3QnLFxyXG4gICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAgIGNvbW1lbnRzOiBbXSxcclxuICAgICAgICAgIGNvbW1lbnRzQ291bnQ6IDAsXHJcbiAgICAgICAgICByYXRpbmc6IG51bGwsXHJcbiAgICAgICAgICByZWFjdGlvbnM6IFtdLFxyXG4gICAgICAgICAgcmVhY3Rpb25zQ291bnQ6IDAsXHJcbiAgICAgICAgICBzaGFyZXM6IFtdLFxyXG4gICAgICAgICAgc2hhcmVzQ291bnQ6IDAsXHJcbiAgICAgICAgICBhY2NvdW50OiBhdXRoLnVzZXJcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHRvdGFsRGF0YSA9IFtcclxuICAgICAgICAgIGVsZW1lbnQsIC4uLnN0b3JhZ2UudGltZWxpbmVEYXRhXHJcbiAgICAgICAgXVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRvdGFsRGF0YSk7XHJcbiAgICAgICAgZGlzcGF0Y2goc2V0VGltZWxpbmVEYXRhKHRvdGFsRGF0YSkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UsICdwb3N0aW5nJykpO1xyXG5cclxuICAgICAgcmV0dXJuIGF3YWl0IHJlcXVlc3Q7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlLCAncG9zdGluZycpKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCByYXRlUG9zdCA9IGFzeW5jICh0eXBlLCBwb3N0SWQsIHJhdGUpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcodHJ1ZSwgJ3Bvc3RpbmcnKSk7XHJcbiAgICAgIGxldCB1cmwgPSAnJztcclxuXHJcbiAgICAgIGlmICh0eXBlID09PSAnUGhvdG8nKSB7XHJcbiAgICAgICAgdXJsID0gJy9waG90b3MvcmF0ZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1ZpZGVvQ2xpcCcpIHtcclxuICAgICAgICB1cmwgPSAnL3ZpZGVvLWNsaXBzL3JhdGUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdJdGVtJykge1xyXG4gICAgICAgIHVybCA9ICcvaXRlbXMvcmF0ZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1Bvc3QnKSB7XHJcbiAgICAgICAgdXJsID0gJy9wb3N0cy9yYXRlJztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnQ29tbWVudCcpIHtcclxuICAgICAgICB1cmwgPSAnL2NvbW1lbnRzL3JhdGUnO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmwsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgcmF0ZWQ6IHBvc3RJZCxcclxuICAgICAgICAgIHJhdGluZzogcmF0ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuXHJcbiAgICAgIGNvbnNvbGUud2FybigncmF0ZVBvc3QnLCBkYXRhLCBzdGF0dXMpO1xyXG5cclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgb25VcGRhdGVUaW1lbGluZSgpO1xyXG4gICAgICAgIG1lc3NhZ2Uuc3VjY2VzcygnRXZhbHVhdGUgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSwgJ3Bvc3RpbmcnKSk7XHJcblxyXG4gICAgICByZXR1cm4gYXdhaXQgcmVxdWVzdDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UsICdwb3N0aW5nJykpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG5cclxuICBjb25zdCBvblVwZGF0ZVRpbWVsaW5lID0gKGRhdGEpID0+IHtcclxuICAgIHN0b3JhZ2UudGltZWxpbmVEYXRhLm1hcChlbGVtZW50ID0+IHtcclxuICAgICAgaWYoZWxlbWVudC5pZCA9PSBkYXRhLmlkKSB7XHJcbiAgICAgICAgbGV0IGFkZEVsZW1lbnQgPSB7XHJcbiAgICAgICAgICBhY2NvdW50OiBhdXRoLnVzZXIsIFxyXG4gICAgICAgICAgLi4uZGF0YS5jb21tZW50c1swXVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbGVtZW50LmNvbW1lbnRzLnB1c2goYWRkRWxlbWVudCk7XHJcbiAgICAgICAgZWxlbWVudC5jb21tZW50c0NvdW50ICs9IGRhdGEuY29tbWVudHNDb3VudDtcclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIGNvbnNvbGUubG9nKHN0b3JhZ2UudGltZWxpbmVEYXRhKTtcclxuICAgIGRpc3BhdGNoKHNldFRpbWVsaW5lRGF0YShzdG9yYWdlLnRpbWVsaW5lRGF0YSkpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbW9kYWxQb3B1cCA9ICgpID0+IHtcclxuICAgIHNldFBvc3RNb2RhbCh0cnVlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGxpa2VBY3Rpb24gPSBhc3luYyAodHlwZSwgaWQsIHRlcm0pID0+IHtcclxuICAgIHZhciB1cmwgPSAnJztcclxuICAgIGlmICh0eXBlID09PSAnUGhvdG8nKSB7XHJcbiAgICAgIHVybCA9ICcvcGhvdG9zL3JlYWN0JztcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1ZpZGVvQ2xpcCcpIHtcclxuICAgICAgdXJsID0gJy92aWRlby1jbGlwcy9yZWFjdCc7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdJdGVtJykge1xyXG4gICAgICB1cmwgPSAnL2l0ZW1zL3JlYWN0JztcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1Bvc3QnKSB7XHJcbiAgICAgIHVybCA9ICcvcG9zdHMvcmVhY3QnO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnQ29tbWVudCcpIHtcclxuICAgICAgdXJsID0gJy9jb21tZW50cy9yZWFjdCc7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdTaGFyZScpIHtcclxuICAgICAgdXJsID0gJy9zaGFyZXMvcmVhY3QnO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHJlYWN0ZWQ6IGlkLFxyXG4gICAgICAgICAgcmVhY3Rpb246IHRlcm1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuXHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgIG1lc3NhZ2Uuc3VjY2VzcygnRXZhbHVhdGUgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuICBjb25zdCBzaGFyZUFjdGlvbiA9IGFzeW5jICh0eXBlLCBpZCkgPT4ge1xyXG5cclxuICAgIHZhciB1cmwgPSAnJztcclxuICAgICAgaWYgKHR5cGUgPT09ICdQaG90bycpIHtcclxuICAgICAgICB1cmwgPSAnL3Bob3Rvcy9zaGFyZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1ZpZGVvQ2xpcCcpIHtcclxuICAgICAgICB1cmwgPSAnL3ZpZGVvLWNsaXBzL3NoYXJlJztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnSXRlbScpIHtcclxuICAgICAgICB1cmwgPSAnL2l0ZW1zL3NoYXJlJztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnUG9zdCcpIHtcclxuICAgICAgICB1cmwgPSAnL3Bvc3RzL3NoYXJlJztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnQ29tbWVudCcpIHtcclxuICAgICAgICB1cmwgPSAnL2NvbW1lbnRzL3NoYXJlJztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnU2hhcmUnKSB7XHJcbiAgICAgICAgdXJsID0gJy9wb3N0cy9zaGFyZSc7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc2hhcmVkOiBpZCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuXHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgIG1lc3NhZ2Uuc3VjY2VzcygnRXZhbHVhdGUgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRUaW1lbGluZShhdXRoLnRva2VuKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHsgdXNlciB9ID0gYXV0aDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAge21vYmlsZV9wcm9maWxlX2hlYWRlcj88ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vYmlsZV9wcm9maWxlX2hlYWRlcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJfaW1hZ2V9PlxyXG4gICAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICAgICAgc2l6ZT17NDB9XHJcbiAgICAgICAgICAgICAgICAgIHVybD17cHJvZmlsZVVybH1cclxuICAgICAgICAgICAgICAgICAgdGV4dD17YWNjb3VudERhdGE/LnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5tb2JpbGVfZnVsbG5hbWV9IHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19IG9uQ2xpY2s9eygpID0+IHNldEVkaXRQcm9maWxlTW9kYWwodHJ1ZSl9PlxyXG4gICAgICAgIDxzcGFuPntgJHthY2NvdW50RGF0YT8uZmlyc3ROYW1lfSAke2FjY291bnREYXRhPy5sYXN0TmFtZX1gfTwvc3Bhbj5cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+Om51bGx9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZWxpbmV9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmVlZF9jb250YWluZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jcmVhdGVQb3N0RGl2fT5cclxuICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgc2l6ZT17NTB9XHJcbiAgICAgICAgICAgICAgICB1cmw9e3VzZXI/LnByb2ZpbGVQaG90bz8uc3JjfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuY3JlYXRlUG9zdElucHV0fSBwbGFjZWhvbGRlcj1cIldoYXQncyBvbiB5b3VyIG1pbmQ/XCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXttb2RhbFBvcHVwfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDwvaW5wdXQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxMb2FkaW5nV3JhcHBlciBsb2FkaW5nPXtzdG9yYWdlLmxvYWRpbmd9PlxyXG4gICAgICAgICAgICA8VGltZWxpbmVQb3N0c1xyXG4gICAgICAgICAgICAgIGRhdGE9e3N0b3JhZ2UudGltZWxpbmVEYXRhfVxyXG4gICAgICAgICAgICAgIG9uVXBkYXRlVGltZWxpbmU9e29uVXBkYXRlVGltZWxpbmV9XHJcbiAgICAgICAgICAgICAgb25SYXRlUG9zdD17cmF0ZVBvc3R9XHJcbiAgICAgICAgICAgICAgbGlrZUFjdGlvbj17bGlrZUFjdGlvbn1cclxuICAgICAgICAgICAgICBzaGFyZUFjdGlvbj17c2hhcmVBY3Rpb259XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0xvYWRpbmdXcmFwcGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPE1vZGFsV3JhcHBlclxyXG4gICAgICAgICAgdGl0bGU9XCJDcmVhdGUgUG9zdFwiXHJcbiAgICAgICAgICBzaG93TW9kYWw9e3Bvc3RNb2RhbH1cclxuICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFBvc3RNb2RhbCgwKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8UG9zdGluZ1Bvc3RcclxuICAgICAgICAgICAgICBsb2FkaW5nPXtzdG9yYWdlLnBvc3RpbmdMb2FkaW5nfVxyXG4gICAgICAgICAgICAgIG9uUG9zdGluZz17Y3JlYXRlUG9zdH1cclxuICAgICAgICAgICAgICBtb2RhbFBvcHVwPXttb2RhbFBvcHVwfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgPC9Nb2RhbFdyYXBwZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZXF1aXJlQXV0aChUaW1lbGluZVBhZ2UpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9