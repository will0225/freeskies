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
  }));
  console.log('videoList', videoList);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    // socket.on('connect', () => {
    //   console.log('connected!')
    //   socket.on('AUTH', { 'token': auth.token })
    // })
    socket.on('AUTH', function (e) {
      console.log(e);

      if (e !== 200) {} else {
        socket.on('VIDEO_READY', function (e) {
          console.log('video ready', e);
        });
        videoList.map(function (video) {
          socket.emit('VIDEO_READY', video.id);
          console.log('video subscribe', video.id);
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
        lineNumber: 75,
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
        lineNumber: 76,
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
      lineNumber: 110,
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
        lineNumber: 124,
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
        lineNumber: 125,
        columnNumber: 29
      }
    }) : null, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.post_header,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.avatar,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
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
        lineNumber: 135,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.user_info,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 15
      }
    }, __jsx("p", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.user_name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 17
      }
    }, fullName))), __jsx("p", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.date,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 13
      }
    }, moment__WEBPACK_IMPORTED_MODULE_8___default()(createdAt).format('MMM DD, YYYY - HH:mm A')), __jsx("p", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.description,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 13
      }
    }, __jsx(_common_TrimText__WEBPACK_IMPORTED_MODULE_10__["default"], {
      limit: 110,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 15
      }
    }, type !== 'Share' ? text : shared.text)), text_links && text_links.map(function (item) {
      return __jsx(components_common_LinkPreview__WEBPACK_IMPORTED_MODULE_21__["LinkPreview"], {
        data: item,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 15
        }
      });
    }), videos && videos.length > 0 && videos.map(function (video, i) {
      return __jsx("div", {
        className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.videos,
        key: i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
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
          lineNumber: 169,
          columnNumber: 19
        }
      }, __jsx("source", {
        src: "https://www.freeskies.com/static/".concat(video.src),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
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
          lineNumber: 182,
          columnNumber: 19
        }
      }, "Button For position of Video"));
    }), images && images.length > 0 ? __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.post_content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image, (_classnames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.grid_2, images.length == 2), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.grid_3, images.length == 3), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.grid_4, images.length == 4), _classnames)),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 17
      }
    }, images.length == 1 && __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].blob_tn ? images[0].blob_tn : images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 23
      }
    })), images.length == 2 && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.main_photo),
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].blob_tn ? images[0].blob_tn : images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[1].blob_tn ? images[1].blob_tn : images[1].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 25
      }
    }))), images.length == 3 && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.main_photo),
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].blob_tn ? images[0].blob_tn : images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[1].blob_tn ? images[1].blob_tn : images[1].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[2].blob_tn ? images[2].blob_tn : images[2].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 25
      }
    }))), images.length >= 4 && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.main_photo),
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].blob_tn ? images[0].blob_tn : images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[1].blob_tn ? images[1].blob_tn : images[1].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[2].blob_tn ? images[2].blob_tn : images[2].src),
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
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.show_more,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 25
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 27
      }
    }, "+4")), __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[3].blob_tn ? images[3].blob_tn : images[3].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 25
      }
    }))))) : __jsx("div", {
      style: {
        height: 50
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 15
      }
    }), type == "Photo" ? blob_tn && __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.post_content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289,
        columnNumber: 42
      }
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(blob_tn),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 19
      }
    })))) : blob_tn && __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.videos,
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298,
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
        lineNumber: 299,
        columnNumber: 15
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.reactions_shares_status,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 312,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.reactions_status,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 313,
        columnNumber: 15
      }
    }, likeData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(likeData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 315,
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
        lineNumber: 316,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317,
        columnNumber: 21
      }
    }, likeData.length))), hahaData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(hahaData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321,
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
    }, hahaData.length))), heartData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(heartData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 328,
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
        lineNumber: 329,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 330,
        columnNumber: 21
      }
    }, heartData.length))), wowData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(wowData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 335,
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
        lineNumber: 336,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337,
        columnNumber: 21
      }
    }, wowData.length))), sadData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(sadData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 342,
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
        lineNumber: 343,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 344,
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
        lineNumber: 350,
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
        lineNumber: 363,
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
      lineNumber: 376,
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

/***/ }),

/***/ "./node_modules/antd/lib/_util/devWarning.js":
false,

/***/ "./node_modules/antd/lib/_util/reactNode.js":
false,

/***/ "./node_modules/antd/lib/_util/responsiveObserve.js":
false,

/***/ "./node_modules/antd/lib/_util/type.js":
false,

/***/ "./node_modules/antd/lib/calendar/locale/en_US.js":
false,

/***/ "./node_modules/antd/lib/config-provider/SizeContext.js":
false,

/***/ "./node_modules/antd/lib/config-provider/context.js":
false,

/***/ "./node_modules/antd/lib/config-provider/index.js":
false,

/***/ "./node_modules/antd/lib/config-provider/renderEmpty.js":
false,

/***/ "./node_modules/antd/lib/date-picker/locale/en_US.js":
false,

/***/ "./node_modules/antd/lib/empty/empty.js":
false,

/***/ "./node_modules/antd/lib/empty/index.js":
false,

/***/ "./node_modules/antd/lib/empty/simple.js":
false,

/***/ "./node_modules/antd/lib/grid/RowContext.js":
false,

/***/ "./node_modules/antd/lib/grid/col.js":
false,

/***/ "./node_modules/antd/lib/grid/hooks/useBreakpoint.js":
false,

/***/ "./node_modules/antd/lib/grid/index.js":
false,

/***/ "./node_modules/antd/lib/grid/row.js":
false,

/***/ "./node_modules/antd/lib/list/Item.js":
false,

/***/ "./node_modules/antd/lib/list/index.js":
false,

/***/ "./node_modules/antd/lib/locale-provider/LocaleReceiver.js":
false,

/***/ "./node_modules/antd/lib/locale-provider/context.js":
false,

/***/ "./node_modules/antd/lib/locale-provider/default.js":
false,

/***/ "./node_modules/antd/lib/locale-provider/index.js":
false,

/***/ "./node_modules/antd/lib/locale/default.js":
false,

/***/ "./node_modules/antd/lib/message/hooks/useMessage.js":
false,

/***/ "./node_modules/antd/lib/message/index.js":
false,

/***/ "./node_modules/antd/lib/modal/locale.js":
false,

/***/ "./node_modules/antd/lib/notification/hooks/useNotification.js":
false,

/***/ "./node_modules/antd/lib/notification/index.js":
false,

/***/ "./node_modules/antd/lib/pagination/MiniSelect.js":
false,

/***/ "./node_modules/antd/lib/pagination/Pagination.js":
false,

/***/ "./node_modules/antd/lib/pagination/index.js":
false,

/***/ "./node_modules/antd/lib/select/index.js":
false,

/***/ "./node_modules/antd/lib/select/utils/iconUtil.js":
false,

/***/ "./node_modules/antd/lib/spin/index.js":
false,

/***/ "./node_modules/antd/lib/time-picker/locale/en_US.js":
false,

/***/ "./node_modules/rc-notification/lib/Notice.js":
false,

/***/ "./node_modules/rc-notification/lib/useNotification.js":
false,

/***/ "./node_modules/rc-pagination/lib/locale/en_US.js":
false,

/***/ "./node_modules/rc-picker/lib/locale/en_US.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aW1lbGluZS9UaW1lbGluZVBvc3RzLmpzIl0sIm5hbWVzIjpbInNvY2tldCIsImlvIiwiVGltZWxpbmVQb3N0cyIsImRhdGEiLCJvblVwZGF0ZVRpbWVsaW5lIiwib25SYXRlUG9zdCIsIm1vZGFsQWN0aW9ucyIsInNoYXJlQWN0aW9uIiwibGlrZUFjdGlvbiIsImRlbGV0ZUFjdGlvbiIsImRpc2FibGVEZWxldGUiLCJwYXJlbnREaXYiLCJhdXRoIiwiaW1hZ2VzTGlzdCIsImNvbmNhdCIsImFwcGx5IiwibWFwIiwiaXRlbSIsInR5cGUiLCJpbWFnZXMiLCJ2aWRlb0xpc3QiLCJ2aWRlb3MiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0Iiwib24iLCJlIiwidmlkZW8iLCJlbWl0IiwiaWQiLCJ1c2VTdGF0ZSIsImFjdGl2ZVBvc3RJZCIsInNldEFjdGl2ZVBvc3RJZCIsIm1vZGFsTW9kZSIsInNldE1vZGFsTW9kZSIsInZpZGVvUmVmIiwidXNlTW9kYWwiLCJvcGVuIiwiaGlkZVBob3RvTW9kYWwiLCJzaG93UGhvdG9Nb2RhbCIsImhhbmRsZVNob3dDb21tZW50TW9kYWwiLCJ0b2dnbGVDb21tZW50U2hvdyIsImluZGV4Iiwic2V0Q29tbWVudFNob3ciLCJjb21tZW50U2hvdyIsImdldExpa2VBY3Rpb25Vc2VySW5mbyIsImZpbmFsRGF0YSIsImFjY291bnQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInN0eWxlcyIsImFjdGl2aXR5X2NvbnRlbnQiLCJjcmVhdGVkQXQiLCJjb21tZW50cyIsInRleHQiLCJzaGFyZWQiLCJjb21tZW50ZWQiLCJibG9iX3RuIiwidGh1bWJuYWlsIiwicmVhY3Rpb25zIiwidGV4dF9saW5rcyIsInB1c2giLCJwcm9maWxlVXJsIiwidW5kZWZpbmVkIiwicHJvZmlsZVBob3RvIiwic3JjIiwiZnVsbE5hbWUiLCJ1c2VybmFtZSIsImxpa2VEYXRhIiwiZmlsdGVyIiwicmVhY3Rpb24iLCJoZWFydERhdGEiLCJ3b3dEYXRhIiwiaGFoYURhdGEiLCJzYWREYXRhIiwicG9zdCIsImZvbnRTaXplIiwibWFyZ2luUmlnaHQiLCJjdXJzb3IiLCJwb3N0X2hlYWRlciIsImF2YXRhciIsInVzZXJfaW5mbyIsInVzZXJfbmFtZSIsImRhdGUiLCJtb21lbnQiLCJmb3JtYXQiLCJkZXNjcmlwdGlvbiIsImxlbmd0aCIsImkiLCJwbGF5ZXIiLCJwbGF5IiwiZWwiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY3VycmVudCIsInBvc2l0aW9uWSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInkiLCJpbm5lckhlaWdodCIsInBhdXNlIiwidmlzaWJpbGl0eSIsInBvc3RfY29udGVudCIsImNsYXNzbmFtZXMiLCJpbWFnZSIsImdyaWRfMiIsImdyaWRfMyIsImdyaWRfNCIsImltYWdlX2l0ZW0iLCJtYWluX3Bob3RvIiwic2hvd19tb3JlIiwiaGVpZ2h0IiwicmVhY3Rpb25zX3NoYXJlc19zdGF0dXMiLCJyZWFjdGlvbnNfc3RhdHVzIiwicmF0aW5nIiwidGVybSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYmluZEFjdGlvbkNyZWF0b3JzIiwic2hvdyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLE1BQU0sR0FBR0Msd0RBQUUsQ0FBQywyQkFBRCxDQUFqQjs7QUFFQSxTQUFTQyxhQUFULE9BQTJKO0FBQUE7O0FBQUE7O0FBQUEsTUFBbElDLElBQWtJLFFBQWxJQSxJQUFrSTtBQUFBLE1BQTVIQyxnQkFBNEgsUUFBNUhBLGdCQUE0SDtBQUFBLE1BQTFHQyxVQUEwRyxRQUExR0Es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QUcsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFEO0FBQUEsU0FBZTtBQUN4QzlHLGdCQUFZLEVBQUUrRyxpRUFBa0IsQ0FBQztBQUFFQyxVQUFJLEVBQUpBLGlEQUFJQTtBQUFOLEtBQUQsRUFBV0YsUUFBWDtBQURRLEdBQWY7QUFBQSxDQUEzQjs7QUFJZUcsMkhBQU8sQ0FBQyxJQUFELEVBQU9KLGtCQUFQLENBQVAsQ0FBa0NqSCxhQUFsQyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3RpbWVsaW5lLjA3NDI3Y2Y3ZWNhMDM3MzRiNWI4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL3RpbWVsaW5lLXBvc3QubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyBQb3BvdmVyLCBUb29sdGlwIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgQ29tbWVudHMgZnJvbSAnLi9Db21tZW50cyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgQWN0aW9ucyBmcm9tICcuL0FjdGlvbnMnO1xyXG5pbXBvcnQgVHJpbVRleHQgZnJvbSAnLi4vY29tbW9uL1RyaW1UZXh0JztcclxuaW1wb3J0IHsgdXNlTW9kYWwgfSBmcm9tICdyZWFjdC1tb2RhbC1ob29rJztcclxuaW1wb3J0IENvbW1lbnRzTW9kYWwgZnJvbSAnLi9Db21tZW50c01vZGFsJztcclxuaW1wb3J0IFBob3Rvc01vZGFsIGZyb20gJy4uL3Byb2ZpbGUvUGhvdG9zTW9kYWwnO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJy4uL2NvbW1vbi9BdmF0YXInO1xyXG5pbXBvcnQgeyBzaG93IH0gZnJvbSAncmVkdXgtbW9kYWwnO1xyXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBBUEkgZnJvbSAnY29uZmlncy9BUEknO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICd2aWRlby1yZWFjdCc7XHJcbmltcG9ydCB7IFBob3Rvc1Byb3ZpZGVyIH0gIGZyb20gJ2NvbnRhaW5lcnMvUGhvdG9zL3N0b3JhZ2UvUGhvdG9Db250ZXh0JztcclxuaW1wb3J0IHsgTGlua1ByZXZpZXcgfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9MaW5rUHJldmlldyc7XHJcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcclxuY29uc3Qgc29ja2V0ID0gaW8oJ2h0dHBzOi8vd3d3LmZyZWVza2llcy5jb20nKTtcclxuXHJcbmZ1bmN0aW9uIFRpbWVsaW5lUG9zdHMoeyBkYXRhLCBvblVwZGF0ZVRpbWVsaW5lLCBvblJhdGVQb3N0LCBtb2RhbEFjdGlvbnMsIHNoYXJlQWN0aW9uLCBsaWtlQWN0aW9uLCBkZWxldGVBY3Rpb24sIGRpc2FibGVEZWxldGUsIHBhcmVudERpdiA9IG51bGwsIGF1dGggfSkge1xyXG4gIFxyXG4gIGNvbnN0IGltYWdlc0xpc3QgPSBbXS5jb25jYXQuYXBwbHkoW10sIGRhdGEubWFwKGl0ZW0gPT4gXHJcbiAgICB7IFxyXG4gICAgICAgIGlmKGl0ZW0udHlwZSA9PT0gJ1Bob3RvJykge1xyXG4gICAgICAgICAgcmV0dXJuICBpdGVtO1xyXG4gICAgICAgIH0gZWxzZSBpZihpdGVtLnR5cGUgPT09ICdWaWRlb0NsaXAnKSB7XHJcbiAgICAgICAgICByZXR1cm4gIFtdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gIGl0ZW0uaW1hZ2VzIFxyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbiAgKSlcclxuXHJcbiAgY29uc3QgdmlkZW9MaXN0ID0gW10uY29uY2F0LmFwcGx5KFtdLCBkYXRhLm1hcChpdGVtID0+IHtcclxuICAgIGlmKGl0ZW0udHlwZSA9PT0gJ1ZpZGVvQ2xpcCcpIHtcclxuICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gaXRlbS52aWRlb3M7XHJcbiAgICB9XHJcbiAgfSkpXHJcblxyXG4gIGNvbnNvbGUubG9nKCd2aWRlb0xpc3QnLCB2aWRlb0xpc3QpO1xyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBzb2NrZXQub24oJ2Nvbm5lY3QnLCAoKSA9PiB7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdjb25uZWN0ZWQhJylcclxuICAgIC8vICAgc29ja2V0Lm9uKCdBVVRIJywgeyAndG9rZW4nOiBhdXRoLnRva2VuIH0pXHJcbiAgICAvLyB9KVxyXG5cclxuICAgIHNvY2tldC5vbignQVVUSCcsIGUgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgICBpZihlICE9PSAyMDApIHtcclxuXHJcbiAgICAgIH0gZWxzZSAge1xyXG4gICAgICAgIHNvY2tldC5vbignVklERU9fUkVBRFknLCAoZSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ3ZpZGVvIHJlYWR5JywgZSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHZpZGVvTGlzdC5tYXAodmlkZW8gPT4ge1xyXG4gICAgICAgICAgc29ja2V0LmVtaXQoJ1ZJREVPX1JFQURZJywgdmlkZW8uaWQpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygndmlkZW8gc3Vic2NyaWJlJywgdmlkZW8uaWQpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSwgW10pXHJcbiAgY29uc3QgW2FjdGl2ZVBvc3RJZCwgc2V0QWN0aXZlUG9zdElkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFttb2RhbE1vZGUsIHNldE1vZGFsTW9kZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGxldCB2aWRlb1JlZiA9IFtdO1xyXG4gIGNvbnN0IFtzaG93UGhvdG9Nb2RhbCwgaGlkZVBob3RvTW9kYWxdID0gdXNlTW9kYWwoKHsgaW46IG9wZW4gfSkgPT4gKFxyXG4gICAgPFBob3Rvc1Byb3ZpZGVyPlxyXG4gICAgICA8UGhvdG9zTW9kYWxcclxuICAgICAgICB0aXRsZT1cIlBob3RvIGRldGFpbFwiXHJcbiAgICAgICAgc2hvd01vZGFsPXtvcGVufVxyXG4gICAgICAgIG9uQ2xvc2U9e2hpZGVQaG90b01vZGFsfVxyXG4gICAgICAgIG9uUmF0ZVBvc3Q9e29uUmF0ZVBvc3R9XHJcbiAgICAgICAgZGF0YT17aW1hZ2VzTGlzdH1cclxuICAgICAgICBsaWtlQWN0aW9uPXtsaWtlQWN0aW9ufVxyXG4gICAgICAgIHNoYXJlQWN0aW9uPXtzaGFyZUFjdGlvbn1cclxuICAgICAgICBvblVwZGF0ZVRpbWVsaW5lPXtvblVwZGF0ZVRpbWVsaW5lfVxyXG4gICAgICAgIGF1dGg9e2F1dGh9XHJcbiAgICAgIC8+XHJcbiAgICA8L1Bob3Rvc1Byb3ZpZGVyPlxyXG4gICkpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTaG93Q29tbWVudE1vZGFsID0gKGlkKSA9PiB7XHJcbiAgICBzZXRBY3RpdmVQb3N0SWQoaWQpO1xyXG4gICAgc2V0TW9kYWxNb2RlKCFtb2RhbE1vZGUpO1xyXG4gICAgLy9tb2RhbEFjdGlvbnMuc2hvdygnY29tbWVudE1vZGFsJywgeyBpZDogYWN0aXZlUG9zdElkIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZ2dsZUNvbW1lbnRTaG93ID0gKGluZGV4KSA9PlxyXG4gICAgc2V0Q29tbWVudFNob3coY29tbWVudFNob3cgPT09IGluZGV4ID8gbnVsbCA6IGluZGV4KTtcclxuXHJcbiAgY29uc3QgZ2V0TGlrZUFjdGlvblVzZXJJbmZvID0gKGRhdGEpID0+IHtcclxuICAgIHZhciBmaW5hbERhdGEgPSAnJztcclxuICAgIGRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICBmaW5hbERhdGEgPSBmaW5hbERhdGEgKyAnICcgKyBpdGVtLmFjY291bnQuZmlyc3ROYW1lICsgJycgKyBpdGVtLmFjY291bnQubGFzdE5hbWUgO1xyXG4gICAgfSlcclxuICAgIHJldHVybiBmaW5hbERhdGE7XHJcbiAgfVxyXG5cclxuIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpdml0eV9jb250ZW50fSA+XHJcbiAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICB2YXIgeyBhY2NvdW50LCBjcmVhdGVkQXQsIHR5cGUsIGNvbW1lbnRzLCB0ZXh0LCBpbWFnZXMsIHZpZGVvcywgc2hhcmVkLCBjb21tZW50ZWQsIGJsb2JfdG4sIHRodW1ibmFpbCwgcmVhY3Rpb25zLCB0ZXh0X2xpbmtzIH0gPSBpdGVtO1xyXG4gICAgICAgIHZpZGVvUmVmLnB1c2gobnVsbCk7XHJcbiAgICAgICAgY29uc3QgcHJvZmlsZVVybCA9IGFjY291bnQgIT09IG51bGwgJiYgYWNjb3VudCAhPT0gdW5kZWZpbmVkID8gYCR7YWNjb3VudC5wcm9maWxlUGhvdG8/LnNyY31gIDogbnVsbFxyXG4gICAgICAgIGNvbnN0IGZ1bGxOYW1lID0gYCR7YWNjb3VudD8uZmlyc3ROYW1lfSAke2FjY291bnQ/Lmxhc3ROYW1lfWA7XHJcbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSBhY2NvdW50Py51c2VybmFtZTtcclxuICAgICAgICBjb25zdCBsaWtlRGF0YSA9IHJlYWN0aW9ucz8gcmVhY3Rpb25zPy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlYWN0aW9uID09ICdMSUtFJyk6W107XHJcbiAgICAgICAgY29uc3QgaGVhcnREYXRhID0gIHJlYWN0aW9ucz8gcmVhY3Rpb25zPy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlYWN0aW9uID09ICdIRUFSVCcpOltdO1xyXG4gICAgICAgIGNvbnN0IHdvd0RhdGEgPSByZWFjdGlvbnMgPyByZWFjdGlvbnM/LmZpbHRlcihpdGVtID0+IGl0ZW0ucmVhY3Rpb24gPT0gJ1dPVycpOltdO1xyXG4gICAgICAgIGNvbnN0IGhhaGFEYXRhID0gcmVhY3Rpb25zID8gcmVhY3Rpb25zPy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlYWN0aW9uID09ICdIQUhBJyk6W107XHJcbiAgICAgICAgY29uc3Qgc2FkRGF0YSA9IHJlYWN0aW9ucyA/IHJlYWN0aW9ucz8uZmlsdGVyKGl0ZW0gPT4gaXRlbS5yZWFjdGlvbiA9PSAnU0FEJyk6W107XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdH0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgIHshZGlzYWJsZURlbGV0ZT88Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ3dpbmRvdy1jbG9zZSddfSBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGZsb2F0OiAncmlnaHQnLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAyNSxcclxuICAgICAgICAgICAgICBtYXJnaW5SaWdodDogMTAsXHJcbiAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlQWN0aW9uKGl0ZW0uaWQsIHR5cGUpfVxyXG4gICAgICAgICAgICAvPjpudWxsfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RfaGVhZGVyfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn0+XHJcbiAgICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgIHRleHQ9e2Z1bGxOYW1lfVxyXG4gICAgICAgICAgICAgICAgICB1cmw9e3Byb2ZpbGVVcmx9XHJcbiAgICAgICAgICAgICAgICAgIHNpemU9ezYwfVxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJTaXplPXszfVxyXG4gICAgICAgICAgICAgICAgICB1c2VybmFtZT17dXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfaW5mb30+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy51c2VyX25hbWV9PntmdWxsTmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kYXRlfT5cclxuICAgICAgICAgICAgICB7bW9tZW50KGNyZWF0ZWRBdCkuZm9ybWF0KCdNTU0gREQsIFlZWVkgLSBISDptbSBBJyl9XHJcbiAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cclxuICAgICAgICAgICAgICA8VHJpbVRleHQgbGltaXQ9ezExMH0+XHJcbiAgICAgICAgICAgICAgICB7IHR5cGUhPT0nU2hhcmUnP3RleHQ6c2hhcmVkLnRleHQgfVxyXG4gICAgICAgICAgICAgIDwvVHJpbVRleHQ+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHt0ZXh0X2xpbmtzICYmIHRleHRfbGlua3MubWFwKGl0ZW0gPT4gXHJcbiAgICAgICAgICAgICAgPExpbmtQcmV2aWV3IGRhdGE9e2l0ZW19Lz4gIFxyXG4gICAgICAgICAgICApIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHt2aWRlb3MgJiYgdmlkZW9zLmxlbmd0aCA+IDAgJiYgdmlkZW9zLm1hcCgodmlkZW8sIGkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aWRlb3N9IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8dmlkZW8gaWQ9J2hscy1leGFtcGxlJyAgY2xhc3NOYW1lPVwidmlkZW8tanMgdmpzLWRlZmF1bHQtc2tpblwiIHdpZHRoPVwiOTYwXCIgaGVpZ2h0PVwiNTQwXCIgY29udHJvbHM+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIHR5cGU9XCJhcHBsaWNhdGlvbi94LW1wZWdVUkxcIiBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke3ZpZGVvLnNyY31gfSA+PC9zb3VyY2U+XHJcbiAgICAgICAgICAgICAgICAgIDwvdmlkZW8+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgPFBsYXllclxyXG4gICAgICAgICAgICAgICAgICAgIHBsYXlzSW5saW5lXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b3BsYXlcclxuICAgICAgICAgICAgICAgICAgICBtdXRlZFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc3Rlcj17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7dmlkZW8udGh1bWJuYWlsLnNyY31gfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17cGxheWVyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmKHZpZGVvUmVmICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvUmVmW2luZGV4XSA9IHBsYXllcjsgXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHt2aWRlby5zcmN9YH0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9QbGF5ZXI+IFxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHZpZGVvUmVmW2luZGV4XS5wbGF5KCl9IHJlZj17ZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZWwpIHJldHVybjsgXHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIC8vIGlmKHZpZGVvUmVmICYmIHZpZGVvUmVmW2luZGV4XSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gICB2YXIgcG9zaXRpb25ZID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueTtcclxuICAgICAgICAgICAgICAgICAgICAgIC8vICAgaWYocG9zaXRpb25ZID4gKHdpbmRvdy5pbm5lckhlaWdodC8yKSAmJiBwb3NpdGlvblkgPCB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB2aWRlb1JlZltpbmRleF0ucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHZpZGVvUmVmW2luZGV4XS5wYXVzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBpZihwYXJlbnREaXYgIT09IG51bGwgJiYgcGFyZW50RGl2Py5jdXJyZW50ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwYXJlbnREaXY/LmN1cnJlbnQ/LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodmlkZW9SZWYgJiYgdmlkZW9SZWZbaW5kZXhdICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvc2l0aW9uWSA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocG9zaXRpb25ZID4gKHdpbmRvdy5pbm5lckhlaWdodC8yKSAmJiBwb3NpdGlvblkgPCB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvUmVmW2luZGV4XS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvUmVmW2luZGV4XS5wYXVzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB2aXNpYmlsaXR5OiAnaGlkZGVuJyB9fVxyXG4gICAgICAgICAgICAgICAgICA+QnV0dG9uIEZvciBwb3NpdGlvbiBvZiBWaWRlbzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICApfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHtpbWFnZXMgJiYgaW1hZ2VzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0X2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmltYWdlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgW3N0eWxlcy5ncmlkXzJdOiBpbWFnZXMubGVuZ3RoID09IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgW3N0eWxlcy5ncmlkXzNdOiBpbWFnZXMubGVuZ3RoID09IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgW3N0eWxlcy5ncmlkXzRdOiBpbWFnZXMubGVuZ3RoID09IDQsXHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7aW1hZ2VzLmxlbmd0aCA9PSAxICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX2l0ZW19IG9uQ2xpY2s9e3Nob3dQaG90b01vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMF0uYmxvYl90bj9pbWFnZXNbMF0uYmxvYl90bjppbWFnZXNbMF0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICB7aW1hZ2VzLmxlbmd0aCA9PSAyICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmltYWdlX2l0ZW0sIHN0eWxlcy5tYWluX3Bob3RvKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c2hvd1Bob3RvTW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMF0uYmxvYl90bj9pbWFnZXNbMF0uYmxvYl90bjppbWFnZXNbMF0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfaXRlbX0gb25DbGljaz17c2hvd1Bob3RvTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzFdLmJsb2JfdG4/aW1hZ2VzWzFdLmJsb2JfdG46aW1hZ2VzWzFdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICB7aW1hZ2VzLmxlbmd0aCA9PSAzICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmltYWdlX2l0ZW0sIHN0eWxlcy5tYWluX3Bob3RvKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c2hvd1Bob3RvTW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMF0uYmxvYl90bj9pbWFnZXNbMF0uYmxvYl90bjppbWFnZXNbMF0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfaXRlbX0gb25DbGljaz17c2hvd1Bob3RvTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzFdLmJsb2JfdG4/aW1hZ2VzWzFdLmJsb2JfdG46aW1hZ2VzWzFdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX2l0ZW19IG9uQ2xpY2s9e3Nob3dQaG90b01vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1syXS5ibG9iX3RuP2ltYWdlc1syXS5ibG9iX3RuOmltYWdlc1syXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAge2ltYWdlcy5sZW5ndGggPj0gNCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5pbWFnZV9pdGVtLCBzdHlsZXMubWFpbl9waG90byl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dQaG90b01vZGFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzBdLmJsb2JfdG4/aW1hZ2VzWzBdLmJsb2JfdG46aW1hZ2VzWzBdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX2l0ZW19IG9uQ2xpY2s9e3Nob3dQaG90b01vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1sxXS5ibG9iX3RuP2ltYWdlc1sxXS5ibG9iX3RuOmltYWdlc1sxXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZV9pdGVtfSBvbkNsaWNrPXtzaG93UGhvdG9Nb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMl0uYmxvYl90bj9pbWFnZXNbMl0uYmxvYl90bjppbWFnZXNbMl0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfaXRlbX0gb25DbGljaz17c2hvd1Bob3RvTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNob3dfbW9yZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+KzQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzNdLmJsb2JfdG4/aW1hZ2VzWzNdLmJsb2JfdG46aW1hZ2VzWzNdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogNTAgfX0gLz5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHt0eXBlID09IFwiUGhvdG9cIj8gYmxvYl90biAmJiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RfY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5pbWFnZSl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfaXRlbX0gb25DbGljaz17c2hvd1Bob3RvTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7YmxvYl90bn1gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+OlxyXG4gICAgICAgICAgICBibG9iX3RuICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmlkZW9zfSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICA8UGxheWVyXHJcbiAgICAgICAgICAgICAgICBwbGF5c0lubGluZVxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlcclxuICAgICAgICAgICAgICAgIG11dGVkXHJcbiAgICAgICAgICAgICAgICBwb3N0ZXI9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke3RodW1ibmFpbC5zcmN9YH1cclxuICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7YmxvYl90bn1gfVxyXG4gICAgICAgICAgICAgICAgcmVmPXtwbGF5ZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAvLyB2aWRlb1JlZiA9IHBsYXllcjtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlYWN0aW9uc19zaGFyZXNfc3RhdHVzfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlYWN0aW9uc19zdGF0dXN9PlxyXG4gICAgICAgICAgICAgICAgeyBsaWtlRGF0YS5sZW5ndGggPiAwICYmIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPXtnZXRMaWtlQWN0aW9uVXNlckluZm8obGlrZURhdGEpfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ3RodW1icy11cCddfSBzaXplPVwiMXhcIiAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcid9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2xpa2VEYXRhLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD48Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHsgaGFoYURhdGEubGVuZ3RoID4gMCAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKGhhaGFEYXRhKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdncmluJ119IHNpemU9XCIxeFwiICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJ319Lz4gXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2hhaGFEYXRhLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7IGhlYXJ0RGF0YS5sZW5ndGggPiAwICYmIDw+IFxyXG4gICAgICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKGhlYXJ0RGF0YSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAnaGVhcnQnXX0gc2l6ZT1cIjF4XCIgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInfX0vPiBcclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aGVhcnREYXRhLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7IHdvd0RhdGEubGVuZ3RoID4gMCAmJiA8PiBcclxuICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9e2dldExpa2VBY3Rpb25Vc2VySW5mbyh3b3dEYXRhKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdsYXVnaCddfSBzaXplPVwiMXhcIiAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcid9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3dvd0RhdGEubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICA8Lz4gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7IHNhZERhdGEubGVuZ3RoID4gMCAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKHNhZERhdGEpfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ2Zyb3duJ119IHNpemU9XCIxeFwiICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJ319Lz4gXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3NhZERhdGEubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxBY3Rpb25zXHJcbiAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgdHlwZT17aXRlbS50eXBlfVxyXG4gICAgICAgICAgICAgIHBvc3RSYXRlPXtpdGVtLnJhdGluZ31cclxuICAgICAgICAgICAgICBjb21tZW50cz17Y29tbWVudHN9XHJcbiAgICAgICAgICAgICAgb25SYXRlUG9zdD17b25SYXRlUG9zdH1cclxuICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XHJcbiAgICAgICAgICAgICAgbGlrZUFjdGlvbj17KHRlcm0pID0+IGxpa2VBY3Rpb24odHlwZSwgaXRlbS5pZCwgdGVybSl9XHJcbiAgICAgICAgICAgICAgc2hhcmVBY3Rpb249eygpID0+IHNoYXJlQWN0aW9uKHR5cGUgIT09ICdTaGFyZSc/dHlwZTpzaGFyZWQudHlwZSwgdHlwZSAhPT0gJ1NoYXJlJz9pdGVtLmlkOnNoYXJlZC5pZCl9XHJcbiAgICAgICAgICAgICAgYWN0aW9ucz17XHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7IGhhbmRsZVNob3dDb21tZW50TW9kYWwoaXRlbS5pZCkgfSBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxDb21tZW50c1xyXG4gICAgICAgICAgICAgIGlkPXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgIHR5cGU9e2l0ZW0udHlwZX1cclxuICAgICAgICAgICAgICBkYXRhPXtjb21tZW50c31cclxuICAgICAgICAgICAgICBvblVwZGF0ZVRpbWVsaW5lPXtvblVwZGF0ZVRpbWVsaW5lfVxyXG4gICAgICAgICAgICAgIGFjdGl2ZVBvc3RJZD17YWN0aXZlUG9zdElkfVxyXG4gICAgICAgICAgICAgIG1vZGFsTW9kZT17bW9kYWxNb2RlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG5cclxuICAgICAgPENvbW1lbnRzTW9kYWxcclxuICAgICAgICBhY3RpdmVQb3N0SWQ9e2FjdGl2ZVBvc3RJZH1cclxuICAgICAgICBwb3N0RGF0YT17ZGF0YX1cclxuICAgICAgICBvblVwZGF0ZVRpbWVsaW5lPXtvblVwZGF0ZVRpbWVsaW5lfVxyXG4gICAgICAgIHRpdGxlPVwiQ29tbWVudHNcIlxyXG4gICAgICAgIC8vIHNob3dNb2RhbD17b3Blbn1cclxuICAgICAgICAvLyBvbkNsb3NlPXtoaWRlQ29tbWVudE1vZGFsfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gIG1vZGFsQWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKHsgc2hvdyB9LCBkaXNwYXRjaClcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoVGltZWxpbmVQb3N0cyk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=