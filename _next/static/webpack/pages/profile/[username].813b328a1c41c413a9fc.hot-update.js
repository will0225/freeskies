webpackHotUpdate_N_E("pages/profile/[username]",{

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
  data
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(data);
  const fileInputRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

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
    let initialComments = comments;
    initialComments.push(data.comments[0]);
    setComments(initialComments);

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
        console.log('success');
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
      lineNumber: 113,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
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
      lineNumber: 119,
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
      lineNumber: 125,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.message_container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.message,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.author,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 11
    }
  }, fullName), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 11
    }
  }, __jsx(components_common_TrimText__WEBPACK_IMPORTED_MODULE_4__["default"], {
    limit: 110,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  }, message))), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.reply,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
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
      lineNumber: 142,
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
      lineNumber: 145,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.author,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 15
    }
  }, fullName), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 15
    }
  }, __jsx(components_common_TrimText__WEBPACK_IMPORTED_MODULE_4__["default"], {
    limit: 110,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 17
    }
  }, comment.text)))), visible ? __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.comment_box,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
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
      lineNumber: 155,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.input,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
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
      lineNumber: 163,
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
      lineNumber: 171,
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
      lineNumber: 172,
      columnNumber: 13
    }
  }))) : null, __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mediaComments,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
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
        lineNumber: 182,
        columnNumber: 27
      }
    });
  })), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mediaComments,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
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
        lineNumber: 187,
        columnNumber: 28
      }
    });
  }))));
}

_s(CommentItem, "jvcHxoTZLeWrz38+/O+4/hOu+6c=");

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
      lineNumber: 326,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.comments_wrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
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
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 10
    }
  }))), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.comment_box,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
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
      lineNumber: 349,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.input,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
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
      lineNumber: 357,
      columnNumber: 11
    }
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
    icon: ['far', 'image'],
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.comment_file,
    onClick: onTargetClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
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
      lineNumber: 367,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mediaComments,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
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
        lineNumber: 377,
        columnNumber: 27
      }
    });
  })), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mediaComments,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
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
        lineNumber: 382,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aW1lbGluZS9Db21tZW50cy5qcyJdLCJuYW1lcyI6WyJUZXh0QXJlYSIsIklucHV0IiwiQ29tbWVudEl0ZW0iLCJtZXNzYWdlIiwibWluZSIsImF1dGhvciIsInJhdGluZyIsImlkIiwib25SYXRlQ29tbWVudCIsInRva2VuIiwiZGF0YSIsImZ1bGxOYW1lIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJoYW5kbGVSYXRlQ29tbWVudCIsInJhdGUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInVzZVN0YXRlIiwicHJvZmlsZVVybCIsInVuZGVmaW5lZCIsInByb2ZpbGVQaG90byIsInNyYyIsImNvbW1lbnQiLCJzZXRDb21tZW50IiwiY29tbWVudHMiLCJzZXRDb21tZW50cyIsImZpbGVJbnB1dFJlZiIsInVzZVJlZiIsImhhbmRsZUVudGVyS2V5IiwiZSIsIm5hdGl2ZUV2ZW50Iiwia2V5Q29kZSIsInByZXZlbnREZWZhdWx0Iiwib25Db21tZW50IiwiaGFuZGxlQ2hhbmdlVGV4dCIsInRhcmdldCIsInZhbHVlIiwidHlwZSIsInBvc3RJZCIsInRleHQiLCJmaWxlcyIsImluaXRpYWxDb21tZW50cyIsInB1c2giLCJ1cmwiLCJkYXRhRm9yUmVxdWVzdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJsZW5ndGgiLCJpIiwic3BsaXQiLCJyZXF1ZXN0IiwiQVBJIiwibWV0aG9kIiwiaGVhZGVycyIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIkVycm9yIiwib25UYXJnZXRDbGljayIsImN1cnJlbnQiLCJjbGljayIsIm9uRmlsZUlucHV0Q2hhbmdlIiwiZXZlbnQiLCJmaWxlRnJvbUlucHV0IiwiY2xhc3NuYW1lcyIsInN0eWxlcyIsImNvbW1lbnRfaXRlbSIsIm5vdF9taW5lIiwiYXZhdGFyIiwidXNlcm5hbWUiLCJtZXNzYWdlX2NvbnRhaW5lciIsInJlcGx5IiwiZm9udFNpemUiLCJ0ZXh0RGVjb3JhdGlvbiIsInRleHRBbGlnbiIsIm1hcCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5Cb3R0b20iLCJjb21tZW50X2JveCIsImlucHV0IiwiYm9yZGVyUmFkaXVzIiwiaGVpZ2h0IiwiYmFja2dyb3VuZCIsImNvbG9yIiwiY29tbWVudF9maWxlIiwibWVkaWFDb21tZW50cyIsIml0ZW0iLCJpbWFnZSIsIm1lZGlhQ29tbWVudHNfaW1hZ2UiLCJ2aWRlbyIsInRodW1ibmFpbCIsIm1lZGlhQ29tbWVudHNfdmlkZW8iLCJDb21tZW50cyIsIm1vZGFsTW9kZSIsImF1dGgiLCJvblVwZGF0ZVRpbWVsaW5lIiwiYWN0aXZlUG9zdElkIiwiY29tbWVudFRleHQiLCJzZXRDb21tZW50VGV4dCIsImNvbW1lbnRMaXN0Iiwic2V0Q29tbWVudExpc3QiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJjb21tZW50SWQiLCJtb2RhbF9tb2RlIiwiY29tbWVudHNfd3JhcHBlciIsInNsaWNlIiwiYWNjb3VudCIsInVzZXIiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdUb3AiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdG9yZSIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTTtBQUFFQTtBQUFGLElBQWVDLDBDQUFyQjs7QUFFQSxTQUFTQyxXQUFULENBQXFCO0FBQUVDLFNBQUY7QUFBV0MsTUFBWDtBQUFpQkMsUUFBakI7QUFBeUJDLFFBQXpCO0FBQWlDQyxJQUFqQztBQUFxQ0MsZUFBckM7QUFBb0RDLE9BQXBEO0FBQTJEQztBQUEzRCxDQUFyQixFQUF3RjtBQUFBOztBQUFBOztBQUN0RixRQUFNQyxRQUFRLGFBQU1OLE1BQU4sYUFBTUEsTUFBTix1QkFBTUEsTUFBTSxDQUFFTyxTQUFkLGNBQTJCUCxNQUEzQixhQUEyQkEsTUFB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QUFBO0FBQUE7QUFBQSxNQURGO0FBQUEsR0FBYixDQURMLENBakRGLEVBc0RFO0FBQUssYUFBUyxFQUFFdkIsa0VBQU0sQ0FBQ29CLGFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSzlFLElBQUksQ0FBQ29FLEdBQUwsQ0FBU1csSUFBSTtBQUFBOztBQUFBLFdBQ1osQ0FBQUEsSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSixZQUFBQSxJQUFJLENBQUVHLEtBQU4sS0FBZSxNQUFDLHlFQUFEO0FBQ2YsaUJBQVcsTUFESTtBQUVmLFlBQU0sNkNBQXNDSCxJQUF0QyxhQUFzQ0EsSUFBdEMsdUNBQXNDQSxJQUFJLENBQUVHLEtBQTVDLDBFQUFzQyxhQUFhQyxTQUFuRCwwREFBc0Msc0JBQXdCdkUsR0FBOUQsQ0FGUztBQUdmLFNBQUcsNkNBQXNDbUUsSUFBdEMsYUFBc0NBLElBQXRDLHVDQUFzQ0EsSUFBSSxDQUFFRyxLQUE1QyxpREFBc0MsYUFBYXRFLEdBQW5ELENBSFk7QUFJZixlQUFTLEVBQUU4QyxrRUFBTSxDQUFDMEIsbUJBSkg7QUFLZixXQUFLLEVBQUUsRUFMUTtBQU1mLFlBQU0sRUFBRSxFQU5PO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESDtBQUFBLEdBQWIsQ0FETCxDQXRERixDQURGO0FBcUVEOztJQS9MUUMsUTs7TUFBQUEsUTs7QUFpTVQsTUFBTW1CLGVBQWUsR0FBSUMsS0FBRCxLQUFZO0FBQ2xDMUcsT0FBSyxFQUFFMEcsS0FBSyxDQUFDbEIsSUFBTixDQUFXeEYsS0FEZ0I7QUFFbEN3RixNQUFJLEVBQUVrQixLQUFLLENBQUNsQjtBQUZzQixDQUFaLENBQXhCOztBQUtlbUIsMEhBQU8sQ0FBQ0YsZUFBRCxDQUFQLENBQXlCbkIsUUFBekIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlL1t1c2VybmFtZV0uODEzYjMyOGExYzQxYzQxM2E5ZmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBQb3BvdmVyIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvY29tbWVudC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUcmltVGV4dCBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9UcmltVGV4dCc7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnLi4vY29tbW9uL0F2YXRhcic7XHJcbmltcG9ydCBBUEkgZnJvbSAnY29uZmlncy9BUEknO1xyXG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBEcmFnYWJsZVJhdGluZyBmcm9tICcuLi9mb3Jtcy9yYXRpbmcvRHJhZ2FibGVSYXRpbmcnO1xyXG5pbXBvcnQgUmF0aW5nU2xpZGUgZnJvbSAnLi4vZm9ybXMvcmF0aW5nL1JhdGluZ1NsaWRlJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IFBsYXllciBmcm9tICd2aWRlby1yZWFjdC9saWIvY29tcG9uZW50cy9QbGF5ZXInO1xyXG5cclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcblxyXG5mdW5jdGlvbiBDb21tZW50SXRlbSh7IG1lc3NhZ2UsIG1pbmUsIGF1dGhvciwgcmF0aW5nLCBpZCwgb25SYXRlQ29tbWVudCwgdG9rZW4sIGRhdGEgfSkge1xyXG4gIGNvbnN0IGZ1bGxOYW1lID0gYCR7YXV0aG9yPy5maXJzdE5hbWV9ICR7YXV0aG9yPy5sYXN0TmFtZX1gO1xyXG4gIGNvbnN0IGhhbmRsZVJhdGVDb21tZW50ID0gKHJhdGUpID0+IHtcclxuICAgIG9uUmF0ZUNvbW1lbnQoaWQsIHJhdGUpO1xyXG4gIH07XHJcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHByb2ZpbGVVcmwgPSBhdXRob3IgIT09IG51bGwgJiYgYXV0aG9yICE9PSB1bmRlZmluZWQgPyBgJHthdXRob3IucHJvZmlsZVBob3RvPy5zcmN9YCA6IG51bGxcclxuICBjb25zdCBbY29tbWVudCwgc2V0Q29tbWVudF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2NvbW1lbnRzLCBzZXRDb21tZW50c10gPSB1c2VTdGF0ZShkYXRhKTtcclxuICBjb25zdCBmaWxlSW5wdXRSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUVudGVyS2V5ID0gKGUpID0+IHtcclxuICAgIGlmIChlLm5hdGl2ZUV2ZW50LmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgb25Db21tZW50KFwiQ29tbWVudFwiLCBpZCwgY29tbWVudCk7XHJcbiAgICAgIHNldENvbW1lbnQoJycpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVRleHQgPSAoZSkgPT4ge1xyXG4gICAgc2V0Q29tbWVudChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25Db21tZW50ID0gYXN5bmMgKHR5cGUsIHBvc3RJZCwgdGV4dCwgZmlsZXM9dW5kZWZpbmVkKSA9PiB7XHJcbiAgICBsZXQgaW5pdGlhbENvbW1lbnRzID0gY29tbWVudHM7XHJcbiAgICBpbml0aWFsQ29tbWVudHMucHVzaChkYXRhLmNvbW1lbnRzWzBdKVxyXG4gICAgc2V0Q29tbWVudHMoaW5pdGlhbENvbW1lbnRzKVxyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IHVybCA9ICcnO1xyXG4gICAgICBsZXQgZGF0YUZvclJlcXVlc3Q7XHJcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhO1xyXG5cclxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdjb21tZW50ZWQnLCBwb3N0SWQpXHJcblxyXG4gICAgICBpZiAodHlwZSA9PT0gJ1Bob3RvJykge1xyXG4gICAgICAgIHVybCA9ICcvcGhvdG9zL2NvbW1lbnQnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdWaWRlb0NsaXAnKSB7XHJcbiAgICAgICAgdXJsID0gJy92aWRlby1jbGlwcy9jb21tZW50JztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnSXRlbScpIHtcclxuICAgICAgICB1cmwgPSAnL2l0ZW1zL2NvbW1lbnQnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdQb3N0Jykge1xyXG4gICAgICAgIHVybCA9ICcvcG9zdHMvY29tbWVudCc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0NvbW1lbnQnKSB7XHJcbiAgICAgICAgdXJsID0gJy9jb21tZW50cy9jb21tZW50JztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnU2hhcmUnKSB7XHJcbiAgICAgICAgdXJsID0gJy9zaGFyZXMvY29tbWVudCc7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGlmICh0ZXh0Lmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndGV4dCcsIHRleHQpXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGlmIChmaWxlcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgaWYgKGZpbGVzW2ldLnR5cGUuc3BsaXQoJy8nKVswXSA9PT0gJ2ltYWdlJykge1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgZmlsZXNbaV0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd2aWRlbycsIGZpbGVzW2ldKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRhdGFGb3JSZXF1ZXN0ID0gZm9ybURhdGFcclxuXHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybCxcclxuICAgICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogdG9rZW4gfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuXHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3MnKTtcclxuICAgICAgICAgIFxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBhd2FpdCByZXF1ZXN0O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uVGFyZ2V0Q2xpY2sgPSAoKSA9PiB7XHJcbiAgICBmaWxlSW5wdXRSZWYuY3VycmVudC5jbGljaygpO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25GaWxlSW5wdXRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IGZpbGVGcm9tSW5wdXQgPSBldmVudC50YXJnZXQuZmlsZXM7XHJcbiAgICBvbkNvbW1lbnQoJ0NvbW1lbnQnLCBpZCwgJycsIGZpbGVGcm9tSW5wdXQpO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmNvbW1lbnRfaXRlbSwge1xyXG4gICAgICAgIFtzdHlsZXMubm90X21pbmVdOiAhbWluZSxcclxuICAgICAgfSl9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyfT5cclxuICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICBzaXplPXs1MH1cclxuICAgICAgICAgIHVybD17cHJvZmlsZVVybH1cclxuICAgICAgICAgIGJvcmRlclNpemU9ezJ9XHJcbiAgICAgICAgICB0ZXh0PXthdXRob3I/LnVzZXJuYW1lfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFJhdGluZ1NsaWRlXHJcbiAgICAgICAgICBkZWZhdWx0UmF0ZT17cmF0aW5nfVxyXG4gICAgICAgICAgd2l0aG91dFRleHRcclxuICAgICAgICAgIGRhcmtcclxuICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUmF0ZUNvbW1lbnR9XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7LyogPERyYWdhYmxlUmF0aW5nIHJhdGluZz17cmF0aW5nfSBoYW5kbGVSYXRlQ29tbWVudD17aGFuZGxlUmF0ZUNvbW1lbnR9IC8+ICovfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZXNzYWdlX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZXNzYWdlfT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmF1dGhvcn0+e2Z1bGxOYW1lfTwvc3Bhbj5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8VHJpbVRleHQgbGltaXQ9ezExMH0+e21lc3NhZ2V9PC9UcmltVGV4dD5cclxuICAgICAgICAgIDwvcD4gXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZXBseX0+XHJcbiAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAxNSwgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19IG9uQ2xpY2s9eygpID0+IHNldFZpc2libGUodHJ1ZSl9PnJlcGx5PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtjb21tZW50cyAmJiBjb21tZW50cy5tYXAoY29tbWVudCA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVzc2FnZX0gc3R5bGU9e3sgbWFyZ2luTGVmdDogJzJlbScsIG1hcmdpbkJvdHRvbTogMTAgfX0+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYXV0aG9yfT57ZnVsbE5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgPFRyaW1UZXh0IGxpbWl0PXsxMTB9Pntjb21tZW50LnRleHR9PC9UcmltVGV4dD5cclxuICAgICAgICAgICAgICA8L3A+IFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgICB7dmlzaWJsZT9cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnRfYm94fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyfT5cclxuICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgIHNpemU9ezM1fVxyXG4gICAgICAgICAgICAgIHVybD17cHJvZmlsZVVybH1cclxuICAgICAgICAgICAgICB0ZXh0PXthdXRob3I/LnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgIGJvcmRlclNpemU9ezJ9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9PlxyXG4gICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICB2YWx1ZT17Y29tbWVudH1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgZG8geW91IG1lYW4/XCJcclxuICAgICAgICAgICAgICByb3dzPXsyfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VUZXh0fVxyXG4gICAgICAgICAgICAgIG9uS2V5RG93bj17aGFuZGxlRW50ZXJLZXl9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgIGJvcmRlclJhZGl1czogMzYsIGhlaWdodDogMjUsIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsIGNvbG9yOiAnYmxhY2snfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdpbWFnZSddfSBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50X2ZpbGV9IHN0eWxlPXt7bWFyZ2luTGVmdDogLTI4LCBmb250U2l6ZTogMTV9fSBvbkNsaWNrPXtvblRhcmdldENsaWNrfS8+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25GaWxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgIHJlZj17ZmlsZUlucHV0UmVmfVxyXG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlblwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+Om51bGx9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVkaWFDb21tZW50c30+XHJcbiAgICAgICAgICB7Y29tbWVudHMgJiYgY29tbWVudHMubWFwKGl0ZW0gPT4gKFxyXG4gICAgICAgICAgICBpdGVtLmltYWdlICYmIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpdGVtPy5pbWFnZT8uc3JjfWB9IGNsYXNzTmFtZT17c3R5bGVzLm1lZGlhQ29tbWVudHNfaW1hZ2V9Lz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZWRpYUNvbW1lbnRzfT5cclxuICAgICAgICAgIHtjb21tZW50cyAmJiBjb21tZW50cy5tYXAoaXRlbSA9PiAoXHJcbiAgICAgICAgICAgIGl0ZW0/LnZpZGVvICYmIDxQbGF5ZXJcclxuICAgICAgICAgICAgcGxheXNJbmxpbmVcclxuICAgICAgICAgICAgcG9zdGVyPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpdGVtPy52aWRlbz8udGh1bWJuYWlsPy5zcmN9YH1cclxuICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpdGVtPy52aWRlbz8uc3JjfWB9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1lZGlhQ29tbWVudHNfdmlkZW99XHJcbiAgICAgICAgICAgIHdpZHRoPXs4MH1cclxuICAgICAgICAgICAgaGVpZ2h0PXs3MH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gQ29tbWVudHMoe1xyXG4gIGRhdGEgPSBbXSxcclxuICBtb2RhbE1vZGUsXHJcbiAgaWQsXHJcbiAgdHlwZSxcclxuICBhdXRoLFxyXG4gIG9uVXBkYXRlVGltZWxpbmUsXHJcbiAgdG9rZW4sXHJcbiAgYWN0aXZlUG9zdElkXHJcbn0pIHtcclxuICBjb25zdCBbY29tbWVudFRleHQsIHNldENvbW1lbnRUZXh0XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbY29tbWVudExpc3QsIHNldENvbW1lbnRMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoYWN0aXZlUG9zdElkID09PSBpZCk7XHJcbiAgY29uc3QgZmlsZUlucHV0UmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVFbnRlcktleSA9IChlKSA9PiB7XHJcbiAgICBpZiAoZS5uYXRpdmVFdmVudC5rZXlDb2RlID09PSAxMykge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICBvbkNvbW1lbnQodHlwZSwgaWQsIGNvbW1lbnRUZXh0KTtcclxuXHJcbiAgICAgIHNldENvbW1lbnRUZXh0KCcnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VUZXh0ID0gKGUpID0+IHtcclxuICAgIHNldENvbW1lbnRUZXh0KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkNvbW1lbnQgPSBhc3luYyAodHlwZSwgcG9zdElkLCB0ZXh0LCBmaWxlcz11bmRlZmluZWQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCB1cmwgPSAnJztcclxuICAgICAgbGV0IGRhdGFGb3JSZXF1ZXN0O1xyXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YTtcclxuXHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgnY29tbWVudGVkJywgcG9zdElkKVxyXG5cclxuICAgICAgaWYgKHR5cGUgPT09ICdQaG90bycpIHtcclxuICAgICAgICB1cmwgPSAnL3Bob3Rvcy9jb21tZW50JztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnVmlkZW9DbGlwJykge1xyXG4gICAgICAgIHVybCA9ICcvdmlkZW8tY2xpcHMvY29tbWVudCc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0l0ZW0nKSB7XHJcbiAgICAgICAgdXJsID0gJy9pdGVtcy9jb21tZW50JztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnUG9zdCcpIHtcclxuICAgICAgICB1cmwgPSAnL3Bvc3RzL2NvbW1lbnQnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdDb21tZW50Jykge1xyXG4gICAgICAgIHVybCA9ICcvY29tbWVudHMvY29tbWVudCc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1NoYXJlJykge1xyXG4gICAgICAgIHVybCA9ICcvc2hhcmVzL2NvbW1lbnQnO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZmlsZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGlmIChmaWxlc1tpXS50eXBlLnNwbGl0KCcvJylbMF0gPT09ICdpbWFnZScpIHtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIGZpbGVzW2ldKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndmlkZW8nLCBmaWxlc1tpXSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBpZiAodGV4dC5sZW5ndGggIT09IDApIHtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3RleHQnLCB0ZXh0KVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBkYXRhRm9yUmVxdWVzdCA9IGZvcm1EYXRhXHJcblxyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmwsXHJcbiAgICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IHRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcblxyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICBvblVwZGF0ZVRpbWVsaW5lKGRhdGEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBhd2FpdCByZXF1ZXN0O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uUmF0ZUNvbW1lbnQgPSBhc3luYyAoY29tbWVudElkLCByYXRlKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6ICcvY29tbWVudHMvcmF0ZScsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgaWQ6IGNvbW1lbnRJZCxcclxuICAgICAgICAgIHJhdGluZzogcmF0ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiB0b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcblxyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICAvLyBvblVwZGF0ZVRpbWVsaW5lKCk7XHJcbiAgICAgICAgLy8gbWVzc2FnZS5zdWNjZXNzKCdFdmFsdWF0ZSBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25UYXJnZXRDbGljayA9ICgpID0+IHtcclxuICAgIGZpbGVJbnB1dFJlZi5jdXJyZW50LmNsaWNrKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkZpbGVJbnB1dENoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgZmlsZUZyb21JbnB1dCA9IGV2ZW50LnRhcmdldC5maWxlcztcclxuICAgIG9uQ29tbWVudCh0eXBlLCBpZCwgJycsIGZpbGVGcm9tSW5wdXQpO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmNvbW1lbnRzLCB7XHJcbiAgICAgICAgW3N0eWxlcy5tb2RhbF9tb2RlXTogbW9kYWxNb2RlLFxyXG4gICAgICB9KX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50c193cmFwcGVyfT5cclxuICAgICAgICB7KGFjdGl2ZVBvc3RJZCA9PT0gaWQgJiYgbW9kYWxNb2RlPyBkYXRhIDogZGF0YS5zbGljZSgwLCAyKSkubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgIDxDb21tZW50SXRlbVxyXG4gICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgIGlkPXtpdGVtLmlkfVxyXG4gICAgICAgICAgICBtaW5lPXtpdGVtLm1pbmV9XHJcbiAgICAgICAgICAgIG1lc3NhZ2U9e2l0ZW0udGV4dH1cclxuICAgICAgICAgICAgYXV0aG9yPXtpdGVtLmFjY291bnR9XHJcbiAgICAgICAgICAgIHJhdGluZz17aXRlbS5yYXRpbmd9XHJcbiAgICAgICAgICAgIG9uUmF0ZUNvbW1lbnQ9e29uUmF0ZUNvbW1lbnR9XHJcbiAgICAgICAgICAgIHRva2VuPXt0b2tlbn1cclxuICAgICAgICAgICAgZGF0YT17aXRlbS5jb21tZW50cz9pdGVtLmNvbW1lbnRzOltdfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnRfYm94fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn0+XHJcbiAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgIHNpemU9ezQ1fVxyXG4gICAgICAgICAgICB1cmw9e2F1dGgudXNlcj8ucHJvZmlsZVBob3RvPy5zcmN9XHJcbiAgICAgICAgICAgIHRleHQ9e2F1dGgudXNlcj8udXNlcm5hbWV9XHJcbiAgICAgICAgICAgIGJvcmRlclNpemU9ezJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9PlxyXG4gICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgIHZhbHVlPXtjb21tZW50VGV4dH1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0IGRvIHlvdSBtZWFuP1wiXHJcbiAgICAgICAgICAgIHJvd3M9ezJ9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VUZXh0fVxyXG4gICAgICAgICAgICBvbktleURvd249e2hhbmRsZUVudGVyS2V5fVxyXG4gICAgICAgICAgICBzdHlsZT17eyAgYm9yZGVyUmFkaXVzOiAzNiwgaGVpZ2h0OiA0NSwgcGFkZGluZ0xlZnQ6IDMwLCBwYWRkaW5nVG9wOiAxMCwgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JywgY29sb3I6ICdibGFjayd9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgPC9UZXh0QXJlYT5cclxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAnaW1hZ2UnXX0gY2xhc3NOYW1lPXtzdHlsZXMuY29tbWVudF9maWxlfSBvbkNsaWNrPXtvblRhcmdldENsaWNrfS8+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkZpbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgIHJlZj17ZmlsZUlucHV0UmVmfVxyXG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lZGlhQ29tbWVudHN9PlxyXG4gICAgICAgICAge2RhdGEubWFwKGl0ZW0gPT4gKFxyXG4gICAgICAgICAgICBpdGVtLmltYWdlICYmIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpdGVtPy5pbWFnZT8uc3JjfWB9IGNsYXNzTmFtZT17c3R5bGVzLm1lZGlhQ29tbWVudHNfaW1hZ2V9Lz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZWRpYUNvbW1lbnRzfT5cclxuICAgICAgICAgIHtkYXRhLm1hcChpdGVtID0+IChcclxuICAgICAgICAgICAgaXRlbT8udmlkZW8gJiYgPFBsYXllclxyXG4gICAgICAgICAgICBwbGF5c0lubGluZVxyXG4gICAgICAgICAgICBwb3N0ZXI9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2l0ZW0/LnZpZGVvPy50aHVtYm5haWw/LnNyY31gfVxyXG4gICAgICAgICAgICBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2l0ZW0/LnZpZGVvPy5zcmN9YH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubWVkaWFDb21tZW50c192aWRlb31cclxuICAgICAgICAgICAgd2lkdGg9ezgwfVxyXG4gICAgICAgICAgICBoZWlnaHQ9ezcwfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdG9yZSkgPT4gKHtcclxuICB0b2tlbjogc3RvcmUuYXV0aC50b2tlbixcclxuICBhdXRoOiBzdG9yZS5hdXRoLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShDb21tZW50cyk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=