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
      lineNumber: 36,
      columnNumber: 5
    }
  }, (data === null || data === void 0 ? void 0 : data.images.length) > 0 ? __jsx("div", {
    className: _styles_marketplace_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.detail_image,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
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
      lineNumber: 39,
      columnNumber: 11
    }
  })) : null, __jsx("div", {
    className: _styles_marketplace_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.detail_user,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_marketplace_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.user_avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx(components_common_Avatar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: 50,
    url: data === null || data === void 0 ? void 0 : (_data$account = data.account) === null || _data$account === void 0 ? void 0 : (_data$account$profile = _data$account.profilePhoto) === null || _data$account$profile === void 0 ? void 0 : _data$account$profile.src,
    text: data === null || data === void 0 ? void 0 : (_data$account2 = data.account) === null || _data$account2 === void 0 ? void 0 : _data$account2.username,
    username: data === null || data === void 0 ? void 0 : (_data$account3 = data.account) === null || _data$account3 === void 0 ? void 0 : _data$account3.username,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: _styles_marketplace_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.detail_username,
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
  }, (data === null || data === void 0 ? void 0 : (_data$account4 = data.account) === null || _data$account4 === void 0 ? void 0 : _data$account4.firstName) + ' ' + (data === null || data === void 0 ? void 0 : (_data$account5 = data.account) === null || _data$account5 === void 0 ? void 0 : _data$account5.lastName)))), __jsx("div", {
    className: _styles_marketplace_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.detail_title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, "Title: ", data === null || data === void 0 ? void 0 : data.title)), __jsx("div", {
    className: _styles_marketplace_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.detail_category,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, "Category: ", data === null || data === void 0 ? void 0 : data.category)), __jsx("div", {
    className: _styles_marketplace_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.detail_price,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, "Price: $", data === null || data === void 0 ? void 0 : data.price)), __jsx("div", {
    className: _styles_marketplace_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.detail_description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, "Description: $", data === null || data === void 0 ? void 0 : data.description)), __jsx("div", {
    className: _styles_marketplace_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.detail_rating,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
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
      lineNumber: 70,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: _styles_marketplace_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.reactions_shares_status,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_marketplace_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.reactions_status,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, likeData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
    placement: "bottom",
    title: getLikeActionUserInfo(likeData),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
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
      lineNumber: 80,
      columnNumber: 15
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  }, likeData.length))), hahaData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
    placement: "bottom",
    title: getLikeActionUserInfo(hahaData),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
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
      lineNumber: 86,
      columnNumber: 15
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  }, hahaData.length))), heartData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
    placement: "bottom",
    title: getLikeActionUserInfo(heartData),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
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
      lineNumber: 93,
      columnNumber: 15
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 15
    }
  }, heartData.length))), wowData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
    placement: "bottom",
    title: getLikeActionUserInfo(wowData),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
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
      lineNumber: 100,
      columnNumber: 15
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 15
    }
  }, wowData.length))), sadData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
    placement: "bottom",
    title: getLikeActionUserInfo(sadData),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
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
      lineNumber: 107,
      columnNumber: 15
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 15
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
      lineNumber: 114,
      columnNumber: 7
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
      lineNumber: 128,
      columnNumber: 7
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9NYXJrZXRwbGFjZS9EZXRhaWxNYXJrZXRJdGVtLmpzIl0sIm5hbWVzIjpbIkRldGFpbE1hcmtldEl0ZW0iLCJkYXRhIiwib25SYXRlUG9zdCIsImxpa2VBY3Rpb24iLCJzaGFyZUFjdGlvbiIsIm9uVXBkYXRlQ29tbWVudHMiLCJ0eXBlIiwiZ2V0TGlrZUFjdGlvblVzZXJJbmZvIiwiZmluYWxEYXRhIiwibWFwIiwiaXRlbSIsImluZGV4IiwiYWNjb3VudCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwibGlrZURhdGEiLCJyZWFjdGlvbnMiLCJmaWx0ZXIiLCJyZWFjdGlvbiIsImhlYXJ0RGF0YSIsIndvd0RhdGEiLCJoYWhhRGF0YSIsInNhZERhdGEiLCJzdHlsZXMiLCJtYXJrZXRfZGV0YWlsQ29udGFpbmVyIiwiaW1hZ2VzIiwibGVuZ3RoIiwiZGV0YWlsX2ltYWdlIiwiQVNTRVRTX1VSTCIsInNyYyIsIm1hcmdpbiIsImhlaWdodCIsImRldGFpbF91c2VyIiwidXNlcl9hdmF0YXIiLCJwcm9maWxlUGhvdG8iLCJ1c2VybmFtZSIsImRldGFpbF91c2VybmFtZSIsImRldGFpbF90aXRsZSIsInRpdGxlIiwiZGV0YWlsX2NhdGVnb3J5IiwiY2F0ZWdvcnkiLCJkZXRhaWxfcHJpY2UiLCJwcmljZSIsImRldGFpbF9kZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uIiwiZGV0YWlsX3JhdGluZyIsInJhdGluZyIsImNvbG9yIiwiZm9udFNpemUiLCJyZWFjdGlvbnNfc2hhcmVzX3N0YXR1cyIsInJlYWN0aW9uc19zdGF0dXMiLCJjdXJzb3IiLCJpZCIsImNvbW1lbnRzIiwidGVybSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxnQkFB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RCxJQUFGLGFBQUVBLElBQUYsdUJBQUVBLElBQUksQ0FBRW1ELEVBTmY7QUFPRSxjQUFVLEVBQUUsb0JBQUNFLElBQUQ7QUFBQSxhQUFVbkQsV0FBVSxDQUFDRyxJQUFELEVBQU9MLElBQVAsYUFBT0EsSUFBUCx1QkFBT0EsSUFBSSxDQUFFbUQsRUFBYixFQUFpQkUsSUFBakIsQ0FBcEI7QUFBQSxLQVBkO0FBUUUsZUFBVyxFQUFFO0FBQUEsYUFBTWxELFlBQVcsQ0FBQ0UsSUFBRCxFQUFPTCxJQUFQLGFBQU9BLElBQVAsdUJBQU9BLElBQUksQ0FBRW1ELEVBQWIsQ0FBakI7QUFBQSxLQVJmO0FBU0UsV0FBTyxFQUNQLG1CQUFNO0FBQUVHLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVo7QUFBb0IsS0FWOUI7QUFZRSxTQUFLLE1BWlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTlFRixFQTRGRSxNQUFDLG9FQUFEO0FBQ0UsTUFBRSxFQUFFdkQsSUFBRixhQUFFQSxJQUFGLHVCQUFFQSxJQUFJLENBQUVtRCxFQURaO0FBRUUsUUFBSSxFQUFFOUMsSUFGUjtBQUdFLFFBQUksRUFBRUwsSUFBRixhQUFFQSxJQUFGLHVCQUFFQSxJQUFJLENBQUVvRCxRQUhkO0FBSUUsb0JBQWdCLEVBQUVoRCxnQkFKcEI7QUFLRSxnQkFBWSxFQUFFO0FBQUEsYUFBTWtELE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosQ0FBTjtBQUFBLEtBTGhCO0FBTUUsYUFBUyxFQUFFO0FBQUEsYUFBTUQsT0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixDQUFOO0FBQUEsS0FOYjtBQU9FLFNBQUssTUFQUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBNUZGLENBREY7QUF3R0Q7O0tBN0hReEQsZ0I7QUErSE1BLCtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21hcmtldHBsYWNlLjkyYzQ2NzAyZDFmODFjYjBmMWUyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL21hcmtldHBsYWNlLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7IENhbWVyYU91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyBCdXR0b24sIFVwbG9hZCwgbWVzc2FnZSwgSW5wdXQsIFRhYnMsIFJhdGUsIElucHV0TnVtYmVyLCBTZWxlY3QsIFBvcG92ZXIsIFRvb2x0aXAgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgQVNTRVRTX1VSTCB9IGZyb20gJ2NvbmZpZ3MvQVBJJztcclxuaW1wb3J0IEF2YXRhciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9BdmF0YXInO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBBY3Rpb25zIGZyb20gJ2NvbXBvbmVudHMvdGltZWxpbmUvQWN0aW9ucyc7XHJcbmltcG9ydCBDb21tZW50cyBmcm9tICdjb21wb25lbnRzL3RpbWVsaW5lL0NvbW1lbnRzJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuXHJcblxyXG5mdW5jdGlvbiBEZXRhaWxNYXJrZXRJdGVtICh7IFxyXG4gIGRhdGEsIFxyXG4gIG9uUmF0ZVBvc3QsIFxyXG4gIGxpa2VBY3Rpb24sIFxyXG4gIHNoYXJlQWN0aW9uLCBcclxuICBvblVwZGF0ZUNvbW1lbnRzLCBcclxuICB0eXBlICBcclxufSkge1xyXG4gIGNvbnN0IGdldExpa2VBY3Rpb25Vc2VySW5mbyA9IChkYXRhKSA9PiB7XHJcbiAgICB2YXIgZmluYWxEYXRhID0gJyc7XHJcbiAgICBkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgZmluYWxEYXRhID0gZmluYWxEYXRhICsgJyAnICsgaXRlbS5hY2NvdW50LmZpcnN0TmFtZSArICcnICsgaXRlbS5hY2NvdW50Lmxhc3ROYW1lIDtcclxuICAgIH0pXHJcbiAgICByZXR1cm4gZmluYWxEYXRhO1xyXG4gIH1cclxuICBjb25zdCBsaWtlRGF0YSA9IGRhdGE/LnJlYWN0aW9ucz8gZGF0YT8ucmVhY3Rpb25zPy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlYWN0aW9uID09ICdMSUtFJyk6W107XHJcbiAgY29uc3QgaGVhcnREYXRhID0gZGF0YT8ucmVhY3Rpb25zPyBkYXRhPy5yZWFjdGlvbnM/LmZpbHRlcihpdGVtID0+IGl0ZW0ucmVhY3Rpb24gPT0gJ0hFQVJUJyk6W107XHJcbiAgY29uc3Qgd293RGF0YSA9IGRhdGE/LnJlYWN0aW9ucyA/IGRhdGE/LnJlYWN0aW9ucz8uZmlsdGVyKGl0ZW0gPT4gaXRlbS5yZWFjdGlvbiA9PSAnV09XJyk6W107XHJcbiAgY29uc3QgaGFoYURhdGEgPSBkYXRhPy5yZWFjdGlvbnMgPyBkYXRhPy5yZWFjdGlvbnM/LmZpbHRlcihpdGVtID0+IGl0ZW0ucmVhY3Rpb24gPT0gJ0hBSEEnKTpbXTtcclxuICBjb25zdCBzYWREYXRhID0gZGF0YT8ucmVhY3Rpb25zID8gZGF0YT8ucmVhY3Rpb25zPy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlYWN0aW9uID09ICdTQUQnKTpbXTtcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYXJrZXRfZGV0YWlsQ29udGFpbmVyfT5cclxuICAgICAge2RhdGE/LmltYWdlcy5sZW5ndGggPiAwID9cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbF9pbWFnZX0+XHJcbiAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX1VSTCtkYXRhPy5pbWFnZXNbMF0/LnNyY30gc3R5bGU9e3sgbWFyZ2luOiAnMCBhdXRvJywgaGVpZ2h0OiAnMzV2aCd9fS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDpudWxsXHJcbiAgICAgIH1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxfdXNlcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyX2F2YXRhcn0+XHJcbiAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgIHNpemU9ezUwfVxyXG4gICAgICAgICAgICB1cmw9e2RhdGE/LmFjY291bnQ/LnByb2ZpbGVQaG90bz8uc3JjfVxyXG4gICAgICAgICAgICB0ZXh0PXtkYXRhPy5hY2NvdW50Py51c2VybmFtZX1cclxuICAgICAgICAgICAgdXNlcm5hbWU9e2RhdGE/LmFjY291bnQ/LnVzZXJuYW1lfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbF91c2VybmFtZX0+XHJcbiAgICAgICAgICA8c3Bhbj57ZGF0YT8uYWNjb3VudD8uZmlyc3ROYW1lKyAnICcgKyBkYXRhPy5hY2NvdW50Py5sYXN0TmFtZX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbF90aXRsZX0+XHJcbiAgICAgICAgPHNwYW4+VGl0bGU6IHtkYXRhPy50aXRsZX08L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbF9jYXRlZ29yeX0+XHJcbiAgICAgICAgPHNwYW4+Q2F0ZWdvcnk6IHtkYXRhPy5jYXRlZ29yeX08L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbF9wcmljZX0+XHJcbiAgICAgICAgPHNwYW4+UHJpY2U6ICR7ZGF0YT8ucHJpY2V9PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxfZGVzY3JpcHRpb259PlxyXG4gICAgICAgIDxzcGFuPkRlc2NyaXB0aW9uOiAke2RhdGE/LmRlc2NyaXB0aW9ufTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsX3JhdGluZ30+XHJcbiAgICAgICAgPHNwYW4+UmF0aW5nOjwvc3Bhbj5cclxuICAgICAgICA8UmF0ZVxyXG4gICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RhdGE/LnJhdGluZ31cclxuICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICcjZmFkYjE0JywgZm9udFNpemU6ICczMHB4JyB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlYWN0aW9uc19zaGFyZXNfc3RhdHVzfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlYWN0aW9uc19zdGF0dXN9PlxyXG4gICAgICAgICAgeyBsaWtlRGF0YS5sZW5ndGggPiAwICYmIDw+XHJcbiAgICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPXtnZXRMaWtlQWN0aW9uVXNlckluZm8obGlrZURhdGEpfT5cclxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ3RodW1icy11cCddfSBzaXplPVwiMXhcIiAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcid9fS8+XHJcbiAgICAgICAgICAgICAgPHNwYW4+e2xpa2VEYXRhLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvVG9vbHRpcD48Lz5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHsgaGFoYURhdGEubGVuZ3RoID4gMCAmJiA8PlxyXG4gICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKGhhaGFEYXRhKX0+XHJcbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdncmluJ119IHNpemU9XCIxeFwiICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJ319Lz4gXHJcbiAgICAgICAgICAgICAgPHNwYW4+e2hhaGFEYXRhLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB7IGhlYXJ0RGF0YS5sZW5ndGggPiAwICYmIDw+IFxyXG4gICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKGhlYXJ0RGF0YSl9PlxyXG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAnaGVhcnQnXX0gc2l6ZT1cIjF4XCIgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInfX0vPiBcclxuICAgICAgICAgICAgICA8c3Bhbj57aGVhcnREYXRhLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB7IHdvd0RhdGEubGVuZ3RoID4gMCAmJiA8PiBcclxuICAgICAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9e2dldExpa2VBY3Rpb25Vc2VySW5mbyh3b3dEYXRhKX0+XHJcbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdsYXVnaCddfSBzaXplPVwiMXhcIiAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcid9fS8+XHJcbiAgICAgICAgICAgICAgPHNwYW4+e3dvd0RhdGEubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICA8Lz4gXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB7IHNhZERhdGEubGVuZ3RoID4gMCAmJiA8PlxyXG4gICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKHNhZERhdGEpfT5cclxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ2Zyb3duJ119IHNpemU9XCIxeFwiICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJ319Lz4gXHJcbiAgICAgICAgICAgICAgPHNwYW4+e3NhZERhdGEubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxBY3Rpb25zXHJcbiAgICAgICAgaWQ9e2RhdGE/LmlkfVxyXG4gICAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgICAgcG9zdFJhdGU9e2RhdGE/LnJhdGluZ31cclxuICAgICAgICBjb21tZW50cz17ZGF0YT8uY29tbWVudHN9XHJcbiAgICAgICAgb25SYXRlUG9zdD17b25SYXRlUG9zdH1cclxuICAgICAgICBpbmRleD17ZGF0YT8uaWR9XHJcbiAgICAgICAgbGlrZUFjdGlvbj17KHRlcm0pID0+IGxpa2VBY3Rpb24odHlwZSwgZGF0YT8uaWQsIHRlcm0pfVxyXG4gICAgICAgIHNoYXJlQWN0aW9uPXsoKSA9PiBzaGFyZUFjdGlvbih0eXBlLCBkYXRhPy5pZCl9XHJcbiAgICAgICAgYWN0aW9ucz17XHJcbiAgICAgICAgKCkgPT4geyBjb25zb2xlLmxvZygnZGZkJykgfSBcclxuICAgICAgICB9XHJcbiAgICAgICAgbW9kYWxcclxuICAgICAgLz5cclxuICAgICAgPENvbW1lbnRzXHJcbiAgICAgICAgaWQ9e2RhdGE/LmlkfVxyXG4gICAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgICAgZGF0YT17ZGF0YT8uY29tbWVudHN9XHJcbiAgICAgICAgb25VcGRhdGVUaW1lbGluZT17b25VcGRhdGVDb21tZW50c31cclxuICAgICAgICBhY3RpdmVQb3N0SWQ9eygpID0+IGNvbnNvbGUubG9nKCdhY3RpdmUgIElkJyl9XHJcbiAgICAgICAgbW9kYWxNb2RlPXsoKSA9PiBjb25zb2xlLmxvZygnTW9kYWwgTW9kZScpfVxyXG4gICAgICAgIG1vZGFsXHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERldGFpbE1hcmtldEl0ZW07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=