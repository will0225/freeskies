webpackHotUpdate_N_E("pages/profile",{

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
/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../common/Avatar */ "./components/common/Avatar.js");
/* harmony import */ var redux_modal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! redux-modal */ "./node_modules/redux-modal/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var configs_API__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! configs/API */ "./configs/API.js");
/* harmony import */ var video_react__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! video-react */ "./node_modules/video-react/lib/index.js");
/* harmony import */ var video_react__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(video_react__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var containers_Photos_storage_PhotoContext__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! containers/Photos/storage/PhotoContext */ "./containers/Photos/storage/PhotoContext.js");
/* harmony import */ var components_common_LinkPreview__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! components/common/LinkPreview */ "./components/common/LinkPreview.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/build/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var components_common_VideoPlayer__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! components/common/VideoPlayer */ "./components/common/VideoPlayer.js");






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
      auth = _ref.auth;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      processingVideos = _useState[0],
      setProcessingVideos = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null),
      videoData = _useState2[0],
      setVideoData = _useState2[1];

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
              console.log('postId', activeType, activePostId);

              if (!(!activeType || !activePostId)) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return");

            case 3:
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

              _context.prev = 5;
              _context.next = 8;
              return Object(configs_API__WEBPACK_IMPORTED_MODULE_21__["default"])({
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

            case 8:
              request = _context.sent;
              _data = request.data, status = request.status;

              if (status == 200) {
                setCommnets(_data);
              }

              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](5);
              console.log(_context.t0);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[5, 13]]);
    }));

    return function getComments() {
      return _ref2.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_25___default()('https://www.freeskies.com');
    socket.on('connect', function () {
      console.log('connected!');
      socket.emit('AUTH', {
        'token': auth.token
      });
      console.log('AUTH TOKEN SENT');
    });
    socket.on('AUTH', function (e) {
      console.log(e);

      if (e !== 200) {} else {
        videoList.map(function (videoItem) {
          if (videoItem.processing) {
            socket.emit('VIDEO_READY', videoItem.id);
            setProcessingVideos([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(processingVideos), [videoItem.id]));
            console.log('subscribed video id' + videoItem.id);
          }
        });
        socket.on('VIDEO_READY', function (video) {
          console.log('video ready', video);
          setVideoData(video);
          antd__WEBPACK_IMPORTED_MODULE_7__["message"].success('Your video was processed successfully!');
        });
      }
    });
  }, [data]);
  console.log(data);

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null),
      activePostId = _useState3[0],
      setActivePostId = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null),
      activeType = _useState4[0],
      setActiveType = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      modalMode = _useState5[0],
      setModalMode = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      comments = _useState6[0],
      setCommnets = _useState6[1];

  var videoRef = [];

  var _useModal = Object(react_modal_hook__WEBPACK_IMPORTED_MODULE_14__["useModal"])(function (_ref3) {
    var open = _ref3["in"];
    return __jsx(containers_Photos_storage_PhotoContext__WEBPACK_IMPORTED_MODULE_23__["PhotosProvider"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
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
        lineNumber: 133,
        columnNumber: 7
      }
    }));
  }),
      _useModal2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useModal, 2),
      showPhotoModal = _useModal2[0],
      hidePhotoModal = _useModal2[1];

  var handleShowCommentModal = function handleShowCommentModal(id, type) {
    console.log(id, type);
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
      lineNumber: 172,
      columnNumber: 5
    }
  }, data.map(function (item, index) {
    var _account$profilePhoto, _auth$user, _classnames;

    var account = item.account,
        createdAt = item.createdAt,
        type = item.type,
        comments = item.comments,
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
        lineNumber: 186,
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
        lineNumber: 187,
        columnNumber: 76
      }
    }) : null, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.post_header,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.avatar,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 15
      }
    }, __jsx(_common_Avatar__WEBPACK_IMPORTED_MODULE_17__["default"], {
      text: fullName,
      url: profileUrl,
      size: 60,
      borderSize: 3,
      username: username,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.user_info,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 15
      }
    }, __jsx("p", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.user_name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 17
      }
    }, fullName))), __jsx("p", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.date,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 13
      }
    }, moment__WEBPACK_IMPORTED_MODULE_11___default()(createdAt).format('MMM DD, YYYY - HH:mm A')), __jsx("p", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.description,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 13
      }
    }, __jsx(_common_TrimText__WEBPACK_IMPORTED_MODULE_13__["default"], {
      limit: 110,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 15
      }
    }, type !== 'Share' ? text : shared.text)), text_links && text_links.map(function (item, i) {
      return __jsx(components_common_LinkPreview__WEBPACK_IMPORTED_MODULE_24__["LinkPreview"], {
        data: item,
        key: item.id + ' ' + i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 15
        }
      });
    }), videos && videos.length > 0 && videos.map(function (video, i) {
      var videoJsOptions = {
        autoplay: false,
        controls: true,
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
          lineNumber: 242,
          columnNumber: 17
        }
      }, !video.processing ? __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(video_react__WEBPACK_IMPORTED_MODULE_22__["Player"], {
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
          lineNumber: 246,
          columnNumber: 19
        }
      }, __jsx("source", {
        src: "https://www.freeskies.com/static/".concat(video.src),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257,
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
          lineNumber: 259,
          columnNumber: 19
        }
      }, "Button For position of Video")) : __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286,
          columnNumber: 23
        }
      }, __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287,
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
          lineNumber: 288,
          columnNumber: 21
        }
      })));
    }), images && images.length > 0 ? __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.post_content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image, (_classnames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.grid_2, images.length == 2), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.grid_3, images.length == 3), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.grid_4, images.length == 4), _classnames)),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 305,
        columnNumber: 17
      }
    }, images.length == 1 && __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 313,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].blob_tn ? images[0].blob_tn : images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 314,
        columnNumber: 23
      }
    })), images.length == 2 && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image_item, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.main_photo),
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 320,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].blob_tn ? images[0].blob_tn : images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 324,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 326,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[1].blob_tn ? images[1].blob_tn : images[1].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 25
      }
    }))), images.length == 3 && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image_item, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.main_photo),
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 334,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].blob_tn ? images[0].blob_tn : images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 338,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 340,
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
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 343,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[2].blob_tn ? images[2].blob_tn : images[2].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 344,
        columnNumber: 25
      }
    }))), images.length >= 4 && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image_item, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.main_photo),
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 351,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].blob_tn ? images[0].blob_tn : images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 355,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 357,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[1].blob_tn ? images[1].blob_tn : images[1].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 358,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 360,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[2].blob_tn ? images[2].blob_tn : images[2].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 361,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 363,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.show_more,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 364,
        columnNumber: 25
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 365,
        columnNumber: 27
      }
    }, "+4")), __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[3].blob_tn ? images[3].blob_tn : images[3].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 367,
        columnNumber: 25
      }
    }))))) : __jsx("div", {
      style: {
        height: 50
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 374,
        columnNumber: 15
      }
    }), type == "Photo" ? blob_tn && __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.post_content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 377,
        columnNumber: 42
      }
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 378,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 381,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(blob_tn),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 382,
        columnNumber: 19
      }
    })))) : blob_tn && __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.videos,
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 386,
        columnNumber: 24
      }
    }, __jsx(video_react__WEBPACK_IMPORTED_MODULE_22__["Player"], {
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
        lineNumber: 387,
        columnNumber: 15
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.reactions_shares_status,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 400,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.reactions_status,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 401,
        columnNumber: 15
      }
    }, likeData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(likeData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 403,
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
        lineNumber: 404,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 405,
        columnNumber: 21
      }
    }, likeData.length))), hahaData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(hahaData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 409,
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
        lineNumber: 410,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 411,
        columnNumber: 21
      }
    }, hahaData.length))), heartData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(heartData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 416,
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
        lineNumber: 417,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 418,
        columnNumber: 21
      }
    }, heartData.length))), wowData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(wowData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 423,
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
        lineNumber: 424,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 425,
        columnNumber: 21
      }
    }, wowData.length))), sadData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(sadData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 430,
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
        lineNumber: 431,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 432,
        columnNumber: 21
      }
    }, sadData.length))))), __jsx(_Actions__WEBPACK_IMPORTED_MODULE_12__["default"], {
      id: item.id,
      type: item.type,
      postRate: item.rating,
      comments: comments,
      onRatePost: onRatePost,
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
        lineNumber: 438,
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
        lineNumber: 451,
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
      lineNumber: 464,
      columnNumber: 7
    }
  }));
}

_s(TimelinePosts, "THo804DXnNKKkCRTsw9MmcG0FVk=", false, function () {
  return [react_modal_hook__WEBPACK_IMPORTED_MODULE_14__["useModal"]];
});

_c = TimelinePosts;

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    modalActions: Object(redux__WEBPACK_IMPORTED_MODULE_19__["bindActionCreators"])({
      show: redux_modal__WEBPACK_IMPORTED_MODULE_18__["show"]
    }, dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_20__["connect"])(null, mapDispatchToProps)(TimelinePosts));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aW1lbGluZS9UaW1lbGluZVBvc3RzLmpzIl0sIm5hbWVzIjpbIlRpbWVsaW5lUG9zdHMiLCJkYXRhIiwib25VcGRhdGVUaW1lbGluZSIsIm9uUmF0ZVBvc3QiLCJtb2RhbEFjdGlvbnMiLCJzaGFyZUFjdGlvbiIsImxpa2VBY3Rpb24iLCJkZWxldGVBY3Rpb24iLCJkaXNhYmxlRGVsZXRlIiwicGFyZW50RGl2IiwiYXV0aCIsInVzZVN0YXRlIiwicHJvY2Vzc2luZ1ZpZGVvcyIsInNldFByb2Nlc3NpbmdWaWRlb3MiLCJ2aWRlb0RhdGEiLCJzZXRWaWRlb0RhdGEiLCJpbWFnZXNMaXN0IiwiY29uY2F0IiwiYXBwbHkiLCJtYXAiLCJpdGVtIiwidHlwZSIsImltYWdlcyIsInZpZGVvTGlzdCIsInZpZGVvcyIsImdldENvbW1lbnRzIiwiY29uc29sZSIsImxvZyIsImFjdGl2ZVR5cGUiLCJhY3RpdmVQb3N0SWQiLCJ1cmwiLCJBUEkiLCJtZXRob2QiLCJpZCIsIm9mZnNldCIsImZpcnN0IiwiaGVhZGVycyIsInRva2VuIiwicmVxdWVzdCIsInN0YXR1cyIsInNldENvbW1uZXRzIiwidXNlRWZmZWN0Iiwic29ja2V0IiwiaW8iLCJvbiIsImVtaXQiLCJlIiwidmlkZW9JdGVtIiwicHJvY2Vzc2luZyIsInZpZGVvIiwibWVzc2FnZSIsInN1Y2Nlc3MiLCJzZXRBY3RpdmVQb3N0SWQiLCJzZXRBY3RpdmVUeXBlIiwibW9kYWxNb2RlIiwic2V0TW9kYWxNb2RlIiwiY29tbWVudHMiLCJ2aWRlb1JlZiIsInVzZU1vZGFsIiwib3BlbiIsImhpZGVQaG90b01vZGFsIiwic2hvd1Bob3RvTW9kYWwiLCJoYW5kbGVTaG93Q29tbWVudE1vZGFsIiwic2hvdyIsInRvZ2dsZUNvbW1lbnRTaG93IiwiaW5kZXgiLCJzZXRDb21tZW50U2hvdyIsImNvbW1lbnRTaG93IiwiZ2V0TGlrZUFjdGlvblVzZXJJbmZvIiwiZmluYWxEYXRhIiwiYWNjb3VudCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwib25VcGRhdGVDb21tZW50cyIsInVzZXIiLCJzdHlsZXMiLCJhY3Rpdml0eV9jb250ZW50IiwiY3JlYXRlZEF0IiwidGV4dCIsInNoYXJlZCIsImNvbW1lbnRlZCIsImJsb2JfdG4iLCJ0aHVtYm5haWwiLCJyZWFjdGlvbnMiLCJ0ZXh0X2xpbmtzIiwicHVzaCIsInByb2ZpbGVVcmwiLCJ1bmRlZmluZWQiLCJwcm9maWxlUGhvdG8iLCJzcmMiLCJmdWxsTmFtZSIsInVzZXJuYW1lIiwibGlrZURhdGEiLCJmaWx0ZXIiLCJyZWFjdGlvbiIsImhlYXJ0RGF0YSIsIndvd0RhdGEiLCJoYWhhRGF0YSIsInNhZERhdGEiLCJwb3N0IiwiZm9udFNpemUiLCJtYXJnaW5SaWdodCIsImN1cnNvciIsInBvc3RfaGVhZGVyIiwiYXZhdGFyIiwidXNlcl9pbmZvIiwidXNlcl9uYW1lIiwiZGF0ZSIsIm1vbWVudCIsImZvcm1hdCIsImRlc2NyaXB0aW9uIiwiaSIsImxlbmd0aCIsInZpZGVvSnNPcHRpb25zIiwiYXV0b3BsYXkiLCJjb250cm9scyIsInNvdXJjZXMiLCJ3aXRoQ3JlZGVudGlhbHMiLCJodG1sNSIsImhscyIsIm92ZXJyaWRlTmF0aXZlIiwicGxheWVyIiwicGxheSIsImVsIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBvc2l0aW9uWSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInkiLCJpbm5lckhlaWdodCIsInBhdXNlIiwiY3VycmVudCIsInZpc2liaWxpdHkiLCJwZXJjZW50IiwicG9zdF9jb250ZW50IiwiY2xhc3NuYW1lcyIsImltYWdlIiwiZ3JpZF8yIiwiZ3JpZF8zIiwiZ3JpZF80IiwiaW1hZ2VfaXRlbSIsIm1haW5fcGhvdG8iLCJzaG93X21vcmUiLCJoZWlnaHQiLCJyZWFjdGlvbnNfc2hhcmVzX3N0YXR1cyIsInJlYWN0aW9uc19zdGF0dXMiLCJyYXRpbmciLCJ0ZXJtIiwibWFwRGlzcGF0Y2hUb1Byb3Bz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RXRELGdCQUpwQjtBQUtFLGtCQUFZLEVBQUUyQixZQUxoQjtBQU1FLGVBQVMsRUFBRXlCLFNBTmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQXpRRixDQURGO0FBcVJELEdBalNBLENBREgsRUFvU0UsTUFBQyx1REFBRDtBQUNFLGdCQUFZLEVBQUV6QixZQURoQjtBQUVFLFFBQUksRUFBRUQsVUFGUjtBQUdFLFlBQVEsRUFBRTRCLFFBSFo7QUFJRSxvQkFBZ0IsRUFBRWlCLGdCQUpwQjtBQUtFLFNBQUssRUFBQyxVQUxSO0FBTUUsUUFBSSxFQUFFbkIsU0FOUjtBQU9FLFdBQU8sRUFBRSxtQkFBTTtBQUFDNUIsYUFBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUEyQixLQVA3QztBQVFFLGVBQVcsRUFBRUYsV0FSZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBcFNGLENBREY7QUFrVEQ7O0dBbmNRekIsYTtVQXlHa0MwRCwwRDs7O0tBekdsQzFELGE7O0FBcWNULElBQU1vSixrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQ7QUFBQSxTQUFlO0FBQ3hDakosZ0JBQVksRUFBRWtKLGlFQUFrQixDQUFDO0FBQUV2RixVQUFJLEVBQUpBLGlEQUFJQTtBQUFOLEtBQUQsRUFBV3NGLFFBQVg7QUFEUSxHQUFmO0FBQUEsQ0FBM0I7O0FBSWVFLDJIQUFPLENBQUMsSUFBRCxFQUFPSCxrQkFBUCxDQUFQLENBQWtDcEosYUFBbEMsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLjMyZWE4ZmMxYWVhMmQ5YTFmYWNjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL3RpbWVsaW5lLXBvc3QubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyBQb3BvdmVyLCBUb29sdGlwIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgQ29tbWVudHMgZnJvbSAnLi9Db21tZW50cyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgQWN0aW9ucyBmcm9tICcuL0FjdGlvbnMnO1xyXG5pbXBvcnQgVHJpbVRleHQgZnJvbSAnLi4vY29tbW9uL1RyaW1UZXh0JztcclxuaW1wb3J0IHsgdXNlTW9kYWwgfSBmcm9tICdyZWFjdC1tb2RhbC1ob29rJztcclxuaW1wb3J0IENvbW1lbnRzTW9kYWwgZnJvbSAnLi9Db21tZW50c01vZGFsJztcclxuaW1wb3J0IFBob3Rvc01vZGFsIGZyb20gJy4uL3Byb2ZpbGUvUGhvdG9zTW9kYWwnO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJy4uL2NvbW1vbi9BdmF0YXInO1xyXG5pbXBvcnQgeyBzaG93IH0gZnJvbSAncmVkdXgtbW9kYWwnO1xyXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBBUEkgZnJvbSAnY29uZmlncy9BUEknO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICd2aWRlby1yZWFjdCc7XHJcbmltcG9ydCB7IFBob3Rvc1Byb3ZpZGVyIH0gIGZyb20gJ2NvbnRhaW5lcnMvUGhvdG9zL3N0b3JhZ2UvUGhvdG9Db250ZXh0JztcclxuaW1wb3J0IHsgTGlua1ByZXZpZXcgfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9MaW5rUHJldmlldyc7XHJcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcclxuaW1wb3J0IFZpZGVvUGxheWVyIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL1ZpZGVvUGxheWVyJztcclxuaW1wb3J0IHsgUHJvZ3Jlc3MgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgQnV0dG9uLCBVcGxvYWQsIG1lc3NhZ2UsIElucHV0LCBUYWJzLCBSYXRlIH0gZnJvbSAnYW50ZCc7XHJcblxyXG5mdW5jdGlvbiBUaW1lbGluZVBvc3RzKHsgZGF0YSwgb25VcGRhdGVUaW1lbGluZSwgb25SYXRlUG9zdCwgbW9kYWxBY3Rpb25zLCBzaGFyZUFjdGlvbiwgbGlrZUFjdGlvbiwgZGVsZXRlQWN0aW9uLCBkaXNhYmxlRGVsZXRlLCBwYXJlbnREaXYgPSBudWxsLCBhdXRoIH0pIHtcclxuICBcclxuICBjb25zdCBbcHJvY2Vzc2luZ1ZpZGVvcywgc2V0UHJvY2Vzc2luZ1ZpZGVvc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3ZpZGVvRGF0YSwgc2V0VmlkZW9EYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IGltYWdlc0xpc3QgPSBbXS5jb25jYXQuYXBwbHkoW10sIGRhdGEubWFwKGl0ZW0gPT4gXHJcbiAgICB7IFxyXG4gICAgICAgIGlmKGl0ZW0udHlwZSA9PT0gJ1Bob3RvJykge1xyXG4gICAgICAgICAgcmV0dXJuICBpdGVtO1xyXG4gICAgICAgIH0gZWxzZSBpZihpdGVtLnR5cGUgPT09ICdWaWRlb0NsaXAnKSB7XHJcbiAgICAgICAgICByZXR1cm4gIFtdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gIGl0ZW0uaW1hZ2VzIFxyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbiAgKSlcclxuXHJcbiAgY29uc3QgdmlkZW9MaXN0ID0gW10uY29uY2F0LmFwcGx5KFtdLCBkYXRhLm1hcChpdGVtID0+IHtcclxuICAgIGlmKGl0ZW0udHlwZSA9PT0gJ1ZpZGVvQ2xpcCcpIHtcclxuICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdHlwZW9mIGl0ZW0udmlkZW9zICE9PSAndW5kZWZpbmVkJz9pdGVtLnZpZGVvczpbXTtcclxuICAgIH1cclxuICB9KSlcclxuICBcclxuXHJcbiAgY29uc3QgZ2V0Q29tbWVudHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygncG9zdElkJywgYWN0aXZlVHlwZSwgYWN0aXZlUG9zdElkKTtcclxuICAgIGlmKCFhY3RpdmVUeXBlIHx8ICFhY3RpdmVQb3N0SWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIHVybCA9ICcnO1xyXG4gICAgICBpZiAoYWN0aXZlVHlwZSA9PT0gJ1Bob3RvJykge1xyXG4gICAgICAgIHVybCA9ICcvcGhvdG9zL2dldC1jb21tZW50cyc7XHJcbiAgICAgIH0gZWxzZSBpZiAoYWN0aXZlVHlwZSA9PT0gJ1ZpZGVvQ2xpcCcpIHtcclxuICAgICAgICB1cmwgPSAnL3ZpZGVvLWNsaXBzL2dldC1jb21tZW50cyc7XHJcbiAgICAgIH0gZWxzZSBpZiAoYWN0aXZlVHlwZSA9PT0gJ0l0ZW0nKSB7XHJcbiAgICAgICAgdXJsID0gJy9pdGVtcy9nZXQtY29tbWVudHMnO1xyXG4gICAgICB9IGVsc2UgaWYgKGFjdGl2ZVR5cGUgPT09ICdQb3N0Jykge1xyXG4gICAgICAgIHVybCA9ICcvcG9zdHMvZ2V0LWNvbW1lbnRzJztcclxuICAgICAgfSBlbHNlIGlmIChhY3RpdmVUeXBlID09PSAnQ29tbWVudCcpIHtcclxuICAgICAgICB1cmwgPSAnL2NvbW1lbnRzL2dldC1jb21tZW50cyc7XHJcbiAgICAgIH0gZWxzZSBpZiAoYWN0aXZlVHlwZSA9PT0gJ1NoYXJlJykge1xyXG4gICAgICAgIHVybCA9ICcvc2hhcmVzL2dldC1jb21tZW50cyc7XHJcbiAgICAgIH0gZWxzZSBpZiAoYWN0aXZlVHlwZSA9PT0gJ01hcmtldHBsYWNlSXRlbUZvclNhbGUnKSB7XHJcbiAgICAgICAgdXJsID0gJy9tYXJrZXRwbGFjZS9pdGVtcy1mb3Itc2FsZS9nZXQtY29tbWVudHMnO1xyXG4gICAgICB9IGVsc2UgaWYgKGFjdGl2ZVR5cGUgPT09ICdNYXJrZXRwbGFjZUl0ZW1Ub0J1eScpIHtcclxuICAgICAgICB1cmwgPSAnL21hcmtldHBsYWNlL2l0ZW1zLXRvLWJ1eS9nZXQtY29tbWVudHMnO1xyXG4gICAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgIEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBpZDogYWN0aXZlUG9zdElkLFxyXG4gICAgICAgICAgICBvZmZzZXQ6IDAsXHJcbiAgICAgICAgICAgIGZpcnN0OiAyNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG4gICAgICBpZihzdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgc2V0Q29tbW5ldHMoZGF0YSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzb2NrZXQgPSBpbygnaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbScpO1xyXG4gICAgc29ja2V0Lm9uKCdjb25uZWN0JywgKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnY29ubmVjdGVkIScpXHJcbiAgICAgIHNvY2tldC5lbWl0KCdBVVRIJywgeyAndG9rZW4nOiBhdXRoLnRva2VuIH0pXHJcbiAgICAgIGNvbnNvbGUubG9nKCdBVVRIIFRPS0VOIFNFTlQnKVxyXG4gICAgfSlcclxuXHJcbiAgICBzb2NrZXQub24oJ0FVVEgnLCBlID0+IHtjb25zb2xlLmxvZyhlKTtcclxuICAgICAgaWYoZSAhPT0gMjAwKSB7XHJcblxyXG4gICAgICB9IGVsc2UgIHtcclxuICAgICAgICB2aWRlb0xpc3QubWFwKHZpZGVvSXRlbSA9PiB7XHJcbiAgICAgICAgICBpZih2aWRlb0l0ZW0ucHJvY2Vzc2luZykge1xyXG4gICAgICAgICAgICBzb2NrZXQuZW1pdCgnVklERU9fUkVBRFknLCB2aWRlb0l0ZW0uaWQpO1xyXG4gICAgICAgICAgICBzZXRQcm9jZXNzaW5nVmlkZW9zKFsuLi5wcm9jZXNzaW5nVmlkZW9zLCB2aWRlb0l0ZW0uaWRdKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3Vic2NyaWJlZCB2aWRlbyBpZCcgKyB2aWRlb0l0ZW0uaWQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc29ja2V0Lm9uKCdWSURFT19SRUFEWScsICh2aWRlbykgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ3ZpZGVvIHJlYWR5JywgdmlkZW8pXHJcbiAgICAgICAgICBzZXRWaWRlb0RhdGEodmlkZW8pO1xyXG4gICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKCdZb3VyIHZpZGVvIHdhcyBwcm9jZXNzZWQgc3VjY2Vzc2Z1bGx5IScpXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcblxyXG4gIH0sIFtkYXRhXSlcclxuXHJcbiAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gIGNvbnN0IFthY3RpdmVQb3N0SWQsIHNldEFjdGl2ZVBvc3RJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbYWN0aXZlVHlwZSwgc2V0QWN0aXZlVHlwZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbbW9kYWxNb2RlLCBzZXRNb2RhbE1vZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtjb21tZW50cywgc2V0Q29tbW5ldHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGxldCB2aWRlb1JlZiA9IFtdO1xyXG4gIGNvbnN0IFtzaG93UGhvdG9Nb2RhbCwgaGlkZVBob3RvTW9kYWxdID0gdXNlTW9kYWwoKHsgaW46IG9wZW4gfSkgPT4gKFxyXG4gICAgPFBob3Rvc1Byb3ZpZGVyPlxyXG4gICAgICA8UGhvdG9zTW9kYWxcclxuICAgICAgICB0aXRsZT1cIlBob3RvIGRldGFpbFwiXHJcbiAgICAgICAgc2hvd01vZGFsPXtvcGVufVxyXG4gICAgICAgIG9uQ2xvc2U9e2hpZGVQaG90b01vZGFsfVxyXG4gICAgICAgIG9uUmF0ZVBvc3Q9e29uUmF0ZVBvc3R9XHJcbiAgICAgICAgZGF0YT17aW1hZ2VzTGlzdH1cclxuICAgICAgICBsaWtlQWN0aW9uPXtsaWtlQWN0aW9ufVxyXG4gICAgICAgIHNoYXJlQWN0aW9uPXtzaGFyZUFjdGlvbn1cclxuICAgICAgICBvblVwZGF0ZVRpbWVsaW5lPXtvblVwZGF0ZVRpbWVsaW5lfVxyXG4gICAgICAgIGF1dGg9e2F1dGh9XHJcbiAgICAgIC8+XHJcbiAgICA8L1Bob3Rvc1Byb3ZpZGVyPlxyXG4gICkpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTaG93Q29tbWVudE1vZGFsID0gKGlkLCB0eXBlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhpZCwgdHlwZSk7XHJcbiAgICBzZXRBY3RpdmVQb3N0SWQoaWQpO1xyXG4gICAgc2V0QWN0aXZlVHlwZSh0eXBlKTtcclxuICAgIHNldE1vZGFsTW9kZSghbW9kYWxNb2RlKTtcclxuICAgIG1vZGFsQWN0aW9ucy5zaG93KCdjb21tZW50TW9kYWwnLCB7IGlkOiBhY3RpdmVQb3N0SWQgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlQ29tbWVudFNob3cgPSAoaW5kZXgpID0+XHJcbiAgICBzZXRDb21tZW50U2hvdyhjb21tZW50U2hvdyA9PT0gaW5kZXggPyBudWxsIDogaW5kZXgpO1xyXG5cclxuICBjb25zdCBnZXRMaWtlQWN0aW9uVXNlckluZm8gPSAoZGF0YSkgPT4ge1xyXG4gICAgdmFyIGZpbmFsRGF0YSA9ICcnO1xyXG4gICAgZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgIGZpbmFsRGF0YSA9IGZpbmFsRGF0YSArICcgJyArIGl0ZW0uYWNjb3VudC5maXJzdE5hbWUgKyAnJyArIGl0ZW0uYWNjb3VudC5sYXN0TmFtZSA7XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIGZpbmFsRGF0YTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uVXBkYXRlQ29tbWVudHMgPSBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgc2V0Q29tbW5ldHMoWy4uLmNvbW1lbnRzLCB7Li4uZGF0YT8uY29tbWVudHNbMF0sIGFjY291bnQ6IGF1dGgudXNlcn1dKTtcclxuICB9XHJcbiAgXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjdGl2aXR5X2NvbnRlbnR9ID5cclxuICAgICAge2RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHZhciB7IGFjY291bnQsIGNyZWF0ZWRBdCwgdHlwZSwgY29tbWVudHMsIHRleHQsIGltYWdlcywgdmlkZW9zLCBzaGFyZWQsIGNvbW1lbnRlZCwgYmxvYl90biwgdGh1bWJuYWlsLCByZWFjdGlvbnMsIHRleHRfbGlua3MgfSA9IGl0ZW07XHJcbiAgICAgICAgdmlkZW9SZWYucHVzaChudWxsKTtcclxuICAgICAgICBjb25zdCBwcm9maWxlVXJsID0gYWNjb3VudCAhPT0gbnVsbCAmJiBhY2NvdW50ICE9PSB1bmRlZmluZWQgPyBgJHthY2NvdW50LnByb2ZpbGVQaG90bz8uc3JjfWAgOiBudWxsXHJcbiAgICAgICAgY29uc3QgZnVsbE5hbWUgPSBgJHthY2NvdW50Py5maXJzdE5hbWV9ICR7YWNjb3VudD8ubGFzdE5hbWV9YDtcclxuICAgICAgICBjb25zdCB1c2VybmFtZSA9IGFjY291bnQ/LnVzZXJuYW1lO1xyXG4gICAgICAgIGNvbnN0IGxpa2VEYXRhID0gcmVhY3Rpb25zPyByZWFjdGlvbnM/LmZpbHRlcihpdGVtID0+IGl0ZW0ucmVhY3Rpb24gPT0gJ0xJS0UnKTpbXTtcclxuICAgICAgICBjb25zdCBoZWFydERhdGEgPSAgcmVhY3Rpb25zPyByZWFjdGlvbnM/LmZpbHRlcihpdGVtID0+IGl0ZW0ucmVhY3Rpb24gPT0gJ0hFQVJUJyk6W107XHJcbiAgICAgICAgY29uc3Qgd293RGF0YSA9IHJlYWN0aW9ucyA/IHJlYWN0aW9ucz8uZmlsdGVyKGl0ZW0gPT4gaXRlbS5yZWFjdGlvbiA9PSAnV09XJyk6W107XHJcbiAgICAgICAgY29uc3QgaGFoYURhdGEgPSByZWFjdGlvbnMgPyByZWFjdGlvbnM/LmZpbHRlcihpdGVtID0+IGl0ZW0ucmVhY3Rpb24gPT0gJ0hBSEEnKTpbXTtcclxuICAgICAgICBjb25zdCBzYWREYXRhID0gcmVhY3Rpb25zID8gcmVhY3Rpb25zPy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlYWN0aW9uID09ICdTQUQnKTpbXTtcclxuICAgICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdH0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgIHshZGlzYWJsZURlbGV0ZSAmJiAoYWNjb3VudD8udXNlcm5hbWUgPT0gYXV0aD8udXNlcj8udXNlcm5hbWUpPzxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAnd2luZG93LWNsb3NlJ119IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgZmxvYXQ6ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDI1LFxyXG4gICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAxMCxcclxuICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkZWxldGVBY3Rpb24oaXRlbS5pZCwgdHlwZSl9XHJcbiAgICAgICAgICAgIC8+Om51bGx9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdF9oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyfT5cclxuICAgICAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICAgICAgdGV4dD17ZnVsbE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIHVybD17cHJvZmlsZVVybH1cclxuICAgICAgICAgICAgICAgICAgc2l6ZT17NjB9XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclNpemU9ezN9XHJcbiAgICAgICAgICAgICAgICAgIHVzZXJuYW1lPXt1c2VybmFtZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcl9pbmZvfT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfbmFtZX0+e2Z1bGxOYW1lfTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRhdGV9PlxyXG4gICAgICAgICAgICAgIHttb21lbnQoY3JlYXRlZEF0KS5mb3JtYXQoJ01NTSBERCwgWVlZWSAtIEhIOm1tIEEnKX1cclxuICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgICAgIDxUcmltVGV4dCBsaW1pdD17MTEwfT5cclxuICAgICAgICAgICAgICAgIHsgdHlwZSE9PSdTaGFyZSc/dGV4dDpzaGFyZWQudGV4dCB9XHJcbiAgICAgICAgICAgICAgPC9UcmltVGV4dD5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAge3RleHRfbGlua3MgJiYgdGV4dF9saW5rcy5tYXAoKGl0ZW0sIGkpID0+IFxyXG4gICAgICAgICAgICAgIDxMaW5rUHJldmlldyBkYXRhPXtpdGVtfSBrZXk9e2l0ZW0uaWQgKyAnICcgKyBpfS8+ICBcclxuICAgICAgICAgICAgKSB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAge3ZpZGVvcyAmJiB2aWRlb3MubGVuZ3RoID4gMCAmJiB2aWRlb3MubWFwKCh2aWRlbywgaSkgPT4ge1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgbGV0IHZpZGVvSnNPcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzb3VyY2VzOiBbe1xyXG4gICAgICAgICAgICAgICAgICBzcmM6IGBodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke3ZpZGVvLnNyY31gLFxyXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcImFwcGxpY2F0aW9uL3gtbXBlZ1VSTFwiLFxyXG4gICAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIGh0bWw1OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvdmVycmlkZU5hdGl2ZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmlkZW9zfSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICB7IXZpZGVvLnByb2Nlc3Npbmc/PD5cclxuICAgICAgICAgICAgICAgICAgey8qIDxWaWRlb1BsYXllciB7IC4uLnZpZGVvSnNPcHRpb25zIH0gLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8VmlkZW9QbGF5ZXIgd2lkdGg9XCIyNTBcIiBoZWlnaHQ9XCI2MFwiIHNvdXJjZT17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7dmlkZW8uc3JjfWB9IC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8UGxheWVyXHJcbiAgICAgICAgICAgICAgICAgICAgcGxheXNJbmxpbmVcclxuICAgICAgICAgICAgICAgICAgICBhdXRvcGxheVxyXG4gICAgICAgICAgICAgICAgICAgIG11dGVkXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zdGVyPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHt2aWRlby50aHVtYm5haWwuc3JjfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtwbGF5ZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYodmlkZW9SZWYgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW9SZWZbaW5kZXhdID0gcGxheWVyOyBcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke3ZpZGVvLnNyY31gfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L1BsYXllcj4gXHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdmlkZW9SZWZbaW5kZXhdLnBsYXkoKX0gcmVmPXtlbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlbCkgcmV0dXJuOyBcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYodmlkZW9SZWYgJiYgdmlkZW9SZWZbaW5kZXhdICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3NpdGlvblkgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihwb3NpdGlvblkgPiAod2luZG93LmlubmVySGVpZ2h0LzIpICYmIHBvc2l0aW9uWSA8IHdpbmRvdy5pbm5lckhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvUmVmW2luZGV4XS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW9SZWZbaW5kZXhdLnBhdXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHBhcmVudERpdiAhPT0gbnVsbCAmJiBwYXJlbnREaXY/LmN1cnJlbnQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHBhcmVudERpdj8uY3VycmVudD8uYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih2aWRlb1JlZiAmJiB2aWRlb1JlZltpbmRleF0gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zaXRpb25ZID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZihwb3NpdGlvblkgPiAod2luZG93LmlubmVySGVpZ2h0LzIpICYmIHBvc2l0aW9uWSA8IHdpbmRvdy5pbm5lckhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW9SZWZbaW5kZXhdLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW9SZWZbaW5kZXhdLnBhdXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHZpc2liaWxpdHk6ICdoaWRkZW4nIH19XHJcbiAgICAgICAgICAgICAgICAgID5CdXR0b24gRm9yIHBvc2l0aW9uIG9mIFZpZGVvPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvPjo8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPllvdXIgcG9zdGluZyB2aWRlbyBpcyBvbiBwcm9jZXNzaW5nLi4uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQcm9ncmVzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlQ29sb3I9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzAlJzogJyMxMDhlZTknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnMTAwJSc6ICcjODdkMDY4JyxcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBwZXJjZW50PXs5OX1cclxuICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdD17cGVyY2VudCA9PiBgYH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICApfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHtpbWFnZXMgJiYgaW1hZ2VzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0X2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmltYWdlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgW3N0eWxlcy5ncmlkXzJdOiBpbWFnZXMubGVuZ3RoID09IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgW3N0eWxlcy5ncmlkXzNdOiBpbWFnZXMubGVuZ3RoID09IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgW3N0eWxlcy5ncmlkXzRdOiBpbWFnZXMubGVuZ3RoID09IDQsXHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7aW1hZ2VzLmxlbmd0aCA9PSAxICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX2l0ZW19IG9uQ2xpY2s9e3Nob3dQaG90b01vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMF0uYmxvYl90bj9pbWFnZXNbMF0uYmxvYl90bjppbWFnZXNbMF0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICB7aW1hZ2VzLmxlbmd0aCA9PSAyICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmltYWdlX2l0ZW0sIHN0eWxlcy5tYWluX3Bob3RvKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c2hvd1Bob3RvTW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMF0uYmxvYl90bj9pbWFnZXNbMF0uYmxvYl90bjppbWFnZXNbMF0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfaXRlbX0gb25DbGljaz17c2hvd1Bob3RvTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzFdLmJsb2JfdG4/aW1hZ2VzWzFdLmJsb2JfdG46aW1hZ2VzWzFdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICB7aW1hZ2VzLmxlbmd0aCA9PSAzICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmltYWdlX2l0ZW0sIHN0eWxlcy5tYWluX3Bob3RvKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c2hvd1Bob3RvTW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMF0uYmxvYl90bj9pbWFnZXNbMF0uYmxvYl90bjppbWFnZXNbMF0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfaXRlbX0gb25DbGljaz17c2hvd1Bob3RvTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzFdLmJsb2JfdG4/aW1hZ2VzWzFdLmJsb2JfdG46aW1hZ2VzWzFdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX2l0ZW19IG9uQ2xpY2s9e3Nob3dQaG90b01vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1syXS5ibG9iX3RuP2ltYWdlc1syXS5ibG9iX3RuOmltYWdlc1syXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAge2ltYWdlcy5sZW5ndGggPj0gNCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5pbWFnZV9pdGVtLCBzdHlsZXMubWFpbl9waG90byl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dQaG90b01vZGFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzBdLmJsb2JfdG4/aW1hZ2VzWzBdLmJsb2JfdG46aW1hZ2VzWzBdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX2l0ZW19IG9uQ2xpY2s9e3Nob3dQaG90b01vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1sxXS5ibG9iX3RuP2ltYWdlc1sxXS5ibG9iX3RuOmltYWdlc1sxXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZV9pdGVtfSBvbkNsaWNrPXtzaG93UGhvdG9Nb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMl0uYmxvYl90bj9pbWFnZXNbMl0uYmxvYl90bjppbWFnZXNbMl0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfaXRlbX0gb25DbGljaz17c2hvd1Bob3RvTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNob3dfbW9yZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+KzQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzNdLmJsb2JfdG4/aW1hZ2VzWzNdLmJsb2JfdG46aW1hZ2VzWzNdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogNTAgfX0gLz5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHt0eXBlID09IFwiUGhvdG9cIj8gYmxvYl90biAmJiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RfY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5pbWFnZSl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfaXRlbX0gb25DbGljaz17c2hvd1Bob3RvTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7YmxvYl90bn1gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+OlxyXG4gICAgICAgICAgICBibG9iX3RuICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmlkZW9zfSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICA8UGxheWVyXHJcbiAgICAgICAgICAgICAgICBwbGF5c0lubGluZVxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlcclxuICAgICAgICAgICAgICAgIG11dGVkXHJcbiAgICAgICAgICAgICAgICBwb3N0ZXI9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke3RodW1ibmFpbC5zcmN9YH1cclxuICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7YmxvYl90bn1gfVxyXG4gICAgICAgICAgICAgICAgcmVmPXtwbGF5ZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAvLyB2aWRlb1JlZiA9IHBsYXllcjtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlYWN0aW9uc19zaGFyZXNfc3RhdHVzfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlYWN0aW9uc19zdGF0dXN9PlxyXG4gICAgICAgICAgICAgICAgeyBsaWtlRGF0YS5sZW5ndGggPiAwICYmIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPXtnZXRMaWtlQWN0aW9uVXNlckluZm8obGlrZURhdGEpfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ3RodW1icy11cCddfSBzaXplPVwiMXhcIiAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcid9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2xpa2VEYXRhLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD48Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHsgaGFoYURhdGEubGVuZ3RoID4gMCAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKGhhaGFEYXRhKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdncmluJ119IHNpemU9XCIxeFwiICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJ319Lz4gXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2hhaGFEYXRhLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7IGhlYXJ0RGF0YS5sZW5ndGggPiAwICYmIDw+IFxyXG4gICAgICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKGhlYXJ0RGF0YSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAnaGVhcnQnXX0gc2l6ZT1cIjF4XCIgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInfX0vPiBcclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aGVhcnREYXRhLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7IHdvd0RhdGEubGVuZ3RoID4gMCAmJiA8PiBcclxuICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9e2dldExpa2VBY3Rpb25Vc2VySW5mbyh3b3dEYXRhKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdsYXVnaCddfSBzaXplPVwiMXhcIiAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcid9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3dvd0RhdGEubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICA8Lz4gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7IHNhZERhdGEubGVuZ3RoID4gMCAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKHNhZERhdGEpfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ2Zyb3duJ119IHNpemU9XCIxeFwiICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJ319Lz4gXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3NhZERhdGEubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxBY3Rpb25zXHJcbiAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgdHlwZT17aXRlbS50eXBlfVxyXG4gICAgICAgICAgICAgIHBvc3RSYXRlPXtpdGVtLnJhdGluZ31cclxuICAgICAgICAgICAgICBjb21tZW50cz17Y29tbWVudHN9XHJcbiAgICAgICAgICAgICAgb25SYXRlUG9zdD17b25SYXRlUG9zdH1cclxuICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XHJcbiAgICAgICAgICAgICAgbGlrZUFjdGlvbj17KHRlcm0pID0+IGxpa2VBY3Rpb24odHlwZSwgaXRlbS5pZCwgdGVybSl9XHJcbiAgICAgICAgICAgICAgc2hhcmVBY3Rpb249eygpID0+IHNoYXJlQWN0aW9uKHR5cGUgIT09ICdTaGFyZSc/dHlwZTpzaGFyZWQudHlwZSwgdHlwZSAhPT0gJ1NoYXJlJz9pdGVtLmlkOnNoYXJlZC5pZCl9XHJcbiAgICAgICAgICAgICAgYWN0aW9ucz17XHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7IGhhbmRsZVNob3dDb21tZW50TW9kYWwoaXRlbS5pZCwgaXRlbS50eXBlKSB9IFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPENvbW1lbnRzXHJcbiAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgdHlwZT17aXRlbS50eXBlfVxyXG4gICAgICAgICAgICAgIGRhdGE9e2NvbW1lbnRzfVxyXG4gICAgICAgICAgICAgIG9uVXBkYXRlVGltZWxpbmU9e29uVXBkYXRlVGltZWxpbmV9XHJcbiAgICAgICAgICAgICAgYWN0aXZlUG9zdElkPXthY3RpdmVQb3N0SWR9XHJcbiAgICAgICAgICAgICAgbW9kYWxNb2RlPXttb2RhbE1vZGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcblxyXG4gICAgICA8Q29tbWVudHNNb2RhbFxyXG4gICAgICAgIGFjdGl2ZVBvc3RJZD17YWN0aXZlUG9zdElkfVxyXG4gICAgICAgIHR5cGU9e2FjdGl2ZVR5cGV9XHJcbiAgICAgICAgcG9zdERhdGE9e2NvbW1lbnRzfVxyXG4gICAgICAgIG9uVXBkYXRlVGltZWxpbmU9e29uVXBkYXRlQ29tbWVudHN9XHJcbiAgICAgICAgdGl0bGU9XCJDb21tZW50c1wiXHJcbiAgICAgICAgc2hvdz17bW9kYWxNb2RlfVxyXG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHtjb25zb2xlLmxvZygnY2xvc2UgbW9kYWwnKX19XHJcbiAgICAgICAgZ2V0Q29tbWVudHM9e2dldENvbW1lbnRzfVxyXG4gICAgICAvPlxyXG4gICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gIG1vZGFsQWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKHsgc2hvdyB9LCBkaXNwYXRjaClcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoVGltZWxpbmVQb3N0cyk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=