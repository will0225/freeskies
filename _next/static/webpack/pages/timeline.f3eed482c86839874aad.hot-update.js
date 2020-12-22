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
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_27__);






var _jsxFileName = "D:\\Freeskies-development-\\components\\timeline\\TimelinePosts.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;


























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
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee(type, id) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log('postId', postId, type); // try {
              //   const request = await  API({
              //     method: 'post',
              //     url: '/posts/get-comments',
              //     data: {
              //         "username": username
              //     },
              //     headers: { 'x-token': auth.token },
              //   });
              //   const { data, status } = request;
              //   if (status === 200) {
              //     dispatch(setUserProfileData(data));
              //   } else if (status === 403) {
              //     authServices.refreshToken();
              //   } else {
              //     message.error(data?.message || 'Something wrong');
              //   }
              // } catch (error) {
              //   console.log(error);
              // }

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getComments(_x, _x2) {
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

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null),
      activePostId = _useState3[0],
      setActivePostId = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null),
      activeType = _useState4[0],
      setActiveType = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      modalMode = _useState5[0],
      setModalMode = _useState5[1];

  console.log('checking modalMode', modalMode);
  var videoRef = [];

  var _useModal = Object(react_modal_hook__WEBPACK_IMPORTED_MODULE_14__["useModal"])(function (_ref3) {
    var open = _ref3["in"];
    return __jsx(containers_Photos_storage_PhotoContext__WEBPACK_IMPORTED_MODULE_23__["PhotosProvider"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
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
        lineNumber: 115,
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

  return __jsx("div", {
    className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.activity_content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
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
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.post,
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 11
      }
    }, !disableDelete ? __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
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
        lineNumber: 165,
        columnNumber: 29
      }
    }) : null, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.post_header,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.avatar,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
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
        lineNumber: 175,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.user_info,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 15
      }
    }, __jsx("p", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.user_name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 17
      }
    }, fullName))), __jsx("p", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.date,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 13
      }
    }, moment__WEBPACK_IMPORTED_MODULE_11___default()(createdAt).format('MMM DD, YYYY - HH:mm A')), __jsx("p", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.description,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 13
      }
    }, __jsx(_common_TrimText__WEBPACK_IMPORTED_MODULE_13__["default"], {
      limit: 110,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 15
      }
    }, type !== 'Share' ? text : shared.text)), text_links && text_links.map(function (item, i) {
      return __jsx(components_common_LinkPreview__WEBPACK_IMPORTED_MODULE_24__["LinkPreview"], {
        data: item,
        key: item.id + ' ' + i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199,
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
          lineNumber: 220,
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
          lineNumber: 224,
          columnNumber: 19
        }
      }, __jsx("source", {
        src: "https://www.freeskies.com/static/".concat(video.src),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235,
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
          lineNumber: 237,
          columnNumber: 19
        }
      }, "Button For position of Video")) : __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264,
          columnNumber: 23
        }
      }, __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265,
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
          lineNumber: 266,
          columnNumber: 21
        }
      })));
    }), images && images.length > 0 ? __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.post_content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image, (_classnames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.grid_2, images.length == 2), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.grid_3, images.length == 3), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.grid_4, images.length == 4), _classnames)),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 17
      }
    }, images.length == 1 && __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].blob_tn ? images[0].blob_tn : images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292,
        columnNumber: 23
      }
    })), images.length == 2 && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image_item, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.main_photo),
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].blob_tn ? images[0].blob_tn : images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[1].blob_tn ? images[1].blob_tn : images[1].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 305,
        columnNumber: 25
      }
    }))), images.length == 3 && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image_item, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.main_photo),
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 312,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].blob_tn ? images[0].blob_tn : images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[1].blob_tn ? images[1].blob_tn : images[1].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 319,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[2].blob_tn ? images[2].blob_tn : images[2].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322,
        columnNumber: 25
      }
    }))), images.length >= 4 && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image_item, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.main_photo),
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 329,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].blob_tn ? images[0].blob_tn : images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 333,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 335,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[1].blob_tn ? images[1].blob_tn : images[1].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 336,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 338,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[2].blob_tn ? images[2].blob_tn : images[2].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 339,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 341,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.show_more,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 342,
        columnNumber: 25
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 343,
        columnNumber: 27
      }
    }, "+4")), __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[3].blob_tn ? images[3].blob_tn : images[3].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 345,
        columnNumber: 25
      }
    }))))) : __jsx("div", {
      style: {
        height: 50
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 352,
        columnNumber: 15
      }
    }), type == "Photo" ? blob_tn && __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.post_content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 355,
        columnNumber: 42
      }
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 356,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 359,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(blob_tn),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 360,
        columnNumber: 19
      }
    })))) : blob_tn && __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.videos,
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 364,
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
        lineNumber: 365,
        columnNumber: 15
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.reactions_shares_status,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 378,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.reactions_status,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 379,
        columnNumber: 15
      }
    }, likeData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(likeData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 381,
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
    }, likeData.length))), hahaData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(hahaData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 387,
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
        lineNumber: 388,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 389,
        columnNumber: 21
      }
    }, hahaData.length))), heartData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(heartData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 394,
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
        lineNumber: 395,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 396,
        columnNumber: 21
      }
    }, heartData.length))), wowData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(wowData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 401,
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
        lineNumber: 402,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 403,
        columnNumber: 21
      }
    }, wowData.length))), sadData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(sadData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 408,
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
        lineNumber: 409,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 410,
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
        lineNumber: 416,
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
        lineNumber: 429,
        columnNumber: 13
      }
    }));
  }), __jsx(_CommentsModal__WEBPACK_IMPORTED_MODULE_15__["default"], {
    activePostId: activePostId,
    postData: data,
    onUpdateTimeline: onUpdateTimeline,
    title: "Comments",
    show: modalMode,
    onClose: function onClose() {
      console.log('close modal');
    },
    getComments: getComments,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442,
      columnNumber: 7
    }
  }));
}

_s(TimelinePosts, "KihXQvaeLUrKZoOZRGC14zw6qyQ=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aW1lbGluZS9UaW1lbGluZVBvc3RzLmpzIl0sIm5hbWVzIjpbIlRpbWVsaW5lUG9zdHMiLCJkYXRhIiwib25VcGRhdGVUaW1lbGluZSIsIm9uUmF0ZVBvc3QiLCJtb2RhbEFjdGlvbnMiLCJzaGFyZUFjdGlvbiIsImxpa2VBY3Rpb24iLCJkZWxldGVBY3Rpb24iLCJkaXNhYmxlRGVsZXRlIiwicGFyZW50RGl2IiwiYXV0aCIsInVzZVN0YXRlIiwicHJvY2Vzc2luZ1ZpZGVvcyIsInNldFByb2Nlc3NpbmdWaWRlb3MiLCJ2aWRlb0RhdGEiLCJzZXRWaWRlb0RhdGEiLCJpbWFnZXNMaXN0IiwiY29uY2F0IiwiYXBwbHkiLCJtYXAiLCJpdGVtIiwidHlwZSIsImltYWdlcyIsInZpZGVvTGlzdCIsInZpZGVvcyIsImdldENvbW1lbnRzIiwiaWQiLCJjb25zb2xlIiwibG9nIiwicG9zdElkIiwidXNlRWZmZWN0Iiwic29ja2V0IiwiaW8iLCJvbiIsImVtaXQiLCJ0b2tlbiIsImUiLCJ2aWRlb0l0ZW0iLCJwcm9jZXNzaW5nIiwidmlkZW8iLCJtZXNzYWdlIiwic3VjY2VzcyIsImFjdGl2ZVBvc3RJZCIsInNldEFjdGl2ZVBvc3RJZCIsImFjdGl2ZVR5cGUiLCJzZXRBY3RpdmVUeXBlIiwibW9kYWxNb2RlIiwic2V0TW9kYWxNb2RlIiwidmlkZW9SZWYiLCJ1c2VNb2RhbCIsIm9wZW4iLCJoaWRlUGhvdG9Nb2RhbCIsInNob3dQaG90b01vZGFsIiwiaGFuZGxlU2hvd0NvbW1lbnRNb2RhbCIsInNob3ciLCJ0b2dnbGVDb21tZW50U2hvdyIsImluZGV4Iiwic2V0Q29tbWVudFNob3ciLCJjb21tZW50U2hvdyIsImdldExpa2VBY3Rpb25Vc2VySW5mbyIsImZpbmFsRGF0YSIsImFjY291bnQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInN0eWxlcyIsImFjdGl2aXR5X2NvbnRlbnQiLCJjcmVhdGVkQXQiLCJjb21tZW50cyIsInRleHQiLCJzaGFyZWQiLCJjb21tZW50ZWQiLCJibG9iX3RuIiwidGh1bWJuYWlsIiwicmVhY3Rpb25zIiwidGV4dF9saW5rcyIsInB1c2giLCJwcm9maWxlVXJsIiwidW5kZWZpbmVkIiwicHJvZmlsZVBob3RvIiwic3JjIiwiZnVsbE5hbWUiLCJ1c2VybmFtZSIsImxpa2VEYXRhIiwiZmlsdGVyIiwicmVhY3Rpb24iLCJoZWFydERhdGEiLCJ3b3dEYXRhIiwiaGFoYURhdGEiLCJzYWREYXRhIiwicG9zdCIsImZvbnRTaXplIiwibWFyZ2luUmlnaHQiLCJjdXJzb3IiLCJwb3N0X2hlYWRlciIsImF2YXRhciIsInVzZXJfaW5mbyIsInVzZXJfbmFtZSIsImRhdGUiLCJtb21lbnQiLCJmb3JtYXQiLCJkZXNjcmlwdGlvbiIsImkiLCJsZW5ndGgiLCJ2aWRlb0pzT3B0aW9ucyIsImF1dG9wbGF5IiwiY29udHJvbHMiLCJzb3VyY2VzIiwid2l0aENyZWRlbnRpYWxzIiwiaHRtbDUiLCJobHMiLCJvdmVycmlkZU5hdGl2ZSIsInBsYXllciIsInBsYXkiLCJlbCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJwb3NpdGlvblkiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ5IiwiaW5uZXJIZWlnaHQiLCJwYXVzZSIsImN1cnJlbnQiLCJ2aXNpYmlsaXR5IiwicGVyY2VudCIsInBvc3RfY29udGVudCIsImNsYXNzbmFtZXMiLCJpbWFnZSIsImdyaWRfMiIsImdyaWRfMyIsImdyaWRfNCIsImltYWdlX2l0ZW0iLCJtYWluX3Bob3RvIiwic2hvd19tb3JlIiwiaGVpZ2h0IiwicmVhY3Rpb25zX3NoYXJlc19zdGF0dXMiLCJyZWFjdGlvbnNfc3RhdHVzIiwicmF0aW5nIiwidGVybSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYmluZEFjdGlvbkNyZWF0b3JzIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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O0FBQTRDLE9BVnhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUE1UEYsRUF5UUUsTUFBQyxrREFBRDtBQUNFLFFBQUUsRUFBRUQsSUFBSSxDQUFDTSxFQURYO0FBRUUsVUFBSSxFQUFFTixJQUFJLENBQUNDLElBRmI7QUFHRSxVQUFJLEVBQUU4QyxRQUhSO0FBSUUsc0JBQWdCLEVBQUVqRSxnQkFKcEI7QUFLRSxrQkFBWSxFQUFFd0MsWUFMaEI7QUFNRSxlQUFTLEVBQUVJLFNBTmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQXpRRixDQURGO0FBcVJELEdBalNBLENBREgsRUFvU0UsTUFBQyx1REFBRDtBQUNFLGdCQUFZLEVBQUVKLFlBRGhCO0FBRUUsWUFBUSxFQUFFekMsSUFGWjtBQUdFLG9CQUFnQixFQUFFQyxnQkFIcEI7QUFJRSxTQUFLLEVBQUMsVUFKUjtBQUtFLFFBQUksRUFBRTRDLFNBTFI7QUFNRSxXQUFPLEVBQUUsbUJBQU07QUFBQ25CLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVo7QUFBMkIsS0FON0M7QUFPRSxlQUFXLEVBQUVILFdBUGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXBTRixDQURGO0FBaVREOztHQTNhUXpCLGE7VUFzRmtDaUQsMEQ7OztLQXRGbENqRCxhOztBQTZhVCxJQUFNMEksa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFEO0FBQUEsU0FBZTtBQUN4Q3ZJLGdCQUFZLEVBQUV3SSxpRUFBa0IsQ0FBQztBQUFFdEYsVUFBSSxFQUFKQSxpREFBSUE7QUFBTixLQUFELEVBQVdxRixRQUFYO0FBRFEsR0FBZjtBQUFBLENBQTNCOztBQUllRSwySEFBTyxDQUFDLElBQUQsRUFBT0gsa0JBQVAsQ0FBUCxDQUFrQzFJLGFBQWxDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGltZWxpbmUuZjNlZWQ0ODJjODY4Mzk4NzRhYWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvdGltZWxpbmUtcG9zdC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IFBvcG92ZXIsIFRvb2x0aXAgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBDb21tZW50cyBmcm9tICcuL0NvbW1lbnRzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBBY3Rpb25zIGZyb20gJy4vQWN0aW9ucyc7XHJcbmltcG9ydCBUcmltVGV4dCBmcm9tICcuLi9jb21tb24vVHJpbVRleHQnO1xyXG5pbXBvcnQgeyB1c2VNb2RhbCB9IGZyb20gJ3JlYWN0LW1vZGFsLWhvb2snO1xyXG5pbXBvcnQgQ29tbWVudHNNb2RhbCBmcm9tICcuL0NvbW1lbnRzTW9kYWwnO1xyXG5pbXBvcnQgUGhvdG9zTW9kYWwgZnJvbSAnLi4vcHJvZmlsZS9QaG90b3NNb2RhbCc7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnLi4vY29tbW9uL0F2YXRhcic7XHJcbmltcG9ydCB7IHNob3cgfSBmcm9tICdyZWR1eC1tb2RhbCc7XHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IEFQSSBmcm9tICdjb25maWdzL0FQSSc7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJ3ZpZGVvLXJlYWN0JztcclxuaW1wb3J0IHsgUGhvdG9zUHJvdmlkZXIgfSAgZnJvbSAnY29udGFpbmVycy9QaG90b3Mvc3RvcmFnZS9QaG90b0NvbnRleHQnO1xyXG5pbXBvcnQgeyBMaW5rUHJldmlldyB9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL0xpbmtQcmV2aWV3JztcclxuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xyXG5pbXBvcnQgVmlkZW9QbGF5ZXIgZnJvbSAnY29tcG9uZW50cy9jb21tb24vVmlkZW9QbGF5ZXInO1xyXG5pbXBvcnQgeyBQcm9ncmVzcyB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBCdXR0b24sIFVwbG9hZCwgbWVzc2FnZSwgSW5wdXQsIFRhYnMsIFJhdGUgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IFJlYWN0TW9kYWwgZnJvbSAncmVhY3QtbW9kYWwnO1xyXG5cclxuZnVuY3Rpb24gVGltZWxpbmVQb3N0cyh7IGRhdGEsIG9uVXBkYXRlVGltZWxpbmUsIG9uUmF0ZVBvc3QsIG1vZGFsQWN0aW9ucywgc2hhcmVBY3Rpb24sIGxpa2VBY3Rpb24sIGRlbGV0ZUFjdGlvbiwgZGlzYWJsZURlbGV0ZSwgcGFyZW50RGl2ID0gbnVsbCwgYXV0aCB9KSB7XHJcbiAgXHJcbiAgY29uc3QgW3Byb2Nlc3NpbmdWaWRlb3MsIHNldFByb2Nlc3NpbmdWaWRlb3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFt2aWRlb0RhdGEsIHNldFZpZGVvRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBpbWFnZXNMaXN0ID0gW10uY29uY2F0LmFwcGx5KFtdLCBkYXRhLm1hcChpdGVtID0+IFxyXG4gICAgeyBcclxuICAgICAgICBpZihpdGVtLnR5cGUgPT09ICdQaG90bycpIHtcclxuICAgICAgICAgIHJldHVybiAgaXRlbTtcclxuICAgICAgICB9IGVsc2UgaWYoaXRlbS50eXBlID09PSAnVmlkZW9DbGlwJykge1xyXG4gICAgICAgICAgcmV0dXJuICBbXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuICBpdGVtLmltYWdlcyBcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG4gICkpXHJcblxyXG4gIGNvbnN0IHZpZGVvTGlzdCA9IFtdLmNvbmNhdC5hcHBseShbXSwgZGF0YS5tYXAoaXRlbSA9PiB7XHJcbiAgICBpZihpdGVtLnR5cGUgPT09ICdWaWRlb0NsaXAnKSB7XHJcbiAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHR5cGVvZiBpdGVtLnZpZGVvcyAhPT0gJ3VuZGVmaW5lZCc/aXRlbS52aWRlb3M6W107XHJcbiAgICB9XHJcbiAgfSkpXHJcbiAgXHJcblxyXG4gIGNvbnN0IGdldENvbW1lbnRzID0gYXN5bmMgKHR5cGUsIGlkKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygncG9zdElkJywgcG9zdElkLCB0eXBlKTtcclxuICAgIC8vIHRyeSB7XHJcbiAgICAvLyAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCAgQVBJKHtcclxuICAgIC8vICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgIC8vICAgICB1cmw6ICcvcG9zdHMvZ2V0LWNvbW1lbnRzJyxcclxuICAgIC8vICAgICBkYXRhOiB7XHJcbiAgICAvLyAgICAgICAgIFwidXNlcm5hbWVcIjogdXNlcm5hbWVcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAvLyAgIH0pO1xyXG4gICAgLy8gICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuICAgIC8vICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAvLyAgICAgZGlzcGF0Y2goc2V0VXNlclByb2ZpbGVEYXRhKGRhdGEpKTtcclxuICAgIC8vICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IDQwMykge1xyXG4gICAgLy8gICAgIGF1dGhTZXJ2aWNlcy5yZWZyZXNoVG9rZW4oKTtcclxuICAgIC8vICAgfSBlbHNlIHtcclxuICAgIC8vICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgLy8gICB9XHJcblxyXG4gICAgLy8gfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIC8vICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgLy8gfVxyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc29ja2V0ID0gaW8oJ2h0dHBzOi8vd3d3LmZyZWVza2llcy5jb20nKTtcclxuICAgIHNvY2tldC5vbignY29ubmVjdCcsICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ2Nvbm5lY3RlZCEnKVxyXG4gICAgICBzb2NrZXQuZW1pdCgnQVVUSCcsIHsgJ3Rva2VuJzogYXV0aC50b2tlbiB9KVxyXG4gICAgICBjb25zb2xlLmxvZygnQVVUSCBUT0tFTiBTRU5UJylcclxuICAgIH0pXHJcblxyXG4gICAgc29ja2V0Lm9uKCdBVVRIJywgZSA9PiB7Y29uc29sZS5sb2coZSk7XHJcbiAgICAgIGlmKGUgIT09IDIwMCkge1xyXG5cclxuICAgICAgfSBlbHNlICB7XHJcbiAgICAgICAgdmlkZW9MaXN0Lm1hcCh2aWRlb0l0ZW0gPT4ge1xyXG4gICAgICAgICAgaWYodmlkZW9JdGVtLnByb2Nlc3NpbmcpIHtcclxuICAgICAgICAgICAgc29ja2V0LmVtaXQoJ1ZJREVPX1JFQURZJywgdmlkZW9JdGVtLmlkKTtcclxuICAgICAgICAgICAgc2V0UHJvY2Vzc2luZ1ZpZGVvcyhbLi4ucHJvY2Vzc2luZ1ZpZGVvcywgdmlkZW9JdGVtLmlkXSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3N1YnNjcmliZWQgdmlkZW8gaWQnICsgdmlkZW9JdGVtLmlkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHNvY2tldC5vbignVklERU9fUkVBRFknLCAodmlkZW8pID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCd2aWRlbyByZWFkeScsIHZpZGVvKVxyXG4gICAgICAgICAgc2V0VmlkZW9EYXRhKHZpZGVvKTtcclxuICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcygnWW91ciB2aWRlbyB3YXMgcHJvY2Vzc2VkIHN1Y2Nlc3NmdWxseSEnKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG5cclxuICB9LCBbZGF0YV0pXHJcblxyXG4gIFxyXG5cclxuICBjb25zdCBbYWN0aXZlUG9zdElkLCBzZXRBY3RpdmVQb3N0SWRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2FjdGl2ZVR5cGUsIHNldEFjdGl2ZVR5cGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW21vZGFsTW9kZSwgc2V0TW9kYWxNb2RlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zb2xlLmxvZygnY2hlY2tpbmcgbW9kYWxNb2RlJywgbW9kYWxNb2RlKTtcclxuICBsZXQgdmlkZW9SZWYgPSBbXTtcclxuICBjb25zdCBbc2hvd1Bob3RvTW9kYWwsIGhpZGVQaG90b01vZGFsXSA9IHVzZU1vZGFsKCh7IGluOiBvcGVuIH0pID0+IChcclxuICAgIDxQaG90b3NQcm92aWRlcj5cclxuICAgICAgPFBob3Rvc01vZGFsXHJcbiAgICAgICAgdGl0bGU9XCJQaG90byBkZXRhaWxcIlxyXG4gICAgICAgIHNob3dNb2RhbD17b3Blbn1cclxuICAgICAgICBvbkNsb3NlPXtoaWRlUGhvdG9Nb2RhbH1cclxuICAgICAgICBvblJhdGVQb3N0PXtvblJhdGVQb3N0fVxyXG4gICAgICAgIGRhdGE9e2ltYWdlc0xpc3R9XHJcbiAgICAgICAgbGlrZUFjdGlvbj17bGlrZUFjdGlvbn1cclxuICAgICAgICBzaGFyZUFjdGlvbj17c2hhcmVBY3Rpb259XHJcbiAgICAgICAgb25VcGRhdGVUaW1lbGluZT17b25VcGRhdGVUaW1lbGluZX1cclxuICAgICAgICBhdXRoPXthdXRofVxyXG4gICAgICAvPlxyXG4gICAgPC9QaG90b3NQcm92aWRlcj5cclxuICApKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2hvd0NvbW1lbnRNb2RhbCA9IChpZCwgdHlwZSkgPT4ge1xyXG4gICAgc2V0QWN0aXZlUG9zdElkKGlkKTtcclxuICAgIHNldEFjdGl2ZVR5cGUodHlwZSk7XHJcbiAgICBzZXRNb2RhbE1vZGUoIW1vZGFsTW9kZSk7XHJcbiAgICBtb2RhbEFjdGlvbnMuc2hvdygnY29tbWVudE1vZGFsJywgeyBpZDogYWN0aXZlUG9zdElkIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZ2dsZUNvbW1lbnRTaG93ID0gKGluZGV4KSA9PlxyXG4gICAgc2V0Q29tbWVudFNob3coY29tbWVudFNob3cgPT09IGluZGV4ID8gbnVsbCA6IGluZGV4KTtcclxuXHJcbiAgY29uc3QgZ2V0TGlrZUFjdGlvblVzZXJJbmZvID0gKGRhdGEpID0+IHtcclxuICAgIHZhciBmaW5hbERhdGEgPSAnJztcclxuICAgIGRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICBmaW5hbERhdGEgPSBmaW5hbERhdGEgKyAnICcgKyBpdGVtLmFjY291bnQuZmlyc3ROYW1lICsgJycgKyBpdGVtLmFjY291bnQubGFzdE5hbWUgO1xyXG4gICAgfSlcclxuICAgIHJldHVybiBmaW5hbERhdGE7XHJcbiAgfVxyXG5cclxuIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpdml0eV9jb250ZW50fSA+XHJcbiAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICB2YXIgeyBhY2NvdW50LCBjcmVhdGVkQXQsIHR5cGUsIGNvbW1lbnRzLCB0ZXh0LCBpbWFnZXMsIHZpZGVvcywgc2hhcmVkLCBjb21tZW50ZWQsIGJsb2JfdG4sIHRodW1ibmFpbCwgcmVhY3Rpb25zLCB0ZXh0X2xpbmtzIH0gPSBpdGVtO1xyXG4gICAgICAgIHZpZGVvUmVmLnB1c2gobnVsbCk7XHJcbiAgICAgICAgY29uc3QgcHJvZmlsZVVybCA9IGFjY291bnQgIT09IG51bGwgJiYgYWNjb3VudCAhPT0gdW5kZWZpbmVkID8gYCR7YWNjb3VudC5wcm9maWxlUGhvdG8/LnNyY31gIDogbnVsbFxyXG4gICAgICAgIGNvbnN0IGZ1bGxOYW1lID0gYCR7YWNjb3VudD8uZmlyc3ROYW1lfSAke2FjY291bnQ/Lmxhc3ROYW1lfWA7XHJcbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSBhY2NvdW50Py51c2VybmFtZTtcclxuICAgICAgICBjb25zdCBsaWtlRGF0YSA9IHJlYWN0aW9ucz8gcmVhY3Rpb25zPy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlYWN0aW9uID09ICdMSUtFJyk6W107XHJcbiAgICAgICAgY29uc3QgaGVhcnREYXRhID0gIHJlYWN0aW9ucz8gcmVhY3Rpb25zPy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlYWN0aW9uID09ICdIRUFSVCcpOltdO1xyXG4gICAgICAgIGNvbnN0IHdvd0RhdGEgPSByZWFjdGlvbnMgPyByZWFjdGlvbnM/LmZpbHRlcihpdGVtID0+IGl0ZW0ucmVhY3Rpb24gPT0gJ1dPVycpOltdO1xyXG4gICAgICAgIGNvbnN0IGhhaGFEYXRhID0gcmVhY3Rpb25zID8gcmVhY3Rpb25zPy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlYWN0aW9uID09ICdIQUhBJyk6W107XHJcbiAgICAgICAgY29uc3Qgc2FkRGF0YSA9IHJlYWN0aW9ucyA/IHJlYWN0aW9ucz8uZmlsdGVyKGl0ZW0gPT4gaXRlbS5yZWFjdGlvbiA9PSAnU0FEJyk6W107XHJcbiAgICAgIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3R9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICB7IWRpc2FibGVEZWxldGU/PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICd3aW5kb3ctY2xvc2UnXX0gc3R5bGU9e3tcclxuICAgICAgICAgICAgICBmbG9hdDogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogMjUsXHJcbiAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDEwLFxyXG4gICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUFjdGlvbihpdGVtLmlkLCB0eXBlKX1cclxuICAgICAgICAgICAgLz46bnVsbH1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0X2hlYWRlcn0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9PlxyXG4gICAgICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgICB0ZXh0PXtmdWxsTmFtZX1cclxuICAgICAgICAgICAgICAgICAgdXJsPXtwcm9maWxlVXJsfVxyXG4gICAgICAgICAgICAgICAgICBzaXplPXs2MH1cclxuICAgICAgICAgICAgICAgICAgYm9yZGVyU2l6ZT17M31cclxuICAgICAgICAgICAgICAgICAgdXNlcm5hbWU9e3VzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyX2luZm99PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudXNlcl9uYW1lfT57ZnVsbE5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZX0+XHJcbiAgICAgICAgICAgICAge21vbWVudChjcmVhdGVkQXQpLmZvcm1hdCgnTU1NIERELCBZWVlZIC0gSEg6bW0gQScpfVxyXG4gICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICAgICAgPFRyaW1UZXh0IGxpbWl0PXsxMTB9PlxyXG4gICAgICAgICAgICAgICAgeyB0eXBlIT09J1NoYXJlJz90ZXh0OnNoYXJlZC50ZXh0IH1cclxuICAgICAgICAgICAgICA8L1RyaW1UZXh0PlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7dGV4dF9saW5rcyAmJiB0ZXh0X2xpbmtzLm1hcCgoaXRlbSwgaSkgPT4gXHJcbiAgICAgICAgICAgICAgPExpbmtQcmV2aWV3IGRhdGE9e2l0ZW19IGtleT17aXRlbS5pZCArICcgJyArIGl9Lz4gIFxyXG4gICAgICAgICAgICApIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7dmlkZW9zICYmIHZpZGVvcy5sZW5ndGggPiAwICYmIHZpZGVvcy5tYXAoKHZpZGVvLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBsZXQgdmlkZW9Kc09wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNvdXJjZXM6IFt7XHJcbiAgICAgICAgICAgICAgICAgIHNyYzogYGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7dmlkZW8uc3JjfWAsXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYXBwbGljYXRpb24veC1tcGVnVVJMXCIsXHJcbiAgICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgaHRtbDU6IHtcclxuICAgICAgICAgICAgICAgICAgICBobHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIG92ZXJyaWRlTmF0aXZlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aWRlb3N9IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgIHshdmlkZW8ucHJvY2Vzc2luZz88PlxyXG4gICAgICAgICAgICAgICAgICB7LyogPFZpZGVvUGxheWVyIHsgLi4udmlkZW9Kc09wdGlvbnMgfSAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgey8qIDxWaWRlb1BsYXllciB3aWR0aD1cIjI1MFwiIGhlaWdodD1cIjYwXCIgc291cmNlPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHt2aWRlby5zcmN9YH0gLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDxQbGF5ZXJcclxuICAgICAgICAgICAgICAgICAgICBwbGF5c0lubGluZVxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5XHJcbiAgICAgICAgICAgICAgICAgICAgbXV0ZWRcclxuICAgICAgICAgICAgICAgICAgICBwb3N0ZXI9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke3ZpZGVvLnRodW1ibmFpbC5zcmN9YH1cclxuICAgICAgICAgICAgICAgICAgICByZWY9e3BsYXllciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZih2aWRlb1JlZiAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWRlb1JlZltpbmRleF0gPSBwbGF5ZXI7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c291cmNlIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7dmlkZW8uc3JjfWB9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvUGxheWVyPiBcclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB2aWRlb1JlZltpbmRleF0ucGxheSgpfSByZWY9e2VsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWVsKSByZXR1cm47IFxyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZih2aWRlb1JlZiAmJiB2aWRlb1JlZltpbmRleF0gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvc2l0aW9uWSA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHBvc2l0aW9uWSA+ICh3aW5kb3cuaW5uZXJIZWlnaHQvMikgJiYgcG9zaXRpb25ZIDwgd2luZG93LmlubmVySGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW9SZWZbaW5kZXhdLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2aWRlb1JlZltpbmRleF0ucGF1c2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgaWYocGFyZW50RGl2ICE9PSBudWxsICYmIHBhcmVudERpdj8uY3VycmVudCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcGFyZW50RGl2Py5jdXJyZW50Py5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHZpZGVvUmVmICYmIHZpZGVvUmVmW2luZGV4XSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3NpdGlvblkgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHBvc2l0aW9uWSA+ICh3aW5kb3cuaW5uZXJIZWlnaHQvMikgJiYgcG9zaXRpb25ZIDwgd2luZG93LmlubmVySGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWRlb1JlZltpbmRleF0ucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWRlb1JlZltpbmRleF0ucGF1c2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdmlzaWJpbGl0eTogJ2hpZGRlbicgfX1cclxuICAgICAgICAgICAgICAgICAgPkJ1dHRvbiBGb3IgcG9zaXRpb24gb2YgVmlkZW88L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC8+OjxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+WW91ciBwb3N0aW5nIHZpZGVvIGlzIG9uIHByb2Nlc3NpbmcuLi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPFByb2dyZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VDb2xvcj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnMCUnOiAnIzEwOGVlOScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICcxMDAlJzogJyM4N2QwNjgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHBlcmNlbnQ9ezk5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgZm9ybWF0PXtwZXJjZW50ID0+IGBgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICl9XHJcblxyXG5cclxuICAgICAgICAgICAge2ltYWdlcyAmJiBpbWFnZXMubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RfY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuaW1hZ2UsIHtcclxuICAgICAgICAgICAgICAgICAgICBbc3R5bGVzLmdyaWRfMl06IGltYWdlcy5sZW5ndGggPT0gMixcclxuICAgICAgICAgICAgICAgICAgICBbc3R5bGVzLmdyaWRfM106IGltYWdlcy5sZW5ndGggPT0gMyxcclxuICAgICAgICAgICAgICAgICAgICBbc3R5bGVzLmdyaWRfNF06IGltYWdlcy5sZW5ndGggPT0gNCxcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtpbWFnZXMubGVuZ3RoID09IDEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfaXRlbX0gb25DbGljaz17c2hvd1Bob3RvTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1swXS5ibG9iX3RuP2ltYWdlc1swXS5ibG9iX3RuOmltYWdlc1swXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtpbWFnZXMubGVuZ3RoID09IDIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuaW1hZ2VfaXRlbSwgc3R5bGVzLm1haW5fcGhvdG8pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzaG93UGhvdG9Nb2RhbH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1swXS5ibG9iX3RuP2ltYWdlc1swXS5ibG9iX3RuOmltYWdlc1swXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZV9pdGVtfSBvbkNsaWNrPXtzaG93UGhvdG9Nb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMV0uYmxvYl90bj9pbWFnZXNbMV0uYmxvYl90bjppbWFnZXNbMV0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtpbWFnZXMubGVuZ3RoID09IDMgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuaW1hZ2VfaXRlbSwgc3R5bGVzLm1haW5fcGhvdG8pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzaG93UGhvdG9Nb2RhbH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1swXS5ibG9iX3RuP2ltYWdlc1swXS5ibG9iX3RuOmltYWdlc1swXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZV9pdGVtfSBvbkNsaWNrPXtzaG93UGhvdG9Nb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMV0uYmxvYl90bj9pbWFnZXNbMV0uYmxvYl90bjppbWFnZXNbMV0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfaXRlbX0gb25DbGljaz17c2hvd1Bob3RvTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzJdLmJsb2JfdG4/aW1hZ2VzWzJdLmJsb2JfdG46aW1hZ2VzWzJdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICB7aW1hZ2VzLmxlbmd0aCA+PSA0ICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmltYWdlX2l0ZW0sIHN0eWxlcy5tYWluX3Bob3RvKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c2hvd1Bob3RvTW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMF0uYmxvYl90bj9pbWFnZXNbMF0uYmxvYl90bjppbWFnZXNbMF0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfaXRlbX0gb25DbGljaz17c2hvd1Bob3RvTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzFdLmJsb2JfdG4/aW1hZ2VzWzFdLmJsb2JfdG46aW1hZ2VzWzFdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX2l0ZW19IG9uQ2xpY2s9e3Nob3dQaG90b01vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1syXS5ibG9iX3RuP2ltYWdlc1syXS5ibG9iX3RuOmltYWdlc1syXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZV9pdGVtfSBvbkNsaWNrPXtzaG93UGhvdG9Nb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2hvd19tb3JlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4rNDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbM10uYmxvYl90bj9pbWFnZXNbM10uYmxvYl90bjppbWFnZXNbM10uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiA1MCB9fSAvPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAge3R5cGUgPT0gXCJQaG90b1wiPyBibG9iX3RuICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdF9jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmltYWdlKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZV9pdGVtfSBvbkNsaWNrPXtzaG93UGhvdG9Nb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtibG9iX3RufWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj46XHJcbiAgICAgICAgICAgIGJsb2JfdG4gJiYgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aWRlb3N9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgIDxQbGF5ZXJcclxuICAgICAgICAgICAgICAgIHBsYXlzSW5saW5lXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheVxyXG4gICAgICAgICAgICAgICAgbXV0ZWRcclxuICAgICAgICAgICAgICAgIHBvc3Rlcj17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7dGh1bWJuYWlsLnNyY31gfVxyXG4gICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtibG9iX3RufWB9XHJcbiAgICAgICAgICAgICAgICByZWY9e3BsYXllciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIC8vIHZpZGVvUmVmID0gcGxheWVyO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVhY3Rpb25zX3NoYXJlc19zdGF0dXN9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVhY3Rpb25zX3N0YXR1c30+XHJcbiAgICAgICAgICAgICAgICB7IGxpa2VEYXRhLmxlbmd0aCA+IDAgJiYgPD5cclxuICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9e2dldExpa2VBY3Rpb25Vc2VySW5mbyhsaWtlRGF0YSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAndGh1bWJzLXVwJ119IHNpemU9XCIxeFwiICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJ319Lz5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57bGlrZURhdGEubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPjwvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgeyBoYWhhRGF0YS5sZW5ndGggPiAwICYmIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPXtnZXRMaWtlQWN0aW9uVXNlckluZm8oaGFoYURhdGEpfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ2dyaW4nXX0gc2l6ZT1cIjF4XCIgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInfX0vPiBcclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aGFoYURhdGEubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHsgaGVhcnREYXRhLmxlbmd0aCA+IDAgJiYgPD4gXHJcbiAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPXtnZXRMaWtlQWN0aW9uVXNlckluZm8oaGVhcnREYXRhKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdoZWFydCddfSBzaXplPVwiMXhcIiAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcid9fS8+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntoZWFydERhdGEubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHsgd293RGF0YS5sZW5ndGggPiAwICYmIDw+IFxyXG4gICAgICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKHdvd0RhdGEpfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ2xhdWdoJ119IHNpemU9XCIxeFwiICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJ319Lz5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57d293RGF0YS5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgIDwvPiBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHsgc2FkRGF0YS5sZW5ndGggPiAwICYmIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPXtnZXRMaWtlQWN0aW9uVXNlckluZm8oc2FkRGF0YSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAnZnJvd24nXX0gc2l6ZT1cIjF4XCIgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInfX0vPiBcclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57c2FkRGF0YS5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEFjdGlvbnNcclxuICAgICAgICAgICAgICBpZD17aXRlbS5pZH1cclxuICAgICAgICAgICAgICB0eXBlPXtpdGVtLnR5cGV9XHJcbiAgICAgICAgICAgICAgcG9zdFJhdGU9e2l0ZW0ucmF0aW5nfVxyXG4gICAgICAgICAgICAgIGNvbW1lbnRzPXtjb21tZW50c31cclxuICAgICAgICAgICAgICBvblJhdGVQb3N0PXtvblJhdGVQb3N0fVxyXG4gICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cclxuICAgICAgICAgICAgICBsaWtlQWN0aW9uPXsodGVybSkgPT4gbGlrZUFjdGlvbih0eXBlLCBpdGVtLmlkLCB0ZXJtKX1cclxuICAgICAgICAgICAgICBzaGFyZUFjdGlvbj17KCkgPT4gc2hhcmVBY3Rpb24odHlwZSAhPT0gJ1NoYXJlJz90eXBlOnNoYXJlZC50eXBlLCB0eXBlICE9PSAnU2hhcmUnP2l0ZW0uaWQ6c2hhcmVkLmlkKX1cclxuICAgICAgICAgICAgICBhY3Rpb25zPXtcclxuICAgICAgICAgICAgICAgICgpID0+IHsgaGFuZGxlU2hvd0NvbW1lbnRNb2RhbChpdGVtLmlkLCBpdGVtLnR5cGUpIH0gXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Q29tbWVudHNcclxuICAgICAgICAgICAgICBpZD17aXRlbS5pZH1cclxuICAgICAgICAgICAgICB0eXBlPXtpdGVtLnR5cGV9XHJcbiAgICAgICAgICAgICAgZGF0YT17Y29tbWVudHN9XHJcbiAgICAgICAgICAgICAgb25VcGRhdGVUaW1lbGluZT17b25VcGRhdGVUaW1lbGluZX1cclxuICAgICAgICAgICAgICBhY3RpdmVQb3N0SWQ9e2FjdGl2ZVBvc3RJZH1cclxuICAgICAgICAgICAgICBtb2RhbE1vZGU9e21vZGFsTW9kZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuXHJcbiAgICAgIDxDb21tZW50c01vZGFsXHJcbiAgICAgICAgYWN0aXZlUG9zdElkPXthY3RpdmVQb3N0SWR9XHJcbiAgICAgICAgcG9zdERhdGE9e2RhdGF9XHJcbiAgICAgICAgb25VcGRhdGVUaW1lbGluZT17b25VcGRhdGVUaW1lbGluZX1cclxuICAgICAgICB0aXRsZT1cIkNvbW1lbnRzXCJcclxuICAgICAgICBzaG93PXttb2RhbE1vZGV9XHJcbiAgICAgICAgb25DbG9zZT17KCkgPT4ge2NvbnNvbGUubG9nKCdjbG9zZSBtb2RhbCcpfX1cclxuICAgICAgICBnZXRDb21tZW50cz17Z2V0Q29tbWVudHN9XHJcbiAgICAgIC8+XHJcbiAgICAgXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgbW9kYWxBY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoeyBzaG93IH0sIGRpc3BhdGNoKVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShUaW1lbGluZVBvc3RzKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==