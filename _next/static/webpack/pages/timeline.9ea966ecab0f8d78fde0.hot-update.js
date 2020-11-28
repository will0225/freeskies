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
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(data);
  const fileInputRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setComments(data);
  });

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
        let initialComments = comments; // initialComments.push(data.comments[0]);

        comments.push(data.comments[0]);
        setComments(comments);
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
      lineNumber: 117,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
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
      lineNumber: 123,
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
      lineNumber: 129,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.message_container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.message,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.author,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 11
    }
  }, fullName), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 11
    }
  }, __jsx(components_common_TrimText__WEBPACK_IMPORTED_MODULE_4__["default"], {
    limit: 110,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 13
    }
  }, message))), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.reply,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
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
      lineNumber: 146,
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
      lineNumber: 149,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.author,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 15
    }
  }, fullName), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 15
    }
  }, __jsx(components_common_TrimText__WEBPACK_IMPORTED_MODULE_4__["default"], {
    limit: 110,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 17
    }
  }, comment.text)))), visible ? __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.comment_box,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
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
      lineNumber: 159,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.input,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
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
      lineNumber: 167,
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
      lineNumber: 175,
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
      lineNumber: 176,
      columnNumber: 13
    }
  }))) : null, __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mediaComments,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
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
        lineNumber: 186,
        columnNumber: 27
      }
    });
  })), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mediaComments,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
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
        lineNumber: 191,
        columnNumber: 28
      }
    });
  }))));
}

_s(CommentItem, "IWsPGywaEkBFQM0FsURlfVw31u4=");

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
      lineNumber: 330,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.comments_wrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
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
      lineNumber: 337,
      columnNumber: 10
    }
  }))), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.comment_box,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
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
      lineNumber: 354,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.input,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
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
      lineNumber: 362,
      columnNumber: 11
    }
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
    icon: ['far', 'image'],
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.comment_file,
    onClick: onTargetClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
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
      lineNumber: 372,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mediaComments,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
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
        lineNumber: 382,
        columnNumber: 27
      }
    });
  })), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mediaComments,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385,
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
        lineNumber: 387,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aW1lbGluZS9Db21tZW50cy5qcyJdLCJuYW1lcyI6WyJUZXh0QXJlYSIsIklucHV0IiwiQ29tbWVudEl0ZW0iLCJtZXNzYWdlIiwibWluZSIsImF1dGhvciIsInJhdGluZyIsImlkIiwib25SYXRlQ29tbWVudCIsInRva2VuIiwiZGF0YSIsIm9uVXBkYXRlVGltZWxpbmUiLCJmdWxsTmFtZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiaGFuZGxlUmF0ZUNvbW1lbnQiLCJyYXRlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ1c2VTdGF0ZSIsInByb2ZpbGVVcmwiLCJ1bmRlZmluZWQiLCJwcm9maWxlUGhvdG8iLCJzcmMiLCJjb21tZW50Iiwic2V0Q29tbWVudCIsImNvbW1lbnRzIiwic2V0Q29tbWVudHMiLCJmaWxlSW5wdXRSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJoYW5kbGVFbnRlcktleSIsImUiLCJuYXRpdmVFdmVudCIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsIm9uQ29tbWVudCIsImhhbmRsZUNoYW5nZVRleHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInR5cGUiLCJwb3N0SWQiLCJ0ZXh0IiwiZmlsZXMiLCJ1cmwiLCJkYXRhRm9yUmVxdWVzdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJsZW5ndGgiLCJpIiwic3BsaXQiLCJyZXF1ZXN0IiwiQVBJIiwibWV0aG9kIiwiaGVhZGVycyIsInN0YXR1cyIsImluaXRpYWxDb21tZW50cyIsInB1c2giLCJlcnJvciIsIkVycm9yIiwiY29uc29sZSIsImxvZyIsIm9uVGFyZ2V0Q2xpY2siLCJjdXJyZW50IiwiY2xpY2siLCJvbkZpbGVJbnB1dENoYW5nZSIsImV2ZW50IiwiZmlsZUZyb21JbnB1dCIsImNsYXNzbmFtZXMiLCJzdHlsZXMiLCJjb21tZW50X2l0ZW0iLCJub3RfbWluZSIsImF2YXRhciIsInVzZXJuYW1lIiwibWVzc2FnZV9jb250YWluZXIiLCJyZXBseSIsImZvbnRTaXplIiwidGV4dERlY29yYXRpb24iLCJ0ZXh0QWxpZ24iLCJtYXAiLCJtYXJnaW5MZWZ0IiwibWFyZ2luQm90dG9tIiwiY29tbWVudF9ib3giLCJpbnB1dCIsImJvcmRlclJhZGl1cyIsImhlaWdodCIsImJhY2tncm91bmQiLCJjb2xvciIsImNvbW1lbnRfZmlsZSIsIm1lZGlhQ29tbWVudHMiLCJpdGVtIiwiaW1hZ2UiLCJtZWRpYUNvbW1lbnRzX2ltYWdlIiwidmlkZW8iLCJ0aHVtYm5haWwiLCJtZWRpYUNvbW1lbnRzX3ZpZGVvIiwiQ29tbWVudHMiLCJtb2RhbE1vZGUiLCJhdXRoIiwiYWN0aXZlUG9zdElkIiwiY29tbWVudFRleHQiLCJzZXRDb21tZW50VGV4dCIsImNvbW1lbnRMaXN0Iiwic2V0Q29tbWVudExpc3QiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJjb21tZW50SWQiLCJtb2RhbF9tb2RlIiwiY29tbWVudHNfd3JhcHBlciIsInNsaWNlIiwiYWNjb3VudCIsInVzZXIiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdUb3AiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdG9yZSIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTTtBQUFFQTtBQUFGLElBQWVDLDBDQUFyQjs7QUFFQSxTQUFTQyxXQUFULENBQXFCO0FBQUVDLFNBQUY7QUFBV0MsTUFBWDtBQUFpQkMsUUFBakI7QUFBeUJDLFFBQXpCO0FBQWlDQyxJQUFqQztBQUFxQ0MsZUFBckM7QUFBb0RDLE9BQXBEO0FBQTJEQyxNQUEzRDtBQUFpRUM7QUFBakUsQ0FBckIsRUFBMEc7QUFBQTs7QUFBQTs7QUFDeEcsUUFBTUMsUUFBUSxhQUFNUCxNQUFOLGFBQU1BLE1BQU4sdUJBQU1BLE1BQU0sQ0FB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IiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3RpbWVsaW5lLjllYTk2NmVjYWIwZjhkNzhmZGUwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgUG9wb3ZlciB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL2NvbW1lbnQubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVHJpbVRleHQgZnJvbSAnY29tcG9uZW50cy9jb21tb24vVHJpbVRleHQnO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJy4uL2NvbW1vbi9BdmF0YXInO1xyXG5pbXBvcnQgQVBJIGZyb20gJ2NvbmZpZ3MvQVBJJztcclxuaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgRHJhZ2FibGVSYXRpbmcgZnJvbSAnLi4vZm9ybXMvcmF0aW5nL0RyYWdhYmxlUmF0aW5nJztcclxuaW1wb3J0IFJhdGluZ1NsaWRlIGZyb20gJy4uL2Zvcm1zL3JhdGluZy9SYXRpbmdTbGlkZSc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAndmlkZW8tcmVhY3QvbGliL2NvbXBvbmVudHMvUGxheWVyJztcclxuaW1wb3J0IHsgZmkgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUnO1xyXG5cclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcblxyXG5mdW5jdGlvbiBDb21tZW50SXRlbSh7IG1lc3NhZ2UsIG1pbmUsIGF1dGhvciwgcmF0aW5nLCBpZCwgb25SYXRlQ29tbWVudCwgdG9rZW4sIGRhdGEsIG9uVXBkYXRlVGltZWxpbmUgfSkge1xyXG4gIGNvbnN0IGZ1bGxOYW1lID0gYCR7YXV0aG9yPy5maXJzdE5hbWV9ICR7YXV0aG9yPy5sYXN0TmFtZX1gO1xyXG4gIGNvbnN0IGhhbmRsZVJhdGVDb21tZW50ID0gKHJhdGUpID0+IHtcclxuICAgIG9uUmF0ZUNvbW1lbnQoaWQsIHJhdGUpO1xyXG4gIH07XHJcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHByb2ZpbGVVcmwgPSBhdXRob3IgIT09IG51bGwgJiYgYXV0aG9yICE9PSB1bmRlZmluZWQgPyBgJHthdXRob3IucHJvZmlsZVBob3RvPy5zcmN9YCA6IG51bGxcclxuICBjb25zdCBbY29tbWVudCwgc2V0Q29tbWVudF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2NvbW1lbnRzLCBzZXRDb21tZW50c10gPSB1c2VTdGF0ZShkYXRhKTtcclxuICBjb25zdCBmaWxlSW5wdXRSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldENvbW1lbnRzKGRhdGEpO1xyXG4gIH0pXHJcbiAgY29uc3QgaGFuZGxlRW50ZXJLZXkgPSAoZSkgPT4ge1xyXG4gICAgaWYgKGUubmF0aXZlRXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBvbkNvbW1lbnQoXCJDb21tZW50XCIsIGlkLCBjb21tZW50KTtcclxuICAgICAgc2V0Q29tbWVudCgnJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlVGV4dCA9IChlKSA9PiB7XHJcbiAgICBzZXRDb21tZW50KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkNvbW1lbnQgPSBhc3luYyAodHlwZSwgcG9zdElkLCB0ZXh0LCBmaWxlcz11bmRlZmluZWQpID0+IHtcclxuICAgXHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgdXJsID0gJyc7XHJcbiAgICAgIGxldCBkYXRhRm9yUmVxdWVzdDtcclxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGE7XHJcblxyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2NvbW1lbnRlZCcsIHBvc3RJZClcclxuXHJcbiAgICAgIGlmICh0eXBlID09PSAnUGhvdG8nKSB7XHJcbiAgICAgICAgdXJsID0gJy9waG90b3MvY29tbWVudCc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1ZpZGVvQ2xpcCcpIHtcclxuICAgICAgICB1cmwgPSAnL3ZpZGVvLWNsaXBzL2NvbW1lbnQnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdJdGVtJykge1xyXG4gICAgICAgIHVybCA9ICcvaXRlbXMvY29tbWVudCc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1Bvc3QnKSB7XHJcbiAgICAgICAgdXJsID0gJy9wb3N0cy9jb21tZW50JztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnQ29tbWVudCcpIHtcclxuICAgICAgICB1cmwgPSAnL2NvbW1lbnRzL2NvbW1lbnQnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdTaGFyZScpIHtcclxuICAgICAgICB1cmwgPSAnL3NoYXJlcy9jb21tZW50JztcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaWYgKHRleHQubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd0ZXh0JywgdGV4dClcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaWYgKGZpbGVzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBpZiAoZmlsZXNbaV0udHlwZS5zcGxpdCgnLycpWzBdID09PSAnaW1hZ2UnKSB7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBmaWxlc1tpXSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3ZpZGVvJywgZmlsZXNbaV0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgZGF0YUZvclJlcXVlc3QgPSBmb3JtRGF0YVxyXG5cclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsLFxyXG4gICAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiB0b2tlbiB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG5cclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgbGV0IGluaXRpYWxDb21tZW50cyA9IGNvbW1lbnRzO1xyXG4gICAgICAgIC8vIGluaXRpYWxDb21tZW50cy5wdXNoKGRhdGEuY29tbWVudHNbMF0pO1xyXG4gICAgICAgIGNvbW1lbnRzLnB1c2goZGF0YS5jb21tZW50c1swXSk7XHJcbiAgICAgICAgc2V0Q29tbWVudHMoY29tbWVudHMpO1xyXG4gICAgICAgICAgXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGF3YWl0IHJlcXVlc3Q7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25UYXJnZXRDbGljayA9ICgpID0+IHtcclxuICAgIGZpbGVJbnB1dFJlZi5jdXJyZW50LmNsaWNrKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkZpbGVJbnB1dENoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgZmlsZUZyb21JbnB1dCA9IGV2ZW50LnRhcmdldC5maWxlcztcclxuICAgIG9uQ29tbWVudCgnQ29tbWVudCcsIGlkLCAnJywgZmlsZUZyb21JbnB1dCk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuY29tbWVudF9pdGVtLCB7XHJcbiAgICAgICAgW3N0eWxlcy5ub3RfbWluZV06ICFtaW5lLFxyXG4gICAgICB9KX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9PlxyXG4gICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgIHNpemU9ezUwfVxyXG4gICAgICAgICAgdXJsPXtwcm9maWxlVXJsfVxyXG4gICAgICAgICAgYm9yZGVyU2l6ZT17Mn1cclxuICAgICAgICAgIHRleHQ9e2F1dGhvcj8udXNlcm5hbWV9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8UmF0aW5nU2xpZGVcclxuICAgICAgICAgIGRlZmF1bHRSYXRlPXtyYXRpbmd9XHJcbiAgICAgICAgICB3aXRob3V0VGV4dFxyXG4gICAgICAgICAgZGFya1xyXG4gICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVSYXRlQ29tbWVudH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIHsvKiA8RHJhZ2FibGVSYXRpbmcgcmF0aW5nPXtyYXRpbmd9IGhhbmRsZVJhdGVDb21tZW50PXtoYW5kbGVSYXRlQ29tbWVudH0gLz4gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lc3NhZ2VfY29udGFpbmVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lc3NhZ2V9PlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYXV0aG9yfT57ZnVsbE5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxUcmltVGV4dCBsaW1pdD17MTEwfT57bWVzc2FnZX08L1RyaW1UZXh0PlxyXG4gICAgICAgICAgPC9wPiBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlcGx5fT5cclxuICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6IDE1LCB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0gb25DbGljaz17KCkgPT4gc2V0VmlzaWJsZSh0cnVlKX0+cmVwbHk8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge2NvbW1lbnRzICYmIGNvbW1lbnRzLm1hcChjb21tZW50ID0+IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZXNzYWdlfSBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMmVtJywgbWFyZ2luQm90dG9tOiAxMCB9fT5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5hdXRob3J9PntmdWxsTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICA8VHJpbVRleHQgbGltaXQ9ezExMH0+e2NvbW1lbnQudGV4dH08L1RyaW1UZXh0PlxyXG4gICAgICAgICAgICAgIDwvcD4gXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIHt2aXNpYmxlP1xyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tbWVudF9ib3h9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9PlxyXG4gICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgc2l6ZT17MzV9XHJcbiAgICAgICAgICAgICAgdXJsPXtwcm9maWxlVXJsfVxyXG4gICAgICAgICAgICAgIHRleHQ9e2F1dGhvcj8udXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgYm9yZGVyU2l6ZT17Mn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0+XHJcbiAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtjb21tZW50fVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBkbyB5b3UgbWVhbj9cIlxyXG4gICAgICAgICAgICAgIHJvd3M9ezJ9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVRleHR9XHJcbiAgICAgICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVFbnRlcktleX1cclxuICAgICAgICAgICAgICBzdHlsZT17eyAgYm9yZGVyUmFkaXVzOiAzNiwgaGVpZ2h0OiAyNSwgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JywgY29sb3I6ICdibGFjayd9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ2ltYWdlJ119IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnRfZmlsZX0gc3R5bGU9e3ttYXJnaW5MZWZ0OiAtMjgsIGZvbnRTaXplOiAxNX19IG9uQ2xpY2s9e29uVGFyZ2V0Q2xpY2t9Lz5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uRmlsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgIHJlZj17ZmlsZUlucHV0UmVmfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW5cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PjpudWxsfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lZGlhQ29tbWVudHN9PlxyXG4gICAgICAgICAge2NvbW1lbnRzICYmIGNvbW1lbnRzLm1hcChpdGVtID0+IChcclxuICAgICAgICAgICAgaXRlbS5pbWFnZSAmJiA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aXRlbT8uaW1hZ2U/LnNyY31gfSBjbGFzc05hbWU9e3N0eWxlcy5tZWRpYUNvbW1lbnRzX2ltYWdlfS8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVkaWFDb21tZW50c30+XHJcbiAgICAgICAgICB7Y29tbWVudHMgJiYgY29tbWVudHMubWFwKGl0ZW0gPT4gKFxyXG4gICAgICAgICAgICBpdGVtPy52aWRlbyAmJiA8UGxheWVyXHJcbiAgICAgICAgICAgIHBsYXlzSW5saW5lXHJcbiAgICAgICAgICAgIHBvc3Rlcj17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aXRlbT8udmlkZW8/LnRodW1ibmFpbD8uc3JjfWB9XHJcbiAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aXRlbT8udmlkZW8/LnNyY31gfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tZWRpYUNvbW1lbnRzX3ZpZGVvfVxyXG4gICAgICAgICAgICB3aWR0aD17ODB9XHJcbiAgICAgICAgICAgIGhlaWdodD17NzB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICBcclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENvbW1lbnRzKHtcclxuICBkYXRhID0gW10sXHJcbiAgbW9kYWxNb2RlLFxyXG4gIGlkLFxyXG4gIHR5cGUsXHJcbiAgYXV0aCxcclxuICBvblVwZGF0ZVRpbWVsaW5lLFxyXG4gIHRva2VuLFxyXG4gIGFjdGl2ZVBvc3RJZFxyXG59KSB7XHJcbiAgY29uc3QgW2NvbW1lbnRUZXh0LCBzZXRDb21tZW50VGV4dF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2NvbW1lbnRMaXN0LCBzZXRDb21tZW50TGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGFjdGl2ZVBvc3RJZCA9PT0gaWQpO1xyXG4gIGNvbnN0IGZpbGVJbnB1dFJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRW50ZXJLZXkgPSAoZSkgPT4ge1xyXG4gICAgaWYgKGUubmF0aXZlRXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgb25Db21tZW50KHR5cGUsIGlkLCBjb21tZW50VGV4dCk7XHJcblxyXG4gICAgICBzZXRDb21tZW50VGV4dCgnJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlVGV4dCA9IChlKSA9PiB7XHJcbiAgICBzZXRDb21tZW50VGV4dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25Db21tZW50ID0gYXN5bmMgKHR5cGUsIHBvc3RJZCwgdGV4dCwgZmlsZXM9dW5kZWZpbmVkKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgdXJsID0gJyc7XHJcbiAgICAgIGxldCBkYXRhRm9yUmVxdWVzdDtcclxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGE7XHJcblxyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2NvbW1lbnRlZCcsIHBvc3RJZClcclxuXHJcbiAgICAgIGlmICh0eXBlID09PSAnUGhvdG8nKSB7XHJcbiAgICAgICAgdXJsID0gJy9waG90b3MvY29tbWVudCc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1ZpZGVvQ2xpcCcpIHtcclxuICAgICAgICB1cmwgPSAnL3ZpZGVvLWNsaXBzL2NvbW1lbnQnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdJdGVtJykge1xyXG4gICAgICAgIHVybCA9ICcvaXRlbXMvY29tbWVudCc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1Bvc3QnKSB7XHJcbiAgICAgICAgdXJsID0gJy9wb3N0cy9jb21tZW50JztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnQ29tbWVudCcpIHtcclxuICAgICAgICB1cmwgPSAnL2NvbW1lbnRzL2NvbW1lbnQnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdTaGFyZScpIHtcclxuICAgICAgICB1cmwgPSAnL3NoYXJlcy9jb21tZW50JztcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGZpbGVzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBpZiAoZmlsZXNbaV0udHlwZS5zcGxpdCgnLycpWzBdID09PSAnaW1hZ2UnKSB7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBmaWxlc1tpXSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3ZpZGVvJywgZmlsZXNbaV0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaWYgKHRleHQubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd0ZXh0JywgdGV4dClcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgZGF0YUZvclJlcXVlc3QgPSBmb3JtRGF0YVxyXG5cclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsLFxyXG4gICAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiB0b2tlbiB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG5cclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgb25VcGRhdGVUaW1lbGluZShkYXRhKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gYXdhaXQgcmVxdWVzdDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBvblJhdGVDb21tZW50ID0gYXN5bmMgKGNvbW1lbnRJZCwgcmF0ZSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsOiAnL2NvbW1lbnRzL3JhdGUnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGlkOiBjb21tZW50SWQsXHJcbiAgICAgICAgICByYXRpbmc6IHJhdGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogdG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG5cclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgLy8gb25VcGRhdGVUaW1lbGluZSgpO1xyXG4gICAgICAgIC8vIG1lc3NhZ2Uuc3VjY2VzcygnRXZhbHVhdGUgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uVGFyZ2V0Q2xpY2sgPSAoKSA9PiB7XHJcbiAgICBmaWxlSW5wdXRSZWYuY3VycmVudC5jbGljaygpO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25GaWxlSW5wdXRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IGZpbGVGcm9tSW5wdXQgPSBldmVudC50YXJnZXQuZmlsZXM7XHJcbiAgICBvbkNvbW1lbnQodHlwZSwgaWQsICcnLCBmaWxlRnJvbUlucHV0KTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5jb21tZW50cywge1xyXG4gICAgICAgIFtzdHlsZXMubW9kYWxfbW9kZV06IG1vZGFsTW9kZSxcclxuICAgICAgfSl9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tbWVudHNfd3JhcHBlcn0+XHJcbiAgICAgICAgeyhhY3RpdmVQb3N0SWQgPT09IGlkICYmIG1vZGFsTW9kZT8gZGF0YSA6IGRhdGEuc2xpY2UoMCwgMikpLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICA8Q29tbWVudEl0ZW1cclxuICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgICBpZD17aXRlbS5pZH1cclxuICAgICAgICAgICAgbWluZT17aXRlbS5taW5lfVxyXG4gICAgICAgICAgICBtZXNzYWdlPXtpdGVtLnRleHR9XHJcbiAgICAgICAgICAgIGF1dGhvcj17aXRlbS5hY2NvdW50fVxyXG4gICAgICAgICAgICByYXRpbmc9e2l0ZW0ucmF0aW5nfVxyXG4gICAgICAgICAgICBvblJhdGVDb21tZW50PXtvblJhdGVDb21tZW50fVxyXG4gICAgICAgICAgICB0b2tlbj17dG9rZW59XHJcbiAgICAgICAgICAgIGRhdGE9e2l0ZW0uY29tbWVudHM/aXRlbS5jb21tZW50czpbXX1cclxuICAgICAgICAgICAgb25VcGRhdGVUaW1lbGluZT17b25VcGRhdGVUaW1lbGluZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50X2JveH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9PlxyXG4gICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICBzaXplPXs0NX1cclxuICAgICAgICAgICAgdXJsPXthdXRoLnVzZXI/LnByb2ZpbGVQaG90bz8uc3JjfVxyXG4gICAgICAgICAgICB0ZXh0PXthdXRoLnVzZXI/LnVzZXJuYW1lfVxyXG4gICAgICAgICAgICBib3JkZXJTaXplPXsyfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fT5cclxuICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICB2YWx1ZT17Y29tbWVudFRleHR9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBkbyB5b3UgbWVhbj9cIlxyXG4gICAgICAgICAgICByb3dzPXsyfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlVGV4dH1cclxuICAgICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVFbnRlcktleX1cclxuICAgICAgICAgICAgc3R5bGU9e3sgIGJvcmRlclJhZGl1czogMzYsIGhlaWdodDogNDUsIHBhZGRpbmdMZWZ0OiAzMCwgcGFkZGluZ1RvcDogMTAsIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsIGNvbG9yOiAnYmxhY2snfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgIDwvVGV4dEFyZWE+XHJcbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ2ltYWdlJ119IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnRfZmlsZX0gb25DbGljaz17b25UYXJnZXRDbGlja30vPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBvbkNoYW5nZT17b25GaWxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICByZWY9e2ZpbGVJbnB1dFJlZn1cclxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlblwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZWRpYUNvbW1lbnRzfT5cclxuICAgICAgICAgIHtkYXRhLm1hcChpdGVtID0+IChcclxuICAgICAgICAgICAgaXRlbS5pbWFnZSAmJiA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aXRlbT8uaW1hZ2U/LnNyY31gfSBjbGFzc05hbWU9e3N0eWxlcy5tZWRpYUNvbW1lbnRzX2ltYWdlfS8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVkaWFDb21tZW50c30+XHJcbiAgICAgICAgICB7ZGF0YS5tYXAoaXRlbSA9PiAoXHJcbiAgICAgICAgICAgIGl0ZW0/LnZpZGVvICYmIDxQbGF5ZXJcclxuICAgICAgICAgICAgcGxheXNJbmxpbmVcclxuICAgICAgICAgICAgcG9zdGVyPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpdGVtPy52aWRlbz8udGh1bWJuYWlsPy5zcmN9YH1cclxuICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpdGVtPy52aWRlbz8uc3JjfWB9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1lZGlhQ29tbWVudHNfdmlkZW99XHJcbiAgICAgICAgICAgIHdpZHRoPXs4MH1cclxuICAgICAgICAgICAgaGVpZ2h0PXs3MH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RvcmUpID0+ICh7XHJcbiAgdG9rZW46IHN0b3JlLmF1dGgudG9rZW4sXHJcbiAgYXV0aDogc3RvcmUuYXV0aCxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQ29tbWVudHMpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9