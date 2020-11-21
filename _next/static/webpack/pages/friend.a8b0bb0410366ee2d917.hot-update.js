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
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx(components_header_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(styles.friends_list, styles.sections_content),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, storage.friendsData.map((item, index) => {
    return __jsx("div", {
      className: styles.friend,
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
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
        lineNumber: 79,
        columnNumber: 19
      }
    }), __jsx("div", {
      className: styles.friend_name,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
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
        lineNumber: 86,
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
        lineNumber: 87,
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
        lineNumber: 91,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9GcmllbmQvRnJpZW5kLmpzIl0sIm5hbWVzIjpbIkZyaWVuZHMiLCJhdXRoIiwiYXV0aFNlcnZpY2VzIiwic3RvcmFnZSIsImRpc3BhdGNoIiwidXNlQ29udGV4dCIsIkZyaWVuZHNDb250ZXh0IiwidXNlRWZmZWN0IiwiZ2V0RnJpZW5kcyIsInJlcXVlc3QiLCJBUEkiLCJtZXRob2QiLCJkYXRhIiwidXJsIiwiaGVhZGVycyIsInRva2VuIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsInNldEZyaWVuZHMiLCJyZWZyZXNoVG9rZW4iLCJtZXNzYWdlIiwiZXJyb3IiLCJ1bmZyaWVuZCIsInVzZXJuYW1lIiwic2V0TG9hZGluZyIsImNsYXNzbmFtZXMiLCJzdHlsZXMiLCJmcmllbmRzX2xpc3QiLCJzZWN0aW9uc19jb250ZW50IiwiZnJpZW5kc0RhdGEiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJmcmllbmQiLCJwcm9maWxlUGhvdG8iLCJtYXJnaW5SaWdodCIsImZyaWVuZF9uYW1lIiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInJhdGluZyIsImNvbG9yIiwibWFyZ2luTGVmdCIsInJlcXVpcmVBdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsT0FBVCxDQUFrQjtBQUFFQyxNQUFGO0FBQVFDO0FBQVIsQ0FBbEIsRUFBMEM7QUFBQTs7QUFDdEMsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXNCQyx3REFBVSxDQUFDQyxxRUFBRCxDQUF0QztBQUNBQyx5REFBUyxDQUFDLE1BQU07QUFDWkMsY0FBVTtBQUNiLEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBR0EsUUFBTUEsVUFBVSxHQUFHLFlBQVk7QUFDM0IsUUFB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aWVuZC5hOGIwYmIwNDEwMzY2ZWUyZDkxNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7IHVzZU1vZGFsIH0gZnJvbSAncmVhY3QtbW9kYWwtaG9vayc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyJztcclxuaW1wb3J0IHJlcXVpcmVBdXRoIGZyb20gJ2hlbHBlcnMvaG9jL3JlcXVpcmVBdXRoJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEFQSSBmcm9tICcuLi8uLi9jb25maWdzL0FQSSc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgVXBsb2FkLCBtZXNzYWdlLCBJbnB1dCwgVGFicywgUmF0ZSB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBGcmllbmRzQ29udGV4dCB9IGZyb20gJy4vc3RvcmFnZS9GcmllbmRDb250ZXh0J1xyXG5pbXBvcnQgeyBzZXRMb2FkaW5nLCBzZXRGcmllbmRzIH0gZnJvbSAnLi9hY3Rpb25zJztcclxuXHJcbmZ1bmN0aW9uIEZyaWVuZHMgKHsgYXV0aCwgYXV0aFNlcnZpY2VzIH0pIHtcclxuICAgIGNvbnN0IFtzdG9yYWdlLCBkaXNwYXRjaF0gPSB1c2VDb250ZXh0KEZyaWVuZHNDb250ZXh0KTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0RnJpZW5kcygpO1xyXG4gICAgfSwgW10pXHJcbiAgICBjb25zdCBnZXRGcmllbmRzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIFwib2Zmc2V0XCI6IDAsXHJcbiAgICAgICAgICAgICAgICBcImZpcnN0XCI6IDEwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVybDogJy9hY2NvdW50cy9mcmllbmRzaGlwL2dldC1mcmllbmRzJyxcclxuICAgICAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7Y29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goc2V0RnJpZW5kcyhkYXRhKSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gNDAzKSB7XHJcbiAgICAgICAgICAgIGF1dGhTZXJ2aWNlcy5yZWZyZXNoVG9rZW4oKTtcclxuICAgICAgICAgICAgZ2V0RnJpZW5kcygpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHVuZnJpZW5kID0gYXN5bmMgKHVzZXJuYW1lKSA9PiB7XHJcbiAgICAgICAgaWYodXNlcm5hbWUgIT09ICcnKSB7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKHRydWUpKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgICB1cmw6ICcvYWNjb3VudHMvZnJpZW5kc2hpcCcsXHJcbiAgICAgICAgICAgICAgZGF0YTogeyB1c2VybmFtZTogdXNlcm5hbWUgfSxcclxuICAgICAgICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcbiAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgICAgICAgICBnZXRGcmllbmRzKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCByZXF1ZXN0O1xyXG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcclxuICAgICAgICAgICAgICBzdHlsZXMuZnJpZW5kc19saXN0LFxyXG4gICAgICAgICAgICAgIHN0eWxlcy5zZWN0aW9uc19jb250ZW50XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHtzdG9yYWdlLmZyaWVuZHNEYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mcmllbmR9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT17ODB9XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsPXtpdGVtPy5wcm9maWxlUGhvdG99XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dD17aXRlbT8udXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mcmllbmRfbmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGZvbnRTaXplOiAyMCB9fT57aXRlbS5maXJzdE5hbWV9IHtpdGVtLmxhc3ROYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8UmF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtpdGVtLnJhdGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnI2ZhZGIxNCcsIGZvbnRTaXplOiAnMTVweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzaGFwZT1cInJvdW5kXCIgc2l6ZT1cInNtYWxsXCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogNSB9fSBvbkNsaWNrPXsoKSA9PiB1bmZyaWVuZChpdGVtLnVzZXJuYW1lKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgVW5mcmllbmRcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVxdWlyZUF1dGgoRnJpZW5kcyk7Il0sInNvdXJjZVJvb3QiOiIifQ==