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


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
















function TimelinePosts(_ref) {
  _s();

  var _this = this;

  var data = _ref.data,
      onUpdateTimeline = _ref.onUpdateTimeline,
      onRatePost = _ref.onRatePost,
      modalActions = _ref.modalActions,
      _shareAction = _ref.shareAction,
      _likeAction = _ref.likeAction;
  var imagesList = [].concat.apply([], data.map(function (item) {
    return item.images;
  }));

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      activePostId = _useState[0],
      setActivePostId = _useState[1];

  var _useModal = Object(react_modal_hook__WEBPACK_IMPORTED_MODULE_9__["useModal"])(function (_ref2) {
    var open = _ref2["in"];
    return __jsx(_profile_PhotosModal__WEBPACK_IMPORTED_MODULE_11__["default"], {
      title: "Photo detail",
      showModal: open,
      onClose: hidePhotoModal,
      onRatePost: onRatePost,
      data: imagesList,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 5
      }
    });
  }),
      _useModal2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useModal, 2),
      showPhotoModal = _useModal2[0],
      hidePhotoModal = _useModal2[1];

  var _handleShowCommentModal = function handleShowCommentModal(selectedPost) {
    setActivePostId(selectedPost.id);
    setTimeout(function () {
      modalActions.show('commentModal', {
        foo: 'bar'
      });
    }, 1000);
  };

  var toggleCommentShow = function toggleCommentShow(index) {
    return setCommentShow(commentShow === index ? null : index);
  };

  return __jsx("div", {
    className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.activity_content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
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
        shared = item.shared;
    var profileUrl = account !== null && account !== undefined ? "".concat((_account$profilePhoto = account.profilePhoto) === null || _account$profilePhoto === void 0 ? void 0 : _account$profilePhoto.src) : null;
    var fullName = "".concat(account === null || account === void 0 ? void 0 : account.firstName, " ").concat(account === null || account === void 0 ? void 0 : account.lastName);
    return __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.post,
      key: item.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }
    }, images && images.length > 0 ? __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.post_content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image, (_classnames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.grid_2, images.length == 2), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.grid_3, images.length == 3), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.grid_4, images.length == 4), _classnames)),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }
    }, images.length == 1 && __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 23
      }
    })), images.length == 2 && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.main_photo),
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[1].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 25
      }
    }))), images.length == 3 && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.main_photo),
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[1].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[2].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 25
      }
    }))), images.length >= 4 && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item, _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.main_photo),
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[0].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[1].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[2].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_item,
      onClick: showPhotoModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.show_more,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 25
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 27
      }
    }, "+4")), __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(images[3].src),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 25
      }
    }))))) : __jsx("div", {
      style: {
        height: 50
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 15
      }
    }), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.post_header,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.avatar,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 15
      }
    }, __jsx(_common_Avatar__WEBPACK_IMPORTED_MODULE_12__["default"], {
      text: fullName,
      url: profileUrl,
      size: 80,
      borderSize: 3,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.user_info,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 15
      }
    }, __jsx("p", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.user_name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 17
      }
    }, fullName))), __jsx("p", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.date,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 13
      }
    }, moment__WEBPACK_IMPORTED_MODULE_6___default()(createdAt).format('MMM DD, YYYY - HH:mm A')), __jsx("p", {
      className: _styles_timeline_post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.description,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 13
      }
    }, __jsx(_common_TrimText__WEBPACK_IMPORTED_MODULE_8__["default"], {
      limit: 110,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 15
      }
    }, type !== 'Share' ? text : shared.text)), __jsx(_Actions__WEBPACK_IMPORTED_MODULE_7__["default"], {
      id: item.id,
      type: item.type,
      postRate: item.rating,
      comments: comments,
      onRatePost: onRatePost,
      index: index,
      likeAction: function likeAction() {
        return _likeAction(type, item.id);
      },
      shareAction: function shareAction() {
        return _shareAction(type !== 'Share' ? type : shared.type, type !== 'Share' ? item.id : shared.id);
      },
      actions: {
        handleShowCommentModal: function handleShowCommentModal() {
          _handleShowCommentModal(item);
        }
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 13
      }
    }), __jsx(_Comments__WEBPACK_IMPORTED_MODULE_5__["default"], {
      id: item.id,
      type: item.type,
      data: comments,
      onUpdateTimeline: onUpdateTimeline,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
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
      lineNumber: 173,
      columnNumber: 7
    }
  }));
}

_s(TimelinePosts, "fhpcheEHhD4P/smW0Rf6jbXrVFw=", false, function () {
  return [react_modal_hook__WEBPACK_IMPORTED_MODULE_9__["useModal"]];
});

_c = TimelinePosts;

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    modalActions: Object(redux__WEBPACK_IMPORTED_MODULE_14__["bindActionCreators"])({
      show: redux_modal__WEBPACK_IMPORTED_MODULE_13__["show"]
    }, dispatch)
  };
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aW1lbGluZS9UaW1lbGluZVBvc3RzLmpzIl0sIm5hbWVzIjpbIlRpbWVsaW5lUG9zdHMiLCJkYXRhIiwib25VcGRhdGVUaW1lbGluZSIsIm9uUmF0ZVBvc3QiLCJtb2RhbEFjdGlvbnMiLCJzaGFyZUFjdGlvbiIsImxpa2VBY3Rpb24iLCJpbWFnZXNMaXN0IiwiY29uY2F0IiwiYXBwbHkiLCJtYXAiLCJpdGVtIiwiaW1hZ2VzIiwidXNlU3RhdGUiLCJhY3RpdmVQb3N0SWQiLCJzZXRBY3RpdmVQb3N0SWQiLCJ1c2VNb2RhbCIsIm9wZW4iLCJoaWRlUGhvdG9Nb2RhbCIsInNob3dQaG90b01vZGFsIiwiaGFuZGxlU2hvd0NvbW1lbnRNb2RhbCIsInNlbGVjdGVkUG9zdCIsImlkIiwic2V0VGltZW91dCIsInNob3ciLCJmb28iLCJ0b2dnbGVDb21tZW50U2hvdyIsImluZGV4Iiwic2V0Q29tbWVudFNob3ciLCJjb21tZW50U2hvdyIsInN0eWxlcyIsImFjdGl2aXR5X2NvbnRlbnQiLCJhY2NvdW50IiwiY3JlYXRlZEF0IiwidHlwZSIsImNvbW1lbnRzIiwidGV4dCIsInZpZGVvcyIsInNoYXJlZCIsInByb2ZpbGVVcmwiLCJ1bmRlZmluZWQiLCJwcm9maWxlUGhvdG8iLCJzcmMiLCJmdWxsTmFtZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwicG9zdCIsImxlbmd0aCIsInBvc3RfY29udGVudCIsImNsYXNzbmFtZXMiLCJpbWFnZSIsImdyaWRfMiIsImdyaWRfMyIsImdyaWRfNCIsImltYWdlX2l0ZW0iLCJtYWluX3Bob3RvIiwic2hvd19tb3JlIiwiaGVpZ2h0IiwicG9zdF9oZWFkZXIiLCJhdmF0YXIiLCJ1c2VyX2luZm8iLCJ1c2VyX25hbWUiLCJkYXRlIiwibW9tZW50IiwiZm9ybWF0IiwiZGVzY3JpcHRpb24iLCJyYXRpbmciLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImJpbmRBY3Rp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S0FBRCxFQUFXNEMsUUFBWDtBQURRLEdBQWY7QUFBQSxDQUEzQjs7QUFJZUUsMkhBQU8sQ0FBQyxJQUFELEVBQU9ILGtCQUFQLENBQVAsQ0FBa0NuRSxhQUFsQyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3RpbWVsaW5lLjMxY2VkMmViODljNzcxYmE4YzI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL3RpbWVsaW5lLXBvc3QubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IENvbW1lbnRzIGZyb20gJy4vQ29tbWVudHMnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgQWN0aW9ucyBmcm9tICcuL0FjdGlvbnMnO1xyXG5pbXBvcnQgVHJpbVRleHQgZnJvbSAnLi4vY29tbW9uL1RyaW1UZXh0JztcclxuaW1wb3J0IHsgdXNlTW9kYWwgfSBmcm9tICdyZWFjdC1tb2RhbC1ob29rJztcclxuaW1wb3J0IENvbW1lbnRzTW9kYWwgZnJvbSAnLi9Db21tZW50c01vZGFsJztcclxuaW1wb3J0IFBob3Rvc01vZGFsIGZyb20gJy4uL3Byb2ZpbGUvUGhvdG9zTW9kYWwnO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJy4uL2NvbW1vbi9BdmF0YXInO1xyXG5pbXBvcnQgeyBzaG93IH0gZnJvbSAncmVkdXgtbW9kYWwnO1xyXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBBUEkgZnJvbSAnY29uZmlncy9BUEknO1xyXG5cclxuZnVuY3Rpb24gVGltZWxpbmVQb3N0cyh7IGRhdGEsIG9uVXBkYXRlVGltZWxpbmUsIG9uUmF0ZVBvc3QsIG1vZGFsQWN0aW9ucywgc2hhcmVBY3Rpb24sIGxpa2VBY3Rpb24gfSkge1xyXG4gIGNvbnN0IGltYWdlc0xpc3QgPSBbXS5jb25jYXQuYXBwbHkoW10sIGRhdGEubWFwKGl0ZW0gPT4gaXRlbS5pbWFnZXMpKVxyXG4gIGNvbnN0IFthY3RpdmVQb3N0SWQsIHNldEFjdGl2ZVBvc3RJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbc2hvd1Bob3RvTW9kYWwsIGhpZGVQaG90b01vZGFsXSA9IHVzZU1vZGFsKCh7IGluOiBvcGVuIH0pID0+IChcclxuICAgIDxQaG90b3NNb2RhbFxyXG4gICAgICB0aXRsZT1cIlBob3RvIGRldGFpbFwiXHJcbiAgICAgIHNob3dNb2RhbD17b3Blbn1cclxuICAgICAgb25DbG9zZT17aGlkZVBob3RvTW9kYWx9XHJcbiAgICAgIG9uUmF0ZVBvc3Q9e29uUmF0ZVBvc3R9XHJcbiAgICAgIGRhdGE9e2ltYWdlc0xpc3R9XHJcbiAgICAvPlxyXG4gICkpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTaG93Q29tbWVudE1vZGFsID0gKHNlbGVjdGVkUG9zdCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlUG9zdElkKHNlbGVjdGVkUG9zdC5pZCk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgbW9kYWxBY3Rpb25zLnNob3coJ2NvbW1lbnRNb2RhbCcsIHsgZm9vOiAnYmFyJyB9KTtcclxuICAgIH0sIDEwMDApXHJcbiAgICBcclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVDb21tZW50U2hvdyA9IChpbmRleCkgPT5cclxuICAgIHNldENvbW1lbnRTaG93KGNvbW1lbnRTaG93ID09PSBpbmRleCA/IG51bGwgOiBpbmRleCk7XHJcblxyXG4gIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpdml0eV9jb250ZW50fT5cclxuICAgICAge2RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgYWNjb3VudCwgY3JlYXRlZEF0LCB0eXBlLCBjb21tZW50cywgdGV4dCwgaW1hZ2VzLCB2aWRlb3MsIHNoYXJlZCB9ID0gaXRlbTtcclxuICAgICAgICBjb25zdCBwcm9maWxlVXJsID0gYWNjb3VudCAhPT0gbnVsbCAmJiBhY2NvdW50ICE9PSB1bmRlZmluZWQgPyBgJHthY2NvdW50LnByb2ZpbGVQaG90bz8uc3JjfWAgOiBudWxsXHJcbiAgICAgICAgY29uc3QgZnVsbE5hbWUgPSBgJHthY2NvdW50Py5maXJzdE5hbWV9ICR7YWNjb3VudD8ubGFzdE5hbWV9YDtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0fSBrZXk9e2l0ZW0uaWR9PlxyXG4gICAgICAgICAgICB7aW1hZ2VzICYmIGltYWdlcy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdF9jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5pbWFnZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIFtzdHlsZXMuZ3JpZF8yXTogaW1hZ2VzLmxlbmd0aCA9PSAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFtzdHlsZXMuZ3JpZF8zXTogaW1hZ2VzLmxlbmd0aCA9PSAzLFxyXG4gICAgICAgICAgICAgICAgICAgIFtzdHlsZXMuZ3JpZF80XTogaW1hZ2VzLmxlbmd0aCA9PSA0LFxyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge2ltYWdlcy5sZW5ndGggPT0gMSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZV9pdGVtfSBvbkNsaWNrPXtzaG93UGhvdG9Nb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzBdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAge2ltYWdlcy5sZW5ndGggPT0gMiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5pbWFnZV9pdGVtLCBzdHlsZXMubWFpbl9waG90byl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dQaG90b01vZGFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzBdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX2l0ZW19IG9uQ2xpY2s9e3Nob3dQaG90b01vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1sxXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAge2ltYWdlcy5sZW5ndGggPT0gMyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5pbWFnZV9pdGVtLCBzdHlsZXMubWFpbl9waG90byl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dQaG90b01vZGFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzBdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX2l0ZW19IG9uQ2xpY2s9e3Nob3dQaG90b01vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1sxXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZV9pdGVtfSBvbkNsaWNrPXtzaG93UGhvdG9Nb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMl0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtpbWFnZXMubGVuZ3RoID49IDQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuaW1hZ2VfaXRlbSwgc3R5bGVzLm1haW5fcGhvdG8pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzaG93UGhvdG9Nb2RhbH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1swXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZV9pdGVtfSBvbkNsaWNrPXtzaG93UGhvdG9Nb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpbWFnZXNbMV0uc3JjfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfaXRlbX0gb25DbGljaz17c2hvd1Bob3RvTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aW1hZ2VzWzJdLnNyY31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX2l0ZW19IG9uQ2xpY2s9e3Nob3dQaG90b01vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaG93X21vcmV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPis0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2ltYWdlc1szXS5zcmN9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IDUwIH19IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdF9oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyfT5cclxuICAgICAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICAgICAgdGV4dD17ZnVsbE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIHVybD17cHJvZmlsZVVybH1cclxuICAgICAgICAgICAgICAgICAgc2l6ZT17ODB9XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclNpemU9ezN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfaW5mb30+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy51c2VyX25hbWV9PntmdWxsTmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kYXRlfT5cclxuICAgICAgICAgICAgICB7bW9tZW50KGNyZWF0ZWRBdCkuZm9ybWF0KCdNTU0gREQsIFlZWVkgLSBISDptbSBBJyl9XHJcbiAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cclxuICAgICAgICAgICAgICA8VHJpbVRleHQgbGltaXQ9ezExMH0+XHJcbiAgICAgICAgICAgICAgICB7IHR5cGUhPT0nU2hhcmUnP3RleHQ6c2hhcmVkLnRleHQgfVxyXG4gICAgICAgICAgICAgIDwvVHJpbVRleHQ+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPEFjdGlvbnNcclxuICAgICAgICAgICAgICBpZD17aXRlbS5pZH1cclxuICAgICAgICAgICAgICB0eXBlPXtpdGVtLnR5cGV9XHJcbiAgICAgICAgICAgICAgcG9zdFJhdGU9e2l0ZW0ucmF0aW5nfVxyXG4gICAgICAgICAgICAgIGNvbW1lbnRzPXtjb21tZW50c31cclxuICAgICAgICAgICAgICBvblJhdGVQb3N0PXtvblJhdGVQb3N0fVxyXG4gICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cclxuICAgICAgICAgICAgICBsaWtlQWN0aW9uPXsoKSA9PiBsaWtlQWN0aW9uKHR5cGUsIGl0ZW0uaWQpfVxyXG4gICAgICAgICAgICAgIHNoYXJlQWN0aW9uPXsoKSA9PiBzaGFyZUFjdGlvbih0eXBlICE9PSAnU2hhcmUnP3R5cGU6c2hhcmVkLnR5cGUsIHR5cGUgIT09ICdTaGFyZSc/aXRlbS5pZDpzaGFyZWQuaWQpfVxyXG4gICAgICAgICAgICAgIGFjdGlvbnM9e3tcclxuICAgICAgICAgICAgICAgIGhhbmRsZVNob3dDb21tZW50TW9kYWw6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaGFuZGxlU2hvd0NvbW1lbnRNb2RhbChpdGVtKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPENvbW1lbnRzXHJcbiAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgdHlwZT17aXRlbS50eXBlfVxyXG4gICAgICAgICAgICAgIGRhdGE9e2NvbW1lbnRzfVxyXG4gICAgICAgICAgICAgIG9uVXBkYXRlVGltZWxpbmU9e29uVXBkYXRlVGltZWxpbmV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcblxyXG4gICAgICA8Q29tbWVudHNNb2RhbFxyXG4gICAgICAgIGFjdGl2ZVBvc3RJZD17YWN0aXZlUG9zdElkfVxyXG4gICAgICAgIHBvc3REYXRhPXtkYXRhfVxyXG4gICAgICAgIG9uVXBkYXRlVGltZWxpbmU9e29uVXBkYXRlVGltZWxpbmV9XHJcbiAgICAgICAgdGl0bGU9XCJDb21tZW50c1wiXHJcbiAgICAgICAgLy8gc2hvd01vZGFsPXtvcGVufVxyXG4gICAgICAgIC8vIG9uQ2xvc2U9e2hpZGVDb21tZW50TW9kYWx9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgbW9kYWxBY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoeyBzaG93IH0sIGRpc3BhdGNoKVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShUaW1lbGluZVBvc3RzKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==