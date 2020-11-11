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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      mobile_profile_header = _useState2[0],
      setMobileProfileHeader = _useState2[1];

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
    window.addEventListener('scroll', _.throttle(function () {
      var currentScrollPos = window.pageYOffset;

      if (currentScrollPos > 100) {
        setMobileProfileHeader(true);
      } else {
        setMobileProfileHeader(false);
      }
    }, 250));
  }, []);
  var user = auth.user;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(components_header_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 7
    }
  }), mobile_profile_header ? __jsx("div", {
    className: _styles_timeline_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.mobile_profile_header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 30
    }
  }, __jsx("div", {
    className: _styles_timeline_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_timeline_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.avatar_image,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 13
    }
  }, __jsx(_components_common_Avatar__WEBPACK_IMPORTED_MODULE_16__["default"], {
    size: 40,
    url: profileUrl,
    text: (_accountData = accountData) === null || _accountData === void 0 ? void 0 : _accountData.username,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
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
      lineNumber: 306,
      columnNumber: 7
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 9
    }
  }, "".concat((_accountData2 = accountData) === null || _accountData2 === void 0 ? void 0 : _accountData2.firstName, " ").concat((_accountData3 = accountData) === null || _accountData3 === void 0 ? void 0 : _accountData3.lastName)))) : null, __jsx("div", {
    className: _styles_timeline_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.timeline,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_timeline_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.feed_container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_timeline_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.createPostDiv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 11
    }
  }, __jsx(_components_common_Avatar__WEBPACK_IMPORTED_MODULE_16__["default"], {
    size: 50,
    url: user === null || user === void 0 ? void 0 : (_user$profilePhoto = user.profilePhoto) === null || _user$profilePhoto === void 0 ? void 0 : _user$profilePhoto.src,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 13
    }
  }), __jsx("input", {
    className: _styles_timeline_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.createPostInput,
    placeholder: "What's on your mind?",
    onClick: modalPopup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 13
    }
  })), __jsx(components_common_LoadingWrapper__WEBPACK_IMPORTED_MODULE_13__["default"], {
    loading: storage.loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
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
      lineNumber: 323,
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
      lineNumber: 333,
      columnNumber: 7
    }
  }, __jsx(components_profile_PostingPost__WEBPACK_IMPORTED_MODULE_7__["default"], {
    loading: storage.postingLoading,
    onPosting: createPost,
    modalPopup: modalPopup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 11
    }
  })));
}

_s(TimelinePage, "af3fwKOdml45YAg23u2UcYEas7s=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9UaW1lbGluZS9UaW1lbGluZVBhZ2UuanMiXSwibmFtZXMiOlsiVGltZWxpbmVQYWdlIiwiYXV0aFNlcnZpY2VzIiwiYXV0aCIsInVzZUNvbnRleHQiLCJUaW1lTGluZUNvbnRleHQiLCJzdG9yYWdlIiwiZGlzcGF0Y2giLCJ1c2VTdGF0ZSIsInBvc3RNb2RhbCIsInNldFBvc3RNb2RhbCIsIm1vYmlsZV9wcm9maWxlX2hlYWRlciIsInNldE1vYmlsZVByb2ZpbGVIZWFkZXIiLCJnZXRUaW1lbGluZSIsInRva2VuIiwid2l0aG91dExvYWRpbmciLCJzZXRMb2FkaW5nIiwiQVBJIiwibWV0aG9kIiwidXJsIiwiaGVhZGVycyIsInJlcXVlc3QiLCJkYXRhIiwic3RhdHVzIiwidG90YWxEYXRhIiwibWFwIiwiZWxlbWVudCIsImZpbHRlckFjY291bnREYXRhIiwiY29uc29sZSIsImxvZyIsInNldFRpbWVsaW5lRGF0YSIsInJlZnJlc2hUb2tlbiIsIm1lc3NhZ2UiLCJlcnJvciIsImNvbW1lbnRfc2hhcmVkIiwidHlwZSIsImNvbW1lbnRlZCIsImNvbW1lbnRzIiwiYWNjb3VudCIsInNoYXJlZCIsImNyZWF0ZVBvc3QiLCJkYXRhRm9yUmVxdWVzdCIsImNvbW1lbnRzQ291bnQiLCJyYXRpbmciLCJyZWFjdGlvbnMiLCJyZWFjdGlvbnNDb3VudCIsInNoYXJlcyIsInNoYXJlc0NvdW50IiwidXNlciIsInRpbWVsaW5lRGF0YSIsInJhdGVQb3N0IiwicG9zdElkIiwicmF0ZSIsInJhdGVkIiwid2FybiIsIm9uVXBkYXRlVGltZWxpbmUiLCJzdWNjZXNzIiwiaWQiLCJhZGRFbGVtZW50IiwicHVzaCIsIm1vZGFsUG9wdXAiLCJsaWtlQWN0aW9uIiwidGVybSIsInJlYWN0ZWQiLCJyZWFjdGlvbiIsIkVycm9yIiwic2hhcmVBY3Rpb24iLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiXyIsInRocm90dGxlIiwiY3VycmVudFNjcm9sbFBvcyIsInBhZ2VZT2Zmc2V0Iiwic3R5bGVzIiwiYXZhdGFyIiwiYXZhdGFyX2ltYWdlIiwicHJvZmlsZVVybCIsImFjY291bnREYXRhIiwidXNlcm5hbWUiLCJtb2JpbGVfZnVsbG5hbWUiLCJjdXJzb3IiLCJzZXRFZGl0UHJvZmlsZU1vZGFsIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJ0aW1lbGluZSIsImZlZWRfY29udGFpbmVyIiwiY3JlYXRlUG9zdERpdiIsInByb2ZpbGVQaG90byIsInNyYyIsImNyZWF0ZVBvc3RJbnB1dCIsImxvYWRpbmciLCJwb3N0aW5nTG9hZGluZyIsInJlcXVpcmVBdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsWUFBVCxPQUE4QztBQUFBOztBQUFBOztBQUFBLE1BQXRCQyxZQUFzQixRQUF0QkEsWUFBc0I7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7O0FBQUEsb0JBQ2hCQyx3REFBVSxDQUFDQyx5RUFBRCxDQURNO0FBQUEsTUFDckNDLE9BRHFDO0FBQUEsTUFDNUJDLFFBRDRCOztBQUFBLGtCQUVWQyxzREFBUSxDQUFDLEtBQUQsQ0FGRTtBQUFBLE1BRXJDQyxTQUZxQztBQUFBLE1BRTFCQyxZQUYwQjs7QUFBQSxtQkFHWUYsc0RBQVEsQ0FBQyxLQUFELENBSHBCO0FBQUEsTUFHckNHLHFCQUhxQztBQUFBLE1BR2RDLHNCQUhjOztBQUs1QyxNQUFNQyxXQUFXO0FBQUEsaU1BQUcsaUJBQU9DLEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFjQyw0QkFBZCwyREFBK0IsS0FBL0I7QUFBQTtBQUdoQixrQkFBSSxDQUFDQSxjQUFMLEVBQXFCUixRQUFRLENB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QSxJQUxKLENBeENGLENBREY7QUFzREQ7O0dBM1VRM0QsWTs7S0FBQUEsWTtBQTZVTSxxRUFBQTRGLHlFQUFXLENBQUM1RixZQUFELENBQTFCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3RpbWVsaW5lLjAyZjI3N2U3ODRhMGY0OGE0MDBjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlcic7XHJcbmltcG9ydCBUaW1lbGluZVBvc3RzIGZyb20gJ2NvbXBvbmVudHMvdGltZWxpbmUvVGltZWxpbmVQb3N0cyc7XHJcbmltcG9ydCBQb3N0aW5nUG9zdCBmcm9tICdjb21wb25lbnRzL3Byb2ZpbGUvUG9zdGluZ1Bvc3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL3RpbWVsaW5lLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IEFQSSBmcm9tICdjb25maWdzL0FQSSc7XHJcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgVGltZUxpbmVDb250ZXh0IH0gZnJvbSAnLi9zdG9yYWdlL1RpbWVsaW5lQ29udGV4dCc7XHJcbmltcG9ydCB7IHNldExvYWRpbmcsIHNldFRpbWVsaW5lRGF0YSB9IGZyb20gJy4vYWN0aW9ucyc7XHJcbmltcG9ydCBMb2FkaW5nV3JhcHBlciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9Mb2FkaW5nV3JhcHBlcic7XHJcbmltcG9ydCByZXF1aXJlQXV0aCBmcm9tICcuLi8uLi9oZWxwZXJzL2hvYy9yZXF1aXJlQXV0aCc7XHJcbmltcG9ydCBNb2RhbFdyYXBwZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb24vTW9kYWxXcmFwcGVyJztcclxuaW1wb3J0IEF2YXRhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9BdmF0YXInO1xyXG5cclxuZnVuY3Rpb24gVGltZWxpbmVQYWdlKHsgYXV0aFNlcnZpY2VzLCBhdXRoIH0pIHtcclxuICBjb25zdCBbc3RvcmFnZSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChUaW1lTGluZUNvbnRleHQpO1xyXG4gIGNvbnN0IFtwb3N0TW9kYWwsIHNldFBvc3RNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW21vYmlsZV9wcm9maWxlX2hlYWRlciwgc2V0TW9iaWxlUHJvZmlsZUhlYWRlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGdldFRpbWVsaW5lID0gYXN5bmMgKHRva2VuLCB3aXRob3V0TG9hZGluZyA9IGZhbHNlKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLndhcm4oYXV0aFNlcnZpY2VzLmF1dGgsIGF1dGhTZXJ2aWNlcy5sb2NhbHN0b3JhZ2UpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKCF3aXRob3V0TG9hZGluZykgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlKSk7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybDogJy9hY2NvdW50cy90aW1lbGluZScsXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IHRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgdmFyIHRvdGFsRGF0YSA9IGRhdGEubWFwKGVsZW1lbnQgPT4geyBcclxuICAgICAgICAgIGVsZW1lbnQgPSBmaWx0ZXJBY2NvdW50RGF0YShlbGVtZW50KTtcclxuICAgICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc29sZS5sb2codG90YWxEYXRhKTtcclxuICAgICAgICBkaXNwYXRjaChzZXRUaW1lbGluZURhdGEodG90YWxEYXRhKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJz09PT09PT09PScpO1xyXG4gICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gNDAzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJz09PT09PT09PT09PT09PT09IFJlZnJlc2ggdG9rZW4gIScpO1xyXG5cclxuICAgICAgICBhdXRoU2VydmljZXMucmVmcmVzaFRva2VuKGdldFRpbWVsaW5lKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIXdpdGhvdXRMb2FkaW5nKSBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIGlmICghd2l0aG91dExvYWRpbmcpIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBmaWx0ZXJBY2NvdW50RGF0YSA9IChjb21tZW50X3NoYXJlZCkgPT4ge1xyXG4gICAgaWYoY29tbWVudF9zaGFyZWQudHlwZSA9PT0gJ0NvbW1lbnQnKSB7XHJcbiAgICAgIGlmKGNvbW1lbnRfc2hhcmVkLmNvbW1lbnRlZC50eXBlID09ICdQb3N0Jykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5jb21tZW50X3NoYXJlZC5jb21tZW50ZWQsXHJcbiAgICAgICAgICBjb21tZW50czogW3suLi5jb21tZW50X3NoYXJlZCwgYWNjb3VudDogY29tbWVudF9zaGFyZWQuY29tbWVudGVkLmFjY291bnR9XVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChjb21tZW50X3NoYXJlZC5jb21tZW50ZWQudHlwZSA9PSAnQ29tbWVudCcpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uY29tbWVudF9zaGFyZWQuY29tbWVudGVkLmNvbW1lbnRlZCxcclxuICAgICAgICAgIGNvbW1lbnRzOiBbey4uLmNvbW1lbnRfc2hhcmVkLmNvbW1lbnRlZCwgY29tbWVudHM6IFtjb21tZW50X3NoYXJlZF0sIGFjY291bnQ6IGNvbW1lbnRfc2hhcmVkLmNvbW1lbnRlZC5jb21tZW50ZWQuYWNjb3VudH1dXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYoY29tbWVudF9zaGFyZWQuY29tbWVudGVkLnR5cGUgPT0gJ1NoYXJlJykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5jb21tZW50X3NoYXJlZC5jb21tZW50ZWQuc2hhcmVkLFxyXG4gICAgICAgICAgY29tbWVudHM6IFt7IC4uLmNvbW1lbnRfc2hhcmVkLCBhY2NvdW50OiBjb21tZW50X3NoYXJlZC5jb21tZW50ZWQuc2hhcmVkLmFjY291bnQgfV1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLmNvbW1lbnRfc2hhcmVkLmNvbW1lbnRlZCxcclxuICAgICAgICAgIGNvbW1lbnRzOiBbeyAuLi5jb21tZW50X3NoYXJlZCwgYWNjb3VudDogY29tbWVudF9zaGFyZWQuY29tbWVudGVkLmFjY291bnQgfV1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZihjb21tZW50X3NoYXJlZC50eXBlID09PSAnUG9zdCcpIHtcclxuICAgICAgICByZXR1cm4gY29tbWVudF9zaGFyZWQ7XHJcbiAgICB9IGVsc2UgaWYoY29tbWVudF9zaGFyZWQudHlwZSA9PT0gJ1NoYXJlJykge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLmNvbW1lbnRfc2hhcmVkLnNoYXJlZCxcclxuICAgICAgICBjb21tZW50czogW3suLi5jb21tZW50X3NoYXJlZCwgYWNjb3VudDogY29tbWVudF9zaGFyZWQuc2hhcmVkLmFjY291bnQgfV1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGNvbW1lbnRfc2hhcmVkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY3JlYXRlUG9zdCA9IGFzeW5jIChkYXRhRm9yUmVxdWVzdCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlLCAncG9zdGluZycpKTtcclxuXHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybDogJy9wb3N0cycsXHJcbiAgICAgICAgZGF0YTogZGF0YUZvclJlcXVlc3QsXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG5cclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgc2V0UG9zdE1vZGFsKDApO1xyXG4gICAgICAgIHZhciBlbGVtZW50ID0gIHtcclxuICAgICAgICAgIHR5cGU6ICdQb3N0JyxcclxuICAgICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgICBjb21tZW50czogW10sXHJcbiAgICAgICAgICBjb21tZW50c0NvdW50OiAwLFxyXG4gICAgICAgICAgcmF0aW5nOiBudWxsLFxyXG4gICAgICAgICAgcmVhY3Rpb25zOiBbXSxcclxuICAgICAgICAgIHJlYWN0aW9uc0NvdW50OiAwLFxyXG4gICAgICAgICAgc2hhcmVzOiBbXSxcclxuICAgICAgICAgIHNoYXJlc0NvdW50OiAwLFxyXG4gICAgICAgICAgYWNjb3VudDogYXV0aC51c2VyXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB0b3RhbERhdGEgPSBbXHJcbiAgICAgICAgICBlbGVtZW50LCAuLi5zdG9yYWdlLnRpbWVsaW5lRGF0YVxyXG4gICAgICAgIF1cclxuICAgICAgICBjb25zb2xlLmxvZyh0b3RhbERhdGEpO1xyXG4gICAgICAgIGRpc3BhdGNoKHNldFRpbWVsaW5lRGF0YSh0b3RhbERhdGEpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlLCAncG9zdGluZycpKTtcclxuXHJcbiAgICAgIHJldHVybiBhd2FpdCByZXF1ZXN0O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSwgJ3Bvc3RpbmcnKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmF0ZVBvc3QgPSBhc3luYyAodHlwZSwgcG9zdElkLCByYXRlKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKHRydWUsICdwb3N0aW5nJykpO1xyXG4gICAgICBsZXQgdXJsID0gJyc7XHJcblxyXG4gICAgICBpZiAodHlwZSA9PT0gJ1Bob3RvJykge1xyXG4gICAgICAgIHVybCA9ICcvcGhvdG9zL3JhdGUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdWaWRlb0NsaXAnKSB7XHJcbiAgICAgICAgdXJsID0gJy92aWRlby1jbGlwcy9yYXRlJztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnSXRlbScpIHtcclxuICAgICAgICB1cmwgPSAnL2l0ZW1zL3JhdGUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdQb3N0Jykge1xyXG4gICAgICAgIHVybCA9ICcvcG9zdHMvcmF0ZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0NvbW1lbnQnKSB7XHJcbiAgICAgICAgdXJsID0gJy9jb21tZW50cy9yYXRlJztcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHJhdGVkOiBwb3N0SWQsXHJcbiAgICAgICAgICByYXRpbmc6IHJhdGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcblxyXG4gICAgICBjb25zb2xlLndhcm4oJ3JhdGVQb3N0JywgZGF0YSwgc3RhdHVzKTtcclxuXHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgIG9uVXBkYXRlVGltZWxpbmUoKTtcclxuICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoJ0V2YWx1YXRlIHN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UsICdwb3N0aW5nJykpO1xyXG5cclxuICAgICAgcmV0dXJuIGF3YWl0IHJlcXVlc3Q7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlLCAncG9zdGluZycpKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuXHJcbiAgY29uc3Qgb25VcGRhdGVUaW1lbGluZSA9IChkYXRhKSA9PiB7XHJcbiAgICBzdG9yYWdlLnRpbWVsaW5lRGF0YS5tYXAoZWxlbWVudCA9PiB7XHJcbiAgICAgIGlmKGVsZW1lbnQuaWQgPT0gZGF0YS5pZCkge1xyXG4gICAgICAgIGxldCBhZGRFbGVtZW50ID0ge1xyXG4gICAgICAgICAgYWNjb3VudDogYXV0aC51c2VyLCBcclxuICAgICAgICAgIC4uLmRhdGEuY29tbWVudHNbMF1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxlbWVudC5jb21tZW50cy5wdXNoKGFkZEVsZW1lbnQpO1xyXG4gICAgICAgIGVsZW1lbnQuY29tbWVudHNDb3VudCArPSBkYXRhLmNvbW1lbnRzQ291bnQ7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICBjb25zb2xlLmxvZyhzdG9yYWdlLnRpbWVsaW5lRGF0YSk7XHJcbiAgICBkaXNwYXRjaChzZXRUaW1lbGluZURhdGEoc3RvcmFnZS50aW1lbGluZURhdGEpKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG1vZGFsUG9wdXAgPSAoKSA9PiB7XHJcbiAgICBzZXRQb3N0TW9kYWwodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBsaWtlQWN0aW9uID0gYXN5bmMgKHR5cGUsIGlkLCB0ZXJtKSA9PiB7XHJcbiAgICB2YXIgdXJsID0gJyc7XHJcbiAgICBpZiAodHlwZSA9PT0gJ1Bob3RvJykge1xyXG4gICAgICB1cmwgPSAnL3Bob3Rvcy9yZWFjdCc7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdWaWRlb0NsaXAnKSB7XHJcbiAgICAgIHVybCA9ICcvdmlkZW8tY2xpcHMvcmVhY3QnO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnSXRlbScpIHtcclxuICAgICAgdXJsID0gJy9pdGVtcy9yZWFjdCc7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdQb3N0Jykge1xyXG4gICAgICB1cmwgPSAnL3Bvc3RzL3JlYWN0JztcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0NvbW1lbnQnKSB7XHJcbiAgICAgIHVybCA9ICcvY29tbWVudHMvcmVhY3QnO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnU2hhcmUnKSB7XHJcbiAgICAgIHVybCA9ICcvc2hhcmVzL3JlYWN0JztcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICByZWFjdGVkOiBpZCxcclxuICAgICAgICAgIHJlYWN0aW9uOiB0ZXJtXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcblxyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoJ0V2YWx1YXRlIHN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiAgY29uc3Qgc2hhcmVBY3Rpb24gPSBhc3luYyAodHlwZSwgaWQpID0+IHtcclxuXHJcbiAgICB2YXIgdXJsID0gJyc7XHJcbiAgICAgIGlmICh0eXBlID09PSAnUGhvdG8nKSB7XHJcbiAgICAgICAgdXJsID0gJy9waG90b3Mvc2hhcmUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdWaWRlb0NsaXAnKSB7XHJcbiAgICAgICAgdXJsID0gJy92aWRlby1jbGlwcy9zaGFyZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0l0ZW0nKSB7XHJcbiAgICAgICAgdXJsID0gJy9pdGVtcy9zaGFyZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1Bvc3QnKSB7XHJcbiAgICAgICAgdXJsID0gJy9wb3N0cy9zaGFyZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0NvbW1lbnQnKSB7XHJcbiAgICAgICAgdXJsID0gJy9jb21tZW50cy9zaGFyZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1NoYXJlJykge1xyXG4gICAgICAgIHVybCA9ICcvcG9zdHMvc2hhcmUnO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHNoYXJlZDogaWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcblxyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoJ0V2YWx1YXRlIHN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0VGltZWxpbmUoYXV0aC50b2tlbik7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgXy50aHJvdHRsZSgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRTY3JvbGxQb3MgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICAgIGlmKGN1cnJlbnRTY3JvbGxQb3MgPiAxMDApIHtcclxuICAgICAgICBzZXRNb2JpbGVQcm9maWxlSGVhZGVyKHRydWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldE1vYmlsZVByb2ZpbGVIZWFkZXIoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9LCAyNTApKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHsgdXNlciB9ID0gYXV0aDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAge21vYmlsZV9wcm9maWxlX2hlYWRlcj88ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vYmlsZV9wcm9maWxlX2hlYWRlcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJfaW1hZ2V9PlxyXG4gICAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICAgICAgc2l6ZT17NDB9XHJcbiAgICAgICAgICAgICAgICAgIHVybD17cHJvZmlsZVVybH1cclxuICAgICAgICAgICAgICAgICAgdGV4dD17YWNjb3VudERhdGE/LnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5tb2JpbGVfZnVsbG5hbWV9IHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19IG9uQ2xpY2s9eygpID0+IHNldEVkaXRQcm9maWxlTW9kYWwodHJ1ZSl9PlxyXG4gICAgICAgIDxzcGFuPntgJHthY2NvdW50RGF0YT8uZmlyc3ROYW1lfSAke2FjY291bnREYXRhPy5sYXN0TmFtZX1gfTwvc3Bhbj5cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+Om51bGx9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZWxpbmV9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmVlZF9jb250YWluZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jcmVhdGVQb3N0RGl2fT5cclxuICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgc2l6ZT17NTB9XHJcbiAgICAgICAgICAgICAgICB1cmw9e3VzZXI/LnByb2ZpbGVQaG90bz8uc3JjfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuY3JlYXRlUG9zdElucHV0fSBwbGFjZWhvbGRlcj1cIldoYXQncyBvbiB5b3VyIG1pbmQ/XCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXttb2RhbFBvcHVwfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDwvaW5wdXQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxMb2FkaW5nV3JhcHBlciBsb2FkaW5nPXtzdG9yYWdlLmxvYWRpbmd9PlxyXG4gICAgICAgICAgICA8VGltZWxpbmVQb3N0c1xyXG4gICAgICAgICAgICAgIGRhdGE9e3N0b3JhZ2UudGltZWxpbmVEYXRhfVxyXG4gICAgICAgICAgICAgIG9uVXBkYXRlVGltZWxpbmU9e29uVXBkYXRlVGltZWxpbmV9XHJcbiAgICAgICAgICAgICAgb25SYXRlUG9zdD17cmF0ZVBvc3R9XHJcbiAgICAgICAgICAgICAgbGlrZUFjdGlvbj17bGlrZUFjdGlvbn1cclxuICAgICAgICAgICAgICBzaGFyZUFjdGlvbj17c2hhcmVBY3Rpb259XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0xvYWRpbmdXcmFwcGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPE1vZGFsV3JhcHBlclxyXG4gICAgICAgICAgdGl0bGU9XCJDcmVhdGUgUG9zdFwiXHJcbiAgICAgICAgICBzaG93TW9kYWw9e3Bvc3RNb2RhbH1cclxuICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFBvc3RNb2RhbCgwKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8UG9zdGluZ1Bvc3RcclxuICAgICAgICAgICAgICBsb2FkaW5nPXtzdG9yYWdlLnBvc3RpbmdMb2FkaW5nfVxyXG4gICAgICAgICAgICAgIG9uUG9zdGluZz17Y3JlYXRlUG9zdH1cclxuICAgICAgICAgICAgICBtb2RhbFBvcHVwPXttb2RhbFBvcHVwfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgPC9Nb2RhbFdyYXBwZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZXF1aXJlQXV0aChUaW1lbGluZVBhZ2UpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9