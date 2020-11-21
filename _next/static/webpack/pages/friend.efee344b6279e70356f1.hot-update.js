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
/* harmony import */ var _components_common_Avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/common/Avatar */ "./components/common/Avatar.js");
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
        authServices.refreshToken(); // getFriends();
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

        if (status === 200) {
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
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx(components_header_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_friends_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.friends_list, _styles_friends_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.sections_content),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, storage.friendsData.length > 0 ? storage.friendsData.map((item, index) => {
    return __jsx("div", {
      className: _styles_friends_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.friend,
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }
    }, __jsx(_components_common_Avatar__WEBPACK_IMPORTED_MODULE_10__["default"], {
      size: 80,
      url: item === null || item === void 0 ? void 0 : item.profilePhoto,
      text: item === null || item === void 0 ? void 0 : item.username,
      style: {
        marginRight: 0
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 19
      }
    }), __jsx("div", {
      className: _styles_friends_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.friend_name,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
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
        lineNumber: 88,
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
        lineNumber: 89,
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
        lineNumber: 93,
        columnNumber: 21
      }
    }, "Unfriend")));
  }) : __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 16
    }
  }, "No Friends")));
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9GcmllbmQvRnJpZW5kLmpzIl0sIm5hbWVzIjpbIkZyaWVuZHMiLCJhdXRoIiwiYXV0aFNlcnZpY2VzIiwic3RvcmFnZSIsImRpc3BhdGNoIiwidXNlQ29udGV4dCIsIkZyaWVuZHNDb250ZXh0IiwidXNlRWZmZWN0IiwiZ2V0RnJpZW5kcyIsInJlcXVlc3QiLCJBUEkiLCJtZXRob2QiLCJkYXRhIiwidXJsIiwiaGVhZGVycyIsInRva2VuIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsInNldEZyaWVuZHMiLCJyZWZyZXNoVG9rZW4iLCJtZXNzYWdlIiwiZXJyb3IiLCJ1bmZyaWVuZCIsInVzZXJuYW1lIiwic2V0TG9hZGluZyIsImNsYXNzbmFtZXMiLCJzdHlsZXMiLCJmcmllbmRzX2xpc3QiLCJzZWN0aW9uc19jb250ZW50IiwiZnJpZW5kc0RhdGEiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJmcmllbmQiLCJwcm9maWxlUGhvdG8iLCJtYXJnaW5SaWdodCIsImZyaWVuZF9uYW1lIiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInJhdGluZyIsImNvbG9yIiwibWFyZ2luTGVmdCIsInJlcXVpcmVBdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE9BQVQsQ0FBa0I7QUFBRUMsTUFBRjtBQUFRQztBQUFSLENBQWxCLEVBQTBDO0FBQUE7O0FBQ3RDLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUFzQkMsd0RBQVUsQ0FBQ0MscUVBQUQsQ0FBdEM7QUFDQUMseURBQVMsQ0FBQyxNQUFNO0FBQ1pDLGNBQVU7QUFDYixHQUZRLEVBRU4sRUFGTSxDQUFUOztBQUdBLFFBQU1BLFVB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QUFBO0FBQUE7QUFBQSxrQkE3QkgsQ0FGSixDQURKO0FBcUNIOztHQTVGUXhCLE87O0tBQUFBLE87QUE4Rk0scUVBQUE4Qyx1RUFBVyxDQUFDOUMsT0FBRCxDQUExQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9mcmllbmQuZWZlZTM0NGI2Mjc5ZTcwMzU2ZjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyB1c2VNb2RhbCB9IGZyb20gJ3JlYWN0LW1vZGFsLWhvb2snO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlcic7XHJcbmltcG9ydCByZXF1aXJlQXV0aCBmcm9tICdoZWxwZXJzL2hvYy9yZXF1aXJlQXV0aCc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBUEkgZnJvbSAnLi4vLi4vY29uZmlncy9BUEknO1xyXG5pbXBvcnQgeyBCdXR0b24sIFVwbG9hZCwgbWVzc2FnZSwgSW5wdXQsIFRhYnMsIFJhdGUgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgRnJpZW5kc0NvbnRleHQgfSBmcm9tICcuL3N0b3JhZ2UvRnJpZW5kQ29udGV4dCdcclxuaW1wb3J0IHsgc2V0TG9hZGluZywgc2V0RnJpZW5kcyB9IGZyb20gJy4vYWN0aW9ucyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvZnJpZW5kcy5tb2R1bGUuc2NzcydcclxuaW1wb3J0IEF2YXRhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9BdmF0YXInO1xyXG5cclxuZnVuY3Rpb24gRnJpZW5kcyAoeyBhdXRoLCBhdXRoU2VydmljZXMgfSkge1xyXG4gICAgY29uc3QgW3N0b3JhZ2UsIGRpc3BhdGNoXSA9IHVzZUNvbnRleHQoRnJpZW5kc0NvbnRleHQpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXRGcmllbmRzKCk7XHJcbiAgICB9LCBbXSlcclxuICAgIGNvbnN0IGdldEZyaWVuZHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgXCJvZmZzZXRcIjogMCxcclxuICAgICAgICAgICAgICAgIFwiZmlyc3RcIjogMTBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdXJsOiAnL2FjY291bnRzL2ZyaWVuZHNoaXAvZ2V0LWZyaWVuZHMnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChzZXRGcmllbmRzKGRhdGEpKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSA0MDMpIHtcclxuICAgICAgICAgICAgYXV0aFNlcnZpY2VzLnJlZnJlc2hUb2tlbigpO1xyXG4gICAgICAgICAgICAvLyBnZXRGcmllbmRzKCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdW5mcmllbmQgPSBhc3luYyAodXNlcm5hbWUpID0+IHtcclxuICAgICAgICBpZih1c2VybmFtZSAhPT0gJycpIHtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcodHJ1ZSkpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICAgIHVybDogJy9hY2NvdW50cy9mcmllbmRzaGlwJyxcclxuICAgICAgICAgICAgICBkYXRhOiB7IHVzZXJuYW1lOiB1c2VybmFtZSB9LFxyXG4gICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgIGdldEZyaWVuZHMoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKTtcclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHJlcXVlc3Q7XHJcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxyXG4gICAgICAgICAgICAgIHN0eWxlcy5mcmllbmRzX2xpc3QsXHJcbiAgICAgICAgICAgICAgc3R5bGVzLnNlY3Rpb25zX2NvbnRlbnRcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAge3N0b3JhZ2UuZnJpZW5kc0RhdGEubGVuZ3RoID4gMD9zdG9yYWdlLmZyaWVuZHNEYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mcmllbmR9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT17ODB9XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsPXtpdGVtPy5wcm9maWxlUGhvdG99XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dD17aXRlbT8udXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mcmllbmRfbmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGZvbnRTaXplOiAyMCB9fT57aXRlbS5maXJzdE5hbWV9IHtpdGVtLmxhc3ROYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8UmF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtpdGVtLnJhdGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnI2ZhZGIxNCcsIGZvbnRTaXplOiAnMTVweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzaGFwZT1cInJvdW5kXCIgc2l6ZT1cInNtYWxsXCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogNSB9fSBvbkNsaWNrPXsoKSA9PiB1bmZyaWVuZChpdGVtLnVzZXJuYW1lKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgVW5mcmllbmRcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSk6PGRpdj5ObyBGcmllbmRzPC9kaXY+fVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlcXVpcmVBdXRoKEZyaWVuZHMpOyJdLCJzb3VyY2VSb290IjoiIn0=