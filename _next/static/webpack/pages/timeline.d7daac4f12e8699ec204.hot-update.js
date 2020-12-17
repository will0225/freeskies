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
/* harmony import */ var antd_lib_list_Item__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! antd/lib/list/Item */ "./node_modules/antd/lib/list/Item.js");
/* harmony import */ var antd_lib_list_Item__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list_Item__WEBPACK_IMPORTED_MODULE_23__);



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
  console.log(data);
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
  console.log('videoList', videoList); // const newImageList =  imagesList.filter(item => typeof item.id !== 'undefined');

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
        lineNumber: 56,
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
        lineNumber: 57,
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
      lineNumber: 91,
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
        lineNumber: 105,
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
        lineNumber: 106,
        columnNumber: 29
      }
    }) : null, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.post_header,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.avatar,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
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
        lineNumber: 116,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.user_info,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 15
      }
    }, __jsx("p", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.user_name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 17
      }
    }, fullName))), __jsx("p", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.date,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 13
      }
    }, moment__WEBPACK_IMPORTED_MODULE_8___default()(createdAt).format('MMM DD, YYYY - HH:mm A')), __jsx("p", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.description,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 13
      }
    }, __jsx(_common_TrimText__WEBPACK_IMPORTED_MODULE_10__["default"], {
      limit: 110,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 15
      }
    }, type !== 'Share' ? text : shared.text)), text_links && text_links.map(function (item) {
      return __jsx(components_common_LinkPreview__WEBPACK_IMPORTED_MODULE_21__["LinkPreview"], {
        data: item,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
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
          lineNumber: 145,
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
          lineNumber: 150,
          columnNumber: 19
        }
      }, __jsx("source", {
        src: "https://www.freeskies.com/static/".concat(video.src),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161,
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
          lineNumber: 163,
          columnNumber: 19
        }
      }, "Button For position of Video"));
    }), images && images.length > 0 ? __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.post_content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image, (_classnames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.grid_2, images.length == 2), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.grid_3, images.length == 3), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.grid_4, images.length == 4), _classnames)),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 17
      }
    }, images.length == 1 && __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].blob_tn ? images[0].blob_tn : images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 23
      }
    })), images.length == 2 && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.main_photo),
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].blob_tn ? images[0].blob_tn : images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[1].blob_tn ? images[1].blob_tn : images[1].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 25
      }
    }))), images.length == 3 && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.main_photo),
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].blob_tn ? images[0].blob_tn : images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[1].blob_tn ? images[1].blob_tn : images[1].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[2].blob_tn ? images[2].blob_tn : images[2].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 25
      }
    }))), images.length >= 4 && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.main_photo),
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].blob_tn ? images[0].blob_tn : images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[1].blob_tn ? images[1].blob_tn : images[1].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[2].blob_tn ? images[2].blob_tn : images[2].src),
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
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.show_more,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 25
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 27
      }
    }, "+4")), __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[3].blob_tn ? images[3].blob_tn : images[3].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 25
      }
    }))))) : __jsx("div", {
      style: {
        height: 50
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 15
      }
    }), type == "Photo" ? blob_tn && __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.post_content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 42
      }
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(blob_tn),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 19
      }
    })))) : blob_tn && __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.videos,
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279,
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
        lineNumber: 280,
        columnNumber: 15
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.reactions_shares_status,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.reactions_status,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 15
      }
    }, likeData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(likeData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296,
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
        lineNumber: 297,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 21
      }
    }, likeData.length))), hahaData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(hahaData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302,
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
        lineNumber: 303,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 21
      }
    }, hahaData.length))), heartData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(heartData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 309,
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
        lineNumber: 310,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 21
      }
    }, heartData.length))), wowData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(wowData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316,
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
        lineNumber: 317,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318,
        columnNumber: 21
      }
    }, wowData.length))), sadData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(sadData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 323,
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
        lineNumber: 324,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 325,
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
        lineNumber: 331,
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
        lineNumber: 344,
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
      lineNumber: 357,
      columnNumber: 7
    }
  }));
}

_s(TimelinePosts, "p63xqevXGgdyaOlh46fFc9+fy5g=", false, function () {
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
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/_util/devWarning.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "resetWarned", {
  enumerable: true,
  get: function get() {
    return _warning.resetWarned;
  }
});
exports["default"] = void 0;

var _warning = _interopRequireWildcard(__webpack_require__(/*! rc-util/lib/warning */ "./node_modules/rc-util/lib/warning.js"));

var _default = function _default(valid, component, message) {
  (0, _warning["default"])(valid, "[antd: ".concat(component, "] ").concat(message));
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/_util/reactNode.js":
/*!**************************************************!*\
  !*** ./node_modules/antd/lib/_util/reactNode.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.replaceElement = replaceElement;
exports.cloneElement = cloneElement;
exports.isValidElement = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var isValidElement = React.isValidElement;
exports.isValidElement = isValidElement;

function replaceElement(element, replacement, props) {
  if (!isValidElement(element)) return replacement;
  return /*#__PURE__*/React.cloneElement(element, typeof props === 'function' ? props(element.props || {}) : props);
}

function cloneElement(element, props) {
  return replaceElement(element, element, props);
}

/***/ }),

/***/ "./node_modules/antd/lib/_util/responsiveObserve.js":
/*!**********************************************************!*\
  !*** ./node_modules/antd/lib/_util/responsiveObserve.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.responsiveMap = exports.responsiveArray = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _extends3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var responsiveArray = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
exports.responsiveArray = responsiveArray;
var responsiveMap = {
  xs: '(max-width: 575px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
  xxl: '(min-width: 1600px)'
};
exports.responsiveMap = responsiveMap;
var subscribers = new Map();
var subUid = -1;
var screens = {};
var responsiveObserve = {
  matchHandlers: {},
  dispatch: function dispatch(pointMap) {
    screens = pointMap;
    subscribers.forEach(function (func) {
      return func(screens);
    });
    return subscribers.size >= 1;
  },
  subscribe: function subscribe(func) {
    if (!subscribers.size) this.register();
    subUid += 1;
    subscribers.set(subUid, func);
    func(screens);
    return subUid;
  },
  unsubscribe: function unsubscribe(token) {
    subscribers["delete"](token);
    if (!subscribers.size) this.unregister();
  },
  unregister: function unregister() {
    var _this = this;

    Object.keys(responsiveMap).forEach(function (screen) {
      var matchMediaQuery = responsiveMap[screen];
      var handler = _this.matchHandlers[matchMediaQuery];
      handler === null || handler === void 0 ? void 0 : handler.mql.removeListener(handler === null || handler === void 0 ? void 0 : handler.listener);
    });
    subscribers.clear();
  },
  register: function register() {
    var _this2 = this;

    Object.keys(responsiveMap).forEach(function (screen) {
      var matchMediaQuery = responsiveMap[screen];

      var listener = function listener(_ref) {
        var matches = _ref.matches;

        _this2.dispatch((0, _extends3["default"])((0, _extends3["default"])({}, screens), (0, _defineProperty2["default"])({}, screen, matches)));
      };

      var mql = window.matchMedia(matchMediaQuery);
      mql.addListener(listener);
      _this2.matchHandlers[matchMediaQuery] = {
        mql: mql,
        listener: listener
      };
      listener(mql);
    });
  }
};
var _default = responsiveObserve;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/_util/type.js":
/*!*********************************************!*\
  !*** ./node_modules/antd/lib/_util/type.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tupleNum = exports.tuple = void 0;

// https://stackoverflow.com/questions/46176165/ways-to-get-string-literal-type-of-array-values-without-enum-overhead
var tuple = function tuple() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args;
};

exports.tuple = tuple;

var tupleNum = function tupleNum() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return args;
};

exports.tupleNum = tupleNum;

/***/ }),

/***/ "./node_modules/antd/lib/calendar/locale/en_US.js":
/*!********************************************************!*\
  !*** ./node_modules/antd/lib/calendar/locale/en_US.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _en_US = _interopRequireDefault(__webpack_require__(/*! ../../date-picker/locale/en_US */ "./node_modules/antd/lib/date-picker/locale/en_US.js"));

var _default = _en_US["default"];
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/config-provider/SizeContext.js":
/*!**************************************************************!*\
  !*** ./node_modules/antd/lib/config-provider/SizeContext.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SizeContextProvider = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var SizeContext = /*#__PURE__*/React.createContext(undefined);

var SizeContextProvider = function SizeContextProvider(_ref) {
  var children = _ref.children,
      size = _ref.size;
  return /*#__PURE__*/React.createElement(SizeContext.Consumer, null, function (originSize) {
    return /*#__PURE__*/React.createElement(SizeContext.Provider, {
      value: size || originSize
    }, children);
  });
};

exports.SizeContextProvider = SizeContextProvider;
var _default = SizeContext;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/config-provider/context.js":
/*!**********************************************************!*\
  !*** ./node_modules/antd/lib/config-provider/context.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withConfigConsumer = withConfigConsumer;
exports.ConfigConsumer = exports.ConfigContext = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _renderEmpty = _interopRequireDefault(__webpack_require__(/*! ./renderEmpty */ "./node_modules/antd/lib/config-provider/renderEmpty.js"));

var ConfigContext = /*#__PURE__*/React.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: function getPrefixCls(suffixCls, customizePrefixCls) {
    if (customizePrefixCls) return customizePrefixCls;
    return suffixCls ? "ant-".concat(suffixCls) : 'ant';
  },
  renderEmpty: _renderEmpty["default"]
});
exports.ConfigContext = ConfigContext;
var ConfigConsumer = ConfigContext.Consumer;
/** @deprecated Use hooks instead. This is a legacy function */

exports.ConfigConsumer = ConfigConsumer;

function withConfigConsumer(config) {
  return function withConfigConsumerFunc(Component) {
    // Wrap with ConfigConsumer. Since we need compatible with react 15, be care when using ref methods
    var SFC = function SFC(props) {
      return /*#__PURE__*/React.createElement(ConfigConsumer, null, function (configProps) {
        var basicPrefixCls = config.prefixCls;
        var getPrefixCls = configProps.getPrefixCls;
        var customizePrefixCls = props.prefixCls;
        var prefixCls = getPrefixCls(basicPrefixCls, customizePrefixCls);
        return /*#__PURE__*/React.createElement(Component, (0, _extends2["default"])({}, configProps, props, {
          prefixCls: prefixCls
        }));
      });
    };

    var cons = Component.constructor;
    var name = cons && cons.displayName || Component.name || 'Component';
    SFC.displayName = "withConfigConsumer(".concat(name, ")");
    return SFC;
  };
}

/***/ }),

/***/ "./node_modules/antd/lib/config-provider/index.js":
/*!********************************************************!*\
  !*** ./node_modules/antd/lib/config-provider/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ConfigConsumer", {
  enumerable: true,
  get: function get() {
    return _context.ConfigConsumer;
  }
});
Object.defineProperty(exports, "ConfigContext", {
  enumerable: true,
  get: function get() {
    return _context.ConfigContext;
  }
});
exports["default"] = exports.configConsumerProps = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _rcFieldForm = __webpack_require__(/*! rc-field-form */ "./node_modules/rc-field-form/es/index.js");

var _localeProvider = _interopRequireWildcard(__webpack_require__(/*! ../locale-provider */ "./node_modules/antd/lib/locale-provider/index.js"));

var _LocaleReceiver = _interopRequireDefault(__webpack_require__(/*! ../locale-provider/LocaleReceiver */ "./node_modules/antd/lib/locale-provider/LocaleReceiver.js"));

var _context = __webpack_require__(/*! ./context */ "./node_modules/antd/lib/config-provider/context.js");

var _SizeContext = __webpack_require__(/*! ./SizeContext */ "./node_modules/antd/lib/config-provider/SizeContext.js");

var _message = _interopRequireDefault(__webpack_require__(/*! ../message */ "./node_modules/antd/lib/message/index.js"));

var _notification = _interopRequireDefault(__webpack_require__(/*! ../notification */ "./node_modules/antd/lib/notification/index.js"));

// TODO: remove this lint
// SFC has specified a displayName, but not worked.

/* eslint-disable react/display-name */
var configConsumerProps = ['getTargetContainer', 'getPopupContainer', 'rootPrefixCls', 'getPrefixCls', 'renderEmpty', 'csp', 'autoInsertSpaceInButton', 'locale', 'pageHeader'];
exports.configConsumerProps = configConsumerProps;

var ConfigProvider = function ConfigProvider(props) {
  React.useEffect(function () {
    if (props.direction) {
      _message["default"].config({
        rtl: props.direction === 'rtl'
      });

      _notification["default"].config({
        rtl: props.direction === 'rtl'
      });
    }
  }, [props.direction]);

  var getPrefixClsWrapper = function getPrefixClsWrapper(context) {
    return function (suffixCls, customizePrefixCls) {
      var prefixCls = props.prefixCls;
      if (customizePrefixCls) return customizePrefixCls;
      var mergedPrefixCls = prefixCls || context.getPrefixCls('');
      return suffixCls ? "".concat(mergedPrefixCls, "-").concat(suffixCls) : mergedPrefixCls;
    };
  };

  var renderProvider = function renderProvider(context, legacyLocale) {
    var children = props.children,
        getTargetContainer = props.getTargetContainer,
        getPopupContainer = props.getPopupContainer,
        renderEmpty = props.renderEmpty,
        csp = props.csp,
        autoInsertSpaceInButton = props.autoInsertSpaceInButton,
        form = props.form,
        input = props.input,
        locale = props.locale,
        pageHeader = props.pageHeader,
        componentSize = props.componentSize,
        direction = props.direction,
        space = props.space,
        virtual = props.virtual,
        dropdownMatchSelectWidth = props.dropdownMatchSelectWidth;
    var config = (0, _extends2["default"])((0, _extends2["default"])({}, context), {
      getPrefixCls: getPrefixClsWrapper(context),
      csp: csp,
      autoInsertSpaceInButton: autoInsertSpaceInButton,
      locale: locale || legacyLocale,
      direction: direction,
      space: space,
      virtual: virtual,
      dropdownMatchSelectWidth: dropdownMatchSelectWidth
    });

    if (getTargetContainer) {
      config.getTargetContainer = getTargetContainer;
    }

    if (getPopupContainer) {
      config.getPopupContainer = getPopupContainer;
    }

    if (renderEmpty) {
      config.renderEmpty = renderEmpty;
    }

    if (pageHeader) {
      config.pageHeader = pageHeader;
    }

    if (input) {
      config.input = input;
    }

    if (form) {
      config.form = form;
    }

    var childNode = children; // Additional Form provider

    var validateMessages = {};

    if (locale && locale.Form && locale.Form.defaultValidateMessages) {
      validateMessages = locale.Form.defaultValidateMessages;
    }

    if (form && form.validateMessages) {
      validateMessages = (0, _extends2["default"])((0, _extends2["default"])({}, validateMessages), form.validateMessages);
    }

    if (Object.keys(validateMessages).length > 0) {
      childNode = /*#__PURE__*/React.createElement(_rcFieldForm.FormProvider, {
        validateMessages: validateMessages
      }, children);
    }

    var childrenWithLocale = locale === undefined ? childNode : /*#__PURE__*/React.createElement(_localeProvider["default"], {
      locale: locale || legacyLocale,
      _ANT_MARK__: _localeProvider.ANT_MARK
    }, childNode);
    return /*#__PURE__*/React.createElement(_SizeContext.SizeContextProvider, {
      size: componentSize
    }, /*#__PURE__*/React.createElement(_context.ConfigContext.Provider, {
      value: config
    }, childrenWithLocale));
  };

  return /*#__PURE__*/React.createElement(_LocaleReceiver["default"], null, function (_, __, legacyLocale) {
    return /*#__PURE__*/React.createElement(_context.ConfigConsumer, null, function (context) {
      return renderProvider(context, legacyLocale);
    });
  });
};
/** @private internal usage. do not use in your production */


ConfigProvider.ConfigContext = _context.ConfigContext;
var _default = ConfigProvider;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/config-provider/renderEmpty.js":
/*!**************************************************************!*\
  !*** ./node_modules/antd/lib/config-provider/renderEmpty.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _empty = _interopRequireDefault(__webpack_require__(/*! ../empty */ "./node_modules/antd/lib/empty/index.js"));

var _ = __webpack_require__(/*! . */ "./node_modules/antd/lib/config-provider/index.js");

var renderEmpty = function renderEmpty(componentName) {
  return /*#__PURE__*/React.createElement(_.ConfigConsumer, null, function (_ref) {
    var getPrefixCls = _ref.getPrefixCls;
    var prefix = getPrefixCls('empty');

    switch (componentName) {
      case 'Table':
      case 'List':
        return /*#__PURE__*/React.createElement(_empty["default"], {
          image: _empty["default"].PRESENTED_IMAGE_SIMPLE
        });

      case 'Select':
      case 'TreeSelect':
      case 'Cascader':
      case 'Transfer':
      case 'Mentions':
        return /*#__PURE__*/React.createElement(_empty["default"], {
          image: _empty["default"].PRESENTED_IMAGE_SIMPLE,
          className: "".concat(prefix, "-small")
        });

      default:
        return /*#__PURE__*/React.createElement(_empty["default"], null);
    }
  });
};

var _default = renderEmpty;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/date-picker/locale/en_US.js":
/*!***********************************************************!*\
  !*** ./node_modules/antd/lib/date-picker/locale/en_US.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _en_US = _interopRequireDefault(__webpack_require__(/*! rc-picker/lib/locale/en_US */ "./node_modules/rc-picker/lib/locale/en_US.js"));

var _en_US2 = _interopRequireDefault(__webpack_require__(/*! ../../time-picker/locale/en_US */ "./node_modules/antd/lib/time-picker/locale/en_US.js"));

// Merge into a locale object
var locale = {
  lang: (0, _extends2["default"])({
    placeholder: 'Select date',
    yearPlaceholder: 'Select year',
    quarterPlaceholder: 'Select quarter',
    monthPlaceholder: 'Select month',
    weekPlaceholder: 'Select week',
    rangePlaceholder: ['Start date', 'End date'],
    rangeYearPlaceholder: ['Start year', 'End year'],
    rangeMonthPlaceholder: ['Start month', 'End month'],
    rangeWeekPlaceholder: ['Start week', 'End week']
  }, _en_US["default"]),
  timePickerLocale: (0, _extends2["default"])({}, _en_US2["default"])
}; // All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

var _default = locale;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/empty/empty.js":
/*!**********************************************!*\
  !*** ./node_modules/antd/lib/empty/empty.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var Empty = function Empty() {
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;

  var prefixCls = getPrefixCls('empty-img-default');
  return /*#__PURE__*/React.createElement("svg", {
    className: prefixCls,
    width: "184",
    height: "152",
    viewBox: "0 0 184 152",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(24 31.67)"
  }, /*#__PURE__*/React.createElement("ellipse", {
    className: "".concat(prefixCls, "-ellipse"),
    cx: "67.797",
    cy: "106.89",
    rx: "67.797",
    ry: "12.668"
  }), /*#__PURE__*/React.createElement("path", {
    className: "".concat(prefixCls, "-path-1"),
    d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "".concat(prefixCls, "-path-2"),
    d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
    transform: "translate(13.56)"
  }), /*#__PURE__*/React.createElement("path", {
    className: "".concat(prefixCls, "-path-3"),
    d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "".concat(prefixCls, "-path-4"),
    d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
  })), /*#__PURE__*/React.createElement("path", {
    className: "".concat(prefixCls, "-path-5"),
    d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
  }), /*#__PURE__*/React.createElement("g", {
    className: "".concat(prefixCls, "-g"),
    transform: "translate(149.65 15.383)"
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "20.654",
    cy: "3.167",
    rx: "2.849",
    ry: "2.815"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
  }))));
};

var _default = Empty;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/empty/index.js":
/*!**********************************************!*\
  !*** ./node_modules/antd/lib/empty/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _LocaleReceiver = _interopRequireDefault(__webpack_require__(/*! ../locale-provider/LocaleReceiver */ "./node_modules/antd/lib/locale-provider/LocaleReceiver.js"));

var _empty = _interopRequireDefault(__webpack_require__(/*! ./empty */ "./node_modules/antd/lib/empty/empty.js"));

var _simple = _interopRequireDefault(__webpack_require__(/*! ./simple */ "./node_modules/antd/lib/empty/simple.js"));

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var defaultEmptyImg = /*#__PURE__*/React.createElement(_empty["default"], null);
var simpleEmptyImg = /*#__PURE__*/React.createElement(_simple["default"], null);

var Empty = function Empty(_a) {
  var className = _a.className,
      customizePrefixCls = _a.prefixCls,
      _a$image = _a.image,
      image = _a$image === void 0 ? defaultEmptyImg : _a$image,
      description = _a.description,
      children = _a.children,
      imageStyle = _a.imageStyle,
      restProps = __rest(_a, ["className", "prefixCls", "image", "description", "children", "imageStyle"]);

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  return /*#__PURE__*/React.createElement(_LocaleReceiver["default"], {
    componentName: "Empty"
  }, function (locale) {
    var _classNames;

    var prefixCls = getPrefixCls('empty', customizePrefixCls);
    var des = typeof description !== 'undefined' ? description : locale.description;
    var alt = typeof des === 'string' ? des : 'empty';
    var imageNode = null;

    if (typeof image === 'string') {
      imageNode = /*#__PURE__*/React.createElement("img", {
        alt: alt,
        src: image
      });
    } else {
      imageNode = image;
    }

    return /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({
      className: (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-normal"), image === simpleEmptyImg), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className)
    }, restProps), /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-image"),
      style: imageStyle
    }, imageNode), des && /*#__PURE__*/React.createElement("p", {
      className: "".concat(prefixCls, "-description")
    }, des), children && /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-footer")
    }, children));
  });
};

Empty.PRESENTED_IMAGE_DEFAULT = defaultEmptyImg;
Empty.PRESENTED_IMAGE_SIMPLE = simpleEmptyImg;
var _default = Empty;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/empty/simple.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/empty/simple.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var Simple = function Simple() {
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;

  var prefixCls = getPrefixCls('empty-img-simple');
  return /*#__PURE__*/React.createElement("svg", {
    className: prefixCls,
    width: "64",
    height: "41",
    viewBox: "0 0 64 41",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(0 1)",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("ellipse", {
    className: "".concat(prefixCls, "-ellipse"),
    cx: "32",
    cy: "33",
    rx: "32",
    ry: "7"
  }), /*#__PURE__*/React.createElement("g", {
    className: "".concat(prefixCls, "-g"),
    fillRule: "nonzero"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
    className: "".concat(prefixCls, "-path")
  }))));
};

var _default = Simple;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/grid/RowContext.js":
/*!**************************************************!*\
  !*** ./node_modules/antd/lib/grid/RowContext.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var RowContext = /*#__PURE__*/(0, _react.createContext)({});
var _default = RowContext;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/grid/col.js":
/*!*******************************************!*\
  !*** ./node_modules/antd/lib/grid/col.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _extends3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _RowContext = _interopRequireDefault(__webpack_require__(/*! ./RowContext */ "./node_modules/antd/lib/grid/RowContext.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

function parseFlex(flex) {
  if (typeof flex === 'number') {
    return "".concat(flex, " ").concat(flex, " auto");
  }

  if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
    return "0 0 ".concat(flex);
  }

  return flex;
}

var sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
var Col = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _classNames;

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var _React$useContext2 = React.useContext(_RowContext["default"]),
      gutter = _React$useContext2.gutter,
      wrap = _React$useContext2.wrap;

  var customizePrefixCls = props.prefixCls,
      span = props.span,
      order = props.order,
      offset = props.offset,
      push = props.push,
      pull = props.pull,
      className = props.className,
      children = props.children,
      flex = props.flex,
      style = props.style,
      others = __rest(props, ["prefixCls", "span", "order", "offset", "push", "pull", "className", "children", "flex", "style"]);

  var prefixCls = getPrefixCls('col', customizePrefixCls);
  var sizeClassObj = {};
  sizes.forEach(function (size) {
    var _extends2;

    var sizeProps = {};
    var propSize = props[size];

    if (typeof propSize === 'number') {
      sizeProps.span = propSize;
    } else if ((0, _typeof2["default"])(propSize) === 'object') {
      sizeProps = propSize || {};
    }

    delete others[size];
    sizeClassObj = (0, _extends3["default"])((0, _extends3["default"])({}, sizeClassObj), (_extends2 = {}, (0, _defineProperty2["default"])(_extends2, "".concat(prefixCls, "-").concat(size, "-").concat(sizeProps.span), sizeProps.span !== undefined), (0, _defineProperty2["default"])(_extends2, "".concat(prefixCls, "-").concat(size, "-order-").concat(sizeProps.order), sizeProps.order || sizeProps.order === 0), (0, _defineProperty2["default"])(_extends2, "".concat(prefixCls, "-").concat(size, "-offset-").concat(sizeProps.offset), sizeProps.offset || sizeProps.offset === 0), (0, _defineProperty2["default"])(_extends2, "".concat(prefixCls, "-").concat(size, "-push-").concat(sizeProps.push), sizeProps.push || sizeProps.push === 0), (0, _defineProperty2["default"])(_extends2, "".concat(prefixCls, "-").concat(size, "-pull-").concat(sizeProps.pull), sizeProps.pull || sizeProps.pull === 0), (0, _defineProperty2["default"])(_extends2, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _extends2));
  });
  var classes = (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(span), span !== undefined), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-order-").concat(order), order), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-offset-").concat(offset), offset), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-push-").concat(push), push), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-pull-").concat(pull), pull), _classNames), className, sizeClassObj);
  var mergedStyle = (0, _extends3["default"])({}, style);

  if (gutter) {
    mergedStyle = (0, _extends3["default"])((0, _extends3["default"])((0, _extends3["default"])({}, gutter[0] > 0 ? {
      paddingLeft: gutter[0] / 2,
      paddingRight: gutter[0] / 2
    } : {}), gutter[1] > 0 ? {
      paddingTop: gutter[1] / 2,
      paddingBottom: gutter[1] / 2
    } : {}), mergedStyle);
  }

  if (flex) {
    mergedStyle.flex = parseFlex(flex); // Hack for Firefox to avoid size issue
    // https://github.com/ant-design/ant-design/pull/20023#issuecomment-564389553

    if (flex === 'auto' && wrap === false && !mergedStyle.minWidth) {
      mergedStyle.minWidth = 0;
    }
  }

  return /*#__PURE__*/React.createElement("div", (0, _extends3["default"])({}, others, {
    style: mergedStyle,
    className: classes,
    ref: ref
  }), children);
});
Col.displayName = 'Col';
var _default = Col;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/grid/hooks/useBreakpoint.js":
/*!***********************************************************!*\
  !*** ./node_modules/antd/lib/grid/hooks/useBreakpoint.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _responsiveObserve = _interopRequireDefault(__webpack_require__(/*! ../../_util/responsiveObserve */ "./node_modules/antd/lib/_util/responsiveObserve.js"));

function useBreakpoint() {
  var _useState = (0, _react.useState)({}),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      screens = _useState2[0],
      setScreens = _useState2[1];

  (0, _react.useEffect)(function () {
    var token = _responsiveObserve["default"].subscribe(function (supportScreens) {
      setScreens(supportScreens);
    });

    return function () {
      return _responsiveObserve["default"].unsubscribe(token);
    };
  }, []);
  return screens;
}

var _default = useBreakpoint;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/grid/index.js":
/*!*********************************************!*\
  !*** ./node_modules/antd/lib/grid/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Row", {
  enumerable: true,
  get: function get() {
    return _row["default"];
  }
});
Object.defineProperty(exports, "Col", {
  enumerable: true,
  get: function get() {
    return _col["default"];
  }
});
exports["default"] = void 0;

var _row = _interopRequireDefault(__webpack_require__(/*! ./row */ "./node_modules/antd/lib/grid/row.js"));

var _col = _interopRequireDefault(__webpack_require__(/*! ./col */ "./node_modules/antd/lib/grid/col.js"));

var _useBreakpoint = _interopRequireDefault(__webpack_require__(/*! ./hooks/useBreakpoint */ "./node_modules/antd/lib/grid/hooks/useBreakpoint.js"));

var _default = {
  useBreakpoint: _useBreakpoint["default"]
};
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/grid/row.js":
/*!*******************************************!*\
  !*** ./node_modules/antd/lib/grid/row.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _RowContext = _interopRequireDefault(__webpack_require__(/*! ./RowContext */ "./node_modules/antd/lib/grid/RowContext.js"));

var _type = __webpack_require__(/*! ../_util/type */ "./node_modules/antd/lib/_util/type.js");

var _responsiveObserve = _interopRequireWildcard(__webpack_require__(/*! ../_util/responsiveObserve */ "./node_modules/antd/lib/_util/responsiveObserve.js"));

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var RowAligns = (0, _type.tuple)('top', 'middle', 'bottom', 'stretch');
var RowJustify = (0, _type.tuple)('start', 'end', 'center', 'space-around', 'space-between');
var Row = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _classNames;

  var customizePrefixCls = props.prefixCls,
      justify = props.justify,
      align = props.align,
      className = props.className,
      style = props.style,
      children = props.children,
      _props$gutter = props.gutter,
      gutter = _props$gutter === void 0 ? 0 : _props$gutter,
      wrap = props.wrap,
      others = __rest(props, ["prefixCls", "justify", "align", "className", "style", "children", "gutter", "wrap"]);

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var _React$useState = React.useState({
    xs: true,
    sm: true,
    md: true,
    lg: true,
    xl: true,
    xxl: true
  }),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      screens = _React$useState2[0],
      setScreens = _React$useState2[1];

  var gutterRef = React.useRef(gutter);
  React.useEffect(function () {
    var token = _responsiveObserve["default"].subscribe(function (screen) {
      var currentGutter = gutterRef.current || 0;

      if (!Array.isArray(currentGutter) && (0, _typeof2["default"])(currentGutter) === 'object' || Array.isArray(currentGutter) && ((0, _typeof2["default"])(currentGutter[0]) === 'object' || (0, _typeof2["default"])(currentGutter[1]) === 'object')) {
        setScreens(screen);
      }
    });

    return function () {
      return _responsiveObserve["default"].unsubscribe(token);
    };
  }, []);

  var getGutter = function getGutter() {
    var results = [0, 0];
    var normalizedGutter = Array.isArray(gutter) ? gutter : [gutter, 0];
    normalizedGutter.forEach(function (g, index) {
      if ((0, _typeof2["default"])(g) === 'object') {
        for (var i = 0; i < _responsiveObserve.responsiveArray.length; i++) {
          var breakpoint = _responsiveObserve.responsiveArray[i];

          if (screens[breakpoint] && g[breakpoint] !== undefined) {
            results[index] = g[breakpoint];
            break;
          }
        }
      } else {
        results[index] = g || 0;
      }
    });
    return results;
  };

  var prefixCls = getPrefixCls('row', customizePrefixCls);
  var gutters = getGutter();
  var classes = (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-no-wrap"), wrap === false), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(justify), justify), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(align), align), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
  var rowStyle = (0, _extends2["default"])((0, _extends2["default"])((0, _extends2["default"])({}, gutters[0] > 0 ? {
    marginLeft: gutters[0] / -2,
    marginRight: gutters[0] / -2
  } : {}), gutters[1] > 0 ? {
    marginTop: gutters[1] / -2,
    marginBottom: gutters[1] / 2
  } : {}), style);
  return /*#__PURE__*/React.createElement(_RowContext["default"].Provider, {
    value: {
      gutter: gutters,
      wrap: wrap
    }
  }, /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({}, others, {
    className: classes,
    style: rowStyle,
    ref: ref
  }), children));
});
Row.displayName = 'Row';
var _default = Row;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/list/Item.js":
/*!********************************************!*\
  !*** ./node_modules/antd/lib/list/Item.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Meta = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _index = __webpack_require__(/*! ./index */ "./node_modules/antd/lib/list/index.js");

var _grid = __webpack_require__(/*! ../grid */ "./node_modules/antd/lib/grid/index.js");

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _reactNode = __webpack_require__(/*! ../_util/reactNode */ "./node_modules/antd/lib/_util/reactNode.js");

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var Meta = function Meta(_a) {
  var customizePrefixCls = _a.prefixCls,
      className = _a.className,
      avatar = _a.avatar,
      title = _a.title,
      description = _a.description,
      others = __rest(_a, ["prefixCls", "className", "avatar", "title", "description"]);

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;

  var prefixCls = getPrefixCls('list', customizePrefixCls);
  var classString = (0, _classnames["default"])("".concat(prefixCls, "-item-meta"), className);
  var content = /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-item-meta-content")
  }, title && /*#__PURE__*/React.createElement("h4", {
    className: "".concat(prefixCls, "-item-meta-title")
  }, title), description && /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-item-meta-description")
  }, description));
  return /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({}, others, {
    className: classString
  }), avatar && /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-item-meta-avatar")
  }, avatar), (title || description) && content);
};

exports.Meta = Meta;

var Item = function Item(_a) {
  var customizePrefixCls = _a.prefixCls,
      children = _a.children,
      actions = _a.actions,
      extra = _a.extra,
      className = _a.className,
      colStyle = _a.colStyle,
      others = __rest(_a, ["prefixCls", "children", "actions", "extra", "className", "colStyle"]);

  var _React$useContext2 = React.useContext(_index.ListContext),
      grid = _React$useContext2.grid,
      itemLayout = _React$useContext2.itemLayout;

  var _React$useContext3 = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext3.getPrefixCls;

  var isItemContainsTextNodeAndNotSingular = function isItemContainsTextNodeAndNotSingular() {
    var result;
    React.Children.forEach(children, function (element) {
      if (typeof element === 'string') {
        result = true;
      }
    });
    return result && React.Children.count(children) > 1;
  };

  var isFlexMode = function isFlexMode() {
    if (itemLayout === 'vertical') {
      return !!extra;
    }

    return !isItemContainsTextNodeAndNotSingular();
  };

  var prefixCls = getPrefixCls('list', customizePrefixCls);
  var actionsContent = actions && actions.length > 0 && /*#__PURE__*/React.createElement("ul", {
    className: "".concat(prefixCls, "-item-action"),
    key: "actions"
  }, actions.map(function (action, i) {
    return (
      /*#__PURE__*/
      // eslint-disable-next-line react/no-array-index-key
      React.createElement("li", {
        key: "".concat(prefixCls, "-item-action-").concat(i)
      }, action, i !== actions.length - 1 && /*#__PURE__*/React.createElement("em", {
        className: "".concat(prefixCls, "-item-action-split")
      }))
    );
  }));
  var Element = grid ? 'div' : 'li';
  var itemChildren = /*#__PURE__*/React.createElement(Element, (0, _extends2["default"])({}, others, {
    // `li` element `onCopy` prop args is not same as `div`
    className: (0, _classnames["default"])("".concat(prefixCls, "-item"), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-item-no-flex"), !isFlexMode()), className)
  }), itemLayout === 'vertical' && extra ? [/*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-item-main"),
    key: "content"
  }, children, actionsContent), /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-item-extra"),
    key: "extra"
  }, extra)] : [children, actionsContent, (0, _reactNode.cloneElement)(extra, {
    key: 'extra'
  })]);
  return grid ? /*#__PURE__*/React.createElement(_grid.Col, {
    flex: 1,
    style: colStyle
  }, itemChildren) : itemChildren;
};

Item.Meta = Meta;
var _default = Item;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/list/index.js":
/*!*********************************************!*\
  !*** ./node_modules/antd/lib/list/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ListConsumer = exports.ListContext = void 0;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _spin = _interopRequireDefault(__webpack_require__(/*! ../spin */ "./node_modules/antd/lib/spin/index.js"));

var _useBreakpoint = _interopRequireDefault(__webpack_require__(/*! ../grid/hooks/useBreakpoint */ "./node_modules/antd/lib/grid/hooks/useBreakpoint.js"));

var _responsiveObserve = __webpack_require__(/*! ../_util/responsiveObserve */ "./node_modules/antd/lib/_util/responsiveObserve.js");

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _pagination = _interopRequireDefault(__webpack_require__(/*! ../pagination */ "./node_modules/antd/lib/pagination/index.js"));

var _grid = __webpack_require__(/*! ../grid */ "./node_modules/antd/lib/grid/index.js");

var _Item = _interopRequireDefault(__webpack_require__(/*! ./Item */ "./node_modules/antd/lib/list/Item.js"));

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var ListContext = /*#__PURE__*/React.createContext({});
exports.ListContext = ListContext;
var ListConsumer = ListContext.Consumer;
exports.ListConsumer = ListConsumer;

function List(_a) {
  var _classNames;

  var _a$pagination = _a.pagination,
      pagination = _a$pagination === void 0 ? false : _a$pagination,
      customizePrefixCls = _a.prefixCls,
      _a$bordered = _a.bordered,
      bordered = _a$bordered === void 0 ? false : _a$bordered,
      _a$split = _a.split,
      split = _a$split === void 0 ? true : _a$split,
      className = _a.className,
      children = _a.children,
      itemLayout = _a.itemLayout,
      loadMore = _a.loadMore,
      grid = _a.grid,
      _a$dataSource = _a.dataSource,
      dataSource = _a$dataSource === void 0 ? [] : _a$dataSource,
      size = _a.size,
      header = _a.header,
      footer = _a.footer,
      _a$loading = _a.loading,
      loading = _a$loading === void 0 ? false : _a$loading,
      rowKey = _a.rowKey,
      renderItem = _a.renderItem,
      locale = _a.locale,
      rest = __rest(_a, ["pagination", "prefixCls", "bordered", "split", "className", "children", "itemLayout", "loadMore", "grid", "dataSource", "size", "header", "footer", "loading", "rowKey", "renderItem", "locale"]);

  var paginationObj = pagination && (0, _typeof2["default"])(pagination) === 'object' ? pagination : {};

  var _React$useState = React.useState(paginationObj.defaultCurrent || 1),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      paginationCurrent = _React$useState2[0],
      setPaginationCurrent = _React$useState2[1];

  var _React$useState3 = React.useState(paginationObj.defaultPageSize || 10),
      _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
      paginationSize = _React$useState4[0],
      setPaginationSize = _React$useState4[1];

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      renderEmpty = _React$useContext.renderEmpty,
      direction = _React$useContext.direction;

  var defaultPaginationProps = {
    current: 1,
    total: 0
  };
  var keys = {};

  var triggerPaginationEvent = function triggerPaginationEvent(eventName) {
    return function (page, pageSize) {
      setPaginationCurrent(page);
      setPaginationSize(pageSize);

      if (pagination && pagination[eventName]) {
        pagination[eventName](page, pageSize);
      }
    };
  };

  var onPaginationChange = triggerPaginationEvent('onChange');
  var onPaginationShowSizeChange = triggerPaginationEvent('onShowSizeChange');

  var renderInnerItem = function renderInnerItem(item, index) {
    if (!renderItem) return null;
    var key;

    if (typeof rowKey === 'function') {
      key = rowKey(item);
    } else if (typeof rowKey === 'string') {
      key = item[rowKey];
    } else {
      key = item.key;
    }

    if (!key) {
      key = "list-item-".concat(index);
    }

    keys[index] = key;
    return renderItem(item, index);
  };

  var isSomethingAfterLastItem = function isSomethingAfterLastItem() {
    return !!(loadMore || pagination || footer);
  };

  var renderEmptyFunc = function renderEmptyFunc(prefixCls, renderEmptyHandler) {
    return /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-empty-text")
    }, locale && locale.emptyText || renderEmptyHandler('List'));
  };

  var prefixCls = getPrefixCls('list', customizePrefixCls);
  var loadingProp = loading;

  if (typeof loadingProp === 'boolean') {
    loadingProp = {
      spinning: loadingProp
    };
  }

  var isLoading = loadingProp && loadingProp.spinning; // large => lg
  // small => sm

  var sizeCls = '';

  switch (size) {
    case 'large':
      sizeCls = 'lg';
      break;

    case 'small':
      sizeCls = 'sm';
      break;

    default:
      break;
  }

  var classString = (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-vertical"), itemLayout === 'vertical'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(sizeCls), sizeCls), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-split"), split), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-bordered"), bordered), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-loading"), isLoading), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-grid"), grid), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-something-after-last-item"), isSomethingAfterLastItem()), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
  var paginationProps = (0, _extends2["default"])((0, _extends2["default"])((0, _extends2["default"])({}, defaultPaginationProps), {
    total: dataSource.length,
    current: paginationCurrent,
    pageSize: paginationSize
  }), pagination || {});
  var largestPage = Math.ceil(paginationProps.total / paginationProps.pageSize);

  if (paginationProps.current > largestPage) {
    paginationProps.current = largestPage;
  }

  var paginationContent = pagination ? /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-pagination")
  }, /*#__PURE__*/React.createElement(_pagination["default"], (0, _extends2["default"])({}, paginationProps, {
    onChange: onPaginationChange,
    onShowSizeChange: onPaginationShowSizeChange
  }))) : null;
  var splitDataSource = (0, _toConsumableArray2["default"])(dataSource);

  if (pagination) {
    if (dataSource.length > (paginationProps.current - 1) * paginationProps.pageSize) {
      splitDataSource = (0, _toConsumableArray2["default"])(dataSource).splice((paginationProps.current - 1) * paginationProps.pageSize, paginationProps.pageSize);
    }
  }

  var screens = (0, _useBreakpoint["default"])();
  var currentBreakpoint = React.useMemo(function () {
    for (var i = 0; i < _responsiveObserve.responsiveArray.length; i += 1) {
      var breakpoint = _responsiveObserve.responsiveArray[i];

      if (screens[breakpoint]) {
        return breakpoint;
      }
    }

    return undefined;
  }, [screens]);
  var colStyle = React.useMemo(function () {
    if (!grid) {
      return undefined;
    }

    var columnCount = currentBreakpoint && grid[currentBreakpoint] ? grid[currentBreakpoint] : grid.column;

    if (columnCount) {
      return {
        width: "".concat(100 / columnCount, "%"),
        maxWidth: "".concat(100 / columnCount, "%")
      };
    }
  }, [grid === null || grid === void 0 ? void 0 : grid.column, currentBreakpoint]);
  var childrenContent = isLoading && /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: 53
    }
  });

  if (splitDataSource.length > 0) {
    var items = splitDataSource.map(function (item, index) {
      return renderInnerItem(item, index);
    });
    var childrenList = React.Children.map(items, function (child, index) {
      return /*#__PURE__*/React.createElement("div", {
        key: keys[index],
        style: colStyle
      }, child);
    });
    childrenContent = grid ? /*#__PURE__*/React.createElement(_grid.Row, {
      gutter: grid.gutter
    }, childrenList) : /*#__PURE__*/React.createElement("ul", {
      className: "".concat(prefixCls, "-items")
    }, items);
  } else if (!children && !isLoading) {
    childrenContent = renderEmptyFunc(prefixCls, renderEmpty);
  }

  var paginationPosition = paginationProps.position || 'bottom';
  return /*#__PURE__*/React.createElement(ListContext.Provider, {
    value: {
      grid: grid,
      itemLayout: itemLayout
    }
  }, /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({
    className: classString
  }, rest), (paginationPosition === 'top' || paginationPosition === 'both') && paginationContent, header && /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-header")
  }, header), /*#__PURE__*/React.createElement(_spin["default"], loadingProp, childrenContent, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-footer")
  }, footer), loadMore || (paginationPosition === 'bottom' || paginationPosition === 'both') && paginationContent));
}

List.Item = _Item["default"];
var _default = List;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/locale-provider/LocaleReceiver.js":
/*!*****************************************************************!*\
  !*** ./node_modules/antd/lib/locale-provider/LocaleReceiver.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLocaleReceiver = useLocaleReceiver;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createSuper */ "./node_modules/@babel/runtime/helpers/createSuper.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _default = _interopRequireDefault(__webpack_require__(/*! ./default */ "./node_modules/antd/lib/locale-provider/default.js"));

var _context = _interopRequireDefault(__webpack_require__(/*! ./context */ "./node_modules/antd/lib/locale-provider/context.js"));

var LocaleReceiver = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(LocaleReceiver, _React$Component);

  var _super = (0, _createSuper2["default"])(LocaleReceiver);

  function LocaleReceiver() {
    (0, _classCallCheck2["default"])(this, LocaleReceiver);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(LocaleReceiver, [{
    key: "getLocale",
    value: function getLocale() {
      var _this$props = this.props,
          componentName = _this$props.componentName,
          defaultLocale = _this$props.defaultLocale;
      var locale = defaultLocale || _default["default"][componentName || 'global'];
      var antLocale = this.context;
      var localeFromContext = componentName && antLocale ? antLocale[componentName] : {};
      return (0, _extends2["default"])((0, _extends2["default"])({}, typeof locale === 'function' ? locale() : locale), localeFromContext || {});
    }
  }, {
    key: "getLocaleCode",
    value: function getLocaleCode() {
      var antLocale = this.context;
      var localeCode = antLocale && antLocale.locale; // Had use LocaleProvide but didn't set locale

      if (antLocale && antLocale.exist && !localeCode) {
        return _default["default"].locale;
      }

      return localeCode;
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children(this.getLocale(), this.getLocaleCode(), this.context);
    }
  }]);
  return LocaleReceiver;
}(React.Component);

exports["default"] = LocaleReceiver;
LocaleReceiver.defaultProps = {
  componentName: 'global'
};
LocaleReceiver.contextType = _context["default"];

function useLocaleReceiver(componentName, defaultLocale) {
  var antLocale = React.useContext(_context["default"]);
  var componentLocale = React.useMemo(function () {
    var locale = defaultLocale || _default["default"][componentName || 'global'];
    var localeFromContext = componentName && antLocale ? antLocale[componentName] : {};
    return (0, _extends2["default"])((0, _extends2["default"])({}, typeof locale === 'function' ? locale() : locale), localeFromContext || {});
  }, [componentName, defaultLocale, antLocale]);
  return [componentLocale];
}

/***/ }),

/***/ "./node_modules/antd/lib/locale-provider/context.js":
/*!**********************************************************!*\
  !*** ./node_modules/antd/lib/locale-provider/context.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var LocaleContext = /*#__PURE__*/(0, _react.createContext)(undefined);
var _default = LocaleContext;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/locale-provider/default.js":
/*!**********************************************************!*\
  !*** ./node_modules/antd/lib/locale-provider/default.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default2 = _interopRequireDefault(__webpack_require__(/*! ../locale/default */ "./node_modules/antd/lib/locale/default.js"));

var _default = _default2["default"];
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/locale-provider/index.js":
/*!********************************************************!*\
  !*** ./node_modules/antd/lib/locale-provider/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ANT_MARK = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createSuper */ "./node_modules/@babel/runtime/helpers/createSuper.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _devWarning = _interopRequireDefault(__webpack_require__(/*! ../_util/devWarning */ "./node_modules/antd/lib/_util/devWarning.js"));

var _locale = __webpack_require__(/*! ../modal/locale */ "./node_modules/antd/lib/modal/locale.js");

var _context = _interopRequireDefault(__webpack_require__(/*! ./context */ "./node_modules/antd/lib/locale-provider/context.js"));

var ANT_MARK = 'internalMark';
exports.ANT_MARK = ANT_MARK;

var LocaleProvider = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(LocaleProvider, _React$Component);

  var _super = (0, _createSuper2["default"])(LocaleProvider);

  function LocaleProvider(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, LocaleProvider);
    _this = _super.call(this, props);
    (0, _locale.changeConfirmLocale)(props.locale && props.locale.Modal);
    (0, _devWarning["default"])(props._ANT_MARK__ === ANT_MARK, 'LocaleProvider', '`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale');
    return _this;
  }

  (0, _createClass2["default"])(LocaleProvider, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var locale = this.props.locale;

      if (prevProps.locale !== locale) {
        (0, _locale.changeConfirmLocale)(locale && locale.Modal);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0, _locale.changeConfirmLocale)();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          locale = _this$props.locale,
          children = _this$props.children;
      return /*#__PURE__*/React.createElement(_context["default"].Provider, {
        value: (0, _extends2["default"])((0, _extends2["default"])({}, locale), {
          exist: true
        })
      }, children);
    }
  }]);
  return LocaleProvider;
}(React.Component);

exports["default"] = LocaleProvider;
LocaleProvider.defaultProps = {
  locale: {}
};

/***/ }),

/***/ "./node_modules/antd/lib/locale/default.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/locale/default.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _en_US = _interopRequireDefault(__webpack_require__(/*! rc-pagination/lib/locale/en_US */ "./node_modules/rc-pagination/lib/locale/en_US.js"));

var _en_US2 = _interopRequireDefault(__webpack_require__(/*! ../date-picker/locale/en_US */ "./node_modules/antd/lib/date-picker/locale/en_US.js"));

var _en_US3 = _interopRequireDefault(__webpack_require__(/*! ../time-picker/locale/en_US */ "./node_modules/antd/lib/time-picker/locale/en_US.js"));

var _en_US4 = _interopRequireDefault(__webpack_require__(/*! ../calendar/locale/en_US */ "./node_modules/antd/lib/calendar/locale/en_US.js"));

/* eslint-disable no-template-curly-in-string */
var typeTemplate = '${label} is not a valid ${type}';
var localeValues = {
  locale: 'en',
  Pagination: _en_US["default"],
  DatePicker: _en_US2["default"],
  TimePicker: _en_US3["default"],
  Calendar: _en_US4["default"],
  global: {
    placeholder: 'Please select'
  },
  Table: {
    filterTitle: 'Filter menu',
    filterConfirm: 'OK',
    filterReset: 'Reset',
    filterEmptyText: 'No filters',
    emptyText: 'No data',
    selectAll: 'Select current page',
    selectInvert: 'Invert current page',
    selectionAll: 'Select all data',
    sortTitle: 'Sort',
    expand: 'Expand row',
    collapse: 'Collapse row',
    triggerDesc: 'Click to sort descending',
    triggerAsc: 'Click to sort ascending',
    cancelSort: 'Click to cancel sorting'
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Cancel',
    justOkText: 'OK'
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Cancel'
  },
  Transfer: {
    titles: ['', ''],
    searchPlaceholder: 'Search here',
    itemUnit: 'item',
    itemsUnit: 'items',
    remove: 'Remove',
    selectCurrent: 'Select current page',
    removeCurrent: 'Remove current page',
    selectAll: 'Select all data',
    removeAll: 'Remove all data',
    selectInvert: 'Invert current page'
  },
  Upload: {
    uploading: 'Uploading...',
    removeFile: 'Remove file',
    uploadError: 'Upload error',
    previewFile: 'Preview file',
    downloadFile: 'Download file'
  },
  Empty: {
    description: 'No Data'
  },
  Icon: {
    icon: 'icon'
  },
  Text: {
    edit: 'Edit',
    copy: 'Copy',
    copied: 'Copied',
    expand: 'Expand'
  },
  PageHeader: {
    back: 'Back'
  },
  Form: {
    optional: '(optional)',
    defaultValidateMessages: {
      "default": 'Field validation error for ${label}',
      required: 'Please enter ${label}',
      "enum": '${label} must be one of [${enum}]',
      whitespace: '${label} cannot be a blank character',
      date: {
        format: '${label} date format is invalid',
        parse: '${label} cannot be converted to a date',
        invalid: '${label} is an invalid date'
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        "boolean": typeTemplate,
        integer: typeTemplate,
        "float": typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate
      },
      string: {
        len: '${label} must be ${len} characters',
        min: '${label} must be at least ${min} characters',
        max: '${label} must be up to ${max} characters',
        range: '${label} must be between ${min}-${max} characters'
      },
      number: {
        len: '${label} must be equal to ${len}',
        min: '${label} must be minimum ${min}',
        max: '${label} must be maximum ${max}',
        range: '${label} must be between ${min}-${max}'
      },
      array: {
        len: 'Must be ${len} ${label}',
        min: 'At least ${min} ${label}',
        max: 'At most ${max} ${label}',
        range: 'The amount of ${label} must be between ${min}-${max}'
      },
      pattern: {
        mismatch: '${label} does not match the pattern ${pattern}'
      }
    }
  }
};
var _default = localeValues;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/message/hooks/useMessage.js":
/*!***********************************************************!*\
  !*** ./node_modules/antd/lib/message/hooks/useMessage.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createUseMessage;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _useNotification = _interopRequireDefault(__webpack_require__(/*! rc-notification/lib/useNotification */ "./node_modules/rc-notification/lib/useNotification.js"));

var _configProvider = __webpack_require__(/*! ../../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _ = __webpack_require__(/*! .. */ "./node_modules/antd/lib/message/index.js");

function createUseMessage(getRcNotificationInstance, getRCNoticeProps) {
  var useMessage = function useMessage() {
    // We can only get content by render
    var getPrefixCls; // We create a proxy to handle delay created instance

    var innerInstance = null;
    var proxy = {
      add: function add(noticeProps, holderCallback) {
        innerInstance === null || innerInstance === void 0 ? void 0 : innerInstance.component.add(noticeProps, holderCallback);
      }
    };

    var _useRCNotification = (0, _useNotification["default"])(proxy),
        _useRCNotification2 = (0, _slicedToArray2["default"])(_useRCNotification, 2),
        hookNotify = _useRCNotification2[0],
        holder = _useRCNotification2[1];

    function notify(args) {
      var customizePrefixCls = args.prefixCls;
      var mergedPrefixCls = getPrefixCls('message', customizePrefixCls);
      var target = args.key || (0, _.getKeyThenIncreaseKey)();
      var closePromise = new Promise(function (resolve) {
        var callback = function callback() {
          if (typeof args.onClose === 'function') {
            args.onClose();
          }

          return resolve(true);
        };

        getRcNotificationInstance((0, _extends2["default"])((0, _extends2["default"])({}, args), {
          prefixCls: mergedPrefixCls
        }), function (_ref) {
          var prefixCls = _ref.prefixCls,
              instance = _ref.instance;
          innerInstance = instance;
          hookNotify(getRCNoticeProps((0, _extends2["default"])((0, _extends2["default"])({}, args), {
            key: target,
            onClose: callback
          }), prefixCls));
        });
      });

      var result = function result() {
        if (innerInstance) {
          innerInstance.removeNotice(target);
        }
      };

      result.then = function (filled, rejected) {
        return closePromise.then(filled, rejected);
      };

      result.promise = closePromise;
      return result;
    } // Fill functions


    var hookApiRef = React.useRef({});
    hookApiRef.current.open = notify;
    ['success', 'info', 'warning', 'error', 'loading'].forEach(function (type) {
      return (0, _.attachTypeApi)(hookApiRef.current, type);
    });
    return [hookApiRef.current, /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, {
      key: "holder"
    }, function (context) {
      getPrefixCls = context.getPrefixCls;
      return holder;
    })];
  };

  return useMessage;
}

/***/ }),

/***/ "./node_modules/antd/lib/message/index.js":
/*!************************************************!*\
  !*** ./node_modules/antd/lib/message/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getKeyThenIncreaseKey = getKeyThenIncreaseKey;
exports.attachTypeApi = attachTypeApi;
exports["default"] = exports.getInstance = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _rcNotification = _interopRequireDefault(__webpack_require__(/*! rc-notification */ "./node_modules/rc-notification/es/index.js"));

var _LoadingOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/LoadingOutlined */ "./node_modules/@ant-design/icons/LoadingOutlined.js"));

var _ExclamationCircleFilled = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/ExclamationCircleFilled */ "./node_modules/@ant-design/icons/ExclamationCircleFilled.js"));

var _CloseCircleFilled = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CloseCircleFilled */ "./node_modules/@ant-design/icons/CloseCircleFilled.js"));

var _CheckCircleFilled = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CheckCircleFilled */ "./node_modules/@ant-design/icons/CheckCircleFilled.js"));

var _InfoCircleFilled = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/InfoCircleFilled */ "./node_modules/@ant-design/icons/InfoCircleFilled.js"));

var _useMessage = _interopRequireDefault(__webpack_require__(/*! ./hooks/useMessage */ "./node_modules/antd/lib/message/hooks/useMessage.js"));

var messageInstance;
var defaultDuration = 3;
var defaultTop;
var key = 1;
var localPrefixCls = 'ant-message';
var transitionName = 'move-up';
var getContainer;
var maxCount;
var rtl = false;

function getKeyThenIncreaseKey() {
  return key++;
}

function setMessageConfig(options) {
  if (options.top !== undefined) {
    defaultTop = options.top;
    messageInstance = null; // delete messageInstance for new defaultTop
  }

  if (options.duration !== undefined) {
    defaultDuration = options.duration;
  }

  if (options.prefixCls !== undefined) {
    localPrefixCls = options.prefixCls;
  }

  if (options.getContainer !== undefined) {
    getContainer = options.getContainer;
  }

  if (options.transitionName !== undefined) {
    transitionName = options.transitionName;
    messageInstance = null; // delete messageInstance for new transitionName
  }

  if (options.maxCount !== undefined) {
    maxCount = options.maxCount;
    messageInstance = null;
  }

  if (options.rtl !== undefined) {
    rtl = options.rtl;
  }
}

function getRCNotificationInstance(args, callback) {
  var prefixCls = args.prefixCls || localPrefixCls;

  if (messageInstance) {
    callback({
      prefixCls: prefixCls,
      instance: messageInstance
    });
    return;
  }

  _rcNotification["default"].newInstance({
    prefixCls: prefixCls,
    transitionName: transitionName,
    style: {
      top: defaultTop
    },
    getContainer: getContainer,
    maxCount: maxCount
  }, function (instance) {
    if (messageInstance) {
      callback({
        prefixCls: prefixCls,
        instance: messageInstance
      });
      return;
    }

    messageInstance = instance;
    callback({
      prefixCls: prefixCls,
      instance: instance
    });
  });
}

var typeToIcon = {
  info: _InfoCircleFilled["default"],
  success: _CheckCircleFilled["default"],
  error: _CloseCircleFilled["default"],
  warning: _ExclamationCircleFilled["default"],
  loading: _LoadingOutlined["default"]
};

function getRCNoticeProps(args, prefixCls) {
  var _classNames;

  var duration = args.duration !== undefined ? args.duration : defaultDuration;
  var IconComponent = typeToIcon[args.type];
  var messageClass = (0, _classnames["default"])("".concat(prefixCls, "-custom-content"), (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(args.type), args.type), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), rtl === true), _classNames));
  return {
    key: args.key,
    duration: duration,
    style: args.style || {},
    className: args.className,
    content: /*#__PURE__*/React.createElement("div", {
      className: messageClass
    }, args.icon || IconComponent && /*#__PURE__*/React.createElement(IconComponent, null), /*#__PURE__*/React.createElement("span", null, args.content)),
    onClose: args.onClose
  };
}

function notice(args) {
  var target = args.key || key++;
  var closePromise = new Promise(function (resolve) {
    var callback = function callback() {
      if (typeof args.onClose === 'function') {
        args.onClose();
      }

      return resolve(true);
    };

    getRCNotificationInstance(args, function (_ref) {
      var prefixCls = _ref.prefixCls,
          instance = _ref.instance;
      instance.notice(getRCNoticeProps((0, _extends2["default"])((0, _extends2["default"])({}, args), {
        key: target,
        onClose: callback
      }), prefixCls));
    });
  });

  var result = function result() {
    if (messageInstance) {
      messageInstance.removeNotice(target);
    }
  };

  result.then = function (filled, rejected) {
    return closePromise.then(filled, rejected);
  };

  result.promise = closePromise;
  return result;
}

function isArgsProps(content) {
  return Object.prototype.toString.call(content) === '[object Object]' && !!content.content;
}

var api = {
  open: notice,
  config: setMessageConfig,
  destroy: function destroy(messageKey) {
    if (messageInstance) {
      if (messageKey) {
        var _messageInstance = messageInstance,
            removeNotice = _messageInstance.removeNotice;
        removeNotice(messageKey);
      } else {
        var _messageInstance2 = messageInstance,
            destroy = _messageInstance2.destroy;
        destroy();
        messageInstance = null;
      }
    }
  }
};

function attachTypeApi(originalApi, type) {
  originalApi[type] = function (content, duration, onClose) {
    if (isArgsProps(content)) {
      return originalApi.open((0, _extends2["default"])((0, _extends2["default"])({}, content), {
        type: type
      }));
    }

    if (typeof duration === 'function') {
      onClose = duration;
      duration = undefined;
    }

    return originalApi.open({
      content: content,
      duration: duration,
      type: type,
      onClose: onClose
    });
  };
}

['success', 'info', 'warning', 'error', 'loading'].forEach(function (type) {
  return attachTypeApi(api, type);
});
api.warn = api.warning;
api.useMessage = (0, _useMessage["default"])(getRCNotificationInstance, getRCNoticeProps);
/** @private test only function. Not work on production */

var getInstance = function getInstance() {
  return  false ? undefined : null;
};

exports.getInstance = getInstance;
var _default = api;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/modal/locale.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/modal/locale.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeConfirmLocale = changeConfirmLocale;
exports.getConfirmLocale = getConfirmLocale;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _default = _interopRequireDefault(__webpack_require__(/*! ../locale/default */ "./node_modules/antd/lib/locale/default.js"));

var runtimeLocale = (0, _extends2["default"])({}, _default["default"].Modal);

function changeConfirmLocale(newLocale) {
  if (newLocale) {
    runtimeLocale = (0, _extends2["default"])((0, _extends2["default"])({}, runtimeLocale), newLocale);
  } else {
    runtimeLocale = (0, _extends2["default"])({}, _default["default"].Modal);
  }
}

function getConfirmLocale() {
  return runtimeLocale;
}

/***/ }),

/***/ "./node_modules/antd/lib/notification/hooks/useNotification.js":
/*!*********************************************************************!*\
  !*** ./node_modules/antd/lib/notification/hooks/useNotification.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createUseNotification;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _useNotification = _interopRequireDefault(__webpack_require__(/*! rc-notification/lib/useNotification */ "./node_modules/rc-notification/lib/useNotification.js"));

var _configProvider = __webpack_require__(/*! ../../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

function createUseNotification(getNotificationInstance, getRCNoticeProps) {
  var useNotification = function useNotification() {
    // We can only get content by render
    var getPrefixCls; // We create a proxy to handle delay created instance

    var innerInstance = null;
    var proxy = {
      add: function add(noticeProps, holderCallback) {
        innerInstance === null || innerInstance === void 0 ? void 0 : innerInstance.component.add(noticeProps, holderCallback);
      }
    };

    var _useRCNotification = (0, _useNotification["default"])(proxy),
        _useRCNotification2 = (0, _slicedToArray2["default"])(_useRCNotification, 2),
        hookNotify = _useRCNotification2[0],
        holder = _useRCNotification2[1];

    function notify(args) {
      var customizePrefixCls = args.prefixCls;
      var mergedPrefixCls = getPrefixCls('notification', customizePrefixCls);
      getNotificationInstance((0, _extends2["default"])((0, _extends2["default"])({}, args), {
        prefixCls: mergedPrefixCls
      }), function (_ref) {
        var prefixCls = _ref.prefixCls,
            instance = _ref.instance;
        innerInstance = instance;
        hookNotify(getRCNoticeProps(args, prefixCls));
      });
    } // Fill functions


    var hookApiRef = React.useRef({});
    hookApiRef.current.open = notify;
    ['success', 'info', 'warning', 'error'].forEach(function (type) {
      hookApiRef.current[type] = function (args) {
        return hookApiRef.current.open((0, _extends2["default"])((0, _extends2["default"])({}, args), {
          type: type
        }));
      };
    });
    return [hookApiRef.current, /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, {
      key: "holder"
    }, function (context) {
      getPrefixCls = context.getPrefixCls;
      return holder;
    })];
  };

  return useNotification;
}

/***/ }),

/***/ "./node_modules/antd/lib/notification/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/notification/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getInstance = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _rcNotification = _interopRequireDefault(__webpack_require__(/*! rc-notification */ "./node_modules/rc-notification/es/index.js"));

var _CloseOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CloseOutlined */ "./node_modules/@ant-design/icons/CloseOutlined.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _CheckCircleOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CheckCircleOutlined */ "./node_modules/@ant-design/icons/CheckCircleOutlined.js"));

var _CloseCircleOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CloseCircleOutlined */ "./node_modules/@ant-design/icons/CloseCircleOutlined.js"));

var _ExclamationCircleOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/ExclamationCircleOutlined */ "./node_modules/@ant-design/icons/ExclamationCircleOutlined.js"));

var _InfoCircleOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/InfoCircleOutlined */ "./node_modules/@ant-design/icons/InfoCircleOutlined.js"));

var _useNotification = _interopRequireDefault(__webpack_require__(/*! ./hooks/useNotification */ "./node_modules/antd/lib/notification/hooks/useNotification.js"));

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var notificationInstance = {};
var defaultDuration = 4.5;
var defaultTop = 24;
var defaultBottom = 24;
var defaultPrefixCls = 'ant-notification';
var defaultPlacement = 'topRight';
var defaultGetContainer;
var defaultCloseIcon;
var rtl = false;

function setNotificationConfig(options) {
  var duration = options.duration,
      placement = options.placement,
      bottom = options.bottom,
      top = options.top,
      getContainer = options.getContainer,
      closeIcon = options.closeIcon,
      prefixCls = options.prefixCls;

  if (prefixCls !== undefined) {
    defaultPrefixCls = prefixCls;
  }

  if (duration !== undefined) {
    defaultDuration = duration;
  }

  if (placement !== undefined) {
    defaultPlacement = placement;
  } else if (options.rtl) {
    defaultPlacement = 'topLeft';
  }

  if (bottom !== undefined) {
    defaultBottom = bottom;
  }

  if (top !== undefined) {
    defaultTop = top;
  }

  if (getContainer !== undefined) {
    defaultGetContainer = getContainer;
  }

  if (closeIcon !== undefined) {
    defaultCloseIcon = closeIcon;
  }

  if (options.rtl !== undefined) {
    rtl = options.rtl;
  }
}

function getPlacementStyle(placement) {
  var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultTop;
  var bottom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultBottom;
  var style;

  switch (placement) {
    case 'topLeft':
      style = {
        left: 0,
        top: top,
        bottom: 'auto'
      };
      break;

    case 'topRight':
      style = {
        right: 0,
        top: top,
        bottom: 'auto'
      };
      break;

    case 'bottomLeft':
      style = {
        left: 0,
        top: 'auto',
        bottom: bottom
      };
      break;

    default:
      style = {
        right: 0,
        top: 'auto',
        bottom: bottom
      };
      break;
  }

  return style;
}

function getNotificationInstance(args, callback) {
  var _args$placement = args.placement,
      placement = _args$placement === void 0 ? defaultPlacement : _args$placement,
      top = args.top,
      bottom = args.bottom,
      _args$getContainer = args.getContainer,
      getContainer = _args$getContainer === void 0 ? defaultGetContainer : _args$getContainer,
      _args$closeIcon = args.closeIcon,
      closeIcon = _args$closeIcon === void 0 ? defaultCloseIcon : _args$closeIcon;
  var outerPrefixCls = args.prefixCls || defaultPrefixCls;
  var prefixCls = "".concat(outerPrefixCls, "-notice");
  var cacheKey = "".concat(outerPrefixCls, "-").concat(placement);
  var cacheInstance = notificationInstance[cacheKey];

  if (cacheInstance) {
    Promise.resolve(cacheInstance).then(function (instance) {
      callback({
        prefixCls: prefixCls,
        instance: instance
      });
    });
    return;
  }

  var closeIconToRender = /*#__PURE__*/React.createElement("span", {
    className: "".concat(outerPrefixCls, "-close-x")
  }, closeIcon || /*#__PURE__*/React.createElement(_CloseOutlined["default"], {
    className: "".concat(outerPrefixCls, "-close-icon")
  }));
  var notificationClass = (0, _classnames["default"])("".concat(outerPrefixCls, "-").concat(placement), (0, _defineProperty2["default"])({}, "".concat(outerPrefixCls, "-rtl"), rtl === true));
  notificationInstance[cacheKey] = new Promise(function (resolve) {
    _rcNotification["default"].newInstance({
      prefixCls: outerPrefixCls,
      className: notificationClass,
      style: getPlacementStyle(placement, top, bottom),
      getContainer: getContainer,
      closeIcon: closeIconToRender
    }, function (notification) {
      resolve(notification);
      callback({
        prefixCls: prefixCls,
        instance: notification
      });
    });
  });
}

var typeToIcon = {
  success: _CheckCircleOutlined["default"],
  info: _InfoCircleOutlined["default"],
  error: _CloseCircleOutlined["default"],
  warning: _ExclamationCircleOutlined["default"]
};

function getRCNoticeProps(args, prefixCls) {
  var duration = args.duration === undefined ? defaultDuration : args.duration;
  var iconNode = null;

  if (args.icon) {
    iconNode = /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-icon")
    }, args.icon);
  } else if (args.type) {
    iconNode = /*#__PURE__*/React.createElement(typeToIcon[args.type] || null, {
      className: "".concat(prefixCls, "-icon ").concat(prefixCls, "-icon-").concat(args.type)
    });
  }

  var autoMarginTag = !args.description && iconNode ? /*#__PURE__*/React.createElement("span", {
    className: "".concat(prefixCls, "-message-single-line-auto-margin")
  }) : null;
  return {
    content: /*#__PURE__*/React.createElement("div", {
      className: iconNode ? "".concat(prefixCls, "-with-icon") : '',
      role: "alert"
    }, iconNode, /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-message")
    }, autoMarginTag, args.message), /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-description")
    }, args.description), args.btn ? /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-btn")
    }, args.btn) : null),
    duration: duration,
    closable: true,
    onClose: args.onClose,
    onClick: args.onClick,
    key: args.key,
    style: args.style || {},
    className: args.className
  };
}

function notice(args) {
  getNotificationInstance(args, function (_ref) {
    var prefixCls = _ref.prefixCls,
        instance = _ref.instance;
    instance.notice(getRCNoticeProps(args, prefixCls));
  });
}

var api = {
  open: notice,
  close: function close(key) {
    Object.keys(notificationInstance).forEach(function (cacheKey) {
      return Promise.resolve(notificationInstance[cacheKey]).then(function (instance) {
        instance.removeNotice(key);
      });
    });
  },
  config: setNotificationConfig,
  destroy: function destroy() {
    Object.keys(notificationInstance).forEach(function (cacheKey) {
      Promise.resolve(notificationInstance[cacheKey]).then(function (instance) {
        instance.destroy();
      });
      delete notificationInstance[cacheKey]; // lgtm[js/missing-await]
    });
  }
};
['success', 'info', 'warning', 'error'].forEach(function (type) {
  api[type] = function (args) {
    return api.open((0, _extends2["default"])((0, _extends2["default"])({}, args), {
      type: type
    }));
  };
});
api.warn = api.warning;
api.useNotification = (0, _useNotification["default"])(getNotificationInstance, getRCNoticeProps);
/** @private test only function. Not work on production */

var getInstance = function getInstance(cacheKey) {
  return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return",  false ? undefined : null);

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
};

exports.getInstance = getInstance;
var _default = api;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/pagination/MiniSelect.js":
/*!********************************************************!*\
  !*** ./node_modules/antd/lib/pagination/MiniSelect.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _select = _interopRequireDefault(__webpack_require__(/*! ../select */ "./node_modules/antd/lib/select/index.js"));

var MiniSelect = function MiniSelect(props) {
  return /*#__PURE__*/React.createElement(_select["default"], (0, _extends2["default"])({
    size: "small"
  }, props));
};

MiniSelect.Option = _select["default"].Option;
var _default = MiniSelect;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/pagination/Pagination.js":
/*!********************************************************!*\
  !*** ./node_modules/antd/lib/pagination/Pagination.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _rcPagination = _interopRequireDefault(__webpack_require__(/*! rc-pagination */ "./node_modules/rc-pagination/es/index.js"));

var _en_US = _interopRequireDefault(__webpack_require__(/*! rc-pagination/lib/locale/en_US */ "./node_modules/rc-pagination/lib/locale/en_US.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _LeftOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/LeftOutlined */ "./node_modules/@ant-design/icons/LeftOutlined.js"));

var _RightOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/RightOutlined */ "./node_modules/@ant-design/icons/RightOutlined.js"));

var _DoubleLeftOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/DoubleLeftOutlined */ "./node_modules/@ant-design/icons/DoubleLeftOutlined.js"));

var _DoubleRightOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/DoubleRightOutlined */ "./node_modules/@ant-design/icons/DoubleRightOutlined.js"));

var _MiniSelect = _interopRequireDefault(__webpack_require__(/*! ./MiniSelect */ "./node_modules/antd/lib/pagination/MiniSelect.js"));

var _select = _interopRequireDefault(__webpack_require__(/*! ../select */ "./node_modules/antd/lib/select/index.js"));

var _LocaleReceiver = _interopRequireDefault(__webpack_require__(/*! ../locale-provider/LocaleReceiver */ "./node_modules/antd/lib/locale-provider/LocaleReceiver.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _useBreakpoint2 = _interopRequireDefault(__webpack_require__(/*! ../grid/hooks/useBreakpoint */ "./node_modules/antd/lib/grid/hooks/useBreakpoint.js"));

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var Pagination = function Pagination(_a) {
  var customizePrefixCls = _a.prefixCls,
      customizeSelectPrefixCls = _a.selectPrefixCls,
      className = _a.className,
      size = _a.size,
      customLocale = _a.locale,
      restProps = __rest(_a, ["prefixCls", "selectPrefixCls", "className", "size", "locale"]);

  var _useBreakpoint = (0, _useBreakpoint2["default"])(),
      xs = _useBreakpoint.xs;

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var prefixCls = getPrefixCls('pagination', customizePrefixCls);

  var getIconsProps = function getIconsProps() {
    var ellipsis = /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-item-ellipsis")
    }, "\u2022\u2022\u2022");
    var prevIcon = /*#__PURE__*/React.createElement("button", {
      className: "".concat(prefixCls, "-item-link"),
      type: "button",
      tabIndex: -1
    }, /*#__PURE__*/React.createElement(_LeftOutlined["default"], null));
    var nextIcon = /*#__PURE__*/React.createElement("button", {
      className: "".concat(prefixCls, "-item-link"),
      type: "button",
      tabIndex: -1
    }, /*#__PURE__*/React.createElement(_RightOutlined["default"], null));
    var jumpPrevIcon = /*#__PURE__*/React.createElement("a", {
      className: "".concat(prefixCls, "-item-link")
    }, /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-item-container")
    }, /*#__PURE__*/React.createElement(_DoubleLeftOutlined["default"], {
      className: "".concat(prefixCls, "-item-link-icon")
    }), ellipsis));
    var jumpNextIcon = /*#__PURE__*/React.createElement("a", {
      className: "".concat(prefixCls, "-item-link")
    }, /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-item-container")
    }, /*#__PURE__*/React.createElement(_DoubleRightOutlined["default"], {
      className: "".concat(prefixCls, "-item-link-icon")
    }), ellipsis)); // change arrows direction in right-to-left direction

    if (direction === 'rtl') {
      var _ref = [nextIcon, prevIcon];
      prevIcon = _ref[0];
      nextIcon = _ref[1];
      var _ref2 = [jumpNextIcon, jumpPrevIcon];
      jumpPrevIcon = _ref2[0];
      jumpNextIcon = _ref2[1];
    }

    return {
      prevIcon: prevIcon,
      nextIcon: nextIcon,
      jumpPrevIcon: jumpPrevIcon,
      jumpNextIcon: jumpNextIcon
    };
  };

  var renderPagination = function renderPagination(contextLocale) {
    var locale = (0, _extends2["default"])((0, _extends2["default"])({}, contextLocale), customLocale);
    var isSmall = size === 'small' || !!(xs && !size && restProps.responsive);
    var selectPrefixCls = getPrefixCls('select', customizeSelectPrefixCls);
    var extendedClassName = (0, _classnames["default"])((0, _defineProperty2["default"])({
      mini: isSmall
    }, "".concat(prefixCls, "-rtl"), direction === 'rtl'), className);
    return /*#__PURE__*/React.createElement(_rcPagination["default"], (0, _extends2["default"])({}, restProps, {
      prefixCls: prefixCls,
      selectPrefixCls: selectPrefixCls
    }, getIconsProps(), {
      className: extendedClassName,
      selectComponentClass: isSmall ? _MiniSelect["default"] : _select["default"],
      locale: locale
    }));
  };

  return /*#__PURE__*/React.createElement(_LocaleReceiver["default"], {
    componentName: "Pagination",
    defaultLocale: _en_US["default"]
  }, renderPagination);
};

var _default = Pagination;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/pagination/index.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/pagination/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Pagination = _interopRequireDefault(__webpack_require__(/*! ./Pagination */ "./node_modules/antd/lib/pagination/Pagination.js"));

var _default = _Pagination["default"];
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/select/index.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/select/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _omit = _interopRequireDefault(__webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _rcSelect = _interopRequireWildcard(__webpack_require__(/*! rc-select */ "./node_modules/rc-select/es/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _iconUtil = _interopRequireDefault(__webpack_require__(/*! ./utils/iconUtil */ "./node_modules/antd/lib/select/utils/iconUtil.js"));

var _SizeContext = _interopRequireDefault(__webpack_require__(/*! ../config-provider/SizeContext */ "./node_modules/antd/lib/config-provider/SizeContext.js"));

// TODO: 4.0 - codemod should help to change `filterOption` to support node props.
var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var SECRET_COMBOBOX_MODE_DO_NOT_USE = 'SECRET_COMBOBOX_MODE_DO_NOT_USE';

var InternalSelect = function InternalSelect(_a, ref) {
  var _classNames2;

  var customizePrefixCls = _a.prefixCls,
      _a$bordered = _a.bordered,
      bordered = _a$bordered === void 0 ? true : _a$bordered,
      className = _a.className,
      getPopupContainer = _a.getPopupContainer,
      dropdownClassName = _a.dropdownClassName,
      _a$listHeight = _a.listHeight,
      listHeight = _a$listHeight === void 0 ? 256 : _a$listHeight,
      _a$listItemHeight = _a.listItemHeight,
      listItemHeight = _a$listItemHeight === void 0 ? 24 : _a$listItemHeight,
      customizeSize = _a.size,
      notFoundContent = _a.notFoundContent,
      _a$transitionName = _a.transitionName,
      transitionName = _a$transitionName === void 0 ? 'slide-up' : _a$transitionName,
      props = __rest(_a, ["prefixCls", "bordered", "className", "getPopupContainer", "dropdownClassName", "listHeight", "listItemHeight", "size", "notFoundContent", "transitionName"]);

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getContextPopupContainer = _React$useContext.getPopupContainer,
      getPrefixCls = _React$useContext.getPrefixCls,
      renderEmpty = _React$useContext.renderEmpty,
      direction = _React$useContext.direction,
      virtual = _React$useContext.virtual,
      dropdownMatchSelectWidth = _React$useContext.dropdownMatchSelectWidth;

  var size = React.useContext(_SizeContext["default"]);
  var prefixCls = getPrefixCls('select', customizePrefixCls);
  var mode = React.useMemo(function () {
    var m = props.mode;

    if (m === 'combobox') {
      return undefined;
    }

    if (m === SECRET_COMBOBOX_MODE_DO_NOT_USE) {
      return 'combobox';
    }

    return m;
  }, [props.mode]);
  var isMultiple = mode === 'multiple' || mode === 'tags'; // ===================== Empty =====================

  var mergedNotFound;

  if (notFoundContent !== undefined) {
    mergedNotFound = notFoundContent;
  } else if (mode === 'combobox') {
    mergedNotFound = null;
  } else {
    mergedNotFound = renderEmpty('Select');
  } // ===================== Icons =====================


  var _getIcons = (0, _iconUtil["default"])((0, _extends2["default"])((0, _extends2["default"])({}, props), {
    multiple: isMultiple,
    prefixCls: prefixCls
  })),
      suffixIcon = _getIcons.suffixIcon,
      itemIcon = _getIcons.itemIcon,
      removeIcon = _getIcons.removeIcon,
      clearIcon = _getIcons.clearIcon;

  var selectProps = (0, _omit["default"])(props, ['suffixIcon', 'itemIcon']);
  var rcSelectRtlDropDownClassName = (0, _classnames["default"])(dropdownClassName, (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-dropdown-").concat(direction), direction === 'rtl'));
  var mergedSize = customizeSize || size;
  var mergedClassName = (0, _classnames["default"])((_classNames2 = {}, (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-lg"), mergedSize === 'large'), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-sm"), mergedSize === 'small'), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-borderless"), !bordered), _classNames2), className);
  return /*#__PURE__*/React.createElement(_rcSelect["default"], (0, _extends2["default"])({
    ref: ref,
    virtual: virtual,
    dropdownMatchSelectWidth: dropdownMatchSelectWidth
  }, selectProps, {
    transitionName: transitionName,
    listHeight: listHeight,
    listItemHeight: listItemHeight,
    mode: mode,
    prefixCls: prefixCls,
    direction: direction,
    inputIcon: suffixIcon,
    menuItemSelectedIcon: itemIcon,
    removeIcon: removeIcon,
    clearIcon: clearIcon,
    notFoundContent: mergedNotFound,
    className: mergedClassName,
    getPopupContainer: getPopupContainer || getContextPopupContainer,
    dropdownClassName: rcSelectRtlDropDownClassName
  }));
};

var SelectRef = /*#__PURE__*/React.forwardRef(InternalSelect);
var Select = SelectRef;
Select.SECRET_COMBOBOX_MODE_DO_NOT_USE = SECRET_COMBOBOX_MODE_DO_NOT_USE;
Select.Option = _rcSelect.Option;
Select.OptGroup = _rcSelect.OptGroup;
var _default = Select;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/select/utils/iconUtil.js":
/*!********************************************************!*\
  !*** ./node_modules/antd/lib/select/utils/iconUtil.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getIcons;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _DownOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/DownOutlined */ "./node_modules/@ant-design/icons/DownOutlined.js"));

var _LoadingOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/LoadingOutlined */ "./node_modules/@ant-design/icons/LoadingOutlined.js"));

var _CheckOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CheckOutlined */ "./node_modules/@ant-design/icons/CheckOutlined.js"));

var _CloseOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CloseOutlined */ "./node_modules/@ant-design/icons/CloseOutlined.js"));

var _CloseCircleFilled = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CloseCircleFilled */ "./node_modules/@ant-design/icons/CloseCircleFilled.js"));

var _SearchOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/SearchOutlined */ "./node_modules/@ant-design/icons/SearchOutlined.js"));

function getIcons(_ref) {
  var suffixIcon = _ref.suffixIcon,
      clearIcon = _ref.clearIcon,
      menuItemSelectedIcon = _ref.menuItemSelectedIcon,
      removeIcon = _ref.removeIcon,
      loading = _ref.loading,
      multiple = _ref.multiple,
      prefixCls = _ref.prefixCls;
  // Clear Icon
  var mergedClearIcon = clearIcon;

  if (!clearIcon) {
    mergedClearIcon = /*#__PURE__*/React.createElement(_CloseCircleFilled["default"], null);
  } // Arrow item icon


  var mergedSuffixIcon = null;

  if (suffixIcon !== undefined) {
    mergedSuffixIcon = suffixIcon;
  } else if (loading) {
    mergedSuffixIcon = /*#__PURE__*/React.createElement(_LoadingOutlined["default"], {
      spin: true
    });
  } else {
    var iconCls = "".concat(prefixCls, "-suffix");

    mergedSuffixIcon = function mergedSuffixIcon(_ref2) {
      var open = _ref2.open,
          showSearch = _ref2.showSearch;

      if (open && showSearch) {
        return /*#__PURE__*/React.createElement(_SearchOutlined["default"], {
          className: iconCls
        });
      }

      return /*#__PURE__*/React.createElement(_DownOutlined["default"], {
        className: iconCls
      });
    };
  } // Checked item icon


  var mergedItemIcon = null;

  if (menuItemSelectedIcon !== undefined) {
    mergedItemIcon = menuItemSelectedIcon;
  } else if (multiple) {
    mergedItemIcon = /*#__PURE__*/React.createElement(_CheckOutlined["default"], null);
  } else {
    mergedItemIcon = null;
  }

  var mergedRemoveIcon = null;

  if (removeIcon !== undefined) {
    mergedRemoveIcon = removeIcon;
  } else {
    mergedRemoveIcon = /*#__PURE__*/React.createElement(_CloseOutlined["default"], null);
  }

  return {
    clearIcon: mergedClearIcon,
    suffixIcon: mergedSuffixIcon,
    itemIcon: mergedItemIcon,
    removeIcon: mergedRemoveIcon
  };
}

/***/ }),

/***/ "./node_modules/antd/lib/spin/index.js":
/*!*********************************************!*\
  !*** ./node_modules/antd/lib/spin/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createSuper */ "./node_modules/@babel/runtime/helpers/createSuper.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _omit = _interopRequireDefault(__webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js"));

var _debounce = _interopRequireDefault(__webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _type = __webpack_require__(/*! ../_util/type */ "./node_modules/antd/lib/_util/type.js");

var _reactNode = __webpack_require__(/*! ../_util/reactNode */ "./node_modules/antd/lib/_util/reactNode.js");

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var SpinSizes = (0, _type.tuple)('small', 'default', 'large'); // Render indicator

var defaultIndicator = null;

function renderIndicator(prefixCls, props) {
  var indicator = props.indicator;
  var dotClassName = "".concat(prefixCls, "-dot"); // should not be render default indicator when indicator value is null

  if (indicator === null) {
    return null;
  }

  if ((0, _reactNode.isValidElement)(indicator)) {
    return (0, _reactNode.cloneElement)(indicator, {
      className: (0, _classnames["default"])(indicator.props.className, dotClassName)
    });
  }

  if ((0, _reactNode.isValidElement)(defaultIndicator)) {
    return (0, _reactNode.cloneElement)(defaultIndicator, {
      className: (0, _classnames["default"])(defaultIndicator.props.className, dotClassName)
    });
  }

  return /*#__PURE__*/React.createElement("span", {
    className: (0, _classnames["default"])(dotClassName, "".concat(prefixCls, "-dot-spin"))
  }, /*#__PURE__*/React.createElement("i", {
    className: "".concat(prefixCls, "-dot-item")
  }), /*#__PURE__*/React.createElement("i", {
    className: "".concat(prefixCls, "-dot-item")
  }), /*#__PURE__*/React.createElement("i", {
    className: "".concat(prefixCls, "-dot-item")
  }), /*#__PURE__*/React.createElement("i", {
    className: "".concat(prefixCls, "-dot-item")
  }));
}

function shouldDelay(spinning, delay) {
  return !!spinning && !!delay && !isNaN(Number(delay));
}

var Spin = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Spin, _React$Component);

  var _super = (0, _createSuper2["default"])(Spin);

  function Spin(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Spin);
    _this = _super.call(this, props);

    _this.debouncifyUpdateSpinning = function (props) {
      var _ref = props || _this.props,
          delay = _ref.delay;

      if (delay) {
        _this.cancelExistingSpin();

        _this.updateSpinning = (0, _debounce["default"])(_this.originalUpdateSpinning, delay);
      }
    };

    _this.updateSpinning = function () {
      var spinning = _this.props.spinning;
      var currentSpinning = _this.state.spinning;

      if (currentSpinning !== spinning) {
        _this.setState({
          spinning: spinning
        });
      }
    };

    _this.renderSpin = function (_ref2) {
      var _classNames;

      var getPrefixCls = _ref2.getPrefixCls,
          direction = _ref2.direction;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          className = _a.className,
          size = _a.size,
          tip = _a.tip,
          wrapperClassName = _a.wrapperClassName,
          style = _a.style,
          restProps = __rest(_a, ["prefixCls", "className", "size", "tip", "wrapperClassName", "style"]);

      var spinning = _this.state.spinning;
      var prefixCls = getPrefixCls('spin', customizePrefixCls);
      var spinClassName = (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-sm"), size === 'small'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-lg"), size === 'large'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-spinning"), spinning), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-show-text"), !!tip), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className); // fix https://fb.me/react-unknown-prop

      var divProps = (0, _omit["default"])(restProps, ['spinning', 'delay', 'indicator']);
      var spinElement = /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({}, divProps, {
        style: style,
        className: spinClassName
      }), renderIndicator(prefixCls, _this.props), tip ? /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-text")
      }, tip) : null);

      if (_this.isNestedPattern()) {
        var containerClassName = (0, _classnames["default"])("".concat(prefixCls, "-container"), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-blur"), spinning));
        return /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({}, divProps, {
          className: (0, _classnames["default"])("".concat(prefixCls, "-nested-loading"), wrapperClassName)
        }), spinning && /*#__PURE__*/React.createElement("div", {
          key: "loading"
        }, spinElement), /*#__PURE__*/React.createElement("div", {
          className: containerClassName,
          key: "container"
        }, _this.props.children));
      }

      return spinElement;
    };

    var spinning = props.spinning,
        delay = props.delay;
    var shouldBeDelayed = shouldDelay(spinning, delay);
    _this.state = {
      spinning: spinning && !shouldBeDelayed
    };
    _this.originalUpdateSpinning = _this.updateSpinning;

    _this.debouncifyUpdateSpinning(props);

    return _this;
  }

  (0, _createClass2["default"])(Spin, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateSpinning();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.debouncifyUpdateSpinning();
      this.updateSpinning();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cancelExistingSpin();
    }
  }, {
    key: "cancelExistingSpin",
    value: function cancelExistingSpin() {
      var updateSpinning = this.updateSpinning;

      if (updateSpinning && updateSpinning.cancel) {
        updateSpinning.cancel();
      }
    }
  }, {
    key: "isNestedPattern",
    value: function isNestedPattern() {
      return !!(this.props && typeof this.props.children !== 'undefined');
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, this.renderSpin);
    }
  }], [{
    key: "setDefaultIndicator",
    value: function setDefaultIndicator(indicator) {
      defaultIndicator = indicator;
    }
  }]);
  return Spin;
}(React.Component);

Spin.defaultProps = {
  spinning: true,
  size: 'default',
  wrapperClassName: ''
};
var _default = Spin;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/time-picker/locale/en_US.js":
/*!***********************************************************!*\
  !*** ./node_modules/antd/lib/time-picker/locale/en_US.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var locale = {
  placeholder: 'Select time',
  rangePlaceholder: ['Start time', 'End time']
};
var _default = locale;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/rc-notification/lib/Notice.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-notification/lib/Notice.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createSuper */ "./node_modules/@babel/runtime/helpers/createSuper.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var Notice = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Notice, _Component);

  var _super = (0, _createSuper2.default)(Notice);

  function Notice() {
    var _this;

    (0, _classCallCheck2.default)(this, Notice);
    _this = _super.apply(this, arguments);
    _this.closeTimer = null;

    _this.close = function (e) {
      if (e) {
        e.stopPropagation();
      }

      _this.clearCloseTimer();

      var _this$props = _this.props,
          onClose = _this$props.onClose,
          noticeKey = _this$props.noticeKey;

      if (onClose) {
        onClose(noticeKey);
      }
    };

    _this.startCloseTimer = function () {
      if (_this.props.duration) {
        _this.closeTimer = window.setTimeout(function () {
          _this.close();
        }, _this.props.duration * 1000);
      }
    };

    _this.clearCloseTimer = function () {
      if (_this.closeTimer) {
        clearTimeout(_this.closeTimer);
        _this.closeTimer = null;
      }
    };

    return _this;
  }

  (0, _createClass2.default)(Notice, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startCloseTimer();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.duration !== prevProps.duration || this.props.updateMark !== prevProps.updateMark) {
        this.restartCloseTimer();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearCloseTimer();
    }
  }, {
    key: "restartCloseTimer",
    value: function restartCloseTimer() {
      this.clearCloseTimer();
      this.startCloseTimer();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          className = _this$props2.className,
          closable = _this$props2.closable,
          closeIcon = _this$props2.closeIcon,
          style = _this$props2.style,
          onClick = _this$props2.onClick,
          children = _this$props2.children,
          holder = _this$props2.holder;
      var componentClass = "".concat(prefixCls, "-notice");
      var dataOrAriaAttributeProps = Object.keys(this.props).reduce(function (acc, key) {
        if (key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-' || key === 'role') {
          acc[key] = _this2.props[key];
        }

        return acc;
      }, {});
      var node = React.createElement("div", Object.assign({
        className: (0, _classnames.default)(componentClass, className, (0, _defineProperty2.default)({}, "".concat(componentClass, "-closable"), closable)),
        style: style,
        onMouseEnter: this.clearCloseTimer,
        onMouseLeave: this.startCloseTimer,
        onClick: onClick
      }, dataOrAriaAttributeProps), React.createElement("div", {
        className: "".concat(componentClass, "-content")
      }, children), closable ? React.createElement("a", {
        tabIndex: 0,
        onClick: this.close,
        className: "".concat(componentClass, "-close")
      }, closeIcon || React.createElement("span", {
        className: "".concat(componentClass, "-close-x")
      })) : null);

      if (holder) {
        return _reactDom.default.createPortal(node, holder);
      }

      return node;
    }
  }]);
  return Notice;
}(React.Component);

exports.default = Notice;
Notice.defaultProps = {
  onClose: function onClose() {},
  duration: 1.5
};

/***/ }),

/***/ "./node_modules/rc-notification/lib/useNotification.js":
/*!*************************************************************!*\
  !*** ./node_modules/rc-notification/lib/useNotification.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useNotification;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Notice = _interopRequireDefault(__webpack_require__(/*! ./Notice */ "./node_modules/rc-notification/lib/Notice.js"));

function useNotification(notificationInstance) {
  var createdRef = React.useRef({});

  var _React$useState = React.useState([]),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      elements = _React$useState2[0],
      setElements = _React$useState2[1];

  function notify(noticeProps) {
    notificationInstance.add(noticeProps, function (div, props) {
      var key = props.key;

      if (div && !createdRef.current[key]) {
        var noticeEle = React.createElement(_Notice.default, Object.assign({}, props, {
          holder: div
        }));
        createdRef.current[key] = noticeEle;
        setElements(function (originElements) {
          return [].concat((0, _toConsumableArray2.default)(originElements), [noticeEle]);
        });
      }
    });
  }

  return [notify, React.createElement(React.Fragment, null, elements)];
}

/***/ }),

/***/ "./node_modules/rc-pagination/lib/locale/en_US.js":
/*!********************************************************!*\
  !*** ./node_modules/rc-pagination/lib/locale/en_US.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  // Options.jsx
  items_per_page: '/ page',
  jump_to: 'Go to',
  jump_to_confirm: 'confirm',
  page: '',
  // Pagination.jsx
  prev_page: 'Previous Page',
  next_page: 'Next Page',
  prev_5: 'Previous 5 Pages',
  next_5: 'Next 5 Pages',
  prev_3: 'Previous 3 Pages',
  next_3: 'Next 3 Pages'
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/rc-picker/lib/locale/en_US.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-picker/lib/locale/en_US.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var locale = {
  locale: 'en_US',
  today: 'Today',
  now: 'Now',
  backToToday: 'Back to today',
  ok: 'Ok',
  clear: 'Clear',
  month: 'Month',
  year: 'Year',
  timeSelect: 'select time',
  dateSelect: 'select date',
  weekSelect: 'Choose a week',
  monthSelect: 'Choose a month',
  yearSelect: 'Choose a year',
  decadeSelect: 'Choose a decade',
  yearFormat: 'YYYY',
  dateFormat: 'M/D/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'M/D/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Previous month (PageUp)',
  nextMonth: 'Next month (PageDown)',
  previousYear: 'Last year (Control + left)',
  nextYear: 'Next year (Control + right)',
  previousDecade: 'Last decade',
  nextDecade: 'Next decade',
  previousCentury: 'Last century',
  nextCentury: 'Next century'
};
var _default = locale;
exports.default = _default;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aW1lbGluZS9UaW1lbGluZVBvc3RzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvX3V0aWwvZGV2V2FybmluZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL191dGlsL3JlYWN0Tm9kZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL191dGlsL3Jlc3BvbnNpdmVPYnNlcnZlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvX3V0aWwvdHlwZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2NhbGVuZGFyL2xvY2FsZS9lbl9VUy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2NvbmZpZy1wcm92aWRlci9TaXplQ29udGV4dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2NvbmZpZy1wcm92aWRlci9jb250ZXh0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvY29uZmlnLXByb3ZpZGVyL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvY29uZmlnLXByb3ZpZGVyL3JlbmRlckVtcHR5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvZGF0ZS1waWNrZXIvbG9jYWxlL2VuX1VTLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvZW1wdHkvZW1wdHkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9lbXB0eS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2VtcHR5L3NpbXBsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2dyaWQvUm93Q29udGV4dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2dyaWQvY29sLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvZ3JpZC9ob29rcy91c2VCcmVha3BvaW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvZ3JpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2dyaWQvcm93LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbGlzdC9JdGVtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2xvY2FsZS1wcm92aWRlci9Mb2NhbGVSZWNlaXZlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2xvY2FsZS1wcm92aWRlci9jb250ZXh0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbG9jYWxlLXByb3ZpZGVyL2RlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9sb2NhbGUtcHJvdmlkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9sb2NhbGUvZGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL21lc3NhZ2UvaG9va3MvdXNlTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL21lc3NhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9tb2RhbC9sb2NhbGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9ub3RpZmljYXRpb24vaG9va3MvdXNlTm90aWZpY2F0aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbm90aWZpY2F0aW9uL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvcGFnaW5hdGlvbi9NaW5pU2VsZWN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvcGFnaW5hdGlvbi9QYWdpbmF0aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvcGFnaW5hdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL3NlbGVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL3NlbGVjdC91dGlscy9pY29uVXRpbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL3NwaW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi90aW1lLXBpY2tlci9sb2NhbGUvZW5fVVMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1ub3RpZmljYXRpb24vbGliL05vdGljZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLW5vdGlmaWNhdGlvbi9saWIvdXNlTm90aWZpY2F0aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtcGFnaW5hdGlvbi9saWIvbG9jYWxlL2VuX1VTLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtcGlja2VyL2xpYi9sb2NhbGUvZW5fVVMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiaW8iLCJUaW1lbGluZVBvc3RzIiwiZGF0YSIsIm9uVXBkYXRlVGltZWxpbmUiLCJvblJhdGVQb3N0IiwibW9kYWxBY3Rpb25zIiwic2hhcmVBY3Rpb24iLCJsaWtlQWN0aW9uIiwiZGVsZXRlQWN0aW9uIiwiZGlzYWJsZURlbGV0ZSIsInBhcmVudERpdiIsImF1dGgiLCJjb25zb2xlIiwibG9nIiwiaW1hZ2VzTGlzdCIsImNvbmNhdCIsImFwcGx5IiwibWFwIiwiaXRlbSIsInR5cGUiLCJpbWFnZXMiLCJ2aWRlb0xpc3QiLCJ2aWRlb3MiLCJ1c2VTdGF0ZSIsImFjdGl2ZVBvc3RJZCIsInNldEFjdGl2ZVBvc3RJZCIsIm1vZGFsTW9kZSIsInNldE1vZGFsTW9kZSIsInZpZGVvUmVmIiwidXNlTW9kYWwiLCJvcGVuIiwiaGlkZVBob3RvTW9kYWwiLCJzaG93UGhvdG9Nb2RhbCIsImhhbmRsZVNob3dDb21tZW50TW9kYWwiLCJpZCIsInRvZ2dsZUNvbW1lbnRTaG93IiwiaW5kZXgiLCJzZXRDb21tZW50U2hvdyIsImNvbW1lbnRTaG93IiwiZ2V0TGlrZUFjdGlvblVzZXJJbmZvIiwiZmluYWxEYXRhIiwiYWNjb3VudCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwic3R5bGVzIiwiYWN0aXZpdHlfY29udGVudCIsImNyZWF0ZWRBdCIsImNvbW1lbnRzIiwidGV4dCIsInNoYXJlZCIsImNvbW1lbnRlZCIsImJsb2JfdG4iLCJ0aHVtYm5haWwiLCJyZWFjdGlvbnMiLCJ0ZXh0X2xpbmtzIiwicHVzaCIsInByb2ZpbGVVcmwiLCJ1bmRlZmluZWQiLCJwcm9maWxlUGhvdG8iLCJzcmMiLCJmdWxsTmFtZSIsInVzZXJuYW1lIiwibGlrZURhdGEiLCJmaWx0ZXIiLCJyZWFjdGlvbiIsImhlYXJ0RGF0YSIsIndvd0RhdGEiLCJoYWhhRGF0YSIsInNhZERhdGEiLCJwb3N0IiwiZm9udFNpemUiLCJtYXJnaW5SaWdodCIsImN1cnNvciIsInBvc3RfaGVhZGVyIiwiYXZhdGFyIiwidXNlcl9pbmZvIiwidXNlcl9uYW1lIiwiZGF0ZSIsIm1vbWVudCIsImZvcm1hdCIsImRlc2NyaXB0aW9uIiwibGVuZ3RoIiwidmlkZW8iLCJpIiwicGxheWVyIiwicGxheSIsImVsIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImN1cnJlbnQiLCJwb3NpdGlvblkiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ5IiwiaW5uZXJIZWlnaHQiLCJwYXVzZSIsInZpc2liaWxpdHkiLCJwb3N0X2NvbnRlbnQiLCJjbGFzc25hbWVzIiwiaW1hZ2UiLCJncmlkXzIiLCJncmlkXzMiLCJncmlkXzQiLCJpbWFnZV9pdGVtIiwibWFpbl9waG90byIsInNob3dfbW9yZSIsImhlaWdodCIsInJlYWN0aW9uc19zaGFyZXNfc3RhdHVzIiwicmVhY3Rpb25zX3N0YXR1cyIsInJhdGluZyIsInRlcm0iLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImJpbmRBY3Rpb25DcmVhdG9ycyIsInNob3ciLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsTUFBTSxHQUFHQyx3REFBRSxDQUFDLDJCQUFELENBQWpCOztBQUVBLFNBQVNDLGFBQVQsT0FBMko7QUFBQTs7QUFBQTs7QUFBQSxNQUFsSUMsSUFBa0ksUUFBbElBLElBQWtJO0FBQUEsTUFBNUhDLGdCQUE0SCxRQUE1SEEsZ0JBQTRIO0FBQUEsTUFBMUdDLFVBQTBHLFFBQTFHQSxVQUEwRztBQUFBLE1BQTlGQyxZQUE4RixRQUE5RkEsWUFBOEY7QUFBQSxNQUFoRkMsWUFBZ0YsUUFBaEZBLFdBQWdGO0FBQUEsTUFBbkVDLFdBQW1FLFFBQW5FQSxVQUFtRTtBQUFBLE1BQXZEQyxZQUF1RCxRQUF2REEsWUFBdUQ7QUFB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QUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUNwSmE7O0FBRWIsOEJBQThCLG1CQUFPLENBQUMsc0hBQStDOztBQUVyRiw2QkFBNkIsbUJBQU8sQ0FBQyxvSEFBOEM7O0FBRW5GO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUEsaURBQWlELG1CQUFPLENBQUMsNEdBQTBDOztBQUVuRyw2Q0FBNkMsbUJBQU8sQ0FBQyxvR0FBc0M7O0FBRTNGLG9DQUFvQyxtQkFBTyxDQUFDLDRDQUFPOztBQUVuRCxxQ0FBcUMsbUJBQU8sQ0FBQyw4REFBVTs7QUFFdkQ7QUFDQSxrQ0FBa0M7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZFQUE2RTtBQUM3RTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUM1Q2E7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQjs7Ozs7Ozs7Ozs7O0FDcEJhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90aW1lbGluZS5kN2RhYWM0ZjEyZTg2OTllYzIwNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy90aW1lbGluZS1wb3N0Lm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgUG9wb3ZlciwgVG9vbHRpcCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IENvbW1lbnRzIGZyb20gJy4vQ29tbWVudHMnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IEFjdGlvbnMgZnJvbSAnLi9BY3Rpb25zJztcclxuaW1wb3J0IFRyaW1UZXh0IGZyb20gJy4uL2NvbW1vbi9UcmltVGV4dCc7XHJcbmltcG9ydCB7IHVzZU1vZGFsIH0gZnJvbSAncmVhY3QtbW9kYWwtaG9vayc7XHJcbmltcG9ydCBDb21tZW50c01vZGFsIGZyb20gJy4vQ29tbWVudHNNb2RhbCc7XHJcbmltcG9ydCBQaG90b3NNb2RhbCBmcm9tICcuLi9wcm9maWxlL1Bob3Rvc01vZGFsJztcclxuaW1wb3J0IEF2YXRhciBmcm9tICcuLi9jb21tb24vQXZhdGFyJztcclxuaW1wb3J0IHsgc2hvdyB9IGZyb20gJ3JlZHV4LW1vZGFsJztcclxuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgQVBJIGZyb20gJ2NvbmZpZ3MvQVBJJztcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAndmlkZW8tcmVhY3QnO1xyXG5pbXBvcnQgeyBQaG90b3NQcm92aWRlciB9ICBmcm9tICdjb250YWluZXJzL1Bob3Rvcy9zdG9yYWdlL1Bob3RvQ29udGV4dCc7XHJcbmltcG9ydCB7IExpbmtQcmV2aWV3IH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vTGlua1ByZXZpZXcnO1xyXG5pbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XHJcbmltcG9ydCBJdGVtIGZyb20gJ2FudGQvbGliL2xpc3QvSXRlbSc7XHJcbmNvbnN0IHNvY2tldCA9IGlvKCdodHRwczovL3d3dy5mcmVlc2tpZXMuY29tJyk7XHJcblxyXG5mdW5jdGlvbiBUaW1lbGluZVBvc3RzKHsgZGF0YSwgb25VcGRhdGVUaW1lbGluZSwgb25SYXRlUG9zdCwgbW9kYWxBY3Rpb25zLCBzaGFyZUFjdGlvbiwgbGlrZUFjdGlvbiwgZGVsZXRlQWN0aW9uLCBkaXNhYmxlRGVsZXRlLCBwYXJlbnREaXYgPSBudWxsLCBhdXRoIH0pIHtcclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICBjb25zdCBpbWFnZXNMaXN0ID0gW10uY29uY2F0LmFwcGx5KFtdLCBkYXRhLm1hcChpdGVtID0+IFxyXG4gICAgeyBcclxuICAgICAgICBpZihpdGVtLnR5cGUgPT09ICdQaG90bycpIHtcclxuICAgICAgICAgIHJldHVybiAgaXRlbTtcclxuICAgICAgICB9IGVsc2UgaWYoaXRlbS50eXBlID09PSAnVmlkZW9DbGlwJykge1xyXG4gICAgICAgICAgcmV0dXJuICBbXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuICBpdGVtLmltYWdlcyBcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG4gICkpXHJcblxyXG4gIGNvbnN0IHZpZGVvTGlzdCA9IFtdLmNvbmNhdC5hcHBseShbXSwgZGF0YS5tYXAoaXRlbSA9PiB7XHJcbiAgICBpZihpdGVtLnR5cGUgPT09ICdWaWRlb0NsaXAnKSB7XHJcbiAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGl0ZW0udmlkZW9zO1xyXG4gICAgfVxyXG4gIH0pKVxyXG5cclxuICBjb25zb2xlLmxvZygndmlkZW9MaXN0JywgdmlkZW9MaXN0KTtcclxuICBcclxuICAvLyBjb25zdCBuZXdJbWFnZUxpc3QgPSAgaW1hZ2VzTGlzdC5maWx0ZXIoaXRlbSA9PiB0eXBlb2YgaXRlbS5pZCAhPT0gJ3VuZGVmaW5lZCcpO1xyXG4gIFxyXG4gIGNvbnN0IFthY3RpdmVQb3N0SWQsIHNldEFjdGl2ZVBvc3RJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbbW9kYWxNb2RlLCBzZXRNb2RhbE1vZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBsZXQgdmlkZW9SZWYgPSBbXTtcclxuICBjb25zdCBbc2hvd1Bob3RvTW9kYWwsIGhpZGVQaG90b01vZGFsXSA9IHVzZU1vZGFsKCh7IGluOiBvcGVuIH0pID0+IChcclxuICAgIDxQaG90b3NQcm92aWRlcj5cclxuICAgICAgPFBob3Rvc01vZGFsXHJcbiAgICAgICAgdGl0bGU9XCJQaG90byBkZXRhaWxcIlxyXG4gICAgICAgIHNob3dNb2RhbD17b3Blbn1cclxuICAgICAgICBvbkNsb3NlPXtoaWRlUGhvdG9Nb2RhbH1cclxuICAgICAgICBvblJhdGVQb3N0PXtvblJhdGVQb3N0fVxyXG4gICAgICAgIGRhdGE9e2ltYWdlc0xpc3R9XHJcbiAgICAgICAgbGlrZUFjdGlvbj17bGlrZUFjdGlvbn1cclxuICAgICAgICBzaGFyZUFjdGlvbj17c2hhcmVBY3Rpb259XHJcbiAgICAgICAgb25VcGRhdGVUaW1lbGluZT17b25VcGRhdGVUaW1lbGluZX1cclxuICAgICAgICBhdXRoPXthdXRofVxyXG4gICAgICAvPlxyXG4gICAgPC9QaG90b3NQcm92aWRlcj5cclxuICApKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2hvd0NvbW1lbnRNb2RhbCA9IChpZCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlUG9zdElkKGlkKTtcclxuICAgIHNldE1vZGFsTW9kZSghbW9kYWxNb2RlKTtcclxuICAgIC8vbW9kYWxBY3Rpb25zLnNob3coJ2NvbW1lbnRNb2RhbCcsIHsgaWQ6IGFjdGl2ZVBvc3RJZCB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVDb21tZW50U2hvdyA9IChpbmRleCkgPT5cclxuICAgIHNldENvbW1lbnRTaG93KGNvbW1lbnRTaG93ID09PSBpbmRleCA/IG51bGwgOiBpbmRleCk7XHJcblxyXG4gIGNvbnN0IGdldExpa2VBY3Rpb25Vc2VySW5mbyA9IChkYXRhKSA9PiB7XHJcbiAgICB2YXIgZmluYWxEYXRhID0gJyc7XHJcbiAgICBkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgZmluYWxEYXRhID0gZmluYWxEYXRhICsgJyAnICsgaXRlbS5hY2NvdW50LmZpcnN0TmFtZSArICcnICsgaXRlbS5hY2NvdW50Lmxhc3ROYW1lIDtcclxuICAgIH0pXHJcbiAgICByZXR1cm4gZmluYWxEYXRhO1xyXG4gIH1cclxuXHJcbiBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aXZpdHlfY29udGVudH0gPlxyXG4gICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgdmFyIHsgYWNjb3VudCwgY3JlYXRlZEF0LCB0eXBlLCBjb21tZW50cywgdGV4dCwgaW1hZ2VzLCB2aWRlb3MsIHNoYXJlZCwgY29tbWVudGVkLCBibG9iX3RuLCB0aHVtYm5haWwsIHJlYWN0aW9ucywgdGV4dF9saW5rcyB9ID0gaXRlbTtcclxuICAgICAgICB2aWRlb1JlZi5wdXNoKG51bGwpO1xyXG4gICAgICAgIGNvbnN0IHByb2ZpbGVVcmwgPSBhY2NvdW50ICE9PSBudWxsICYmIGFjY291bnQgIT09IHVuZGVmaW5lZCA/IGAke2FjY291bnQucHJvZmlsZVBob3RvPy5zcmN9YCA6IG51bGxcclxuICAgICAgICBjb25zdCBmdWxsTmFtZSA9IGAke2FjY291bnQ/LmZpcnN0TmFtZX0gJHthY2NvdW50Py5sYXN0TmFtZX1gO1xyXG4gICAgICAgIGNvbnN0IHVzZXJuYW1lID0gYWNjb3VudD8udXNlcm5hbWU7XHJcbiAgICAgICAgY29uc3QgbGlrZURhdGEgPSByZWFjdGlvbnM/IHJlYWN0aW9ucz8uZmlsdGVyKGl0ZW0gPT4gaXRlbS5yZWFjdGlvbiA9PSAnTElLRScpOltdO1xyXG4gICAgICAgIGNvbnN0IGhlYXJ0RGF0YSA9ICByZWFjdGlvbnM/IHJlYWN0aW9ucz8uZmlsdGVyKGl0ZW0gPT4gaXRlbS5yZWFjdGlvbiA9PSAnSEVBUlQnKTpbXTtcclxuICAgICAgICBjb25zdCB3b3dEYXRhID0gcmVhY3Rpb25zID8gcmVhY3Rpb25zPy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlYWN0aW9uID09ICdXT1cnKTpbXTtcclxuICAgICAgICBjb25zdCBoYWhhRGF0YSA9IHJlYWN0aW9ucyA/IHJlYWN0aW9ucz8uZmlsdGVyKGl0ZW0gPT4gaXRlbS5yZWFjdGlvbiA9PSAnSEFIQScpOltdO1xyXG4gICAgICAgIGNvbnN0IHNhZERhdGEgPSByZWFjdGlvbnMgPyByZWFjdGlvbnM/LmZpbHRlcihpdGVtID0+IGl0ZW0ucmVhY3Rpb24gPT0gJ1NBRCcpOltdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3R9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICB7IWRpc2FibGVEZWxldGU/PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICd3aW5kb3ctY2xvc2UnXX0gc3R5bGU9e3tcclxuICAgICAgICAgICAgICBmbG9hdDogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogMjUsXHJcbiAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDEwLFxyXG4gICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUFjdGlvbihpdGVtLmlkLCB0eXBlKX1cclxuICAgICAgICAgICAgLz46bnVsbH1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0X2hlYWRlcn0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9PlxyXG4gICAgICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgICB0ZXh0PXtmdWxsTmFtZX1cclxuICAgICAgICAgICAgICAgICAgdXJsPXtwcm9maWxlVXJsfVxyXG4gICAgICAgICAgICAgICAgICBzaXplPXs2MH1cclxuICAgICAgICAgICAgICAgICAgYm9yZGVyU2l6ZT17M31cclxuICAgICAgICAgICAgICAgICAgdXNlcm5hbWU9e3VzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyX2luZm99PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudXNlcl9uYW1lfT57ZnVsbE5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZX0+XHJcbiAgICAgICAgICAgICAge21vbWVudChjcmVhdGVkQXQpLmZvcm1hdCgnTU1NIERELCBZWVlZIC0gSEg6bW0gQScpfVxyXG4gICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICAgICAgPFRyaW1UZXh0IGxpbWl0PXsxMTB9PlxyXG4gICAgICAgICAgICAgICAgeyB0eXBlIT09J1NoYXJlJz90ZXh0OnNoYXJlZC50ZXh0IH1cclxuICAgICAgICAgICAgICA8L1RyaW1UZXh0PlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7dGV4dF9saW5rcyAmJiB0ZXh0X2xpbmtzLm1hcChpdGVtID0+IFxyXG4gICAgICAgICAgICAgIDxMaW5rUHJldmlldyBkYXRhPXtpdGVtfS8+ICBcclxuICAgICAgICAgICAgKSB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7dmlkZW9zICYmIHZpZGVvcy5sZW5ndGggPiAwICYmIHZpZGVvcy5tYXAoKHZpZGVvLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmlkZW9zfSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICB7LyogPHZpZGVvIGlkPSdobHMtZXhhbXBsZScgIGNsYXNzTmFtZT1cInZpZGVvLWpzIHZqcy1kZWZhdWx0LXNraW5cIiB3aWR0aD1cIjk2MFwiIGhlaWdodD1cIjU0MFwiIGNvbnRyb2xzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSB0eXBlPVwiYXBwbGljYXRpb24veC1tcGVnVVJMXCIgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHt2aWRlby5zcmN9YH0gPjwvc291cmNlPlxyXG4gICAgICAgICAgICAgICAgICA8L3ZpZGVvPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxQbGF5ZXJcclxuICAgICAgICAgICAgICAgICAgICBwbGF5c0lubGluZVxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5XHJcbiAgICAgICAgICAgICAgICAgICAgbXV0ZWRcclxuICAgICAgICAgICAgICAgICAgICBwb3N0ZXI9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke3ZpZGVvLnRodW1ibmFpbC5zcmN9YH1cclxuICAgICAgICAgICAgICAgICAgICByZWY9e3BsYXllciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZih2aWRlb1JlZiAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWRlb1JlZltpbmRleF0gPSBwbGF5ZXI7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c291cmNlIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7dmlkZW8uc3JjfWB9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvUGxheWVyPiBcclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB2aWRlb1JlZltpbmRleF0ucGxheSgpfSByZWY9e2VsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWVsKSByZXR1cm47IFxyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyBpZih2aWRlb1JlZiAmJiB2aWRlb1JlZltpbmRleF0gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIC8vICAgdmFyIHBvc2l0aW9uWSA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyAgIGlmKHBvc2l0aW9uWSA+ICh3aW5kb3cuaW5uZXJIZWlnaHQvMikgJiYgcG9zaXRpb25ZIDwgd2luZG93LmlubmVySGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdmlkZW9SZWZbaW5kZXhdLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgIC8vICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB2aWRlb1JlZltpbmRleF0ucGF1c2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgIC8vICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgaWYocGFyZW50RGl2ICE9PSBudWxsICYmIHBhcmVudERpdj8uY3VycmVudCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcGFyZW50RGl2Py5jdXJyZW50Py5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHZpZGVvUmVmICYmIHZpZGVvUmVmW2luZGV4XSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3NpdGlvblkgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHBvc2l0aW9uWSA+ICh3aW5kb3cuaW5uZXJIZWlnaHQvMikgJiYgcG9zaXRpb25ZIDwgd2luZG93LmlubmVySGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWRlb1JlZltpbmRleF0ucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWRlb1JlZltpbmRleF0ucGF1c2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdmlzaWJpbGl0eTogJ2hpZGRlbicgfX1cclxuICAgICAgICAgICAgICAgICAgPkJ1dHRvbiBGb3IgcG9zaXRpb24gb2YgVmlkZW88L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgKX1cclxuXHJcblxyXG4gICAgICAgICAgICB7aW1hZ2VzICYmIGltYWdlcy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdF9jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5pbWFnZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIFtzdHlsZXMuZ3JpZF8yXTogaW1hZ2VzLmxlbmd0aCA9PSAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFtzdHlsZXMuZ3JpZF8zXTogaW1hZ2VzLmxlbmd0aCA9PSAzLFxyXG4gICAgICAgICAgICAgICAgICAgIFtzdHlsZXMuZ3JpZF80XTogaW1hZ2VzLmxlbmd0aCA9PSA0LFxyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge2ltYWdlcy5sZW5ndGggPT0gMSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZV9pdGVtfSBvbkNsaWNrPXtzaG93UGhvdG9Nb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzBdLmJsb2JfdG4/aW1hZ2VzWzBdLmJsb2JfdG46aW1hZ2VzWzBdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAge2ltYWdlcy5sZW5ndGggPT0gMiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5pbWFnZV9pdGVtLCBzdHlsZXMubWFpbl9waG90byl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dQaG90b01vZGFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzBdLmJsb2JfdG4/aW1hZ2VzWzBdLmJsb2JfdG46aW1hZ2VzWzBdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX2l0ZW19IG9uQ2xpY2s9e3Nob3dQaG90b01vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1sxXS5ibG9iX3RuP2ltYWdlc1sxXS5ibG9iX3RuOmltYWdlc1sxXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAge2ltYWdlcy5sZW5ndGggPT0gMyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5pbWFnZV9pdGVtLCBzdHlsZXMubWFpbl9waG90byl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dQaG90b01vZGFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzBdLmJsb2JfdG4/aW1hZ2VzWzBdLmJsb2JfdG46aW1hZ2VzWzBdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX2l0ZW19IG9uQ2xpY2s9e3Nob3dQaG90b01vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1sxXS5ibG9iX3RuP2ltYWdlc1sxXS5ibG9iX3RuOmltYWdlc1sxXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZV9pdGVtfSBvbkNsaWNrPXtzaG93UGhvdG9Nb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMl0uYmxvYl90bj9pbWFnZXNbMl0uYmxvYl90bjppbWFnZXNbMl0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtpbWFnZXMubGVuZ3RoID49IDQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuaW1hZ2VfaXRlbSwgc3R5bGVzLm1haW5fcGhvdG8pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzaG93UGhvdG9Nb2RhbH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1swXS5ibG9iX3RuP2ltYWdlc1swXS5ibG9iX3RuOmltYWdlc1swXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZV9pdGVtfSBvbkNsaWNrPXtzaG93UGhvdG9Nb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMV0uYmxvYl90bj9pbWFnZXNbMV0uYmxvYl90bjppbWFnZXNbMV0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfaXRlbX0gb25DbGljaz17c2hvd1Bob3RvTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzJdLmJsb2JfdG4/aW1hZ2VzWzJdLmJsb2JfdG46aW1hZ2VzWzJdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX2l0ZW19IG9uQ2xpY2s9e3Nob3dQaG90b01vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaG93X21vcmV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPis0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1szXS5ibG9iX3RuP2ltYWdlc1szXS5ibG9iX3RuOmltYWdlc1szXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IDUwIH19IC8+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7dHlwZSA9PSBcIlBob3RvXCI/IGJsb2JfdG4gJiYgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0X2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuaW1hZ2UpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX2l0ZW19IG9uQ2xpY2s9e3Nob3dQaG90b01vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2Jsb2JfdG59YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PjpcclxuICAgICAgICAgICAgYmxvYl90biAmJiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZpZGVvc30ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgPFBsYXllclxyXG4gICAgICAgICAgICAgICAgcGxheXNJbmxpbmVcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5XHJcbiAgICAgICAgICAgICAgICBtdXRlZFxyXG4gICAgICAgICAgICAgICAgcG9zdGVyPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHt0aHVtYm5haWwuc3JjfWB9XHJcbiAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2Jsb2JfdG59YH1cclxuICAgICAgICAgICAgICAgIHJlZj17cGxheWVyID0+IHtcclxuICAgICAgICAgICAgICAgICAgLy8gdmlkZW9SZWYgPSBwbGF5ZXI7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZWFjdGlvbnNfc2hhcmVzX3N0YXR1c30+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZWFjdGlvbnNfc3RhdHVzfT5cclxuICAgICAgICAgICAgICAgIHsgbGlrZURhdGEubGVuZ3RoID4gMCAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKGxpa2VEYXRhKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICd0aHVtYnMtdXAnXX0gc2l6ZT1cIjF4XCIgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntsaWtlRGF0YS5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+PC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7IGhhaGFEYXRhLmxlbmd0aCA+IDAgJiYgPD5cclxuICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9e2dldExpa2VBY3Rpb25Vc2VySW5mbyhoYWhhRGF0YSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAnZ3JpbiddfSBzaXplPVwiMXhcIiAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcid9fS8+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntoYWhhRGF0YS5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgeyBoZWFydERhdGEubGVuZ3RoID4gMCAmJiA8PiBcclxuICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9e2dldExpa2VBY3Rpb25Vc2VySW5mbyhoZWFydERhdGEpfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ2hlYXJ0J119IHNpemU9XCIxeFwiICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJ319Lz4gXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2hlYXJ0RGF0YS5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgeyB3b3dEYXRhLmxlbmd0aCA+IDAgJiYgPD4gXHJcbiAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPXtnZXRMaWtlQWN0aW9uVXNlckluZm8od293RGF0YSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAnbGF1Z2gnXX0gc2l6ZT1cIjF4XCIgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnt3b3dEYXRhLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgPC8+IFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgeyBzYWREYXRhLmxlbmd0aCA+IDAgJiYgPD5cclxuICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9e2dldExpa2VBY3Rpb25Vc2VySW5mbyhzYWREYXRhKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdmcm93biddfSBzaXplPVwiMXhcIiAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcid9fS8+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntzYWREYXRhLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8QWN0aW9uc1xyXG4gICAgICAgICAgICAgIGlkPXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgIHR5cGU9e2l0ZW0udHlwZX1cclxuICAgICAgICAgICAgICBwb3N0UmF0ZT17aXRlbS5yYXRpbmd9XHJcbiAgICAgICAgICAgICAgY29tbWVudHM9e2NvbW1lbnRzfVxyXG4gICAgICAgICAgICAgIG9uUmF0ZVBvc3Q9e29uUmF0ZVBvc3R9XHJcbiAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxyXG4gICAgICAgICAgICAgIGxpa2VBY3Rpb249eyh0ZXJtKSA9PiBsaWtlQWN0aW9uKHR5cGUsIGl0ZW0uaWQsIHRlcm0pfVxyXG4gICAgICAgICAgICAgIHNoYXJlQWN0aW9uPXsoKSA9PiBzaGFyZUFjdGlvbih0eXBlICE9PSAnU2hhcmUnP3R5cGU6c2hhcmVkLnR5cGUsIHR5cGUgIT09ICdTaGFyZSc/aXRlbS5pZDpzaGFyZWQuaWQpfVxyXG4gICAgICAgICAgICAgIGFjdGlvbnM9e1xyXG4gICAgICAgICAgICAgICAgKCkgPT4geyBoYW5kbGVTaG93Q29tbWVudE1vZGFsKGl0ZW0uaWQpIH0gXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Q29tbWVudHNcclxuICAgICAgICAgICAgICBpZD17aXRlbS5pZH1cclxuICAgICAgICAgICAgICB0eXBlPXtpdGVtLnR5cGV9XHJcbiAgICAgICAgICAgICAgZGF0YT17Y29tbWVudHN9XHJcbiAgICAgICAgICAgICAgb25VcGRhdGVUaW1lbGluZT17b25VcGRhdGVUaW1lbGluZX1cclxuICAgICAgICAgICAgICBhY3RpdmVQb3N0SWQ9e2FjdGl2ZVBvc3RJZH1cclxuICAgICAgICAgICAgICBtb2RhbE1vZGU9e21vZGFsTW9kZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuXHJcbiAgICAgIDxDb21tZW50c01vZGFsXHJcbiAgICAgICAgYWN0aXZlUG9zdElkPXthY3RpdmVQb3N0SWR9XHJcbiAgICAgICAgcG9zdERhdGE9e2RhdGF9XHJcbiAgICAgICAgb25VcGRhdGVUaW1lbGluZT17b25VcGRhdGVUaW1lbGluZX1cclxuICAgICAgICB0aXRsZT1cIkNvbW1lbnRzXCJcclxuICAgICAgICAvLyBzaG93TW9kYWw9e29wZW59XHJcbiAgICAgICAgLy8gb25DbG9zZT17aGlkZUNvbW1lbnRNb2RhbH1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuICBtb2RhbEFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyh7IHNob3cgfSwgZGlzcGF0Y2gpXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFRpbWVsaW5lUG9zdHMpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInJlc2V0V2FybmVkXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF93YXJuaW5nLnJlc2V0V2FybmVkO1xuICB9XG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX3dhcm5pbmcgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmMtdXRpbC9saWIvd2FybmluZ1wiKSk7XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIF9kZWZhdWx0KHZhbGlkLCBjb21wb25lbnQsIG1lc3NhZ2UpIHtcbiAgKDAsIF93YXJuaW5nW1wiZGVmYXVsdFwiXSkodmFsaWQsIFwiW2FudGQ6IFwiLmNvbmNhdChjb21wb25lbnQsIFwiXSBcIikuY29uY2F0KG1lc3NhZ2UpKTtcbn07XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlcGxhY2VFbGVtZW50ID0gcmVwbGFjZUVsZW1lbnQ7XG5leHBvcnRzLmNsb25lRWxlbWVudCA9IGNsb25lRWxlbWVudDtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnQgPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBpc1ZhbGlkRWxlbWVudCA9IFJlYWN0LmlzVmFsaWRFbGVtZW50O1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudCA9IGlzVmFsaWRFbGVtZW50O1xuXG5mdW5jdGlvbiByZXBsYWNlRWxlbWVudChlbGVtZW50LCByZXBsYWNlbWVudCwgcHJvcHMpIHtcbiAgaWYgKCFpc1ZhbGlkRWxlbWVudChlbGVtZW50KSkgcmV0dXJuIHJlcGxhY2VtZW50O1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNsb25lRWxlbWVudChlbGVtZW50LCB0eXBlb2YgcHJvcHMgPT09ICdmdW5jdGlvbicgPyBwcm9wcyhlbGVtZW50LnByb3BzIHx8IHt9KSA6IHByb3BzKTtcbn1cblxuZnVuY3Rpb24gY2xvbmVFbGVtZW50KGVsZW1lbnQsIHByb3BzKSB7XG4gIHJldHVybiByZXBsYWNlRWxlbWVudChlbGVtZW50LCBlbGVtZW50LCBwcm9wcyk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBleHBvcnRzLnJlc3BvbnNpdmVNYXAgPSBleHBvcnRzLnJlc3BvbnNpdmVBcnJheSA9IHZvaWQgMDtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpKTtcblxudmFyIF9leHRlbmRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciByZXNwb25zaXZlQXJyYXkgPSBbJ3h4bCcsICd4bCcsICdsZycsICdtZCcsICdzbScsICd4cyddO1xuZXhwb3J0cy5yZXNwb25zaXZlQXJyYXkgPSByZXNwb25zaXZlQXJyYXk7XG52YXIgcmVzcG9uc2l2ZU1hcCA9IHtcbiAgeHM6ICcobWF4LXdpZHRoOiA1NzVweCknLFxuICBzbTogJyhtaW4td2lkdGg6IDU3NnB4KScsXG4gIG1kOiAnKG1pbi13aWR0aDogNzY4cHgpJyxcbiAgbGc6ICcobWluLXdpZHRoOiA5OTJweCknLFxuICB4bDogJyhtaW4td2lkdGg6IDEyMDBweCknLFxuICB4eGw6ICcobWluLXdpZHRoOiAxNjAwcHgpJ1xufTtcbmV4cG9ydHMucmVzcG9uc2l2ZU1hcCA9IHJlc3BvbnNpdmVNYXA7XG52YXIgc3Vic2NyaWJlcnMgPSBuZXcgTWFwKCk7XG52YXIgc3ViVWlkID0gLTE7XG52YXIgc2NyZWVucyA9IHt9O1xudmFyIHJlc3BvbnNpdmVPYnNlcnZlID0ge1xuICBtYXRjaEhhbmRsZXJzOiB7fSxcbiAgZGlzcGF0Y2g6IGZ1bmN0aW9uIGRpc3BhdGNoKHBvaW50TWFwKSB7XG4gICAgc2NyZWVucyA9IHBvaW50TWFwO1xuICAgIHN1YnNjcmliZXJzLmZvckVhY2goZnVuY3Rpb24gKGZ1bmMpIHtcbiAgICAgIHJldHVybiBmdW5jKHNjcmVlbnMpO1xuICAgIH0pO1xuICAgIHJldHVybiBzdWJzY3JpYmVycy5zaXplID49IDE7XG4gIH0sXG4gIHN1YnNjcmliZTogZnVuY3Rpb24gc3Vic2NyaWJlKGZ1bmMpIHtcbiAgICBpZiAoIXN1YnNjcmliZXJzLnNpemUpIHRoaXMucmVnaXN0ZXIoKTtcbiAgICBzdWJVaWQgKz0gMTtcbiAgICBzdWJzY3JpYmVycy5zZXQoc3ViVWlkLCBmdW5jKTtcbiAgICBmdW5jKHNjcmVlbnMpO1xuICAgIHJldHVybiBzdWJVaWQ7XG4gIH0sXG4gIHVuc3Vic2NyaWJlOiBmdW5jdGlvbiB1bnN1YnNjcmliZSh0b2tlbikge1xuICAgIHN1YnNjcmliZXJzW1wiZGVsZXRlXCJdKHRva2VuKTtcbiAgICBpZiAoIXN1YnNjcmliZXJzLnNpemUpIHRoaXMudW5yZWdpc3RlcigpO1xuICB9LFxuICB1bnJlZ2lzdGVyOiBmdW5jdGlvbiB1bnJlZ2lzdGVyKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBPYmplY3Qua2V5cyhyZXNwb25zaXZlTWFwKS5mb3JFYWNoKGZ1bmN0aW9uIChzY3JlZW4pIHtcbiAgICAgIHZhciBtYXRjaE1lZGlhUXVlcnkgPSByZXNwb25zaXZlTWFwW3NjcmVlbl07XG4gICAgICB2YXIgaGFuZGxlciA9IF90aGlzLm1hdGNoSGFuZGxlcnNbbWF0Y2hNZWRpYVF1ZXJ5XTtcbiAgICAgIGhhbmRsZXIgPT09IG51bGwgfHwgaGFuZGxlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogaGFuZGxlci5tcWwucmVtb3ZlTGlzdGVuZXIoaGFuZGxlciA9PT0gbnVsbCB8fCBoYW5kbGVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBoYW5kbGVyLmxpc3RlbmVyKTtcbiAgICB9KTtcbiAgICBzdWJzY3JpYmVycy5jbGVhcigpO1xuICB9LFxuICByZWdpc3RlcjogZnVuY3Rpb24gcmVnaXN0ZXIoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBPYmplY3Qua2V5cyhyZXNwb25zaXZlTWFwKS5mb3JFYWNoKGZ1bmN0aW9uIChzY3JlZW4pIHtcbiAgICAgIHZhciBtYXRjaE1lZGlhUXVlcnkgPSByZXNwb25zaXZlTWFwW3NjcmVlbl07XG5cbiAgICAgIHZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIGxpc3RlbmVyKF9yZWYpIHtcbiAgICAgICAgdmFyIG1hdGNoZXMgPSBfcmVmLm1hdGNoZXM7XG5cbiAgICAgICAgX3RoaXMyLmRpc3BhdGNoKCgwLCBfZXh0ZW5kczNbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMzW1wiZGVmYXVsdFwiXSkoe30sIHNjcmVlbnMpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKHt9LCBzY3JlZW4sIG1hdGNoZXMpKSk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgbXFsID0gd2luZG93Lm1hdGNoTWVkaWEobWF0Y2hNZWRpYVF1ZXJ5KTtcbiAgICAgIG1xbC5hZGRMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgICBfdGhpczIubWF0Y2hIYW5kbGVyc1ttYXRjaE1lZGlhUXVlcnldID0ge1xuICAgICAgICBtcWw6IG1xbCxcbiAgICAgICAgbGlzdGVuZXI6IGxpc3RlbmVyXG4gICAgICB9O1xuICAgICAgbGlzdGVuZXIobXFsKTtcbiAgICB9KTtcbiAgfVxufTtcbnZhciBfZGVmYXVsdCA9IHJlc3BvbnNpdmVPYnNlcnZlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMudHVwbGVOdW0gPSBleHBvcnRzLnR1cGxlID0gdm9pZCAwO1xuXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80NjE3NjE2NS93YXlzLXRvLWdldC1zdHJpbmctbGl0ZXJhbC10eXBlLW9mLWFycmF5LXZhbHVlcy13aXRob3V0LWVudW0tb3ZlcmhlYWRcbnZhciB0dXBsZSA9IGZ1bmN0aW9uIHR1cGxlKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGFyZ3M7XG59O1xuXG5leHBvcnRzLnR1cGxlID0gdHVwbGU7XG5cbnZhciB0dXBsZU51bSA9IGZ1bmN0aW9uIHR1cGxlTnVtKCkge1xuICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gIH1cblxuICByZXR1cm4gYXJncztcbn07XG5cbmV4cG9ydHMudHVwbGVOdW0gPSB0dXBsZU51bTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9lbl9VUyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uL2RhdGUtcGlja2VyL2xvY2FsZS9lbl9VU1wiKSk7XG5cbnZhciBfZGVmYXVsdCA9IF9lbl9VU1tcImRlZmF1bHRcIl07XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBleHBvcnRzLlNpemVDb250ZXh0UHJvdmlkZXIgPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBTaXplQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KHVuZGVmaW5lZCk7XG5cbnZhciBTaXplQ29udGV4dFByb3ZpZGVyID0gZnVuY3Rpb24gU2l6ZUNvbnRleHRQcm92aWRlcihfcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBzaXplID0gX3JlZi5zaXplO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU2l6ZUNvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChvcmlnaW5TaXplKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFNpemVDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICB2YWx1ZTogc2l6ZSB8fCBvcmlnaW5TaXplXG4gICAgfSwgY2hpbGRyZW4pO1xuICB9KTtcbn07XG5cbmV4cG9ydHMuU2l6ZUNvbnRleHRQcm92aWRlciA9IFNpemVDb250ZXh0UHJvdmlkZXI7XG52YXIgX2RlZmF1bHQgPSBTaXplQ29udGV4dDtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy53aXRoQ29uZmlnQ29uc3VtZXIgPSB3aXRoQ29uZmlnQ29uc3VtZXI7XG5leHBvcnRzLkNvbmZpZ0NvbnN1bWVyID0gZXhwb3J0cy5Db25maWdDb250ZXh0ID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9yZW5kZXJFbXB0eSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcmVuZGVyRW1wdHlcIikpO1xuXG52YXIgQ29uZmlnQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KHtcbiAgLy8gV2UgcHJvdmlkZSBhIGRlZmF1bHQgZnVuY3Rpb24gZm9yIENvbnRleHQgd2l0aG91dCBwcm92aWRlclxuICBnZXRQcmVmaXhDbHM6IGZ1bmN0aW9uIGdldFByZWZpeENscyhzdWZmaXhDbHMsIGN1c3RvbWl6ZVByZWZpeENscykge1xuICAgIGlmIChjdXN0b21pemVQcmVmaXhDbHMpIHJldHVybiBjdXN0b21pemVQcmVmaXhDbHM7XG4gICAgcmV0dXJuIHN1ZmZpeENscyA/IFwiYW50LVwiLmNvbmNhdChzdWZmaXhDbHMpIDogJ2FudCc7XG4gIH0sXG4gIHJlbmRlckVtcHR5OiBfcmVuZGVyRW1wdHlbXCJkZWZhdWx0XCJdXG59KTtcbmV4cG9ydHMuQ29uZmlnQ29udGV4dCA9IENvbmZpZ0NvbnRleHQ7XG52YXIgQ29uZmlnQ29uc3VtZXIgPSBDb25maWdDb250ZXh0LkNvbnN1bWVyO1xuLyoqIEBkZXByZWNhdGVkIFVzZSBob29rcyBpbnN0ZWFkLiBUaGlzIGlzIGEgbGVnYWN5IGZ1bmN0aW9uICovXG5cbmV4cG9ydHMuQ29uZmlnQ29uc3VtZXIgPSBDb25maWdDb25zdW1lcjtcblxuZnVuY3Rpb24gd2l0aENvbmZpZ0NvbnN1bWVyKGNvbmZpZykge1xuICByZXR1cm4gZnVuY3Rpb24gd2l0aENvbmZpZ0NvbnN1bWVyRnVuYyhDb21wb25lbnQpIHtcbiAgICAvLyBXcmFwIHdpdGggQ29uZmlnQ29uc3VtZXIuIFNpbmNlIHdlIG5lZWQgY29tcGF0aWJsZSB3aXRoIHJlYWN0IDE1LCBiZSBjYXJlIHdoZW4gdXNpbmcgcmVmIG1ldGhvZHNcbiAgICB2YXIgU0ZDID0gZnVuY3Rpb24gU0ZDKHByb3BzKSB7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29uZmlnQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChjb25maWdQcm9wcykge1xuICAgICAgICB2YXIgYmFzaWNQcmVmaXhDbHMgPSBjb25maWcucHJlZml4Q2xzO1xuICAgICAgICB2YXIgZ2V0UHJlZml4Q2xzID0gY29uZmlnUHJvcHMuZ2V0UHJlZml4Q2xzO1xuICAgICAgICB2YXIgY3VzdG9taXplUHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzO1xuICAgICAgICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKGJhc2ljUHJlZml4Q2xzLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIGNvbmZpZ1Byb3BzLCBwcm9wcywge1xuICAgICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzXG4gICAgICAgIH0pKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB2YXIgY29ucyA9IENvbXBvbmVudC5jb25zdHJ1Y3RvcjtcbiAgICB2YXIgbmFtZSA9IGNvbnMgJiYgY29ucy5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50JztcbiAgICBTRkMuZGlzcGxheU5hbWUgPSBcIndpdGhDb25maWdDb25zdW1lcihcIi5jb25jYXQobmFtZSwgXCIpXCIpO1xuICAgIHJldHVybiBTRkM7XG4gIH07XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQ29uZmlnQ29uc3VtZXJcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2NvbnRleHQuQ29uZmlnQ29uc3VtZXI7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQ29uZmlnQ29udGV4dFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfY29udGV4dC5Db25maWdDb250ZXh0O1xuICB9XG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZXhwb3J0cy5jb25maWdDb25zdW1lclByb3BzID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9yY0ZpZWxkRm9ybSA9IHJlcXVpcmUoXCJyYy1maWVsZC1mb3JtXCIpO1xuXG52YXIgX2xvY2FsZVByb3ZpZGVyID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL2xvY2FsZS1wcm92aWRlclwiKSk7XG5cbnZhciBfTG9jYWxlUmVjZWl2ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9sb2NhbGUtcHJvdmlkZXIvTG9jYWxlUmVjZWl2ZXJcIikpO1xuXG52YXIgX2NvbnRleHQgPSByZXF1aXJlKFwiLi9jb250ZXh0XCIpO1xuXG52YXIgX1NpemVDb250ZXh0ID0gcmVxdWlyZShcIi4vU2l6ZUNvbnRleHRcIik7XG5cbnZhciBfbWVzc2FnZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL21lc3NhZ2VcIikpO1xuXG52YXIgX25vdGlmaWNhdGlvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL25vdGlmaWNhdGlvblwiKSk7XG5cbi8vIFRPRE86IHJlbW92ZSB0aGlzIGxpbnRcbi8vIFNGQyBoYXMgc3BlY2lmaWVkIGEgZGlzcGxheU5hbWUsIGJ1dCBub3Qgd29ya2VkLlxuXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9kaXNwbGF5LW5hbWUgKi9cbnZhciBjb25maWdDb25zdW1lclByb3BzID0gWydnZXRUYXJnZXRDb250YWluZXInLCAnZ2V0UG9wdXBDb250YWluZXInLCAncm9vdFByZWZpeENscycsICdnZXRQcmVmaXhDbHMnLCAncmVuZGVyRW1wdHknLCAnY3NwJywgJ2F1dG9JbnNlcnRTcGFjZUluQnV0dG9uJywgJ2xvY2FsZScsICdwYWdlSGVhZGVyJ107XG5leHBvcnRzLmNvbmZpZ0NvbnN1bWVyUHJvcHMgPSBjb25maWdDb25zdW1lclByb3BzO1xuXG52YXIgQ29uZmlnUHJvdmlkZXIgPSBmdW5jdGlvbiBDb25maWdQcm92aWRlcihwcm9wcykge1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChwcm9wcy5kaXJlY3Rpb24pIHtcbiAgICAgIF9tZXNzYWdlW1wiZGVmYXVsdFwiXS5jb25maWcoe1xuICAgICAgICBydGw6IHByb3BzLmRpcmVjdGlvbiA9PT0gJ3J0bCdcbiAgICAgIH0pO1xuXG4gICAgICBfbm90aWZpY2F0aW9uW1wiZGVmYXVsdFwiXS5jb25maWcoe1xuICAgICAgICBydGw6IHByb3BzLmRpcmVjdGlvbiA9PT0gJ3J0bCdcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW3Byb3BzLmRpcmVjdGlvbl0pO1xuXG4gIHZhciBnZXRQcmVmaXhDbHNXcmFwcGVyID0gZnVuY3Rpb24gZ2V0UHJlZml4Q2xzV3JhcHBlcihjb250ZXh0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdWZmaXhDbHMsIGN1c3RvbWl6ZVByZWZpeENscykge1xuICAgICAgdmFyIHByZWZpeENscyA9IHByb3BzLnByZWZpeENscztcbiAgICAgIGlmIChjdXN0b21pemVQcmVmaXhDbHMpIHJldHVybiBjdXN0b21pemVQcmVmaXhDbHM7XG4gICAgICB2YXIgbWVyZ2VkUHJlZml4Q2xzID0gcHJlZml4Q2xzIHx8IGNvbnRleHQuZ2V0UHJlZml4Q2xzKCcnKTtcbiAgICAgIHJldHVybiBzdWZmaXhDbHMgPyBcIlwiLmNvbmNhdChtZXJnZWRQcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQoc3VmZml4Q2xzKSA6IG1lcmdlZFByZWZpeENscztcbiAgICB9O1xuICB9O1xuXG4gIHZhciByZW5kZXJQcm92aWRlciA9IGZ1bmN0aW9uIHJlbmRlclByb3ZpZGVyKGNvbnRleHQsIGxlZ2FjeUxvY2FsZSkge1xuICAgIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgICBnZXRUYXJnZXRDb250YWluZXIgPSBwcm9wcy5nZXRUYXJnZXRDb250YWluZXIsXG4gICAgICAgIGdldFBvcHVwQ29udGFpbmVyID0gcHJvcHMuZ2V0UG9wdXBDb250YWluZXIsXG4gICAgICAgIHJlbmRlckVtcHR5ID0gcHJvcHMucmVuZGVyRW1wdHksXG4gICAgICAgIGNzcCA9IHByb3BzLmNzcCxcbiAgICAgICAgYXV0b0luc2VydFNwYWNlSW5CdXR0b24gPSBwcm9wcy5hdXRvSW5zZXJ0U3BhY2VJbkJ1dHRvbixcbiAgICAgICAgZm9ybSA9IHByb3BzLmZvcm0sXG4gICAgICAgIGlucHV0ID0gcHJvcHMuaW5wdXQsXG4gICAgICAgIGxvY2FsZSA9IHByb3BzLmxvY2FsZSxcbiAgICAgICAgcGFnZUhlYWRlciA9IHByb3BzLnBhZ2VIZWFkZXIsXG4gICAgICAgIGNvbXBvbmVudFNpemUgPSBwcm9wcy5jb21wb25lbnRTaXplLFxuICAgICAgICBkaXJlY3Rpb24gPSBwcm9wcy5kaXJlY3Rpb24sXG4gICAgICAgIHNwYWNlID0gcHJvcHMuc3BhY2UsXG4gICAgICAgIHZpcnR1YWwgPSBwcm9wcy52aXJ0dWFsLFxuICAgICAgICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGggPSBwcm9wcy5kcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg7XG4gICAgdmFyIGNvbmZpZyA9ICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIGNvbnRleHQpLCB7XG4gICAgICBnZXRQcmVmaXhDbHM6IGdldFByZWZpeENsc1dyYXBwZXIoY29udGV4dCksXG4gICAgICBjc3A6IGNzcCxcbiAgICAgIGF1dG9JbnNlcnRTcGFjZUluQnV0dG9uOiBhdXRvSW5zZXJ0U3BhY2VJbkJ1dHRvbixcbiAgICAgIGxvY2FsZTogbG9jYWxlIHx8IGxlZ2FjeUxvY2FsZSxcbiAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uLFxuICAgICAgc3BhY2U6IHNwYWNlLFxuICAgICAgdmlydHVhbDogdmlydHVhbCxcbiAgICAgIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aDogZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoXG4gICAgfSk7XG5cbiAgICBpZiAoZ2V0VGFyZ2V0Q29udGFpbmVyKSB7XG4gICAgICBjb25maWcuZ2V0VGFyZ2V0Q29udGFpbmVyID0gZ2V0VGFyZ2V0Q29udGFpbmVyO1xuICAgIH1cblxuICAgIGlmIChnZXRQb3B1cENvbnRhaW5lcikge1xuICAgICAgY29uZmlnLmdldFBvcHVwQ29udGFpbmVyID0gZ2V0UG9wdXBDb250YWluZXI7XG4gICAgfVxuXG4gICAgaWYgKHJlbmRlckVtcHR5KSB7XG4gICAgICBjb25maWcucmVuZGVyRW1wdHkgPSByZW5kZXJFbXB0eTtcbiAgICB9XG5cbiAgICBpZiAocGFnZUhlYWRlcikge1xuICAgICAgY29uZmlnLnBhZ2VIZWFkZXIgPSBwYWdlSGVhZGVyO1xuICAgIH1cblxuICAgIGlmIChpbnB1dCkge1xuICAgICAgY29uZmlnLmlucHV0ID0gaW5wdXQ7XG4gICAgfVxuXG4gICAgaWYgKGZvcm0pIHtcbiAgICAgIGNvbmZpZy5mb3JtID0gZm9ybTtcbiAgICB9XG5cbiAgICB2YXIgY2hpbGROb2RlID0gY2hpbGRyZW47IC8vIEFkZGl0aW9uYWwgRm9ybSBwcm92aWRlclxuXG4gICAgdmFyIHZhbGlkYXRlTWVzc2FnZXMgPSB7fTtcblxuICAgIGlmIChsb2NhbGUgJiYgbG9jYWxlLkZvcm0gJiYgbG9jYWxlLkZvcm0uZGVmYXVsdFZhbGlkYXRlTWVzc2FnZXMpIHtcbiAgICAgIHZhbGlkYXRlTWVzc2FnZXMgPSBsb2NhbGUuRm9ybS5kZWZhdWx0VmFsaWRhdGVNZXNzYWdlcztcbiAgICB9XG5cbiAgICBpZiAoZm9ybSAmJiBmb3JtLnZhbGlkYXRlTWVzc2FnZXMpIHtcbiAgICAgIHZhbGlkYXRlTWVzc2FnZXMgPSAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCB2YWxpZGF0ZU1lc3NhZ2VzKSwgZm9ybS52YWxpZGF0ZU1lc3NhZ2VzKTtcbiAgICB9XG5cbiAgICBpZiAoT2JqZWN0LmtleXModmFsaWRhdGVNZXNzYWdlcykubGVuZ3RoID4gMCkge1xuICAgICAgY2hpbGROb2RlID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX3JjRmllbGRGb3JtLkZvcm1Qcm92aWRlciwge1xuICAgICAgICB2YWxpZGF0ZU1lc3NhZ2VzOiB2YWxpZGF0ZU1lc3NhZ2VzXG4gICAgICB9LCBjaGlsZHJlbik7XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkcmVuV2l0aExvY2FsZSA9IGxvY2FsZSA9PT0gdW5kZWZpbmVkID8gY2hpbGROb2RlIDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX2xvY2FsZVByb3ZpZGVyW1wiZGVmYXVsdFwiXSwge1xuICAgICAgbG9jYWxlOiBsb2NhbGUgfHwgbGVnYWN5TG9jYWxlLFxuICAgICAgX0FOVF9NQVJLX186IF9sb2NhbGVQcm92aWRlci5BTlRfTUFSS1xuICAgIH0sIGNoaWxkTm9kZSk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9TaXplQ29udGV4dC5TaXplQ29udGV4dFByb3ZpZGVyLCB7XG4gICAgICBzaXplOiBjb21wb25lbnRTaXplXG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX2NvbnRleHQuQ29uZmlnQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgdmFsdWU6IGNvbmZpZ1xuICAgIH0sIGNoaWxkcmVuV2l0aExvY2FsZSkpO1xuICB9O1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfTG9jYWxlUmVjZWl2ZXJbXCJkZWZhdWx0XCJdLCBudWxsLCBmdW5jdGlvbiAoXywgX18sIGxlZ2FjeUxvY2FsZSkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfY29udGV4dC5Db25maWdDb25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIHJldHVybiByZW5kZXJQcm92aWRlcihjb250ZXh0LCBsZWdhY3lMb2NhbGUpO1xuICAgIH0pO1xuICB9KTtcbn07XG4vKiogQHByaXZhdGUgaW50ZXJuYWwgdXNhZ2UuIGRvIG5vdCB1c2UgaW4geW91ciBwcm9kdWN0aW9uICovXG5cblxuQ29uZmlnUHJvdmlkZXIuQ29uZmlnQ29udGV4dCA9IF9jb250ZXh0LkNvbmZpZ0NvbnRleHQ7XG52YXIgX2RlZmF1bHQgPSBDb25maWdQcm92aWRlcjtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfZW1wdHkgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9lbXB0eVwiKSk7XG5cbnZhciBfID0gcmVxdWlyZShcIi5cIik7XG5cbnZhciByZW5kZXJFbXB0eSA9IGZ1bmN0aW9uIHJlbmRlckVtcHR5KGNvbXBvbmVudE5hbWUpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF8uQ29uZmlnQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGdldFByZWZpeENscyA9IF9yZWYuZ2V0UHJlZml4Q2xzO1xuICAgIHZhciBwcmVmaXggPSBnZXRQcmVmaXhDbHMoJ2VtcHR5Jyk7XG5cbiAgICBzd2l0Y2ggKGNvbXBvbmVudE5hbWUpIHtcbiAgICAgIGNhc2UgJ1RhYmxlJzpcbiAgICAgIGNhc2UgJ0xpc3QnOlxuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX2VtcHR5W1wiZGVmYXVsdFwiXSwge1xuICAgICAgICAgIGltYWdlOiBfZW1wdHlbXCJkZWZhdWx0XCJdLlBSRVNFTlRFRF9JTUFHRV9TSU1QTEVcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ1NlbGVjdCc6XG4gICAgICBjYXNlICdUcmVlU2VsZWN0JzpcbiAgICAgIGNhc2UgJ0Nhc2NhZGVyJzpcbiAgICAgIGNhc2UgJ1RyYW5zZmVyJzpcbiAgICAgIGNhc2UgJ01lbnRpb25zJzpcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9lbXB0eVtcImRlZmF1bHRcIl0sIHtcbiAgICAgICAgICBpbWFnZTogX2VtcHR5W1wiZGVmYXVsdFwiXS5QUkVTRU5URURfSU1BR0VfU0lNUExFLFxuICAgICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4LCBcIi1zbWFsbFwiKVxuICAgICAgICB9KTtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9lbXB0eVtcImRlZmF1bHRcIl0sIG51bGwpO1xuICAgIH1cbiAgfSk7XG59O1xuXG52YXIgX2RlZmF1bHQgPSByZW5kZXJFbXB0eTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX2VuX1VTID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmMtcGlja2VyL2xpYi9sb2NhbGUvZW5fVVNcIikpO1xuXG52YXIgX2VuX1VTMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uL3RpbWUtcGlja2VyL2xvY2FsZS9lbl9VU1wiKSk7XG5cbi8vIE1lcmdlIGludG8gYSBsb2NhbGUgb2JqZWN0XG52YXIgbG9jYWxlID0ge1xuICBsYW5nOiAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe1xuICAgIHBsYWNlaG9sZGVyOiAnU2VsZWN0IGRhdGUnLFxuICAgIHllYXJQbGFjZWhvbGRlcjogJ1NlbGVjdCB5ZWFyJyxcbiAgICBxdWFydGVyUGxhY2Vob2xkZXI6ICdTZWxlY3QgcXVhcnRlcicsXG4gICAgbW9udGhQbGFjZWhvbGRlcjogJ1NlbGVjdCBtb250aCcsXG4gICAgd2Vla1BsYWNlaG9sZGVyOiAnU2VsZWN0IHdlZWsnLFxuICAgIHJhbmdlUGxhY2Vob2xkZXI6IFsnU3RhcnQgZGF0ZScsICdFbmQgZGF0ZSddLFxuICAgIHJhbmdlWWVhclBsYWNlaG9sZGVyOiBbJ1N0YXJ0IHllYXInLCAnRW5kIHllYXInXSxcbiAgICByYW5nZU1vbnRoUGxhY2Vob2xkZXI6IFsnU3RhcnQgbW9udGgnLCAnRW5kIG1vbnRoJ10sXG4gICAgcmFuZ2VXZWVrUGxhY2Vob2xkZXI6IFsnU3RhcnQgd2VlaycsICdFbmQgd2VlayddXG4gIH0sIF9lbl9VU1tcImRlZmF1bHRcIl0pLFxuICB0aW1lUGlja2VyTG9jYWxlOiAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIF9lbl9VUzJbXCJkZWZhdWx0XCJdKVxufTsgLy8gQWxsIHNldHRpbmdzIGF0OlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9ibG9iL21hc3Rlci9jb21wb25lbnRzL2RhdGUtcGlja2VyL2xvY2FsZS9leGFtcGxlLmpzb25cblxudmFyIF9kZWZhdWx0ID0gbG9jYWxlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIEVtcHR5ID0gZnVuY3Rpb24gRW1wdHkoKSB7XG4gIHZhciBfUmVhY3QkdXNlQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnRleHQpLFxuICAgICAgZ2V0UHJlZml4Q2xzID0gX1JlYWN0JHVzZUNvbnRleHQuZ2V0UHJlZml4Q2xzO1xuXG4gIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ2VtcHR5LWltZy1kZWZhdWx0Jyk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCB7XG4gICAgY2xhc3NOYW1lOiBwcmVmaXhDbHMsXG4gICAgd2lkdGg6IFwiMTg0XCIsXG4gICAgaGVpZ2h0OiBcIjE1MlwiLFxuICAgIHZpZXdCb3g6IFwiMCAwIDE4NCAxNTJcIixcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLCB7XG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLCB7XG4gICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgyNCAzMS42NylcIlxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImVsbGlwc2VcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1lbGxpcHNlXCIpLFxuICAgIGN4OiBcIjY3Ljc5N1wiLFxuICAgIGN5OiBcIjEwNi44OVwiLFxuICAgIHJ4OiBcIjY3Ljc5N1wiLFxuICAgIHJ5OiBcIjEyLjY2OFwiXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1wYXRoLTFcIiksXG4gICAgZDogXCJNMTIyLjAzNCA2OS42NzRMOTguMTA5IDQwLjIyOWMtMS4xNDgtMS4zODYtMi44MjYtMi4yMjUtNC41OTMtMi4yMjVoLTUxLjQ0Yy0xLjc2NiAwLTMuNDQ0LjgzOS00LjU5MiAyLjIyNUwxMy41NiA2OS42NzR2MTUuMzgzaDEwOC40NzVWNjkuNjc0elwiXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1wYXRoLTJcIiksXG4gICAgZDogXCJNMTAxLjUzNyA4Ni4yMTRMODAuNjMgNjEuMTAyYy0xLjAwMS0xLjIwNy0yLjUwNy0xLjg2Ny00LjA0OC0xLjg2N0gzMS43MjRjLTEuNTQgMC0zLjA0Ny42Ni00LjA0OCAxLjg2N0w2Ljc2OSA4Ni4yMTR2MTMuNzkyaDk0Ljc2OFY4Ni4yMTR6XCIsXG4gICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgxMy41NilcIlxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcGF0aC0zXCIpLFxuICAgIGQ6IFwiTTMzLjgzIDBoNjcuOTMzYTQgNCAwIDAgMSA0IDR2OTMuMzQ0YTQgNCAwIDAgMS00IDRIMzMuODNhNCA0IDAgMCAxLTQtNFY0YTQgNCAwIDAgMSA0LTR6XCJcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXBhdGgtNFwiKSxcbiAgICBkOiBcIk00Mi42NzggOS45NTNoNTAuMjM3YTIgMiAwIDAgMSAyIDJWMzYuOTFhMiAyIDAgMCAxLTIgMkg0Mi42NzhhMiAyIDAgMCAxLTItMlYxMS45NTNhMiAyIDAgMCAxIDItMnpNNDIuOTQgNDkuNzY3aDQ5LjcxM2EyLjI2MiAyLjI2MiAwIDEgMSAwIDQuNTI0SDQyLjk0YTIuMjYyIDIuMjYyIDAgMCAxIDAtNC41MjR6TTQyLjk0IDYxLjUzaDQ5LjcxM2EyLjI2MiAyLjI2MiAwIDEgMSAwIDQuNTI1SDQyLjk0YTIuMjYyIDIuMjYyIDAgMCAxIDAtNC41MjV6TTEyMS44MTMgMTA1LjAzMmMtLjc3NSAzLjA3MS0zLjQ5NyA1LjM2LTYuNzM1IDUuMzZIMjAuNTE1Yy0zLjIzOCAwLTUuOTYtMi4yOS02LjczNC01LjM2YTcuMzA5IDcuMzA5IDAgMCAxLS4yMjItMS43OVY2OS42NzVoMjYuMzE4YzIuOTA3IDAgNS4yNSAyLjQ0OCA1LjI1IDUuNDJ2LjA0YzAgMi45NzEgMi4zNyA1LjM3IDUuMjc3IDUuMzdoMzQuNzg1YzIuOTA3IDAgNS4yNzctMi40MjEgNS4yNzctNS4zOTNWNzUuMWMwLTIuOTcyIDIuMzQzLTUuNDI2IDUuMjUtNS40MjZoMjYuMzE4djMzLjU2OWMwIC42MTctLjA3NyAxLjIxNi0uMjIxIDEuNzg5elwiXG4gIH0pKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcGF0aC01XCIpLFxuICAgIGQ6IFwiTTE0OS4xMjEgMzMuMjkybC02LjgzIDIuNjVhMSAxIDAgMCAxLTEuMzE3LTEuMjNsMS45MzctNi4yMDdjLTIuNTg5LTIuOTQ0LTQuMTA5LTYuNTM0LTQuMTA5LTEwLjQwOEMxMzguODAyIDguMTAyIDE0OC45MiAwIDE2MS40MDIgMCAxNzMuODgxIDAgMTg0IDguMTAyIDE4NCAxOC4wOTdjMCA5Ljk5NS0xMC4xMTggMTguMDk3LTIyLjU5OSAxOC4wOTctNC41MjggMC04Ljc0NC0xLjA2Ni0xMi4yOC0yLjkwMnpcIlxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZ1wiKSxcbiAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKDE0OS42NSAxNS4zODMpXCJcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJlbGxpcHNlXCIsIHtcbiAgICBjeDogXCIyMC42NTRcIixcbiAgICBjeTogXCIzLjE2N1wiLFxuICAgIHJ4OiBcIjIuODQ5XCIsXG4gICAgcnk6IFwiMi44MTVcIlxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk01LjY5OCA1LjYzSDBMMi44OTguNzA0ek05LjI1OS43MDRoNC45ODVWNS42M0g5LjI1OXpcIlxuICB9KSkpKTtcbn07XG5cbnZhciBfZGVmYXVsdCA9IEVtcHR5O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIF9Mb2NhbGVSZWNlaXZlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2xvY2FsZS1wcm92aWRlci9Mb2NhbGVSZWNlaXZlclwiKSk7XG5cbnZhciBfZW1wdHkgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2VtcHR5XCIpKTtcblxudmFyIF9zaW1wbGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3NpbXBsZVwiKSk7XG5cbnZhciBfX3Jlc3QgPSB2b2lkIDAgJiYgKHZvaWQgMCkuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG5cbiAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgfVxuXG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG52YXIgZGVmYXVsdEVtcHR5SW1nID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX2VtcHR5W1wiZGVmYXVsdFwiXSwgbnVsbCk7XG52YXIgc2ltcGxlRW1wdHlJbWcgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfc2ltcGxlW1wiZGVmYXVsdFwiXSwgbnVsbCk7XG5cbnZhciBFbXB0eSA9IGZ1bmN0aW9uIEVtcHR5KF9hKSB7XG4gIHZhciBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWUsXG4gICAgICBjdXN0b21pemVQcmVmaXhDbHMgPSBfYS5wcmVmaXhDbHMsXG4gICAgICBfYSRpbWFnZSA9IF9hLmltYWdlLFxuICAgICAgaW1hZ2UgPSBfYSRpbWFnZSA9PT0gdm9pZCAwID8gZGVmYXVsdEVtcHR5SW1nIDogX2EkaW1hZ2UsXG4gICAgICBkZXNjcmlwdGlvbiA9IF9hLmRlc2NyaXB0aW9uLFxuICAgICAgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbixcbiAgICAgIGltYWdlU3R5bGUgPSBfYS5pbWFnZVN0eWxlLFxuICAgICAgcmVzdFByb3BzID0gX19yZXN0KF9hLCBbXCJjbGFzc05hbWVcIiwgXCJwcmVmaXhDbHNcIiwgXCJpbWFnZVwiLCBcImRlc2NyaXB0aW9uXCIsIFwiY2hpbGRyZW5cIiwgXCJpbWFnZVN0eWxlXCJdKTtcblxuICB2YXIgX1JlYWN0JHVzZUNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KF9jb25maWdQcm92aWRlci5Db25maWdDb250ZXh0KSxcbiAgICAgIGdldFByZWZpeENscyA9IF9SZWFjdCR1c2VDb250ZXh0LmdldFByZWZpeENscyxcbiAgICAgIGRpcmVjdGlvbiA9IF9SZWFjdCR1c2VDb250ZXh0LmRpcmVjdGlvbjtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX0xvY2FsZVJlY2VpdmVyW1wiZGVmYXVsdFwiXSwge1xuICAgIGNvbXBvbmVudE5hbWU6IFwiRW1wdHlcIlxuICB9LCBmdW5jdGlvbiAobG9jYWxlKSB7XG4gICAgdmFyIF9jbGFzc05hbWVzO1xuXG4gICAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygnZW1wdHknLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICAgIHZhciBkZXMgPSB0eXBlb2YgZGVzY3JpcHRpb24gIT09ICd1bmRlZmluZWQnID8gZGVzY3JpcHRpb24gOiBsb2NhbGUuZGVzY3JpcHRpb247XG4gICAgdmFyIGFsdCA9IHR5cGVvZiBkZXMgPT09ICdzdHJpbmcnID8gZGVzIDogJ2VtcHR5JztcbiAgICB2YXIgaW1hZ2VOb2RlID0gbnVsbDtcblxuICAgIGlmICh0eXBlb2YgaW1hZ2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpbWFnZU5vZGUgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7XG4gICAgICAgIGFsdDogYWx0LFxuICAgICAgICBzcmM6IGltYWdlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW1hZ2VOb2RlID0gaW1hZ2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7XG4gICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKHByZWZpeENscywgKF9jbGFzc05hbWVzID0ge30sICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbm9ybWFsXCIpLCBpbWFnZSA9PT0gc2ltcGxlRW1wdHlJbWcpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXJ0bFwiKSwgZGlyZWN0aW9uID09PSAncnRsJyksIF9jbGFzc05hbWVzKSwgY2xhc3NOYW1lKVxuICAgIH0sIHJlc3RQcm9wcyksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pbWFnZVwiKSxcbiAgICAgIHN0eWxlOiBpbWFnZVN0eWxlXG4gICAgfSwgaW1hZ2VOb2RlKSwgZGVzICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZGVzY3JpcHRpb25cIilcbiAgICB9LCBkZXMpLCBjaGlsZHJlbiAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZm9vdGVyXCIpXG4gICAgfSwgY2hpbGRyZW4pKTtcbiAgfSk7XG59O1xuXG5FbXB0eS5QUkVTRU5URURfSU1BR0VfREVGQVVMVCA9IGRlZmF1bHRFbXB0eUltZztcbkVtcHR5LlBSRVNFTlRFRF9JTUFHRV9TSU1QTEUgPSBzaW1wbGVFbXB0eUltZztcbnZhciBfZGVmYXVsdCA9IEVtcHR5O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIFNpbXBsZSA9IGZ1bmN0aW9uIFNpbXBsZSgpIHtcbiAgdmFyIF9SZWFjdCR1c2VDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29udGV4dCksXG4gICAgICBnZXRQcmVmaXhDbHMgPSBfUmVhY3QkdXNlQ29udGV4dC5nZXRQcmVmaXhDbHM7XG5cbiAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygnZW1wdHktaW1nLXNpbXBsZScpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwge1xuICAgIGNsYXNzTmFtZTogcHJlZml4Q2xzLFxuICAgIHdpZHRoOiBcIjY0XCIsXG4gICAgaGVpZ2h0OiBcIjQxXCIsXG4gICAgdmlld0JveDogXCIwIDAgNjQgNDFcIixcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLCB7XG4gICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgwIDEpXCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZWxsaXBzZVwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWVsbGlwc2VcIiksXG4gICAgY3g6IFwiMzJcIixcbiAgICBjeTogXCIzM1wiLFxuICAgIHJ4OiBcIjMyXCIsXG4gICAgcnk6IFwiN1wiXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1nXCIpLFxuICAgIGZpbGxSdWxlOiBcIm5vbnplcm9cIlxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTU1IDEyLjc2TDQ0Ljg1NCAxLjI1OEM0NC4zNjcuNDc0IDQzLjY1NiAwIDQyLjkwNyAwSDIxLjA5M2MtLjc0OSAwLTEuNDYuNDc0LTEuOTQ3IDEuMjU3TDkgMTIuNzYxVjIyaDQ2di05LjI0elwiXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTQxLjYxMyAxNS45MzFjMC0xLjYwNS45OTQtMi45MyAyLjIyNy0yLjkzMUg1NXYxOC4xMzdDNTUgMzMuMjYgNTMuNjggMzUgNTIuMDUgMzVoLTQwLjFDMTAuMzIgMzUgOSAzMy4yNTkgOSAzMS4xMzdWMTNoMTEuMTZjMS4yMzMgMCAyLjIyNyAxLjMyMyAyLjIyNyAyLjkyOHYuMDIyYzAgMS42MDUgMS4wMDUgMi45MDEgMi4yMzcgMi45MDFoMTQuNzUyYzEuMjMyIDAgMi4yMzctMS4zMDggMi4yMzctMi45MTN2LS4wMDd6XCIsXG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXBhdGhcIilcbiAgfSkpKSk7XG59O1xuXG52YXIgX2RlZmF1bHQgPSBTaW1wbGU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbnZhciBSb3dDb250ZXh0ID0gLyojX19QVVJFX18qLygwLCBfcmVhY3QuY3JlYXRlQ29udGV4dCkoe30pO1xudmFyIF9kZWZhdWx0ID0gUm93Q29udGV4dDtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX3R5cGVvZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX1Jvd0NvbnRleHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1Jvd0NvbnRleHRcIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIF9fcmVzdCA9IHZvaWQgMCAmJiAodm9pZCAwKS5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcblxuICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICB9XG5cbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgfVxuICByZXR1cm4gdDtcbn07XG5cbmZ1bmN0aW9uIHBhcnNlRmxleChmbGV4KSB7XG4gIGlmICh0eXBlb2YgZmxleCA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gXCJcIi5jb25jYXQoZmxleCwgXCIgXCIpLmNvbmNhdChmbGV4LCBcIiBhdXRvXCIpO1xuICB9XG5cbiAgaWYgKC9eXFxkKyhcXC5cXGQrKT8ocHh8ZW18cmVtfCUpJC8udGVzdChmbGV4KSkge1xuICAgIHJldHVybiBcIjAgMCBcIi5jb25jYXQoZmxleCk7XG4gIH1cblxuICByZXR1cm4gZmxleDtcbn1cblxudmFyIHNpemVzID0gWyd4cycsICdzbScsICdtZCcsICdsZycsICd4bCcsICd4eGwnXTtcbnZhciBDb2wgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgdmFyIF9SZWFjdCR1c2VDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29udGV4dCksXG4gICAgICBnZXRQcmVmaXhDbHMgPSBfUmVhY3QkdXNlQ29udGV4dC5nZXRQcmVmaXhDbHMsXG4gICAgICBkaXJlY3Rpb24gPSBfUmVhY3QkdXNlQ29udGV4dC5kaXJlY3Rpb247XG5cbiAgdmFyIF9SZWFjdCR1c2VDb250ZXh0MiA9IFJlYWN0LnVzZUNvbnRleHQoX1Jvd0NvbnRleHRbXCJkZWZhdWx0XCJdKSxcbiAgICAgIGd1dHRlciA9IF9SZWFjdCR1c2VDb250ZXh0Mi5ndXR0ZXIsXG4gICAgICB3cmFwID0gX1JlYWN0JHVzZUNvbnRleHQyLndyYXA7XG5cbiAgdmFyIGN1c3RvbWl6ZVByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgIHNwYW4gPSBwcm9wcy5zcGFuLFxuICAgICAgb3JkZXIgPSBwcm9wcy5vcmRlcixcbiAgICAgIG9mZnNldCA9IHByb3BzLm9mZnNldCxcbiAgICAgIHB1c2ggPSBwcm9wcy5wdXNoLFxuICAgICAgcHVsbCA9IHByb3BzLnB1bGwsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgZmxleCA9IHByb3BzLmZsZXgsXG4gICAgICBzdHlsZSA9IHByb3BzLnN0eWxlLFxuICAgICAgb3RoZXJzID0gX19yZXN0KHByb3BzLCBbXCJwcmVmaXhDbHNcIiwgXCJzcGFuXCIsIFwib3JkZXJcIiwgXCJvZmZzZXRcIiwgXCJwdXNoXCIsIFwicHVsbFwiLCBcImNsYXNzTmFtZVwiLCBcImNoaWxkcmVuXCIsIFwiZmxleFwiLCBcInN0eWxlXCJdKTtcblxuICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdjb2wnLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICB2YXIgc2l6ZUNsYXNzT2JqID0ge307XG4gIHNpemVzLmZvckVhY2goZnVuY3Rpb24gKHNpemUpIHtcbiAgICB2YXIgX2V4dGVuZHMyO1xuXG4gICAgdmFyIHNpemVQcm9wcyA9IHt9O1xuICAgIHZhciBwcm9wU2l6ZSA9IHByb3BzW3NpemVdO1xuXG4gICAgaWYgKHR5cGVvZiBwcm9wU2l6ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHNpemVQcm9wcy5zcGFuID0gcHJvcFNpemU7XG4gICAgfSBlbHNlIGlmICgoMCwgX3R5cGVvZjJbXCJkZWZhdWx0XCJdKShwcm9wU2l6ZSkgPT09ICdvYmplY3QnKSB7XG4gICAgICBzaXplUHJvcHMgPSBwcm9wU2l6ZSB8fCB7fTtcbiAgICB9XG5cbiAgICBkZWxldGUgb3RoZXJzW3NpemVdO1xuICAgIHNpemVDbGFzc09iaiA9ICgwLCBfZXh0ZW5kczNbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMzW1wiZGVmYXVsdFwiXSkoe30sIHNpemVDbGFzc09iaiksIChfZXh0ZW5kczIgPSB7fSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfZXh0ZW5kczIsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItXCIpLmNvbmNhdChzaXplLCBcIi1cIikuY29uY2F0KHNpemVQcm9wcy5zcGFuKSwgc2l6ZVByb3BzLnNwYW4gIT09IHVuZGVmaW5lZCksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2V4dGVuZHMyLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQoc2l6ZSwgXCItb3JkZXItXCIpLmNvbmNhdChzaXplUHJvcHMub3JkZXIpLCBzaXplUHJvcHMub3JkZXIgfHwgc2l6ZVByb3BzLm9yZGVyID09PSAwKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfZXh0ZW5kczIsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItXCIpLmNvbmNhdChzaXplLCBcIi1vZmZzZXQtXCIpLmNvbmNhdChzaXplUHJvcHMub2Zmc2V0KSwgc2l6ZVByb3BzLm9mZnNldCB8fCBzaXplUHJvcHMub2Zmc2V0ID09PSAwKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfZXh0ZW5kczIsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItXCIpLmNvbmNhdChzaXplLCBcIi1wdXNoLVwiKS5jb25jYXQoc2l6ZVByb3BzLnB1c2gpLCBzaXplUHJvcHMucHVzaCB8fCBzaXplUHJvcHMucHVzaCA9PT0gMCksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2V4dGVuZHMyLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQoc2l6ZSwgXCItcHVsbC1cIikuY29uY2F0KHNpemVQcm9wcy5wdWxsKSwgc2l6ZVByb3BzLnB1bGwgfHwgc2l6ZVByb3BzLnB1bGwgPT09IDApLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9leHRlbmRzMiwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ydGxcIiksIGRpcmVjdGlvbiA9PT0gJ3J0bCcpLCBfZXh0ZW5kczIpKTtcbiAgfSk7XG4gIHZhciBjbGFzc2VzID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkocHJlZml4Q2xzLCAoX2NsYXNzTmFtZXMgPSB7fSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KHNwYW4pLCBzcGFuICE9PSB1bmRlZmluZWQpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLW9yZGVyLVwiKS5jb25jYXQob3JkZXIpLCBvcmRlciksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItb2Zmc2V0LVwiKS5jb25jYXQob2Zmc2V0KSwgb2Zmc2V0KSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1wdXNoLVwiKS5jb25jYXQocHVzaCksIHB1c2gpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXB1bGwtXCIpLmNvbmNhdChwdWxsKSwgcHVsbCksIF9jbGFzc05hbWVzKSwgY2xhc3NOYW1lLCBzaXplQ2xhc3NPYmopO1xuICB2YXIgbWVyZ2VkU3R5bGUgPSAoMCwgX2V4dGVuZHMzW1wiZGVmYXVsdFwiXSkoe30sIHN0eWxlKTtcblxuICBpZiAoZ3V0dGVyKSB7XG4gICAgbWVyZ2VkU3R5bGUgPSAoMCwgX2V4dGVuZHMzW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzM1tcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczNbXCJkZWZhdWx0XCJdKSh7fSwgZ3V0dGVyWzBdID4gMCA/IHtcbiAgICAgIHBhZGRpbmdMZWZ0OiBndXR0ZXJbMF0gLyAyLFxuICAgICAgcGFkZGluZ1JpZ2h0OiBndXR0ZXJbMF0gLyAyXG4gICAgfSA6IHt9KSwgZ3V0dGVyWzFdID4gMCA/IHtcbiAgICAgIHBhZGRpbmdUb3A6IGd1dHRlclsxXSAvIDIsXG4gICAgICBwYWRkaW5nQm90dG9tOiBndXR0ZXJbMV0gLyAyXG4gICAgfSA6IHt9KSwgbWVyZ2VkU3R5bGUpO1xuICB9XG5cbiAgaWYgKGZsZXgpIHtcbiAgICBtZXJnZWRTdHlsZS5mbGV4ID0gcGFyc2VGbGV4KGZsZXgpOyAvLyBIYWNrIGZvciBGaXJlZm94IHRvIGF2b2lkIHNpemUgaXNzdWVcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL3B1bGwvMjAwMjMjaXNzdWVjb21tZW50LTU2NDM4OTU1M1xuXG4gICAgaWYgKGZsZXggPT09ICdhdXRvJyAmJiB3cmFwID09PSBmYWxzZSAmJiAhbWVyZ2VkU3R5bGUubWluV2lkdGgpIHtcbiAgICAgIG1lcmdlZFN0eWxlLm1pbldpZHRoID0gMDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgKDAsIF9leHRlbmRzM1tcImRlZmF1bHRcIl0pKHt9LCBvdGhlcnMsIHtcbiAgICBzdHlsZTogbWVyZ2VkU3R5bGUsXG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgIHJlZjogcmVmXG4gIH0pLCBjaGlsZHJlbik7XG59KTtcbkNvbC5kaXNwbGF5TmFtZSA9ICdDb2wnO1xudmFyIF9kZWZhdWx0ID0gQ29sO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9zbGljZWRUb0FycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiKSk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbnZhciBfcmVzcG9uc2l2ZU9ic2VydmUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9fdXRpbC9yZXNwb25zaXZlT2JzZXJ2ZVwiKSk7XG5cbmZ1bmN0aW9uIHVzZUJyZWFrcG9pbnQoKSB7XG4gIHZhciBfdXNlU3RhdGUgPSAoMCwgX3JlYWN0LnVzZVN0YXRlKSh7fSksXG4gICAgICBfdXNlU3RhdGUyID0gKDAsIF9zbGljZWRUb0FycmF5MltcImRlZmF1bHRcIl0pKF91c2VTdGF0ZSwgMiksXG4gICAgICBzY3JlZW5zID0gX3VzZVN0YXRlMlswXSxcbiAgICAgIHNldFNjcmVlbnMgPSBfdXNlU3RhdGUyWzFdO1xuXG4gICgwLCBfcmVhY3QudXNlRWZmZWN0KShmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRva2VuID0gX3Jlc3BvbnNpdmVPYnNlcnZlW1wiZGVmYXVsdFwiXS5zdWJzY3JpYmUoZnVuY3Rpb24gKHN1cHBvcnRTY3JlZW5zKSB7XG4gICAgICBzZXRTY3JlZW5zKHN1cHBvcnRTY3JlZW5zKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3Jlc3BvbnNpdmVPYnNlcnZlW1wiZGVmYXVsdFwiXS51bnN1YnNjcmliZSh0b2tlbik7XG4gICAgfTtcbiAgfSwgW10pO1xuICByZXR1cm4gc2NyZWVucztcbn1cblxudmFyIF9kZWZhdWx0ID0gdXNlQnJlYWtwb2ludDtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUm93XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9yb3dbXCJkZWZhdWx0XCJdO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkNvbFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfY29sW1wiZGVmYXVsdFwiXTtcbiAgfVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9yb3cgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3Jvd1wiKSk7XG5cbnZhciBfY29sID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9jb2xcIikpO1xuXG52YXIgX3VzZUJyZWFrcG9pbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2hvb2tzL3VzZUJyZWFrcG9pbnRcIikpO1xuXG52YXIgX2RlZmF1bHQgPSB7XG4gIHVzZUJyZWFrcG9pbnQ6IF91c2VCcmVha3BvaW50W1wiZGVmYXVsdFwiXVxufTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIikpO1xuXG52YXIgX3R5cGVvZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKSk7XG5cbnZhciBfc2xpY2VkVG9BcnJheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIikpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9jb25maWdQcm92aWRlciA9IHJlcXVpcmUoXCIuLi9jb25maWctcHJvdmlkZXJcIik7XG5cbnZhciBfUm93Q29udGV4dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vUm93Q29udGV4dFwiKSk7XG5cbnZhciBfdHlwZSA9IHJlcXVpcmUoXCIuLi9fdXRpbC90eXBlXCIpO1xuXG52YXIgX3Jlc3BvbnNpdmVPYnNlcnZlID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL191dGlsL3Jlc3BvbnNpdmVPYnNlcnZlXCIpKTtcblxudmFyIF9fcmVzdCA9IHZvaWQgMCAmJiAodm9pZCAwKS5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcblxuICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICB9XG5cbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgfVxuICByZXR1cm4gdDtcbn07XG5cbnZhciBSb3dBbGlnbnMgPSAoMCwgX3R5cGUudHVwbGUpKCd0b3AnLCAnbWlkZGxlJywgJ2JvdHRvbScsICdzdHJldGNoJyk7XG52YXIgUm93SnVzdGlmeSA9ICgwLCBfdHlwZS50dXBsZSkoJ3N0YXJ0JywgJ2VuZCcsICdjZW50ZXInLCAnc3BhY2UtYXJvdW5kJywgJ3NwYWNlLWJldHdlZW4nKTtcbnZhciBSb3cgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgdmFyIGN1c3RvbWl6ZVByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgIGp1c3RpZnkgPSBwcm9wcy5qdXN0aWZ5LFxuICAgICAgYWxpZ24gPSBwcm9wcy5hbGlnbixcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIHN0eWxlID0gcHJvcHMuc3R5bGUsXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgX3Byb3BzJGd1dHRlciA9IHByb3BzLmd1dHRlcixcbiAgICAgIGd1dHRlciA9IF9wcm9wcyRndXR0ZXIgPT09IHZvaWQgMCA/IDAgOiBfcHJvcHMkZ3V0dGVyLFxuICAgICAgd3JhcCA9IHByb3BzLndyYXAsXG4gICAgICBvdGhlcnMgPSBfX3Jlc3QocHJvcHMsIFtcInByZWZpeENsc1wiLCBcImp1c3RpZnlcIiwgXCJhbGlnblwiLCBcImNsYXNzTmFtZVwiLCBcInN0eWxlXCIsIFwiY2hpbGRyZW5cIiwgXCJndXR0ZXJcIiwgXCJ3cmFwXCJdKTtcblxuICB2YXIgX1JlYWN0JHVzZUNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KF9jb25maWdQcm92aWRlci5Db25maWdDb250ZXh0KSxcbiAgICAgIGdldFByZWZpeENscyA9IF9SZWFjdCR1c2VDb250ZXh0LmdldFByZWZpeENscyxcbiAgICAgIGRpcmVjdGlvbiA9IF9SZWFjdCR1c2VDb250ZXh0LmRpcmVjdGlvbjtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUoe1xuICAgIHhzOiB0cnVlLFxuICAgIHNtOiB0cnVlLFxuICAgIG1kOiB0cnVlLFxuICAgIGxnOiB0cnVlLFxuICAgIHhsOiB0cnVlLFxuICAgIHh4bDogdHJ1ZVxuICB9KSxcbiAgICAgIF9SZWFjdCR1c2VTdGF0ZTIgPSAoMCwgX3NsaWNlZFRvQXJyYXkyW1wiZGVmYXVsdFwiXSkoX1JlYWN0JHVzZVN0YXRlLCAyKSxcbiAgICAgIHNjcmVlbnMgPSBfUmVhY3QkdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0U2NyZWVucyA9IF9SZWFjdCR1c2VTdGF0ZTJbMV07XG5cbiAgdmFyIGd1dHRlclJlZiA9IFJlYWN0LnVzZVJlZihndXR0ZXIpO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHZhciB0b2tlbiA9IF9yZXNwb25zaXZlT2JzZXJ2ZVtcImRlZmF1bHRcIl0uc3Vic2NyaWJlKGZ1bmN0aW9uIChzY3JlZW4pIHtcbiAgICAgIHZhciBjdXJyZW50R3V0dGVyID0gZ3V0dGVyUmVmLmN1cnJlbnQgfHwgMDtcblxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGN1cnJlbnRHdXR0ZXIpICYmICgwLCBfdHlwZW9mMltcImRlZmF1bHRcIl0pKGN1cnJlbnRHdXR0ZXIpID09PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KGN1cnJlbnRHdXR0ZXIpICYmICgoMCwgX3R5cGVvZjJbXCJkZWZhdWx0XCJdKShjdXJyZW50R3V0dGVyWzBdKSA9PT0gJ29iamVjdCcgfHwgKDAsIF90eXBlb2YyW1wiZGVmYXVsdFwiXSkoY3VycmVudEd1dHRlclsxXSkgPT09ICdvYmplY3QnKSkge1xuICAgICAgICBzZXRTY3JlZW5zKHNjcmVlbik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF9yZXNwb25zaXZlT2JzZXJ2ZVtcImRlZmF1bHRcIl0udW5zdWJzY3JpYmUodG9rZW4pO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICB2YXIgZ2V0R3V0dGVyID0gZnVuY3Rpb24gZ2V0R3V0dGVyKCkge1xuICAgIHZhciByZXN1bHRzID0gWzAsIDBdO1xuICAgIHZhciBub3JtYWxpemVkR3V0dGVyID0gQXJyYXkuaXNBcnJheShndXR0ZXIpID8gZ3V0dGVyIDogW2d1dHRlciwgMF07XG4gICAgbm9ybWFsaXplZEd1dHRlci5mb3JFYWNoKGZ1bmN0aW9uIChnLCBpbmRleCkge1xuICAgICAgaWYgKCgwLCBfdHlwZW9mMltcImRlZmF1bHRcIl0pKGcpID09PSAnb2JqZWN0Jykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF9yZXNwb25zaXZlT2JzZXJ2ZS5yZXNwb25zaXZlQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgYnJlYWtwb2ludCA9IF9yZXNwb25zaXZlT2JzZXJ2ZS5yZXNwb25zaXZlQXJyYXlbaV07XG5cbiAgICAgICAgICBpZiAoc2NyZWVuc1ticmVha3BvaW50XSAmJiBnW2JyZWFrcG9pbnRdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJlc3VsdHNbaW5kZXhdID0gZ1ticmVha3BvaW50XTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0c1tpbmRleF0gPSBnIHx8IDA7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygncm93JywgY3VzdG9taXplUHJlZml4Q2xzKTtcbiAgdmFyIGd1dHRlcnMgPSBnZXRHdXR0ZXIoKTtcbiAgdmFyIGNsYXNzZXMgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShwcmVmaXhDbHMsIChfY2xhc3NOYW1lcyA9IHt9LCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLW5vLXdyYXBcIiksIHdyYXAgPT09IGZhbHNlKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KGp1c3RpZnkpLCBqdXN0aWZ5KSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KGFsaWduKSwgYWxpZ24pLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXJ0bFwiKSwgZGlyZWN0aW9uID09PSAncnRsJyksIF9jbGFzc05hbWVzKSwgY2xhc3NOYW1lKTtcbiAgdmFyIHJvd1N0eWxlID0gKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIGd1dHRlcnNbMF0gPiAwID8ge1xuICAgIG1hcmdpbkxlZnQ6IGd1dHRlcnNbMF0gLyAtMixcbiAgICBtYXJnaW5SaWdodDogZ3V0dGVyc1swXSAvIC0yXG4gIH0gOiB7fSksIGd1dHRlcnNbMV0gPiAwID8ge1xuICAgIG1hcmdpblRvcDogZ3V0dGVyc1sxXSAvIC0yLFxuICAgIG1hcmdpbkJvdHRvbTogZ3V0dGVyc1sxXSAvIDJcbiAgfSA6IHt9KSwgc3R5bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX1Jvd0NvbnRleHRbXCJkZWZhdWx0XCJdLlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IHtcbiAgICAgIGd1dHRlcjogZ3V0dGVycyxcbiAgICAgIHdyYXA6IHdyYXBcbiAgICB9XG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgb3RoZXJzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgIHN0eWxlOiByb3dTdHlsZSxcbiAgICByZWY6IHJlZlxuICB9KSwgY2hpbGRyZW4pKTtcbn0pO1xuUm93LmRpc3BsYXlOYW1lID0gJ1Jvdyc7XG52YXIgX2RlZmF1bHQgPSBSb3c7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZXhwb3J0cy5NZXRhID0gdm9pZCAwO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIikpO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfaW5kZXggPSByZXF1aXJlKFwiLi9pbmRleFwiKTtcblxudmFyIF9ncmlkID0gcmVxdWlyZShcIi4uL2dyaWRcIik7XG5cbnZhciBfY29uZmlnUHJvdmlkZXIgPSByZXF1aXJlKFwiLi4vY29uZmlnLXByb3ZpZGVyXCIpO1xuXG52YXIgX3JlYWN0Tm9kZSA9IHJlcXVpcmUoXCIuLi9fdXRpbC9yZWFjdE5vZGVcIik7XG5cbnZhciBfX3Jlc3QgPSB2b2lkIDAgJiYgKHZvaWQgMCkuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG5cbiAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgfVxuXG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG52YXIgTWV0YSA9IGZ1bmN0aW9uIE1ldGEoX2EpIHtcbiAgdmFyIGN1c3RvbWl6ZVByZWZpeENscyA9IF9hLnByZWZpeENscyxcbiAgICAgIGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZSxcbiAgICAgIGF2YXRhciA9IF9hLmF2YXRhcixcbiAgICAgIHRpdGxlID0gX2EudGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbiA9IF9hLmRlc2NyaXB0aW9uLFxuICAgICAgb3RoZXJzID0gX19yZXN0KF9hLCBbXCJwcmVmaXhDbHNcIiwgXCJjbGFzc05hbWVcIiwgXCJhdmF0YXJcIiwgXCJ0aXRsZVwiLCBcImRlc2NyaXB0aW9uXCJdKTtcblxuICB2YXIgX1JlYWN0JHVzZUNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KF9jb25maWdQcm92aWRlci5Db25maWdDb250ZXh0KSxcbiAgICAgIGdldFByZWZpeENscyA9IF9SZWFjdCR1c2VDb250ZXh0LmdldFByZWZpeENscztcblxuICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdsaXN0JywgY3VzdG9taXplUHJlZml4Q2xzKTtcbiAgdmFyIGNsYXNzU3RyaW5nID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pdGVtLW1ldGFcIiksIGNsYXNzTmFtZSk7XG4gIHZhciBjb250ZW50ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pdGVtLW1ldGEtY29udGVudFwiKVxuICB9LCB0aXRsZSAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImg0XCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaXRlbS1tZXRhLXRpdGxlXCIpXG4gIH0sIHRpdGxlKSwgZGVzY3JpcHRpb24gJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pdGVtLW1ldGEtZGVzY3JpcHRpb25cIilcbiAgfSwgZGVzY3JpcHRpb24pKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgb3RoZXJzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc1N0cmluZ1xuICB9KSwgYXZhdGFyICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaXRlbS1tZXRhLWF2YXRhclwiKVxuICB9LCBhdmF0YXIpLCAodGl0bGUgfHwgZGVzY3JpcHRpb24pICYmIGNvbnRlbnQpO1xufTtcblxuZXhwb3J0cy5NZXRhID0gTWV0YTtcblxudmFyIEl0ZW0gPSBmdW5jdGlvbiBJdGVtKF9hKSB7XG4gIHZhciBjdXN0b21pemVQcmVmaXhDbHMgPSBfYS5wcmVmaXhDbHMsXG4gICAgICBjaGlsZHJlbiA9IF9hLmNoaWxkcmVuLFxuICAgICAgYWN0aW9ucyA9IF9hLmFjdGlvbnMsXG4gICAgICBleHRyYSA9IF9hLmV4dHJhLFxuICAgICAgY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lLFxuICAgICAgY29sU3R5bGUgPSBfYS5jb2xTdHlsZSxcbiAgICAgIG90aGVycyA9IF9fcmVzdChfYSwgW1wicHJlZml4Q2xzXCIsIFwiY2hpbGRyZW5cIiwgXCJhY3Rpb25zXCIsIFwiZXh0cmFcIiwgXCJjbGFzc05hbWVcIiwgXCJjb2xTdHlsZVwiXSk7XG5cbiAgdmFyIF9SZWFjdCR1c2VDb250ZXh0MiA9IFJlYWN0LnVzZUNvbnRleHQoX2luZGV4Lkxpc3RDb250ZXh0KSxcbiAgICAgIGdyaWQgPSBfUmVhY3QkdXNlQ29udGV4dDIuZ3JpZCxcbiAgICAgIGl0ZW1MYXlvdXQgPSBfUmVhY3QkdXNlQ29udGV4dDIuaXRlbUxheW91dDtcblxuICB2YXIgX1JlYWN0JHVzZUNvbnRleHQzID0gUmVhY3QudXNlQ29udGV4dChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29udGV4dCksXG4gICAgICBnZXRQcmVmaXhDbHMgPSBfUmVhY3QkdXNlQ29udGV4dDMuZ2V0UHJlZml4Q2xzO1xuXG4gIHZhciBpc0l0ZW1Db250YWluc1RleHROb2RlQW5kTm90U2luZ3VsYXIgPSBmdW5jdGlvbiBpc0l0ZW1Db250YWluc1RleHROb2RlQW5kTm90U2luZ3VsYXIoKSB7XG4gICAgdmFyIHJlc3VsdDtcbiAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQgJiYgUmVhY3QuQ2hpbGRyZW4uY291bnQoY2hpbGRyZW4pID4gMTtcbiAgfTtcblxuICB2YXIgaXNGbGV4TW9kZSA9IGZ1bmN0aW9uIGlzRmxleE1vZGUoKSB7XG4gICAgaWYgKGl0ZW1MYXlvdXQgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIHJldHVybiAhIWV4dHJhO1xuICAgIH1cblxuICAgIHJldHVybiAhaXNJdGVtQ29udGFpbnNUZXh0Tm9kZUFuZE5vdFNpbmd1bGFyKCk7XG4gIH07XG5cbiAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygnbGlzdCcsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gIHZhciBhY3Rpb25zQ29udGVudCA9IGFjdGlvbnMgJiYgYWN0aW9ucy5sZW5ndGggPiAwICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pdGVtLWFjdGlvblwiKSxcbiAgICBrZXk6IFwiYWN0aW9uc1wiXG4gIH0sIGFjdGlvbnMubWFwKGZ1bmN0aW9uIChhY3Rpb24sIGkpIHtcbiAgICByZXR1cm4gKFxuICAgICAgLyojX19QVVJFX18qL1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWFycmF5LWluZGV4LWtleVxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtcbiAgICAgICAga2V5OiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWl0ZW0tYWN0aW9uLVwiKS5jb25jYXQoaSlcbiAgICAgIH0sIGFjdGlvbiwgaSAhPT0gYWN0aW9ucy5sZW5ndGggLSAxICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZW1cIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaXRlbS1hY3Rpb24tc3BsaXRcIilcbiAgICAgIH0pKVxuICAgICk7XG4gIH0pKTtcbiAgdmFyIEVsZW1lbnQgPSBncmlkID8gJ2RpdicgOiAnbGknO1xuICB2YXIgaXRlbUNoaWxkcmVuID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRWxlbWVudCwgKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBvdGhlcnMsIHtcbiAgICAvLyBgbGlgIGVsZW1lbnQgYG9uQ29weWAgcHJvcCBhcmdzIGlzIG5vdCBzYW1lIGFzIGBkaXZgXG4gICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWl0ZW1cIiksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoe30sIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaXRlbS1uby1mbGV4XCIpLCAhaXNGbGV4TW9kZSgpKSwgY2xhc3NOYW1lKVxuICB9KSwgaXRlbUxheW91dCA9PT0gJ3ZlcnRpY2FsJyAmJiBleHRyYSA/IFsvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWl0ZW0tbWFpblwiKSxcbiAgICBrZXk6IFwiY29udGVudFwiXG4gIH0sIGNoaWxkcmVuLCBhY3Rpb25zQ29udGVudCksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaXRlbS1leHRyYVwiKSxcbiAgICBrZXk6IFwiZXh0cmFcIlxuICB9LCBleHRyYSldIDogW2NoaWxkcmVuLCBhY3Rpb25zQ29udGVudCwgKDAsIF9yZWFjdE5vZGUuY2xvbmVFbGVtZW50KShleHRyYSwge1xuICAgIGtleTogJ2V4dHJhJ1xuICB9KV0pO1xuICByZXR1cm4gZ3JpZCA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9ncmlkLkNvbCwge1xuICAgIGZsZXg6IDEsXG4gICAgc3R5bGU6IGNvbFN0eWxlXG4gIH0sIGl0ZW1DaGlsZHJlbikgOiBpdGVtQ2hpbGRyZW47XG59O1xuXG5JdGVtLk1ldGEgPSBNZXRhO1xudmFyIF9kZWZhdWx0ID0gSXRlbTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBleHBvcnRzLkxpc3RDb25zdW1lciA9IGV4cG9ydHMuTGlzdENvbnRleHQgPSB2b2lkIDA7XG5cbnZhciBfdG9Db25zdW1hYmxlQXJyYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheVwiKSk7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIikpO1xuXG52YXIgX3NsaWNlZFRvQXJyYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5XCIpKTtcblxudmFyIF90eXBlb2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIikpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9zcGluID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc3BpblwiKSk7XG5cbnZhciBfdXNlQnJlYWtwb2ludCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2dyaWQvaG9va3MvdXNlQnJlYWtwb2ludFwiKSk7XG5cbnZhciBfcmVzcG9uc2l2ZU9ic2VydmUgPSByZXF1aXJlKFwiLi4vX3V0aWwvcmVzcG9uc2l2ZU9ic2VydmVcIik7XG5cbnZhciBfY29uZmlnUHJvdmlkZXIgPSByZXF1aXJlKFwiLi4vY29uZmlnLXByb3ZpZGVyXCIpO1xuXG52YXIgX3BhZ2luYXRpb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9wYWdpbmF0aW9uXCIpKTtcblxudmFyIF9ncmlkID0gcmVxdWlyZShcIi4uL2dyaWRcIik7XG5cbnZhciBfSXRlbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSXRlbVwiKSk7XG5cbnZhciBfX3Jlc3QgPSB2b2lkIDAgJiYgKHZvaWQgMCkuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG5cbiAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgfVxuXG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG52YXIgTGlzdENvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dCh7fSk7XG5leHBvcnRzLkxpc3RDb250ZXh0ID0gTGlzdENvbnRleHQ7XG52YXIgTGlzdENvbnN1bWVyID0gTGlzdENvbnRleHQuQ29uc3VtZXI7XG5leHBvcnRzLkxpc3RDb25zdW1lciA9IExpc3RDb25zdW1lcjtcblxuZnVuY3Rpb24gTGlzdChfYSkge1xuICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgdmFyIF9hJHBhZ2luYXRpb24gPSBfYS5wYWdpbmF0aW9uLFxuICAgICAgcGFnaW5hdGlvbiA9IF9hJHBhZ2luYXRpb24gPT09IHZvaWQgMCA/IGZhbHNlIDogX2EkcGFnaW5hdGlvbixcbiAgICAgIGN1c3RvbWl6ZVByZWZpeENscyA9IF9hLnByZWZpeENscyxcbiAgICAgIF9hJGJvcmRlcmVkID0gX2EuYm9yZGVyZWQsXG4gICAgICBib3JkZXJlZCA9IF9hJGJvcmRlcmVkID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hJGJvcmRlcmVkLFxuICAgICAgX2Ekc3BsaXQgPSBfYS5zcGxpdCxcbiAgICAgIHNwbGl0ID0gX2Ekc3BsaXQgPT09IHZvaWQgMCA/IHRydWUgOiBfYSRzcGxpdCxcbiAgICAgIGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZSxcbiAgICAgIGNoaWxkcmVuID0gX2EuY2hpbGRyZW4sXG4gICAgICBpdGVtTGF5b3V0ID0gX2EuaXRlbUxheW91dCxcbiAgICAgIGxvYWRNb3JlID0gX2EubG9hZE1vcmUsXG4gICAgICBncmlkID0gX2EuZ3JpZCxcbiAgICAgIF9hJGRhdGFTb3VyY2UgPSBfYS5kYXRhU291cmNlLFxuICAgICAgZGF0YVNvdXJjZSA9IF9hJGRhdGFTb3VyY2UgPT09IHZvaWQgMCA/IFtdIDogX2EkZGF0YVNvdXJjZSxcbiAgICAgIHNpemUgPSBfYS5zaXplLFxuICAgICAgaGVhZGVyID0gX2EuaGVhZGVyLFxuICAgICAgZm9vdGVyID0gX2EuZm9vdGVyLFxuICAgICAgX2EkbG9hZGluZyA9IF9hLmxvYWRpbmcsXG4gICAgICBsb2FkaW5nID0gX2EkbG9hZGluZyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSRsb2FkaW5nLFxuICAgICAgcm93S2V5ID0gX2Eucm93S2V5LFxuICAgICAgcmVuZGVySXRlbSA9IF9hLnJlbmRlckl0ZW0sXG4gICAgICBsb2NhbGUgPSBfYS5sb2NhbGUsXG4gICAgICByZXN0ID0gX19yZXN0KF9hLCBbXCJwYWdpbmF0aW9uXCIsIFwicHJlZml4Q2xzXCIsIFwiYm9yZGVyZWRcIiwgXCJzcGxpdFwiLCBcImNsYXNzTmFtZVwiLCBcImNoaWxkcmVuXCIsIFwiaXRlbUxheW91dFwiLCBcImxvYWRNb3JlXCIsIFwiZ3JpZFwiLCBcImRhdGFTb3VyY2VcIiwgXCJzaXplXCIsIFwiaGVhZGVyXCIsIFwiZm9vdGVyXCIsIFwibG9hZGluZ1wiLCBcInJvd0tleVwiLCBcInJlbmRlckl0ZW1cIiwgXCJsb2NhbGVcIl0pO1xuXG4gIHZhciBwYWdpbmF0aW9uT2JqID0gcGFnaW5hdGlvbiAmJiAoMCwgX3R5cGVvZjJbXCJkZWZhdWx0XCJdKShwYWdpbmF0aW9uKSA9PT0gJ29iamVjdCcgPyBwYWdpbmF0aW9uIDoge307XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKHBhZ2luYXRpb25PYmouZGVmYXVsdEN1cnJlbnQgfHwgMSksXG4gICAgICBfUmVhY3QkdXNlU3RhdGUyID0gKDAsIF9zbGljZWRUb0FycmF5MltcImRlZmF1bHRcIl0pKF9SZWFjdCR1c2VTdGF0ZSwgMiksXG4gICAgICBwYWdpbmF0aW9uQ3VycmVudCA9IF9SZWFjdCR1c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRQYWdpbmF0aW9uQ3VycmVudCA9IF9SZWFjdCR1c2VTdGF0ZTJbMV07XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZTMgPSBSZWFjdC51c2VTdGF0ZShwYWdpbmF0aW9uT2JqLmRlZmF1bHRQYWdlU2l6ZSB8fCAxMCksXG4gICAgICBfUmVhY3QkdXNlU3RhdGU0ID0gKDAsIF9zbGljZWRUb0FycmF5MltcImRlZmF1bHRcIl0pKF9SZWFjdCR1c2VTdGF0ZTMsIDIpLFxuICAgICAgcGFnaW5hdGlvblNpemUgPSBfUmVhY3QkdXNlU3RhdGU0WzBdLFxuICAgICAgc2V0UGFnaW5hdGlvblNpemUgPSBfUmVhY3QkdXNlU3RhdGU0WzFdO1xuXG4gIHZhciBfUmVhY3QkdXNlQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnRleHQpLFxuICAgICAgZ2V0UHJlZml4Q2xzID0gX1JlYWN0JHVzZUNvbnRleHQuZ2V0UHJlZml4Q2xzLFxuICAgICAgcmVuZGVyRW1wdHkgPSBfUmVhY3QkdXNlQ29udGV4dC5yZW5kZXJFbXB0eSxcbiAgICAgIGRpcmVjdGlvbiA9IF9SZWFjdCR1c2VDb250ZXh0LmRpcmVjdGlvbjtcblxuICB2YXIgZGVmYXVsdFBhZ2luYXRpb25Qcm9wcyA9IHtcbiAgICBjdXJyZW50OiAxLFxuICAgIHRvdGFsOiAwXG4gIH07XG4gIHZhciBrZXlzID0ge307XG5cbiAgdmFyIHRyaWdnZXJQYWdpbmF0aW9uRXZlbnQgPSBmdW5jdGlvbiB0cmlnZ2VyUGFnaW5hdGlvbkV2ZW50KGV2ZW50TmFtZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAocGFnZSwgcGFnZVNpemUpIHtcbiAgICAgIHNldFBhZ2luYXRpb25DdXJyZW50KHBhZ2UpO1xuICAgICAgc2V0UGFnaW5hdGlvblNpemUocGFnZVNpemUpO1xuXG4gICAgICBpZiAocGFnaW5hdGlvbiAmJiBwYWdpbmF0aW9uW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgcGFnaW5hdGlvbltldmVudE5hbWVdKHBhZ2UsIHBhZ2VTaXplKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIHZhciBvblBhZ2luYXRpb25DaGFuZ2UgPSB0cmlnZ2VyUGFnaW5hdGlvbkV2ZW50KCdvbkNoYW5nZScpO1xuICB2YXIgb25QYWdpbmF0aW9uU2hvd1NpemVDaGFuZ2UgPSB0cmlnZ2VyUGFnaW5hdGlvbkV2ZW50KCdvblNob3dTaXplQ2hhbmdlJyk7XG5cbiAgdmFyIHJlbmRlcklubmVySXRlbSA9IGZ1bmN0aW9uIHJlbmRlcklubmVySXRlbShpdGVtLCBpbmRleCkge1xuICAgIGlmICghcmVuZGVySXRlbSkgcmV0dXJuIG51bGw7XG4gICAgdmFyIGtleTtcblxuICAgIGlmICh0eXBlb2Ygcm93S2V5ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBrZXkgPSByb3dLZXkoaXRlbSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygcm93S2V5ID09PSAnc3RyaW5nJykge1xuICAgICAga2V5ID0gaXRlbVtyb3dLZXldO1xuICAgIH0gZWxzZSB7XG4gICAgICBrZXkgPSBpdGVtLmtleTtcbiAgICB9XG5cbiAgICBpZiAoIWtleSkge1xuICAgICAga2V5ID0gXCJsaXN0LWl0ZW0tXCIuY29uY2F0KGluZGV4KTtcbiAgICB9XG5cbiAgICBrZXlzW2luZGV4XSA9IGtleTtcbiAgICByZXR1cm4gcmVuZGVySXRlbShpdGVtLCBpbmRleCk7XG4gIH07XG5cbiAgdmFyIGlzU29tZXRoaW5nQWZ0ZXJMYXN0SXRlbSA9IGZ1bmN0aW9uIGlzU29tZXRoaW5nQWZ0ZXJMYXN0SXRlbSgpIHtcbiAgICByZXR1cm4gISEobG9hZE1vcmUgfHwgcGFnaW5hdGlvbiB8fCBmb290ZXIpO1xuICB9O1xuXG4gIHZhciByZW5kZXJFbXB0eUZ1bmMgPSBmdW5jdGlvbiByZW5kZXJFbXB0eUZ1bmMocHJlZml4Q2xzLCByZW5kZXJFbXB0eUhhbmRsZXIpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWVtcHR5LXRleHRcIilcbiAgICB9LCBsb2NhbGUgJiYgbG9jYWxlLmVtcHR5VGV4dCB8fCByZW5kZXJFbXB0eUhhbmRsZXIoJ0xpc3QnKSk7XG4gIH07XG5cbiAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygnbGlzdCcsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gIHZhciBsb2FkaW5nUHJvcCA9IGxvYWRpbmc7XG5cbiAgaWYgKHR5cGVvZiBsb2FkaW5nUHJvcCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgbG9hZGluZ1Byb3AgPSB7XG4gICAgICBzcGlubmluZzogbG9hZGluZ1Byb3BcbiAgICB9O1xuICB9XG5cbiAgdmFyIGlzTG9hZGluZyA9IGxvYWRpbmdQcm9wICYmIGxvYWRpbmdQcm9wLnNwaW5uaW5nOyAvLyBsYXJnZSA9PiBsZ1xuICAvLyBzbWFsbCA9PiBzbVxuXG4gIHZhciBzaXplQ2xzID0gJyc7XG5cbiAgc3dpdGNoIChzaXplKSB7XG4gICAgY2FzZSAnbGFyZ2UnOlxuICAgICAgc2l6ZUNscyA9ICdsZyc7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3NtYWxsJzpcbiAgICAgIHNpemVDbHMgPSAnc20nO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cblxuICB2YXIgY2xhc3NTdHJpbmcgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShwcmVmaXhDbHMsIChfY2xhc3NOYW1lcyA9IHt9LCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXZlcnRpY2FsXCIpLCBpdGVtTGF5b3V0ID09PSAndmVydGljYWwnKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KHNpemVDbHMpLCBzaXplQ2xzKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1zcGxpdFwiKSwgc3BsaXQpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWJvcmRlcmVkXCIpLCBib3JkZXJlZCksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbG9hZGluZ1wiKSwgaXNMb2FkaW5nKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ncmlkXCIpLCBncmlkKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1zb21ldGhpbmctYWZ0ZXItbGFzdC1pdGVtXCIpLCBpc1NvbWV0aGluZ0FmdGVyTGFzdEl0ZW0oKSksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcnRsXCIpLCBkaXJlY3Rpb24gPT09ICdydGwnKSwgX2NsYXNzTmFtZXMpLCBjbGFzc05hbWUpO1xuICB2YXIgcGFnaW5hdGlvblByb3BzID0gKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIGRlZmF1bHRQYWdpbmF0aW9uUHJvcHMpLCB7XG4gICAgdG90YWw6IGRhdGFTb3VyY2UubGVuZ3RoLFxuICAgIGN1cnJlbnQ6IHBhZ2luYXRpb25DdXJyZW50LFxuICAgIHBhZ2VTaXplOiBwYWdpbmF0aW9uU2l6ZVxuICB9KSwgcGFnaW5hdGlvbiB8fCB7fSk7XG4gIHZhciBsYXJnZXN0UGFnZSA9IE1hdGguY2VpbChwYWdpbmF0aW9uUHJvcHMudG90YWwgLyBwYWdpbmF0aW9uUHJvcHMucGFnZVNpemUpO1xuXG4gIGlmIChwYWdpbmF0aW9uUHJvcHMuY3VycmVudCA+IGxhcmdlc3RQYWdlKSB7XG4gICAgcGFnaW5hdGlvblByb3BzLmN1cnJlbnQgPSBsYXJnZXN0UGFnZTtcbiAgfVxuXG4gIHZhciBwYWdpbmF0aW9uQ29udGVudCA9IHBhZ2luYXRpb24gPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXBhZ2luYXRpb25cIilcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX3BhZ2luYXRpb25bXCJkZWZhdWx0XCJdLCAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIHBhZ2luYXRpb25Qcm9wcywge1xuICAgIG9uQ2hhbmdlOiBvblBhZ2luYXRpb25DaGFuZ2UsXG4gICAgb25TaG93U2l6ZUNoYW5nZTogb25QYWdpbmF0aW9uU2hvd1NpemVDaGFuZ2VcbiAgfSkpKSA6IG51bGw7XG4gIHZhciBzcGxpdERhdGFTb3VyY2UgPSAoMCwgX3RvQ29uc3VtYWJsZUFycmF5MltcImRlZmF1bHRcIl0pKGRhdGFTb3VyY2UpO1xuXG4gIGlmIChwYWdpbmF0aW9uKSB7XG4gICAgaWYgKGRhdGFTb3VyY2UubGVuZ3RoID4gKHBhZ2luYXRpb25Qcm9wcy5jdXJyZW50IC0gMSkgKiBwYWdpbmF0aW9uUHJvcHMucGFnZVNpemUpIHtcbiAgICAgIHNwbGl0RGF0YVNvdXJjZSA9ICgwLCBfdG9Db25zdW1hYmxlQXJyYXkyW1wiZGVmYXVsdFwiXSkoZGF0YVNvdXJjZSkuc3BsaWNlKChwYWdpbmF0aW9uUHJvcHMuY3VycmVudCAtIDEpICogcGFnaW5hdGlvblByb3BzLnBhZ2VTaXplLCBwYWdpbmF0aW9uUHJvcHMucGFnZVNpemUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBzY3JlZW5zID0gKDAsIF91c2VCcmVha3BvaW50W1wiZGVmYXVsdFwiXSkoKTtcbiAgdmFyIGN1cnJlbnRCcmVha3BvaW50ID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfcmVzcG9uc2l2ZU9ic2VydmUucmVzcG9uc2l2ZUFycmF5Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICB2YXIgYnJlYWtwb2ludCA9IF9yZXNwb25zaXZlT2JzZXJ2ZS5yZXNwb25zaXZlQXJyYXlbaV07XG5cbiAgICAgIGlmIChzY3JlZW5zW2JyZWFrcG9pbnRdKSB7XG4gICAgICAgIHJldHVybiBicmVha3BvaW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH0sIFtzY3JlZW5zXSk7XG4gIHZhciBjb2xTdHlsZSA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIGlmICghZ3JpZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICB2YXIgY29sdW1uQ291bnQgPSBjdXJyZW50QnJlYWtwb2ludCAmJiBncmlkW2N1cnJlbnRCcmVha3BvaW50XSA/IGdyaWRbY3VycmVudEJyZWFrcG9pbnRdIDogZ3JpZC5jb2x1bW47XG5cbiAgICBpZiAoY29sdW1uQ291bnQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoOiBcIlwiLmNvbmNhdCgxMDAgLyBjb2x1bW5Db3VudCwgXCIlXCIpLFxuICAgICAgICBtYXhXaWR0aDogXCJcIi5jb25jYXQoMTAwIC8gY29sdW1uQ291bnQsIFwiJVwiKVxuICAgICAgfTtcbiAgICB9XG4gIH0sIFtncmlkID09PSBudWxsIHx8IGdyaWQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGdyaWQuY29sdW1uLCBjdXJyZW50QnJlYWtwb2ludF0pO1xuICB2YXIgY2hpbGRyZW5Db250ZW50ID0gaXNMb2FkaW5nICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBzdHlsZToge1xuICAgICAgbWluSGVpZ2h0OiA1M1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHNwbGl0RGF0YVNvdXJjZS5sZW5ndGggPiAwKSB7XG4gICAgdmFyIGl0ZW1zID0gc3BsaXREYXRhU291cmNlLm1hcChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgIHJldHVybiByZW5kZXJJbm5lckl0ZW0oaXRlbSwgaW5kZXgpO1xuICAgIH0pO1xuICAgIHZhciBjaGlsZHJlbkxpc3QgPSBSZWFjdC5DaGlsZHJlbi5tYXAoaXRlbXMsIGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGtleToga2V5c1tpbmRleF0sXG4gICAgICAgIHN0eWxlOiBjb2xTdHlsZVxuICAgICAgfSwgY2hpbGQpO1xuICAgIH0pO1xuICAgIGNoaWxkcmVuQ29udGVudCA9IGdyaWQgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfZ3JpZC5Sb3csIHtcbiAgICAgIGd1dHRlcjogZ3JpZC5ndXR0ZXJcbiAgICB9LCBjaGlsZHJlbkxpc3QpIDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaXRlbXNcIilcbiAgICB9LCBpdGVtcyk7XG4gIH0gZWxzZSBpZiAoIWNoaWxkcmVuICYmICFpc0xvYWRpbmcpIHtcbiAgICBjaGlsZHJlbkNvbnRlbnQgPSByZW5kZXJFbXB0eUZ1bmMocHJlZml4Q2xzLCByZW5kZXJFbXB0eSk7XG4gIH1cblxuICB2YXIgcGFnaW5hdGlvblBvc2l0aW9uID0gcGFnaW5hdGlvblByb3BzLnBvc2l0aW9uIHx8ICdib3R0b20nO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZToge1xuICAgICAgZ3JpZDogZ3JpZCxcbiAgICAgIGl0ZW1MYXlvdXQ6IGl0ZW1MYXlvdXRcbiAgICB9XG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7XG4gICAgY2xhc3NOYW1lOiBjbGFzc1N0cmluZ1xuICB9LCByZXN0KSwgKHBhZ2luYXRpb25Qb3NpdGlvbiA9PT0gJ3RvcCcgfHwgcGFnaW5hdGlvblBvc2l0aW9uID09PSAnYm90aCcpICYmIHBhZ2luYXRpb25Db250ZW50LCBoZWFkZXIgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1oZWFkZXJcIilcbiAgfSwgaGVhZGVyKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX3NwaW5bXCJkZWZhdWx0XCJdLCBsb2FkaW5nUHJvcCwgY2hpbGRyZW5Db250ZW50LCBjaGlsZHJlbiksIGZvb3RlciAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWZvb3RlclwiKVxuICB9LCBmb290ZXIpLCBsb2FkTW9yZSB8fCAocGFnaW5hdGlvblBvc2l0aW9uID09PSAnYm90dG9tJyB8fCBwYWdpbmF0aW9uUG9zaXRpb24gPT09ICdib3RoJykgJiYgcGFnaW5hdGlvbkNvbnRlbnQpKTtcbn1cblxuTGlzdC5JdGVtID0gX0l0ZW1bXCJkZWZhdWx0XCJdO1xudmFyIF9kZWZhdWx0ID0gTGlzdDtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy51c2VMb2NhbGVSZWNlaXZlciA9IHVzZUxvY2FsZVJlY2VpdmVyO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIikpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3NcIikpO1xuXG52YXIgX2luaGVyaXRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIikpO1xuXG52YXIgX2NyZWF0ZVN1cGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlU3VwZXJcIikpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2RlZmF1bHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2RlZmF1bHRcIikpO1xuXG52YXIgX2NvbnRleHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2NvbnRleHRcIikpO1xuXG52YXIgTG9jYWxlUmVjZWl2ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czJbXCJkZWZhdWx0XCJdKShMb2NhbGVSZWNlaXZlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9ICgwLCBfY3JlYXRlU3VwZXIyW1wiZGVmYXVsdFwiXSkoTG9jYWxlUmVjZWl2ZXIpO1xuXG4gIGZ1bmN0aW9uIExvY2FsZVJlY2VpdmVyKCkge1xuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2syW1wiZGVmYXVsdFwiXSkodGhpcywgTG9jYWxlUmVjZWl2ZXIpO1xuICAgIHJldHVybiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MyW1wiZGVmYXVsdFwiXSkoTG9jYWxlUmVjZWl2ZXIsIFt7XG4gICAga2V5OiBcImdldExvY2FsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRMb2NhbGUoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNvbXBvbmVudE5hbWUgPSBfdGhpcyRwcm9wcy5jb21wb25lbnROYW1lLFxuICAgICAgICAgIGRlZmF1bHRMb2NhbGUgPSBfdGhpcyRwcm9wcy5kZWZhdWx0TG9jYWxlO1xuICAgICAgdmFyIGxvY2FsZSA9IGRlZmF1bHRMb2NhbGUgfHwgX2RlZmF1bHRbXCJkZWZhdWx0XCJdW2NvbXBvbmVudE5hbWUgfHwgJ2dsb2JhbCddO1xuICAgICAgdmFyIGFudExvY2FsZSA9IHRoaXMuY29udGV4dDtcbiAgICAgIHZhciBsb2NhbGVGcm9tQ29udGV4dCA9IGNvbXBvbmVudE5hbWUgJiYgYW50TG9jYWxlID8gYW50TG9jYWxlW2NvbXBvbmVudE5hbWVdIDoge307XG4gICAgICByZXR1cm4gKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgdHlwZW9mIGxvY2FsZSA9PT0gJ2Z1bmN0aW9uJyA/IGxvY2FsZSgpIDogbG9jYWxlKSwgbG9jYWxlRnJvbUNvbnRleHQgfHwge30pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRMb2NhbGVDb2RlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldExvY2FsZUNvZGUoKSB7XG4gICAgICB2YXIgYW50TG9jYWxlID0gdGhpcy5jb250ZXh0O1xuICAgICAgdmFyIGxvY2FsZUNvZGUgPSBhbnRMb2NhbGUgJiYgYW50TG9jYWxlLmxvY2FsZTsgLy8gSGFkIHVzZSBMb2NhbGVQcm92aWRlIGJ1dCBkaWRuJ3Qgc2V0IGxvY2FsZVxuXG4gICAgICBpZiAoYW50TG9jYWxlICYmIGFudExvY2FsZS5leGlzdCAmJiAhbG9jYWxlQ29kZSkge1xuICAgICAgICByZXR1cm4gX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmxvY2FsZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxvY2FsZUNvZGU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbih0aGlzLmdldExvY2FsZSgpLCB0aGlzLmdldExvY2FsZUNvZGUoKSwgdGhpcy5jb250ZXh0KTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIExvY2FsZVJlY2VpdmVyO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IExvY2FsZVJlY2VpdmVyO1xuTG9jYWxlUmVjZWl2ZXIuZGVmYXVsdFByb3BzID0ge1xuICBjb21wb25lbnROYW1lOiAnZ2xvYmFsJ1xufTtcbkxvY2FsZVJlY2VpdmVyLmNvbnRleHRUeXBlID0gX2NvbnRleHRbXCJkZWZhdWx0XCJdO1xuXG5mdW5jdGlvbiB1c2VMb2NhbGVSZWNlaXZlcihjb21wb25lbnROYW1lLCBkZWZhdWx0TG9jYWxlKSB7XG4gIHZhciBhbnRMb2NhbGUgPSBSZWFjdC51c2VDb250ZXh0KF9jb250ZXh0W1wiZGVmYXVsdFwiXSk7XG4gIHZhciBjb21wb25lbnRMb2NhbGUgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbG9jYWxlID0gZGVmYXVsdExvY2FsZSB8fCBfZGVmYXVsdFtcImRlZmF1bHRcIl1bY29tcG9uZW50TmFtZSB8fCAnZ2xvYmFsJ107XG4gICAgdmFyIGxvY2FsZUZyb21Db250ZXh0ID0gY29tcG9uZW50TmFtZSAmJiBhbnRMb2NhbGUgPyBhbnRMb2NhbGVbY29tcG9uZW50TmFtZV0gOiB7fTtcbiAgICByZXR1cm4gKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgdHlwZW9mIGxvY2FsZSA9PT0gJ2Z1bmN0aW9uJyA/IGxvY2FsZSgpIDogbG9jYWxlKSwgbG9jYWxlRnJvbUNvbnRleHQgfHwge30pO1xuICB9LCBbY29tcG9uZW50TmFtZSwgZGVmYXVsdExvY2FsZSwgYW50TG9jYWxlXSk7XG4gIHJldHVybiBbY29tcG9uZW50TG9jYWxlXTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG52YXIgTG9jYWxlQ29udGV4dCA9IC8qI19fUFVSRV9fKi8oMCwgX3JlYWN0LmNyZWF0ZUNvbnRleHQpKHVuZGVmaW5lZCk7XG52YXIgX2RlZmF1bHQgPSBMb2NhbGVDb250ZXh0O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9kZWZhdWx0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2xvY2FsZS9kZWZhdWx0XCIpKTtcblxudmFyIF9kZWZhdWx0ID0gX2RlZmF1bHQyW1wiZGVmYXVsdFwiXTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBleHBvcnRzLkFOVF9NQVJLID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCIpKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIpKTtcblxudmFyIF9pbmhlcml0czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzXCIpKTtcblxudmFyIF9jcmVhdGVTdXBlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZVN1cGVyXCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9kZXZXYXJuaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vX3V0aWwvZGV2V2FybmluZ1wiKSk7XG5cbnZhciBfbG9jYWxlID0gcmVxdWlyZShcIi4uL21vZGFsL2xvY2FsZVwiKTtcblxudmFyIF9jb250ZXh0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9jb250ZXh0XCIpKTtcblxudmFyIEFOVF9NQVJLID0gJ2ludGVybmFsTWFyayc7XG5leHBvcnRzLkFOVF9NQVJLID0gQU5UX01BUks7XG5cbnZhciBMb2NhbGVQcm92aWRlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMltcImRlZmF1bHRcIl0pKExvY2FsZVByb3ZpZGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gKDAsIF9jcmVhdGVTdXBlcjJbXCJkZWZhdWx0XCJdKShMb2NhbGVQcm92aWRlcik7XG5cbiAgZnVuY3Rpb24gTG9jYWxlUHJvdmlkZXIocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMltcImRlZmF1bHRcIl0pKHRoaXMsIExvY2FsZVByb3ZpZGVyKTtcbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKTtcbiAgICAoMCwgX2xvY2FsZS5jaGFuZ2VDb25maXJtTG9jYWxlKShwcm9wcy5sb2NhbGUgJiYgcHJvcHMubG9jYWxlLk1vZGFsKTtcbiAgICAoMCwgX2Rldldhcm5pbmdbXCJkZWZhdWx0XCJdKShwcm9wcy5fQU5UX01BUktfXyA9PT0gQU5UX01BUkssICdMb2NhbGVQcm92aWRlcicsICdgTG9jYWxlUHJvdmlkZXJgIGlzIGRlcHJlY2F0ZWQuIFBsZWFzZSB1c2UgYGxvY2FsZWAgd2l0aCBgQ29uZmlnUHJvdmlkZXJgIGluc3RlYWQ6IGh0dHA6Ly91LmFudC5kZXNpZ24vbG9jYWxlJyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczJbXCJkZWZhdWx0XCJdKShMb2NhbGVQcm92aWRlciwgW3tcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgIHZhciBsb2NhbGUgPSB0aGlzLnByb3BzLmxvY2FsZTtcblxuICAgICAgaWYgKHByZXZQcm9wcy5sb2NhbGUgIT09IGxvY2FsZSkge1xuICAgICAgICAoMCwgX2xvY2FsZS5jaGFuZ2VDb25maXJtTG9jYWxlKShsb2NhbGUgJiYgbG9jYWxlLk1vZGFsKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAoMCwgX2xvY2FsZS5jaGFuZ2VDb25maXJtTG9jYWxlKSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBsb2NhbGUgPSBfdGhpcyRwcm9wcy5sb2NhbGUsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wcy5jaGlsZHJlbjtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfY29udGV4dFtcImRlZmF1bHRcIl0uUHJvdmlkZXIsIHtcbiAgICAgICAgdmFsdWU6ICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIGxvY2FsZSksIHtcbiAgICAgICAgICBleGlzdDogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgfSwgY2hpbGRyZW4pO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gTG9jYWxlUHJvdmlkZXI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gTG9jYWxlUHJvdmlkZXI7XG5Mb2NhbGVQcm92aWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGxvY2FsZToge31cbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfZW5fVVMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyYy1wYWdpbmF0aW9uL2xpYi9sb2NhbGUvZW5fVVNcIikpO1xuXG52YXIgX2VuX1VTMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2RhdGUtcGlja2VyL2xvY2FsZS9lbl9VU1wiKSk7XG5cbnZhciBfZW5fVVMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vdGltZS1waWNrZXIvbG9jYWxlL2VuX1VTXCIpKTtcblxudmFyIF9lbl9VUzQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9jYWxlbmRhci9sb2NhbGUvZW5fVVNcIikpO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby10ZW1wbGF0ZS1jdXJseS1pbi1zdHJpbmcgKi9cbnZhciB0eXBlVGVtcGxhdGUgPSAnJHtsYWJlbH0gaXMgbm90IGEgdmFsaWQgJHt0eXBlfSc7XG52YXIgbG9jYWxlVmFsdWVzID0ge1xuICBsb2NhbGU6ICdlbicsXG4gIFBhZ2luYXRpb246IF9lbl9VU1tcImRlZmF1bHRcIl0sXG4gIERhdGVQaWNrZXI6IF9lbl9VUzJbXCJkZWZhdWx0XCJdLFxuICBUaW1lUGlja2VyOiBfZW5fVVMzW1wiZGVmYXVsdFwiXSxcbiAgQ2FsZW5kYXI6IF9lbl9VUzRbXCJkZWZhdWx0XCJdLFxuICBnbG9iYWw6IHtcbiAgICBwbGFjZWhvbGRlcjogJ1BsZWFzZSBzZWxlY3QnXG4gIH0sXG4gIFRhYmxlOiB7XG4gICAgZmlsdGVyVGl0bGU6ICdGaWx0ZXIgbWVudScsXG4gICAgZmlsdGVyQ29uZmlybTogJ09LJyxcbiAgICBmaWx0ZXJSZXNldDogJ1Jlc2V0JyxcbiAgICBmaWx0ZXJFbXB0eVRleHQ6ICdObyBmaWx0ZXJzJyxcbiAgICBlbXB0eVRleHQ6ICdObyBkYXRhJyxcbiAgICBzZWxlY3RBbGw6ICdTZWxlY3QgY3VycmVudCBwYWdlJyxcbiAgICBzZWxlY3RJbnZlcnQ6ICdJbnZlcnQgY3VycmVudCBwYWdlJyxcbiAgICBzZWxlY3Rpb25BbGw6ICdTZWxlY3QgYWxsIGRhdGEnLFxuICAgIHNvcnRUaXRsZTogJ1NvcnQnLFxuICAgIGV4cGFuZDogJ0V4cGFuZCByb3cnLFxuICAgIGNvbGxhcHNlOiAnQ29sbGFwc2Ugcm93JyxcbiAgICB0cmlnZ2VyRGVzYzogJ0NsaWNrIHRvIHNvcnQgZGVzY2VuZGluZycsXG4gICAgdHJpZ2dlckFzYzogJ0NsaWNrIHRvIHNvcnQgYXNjZW5kaW5nJyxcbiAgICBjYW5jZWxTb3J0OiAnQ2xpY2sgdG8gY2FuY2VsIHNvcnRpbmcnXG4gIH0sXG4gIE1vZGFsOiB7XG4gICAgb2tUZXh0OiAnT0snLFxuICAgIGNhbmNlbFRleHQ6ICdDYW5jZWwnLFxuICAgIGp1c3RPa1RleHQ6ICdPSydcbiAgfSxcbiAgUG9wY29uZmlybToge1xuICAgIG9rVGV4dDogJ09LJyxcbiAgICBjYW5jZWxUZXh0OiAnQ2FuY2VsJ1xuICB9LFxuICBUcmFuc2Zlcjoge1xuICAgIHRpdGxlczogWycnLCAnJ10sXG4gICAgc2VhcmNoUGxhY2Vob2xkZXI6ICdTZWFyY2ggaGVyZScsXG4gICAgaXRlbVVuaXQ6ICdpdGVtJyxcbiAgICBpdGVtc1VuaXQ6ICdpdGVtcycsXG4gICAgcmVtb3ZlOiAnUmVtb3ZlJyxcbiAgICBzZWxlY3RDdXJyZW50OiAnU2VsZWN0IGN1cnJlbnQgcGFnZScsXG4gICAgcmVtb3ZlQ3VycmVudDogJ1JlbW92ZSBjdXJyZW50IHBhZ2UnLFxuICAgIHNlbGVjdEFsbDogJ1NlbGVjdCBhbGwgZGF0YScsXG4gICAgcmVtb3ZlQWxsOiAnUmVtb3ZlIGFsbCBkYXRhJyxcbiAgICBzZWxlY3RJbnZlcnQ6ICdJbnZlcnQgY3VycmVudCBwYWdlJ1xuICB9LFxuICBVcGxvYWQ6IHtcbiAgICB1cGxvYWRpbmc6ICdVcGxvYWRpbmcuLi4nLFxuICAgIHJlbW92ZUZpbGU6ICdSZW1vdmUgZmlsZScsXG4gICAgdXBsb2FkRXJyb3I6ICdVcGxvYWQgZXJyb3InLFxuICAgIHByZXZpZXdGaWxlOiAnUHJldmlldyBmaWxlJyxcbiAgICBkb3dubG9hZEZpbGU6ICdEb3dubG9hZCBmaWxlJ1xuICB9LFxuICBFbXB0eToge1xuICAgIGRlc2NyaXB0aW9uOiAnTm8gRGF0YSdcbiAgfSxcbiAgSWNvbjoge1xuICAgIGljb246ICdpY29uJ1xuICB9LFxuICBUZXh0OiB7XG4gICAgZWRpdDogJ0VkaXQnLFxuICAgIGNvcHk6ICdDb3B5JyxcbiAgICBjb3BpZWQ6ICdDb3BpZWQnLFxuICAgIGV4cGFuZDogJ0V4cGFuZCdcbiAgfSxcbiAgUGFnZUhlYWRlcjoge1xuICAgIGJhY2s6ICdCYWNrJ1xuICB9LFxuICBGb3JtOiB7XG4gICAgb3B0aW9uYWw6ICcob3B0aW9uYWwpJyxcbiAgICBkZWZhdWx0VmFsaWRhdGVNZXNzYWdlczoge1xuICAgICAgXCJkZWZhdWx0XCI6ICdGaWVsZCB2YWxpZGF0aW9uIGVycm9yIGZvciAke2xhYmVsfScsXG4gICAgICByZXF1aXJlZDogJ1BsZWFzZSBlbnRlciAke2xhYmVsfScsXG4gICAgICBcImVudW1cIjogJyR7bGFiZWx9IG11c3QgYmUgb25lIG9mIFske2VudW19XScsXG4gICAgICB3aGl0ZXNwYWNlOiAnJHtsYWJlbH0gY2Fubm90IGJlIGEgYmxhbmsgY2hhcmFjdGVyJyxcbiAgICAgIGRhdGU6IHtcbiAgICAgICAgZm9ybWF0OiAnJHtsYWJlbH0gZGF0ZSBmb3JtYXQgaXMgaW52YWxpZCcsXG4gICAgICAgIHBhcnNlOiAnJHtsYWJlbH0gY2Fubm90IGJlIGNvbnZlcnRlZCB0byBhIGRhdGUnLFxuICAgICAgICBpbnZhbGlkOiAnJHtsYWJlbH0gaXMgYW4gaW52YWxpZCBkYXRlJ1xuICAgICAgfSxcbiAgICAgIHR5cGVzOiB7XG4gICAgICAgIHN0cmluZzogdHlwZVRlbXBsYXRlLFxuICAgICAgICBtZXRob2Q6IHR5cGVUZW1wbGF0ZSxcbiAgICAgICAgYXJyYXk6IHR5cGVUZW1wbGF0ZSxcbiAgICAgICAgb2JqZWN0OiB0eXBlVGVtcGxhdGUsXG4gICAgICAgIG51bWJlcjogdHlwZVRlbXBsYXRlLFxuICAgICAgICBkYXRlOiB0eXBlVGVtcGxhdGUsXG4gICAgICAgIFwiYm9vbGVhblwiOiB0eXBlVGVtcGxhdGUsXG4gICAgICAgIGludGVnZXI6IHR5cGVUZW1wbGF0ZSxcbiAgICAgICAgXCJmbG9hdFwiOiB0eXBlVGVtcGxhdGUsXG4gICAgICAgIHJlZ2V4cDogdHlwZVRlbXBsYXRlLFxuICAgICAgICBlbWFpbDogdHlwZVRlbXBsYXRlLFxuICAgICAgICB1cmw6IHR5cGVUZW1wbGF0ZSxcbiAgICAgICAgaGV4OiB0eXBlVGVtcGxhdGVcbiAgICAgIH0sXG4gICAgICBzdHJpbmc6IHtcbiAgICAgICAgbGVuOiAnJHtsYWJlbH0gbXVzdCBiZSAke2xlbn0gY2hhcmFjdGVycycsXG4gICAgICAgIG1pbjogJyR7bGFiZWx9IG11c3QgYmUgYXQgbGVhc3QgJHttaW59IGNoYXJhY3RlcnMnLFxuICAgICAgICBtYXg6ICcke2xhYmVsfSBtdXN0IGJlIHVwIHRvICR7bWF4fSBjaGFyYWN0ZXJzJyxcbiAgICAgICAgcmFuZ2U6ICcke2xhYmVsfSBtdXN0IGJlIGJldHdlZW4gJHttaW59LSR7bWF4fSBjaGFyYWN0ZXJzJ1xuICAgICAgfSxcbiAgICAgIG51bWJlcjoge1xuICAgICAgICBsZW46ICcke2xhYmVsfSBtdXN0IGJlIGVxdWFsIHRvICR7bGVufScsXG4gICAgICAgIG1pbjogJyR7bGFiZWx9IG11c3QgYmUgbWluaW11bSAke21pbn0nLFxuICAgICAgICBtYXg6ICcke2xhYmVsfSBtdXN0IGJlIG1heGltdW0gJHttYXh9JyxcbiAgICAgICAgcmFuZ2U6ICcke2xhYmVsfSBtdXN0IGJlIGJldHdlZW4gJHttaW59LSR7bWF4fSdcbiAgICAgIH0sXG4gICAgICBhcnJheToge1xuICAgICAgICBsZW46ICdNdXN0IGJlICR7bGVufSAke2xhYmVsfScsXG4gICAgICAgIG1pbjogJ0F0IGxlYXN0ICR7bWlufSAke2xhYmVsfScsXG4gICAgICAgIG1heDogJ0F0IG1vc3QgJHttYXh9ICR7bGFiZWx9JyxcbiAgICAgICAgcmFuZ2U6ICdUaGUgYW1vdW50IG9mICR7bGFiZWx9IG11c3QgYmUgYmV0d2VlbiAke21pbn0tJHttYXh9J1xuICAgICAgfSxcbiAgICAgIHBhdHRlcm46IHtcbiAgICAgICAgbWlzbWF0Y2g6ICcke2xhYmVsfSBkb2VzIG5vdCBtYXRjaCB0aGUgcGF0dGVybiAke3BhdHRlcm59J1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbnZhciBfZGVmYXVsdCA9IGxvY2FsZVZhbHVlcztcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBjcmVhdGVVc2VNZXNzYWdlO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9zbGljZWRUb0FycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfdXNlTm90aWZpY2F0aW9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmMtbm90aWZpY2F0aW9uL2xpYi91c2VOb3RpZmljYXRpb25cIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uLy4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIF8gPSByZXF1aXJlKFwiLi5cIik7XG5cbmZ1bmN0aW9uIGNyZWF0ZVVzZU1lc3NhZ2UoZ2V0UmNOb3RpZmljYXRpb25JbnN0YW5jZSwgZ2V0UkNOb3RpY2VQcm9wcykge1xuICB2YXIgdXNlTWVzc2FnZSA9IGZ1bmN0aW9uIHVzZU1lc3NhZ2UoKSB7XG4gICAgLy8gV2UgY2FuIG9ubHkgZ2V0IGNvbnRlbnQgYnkgcmVuZGVyXG4gICAgdmFyIGdldFByZWZpeENsczsgLy8gV2UgY3JlYXRlIGEgcHJveHkgdG8gaGFuZGxlIGRlbGF5IGNyZWF0ZWQgaW5zdGFuY2VcblxuICAgIHZhciBpbm5lckluc3RhbmNlID0gbnVsbDtcbiAgICB2YXIgcHJveHkgPSB7XG4gICAgICBhZGQ6IGZ1bmN0aW9uIGFkZChub3RpY2VQcm9wcywgaG9sZGVyQ2FsbGJhY2spIHtcbiAgICAgICAgaW5uZXJJbnN0YW5jZSA9PT0gbnVsbCB8fCBpbm5lckluc3RhbmNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpbm5lckluc3RhbmNlLmNvbXBvbmVudC5hZGQobm90aWNlUHJvcHMsIGhvbGRlckNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIF91c2VSQ05vdGlmaWNhdGlvbiA9ICgwLCBfdXNlTm90aWZpY2F0aW9uW1wiZGVmYXVsdFwiXSkocHJveHkpLFxuICAgICAgICBfdXNlUkNOb3RpZmljYXRpb24yID0gKDAsIF9zbGljZWRUb0FycmF5MltcImRlZmF1bHRcIl0pKF91c2VSQ05vdGlmaWNhdGlvbiwgMiksXG4gICAgICAgIGhvb2tOb3RpZnkgPSBfdXNlUkNOb3RpZmljYXRpb24yWzBdLFxuICAgICAgICBob2xkZXIgPSBfdXNlUkNOb3RpZmljYXRpb24yWzFdO1xuXG4gICAgZnVuY3Rpb24gbm90aWZ5KGFyZ3MpIHtcbiAgICAgIHZhciBjdXN0b21pemVQcmVmaXhDbHMgPSBhcmdzLnByZWZpeENscztcbiAgICAgIHZhciBtZXJnZWRQcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ21lc3NhZ2UnLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICAgICAgdmFyIHRhcmdldCA9IGFyZ3Mua2V5IHx8ICgwLCBfLmdldEtleVRoZW5JbmNyZWFzZUtleSkoKTtcbiAgICAgIHZhciBjbG9zZVByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiBjYWxsYmFjaygpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGFyZ3Mub25DbG9zZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgYXJncy5vbkNsb3NlKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZ2V0UmNOb3RpZmljYXRpb25JbnN0YW5jZSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBhcmdzKSwge1xuICAgICAgICAgIHByZWZpeENsczogbWVyZ2VkUHJlZml4Q2xzXG4gICAgICAgIH0pLCBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICAgIHZhciBwcmVmaXhDbHMgPSBfcmVmLnByZWZpeENscyxcbiAgICAgICAgICAgICAgaW5zdGFuY2UgPSBfcmVmLmluc3RhbmNlO1xuICAgICAgICAgIGlubmVySW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICAgICAgICBob29rTm90aWZ5KGdldFJDTm90aWNlUHJvcHMoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgYXJncyksIHtcbiAgICAgICAgICAgIGtleTogdGFyZ2V0LFxuICAgICAgICAgICAgb25DbG9zZTogY2FsbGJhY2tcbiAgICAgICAgICB9KSwgcHJlZml4Q2xzKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHZhciByZXN1bHQgPSBmdW5jdGlvbiByZXN1bHQoKSB7XG4gICAgICAgIGlmIChpbm5lckluc3RhbmNlKSB7XG4gICAgICAgICAgaW5uZXJJbnN0YW5jZS5yZW1vdmVOb3RpY2UodGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgcmVzdWx0LnRoZW4gPSBmdW5jdGlvbiAoZmlsbGVkLCByZWplY3RlZCkge1xuICAgICAgICByZXR1cm4gY2xvc2VQcm9taXNlLnRoZW4oZmlsbGVkLCByZWplY3RlZCk7XG4gICAgICB9O1xuXG4gICAgICByZXN1bHQucHJvbWlzZSA9IGNsb3NlUHJvbWlzZTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSAvLyBGaWxsIGZ1bmN0aW9uc1xuXG5cbiAgICB2YXIgaG9va0FwaVJlZiA9IFJlYWN0LnVzZVJlZih7fSk7XG4gICAgaG9va0FwaVJlZi5jdXJyZW50Lm9wZW4gPSBub3RpZnk7XG4gICAgWydzdWNjZXNzJywgJ2luZm8nLCAnd2FybmluZycsICdlcnJvcicsICdsb2FkaW5nJ10uZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICAgICAgcmV0dXJuICgwLCBfLmF0dGFjaFR5cGVBcGkpKGhvb2tBcGlSZWYuY3VycmVudCwgdHlwZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtob29rQXBpUmVmLmN1cnJlbnQsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9jb25maWdQcm92aWRlci5Db25maWdDb25zdW1lciwge1xuICAgICAga2V5OiBcImhvbGRlclwiXG4gICAgfSwgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIGdldFByZWZpeENscyA9IGNvbnRleHQuZ2V0UHJlZml4Q2xzO1xuICAgICAgcmV0dXJuIGhvbGRlcjtcbiAgICB9KV07XG4gIH07XG5cbiAgcmV0dXJuIHVzZU1lc3NhZ2U7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXRLZXlUaGVuSW5jcmVhc2VLZXkgPSBnZXRLZXlUaGVuSW5jcmVhc2VLZXk7XG5leHBvcnRzLmF0dGFjaFR5cGVBcGkgPSBhdHRhY2hUeXBlQXBpO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBleHBvcnRzLmdldEluc3RhbmNlID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfcmNOb3RpZmljYXRpb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyYy1ub3RpZmljYXRpb25cIikpO1xuXG52YXIgX0xvYWRpbmdPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL0xvYWRpbmdPdXRsaW5lZFwiKSk7XG5cbnZhciBfRXhjbGFtYXRpb25DaXJjbGVGaWxsZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9FeGNsYW1hdGlvbkNpcmNsZUZpbGxlZFwiKSk7XG5cbnZhciBfQ2xvc2VDaXJjbGVGaWxsZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9DbG9zZUNpcmNsZUZpbGxlZFwiKSk7XG5cbnZhciBfQ2hlY2tDaXJjbGVGaWxsZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9DaGVja0NpcmNsZUZpbGxlZFwiKSk7XG5cbnZhciBfSW5mb0NpcmNsZUZpbGxlZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL0luZm9DaXJjbGVGaWxsZWRcIikpO1xuXG52YXIgX3VzZU1lc3NhZ2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2hvb2tzL3VzZU1lc3NhZ2VcIikpO1xuXG52YXIgbWVzc2FnZUluc3RhbmNlO1xudmFyIGRlZmF1bHREdXJhdGlvbiA9IDM7XG52YXIgZGVmYXVsdFRvcDtcbnZhciBrZXkgPSAxO1xudmFyIGxvY2FsUHJlZml4Q2xzID0gJ2FudC1tZXNzYWdlJztcbnZhciB0cmFuc2l0aW9uTmFtZSA9ICdtb3ZlLXVwJztcbnZhciBnZXRDb250YWluZXI7XG52YXIgbWF4Q291bnQ7XG52YXIgcnRsID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGdldEtleVRoZW5JbmNyZWFzZUtleSgpIHtcbiAgcmV0dXJuIGtleSsrO1xufVxuXG5mdW5jdGlvbiBzZXRNZXNzYWdlQ29uZmlnKG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMudG9wICE9PSB1bmRlZmluZWQpIHtcbiAgICBkZWZhdWx0VG9wID0gb3B0aW9ucy50b3A7XG4gICAgbWVzc2FnZUluc3RhbmNlID0gbnVsbDsgLy8gZGVsZXRlIG1lc3NhZ2VJbnN0YW5jZSBmb3IgbmV3IGRlZmF1bHRUb3BcbiAgfVxuXG4gIGlmIChvcHRpb25zLmR1cmF0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICBkZWZhdWx0RHVyYXRpb24gPSBvcHRpb25zLmR1cmF0aW9uO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMucHJlZml4Q2xzICE9PSB1bmRlZmluZWQpIHtcbiAgICBsb2NhbFByZWZpeENscyA9IG9wdGlvbnMucHJlZml4Q2xzO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuZ2V0Q29udGFpbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICBnZXRDb250YWluZXIgPSBvcHRpb25zLmdldENvbnRhaW5lcjtcbiAgfVxuXG4gIGlmIChvcHRpb25zLnRyYW5zaXRpb25OYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICB0cmFuc2l0aW9uTmFtZSA9IG9wdGlvbnMudHJhbnNpdGlvbk5hbWU7XG4gICAgbWVzc2FnZUluc3RhbmNlID0gbnVsbDsgLy8gZGVsZXRlIG1lc3NhZ2VJbnN0YW5jZSBmb3IgbmV3IHRyYW5zaXRpb25OYW1lXG4gIH1cblxuICBpZiAob3B0aW9ucy5tYXhDb3VudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgbWF4Q291bnQgPSBvcHRpb25zLm1heENvdW50O1xuICAgIG1lc3NhZ2VJbnN0YW5jZSA9IG51bGw7XG4gIH1cblxuICBpZiAob3B0aW9ucy5ydGwgIT09IHVuZGVmaW5lZCkge1xuICAgIHJ0bCA9IG9wdGlvbnMucnRsO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFJDTm90aWZpY2F0aW9uSW5zdGFuY2UoYXJncywgY2FsbGJhY2spIHtcbiAgdmFyIHByZWZpeENscyA9IGFyZ3MucHJlZml4Q2xzIHx8IGxvY2FsUHJlZml4Q2xzO1xuXG4gIGlmIChtZXNzYWdlSW5zdGFuY2UpIHtcbiAgICBjYWxsYmFjayh7XG4gICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgIGluc3RhbmNlOiBtZXNzYWdlSW5zdGFuY2VcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBfcmNOb3RpZmljYXRpb25bXCJkZWZhdWx0XCJdLm5ld0luc3RhbmNlKHtcbiAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICB0cmFuc2l0aW9uTmFtZTogdHJhbnNpdGlvbk5hbWUsXG4gICAgc3R5bGU6IHtcbiAgICAgIHRvcDogZGVmYXVsdFRvcFxuICAgIH0sXG4gICAgZ2V0Q29udGFpbmVyOiBnZXRDb250YWluZXIsXG4gICAgbWF4Q291bnQ6IG1heENvdW50XG4gIH0sIGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgIGlmIChtZXNzYWdlSW5zdGFuY2UpIHtcbiAgICAgIGNhbGxiYWNrKHtcbiAgICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICAgIGluc3RhbmNlOiBtZXNzYWdlSW5zdGFuY2VcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG1lc3NhZ2VJbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgIGNhbGxiYWNrKHtcbiAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgaW5zdGFuY2U6IGluc3RhbmNlXG4gICAgfSk7XG4gIH0pO1xufVxuXG52YXIgdHlwZVRvSWNvbiA9IHtcbiAgaW5mbzogX0luZm9DaXJjbGVGaWxsZWRbXCJkZWZhdWx0XCJdLFxuICBzdWNjZXNzOiBfQ2hlY2tDaXJjbGVGaWxsZWRbXCJkZWZhdWx0XCJdLFxuICBlcnJvcjogX0Nsb3NlQ2lyY2xlRmlsbGVkW1wiZGVmYXVsdFwiXSxcbiAgd2FybmluZzogX0V4Y2xhbWF0aW9uQ2lyY2xlRmlsbGVkW1wiZGVmYXVsdFwiXSxcbiAgbG9hZGluZzogX0xvYWRpbmdPdXRsaW5lZFtcImRlZmF1bHRcIl1cbn07XG5cbmZ1bmN0aW9uIGdldFJDTm90aWNlUHJvcHMoYXJncywgcHJlZml4Q2xzKSB7XG4gIHZhciBfY2xhc3NOYW1lcztcblxuICB2YXIgZHVyYXRpb24gPSBhcmdzLmR1cmF0aW9uICE9PSB1bmRlZmluZWQgPyBhcmdzLmR1cmF0aW9uIDogZGVmYXVsdER1cmF0aW9uO1xuICB2YXIgSWNvbkNvbXBvbmVudCA9IHR5cGVUb0ljb25bYXJncy50eXBlXTtcbiAgdmFyIG1lc3NhZ2VDbGFzcyA9ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKFwiXCIuY29uY2F0KHByZWZpeENscywgXCItY3VzdG9tLWNvbnRlbnRcIiksIChfY2xhc3NOYW1lcyA9IHt9LCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQoYXJncy50eXBlKSwgYXJncy50eXBlKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ydGxcIiksIHJ0bCA9PT0gdHJ1ZSksIF9jbGFzc05hbWVzKSk7XG4gIHJldHVybiB7XG4gICAga2V5OiBhcmdzLmtleSxcbiAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgc3R5bGU6IGFyZ3Muc3R5bGUgfHwge30sXG4gICAgY2xhc3NOYW1lOiBhcmdzLmNsYXNzTmFtZSxcbiAgICBjb250ZW50OiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IG1lc3NhZ2VDbGFzc1xuICAgIH0sIGFyZ3MuaWNvbiB8fCBJY29uQ29tcG9uZW50ICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEljb25Db21wb25lbnQsIG51bGwpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgYXJncy5jb250ZW50KSksXG4gICAgb25DbG9zZTogYXJncy5vbkNsb3NlXG4gIH07XG59XG5cbmZ1bmN0aW9uIG5vdGljZShhcmdzKSB7XG4gIHZhciB0YXJnZXQgPSBhcmdzLmtleSB8fCBrZXkrKztcbiAgdmFyIGNsb3NlUHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgdmFyIGNhbGxiYWNrID0gZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgICBpZiAodHlwZW9mIGFyZ3Mub25DbG9zZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBhcmdzLm9uQ2xvc2UoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSk7XG4gICAgfTtcblxuICAgIGdldFJDTm90aWZpY2F0aW9uSW5zdGFuY2UoYXJncywgZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBwcmVmaXhDbHMgPSBfcmVmLnByZWZpeENscyxcbiAgICAgICAgICBpbnN0YW5jZSA9IF9yZWYuaW5zdGFuY2U7XG4gICAgICBpbnN0YW5jZS5ub3RpY2UoZ2V0UkNOb3RpY2VQcm9wcygoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBhcmdzKSwge1xuICAgICAgICBrZXk6IHRhcmdldCxcbiAgICAgICAgb25DbG9zZTogY2FsbGJhY2tcbiAgICAgIH0pLCBwcmVmaXhDbHMpKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgdmFyIHJlc3VsdCA9IGZ1bmN0aW9uIHJlc3VsdCgpIHtcbiAgICBpZiAobWVzc2FnZUluc3RhbmNlKSB7XG4gICAgICBtZXNzYWdlSW5zdGFuY2UucmVtb3ZlTm90aWNlKHRhcmdldCk7XG4gICAgfVxuICB9O1xuXG4gIHJlc3VsdC50aGVuID0gZnVuY3Rpb24gKGZpbGxlZCwgcmVqZWN0ZWQpIHtcbiAgICByZXR1cm4gY2xvc2VQcm9taXNlLnRoZW4oZmlsbGVkLCByZWplY3RlZCk7XG4gIH07XG5cbiAgcmVzdWx0LnByb21pc2UgPSBjbG9zZVByb21pc2U7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGlzQXJnc1Byb3BzKGNvbnRlbnQpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChjb250ZW50KSA9PT0gJ1tvYmplY3QgT2JqZWN0XScgJiYgISFjb250ZW50LmNvbnRlbnQ7XG59XG5cbnZhciBhcGkgPSB7XG4gIG9wZW46IG5vdGljZSxcbiAgY29uZmlnOiBzZXRNZXNzYWdlQ29uZmlnLFxuICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KG1lc3NhZ2VLZXkpIHtcbiAgICBpZiAobWVzc2FnZUluc3RhbmNlKSB7XG4gICAgICBpZiAobWVzc2FnZUtleSkge1xuICAgICAgICB2YXIgX21lc3NhZ2VJbnN0YW5jZSA9IG1lc3NhZ2VJbnN0YW5jZSxcbiAgICAgICAgICAgIHJlbW92ZU5vdGljZSA9IF9tZXNzYWdlSW5zdGFuY2UucmVtb3ZlTm90aWNlO1xuICAgICAgICByZW1vdmVOb3RpY2UobWVzc2FnZUtleSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgX21lc3NhZ2VJbnN0YW5jZTIgPSBtZXNzYWdlSW5zdGFuY2UsXG4gICAgICAgICAgICBkZXN0cm95ID0gX21lc3NhZ2VJbnN0YW5jZTIuZGVzdHJveTtcbiAgICAgICAgZGVzdHJveSgpO1xuICAgICAgICBtZXNzYWdlSW5zdGFuY2UgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuZnVuY3Rpb24gYXR0YWNoVHlwZUFwaShvcmlnaW5hbEFwaSwgdHlwZSkge1xuICBvcmlnaW5hbEFwaVt0eXBlXSA9IGZ1bmN0aW9uIChjb250ZW50LCBkdXJhdGlvbiwgb25DbG9zZSkge1xuICAgIGlmIChpc0FyZ3NQcm9wcyhjb250ZW50KSkge1xuICAgICAgcmV0dXJuIG9yaWdpbmFsQXBpLm9wZW4oKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgY29udGVudCksIHtcbiAgICAgICAgdHlwZTogdHlwZVxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZHVyYXRpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9uQ2xvc2UgPSBkdXJhdGlvbjtcbiAgICAgIGR1cmF0aW9uID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiBvcmlnaW5hbEFwaS5vcGVuKHtcbiAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICB0eXBlOiB0eXBlLFxuICAgICAgb25DbG9zZTogb25DbG9zZVxuICAgIH0pO1xuICB9O1xufVxuXG5bJ3N1Y2Nlc3MnLCAnaW5mbycsICd3YXJuaW5nJywgJ2Vycm9yJywgJ2xvYWRpbmcnXS5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gIHJldHVybiBhdHRhY2hUeXBlQXBpKGFwaSwgdHlwZSk7XG59KTtcbmFwaS53YXJuID0gYXBpLndhcm5pbmc7XG5hcGkudXNlTWVzc2FnZSA9ICgwLCBfdXNlTWVzc2FnZVtcImRlZmF1bHRcIl0pKGdldFJDTm90aWZpY2F0aW9uSW5zdGFuY2UsIGdldFJDTm90aWNlUHJvcHMpO1xuLyoqIEBwcml2YXRlIHRlc3Qgb25seSBmdW5jdGlvbi4gTm90IHdvcmsgb24gcHJvZHVjdGlvbiAqL1xuXG52YXIgZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiBnZXRJbnN0YW5jZSgpIHtcbiAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAndGVzdCcgPyBtZXNzYWdlSW5zdGFuY2UgOiBudWxsO1xufTtcblxuZXhwb3J0cy5nZXRJbnN0YW5jZSA9IGdldEluc3RhbmNlO1xudmFyIF9kZWZhdWx0ID0gYXBpO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNoYW5nZUNvbmZpcm1Mb2NhbGUgPSBjaGFuZ2VDb25maXJtTG9jYWxlO1xuZXhwb3J0cy5nZXRDb25maXJtTG9jYWxlID0gZ2V0Q29uZmlybUxvY2FsZTtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfZGVmYXVsdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2xvY2FsZS9kZWZhdWx0XCIpKTtcblxudmFyIHJ1bnRpbWVMb2NhbGUgPSAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIF9kZWZhdWx0W1wiZGVmYXVsdFwiXS5Nb2RhbCk7XG5cbmZ1bmN0aW9uIGNoYW5nZUNvbmZpcm1Mb2NhbGUobmV3TG9jYWxlKSB7XG4gIGlmIChuZXdMb2NhbGUpIHtcbiAgICBydW50aW1lTG9jYWxlID0gKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgcnVudGltZUxvY2FsZSksIG5ld0xvY2FsZSk7XG4gIH0gZWxzZSB7XG4gICAgcnVudGltZUxvY2FsZSA9ICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgX2RlZmF1bHRbXCJkZWZhdWx0XCJdLk1vZGFsKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRDb25maXJtTG9jYWxlKCkge1xuICByZXR1cm4gcnVudGltZUxvY2FsZTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGNyZWF0ZVVzZU5vdGlmaWNhdGlvbjtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfc2xpY2VkVG9BcnJheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIikpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3VzZU5vdGlmaWNhdGlvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJjLW5vdGlmaWNhdGlvbi9saWIvdXNlTm90aWZpY2F0aW9uXCIpKTtcblxudmFyIF9jb25maWdQcm92aWRlciA9IHJlcXVpcmUoXCIuLi8uLi9jb25maWctcHJvdmlkZXJcIik7XG5cbmZ1bmN0aW9uIGNyZWF0ZVVzZU5vdGlmaWNhdGlvbihnZXROb3RpZmljYXRpb25JbnN0YW5jZSwgZ2V0UkNOb3RpY2VQcm9wcykge1xuICB2YXIgdXNlTm90aWZpY2F0aW9uID0gZnVuY3Rpb24gdXNlTm90aWZpY2F0aW9uKCkge1xuICAgIC8vIFdlIGNhbiBvbmx5IGdldCBjb250ZW50IGJ5IHJlbmRlclxuICAgIHZhciBnZXRQcmVmaXhDbHM7IC8vIFdlIGNyZWF0ZSBhIHByb3h5IHRvIGhhbmRsZSBkZWxheSBjcmVhdGVkIGluc3RhbmNlXG5cbiAgICB2YXIgaW5uZXJJbnN0YW5jZSA9IG51bGw7XG4gICAgdmFyIHByb3h5ID0ge1xuICAgICAgYWRkOiBmdW5jdGlvbiBhZGQobm90aWNlUHJvcHMsIGhvbGRlckNhbGxiYWNrKSB7XG4gICAgICAgIGlubmVySW5zdGFuY2UgPT09IG51bGwgfHwgaW5uZXJJbnN0YW5jZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW5uZXJJbnN0YW5jZS5jb21wb25lbnQuYWRkKG5vdGljZVByb3BzLCBob2xkZXJDYWxsYmFjayk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBfdXNlUkNOb3RpZmljYXRpb24gPSAoMCwgX3VzZU5vdGlmaWNhdGlvbltcImRlZmF1bHRcIl0pKHByb3h5KSxcbiAgICAgICAgX3VzZVJDTm90aWZpY2F0aW9uMiA9ICgwLCBfc2xpY2VkVG9BcnJheTJbXCJkZWZhdWx0XCJdKShfdXNlUkNOb3RpZmljYXRpb24sIDIpLFxuICAgICAgICBob29rTm90aWZ5ID0gX3VzZVJDTm90aWZpY2F0aW9uMlswXSxcbiAgICAgICAgaG9sZGVyID0gX3VzZVJDTm90aWZpY2F0aW9uMlsxXTtcblxuICAgIGZ1bmN0aW9uIG5vdGlmeShhcmdzKSB7XG4gICAgICB2YXIgY3VzdG9taXplUHJlZml4Q2xzID0gYXJncy5wcmVmaXhDbHM7XG4gICAgICB2YXIgbWVyZ2VkUHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdub3RpZmljYXRpb24nLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICAgICAgZ2V0Tm90aWZpY2F0aW9uSW5zdGFuY2UoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgYXJncyksIHtcbiAgICAgICAgcHJlZml4Q2xzOiBtZXJnZWRQcmVmaXhDbHNcbiAgICAgIH0pLCBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICB2YXIgcHJlZml4Q2xzID0gX3JlZi5wcmVmaXhDbHMsXG4gICAgICAgICAgICBpbnN0YW5jZSA9IF9yZWYuaW5zdGFuY2U7XG4gICAgICAgIGlubmVySW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICAgICAgaG9va05vdGlmeShnZXRSQ05vdGljZVByb3BzKGFyZ3MsIHByZWZpeENscykpO1xuICAgICAgfSk7XG4gICAgfSAvLyBGaWxsIGZ1bmN0aW9uc1xuXG5cbiAgICB2YXIgaG9va0FwaVJlZiA9IFJlYWN0LnVzZVJlZih7fSk7XG4gICAgaG9va0FwaVJlZi5jdXJyZW50Lm9wZW4gPSBub3RpZnk7XG4gICAgWydzdWNjZXNzJywgJ2luZm8nLCAnd2FybmluZycsICdlcnJvciddLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgIGhvb2tBcGlSZWYuY3VycmVudFt0eXBlXSA9IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgIHJldHVybiBob29rQXBpUmVmLmN1cnJlbnQub3BlbigoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBhcmdzKSwge1xuICAgICAgICAgIHR5cGU6IHR5cGVcbiAgICAgICAgfSkpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2hvb2tBcGlSZWYuY3VycmVudCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnN1bWVyLCB7XG4gICAgICBrZXk6IFwiaG9sZGVyXCJcbiAgICB9LCBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgZ2V0UHJlZml4Q2xzID0gY29udGV4dC5nZXRQcmVmaXhDbHM7XG4gICAgICByZXR1cm4gaG9sZGVyO1xuICAgIH0pXTtcbiAgfTtcblxuICByZXR1cm4gdXNlTm90aWZpY2F0aW9uO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZXhwb3J0cy5nZXRJbnN0YW5jZSA9IHZvaWQgMDtcblxudmFyIF9yZWdlbmVyYXRvciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yXCIpKTtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcmNOb3RpZmljYXRpb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyYy1ub3RpZmljYXRpb25cIikpO1xuXG52YXIgX0Nsb3NlT3V0bGluZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9DbG9zZU91dGxpbmVkXCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfQ2hlY2tDaXJjbGVPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL0NoZWNrQ2lyY2xlT3V0bGluZWRcIikpO1xuXG52YXIgX0Nsb3NlQ2lyY2xlT3V0bGluZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9DbG9zZUNpcmNsZU91dGxpbmVkXCIpKTtcblxudmFyIF9FeGNsYW1hdGlvbkNpcmNsZU91dGxpbmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvRXhjbGFtYXRpb25DaXJjbGVPdXRsaW5lZFwiKSk7XG5cbnZhciBfSW5mb0NpcmNsZU91dGxpbmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvSW5mb0NpcmNsZU91dGxpbmVkXCIpKTtcblxudmFyIF91c2VOb3RpZmljYXRpb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2hvb2tzL3VzZU5vdGlmaWNhdGlvblwiKSk7XG5cbnZhciBfX2F3YWl0ZXIgPSB2b2lkIDAgJiYgKHZvaWQgMCkuX19hd2FpdGVyIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7XG4gICAgICB0cnkge1xuICAgICAgICBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkge1xuICAgICAgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7XG4gICAgfVxuXG4gICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICB9KTtcbn07XG5cbnZhciBub3RpZmljYXRpb25JbnN0YW5jZSA9IHt9O1xudmFyIGRlZmF1bHREdXJhdGlvbiA9IDQuNTtcbnZhciBkZWZhdWx0VG9wID0gMjQ7XG52YXIgZGVmYXVsdEJvdHRvbSA9IDI0O1xudmFyIGRlZmF1bHRQcmVmaXhDbHMgPSAnYW50LW5vdGlmaWNhdGlvbic7XG52YXIgZGVmYXVsdFBsYWNlbWVudCA9ICd0b3BSaWdodCc7XG52YXIgZGVmYXVsdEdldENvbnRhaW5lcjtcbnZhciBkZWZhdWx0Q2xvc2VJY29uO1xudmFyIHJ0bCA9IGZhbHNlO1xuXG5mdW5jdGlvbiBzZXROb3RpZmljYXRpb25Db25maWcob3B0aW9ucykge1xuICB2YXIgZHVyYXRpb24gPSBvcHRpb25zLmR1cmF0aW9uLFxuICAgICAgcGxhY2VtZW50ID0gb3B0aW9ucy5wbGFjZW1lbnQsXG4gICAgICBib3R0b20gPSBvcHRpb25zLmJvdHRvbSxcbiAgICAgIHRvcCA9IG9wdGlvbnMudG9wLFxuICAgICAgZ2V0Q29udGFpbmVyID0gb3B0aW9ucy5nZXRDb250YWluZXIsXG4gICAgICBjbG9zZUljb24gPSBvcHRpb25zLmNsb3NlSWNvbixcbiAgICAgIHByZWZpeENscyA9IG9wdGlvbnMucHJlZml4Q2xzO1xuXG4gIGlmIChwcmVmaXhDbHMgIT09IHVuZGVmaW5lZCkge1xuICAgIGRlZmF1bHRQcmVmaXhDbHMgPSBwcmVmaXhDbHM7XG4gIH1cblxuICBpZiAoZHVyYXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgIGRlZmF1bHREdXJhdGlvbiA9IGR1cmF0aW9uO1xuICB9XG5cbiAgaWYgKHBsYWNlbWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZGVmYXVsdFBsYWNlbWVudCA9IHBsYWNlbWVudDtcbiAgfSBlbHNlIGlmIChvcHRpb25zLnJ0bCkge1xuICAgIGRlZmF1bHRQbGFjZW1lbnQgPSAndG9wTGVmdCc7XG4gIH1cblxuICBpZiAoYm90dG9tICE9PSB1bmRlZmluZWQpIHtcbiAgICBkZWZhdWx0Qm90dG9tID0gYm90dG9tO1xuICB9XG5cbiAgaWYgKHRvcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZGVmYXVsdFRvcCA9IHRvcDtcbiAgfVxuXG4gIGlmIChnZXRDb250YWluZXIgIT09IHVuZGVmaW5lZCkge1xuICAgIGRlZmF1bHRHZXRDb250YWluZXIgPSBnZXRDb250YWluZXI7XG4gIH1cblxuICBpZiAoY2xvc2VJY29uICE9PSB1bmRlZmluZWQpIHtcbiAgICBkZWZhdWx0Q2xvc2VJY29uID0gY2xvc2VJY29uO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMucnRsICE9PSB1bmRlZmluZWQpIHtcbiAgICBydGwgPSBvcHRpb25zLnJ0bDtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRQbGFjZW1lbnRTdHlsZShwbGFjZW1lbnQpIHtcbiAgdmFyIHRvcCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZGVmYXVsdFRvcDtcbiAgdmFyIGJvdHRvbSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogZGVmYXVsdEJvdHRvbTtcbiAgdmFyIHN0eWxlO1xuXG4gIHN3aXRjaCAocGxhY2VtZW50KSB7XG4gICAgY2FzZSAndG9wTGVmdCc6XG4gICAgICBzdHlsZSA9IHtcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgdG9wOiB0b3AsXG4gICAgICAgIGJvdHRvbTogJ2F1dG8nXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICd0b3BSaWdodCc6XG4gICAgICBzdHlsZSA9IHtcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIHRvcDogdG9wLFxuICAgICAgICBib3R0b206ICdhdXRvJ1xuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnYm90dG9tTGVmdCc6XG4gICAgICBzdHlsZSA9IHtcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgdG9wOiAnYXV0bycsXG4gICAgICAgIGJvdHRvbTogYm90dG9tXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgc3R5bGUgPSB7XG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICB0b3A6ICdhdXRvJyxcbiAgICAgICAgYm90dG9tOiBib3R0b21cbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm90aWZpY2F0aW9uSW5zdGFuY2UoYXJncywgY2FsbGJhY2spIHtcbiAgdmFyIF9hcmdzJHBsYWNlbWVudCA9IGFyZ3MucGxhY2VtZW50LFxuICAgICAgcGxhY2VtZW50ID0gX2FyZ3MkcGxhY2VtZW50ID09PSB2b2lkIDAgPyBkZWZhdWx0UGxhY2VtZW50IDogX2FyZ3MkcGxhY2VtZW50LFxuICAgICAgdG9wID0gYXJncy50b3AsXG4gICAgICBib3R0b20gPSBhcmdzLmJvdHRvbSxcbiAgICAgIF9hcmdzJGdldENvbnRhaW5lciA9IGFyZ3MuZ2V0Q29udGFpbmVyLFxuICAgICAgZ2V0Q29udGFpbmVyID0gX2FyZ3MkZ2V0Q29udGFpbmVyID09PSB2b2lkIDAgPyBkZWZhdWx0R2V0Q29udGFpbmVyIDogX2FyZ3MkZ2V0Q29udGFpbmVyLFxuICAgICAgX2FyZ3MkY2xvc2VJY29uID0gYXJncy5jbG9zZUljb24sXG4gICAgICBjbG9zZUljb24gPSBfYXJncyRjbG9zZUljb24gPT09IHZvaWQgMCA/IGRlZmF1bHRDbG9zZUljb24gOiBfYXJncyRjbG9zZUljb247XG4gIHZhciBvdXRlclByZWZpeENscyA9IGFyZ3MucHJlZml4Q2xzIHx8IGRlZmF1bHRQcmVmaXhDbHM7XG4gIHZhciBwcmVmaXhDbHMgPSBcIlwiLmNvbmNhdChvdXRlclByZWZpeENscywgXCItbm90aWNlXCIpO1xuICB2YXIgY2FjaGVLZXkgPSBcIlwiLmNvbmNhdChvdXRlclByZWZpeENscywgXCItXCIpLmNvbmNhdChwbGFjZW1lbnQpO1xuICB2YXIgY2FjaGVJbnN0YW5jZSA9IG5vdGlmaWNhdGlvbkluc3RhbmNlW2NhY2hlS2V5XTtcblxuICBpZiAoY2FjaGVJbnN0YW5jZSkge1xuICAgIFByb21pc2UucmVzb2x2ZShjYWNoZUluc3RhbmNlKS50aGVuKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgICAgY2FsbGJhY2soe1xuICAgICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgICAgaW5zdGFuY2U6IGluc3RhbmNlXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgY2xvc2VJY29uVG9SZW5kZXIgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQob3V0ZXJQcmVmaXhDbHMsIFwiLWNsb3NlLXhcIilcbiAgfSwgY2xvc2VJY29uIHx8IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9DbG9zZU91dGxpbmVkW1wiZGVmYXVsdFwiXSwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQob3V0ZXJQcmVmaXhDbHMsIFwiLWNsb3NlLWljb25cIilcbiAgfSkpO1xuICB2YXIgbm90aWZpY2F0aW9uQ2xhc3MgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShcIlwiLmNvbmNhdChvdXRlclByZWZpeENscywgXCItXCIpLmNvbmNhdChwbGFjZW1lbnQpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKHt9LCBcIlwiLmNvbmNhdChvdXRlclByZWZpeENscywgXCItcnRsXCIpLCBydGwgPT09IHRydWUpKTtcbiAgbm90aWZpY2F0aW9uSW5zdGFuY2VbY2FjaGVLZXldID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICBfcmNOb3RpZmljYXRpb25bXCJkZWZhdWx0XCJdLm5ld0luc3RhbmNlKHtcbiAgICAgIHByZWZpeENsczogb3V0ZXJQcmVmaXhDbHMsXG4gICAgICBjbGFzc05hbWU6IG5vdGlmaWNhdGlvbkNsYXNzLFxuICAgICAgc3R5bGU6IGdldFBsYWNlbWVudFN0eWxlKHBsYWNlbWVudCwgdG9wLCBib3R0b20pLFxuICAgICAgZ2V0Q29udGFpbmVyOiBnZXRDb250YWluZXIsXG4gICAgICBjbG9zZUljb246IGNsb3NlSWNvblRvUmVuZGVyXG4gICAgfSwgZnVuY3Rpb24gKG5vdGlmaWNhdGlvbikge1xuICAgICAgcmVzb2x2ZShub3RpZmljYXRpb24pO1xuICAgICAgY2FsbGJhY2soe1xuICAgICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgICAgaW5zdGFuY2U6IG5vdGlmaWNhdGlvblxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG52YXIgdHlwZVRvSWNvbiA9IHtcbiAgc3VjY2VzczogX0NoZWNrQ2lyY2xlT3V0bGluZWRbXCJkZWZhdWx0XCJdLFxuICBpbmZvOiBfSW5mb0NpcmNsZU91dGxpbmVkW1wiZGVmYXVsdFwiXSxcbiAgZXJyb3I6IF9DbG9zZUNpcmNsZU91dGxpbmVkW1wiZGVmYXVsdFwiXSxcbiAgd2FybmluZzogX0V4Y2xhbWF0aW9uQ2lyY2xlT3V0bGluZWRbXCJkZWZhdWx0XCJdXG59O1xuXG5mdW5jdGlvbiBnZXRSQ05vdGljZVByb3BzKGFyZ3MsIHByZWZpeENscykge1xuICB2YXIgZHVyYXRpb24gPSBhcmdzLmR1cmF0aW9uID09PSB1bmRlZmluZWQgPyBkZWZhdWx0RHVyYXRpb24gOiBhcmdzLmR1cmF0aW9uO1xuICB2YXIgaWNvbk5vZGUgPSBudWxsO1xuXG4gIGlmIChhcmdzLmljb24pIHtcbiAgICBpY29uTm9kZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaWNvblwiKVxuICAgIH0sIGFyZ3MuaWNvbik7XG4gIH0gZWxzZSBpZiAoYXJncy50eXBlKSB7XG4gICAgaWNvbk5vZGUgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudCh0eXBlVG9JY29uW2FyZ3MudHlwZV0gfHwgbnVsbCwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWljb24gXCIpLmNvbmNhdChwcmVmaXhDbHMsIFwiLWljb24tXCIpLmNvbmNhdChhcmdzLnR5cGUpXG4gICAgfSk7XG4gIH1cblxuICB2YXIgYXV0b01hcmdpblRhZyA9ICFhcmdzLmRlc2NyaXB0aW9uICYmIGljb25Ob2RlID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbWVzc2FnZS1zaW5nbGUtbGluZS1hdXRvLW1hcmdpblwiKVxuICB9KSA6IG51bGw7XG4gIHJldHVybiB7XG4gICAgY29udGVudDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBpY29uTm9kZSA/IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItd2l0aC1pY29uXCIpIDogJycsXG4gICAgICByb2xlOiBcImFsZXJ0XCJcbiAgICB9LCBpY29uTm9kZSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLW1lc3NhZ2VcIilcbiAgICB9LCBhdXRvTWFyZ2luVGFnLCBhcmdzLm1lc3NhZ2UpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZGVzY3JpcHRpb25cIilcbiAgICB9LCBhcmdzLmRlc2NyaXB0aW9uKSwgYXJncy5idG4gPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWJ0blwiKVxuICAgIH0sIGFyZ3MuYnRuKSA6IG51bGwpLFxuICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICBjbG9zYWJsZTogdHJ1ZSxcbiAgICBvbkNsb3NlOiBhcmdzLm9uQ2xvc2UsXG4gICAgb25DbGljazogYXJncy5vbkNsaWNrLFxuICAgIGtleTogYXJncy5rZXksXG4gICAgc3R5bGU6IGFyZ3Muc3R5bGUgfHwge30sXG4gICAgY2xhc3NOYW1lOiBhcmdzLmNsYXNzTmFtZVxuICB9O1xufVxuXG5mdW5jdGlvbiBub3RpY2UoYXJncykge1xuICBnZXROb3RpZmljYXRpb25JbnN0YW5jZShhcmdzLCBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBwcmVmaXhDbHMgPSBfcmVmLnByZWZpeENscyxcbiAgICAgICAgaW5zdGFuY2UgPSBfcmVmLmluc3RhbmNlO1xuICAgIGluc3RhbmNlLm5vdGljZShnZXRSQ05vdGljZVByb3BzKGFyZ3MsIHByZWZpeENscykpO1xuICB9KTtcbn1cblxudmFyIGFwaSA9IHtcbiAgb3Blbjogbm90aWNlLFxuICBjbG9zZTogZnVuY3Rpb24gY2xvc2Uoa2V5KSB7XG4gICAgT2JqZWN0LmtleXMobm90aWZpY2F0aW9uSW5zdGFuY2UpLmZvckVhY2goZnVuY3Rpb24gKGNhY2hlS2V5KSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5vdGlmaWNhdGlvbkluc3RhbmNlW2NhY2hlS2V5XSkudGhlbihmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAgICAgaW5zdGFuY2UucmVtb3ZlTm90aWNlKGtleSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbiAgY29uZmlnOiBzZXROb3RpZmljYXRpb25Db25maWcsXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgT2JqZWN0LmtleXMobm90aWZpY2F0aW9uSW5zdGFuY2UpLmZvckVhY2goZnVuY3Rpb24gKGNhY2hlS2V5KSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUobm90aWZpY2F0aW9uSW5zdGFuY2VbY2FjaGVLZXldKS50aGVuKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgICAgICBpbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgICB9KTtcbiAgICAgIGRlbGV0ZSBub3RpZmljYXRpb25JbnN0YW5jZVtjYWNoZUtleV07IC8vIGxndG1banMvbWlzc2luZy1hd2FpdF1cbiAgICB9KTtcbiAgfVxufTtcblsnc3VjY2VzcycsICdpbmZvJywgJ3dhcm5pbmcnLCAnZXJyb3InXS5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gIGFwaVt0eXBlXSA9IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgcmV0dXJuIGFwaS5vcGVuKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIGFyZ3MpLCB7XG4gICAgICB0eXBlOiB0eXBlXG4gICAgfSkpO1xuICB9O1xufSk7XG5hcGkud2FybiA9IGFwaS53YXJuaW5nO1xuYXBpLnVzZU5vdGlmaWNhdGlvbiA9ICgwLCBfdXNlTm90aWZpY2F0aW9uW1wiZGVmYXVsdFwiXSkoZ2V0Tm90aWZpY2F0aW9uSW5zdGFuY2UsIGdldFJDTm90aWNlUHJvcHMpO1xuLyoqIEBwcml2YXRlIHRlc3Qgb25seSBmdW5jdGlvbi4gTm90IHdvcmsgb24gcHJvZHVjdGlvbiAqL1xuXG52YXIgZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiBnZXRJbnN0YW5jZShjYWNoZUtleSkge1xuICByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZSgpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdChcInJldHVyblwiLCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Rlc3QnID8gbm90aWZpY2F0aW9uSW5zdGFuY2VbY2FjaGVLZXldIDogbnVsbCk7XG5cbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWUpO1xuICB9KSk7XG59O1xuXG5leHBvcnRzLmdldEluc3RhbmNlID0gZ2V0SW5zdGFuY2U7XG52YXIgX2RlZmF1bHQgPSBhcGk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9zZWxlY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zZWxlY3RcIikpO1xuXG52YXIgTWluaVNlbGVjdCA9IGZ1bmN0aW9uIE1pbmlTZWxlY3QocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9zZWxlY3RbXCJkZWZhdWx0XCJdLCAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe1xuICAgIHNpemU6IFwic21hbGxcIlxuICB9LCBwcm9wcykpO1xufTtcblxuTWluaVNlbGVjdC5PcHRpb24gPSBfc2VsZWN0W1wiZGVmYXVsdFwiXS5PcHRpb247XG52YXIgX2RlZmF1bHQgPSBNaW5pU2VsZWN0O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpKTtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcmNQYWdpbmF0aW9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmMtcGFnaW5hdGlvblwiKSk7XG5cbnZhciBfZW5fVVMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyYy1wYWdpbmF0aW9uL2xpYi9sb2NhbGUvZW5fVVNcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9MZWZ0T3V0bGluZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9MZWZ0T3V0bGluZWRcIikpO1xuXG52YXIgX1JpZ2h0T3V0bGluZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9SaWdodE91dGxpbmVkXCIpKTtcblxudmFyIF9Eb3VibGVMZWZ0T3V0bGluZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9Eb3VibGVMZWZ0T3V0bGluZWRcIikpO1xuXG52YXIgX0RvdWJsZVJpZ2h0T3V0bGluZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9Eb3VibGVSaWdodE91dGxpbmVkXCIpKTtcblxudmFyIF9NaW5pU2VsZWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9NaW5pU2VsZWN0XCIpKTtcblxudmFyIF9zZWxlY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zZWxlY3RcIikpO1xuXG52YXIgX0xvY2FsZVJlY2VpdmVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbG9jYWxlLXByb3ZpZGVyL0xvY2FsZVJlY2VpdmVyXCIpKTtcblxudmFyIF9jb25maWdQcm92aWRlciA9IHJlcXVpcmUoXCIuLi9jb25maWctcHJvdmlkZXJcIik7XG5cbnZhciBfdXNlQnJlYWtwb2ludDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9ncmlkL2hvb2tzL3VzZUJyZWFrcG9pbnRcIikpO1xuXG52YXIgX19yZXN0ID0gdm9pZCAwICYmICh2b2lkIDApLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuXG4gIGZvciAodmFyIHAgaW4gcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIH1cblxuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpIHRbcFtpXV0gPSBzW3BbaV1dO1xuICB9XG4gIHJldHVybiB0O1xufTtcblxudmFyIFBhZ2luYXRpb24gPSBmdW5jdGlvbiBQYWdpbmF0aW9uKF9hKSB7XG4gIHZhciBjdXN0b21pemVQcmVmaXhDbHMgPSBfYS5wcmVmaXhDbHMsXG4gICAgICBjdXN0b21pemVTZWxlY3RQcmVmaXhDbHMgPSBfYS5zZWxlY3RQcmVmaXhDbHMsXG4gICAgICBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWUsXG4gICAgICBzaXplID0gX2Euc2l6ZSxcbiAgICAgIGN1c3RvbUxvY2FsZSA9IF9hLmxvY2FsZSxcbiAgICAgIHJlc3RQcm9wcyA9IF9fcmVzdChfYSwgW1wicHJlZml4Q2xzXCIsIFwic2VsZWN0UHJlZml4Q2xzXCIsIFwiY2xhc3NOYW1lXCIsIFwic2l6ZVwiLCBcImxvY2FsZVwiXSk7XG5cbiAgdmFyIF91c2VCcmVha3BvaW50ID0gKDAsIF91c2VCcmVha3BvaW50MltcImRlZmF1bHRcIl0pKCksXG4gICAgICB4cyA9IF91c2VCcmVha3BvaW50LnhzO1xuXG4gIHZhciBfUmVhY3QkdXNlQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnRleHQpLFxuICAgICAgZ2V0UHJlZml4Q2xzID0gX1JlYWN0JHVzZUNvbnRleHQuZ2V0UHJlZml4Q2xzLFxuICAgICAgZGlyZWN0aW9uID0gX1JlYWN0JHVzZUNvbnRleHQuZGlyZWN0aW9uO1xuXG4gIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ3BhZ2luYXRpb24nLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuXG4gIHZhciBnZXRJY29uc1Byb3BzID0gZnVuY3Rpb24gZ2V0SWNvbnNQcm9wcygpIHtcbiAgICB2YXIgZWxsaXBzaXMgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWl0ZW0tZWxsaXBzaXNcIilcbiAgICB9LCBcIlxcdTIwMjJcXHUyMDIyXFx1MjAyMlwiKTtcbiAgICB2YXIgcHJldkljb24gPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaXRlbS1saW5rXCIpLFxuICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgIHRhYkluZGV4OiAtMVxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9MZWZ0T3V0bGluZWRbXCJkZWZhdWx0XCJdLCBudWxsKSk7XG4gICAgdmFyIG5leHRJY29uID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWl0ZW0tbGlua1wiKSxcbiAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICB0YWJJbmRleDogLTFcbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfUmlnaHRPdXRsaW5lZFtcImRlZmF1bHRcIl0sIG51bGwpKTtcbiAgICB2YXIganVtcFByZXZJY29uID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pdGVtLWxpbmtcIilcbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaXRlbS1jb250YWluZXJcIilcbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfRG91YmxlTGVmdE91dGxpbmVkW1wiZGVmYXVsdFwiXSwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWl0ZW0tbGluay1pY29uXCIpXG4gICAgfSksIGVsbGlwc2lzKSk7XG4gICAgdmFyIGp1bXBOZXh0SWNvbiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaXRlbS1saW5rXCIpXG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWl0ZW0tY29udGFpbmVyXCIpXG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX0RvdWJsZVJpZ2h0T3V0bGluZWRbXCJkZWZhdWx0XCJdLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaXRlbS1saW5rLWljb25cIilcbiAgICB9KSwgZWxsaXBzaXMpKTsgLy8gY2hhbmdlIGFycm93cyBkaXJlY3Rpb24gaW4gcmlnaHQtdG8tbGVmdCBkaXJlY3Rpb25cblxuICAgIGlmIChkaXJlY3Rpb24gPT09ICdydGwnKSB7XG4gICAgICB2YXIgX3JlZiA9IFtuZXh0SWNvbiwgcHJldkljb25dO1xuICAgICAgcHJldkljb24gPSBfcmVmWzBdO1xuICAgICAgbmV4dEljb24gPSBfcmVmWzFdO1xuICAgICAgdmFyIF9yZWYyID0gW2p1bXBOZXh0SWNvbiwganVtcFByZXZJY29uXTtcbiAgICAgIGp1bXBQcmV2SWNvbiA9IF9yZWYyWzBdO1xuICAgICAganVtcE5leHRJY29uID0gX3JlZjJbMV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHByZXZJY29uOiBwcmV2SWNvbixcbiAgICAgIG5leHRJY29uOiBuZXh0SWNvbixcbiAgICAgIGp1bXBQcmV2SWNvbjoganVtcFByZXZJY29uLFxuICAgICAganVtcE5leHRJY29uOiBqdW1wTmV4dEljb25cbiAgICB9O1xuICB9O1xuXG4gIHZhciByZW5kZXJQYWdpbmF0aW9uID0gZnVuY3Rpb24gcmVuZGVyUGFnaW5hdGlvbihjb250ZXh0TG9jYWxlKSB7XG4gICAgdmFyIGxvY2FsZSA9ICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIGNvbnRleHRMb2NhbGUpLCBjdXN0b21Mb2NhbGUpO1xuICAgIHZhciBpc1NtYWxsID0gc2l6ZSA9PT0gJ3NtYWxsJyB8fCAhISh4cyAmJiAhc2l6ZSAmJiByZXN0UHJvcHMucmVzcG9uc2l2ZSk7XG4gICAgdmFyIHNlbGVjdFByZWZpeENscyA9IGdldFByZWZpeENscygnc2VsZWN0JywgY3VzdG9taXplU2VsZWN0UHJlZml4Q2xzKTtcbiAgICB2YXIgZXh0ZW5kZWRDbGFzc05hbWUgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKSgoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKHtcbiAgICAgIG1pbmk6IGlzU21hbGxcbiAgICB9LCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXJ0bFwiKSwgZGlyZWN0aW9uID09PSAncnRsJyksIGNsYXNzTmFtZSk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9yY1BhZ2luYXRpb25bXCJkZWZhdWx0XCJdLCAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIHJlc3RQcm9wcywge1xuICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICBzZWxlY3RQcmVmaXhDbHM6IHNlbGVjdFByZWZpeENsc1xuICAgIH0sIGdldEljb25zUHJvcHMoKSwge1xuICAgICAgY2xhc3NOYW1lOiBleHRlbmRlZENsYXNzTmFtZSxcbiAgICAgIHNlbGVjdENvbXBvbmVudENsYXNzOiBpc1NtYWxsID8gX01pbmlTZWxlY3RbXCJkZWZhdWx0XCJdIDogX3NlbGVjdFtcImRlZmF1bHRcIl0sXG4gICAgICBsb2NhbGU6IGxvY2FsZVxuICAgIH0pKTtcbiAgfTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX0xvY2FsZVJlY2VpdmVyW1wiZGVmYXVsdFwiXSwge1xuICAgIGNvbXBvbmVudE5hbWU6IFwiUGFnaW5hdGlvblwiLFxuICAgIGRlZmF1bHRMb2NhbGU6IF9lbl9VU1tcImRlZmF1bHRcIl1cbiAgfSwgcmVuZGVyUGFnaW5hdGlvbik7XG59O1xuXG52YXIgX2RlZmF1bHQgPSBQYWdpbmF0aW9uO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9QYWdpbmF0aW9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9QYWdpbmF0aW9uXCIpKTtcblxudmFyIF9kZWZhdWx0ID0gX1BhZ2luYXRpb25bXCJkZWZhdWx0XCJdO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpKTtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfb21pdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIm9taXQuanNcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9yY1NlbGVjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyYy1zZWxlY3RcIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIF9pY29uVXRpbCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvaWNvblV0aWxcIikpO1xuXG52YXIgX1NpemVDb250ZXh0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vY29uZmlnLXByb3ZpZGVyL1NpemVDb250ZXh0XCIpKTtcblxuLy8gVE9ETzogNC4wIC0gY29kZW1vZCBzaG91bGQgaGVscCB0byBjaGFuZ2UgYGZpbHRlck9wdGlvbmAgdG8gc3VwcG9ydCBub2RlIHByb3BzLlxudmFyIF9fcmVzdCA9IHZvaWQgMCAmJiAodm9pZCAwKS5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcblxuICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICB9XG5cbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgfVxuICByZXR1cm4gdDtcbn07XG5cbnZhciBTRUNSRVRfQ09NQk9CT1hfTU9ERV9ET19OT1RfVVNFID0gJ1NFQ1JFVF9DT01CT0JPWF9NT0RFX0RPX05PVF9VU0UnO1xuXG52YXIgSW50ZXJuYWxTZWxlY3QgPSBmdW5jdGlvbiBJbnRlcm5hbFNlbGVjdChfYSwgcmVmKSB7XG4gIHZhciBfY2xhc3NOYW1lczI7XG5cbiAgdmFyIGN1c3RvbWl6ZVByZWZpeENscyA9IF9hLnByZWZpeENscyxcbiAgICAgIF9hJGJvcmRlcmVkID0gX2EuYm9yZGVyZWQsXG4gICAgICBib3JkZXJlZCA9IF9hJGJvcmRlcmVkID09PSB2b2lkIDAgPyB0cnVlIDogX2EkYm9yZGVyZWQsXG4gICAgICBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWUsXG4gICAgICBnZXRQb3B1cENvbnRhaW5lciA9IF9hLmdldFBvcHVwQ29udGFpbmVyLFxuICAgICAgZHJvcGRvd25DbGFzc05hbWUgPSBfYS5kcm9wZG93bkNsYXNzTmFtZSxcbiAgICAgIF9hJGxpc3RIZWlnaHQgPSBfYS5saXN0SGVpZ2h0LFxuICAgICAgbGlzdEhlaWdodCA9IF9hJGxpc3RIZWlnaHQgPT09IHZvaWQgMCA/IDI1NiA6IF9hJGxpc3RIZWlnaHQsXG4gICAgICBfYSRsaXN0SXRlbUhlaWdodCA9IF9hLmxpc3RJdGVtSGVpZ2h0LFxuICAgICAgbGlzdEl0ZW1IZWlnaHQgPSBfYSRsaXN0SXRlbUhlaWdodCA9PT0gdm9pZCAwID8gMjQgOiBfYSRsaXN0SXRlbUhlaWdodCxcbiAgICAgIGN1c3RvbWl6ZVNpemUgPSBfYS5zaXplLFxuICAgICAgbm90Rm91bmRDb250ZW50ID0gX2Eubm90Rm91bmRDb250ZW50LFxuICAgICAgX2EkdHJhbnNpdGlvbk5hbWUgPSBfYS50cmFuc2l0aW9uTmFtZSxcbiAgICAgIHRyYW5zaXRpb25OYW1lID0gX2EkdHJhbnNpdGlvbk5hbWUgPT09IHZvaWQgMCA/ICdzbGlkZS11cCcgOiBfYSR0cmFuc2l0aW9uTmFtZSxcbiAgICAgIHByb3BzID0gX19yZXN0KF9hLCBbXCJwcmVmaXhDbHNcIiwgXCJib3JkZXJlZFwiLCBcImNsYXNzTmFtZVwiLCBcImdldFBvcHVwQ29udGFpbmVyXCIsIFwiZHJvcGRvd25DbGFzc05hbWVcIiwgXCJsaXN0SGVpZ2h0XCIsIFwibGlzdEl0ZW1IZWlnaHRcIiwgXCJzaXplXCIsIFwibm90Rm91bmRDb250ZW50XCIsIFwidHJhbnNpdGlvbk5hbWVcIl0pO1xuXG4gIHZhciBfUmVhY3QkdXNlQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnRleHQpLFxuICAgICAgZ2V0Q29udGV4dFBvcHVwQ29udGFpbmVyID0gX1JlYWN0JHVzZUNvbnRleHQuZ2V0UG9wdXBDb250YWluZXIsXG4gICAgICBnZXRQcmVmaXhDbHMgPSBfUmVhY3QkdXNlQ29udGV4dC5nZXRQcmVmaXhDbHMsXG4gICAgICByZW5kZXJFbXB0eSA9IF9SZWFjdCR1c2VDb250ZXh0LnJlbmRlckVtcHR5LFxuICAgICAgZGlyZWN0aW9uID0gX1JlYWN0JHVzZUNvbnRleHQuZGlyZWN0aW9uLFxuICAgICAgdmlydHVhbCA9IF9SZWFjdCR1c2VDb250ZXh0LnZpcnR1YWwsXG4gICAgICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGggPSBfUmVhY3QkdXNlQ29udGV4dC5kcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg7XG5cbiAgdmFyIHNpemUgPSBSZWFjdC51c2VDb250ZXh0KF9TaXplQ29udGV4dFtcImRlZmF1bHRcIl0pO1xuICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdzZWxlY3QnLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICB2YXIgbW9kZSA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHZhciBtID0gcHJvcHMubW9kZTtcblxuICAgIGlmIChtID09PSAnY29tYm9ib3gnKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmIChtID09PSBTRUNSRVRfQ09NQk9CT1hfTU9ERV9ET19OT1RfVVNFKSB7XG4gICAgICByZXR1cm4gJ2NvbWJvYm94JztcbiAgICB9XG5cbiAgICByZXR1cm4gbTtcbiAgfSwgW3Byb3BzLm1vZGVdKTtcbiAgdmFyIGlzTXVsdGlwbGUgPSBtb2RlID09PSAnbXVsdGlwbGUnIHx8IG1vZGUgPT09ICd0YWdzJzsgLy8gPT09PT09PT09PT09PT09PT09PT09IEVtcHR5ID09PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBtZXJnZWROb3RGb3VuZDtcblxuICBpZiAobm90Rm91bmRDb250ZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICBtZXJnZWROb3RGb3VuZCA9IG5vdEZvdW5kQ29udGVudDtcbiAgfSBlbHNlIGlmIChtb2RlID09PSAnY29tYm9ib3gnKSB7XG4gICAgbWVyZ2VkTm90Rm91bmQgPSBudWxsO1xuICB9IGVsc2Uge1xuICAgIG1lcmdlZE5vdEZvdW5kID0gcmVuZGVyRW1wdHkoJ1NlbGVjdCcpO1xuICB9IC8vID09PT09PT09PT09PT09PT09PT09PSBJY29ucyA9PT09PT09PT09PT09PT09PT09PT1cblxuXG4gIHZhciBfZ2V0SWNvbnMgPSAoMCwgX2ljb25VdGlsW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgcHJvcHMpLCB7XG4gICAgbXVsdGlwbGU6IGlzTXVsdGlwbGUsXG4gICAgcHJlZml4Q2xzOiBwcmVmaXhDbHNcbiAgfSkpLFxuICAgICAgc3VmZml4SWNvbiA9IF9nZXRJY29ucy5zdWZmaXhJY29uLFxuICAgICAgaXRlbUljb24gPSBfZ2V0SWNvbnMuaXRlbUljb24sXG4gICAgICByZW1vdmVJY29uID0gX2dldEljb25zLnJlbW92ZUljb24sXG4gICAgICBjbGVhckljb24gPSBfZ2V0SWNvbnMuY2xlYXJJY29uO1xuXG4gIHZhciBzZWxlY3RQcm9wcyA9ICgwLCBfb21pdFtcImRlZmF1bHRcIl0pKHByb3BzLCBbJ3N1ZmZpeEljb24nLCAnaXRlbUljb24nXSk7XG4gIHZhciByY1NlbGVjdFJ0bERyb3BEb3duQ2xhc3NOYW1lID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoZHJvcGRvd25DbGFzc05hbWUsICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoe30sIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZHJvcGRvd24tXCIpLmNvbmNhdChkaXJlY3Rpb24pLCBkaXJlY3Rpb24gPT09ICdydGwnKSk7XG4gIHZhciBtZXJnZWRTaXplID0gY3VzdG9taXplU2l6ZSB8fCBzaXplO1xuICB2YXIgbWVyZ2VkQ2xhc3NOYW1lID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoKF9jbGFzc05hbWVzMiA9IHt9LCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzMiwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1sZ1wiKSwgbWVyZ2VkU2l6ZSA9PT0gJ2xhcmdlJyksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMyLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXNtXCIpLCBtZXJnZWRTaXplID09PSAnc21hbGwnKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lczIsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcnRsXCIpLCBkaXJlY3Rpb24gPT09ICdydGwnKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lczIsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItYm9yZGVybGVzc1wiKSwgIWJvcmRlcmVkKSwgX2NsYXNzTmFtZXMyKSwgY2xhc3NOYW1lKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9yY1NlbGVjdFtcImRlZmF1bHRcIl0sICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7XG4gICAgcmVmOiByZWYsXG4gICAgdmlydHVhbDogdmlydHVhbCxcbiAgICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg6IGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aFxuICB9LCBzZWxlY3RQcm9wcywge1xuICAgIHRyYW5zaXRpb25OYW1lOiB0cmFuc2l0aW9uTmFtZSxcbiAgICBsaXN0SGVpZ2h0OiBsaXN0SGVpZ2h0LFxuICAgIGxpc3RJdGVtSGVpZ2h0OiBsaXN0SXRlbUhlaWdodCxcbiAgICBtb2RlOiBtb2RlLFxuICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uLFxuICAgIGlucHV0SWNvbjogc3VmZml4SWNvbixcbiAgICBtZW51SXRlbVNlbGVjdGVkSWNvbjogaXRlbUljb24sXG4gICAgcmVtb3ZlSWNvbjogcmVtb3ZlSWNvbixcbiAgICBjbGVhckljb246IGNsZWFySWNvbixcbiAgICBub3RGb3VuZENvbnRlbnQ6IG1lcmdlZE5vdEZvdW5kLFxuICAgIGNsYXNzTmFtZTogbWVyZ2VkQ2xhc3NOYW1lLFxuICAgIGdldFBvcHVwQ29udGFpbmVyOiBnZXRQb3B1cENvbnRhaW5lciB8fCBnZXRDb250ZXh0UG9wdXBDb250YWluZXIsXG4gICAgZHJvcGRvd25DbGFzc05hbWU6IHJjU2VsZWN0UnRsRHJvcERvd25DbGFzc05hbWVcbiAgfSkpO1xufTtcblxudmFyIFNlbGVjdFJlZiA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKEludGVybmFsU2VsZWN0KTtcbnZhciBTZWxlY3QgPSBTZWxlY3RSZWY7XG5TZWxlY3QuU0VDUkVUX0NPTUJPQk9YX01PREVfRE9fTk9UX1VTRSA9IFNFQ1JFVF9DT01CT0JPWF9NT0RFX0RPX05PVF9VU0U7XG5TZWxlY3QuT3B0aW9uID0gX3JjU2VsZWN0Lk9wdGlvbjtcblNlbGVjdC5PcHRHcm91cCA9IF9yY1NlbGVjdC5PcHRHcm91cDtcbnZhciBfZGVmYXVsdCA9IFNlbGVjdDtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBnZXRJY29ucztcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9Eb3duT3V0bGluZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9Eb3duT3V0bGluZWRcIikpO1xuXG52YXIgX0xvYWRpbmdPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL0xvYWRpbmdPdXRsaW5lZFwiKSk7XG5cbnZhciBfQ2hlY2tPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL0NoZWNrT3V0bGluZWRcIikpO1xuXG52YXIgX0Nsb3NlT3V0bGluZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9DbG9zZU91dGxpbmVkXCIpKTtcblxudmFyIF9DbG9zZUNpcmNsZUZpbGxlZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL0Nsb3NlQ2lyY2xlRmlsbGVkXCIpKTtcblxudmFyIF9TZWFyY2hPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL1NlYXJjaE91dGxpbmVkXCIpKTtcblxuZnVuY3Rpb24gZ2V0SWNvbnMoX3JlZikge1xuICB2YXIgc3VmZml4SWNvbiA9IF9yZWYuc3VmZml4SWNvbixcbiAgICAgIGNsZWFySWNvbiA9IF9yZWYuY2xlYXJJY29uLFxuICAgICAgbWVudUl0ZW1TZWxlY3RlZEljb24gPSBfcmVmLm1lbnVJdGVtU2VsZWN0ZWRJY29uLFxuICAgICAgcmVtb3ZlSWNvbiA9IF9yZWYucmVtb3ZlSWNvbixcbiAgICAgIGxvYWRpbmcgPSBfcmVmLmxvYWRpbmcsXG4gICAgICBtdWx0aXBsZSA9IF9yZWYubXVsdGlwbGUsXG4gICAgICBwcmVmaXhDbHMgPSBfcmVmLnByZWZpeENscztcbiAgLy8gQ2xlYXIgSWNvblxuICB2YXIgbWVyZ2VkQ2xlYXJJY29uID0gY2xlYXJJY29uO1xuXG4gIGlmICghY2xlYXJJY29uKSB7XG4gICAgbWVyZ2VkQ2xlYXJJY29uID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX0Nsb3NlQ2lyY2xlRmlsbGVkW1wiZGVmYXVsdFwiXSwgbnVsbCk7XG4gIH0gLy8gQXJyb3cgaXRlbSBpY29uXG5cblxuICB2YXIgbWVyZ2VkU3VmZml4SWNvbiA9IG51bGw7XG5cbiAgaWYgKHN1ZmZpeEljb24gIT09IHVuZGVmaW5lZCkge1xuICAgIG1lcmdlZFN1ZmZpeEljb24gPSBzdWZmaXhJY29uO1xuICB9IGVsc2UgaWYgKGxvYWRpbmcpIHtcbiAgICBtZXJnZWRTdWZmaXhJY29uID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX0xvYWRpbmdPdXRsaW5lZFtcImRlZmF1bHRcIl0sIHtcbiAgICAgIHNwaW46IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgaWNvbkNscyA9IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc3VmZml4XCIpO1xuXG4gICAgbWVyZ2VkU3VmZml4SWNvbiA9IGZ1bmN0aW9uIG1lcmdlZFN1ZmZpeEljb24oX3JlZjIpIHtcbiAgICAgIHZhciBvcGVuID0gX3JlZjIub3BlbixcbiAgICAgICAgICBzaG93U2VhcmNoID0gX3JlZjIuc2hvd1NlYXJjaDtcblxuICAgICAgaWYgKG9wZW4gJiYgc2hvd1NlYXJjaCkge1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX1NlYXJjaE91dGxpbmVkW1wiZGVmYXVsdFwiXSwge1xuICAgICAgICAgIGNsYXNzTmFtZTogaWNvbkNsc1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9Eb3duT3V0bGluZWRbXCJkZWZhdWx0XCJdLCB7XG4gICAgICAgIGNsYXNzTmFtZTogaWNvbkNsc1xuICAgICAgfSk7XG4gICAgfTtcbiAgfSAvLyBDaGVja2VkIGl0ZW0gaWNvblxuXG5cbiAgdmFyIG1lcmdlZEl0ZW1JY29uID0gbnVsbDtcblxuICBpZiAobWVudUl0ZW1TZWxlY3RlZEljb24gIT09IHVuZGVmaW5lZCkge1xuICAgIG1lcmdlZEl0ZW1JY29uID0gbWVudUl0ZW1TZWxlY3RlZEljb247XG4gIH0gZWxzZSBpZiAobXVsdGlwbGUpIHtcbiAgICBtZXJnZWRJdGVtSWNvbiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9DaGVja091dGxpbmVkW1wiZGVmYXVsdFwiXSwgbnVsbCk7XG4gIH0gZWxzZSB7XG4gICAgbWVyZ2VkSXRlbUljb24gPSBudWxsO1xuICB9XG5cbiAgdmFyIG1lcmdlZFJlbW92ZUljb24gPSBudWxsO1xuXG4gIGlmIChyZW1vdmVJY29uICE9PSB1bmRlZmluZWQpIHtcbiAgICBtZXJnZWRSZW1vdmVJY29uID0gcmVtb3ZlSWNvbjtcbiAgfSBlbHNlIHtcbiAgICBtZXJnZWRSZW1vdmVJY29uID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX0Nsb3NlT3V0bGluZWRbXCJkZWZhdWx0XCJdLCBudWxsKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY2xlYXJJY29uOiBtZXJnZWRDbGVhckljb24sXG4gICAgc3VmZml4SWNvbjogbWVyZ2VkU3VmZml4SWNvbixcbiAgICBpdGVtSWNvbjogbWVyZ2VkSXRlbUljb24sXG4gICAgcmVtb3ZlSWNvbjogbWVyZ2VkUmVtb3ZlSWNvblxuICB9O1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCIpKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIpKTtcblxudmFyIF9pbmhlcml0czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzXCIpKTtcblxudmFyIF9jcmVhdGVTdXBlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZVN1cGVyXCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfb21pdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIm9taXQuanNcIikpO1xuXG52YXIgX2RlYm91bmNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwibG9kYXNoL2RlYm91bmNlXCIpKTtcblxudmFyIF9jb25maWdQcm92aWRlciA9IHJlcXVpcmUoXCIuLi9jb25maWctcHJvdmlkZXJcIik7XG5cbnZhciBfdHlwZSA9IHJlcXVpcmUoXCIuLi9fdXRpbC90eXBlXCIpO1xuXG52YXIgX3JlYWN0Tm9kZSA9IHJlcXVpcmUoXCIuLi9fdXRpbC9yZWFjdE5vZGVcIik7XG5cbnZhciBfX3Jlc3QgPSB2b2lkIDAgJiYgKHZvaWQgMCkuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG5cbiAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgfVxuXG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG52YXIgU3BpblNpemVzID0gKDAsIF90eXBlLnR1cGxlKSgnc21hbGwnLCAnZGVmYXVsdCcsICdsYXJnZScpOyAvLyBSZW5kZXIgaW5kaWNhdG9yXG5cbnZhciBkZWZhdWx0SW5kaWNhdG9yID0gbnVsbDtcblxuZnVuY3Rpb24gcmVuZGVySW5kaWNhdG9yKHByZWZpeENscywgcHJvcHMpIHtcbiAgdmFyIGluZGljYXRvciA9IHByb3BzLmluZGljYXRvcjtcbiAgdmFyIGRvdENsYXNzTmFtZSA9IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZG90XCIpOyAvLyBzaG91bGQgbm90IGJlIHJlbmRlciBkZWZhdWx0IGluZGljYXRvciB3aGVuIGluZGljYXRvciB2YWx1ZSBpcyBudWxsXG5cbiAgaWYgKGluZGljYXRvciA9PT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaWYgKCgwLCBfcmVhY3ROb2RlLmlzVmFsaWRFbGVtZW50KShpbmRpY2F0b3IpKSB7XG4gICAgcmV0dXJuICgwLCBfcmVhY3ROb2RlLmNsb25lRWxlbWVudCkoaW5kaWNhdG9yLCB7XG4gICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKGluZGljYXRvci5wcm9wcy5jbGFzc05hbWUsIGRvdENsYXNzTmFtZSlcbiAgICB9KTtcbiAgfVxuXG4gIGlmICgoMCwgX3JlYWN0Tm9kZS5pc1ZhbGlkRWxlbWVudCkoZGVmYXVsdEluZGljYXRvcikpIHtcbiAgICByZXR1cm4gKDAsIF9yZWFjdE5vZGUuY2xvbmVFbGVtZW50KShkZWZhdWx0SW5kaWNhdG9yLCB7XG4gICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKGRlZmF1bHRJbmRpY2F0b3IucHJvcHMuY2xhc3NOYW1lLCBkb3RDbGFzc05hbWUpXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKGRvdENsYXNzTmFtZSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1kb3Qtc3BpblwiKSlcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZG90LWl0ZW1cIilcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiaVwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWRvdC1pdGVtXCIpXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImlcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1kb3QtaXRlbVwiKVxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZG90LWl0ZW1cIilcbiAgfSkpO1xufVxuXG5mdW5jdGlvbiBzaG91bGREZWxheShzcGlubmluZywgZGVsYXkpIHtcbiAgcmV0dXJuICEhc3Bpbm5pbmcgJiYgISFkZWxheSAmJiAhaXNOYU4oTnVtYmVyKGRlbGF5KSk7XG59XG5cbnZhciBTcGluID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMyW1wiZGVmYXVsdFwiXSkoU3BpbiwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9ICgwLCBfY3JlYXRlU3VwZXIyW1wiZGVmYXVsdFwiXSkoU3Bpbik7XG5cbiAgZnVuY3Rpb24gU3Bpbihwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2syW1wiZGVmYXVsdFwiXSkodGhpcywgU3Bpbik7XG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcyk7XG5cbiAgICBfdGhpcy5kZWJvdW5jaWZ5VXBkYXRlU3Bpbm5pbmcgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgIHZhciBfcmVmID0gcHJvcHMgfHwgX3RoaXMucHJvcHMsXG4gICAgICAgICAgZGVsYXkgPSBfcmVmLmRlbGF5O1xuXG4gICAgICBpZiAoZGVsYXkpIHtcbiAgICAgICAgX3RoaXMuY2FuY2VsRXhpc3RpbmdTcGluKCk7XG5cbiAgICAgICAgX3RoaXMudXBkYXRlU3Bpbm5pbmcgPSAoMCwgX2RlYm91bmNlW1wiZGVmYXVsdFwiXSkoX3RoaXMub3JpZ2luYWxVcGRhdGVTcGlubmluZywgZGVsYXkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy51cGRhdGVTcGlubmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzcGlubmluZyA9IF90aGlzLnByb3BzLnNwaW5uaW5nO1xuICAgICAgdmFyIGN1cnJlbnRTcGlubmluZyA9IF90aGlzLnN0YXRlLnNwaW5uaW5nO1xuXG4gICAgICBpZiAoY3VycmVudFNwaW5uaW5nICE9PSBzcGlubmluZykge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgc3Bpbm5pbmc6IHNwaW5uaW5nXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5yZW5kZXJTcGluID0gZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgICAgIHZhciBnZXRQcmVmaXhDbHMgPSBfcmVmMi5nZXRQcmVmaXhDbHMsXG4gICAgICAgICAgZGlyZWN0aW9uID0gX3JlZjIuZGlyZWN0aW9uO1xuXG4gICAgICB2YXIgX2EgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBjdXN0b21pemVQcmVmaXhDbHMgPSBfYS5wcmVmaXhDbHMsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lLFxuICAgICAgICAgIHNpemUgPSBfYS5zaXplLFxuICAgICAgICAgIHRpcCA9IF9hLnRpcCxcbiAgICAgICAgICB3cmFwcGVyQ2xhc3NOYW1lID0gX2Eud3JhcHBlckNsYXNzTmFtZSxcbiAgICAgICAgICBzdHlsZSA9IF9hLnN0eWxlLFxuICAgICAgICAgIHJlc3RQcm9wcyA9IF9fcmVzdChfYSwgW1wicHJlZml4Q2xzXCIsIFwiY2xhc3NOYW1lXCIsIFwic2l6ZVwiLCBcInRpcFwiLCBcIndyYXBwZXJDbGFzc05hbWVcIiwgXCJzdHlsZVwiXSk7XG5cbiAgICAgIHZhciBzcGlubmluZyA9IF90aGlzLnN0YXRlLnNwaW5uaW5nO1xuICAgICAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygnc3BpbicsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gICAgICB2YXIgc3BpbkNsYXNzTmFtZSA9ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKHByZWZpeENscywgKF9jbGFzc05hbWVzID0ge30sICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc21cIiksIHNpemUgPT09ICdzbWFsbCcpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWxnXCIpLCBzaXplID09PSAnbGFyZ2UnKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1zcGlubmluZ1wiKSwgc3Bpbm5pbmcpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXNob3ctdGV4dFwiKSwgISF0aXApLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXJ0bFwiKSwgZGlyZWN0aW9uID09PSAncnRsJyksIF9jbGFzc05hbWVzKSwgY2xhc3NOYW1lKTsgLy8gZml4IGh0dHBzOi8vZmIubWUvcmVhY3QtdW5rbm93bi1wcm9wXG5cbiAgICAgIHZhciBkaXZQcm9wcyA9ICgwLCBfb21pdFtcImRlZmF1bHRcIl0pKHJlc3RQcm9wcywgWydzcGlubmluZycsICdkZWxheScsICdpbmRpY2F0b3InXSk7XG4gICAgICB2YXIgc3BpbkVsZW1lbnQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIGRpdlByb3BzLCB7XG4gICAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgICAgY2xhc3NOYW1lOiBzcGluQ2xhc3NOYW1lXG4gICAgICB9KSwgcmVuZGVySW5kaWNhdG9yKHByZWZpeENscywgX3RoaXMucHJvcHMpLCB0aXAgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi10ZXh0XCIpXG4gICAgICB9LCB0aXApIDogbnVsbCk7XG5cbiAgICAgIGlmIChfdGhpcy5pc05lc3RlZFBhdHRlcm4oKSkge1xuICAgICAgICB2YXIgY29udGFpbmVyQ2xhc3NOYW1lID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1jb250YWluZXJcIiksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoe30sIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItYmx1clwiKSwgc3Bpbm5pbmcpKTtcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgZGl2UHJvcHMsIHtcbiAgICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbmVzdGVkLWxvYWRpbmdcIiksIHdyYXBwZXJDbGFzc05hbWUpXG4gICAgICAgIH0pLCBzcGlubmluZyAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAga2V5OiBcImxvYWRpbmdcIlxuICAgICAgICB9LCBzcGluRWxlbWVudCksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGNvbnRhaW5lckNsYXNzTmFtZSxcbiAgICAgICAgICBrZXk6IFwiY29udGFpbmVyXCJcbiAgICAgICAgfSwgX3RoaXMucHJvcHMuY2hpbGRyZW4pKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNwaW5FbGVtZW50O1xuICAgIH07XG5cbiAgICB2YXIgc3Bpbm5pbmcgPSBwcm9wcy5zcGlubmluZyxcbiAgICAgICAgZGVsYXkgPSBwcm9wcy5kZWxheTtcbiAgICB2YXIgc2hvdWxkQmVEZWxheWVkID0gc2hvdWxkRGVsYXkoc3Bpbm5pbmcsIGRlbGF5KTtcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNwaW5uaW5nOiBzcGlubmluZyAmJiAhc2hvdWxkQmVEZWxheWVkXG4gICAgfTtcbiAgICBfdGhpcy5vcmlnaW5hbFVwZGF0ZVNwaW5uaW5nID0gX3RoaXMudXBkYXRlU3Bpbm5pbmc7XG5cbiAgICBfdGhpcy5kZWJvdW5jaWZ5VXBkYXRlU3Bpbm5pbmcocHJvcHMpO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczJbXCJkZWZhdWx0XCJdKShTcGluLCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMudXBkYXRlU3Bpbm5pbmcoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgIHRoaXMuZGVib3VuY2lmeVVwZGF0ZVNwaW5uaW5nKCk7XG4gICAgICB0aGlzLnVwZGF0ZVNwaW5uaW5nKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5jYW5jZWxFeGlzdGluZ1NwaW4oKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2FuY2VsRXhpc3RpbmdTcGluXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhbmNlbEV4aXN0aW5nU3BpbigpIHtcbiAgICAgIHZhciB1cGRhdGVTcGlubmluZyA9IHRoaXMudXBkYXRlU3Bpbm5pbmc7XG5cbiAgICAgIGlmICh1cGRhdGVTcGlubmluZyAmJiB1cGRhdGVTcGlubmluZy5jYW5jZWwpIHtcbiAgICAgICAgdXBkYXRlU3Bpbm5pbmcuY2FuY2VsKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzTmVzdGVkUGF0dGVyblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc05lc3RlZFBhdHRlcm4oKSB7XG4gICAgICByZXR1cm4gISEodGhpcy5wcm9wcyAmJiB0eXBlb2YgdGhpcy5wcm9wcy5jaGlsZHJlbiAhPT0gJ3VuZGVmaW5lZCcpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9jb25maWdQcm92aWRlci5Db25maWdDb25zdW1lciwgbnVsbCwgdGhpcy5yZW5kZXJTcGluKTtcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogXCJzZXREZWZhdWx0SW5kaWNhdG9yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldERlZmF1bHRJbmRpY2F0b3IoaW5kaWNhdG9yKSB7XG4gICAgICBkZWZhdWx0SW5kaWNhdG9yID0gaW5kaWNhdG9yO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gU3Bpbjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuU3Bpbi5kZWZhdWx0UHJvcHMgPSB7XG4gIHNwaW5uaW5nOiB0cnVlLFxuICBzaXplOiAnZGVmYXVsdCcsXG4gIHdyYXBwZXJDbGFzc05hbWU6ICcnXG59O1xudmFyIF9kZWZhdWx0ID0gU3BpbjtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBsb2NhbGUgPSB7XG4gIHBsYWNlaG9sZGVyOiAnU2VsZWN0IHRpbWUnLFxuICByYW5nZVBsYWNlaG9sZGVyOiBbJ1N0YXJ0IHRpbWUnLCAnRW5kIHRpbWUnXVxufTtcbnZhciBfZGVmYXVsdCA9IGxvY2FsZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIikpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIikpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3NcIikpO1xuXG52YXIgX2luaGVyaXRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIikpO1xuXG52YXIgX2NyZWF0ZVN1cGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlU3VwZXJcIikpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3JlYWN0RG9tID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBOb3RpY2UgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czIuZGVmYXVsdCkoTm90aWNlLCBfQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gKDAsIF9jcmVhdGVTdXBlcjIuZGVmYXVsdCkoTm90aWNlKTtcblxuICBmdW5jdGlvbiBOb3RpY2UoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazIuZGVmYXVsdCkodGhpcywgTm90aWNlKTtcbiAgICBfdGhpcyA9IF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIF90aGlzLmNsb3NlVGltZXIgPSBudWxsO1xuXG4gICAgX3RoaXMuY2xvc2UgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuY2xlYXJDbG9zZVRpbWVyKCk7XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIG9uQ2xvc2UgPSBfdGhpcyRwcm9wcy5vbkNsb3NlLFxuICAgICAgICAgIG5vdGljZUtleSA9IF90aGlzJHByb3BzLm5vdGljZUtleTtcblxuICAgICAgaWYgKG9uQ2xvc2UpIHtcbiAgICAgICAgb25DbG9zZShub3RpY2VLZXkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5zdGFydENsb3NlVGltZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMucHJvcHMuZHVyYXRpb24pIHtcbiAgICAgICAgX3RoaXMuY2xvc2VUaW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpcy5jbG9zZSgpO1xuICAgICAgICB9LCBfdGhpcy5wcm9wcy5kdXJhdGlvbiAqIDEwMDApO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5jbGVhckNsb3NlVGltZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMuY2xvc2VUaW1lcikge1xuICAgICAgICBjbGVhclRpbWVvdXQoX3RoaXMuY2xvc2VUaW1lcik7XG4gICAgICAgIF90aGlzLmNsb3NlVGltZXIgPSBudWxsO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMi5kZWZhdWx0KShOb3RpY2UsIFt7XG4gICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5zdGFydENsb3NlVGltZXIoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmR1cmF0aW9uICE9PSBwcmV2UHJvcHMuZHVyYXRpb24gfHwgdGhpcy5wcm9wcy51cGRhdGVNYXJrICE9PSBwcmV2UHJvcHMudXBkYXRlTWFyaykge1xuICAgICAgICB0aGlzLnJlc3RhcnRDbG9zZVRpbWVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5jbGVhckNsb3NlVGltZXIoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVzdGFydENsb3NlVGltZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVzdGFydENsb3NlVGltZXIoKSB7XG4gICAgICB0aGlzLmNsZWFyQ2xvc2VUaW1lcigpO1xuICAgICAgdGhpcy5zdGFydENsb3NlVGltZXIoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgX3RoaXMkcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBwcmVmaXhDbHMgPSBfdGhpcyRwcm9wczIucHJlZml4Q2xzLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzMi5jbGFzc05hbWUsXG4gICAgICAgICAgY2xvc2FibGUgPSBfdGhpcyRwcm9wczIuY2xvc2FibGUsXG4gICAgICAgICAgY2xvc2VJY29uID0gX3RoaXMkcHJvcHMyLmNsb3NlSWNvbixcbiAgICAgICAgICBzdHlsZSA9IF90aGlzJHByb3BzMi5zdHlsZSxcbiAgICAgICAgICBvbkNsaWNrID0gX3RoaXMkcHJvcHMyLm9uQ2xpY2ssXG4gICAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wczIuY2hpbGRyZW4sXG4gICAgICAgICAgaG9sZGVyID0gX3RoaXMkcHJvcHMyLmhvbGRlcjtcbiAgICAgIHZhciBjb21wb25lbnRDbGFzcyA9IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbm90aWNlXCIpO1xuICAgICAgdmFyIGRhdGFPckFyaWFBdHRyaWJ1dGVQcm9wcyA9IE9iamVjdC5rZXlzKHRoaXMucHJvcHMpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBrZXkpIHtcbiAgICAgICAgaWYgKGtleS5zdWJzdHIoMCwgNSkgPT09ICdkYXRhLScgfHwga2V5LnN1YnN0cigwLCA1KSA9PT0gJ2FyaWEtJyB8fCBrZXkgPT09ICdyb2xlJykge1xuICAgICAgICAgIGFjY1trZXldID0gX3RoaXMyLnByb3BzW2tleV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwge30pO1xuICAgICAgdmFyIG5vZGUgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lcy5kZWZhdWx0KShjb21wb25lbnRDbGFzcywgY2xhc3NOYW1lLCAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh7fSwgXCJcIi5jb25jYXQoY29tcG9uZW50Q2xhc3MsIFwiLWNsb3NhYmxlXCIpLCBjbG9zYWJsZSkpLFxuICAgICAgICBzdHlsZTogc3R5bGUsXG4gICAgICAgIG9uTW91c2VFbnRlcjogdGhpcy5jbGVhckNsb3NlVGltZXIsXG4gICAgICAgIG9uTW91c2VMZWF2ZTogdGhpcy5zdGFydENsb3NlVGltZXIsXG4gICAgICAgIG9uQ2xpY2s6IG9uQ2xpY2tcbiAgICAgIH0sIGRhdGFPckFyaWFBdHRyaWJ1dGVQcm9wcyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KGNvbXBvbmVudENsYXNzLCBcIi1jb250ZW50XCIpXG4gICAgICB9LCBjaGlsZHJlbiksIGNsb3NhYmxlID8gUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge1xuICAgICAgICB0YWJJbmRleDogMCxcbiAgICAgICAgb25DbGljazogdGhpcy5jbG9zZSxcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChjb21wb25lbnRDbGFzcywgXCItY2xvc2VcIilcbiAgICAgIH0sIGNsb3NlSWNvbiB8fCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQoY29tcG9uZW50Q2xhc3MsIFwiLWNsb3NlLXhcIilcbiAgICAgIH0pKSA6IG51bGwpO1xuXG4gICAgICBpZiAoaG9sZGVyKSB7XG4gICAgICAgIHJldHVybiBfcmVhY3REb20uZGVmYXVsdC5jcmVhdGVQb3J0YWwobm9kZSwgaG9sZGVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBOb3RpY2U7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE5vdGljZTtcbk5vdGljZS5kZWZhdWx0UHJvcHMgPSB7XG4gIG9uQ2xvc2U6IGZ1bmN0aW9uIG9uQ2xvc2UoKSB7fSxcbiAgZHVyYXRpb246IDEuNVxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1c2VOb3RpZmljYXRpb247XG5cbnZhciBfdG9Db25zdW1hYmxlQXJyYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheVwiKSk7XG5cbnZhciBfc2xpY2VkVG9BcnJheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIikpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX05vdGljZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vTm90aWNlXCIpKTtcblxuZnVuY3Rpb24gdXNlTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbkluc3RhbmNlKSB7XG4gIHZhciBjcmVhdGVkUmVmID0gUmVhY3QudXNlUmVmKHt9KTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUoW10pLFxuICAgICAgX1JlYWN0JHVzZVN0YXRlMiA9ICgwLCBfc2xpY2VkVG9BcnJheTIuZGVmYXVsdCkoX1JlYWN0JHVzZVN0YXRlLCAyKSxcbiAgICAgIGVsZW1lbnRzID0gX1JlYWN0JHVzZVN0YXRlMlswXSxcbiAgICAgIHNldEVsZW1lbnRzID0gX1JlYWN0JHVzZVN0YXRlMlsxXTtcblxuICBmdW5jdGlvbiBub3RpZnkobm90aWNlUHJvcHMpIHtcbiAgICBub3RpZmljYXRpb25JbnN0YW5jZS5hZGQobm90aWNlUHJvcHMsIGZ1bmN0aW9uIChkaXYsIHByb3BzKSB7XG4gICAgICB2YXIga2V5ID0gcHJvcHMua2V5O1xuXG4gICAgICBpZiAoZGl2ICYmICFjcmVhdGVkUmVmLmN1cnJlbnRba2V5XSkge1xuICAgICAgICB2YXIgbm90aWNlRWxlID0gUmVhY3QuY3JlYXRlRWxlbWVudChfTm90aWNlLmRlZmF1bHQsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgaG9sZGVyOiBkaXZcbiAgICAgICAgfSkpO1xuICAgICAgICBjcmVhdGVkUmVmLmN1cnJlbnRba2V5XSA9IG5vdGljZUVsZTtcbiAgICAgICAgc2V0RWxlbWVudHMoZnVuY3Rpb24gKG9yaWdpbkVsZW1lbnRzKSB7XG4gICAgICAgICAgcmV0dXJuIFtdLmNvbmNhdCgoMCwgX3RvQ29uc3VtYWJsZUFycmF5Mi5kZWZhdWx0KShvcmlnaW5FbGVtZW50cyksIFtub3RpY2VFbGVdKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gW25vdGlmeSwgUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgZWxlbWVudHMpXTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfZGVmYXVsdCA9IHtcbiAgLy8gT3B0aW9ucy5qc3hcbiAgaXRlbXNfcGVyX3BhZ2U6ICcvIHBhZ2UnLFxuICBqdW1wX3RvOiAnR28gdG8nLFxuICBqdW1wX3RvX2NvbmZpcm06ICdjb25maXJtJyxcbiAgcGFnZTogJycsXG4gIC8vIFBhZ2luYXRpb24uanN4XG4gIHByZXZfcGFnZTogJ1ByZXZpb3VzIFBhZ2UnLFxuICBuZXh0X3BhZ2U6ICdOZXh0IFBhZ2UnLFxuICBwcmV2XzU6ICdQcmV2aW91cyA1IFBhZ2VzJyxcbiAgbmV4dF81OiAnTmV4dCA1IFBhZ2VzJyxcbiAgcHJldl8zOiAnUHJldmlvdXMgMyBQYWdlcycsXG4gIG5leHRfMzogJ05leHQgMyBQYWdlcydcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBsb2NhbGUgPSB7XG4gIGxvY2FsZTogJ2VuX1VTJyxcbiAgdG9kYXk6ICdUb2RheScsXG4gIG5vdzogJ05vdycsXG4gIGJhY2tUb1RvZGF5OiAnQmFjayB0byB0b2RheScsXG4gIG9rOiAnT2snLFxuICBjbGVhcjogJ0NsZWFyJyxcbiAgbW9udGg6ICdNb250aCcsXG4gIHllYXI6ICdZZWFyJyxcbiAgdGltZVNlbGVjdDogJ3NlbGVjdCB0aW1lJyxcbiAgZGF0ZVNlbGVjdDogJ3NlbGVjdCBkYXRlJyxcbiAgd2Vla1NlbGVjdDogJ0Nob29zZSBhIHdlZWsnLFxuICBtb250aFNlbGVjdDogJ0Nob29zZSBhIG1vbnRoJyxcbiAgeWVhclNlbGVjdDogJ0Nob29zZSBhIHllYXInLFxuICBkZWNhZGVTZWxlY3Q6ICdDaG9vc2UgYSBkZWNhZGUnLFxuICB5ZWFyRm9ybWF0OiAnWVlZWScsXG4gIGRhdGVGb3JtYXQ6ICdNL0QvWVlZWScsXG4gIGRheUZvcm1hdDogJ0QnLFxuICBkYXRlVGltZUZvcm1hdDogJ00vRC9ZWVlZIEhIOm1tOnNzJyxcbiAgbW9udGhCZWZvcmVZZWFyOiB0cnVlLFxuICBwcmV2aW91c01vbnRoOiAnUHJldmlvdXMgbW9udGggKFBhZ2VVcCknLFxuICBuZXh0TW9udGg6ICdOZXh0IG1vbnRoIChQYWdlRG93biknLFxuICBwcmV2aW91c1llYXI6ICdMYXN0IHllYXIgKENvbnRyb2wgKyBsZWZ0KScsXG4gIG5leHRZZWFyOiAnTmV4dCB5ZWFyIChDb250cm9sICsgcmlnaHQpJyxcbiAgcHJldmlvdXNEZWNhZGU6ICdMYXN0IGRlY2FkZScsXG4gIG5leHREZWNhZGU6ICdOZXh0IGRlY2FkZScsXG4gIHByZXZpb3VzQ2VudHVyeTogJ0xhc3QgY2VudHVyeScsXG4gIG5leHRDZW50dXJ5OiAnTmV4dCBjZW50dXJ5J1xufTtcbnZhciBfZGVmYXVsdCA9IGxvY2FsZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=