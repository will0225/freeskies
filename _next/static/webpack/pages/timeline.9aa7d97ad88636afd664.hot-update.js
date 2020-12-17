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
  console.log(videoList);
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
            console.log(processingVideos);
          }
        });
        socket.on('VIDEO_READY', function (video) {
          console.log('video ready', video);
          setVideoData(video);
        });
      }
    });
  }, [videoList]);

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
        lineNumber: 89,
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
        lineNumber: 90,
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
      lineNumber: 124,
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
        lineNumber: 138,
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
        lineNumber: 139,
        columnNumber: 29
      }
    }) : null, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.post_header,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.avatar,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
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
        lineNumber: 149,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.user_info,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 15
      }
    }, __jsx("p", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.user_name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 17
      }
    }, fullName))), __jsx("p", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.date,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 13
      }
    }, moment__WEBPACK_IMPORTED_MODULE_9___default()(createdAt).format('MMM DD, YYYY - HH:mm A')), __jsx("p", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.description,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 13
      }
    }, __jsx(_common_TrimText__WEBPACK_IMPORTED_MODULE_11__["default"], {
      limit: 110,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 15
      }
    }, type !== 'Share' ? text : shared.text)), text_links && text_links.map(function (item, i) {
      return __jsx(components_common_LinkPreview__WEBPACK_IMPORTED_MODULE_22__["LinkPreview"], {
        data: item,
        key: item.id + ' ' + i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
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
          lineNumber: 186,
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
          lineNumber: 187,
          columnNumber: 40
        }
      }, __jsx("source", {
        src: "https://www.freeskies.com/static/".concat(video.src),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198,
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
          lineNumber: 200,
          columnNumber: 19
        }
      }, "Button For position of Video")) : __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 23
        }
      }, __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 21
        }
      }, "Your posting video is on processing..."), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Progress"], {
        strokeColor: {
          '0%': '#108ee9',
          '100%': '#87d068'
        },
        percent: 50,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aW1lbGluZS9UaW1lbGluZVBvc3RzLmpzIl0sIm5hbWVzIjpbIlRpbWVsaW5lUG9zdHMiLCJkYXRhIiwib25VcGRhdGVUaW1lbGluZSIsIm9uUmF0ZVBvc3QiLCJtb2RhbEFjdGlvbnMiLCJzaGFyZUFjdGlvbiIsImxpa2VBY3Rpb24iLCJkZWxldGVBY3Rpb24iLCJkaXNhYmxlRGVsZXRlIiwicGFyZW50RGl2IiwiYXV0aCIsInVzZVN0YXRlIiwicHJvY2Vzc2luZ1ZpZGVvcyIsInNldFByb2Nlc3NpbmdWaWRlb3MiLCJ2aWRlb0RhdGEiLCJzZXRWaWRlb0RhdGEiLCJpbWFnZXNMaXN0IiwiY29uY2F0IiwiYXBwbHkiLCJtYXAiLCJpdGVtIiwidHlwZSIsImltYWdlcyIsInZpZGVvTGlzdCIsInZpZGVvcyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJzb2NrZXQiLCJpbyIsIm9uIiwiZW1pdCIsInRva2VuIiwiZSIsInZpZGVvSXRlbSIsInByb2Nlc3NpbmciLCJpZCIsInZpZGVvIiwiYWN0aXZlUG9zdElkIiwic2V0QWN0aXZlUG9zdElkIiwibW9kYWxNb2RlIiwic2V0TW9kYWxNb2RlIiwidmlkZW9SZWYiLCJ1c2VNb2RhbCIsIm9wZW4iLCJoaWRlUGhvdG9Nb2RhbCIsInNob3dQaG90b01vZGFsIiwiaGFuZGxlU2hvd0NvbW1lbnRNb2RhbCIsInRvZ2dsZUNvbW1lbnRTaG93IiwiaW5kZXgiLCJzZXRDb21tZW50U2hvdyIsImNvbW1lbnRTaG93IiwiZ2V0TGlrZUFjdGlvblVzZXJJbmZvIiwiZmluYWxEYXRhIiwiYWNjb3VudCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwic3R5bGVzIiwiYWN0aXZpdHlfY29udGVudCIsImNyZWF0ZWRBdCIsImNvbW1lbnRzIiwidGV4dCIsInNoYXJlZCIsImNvbW1lbnRlZCIsImJsb2JfdG4iLCJ0aHVtYm5haWwiLCJyZWFjdGlvbnMiLCJ0ZXh0X2xpbmtzIiwicHVzaCIsInByb2ZpbGVVcmwiLCJ1bmRlZmluZWQiLCJwcm9maWxlUGhvdG8iLCJzcmMiLCJmdWxsTmFtZSIsInVzZXJuYW1lIiwibGlrZURhdGEiLCJmaWx0ZXIiLCJyZWFjdGlvbiIsImhlYXJ0RGF0YSIsIndvd0RhdGEiLCJoYWhhRGF0YSIsInNhZERhdGEiLCJwb3N0IiwiZm9udFNpemUiLCJtYXJnaW5SaWdodCIsImN1cnNvciIsInBvc3RfaGVhZGVyIiwiYXZhdGFyIiwidXNlcl9pbmZvIiwidXNlcl9uYW1lIiwiZGF0ZSIsIm1vbWVudCIsImZvcm1hdCIsImRlc2NyaXB0aW9uIiwiaSIsImxlbmd0aCIsInZpZGVvSnNPcHRpb25zIiwiYXV0b3BsYXkiLCJjb250cm9scyIsInNvdXJjZXMiLCJwbGF5ZXIiLCJwbGF5IiwiZWwiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicG9zaXRpb25ZIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwieSIsImlubmVySGVpZ2h0IiwicGF1c2UiLCJjdXJyZW50IiwidmlzaWJpbGl0eSIsInBvc3RfY29udGVudCIsImNsYXNzbmFtZXMiLCJpbWFnZSIsImdyaWRfMiIsImdyaWRfMyIsImdyaWRfNCIsImltYWdlX2l0ZW0iLCJtYWluX3Bob3RvIiwic2hvd19tb3JlIiwiaGVpZ2h0IiwicmVhY3Rpb25zX3NoYXJlc19zdGF0dXMiLCJyZWFjdGlvbnNfc3RhdHVzIiwicmF0aW5nIiwidGVybSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYmluZEFjdGlvbkNyZWF0b3JzIiwic2hvdyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7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Q2dCLEVBQU4sQ0FBdEI7QUFBaUMsT0FWN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWhQRixFQTZQRSxNQUFDLGlEQUFEO0FBQ0UsUUFBRSxFQUFFaEIsSUFBSSxDQUFDZ0IsRUFEWDtBQUVFLFVBQUksRUFBRWhCLElBQUksQ0FBQ0MsSUFGYjtBQUdFLFVBQUksRUFBRXVDLFFBSFI7QUFJRSxzQkFBZ0IsRUFBRTFELGdCQUpwQjtBQUtFLGtCQUFZLEVBQUVvQyxZQUxoQjtBQU1FLGVBQVMsRUFBRUUsU0FOYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BN1BGLENBREY7QUF5UUQsR0FyUkEsQ0FESCxFQXdSRSxNQUFDLHVEQUFEO0FBQ0UsZ0JBQVksRUFBRUYsWUFEaEI7QUFFRSxZQUFRLEVBQUVyQyxJQUZaO0FBR0Usb0JBQWdCLEVBQUVDLGdCQUhwQjtBQUlFLFNBQUssRUFBQyxVQUpSLENBS0U7QUFDQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF4UkYsQ0FERjtBQW1TRDs7R0FwWVFGLGE7VUE4RGtDMkMsMEQ7OztLQTlEbEMzQyxhOztBQXNZVCxJQUFNOEgsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFEO0FBQUEsU0FBZTtBQUN4QzNILGdCQUFZLEVBQUU0SCxpRUFBa0IsQ0FBQztBQUFFQyxVQUFJLEVBQUpBLGlEQUFJQTtBQUFOLEtBQUQsRUFBV0YsUUFBWDtBQURRLEdBQWY7QUFBQSxDQUEzQjs7QUFJZUcsMkhBQU8sQ0FBQyxJQUFELEVBQU9KLGtCQUFQLENBQVAsQ0FBa0M5SCxhQUFsQyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3RpbWVsaW5lLjlhYTdkOTdhZDg4NjM2YWZkNjY0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL3RpbWVsaW5lLXBvc3QubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyBQb3BvdmVyLCBUb29sdGlwIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgQ29tbWVudHMgZnJvbSAnLi9Db21tZW50cyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgQWN0aW9ucyBmcm9tICcuL0FjdGlvbnMnO1xyXG5pbXBvcnQgVHJpbVRleHQgZnJvbSAnLi4vY29tbW9uL1RyaW1UZXh0JztcclxuaW1wb3J0IHsgdXNlTW9kYWwgfSBmcm9tICdyZWFjdC1tb2RhbC1ob29rJztcclxuaW1wb3J0IENvbW1lbnRzTW9kYWwgZnJvbSAnLi9Db21tZW50c01vZGFsJztcclxuaW1wb3J0IFBob3Rvc01vZGFsIGZyb20gJy4uL3Byb2ZpbGUvUGhvdG9zTW9kYWwnO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJy4uL2NvbW1vbi9BdmF0YXInO1xyXG5pbXBvcnQgeyBzaG93IH0gZnJvbSAncmVkdXgtbW9kYWwnO1xyXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBBUEkgZnJvbSAnY29uZmlncy9BUEknO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICd2aWRlby1yZWFjdCc7XHJcbmltcG9ydCB7IFBob3Rvc1Byb3ZpZGVyIH0gIGZyb20gJ2NvbnRhaW5lcnMvUGhvdG9zL3N0b3JhZ2UvUGhvdG9Db250ZXh0JztcclxuaW1wb3J0IHsgTGlua1ByZXZpZXcgfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9MaW5rUHJldmlldyc7XHJcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcclxuaW1wb3J0IFZpZGVvUGxheWVyIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL1ZpZGVvUGxheWVyJztcclxuaW1wb3J0IHsgUHJvZ3Jlc3MgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgQnV0dG9uLCBVcGxvYWQsIG1lc3NhZ2UsIElucHV0LCBUYWJzLCBSYXRlIH0gZnJvbSAnYW50ZCc7XHJcblxyXG5mdW5jdGlvbiBUaW1lbGluZVBvc3RzKHsgZGF0YSwgb25VcGRhdGVUaW1lbGluZSwgb25SYXRlUG9zdCwgbW9kYWxBY3Rpb25zLCBzaGFyZUFjdGlvbiwgbGlrZUFjdGlvbiwgZGVsZXRlQWN0aW9uLCBkaXNhYmxlRGVsZXRlLCBwYXJlbnREaXYgPSBudWxsLCBhdXRoIH0pIHtcclxuICBcclxuICBjb25zdCBbcHJvY2Vzc2luZ1ZpZGVvcywgc2V0UHJvY2Vzc2luZ1ZpZGVvc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3ZpZGVvRGF0YSwgc2V0VmlkZW9EYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IGltYWdlc0xpc3QgPSBbXS5jb25jYXQuYXBwbHkoW10sIGRhdGEubWFwKGl0ZW0gPT4gXHJcbiAgICB7IFxyXG4gICAgICAgIGlmKGl0ZW0udHlwZSA9PT0gJ1Bob3RvJykge1xyXG4gICAgICAgICAgcmV0dXJuICBpdGVtO1xyXG4gICAgICAgIH0gZWxzZSBpZihpdGVtLnR5cGUgPT09ICdWaWRlb0NsaXAnKSB7XHJcbiAgICAgICAgICByZXR1cm4gIFtdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gIGl0ZW0uaW1hZ2VzIFxyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbiAgKSlcclxuXHJcbiAgY29uc3QgdmlkZW9MaXN0ID0gW10uY29uY2F0LmFwcGx5KFtdLCBkYXRhLm1hcChpdGVtID0+IHtcclxuICAgIGlmKGl0ZW0udHlwZSA9PT0gJ1ZpZGVvQ2xpcCcpIHtcclxuICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gaXRlbS52aWRlb3M7XHJcbiAgICB9XHJcbiAgfSkpXHJcbiAgXHJcbiAgY29uc29sZS5sb2codmlkZW9MaXN0KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHNvY2tldCA9IGlvKCdodHRwczovL3d3dy5mcmVlc2tpZXMuY29tJyk7XHJcbiAgICBzb2NrZXQub24oJ2Nvbm5lY3QnLCAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdjb25uZWN0ZWQhJylcclxuICAgICAgc29ja2V0LmVtaXQoJ0FVVEgnLCB7ICd0b2tlbic6IGF1dGgudG9rZW4gfSlcclxuICAgICAgY29uc29sZS5sb2coJ0FVVEggVE9LRU4gU0VOVCcpXHJcbiAgICB9KVxyXG5cclxuICAgIHNvY2tldC5vbignQVVUSCcsIGUgPT4ge2NvbnNvbGUubG9nKGUpO1xyXG4gICAgICBpZihlICE9PSAyMDApIHtcclxuXHJcbiAgICAgIH0gZWxzZSAge1xyXG4gICAgICAgIHZpZGVvTGlzdC5tYXAodmlkZW9JdGVtID0+IHtcclxuICAgICAgICAgIGlmKHZpZGVvSXRlbS5wcm9jZXNzaW5nKSB7XHJcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KCdWSURFT19SRUFEWScsIHZpZGVvSXRlbS5pZCk7XHJcbiAgICAgICAgICAgIHNldFByb2Nlc3NpbmdWaWRlb3MoWy4uLnByb2Nlc3NpbmdWaWRlb3MsIHZpZGVvSXRlbS5pZF0pXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdWJzY3JpYmVkIHZpZGVvIGlkJyArIHZpZGVvSXRlbS5pZCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2Nlc3NpbmdWaWRlb3MpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc29ja2V0Lm9uKCdWSURFT19SRUFEWScsICh2aWRlbykgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ3ZpZGVvIHJlYWR5JywgdmlkZW8pXHJcbiAgICAgICAgICBzZXRWaWRlb0RhdGEodmlkZW8pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG5cclxuICB9LCBbdmlkZW9MaXN0XSlcclxuXHJcbiBcclxuXHJcbiAgY29uc3QgW2FjdGl2ZVBvc3RJZCwgc2V0QWN0aXZlUG9zdElkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFttb2RhbE1vZGUsIHNldE1vZGFsTW9kZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGxldCB2aWRlb1JlZiA9IFtdO1xyXG4gIGNvbnN0IFtzaG93UGhvdG9Nb2RhbCwgaGlkZVBob3RvTW9kYWxdID0gdXNlTW9kYWwoKHsgaW46IG9wZW4gfSkgPT4gKFxyXG4gICAgPFBob3Rvc1Byb3ZpZGVyPlxyXG4gICAgICA8UGhvdG9zTW9kYWxcclxuICAgICAgICB0aXRsZT1cIlBob3RvIGRldGFpbFwiXHJcbiAgICAgICAgc2hvd01vZGFsPXtvcGVufVxyXG4gICAgICAgIG9uQ2xvc2U9e2hpZGVQaG90b01vZGFsfVxyXG4gICAgICAgIG9uUmF0ZVBvc3Q9e29uUmF0ZVBvc3R9XHJcbiAgICAgICAgZGF0YT17aW1hZ2VzTGlzdH1cclxuICAgICAgICBsaWtlQWN0aW9uPXtsaWtlQWN0aW9ufVxyXG4gICAgICAgIHNoYXJlQWN0aW9uPXtzaGFyZUFjdGlvbn1cclxuICAgICAgICBvblVwZGF0ZVRpbWVsaW5lPXtvblVwZGF0ZVRpbWVsaW5lfVxyXG4gICAgICAgIGF1dGg9e2F1dGh9XHJcbiAgICAgIC8+XHJcbiAgICA8L1Bob3Rvc1Byb3ZpZGVyPlxyXG4gICkpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTaG93Q29tbWVudE1vZGFsID0gKGlkKSA9PiB7XHJcbiAgICBzZXRBY3RpdmVQb3N0SWQoaWQpO1xyXG4gICAgc2V0TW9kYWxNb2RlKCFtb2RhbE1vZGUpO1xyXG4gICAgLy9tb2RhbEFjdGlvbnMuc2hvdygnY29tbWVudE1vZGFsJywgeyBpZDogYWN0aXZlUG9zdElkIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZ2dsZUNvbW1lbnRTaG93ID0gKGluZGV4KSA9PlxyXG4gICAgc2V0Q29tbWVudFNob3coY29tbWVudFNob3cgPT09IGluZGV4ID8gbnVsbCA6IGluZGV4KTtcclxuXHJcbiAgY29uc3QgZ2V0TGlrZUFjdGlvblVzZXJJbmZvID0gKGRhdGEpID0+IHtcclxuICAgIHZhciBmaW5hbERhdGEgPSAnJztcclxuICAgIGRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICBmaW5hbERhdGEgPSBmaW5hbERhdGEgKyAnICcgKyBpdGVtLmFjY291bnQuZmlyc3ROYW1lICsgJycgKyBpdGVtLmFjY291bnQubGFzdE5hbWUgO1xyXG4gICAgfSlcclxuICAgIHJldHVybiBmaW5hbERhdGE7XHJcbiAgfVxyXG5cclxuIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpdml0eV9jb250ZW50fSA+XHJcbiAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICB2YXIgeyBhY2NvdW50LCBjcmVhdGVkQXQsIHR5cGUsIGNvbW1lbnRzLCB0ZXh0LCBpbWFnZXMsIHZpZGVvcywgc2hhcmVkLCBjb21tZW50ZWQsIGJsb2JfdG4sIHRodW1ibmFpbCwgcmVhY3Rpb25zLCB0ZXh0X2xpbmtzIH0gPSBpdGVtO1xyXG4gICAgICAgIHZpZGVvUmVmLnB1c2gobnVsbCk7XHJcbiAgICAgICAgY29uc3QgcHJvZmlsZVVybCA9IGFjY291bnQgIT09IG51bGwgJiYgYWNjb3VudCAhPT0gdW5kZWZpbmVkID8gYCR7YWNjb3VudC5wcm9maWxlUGhvdG8/LnNyY31gIDogbnVsbFxyXG4gICAgICAgIGNvbnN0IGZ1bGxOYW1lID0gYCR7YWNjb3VudD8uZmlyc3ROYW1lfSAke2FjY291bnQ/Lmxhc3ROYW1lfWA7XHJcbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSBhY2NvdW50Py51c2VybmFtZTtcclxuICAgICAgICBjb25zdCBsaWtlRGF0YSA9IHJlYWN0aW9ucz8gcmVhY3Rpb25zPy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlYWN0aW9uID09ICdMSUtFJyk6W107XHJcbiAgICAgICAgY29uc3QgaGVhcnREYXRhID0gIHJlYWN0aW9ucz8gcmVhY3Rpb25zPy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlYWN0aW9uID09ICdIRUFSVCcpOltdO1xyXG4gICAgICAgIGNvbnN0IHdvd0RhdGEgPSByZWFjdGlvbnMgPyByZWFjdGlvbnM/LmZpbHRlcihpdGVtID0+IGl0ZW0ucmVhY3Rpb24gPT0gJ1dPVycpOltdO1xyXG4gICAgICAgIGNvbnN0IGhhaGFEYXRhID0gcmVhY3Rpb25zID8gcmVhY3Rpb25zPy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlYWN0aW9uID09ICdIQUhBJyk6W107XHJcbiAgICAgICAgY29uc3Qgc2FkRGF0YSA9IHJlYWN0aW9ucyA/IHJlYWN0aW9ucz8uZmlsdGVyKGl0ZW0gPT4gaXRlbS5yZWFjdGlvbiA9PSAnU0FEJyk6W107XHJcbiAgICAgIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3R9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICB7IWRpc2FibGVEZWxldGU/PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICd3aW5kb3ctY2xvc2UnXX0gc3R5bGU9e3tcclxuICAgICAgICAgICAgICBmbG9hdDogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogMjUsXHJcbiAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDEwLFxyXG4gICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUFjdGlvbihpdGVtLmlkLCB0eXBlKX1cclxuICAgICAgICAgICAgLz46bnVsbH1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0X2hlYWRlcn0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9PlxyXG4gICAgICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgICB0ZXh0PXtmdWxsTmFtZX1cclxuICAgICAgICAgICAgICAgICAgdXJsPXtwcm9maWxlVXJsfVxyXG4gICAgICAgICAgICAgICAgICBzaXplPXs2MH1cclxuICAgICAgICAgICAgICAgICAgYm9yZGVyU2l6ZT17M31cclxuICAgICAgICAgICAgICAgICAgdXNlcm5hbWU9e3VzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyX2luZm99PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudXNlcl9uYW1lfT57ZnVsbE5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZX0+XHJcbiAgICAgICAgICAgICAge21vbWVudChjcmVhdGVkQXQpLmZvcm1hdCgnTU1NIERELCBZWVlZIC0gSEg6bW0gQScpfVxyXG4gICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICAgICAgPFRyaW1UZXh0IGxpbWl0PXsxMTB9PlxyXG4gICAgICAgICAgICAgICAgeyB0eXBlIT09J1NoYXJlJz90ZXh0OnNoYXJlZC50ZXh0IH1cclxuICAgICAgICAgICAgICA8L1RyaW1UZXh0PlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7dGV4dF9saW5rcyAmJiB0ZXh0X2xpbmtzLm1hcCgoaXRlbSwgaSkgPT4gXHJcbiAgICAgICAgICAgICAgPExpbmtQcmV2aWV3IGRhdGE9e2l0ZW19IGtleT17aXRlbS5pZCArICcgJyArIGl9Lz4gIFxyXG4gICAgICAgICAgICApIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHt2aWRlb3MgJiYgdmlkZW9zLmxlbmd0aCA+IDAgJiYgdmlkZW9zLm1hcCgodmlkZW8sIGkpID0+IHtcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGxldCB2aWRlb0pzT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc291cmNlczogW3tcclxuICAgICAgICAgICAgICAgICAgc3JjOiBgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHt2aWRlby5zcmN9YFxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmlkZW9zfSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICB7IXZpZGVvLnByb2Nlc3Npbmc/PD48UGxheWVyXHJcbiAgICAgICAgICAgICAgICAgICAgcGxheXNJbmxpbmVcclxuICAgICAgICAgICAgICAgICAgICBhdXRvcGxheVxyXG4gICAgICAgICAgICAgICAgICAgIG11dGVkXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zdGVyPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHt2aWRlby50aHVtYm5haWwuc3JjfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtwbGF5ZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYodmlkZW9SZWYgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW9SZWZbaW5kZXhdID0gcGxheWVyOyBcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke3ZpZGVvLnNyY31gfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L1BsYXllcj4gXHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdmlkZW9SZWZbaW5kZXhdLnBsYXkoKX0gcmVmPXtlbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlbCkgcmV0dXJuOyBcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYodmlkZW9SZWYgJiYgdmlkZW9SZWZbaW5kZXhdICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3NpdGlvblkgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihwb3NpdGlvblkgPiAod2luZG93LmlubmVySGVpZ2h0LzIpICYmIHBvc2l0aW9uWSA8IHdpbmRvdy5pbm5lckhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvUmVmW2luZGV4XS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW9SZWZbaW5kZXhdLnBhdXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHBhcmVudERpdiAhPT0gbnVsbCAmJiBwYXJlbnREaXY/LmN1cnJlbnQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHBhcmVudERpdj8uY3VycmVudD8uYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih2aWRlb1JlZiAmJiB2aWRlb1JlZltpbmRleF0gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zaXRpb25ZID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZihwb3NpdGlvblkgPiAod2luZG93LmlubmVySGVpZ2h0LzIpICYmIHBvc2l0aW9uWSA8IHdpbmRvdy5pbm5lckhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW9SZWZbaW5kZXhdLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW9SZWZbaW5kZXhdLnBhdXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHZpc2liaWxpdHk6ICdoaWRkZW4nIH19XHJcbiAgICAgICAgICAgICAgICAgID5CdXR0b24gRm9yIHBvc2l0aW9uIG9mIFZpZGVvPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvPjo8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPllvdXIgcG9zdGluZyB2aWRlbyBpcyBvbiBwcm9jZXNzaW5nLi4uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQcm9ncmVzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlQ29sb3I9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzAlJzogJyMxMDhlZTknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnMTAwJSc6ICcjODdkMDY4JyxcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBwZXJjZW50PXs1MH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICApfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHtpbWFnZXMgJiYgaW1hZ2VzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0X2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmltYWdlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgW3N0eWxlcy5ncmlkXzJdOiBpbWFnZXMubGVuZ3RoID09IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgW3N0eWxlcy5ncmlkXzNdOiBpbWFnZXMubGVuZ3RoID09IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgW3N0eWxlcy5ncmlkXzRdOiBpbWFnZXMubGVuZ3RoID09IDQsXHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7aW1hZ2VzLmxlbmd0aCA9PSAxICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX2l0ZW19IG9uQ2xpY2s9e3Nob3dQaG90b01vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMF0uYmxvYl90bj9pbWFnZXNbMF0uYmxvYl90bjppbWFnZXNbMF0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICB7aW1hZ2VzLmxlbmd0aCA9PSAyICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmltYWdlX2l0ZW0sIHN0eWxlcy5tYWluX3Bob3RvKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c2hvd1Bob3RvTW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMF0uYmxvYl90bj9pbWFnZXNbMF0uYmxvYl90bjppbWFnZXNbMF0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfaXRlbX0gb25DbGljaz17c2hvd1Bob3RvTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzFdLmJsb2JfdG4/aW1hZ2VzWzFdLmJsb2JfdG46aW1hZ2VzWzFdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICB7aW1hZ2VzLmxlbmd0aCA9PSAzICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmltYWdlX2l0ZW0sIHN0eWxlcy5tYWluX3Bob3RvKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c2hvd1Bob3RvTW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMF0uYmxvYl90bj9pbWFnZXNbMF0uYmxvYl90bjppbWFnZXNbMF0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfaXRlbX0gb25DbGljaz17c2hvd1Bob3RvTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzFdLmJsb2JfdG4/aW1hZ2VzWzFdLmJsb2JfdG46aW1hZ2VzWzFdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX2l0ZW19IG9uQ2xpY2s9e3Nob3dQaG90b01vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1syXS5ibG9iX3RuP2ltYWdlc1syXS5ibG9iX3RuOmltYWdlc1syXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAge2ltYWdlcy5sZW5ndGggPj0gNCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5pbWFnZV9pdGVtLCBzdHlsZXMubWFpbl9waG90byl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dQaG90b01vZGFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzBdLmJsb2JfdG4/aW1hZ2VzWzBdLmJsb2JfdG46aW1hZ2VzWzBdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX2l0ZW19IG9uQ2xpY2s9e3Nob3dQaG90b01vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1sxXS5ibG9iX3RuP2ltYWdlc1sxXS5ibG9iX3RuOmltYWdlc1sxXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZV9pdGVtfSBvbkNsaWNrPXtzaG93UGhvdG9Nb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMl0uYmxvYl90bj9pbWFnZXNbMl0uYmxvYl90bjppbWFnZXNbMl0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfaXRlbX0gb25DbGljaz17c2hvd1Bob3RvTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNob3dfbW9yZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+KzQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzNdLmJsb2JfdG4/aW1hZ2VzWzNdLmJsb2JfdG46aW1hZ2VzWzNdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogNTAgfX0gLz5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHt0eXBlID09IFwiUGhvdG9cIj8gYmxvYl90biAmJiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RfY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5pbWFnZSl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfaXRlbX0gb25DbGljaz17c2hvd1Bob3RvTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7YmxvYl90bn1gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+OlxyXG4gICAgICAgICAgICBibG9iX3RuICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmlkZW9zfSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICA8UGxheWVyXHJcbiAgICAgICAgICAgICAgICBwbGF5c0lubGluZVxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlcclxuICAgICAgICAgICAgICAgIG11dGVkXHJcbiAgICAgICAgICAgICAgICBwb3N0ZXI9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke3RodW1ibmFpbC5zcmN9YH1cclxuICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7YmxvYl90bn1gfVxyXG4gICAgICAgICAgICAgICAgcmVmPXtwbGF5ZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAvLyB2aWRlb1JlZiA9IHBsYXllcjtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlYWN0aW9uc19zaGFyZXNfc3RhdHVzfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlYWN0aW9uc19zdGF0dXN9PlxyXG4gICAgICAgICAgICAgICAgeyBsaWtlRGF0YS5sZW5ndGggPiAwICYmIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPXtnZXRMaWtlQWN0aW9uVXNlckluZm8obGlrZURhdGEpfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ3RodW1icy11cCddfSBzaXplPVwiMXhcIiAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcid9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2xpa2VEYXRhLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD48Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHsgaGFoYURhdGEubGVuZ3RoID4gMCAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKGhhaGFEYXRhKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdncmluJ119IHNpemU9XCIxeFwiICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJ319Lz4gXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2hhaGFEYXRhLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7IGhlYXJ0RGF0YS5sZW5ndGggPiAwICYmIDw+IFxyXG4gICAgICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKGhlYXJ0RGF0YSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAnaGVhcnQnXX0gc2l6ZT1cIjF4XCIgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInfX0vPiBcclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aGVhcnREYXRhLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7IHdvd0RhdGEubGVuZ3RoID4gMCAmJiA8PiBcclxuICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9e2dldExpa2VBY3Rpb25Vc2VySW5mbyh3b3dEYXRhKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdsYXVnaCddfSBzaXplPVwiMXhcIiAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcid9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3dvd0RhdGEubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICA8Lz4gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7IHNhZERhdGEubGVuZ3RoID4gMCAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKHNhZERhdGEpfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ2Zyb3duJ119IHNpemU9XCIxeFwiICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJ319Lz4gXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3NhZERhdGEubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxBY3Rpb25zXHJcbiAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgdHlwZT17aXRlbS50eXBlfVxyXG4gICAgICAgICAgICAgIHBvc3RSYXRlPXtpdGVtLnJhdGluZ31cclxuICAgICAgICAgICAgICBjb21tZW50cz17Y29tbWVudHN9XHJcbiAgICAgICAgICAgICAgb25SYXRlUG9zdD17b25SYXRlUG9zdH1cclxuICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XHJcbiAgICAgICAgICAgICAgbGlrZUFjdGlvbj17KHRlcm0pID0+IGxpa2VBY3Rpb24odHlwZSwgaXRlbS5pZCwgdGVybSl9XHJcbiAgICAgICAgICAgICAgc2hhcmVBY3Rpb249eygpID0+IHNoYXJlQWN0aW9uKHR5cGUgIT09ICdTaGFyZSc/dHlwZTpzaGFyZWQudHlwZSwgdHlwZSAhPT0gJ1NoYXJlJz9pdGVtLmlkOnNoYXJlZC5pZCl9XHJcbiAgICAgICAgICAgICAgYWN0aW9ucz17XHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7IGhhbmRsZVNob3dDb21tZW50TW9kYWwoaXRlbS5pZCkgfSBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxDb21tZW50c1xyXG4gICAgICAgICAgICAgIGlkPXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgIHR5cGU9e2l0ZW0udHlwZX1cclxuICAgICAgICAgICAgICBkYXRhPXtjb21tZW50c31cclxuICAgICAgICAgICAgICBvblVwZGF0ZVRpbWVsaW5lPXtvblVwZGF0ZVRpbWVsaW5lfVxyXG4gICAgICAgICAgICAgIGFjdGl2ZVBvc3RJZD17YWN0aXZlUG9zdElkfVxyXG4gICAgICAgICAgICAgIG1vZGFsTW9kZT17bW9kYWxNb2RlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG5cclxuICAgICAgPENvbW1lbnRzTW9kYWxcclxuICAgICAgICBhY3RpdmVQb3N0SWQ9e2FjdGl2ZVBvc3RJZH1cclxuICAgICAgICBwb3N0RGF0YT17ZGF0YX1cclxuICAgICAgICBvblVwZGF0ZVRpbWVsaW5lPXtvblVwZGF0ZVRpbWVsaW5lfVxyXG4gICAgICAgIHRpdGxlPVwiQ29tbWVudHNcIlxyXG4gICAgICAgIC8vIHNob3dNb2RhbD17b3Blbn1cclxuICAgICAgICAvLyBvbkNsb3NlPXtoaWRlQ29tbWVudE1vZGFsfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gIG1vZGFsQWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKHsgc2hvdyB9LCBkaXNwYXRjaClcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoVGltZWxpbmVQb3N0cyk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=