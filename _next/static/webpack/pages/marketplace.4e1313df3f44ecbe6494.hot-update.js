webpackHotUpdate_N_E("pages/marketplace",{

/***/ "./containers/Marketplace/DetailMarketItem.js":
/*!****************************************************!*\
  !*** ./containers/Marketplace/DetailMarketItem.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_marketplace_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/marketplace.module.scss */ "./containers/Marketplace/styles/marketplace.module.scss");
/* harmony import */ var _styles_marketplace_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_marketplace_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var configs_API__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! configs/API */ "./configs/API.js");
/* harmony import */ var components_common_Avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/common/Avatar */ "./components/common/Avatar.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_timeline_Actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/timeline/Actions */ "./components/timeline/Actions.js");
/* harmony import */ var components_timeline_Comments__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/timeline/Comments */ "./components/timeline/Comments.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
var _jsxFileName = "D:\\Freeskies-development-\\containers\\Marketplace\\DetailMarketItem.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












function DetailMarketItem(_ref) {
  var _data$reactions, _data$reactions2, _data$reactions3, _data$reactions4, _data$reactions5, _data$images$, _data$account, _data$account$profile, _data$account2, _data$account3, _data$account4, _data$account5;

  var data = _ref.data,
      onRatePost = _ref.onRatePost,
      _likeAction = _ref.likeAction,
      _shareAction = _ref.shareAction,
      onUpdateComments = _ref.onUpdateComments,
      type = _ref.type;

  var getLikeActionUserInfo = function getLikeActionUserInfo(data) {
    var finalData = '';
    data.map(function (item, index) {
      finalData = finalData + ' ' + item.account.firstName + '' + item.account.lastName;
    });
    return finalData;
  };

  var likeData = data !== null && data !== void 0 && data.reactions ? data === null || data === void 0 ? void 0 : (_data$reactions = data.reactions) === null || _data$reactions === void 0 ? void 0 : _data$reactions.filter(function (item) {
    return item.reaction == 'LIKE';
  }) : [];
  var heartData = data !== null && data !== void 0 && data.reactions ? data === null || data === void 0 ? void 0 : (_data$reactions2 = data.reactions) === null || _data$reactions2 === void 0 ? void 0 : _data$reactions2.filter(function (item) {
    return item.reaction == 'HEART';
  }) : [];
  var wowData = data !== null && data !== void 0 && data.reactions ? data === null || data === void 0 ? void 0 : (_data$reactions3 = data.reactions) === null || _data$reactions3 === void 0 ? void 0 : _data$reactions3.filter(function (item) {
    return item.reaction == 'WOW';
  }) : [];
  var hahaData = data !== null && data !== void 0 && data.reactions ? data === null || data === void 0 ? void 0 : (_data$reactions4 = data.reactions) === null || _data$reactions4 === void 0 ? void 0 : _data$reactions4.filter(function (item) {
    return item.reaction == 'HAHA';
  }) : [];
  var sadData = data !== null && data !== void 0 && data.reactions ? data === null || data === void 0 ? void 0 : (_data$reactions5 = data.reactions) === null || _data$reactions5 === void 0 ? void 0 : _data$reactions5.filter(function (item) {
    return item.reaction == 'SAD';
  }) : [];
  return __jsx("div", {
    className: _styles_marketplace_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.market_detailContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, (data === null || data === void 0 ? void 0 : data.images.length) > 0 ? __jsx("div", {
    className: _styles_marketplace_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.detail_image,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: configs_API__WEBPACK_IMPORTED_MODULE_5__["ASSETS_URL"] + (data === null || data === void 0 ? void 0 : (_data$images$ = data.images[0]) === null || _data$images$ === void 0 ? void 0 : _data$images$.src),
    style: {
      margin: '0 auto',
      height: '35vh'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  })) : null, __jsx("div", {
    className: _styles_marketplace_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.detail_user,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_marketplace_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.user_avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, __jsx(components_common_Avatar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: 50,
    url: data === null || data === void 0 ? void 0 : (_data$account = data.account) === null || _data$account === void 0 ? void 0 : (_data$account$profile = _data$account.profilePhoto) === null || _data$account$profile === void 0 ? void 0 : _data$account$profile.src,
    text: data === null || data === void 0 ? void 0 : (_data$account2 = data.account) === null || _data$account2 === void 0 ? void 0 : _data$account2.username,
    username: data === null || data === void 0 ? void 0 : (_data$account3 = data.account) === null || _data$account3 === void 0 ? void 0 : _data$account3.username,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _styles_marketplace_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.detail_username,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, (data === null || data === void 0 ? void 0 : (_data$account4 = data.account) === null || _data$account4 === void 0 ? void 0 : _data$account4.firstName) + ' ' + (data === null || data === void 0 ? void 0 : (_data$account5 = data.account) === null || _data$account5 === void 0 ? void 0 : _data$account5.lastName)))), __jsx("div", {
    className: _styles_marketplace_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.detail_title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, "Title: ", data === null || data === void 0 ? void 0 : data.title)), __jsx("div", {
    className: _styles_marketplace_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.detail_category,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, "Category: ", data === null || data === void 0 ? void 0 : data.category)), __jsx("div", {
    className: _styles_marketplace_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.detail_price,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, "Price: $", data === null || data === void 0 ? void 0 : data.price)), __jsx("div", {
    className: _styles_marketplace_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.detail_description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, "Description: $", data === null || data === void 0 ? void 0 : data.description)), __jsx("div", {
    className: _styles_marketplace_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.detail_rating,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, "Rating:"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Rate"], {
    disabled: true,
    defaultValue: data === null || data === void 0 ? void 0 : data.rating,
    style: {
      color: '#fadb14',
      fontSize: '30px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: _styles_marketplace_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.reactions_shares_status,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_marketplace_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.reactions_status,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, likeData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
    placement: "bottom",
    title: getLikeActionUserInfo(likeData),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 15
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
    icon: ['far', 'thumbs-up'],
    size: "1x",
    style: {
      cursor: 'pointer'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, likeData.length))), hahaData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
    placement: "bottom",
    title: getLikeActionUserInfo(hahaData),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 15
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
    icon: ['far', 'grin'],
    size: "1x",
    style: {
      cursor: 'pointer'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  }, hahaData.length))), heartData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
    placement: "bottom",
    title: getLikeActionUserInfo(heartData),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
    icon: ['far', 'heart'],
    size: "1x",
    style: {
      cursor: 'pointer'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }, heartData.length))), wowData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
    placement: "bottom",
    title: getLikeActionUserInfo(wowData),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 15
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
    icon: ['far', 'laugh'],
    size: "1x",
    style: {
      cursor: 'pointer'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  }, wowData.length))), sadData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
    placement: "bottom",
    title: getLikeActionUserInfo(sadData),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 15
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
    icon: ['far', 'frown'],
    size: "1x",
    style: {
      cursor: 'pointer'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }, sadData.length))))), __jsx(components_timeline_Actions__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: data === null || data === void 0 ? void 0 : data.id,
    type: type,
    postRate: data === null || data === void 0 ? void 0 : data.rating,
    comments: data === null || data === void 0 ? void 0 : data.comments,
    onRatePost: onRatePost,
    index: data === null || data === void 0 ? void 0 : data.id,
    likeAction: function likeAction(term) {
      return _likeAction(type, data === null || data === void 0 ? void 0 : data.id, term);
    },
    shareAction: function shareAction() {
      return _shareAction(type, data === null || data === void 0 ? void 0 : data.id);
    },
    actions: function actions() {
      console.log('dfd');
    },
    modal: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }), __jsx(components_timeline_Comments__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: data === null || data === void 0 ? void 0 : data.id,
    type: type,
    data: data === null || data === void 0 ? void 0 : data.comments,
    onUpdateTimeline: onUpdateComments,
    activePostId: function activePostId() {
      return console.log('active  Id');
    },
    modalMode: function modalMode() {
      return console.log('Modal Mode');
    },
    modal: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }));
}

_c = DetailMarketItem;
/* harmony default export */ __webpack_exports__["default"] = (DetailMarketItem);

var _c;

$RefreshReg$(_c, "DetailMarketItem");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9NYXJrZXRwbGFjZS9EZXRhaWxNYXJrZXRJdGVtLmpzIl0sIm5hbWVzIjpbIkRldGFpbE1hcmtldEl0ZW0iLCJkYXRhIiwib25SYXRlUG9zdCIsImxpa2VBY3Rpb24iLCJzaGFyZUFjdGlvbiIsIm9uVXBkYXRlQ29tbWVudHMiLCJ0eXBlIiwiZ2V0TGlrZUFjdGlvblVzZXJJbmZvIiwiZmluYWxEYXRhIiwibWFwIiwiaXRlbSIsImluZGV4IiwiYWNjb3VudCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwibGlrZURhdGEiLCJyZWFjdGlvbnMiLCJmaWx0ZXIiLCJyZWFjdGlvbiIsImhlYXJ0RGF0YSIsIndvd0RhdGEiLCJoYWhhRGF0YSIsInNhZERhdGEiLCJzdHlsZXMiLCJtYXJrZXRfZGV0YWlsQ29udGFpbmVyIiwiaW1hZ2VzIiwibGVuZ3RoIiwiZGV0YWlsX2ltYWdlIiwiQVNTRVRTX1VSTCIsInNyYyIsIm1hcmdpbiIsImhlaWdodCIsImRldGFpbF91c2VyIiwidXNlcl9hdmF0YXIiLCJwcm9maWxlUGhvdG8iLCJ1c2VybmFtZSIsImRldGFpbF91c2VybmFtZSIsImRldGFpbF90aXRsZSIsInRpdGxlIiwiZGV0YWlsX2NhdGVnb3J5IiwiY2F0ZWdvcnkiLCJkZXRhaWxfcHJpY2UiLCJwcmljZSIsImRldGFpbF9kZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uIiwiZGV0YWlsX3JhdGluZyIsInJhdGluZyIsImNvbG9yIiwiZm9udFNpemUiLCJyZWFjdGlvbnNfc2hhcmVzX3N0YXR1cyIsInJlYWN0aW9uc19zdGF0dXMiLCJjdXJzb3IiLCJpZCIsImNvbW1lbnRzIiwidGVybSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxnQkFB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bkQsVUFMZDtBQU1FLFNBQUssRUFBRUQsSUFBRixhQUFFQSxJQUFGLHVCQUFFQSxJQUFJLENBQUVtRCxFQU5mO0FBT0UsY0FBVSxFQUFFLG9CQUFDRSxJQUFEO0FBQUEsYUFBVW5ELFdBQVUsQ0FBQ0csSUFBRCxFQUFPTCxJQUFQLGFBQU9BLElBQVAsdUJBQU9BLElBQUksQ0FBRW1ELEVBQWIsRUFBaUJFLElBQWpCLENBQXBCO0FBQUEsS0FQZDtBQVFFLGVBQVcsRUFBRTtBQUFBLGFBQU1sRCxZQUFXLENBQUNFLElBQUQsRUFBT0wsSUFBUCxhQUFPQSxJQUFQLHVCQUFPQSxJQUFJLENBQUVtRCxFQUFiLENBQWpCO0FBQUEsS0FSZjtBQVNFLFdBQU8sRUFDUCxtQkFBTTtBQUFFRyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaO0FBQW9CLEtBVjlCO0FBWUUsU0FBSyxNQVpQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE5RUosRUE0RkksTUFBQyxvRUFBRDtBQUNFLE1BQUUsRUFBRXZELElBQUYsYUFBRUEsSUFBRix1QkFBRUEsSUFBSSxDQUFFbUQsRUFEWjtBQUVFLFFBQUksRUFBRTlDLElBRlI7QUFHRSxRQUFJLEVBQUVMLElBQUYsYUFBRUEsSUFBRix1QkFBRUEsSUFBSSxDQUFFb0QsUUFIZDtBQUlFLG9CQUFnQixFQUFFaEQsZ0JBSnBCO0FBS0UsZ0JBQVksRUFBRTtBQUFBLGFBQU1rRCxPQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLENBQU47QUFBQSxLQUxoQjtBQU1FLGFBQVMsRUFBRTtBQUFBLGFBQU1ELE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosQ0FBTjtBQUFBLEtBTmI7QUFPRSxTQUFLLE1BUFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTVGSixDQURGO0FBd0dEOztLQXRIUXhELGdCO0FBd0hNQSwrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tYXJrZXRwbGFjZS40ZTEzMTNkZjNmNDRlY2JlNjQ5NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy9tYXJrZXRwbGFjZS5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyBDYW1lcmFPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgQnV0dG9uLCBVcGxvYWQsIG1lc3NhZ2UsIElucHV0LCBUYWJzLCBSYXRlLCBJbnB1dE51bWJlciwgU2VsZWN0LCBQb3BvdmVyLCBUb29sdGlwIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IEFTU0VUU19VUkwgfSBmcm9tICdjb25maWdzL0FQSSc7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnY29tcG9uZW50cy9jb21tb24vQXZhdGFyJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgQWN0aW9ucyBmcm9tICdjb21wb25lbnRzL3RpbWVsaW5lL0FjdGlvbnMnO1xyXG5pbXBvcnQgQ29tbWVudHMgZnJvbSAnY29tcG9uZW50cy90aW1lbGluZS9Db21tZW50cyc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcblxyXG5cclxuZnVuY3Rpb24gRGV0YWlsTWFya2V0SXRlbSAoeyBkYXRhLCBvblJhdGVQb3N0LCBsaWtlQWN0aW9uLCBzaGFyZUFjdGlvbiwgb25VcGRhdGVDb21tZW50cywgdHlwZSAgfSkge1xyXG5cclxuICAgIGNvbnN0IGdldExpa2VBY3Rpb25Vc2VySW5mbyA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgdmFyIGZpbmFsRGF0YSA9ICcnO1xyXG4gICAgICAgIGRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgZmluYWxEYXRhID0gZmluYWxEYXRhICsgJyAnICsgaXRlbS5hY2NvdW50LmZpcnN0TmFtZSArICcnICsgaXRlbS5hY2NvdW50Lmxhc3ROYW1lIDtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiBmaW5hbERhdGE7XHJcbiAgICB9XHJcbiAgIGNvbnN0IGxpa2VEYXRhID0gZGF0YT8ucmVhY3Rpb25zPyBkYXRhPy5yZWFjdGlvbnM/LmZpbHRlcihpdGVtID0+IGl0ZW0ucmVhY3Rpb24gPT0gJ0xJS0UnKTpbXTtcclxuICAgY29uc3QgaGVhcnREYXRhID0gZGF0YT8ucmVhY3Rpb25zPyBkYXRhPy5yZWFjdGlvbnM/LmZpbHRlcihpdGVtID0+IGl0ZW0ucmVhY3Rpb24gPT0gJ0hFQVJUJyk6W107XHJcbiAgIGNvbnN0IHdvd0RhdGEgPSBkYXRhPy5yZWFjdGlvbnMgPyBkYXRhPy5yZWFjdGlvbnM/LmZpbHRlcihpdGVtID0+IGl0ZW0ucmVhY3Rpb24gPT0gJ1dPVycpOltdO1xyXG4gICBjb25zdCBoYWhhRGF0YSA9IGRhdGE/LnJlYWN0aW9ucyA/IGRhdGE/LnJlYWN0aW9ucz8uZmlsdGVyKGl0ZW0gPT4gaXRlbS5yZWFjdGlvbiA9PSAnSEFIQScpOltdO1xyXG4gICBjb25zdCBzYWREYXRhID0gZGF0YT8ucmVhY3Rpb25zID8gZGF0YT8ucmVhY3Rpb25zPy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlYWN0aW9uID09ICdTQUQnKTpbXTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYXJrZXRfZGV0YWlsQ29udGFpbmVyfT5cclxuICAgICAgICB7ZGF0YT8uaW1hZ2VzLmxlbmd0aCA+IDAgP1xyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbF9pbWFnZX0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX1VSTCtkYXRhPy5pbWFnZXNbMF0/LnNyY30gc3R5bGU9e3sgbWFyZ2luOiAnMCBhdXRvJywgaGVpZ2h0OiAnMzV2aCd9fS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDpudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsX3VzZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyX2F2YXRhcn0+XHJcbiAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICBzaXplPXs1MH1cclxuICAgICAgICAgICAgICB1cmw9e2RhdGE/LmFjY291bnQ/LnByb2ZpbGVQaG90bz8uc3JjfVxyXG4gICAgICAgICAgICAgIHRleHQ9e2RhdGE/LmFjY291bnQ/LnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgIHVzZXJuYW1lPXtkYXRhPy5hY2NvdW50Py51c2VybmFtZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxfdXNlcm5hbWV9PlxyXG4gICAgICAgICAgICA8c3Bhbj57ZGF0YT8uYWNjb3VudD8uZmlyc3ROYW1lKyAnICcgKyBkYXRhPy5hY2NvdW50Py5sYXN0TmFtZX08L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbF90aXRsZX0+XHJcbiAgICAgICAgICA8c3Bhbj5UaXRsZToge2RhdGE/LnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbF9jYXRlZ29yeX0+XHJcbiAgICAgICAgICA8c3Bhbj5DYXRlZ29yeToge2RhdGE/LmNhdGVnb3J5fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbF9wcmljZX0+XHJcbiAgICAgICAgICA8c3Bhbj5QcmljZTogJHtkYXRhPy5wcmljZX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxfZGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgPHNwYW4+RGVzY3JpcHRpb246ICR7ZGF0YT8uZGVzY3JpcHRpb259PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsX3JhdGluZ30+XHJcbiAgICAgICAgICA8c3Bhbj5SYXRpbmc6PC9zcGFuPlxyXG4gICAgICAgICAgPFJhdGVcclxuICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGF0YT8ucmF0aW5nfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnI2ZhZGIxNCcsIGZvbnRTaXplOiAnMzBweCcgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZWFjdGlvbnNfc2hhcmVzX3N0YXR1c30+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlYWN0aW9uc19zdGF0dXN9PlxyXG4gICAgICAgICAgICB7IGxpa2VEYXRhLmxlbmd0aCA+IDAgJiYgPD5cclxuICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKGxpa2VEYXRhKX0+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ3RodW1icy11cCddfSBzaXplPVwiMXhcIiAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcid9fS8+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57bGlrZURhdGEubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+PC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgeyBoYWhhRGF0YS5sZW5ndGggPiAwICYmIDw+XHJcbiAgICAgICAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9e2dldExpa2VBY3Rpb25Vc2VySW5mbyhoYWhhRGF0YSl9PlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdncmluJ119IHNpemU9XCIxeFwiICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJ319Lz4gXHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57aGFoYURhdGEubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgeyBoZWFydERhdGEubGVuZ3RoID4gMCAmJiA8PiBcclxuICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKGhlYXJ0RGF0YSl9PlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdoZWFydCddfSBzaXplPVwiMXhcIiAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcid9fS8+IFxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e2hlYXJ0RGF0YS5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7IHdvd0RhdGEubGVuZ3RoID4gMCAmJiA8PiBcclxuICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKHdvd0RhdGEpfT5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAnbGF1Z2gnXX0gc2l6ZT1cIjF4XCIgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInfX0vPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3dvd0RhdGEubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgPC8+IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHsgc2FkRGF0YS5sZW5ndGggPiAwICYmIDw+XHJcbiAgICAgICAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9e2dldExpa2VBY3Rpb25Vc2VySW5mbyhzYWREYXRhKX0+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ2Zyb3duJ119IHNpemU9XCIxeFwiICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJ319Lz4gXHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57c2FkRGF0YS5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEFjdGlvbnNcclxuICAgICAgICAgIGlkPXtkYXRhPy5pZH1cclxuICAgICAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgICAgICBwb3N0UmF0ZT17ZGF0YT8ucmF0aW5nfVxyXG4gICAgICAgICAgY29tbWVudHM9e2RhdGE/LmNvbW1lbnRzfVxyXG4gICAgICAgICAgb25SYXRlUG9zdD17b25SYXRlUG9zdH1cclxuICAgICAgICAgIGluZGV4PXtkYXRhPy5pZH1cclxuICAgICAgICAgIGxpa2VBY3Rpb249eyh0ZXJtKSA9PiBsaWtlQWN0aW9uKHR5cGUsIGRhdGE/LmlkLCB0ZXJtKX1cclxuICAgICAgICAgIHNoYXJlQWN0aW9uPXsoKSA9PiBzaGFyZUFjdGlvbih0eXBlLCBkYXRhPy5pZCl9XHJcbiAgICAgICAgICBhY3Rpb25zPXtcclxuICAgICAgICAgICgpID0+IHsgY29uc29sZS5sb2coJ2RmZCcpIH0gXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBtb2RhbFxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPENvbW1lbnRzXHJcbiAgICAgICAgICBpZD17ZGF0YT8uaWR9XHJcbiAgICAgICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICAgICAgZGF0YT17ZGF0YT8uY29tbWVudHN9XHJcbiAgICAgICAgICBvblVwZGF0ZVRpbWVsaW5lPXtvblVwZGF0ZUNvbW1lbnRzfVxyXG4gICAgICAgICAgYWN0aXZlUG9zdElkPXsoKSA9PiBjb25zb2xlLmxvZygnYWN0aXZlICBJZCcpfVxyXG4gICAgICAgICAgbW9kYWxNb2RlPXsoKSA9PiBjb25zb2xlLmxvZygnTW9kYWwgTW9kZScpfVxyXG4gICAgICAgICAgbW9kYWxcclxuICAgICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxNYXJrZXRJdGVtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9