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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/timeline-post.module.scss */ "./components/timeline/styles/timeline-post.module.scss");
/* harmony import */ var _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Comments__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Comments */ "./components/timeline/Comments.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Actions */ "./components/timeline/Actions.js");
/* harmony import */ var _common_TrimText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/TrimText */ "./components/common/TrimText.js");
/* harmony import */ var react_modal_hook__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-modal-hook */ "./node_modules/react-modal-hook/dist/index.es.js");
/* harmony import */ var _CommentsModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./CommentsModal */ "./components/timeline/CommentsModal.js");
/* harmony import */ var _profile_PhotosModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../profile/PhotosModal */ "./components/profile/PhotosModal.js");
/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/Avatar */ "./components/common/Avatar.js");
/* harmony import */ var redux_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! redux-modal */ "./node_modules/redux-modal/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var configs_API__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! configs/API */ "./configs/API.js");
/* harmony import */ var video_react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! video-react */ "./node_modules/video-react/lib/index.js");
/* harmony import */ var video_react__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(video_react__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var containers_Photos_storage_PhotoContext__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! containers/Photos/storage/PhotoContext */ "./containers/Photos/storage/PhotoContext.js");
/* harmony import */ var components_common_LinkPreview__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! components/common/LinkPreview */ "./components/common/LinkPreview.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/build/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_22__);



var _jsxFileName = "D:\\Freeskies-development-\\components\\timeline\\TimelinePosts.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






















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
  var imagesList = [].concat.apply([], data.map(function (item) {
    if (item.type === 'Photo') {
      return item;
    } else if (item.type === 'VideoClip') {
      return [];
    } else {
      return item.images;
    }
  })); // const videoList = [].concat.apply([], data.map(item => {
  //   if(item.type === 'VideoClip') {
  //     return item;
  //   } else {
  //     return item.videos;
  //   }
  // }))
  // console.log('videoList', videoList);

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_22___default()('https://www.freeskies.com');
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
        socket.on('VIDEO_READY', function (video) {
          console.log('video ready', video);
        });
      }
    });
  }, []);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      activePostId = _useState[0],
      setActivePostId = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      modalMode = _useState2[0],
      setModalMode = _useState2[1];

  var videoRef = [];

  var _useModal = Object(react_modal_hook__WEBPACK_IMPORTED_MODULE_11__["useModal"])(function (_ref2) {
    var open = _ref2["in"];
    return __jsx(containers_Photos_storage_PhotoContext__WEBPACK_IMPORTED_MODULE_20__["PhotosProvider"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 5
      }
    }, __jsx(_profile_PhotosModal__WEBPACK_IMPORTED_MODULE_13__["default"], {
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
        lineNumber: 77,
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
    className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.activity_content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
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
    var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_22___default()('https://www.freeskies.com');
    return __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.post,
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 11
      }
    }, !disableDelete ? __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
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
        lineNumber: 126,
        columnNumber: 29
      }
    }) : null, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.post_header,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.avatar,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 15
      }
    }, __jsx(_common_Avatar__WEBPACK_IMPORTED_MODULE_14__["default"], {
      text: fullName,
      url: profileUrl,
      size: 60,
      borderSize: 3,
      username: username,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.user_info,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 15
      }
    }, __jsx("p", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.user_name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 17
      }
    }, fullName))), __jsx("p", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.date,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 13
      }
    }, moment__WEBPACK_IMPORTED_MODULE_8___default()(createdAt).format('MMM DD, YYYY - HH:mm A')), __jsx("p", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.description,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 13
      }
    }, __jsx(_common_TrimText__WEBPACK_IMPORTED_MODULE_10__["default"], {
      limit: 110,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 15
      }
    }, type !== 'Share' ? text : shared.text)), text_links && text_links.map(function (item) {
      return __jsx(components_common_LinkPreview__WEBPACK_IMPORTED_MODULE_21__["LinkPreview"], {
        data: item,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 15
        }
      });
    }), videos && videos.length > 0 && videos.map(function (video, i) {
      if (video.processing) {
        socket.emit('VIDEO_READY', video.id);
      }

      return __jsx("div", {
        className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.videos,
        key: i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 17
        }
      }, __jsx(video_react__WEBPACK_IMPORTED_MODULE_19__["Player"], {
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
          lineNumber: 174,
          columnNumber: 19
        }
      }, __jsx("source", {
        src: "https://www.freeskies.com/static/".concat(video.src),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 21
        }
      })), __jsx("button", {
        onClick: function onClick() {
          return videoRef[index].play();
        },
        ref: function ref(el) {
          if (!el) return;
          window.addEventListener('scroll', function () {// if(videoRef && videoRef[index] !== null) {
            //   var positionY = el.getBoundingClientRect().y;
            //   if(positionY > (window.innerHeight/2) && positionY < window.innerHeight) {
            //     videoRef[index].play();
            //   } else {
            //     videoRef[index].pause();
            //   }
            // }
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
          lineNumber: 187,
          columnNumber: 19
        }
      }, "Button For position of Video"));
    }), images && images.length > 0 ? __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.post_content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image, (_classnames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.grid_2, images.length == 2), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.grid_3, images.length == 3), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.grid_4, images.length == 4), _classnames)),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 17
      }
    }, images.length == 1 && __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].blob_tn ? images[0].blob_tn : images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 23
      }
    })), images.length == 2 && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.main_photo),
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].blob_tn ? images[0].blob_tn : images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[1].blob_tn ? images[1].blob_tn : images[1].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 25
      }
    }))), images.length == 3 && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.main_photo),
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].blob_tn ? images[0].blob_tn : images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[1].blob_tn ? images[1].blob_tn : images[1].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[2].blob_tn ? images[2].blob_tn : images[2].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 25
      }
    }))), images.length >= 4 && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.main_photo),
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].blob_tn ? images[0].blob_tn : images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[1].blob_tn ? images[1].blob_tn : images[1].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[2].blob_tn ? images[2].blob_tn : images[2].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.show_more,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 25
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282,
        columnNumber: 27
      }
    }, "+4")), __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[3].blob_tn ? images[3].blob_tn : images[3].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 25
      }
    }))))) : __jsx("div", {
      style: {
        height: 50
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291,
        columnNumber: 15
      }
    }), type == "Photo" ? blob_tn && __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.post_content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 42
      }
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(blob_tn),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 299,
        columnNumber: 19
      }
    })))) : blob_tn && __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.videos,
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 303,
        columnNumber: 24
      }
    }, __jsx(video_react__WEBPACK_IMPORTED_MODULE_19__["Player"], {
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
        lineNumber: 304,
        columnNumber: 15
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.reactions_shares_status,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.reactions_status,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318,
        columnNumber: 15
      }
    }, likeData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(likeData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 320,
        columnNumber: 19
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
      icon: ['far', 'thumbs-up'],
      size: "1x",
      style: {
        cursor: 'pointer'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322,
        columnNumber: 21
      }
    }, likeData.length))), hahaData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(hahaData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 326,
        columnNumber: 19
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
      icon: ['far', 'grin'],
      size: "1x",
      style: {
        cursor: 'pointer'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 328,
        columnNumber: 21
      }
    }, hahaData.length))), heartData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(heartData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 333,
        columnNumber: 19
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
      icon: ['far', 'heart'],
      size: "1x",
      style: {
        cursor: 'pointer'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 334,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 335,
        columnNumber: 21
      }
    }, heartData.length))), wowData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(wowData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 340,
        columnNumber: 19
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
      icon: ['far', 'laugh'],
      size: "1x",
      style: {
        cursor: 'pointer'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 341,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 342,
        columnNumber: 21
      }
    }, wowData.length))), sadData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(sadData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 347,
        columnNumber: 19
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
      icon: ['far', 'frown'],
      size: "1x",
      style: {
        cursor: 'pointer'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 348,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 349,
        columnNumber: 21
      }
    }, sadData.length))))), __jsx(_Actions__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
        lineNumber: 355,
        columnNumber: 13
      }
    }), __jsx(_Comments__WEBPACK_IMPORTED_MODULE_7__["default"], {
      id: item.id,
      type: item.type,
      data: comments,
      onUpdateTimeline: onUpdateTimeline,
      activePostId: activePostId,
      modalMode: modalMode,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 368,
        columnNumber: 13
      }
    }));
  }), __jsx(_CommentsModal__WEBPACK_IMPORTED_MODULE_12__["default"], {
    activePostId: activePostId,
    postData: data,
    onUpdateTimeline: onUpdateTimeline,
    title: "Comments" // showModal={open}
    // onClose={hideCommentModal}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 7
    }
  }));
}

_s(TimelinePosts, "DJZ6zRGEC7wT2oAOhbp91r4pd2o=", false, function () {
  return [react_modal_hook__WEBPACK_IMPORTED_MODULE_11__["useModal"]];
});

_c = TimelinePosts;

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    modalActions: Object(redux__WEBPACK_IMPORTED_MODULE_16__["bindActionCreators"])({
      show: redux_modal__WEBPACK_IMPORTED_MODULE_15__["show"]
    }, dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_17__["connect"])(null, mapDispatchToProps)(TimelinePosts));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aW1lbGluZS9UaW1lbGluZVBvc3RzLmpzIl0sIm5hbWVzIjpbIlRpbWVsaW5lUG9zdHMiLCJkYXRhIiwib25VcGRhdGVUaW1lbGluZSIsIm9uUmF0ZVBvc3QiLCJtb2RhbEFjdGlvbnMiLCJzaGFyZUFjdGlvbiIsImxpa2VBY3Rpb24iLCJkZWxldGVBY3Rpb24iLCJkaXNhYmxlRGVsZXRlIiwicGFyZW50RGl2IiwiYXV0aCIsImltYWdlc0xpc3QiLCJjb25jYXQiLCJhcHBseSIsIm1hcCIsIml0ZW0iLCJ0eXBlIiwiaW1hZ2VzIiwidXNlRWZmZWN0Iiwic29ja2V0IiwiaW8iLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJlbWl0IiwidG9rZW4iLCJlIiwidmlkZW8iLCJ1c2VTdGF0ZSIsImFjdGl2ZVBvc3RJZCIsInNldEFjdGl2ZVBvc3RJZCIsIm1vZGFsTW9kZSIsInNldE1vZGFsTW9kZSIsInZpZGVvUmVmIiwidXNlTW9kYWwiLCJvcGVuIiwiaGlkZVBob3RvTW9kYWwiLCJzaG93UGhvdG9Nb2RhbCIsImhhbmRsZVNob3dDb21tZW50TW9kYWwiLCJpZCIsInRvZ2dsZUNvbW1lbnRTaG93IiwiaW5kZXgiLCJzZXRDb21tZW50U2hvdyIsImNvbW1lbnRTaG93IiwiZ2V0TGlrZUFjdGlvblVzZXJJbmZvIiwiZmluYWxEYXRhIiwiYWNjb3VudCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwic3R5bGVzIiwiYWN0aXZpdHlfY29udGVudCIsImNyZWF0ZWRBdCIsImNvbW1lbnRzIiwidGV4dCIsInZpZGVvcyIsInNoYXJlZCIsImNvbW1lbnRlZCIsImJsb2JfdG4iLCJ0aHVtYm5haWwiLCJyZWFjdGlvbnMiLCJ0ZXh0X2xpbmtzIiwicHVzaCIsInByb2ZpbGVVcmwiLCJ1bmRlZmluZWQiLCJwcm9maWxlUGhvdG8iLCJzcmMiLCJmdWxsTmFtZSIsInVzZXJuYW1lIiwibGlrZURhdGEiLCJmaWx0ZXIiLCJyZWFjdGlvbiIsImhlYXJ0RGF0YSIsIndvd0RhdGEiLCJoYWhhRGF0YSIsInNhZERhdGEiLCJwb3N0IiwiZm9udFNpemUiLCJtYXJnaW5SaWdodCIsImN1cnNvciIsInBvc3RfaGVhZGVyIiwiYXZhdGFyIiwidXNlcl9pbmZvIiwidXNlcl9uYW1lIiwiZGF0ZSIsIm1vbWVudCIsImZvcm1hdCIsImRlc2NyaXB0aW9uIiwibGVuZ3RoIiwiaSIsInByb2Nlc3NpbmciLCJwbGF5ZXIiLCJwbGF5IiwiZWwiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY3VycmVudCIsInBvc2l0aW9uWSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInkiLCJpbm5lckhlaWdodCIsInBhdXNlIiwidmlzaWJpbGl0eSIsInBvc3RfY29udGVudCIsImNsYXNzbmFtZXMiLCJpbWFnZSIsImdyaWRfMiIsImdyaWRfMyIsImdyaWRfNCIsImltYWdlX2l0ZW0iLCJtYWluX3Bob3RvIiwic2hvd19tb3JlIiwiaGVpZ2h0IiwicmVhY3Rpb25zX3NoYXJlc19zdGF0dXMiLCJyZWFjdGlvbnNfc3RhdHVzIiwicmF0aW5nIiwidGVybSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYmluZEFjdGlvbkNyZWF0b3JzIiwic2hvdyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxhQUFULE9BQTJKO0FBQUE7O0FBQUE7O0FBQUEsTUFBbElDLElBQWtJLFFBQWxJQSxJQUFrSTtBQUFBLE1BQTVIQyxnQkFBNEgsUUFBNUhBLGdCQUE0SDtBQUFBLE1BQTFHQyxVQUEwRyxRQUExR0EsVUFBMEc7QUFBQSxNQUE5RkMsWUFBOEYsUUFBOUZBLFlBQThG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LGlFQUFrQixDQUFDO0FBQUVDLFVBQUksRUFBSkEsaURBQUlBO0FBQU4sS0FBRCxFQUFXRixRQUFYO0FBRFEsR0FBZjtBQUFBLENBQTNCOztBQUllRywySEFBTyxDQUFDLElBQUQsRUFBT0osa0JBQVAsQ0FBUCxDQUFrQ3BILGFBQWxDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS45ODM0MDA5NDdlMzY4YTEzNDk2ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy90aW1lbGluZS1wb3N0Lm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgUG9wb3ZlciwgVG9vbHRpcCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IENvbW1lbnRzIGZyb20gJy4vQ29tbWVudHMnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IEFjdGlvbnMgZnJvbSAnLi9BY3Rpb25zJztcclxuaW1wb3J0IFRyaW1UZXh0IGZyb20gJy4uL2NvbW1vbi9UcmltVGV4dCc7XHJcbmltcG9ydCB7IHVzZU1vZGFsIH0gZnJvbSAncmVhY3QtbW9kYWwtaG9vayc7XHJcbmltcG9ydCBDb21tZW50c01vZGFsIGZyb20gJy4vQ29tbWVudHNNb2RhbCc7XHJcbmltcG9ydCBQaG90b3NNb2RhbCBmcm9tICcuLi9wcm9maWxlL1Bob3Rvc01vZGFsJztcclxuaW1wb3J0IEF2YXRhciBmcm9tICcuLi9jb21tb24vQXZhdGFyJztcclxuaW1wb3J0IHsgc2hvdyB9IGZyb20gJ3JlZHV4LW1vZGFsJztcclxuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgQVBJIGZyb20gJ2NvbmZpZ3MvQVBJJztcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAndmlkZW8tcmVhY3QnO1xyXG5pbXBvcnQgeyBQaG90b3NQcm92aWRlciB9ICBmcm9tICdjb250YWluZXJzL1Bob3Rvcy9zdG9yYWdlL1Bob3RvQ29udGV4dCc7XHJcbmltcG9ydCB7IExpbmtQcmV2aWV3IH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vTGlua1ByZXZpZXcnO1xyXG5pbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XHJcblxyXG5cclxuZnVuY3Rpb24gVGltZWxpbmVQb3N0cyh7IGRhdGEsIG9uVXBkYXRlVGltZWxpbmUsIG9uUmF0ZVBvc3QsIG1vZGFsQWN0aW9ucywgc2hhcmVBY3Rpb24sIGxpa2VBY3Rpb24sIGRlbGV0ZUFjdGlvbiwgZGlzYWJsZURlbGV0ZSwgcGFyZW50RGl2ID0gbnVsbCwgYXV0aCB9KSB7XHJcbiAgXHJcbiAgY29uc3QgaW1hZ2VzTGlzdCA9IFtdLmNvbmNhdC5hcHBseShbXSwgZGF0YS5tYXAoaXRlbSA9PiBcclxuICAgIHsgXHJcbiAgICAgICAgaWYoaXRlbS50eXBlID09PSAnUGhvdG8nKSB7XHJcbiAgICAgICAgICByZXR1cm4gIGl0ZW07XHJcbiAgICAgICAgfSBlbHNlIGlmKGl0ZW0udHlwZSA9PT0gJ1ZpZGVvQ2xpcCcpIHtcclxuICAgICAgICAgIHJldHVybiAgW107XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiAgaXRlbS5pbWFnZXMgXHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuICApKVxyXG5cclxuICAvLyBjb25zdCB2aWRlb0xpc3QgPSBbXS5jb25jYXQuYXBwbHkoW10sIGRhdGEubWFwKGl0ZW0gPT4ge1xyXG4gIC8vICAgaWYoaXRlbS50eXBlID09PSAnVmlkZW9DbGlwJykge1xyXG4gIC8vICAgICByZXR1cm4gaXRlbTtcclxuICAvLyAgIH0gZWxzZSB7XHJcbiAgLy8gICAgIHJldHVybiBpdGVtLnZpZGVvcztcclxuICAvLyAgIH1cclxuICAvLyB9KSlcclxuXHJcbiAgLy8gY29uc29sZS5sb2coJ3ZpZGVvTGlzdCcsIHZpZGVvTGlzdCk7XHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHNvY2tldCA9IGlvKCdodHRwczovL3d3dy5mcmVlc2tpZXMuY29tJyk7XHJcbiAgICBzb2NrZXQub24oJ2Nvbm5lY3QnLCAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdjb25uZWN0ZWQhJylcclxuICAgICAgc29ja2V0LmVtaXQoJ0FVVEgnLCB7ICd0b2tlbic6IGF1dGgudG9rZW4gfSlcclxuICAgICAgY29uc29sZS5sb2coJ0FVVEggVE9LRU4gU0VOVCcpXHJcbiAgICB9KVxyXG5cclxuICAgIHNvY2tldC5vbignQVVUSCcsIGUgPT4ge2NvbnNvbGUubG9nKGUpO1xyXG4gICAgICBpZihlICE9PSAyMDApIHtcclxuXHJcbiAgICAgIH0gZWxzZSAge1xyXG4gICAgICAgIHNvY2tldC5vbignVklERU9fUkVBRFknLCAodmlkZW8pID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCd2aWRlbyByZWFkeScsIHZpZGVvKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG5cclxuICB9LCBbXSlcclxuXHJcbiBcclxuXHJcbiAgY29uc3QgW2FjdGl2ZVBvc3RJZCwgc2V0QWN0aXZlUG9zdElkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFttb2RhbE1vZGUsIHNldE1vZGFsTW9kZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGxldCB2aWRlb1JlZiA9IFtdO1xyXG4gIGNvbnN0IFtzaG93UGhvdG9Nb2RhbCwgaGlkZVBob3RvTW9kYWxdID0gdXNlTW9kYWwoKHsgaW46IG9wZW4gfSkgPT4gKFxyXG4gICAgPFBob3Rvc1Byb3ZpZGVyPlxyXG4gICAgICA8UGhvdG9zTW9kYWxcclxuICAgICAgICB0aXRsZT1cIlBob3RvIGRldGFpbFwiXHJcbiAgICAgICAgc2hvd01vZGFsPXtvcGVufVxyXG4gICAgICAgIG9uQ2xvc2U9e2hpZGVQaG90b01vZGFsfVxyXG4gICAgICAgIG9uUmF0ZVBvc3Q9e29uUmF0ZVBvc3R9XHJcbiAgICAgICAgZGF0YT17aW1hZ2VzTGlzdH1cclxuICAgICAgICBsaWtlQWN0aW9uPXtsaWtlQWN0aW9ufVxyXG4gICAgICAgIHNoYXJlQWN0aW9uPXtzaGFyZUFjdGlvbn1cclxuICAgICAgICBvblVwZGF0ZVRpbWVsaW5lPXtvblVwZGF0ZVRpbWVsaW5lfVxyXG4gICAgICAgIGF1dGg9e2F1dGh9XHJcbiAgICAgIC8+XHJcbiAgICA8L1Bob3Rvc1Byb3ZpZGVyPlxyXG4gICkpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTaG93Q29tbWVudE1vZGFsID0gKGlkKSA9PiB7XHJcbiAgICBzZXRBY3RpdmVQb3N0SWQoaWQpO1xyXG4gICAgc2V0TW9kYWxNb2RlKCFtb2RhbE1vZGUpO1xyXG4gICAgLy9tb2RhbEFjdGlvbnMuc2hvdygnY29tbWVudE1vZGFsJywgeyBpZDogYWN0aXZlUG9zdElkIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZ2dsZUNvbW1lbnRTaG93ID0gKGluZGV4KSA9PlxyXG4gICAgc2V0Q29tbWVudFNob3coY29tbWVudFNob3cgPT09IGluZGV4ID8gbnVsbCA6IGluZGV4KTtcclxuXHJcbiAgY29uc3QgZ2V0TGlrZUFjdGlvblVzZXJJbmZvID0gKGRhdGEpID0+IHtcclxuICAgIHZhciBmaW5hbERhdGEgPSAnJztcclxuICAgIGRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICBmaW5hbERhdGEgPSBmaW5hbERhdGEgKyAnICcgKyBpdGVtLmFjY291bnQuZmlyc3ROYW1lICsgJycgKyBpdGVtLmFjY291bnQubGFzdE5hbWUgO1xyXG4gICAgfSlcclxuICAgIHJldHVybiBmaW5hbERhdGE7XHJcbiAgfVxyXG5cclxuIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpdml0eV9jb250ZW50fSA+XHJcbiAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICB2YXIgeyBhY2NvdW50LCBjcmVhdGVkQXQsIHR5cGUsIGNvbW1lbnRzLCB0ZXh0LCBpbWFnZXMsIHZpZGVvcywgc2hhcmVkLCBjb21tZW50ZWQsIGJsb2JfdG4sIHRodW1ibmFpbCwgcmVhY3Rpb25zLCB0ZXh0X2xpbmtzIH0gPSBpdGVtO1xyXG4gICAgICAgIHZpZGVvUmVmLnB1c2gobnVsbCk7XHJcbiAgICAgICAgY29uc3QgcHJvZmlsZVVybCA9IGFjY291bnQgIT09IG51bGwgJiYgYWNjb3VudCAhPT0gdW5kZWZpbmVkID8gYCR7YWNjb3VudC5wcm9maWxlUGhvdG8/LnNyY31gIDogbnVsbFxyXG4gICAgICAgIGNvbnN0IGZ1bGxOYW1lID0gYCR7YWNjb3VudD8uZmlyc3ROYW1lfSAke2FjY291bnQ/Lmxhc3ROYW1lfWA7XHJcbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSBhY2NvdW50Py51c2VybmFtZTtcclxuICAgICAgICBjb25zdCBsaWtlRGF0YSA9IHJlYWN0aW9ucz8gcmVhY3Rpb25zPy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlYWN0aW9uID09ICdMSUtFJyk6W107XHJcbiAgICAgICAgY29uc3QgaGVhcnREYXRhID0gIHJlYWN0aW9ucz8gcmVhY3Rpb25zPy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlYWN0aW9uID09ICdIRUFSVCcpOltdO1xyXG4gICAgICAgIGNvbnN0IHdvd0RhdGEgPSByZWFjdGlvbnMgPyByZWFjdGlvbnM/LmZpbHRlcihpdGVtID0+IGl0ZW0ucmVhY3Rpb24gPT0gJ1dPVycpOltdO1xyXG4gICAgICAgIGNvbnN0IGhhaGFEYXRhID0gcmVhY3Rpb25zID8gcmVhY3Rpb25zPy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlYWN0aW9uID09ICdIQUhBJyk6W107XHJcbiAgICAgICAgY29uc3Qgc2FkRGF0YSA9IHJlYWN0aW9ucyA/IHJlYWN0aW9ucz8uZmlsdGVyKGl0ZW0gPT4gaXRlbS5yZWFjdGlvbiA9PSAnU0FEJyk6W107XHJcbiAgICAgICAgY29uc3Qgc29ja2V0ID0gaW8oJ2h0dHBzOi8vd3d3LmZyZWVza2llcy5jb20nKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0fSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgeyFkaXNhYmxlRGVsZXRlPzxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAnd2luZG93LWNsb3NlJ119IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgZmxvYXQ6ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDI1LFxyXG4gICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAxMCxcclxuICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkZWxldGVBY3Rpb24oaXRlbS5pZCwgdHlwZSl9XHJcbiAgICAgICAgICAgIC8+Om51bGx9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdF9oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyfT5cclxuICAgICAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICAgICAgdGV4dD17ZnVsbE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIHVybD17cHJvZmlsZVVybH1cclxuICAgICAgICAgICAgICAgICAgc2l6ZT17NjB9XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclNpemU9ezN9XHJcbiAgICAgICAgICAgICAgICAgIHVzZXJuYW1lPXt1c2VybmFtZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcl9pbmZvfT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfbmFtZX0+e2Z1bGxOYW1lfTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRhdGV9PlxyXG4gICAgICAgICAgICAgIHttb21lbnQoY3JlYXRlZEF0KS5mb3JtYXQoJ01NTSBERCwgWVlZWSAtIEhIOm1tIEEnKX1cclxuICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgICAgIDxUcmltVGV4dCBsaW1pdD17MTEwfT5cclxuICAgICAgICAgICAgICAgIHsgdHlwZSE9PSdTaGFyZSc/dGV4dDpzaGFyZWQudGV4dCB9XHJcbiAgICAgICAgICAgICAgPC9UcmltVGV4dD5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAge3RleHRfbGlua3MgJiYgdGV4dF9saW5rcy5tYXAoaXRlbSA9PiBcclxuICAgICAgICAgICAgICA8TGlua1ByZXZpZXcgZGF0YT17aXRlbX0vPiAgXHJcbiAgICAgICAgICAgICkgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAge3ZpZGVvcyAmJiB2aWRlb3MubGVuZ3RoID4gMCAmJiB2aWRlb3MubWFwKCh2aWRlbywgaSkgPT4ge1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGlmKHZpZGVvLnByb2Nlc3NpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoJ1ZJREVPX1JFQURZJywgdmlkZW8uaWQpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZpZGVvc30ga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgey8qIDx2aWRlbyBpZD0naGxzLWV4YW1wbGUnICBjbGFzc05hbWU9XCJ2aWRlby1qcyB2anMtZGVmYXVsdC1za2luXCIgd2lkdGg9XCI5NjBcIiBoZWlnaHQ9XCI1NDBcIiBjb250cm9scz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgdHlwZT1cImFwcGxpY2F0aW9uL3gtbXBlZ1VSTFwiIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7dmlkZW8uc3JjfWB9ID48L3NvdXJjZT5cclxuICAgICAgICAgICAgICAgICAgPC92aWRlbz4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICA8UGxheWVyXHJcbiAgICAgICAgICAgICAgICAgICAgcGxheXNJbmxpbmVcclxuICAgICAgICAgICAgICAgICAgICBhdXRvcGxheVxyXG4gICAgICAgICAgICAgICAgICAgIG11dGVkXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zdGVyPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHt2aWRlby50aHVtYm5haWwuc3JjfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtwbGF5ZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYodmlkZW9SZWYgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW9SZWZbaW5kZXhdID0gcGxheWVyOyBcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke3ZpZGVvLnNyY31gfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L1BsYXllcj4gXHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdmlkZW9SZWZbaW5kZXhdLnBsYXkoKX0gcmVmPXtlbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlbCkgcmV0dXJuOyBcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gaWYodmlkZW9SZWYgJiYgdmlkZW9SZWZbaW5kZXhdICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyAgIHZhciBwb3NpdGlvblkgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55O1xyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gICBpZihwb3NpdGlvblkgPiAod2luZG93LmlubmVySGVpZ2h0LzIpICYmIHBvc2l0aW9uWSA8IHdpbmRvdy5pbm5lckhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHZpZGVvUmVmW2luZGV4XS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdmlkZW9SZWZbaW5kZXhdLnBhdXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHBhcmVudERpdiAhPT0gbnVsbCAmJiBwYXJlbnREaXY/LmN1cnJlbnQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHBhcmVudERpdj8uY3VycmVudD8uYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih2aWRlb1JlZiAmJiB2aWRlb1JlZltpbmRleF0gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zaXRpb25ZID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZihwb3NpdGlvblkgPiAod2luZG93LmlubmVySGVpZ2h0LzIpICYmIHBvc2l0aW9uWSA8IHdpbmRvdy5pbm5lckhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW9SZWZbaW5kZXhdLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW9SZWZbaW5kZXhdLnBhdXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHZpc2liaWxpdHk6ICdoaWRkZW4nIH19XHJcbiAgICAgICAgICAgICAgICAgID5CdXR0b24gRm9yIHBvc2l0aW9uIG9mIFZpZGVvPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICl9XHJcblxyXG5cclxuICAgICAgICAgICAge2ltYWdlcyAmJiBpbWFnZXMubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RfY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuaW1hZ2UsIHtcclxuICAgICAgICAgICAgICAgICAgICBbc3R5bGVzLmdyaWRfMl06IGltYWdlcy5sZW5ndGggPT0gMixcclxuICAgICAgICAgICAgICAgICAgICBbc3R5bGVzLmdyaWRfM106IGltYWdlcy5sZW5ndGggPT0gMyxcclxuICAgICAgICAgICAgICAgICAgICBbc3R5bGVzLmdyaWRfNF06IGltYWdlcy5sZW5ndGggPT0gNCxcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtpbWFnZXMubGVuZ3RoID09IDEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfaXRlbX0gb25DbGljaz17c2hvd1Bob3RvTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1swXS5ibG9iX3RuP2ltYWdlc1swXS5ibG9iX3RuOmltYWdlc1swXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtpbWFnZXMubGVuZ3RoID09IDIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuaW1hZ2VfaXRlbSwgc3R5bGVzLm1haW5fcGhvdG8pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzaG93UGhvdG9Nb2RhbH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1swXS5ibG9iX3RuP2ltYWdlc1swXS5ibG9iX3RuOmltYWdlc1swXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZV9pdGVtfSBvbkNsaWNrPXtzaG93UGhvdG9Nb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMV0uYmxvYl90bj9pbWFnZXNbMV0uYmxvYl90bjppbWFnZXNbMV0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtpbWFnZXMubGVuZ3RoID09IDMgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuaW1hZ2VfaXRlbSwgc3R5bGVzLm1haW5fcGhvdG8pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzaG93UGhvdG9Nb2RhbH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1swXS5ibG9iX3RuP2ltYWdlc1swXS5ibG9iX3RuOmltYWdlc1swXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZV9pdGVtfSBvbkNsaWNrPXtzaG93UGhvdG9Nb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMV0uYmxvYl90bj9pbWFnZXNbMV0uYmxvYl90bjppbWFnZXNbMV0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfaXRlbX0gb25DbGljaz17c2hvd1Bob3RvTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzJdLmJsb2JfdG4/aW1hZ2VzWzJdLmJsb2JfdG46aW1hZ2VzWzJdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICB7aW1hZ2VzLmxlbmd0aCA+PSA0ICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmltYWdlX2l0ZW0sIHN0eWxlcy5tYWluX3Bob3RvKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c2hvd1Bob3RvTW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMF0uYmxvYl90bj9pbWFnZXNbMF0uYmxvYl90bjppbWFnZXNbMF0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfaXRlbX0gb25DbGljaz17c2hvd1Bob3RvTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzFdLmJsb2JfdG4/aW1hZ2VzWzFdLmJsb2JfdG46aW1hZ2VzWzFdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX2l0ZW19IG9uQ2xpY2s9e3Nob3dQaG90b01vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1syXS5ibG9iX3RuP2ltYWdlc1syXS5ibG9iX3RuOmltYWdlc1syXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZV9pdGVtfSBvbkNsaWNrPXtzaG93UGhvdG9Nb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2hvd19tb3JlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4rNDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbM10uYmxvYl90bj9pbWFnZXNbM10uYmxvYl90bjppbWFnZXNbM10uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiA1MCB9fSAvPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAge3R5cGUgPT0gXCJQaG90b1wiPyBibG9iX3RuICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdF9jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmltYWdlKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZV9pdGVtfSBvbkNsaWNrPXtzaG93UGhvdG9Nb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtibG9iX3RufWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj46XHJcbiAgICAgICAgICAgIGJsb2JfdG4gJiYgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aWRlb3N9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgIDxQbGF5ZXJcclxuICAgICAgICAgICAgICAgIHBsYXlzSW5saW5lXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheVxyXG4gICAgICAgICAgICAgICAgbXV0ZWRcclxuICAgICAgICAgICAgICAgIHBvc3Rlcj17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7dGh1bWJuYWlsLnNyY31gfVxyXG4gICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtibG9iX3RufWB9XHJcbiAgICAgICAgICAgICAgICByZWY9e3BsYXllciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIC8vIHZpZGVvUmVmID0gcGxheWVyO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVhY3Rpb25zX3NoYXJlc19zdGF0dXN9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVhY3Rpb25zX3N0YXR1c30+XHJcbiAgICAgICAgICAgICAgICB7IGxpa2VEYXRhLmxlbmd0aCA+IDAgJiYgPD5cclxuICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9e2dldExpa2VBY3Rpb25Vc2VySW5mbyhsaWtlRGF0YSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAndGh1bWJzLXVwJ119IHNpemU9XCIxeFwiICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJ319Lz5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57bGlrZURhdGEubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPjwvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgeyBoYWhhRGF0YS5sZW5ndGggPiAwICYmIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPXtnZXRMaWtlQWN0aW9uVXNlckluZm8oaGFoYURhdGEpfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ2dyaW4nXX0gc2l6ZT1cIjF4XCIgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInfX0vPiBcclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aGFoYURhdGEubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHsgaGVhcnREYXRhLmxlbmd0aCA+IDAgJiYgPD4gXHJcbiAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPXtnZXRMaWtlQWN0aW9uVXNlckluZm8oaGVhcnREYXRhKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdoZWFydCddfSBzaXplPVwiMXhcIiAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcid9fS8+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntoZWFydERhdGEubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHsgd293RGF0YS5sZW5ndGggPiAwICYmIDw+IFxyXG4gICAgICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKHdvd0RhdGEpfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ2xhdWdoJ119IHNpemU9XCIxeFwiICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJ319Lz5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57d293RGF0YS5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgIDwvPiBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHsgc2FkRGF0YS5sZW5ndGggPiAwICYmIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPXtnZXRMaWtlQWN0aW9uVXNlckluZm8oc2FkRGF0YSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAnZnJvd24nXX0gc2l6ZT1cIjF4XCIgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInfX0vPiBcclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57c2FkRGF0YS5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEFjdGlvbnNcclxuICAgICAgICAgICAgICBpZD17aXRlbS5pZH1cclxuICAgICAgICAgICAgICB0eXBlPXtpdGVtLnR5cGV9XHJcbiAgICAgICAgICAgICAgcG9zdFJhdGU9e2l0ZW0ucmF0aW5nfVxyXG4gICAgICAgICAgICAgIGNvbW1lbnRzPXtjb21tZW50c31cclxuICAgICAgICAgICAgICBvblJhdGVQb3N0PXtvblJhdGVQb3N0fVxyXG4gICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cclxuICAgICAgICAgICAgICBsaWtlQWN0aW9uPXsodGVybSkgPT4gbGlrZUFjdGlvbih0eXBlLCBpdGVtLmlkLCB0ZXJtKX1cclxuICAgICAgICAgICAgICBzaGFyZUFjdGlvbj17KCkgPT4gc2hhcmVBY3Rpb24odHlwZSAhPT0gJ1NoYXJlJz90eXBlOnNoYXJlZC50eXBlLCB0eXBlICE9PSAnU2hhcmUnP2l0ZW0uaWQ6c2hhcmVkLmlkKX1cclxuICAgICAgICAgICAgICBhY3Rpb25zPXtcclxuICAgICAgICAgICAgICAgICgpID0+IHsgaGFuZGxlU2hvd0NvbW1lbnRNb2RhbChpdGVtLmlkKSB9IFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPENvbW1lbnRzXHJcbiAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgdHlwZT17aXRlbS50eXBlfVxyXG4gICAgICAgICAgICAgIGRhdGE9e2NvbW1lbnRzfVxyXG4gICAgICAgICAgICAgIG9uVXBkYXRlVGltZWxpbmU9e29uVXBkYXRlVGltZWxpbmV9XHJcbiAgICAgICAgICAgICAgYWN0aXZlUG9zdElkPXthY3RpdmVQb3N0SWR9XHJcbiAgICAgICAgICAgICAgbW9kYWxNb2RlPXttb2RhbE1vZGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcblxyXG4gICAgICA8Q29tbWVudHNNb2RhbFxyXG4gICAgICAgIGFjdGl2ZVBvc3RJZD17YWN0aXZlUG9zdElkfVxyXG4gICAgICAgIHBvc3REYXRhPXtkYXRhfVxyXG4gICAgICAgIG9uVXBkYXRlVGltZWxpbmU9e29uVXBkYXRlVGltZWxpbmV9XHJcbiAgICAgICAgdGl0bGU9XCJDb21tZW50c1wiXHJcbiAgICAgICAgLy8gc2hvd01vZGFsPXtvcGVufVxyXG4gICAgICAgIC8vIG9uQ2xvc2U9e2hpZGVDb21tZW50TW9kYWx9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgbW9kYWxBY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoeyBzaG93IH0sIGRpc3BhdGNoKVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShUaW1lbGluZVBvc3RzKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==