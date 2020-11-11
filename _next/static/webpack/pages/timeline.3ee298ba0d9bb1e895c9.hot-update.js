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

  var _user$profilePhoto, _user$profilePhoto2;

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
    url: user === null || user === void 0 ? void 0 : (_user$profilePhoto = user.profilePhoto) === null || _user$profilePhoto === void 0 ? void 0 : _user$profilePhoto.src,
    text: user === null || user === void 0 ? void 0 : user.username,
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
  }, "".concat(user === null || user === void 0 ? void 0 : user.firstName, " ").concat(user === null || user === void 0 ? void 0 : user.lastName)))) : null, __jsx("div", {
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
    url: user === null || user === void 0 ? void 0 : (_user$profilePhoto2 = user.profilePhoto) === null || _user$profilePhoto2 === void 0 ? void 0 : _user$profilePhoto2.src,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9UaW1lbGluZS9UaW1lbGluZVBhZ2UuanMiXSwibmFtZXMiOlsiVGltZWxpbmVQYWdlIiwiYXV0aFNlcnZpY2VzIiwiYXV0aCIsInVzZUNvbnRleHQiLCJUaW1lTGluZUNvbnRleHQiLCJzdG9yYWdlIiwiZGlzcGF0Y2giLCJ1c2VTdGF0ZSIsInBvc3RNb2RhbCIsInNldFBvc3RNb2RhbCIsIm1vYmlsZV9wcm9maWxlX2hlYWRlciIsInNldE1vYmlsZVByb2ZpbGVIZWFkZXIiLCJnZXRUaW1lbGluZSIsInRva2VuIiwid2l0aG91dExvYWRpbmciLCJzZXRMb2FkaW5nIiwiQVBJIiwibWV0aG9kIiwidXJsIiwiaGVhZGVycyIsInJlcXVlc3QiLCJkYXRhIiwic3RhdHVzIiwidG90YWxEYXRhIiwibWFwIiwiZWxlbWVudCIsImZpbHRlckFjY291bnREYXRhIiwiY29uc29sZSIsImxvZyIsInNldFRpbWVsaW5lRGF0YSIsInJlZnJlc2hUb2tlbiIsIm1lc3NhZ2UiLCJlcnJvciIsImNvbW1lbnRfc2hhcmVkIiwidHlwZSIsImNvbW1lbnRlZCIsImNvbW1lbnRzIiwiYWNjb3VudCIsInNoYXJlZCIsImNyZWF0ZVBvc3QiLCJkYXRhRm9yUmVxdWVzdCIsImNvbW1lbnRzQ291bnQiLCJyYXRpbmciLCJyZWFjdGlvbnMiLCJyZWFjdGlvbnNDb3VudCIsInNoYXJlcyIsInNoYXJlc0NvdW50IiwidXNlciIsInRpbWVsaW5lRGF0YSIsInJhdGVQb3N0IiwicG9zdElkIiwicmF0ZSIsInJhdGVkIiwid2FybiIsIm9uVXBkYXRlVGltZWxpbmUiLCJzdWNjZXNzIiwiaWQiLCJhZGRFbGVtZW50IiwicHVzaCIsIm1vZGFsUG9wdXAiLCJsaWtlQWN0aW9uIiwidGVybSIsInJlYWN0ZWQiLCJyZWFjdGlvbiIsIkVycm9yIiwic2hhcmVBY3Rpb24iLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiXyIsInRocm90dGxlIiwiY3VycmVudFNjcm9sbFBvcyIsInBhZ2VZT2Zmc2V0Iiwic3R5bGVzIiwiYXZhdGFyIiwiYXZhdGFyX2ltYWdlIiwicHJvZmlsZVBob3RvIiwic3JjIiwidXNlcm5hbWUiLCJtb2JpbGVfZnVsbG5hbWUiLCJjdXJzb3IiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInRpbWVsaW5lIiwiZmVlZF9jb250YWluZXIiLCJjcmVhdGVQb3N0RGl2IiwiY3JlYXRlUG9zdElucHV0IiwibG9hZGluZyIsInBvc3RpbmdMb2FkaW5nIiwicmVxdWlyZUF1dGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxZQUFULE9BQThDO0FBQUE7O0FBQUE7O0FBQUEsTUFBdEJDLFlBQXNCLFFBQXRCQSxZQUFzQjtBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTs7QUFBQSxvQkFDaEJDLHdEQUFVLENBQUNDLHlFQUFELENBRE07QUFBQSxNQUNyQ0MsT0FEcUM7QUFBQSxNQUM1QkMsUUFENEI7O0FBQUEsa0JBRVZDLHNEQUFRLENBQUMsS0FBRCxDQUZFO0FBQUEsTUFFckNDLFNBRnFDO0FBQUEsTUFFMUJDLFlBRjBCOztBQUFBLG1CQUdZRixzREFBUSxDQUFDLEtBQUQsQ0FIcEI7QUFBQSxNQUdyQ0cscUJBSHFDO0FBQUEsTUFHZEMsc0JBSGM7O0FBSzVDLE1BQU1DLFdBQVc7QUFBQSxpTUFBRyxpQkFBT0MsS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWNDLDRCQUFkLDJEQUErQixLQUEvQjtBQUFBO0FBR2hCLGtCQUFJLENBQUNBLGNBQUwsRUFBcUJSLFFBQVEsQ0FBQ1MsNERBQVUsQ0FBQyxJQUFELENBQVgsQ0FBUjtBQUhMO0FBQUEscUJBSU1DLDJE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QUEsSUFMSixDQXhDRixDQURGO0FBc0REOztHQTNVUTNELFk7O0tBQUFBLFk7QUE2VU0scUVBQUF5Rix5RUFBVyxDQUFDekYsWUFBRCxDQUExQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90aW1lbGluZS4zZWUyOThiYTBkOWJiMWU4OTVjOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWRlciBmcm9tICdjb21wb25lbnRzL2hlYWRlci9IZWFkZXInO1xyXG5pbXBvcnQgVGltZWxpbmVQb3N0cyBmcm9tICdjb21wb25lbnRzL3RpbWVsaW5lL1RpbWVsaW5lUG9zdHMnO1xyXG5pbXBvcnQgUG9zdGluZ1Bvc3QgZnJvbSAnY29tcG9uZW50cy9wcm9maWxlL1Bvc3RpbmdQb3N0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy90aW1lbGluZS5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBBUEkgZnJvbSAnY29uZmlncy9BUEknO1xyXG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IFRpbWVMaW5lQ29udGV4dCB9IGZyb20gJy4vc3RvcmFnZS9UaW1lbGluZUNvbnRleHQnO1xyXG5pbXBvcnQgeyBzZXRMb2FkaW5nLCBzZXRUaW1lbGluZURhdGEgfSBmcm9tICcuL2FjdGlvbnMnO1xyXG5pbXBvcnQgTG9hZGluZ1dyYXBwZXIgZnJvbSAnY29tcG9uZW50cy9jb21tb24vTG9hZGluZ1dyYXBwZXInO1xyXG5pbXBvcnQgcmVxdWlyZUF1dGggZnJvbSAnLi4vLi4vaGVscGVycy9ob2MvcmVxdWlyZUF1dGgnO1xyXG5pbXBvcnQgTW9kYWxXcmFwcGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9uL01vZGFsV3JhcHBlcic7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb24vQXZhdGFyJztcclxuXHJcbmZ1bmN0aW9uIFRpbWVsaW5lUGFnZSh7IGF1dGhTZXJ2aWNlcywgYXV0aCB9KSB7XHJcbiAgY29uc3QgW3N0b3JhZ2UsIGRpc3BhdGNoXSA9IHVzZUNvbnRleHQoVGltZUxpbmVDb250ZXh0KTtcclxuICBjb25zdCBbcG9zdE1vZGFsLCBzZXRQb3N0TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFttb2JpbGVfcHJvZmlsZV9oZWFkZXIsIHNldE1vYmlsZVByb2ZpbGVIZWFkZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBnZXRUaW1lbGluZSA9IGFzeW5jICh0b2tlbiwgd2l0aG91dExvYWRpbmcgPSBmYWxzZSkgPT4ge1xyXG4gICAgLy8gY29uc29sZS53YXJuKGF1dGhTZXJ2aWNlcy5hdXRoLCBhdXRoU2VydmljZXMubG9jYWxzdG9yYWdlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICghd2l0aG91dExvYWRpbmcpIGRpc3BhdGNoKHNldExvYWRpbmcodHJ1ZSkpO1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6ICcvYWNjb3VudHMvdGltZWxpbmUnLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiB0b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIHZhciB0b3RhbERhdGEgPSBkYXRhLm1hcChlbGVtZW50ID0+IHsgXHJcbiAgICAgICAgICBlbGVtZW50ID0gZmlsdGVyQWNjb3VudERhdGEoZWxlbWVudCk7XHJcbiAgICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRvdGFsRGF0YSk7XHJcbiAgICAgICAgZGlzcGF0Y2goc2V0VGltZWxpbmVEYXRhKHRvdGFsRGF0YSkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCc9PT09PT09PT0nKTtcclxuICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IDQwMykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCc9PT09PT09PT09PT09PT09PSBSZWZyZXNoIHRva2VuICEnKTtcclxuXHJcbiAgICAgICAgYXV0aFNlcnZpY2VzLnJlZnJlc2hUb2tlbihnZXRUaW1lbGluZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCF3aXRob3V0TG9hZGluZykgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICBpZiAoIXdpdGhvdXRMb2FkaW5nKSBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmlsdGVyQWNjb3VudERhdGEgPSAoY29tbWVudF9zaGFyZWQpID0+IHtcclxuICAgIGlmKGNvbW1lbnRfc2hhcmVkLnR5cGUgPT09ICdDb21tZW50Jykge1xyXG4gICAgICBpZihjb21tZW50X3NoYXJlZC5jb21tZW50ZWQudHlwZSA9PSAnUG9zdCcpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uY29tbWVudF9zaGFyZWQuY29tbWVudGVkLFxyXG4gICAgICAgICAgY29tbWVudHM6IFt7Li4uY29tbWVudF9zaGFyZWQsIGFjY291bnQ6IGNvbW1lbnRfc2hhcmVkLmNvbW1lbnRlZC5hY2NvdW50fV1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoY29tbWVudF9zaGFyZWQuY29tbWVudGVkLnR5cGUgPT0gJ0NvbW1lbnQnKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLmNvbW1lbnRfc2hhcmVkLmNvbW1lbnRlZC5jb21tZW50ZWQsXHJcbiAgICAgICAgICBjb21tZW50czogW3suLi5jb21tZW50X3NoYXJlZC5jb21tZW50ZWQsIGNvbW1lbnRzOiBbY29tbWVudF9zaGFyZWRdLCBhY2NvdW50OiBjb21tZW50X3NoYXJlZC5jb21tZW50ZWQuY29tbWVudGVkLmFjY291bnR9XVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmKGNvbW1lbnRfc2hhcmVkLmNvbW1lbnRlZC50eXBlID09ICdTaGFyZScpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uY29tbWVudF9zaGFyZWQuY29tbWVudGVkLnNoYXJlZCxcclxuICAgICAgICAgIGNvbW1lbnRzOiBbeyAuLi5jb21tZW50X3NoYXJlZCwgYWNjb3VudDogY29tbWVudF9zaGFyZWQuY29tbWVudGVkLnNoYXJlZC5hY2NvdW50IH1dXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5jb21tZW50X3NoYXJlZC5jb21tZW50ZWQsXHJcbiAgICAgICAgICBjb21tZW50czogW3sgLi4uY29tbWVudF9zaGFyZWQsIGFjY291bnQ6IGNvbW1lbnRfc2hhcmVkLmNvbW1lbnRlZC5hY2NvdW50IH1dXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYoY29tbWVudF9zaGFyZWQudHlwZSA9PT0gJ1Bvc3QnKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbW1lbnRfc2hhcmVkO1xyXG4gICAgfSBlbHNlIGlmKGNvbW1lbnRfc2hhcmVkLnR5cGUgPT09ICdTaGFyZScpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5jb21tZW50X3NoYXJlZC5zaGFyZWQsXHJcbiAgICAgICAgY29tbWVudHM6IFt7Li4uY29tbWVudF9zaGFyZWQsIGFjY291bnQ6IGNvbW1lbnRfc2hhcmVkLnNoYXJlZC5hY2NvdW50IH1dXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBjb21tZW50X3NoYXJlZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGNyZWF0ZVBvc3QgPSBhc3luYyAoZGF0YUZvclJlcXVlc3QpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcodHJ1ZSwgJ3Bvc3RpbmcnKSk7XHJcblxyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6ICcvcG9zdHMnLFxyXG4gICAgICAgIGRhdGE6IGRhdGFGb3JSZXF1ZXN0LFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuXHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgIHNldFBvc3RNb2RhbCgwKTtcclxuICAgICAgICB2YXIgZWxlbWVudCA9ICB7XHJcbiAgICAgICAgICB0eXBlOiAnUG9zdCcsXHJcbiAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgY29tbWVudHM6IFtdLFxyXG4gICAgICAgICAgY29tbWVudHNDb3VudDogMCxcclxuICAgICAgICAgIHJhdGluZzogbnVsbCxcclxuICAgICAgICAgIHJlYWN0aW9uczogW10sXHJcbiAgICAgICAgICByZWFjdGlvbnNDb3VudDogMCxcclxuICAgICAgICAgIHNoYXJlczogW10sXHJcbiAgICAgICAgICBzaGFyZXNDb3VudDogMCxcclxuICAgICAgICAgIGFjY291bnQ6IGF1dGgudXNlclxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdG90YWxEYXRhID0gW1xyXG4gICAgICAgICAgZWxlbWVudCwgLi4uc3RvcmFnZS50aW1lbGluZURhdGFcclxuICAgICAgICBdXHJcbiAgICAgICAgY29uc29sZS5sb2codG90YWxEYXRhKTtcclxuICAgICAgICBkaXNwYXRjaChzZXRUaW1lbGluZURhdGEodG90YWxEYXRhKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSwgJ3Bvc3RpbmcnKSk7XHJcblxyXG4gICAgICByZXR1cm4gYXdhaXQgcmVxdWVzdDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UsICdwb3N0aW5nJykpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJhdGVQb3N0ID0gYXN5bmMgKHR5cGUsIHBvc3RJZCwgcmF0ZSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlLCAncG9zdGluZycpKTtcclxuICAgICAgbGV0IHVybCA9ICcnO1xyXG5cclxuICAgICAgaWYgKHR5cGUgPT09ICdQaG90bycpIHtcclxuICAgICAgICB1cmwgPSAnL3Bob3Rvcy9yYXRlJztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnVmlkZW9DbGlwJykge1xyXG4gICAgICAgIHVybCA9ICcvdmlkZW8tY2xpcHMvcmF0ZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0l0ZW0nKSB7XHJcbiAgICAgICAgdXJsID0gJy9pdGVtcy9yYXRlJztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnUG9zdCcpIHtcclxuICAgICAgICB1cmwgPSAnL3Bvc3RzL3JhdGUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdDb21tZW50Jykge1xyXG4gICAgICAgIHVybCA9ICcvY29tbWVudHMvcmF0ZSc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICByYXRlZDogcG9zdElkLFxyXG4gICAgICAgICAgcmF0aW5nOiByYXRlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG5cclxuICAgICAgY29uc29sZS53YXJuKCdyYXRlUG9zdCcsIGRhdGEsIHN0YXR1cyk7XHJcblxyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICBvblVwZGF0ZVRpbWVsaW5lKCk7XHJcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKCdFdmFsdWF0ZSBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlLCAncG9zdGluZycpKTtcclxuXHJcbiAgICAgIHJldHVybiBhd2FpdCByZXF1ZXN0O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSwgJ3Bvc3RpbmcnKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcblxyXG4gIGNvbnN0IG9uVXBkYXRlVGltZWxpbmUgPSAoZGF0YSkgPT4ge1xyXG4gICAgc3RvcmFnZS50aW1lbGluZURhdGEubWFwKGVsZW1lbnQgPT4ge1xyXG4gICAgICBpZihlbGVtZW50LmlkID09IGRhdGEuaWQpIHtcclxuICAgICAgICBsZXQgYWRkRWxlbWVudCA9IHtcclxuICAgICAgICAgIGFjY291bnQ6IGF1dGgudXNlciwgXHJcbiAgICAgICAgICAuLi5kYXRhLmNvbW1lbnRzWzBdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsZW1lbnQuY29tbWVudHMucHVzaChhZGRFbGVtZW50KTtcclxuICAgICAgICBlbGVtZW50LmNvbW1lbnRzQ291bnQgKz0gZGF0YS5jb21tZW50c0NvdW50O1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgY29uc29sZS5sb2coc3RvcmFnZS50aW1lbGluZURhdGEpO1xyXG4gICAgZGlzcGF0Y2goc2V0VGltZWxpbmVEYXRhKHN0b3JhZ2UudGltZWxpbmVEYXRhKSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBtb2RhbFBvcHVwID0gKCkgPT4ge1xyXG4gICAgc2V0UG9zdE1vZGFsKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbGlrZUFjdGlvbiA9IGFzeW5jICh0eXBlLCBpZCwgdGVybSkgPT4ge1xyXG4gICAgdmFyIHVybCA9ICcnO1xyXG4gICAgaWYgKHR5cGUgPT09ICdQaG90bycpIHtcclxuICAgICAgdXJsID0gJy9waG90b3MvcmVhY3QnO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnVmlkZW9DbGlwJykge1xyXG4gICAgICB1cmwgPSAnL3ZpZGVvLWNsaXBzL3JlYWN0JztcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0l0ZW0nKSB7XHJcbiAgICAgIHVybCA9ICcvaXRlbXMvcmVhY3QnO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnUG9zdCcpIHtcclxuICAgICAgdXJsID0gJy9wb3N0cy9yZWFjdCc7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdDb21tZW50Jykge1xyXG4gICAgICB1cmwgPSAnL2NvbW1lbnRzL3JlYWN0JztcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1NoYXJlJykge1xyXG4gICAgICB1cmwgPSAnL3NoYXJlcy9yZWFjdCc7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgcmVhY3RlZDogaWQsXHJcbiAgICAgICAgICByZWFjdGlvbjogdGVybVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG5cclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKCdFdmFsdWF0ZSBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4gIGNvbnN0IHNoYXJlQWN0aW9uID0gYXN5bmMgKHR5cGUsIGlkKSA9PiB7XHJcblxyXG4gICAgdmFyIHVybCA9ICcnO1xyXG4gICAgICBpZiAodHlwZSA9PT0gJ1Bob3RvJykge1xyXG4gICAgICAgIHVybCA9ICcvcGhvdG9zL3NoYXJlJztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnVmlkZW9DbGlwJykge1xyXG4gICAgICAgIHVybCA9ICcvdmlkZW8tY2xpcHMvc2hhcmUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdJdGVtJykge1xyXG4gICAgICAgIHVybCA9ICcvaXRlbXMvc2hhcmUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdQb3N0Jykge1xyXG4gICAgICAgIHVybCA9ICcvcG9zdHMvc2hhcmUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdDb21tZW50Jykge1xyXG4gICAgICAgIHVybCA9ICcvY29tbWVudHMvc2hhcmUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdTaGFyZScpIHtcclxuICAgICAgICB1cmwgPSAnL3Bvc3RzL3NoYXJlJztcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzaGFyZWQ6IGlkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG5cclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKCdFdmFsdWF0ZSBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldFRpbWVsaW5lKGF1dGgudG9rZW4pO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIF8udGhyb3R0bGUoKCkgPT4ge1xyXG4gICAgICBjb25zdCBjdXJyZW50U2Nyb2xsUG9zID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgICBpZihjdXJyZW50U2Nyb2xsUG9zID4gMTAwKSB7XHJcbiAgICAgICAgc2V0TW9iaWxlUHJvZmlsZUhlYWRlcih0cnVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRNb2JpbGVQcm9maWxlSGVhZGVyKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfSwgMjUwKSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCB7IHVzZXIgfSA9IGF1dGg7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIHttb2JpbGVfcHJvZmlsZV9oZWFkZXI/PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2JpbGVfcHJvZmlsZV9oZWFkZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyX2ltYWdlfT5cclxuICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgIHNpemU9ezQwfVxyXG4gICAgICAgICAgICAgICAgICB1cmw9e3VzZXI/LnByb2ZpbGVQaG90bz8uc3JjfVxyXG4gICAgICAgICAgICAgICAgICB0ZXh0PXt1c2VyPy51c2VybmFtZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMubW9iaWxlX2Z1bGxuYW1lfSBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fT5cclxuICAgICAgICA8c3Bhbj57YCR7dXNlcj8uZmlyc3ROYW1lfSAke3VzZXI/Lmxhc3ROYW1lfWB9PC9zcGFuPlxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj46bnVsbH1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lbGluZX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mZWVkX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNyZWF0ZVBvc3REaXZ9PlxyXG4gICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICBzaXplPXs1MH1cclxuICAgICAgICAgICAgICAgIHVybD17dXNlcj8ucHJvZmlsZVBob3RvPy5zcmN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5jcmVhdGVQb3N0SW5wdXR9IHBsYWNlaG9sZGVyPVwiV2hhdCdzIG9uIHlvdXIgbWluZD9cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e21vZGFsUG9wdXB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPC9pbnB1dD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPExvYWRpbmdXcmFwcGVyIGxvYWRpbmc9e3N0b3JhZ2UubG9hZGluZ30+XHJcbiAgICAgICAgICAgIDxUaW1lbGluZVBvc3RzXHJcbiAgICAgICAgICAgICAgZGF0YT17c3RvcmFnZS50aW1lbGluZURhdGF9XHJcbiAgICAgICAgICAgICAgb25VcGRhdGVUaW1lbGluZT17b25VcGRhdGVUaW1lbGluZX1cclxuICAgICAgICAgICAgICBvblJhdGVQb3N0PXtyYXRlUG9zdH1cclxuICAgICAgICAgICAgICBsaWtlQWN0aW9uPXtsaWtlQWN0aW9ufVxyXG4gICAgICAgICAgICAgIHNoYXJlQWN0aW9uPXtzaGFyZUFjdGlvbn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvTG9hZGluZ1dyYXBwZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TW9kYWxXcmFwcGVyXHJcbiAgICAgICAgICB0aXRsZT1cIkNyZWF0ZSBQb3N0XCJcclxuICAgICAgICAgIHNob3dNb2RhbD17cG9zdE1vZGFsfVxyXG4gICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0UG9zdE1vZGFsKDApfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxQb3N0aW5nUG9zdFxyXG4gICAgICAgICAgICAgIGxvYWRpbmc9e3N0b3JhZ2UucG9zdGluZ0xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgb25Qb3N0aW5nPXtjcmVhdGVQb3N0fVxyXG4gICAgICAgICAgICAgIG1vZGFsUG9wdXA9e21vZGFsUG9wdXB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICA8L01vZGFsV3JhcHBlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlcXVpcmVBdXRoKFRpbWVsaW5lUGFnZSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=