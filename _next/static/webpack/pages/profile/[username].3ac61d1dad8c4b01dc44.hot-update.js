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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aW1lbGluZS9Db21tZW50cy5qcyJdLCJuYW1lcyI6WyJUZXh0QXJlYSIsIklucHV0IiwiQ29tbWVudEl0ZW0iLCJtZXNzYWdlIiwibWluZSIsImF1dGhvciIsInJhdGluZyIsImlkIiwib25SYXRlQ29tbWVudCIsInRva2VuIiwiZGF0YSIsImZ1bGxOYW1lIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJoYW5kbGVSYXRlQ29tbWVudCIsInJhdGUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInVzZVN0YXRlIiwicHJvZmlsZVVybCIsInVuZGVmaW5lZCIsInByb2ZpbGVQaG90byIsInNyYyIsImNvbW1lbnQiLCJzZXRDb21tZW50IiwiY29tbWVudHMiLCJzZXRDb21tZW50cyIsImZpbGVJbnB1dFJlZiIsInVzZVJlZiIsImhhbmRsZUVudGVyS2V5IiwiZSIsIm5hdGl2ZUV2ZW50Iiwia2V5Q29kZSIsInByZXZlbnREZWZhdWx0Iiwib25Db21tZW50IiwiaGFuZGxlQ2hhbmdlVGV4dCIsInRhcmdldCIsInZhbHVlIiwidHlwZSIsInBvc3RJZCIsInRleHQiLCJmaWxlcyIsInVybCIsImRhdGFGb3JSZXF1ZXN0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImxlbmd0aCIsImkiLCJzcGxpdCIsInJlcXVlc3QiLCJBUEkiLCJtZXRob2QiLCJoZWFkZXJzIiwic3RhdHVzIiwiaW5pdGlhbENvbW1lbnRzIiwicHVzaCIsImVycm9yIiwiRXJyb3IiLCJjb25zb2xlIiwibG9nIiwib25UYXJnZXRDbGljayIsImN1cnJlbnQiLCJjbGljayIsIm9uRmlsZUlucHV0Q2hhbmdlIiwiZXZlbnQiLCJmaWxlRnJvbUlucHV0IiwiY2xhc3NuYW1lcyIsInN0eWxlcyIsImNvbW1lbnRfaXRlbSIsIm5vdF9taW5lIiwiYXZhdGFyIiwidXNlcm5hbWUiLCJtZXNzYWdlX2NvbnRhaW5lciIsInJlcGx5IiwiZm9udFNpemUiLCJ0ZXh0RGVjb3JhdGlvbiIsInRleHRBbGlnbiIsIm1hcCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5Cb3R0b20iLCJjb21tZW50X2JveCIsImlucHV0IiwiYm9yZGVyUmFkaXVzIiwiaGVpZ2h0IiwiYmFja2dyb3VuZCIsImNvbG9yIiwiY29tbWVudF9maWxlIiwibWVkaWFDb21tZW50cyIsIml0ZW0iLCJpbWFnZSIsIm1lZGlhQ29tbWVudHNfaW1hZ2UiLCJ2aWRlbyIsInRodW1ibmFpbCIsIm1lZGlhQ29tbWVudHNfdmlkZW8iLCJDb21tZW50cyIsIm1vZGFsTW9kZSIsImF1dGgiLCJvblVwZGF0ZVRpbWVsaW5lIiwiYWN0aXZlUG9zdElkIiwiY29tbWVudFRleHQiLCJzZXRDb21tZW50VGV4dCIsImNvbW1lbnRMaXN0Iiwic2V0Q29tbWVudExpc3QiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJjb21tZW50SWQiLCJtb2RhbF9tb2RlIiwiY29tbWVudHNfd3JhcHBlciIsInNsaWNlIiwiYWNjb3VudCIsInVzZXIiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdUb3AiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdG9yZSIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTTtBQUFFQTtBQUFGLElBQWVDLDBDQUFyQjs7QUFFQSxTQUFTQyxXQUFULENBQXFCO0FBQUVDLFNBQUY7QUFBV0MsTUFBWDtBQUFpQkMsUUFBakI7QUFBeUJDLFFBQXpCO0FBQWlDQyxJQUFqQztBQUFxQ0MsZUFBckM7QUFBb0RDLE9BQXBEO0FBQTJEQztBQUEzRCxDQUFyQixFQUF3RjtBQUFBOztBQUFBOztBQUN0RixRQUFNQyxRQUFRLGFBQU1OLE1BQU4sYUFBTUEsTUFBTix1QkFBTUEsTUFBTSxDQUFFTyxTQUFkLGNBQTJCUCxNQUEzQixhQUEyQkEsTUFB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TCxDQWpERixFQXNERTtBQUFLLGFBQVMsRUFBRXZCLGtFQUFNLENBQUNvQixhQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0s5RSxJQUFJLENBQUNvRSxHQUFMLENBQVNXLElBQUk7QUFBQTs7QUFBQSxXQUNaLENBQUFBLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFRyxLQUFOLEtBQWUsTUFBQyx5RUFBRDtBQUNmLGlCQUFXLE1BREk7QUFFZixZQUFNLDZDQUFzQ0gsSUFBdEMsYUFBc0NBLElBQXRDLHVDQUFzQ0EsSUFBSSxDQUFFRyxLQUE1QywwRUFBc0MsYUFBYUMsU0FBbkQsMERBQXNDLHNCQUF3QnZFLEdBQTlELENBRlM7QUFHZixTQUFHLDZDQUFzQ21FLElBQXRDLGFBQXNDQSxJQUF0Qyx1Q0FBc0NBLElBQUksQ0FBRUcsS0FBNUMsaURBQXNDLGFBQWF0RSxHQUFuRCxDQUhZO0FBSWYsZUFBUyxFQUFFOEMsa0VBQU0sQ0FBQzBCLG1CQUpIO0FBS2YsV0FBSyxFQUFFLEVBTFE7QUFNZixZQUFNLEVBQUUsRUFOTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREg7QUFBQSxHQUFiLENBREwsQ0F0REYsQ0FERjtBQXFFRDs7SUEvTFFDLFE7O01BQUFBLFE7O0FBaU1ULE1BQU1tQixlQUFlLEdBQUlDLEtBQUQsS0FBWTtBQUNsQzFHLE9BQUssRUFBRTBHLEtBQUssQ0FBQ2xCLElBQU4sQ0FBV3hGLEtBRGdCO0FBRWxDd0YsTUFBSSxFQUFFa0IsS0FBSyxDQUFDbEI7QUFGc0IsQ0FBWixDQUF4Qjs7QUFLZW1CLDBIQUFPLENBQUNGLGVBQUQsQ0FBUCxDQUF5Qm5CLFFBQXpCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS9bdXNlcm5hbWVdLjNhYzYxZDFkYWQ4YzRiMDFkYzQ0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgUG9wb3ZlciB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL2NvbW1lbnQubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVHJpbVRleHQgZnJvbSAnY29tcG9uZW50cy9jb21tb24vVHJpbVRleHQnO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJy4uL2NvbW1vbi9BdmF0YXInO1xyXG5pbXBvcnQgQVBJIGZyb20gJ2NvbmZpZ3MvQVBJJztcclxuaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgRHJhZ2FibGVSYXRpbmcgZnJvbSAnLi4vZm9ybXMvcmF0aW5nL0RyYWdhYmxlUmF0aW5nJztcclxuaW1wb3J0IFJhdGluZ1NsaWRlIGZyb20gJy4uL2Zvcm1zL3JhdGluZy9SYXRpbmdTbGlkZSc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAndmlkZW8tcmVhY3QvbGliL2NvbXBvbmVudHMvUGxheWVyJztcclxuXHJcbmNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0O1xyXG5cclxuZnVuY3Rpb24gQ29tbWVudEl0ZW0oeyBtZXNzYWdlLCBtaW5lLCBhdXRob3IsIHJhdGluZywgaWQsIG9uUmF0ZUNvbW1lbnQsIHRva2VuLCBkYXRhIH0pIHtcclxuICBjb25zdCBmdWxsTmFtZSA9IGAke2F1dGhvcj8uZmlyc3ROYW1lfSAke2F1dGhvcj8ubGFzdE5hbWV9YDtcclxuICBjb25zdCBoYW5kbGVSYXRlQ29tbWVudCA9IChyYXRlKSA9PiB7XHJcbiAgICBvblJhdGVDb21tZW50KGlkLCByYXRlKTtcclxuICB9O1xyXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBwcm9maWxlVXJsID0gYXV0aG9yICE9PSBudWxsICYmIGF1dGhvciAhPT0gdW5kZWZpbmVkID8gYCR7YXV0aG9yLnByb2ZpbGVQaG90bz8uc3JjfWAgOiBudWxsXHJcbiAgY29uc3QgW2NvbW1lbnQsIHNldENvbW1lbnRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtjb21tZW50cywgc2V0Q29tbWVudHNdID0gdXNlU3RhdGUoZGF0YSk7XHJcbiAgY29uc3QgZmlsZUlucHV0UmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVFbnRlcktleSA9IChlKSA9PiB7XHJcbiAgICBpZiAoZS5uYXRpdmVFdmVudC5rZXlDb2RlID09PSAxMykge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIG9uQ29tbWVudChcIkNvbW1lbnRcIiwgaWQsIGNvbW1lbnQpO1xyXG4gICAgICBzZXRDb21tZW50KCcnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VUZXh0ID0gKGUpID0+IHtcclxuICAgIHNldENvbW1lbnQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQ29tbWVudCA9IGFzeW5jICh0eXBlLCBwb3N0SWQsIHRleHQsIGZpbGVzPXVuZGVmaW5lZCkgPT4ge1xyXG4gICAgXHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgdXJsID0gJyc7XHJcbiAgICAgIGxldCBkYXRhRm9yUmVxdWVzdDtcclxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGE7XHJcblxyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2NvbW1lbnRlZCcsIHBvc3RJZClcclxuXHJcbiAgICAgIGlmICh0eXBlID09PSAnUGhvdG8nKSB7XHJcbiAgICAgICAgdXJsID0gJy9waG90b3MvY29tbWVudCc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1ZpZGVvQ2xpcCcpIHtcclxuICAgICAgICB1cmwgPSAnL3ZpZGVvLWNsaXBzL2NvbW1lbnQnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdJdGVtJykge1xyXG4gICAgICAgIHVybCA9ICcvaXRlbXMvY29tbWVudCc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1Bvc3QnKSB7XHJcbiAgICAgICAgdXJsID0gJy9wb3N0cy9jb21tZW50JztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnQ29tbWVudCcpIHtcclxuICAgICAgICB1cmwgPSAnL2NvbW1lbnRzL2NvbW1lbnQnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdTaGFyZScpIHtcclxuICAgICAgICB1cmwgPSAnL3NoYXJlcy9jb21tZW50JztcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaWYgKHRleHQubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd0ZXh0JywgdGV4dClcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaWYgKGZpbGVzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBpZiAoZmlsZXNbaV0udHlwZS5zcGxpdCgnLycpWzBdID09PSAnaW1hZ2UnKSB7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBmaWxlc1tpXSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3ZpZGVvJywgZmlsZXNbaV0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgZGF0YUZvclJlcXVlc3QgPSBmb3JtRGF0YVxyXG5cclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsLFxyXG4gICAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiB0b2tlbiB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG5cclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgbGV0IGluaXRpYWxDb21tZW50cyA9IGNvbW1lbnRzO1xyXG4gICAgICAgIGluaXRpYWxDb21tZW50cy5wdXNoKGRhdGEuY29tbWVudHNbMF0pXHJcbiAgICAgICAgc2V0Q29tbWVudHMoaW5pdGlhbENvbW1lbnRzKVxyXG4gICAgICAgICAgXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGF3YWl0IHJlcXVlc3Q7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25UYXJnZXRDbGljayA9ICgpID0+IHtcclxuICAgIGZpbGVJbnB1dFJlZi5jdXJyZW50LmNsaWNrKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkZpbGVJbnB1dENoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgZmlsZUZyb21JbnB1dCA9IGV2ZW50LnRhcmdldC5maWxlcztcclxuICAgIG9uQ29tbWVudCgnQ29tbWVudCcsIGlkLCAnJywgZmlsZUZyb21JbnB1dCk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuY29tbWVudF9pdGVtLCB7XHJcbiAgICAgICAgW3N0eWxlcy5ub3RfbWluZV06ICFtaW5lLFxyXG4gICAgICB9KX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9PlxyXG4gICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgIHNpemU9ezUwfVxyXG4gICAgICAgICAgdXJsPXtwcm9maWxlVXJsfVxyXG4gICAgICAgICAgYm9yZGVyU2l6ZT17Mn1cclxuICAgICAgICAgIHRleHQ9e2F1dGhvcj8udXNlcm5hbWV9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8UmF0aW5nU2xpZGVcclxuICAgICAgICAgIGRlZmF1bHRSYXRlPXtyYXRpbmd9XHJcbiAgICAgICAgICB3aXRob3V0VGV4dFxyXG4gICAgICAgICAgZGFya1xyXG4gICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVSYXRlQ29tbWVudH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIHsvKiA8RHJhZ2FibGVSYXRpbmcgcmF0aW5nPXtyYXRpbmd9IGhhbmRsZVJhdGVDb21tZW50PXtoYW5kbGVSYXRlQ29tbWVudH0gLz4gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lc3NhZ2VfY29udGFpbmVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lc3NhZ2V9PlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYXV0aG9yfT57ZnVsbE5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxUcmltVGV4dCBsaW1pdD17MTEwfT57bWVzc2FnZX08L1RyaW1UZXh0PlxyXG4gICAgICAgICAgPC9wPiBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlcGx5fT5cclxuICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6IDE1LCB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0gb25DbGljaz17KCkgPT4gc2V0VmlzaWJsZSh0cnVlKX0+cmVwbHk8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge2NvbW1lbnRzICYmIGNvbW1lbnRzLm1hcChjb21tZW50ID0+IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZXNzYWdlfSBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMmVtJywgbWFyZ2luQm90dG9tOiAxMCB9fT5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5hdXRob3J9PntmdWxsTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICA8VHJpbVRleHQgbGltaXQ9ezExMH0+e2NvbW1lbnQudGV4dH08L1RyaW1UZXh0PlxyXG4gICAgICAgICAgICAgIDwvcD4gXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIHt2aXNpYmxlP1xyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tbWVudF9ib3h9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9PlxyXG4gICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgc2l6ZT17MzV9XHJcbiAgICAgICAgICAgICAgdXJsPXtwcm9maWxlVXJsfVxyXG4gICAgICAgICAgICAgIHRleHQ9e2F1dGhvcj8udXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgYm9yZGVyU2l6ZT17Mn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0+XHJcbiAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtjb21tZW50fVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBkbyB5b3UgbWVhbj9cIlxyXG4gICAgICAgICAgICAgIHJvd3M9ezJ9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVRleHR9XHJcbiAgICAgICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVFbnRlcktleX1cclxuICAgICAgICAgICAgICBzdHlsZT17eyAgYm9yZGVyUmFkaXVzOiAzNiwgaGVpZ2h0OiAyNSwgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JywgY29sb3I6ICdibGFjayd9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ2ltYWdlJ119IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnRfZmlsZX0gc3R5bGU9e3ttYXJnaW5MZWZ0OiAtMjgsIGZvbnRTaXplOiAxNX19IG9uQ2xpY2s9e29uVGFyZ2V0Q2xpY2t9Lz5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkZpbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgcmVmPXtmaWxlSW5wdXRSZWZ9XHJcbiAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj46bnVsbH1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZWRpYUNvbW1lbnRzfT5cclxuICAgICAgICAgIHtjb21tZW50cyAmJiBjb21tZW50cy5tYXAoaXRlbSA9PiAoXHJcbiAgICAgICAgICAgIGl0ZW0uaW1hZ2UgJiYgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2l0ZW0/LmltYWdlPy5zcmN9YH0gY2xhc3NOYW1lPXtzdHlsZXMubWVkaWFDb21tZW50c19pbWFnZX0vPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lZGlhQ29tbWVudHN9PlxyXG4gICAgICAgICAge2NvbW1lbnRzICYmIGNvbW1lbnRzLm1hcChpdGVtID0+IChcclxuICAgICAgICAgICAgaXRlbT8udmlkZW8gJiYgPFBsYXllclxyXG4gICAgICAgICAgICBwbGF5c0lubGluZVxyXG4gICAgICAgICAgICBwb3N0ZXI9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2l0ZW0/LnZpZGVvPy50aHVtYm5haWw/LnNyY31gfVxyXG4gICAgICAgICAgICBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2l0ZW0/LnZpZGVvPy5zcmN9YH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubWVkaWFDb21tZW50c192aWRlb31cclxuICAgICAgICAgICAgd2lkdGg9ezgwfVxyXG4gICAgICAgICAgICBoZWlnaHQ9ezcwfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBDb21tZW50cyh7XHJcbiAgZGF0YSA9IFtdLFxyXG4gIG1vZGFsTW9kZSxcclxuICBpZCxcclxuICB0eXBlLFxyXG4gIGF1dGgsXHJcbiAgb25VcGRhdGVUaW1lbGluZSxcclxuICB0b2tlbixcclxuICBhY3RpdmVQb3N0SWRcclxufSkge1xyXG4gIGNvbnN0IFtjb21tZW50VGV4dCwgc2V0Q29tbWVudFRleHRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtjb21tZW50TGlzdCwgc2V0Q29tbWVudExpc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShhY3RpdmVQb3N0SWQgPT09IGlkKTtcclxuICBjb25zdCBmaWxlSW5wdXRSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUVudGVyS2V5ID0gKGUpID0+IHtcclxuICAgIGlmIChlLm5hdGl2ZUV2ZW50LmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIG9uQ29tbWVudCh0eXBlLCBpZCwgY29tbWVudFRleHQpO1xyXG5cclxuICAgICAgc2V0Q29tbWVudFRleHQoJycpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVRleHQgPSAoZSkgPT4ge1xyXG4gICAgc2V0Q29tbWVudFRleHQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQ29tbWVudCA9IGFzeW5jICh0eXBlLCBwb3N0SWQsIHRleHQsIGZpbGVzPXVuZGVmaW5lZCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IHVybCA9ICcnO1xyXG4gICAgICBsZXQgZGF0YUZvclJlcXVlc3Q7XHJcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhO1xyXG5cclxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdjb21tZW50ZWQnLCBwb3N0SWQpXHJcblxyXG4gICAgICBpZiAodHlwZSA9PT0gJ1Bob3RvJykge1xyXG4gICAgICAgIHVybCA9ICcvcGhvdG9zL2NvbW1lbnQnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdWaWRlb0NsaXAnKSB7XHJcbiAgICAgICAgdXJsID0gJy92aWRlby1jbGlwcy9jb21tZW50JztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnSXRlbScpIHtcclxuICAgICAgICB1cmwgPSAnL2l0ZW1zL2NvbW1lbnQnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdQb3N0Jykge1xyXG4gICAgICAgIHVybCA9ICcvcG9zdHMvY29tbWVudCc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0NvbW1lbnQnKSB7XHJcbiAgICAgICAgdXJsID0gJy9jb21tZW50cy9jb21tZW50JztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnU2hhcmUnKSB7XHJcbiAgICAgICAgdXJsID0gJy9zaGFyZXMvY29tbWVudCc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChmaWxlcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgaWYgKGZpbGVzW2ldLnR5cGUuc3BsaXQoJy8nKVswXSA9PT0gJ2ltYWdlJykge1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgZmlsZXNbaV0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd2aWRlbycsIGZpbGVzW2ldKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGlmICh0ZXh0Lmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndGV4dCcsIHRleHQpXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGRhdGFGb3JSZXF1ZXN0ID0gZm9ybURhdGFcclxuXHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybCxcclxuICAgICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogdG9rZW4gfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuXHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgIG9uVXBkYXRlVGltZWxpbmUoZGF0YSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGF3YWl0IHJlcXVlc3Q7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25SYXRlQ29tbWVudCA9IGFzeW5jIChjb21tZW50SWQsIHJhdGUpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybDogJy9jb21tZW50cy9yYXRlJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBpZDogY29tbWVudElkLFxyXG4gICAgICAgICAgcmF0aW5nOiByYXRlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IHRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuXHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgIC8vIG9uVXBkYXRlVGltZWxpbmUoKTtcclxuICAgICAgICAvLyBtZXNzYWdlLnN1Y2Nlc3MoJ0V2YWx1YXRlIHN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBvblRhcmdldENsaWNrID0gKCkgPT4ge1xyXG4gICAgZmlsZUlucHV0UmVmLmN1cnJlbnQuY2xpY2soKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uRmlsZUlucHV0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBmaWxlRnJvbUlucHV0ID0gZXZlbnQudGFyZ2V0LmZpbGVzO1xyXG4gICAgb25Db21tZW50KHR5cGUsIGlkLCAnJywgZmlsZUZyb21JbnB1dCk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuY29tbWVudHMsIHtcclxuICAgICAgICBbc3R5bGVzLm1vZGFsX21vZGVdOiBtb2RhbE1vZGUsXHJcbiAgICAgIH0pfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnRzX3dyYXBwZXJ9PlxyXG4gICAgICAgIHsoYWN0aXZlUG9zdElkID09PSBpZCAmJiBtb2RhbE1vZGU/IGRhdGEgOiBkYXRhLnNsaWNlKDAsIDIpKS5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgPENvbW1lbnRJdGVtXHJcbiAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgIG1pbmU9e2l0ZW0ubWluZX1cclxuICAgICAgICAgICAgbWVzc2FnZT17aXRlbS50ZXh0fVxyXG4gICAgICAgICAgICBhdXRob3I9e2l0ZW0uYWNjb3VudH1cclxuICAgICAgICAgICAgcmF0aW5nPXtpdGVtLnJhdGluZ31cclxuICAgICAgICAgICAgb25SYXRlQ29tbWVudD17b25SYXRlQ29tbWVudH1cclxuICAgICAgICAgICAgdG9rZW49e3Rva2VufVxyXG4gICAgICAgICAgICBkYXRhPXtpdGVtLmNvbW1lbnRzP2l0ZW0uY29tbWVudHM6W119XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tbWVudF9ib3h9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyfT5cclxuICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgc2l6ZT17NDV9XHJcbiAgICAgICAgICAgIHVybD17YXV0aC51c2VyPy5wcm9maWxlUGhvdG8/LnNyY31cclxuICAgICAgICAgICAgdGV4dD17YXV0aC51c2VyPy51c2VybmFtZX1cclxuICAgICAgICAgICAgYm9yZGVyU2l6ZT17Mn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0+XHJcbiAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgdmFsdWU9e2NvbW1lbnRUZXh0fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgZG8geW91IG1lYW4/XCJcclxuICAgICAgICAgICAgcm93cz17Mn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVRleHR9XHJcbiAgICAgICAgICAgIG9uS2V5RG93bj17aGFuZGxlRW50ZXJLZXl9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7ICBib3JkZXJSYWRpdXM6IDM2LCBoZWlnaHQ6IDQ1LCBwYWRkaW5nTGVmdDogMzAsIHBhZGRpbmdUb3A6IDEwLCBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLCBjb2xvcjogJ2JsYWNrJ319XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICA8L1RleHRBcmVhPlxyXG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdpbWFnZSddfSBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50X2ZpbGV9IG9uQ2xpY2s9e29uVGFyZ2V0Q2xpY2t9Lz5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uRmlsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgcmVmPXtmaWxlSW5wdXRSZWZ9XHJcbiAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW5cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVkaWFDb21tZW50c30+XHJcbiAgICAgICAgICB7ZGF0YS5tYXAoaXRlbSA9PiAoXHJcbiAgICAgICAgICAgIGl0ZW0uaW1hZ2UgJiYgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2l0ZW0/LmltYWdlPy5zcmN9YH0gY2xhc3NOYW1lPXtzdHlsZXMubWVkaWFDb21tZW50c19pbWFnZX0vPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lZGlhQ29tbWVudHN9PlxyXG4gICAgICAgICAge2RhdGEubWFwKGl0ZW0gPT4gKFxyXG4gICAgICAgICAgICBpdGVtPy52aWRlbyAmJiA8UGxheWVyXHJcbiAgICAgICAgICAgIHBsYXlzSW5saW5lXHJcbiAgICAgICAgICAgIHBvc3Rlcj17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aXRlbT8udmlkZW8/LnRodW1ibmFpbD8uc3JjfWB9XHJcbiAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aXRlbT8udmlkZW8/LnNyY31gfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tZWRpYUNvbW1lbnRzX3ZpZGVvfVxyXG4gICAgICAgICAgICB3aWR0aD17ODB9XHJcbiAgICAgICAgICAgIGhlaWdodD17NzB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0b3JlKSA9PiAoe1xyXG4gIHRva2VuOiBzdG9yZS5hdXRoLnRva2VuLFxyXG4gIGF1dGg6IHN0b3JlLmF1dGgsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKENvbW1lbnRzKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==