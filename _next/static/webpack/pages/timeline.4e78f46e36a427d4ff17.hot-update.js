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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/timeline-post.module.scss */ "./components/timeline/styles/timeline-post.module.scss");
/* harmony import */ var _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Comments__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Comments */ "./components/timeline/Comments.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Actions */ "./components/timeline/Actions.js");
/* harmony import */ var _common_TrimText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/TrimText */ "./components/common/TrimText.js");
/* harmony import */ var react_modal_hook__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-modal-hook */ "./node_modules/react-modal-hook/dist/index.es.js");
/* harmony import */ var _CommentsModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./CommentsModal */ "./components/timeline/CommentsModal.js");
/* harmony import */ var _profile_PhotosModal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../profile/PhotosModal */ "./components/profile/PhotosModal.js");
/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/Avatar */ "./components/common/Avatar.js");
/* harmony import */ var redux_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! redux-modal */ "./node_modules/redux-modal/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var configs_API__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! configs/API */ "./configs/API.js");
/* harmony import */ var video_react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! video-react */ "./node_modules/video-react/lib/index.js");
/* harmony import */ var video_react__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(video_react__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var containers_Photos_storage_PhotoContext__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! containers/Photos/storage/PhotoContext */ "./containers/Photos/storage/PhotoContext.js");
/* harmony import */ var components_common_LinkPreview__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! components/common/LinkPreview */ "./components/common/LinkPreview.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/build/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var components_common_VideoPlayer__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! components/common/VideoPlayer */ "./components/common/VideoPlayer.js");




var _jsxFileName = "D:\\Freeskies-development-\\components\\timeline\\TimelinePosts.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

























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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      processingVideos = _useState[0],
      setProcessingVideos = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
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
      return item.videos;
    }
  }));
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_23___default()('https://www.freeskies.com');
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
          antd__WEBPACK_IMPORTED_MODULE_5__["message"].success('Your video was processed successfully!');
        });
      }
    });
  }, [data]);

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      activePostId = _useState3[0],
      setActivePostId = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      modalMode = _useState4[0],
      setModalMode = _useState4[1];

  var videoRef = [];

  var _useModal = Object(react_modal_hook__WEBPACK_IMPORTED_MODULE_12__["useModal"])(function (_ref2) {
    var open = _ref2["in"];
    return __jsx(containers_Photos_storage_PhotoContext__WEBPACK_IMPORTED_MODULE_21__["PhotosProvider"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 5
      }
    }, __jsx(_profile_PhotosModal__WEBPACK_IMPORTED_MODULE_14__["default"], {
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
        lineNumber: 89,
        columnNumber: 7
      }
    }));
  }),
      _useModal2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useModal, 2),
      showPhotoModal = _useModal2[0],
      hidePhotoModal = _useModal2[1];

  var handleShowCommentModal = function handleShowCommentModal(id) {
    setActivePostId(id);
    setModalMode(!modalMode); //modalActions.show('commentModal', { id: activePostId });
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

  return __jsx("div", {
    className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.activity_content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 5
    }
  }, data.map(function (item, index) {
    var _account$profilePhoto, _classnames;

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
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.post,
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 11
      }
    }, !disableDelete ? __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
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
        lineNumber: 138,
        columnNumber: 29
      }
    }) : null, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.post_header,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.avatar,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 15
      }
    }, __jsx(_common_Avatar__WEBPACK_IMPORTED_MODULE_15__["default"], {
      text: fullName,
      url: profileUrl,
      size: 60,
      borderSize: 3,
      username: username,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.user_info,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 15
      }
    }, __jsx("p", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.user_name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 17
      }
    }, fullName))), __jsx("p", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.date,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 13
      }
    }, moment__WEBPACK_IMPORTED_MODULE_9___default()(createdAt).format('MMM DD, YYYY - HH:mm A')), __jsx("p", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.description,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 13
      }
    }, __jsx(_common_TrimText__WEBPACK_IMPORTED_MODULE_11__["default"], {
      limit: 110,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 15
      }
    }, type !== 'Share' ? text : shared.text)), text_links && text_links.map(function (item, i) {
      return __jsx(components_common_LinkPreview__WEBPACK_IMPORTED_MODULE_22__["LinkPreview"], {
        data: item,
        key: item.id + ' ' + i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 15
        }
      });
    }), videos && videos.length > 0 && videos.map(function (video, i) {
      var videoJsOptions = {
        autoplay: false,
        controls: true,
        sources: [{
          src: "https://www.freeskies.com/static/".concat(video.src)
        }]
      };
      return __jsx("div", {
        className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.videos,
        key: i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 17
        }
      }, !video.processing ? __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(video_react__WEBPACK_IMPORTED_MODULE_20__["Player"], {
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
          lineNumber: 186,
          columnNumber: 40
        }
      }, __jsx("source", {
        src: "https://www.freeskies.com/static/".concat(video.src),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197,
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
          lineNumber: 199,
          columnNumber: 19
        }
      }, "Button For position of Video")) : __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 23
        }
      }, __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 21
        }
      }, "Your posting video is on processing..."), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Progress"], {
        strokeColor: {
          '0%': '#108ee9',
          '100%': '#87d068'
        },
        percent: 90,
        format: function format(percent) {
          return "";
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 21
        }
      })));
    }), images && images.length > 0 ? __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.post_content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.image, (_classnames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.grid_2, images.length == 2), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.grid_3, images.length == 3), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.grid_4, images.length == 4), _classnames)),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 17
      }
    }, images.length == 1 && __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].blob_tn ? images[0].blob_tn : images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 23
      }
    })), images.length == 2 && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.image_item, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.main_photo),
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].blob_tn ? images[0].blob_tn : images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[1].blob_tn ? images[1].blob_tn : images[1].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 25
      }
    }))), images.length == 3 && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.image_item, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.main_photo),
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].blob_tn ? images[0].blob_tn : images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[1].blob_tn ? images[1].blob_tn : images[1].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[2].blob_tn ? images[2].blob_tn : images[2].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 25
      }
    }))), images.length >= 4 && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.image_item, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.main_photo),
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].blob_tn ? images[0].blob_tn : images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 297,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[1].blob_tn ? images[1].blob_tn : images[1].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 300,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[2].blob_tn ? images[2].blob_tn : images[2].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 301,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 303,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.show_more,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 25
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 305,
        columnNumber: 27
      }
    }, "+4")), __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[3].blob_tn ? images[3].blob_tn : images[3].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 307,
        columnNumber: 25
      }
    }))))) : __jsx("div", {
      style: {
        height: 50
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 314,
        columnNumber: 15
      }
    }), type == "Photo" ? blob_tn && __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.post_content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317,
        columnNumber: 42
      }
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.image),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(blob_tn),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322,
        columnNumber: 19
      }
    })))) : blob_tn && __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.videos,
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 326,
        columnNumber: 24
      }
    }, __jsx(video_react__WEBPACK_IMPORTED_MODULE_20__["Player"], {
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
        lineNumber: 327,
        columnNumber: 15
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.reactions_shares_status,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 340,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.reactions_status,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 341,
        columnNumber: 15
      }
    }, likeData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(likeData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 343,
        columnNumber: 19
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
      icon: ['far', 'thumbs-up'],
      size: "1x",
      style: {
        cursor: 'pointer'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 344,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 345,
        columnNumber: 21
      }
    }, likeData.length))), hahaData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(hahaData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 349,
        columnNumber: 19
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
      icon: ['far', 'grin'],
      size: "1x",
      style: {
        cursor: 'pointer'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 350,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 351,
        columnNumber: 21
      }
    }, hahaData.length))), heartData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(heartData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 356,
        columnNumber: 19
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
      icon: ['far', 'heart'],
      size: "1x",
      style: {
        cursor: 'pointer'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 357,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 358,
        columnNumber: 21
      }
    }, heartData.length))), wowData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(wowData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 363,
        columnNumber: 19
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
      icon: ['far', 'laugh'],
      size: "1x",
      style: {
        cursor: 'pointer'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 364,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 365,
        columnNumber: 21
      }
    }, wowData.length))), sadData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(sadData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 370,
        columnNumber: 19
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
      icon: ['far', 'frown'],
      size: "1x",
      style: {
        cursor: 'pointer'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 371,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 372,
        columnNumber: 21
      }
    }, sadData.length))))), __jsx(_Actions__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
        handleShowCommentModal(item.id);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 378,
        columnNumber: 13
      }
    }), __jsx(_Comments__WEBPACK_IMPORTED_MODULE_8__["default"], {
      id: item.id,
      type: item.type,
      data: comments,
      onUpdateTimeline: onUpdateTimeline,
      activePostId: activePostId,
      modalMode: modalMode,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 391,
        columnNumber: 13
      }
    }));
  }), __jsx(_CommentsModal__WEBPACK_IMPORTED_MODULE_13__["default"], {
    activePostId: activePostId,
    postData: data,
    onUpdateTimeline: onUpdateTimeline,
    title: "Comments" // showModal={open}
    // onClose={hideCommentModal}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
      columnNumber: 7
    }
  }));
}

_s(TimelinePosts, "zGzSrWnnsUh65ew2hiqI4G3fYsU=", false, function () {
  return [react_modal_hook__WEBPACK_IMPORTED_MODULE_12__["useModal"]];
});

_c = TimelinePosts;

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    modalActions: Object(redux__WEBPACK_IMPORTED_MODULE_17__["bindActionCreators"])({
      show: redux_modal__WEBPACK_IMPORTED_MODULE_16__["show"]
    }, dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_18__["connect"])(null, mapDispatchToProps)(TimelinePosts));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aW1lbGluZS9UaW1lbGluZVBvc3RzLmpzIl0sIm5hbWVzIjpbIlRpbWVsaW5lUG9zdHMiLCJkYXRhIiwib25VcGRhdGVUaW1lbGluZSIsIm9uUmF0ZVBvc3QiLCJtb2RhbEFjdGlvbnMiLCJzaGFyZUFjdGlvbiIsImxpa2VBY3Rpb24iLCJkZWxldGVBY3Rpb24iLCJkaXNhYmxlRGVsZXRlIiwicGFyZW50RGl2IiwiYXV0aCIsInVzZVN0YXRlIiwicHJvY2Vzc2luZ1ZpZGVvcyIsInNldFByb2Nlc3NpbmdWaWRlb3MiLCJ2aWRlb0RhdGEiLCJzZXRWaWRlb0RhdGEiLCJpbWFnZXNMaXN0IiwiY29uY2F0IiwiYXBwbHkiLCJtYXAiLCJpdGVtIiwidHlwZSIsImltYWdlcyIsInZpZGVvTGlzdCIsInZpZGVvcyIsInVzZUVmZmVjdCIsInNvY2tldCIsImlvIiwib24iLCJjb25zb2xlIiwibG9nIiwiZW1pdCIsInRva2VuIiwiZSIsInZpZGVvSXRlbSIsInByb2Nlc3NpbmciLCJpZCIsInZpZGVvIiwibWVzc2FnZSIsInN1Y2Nlc3MiLCJhY3RpdmVQb3N0SWQiLCJzZXRBY3RpdmVQb3N0SWQiLCJtb2RhbE1vZGUiLCJzZXRNb2RhbE1vZGUiLCJ2aWRlb1JlZiIsInVzZU1vZGFsIiwib3BlbiIsImhpZGVQaG90b01vZGFsIiwic2hvd1Bob3RvTW9kYWwiLCJoYW5kbGVTaG93Q29tbWVudE1vZGFsIiwidG9nZ2xlQ29tbWVudFNob3ciLCJpbmRleCIsInNldENvbW1lbnRTaG93IiwiY29tbWVudFNob3ciLCJnZXRMaWtlQWN0aW9uVXNlckluZm8iLCJmaW5hbERhdGEiLCJhY2NvdW50IiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJzdHlsZXMiLCJhY3Rpdml0eV9jb250ZW50IiwiY3JlYXRlZEF0IiwiY29tbWVudHMiLCJ0ZXh0Iiwic2hhcmVkIiwiY29tbWVudGVkIiwiYmxvYl90biIsInRodW1ibmFpbCIsInJlYWN0aW9ucyIsInRleHRfbGlua3MiLCJwdXNoIiwicHJvZmlsZVVybCIsInVuZGVmaW5lZCIsInByb2ZpbGVQaG90byIsInNyYyIsImZ1bGxOYW1lIiwidXNlcm5hbWUiLCJsaWtlRGF0YSIsImZpbHRlciIsInJlYWN0aW9uIiwiaGVhcnREYXRhIiwid293RGF0YSIsImhhaGFEYXRhIiwic2FkRGF0YSIsInBvc3QiLCJmb250U2l6ZSIsIm1hcmdpblJpZ2h0IiwiY3Vyc29yIiwicG9zdF9oZWFkZXIiLCJhdmF0YXIiLCJ1c2VyX2luZm8iLCJ1c2VyX25hbWUiLCJkYXRlIiwibW9tZW50IiwiZm9ybWF0IiwiZGVzY3JpcHRpb24iLCJpIiwibGVuZ3RoIiwidmlkZW9Kc09wdGlvbnMiLCJhdXRvcGxheSIsImNvbnRyb2xzIiwic291cmNlcyIsInBsYXllciIsInBsYXkiLCJlbCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJwb3NpdGlvblkiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ5IiwiaW5uZXJIZWlnaHQiLCJwYXVzZSIsImN1cnJlbnQiLCJ2aXNpYmlsaXR5IiwicGVyY2VudCIsInBvc3RfY29udGVudCIsImNsYXNzbmFtZXMiLCJpbWFnZSIsImdyaWRfMiIsImdyaWRfMyIsImdyaWRfNCIsImltYWdlX2l0ZW0iLCJtYWluX3Bob3RvIiwic2hvd19tb3JlIiwiaGVpZ2h0IiwicmVhY3Rpb25zX3NoYXJlc19zdGF0dXMiLCJyZWFjdGlvbnNfc3RhdHVzIiwicmF0aW5nIiwidGVybSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYmluZEFjdGlvbkNyZWF0b3JzIiwic2hvdyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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TyxFQUNMLG1CQUFNO0FBQUVhLDhCQUFzQixDQUFDN0IsSUFBSSxDQUFDZ0IsRUFBTixDQUF0QjtBQUFpQyxPQVY3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BalBGLEVBOFBFLE1BQUMsaURBQUQ7QUFDRSxRQUFFLEVBQUVoQixJQUFJLENBQUNnQixFQURYO0FBRUUsVUFBSSxFQUFFaEIsSUFBSSxDQUFDQyxJQUZiO0FBR0UsVUFBSSxFQUFFeUMsUUFIUjtBQUlFLHNCQUFnQixFQUFFNUQsZ0JBSnBCO0FBS0Usa0JBQVksRUFBRXNDLFlBTGhCO0FBTUUsZUFBUyxFQUFFRSxTQU5iO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUE5UEYsQ0FERjtBQTBRRCxHQXRSQSxDQURILEVBeVJFLE1BQUMsdURBQUQ7QUFDRSxnQkFBWSxFQUFFRixZQURoQjtBQUVFLFlBQVEsRUFBRXZDLElBRlo7QUFHRSxvQkFBZ0IsRUFBRUMsZ0JBSHBCO0FBSUUsU0FBSyxFQUFDLFVBSlIsQ0FLRTtBQUNBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXpSRixDQURGO0FBb1NEOztHQXBZUUYsYTtVQTZEa0M2QywwRDs7O0tBN0RsQzdDLGE7O0FBc1lULElBQU1pSSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQ7QUFBQSxTQUFlO0FBQ3hDOUgsZ0JBQVksRUFBRStILGlFQUFrQixDQUFDO0FBQUVDLFVBQUksRUFBSkEsaURBQUlBO0FBQU4sS0FBRCxFQUFXRixRQUFYO0FBRFEsR0FBZjtBQUFBLENBQTNCOztBQUllRywySEFBTyxDQUFDLElBQUQsRUFBT0osa0JBQVAsQ0FBUCxDQUFrQ2pJLGFBQWxDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGltZWxpbmUuNGU3OGY0NmUzNmE0MjdkNGZmMTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvdGltZWxpbmUtcG9zdC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IFBvcG92ZXIsIFRvb2x0aXAgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBDb21tZW50cyBmcm9tICcuL0NvbW1lbnRzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBBY3Rpb25zIGZyb20gJy4vQWN0aW9ucyc7XHJcbmltcG9ydCBUcmltVGV4dCBmcm9tICcuLi9jb21tb24vVHJpbVRleHQnO1xyXG5pbXBvcnQgeyB1c2VNb2RhbCB9IGZyb20gJ3JlYWN0LW1vZGFsLWhvb2snO1xyXG5pbXBvcnQgQ29tbWVudHNNb2RhbCBmcm9tICcuL0NvbW1lbnRzTW9kYWwnO1xyXG5pbXBvcnQgUGhvdG9zTW9kYWwgZnJvbSAnLi4vcHJvZmlsZS9QaG90b3NNb2RhbCc7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnLi4vY29tbW9uL0F2YXRhcic7XHJcbmltcG9ydCB7IHNob3cgfSBmcm9tICdyZWR1eC1tb2RhbCc7XHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IEFQSSBmcm9tICdjb25maWdzL0FQSSc7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJ3ZpZGVvLXJlYWN0JztcclxuaW1wb3J0IHsgUGhvdG9zUHJvdmlkZXIgfSAgZnJvbSAnY29udGFpbmVycy9QaG90b3Mvc3RvcmFnZS9QaG90b0NvbnRleHQnO1xyXG5pbXBvcnQgeyBMaW5rUHJldmlldyB9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL0xpbmtQcmV2aWV3JztcclxuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xyXG5pbXBvcnQgVmlkZW9QbGF5ZXIgZnJvbSAnY29tcG9uZW50cy9jb21tb24vVmlkZW9QbGF5ZXInO1xyXG5pbXBvcnQgeyBQcm9ncmVzcyB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBCdXR0b24sIFVwbG9hZCwgbWVzc2FnZSwgSW5wdXQsIFRhYnMsIFJhdGUgfSBmcm9tICdhbnRkJztcclxuXHJcbmZ1bmN0aW9uIFRpbWVsaW5lUG9zdHMoeyBkYXRhLCBvblVwZGF0ZVRpbWVsaW5lLCBvblJhdGVQb3N0LCBtb2RhbEFjdGlvbnMsIHNoYXJlQWN0aW9uLCBsaWtlQWN0aW9uLCBkZWxldGVBY3Rpb24sIGRpc2FibGVEZWxldGUsIHBhcmVudERpdiA9IG51bGwsIGF1dGggfSkge1xyXG4gIFxyXG4gIGNvbnN0IFtwcm9jZXNzaW5nVmlkZW9zLCBzZXRQcm9jZXNzaW5nVmlkZW9zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbdmlkZW9EYXRhLCBzZXRWaWRlb0RhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgaW1hZ2VzTGlzdCA9IFtdLmNvbmNhdC5hcHBseShbXSwgZGF0YS5tYXAoaXRlbSA9PiBcclxuICAgIHsgXHJcbiAgICAgICAgaWYoaXRlbS50eXBlID09PSAnUGhvdG8nKSB7XHJcbiAgICAgICAgICByZXR1cm4gIGl0ZW07XHJcbiAgICAgICAgfSBlbHNlIGlmKGl0ZW0udHlwZSA9PT0gJ1ZpZGVvQ2xpcCcpIHtcclxuICAgICAgICAgIHJldHVybiAgW107XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiAgaXRlbS5pbWFnZXMgXHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuICApKVxyXG5cclxuICBjb25zdCB2aWRlb0xpc3QgPSBbXS5jb25jYXQuYXBwbHkoW10sIGRhdGEubWFwKGl0ZW0gPT4ge1xyXG4gICAgaWYoaXRlbS50eXBlID09PSAnVmlkZW9DbGlwJykge1xyXG4gICAgICByZXR1cm4gaXRlbTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBpdGVtLnZpZGVvcztcclxuICAgIH1cclxuICB9KSlcclxuICBcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHNvY2tldCA9IGlvKCdodHRwczovL3d3dy5mcmVlc2tpZXMuY29tJyk7XHJcbiAgICBzb2NrZXQub24oJ2Nvbm5lY3QnLCAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdjb25uZWN0ZWQhJylcclxuICAgICAgc29ja2V0LmVtaXQoJ0FVVEgnLCB7ICd0b2tlbic6IGF1dGgudG9rZW4gfSlcclxuICAgICAgY29uc29sZS5sb2coJ0FVVEggVE9LRU4gU0VOVCcpXHJcbiAgICB9KVxyXG5cclxuICAgIHNvY2tldC5vbignQVVUSCcsIGUgPT4ge2NvbnNvbGUubG9nKGUpO1xyXG4gICAgICBpZihlICE9PSAyMDApIHtcclxuXHJcbiAgICAgIH0gZWxzZSAge1xyXG4gICAgICAgIHZpZGVvTGlzdC5tYXAodmlkZW9JdGVtID0+IHtcclxuICAgICAgICAgIGlmKHZpZGVvSXRlbS5wcm9jZXNzaW5nKSB7XHJcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KCdWSURFT19SRUFEWScsIHZpZGVvSXRlbS5pZCk7XHJcbiAgICAgICAgICAgIHNldFByb2Nlc3NpbmdWaWRlb3MoWy4uLnByb2Nlc3NpbmdWaWRlb3MsIHZpZGVvSXRlbS5pZF0pXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdWJzY3JpYmVkIHZpZGVvIGlkJyArIHZpZGVvSXRlbS5pZCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBzb2NrZXQub24oJ1ZJREVPX1JFQURZJywgKHZpZGVvKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygndmlkZW8gcmVhZHknLCB2aWRlbylcclxuICAgICAgICAgIHNldFZpZGVvRGF0YSh2aWRlbyk7XHJcbiAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoJ1lvdXIgdmlkZW8gd2FzIHByb2Nlc3NlZCBzdWNjZXNzZnVsbHkhJylcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuXHJcbiAgfSwgW2RhdGFdKVxyXG5cclxuIFxyXG5cclxuICBjb25zdCBbYWN0aXZlUG9zdElkLCBzZXRBY3RpdmVQb3N0SWRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW21vZGFsTW9kZSwgc2V0TW9kYWxNb2RlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgbGV0IHZpZGVvUmVmID0gW107XHJcbiAgY29uc3QgW3Nob3dQaG90b01vZGFsLCBoaWRlUGhvdG9Nb2RhbF0gPSB1c2VNb2RhbCgoeyBpbjogb3BlbiB9KSA9PiAoXHJcbiAgICA8UGhvdG9zUHJvdmlkZXI+XHJcbiAgICAgIDxQaG90b3NNb2RhbFxyXG4gICAgICAgIHRpdGxlPVwiUGhvdG8gZGV0YWlsXCJcclxuICAgICAgICBzaG93TW9kYWw9e29wZW59XHJcbiAgICAgICAgb25DbG9zZT17aGlkZVBob3RvTW9kYWx9XHJcbiAgICAgICAgb25SYXRlUG9zdD17b25SYXRlUG9zdH1cclxuICAgICAgICBkYXRhPXtpbWFnZXNMaXN0fVxyXG4gICAgICAgIGxpa2VBY3Rpb249e2xpa2VBY3Rpb259XHJcbiAgICAgICAgc2hhcmVBY3Rpb249e3NoYXJlQWN0aW9ufVxyXG4gICAgICAgIG9uVXBkYXRlVGltZWxpbmU9e29uVXBkYXRlVGltZWxpbmV9XHJcbiAgICAgICAgYXV0aD17YXV0aH1cclxuICAgICAgLz5cclxuICAgIDwvUGhvdG9zUHJvdmlkZXI+XHJcbiAgKSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNob3dDb21tZW50TW9kYWwgPSAoaWQpID0+IHtcclxuICAgIHNldEFjdGl2ZVBvc3RJZChpZCk7XHJcbiAgICBzZXRNb2RhbE1vZGUoIW1vZGFsTW9kZSk7XHJcbiAgICAvL21vZGFsQWN0aW9ucy5zaG93KCdjb21tZW50TW9kYWwnLCB7IGlkOiBhY3RpdmVQb3N0SWQgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlQ29tbWVudFNob3cgPSAoaW5kZXgpID0+XHJcbiAgICBzZXRDb21tZW50U2hvdyhjb21tZW50U2hvdyA9PT0gaW5kZXggPyBudWxsIDogaW5kZXgpO1xyXG5cclxuICBjb25zdCBnZXRMaWtlQWN0aW9uVXNlckluZm8gPSAoZGF0YSkgPT4ge1xyXG4gICAgdmFyIGZpbmFsRGF0YSA9ICcnO1xyXG4gICAgZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgIGZpbmFsRGF0YSA9IGZpbmFsRGF0YSArICcgJyArIGl0ZW0uYWNjb3VudC5maXJzdE5hbWUgKyAnJyArIGl0ZW0uYWNjb3VudC5sYXN0TmFtZSA7XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIGZpbmFsRGF0YTtcclxuICB9XHJcblxyXG4gXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjdGl2aXR5X2NvbnRlbnR9ID5cclxuICAgICAge2RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHZhciB7IGFjY291bnQsIGNyZWF0ZWRBdCwgdHlwZSwgY29tbWVudHMsIHRleHQsIGltYWdlcywgdmlkZW9zLCBzaGFyZWQsIGNvbW1lbnRlZCwgYmxvYl90biwgdGh1bWJuYWlsLCByZWFjdGlvbnMsIHRleHRfbGlua3MgfSA9IGl0ZW07XHJcbiAgICAgICAgdmlkZW9SZWYucHVzaChudWxsKTtcclxuICAgICAgICBjb25zdCBwcm9maWxlVXJsID0gYWNjb3VudCAhPT0gbnVsbCAmJiBhY2NvdW50ICE9PSB1bmRlZmluZWQgPyBgJHthY2NvdW50LnByb2ZpbGVQaG90bz8uc3JjfWAgOiBudWxsXHJcbiAgICAgICAgY29uc3QgZnVsbE5hbWUgPSBgJHthY2NvdW50Py5maXJzdE5hbWV9ICR7YWNjb3VudD8ubGFzdE5hbWV9YDtcclxuICAgICAgICBjb25zdCB1c2VybmFtZSA9IGFjY291bnQ/LnVzZXJuYW1lO1xyXG4gICAgICAgIGNvbnN0IGxpa2VEYXRhID0gcmVhY3Rpb25zPyByZWFjdGlvbnM/LmZpbHRlcihpdGVtID0+IGl0ZW0ucmVhY3Rpb24gPT0gJ0xJS0UnKTpbXTtcclxuICAgICAgICBjb25zdCBoZWFydERhdGEgPSAgcmVhY3Rpb25zPyByZWFjdGlvbnM/LmZpbHRlcihpdGVtID0+IGl0ZW0ucmVhY3Rpb24gPT0gJ0hFQVJUJyk6W107XHJcbiAgICAgICAgY29uc3Qgd293RGF0YSA9IHJlYWN0aW9ucyA/IHJlYWN0aW9ucz8uZmlsdGVyKGl0ZW0gPT4gaXRlbS5yZWFjdGlvbiA9PSAnV09XJyk6W107XHJcbiAgICAgICAgY29uc3QgaGFoYURhdGEgPSByZWFjdGlvbnMgPyByZWFjdGlvbnM/LmZpbHRlcihpdGVtID0+IGl0ZW0ucmVhY3Rpb24gPT0gJ0hBSEEnKTpbXTtcclxuICAgICAgICBjb25zdCBzYWREYXRhID0gcmVhY3Rpb25zID8gcmVhY3Rpb25zPy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlYWN0aW9uID09ICdTQUQnKTpbXTtcclxuICAgICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdH0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgIHshZGlzYWJsZURlbGV0ZT88Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ3dpbmRvdy1jbG9zZSddfSBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGZsb2F0OiAncmlnaHQnLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAyNSxcclxuICAgICAgICAgICAgICBtYXJnaW5SaWdodDogMTAsXHJcbiAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlQWN0aW9uKGl0ZW0uaWQsIHR5cGUpfVxyXG4gICAgICAgICAgICAvPjpudWxsfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RfaGVhZGVyfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn0+XHJcbiAgICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgIHRleHQ9e2Z1bGxOYW1lfVxyXG4gICAgICAgICAgICAgICAgICB1cmw9e3Byb2ZpbGVVcmx9XHJcbiAgICAgICAgICAgICAgICAgIHNpemU9ezYwfVxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJTaXplPXszfVxyXG4gICAgICAgICAgICAgICAgICB1c2VybmFtZT17dXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfaW5mb30+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy51c2VyX25hbWV9PntmdWxsTmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kYXRlfT5cclxuICAgICAgICAgICAgICB7bW9tZW50KGNyZWF0ZWRBdCkuZm9ybWF0KCdNTU0gREQsIFlZWVkgLSBISDptbSBBJyl9XHJcbiAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cclxuICAgICAgICAgICAgICA8VHJpbVRleHQgbGltaXQ9ezExMH0+XHJcbiAgICAgICAgICAgICAgICB7IHR5cGUhPT0nU2hhcmUnP3RleHQ6c2hhcmVkLnRleHQgfVxyXG4gICAgICAgICAgICAgIDwvVHJpbVRleHQ+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHt0ZXh0X2xpbmtzICYmIHRleHRfbGlua3MubWFwKChpdGVtLCBpKSA9PiBcclxuICAgICAgICAgICAgICA8TGlua1ByZXZpZXcgZGF0YT17aXRlbX0ga2V5PXtpdGVtLmlkICsgJyAnICsgaX0vPiAgXHJcbiAgICAgICAgICAgICkgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAge3ZpZGVvcyAmJiB2aWRlb3MubGVuZ3RoID4gMCAmJiB2aWRlb3MubWFwKCh2aWRlbywgaSkgPT4ge1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgbGV0IHZpZGVvSnNPcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzb3VyY2VzOiBbe1xyXG4gICAgICAgICAgICAgICAgICBzcmM6IGBodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke3ZpZGVvLnNyY31gXHJcbiAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aWRlb3N9IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgIHshdmlkZW8ucHJvY2Vzc2luZz88PjxQbGF5ZXJcclxuICAgICAgICAgICAgICAgICAgICBwbGF5c0lubGluZVxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5XHJcbiAgICAgICAgICAgICAgICAgICAgbXV0ZWRcclxuICAgICAgICAgICAgICAgICAgICBwb3N0ZXI9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke3ZpZGVvLnRodW1ibmFpbC5zcmN9YH1cclxuICAgICAgICAgICAgICAgICAgICByZWY9e3BsYXllciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZih2aWRlb1JlZiAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWRlb1JlZltpbmRleF0gPSBwbGF5ZXI7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c291cmNlIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7dmlkZW8uc3JjfWB9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvUGxheWVyPiBcclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB2aWRlb1JlZltpbmRleF0ucGxheSgpfSByZWY9e2VsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWVsKSByZXR1cm47IFxyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZih2aWRlb1JlZiAmJiB2aWRlb1JlZltpbmRleF0gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvc2l0aW9uWSA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHBvc2l0aW9uWSA+ICh3aW5kb3cuaW5uZXJIZWlnaHQvMikgJiYgcG9zaXRpb25ZIDwgd2luZG93LmlubmVySGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW9SZWZbaW5kZXhdLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2aWRlb1JlZltpbmRleF0ucGF1c2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgaWYocGFyZW50RGl2ICE9PSBudWxsICYmIHBhcmVudERpdj8uY3VycmVudCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcGFyZW50RGl2Py5jdXJyZW50Py5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHZpZGVvUmVmICYmIHZpZGVvUmVmW2luZGV4XSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3NpdGlvblkgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHBvc2l0aW9uWSA+ICh3aW5kb3cuaW5uZXJIZWlnaHQvMikgJiYgcG9zaXRpb25ZIDwgd2luZG93LmlubmVySGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWRlb1JlZltpbmRleF0ucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWRlb1JlZltpbmRleF0ucGF1c2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdmlzaWJpbGl0eTogJ2hpZGRlbicgfX1cclxuICAgICAgICAgICAgICAgICAgPkJ1dHRvbiBGb3IgcG9zaXRpb24gb2YgVmlkZW88L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC8+OjxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+WW91ciBwb3N0aW5nIHZpZGVvIGlzIG9uIHByb2Nlc3NpbmcuLi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPFByb2dyZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VDb2xvcj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnMCUnOiAnIzEwOGVlOScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICcxMDAlJzogJyM4N2QwNjgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHBlcmNlbnQ9ezkwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZm9ybWF0PXtwZXJjZW50ID0+IGBgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICl9XHJcblxyXG5cclxuICAgICAgICAgICAge2ltYWdlcyAmJiBpbWFnZXMubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RfY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuaW1hZ2UsIHtcclxuICAgICAgICAgICAgICAgICAgICBbc3R5bGVzLmdyaWRfMl06IGltYWdlcy5sZW5ndGggPT0gMixcclxuICAgICAgICAgICAgICAgICAgICBbc3R5bGVzLmdyaWRfM106IGltYWdlcy5sZW5ndGggPT0gMyxcclxuICAgICAgICAgICAgICAgICAgICBbc3R5bGVzLmdyaWRfNF06IGltYWdlcy5sZW5ndGggPT0gNCxcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtpbWFnZXMubGVuZ3RoID09IDEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfaXRlbX0gb25DbGljaz17c2hvd1Bob3RvTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1swXS5ibG9iX3RuP2ltYWdlc1swXS5ibG9iX3RuOmltYWdlc1swXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtpbWFnZXMubGVuZ3RoID09IDIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuaW1hZ2VfaXRlbSwgc3R5bGVzLm1haW5fcGhvdG8pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzaG93UGhvdG9Nb2RhbH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1swXS5ibG9iX3RuP2ltYWdlc1swXS5ibG9iX3RuOmltYWdlc1swXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZV9pdGVtfSBvbkNsaWNrPXtzaG93UGhvdG9Nb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMV0uYmxvYl90bj9pbWFnZXNbMV0uYmxvYl90bjppbWFnZXNbMV0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtpbWFnZXMubGVuZ3RoID09IDMgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuaW1hZ2VfaXRlbSwgc3R5bGVzLm1haW5fcGhvdG8pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzaG93UGhvdG9Nb2RhbH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1swXS5ibG9iX3RuP2ltYWdlc1swXS5ibG9iX3RuOmltYWdlc1swXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZV9pdGVtfSBvbkNsaWNrPXtzaG93UGhvdG9Nb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMV0uYmxvYl90bj9pbWFnZXNbMV0uYmxvYl90bjppbWFnZXNbMV0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfaXRlbX0gb25DbGljaz17c2hvd1Bob3RvTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzJdLmJsb2JfdG4/aW1hZ2VzWzJdLmJsb2JfdG46aW1hZ2VzWzJdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICB7aW1hZ2VzLmxlbmd0aCA+PSA0ICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmltYWdlX2l0ZW0sIHN0eWxlcy5tYWluX3Bob3RvKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c2hvd1Bob3RvTW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMF0uYmxvYl90bj9pbWFnZXNbMF0uYmxvYl90bjppbWFnZXNbMF0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfaXRlbX0gb25DbGljaz17c2hvd1Bob3RvTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzFdLmJsb2JfdG4/aW1hZ2VzWzFdLmJsb2JfdG46aW1hZ2VzWzFdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX2l0ZW19IG9uQ2xpY2s9e3Nob3dQaG90b01vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1syXS5ibG9iX3RuP2ltYWdlc1syXS5ibG9iX3RuOmltYWdlc1syXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZV9pdGVtfSBvbkNsaWNrPXtzaG93UGhvdG9Nb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2hvd19tb3JlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4rNDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbM10uYmxvYl90bj9pbWFnZXNbM10uYmxvYl90bjppbWFnZXNbM10uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiA1MCB9fSAvPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAge3R5cGUgPT0gXCJQaG90b1wiPyBibG9iX3RuICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdF9jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmltYWdlKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZV9pdGVtfSBvbkNsaWNrPXtzaG93UGhvdG9Nb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtibG9iX3RufWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj46XHJcbiAgICAgICAgICAgIGJsb2JfdG4gJiYgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aWRlb3N9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgIDxQbGF5ZXJcclxuICAgICAgICAgICAgICAgIHBsYXlzSW5saW5lXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheVxyXG4gICAgICAgICAgICAgICAgbXV0ZWRcclxuICAgICAgICAgICAgICAgIHBvc3Rlcj17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7dGh1bWJuYWlsLnNyY31gfVxyXG4gICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtibG9iX3RufWB9XHJcbiAgICAgICAgICAgICAgICByZWY9e3BsYXllciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIC8vIHZpZGVvUmVmID0gcGxheWVyO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVhY3Rpb25zX3NoYXJlc19zdGF0dXN9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVhY3Rpb25zX3N0YXR1c30+XHJcbiAgICAgICAgICAgICAgICB7IGxpa2VEYXRhLmxlbmd0aCA+IDAgJiYgPD5cclxuICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9e2dldExpa2VBY3Rpb25Vc2VySW5mbyhsaWtlRGF0YSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAndGh1bWJzLXVwJ119IHNpemU9XCIxeFwiICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJ319Lz5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57bGlrZURhdGEubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPjwvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgeyBoYWhhRGF0YS5sZW5ndGggPiAwICYmIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPXtnZXRMaWtlQWN0aW9uVXNlckluZm8oaGFoYURhdGEpfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ2dyaW4nXX0gc2l6ZT1cIjF4XCIgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInfX0vPiBcclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aGFoYURhdGEubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHsgaGVhcnREYXRhLmxlbmd0aCA+IDAgJiYgPD4gXHJcbiAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPXtnZXRMaWtlQWN0aW9uVXNlckluZm8oaGVhcnREYXRhKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdoZWFydCddfSBzaXplPVwiMXhcIiAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcid9fS8+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntoZWFydERhdGEubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHsgd293RGF0YS5sZW5ndGggPiAwICYmIDw+IFxyXG4gICAgICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKHdvd0RhdGEpfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ2xhdWdoJ119IHNpemU9XCIxeFwiICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJ319Lz5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57d293RGF0YS5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgIDwvPiBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHsgc2FkRGF0YS5sZW5ndGggPiAwICYmIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPXtnZXRMaWtlQWN0aW9uVXNlckluZm8oc2FkRGF0YSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAnZnJvd24nXX0gc2l6ZT1cIjF4XCIgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInfX0vPiBcclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57c2FkRGF0YS5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEFjdGlvbnNcclxuICAgICAgICAgICAgICBpZD17aXRlbS5pZH1cclxuICAgICAgICAgICAgICB0eXBlPXtpdGVtLnR5cGV9XHJcbiAgICAgICAgICAgICAgcG9zdFJhdGU9e2l0ZW0ucmF0aW5nfVxyXG4gICAgICAgICAgICAgIGNvbW1lbnRzPXtjb21tZW50c31cclxuICAgICAgICAgICAgICBvblJhdGVQb3N0PXtvblJhdGVQb3N0fVxyXG4gICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cclxuICAgICAgICAgICAgICBsaWtlQWN0aW9uPXsodGVybSkgPT4gbGlrZUFjdGlvbih0eXBlLCBpdGVtLmlkLCB0ZXJtKX1cclxuICAgICAgICAgICAgICBzaGFyZUFjdGlvbj17KCkgPT4gc2hhcmVBY3Rpb24odHlwZSAhPT0gJ1NoYXJlJz90eXBlOnNoYXJlZC50eXBlLCB0eXBlICE9PSAnU2hhcmUnP2l0ZW0uaWQ6c2hhcmVkLmlkKX1cclxuICAgICAgICAgICAgICBhY3Rpb25zPXtcclxuICAgICAgICAgICAgICAgICgpID0+IHsgaGFuZGxlU2hvd0NvbW1lbnRNb2RhbChpdGVtLmlkKSB9IFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPENvbW1lbnRzXHJcbiAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgdHlwZT17aXRlbS50eXBlfVxyXG4gICAgICAgICAgICAgIGRhdGE9e2NvbW1lbnRzfVxyXG4gICAgICAgICAgICAgIG9uVXBkYXRlVGltZWxpbmU9e29uVXBkYXRlVGltZWxpbmV9XHJcbiAgICAgICAgICAgICAgYWN0aXZlUG9zdElkPXthY3RpdmVQb3N0SWR9XHJcbiAgICAgICAgICAgICAgbW9kYWxNb2RlPXttb2RhbE1vZGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcblxyXG4gICAgICA8Q29tbWVudHNNb2RhbFxyXG4gICAgICAgIGFjdGl2ZVBvc3RJZD17YWN0aXZlUG9zdElkfVxyXG4gICAgICAgIHBvc3REYXRhPXtkYXRhfVxyXG4gICAgICAgIG9uVXBkYXRlVGltZWxpbmU9e29uVXBkYXRlVGltZWxpbmV9XHJcbiAgICAgICAgdGl0bGU9XCJDb21tZW50c1wiXHJcbiAgICAgICAgLy8gc2hvd01vZGFsPXtvcGVufVxyXG4gICAgICAgIC8vIG9uQ2xvc2U9e2hpZGVDb21tZW50TW9kYWx9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgbW9kYWxBY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoeyBzaG93IH0sIGRpc3BhdGNoKVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShUaW1lbGluZVBvc3RzKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==