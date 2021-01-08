webpackHotUpdate_N_E("pages/timeline",{

/***/ "./components/timeline/TimelinePosts.js":
/*!**********************************************!*\
  !*** ./components/timeline/TimelinePosts.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/timeline-post.module.scss */ "./components/timeline/styles/timeline-post.module.scss");
/* harmony import */ var _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Comments__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Comments */ "./components/timeline/Comments.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Actions */ "./components/timeline/Actions.js");
/* harmony import */ var _common_TrimText__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/TrimText */ "./components/common/TrimText.js");
/* harmony import */ var react_modal_hook__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-modal-hook */ "./node_modules/react-modal-hook/dist/index.es.js");
/* harmony import */ var _CommentsModal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./CommentsModal */ "./components/timeline/CommentsModal.js");
/* harmony import */ var _profile_PhotosModal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../profile/PhotosModal */ "./components/profile/PhotosModal.js");
/* harmony import */ var containers_Photos_storage_PhotoContext__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! containers/Photos/storage/PhotoContext */ "./containers/Photos/storage/PhotoContext.js");
/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../common/Avatar */ "./components/common/Avatar.js");
/* harmony import */ var redux_modal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! redux-modal */ "./node_modules/redux-modal/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var configs_API__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! configs/API */ "./configs/API.js");
/* harmony import */ var video_react__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! video-react */ "./node_modules/video-react/lib/index.js");
/* harmony import */ var video_react__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(video_react__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var components_common_LinkPreview__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! components/common/LinkPreview */ "./components/common/LinkPreview.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/build/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var components_common_VideoPlayer__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! components/common/VideoPlayer */ "./components/common/VideoPlayer.js");
/* harmony import */ var containers_Photos_actions__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! containers/Photos/actions */ "./containers/Photos/actions/index.js");






var _jsxFileName = "D:\\Freeskies-development-\\components\\timeline\\TimelinePosts.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




























function TimelinePosts(_ref) {
  _s();

  var _this = this;

  var data = _ref.data,
      onUpdateTimeline = _ref.onUpdateTimeline,
      onRatePost = _ref.onRatePost,
      modalActions = _ref.modalActions,
      _shareAction = _ref.shareAction,
      _likeAction = _ref.likeAction,
      deleteAction = _ref.deleteAction,
      disableDelete = _ref.disableDelete,
      _ref$parentDiv = _ref.parentDiv,
      parentDiv = _ref$parentDiv === void 0 ? null : _ref$parentDiv,
      auth = _ref.auth,
      kjm = _ref.kjm,
      dispatch = _ref.dispatch;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      processingVideos = _useState[0],
      setProcessingVideos = _useState[1];

  var imagesList = [].concat.apply([], data.map(function (item) {
    if (item.type === 'Photo') {
      return item;
    } else if (item.type === 'VideoClip') {
      return [];
    } else {
      return item.images;
    }
  }));
  var videoList = [].concat.apply([], data.map(function (item) {
    if (item.type === 'VideoClip') {
      return item;
    } else {
      return typeof item.videos !== 'undefined' ? item.videos : [];
    }
  }));

  var getComments = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {
      var url, request, _data, status;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(!activeType || !activePostId)) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              url = '';

              if (activeType === 'Photo') {
                url = '/photos/get-comments';
              } else if (activeType === 'VideoClip') {
                url = '/video-clips/get-comments';
              } else if (activeType === 'Item') {
                url = '/items/get-comments';
              } else if (activeType === 'Post') {
                url = '/posts/get-comments';
              } else if (activeType === 'Comment') {
                url = '/comments/get-comments';
              } else if (activeType === 'Share') {
                url = '/shares/get-comments';
              } else if (activeType === 'MarketplaceItemForSale') {
                url = '/marketplace/items-for-sale/get-comments';
              } else if (activeType === 'MarketplaceItemToBuy') {
                url = '/marketplace/items-to-buy/get-comments';
              }

              _context.prev = 4;
              _context.next = 7;
              return Object(configs_API__WEBPACK_IMPORTED_MODULE_22__["default"])({
                method: 'post',
                url: url,
                data: {
                  id: activePostId,
                  offset: 0,
                  first: 25
                },
                headers: {
                  'x-token': auth.token
                }
              });

            case 7:
              request = _context.sent;
              _data = request.data, status = request.status;

              if (status == 200) {
                setCommnets(_data);
              }

              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](4);
              console.log(_context.t0);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4, 12]]);
    }));

    return function getComments() {
      return _ref2.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    videoList.map(function (videoItem) {
      if (videoItem.processing) {
        setProcessingVideos([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(processingVideos), [videoItem.id]));
        dispatch({
          type: 'APP_NOTIFICATION',
          payload: true
        });
        dispatch({
          type: 'NOTIFICATION_DATA',
          payload: videoItem.id
        });
      }
    });
  }, data);

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null),
      activePostId = _useState2[0],
      setActivePostId = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null),
      activeType = _useState3[0],
      setActiveType = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      modalMode = _useState4[0],
      setModalMode = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      comments = _useState5[0],
      setCommnets = _useState5[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(containers_Photos_storage_PhotoContext__WEBPACK_IMPORTED_MODULE_17__["PhotosContext"]),
      storage = _useContext[0],
      photoDispatch = _useContext[1];

  photoDispatch(Object(containers_Photos_actions__WEBPACK_IMPORTED_MODULE_27__["setLoading"])(true));
  var videoRef = [];

  var _useModal = Object(react_modal_hook__WEBPACK_IMPORTED_MODULE_14__["useModal"])(function (_ref3) {
    var open = _ref3["in"];
    return __jsx(containers_Photos_storage_PhotoContext__WEBPACK_IMPORTED_MODULE_17__["PhotosProvider"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 5
      }
    }, __jsx(_profile_PhotosModal__WEBPACK_IMPORTED_MODULE_16__["default"], {
      title: "Photo detail",
      showModal: open,
      onClose: hidePhotoModal,
      onRatePost: onRatePost,
      data: imagesList,
      likeAction: _likeAction,
      shareAction: _shareAction,
      onUpdateTimeline: onUpdateTimeline,
      auth: auth,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 7
      }
    }));
  }),
      _useModal2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useModal, 2),
      showPhotoModal = _useModal2[0],
      hidePhotoModal = _useModal2[1];

  var handleShowCommentModal = function handleShowCommentModal(id, type) {
    setActivePostId(id);
    setActiveType(type);
    setModalMode(!modalMode);
    modalActions.show('commentModal', {
      id: activePostId
    });
  };

  var toggleCommentShow = function toggleCommentShow(index) {
    return setCommentShow(commentShow === index ? null : index);
  };

  var getLikeActionUserInfo = function getLikeActionUserInfo(data) {
    var finalData = '';
    data.map(function (item, index) {
      finalData = finalData + ' ' + item.account.firstName + '' + item.account.lastName;
    });
    return finalData;
  };

  var onUpdateComments = /*#__PURE__*/function () {
    var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2(data) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setCommnets([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(comments), [_objectSpread(_objectSpread({}, data === null || data === void 0 ? void 0 : data.comments[0]), {}, {
                account: auth.user
              })]));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function onUpdateComments(_x) {
      return _ref4.apply(this, arguments);
    };
  }();

  return __jsx("div", {
    className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.activity_content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 5
    }
  }, data.map(function (item, index) {
    var _account$profilePhoto, _auth$user, _classnames;

    var account = item.account,
        createdAt = item.createdAt,
        type = item.type,
        comments = item.comments,
        commentsCount = item.commentsCount,
        text = item.text,
        images = item.images,
        videos = item.videos,
        shared = item.shared,
        commented = item.commented,
        blob_tn = item.blob_tn,
        thumbnail = item.thumbnail,
        reactions = item.reactions,
        text_links = item.text_links;
    videoRef.push(null);
    var profileUrl = account !== null && account !== undefined ? "".concat((_account$profilePhoto = account.profilePhoto) === null || _account$profilePhoto === void 0 ? void 0 : _account$profilePhoto.src) : null;
    var fullName = "".concat(account === null || account === void 0 ? void 0 : account.firstName, " ").concat(account === null || account === void 0 ? void 0 : account.lastName);
    var username = account === null || account === void 0 ? void 0 : account.username;
    var likeData = reactions ? reactions === null || reactions === void 0 ? void 0 : reactions.filter(function (item) {
      return item.reaction == 'LIKE';
    }) : [];
    var heartData = reactions ? reactions === null || reactions === void 0 ? void 0 : reactions.filter(function (item) {
      return item.reaction == 'HEART';
    }) : [];
    var wowData = reactions ? reactions === null || reactions === void 0 ? void 0 : reactions.filter(function (item) {
      return item.reaction == 'WOW';
    }) : [];
    var hahaData = reactions ? reactions === null || reactions === void 0 ? void 0 : reactions.filter(function (item) {
      return item.reaction == 'HAHA';
    }) : [];
    var sadData = reactions ? reactions === null || reactions === void 0 ? void 0 : reactions.filter(function (item) {
      return item.reaction == 'SAD';
    }) : [];
    return __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.post,
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 11
      }
    }, !disableDelete && (account === null || account === void 0 ? void 0 : account.username) == (auth === null || auth === void 0 ? void 0 : (_auth$user = auth.user) === null || _auth$user === void 0 ? void 0 : _auth$user.username) ? __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
      icon: ['far', 'window-close'],
      style: {
        "float": 'right',
        fontSize: 25,
        marginRight: 10,
        cursor: 'pointer'
      },
      onClick: function onClick() {
        return deleteAction(item.id, type);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 76
      }
    }) : null, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.post_header,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.avatar,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 15
      }
    }, __jsx(_common_Avatar__WEBPACK_IMPORTED_MODULE_18__["default"], {
      text: fullName,
      url: profileUrl,
      size: 60,
      borderSize: 3,
      username: username,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.user_info,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 15
      }
    }, __jsx("p", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.user_name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 17
      }
    }, fullName))), __jsx("p", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.date,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 13
      }
    }, moment__WEBPACK_IMPORTED_MODULE_11___default()(createdAt).format('MMM DD, YYYY - HH:mm A')), __jsx("p", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.description,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 13
      }
    }, __jsx(_common_TrimText__WEBPACK_IMPORTED_MODULE_13__["default"], {
      limit: 110,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 15
      }
    }, type !== 'Share' ? text : shared.text)), text_links && text_links.map(function (item, i) {
      return __jsx(components_common_LinkPreview__WEBPACK_IMPORTED_MODULE_24__["LinkPreview"], {
        data: item,
        key: item.id + ' ' + i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 15
        }
      });
    }), videos && videos.length > 0 && videos.map(function (video, i) {
      var videoJsOptions = {
        autoplay: false,
        width: '100%',
        muted: true,
        controls: true,
        poster: "https://www.freeskies.com/static/".concat(video.thumbnail.src),
        sources: [{
          src: "https://www.freeskies.com/static/".concat(video.src),
          type: "application/x-mpegURL",
          withCredentials: true,
          html5: {
            hls: {
              overrideNative: true
            }
          }
        }]
      };
      return __jsx("div", {
        className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.videos,
        key: i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 17
        }
      }, !video.processing ? __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(video_react__WEBPACK_IMPORTED_MODULE_23__["Player"], {
        playsInline: true,
        autoplay: true,
        muted: true,
        poster: "https://www.freeskies.com/static/".concat(video.thumbnail.src),
        ref: function ref(player) {
          if (videoRef !== null) {
            videoRef[index] = player;
          }
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239,
          columnNumber: 19
        }
      }, __jsx("source", {
        src: "https://www.freeskies.com/static/".concat(video.src),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 21
        }
      })), __jsx("button", {
        onClick: function onClick() {
          return videoRef[index].play();
        },
        ref: function ref(el) {
          if (!el) return;
          window.addEventListener('scroll', function () {
            if (videoRef && videoRef[index] !== null) {
              var positionY = el.getBoundingClientRect().y;

              if (positionY > window.innerHeight / 2 && positionY < window.innerHeight) {
                videoRef[index].play();
              } else {
                videoRef[index].pause();
              }
            }
          });

          if (parentDiv !== null && (parentDiv === null || parentDiv === void 0 ? void 0 : parentDiv.current) !== null) {
            var _parentDiv$current;

            parentDiv === null || parentDiv === void 0 ? void 0 : (_parentDiv$current = parentDiv.current) === null || _parentDiv$current === void 0 ? void 0 : _parentDiv$current.addEventListener('scroll', function () {
              if (videoRef && videoRef[index] !== null) {
                var positionY = el.getBoundingClientRect().y;

                if (positionY > window.innerHeight / 2 && positionY < window.innerHeight) {
                  videoRef[index].play();
                } else {
                  videoRef[index].pause();
                }
              }
            });
          }
        },
        style: {
          visibility: 'hidden'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252,
          columnNumber: 19
        }
      }, "Button For position of Video")) : __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279,
          columnNumber: 23
        }
      }, __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 21
        }
      }, "Your posting video is on processing..."), __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Progress"], {
        strokeColor: {
          '0%': '#108ee9',
          '100%': '#87d068'
        },
        percent: 99,
        format: function format(percent) {
          return "";
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281,
          columnNumber: 21
        }
      })));
    }), images && images.length > 0 ? __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.post_content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 297,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image, (_classnames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.grid_2, images.length == 2), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.grid_3, images.length == 3), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.grid_4, images.length == 4), _classnames)),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 17
      }
    }, images.length == 1 && __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image_item,
      onClick: function onClick() {
        photoDispatch(Object(containers_Photos_actions__WEBPACK_IMPORTED_MODULE_27__["setActiveImageId"])(images[0].src));
        setTimeout(function () {
          showPhotoModal();
        }, 1000);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 306,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].blob_tn ? images[0].blob_tn : images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 23
      }
    })), images.length == 2 && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image_item, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.main_photo),
      onClick: function onClick() {
        photoDispatch(Object(containers_Photos_actions__WEBPACK_IMPORTED_MODULE_27__["setActiveImageId"])(images[0].src));
        showPhotoModal();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].blob_tn ? images[0].blob_tn : images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 331,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image_item,
      onClick: function onClick() {
        photoDispatch(Object(containers_Photos_actions__WEBPACK_IMPORTED_MODULE_27__["setActiveImageId"])(images[1].src));
        showPhotoModal();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 333,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[1].blob_tn ? images[1].blob_tn : images[1].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 341,
        columnNumber: 25
      }
    }))), images.length == 3 && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image_item, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.main_photo),
      onClick: function onClick() {
        photoDispatch(Object(containers_Photos_actions__WEBPACK_IMPORTED_MODULE_27__["setActiveImageId"])(images[0].src));
        showPhotoModal();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 348,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].blob_tn ? images[0].blob_tn : images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 357,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image_item,
      onClick: function onClick() {
        photoDispatch(Object(containers_Photos_actions__WEBPACK_IMPORTED_MODULE_27__["setActiveImageId"])(images[1].src));
        showPhotoModal();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 359,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[1].blob_tn ? images[1].blob_tn : images[1].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 367,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image_item,
      onClick: function onClick() {
        photoDispatch(Object(containers_Photos_actions__WEBPACK_IMPORTED_MODULE_27__["setActiveImageId"])(images[2].src));
        showPhotoModal();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 369,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[2].blob_tn ? images[2].blob_tn : images[2].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 377,
        columnNumber: 25
      }
    }))), images.length >= 4 && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image_item, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.main_photo),
      onClick: function onClick() {
        photoDispatch(Object(containers_Photos_actions__WEBPACK_IMPORTED_MODULE_27__["setActiveImageId"])(images[0].src));
        showPhotoModal();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 384,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].blob_tn ? images[0].blob_tn : images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 393,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image_item,
      onClick: function onClick() {
        photoDispatch(Object(containers_Photos_actions__WEBPACK_IMPORTED_MODULE_27__["setActiveImageId"])(images[1].src));
        showPhotoModal();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 395,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[1].blob_tn ? images[1].blob_tn : images[1].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 403,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image_item,
      onClick: function onClick() {
        photoDispatch(Object(containers_Photos_actions__WEBPACK_IMPORTED_MODULE_27__["setActiveImageId"])(images[1].src));
        showPhotoModal();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 405,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[2].blob_tn ? images[2].blob_tn : images[2].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 413,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image_item,
      onClick: function onClick() {
        photoDispatch(Object(containers_Photos_actions__WEBPACK_IMPORTED_MODULE_27__["setActiveImageId"])(images[2].src));
        showPhotoModal();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 415,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.show_more,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 423,
        columnNumber: 25
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 424,
        columnNumber: 27
      }
    }, "+4")), __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[3].blob_tn ? images[3].blob_tn : images[3].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 426,
        columnNumber: 25
      }
    }))))) : __jsx("div", {
      style: {
        height: 50
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 433,
        columnNumber: 15
      }
    }), type == "Photo" ? blob_tn && __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.post_content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 436,
        columnNumber: 42
      }
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 437,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image_item,
      onClick: function onClick() {
        photoDispatch(Object(containers_Photos_actions__WEBPACK_IMPORTED_MODULE_27__["setActiveImageId"])(blob_tn));
        showPhotoModal();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 440,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(blob_tn),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 448,
        columnNumber: 19
      }
    })))) : blob_tn && __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.videos,
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 452,
        columnNumber: 24
      }
    }, __jsx(video_react__WEBPACK_IMPORTED_MODULE_23__["Player"], {
      playsInline: true,
      autoplay: true,
      muted: true,
      poster: "https://www.freeskies.com/static/".concat(thumbnail.src),
      src: "https://www.freeskies.com/static/".concat(blob_tn),
      ref: function ref(player) {// videoRef = player;
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 453,
        columnNumber: 15
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.reactions_shares_status,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 466,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.reactions_status,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 467,
        columnNumber: 15
      }
    }, likeData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(likeData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 469,
        columnNumber: 19
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
      icon: ['far', 'thumbs-up'],
      size: "1x",
      style: {
        cursor: 'pointer'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 470,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 471,
        columnNumber: 21
      }
    }, likeData.length))), hahaData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(hahaData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 475,
        columnNumber: 19
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
      icon: ['far', 'grin'],
      size: "1x",
      style: {
        cursor: 'pointer'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 476,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 477,
        columnNumber: 21
      }
    }, hahaData.length))), heartData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(heartData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 482,
        columnNumber: 19
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
      icon: ['far', 'heart'],
      size: "1x",
      style: {
        cursor: 'pointer'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 483,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 484,
        columnNumber: 21
      }
    }, heartData.length))), wowData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(wowData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 489,
        columnNumber: 19
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
      icon: ['far', 'laugh'],
      size: "1x",
      style: {
        cursor: 'pointer'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 490,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 491,
        columnNumber: 21
      }
    }, wowData.length))), sadData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(sadData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 496,
        columnNumber: 19
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
      icon: ['far', 'frown'],
      size: "1x",
      style: {
        cursor: 'pointer'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 497,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 498,
        columnNumber: 21
      }
    }, sadData.length))))), __jsx(_Actions__WEBPACK_IMPORTED_MODULE_12__["default"], {
      id: item.id,
      type: item.type,
      postRate: item.rating,
      comments: comments,
      onRatePost: onRatePost,
      commentsCount: commentsCount,
      index: index,
      likeAction: function likeAction(term) {
        return _likeAction(type, item.id, term);
      },
      shareAction: function shareAction() {
        return _shareAction(type !== 'Share' ? type : shared.type, type !== 'Share' ? item.id : shared.id);
      },
      actions: function actions() {
        handleShowCommentModal(item.id, item.type);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 504,
        columnNumber: 13
      }
    }), __jsx(_Comments__WEBPACK_IMPORTED_MODULE_10__["default"], {
      id: item.id,
      type: item.type,
      data: comments,
      onUpdateTimeline: onUpdateTimeline,
      activePostId: activePostId,
      modalMode: modalMode,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 518,
        columnNumber: 13
      }
    }));
  }), __jsx(_CommentsModal__WEBPACK_IMPORTED_MODULE_15__["default"], {
    activePostId: activePostId,
    type: activeType,
    postData: comments,
    onUpdateTimeline: onUpdateComments,
    title: "Comments",
    show: modalMode,
    onClose: function onClose() {
      console.log('close modal');
    },
    getComments: getComments,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 531,
      columnNumber: 7
    }
  }));
}

_s(TimelinePosts, "KmiKp/39G/JAxbH0Y44MemhOI/A=", false, function () {
  return [react_modal_hook__WEBPACK_IMPORTED_MODULE_14__["useModal"]];
});

_c = TimelinePosts;

var mapStateToProps = function mapStateToProps(store) {
  return {
    kjm: store
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    modalActions: Object(redux__WEBPACK_IMPORTED_MODULE_20__["bindActionCreators"])({
      show: redux_modal__WEBPACK_IMPORTED_MODULE_19__["show"]
    }, dispatch),
    dispatch: dispatch
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_21__["connect"])(mapStateToProps, mapDispatchToProps)(TimelinePosts));

var _c;

$RefreshReg$(_c, "TimelinePosts");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aW1lbGluZS9UaW1lbGluZVBvc3RzLmpzIl0sIm5hbWVzIjpbIlRpbWVsaW5lUG9zdHMiLCJkYXRhIiwib25VcGRhdGVUaW1lbGluZSIsIm9uUmF0ZVBvc3QiLCJtb2RhbEFjdGlvbnMiLCJzaGFyZUFjdGlvbiIsImxpa2VBY3Rpb24iLCJkZWxldGVBY3Rpb24iLCJkaXNhYmxlRGVsZXRlIiwicGFyZW50RGl2IiwiYXV0aCIsImtqbSIsImRpc3BhdGNoIiwidXNlU3RhdGUiLCJwcm9jZXNzaW5nVmlkZW9zIiwic2V0UHJvY2Vzc2luZ1ZpZGVvcyIsImltYWdlc0xpc3QiLCJjb25jYXQiLCJhcHBseSIsIm1hcCIsIml0ZW0iLCJ0eXBlIiwiaW1hZ2VzIiwidmlkZW9MaXN0IiwidmlkZW9zIiwiZ2V0Q29tbWVudHMiLCJhY3RpdmVUeXBlIiwiYWN0aXZlUG9zdElkIiwidXJsIiwiQVBJIiwibWV0aG9kIiwiaWQiLCJvZmZzZXQiLCJmaXJzdCIsImhlYWRlcnMiLCJ0b2tlbiIsInJlcXVlc3QiLCJzdGF0dXMiLCJzZXRDb21tbmV0cyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJ2aWRlb0l0ZW0iLCJwcm9jZXNzaW5nIiwicGF5bG9hZCIsInNldEFjdGl2ZVBvc3RJZCIsInNldEFjdGl2ZVR5cGUiLCJtb2RhbE1vZGUiLCJzZXRNb2RhbE1vZGUiLCJjb21tZW50cyIsInVzZUNvbnRleHQiLCJQaG90b3NDb250ZXh0Iiwic3RvcmFnZSIsInBob3RvRGlzcGF0Y2giLCJzZXRMb2FkaW5nIiwidmlkZW9SZWYiLCJ1c2VNb2RhbCIsIm9wZW4iLCJoaWRlUGhvdG9Nb2RhbCIsInNob3dQaG90b01vZGFsIiwiaGFuZGxlU2hvd0NvbW1lbnRNb2RhbCIsInNob3ciLCJ0b2dnbGVDb21tZW50U2hvdyIsImluZGV4Iiwic2V0Q29tbWVudFNob3ciLCJjb21tZW50U2hvdyIsImdldExpa2VBY3Rpb25Vc2VySW5mbyIsImZpbmFsRGF0YSIsImFjY291bnQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsIm9uVXBkYXRlQ29tbWVudHMiLCJ1c2VyIiwic3R5bGVzIiwiYWN0aXZpdHlfY29udGVudCIsImNyZWF0ZWRBdCIsImNvbW1lbnRzQ291bnQiLCJ0ZXh0Iiwic2hhcmVkIiwiY29tbWVudGVkIiwiYmxvYl90biIsInRodW1ibmFpbCIsInJlYWN0aW9ucyIsInRleHRfbGlua3MiLCJwdXNoIiwicHJvZmlsZVVybCIsInVuZGVmaW5lZCIsInByb2ZpbGVQaG90byIsInNyYyIsImZ1bGxOYW1lIiwidXNlcm5hbWUiLCJsaWtlRGF0YSIsImZpbHRlciIsInJlYWN0aW9uIiwiaGVhcnREYXRhIiwid293RGF0YSIsImhhaGFEYXRhIiwic2FkRGF0YSIsInBvc3QiLCJmb250U2l6ZSIsIm1hcmdpblJpZ2h0IiwiY3Vyc29yIiwicG9zdF9oZWFkZXIiLCJhdmF0YXIiLCJ1c2VyX2luZm8iLCJ1c2VyX25hbWUiLCJkYXRlIiwibW9tZW50IiwiZm9ybWF0IiwiZGVzY3JpcHRpb24iLCJpIiwibGVuZ3RoIiwidmlkZW8iLCJ2aWRlb0pzT3B0aW9ucyIsImF1dG9wbGF5Iiwid2lkdGgiLCJtdXRlZCIsImNvbnRyb2xzIiwicG9zdGVyIiwic291cmNlcyIsIndpdGhDcmVkZW50aWFscyIsImh0bWw1IiwiaGxzIiwib3ZlcnJpZGVOYXRpdmUiLCJwbGF5ZXIiLCJwbGF5IiwiZWwiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicG9zaXRpb25ZIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwieSIsImlubmVySGVpZ2h0IiwicGF1c2UiLCJjdXJyZW50IiwidmlzaWJpbGl0eSIsInBlcmNlbnQiLCJwb3N0X2NvbnRlbnQiLCJjbGFzc25hbWVzIiwiaW1hZ2UiLCJncmlkXzIiLCJncmlkXzMiLCJncmlkXzQiLCJpbWFnZV9pdGVtIiwic2V0QWN0aXZlSW1hZ2VJZCIsInNldFRpbWVvdXQiLCJtYWluX3Bob3RvIiwic2hvd19tb3JlIiwiaGVpZ2h0IiwicmVhY3Rpb25zX3NoYXJlc19zdGF0dXMiLCJyZWFjdGlvbnNfc3RhdHVzIiwicmF0aW5nIiwidGVybSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0b3JlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiYmluZEFjdGlvbkNyZWF0b3JzIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNBLGFBQVQsT0FhRztBQUFBOztBQUFBOztBQUFBLE1BWkRDLElBWUMsUUFaREEsSUFZQztBQUFBLE1BWERDLGdCQVdDLFFBWERBLGdCQVdDO0FBQUEsTUFWREMsVUFVQyxRQVZEQSxVQVVDO0FBQUEsTUFUREMsWUFTQyxRQVREQSxZQVNDO0FBQUEsTUFSREMsWUFRQyxRQVJEQSxXQVFDO0FBQUEsTUFQREMsV0FPQyxRQVBEQSxVQU9DO0FBQUEsTUFOREMsWUFNQyxRQU5EQSxZQU1DO0FBQUEsTUFMREMsYUFLQyxRQUxEQSxhQUtDO0FBQUEsNEJBSkRDLFNBSUM7QUFBQSxNQUpEQSxTQUlDLCtCQUpXLElBSVg7QUFBQSxNQUhEQyxJQUdDLFFBSERBLElBR0M7QUFBQSxNQUZEQyxHQUVDLFFBRkRBLEdBRUM7QUFBQSxNQUREQyxRQUNDLFFBRERBLFFBQ0M7O0FBQUEsa0JBQytDQyxzREFBUSxDQUFDLEVBQUQsQ0FEdkQ7QUFBQSxNQUNNQyxnQkFETjtBQUFBLE1BQ3dCQyxtQkFEeEI7O0FBRUQsTUFBTUMsVUFBVSxHQUFHLEdBQUdDLE1BQUgsQ0FBVUMsS0FBVixDQUFnQixFQUFoQixFQUFvQmpCLElBQUksQ0FBQ2tCLEdBQUwsQ0FBUyxVQUFBQyxJQUFJ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QUFFcEIsWUFEaEI7QUFFRSxRQUFJLEVBQUVELFVBRlI7QUFHRSxZQUFRLEVBQUV1QixRQUhaO0FBSUUsb0JBQWdCLEVBQUVzQixnQkFKcEI7QUFLRSxTQUFLLEVBQUMsVUFMUjtBQU1FLFFBQUksRUFBRXhCLFNBTlI7QUFPRSxXQUFPLEVBQUUsbUJBQU07QUFBQ1IsYUFBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUEyQixLQVA3QztBQVFFLGVBQVcsRUFBRWYsV0FSZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBalhGLENBREY7QUErWEQ7O0dBcmdCUXpCLGE7VUFnR2tDd0QsMEQ7OztLQWhHbEN4RCxhOztBQXVnQlQsSUFBTXlKLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDbEMvSSxPQUFHLEVBQUUrSTtBQUQ2QixHQUFaO0FBQUEsQ0FBeEI7O0FBSUEsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDL0ksUUFBRDtBQUFBLFNBQWU7QUFDeENSLGdCQUFZLEVBQUV3SixpRUFBa0IsQ0FBQztBQUFFL0YsVUFBSSxFQUFKQSxpREFBSUE7QUFBTixLQUFELEVBQVdqRCxRQUFYLENBRFE7QUFFeENBLFlBQVEsRUFBRUE7QUFGOEIsR0FBZjtBQUFBLENBQTNCOztBQUtlaUosMkhBQU8sQ0FBQ0osZUFBRCxFQUFrQkUsa0JBQWxCLENBQVAsQ0FBNkMzSixhQUE3QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3RpbWVsaW5lLjRiMTUwNGViNjkyZTcyMjQ1MTIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL3RpbWVsaW5lLXBvc3QubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyBQb3BvdmVyLCBUb29sdGlwIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgQ29tbWVudHMgZnJvbSAnLi9Db21tZW50cyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgQWN0aW9ucyBmcm9tICcuL0FjdGlvbnMnO1xyXG5pbXBvcnQgVHJpbVRleHQgZnJvbSAnLi4vY29tbW9uL1RyaW1UZXh0JztcclxuaW1wb3J0IHsgdXNlTW9kYWwgfSBmcm9tICdyZWFjdC1tb2RhbC1ob29rJztcclxuaW1wb3J0IENvbW1lbnRzTW9kYWwgZnJvbSAnLi9Db21tZW50c01vZGFsJztcclxuaW1wb3J0IFBob3Rvc01vZGFsIGZyb20gJy4uL3Byb2ZpbGUvUGhvdG9zTW9kYWwnO1xyXG5pbXBvcnQgeyBQaG90b3NDb250ZXh0IH0gZnJvbSAnY29udGFpbmVycy9QaG90b3Mvc3RvcmFnZS9QaG90b0NvbnRleHQnO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJy4uL2NvbW1vbi9BdmF0YXInO1xyXG5pbXBvcnQgeyBzaG93IH0gZnJvbSAncmVkdXgtbW9kYWwnO1xyXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBBUEkgZnJvbSAnY29uZmlncy9BUEknO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICd2aWRlby1yZWFjdCc7XHJcbmltcG9ydCB7IFBob3Rvc1Byb3ZpZGVyIH0gIGZyb20gJ2NvbnRhaW5lcnMvUGhvdG9zL3N0b3JhZ2UvUGhvdG9Db250ZXh0JztcclxuaW1wb3J0IHsgTGlua1ByZXZpZXcgfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9MaW5rUHJldmlldyc7XHJcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcclxuaW1wb3J0IFZpZGVvUGxheWVyIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL1ZpZGVvUGxheWVyJztcclxuaW1wb3J0IHsgUHJvZ3Jlc3MgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgQnV0dG9uLCBVcGxvYWQsIG1lc3NhZ2UsIElucHV0LCBUYWJzLCBSYXRlLCBub3RpZmljYXRpb24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgc2V0QWN0aXZlSW1hZ2VJZCwgc2V0TG9hZGluZyB9IGZyb20gJ2NvbnRhaW5lcnMvUGhvdG9zL2FjdGlvbnMnO1xyXG5mdW5jdGlvbiBUaW1lbGluZVBvc3RzKHsgXHJcbiAgZGF0YSwgXHJcbiAgb25VcGRhdGVUaW1lbGluZSwgXHJcbiAgb25SYXRlUG9zdCwgXHJcbiAgbW9kYWxBY3Rpb25zLCBcclxuICBzaGFyZUFjdGlvbiwgXHJcbiAgbGlrZUFjdGlvbiwgXHJcbiAgZGVsZXRlQWN0aW9uLCBcclxuICBkaXNhYmxlRGVsZXRlLCBcclxuICBwYXJlbnREaXYgPSBudWxsLCBcclxuICBhdXRoLFxyXG4gIGtqbSxcclxuICBkaXNwYXRjaFxyXG59KSB7XHJcbiAgY29uc3QgW3Byb2Nlc3NpbmdWaWRlb3MsIHNldFByb2Nlc3NpbmdWaWRlb3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IGltYWdlc0xpc3QgPSBbXS5jb25jYXQuYXBwbHkoW10sIGRhdGEubWFwKGl0ZW0gPT4geyBcclxuICAgICAgaWYoaXRlbS50eXBlID09PSAnUGhvdG8nKSB7XHJcbiAgICAgICAgcmV0dXJuICBpdGVtO1xyXG4gICAgICB9IGVsc2UgaWYoaXRlbS50eXBlID09PSAnVmlkZW9DbGlwJykge1xyXG4gICAgICAgIHJldHVybiAgW107XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuICBpdGVtLmltYWdlcyBcclxuICAgICAgfSBcclxuICAgIH1cclxuICApKVxyXG5cclxuICBjb25zdCB2aWRlb0xpc3QgPSBbXS5jb25jYXQuYXBwbHkoW10sIGRhdGEubWFwKGl0ZW0gPT4ge1xyXG4gICAgaWYoaXRlbS50eXBlID09PSAnVmlkZW9DbGlwJykge1xyXG4gICAgICByZXR1cm4gaXRlbTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0eXBlb2YgaXRlbS52aWRlb3MgIT09ICd1bmRlZmluZWQnP2l0ZW0udmlkZW9zOltdO1xyXG4gICAgfVxyXG4gIH0pKVxyXG4gIFxyXG5cclxuICBjb25zdCBnZXRDb21tZW50cyA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmKCFhY3RpdmVUeXBlIHx8ICFhY3RpdmVQb3N0SWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIHVybCA9ICcnO1xyXG4gICAgICBpZiAoYWN0aXZlVHlwZSA9PT0gJ1Bob3RvJykge1xyXG4gICAgICAgIHVybCA9ICcvcGhvdG9zL2dldC1jb21tZW50cyc7XHJcbiAgICAgIH0gZWxzZSBpZiAoYWN0aXZlVHlwZSA9PT0gJ1ZpZGVvQ2xpcCcpIHtcclxuICAgICAgICB1cmwgPSAnL3ZpZGVvLWNsaXBzL2dldC1jb21tZW50cyc7XHJcbiAgICAgIH0gZWxzZSBpZiAoYWN0aXZlVHlwZSA9PT0gJ0l0ZW0nKSB7XHJcbiAgICAgICAgdXJsID0gJy9pdGVtcy9nZXQtY29tbWVudHMnO1xyXG4gICAgICB9IGVsc2UgaWYgKGFjdGl2ZVR5cGUgPT09ICdQb3N0Jykge1xyXG4gICAgICAgIHVybCA9ICcvcG9zdHMvZ2V0LWNvbW1lbnRzJztcclxuICAgICAgfSBlbHNlIGlmIChhY3RpdmVUeXBlID09PSAnQ29tbWVudCcpIHtcclxuICAgICAgICB1cmwgPSAnL2NvbW1lbnRzL2dldC1jb21tZW50cyc7XHJcbiAgICAgIH0gZWxzZSBpZiAoYWN0aXZlVHlwZSA9PT0gJ1NoYXJlJykge1xyXG4gICAgICAgIHVybCA9ICcvc2hhcmVzL2dldC1jb21tZW50cyc7XHJcbiAgICAgIH0gZWxzZSBpZiAoYWN0aXZlVHlwZSA9PT0gJ01hcmtldHBsYWNlSXRlbUZvclNhbGUnKSB7XHJcbiAgICAgICAgdXJsID0gJy9tYXJrZXRwbGFjZS9pdGVtcy1mb3Itc2FsZS9nZXQtY29tbWVudHMnO1xyXG4gICAgICB9IGVsc2UgaWYgKGFjdGl2ZVR5cGUgPT09ICdNYXJrZXRwbGFjZUl0ZW1Ub0J1eScpIHtcclxuICAgICAgICB1cmwgPSAnL21hcmtldHBsYWNlL2l0ZW1zLXRvLWJ1eS9nZXQtY29tbWVudHMnO1xyXG4gICAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgIEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBpZDogYWN0aXZlUG9zdElkLFxyXG4gICAgICAgICAgICBvZmZzZXQ6IDAsXHJcbiAgICAgICAgICAgIGZpcnN0OiAyNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG4gICAgICBpZihzdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgc2V0Q29tbW5ldHMoZGF0YSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB2aWRlb0xpc3QubWFwKHZpZGVvSXRlbSA9PiB7XHJcbiAgICAgIGlmKHZpZGVvSXRlbS5wcm9jZXNzaW5nKSB7XHJcbiAgICAgICAgc2V0UHJvY2Vzc2luZ1ZpZGVvcyhbLi4ucHJvY2Vzc2luZ1ZpZGVvcywgdmlkZW9JdGVtLmlkXSlcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdBUFBfTk9USUZJQ0FUSU9OJywgcGF5bG9hZDogdHJ1ZSB9KTtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRklDQVRJT05fREFUQScsIHBheWxvYWQ6IHZpZGVvSXRlbS5pZCB9KTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LCBkYXRhKVxyXG4gXHJcbiAgY29uc3QgW2FjdGl2ZVBvc3RJZCwgc2V0QWN0aXZlUG9zdElkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFthY3RpdmVUeXBlLCBzZXRBY3RpdmVUeXBlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFttb2RhbE1vZGUsIHNldE1vZGFsTW9kZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2NvbW1lbnRzLCBzZXRDb21tbmV0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3N0b3JhZ2UsIHBob3RvRGlzcGF0Y2hdID0gdXNlQ29udGV4dChQaG90b3NDb250ZXh0KTtcclxuICBwaG90b0Rpc3BhdGNoKHNldExvYWRpbmcodHJ1ZSkpXHJcbiAgbGV0IHZpZGVvUmVmID0gW107XHJcbiAgXHJcbiAgY29uc3QgW3Nob3dQaG90b01vZGFsLCBoaWRlUGhvdG9Nb2RhbF0gPSB1c2VNb2RhbCgoeyBpbjogb3BlbiB9KSA9PiAoXHJcbiAgICA8UGhvdG9zUHJvdmlkZXI+XHJcbiAgICAgIDxQaG90b3NNb2RhbFxyXG4gICAgICAgIHRpdGxlPVwiUGhvdG8gZGV0YWlsXCJcclxuICAgICAgICBzaG93TW9kYWw9e29wZW59XHJcbiAgICAgICAgb25DbG9zZT17aGlkZVBob3RvTW9kYWx9XHJcbiAgICAgICAgb25SYXRlUG9zdD17b25SYXRlUG9zdH1cclxuICAgICAgICBkYXRhPXtpbWFnZXNMaXN0fVxyXG4gICAgICAgIGxpa2VBY3Rpb249e2xpa2VBY3Rpb259XHJcbiAgICAgICAgc2hhcmVBY3Rpb249e3NoYXJlQWN0aW9ufVxyXG4gICAgICAgIG9uVXBkYXRlVGltZWxpbmU9e29uVXBkYXRlVGltZWxpbmV9XHJcbiAgICAgICAgYXV0aD17YXV0aH1cclxuICAgICAgLz5cclxuICAgIDwvUGhvdG9zUHJvdmlkZXI+XHJcbiAgKSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNob3dDb21tZW50TW9kYWwgPSAoaWQsIHR5cGUpID0+IHtcclxuICAgIHNldEFjdGl2ZVBvc3RJZChpZCk7XHJcbiAgICBzZXRBY3RpdmVUeXBlKHR5cGUpO1xyXG4gICAgc2V0TW9kYWxNb2RlKCFtb2RhbE1vZGUpO1xyXG4gICAgbW9kYWxBY3Rpb25zLnNob3coJ2NvbW1lbnRNb2RhbCcsIHsgaWQ6IGFjdGl2ZVBvc3RJZCB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVDb21tZW50U2hvdyA9IChpbmRleCkgPT5cclxuICAgIHNldENvbW1lbnRTaG93KGNvbW1lbnRTaG93ID09PSBpbmRleCA/IG51bGwgOiBpbmRleCk7XHJcblxyXG4gIGNvbnN0IGdldExpa2VBY3Rpb25Vc2VySW5mbyA9IChkYXRhKSA9PiB7XHJcbiAgICB2YXIgZmluYWxEYXRhID0gJyc7XHJcbiAgICBkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgZmluYWxEYXRhID0gZmluYWxEYXRhICsgJyAnICsgaXRlbS5hY2NvdW50LmZpcnN0TmFtZSArICcnICsgaXRlbS5hY2NvdW50Lmxhc3ROYW1lIDtcclxuICAgIH0pXHJcbiAgICByZXR1cm4gZmluYWxEYXRhO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25VcGRhdGVDb21tZW50cyA9IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICBzZXRDb21tbmV0cyhbLi4uY29tbWVudHMsIHsuLi5kYXRhPy5jb21tZW50c1swXSwgYWNjb3VudDogYXV0aC51c2VyfV0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aXZpdHlfY29udGVudH0gPlxyXG4gICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgdmFyIHsgYWNjb3VudCwgY3JlYXRlZEF0LCB0eXBlLCBjb21tZW50cywgY29tbWVudHNDb3VudCwgdGV4dCwgaW1hZ2VzLCB2aWRlb3MsIHNoYXJlZCwgY29tbWVudGVkLCBibG9iX3RuLCB0aHVtYm5haWwsIHJlYWN0aW9ucywgdGV4dF9saW5rcyB9ID0gaXRlbTtcclxuICAgICAgICB2aWRlb1JlZi5wdXNoKG51bGwpO1xyXG4gICAgICAgIGNvbnN0IHByb2ZpbGVVcmwgPSBhY2NvdW50ICE9PSBudWxsICYmIGFjY291bnQgIT09IHVuZGVmaW5lZCA/IGAke2FjY291bnQucHJvZmlsZVBob3RvPy5zcmN9YCA6IG51bGxcclxuICAgICAgICBjb25zdCBmdWxsTmFtZSA9IGAke2FjY291bnQ/LmZpcnN0TmFtZX0gJHthY2NvdW50Py5sYXN0TmFtZX1gO1xyXG4gICAgICAgIGNvbnN0IHVzZXJuYW1lID0gYWNjb3VudD8udXNlcm5hbWU7XHJcbiAgICAgICAgY29uc3QgbGlrZURhdGEgPSByZWFjdGlvbnM/IHJlYWN0aW9ucz8uZmlsdGVyKGl0ZW0gPT4gaXRlbS5yZWFjdGlvbiA9PSAnTElLRScpOltdO1xyXG4gICAgICAgIGNvbnN0IGhlYXJ0RGF0YSA9ICByZWFjdGlvbnM/IHJlYWN0aW9ucz8uZmlsdGVyKGl0ZW0gPT4gaXRlbS5yZWFjdGlvbiA9PSAnSEVBUlQnKTpbXTtcclxuICAgICAgICBjb25zdCB3b3dEYXRhID0gcmVhY3Rpb25zID8gcmVhY3Rpb25zPy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlYWN0aW9uID09ICdXT1cnKTpbXTtcclxuICAgICAgICBjb25zdCBoYWhhRGF0YSA9IHJlYWN0aW9ucyA/IHJlYWN0aW9ucz8uZmlsdGVyKGl0ZW0gPT4gaXRlbS5yZWFjdGlvbiA9PSAnSEFIQScpOltdO1xyXG4gICAgICAgIGNvbnN0IHNhZERhdGEgPSByZWFjdGlvbnMgPyByZWFjdGlvbnM/LmZpbHRlcihpdGVtID0+IGl0ZW0ucmVhY3Rpb24gPT0gJ1NBRCcpOltdO1xyXG4gICAgICBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0fSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgeyFkaXNhYmxlRGVsZXRlICYmIChhY2NvdW50Py51c2VybmFtZSA9PSBhdXRoPy51c2VyPy51c2VybmFtZSk/PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICd3aW5kb3ctY2xvc2UnXX0gc3R5bGU9e3tcclxuICAgICAgICAgICAgICBmbG9hdDogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogMjUsXHJcbiAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDEwLFxyXG4gICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUFjdGlvbihpdGVtLmlkLCB0eXBlKX1cclxuICAgICAgICAgICAgLz46bnVsbH1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0X2hlYWRlcn0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9PlxyXG4gICAgICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgICB0ZXh0PXtmdWxsTmFtZX1cclxuICAgICAgICAgICAgICAgICAgdXJsPXtwcm9maWxlVXJsfVxyXG4gICAgICAgICAgICAgICAgICBzaXplPXs2MH1cclxuICAgICAgICAgICAgICAgICAgYm9yZGVyU2l6ZT17M31cclxuICAgICAgICAgICAgICAgICAgdXNlcm5hbWU9e3VzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyX2luZm99PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudXNlcl9uYW1lfT57ZnVsbE5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZX0+XHJcbiAgICAgICAgICAgICAge21vbWVudChjcmVhdGVkQXQpLmZvcm1hdCgnTU1NIERELCBZWVlZIC0gSEg6bW0gQScpfVxyXG4gICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICAgICAgPFRyaW1UZXh0IGxpbWl0PXsxMTB9PlxyXG4gICAgICAgICAgICAgICAgeyB0eXBlIT09J1NoYXJlJz90ZXh0OnNoYXJlZC50ZXh0IH1cclxuICAgICAgICAgICAgICA8L1RyaW1UZXh0PlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7dGV4dF9saW5rcyAmJiB0ZXh0X2xpbmtzLm1hcCgoaXRlbSwgaSkgPT4gXHJcbiAgICAgICAgICAgICAgPExpbmtQcmV2aWV3IGRhdGE9e2l0ZW19IGtleT17aXRlbS5pZCArICcgJyArIGl9Lz4gIFxyXG4gICAgICAgICAgICApIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7dmlkZW9zICYmIHZpZGVvcy5sZW5ndGggPiAwICYmIHZpZGVvcy5tYXAoKHZpZGVvLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBsZXQgdmlkZW9Kc09wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgbXV0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHBvc3RlcjpgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHt2aWRlby50aHVtYm5haWwuc3JjfWAsXHJcbiAgICAgICAgICAgICAgICBzb3VyY2VzOiBbe1xyXG4gICAgICAgICAgICAgICAgICBzcmM6IGBodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke3ZpZGVvLnNyY31gLFxyXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcImFwcGxpY2F0aW9uL3gtbXBlZ1VSTFwiLFxyXG4gICAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIGh0bWw1OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvdmVycmlkZU5hdGl2ZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmlkZW9zfSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICB7IXZpZGVvLnByb2Nlc3Npbmc/PD5cclxuICAgICAgICAgICAgICAgICAgey8qIDxWaWRlb1BsYXllciB7IC4uLnZpZGVvSnNPcHRpb25zIH0gLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8VmlkZW9QbGF5ZXIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiNjBcIiBzb3VyY2U9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke3ZpZGVvLnNyY31gfSAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgPFBsYXllclxyXG4gICAgICAgICAgICAgICAgICAgIHBsYXlzSW5saW5lXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b3BsYXlcclxuICAgICAgICAgICAgICAgICAgICBtdXRlZFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc3Rlcj17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7dmlkZW8udGh1bWJuYWlsLnNyY31gfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17cGxheWVyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmKHZpZGVvUmVmICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvUmVmW2luZGV4XSA9IHBsYXllcjsgXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHt2aWRlby5zcmN9YH0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9QbGF5ZXI+IFxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHZpZGVvUmVmW2luZGV4XS5wbGF5KCl9IHJlZj17ZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZWwpIHJldHVybjsgXHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmKHZpZGVvUmVmICYmIHZpZGVvUmVmW2luZGV4XSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zaXRpb25ZID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocG9zaXRpb25ZID4gKHdpbmRvdy5pbm5lckhlaWdodC8yKSAmJiBwb3NpdGlvblkgPCB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2aWRlb1JlZltpbmRleF0ucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvUmVmW2luZGV4XS5wYXVzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBpZihwYXJlbnREaXYgIT09IG51bGwgJiYgcGFyZW50RGl2Py5jdXJyZW50ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwYXJlbnREaXY/LmN1cnJlbnQ/LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodmlkZW9SZWYgJiYgdmlkZW9SZWZbaW5kZXhdICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvc2l0aW9uWSA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocG9zaXRpb25ZID4gKHdpbmRvdy5pbm5lckhlaWdodC8yKSAmJiBwb3NpdGlvblkgPCB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvUmVmW2luZGV4XS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvUmVmW2luZGV4XS5wYXVzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB2aXNpYmlsaXR5OiAnaGlkZGVuJyB9fVxyXG4gICAgICAgICAgICAgICAgICA+QnV0dG9uIEZvciBwb3NpdGlvbiBvZiBWaWRlbzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8Lz46PGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5Zb3VyIHBvc3RpbmcgdmlkZW8gaXMgb24gcHJvY2Vzc2luZy4uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8UHJvZ3Jlc3NcclxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUNvbG9yPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICcwJSc6ICcjMTA4ZWU5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzEwMCUnOiAnIzg3ZDA2OCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgcGVyY2VudD17OTl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9e3BlcmNlbnQgPT4gYGB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgKX1cclxuXHJcblxyXG4gICAgICAgICAgICB7aW1hZ2VzICYmIGltYWdlcy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdF9jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5pbWFnZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIFtzdHlsZXMuZ3JpZF8yXTogaW1hZ2VzLmxlbmd0aCA9PSAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFtzdHlsZXMuZ3JpZF8zXTogaW1hZ2VzLmxlbmd0aCA9PSAzLFxyXG4gICAgICAgICAgICAgICAgICAgIFtzdHlsZXMuZ3JpZF80XTogaW1hZ2VzLmxlbmd0aCA9PSA0LFxyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge2ltYWdlcy5sZW5ndGggPT0gMSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZV9pdGVtfSBcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGhvdG9EaXNwYXRjaChzZXRBY3RpdmVJbWFnZUlkKGltYWdlc1swXS5zcmMpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1Bob3RvTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1swXS5ibG9iX3RuP2ltYWdlc1swXS5ibG9iX3RuOmltYWdlc1swXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtpbWFnZXMubGVuZ3RoID09IDIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuaW1hZ2VfaXRlbSwgc3R5bGVzLm1haW5fcGhvdG8pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaG90b0Rpc3BhdGNoKHNldEFjdGl2ZUltYWdlSWQoaW1hZ2VzWzBdLnNyYykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93UGhvdG9Nb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzBdLmJsb2JfdG4/aW1hZ2VzWzBdLmJsb2JfdG46aW1hZ2VzWzBdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX2l0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBob3RvRGlzcGF0Y2goc2V0QWN0aXZlSW1hZ2VJZChpbWFnZXNbMV0uc3JjKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dQaG90b01vZGFsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMV0uYmxvYl90bj9pbWFnZXNbMV0uYmxvYl90bjppbWFnZXNbMV0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtpbWFnZXMubGVuZ3RoID09IDMgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuaW1hZ2VfaXRlbSwgc3R5bGVzLm1haW5fcGhvdG8pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaG90b0Rpc3BhdGNoKHNldEFjdGl2ZUltYWdlSWQoaW1hZ2VzWzBdLnNyYykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93UGhvdG9Nb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzBdLmJsb2JfdG4/aW1hZ2VzWzBdLmJsb2JfdG46aW1hZ2VzWzBdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX2l0ZW19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaG90b0Rpc3BhdGNoKHNldEFjdGl2ZUltYWdlSWQoaW1hZ2VzWzFdLnNyYykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93UGhvdG9Nb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzFdLmJsb2JfdG4/aW1hZ2VzWzFdLmJsb2JfdG46aW1hZ2VzWzFdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX2l0ZW19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaG90b0Rpc3BhdGNoKHNldEFjdGl2ZUltYWdlSWQoaW1hZ2VzWzJdLnNyYykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93UGhvdG9Nb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzJdLmJsb2JfdG4/aW1hZ2VzWzJdLmJsb2JfdG46aW1hZ2VzWzJdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICB7aW1hZ2VzLmxlbmd0aCA+PSA0ICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmltYWdlX2l0ZW0sIHN0eWxlcy5tYWluX3Bob3RvKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGhvdG9EaXNwYXRjaChzZXRBY3RpdmVJbWFnZUlkKGltYWdlc1swXS5zcmMpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1Bob3RvTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1swXS5ibG9iX3RuP2ltYWdlc1swXS5ibG9iX3RuOmltYWdlc1swXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZV9pdGVtfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGhvdG9EaXNwYXRjaChzZXRBY3RpdmVJbWFnZUlkKGltYWdlc1sxXS5zcmMpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1Bob3RvTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1sxXS5ibG9iX3RuP2ltYWdlc1sxXS5ibG9iX3RuOmltYWdlc1sxXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZV9pdGVtfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGhvdG9EaXNwYXRjaChzZXRBY3RpdmVJbWFnZUlkKGltYWdlc1sxXS5zcmMpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1Bob3RvTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1syXS5ibG9iX3RuP2ltYWdlc1syXS5ibG9iX3RuOmltYWdlc1syXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZV9pdGVtfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGhvdG9EaXNwYXRjaChzZXRBY3RpdmVJbWFnZUlkKGltYWdlc1syXS5zcmMpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1Bob3RvTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaG93X21vcmV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPis0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1szXS5ibG9iX3RuP2ltYWdlc1szXS5ibG9iX3RuOmltYWdlc1szXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IDUwIH19IC8+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7dHlwZSA9PSBcIlBob3RvXCI/IGJsb2JfdG4gJiYgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0X2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuaW1hZ2UpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX2l0ZW19IFxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwaG90b0Rpc3BhdGNoKHNldEFjdGl2ZUltYWdlSWQoYmxvYl90bikpXHJcbiAgICAgICAgICAgICAgICAgICAgICBzaG93UGhvdG9Nb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7YmxvYl90bn1gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+OlxyXG4gICAgICAgICAgICBibG9iX3RuICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmlkZW9zfSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICA8UGxheWVyXHJcbiAgICAgICAgICAgICAgICBwbGF5c0lubGluZVxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlcclxuICAgICAgICAgICAgICAgIG11dGVkXHJcbiAgICAgICAgICAgICAgICBwb3N0ZXI9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke3RodW1ibmFpbC5zcmN9YH1cclxuICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7YmxvYl90bn1gfVxyXG4gICAgICAgICAgICAgICAgcmVmPXtwbGF5ZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAvLyB2aWRlb1JlZiA9IHBsYXllcjtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlYWN0aW9uc19zaGFyZXNfc3RhdHVzfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlYWN0aW9uc19zdGF0dXN9PlxyXG4gICAgICAgICAgICAgICAgeyBsaWtlRGF0YS5sZW5ndGggPiAwICYmIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPXtnZXRMaWtlQWN0aW9uVXNlckluZm8obGlrZURhdGEpfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ3RodW1icy11cCddfSBzaXplPVwiMXhcIiAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcid9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2xpa2VEYXRhLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD48Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHsgaGFoYURhdGEubGVuZ3RoID4gMCAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKGhhaGFEYXRhKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdncmluJ119IHNpemU9XCIxeFwiICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJ319Lz4gXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2hhaGFEYXRhLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7IGhlYXJ0RGF0YS5sZW5ndGggPiAwICYmIDw+IFxyXG4gICAgICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKGhlYXJ0RGF0YSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAnaGVhcnQnXX0gc2l6ZT1cIjF4XCIgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInfX0vPiBcclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aGVhcnREYXRhLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7IHdvd0RhdGEubGVuZ3RoID4gMCAmJiA8PiBcclxuICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9e2dldExpa2VBY3Rpb25Vc2VySW5mbyh3b3dEYXRhKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdsYXVnaCddfSBzaXplPVwiMXhcIiAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcid9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3dvd0RhdGEubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICA8Lz4gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7IHNhZERhdGEubGVuZ3RoID4gMCAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKHNhZERhdGEpfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ2Zyb3duJ119IHNpemU9XCIxeFwiICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJ319Lz4gXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3NhZERhdGEubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxBY3Rpb25zXHJcbiAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgdHlwZT17aXRlbS50eXBlfVxyXG4gICAgICAgICAgICAgIHBvc3RSYXRlPXtpdGVtLnJhdGluZ31cclxuICAgICAgICAgICAgICBjb21tZW50cz17Y29tbWVudHN9XHJcbiAgICAgICAgICAgICAgb25SYXRlUG9zdD17b25SYXRlUG9zdH1cclxuICAgICAgICAgICAgICBjb21tZW50c0NvdW50PXtjb21tZW50c0NvdW50fVxyXG4gICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cclxuICAgICAgICAgICAgICBsaWtlQWN0aW9uPXsodGVybSkgPT4gbGlrZUFjdGlvbih0eXBlLCBpdGVtLmlkLCB0ZXJtKX1cclxuICAgICAgICAgICAgICBzaGFyZUFjdGlvbj17KCkgPT4gc2hhcmVBY3Rpb24odHlwZSAhPT0gJ1NoYXJlJz90eXBlOnNoYXJlZC50eXBlLCB0eXBlICE9PSAnU2hhcmUnP2l0ZW0uaWQ6c2hhcmVkLmlkKX1cclxuICAgICAgICAgICAgICBhY3Rpb25zPXtcclxuICAgICAgICAgICAgICAgICgpID0+IHsgaGFuZGxlU2hvd0NvbW1lbnRNb2RhbChpdGVtLmlkLCBpdGVtLnR5cGUpIH0gXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Q29tbWVudHNcclxuICAgICAgICAgICAgICBpZD17aXRlbS5pZH1cclxuICAgICAgICAgICAgICB0eXBlPXtpdGVtLnR5cGV9XHJcbiAgICAgICAgICAgICAgZGF0YT17Y29tbWVudHN9XHJcbiAgICAgICAgICAgICAgb25VcGRhdGVUaW1lbGluZT17b25VcGRhdGVUaW1lbGluZX1cclxuICAgICAgICAgICAgICBhY3RpdmVQb3N0SWQ9e2FjdGl2ZVBvc3RJZH1cclxuICAgICAgICAgICAgICBtb2RhbE1vZGU9e21vZGFsTW9kZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuXHJcbiAgICAgIDxDb21tZW50c01vZGFsXHJcbiAgICAgICAgYWN0aXZlUG9zdElkPXthY3RpdmVQb3N0SWR9XHJcbiAgICAgICAgdHlwZT17YWN0aXZlVHlwZX1cclxuICAgICAgICBwb3N0RGF0YT17Y29tbWVudHN9XHJcbiAgICAgICAgb25VcGRhdGVUaW1lbGluZT17b25VcGRhdGVDb21tZW50c31cclxuICAgICAgICB0aXRsZT1cIkNvbW1lbnRzXCJcclxuICAgICAgICBzaG93PXttb2RhbE1vZGV9XHJcbiAgICAgICAgb25DbG9zZT17KCkgPT4ge2NvbnNvbGUubG9nKCdjbG9zZSBtb2RhbCcpfX1cclxuICAgICAgICBnZXRDb21tZW50cz17Z2V0Q29tbWVudHN9XHJcbiAgICAgIC8+XHJcbiAgICAgXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RvcmUpID0+ICh7XHJcbiAga2ptOiBzdG9yZSxcclxufSk7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgbW9kYWxBY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoeyBzaG93IH0sIGRpc3BhdGNoKSxcclxuICBkaXNwYXRjaDogZGlzcGF0Y2hcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShUaW1lbGluZVBvc3RzKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==