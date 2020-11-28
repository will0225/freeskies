webpackHotUpdate_N_E("pages/timeline",{

/***/ "./components/timeline/Comments.js":
/*!*****************************************!*\
  !*** ./components/timeline/Comments.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/comment.module.scss */ "./components/timeline/styles/comment.module.scss");
/* harmony import */ var _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_common_TrimText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/common/TrimText */ "./components/common/TrimText.js");
/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/Avatar */ "./components/common/Avatar.js");
/* harmony import */ var configs_API__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! configs/API */ "./configs/API.js");
/* harmony import */ var _forms_rating_DragableRating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../forms/rating/DragableRating */ "./components/forms/rating/DragableRating.js");
/* harmony import */ var _forms_rating_RatingSlide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../forms/rating/RatingSlide */ "./components/forms/rating/RatingSlide.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var video_react_lib_components_Player__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! video-react/lib/components/Player */ "./node_modules/video-react/lib/components/Player.js");
/* harmony import */ var video_react_lib_components_Player__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(video_react_lib_components_Player__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns/locale */ "./node_modules/date-fns/esm/locale/index.js");
var _jsxFileName = "E:\\freeskies_fe_code\\components\\timeline\\Comments.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














const {
  TextArea
} = antd__WEBPACK_IMPORTED_MODULE_1__["Input"];

function CommentItem({
  message,
  mine,
  author,
  rating,
  id,
  onRateComment,
  token,
  data,
  onUpdateTimeline
}) {
  _s();

  var _author$profilePhoto;

  const fullName = "".concat(author === null || author === void 0 ? void 0 : author.firstName, " ").concat(author === null || author === void 0 ? void 0 : author.lastName);

  const handleRateComment = rate => {
    onRateComment(id, rate);
  };

  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const profileUrl = author !== null && author !== undefined ? "".concat((_author$profilePhoto = author.profilePhoto) === null || _author$profilePhoto === void 0 ? void 0 : _author$profilePhoto.src) : null;
  const {
    0: comment,
    1: setComment
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: comments,
    1: setComments
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const fileInputRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setComments(data);
  }, [comments]);

  const handleEnterKey = e => {
    if (e.nativeEvent.keyCode === 13) {
      e.preventDefault();
      onComment("Comment", id, comment);
      setComment('');
    }
  };

  const handleChangeText = e => {
    setComment(e.target.value);
  };

  const onComment = async (type, postId, text, files = undefined) => {
    try {
      let url = '';
      let dataForRequest;
      const formData = new FormData();
      formData.append('commented', postId);

      if (type === 'Photo') {
        url = '/photos/comment';
      } else if (type === 'VideoClip') {
        url = '/video-clips/comment';
      } else if (type === 'Item') {
        url = '/items/comment';
      } else if (type === 'Post') {
        url = '/posts/comment';
      } else if (type === 'Comment') {
        url = '/comments/comment';
      } else if (type === 'Share') {
        url = '/shares/comment';
      }

      if (text.length !== 0) {
        formData.append('text', text);
      }

      if (files !== undefined) {
        for (var i = 0; i < files.length; i++) {
          if (files[i].type.split('/')[0] === 'image') {
            formData.append('image', files[i]);
          } else {
            formData.append('video', files[i]);
          }
        }
      }

      dataForRequest = formData;
      const request = await Object(configs_API__WEBPACK_IMPORTED_MODULE_6__["default"])({
        method: 'post',
        url,
        data: formData,
        headers: {
          'x-token': token
        }
      });
      const {
        data,
        status
      } = request;

      if (status === 201) {
        let initialComments = comments;
        initialComments.push(data.comments[0]);
        setComments(initialComments);
      } else {
        message.error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
        throw new Error();
      }

      return await request;
    } catch (error) {
      console.log(error);
    }
  };

  const onTargetClick = () => {
    fileInputRef.current.click();
  };

  const onFileInputChange = event => {
    const fileFromInput = event.target.files;
    onComment('Comment', id, '', fileFromInput);
  };

  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.comment_item, {
      [_styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.not_mine]: !mine
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }
  }, __jsx(_common_Avatar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: 50,
    url: profileUrl,
    borderSize: 2,
    text: author === null || author === void 0 ? void 0 : author.username,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }
  }), __jsx(_forms_rating_RatingSlide__WEBPACK_IMPORTED_MODULE_8__["default"], {
    defaultRate: rating,
    withoutText: true,
    dark: true,
    size: "small",
    onChange: handleRateComment,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.message_container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.message,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.author,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 11
    }
  }, fullName), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 11
    }
  }, __jsx(components_common_TrimText__WEBPACK_IMPORTED_MODULE_4__["default"], {
    limit: 110,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }
  }, message))), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.reply,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 9
    }
  }, __jsx("p", {
    style: {
      fontSize: 15,
      textDecoration: 'underline',
      textAlign: 'center'
    },
    onClick: () => setVisible(true),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 13
    }
  }, "reply")), comments && comments.map(comment => __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.message,
    style: {
      marginLeft: '2em',
      marginBottom: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.author,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 15
    }
  }, fullName), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 15
    }
  }, __jsx(components_common_TrimText__WEBPACK_IMPORTED_MODULE_4__["default"], {
    limit: 110,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 17
    }
  }, comment.text)))), visible ? __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.comment_box,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 11
    }
  }, __jsx(_common_Avatar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: 35,
    url: profileUrl,
    text: author === null || author === void 0 ? void 0 : author.username,
    borderSize: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.input,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 11
    }
  }, __jsx(TextArea, {
    value: comment,
    placeholder: "What do you mean?",
    rows: 2,
    onChange: handleChangeText,
    onKeyDown: handleEnterKey,
    style: {
      borderRadius: 36,
      height: 25,
      background: 'transparent',
      color: 'black'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 13
    }
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
    icon: ['far', 'image'],
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.comment_file,
    style: {
      marginLeft: -28,
      fontSize: 15
    },
    onClick: onTargetClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 13
    }
  }), __jsx("input", {
    onChange: onFileInputChange,
    ref: fileInputRef,
    type: "file",
    className: "hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 13
    }
  }))) : null, __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mediaComments,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 7
    }
  }, comments && comments.map(item => {
    var _item$image;

    return item.image && __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(item === null || item === void 0 ? void 0 : (_item$image = item.image) === null || _item$image === void 0 ? void 0 : _item$image.src),
      className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mediaComments_image,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 27
      }
    });
  })), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mediaComments,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 7
    }
  }, comments && comments.map(item => {
    var _item$video, _item$video$thumbnail, _item$video2;

    return (item === null || item === void 0 ? void 0 : item.video) && __jsx(video_react_lib_components_Player__WEBPACK_IMPORTED_MODULE_11___default.a, {
      playsInline: true,
      poster: "https://www.freeskies.com/static/".concat(item === null || item === void 0 ? void 0 : (_item$video = item.video) === null || _item$video === void 0 ? void 0 : (_item$video$thumbnail = _item$video.thumbnail) === null || _item$video$thumbnail === void 0 ? void 0 : _item$video$thumbnail.src),
      src: "https://www.freeskies.com/static/".concat(item === null || item === void 0 ? void 0 : (_item$video2 = item.video) === null || _item$video2 === void 0 ? void 0 : _item$video2.src),
      className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mediaComments_video,
      width: 80,
      height: 70,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 28
      }
    });
  }))));
}

_s(CommentItem, "bb/IvIPAdq8gZhjRey9HjRB+CQM=");

_c = CommentItem;

function Comments({
  data = [],
  modalMode,
  id,
  type,
  auth,
  onUpdateTimeline,
  token,
  activePostId
}) {
  _s2();

  var _auth$user, _auth$user$profilePho, _auth$user2;

  const {
    0: commentText,
    1: setCommentText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: commentList,
    1: setCommentList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: active,
    1: setActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(activePostId === id);
  const fileInputRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const handleEnterKey = e => {
    if (e.nativeEvent.keyCode === 13) {
      e.preventDefault();
      onComment(type, id, commentText);
      setCommentText('');
    }
  };

  const handleChangeText = e => {
    setCommentText(e.target.value);
  };

  const onComment = async (type, postId, text, files = undefined) => {
    try {
      let url = '';
      let dataForRequest;
      const formData = new FormData();
      formData.append('commented', postId);

      if (type === 'Photo') {
        url = '/photos/comment';
      } else if (type === 'VideoClip') {
        url = '/video-clips/comment';
      } else if (type === 'Item') {
        url = '/items/comment';
      } else if (type === 'Post') {
        url = '/posts/comment';
      } else if (type === 'Comment') {
        url = '/comments/comment';
      } else if (type === 'Share') {
        url = '/shares/comment';
      }

      if (files !== undefined) {
        for (var i = 0; i < files.length; i++) {
          if (files[i].type.split('/')[0] === 'image') {
            formData.append('image', files[i]);
          } else {
            formData.append('video', files[i]);
          }
        }
      }

      if (text.length !== 0) {
        formData.append('text', text);
      }

      dataForRequest = formData;
      const request = await Object(configs_API__WEBPACK_IMPORTED_MODULE_6__["default"])({
        method: 'post',
        url,
        data: formData,
        headers: {
          'x-token': token
        }
      });
      const {
        data,
        status
      } = request;

      if (status === 201) {
        onUpdateTimeline(data);
      } else {
        antd__WEBPACK_IMPORTED_MODULE_1__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
        throw new Error();
      }

      return await request;
    } catch (error) {
      console.log(error);
    }
  };

  const onRateComment = async (commentId, rate) => {
    try {
      const request = await Object(configs_API__WEBPACK_IMPORTED_MODULE_6__["default"])({
        method: 'post',
        url: '/comments/rate',
        data: {
          id: commentId,
          rating: rate
        },
        headers: {
          'x-token': token
        }
      });
      const {
        data,
        status
      } = request;

      if (status === 201) {// onUpdateTimeline();
        // message.success('Evaluate successfully');
      } else {
        // message.error(data?.message || 'Something wrong');
        throw new Error();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onTargetClick = () => {
    fileInputRef.current.click();
  };

  const onFileInputChange = event => {
    const fileFromInput = event.target.files;
    onComment(type, id, '', fileFromInput);
  };

  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.comments, {
      [_styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.modal_mode]: modalMode
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.comments_wrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 7
    }
  }, (activePostId === id && modalMode ? data : data.slice(0, 2)).map(item => __jsx(CommentItem, {
    key: item.id,
    id: item.id,
    mine: item.mine,
    message: item.text,
    author: item.account,
    rating: item.rating,
    onRateComment: onRateComment,
    token: token,
    data: item.comments ? item.comments : [],
    onUpdateTimeline: onUpdateTimeline,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 10
    }
  }))), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.comment_box,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 9
    }
  }, __jsx(_common_Avatar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: 45,
    url: (_auth$user = auth.user) === null || _auth$user === void 0 ? void 0 : (_auth$user$profilePho = _auth$user.profilePhoto) === null || _auth$user$profilePho === void 0 ? void 0 : _auth$user$profilePho.src,
    text: (_auth$user2 = auth.user) === null || _auth$user2 === void 0 ? void 0 : _auth$user2.username,
    borderSize: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.input,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 9
    }
  }, __jsx(TextArea, {
    value: commentText,
    placeholder: "What do you mean?",
    rows: 2,
    onChange: handleChangeText,
    onKeyDown: handleEnterKey,
    style: {
      borderRadius: 36,
      height: 45,
      paddingLeft: 30,
      paddingTop: 10,
      background: 'transparent',
      color: 'black'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 11
    }
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
    icon: ['far', 'image'],
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.comment_file,
    onClick: onTargetClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 11
    }
  }), __jsx("input", {
    onChange: onFileInputChange,
    ref: fileInputRef,
    type: "file",
    className: "hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mediaComments,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 7
    }
  }, data.map(item => {
    var _item$image2;

    return item.image && __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(item === null || item === void 0 ? void 0 : (_item$image2 = item.image) === null || _item$image2 === void 0 ? void 0 : _item$image2.src),
      className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mediaComments_image,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 383,
        columnNumber: 27
      }
    });
  })), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mediaComments,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 7
    }
  }, data.map(item => {
    var _item$video3, _item$video3$thumbnai, _item$video4;

    return (item === null || item === void 0 ? void 0 : item.video) && __jsx(video_react_lib_components_Player__WEBPACK_IMPORTED_MODULE_11___default.a, {
      playsInline: true,
      poster: "https://www.freeskies.com/static/".concat(item === null || item === void 0 ? void 0 : (_item$video3 = item.video) === null || _item$video3 === void 0 ? void 0 : (_item$video3$thumbnai = _item$video3.thumbnail) === null || _item$video3$thumbnai === void 0 ? void 0 : _item$video3$thumbnai.src),
      src: "https://www.freeskies.com/static/".concat(item === null || item === void 0 ? void 0 : (_item$video4 = item.video) === null || _item$video4 === void 0 ? void 0 : _item$video4.src),
      className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mediaComments_video,
      width: 80,
      height: 70,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 388,
        columnNumber: 28
      }
    });
  })));
}

_s2(Comments, "ZJCefXSpMGaoLyQuO2MrwbYHLBI=");

_c2 = Comments;

const mapStateToProps = store => ({
  token: store.auth.token,
  auth: store.auth
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps)(Comments));

var _c, _c2;

$RefreshReg$(_c, "CommentItem");
$RefreshReg$(_c2, "Comments");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aW1lbGluZS9Db21tZW50cy5qcyJdLCJuYW1lcyI6WyJUZXh0QXJlYSIsIklucHV0IiwiQ29tbWVudEl0ZW0iLCJtZXNzYWdlIiwibWluZSIsImF1dGhvciIsInJhdGluZyIsImlkIiwib25SYXRlQ29tbWVudCIsInRva2VuIiwiZGF0YSIsIm9uVXBkYXRlVGltZWxpbmUiLCJmdWxsTmFtZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiaGFuZGxlUmF0ZUNvbW1lbnQiLCJyYXRlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ1c2VTdGF0ZSIsInByb2ZpbGVVcmwiLCJ1bmRlZmluZWQiLCJwcm9maWxlUGhvdG8iLCJzcmMiLCJjb21tZW50Iiwic2V0Q29tbWVudCIsImNvbW1lbnRzIiwic2V0Q29tbWVudHMiLCJmaWxlSW5wdXRSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJoYW5kbGVFbnRlcktleSIsImUiLCJuYXRpdmVFdmVudCIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsIm9uQ29tbWVudCIsImhhbmRsZUNoYW5nZVRleHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInR5cGUiLCJwb3N0SWQiLCJ0ZXh0IiwiZmlsZXMiLCJ1cmwiLCJkYXRhRm9yUmVxdWVzdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJsZW5ndGgiLCJpIiwic3BsaXQiLCJyZXF1ZXN0IiwiQVBJIiwibWV0aG9kIiwiaGVhZGVycyIsInN0YXR1cyIsImluaXRpYWxDb21tZW50cyIsInB1c2giLCJlcnJvciIsIkVycm9yIiwiY29uc29sZSIsImxvZyIsIm9uVGFyZ2V0Q2xpY2siLCJjdXJyZW50IiwiY2xpY2siLCJvbkZpbGVJbnB1dENoYW5nZSIsImV2ZW50IiwiZmlsZUZyb21JbnB1dCIsImNsYXNzbmFtZXMiLCJzdHlsZXMiLCJjb21tZW50X2l0ZW0iLCJub3RfbWluZSIsImF2YXRhciIsInVzZXJuYW1lIiwibWVzc2FnZV9jb250YWluZXIiLCJyZXBseSIsImZvbnRTaXplIiwidGV4dERlY29yYXRpb24iLCJ0ZXh0QWxpZ24iLCJtYXAiLCJtYXJnaW5MZWZ0IiwibWFyZ2luQm90dG9tIiwiY29tbWVudF9ib3giLCJpbnB1dCIsImJvcmRlclJhZGl1cyIsImhlaWdodCIsImJhY2tncm91bmQiLCJjb2xvciIsImNvbW1lbnRfZmlsZSIsIm1lZGlhQ29tbWVudHMiLCJpdGVtIiwiaW1hZ2UiLCJtZWRpYUNvbW1lbnRzX2ltYWdlIiwidmlkZW8iLCJ0aHVtYm5haWwiLCJtZWRpYUNvbW1lbnRzX3ZpZGVvIiwiQ29tbWVudHMiLCJtb2RhbE1vZGUiLCJhdXRoIiwiYWN0aXZlUG9zdElkIiwiY29tbWVudFRleHQiLCJzZXRDb21tZW50VGV4dCIsImNvbW1lbnRMaXN0Iiwic2V0Q29tbWVudExpc3QiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJjb21tZW50SWQiLCJtb2RhbF9tb2RlIiwiY29tbWVudHNfd3JhcHBlciIsInNsaWNlIiwiYWNjb3VudCIsInVzZXIiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdUb3AiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdG9yZSIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTTtBQUFFQTtBQUFGLElBQWVDLDBDQUFyQjs7QUFFQSxTQUFTQyxXQUFULENBQXFCO0FBQUVDLFNBQUY7QUFBV0MsTUFBWDtBQUFpQkMsUUFBakI7QUFBeUJDLFFBQXpCO0FBQWlDQyxJQUFqQztBQUFxQ0MsZUFBckM7QUFBb0RDLE9BQXBEO0FBQTJEQyxNQUEzRDtBQUFpRUM7QUFBakUsQ0FBckIsRUFBMEc7QUFBQTs7QUFBQTs7QUFDeEcsUUFBTUMsUUFBUSxhQUFNUCxNQUFOLGFBQU1BLE1BQU4sdUJBQU1BLE1BQU0sQ0FB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UUFBekIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90aW1lbGluZS4xODkxOGY1NTQzZTNkYThjYjBlOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQsIFBvcG92ZXIgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy9jb21tZW50Lm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRyaW1UZXh0IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL1RyaW1UZXh0JztcclxuaW1wb3J0IEF2YXRhciBmcm9tICcuLi9jb21tb24vQXZhdGFyJztcclxuaW1wb3J0IEFQSSBmcm9tICdjb25maWdzL0FQSSc7XHJcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IERyYWdhYmxlUmF0aW5nIGZyb20gJy4uL2Zvcm1zL3JhdGluZy9EcmFnYWJsZVJhdGluZyc7XHJcbmltcG9ydCBSYXRpbmdTbGlkZSBmcm9tICcuLi9mb3Jtcy9yYXRpbmcvUmF0aW5nU2xpZGUnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJ3ZpZGVvLXJlYWN0L2xpYi9jb21wb25lbnRzL1BsYXllcic7XHJcbmltcG9ydCB7IGZpIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlJztcclxuXHJcbmNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0O1xyXG5cclxuZnVuY3Rpb24gQ29tbWVudEl0ZW0oeyBtZXNzYWdlLCBtaW5lLCBhdXRob3IsIHJhdGluZywgaWQsIG9uUmF0ZUNvbW1lbnQsIHRva2VuLCBkYXRhLCBvblVwZGF0ZVRpbWVsaW5lIH0pIHtcclxuICBjb25zdCBmdWxsTmFtZSA9IGAke2F1dGhvcj8uZmlyc3ROYW1lfSAke2F1dGhvcj8ubGFzdE5hbWV9YDtcclxuICBjb25zdCBoYW5kbGVSYXRlQ29tbWVudCA9IChyYXRlKSA9PiB7XHJcbiAgICBvblJhdGVDb21tZW50KGlkLCByYXRlKTtcclxuICB9O1xyXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBwcm9maWxlVXJsID0gYXV0aG9yICE9PSBudWxsICYmIGF1dGhvciAhPT0gdW5kZWZpbmVkID8gYCR7YXV0aG9yLnByb2ZpbGVQaG90bz8uc3JjfWAgOiBudWxsXHJcbiAgY29uc3QgW2NvbW1lbnQsIHNldENvbW1lbnRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtjb21tZW50cywgc2V0Q29tbWVudHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IGZpbGVJbnB1dFJlZiA9IHVzZVJlZihudWxsKTtcclxuICBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0Q29tbWVudHMoZGF0YSk7XHJcbiAgfSwgW2NvbW1lbnRzXSlcclxuXHJcbiAgY29uc3QgaGFuZGxlRW50ZXJLZXkgPSAoZSkgPT4ge1xyXG4gICAgaWYgKGUubmF0aXZlRXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBvbkNvbW1lbnQoXCJDb21tZW50XCIsIGlkLCBjb21tZW50KTtcclxuICAgICAgc2V0Q29tbWVudCgnJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlVGV4dCA9IChlKSA9PiB7XHJcbiAgICBzZXRDb21tZW50KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkNvbW1lbnQgPSBhc3luYyAodHlwZSwgcG9zdElkLCB0ZXh0LCBmaWxlcz11bmRlZmluZWQpID0+IHtcclxuICAgXHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgdXJsID0gJyc7XHJcbiAgICAgIGxldCBkYXRhRm9yUmVxdWVzdDtcclxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGE7XHJcblxyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2NvbW1lbnRlZCcsIHBvc3RJZClcclxuXHJcbiAgICAgIGlmICh0eXBlID09PSAnUGhvdG8nKSB7XHJcbiAgICAgICAgdXJsID0gJy9waG90b3MvY29tbWVudCc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1ZpZGVvQ2xpcCcpIHtcclxuICAgICAgICB1cmwgPSAnL3ZpZGVvLWNsaXBzL2NvbW1lbnQnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdJdGVtJykge1xyXG4gICAgICAgIHVybCA9ICcvaXRlbXMvY29tbWVudCc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1Bvc3QnKSB7XHJcbiAgICAgICAgdXJsID0gJy9wb3N0cy9jb21tZW50JztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnQ29tbWVudCcpIHtcclxuICAgICAgICB1cmwgPSAnL2NvbW1lbnRzL2NvbW1lbnQnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdTaGFyZScpIHtcclxuICAgICAgICB1cmwgPSAnL3NoYXJlcy9jb21tZW50JztcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaWYgKHRleHQubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd0ZXh0JywgdGV4dClcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaWYgKGZpbGVzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBpZiAoZmlsZXNbaV0udHlwZS5zcGxpdCgnLycpWzBdID09PSAnaW1hZ2UnKSB7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBmaWxlc1tpXSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3ZpZGVvJywgZmlsZXNbaV0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgZGF0YUZvclJlcXVlc3QgPSBmb3JtRGF0YVxyXG5cclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsLFxyXG4gICAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiB0b2tlbiB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG5cclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgbGV0IGluaXRpYWxDb21tZW50cyA9IGNvbW1lbnRzO1xyXG4gICAgICAgIGluaXRpYWxDb21tZW50cy5wdXNoKGRhdGEuY29tbWVudHNbMF0pO1xyXG4gICAgICAgIHNldENvbW1lbnRzKGluaXRpYWxDb21tZW50cyk7XHJcbiAgICAgICAgICBcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gYXdhaXQgcmVxdWVzdDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBvblRhcmdldENsaWNrID0gKCkgPT4ge1xyXG4gICAgZmlsZUlucHV0UmVmLmN1cnJlbnQuY2xpY2soKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uRmlsZUlucHV0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBmaWxlRnJvbUlucHV0ID0gZXZlbnQudGFyZ2V0LmZpbGVzO1xyXG4gICAgb25Db21tZW50KCdDb21tZW50JywgaWQsICcnLCBmaWxlRnJvbUlucHV0KTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5jb21tZW50X2l0ZW0sIHtcclxuICAgICAgICBbc3R5bGVzLm5vdF9taW5lXTogIW1pbmUsXHJcbiAgICAgIH0pfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn0+XHJcbiAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgc2l6ZT17NTB9XHJcbiAgICAgICAgICB1cmw9e3Byb2ZpbGVVcmx9XHJcbiAgICAgICAgICBib3JkZXJTaXplPXsyfVxyXG4gICAgICAgICAgdGV4dD17YXV0aG9yPy51c2VybmFtZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxSYXRpbmdTbGlkZVxyXG4gICAgICAgICAgZGVmYXVsdFJhdGU9e3JhdGluZ31cclxuICAgICAgICAgIHdpdGhvdXRUZXh0XHJcbiAgICAgICAgICBkYXJrXHJcbiAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVJhdGVDb21tZW50fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgey8qIDxEcmFnYWJsZVJhdGluZyByYXRpbmc9e3JhdGluZ30gaGFuZGxlUmF0ZUNvbW1lbnQ9e2hhbmRsZVJhdGVDb21tZW50fSAvPiAqL31cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVzc2FnZV9jb250YWluZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVzc2FnZX0+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5hdXRob3J9PntmdWxsTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgPFRyaW1UZXh0IGxpbWl0PXsxMTB9PnttZXNzYWdlfTwvVHJpbVRleHQ+XHJcbiAgICAgICAgICA8L3A+IFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVwbHl9PlxyXG4gICAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogMTUsIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fSBvbkNsaWNrPXsoKSA9PiBzZXRWaXNpYmxlKHRydWUpfT5yZXBseTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7Y29tbWVudHMgJiYgY29tbWVudHMubWFwKGNvbW1lbnQgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lc3NhZ2V9IHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcyZW0nLCBtYXJnaW5Cb3R0b206IDEwIH19PlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmF1dGhvcn0+e2Z1bGxOYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIDxUcmltVGV4dCBsaW1pdD17MTEwfT57Y29tbWVudC50ZXh0fTwvVHJpbVRleHQ+XHJcbiAgICAgICAgICAgICAgPC9wPiBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAge3Zpc2libGU/XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50X2JveH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn0+XHJcbiAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICBzaXplPXszNX1cclxuICAgICAgICAgICAgICB1cmw9e3Byb2ZpbGVVcmx9XHJcbiAgICAgICAgICAgICAgdGV4dD17YXV0aG9yPy51c2VybmFtZX1cclxuICAgICAgICAgICAgICBib3JkZXJTaXplPXsyfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fT5cclxuICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2NvbW1lbnR9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0IGRvIHlvdSBtZWFuP1wiXHJcbiAgICAgICAgICAgICAgcm93cz17Mn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlVGV4dH1cclxuICAgICAgICAgICAgICBvbktleURvd249e2hhbmRsZUVudGVyS2V5fVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7ICBib3JkZXJSYWRpdXM6IDM2LCBoZWlnaHQ6IDI1LCBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLCBjb2xvcjogJ2JsYWNrJ319XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAnaW1hZ2UnXX0gY2xhc3NOYW1lPXtzdHlsZXMuY29tbWVudF9maWxlfSBzdHlsZT17e21hcmdpbkxlZnQ6IC0yOCwgZm9udFNpemU6IDE1fX0gb25DbGljaz17b25UYXJnZXRDbGlja30vPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25GaWxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgcmVmPXtmaWxlSW5wdXRSZWZ9XHJcbiAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlblwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+Om51bGx9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVkaWFDb21tZW50c30+XHJcbiAgICAgICAgICB7Y29tbWVudHMgJiYgY29tbWVudHMubWFwKGl0ZW0gPT4gKFxyXG4gICAgICAgICAgICBpdGVtLmltYWdlICYmIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpdGVtPy5pbWFnZT8uc3JjfWB9IGNsYXNzTmFtZT17c3R5bGVzLm1lZGlhQ29tbWVudHNfaW1hZ2V9Lz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZWRpYUNvbW1lbnRzfT5cclxuICAgICAgICAgIHtjb21tZW50cyAmJiBjb21tZW50cy5tYXAoaXRlbSA9PiAoXHJcbiAgICAgICAgICAgIGl0ZW0/LnZpZGVvICYmIDxQbGF5ZXJcclxuICAgICAgICAgICAgcGxheXNJbmxpbmVcclxuICAgICAgICAgICAgcG9zdGVyPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpdGVtPy52aWRlbz8udGh1bWJuYWlsPy5zcmN9YH1cclxuICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpdGVtPy52aWRlbz8uc3JjfWB9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1lZGlhQ29tbWVudHNfdmlkZW99XHJcbiAgICAgICAgICAgIHdpZHRoPXs4MH1cclxuICAgICAgICAgICAgaGVpZ2h0PXs3MH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gQ29tbWVudHMoe1xyXG4gIGRhdGEgPSBbXSxcclxuICBtb2RhbE1vZGUsXHJcbiAgaWQsXHJcbiAgdHlwZSxcclxuICBhdXRoLFxyXG4gIG9uVXBkYXRlVGltZWxpbmUsXHJcbiAgdG9rZW4sXHJcbiAgYWN0aXZlUG9zdElkXHJcbn0pIHtcclxuICBjb25zdCBbY29tbWVudFRleHQsIHNldENvbW1lbnRUZXh0XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbY29tbWVudExpc3QsIHNldENvbW1lbnRMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoYWN0aXZlUG9zdElkID09PSBpZCk7XHJcbiAgY29uc3QgZmlsZUlucHV0UmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVFbnRlcktleSA9IChlKSA9PiB7XHJcbiAgICBpZiAoZS5uYXRpdmVFdmVudC5rZXlDb2RlID09PSAxMykge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICBvbkNvbW1lbnQodHlwZSwgaWQsIGNvbW1lbnRUZXh0KTtcclxuXHJcbiAgICAgIHNldENvbW1lbnRUZXh0KCcnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VUZXh0ID0gKGUpID0+IHtcclxuICAgIHNldENvbW1lbnRUZXh0KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkNvbW1lbnQgPSBhc3luYyAodHlwZSwgcG9zdElkLCB0ZXh0LCBmaWxlcz11bmRlZmluZWQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCB1cmwgPSAnJztcclxuICAgICAgbGV0IGRhdGFGb3JSZXF1ZXN0O1xyXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YTtcclxuXHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgnY29tbWVudGVkJywgcG9zdElkKVxyXG5cclxuICAgICAgaWYgKHR5cGUgPT09ICdQaG90bycpIHtcclxuICAgICAgICB1cmwgPSAnL3Bob3Rvcy9jb21tZW50JztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnVmlkZW9DbGlwJykge1xyXG4gICAgICAgIHVybCA9ICcvdmlkZW8tY2xpcHMvY29tbWVudCc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0l0ZW0nKSB7XHJcbiAgICAgICAgdXJsID0gJy9pdGVtcy9jb21tZW50JztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnUG9zdCcpIHtcclxuICAgICAgICB1cmwgPSAnL3Bvc3RzL2NvbW1lbnQnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdDb21tZW50Jykge1xyXG4gICAgICAgIHVybCA9ICcvY29tbWVudHMvY29tbWVudCc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1NoYXJlJykge1xyXG4gICAgICAgIHVybCA9ICcvc2hhcmVzL2NvbW1lbnQnO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZmlsZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGlmIChmaWxlc1tpXS50eXBlLnNwbGl0KCcvJylbMF0gPT09ICdpbWFnZScpIHtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIGZpbGVzW2ldKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndmlkZW8nLCBmaWxlc1tpXSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBpZiAodGV4dC5sZW5ndGggIT09IDApIHtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3RleHQnLCB0ZXh0KVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBkYXRhRm9yUmVxdWVzdCA9IGZvcm1EYXRhXHJcblxyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmwsXHJcbiAgICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IHRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcblxyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICBvblVwZGF0ZVRpbWVsaW5lKGRhdGEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBhd2FpdCByZXF1ZXN0O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uUmF0ZUNvbW1lbnQgPSBhc3luYyAoY29tbWVudElkLCByYXRlKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6ICcvY29tbWVudHMvcmF0ZScsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgaWQ6IGNvbW1lbnRJZCxcclxuICAgICAgICAgIHJhdGluZzogcmF0ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiB0b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcblxyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICAvLyBvblVwZGF0ZVRpbWVsaW5lKCk7XHJcbiAgICAgICAgLy8gbWVzc2FnZS5zdWNjZXNzKCdFdmFsdWF0ZSBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25UYXJnZXRDbGljayA9ICgpID0+IHtcclxuICAgIGZpbGVJbnB1dFJlZi5jdXJyZW50LmNsaWNrKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkZpbGVJbnB1dENoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgZmlsZUZyb21JbnB1dCA9IGV2ZW50LnRhcmdldC5maWxlcztcclxuICAgIG9uQ29tbWVudCh0eXBlLCBpZCwgJycsIGZpbGVGcm9tSW5wdXQpO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmNvbW1lbnRzLCB7XHJcbiAgICAgICAgW3N0eWxlcy5tb2RhbF9tb2RlXTogbW9kYWxNb2RlLFxyXG4gICAgICB9KX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50c193cmFwcGVyfT5cclxuICAgICAgICB7KGFjdGl2ZVBvc3RJZCA9PT0gaWQgJiYgbW9kYWxNb2RlPyBkYXRhIDogZGF0YS5zbGljZSgwLCAyKSkubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgIDxDb21tZW50SXRlbVxyXG4gICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgIGlkPXtpdGVtLmlkfVxyXG4gICAgICAgICAgICBtaW5lPXtpdGVtLm1pbmV9XHJcbiAgICAgICAgICAgIG1lc3NhZ2U9e2l0ZW0udGV4dH1cclxuICAgICAgICAgICAgYXV0aG9yPXtpdGVtLmFjY291bnR9XHJcbiAgICAgICAgICAgIHJhdGluZz17aXRlbS5yYXRpbmd9XHJcbiAgICAgICAgICAgIG9uUmF0ZUNvbW1lbnQ9e29uUmF0ZUNvbW1lbnR9XHJcbiAgICAgICAgICAgIHRva2VuPXt0b2tlbn1cclxuICAgICAgICAgICAgZGF0YT17aXRlbS5jb21tZW50cz9pdGVtLmNvbW1lbnRzOltdfVxyXG4gICAgICAgICAgICBvblVwZGF0ZVRpbWVsaW5lPXtvblVwZGF0ZVRpbWVsaW5lfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnRfYm94fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn0+XHJcbiAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgIHNpemU9ezQ1fVxyXG4gICAgICAgICAgICB1cmw9e2F1dGgudXNlcj8ucHJvZmlsZVBob3RvPy5zcmN9XHJcbiAgICAgICAgICAgIHRleHQ9e2F1dGgudXNlcj8udXNlcm5hbWV9XHJcbiAgICAgICAgICAgIGJvcmRlclNpemU9ezJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9PlxyXG4gICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgIHZhbHVlPXtjb21tZW50VGV4dH1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0IGRvIHlvdSBtZWFuP1wiXHJcbiAgICAgICAgICAgIHJvd3M9ezJ9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VUZXh0fVxyXG4gICAgICAgICAgICBvbktleURvd249e2hhbmRsZUVudGVyS2V5fVxyXG4gICAgICAgICAgICBzdHlsZT17eyAgYm9yZGVyUmFkaXVzOiAzNiwgaGVpZ2h0OiA0NSwgcGFkZGluZ0xlZnQ6IDMwLCBwYWRkaW5nVG9wOiAxMCwgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JywgY29sb3I6ICdibGFjayd9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgPC9UZXh0QXJlYT5cclxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAnaW1hZ2UnXX0gY2xhc3NOYW1lPXtzdHlsZXMuY29tbWVudF9maWxlfSBvbkNsaWNrPXtvblRhcmdldENsaWNrfS8+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkZpbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgIHJlZj17ZmlsZUlucHV0UmVmfVxyXG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lZGlhQ29tbWVudHN9PlxyXG4gICAgICAgICAge2RhdGEubWFwKGl0ZW0gPT4gKFxyXG4gICAgICAgICAgICBpdGVtLmltYWdlICYmIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpdGVtPy5pbWFnZT8uc3JjfWB9IGNsYXNzTmFtZT17c3R5bGVzLm1lZGlhQ29tbWVudHNfaW1hZ2V9Lz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZWRpYUNvbW1lbnRzfT5cclxuICAgICAgICAgIHtkYXRhLm1hcChpdGVtID0+IChcclxuICAgICAgICAgICAgaXRlbT8udmlkZW8gJiYgPFBsYXllclxyXG4gICAgICAgICAgICBwbGF5c0lubGluZVxyXG4gICAgICAgICAgICBwb3N0ZXI9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2l0ZW0/LnZpZGVvPy50aHVtYm5haWw/LnNyY31gfVxyXG4gICAgICAgICAgICBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2l0ZW0/LnZpZGVvPy5zcmN9YH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubWVkaWFDb21tZW50c192aWRlb31cclxuICAgICAgICAgICAgd2lkdGg9ezgwfVxyXG4gICAgICAgICAgICBoZWlnaHQ9ezcwfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdG9yZSkgPT4gKHtcclxuICB0b2tlbjogc3RvcmUuYXV0aC50b2tlbixcclxuICBhdXRoOiBzdG9yZS5hdXRoLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShDb21tZW50cyk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=