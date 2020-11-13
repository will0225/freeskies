webpackHotUpdate_N_E("pages/profile",{

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
var _jsxFileName = "E:\\freeskies_fe_code\\components\\timeline\\TimelinePosts.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


















function TimelinePosts({
  data,
  onUpdateTimeline,
  onRatePost,
  modalActions,
  shareAction,
  likeAction
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
      lineNumber: 24,
      columnNumber: 5
    }
  }));

  const handleShowCommentModal = id => {
    setActivePostId(id);
    setModalMode(!modalMode); //modalActions.show('commentModal', { id: activePostId });
  };

  const toggleCommentShow = index => setCommentShow(commentShow === index ? null : index);

  return __jsx("div", {
    className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.activity_content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
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
      commented
    } = item;
    const profileUrl = account !== null && account !== undefined ? "".concat((_account$profilePhoto = account.profilePhoto) === null || _account$profilePhoto === void 0 ? void 0 : _account$profilePhoto.src) : null;
    const fullName = "".concat(account === null || account === void 0 ? void 0 : account.firstName, " ").concat(account === null || account === void 0 ? void 0 : account.lastName);
    return __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.post,
      key: item.id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.postAction,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 13
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: ['far', 'bicycle'],
      size: "1x",
      style: {
        marginRight: 15,
        cursor: 'pointer'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 15
      }
    })), images && images.length > 0 ? __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.post_content,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
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
        lineNumber: 58,
        columnNumber: 17
      }
    }, images.length == 1 && __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.image_item,
      onClick: showPhotoModal,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].src),
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 23
      }
    })), images.length == 2 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.image_item, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.main_photo),
      onClick: showPhotoModal,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].src),
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.image_item,
      onClick: showPhotoModal,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[1].src),
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 25
      }
    }))), images.length == 3 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.image_item, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.main_photo),
      onClick: showPhotoModal,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].src),
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.image_item,
      onClick: showPhotoModal,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[1].src),
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.image_item,
      onClick: showPhotoModal,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[2].src),
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 25
      }
    }))), images.length >= 4 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.image_item, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.main_photo),
      onClick: showPhotoModal,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].src),
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.image_item,
      onClick: showPhotoModal,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[1].src),
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.image_item,
      onClick: showPhotoModal,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[2].src),
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.image_item,
      onClick: showPhotoModal,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.show_more,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 25
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 27
      }
    }, "+4")), __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[3].src),
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 25
      }
    }))))) : __jsx("div", {
      style: {
        height: 50
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 15
      }
    }), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.post_header,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.avatar,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 15
      }
    }, __jsx(_common_Avatar__WEBPACK_IMPORTED_MODULE_12__["default"], {
      text: fullName,
      url: profileUrl,
      size: 80,
      borderSize: 3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.user_info,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 15
      }
    }, __jsx("p", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.user_name,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 17
      }
    }, fullName))), __jsx("p", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.date,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 13
      }
    }, moment__WEBPACK_IMPORTED_MODULE_6___default()(createdAt).format('MMM DD, YYYY - HH:mm A')), __jsx("p", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.description,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 13
      }
    }, __jsx(_common_TrimText__WEBPACK_IMPORTED_MODULE_8__["default"], {
      limit: 110,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 15
      }
    }, type !== 'Share' ? text : shared.text)), __jsx(_Actions__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
        lineNumber: 152,
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
        lineNumber: 165,
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
      lineNumber: 178,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aW1lbGluZS9UaW1lbGluZVBvc3RzLmpzIl0sIm5hbWVzIjpbIlRpbWVsaW5lUG9zdHMiLCJkYXRhIiwib25VcGRhdGVUaW1lbGluZSIsIm9uUmF0ZVBvc3QiLCJtb2RhbEFjdGlvbnMiLCJzaGFyZUFjdGlvbiIsImxpa2VBY3Rpb24iLCJpbWFnZXNMaXN0IiwiY29uY2F0IiwiYXBwbHkiLCJtYXAiLCJpdGVtIiwiaW1hZ2VzIiwiYWN0aXZlUG9zdElkIiwic2V0QWN0aXZlUG9zdElkIiwidXNlU3RhdGUiLCJtb2RhbE1vZGUiLCJzZXRNb2RhbE1vZGUiLCJzaG93UGhvdG9Nb2RhbCIsImhpZGVQaG90b01vZGFsIiwidXNlTW9kYWwiLCJpbiIsIm9wZW4iLCJoYW5kbGVTaG93Q29tbWVudE1vZGFsIiwiaWQiLCJ0b2dnbGVDb21tZW50U2hvdyIsImluZGV4Iiwic2V0Q29tbWVudFNob3ciLCJjb21tZW50U2hvdyIsInN0eWxlcyIsImFjdGl2aXR5X2NvbnRlbnQiLCJhY2NvdW50IiwiY3JlYXRlZEF0IiwidHlwZSIsImNvbW1lbnRzIiwidGV4dCIsInZpZGVvcyIsInNoYXJlZCIsImNvbW1lbnRlZCIsInByb2ZpbGVVcmwiLCJ1bmRlZmluZWQiLCJwcm9maWxlUGhvdG8iLCJzcmMiLCJmdWxsTmFtZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwicG9zdCIsInBvc3RBY3Rpb24iLCJtYXJnaW5SaWdodCIsImN1cnNvciIsImxlbmd0aCIsInBvc3RfY29udGVudCIsImNsYXNzbmFtZXMiLCJpbWFnZSIsImdyaWRfMiIsImdyaWRfMyIsImdyaWRfNCIsImltYWdlX2l0ZW0iLCJtYWluX3Bob3RvIiwic2hvd19tb3JlIiwiaGVpZ2h0IiwicG9zdF9oZWFkZXIiLCJhdmF0YXIiLCJ1c2VyX2luZm8iLCJ1c2VyX25hbWUiLCJkYXRlIiwibW9tZW50IiwiZm9ybWF0IiwiZGVzY3JpcHRpb24iLCJyYXRpbmciLCJ0ZXJtIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJzaG93IiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsYUFBVCxDQUF1QjtBQUFFQyxNQUFGO0FBQVFDLGtCQUFSO0FBQTBCQyxZQUExQjtBQUFzQ0MsY0FBdEM7QUFBb0RDLGFBQXBEO0FBQWlFQztBQUFqRSxDQUF2QixFQUFzRztBQUFBOztBQUNwRyxRQUFNQyxVQUFVLEdBQUcsR0FBR0MsTUFBSCxDQUFVQyxLQUFWLENBQWdCLEVBQWhCLEVBQW9CUixJQUFJLENBQUNTLEdBQUwsQ0FBU0MsSUFBSSxJQUFJQSxJQUFJLENBQUNDLE1BQXRCLENBQXBCLENBQW5CO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFlBQUQ7QUFBQSxPQUFlQztBQUFmLE1BQWtDQyxzREFBUSxDQUFDLElBQUQsQ0FBaEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJGLHNEQUFRLENBQUMsS0FBRCxDQUExQztBQUNBLFFBQU0sQ0FBQ0csY0FBRCxFQUFpQkMsY0FBakIsSUFBbUNDLGlFQUFRLENBQUMsQ0FBQztBQUFFQyxNQUFFLEVBQUVDO0FBQU4sR0FBRCxLQUNoRCxNQUFDLDZEQUFEO0FBQ0UsU0FBSyxFQUFDLGNBRFI7QUFFRSxhQUFTLEVBQUVBLElBRmI7QUFHRSxXQUFPLEVBQUVILGNBSFg7QUFJRSxjQUFVLEVBQUVoQixVQUpkO0FBS0UsUUFBSSxFQUFFSSxVQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEK0MsQ0FBakQ7O0FBVUEsUUFBTWdCLHNCQUFzQixHQUFJQyxFQUFELElBQVE7QUFDckNWLG1CQUFlLENBQUNV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QUFsQyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuZWZmZGUzZjFiNDBiNjNiOTEzNjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvdGltZWxpbmUtcG9zdC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IFBvcG92ZXIsIFRvb2x0aXAgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBDb21tZW50cyBmcm9tICcuL0NvbW1lbnRzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IEFjdGlvbnMgZnJvbSAnLi9BY3Rpb25zJztcclxuaW1wb3J0IFRyaW1UZXh0IGZyb20gJy4uL2NvbW1vbi9UcmltVGV4dCc7XHJcbmltcG9ydCB7IHVzZU1vZGFsIH0gZnJvbSAncmVhY3QtbW9kYWwtaG9vayc7XHJcbmltcG9ydCBDb21tZW50c01vZGFsIGZyb20gJy4vQ29tbWVudHNNb2RhbCc7XHJcbmltcG9ydCBQaG90b3NNb2RhbCBmcm9tICcuLi9wcm9maWxlL1Bob3Rvc01vZGFsJztcclxuaW1wb3J0IEF2YXRhciBmcm9tICcuLi9jb21tb24vQXZhdGFyJztcclxuaW1wb3J0IHsgc2hvdyB9IGZyb20gJ3JlZHV4LW1vZGFsJztcclxuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgQVBJIGZyb20gJ2NvbmZpZ3MvQVBJJztcclxuXHJcbmZ1bmN0aW9uIFRpbWVsaW5lUG9zdHMoeyBkYXRhLCBvblVwZGF0ZVRpbWVsaW5lLCBvblJhdGVQb3N0LCBtb2RhbEFjdGlvbnMsIHNoYXJlQWN0aW9uLCBsaWtlQWN0aW9uIH0pIHtcclxuICBjb25zdCBpbWFnZXNMaXN0ID0gW10uY29uY2F0LmFwcGx5KFtdLCBkYXRhLm1hcChpdGVtID0+IGl0ZW0uaW1hZ2VzKSlcclxuICBjb25zdCBbYWN0aXZlUG9zdElkLCBzZXRBY3RpdmVQb3N0SWRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW21vZGFsTW9kZSwgc2V0TW9kYWxNb2RlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd1Bob3RvTW9kYWwsIGhpZGVQaG90b01vZGFsXSA9IHVzZU1vZGFsKCh7IGluOiBvcGVuIH0pID0+IChcclxuICAgIDxQaG90b3NNb2RhbFxyXG4gICAgICB0aXRsZT1cIlBob3RvIGRldGFpbFwiXHJcbiAgICAgIHNob3dNb2RhbD17b3Blbn1cclxuICAgICAgb25DbG9zZT17aGlkZVBob3RvTW9kYWx9XHJcbiAgICAgIG9uUmF0ZVBvc3Q9e29uUmF0ZVBvc3R9XHJcbiAgICAgIGRhdGE9e2ltYWdlc0xpc3R9XHJcbiAgICAvPlxyXG4gICkpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTaG93Q29tbWVudE1vZGFsID0gKGlkKSA9PiB7XHJcbiAgICBzZXRBY3RpdmVQb3N0SWQoaWQpO1xyXG4gICAgc2V0TW9kYWxNb2RlKCFtb2RhbE1vZGUpO1xyXG4gICAgLy9tb2RhbEFjdGlvbnMuc2hvdygnY29tbWVudE1vZGFsJywgeyBpZDogYWN0aXZlUG9zdElkIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZ2dsZUNvbW1lbnRTaG93ID0gKGluZGV4KSA9PlxyXG4gICAgc2V0Q29tbWVudFNob3coY29tbWVudFNob3cgPT09IGluZGV4ID8gbnVsbCA6IGluZGV4KTtcclxuXHJcbiAgXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjdGl2aXR5X2NvbnRlbnR9PlxyXG4gICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgdmFyIHsgYWNjb3VudCwgY3JlYXRlZEF0LCB0eXBlLCBjb21tZW50cywgdGV4dCwgaW1hZ2VzLCB2aWRlb3MsIHNoYXJlZCwgY29tbWVudGVkIH0gPSBpdGVtO1xyXG4gICAgICAgIGNvbnN0IHByb2ZpbGVVcmwgPSBhY2NvdW50ICE9PSBudWxsICYmIGFjY291bnQgIT09IHVuZGVmaW5lZCA/IGAke2FjY291bnQucHJvZmlsZVBob3RvPy5zcmN9YCA6IG51bGxcclxuICAgICAgICBjb25zdCBmdWxsTmFtZSA9IGAke2FjY291bnQ/LmZpcnN0TmFtZX0gJHthY2NvdW50Py5sYXN0TmFtZX1gO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3R9IGtleT17aXRlbS5pZH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdEFjdGlvbn0+XHJcbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdiaWN5Y2xlJ119ICBzaXplPVwiMXhcIiBzdHlsZT17e21hcmdpblJpZ2h0OiAxNSAsIGN1cnNvcjogJ3BvaW50ZXInfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2ltYWdlcyAmJiBpbWFnZXMubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RfY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuaW1hZ2UsIHtcclxuICAgICAgICAgICAgICAgICAgICBbc3R5bGVzLmdyaWRfMl06IGltYWdlcy5sZW5ndGggPT0gMixcclxuICAgICAgICAgICAgICAgICAgICBbc3R5bGVzLmdyaWRfM106IGltYWdlcy5sZW5ndGggPT0gMyxcclxuICAgICAgICAgICAgICAgICAgICBbc3R5bGVzLmdyaWRfNF06IGltYWdlcy5sZW5ndGggPT0gNCxcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtpbWFnZXMubGVuZ3RoID09IDEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfaXRlbX0gb25DbGljaz17c2hvd1Bob3RvTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1swXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtpbWFnZXMubGVuZ3RoID09IDIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuaW1hZ2VfaXRlbSwgc3R5bGVzLm1haW5fcGhvdG8pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzaG93UGhvdG9Nb2RhbH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1swXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZV9pdGVtfSBvbkNsaWNrPXtzaG93UGhvdG9Nb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMV0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtpbWFnZXMubGVuZ3RoID09IDMgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuaW1hZ2VfaXRlbSwgc3R5bGVzLm1haW5fcGhvdG8pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzaG93UGhvdG9Nb2RhbH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1swXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZV9pdGVtfSBvbkNsaWNrPXtzaG93UGhvdG9Nb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMV0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfaXRlbX0gb25DbGljaz17c2hvd1Bob3RvTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzJdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICB7aW1hZ2VzLmxlbmd0aCA+PSA0ICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmltYWdlX2l0ZW0sIHN0eWxlcy5tYWluX3Bob3RvKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c2hvd1Bob3RvTW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMF0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfaXRlbX0gb25DbGljaz17c2hvd1Bob3RvTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzFdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX2l0ZW19IG9uQ2xpY2s9e3Nob3dQaG90b01vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1syXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZV9pdGVtfSBvbkNsaWNrPXtzaG93UGhvdG9Nb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2hvd19tb3JlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4rNDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbM10uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiA1MCB9fSAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RfaGVhZGVyfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn0+XHJcbiAgICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgIHRleHQ9e2Z1bGxOYW1lfVxyXG4gICAgICAgICAgICAgICAgICB1cmw9e3Byb2ZpbGVVcmx9XHJcbiAgICAgICAgICAgICAgICAgIHNpemU9ezgwfVxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJTaXplPXszfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyX2luZm99PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudXNlcl9uYW1lfT57ZnVsbE5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZX0+XHJcbiAgICAgICAgICAgICAge21vbWVudChjcmVhdGVkQXQpLmZvcm1hdCgnTU1NIERELCBZWVlZIC0gSEg6bW0gQScpfVxyXG4gICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICAgICAgPFRyaW1UZXh0IGxpbWl0PXsxMTB9PlxyXG4gICAgICAgICAgICAgICAgeyB0eXBlIT09J1NoYXJlJz90ZXh0OnNoYXJlZC50ZXh0IH1cclxuICAgICAgICAgICAgICA8L1RyaW1UZXh0PlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxBY3Rpb25zXHJcbiAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgdHlwZT17aXRlbS50eXBlfVxyXG4gICAgICAgICAgICAgIHBvc3RSYXRlPXtpdGVtLnJhdGluZ31cclxuICAgICAgICAgICAgICBjb21tZW50cz17Y29tbWVudHN9XHJcbiAgICAgICAgICAgICAgb25SYXRlUG9zdD17b25SYXRlUG9zdH1cclxuICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XHJcbiAgICAgICAgICAgICAgbGlrZUFjdGlvbj17KHRlcm0pID0+IGxpa2VBY3Rpb24odHlwZSwgaXRlbS5pZCwgdGVybSl9XHJcbiAgICAgICAgICAgICAgc2hhcmVBY3Rpb249eygpID0+IHNoYXJlQWN0aW9uKHR5cGUgIT09ICdTaGFyZSc/dHlwZTpzaGFyZWQudHlwZSwgdHlwZSAhPT0gJ1NoYXJlJz9pdGVtLmlkOnNoYXJlZC5pZCl9XHJcbiAgICAgICAgICAgICAgYWN0aW9ucz17XHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7IGhhbmRsZVNob3dDb21tZW50TW9kYWwoaXRlbS5pZCkgfSBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxDb21tZW50c1xyXG4gICAgICAgICAgICAgIGlkPXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgIHR5cGU9e2l0ZW0udHlwZX1cclxuICAgICAgICAgICAgICBkYXRhPXtjb21tZW50c31cclxuICAgICAgICAgICAgICBvblVwZGF0ZVRpbWVsaW5lPXtvblVwZGF0ZVRpbWVsaW5lfVxyXG4gICAgICAgICAgICAgIGFjdGl2ZVBvc3RJZD17YWN0aXZlUG9zdElkfVxyXG4gICAgICAgICAgICAgIG1vZGFsTW9kZT17bW9kYWxNb2RlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG5cclxuICAgICAgPENvbW1lbnRzTW9kYWxcclxuICAgICAgICBhY3RpdmVQb3N0SWQ9e2FjdGl2ZVBvc3RJZH1cclxuICAgICAgICBwb3N0RGF0YT17ZGF0YX1cclxuICAgICAgICBvblVwZGF0ZVRpbWVsaW5lPXtvblVwZGF0ZVRpbWVsaW5lfVxyXG4gICAgICAgIHRpdGxlPVwiQ29tbWVudHNcIlxyXG4gICAgICAgIC8vIHNob3dNb2RhbD17b3Blbn1cclxuICAgICAgICAvLyBvbkNsb3NlPXtoaWRlQ29tbWVudE1vZGFsfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gIG1vZGFsQWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKHsgc2hvdyB9LCBkaXNwYXRjaClcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoVGltZWxpbmVQb3N0cyk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=