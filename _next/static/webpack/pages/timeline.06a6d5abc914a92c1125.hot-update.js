webpackHotUpdate_N_E("pages/timeline",{

/***/ "./components/timeline/TimelinePosts.js":
/*!**********************************************!*\
  !*** ./components/timeline/TimelinePosts.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/timeline-post.module.scss */ "./components/timeline/styles/timeline-post.module.scss");
/* harmony import */ var _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Comments__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Comments */ "./components/timeline/Comments.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Actions */ "./components/timeline/Actions.js");
/* harmony import */ var _common_TrimText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/TrimText */ "./components/common/TrimText.js");
/* harmony import */ var react_modal_hook__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-modal-hook */ "./node_modules/react-modal-hook/dist/index.es.js");
/* harmony import */ var _CommentsModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CommentsModal */ "./components/timeline/CommentsModal.js");
/* harmony import */ var _profile_PhotosModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../profile/PhotosModal */ "./components/profile/PhotosModal.js");
/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/Avatar */ "./components/common/Avatar.js");
/* harmony import */ var redux_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! redux-modal */ "./node_modules/redux-modal/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var configs_API__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! configs/API */ "./configs/API.js");
/* harmony import */ var video_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! video-react */ "./node_modules/video-react/lib/index.js");
/* harmony import */ var video_react__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(video_react__WEBPACK_IMPORTED_MODULE_17__);
var _jsxFileName = "E:\\freeskies_fe_code\\components\\timeline\\TimelinePosts.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



















function TimelinePosts({
  data,
  onUpdateTimeline,
  onRatePost,
  modalActions,
  shareAction,
  likeAction,
  deleteAction
}) {
  _s();

  const imagesList = [].concat.apply([], data.map(item => item.images));
  const {
    0: activePostId,
    1: setActivePostId
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: modalMode,
    1: setModalMode
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [showPhotoModal, hidePhotoModal] = Object(react_modal_hook__WEBPACK_IMPORTED_MODULE_9__["useModal"])(({
    in: open
  }) => __jsx(_profile_PhotosModal__WEBPACK_IMPORTED_MODULE_11__["default"], {
    title: "Photo detail",
    showModal: open,
    onClose: hidePhotoModal,
    onRatePost: onRatePost,
    data: imagesList,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }));

  const handleShowCommentModal = id => {
    setActivePostId(id);
    setModalMode(!modalMode); //modalActions.show('commentModal', { id: activePostId });
  };

  const toggleCommentShow = index => setCommentShow(commentShow === index ? null : index);

  const getLikeActionUserInfo = data => {
    var finalData = '';
    data.map((item, index) => {
      finalData = finalData + ' ' + item.firstName;
    });
    return finalData;
  };

  return __jsx("div", {
    className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.activity_content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, data.map((item, index) => {
    var _account$profilePhoto;

    var {
      account,
      createdAt,
      type,
      comments,
      text,
      images,
      videos,
      shared,
      commented,
      src,
      thumbnail,
      reactions
    } = item;
    const profileUrl = account !== null && account !== undefined ? "".concat((_account$profilePhoto = account.profilePhoto) === null || _account$profilePhoto === void 0 ? void 0 : _account$profilePhoto.src) : null;
    const fullName = "".concat(account === null || account === void 0 ? void 0 : account.firstName, " ").concat(account === null || account === void 0 ? void 0 : account.lastName);
    const likeData = reactions.filter(item => item.reaction == 'LIKE');
    const heartData = reactions.filter(item => item.reaction == 'HEART');
    const wowData = reactions.filter(item => item.reation == 'WOW');
    const hahaData = reactions.filter(item => item.reaction == 'HAHA');
    const sadData = reactions.filter(item => item.reaction == 'SAD');
    return __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.post,
      key: item.id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 11
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: ['far', 'window-close'],
      style: {
        float: 'right',
        fontSize: 25,
        marginRight: 10,
        cursor: 'pointer'
      },
      onClick: () => deleteAction(item.id, type),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }
    }), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.post_header,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.avatar,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 15
      }
    }, __jsx(_common_Avatar__WEBPACK_IMPORTED_MODULE_12__["default"], {
      text: fullName,
      url: profileUrl,
      size: 60,
      borderSize: 3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.user_info,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 15
      }
    }, __jsx("p", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.user_name,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }
    }, fullName))), __jsx("p", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.date,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 13
      }
    }, moment__WEBPACK_IMPORTED_MODULE_6___default()(createdAt).format('MMM DD, YYYY - HH:mm A')), __jsx("p", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.description,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 13
      }
    }, __jsx(_common_TrimText__WEBPACK_IMPORTED_MODULE_8__["default"], {
      limit: 110,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 15
      }
    }, type !== 'Share' ? text : shared.text)), videos && videos.length > 0 && videos.map((video, index) => {
      return __jsx("div", {
        className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.videos,
        key: index,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 17
        }
      }, __jsx(video_react__WEBPACK_IMPORTED_MODULE_17__["Player"], {
        playsInline: true,
        poster: "https://www.freeskies.com/static/".concat(video.thumbnail.src),
        src: "https://www.freeskies.com/static/".concat(video.src),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 19
        }
      }));
    }), images && images.length > 0 ? __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.post_content,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.image, {
        [_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.grid_2]: images.length == 2,
        [_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.grid_3]: images.length == 3,
        [_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.grid_4]: images.length == 4
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 17
      }
    }, images.length == 1 && __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.image_item,
      onClick: showPhotoModal,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].src),
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 23
      }
    })), images.length == 2 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.image_item, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.main_photo),
      onClick: showPhotoModal,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].src),
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.image_item,
      onClick: showPhotoModal,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[1].src),
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 25
      }
    }))), images.length == 3 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.image_item, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.main_photo),
      onClick: showPhotoModal,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].src),
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.image_item,
      onClick: showPhotoModal,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[1].src),
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.image_item,
      onClick: showPhotoModal,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[2].src),
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 25
      }
    }))), images.length >= 4 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.image_item, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.main_photo),
      onClick: showPhotoModal,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].src),
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.image_item,
      onClick: showPhotoModal,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[1].src),
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.image_item,
      onClick: showPhotoModal,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[2].src),
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.image_item,
      onClick: showPhotoModal,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.show_more,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 25
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 27
      }
    }, "+4")), __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[3].src),
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 25
      }
    }))))) : __jsx("div", {
      style: {
        height: 50
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 15
      }
    }), type == "Photo" ? src && __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.post_content,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.image),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.image_item,
      onClick: showPhotoModal,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(src),
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 19
      }
    })))) : src && __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.videos,
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 20
      }
    }, __jsx(video_react__WEBPACK_IMPORTED_MODULE_17__["Player"], {
      playsInline: true,
      poster: "https://www.freeskies.com/static/".concat(thumbnail.src),
      src: "https://www.freeskies.com/static/".concat(video.src),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 15
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.reactions_shares_status,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.reactions_status,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 15
      }
    }, likeData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(likeData),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 19
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: ['far', 'thumbs-up'],
      size: "1x",
      style: {
        cursor: 'pointer'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 21
      }
    }, likeData.length))), hahaData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
      placement: "bottom",
      title: 'Bottom',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 19
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: ['far', 'grin'],
      size: "1x",
      style: {
        cursor: 'pointer'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 21
      }
    }, hahaData.length))), heartData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
      placement: "bottom",
      title: 'Bottom',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 19
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: ['far', 'heart'],
      size: "1x",
      style: {
        cursor: 'pointer'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 21
      }
    }, heartData.length))), wowData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
      placement: "bottom",
      title: 'Bottom',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 19
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: ['far', 'laugh'],
      size: "1x",
      style: {
        cursor: 'pointer'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 21
      }
    }, wowData.length))), sadData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
      placement: "bottom",
      title: 'Bottom',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 19
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: ['far', 'frown'],
      size: "1x",
      style: {
        cursor: 'pointer'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 21
      }
    }), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 21
      }
    }, sadData.length))))), __jsx(_Actions__WEBPACK_IMPORTED_MODULE_7__["default"], {
      id: item.id,
      type: item.type,
      postRate: item.rating,
      comments: comments,
      onRatePost: onRatePost,
      index: index,
      likeAction: term => likeAction(type, item.id, term),
      shareAction: () => shareAction(type !== 'Share' ? type : shared.type, type !== 'Share' ? item.id : shared.id),
      actions: () => {
        handleShowCommentModal(item.id);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 13
      }
    }), __jsx(_Comments__WEBPACK_IMPORTED_MODULE_5__["default"], {
      id: item.id,
      type: item.type,
      data: comments,
      onUpdateTimeline: onUpdateTimeline,
      activePostId: activePostId,
      modalMode: modalMode,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 13
      }
    }));
  }), __jsx(_CommentsModal__WEBPACK_IMPORTED_MODULE_10__["default"], {
    activePostId: activePostId,
    postData: data,
    onUpdateTimeline: onUpdateTimeline,
    title: "Comments" // showModal={open}
    // onClose={hideCommentModal}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 7
    }
  }));
}

_s(TimelinePosts, "p63xqevXGgdyaOlh46fFc9+fy5g=", false, function () {
  return [react_modal_hook__WEBPACK_IMPORTED_MODULE_9__["useModal"]];
});

_c = TimelinePosts;

const mapDispatchToProps = dispatch => ({
  modalActions: Object(redux__WEBPACK_IMPORTED_MODULE_14__["bindActionCreators"])({
    show: redux_modal__WEBPACK_IMPORTED_MODULE_13__["show"]
  }, dispatch)
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_15__["connect"])(null, mapDispatchToProps)(TimelinePosts));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aW1lbGluZS9UaW1lbGluZVBvc3RzLmpzIl0sIm5hbWVzIjpbIlRpbWVsaW5lUG9zdHMiLCJkYXRhIiwib25VcGRhdGVUaW1lbGluZSIsIm9uUmF0ZVBvc3QiLCJtb2RhbEFjdGlvbnMiLCJzaGFyZUFjdGlvbiIsImxpa2VBY3Rpb24iLCJkZWxldGVBY3Rpb24iLCJpbWFnZXNMaXN0IiwiY29uY2F0IiwiYXBwbHkiLCJtYXAiLCJpdGVtIiwiaW1hZ2VzIiwiYWN0aXZlUG9zdElkIiwic2V0QWN0aXZlUG9zdElkIiwidXNlU3RhdGUiLCJtb2RhbE1vZGUiLCJzZXRNb2RhbE1vZGUiLCJzaG93UGhvdG9Nb2RhbCIsImhpZGVQaG90b01vZGFsIiwidXNlTW9kYWwiLCJpbiIsIm9wZW4iLCJoYW5kbGVTaG93Q29tbWVudE1vZGFsIiwiaWQiLCJ0b2dnbGVDb21tZW50U2hvdyIsImluZGV4Iiwic2V0Q29tbWVudFNob3ciLCJjb21tZW50U2hvdyIsImdldExpa2VBY3Rpb25Vc2VySW5mbyIsImZpbmFsRGF0YSIsImZpcnN0TmFtZSIsInN0eWxlcyIsImFjdGl2aXR5X2NvbnRlbnQiLCJhY2NvdW50IiwiY3JlYXRlZEF0IiwidHlwZSIsImNvbW1lbnRzIiwidGV4dCIsInZpZGVvcyIsInNoYXJlZCIsImNvbW1lbnRlZCIsInNyYyIsInRodW1ibmFpbCIsInJlYWN0aW9ucyIsInByb2ZpbGVVcmwiLCJ1bmRlZmluZWQiLCJwcm9maWxlUGhvdG8iLCJmdWxsTmFtZSIsImxhc3ROYW1lIiwibGlrZURhdGEiLCJmaWx0ZXIiLCJyZWFjdGlvbiIsImhlYXJ0RGF0YSIsIndvd0RhdGEiLCJyZWF0aW9uIiwiaGFoYURhdGEiLCJzYWREYXRhIiwicG9zdCIsImZsb2F0IiwiZm9udFNpemUiLCJtYXJnaW5SaWdodCIsImN1cnNvciIsInBvc3RfaGVhZGVyIiwiYXZhdGFyIiwidXNlcl9pbmZvIiwidXNlcl9uYW1lIiwiZGF0ZSIsIm1vbWVudCIsImZvcm1hdCIsImRlc2NyaXB0aW9uIiwibGVuZ3RoIiwidmlkZW8iLCJwb3N0X2NvbnRlbnQiLCJjbGFzc25hbWVzIiwiaW1hZ2UiLCJncmlkXzIiLCJncmlkXzMiLCJncmlkXzQiLCJpbWFnZV9pdGVtIiwibWFpbl9waG90byIsInNob3dfbW9yZSIsImhlaWdodCIsInJlYWN0aW9uc19zaGFyZXNfc3RhdHVzIiwicmVhY3Rpb25zX3N0YXR1cyIsInJhdGluZyIsInRlcm0iLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImJpbmRBY3Rpb25DcmVhdG9ycyIsInNob3ciLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsYUFBVCxDQUF1QjtBQUFFQyxNQUFGO0FBQVFDLGtCQUFSO0FBQTBCQyxZQUExQjtBQUFzQ0MsY0FBdEM7QUFBb0RDLGFBQXBEO0FBQWlFQyxZQUFqRTtBQUE2RUM7QUFBN0UsQ0FBdkIsRUFBb0g7QUFBQTs7QUFDbEgsUUFBTUMsVUFBVSxHQUFHLEdBQUdDLE1BQUgsQ0FBVUMsS0FBVixDQUFnQixFQUFoQixFQUFvQlQsSUFBSSxDQUFDVSxHQUFMLENBQVNDLElBQUksSUFBSUEsSUFBSSxDQUFDQyxNQUF0QixDQUFwQixDQUFuQjtBQUNBLFFBQU07QUFBQSxPQUFDQyxZQUFEO0FBQUEsT0FBZUM7QUFBZixNQUFrQ0Msc0RBQVEsQ0FBQyxJQUFELENBQWhEO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCRixzREFBUSxDQUFDLEtBQUQsQ0FBMUM7QUFDQSxRQUFNLENBQUNHLGNBQUQsRUFBaUJDLGNBQWpCLElBQW1DQyxpRUFBUSxDQUFDLENBQUM7QUFBRUMsTUFBRSxF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QUViLElBQUksQ0FBQ3lCLElBRmI7QUFHRSxVQUFJLEVBQUVDLFFBSFI7QUFJRSxzQkFBZ0IsRUFBRXBDLGdCQUpwQjtBQUtFLGtCQUFZLEVBQUVZLFlBTGhCO0FBTUUsZUFBUyxFQUFFRyxTQU5iO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUExTEYsQ0FERjtBQXNNRCxHQWhOQSxDQURILEVBbU5FLE1BQUMsdURBQUQ7QUFDRSxnQkFBWSxFQUFFSCxZQURoQjtBQUVFLFlBQVEsRUFBRWIsSUFGWjtBQUdFLG9CQUFnQixFQUFFQyxnQkFIcEI7QUFJRSxTQUFLLEVBQUMsVUFKUixDQUtFO0FBQ0E7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbk5GLENBREY7QUE4TkQ7O0dBN1BRRixhO1VBSWtDcUIseUQ7OztLQUpsQ3JCLGE7O0FBK1BULE1BQU13RixrQkFBa0IsR0FBSUMsUUFBRCxLQUFlO0FBQ3hDckYsY0FBWSxFQUFFc0YsaUVBQWtCLENBQUM7QUFBRUMsMkRBQUlBO0FBQU4sR0FBRCxFQUFXRixRQUFYO0FBRFEsQ0FBZixDQUEzQjs7QUFJZUcsMkhBQU8sQ0FBQyxJQUFELEVBQU9KLGtCQUFQLENBQVAsQ0FBa0N4RixhQUFsQyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3RpbWVsaW5lLjA2YTZkNWFiYzkxNGE5MmMxMTI1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL3RpbWVsaW5lLXBvc3QubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyBQb3BvdmVyLCBUb29sdGlwIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgQ29tbWVudHMgZnJvbSAnLi9Db21tZW50cyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBBY3Rpb25zIGZyb20gJy4vQWN0aW9ucyc7XHJcbmltcG9ydCBUcmltVGV4dCBmcm9tICcuLi9jb21tb24vVHJpbVRleHQnO1xyXG5pbXBvcnQgeyB1c2VNb2RhbCB9IGZyb20gJ3JlYWN0LW1vZGFsLWhvb2snO1xyXG5pbXBvcnQgQ29tbWVudHNNb2RhbCBmcm9tICcuL0NvbW1lbnRzTW9kYWwnO1xyXG5pbXBvcnQgUGhvdG9zTW9kYWwgZnJvbSAnLi4vcHJvZmlsZS9QaG90b3NNb2RhbCc7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnLi4vY29tbW9uL0F2YXRhcic7XHJcbmltcG9ydCB7IHNob3cgfSBmcm9tICdyZWR1eC1tb2RhbCc7XHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IEFQSSBmcm9tICdjb25maWdzL0FQSSc7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJ3ZpZGVvLXJlYWN0JztcclxuXHJcbmZ1bmN0aW9uIFRpbWVsaW5lUG9zdHMoeyBkYXRhLCBvblVwZGF0ZVRpbWVsaW5lLCBvblJhdGVQb3N0LCBtb2RhbEFjdGlvbnMsIHNoYXJlQWN0aW9uLCBsaWtlQWN0aW9uLCBkZWxldGVBY3Rpb24gfSkge1xyXG4gIGNvbnN0IGltYWdlc0xpc3QgPSBbXS5jb25jYXQuYXBwbHkoW10sIGRhdGEubWFwKGl0ZW0gPT4gaXRlbS5pbWFnZXMpKVxyXG4gIGNvbnN0IFthY3RpdmVQb3N0SWQsIHNldEFjdGl2ZVBvc3RJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbbW9kYWxNb2RlLCBzZXRNb2RhbE1vZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93UGhvdG9Nb2RhbCwgaGlkZVBob3RvTW9kYWxdID0gdXNlTW9kYWwoKHsgaW46IG9wZW4gfSkgPT4gKFxyXG4gICAgPFBob3Rvc01vZGFsXHJcbiAgICAgIHRpdGxlPVwiUGhvdG8gZGV0YWlsXCJcclxuICAgICAgc2hvd01vZGFsPXtvcGVufVxyXG4gICAgICBvbkNsb3NlPXtoaWRlUGhvdG9Nb2RhbH1cclxuICAgICAgb25SYXRlUG9zdD17b25SYXRlUG9zdH1cclxuICAgICAgZGF0YT17aW1hZ2VzTGlzdH1cclxuICAgIC8+XHJcbiAgKSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNob3dDb21tZW50TW9kYWwgPSAoaWQpID0+IHtcclxuICAgIHNldEFjdGl2ZVBvc3RJZChpZCk7XHJcbiAgICBzZXRNb2RhbE1vZGUoIW1vZGFsTW9kZSk7XHJcbiAgICAvL21vZGFsQWN0aW9ucy5zaG93KCdjb21tZW50TW9kYWwnLCB7IGlkOiBhY3RpdmVQb3N0SWQgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlQ29tbWVudFNob3cgPSAoaW5kZXgpID0+XHJcbiAgICBzZXRDb21tZW50U2hvdyhjb21tZW50U2hvdyA9PT0gaW5kZXggPyBudWxsIDogaW5kZXgpO1xyXG5cclxuICBjb25zdCBnZXRMaWtlQWN0aW9uVXNlckluZm8gPSAoZGF0YSkgPT4ge1xyXG4gICAgdmFyIGZpbmFsRGF0YSA9ICcnO1xyXG4gICAgZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgIGZpbmFsRGF0YSA9IGZpbmFsRGF0YSArICcgJyArIGl0ZW0uZmlyc3ROYW1lO1xyXG4gICAgfSlcclxuICAgIHJldHVybiBmaW5hbERhdGE7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpdml0eV9jb250ZW50fT5cclxuICAgICAge2RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHZhciB7IGFjY291bnQsIGNyZWF0ZWRBdCwgdHlwZSwgY29tbWVudHMsIHRleHQsIGltYWdlcywgdmlkZW9zLCBzaGFyZWQsIGNvbW1lbnRlZCwgc3JjLCB0aHVtYm5haWwsIHJlYWN0aW9ucyB9ID0gaXRlbTtcclxuICAgICAgICBjb25zdCBwcm9maWxlVXJsID0gYWNjb3VudCAhPT0gbnVsbCAmJiBhY2NvdW50ICE9PSB1bmRlZmluZWQgPyBgJHthY2NvdW50LnByb2ZpbGVQaG90bz8uc3JjfWAgOiBudWxsXHJcbiAgICAgICAgY29uc3QgZnVsbE5hbWUgPSBgJHthY2NvdW50Py5maXJzdE5hbWV9ICR7YWNjb3VudD8ubGFzdE5hbWV9YDtcclxuICAgICAgICBjb25zdCBsaWtlRGF0YSA9IHJlYWN0aW9ucy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlYWN0aW9uID09ICdMSUtFJyk7XHJcbiAgICAgICAgY29uc3QgaGVhcnREYXRhID0gIHJlYWN0aW9ucy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlYWN0aW9uID09ICdIRUFSVCcpO1xyXG4gICAgICAgIGNvbnN0IHdvd0RhdGEgPSByZWFjdGlvbnMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5yZWF0aW9uID09ICdXT1cnKTtcclxuICAgICAgICBjb25zdCBoYWhhRGF0YSA9IHJlYWN0aW9ucy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlYWN0aW9uID09ICdIQUhBJyk7XHJcbiAgICAgICAgY29uc3Qgc2FkRGF0YSA9IHJlYWN0aW9ucy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlYWN0aW9uID09ICdTQUQnKTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0fSBrZXk9e2l0ZW0uaWR9PlxyXG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ3dpbmRvdy1jbG9zZSddfSBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGZsb2F0OiAncmlnaHQnLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAyNSxcclxuICAgICAgICAgICAgICBtYXJnaW5SaWdodDogMTAsXHJcbiAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlQWN0aW9uKGl0ZW0uaWQsIHR5cGUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RfaGVhZGVyfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn0+XHJcbiAgICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgIHRleHQ9e2Z1bGxOYW1lfVxyXG4gICAgICAgICAgICAgICAgICB1cmw9e3Byb2ZpbGVVcmx9XHJcbiAgICAgICAgICAgICAgICAgIHNpemU9ezYwfVxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJTaXplPXszfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyX2luZm99PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudXNlcl9uYW1lfT57ZnVsbE5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZX0+XHJcbiAgICAgICAgICAgICAge21vbWVudChjcmVhdGVkQXQpLmZvcm1hdCgnTU1NIERELCBZWVlZIC0gSEg6bW0gQScpfVxyXG4gICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICAgICAgPFRyaW1UZXh0IGxpbWl0PXsxMTB9PlxyXG4gICAgICAgICAgICAgICAgeyB0eXBlIT09J1NoYXJlJz90ZXh0OnNoYXJlZC50ZXh0IH1cclxuICAgICAgICAgICAgICA8L1RyaW1UZXh0PlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIHt2aWRlb3MgJiYgdmlkZW9zLmxlbmd0aCA+IDAgJiYgdmlkZW9zLm1hcCgodmlkZW8sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmlkZW9zfSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgPFBsYXllclxyXG4gICAgICAgICAgICAgICAgICAgIHBsYXlzSW5saW5lXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zdGVyPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHt2aWRlby50aHVtYm5haWwuc3JjfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHt2aWRlby5zcmN9YH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2Pil9XHJcbiAgICAgICAgICAgICl9XHJcblxyXG5cclxuICAgICAgICAgICAge2ltYWdlcyAmJiBpbWFnZXMubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RfY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuaW1hZ2UsIHtcclxuICAgICAgICAgICAgICAgICAgICBbc3R5bGVzLmdyaWRfMl06IGltYWdlcy5sZW5ndGggPT0gMixcclxuICAgICAgICAgICAgICAgICAgICBbc3R5bGVzLmdyaWRfM106IGltYWdlcy5sZW5ndGggPT0gMyxcclxuICAgICAgICAgICAgICAgICAgICBbc3R5bGVzLmdyaWRfNF06IGltYWdlcy5sZW5ndGggPT0gNCxcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtpbWFnZXMubGVuZ3RoID09IDEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfaXRlbX0gb25DbGljaz17c2hvd1Bob3RvTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1swXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtpbWFnZXMubGVuZ3RoID09IDIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuaW1hZ2VfaXRlbSwgc3R5bGVzLm1haW5fcGhvdG8pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzaG93UGhvdG9Nb2RhbH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1swXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZV9pdGVtfSBvbkNsaWNrPXtzaG93UGhvdG9Nb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMV0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtpbWFnZXMubGVuZ3RoID09IDMgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuaW1hZ2VfaXRlbSwgc3R5bGVzLm1haW5fcGhvdG8pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzaG93UGhvdG9Nb2RhbH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1swXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZV9pdGVtfSBvbkNsaWNrPXtzaG93UGhvdG9Nb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMV0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfaXRlbX0gb25DbGljaz17c2hvd1Bob3RvTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzJdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICB7aW1hZ2VzLmxlbmd0aCA+PSA0ICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmltYWdlX2l0ZW0sIHN0eWxlcy5tYWluX3Bob3RvKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c2hvd1Bob3RvTW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMF0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfaXRlbX0gb25DbGljaz17c2hvd1Bob3RvTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzFdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX2l0ZW19IG9uQ2xpY2s9e3Nob3dQaG90b01vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1syXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZV9pdGVtfSBvbkNsaWNrPXtzaG93UGhvdG9Nb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2hvd19tb3JlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4rNDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbM10uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiA1MCB9fSAvPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAge3R5cGUgPT0gXCJQaG90b1wiP3NyYyAmJiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RfY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5pbWFnZSl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfaXRlbX0gb25DbGljaz17c2hvd1Bob3RvTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7c3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj46XHJcbiAgICAgICAgICAgIHNyYyAmJiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZpZGVvc30ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgPFBsYXllclxyXG4gICAgICAgICAgICAgICAgcGxheXNJbmxpbmVcclxuICAgICAgICAgICAgICAgIHBvc3Rlcj17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7dGh1bWJuYWlsLnNyY31gfVxyXG4gICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHt2aWRlby5zcmN9YH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlYWN0aW9uc19zaGFyZXNfc3RhdHVzfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlYWN0aW9uc19zdGF0dXN9PlxyXG4gICAgICAgICAgICAgICAgeyBsaWtlRGF0YS5sZW5ndGggPiAwICYmIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPXtnZXRMaWtlQWN0aW9uVXNlckluZm8obGlrZURhdGEpfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ3RodW1icy11cCddfSBzaXplPVwiMXhcIiAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcid9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2xpa2VEYXRhLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD48Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHsgaGFoYURhdGEubGVuZ3RoID4gMCAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17J0JvdHRvbSd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAnZ3JpbiddfSBzaXplPVwiMXhcIiAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcid9fS8+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntoYWhhRGF0YS5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgeyBoZWFydERhdGEubGVuZ3RoID4gMCAmJiA8PiBcclxuICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9eydCb3R0b20nfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ2hlYXJ0J119IHNpemU9XCIxeFwiICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJ319Lz4gXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2hlYXJ0RGF0YS5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgeyB3b3dEYXRhLmxlbmd0aCA+IDAgJiYgPD4gXHJcbiAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPXsnQm90dG9tJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdsYXVnaCddfSBzaXplPVwiMXhcIiAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcid9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3dvd0RhdGEubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICA8Lz4gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7IHNhZERhdGEubGVuZ3RoID4gMCAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17J0JvdHRvbSd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAnZnJvd24nXX0gc2l6ZT1cIjF4XCIgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInfX0vPiBcclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57c2FkRGF0YS5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEFjdGlvbnNcclxuICAgICAgICAgICAgICBpZD17aXRlbS5pZH1cclxuICAgICAgICAgICAgICB0eXBlPXtpdGVtLnR5cGV9XHJcbiAgICAgICAgICAgICAgcG9zdFJhdGU9e2l0ZW0ucmF0aW5nfVxyXG4gICAgICAgICAgICAgIGNvbW1lbnRzPXtjb21tZW50c31cclxuICAgICAgICAgICAgICBvblJhdGVQb3N0PXtvblJhdGVQb3N0fVxyXG4gICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cclxuICAgICAgICAgICAgICBsaWtlQWN0aW9uPXsodGVybSkgPT4gbGlrZUFjdGlvbih0eXBlLCBpdGVtLmlkLCB0ZXJtKX1cclxuICAgICAgICAgICAgICBzaGFyZUFjdGlvbj17KCkgPT4gc2hhcmVBY3Rpb24odHlwZSAhPT0gJ1NoYXJlJz90eXBlOnNoYXJlZC50eXBlLCB0eXBlICE9PSAnU2hhcmUnP2l0ZW0uaWQ6c2hhcmVkLmlkKX1cclxuICAgICAgICAgICAgICBhY3Rpb25zPXtcclxuICAgICAgICAgICAgICAgICgpID0+IHsgaGFuZGxlU2hvd0NvbW1lbnRNb2RhbChpdGVtLmlkKSB9IFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPENvbW1lbnRzXHJcbiAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgdHlwZT17aXRlbS50eXBlfVxyXG4gICAgICAgICAgICAgIGRhdGE9e2NvbW1lbnRzfVxyXG4gICAgICAgICAgICAgIG9uVXBkYXRlVGltZWxpbmU9e29uVXBkYXRlVGltZWxpbmV9XHJcbiAgICAgICAgICAgICAgYWN0aXZlUG9zdElkPXthY3RpdmVQb3N0SWR9XHJcbiAgICAgICAgICAgICAgbW9kYWxNb2RlPXttb2RhbE1vZGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcblxyXG4gICAgICA8Q29tbWVudHNNb2RhbFxyXG4gICAgICAgIGFjdGl2ZVBvc3RJZD17YWN0aXZlUG9zdElkfVxyXG4gICAgICAgIHBvc3REYXRhPXtkYXRhfVxyXG4gICAgICAgIG9uVXBkYXRlVGltZWxpbmU9e29uVXBkYXRlVGltZWxpbmV9XHJcbiAgICAgICAgdGl0bGU9XCJDb21tZW50c1wiXHJcbiAgICAgICAgLy8gc2hvd01vZGFsPXtvcGVufVxyXG4gICAgICAgIC8vIG9uQ2xvc2U9e2hpZGVDb21tZW50TW9kYWx9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgbW9kYWxBY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoeyBzaG93IH0sIGRpc3BhdGNoKVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShUaW1lbGluZVBvc3RzKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==