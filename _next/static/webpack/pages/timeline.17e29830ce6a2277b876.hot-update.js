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
        lineNumber: 192,
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
        lineNumber: 193,
        columnNumber: 76
      }
    }) : null, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.post_header,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.avatar,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
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
        lineNumber: 203,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.user_info,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 15
      }
    }, __jsx("p", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.user_name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 17
      }
    }, fullName))), __jsx("p", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.date,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 13
      }
    }, moment__WEBPACK_IMPORTED_MODULE_10___default()(createdAt).format('MMM DD, YYYY - HH:mm A')), __jsx("p", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.description,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 13
      }
    }, __jsx(_common_TrimText__WEBPACK_IMPORTED_MODULE_12__["default"], {
      limit: 110,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 15
      }
    }, type !== 'Share' ? text : shared.text)), text_links && text_links.map(function (item, i) {
      return __jsx(components_common_LinkPreview__WEBPACK_IMPORTED_MODULE_23__["LinkPreview"], {
        data: item,
        key: item.id + ' ' + i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227,
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
          lineNumber: 250,
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
          lineNumber: 254,
          columnNumber: 19
        }
      }, __jsx("source", {
        src: "https://www.freeskies.com/static/".concat(video.src),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265,
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
          lineNumber: 267,
          columnNumber: 19
        }
      }, "Button For position of Video")) : __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294,
          columnNumber: 23
        }
      }, __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295,
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
          lineNumber: 296,
          columnNumber: 21
        }
      })));
    }), images && images.length > 0 ? __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.post_content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image, (_classnames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.grid_2, images.length == 2), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.grid_3, images.length == 3), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.grid_4, images.length == 4), _classnames)),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 312,
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
        lineNumber: 320,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].blob_tn ? images[0].blob_tn : images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 328,
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
        lineNumber: 334,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].blob_tn ? images[0].blob_tn : images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 344,
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
        lineNumber: 346,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[1].blob_tn ? images[1].blob_tn : images[1].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 355,
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
        lineNumber: 362,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].blob_tn ? images[0].blob_tn : images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 372,
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
        lineNumber: 374,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[1].blob_tn ? images[1].blob_tn : images[1].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 383,
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
        lineNumber: 385,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[2].blob_tn ? images[2].blob_tn : images[2].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 394,
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
        lineNumber: 401,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].blob_tn ? images[0].blob_tn : images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 411,
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
        lineNumber: 413,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[1].blob_tn ? images[1].blob_tn : images[1].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 422,
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
        lineNumber: 424,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[2].blob_tn ? images[2].blob_tn : images[2].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 433,
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
        lineNumber: 435,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.show_more,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 444,
        columnNumber: 25
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 445,
        columnNumber: 27
      }
    }, "+4")), __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[3].blob_tn ? images[3].blob_tn : images[3].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 447,
        columnNumber: 25
      }
    }))))) : __jsx("div", {
      style: {
        height: 50
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 454,
        columnNumber: 15
      }
    }), type == "Photo" ? blob_tn && __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.post_content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 457,
        columnNumber: 42
      }
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 458,
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
        lineNumber: 461,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(blob_tn),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 470,
        columnNumber: 19
      }
    })))) : blob_tn && __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.videos,
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 474,
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
        lineNumber: 475,
        columnNumber: 15
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.reactions_shares_status,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 489,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.reactions_status,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 490,
        columnNumber: 15
      }
    }, likeData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_26__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(likeData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 492,
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
        lineNumber: 493,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 494,
        columnNumber: 21
      }
    }, likeData.length))), hahaData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_26__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(hahaData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 498,
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
        lineNumber: 499,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 500,
        columnNumber: 21
      }
    }, hahaData.length))), heartData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_26__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(heartData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 505,
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
        lineNumber: 506,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 507,
        columnNumber: 21
      }
    }, heartData.length))), wowData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_26__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(wowData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 512,
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
        lineNumber: 513,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 514,
        columnNumber: 21
      }
    }, wowData.length))), sadData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_26__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(sadData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 519,
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
        lineNumber: 520,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 521,
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
        lineNumber: 528,
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
        lineNumber: 542,
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
      lineNumber: 554,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aW1lbGluZS9UaW1lbGluZVBvc3RzLmpzIl0sIm5hbWVzIjpbIlRpbWVsaW5lUG9zdHMiLCJkYXRhIiwib25VcGRhdGVUaW1lbGluZSIsIm9uUmF0ZVBvc3QiLCJtb2RhbEFjdGlvbnMiLCJzaGFyZUFjdGlvbiIsImxpa2VBY3Rpb24iLCJkZWxldGVBY3Rpb24iLCJkaXNhYmxlRGVsZXRlIiwicGFyZW50RGl2IiwiYXV0aCIsImtqbSIsImRpc3BhdGNoIiwidXNlU3RhdGUiLCJwcm9jZXNzaW5nVmlkZW9zIiwic2V0UHJvY2Vzc2luZ1ZpZGVvcyIsImltYWdlc0xpc3QiLCJjb25jYXQiLCJhcHBseSIsIm1hcCIsIml0ZW0iLCJ0eXBlIiwiaW1hZ2VzIiwidmlkZW9MaXN0IiwidmlkZW9zIiwiZ2V0Q29tbWVudHMiLCJhY3RpdmVUeXBlIiwiYWN0aXZlUG9zdElkIiwidXJsIiwiQVBJIiwibWV0aG9kIiwiaWQiLCJvZmZzZXQiLCJmaXJzdCIsImhlYWRlcnMiLCJ0b2tlbiIsInJlcXVlc3QiLCJzdGF0dXMiLCJzZXRDb21tbmV0cyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJ2aWRlb0l0ZW0iLCJwcm9jZXNzaW5nIiwicGF5bG9hZCIsInNldEFjdGl2ZVBvc3RJZCIsInNldEFjdGl2ZVR5cGUiLCJtb2RhbE1vZGUiLCJzZXRNb2RhbE1vZGUiLCJjb21tZW50cyIsImFjdGl2ZUltYWdlSWQiLCJzZXRBY3RpdmVJbWFnZUlkIiwiaW1hZ2VEYXRhIiwic2V0SW1hZ2VEYXRhIiwidmlkZW9SZWYiLCJ1c2VNb2RhbCIsIm9wZW4iLCJoaWRlUGhvdG9Nb2RhbCIsInNob3dQaG90b01vZGFsIiwiaGFuZGxlU2hvd0NvbW1lbnRNb2RhbCIsInNob3ciLCJ0b2dnbGVDb21tZW50U2hvdyIsImluZGV4Iiwic2V0Q29tbWVudFNob3ciLCJjb21tZW50U2hvdyIsImdldExpa2VBY3Rpb25Vc2VySW5mbyIsImZpbmFsRGF0YSIsImFjY291bnQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsIm9uVXBkYXRlQ29tbWVudHMiLCJ1c2VyIiwiSW1hZ2VTb3J0aW5nIiwiY2Fyb3VzZWxEYXRhIiwiZmlyc3REYXRhIiwic2Vjb25kRGF0YSIsImkiLCJsZW5ndGgiLCJzcmMiLCJzbGljZSIsInB1c2giLCJzdHlsZXMiLCJhY3Rpdml0eV9jb250ZW50IiwiY3JlYXRlZEF0IiwiY29tbWVudHNDb3VudCIsInRleHQiLCJzaGFyZWQiLCJjb21tZW50ZWQiLCJibG9iX3RuIiwidGh1bWJuYWlsIiwicmVhY3Rpb25zIiwidGV4dF9saW5rcyIsInByb2ZpbGVVcmwiLCJ1bmRlZmluZWQiLCJwcm9maWxlUGhvdG8iLCJmdWxsTmFtZSIsInVzZXJuYW1lIiwibGlrZURhdGEiLCJmaWx0ZXIiLCJyZWFjdGlvbiIsImhlYXJ0RGF0YSIsIndvd0RhdGEiLCJoYWhhRGF0YSIsInNhZERhdGEiLCJwb3N0IiwiZm9udFNpemUiLCJtYXJnaW5SaWdodCIsImN1cnNvciIsInBvc3RfaGVhZGVyIiwiYXZhdGFyIiwidXNlcl9pbmZvIiwidXNlcl9uYW1lIiwiZGF0ZSIsIm1vbWVudCIsImZvcm1hdCIsImRlc2NyaXB0aW9uIiwidmlkZW8iLCJ2aWRlb0pzT3B0aW9ucyIsImF1dG9wbGF5Iiwid2lkdGgiLCJtdXRlZCIsImNvbnRyb2xzIiwicG9zdGVyIiwic291cmNlcyIsIndpdGhDcmVkZW50aWFscyIsImh0bWw1IiwiaGxzIiwib3ZlcnJpZGVOYXRpdmUiLCJwbGF5ZXIiLCJwbGF5IiwiZWwiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicG9zaXRpb25ZIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwieSIsImlubmVySGVpZ2h0IiwicGF1c2UiLCJjdXJyZW50IiwidmlzaWJpbGl0eSIsInBlcmNlbnQiLCJwb3N0X2NvbnRlbnQiLCJjbGFzc25hbWVzIiwiaW1hZ2UiLCJncmlkXzIiLCJncmlkXzMiLCJncmlkXzQiLCJpbWFnZV9pdGVtIiwibWFpbl9waG90byIsInNob3dfbW9yZSIsImhlaWdodCIsInJlYWN0aW9uc19zaGFyZXNfc3RhdHVzIiwicmVhY3Rpb25zX3N0YXR1cyIsInJhdGluZyIsInRlcm0iLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdG9yZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImJpbmRBY3Rpb25DcmVhdG9ycyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxhQUFULE9BYUc7QUFBQTs7QUFBQTs7QUFBQSxNQVpEQyxJQVlDLFFBWkRBLElBWUM7QUFBQSxNQVhEQyxnQkFXQyxRQVhEQSxnQkFXQztBQUFBLE1BVkRDLFVBVUMsUUFWREEsVUFVQztBQUFBLE1BVERDLFlBU0MsUUFUREEsWUFTQztBQUFBLE1BUkRDLFlBUUMsUUFSREEsV0FRQztBQUFBLE1BUERDLFdBT0MsUUFQREEsVUFPQztBQUFBLE1BTkRDLFlBTUMsUUFOREEsWUFNQztBQUFBLE1BTERDLGFBS0MsUUFMREEsYUFLQztBQUFBLDRCQUpEQyxTQUlDO0FBQUEsTUFKREEsU0FJQywrQkFKVyxJQUlYO0FBQUEsTUFIREMsSUFHQyxRQUhEQSxJQUdDO0FBQUEsTUFGREMsR0FFQyxRQUZEQSxHQUVDO0FBQUEsTUFEREMsUUFDQyxRQUREQSxRQUNDOztBQUFBLGtCQUMrQ0Msc0RBQVEsQ0FBQyxFQUFELENBRHZEO0FBQUEsTUFDTUMsZ0JBRE47QUFBQSxNQUN3QkMsbUJBRHhCOztBQUdELE1BQU1DLFVBQVUsR0FBRyxHQUFHQyxNQUFILENBQVVDLEtBQVYsQ0FBZ0IsRUFBaEIsRUFBb0JqQixJQUFJLENBQUNrQixHQUFMLENBQVMsVUFBQUMs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QUFBQTtBQUFBLE1BOVZGLENBREY7QUF5V0QsR0FyWEEsQ0FESCxFQXdYRSxNQUFDLHVEQUFEO0FBQ0UsZ0JBQVksRUFBRXBCLFlBRGhCO0FBRUUsUUFBSSxFQUFFRCxVQUZSO0FBR0UsWUFBUSxFQUFFdUIsUUFIWjtBQUlFLG9CQUFnQixFQUFFcUIsZ0JBSnBCO0FBS0UsU0FBSyxFQUFDLFVBTFI7QUFNRSxRQUFJLEVBQUV2QixTQU5SO0FBT0UsV0FBTyxFQUFFLG1CQUFNO0FBQUNSLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVo7QUFBMkIsS0FQN0M7QUFRRSxlQUFXLEVBQUVmLFdBUmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXhYRixDQURGO0FBc1lEOztHQS9oQlF6QixhO1VBaUdrQ3VELDBEOzs7S0FqR2xDdkQsYTs7QUFpaUJULElBQU0ySixlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ2xDakosT0FBRyxFQUFFaUo7QUFENkIsR0FBWjtBQUFBLENBQXhCOztBQUlBLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ2pKLFFBQUQ7QUFBQSxTQUFlO0FBQ3hDUixnQkFBWSxFQUFFMEosaUVBQWtCLENBQUM7QUFBRWxHLFVBQUksRUFBSkEsaURBQUlBO0FBQU4sS0FBRCxFQUFXaEQsUUFBWCxDQURRO0FBRXhDQSxZQUFRLEVBQUVBO0FBRjhCLEdBQWY7QUFBQSxDQUEzQjs7QUFLZW1KLDJIQUFPLENBQUNKLGVBQUQsRUFBa0JFLGtCQUFsQixDQUFQLENBQTZDN0osYUFBN0MsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90aW1lbGluZS4xN2UyOTgzMGNlNmEyMjc3Yjg3Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy90aW1lbGluZS1wb3N0Lm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBDb21tZW50cyBmcm9tICcuL0NvbW1lbnRzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBBY3Rpb25zIGZyb20gJy4vQWN0aW9ucyc7XHJcbmltcG9ydCBUcmltVGV4dCBmcm9tICcuLi9jb21tb24vVHJpbVRleHQnO1xyXG5pbXBvcnQgeyB1c2VNb2RhbCB9IGZyb20gJ3JlYWN0LW1vZGFsLWhvb2snO1xyXG5pbXBvcnQgQ29tbWVudHNNb2RhbCBmcm9tICcuL0NvbW1lbnRzTW9kYWwnO1xyXG5pbXBvcnQgUGhvdG9zTW9kYWwgZnJvbSAnLi4vcHJvZmlsZS9QaG90b3NNb2RhbCc7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnLi4vY29tbW9uL0F2YXRhcic7XHJcbmltcG9ydCB7IHNob3cgfSBmcm9tICdyZWR1eC1tb2RhbCc7XHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IEFQSSBmcm9tICdjb25maWdzL0FQSSc7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJ3ZpZGVvLXJlYWN0JztcclxuaW1wb3J0IHsgUGhvdG9zUHJvdmlkZXIgfSAgZnJvbSAnY29udGFpbmVycy9QaG90b3Mvc3RvcmFnZS9QaG90b0NvbnRleHQnO1xyXG5pbXBvcnQgeyBMaW5rUHJldmlldyB9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL0xpbmtQcmV2aWV3JztcclxuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xyXG5pbXBvcnQgVmlkZW9QbGF5ZXIgZnJvbSAnY29tcG9uZW50cy9jb21tb24vVmlkZW9QbGF5ZXInO1xyXG5pbXBvcnQgeyBCdXR0b24sIFVwbG9hZCwgbWVzc2FnZSwgSW5wdXQsIFRhYnMsIFJhdGUsIG5vdGlmaWNhdGlvbiwgUHJvZ3Jlc3MsIFBvcG92ZXIsIFRvb2x0aXAgfSBmcm9tICdhbnRkJztcclxuXHJcbmZ1bmN0aW9uIFRpbWVsaW5lUG9zdHMoeyBcclxuICBkYXRhLCBcclxuICBvblVwZGF0ZVRpbWVsaW5lLCBcclxuICBvblJhdGVQb3N0LCBcclxuICBtb2RhbEFjdGlvbnMsIFxyXG4gIHNoYXJlQWN0aW9uLCBcclxuICBsaWtlQWN0aW9uLCBcclxuICBkZWxldGVBY3Rpb24sIFxyXG4gIGRpc2FibGVEZWxldGUsIFxyXG4gIHBhcmVudERpdiA9IG51bGwsIFxyXG4gIGF1dGgsXHJcbiAga2ptLFxyXG4gIGRpc3BhdGNoXHJcbn0pIHtcclxuICBjb25zdCBbcHJvY2Vzc2luZ1ZpZGVvcywgc2V0UHJvY2Vzc2luZ1ZpZGVvc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgXHJcbiAgY29uc3QgaW1hZ2VzTGlzdCA9IFtdLmNvbmNhdC5hcHBseShbXSwgZGF0YS5tYXAoaXRlbSA9PiB7IFxyXG4gICAgICBpZihpdGVtLnR5cGUgPT09ICdQaG90bycpIHtcclxuICAgICAgICByZXR1cm4gIGl0ZW07XHJcbiAgICAgIH0gZWxzZSBpZihpdGVtLnR5cGUgPT09ICdWaWRlb0NsaXAnKSB7XHJcbiAgICAgICAgcmV0dXJuICBbXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gIGl0ZW0uaW1hZ2VzIFxyXG4gICAgICB9IFxyXG4gICAgfVxyXG4gICkpXHJcblxyXG4gIGNvbnN0IHZpZGVvTGlzdCA9IFtdLmNvbmNhdC5hcHBseShbXSwgZGF0YS5tYXAoaXRlbSA9PiB7XHJcbiAgICBpZihpdGVtLnR5cGUgPT09ICdWaWRlb0NsaXAnKSB7XHJcbiAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHR5cGVvZiBpdGVtLnZpZGVvcyAhPT0gJ3VuZGVmaW5lZCc/aXRlbS52aWRlb3M6W107XHJcbiAgICB9XHJcbiAgfSkpXHJcbiAgXHJcblxyXG4gIGNvbnN0IGdldENvbW1lbnRzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYoIWFjdGl2ZVR5cGUgfHwgIWFjdGl2ZVBvc3RJZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgdXJsID0gJyc7XHJcbiAgICAgIGlmIChhY3RpdmVUeXBlID09PSAnUGhvdG8nKSB7XHJcbiAgICAgICAgdXJsID0gJy9waG90b3MvZ2V0LWNvbW1lbnRzJztcclxuICAgICAgfSBlbHNlIGlmIChhY3RpdmVUeXBlID09PSAnVmlkZW9DbGlwJykge1xyXG4gICAgICAgIHVybCA9ICcvdmlkZW8tY2xpcHMvZ2V0LWNvbW1lbnRzJztcclxuICAgICAgfSBlbHNlIGlmIChhY3RpdmVUeXBlID09PSAnSXRlbScpIHtcclxuICAgICAgICB1cmwgPSAnL2l0ZW1zL2dldC1jb21tZW50cyc7XHJcbiAgICAgIH0gZWxzZSBpZiAoYWN0aXZlVHlwZSA9PT0gJ1Bvc3QnKSB7XHJcbiAgICAgICAgdXJsID0gJy9wb3N0cy9nZXQtY29tbWVudHMnO1xyXG4gICAgICB9IGVsc2UgaWYgKGFjdGl2ZVR5cGUgPT09ICdDb21tZW50Jykge1xyXG4gICAgICAgIHVybCA9ICcvY29tbWVudHMvZ2V0LWNvbW1lbnRzJztcclxuICAgICAgfSBlbHNlIGlmIChhY3RpdmVUeXBlID09PSAnU2hhcmUnKSB7XHJcbiAgICAgICAgdXJsID0gJy9zaGFyZXMvZ2V0LWNvbW1lbnRzJztcclxuICAgICAgfSBlbHNlIGlmIChhY3RpdmVUeXBlID09PSAnTWFya2V0cGxhY2VJdGVtRm9yU2FsZScpIHtcclxuICAgICAgICB1cmwgPSAnL21hcmtldHBsYWNlL2l0ZW1zLWZvci1zYWxlL2dldC1jb21tZW50cyc7XHJcbiAgICAgIH0gZWxzZSBpZiAoYWN0aXZlVHlwZSA9PT0gJ01hcmtldHBsYWNlSXRlbVRvQnV5Jykge1xyXG4gICAgICAgIHVybCA9ICcvbWFya2V0cGxhY2UvaXRlbXMtdG8tYnV5L2dldC1jb21tZW50cyc7XHJcbiAgICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCAgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGlkOiBhY3RpdmVQb3N0SWQsXHJcbiAgICAgICAgICAgIG9mZnNldDogMCxcclxuICAgICAgICAgICAgZmlyc3Q6IDI1XHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcbiAgICAgIGlmKHN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICBzZXRDb21tbmV0cyhkYXRhKTtcclxuICAgICAgfVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHZpZGVvTGlzdC5tYXAodmlkZW9JdGVtID0+IHtcclxuICAgICAgaWYodmlkZW9JdGVtLnByb2Nlc3NpbmcpIHtcclxuICAgICAgICBzZXRQcm9jZXNzaW5nVmlkZW9zKFsuLi5wcm9jZXNzaW5nVmlkZW9zLCB2aWRlb0l0ZW0uaWRdKVxyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0FQUF9OT1RJRklDQVRJT04nLCBwYXlsb2FkOiB0cnVlIH0pO1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGSUNBVElPTl9EQVRBJywgcGF5bG9hZDogdmlkZW9JdGVtLmlkIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0sIGRhdGEpXHJcbiBcclxuICBjb25zdCBbYWN0aXZlUG9zdElkLCBzZXRBY3RpdmVQb3N0SWRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2FjdGl2ZVR5cGUsIHNldEFjdGl2ZVR5cGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW21vZGFsTW9kZSwgc2V0TW9kYWxNb2RlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY29tbWVudHMsIHNldENvbW1uZXRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbYWN0aXZlSW1hZ2VJZCwgc2V0QWN0aXZlSW1hZ2VJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbaW1hZ2VEYXRhLCBzZXRJbWFnZURhdGFdID0gdXNlU3RhdGUoaW1hZ2VzTGlzdCk7XHJcbiAgbGV0IHZpZGVvUmVmID0gW107XHJcbiAgXHJcbiAgY29uc3QgW3Nob3dQaG90b01vZGFsLCBoaWRlUGhvdG9Nb2RhbF0gPSB1c2VNb2RhbCgoeyBpbjogb3BlbiB9KSA9PiAoXHJcbiAgICA8UGhvdG9zUHJvdmlkZXI+XHJcbiAgICAgIDxQaG90b3NNb2RhbFxyXG4gICAgICAgIHRpdGxlPVwiUGhvdG8gZGV0YWlsXCJcclxuICAgICAgICBzaG93TW9kYWw9e29wZW59XHJcbiAgICAgICAgb25DbG9zZT17aGlkZVBob3RvTW9kYWx9XHJcbiAgICAgICAgb25SYXRlUG9zdD17b25SYXRlUG9zdH1cclxuICAgICAgICBkYXRhPXtpbWFnZURhdGF9XHJcbiAgICAgICAgbGlrZUFjdGlvbj17bGlrZUFjdGlvbn1cclxuICAgICAgICBzaGFyZUFjdGlvbj17c2hhcmVBY3Rpb259XHJcbiAgICAgICAgb25VcGRhdGVUaW1lbGluZT17b25VcGRhdGVUaW1lbGluZX1cclxuICAgICAgICBhdXRoPXthdXRofVxyXG4gICAgICAgIGFjdGl2ZUltYWdlSWQ9e2FjdGl2ZUltYWdlSWR9XHJcbiAgICAgIC8+XHJcbiAgICA8L1Bob3Rvc1Byb3ZpZGVyPlxyXG4gICksIFtpbWFnZURhdGFdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2hvd0NvbW1lbnRNb2RhbCA9IChpZCwgdHlwZSkgPT4ge1xyXG4gICAgc2V0QWN0aXZlUG9zdElkKGlkKTtcclxuICAgIHNldEFjdGl2ZVR5cGUodHlwZSk7XHJcbiAgICBzZXRNb2RhbE1vZGUoIW1vZGFsTW9kZSk7XHJcbiAgICBtb2RhbEFjdGlvbnMuc2hvdygnY29tbWVudE1vZGFsJywgeyBpZDogYWN0aXZlUG9zdElkIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZ2dsZUNvbW1lbnRTaG93ID0gKGluZGV4KSA9PlxyXG4gICAgc2V0Q29tbWVudFNob3coY29tbWVudFNob3cgPT09IGluZGV4ID8gbnVsbCA6IGluZGV4KTtcclxuXHJcbiAgY29uc3QgZ2V0TGlrZUFjdGlvblVzZXJJbmZvID0gKGRhdGEpID0+IHtcclxuICAgIHZhciBmaW5hbERhdGEgPSAnJztcclxuICAgIGRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICBmaW5hbERhdGEgPSBmaW5hbERhdGEgKyAnICcgKyBpdGVtLmFjY291bnQuZmlyc3ROYW1lICsgJycgKyBpdGVtLmFjY291bnQubGFzdE5hbWUgO1xyXG4gICAgfSlcclxuICAgIHJldHVybiBmaW5hbERhdGE7XHJcbiAgfVxyXG5cclxuICBjb25zdCBvblVwZGF0ZUNvbW1lbnRzID0gYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHNldENvbW1uZXRzKFsuLi5jb21tZW50cywgey4uLmRhdGE/LmNvbW1lbnRzWzBdLCBhY2NvdW50OiBhdXRoLnVzZXJ9XSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBJbWFnZVNvcnRpbmcgPSAoYWN0aXZlSW1hZ2VJZCkgPT4ge1xyXG4gICAgXHJcbiAgICBsZXQgY2Fyb3VzZWxEYXRhID0gW107XHJcbiAgICBsZXQgZmlyc3REYXRhID0gW107XHJcbiAgICBsZXQgc2Vjb25kRGF0YSA9IFtdO1xyXG5cclxuICAgIGZvcih2YXIgaT0wOyBpPGltYWdlRGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZihpbWFnZURhdGFbaV0uc3JjID09PSBhY3RpdmVJbWFnZUlkKSB7XHJcbiAgICAgICAgZmlyc3REYXRhID0gaW1hZ2VEYXRhLnNsaWNlKGksIGltYWdlRGF0YS5sZW5ndGgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIHNlY29uZERhdGEucHVzaChpbWFnZURhdGFbaV0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjYXJvdXNlbERhdGEgPSBbLi4uZmlyc3REYXRhLCAuLi5zZWNvbmREYXRhXTtcclxuICAgIHNldEltYWdlRGF0YShjYXJvdXNlbERhdGEpO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpdml0eV9jb250ZW50fSA+XHJcbiAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICB2YXIgeyBhY2NvdW50LCBjcmVhdGVkQXQsIHR5cGUsIGNvbW1lbnRzLCBjb21tZW50c0NvdW50LCB0ZXh0LCBpbWFnZXMsIHZpZGVvcywgc2hhcmVkLCBjb21tZW50ZWQsIGJsb2JfdG4sIHRodW1ibmFpbCwgcmVhY3Rpb25zLCB0ZXh0X2xpbmtzIH0gPSBpdGVtO1xyXG4gICAgICAgIHZpZGVvUmVmLnB1c2gobnVsbCk7XHJcbiAgICAgICAgY29uc3QgcHJvZmlsZVVybCA9IGFjY291bnQgIT09IG51bGwgJiYgYWNjb3VudCAhPT0gdW5kZWZpbmVkID8gYCR7YWNjb3VudC5wcm9maWxlUGhvdG8/LnNyY31gIDogbnVsbFxyXG4gICAgICAgIGNvbnN0IGZ1bGxOYW1lID0gYCR7YWNjb3VudD8uZmlyc3ROYW1lfSAke2FjY291bnQ/Lmxhc3ROYW1lfWA7XHJcbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSBhY2NvdW50Py51c2VybmFtZTtcclxuICAgICAgICBjb25zdCBsaWtlRGF0YSA9IHJlYWN0aW9ucz8gcmVhY3Rpb25zPy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlYWN0aW9uID09ICdMSUtFJyk6W107XHJcbiAgICAgICAgY29uc3QgaGVhcnREYXRhID0gIHJlYWN0aW9ucz8gcmVhY3Rpb25zPy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlYWN0aW9uID09ICdIRUFSVCcpOltdO1xyXG4gICAgICAgIGNvbnN0IHdvd0RhdGEgPSByZWFjdGlvbnMgPyByZWFjdGlvbnM/LmZpbHRlcihpdGVtID0+IGl0ZW0ucmVhY3Rpb24gPT0gJ1dPVycpOltdO1xyXG4gICAgICAgIGNvbnN0IGhhaGFEYXRhID0gcmVhY3Rpb25zID8gcmVhY3Rpb25zPy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlYWN0aW9uID09ICdIQUhBJyk6W107XHJcbiAgICAgICAgY29uc3Qgc2FkRGF0YSA9IHJlYWN0aW9ucyA/IHJlYWN0aW9ucz8uZmlsdGVyKGl0ZW0gPT4gaXRlbS5yZWFjdGlvbiA9PSAnU0FEJyk6W107XHJcbiAgICAgIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3R9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICB7IWRpc2FibGVEZWxldGUgJiYgKGFjY291bnQ/LnVzZXJuYW1lID09IGF1dGg/LnVzZXI/LnVzZXJuYW1lKT88Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ3dpbmRvdy1jbG9zZSddfSBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGZsb2F0OiAncmlnaHQnLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAyNSxcclxuICAgICAgICAgICAgICBtYXJnaW5SaWdodDogMTAsXHJcbiAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlQWN0aW9uKGl0ZW0uaWQsIHR5cGUpfVxyXG4gICAgICAgICAgICAvPjpudWxsfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RfaGVhZGVyfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn0+XHJcbiAgICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgIHRleHQ9e2Z1bGxOYW1lfVxyXG4gICAgICAgICAgICAgICAgICB1cmw9e3Byb2ZpbGVVcmx9XHJcbiAgICAgICAgICAgICAgICAgIHNpemU9ezYwfVxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJTaXplPXszfVxyXG4gICAgICAgICAgICAgICAgICB1c2VybmFtZT17dXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfaW5mb30+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy51c2VyX25hbWV9PntmdWxsTmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kYXRlfT5cclxuICAgICAgICAgICAgICB7bW9tZW50KGNyZWF0ZWRBdCkuZm9ybWF0KCdNTU0gREQsIFlZWVkgLSBISDptbSBBJyl9XHJcbiAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cclxuICAgICAgICAgICAgICA8VHJpbVRleHQgbGltaXQ9ezExMH0+XHJcbiAgICAgICAgICAgICAgICB7IHR5cGUhPT0nU2hhcmUnP3RleHQ6c2hhcmVkLnRleHQgfVxyXG4gICAgICAgICAgICAgIDwvVHJpbVRleHQ+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHt0ZXh0X2xpbmtzICYmIHRleHRfbGlua3MubWFwKChpdGVtLCBpKSA9PiBcclxuICAgICAgICAgICAgICA8TGlua1ByZXZpZXcgZGF0YT17aXRlbX0ga2V5PXtpdGVtLmlkICsgJyAnICsgaX0vPiAgXHJcbiAgICAgICAgICAgICkgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAge3ZpZGVvcyAmJiB2aWRlb3MubGVuZ3RoID4gMCAmJiB2aWRlb3MubWFwKCh2aWRlbywgaSkgPT4ge1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgbGV0IHZpZGVvSnNPcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgIG11dGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwb3N0ZXI6YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7dmlkZW8udGh1bWJuYWlsLnNyY31gLFxyXG4gICAgICAgICAgICAgICAgc291cmNlczogW3tcclxuICAgICAgICAgICAgICAgICAgc3JjOiBgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHt2aWRlby5zcmN9YCxcclxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJhcHBsaWNhdGlvbi94LW1wZWdVUkxcIixcclxuICAgICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBodG1sNToge1xyXG4gICAgICAgICAgICAgICAgICAgIGhsczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3ZlcnJpZGVOYXRpdmU6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZpZGVvc30ga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgeyF2aWRlby5wcm9jZXNzaW5nPzw+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8VmlkZW9QbGF5ZXIgeyAuLi52aWRlb0pzT3B0aW9ucyB9IC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICB7LyogPFZpZGVvUGxheWVyIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjYwXCIgc291cmNlPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHt2aWRlby5zcmN9YH0gLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDxQbGF5ZXJcclxuICAgICAgICAgICAgICAgICAgICBwbGF5c0lubGluZVxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5XHJcbiAgICAgICAgICAgICAgICAgICAgbXV0ZWRcclxuICAgICAgICAgICAgICAgICAgICBwb3N0ZXI9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke3ZpZGVvLnRodW1ibmFpbC5zcmN9YH1cclxuICAgICAgICAgICAgICAgICAgICByZWY9e3BsYXllciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZih2aWRlb1JlZiAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWRlb1JlZltpbmRleF0gPSBwbGF5ZXI7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c291cmNlIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7dmlkZW8uc3JjfWB9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvUGxheWVyPiBcclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB2aWRlb1JlZltpbmRleF0ucGxheSgpfSByZWY9e2VsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWVsKSByZXR1cm47IFxyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZih2aWRlb1JlZiAmJiB2aWRlb1JlZltpbmRleF0gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvc2l0aW9uWSA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHBvc2l0aW9uWSA+ICh3aW5kb3cuaW5uZXJIZWlnaHQvMikgJiYgcG9zaXRpb25ZIDwgd2luZG93LmlubmVySGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW9SZWZbaW5kZXhdLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2aWRlb1JlZltpbmRleF0ucGF1c2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgaWYocGFyZW50RGl2ICE9PSBudWxsICYmIHBhcmVudERpdj8uY3VycmVudCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcGFyZW50RGl2Py5jdXJyZW50Py5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHZpZGVvUmVmICYmIHZpZGVvUmVmW2luZGV4XSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3NpdGlvblkgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHBvc2l0aW9uWSA+ICh3aW5kb3cuaW5uZXJIZWlnaHQvMikgJiYgcG9zaXRpb25ZIDwgd2luZG93LmlubmVySGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWRlb1JlZltpbmRleF0ucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWRlb1JlZltpbmRleF0ucGF1c2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdmlzaWJpbGl0eTogJ2hpZGRlbicgfX1cclxuICAgICAgICAgICAgICAgICAgPkJ1dHRvbiBGb3IgcG9zaXRpb24gb2YgVmlkZW88L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC8+OjxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+WW91ciBwb3N0aW5nIHZpZGVvIGlzIG9uIHByb2Nlc3NpbmcuLi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPFByb2dyZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VDb2xvcj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnMCUnOiAnIzEwOGVlOScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICcxMDAlJzogJyM4N2QwNjgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHBlcmNlbnQ9ezk5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgZm9ybWF0PXtwZXJjZW50ID0+IGBgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7aW1hZ2VzICYmIGltYWdlcy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdF9jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5pbWFnZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIFtzdHlsZXMuZ3JpZF8yXTogaW1hZ2VzLmxlbmd0aCA9PSAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFtzdHlsZXMuZ3JpZF8zXTogaW1hZ2VzLmxlbmd0aCA9PSAzLFxyXG4gICAgICAgICAgICAgICAgICAgIFtzdHlsZXMuZ3JpZF80XTogaW1hZ2VzLmxlbmd0aCA9PSA0LFxyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge2ltYWdlcy5sZW5ndGggPT0gMSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZV9pdGVtfSBcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZUltYWdlSWQoaW1hZ2VzWzBdLnNyYylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBJbWFnZVNvcnRpbmcoaW1hZ2VzWzBdLnNyYylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93UGhvdG9Nb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1swXS5ibG9iX3RuP2ltYWdlc1swXS5ibG9iX3RuOmltYWdlc1swXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtpbWFnZXMubGVuZ3RoID09IDIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuaW1hZ2VfaXRlbSwgc3R5bGVzLm1haW5fcGhvdG8pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVJbWFnZUlkKGltYWdlc1swXS5zcmMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbWFnZVNvcnRpbmcoaW1hZ2VzWzBdLnNyYylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dQaG90b01vZGFsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMF0uYmxvYl90bj9pbWFnZXNbMF0uYmxvYl90bjppbWFnZXNbMF0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfaXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlSW1hZ2VJZChpbWFnZXNbMV0uc3JjKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSW1hZ2VTb3J0aW5nKGltYWdlc1sxXS5zcmMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93UGhvdG9Nb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzFdLmJsb2JfdG4/aW1hZ2VzWzFdLmJsb2JfdG46aW1hZ2VzWzFdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICB7aW1hZ2VzLmxlbmd0aCA9PSAzICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmltYWdlX2l0ZW0sIHN0eWxlcy5tYWluX3Bob3RvKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlSW1hZ2VJZChpbWFnZXNbMF0uc3JjKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSW1hZ2VTb3J0aW5nKGltYWdlc1swXS5zcmMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93UGhvdG9Nb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzBdLmJsb2JfdG4/aW1hZ2VzWzBdLmJsb2JfdG46aW1hZ2VzWzBdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX2l0ZW19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVJbWFnZUlkKGltYWdlc1sxXS5zcmMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbWFnZVNvcnRpbmcoaW1hZ2VzWzFdLnNyYylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dQaG90b01vZGFsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMV0uYmxvYl90bj9pbWFnZXNbMV0uYmxvYl90bjppbWFnZXNbMV0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfaXRlbX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZUltYWdlSWQoaW1hZ2VzWzJdLnNyYylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEltYWdlU29ydGluZyhpbWFnZXNbMl0uc3JjKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1Bob3RvTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1syXS5ibG9iX3RuP2ltYWdlc1syXS5ibG9iX3RuOmltYWdlc1syXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAge2ltYWdlcy5sZW5ndGggPj0gNCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5pbWFnZV9pdGVtLCBzdHlsZXMubWFpbl9waG90byl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZUltYWdlSWQoaW1hZ2VzWzBdLnNyYylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEltYWdlU29ydGluZyhpbWFnZXNbMF0uc3JjKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1Bob3RvTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1swXS5ibG9iX3RuP2ltYWdlc1swXS5ibG9iX3RuOmltYWdlc1swXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZV9pdGVtfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlSW1hZ2VJZChpbWFnZXNbMV0uc3JjKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSW1hZ2VTb3J0aW5nKGltYWdlc1sxXS5zcmMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93UGhvdG9Nb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzFdLmJsb2JfdG4/aW1hZ2VzWzFdLmJsb2JfdG46aW1hZ2VzWzFdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX2l0ZW19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVJbWFnZUlkKGltYWdlc1syXS5zcmMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbWFnZVNvcnRpbmcoaW1hZ2VzWzJdLnNyYylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dQaG90b01vZGFsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMl0uYmxvYl90bj9pbWFnZXNbMl0uYmxvYl90bjppbWFnZXNbMl0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfaXRlbX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZUltYWdlSWQoaW1hZ2VzWzNdLnNyYylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEltYWdlU29ydGluZyhpbWFnZXNbM10uc3JjKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1Bob3RvTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaG93X21vcmV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPis0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1szXS5ibG9iX3RuP2ltYWdlc1szXS5ibG9iX3RuOmltYWdlc1szXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IDUwIH19IC8+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7dHlwZSA9PSBcIlBob3RvXCI/IGJsb2JfdG4gJiYgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0X2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuaW1hZ2UpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX2l0ZW19IFxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVJbWFnZUlkKGJsb2JfdG4pXHJcbiAgICAgICAgICAgICAgICAgICAgICBJbWFnZVNvcnRpbmcoYmxvYl90bilcclxuICAgICAgICAgICAgICAgICAgICAgIHNob3dQaG90b01vZGFsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtibG9iX3RufWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj46XHJcbiAgICAgICAgICAgIGJsb2JfdG4gJiYgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aWRlb3N9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgIDxQbGF5ZXJcclxuICAgICAgICAgICAgICAgIHBsYXlzSW5saW5lXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheVxyXG4gICAgICAgICAgICAgICAgbXV0ZWRcclxuICAgICAgICAgICAgICAgIHBvc3Rlcj17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7dGh1bWJuYWlsLnNyY31gfVxyXG4gICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtibG9iX3RufWB9XHJcbiAgICAgICAgICAgICAgICByZWY9e3BsYXllciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIC8vIHZpZGVvUmVmID0gcGxheWVyO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlYWN0aW9uc19zaGFyZXNfc3RhdHVzfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlYWN0aW9uc19zdGF0dXN9PlxyXG4gICAgICAgICAgICAgICAgeyBsaWtlRGF0YS5sZW5ndGggPiAwICYmIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPXtnZXRMaWtlQWN0aW9uVXNlckluZm8obGlrZURhdGEpfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ3RodW1icy11cCddfSBzaXplPVwiMXhcIiAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcid9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2xpa2VEYXRhLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD48Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHsgaGFoYURhdGEubGVuZ3RoID4gMCAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKGhhaGFEYXRhKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdncmluJ119IHNpemU9XCIxeFwiICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJ319Lz4gXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2hhaGFEYXRhLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7IGhlYXJ0RGF0YS5sZW5ndGggPiAwICYmIDw+IFxyXG4gICAgICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKGhlYXJ0RGF0YSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAnaGVhcnQnXX0gc2l6ZT1cIjF4XCIgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInfX0vPiBcclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aGVhcnREYXRhLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7IHdvd0RhdGEubGVuZ3RoID4gMCAmJiA8PiBcclxuICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9e2dldExpa2VBY3Rpb25Vc2VySW5mbyh3b3dEYXRhKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdsYXVnaCddfSBzaXplPVwiMXhcIiAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcid9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3dvd0RhdGEubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICA8Lz4gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7IHNhZERhdGEubGVuZ3RoID4gMCAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKHNhZERhdGEpfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ2Zyb3duJ119IHNpemU9XCIxeFwiICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJ319Lz4gXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3NhZERhdGEubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8QWN0aW9uc1xyXG4gICAgICAgICAgICAgIGlkPXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgIHR5cGU9e2l0ZW0udHlwZX1cclxuICAgICAgICAgICAgICBwb3N0UmF0ZT17aXRlbS5yYXRpbmd9XHJcbiAgICAgICAgICAgICAgY29tbWVudHM9e2NvbW1lbnRzfVxyXG4gICAgICAgICAgICAgIG9uUmF0ZVBvc3Q9e29uUmF0ZVBvc3R9XHJcbiAgICAgICAgICAgICAgY29tbWVudHNDb3VudD17Y29tbWVudHNDb3VudH1cclxuICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XHJcbiAgICAgICAgICAgICAgbGlrZUFjdGlvbj17KHRlcm0pID0+IGxpa2VBY3Rpb24odHlwZSwgaXRlbS5pZCwgdGVybSl9XHJcbiAgICAgICAgICAgICAgc2hhcmVBY3Rpb249eygpID0+IHNoYXJlQWN0aW9uKHR5cGUgIT09ICdTaGFyZSc/dHlwZTpzaGFyZWQudHlwZSwgdHlwZSAhPT0gJ1NoYXJlJz9pdGVtLmlkOnNoYXJlZC5pZCl9XHJcbiAgICAgICAgICAgICAgYWN0aW9ucz17XHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7IGhhbmRsZVNob3dDb21tZW50TW9kYWwoaXRlbS5pZCwgaXRlbS50eXBlKSB9IFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPENvbW1lbnRzXHJcbiAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgdHlwZT17aXRlbS50eXBlfVxyXG4gICAgICAgICAgICAgIGRhdGE9e2NvbW1lbnRzfVxyXG4gICAgICAgICAgICAgIG9uVXBkYXRlVGltZWxpbmU9e29uVXBkYXRlVGltZWxpbmV9XHJcbiAgICAgICAgICAgICAgYWN0aXZlUG9zdElkPXthY3RpdmVQb3N0SWR9XHJcbiAgICAgICAgICAgICAgbW9kYWxNb2RlPXttb2RhbE1vZGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuXHJcbiAgICAgIDxDb21tZW50c01vZGFsXHJcbiAgICAgICAgYWN0aXZlUG9zdElkPXthY3RpdmVQb3N0SWR9XHJcbiAgICAgICAgdHlwZT17YWN0aXZlVHlwZX1cclxuICAgICAgICBwb3N0RGF0YT17Y29tbWVudHN9XHJcbiAgICAgICAgb25VcGRhdGVUaW1lbGluZT17b25VcGRhdGVDb21tZW50c31cclxuICAgICAgICB0aXRsZT1cIkNvbW1lbnRzXCJcclxuICAgICAgICBzaG93PXttb2RhbE1vZGV9XHJcbiAgICAgICAgb25DbG9zZT17KCkgPT4ge2NvbnNvbGUubG9nKCdjbG9zZSBtb2RhbCcpfX1cclxuICAgICAgICBnZXRDb21tZW50cz17Z2V0Q29tbWVudHN9XHJcbiAgICAgIC8+XHJcbiAgICAgXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RvcmUpID0+ICh7XHJcbiAga2ptOiBzdG9yZSxcclxufSk7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgbW9kYWxBY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoeyBzaG93IH0sIGRpc3BhdGNoKSxcclxuICBkaXNwYXRjaDogZGlzcGF0Y2hcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShUaW1lbGluZVBvc3RzKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==