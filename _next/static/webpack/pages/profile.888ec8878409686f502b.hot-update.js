webpackHotUpdate_N_E("pages/profile",{

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
        console.log(comments);
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
      lineNumber: 112,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }
  }, __jsx(_common_Avatar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: 50,
    url: profileUrl,
    text: author === null || author === void 0 ? void 0 : author.username,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
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
      lineNumber: 123,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.message_container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.message,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.author,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 11
    }
  }, fullName), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 11
    }
  }, __jsx(components_common_TrimText__WEBPACK_IMPORTED_MODULE_4__["default"], {
    limit: 110,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }
  }, message))), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.reply,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
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
      lineNumber: 140,
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
      lineNumber: 143,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.author,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 15
    }
  }, fullName), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 15
    }
  }, __jsx(components_common_TrimText__WEBPACK_IMPORTED_MODULE_4__["default"], {
    limit: 110,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 17
    }
  }, comment.text)))), visible ? __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.comment_box,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
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
      lineNumber: 153,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.input,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
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
      lineNumber: 161,
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
      lineNumber: 169,
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
      lineNumber: 170,
      columnNumber: 13
    }
  }))) : null, __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mediaComments,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
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
        lineNumber: 180,
        columnNumber: 27
      }
    });
  })), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mediaComments,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
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
        lineNumber: 185,
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
          rated: commentId,
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
      lineNumber: 324,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.comments_wrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
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
    data: item.comments,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.comment_box,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
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
      lineNumber: 347,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.input,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
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
      lineNumber: 355,
      columnNumber: 11
    }
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
    icon: ['far', 'image'],
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.comment_file,
    onClick: onTargetClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
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
      lineNumber: 365,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mediaComments,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
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
        lineNumber: 375,
        columnNumber: 27
      }
    });
  })), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mediaComments,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
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
        lineNumber: 380,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aW1lbGluZS9Db21tZW50cy5qcyJdLCJuYW1lcyI6WyJUZXh0QXJlYSIsIklucHV0IiwiQ29tbWVudEl0ZW0iLCJtZXNzYWdlIiwibWluZSIsImF1dGhvciIsInJhdGluZyIsImlkIiwib25SYXRlQ29tbWVudCIsInRva2VuIiwiZGF0YSIsImZ1bGxOYW1lIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJoYW5kbGVSYXRlQ29tbWVudCIsInJhdGUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInVzZVN0YXRlIiwicHJvZmlsZVVybCIsInVuZGVmaW5lZCIsInByb2ZpbGVQaG90byIsInNyYyIsImNvbW1lbnQiLCJzZXRDb21tZW50IiwiY29tbWVudHMiLCJzZXRDb21tZW50cyIsImZpbGVJbnB1dFJlZiIsInVzZVJlZiIsImhhbmRsZUVudGVyS2V5IiwiZSIsIm5hdGl2ZUV2ZW50Iiwia2V5Q29kZSIsInByZXZlbnREZWZhdWx0Iiwib25Db21tZW50IiwiaGFuZGxlQ2hhbmdlVGV4dCIsInRhcmdldCIsInZhbHVlIiwidHlwZSIsInBvc3RJZCIsInRleHQiLCJmaWxlcyIsInVybCIsImRhdGFGb3JSZXF1ZXN0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImxlbmd0aCIsImkiLCJzcGxpdCIsInJlcXVlc3QiLCJBUEkiLCJtZXRob2QiLCJoZWFkZXJzIiwic3RhdHVzIiwiaW5pdGlhbENvbW1lbnRzIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIkVycm9yIiwib25UYXJnZXRDbGljayIsImN1cnJlbnQiLCJjbGljayIsIm9uRmlsZUlucHV0Q2hhbmdlIiwiZXZlbnQiLCJmaWxlRnJvbUlucHV0IiwiY2xhc3NuYW1lcyIsInN0eWxlcyIsImNvbW1lbnRfaXRlbSIsIm5vdF9taW5lIiwiYXZhdGFyIiwidXNlcm5hbWUiLCJtZXNzYWdlX2NvbnRhaW5lciIsInJlcGx5IiwiZm9udFNpemUiLCJ0ZXh0RGVjb3JhdGlvbiIsInRleHRBbGlnbiIsIm1hcCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5Cb3R0b20iLCJjb21tZW50X2JveCIsImlucHV0IiwiYm9yZGVyUmFkaXVzIiwiaGVpZ2h0IiwiYmFja2dyb3VuZCIsImNvbG9yIiwiY29tbWVudF9maWxlIiwibWVkaWFDb21tZW50cyIsIml0ZW0iLCJpbWFnZSIsIm1lZGlhQ29tbWVudHNfaW1hZ2UiLCJ2aWRlbyIsInRodW1ibmFpbCIsIm1lZGlhQ29tbWVudHNfdmlkZW8iLCJDb21tZW50cyIsIm1vZGFsTW9kZSIsImF1dGgiLCJvblVwZGF0ZVRpbWVsaW5lIiwiYWN0aXZlUG9zdElkIiwiY29tbWVudFRleHQiLCJzZXRDb21tZW50VGV4dCIsImNvbW1lbnRMaXN0Iiwic2V0Q29tbWVudExpc3QiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJjb21tZW50SWQiLCJyYXRlZCIsIm1vZGFsX21vZGUiLCJjb21tZW50c193cmFwcGVyIiwic2xpY2UiLCJhY2NvdW50IiwidXNlciIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1RvcCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0b3JlIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNO0FBQUVBO0FBQUYsSUFBZUMsMENBQXJCOztBQUVBLFNBQVNDLFdBQVQsQ0FBcUI7QUFBRUMsU0FBRjtBQUFXQyxNQUFYO0FBQWlCQyxRQUFqQjtBQUF5QkMsUUFBekI7QUFBaUNDLElBQWpDO0FBQXFDQyxlQUFyQztBQUFvREMsT0FBcEQ7QUFBMkRDO0FBQTNELENBQXJCLEVBQXdGO0FBQUE7O0FBQUE7O0FBQ3RGLFFBQU1DLFFBQVEsYUFBTU4sTUFBTixhQUFNQSxNQUFOLHVCQUFNQSxNQUFNLENBQUVPLFNBQWQsY0FBMkJQLE1BQTNCLGFB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SyxhQUFTLEVBQUV2QixrRUFBTSxDQUFDb0IsYUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLOUUsSUFBSSxDQUFDb0UsR0FBTCxDQUFTVyxJQUFJO0FBQUE7O0FBQUEsV0FDWixDQUFBQSxJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLFlBQUFBLElBQUksQ0FBRUcsS0FBTixLQUFlLE1BQUMseUVBQUQ7QUFDZixpQkFBVyxNQURJO0FBRWYsWUFBTSw2Q0FBc0NILElBQXRDLGFBQXNDQSxJQUF0Qyx1Q0FBc0NBLElBQUksQ0FBRUcsS0FBNUMsMEVBQXNDLGFBQWFDLFNBQW5ELDBEQUFzQyxzQkFBd0J2RSxHQUE5RCxDQUZTO0FBR2YsU0FBRyw2Q0FBc0NtRSxJQUF0QyxhQUFzQ0EsSUFBdEMsdUNBQXNDQSxJQUFJLENBQUVHLEtBQTVDLGlEQUFzQyxhQUFhdEUsR0FBbkQsQ0FIWTtBQUlmLGVBQVMsRUFBRThDLGtFQUFNLENBQUMwQixtQkFKSDtBQUtmLFdBQUssRUFBRSxFQUxRO0FBTWYsWUFBTSxFQUFFLEVBTk87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURIO0FBQUEsR0FBYixDQURMLENBdERGLENBREY7QUFxRUQ7O0lBL0xRQyxROztNQUFBQSxROztBQWlNVCxNQUFNb0IsZUFBZSxHQUFJQyxLQUFELEtBQVk7QUFDbEMzRyxPQUFLLEVBQUUyRyxLQUFLLENBQUNuQixJQUFOLENBQVd4RixLQURnQjtBQUVsQ3dGLE1BQUksRUFBRW1CLEtBQUssQ0FBQ25CO0FBRnNCLENBQVosQ0FBeEI7O0FBS2VvQiwwSEFBTyxDQUFDRixlQUFELENBQVAsQ0FBeUJwQixRQUF6QixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuODg4ZWM4ODc4NDA5Njg2ZjUwMmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBQb3BvdmVyIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvY29tbWVudC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUcmltVGV4dCBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9UcmltVGV4dCc7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnLi4vY29tbW9uL0F2YXRhcic7XHJcbmltcG9ydCBBUEkgZnJvbSAnY29uZmlncy9BUEknO1xyXG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBEcmFnYWJsZVJhdGluZyBmcm9tICcuLi9mb3Jtcy9yYXRpbmcvRHJhZ2FibGVSYXRpbmcnO1xyXG5pbXBvcnQgUmF0aW5nU2xpZGUgZnJvbSAnLi4vZm9ybXMvcmF0aW5nL1JhdGluZ1NsaWRlJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IFBsYXllciBmcm9tICd2aWRlby1yZWFjdC9saWIvY29tcG9uZW50cy9QbGF5ZXInO1xyXG5cclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcblxyXG5mdW5jdGlvbiBDb21tZW50SXRlbSh7IG1lc3NhZ2UsIG1pbmUsIGF1dGhvciwgcmF0aW5nLCBpZCwgb25SYXRlQ29tbWVudCwgdG9rZW4sIGRhdGEgfSkge1xyXG4gIGNvbnN0IGZ1bGxOYW1lID0gYCR7YXV0aG9yPy5maXJzdE5hbWV9ICR7YXV0aG9yPy5sYXN0TmFtZX1gO1xyXG4gIGNvbnN0IGhhbmRsZVJhdGVDb21tZW50ID0gKHJhdGUpID0+IHtcclxuICAgIG9uUmF0ZUNvbW1lbnQoaWQsIHJhdGUpO1xyXG4gIH07XHJcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHByb2ZpbGVVcmwgPSBhdXRob3IgIT09IG51bGwgJiYgYXV0aG9yICE9PSB1bmRlZmluZWQgPyBgJHthdXRob3IucHJvZmlsZVBob3RvPy5zcmN9YCA6IG51bGxcclxuICBjb25zdCBbY29tbWVudCwgc2V0Q29tbWVudF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2NvbW1lbnRzLCBzZXRDb21tZW50c10gPSB1c2VTdGF0ZShkYXRhKTtcclxuICBjb25zdCBmaWxlSW5wdXRSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUVudGVyS2V5ID0gKGUpID0+IHtcclxuICAgIGlmIChlLm5hdGl2ZUV2ZW50LmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgb25Db21tZW50KFwiQ29tbWVudFwiLCBpZCwgY29tbWVudCk7XHJcbiAgICAgIHNldENvbW1lbnQoJycpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVRleHQgPSAoZSkgPT4ge1xyXG4gICAgc2V0Q29tbWVudChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25Db21tZW50ID0gYXN5bmMgKHR5cGUsIHBvc3RJZCwgdGV4dCwgZmlsZXM9dW5kZWZpbmVkKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgdXJsID0gJyc7XHJcbiAgICAgIGxldCBkYXRhRm9yUmVxdWVzdDtcclxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGE7XHJcblxyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2NvbW1lbnRlZCcsIHBvc3RJZClcclxuXHJcbiAgICAgIGlmICh0eXBlID09PSAnUGhvdG8nKSB7XHJcbiAgICAgICAgdXJsID0gJy9waG90b3MvY29tbWVudCc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1ZpZGVvQ2xpcCcpIHtcclxuICAgICAgICB1cmwgPSAnL3ZpZGVvLWNsaXBzL2NvbW1lbnQnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdJdGVtJykge1xyXG4gICAgICAgIHVybCA9ICcvaXRlbXMvY29tbWVudCc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1Bvc3QnKSB7XHJcbiAgICAgICAgdXJsID0gJy9wb3N0cy9jb21tZW50JztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnQ29tbWVudCcpIHtcclxuICAgICAgICB1cmwgPSAnL2NvbW1lbnRzL2NvbW1lbnQnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdTaGFyZScpIHtcclxuICAgICAgICB1cmwgPSAnL3NoYXJlcy9jb21tZW50JztcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaWYgKHRleHQubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd0ZXh0JywgdGV4dClcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaWYgKGZpbGVzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBpZiAoZmlsZXNbaV0udHlwZS5zcGxpdCgnLycpWzBdID09PSAnaW1hZ2UnKSB7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBmaWxlc1tpXSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3ZpZGVvJywgZmlsZXNbaV0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgZGF0YUZvclJlcXVlc3QgPSBmb3JtRGF0YVxyXG5cclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsLFxyXG4gICAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiB0b2tlbiB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG5cclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgICBsZXQgaW5pdGlhbENvbW1lbnRzID0gY29tbWVudHM7XHJcbiAgICAgICAgICBpbml0aWFsQ29tbWVudHMucHVzaChkYXRhLmNvbW1lbnRzWzBdKVxyXG4gICAgICAgICAgc2V0Q29tbWVudHMoaW5pdGlhbENvbW1lbnRzKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coY29tbWVudHMpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBhd2FpdCByZXF1ZXN0O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uVGFyZ2V0Q2xpY2sgPSAoKSA9PiB7XHJcbiAgICBmaWxlSW5wdXRSZWYuY3VycmVudC5jbGljaygpO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25GaWxlSW5wdXRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IGZpbGVGcm9tSW5wdXQgPSBldmVudC50YXJnZXQuZmlsZXM7XHJcbiAgICBvbkNvbW1lbnQoJ0NvbW1lbnQnLCBpZCwgJycsIGZpbGVGcm9tSW5wdXQpO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmNvbW1lbnRfaXRlbSwge1xyXG4gICAgICAgIFtzdHlsZXMubm90X21pbmVdOiAhbWluZSxcclxuICAgICAgfSl9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyfT5cclxuICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICBzaXplPXs1MH1cclxuICAgICAgICAgIHVybD17cHJvZmlsZVVybH1cclxuICAgICAgICAgIHRleHQ9e2F1dGhvcj8udXNlcm5hbWV9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8UmF0aW5nU2xpZGVcclxuICAgICAgICAgIGRlZmF1bHRSYXRlPXtyYXRpbmd9XHJcbiAgICAgICAgICB3aXRob3V0VGV4dFxyXG4gICAgICAgICAgZGFya1xyXG4gICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVSYXRlQ29tbWVudH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIHsvKiA8RHJhZ2FibGVSYXRpbmcgcmF0aW5nPXtyYXRpbmd9IGhhbmRsZVJhdGVDb21tZW50PXtoYW5kbGVSYXRlQ29tbWVudH0gLz4gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lc3NhZ2VfY29udGFpbmVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lc3NhZ2V9PlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYXV0aG9yfT57ZnVsbE5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxUcmltVGV4dCBsaW1pdD17MTEwfT57bWVzc2FnZX08L1RyaW1UZXh0PlxyXG4gICAgICAgICAgPC9wPiBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlcGx5fT5cclxuICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6IDE1LCB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0gb25DbGljaz17KCkgPT4gc2V0VmlzaWJsZSh0cnVlKX0+cmVwbHk8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge2NvbW1lbnRzICYmIGNvbW1lbnRzLm1hcChjb21tZW50ID0+IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZXNzYWdlfSBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMmVtJywgbWFyZ2luQm90dG9tOiAxMCB9fT5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5hdXRob3J9PntmdWxsTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICA8VHJpbVRleHQgbGltaXQ9ezExMH0+e2NvbW1lbnQudGV4dH08L1RyaW1UZXh0PlxyXG4gICAgICAgICAgICAgIDwvcD4gXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIHt2aXNpYmxlP1xyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tbWVudF9ib3h9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9PlxyXG4gICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgc2l6ZT17MzV9XHJcbiAgICAgICAgICAgICAgdXJsPXtwcm9maWxlVXJsfVxyXG4gICAgICAgICAgICAgIHRleHQ9e2F1dGhvcj8udXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgYm9yZGVyU2l6ZT17Mn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0+XHJcbiAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtjb21tZW50fVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBkbyB5b3UgbWVhbj9cIlxyXG4gICAgICAgICAgICAgIHJvd3M9ezJ9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVRleHR9XHJcbiAgICAgICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVFbnRlcktleX1cclxuICAgICAgICAgICAgICBzdHlsZT17eyAgYm9yZGVyUmFkaXVzOiAzNiwgaGVpZ2h0OiAyNSwgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JywgY29sb3I6ICdibGFjayd9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ2ltYWdlJ119IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnRfZmlsZX0gc3R5bGU9e3ttYXJnaW5MZWZ0OiAtMjgsIGZvbnRTaXplOiAxNX19IG9uQ2xpY2s9e29uVGFyZ2V0Q2xpY2t9Lz5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkZpbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgcmVmPXtmaWxlSW5wdXRSZWZ9XHJcbiAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj46bnVsbH1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZWRpYUNvbW1lbnRzfT5cclxuICAgICAgICAgIHtjb21tZW50cyAmJiBjb21tZW50cy5tYXAoaXRlbSA9PiAoXHJcbiAgICAgICAgICAgIGl0ZW0uaW1hZ2UgJiYgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2l0ZW0/LmltYWdlPy5zcmN9YH0gY2xhc3NOYW1lPXtzdHlsZXMubWVkaWFDb21tZW50c19pbWFnZX0vPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lZGlhQ29tbWVudHN9PlxyXG4gICAgICAgICAge2NvbW1lbnRzICYmIGNvbW1lbnRzLm1hcChpdGVtID0+IChcclxuICAgICAgICAgICAgaXRlbT8udmlkZW8gJiYgPFBsYXllclxyXG4gICAgICAgICAgICBwbGF5c0lubGluZVxyXG4gICAgICAgICAgICBwb3N0ZXI9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2l0ZW0/LnZpZGVvPy50aHVtYm5haWw/LnNyY31gfVxyXG4gICAgICAgICAgICBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2l0ZW0/LnZpZGVvPy5zcmN9YH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubWVkaWFDb21tZW50c192aWRlb31cclxuICAgICAgICAgICAgd2lkdGg9ezgwfVxyXG4gICAgICAgICAgICBoZWlnaHQ9ezcwfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBDb21tZW50cyh7XHJcbiAgZGF0YSA9IFtdLFxyXG4gIG1vZGFsTW9kZSxcclxuICBpZCxcclxuICB0eXBlLFxyXG4gIGF1dGgsXHJcbiAgb25VcGRhdGVUaW1lbGluZSxcclxuICB0b2tlbixcclxuICBhY3RpdmVQb3N0SWRcclxufSkge1xyXG4gIGNvbnN0IFtjb21tZW50VGV4dCwgc2V0Q29tbWVudFRleHRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtjb21tZW50TGlzdCwgc2V0Q29tbWVudExpc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShhY3RpdmVQb3N0SWQgPT09IGlkKTtcclxuICBjb25zdCBmaWxlSW5wdXRSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUVudGVyS2V5ID0gKGUpID0+IHtcclxuICAgIGlmIChlLm5hdGl2ZUV2ZW50LmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIG9uQ29tbWVudCh0eXBlLCBpZCwgY29tbWVudFRleHQpO1xyXG5cclxuICAgICAgc2V0Q29tbWVudFRleHQoJycpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVRleHQgPSAoZSkgPT4ge1xyXG4gICAgc2V0Q29tbWVudFRleHQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQ29tbWVudCA9IGFzeW5jICh0eXBlLCBwb3N0SWQsIHRleHQsIGZpbGVzPXVuZGVmaW5lZCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IHVybCA9ICcnO1xyXG4gICAgICBsZXQgZGF0YUZvclJlcXVlc3Q7XHJcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhO1xyXG5cclxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdjb21tZW50ZWQnLCBwb3N0SWQpXHJcblxyXG4gICAgICBpZiAodHlwZSA9PT0gJ1Bob3RvJykge1xyXG4gICAgICAgIHVybCA9ICcvcGhvdG9zL2NvbW1lbnQnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdWaWRlb0NsaXAnKSB7XHJcbiAgICAgICAgdXJsID0gJy92aWRlby1jbGlwcy9jb21tZW50JztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnSXRlbScpIHtcclxuICAgICAgICB1cmwgPSAnL2l0ZW1zL2NvbW1lbnQnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdQb3N0Jykge1xyXG4gICAgICAgIHVybCA9ICcvcG9zdHMvY29tbWVudCc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0NvbW1lbnQnKSB7XHJcbiAgICAgICAgdXJsID0gJy9jb21tZW50cy9jb21tZW50JztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnU2hhcmUnKSB7XHJcbiAgICAgICAgdXJsID0gJy9zaGFyZXMvY29tbWVudCc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChmaWxlcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgaWYgKGZpbGVzW2ldLnR5cGUuc3BsaXQoJy8nKVswXSA9PT0gJ2ltYWdlJykge1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgZmlsZXNbaV0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd2aWRlbycsIGZpbGVzW2ldKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGlmICh0ZXh0Lmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndGV4dCcsIHRleHQpXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGRhdGFGb3JSZXF1ZXN0ID0gZm9ybURhdGFcclxuXHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybCxcclxuICAgICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogdG9rZW4gfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuXHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgIG9uVXBkYXRlVGltZWxpbmUoZGF0YSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGF3YWl0IHJlcXVlc3Q7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25SYXRlQ29tbWVudCA9IGFzeW5jIChjb21tZW50SWQsIHJhdGUpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybDogJy9jb21tZW50cy9yYXRlJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICByYXRlZDogY29tbWVudElkLFxyXG4gICAgICAgICAgcmF0aW5nOiByYXRlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IHRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuXHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgIC8vIG9uVXBkYXRlVGltZWxpbmUoKTtcclxuICAgICAgICAvLyBtZXNzYWdlLnN1Y2Nlc3MoJ0V2YWx1YXRlIHN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBvblRhcmdldENsaWNrID0gKCkgPT4ge1xyXG4gICAgZmlsZUlucHV0UmVmLmN1cnJlbnQuY2xpY2soKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uRmlsZUlucHV0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBmaWxlRnJvbUlucHV0ID0gZXZlbnQudGFyZ2V0LmZpbGVzO1xyXG4gICAgb25Db21tZW50KHR5cGUsIGlkLCAnJywgZmlsZUZyb21JbnB1dCk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuY29tbWVudHMsIHtcclxuICAgICAgICBbc3R5bGVzLm1vZGFsX21vZGVdOiBtb2RhbE1vZGUsXHJcbiAgICAgIH0pfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnRzX3dyYXBwZXJ9PlxyXG4gICAgICAgIHsoYWN0aXZlUG9zdElkID09PSBpZCAmJiBtb2RhbE1vZGU/IGRhdGEgOiBkYXRhLnNsaWNlKDAsIDIpKS5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgIDxDb21tZW50SXRlbVxyXG4gICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgIGlkPXtpdGVtLmlkfVxyXG4gICAgICAgICAgICBtaW5lPXtpdGVtLm1pbmV9XHJcbiAgICAgICAgICAgIG1lc3NhZ2U9e2l0ZW0udGV4dH1cclxuICAgICAgICAgICAgYXV0aG9yPXtpdGVtLmFjY291bnR9XHJcbiAgICAgICAgICAgIHJhdGluZz17aXRlbS5yYXRpbmd9XHJcbiAgICAgICAgICAgIG9uUmF0ZUNvbW1lbnQ9e29uUmF0ZUNvbW1lbnR9XHJcbiAgICAgICAgICAgIHRva2VuPXt0b2tlbn1cclxuICAgICAgICAgICAgZGF0YT17aXRlbS5jb21tZW50c31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50X2JveH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9PlxyXG4gICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICBzaXplPXs0NX1cclxuICAgICAgICAgICAgdXJsPXthdXRoLnVzZXI/LnByb2ZpbGVQaG90bz8uc3JjfVxyXG4gICAgICAgICAgICB0ZXh0PXthdXRoLnVzZXI/LnVzZXJuYW1lfVxyXG4gICAgICAgICAgICBib3JkZXJTaXplPXsyfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fT5cclxuICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICB2YWx1ZT17Y29tbWVudFRleHR9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBkbyB5b3UgbWVhbj9cIlxyXG4gICAgICAgICAgICByb3dzPXsyfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlVGV4dH1cclxuICAgICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVFbnRlcktleX1cclxuICAgICAgICAgICAgc3R5bGU9e3sgIGJvcmRlclJhZGl1czogMzYsIGhlaWdodDogNDUsIHBhZGRpbmdMZWZ0OiAzMCwgcGFkZGluZ1RvcDogMTAsIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsIGNvbG9yOiAnYmxhY2snfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgIDwvVGV4dEFyZWE+XHJcbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ2ltYWdlJ119IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnRfZmlsZX0gb25DbGljaz17b25UYXJnZXRDbGlja30vPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBvbkNoYW5nZT17b25GaWxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICByZWY9e2ZpbGVJbnB1dFJlZn1cclxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlblwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZWRpYUNvbW1lbnRzfT5cclxuICAgICAgICAgIHtkYXRhLm1hcChpdGVtID0+IChcclxuICAgICAgICAgICAgaXRlbS5pbWFnZSAmJiA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aXRlbT8uaW1hZ2U/LnNyY31gfSBjbGFzc05hbWU9e3N0eWxlcy5tZWRpYUNvbW1lbnRzX2ltYWdlfS8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVkaWFDb21tZW50c30+XHJcbiAgICAgICAgICB7ZGF0YS5tYXAoaXRlbSA9PiAoXHJcbiAgICAgICAgICAgIGl0ZW0/LnZpZGVvICYmIDxQbGF5ZXJcclxuICAgICAgICAgICAgcGxheXNJbmxpbmVcclxuICAgICAgICAgICAgcG9zdGVyPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpdGVtPy52aWRlbz8udGh1bWJuYWlsPy5zcmN9YH1cclxuICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpdGVtPy52aWRlbz8uc3JjfWB9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1lZGlhQ29tbWVudHNfdmlkZW99XHJcbiAgICAgICAgICAgIHdpZHRoPXs4MH1cclxuICAgICAgICAgICAgaGVpZ2h0PXs3MH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RvcmUpID0+ICh7XHJcbiAgdG9rZW46IHN0b3JlLmF1dGgudG9rZW4sXHJcbiAgYXV0aDogc3RvcmUuYXV0aCxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQ29tbWVudHMpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9