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

  var videoRef = [];

  var _useModal = Object(react_modal_hook__WEBPACK_IMPORTED_MODULE_14__["useModal"])(function (_ref3) {
    var open = _ref3["in"];
    return __jsx(containers_Photos_storage_PhotoContext__WEBPACK_IMPORTED_MODULE_23__["PhotosProvider"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
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
        lineNumber: 123,
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
      lineNumber: 160,
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
        lineNumber: 174,
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
        lineNumber: 175,
        columnNumber: 76
      }
    }) : null, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.post_header,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.avatar,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
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
        lineNumber: 185,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.user_info,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 15
      }
    }, __jsx("p", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.user_name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 17
      }
    }, fullName))), __jsx("p", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.date,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 13
      }
    }, moment__WEBPACK_IMPORTED_MODULE_11___default()(createdAt).format('MMM DD, YYYY - HH:mm A')), __jsx("p", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.description,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 13
      }
    }, __jsx(_common_TrimText__WEBPACK_IMPORTED_MODULE_13__["default"], {
      limit: 110,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 15
      }
    }, type !== 'Share' ? text : shared.text)), text_links && text_links.map(function (item, i) {
      return __jsx(components_common_LinkPreview__WEBPACK_IMPORTED_MODULE_24__["LinkPreview"], {
        data: item,
        key: item.id + ' ' + i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209,
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
          lineNumber: 233,
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
          lineNumber: 237,
          columnNumber: 19
        }
      }, __jsx("source", {
        src: "https://www.freeskies.com/static/".concat(video.src),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248,
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
          lineNumber: 250,
          columnNumber: 19
        }
      }, "Button For position of Video")) : __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277,
          columnNumber: 23
        }
      }, __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278,
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
          lineNumber: 279,
          columnNumber: 21
        }
      })));
    }), images && images.length > 0 ? __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.post_content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image, (_classnames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.grid_2, images.length == 2), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.grid_3, images.length == 3), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.grid_4, images.length == 4), _classnames)),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296,
        columnNumber: 17
      }
    }, images.length == 1 && __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image_item,
      onClick: function onClick() {
        showPhotoModal();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].blob_tn ? images[0].blob_tn : images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 310,
        columnNumber: 23
      }
    })), images.length == 2 && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image_item, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.main_photo),
      onClick: function onClick() {
        showPhotoModal();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316,
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
      onClick: function onClick() {
        showPhotoModal();
      },
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
        lineNumber: 333,
        columnNumber: 25
      }
    }))), images.length == 3 && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image_item, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.main_photo),
      onClick: function onClick() {
        showPhotoModal();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 340,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].blob_tn ? images[0].blob_tn : images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 348,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image_item,
      onClick: function onClick() {
        showPhotoModal();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 350,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[1].blob_tn ? images[1].blob_tn : images[1].src),
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
        showPhotoModal();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 359,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[2].blob_tn ? images[2].blob_tn : images[2].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 366,
        columnNumber: 25
      }
    }))), images.length >= 4 && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image_item, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.main_photo),
      onClick: function onClick() {
        showPhotoModal();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 373,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].blob_tn ? images[0].blob_tn : images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 381,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image_item,
      onClick: function onClick() {
        showPhotoModal();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 383,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[1].blob_tn ? images[1].blob_tn : images[1].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 390,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image_item,
      onClick: function onClick() {
        showPhotoModal();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 392,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[2].blob_tn ? images[2].blob_tn : images[2].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 399,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image_item,
      onClick: function onClick() {
        showPhotoModal();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 401,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.show_more,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 408,
        columnNumber: 25
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 409,
        columnNumber: 27
      }
    }, "+4")), __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[3].blob_tn ? images[3].blob_tn : images[3].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 411,
        columnNumber: 25
      }
    }))))) : __jsx("div", {
      style: {
        height: 50
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 418,
        columnNumber: 15
      }
    }), type == "Photo" ? blob_tn && __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.post_content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 421,
        columnNumber: 42
      }
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 422,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image_item,
      onClick: function onClick() {
        showPhotoModal();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 425,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(blob_tn),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 432,
        columnNumber: 19
      }
    })))) : blob_tn && __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.videos,
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 436,
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
        lineNumber: 437,
        columnNumber: 15
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.reactions_shares_status,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 450,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.reactions_status,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 451,
        columnNumber: 15
      }
    }, likeData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(likeData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 453,
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
        lineNumber: 454,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 455,
        columnNumber: 21
      }
    }, likeData.length))), hahaData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(hahaData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 459,
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
        lineNumber: 460,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 461,
        columnNumber: 21
      }
    }, hahaData.length))), heartData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(heartData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 466,
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
        lineNumber: 467,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 468,
        columnNumber: 21
      }
    }, heartData.length))), wowData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(wowData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 473,
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
        lineNumber: 474,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 475,
        columnNumber: 21
      }
    }, wowData.length))), sadData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(sadData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 480,
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
        lineNumber: 481,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 482,
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
        lineNumber: 488,
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
        lineNumber: 502,
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
      lineNumber: 515,
      columnNumber: 7
    }
  }));
}

_s(TimelinePosts, "3W/96duoLyzTLNOKat26nxl1E4Q=", false, function () {
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
    modalActions: Object(redux__WEBPACK_IMPORTED_MODULE_19__["bindActionCreators"])({
      show: redux_modal__WEBPACK_IMPORTED_MODULE_18__["show"]
    }, dispatch),
    dispatch: dispatch
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_20__["connect"])(mapStateToProps, mapDispatchToProps)(TimelinePosts));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aW1lbGluZS9UaW1lbGluZVBvc3RzLmpzIl0sIm5hbWVzIjpbIlRpbWVsaW5lUG9zdHMiLCJkYXRhIiwib25VcGRhdGVUaW1lbGluZSIsIm9uUmF0ZVBvc3QiLCJtb2RhbEFjdGlvbnMiLCJzaGFyZUFjdGlvbiIsImxpa2VBY3Rpb24iLCJkZWxldGVBY3Rpb24iLCJkaXNhYmxlRGVsZXRlIiwicGFyZW50RGl2IiwiYXV0aCIsImtqbSIsImRpc3BhdGNoIiwidXNlU3RhdGUiLCJwcm9jZXNzaW5nVmlkZW9zIiwic2V0UHJvY2Vzc2luZ1ZpZGVvcyIsImltYWdlc0xpc3QiLCJjb25jYXQiLCJhcHBseSIsIm1hcCIsIml0ZW0iLCJ0eXBlIiwiaW1hZ2VzIiwidmlkZW9MaXN0IiwidmlkZW9zIiwiZ2V0Q29tbWVudHMiLCJhY3RpdmVUeXBlIiwiYWN0aXZlUG9zdElkIiwidXJsIiwiQVBJIiwibWV0aG9kIiwiaWQiLCJvZmZzZXQiLCJmaXJzdCIsImhlYWRlcnMiLCJ0b2tlbiIsInJlcXVlc3QiLCJzdGF0dXMiLCJzZXRDb21tbmV0cyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJ2aWRlb0l0ZW0iLCJwcm9jZXNzaW5nIiwicGF5bG9hZCIsInNldEFjdGl2ZVBvc3RJZCIsInNldEFjdGl2ZVR5cGUiLCJtb2RhbE1vZGUiLCJzZXRNb2RhbE1vZGUiLCJjb21tZW50cyIsInZpZGVvUmVmIiwidXNlTW9kYWwiLCJvcGVuIiwiaGlkZVBob3RvTW9kYWwiLCJzaG93UGhvdG9Nb2RhbCIsImhhbmRsZVNob3dDb21tZW50TW9kYWwiLCJzaG93IiwidG9nZ2xlQ29tbWVudFNob3ciLCJpbmRleCIsInNldENvbW1lbnRTaG93IiwiY29tbWVudFNob3ciLCJnZXRMaWtlQWN0aW9uVXNlckluZm8iLCJmaW5hbERhdGEiLCJhY2NvdW50IiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJvblVwZGF0ZUNvbW1lbnRzIiwidXNlciIsInN0eWxlcyIsImFjdGl2aXR5X2NvbnRlbnQiLCJjcmVhdGVkQXQiLCJjb21tZW50c0NvdW50IiwidGV4dCIsInNoYXJlZCIsImNvbW1lbnRlZCIsImJsb2JfdG4iLCJ0aHVtYm5haWwiLCJyZWFjdGlvbnMiLCJ0ZXh0X2xpbmtzIiwicHVzaCIsInByb2ZpbGVVcmwiLCJ1bmRlZmluZWQiLCJwcm9maWxlUGhvdG8iLCJzcmMiLCJmdWxsTmFtZSIsInVzZXJuYW1lIiwibGlrZURhdGEiLCJmaWx0ZXIiLCJyZWFjdGlvbiIsImhlYXJ0RGF0YSIsIndvd0RhdGEiLCJoYWhhRGF0YSIsInNhZERhdGEiLCJwb3N0IiwiZm9udFNpemUiLCJtYXJnaW5SaWdodCIsImN1cnNvciIsInBvc3RfaGVhZGVyIiwiYXZhdGFyIiwidXNlcl9pbmZvIiwidXNlcl9uYW1lIiwiZGF0ZSIsIm1vbWVudCIsImZvcm1hdCIsImRlc2NyaXB0aW9uIiwiaSIsImxlbmd0aCIsInZpZGVvIiwidmlkZW9Kc09wdGlvbnMiLCJhdXRvcGxheSIsIndpZHRoIiwibXV0ZWQiLCJjb250cm9scyIsInBvc3RlciIsInNvdXJjZXMiLCJ3aXRoQ3JlZGVudGlhbHMiLCJodG1sNSIsImhscyIsIm92ZXJyaWRlTmF0aXZlIiwicGxheWVyIiwicGxheSIsImVsIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBvc2l0aW9uWSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInkiLCJpbm5lckhlaWdodCIsInBhdXNlIiwiY3VycmVudCIsInZpc2liaWxpdHkiLCJwZXJjZW50IiwicG9zdF9jb250ZW50IiwiY2xhc3NuYW1lcyIsImltYWdlIiwiZ3JpZF8yIiwiZ3JpZF8zIiwiZ3JpZF80IiwiaW1hZ2VfaXRlbSIsIm1haW5fcGhvdG8iLCJzaG93X21vcmUiLCJoZWlnaHQiLCJyZWFjdGlvbnNfc2hhcmVzX3N0YXR1cyIsInJlYWN0aW9uc19zdGF0dXMiLCJyYXRpbmciLCJ0ZXJtIiwibWFwU3RhdGVUb1Byb3BzIiwic3RvcmUiLCJt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QUVmLFdBUmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQW5XRixDQURGO0FBaVhEOztHQXRmUXpCLGE7VUErRmtDbUQsMEQ7OztLQS9GbENuRCxhOztBQXdmVCxJQUFNa0osZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNsQ3hJLE9BQUcsRUFBRXdJO0FBRDZCLEdBQVo7QUFBQSxDQUF4Qjs7QUFJQSxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUN4SSxRQUFEO0FBQUEsU0FBZTtBQUN4Q1IsZ0JBQVksRUFBRWlKLGlFQUFrQixDQUFDO0FBQUU3RixVQUFJLEVBQUpBLGlEQUFJQTtBQUFOLEtBQUQsRUFBVzVDLFFBQVgsQ0FEUTtBQUV4Q0EsWUFBUSxFQUFFQTtBQUY4QixHQUFmO0FBQUEsQ0FBM0I7O0FBS2UwSSwySEFBTyxDQUFDSixlQUFELEVBQWtCRSxrQkFBbEIsQ0FBUCxDQUE2Q3BKLGFBQTdDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGltZWxpbmUuMzFhOThlOGI2ZDRmOTJiNzE3ODAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvdGltZWxpbmUtcG9zdC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IFBvcG92ZXIsIFRvb2x0aXAgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBDb21tZW50cyBmcm9tICcuL0NvbW1lbnRzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBBY3Rpb25zIGZyb20gJy4vQWN0aW9ucyc7XHJcbmltcG9ydCBUcmltVGV4dCBmcm9tICcuLi9jb21tb24vVHJpbVRleHQnO1xyXG5pbXBvcnQgeyB1c2VNb2RhbCB9IGZyb20gJ3JlYWN0LW1vZGFsLWhvb2snO1xyXG5pbXBvcnQgQ29tbWVudHNNb2RhbCBmcm9tICcuL0NvbW1lbnRzTW9kYWwnO1xyXG5pbXBvcnQgUGhvdG9zTW9kYWwgZnJvbSAnLi4vcHJvZmlsZS9QaG90b3NNb2RhbCc7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnLi4vY29tbW9uL0F2YXRhcic7XHJcbmltcG9ydCB7IHNob3cgfSBmcm9tICdyZWR1eC1tb2RhbCc7XHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IEFQSSBmcm9tICdjb25maWdzL0FQSSc7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJ3ZpZGVvLXJlYWN0JztcclxuaW1wb3J0IHsgUGhvdG9zUHJvdmlkZXIgfSAgZnJvbSAnY29udGFpbmVycy9QaG90b3Mvc3RvcmFnZS9QaG90b0NvbnRleHQnO1xyXG5pbXBvcnQgeyBMaW5rUHJldmlldyB9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL0xpbmtQcmV2aWV3JztcclxuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xyXG5pbXBvcnQgVmlkZW9QbGF5ZXIgZnJvbSAnY29tcG9uZW50cy9jb21tb24vVmlkZW9QbGF5ZXInO1xyXG5pbXBvcnQgeyBQcm9ncmVzcyB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBCdXR0b24sIFVwbG9hZCwgbWVzc2FnZSwgSW5wdXQsIFRhYnMsIFJhdGUsIG5vdGlmaWNhdGlvbiB9IGZyb20gJ2FudGQnO1xyXG5cclxuZnVuY3Rpb24gVGltZWxpbmVQb3N0cyh7IFxyXG4gIGRhdGEsIFxyXG4gIG9uVXBkYXRlVGltZWxpbmUsIFxyXG4gIG9uUmF0ZVBvc3QsIFxyXG4gIG1vZGFsQWN0aW9ucywgXHJcbiAgc2hhcmVBY3Rpb24sIFxyXG4gIGxpa2VBY3Rpb24sIFxyXG4gIGRlbGV0ZUFjdGlvbiwgXHJcbiAgZGlzYWJsZURlbGV0ZSwgXHJcbiAgcGFyZW50RGl2ID0gbnVsbCwgXHJcbiAgYXV0aCxcclxuICBram0sXHJcbiAgZGlzcGF0Y2hcclxufSkge1xyXG4gIGNvbnN0IFtwcm9jZXNzaW5nVmlkZW9zLCBzZXRQcm9jZXNzaW5nVmlkZW9zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBpbWFnZXNMaXN0ID0gW10uY29uY2F0LmFwcGx5KFtdLCBkYXRhLm1hcChpdGVtID0+IHsgXHJcbiAgICAgIGlmKGl0ZW0udHlwZSA9PT0gJ1Bob3RvJykge1xyXG4gICAgICAgIHJldHVybiAgaXRlbTtcclxuICAgICAgfSBlbHNlIGlmKGl0ZW0udHlwZSA9PT0gJ1ZpZGVvQ2xpcCcpIHtcclxuICAgICAgICByZXR1cm4gIFtdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAgaXRlbS5pbWFnZXMgXHJcbiAgICAgIH0gXHJcbiAgICB9XHJcbiAgKSlcclxuXHJcbiAgY29uc3QgdmlkZW9MaXN0ID0gW10uY29uY2F0LmFwcGx5KFtdLCBkYXRhLm1hcChpdGVtID0+IHtcclxuICAgIGlmKGl0ZW0udHlwZSA9PT0gJ1ZpZGVvQ2xpcCcpIHtcclxuICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdHlwZW9mIGl0ZW0udmlkZW9zICE9PSAndW5kZWZpbmVkJz9pdGVtLnZpZGVvczpbXTtcclxuICAgIH1cclxuICB9KSlcclxuICBcclxuXHJcbiAgY29uc3QgZ2V0Q29tbWVudHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZighYWN0aXZlVHlwZSB8fCAhYWN0aXZlUG9zdElkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciB1cmwgPSAnJztcclxuICAgICAgaWYgKGFjdGl2ZVR5cGUgPT09ICdQaG90bycpIHtcclxuICAgICAgICB1cmwgPSAnL3Bob3Rvcy9nZXQtY29tbWVudHMnO1xyXG4gICAgICB9IGVsc2UgaWYgKGFjdGl2ZVR5cGUgPT09ICdWaWRlb0NsaXAnKSB7XHJcbiAgICAgICAgdXJsID0gJy92aWRlby1jbGlwcy9nZXQtY29tbWVudHMnO1xyXG4gICAgICB9IGVsc2UgaWYgKGFjdGl2ZVR5cGUgPT09ICdJdGVtJykge1xyXG4gICAgICAgIHVybCA9ICcvaXRlbXMvZ2V0LWNvbW1lbnRzJztcclxuICAgICAgfSBlbHNlIGlmIChhY3RpdmVUeXBlID09PSAnUG9zdCcpIHtcclxuICAgICAgICB1cmwgPSAnL3Bvc3RzL2dldC1jb21tZW50cyc7XHJcbiAgICAgIH0gZWxzZSBpZiAoYWN0aXZlVHlwZSA9PT0gJ0NvbW1lbnQnKSB7XHJcbiAgICAgICAgdXJsID0gJy9jb21tZW50cy9nZXQtY29tbWVudHMnO1xyXG4gICAgICB9IGVsc2UgaWYgKGFjdGl2ZVR5cGUgPT09ICdTaGFyZScpIHtcclxuICAgICAgICB1cmwgPSAnL3NoYXJlcy9nZXQtY29tbWVudHMnO1xyXG4gICAgICB9IGVsc2UgaWYgKGFjdGl2ZVR5cGUgPT09ICdNYXJrZXRwbGFjZUl0ZW1Gb3JTYWxlJykge1xyXG4gICAgICAgIHVybCA9ICcvbWFya2V0cGxhY2UvaXRlbXMtZm9yLXNhbGUvZ2V0LWNvbW1lbnRzJztcclxuICAgICAgfSBlbHNlIGlmIChhY3RpdmVUeXBlID09PSAnTWFya2V0cGxhY2VJdGVtVG9CdXknKSB7XHJcbiAgICAgICAgdXJsID0gJy9tYXJrZXRwbGFjZS9pdGVtcy10by1idXkvZ2V0LWNvbW1lbnRzJztcclxuICAgICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0ICBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgaWQ6IGFjdGl2ZVBvc3RJZCxcclxuICAgICAgICAgICAgb2Zmc2V0OiAwLFxyXG4gICAgICAgICAgICBmaXJzdDogMjVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuICAgICAgaWYoc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgIHNldENvbW1uZXRzKGRhdGEpO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdmlkZW9MaXN0Lm1hcCh2aWRlb0l0ZW0gPT4ge1xyXG4gICAgICBpZih2aWRlb0l0ZW0ucHJvY2Vzc2luZykge1xyXG4gICAgICAgIHNldFByb2Nlc3NpbmdWaWRlb3MoWy4uLnByb2Nlc3NpbmdWaWRlb3MsIHZpZGVvSXRlbS5pZF0pXHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnQVBQX05PVElGSUNBVElPTicsIHBheWxvYWQ6IHRydWUgfSk7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZJQ0FUSU9OX0RBVEEnLCBwYXlsb2FkOiB2aWRlb0l0ZW0uaWQgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSwgZGF0YSlcclxuIFxyXG4gIGNvbnN0IFthY3RpdmVQb3N0SWQsIHNldEFjdGl2ZVBvc3RJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbYWN0aXZlVHlwZSwgc2V0QWN0aXZlVHlwZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbbW9kYWxNb2RlLCBzZXRNb2RhbE1vZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtjb21tZW50cywgc2V0Q29tbW5ldHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBsZXQgdmlkZW9SZWYgPSBbXTtcclxuICBcclxuICBjb25zdCBbc2hvd1Bob3RvTW9kYWwsIGhpZGVQaG90b01vZGFsXSA9IHVzZU1vZGFsKCh7IGluOiBvcGVuIH0pID0+IChcclxuICAgIDxQaG90b3NQcm92aWRlcj5cclxuICAgICAgPFBob3Rvc01vZGFsXHJcbiAgICAgICAgdGl0bGU9XCJQaG90byBkZXRhaWxcIlxyXG4gICAgICAgIHNob3dNb2RhbD17b3Blbn1cclxuICAgICAgICBvbkNsb3NlPXtoaWRlUGhvdG9Nb2RhbH1cclxuICAgICAgICBvblJhdGVQb3N0PXtvblJhdGVQb3N0fVxyXG4gICAgICAgIGRhdGE9e2ltYWdlc0xpc3R9XHJcbiAgICAgICAgbGlrZUFjdGlvbj17bGlrZUFjdGlvbn1cclxuICAgICAgICBzaGFyZUFjdGlvbj17c2hhcmVBY3Rpb259XHJcbiAgICAgICAgb25VcGRhdGVUaW1lbGluZT17b25VcGRhdGVUaW1lbGluZX1cclxuICAgICAgICBhdXRoPXthdXRofVxyXG4gICAgICAvPlxyXG4gICAgPC9QaG90b3NQcm92aWRlcj5cclxuICApKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2hvd0NvbW1lbnRNb2RhbCA9IChpZCwgdHlwZSkgPT4ge1xyXG4gICAgc2V0QWN0aXZlUG9zdElkKGlkKTtcclxuICAgIHNldEFjdGl2ZVR5cGUodHlwZSk7XHJcbiAgICBzZXRNb2RhbE1vZGUoIW1vZGFsTW9kZSk7XHJcbiAgICBtb2RhbEFjdGlvbnMuc2hvdygnY29tbWVudE1vZGFsJywgeyBpZDogYWN0aXZlUG9zdElkIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZ2dsZUNvbW1lbnRTaG93ID0gKGluZGV4KSA9PlxyXG4gICAgc2V0Q29tbWVudFNob3coY29tbWVudFNob3cgPT09IGluZGV4ID8gbnVsbCA6IGluZGV4KTtcclxuXHJcbiAgY29uc3QgZ2V0TGlrZUFjdGlvblVzZXJJbmZvID0gKGRhdGEpID0+IHtcclxuICAgIHZhciBmaW5hbERhdGEgPSAnJztcclxuICAgIGRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICBmaW5hbERhdGEgPSBmaW5hbERhdGEgKyAnICcgKyBpdGVtLmFjY291bnQuZmlyc3ROYW1lICsgJycgKyBpdGVtLmFjY291bnQubGFzdE5hbWUgO1xyXG4gICAgfSlcclxuICAgIHJldHVybiBmaW5hbERhdGE7XHJcbiAgfVxyXG5cclxuICBjb25zdCBvblVwZGF0ZUNvbW1lbnRzID0gYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHNldENvbW1uZXRzKFsuLi5jb21tZW50cywgey4uLmRhdGE/LmNvbW1lbnRzWzBdLCBhY2NvdW50OiBhdXRoLnVzZXJ9XSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpdml0eV9jb250ZW50fSA+XHJcbiAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICB2YXIgeyBhY2NvdW50LCBjcmVhdGVkQXQsIHR5cGUsIGNvbW1lbnRzLCBjb21tZW50c0NvdW50LCB0ZXh0LCBpbWFnZXMsIHZpZGVvcywgc2hhcmVkLCBjb21tZW50ZWQsIGJsb2JfdG4sIHRodW1ibmFpbCwgcmVhY3Rpb25zLCB0ZXh0X2xpbmtzIH0gPSBpdGVtO1xyXG4gICAgICAgIHZpZGVvUmVmLnB1c2gobnVsbCk7XHJcbiAgICAgICAgY29uc3QgcHJvZmlsZVVybCA9IGFjY291bnQgIT09IG51bGwgJiYgYWNjb3VudCAhPT0gdW5kZWZpbmVkID8gYCR7YWNjb3VudC5wcm9maWxlUGhvdG8/LnNyY31gIDogbnVsbFxyXG4gICAgICAgIGNvbnN0IGZ1bGxOYW1lID0gYCR7YWNjb3VudD8uZmlyc3ROYW1lfSAke2FjY291bnQ/Lmxhc3ROYW1lfWA7XHJcbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSBhY2NvdW50Py51c2VybmFtZTtcclxuICAgICAgICBjb25zdCBsaWtlRGF0YSA9IHJlYWN0aW9ucz8gcmVhY3Rpb25zPy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlYWN0aW9uID09ICdMSUtFJyk6W107XHJcbiAgICAgICAgY29uc3QgaGVhcnREYXRhID0gIHJlYWN0aW9ucz8gcmVhY3Rpb25zPy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlYWN0aW9uID09ICdIRUFSVCcpOltdO1xyXG4gICAgICAgIGNvbnN0IHdvd0RhdGEgPSByZWFjdGlvbnMgPyByZWFjdGlvbnM/LmZpbHRlcihpdGVtID0+IGl0ZW0ucmVhY3Rpb24gPT0gJ1dPVycpOltdO1xyXG4gICAgICAgIGNvbnN0IGhhaGFEYXRhID0gcmVhY3Rpb25zID8gcmVhY3Rpb25zPy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlYWN0aW9uID09ICdIQUhBJyk6W107XHJcbiAgICAgICAgY29uc3Qgc2FkRGF0YSA9IHJlYWN0aW9ucyA/IHJlYWN0aW9ucz8uZmlsdGVyKGl0ZW0gPT4gaXRlbS5yZWFjdGlvbiA9PSAnU0FEJyk6W107XHJcbiAgICAgIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3R9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICB7IWRpc2FibGVEZWxldGUgJiYgKGFjY291bnQ/LnVzZXJuYW1lID09IGF1dGg/LnVzZXI/LnVzZXJuYW1lKT88Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ3dpbmRvdy1jbG9zZSddfSBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGZsb2F0OiAncmlnaHQnLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAyNSxcclxuICAgICAgICAgICAgICBtYXJnaW5SaWdodDogMTAsXHJcbiAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlQWN0aW9uKGl0ZW0uaWQsIHR5cGUpfVxyXG4gICAgICAgICAgICAvPjpudWxsfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RfaGVhZGVyfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn0+XHJcbiAgICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgIHRleHQ9e2Z1bGxOYW1lfVxyXG4gICAgICAgICAgICAgICAgICB1cmw9e3Byb2ZpbGVVcmx9XHJcbiAgICAgICAgICAgICAgICAgIHNpemU9ezYwfVxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJTaXplPXszfVxyXG4gICAgICAgICAgICAgICAgICB1c2VybmFtZT17dXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfaW5mb30+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy51c2VyX25hbWV9PntmdWxsTmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kYXRlfT5cclxuICAgICAgICAgICAgICB7bW9tZW50KGNyZWF0ZWRBdCkuZm9ybWF0KCdNTU0gREQsIFlZWVkgLSBISDptbSBBJyl9XHJcbiAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cclxuICAgICAgICAgICAgICA8VHJpbVRleHQgbGltaXQ9ezExMH0+XHJcbiAgICAgICAgICAgICAgICB7IHR5cGUhPT0nU2hhcmUnP3RleHQ6c2hhcmVkLnRleHQgfVxyXG4gICAgICAgICAgICAgIDwvVHJpbVRleHQ+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHt0ZXh0X2xpbmtzICYmIHRleHRfbGlua3MubWFwKChpdGVtLCBpKSA9PiBcclxuICAgICAgICAgICAgICA8TGlua1ByZXZpZXcgZGF0YT17aXRlbX0ga2V5PXtpdGVtLmlkICsgJyAnICsgaX0vPiAgXHJcbiAgICAgICAgICAgICkgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHt2aWRlb3MgJiYgdmlkZW9zLmxlbmd0aCA+IDAgJiYgdmlkZW9zLm1hcCgodmlkZW8sIGkpID0+IHtcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGxldCB2aWRlb0pzT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICBtdXRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcG9zdGVyOmBodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke3ZpZGVvLnRodW1ibmFpbC5zcmN9YCxcclxuICAgICAgICAgICAgICAgIHNvdXJjZXM6IFt7XHJcbiAgICAgICAgICAgICAgICAgIHNyYzogYGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7dmlkZW8uc3JjfWAsXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYXBwbGljYXRpb24veC1tcGVnVVJMXCIsXHJcbiAgICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgaHRtbDU6IHtcclxuICAgICAgICAgICAgICAgICAgICBobHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIG92ZXJyaWRlTmF0aXZlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aWRlb3N9IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgIHshdmlkZW8ucHJvY2Vzc2luZz88PlxyXG4gICAgICAgICAgICAgICAgICB7LyogPFZpZGVvUGxheWVyIHsgLi4udmlkZW9Kc09wdGlvbnMgfSAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgey8qIDxWaWRlb1BsYXllciB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCI2MFwiIHNvdXJjZT17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7dmlkZW8uc3JjfWB9IC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8UGxheWVyXHJcbiAgICAgICAgICAgICAgICAgICAgcGxheXNJbmxpbmVcclxuICAgICAgICAgICAgICAgICAgICBhdXRvcGxheVxyXG4gICAgICAgICAgICAgICAgICAgIG11dGVkXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zdGVyPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHt2aWRlby50aHVtYm5haWwuc3JjfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtwbGF5ZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYodmlkZW9SZWYgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW9SZWZbaW5kZXhdID0gcGxheWVyOyBcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke3ZpZGVvLnNyY31gfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L1BsYXllcj4gXHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdmlkZW9SZWZbaW5kZXhdLnBsYXkoKX0gcmVmPXtlbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlbCkgcmV0dXJuOyBcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYodmlkZW9SZWYgJiYgdmlkZW9SZWZbaW5kZXhdICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3NpdGlvblkgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihwb3NpdGlvblkgPiAod2luZG93LmlubmVySGVpZ2h0LzIpICYmIHBvc2l0aW9uWSA8IHdpbmRvdy5pbm5lckhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvUmVmW2luZGV4XS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW9SZWZbaW5kZXhdLnBhdXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHBhcmVudERpdiAhPT0gbnVsbCAmJiBwYXJlbnREaXY/LmN1cnJlbnQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHBhcmVudERpdj8uY3VycmVudD8uYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih2aWRlb1JlZiAmJiB2aWRlb1JlZltpbmRleF0gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zaXRpb25ZID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZihwb3NpdGlvblkgPiAod2luZG93LmlubmVySGVpZ2h0LzIpICYmIHBvc2l0aW9uWSA8IHdpbmRvdy5pbm5lckhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW9SZWZbaW5kZXhdLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW9SZWZbaW5kZXhdLnBhdXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHZpc2liaWxpdHk6ICdoaWRkZW4nIH19XHJcbiAgICAgICAgICAgICAgICAgID5CdXR0b24gRm9yIHBvc2l0aW9uIG9mIFZpZGVvPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvPjo8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPllvdXIgcG9zdGluZyB2aWRlbyBpcyBvbiBwcm9jZXNzaW5nLi4uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQcm9ncmVzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlQ29sb3I9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzAlJzogJyMxMDhlZTknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnMTAwJSc6ICcjODdkMDY4JyxcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBwZXJjZW50PXs5OX1cclxuICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdD17cGVyY2VudCA9PiBgYH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICApfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHtpbWFnZXMgJiYgaW1hZ2VzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0X2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmltYWdlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgW3N0eWxlcy5ncmlkXzJdOiBpbWFnZXMubGVuZ3RoID09IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgW3N0eWxlcy5ncmlkXzNdOiBpbWFnZXMubGVuZ3RoID09IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgW3N0eWxlcy5ncmlkXzRdOiBpbWFnZXMubGVuZ3RoID09IDQsXHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7aW1hZ2VzLmxlbmd0aCA9PSAxICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX2l0ZW19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93UGhvdG9Nb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1swXS5ibG9iX3RuP2ltYWdlc1swXS5ibG9iX3RuOmltYWdlc1swXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtpbWFnZXMubGVuZ3RoID09IDIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuaW1hZ2VfaXRlbSwgc3R5bGVzLm1haW5fcGhvdG8pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93UGhvdG9Nb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzBdLmJsb2JfdG4/aW1hZ2VzWzBdLmJsb2JfdG46aW1hZ2VzWzBdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX2l0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dQaG90b01vZGFsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMV0uYmxvYl90bj9pbWFnZXNbMV0uYmxvYl90bjppbWFnZXNbMV0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtpbWFnZXMubGVuZ3RoID09IDMgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuaW1hZ2VfaXRlbSwgc3R5bGVzLm1haW5fcGhvdG8pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93UGhvdG9Nb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzBdLmJsb2JfdG4/aW1hZ2VzWzBdLmJsb2JfdG46aW1hZ2VzWzBdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX2l0ZW19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93UGhvdG9Nb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzFdLmJsb2JfdG4/aW1hZ2VzWzFdLmJsb2JfdG46aW1hZ2VzWzFdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX2l0ZW19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93UGhvdG9Nb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzJdLmJsb2JfdG4/aW1hZ2VzWzJdLmJsb2JfdG46aW1hZ2VzWzJdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICB7aW1hZ2VzLmxlbmd0aCA+PSA0ICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmltYWdlX2l0ZW0sIHN0eWxlcy5tYWluX3Bob3RvKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1Bob3RvTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1swXS5ibG9iX3RuP2ltYWdlc1swXS5ibG9iX3RuOmltYWdlc1swXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZV9pdGVtfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1Bob3RvTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1sxXS5ibG9iX3RuP2ltYWdlc1sxXS5ibG9iX3RuOmltYWdlc1sxXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZV9pdGVtfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1Bob3RvTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1syXS5ibG9iX3RuP2ltYWdlc1syXS5ibG9iX3RuOmltYWdlc1syXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZV9pdGVtfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1Bob3RvTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaG93X21vcmV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPis0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1szXS5ibG9iX3RuP2ltYWdlc1szXS5ibG9iX3RuOmltYWdlc1szXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IDUwIH19IC8+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7dHlwZSA9PSBcIlBob3RvXCI/IGJsb2JfdG4gJiYgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0X2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuaW1hZ2UpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX2l0ZW19IFxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzaG93UGhvdG9Nb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7YmxvYl90bn1gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+OlxyXG4gICAgICAgICAgICBibG9iX3RuICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmlkZW9zfSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICA8UGxheWVyXHJcbiAgICAgICAgICAgICAgICBwbGF5c0lubGluZVxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlcclxuICAgICAgICAgICAgICAgIG11dGVkXHJcbiAgICAgICAgICAgICAgICBwb3N0ZXI9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke3RodW1ibmFpbC5zcmN9YH1cclxuICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7YmxvYl90bn1gfVxyXG4gICAgICAgICAgICAgICAgcmVmPXtwbGF5ZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAvLyB2aWRlb1JlZiA9IHBsYXllcjtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlYWN0aW9uc19zaGFyZXNfc3RhdHVzfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlYWN0aW9uc19zdGF0dXN9PlxyXG4gICAgICAgICAgICAgICAgeyBsaWtlRGF0YS5sZW5ndGggPiAwICYmIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPXtnZXRMaWtlQWN0aW9uVXNlckluZm8obGlrZURhdGEpfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ3RodW1icy11cCddfSBzaXplPVwiMXhcIiAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcid9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2xpa2VEYXRhLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD48Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHsgaGFoYURhdGEubGVuZ3RoID4gMCAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKGhhaGFEYXRhKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdncmluJ119IHNpemU9XCIxeFwiICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJ319Lz4gXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2hhaGFEYXRhLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7IGhlYXJ0RGF0YS5sZW5ndGggPiAwICYmIDw+IFxyXG4gICAgICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKGhlYXJ0RGF0YSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAnaGVhcnQnXX0gc2l6ZT1cIjF4XCIgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInfX0vPiBcclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aGVhcnREYXRhLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7IHdvd0RhdGEubGVuZ3RoID4gMCAmJiA8PiBcclxuICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9e2dldExpa2VBY3Rpb25Vc2VySW5mbyh3b3dEYXRhKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdsYXVnaCddfSBzaXplPVwiMXhcIiAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcid9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3dvd0RhdGEubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICA8Lz4gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7IHNhZERhdGEubGVuZ3RoID4gMCAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKHNhZERhdGEpfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ2Zyb3duJ119IHNpemU9XCIxeFwiICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJ319Lz4gXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3NhZERhdGEubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxBY3Rpb25zXHJcbiAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgdHlwZT17aXRlbS50eXBlfVxyXG4gICAgICAgICAgICAgIHBvc3RSYXRlPXtpdGVtLnJhdGluZ31cclxuICAgICAgICAgICAgICBjb21tZW50cz17Y29tbWVudHN9XHJcbiAgICAgICAgICAgICAgb25SYXRlUG9zdD17b25SYXRlUG9zdH1cclxuICAgICAgICAgICAgICBjb21tZW50c0NvdW50PXtjb21tZW50c0NvdW50fVxyXG4gICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cclxuICAgICAgICAgICAgICBsaWtlQWN0aW9uPXsodGVybSkgPT4gbGlrZUFjdGlvbih0eXBlLCBpdGVtLmlkLCB0ZXJtKX1cclxuICAgICAgICAgICAgICBzaGFyZUFjdGlvbj17KCkgPT4gc2hhcmVBY3Rpb24odHlwZSAhPT0gJ1NoYXJlJz90eXBlOnNoYXJlZC50eXBlLCB0eXBlICE9PSAnU2hhcmUnP2l0ZW0uaWQ6c2hhcmVkLmlkKX1cclxuICAgICAgICAgICAgICBhY3Rpb25zPXtcclxuICAgICAgICAgICAgICAgICgpID0+IHsgaGFuZGxlU2hvd0NvbW1lbnRNb2RhbChpdGVtLmlkLCBpdGVtLnR5cGUpIH0gXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Q29tbWVudHNcclxuICAgICAgICAgICAgICBpZD17aXRlbS5pZH1cclxuICAgICAgICAgICAgICB0eXBlPXtpdGVtLnR5cGV9XHJcbiAgICAgICAgICAgICAgZGF0YT17Y29tbWVudHN9XHJcbiAgICAgICAgICAgICAgb25VcGRhdGVUaW1lbGluZT17b25VcGRhdGVUaW1lbGluZX1cclxuICAgICAgICAgICAgICBhY3RpdmVQb3N0SWQ9e2FjdGl2ZVBvc3RJZH1cclxuICAgICAgICAgICAgICBtb2RhbE1vZGU9e21vZGFsTW9kZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuXHJcbiAgICAgIDxDb21tZW50c01vZGFsXHJcbiAgICAgICAgYWN0aXZlUG9zdElkPXthY3RpdmVQb3N0SWR9XHJcbiAgICAgICAgdHlwZT17YWN0aXZlVHlwZX1cclxuICAgICAgICBwb3N0RGF0YT17Y29tbWVudHN9XHJcbiAgICAgICAgb25VcGRhdGVUaW1lbGluZT17b25VcGRhdGVDb21tZW50c31cclxuICAgICAgICB0aXRsZT1cIkNvbW1lbnRzXCJcclxuICAgICAgICBzaG93PXttb2RhbE1vZGV9XHJcbiAgICAgICAgb25DbG9zZT17KCkgPT4ge2NvbnNvbGUubG9nKCdjbG9zZSBtb2RhbCcpfX1cclxuICAgICAgICBnZXRDb21tZW50cz17Z2V0Q29tbWVudHN9XHJcbiAgICAgIC8+XHJcbiAgICAgXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RvcmUpID0+ICh7XHJcbiAga2ptOiBzdG9yZSxcclxufSk7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgbW9kYWxBY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoeyBzaG93IH0sIGRpc3BhdGNoKSxcclxuICBkaXNwYXRjaDogZGlzcGF0Y2hcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShUaW1lbGluZVBvc3RzKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==