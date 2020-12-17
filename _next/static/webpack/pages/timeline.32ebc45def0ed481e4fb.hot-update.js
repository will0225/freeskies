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
  }));
  var videoList = [].concat.apply([], data.map(function (item) {
    if (item.type === 'VideoClip') {
      return item;
    } else {
      return item.videos;
    }
  })); // console.log('videoList', videoList);

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
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
        socket.on('VIDEO_READY', function (e) {
          console.log('video ready', e);
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
        lineNumber: 74,
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
        lineNumber: 75,
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
      lineNumber: 109,
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
        lineNumber: 123,
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
        lineNumber: 124,
        columnNumber: 29
      }
    }) : null, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.post_header,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.avatar,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
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
        lineNumber: 134,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.user_info,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 15
      }
    }, __jsx("p", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.user_name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 17
      }
    }, fullName))), __jsx("p", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.date,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 13
      }
    }, moment__WEBPACK_IMPORTED_MODULE_8___default()(createdAt).format('MMM DD, YYYY - HH:mm A')), __jsx("p", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.description,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 13
      }
    }, __jsx(_common_TrimText__WEBPACK_IMPORTED_MODULE_10__["default"], {
      limit: 110,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 15
      }
    }, type !== 'Share' ? text : shared.text)), text_links && text_links.map(function (item) {
      return __jsx(components_common_LinkPreview__WEBPACK_IMPORTED_MODULE_21__["LinkPreview"], {
        data: item,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
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
          lineNumber: 168,
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
          lineNumber: 173,
          columnNumber: 19
        }
      }, __jsx("source", {
        src: "https://www.freeskies.com/static/".concat(video.src),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184,
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
          lineNumber: 186,
          columnNumber: 19
        }
      }, "Button For position of Video"));
    }), images && images.length > 0 ? __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.post_content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image, (_classnames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.grid_2, images.length == 2), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.grid_3, images.length == 3), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.grid_4, images.length == 4), _classnames)),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 17
      }
    }, images.length == 1 && __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].blob_tn ? images[0].blob_tn : images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 23
      }
    })), images.length == 2 && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.main_photo),
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].blob_tn ? images[0].blob_tn : images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[1].blob_tn ? images[1].blob_tn : images[1].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 25
      }
    }))), images.length == 3 && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.main_photo),
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].blob_tn ? images[0].blob_tn : images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[1].blob_tn ? images[1].blob_tn : images[1].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[2].blob_tn ? images[2].blob_tn : images[2].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 25
      }
    }))), images.length >= 4 && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.main_photo),
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].blob_tn ? images[0].blob_tn : images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[1].blob_tn ? images[1].blob_tn : images[1].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[2].blob_tn ? images[2].blob_tn : images[2].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.show_more,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 25
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 27
      }
    }, "+4")), __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[3].blob_tn ? images[3].blob_tn : images[3].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 25
      }
    }))))) : __jsx("div", {
      style: {
        height: 50
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 15
      }
    }), type == "Photo" ? blob_tn && __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.post_content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 42
      }
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 297,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(blob_tn),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 19
      }
    })))) : blob_tn && __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.videos,
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302,
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
        lineNumber: 303,
        columnNumber: 15
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.reactions_shares_status,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.reactions_status,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317,
        columnNumber: 15
      }
    }, likeData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(likeData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 319,
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
        lineNumber: 320,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321,
        columnNumber: 21
      }
    }, likeData.length))), hahaData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(hahaData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 325,
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
        lineNumber: 326,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 21
      }
    }, hahaData.length))), heartData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(heartData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 332,
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
        lineNumber: 333,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 334,
        columnNumber: 21
      }
    }, heartData.length))), wowData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(wowData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 339,
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
        lineNumber: 340,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 341,
        columnNumber: 21
      }
    }, wowData.length))), sadData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(sadData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 346,
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
        lineNumber: 347,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 348,
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
        lineNumber: 354,
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
        lineNumber: 367,
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
      lineNumber: 380,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aW1lbGluZS9UaW1lbGluZVBvc3RzLmpzIl0sIm5hbWVzIjpbInNvY2tldCIsImlvIiwiVGltZWxpbmVQb3N0cyIsImRhdGEiLCJvblVwZGF0ZVRpbWVsaW5lIiwib25SYXRlUG9zdCIsIm1vZGFsQWN0aW9ucyIsInNoYXJlQWN0aW9uIiwibGlrZUFjdGlvbiIsImRlbGV0ZUFjdGlvbiIsImRpc2FibGVEZWxldGUiLCJwYXJlbnREaXYiLCJhdXRoIiwiaW1hZ2VzTGlzdCIsImNvbmNhdCIsImFwcGx5IiwibWFwIiwiaXRlbSIsInR5cGUiLCJpbWFnZXMiLCJ2aWRlb0xpc3QiLCJ2aWRlb3MiLCJ1c2VFZmZlY3QiLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJlbWl0IiwidG9rZW4iLCJlIiwidXNlU3RhdGUiLCJhY3RpdmVQb3N0SWQiLCJzZXRBY3RpdmVQb3N0SWQiLCJtb2RhbE1vZGUiLCJzZXRNb2RhbE1vZGUiLCJ2aWRlb1JlZiIsInVzZU1vZGFsIiwib3BlbiIsImhpZGVQaG90b01vZGFsIiwic2hvd1Bob3RvTW9kYWwiLCJoYW5kbGVTaG93Q29tbWVudE1vZGFsIiwiaWQiLCJ0b2dnbGVDb21tZW50U2hvdyIsImluZGV4Iiwic2V0Q29tbWVudFNob3ciLCJjb21tZW50U2hvdyIsImdldExpa2VBY3Rpb25Vc2VySW5mbyIsImZpbmFsRGF0YSIsImFjY291bnQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInN0eWxlcyIsImFjdGl2aXR5X2NvbnRlbnQiLCJjcmVhdGVkQXQiLCJjb21tZW50cyIsInRleHQiLCJzaGFyZWQiLCJjb21tZW50ZWQiLCJibG9iX3RuIiwidGh1bWJuYWlsIiwicmVhY3Rpb25zIiwidGV4dF9saW5rcyIsInB1c2giLCJwcm9maWxlVXJsIiwidW5kZWZpbmVkIiwicHJvZmlsZVBob3RvIiwic3JjIiwiZnVsbE5hbWUiLCJ1c2VybmFtZSIsImxpa2VEYXRhIiwiZmlsdGVyIiwicmVhY3Rpb24iLCJoZWFydERhdGEiLCJ3b3dEYXRhIiwiaGFoYURhdGEiLCJzYWREYXRhIiwicG9zdCIsImZvbnRTaXplIiwibWFyZ2luUmlnaHQiLCJjdXJzb3IiLCJwb3N0X2hlYWRlciIsImF2YXRhciIsInVzZXJfaW5mbyIsInVzZXJfbmFtZSIsImRhdGUiLCJtb21lbnQiLCJmb3JtYXQiLCJkZXNjcmlwdGlvbiIsImxlbmd0aCIsInZpZGVvIiwiaSIsInBsYXllciIsInBsYXkiLCJlbCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjdXJyZW50IiwicG9zaXRpb25ZIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwieSIsImlubmVySGVpZ2h0IiwicGF1c2UiLCJ2aXNpYmlsaXR5IiwicG9zdF9jb250ZW50IiwiY2xhc3NuYW1lcyIsImltYWdlIiwiZ3JpZF8yIiwiZ3JpZF8zIiwiZ3JpZF80IiwiaW1hZ2VfaXRlbSIsIm1haW5fcGhvdG8iLCJzaG93X21vcmUiLCJoZWlnaHQiLCJyZWFjdGlvbnNfc2hhcmVzX3N0YXR1cyIsInJlYWN0aW9uc19zdGF0dXMiLCJyYXRpbmciLCJ0ZXJtIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJzaG93IiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsTUFBTSxHQUFHQyx3REFBRSxDQUFDLDJCQUFELENBQWpCOztBQUVBLFNBQVNDLGFBQVQsT0FBMko7QUFBQTs7QUFBQTs7QUFBQSxNQUFsSUMsSUFBa0ksUUFBbElBLElBQWtJO0FBQUEsTUFBNUhDLGdCQUE0SCxRQUE1SEEsZ0JBQTRIO0FBQUEsTUFBMUdDLFVBQTBH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Z0IsRUFBRUMsZ0JBSHBCO0FBSUUsU0FBSyxFQUFDLFVBSlIsQ0FLRTtBQUNBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQS9RRixDQURGO0FBMFJEOztHQTlXUUYsYTtVQWlEa0NpQywwRDs7O0tBakRsQ2pDLGE7O0FBZ1hULElBQU1rSCxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQ7QUFBQSxTQUFlO0FBQ3hDL0csZ0JBQVksRUFBRWdILGlFQUFrQixDQUFDO0FBQUVDLFVBQUksRUFBSkEsaURBQUlBO0FBQU4sS0FBRCxFQUFXRixRQUFYO0FBRFEsR0FBZjtBQUFBLENBQTNCOztBQUllRywySEFBTyxDQUFDLElBQUQsRUFBT0osa0JBQVAsQ0FBUCxDQUFrQ2xILGFBQWxDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGltZWxpbmUuMzJlYmM0NWRlZjBlZDQ4MWU0ZmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvdGltZWxpbmUtcG9zdC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IFBvcG92ZXIsIFRvb2x0aXAgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBDb21tZW50cyBmcm9tICcuL0NvbW1lbnRzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBBY3Rpb25zIGZyb20gJy4vQWN0aW9ucyc7XHJcbmltcG9ydCBUcmltVGV4dCBmcm9tICcuLi9jb21tb24vVHJpbVRleHQnO1xyXG5pbXBvcnQgeyB1c2VNb2RhbCB9IGZyb20gJ3JlYWN0LW1vZGFsLWhvb2snO1xyXG5pbXBvcnQgQ29tbWVudHNNb2RhbCBmcm9tICcuL0NvbW1lbnRzTW9kYWwnO1xyXG5pbXBvcnQgUGhvdG9zTW9kYWwgZnJvbSAnLi4vcHJvZmlsZS9QaG90b3NNb2RhbCc7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnLi4vY29tbW9uL0F2YXRhcic7XHJcbmltcG9ydCB7IHNob3cgfSBmcm9tICdyZWR1eC1tb2RhbCc7XHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IEFQSSBmcm9tICdjb25maWdzL0FQSSc7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJ3ZpZGVvLXJlYWN0JztcclxuaW1wb3J0IHsgUGhvdG9zUHJvdmlkZXIgfSAgZnJvbSAnY29udGFpbmVycy9QaG90b3Mvc3RvcmFnZS9QaG90b0NvbnRleHQnO1xyXG5pbXBvcnQgeyBMaW5rUHJldmlldyB9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL0xpbmtQcmV2aWV3JztcclxuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xyXG5jb25zdCBzb2NrZXQgPSBpbygnaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbScpO1xyXG5cclxuZnVuY3Rpb24gVGltZWxpbmVQb3N0cyh7IGRhdGEsIG9uVXBkYXRlVGltZWxpbmUsIG9uUmF0ZVBvc3QsIG1vZGFsQWN0aW9ucywgc2hhcmVBY3Rpb24sIGxpa2VBY3Rpb24sIGRlbGV0ZUFjdGlvbiwgZGlzYWJsZURlbGV0ZSwgcGFyZW50RGl2ID0gbnVsbCwgYXV0aCB9KSB7XHJcbiAgXHJcbiAgY29uc3QgaW1hZ2VzTGlzdCA9IFtdLmNvbmNhdC5hcHBseShbXSwgZGF0YS5tYXAoaXRlbSA9PiBcclxuICAgIHsgXHJcbiAgICAgICAgaWYoaXRlbS50eXBlID09PSAnUGhvdG8nKSB7XHJcbiAgICAgICAgICByZXR1cm4gIGl0ZW07XHJcbiAgICAgICAgfSBlbHNlIGlmKGl0ZW0udHlwZSA9PT0gJ1ZpZGVvQ2xpcCcpIHtcclxuICAgICAgICAgIHJldHVybiAgW107XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiAgaXRlbS5pbWFnZXMgXHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuICApKVxyXG5cclxuICBjb25zdCB2aWRlb0xpc3QgPSBbXS5jb25jYXQuYXBwbHkoW10sIGRhdGEubWFwKGl0ZW0gPT4ge1xyXG4gICAgaWYoaXRlbS50eXBlID09PSAnVmlkZW9DbGlwJykge1xyXG4gICAgICByZXR1cm4gaXRlbTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBpdGVtLnZpZGVvcztcclxuICAgIH1cclxuICB9KSlcclxuXHJcbiAgLy8gY29uc29sZS5sb2coJ3ZpZGVvTGlzdCcsIHZpZGVvTGlzdCk7XHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIFxyXG4gICAgc29ja2V0Lm9uKCdjb25uZWN0JywgKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnY29ubmVjdGVkIScpXHJcbiAgICAgIHNvY2tldC5lbWl0KCdBVVRIJywgeyAndG9rZW4nOiBhdXRoLnRva2VuIH0pXHJcbiAgICAgIGNvbnNvbGUubG9nKCdBVVRIIFRPS0VOIFNFTlQnKVxyXG4gICAgfSlcclxuXHJcbiAgICBzb2NrZXQub24oJ0FVVEgnLCBlID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZSlcclxuICAgICAgaWYoZSAhPT0gMjAwKSB7XHJcblxyXG4gICAgICB9IGVsc2UgIHtcclxuICAgICAgICBzb2NrZXQub24oJ1ZJREVPX1JFQURZJywgKGUpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCd2aWRlbyByZWFkeScsIGUpXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcblxyXG4gIH0sIFtdKVxyXG4gIGNvbnN0IFthY3RpdmVQb3N0SWQsIHNldEFjdGl2ZVBvc3RJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbbW9kYWxNb2RlLCBzZXRNb2RhbE1vZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBsZXQgdmlkZW9SZWYgPSBbXTtcclxuICBjb25zdCBbc2hvd1Bob3RvTW9kYWwsIGhpZGVQaG90b01vZGFsXSA9IHVzZU1vZGFsKCh7IGluOiBvcGVuIH0pID0+IChcclxuICAgIDxQaG90b3NQcm92aWRlcj5cclxuICAgICAgPFBob3Rvc01vZGFsXHJcbiAgICAgICAgdGl0bGU9XCJQaG90byBkZXRhaWxcIlxyXG4gICAgICAgIHNob3dNb2RhbD17b3Blbn1cclxuICAgICAgICBvbkNsb3NlPXtoaWRlUGhvdG9Nb2RhbH1cclxuICAgICAgICBvblJhdGVQb3N0PXtvblJhdGVQb3N0fVxyXG4gICAgICAgIGRhdGE9e2ltYWdlc0xpc3R9XHJcbiAgICAgICAgbGlrZUFjdGlvbj17bGlrZUFjdGlvbn1cclxuICAgICAgICBzaGFyZUFjdGlvbj17c2hhcmVBY3Rpb259XHJcbiAgICAgICAgb25VcGRhdGVUaW1lbGluZT17b25VcGRhdGVUaW1lbGluZX1cclxuICAgICAgICBhdXRoPXthdXRofVxyXG4gICAgICAvPlxyXG4gICAgPC9QaG90b3NQcm92aWRlcj5cclxuICApKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2hvd0NvbW1lbnRNb2RhbCA9IChpZCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlUG9zdElkKGlkKTtcclxuICAgIHNldE1vZGFsTW9kZSghbW9kYWxNb2RlKTtcclxuICAgIC8vbW9kYWxBY3Rpb25zLnNob3coJ2NvbW1lbnRNb2RhbCcsIHsgaWQ6IGFjdGl2ZVBvc3RJZCB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVDb21tZW50U2hvdyA9IChpbmRleCkgPT5cclxuICAgIHNldENvbW1lbnRTaG93KGNvbW1lbnRTaG93ID09PSBpbmRleCA/IG51bGwgOiBpbmRleCk7XHJcblxyXG4gIGNvbnN0IGdldExpa2VBY3Rpb25Vc2VySW5mbyA9IChkYXRhKSA9PiB7XHJcbiAgICB2YXIgZmluYWxEYXRhID0gJyc7XHJcbiAgICBkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgZmluYWxEYXRhID0gZmluYWxEYXRhICsgJyAnICsgaXRlbS5hY2NvdW50LmZpcnN0TmFtZSArICcnICsgaXRlbS5hY2NvdW50Lmxhc3ROYW1lIDtcclxuICAgIH0pXHJcbiAgICByZXR1cm4gZmluYWxEYXRhO1xyXG4gIH1cclxuXHJcbiBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aXZpdHlfY29udGVudH0gPlxyXG4gICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgdmFyIHsgYWNjb3VudCwgY3JlYXRlZEF0LCB0eXBlLCBjb21tZW50cywgdGV4dCwgaW1hZ2VzLCB2aWRlb3MsIHNoYXJlZCwgY29tbWVudGVkLCBibG9iX3RuLCB0aHVtYm5haWwsIHJlYWN0aW9ucywgdGV4dF9saW5rcyB9ID0gaXRlbTtcclxuICAgICAgICB2aWRlb1JlZi5wdXNoKG51bGwpO1xyXG4gICAgICAgIGNvbnN0IHByb2ZpbGVVcmwgPSBhY2NvdW50ICE9PSBudWxsICYmIGFjY291bnQgIT09IHVuZGVmaW5lZCA/IGAke2FjY291bnQucHJvZmlsZVBob3RvPy5zcmN9YCA6IG51bGxcclxuICAgICAgICBjb25zdCBmdWxsTmFtZSA9IGAke2FjY291bnQ/LmZpcnN0TmFtZX0gJHthY2NvdW50Py5sYXN0TmFtZX1gO1xyXG4gICAgICAgIGNvbnN0IHVzZXJuYW1lID0gYWNjb3VudD8udXNlcm5hbWU7XHJcbiAgICAgICAgY29uc3QgbGlrZURhdGEgPSByZWFjdGlvbnM/IHJlYWN0aW9ucz8uZmlsdGVyKGl0ZW0gPT4gaXRlbS5yZWFjdGlvbiA9PSAnTElLRScpOltdO1xyXG4gICAgICAgIGNvbnN0IGhlYXJ0RGF0YSA9ICByZWFjdGlvbnM/IHJlYWN0aW9ucz8uZmlsdGVyKGl0ZW0gPT4gaXRlbS5yZWFjdGlvbiA9PSAnSEVBUlQnKTpbXTtcclxuICAgICAgICBjb25zdCB3b3dEYXRhID0gcmVhY3Rpb25zID8gcmVhY3Rpb25zPy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlYWN0aW9uID09ICdXT1cnKTpbXTtcclxuICAgICAgICBjb25zdCBoYWhhRGF0YSA9IHJlYWN0aW9ucyA/IHJlYWN0aW9ucz8uZmlsdGVyKGl0ZW0gPT4gaXRlbS5yZWFjdGlvbiA9PSAnSEFIQScpOltdO1xyXG4gICAgICAgIGNvbnN0IHNhZERhdGEgPSByZWFjdGlvbnMgPyByZWFjdGlvbnM/LmZpbHRlcihpdGVtID0+IGl0ZW0ucmVhY3Rpb24gPT0gJ1NBRCcpOltdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3R9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICB7IWRpc2FibGVEZWxldGU/PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICd3aW5kb3ctY2xvc2UnXX0gc3R5bGU9e3tcclxuICAgICAgICAgICAgICBmbG9hdDogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogMjUsXHJcbiAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDEwLFxyXG4gICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUFjdGlvbihpdGVtLmlkLCB0eXBlKX1cclxuICAgICAgICAgICAgLz46bnVsbH1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0X2hlYWRlcn0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9PlxyXG4gICAgICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgICB0ZXh0PXtmdWxsTmFtZX1cclxuICAgICAgICAgICAgICAgICAgdXJsPXtwcm9maWxlVXJsfVxyXG4gICAgICAgICAgICAgICAgICBzaXplPXs2MH1cclxuICAgICAgICAgICAgICAgICAgYm9yZGVyU2l6ZT17M31cclxuICAgICAgICAgICAgICAgICAgdXNlcm5hbWU9e3VzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyX2luZm99PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudXNlcl9uYW1lfT57ZnVsbE5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZX0+XHJcbiAgICAgICAgICAgICAge21vbWVudChjcmVhdGVkQXQpLmZvcm1hdCgnTU1NIERELCBZWVlZIC0gSEg6bW0gQScpfVxyXG4gICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICAgICAgPFRyaW1UZXh0IGxpbWl0PXsxMTB9PlxyXG4gICAgICAgICAgICAgICAgeyB0eXBlIT09J1NoYXJlJz90ZXh0OnNoYXJlZC50ZXh0IH1cclxuICAgICAgICAgICAgICA8L1RyaW1UZXh0PlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7dGV4dF9saW5rcyAmJiB0ZXh0X2xpbmtzLm1hcChpdGVtID0+IFxyXG4gICAgICAgICAgICAgIDxMaW5rUHJldmlldyBkYXRhPXtpdGVtfS8+ICBcclxuICAgICAgICAgICAgKSB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7dmlkZW9zICYmIHZpZGVvcy5sZW5ndGggPiAwICYmIHZpZGVvcy5tYXAoKHZpZGVvLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgc29ja2V0Lm9uKCdWSURFT19SRUFEWScsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndmlkZW8gcmVhZHknLCBlKVxyXG4gICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoJ1ZJREVPX1JFQURZJywgdmlkZW8uaWQpXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aWRlb3N9IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8dmlkZW8gaWQ9J2hscy1leGFtcGxlJyAgY2xhc3NOYW1lPVwidmlkZW8tanMgdmpzLWRlZmF1bHQtc2tpblwiIHdpZHRoPVwiOTYwXCIgaGVpZ2h0PVwiNTQwXCIgY29udHJvbHM+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIHR5cGU9XCJhcHBsaWNhdGlvbi94LW1wZWdVUkxcIiBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke3ZpZGVvLnNyY31gfSA+PC9zb3VyY2U+XHJcbiAgICAgICAgICAgICAgICAgIDwvdmlkZW8+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgPFBsYXllclxyXG4gICAgICAgICAgICAgICAgICAgIHBsYXlzSW5saW5lXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b3BsYXlcclxuICAgICAgICAgICAgICAgICAgICBtdXRlZFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc3Rlcj17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7dmlkZW8udGh1bWJuYWlsLnNyY31gfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17cGxheWVyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmKHZpZGVvUmVmICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvUmVmW2luZGV4XSA9IHBsYXllcjsgXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHt2aWRlby5zcmN9YH0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9QbGF5ZXI+IFxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHZpZGVvUmVmW2luZGV4XS5wbGF5KCl9IHJlZj17ZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZWwpIHJldHVybjsgXHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIC8vIGlmKHZpZGVvUmVmICYmIHZpZGVvUmVmW2luZGV4XSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gICB2YXIgcG9zaXRpb25ZID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueTtcclxuICAgICAgICAgICAgICAgICAgICAgIC8vICAgaWYocG9zaXRpb25ZID4gKHdpbmRvdy5pbm5lckhlaWdodC8yKSAmJiBwb3NpdGlvblkgPCB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB2aWRlb1JlZltpbmRleF0ucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHZpZGVvUmVmW2luZGV4XS5wYXVzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBpZihwYXJlbnREaXYgIT09IG51bGwgJiYgcGFyZW50RGl2Py5jdXJyZW50ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwYXJlbnREaXY/LmN1cnJlbnQ/LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodmlkZW9SZWYgJiYgdmlkZW9SZWZbaW5kZXhdICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvc2l0aW9uWSA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocG9zaXRpb25ZID4gKHdpbmRvdy5pbm5lckhlaWdodC8yKSAmJiBwb3NpdGlvblkgPCB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvUmVmW2luZGV4XS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvUmVmW2luZGV4XS5wYXVzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB2aXNpYmlsaXR5OiAnaGlkZGVuJyB9fVxyXG4gICAgICAgICAgICAgICAgICA+QnV0dG9uIEZvciBwb3NpdGlvbiBvZiBWaWRlbzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICApfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHtpbWFnZXMgJiYgaW1hZ2VzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0X2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmltYWdlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgW3N0eWxlcy5ncmlkXzJdOiBpbWFnZXMubGVuZ3RoID09IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgW3N0eWxlcy5ncmlkXzNdOiBpbWFnZXMubGVuZ3RoID09IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgW3N0eWxlcy5ncmlkXzRdOiBpbWFnZXMubGVuZ3RoID09IDQsXHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7aW1hZ2VzLmxlbmd0aCA9PSAxICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX2l0ZW19IG9uQ2xpY2s9e3Nob3dQaG90b01vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMF0uYmxvYl90bj9pbWFnZXNbMF0uYmxvYl90bjppbWFnZXNbMF0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICB7aW1hZ2VzLmxlbmd0aCA9PSAyICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmltYWdlX2l0ZW0sIHN0eWxlcy5tYWluX3Bob3RvKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c2hvd1Bob3RvTW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMF0uYmxvYl90bj9pbWFnZXNbMF0uYmxvYl90bjppbWFnZXNbMF0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfaXRlbX0gb25DbGljaz17c2hvd1Bob3RvTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzFdLmJsb2JfdG4/aW1hZ2VzWzFdLmJsb2JfdG46aW1hZ2VzWzFdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICB7aW1hZ2VzLmxlbmd0aCA9PSAzICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmltYWdlX2l0ZW0sIHN0eWxlcy5tYWluX3Bob3RvKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c2hvd1Bob3RvTW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMF0uYmxvYl90bj9pbWFnZXNbMF0uYmxvYl90bjppbWFnZXNbMF0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfaXRlbX0gb25DbGljaz17c2hvd1Bob3RvTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzFdLmJsb2JfdG4/aW1hZ2VzWzFdLmJsb2JfdG46aW1hZ2VzWzFdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX2l0ZW19IG9uQ2xpY2s9e3Nob3dQaG90b01vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1syXS5ibG9iX3RuP2ltYWdlc1syXS5ibG9iX3RuOmltYWdlc1syXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAge2ltYWdlcy5sZW5ndGggPj0gNCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5pbWFnZV9pdGVtLCBzdHlsZXMubWFpbl9waG90byl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dQaG90b01vZGFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzBdLmJsb2JfdG4/aW1hZ2VzWzBdLmJsb2JfdG46aW1hZ2VzWzBdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX2l0ZW19IG9uQ2xpY2s9e3Nob3dQaG90b01vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1sxXS5ibG9iX3RuP2ltYWdlc1sxXS5ibG9iX3RuOmltYWdlc1sxXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZV9pdGVtfSBvbkNsaWNrPXtzaG93UGhvdG9Nb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMl0uYmxvYl90bj9pbWFnZXNbMl0uYmxvYl90bjppbWFnZXNbMl0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfaXRlbX0gb25DbGljaz17c2hvd1Bob3RvTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNob3dfbW9yZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+KzQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzNdLmJsb2JfdG4/aW1hZ2VzWzNdLmJsb2JfdG46aW1hZ2VzWzNdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogNTAgfX0gLz5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHt0eXBlID09IFwiUGhvdG9cIj8gYmxvYl90biAmJiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RfY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5pbWFnZSl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfaXRlbX0gb25DbGljaz17c2hvd1Bob3RvTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7YmxvYl90bn1gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+OlxyXG4gICAgICAgICAgICBibG9iX3RuICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmlkZW9zfSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICA8UGxheWVyXHJcbiAgICAgICAgICAgICAgICBwbGF5c0lubGluZVxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlcclxuICAgICAgICAgICAgICAgIG11dGVkXHJcbiAgICAgICAgICAgICAgICBwb3N0ZXI9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke3RodW1ibmFpbC5zcmN9YH1cclxuICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7YmxvYl90bn1gfVxyXG4gICAgICAgICAgICAgICAgcmVmPXtwbGF5ZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAvLyB2aWRlb1JlZiA9IHBsYXllcjtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlYWN0aW9uc19zaGFyZXNfc3RhdHVzfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlYWN0aW9uc19zdGF0dXN9PlxyXG4gICAgICAgICAgICAgICAgeyBsaWtlRGF0YS5sZW5ndGggPiAwICYmIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPXtnZXRMaWtlQWN0aW9uVXNlckluZm8obGlrZURhdGEpfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ3RodW1icy11cCddfSBzaXplPVwiMXhcIiAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcid9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2xpa2VEYXRhLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD48Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHsgaGFoYURhdGEubGVuZ3RoID4gMCAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKGhhaGFEYXRhKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdncmluJ119IHNpemU9XCIxeFwiICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJ319Lz4gXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2hhaGFEYXRhLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7IGhlYXJ0RGF0YS5sZW5ndGggPiAwICYmIDw+IFxyXG4gICAgICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKGhlYXJ0RGF0YSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAnaGVhcnQnXX0gc2l6ZT1cIjF4XCIgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInfX0vPiBcclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aGVhcnREYXRhLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7IHdvd0RhdGEubGVuZ3RoID4gMCAmJiA8PiBcclxuICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9e2dldExpa2VBY3Rpb25Vc2VySW5mbyh3b3dEYXRhKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdsYXVnaCddfSBzaXplPVwiMXhcIiAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcid9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3dvd0RhdGEubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICA8Lz4gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7IHNhZERhdGEubGVuZ3RoID4gMCAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKHNhZERhdGEpfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ2Zyb3duJ119IHNpemU9XCIxeFwiICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJ319Lz4gXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3NhZERhdGEubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxBY3Rpb25zXHJcbiAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgdHlwZT17aXRlbS50eXBlfVxyXG4gICAgICAgICAgICAgIHBvc3RSYXRlPXtpdGVtLnJhdGluZ31cclxuICAgICAgICAgICAgICBjb21tZW50cz17Y29tbWVudHN9XHJcbiAgICAgICAgICAgICAgb25SYXRlUG9zdD17b25SYXRlUG9zdH1cclxuICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XHJcbiAgICAgICAgICAgICAgbGlrZUFjdGlvbj17KHRlcm0pID0+IGxpa2VBY3Rpb24odHlwZSwgaXRlbS5pZCwgdGVybSl9XHJcbiAgICAgICAgICAgICAgc2hhcmVBY3Rpb249eygpID0+IHNoYXJlQWN0aW9uKHR5cGUgIT09ICdTaGFyZSc/dHlwZTpzaGFyZWQudHlwZSwgdHlwZSAhPT0gJ1NoYXJlJz9pdGVtLmlkOnNoYXJlZC5pZCl9XHJcbiAgICAgICAgICAgICAgYWN0aW9ucz17XHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7IGhhbmRsZVNob3dDb21tZW50TW9kYWwoaXRlbS5pZCkgfSBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxDb21tZW50c1xyXG4gICAgICAgICAgICAgIGlkPXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgIHR5cGU9e2l0ZW0udHlwZX1cclxuICAgICAgICAgICAgICBkYXRhPXtjb21tZW50c31cclxuICAgICAgICAgICAgICBvblVwZGF0ZVRpbWVsaW5lPXtvblVwZGF0ZVRpbWVsaW5lfVxyXG4gICAgICAgICAgICAgIGFjdGl2ZVBvc3RJZD17YWN0aXZlUG9zdElkfVxyXG4gICAgICAgICAgICAgIG1vZGFsTW9kZT17bW9kYWxNb2RlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG5cclxuICAgICAgPENvbW1lbnRzTW9kYWxcclxuICAgICAgICBhY3RpdmVQb3N0SWQ9e2FjdGl2ZVBvc3RJZH1cclxuICAgICAgICBwb3N0RGF0YT17ZGF0YX1cclxuICAgICAgICBvblVwZGF0ZVRpbWVsaW5lPXtvblVwZGF0ZVRpbWVsaW5lfVxyXG4gICAgICAgIHRpdGxlPVwiQ29tbWVudHNcIlxyXG4gICAgICAgIC8vIHNob3dNb2RhbD17b3Blbn1cclxuICAgICAgICAvLyBvbkNsb3NlPXtoaWRlQ29tbWVudE1vZGFsfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gIG1vZGFsQWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKHsgc2hvdyB9LCBkaXNwYXRjaClcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoVGltZWxpbmVQb3N0cyk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=