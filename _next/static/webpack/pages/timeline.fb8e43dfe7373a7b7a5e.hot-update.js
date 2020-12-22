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
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_25__);




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
      return typeof item.videos !== 'undefined' ? item.videos : [];
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

  console.log('checking modalMode', modalMode);
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
        className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.videos,
        key: i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
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
          lineNumber: 197,
          columnNumber: 19
        }
      }, __jsx("source", {
        src: "https://www.freeskies.com/static/".concat(video.src),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208,
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
          lineNumber: 210,
          columnNumber: 19
        }
      }, "Button For position of Video")) : __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237,
          columnNumber: 23
        }
      }, __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238,
          columnNumber: 21
        }
      }, "Your posting video is on processing..."), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Progress"], {
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
          lineNumber: 239,
          columnNumber: 21
        }
      })));
    }), images && images.length > 0 ? __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.post_content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.image, (_classnames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.grid_2, images.length == 2), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.grid_3, images.length == 3), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.grid_4, images.length == 4), _classnames)),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 17
      }
    }, images.length == 1 && __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].blob_tn ? images[0].blob_tn : images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 23
      }
    })), images.length == 2 && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.image_item, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.main_photo),
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].blob_tn ? images[0].blob_tn : images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[1].blob_tn ? images[1].blob_tn : images[1].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 25
      }
    }))), images.length == 3 && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.image_item, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.main_photo),
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].blob_tn ? images[0].blob_tn : images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[1].blob_tn ? images[1].blob_tn : images[1].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[2].blob_tn ? images[2].blob_tn : images[2].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 25
      }
    }))), images.length >= 4 && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.image_item, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.main_photo),
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].blob_tn ? images[0].blob_tn : images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 306,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 308,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[1].blob_tn ? images[1].blob_tn : images[1].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 309,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[2].blob_tn ? images[2].blob_tn : images[2].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 312,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 314,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.show_more,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 315,
        columnNumber: 25
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 27
      }
    }, "+4")), __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[3].blob_tn ? images[3].blob_tn : images[3].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318,
        columnNumber: 25
      }
    }))))) : __jsx("div", {
      style: {
        height: 50
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 325,
        columnNumber: 15
      }
    }), type == "Photo" ? blob_tn && __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.post_content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 328,
        columnNumber: 42
      }
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.image),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 329,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 332,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(blob_tn),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 333,
        columnNumber: 19
      }
    })))) : blob_tn && __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.videos,
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337,
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
        lineNumber: 338,
        columnNumber: 15
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.reactions_shares_status,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 351,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.reactions_status,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 352,
        columnNumber: 15
      }
    }, likeData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(likeData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 354,
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
        lineNumber: 355,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 356,
        columnNumber: 21
      }
    }, likeData.length))), hahaData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(hahaData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 360,
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
        lineNumber: 361,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 362,
        columnNumber: 21
      }
    }, hahaData.length))), heartData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(heartData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 367,
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
        lineNumber: 368,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 369,
        columnNumber: 21
      }
    }, heartData.length))), wowData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(wowData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 374,
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
        lineNumber: 375,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 376,
        columnNumber: 21
      }
    }, wowData.length))), sadData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(sadData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 381,
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
        lineNumber: 382,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 383,
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
        lineNumber: 389,
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
        lineNumber: 402,
        columnNumber: 13
      }
    }));
  }), __jsx(_CommentsModal__WEBPACK_IMPORTED_MODULE_13__["default"], {
    activePostId: activePostId,
    postData: data,
    onUpdateTimeline: onUpdateTimeline,
    title: "Comments",
    show: modalMode,
    onClose: function onClose() {
      console.log('close modal');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aW1lbGluZS9UaW1lbGluZVBvc3RzLmpzIl0sIm5hbWVzIjpbIlRpbWVsaW5lUG9zdHMiLCJkYXRhIiwib25VcGRhdGVUaW1lbGluZSIsIm9uUmF0ZVBvc3QiLCJtb2RhbEFjdGlvbnMiLCJzaGFyZUFjdGlvbiIsImxpa2VBY3Rpb24iLCJkZWxldGVBY3Rpb24iLCJkaXNhYmxlRGVsZXRlIiwicGFyZW50RGl2IiwiYXV0aCIsInVzZVN0YXRlIiwicHJvY2Vzc2luZ1ZpZGVvcyIsInNldFByb2Nlc3NpbmdWaWRlb3MiLCJ2aWRlb0RhdGEiLCJzZXRWaWRlb0RhdGEiLCJpbWFnZXNMaXN0IiwiY29uY2F0IiwiYXBwbHkiLCJtYXAiLCJpdGVtIiwidHlwZSIsImltYWdlcyIsInZpZGVvTGlzdCIsInZpZGVvcyIsInVzZUVmZmVjdCIsInNvY2tldCIsImlvIiwib24iLCJjb25zb2xlIiwibG9nIiwiZW1pdCIsInRva2VuIiwiZSIsInZpZGVvSXRlbSIsInByb2Nlc3NpbmciLCJpZCIsInZpZGVvIiwibWVzc2FnZSIsInN1Y2Nlc3MiLCJhY3RpdmVQb3N0SWQiLCJzZXRBY3RpdmVQb3N0SWQiLCJtb2RhbE1vZGUiLCJzZXRNb2RhbE1vZGUiLCJ2aWRlb1JlZiIsInVzZU1vZGFsIiwib3BlbiIsImhpZGVQaG90b01vZGFsIiwic2hvd1Bob3RvTW9kYWwiLCJoYW5kbGVTaG93Q29tbWVudE1vZGFsIiwic2hvdyIsInRvZ2dsZUNvbW1lbnRTaG93IiwiaW5kZXgiLCJzZXRDb21tZW50U2hvdyIsImNvbW1lbnRTaG93IiwiZ2V0TGlrZUFjdGlvblVzZXJJbmZvIiwiZmluYWxEYXRhIiwiYWNjb3VudCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwic3R5bGVzIiwiYWN0aXZpdHlfY29udGVudCIsImNyZWF0ZWRBdCIsImNvbW1lbnRzIiwidGV4dCIsInNoYXJlZCIsImNvbW1lbnRlZCIsImJsb2JfdG4iLCJ0aHVtYm5haWwiLCJyZWFjdGlvbnMiLCJ0ZXh0X2xpbmtzIiwicHVzaCIsInByb2ZpbGVVcmwiLCJ1bmRlZmluZWQiLCJwcm9maWxlUGhvdG8iLCJzcmMiLCJmdWxsTmFtZSIsInVzZXJuYW1lIiwibGlrZURhdGEiLCJmaWx0ZXIiLCJyZWFjdGlvbiIsImhlYXJ0RGF0YSIsIndvd0RhdGEiLCJoYWhhRGF0YSIsInNhZERhdGEiLCJwb3N0IiwiZm9udFNpemUiLCJtYXJnaW5SaWdodCIsImN1cnNvciIsInBvc3RfaGVhZGVyIiwiYXZhdGFyIiwidXNlcl9pbmZvIiwidXNlcl9uYW1lIiwiZGF0ZSIsIm1vbWVudCIsImZvcm1hdCIsImRlc2NyaXB0aW9uIiwiaSIsImxlbmd0aCIsInZpZGVvSnNPcHRpb25zIiwiYXV0b3BsYXkiLCJjb250cm9scyIsInNvdXJjZXMiLCJ3aXRoQ3JlZGVudGlhbHMiLCJodG1sNSIsImhscyIsIm92ZXJyaWRlTmF0aXZlIiwicGxheWVyIiwicGxheSIsImVsIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBvc2l0aW9uWSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInkiLCJpbm5lckhlaWdodCIsInBhdXNlIiwiY3VycmVudCIsInZpc2liaWxpdHkiLCJwZXJjZW50IiwicG9zdF9jb250ZW50IiwiY2xhc3NuYW1lcyIsImltYWdlIiwiZ3JpZF8yIiwiZ3JpZF8zIiwiZ3JpZF80IiwiaW1hZ2VfaXRlbSIsIm1haW5fcGhvdG8iLCJzaG93X21vcmUiLCJoZWlnaHQiLCJyZWFjdGlvbnNfc2hhcmVzX3N0YXR1cyIsInJlYWN0aW9uc19zdGF0dXMiLCJyYXRpbmciLCJ0ZXJtIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QXBTRixDQURGO0FBZ1REOztHQS9ZUTlCLGE7VUE0RGtDNkMsMEQ7OztLQTVEbEM3QyxhOztBQWlaVCxJQUFNc0ksa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFEO0FBQUEsU0FBZTtBQUN4Q25JLGdCQUFZLEVBQUVvSSxpRUFBa0IsQ0FBQztBQUFFdEYsVUFBSSxFQUFKQSxpREFBSUE7QUFBTixLQUFELEVBQVdxRixRQUFYO0FBRFEsR0FBZjtBQUFBLENBQTNCOztBQUllRSwySEFBTyxDQUFDLElBQUQsRUFBT0gsa0JBQVAsQ0FBUCxDQUFrQ3RJLGFBQWxDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGltZWxpbmUuZmI4ZTQzZGZlNzM3M2E3YjdhNWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvdGltZWxpbmUtcG9zdC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IFBvcG92ZXIsIFRvb2x0aXAgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBDb21tZW50cyBmcm9tICcuL0NvbW1lbnRzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBBY3Rpb25zIGZyb20gJy4vQWN0aW9ucyc7XHJcbmltcG9ydCBUcmltVGV4dCBmcm9tICcuLi9jb21tb24vVHJpbVRleHQnO1xyXG5pbXBvcnQgeyB1c2VNb2RhbCB9IGZyb20gJ3JlYWN0LW1vZGFsLWhvb2snO1xyXG5pbXBvcnQgQ29tbWVudHNNb2RhbCBmcm9tICcuL0NvbW1lbnRzTW9kYWwnO1xyXG5pbXBvcnQgUGhvdG9zTW9kYWwgZnJvbSAnLi4vcHJvZmlsZS9QaG90b3NNb2RhbCc7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnLi4vY29tbW9uL0F2YXRhcic7XHJcbmltcG9ydCB7IHNob3cgfSBmcm9tICdyZWR1eC1tb2RhbCc7XHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IEFQSSBmcm9tICdjb25maWdzL0FQSSc7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJ3ZpZGVvLXJlYWN0JztcclxuaW1wb3J0IHsgUGhvdG9zUHJvdmlkZXIgfSAgZnJvbSAnY29udGFpbmVycy9QaG90b3Mvc3RvcmFnZS9QaG90b0NvbnRleHQnO1xyXG5pbXBvcnQgeyBMaW5rUHJldmlldyB9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL0xpbmtQcmV2aWV3JztcclxuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xyXG5pbXBvcnQgVmlkZW9QbGF5ZXIgZnJvbSAnY29tcG9uZW50cy9jb21tb24vVmlkZW9QbGF5ZXInO1xyXG5pbXBvcnQgeyBQcm9ncmVzcyB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBCdXR0b24sIFVwbG9hZCwgbWVzc2FnZSwgSW5wdXQsIFRhYnMsIFJhdGUgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IFJlYWN0TW9kYWwgZnJvbSAncmVhY3QtbW9kYWwnO1xyXG5cclxuZnVuY3Rpb24gVGltZWxpbmVQb3N0cyh7IGRhdGEsIG9uVXBkYXRlVGltZWxpbmUsIG9uUmF0ZVBvc3QsIG1vZGFsQWN0aW9ucywgc2hhcmVBY3Rpb24sIGxpa2VBY3Rpb24sIGRlbGV0ZUFjdGlvbiwgZGlzYWJsZURlbGV0ZSwgcGFyZW50RGl2ID0gbnVsbCwgYXV0aCB9KSB7XHJcbiAgXHJcbiAgY29uc3QgW3Byb2Nlc3NpbmdWaWRlb3MsIHNldFByb2Nlc3NpbmdWaWRlb3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFt2aWRlb0RhdGEsIHNldFZpZGVvRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBpbWFnZXNMaXN0ID0gW10uY29uY2F0LmFwcGx5KFtdLCBkYXRhLm1hcChpdGVtID0+IFxyXG4gICAgeyBcclxuICAgICAgICBpZihpdGVtLnR5cGUgPT09ICdQaG90bycpIHtcclxuICAgICAgICAgIHJldHVybiAgaXRlbTtcclxuICAgICAgICB9IGVsc2UgaWYoaXRlbS50eXBlID09PSAnVmlkZW9DbGlwJykge1xyXG4gICAgICAgICAgcmV0dXJuICBbXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuICBpdGVtLmltYWdlcyBcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG4gICkpXHJcblxyXG4gIGNvbnN0IHZpZGVvTGlzdCA9IFtdLmNvbmNhdC5hcHBseShbXSwgZGF0YS5tYXAoaXRlbSA9PiB7XHJcbiAgICBpZihpdGVtLnR5cGUgPT09ICdWaWRlb0NsaXAnKSB7XHJcbiAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHR5cGVvZiBpdGVtLnZpZGVvcyAhPT0gJ3VuZGVmaW5lZCc/aXRlbS52aWRlb3M6W107XHJcbiAgICB9XHJcbiAgfSkpXHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHNvY2tldCA9IGlvKCdodHRwczovL3d3dy5mcmVlc2tpZXMuY29tJyk7XHJcbiAgICBzb2NrZXQub24oJ2Nvbm5lY3QnLCAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdjb25uZWN0ZWQhJylcclxuICAgICAgc29ja2V0LmVtaXQoJ0FVVEgnLCB7ICd0b2tlbic6IGF1dGgudG9rZW4gfSlcclxuICAgICAgY29uc29sZS5sb2coJ0FVVEggVE9LRU4gU0VOVCcpXHJcbiAgICB9KVxyXG5cclxuICAgIHNvY2tldC5vbignQVVUSCcsIGUgPT4ge2NvbnNvbGUubG9nKGUpO1xyXG4gICAgICBpZihlICE9PSAyMDApIHtcclxuXHJcbiAgICAgIH0gZWxzZSAge1xyXG4gICAgICAgIHZpZGVvTGlzdC5tYXAodmlkZW9JdGVtID0+IHtcclxuICAgICAgICAgIGlmKHZpZGVvSXRlbS5wcm9jZXNzaW5nKSB7XHJcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KCdWSURFT19SRUFEWScsIHZpZGVvSXRlbS5pZCk7XHJcbiAgICAgICAgICAgIHNldFByb2Nlc3NpbmdWaWRlb3MoWy4uLnByb2Nlc3NpbmdWaWRlb3MsIHZpZGVvSXRlbS5pZF0pXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdWJzY3JpYmVkIHZpZGVvIGlkJyArIHZpZGVvSXRlbS5pZCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBzb2NrZXQub24oJ1ZJREVPX1JFQURZJywgKHZpZGVvKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygndmlkZW8gcmVhZHknLCB2aWRlbylcclxuICAgICAgICAgIHNldFZpZGVvRGF0YSh2aWRlbyk7XHJcbiAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoJ1lvdXIgdmlkZW8gd2FzIHByb2Nlc3NlZCBzdWNjZXNzZnVsbHkhJylcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuXHJcbiAgfSwgW2RhdGFdKVxyXG5cclxuIFxyXG5cclxuICBjb25zdCBbYWN0aXZlUG9zdElkLCBzZXRBY3RpdmVQb3N0SWRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW21vZGFsTW9kZSwgc2V0TW9kYWxNb2RlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zb2xlLmxvZygnY2hlY2tpbmcgbW9kYWxNb2RlJywgbW9kYWxNb2RlKTtcclxuICBsZXQgdmlkZW9SZWYgPSBbXTtcclxuICBjb25zdCBbc2hvd1Bob3RvTW9kYWwsIGhpZGVQaG90b01vZGFsXSA9IHVzZU1vZGFsKCh7IGluOiBvcGVuIH0pID0+IChcclxuICAgIDxQaG90b3NQcm92aWRlcj5cclxuICAgICAgPFBob3Rvc01vZGFsXHJcbiAgICAgICAgdGl0bGU9XCJQaG90byBkZXRhaWxcIlxyXG4gICAgICAgIHNob3dNb2RhbD17b3Blbn1cclxuICAgICAgICBvbkNsb3NlPXtoaWRlUGhvdG9Nb2RhbH1cclxuICAgICAgICBvblJhdGVQb3N0PXtvblJhdGVQb3N0fVxyXG4gICAgICAgIGRhdGE9e2ltYWdlc0xpc3R9XHJcbiAgICAgICAgbGlrZUFjdGlvbj17bGlrZUFjdGlvbn1cclxuICAgICAgICBzaGFyZUFjdGlvbj17c2hhcmVBY3Rpb259XHJcbiAgICAgICAgb25VcGRhdGVUaW1lbGluZT17b25VcGRhdGVUaW1lbGluZX1cclxuICAgICAgICBhdXRoPXthdXRofVxyXG4gICAgICAvPlxyXG4gICAgPC9QaG90b3NQcm92aWRlcj5cclxuICApKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2hvd0NvbW1lbnRNb2RhbCA9IChpZCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlUG9zdElkKGlkKTtcclxuICAgIHNldE1vZGFsTW9kZSghbW9kYWxNb2RlKTtcclxuICAgIG1vZGFsQWN0aW9ucy5zaG93KCdjb21tZW50TW9kYWwnLCB7IGlkOiBhY3RpdmVQb3N0SWQgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlQ29tbWVudFNob3cgPSAoaW5kZXgpID0+XHJcbiAgICBzZXRDb21tZW50U2hvdyhjb21tZW50U2hvdyA9PT0gaW5kZXggPyBudWxsIDogaW5kZXgpO1xyXG5cclxuICBjb25zdCBnZXRMaWtlQWN0aW9uVXNlckluZm8gPSAoZGF0YSkgPT4ge1xyXG4gICAgdmFyIGZpbmFsRGF0YSA9ICcnO1xyXG4gICAgZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgIGZpbmFsRGF0YSA9IGZpbmFsRGF0YSArICcgJyArIGl0ZW0uYWNjb3VudC5maXJzdE5hbWUgKyAnJyArIGl0ZW0uYWNjb3VudC5sYXN0TmFtZSA7XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIGZpbmFsRGF0YTtcclxuICB9XHJcblxyXG4gXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjdGl2aXR5X2NvbnRlbnR9ID5cclxuICAgICAge2RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHZhciB7IGFjY291bnQsIGNyZWF0ZWRBdCwgdHlwZSwgY29tbWVudHMsIHRleHQsIGltYWdlcywgdmlkZW9zLCBzaGFyZWQsIGNvbW1lbnRlZCwgYmxvYl90biwgdGh1bWJuYWlsLCByZWFjdGlvbnMsIHRleHRfbGlua3MgfSA9IGl0ZW07XHJcbiAgICAgICAgdmlkZW9SZWYucHVzaChudWxsKTtcclxuICAgICAgICBjb25zdCBwcm9maWxlVXJsID0gYWNjb3VudCAhPT0gbnVsbCAmJiBhY2NvdW50ICE9PSB1bmRlZmluZWQgPyBgJHthY2NvdW50LnByb2ZpbGVQaG90bz8uc3JjfWAgOiBudWxsXHJcbiAgICAgICAgY29uc3QgZnVsbE5hbWUgPSBgJHthY2NvdW50Py5maXJzdE5hbWV9ICR7YWNjb3VudD8ubGFzdE5hbWV9YDtcclxuICAgICAgICBjb25zdCB1c2VybmFtZSA9IGFjY291bnQ/LnVzZXJuYW1lO1xyXG4gICAgICAgIGNvbnN0IGxpa2VEYXRhID0gcmVhY3Rpb25zPyByZWFjdGlvbnM/LmZpbHRlcihpdGVtID0+IGl0ZW0ucmVhY3Rpb24gPT0gJ0xJS0UnKTpbXTtcclxuICAgICAgICBjb25zdCBoZWFydERhdGEgPSAgcmVhY3Rpb25zPyByZWFjdGlvbnM/LmZpbHRlcihpdGVtID0+IGl0ZW0ucmVhY3Rpb24gPT0gJ0hFQVJUJyk6W107XHJcbiAgICAgICAgY29uc3Qgd293RGF0YSA9IHJlYWN0aW9ucyA/IHJlYWN0aW9ucz8uZmlsdGVyKGl0ZW0gPT4gaXRlbS5yZWFjdGlvbiA9PSAnV09XJyk6W107XHJcbiAgICAgICAgY29uc3QgaGFoYURhdGEgPSByZWFjdGlvbnMgPyByZWFjdGlvbnM/LmZpbHRlcihpdGVtID0+IGl0ZW0ucmVhY3Rpb24gPT0gJ0hBSEEnKTpbXTtcclxuICAgICAgICBjb25zdCBzYWREYXRhID0gcmVhY3Rpb25zID8gcmVhY3Rpb25zPy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlYWN0aW9uID09ICdTQUQnKTpbXTtcclxuICAgICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdH0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgIHshZGlzYWJsZURlbGV0ZT88Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ3dpbmRvdy1jbG9zZSddfSBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGZsb2F0OiAncmlnaHQnLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAyNSxcclxuICAgICAgICAgICAgICBtYXJnaW5SaWdodDogMTAsXHJcbiAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlQWN0aW9uKGl0ZW0uaWQsIHR5cGUpfVxyXG4gICAgICAgICAgICAvPjpudWxsfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RfaGVhZGVyfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn0+XHJcbiAgICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgIHRleHQ9e2Z1bGxOYW1lfVxyXG4gICAgICAgICAgICAgICAgICB1cmw9e3Byb2ZpbGVVcmx9XHJcbiAgICAgICAgICAgICAgICAgIHNpemU9ezYwfVxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJTaXplPXszfVxyXG4gICAgICAgICAgICAgICAgICB1c2VybmFtZT17dXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfaW5mb30+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy51c2VyX25hbWV9PntmdWxsTmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kYXRlfT5cclxuICAgICAgICAgICAgICB7bW9tZW50KGNyZWF0ZWRBdCkuZm9ybWF0KCdNTU0gREQsIFlZWVkgLSBISDptbSBBJyl9XHJcbiAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cclxuICAgICAgICAgICAgICA8VHJpbVRleHQgbGltaXQ9ezExMH0+XHJcbiAgICAgICAgICAgICAgICB7IHR5cGUhPT0nU2hhcmUnP3RleHQ6c2hhcmVkLnRleHQgfVxyXG4gICAgICAgICAgICAgIDwvVHJpbVRleHQ+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHt0ZXh0X2xpbmtzICYmIHRleHRfbGlua3MubWFwKChpdGVtLCBpKSA9PiBcclxuICAgICAgICAgICAgICA8TGlua1ByZXZpZXcgZGF0YT17aXRlbX0ga2V5PXtpdGVtLmlkICsgJyAnICsgaX0vPiAgXHJcbiAgICAgICAgICAgICkgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHt2aWRlb3MgJiYgdmlkZW9zLmxlbmd0aCA+IDAgJiYgdmlkZW9zLm1hcCgodmlkZW8sIGkpID0+IHtcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGxldCB2aWRlb0pzT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc291cmNlczogW3tcclxuICAgICAgICAgICAgICAgICAgc3JjOiBgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHt2aWRlby5zcmN9YCxcclxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJhcHBsaWNhdGlvbi94LW1wZWdVUkxcIixcclxuICAgICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBodG1sNToge1xyXG4gICAgICAgICAgICAgICAgICAgIGhsczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3ZlcnJpZGVOYXRpdmU6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZpZGVvc30ga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgeyF2aWRlby5wcm9jZXNzaW5nPzw+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8VmlkZW9QbGF5ZXIgeyAuLi52aWRlb0pzT3B0aW9ucyB9IC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICB7LyogPFZpZGVvUGxheWVyIHdpZHRoPVwiMjUwXCIgaGVpZ2h0PVwiNjBcIiBzb3VyY2U9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke3ZpZGVvLnNyY31gfSAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgPFBsYXllclxyXG4gICAgICAgICAgICAgICAgICAgIHBsYXlzSW5saW5lXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b3BsYXlcclxuICAgICAgICAgICAgICAgICAgICBtdXRlZFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc3Rlcj17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7dmlkZW8udGh1bWJuYWlsLnNyY31gfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17cGxheWVyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmKHZpZGVvUmVmICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvUmVmW2luZGV4XSA9IHBsYXllcjsgXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHt2aWRlby5zcmN9YH0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9QbGF5ZXI+IFxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHZpZGVvUmVmW2luZGV4XS5wbGF5KCl9IHJlZj17ZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZWwpIHJldHVybjsgXHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmKHZpZGVvUmVmICYmIHZpZGVvUmVmW2luZGV4XSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zaXRpb25ZID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocG9zaXRpb25ZID4gKHdpbmRvdy5pbm5lckhlaWdodC8yKSAmJiBwb3NpdGlvblkgPCB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2aWRlb1JlZltpbmRleF0ucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvUmVmW2luZGV4XS5wYXVzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBpZihwYXJlbnREaXYgIT09IG51bGwgJiYgcGFyZW50RGl2Py5jdXJyZW50ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwYXJlbnREaXY/LmN1cnJlbnQ/LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodmlkZW9SZWYgJiYgdmlkZW9SZWZbaW5kZXhdICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvc2l0aW9uWSA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocG9zaXRpb25ZID4gKHdpbmRvdy5pbm5lckhlaWdodC8yKSAmJiBwb3NpdGlvblkgPCB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvUmVmW2luZGV4XS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvUmVmW2luZGV4XS5wYXVzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB2aXNpYmlsaXR5OiAnaGlkZGVuJyB9fVxyXG4gICAgICAgICAgICAgICAgICA+QnV0dG9uIEZvciBwb3NpdGlvbiBvZiBWaWRlbzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8Lz46PGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5Zb3VyIHBvc3RpbmcgdmlkZW8gaXMgb24gcHJvY2Vzc2luZy4uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8UHJvZ3Jlc3NcclxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUNvbG9yPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICcwJSc6ICcjMTA4ZWU5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzEwMCUnOiAnIzg3ZDA2OCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgcGVyY2VudD17OTl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9e3BlcmNlbnQgPT4gYGB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgKX1cclxuXHJcblxyXG4gICAgICAgICAgICB7aW1hZ2VzICYmIGltYWdlcy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdF9jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5pbWFnZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIFtzdHlsZXMuZ3JpZF8yXTogaW1hZ2VzLmxlbmd0aCA9PSAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFtzdHlsZXMuZ3JpZF8zXTogaW1hZ2VzLmxlbmd0aCA9PSAzLFxyXG4gICAgICAgICAgICAgICAgICAgIFtzdHlsZXMuZ3JpZF80XTogaW1hZ2VzLmxlbmd0aCA9PSA0LFxyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge2ltYWdlcy5sZW5ndGggPT0gMSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZV9pdGVtfSBvbkNsaWNrPXtzaG93UGhvdG9Nb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzBdLmJsb2JfdG4/aW1hZ2VzWzBdLmJsb2JfdG46aW1hZ2VzWzBdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAge2ltYWdlcy5sZW5ndGggPT0gMiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5pbWFnZV9pdGVtLCBzdHlsZXMubWFpbl9waG90byl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dQaG90b01vZGFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzBdLmJsb2JfdG4/aW1hZ2VzWzBdLmJsb2JfdG46aW1hZ2VzWzBdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX2l0ZW19IG9uQ2xpY2s9e3Nob3dQaG90b01vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1sxXS5ibG9iX3RuP2ltYWdlc1sxXS5ibG9iX3RuOmltYWdlc1sxXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAge2ltYWdlcy5sZW5ndGggPT0gMyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5pbWFnZV9pdGVtLCBzdHlsZXMubWFpbl9waG90byl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dQaG90b01vZGFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzBdLmJsb2JfdG4/aW1hZ2VzWzBdLmJsb2JfdG46aW1hZ2VzWzBdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX2l0ZW19IG9uQ2xpY2s9e3Nob3dQaG90b01vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1sxXS5ibG9iX3RuP2ltYWdlc1sxXS5ibG9iX3RuOmltYWdlc1sxXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZV9pdGVtfSBvbkNsaWNrPXtzaG93UGhvdG9Nb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMl0uYmxvYl90bj9pbWFnZXNbMl0uYmxvYl90bjppbWFnZXNbMl0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtpbWFnZXMubGVuZ3RoID49IDQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuaW1hZ2VfaXRlbSwgc3R5bGVzLm1haW5fcGhvdG8pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzaG93UGhvdG9Nb2RhbH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1swXS5ibG9iX3RuP2ltYWdlc1swXS5ibG9iX3RuOmltYWdlc1swXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZV9pdGVtfSBvbkNsaWNrPXtzaG93UGhvdG9Nb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMV0uYmxvYl90bj9pbWFnZXNbMV0uYmxvYl90bjppbWFnZXNbMV0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfaXRlbX0gb25DbGljaz17c2hvd1Bob3RvTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzJdLmJsb2JfdG4/aW1hZ2VzWzJdLmJsb2JfdG46aW1hZ2VzWzJdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX2l0ZW19IG9uQ2xpY2s9e3Nob3dQaG90b01vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaG93X21vcmV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPis0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1szXS5ibG9iX3RuP2ltYWdlc1szXS5ibG9iX3RuOmltYWdlc1szXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IDUwIH19IC8+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7dHlwZSA9PSBcIlBob3RvXCI/IGJsb2JfdG4gJiYgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0X2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuaW1hZ2UpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX2l0ZW19IG9uQ2xpY2s9e3Nob3dQaG90b01vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2Jsb2JfdG59YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PjpcclxuICAgICAgICAgICAgYmxvYl90biAmJiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZpZGVvc30ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgPFBsYXllclxyXG4gICAgICAgICAgICAgICAgcGxheXNJbmxpbmVcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5XHJcbiAgICAgICAgICAgICAgICBtdXRlZFxyXG4gICAgICAgICAgICAgICAgcG9zdGVyPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHt0aHVtYm5haWwuc3JjfWB9XHJcbiAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2Jsb2JfdG59YH1cclxuICAgICAgICAgICAgICAgIHJlZj17cGxheWVyID0+IHtcclxuICAgICAgICAgICAgICAgICAgLy8gdmlkZW9SZWYgPSBwbGF5ZXI7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZWFjdGlvbnNfc2hhcmVzX3N0YXR1c30+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZWFjdGlvbnNfc3RhdHVzfT5cclxuICAgICAgICAgICAgICAgIHsgbGlrZURhdGEubGVuZ3RoID4gMCAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKGxpa2VEYXRhKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICd0aHVtYnMtdXAnXX0gc2l6ZT1cIjF4XCIgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntsaWtlRGF0YS5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+PC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7IGhhaGFEYXRhLmxlbmd0aCA+IDAgJiYgPD5cclxuICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9e2dldExpa2VBY3Rpb25Vc2VySW5mbyhoYWhhRGF0YSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAnZ3JpbiddfSBzaXplPVwiMXhcIiAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcid9fS8+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntoYWhhRGF0YS5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgeyBoZWFydERhdGEubGVuZ3RoID4gMCAmJiA8PiBcclxuICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9e2dldExpa2VBY3Rpb25Vc2VySW5mbyhoZWFydERhdGEpfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ2hlYXJ0J119IHNpemU9XCIxeFwiICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJ319Lz4gXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2hlYXJ0RGF0YS5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgeyB3b3dEYXRhLmxlbmd0aCA+IDAgJiYgPD4gXHJcbiAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPXtnZXRMaWtlQWN0aW9uVXNlckluZm8od293RGF0YSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAnbGF1Z2gnXX0gc2l6ZT1cIjF4XCIgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnt3b3dEYXRhLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgPC8+IFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgeyBzYWREYXRhLmxlbmd0aCA+IDAgJiYgPD5cclxuICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9e2dldExpa2VBY3Rpb25Vc2VySW5mbyhzYWREYXRhKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdmcm93biddfSBzaXplPVwiMXhcIiAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcid9fS8+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntzYWREYXRhLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8QWN0aW9uc1xyXG4gICAgICAgICAgICAgIGlkPXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgIHR5cGU9e2l0ZW0udHlwZX1cclxuICAgICAgICAgICAgICBwb3N0UmF0ZT17aXRlbS5yYXRpbmd9XHJcbiAgICAgICAgICAgICAgY29tbWVudHM9e2NvbW1lbnRzfVxyXG4gICAgICAgICAgICAgIG9uUmF0ZVBvc3Q9e29uUmF0ZVBvc3R9XHJcbiAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxyXG4gICAgICAgICAgICAgIGxpa2VBY3Rpb249eyh0ZXJtKSA9PiBsaWtlQWN0aW9uKHR5cGUsIGl0ZW0uaWQsIHRlcm0pfVxyXG4gICAgICAgICAgICAgIHNoYXJlQWN0aW9uPXsoKSA9PiBzaGFyZUFjdGlvbih0eXBlICE9PSAnU2hhcmUnP3R5cGU6c2hhcmVkLnR5cGUsIHR5cGUgIT09ICdTaGFyZSc/aXRlbS5pZDpzaGFyZWQuaWQpfVxyXG4gICAgICAgICAgICAgIGFjdGlvbnM9e1xyXG4gICAgICAgICAgICAgICAgKCkgPT4geyBoYW5kbGVTaG93Q29tbWVudE1vZGFsKGl0ZW0uaWQpIH0gXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Q29tbWVudHNcclxuICAgICAgICAgICAgICBpZD17aXRlbS5pZH1cclxuICAgICAgICAgICAgICB0eXBlPXtpdGVtLnR5cGV9XHJcbiAgICAgICAgICAgICAgZGF0YT17Y29tbWVudHN9XHJcbiAgICAgICAgICAgICAgb25VcGRhdGVUaW1lbGluZT17b25VcGRhdGVUaW1lbGluZX1cclxuICAgICAgICAgICAgICBhY3RpdmVQb3N0SWQ9e2FjdGl2ZVBvc3RJZH1cclxuICAgICAgICAgICAgICBtb2RhbE1vZGU9e21vZGFsTW9kZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuXHJcbiAgICAgIDxDb21tZW50c01vZGFsXHJcbiAgICAgICAgYWN0aXZlUG9zdElkPXthY3RpdmVQb3N0SWR9XHJcbiAgICAgICAgcG9zdERhdGE9e2RhdGF9XHJcbiAgICAgICAgb25VcGRhdGVUaW1lbGluZT17b25VcGRhdGVUaW1lbGluZX1cclxuICAgICAgICB0aXRsZT1cIkNvbW1lbnRzXCJcclxuICAgICAgICBzaG93PXttb2RhbE1vZGV9XHJcbiAgICAgICAgb25DbG9zZT17KCkgPT4ge2NvbnNvbGUubG9nKCdjbG9zZSBtb2RhbCcpfX1cclxuICAgICAgLz5cclxuICAgICBcclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuICBtb2RhbEFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyh7IHNob3cgfSwgZGlzcGF0Y2gpXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFRpbWVsaW5lUG9zdHMpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9