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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aW1lbGluZS9UaW1lbGluZVBvc3RzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvX3V0aWwvZGV2V2FybmluZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL191dGlsL3JlYWN0Tm9kZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL191dGlsL3Jlc3BvbnNpdmVPYnNlcnZlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvX3V0aWwvdHlwZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2NhbGVuZGFyL2xvY2FsZS9lbl9VUy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2NvbmZpZy1wcm92aWRlci9TaXplQ29udGV4dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2NvbmZpZy1wcm92aWRlci9jb250ZXh0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvY29uZmlnLXByb3ZpZGVyL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvY29uZmlnLXByb3ZpZGVyL3JlbmRlckVtcHR5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvZGF0ZS1waWNrZXIvbG9jYWxlL2VuX1VTLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvZW1wdHkvZW1wdHkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9lbXB0eS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2VtcHR5L3NpbXBsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2dyaWQvUm93Q29udGV4dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2dyaWQvY29sLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvZ3JpZC9ob29rcy91c2VCcmVha3BvaW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvZ3JpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2dyaWQvcm93LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbGlzdC9JdGVtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2xvY2FsZS1wcm92aWRlci9Mb2NhbGVSZWNlaXZlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2xvY2FsZS1wcm92aWRlci9jb250ZXh0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbG9jYWxlLXByb3ZpZGVyL2RlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9sb2NhbGUtcHJvdmlkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9sb2NhbGUvZGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL21lc3NhZ2UvaG9va3MvdXNlTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL21lc3NhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9tb2RhbC9sb2NhbGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9ub3RpZmljYXRpb24vaG9va3MvdXNlTm90aWZpY2F0aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbm90aWZpY2F0aW9uL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvcGFnaW5hdGlvbi9NaW5pU2VsZWN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvcGFnaW5hdGlvbi9QYWdpbmF0aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvcGFnaW5hdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL3NlbGVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL3NlbGVjdC91dGlscy9pY29uVXRpbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL3NwaW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi90aW1lLXBpY2tlci9sb2NhbGUvZW5fVVMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1ub3RpZmljYXRpb24vbGliL05vdGljZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLW5vdGlmaWNhdGlvbi9saWIvdXNlTm90aWZpY2F0aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtcGFnaW5hdGlvbi9saWIvbG9jYWxlL2VuX1VTLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtcGlja2VyL2xpYi9sb2NhbGUvZW5fVVMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiaW8iLCJUaW1lbGluZVBvc3RzIiwiZGF0YSIsIm9uVXBkYXRlVGltZWxpbmUiLCJvblJhdGVQb3N0IiwibW9kYWxBY3Rpb25zIiwic2hhcmVBY3Rpb24iLCJsaWtlQWN0aW9uIiwiZGVsZXRlQWN0aW9uIiwiZGlzYWJsZURlbGV0ZSIsInBhcmVudERpdiIsImF1dGgiLCJjb25zb2xlIiwibG9nIiwiaW1hZ2VzTGlzdCIsImNvbmNhdCIsImFwcGx5IiwibWFwIiwiaXRlbSIsInR5cGUiLCJpbWFnZXMiLCJ2aWRlb0xpc3QiLCJ2aWRlb3MiLCJ1c2VTdGF0ZSIsImFjdGl2ZVBvc3RJZCIsInNldEFjdGl2ZVBvc3RJZCIsIm1vZGFsTW9kZSIsInNldE1vZGFsTW9kZSIsInZpZGVvUmVmIiwidXNlTW9kYWwiLCJvcGVuIiwiaGlkZVBob3RvTW9kYWwiLCJzaG93UGhvdG9Nb2RhbCIsImhhbmRsZVNob3dDb21tZW50TW9kYWwiLCJpZCIsInRvZ2dsZUNvbW1lbnRTaG93IiwiaW5kZXgiLCJzZXRDb21tZW50U2hvdyIsImNvbW1lbnRTaG93IiwiZ2V0TGlrZUFjdGlvblVzZXJJbmZvIiwiZmluYWxEYXRhIiwiYWNjb3VudCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwic3R5bGVzIiwiYWN0aXZpdHlfY29udGVudCIsImNyZWF0ZWRBdCIsImNvbW1lbnRzIiwidGV4dCIsInNoYXJlZCIsImNvbW1lbnRlZCIsImJsb2JfdG4iLCJ0aHVtYm5haWwiLCJyZWFjdGlvbnMiLCJ0ZXh0X2xpbmtzIiwicHVzaCIsInByb2ZpbGVVcmwiLCJ1bmRlZmluZWQiLCJwcm9maWxlUGhvdG8iLCJzcmMiLCJmdWxsTmFtZSIsInVzZXJuYW1lIiwibGlrZURhdGEiLCJmaWx0ZXIiLCJyZWFjdGlvbiIsImhlYXJ0RGF0YSIsIndvd0RhdGEiLCJoYWhhRGF0YSIsInNhZERhdGEiLCJwb3N0IiwiZm9udFNpemUiLCJtYXJnaW5SaWdodCIsImN1cnNvciIsInBvc3RfaGVhZGVyIiwiYXZhdGFyIiwidXNlcl9pbmZvIiwidXNlcl9uYW1lIiwiZGF0ZSIsIm1vbWVudCIsImZvcm1hdCIsImRlc2NyaXB0aW9uIiwibGVuZ3RoIiwidmlkZW8iLCJpIiwicGxheWVyIiwicGxheSIsImVsIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImN1cnJlbnQiLCJwb3NpdGlvblkiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ5IiwiaW5uZXJIZWlnaHQiLCJwYXVzZSIsInZpc2liaWxpdHkiLCJwb3N0X2NvbnRlbnQiLCJjbGFzc25hbWVzIiwiaW1hZ2UiLCJncmlkXzIiLCJncmlkXzMiLCJncmlkXzQiLCJpbWFnZV9pdGVtIiwibWFpbl9waG90byIsInNob3dfbW9yZSIsImhlaWdodCIsInJlYWN0aW9uc19zaGFyZXNfc3RhdHVzIiwicmVhY3Rpb25zX3N0YXR1cyIsInJhdGluZyIsInRlcm0iLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImJpbmRBY3Rpb25DcmVhdG9ycyIsInNob3ciLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsTUFBTSxHQUFHQyx3REFBRSxDQUFDLDJCQUFELENBQWpCOztBQUVBLFNBQVNDLGFBQVQsT0FBMko7QUFBQTs7QUFBQTs7QUFBQSxNQUFsSUMsSUFBa0ksUUFBbElBLElBQWtJO0FBQUEsTUFBNUhDLGdCQUE0SCxRQUE1SEEsZ0JBQTRIO0FBQUEsTUFBMUdDLFVBQTBHLFFBQTFHQSxVQUEwRztBQUFBLE1BQTlGQyxZQUE4RixRQUE5RkEsWUFBOEY7QUFBQSxNQUFoRkMsWUFBZ0YsUUFBaEZBLFdBQWdGO0FBQUEsTUFBbkVDLFdBQW1FLFFBQW5FQSxVQUFtRTtBQUFBLE1BQXZEQyxZQUF1RCxRQUF2REEsWUFBdUQ7QUFB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QUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUNwSmE7O0FBRWIsOEJBQThCLG1CQUFPLENBQUMsc0hBQStDOztBQUVyRiw2QkFBNkIsbUJBQU8sQ0FBQyxvSEFBOEM7O0FBRW5GO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUEsaURBQWlELG1CQUFPLENBQUMsNEdBQTBDOztBQUVuRyw2Q0FBNkMsbUJBQU8sQ0FBQyxvR0FBc0M7O0FBRTNGLG9DQUFvQyxtQkFBTyxDQUFDLDRDQUFPOztBQUVuRCxxQ0FBcUMsbUJBQU8sQ0FBQyw4REFBVTs7QUFFdkQ7QUFDQSxrQ0FBa0M7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZFQUE2RTtBQUM3RTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUM1Q2E7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQjs7Ozs7Ozs7Ozs7O0FDcEJhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLmQ3ZGFhYzRmMTJlODY5OWVjMjA0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL3RpbWVsaW5lLXBvc3QubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyBQb3BvdmVyLCBUb29sdGlwIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgQ29tbWVudHMgZnJvbSAnLi9Db21tZW50cyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgQWN0aW9ucyBmcm9tICcuL0FjdGlvbnMnO1xyXG5pbXBvcnQgVHJpbVRleHQgZnJvbSAnLi4vY29tbW9uL1RyaW1UZXh0JztcclxuaW1wb3J0IHsgdXNlTW9kYWwgfSBmcm9tICdyZWFjdC1tb2RhbC1ob29rJztcclxuaW1wb3J0IENvbW1lbnRzTW9kYWwgZnJvbSAnLi9Db21tZW50c01vZGFsJztcclxuaW1wb3J0IFBob3Rvc01vZGFsIGZyb20gJy4uL3Byb2ZpbGUvUGhvdG9zTW9kYWwnO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJy4uL2NvbW1vbi9BdmF0YXInO1xyXG5pbXBvcnQgeyBzaG93IH0gZnJvbSAncmVkdXgtbW9kYWwnO1xyXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBBUEkgZnJvbSAnY29uZmlncy9BUEknO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICd2aWRlby1yZWFjdCc7XHJcbmltcG9ydCB7IFBob3Rvc1Byb3ZpZGVyIH0gIGZyb20gJ2NvbnRhaW5lcnMvUGhvdG9zL3N0b3JhZ2UvUGhvdG9Db250ZXh0JztcclxuaW1wb3J0IHsgTGlua1ByZXZpZXcgfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9MaW5rUHJldmlldyc7XHJcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcclxuaW1wb3J0IEl0ZW0gZnJvbSAnYW50ZC9saWIvbGlzdC9JdGVtJztcclxuY29uc3Qgc29ja2V0ID0gaW8oJ2h0dHBzOi8vd3d3LmZyZWVza2llcy5jb20nKTtcclxuXHJcbmZ1bmN0aW9uIFRpbWVsaW5lUG9zdHMoeyBkYXRhLCBvblVwZGF0ZVRpbWVsaW5lLCBvblJhdGVQb3N0LCBtb2RhbEFjdGlvbnMsIHNoYXJlQWN0aW9uLCBsaWtlQWN0aW9uLCBkZWxldGVBY3Rpb24sIGRpc2FibGVEZWxldGUsIHBhcmVudERpdiA9IG51bGwsIGF1dGggfSkge1xyXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIGNvbnN0IGltYWdlc0xpc3QgPSBbXS5jb25jYXQuYXBwbHkoW10sIGRhdGEubWFwKGl0ZW0gPT4gXHJcbiAgICB7IFxyXG4gICAgICAgIGlmKGl0ZW0udHlwZSA9PT0gJ1Bob3RvJykge1xyXG4gICAgICAgICAgcmV0dXJuICBpdGVtO1xyXG4gICAgICAgIH0gZWxzZSBpZihpdGVtLnR5cGUgPT09ICdWaWRlb0NsaXAnKSB7XHJcbiAgICAgICAgICByZXR1cm4gIFtdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gIGl0ZW0uaW1hZ2VzIFxyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbiAgKSlcclxuXHJcbiAgY29uc3QgdmlkZW9MaXN0ID0gW10uY29uY2F0LmFwcGx5KFtdLCBkYXRhLm1hcChpdGVtID0+IHtcclxuICAgIGlmKGl0ZW0udHlwZSA9PT0gJ1ZpZGVvQ2xpcCcpIHtcclxuICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gaXRlbS52aWRlb3M7XHJcbiAgICB9XHJcbiAgfSkpXHJcblxyXG4gIGNvbnNvbGUubG9nKCd2aWRlb0xpc3QnLCB2aWRlb0xpc3QpO1xyXG4gIFxyXG4gIC8vIGNvbnN0IG5ld0ltYWdlTGlzdCA9ICBpbWFnZXNMaXN0LmZpbHRlcihpdGVtID0+IHR5cGVvZiBpdGVtLmlkICE9PSAndW5kZWZpbmVkJyk7XHJcbiAgXHJcbiAgY29uc3QgW2FjdGl2ZVBvc3RJZCwgc2V0QWN0aXZlUG9zdElkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFttb2RhbE1vZGUsIHNldE1vZGFsTW9kZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGxldCB2aWRlb1JlZiA9IFtdO1xyXG4gIGNvbnN0IFtzaG93UGhvdG9Nb2RhbCwgaGlkZVBob3RvTW9kYWxdID0gdXNlTW9kYWwoKHsgaW46IG9wZW4gfSkgPT4gKFxyXG4gICAgPFBob3Rvc1Byb3ZpZGVyPlxyXG4gICAgICA8UGhvdG9zTW9kYWxcclxuICAgICAgICB0aXRsZT1cIlBob3RvIGRldGFpbFwiXHJcbiAgICAgICAgc2hvd01vZGFsPXtvcGVufVxyXG4gICAgICAgIG9uQ2xvc2U9e2hpZGVQaG90b01vZGFsfVxyXG4gICAgICAgIG9uUmF0ZVBvc3Q9e29uUmF0ZVBvc3R9XHJcbiAgICAgICAgZGF0YT17aW1hZ2VzTGlzdH1cclxuICAgICAgICBsaWtlQWN0aW9uPXtsaWtlQWN0aW9ufVxyXG4gICAgICAgIHNoYXJlQWN0aW9uPXtzaGFyZUFjdGlvbn1cclxuICAgICAgICBvblVwZGF0ZVRpbWVsaW5lPXtvblVwZGF0ZVRpbWVsaW5lfVxyXG4gICAgICAgIGF1dGg9e2F1dGh9XHJcbiAgICAgIC8+XHJcbiAgICA8L1Bob3Rvc1Byb3ZpZGVyPlxyXG4gICkpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTaG93Q29tbWVudE1vZGFsID0gKGlkKSA9PiB7XHJcbiAgICBzZXRBY3RpdmVQb3N0SWQoaWQpO1xyXG4gICAgc2V0TW9kYWxNb2RlKCFtb2RhbE1vZGUpO1xyXG4gICAgLy9tb2RhbEFjdGlvbnMuc2hvdygnY29tbWVudE1vZGFsJywgeyBpZDogYWN0aXZlUG9zdElkIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZ2dsZUNvbW1lbnRTaG93ID0gKGluZGV4KSA9PlxyXG4gICAgc2V0Q29tbWVudFNob3coY29tbWVudFNob3cgPT09IGluZGV4ID8gbnVsbCA6IGluZGV4KTtcclxuXHJcbiAgY29uc3QgZ2V0TGlrZUFjdGlvblVzZXJJbmZvID0gKGRhdGEpID0+IHtcclxuICAgIHZhciBmaW5hbERhdGEgPSAnJztcclxuICAgIGRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICBmaW5hbERhdGEgPSBmaW5hbERhdGEgKyAnICcgKyBpdGVtLmFjY291bnQuZmlyc3ROYW1lICsgJycgKyBpdGVtLmFjY291bnQubGFzdE5hbWUgO1xyXG4gICAgfSlcclxuICAgIHJldHVybiBmaW5hbERhdGE7XHJcbiAgfVxyXG5cclxuIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpdml0eV9jb250ZW50fSA+XHJcbiAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICB2YXIgeyBhY2NvdW50LCBjcmVhdGVkQXQsIHR5cGUsIGNvbW1lbnRzLCB0ZXh0LCBpbWFnZXMsIHZpZGVvcywgc2hhcmVkLCBjb21tZW50ZWQsIGJsb2JfdG4sIHRodW1ibmFpbCwgcmVhY3Rpb25zLCB0ZXh0X2xpbmtzIH0gPSBpdGVtO1xyXG4gICAgICAgIHZpZGVvUmVmLnB1c2gobnVsbCk7XHJcbiAgICAgICAgY29uc3QgcHJvZmlsZVVybCA9IGFjY291bnQgIT09IG51bGwgJiYgYWNjb3VudCAhPT0gdW5kZWZpbmVkID8gYCR7YWNjb3VudC5wcm9maWxlUGhvdG8/LnNyY31gIDogbnVsbFxyXG4gICAgICAgIGNvbnN0IGZ1bGxOYW1lID0gYCR7YWNjb3VudD8uZmlyc3ROYW1lfSAke2FjY291bnQ/Lmxhc3ROYW1lfWA7XHJcbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSBhY2NvdW50Py51c2VybmFtZTtcclxuICAgICAgICBjb25zdCBsaWtlRGF0YSA9IHJlYWN0aW9ucz8gcmVhY3Rpb25zPy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlYWN0aW9uID09ICdMSUtFJyk6W107XHJcbiAgICAgICAgY29uc3QgaGVhcnREYXRhID0gIHJlYWN0aW9ucz8gcmVhY3Rpb25zPy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlYWN0aW9uID09ICdIRUFSVCcpOltdO1xyXG4gICAgICAgIGNvbnN0IHdvd0RhdGEgPSByZWFjdGlvbnMgPyByZWFjdGlvbnM/LmZpbHRlcihpdGVtID0+IGl0ZW0ucmVhY3Rpb24gPT0gJ1dPVycpOltdO1xyXG4gICAgICAgIGNvbnN0IGhhaGFEYXRhID0gcmVhY3Rpb25zID8gcmVhY3Rpb25zPy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlYWN0aW9uID09ICdIQUhBJyk6W107XHJcbiAgICAgICAgY29uc3Qgc2FkRGF0YSA9IHJlYWN0aW9ucyA/IHJlYWN0aW9ucz8uZmlsdGVyKGl0ZW0gPT4gaXRlbS5yZWFjdGlvbiA9PSAnU0FEJyk6W107XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdH0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgIHshZGlzYWJsZURlbGV0ZT88Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ3dpbmRvdy1jbG9zZSddfSBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGZsb2F0OiAncmlnaHQnLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAyNSxcclxuICAgICAgICAgICAgICBtYXJnaW5SaWdodDogMTAsXHJcbiAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlQWN0aW9uKGl0ZW0uaWQsIHR5cGUpfVxyXG4gICAgICAgICAgICAvPjpudWxsfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RfaGVhZGVyfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn0+XHJcbiAgICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgIHRleHQ9e2Z1bGxOYW1lfVxyXG4gICAgICAgICAgICAgICAgICB1cmw9e3Byb2ZpbGVVcmx9XHJcbiAgICAgICAgICAgICAgICAgIHNpemU9ezYwfVxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJTaXplPXszfVxyXG4gICAgICAgICAgICAgICAgICB1c2VybmFtZT17dXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfaW5mb30+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy51c2VyX25hbWV9PntmdWxsTmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kYXRlfT5cclxuICAgICAgICAgICAgICB7bW9tZW50KGNyZWF0ZWRBdCkuZm9ybWF0KCdNTU0gREQsIFlZWVkgLSBISDptbSBBJyl9XHJcbiAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cclxuICAgICAgICAgICAgICA8VHJpbVRleHQgbGltaXQ9ezExMH0+XHJcbiAgICAgICAgICAgICAgICB7IHR5cGUhPT0nU2hhcmUnP3RleHQ6c2hhcmVkLnRleHQgfVxyXG4gICAgICAgICAgICAgIDwvVHJpbVRleHQ+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHt0ZXh0X2xpbmtzICYmIHRleHRfbGlua3MubWFwKGl0ZW0gPT4gXHJcbiAgICAgICAgICAgICAgPExpbmtQcmV2aWV3IGRhdGE9e2l0ZW19Lz4gIFxyXG4gICAgICAgICAgICApIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHt2aWRlb3MgJiYgdmlkZW9zLmxlbmd0aCA+IDAgJiYgdmlkZW9zLm1hcCgodmlkZW8sIGkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aWRlb3N9IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8dmlkZW8gaWQ9J2hscy1leGFtcGxlJyAgY2xhc3NOYW1lPVwidmlkZW8tanMgdmpzLWRlZmF1bHQtc2tpblwiIHdpZHRoPVwiOTYwXCIgaGVpZ2h0PVwiNTQwXCIgY29udHJvbHM+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIHR5cGU9XCJhcHBsaWNhdGlvbi94LW1wZWdVUkxcIiBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke3ZpZGVvLnNyY31gfSA+PC9zb3VyY2U+XHJcbiAgICAgICAgICAgICAgICAgIDwvdmlkZW8+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgPFBsYXllclxyXG4gICAgICAgICAgICAgICAgICAgIHBsYXlzSW5saW5lXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b3BsYXlcclxuICAgICAgICAgICAgICAgICAgICBtdXRlZFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc3Rlcj17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7dmlkZW8udGh1bWJuYWlsLnNyY31gfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17cGxheWVyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmKHZpZGVvUmVmICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvUmVmW2luZGV4XSA9IHBsYXllcjsgXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHt2aWRlby5zcmN9YH0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9QbGF5ZXI+IFxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHZpZGVvUmVmW2luZGV4XS5wbGF5KCl9IHJlZj17ZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZWwpIHJldHVybjsgXHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIC8vIGlmKHZpZGVvUmVmICYmIHZpZGVvUmVmW2luZGV4XSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gICB2YXIgcG9zaXRpb25ZID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueTtcclxuICAgICAgICAgICAgICAgICAgICAgIC8vICAgaWYocG9zaXRpb25ZID4gKHdpbmRvdy5pbm5lckhlaWdodC8yKSAmJiBwb3NpdGlvblkgPCB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB2aWRlb1JlZltpbmRleF0ucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHZpZGVvUmVmW2luZGV4XS5wYXVzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBpZihwYXJlbnREaXYgIT09IG51bGwgJiYgcGFyZW50RGl2Py5jdXJyZW50ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwYXJlbnREaXY/LmN1cnJlbnQ/LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodmlkZW9SZWYgJiYgdmlkZW9SZWZbaW5kZXhdICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvc2l0aW9uWSA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocG9zaXRpb25ZID4gKHdpbmRvdy5pbm5lckhlaWdodC8yKSAmJiBwb3NpdGlvblkgPCB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvUmVmW2luZGV4XS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvUmVmW2luZGV4XS5wYXVzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB2aXNpYmlsaXR5OiAnaGlkZGVuJyB9fVxyXG4gICAgICAgICAgICAgICAgICA+QnV0dG9uIEZvciBwb3NpdGlvbiBvZiBWaWRlbzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICApfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHtpbWFnZXMgJiYgaW1hZ2VzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0X2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmltYWdlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgW3N0eWxlcy5ncmlkXzJdOiBpbWFnZXMubGVuZ3RoID09IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgW3N0eWxlcy5ncmlkXzNdOiBpbWFnZXMubGVuZ3RoID09IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgW3N0eWxlcy5ncmlkXzRdOiBpbWFnZXMubGVuZ3RoID09IDQsXHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7aW1hZ2VzLmxlbmd0aCA9PSAxICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX2l0ZW19IG9uQ2xpY2s9e3Nob3dQaG90b01vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMF0uYmxvYl90bj9pbWFnZXNbMF0uYmxvYl90bjppbWFnZXNbMF0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICB7aW1hZ2VzLmxlbmd0aCA9PSAyICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmltYWdlX2l0ZW0sIHN0eWxlcy5tYWluX3Bob3RvKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c2hvd1Bob3RvTW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMF0uYmxvYl90bj9pbWFnZXNbMF0uYmxvYl90bjppbWFnZXNbMF0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfaXRlbX0gb25DbGljaz17c2hvd1Bob3RvTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzFdLmJsb2JfdG4/aW1hZ2VzWzFdLmJsb2JfdG46aW1hZ2VzWzFdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICB7aW1hZ2VzLmxlbmd0aCA9PSAzICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmltYWdlX2l0ZW0sIHN0eWxlcy5tYWluX3Bob3RvKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c2hvd1Bob3RvTW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMF0uYmxvYl90bj9pbWFnZXNbMF0uYmxvYl90bjppbWFnZXNbMF0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfaXRlbX0gb25DbGljaz17c2hvd1Bob3RvTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzFdLmJsb2JfdG4/aW1hZ2VzWzFdLmJsb2JfdG46aW1hZ2VzWzFdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX2l0ZW19IG9uQ2xpY2s9e3Nob3dQaG90b01vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1syXS5ibG9iX3RuP2ltYWdlc1syXS5ibG9iX3RuOmltYWdlc1syXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAge2ltYWdlcy5sZW5ndGggPj0gNCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5pbWFnZV9pdGVtLCBzdHlsZXMubWFpbl9waG90byl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dQaG90b01vZGFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzBdLmJsb2JfdG4/aW1hZ2VzWzBdLmJsb2JfdG46aW1hZ2VzWzBdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX2l0ZW19IG9uQ2xpY2s9e3Nob3dQaG90b01vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1sxXS5ibG9iX3RuP2ltYWdlc1sxXS5ibG9iX3RuOmltYWdlc1sxXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZV9pdGVtfSBvbkNsaWNrPXtzaG93UGhvdG9Nb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMl0uYmxvYl90bj9pbWFnZXNbMl0uYmxvYl90bjppbWFnZXNbMl0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfaXRlbX0gb25DbGljaz17c2hvd1Bob3RvTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNob3dfbW9yZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+KzQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzNdLmJsb2JfdG4/aW1hZ2VzWzNdLmJsb2JfdG46aW1hZ2VzWzNdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogNTAgfX0gLz5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHt0eXBlID09IFwiUGhvdG9cIj8gYmxvYl90biAmJiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RfY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5pbWFnZSl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfaXRlbX0gb25DbGljaz17c2hvd1Bob3RvTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7YmxvYl90bn1gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+OlxyXG4gICAgICAgICAgICBibG9iX3RuICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmlkZW9zfSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICA8UGxheWVyXHJcbiAgICAgICAgICAgICAgICBwbGF5c0lubGluZVxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlcclxuICAgICAgICAgICAgICAgIG11dGVkXHJcbiAgICAgICAgICAgICAgICBwb3N0ZXI9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke3RodW1ibmFpbC5zcmN9YH1cclxuICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7YmxvYl90bn1gfVxyXG4gICAgICAgICAgICAgICAgcmVmPXtwbGF5ZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAvLyB2aWRlb1JlZiA9IHBsYXllcjtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlYWN0aW9uc19zaGFyZXNfc3RhdHVzfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlYWN0aW9uc19zdGF0dXN9PlxyXG4gICAgICAgICAgICAgICAgeyBsaWtlRGF0YS5sZW5ndGggPiAwICYmIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPXtnZXRMaWtlQWN0aW9uVXNlckluZm8obGlrZURhdGEpfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ3RodW1icy11cCddfSBzaXplPVwiMXhcIiAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcid9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2xpa2VEYXRhLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD48Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHsgaGFoYURhdGEubGVuZ3RoID4gMCAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKGhhaGFEYXRhKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdncmluJ119IHNpemU9XCIxeFwiICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJ319Lz4gXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2hhaGFEYXRhLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7IGhlYXJ0RGF0YS5sZW5ndGggPiAwICYmIDw+IFxyXG4gICAgICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKGhlYXJ0RGF0YSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAnaGVhcnQnXX0gc2l6ZT1cIjF4XCIgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInfX0vPiBcclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aGVhcnREYXRhLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7IHdvd0RhdGEubGVuZ3RoID4gMCAmJiA8PiBcclxuICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9e2dldExpa2VBY3Rpb25Vc2VySW5mbyh3b3dEYXRhKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdsYXVnaCddfSBzaXplPVwiMXhcIiAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcid9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3dvd0RhdGEubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICA8Lz4gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7IHNhZERhdGEubGVuZ3RoID4gMCAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKHNhZERhdGEpfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ2Zyb3duJ119IHNpemU9XCIxeFwiICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJ319Lz4gXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3NhZERhdGEubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxBY3Rpb25zXHJcbiAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgdHlwZT17aXRlbS50eXBlfVxyXG4gICAgICAgICAgICAgIHBvc3RSYXRlPXtpdGVtLnJhdGluZ31cclxuICAgICAgICAgICAgICBjb21tZW50cz17Y29tbWVudHN9XHJcbiAgICAgICAgICAgICAgb25SYXRlUG9zdD17b25SYXRlUG9zdH1cclxuICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XHJcbiAgICAgICAgICAgICAgbGlrZUFjdGlvbj17KHRlcm0pID0+IGxpa2VBY3Rpb24odHlwZSwgaXRlbS5pZCwgdGVybSl9XHJcbiAgICAgICAgICAgICAgc2hhcmVBY3Rpb249eygpID0+IHNoYXJlQWN0aW9uKHR5cGUgIT09ICdTaGFyZSc/dHlwZTpzaGFyZWQudHlwZSwgdHlwZSAhPT0gJ1NoYXJlJz9pdGVtLmlkOnNoYXJlZC5pZCl9XHJcbiAgICAgICAgICAgICAgYWN0aW9ucz17XHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7IGhhbmRsZVNob3dDb21tZW50TW9kYWwoaXRlbS5pZCkgfSBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxDb21tZW50c1xyXG4gICAgICAgICAgICAgIGlkPXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgIHR5cGU9e2l0ZW0udHlwZX1cclxuICAgICAgICAgICAgICBkYXRhPXtjb21tZW50c31cclxuICAgICAgICAgICAgICBvblVwZGF0ZVRpbWVsaW5lPXtvblVwZGF0ZVRpbWVsaW5lfVxyXG4gICAgICAgICAgICAgIGFjdGl2ZVBvc3RJZD17YWN0aXZlUG9zdElkfVxyXG4gICAgICAgICAgICAgIG1vZGFsTW9kZT17bW9kYWxNb2RlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG5cclxuICAgICAgPENvbW1lbnRzTW9kYWxcclxuICAgICAgICBhY3RpdmVQb3N0SWQ9e2FjdGl2ZVBvc3RJZH1cclxuICAgICAgICBwb3N0RGF0YT17ZGF0YX1cclxuICAgICAgICBvblVwZGF0ZVRpbWVsaW5lPXtvblVwZGF0ZVRpbWVsaW5lfVxyXG4gICAgICAgIHRpdGxlPVwiQ29tbWVudHNcIlxyXG4gICAgICAgIC8vIHNob3dNb2RhbD17b3Blbn1cclxuICAgICAgICAvLyBvbkNsb3NlPXtoaWRlQ29tbWVudE1vZGFsfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gIG1vZGFsQWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKHsgc2hvdyB9LCBkaXNwYXRjaClcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoVGltZWxpbmVQb3N0cyk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwicmVzZXRXYXJuZWRcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3dhcm5pbmcucmVzZXRXYXJuZWQ7XG4gIH1cbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfd2FybmluZyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyYy11dGlsL2xpYi93YXJuaW5nXCIpKTtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQodmFsaWQsIGNvbXBvbmVudCwgbWVzc2FnZSkge1xuICAoMCwgX3dhcm5pbmdbXCJkZWZhdWx0XCJdKSh2YWxpZCwgXCJbYW50ZDogXCIuY29uY2F0KGNvbXBvbmVudCwgXCJdIFwiKS5jb25jYXQobWVzc2FnZSkpO1xufTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVwbGFjZUVsZW1lbnQgPSByZXBsYWNlRWxlbWVudDtcbmV4cG9ydHMuY2xvbmVFbGVtZW50ID0gY2xvbmVFbGVtZW50O1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudCA9IHZvaWQgMDtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIGlzVmFsaWRFbGVtZW50ID0gUmVhY3QuaXNWYWxpZEVsZW1lbnQ7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50ID0gaXNWYWxpZEVsZW1lbnQ7XG5cbmZ1bmN0aW9uIHJlcGxhY2VFbGVtZW50KGVsZW1lbnQsIHJlcGxhY2VtZW50LCBwcm9wcykge1xuICBpZiAoIWlzVmFsaWRFbGVtZW50KGVsZW1lbnQpKSByZXR1cm4gcmVwbGFjZW1lbnQ7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY2xvbmVFbGVtZW50KGVsZW1lbnQsIHR5cGVvZiBwcm9wcyA9PT0gJ2Z1bmN0aW9uJyA/IHByb3BzKGVsZW1lbnQucHJvcHMgfHwge30pIDogcHJvcHMpO1xufVxuXG5mdW5jdGlvbiBjbG9uZUVsZW1lbnQoZWxlbWVudCwgcHJvcHMpIHtcbiAgcmV0dXJuIHJlcGxhY2VFbGVtZW50KGVsZW1lbnQsIGVsZW1lbnQsIHByb3BzKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGV4cG9ydHMucmVzcG9uc2l2ZU1hcCA9IGV4cG9ydHMucmVzcG9uc2l2ZUFycmF5ID0gdm9pZCAwO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIikpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIHJlc3BvbnNpdmVBcnJheSA9IFsneHhsJywgJ3hsJywgJ2xnJywgJ21kJywgJ3NtJywgJ3hzJ107XG5leHBvcnRzLnJlc3BvbnNpdmVBcnJheSA9IHJlc3BvbnNpdmVBcnJheTtcbnZhciByZXNwb25zaXZlTWFwID0ge1xuICB4czogJyhtYXgtd2lkdGg6IDU3NXB4KScsXG4gIHNtOiAnKG1pbi13aWR0aDogNTc2cHgpJyxcbiAgbWQ6ICcobWluLXdpZHRoOiA3NjhweCknLFxuICBsZzogJyhtaW4td2lkdGg6IDk5MnB4KScsXG4gIHhsOiAnKG1pbi13aWR0aDogMTIwMHB4KScsXG4gIHh4bDogJyhtaW4td2lkdGg6IDE2MDBweCknXG59O1xuZXhwb3J0cy5yZXNwb25zaXZlTWFwID0gcmVzcG9uc2l2ZU1hcDtcbnZhciBzdWJzY3JpYmVycyA9IG5ldyBNYXAoKTtcbnZhciBzdWJVaWQgPSAtMTtcbnZhciBzY3JlZW5zID0ge307XG52YXIgcmVzcG9uc2l2ZU9ic2VydmUgPSB7XG4gIG1hdGNoSGFuZGxlcnM6IHt9LFxuICBkaXNwYXRjaDogZnVuY3Rpb24gZGlzcGF0Y2gocG9pbnRNYXApIHtcbiAgICBzY3JlZW5zID0gcG9pbnRNYXA7XG4gICAgc3Vic2NyaWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoZnVuYykge1xuICAgICAgcmV0dXJuIGZ1bmMoc2NyZWVucyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHN1YnNjcmliZXJzLnNpemUgPj0gMTtcbiAgfSxcbiAgc3Vic2NyaWJlOiBmdW5jdGlvbiBzdWJzY3JpYmUoZnVuYykge1xuICAgIGlmICghc3Vic2NyaWJlcnMuc2l6ZSkgdGhpcy5yZWdpc3RlcigpO1xuICAgIHN1YlVpZCArPSAxO1xuICAgIHN1YnNjcmliZXJzLnNldChzdWJVaWQsIGZ1bmMpO1xuICAgIGZ1bmMoc2NyZWVucyk7XG4gICAgcmV0dXJuIHN1YlVpZDtcbiAgfSxcbiAgdW5zdWJzY3JpYmU6IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKHRva2VuKSB7XG4gICAgc3Vic2NyaWJlcnNbXCJkZWxldGVcIl0odG9rZW4pO1xuICAgIGlmICghc3Vic2NyaWJlcnMuc2l6ZSkgdGhpcy51bnJlZ2lzdGVyKCk7XG4gIH0sXG4gIHVucmVnaXN0ZXI6IGZ1bmN0aW9uIHVucmVnaXN0ZXIoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIE9iamVjdC5rZXlzKHJlc3BvbnNpdmVNYXApLmZvckVhY2goZnVuY3Rpb24gKHNjcmVlbikge1xuICAgICAgdmFyIG1hdGNoTWVkaWFRdWVyeSA9IHJlc3BvbnNpdmVNYXBbc2NyZWVuXTtcbiAgICAgIHZhciBoYW5kbGVyID0gX3RoaXMubWF0Y2hIYW5kbGVyc1ttYXRjaE1lZGlhUXVlcnldO1xuICAgICAgaGFuZGxlciA9PT0gbnVsbCB8fCBoYW5kbGVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBoYW5kbGVyLm1xbC5yZW1vdmVMaXN0ZW5lcihoYW5kbGVyID09PSBudWxsIHx8IGhhbmRsZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGhhbmRsZXIubGlzdGVuZXIpO1xuICAgIH0pO1xuICAgIHN1YnNjcmliZXJzLmNsZWFyKCk7XG4gIH0sXG4gIHJlZ2lzdGVyOiBmdW5jdGlvbiByZWdpc3RlcigpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIE9iamVjdC5rZXlzKHJlc3BvbnNpdmVNYXApLmZvckVhY2goZnVuY3Rpb24gKHNjcmVlbikge1xuICAgICAgdmFyIG1hdGNoTWVkaWFRdWVyeSA9IHJlc3BvbnNpdmVNYXBbc2NyZWVuXTtcblxuICAgICAgdmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gbGlzdGVuZXIoX3JlZikge1xuICAgICAgICB2YXIgbWF0Y2hlcyA9IF9yZWYubWF0Y2hlcztcblxuICAgICAgICBfdGhpczIuZGlzcGF0Y2goKDAsIF9leHRlbmRzM1tcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczNbXCJkZWZhdWx0XCJdKSh7fSwgc2NyZWVucyksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoe30sIHNjcmVlbiwgbWF0Y2hlcykpKTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBtcWwgPSB3aW5kb3cubWF0Y2hNZWRpYShtYXRjaE1lZGlhUXVlcnkpO1xuICAgICAgbXFsLmFkZExpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICAgIF90aGlzMi5tYXRjaEhhbmRsZXJzW21hdGNoTWVkaWFRdWVyeV0gPSB7XG4gICAgICAgIG1xbDogbXFsLFxuICAgICAgICBsaXN0ZW5lcjogbGlzdGVuZXJcbiAgICAgIH07XG4gICAgICBsaXN0ZW5lcihtcWwpO1xuICAgIH0pO1xuICB9XG59O1xudmFyIF9kZWZhdWx0ID0gcmVzcG9uc2l2ZU9ic2VydmU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy50dXBsZU51bSA9IGV4cG9ydHMudHVwbGUgPSB2b2lkIDA7XG5cbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ2MTc2MTY1L3dheXMtdG8tZ2V0LXN0cmluZy1saXRlcmFsLXR5cGUtb2YtYXJyYXktdmFsdWVzLXdpdGhvdXQtZW51bS1vdmVyaGVhZFxudmFyIHR1cGxlID0gZnVuY3Rpb24gdHVwbGUoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gYXJncztcbn07XG5cbmV4cG9ydHMudHVwbGUgPSB0dXBsZTtcblxudmFyIHR1cGxlTnVtID0gZnVuY3Rpb24gdHVwbGVOdW0oKSB7XG4gIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgfVxuXG4gIHJldHVybiBhcmdzO1xufTtcblxuZXhwb3J0cy50dXBsZU51bSA9IHR1cGxlTnVtOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2VuX1VTID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vZGF0ZS1waWNrZXIvbG9jYWxlL2VuX1VTXCIpKTtcblxudmFyIF9kZWZhdWx0ID0gX2VuX1VTW1wiZGVmYXVsdFwiXTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGV4cG9ydHMuU2l6ZUNvbnRleHRQcm92aWRlciA9IHZvaWQgMDtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIFNpemVDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQodW5kZWZpbmVkKTtcblxudmFyIFNpemVDb250ZXh0UHJvdmlkZXIgPSBmdW5jdGlvbiBTaXplQ29udGV4dFByb3ZpZGVyKF9yZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIHNpemUgPSBfcmVmLnNpemU7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTaXplQ29udGV4dC5Db25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKG9yaWdpblNpemUpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU2l6ZUNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgIHZhbHVlOiBzaXplIHx8IG9yaWdpblNpemVcbiAgICB9LCBjaGlsZHJlbik7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5TaXplQ29udGV4dFByb3ZpZGVyID0gU2l6ZUNvbnRleHRQcm92aWRlcjtcbnZhciBfZGVmYXVsdCA9IFNpemVDb250ZXh0O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLndpdGhDb25maWdDb25zdW1lciA9IHdpdGhDb25maWdDb25zdW1lcjtcbmV4cG9ydHMuQ29uZmlnQ29uc3VtZXIgPSBleHBvcnRzLkNvbmZpZ0NvbnRleHQgPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3JlbmRlckVtcHR5ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9yZW5kZXJFbXB0eVwiKSk7XG5cbnZhciBDb25maWdDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQoe1xuICAvLyBXZSBwcm92aWRlIGEgZGVmYXVsdCBmdW5jdGlvbiBmb3IgQ29udGV4dCB3aXRob3V0IHByb3ZpZGVyXG4gIGdldFByZWZpeENsczogZnVuY3Rpb24gZ2V0UHJlZml4Q2xzKHN1ZmZpeENscywgY3VzdG9taXplUHJlZml4Q2xzKSB7XG4gICAgaWYgKGN1c3RvbWl6ZVByZWZpeENscykgcmV0dXJuIGN1c3RvbWl6ZVByZWZpeENscztcbiAgICByZXR1cm4gc3VmZml4Q2xzID8gXCJhbnQtXCIuY29uY2F0KHN1ZmZpeENscykgOiAnYW50JztcbiAgfSxcbiAgcmVuZGVyRW1wdHk6IF9yZW5kZXJFbXB0eVtcImRlZmF1bHRcIl1cbn0pO1xuZXhwb3J0cy5Db25maWdDb250ZXh0ID0gQ29uZmlnQ29udGV4dDtcbnZhciBDb25maWdDb25zdW1lciA9IENvbmZpZ0NvbnRleHQuQ29uc3VtZXI7XG4vKiogQGRlcHJlY2F0ZWQgVXNlIGhvb2tzIGluc3RlYWQuIFRoaXMgaXMgYSBsZWdhY3kgZnVuY3Rpb24gKi9cblxuZXhwb3J0cy5Db25maWdDb25zdW1lciA9IENvbmZpZ0NvbnN1bWVyO1xuXG5mdW5jdGlvbiB3aXRoQ29uZmlnQ29uc3VtZXIoY29uZmlnKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3aXRoQ29uZmlnQ29uc3VtZXJGdW5jKENvbXBvbmVudCkge1xuICAgIC8vIFdyYXAgd2l0aCBDb25maWdDb25zdW1lci4gU2luY2Ugd2UgbmVlZCBjb21wYXRpYmxlIHdpdGggcmVhY3QgMTUsIGJlIGNhcmUgd2hlbiB1c2luZyByZWYgbWV0aG9kc1xuICAgIHZhciBTRkMgPSBmdW5jdGlvbiBTRkMocHJvcHMpIHtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb25maWdDb25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKGNvbmZpZ1Byb3BzKSB7XG4gICAgICAgIHZhciBiYXNpY1ByZWZpeENscyA9IGNvbmZpZy5wcmVmaXhDbHM7XG4gICAgICAgIHZhciBnZXRQcmVmaXhDbHMgPSBjb25maWdQcm9wcy5nZXRQcmVmaXhDbHM7XG4gICAgICAgIHZhciBjdXN0b21pemVQcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHM7XG4gICAgICAgIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoYmFzaWNQcmVmaXhDbHMsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgY29uZmlnUHJvcHMsIHByb3BzLCB7XG4gICAgICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHNcbiAgICAgICAgfSkpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHZhciBjb25zID0gQ29tcG9uZW50LmNvbnN0cnVjdG9yO1xuICAgIHZhciBuYW1lID0gY29ucyAmJiBjb25zLmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdDb21wb25lbnQnO1xuICAgIFNGQy5kaXNwbGF5TmFtZSA9IFwid2l0aENvbmZpZ0NvbnN1bWVyKFwiLmNvbmNhdChuYW1lLCBcIilcIik7XG4gICAgcmV0dXJuIFNGQztcbiAgfTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJDb25maWdDb25zdW1lclwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfY29udGV4dC5Db25maWdDb25zdW1lcjtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJDb25maWdDb250ZXh0XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9jb250ZXh0LkNvbmZpZ0NvbnRleHQ7XG4gIH1cbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBleHBvcnRzLmNvbmZpZ0NvbnN1bWVyUHJvcHMgPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3JjRmllbGRGb3JtID0gcmVxdWlyZShcInJjLWZpZWxkLWZvcm1cIik7XG5cbnZhciBfbG9jYWxlUHJvdmlkZXIgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vbG9jYWxlLXByb3ZpZGVyXCIpKTtcblxudmFyIF9Mb2NhbGVSZWNlaXZlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2xvY2FsZS1wcm92aWRlci9Mb2NhbGVSZWNlaXZlclwiKSk7XG5cbnZhciBfY29udGV4dCA9IHJlcXVpcmUoXCIuL2NvbnRleHRcIik7XG5cbnZhciBfU2l6ZUNvbnRleHQgPSByZXF1aXJlKFwiLi9TaXplQ29udGV4dFwiKTtcblxudmFyIF9tZXNzYWdlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbWVzc2FnZVwiKSk7XG5cbnZhciBfbm90aWZpY2F0aW9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbm90aWZpY2F0aW9uXCIpKTtcblxuLy8gVE9ETzogcmVtb3ZlIHRoaXMgbGludFxuLy8gU0ZDIGhhcyBzcGVjaWZpZWQgYSBkaXNwbGF5TmFtZSwgYnV0IG5vdCB3b3JrZWQuXG5cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2Rpc3BsYXktbmFtZSAqL1xudmFyIGNvbmZpZ0NvbnN1bWVyUHJvcHMgPSBbJ2dldFRhcmdldENvbnRhaW5lcicsICdnZXRQb3B1cENvbnRhaW5lcicsICdyb290UHJlZml4Q2xzJywgJ2dldFByZWZpeENscycsICdyZW5kZXJFbXB0eScsICdjc3AnLCAnYXV0b0luc2VydFNwYWNlSW5CdXR0b24nLCAnbG9jYWxlJywgJ3BhZ2VIZWFkZXInXTtcbmV4cG9ydHMuY29uZmlnQ29uc3VtZXJQcm9wcyA9IGNvbmZpZ0NvbnN1bWVyUHJvcHM7XG5cbnZhciBDb25maWdQcm92aWRlciA9IGZ1bmN0aW9uIENvbmZpZ1Byb3ZpZGVyKHByb3BzKSB7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHByb3BzLmRpcmVjdGlvbikge1xuICAgICAgX21lc3NhZ2VbXCJkZWZhdWx0XCJdLmNvbmZpZyh7XG4gICAgICAgIHJ0bDogcHJvcHMuZGlyZWN0aW9uID09PSAncnRsJ1xuICAgICAgfSk7XG5cbiAgICAgIF9ub3RpZmljYXRpb25bXCJkZWZhdWx0XCJdLmNvbmZpZyh7XG4gICAgICAgIHJ0bDogcHJvcHMuZGlyZWN0aW9uID09PSAncnRsJ1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBbcHJvcHMuZGlyZWN0aW9uXSk7XG5cbiAgdmFyIGdldFByZWZpeENsc1dyYXBwZXIgPSBmdW5jdGlvbiBnZXRQcmVmaXhDbHNXcmFwcGVyKGNvbnRleHQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN1ZmZpeENscywgY3VzdG9taXplUHJlZml4Q2xzKSB7XG4gICAgICB2YXIgcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzO1xuICAgICAgaWYgKGN1c3RvbWl6ZVByZWZpeENscykgcmV0dXJuIGN1c3RvbWl6ZVByZWZpeENscztcbiAgICAgIHZhciBtZXJnZWRQcmVmaXhDbHMgPSBwcmVmaXhDbHMgfHwgY29udGV4dC5nZXRQcmVmaXhDbHMoJycpO1xuICAgICAgcmV0dXJuIHN1ZmZpeENscyA/IFwiXCIuY29uY2F0KG1lcmdlZFByZWZpeENscywgXCItXCIpLmNvbmNhdChzdWZmaXhDbHMpIDogbWVyZ2VkUHJlZml4Q2xzO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIHJlbmRlclByb3ZpZGVyID0gZnVuY3Rpb24gcmVuZGVyUHJvdmlkZXIoY29udGV4dCwgbGVnYWN5TG9jYWxlKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIGdldFRhcmdldENvbnRhaW5lciA9IHByb3BzLmdldFRhcmdldENvbnRhaW5lcixcbiAgICAgICAgZ2V0UG9wdXBDb250YWluZXIgPSBwcm9wcy5nZXRQb3B1cENvbnRhaW5lcixcbiAgICAgICAgcmVuZGVyRW1wdHkgPSBwcm9wcy5yZW5kZXJFbXB0eSxcbiAgICAgICAgY3NwID0gcHJvcHMuY3NwLFxuICAgICAgICBhdXRvSW5zZXJ0U3BhY2VJbkJ1dHRvbiA9IHByb3BzLmF1dG9JbnNlcnRTcGFjZUluQnV0dG9uLFxuICAgICAgICBmb3JtID0gcHJvcHMuZm9ybSxcbiAgICAgICAgaW5wdXQgPSBwcm9wcy5pbnB1dCxcbiAgICAgICAgbG9jYWxlID0gcHJvcHMubG9jYWxlLFxuICAgICAgICBwYWdlSGVhZGVyID0gcHJvcHMucGFnZUhlYWRlcixcbiAgICAgICAgY29tcG9uZW50U2l6ZSA9IHByb3BzLmNvbXBvbmVudFNpemUsXG4gICAgICAgIGRpcmVjdGlvbiA9IHByb3BzLmRpcmVjdGlvbixcbiAgICAgICAgc3BhY2UgPSBwcm9wcy5zcGFjZSxcbiAgICAgICAgdmlydHVhbCA9IHByb3BzLnZpcnR1YWwsXG4gICAgICAgIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aCA9IHByb3BzLmRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aDtcbiAgICB2YXIgY29uZmlnID0gKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgY29udGV4dCksIHtcbiAgICAgIGdldFByZWZpeENsczogZ2V0UHJlZml4Q2xzV3JhcHBlcihjb250ZXh0KSxcbiAgICAgIGNzcDogY3NwLFxuICAgICAgYXV0b0luc2VydFNwYWNlSW5CdXR0b246IGF1dG9JbnNlcnRTcGFjZUluQnV0dG9uLFxuICAgICAgbG9jYWxlOiBsb2NhbGUgfHwgbGVnYWN5TG9jYWxlLFxuICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb24sXG4gICAgICBzcGFjZTogc3BhY2UsXG4gICAgICB2aXJ0dWFsOiB2aXJ0dWFsLFxuICAgICAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoOiBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGhcbiAgICB9KTtcblxuICAgIGlmIChnZXRUYXJnZXRDb250YWluZXIpIHtcbiAgICAgIGNvbmZpZy5nZXRUYXJnZXRDb250YWluZXIgPSBnZXRUYXJnZXRDb250YWluZXI7XG4gICAgfVxuXG4gICAgaWYgKGdldFBvcHVwQ29udGFpbmVyKSB7XG4gICAgICBjb25maWcuZ2V0UG9wdXBDb250YWluZXIgPSBnZXRQb3B1cENvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBpZiAocmVuZGVyRW1wdHkpIHtcbiAgICAgIGNvbmZpZy5yZW5kZXJFbXB0eSA9IHJlbmRlckVtcHR5O1xuICAgIH1cblxuICAgIGlmIChwYWdlSGVhZGVyKSB7XG4gICAgICBjb25maWcucGFnZUhlYWRlciA9IHBhZ2VIZWFkZXI7XG4gICAgfVxuXG4gICAgaWYgKGlucHV0KSB7XG4gICAgICBjb25maWcuaW5wdXQgPSBpbnB1dDtcbiAgICB9XG5cbiAgICBpZiAoZm9ybSkge1xuICAgICAgY29uZmlnLmZvcm0gPSBmb3JtO1xuICAgIH1cblxuICAgIHZhciBjaGlsZE5vZGUgPSBjaGlsZHJlbjsgLy8gQWRkaXRpb25hbCBGb3JtIHByb3ZpZGVyXG5cbiAgICB2YXIgdmFsaWRhdGVNZXNzYWdlcyA9IHt9O1xuXG4gICAgaWYgKGxvY2FsZSAmJiBsb2NhbGUuRm9ybSAmJiBsb2NhbGUuRm9ybS5kZWZhdWx0VmFsaWRhdGVNZXNzYWdlcykge1xuICAgICAgdmFsaWRhdGVNZXNzYWdlcyA9IGxvY2FsZS5Gb3JtLmRlZmF1bHRWYWxpZGF0ZU1lc3NhZ2VzO1xuICAgIH1cblxuICAgIGlmIChmb3JtICYmIGZvcm0udmFsaWRhdGVNZXNzYWdlcykge1xuICAgICAgdmFsaWRhdGVNZXNzYWdlcyA9ICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIHZhbGlkYXRlTWVzc2FnZXMpLCBmb3JtLnZhbGlkYXRlTWVzc2FnZXMpO1xuICAgIH1cblxuICAgIGlmIChPYmplY3Qua2V5cyh2YWxpZGF0ZU1lc3NhZ2VzKS5sZW5ndGggPiAwKSB7XG4gICAgICBjaGlsZE5vZGUgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfcmNGaWVsZEZvcm0uRm9ybVByb3ZpZGVyLCB7XG4gICAgICAgIHZhbGlkYXRlTWVzc2FnZXM6IHZhbGlkYXRlTWVzc2FnZXNcbiAgICAgIH0sIGNoaWxkcmVuKTtcbiAgICB9XG5cbiAgICB2YXIgY2hpbGRyZW5XaXRoTG9jYWxlID0gbG9jYWxlID09PSB1bmRlZmluZWQgPyBjaGlsZE5vZGUgOiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfbG9jYWxlUHJvdmlkZXJbXCJkZWZhdWx0XCJdLCB7XG4gICAgICBsb2NhbGU6IGxvY2FsZSB8fCBsZWdhY3lMb2NhbGUsXG4gICAgICBfQU5UX01BUktfXzogX2xvY2FsZVByb3ZpZGVyLkFOVF9NQVJLXG4gICAgfSwgY2hpbGROb2RlKTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX1NpemVDb250ZXh0LlNpemVDb250ZXh0UHJvdmlkZXIsIHtcbiAgICAgIHNpemU6IGNvbXBvbmVudFNpemVcbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfY29udGV4dC5Db25maWdDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICB2YWx1ZTogY29uZmlnXG4gICAgfSwgY2hpbGRyZW5XaXRoTG9jYWxlKSk7XG4gIH07XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9Mb2NhbGVSZWNlaXZlcltcImRlZmF1bHRcIl0sIG51bGwsIGZ1bmN0aW9uIChfLCBfXywgbGVnYWN5TG9jYWxlKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9jb250ZXh0LkNvbmZpZ0NvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgcmV0dXJuIHJlbmRlclByb3ZpZGVyKGNvbnRleHQsIGxlZ2FjeUxvY2FsZSk7XG4gICAgfSk7XG4gIH0pO1xufTtcbi8qKiBAcHJpdmF0ZSBpbnRlcm5hbCB1c2FnZS4gZG8gbm90IHVzZSBpbiB5b3VyIHByb2R1Y3Rpb24gKi9cblxuXG5Db25maWdQcm92aWRlci5Db25maWdDb250ZXh0ID0gX2NvbnRleHQuQ29uZmlnQ29udGV4dDtcbnZhciBfZGVmYXVsdCA9IENvbmZpZ1Byb3ZpZGVyO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9lbXB0eSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2VtcHR5XCIpKTtcblxudmFyIF8gPSByZXF1aXJlKFwiLlwiKTtcblxudmFyIHJlbmRlckVtcHR5ID0gZnVuY3Rpb24gcmVuZGVyRW1wdHkoY29tcG9uZW50TmFtZSkge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXy5Db25maWdDb25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgZ2V0UHJlZml4Q2xzID0gX3JlZi5nZXRQcmVmaXhDbHM7XG4gICAgdmFyIHByZWZpeCA9IGdldFByZWZpeENscygnZW1wdHknKTtcblxuICAgIHN3aXRjaCAoY29tcG9uZW50TmFtZSkge1xuICAgICAgY2FzZSAnVGFibGUnOlxuICAgICAgY2FzZSAnTGlzdCc6XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfZW1wdHlbXCJkZWZhdWx0XCJdLCB7XG4gICAgICAgICAgaW1hZ2U6IF9lbXB0eVtcImRlZmF1bHRcIl0uUFJFU0VOVEVEX0lNQUdFX1NJTVBMRVxuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnU2VsZWN0JzpcbiAgICAgIGNhc2UgJ1RyZWVTZWxlY3QnOlxuICAgICAgY2FzZSAnQ2FzY2FkZXInOlxuICAgICAgY2FzZSAnVHJhbnNmZXInOlxuICAgICAgY2FzZSAnTWVudGlvbnMnOlxuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX2VtcHR5W1wiZGVmYXVsdFwiXSwge1xuICAgICAgICAgIGltYWdlOiBfZW1wdHlbXCJkZWZhdWx0XCJdLlBSRVNFTlRFRF9JTUFHRV9TSU1QTEUsXG4gICAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXgsIFwiLXNtYWxsXCIpXG4gICAgICAgIH0pO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX2VtcHR5W1wiZGVmYXVsdFwiXSwgbnVsbCk7XG4gICAgfVxuICB9KTtcbn07XG5cbnZhciBfZGVmYXVsdCA9IHJlbmRlckVtcHR5O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfZW5fVVMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyYy1waWNrZXIvbGliL2xvY2FsZS9lbl9VU1wiKSk7XG5cbnZhciBfZW5fVVMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vdGltZS1waWNrZXIvbG9jYWxlL2VuX1VTXCIpKTtcblxuLy8gTWVyZ2UgaW50byBhIGxvY2FsZSBvYmplY3RcbnZhciBsb2NhbGUgPSB7XG4gIGxhbmc6ICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7XG4gICAgcGxhY2Vob2xkZXI6ICdTZWxlY3QgZGF0ZScsXG4gICAgeWVhclBsYWNlaG9sZGVyOiAnU2VsZWN0IHllYXInLFxuICAgIHF1YXJ0ZXJQbGFjZWhvbGRlcjogJ1NlbGVjdCBxdWFydGVyJyxcbiAgICBtb250aFBsYWNlaG9sZGVyOiAnU2VsZWN0IG1vbnRoJyxcbiAgICB3ZWVrUGxhY2Vob2xkZXI6ICdTZWxlY3Qgd2VlaycsXG4gICAgcmFuZ2VQbGFjZWhvbGRlcjogWydTdGFydCBkYXRlJywgJ0VuZCBkYXRlJ10sXG4gICAgcmFuZ2VZZWFyUGxhY2Vob2xkZXI6IFsnU3RhcnQgeWVhcicsICdFbmQgeWVhciddLFxuICAgIHJhbmdlTW9udGhQbGFjZWhvbGRlcjogWydTdGFydCBtb250aCcsICdFbmQgbW9udGgnXSxcbiAgICByYW5nZVdlZWtQbGFjZWhvbGRlcjogWydTdGFydCB3ZWVrJywgJ0VuZCB3ZWVrJ11cbiAgfSwgX2VuX1VTW1wiZGVmYXVsdFwiXSksXG4gIHRpbWVQaWNrZXJMb2NhbGU6ICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgX2VuX1VTMltcImRlZmF1bHRcIl0pXG59OyAvLyBBbGwgc2V0dGluZ3MgYXQ6XG4vLyBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2Jsb2IvbWFzdGVyL2NvbXBvbmVudHMvZGF0ZS1waWNrZXIvbG9jYWxlL2V4YW1wbGUuanNvblxuXG52YXIgX2RlZmF1bHQgPSBsb2NhbGU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY29uZmlnUHJvdmlkZXIgPSByZXF1aXJlKFwiLi4vY29uZmlnLXByb3ZpZGVyXCIpO1xuXG52YXIgRW1wdHkgPSBmdW5jdGlvbiBFbXB0eSgpIHtcbiAgdmFyIF9SZWFjdCR1c2VDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29udGV4dCksXG4gICAgICBnZXRQcmVmaXhDbHMgPSBfUmVhY3QkdXNlQ29udGV4dC5nZXRQcmVmaXhDbHM7XG5cbiAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygnZW1wdHktaW1nLWRlZmF1bHQnKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIHtcbiAgICBjbGFzc05hbWU6IHByZWZpeENscyxcbiAgICB3aWR0aDogXCIxODRcIixcbiAgICBoZWlnaHQ6IFwiMTUyXCIsXG4gICAgdmlld0JveDogXCIwIDAgMTg0IDE1MlwiLFxuICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIsIHtcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBmaWxsUnVsZTogXCJldmVub2RkXCJcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIsIHtcbiAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKDI0IDMxLjY3KVwiXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZWxsaXBzZVwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWVsbGlwc2VcIiksXG4gICAgY3g6IFwiNjcuNzk3XCIsXG4gICAgY3k6IFwiMTA2Ljg5XCIsXG4gICAgcng6IFwiNjcuNzk3XCIsXG4gICAgcnk6IFwiMTIuNjY4XCJcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXBhdGgtMVwiKSxcbiAgICBkOiBcIk0xMjIuMDM0IDY5LjY3NEw5OC4xMDkgNDAuMjI5Yy0xLjE0OC0xLjM4Ni0yLjgyNi0yLjIyNS00LjU5My0yLjIyNWgtNTEuNDRjLTEuNzY2IDAtMy40NDQuODM5LTQuNTkyIDIuMjI1TDEzLjU2IDY5LjY3NHYxNS4zODNoMTA4LjQ3NVY2OS42NzR6XCJcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXBhdGgtMlwiKSxcbiAgICBkOiBcIk0xMDEuNTM3IDg2LjIxNEw4MC42MyA2MS4xMDJjLTEuMDAxLTEuMjA3LTIuNTA3LTEuODY3LTQuMDQ4LTEuODY3SDMxLjcyNGMtMS41NCAwLTMuMDQ3LjY2LTQuMDQ4IDEuODY3TDYuNzY5IDg2LjIxNHYxMy43OTJoOTQuNzY4Vjg2LjIxNHpcIixcbiAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKDEzLjU2KVwiXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1wYXRoLTNcIiksXG4gICAgZDogXCJNMzMuODMgMGg2Ny45MzNhNCA0IDAgMCAxIDQgNHY5My4zNDRhNCA0IDAgMCAxLTQgNEgzMy44M2E0IDQgMCAwIDEtNC00VjRhNCA0IDAgMCAxIDQtNHpcIlxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcGF0aC00XCIpLFxuICAgIGQ6IFwiTTQyLjY3OCA5Ljk1M2g1MC4yMzdhMiAyIDAgMCAxIDIgMlYzNi45MWEyIDIgMCAwIDEtMiAySDQyLjY3OGEyIDIgMCAwIDEtMi0yVjExLjk1M2EyIDIgMCAwIDEgMi0yek00Mi45NCA0OS43NjdoNDkuNzEzYTIuMjYyIDIuMjYyIDAgMSAxIDAgNC41MjRINDIuOTRhMi4yNjIgMi4yNjIgMCAwIDEgMC00LjUyNHpNNDIuOTQgNjEuNTNoNDkuNzEzYTIuMjYyIDIuMjYyIDAgMSAxIDAgNC41MjVINDIuOTRhMi4yNjIgMi4yNjIgMCAwIDEgMC00LjUyNXpNMTIxLjgxMyAxMDUuMDMyYy0uNzc1IDMuMDcxLTMuNDk3IDUuMzYtNi43MzUgNS4zNkgyMC41MTVjLTMuMjM4IDAtNS45Ni0yLjI5LTYuNzM0LTUuMzZhNy4zMDkgNy4zMDkgMCAwIDEtLjIyMi0xLjc5VjY5LjY3NWgyNi4zMThjMi45MDcgMCA1LjI1IDIuNDQ4IDUuMjUgNS40MnYuMDRjMCAyLjk3MSAyLjM3IDUuMzcgNS4yNzcgNS4zN2gzNC43ODVjMi45MDcgMCA1LjI3Ny0yLjQyMSA1LjI3Ny01LjM5M1Y3NS4xYzAtMi45NzIgMi4zNDMtNS40MjYgNS4yNS01LjQyNmgyNi4zMTh2MzMuNTY5YzAgLjYxNy0uMDc3IDEuMjE2LS4yMjEgMS43ODl6XCJcbiAgfSkpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1wYXRoLTVcIiksXG4gICAgZDogXCJNMTQ5LjEyMSAzMy4yOTJsLTYuODMgMi42NWExIDEgMCAwIDEtMS4zMTctMS4yM2wxLjkzNy02LjIwN2MtMi41ODktMi45NDQtNC4xMDktNi41MzQtNC4xMDktMTAuNDA4QzEzOC44MDIgOC4xMDIgMTQ4LjkyIDAgMTYxLjQwMiAwIDE3My44ODEgMCAxODQgOC4xMDIgMTg0IDE4LjA5N2MwIDkuOTk1LTEwLjExOCAxOC4wOTctMjIuNTk5IDE4LjA5Ny00LjUyOCAwLTguNzQ0LTEuMDY2LTEyLjI4LTIuOTAyelwiXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1nXCIpLFxuICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoMTQ5LjY1IDE1LjM4MylcIlxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImVsbGlwc2VcIiwge1xuICAgIGN4OiBcIjIwLjY1NFwiLFxuICAgIGN5OiBcIjMuMTY3XCIsXG4gICAgcng6IFwiMi44NDlcIixcbiAgICByeTogXCIyLjgxNVwiXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTUuNjk4IDUuNjNIMEwyLjg5OC43MDR6TTkuMjU5LjcwNGg0Ljk4NVY1LjYzSDkuMjU5elwiXG4gIH0pKSkpO1xufTtcblxudmFyIF9kZWZhdWx0ID0gRW1wdHk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfY29uZmlnUHJvdmlkZXIgPSByZXF1aXJlKFwiLi4vY29uZmlnLXByb3ZpZGVyXCIpO1xuXG52YXIgX0xvY2FsZVJlY2VpdmVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbG9jYWxlLXByb3ZpZGVyL0xvY2FsZVJlY2VpdmVyXCIpKTtcblxudmFyIF9lbXB0eSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vZW1wdHlcIikpO1xuXG52YXIgX3NpbXBsZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc2ltcGxlXCIpKTtcblxudmFyIF9fcmVzdCA9IHZvaWQgMCAmJiAodm9pZCAwKS5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcblxuICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICB9XG5cbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgfVxuICByZXR1cm4gdDtcbn07XG5cbnZhciBkZWZhdWx0RW1wdHlJbWcgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfZW1wdHlbXCJkZWZhdWx0XCJdLCBudWxsKTtcbnZhciBzaW1wbGVFbXB0eUltZyA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9zaW1wbGVbXCJkZWZhdWx0XCJdLCBudWxsKTtcblxudmFyIEVtcHR5ID0gZnVuY3Rpb24gRW1wdHkoX2EpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZSxcbiAgICAgIGN1c3RvbWl6ZVByZWZpeENscyA9IF9hLnByZWZpeENscyxcbiAgICAgIF9hJGltYWdlID0gX2EuaW1hZ2UsXG4gICAgICBpbWFnZSA9IF9hJGltYWdlID09PSB2b2lkIDAgPyBkZWZhdWx0RW1wdHlJbWcgOiBfYSRpbWFnZSxcbiAgICAgIGRlc2NyaXB0aW9uID0gX2EuZGVzY3JpcHRpb24sXG4gICAgICBjaGlsZHJlbiA9IF9hLmNoaWxkcmVuLFxuICAgICAgaW1hZ2VTdHlsZSA9IF9hLmltYWdlU3R5bGUsXG4gICAgICByZXN0UHJvcHMgPSBfX3Jlc3QoX2EsIFtcImNsYXNzTmFtZVwiLCBcInByZWZpeENsc1wiLCBcImltYWdlXCIsIFwiZGVzY3JpcHRpb25cIiwgXCJjaGlsZHJlblwiLCBcImltYWdlU3R5bGVcIl0pO1xuXG4gIHZhciBfUmVhY3QkdXNlQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnRleHQpLFxuICAgICAgZ2V0UHJlZml4Q2xzID0gX1JlYWN0JHVzZUNvbnRleHQuZ2V0UHJlZml4Q2xzLFxuICAgICAgZGlyZWN0aW9uID0gX1JlYWN0JHVzZUNvbnRleHQuZGlyZWN0aW9uO1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfTG9jYWxlUmVjZWl2ZXJbXCJkZWZhdWx0XCJdLCB7XG4gICAgY29tcG9uZW50TmFtZTogXCJFbXB0eVwiXG4gIH0sIGZ1bmN0aW9uIChsb2NhbGUpIHtcbiAgICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdlbXB0eScsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gICAgdmFyIGRlcyA9IHR5cGVvZiBkZXNjcmlwdGlvbiAhPT0gJ3VuZGVmaW5lZCcgPyBkZXNjcmlwdGlvbiA6IGxvY2FsZS5kZXNjcmlwdGlvbjtcbiAgICB2YXIgYWx0ID0gdHlwZW9mIGRlcyA9PT0gJ3N0cmluZycgPyBkZXMgOiAnZW1wdHknO1xuICAgIHZhciBpbWFnZU5vZGUgPSBudWxsO1xuXG4gICAgaWYgKHR5cGVvZiBpbWFnZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGltYWdlTm9kZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtcbiAgICAgICAgYWx0OiBhbHQsXG4gICAgICAgIHNyYzogaW1hZ2VcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbWFnZU5vZGUgPSBpbWFnZTtcbiAgICB9XG5cbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHtcbiAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkocHJlZml4Q2xzLCAoX2NsYXNzTmFtZXMgPSB7fSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ub3JtYWxcIiksIGltYWdlID09PSBzaW1wbGVFbXB0eUltZyksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcnRsXCIpLCBkaXJlY3Rpb24gPT09ICdydGwnKSwgX2NsYXNzTmFtZXMpLCBjbGFzc05hbWUpXG4gICAgfSwgcmVzdFByb3BzKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWltYWdlXCIpLFxuICAgICAgc3R5bGU6IGltYWdlU3R5bGVcbiAgICB9LCBpbWFnZU5vZGUpLCBkZXMgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1kZXNjcmlwdGlvblwiKVxuICAgIH0sIGRlcyksIGNoaWxkcmVuICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1mb290ZXJcIilcbiAgICB9LCBjaGlsZHJlbikpO1xuICB9KTtcbn07XG5cbkVtcHR5LlBSRVNFTlRFRF9JTUFHRV9ERUZBVUxUID0gZGVmYXVsdEVtcHR5SW1nO1xuRW1wdHkuUFJFU0VOVEVEX0lNQUdFX1NJTVBMRSA9IHNpbXBsZUVtcHR5SW1nO1xudmFyIF9kZWZhdWx0ID0gRW1wdHk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY29uZmlnUHJvdmlkZXIgPSByZXF1aXJlKFwiLi4vY29uZmlnLXByb3ZpZGVyXCIpO1xuXG52YXIgU2ltcGxlID0gZnVuY3Rpb24gU2ltcGxlKCkge1xuICB2YXIgX1JlYWN0JHVzZUNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KF9jb25maWdQcm92aWRlci5Db25maWdDb250ZXh0KSxcbiAgICAgIGdldFByZWZpeENscyA9IF9SZWFjdCR1c2VDb250ZXh0LmdldFByZWZpeENscztcblxuICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdlbXB0eS1pbWctc2ltcGxlJyk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCB7XG4gICAgY2xhc3NOYW1lOiBwcmVmaXhDbHMsXG4gICAgd2lkdGg6IFwiNjRcIixcbiAgICBoZWlnaHQ6IFwiNDFcIixcbiAgICB2aWV3Qm94OiBcIjAgMCA2NCA0MVwiLFxuICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIsIHtcbiAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKDAgMSlcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBmaWxsUnVsZTogXCJldmVub2RkXCJcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJlbGxpcHNlXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZWxsaXBzZVwiKSxcbiAgICBjeDogXCIzMlwiLFxuICAgIGN5OiBcIjMzXCIsXG4gICAgcng6IFwiMzJcIixcbiAgICByeTogXCI3XCJcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWdcIiksXG4gICAgZmlsbFJ1bGU6IFwibm9uemVyb1wiXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNNTUgMTIuNzZMNDQuODU0IDEuMjU4QzQ0LjM2Ny40NzQgNDMuNjU2IDAgNDIuOTA3IDBIMjEuMDkzYy0uNzQ5IDAtMS40Ni40NzQtMS45NDcgMS4yNTdMOSAxMi43NjFWMjJoNDZ2LTkuMjR6XCJcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNNDEuNjEzIDE1LjkzMWMwLTEuNjA1Ljk5NC0yLjkzIDIuMjI3LTIuOTMxSDU1djE4LjEzN0M1NSAzMy4yNiA1My42OCAzNSA1Mi4wNSAzNWgtNDAuMUMxMC4zMiAzNSA5IDMzLjI1OSA5IDMxLjEzN1YxM2gxMS4xNmMxLjIzMyAwIDIuMjI3IDEuMzIzIDIuMjI3IDIuOTI4di4wMjJjMCAxLjYwNSAxLjAwNSAyLjkwMSAyLjIzNyAyLjkwMWgxNC43NTJjMS4yMzIgMCAyLjIzNy0xLjMwOCAyLjIzNy0yLjkxM3YtLjAwN3pcIixcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcGF0aFwiKVxuICB9KSkpKTtcbn07XG5cbnZhciBfZGVmYXVsdCA9IFNpbXBsZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxudmFyIFJvd0NvbnRleHQgPSAvKiNfX1BVUkVfXyovKDAsIF9yZWFjdC5jcmVhdGVDb250ZXh0KSh7fSk7XG52YXIgX2RlZmF1bHQgPSBSb3dDb250ZXh0O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpKTtcblxudmFyIF9leHRlbmRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfdHlwZW9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfUm93Q29udGV4dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vUm93Q29udGV4dFwiKSk7XG5cbnZhciBfY29uZmlnUHJvdmlkZXIgPSByZXF1aXJlKFwiLi4vY29uZmlnLXByb3ZpZGVyXCIpO1xuXG52YXIgX19yZXN0ID0gdm9pZCAwICYmICh2b2lkIDApLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuXG4gIGZvciAodmFyIHAgaW4gcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIH1cblxuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpIHRbcFtpXV0gPSBzW3BbaV1dO1xuICB9XG4gIHJldHVybiB0O1xufTtcblxuZnVuY3Rpb24gcGFyc2VGbGV4KGZsZXgpIHtcbiAgaWYgKHR5cGVvZiBmbGV4ID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBcIlwiLmNvbmNhdChmbGV4LCBcIiBcIikuY29uY2F0KGZsZXgsIFwiIGF1dG9cIik7XG4gIH1cblxuICBpZiAoL15cXGQrKFxcLlxcZCspPyhweHxlbXxyZW18JSkkLy50ZXN0KGZsZXgpKSB7XG4gICAgcmV0dXJuIFwiMCAwIFwiLmNvbmNhdChmbGV4KTtcbiAgfVxuXG4gIHJldHVybiBmbGV4O1xufVxuXG52YXIgc2l6ZXMgPSBbJ3hzJywgJ3NtJywgJ21kJywgJ2xnJywgJ3hsJywgJ3h4bCddO1xudmFyIENvbCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gIHZhciBfY2xhc3NOYW1lcztcblxuICB2YXIgX1JlYWN0JHVzZUNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KF9jb25maWdQcm92aWRlci5Db25maWdDb250ZXh0KSxcbiAgICAgIGdldFByZWZpeENscyA9IF9SZWFjdCR1c2VDb250ZXh0LmdldFByZWZpeENscyxcbiAgICAgIGRpcmVjdGlvbiA9IF9SZWFjdCR1c2VDb250ZXh0LmRpcmVjdGlvbjtcblxuICB2YXIgX1JlYWN0JHVzZUNvbnRleHQyID0gUmVhY3QudXNlQ29udGV4dChfUm93Q29udGV4dFtcImRlZmF1bHRcIl0pLFxuICAgICAgZ3V0dGVyID0gX1JlYWN0JHVzZUNvbnRleHQyLmd1dHRlcixcbiAgICAgIHdyYXAgPSBfUmVhY3QkdXNlQ29udGV4dDIud3JhcDtcblxuICB2YXIgY3VzdG9taXplUHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgc3BhbiA9IHByb3BzLnNwYW4sXG4gICAgICBvcmRlciA9IHByb3BzLm9yZGVyLFxuICAgICAgb2Zmc2V0ID0gcHJvcHMub2Zmc2V0LFxuICAgICAgcHVzaCA9IHByb3BzLnB1c2gsXG4gICAgICBwdWxsID0gcHJvcHMucHVsbCxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBmbGV4ID0gcHJvcHMuZmxleCxcbiAgICAgIHN0eWxlID0gcHJvcHMuc3R5bGUsXG4gICAgICBvdGhlcnMgPSBfX3Jlc3QocHJvcHMsIFtcInByZWZpeENsc1wiLCBcInNwYW5cIiwgXCJvcmRlclwiLCBcIm9mZnNldFwiLCBcInB1c2hcIiwgXCJwdWxsXCIsIFwiY2xhc3NOYW1lXCIsIFwiY2hpbGRyZW5cIiwgXCJmbGV4XCIsIFwic3R5bGVcIl0pO1xuXG4gIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ2NvbCcsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gIHZhciBzaXplQ2xhc3NPYmogPSB7fTtcbiAgc2l6ZXMuZm9yRWFjaChmdW5jdGlvbiAoc2l6ZSkge1xuICAgIHZhciBfZXh0ZW5kczI7XG5cbiAgICB2YXIgc2l6ZVByb3BzID0ge307XG4gICAgdmFyIHByb3BTaXplID0gcHJvcHNbc2l6ZV07XG5cbiAgICBpZiAodHlwZW9mIHByb3BTaXplID09PSAnbnVtYmVyJykge1xuICAgICAgc2l6ZVByb3BzLnNwYW4gPSBwcm9wU2l6ZTtcbiAgICB9IGVsc2UgaWYgKCgwLCBfdHlwZW9mMltcImRlZmF1bHRcIl0pKHByb3BTaXplKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHNpemVQcm9wcyA9IHByb3BTaXplIHx8IHt9O1xuICAgIH1cblxuICAgIGRlbGV0ZSBvdGhlcnNbc2l6ZV07XG4gICAgc2l6ZUNsYXNzT2JqID0gKDAsIF9leHRlbmRzM1tcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczNbXCJkZWZhdWx0XCJdKSh7fSwgc2l6ZUNsYXNzT2JqKSwgKF9leHRlbmRzMiA9IHt9LCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9leHRlbmRzMiwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KHNpemUsIFwiLVwiKS5jb25jYXQoc2l6ZVByb3BzLnNwYW4pLCBzaXplUHJvcHMuc3BhbiAhPT0gdW5kZWZpbmVkKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfZXh0ZW5kczIsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItXCIpLmNvbmNhdChzaXplLCBcIi1vcmRlci1cIikuY29uY2F0KHNpemVQcm9wcy5vcmRlciksIHNpemVQcm9wcy5vcmRlciB8fCBzaXplUHJvcHMub3JkZXIgPT09IDApLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9leHRlbmRzMiwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KHNpemUsIFwiLW9mZnNldC1cIikuY29uY2F0KHNpemVQcm9wcy5vZmZzZXQpLCBzaXplUHJvcHMub2Zmc2V0IHx8IHNpemVQcm9wcy5vZmZzZXQgPT09IDApLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9leHRlbmRzMiwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KHNpemUsIFwiLXB1c2gtXCIpLmNvbmNhdChzaXplUHJvcHMucHVzaCksIHNpemVQcm9wcy5wdXNoIHx8IHNpemVQcm9wcy5wdXNoID09PSAwKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfZXh0ZW5kczIsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItXCIpLmNvbmNhdChzaXplLCBcIi1wdWxsLVwiKS5jb25jYXQoc2l6ZVByb3BzLnB1bGwpLCBzaXplUHJvcHMucHVsbCB8fCBzaXplUHJvcHMucHVsbCA9PT0gMCksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2V4dGVuZHMyLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXJ0bFwiKSwgZGlyZWN0aW9uID09PSAncnRsJyksIF9leHRlbmRzMikpO1xuICB9KTtcbiAgdmFyIGNsYXNzZXMgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShwcmVmaXhDbHMsIChfY2xhc3NOYW1lcyA9IHt9LCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQoc3BhbiksIHNwYW4gIT09IHVuZGVmaW5lZCksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItb3JkZXItXCIpLmNvbmNhdChvcmRlciksIG9yZGVyKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1vZmZzZXQtXCIpLmNvbmNhdChvZmZzZXQpLCBvZmZzZXQpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXB1c2gtXCIpLmNvbmNhdChwdXNoKSwgcHVzaCksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcHVsbC1cIikuY29uY2F0KHB1bGwpLCBwdWxsKSwgX2NsYXNzTmFtZXMpLCBjbGFzc05hbWUsIHNpemVDbGFzc09iaik7XG4gIHZhciBtZXJnZWRTdHlsZSA9ICgwLCBfZXh0ZW5kczNbXCJkZWZhdWx0XCJdKSh7fSwgc3R5bGUpO1xuXG4gIGlmIChndXR0ZXIpIHtcbiAgICBtZXJnZWRTdHlsZSA9ICgwLCBfZXh0ZW5kczNbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMzW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzM1tcImRlZmF1bHRcIl0pKHt9LCBndXR0ZXJbMF0gPiAwID8ge1xuICAgICAgcGFkZGluZ0xlZnQ6IGd1dHRlclswXSAvIDIsXG4gICAgICBwYWRkaW5nUmlnaHQ6IGd1dHRlclswXSAvIDJcbiAgICB9IDoge30pLCBndXR0ZXJbMV0gPiAwID8ge1xuICAgICAgcGFkZGluZ1RvcDogZ3V0dGVyWzFdIC8gMixcbiAgICAgIHBhZGRpbmdCb3R0b206IGd1dHRlclsxXSAvIDJcbiAgICB9IDoge30pLCBtZXJnZWRTdHlsZSk7XG4gIH1cblxuICBpZiAoZmxleCkge1xuICAgIG1lcmdlZFN0eWxlLmZsZXggPSBwYXJzZUZsZXgoZmxleCk7IC8vIEhhY2sgZm9yIEZpcmVmb3ggdG8gYXZvaWQgc2l6ZSBpc3N1ZVxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vcHVsbC8yMDAyMyNpc3N1ZWNvbW1lbnQtNTY0Mzg5NTUzXG5cbiAgICBpZiAoZmxleCA9PT0gJ2F1dG8nICYmIHdyYXAgPT09IGZhbHNlICYmICFtZXJnZWRTdHlsZS5taW5XaWR0aCkge1xuICAgICAgbWVyZ2VkU3R5bGUubWluV2lkdGggPSAwO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCAoMCwgX2V4dGVuZHMzW1wiZGVmYXVsdFwiXSkoe30sIG90aGVycywge1xuICAgIHN0eWxlOiBtZXJnZWRTdHlsZSxcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgcmVmOiByZWZcbiAgfSksIGNoaWxkcmVuKTtcbn0pO1xuQ29sLmRpc3BsYXlOYW1lID0gJ0NvbCc7XG52YXIgX2RlZmF1bHQgPSBDb2w7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX3NsaWNlZFRvQXJyYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5XCIpKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxudmFyIF9yZXNwb25zaXZlT2JzZXJ2ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uL191dGlsL3Jlc3BvbnNpdmVPYnNlcnZlXCIpKTtcblxuZnVuY3Rpb24gdXNlQnJlYWtwb2ludCgpIHtcbiAgdmFyIF91c2VTdGF0ZSA9ICgwLCBfcmVhY3QudXNlU3RhdGUpKHt9KSxcbiAgICAgIF91c2VTdGF0ZTIgPSAoMCwgX3NsaWNlZFRvQXJyYXkyW1wiZGVmYXVsdFwiXSkoX3VzZVN0YXRlLCAyKSxcbiAgICAgIHNjcmVlbnMgPSBfdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0U2NyZWVucyA9IF91c2VTdGF0ZTJbMV07XG5cbiAgKDAsIF9yZWFjdC51c2VFZmZlY3QpKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdG9rZW4gPSBfcmVzcG9uc2l2ZU9ic2VydmVbXCJkZWZhdWx0XCJdLnN1YnNjcmliZShmdW5jdGlvbiAoc3VwcG9ydFNjcmVlbnMpIHtcbiAgICAgIHNldFNjcmVlbnMoc3VwcG9ydFNjcmVlbnMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfcmVzcG9uc2l2ZU9ic2VydmVbXCJkZWZhdWx0XCJdLnVuc3Vic2NyaWJlKHRva2VuKTtcbiAgICB9O1xuICB9LCBbXSk7XG4gIHJldHVybiBzY3JlZW5zO1xufVxuXG52YXIgX2RlZmF1bHQgPSB1c2VCcmVha3BvaW50O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJSb3dcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3Jvd1tcImRlZmF1bHRcIl07XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQ29sXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9jb2xbXCJkZWZhdWx0XCJdO1xuICB9XG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX3JvdyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcm93XCIpKTtcblxudmFyIF9jb2wgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2NvbFwiKSk7XG5cbnZhciBfdXNlQnJlYWtwb2ludCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaG9va3MvdXNlQnJlYWtwb2ludFwiKSk7XG5cbnZhciBfZGVmYXVsdCA9IHtcbiAgdXNlQnJlYWtwb2ludDogX3VzZUJyZWFrcG9pbnRbXCJkZWZhdWx0XCJdXG59O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbnZhciBfdHlwZW9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpKTtcblxudmFyIF9zbGljZWRUb0FycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIF9Sb3dDb250ZXh0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Sb3dDb250ZXh0XCIpKTtcblxudmFyIF90eXBlID0gcmVxdWlyZShcIi4uL191dGlsL3R5cGVcIik7XG5cbnZhciBfcmVzcG9uc2l2ZU9ic2VydmUgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vX3V0aWwvcmVzcG9uc2l2ZU9ic2VydmVcIikpO1xuXG52YXIgX19yZXN0ID0gdm9pZCAwICYmICh2b2lkIDApLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuXG4gIGZvciAodmFyIHAgaW4gcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIH1cblxuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpIHRbcFtpXV0gPSBzW3BbaV1dO1xuICB9XG4gIHJldHVybiB0O1xufTtcblxudmFyIFJvd0FsaWducyA9ICgwLCBfdHlwZS50dXBsZSkoJ3RvcCcsICdtaWRkbGUnLCAnYm90dG9tJywgJ3N0cmV0Y2gnKTtcbnZhciBSb3dKdXN0aWZ5ID0gKDAsIF90eXBlLnR1cGxlKSgnc3RhcnQnLCAnZW5kJywgJ2NlbnRlcicsICdzcGFjZS1hcm91bmQnLCAnc3BhY2UtYmV0d2VlbicpO1xudmFyIFJvdyA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gIHZhciBfY2xhc3NOYW1lcztcblxuICB2YXIgY3VzdG9taXplUHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAganVzdGlmeSA9IHByb3BzLmp1c3RpZnksXG4gICAgICBhbGlnbiA9IHByb3BzLmFsaWduLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgc3R5bGUgPSBwcm9wcy5zdHlsZSxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBfcHJvcHMkZ3V0dGVyID0gcHJvcHMuZ3V0dGVyLFxuICAgICAgZ3V0dGVyID0gX3Byb3BzJGd1dHRlciA9PT0gdm9pZCAwID8gMCA6IF9wcm9wcyRndXR0ZXIsXG4gICAgICB3cmFwID0gcHJvcHMud3JhcCxcbiAgICAgIG90aGVycyA9IF9fcmVzdChwcm9wcywgW1wicHJlZml4Q2xzXCIsIFwianVzdGlmeVwiLCBcImFsaWduXCIsIFwiY2xhc3NOYW1lXCIsIFwic3R5bGVcIiwgXCJjaGlsZHJlblwiLCBcImd1dHRlclwiLCBcIndyYXBcIl0pO1xuXG4gIHZhciBfUmVhY3QkdXNlQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnRleHQpLFxuICAgICAgZ2V0UHJlZml4Q2xzID0gX1JlYWN0JHVzZUNvbnRleHQuZ2V0UHJlZml4Q2xzLFxuICAgICAgZGlyZWN0aW9uID0gX1JlYWN0JHVzZUNvbnRleHQuZGlyZWN0aW9uO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZSh7XG4gICAgeHM6IHRydWUsXG4gICAgc206IHRydWUsXG4gICAgbWQ6IHRydWUsXG4gICAgbGc6IHRydWUsXG4gICAgeGw6IHRydWUsXG4gICAgeHhsOiB0cnVlXG4gIH0pLFxuICAgICAgX1JlYWN0JHVzZVN0YXRlMiA9ICgwLCBfc2xpY2VkVG9BcnJheTJbXCJkZWZhdWx0XCJdKShfUmVhY3QkdXNlU3RhdGUsIDIpLFxuICAgICAgc2NyZWVucyA9IF9SZWFjdCR1c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRTY3JlZW5zID0gX1JlYWN0JHVzZVN0YXRlMlsxXTtcblxuICB2YXIgZ3V0dGVyUmVmID0gUmVhY3QudXNlUmVmKGd1dHRlcik7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRva2VuID0gX3Jlc3BvbnNpdmVPYnNlcnZlW1wiZGVmYXVsdFwiXS5zdWJzY3JpYmUoZnVuY3Rpb24gKHNjcmVlbikge1xuICAgICAgdmFyIGN1cnJlbnRHdXR0ZXIgPSBndXR0ZXJSZWYuY3VycmVudCB8fCAwO1xuXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoY3VycmVudEd1dHRlcikgJiYgKDAsIF90eXBlb2YyW1wiZGVmYXVsdFwiXSkoY3VycmVudEd1dHRlcikgPT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkoY3VycmVudEd1dHRlcikgJiYgKCgwLCBfdHlwZW9mMltcImRlZmF1bHRcIl0pKGN1cnJlbnRHdXR0ZXJbMF0pID09PSAnb2JqZWN0JyB8fCAoMCwgX3R5cGVvZjJbXCJkZWZhdWx0XCJdKShjdXJyZW50R3V0dGVyWzFdKSA9PT0gJ29iamVjdCcpKSB7XG4gICAgICAgIHNldFNjcmVlbnMoc2NyZWVuKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3Jlc3BvbnNpdmVPYnNlcnZlW1wiZGVmYXVsdFwiXS51bnN1YnNjcmliZSh0b2tlbik7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHZhciBnZXRHdXR0ZXIgPSBmdW5jdGlvbiBnZXRHdXR0ZXIoKSB7XG4gICAgdmFyIHJlc3VsdHMgPSBbMCwgMF07XG4gICAgdmFyIG5vcm1hbGl6ZWRHdXR0ZXIgPSBBcnJheS5pc0FycmF5KGd1dHRlcikgPyBndXR0ZXIgOiBbZ3V0dGVyLCAwXTtcbiAgICBub3JtYWxpemVkR3V0dGVyLmZvckVhY2goZnVuY3Rpb24gKGcsIGluZGV4KSB7XG4gICAgICBpZiAoKDAsIF90eXBlb2YyW1wiZGVmYXVsdFwiXSkoZykgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX3Jlc3BvbnNpdmVPYnNlcnZlLnJlc3BvbnNpdmVBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBicmVha3BvaW50ID0gX3Jlc3BvbnNpdmVPYnNlcnZlLnJlc3BvbnNpdmVBcnJheVtpXTtcblxuICAgICAgICAgIGlmIChzY3JlZW5zW2JyZWFrcG9pbnRdICYmIGdbYnJlYWtwb2ludF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmVzdWx0c1tpbmRleF0gPSBnW2JyZWFrcG9pbnRdO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRzW2luZGV4XSA9IGcgfHwgMDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdyb3cnLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICB2YXIgZ3V0dGVycyA9IGdldEd1dHRlcigpO1xuICB2YXIgY2xhc3NlcyA9ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKHByZWZpeENscywgKF9jbGFzc05hbWVzID0ge30sICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbm8td3JhcFwiKSwgd3JhcCA9PT0gZmFsc2UpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQoanVzdGlmeSksIGp1c3RpZnkpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQoYWxpZ24pLCBhbGlnbiksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcnRsXCIpLCBkaXJlY3Rpb24gPT09ICdydGwnKSwgX2NsYXNzTmFtZXMpLCBjbGFzc05hbWUpO1xuICB2YXIgcm93U3R5bGUgPSAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgZ3V0dGVyc1swXSA+IDAgPyB7XG4gICAgbWFyZ2luTGVmdDogZ3V0dGVyc1swXSAvIC0yLFxuICAgIG1hcmdpblJpZ2h0OiBndXR0ZXJzWzBdIC8gLTJcbiAgfSA6IHt9KSwgZ3V0dGVyc1sxXSA+IDAgPyB7XG4gICAgbWFyZ2luVG9wOiBndXR0ZXJzWzFdIC8gLTIsXG4gICAgbWFyZ2luQm90dG9tOiBndXR0ZXJzWzFdIC8gMlxuICB9IDoge30pLCBzdHlsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfUm93Q29udGV4dFtcImRlZmF1bHRcIl0uUHJvdmlkZXIsIHtcbiAgICB2YWx1ZToge1xuICAgICAgZ3V0dGVyOiBndXR0ZXJzLFxuICAgICAgd3JhcDogd3JhcFxuICAgIH1cbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBvdGhlcnMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgc3R5bGU6IHJvd1N0eWxlLFxuICAgIHJlZjogcmVmXG4gIH0pLCBjaGlsZHJlbikpO1xufSk7XG5Sb3cuZGlzcGxheU5hbWUgPSAnUm93JztcbnZhciBfZGVmYXVsdCA9IFJvdztcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBleHBvcnRzLk1ldGEgPSB2b2lkIDA7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9pbmRleCA9IHJlcXVpcmUoXCIuL2luZGV4XCIpO1xuXG52YXIgX2dyaWQgPSByZXF1aXJlKFwiLi4vZ3JpZFwiKTtcblxudmFyIF9jb25maWdQcm92aWRlciA9IHJlcXVpcmUoXCIuLi9jb25maWctcHJvdmlkZXJcIik7XG5cbnZhciBfcmVhY3ROb2RlID0gcmVxdWlyZShcIi4uL191dGlsL3JlYWN0Tm9kZVwiKTtcblxudmFyIF9fcmVzdCA9IHZvaWQgMCAmJiAodm9pZCAwKS5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcblxuICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICB9XG5cbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgfVxuICByZXR1cm4gdDtcbn07XG5cbnZhciBNZXRhID0gZnVuY3Rpb24gTWV0YShfYSkge1xuICB2YXIgY3VzdG9taXplUHJlZml4Q2xzID0gX2EucHJlZml4Q2xzLFxuICAgICAgY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lLFxuICAgICAgYXZhdGFyID0gX2EuYXZhdGFyLFxuICAgICAgdGl0bGUgPSBfYS50aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uID0gX2EuZGVzY3JpcHRpb24sXG4gICAgICBvdGhlcnMgPSBfX3Jlc3QoX2EsIFtcInByZWZpeENsc1wiLCBcImNsYXNzTmFtZVwiLCBcImF2YXRhclwiLCBcInRpdGxlXCIsIFwiZGVzY3JpcHRpb25cIl0pO1xuXG4gIHZhciBfUmVhY3QkdXNlQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnRleHQpLFxuICAgICAgZ2V0UHJlZml4Q2xzID0gX1JlYWN0JHVzZUNvbnRleHQuZ2V0UHJlZml4Q2xzO1xuXG4gIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ2xpc3QnLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICB2YXIgY2xhc3NTdHJpbmcgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWl0ZW0tbWV0YVwiKSwgY2xhc3NOYW1lKTtcbiAgdmFyIGNvbnRlbnQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWl0ZW0tbWV0YS1jb250ZW50XCIpXG4gIH0sIHRpdGxlICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiaDRcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pdGVtLW1ldGEtdGl0bGVcIilcbiAgfSwgdGl0bGUpLCBkZXNjcmlwdGlvbiAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWl0ZW0tbWV0YS1kZXNjcmlwdGlvblwiKVxuICB9LCBkZXNjcmlwdGlvbikpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBvdGhlcnMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzU3RyaW5nXG4gIH0pLCBhdmF0YXIgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pdGVtLW1ldGEtYXZhdGFyXCIpXG4gIH0sIGF2YXRhciksICh0aXRsZSB8fCBkZXNjcmlwdGlvbikgJiYgY29udGVudCk7XG59O1xuXG5leHBvcnRzLk1ldGEgPSBNZXRhO1xuXG52YXIgSXRlbSA9IGZ1bmN0aW9uIEl0ZW0oX2EpIHtcbiAgdmFyIGN1c3RvbWl6ZVByZWZpeENscyA9IF9hLnByZWZpeENscyxcbiAgICAgIGNoaWxkcmVuID0gX2EuY2hpbGRyZW4sXG4gICAgICBhY3Rpb25zID0gX2EuYWN0aW9ucyxcbiAgICAgIGV4dHJhID0gX2EuZXh0cmEsXG4gICAgICBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWUsXG4gICAgICBjb2xTdHlsZSA9IF9hLmNvbFN0eWxlLFxuICAgICAgb3RoZXJzID0gX19yZXN0KF9hLCBbXCJwcmVmaXhDbHNcIiwgXCJjaGlsZHJlblwiLCBcImFjdGlvbnNcIiwgXCJleHRyYVwiLCBcImNsYXNzTmFtZVwiLCBcImNvbFN0eWxlXCJdKTtcblxuICB2YXIgX1JlYWN0JHVzZUNvbnRleHQyID0gUmVhY3QudXNlQ29udGV4dChfaW5kZXguTGlzdENvbnRleHQpLFxuICAgICAgZ3JpZCA9IF9SZWFjdCR1c2VDb250ZXh0Mi5ncmlkLFxuICAgICAgaXRlbUxheW91dCA9IF9SZWFjdCR1c2VDb250ZXh0Mi5pdGVtTGF5b3V0O1xuXG4gIHZhciBfUmVhY3QkdXNlQ29udGV4dDMgPSBSZWFjdC51c2VDb250ZXh0KF9jb25maWdQcm92aWRlci5Db25maWdDb250ZXh0KSxcbiAgICAgIGdldFByZWZpeENscyA9IF9SZWFjdCR1c2VDb250ZXh0My5nZXRQcmVmaXhDbHM7XG5cbiAgdmFyIGlzSXRlbUNvbnRhaW5zVGV4dE5vZGVBbmROb3RTaW5ndWxhciA9IGZ1bmN0aW9uIGlzSXRlbUNvbnRhaW5zVGV4dE5vZGVBbmROb3RTaW5ndWxhcigpIHtcbiAgICB2YXIgcmVzdWx0O1xuICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdCAmJiBSZWFjdC5DaGlsZHJlbi5jb3VudChjaGlsZHJlbikgPiAxO1xuICB9O1xuXG4gIHZhciBpc0ZsZXhNb2RlID0gZnVuY3Rpb24gaXNGbGV4TW9kZSgpIHtcbiAgICBpZiAoaXRlbUxheW91dCA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgcmV0dXJuICEhZXh0cmE7XG4gICAgfVxuXG4gICAgcmV0dXJuICFpc0l0ZW1Db250YWluc1RleHROb2RlQW5kTm90U2luZ3VsYXIoKTtcbiAgfTtcblxuICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdsaXN0JywgY3VzdG9taXplUHJlZml4Q2xzKTtcbiAgdmFyIGFjdGlvbnNDb250ZW50ID0gYWN0aW9ucyAmJiBhY3Rpb25zLmxlbmd0aCA+IDAgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWl0ZW0tYWN0aW9uXCIpLFxuICAgIGtleTogXCJhY3Rpb25zXCJcbiAgfSwgYWN0aW9ucy5tYXAoZnVuY3Rpb24gKGFjdGlvbiwgaSkge1xuICAgIHJldHVybiAoXG4gICAgICAvKiNfX1BVUkVfXyovXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5XG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge1xuICAgICAgICBrZXk6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaXRlbS1hY3Rpb24tXCIpLmNvbmNhdChpKVxuICAgICAgfSwgYWN0aW9uLCBpICE9PSBhY3Rpb25zLmxlbmd0aCAtIDEgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJlbVwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pdGVtLWFjdGlvbi1zcGxpdFwiKVxuICAgICAgfSkpXG4gICAgKTtcbiAgfSkpO1xuICB2YXIgRWxlbWVudCA9IGdyaWQgPyAnZGl2JyA6ICdsaSc7XG4gIHZhciBpdGVtQ2hpbGRyZW4gPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChFbGVtZW50LCAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIG90aGVycywge1xuICAgIC8vIGBsaWAgZWxlbWVudCBgb25Db3B5YCBwcm9wIGFyZ3MgaXMgbm90IHNhbWUgYXMgYGRpdmBcbiAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaXRlbVwiKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKSh7fSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pdGVtLW5vLWZsZXhcIiksICFpc0ZsZXhNb2RlKCkpLCBjbGFzc05hbWUpXG4gIH0pLCBpdGVtTGF5b3V0ID09PSAndmVydGljYWwnICYmIGV4dHJhID8gWy8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaXRlbS1tYWluXCIpLFxuICAgIGtleTogXCJjb250ZW50XCJcbiAgfSwgY2hpbGRyZW4sIGFjdGlvbnNDb250ZW50KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pdGVtLWV4dHJhXCIpLFxuICAgIGtleTogXCJleHRyYVwiXG4gIH0sIGV4dHJhKV0gOiBbY2hpbGRyZW4sIGFjdGlvbnNDb250ZW50LCAoMCwgX3JlYWN0Tm9kZS5jbG9uZUVsZW1lbnQpKGV4dHJhLCB7XG4gICAga2V5OiAnZXh0cmEnXG4gIH0pXSk7XG4gIHJldHVybiBncmlkID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX2dyaWQuQ29sLCB7XG4gICAgZmxleDogMSxcbiAgICBzdHlsZTogY29sU3R5bGVcbiAgfSwgaXRlbUNoaWxkcmVuKSA6IGl0ZW1DaGlsZHJlbjtcbn07XG5cbkl0ZW0uTWV0YSA9IE1ldGE7XG52YXIgX2RlZmF1bHQgPSBJdGVtO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGV4cG9ydHMuTGlzdENvbnN1bWVyID0gZXhwb3J0cy5MaXN0Q29udGV4dCA9IHZvaWQgMDtcblxudmFyIF90b0NvbnN1bWFibGVBcnJheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5XCIpKTtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbnZhciBfc2xpY2VkVG9BcnJheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIikpO1xuXG52YXIgX3R5cGVvZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX3NwaW4gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zcGluXCIpKTtcblxudmFyIF91c2VCcmVha3BvaW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vZ3JpZC9ob29rcy91c2VCcmVha3BvaW50XCIpKTtcblxudmFyIF9yZXNwb25zaXZlT2JzZXJ2ZSA9IHJlcXVpcmUoXCIuLi9fdXRpbC9yZXNwb25zaXZlT2JzZXJ2ZVwiKTtcblxudmFyIF9jb25maWdQcm92aWRlciA9IHJlcXVpcmUoXCIuLi9jb25maWctcHJvdmlkZXJcIik7XG5cbnZhciBfcGFnaW5hdGlvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3BhZ2luYXRpb25cIikpO1xuXG52YXIgX2dyaWQgPSByZXF1aXJlKFwiLi4vZ3JpZFwiKTtcblxudmFyIF9JdGVtID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9JdGVtXCIpKTtcblxudmFyIF9fcmVzdCA9IHZvaWQgMCAmJiAodm9pZCAwKS5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcblxuICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICB9XG5cbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgfVxuICByZXR1cm4gdDtcbn07XG5cbnZhciBMaXN0Q29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KHt9KTtcbmV4cG9ydHMuTGlzdENvbnRleHQgPSBMaXN0Q29udGV4dDtcbnZhciBMaXN0Q29uc3VtZXIgPSBMaXN0Q29udGV4dC5Db25zdW1lcjtcbmV4cG9ydHMuTGlzdENvbnN1bWVyID0gTGlzdENvbnN1bWVyO1xuXG5mdW5jdGlvbiBMaXN0KF9hKSB7XG4gIHZhciBfY2xhc3NOYW1lcztcblxuICB2YXIgX2EkcGFnaW5hdGlvbiA9IF9hLnBhZ2luYXRpb24sXG4gICAgICBwYWdpbmF0aW9uID0gX2EkcGFnaW5hdGlvbiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSRwYWdpbmF0aW9uLFxuICAgICAgY3VzdG9taXplUHJlZml4Q2xzID0gX2EucHJlZml4Q2xzLFxuICAgICAgX2EkYm9yZGVyZWQgPSBfYS5ib3JkZXJlZCxcbiAgICAgIGJvcmRlcmVkID0gX2EkYm9yZGVyZWQgPT09IHZvaWQgMCA/IGZhbHNlIDogX2EkYm9yZGVyZWQsXG4gICAgICBfYSRzcGxpdCA9IF9hLnNwbGl0LFxuICAgICAgc3BsaXQgPSBfYSRzcGxpdCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9hJHNwbGl0LFxuICAgICAgY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lLFxuICAgICAgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbixcbiAgICAgIGl0ZW1MYXlvdXQgPSBfYS5pdGVtTGF5b3V0LFxuICAgICAgbG9hZE1vcmUgPSBfYS5sb2FkTW9yZSxcbiAgICAgIGdyaWQgPSBfYS5ncmlkLFxuICAgICAgX2EkZGF0YVNvdXJjZSA9IF9hLmRhdGFTb3VyY2UsXG4gICAgICBkYXRhU291cmNlID0gX2EkZGF0YVNvdXJjZSA9PT0gdm9pZCAwID8gW10gOiBfYSRkYXRhU291cmNlLFxuICAgICAgc2l6ZSA9IF9hLnNpemUsXG4gICAgICBoZWFkZXIgPSBfYS5oZWFkZXIsXG4gICAgICBmb290ZXIgPSBfYS5mb290ZXIsXG4gICAgICBfYSRsb2FkaW5nID0gX2EubG9hZGluZyxcbiAgICAgIGxvYWRpbmcgPSBfYSRsb2FkaW5nID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hJGxvYWRpbmcsXG4gICAgICByb3dLZXkgPSBfYS5yb3dLZXksXG4gICAgICByZW5kZXJJdGVtID0gX2EucmVuZGVySXRlbSxcbiAgICAgIGxvY2FsZSA9IF9hLmxvY2FsZSxcbiAgICAgIHJlc3QgPSBfX3Jlc3QoX2EsIFtcInBhZ2luYXRpb25cIiwgXCJwcmVmaXhDbHNcIiwgXCJib3JkZXJlZFwiLCBcInNwbGl0XCIsIFwiY2xhc3NOYW1lXCIsIFwiY2hpbGRyZW5cIiwgXCJpdGVtTGF5b3V0XCIsIFwibG9hZE1vcmVcIiwgXCJncmlkXCIsIFwiZGF0YVNvdXJjZVwiLCBcInNpemVcIiwgXCJoZWFkZXJcIiwgXCJmb290ZXJcIiwgXCJsb2FkaW5nXCIsIFwicm93S2V5XCIsIFwicmVuZGVySXRlbVwiLCBcImxvY2FsZVwiXSk7XG5cbiAgdmFyIHBhZ2luYXRpb25PYmogPSBwYWdpbmF0aW9uICYmICgwLCBfdHlwZW9mMltcImRlZmF1bHRcIl0pKHBhZ2luYXRpb24pID09PSAnb2JqZWN0JyA/IHBhZ2luYXRpb24gOiB7fTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUocGFnaW5hdGlvbk9iai5kZWZhdWx0Q3VycmVudCB8fCAxKSxcbiAgICAgIF9SZWFjdCR1c2VTdGF0ZTIgPSAoMCwgX3NsaWNlZFRvQXJyYXkyW1wiZGVmYXVsdFwiXSkoX1JlYWN0JHVzZVN0YXRlLCAyKSxcbiAgICAgIHBhZ2luYXRpb25DdXJyZW50ID0gX1JlYWN0JHVzZVN0YXRlMlswXSxcbiAgICAgIHNldFBhZ2luYXRpb25DdXJyZW50ID0gX1JlYWN0JHVzZVN0YXRlMlsxXTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlMyA9IFJlYWN0LnVzZVN0YXRlKHBhZ2luYXRpb25PYmouZGVmYXVsdFBhZ2VTaXplIHx8IDEwKSxcbiAgICAgIF9SZWFjdCR1c2VTdGF0ZTQgPSAoMCwgX3NsaWNlZFRvQXJyYXkyW1wiZGVmYXVsdFwiXSkoX1JlYWN0JHVzZVN0YXRlMywgMiksXG4gICAgICBwYWdpbmF0aW9uU2l6ZSA9IF9SZWFjdCR1c2VTdGF0ZTRbMF0sXG4gICAgICBzZXRQYWdpbmF0aW9uU2l6ZSA9IF9SZWFjdCR1c2VTdGF0ZTRbMV07XG5cbiAgdmFyIF9SZWFjdCR1c2VDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29udGV4dCksXG4gICAgICBnZXRQcmVmaXhDbHMgPSBfUmVhY3QkdXNlQ29udGV4dC5nZXRQcmVmaXhDbHMsXG4gICAgICByZW5kZXJFbXB0eSA9IF9SZWFjdCR1c2VDb250ZXh0LnJlbmRlckVtcHR5LFxuICAgICAgZGlyZWN0aW9uID0gX1JlYWN0JHVzZUNvbnRleHQuZGlyZWN0aW9uO1xuXG4gIHZhciBkZWZhdWx0UGFnaW5hdGlvblByb3BzID0ge1xuICAgIGN1cnJlbnQ6IDEsXG4gICAgdG90YWw6IDBcbiAgfTtcbiAgdmFyIGtleXMgPSB7fTtcblxuICB2YXIgdHJpZ2dlclBhZ2luYXRpb25FdmVudCA9IGZ1bmN0aW9uIHRyaWdnZXJQYWdpbmF0aW9uRXZlbnQoZXZlbnROYW1lKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwYWdlLCBwYWdlU2l6ZSkge1xuICAgICAgc2V0UGFnaW5hdGlvbkN1cnJlbnQocGFnZSk7XG4gICAgICBzZXRQYWdpbmF0aW9uU2l6ZShwYWdlU2l6ZSk7XG5cbiAgICAgIGlmIChwYWdpbmF0aW9uICYmIHBhZ2luYXRpb25bZXZlbnROYW1lXSkge1xuICAgICAgICBwYWdpbmF0aW9uW2V2ZW50TmFtZV0ocGFnZSwgcGFnZVNpemUpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgdmFyIG9uUGFnaW5hdGlvbkNoYW5nZSA9IHRyaWdnZXJQYWdpbmF0aW9uRXZlbnQoJ29uQ2hhbmdlJyk7XG4gIHZhciBvblBhZ2luYXRpb25TaG93U2l6ZUNoYW5nZSA9IHRyaWdnZXJQYWdpbmF0aW9uRXZlbnQoJ29uU2hvd1NpemVDaGFuZ2UnKTtcblxuICB2YXIgcmVuZGVySW5uZXJJdGVtID0gZnVuY3Rpb24gcmVuZGVySW5uZXJJdGVtKGl0ZW0sIGluZGV4KSB7XG4gICAgaWYgKCFyZW5kZXJJdGVtKSByZXR1cm4gbnVsbDtcbiAgICB2YXIga2V5O1xuXG4gICAgaWYgKHR5cGVvZiByb3dLZXkgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGtleSA9IHJvd0tleShpdGVtKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiByb3dLZXkgPT09ICdzdHJpbmcnKSB7XG4gICAgICBrZXkgPSBpdGVtW3Jvd0tleV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGtleSA9IGl0ZW0ua2V5O1xuICAgIH1cblxuICAgIGlmICgha2V5KSB7XG4gICAgICBrZXkgPSBcImxpc3QtaXRlbS1cIi5jb25jYXQoaW5kZXgpO1xuICAgIH1cblxuICAgIGtleXNbaW5kZXhdID0ga2V5O1xuICAgIHJldHVybiByZW5kZXJJdGVtKGl0ZW0sIGluZGV4KTtcbiAgfTtcblxuICB2YXIgaXNTb21ldGhpbmdBZnRlckxhc3RJdGVtID0gZnVuY3Rpb24gaXNTb21ldGhpbmdBZnRlckxhc3RJdGVtKCkge1xuICAgIHJldHVybiAhIShsb2FkTW9yZSB8fCBwYWdpbmF0aW9uIHx8IGZvb3Rlcik7XG4gIH07XG5cbiAgdmFyIHJlbmRlckVtcHR5RnVuYyA9IGZ1bmN0aW9uIHJlbmRlckVtcHR5RnVuYyhwcmVmaXhDbHMsIHJlbmRlckVtcHR5SGFuZGxlcikge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZW1wdHktdGV4dFwiKVxuICAgIH0sIGxvY2FsZSAmJiBsb2NhbGUuZW1wdHlUZXh0IHx8IHJlbmRlckVtcHR5SGFuZGxlcignTGlzdCcpKTtcbiAgfTtcblxuICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdsaXN0JywgY3VzdG9taXplUHJlZml4Q2xzKTtcbiAgdmFyIGxvYWRpbmdQcm9wID0gbG9hZGluZztcblxuICBpZiAodHlwZW9mIGxvYWRpbmdQcm9wID09PSAnYm9vbGVhbicpIHtcbiAgICBsb2FkaW5nUHJvcCA9IHtcbiAgICAgIHNwaW5uaW5nOiBsb2FkaW5nUHJvcFxuICAgIH07XG4gIH1cblxuICB2YXIgaXNMb2FkaW5nID0gbG9hZGluZ1Byb3AgJiYgbG9hZGluZ1Byb3Auc3Bpbm5pbmc7IC8vIGxhcmdlID0+IGxnXG4gIC8vIHNtYWxsID0+IHNtXG5cbiAgdmFyIHNpemVDbHMgPSAnJztcblxuICBzd2l0Y2ggKHNpemUpIHtcbiAgICBjYXNlICdsYXJnZSc6XG4gICAgICBzaXplQ2xzID0gJ2xnJztcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnc21hbGwnOlxuICAgICAgc2l6ZUNscyA9ICdzbSc7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHZhciBjbGFzc1N0cmluZyA9ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKHByZWZpeENscywgKF9jbGFzc05hbWVzID0ge30sICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItdmVydGljYWxcIiksIGl0ZW1MYXlvdXQgPT09ICd2ZXJ0aWNhbCcpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQoc2l6ZUNscyksIHNpemVDbHMpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXNwbGl0XCIpLCBzcGxpdCksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItYm9yZGVyZWRcIiksIGJvcmRlcmVkKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1sb2FkaW5nXCIpLCBpc0xvYWRpbmcpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWdyaWRcIiksIGdyaWQpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXNvbWV0aGluZy1hZnRlci1sYXN0LWl0ZW1cIiksIGlzU29tZXRoaW5nQWZ0ZXJMYXN0SXRlbSgpKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ydGxcIiksIGRpcmVjdGlvbiA9PT0gJ3J0bCcpLCBfY2xhc3NOYW1lcyksIGNsYXNzTmFtZSk7XG4gIHZhciBwYWdpbmF0aW9uUHJvcHMgPSAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgZGVmYXVsdFBhZ2luYXRpb25Qcm9wcyksIHtcbiAgICB0b3RhbDogZGF0YVNvdXJjZS5sZW5ndGgsXG4gICAgY3VycmVudDogcGFnaW5hdGlvbkN1cnJlbnQsXG4gICAgcGFnZVNpemU6IHBhZ2luYXRpb25TaXplXG4gIH0pLCBwYWdpbmF0aW9uIHx8IHt9KTtcbiAgdmFyIGxhcmdlc3RQYWdlID0gTWF0aC5jZWlsKHBhZ2luYXRpb25Qcm9wcy50b3RhbCAvIHBhZ2luYXRpb25Qcm9wcy5wYWdlU2l6ZSk7XG5cbiAgaWYgKHBhZ2luYXRpb25Qcm9wcy5jdXJyZW50ID4gbGFyZ2VzdFBhZ2UpIHtcbiAgICBwYWdpbmF0aW9uUHJvcHMuY3VycmVudCA9IGxhcmdlc3RQYWdlO1xuICB9XG5cbiAgdmFyIHBhZ2luYXRpb25Db250ZW50ID0gcGFnaW5hdGlvbiA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcGFnaW5hdGlvblwiKVxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfcGFnaW5hdGlvbltcImRlZmF1bHRcIl0sICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgcGFnaW5hdGlvblByb3BzLCB7XG4gICAgb25DaGFuZ2U6IG9uUGFnaW5hdGlvbkNoYW5nZSxcbiAgICBvblNob3dTaXplQ2hhbmdlOiBvblBhZ2luYXRpb25TaG93U2l6ZUNoYW5nZVxuICB9KSkpIDogbnVsbDtcbiAgdmFyIHNwbGl0RGF0YVNvdXJjZSA9ICgwLCBfdG9Db25zdW1hYmxlQXJyYXkyW1wiZGVmYXVsdFwiXSkoZGF0YVNvdXJjZSk7XG5cbiAgaWYgKHBhZ2luYXRpb24pIHtcbiAgICBpZiAoZGF0YVNvdXJjZS5sZW5ndGggPiAocGFnaW5hdGlvblByb3BzLmN1cnJlbnQgLSAxKSAqIHBhZ2luYXRpb25Qcm9wcy5wYWdlU2l6ZSkge1xuICAgICAgc3BsaXREYXRhU291cmNlID0gKDAsIF90b0NvbnN1bWFibGVBcnJheTJbXCJkZWZhdWx0XCJdKShkYXRhU291cmNlKS5zcGxpY2UoKHBhZ2luYXRpb25Qcm9wcy5jdXJyZW50IC0gMSkgKiBwYWdpbmF0aW9uUHJvcHMucGFnZVNpemUsIHBhZ2luYXRpb25Qcm9wcy5wYWdlU2l6ZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHNjcmVlbnMgPSAoMCwgX3VzZUJyZWFrcG9pbnRbXCJkZWZhdWx0XCJdKSgpO1xuICB2YXIgY3VycmVudEJyZWFrcG9pbnQgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IF9yZXNwb25zaXZlT2JzZXJ2ZS5yZXNwb25zaXZlQXJyYXkubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHZhciBicmVha3BvaW50ID0gX3Jlc3BvbnNpdmVPYnNlcnZlLnJlc3BvbnNpdmVBcnJheVtpXTtcblxuICAgICAgaWYgKHNjcmVlbnNbYnJlYWtwb2ludF0pIHtcbiAgICAgICAgcmV0dXJuIGJyZWFrcG9pbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSwgW3NjcmVlbnNdKTtcbiAgdmFyIGNvbFN0eWxlID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFncmlkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHZhciBjb2x1bW5Db3VudCA9IGN1cnJlbnRCcmVha3BvaW50ICYmIGdyaWRbY3VycmVudEJyZWFrcG9pbnRdID8gZ3JpZFtjdXJyZW50QnJlYWtwb2ludF0gOiBncmlkLmNvbHVtbjtcblxuICAgIGlmIChjb2x1bW5Db3VudCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGg6IFwiXCIuY29uY2F0KDEwMCAvIGNvbHVtbkNvdW50LCBcIiVcIiksXG4gICAgICAgIG1heFdpZHRoOiBcIlwiLmNvbmNhdCgxMDAgLyBjb2x1bW5Db3VudCwgXCIlXCIpXG4gICAgICB9O1xuICAgIH1cbiAgfSwgW2dyaWQgPT09IG51bGwgfHwgZ3JpZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZ3JpZC5jb2x1bW4sIGN1cnJlbnRCcmVha3BvaW50XSk7XG4gIHZhciBjaGlsZHJlbkNvbnRlbnQgPSBpc0xvYWRpbmcgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIHN0eWxlOiB7XG4gICAgICBtaW5IZWlnaHQ6IDUzXG4gICAgfVxuICB9KTtcblxuICBpZiAoc3BsaXREYXRhU291cmNlLmxlbmd0aCA+IDApIHtcbiAgICB2YXIgaXRlbXMgPSBzcGxpdERhdGFTb3VyY2UubWFwKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgcmV0dXJuIHJlbmRlcklubmVySXRlbShpdGVtLCBpbmRleCk7XG4gICAgfSk7XG4gICAgdmFyIGNoaWxkcmVuTGlzdCA9IFJlYWN0LkNoaWxkcmVuLm1hcChpdGVtcywgZnVuY3Rpb24gKGNoaWxkLCBpbmRleCkge1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAga2V5OiBrZXlzW2luZGV4XSxcbiAgICAgICAgc3R5bGU6IGNvbFN0eWxlXG4gICAgICB9LCBjaGlsZCk7XG4gICAgfSk7XG4gICAgY2hpbGRyZW5Db250ZW50ID0gZ3JpZCA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9ncmlkLlJvdywge1xuICAgICAgZ3V0dGVyOiBncmlkLmd1dHRlclxuICAgIH0sIGNoaWxkcmVuTGlzdCkgOiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pdGVtc1wiKVxuICAgIH0sIGl0ZW1zKTtcbiAgfSBlbHNlIGlmICghY2hpbGRyZW4gJiYgIWlzTG9hZGluZykge1xuICAgIGNoaWxkcmVuQ29udGVudCA9IHJlbmRlckVtcHR5RnVuYyhwcmVmaXhDbHMsIHJlbmRlckVtcHR5KTtcbiAgfVxuXG4gIHZhciBwYWdpbmF0aW9uUG9zaXRpb24gPSBwYWdpbmF0aW9uUHJvcHMucG9zaXRpb24gfHwgJ2JvdHRvbSc7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0Q29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiB7XG4gICAgICBncmlkOiBncmlkLFxuICAgICAgaXRlbUxheW91dDogaXRlbUxheW91dFxuICAgIH1cbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHtcbiAgICBjbGFzc05hbWU6IGNsYXNzU3RyaW5nXG4gIH0sIHJlc3QpLCAocGFnaW5hdGlvblBvc2l0aW9uID09PSAndG9wJyB8fCBwYWdpbmF0aW9uUG9zaXRpb24gPT09ICdib3RoJykgJiYgcGFnaW5hdGlvbkNvbnRlbnQsIGhlYWRlciAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWhlYWRlclwiKVxuICB9LCBoZWFkZXIpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfc3BpbltcImRlZmF1bHRcIl0sIGxvYWRpbmdQcm9wLCBjaGlsZHJlbkNvbnRlbnQsIGNoaWxkcmVuKSwgZm9vdGVyICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZm9vdGVyXCIpXG4gIH0sIGZvb3RlciksIGxvYWRNb3JlIHx8IChwYWdpbmF0aW9uUG9zaXRpb24gPT09ICdib3R0b20nIHx8IHBhZ2luYXRpb25Qb3NpdGlvbiA9PT0gJ2JvdGgnKSAmJiBwYWdpbmF0aW9uQ29udGVudCkpO1xufVxuXG5MaXN0Lkl0ZW0gPSBfSXRlbVtcImRlZmF1bHRcIl07XG52YXIgX2RlZmF1bHQgPSBMaXN0O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnVzZUxvY2FsZVJlY2VpdmVyID0gdXNlTG9jYWxlUmVjZWl2ZXI7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiKSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiKSk7XG5cbnZhciBfaW5oZXJpdHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiKSk7XG5cbnZhciBfY3JlYXRlU3VwZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVTdXBlclwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfZGVmYXVsdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vZGVmYXVsdFwiKSk7XG5cbnZhciBfY29udGV4dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vY29udGV4dFwiKSk7XG5cbnZhciBMb2NhbGVSZWNlaXZlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMltcImRlZmF1bHRcIl0pKExvY2FsZVJlY2VpdmVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gKDAsIF9jcmVhdGVTdXBlcjJbXCJkZWZhdWx0XCJdKShMb2NhbGVSZWNlaXZlcik7XG5cbiAgZnVuY3Rpb24gTG9jYWxlUmVjZWl2ZXIoKSB7XG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazJbXCJkZWZhdWx0XCJdKSh0aGlzLCBMb2NhbGVSZWNlaXZlcik7XG4gICAgcmV0dXJuIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczJbXCJkZWZhdWx0XCJdKShMb2NhbGVSZWNlaXZlciwgW3tcbiAgICBrZXk6IFwiZ2V0TG9jYWxlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldExvY2FsZSgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY29tcG9uZW50TmFtZSA9IF90aGlzJHByb3BzLmNvbXBvbmVudE5hbWUsXG4gICAgICAgICAgZGVmYXVsdExvY2FsZSA9IF90aGlzJHByb3BzLmRlZmF1bHRMb2NhbGU7XG4gICAgICB2YXIgbG9jYWxlID0gZGVmYXVsdExvY2FsZSB8fCBfZGVmYXVsdFtcImRlZmF1bHRcIl1bY29tcG9uZW50TmFtZSB8fCAnZ2xvYmFsJ107XG4gICAgICB2YXIgYW50TG9jYWxlID0gdGhpcy5jb250ZXh0O1xuICAgICAgdmFyIGxvY2FsZUZyb21Db250ZXh0ID0gY29tcG9uZW50TmFtZSAmJiBhbnRMb2NhbGUgPyBhbnRMb2NhbGVbY29tcG9uZW50TmFtZV0gOiB7fTtcbiAgICAgIHJldHVybiAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCB0eXBlb2YgbG9jYWxlID09PSAnZnVuY3Rpb24nID8gbG9jYWxlKCkgOiBsb2NhbGUpLCBsb2NhbGVGcm9tQ29udGV4dCB8fCB7fSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldExvY2FsZUNvZGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TG9jYWxlQ29kZSgpIHtcbiAgICAgIHZhciBhbnRMb2NhbGUgPSB0aGlzLmNvbnRleHQ7XG4gICAgICB2YXIgbG9jYWxlQ29kZSA9IGFudExvY2FsZSAmJiBhbnRMb2NhbGUubG9jYWxlOyAvLyBIYWQgdXNlIExvY2FsZVByb3ZpZGUgYnV0IGRpZG4ndCBzZXQgbG9jYWxlXG5cbiAgICAgIGlmIChhbnRMb2NhbGUgJiYgYW50TG9jYWxlLmV4aXN0ICYmICFsb2NhbGVDb2RlKSB7XG4gICAgICAgIHJldHVybiBfZGVmYXVsdFtcImRlZmF1bHRcIl0ubG9jYWxlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbG9jYWxlQ29kZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuKHRoaXMuZ2V0TG9jYWxlKCksIHRoaXMuZ2V0TG9jYWxlQ29kZSgpLCB0aGlzLmNvbnRleHQpO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gTG9jYWxlUmVjZWl2ZXI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gTG9jYWxlUmVjZWl2ZXI7XG5Mb2NhbGVSZWNlaXZlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbXBvbmVudE5hbWU6ICdnbG9iYWwnXG59O1xuTG9jYWxlUmVjZWl2ZXIuY29udGV4dFR5cGUgPSBfY29udGV4dFtcImRlZmF1bHRcIl07XG5cbmZ1bmN0aW9uIHVzZUxvY2FsZVJlY2VpdmVyKGNvbXBvbmVudE5hbWUsIGRlZmF1bHRMb2NhbGUpIHtcbiAgdmFyIGFudExvY2FsZSA9IFJlYWN0LnVzZUNvbnRleHQoX2NvbnRleHRbXCJkZWZhdWx0XCJdKTtcbiAgdmFyIGNvbXBvbmVudExvY2FsZSA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHZhciBsb2NhbGUgPSBkZWZhdWx0TG9jYWxlIHx8IF9kZWZhdWx0W1wiZGVmYXVsdFwiXVtjb21wb25lbnROYW1lIHx8ICdnbG9iYWwnXTtcbiAgICB2YXIgbG9jYWxlRnJvbUNvbnRleHQgPSBjb21wb25lbnROYW1lICYmIGFudExvY2FsZSA/IGFudExvY2FsZVtjb21wb25lbnROYW1lXSA6IHt9O1xuICAgIHJldHVybiAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCB0eXBlb2YgbG9jYWxlID09PSAnZnVuY3Rpb24nID8gbG9jYWxlKCkgOiBsb2NhbGUpLCBsb2NhbGVGcm9tQ29udGV4dCB8fCB7fSk7XG4gIH0sIFtjb21wb25lbnROYW1lLCBkZWZhdWx0TG9jYWxlLCBhbnRMb2NhbGVdKTtcbiAgcmV0dXJuIFtjb21wb25lbnRMb2NhbGVdO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbnZhciBMb2NhbGVDb250ZXh0ID0gLyojX19QVVJFX18qLygwLCBfcmVhY3QuY3JlYXRlQ29udGV4dCkodW5kZWZpbmVkKTtcbnZhciBfZGVmYXVsdCA9IExvY2FsZUNvbnRleHQ7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2RlZmF1bHQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbG9jYWxlL2RlZmF1bHRcIikpO1xuXG52YXIgX2RlZmF1bHQgPSBfZGVmYXVsdDJbXCJkZWZhdWx0XCJdO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGV4cG9ydHMuQU5UX01BUksgPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIikpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3NcIikpO1xuXG52YXIgX2luaGVyaXRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIikpO1xuXG52YXIgX2NyZWF0ZVN1cGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlU3VwZXJcIikpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2Rldldhcm5pbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9fdXRpbC9kZXZXYXJuaW5nXCIpKTtcblxudmFyIF9sb2NhbGUgPSByZXF1aXJlKFwiLi4vbW9kYWwvbG9jYWxlXCIpO1xuXG52YXIgX2NvbnRleHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2NvbnRleHRcIikpO1xuXG52YXIgQU5UX01BUksgPSAnaW50ZXJuYWxNYXJrJztcbmV4cG9ydHMuQU5UX01BUksgPSBBTlRfTUFSSztcblxudmFyIExvY2FsZVByb3ZpZGVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMyW1wiZGVmYXVsdFwiXSkoTG9jYWxlUHJvdmlkZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSAoMCwgX2NyZWF0ZVN1cGVyMltcImRlZmF1bHRcIl0pKExvY2FsZVByb3ZpZGVyKTtcblxuICBmdW5jdGlvbiBMb2NhbGVQcm92aWRlcihwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2syW1wiZGVmYXVsdFwiXSkodGhpcywgTG9jYWxlUHJvdmlkZXIpO1xuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpO1xuICAgICgwLCBfbG9jYWxlLmNoYW5nZUNvbmZpcm1Mb2NhbGUpKHByb3BzLmxvY2FsZSAmJiBwcm9wcy5sb2NhbGUuTW9kYWwpO1xuICAgICgwLCBfZGV2V2FybmluZ1tcImRlZmF1bHRcIl0pKHByb3BzLl9BTlRfTUFSS19fID09PSBBTlRfTUFSSywgJ0xvY2FsZVByb3ZpZGVyJywgJ2BMb2NhbGVQcm92aWRlcmAgaXMgZGVwcmVjYXRlZC4gUGxlYXNlIHVzZSBgbG9jYWxlYCB3aXRoIGBDb25maWdQcm92aWRlcmAgaW5zdGVhZDogaHR0cDovL3UuYW50LmRlc2lnbi9sb2NhbGUnKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMltcImRlZmF1bHRcIl0pKExvY2FsZVByb3ZpZGVyLCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRVcGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgdmFyIGxvY2FsZSA9IHRoaXMucHJvcHMubG9jYWxlO1xuXG4gICAgICBpZiAocHJldlByb3BzLmxvY2FsZSAhPT0gbG9jYWxlKSB7XG4gICAgICAgICgwLCBfbG9jYWxlLmNoYW5nZUNvbmZpcm1Mb2NhbGUpKGxvY2FsZSAmJiBsb2NhbGUuTW9kYWwpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICgwLCBfbG9jYWxlLmNoYW5nZUNvbmZpcm1Mb2NhbGUpKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGxvY2FsZSA9IF90aGlzJHByb3BzLmxvY2FsZSxcbiAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzLmNoaWxkcmVuO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9jb250ZXh0W1wiZGVmYXVsdFwiXS5Qcm92aWRlciwge1xuICAgICAgICB2YWx1ZTogKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgbG9jYWxlKSwge1xuICAgICAgICAgIGV4aXN0OiB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9LCBjaGlsZHJlbik7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBMb2NhbGVQcm92aWRlcjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBMb2NhbGVQcm92aWRlcjtcbkxvY2FsZVByb3ZpZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgbG9jYWxlOiB7fVxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9lbl9VUyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJjLXBhZ2luYXRpb24vbGliL2xvY2FsZS9lbl9VU1wiKSk7XG5cbnZhciBfZW5fVVMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vZGF0ZS1waWNrZXIvbG9jYWxlL2VuX1VTXCIpKTtcblxudmFyIF9lbl9VUzMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi90aW1lLXBpY2tlci9sb2NhbGUvZW5fVVNcIikpO1xuXG52YXIgX2VuX1VTNCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2NhbGVuZGFyL2xvY2FsZS9lbl9VU1wiKSk7XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXRlbXBsYXRlLWN1cmx5LWluLXN0cmluZyAqL1xudmFyIHR5cGVUZW1wbGF0ZSA9ICcke2xhYmVsfSBpcyBub3QgYSB2YWxpZCAke3R5cGV9JztcbnZhciBsb2NhbGVWYWx1ZXMgPSB7XG4gIGxvY2FsZTogJ2VuJyxcbiAgUGFnaW5hdGlvbjogX2VuX1VTW1wiZGVmYXVsdFwiXSxcbiAgRGF0ZVBpY2tlcjogX2VuX1VTMltcImRlZmF1bHRcIl0sXG4gIFRpbWVQaWNrZXI6IF9lbl9VUzNbXCJkZWZhdWx0XCJdLFxuICBDYWxlbmRhcjogX2VuX1VTNFtcImRlZmF1bHRcIl0sXG4gIGdsb2JhbDoge1xuICAgIHBsYWNlaG9sZGVyOiAnUGxlYXNlIHNlbGVjdCdcbiAgfSxcbiAgVGFibGU6IHtcbiAgICBmaWx0ZXJUaXRsZTogJ0ZpbHRlciBtZW51JyxcbiAgICBmaWx0ZXJDb25maXJtOiAnT0snLFxuICAgIGZpbHRlclJlc2V0OiAnUmVzZXQnLFxuICAgIGZpbHRlckVtcHR5VGV4dDogJ05vIGZpbHRlcnMnLFxuICAgIGVtcHR5VGV4dDogJ05vIGRhdGEnLFxuICAgIHNlbGVjdEFsbDogJ1NlbGVjdCBjdXJyZW50IHBhZ2UnLFxuICAgIHNlbGVjdEludmVydDogJ0ludmVydCBjdXJyZW50IHBhZ2UnLFxuICAgIHNlbGVjdGlvbkFsbDogJ1NlbGVjdCBhbGwgZGF0YScsXG4gICAgc29ydFRpdGxlOiAnU29ydCcsXG4gICAgZXhwYW5kOiAnRXhwYW5kIHJvdycsXG4gICAgY29sbGFwc2U6ICdDb2xsYXBzZSByb3cnLFxuICAgIHRyaWdnZXJEZXNjOiAnQ2xpY2sgdG8gc29ydCBkZXNjZW5kaW5nJyxcbiAgICB0cmlnZ2VyQXNjOiAnQ2xpY2sgdG8gc29ydCBhc2NlbmRpbmcnLFxuICAgIGNhbmNlbFNvcnQ6ICdDbGljayB0byBjYW5jZWwgc29ydGluZydcbiAgfSxcbiAgTW9kYWw6IHtcbiAgICBva1RleHQ6ICdPSycsXG4gICAgY2FuY2VsVGV4dDogJ0NhbmNlbCcsXG4gICAganVzdE9rVGV4dDogJ09LJ1xuICB9LFxuICBQb3Bjb25maXJtOiB7XG4gICAgb2tUZXh0OiAnT0snLFxuICAgIGNhbmNlbFRleHQ6ICdDYW5jZWwnXG4gIH0sXG4gIFRyYW5zZmVyOiB7XG4gICAgdGl0bGVzOiBbJycsICcnXSxcbiAgICBzZWFyY2hQbGFjZWhvbGRlcjogJ1NlYXJjaCBoZXJlJyxcbiAgICBpdGVtVW5pdDogJ2l0ZW0nLFxuICAgIGl0ZW1zVW5pdDogJ2l0ZW1zJyxcbiAgICByZW1vdmU6ICdSZW1vdmUnLFxuICAgIHNlbGVjdEN1cnJlbnQ6ICdTZWxlY3QgY3VycmVudCBwYWdlJyxcbiAgICByZW1vdmVDdXJyZW50OiAnUmVtb3ZlIGN1cnJlbnQgcGFnZScsXG4gICAgc2VsZWN0QWxsOiAnU2VsZWN0IGFsbCBkYXRhJyxcbiAgICByZW1vdmVBbGw6ICdSZW1vdmUgYWxsIGRhdGEnLFxuICAgIHNlbGVjdEludmVydDogJ0ludmVydCBjdXJyZW50IHBhZ2UnXG4gIH0sXG4gIFVwbG9hZDoge1xuICAgIHVwbG9hZGluZzogJ1VwbG9hZGluZy4uLicsXG4gICAgcmVtb3ZlRmlsZTogJ1JlbW92ZSBmaWxlJyxcbiAgICB1cGxvYWRFcnJvcjogJ1VwbG9hZCBlcnJvcicsXG4gICAgcHJldmlld0ZpbGU6ICdQcmV2aWV3IGZpbGUnLFxuICAgIGRvd25sb2FkRmlsZTogJ0Rvd25sb2FkIGZpbGUnXG4gIH0sXG4gIEVtcHR5OiB7XG4gICAgZGVzY3JpcHRpb246ICdObyBEYXRhJ1xuICB9LFxuICBJY29uOiB7XG4gICAgaWNvbjogJ2ljb24nXG4gIH0sXG4gIFRleHQ6IHtcbiAgICBlZGl0OiAnRWRpdCcsXG4gICAgY29weTogJ0NvcHknLFxuICAgIGNvcGllZDogJ0NvcGllZCcsXG4gICAgZXhwYW5kOiAnRXhwYW5kJ1xuICB9LFxuICBQYWdlSGVhZGVyOiB7XG4gICAgYmFjazogJ0JhY2snXG4gIH0sXG4gIEZvcm06IHtcbiAgICBvcHRpb25hbDogJyhvcHRpb25hbCknLFxuICAgIGRlZmF1bHRWYWxpZGF0ZU1lc3NhZ2VzOiB7XG4gICAgICBcImRlZmF1bHRcIjogJ0ZpZWxkIHZhbGlkYXRpb24gZXJyb3IgZm9yICR7bGFiZWx9JyxcbiAgICAgIHJlcXVpcmVkOiAnUGxlYXNlIGVudGVyICR7bGFiZWx9JyxcbiAgICAgIFwiZW51bVwiOiAnJHtsYWJlbH0gbXVzdCBiZSBvbmUgb2YgWyR7ZW51bX1dJyxcbiAgICAgIHdoaXRlc3BhY2U6ICcke2xhYmVsfSBjYW5ub3QgYmUgYSBibGFuayBjaGFyYWN0ZXInLFxuICAgICAgZGF0ZToge1xuICAgICAgICBmb3JtYXQ6ICcke2xhYmVsfSBkYXRlIGZvcm1hdCBpcyBpbnZhbGlkJyxcbiAgICAgICAgcGFyc2U6ICcke2xhYmVsfSBjYW5ub3QgYmUgY29udmVydGVkIHRvIGEgZGF0ZScsXG4gICAgICAgIGludmFsaWQ6ICcke2xhYmVsfSBpcyBhbiBpbnZhbGlkIGRhdGUnXG4gICAgICB9LFxuICAgICAgdHlwZXM6IHtcbiAgICAgICAgc3RyaW5nOiB0eXBlVGVtcGxhdGUsXG4gICAgICAgIG1ldGhvZDogdHlwZVRlbXBsYXRlLFxuICAgICAgICBhcnJheTogdHlwZVRlbXBsYXRlLFxuICAgICAgICBvYmplY3Q6IHR5cGVUZW1wbGF0ZSxcbiAgICAgICAgbnVtYmVyOiB0eXBlVGVtcGxhdGUsXG4gICAgICAgIGRhdGU6IHR5cGVUZW1wbGF0ZSxcbiAgICAgICAgXCJib29sZWFuXCI6IHR5cGVUZW1wbGF0ZSxcbiAgICAgICAgaW50ZWdlcjogdHlwZVRlbXBsYXRlLFxuICAgICAgICBcImZsb2F0XCI6IHR5cGVUZW1wbGF0ZSxcbiAgICAgICAgcmVnZXhwOiB0eXBlVGVtcGxhdGUsXG4gICAgICAgIGVtYWlsOiB0eXBlVGVtcGxhdGUsXG4gICAgICAgIHVybDogdHlwZVRlbXBsYXRlLFxuICAgICAgICBoZXg6IHR5cGVUZW1wbGF0ZVxuICAgICAgfSxcbiAgICAgIHN0cmluZzoge1xuICAgICAgICBsZW46ICcke2xhYmVsfSBtdXN0IGJlICR7bGVufSBjaGFyYWN0ZXJzJyxcbiAgICAgICAgbWluOiAnJHtsYWJlbH0gbXVzdCBiZSBhdCBsZWFzdCAke21pbn0gY2hhcmFjdGVycycsXG4gICAgICAgIG1heDogJyR7bGFiZWx9IG11c3QgYmUgdXAgdG8gJHttYXh9IGNoYXJhY3RlcnMnLFxuICAgICAgICByYW5nZTogJyR7bGFiZWx9IG11c3QgYmUgYmV0d2VlbiAke21pbn0tJHttYXh9IGNoYXJhY3RlcnMnXG4gICAgICB9LFxuICAgICAgbnVtYmVyOiB7XG4gICAgICAgIGxlbjogJyR7bGFiZWx9IG11c3QgYmUgZXF1YWwgdG8gJHtsZW59JyxcbiAgICAgICAgbWluOiAnJHtsYWJlbH0gbXVzdCBiZSBtaW5pbXVtICR7bWlufScsXG4gICAgICAgIG1heDogJyR7bGFiZWx9IG11c3QgYmUgbWF4aW11bSAke21heH0nLFxuICAgICAgICByYW5nZTogJyR7bGFiZWx9IG11c3QgYmUgYmV0d2VlbiAke21pbn0tJHttYXh9J1xuICAgICAgfSxcbiAgICAgIGFycmF5OiB7XG4gICAgICAgIGxlbjogJ011c3QgYmUgJHtsZW59ICR7bGFiZWx9JyxcbiAgICAgICAgbWluOiAnQXQgbGVhc3QgJHttaW59ICR7bGFiZWx9JyxcbiAgICAgICAgbWF4OiAnQXQgbW9zdCAke21heH0gJHtsYWJlbH0nLFxuICAgICAgICByYW5nZTogJ1RoZSBhbW91bnQgb2YgJHtsYWJlbH0gbXVzdCBiZSBiZXR3ZWVuICR7bWlufS0ke21heH0nXG4gICAgICB9LFxuICAgICAgcGF0dGVybjoge1xuICAgICAgICBtaXNtYXRjaDogJyR7bGFiZWx9IGRvZXMgbm90IG1hdGNoIHRoZSBwYXR0ZXJuICR7cGF0dGVybn0nXG4gICAgICB9XG4gICAgfVxuICB9XG59O1xudmFyIF9kZWZhdWx0ID0gbG9jYWxlVmFsdWVzO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGNyZWF0ZVVzZU1lc3NhZ2U7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX3NsaWNlZFRvQXJyYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5XCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF91c2VOb3RpZmljYXRpb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyYy1ub3RpZmljYXRpb24vbGliL3VzZU5vdGlmaWNhdGlvblwiKSk7XG5cbnZhciBfY29uZmlnUHJvdmlkZXIgPSByZXF1aXJlKFwiLi4vLi4vY29uZmlnLXByb3ZpZGVyXCIpO1xuXG52YXIgXyA9IHJlcXVpcmUoXCIuLlwiKTtcblxuZnVuY3Rpb24gY3JlYXRlVXNlTWVzc2FnZShnZXRSY05vdGlmaWNhdGlvbkluc3RhbmNlLCBnZXRSQ05vdGljZVByb3BzKSB7XG4gIHZhciB1c2VNZXNzYWdlID0gZnVuY3Rpb24gdXNlTWVzc2FnZSgpIHtcbiAgICAvLyBXZSBjYW4gb25seSBnZXQgY29udGVudCBieSByZW5kZXJcbiAgICB2YXIgZ2V0UHJlZml4Q2xzOyAvLyBXZSBjcmVhdGUgYSBwcm94eSB0byBoYW5kbGUgZGVsYXkgY3JlYXRlZCBpbnN0YW5jZVxuXG4gICAgdmFyIGlubmVySW5zdGFuY2UgPSBudWxsO1xuICAgIHZhciBwcm94eSA9IHtcbiAgICAgIGFkZDogZnVuY3Rpb24gYWRkKG5vdGljZVByb3BzLCBob2xkZXJDYWxsYmFjaykge1xuICAgICAgICBpbm5lckluc3RhbmNlID09PSBudWxsIHx8IGlubmVySW5zdGFuY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGlubmVySW5zdGFuY2UuY29tcG9uZW50LmFkZChub3RpY2VQcm9wcywgaG9sZGVyQ2FsbGJhY2spO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgX3VzZVJDTm90aWZpY2F0aW9uID0gKDAsIF91c2VOb3RpZmljYXRpb25bXCJkZWZhdWx0XCJdKShwcm94eSksXG4gICAgICAgIF91c2VSQ05vdGlmaWNhdGlvbjIgPSAoMCwgX3NsaWNlZFRvQXJyYXkyW1wiZGVmYXVsdFwiXSkoX3VzZVJDTm90aWZpY2F0aW9uLCAyKSxcbiAgICAgICAgaG9va05vdGlmeSA9IF91c2VSQ05vdGlmaWNhdGlvbjJbMF0sXG4gICAgICAgIGhvbGRlciA9IF91c2VSQ05vdGlmaWNhdGlvbjJbMV07XG5cbiAgICBmdW5jdGlvbiBub3RpZnkoYXJncykge1xuICAgICAgdmFyIGN1c3RvbWl6ZVByZWZpeENscyA9IGFyZ3MucHJlZml4Q2xzO1xuICAgICAgdmFyIG1lcmdlZFByZWZpeENscyA9IGdldFByZWZpeENscygnbWVzc2FnZScsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gICAgICB2YXIgdGFyZ2V0ID0gYXJncy5rZXkgfHwgKDAsIF8uZ2V0S2V5VGhlbkluY3JlYXNlS2V5KSgpO1xuICAgICAgdmFyIGNsb3NlUHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IGZ1bmN0aW9uIGNhbGxiYWNrKCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYXJncy5vbkNsb3NlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBhcmdzLm9uQ2xvc2UoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgfTtcblxuICAgICAgICBnZXRSY05vdGlmaWNhdGlvbkluc3RhbmNlKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIGFyZ3MpLCB7XG4gICAgICAgICAgcHJlZml4Q2xzOiBtZXJnZWRQcmVmaXhDbHNcbiAgICAgICAgfSksIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgICAgdmFyIHByZWZpeENscyA9IF9yZWYucHJlZml4Q2xzLFxuICAgICAgICAgICAgICBpbnN0YW5jZSA9IF9yZWYuaW5zdGFuY2U7XG4gICAgICAgICAgaW5uZXJJbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgICAgICAgIGhvb2tOb3RpZnkoZ2V0UkNOb3RpY2VQcm9wcygoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBhcmdzKSwge1xuICAgICAgICAgICAga2V5OiB0YXJnZXQsXG4gICAgICAgICAgICBvbkNsb3NlOiBjYWxsYmFja1xuICAgICAgICAgIH0pLCBwcmVmaXhDbHMpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgdmFyIHJlc3VsdCA9IGZ1bmN0aW9uIHJlc3VsdCgpIHtcbiAgICAgICAgaWYgKGlubmVySW5zdGFuY2UpIHtcbiAgICAgICAgICBpbm5lckluc3RhbmNlLnJlbW92ZU5vdGljZSh0YXJnZXQpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICByZXN1bHQudGhlbiA9IGZ1bmN0aW9uIChmaWxsZWQsIHJlamVjdGVkKSB7XG4gICAgICAgIHJldHVybiBjbG9zZVByb21pc2UudGhlbihmaWxsZWQsIHJlamVjdGVkKTtcbiAgICAgIH07XG5cbiAgICAgIHJlc3VsdC5wcm9taXNlID0gY2xvc2VQcm9taXNlO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IC8vIEZpbGwgZnVuY3Rpb25zXG5cblxuICAgIHZhciBob29rQXBpUmVmID0gUmVhY3QudXNlUmVmKHt9KTtcbiAgICBob29rQXBpUmVmLmN1cnJlbnQub3BlbiA9IG5vdGlmeTtcbiAgICBbJ3N1Y2Nlc3MnLCAnaW5mbycsICd3YXJuaW5nJywgJ2Vycm9yJywgJ2xvYWRpbmcnXS5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICByZXR1cm4gKDAsIF8uYXR0YWNoVHlwZUFwaSkoaG9va0FwaVJlZi5jdXJyZW50LCB0eXBlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2hvb2tBcGlSZWYuY3VycmVudCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnN1bWVyLCB7XG4gICAgICBrZXk6IFwiaG9sZGVyXCJcbiAgICB9LCBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgZ2V0UHJlZml4Q2xzID0gY29udGV4dC5nZXRQcmVmaXhDbHM7XG4gICAgICByZXR1cm4gaG9sZGVyO1xuICAgIH0pXTtcbiAgfTtcblxuICByZXR1cm4gdXNlTWVzc2FnZTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldEtleVRoZW5JbmNyZWFzZUtleSA9IGdldEtleVRoZW5JbmNyZWFzZUtleTtcbmV4cG9ydHMuYXR0YWNoVHlwZUFwaSA9IGF0dGFjaFR5cGVBcGk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGV4cG9ydHMuZ2V0SW5zdGFuY2UgPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIikpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9yY05vdGlmaWNhdGlvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJjLW5vdGlmaWNhdGlvblwiKSk7XG5cbnZhciBfTG9hZGluZ091dGxpbmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvTG9hZGluZ091dGxpbmVkXCIpKTtcblxudmFyIF9FeGNsYW1hdGlvbkNpcmNsZUZpbGxlZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL0V4Y2xhbWF0aW9uQ2lyY2xlRmlsbGVkXCIpKTtcblxudmFyIF9DbG9zZUNpcmNsZUZpbGxlZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL0Nsb3NlQ2lyY2xlRmlsbGVkXCIpKTtcblxudmFyIF9DaGVja0NpcmNsZUZpbGxlZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL0NoZWNrQ2lyY2xlRmlsbGVkXCIpKTtcblxudmFyIF9JbmZvQ2lyY2xlRmlsbGVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvSW5mb0NpcmNsZUZpbGxlZFwiKSk7XG5cbnZhciBfdXNlTWVzc2FnZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaG9va3MvdXNlTWVzc2FnZVwiKSk7XG5cbnZhciBtZXNzYWdlSW5zdGFuY2U7XG52YXIgZGVmYXVsdER1cmF0aW9uID0gMztcbnZhciBkZWZhdWx0VG9wO1xudmFyIGtleSA9IDE7XG52YXIgbG9jYWxQcmVmaXhDbHMgPSAnYW50LW1lc3NhZ2UnO1xudmFyIHRyYW5zaXRpb25OYW1lID0gJ21vdmUtdXAnO1xudmFyIGdldENvbnRhaW5lcjtcbnZhciBtYXhDb3VudDtcbnZhciBydGwgPSBmYWxzZTtcblxuZnVuY3Rpb24gZ2V0S2V5VGhlbkluY3JlYXNlS2V5KCkge1xuICByZXR1cm4ga2V5Kys7XG59XG5cbmZ1bmN0aW9uIHNldE1lc3NhZ2VDb25maWcob3B0aW9ucykge1xuICBpZiAob3B0aW9ucy50b3AgIT09IHVuZGVmaW5lZCkge1xuICAgIGRlZmF1bHRUb3AgPSBvcHRpb25zLnRvcDtcbiAgICBtZXNzYWdlSW5zdGFuY2UgPSBudWxsOyAvLyBkZWxldGUgbWVzc2FnZUluc3RhbmNlIGZvciBuZXcgZGVmYXVsdFRvcFxuICB9XG5cbiAgaWYgKG9wdGlvbnMuZHVyYXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgIGRlZmF1bHREdXJhdGlvbiA9IG9wdGlvbnMuZHVyYXRpb247XG4gIH1cblxuICBpZiAob3B0aW9ucy5wcmVmaXhDbHMgIT09IHVuZGVmaW5lZCkge1xuICAgIGxvY2FsUHJlZml4Q2xzID0gb3B0aW9ucy5wcmVmaXhDbHM7XG4gIH1cblxuICBpZiAob3B0aW9ucy5nZXRDb250YWluZXIgIT09IHVuZGVmaW5lZCkge1xuICAgIGdldENvbnRhaW5lciA9IG9wdGlvbnMuZ2V0Q29udGFpbmVyO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMudHJhbnNpdGlvbk5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgIHRyYW5zaXRpb25OYW1lID0gb3B0aW9ucy50cmFuc2l0aW9uTmFtZTtcbiAgICBtZXNzYWdlSW5zdGFuY2UgPSBudWxsOyAvLyBkZWxldGUgbWVzc2FnZUluc3RhbmNlIGZvciBuZXcgdHJhbnNpdGlvbk5hbWVcbiAgfVxuXG4gIGlmIChvcHRpb25zLm1heENvdW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICBtYXhDb3VudCA9IG9wdGlvbnMubWF4Q291bnQ7XG4gICAgbWVzc2FnZUluc3RhbmNlID0gbnVsbDtcbiAgfVxuXG4gIGlmIChvcHRpb25zLnJ0bCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcnRsID0gb3B0aW9ucy5ydGw7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UkNOb3RpZmljYXRpb25JbnN0YW5jZShhcmdzLCBjYWxsYmFjaykge1xuICB2YXIgcHJlZml4Q2xzID0gYXJncy5wcmVmaXhDbHMgfHwgbG9jYWxQcmVmaXhDbHM7XG5cbiAgaWYgKG1lc3NhZ2VJbnN0YW5jZSkge1xuICAgIGNhbGxiYWNrKHtcbiAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgaW5zdGFuY2U6IG1lc3NhZ2VJbnN0YW5jZVxuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIF9yY05vdGlmaWNhdGlvbltcImRlZmF1bHRcIl0ubmV3SW5zdGFuY2Uoe1xuICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgIHRyYW5zaXRpb25OYW1lOiB0cmFuc2l0aW9uTmFtZSxcbiAgICBzdHlsZToge1xuICAgICAgdG9wOiBkZWZhdWx0VG9wXG4gICAgfSxcbiAgICBnZXRDb250YWluZXI6IGdldENvbnRhaW5lcixcbiAgICBtYXhDb3VudDogbWF4Q291bnRcbiAgfSwgZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgaWYgKG1lc3NhZ2VJbnN0YW5jZSkge1xuICAgICAgY2FsbGJhY2soe1xuICAgICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgICAgaW5zdGFuY2U6IG1lc3NhZ2VJbnN0YW5jZVxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbWVzc2FnZUluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgY2FsbGJhY2soe1xuICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICBpbnN0YW5jZTogaW5zdGFuY2VcbiAgICB9KTtcbiAgfSk7XG59XG5cbnZhciB0eXBlVG9JY29uID0ge1xuICBpbmZvOiBfSW5mb0NpcmNsZUZpbGxlZFtcImRlZmF1bHRcIl0sXG4gIHN1Y2Nlc3M6IF9DaGVja0NpcmNsZUZpbGxlZFtcImRlZmF1bHRcIl0sXG4gIGVycm9yOiBfQ2xvc2VDaXJjbGVGaWxsZWRbXCJkZWZhdWx0XCJdLFxuICB3YXJuaW5nOiBfRXhjbGFtYXRpb25DaXJjbGVGaWxsZWRbXCJkZWZhdWx0XCJdLFxuICBsb2FkaW5nOiBfTG9hZGluZ091dGxpbmVkW1wiZGVmYXVsdFwiXVxufTtcblxuZnVuY3Rpb24gZ2V0UkNOb3RpY2VQcm9wcyhhcmdzLCBwcmVmaXhDbHMpIHtcbiAgdmFyIF9jbGFzc05hbWVzO1xuXG4gIHZhciBkdXJhdGlvbiA9IGFyZ3MuZHVyYXRpb24gIT09IHVuZGVmaW5lZCA/IGFyZ3MuZHVyYXRpb24gOiBkZWZhdWx0RHVyYXRpb247XG4gIHZhciBJY29uQ29tcG9uZW50ID0gdHlwZVRvSWNvblthcmdzLnR5cGVdO1xuICB2YXIgbWVzc2FnZUNsYXNzID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1jdXN0b20tY29udGVudFwiKSwgKF9jbGFzc05hbWVzID0ge30sICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItXCIpLmNvbmNhdChhcmdzLnR5cGUpLCBhcmdzLnR5cGUpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXJ0bFwiKSwgcnRsID09PSB0cnVlKSwgX2NsYXNzTmFtZXMpKTtcbiAgcmV0dXJuIHtcbiAgICBrZXk6IGFyZ3Mua2V5LFxuICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICBzdHlsZTogYXJncy5zdHlsZSB8fCB7fSxcbiAgICBjbGFzc05hbWU6IGFyZ3MuY2xhc3NOYW1lLFxuICAgIGNvbnRlbnQ6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogbWVzc2FnZUNsYXNzXG4gICAgfSwgYXJncy5pY29uIHx8IEljb25Db21wb25lbnQgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbkNvbXBvbmVudCwgbnVsbCksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBhcmdzLmNvbnRlbnQpKSxcbiAgICBvbkNsb3NlOiBhcmdzLm9uQ2xvc2VcbiAgfTtcbn1cblxuZnVuY3Rpb24gbm90aWNlKGFyZ3MpIHtcbiAgdmFyIHRhcmdldCA9IGFyZ3Mua2V5IHx8IGtleSsrO1xuICB2YXIgY2xvc2VQcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICB2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiBjYWxsYmFjaygpIHtcbiAgICAgIGlmICh0eXBlb2YgYXJncy5vbkNsb3NlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGFyZ3Mub25DbG9zZSgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICB9O1xuXG4gICAgZ2V0UkNOb3RpZmljYXRpb25JbnN0YW5jZShhcmdzLCBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIHByZWZpeENscyA9IF9yZWYucHJlZml4Q2xzLFxuICAgICAgICAgIGluc3RhbmNlID0gX3JlZi5pbnN0YW5jZTtcbiAgICAgIGluc3RhbmNlLm5vdGljZShnZXRSQ05vdGljZVByb3BzKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIGFyZ3MpLCB7XG4gICAgICAgIGtleTogdGFyZ2V0LFxuICAgICAgICBvbkNsb3NlOiBjYWxsYmFja1xuICAgICAgfSksIHByZWZpeENscykpO1xuICAgIH0pO1xuICB9KTtcblxuICB2YXIgcmVzdWx0ID0gZnVuY3Rpb24gcmVzdWx0KCkge1xuICAgIGlmIChtZXNzYWdlSW5zdGFuY2UpIHtcbiAgICAgIG1lc3NhZ2VJbnN0YW5jZS5yZW1vdmVOb3RpY2UodGFyZ2V0KTtcbiAgICB9XG4gIH07XG5cbiAgcmVzdWx0LnRoZW4gPSBmdW5jdGlvbiAoZmlsbGVkLCByZWplY3RlZCkge1xuICAgIHJldHVybiBjbG9zZVByb21pc2UudGhlbihmaWxsZWQsIHJlamVjdGVkKTtcbiAgfTtcblxuICByZXN1bHQucHJvbWlzZSA9IGNsb3NlUHJvbWlzZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gaXNBcmdzUHJvcHMoY29udGVudCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGNvbnRlbnQpID09PSAnW29iamVjdCBPYmplY3RdJyAmJiAhIWNvbnRlbnQuY29udGVudDtcbn1cblxudmFyIGFwaSA9IHtcbiAgb3Blbjogbm90aWNlLFxuICBjb25maWc6IHNldE1lc3NhZ2VDb25maWcsXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3kobWVzc2FnZUtleSkge1xuICAgIGlmIChtZXNzYWdlSW5zdGFuY2UpIHtcbiAgICAgIGlmIChtZXNzYWdlS2V5KSB7XG4gICAgICAgIHZhciBfbWVzc2FnZUluc3RhbmNlID0gbWVzc2FnZUluc3RhbmNlLFxuICAgICAgICAgICAgcmVtb3ZlTm90aWNlID0gX21lc3NhZ2VJbnN0YW5jZS5yZW1vdmVOb3RpY2U7XG4gICAgICAgIHJlbW92ZU5vdGljZShtZXNzYWdlS2V5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBfbWVzc2FnZUluc3RhbmNlMiA9IG1lc3NhZ2VJbnN0YW5jZSxcbiAgICAgICAgICAgIGRlc3Ryb3kgPSBfbWVzc2FnZUluc3RhbmNlMi5kZXN0cm95O1xuICAgICAgICBkZXN0cm95KCk7XG4gICAgICAgIG1lc3NhZ2VJbnN0YW5jZSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5mdW5jdGlvbiBhdHRhY2hUeXBlQXBpKG9yaWdpbmFsQXBpLCB0eXBlKSB7XG4gIG9yaWdpbmFsQXBpW3R5cGVdID0gZnVuY3Rpb24gKGNvbnRlbnQsIGR1cmF0aW9uLCBvbkNsb3NlKSB7XG4gICAgaWYgKGlzQXJnc1Byb3BzKGNvbnRlbnQpKSB7XG4gICAgICByZXR1cm4gb3JpZ2luYWxBcGkub3BlbigoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBjb250ZW50KSwge1xuICAgICAgICB0eXBlOiB0eXBlXG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBkdXJhdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb25DbG9zZSA9IGR1cmF0aW9uO1xuICAgICAgZHVyYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9yaWdpbmFsQXBpLm9wZW4oe1xuICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgICBvbkNsb3NlOiBvbkNsb3NlXG4gICAgfSk7XG4gIH07XG59XG5cblsnc3VjY2VzcycsICdpbmZvJywgJ3dhcm5pbmcnLCAnZXJyb3InLCAnbG9hZGluZyddLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgcmV0dXJuIGF0dGFjaFR5cGVBcGkoYXBpLCB0eXBlKTtcbn0pO1xuYXBpLndhcm4gPSBhcGkud2FybmluZztcbmFwaS51c2VNZXNzYWdlID0gKDAsIF91c2VNZXNzYWdlW1wiZGVmYXVsdFwiXSkoZ2V0UkNOb3RpZmljYXRpb25JbnN0YW5jZSwgZ2V0UkNOb3RpY2VQcm9wcyk7XG4vKiogQHByaXZhdGUgdGVzdCBvbmx5IGZ1bmN0aW9uLiBOb3Qgd29yayBvbiBwcm9kdWN0aW9uICovXG5cbnZhciBnZXRJbnN0YW5jZSA9IGZ1bmN0aW9uIGdldEluc3RhbmNlKCkge1xuICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICd0ZXN0JyA/IG1lc3NhZ2VJbnN0YW5jZSA6IG51bGw7XG59O1xuXG5leHBvcnRzLmdldEluc3RhbmNlID0gZ2V0SW5zdGFuY2U7XG52YXIgX2RlZmF1bHQgPSBhcGk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY2hhbmdlQ29uZmlybUxvY2FsZSA9IGNoYW5nZUNvbmZpcm1Mb2NhbGU7XG5leHBvcnRzLmdldENvbmZpcm1Mb2NhbGUgPSBnZXRDb25maXJtTG9jYWxlO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9kZWZhdWx0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbG9jYWxlL2RlZmF1bHRcIikpO1xuXG52YXIgcnVudGltZUxvY2FsZSA9ICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgX2RlZmF1bHRbXCJkZWZhdWx0XCJdLk1vZGFsKTtcblxuZnVuY3Rpb24gY2hhbmdlQ29uZmlybUxvY2FsZShuZXdMb2NhbGUpIHtcbiAgaWYgKG5ld0xvY2FsZSkge1xuICAgIHJ1bnRpbWVMb2NhbGUgPSAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBydW50aW1lTG9jYWxlKSwgbmV3TG9jYWxlKTtcbiAgfSBlbHNlIHtcbiAgICBydW50aW1lTG9jYWxlID0gKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBfZGVmYXVsdFtcImRlZmF1bHRcIl0uTW9kYWwpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldENvbmZpcm1Mb2NhbGUoKSB7XG4gIHJldHVybiBydW50aW1lTG9jYWxlO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gY3JlYXRlVXNlTm90aWZpY2F0aW9uO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9zbGljZWRUb0FycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfdXNlTm90aWZpY2F0aW9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmMtbm90aWZpY2F0aW9uL2xpYi91c2VOb3RpZmljYXRpb25cIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uLy4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxuZnVuY3Rpb24gY3JlYXRlVXNlTm90aWZpY2F0aW9uKGdldE5vdGlmaWNhdGlvbkluc3RhbmNlLCBnZXRSQ05vdGljZVByb3BzKSB7XG4gIHZhciB1c2VOb3RpZmljYXRpb24gPSBmdW5jdGlvbiB1c2VOb3RpZmljYXRpb24oKSB7XG4gICAgLy8gV2UgY2FuIG9ubHkgZ2V0IGNvbnRlbnQgYnkgcmVuZGVyXG4gICAgdmFyIGdldFByZWZpeENsczsgLy8gV2UgY3JlYXRlIGEgcHJveHkgdG8gaGFuZGxlIGRlbGF5IGNyZWF0ZWQgaW5zdGFuY2VcblxuICAgIHZhciBpbm5lckluc3RhbmNlID0gbnVsbDtcbiAgICB2YXIgcHJveHkgPSB7XG4gICAgICBhZGQ6IGZ1bmN0aW9uIGFkZChub3RpY2VQcm9wcywgaG9sZGVyQ2FsbGJhY2spIHtcbiAgICAgICAgaW5uZXJJbnN0YW5jZSA9PT0gbnVsbCB8fCBpbm5lckluc3RhbmNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpbm5lckluc3RhbmNlLmNvbXBvbmVudC5hZGQobm90aWNlUHJvcHMsIGhvbGRlckNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIF91c2VSQ05vdGlmaWNhdGlvbiA9ICgwLCBfdXNlTm90aWZpY2F0aW9uW1wiZGVmYXVsdFwiXSkocHJveHkpLFxuICAgICAgICBfdXNlUkNOb3RpZmljYXRpb24yID0gKDAsIF9zbGljZWRUb0FycmF5MltcImRlZmF1bHRcIl0pKF91c2VSQ05vdGlmaWNhdGlvbiwgMiksXG4gICAgICAgIGhvb2tOb3RpZnkgPSBfdXNlUkNOb3RpZmljYXRpb24yWzBdLFxuICAgICAgICBob2xkZXIgPSBfdXNlUkNOb3RpZmljYXRpb24yWzFdO1xuXG4gICAgZnVuY3Rpb24gbm90aWZ5KGFyZ3MpIHtcbiAgICAgIHZhciBjdXN0b21pemVQcmVmaXhDbHMgPSBhcmdzLnByZWZpeENscztcbiAgICAgIHZhciBtZXJnZWRQcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ25vdGlmaWNhdGlvbicsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gICAgICBnZXROb3RpZmljYXRpb25JbnN0YW5jZSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBhcmdzKSwge1xuICAgICAgICBwcmVmaXhDbHM6IG1lcmdlZFByZWZpeENsc1xuICAgICAgfSksIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgIHZhciBwcmVmaXhDbHMgPSBfcmVmLnByZWZpeENscyxcbiAgICAgICAgICAgIGluc3RhbmNlID0gX3JlZi5pbnN0YW5jZTtcbiAgICAgICAgaW5uZXJJbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgICAgICBob29rTm90aWZ5KGdldFJDTm90aWNlUHJvcHMoYXJncywgcHJlZml4Q2xzKSk7XG4gICAgICB9KTtcbiAgICB9IC8vIEZpbGwgZnVuY3Rpb25zXG5cblxuICAgIHZhciBob29rQXBpUmVmID0gUmVhY3QudXNlUmVmKHt9KTtcbiAgICBob29rQXBpUmVmLmN1cnJlbnQub3BlbiA9IG5vdGlmeTtcbiAgICBbJ3N1Y2Nlc3MnLCAnaW5mbycsICd3YXJuaW5nJywgJ2Vycm9yJ10uZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICAgICAgaG9va0FwaVJlZi5jdXJyZW50W3R5cGVdID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIGhvb2tBcGlSZWYuY3VycmVudC5vcGVuKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIGFyZ3MpLCB7XG4gICAgICAgICAgdHlwZTogdHlwZVxuICAgICAgICB9KSk7XG4gICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiBbaG9va0FwaVJlZi5jdXJyZW50LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29uc3VtZXIsIHtcbiAgICAgIGtleTogXCJob2xkZXJcIlxuICAgIH0sIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICBnZXRQcmVmaXhDbHMgPSBjb250ZXh0LmdldFByZWZpeENscztcbiAgICAgIHJldHVybiBob2xkZXI7XG4gICAgfSldO1xuICB9O1xuXG4gIHJldHVybiB1c2VOb3RpZmljYXRpb247XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBleHBvcnRzLmdldEluc3RhbmNlID0gdm9pZCAwO1xuXG52YXIgX3JlZ2VuZXJhdG9yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3JcIikpO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9yY05vdGlmaWNhdGlvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJjLW5vdGlmaWNhdGlvblwiKSk7XG5cbnZhciBfQ2xvc2VPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL0Nsb3NlT3V0bGluZWRcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9DaGVja0NpcmNsZU91dGxpbmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvQ2hlY2tDaXJjbGVPdXRsaW5lZFwiKSk7XG5cbnZhciBfQ2xvc2VDaXJjbGVPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL0Nsb3NlQ2lyY2xlT3V0bGluZWRcIikpO1xuXG52YXIgX0V4Y2xhbWF0aW9uQ2lyY2xlT3V0bGluZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9FeGNsYW1hdGlvbkNpcmNsZU91dGxpbmVkXCIpKTtcblxudmFyIF9JbmZvQ2lyY2xlT3V0bGluZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9JbmZvQ2lyY2xlT3V0bGluZWRcIikpO1xuXG52YXIgX3VzZU5vdGlmaWNhdGlvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaG9va3MvdXNlTm90aWZpY2F0aW9uXCIpKTtcblxudmFyIF9fYXdhaXRlciA9IHZvaWQgMCAmJiAodm9pZCAwKS5fX2F3YWl0ZXIgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7XG4gICAgICByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTtcbiAgICB9XG5cbiAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gIH0pO1xufTtcblxudmFyIG5vdGlmaWNhdGlvbkluc3RhbmNlID0ge307XG52YXIgZGVmYXVsdER1cmF0aW9uID0gNC41O1xudmFyIGRlZmF1bHRUb3AgPSAyNDtcbnZhciBkZWZhdWx0Qm90dG9tID0gMjQ7XG52YXIgZGVmYXVsdFByZWZpeENscyA9ICdhbnQtbm90aWZpY2F0aW9uJztcbnZhciBkZWZhdWx0UGxhY2VtZW50ID0gJ3RvcFJpZ2h0JztcbnZhciBkZWZhdWx0R2V0Q29udGFpbmVyO1xudmFyIGRlZmF1bHRDbG9zZUljb247XG52YXIgcnRsID0gZmFsc2U7XG5cbmZ1bmN0aW9uIHNldE5vdGlmaWNhdGlvbkNvbmZpZyhvcHRpb25zKSB7XG4gIHZhciBkdXJhdGlvbiA9IG9wdGlvbnMuZHVyYXRpb24sXG4gICAgICBwbGFjZW1lbnQgPSBvcHRpb25zLnBsYWNlbWVudCxcbiAgICAgIGJvdHRvbSA9IG9wdGlvbnMuYm90dG9tLFxuICAgICAgdG9wID0gb3B0aW9ucy50b3AsXG4gICAgICBnZXRDb250YWluZXIgPSBvcHRpb25zLmdldENvbnRhaW5lcixcbiAgICAgIGNsb3NlSWNvbiA9IG9wdGlvbnMuY2xvc2VJY29uLFxuICAgICAgcHJlZml4Q2xzID0gb3B0aW9ucy5wcmVmaXhDbHM7XG5cbiAgaWYgKHByZWZpeENscyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZGVmYXVsdFByZWZpeENscyA9IHByZWZpeENscztcbiAgfVxuXG4gIGlmIChkdXJhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZGVmYXVsdER1cmF0aW9uID0gZHVyYXRpb247XG4gIH1cblxuICBpZiAocGxhY2VtZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICBkZWZhdWx0UGxhY2VtZW50ID0gcGxhY2VtZW50O1xuICB9IGVsc2UgaWYgKG9wdGlvbnMucnRsKSB7XG4gICAgZGVmYXVsdFBsYWNlbWVudCA9ICd0b3BMZWZ0JztcbiAgfVxuXG4gIGlmIChib3R0b20gIT09IHVuZGVmaW5lZCkge1xuICAgIGRlZmF1bHRCb3R0b20gPSBib3R0b207XG4gIH1cblxuICBpZiAodG9wICE9PSB1bmRlZmluZWQpIHtcbiAgICBkZWZhdWx0VG9wID0gdG9wO1xuICB9XG5cbiAgaWYgKGdldENvbnRhaW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZGVmYXVsdEdldENvbnRhaW5lciA9IGdldENvbnRhaW5lcjtcbiAgfVxuXG4gIGlmIChjbG9zZUljb24gIT09IHVuZGVmaW5lZCkge1xuICAgIGRlZmF1bHRDbG9zZUljb24gPSBjbG9zZUljb247XG4gIH1cblxuICBpZiAob3B0aW9ucy5ydGwgIT09IHVuZGVmaW5lZCkge1xuICAgIHJ0bCA9IG9wdGlvbnMucnRsO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFBsYWNlbWVudFN0eWxlKHBsYWNlbWVudCkge1xuICB2YXIgdG9wID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBkZWZhdWx0VG9wO1xuICB2YXIgYm90dG9tID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBkZWZhdWx0Qm90dG9tO1xuICB2YXIgc3R5bGU7XG5cbiAgc3dpdGNoIChwbGFjZW1lbnQpIHtcbiAgICBjYXNlICd0b3BMZWZ0JzpcbiAgICAgIHN0eWxlID0ge1xuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICB0b3A6IHRvcCxcbiAgICAgICAgYm90dG9tOiAnYXV0bydcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3RvcFJpZ2h0JzpcbiAgICAgIHN0eWxlID0ge1xuICAgICAgICByaWdodDogMCxcbiAgICAgICAgdG9wOiB0b3AsXG4gICAgICAgIGJvdHRvbTogJ2F1dG8nXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdib3R0b21MZWZ0JzpcbiAgICAgIHN0eWxlID0ge1xuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICB0b3A6ICdhdXRvJyxcbiAgICAgICAgYm90dG9tOiBib3R0b21cbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBzdHlsZSA9IHtcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIHRvcDogJ2F1dG8nLFxuICAgICAgICBib3R0b206IGJvdHRvbVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBnZXROb3RpZmljYXRpb25JbnN0YW5jZShhcmdzLCBjYWxsYmFjaykge1xuICB2YXIgX2FyZ3MkcGxhY2VtZW50ID0gYXJncy5wbGFjZW1lbnQsXG4gICAgICBwbGFjZW1lbnQgPSBfYXJncyRwbGFjZW1lbnQgPT09IHZvaWQgMCA/IGRlZmF1bHRQbGFjZW1lbnQgOiBfYXJncyRwbGFjZW1lbnQsXG4gICAgICB0b3AgPSBhcmdzLnRvcCxcbiAgICAgIGJvdHRvbSA9IGFyZ3MuYm90dG9tLFxuICAgICAgX2FyZ3MkZ2V0Q29udGFpbmVyID0gYXJncy5nZXRDb250YWluZXIsXG4gICAgICBnZXRDb250YWluZXIgPSBfYXJncyRnZXRDb250YWluZXIgPT09IHZvaWQgMCA/IGRlZmF1bHRHZXRDb250YWluZXIgOiBfYXJncyRnZXRDb250YWluZXIsXG4gICAgICBfYXJncyRjbG9zZUljb24gPSBhcmdzLmNsb3NlSWNvbixcbiAgICAgIGNsb3NlSWNvbiA9IF9hcmdzJGNsb3NlSWNvbiA9PT0gdm9pZCAwID8gZGVmYXVsdENsb3NlSWNvbiA6IF9hcmdzJGNsb3NlSWNvbjtcbiAgdmFyIG91dGVyUHJlZml4Q2xzID0gYXJncy5wcmVmaXhDbHMgfHwgZGVmYXVsdFByZWZpeENscztcbiAgdmFyIHByZWZpeENscyA9IFwiXCIuY29uY2F0KG91dGVyUHJlZml4Q2xzLCBcIi1ub3RpY2VcIik7XG4gIHZhciBjYWNoZUtleSA9IFwiXCIuY29uY2F0KG91dGVyUHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KHBsYWNlbWVudCk7XG4gIHZhciBjYWNoZUluc3RhbmNlID0gbm90aWZpY2F0aW9uSW5zdGFuY2VbY2FjaGVLZXldO1xuXG4gIGlmIChjYWNoZUluc3RhbmNlKSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKGNhY2hlSW5zdGFuY2UpLnRoZW4oZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgICBjYWxsYmFjayh7XG4gICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgICBpbnN0YW5jZTogaW5zdGFuY2VcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBjbG9zZUljb25Ub1JlbmRlciA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChvdXRlclByZWZpeENscywgXCItY2xvc2UteFwiKVxuICB9LCBjbG9zZUljb24gfHwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX0Nsb3NlT3V0bGluZWRbXCJkZWZhdWx0XCJdLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChvdXRlclByZWZpeENscywgXCItY2xvc2UtaWNvblwiKVxuICB9KSk7XG4gIHZhciBub3RpZmljYXRpb25DbGFzcyA9ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKFwiXCIuY29uY2F0KG91dGVyUHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KHBsYWNlbWVudCksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoe30sIFwiXCIuY29uY2F0KG91dGVyUHJlZml4Q2xzLCBcIi1ydGxcIiksIHJ0bCA9PT0gdHJ1ZSkpO1xuICBub3RpZmljYXRpb25JbnN0YW5jZVtjYWNoZUtleV0gPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgIF9yY05vdGlmaWNhdGlvbltcImRlZmF1bHRcIl0ubmV3SW5zdGFuY2Uoe1xuICAgICAgcHJlZml4Q2xzOiBvdXRlclByZWZpeENscyxcbiAgICAgIGNsYXNzTmFtZTogbm90aWZpY2F0aW9uQ2xhc3MsXG4gICAgICBzdHlsZTogZ2V0UGxhY2VtZW50U3R5bGUocGxhY2VtZW50LCB0b3AsIGJvdHRvbSksXG4gICAgICBnZXRDb250YWluZXI6IGdldENvbnRhaW5lcixcbiAgICAgIGNsb3NlSWNvbjogY2xvc2VJY29uVG9SZW5kZXJcbiAgICB9LCBmdW5jdGlvbiAobm90aWZpY2F0aW9uKSB7XG4gICAgICByZXNvbHZlKG5vdGlmaWNhdGlvbik7XG4gICAgICBjYWxsYmFjayh7XG4gICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgICBpbnN0YW5jZTogbm90aWZpY2F0aW9uXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbnZhciB0eXBlVG9JY29uID0ge1xuICBzdWNjZXNzOiBfQ2hlY2tDaXJjbGVPdXRsaW5lZFtcImRlZmF1bHRcIl0sXG4gIGluZm86IF9JbmZvQ2lyY2xlT3V0bGluZWRbXCJkZWZhdWx0XCJdLFxuICBlcnJvcjogX0Nsb3NlQ2lyY2xlT3V0bGluZWRbXCJkZWZhdWx0XCJdLFxuICB3YXJuaW5nOiBfRXhjbGFtYXRpb25DaXJjbGVPdXRsaW5lZFtcImRlZmF1bHRcIl1cbn07XG5cbmZ1bmN0aW9uIGdldFJDTm90aWNlUHJvcHMoYXJncywgcHJlZml4Q2xzKSB7XG4gIHZhciBkdXJhdGlvbiA9IGFyZ3MuZHVyYXRpb24gPT09IHVuZGVmaW5lZCA/IGRlZmF1bHREdXJhdGlvbiA6IGFyZ3MuZHVyYXRpb247XG4gIHZhciBpY29uTm9kZSA9IG51bGw7XG5cbiAgaWYgKGFyZ3MuaWNvbikge1xuICAgIGljb25Ob2RlID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pY29uXCIpXG4gICAgfSwgYXJncy5pY29uKTtcbiAgfSBlbHNlIGlmIChhcmdzLnR5cGUpIHtcbiAgICBpY29uTm9kZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KHR5cGVUb0ljb25bYXJncy50eXBlXSB8fCBudWxsLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaWNvbiBcIikuY29uY2F0KHByZWZpeENscywgXCItaWNvbi1cIikuY29uY2F0KGFyZ3MudHlwZSlcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBhdXRvTWFyZ2luVGFnID0gIWFyZ3MuZGVzY3JpcHRpb24gJiYgaWNvbk5vZGUgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1tZXNzYWdlLXNpbmdsZS1saW5lLWF1dG8tbWFyZ2luXCIpXG4gIH0pIDogbnVsbDtcbiAgcmV0dXJuIHtcbiAgICBjb250ZW50OiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IGljb25Ob2RlID8gXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi13aXRoLWljb25cIikgOiAnJyxcbiAgICAgIHJvbGU6IFwiYWxlcnRcIlxuICAgIH0sIGljb25Ob2RlLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbWVzc2FnZVwiKVxuICAgIH0sIGF1dG9NYXJnaW5UYWcsIGFyZ3MubWVzc2FnZSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1kZXNjcmlwdGlvblwiKVxuICAgIH0sIGFyZ3MuZGVzY3JpcHRpb24pLCBhcmdzLmJ0biA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItYnRuXCIpXG4gICAgfSwgYXJncy5idG4pIDogbnVsbCksXG4gICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgIGNsb3NhYmxlOiB0cnVlLFxuICAgIG9uQ2xvc2U6IGFyZ3Mub25DbG9zZSxcbiAgICBvbkNsaWNrOiBhcmdzLm9uQ2xpY2ssXG4gICAga2V5OiBhcmdzLmtleSxcbiAgICBzdHlsZTogYXJncy5zdHlsZSB8fCB7fSxcbiAgICBjbGFzc05hbWU6IGFyZ3MuY2xhc3NOYW1lXG4gIH07XG59XG5cbmZ1bmN0aW9uIG5vdGljZShhcmdzKSB7XG4gIGdldE5vdGlmaWNhdGlvbkluc3RhbmNlKGFyZ3MsIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIHByZWZpeENscyA9IF9yZWYucHJlZml4Q2xzLFxuICAgICAgICBpbnN0YW5jZSA9IF9yZWYuaW5zdGFuY2U7XG4gICAgaW5zdGFuY2Uubm90aWNlKGdldFJDTm90aWNlUHJvcHMoYXJncywgcHJlZml4Q2xzKSk7XG4gIH0pO1xufVxuXG52YXIgYXBpID0ge1xuICBvcGVuOiBub3RpY2UsXG4gIGNsb3NlOiBmdW5jdGlvbiBjbG9zZShrZXkpIHtcbiAgICBPYmplY3Qua2V5cyhub3RpZmljYXRpb25JbnN0YW5jZSkuZm9yRWFjaChmdW5jdGlvbiAoY2FjaGVLZXkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobm90aWZpY2F0aW9uSW5zdGFuY2VbY2FjaGVLZXldKS50aGVuKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgICAgICBpbnN0YW5jZS5yZW1vdmVOb3RpY2Uoa2V5KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuICBjb25maWc6IHNldE5vdGlmaWNhdGlvbkNvbmZpZyxcbiAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICBPYmplY3Qua2V5cyhub3RpZmljYXRpb25JbnN0YW5jZSkuZm9yRWFjaChmdW5jdGlvbiAoY2FjaGVLZXkpIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZShub3RpZmljYXRpb25JbnN0YW5jZVtjYWNoZUtleV0pLnRoZW4oZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgICAgIGluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICAgIH0pO1xuICAgICAgZGVsZXRlIG5vdGlmaWNhdGlvbkluc3RhbmNlW2NhY2hlS2V5XTsgLy8gbGd0bVtqcy9taXNzaW5nLWF3YWl0XVxuICAgIH0pO1xuICB9XG59O1xuWydzdWNjZXNzJywgJ2luZm8nLCAnd2FybmluZycsICdlcnJvciddLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgYXBpW3R5cGVdID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICByZXR1cm4gYXBpLm9wZW4oKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgYXJncyksIHtcbiAgICAgIHR5cGU6IHR5cGVcbiAgICB9KSk7XG4gIH07XG59KTtcbmFwaS53YXJuID0gYXBpLndhcm5pbmc7XG5hcGkudXNlTm90aWZpY2F0aW9uID0gKDAsIF91c2VOb3RpZmljYXRpb25bXCJkZWZhdWx0XCJdKShnZXROb3RpZmljYXRpb25JbnN0YW5jZSwgZ2V0UkNOb3RpY2VQcm9wcyk7XG4vKiogQHByaXZhdGUgdGVzdCBvbmx5IGZ1bmN0aW9uLiBOb3Qgd29yayBvbiBwcm9kdWN0aW9uICovXG5cbnZhciBnZXRJbnN0YW5jZSA9IGZ1bmN0aW9uIGdldEluc3RhbmNlKGNhY2hlS2V5KSB7XG4gIHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgLyojX19QVVJFX18qL19yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlKCkge1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAndGVzdCcgPyBub3RpZmljYXRpb25JbnN0YW5jZVtjYWNoZUtleV0gOiBudWxsKTtcblxuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZSk7XG4gIH0pKTtcbn07XG5cbmV4cG9ydHMuZ2V0SW5zdGFuY2UgPSBnZXRJbnN0YW5jZTtcbnZhciBfZGVmYXVsdCA9IGFwaTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3NlbGVjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NlbGVjdFwiKSk7XG5cbnZhciBNaW5pU2VsZWN0ID0gZnVuY3Rpb24gTWluaVNlbGVjdChwcm9wcykge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX3NlbGVjdFtcImRlZmF1bHRcIl0sICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7XG4gICAgc2l6ZTogXCJzbWFsbFwiXG4gIH0sIHByb3BzKSk7XG59O1xuXG5NaW5pU2VsZWN0Lk9wdGlvbiA9IF9zZWxlY3RbXCJkZWZhdWx0XCJdLk9wdGlvbjtcbnZhciBfZGVmYXVsdCA9IE1pbmlTZWxlY3Q7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIikpO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9yY1BhZ2luYXRpb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyYy1wYWdpbmF0aW9uXCIpKTtcblxudmFyIF9lbl9VUyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJjLXBhZ2luYXRpb24vbGliL2xvY2FsZS9lbl9VU1wiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX0xlZnRPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL0xlZnRPdXRsaW5lZFwiKSk7XG5cbnZhciBfUmlnaHRPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL1JpZ2h0T3V0bGluZWRcIikpO1xuXG52YXIgX0RvdWJsZUxlZnRPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL0RvdWJsZUxlZnRPdXRsaW5lZFwiKSk7XG5cbnZhciBfRG91YmxlUmlnaHRPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL0RvdWJsZVJpZ2h0T3V0bGluZWRcIikpO1xuXG52YXIgX01pbmlTZWxlY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL01pbmlTZWxlY3RcIikpO1xuXG52YXIgX3NlbGVjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NlbGVjdFwiKSk7XG5cbnZhciBfTG9jYWxlUmVjZWl2ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9sb2NhbGUtcHJvdmlkZXIvTG9jYWxlUmVjZWl2ZXJcIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIF91c2VCcmVha3BvaW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2dyaWQvaG9va3MvdXNlQnJlYWtwb2ludFwiKSk7XG5cbnZhciBfX3Jlc3QgPSB2b2lkIDAgJiYgKHZvaWQgMCkuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG5cbiAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgfVxuXG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG52YXIgUGFnaW5hdGlvbiA9IGZ1bmN0aW9uIFBhZ2luYXRpb24oX2EpIHtcbiAgdmFyIGN1c3RvbWl6ZVByZWZpeENscyA9IF9hLnByZWZpeENscyxcbiAgICAgIGN1c3RvbWl6ZVNlbGVjdFByZWZpeENscyA9IF9hLnNlbGVjdFByZWZpeENscyxcbiAgICAgIGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZSxcbiAgICAgIHNpemUgPSBfYS5zaXplLFxuICAgICAgY3VzdG9tTG9jYWxlID0gX2EubG9jYWxlLFxuICAgICAgcmVzdFByb3BzID0gX19yZXN0KF9hLCBbXCJwcmVmaXhDbHNcIiwgXCJzZWxlY3RQcmVmaXhDbHNcIiwgXCJjbGFzc05hbWVcIiwgXCJzaXplXCIsIFwibG9jYWxlXCJdKTtcblxuICB2YXIgX3VzZUJyZWFrcG9pbnQgPSAoMCwgX3VzZUJyZWFrcG9pbnQyW1wiZGVmYXVsdFwiXSkoKSxcbiAgICAgIHhzID0gX3VzZUJyZWFrcG9pbnQueHM7XG5cbiAgdmFyIF9SZWFjdCR1c2VDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29udGV4dCksXG4gICAgICBnZXRQcmVmaXhDbHMgPSBfUmVhY3QkdXNlQ29udGV4dC5nZXRQcmVmaXhDbHMsXG4gICAgICBkaXJlY3Rpb24gPSBfUmVhY3QkdXNlQ29udGV4dC5kaXJlY3Rpb247XG5cbiAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygncGFnaW5hdGlvbicsIGN1c3RvbWl6ZVByZWZpeENscyk7XG5cbiAgdmFyIGdldEljb25zUHJvcHMgPSBmdW5jdGlvbiBnZXRJY29uc1Byb3BzKCkge1xuICAgIHZhciBlbGxpcHNpcyA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaXRlbS1lbGxpcHNpc1wiKVxuICAgIH0sIFwiXFx1MjAyMlxcdTIwMjJcXHUyMDIyXCIpO1xuICAgIHZhciBwcmV2SWNvbiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pdGVtLWxpbmtcIiksXG4gICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgdGFiSW5kZXg6IC0xXG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX0xlZnRPdXRsaW5lZFtcImRlZmF1bHRcIl0sIG51bGwpKTtcbiAgICB2YXIgbmV4dEljb24gPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaXRlbS1saW5rXCIpLFxuICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgIHRhYkluZGV4OiAtMVxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9SaWdodE91dGxpbmVkW1wiZGVmYXVsdFwiXSwgbnVsbCkpO1xuICAgIHZhciBqdW1wUHJldkljb24gPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWl0ZW0tbGlua1wiKVxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pdGVtLWNvbnRhaW5lclwiKVxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9Eb3VibGVMZWZ0T3V0bGluZWRbXCJkZWZhdWx0XCJdLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaXRlbS1saW5rLWljb25cIilcbiAgICB9KSwgZWxsaXBzaXMpKTtcbiAgICB2YXIganVtcE5leHRJY29uID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pdGVtLWxpbmtcIilcbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaXRlbS1jb250YWluZXJcIilcbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfRG91YmxlUmlnaHRPdXRsaW5lZFtcImRlZmF1bHRcIl0sIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pdGVtLWxpbmstaWNvblwiKVxuICAgIH0pLCBlbGxpcHNpcykpOyAvLyBjaGFuZ2UgYXJyb3dzIGRpcmVjdGlvbiBpbiByaWdodC10by1sZWZ0IGRpcmVjdGlvblxuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3J0bCcpIHtcbiAgICAgIHZhciBfcmVmID0gW25leHRJY29uLCBwcmV2SWNvbl07XG4gICAgICBwcmV2SWNvbiA9IF9yZWZbMF07XG4gICAgICBuZXh0SWNvbiA9IF9yZWZbMV07XG4gICAgICB2YXIgX3JlZjIgPSBbanVtcE5leHRJY29uLCBqdW1wUHJldkljb25dO1xuICAgICAganVtcFByZXZJY29uID0gX3JlZjJbMF07XG4gICAgICBqdW1wTmV4dEljb24gPSBfcmVmMlsxXTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgcHJldkljb246IHByZXZJY29uLFxuICAgICAgbmV4dEljb246IG5leHRJY29uLFxuICAgICAganVtcFByZXZJY29uOiBqdW1wUHJldkljb24sXG4gICAgICBqdW1wTmV4dEljb246IGp1bXBOZXh0SWNvblxuICAgIH07XG4gIH07XG5cbiAgdmFyIHJlbmRlclBhZ2luYXRpb24gPSBmdW5jdGlvbiByZW5kZXJQYWdpbmF0aW9uKGNvbnRleHRMb2NhbGUpIHtcbiAgICB2YXIgbG9jYWxlID0gKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgY29udGV4dExvY2FsZSksIGN1c3RvbUxvY2FsZSk7XG4gICAgdmFyIGlzU21hbGwgPSBzaXplID09PSAnc21hbGwnIHx8ICEhKHhzICYmICFzaXplICYmIHJlc3RQcm9wcy5yZXNwb25zaXZlKTtcbiAgICB2YXIgc2VsZWN0UHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdzZWxlY3QnLCBjdXN0b21pemVTZWxlY3RQcmVmaXhDbHMpO1xuICAgIHZhciBleHRlbmRlZENsYXNzTmFtZSA9ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKCgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoe1xuICAgICAgbWluaTogaXNTbWFsbFxuICAgIH0sIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcnRsXCIpLCBkaXJlY3Rpb24gPT09ICdydGwnKSwgY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX3JjUGFnaW5hdGlvbltcImRlZmF1bHRcIl0sICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgcmVzdFByb3BzLCB7XG4gICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgIHNlbGVjdFByZWZpeENsczogc2VsZWN0UHJlZml4Q2xzXG4gICAgfSwgZ2V0SWNvbnNQcm9wcygpLCB7XG4gICAgICBjbGFzc05hbWU6IGV4dGVuZGVkQ2xhc3NOYW1lLFxuICAgICAgc2VsZWN0Q29tcG9uZW50Q2xhc3M6IGlzU21hbGwgPyBfTWluaVNlbGVjdFtcImRlZmF1bHRcIl0gOiBfc2VsZWN0W1wiZGVmYXVsdFwiXSxcbiAgICAgIGxvY2FsZTogbG9jYWxlXG4gICAgfSkpO1xuICB9O1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfTG9jYWxlUmVjZWl2ZXJbXCJkZWZhdWx0XCJdLCB7XG4gICAgY29tcG9uZW50TmFtZTogXCJQYWdpbmF0aW9uXCIsXG4gICAgZGVmYXVsdExvY2FsZTogX2VuX1VTW1wiZGVmYXVsdFwiXVxuICB9LCByZW5kZXJQYWdpbmF0aW9uKTtcbn07XG5cbnZhciBfZGVmYXVsdCA9IFBhZ2luYXRpb247XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX1BhZ2luYXRpb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1BhZ2luYXRpb25cIikpO1xuXG52YXIgX2RlZmF1bHQgPSBfUGFnaW5hdGlvbltcImRlZmF1bHRcIl07XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIikpO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9vbWl0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwib21pdC5qc1wiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX3JjU2VsZWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJjLXNlbGVjdFwiKSk7XG5cbnZhciBfY29uZmlnUHJvdmlkZXIgPSByZXF1aXJlKFwiLi4vY29uZmlnLXByb3ZpZGVyXCIpO1xuXG52YXIgX2ljb25VdGlsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9pY29uVXRpbFwiKSk7XG5cbnZhciBfU2l6ZUNvbnRleHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9jb25maWctcHJvdmlkZXIvU2l6ZUNvbnRleHRcIikpO1xuXG4vLyBUT0RPOiA0LjAgLSBjb2RlbW9kIHNob3VsZCBoZWxwIHRvIGNoYW5nZSBgZmlsdGVyT3B0aW9uYCB0byBzdXBwb3J0IG5vZGUgcHJvcHMuXG52YXIgX19yZXN0ID0gdm9pZCAwICYmICh2b2lkIDApLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuXG4gIGZvciAodmFyIHAgaW4gcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIH1cblxuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpIHRbcFtpXV0gPSBzW3BbaV1dO1xuICB9XG4gIHJldHVybiB0O1xufTtcblxudmFyIFNFQ1JFVF9DT01CT0JPWF9NT0RFX0RPX05PVF9VU0UgPSAnU0VDUkVUX0NPTUJPQk9YX01PREVfRE9fTk9UX1VTRSc7XG5cbnZhciBJbnRlcm5hbFNlbGVjdCA9IGZ1bmN0aW9uIEludGVybmFsU2VsZWN0KF9hLCByZWYpIHtcbiAgdmFyIF9jbGFzc05hbWVzMjtcblxuICB2YXIgY3VzdG9taXplUHJlZml4Q2xzID0gX2EucHJlZml4Q2xzLFxuICAgICAgX2EkYm9yZGVyZWQgPSBfYS5ib3JkZXJlZCxcbiAgICAgIGJvcmRlcmVkID0gX2EkYm9yZGVyZWQgPT09IHZvaWQgMCA/IHRydWUgOiBfYSRib3JkZXJlZCxcbiAgICAgIGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZSxcbiAgICAgIGdldFBvcHVwQ29udGFpbmVyID0gX2EuZ2V0UG9wdXBDb250YWluZXIsXG4gICAgICBkcm9wZG93bkNsYXNzTmFtZSA9IF9hLmRyb3Bkb3duQ2xhc3NOYW1lLFxuICAgICAgX2EkbGlzdEhlaWdodCA9IF9hLmxpc3RIZWlnaHQsXG4gICAgICBsaXN0SGVpZ2h0ID0gX2EkbGlzdEhlaWdodCA9PT0gdm9pZCAwID8gMjU2IDogX2EkbGlzdEhlaWdodCxcbiAgICAgIF9hJGxpc3RJdGVtSGVpZ2h0ID0gX2EubGlzdEl0ZW1IZWlnaHQsXG4gICAgICBsaXN0SXRlbUhlaWdodCA9IF9hJGxpc3RJdGVtSGVpZ2h0ID09PSB2b2lkIDAgPyAyNCA6IF9hJGxpc3RJdGVtSGVpZ2h0LFxuICAgICAgY3VzdG9taXplU2l6ZSA9IF9hLnNpemUsXG4gICAgICBub3RGb3VuZENvbnRlbnQgPSBfYS5ub3RGb3VuZENvbnRlbnQsXG4gICAgICBfYSR0cmFuc2l0aW9uTmFtZSA9IF9hLnRyYW5zaXRpb25OYW1lLFxuICAgICAgdHJhbnNpdGlvbk5hbWUgPSBfYSR0cmFuc2l0aW9uTmFtZSA9PT0gdm9pZCAwID8gJ3NsaWRlLXVwJyA6IF9hJHRyYW5zaXRpb25OYW1lLFxuICAgICAgcHJvcHMgPSBfX3Jlc3QoX2EsIFtcInByZWZpeENsc1wiLCBcImJvcmRlcmVkXCIsIFwiY2xhc3NOYW1lXCIsIFwiZ2V0UG9wdXBDb250YWluZXJcIiwgXCJkcm9wZG93bkNsYXNzTmFtZVwiLCBcImxpc3RIZWlnaHRcIiwgXCJsaXN0SXRlbUhlaWdodFwiLCBcInNpemVcIiwgXCJub3RGb3VuZENvbnRlbnRcIiwgXCJ0cmFuc2l0aW9uTmFtZVwiXSk7XG5cbiAgdmFyIF9SZWFjdCR1c2VDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29udGV4dCksXG4gICAgICBnZXRDb250ZXh0UG9wdXBDb250YWluZXIgPSBfUmVhY3QkdXNlQ29udGV4dC5nZXRQb3B1cENvbnRhaW5lcixcbiAgICAgIGdldFByZWZpeENscyA9IF9SZWFjdCR1c2VDb250ZXh0LmdldFByZWZpeENscyxcbiAgICAgIHJlbmRlckVtcHR5ID0gX1JlYWN0JHVzZUNvbnRleHQucmVuZGVyRW1wdHksXG4gICAgICBkaXJlY3Rpb24gPSBfUmVhY3QkdXNlQ29udGV4dC5kaXJlY3Rpb24sXG4gICAgICB2aXJ0dWFsID0gX1JlYWN0JHVzZUNvbnRleHQudmlydHVhbCxcbiAgICAgIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aCA9IF9SZWFjdCR1c2VDb250ZXh0LmRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aDtcblxuICB2YXIgc2l6ZSA9IFJlYWN0LnVzZUNvbnRleHQoX1NpemVDb250ZXh0W1wiZGVmYXVsdFwiXSk7XG4gIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ3NlbGVjdCcsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gIHZhciBtb2RlID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG0gPSBwcm9wcy5tb2RlO1xuXG4gICAgaWYgKG0gPT09ICdjb21ib2JveCcpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKG0gPT09IFNFQ1JFVF9DT01CT0JPWF9NT0RFX0RPX05PVF9VU0UpIHtcbiAgICAgIHJldHVybiAnY29tYm9ib3gnO1xuICAgIH1cblxuICAgIHJldHVybiBtO1xuICB9LCBbcHJvcHMubW9kZV0pO1xuICB2YXIgaXNNdWx0aXBsZSA9IG1vZGUgPT09ICdtdWx0aXBsZScgfHwgbW9kZSA9PT0gJ3RhZ3MnOyAvLyA9PT09PT09PT09PT09PT09PT09PT0gRW1wdHkgPT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIG1lcmdlZE5vdEZvdW5kO1xuXG4gIGlmIChub3RGb3VuZENvbnRlbnQgIT09IHVuZGVmaW5lZCkge1xuICAgIG1lcmdlZE5vdEZvdW5kID0gbm90Rm91bmRDb250ZW50O1xuICB9IGVsc2UgaWYgKG1vZGUgPT09ICdjb21ib2JveCcpIHtcbiAgICBtZXJnZWROb3RGb3VuZCA9IG51bGw7XG4gIH0gZWxzZSB7XG4gICAgbWVyZ2VkTm90Rm91bmQgPSByZW5kZXJFbXB0eSgnU2VsZWN0Jyk7XG4gIH0gLy8gPT09PT09PT09PT09PT09PT09PT09IEljb25zID09PT09PT09PT09PT09PT09PT09PVxuXG5cbiAgdmFyIF9nZXRJY29ucyA9ICgwLCBfaWNvblV0aWxbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBwcm9wcyksIHtcbiAgICBtdWx0aXBsZTogaXNNdWx0aXBsZSxcbiAgICBwcmVmaXhDbHM6IHByZWZpeENsc1xuICB9KSksXG4gICAgICBzdWZmaXhJY29uID0gX2dldEljb25zLnN1ZmZpeEljb24sXG4gICAgICBpdGVtSWNvbiA9IF9nZXRJY29ucy5pdGVtSWNvbixcbiAgICAgIHJlbW92ZUljb24gPSBfZ2V0SWNvbnMucmVtb3ZlSWNvbixcbiAgICAgIGNsZWFySWNvbiA9IF9nZXRJY29ucy5jbGVhckljb247XG5cbiAgdmFyIHNlbGVjdFByb3BzID0gKDAsIF9vbWl0W1wiZGVmYXVsdFwiXSkocHJvcHMsIFsnc3VmZml4SWNvbicsICdpdGVtSWNvbiddKTtcbiAgdmFyIHJjU2VsZWN0UnRsRHJvcERvd25DbGFzc05hbWUgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShkcm9wZG93bkNsYXNzTmFtZSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKSh7fSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1kcm9wZG93bi1cIikuY29uY2F0KGRpcmVjdGlvbiksIGRpcmVjdGlvbiA9PT0gJ3J0bCcpKTtcbiAgdmFyIG1lcmdlZFNpemUgPSBjdXN0b21pemVTaXplIHx8IHNpemU7XG4gIHZhciBtZXJnZWRDbGFzc05hbWUgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKSgoX2NsYXNzTmFtZXMyID0ge30sICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMyLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWxnXCIpLCBtZXJnZWRTaXplID09PSAnbGFyZ2UnKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lczIsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc21cIiksIG1lcmdlZFNpemUgPT09ICdzbWFsbCcpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzMiwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ydGxcIiksIGRpcmVjdGlvbiA9PT0gJ3J0bCcpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzMiwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ib3JkZXJsZXNzXCIpLCAhYm9yZGVyZWQpLCBfY2xhc3NOYW1lczIpLCBjbGFzc05hbWUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX3JjU2VsZWN0W1wiZGVmYXVsdFwiXSwgKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHtcbiAgICByZWY6IHJlZixcbiAgICB2aXJ0dWFsOiB2aXJ0dWFsLFxuICAgIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aDogZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoXG4gIH0sIHNlbGVjdFByb3BzLCB7XG4gICAgdHJhbnNpdGlvbk5hbWU6IHRyYW5zaXRpb25OYW1lLFxuICAgIGxpc3RIZWlnaHQ6IGxpc3RIZWlnaHQsXG4gICAgbGlzdEl0ZW1IZWlnaHQ6IGxpc3RJdGVtSGVpZ2h0LFxuICAgIG1vZGU6IG1vZGUsXG4gICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgZGlyZWN0aW9uOiBkaXJlY3Rpb24sXG4gICAgaW5wdXRJY29uOiBzdWZmaXhJY29uLFxuICAgIG1lbnVJdGVtU2VsZWN0ZWRJY29uOiBpdGVtSWNvbixcbiAgICByZW1vdmVJY29uOiByZW1vdmVJY29uLFxuICAgIGNsZWFySWNvbjogY2xlYXJJY29uLFxuICAgIG5vdEZvdW5kQ29udGVudDogbWVyZ2VkTm90Rm91bmQsXG4gICAgY2xhc3NOYW1lOiBtZXJnZWRDbGFzc05hbWUsXG4gICAgZ2V0UG9wdXBDb250YWluZXI6IGdldFBvcHVwQ29udGFpbmVyIHx8IGdldENvbnRleHRQb3B1cENvbnRhaW5lcixcbiAgICBkcm9wZG93bkNsYXNzTmFtZTogcmNTZWxlY3RSdGxEcm9wRG93bkNsYXNzTmFtZVxuICB9KSk7XG59O1xuXG52YXIgU2VsZWN0UmVmID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoSW50ZXJuYWxTZWxlY3QpO1xudmFyIFNlbGVjdCA9IFNlbGVjdFJlZjtcblNlbGVjdC5TRUNSRVRfQ09NQk9CT1hfTU9ERV9ET19OT1RfVVNFID0gU0VDUkVUX0NPTUJPQk9YX01PREVfRE9fTk9UX1VTRTtcblNlbGVjdC5PcHRpb24gPSBfcmNTZWxlY3QuT3B0aW9uO1xuU2VsZWN0Lk9wdEdyb3VwID0gX3JjU2VsZWN0Lk9wdEdyb3VwO1xudmFyIF9kZWZhdWx0ID0gU2VsZWN0O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGdldEljb25zO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX0Rvd25PdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL0Rvd25PdXRsaW5lZFwiKSk7XG5cbnZhciBfTG9hZGluZ091dGxpbmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvTG9hZGluZ091dGxpbmVkXCIpKTtcblxudmFyIF9DaGVja091dGxpbmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvQ2hlY2tPdXRsaW5lZFwiKSk7XG5cbnZhciBfQ2xvc2VPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL0Nsb3NlT3V0bGluZWRcIikpO1xuXG52YXIgX0Nsb3NlQ2lyY2xlRmlsbGVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvQ2xvc2VDaXJjbGVGaWxsZWRcIikpO1xuXG52YXIgX1NlYXJjaE91dGxpbmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvU2VhcmNoT3V0bGluZWRcIikpO1xuXG5mdW5jdGlvbiBnZXRJY29ucyhfcmVmKSB7XG4gIHZhciBzdWZmaXhJY29uID0gX3JlZi5zdWZmaXhJY29uLFxuICAgICAgY2xlYXJJY29uID0gX3JlZi5jbGVhckljb24sXG4gICAgICBtZW51SXRlbVNlbGVjdGVkSWNvbiA9IF9yZWYubWVudUl0ZW1TZWxlY3RlZEljb24sXG4gICAgICByZW1vdmVJY29uID0gX3JlZi5yZW1vdmVJY29uLFxuICAgICAgbG9hZGluZyA9IF9yZWYubG9hZGluZyxcbiAgICAgIG11bHRpcGxlID0gX3JlZi5tdWx0aXBsZSxcbiAgICAgIHByZWZpeENscyA9IF9yZWYucHJlZml4Q2xzO1xuICAvLyBDbGVhciBJY29uXG4gIHZhciBtZXJnZWRDbGVhckljb24gPSBjbGVhckljb247XG5cbiAgaWYgKCFjbGVhckljb24pIHtcbiAgICBtZXJnZWRDbGVhckljb24gPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfQ2xvc2VDaXJjbGVGaWxsZWRbXCJkZWZhdWx0XCJdLCBudWxsKTtcbiAgfSAvLyBBcnJvdyBpdGVtIGljb25cblxuXG4gIHZhciBtZXJnZWRTdWZmaXhJY29uID0gbnVsbDtcblxuICBpZiAoc3VmZml4SWNvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgbWVyZ2VkU3VmZml4SWNvbiA9IHN1ZmZpeEljb247XG4gIH0gZWxzZSBpZiAobG9hZGluZykge1xuICAgIG1lcmdlZFN1ZmZpeEljb24gPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfTG9hZGluZ091dGxpbmVkW1wiZGVmYXVsdFwiXSwge1xuICAgICAgc3BpbjogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHZhciBpY29uQ2xzID0gXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1zdWZmaXhcIik7XG5cbiAgICBtZXJnZWRTdWZmaXhJY29uID0gZnVuY3Rpb24gbWVyZ2VkU3VmZml4SWNvbihfcmVmMikge1xuICAgICAgdmFyIG9wZW4gPSBfcmVmMi5vcGVuLFxuICAgICAgICAgIHNob3dTZWFyY2ggPSBfcmVmMi5zaG93U2VhcmNoO1xuXG4gICAgICBpZiAob3BlbiAmJiBzaG93U2VhcmNoKSB7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfU2VhcmNoT3V0bGluZWRbXCJkZWZhdWx0XCJdLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBpY29uQ2xzXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX0Rvd25PdXRsaW5lZFtcImRlZmF1bHRcIl0sIHtcbiAgICAgICAgY2xhc3NOYW1lOiBpY29uQ2xzXG4gICAgICB9KTtcbiAgICB9O1xuICB9IC8vIENoZWNrZWQgaXRlbSBpY29uXG5cblxuICB2YXIgbWVyZ2VkSXRlbUljb24gPSBudWxsO1xuXG4gIGlmIChtZW51SXRlbVNlbGVjdGVkSWNvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgbWVyZ2VkSXRlbUljb24gPSBtZW51SXRlbVNlbGVjdGVkSWNvbjtcbiAgfSBlbHNlIGlmIChtdWx0aXBsZSkge1xuICAgIG1lcmdlZEl0ZW1JY29uID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX0NoZWNrT3V0bGluZWRbXCJkZWZhdWx0XCJdLCBudWxsKTtcbiAgfSBlbHNlIHtcbiAgICBtZXJnZWRJdGVtSWNvbiA9IG51bGw7XG4gIH1cblxuICB2YXIgbWVyZ2VkUmVtb3ZlSWNvbiA9IG51bGw7XG5cbiAgaWYgKHJlbW92ZUljb24gIT09IHVuZGVmaW5lZCkge1xuICAgIG1lcmdlZFJlbW92ZUljb24gPSByZW1vdmVJY29uO1xuICB9IGVsc2Uge1xuICAgIG1lcmdlZFJlbW92ZUljb24gPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfQ2xvc2VPdXRsaW5lZFtcImRlZmF1bHRcIl0sIG51bGwpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjbGVhckljb246IG1lcmdlZENsZWFySWNvbixcbiAgICBzdWZmaXhJY29uOiBtZXJnZWRTdWZmaXhJY29uLFxuICAgIGl0ZW1JY29uOiBtZXJnZWRJdGVtSWNvbixcbiAgICByZW1vdmVJY29uOiBtZXJnZWRSZW1vdmVJY29uXG4gIH07XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIikpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIikpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3NcIikpO1xuXG52YXIgX2luaGVyaXRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIikpO1xuXG52YXIgX2NyZWF0ZVN1cGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlU3VwZXJcIikpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9vbWl0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwib21pdC5qc1wiKSk7XG5cbnZhciBfZGVib3VuY2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJsb2Rhc2gvZGVib3VuY2VcIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIF90eXBlID0gcmVxdWlyZShcIi4uL191dGlsL3R5cGVcIik7XG5cbnZhciBfcmVhY3ROb2RlID0gcmVxdWlyZShcIi4uL191dGlsL3JlYWN0Tm9kZVwiKTtcblxudmFyIF9fcmVzdCA9IHZvaWQgMCAmJiAodm9pZCAwKS5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcblxuICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICB9XG5cbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgfVxuICByZXR1cm4gdDtcbn07XG5cbnZhciBTcGluU2l6ZXMgPSAoMCwgX3R5cGUudHVwbGUpKCdzbWFsbCcsICdkZWZhdWx0JywgJ2xhcmdlJyk7IC8vIFJlbmRlciBpbmRpY2F0b3JcblxudmFyIGRlZmF1bHRJbmRpY2F0b3IgPSBudWxsO1xuXG5mdW5jdGlvbiByZW5kZXJJbmRpY2F0b3IocHJlZml4Q2xzLCBwcm9wcykge1xuICB2YXIgaW5kaWNhdG9yID0gcHJvcHMuaW5kaWNhdG9yO1xuICB2YXIgZG90Q2xhc3NOYW1lID0gXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1kb3RcIik7IC8vIHNob3VsZCBub3QgYmUgcmVuZGVyIGRlZmF1bHQgaW5kaWNhdG9yIHdoZW4gaW5kaWNhdG9yIHZhbHVlIGlzIG51bGxcblxuICBpZiAoaW5kaWNhdG9yID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAoKDAsIF9yZWFjdE5vZGUuaXNWYWxpZEVsZW1lbnQpKGluZGljYXRvcikpIHtcbiAgICByZXR1cm4gKDAsIF9yZWFjdE5vZGUuY2xvbmVFbGVtZW50KShpbmRpY2F0b3IsIHtcbiAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoaW5kaWNhdG9yLnByb3BzLmNsYXNzTmFtZSwgZG90Q2xhc3NOYW1lKVxuICAgIH0pO1xuICB9XG5cbiAgaWYgKCgwLCBfcmVhY3ROb2RlLmlzVmFsaWRFbGVtZW50KShkZWZhdWx0SW5kaWNhdG9yKSkge1xuICAgIHJldHVybiAoMCwgX3JlYWN0Tm9kZS5jbG9uZUVsZW1lbnQpKGRlZmF1bHRJbmRpY2F0b3IsIHtcbiAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoZGVmYXVsdEluZGljYXRvci5wcm9wcy5jbGFzc05hbWUsIGRvdENsYXNzTmFtZSlcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoZG90Q2xhc3NOYW1lLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWRvdC1zcGluXCIpKVxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImlcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1kb3QtaXRlbVwiKVxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZG90LWl0ZW1cIilcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiaVwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWRvdC1pdGVtXCIpXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImlcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1kb3QtaXRlbVwiKVxuICB9KSk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZERlbGF5KHNwaW5uaW5nLCBkZWxheSkge1xuICByZXR1cm4gISFzcGlubmluZyAmJiAhIWRlbGF5ICYmICFpc05hTihOdW1iZXIoZGVsYXkpKTtcbn1cblxudmFyIFNwaW4gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czJbXCJkZWZhdWx0XCJdKShTcGluLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gKDAsIF9jcmVhdGVTdXBlcjJbXCJkZWZhdWx0XCJdKShTcGluKTtcblxuICBmdW5jdGlvbiBTcGluKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazJbXCJkZWZhdWx0XCJdKSh0aGlzLCBTcGluKTtcbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKTtcblxuICAgIF90aGlzLmRlYm91bmNpZnlVcGRhdGVTcGlubmluZyA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgdmFyIF9yZWYgPSBwcm9wcyB8fCBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBkZWxheSA9IF9yZWYuZGVsYXk7XG5cbiAgICAgIGlmIChkZWxheSkge1xuICAgICAgICBfdGhpcy5jYW5jZWxFeGlzdGluZ1NwaW4oKTtcblxuICAgICAgICBfdGhpcy51cGRhdGVTcGlubmluZyA9ICgwLCBfZGVib3VuY2VbXCJkZWZhdWx0XCJdKShfdGhpcy5vcmlnaW5hbFVwZGF0ZVNwaW5uaW5nLCBkZWxheSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLnVwZGF0ZVNwaW5uaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHNwaW5uaW5nID0gX3RoaXMucHJvcHMuc3Bpbm5pbmc7XG4gICAgICB2YXIgY3VycmVudFNwaW5uaW5nID0gX3RoaXMuc3RhdGUuc3Bpbm5pbmc7XG5cbiAgICAgIGlmIChjdXJyZW50U3Bpbm5pbmcgIT09IHNwaW5uaW5nKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzcGlubmluZzogc3Bpbm5pbmdcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLnJlbmRlclNwaW4gPSBmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgICAgdmFyIGdldFByZWZpeENscyA9IF9yZWYyLmdldFByZWZpeENscyxcbiAgICAgICAgICBkaXJlY3Rpb24gPSBfcmVmMi5kaXJlY3Rpb247XG5cbiAgICAgIHZhciBfYSA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGN1c3RvbWl6ZVByZWZpeENscyA9IF9hLnByZWZpeENscyxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWUsXG4gICAgICAgICAgc2l6ZSA9IF9hLnNpemUsXG4gICAgICAgICAgdGlwID0gX2EudGlwLFxuICAgICAgICAgIHdyYXBwZXJDbGFzc05hbWUgPSBfYS53cmFwcGVyQ2xhc3NOYW1lLFxuICAgICAgICAgIHN0eWxlID0gX2Euc3R5bGUsXG4gICAgICAgICAgcmVzdFByb3BzID0gX19yZXN0KF9hLCBbXCJwcmVmaXhDbHNcIiwgXCJjbGFzc05hbWVcIiwgXCJzaXplXCIsIFwidGlwXCIsIFwid3JhcHBlckNsYXNzTmFtZVwiLCBcInN0eWxlXCJdKTtcblxuICAgICAgdmFyIHNwaW5uaW5nID0gX3RoaXMuc3RhdGUuc3Bpbm5pbmc7XG4gICAgICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdzcGluJywgY3VzdG9taXplUHJlZml4Q2xzKTtcbiAgICAgIHZhciBzcGluQ2xhc3NOYW1lID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkocHJlZml4Q2xzLCAoX2NsYXNzTmFtZXMgPSB7fSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1zbVwiKSwgc2l6ZSA9PT0gJ3NtYWxsJyksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbGdcIiksIHNpemUgPT09ICdsYXJnZScpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXNwaW5uaW5nXCIpLCBzcGlubmluZyksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc2hvdy10ZXh0XCIpLCAhIXRpcCksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcnRsXCIpLCBkaXJlY3Rpb24gPT09ICdydGwnKSwgX2NsYXNzTmFtZXMpLCBjbGFzc05hbWUpOyAvLyBmaXggaHR0cHM6Ly9mYi5tZS9yZWFjdC11bmtub3duLXByb3BcblxuICAgICAgdmFyIGRpdlByb3BzID0gKDAsIF9vbWl0W1wiZGVmYXVsdFwiXSkocmVzdFByb3BzLCBbJ3NwaW5uaW5nJywgJ2RlbGF5JywgJ2luZGljYXRvciddKTtcbiAgICAgIHZhciBzcGluRWxlbWVudCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgZGl2UHJvcHMsIHtcbiAgICAgICAgc3R5bGU6IHN0eWxlLFxuICAgICAgICBjbGFzc05hbWU6IHNwaW5DbGFzc05hbWVcbiAgICAgIH0pLCByZW5kZXJJbmRpY2F0b3IocHJlZml4Q2xzLCBfdGhpcy5wcm9wcyksIHRpcCA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXRleHRcIilcbiAgICAgIH0sIHRpcCkgOiBudWxsKTtcblxuICAgICAgaWYgKF90aGlzLmlzTmVzdGVkUGF0dGVybigpKSB7XG4gICAgICAgIHZhciBjb250YWluZXJDbGFzc05hbWUgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWNvbnRhaW5lclwiKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKSh7fSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ibHVyXCIpLCBzcGlubmluZykpO1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBkaXZQcm9wcywge1xuICAgICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1uZXN0ZWQtbG9hZGluZ1wiKSwgd3JhcHBlckNsYXNzTmFtZSlcbiAgICAgICAgfSksIHNwaW5uaW5nICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICBrZXk6IFwibG9hZGluZ1wiXG4gICAgICAgIH0sIHNwaW5FbGVtZW50KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogY29udGFpbmVyQ2xhc3NOYW1lLFxuICAgICAgICAgIGtleTogXCJjb250YWluZXJcIlxuICAgICAgICB9LCBfdGhpcy5wcm9wcy5jaGlsZHJlbikpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3BpbkVsZW1lbnQ7XG4gICAgfTtcblxuICAgIHZhciBzcGlubmluZyA9IHByb3BzLnNwaW5uaW5nLFxuICAgICAgICBkZWxheSA9IHByb3BzLmRlbGF5O1xuICAgIHZhciBzaG91bGRCZURlbGF5ZWQgPSBzaG91bGREZWxheShzcGlubmluZywgZGVsYXkpO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgc3Bpbm5pbmc6IHNwaW5uaW5nICYmICFzaG91bGRCZURlbGF5ZWRcbiAgICB9O1xuICAgIF90aGlzLm9yaWdpbmFsVXBkYXRlU3Bpbm5pbmcgPSBfdGhpcy51cGRhdGVTcGlubmluZztcblxuICAgIF90aGlzLmRlYm91bmNpZnlVcGRhdGVTcGlubmluZyhwcm9wcyk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMltcImRlZmF1bHRcIl0pKFNwaW4sIFt7XG4gICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy51cGRhdGVTcGlubmluZygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnREaWRVcGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgdGhpcy5kZWJvdW5jaWZ5VXBkYXRlU3Bpbm5pbmcoKTtcbiAgICAgIHRoaXMudXBkYXRlU3Bpbm5pbmcoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLmNhbmNlbEV4aXN0aW5nU3BpbigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjYW5jZWxFeGlzdGluZ1NwaW5cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FuY2VsRXhpc3RpbmdTcGluKCkge1xuICAgICAgdmFyIHVwZGF0ZVNwaW5uaW5nID0gdGhpcy51cGRhdGVTcGlubmluZztcblxuICAgICAgaWYgKHVwZGF0ZVNwaW5uaW5nICYmIHVwZGF0ZVNwaW5uaW5nLmNhbmNlbCkge1xuICAgICAgICB1cGRhdGVTcGlubmluZy5jYW5jZWwoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNOZXN0ZWRQYXR0ZXJuXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzTmVzdGVkUGF0dGVybigpIHtcbiAgICAgIHJldHVybiAhISh0aGlzLnByb3BzICYmIHR5cGVvZiB0aGlzLnByb3BzLmNoaWxkcmVuICE9PSAndW5kZWZpbmVkJyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnN1bWVyLCBudWxsLCB0aGlzLnJlbmRlclNwaW4pO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcInNldERlZmF1bHRJbmRpY2F0b3JcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0RGVmYXVsdEluZGljYXRvcihpbmRpY2F0b3IpIHtcbiAgICAgIGRlZmF1bHRJbmRpY2F0b3IgPSBpbmRpY2F0b3I7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBTcGluO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5TcGluLmRlZmF1bHRQcm9wcyA9IHtcbiAgc3Bpbm5pbmc6IHRydWUsXG4gIHNpemU6ICdkZWZhdWx0JyxcbiAgd3JhcHBlckNsYXNzTmFtZTogJydcbn07XG52YXIgX2RlZmF1bHQgPSBTcGluO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIGxvY2FsZSA9IHtcbiAgcGxhY2Vob2xkZXI6ICdTZWxlY3QgdGltZScsXG4gIHJhbmdlUGxhY2Vob2xkZXI6IFsnU3RhcnQgdGltZScsICdFbmQgdGltZSddXG59O1xudmFyIF9kZWZhdWx0ID0gbG9jYWxlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiKSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiKSk7XG5cbnZhciBfaW5oZXJpdHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiKSk7XG5cbnZhciBfY3JlYXRlU3VwZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVTdXBlclwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcmVhY3REb20gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdC1kb21cIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIE5vdGljZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMi5kZWZhdWx0KShOb3RpY2UsIF9Db21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSAoMCwgX2NyZWF0ZVN1cGVyMi5kZWZhdWx0KShOb3RpY2UpO1xuXG4gIGZ1bmN0aW9uIE5vdGljZSgpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMi5kZWZhdWx0KSh0aGlzLCBOb3RpY2UpO1xuICAgIF90aGlzID0gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgX3RoaXMuY2xvc2VUaW1lciA9IG51bGw7XG5cbiAgICBfdGhpcy5jbG9zZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5jbGVhckNsb3NlVGltZXIoKTtcblxuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgb25DbG9zZSA9IF90aGlzJHByb3BzLm9uQ2xvc2UsXG4gICAgICAgICAgbm90aWNlS2V5ID0gX3RoaXMkcHJvcHMubm90aWNlS2V5O1xuXG4gICAgICBpZiAob25DbG9zZSkge1xuICAgICAgICBvbkNsb3NlKG5vdGljZUtleSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLnN0YXJ0Q2xvc2VUaW1lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5kdXJhdGlvbikge1xuICAgICAgICBfdGhpcy5jbG9zZVRpbWVyID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzLmNsb3NlKCk7XG4gICAgICAgIH0sIF90aGlzLnByb3BzLmR1cmF0aW9uICogMTAwMCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLmNsZWFyQ2xvc2VUaW1lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5jbG9zZVRpbWVyKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChfdGhpcy5jbG9zZVRpbWVyKTtcbiAgICAgICAgX3RoaXMuY2xvc2VUaW1lciA9IG51bGw7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MyLmRlZmF1bHQpKE5vdGljZSwgW3tcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLnN0YXJ0Q2xvc2VUaW1lcigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnREaWRVcGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgaWYgKHRoaXMucHJvcHMuZHVyYXRpb24gIT09IHByZXZQcm9wcy5kdXJhdGlvbiB8fCB0aGlzLnByb3BzLnVwZGF0ZU1hcmsgIT09IHByZXZQcm9wcy51cGRhdGVNYXJrKSB7XG4gICAgICAgIHRoaXMucmVzdGFydENsb3NlVGltZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLmNsZWFyQ2xvc2VUaW1lcigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZXN0YXJ0Q2xvc2VUaW1lclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXN0YXJ0Q2xvc2VUaW1lcigpIHtcbiAgICAgIHRoaXMuY2xlYXJDbG9zZVRpbWVyKCk7XG4gICAgICB0aGlzLnN0YXJ0Q2xvc2VUaW1lcigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHByZWZpeENscyA9IF90aGlzJHByb3BzMi5wcmVmaXhDbHMsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHMyLmNsYXNzTmFtZSxcbiAgICAgICAgICBjbG9zYWJsZSA9IF90aGlzJHByb3BzMi5jbG9zYWJsZSxcbiAgICAgICAgICBjbG9zZUljb24gPSBfdGhpcyRwcm9wczIuY2xvc2VJY29uLFxuICAgICAgICAgIHN0eWxlID0gX3RoaXMkcHJvcHMyLnN0eWxlLFxuICAgICAgICAgIG9uQ2xpY2sgPSBfdGhpcyRwcm9wczIub25DbGljayxcbiAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzMi5jaGlsZHJlbixcbiAgICAgICAgICBob2xkZXIgPSBfdGhpcyRwcm9wczIuaG9sZGVyO1xuICAgICAgdmFyIGNvbXBvbmVudENsYXNzID0gXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ub3RpY2VcIik7XG4gICAgICB2YXIgZGF0YU9yQXJpYUF0dHJpYnV0ZVByb3BzID0gT2JqZWN0LmtleXModGhpcy5wcm9wcykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGtleSkge1xuICAgICAgICBpZiAoa2V5LnN1YnN0cigwLCA1KSA9PT0gJ2RhdGEtJyB8fCBrZXkuc3Vic3RyKDAsIDUpID09PSAnYXJpYS0nIHx8IGtleSA9PT0gJ3JvbGUnKSB7XG4gICAgICAgICAgYWNjW2tleV0gPSBfdGhpczIucHJvcHNba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LCB7fSk7XG4gICAgICB2YXIgbm9kZSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzLmRlZmF1bHQpKGNvbXBvbmVudENsYXNzLCBjbGFzc05hbWUsICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHt9LCBcIlwiLmNvbmNhdChjb21wb25lbnRDbGFzcywgXCItY2xvc2FibGVcIiksIGNsb3NhYmxlKSksXG4gICAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgICAgb25Nb3VzZUVudGVyOiB0aGlzLmNsZWFyQ2xvc2VUaW1lcixcbiAgICAgICAgb25Nb3VzZUxlYXZlOiB0aGlzLnN0YXJ0Q2xvc2VUaW1lcixcbiAgICAgICAgb25DbGljazogb25DbGlja1xuICAgICAgfSwgZGF0YU9yQXJpYUF0dHJpYnV0ZVByb3BzKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQoY29tcG9uZW50Q2xhc3MsIFwiLWNvbnRlbnRcIilcbiAgICAgIH0sIGNoaWxkcmVuKSwgY2xvc2FibGUgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7XG4gICAgICAgIHRhYkluZGV4OiAwLFxuICAgICAgICBvbkNsaWNrOiB0aGlzLmNsb3NlLFxuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KGNvbXBvbmVudENsYXNzLCBcIi1jbG9zZVwiKVxuICAgICAgfSwgY2xvc2VJY29uIHx8IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChjb21wb25lbnRDbGFzcywgXCItY2xvc2UteFwiKVxuICAgICAgfSkpIDogbnVsbCk7XG5cbiAgICAgIGlmIChob2xkZXIpIHtcbiAgICAgICAgcmV0dXJuIF9yZWFjdERvbS5kZWZhdWx0LmNyZWF0ZVBvcnRhbChub2RlLCBob2xkZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIE5vdGljZTtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTm90aWNlO1xuTm90aWNlLmRlZmF1bHRQcm9wcyA9IHtcbiAgb25DbG9zZTogZnVuY3Rpb24gb25DbG9zZSgpIHt9LFxuICBkdXJhdGlvbjogMS41XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVzZU5vdGlmaWNhdGlvbjtcblxudmFyIF90b0NvbnN1bWFibGVBcnJheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5XCIpKTtcblxudmFyIF9zbGljZWRUb0FycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfTm90aWNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Ob3RpY2VcIikpO1xuXG5mdW5jdGlvbiB1c2VOb3RpZmljYXRpb24obm90aWZpY2F0aW9uSW5zdGFuY2UpIHtcbiAgdmFyIGNyZWF0ZWRSZWYgPSBSZWFjdC51c2VSZWYoe30pO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZShbXSksXG4gICAgICBfUmVhY3QkdXNlU3RhdGUyID0gKDAsIF9zbGljZWRUb0FycmF5Mi5kZWZhdWx0KShfUmVhY3QkdXNlU3RhdGUsIDIpLFxuICAgICAgZWxlbWVudHMgPSBfUmVhY3QkdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0RWxlbWVudHMgPSBfUmVhY3QkdXNlU3RhdGUyWzFdO1xuXG4gIGZ1bmN0aW9uIG5vdGlmeShub3RpY2VQcm9wcykge1xuICAgIG5vdGlmaWNhdGlvbkluc3RhbmNlLmFkZChub3RpY2VQcm9wcywgZnVuY3Rpb24gKGRpdiwgcHJvcHMpIHtcbiAgICAgIHZhciBrZXkgPSBwcm9wcy5rZXk7XG5cbiAgICAgIGlmIChkaXYgJiYgIWNyZWF0ZWRSZWYuY3VycmVudFtrZXldKSB7XG4gICAgICAgIHZhciBub3RpY2VFbGUgPSBSZWFjdC5jcmVhdGVFbGVtZW50KF9Ob3RpY2UuZGVmYXVsdCwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICBob2xkZXI6IGRpdlxuICAgICAgICB9KSk7XG4gICAgICAgIGNyZWF0ZWRSZWYuY3VycmVudFtrZXldID0gbm90aWNlRWxlO1xuICAgICAgICBzZXRFbGVtZW50cyhmdW5jdGlvbiAob3JpZ2luRWxlbWVudHMpIHtcbiAgICAgICAgICByZXR1cm4gW10uY29uY2F0KCgwLCBfdG9Db25zdW1hYmxlQXJyYXkyLmRlZmF1bHQpKG9yaWdpbkVsZW1lbnRzKSwgW25vdGljZUVsZV0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBbbm90aWZ5LCBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBlbGVtZW50cyldO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9kZWZhdWx0ID0ge1xuICAvLyBPcHRpb25zLmpzeFxuICBpdGVtc19wZXJfcGFnZTogJy8gcGFnZScsXG4gIGp1bXBfdG86ICdHbyB0bycsXG4gIGp1bXBfdG9fY29uZmlybTogJ2NvbmZpcm0nLFxuICBwYWdlOiAnJyxcbiAgLy8gUGFnaW5hdGlvbi5qc3hcbiAgcHJldl9wYWdlOiAnUHJldmlvdXMgUGFnZScsXG4gIG5leHRfcGFnZTogJ05leHQgUGFnZScsXG4gIHByZXZfNTogJ1ByZXZpb3VzIDUgUGFnZXMnLFxuICBuZXh0XzU6ICdOZXh0IDUgUGFnZXMnLFxuICBwcmV2XzM6ICdQcmV2aW91cyAzIFBhZ2VzJyxcbiAgbmV4dF8zOiAnTmV4dCAzIFBhZ2VzJ1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIGxvY2FsZSA9IHtcbiAgbG9jYWxlOiAnZW5fVVMnLFxuICB0b2RheTogJ1RvZGF5JyxcbiAgbm93OiAnTm93JyxcbiAgYmFja1RvVG9kYXk6ICdCYWNrIHRvIHRvZGF5JyxcbiAgb2s6ICdPaycsXG4gIGNsZWFyOiAnQ2xlYXInLFxuICBtb250aDogJ01vbnRoJyxcbiAgeWVhcjogJ1llYXInLFxuICB0aW1lU2VsZWN0OiAnc2VsZWN0IHRpbWUnLFxuICBkYXRlU2VsZWN0OiAnc2VsZWN0IGRhdGUnLFxuICB3ZWVrU2VsZWN0OiAnQ2hvb3NlIGEgd2VlaycsXG4gIG1vbnRoU2VsZWN0OiAnQ2hvb3NlIGEgbW9udGgnLFxuICB5ZWFyU2VsZWN0OiAnQ2hvb3NlIGEgeWVhcicsXG4gIGRlY2FkZVNlbGVjdDogJ0Nob29zZSBhIGRlY2FkZScsXG4gIHllYXJGb3JtYXQ6ICdZWVlZJyxcbiAgZGF0ZUZvcm1hdDogJ00vRC9ZWVlZJyxcbiAgZGF5Rm9ybWF0OiAnRCcsXG4gIGRhdGVUaW1lRm9ybWF0OiAnTS9EL1lZWVkgSEg6bW06c3MnLFxuICBtb250aEJlZm9yZVllYXI6IHRydWUsXG4gIHByZXZpb3VzTW9udGg6ICdQcmV2aW91cyBtb250aCAoUGFnZVVwKScsXG4gIG5leHRNb250aDogJ05leHQgbW9udGggKFBhZ2VEb3duKScsXG4gIHByZXZpb3VzWWVhcjogJ0xhc3QgeWVhciAoQ29udHJvbCArIGxlZnQpJyxcbiAgbmV4dFllYXI6ICdOZXh0IHllYXIgKENvbnRyb2wgKyByaWdodCknLFxuICBwcmV2aW91c0RlY2FkZTogJ0xhc3QgZGVjYWRlJyxcbiAgbmV4dERlY2FkZTogJ05leHQgZGVjYWRlJyxcbiAgcHJldmlvdXNDZW50dXJ5OiAnTGFzdCBjZW50dXJ5JyxcbiAgbmV4dENlbnR1cnk6ICdOZXh0IGNlbnR1cnknXG59O1xudmFyIF9kZWZhdWx0ID0gbG9jYWxlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==