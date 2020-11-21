webpackHotUpdate_N_E("pages/friend",{

/***/ "./containers/Friend/Friend.js":
/*!*************************************!*\
  !*** ./containers/Friend/Friend.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal_hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal-hook */ "./node_modules/react-modal-hook/dist/index.es.js");
/* harmony import */ var components_header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/header/Header */ "./components/header/Header.js");
/* harmony import */ var helpers_hoc_requireAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! helpers/hoc/requireAuth */ "./helpers/hoc/requireAuth.js");
/* harmony import */ var _configs_API__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../configs/API */ "./configs/API.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _storage_FriendContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./storage/FriendContext */ "./containers/Friend/storage/FriendContext.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./actions */ "./containers/Friend/actions/index.js");
/* harmony import */ var _styles_friends_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/friends.module.scss */ "./containers/Friend/styles/friends.module.scss");
/* harmony import */ var _styles_friends_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_friends_module_scss__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "E:\\freeskies_fe_code\\containers\\Friend\\Friend.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











function Friends({
  auth,
  authServices
}) {
  _s();

  const {
    0: storage,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_storage_FriendContext__WEBPACK_IMPORTED_MODULE_7__["FriendsContext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getFriends();
  }, []);

  const getFriends = async () => {
    try {
      const request = await Object(_configs_API__WEBPACK_IMPORTED_MODULE_5__["default"])({
        method: 'post',
        data: {
          "offset": 0,
          "first": 10
        },
        url: '/accounts/friendship/get-friends',
        headers: {
          'x-token': auth.token
        }
      });
      const {
        data,
        status
      } = request;
      console.log(data);

      if (status === 200) {
        dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_8__["setFriends"])(data));
      } else if (status === 403) {
        authServices.refreshToken();
        getFriends();
      } else {
        antd__WEBPACK_IMPORTED_MODULE_6__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const unfriend = async username => {
    if (username !== '') {
      try {
        dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_8__["setLoading"])(true));
        const request = await Object(_configs_API__WEBPACK_IMPORTED_MODULE_5__["default"])({
          method: 'DELETE',
          url: '/accounts/friendship',
          data: {
            username: username
          },
          headers: {
            'x-token': auth.token
          }
        });
        const {
          data,
          status
        } = request;

        if (status === 201) {
          getFriends();
        } else {
          antd__WEBPACK_IMPORTED_MODULE_6__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
        }

        dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_8__["setLoading"])(false));
        return await request;
      } catch (error) {
        dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_8__["setLoading"])(false));
      }
    }
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, __jsx(components_header_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_friends_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.friends_list, _styles_friends_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.sections_content),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, storage.friendsData.map((item, index) => {
    return __jsx("div", {
      className: _styles_friends_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.friend,
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }
    }, __jsx(Avatar, {
      size: 80,
      url: item === null || item === void 0 ? void 0 : item.profilePhoto,
      text: item === null || item === void 0 ? void 0 : item.username,
      style: {
        marginRight: 0
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 19
      }
    }), __jsx("div", {
      className: _styles_friends_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.friend_name,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 19
      }
    }, __jsx("p", {
      style: {
        textAlign: 'left',
        fontSize: 20
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 21
      }
    }, item.firstName, " ", item.lastName), __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Rate"], {
      defaultValue: item.rating,
      style: {
        color: '#fadb14',
        fontSize: '15px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 21
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      type: "primary",
      shape: "round",
      size: "small",
      style: {
        marginLeft: 5
      },
      onClick: () => unfriend(item.username),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 21
      }
    }, "Unfriend")));
  })));
}

_s(Friends, "v9NreppLEhWkK7EGzwLejueLpMc=");

_c = Friends;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(helpers_hoc_requireAuth__WEBPACK_IMPORTED_MODULE_4__["default"])(Friends));

var _c, _c2;

$RefreshReg$(_c, "Friends");
$RefreshReg$(_c2, "%default%");

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

/***/ }),

/***/ "./containers/Friend/styles/friends.module.scss":
/*!******************************************************!*\
  !*** ./containers/Friend/styles/friends.module.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./friends.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./containers/Friend/styles/friends.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./friends.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./containers/Friend/styles/friends.module.scss",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./friends.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./containers/Friend/styles/friends.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./containers/Friend/styles/friends.module.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./containers/Friend/styles/friends.module.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".friends_friends_list__3o_JQ .friends_friend__7Omqr {\n  display: flex;\n}\n\n@media (max-width: 767px) {\n  .friends_friends_list__3o_JQ .friends_friend__7Omqr {\n    display: flex;\n    align-items: center;\n    margin-bottom: 10px;\n  }\n}\n\n.friends_friends_list__3o_JQ .friends_friend__7Omqr .friends_avatar__jtbhB {\n  width: 140px;\n  height: 140px;\n  overflow: hidden;\n  position: relative;\n  border-radius: 5px;\n  background: #cccccc25;\n}\n\n@media (max-width: 767px) {\n  .friends_friends_list__3o_JQ .friends_friend__7Omqr .friends_avatar__jtbhB {\n    width: 60px;\n    height: 60px;\n    border-radius: 50%;\n  }\n}\n\n.friends_friends_list__3o_JQ .friends_friend__7Omqr .friends_avatar__jtbhB img {\n  width: 100%;\n  height: auto;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.friends_friends_list__3o_JQ .friends_friend__7Omqr .friends_friend_name__nRueN {\n  font-size: 0.9em;\n  text-align: center;\n  padding: 0.5em 0.2em;\n}\n\n@media (max-width: 767px) {\n  .friends_friends_list__3o_JQ .friends_friend__7Omqr .friends_friend_name__nRueN {\n    padding-left: 0.8em;\n  }\n}\n\n.friends_sections_content__3dw5c {\n  padding: 0 15px 15px 15px;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-columns: repeat(auto-fit, minmax(1fr, 1fr));\n  gap: 10px 10px;\n}\n\n@media (max-width: 767px) {\n  .friends_sections_content__3dw5c {\n    grid-template-columns: 1fr 1fr;\n    height: 180px;\n    overflow-y: auto;\n  }\n}\n\n@media (min-width: 768px) and (max-width: 1073px) {\n  .friends_sections_content__3dw5c {\n    grid-template-columns: 1fr 1fr;\n  }\n}", "",{"version":3,"sources":["E:/freeskies_fe_code/containers/Friend/styles/friends.module.scss","E:/freeskies_fe_code/css/mixins/_responsive.scss"],"names":[],"mappings":"AAGI;EACE,aAAA;AAFN;;ACWE;EDVE;IAGI,aAAA;IACA,mBAAA;IACA,mBAAA;EAAN;AACF;;AAEM;EACE,YAAA;EACA,aAAA;EACA,gBAAA;EACA,kBAAA;EACA,kBAAA;EACA,qBAAA;AAAR;;ACJE;EDFI;IASI,WAAA;IACA,YAAA;IACA,kBAAA;EACR;AACF;;AACQ;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,QAAA;EACA,2BAAA;AACV;;AAGM;EACE,gBAAA;EACA,kBAAA;EACA,oBAAA;AADR;;ACvBE;EDqBI;IAMI,mBAAA;EAAR;AACF;;AAKA;EACA,yBAAA;EACA,aAAA;EACA,kCAAA;EACA,yDAAA;EACA,cAAA;AAFA;;ACpCE;EDiCF;IAQA,8BAAA;IACA,aAAA;IACA,gBAAA;EADE;AACF;;ACrCE;ED2BF;IAcA,8BAAA;EAAE;AACF","file":"friends.module.scss","sourcesContent":["@import 'css/mixins/responsive';\r\n\r\n.friends_list {\r\n    .friend {\r\n      display: flex;\r\n      @include mobile {\r\n        display: flex;\r\n        align-items: center;\r\n        margin-bottom: 10px;\r\n      }\r\n\r\n      .avatar {\r\n        width: 140px;\r\n        height: 140px;\r\n        overflow: hidden;\r\n        position: relative;\r\n        border-radius: 5px;\r\n        background: #cccccc25;\r\n\r\n        @include mobile {\r\n          width: 60px;\r\n          height: 60px;\r\n          border-radius: 50%;\r\n        }\r\n\r\n        img {\r\n          width: 100%;\r\n          height: auto;\r\n          position: absolute;\r\n          top: 50%;\r\n          transform: translateY(-50%);\r\n        }\r\n      }\r\n\r\n      .friend_name {\r\n        font-size: 0.9em;\r\n        text-align: center;\r\n        padding: 0.5em 0.2em;\r\n\r\n        @include mobile {\r\n          padding-left: 0.8em;\r\n        }\r\n      }\r\n    }\r\n}\r\n\r\n.sections_content {\r\npadding: 0 15px 15px 15px;\r\ndisplay: grid;\r\ngrid-template-columns: 1fr 1fr 1fr;\r\ngrid-template-columns: repeat(auto-fit, minmax(1fr, 1fr));\r\ngap: 10px 10px;\r\n\r\n@include mobile {\r\ngrid-template-columns: 1fr 1fr;\r\nheight: 180px;\r\noverflow-y: auto;\r\n}\r\n\r\n@include tablet {\r\ngrid-template-columns: 1fr 1fr;\r\n}\r\n}\r\n","$extra-small-width: 480px;\r\n$mobile-width: 767px;\r\n$tablet-width: 768px;\r\n$desktop-width: 1074px;\r\n$big-desktop-width: 1440px;\r\n\r\n@mixin extraSmall {\r\n  @media (min-width: 20px) and (max-width: #{$extra-small-width - 1px}) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin mobile {\r\n  @media (max-width: #{$mobile-width}) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin tablet {\r\n  @media (min-width: #{$tablet-width}) and (max-width: #{$desktop-width - 1px}) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin desktop {\r\n  @media (min-width: #{$desktop-width}) and (max-width: #{$big-desktop-width - 1px}) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin bigDesktop {\r\n  @media (min-width: #{$big-desktop-width}) {\r\n    @content;\r\n  }\r\n}\r\n"]}]);
// Exports
exports.locals = {
	"friends_list": "friends_friends_list__3o_JQ",
	"friend": "friends_friend__7Omqr",
	"avatar": "friends_avatar__jtbhB",
	"friend_name": "friends_friend_name__nRueN",
	"sections_content": "friends_sections_content__3dw5c"
};
module.exports = exports;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9GcmllbmQvRnJpZW5kLmpzIiwid2VicGFjazovL19OX0UvLi9jb250YWluZXJzL0ZyaWVuZC9zdHlsZXMvZnJpZW5kcy5tb2R1bGUuc2Nzcz9kOTQ2Iiwid2VicGFjazovL19OX0UvLi9jb250YWluZXJzL0ZyaWVuZC9zdHlsZXMvZnJpZW5kcy5tb2R1bGUuc2NzcyJdLCJuYW1lcyI6WyJGcmllbmRzIiwiYXV0aCIsImF1dGhTZXJ2aWNlcyIsInN0b3JhZ2UiLCJkaXNwYXRjaCIsInVzZUNvbnRleHQiLCJGcmllbmRzQ29udGV4dCIsInVzZUVmZmVjdCIsImdldEZyaWVuZHMiLCJyZXF1ZXN0IiwiQVBJIiwibWV0aG9kIiwiZGF0YSIsInVybCIsImhlYWRlcnMiLCJ0b2tlbiIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJzZXRGcmllbmRzIiwicmVmcmVzaFRva2VuIiwibWVzc2FnZSIsImVycm9yIiwidW5mcmllbmQiLCJ1c2VybmFtZSIsInNldExvYWRpbmciLCJjbGFzc25hbWVzIiwic3R5bGVzIiwiZnJpZW5kc19saXN0Iiwic2VjdGlvbnNfY29udGVudCIsImZyaWVuZHNEYXRhIiwibWFwIiwiaXRlbSIsImluZGV4IiwiZnJpZW5kIiwicHJvZmlsZVBob3RvIiwibWFyZ2luUmlnaHQiLCJmcmllbmRfbmFtZSIsInRleHRBbGlnbiIsImZvbnRTaXplIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJyYXRpbmciLCJjb2xvciIsIm1hcmdpbkxlZnQiLCJyZXF1aXJlQXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxPQUFULENBQWtCO0FBQUVDLE1BQUY7QUFBUUM7QUFBUixDQUFsQixFQUEwQztBQUFBOztBQUN0QyxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtB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QUF5QiwyQkFBMkIsK0JBQStCLDJCQUEyQixpREFBaUQseUJBQXlCLEdBQUcsaUJBQWlCLE9BQU8sS0FBSyx1QkFBdUIsMkJBQTJCLGNBQWMsR0FBRyxpQkFBaUIsT0FBTyxLQUFLLHVCQUF1QiwyQkFBMkIsY0FBYyxvQkFBb0IscUJBQXFCLEdBQUcsaUJBQWlCLE9BQU8sS0FBSyx3QkFBd0IsMkJBQTJCLGVBQWUsb0JBQW9CLHlCQUF5QixHQUFHLGlCQUFpQixPQUFPLEtBQUssMkJBQTJCLDJCQUEyQixtQkFBbUIsR0FBRyxpQkFBaUIsT0FBTyxLQUFLLE9BQU87QUFDbjRJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9mcmllbmQuNGU1MjA1ZTQ3MDg3OWJkYzYwOWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyB1c2VNb2RhbCB9IGZyb20gJ3JlYWN0LW1vZGFsLWhvb2snO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlcic7XHJcbmltcG9ydCByZXF1aXJlQXV0aCBmcm9tICdoZWxwZXJzL2hvYy9yZXF1aXJlQXV0aCc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBUEkgZnJvbSAnLi4vLi4vY29uZmlncy9BUEknO1xyXG5pbXBvcnQgeyBCdXR0b24sIFVwbG9hZCwgbWVzc2FnZSwgSW5wdXQsIFRhYnMsIFJhdGUgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgRnJpZW5kc0NvbnRleHQgfSBmcm9tICcuL3N0b3JhZ2UvRnJpZW5kQ29udGV4dCdcclxuaW1wb3J0IHsgc2V0TG9hZGluZywgc2V0RnJpZW5kcyB9IGZyb20gJy4vYWN0aW9ucyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvZnJpZW5kcy5tb2R1bGUuc2NzcydcclxuXHJcbmZ1bmN0aW9uIEZyaWVuZHMgKHsgYXV0aCwgYXV0aFNlcnZpY2VzIH0pIHtcclxuICAgIGNvbnN0IFtzdG9yYWdlLCBkaXNwYXRjaF0gPSB1c2VDb250ZXh0KEZyaWVuZHNDb250ZXh0KTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0RnJpZW5kcygpO1xyXG4gICAgfSwgW10pXHJcbiAgICBjb25zdCBnZXRGcmllbmRzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIFwib2Zmc2V0XCI6IDAsXHJcbiAgICAgICAgICAgICAgICBcImZpcnN0XCI6IDEwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVybDogJy9hY2NvdW50cy9mcmllbmRzaGlwL2dldC1mcmllbmRzJyxcclxuICAgICAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7Y29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goc2V0RnJpZW5kcyhkYXRhKSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gNDAzKSB7XHJcbiAgICAgICAgICAgIGF1dGhTZXJ2aWNlcy5yZWZyZXNoVG9rZW4oKTtcclxuICAgICAgICAgICAgZ2V0RnJpZW5kcygpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHVuZnJpZW5kID0gYXN5bmMgKHVzZXJuYW1lKSA9PiB7XHJcbiAgICAgICAgaWYodXNlcm5hbWUgIT09ICcnKSB7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKHRydWUpKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgICB1cmw6ICcvYWNjb3VudHMvZnJpZW5kc2hpcCcsXHJcbiAgICAgICAgICAgICAgZGF0YTogeyB1c2VybmFtZTogdXNlcm5hbWUgfSxcclxuICAgICAgICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcbiAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgICAgICAgICBnZXRGcmllbmRzKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCByZXF1ZXN0O1xyXG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcclxuICAgICAgICAgICAgICBzdHlsZXMuZnJpZW5kc19saXN0LFxyXG4gICAgICAgICAgICAgIHN0eWxlcy5zZWN0aW9uc19jb250ZW50XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHtzdG9yYWdlLmZyaWVuZHNEYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mcmllbmR9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT17ODB9XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsPXtpdGVtPy5wcm9maWxlUGhvdG99XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dD17aXRlbT8udXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mcmllbmRfbmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGZvbnRTaXplOiAyMCB9fT57aXRlbS5maXJzdE5hbWV9IHtpdGVtLmxhc3ROYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8UmF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtpdGVtLnJhdGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnI2ZhZGIxNCcsIGZvbnRTaXplOiAnMTVweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzaGFwZT1cInJvdW5kXCIgc2l6ZT1cInNtYWxsXCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogNSB9fSBvbkNsaWNrPXsoKSA9PiB1bmZyaWVuZChpdGVtLnVzZXJuYW1lKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgVW5mcmllbmRcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVxdWlyZUF1dGgoRnJpZW5kcyk7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPz9fX25leHRqc19wb3N0Y3NzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vZnJpZW5kcy5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiKSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8/X19uZXh0anNfcG9zdGNzcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL2ZyaWVuZHMubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/P19fbmV4dGpzX3Bvc3Rjc3MhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9mcmllbmRzLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5mcmllbmRzX2ZyaWVuZHNfbGlzdF9fM29fSlEgLmZyaWVuZHNfZnJpZW5kX183T21xciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC5mcmllbmRzX2ZyaWVuZHNfbGlzdF9fM29fSlEgLmZyaWVuZHNfZnJpZW5kX183T21xciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICB9XFxufVxcblxcbi5mcmllbmRzX2ZyaWVuZHNfbGlzdF9fM29fSlEgLmZyaWVuZHNfZnJpZW5kX183T21xciAuZnJpZW5kc19hdmF0YXJfX2p0YmhCIHtcXG4gIHdpZHRoOiAxNDBweDtcXG4gIGhlaWdodDogMTQwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZDogI2NjY2NjYzI1O1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC5mcmllbmRzX2ZyaWVuZHNfbGlzdF9fM29fSlEgLmZyaWVuZHNfZnJpZW5kX183T21xciAuZnJpZW5kc19hdmF0YXJfX2p0YmhCIHtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgfVxcbn1cXG5cXG4uZnJpZW5kc19mcmllbmRzX2xpc3RfXzNvX0pRIC5mcmllbmRzX2ZyaWVuZF9fN09tcXIgLmZyaWVuZHNfYXZhdGFyX19qdGJoQiBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG59XFxuXFxuLmZyaWVuZHNfZnJpZW5kc19saXN0X18zb19KUSAuZnJpZW5kc19mcmllbmRfXzdPbXFyIC5mcmllbmRzX2ZyaWVuZF9uYW1lX19uUnVlTiB7XFxuICBmb250LXNpemU6IDAuOWVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMC41ZW0gMC4yZW07XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLmZyaWVuZHNfZnJpZW5kc19saXN0X18zb19KUSAuZnJpZW5kc19mcmllbmRfXzdPbXFyIC5mcmllbmRzX2ZyaWVuZF9uYW1lX19uUnVlTiB7XFxuICAgIHBhZGRpbmctbGVmdDogMC44ZW07XFxuICB9XFxufVxcblxcbi5mcmllbmRzX3NlY3Rpb25zX2NvbnRlbnRfXzNkdzVjIHtcXG4gIHBhZGRpbmc6IDAgMTVweCAxNXB4IDE1cHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMWZyLCAxZnIpKTtcXG4gIGdhcDogMTBweCAxMHB4O1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC5mcmllbmRzX3NlY3Rpb25zX2NvbnRlbnRfXzNkdzVjIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBoZWlnaHQ6IDE4MHB4O1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDczcHgpIHtcXG4gIC5mcmllbmRzX3NlY3Rpb25zX2NvbnRlbnRfXzNkdzVjIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJFOi9mcmVlc2tpZXNfZmVfY29kZS9jb250YWluZXJzL0ZyaWVuZC9zdHlsZXMvZnJpZW5kcy5tb2R1bGUuc2Nzc1wiLFwiRTovZnJlZXNraWVzX2ZlX2NvZGUvY3NzL21peGlucy9fcmVzcG9uc2l2ZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdJO0VBQ0UsYUFBQTtBQUZOOztBQ1dFO0VEVkU7SUFHSSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxtQkFBQTtFQUFOO0FBQ0Y7O0FBRU07RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBQVI7O0FDSkU7RURGSTtJQVNJLFdBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7RUFDUjtBQUNGOztBQUNRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUNWOztBQUdNO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBRFI7O0FDdkJFO0VEcUJJO0lBTUksbUJBQUE7RUFBUjtBQUNGOztBQUtBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSx5REFBQTtFQUNBLGNBQUE7QUFGQTs7QUNwQ0U7RURpQ0Y7SUFRQSw4QkFBQTtJQUNBLGFBQUE7SUFDQSxnQkFBQTtFQURFO0FBQ0Y7O0FDckNFO0VEMkJGO0lBY0EsOEJBQUE7RUFBRTtBQUNGXCIsXCJmaWxlXCI6XCJmcmllbmRzLm1vZHVsZS5zY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJ2Nzcy9taXhpbnMvcmVzcG9uc2l2ZSc7XFxyXFxuXFxyXFxuLmZyaWVuZHNfbGlzdCB7XFxyXFxuICAgIC5mcmllbmQge1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLmF2YXRhciB7XFxyXFxuICAgICAgICB3aWR0aDogMTQwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDE0MHB4O1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6ICNjY2NjY2MyNTtcXHJcXG5cXHJcXG4gICAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XFxyXFxuICAgICAgICAgIHdpZHRoOiA2MHB4O1xcclxcbiAgICAgICAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGltZyB7XFxyXFxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgdG9wOiA1MCU7XFxyXFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLmZyaWVuZF9uYW1lIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwLjVlbSAwLjJlbTtcXHJcXG5cXHJcXG4gICAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XFxyXFxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMC44ZW07XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uc19jb250ZW50IHtcXHJcXG5wYWRkaW5nOiAwIDE1cHggMTVweCAxNXB4O1xcclxcbmRpc3BsYXk6IGdyaWQ7XFxyXFxuZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXHJcXG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDFmciwgMWZyKSk7XFxyXFxuZ2FwOiAxMHB4IDEwcHg7XFxyXFxuXFxyXFxuQGluY2x1ZGUgbW9iaWxlIHtcXHJcXG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuaGVpZ2h0OiAxODBweDtcXHJcXG5vdmVyZmxvdy15OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5AaW5jbHVkZSB0YWJsZXQge1xcclxcbmdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG59XFxyXFxufVxcclxcblwiLFwiJGV4dHJhLXNtYWxsLXdpZHRoOiA0ODBweDtcXHJcXG4kbW9iaWxlLXdpZHRoOiA3NjdweDtcXHJcXG4kdGFibGV0LXdpZHRoOiA3NjhweDtcXHJcXG4kZGVza3RvcC13aWR0aDogMTA3NHB4O1xcclxcbiRiaWctZGVza3RvcC13aWR0aDogMTQ0MHB4O1xcclxcblxcclxcbkBtaXhpbiBleHRyYVNtYWxsIHtcXHJcXG4gIEBtZWRpYSAobWluLXdpZHRoOiAyMHB4KSBhbmQgKG1heC13aWR0aDogI3skZXh0cmEtc21hbGwtd2lkdGggLSAxcHh9KSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gbW9iaWxlIHtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAjeyRtb2JpbGUtd2lkdGh9KSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gdGFibGV0IHtcXHJcXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyR0YWJsZXQtd2lkdGh9KSBhbmQgKG1heC13aWR0aDogI3skZGVza3RvcC13aWR0aCAtIDFweH0pIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBkZXNrdG9wIHtcXHJcXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRkZXNrdG9wLXdpZHRofSkgYW5kIChtYXgtd2lkdGg6ICN7JGJpZy1kZXNrdG9wLXdpZHRoIC0gMXB4fSkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGJpZ0Rlc2t0b3Age1xcclxcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JGJpZy1kZXNrdG9wLXdpZHRofSkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdfV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiZnJpZW5kc19saXN0XCI6IFwiZnJpZW5kc19mcmllbmRzX2xpc3RfXzNvX0pRXCIsXG5cdFwiZnJpZW5kXCI6IFwiZnJpZW5kc19mcmllbmRfXzdPbXFyXCIsXG5cdFwiYXZhdGFyXCI6IFwiZnJpZW5kc19hdmF0YXJfX2p0YmhCXCIsXG5cdFwiZnJpZW5kX25hbWVcIjogXCJmcmllbmRzX2ZyaWVuZF9uYW1lX19uUnVlTlwiLFxuXHRcInNlY3Rpb25zX2NvbnRlbnRcIjogXCJmcmllbmRzX3NlY3Rpb25zX2NvbnRlbnRfXzNkdzVjXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iXSwic291cmNlUm9vdCI6IiJ9