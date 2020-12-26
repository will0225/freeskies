webpackHotUpdate_N_E("pages/timeline",{

/***/ "./components/timeline/TimelinePosts.js":
/*!**********************************************!*\
  !*** ./components/timeline/TimelinePosts.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/timeline-post.module.scss */ "./components/timeline/styles/timeline-post.module.scss");
/* harmony import */ var _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Comments__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Comments */ "./components/timeline/Comments.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Actions */ "./components/timeline/Actions.js");
/* harmony import */ var _common_TrimText__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/TrimText */ "./components/common/TrimText.js");
/* harmony import */ var react_modal_hook__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-modal-hook */ "./node_modules/react-modal-hook/dist/index.es.js");
/* harmony import */ var _CommentsModal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./CommentsModal */ "./components/timeline/CommentsModal.js");
/* harmony import */ var _profile_PhotosModal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../profile/PhotosModal */ "./components/profile/PhotosModal.js");
/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../common/Avatar */ "./components/common/Avatar.js");
/* harmony import */ var redux_modal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! redux-modal */ "./node_modules/redux-modal/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var configs_API__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! configs/API */ "./configs/API.js");
/* harmony import */ var video_react__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! video-react */ "./node_modules/video-react/lib/index.js");
/* harmony import */ var video_react__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(video_react__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var containers_Photos_storage_PhotoContext__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! containers/Photos/storage/PhotoContext */ "./containers/Photos/storage/PhotoContext.js");
/* harmony import */ var components_common_LinkPreview__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! components/common/LinkPreview */ "./components/common/LinkPreview.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/build/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var components_common_VideoPlayer__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! components/common/VideoPlayer */ "./components/common/VideoPlayer.js");







var _jsxFileName = "D:\\Freeskies-development-\\components\\timeline\\TimelinePosts.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


























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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])([]),
      processingVideos = _useState[0],
      setProcessingVideos = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(null),
      videoData = _useState2[0],
      setVideoData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      notificationEnable = _useState3[0],
      setNotificationEnable = _useState3[1];

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
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee() {
      var url, request, _data, status;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee$(_context) {
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

  var openNotification = function openNotification(placement) {
    antd__WEBPACK_IMPORTED_MODULE_8__["notification"].success({
      message: "New Notification",
      description: placement,
      placement: 'bottomLeft'
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    videoList.map(function (videoItem) {
      if (videoItem.processing) {
        setProcessingVideos([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(processingVideos), [videoItem.id]));
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

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(null),
      activePostId = _useState4[0],
      setActivePostId = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(null),
      activeType = _useState5[0],
      setActiveType = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      modalMode = _useState6[0],
      setModalMode = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])([]),
      comments = _useState7[0],
      setCommnets = _useState7[1];

  var videoRef = [];

  var _useModal = Object(react_modal_hook__WEBPACK_IMPORTED_MODULE_15__["useModal"])(function (_ref3) {
    var open = _ref3["in"];
    return __jsx(containers_Photos_storage_PhotoContext__WEBPACK_IMPORTED_MODULE_24__["PhotosProvider"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 5
      }
    }, __jsx(_profile_PhotosModal__WEBPACK_IMPORTED_MODULE_17__["default"], {
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
        lineNumber: 135,
        columnNumber: 7
      }
    }));
  }),
      _useModal2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useModal, 2),
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
    var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee2(data) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setCommnets([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(comments), [_objectSpread(_objectSpread({}, data === null || data === void 0 ? void 0 : data.comments[0]), {}, {
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
    className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.activity_content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
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
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.post,
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 11
      }
    }, !disableDelete && (account === null || account === void 0 ? void 0 : account.username) == (auth === null || auth === void 0 ? void 0 : (_auth$user = auth.user) === null || _auth$user === void 0 ? void 0 : _auth$user.username) ? __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
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
        lineNumber: 188,
        columnNumber: 76
      }
    }) : null, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.post_header,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.avatar,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
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
        lineNumber: 198,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.user_info,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 15
      }
    }, __jsx("p", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.user_name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 17
      }
    }, fullName))), __jsx("p", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.date,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 13
      }
    }, moment__WEBPACK_IMPORTED_MODULE_12___default()(createdAt).format('MMM DD, YYYY - HH:mm A')), __jsx("p", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.description,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 13
      }
    }, __jsx(_common_TrimText__WEBPACK_IMPORTED_MODULE_14__["default"], {
      limit: 110,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 15
      }
    }, type !== 'Share' ? text : shared.text)), text_links && text_links.map(function (item, i) {
      return __jsx(components_common_LinkPreview__WEBPACK_IMPORTED_MODULE_25__["LinkPreview"], {
        data: item,
        key: item.id + ' ' + i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222,
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
        className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.videos,
        key: i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243,
          columnNumber: 17
        }
      }, !video.processing ? __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(components_common_VideoPlayer__WEBPACK_IMPORTED_MODULE_27__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, videoJsOptions, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245,
          columnNumber: 19
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
          lineNumber: 260,
          columnNumber: 19
        }
      }, "Button For position of Video")) : __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287,
          columnNumber: 23
        }
      }, __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288,
          columnNumber: 21
        }
      }, "Your posting video is on processing..."), __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Progress"], {
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
          lineNumber: 289,
          columnNumber: 21
        }
      })));
    }), images && images.length > 0 ? __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.post_content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 305,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.image, (_classnames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classnames, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.grid_2, images.length == 2), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classnames, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.grid_3, images.length == 3), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classnames, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.grid_4, images.length == 4), _classnames)),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 306,
        columnNumber: 17
      }
    }, images.length == 1 && __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 314,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].blob_tn ? images[0].blob_tn : images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 315,
        columnNumber: 23
      }
    })), images.length == 2 && __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.image_item, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.main_photo),
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].blob_tn ? images[0].blob_tn : images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 325,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[1].blob_tn ? images[1].blob_tn : images[1].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 328,
        columnNumber: 25
      }
    }))), images.length == 3 && __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.image_item, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.main_photo),
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 335,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].blob_tn ? images[0].blob_tn : images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 339,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 341,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[1].blob_tn ? images[1].blob_tn : images[1].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 342,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 344,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[2].blob_tn ? images[2].blob_tn : images[2].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 345,
        columnNumber: 25
      }
    }))), images.length >= 4 && __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.image_item, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.main_photo),
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 352,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].blob_tn ? images[0].blob_tn : images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 356,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 358,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[1].blob_tn ? images[1].blob_tn : images[1].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 359,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 361,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[2].blob_tn ? images[2].blob_tn : images[2].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 362,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 364,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.show_more,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 365,
        columnNumber: 25
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 366,
        columnNumber: 27
      }
    }, "+4")), __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[3].blob_tn ? images[3].blob_tn : images[3].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 368,
        columnNumber: 25
      }
    }))))) : __jsx("div", {
      style: {
        height: 50
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 375,
        columnNumber: 15
      }
    }), type == "Photo" ? blob_tn && __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.post_content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 378,
        columnNumber: 42
      }
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.image),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 379,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 382,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(blob_tn),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 383,
        columnNumber: 19
      }
    })))) : blob_tn && __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.videos,
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 387,
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
        lineNumber: 388,
        columnNumber: 15
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.reactions_shares_status,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 401,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.reactions_status,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 402,
        columnNumber: 15
      }
    }, likeData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(likeData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 404,
        columnNumber: 19
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
      icon: ['far', 'thumbs-up'],
      size: "1x",
      style: {
        cursor: 'pointer'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 405,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 406,
        columnNumber: 21
      }
    }, likeData.length))), hahaData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(hahaData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 410,
        columnNumber: 19
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
      icon: ['far', 'grin'],
      size: "1x",
      style: {
        cursor: 'pointer'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 411,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 412,
        columnNumber: 21
      }
    }, hahaData.length))), heartData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(heartData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 417,
        columnNumber: 19
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
      icon: ['far', 'heart'],
      size: "1x",
      style: {
        cursor: 'pointer'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 418,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 419,
        columnNumber: 21
      }
    }, heartData.length))), wowData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(wowData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 424,
        columnNumber: 19
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
      icon: ['far', 'laugh'],
      size: "1x",
      style: {
        cursor: 'pointer'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 425,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 426,
        columnNumber: 21
      }
    }, wowData.length))), sadData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(sadData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 431,
        columnNumber: 19
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
      icon: ['far', 'frown'],
      size: "1x",
      style: {
        cursor: 'pointer'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 432,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 433,
        columnNumber: 21
      }
    }, sadData.length))))), __jsx(_Actions__WEBPACK_IMPORTED_MODULE_13__["default"], {
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
        lineNumber: 439,
        columnNumber: 13
      }
    }), __jsx(_Comments__WEBPACK_IMPORTED_MODULE_11__["default"], {
      id: item.id,
      type: item.type,
      data: comments,
      onUpdateTimeline: onUpdateTimeline,
      activePostId: activePostId,
      modalMode: modalMode,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 453,
        columnNumber: 13
      }
    }));
  }), __jsx(_CommentsModal__WEBPACK_IMPORTED_MODULE_16__["default"], {
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
      lineNumber: 466,
      columnNumber: 7
    }
  }));
}

_s(TimelinePosts, "kmzgyNUgZg6S9U1PtZP25o/dDm8=", false, function () {
  return [react_modal_hook__WEBPACK_IMPORTED_MODULE_15__["useModal"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aW1lbGluZS9UaW1lbGluZVBvc3RzLmpzIl0sIm5hbWVzIjpbIlRpbWVsaW5lUG9zdHMiLCJkYXRhIiwib25VcGRhdGVUaW1lbGluZSIsIm9uUmF0ZVBvc3QiLCJtb2RhbEFjdGlvbnMiLCJzaGFyZUFjdGlvbiIsImxpa2VBY3Rpb24iLCJkZWxldGVBY3Rpb24iLCJkaXNhYmxlRGVsZXRlIiwicGFyZW50RGl2IiwiYXV0aCIsImtqbSIsImRpc3BhdGNoIiwidXNlU3RhdGUiLCJwcm9jZXNzaW5nVmlkZW9zIiwic2V0UHJvY2Vzc2luZ1ZpZGVvcyIsInZpZGVvRGF0YSIsInNldFZpZGVvRGF0YSIsIm5vdGlmaWNhdGlvbkVuYWJsZSIsInNldE5vdGlmaWNhdGlvbkVuYWJsZSIsImltYWdlc0xpc3QiLCJjb25jYXQiLCJhcHBseSIsIm1hcCIsIml0ZW0iLCJ0eXBlIiwiaW1hZ2VzIiwidmlkZW9MaXN0IiwidmlkZW9zIiwiZ2V0Q29tbWVudHMiLCJjb25zb2xlIiwibG9nIiwiYWN0aXZlVHlwZSIsImFjdGl2ZVBvc3RJZCIsInVybCIsIkFQSSIsIm1ldGhvZCIsImlkIiwib2Zmc2V0IiwiZmlyc3QiLCJoZWFkZXJzIiwidG9rZW4iLCJyZXF1ZXN0Iiwic3RhdHVzIiwic2V0Q29tbW5ldHMiLCJvcGVuTm90aWZpY2F0aW9uIiwicGxhY2VtZW50Iiwibm90aWZpY2F0aW9uIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJkZXNjcmlwdGlvbiIsInVzZUVmZmVjdCIsInZpZGVvSXRlbSIsInByb2Nlc3NpbmciLCJwYXlsb2FkIiwic2V0QWN0aXZlUG9zdElkIiwic2V0QWN0aXZlVHlwZSIsIm1vZGFsTW9kZSIsInNldE1vZGFsTW9kZSIsImNvbW1lbnRzIiwidmlkZW9SZWYiLCJ1c2VNb2RhbCIsIm9wZW4iLCJoaWRlUGhvdG9Nb2RhbCIsInNob3dQaG90b01vZGFsIiwiaGFuZGxlU2hvd0NvbW1lbnRNb2RhbCIsInNob3ciLCJ0b2dnbGVDb21tZW50U2hvdyIsImluZGV4Iiwic2V0Q29tbWVudFNob3ciLCJjb21tZW50U2hvdyIsImdldExpa2VBY3Rpb25Vc2VySW5mbyIsImZpbmFsRGF0YSIsImFjY291bnQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsIm9uVXBkYXRlQ29tbWVudHMiLCJ1c2VyIiwic3R5bGVzIiwiYWN0aXZpdHlfY29udGVudCIsImNyZWF0ZWRBdCIsImNvbW1lbnRzQ291bnQiLCJ0ZXh0Iiwic2hhcmVkIiwiY29tbWVudGVkIiwiYmxvYl90biIsInRodW1ibmFpbCIsInJlYWN0aW9ucyIsInRleHRfbGlua3MiLCJwdXNoIiwicHJvZmlsZVVybCIsInVuZGVmaW5lZCIsInByb2ZpbGVQaG90byIsInNyYyIsImZ1bGxOYW1lIiwidXNlcm5hbWUiLCJsaWtlRGF0YSIsImZpbHRlciIsInJlYWN0aW9uIiwiaGVhcnREYXRhIiwid293RGF0YSIsImhhaGFEYXRhIiwic2FkRGF0YSIsInBvc3QiLCJmb250U2l6ZSIsIm1hcmdpblJpZ2h0IiwiY3Vyc29yIiwicG9zdF9oZWFkZXIiLCJhdmF0YXIiLCJ1c2VyX2luZm8iLCJ1c2VyX25hbWUiLCJkYXRlIiwibW9tZW50IiwiZm9ybWF0IiwiaSIsImxlbmd0aCIsInZpZGVvIiwidmlkZW9Kc09wdGlvbnMiLCJhdXRvcGxheSIsImNvbnRyb2xzIiwic291cmNlcyIsIndpdGhDcmVkZW50aWFscyIsImh0bWw1IiwiaGxzIiwib3ZlcnJpZGVOYXRpdmUiLCJwbGF5IiwiZWwiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicG9zaXRpb25ZIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwieSIsImlubmVySGVpZ2h0IiwicGF1c2UiLCJjdXJyZW50IiwidmlzaWJpbGl0eSIsInBlcmNlbnQiLCJwb3N0X2NvbnRlbnQiLCJjbGFzc25hbWVzIiwiaW1hZ2UiLCJncmlkXzIiLCJncmlkXzMiLCJncmlkXzQiLCJpbWFnZV9pdGVtIiwibWFpbl9waG90byIsInNob3dfbW9yZSIsImhlaWdodCIsInBsYXllciIsInJlYWN0aW9uc19zaGFyZXNfc3RhdHVzIiwicmVhY3Rpb25zX3N0YXR1cyIsInJhdGluZyIsInRlcm0iLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdG9yZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImJpbmRBY3Rpb25DcmVhdG9ycyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxhQUFULE9BY0c7QUFBQTs7QUFBQTs7QUFBQSxNQWJEQyxJQWFDLFFBYkRBLElBYUM7QUFBQSxNQVpEQyxnQkFZQyxRQVpEQSxnQkFZQztBQUFBLE1BVkRDLFVBVUMsUUFWREEsVUFVQztBQUFBLE1BVERDLFlBU0MsUUFUREEsWUFTQztBQUFBLE1BUkRDLFlBUUMsUUFSREEsV0FRQztBQUFBLE1BUERDLFdBT0MsUUFQREEsVUFPQztBQUFBLE1BTkRDLFlBTUMsUUFOREEsWUFNQztBQUFBLE1BTERDLGFBS0MsUUFMREEsYUFLQztBQUFBLDRCQUpEQyxTQUlDO0FBQUEsTUFKREEsU0FJQywrQkFKVyxJQUlYO0FBQUEsTUFIREMsSUFHQyxRQUhEQSxJQUdDO0FBQUEsTUFGREMsR0FFQyxRQUZEQSxHQUVDO0FBQUEsTUFEREMsUUFDQyxRQUREQSxRQUNDOztBQUFBLGtCQUMrQ0Msc0RBQVEsQ0FBQyxFQUFELENBRHZEO0FBQUEsTUFDTUMsZ0JBRE47QUFBQSxNQUN3QkMsbUJBRHhCOztBQUFBLG1CQUVpQ0Ysc0RBQVEsQ0FBQyxJQUFELENBRnpDO0FBQUEsTUFFTUcsU0FGTjtBQUFBLE1BRWlCQyxZQUZqQjs7QUFBQSxtQkFHbURKLHNEQUFRLENB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OztBQXVjVCxJQUFNd0osZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNsQzlJLE9BQUcsRUFBRThJO0FBRDZCLEdBQVo7QUFBQSxDQUF4Qjs7QUFJQSxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUM5SSxRQUFEO0FBQUEsU0FBZTtBQUN4Q1IsZ0JBQVksRUFBRXVKLGlFQUFrQixDQUFDO0FBQUV6RixVQUFJLEVBQUpBLGlEQUFJQTtBQUFOLEtBQUQsRUFBV3RELFFBQVgsQ0FEUTtBQUV4Q0EsWUFBUSxFQUFFQTtBQUY4QixHQUFmO0FBQUEsQ0FBM0I7O0FBS2VnSiwySEFBTyxDQUFDSixlQUFELEVBQWtCRSxrQkFBbEIsQ0FBUCxDQUE2QzFKLGFBQTdDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGltZWxpbmUuNzAzMTliYzQ1ZWZmMGYwMTc5YTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvdGltZWxpbmUtcG9zdC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IFBvcG92ZXIsIFRvb2x0aXAgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBDb21tZW50cyBmcm9tICcuL0NvbW1lbnRzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBBY3Rpb25zIGZyb20gJy4vQWN0aW9ucyc7XHJcbmltcG9ydCBUcmltVGV4dCBmcm9tICcuLi9jb21tb24vVHJpbVRleHQnO1xyXG5pbXBvcnQgeyB1c2VNb2RhbCB9IGZyb20gJ3JlYWN0LW1vZGFsLWhvb2snO1xyXG5pbXBvcnQgQ29tbWVudHNNb2RhbCBmcm9tICcuL0NvbW1lbnRzTW9kYWwnO1xyXG5pbXBvcnQgUGhvdG9zTW9kYWwgZnJvbSAnLi4vcHJvZmlsZS9QaG90b3NNb2RhbCc7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnLi4vY29tbW9uL0F2YXRhcic7XHJcbmltcG9ydCB7IHNob3cgfSBmcm9tICdyZWR1eC1tb2RhbCc7XHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IEFQSSBmcm9tICdjb25maWdzL0FQSSc7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJ3ZpZGVvLXJlYWN0JztcclxuaW1wb3J0IHsgUGhvdG9zUHJvdmlkZXIgfSAgZnJvbSAnY29udGFpbmVycy9QaG90b3Mvc3RvcmFnZS9QaG90b0NvbnRleHQnO1xyXG5pbXBvcnQgeyBMaW5rUHJldmlldyB9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL0xpbmtQcmV2aWV3JztcclxuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xyXG5pbXBvcnQgVmlkZW9QbGF5ZXIgZnJvbSAnY29tcG9uZW50cy9jb21tb24vVmlkZW9QbGF5ZXInO1xyXG5pbXBvcnQgeyBQcm9ncmVzcyB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBCdXR0b24sIFVwbG9hZCwgbWVzc2FnZSwgSW5wdXQsIFRhYnMsIFJhdGUsIG5vdGlmaWNhdGlvbiB9IGZyb20gJ2FudGQnO1xyXG5cclxuZnVuY3Rpb24gVGltZWxpbmVQb3N0cyh7IFxyXG4gIGRhdGEsIFxyXG4gIG9uVXBkYXRlVGltZWxpbmUsIFxyXG4gIC8vIHByb2Nlc3NlZFZpZGVvVXBkYXRlLFxyXG4gIG9uUmF0ZVBvc3QsIFxyXG4gIG1vZGFsQWN0aW9ucywgXHJcbiAgc2hhcmVBY3Rpb24sIFxyXG4gIGxpa2VBY3Rpb24sIFxyXG4gIGRlbGV0ZUFjdGlvbiwgXHJcbiAgZGlzYWJsZURlbGV0ZSwgXHJcbiAgcGFyZW50RGl2ID0gbnVsbCwgXHJcbiAgYXV0aCxcclxuICBram0sXHJcbiAgZGlzcGF0Y2hcclxufSkge1xyXG4gIGNvbnN0IFtwcm9jZXNzaW5nVmlkZW9zLCBzZXRQcm9jZXNzaW5nVmlkZW9zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbdmlkZW9EYXRhLCBzZXRWaWRlb0RhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW25vdGlmaWNhdGlvbkVuYWJsZSwgc2V0Tm90aWZpY2F0aW9uRW5hYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IGltYWdlc0xpc3QgPSBbXS5jb25jYXQuYXBwbHkoW10sIGRhdGEubWFwKGl0ZW0gPT4gXHJcbiAgICB7IFxyXG4gICAgICAgIGlmKGl0ZW0udHlwZSA9PT0gJ1Bob3RvJykge1xyXG4gICAgICAgICAgcmV0dXJuICBpdGVtO1xyXG4gICAgICAgIH0gZWxzZSBpZihpdGVtLnR5cGUgPT09ICdWaWRlb0NsaXAnKSB7XHJcbiAgICAgICAgICByZXR1cm4gIFtdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gIGl0ZW0uaW1hZ2VzIFxyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbiAgKSlcclxuXHJcbiAgY29uc3QgdmlkZW9MaXN0ID0gW10uY29uY2F0LmFwcGx5KFtdLCBkYXRhLm1hcChpdGVtID0+IHtcclxuICAgIGlmKGl0ZW0udHlwZSA9PT0gJ1ZpZGVvQ2xpcCcpIHtcclxuICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdHlwZW9mIGl0ZW0udmlkZW9zICE9PSAndW5kZWZpbmVkJz9pdGVtLnZpZGVvczpbXTtcclxuICAgIH1cclxuICB9KSlcclxuICBcclxuXHJcbiAgY29uc3QgZ2V0Q29tbWVudHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygncG9zdElkJywgYWN0aXZlVHlwZSwgYWN0aXZlUG9zdElkKTtcclxuICAgIGlmKCFhY3RpdmVUeXBlIHx8ICFhY3RpdmVQb3N0SWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIHVybCA9ICcnO1xyXG4gICAgICBpZiAoYWN0aXZlVHlwZSA9PT0gJ1Bob3RvJykge1xyXG4gICAgICAgIHVybCA9ICcvcGhvdG9zL2dldC1jb21tZW50cyc7XHJcbiAgICAgIH0gZWxzZSBpZiAoYWN0aXZlVHlwZSA9PT0gJ1ZpZGVvQ2xpcCcpIHtcclxuICAgICAgICB1cmwgPSAnL3ZpZGVvLWNsaXBzL2dldC1jb21tZW50cyc7XHJcbiAgICAgIH0gZWxzZSBpZiAoYWN0aXZlVHlwZSA9PT0gJ0l0ZW0nKSB7XHJcbiAgICAgICAgdXJsID0gJy9pdGVtcy9nZXQtY29tbWVudHMnO1xyXG4gICAgICB9IGVsc2UgaWYgKGFjdGl2ZVR5cGUgPT09ICdQb3N0Jykge1xyXG4gICAgICAgIHVybCA9ICcvcG9zdHMvZ2V0LWNvbW1lbnRzJztcclxuICAgICAgfSBlbHNlIGlmIChhY3RpdmVUeXBlID09PSAnQ29tbWVudCcpIHtcclxuICAgICAgICB1cmwgPSAnL2NvbW1lbnRzL2dldC1jb21tZW50cyc7XHJcbiAgICAgIH0gZWxzZSBpZiAoYWN0aXZlVHlwZSA9PT0gJ1NoYXJlJykge1xyXG4gICAgICAgIHVybCA9ICcvc2hhcmVzL2dldC1jb21tZW50cyc7XHJcbiAgICAgIH0gZWxzZSBpZiAoYWN0aXZlVHlwZSA9PT0gJ01hcmtldHBsYWNlSXRlbUZvclNhbGUnKSB7XHJcbiAgICAgICAgdXJsID0gJy9tYXJrZXRwbGFjZS9pdGVtcy1mb3Itc2FsZS9nZXQtY29tbWVudHMnO1xyXG4gICAgICB9IGVsc2UgaWYgKGFjdGl2ZVR5cGUgPT09ICdNYXJrZXRwbGFjZUl0ZW1Ub0J1eScpIHtcclxuICAgICAgICB1cmwgPSAnL21hcmtldHBsYWNlL2l0ZW1zLXRvLWJ1eS9nZXQtY29tbWVudHMnO1xyXG4gICAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgIEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBpZDogYWN0aXZlUG9zdElkLFxyXG4gICAgICAgICAgICBvZmZzZXQ6IDAsXHJcbiAgICAgICAgICAgIGZpcnN0OiAyNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG4gICAgICBpZihzdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgc2V0Q29tbW5ldHMoZGF0YSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBvcGVuTm90aWZpY2F0aW9uID0gcGxhY2VtZW50ID0+IHtcclxuICAgIG5vdGlmaWNhdGlvbi5zdWNjZXNzKHtcclxuICAgICAgbWVzc2FnZTogYE5ldyBOb3RpZmljYXRpb25gLFxyXG4gICAgICBkZXNjcmlwdGlvbjogcGxhY2VtZW50LFxyXG4gICAgICBwbGFjZW1lbnQ6ICdib3R0b21MZWZ0JyxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB2aWRlb0xpc3QubWFwKHZpZGVvSXRlbSA9PiB7XHJcbiAgICAgIGlmKHZpZGVvSXRlbS5wcm9jZXNzaW5nKSB7XHJcbiAgICAgICAgc2V0UHJvY2Vzc2luZ1ZpZGVvcyhbLi4ucHJvY2Vzc2luZ1ZpZGVvcywgdmlkZW9JdGVtLmlkXSlcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdBUFBfTk9USUZJQ0FUSU9OJywgcGF5bG9hZDogdHJ1ZSB9KTtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRklDQVRJT05fREFUQScsIHBheWxvYWQ6IHZpZGVvSXRlbS5pZCB9KTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LCBkYXRhKVxyXG4gXHJcbiAgY29uc3QgW2FjdGl2ZVBvc3RJZCwgc2V0QWN0aXZlUG9zdElkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFthY3RpdmVUeXBlLCBzZXRBY3RpdmVUeXBlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFttb2RhbE1vZGUsIHNldE1vZGFsTW9kZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2NvbW1lbnRzLCBzZXRDb21tbmV0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgbGV0IHZpZGVvUmVmID0gW107XHJcbiAgXHJcbiAgY29uc3QgW3Nob3dQaG90b01vZGFsLCBoaWRlUGhvdG9Nb2RhbF0gPSB1c2VNb2RhbCgoeyBpbjogb3BlbiB9KSA9PiAoXHJcbiAgICA8UGhvdG9zUHJvdmlkZXI+XHJcbiAgICAgIDxQaG90b3NNb2RhbFxyXG4gICAgICAgIHRpdGxlPVwiUGhvdG8gZGV0YWlsXCJcclxuICAgICAgICBzaG93TW9kYWw9e29wZW59XHJcbiAgICAgICAgb25DbG9zZT17aGlkZVBob3RvTW9kYWx9XHJcbiAgICAgICAgb25SYXRlUG9zdD17b25SYXRlUG9zdH1cclxuICAgICAgICBkYXRhPXtpbWFnZXNMaXN0fVxyXG4gICAgICAgIGxpa2VBY3Rpb249e2xpa2VBY3Rpb259XHJcbiAgICAgICAgc2hhcmVBY3Rpb249e3NoYXJlQWN0aW9ufVxyXG4gICAgICAgIG9uVXBkYXRlVGltZWxpbmU9e29uVXBkYXRlVGltZWxpbmV9XHJcbiAgICAgICAgYXV0aD17YXV0aH1cclxuICAgICAgLz5cclxuICAgIDwvUGhvdG9zUHJvdmlkZXI+XHJcbiAgKSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNob3dDb21tZW50TW9kYWwgPSAoaWQsIHR5cGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGlkLCB0eXBlKTtcclxuICAgIHNldEFjdGl2ZVBvc3RJZChpZCk7XHJcbiAgICBzZXRBY3RpdmVUeXBlKHR5cGUpO1xyXG4gICAgc2V0TW9kYWxNb2RlKCFtb2RhbE1vZGUpO1xyXG4gICAgbW9kYWxBY3Rpb25zLnNob3coJ2NvbW1lbnRNb2RhbCcsIHsgaWQ6IGFjdGl2ZVBvc3RJZCB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVDb21tZW50U2hvdyA9IChpbmRleCkgPT5cclxuICAgIHNldENvbW1lbnRTaG93KGNvbW1lbnRTaG93ID09PSBpbmRleCA/IG51bGwgOiBpbmRleCk7XHJcblxyXG4gIGNvbnN0IGdldExpa2VBY3Rpb25Vc2VySW5mbyA9IChkYXRhKSA9PiB7XHJcbiAgICB2YXIgZmluYWxEYXRhID0gJyc7XHJcbiAgICBkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgZmluYWxEYXRhID0gZmluYWxEYXRhICsgJyAnICsgaXRlbS5hY2NvdW50LmZpcnN0TmFtZSArICcnICsgaXRlbS5hY2NvdW50Lmxhc3ROYW1lIDtcclxuICAgIH0pXHJcbiAgICByZXR1cm4gZmluYWxEYXRhO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25VcGRhdGVDb21tZW50cyA9IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICBzZXRDb21tbmV0cyhbLi4uY29tbWVudHMsIHsuLi5kYXRhPy5jb21tZW50c1swXSwgYWNjb3VudDogYXV0aC51c2VyfV0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aXZpdHlfY29udGVudH0gPlxyXG4gICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgdmFyIHsgYWNjb3VudCwgY3JlYXRlZEF0LCB0eXBlLCBjb21tZW50cywgY29tbWVudHNDb3VudCwgdGV4dCwgaW1hZ2VzLCB2aWRlb3MsIHNoYXJlZCwgY29tbWVudGVkLCBibG9iX3RuLCB0aHVtYm5haWwsIHJlYWN0aW9ucywgdGV4dF9saW5rcyB9ID0gaXRlbTtcclxuICAgICAgICB2aWRlb1JlZi5wdXNoKG51bGwpO1xyXG4gICAgICAgIGNvbnN0IHByb2ZpbGVVcmwgPSBhY2NvdW50ICE9PSBudWxsICYmIGFjY291bnQgIT09IHVuZGVmaW5lZCA/IGAke2FjY291bnQucHJvZmlsZVBob3RvPy5zcmN9YCA6IG51bGxcclxuICAgICAgICBjb25zdCBmdWxsTmFtZSA9IGAke2FjY291bnQ/LmZpcnN0TmFtZX0gJHthY2NvdW50Py5sYXN0TmFtZX1gO1xyXG4gICAgICAgIGNvbnN0IHVzZXJuYW1lID0gYWNjb3VudD8udXNlcm5hbWU7XHJcbiAgICAgICAgY29uc3QgbGlrZURhdGEgPSByZWFjdGlvbnM/IHJlYWN0aW9ucz8uZmlsdGVyKGl0ZW0gPT4gaXRlbS5yZWFjdGlvbiA9PSAnTElLRScpOltdO1xyXG4gICAgICAgIGNvbnN0IGhlYXJ0RGF0YSA9ICByZWFjdGlvbnM/IHJlYWN0aW9ucz8uZmlsdGVyKGl0ZW0gPT4gaXRlbS5yZWFjdGlvbiA9PSAnSEVBUlQnKTpbXTtcclxuICAgICAgICBjb25zdCB3b3dEYXRhID0gcmVhY3Rpb25zID8gcmVhY3Rpb25zPy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlYWN0aW9uID09ICdXT1cnKTpbXTtcclxuICAgICAgICBjb25zdCBoYWhhRGF0YSA9IHJlYWN0aW9ucyA/IHJlYWN0aW9ucz8uZmlsdGVyKGl0ZW0gPT4gaXRlbS5yZWFjdGlvbiA9PSAnSEFIQScpOltdO1xyXG4gICAgICAgIGNvbnN0IHNhZERhdGEgPSByZWFjdGlvbnMgPyByZWFjdGlvbnM/LmZpbHRlcihpdGVtID0+IGl0ZW0ucmVhY3Rpb24gPT0gJ1NBRCcpOltdO1xyXG4gICAgICBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0fSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgeyFkaXNhYmxlRGVsZXRlICYmIChhY2NvdW50Py51c2VybmFtZSA9PSBhdXRoPy51c2VyPy51c2VybmFtZSk/PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICd3aW5kb3ctY2xvc2UnXX0gc3R5bGU9e3tcclxuICAgICAgICAgICAgICBmbG9hdDogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogMjUsXHJcbiAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDEwLFxyXG4gICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUFjdGlvbihpdGVtLmlkLCB0eXBlKX1cclxuICAgICAgICAgICAgLz46bnVsbH1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0X2hlYWRlcn0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9PlxyXG4gICAgICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgICB0ZXh0PXtmdWxsTmFtZX1cclxuICAgICAgICAgICAgICAgICAgdXJsPXtwcm9maWxlVXJsfVxyXG4gICAgICAgICAgICAgICAgICBzaXplPXs2MH1cclxuICAgICAgICAgICAgICAgICAgYm9yZGVyU2l6ZT17M31cclxuICAgICAgICAgICAgICAgICAgdXNlcm5hbWU9e3VzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyX2luZm99PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudXNlcl9uYW1lfT57ZnVsbE5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZX0+XHJcbiAgICAgICAgICAgICAge21vbWVudChjcmVhdGVkQXQpLmZvcm1hdCgnTU1NIERELCBZWVlZIC0gSEg6bW0gQScpfVxyXG4gICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICAgICAgPFRyaW1UZXh0IGxpbWl0PXsxMTB9PlxyXG4gICAgICAgICAgICAgICAgeyB0eXBlIT09J1NoYXJlJz90ZXh0OnNoYXJlZC50ZXh0IH1cclxuICAgICAgICAgICAgICA8L1RyaW1UZXh0PlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7dGV4dF9saW5rcyAmJiB0ZXh0X2xpbmtzLm1hcCgoaXRlbSwgaSkgPT4gXHJcbiAgICAgICAgICAgICAgPExpbmtQcmV2aWV3IGRhdGE9e2l0ZW19IGtleT17aXRlbS5pZCArICcgJyArIGl9Lz4gIFxyXG4gICAgICAgICAgICApIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7dmlkZW9zICYmIHZpZGVvcy5sZW5ndGggPiAwICYmIHZpZGVvcy5tYXAoKHZpZGVvLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBsZXQgdmlkZW9Kc09wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNvdXJjZXM6IFt7XHJcbiAgICAgICAgICAgICAgICAgIHNyYzogYGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7dmlkZW8uc3JjfWAsXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYXBwbGljYXRpb24veC1tcGVnVVJMXCIsXHJcbiAgICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgaHRtbDU6IHtcclxuICAgICAgICAgICAgICAgICAgICBobHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIG92ZXJyaWRlTmF0aXZlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aWRlb3N9IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgIHshdmlkZW8ucHJvY2Vzc2luZz88PlxyXG4gICAgICAgICAgICAgICAgICA8VmlkZW9QbGF5ZXIgeyAuLi52aWRlb0pzT3B0aW9ucyB9IC8+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8VmlkZW9QbGF5ZXIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiNjBcIiBzb3VyY2U9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke3ZpZGVvLnNyY31gfSAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgey8qIDxQbGF5ZXJcclxuICAgICAgICAgICAgICAgICAgICBwbGF5c0lubGluZVxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5XHJcbiAgICAgICAgICAgICAgICAgICAgbXV0ZWRcclxuICAgICAgICAgICAgICAgICAgICBwb3N0ZXI9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke3ZpZGVvLnRodW1ibmFpbC5zcmN9YH1cclxuICAgICAgICAgICAgICAgICAgICByZWY9e3BsYXllciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZih2aWRlb1JlZiAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWRlb1JlZltpbmRleF0gPSBwbGF5ZXI7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c291cmNlIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7dmlkZW8uc3JjfWB9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvUGxheWVyPiAgKi99XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdmlkZW9SZWZbaW5kZXhdLnBsYXkoKX0gcmVmPXtlbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlbCkgcmV0dXJuOyBcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYodmlkZW9SZWYgJiYgdmlkZW9SZWZbaW5kZXhdICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3NpdGlvblkgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihwb3NpdGlvblkgPiAod2luZG93LmlubmVySGVpZ2h0LzIpICYmIHBvc2l0aW9uWSA8IHdpbmRvdy5pbm5lckhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvUmVmW2luZGV4XS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW9SZWZbaW5kZXhdLnBhdXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHBhcmVudERpdiAhPT0gbnVsbCAmJiBwYXJlbnREaXY/LmN1cnJlbnQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHBhcmVudERpdj8uY3VycmVudD8uYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih2aWRlb1JlZiAmJiB2aWRlb1JlZltpbmRleF0gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zaXRpb25ZID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZihwb3NpdGlvblkgPiAod2luZG93LmlubmVySGVpZ2h0LzIpICYmIHBvc2l0aW9uWSA8IHdpbmRvdy5pbm5lckhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW9SZWZbaW5kZXhdLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW9SZWZbaW5kZXhdLnBhdXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHZpc2liaWxpdHk6ICdoaWRkZW4nIH19XHJcbiAgICAgICAgICAgICAgICAgID5CdXR0b24gRm9yIHBvc2l0aW9uIG9mIFZpZGVvPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvPjo8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPllvdXIgcG9zdGluZyB2aWRlbyBpcyBvbiBwcm9jZXNzaW5nLi4uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQcm9ncmVzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlQ29sb3I9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzAlJzogJyMxMDhlZTknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnMTAwJSc6ICcjODdkMDY4JyxcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBwZXJjZW50PXs5OX1cclxuICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdD17cGVyY2VudCA9PiBgYH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICApfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHtpbWFnZXMgJiYgaW1hZ2VzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0X2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmltYWdlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgW3N0eWxlcy5ncmlkXzJdOiBpbWFnZXMubGVuZ3RoID09IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgW3N0eWxlcy5ncmlkXzNdOiBpbWFnZXMubGVuZ3RoID09IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgW3N0eWxlcy5ncmlkXzRdOiBpbWFnZXMubGVuZ3RoID09IDQsXHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7aW1hZ2VzLmxlbmd0aCA9PSAxICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX2l0ZW19IG9uQ2xpY2s9e3Nob3dQaG90b01vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMF0uYmxvYl90bj9pbWFnZXNbMF0uYmxvYl90bjppbWFnZXNbMF0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICB7aW1hZ2VzLmxlbmd0aCA9PSAyICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmltYWdlX2l0ZW0sIHN0eWxlcy5tYWluX3Bob3RvKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c2hvd1Bob3RvTW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMF0uYmxvYl90bj9pbWFnZXNbMF0uYmxvYl90bjppbWFnZXNbMF0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfaXRlbX0gb25DbGljaz17c2hvd1Bob3RvTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzFdLmJsb2JfdG4/aW1hZ2VzWzFdLmJsb2JfdG46aW1hZ2VzWzFdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICB7aW1hZ2VzLmxlbmd0aCA9PSAzICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmltYWdlX2l0ZW0sIHN0eWxlcy5tYWluX3Bob3RvKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c2hvd1Bob3RvTW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMF0uYmxvYl90bj9pbWFnZXNbMF0uYmxvYl90bjppbWFnZXNbMF0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfaXRlbX0gb25DbGljaz17c2hvd1Bob3RvTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzFdLmJsb2JfdG4/aW1hZ2VzWzFdLmJsb2JfdG46aW1hZ2VzWzFdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX2l0ZW19IG9uQ2xpY2s9e3Nob3dQaG90b01vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1syXS5ibG9iX3RuP2ltYWdlc1syXS5ibG9iX3RuOmltYWdlc1syXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAge2ltYWdlcy5sZW5ndGggPj0gNCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5pbWFnZV9pdGVtLCBzdHlsZXMubWFpbl9waG90byl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dQaG90b01vZGFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzBdLmJsb2JfdG4/aW1hZ2VzWzBdLmJsb2JfdG46aW1hZ2VzWzBdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX2l0ZW19IG9uQ2xpY2s9e3Nob3dQaG90b01vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1sxXS5ibG9iX3RuP2ltYWdlc1sxXS5ibG9iX3RuOmltYWdlc1sxXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZV9pdGVtfSBvbkNsaWNrPXtzaG93UGhvdG9Nb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMl0uYmxvYl90bj9pbWFnZXNbMl0uYmxvYl90bjppbWFnZXNbMl0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfaXRlbX0gb25DbGljaz17c2hvd1Bob3RvTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNob3dfbW9yZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+KzQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzNdLmJsb2JfdG4/aW1hZ2VzWzNdLmJsb2JfdG46aW1hZ2VzWzNdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogNTAgfX0gLz5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHt0eXBlID09IFwiUGhvdG9cIj8gYmxvYl90biAmJiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RfY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5pbWFnZSl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfaXRlbX0gb25DbGljaz17c2hvd1Bob3RvTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7YmxvYl90bn1gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+OlxyXG4gICAgICAgICAgICBibG9iX3RuICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmlkZW9zfSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICA8UGxheWVyXHJcbiAgICAgICAgICAgICAgICBwbGF5c0lubGluZVxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlcclxuICAgICAgICAgICAgICAgIG11dGVkXHJcbiAgICAgICAgICAgICAgICBwb3N0ZXI9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke3RodW1ibmFpbC5zcmN9YH1cclxuICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7YmxvYl90bn1gfVxyXG4gICAgICAgICAgICAgICAgcmVmPXtwbGF5ZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAvLyB2aWRlb1JlZiA9IHBsYXllcjtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlYWN0aW9uc19zaGFyZXNfc3RhdHVzfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlYWN0aW9uc19zdGF0dXN9PlxyXG4gICAgICAgICAgICAgICAgeyBsaWtlRGF0YS5sZW5ndGggPiAwICYmIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPXtnZXRMaWtlQWN0aW9uVXNlckluZm8obGlrZURhdGEpfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ3RodW1icy11cCddfSBzaXplPVwiMXhcIiAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcid9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2xpa2VEYXRhLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD48Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHsgaGFoYURhdGEubGVuZ3RoID4gMCAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKGhhaGFEYXRhKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdncmluJ119IHNpemU9XCIxeFwiICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJ319Lz4gXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2hhaGFEYXRhLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7IGhlYXJ0RGF0YS5sZW5ndGggPiAwICYmIDw+IFxyXG4gICAgICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKGhlYXJ0RGF0YSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAnaGVhcnQnXX0gc2l6ZT1cIjF4XCIgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInfX0vPiBcclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aGVhcnREYXRhLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7IHdvd0RhdGEubGVuZ3RoID4gMCAmJiA8PiBcclxuICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9e2dldExpa2VBY3Rpb25Vc2VySW5mbyh3b3dEYXRhKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdsYXVnaCddfSBzaXplPVwiMXhcIiAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcid9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3dvd0RhdGEubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICA8Lz4gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7IHNhZERhdGEubGVuZ3RoID4gMCAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKHNhZERhdGEpfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ2Zyb3duJ119IHNpemU9XCIxeFwiICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJ319Lz4gXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3NhZERhdGEubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxBY3Rpb25zXHJcbiAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgdHlwZT17aXRlbS50eXBlfVxyXG4gICAgICAgICAgICAgIHBvc3RSYXRlPXtpdGVtLnJhdGluZ31cclxuICAgICAgICAgICAgICBjb21tZW50cz17Y29tbWVudHN9XHJcbiAgICAgICAgICAgICAgb25SYXRlUG9zdD17b25SYXRlUG9zdH1cclxuICAgICAgICAgICAgICBjb21tZW50c0NvdW50PXtjb21tZW50c0NvdW50fVxyXG4gICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cclxuICAgICAgICAgICAgICBsaWtlQWN0aW9uPXsodGVybSkgPT4gbGlrZUFjdGlvbih0eXBlLCBpdGVtLmlkLCB0ZXJtKX1cclxuICAgICAgICAgICAgICBzaGFyZUFjdGlvbj17KCkgPT4gc2hhcmVBY3Rpb24odHlwZSAhPT0gJ1NoYXJlJz90eXBlOnNoYXJlZC50eXBlLCB0eXBlICE9PSAnU2hhcmUnP2l0ZW0uaWQ6c2hhcmVkLmlkKX1cclxuICAgICAgICAgICAgICBhY3Rpb25zPXtcclxuICAgICAgICAgICAgICAgICgpID0+IHsgaGFuZGxlU2hvd0NvbW1lbnRNb2RhbChpdGVtLmlkLCBpdGVtLnR5cGUpIH0gXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Q29tbWVudHNcclxuICAgICAgICAgICAgICBpZD17aXRlbS5pZH1cclxuICAgICAgICAgICAgICB0eXBlPXtpdGVtLnR5cGV9XHJcbiAgICAgICAgICAgICAgZGF0YT17Y29tbWVudHN9XHJcbiAgICAgICAgICAgICAgb25VcGRhdGVUaW1lbGluZT17b25VcGRhdGVUaW1lbGluZX1cclxuICAgICAgICAgICAgICBhY3RpdmVQb3N0SWQ9e2FjdGl2ZVBvc3RJZH1cclxuICAgICAgICAgICAgICBtb2RhbE1vZGU9e21vZGFsTW9kZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuXHJcbiAgICAgIDxDb21tZW50c01vZGFsXHJcbiAgICAgICAgYWN0aXZlUG9zdElkPXthY3RpdmVQb3N0SWR9XHJcbiAgICAgICAgdHlwZT17YWN0aXZlVHlwZX1cclxuICAgICAgICBwb3N0RGF0YT17Y29tbWVudHN9XHJcbiAgICAgICAgb25VcGRhdGVUaW1lbGluZT17b25VcGRhdGVDb21tZW50c31cclxuICAgICAgICB0aXRsZT1cIkNvbW1lbnRzXCJcclxuICAgICAgICBzaG93PXttb2RhbE1vZGV9XHJcbiAgICAgICAgb25DbG9zZT17KCkgPT4ge2NvbnNvbGUubG9nKCdjbG9zZSBtb2RhbCcpfX1cclxuICAgICAgICBnZXRDb21tZW50cz17Z2V0Q29tbWVudHN9XHJcbiAgICAgIC8+XHJcbiAgICAgXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RvcmUpID0+ICh7XHJcbiAga2ptOiBzdG9yZSxcclxufSk7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgbW9kYWxBY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoeyBzaG93IH0sIGRpc3BhdGNoKSxcclxuICBkaXNwYXRjaDogZGlzcGF0Y2hcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShUaW1lbGluZVBvc3RzKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==