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





















var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_22___default()('https://www.freeskies.com');

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
    console.log(socket);
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
      socket.on('VIDEO_READY', function (e) {
        console.log('video ready', e);
        socket.emit('VIDEO_READY', video.id);
      });
      return __jsx("div", {
        className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.videos,
        key: i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170,
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
          lineNumber: 175,
          columnNumber: 19
        }
      }, __jsx("source", {
        src: "https://www.freeskies.com/static/".concat(video.src),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186,
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
          lineNumber: 188,
          columnNumber: 19
        }
      }, "Button For position of Video"));
    }), images && images.length > 0 ? __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.post_content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image, (_classnames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.grid_2, images.length == 2), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.grid_3, images.length == 3), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.grid_4, images.length == 4), _classnames)),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 17
      }
    }, images.length == 1 && __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].blob_tn ? images[0].blob_tn : images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 23
      }
    })), images.length == 2 && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.main_photo),
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].blob_tn ? images[0].blob_tn : images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[1].blob_tn ? images[1].blob_tn : images[1].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 25
      }
    }))), images.length == 3 && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.main_photo),
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].blob_tn ? images[0].blob_tn : images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[1].blob_tn ? images[1].blob_tn : images[1].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[2].blob_tn ? images[2].blob_tn : images[2].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 25
      }
    }))), images.length >= 4 && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.main_photo),
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].blob_tn ? images[0].blob_tn : images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[1].blob_tn ? images[1].blob_tn : images[1].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[2].blob_tn ? images[2].blob_tn : images[2].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.show_more,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282,
        columnNumber: 25
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 27
      }
    }, "+4")), __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[3].blob_tn ? images[3].blob_tn : images[3].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285,
        columnNumber: 25
      }
    }))))) : __jsx("div", {
      style: {
        height: 50
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292,
        columnNumber: 15
      }
    }), type == "Photo" ? blob_tn && __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.post_content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 42
      }
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 299,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(blob_tn),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 300,
        columnNumber: 19
      }
    })))) : blob_tn && __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.videos,
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304,
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
        lineNumber: 305,
        columnNumber: 15
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.reactions_shares_status,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.reactions_status,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 319,
        columnNumber: 15
      }
    }, likeData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(likeData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321,
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
        lineNumber: 322,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 323,
        columnNumber: 21
      }
    }, likeData.length))), hahaData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(hahaData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 327,
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
        lineNumber: 328,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 329,
        columnNumber: 21
      }
    }, hahaData.length))), heartData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(heartData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 334,
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
        lineNumber: 335,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 336,
        columnNumber: 21
      }
    }, heartData.length))), wowData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(wowData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 341,
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
        lineNumber: 342,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 343,
        columnNumber: 21
      }
    }, wowData.length))), sadData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(sadData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 348,
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
        lineNumber: 349,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 350,
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
        lineNumber: 356,
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
        lineNumber: 369,
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
      lineNumber: 382,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aW1lbGluZS9UaW1lbGluZVBvc3RzLmpzIl0sIm5hbWVzIjpbInNvY2tldCIsImlvIiwiVGltZWxpbmVQb3N0cyIsImRhdGEiLCJvblVwZGF0ZVRpbWVsaW5lIiwib25SYXRlUG9zdCIsIm1vZGFsQWN0aW9ucyIsInNoYXJlQWN0aW9uIiwibGlrZUFjdGlvbiIsImRlbGV0ZUFjdGlvbiIsImRpc2FibGVEZWxldGUiLCJwYXJlbnREaXYiLCJhdXRoIiwiaW1hZ2VzTGlzdCIsImNvbmNhdCIsImFwcGx5IiwibWFwIiwiaXRlbSIsInR5cGUiLCJpbWFnZXMiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwib24iLCJlbWl0IiwidG9rZW4iLCJlIiwidmlkZW8iLCJ1c2VTdGF0ZSIsImFjdGl2ZVBvc3RJZCIsInNldEFjdGl2ZVBvc3RJZCIsIm1vZGFsTW9kZSIsInNldE1vZGFsTW9kZSIsInZpZGVvUmVmIiwidXNlTW9kYWwiLCJvcGVuIiwiaGlkZVBob3RvTW9kYWwiLCJzaG93UGhvdG9Nb2RhbCIsImhhbmRsZVNob3dDb21tZW50TW9kYWwiLCJpZCIsInRvZ2dsZUNvbW1lbnRTaG93IiwiaW5kZXgiLCJzZXRDb21tZW50U2hvdyIsImNvbW1lbnRTaG93IiwiZ2V0TGlrZUFjdGlvblVzZXJJbmZvIiwiZmluYWxEYXRhIiwiYWNjb3VudCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwic3R5bGVzIiwiYWN0aXZpdHlfY29udGVudCIsImNyZWF0ZWRBdCIsImNvbW1lbnRzIiwidGV4dCIsInZpZGVvcyIsInNoYXJlZCIsImNvbW1lbnRlZCIsImJsb2JfdG4iLCJ0aHVtYm5haWwiLCJyZWFjdGlvbnMiLCJ0ZXh0X2xpbmtzIiwicHVzaCIsInByb2ZpbGVVcmwiLCJ1bmRlZmluZWQiLCJwcm9maWxlUGhvdG8iLCJzcmMiLCJmdWxsTmFtZSIsInVzZXJuYW1lIiwibGlrZURhdGEiLCJmaWx0ZXIiLCJyZWFjdGlvbiIsImhlYXJ0RGF0YSIsIndvd0RhdGEiLCJoYWhhRGF0YSIsInNhZERhdGEiLCJwb3N0IiwiZm9udFNpemUiLCJtYXJnaW5SaWdodCIsImN1cnNvciIsInBvc3RfaGVhZGVyIiwiYXZhdGFyIiwidXNlcl9pbmZvIiwidXNlcl9uYW1lIiwiZGF0ZSIsIm1vbWVudCIsImZvcm1hdCIsImRlc2NyaXB0aW9uIiwibGVuZ3RoIiwiaSIsInBsYXllciIsInBsYXkiLCJlbCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjdXJyZW50IiwicG9zaXRpb25ZIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwieSIsImlubmVySGVpZ2h0IiwicGF1c2UiLCJ2aXNpYmlsaXR5IiwicG9zdF9jb250ZW50IiwiY2xhc3NuYW1lcyIsImltYWdlIiwiZ3JpZF8yIiwiZ3JpZF8zIiwiZ3JpZF80IiwiaW1hZ2VfaXRlbSIsIm1haW5fcGhvdG8iLCJzaG93X21vcmUiLCJoZWlnaHQiLCJyZWFjdGlvbnNfc2hhcmVzX3N0YXR1cyIsInJlYWN0aW9uc19zdGF0dXMiLCJyYXRpbmciLCJ0ZXJtIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJzaG93IiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsTUFBTSxHQUFHQyx3REFBRSxDQUFDLDJCQUFELENBQWpCOztBQUVBLFNBQVNDLGFBQVQsT0FBMko7QUFBQTs7QUFBQTs7QUFBQSxNQUFsSUMsSUFBa0ksUUFBbElBLElBQWtJO0FBQUEsTUFBNUhDLGdCQUE0SCxRQUE1SEEsZ0JBQTRIO0FBQUEsTUFBMUdDLFVBQTBHLFFBQTFHQSxVQUEw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QSxrQkFBcUIsQ0FBQ0MsUUFBRDtBQUFBLFNBQWU7QUFDeEM5RyxnQkFBWSxFQUFFK0csaUVBQWtCLENBQUM7QUFBRUMsVUFBSSxFQUFKQSxpREFBSUE7QUFBTixLQUFELEVBQVdGLFFBQVg7QUFEUSxHQUFmO0FBQUEsQ0FBM0I7O0FBSWVHLDJIQUFPLENBQUMsSUFBRCxFQUFPSixrQkFBUCxDQUFQLENBQWtDakgsYUFBbEMsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLmFlYWU4ZDEwMTM2OTQ3YmI5ZjZkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL3RpbWVsaW5lLXBvc3QubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyBQb3BvdmVyLCBUb29sdGlwIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgQ29tbWVudHMgZnJvbSAnLi9Db21tZW50cyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgQWN0aW9ucyBmcm9tICcuL0FjdGlvbnMnO1xyXG5pbXBvcnQgVHJpbVRleHQgZnJvbSAnLi4vY29tbW9uL1RyaW1UZXh0JztcclxuaW1wb3J0IHsgdXNlTW9kYWwgfSBmcm9tICdyZWFjdC1tb2RhbC1ob29rJztcclxuaW1wb3J0IENvbW1lbnRzTW9kYWwgZnJvbSAnLi9Db21tZW50c01vZGFsJztcclxuaW1wb3J0IFBob3Rvc01vZGFsIGZyb20gJy4uL3Byb2ZpbGUvUGhvdG9zTW9kYWwnO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJy4uL2NvbW1vbi9BdmF0YXInO1xyXG5pbXBvcnQgeyBzaG93IH0gZnJvbSAncmVkdXgtbW9kYWwnO1xyXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBBUEkgZnJvbSAnY29uZmlncy9BUEknO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICd2aWRlby1yZWFjdCc7XHJcbmltcG9ydCB7IFBob3Rvc1Byb3ZpZGVyIH0gIGZyb20gJ2NvbnRhaW5lcnMvUGhvdG9zL3N0b3JhZ2UvUGhvdG9Db250ZXh0JztcclxuaW1wb3J0IHsgTGlua1ByZXZpZXcgfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9MaW5rUHJldmlldyc7XHJcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcclxuY29uc3Qgc29ja2V0ID0gaW8oJ2h0dHBzOi8vd3d3LmZyZWVza2llcy5jb20nKTtcclxuXHJcbmZ1bmN0aW9uIFRpbWVsaW5lUG9zdHMoeyBkYXRhLCBvblVwZGF0ZVRpbWVsaW5lLCBvblJhdGVQb3N0LCBtb2RhbEFjdGlvbnMsIHNoYXJlQWN0aW9uLCBsaWtlQWN0aW9uLCBkZWxldGVBY3Rpb24sIGRpc2FibGVEZWxldGUsIHBhcmVudERpdiA9IG51bGwsIGF1dGggfSkge1xyXG4gIFxyXG4gIGNvbnN0IGltYWdlc0xpc3QgPSBbXS5jb25jYXQuYXBwbHkoW10sIGRhdGEubWFwKGl0ZW0gPT4gXHJcbiAgICB7IFxyXG4gICAgICAgIGlmKGl0ZW0udHlwZSA9PT0gJ1Bob3RvJykge1xyXG4gICAgICAgICAgcmV0dXJuICBpdGVtO1xyXG4gICAgICAgIH0gZWxzZSBpZihpdGVtLnR5cGUgPT09ICdWaWRlb0NsaXAnKSB7XHJcbiAgICAgICAgICByZXR1cm4gIFtdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gIGl0ZW0uaW1hZ2VzIFxyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbiAgKSlcclxuXHJcbiAgLy8gY29uc3QgdmlkZW9MaXN0ID0gW10uY29uY2F0LmFwcGx5KFtdLCBkYXRhLm1hcChpdGVtID0+IHtcclxuICAvLyAgIGlmKGl0ZW0udHlwZSA9PT0gJ1ZpZGVvQ2xpcCcpIHtcclxuICAvLyAgICAgcmV0dXJuIGl0ZW07XHJcbiAgLy8gICB9IGVsc2Uge1xyXG4gIC8vICAgICByZXR1cm4gaXRlbS52aWRlb3M7XHJcbiAgLy8gICB9XHJcbiAgLy8gfSkpXHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKCd2aWRlb0xpc3QnLCB2aWRlb0xpc3QpO1xyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhzb2NrZXQpO1xyXG4gICAgc29ja2V0Lm9uKCdjb25uZWN0JywgKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnY29ubmVjdGVkIScpXHJcbiAgICAgIHNvY2tldC5lbWl0KCdBVVRIJywgeyAndG9rZW4nOiBhdXRoLnRva2VuIH0pXHJcbiAgICAgIGNvbnNvbGUubG9nKCdBVVRIIFRPS0VOIFNFTlQnKVxyXG4gICAgfSlcclxuXHJcbiAgICBzb2NrZXQub24oJ0FVVEgnLCBlID0+IHtjb25zb2xlLmxvZyhlKTtcclxuICAgICAgaWYoZSAhPT0gMjAwKSB7XHJcblxyXG4gICAgICB9IGVsc2UgIHtcclxuICAgICAgICBzb2NrZXQub24oJ1ZJREVPX1JFQURZJywgKHZpZGVvKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygndmlkZW8gcmVhZHknLCB2aWRlbylcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuXHJcbiAgfSwgW10pXHJcblxyXG4gXHJcblxyXG4gIGNvbnN0IFthY3RpdmVQb3N0SWQsIHNldEFjdGl2ZVBvc3RJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbbW9kYWxNb2RlLCBzZXRNb2RhbE1vZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBsZXQgdmlkZW9SZWYgPSBbXTtcclxuICBjb25zdCBbc2hvd1Bob3RvTW9kYWwsIGhpZGVQaG90b01vZGFsXSA9IHVzZU1vZGFsKCh7IGluOiBvcGVuIH0pID0+IChcclxuICAgIDxQaG90b3NQcm92aWRlcj5cclxuICAgICAgPFBob3Rvc01vZGFsXHJcbiAgICAgICAgdGl0bGU9XCJQaG90byBkZXRhaWxcIlxyXG4gICAgICAgIHNob3dNb2RhbD17b3Blbn1cclxuICAgICAgICBvbkNsb3NlPXtoaWRlUGhvdG9Nb2RhbH1cclxuICAgICAgICBvblJhdGVQb3N0PXtvblJhdGVQb3N0fVxyXG4gICAgICAgIGRhdGE9e2ltYWdlc0xpc3R9XHJcbiAgICAgICAgbGlrZUFjdGlvbj17bGlrZUFjdGlvbn1cclxuICAgICAgICBzaGFyZUFjdGlvbj17c2hhcmVBY3Rpb259XHJcbiAgICAgICAgb25VcGRhdGVUaW1lbGluZT17b25VcGRhdGVUaW1lbGluZX1cclxuICAgICAgICBhdXRoPXthdXRofVxyXG4gICAgICAvPlxyXG4gICAgPC9QaG90b3NQcm92aWRlcj5cclxuICApKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2hvd0NvbW1lbnRNb2RhbCA9IChpZCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlUG9zdElkKGlkKTtcclxuICAgIHNldE1vZGFsTW9kZSghbW9kYWxNb2RlKTtcclxuICAgIC8vbW9kYWxBY3Rpb25zLnNob3coJ2NvbW1lbnRNb2RhbCcsIHsgaWQ6IGFjdGl2ZVBvc3RJZCB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVDb21tZW50U2hvdyA9IChpbmRleCkgPT5cclxuICAgIHNldENvbW1lbnRTaG93KGNvbW1lbnRTaG93ID09PSBpbmRleCA/IG51bGwgOiBpbmRleCk7XHJcblxyXG4gIGNvbnN0IGdldExpa2VBY3Rpb25Vc2VySW5mbyA9IChkYXRhKSA9PiB7XHJcbiAgICB2YXIgZmluYWxEYXRhID0gJyc7XHJcbiAgICBkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgZmluYWxEYXRhID0gZmluYWxEYXRhICsgJyAnICsgaXRlbS5hY2NvdW50LmZpcnN0TmFtZSArICcnICsgaXRlbS5hY2NvdW50Lmxhc3ROYW1lIDtcclxuICAgIH0pXHJcbiAgICByZXR1cm4gZmluYWxEYXRhO1xyXG4gIH1cclxuXHJcbiBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aXZpdHlfY29udGVudH0gPlxyXG4gICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgdmFyIHsgYWNjb3VudCwgY3JlYXRlZEF0LCB0eXBlLCBjb21tZW50cywgdGV4dCwgaW1hZ2VzLCB2aWRlb3MsIHNoYXJlZCwgY29tbWVudGVkLCBibG9iX3RuLCB0aHVtYm5haWwsIHJlYWN0aW9ucywgdGV4dF9saW5rcyB9ID0gaXRlbTtcclxuICAgICAgICB2aWRlb1JlZi5wdXNoKG51bGwpO1xyXG4gICAgICAgIGNvbnN0IHByb2ZpbGVVcmwgPSBhY2NvdW50ICE9PSBudWxsICYmIGFjY291bnQgIT09IHVuZGVmaW5lZCA/IGAke2FjY291bnQucHJvZmlsZVBob3RvPy5zcmN9YCA6IG51bGxcclxuICAgICAgICBjb25zdCBmdWxsTmFtZSA9IGAke2FjY291bnQ/LmZpcnN0TmFtZX0gJHthY2NvdW50Py5sYXN0TmFtZX1gO1xyXG4gICAgICAgIGNvbnN0IHVzZXJuYW1lID0gYWNjb3VudD8udXNlcm5hbWU7XHJcbiAgICAgICAgY29uc3QgbGlrZURhdGEgPSByZWFjdGlvbnM/IHJlYWN0aW9ucz8uZmlsdGVyKGl0ZW0gPT4gaXRlbS5yZWFjdGlvbiA9PSAnTElLRScpOltdO1xyXG4gICAgICAgIGNvbnN0IGhlYXJ0RGF0YSA9ICByZWFjdGlvbnM/IHJlYWN0aW9ucz8uZmlsdGVyKGl0ZW0gPT4gaXRlbS5yZWFjdGlvbiA9PSAnSEVBUlQnKTpbXTtcclxuICAgICAgICBjb25zdCB3b3dEYXRhID0gcmVhY3Rpb25zID8gcmVhY3Rpb25zPy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlYWN0aW9uID09ICdXT1cnKTpbXTtcclxuICAgICAgICBjb25zdCBoYWhhRGF0YSA9IHJlYWN0aW9ucyA/IHJlYWN0aW9ucz8uZmlsdGVyKGl0ZW0gPT4gaXRlbS5yZWFjdGlvbiA9PSAnSEFIQScpOltdO1xyXG4gICAgICAgIGNvbnN0IHNhZERhdGEgPSByZWFjdGlvbnMgPyByZWFjdGlvbnM/LmZpbHRlcihpdGVtID0+IGl0ZW0ucmVhY3Rpb24gPT0gJ1NBRCcpOltdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3R9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICB7IWRpc2FibGVEZWxldGU/PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICd3aW5kb3ctY2xvc2UnXX0gc3R5bGU9e3tcclxuICAgICAgICAgICAgICBmbG9hdDogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogMjUsXHJcbiAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDEwLFxyXG4gICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUFjdGlvbihpdGVtLmlkLCB0eXBlKX1cclxuICAgICAgICAgICAgLz46bnVsbH1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0X2hlYWRlcn0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9PlxyXG4gICAgICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgICB0ZXh0PXtmdWxsTmFtZX1cclxuICAgICAgICAgICAgICAgICAgdXJsPXtwcm9maWxlVXJsfVxyXG4gICAgICAgICAgICAgICAgICBzaXplPXs2MH1cclxuICAgICAgICAgICAgICAgICAgYm9yZGVyU2l6ZT17M31cclxuICAgICAgICAgICAgICAgICAgdXNlcm5hbWU9e3VzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyX2luZm99PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudXNlcl9uYW1lfT57ZnVsbE5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZX0+XHJcbiAgICAgICAgICAgICAge21vbWVudChjcmVhdGVkQXQpLmZvcm1hdCgnTU1NIERELCBZWVlZIC0gSEg6bW0gQScpfVxyXG4gICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICAgICAgPFRyaW1UZXh0IGxpbWl0PXsxMTB9PlxyXG4gICAgICAgICAgICAgICAgeyB0eXBlIT09J1NoYXJlJz90ZXh0OnNoYXJlZC50ZXh0IH1cclxuICAgICAgICAgICAgICA8L1RyaW1UZXh0PlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7dGV4dF9saW5rcyAmJiB0ZXh0X2xpbmtzLm1hcChpdGVtID0+IFxyXG4gICAgICAgICAgICAgIDxMaW5rUHJldmlldyBkYXRhPXtpdGVtfS8+ICBcclxuICAgICAgICAgICAgKSB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7dmlkZW9zICYmIHZpZGVvcy5sZW5ndGggPiAwICYmIHZpZGVvcy5tYXAoKHZpZGVvLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgc29ja2V0Lm9uKCdWSURFT19SRUFEWScsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndmlkZW8gcmVhZHknLCBlKVxyXG4gICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoJ1ZJREVPX1JFQURZJywgdmlkZW8uaWQpXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aWRlb3N9IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8dmlkZW8gaWQ9J2hscy1leGFtcGxlJyAgY2xhc3NOYW1lPVwidmlkZW8tanMgdmpzLWRlZmF1bHQtc2tpblwiIHdpZHRoPVwiOTYwXCIgaGVpZ2h0PVwiNTQwXCIgY29udHJvbHM+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIHR5cGU9XCJhcHBsaWNhdGlvbi94LW1wZWdVUkxcIiBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke3ZpZGVvLnNyY31gfSA+PC9zb3VyY2U+XHJcbiAgICAgICAgICAgICAgICAgIDwvdmlkZW8+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgPFBsYXllclxyXG4gICAgICAgICAgICAgICAgICAgIHBsYXlzSW5saW5lXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b3BsYXlcclxuICAgICAgICAgICAgICAgICAgICBtdXRlZFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc3Rlcj17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7dmlkZW8udGh1bWJuYWlsLnNyY31gfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17cGxheWVyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmKHZpZGVvUmVmICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvUmVmW2luZGV4XSA9IHBsYXllcjsgXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHt2aWRlby5zcmN9YH0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9QbGF5ZXI+IFxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHZpZGVvUmVmW2luZGV4XS5wbGF5KCl9IHJlZj17ZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZWwpIHJldHVybjsgXHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIC8vIGlmKHZpZGVvUmVmICYmIHZpZGVvUmVmW2luZGV4XSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gICB2YXIgcG9zaXRpb25ZID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueTtcclxuICAgICAgICAgICAgICAgICAgICAgIC8vICAgaWYocG9zaXRpb25ZID4gKHdpbmRvdy5pbm5lckhlaWdodC8yKSAmJiBwb3NpdGlvblkgPCB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB2aWRlb1JlZltpbmRleF0ucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHZpZGVvUmVmW2luZGV4XS5wYXVzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBpZihwYXJlbnREaXYgIT09IG51bGwgJiYgcGFyZW50RGl2Py5jdXJyZW50ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwYXJlbnREaXY/LmN1cnJlbnQ/LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodmlkZW9SZWYgJiYgdmlkZW9SZWZbaW5kZXhdICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvc2l0aW9uWSA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocG9zaXRpb25ZID4gKHdpbmRvdy5pbm5lckhlaWdodC8yKSAmJiBwb3NpdGlvblkgPCB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvUmVmW2luZGV4XS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvUmVmW2luZGV4XS5wYXVzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB2aXNpYmlsaXR5OiAnaGlkZGVuJyB9fVxyXG4gICAgICAgICAgICAgICAgICA+QnV0dG9uIEZvciBwb3NpdGlvbiBvZiBWaWRlbzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICApfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHtpbWFnZXMgJiYgaW1hZ2VzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0X2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmltYWdlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgW3N0eWxlcy5ncmlkXzJdOiBpbWFnZXMubGVuZ3RoID09IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgW3N0eWxlcy5ncmlkXzNdOiBpbWFnZXMubGVuZ3RoID09IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgW3N0eWxlcy5ncmlkXzRdOiBpbWFnZXMubGVuZ3RoID09IDQsXHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7aW1hZ2VzLmxlbmd0aCA9PSAxICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX2l0ZW19IG9uQ2xpY2s9e3Nob3dQaG90b01vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMF0uYmxvYl90bj9pbWFnZXNbMF0uYmxvYl90bjppbWFnZXNbMF0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICB7aW1hZ2VzLmxlbmd0aCA9PSAyICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmltYWdlX2l0ZW0sIHN0eWxlcy5tYWluX3Bob3RvKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c2hvd1Bob3RvTW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMF0uYmxvYl90bj9pbWFnZXNbMF0uYmxvYl90bjppbWFnZXNbMF0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfaXRlbX0gb25DbGljaz17c2hvd1Bob3RvTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzFdLmJsb2JfdG4/aW1hZ2VzWzFdLmJsb2JfdG46aW1hZ2VzWzFdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICB7aW1hZ2VzLmxlbmd0aCA9PSAzICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmltYWdlX2l0ZW0sIHN0eWxlcy5tYWluX3Bob3RvKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c2hvd1Bob3RvTW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMF0uYmxvYl90bj9pbWFnZXNbMF0uYmxvYl90bjppbWFnZXNbMF0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfaXRlbX0gb25DbGljaz17c2hvd1Bob3RvTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzFdLmJsb2JfdG4/aW1hZ2VzWzFdLmJsb2JfdG46aW1hZ2VzWzFdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX2l0ZW19IG9uQ2xpY2s9e3Nob3dQaG90b01vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1syXS5ibG9iX3RuP2ltYWdlc1syXS5ibG9iX3RuOmltYWdlc1syXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAge2ltYWdlcy5sZW5ndGggPj0gNCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5pbWFnZV9pdGVtLCBzdHlsZXMubWFpbl9waG90byl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dQaG90b01vZGFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzBdLmJsb2JfdG4/aW1hZ2VzWzBdLmJsb2JfdG46aW1hZ2VzWzBdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX2l0ZW19IG9uQ2xpY2s9e3Nob3dQaG90b01vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1sxXS5ibG9iX3RuP2ltYWdlc1sxXS5ibG9iX3RuOmltYWdlc1sxXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZV9pdGVtfSBvbkNsaWNrPXtzaG93UGhvdG9Nb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMl0uYmxvYl90bj9pbWFnZXNbMl0uYmxvYl90bjppbWFnZXNbMl0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfaXRlbX0gb25DbGljaz17c2hvd1Bob3RvTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNob3dfbW9yZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+KzQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzNdLmJsb2JfdG4/aW1hZ2VzWzNdLmJsb2JfdG46aW1hZ2VzWzNdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogNTAgfX0gLz5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHt0eXBlID09IFwiUGhvdG9cIj8gYmxvYl90biAmJiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RfY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5pbWFnZSl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfaXRlbX0gb25DbGljaz17c2hvd1Bob3RvTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7YmxvYl90bn1gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+OlxyXG4gICAgICAgICAgICBibG9iX3RuICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmlkZW9zfSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICA8UGxheWVyXHJcbiAgICAgICAgICAgICAgICBwbGF5c0lubGluZVxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlcclxuICAgICAgICAgICAgICAgIG11dGVkXHJcbiAgICAgICAgICAgICAgICBwb3N0ZXI9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke3RodW1ibmFpbC5zcmN9YH1cclxuICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7YmxvYl90bn1gfVxyXG4gICAgICAgICAgICAgICAgcmVmPXtwbGF5ZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAvLyB2aWRlb1JlZiA9IHBsYXllcjtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlYWN0aW9uc19zaGFyZXNfc3RhdHVzfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlYWN0aW9uc19zdGF0dXN9PlxyXG4gICAgICAgICAgICAgICAgeyBsaWtlRGF0YS5sZW5ndGggPiAwICYmIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPXtnZXRMaWtlQWN0aW9uVXNlckluZm8obGlrZURhdGEpfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ3RodW1icy11cCddfSBzaXplPVwiMXhcIiAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcid9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2xpa2VEYXRhLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD48Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHsgaGFoYURhdGEubGVuZ3RoID4gMCAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKGhhaGFEYXRhKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdncmluJ119IHNpemU9XCIxeFwiICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJ319Lz4gXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2hhaGFEYXRhLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7IGhlYXJ0RGF0YS5sZW5ndGggPiAwICYmIDw+IFxyXG4gICAgICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKGhlYXJ0RGF0YSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAnaGVhcnQnXX0gc2l6ZT1cIjF4XCIgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInfX0vPiBcclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aGVhcnREYXRhLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7IHdvd0RhdGEubGVuZ3RoID4gMCAmJiA8PiBcclxuICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9e2dldExpa2VBY3Rpb25Vc2VySW5mbyh3b3dEYXRhKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdsYXVnaCddfSBzaXplPVwiMXhcIiAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcid9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3dvd0RhdGEubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICA8Lz4gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7IHNhZERhdGEubGVuZ3RoID4gMCAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKHNhZERhdGEpfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ2Zyb3duJ119IHNpemU9XCIxeFwiICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJ319Lz4gXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3NhZERhdGEubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxBY3Rpb25zXHJcbiAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgdHlwZT17aXRlbS50eXBlfVxyXG4gICAgICAgICAgICAgIHBvc3RSYXRlPXtpdGVtLnJhdGluZ31cclxuICAgICAgICAgICAgICBjb21tZW50cz17Y29tbWVudHN9XHJcbiAgICAgICAgICAgICAgb25SYXRlUG9zdD17b25SYXRlUG9zdH1cclxuICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XHJcbiAgICAgICAgICAgICAgbGlrZUFjdGlvbj17KHRlcm0pID0+IGxpa2VBY3Rpb24odHlwZSwgaXRlbS5pZCwgdGVybSl9XHJcbiAgICAgICAgICAgICAgc2hhcmVBY3Rpb249eygpID0+IHNoYXJlQWN0aW9uKHR5cGUgIT09ICdTaGFyZSc/dHlwZTpzaGFyZWQudHlwZSwgdHlwZSAhPT0gJ1NoYXJlJz9pdGVtLmlkOnNoYXJlZC5pZCl9XHJcbiAgICAgICAgICAgICAgYWN0aW9ucz17XHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7IGhhbmRsZVNob3dDb21tZW50TW9kYWwoaXRlbS5pZCkgfSBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxDb21tZW50c1xyXG4gICAgICAgICAgICAgIGlkPXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgIHR5cGU9e2l0ZW0udHlwZX1cclxuICAgICAgICAgICAgICBkYXRhPXtjb21tZW50c31cclxuICAgICAgICAgICAgICBvblVwZGF0ZVRpbWVsaW5lPXtvblVwZGF0ZVRpbWVsaW5lfVxyXG4gICAgICAgICAgICAgIGFjdGl2ZVBvc3RJZD17YWN0aXZlUG9zdElkfVxyXG4gICAgICAgICAgICAgIG1vZGFsTW9kZT17bW9kYWxNb2RlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG5cclxuICAgICAgPENvbW1lbnRzTW9kYWxcclxuICAgICAgICBhY3RpdmVQb3N0SWQ9e2FjdGl2ZVBvc3RJZH1cclxuICAgICAgICBwb3N0RGF0YT17ZGF0YX1cclxuICAgICAgICBvblVwZGF0ZVRpbWVsaW5lPXtvblVwZGF0ZVRpbWVsaW5lfVxyXG4gICAgICAgIHRpdGxlPVwiQ29tbWVudHNcIlxyXG4gICAgICAgIC8vIHNob3dNb2RhbD17b3Blbn1cclxuICAgICAgICAvLyBvbkNsb3NlPXtoaWRlQ29tbWVudE1vZGFsfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gIG1vZGFsQWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKHsgc2hvdyB9LCBkaXNwYXRjaClcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoVGltZWxpbmVQb3N0cyk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=