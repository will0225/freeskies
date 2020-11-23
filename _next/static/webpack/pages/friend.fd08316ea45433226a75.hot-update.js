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
    className: _styles_friends_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.friend_header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, "FRIENDS")), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_friends_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.friends_list, _styles_friends_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.sections_content),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, storage.friendsData.length > 0 ? storage.friendsData.map((item, index) => {
    return __jsx("div", {
      className: _styles_friends_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.friend,
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
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
        lineNumber: 84,
        columnNumber: 19
      }
    }), __jsx("div", {
      className: _styles_friends_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.friend_name,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
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
        lineNumber: 91,
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
        lineNumber: 92,
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
        lineNumber: 96,
        columnNumber: 21
      }
    }, "Unfriend")));
  }) : __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9GcmllbmQvRnJpZW5kLmpzIl0sIm5hbWVzIjpbIkZyaWVuZHMiLCJhdXRoIiwiYXV0aFNlcnZpY2VzIiwic3RvcmFnZSIsImRpc3BhdGNoIiwidXNlQ29udGV4dCIsIkZyaWVuZHNDb250ZXh0IiwidXNlRWZmZWN0IiwiZ2V0RnJpZW5kcyIsInJlcXVlc3QiLCJBUEkiLCJtZXRob2QiLCJkYXRhIiwidXJsIiwiaGVhZGVycyIsInRva2VuIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsInNldEZyaWVuZHMiLCJyZWZyZXNoVG9rZW4iLCJtZXNzYWdlIiwiZXJyb3IiLCJ1bmZyaWVuZCIsInVzZXJuYW1lIiwic2V0TG9hZGluZyIsInN0eWxlcyIsImZyaWVuZF9oZWFkZXIiLCJjbGFzc25hbWVzIiwiZnJpZW5kc19saXN0Iiwic2VjdGlvbnNfY29udGVudCIsImZyaWVuZHNEYXRhIiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImluZGV4IiwiZnJpZW5kIiwicHJvZmlsZVBob3RvIiwibWFyZ2luUmlnaHQiLCJmcmllbmRfbmFtZSIsInRleHRBbGlnbiIsImZvbnRTaXplIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJyYXRpbmciLCJjb2xvciIsIm1hcmdpbkxlZnQiLCJyZXF1aXJlQXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxPQUFULENBQWtCO0FBQUVDLE1BQUY7QUFBUUM7QUFBUixDQUFsQixFQUEwQztBQUFBOztBQUN0QyxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBc0JDLHdEQUFVLENBQUNDLHFFQUFELENBQXRDO0FBQ0FDLHlEQUFTLENBQUMsTUFBTTtBQUNaQyxjQUFVO0FBQ2IsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFHQSxRQUFNQSxVQUFVLEdBQUcsWUFBWTtBQUMzQixRQUFJO0FBQ0YsWUFBTUMsT0FBTyxHQUFHLE1BQU1DLDREQUFHLENBQUM7QUFDeEJDLGNBQU0sRUFBRSxNQURnQjtBQUV4QkMsWUFBSSxFQUFFO0FBQ0Ysb0JBQVUsQ0FEUjtBQUVGLG1CQUFTO0FBRlAsU0FGa0I7QUFNeEJDLFdBQUcsRUFBRSxrQ0FObUI7QUFPeEJDLGVBQU8sRUFBRTtBQUFFLHFCQUFXYixJQUFJLENBQUNjO0FBQWxCO0FBUGUsT0FBRCxDQUF6QjtBQVNBLFlBQU07QUFBRUgsWUFBRjtBQUFRSTtBQUFSLFVBQW1CUCxPQUF6QjtBQUFpQ1EsYUFBTyxDQUFDQyxHQUFSLENBQVlOLElBQVo7O0FBQ2pDLFVBQUlJLE1BQU0sS0FBSyxHQUFmLEVBQW9CO0FBQ2xCWixnQkFBUSxDQUFDZSwyREFBVSxDQUFDUCxJQUFELENBQVgsQ0FBUjtBQUNELE9BRkQsTUFFTyxJQUFJSSxNQUFNLEtBQUssR0FBZixFQUFvQjtBQUN6QmQsb0JBQVksQ0FBQ2tCLFlBQWIsR0FEeUIsQ0FFekI7QUFDRCxPQUhNLE1BR0E7QUFDTEMsb0RBQU8sQ0FBQ0MsS0FBUixDQUFjLENBQUFWLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFUyxPQUFOLEtBQWlCLGlCQUEvQjtBQUNEO0FBRUYsS0FwQkQsQ0FvQkUsT0FBT0MsS0FBUCxFQUFjO0FBQ2RMLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSSxLQUFaO0FBQ0Q7QUFDSixHQXhCRDs7QUEwQkEsUUFBTUMsUUFBUSxHQUFHLE1BQU9DLFFBQVAsSUFBb0I7QUFDakMsUUFBR0EsUUFBUSxLQUFLLEVBQWhCLEVBQW9CO0FBQ2xCLFVBQUk7QUFDRnBCLGdCQUFRLENBQUNxQiwyREFBVSxDQUFDLElBQUQsQ0FBWCxDQUFSO0FBQ0EsY0FBTWhCLE9BQU8sR0FBRyxNQUFNQyw0REFBRyxDQUFDO0FBQ3hCQyxnQkFBTSxFQUFFLFFBRGdCO0FBRXhCRSxhQUFHLEVBQUUsc0JBRm1CO0FBR3hCRCxjQUFJLEVBQUU7QUFBRVksb0JBQVEsRUFBRUE7QUFBWixXQUhrQjtBQUl4QlYsaUJBQU8sRUFBRTtBQUFFLHVCQUFXYixJQUFJLENBQUNjO0FBQWxCO0FBSmUsU0FBRCxDQUF6QjtBQU1BLGNBQU07QUFBRUgsY0FBRjtBQUFRSTtBQUFSLFlBQW1CUCxPQUF6Qjs7QUFDQSxZQUFJTyxNQUFNLEtBQUssR0FBZixFQUFvQjtBQUNqQlIsb0JBQVU7QUFDWixTQUZELE1BRU87QUFDTGEsc0RBQU8sQ0FBQ0MsS0FBUixDQUFjLENBQUFWLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFUyxPQUFOLEtBQWlCLGlCQUEvQjtBQUNEOztBQUNEakIsZ0JBQVEsQ0FBQ3FCLDJEQUFVLENBQUMsS0FBRCxDQUFYLENBQVI7QUFDQSxlQUFPLE1BQU1oQixPQUFiO0FBQ0QsT0FoQkQsQ0FnQkUsT0FBT2EsS0FBUCxFQUFjO0FBQ2RsQixnQkFBUSxDQUFDcUIsMkRBQVUsQ0FBQyxLQUFELENBQVgsQ0FBUjtBQUNEO0FBQ0Y7QUFDSixHQXRCRDs7QUF3QkEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFLLGFBQVMsRUFBRUMsa0VBQU0sQ0FBQ0MsYUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixDQUZKLEVBS0k7QUFDQSxhQUFTLEVBQUVDLGlEQUFVLENBQ25CRixrRUFBTSxDQUFDRyxZQURZLEVBRW5CSCxrRUFBTSxDQUFDSSxnQkFGWSxDQURyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0MzQixPQUFPLENBQUM0QixXQUFSLENBQW9CQyxNQUFwQixHQUE2QixDQUE3QixHQUErQjdCLE9BQU8sQ0FBQzRCLFdBQVIsQ0FBb0JFLEdBQXBCLENBQXdCLENBQUNDLElBQUQsRUFBT0MsS0FBUCxLQUFpQjtBQUN2RSxXQUNFO0FBQUssZUFBUyxFQUFFVCxrRUFBTSxDQUFDVSxNQUF2QjtBQUErQixTQUFHLEVBQUVELEtBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGtFQUFEO0FBQ0UsVUFBSSxFQUFFLEVBRFI7QUFFRSxTQUFHLEVBQUVELElBQUYsYUFBRUEsSUFBRix1QkFBRUEsSUFBSSxDQUFFRyxZQUZiO0FBR0UsVUFBSSxFQUFFSCxJQUFGLGFBQUVBLElBQUYsdUJBQUVBLElBQUksQ0FBRVYsUUFIZDtBQUlFLFdBQUssRUFBRTtBQUFFYyxtQkFBVyxFQUFFO0FBQWYsT0FKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFPRTtBQUFLLGVBQVMsRUFBRVosa0VBQU0sQ0FBQ2EsV0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUcsV0FBSyxFQUFFO0FBQUVDLGlCQUFTLEVBQUUsTUFBYjtBQUFxQkMsZ0JBQVEsRUFBRTtBQUEvQixPQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBZ0RQLElBQUksQ0FBQ1EsU0FBckQsT0FBaUVSLElBQUksQ0FBQ1MsUUFBdEUsQ0FERixFQUVFLE1BQUMseUNBQUQ7QUFDRSxrQkFBWSxFQUFFVCxJQUFJLENBQUNVLE1BRHJCO0FBRUUsV0FBSyxFQUFFO0FBQUVDLGFBQUssRUFBRSxTQUFUO0FBQW9CSixnQkFBUSxFQUFFO0FBQTlCLE9BRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLEVBTUUsTUFBQywyQ0FBRDtBQUFRLFVBQUksRUFBQyxTQUFiO0FBQXVCLFdBQUssRUFBQyxPQUE3QjtBQUFxQyxVQUFJLEVBQUMsT0FBMUM7QUFBa0QsV0FBSyxFQUFFO0FBQUVLLGtCQUFVLEVBQUU7QUFBZCxPQUF6RDtBQUE0RSxhQUFPLEVBQUUsTUFBTXZCLFFBQVEsQ0FBQ1csSUFBSSxDQUFDVixRQUFOLENBQW5HO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTkYsQ0FQRixDQURGO0FBcUJELEdBdEIrQixDQUEvQixHQXNCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTdCSCxDQUxKLENBREo7QUF3Q0g7O0dBL0ZReEIsTzs7S0FBQUEsTztBQWlHTSxxRUFBQStDLHVFQUFXLENBQUMvQyxPQUFELENBQTFCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ZyaWVuZC5mZDA4MzE2ZWE0NTQzMzIyNmE3NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7IHVzZU1vZGFsIH0gZnJvbSAncmVhY3QtbW9kYWwtaG9vayc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyJztcclxuaW1wb3J0IHJlcXVpcmVBdXRoIGZyb20gJ2hlbHBlcnMvaG9jL3JlcXVpcmVBdXRoJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEFQSSBmcm9tICcuLi8uLi9jb25maWdzL0FQSSc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgVXBsb2FkLCBtZXNzYWdlLCBJbnB1dCwgVGFicywgUmF0ZSB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBGcmllbmRzQ29udGV4dCB9IGZyb20gJy4vc3RvcmFnZS9GcmllbmRDb250ZXh0J1xyXG5pbXBvcnQgeyBzZXRMb2FkaW5nLCBzZXRGcmllbmRzIH0gZnJvbSAnLi9hY3Rpb25zJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy9mcmllbmRzLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9uL0F2YXRhcic7XHJcblxyXG5mdW5jdGlvbiBGcmllbmRzICh7IGF1dGgsIGF1dGhTZXJ2aWNlcyB9KSB7XHJcbiAgICBjb25zdCBbc3RvcmFnZSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChGcmllbmRzQ29udGV4dCk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldEZyaWVuZHMoKTtcclxuICAgIH0sIFtdKVxyXG4gICAgY29uc3QgZ2V0RnJpZW5kcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBcIm9mZnNldFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgXCJmaXJzdFwiOiAxMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB1cmw6ICcvYWNjb3VudHMvZnJpZW5kc2hpcC9nZXQtZnJpZW5kcycsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O2NvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldEZyaWVuZHMoZGF0YSkpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IDQwMykge1xyXG4gICAgICAgICAgICBhdXRoU2VydmljZXMucmVmcmVzaFRva2VuKCk7XHJcbiAgICAgICAgICAgIC8vIGdldEZyaWVuZHMoKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB1bmZyaWVuZCA9IGFzeW5jICh1c2VybmFtZSkgPT4ge1xyXG4gICAgICAgIGlmKHVzZXJuYW1lICE9PSAnJykge1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgICAgICAgdXJsOiAnL2FjY291bnRzL2ZyaWVuZHNoaXAnLFxyXG4gICAgICAgICAgICAgIGRhdGE6IHsgdXNlcm5hbWU6IHVzZXJuYW1lIH0sXHJcbiAgICAgICAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG4gICAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgZ2V0RnJpZW5kcygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgcmVxdWVzdDtcclxuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mcmllbmRfaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgIDxoMz5GUklFTkRTPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxyXG4gICAgICAgICAgICAgIHN0eWxlcy5mcmllbmRzX2xpc3QsXHJcbiAgICAgICAgICAgICAgc3R5bGVzLnNlY3Rpb25zX2NvbnRlbnRcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAge3N0b3JhZ2UuZnJpZW5kc0RhdGEubGVuZ3RoID4gMD9zdG9yYWdlLmZyaWVuZHNEYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mcmllbmR9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT17ODB9XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsPXtpdGVtPy5wcm9maWxlUGhvdG99XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dD17aXRlbT8udXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mcmllbmRfbmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGZvbnRTaXplOiAyMCB9fT57aXRlbS5maXJzdE5hbWV9IHtpdGVtLmxhc3ROYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8UmF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtpdGVtLnJhdGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnI2ZhZGIxNCcsIGZvbnRTaXplOiAnMTVweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzaGFwZT1cInJvdW5kXCIgc2l6ZT1cInNtYWxsXCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogNSB9fSBvbkNsaWNrPXsoKSA9PiB1bmZyaWVuZChpdGVtLnVzZXJuYW1lKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgVW5mcmllbmRcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSk6PGRpdj5ObyBGcmllbmRzPC9kaXY+fVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlcXVpcmVBdXRoKEZyaWVuZHMpOyJdLCJzb3VyY2VSb290IjoiIn0=