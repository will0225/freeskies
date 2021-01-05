webpackHotUpdate_N_E("pages/marketplace",{

/***/ "./components/profile/MarketSearchSection.js":
/*!***************************************************!*\
  !*** ./components/profile/MarketSearchSection.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MarketSearchSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _styles_market_section_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/market_section.module.scss */ "./components/profile/styles/market_section.module.scss");
/* harmony import */ var _styles_market_section_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_market_section_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_common_Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/common/Avatar */ "./components/common/Avatar.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var components_common_TrimText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/common/TrimText */ "./components/common/TrimText.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var components_timeline_Actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/timeline/Actions */ "./components/timeline/Actions.js");
var _jsxFileName = "D:\\Freeskies-development-\\components\\profile\\MarketSearchSection.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










function MarketSearchSection(_ref) {
  _s();

  var _this = this;

  var data = _ref.data,
      editItem = _ref.editItem,
      deleteMarketItem = _ref.deleteMarketItem,
      _ref$sale = _ref.sale,
      sale = _ref$sale === void 0 ? false : _ref$sale,
      _ref$otherUser = _ref.otherUser,
      otherUser = _ref$otherUser === void 0 ? false : _ref$otherUser,
      getDetailMarketItem = _ref.getDetailMarketItem;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var getLikeActionUserInfo = function getLikeActionUserInfo(data) {
    var finalData = '';
    data.map(function (item, index) {
      finalData = finalData + ' ' + item.account.firstName + '' + item.account.lastName;
    });
    return finalData;
  };

  return __jsx("div", {
    className: _styles_market_section_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.market_sction,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, data.map(function (item, index) {
    var _account$profilePhoto, _item$image;

    var menu = __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Menu"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Menu"].Item, {
      onClick: function onClick() {
        return deleteMarketItem(item.id, sale);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 19
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["DeleteOutlined"], {
      style: {
        fontSize: 20
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 21
      }
    }), " ", __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 64
      }
    }, "Delete Item")), __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Menu"].Item, {
      onClick: function onClick() {
        return editItem(item.id, sale);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 19
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["EditOutlined"], {
      style: {
        fontSize: 20
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 21
      }
    }), " ", __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 63
      }
    }, "Edit Item")));

    var account = item.account,
        createdAt = item.createdAt,
        type = item.type,
        commentsCount = item.commentsCount,
        image = item.image,
        reactions = item.reactions;
    var profileUrl = account !== null && account !== undefined ? "".concat((_account$profilePhoto = account.profilePhoto) === null || _account$profilePhoto === void 0 ? void 0 : _account$profilePhoto.src) : null;
    var fullName = "".concat(account === null || account === void 0 ? void 0 : account.firstName, " ").concat(account === null || account === void 0 ? void 0 : account.lastName);
    var username = account === null || account === void 0 ? void 0 : account.username;
    var likeData = reactions ? reactions === null || reactions === void 0 ? void 0 : reactions.filter(function (item) {
      return item.reaction == 'LIKE';
    }) : [];
    var heartData = reactions ? reactions === null || reactions === void 0 ? void 0 : reactions.filter(function (item) {
      return item.reaction == 'HEART';
    }) : [];
    var wowData = reactions ? reactions === null || reactions === void 0 ? void 0 : reactions.filter(function (item) {
      return item.reaction == 'WOW';
    }) : [];
    var hahaData = reactions ? reactions === null || reactions === void 0 ? void 0 : reactions.filter(function (item) {
      return item.reaction == 'HAHA';
    }) : [];
    var sadData = reactions ? reactions === null || reactions === void 0 ? void 0 : reactions.filter(function (item) {
      return item.reaction == 'SAD';
    }) : [];
    return __jsx("div", {
      className: _styles_market_section_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.market_item,
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _styles_market_section_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.market_item_image,
      onClick: function onClick() {
        getDetailMarketItem(item.id, sale);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "https://freeskies.com/static/".concat(item === null || item === void 0 ? void 0 : (_item$image = item.image) === null || _item$image === void 0 ? void 0 : _item$image.src),
      className: _styles_market_section_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.image,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 25
      }
    }), __jsx("span", {
      className: _styles_market_section_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.price,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 25
      }
    }, item.price ? '$' + item.price : 'Free')), __jsx("div", {
      className: _styles_market_section_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.market_item_model,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 21
      }
    }, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 25
      }
    }, item.title)), __jsx("div", {
      className: _styles_market_section_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.market_item_des,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 21
      }
    }, __jsx(components_common_TrimText__WEBPACK_IMPORTED_MODULE_7__["default"], {
      limit: 50,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 25
      }
    }, item.description)), __jsx("div", {
      className: _styles_market_section_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.market_item_category,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 21
      }
    }, item.category), __jsx("div", {
      className: _styles_market_section_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.reactions_status,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 21
      }
    }, likeData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(likeData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 25
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
      icon: ['far', 'thumbs-up'],
      size: "1x",
      style: {
        cursor: 'pointer'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 29
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 29
      }
    }, likeData.length))), hahaData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(hahaData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 25
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
      icon: ['far', 'grin'],
      size: "1x",
      style: {
        cursor: 'pointer'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 29
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 29
      }
    }, hahaData.length))), heartData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(heartData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 25
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
      icon: ['far', 'heart'],
      size: "1x",
      style: {
        cursor: 'pointer'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 29
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 29
      }
    }, heartData.length))), wowData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(wowData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 25
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
      icon: ['far', 'laugh'],
      size: "1x",
      style: {
        cursor: 'pointer'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 29
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 29
      }
    }, wowData.length))), sadData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Tooltip"], {
      placement: "bottom",
      title: getLikeActionUserInfo(sadData),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 25
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
      icon: ['far', 'frown'],
      size: "1x",
      style: {
        cursor: 'pointer'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 29
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 29
      }
    }, sadData.length)))), __jsx("div", {
      className: _styles_market_section_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.market_detail,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: _styles_market_section_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.market_user_info,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: _styles_market_section_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.avatar,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 29
      }
    }, __jsx(_components_common_Avatar__WEBPACK_IMPORTED_MODULE_5__["default"], {
      text: fullName,
      url: profileUrl,
      size: 45,
      borderSize: 3,
      username: username,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 31
      }
    })), __jsx("div", {
      className: _styles_market_section_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.user_info,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 29
      }
    }, __jsx("p", {
      className: _styles_market_section_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.user_name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 33
      }
    }, " ", fullName), __jsx("p", {
      className: _styles_market_section_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.creat_at,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 33
      }
    }, " ", moment__WEBPACK_IMPORTED_MODULE_9___default()(createdAt).format('MMM DD, YYYY')))), __jsx("div", {
      className: _styles_market_section_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.actionsBar,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 25
      }
    }, __jsx(components_timeline_Actions__WEBPACK_IMPORTED_MODULE_10__["default"], {
      id: item.id,
      type: item.type,
      postRate: item.rating,
      comments: [],
      onRatePost: onRatePost,
      commentsCount: commentsCount,
      index: index,
      likeAction: function (_likeAction) {
        function likeAction(_x) {
          return _likeAction.apply(this, arguments);
        }

        likeAction.toString = function () {
          return _likeAction.toString();
        };

        return likeAction;
      }(function (term) {
        return likeAction(type, item.id, term);
      }),
      shareAction: function (_shareAction) {
        function shareAction() {
          return _shareAction.apply(this, arguments);
        }

        shareAction.toString = function () {
          return _shareAction.toString();
        };

        return shareAction;
      }(function () {
        return shareAction(type, item.id);
      }),
      actions: function actions() {
        console.log('actions');
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 29
      }
    }))), !otherUser ? __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Dropdown"], {
      overlay: menu,
      trigger: ['click'],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: _styles_market_section_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.editWrapper,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 25
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["EditFilled"], {
      style: {
        color: 'white',
        position: 'relative',
        display: 'block',
        marginTop: 4
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 25
      }
    }))) : null);
  }), data.length == 0 ? __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Empty"], {
    image: antd__WEBPACK_IMPORTED_MODULE_6__["Empty"].PRESENTED_IMAGE_SIMPLE,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 13
    }
  }) : null);
}

_s(MarketSearchSection, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = MarketSearchSection;

var _c;

$RefreshReg$(_c, "MarketSearchSection");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlL01hcmtldFNlYXJjaFNlY3Rpb24uanMiXSwibmFtZXMiOlsiTWFya2V0U2VhcmNoU2VjdGlvbiIsImRhdGEiLCJlZGl0SXRlbSIsImRlbGV0ZU1hcmtldEl0ZW0iLCJzYWxlIiwib3RoZXJVc2VyIiwiZ2V0RGV0YWlsTWFya2V0SXRlbSIsInJvdXRlciIsInVzZVJvdXRlciIsImdldExpa2VBY3Rpb25Vc2VySW5mbyIsImZpbmFsRGF0YSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImFjY291bnQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInN0eWxlcyIsIm1hcmtldF9zY3Rpb24iLCJtZW51IiwiaWQiLCJmb250U2l6ZSIsImNyZWF0ZWRBdCIsInR5cGUiLCJjb21tZW50c0NvdW50IiwiaW1hZ2UiLCJyZWFjdGlvbnMiLCJwcm9maWxlVXJsIiwidW5kZWZpbmVkIiwicHJvZmlsZVBob3RvIiwic3JjIiwiZnVsbE5hbWUiLCJ1c2VybmFtZSIsImxpa2VEYXRhIiwiZmlsdGVyIiwicmVhY3Rpb24iLCJoZWFydERhdGEiLCJ3b3dEYXRhIiwiaGFoYURhdGEiLCJzYWREYXRhIiwibWFya2V0X2l0ZW0iLCJtYXJrZXRfaXRlbV9pbWFnZSIsInByaWNlIiwibWFya2V0X2l0ZW1fbW9kZWwiLCJ0aXRsZSIsIm1hcmtldF9pdGVtX2RlcyIsImRlc2NyaXB0aW9uIiwibWFya2V0X2l0ZW1fY2F0ZWdvcnkiLCJjYXRlZ29yeSIsInJlYWN0aW9uc19zdGF0dXMiLCJsZW5ndGgiLCJjdXJzb3IiLCJtYXJrZXRfZGV0YWlsIiwibWFya2V0X3VzZXJfaW5mbyIsImF2YXRhciIsInVzZXJfaW5mbyIsInVzZXJfbmFtZSIsImNyZWF0X2F0IiwibW9tZW50IiwiZm9ybWF0IiwiYWN0aW9uc0JhciIsInJhdGluZyIsIm9uUmF0ZVBvc3QiLCJ0ZXJtIiwibGlrZUFjdGlvbiIsInNoYXJlQWN0aW9uIiwiY29uc29sZSIsImxvZyIsImVkaXRXcmFwcGVyIiwiY29sb3IiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJtYXJnaW5Ub3AiLCJFbXB0eSIsIlBSRVNFTlRFRF9JTUFHRV9TSU1QTEUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsU0FBU0EsbUJBQVQsT0FBcUg7QUFBQTs7QUFBQTs7QUFBQSxNQUF0RkMsSUFBc0YsUUFBdEZBLElBQXNGO0FBQUEsTUFBaEZDLFFBQWdGLFFBQWhGQSxRQUFnRjtBQUFBLE1BQXRFQyxnQkFBc0UsUUFBdEVBLGdCQUFzRTtBQUFBLHVCQUFwREMsSUFBb0Q7QUFBQSxNQUFwREEsSUFBb0QsMEJBQS9DLEtBQStDO0FBQUEsNEJBQXhDQyxTQUF3QztBQUFBLE1BQXhDQSxTQUF3QywrQkFBOUIsS0FBOEI7QUFBQSxNQUF2QkMsbUJBQXVCLFFBQXZCQSxtQkFBdUI7QUFDbEksTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFDQSxNQUFNQyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUNSLElBQUQsRUFBVTtBQUN0QyxRQUFJUyxTQUFTLEdBQUcsRUFBaEI7QUFDQVQsUUFBSSxDQUFDVSxHQUFMLENBQVMsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQ3hCSCxlQUFTLEdBQUdBLFNBQVMsR0FBRyxHQUFaLEdBQWtCRSxJQUFJLENBQUNFLE9BQUwsQ0FBYUMsU0FBL0IsR0FBMkMsRUFBM0MsR0FBZ0RILElBQUksQ0FBQ0UsT0FBTCxDQUFhRSxRQUF6RTtBQUNELEtBRkQ7QUFHQSxXQUFPTixTQUFQO0FBQ0QsR0FORDs7QUFPQSxTQUNFO0FBQUssYUFBUyxFQUFFTyx5RUFBTSxDQUFDQyxhQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tqQixJQUFJLENBQUNVLEdBQUwsQ0FBUyxVQUFDQyxJQUFELEVBQU9D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MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlrZUZpbGxlZCwgTWVzc2FnZUZpbGxlZCwgQ2FtZXJhT3V0bGluZWQsIEVkaXRGaWxsZWQsIERvd25PdXRsaW5lZCwgRGVsZXRlT3V0bGluZWQsICBFZGl0T3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvbWFya2V0X3NlY3Rpb24ubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9uL0F2YXRhcic7XHJcbmltcG9ydCB7IFJvdywgQ29sLCBEcm9wZG93biwgTWVudSwgRW1wdHksIFRvb2x0aXAsIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgVHJpbVRleHQgZnJvbSAnY29tcG9uZW50cy9jb21tb24vVHJpbVRleHQnO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBBY3Rpb25zIGZyb20gJ2NvbXBvbmVudHMvdGltZWxpbmUvQWN0aW9ucyc7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hcmtldFNlYXJjaFNlY3Rpb24oeyBkYXRhLCBlZGl0SXRlbSwgZGVsZXRlTWFya2V0SXRlbSwgc2FsZT1mYWxzZSwgb3RoZXJVc2VyPWZhbHNlLCBnZXREZXRhaWxNYXJrZXRJdGVtIH0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBnZXRMaWtlQWN0aW9uVXNlckluZm8gPSAoZGF0YSkgPT4ge1xyXG4gICAgdmFyIGZpbmFsRGF0YSA9ICcnO1xyXG4gICAgZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgIGZpbmFsRGF0YSA9IGZpbmFsRGF0YSArICcgJyArIGl0ZW0uYWNjb3VudC5maXJzdE5hbWUgKyAnJyArIGl0ZW0uYWNjb3VudC5sYXN0TmFtZSA7XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIGZpbmFsRGF0YTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFya2V0X3NjdGlvbn0+XHJcbiAgICAgICAge2RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBtZW51ID0gKFxyXG4gICAgICAgICAgICAgICAgPE1lbnU+XHJcbiAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gb25DbGljaz17KCkgPT4gZGVsZXRlTWFya2V0SXRlbShpdGVtLmlkLCBzYWxlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPERlbGV0ZU91dGxpbmVkIHN0eWxlPXt7IGZvbnRTaXplOiAyMCB9fS8+IDxzcGFuPkRlbGV0ZSBJdGVtPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBvbkNsaWNrPXsoKSA9PiBlZGl0SXRlbShpdGVtLmlkLCBzYWxlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEVkaXRPdXRsaW5lZCAgc3R5bGU9e3sgZm9udFNpemU6IDIwIH19Lz4gPHNwYW4+RWRpdCBJdGVtPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdmFyIHsgYWNjb3VudCwgY3JlYXRlZEF0LCB0eXBlLCBjb21tZW50c0NvdW50LCBpbWFnZSwgcmVhY3Rpb25zIH0gPSBpdGVtO1xyXG4gICAgICAgICAgICBjb25zdCBwcm9maWxlVXJsID0gYWNjb3VudCAhPT0gbnVsbCAmJiBhY2NvdW50ICE9PSB1bmRlZmluZWQgPyBgJHthY2NvdW50LnByb2ZpbGVQaG90bz8uc3JjfWAgOiBudWxsXHJcbiAgICAgICAgICAgIGNvbnN0IGZ1bGxOYW1lID0gYCR7YWNjb3VudD8uZmlyc3ROYW1lfSAke2FjY291bnQ/Lmxhc3ROYW1lfWA7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJuYW1lID0gYWNjb3VudD8udXNlcm5hbWU7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpa2VEYXRhID0gcmVhY3Rpb25zPyByZWFjdGlvbnM/LmZpbHRlcihpdGVtID0+IGl0ZW0ucmVhY3Rpb24gPT0gJ0xJS0UnKTpbXTtcclxuICAgICAgICAgICAgY29uc3QgaGVhcnREYXRhID0gIHJlYWN0aW9ucz8gcmVhY3Rpb25zPy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlYWN0aW9uID09ICdIRUFSVCcpOltdO1xyXG4gICAgICAgICAgICBjb25zdCB3b3dEYXRhID0gcmVhY3Rpb25zID8gcmVhY3Rpb25zPy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlYWN0aW9uID09ICdXT1cnKTpbXTtcclxuICAgICAgICAgICAgY29uc3QgaGFoYURhdGEgPSByZWFjdGlvbnMgPyByZWFjdGlvbnM/LmZpbHRlcihpdGVtID0+IGl0ZW0ucmVhY3Rpb24gPT0gJ0hBSEEnKTpbXTtcclxuICAgICAgICAgICAgY29uc3Qgc2FkRGF0YSA9IHJlYWN0aW9ucyA/IHJlYWN0aW9ucz8uZmlsdGVyKGl0ZW0gPT4gaXRlbS5yZWFjdGlvbiA9PSAnU0FEJyk6W107XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1hcmtldF9pdGVtfSBrZXk9e2luZGV4fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYXJrZXRfaXRlbV9pbWFnZX0gb25DbGljaz17KCkgPT4geyBnZXREZXRhaWxNYXJrZXRJdGVtKGl0ZW0uaWQsIHNhbGUpO319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpdGVtPy5pbWFnZT8uc3JjfWB9IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnByaWNlfT57aXRlbS5wcmljZT8nJCcraXRlbS5wcmljZTonRnJlZSd9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFya2V0X2l0ZW1fbW9kZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57aXRlbS50aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYXJrZXRfaXRlbV9kZXN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJpbVRleHQgbGltaXQ9ezUwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RyaW1UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFya2V0X2l0ZW1fY2F0ZWdvcnl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5jYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlYWN0aW9uc19zdGF0dXN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxpa2VEYXRhLmxlbmd0aCA+IDAgJiYgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9e2dldExpa2VBY3Rpb25Vc2VySW5mbyhsaWtlRGF0YSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICd0aHVtYnMtdXAnXX0gc2l6ZT1cIjF4XCIgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2xpa2VEYXRhLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD48Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGhhaGFEYXRhLmxlbmd0aCA+IDAgJiYgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9e2dldExpa2VBY3Rpb25Vc2VySW5mbyhoYWhhRGF0YSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdncmluJ119IHNpemU9XCIxeFwiICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJ319Lz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aGFoYURhdGEubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGhlYXJ0RGF0YS5sZW5ndGggPiAwICYmIDw+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKGhlYXJ0RGF0YSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcicsICdoZWFydCddfSBzaXplPVwiMXhcIiAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcid9fS8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2hlYXJ0RGF0YS5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgd293RGF0YS5sZW5ndGggPiAwICYmIDw+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17Z2V0TGlrZUFjdGlvblVzZXJJbmZvKHdvd0RhdGEpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXInLCAnbGF1Z2gnXX0gc2l6ZT1cIjF4XCIgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3dvd0RhdGEubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzYWREYXRhLmxlbmd0aCA+IDAgJiYgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9e2dldExpa2VBY3Rpb25Vc2VySW5mbyhzYWREYXRhKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFyJywgJ2Zyb3duJ119IHNpemU9XCIxeFwiICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJ319Lz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57c2FkRGF0YS5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYXJrZXRfZGV0YWlsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYXJrZXRfdXNlcl9pbmZvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e2Z1bGxOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybD17cHJvZmlsZVVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXs0NX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJTaXplPXszfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lPXt1c2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyX2luZm99PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfbmFtZX0+IHsgZnVsbE5hbWUgfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5jcmVhdF9hdH0+IHsgbW9tZW50KGNyZWF0ZWRBdCkuZm9ybWF0KCdNTU0gREQsIFlZWVknKSB9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvbnNCYXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtpdGVtLnR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdFJhdGU9e2l0ZW0ucmF0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRzPXtbXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJhdGVQb3N0PXtvblJhdGVQb3N0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRzQ291bnQ9e2NvbW1lbnRzQ291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpa2VBY3Rpb249eyh0ZXJtKSA9PiBsaWtlQWN0aW9uKHR5cGUsIGl0ZW0uaWQsIHRlcm0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlQWN0aW9uPXsoKSA9PiBzaGFyZUFjdGlvbih0eXBlLCBpdGVtLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4geyBjb25zb2xlLmxvZygnYWN0aW9ucycpIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgeyFvdGhlclVzZXI/XHJcbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIG92ZXJsYXk9e21lbnV9IHRyaWdnZXI9e1snY2xpY2snXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdFdyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RWRpdEZpbGxlZCBzdHlsZT17eyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiA0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgICAgICAgICA6bnVsbH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAge2RhdGEubGVuZ3RoID09IDA/XHJcbiAgICAgICAgICAgIDxFbXB0eSBpbWFnZT17RW1wdHkuUFJFU0VOVEVEX0lNQUdFX1NJTVBMRX0gLz46bnVsbFxyXG4gICAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==