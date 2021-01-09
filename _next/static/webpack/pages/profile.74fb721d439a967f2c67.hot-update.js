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
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Comments__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Comments */ "./components/timeline/Comments.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Actions */ "./components/timeline/Actions.js");
/* harmony import */ var _common_TrimText__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/TrimText */ "./components/common/TrimText.js");
/* harmony import */ var react_modal_hook__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-modal-hook */ "./node_modules/react-modal-hook/dist/index.es.js");
/* harmony import */ var _CommentsModal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./CommentsModal */ "./components/timeline/CommentsModal.js");
/* harmony import */ var _profile_PhotosModal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../profile/PhotosModal */ "./components/profile/PhotosModal.js");
/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/Avatar */ "./components/common/Avatar.js");
/* harmony import */ var redux_modal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! redux-modal */ "./node_modules/redux-modal/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var configs_API__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! configs/API */ "./configs/API.js");
/* harmony import */ var video_react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! video-react */ "./node_modules/video-react/lib/index.js");
/* harmony import */ var video_react__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(video_react__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var containers_Photos_storage_PhotoContext__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! containers/Photos/storage/PhotoContext */ "./containers/Photos/storage/PhotoContext.js");
/* harmony import */ var components_common_LinkPreview__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! components/common/LinkPreview */ "./components/common/LinkPreview.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/build/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var components_common_VideoPlayer__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! components/common/VideoPlayer */ "./components/common/VideoPlayer.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");






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
              return Object(configs_API__WEBPACK_IMPORTED_MODULE_20__["default"])({
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

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null),
      activeImageId = _useState6[0],
      setActiveImageId = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(imagesList),
      imageData = _useState7[0],
      setImageData = _useState7[1];

  var videoRef = [];

  var _useModal = Object(react_modal_hook__WEBPACK_IMPORTED_MODULE_13__["useModal"])(function (_ref3) {
    var open = _ref3["in"];
    return __jsx(containers_Photos_storage_PhotoContext__WEBPACK_IMPORTED_MODULE_22__["PhotosProvider"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 5
      }
    }, __jsx(_profile_PhotosModal__WEBPACK_IMPORTED_MODULE_15__["default"], {
      title: "Photo detail",
      showModal: open,
      onClose: hidePhotoModal,
      onRatePost: onRatePost,
      data: imageData,
      likeAction: _likeAction,
      shareAction: _shareAction,
      onUpdateTimeline: onUpdateTimeline,
      auth: auth,
      activeImageId: activeImageId,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 7
      }
    }));
  }, [imageData]),
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

  var ImageSorting = function ImageSorting(activeImageId) {
    var carouselData = [];
    var firstData = [];
    var secondData = [];

    for (var i = 0; i < imageData.length; i++) {
      if (imageData[i].src === activeImageId) {
        firstData = imageData.slice(i, imageData.length);
        break;
      }

      secondData.push(imageData[i]);
    }

    carouselData = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(firstData), secondData);
    setImageData(carouselData);
  };

  return __jsx("div", {
    className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.activity_content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
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
        text_links = item.text_links,
        tags = item.tags;
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
        lineNumber: 208,
        columnNumber: 11
      }
    }, !disableDelete && (account === null || account === void 0 ? void 0 : account.username) == (auth === null || auth === void 0 ? void 0 : (_auth$user = auth.user) === null || _auth$user === void 0 ? void 0 : _auth$user.username) ? __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
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
        lineNumber: 209,
        columnNumber: 76
      }
    }) : null, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.post_header,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.avatar,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 15
      }
    }, __jsx(_common_Avatar__WEBPACK_IMPORTED_MODULE_16__["default"], {
      text: fullName,
      url: profileUrl,
      size: 60,
      borderSize: 3,
      username: username,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.user_info,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 15
      }
    }, __jsx("p", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.user_name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 17
      }
    }, fullName))), __jsx("p", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.date,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 13
      }
    }, moment__WEBPACK_IMPORTED_MODULE_10___default()(createdAt).format('MMM DD, YYYY - HH:mm A')), tags && tags.map(function (tag) {
      return __jsx("p", {
        className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.tags,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238,
          columnNumber: 15
        }
      }, "#", tag);
    }), __jsx("p", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.description,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 13
      }
    }, __jsx(_common_TrimText__WEBPACK_IMPORTED_MODULE_12__["default"], {
      limit: 110,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 15
      }
    }, type !== 'Share' ? text : shared.text)), text_links && text_links.map(function (item, i) {
      return __jsx(components_common_LinkPreview__WEBPACK_IMPORTED_MODULE_23__["LinkPreview"], {
        data: item,
        key: item.id + ' ' + i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250,
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
          lineNumber: 273,
          columnNumber: 17
        }
      }, !video.processing ? __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(video_react__WEBPACK_IMPORTED_MODULE_21__["Player"], {
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
          lineNumber: 277,
          columnNumber: 19
        }
      }, __jsx("source", {
        src: "https://www.freeskies.com/static/".concat(video.src),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288,
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
          lineNumber: 290,
          columnNumber: 19
        }
      }, "Button For position of Video")) : __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317,
          columnNumber: 23
        }
      }, __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318,
          columnNumber: 21
        }
      }, "Your posting video is on processing..."), __jsx(antd__WEBPACK_IMPORTED_MODULE_26__["Progress"], {
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
          lineNumber: 319,
          columnNumber: 21
        }
      })));
    }), images && images.length > 0 ? __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.post_content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 334,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image, (_classnames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.grid_2, images.length == 2), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.grid_3, images.length == 3), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.grid_4, images.length == 4), _classnames)),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 335,
        columnNumber: 17
      }
    }, images.length == 1 && __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image_item,
      onClick: function onClick() {
        setActiveImageId(images[0].src);
        ImageSorting(images[0].src);
        showPhotoModal();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 343,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].blob_tn ? images[0].blob_tn : images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 351,
        columnNumber: 23
      }
    })), images.length == 2 && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image_item, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.main_photo),
      onClick: function onClick() {
        setActiveImageId(images[0].src);
        ImageSorting(images[0].src);
        showPhotoModal();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 357,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].blob_tn ? images[0].blob_tn : images[0].src),
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
        setActiveImageId(images[1].src);
        ImageSorting(images[1].src);
        showPhotoModal();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 369,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[1].blob_tn ? images[1].blob_tn : images[1].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 378,
        columnNumber: 25
      }
    }))), images.length == 3 && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image_item, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.main_photo),
      onClick: function onClick() {
        setActiveImageId(images[0].src);
        ImageSorting(images[0].src);
        showPhotoModal();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 385,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].blob_tn ? images[0].blob_tn : images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 395,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image_item,
      onClick: function onClick() {
        setActiveImageId(images[1].src);
        ImageSorting(images[1].src);
        showPhotoModal();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 397,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[1].blob_tn ? images[1].blob_tn : images[1].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 406,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image_item,
      onClick: function onClick() {
        setActiveImageId(images[2].src);
        ImageSorting(images[2].src);
        showPhotoModal();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 408,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[2].blob_tn ? images[2].blob_tn : images[2].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 417,
        columnNumber: 25
      }
    }))), images.length >= 4 && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image_item, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.main_photo),
      onClick: function onClick() {
        setActiveImageId(images[0].src);
        ImageSorting(images[0].src);
        showPhotoModal();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 424,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].blob_tn ? images[0].blob_tn : images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 434,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image_item,
      onClick: function onClick() {
        setActiveImageId(images[1].src);
        ImageSorting(images[1].src);
        showPhotoModal();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 436,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[1].blob_tn ? images[1].blob_tn : images[1].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 445,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image_item,
      onClick: function onClick() {
        setActiveImageId(images[2].src);
        ImageSorting(images[2].src);
        showPhotoModal();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 447,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[2].blob_tn ? images[2].blob_tn : images[2].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 456,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image_item,
      onClick: function onClick() {
        setActiveImageId(images[3].src);
        ImageSorting(images[3].src);
        showPhotoModal();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 458,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.show_more,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 467,
        columnNumber: 25
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 468,
        columnNumber: 27
      }
    }, "+4")), __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[3].blob_tn ? images[3].blob_tn : images[3].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 470,
        columnNumber: 25
      }
    }))))) : __jsx("div", {
      style: {
        height: 50
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 477,
        columnNumber: 15
      }
    }), type == "Photo" ? blob_tn && __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.post_content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 480,
        columnNumber: 42
      }
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 481,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image_item,
      onClick: function onClick() {
        setActiveImageId(blob_tn);
        ImageSorting(blob_tn);
        showPhotoModal();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 484,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(blob_tn),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 493,
        columnNumber: 19
      }
    })))) : blob_tn && __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.videos,
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 497,
        columnNumber: 24
      }
    }, __jsx(video_react__WEBPACK_IMPORTED_MODULE_21__["Player"], {
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
        lineNumber: 498,
        columnNumber: 15
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.reactions_shares_status,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 512,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.reactions_status,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 513,
        columnNumber: 15
      }
    }, likeData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_26__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(likeData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 515,
        columnNumber: 19
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
      icon: ['far', 'thumbs-up'],
      size: "1x",
      style: {
        cursor: 'pointer'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 516,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 517,
        columnNumber: 21
      }
    }, likeData.length))), hahaData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_26__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(hahaData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 521,
        columnNumber: 19
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
      icon: ['far', 'grin'],
      size: "1x",
      style: {
        cursor: 'pointer'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 522,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 523,
        columnNumber: 21
      }
    }, hahaData.length))), heartData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_26__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(heartData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 528,
        columnNumber: 19
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
      icon: ['far', 'heart'],
      size: "1x",
      style: {
        cursor: 'pointer'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 529,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 530,
        columnNumber: 21
      }
    }, heartData.length))), wowData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_26__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(wowData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 535,
        columnNumber: 19
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
      icon: ['far', 'laugh'],
      size: "1x",
      style: {
        cursor: 'pointer'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 536,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 537,
        columnNumber: 21
      }
    }, wowData.length))), sadData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_26__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(sadData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 542,
        columnNumber: 19
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
      icon: ['far', 'frown'],
      size: "1x",
      style: {
        cursor: 'pointer'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 543,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 544,
        columnNumber: 21
      }
    }, sadData.length))))), __jsx(_Actions__WEBPACK_IMPORTED_MODULE_11__["default"], {
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
        lineNumber: 551,
        columnNumber: 13
      }
    }), __jsx(_Comments__WEBPACK_IMPORTED_MODULE_9__["default"], {
      id: item.id,
      type: item.type,
      data: comments,
      onUpdateTimeline: onUpdateTimeline,
      activePostId: activePostId,
      modalMode: modalMode,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 566,
        columnNumber: 13
      }
    }));
  }), __jsx(_CommentsModal__WEBPACK_IMPORTED_MODULE_14__["default"], {
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
      lineNumber: 578,
      columnNumber: 7
    }
  }));
}

_s(TimelinePosts, "OJ5q7GmVYGas89QJXgI7tAdS28M=", false, function () {
  return [react_modal_hook__WEBPACK_IMPORTED_MODULE_13__["useModal"]];
});

_c = TimelinePosts;

var mapStateToProps = function mapStateToProps(store) {
  return {
    kjm: store
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    modalActions: Object(redux__WEBPACK_IMPORTED_MODULE_18__["bindActionCreators"])({
      show: redux_modal__WEBPACK_IMPORTED_MODULE_17__["show"]
    }, dispatch),
    dispatch: dispatch
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_19__["connect"])(mapStateToProps, mapDispatchToProps)(TimelinePosts));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aW1lbGluZS9UaW1lbGluZVBvc3RzLmpzIl0sIm5hbWVzIjpbIlRpbWVsaW5lUG9zdHMiLCJkYXRhIiwib25VcGRhdGVUaW1lbGluZSIsIm9uUmF0ZVBvc3QiLCJtb2RhbEFjdGlvbnMiLCJzaGFyZUFjdGlvbiIsImxpa2VBY3Rpb24iLCJkZWxldGVBY3Rpb24iLCJkaXNhYmxlRGVsZXRlIiwicGFyZW50RGl2IiwiYXV0aCIsImtqbSIsImRpc3BhdGNoIiwidXNlU3RhdGUiLCJwcm9jZXNzaW5nVmlkZW9zIiwic2V0UHJvY2Vzc2luZ1ZpZGVvcyIsImltYWdlc0xpc3QiLCJjb25jYXQiLCJhcHBseSIsIm1hcCIsIml0ZW0iLCJ0eXBlIiwiaW1hZ2VzIiwidmlkZW9MaXN0IiwidmlkZW9zIiwiZ2V0Q29tbWVudHMiLCJhY3RpdmVUeXBlIiwiYWN0aXZlUG9zdElkIiwidXJsIiwiQVBJIiwibWV0aG9kIiwiaWQiLCJvZmZzZXQiLCJmaXJzdCIsImhlYWRlcnMiLCJ0b2tlbiIsInJlcXVlc3QiLCJzdGF0dXMiLCJzZXRDb21tbmV0cyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJ2aWRlb0l0ZW0iLCJwcm9jZXNzaW5nIiwicGF5bG9hZCIsInNldEFjdGl2ZVBvc3RJZCIsInNldEFjdGl2ZVR5cGUiLCJtb2RhbE1vZGUiLCJzZXRNb2RhbE1vZGUiLCJjb21tZW50cyIsImFjdGl2ZUltYWdlSWQiLCJzZXRBY3RpdmVJbWFnZUlkIiwiaW1hZ2VEYXRhIiwic2V0SW1hZ2VEYXRhIiwidmlkZW9SZWYiLCJ1c2VNb2RhbCIsIm9wZW4iLCJoaWRlUGhvdG9Nb2RhbCIsInNob3dQaG90b01vZGFsIiwiaGFuZGxlU2hvd0NvbW1lbnRNb2RhbCIsInNob3ciLCJ0b2dnbGVDb21tZW50U2hvdyIsImluZGV4Iiwic2V0Q29tbWVudFNob3ciLCJjb21tZW50U2hvdyIsImdldExpa2VBY3Rpb25Vc2VySW5mbyIsImZpbmFsRGF0YSIsImFjY291bnQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsIm9uVXBkYXRlQ29tbWVudHMiLCJ1c2VyIiwiSW1hZ2VTb3J0aW5nIiwiY2Fyb3VzZWxEYXRhIiwiZmlyc3REYXRhIiwic2Vjb25kRGF0YSIsImkiLCJsZW5ndGgiLCJzcmMiLCJzbGljZSIsInB1c2giLCJzdHlsZXMiLCJhY3Rpdml0eV9jb250ZW50IiwiY3JlYXRlZEF0IiwiY29tbWVudHNDb3VudCIsInRleHQiLCJzaGFyZWQiLCJjb21tZW50ZWQiLCJibG9iX3RuIiwidGh1bWJuYWlsIiwicmVhY3Rpb25zIiwidGV4dF9saW5rcyIsInRhZ3MiLCJwcm9maWxlVXJsIiwidW5kZWZpbmVkIiwicHJvZmlsZVBob3RvIiwiZnVsbE5hbWUiLCJ1c2VybmFtZSIsImxpa2VEYXRhIiwiZmlsdGVyIiwicmVhY3Rpb24iLCJoZWFydERhdGEiLCJ3b3dEYXRhIiwiaGFoYURhdGEiLCJzYWREYXRhIiwicG9zdCIsImZvbnRTaXplIiwibWFyZ2luUmlnaHQiLCJjdXJzb3IiLCJwb3N0X2hlYWRlciIsImF2YXRhciIsInVzZXJfaW5mbyIsInVzZXJfbmFtZSIsImRhdGUiLCJtb21lbnQiLCJmb3JtYXQiLCJ0YWciLCJkZXNjcmlwdGlvbiIsInZpZGVvIiwidmlkZW9Kc09wdGlvbnMiLCJhdXRvcGxheSIsIndpZHRoIiwibXV0ZWQiLCJjb250cm9scyIsInBvc3RlciIsInNvdXJjZXMiLCJ3aXRoQ3JlZGVudGlhbHMiLCJodG1sNSIsImhscyIsIm92ZXJyaWRlTmF0aXZlIiwicGxheWVyIiwicGxheSIsImVsIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBvc2l0aW9uWSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInkiLCJpbm5lckhlaWdodCIsInBhdXNlIiwiY3VycmVudCIsInZpc2liaWxpdHkiLCJwZXJjZW50IiwicG9zdF9jb250ZW50IiwiY2xhc3NuYW1lcyIsImltYWdlIiwiZ3JpZF8yIiwiZ3JpZF8zIiwiZ3JpZF80IiwiaW1hZ2VfaXRlbSIsIm1haW5fcGhvdG8iLCJzaG93X21vcmUiLCJoZWlnaHQiLCJyZWFjdGlvbnNfc2hhcmVzX3N0YXR1cyIsInJlYWN0aW9uc19zdGF0dXMiLCJyYXRpbmciLCJ0ZXJtIiwibWFwU3RhdGVUb1Byb3BzIiwic3RvcmUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsYUFBVCxPQWFHO0FBQUE7O0FBQUE7O0FBQUEsTUFaREMsSUFZQyxRQVpEQSxJQVlDO0FBQUEsTUFYREMsZ0JBV0MsUUFYREEsZ0JBV0M7QUFBQSxNQVZEQyxVQVVDLFFBVkRBLFVBVUM7QUFBQSxNQVREQyxZQVNDLFFBVERBLFlBU0M7QUFBQSxNQVJEQyxZQVFDLFFBUkRBLFdBUUM7QUFBQSxNQVBEQyxXQU9DLFFBUERBLFVBT0M7QUFBQSxNQU5EQyxZQU1DLFFBTkRBLFlBTUM7QUFBQSxNQUxEQyxhQUtDLFFBTERBLGFBS0M7QUFBQSw0QkFKREMsU0FJQztBQUFBLE1BSkRBLFNBSUMsK0JBSlcsSUFJWDtBQUFBLE1BSERDLElBR0MsUUFIREEsSUFHQztBQUFBLE1BRkRDLEdBRUMsUUFGREEsR0FFQztBQUFBLE1BRERDLFFBQ0MsUUFEREEsUUFDQzs7QUFBQSxrQkFDK0NDLHNEQUFRLENBQUMsRUFBRCxDQUR2RDtBQUFBLE1BQ01DLGdCQUROO0FBQUEsTUFDd0JDLG1CQUR4Qjs7QUFHRCxNQUFNQyxVQUFVLEdBQUcsR0FBR0MsTUFBSCxDQUFVQyxLQUFWLENBQWdCLEVBQWhCLEVBQW9CakIsSUFBSSxDQUFDa0IsR0FB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QUFGOEIsR0FBZjtBQUFBLENBQTNCOztBQUtlcUosMkhBQU8sQ0FBQ0osZUFBRCxFQUFrQkUsa0JBQWxCLENBQVAsQ0FBNkMvSixhQUE3QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuNzRmYjcyMWQ0MzlhOTY3ZjJjNjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvdGltZWxpbmUtcG9zdC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgQ29tbWVudHMgZnJvbSAnLi9Db21tZW50cyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgQWN0aW9ucyBmcm9tICcuL0FjdGlvbnMnO1xyXG5pbXBvcnQgVHJpbVRleHQgZnJvbSAnLi4vY29tbW9uL1RyaW1UZXh0JztcclxuaW1wb3J0IHsgdXNlTW9kYWwgfSBmcm9tICdyZWFjdC1tb2RhbC1ob29rJztcclxuaW1wb3J0IENvbW1lbnRzTW9kYWwgZnJvbSAnLi9Db21tZW50c01vZGFsJztcclxuaW1wb3J0IFBob3Rvc01vZGFsIGZyb20gJy4uL3Byb2ZpbGUvUGhvdG9zTW9kYWwnO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJy4uL2NvbW1vbi9BdmF0YXInO1xyXG5pbXBvcnQgeyBzaG93IH0gZnJvbSAncmVkdXgtbW9kYWwnO1xyXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBBUEkgZnJvbSAnY29uZmlncy9BUEknO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICd2aWRlby1yZWFjdCc7XHJcbmltcG9ydCB7IFBob3Rvc1Byb3ZpZGVyIH0gIGZyb20gJ2NvbnRhaW5lcnMvUGhvdG9zL3N0b3JhZ2UvUGhvdG9Db250ZXh0JztcclxuaW1wb3J0IHsgTGlua1ByZXZpZXcgfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9MaW5rUHJldmlldyc7XHJcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcclxuaW1wb3J0IFZpZGVvUGxheWVyIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL1ZpZGVvUGxheWVyJztcclxuaW1wb3J0IHsgQnV0dG9uLCBVcGxvYWQsIG1lc3NhZ2UsIElucHV0LCBUYWJzLCBSYXRlLCBub3RpZmljYXRpb24sIFByb2dyZXNzLCBQb3BvdmVyLCBUb29sdGlwIH0gZnJvbSAnYW50ZCc7XHJcblxyXG5mdW5jdGlvbiBUaW1lbGluZVBvc3RzKHsgXHJcbiAgZGF0YSwgXHJcbiAgb25VcGRhdGVUaW1lbGluZSwgXHJcbiAgb25SYXRlUG9zdCwgXHJcbiAgbW9kYWxBY3Rpb25zLCBcclxuICBzaGFyZUFjdGlvbiwgXHJcbiAgbGlrZUFjdGlvbiwgXHJcbiAgZGVsZXRlQWN0aW9uLCBcclxuICBkaXNhYmxlRGVsZXRlLCBcclxuICBwYXJlbnREaXYgPSBudWxsLCBcclxuICBhdXRoLFxyXG4gIGtqbSxcclxuICBkaXNwYXRjaFxyXG59KSB7XHJcbiAgY29uc3QgW3Byb2Nlc3NpbmdWaWRlb3MsIHNldFByb2Nlc3NpbmdWaWRlb3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIFxyXG4gIGNvbnN0IGltYWdlc0xpc3QgPSBbXS5jb25jYXQuYXBwbHkoW10sIGRhdGEubWFwKGl0ZW0gPT4geyBcclxuICAgICAgaWYoaXRlbS50eXBlID09PSAnUGhvdG8nKSB7XHJcbiAgICAgICAgcmV0dXJuICBpdGVtO1xyXG4gICAgICB9IGVsc2UgaWYoaXRlbS50eXBlID09PSAnVmlkZW9DbGlwJykge1xyXG4gICAgICAgIHJldHVybiAgW107XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuICBpdGVtLmltYWdlcyBcclxuICAgICAgfSBcclxuICAgIH1cclxuICApKVxyXG5cclxuICBjb25zdCB2aWRlb0xpc3QgPSBbXS5jb25jYXQuYXBwbHkoW10sIGRhdGEubWFwKGl0ZW0gPT4ge1xyXG4gICAgaWYoaXRlbS50eXBlID09PSAnVmlkZW9DbGlwJykge1xyXG4gICAgICByZXR1cm4gaXRlbTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0eXBlb2YgaXRlbS52aWRlb3MgIT09ICd1bmRlZmluZWQnP2l0ZW0udmlkZW9zOltdO1xyXG4gICAgfVxyXG4gIH0pKVxyXG4gIFxyXG5cclxuICBjb25zdCBnZXRDb21tZW50cyA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmKCFhY3RpdmVUeXBlIHx8ICFhY3RpdmVQb3N0SWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIHVybCA9ICcnO1xyXG4gICAgICBpZiAoYWN0aXZlVHlwZSA9PT0gJ1Bob3RvJykge1xyXG4gICAgICAgIHVybCA9ICcvcGhvdG9zL2dldC1jb21tZW50cyc7XHJcbiAgICAgIH0gZWxzZSBpZiAoYWN0aXZlVHlwZSA9PT0gJ1ZpZGVvQ2xpcCcpIHtcclxuICAgICAgICB1cmwgPSAnL3ZpZGVvLWNsaXBzL2dldC1jb21tZW50cyc7XHJcbiAgICAgIH0gZWxzZSBpZiAoYWN0aXZlVHlwZSA9PT0gJ0l0ZW0nKSB7XHJcbiAgICAgICAgdXJsID0gJy9pdGVtcy9nZXQtY29tbWVudHMnO1xyXG4gICAgICB9IGVsc2UgaWYgKGFjdGl2ZVR5cGUgPT09ICdQb3N0Jykge1xyXG4gICAgICAgIHVybCA9ICcvcG9zdHMvZ2V0LWNvbW1lbnRzJztcclxuICAgICAgfSBlbHNlIGlmIChhY3RpdmVUeXBlID09PSAnQ29tbWVudCcpIHtcclxuICAgICAgICB1cmwgPSAnL2NvbW1lbnRzL2dldC1jb21tZW50cyc7XHJcbiAgICAgIH0gZWxzZSBpZiAoYWN0aXZlVHlwZSA9PT0gJ1NoYXJlJykge1xyXG4gICAgICAgIHVybCA9ICcvc2hhcmVzL2dldC1jb21tZW50cyc7XHJcbiAgICAgIH0gZWxzZSBpZiAoYWN0aXZlVHlwZSA9PT0gJ01hcmtldHBsYWNlSXRlbUZvclNhbGUnKSB7XHJcbiAgICAgICAgdXJsID0gJy9tYXJrZXRwbGFjZS9pdGVtcy1mb3Itc2FsZS9nZXQtY29tbWVudHMnO1xyXG4gICAgICB9IGVsc2UgaWYgKGFjdGl2ZVR5cGUgPT09ICdNYXJrZXRwbGFjZUl0ZW1Ub0J1eScpIHtcclxuICAgICAgICB1cmwgPSAnL21hcmtldHBsYWNlL2l0ZW1zLXRvLWJ1eS9nZXQtY29tbWVudHMnO1xyXG4gICAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgIEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBpZDogYWN0aXZlUG9zdElkLFxyXG4gICAgICAgICAgICBvZmZzZXQ6IDAsXHJcbiAgICAgICAgICAgIGZpcnN0OiAyNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG4gICAgICBpZihzdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgc2V0Q29tbW5ldHMoZGF0YSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB2aWRlb0xpc3QubWFwKHZpZGVvSXRlbSA9PiB7XHJcbiAgICAgIGlmKHZpZGVvSXRlbS5wcm9jZXNzaW5nKSB7XHJcbiAgICAgICAgc2V0UHJvY2Vzc2luZ1ZpZGVvcyhbLi4ucHJvY2Vzc2luZ1ZpZGVvcywgdmlkZW9JdGVtLmlkXSlcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdBUFBfTk9USUZJQ0FUSU9OJywgcGF5bG9hZDogdHJ1ZSB9KTtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRklDQVRJT05fREFUQScsIHBheWxvYWQ6IHZpZGVvSXRlbS5pZCB9KTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LCBkYXRhKVxyXG4gXHJcbiAgY29uc3QgW2FjdGl2ZVBvc3RJZCwgc2V0QWN0aXZlUG9zdElkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFthY3RpdmVUeXBlLCBzZXRBY3RpdmVUeXBlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFttb2RhbE1vZGUsIHNldE1vZGFsTW9kZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2NvbW1lbnRzLCBzZXRDb21tbmV0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2FjdGl2ZUltYWdlSWQsIHNldEFjdGl2ZUltYWdlSWRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2ltYWdlRGF0YSwgc2V0SW1hZ2VEYXRhXSA9IHVzZVN0YXRlKGltYWdlc0xpc3QpO1xyXG4gIGxldCB2aWRlb1JlZiA9IFtdO1xyXG4gIFxyXG4gIGNvbnN0IFtzaG93UGhvdG9Nb2RhbCwgaGlkZVBob3RvTW9kYWxdID0gdXNlTW9kYWwoKHsgaW46IG9wZW4gfSkgPT4gKFxyXG4gICAgPFBob3Rvc1Byb3ZpZGVyPlxyXG4gICAgICA8UGhvdG9zTW9kYWxcclxuICAgICAgICB0aXRsZT1cIlBob3RvIGRldGFpbFwiXHJcbiAgICAgICAgc2hvd01vZGFsPXtvcGVufVxyXG4gICAgICAgIG9uQ2xvc2U9e2hpZGVQaG90b01vZGFsfVxyXG4gICAgICAgIG9uUmF0ZVBvc3Q9e29uUmF0ZVBvc3R9XHJcbiAgICAgICAgZGF0YT17aW1hZ2VEYXRhfVxyXG4gICAgICAgIGxpa2VBY3Rpb249e2xpa2VBY3Rpb259XHJcbiAgICAgICAgc2hhcmVBY3Rpb249e3NoYXJlQWN0aW9ufVxyXG4gICAgICAgIG9uVXBkYXRlVGltZWxpbmU9e29uVXBkYXRlVGltZWxpbmV9XHJcbiAgICAgICAgYXV0aD17YXV0aH1cclxuICAgICAgICBhY3RpdmVJbWFnZUlkPXthY3RpdmVJbWFnZUlkfVxyXG4gICAgICAvPlxyXG4gICAgPC9QaG90b3NQcm92aWRlcj5cclxuICApLCBbaW1hZ2VEYXRhXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNob3dDb21tZW50TW9kYWwgPSAoaWQsIHR5cGUpID0+IHtcclxuICAgIHNldEFjdGl2ZVBvc3RJZChpZCk7XHJcbiAgICBzZXRBY3RpdmVUeXBlKHR5cGUpO1xyXG4gICAgc2V0TW9kYWxNb2RlKCFtb2RhbE1vZGUpO1xyXG4gICAgbW9kYWxBY3Rpb25zLnNob3coJ2NvbW1lbnRNb2RhbCcsIHsgaWQ6IGFjdGl2ZVBvc3RJZCB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVDb21tZW50U2hvdyA9IChpbmRleCkgPT5cclxuICAgIHNldENvbW1lbnRTaG93KGNvbW1lbnRTaG93ID09PSBpbmRleCA/IG51bGwgOiBpbmRleCk7XHJcblxyXG4gIGNvbnN0IGdldExpa2VBY3Rpb25Vc2VySW5mbyA9IChkYXRhKSA9PiB7XHJcbiAgICB2YXIgZmluYWxEYXRhID0gJyc7XHJcbiAgICBkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgZmluYWxEYXRhID0gZmluYWxEYXRhICsgJyAnICsgaXRlbS5hY2NvdW50LmZpcnN0TmFtZSArICcnICsgaXRlbS5hY2NvdW50Lmxhc3ROYW1lIDtcclxuICAgIH0pXHJcbiAgICByZXR1cm4gZmluYWxEYXRhO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25VcGRhdGVDb21tZW50cyA9IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICBzZXRDb21tbmV0cyhbLi4uY29tbWVudHMsIHsuLi5kYXRhPy5jb21tZW50c1swXSwgYWNjb3VudDogYXV0aC51c2VyfV0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgSW1hZ2VTb3J0aW5nID0gKGFjdGl2ZUltYWdlSWQpID0+IHtcclxuICAgIFxyXG4gICAgbGV0IGNhcm91c2VsRGF0YSA9IFtdO1xyXG4gICAgbGV0IGZpcnN0RGF0YSA9IFtdO1xyXG4gICAgbGV0IHNlY29uZERhdGEgPSBbXTtcclxuXHJcbiAgICBmb3IodmFyIGk9MDsgaTxpbWFnZURhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYoaW1hZ2VEYXRhW2ldLnNyYyA9PT0gYWN0aXZlSW1hZ2VJZCkge1xyXG4gICAgICAgIGZpcnN0RGF0YSA9IGltYWdlRGF0YS5zbGljZShpLCBpbWFnZURhdGEubGVuZ3RoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBzZWNvbmREYXRhLnB1c2goaW1hZ2VEYXRhW2ldKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY2Fyb3VzZWxEYXRhID0gWy4uLmZpcnN0RGF0YSwgLi4uc2Vjb25kRGF0YV07XHJcbiAgICBzZXRJbWFnZURhdGEoY2Fyb3VzZWxEYXRhKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aXZpdHlfY29udGVudH0gPlxyXG4gICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgdmFyIHsgYWNjb3VudCwgXHJcbiAgICAgICAgICAgICAgY3JlYXRlZEF0LCBcclxuICAgICAgICAgICAgICB0eXBlLCBcclxuICAgICAgICAgICAgICBjb21tZW50cywgXHJcbiAgICAgICAgICAgICAgY29tbWVudHNDb3VudCwgXHJcbiAgICAgICAgICAgICAgdGV4dCwgXHJcbiAgICAgICAgICAgICAgaW1hZ2VzLCBcclxuICAgICAgICAgICAgICB2aWRlb3MsIFxyXG4gICAgICAgICAgICAgIHNoYXJlZCwgXHJcbiAgICAgICAgICAgICAgY29tbWVudGVkLCBcclxuICAgICAgICAgICAgICBibG9iX3RuLCBcclxuICAgICAgICAgICAgICB0aHVtYm5haWwsIFxyXG4gICAgICAgICAgICAgIHJlYWN0aW9ucywgXHJcbiAgICAgICAgICAgICAgdGV4dF9saW5rcyxcclxuICAgICAgICAgICAgICB0YWdzXHJcbiAgICAgICAgICAgIH0gPSBpdGVtO1xyXG5cclxuICAgICAgICB2aWRlb1JlZi5wdXNoKG51bGwpO1xyXG4gICAgICAgIGNvbnN0IHByb2ZpbGVVcmwgPSBhY2NvdW50ICE9PSBudWxsICYmIGFjY291bnQgIT09IHVuZGVmaW5lZCA/IGAke2FjY291bnQucHJvZmlsZVBob3RvPy5zcmN9YCA6IG51bGxcclxuICAgICAgICBjb25zdCBmdWxsTmFtZSA9IGAke2FjY291bnQ/LmZpcnN0TmFtZX0gJHthY2NvdW50Py5sYXN0TmFtZX1gO1xyXG4gICAgICAgIGNvbnN0IHVzZXJuYW1lID0gYWNjb3VudD8udXNlcm5hbWU7XHJcbiAgICAgICAgY29uc3QgbGlrZURhdGEgPSByZWFjdGlvbnM/IHJlYWN0aW9ucz8uZmlsdGVyKGl0ZW0gPT4gaXRlbS5yZWFjdGlvbiA9PSAnTElLRScpOltdO1xyXG4gICAgICAgIGNvbnN0IGhlYXJ0RGF0YSA9ICByZWFjdGlvbnM/IHJlYWN0aW9ucz8uZmlsdGVyKGl0ZW0gPT4gaXRlbS5yZWFjdGlvbiA9PSAnSEVBUlQnKTpbXTtcclxuICAgICAgICBjb25zdCB3b3dEYXRhID0gcmVhY3Rpb25zID8gcmVhY3Rpb25zPy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlYWN0aW9uID09ICdXT1cnKTpbXTtcclxuICAgICAgICBjb25zdCBoYWhhRGF0YSA9IHJlYWN0aW9ucyA/IHJlYWN0aW9ucz8uZmlsdGVyKGl0ZW0gPT4gaXRlbS5yZWFjdGlvbiA9PSAnSEFIQScpOltdO1xyXG4gICAgICAgIGNvbnN0IHNhZERhdGEgPSByZWFjdGlvbnMgPyByZWFjdGlvbnM/LmZpbHRlcihpdGVtID0+IGl0ZW0ucmVhY3Rpb24gPT0gJ1NBRCcpOltdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3R9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICB7IWRpc2FibGVEZWxldGUgJiYgKGFjY291bnQ/LnVzZXJuYW1lID09IGF1dGg/LnVzZXI/LnVzZXJuYW1lKT88Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ3dpbmRvdy1jbG9zZSddfSBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGZsb2F0OiAncmlnaHQnLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAyNSxcclxuICAgICAgICAgICAgICBtYXJnaW5SaWdodDogMTAsXHJcbiAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlQWN0aW9uKGl0ZW0uaWQsIHR5cGUpfVxyXG4gICAgICAgICAgICAvPjpudWxsfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RfaGVhZGVyfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn0+XHJcbiAgICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgIHRleHQ9e2Z1bGxOYW1lfVxyXG4gICAgICAgICAgICAgICAgICB1cmw9e3Byb2ZpbGVVcmx9XHJcbiAgICAgICAgICAgICAgICAgIHNpemU9ezYwfVxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJTaXplPXszfVxyXG4gICAgICAgICAgICAgICAgICB1c2VybmFtZT17dXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfaW5mb30+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy51c2VyX25hbWV9PntmdWxsTmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZX0+XHJcbiAgICAgICAgICAgICAge21vbWVudChjcmVhdGVkQXQpLmZvcm1hdCgnTU1NIERELCBZWVlZIC0gSEg6bW0gQScpfVxyXG4gICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICB7dGFncyAmJiB0YWdzLm1hcCh0YWcgPT4gXHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGFnc30+XHJcbiAgICAgICAgICAgICAgICAje3RhZ31cclxuICAgICAgICAgICAgICA8L3A+ICBcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cclxuICAgICAgICAgICAgICA8VHJpbVRleHQgbGltaXQ9ezExMH0+XHJcbiAgICAgICAgICAgICAgICB7IHR5cGUhPT0nU2hhcmUnP3RleHQ6c2hhcmVkLnRleHQgfVxyXG4gICAgICAgICAgICAgIDwvVHJpbVRleHQ+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHt0ZXh0X2xpbmtzICYmIHRleHRfbGlua3MubWFwKChpdGVtLCBpKSA9PiBcclxuICAgICAgICAgICAgICA8TGlua1ByZXZpZXcgZGF0YT17aXRlbX0ga2V5PXtpdGVtLmlkICsgJyAnICsgaX0vPiAgXHJcbiAgICAgICAgICAgICkgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAge3ZpZGVvcyAmJiB2aWRlb3MubGVuZ3RoID4gMCAmJiB2aWRlb3MubWFwKCh2aWRlbywgaSkgPT4ge1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgbGV0IHZpZGVvSnNPcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgIG11dGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwb3N0ZXI6YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7dmlkZW8udGh1bWJuYWlsLnNyY31gLFxyXG4gICAgICAgICAgICAgICAgc291cmNlczogW3tcclxuICAgICAgICAgICAgICAgICAgc3JjOiBgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHt2aWRlby5zcmN9YCxcclxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJhcHBsaWNhdGlvbi94LW1wZWdVUkxcIixcclxuICAgICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBodG1sNToge1xyXG4gICAgICAgICAgICAgICAgICAgIGhsczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3ZlcnJpZGVOYXRpdmU6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZpZGVvc30ga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgeyF2aWRlby5wcm9jZXNzaW5nPzw+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8VmlkZW9QbGF5ZXIgeyAuLi52aWRlb0pzT3B0aW9ucyB9IC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICB7LyogPFZpZGVvUGxheWVyIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjYwXCIgc291cmNlPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHt2aWRlby5zcmN9YH0gLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDxQbGF5ZXJcclxuICAgICAgICAgICAgICAgICAgICBwbGF5c0lubGluZVxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5XHJcbiAgICAgICAgICAgICAgICAgICAgbXV0ZWRcclxuICAgICAgICAgICAgICAgICAgICBwb3N0ZXI9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke3ZpZGVvLnRodW1ibmFpbC5zcmN9YH1cclxuICAgICAgICAgICAgICAgICAgICByZWY9e3BsYXllciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZih2aWRlb1JlZiAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWRlb1JlZltpbmRleF0gPSBwbGF5ZXI7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c291cmNlIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7dmlkZW8uc3JjfWB9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvUGxheWVyPiBcclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB2aWRlb1JlZltpbmRleF0ucGxheSgpfSByZWY9e2VsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWVsKSByZXR1cm47IFxyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZih2aWRlb1JlZiAmJiB2aWRlb1JlZltpbmRleF0gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvc2l0aW9uWSA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHBvc2l0aW9uWSA+ICh3aW5kb3cuaW5uZXJIZWlnaHQvMikgJiYgcG9zaXRpb25ZIDwgd2luZG93LmlubmVySGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW9SZWZbaW5kZXhdLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2aWRlb1JlZltpbmRleF0ucGF1c2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgaWYocGFyZW50RGl2ICE9PSBudWxsICYmIHBhcmVudERpdj8uY3VycmVudCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcGFyZW50RGl2Py5jdXJyZW50Py5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHZpZGVvUmVmICYmIHZpZGVvUmVmW2luZGV4XSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3NpdGlvblkgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHBvc2l0aW9uWSA+ICh3aW5kb3cuaW5uZXJIZWlnaHQvMikgJiYgcG9zaXRpb25ZIDwgd2luZG93LmlubmVySGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWRlb1JlZltpbmRleF0ucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWRlb1JlZltpbmRleF0ucGF1c2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdmlzaWJpbGl0eTogJ2hpZGRlbicgfX1cclxuICAgICAgICAgICAgICAgICAgPkJ1dHRvbiBGb3IgcG9zaXRpb24gb2YgVmlkZW88L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC8+OjxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+WW91ciBwb3N0aW5nIHZpZGVvIGlzIG9uIHByb2Nlc3NpbmcuLi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPFByb2dyZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VDb2xvcj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnMCUnOiAnIzEwOGVlOScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICcxMDAlJzogJyM4N2QwNjgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHBlcmNlbnQ9ezk5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgZm9ybWF0PXtwZXJjZW50ID0+IGBgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7aW1hZ2VzICYmIGltYWdlcy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdF9jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5pbWFnZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIFtzdHlsZXMuZ3JpZF8yXTogaW1hZ2VzLmxlbmd0aCA9PSAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFtzdHlsZXMuZ3JpZF8zXTogaW1hZ2VzLmxlbmd0aCA9PSAzLFxyXG4gICAgICAgICAgICAgICAgICAgIFtzdHlsZXMuZ3JpZF80XTogaW1hZ2VzLmxlbmd0aCA9PSA0LFxyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge2ltYWdlcy5sZW5ndGggPT0gMSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZV9pdGVtfSBcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZUltYWdlSWQoaW1hZ2VzWzBdLnNyYylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBJbWFnZVNvcnRpbmcoaW1hZ2VzWzBdLnNyYylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93UGhvdG9Nb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1swXS5ibG9iX3RuP2ltYWdlc1swXS5ibG9iX3RuOmltYWdlc1swXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtpbWFnZXMubGVuZ3RoID09IDIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuaW1hZ2VfaXRlbSwgc3R5bGVzLm1haW5fcGhvdG8pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVJbWFnZUlkKGltYWdlc1swXS5zcmMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbWFnZVNvcnRpbmcoaW1hZ2VzWzBdLnNyYylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dQaG90b01vZGFsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMF0uYmxvYl90bj9pbWFnZXNbMF0uYmxvYl90bjppbWFnZXNbMF0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfaXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlSW1hZ2VJZChpbWFnZXNbMV0uc3JjKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSW1hZ2VTb3J0aW5nKGltYWdlc1sxXS5zcmMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93UGhvdG9Nb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzFdLmJsb2JfdG4/aW1hZ2VzWzFdLmJsb2JfdG46aW1hZ2VzWzFdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICB7aW1hZ2VzLmxlbmd0aCA9PSAzICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmltYWdlX2l0ZW0sIHN0eWxlcy5tYWluX3Bob3RvKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlSW1hZ2VJZChpbWFnZXNbMF0uc3JjKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSW1hZ2VTb3J0aW5nKGltYWdlc1swXS5zcmMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93UGhvdG9Nb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzBdLmJsb2JfdG4/aW1hZ2VzWzBdLmJsb2JfdG46aW1hZ2VzWzBdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX2l0ZW19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVJbWFnZUlkKGltYWdlc1sxXS5zcmMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbWFnZVNvcnRpbmcoaW1hZ2VzWzFdLnNyYylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dQaG90b01vZGFsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMV0uYmxvYl90bj9pbWFnZXNbMV0uYmxvYl90bjppbWFnZXNbMV0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfaXRlbX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZUltYWdlSWQoaW1hZ2VzWzJdLnNyYylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEltYWdlU29ydGluZyhpbWFnZXNbMl0uc3JjKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1Bob3RvTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1syXS5ibG9iX3RuP2ltYWdlc1syXS5ibG9iX3RuOmltYWdlc1syXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAge2ltYWdlcy5sZW5ndGggPj0gNCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5pbWFnZV9pdGVtLCBzdHlsZXMubWFpbl9waG90byl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZUltYWdlSWQoaW1hZ2VzWzBdLnNyYylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEltYWdlU29ydGluZyhpbWFnZXNbMF0uc3JjKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1Bob3RvTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1swXS5ibG9iX3RuP2ltYWdlc1swXS5ibG9iX3RuOmltYWdlc1swXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZV9pdGVtfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlSW1hZ2VJZChpbWFnZXNbMV0uc3JjKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSW1hZ2VTb3J0aW5nKGltYWdlc1sxXS5zcmMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93UGhvdG9Nb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzFdLmJsb2JfdG4/aW1hZ2VzWzFdLmJsb2JfdG46aW1hZ2VzWzFdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX2l0ZW19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVJbWFnZUlkKGltYWdlc1syXS5zcmMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbWFnZVNvcnRpbmcoaW1hZ2VzWzJdLnNyYylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dQaG90b01vZGFsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMl0uYmxvYl90bj9pbWFnZXNbMl0uYmxvYl90bjppbWFnZXNbMl0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfaXRlbX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZUltYWdlSWQoaW1hZ2VzWzNdLnNyYylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEltYWdlU29ydGluZyhpbWFnZXNbM10uc3JjKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1Bob3RvTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaG93X21vcmV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPis0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1szXS5ibG9iX3RuP2ltYWdlc1szXS5ibG9iX3RuOmltYWdlc1szXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IDUwIH19IC8+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7dHlwZSA9PSBcIlBob3RvXCI/IGJsb2JfdG4gJiYgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0X2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuaW1hZ2UpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX2l0ZW19IFxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVJbWFnZUlkKGJsb2JfdG4pXHJcbiAgICAgICAgICAgICAgICAgICAgICBJbWFnZVNvcnRpbmcoYmxvYl90bilcclxuICAgICAgICAgICAgICAgICAgICAgIHNob3dQaG90b01vZGFsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtibG9iX3RufWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj46XHJcbiAgICAgICAgICAgIGJsb2JfdG4gJiYgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aWRlb3N9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgIDxQbGF5ZXJcclxuICAgICAgICAgICAgICAgIHBsYXlzSW5saW5lXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheVxyXG4gICAgICAgICAgICAgICAgbXV0ZWRcclxuICAgICAgICAgICAgICAgIHBvc3Rlcj17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7dGh1bWJuYWlsLnNyY31gfVxyXG4gICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtibG9iX3RufWB9XHJcbiAgICAgICAgICAgICAgICByZWY9e3BsYXllciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIC8vIHZpZGVvUmVmID0gcGxheWVyO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlYWN0aW9uc19zaGFyZXNfc3RhdHVzfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlYWN0aW9uc19zdGF0dXN9PlxyXG4gICAgICAgICAgICAgICAgeyBsaWtlRGF0YS5sZW5ndGggPiAwICYmIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPXtnZXRMaWtlQWN0aW9uVXNlckluZm8obGlrZURhdGEpfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ3RodW1icy11cCddfSBzaXplPVwiMXhcIiAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcid9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2xpa2VEYXRhLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD48Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHsgaGFoYURhdGEubGVuZ3RoID4gMCAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKGhhaGFEYXRhKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdncmluJ119IHNpemU9XCIxeFwiICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJ319Lz4gXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2hhaGFEYXRhLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7IGhlYXJ0RGF0YS5sZW5ndGggPiAwICYmIDw+IFxyXG4gICAgICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKGhlYXJ0RGF0YSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAnaGVhcnQnXX0gc2l6ZT1cIjF4XCIgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInfX0vPiBcclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aGVhcnREYXRhLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7IHdvd0RhdGEubGVuZ3RoID4gMCAmJiA8PiBcclxuICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9e2dldExpa2VBY3Rpb25Vc2VySW5mbyh3b3dEYXRhKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdsYXVnaCddfSBzaXplPVwiMXhcIiAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcid9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3dvd0RhdGEubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICA8Lz4gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7IHNhZERhdGEubGVuZ3RoID4gMCAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKHNhZERhdGEpfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ2Zyb3duJ119IHNpemU9XCIxeFwiICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJ319Lz4gXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3NhZERhdGEubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8QWN0aW9uc1xyXG4gICAgICAgICAgICAgIGlkPXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgIHR5cGU9e2l0ZW0udHlwZX1cclxuICAgICAgICAgICAgICBwb3N0UmF0ZT17aXRlbS5yYXRpbmd9XHJcbiAgICAgICAgICAgICAgY29tbWVudHM9e2NvbW1lbnRzfVxyXG4gICAgICAgICAgICAgIG9uUmF0ZVBvc3Q9e29uUmF0ZVBvc3R9XHJcbiAgICAgICAgICAgICAgY29tbWVudHNDb3VudD17Y29tbWVudHNDb3VudH1cclxuICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XHJcbiAgICAgICAgICAgICAgbGlrZUFjdGlvbj17KHRlcm0pID0+IGxpa2VBY3Rpb24odHlwZSwgaXRlbS5pZCwgdGVybSl9XHJcbiAgICAgICAgICAgICAgc2hhcmVBY3Rpb249eygpID0+IHNoYXJlQWN0aW9uKHR5cGUgIT09ICdTaGFyZSc/dHlwZTpzaGFyZWQudHlwZSwgdHlwZSAhPT0gJ1NoYXJlJz9pdGVtLmlkOnNoYXJlZC5pZCl9XHJcbiAgICAgICAgICAgICAgYWN0aW9ucz17XHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7IGhhbmRsZVNob3dDb21tZW50TW9kYWwoaXRlbS5pZCwgaXRlbS50eXBlKSB9IFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxDb21tZW50c1xyXG4gICAgICAgICAgICAgIGlkPXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgIHR5cGU9e2l0ZW0udHlwZX1cclxuICAgICAgICAgICAgICBkYXRhPXtjb21tZW50c31cclxuICAgICAgICAgICAgICBvblVwZGF0ZVRpbWVsaW5lPXtvblVwZGF0ZVRpbWVsaW5lfVxyXG4gICAgICAgICAgICAgIGFjdGl2ZVBvc3RJZD17YWN0aXZlUG9zdElkfVxyXG4gICAgICAgICAgICAgIG1vZGFsTW9kZT17bW9kYWxNb2RlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcblxyXG4gICAgICA8Q29tbWVudHNNb2RhbFxyXG4gICAgICAgIGFjdGl2ZVBvc3RJZD17YWN0aXZlUG9zdElkfVxyXG4gICAgICAgIHR5cGU9e2FjdGl2ZVR5cGV9XHJcbiAgICAgICAgcG9zdERhdGE9e2NvbW1lbnRzfVxyXG4gICAgICAgIG9uVXBkYXRlVGltZWxpbmU9e29uVXBkYXRlQ29tbWVudHN9XHJcbiAgICAgICAgdGl0bGU9XCJDb21tZW50c1wiXHJcbiAgICAgICAgc2hvdz17bW9kYWxNb2RlfVxyXG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHtjb25zb2xlLmxvZygnY2xvc2UgbW9kYWwnKX19XHJcbiAgICAgICAgZ2V0Q29tbWVudHM9e2dldENvbW1lbnRzfVxyXG4gICAgICAvPlxyXG4gICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0b3JlKSA9PiAoe1xyXG4gIGtqbTogc3RvcmUsXHJcbn0pO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gIG1vZGFsQWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKHsgc2hvdyB9LCBkaXNwYXRjaCksXHJcbiAgZGlzcGF0Y2g6IGRpc3BhdGNoXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVGltZWxpbmVQb3N0cyk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=