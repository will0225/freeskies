webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/timeline/Comments.js":
/*!*****************************************!*\
  !*** ./components/timeline/Comments.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/comment.module.scss */ "./components/timeline/styles/comment.module.scss");
/* harmony import */ var _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components_common_TrimText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/common/TrimText */ "./components/common/TrimText.js");
/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/Avatar */ "./components/common/Avatar.js");
/* harmony import */ var configs_API__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! configs/API */ "./configs/API.js");
/* harmony import */ var _forms_rating_DragableRating__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../forms/rating/DragableRating */ "./components/forms/rating/DragableRating.js");
/* harmony import */ var _forms_rating_RatingSlide__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../forms/rating/RatingSlide */ "./components/forms/rating/RatingSlide.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var video_react_lib_components_Player__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! video-react/lib/components/Player */ "./node_modules/video-react/lib/components/Player.js");
/* harmony import */ var video_react_lib_components_Player__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(video_react_lib_components_Player__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! date-fns/locale */ "./node_modules/date-fns/esm/locale/index.js");




var _jsxFileName = "D:\\Freeskies-development-\\components\\timeline\\Comments.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;














var TextArea = antd__WEBPACK_IMPORTED_MODULE_4__["Input"].TextArea;

function CommentItem(_ref) {
  _s();

  var _author$profilePhoto,
      _this = this,
      _auth$user,
      _auth$user$profilePho,
      _auth$user2,
      _auth$user3;

  var message = _ref.message,
      mine = _ref.mine,
      author = _ref.author,
      rating = _ref.rating,
      id = _ref.id,
      onRateComment = _ref.onRateComment,
      token = _ref.token,
      data = _ref.data,
      onUpdateTimeline = _ref.onUpdateTimeline,
      auth = _ref.auth,
      modal = _ref.modal;
  var fullName = "".concat(author === null || author === void 0 ? void 0 : author.firstName, " ").concat(author === null || author === void 0 ? void 0 : author.lastName);

  var handleRateComment = function handleRateComment(rate) {
    onRateComment(id, rate);
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      visible = _useState[0],
      setVisible = _useState[1];

  var profileUrl = author !== null && author !== undefined ? "".concat((_author$profilePhoto = author.profilePhoto) === null || _author$profilePhoto === void 0 ? void 0 : _author$profilePhoto.src) : null;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      comment = _useState2[0],
      setComment = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      comments = _useState3[0],
      setComments = _useState3[1];

  var fileInputRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setComments(data);
  }, [comments]);

  var handleEnterKey = function handleEnterKey(e) {
    if (e.nativeEvent.keyCode === 13) {
      e.preventDefault();
      onComment("Comment", id, comment);
      setComment('');
    }
  };

  var handleChangeText = function handleChangeText(e) {
    setComment(e.target.value);
  };

  var onComment = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(type, postId, text) {
      var files,
          url,
          dataForRequest,
          formData,
          i,
          request,
          _data,
          status,
          initialComments,
          _args = arguments;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              files = _args.length > 3 && _args[3] !== undefined ? _args[3] : undefined;
              _context.prev = 1;
              url = '';
              formData = new FormData();
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
              } else if (type === 'MarketplaceItemForSale') {
                url = '/marketplace/items-for-sale/comment';
              } else if (type === 'MarketplaceItemToBuy') {
                url = '/marketplace/items-to-buy/comment';
              }

              if (text.length !== 0) {
                formData.append('text', text);
              }

              if (files !== undefined) {
                for (i = 0; i < files.length; i++) {
                  if (files[i].type.split('/')[0] === 'image') {
                    formData.append('image', files[i]);
                  } else {
                    formData.append('video', files[i]);
                  }
                }
              }

              dataForRequest = formData;
              _context.next = 11;
              return Object(configs_API__WEBPACK_IMPORTED_MODULE_9__["default"])({
                method: 'post',
                url: url,
                data: formData,
                headers: {
                  'x-token': token
                }
              });

            case 11:
              request = _context.sent;
              _data = request.data, status = request.status;

              if (!(status === 201)) {
                _context.next = 20;
                break;
              }

              initialComments = comments;
              initialComments.push(_data.comments[0]);
              setComments(initialComments);
              console.log(comments);
              _context.next = 22;
              break;

            case 20:
              message.error((_data === null || _data === void 0 ? void 0 : _data.message) || 'Something wrong');
              throw new Error();

            case 22:
              _context.next = 24;
              return request;

            case 24:
              return _context.abrupt("return", _context.sent);

            case 27:
              _context.prev = 27;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);

            case 30:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 27]]);
    }));

    return function onComment(_x, _x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();

  var onTargetClick = function onTargetClick() {
    fileInputRef.current.click();
  };

  var onFileInputChange = function onFileInputChange(event) {
    var fileFromInput = event.target.files;
    onComment('Comment', id, '', fileFromInput);
  };

  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.comment_item, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.not_mine, !mine)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }
  }, __jsx(_common_Avatar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    size: 45,
    url: profileUrl,
    borderSize: 2,
    text: author === null || author === void 0 ? void 0 : author.username,
    username: author === null || author === void 0 ? void 0 : author.username,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  }), __jsx(_forms_rating_RatingSlide__WEBPACK_IMPORTED_MODULE_11__["default"], {
    defaultRate: rating,
    withoutText: true,
    dark: true,
    size: "small",
    onChange: handleRateComment,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.message_container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.message,
    style: {
      color: modal ? 'black' : null
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.author,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 11
    }
  }, fullName), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 11
    }
  }, __jsx(components_common_TrimText__WEBPACK_IMPORTED_MODULE_7__["default"], {
    limit: 110,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 13
    }
  }, message))), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.reply,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 9
    }
  }, __jsx("p", {
    style: {
      fontSize: 15,
      textDecoration: 'underline',
      textAlign: 'center'
    },
    onClick: function onClick() {
      return setVisible(true);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 13
    }
  }, "reply")), comments && comments.map(function (comment) {
    return __jsx("div", {
      key: comment.id,
      className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.comment_item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.avatar,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 13
      }
    }, __jsx(_common_Avatar__WEBPACK_IMPORTED_MODULE_8__["default"], {
      size: 35,
      url: profileUrl,
      borderSize: 2,
      text: author === null || author === void 0 ? void 0 : author.username,
      username: author === null || author === void 0 ? void 0 : author.username,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 15
      }
    })), __jsx("div", {
      className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.message,
      style: {
        marginLeft: '2em',
        marginBottom: 10
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 13
      }
    }, __jsx("span", {
      className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.author,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 15
      }
    }, fullName), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 15
      }
    }, __jsx(components_common_TrimText__WEBPACK_IMPORTED_MODULE_7__["default"], {
      limit: 110,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 17
      }
    }, comment.text))));
  }), visible ? __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.comment_box,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 11
    }
  }, __jsx(_common_Avatar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    size: 35,
    url: (_auth$user = auth.user) === null || _auth$user === void 0 ? void 0 : (_auth$user$profilePho = _auth$user.profilePhoto) === null || _auth$user$profilePho === void 0 ? void 0 : _auth$user$profilePho.src,
    text: (_auth$user2 = auth.user) === null || _auth$user2 === void 0 ? void 0 : _auth$user2.username,
    username: (_auth$user3 = auth.user) === null || _auth$user3 === void 0 ? void 0 : _auth$user3.username,
    borderSize: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.input,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
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
      lineNumber: 185,
      columnNumber: 13
    }
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeIcon"], {
    icon: ['far', 'image'],
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.comment_file,
    style: {
      marginLeft: -28,
      fontSize: 15
    },
    onClick: onTargetClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
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
      lineNumber: 194,
      columnNumber: 13
    }
  }))) : null, __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.mediaComments,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 7
    }
  }, comments && comments.map(function (item) {
    var _item$image;

    return item.image && __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(item === null || item === void 0 ? void 0 : (_item$image = item.image) === null || _item$image === void 0 ? void 0 : _item$image.src),
      className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.mediaComments_image,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 27
      }
    });
  })), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.mediaComments,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 7
    }
  }, comments && comments.map(function (item) {
    var _item$video, _item$video$thumbnail, _item$video2;

    return (item === null || item === void 0 ? void 0 : item.video) && __jsx(video_react_lib_components_Player__WEBPACK_IMPORTED_MODULE_14___default.a, {
      playsInline: true,
      poster: "https://www.freeskies.com/static/".concat(item === null || item === void 0 ? void 0 : (_item$video = item.video) === null || _item$video === void 0 ? void 0 : (_item$video$thumbnail = _item$video.thumbnail) === null || _item$video$thumbnail === void 0 ? void 0 : _item$video$thumbnail.src),
      src: "https://www.freeskies.com/static/".concat(item === null || item === void 0 ? void 0 : (_item$video2 = item.video) === null || _item$video2 === void 0 ? void 0 : _item$video2.src),
      className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.mediaComments_video,
      width: 80,
      height: 70,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 28
      }
    });
  }))));
}

_s(CommentItem, "bb/IvIPAdq8gZhjRey9HjRB+CQM=");

_c = CommentItem;

function Comments(_ref3) {
  _s2();

  var _this2 = this,
      _auth$user4,
      _auth$user4$profilePh,
      _auth$user5,
      _auth$user6;

  var _ref3$data = _ref3.data,
      data = _ref3$data === void 0 ? [] : _ref3$data,
      modalMode = _ref3.modalMode,
      id = _ref3.id,
      type = _ref3.type,
      auth = _ref3.auth,
      onUpdateTimeline = _ref3.onUpdateTimeline,
      token = _ref3.token,
      activePostId = _ref3.activePostId,
      modal = _ref3.modal;

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      commentText = _useState4[0],
      setCommentText = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      commentList = _useState5[0],
      setCommentList = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(activePostId === id),
      active = _useState6[0],
      setActive = _useState6[1];

  var fileInputRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);

  var handleEnterKey = function handleEnterKey(e) {
    if (e.nativeEvent.keyCode === 13) {
      e.preventDefault();
      onComment(type, id, commentText);
      setCommentText('');
    }
  };

  var handleChangeText = function handleChangeText(e) {
    setCommentText(e.target.value);
  };

  var onComment = /*#__PURE__*/function () {
    var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(type, postId, text) {
      var files,
          url,
          dataForRequest,
          formData,
          i,
          request,
          _data2,
          status,
          _args2 = arguments;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              files = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : undefined;
              _context2.prev = 1;
              url = '';
              formData = new FormData();
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
              } else if (type === 'MarketplaceItemForSale') {
                url = '/marketplace/items-for-sale/comment';
              } else if (type === 'MarketplaceItemToBuy') {
                url = '/marketplace/items-to-buy/comment';
              }

              if (files !== undefined) {
                for (i = 0; i < files.length; i++) {
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
              _context2.next = 11;
              return Object(configs_API__WEBPACK_IMPORTED_MODULE_9__["default"])({
                method: 'post',
                url: url,
                data: formData,
                headers: {
                  'x-token': token
                }
              });

            case 11:
              request = _context2.sent;
              _data2 = request.data, status = request.status;

              if (!(status === 201)) {
                _context2.next = 17;
                break;
              }

              onUpdateTimeline(_data2);
              _context2.next = 19;
              break;

            case 17:
              antd__WEBPACK_IMPORTED_MODULE_4__["message"].error((_data2 === null || _data2 === void 0 ? void 0 : _data2.message) || 'Something wrong');
              throw new Error();

            case 19:
              _context2.next = 21;
              return request;

            case 21:
              return _context2.abrupt("return", _context2.sent);

            case 24:
              _context2.prev = 24;
              _context2.t0 = _context2["catch"](1);
              console.log(_context2.t0);

            case 27:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 24]]);
    }));

    return function onComment(_x4, _x5, _x6) {
      return _ref4.apply(this, arguments);
    };
  }();

  var onRateComment = /*#__PURE__*/function () {
    var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(commentId, rate) {
      var request, _data3, status;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return Object(configs_API__WEBPACK_IMPORTED_MODULE_9__["default"])({
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

            case 3:
              request = _context3.sent;
              _data3 = request.data, status = request.status;

              if (!(status === 201)) {
                _context3.next = 8;
                break;
              }

              _context3.next = 9;
              break;

            case 8:
              throw new Error();

            case 9:
              _context3.next = 14;
              break;

            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3["catch"](0);
              console.log(_context3.t0);

            case 14:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 11]]);
    }));

    return function onRateComment(_x7, _x8) {
      return _ref5.apply(this, arguments);
    };
  }();

  var onTargetClick = function onTargetClick() {
    fileInputRef.current.click();
  };

  var onFileInputChange = function onFileInputChange(event) {
    var fileFromInput = event.target.files;
    onComment(type, id, '', fileFromInput);
  };

  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.comments, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.modal_mode, modalMode)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.comments_wrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 7
    }
  }, (activePostId === id && modalMode ? data : data.slice(0, 2)).map(function (item) {
    return __jsx(CommentItem, {
      key: item.id + item.rating,
      id: item.id,
      mine: item.mine,
      message: item.text,
      author: item.account,
      rating: item.rating,
      onRateComment: onRateComment,
      token: token,
      data: item.comments ? item.comments : [],
      onUpdateTimeline: onUpdateTimeline,
      auth: auth,
      modal: true,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 360,
        columnNumber: 10
      }
    });
  })), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.comment_box,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 9
    }
  }, __jsx(_common_Avatar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    size: 45,
    url: (_auth$user4 = auth.user) === null || _auth$user4 === void 0 ? void 0 : (_auth$user4$profilePh = _auth$user4.profilePhoto) === null || _auth$user4$profilePh === void 0 ? void 0 : _auth$user4$profilePh.src,
    text: (_auth$user5 = auth.user) === null || _auth$user5 === void 0 ? void 0 : _auth$user5.username,
    username: (_auth$user6 = auth.user) === null || _auth$user6 === void 0 ? void 0 : _auth$user6.username,
    borderSize: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.input,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
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
      lineNumber: 388,
      columnNumber: 11
    }
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeIcon"], {
    icon: ['far', 'image'],
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.comment_file,
    onClick: onTargetClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
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
      lineNumber: 398,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.mediaComments,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 7
    }
  }, data.map(function (item) {
    var _item$image2;

    return item.image && __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(item === null || item === void 0 ? void 0 : (_item$image2 = item.image) === null || _item$image2 === void 0 ? void 0 : _item$image2.src),
      className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.mediaComments_image,
      key: item.id,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 408,
        columnNumber: 27
      }
    });
  })), __jsx("div", {
    className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.mediaComments,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411,
      columnNumber: 7
    }
  }, data.map(function (item) {
    var _item$video3, _item$video3$thumbnai, _item$video4;

    return (item === null || item === void 0 ? void 0 : item.video) && __jsx(video_react_lib_components_Player__WEBPACK_IMPORTED_MODULE_14___default.a, {
      playsInline: true,
      poster: "https://www.freeskies.com/static/".concat(item === null || item === void 0 ? void 0 : (_item$video3 = item.video) === null || _item$video3 === void 0 ? void 0 : (_item$video3$thumbnai = _item$video3.thumbnail) === null || _item$video3$thumbnai === void 0 ? void 0 : _item$video3$thumbnai.src),
      src: "https://www.freeskies.com/static/".concat(item === null || item === void 0 ? void 0 : (_item$video4 = item.video) === null || _item$video4 === void 0 ? void 0 : _item$video4.src),
      className: _styles_comment_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.mediaComments_video,
      width: 80,
      height: 70,
      key: item.id,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 413,
        columnNumber: 26
      }
    });
  })));
}

_s2(Comments, "ZJCefXSpMGaoLyQuO2MrwbYHLBI=");

_c2 = Comments;

var mapStateToProps = function mapStateToProps(store) {
  return {
    token: store.auth.token,
    auth: store.auth
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])(mapStateToProps)(Comments));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aW1lbGluZS9Db21tZW50cy5qcyJdLCJuYW1lcyI6WyJUZXh0QXJlYSIsIklucHV0IiwiQ29tbWVudEl0ZW0iLCJtZXNzYWdlIiwibWluZSIsImF1dGhvciIsInJhdGluZyIsImlkIiwib25SYXRlQ29tbWVudCIsInRva2VuIiwiZGF0YSIsIm9uVXBkYXRlVGltZWxpbmUiLCJhdXRoIiwibW9kYWwiLCJmdWxsTmFtZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiaGFuZGxlUmF0ZUNvbW1lbnQiLCJyYXRlIiwidXNlU3RhdGUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInByb2ZpbGVVcmwiLCJ1bmRlZmluZWQiLCJwcm9maWxlUGhvdG8iLCJzcmMiLCJjb21tZW50Iiwic2V0Q29tbWVudCIsImNvbW1lbnRzIiwic2V0Q29tbWVudHMiLCJmaWxlSW5wdXRSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJoYW5kbGVFbnRlcktleSIsImUiLCJuYXRpdmVFdmVudCIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsIm9uQ29tbWVudCIsImhhbmRsZUNoYW5nZVRleHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInR5cGUiLCJwb3N0SWQiLCJ0ZXh0IiwiZmlsZXMiLCJ1cmwiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwibGVuZ3RoIiwiaSIsInNwbGl0IiwiZGF0YUZvclJlcXVlc3QiLCJBUEkiLCJtZXRob2QiLCJoZWFkZXJzIiwicmVxdWVzdCIsInN0YXR1cyIsImluaXRpYWxDb21tZW50cyIsInB1c2giLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJFcnJvciIsIm9uVGFyZ2V0Q2xpY2siLCJjdXJyZW50IiwiY2xpY2siLCJvbkZpbGVJbnB1dENoYW5nZSIsImV2ZW50IiwiZmlsZUZyb21JbnB1dCIsImNsYXNzbmFtZXMiLCJzdHlsZXMiLCJjb21tZW50X2l0ZW0iLCJub3RfbWluZSIsImF2YXRhciIsInVzZXJuYW1lIiwibWVzc2FnZV9jb250YWluZXIiLCJjb2xvciIsInJlcGx5IiwiZm9udFNpemUiLCJ0ZXh0RGVjb3JhdGlvbiIsInRleHRBbGlnbiIsIm1hcCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5Cb3R0b20iLCJjb21tZW50X2JveCIsInVzZXIiLCJpbnB1dCIsImJvcmRlclJhZGl1cyIsImhlaWdodCIsImJhY2tncm91bmQiLCJjb21tZW50X2ZpbGUiLCJtZWRpYUNvbW1lbnRzIiwiaXRlbSIsImltYWdlIiwibWVkaWFDb21tZW50c19pbWFnZSIsInZpZGVvIiwidGh1bWJuYWlsIiwibWVkaWFDb21tZW50c192aWRlbyIsIkNvbW1lbnRzIiwibW9kYWxNb2RlIiwiYWN0aXZlUG9zdElkIiwiY29tbWVudFRleHQiLCJzZXRDb21tZW50VGV4dCIsImNvbW1lbnRMaXN0Iiwic2V0Q29tbWVudExpc3QiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJjb21tZW50SWQiLCJtb2RhbF9tb2RlIiwiY29tbWVudHNfd3JhcHBlciIsInNsaWNlIiwiYWNjb3VudCIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1RvcCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0b3JlIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUVRQSxRLEdBQWFDLDBDLENBQWJELFE7O0FBRVIsU0FBU0UsV0FBVCxPQUF1SDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxNQUFoR0MsT0FBZ0csUUFBaEdBLE9BQWdHO0FBQUEsTUFBdkZDLElBQXVGLFFBQXZGQSxJQUF1RjtBQUFBLE1BQWpGQyxNQUFpRixRQUFqRkEsTUFBaUY7QUFBQSxNQUF6RUMsTUFBeUUsUUFBekVBLE1BQXlFO0FBQUEsTUFBakVDLEVBQWlFLFFBQWpF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YUFBc0NBLElBQXRDLHVDQUFzQ0EsSUFBSSxDQUFFRyxLQUE1QyxpREFBc0MsYUFBYXhFLEdBQW5ELENBSFk7QUFJZixlQUFTLEVBQUUrQyxrRUFBTSxDQUFDMkIsbUJBSkg7QUFLZixXQUFLLEVBQUUsRUFMUTtBQU1mLFlBQU0sRUFBRSxFQU5PO0FBT2YsU0FBRyxFQUFFTCxJQUFJLENBQUN2RixFQVBLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESDtBQUFBLEdBQWIsQ0FESCxDQTFERixDQURGO0FBMEVEOztJQXpNUTZGLFE7O01BQUFBLFE7O0FBMk1ULElBQU1nQixlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ2xDNUcsU0FBSyxFQUFFNEcsS0FBSyxDQUFDekcsSUFBTixDQUFXSCxLQURnQjtBQUVsQ0csUUFBSSxFQUFFeUcsS0FBSyxDQUFDekc7QUFGc0IsR0FBWjtBQUFBLENBQXhCOztBQUtlMEcsMkhBQU8sQ0FBQ0YsZUFBRCxDQUFQLENBQXlCaEIsUUFBekIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLmMwNWMyMmI4MzdmYmIzMDQ0ZTg0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgUG9wb3ZlciB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL2NvbW1lbnQubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVHJpbVRleHQgZnJvbSAnY29tcG9uZW50cy9jb21tb24vVHJpbVRleHQnO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJy4uL2NvbW1vbi9BdmF0YXInO1xyXG5pbXBvcnQgQVBJIGZyb20gJ2NvbmZpZ3MvQVBJJztcclxuaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgRHJhZ2FibGVSYXRpbmcgZnJvbSAnLi4vZm9ybXMvcmF0aW5nL0RyYWdhYmxlUmF0aW5nJztcclxuaW1wb3J0IFJhdGluZ1NsaWRlIGZyb20gJy4uL2Zvcm1zL3JhdGluZy9SYXRpbmdTbGlkZSc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAndmlkZW8tcmVhY3QvbGliL2NvbXBvbmVudHMvUGxheWVyJztcclxuaW1wb3J0IHsgZmkgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUnO1xyXG5cclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcblxyXG5mdW5jdGlvbiBDb21tZW50SXRlbSh7IG1lc3NhZ2UsIG1pbmUsIGF1dGhvciwgcmF0aW5nLCBpZCwgb25SYXRlQ29tbWVudCwgdG9rZW4sIGRhdGEsIG9uVXBkYXRlVGltZWxpbmUsIGF1dGgsIG1vZGFsIH0pIHtcclxuICBjb25zdCBmdWxsTmFtZSA9IGAke2F1dGhvcj8uZmlyc3ROYW1lfSAke2F1dGhvcj8ubGFzdE5hbWV9YDtcclxuICBjb25zdCBoYW5kbGVSYXRlQ29tbWVudCA9IChyYXRlKSA9PiB7XHJcbiAgICBvblJhdGVDb21tZW50KGlkLCByYXRlKTtcclxuICB9O1xyXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBwcm9maWxlVXJsID0gYXV0aG9yICE9PSBudWxsICYmIGF1dGhvciAhPT0gdW5kZWZpbmVkID8gYCR7YXV0aG9yLnByb2ZpbGVQaG90bz8uc3JjfWAgOiBudWxsXHJcbiAgY29uc3QgW2NvbW1lbnQsIHNldENvbW1lbnRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtjb21tZW50cywgc2V0Q29tbWVudHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IGZpbGVJbnB1dFJlZiA9IHVzZVJlZihudWxsKTtcclxuICBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0Q29tbWVudHMoZGF0YSk7XHJcbiAgfSwgW2NvbW1lbnRzXSlcclxuXHJcbiAgY29uc3QgaGFuZGxlRW50ZXJLZXkgPSAoZSkgPT4ge1xyXG4gICAgaWYgKGUubmF0aXZlRXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBvbkNvbW1lbnQoXCJDb21tZW50XCIsIGlkLCBjb21tZW50KTtcclxuICAgICAgc2V0Q29tbWVudCgnJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlVGV4dCA9IChlKSA9PiB7XHJcbiAgICBzZXRDb21tZW50KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkNvbW1lbnQgPSBhc3luYyAodHlwZSwgcG9zdElkLCB0ZXh0LCBmaWxlcz11bmRlZmluZWQpID0+IHtcclxuICAgXHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgdXJsID0gJyc7XHJcbiAgICAgIGxldCBkYXRhRm9yUmVxdWVzdDtcclxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGE7XHJcblxyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2NvbW1lbnRlZCcsIHBvc3RJZClcclxuXHJcbiAgICAgIGlmICh0eXBlID09PSAnUGhvdG8nKSB7XHJcbiAgICAgICAgdXJsID0gJy9waG90b3MvY29tbWVudCc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1ZpZGVvQ2xpcCcpIHtcclxuICAgICAgICB1cmwgPSAnL3ZpZGVvLWNsaXBzL2NvbW1lbnQnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdJdGVtJykge1xyXG4gICAgICAgIHVybCA9ICcvaXRlbXMvY29tbWVudCc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1Bvc3QnKSB7XHJcbiAgICAgICAgdXJsID0gJy9wb3N0cy9jb21tZW50JztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnQ29tbWVudCcpIHtcclxuICAgICAgICB1cmwgPSAnL2NvbW1lbnRzL2NvbW1lbnQnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdTaGFyZScpIHtcclxuICAgICAgICB1cmwgPSAnL3NoYXJlcy9jb21tZW50JztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnTWFya2V0cGxhY2VJdGVtRm9yU2FsZScpIHtcclxuICAgICAgICB1cmwgPSAnL21hcmtldHBsYWNlL2l0ZW1zLWZvci1zYWxlL2NvbW1lbnQnO1xyXG4gICAgICB9IGVsc2UgaWYodHlwZSA9PT0gJ01hcmtldHBsYWNlSXRlbVRvQnV5Jykge1xyXG4gICAgICAgIHVybCA9ICcvbWFya2V0cGxhY2UvaXRlbXMtdG8tYnV5L2NvbW1lbnQnO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBpZiAodGV4dC5sZW5ndGggIT09IDApIHtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3RleHQnLCB0ZXh0KVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBpZiAoZmlsZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGlmIChmaWxlc1tpXS50eXBlLnNwbGl0KCcvJylbMF0gPT09ICdpbWFnZScpIHtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIGZpbGVzW2ldKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndmlkZW8nLCBmaWxlc1tpXSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBkYXRhRm9yUmVxdWVzdCA9IGZvcm1EYXRhXHJcblxyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmwsXHJcbiAgICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IHRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcblxyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICBsZXQgaW5pdGlhbENvbW1lbnRzID0gY29tbWVudHM7XHJcbiAgICAgICAgaW5pdGlhbENvbW1lbnRzLnB1c2goZGF0YS5jb21tZW50c1swXSk7XHJcbiAgICAgICAgc2V0Q29tbWVudHMoaW5pdGlhbENvbW1lbnRzKTtjb25zb2xlLmxvZyhjb21tZW50cyk7XHJcbiAgICAgICAgICBcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gYXdhaXQgcmVxdWVzdDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBvblRhcmdldENsaWNrID0gKCkgPT4ge1xyXG4gICAgZmlsZUlucHV0UmVmLmN1cnJlbnQuY2xpY2soKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uRmlsZUlucHV0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBmaWxlRnJvbUlucHV0ID0gZXZlbnQudGFyZ2V0LmZpbGVzO1xyXG4gICAgb25Db21tZW50KCdDb21tZW50JywgaWQsICcnLCBmaWxlRnJvbUlucHV0KTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5jb21tZW50X2l0ZW0sIHtcclxuICAgICAgICBbc3R5bGVzLm5vdF9taW5lXTogIW1pbmUsXHJcbiAgICAgIH0pfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn0+XHJcbiAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgc2l6ZT17NDV9XHJcbiAgICAgICAgICB1cmw9e3Byb2ZpbGVVcmx9XHJcbiAgICAgICAgICBib3JkZXJTaXplPXsyfVxyXG4gICAgICAgICAgdGV4dD17YXV0aG9yPy51c2VybmFtZX1cclxuICAgICAgICAgIHVzZXJuYW1lPXthdXRob3I/LnVzZXJuYW1lfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFJhdGluZ1NsaWRlXHJcbiAgICAgICAgICBkZWZhdWx0UmF0ZT17cmF0aW5nfVxyXG4gICAgICAgICAgd2l0aG91dFRleHRcclxuICAgICAgICAgIGRhcmtcclxuICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUmF0ZUNvbW1lbnR9XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7LyogPERyYWdhYmxlUmF0aW5nIHJhdGluZz17cmF0aW5nfSBoYW5kbGVSYXRlQ29tbWVudD17aGFuZGxlUmF0ZUNvbW1lbnR9IC8+ICovfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZXNzYWdlX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZXNzYWdlfSBzdHlsZT17eyBjb2xvcjogbW9kYWw/J2JsYWNrJzpudWxsfX0+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5hdXRob3J9PntmdWxsTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgPFRyaW1UZXh0IGxpbWl0PXsxMTB9PnttZXNzYWdlfTwvVHJpbVRleHQ+XHJcbiAgICAgICAgICA8L3A+IFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVwbHl9PlxyXG4gICAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogMTUsIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fSBvbkNsaWNrPXsoKSA9PiBzZXRWaXNpYmxlKHRydWUpfT5yZXBseTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7Y29tbWVudHMgJiYgY29tbWVudHMubWFwKGNvbW1lbnQgPT4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e2NvbW1lbnQuaWR9IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnRfaXRlbX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyfT5cclxuICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICBzaXplPXszNX1cclxuICAgICAgICAgICAgICAgIHVybD17cHJvZmlsZVVybH1cclxuICAgICAgICAgICAgICAgIGJvcmRlclNpemU9ezJ9XHJcbiAgICAgICAgICAgICAgICB0ZXh0PXthdXRob3I/LnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU9e2F1dGhvcj8udXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVzc2FnZX0gc3R5bGU9e3sgbWFyZ2luTGVmdDogJzJlbScsIG1hcmdpbkJvdHRvbTogMTAgfX0gPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmF1dGhvcn0+e2Z1bGxOYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIDxUcmltVGV4dCBsaW1pdD17MTEwfT57Y29tbWVudC50ZXh0fTwvVHJpbVRleHQ+XHJcbiAgICAgICAgICAgICAgPC9wPiBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgICB7dmlzaWJsZT9cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnRfYm94fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyfT5cclxuICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgIHNpemU9ezM1fVxyXG4gICAgICAgICAgICAgIHVybD17YXV0aC51c2VyPy5wcm9maWxlUGhvdG8/LnNyY31cclxuICAgICAgICAgICAgICB0ZXh0PXthdXRoLnVzZXI/LnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgIHVzZXJuYW1lPXthdXRoLnVzZXI/LnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgIGJvcmRlclNpemU9ezJ9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9PlxyXG4gICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICB2YWx1ZT17Y29tbWVudH1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgZG8geW91IG1lYW4/XCJcclxuICAgICAgICAgICAgICByb3dzPXsyfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VUZXh0fVxyXG4gICAgICAgICAgICAgIG9uS2V5RG93bj17aGFuZGxlRW50ZXJLZXl9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgIGJvcmRlclJhZGl1czogMzYsIGhlaWdodDogMjUsIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsIGNvbG9yOiAnYmxhY2snfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdpbWFnZSddfSBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50X2ZpbGV9IHN0eWxlPXt7bWFyZ2luTGVmdDogLTI4LCBmb250U2l6ZTogMTV9fSBvbkNsaWNrPXtvblRhcmdldENsaWNrfS8+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkZpbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgICByZWY9e2ZpbGVJbnB1dFJlZn1cclxuICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj46bnVsbH1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZWRpYUNvbW1lbnRzfT5cclxuICAgICAgICAgIHtjb21tZW50cyAmJiBjb21tZW50cy5tYXAoaXRlbSA9PiAoXHJcbiAgICAgICAgICAgIGl0ZW0uaW1hZ2UgJiYgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2l0ZW0/LmltYWdlPy5zcmN9YH0gY2xhc3NOYW1lPXtzdHlsZXMubWVkaWFDb21tZW50c19pbWFnZX0vPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lZGlhQ29tbWVudHN9PlxyXG4gICAgICAgICAge2NvbW1lbnRzICYmIGNvbW1lbnRzLm1hcChpdGVtID0+IChcclxuICAgICAgICAgICAgaXRlbT8udmlkZW8gJiYgPFBsYXllclxyXG4gICAgICAgICAgICBwbGF5c0lubGluZVxyXG4gICAgICAgICAgICBwb3N0ZXI9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2l0ZW0/LnZpZGVvPy50aHVtYm5haWw/LnNyY31gfVxyXG4gICAgICAgICAgICBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2l0ZW0/LnZpZGVvPy5zcmN9YH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubWVkaWFDb21tZW50c192aWRlb31cclxuICAgICAgICAgICAgd2lkdGg9ezgwfVxyXG4gICAgICAgICAgICBoZWlnaHQ9ezcwfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBDb21tZW50cyh7XHJcbiAgZGF0YSA9IFtdLFxyXG4gIG1vZGFsTW9kZSxcclxuICBpZCxcclxuICB0eXBlLFxyXG4gIGF1dGgsXHJcbiAgb25VcGRhdGVUaW1lbGluZSxcclxuICB0b2tlbixcclxuICBhY3RpdmVQb3N0SWQsXHJcbiAgbW9kYWxcclxufSkge1xyXG4gIGNvbnN0IFtjb21tZW50VGV4dCwgc2V0Q29tbWVudFRleHRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtjb21tZW50TGlzdCwgc2V0Q29tbWVudExpc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShhY3RpdmVQb3N0SWQgPT09IGlkKTtcclxuICBjb25zdCBmaWxlSW5wdXRSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUVudGVyS2V5ID0gKGUpID0+IHtcclxuICAgIGlmIChlLm5hdGl2ZUV2ZW50LmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIG9uQ29tbWVudCh0eXBlLCBpZCwgY29tbWVudFRleHQpO1xyXG5cclxuICAgICAgc2V0Q29tbWVudFRleHQoJycpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVRleHQgPSAoZSkgPT4ge1xyXG4gICAgc2V0Q29tbWVudFRleHQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQ29tbWVudCA9IGFzeW5jICh0eXBlLCBwb3N0SWQsIHRleHQsIGZpbGVzPXVuZGVmaW5lZCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IHVybCA9ICcnO1xyXG4gICAgICBsZXQgZGF0YUZvclJlcXVlc3Q7XHJcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhO1xyXG5cclxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdjb21tZW50ZWQnLCBwb3N0SWQpXHJcblxyXG4gICAgICBpZiAodHlwZSA9PT0gJ1Bob3RvJykge1xyXG4gICAgICAgIHVybCA9ICcvcGhvdG9zL2NvbW1lbnQnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdWaWRlb0NsaXAnKSB7XHJcbiAgICAgICAgdXJsID0gJy92aWRlby1jbGlwcy9jb21tZW50JztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnSXRlbScpIHtcclxuICAgICAgICB1cmwgPSAnL2l0ZW1zL2NvbW1lbnQnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdQb3N0Jykge1xyXG4gICAgICAgIHVybCA9ICcvcG9zdHMvY29tbWVudCc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0NvbW1lbnQnKSB7XHJcbiAgICAgICAgdXJsID0gJy9jb21tZW50cy9jb21tZW50JztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnU2hhcmUnKSB7XHJcbiAgICAgICAgdXJsID0gJy9zaGFyZXMvY29tbWVudCc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ01hcmtldHBsYWNlSXRlbUZvclNhbGUnKSB7XHJcbiAgICAgICAgdXJsID0gJy9tYXJrZXRwbGFjZS9pdGVtcy1mb3Itc2FsZS9jb21tZW50JztcclxuICAgICAgfSBlbHNlIGlmKHR5cGUgPT09ICdNYXJrZXRwbGFjZUl0ZW1Ub0J1eScpIHtcclxuICAgICAgICB1cmwgPSAnL21hcmtldHBsYWNlL2l0ZW1zLXRvLWJ1eS9jb21tZW50JztcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGZpbGVzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBpZiAoZmlsZXNbaV0udHlwZS5zcGxpdCgnLycpWzBdID09PSAnaW1hZ2UnKSB7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBmaWxlc1tpXSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3ZpZGVvJywgZmlsZXNbaV0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaWYgKHRleHQubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd0ZXh0JywgdGV4dClcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgZGF0YUZvclJlcXVlc3QgPSBmb3JtRGF0YVxyXG5cclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsLFxyXG4gICAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiB0b2tlbiB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG5cclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgb25VcGRhdGVUaW1lbGluZShkYXRhKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gYXdhaXQgcmVxdWVzdDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBvblJhdGVDb21tZW50ID0gYXN5bmMgKGNvbW1lbnRJZCwgcmF0ZSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsOiAnL2NvbW1lbnRzL3JhdGUnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGlkOiBjb21tZW50SWQsXHJcbiAgICAgICAgICByYXRpbmc6IHJhdGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogdG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG5cclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgLy8gb25VcGRhdGVUaW1lbGluZSgpO1xyXG4gICAgICAgIC8vIG1lc3NhZ2Uuc3VjY2VzcygnRXZhbHVhdGUgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uVGFyZ2V0Q2xpY2sgPSAoKSA9PiB7XHJcbiAgICBmaWxlSW5wdXRSZWYuY3VycmVudC5jbGljaygpO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25GaWxlSW5wdXRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IGZpbGVGcm9tSW5wdXQgPSBldmVudC50YXJnZXQuZmlsZXM7XHJcbiAgICBvbkNvbW1lbnQodHlwZSwgaWQsICcnLCBmaWxlRnJvbUlucHV0KTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5jb21tZW50cywge1xyXG4gICAgICAgIFtzdHlsZXMubW9kYWxfbW9kZV06IG1vZGFsTW9kZSxcclxuICAgICAgfSl9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tbWVudHNfd3JhcHBlcn0+XHJcbiAgICAgICAgeyhhY3RpdmVQb3N0SWQgPT09IGlkICYmIG1vZGFsTW9kZT8gZGF0YSA6IGRhdGEuc2xpY2UoMCwgMikpLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICA8Q29tbWVudEl0ZW1cclxuICAgICAgICAgICAga2V5PXtpdGVtLmlkK2l0ZW0ucmF0aW5nfVxyXG4gICAgICAgICAgICBpZD17aXRlbS5pZH1cclxuICAgICAgICAgICAgbWluZT17aXRlbS5taW5lfVxyXG4gICAgICAgICAgICBtZXNzYWdlPXtpdGVtLnRleHR9XHJcbiAgICAgICAgICAgIGF1dGhvcj17aXRlbS5hY2NvdW50fVxyXG4gICAgICAgICAgICByYXRpbmc9e2l0ZW0ucmF0aW5nfVxyXG4gICAgICAgICAgICBvblJhdGVDb21tZW50PXtvblJhdGVDb21tZW50fVxyXG4gICAgICAgICAgICB0b2tlbj17dG9rZW59XHJcbiAgICAgICAgICAgIGRhdGE9e2l0ZW0uY29tbWVudHM/aXRlbS5jb21tZW50czpbXX1cclxuICAgICAgICAgICAgb25VcGRhdGVUaW1lbGluZT17b25VcGRhdGVUaW1lbGluZX1cclxuICAgICAgICAgICAgYXV0aD17YXV0aH1cclxuICAgICAgICAgICAgbW9kYWxcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50X2JveH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9PlxyXG4gICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICBzaXplPXs0NX1cclxuICAgICAgICAgICAgdXJsPXthdXRoLnVzZXI/LnByb2ZpbGVQaG90bz8uc3JjfVxyXG4gICAgICAgICAgICB0ZXh0PXthdXRoLnVzZXI/LnVzZXJuYW1lfVxyXG4gICAgICAgICAgICB1c2VybmFtZT17YXV0aC51c2VyPy51c2VybmFtZX1cclxuICAgICAgICAgICAgYm9yZGVyU2l6ZT17Mn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0+XHJcbiAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgdmFsdWU9e2NvbW1lbnRUZXh0fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgZG8geW91IG1lYW4/XCJcclxuICAgICAgICAgICAgcm93cz17Mn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVRleHR9XHJcbiAgICAgICAgICAgIG9uS2V5RG93bj17aGFuZGxlRW50ZXJLZXl9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7ICBib3JkZXJSYWRpdXM6IDM2LCBoZWlnaHQ6IDQ1LCBwYWRkaW5nTGVmdDogMzAsIHBhZGRpbmdUb3A6IDEwLCBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLCBjb2xvcjogJ2JsYWNrJ319XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICA8L1RleHRBcmVhPlxyXG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdpbWFnZSddfSBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50X2ZpbGV9IG9uQ2xpY2s9e29uVGFyZ2V0Q2xpY2t9Lz5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uRmlsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgcmVmPXtmaWxlSW5wdXRSZWZ9XHJcbiAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW5cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVkaWFDb21tZW50c30+XHJcbiAgICAgICAgICB7ZGF0YS5tYXAoaXRlbSA9PiAoXHJcbiAgICAgICAgICAgIGl0ZW0uaW1hZ2UgJiYgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2l0ZW0/LmltYWdlPy5zcmN9YH0gY2xhc3NOYW1lPXtzdHlsZXMubWVkaWFDb21tZW50c19pbWFnZX0ga2V5PXtpdGVtLmlkfS8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVkaWFDb21tZW50c30+XHJcbiAgICAgICAge2RhdGEubWFwKGl0ZW0gPT4gKFxyXG4gICAgICAgICAgaXRlbT8udmlkZW8gJiYgPFBsYXllclxyXG4gICAgICAgICAgcGxheXNJbmxpbmVcclxuICAgICAgICAgIHBvc3Rlcj17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aXRlbT8udmlkZW8/LnRodW1ibmFpbD8uc3JjfWB9XHJcbiAgICAgICAgICBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2l0ZW0/LnZpZGVvPy5zcmN9YH1cclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1lZGlhQ29tbWVudHNfdmlkZW99XHJcbiAgICAgICAgICB3aWR0aD17ODB9XHJcbiAgICAgICAgICBoZWlnaHQ9ezcwfVxyXG4gICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0b3JlKSA9PiAoe1xyXG4gIHRva2VuOiBzdG9yZS5hdXRoLnRva2VuLFxyXG4gIGF1dGg6IHN0b3JlLmF1dGgsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKENvbW1lbnRzKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==