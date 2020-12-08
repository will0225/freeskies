webpackHotUpdate_N_E("pages/photos",{

/***/ "./containers/Photos/Photos.js":
/*!*************************************!*\
  !*** ./containers/Photos/Photos.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_modal_hook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-modal-hook */ "./node_modules/react-modal-hook/dist/index.es.js");
/* harmony import */ var components_header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/header/Header */ "./components/header/Header.js");
/* harmony import */ var components_profile_PhotosModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/profile/PhotosModal */ "./components/profile/PhotosModal.js");
/* harmony import */ var components_common_profilePhotoModal_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/common/profilePhotoModal.js */ "./components/common/profilePhotoModal.js");
/* harmony import */ var _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/photos.module.scss */ "./containers/Photos/styles/photos.module.scss");
/* harmony import */ var _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var helpers_hoc_requireAuth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! helpers/hoc/requireAuth */ "./helpers/hoc/requireAuth.js");
/* harmony import */ var _storage_PhotoContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./storage/PhotoContext */ "./containers/Photos/storage/PhotoContext.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./actions */ "./containers/Photos/actions/index.js");
/* harmony import */ var _configs_API__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../configs/API */ "./configs/API.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var components_photos_PostingPhotos__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/photos/PostingPhotos */ "./components/photos/PostingPhotos.js");
/* harmony import */ var _components_common_ModalWrapper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/common/ModalWrapper */ "./components/common/ModalWrapper.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");


var _jsxFileName = "E:\\freeskies_fe_code\\containers\\Photos\\Photos.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


















function Photos({
  auth,
  authServices
}) {
  _s();

  const {
    0: storage,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_storage_PhotoContext__WEBPACK_IMPORTED_MODULE_9__["PhotosContext"]);
  const {
    0: postModal,
    1: setPostModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const getPhotos = async token => {
    try {
      const request = await Object(_configs_API__WEBPACK_IMPORTED_MODULE_11__["default"])({
        method: 'post',
        url: '/accounts/photos',
        headers: {
          'x-token': auth.token
        }
      });
      const {
        data,
        status
      } = request;

      if (status === 200) {
        dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_10__["setPhotos"])(data));
      } else if (status === 403) {
        authServices.refreshToken(getPhotos);
      } else {
        antd__WEBPACK_IMPORTED_MODULE_12__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onPosting = async requestData => {
    try {
      const request = await Object(_configs_API__WEBPACK_IMPORTED_MODULE_11__["default"])({
        method: 'post',
        url: '/photos',
        data: requestData,
        headers: {
          'x-token': auth.token
        }
      });
      const {
        data,
        status
      } = request;

      if (status === 201) {
        setPostModal(0);
        dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_10__["setPhotos"])([...storage.photosData, data]));
      } else if (status === 403) {
        authServices.refreshToken(onPosting);
      } else {
        antd__WEBPACK_IMPORTED_MODULE_12__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deletePhoto = async photoId => {
    try {
      const request = await Object(_configs_API__WEBPACK_IMPORTED_MODULE_11__["default"])({
        method: 'delete',
        url: '/photos',
        data: {
          id: photoId
        },
        headers: {
          'x-token': auth.token
        }
      });
      const {
        data,
        status
      } = request;

      if (status === 204) {
        const newPhotos = storage === null || storage === void 0 ? void 0 : storage.photosData.filter(item => item.id !== photoId);
        dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_10__["setPhotos"])(newPhotos));
        antd__WEBPACK_IMPORTED_MODULE_12__["message"].success('Deleted successfully!');
      } else if (status === 403) {
        antd__WEBPACK_IMPORTED_MODULE_12__["message"].error('Please refresh page!');
      } else {
        antd__WEBPACK_IMPORTED_MODULE_12__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const likeAction = async (type, id, term) => {
    var url = '';

    if (type === 'Photo') {
      url = '/photos/react';
    } else if (type === 'VideoClip') {
      url = '/video-clips/react';
    } else if (type === 'Item') {
      url = '/items/react';
    } else if (type === 'Post') {
      url = '/posts/react';
    } else if (type === 'Comment') {
      url = '/comments/react';
    } else if (type === 'Share') {
      url = '/shares/react';
    } else if (type === 'MarketplaceItemForSale') {
      url = '/marketplace/items-for-sale/react';
    } else if (type === 'MarketplaceItemToBuy') {
      url = '/marketplace/items-to-buy/react';
    }

    try {
      const request = await Object(_configs_API__WEBPACK_IMPORTED_MODULE_11__["default"])({
        method: 'post',
        url: url,
        data: {
          reacted: id,
          reaction: term
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
        var newData = storage === null || storage === void 0 ? void 0 : storage.photosData.map((element, index) => {
          if (element.id === id) {
            element.reactions[0].reaction == term;
            return element;
          }

          dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_10__["setPhotos"])(newData));
        });
      } else if (status == 403) {
        authServices.refreshToken();
      } else {
        antd__WEBPACK_IMPORTED_MODULE_12__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
        throw new Error();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const shareAction = async (type, id) => {
    var url = '';

    if (type === 'Photo') {
      url = '/photos/share';
    } else if (type === 'VideoClip') {
      url = '/video-clips/share';
    } else if (type === 'Item') {
      url = '/items/share';
    } else if (type === 'Post') {
      url = '/posts/share';
    } else if (type === 'Comment') {
      url = '/comments/share';
    } else if (type === 'Share') {
      url = '/posts/share';
    } else if (type === 'MarketplaceItemForSale') {
      url = '/marketplace/items-for-sale/share';
    } else if (type === 'MarketplaceItemToBuy') {
      url = '/marketplace/items-to-buy/share';
    }

    try {
      const request = await Object(_configs_API__WEBPACK_IMPORTED_MODULE_11__["default"])({
        method: 'post',
        url: url,
        data: {
          shared: id
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
        antd__WEBPACK_IMPORTED_MODULE_12__["message"].success('Shared successfully');
      } else if (satus == 403) {
        authServices.refreshToken();
      } else {
        antd__WEBPACK_IMPORTED_MODULE_12__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
        throw new Error();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onUpdateTimeline = data => {
    var newPhotos = storage === null || storage === void 0 ? void 0 : storage.photosData.map(element => {
      if (element.id == data.id) {
        let addElement = _objectSpread({
          account: auth.user
        }, data.comments[0]);

        if (typeof element.comments == 'undefined') {
          element['comments'] = [addElement];
        } else {
          element.comments.push(addElement);
        }

        element.commentsCount += data.commentsCount;
        return element;
      }
    });
    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_10__["setPhotos"])(newPhotos));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    getPhotos();
  }, []);
  console.log(storage === null || storage === void 0 ? void 0 : storage.photosData);
  const [showModal, hideModal] = Object(react_modal_hook__WEBPACK_IMPORTED_MODULE_3__["useModal"])(({
    in: open
  }) => __jsx(_storage_PhotoContext__WEBPACK_IMPORTED_MODULE_9__["PhotosProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 5
    }
  }, __jsx(components_profile_PhotosModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Photo detail",
    showModal: open,
    onClose: hideModal,
    data: storage === null || storage === void 0 ? void 0 : storage.photosData.filter(item => item.type == 'Photo'),
    profilePhoto: true,
    likeAction: likeAction,
    shareAction: shareAction,
    onUpdateTimeline: onUpdateTimeline,
    auth: auth,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 7
    }
  })));
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 5
    }
  }, __jsx(components_header_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.container, _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.container_bg, _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.container_radius),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.page_title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 9
    }
  }, "Photos", __jsx(antd__WEBPACK_IMPORTED_MODULE_12__["Button"], {
    style: {
      float: 'right',
      background: 'transparent',
      color: '#0d7ac7'
    },
    onClick: () => setPostModal(true),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 11
    }
  }, "Add Photos/Video")), __jsx("div", {
    className: _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 9
    }
  }, storage === null || storage === void 0 ? void 0 : storage.photosData.map(item => {
    const menu = __jsx(antd__WEBPACK_IMPORTED_MODULE_12__["Menu"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 13
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_12__["Menu"].Item, {
      onClick: () => deletePhoto(item.id),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 15
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_15__["DeleteOutlined"], {
      style: {
        fontSize: 20
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 17
      }
    }), " ", __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 60
      }
    }, "Delete Photo")));

    return __jsx("div", {
      className: _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.photo_container,
      key: item.id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.photo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 15
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(item.blob_tn),
      alt: "",
      style: {
        width: '100%',
        height: '100%'
      },
      onClick: () => showModal(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 17
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_12__["Dropdown"], {
      overlay: menu,
      trigger: ['click'],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.editWrapper,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 19
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_15__["EditFilled"], {
      style: {
        color: 'white',
        position: 'relative',
        display: 'block',
        marginTop: 4
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 21
      }
    })))));
  }))), __jsx(_components_common_ModalWrapper__WEBPACK_IMPORTED_MODULE_14__["default"], {
    title: "Create Photos",
    showModal: postModal,
    onClose: () => setPostModal(false),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 7
    }
  }, __jsx(components_photos_PostingPhotos__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onPosting: onPosting,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 11
    }
  })));
}

_s(Photos, "lpjCu2B7sERX+7IrtLKYNDUuxJs=", false, function () {
  return [react_modal_hook__WEBPACK_IMPORTED_MODULE_3__["useModal"]];
});

_c = Photos;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(helpers_hoc_requireAuth__WEBPACK_IMPORTED_MODULE_8__["default"])(Photos));

var _c, _c2;

$RefreshReg$(_c, "Photos");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9QaG90b3MvUGhvdG9zLmpzIl0sIm5hbWVzIjpbIlBob3RvcyIsImF1dGgiLCJhdXRoU2VydmljZXMiLCJzdG9yYWdlIiwiZGlzcGF0Y2giLCJ1c2VDb250ZXh0IiwiUGhvdG9zQ29udGV4dCIsInBvc3RNb2RhbCIsInNldFBvc3RNb2RhbCIsInVzZVN0YXRlIiwiZ2V0UGhvdG9zIiwidG9rZW4iLCJyZXF1ZXN0IiwiQVBJIiwibWV0aG9kIiwidXJsIiwiaGVhZGVycyIsImRhdGEiLCJzdGF0dXMiLCJzZXRQaG90b3MiLCJyZWZyZXNoVG9rZW4iLCJtZXNzYWdlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwib25Qb3N0aW5nIiwicmVxdWVzdERhdGEiLCJwaG90b3NEYXRhIiwiZGVsZXRlUGhvdG8iLCJwaG90b0lkIiwiaWQiLCJuZXdQaG90b3MiLCJmaWx0ZXIiLCJpdGVtIiwic3VjY2VzcyIsImxpa2VBY3Rpb24iLCJ0eXBlIiwidGVybSIsInJlYWN0ZWQiLCJyZWFjdGlvbiIsIm5ld0RhdGEiLCJtYXAiLCJlbGVtZW50IiwiaW5kZXgiLCJyZWFjdGlvbnMiLCJFcnJvciIsInNoYXJlQWN0aW9uIiwic2hhcmVkIiwic2F0dXMiLCJvblVwZGF0ZVRpbWVsaW5lIiwiYWRkRWxlbWVudCIsImFjY291bnQiLCJ1c2VyIiwiY29tbWVudHMiLCJwdXNoIiwiY29tbWVudHNDb3VudCIsInVzZUVmZmVjdCIsInNob3dNb2RhbCIsImhpZGVNb2RhbCIsInVzZU1vZGFsIiwiaW4iLCJvcGVuIiwiY2xhc3NuYW1lcyIsInN0eWxlcyIsImNvbnRhaW5lciIsImNvbnRhaW5lcl9iZyIsImNvbnRhaW5lcl9yYWRpdXMiLCJwYWdlX3RpdGxlIiwiZmxvYXQiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJjb250ZW50IiwibWVudSIsImZvbnRTaXplIiwicGhvdG9fY29udGFpbmVyIiwicGhvdG8iLCJibG9iX3RuIiwid2lkdGgiLCJoZWlnaHQiLCJlZGl0V3JhcHBlciIsInBvc2l0aW9uIiwiZGlzcGxheSIsIm1hcmdpblRvcCIsInJlcXVpcmVBdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxNQUFULENBQWdCO0FBQUVDLE1BQUY7QUFBUUM7QUFBUixDQUFoQixFQUF3QztBQUFBOztBQUV0QyxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBc0JDLHdEQUFVLENBQUNDLG1FQUFELENBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCQyxzREFBUSxDQUFDLEtBQUQsQ0FBMUM7O0FBRUEsUUFBTUMsU0FBUyxHQUFHLE1BQU9DLEtBQVAsSUFBaUI7QUFDakMsUUFBSTtBQUNGLFlBQU1DLE9BQU8sR0FBRyxNQUFNQyw2REFBRyxDQUFDO0FBQ3hCQyxjQUFNLEVBQUUsTUFEZ0I7QUFFeEJDLFdBQUcsRUFBRSxrQkFGbUI7QUFHeEJDLGVBQU8sRUFBRTtBQUFFLHFCQUFXZixJQUFJLENBQUNVO0FBQWxCO0FBSGUsT0FBRCxDQUF6QjtBQUtBLFlBQU07QUFBRU0sWUFBRjtBQUFRQztBQUFSLFVBQW1CTixPQUF6Qjs7QUFDQSxVQUFJTSxNQUFNLEtBQUssR0FBZixFQUFvQjtBQUNsQmQsZ0JBQVEsQ0FBQ2UsMkRBQVMsQ0FBQ0YsSUFBRCxDQUFWLENBQVI7QUFDRCxPQUZELE1BRU8sSUFBSUMsTUFBTSxLQUFLLEdBQWYsRUFBb0I7QUFDekJoQixvQkFBWSxDQUFDa0IsWUFBYixDQUEwQlYsU0FBMUI7QUFDRCxPQUZNLE1BRUE7QUFDTFcscURBQU8sQ0FBQ0MsS0FBUixDQUFjLENBQUFMLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFSSxPQUFOLEtBQWlCLGlCQUEvQjtBQUNEO0FBRUYsS0FmRCxDQWVFLE9BQU9DLEtBQVAsRUFBYztBQUNkQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNEO0FBQ0YsR0FuQkQ7O0FBcUJBLFFBQU1HLFNBQVMsR0FBRyxNQUFPQyxXQUFQLElBQXVCO0FBQ3ZDLFFBQUk7QUFDRixZQUFNZCxPQUFPLEdBQUcsTUFBTUMsNkRBQUcsQ0FBQztBQUN4QkMsY0FBTSxFQUFFLE1BRGdCO0FBRXhCQyxXQUFHLEVBQUUsU0FGbUI7QUFHeEJFLFlBQUksRUFBRVMsV0FIa0I7QUFJeEJWLGVBQU8sRUFBRTtBQUFFLHFCQUFXZixJQUFJLENBQUNVO0FBQWxCO0FBSmUsT0FBRCxDQUF6QjtBQU1BLFlBQU07QUFBRU0sWUFBRjtBQUFRQztBQUFSLFVBQW1CTixPQUF6Qjs7QUFDQSxVQUFJTSxNQUFNLEtBQUssR0FBZixFQUFvQjtBQUNsQlYsb0JBQVksQ0FBQyxDQUFELENBQVo7QUFDQUosZ0JBQVEsQ0FBQ2UsMkRBQVMsQ0FBQyxDQUFDLEdBQUdoQixPQUFPLENBQUN3QixVQUFaLEVBQXdCVixJQUF4QixDQUFELENBQVYsQ0FBUjtBQUNELE9BSEQsTUFHTyxJQUFJQyxNQUFNLEtBQUssR0FBZixFQUFvQjtBQUN6QmhCLG9CQUFZLENBQUNrQixZQUFiLENBQTBCSyxTQUExQjtBQUNELE9BRk0sTUFFQTtBQUNMSixxREFBTyxDQUFDQyxLQUFSLENBQWMsQ0FBQUwsSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSixZQUFBQSxJQUFJLENBQUVJLE9BQU4sS0FBaUIsaUJBQS9CO0FBQ0Q7QUFFRixLQWpCRCxDQWlCRSxPQUFPQyxLQUFQLEVBQWM7QUFDZEMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDRDtBQUNGLEdBckJEOztBQXVCQSxRQUFNTSxXQUFXLEdBQUcsTUFBT0MsT0FBUCxJQUFtQjtBQUNyQyxRQUFJO0FBQ0YsWUFBTWpCLE9BQU8sR0FBRyxNQUFNQyw2REFBRyxDQUFDO0FBQ3hCQyxjQUFNLEVBQUUsUUFEZ0I7QUFFeEJDLFdBQUcsRUFBRSxTQUZtQjtBQUd4QkUsWUFBSSxFQUFFO0FBQ0phLFlBQUUsRUFBRUQ7QUFEQSxTQUhrQjtBQU14QmIsZUFBTyxFQUFFO0FBQUUscUJBQVdmLElBQUksQ0FBQ1U7QUFBbEI7QUFOZSxPQUFELENBQXpCO0FBUUEsWUFBTTtBQUFFTSxZQUFGO0FBQVFDO0FBQVIsVUFBbUJOLE9BQXpCOztBQUNBLFVBQUlNLE1BQU0sS0FBSyxHQUFmLEVBQW9CO0FBQ2xCLGNBQU1hLFNBQVMsR0FBRzVCLE9BQUgsYUFBR0EsT0FBSCx1QkFBR0EsT0FBTyxDQUFFd0IsVUFBVCxDQUFvQkssTUFBcEIsQ0FBMkJDLElBQUksSUFBSUEsSUFBSSxDQUFDSCxFQUFMLEtBQVlELE9BQS9DLENBQWxCO0FBQ0F6QixnQkFBUSxDQUFDZSwyREFBUyxDQUFDWSxTQUFELENBQVYsQ0FBUjtBQUNBVixxREFBTyxDQUFDYSxPQUFSLENBQWdCLHVCQUFoQjtBQUNELE9BSkQsTUFJTyxJQUFJaEIsTUFBTSxLQUFLLEdBQWYsRUFBb0I7QUFDekJHLHFEQUFPLENBQUNDLEtBQVIsQ0FBYyxzQkFBZDtBQUNELE9BRk0sTUFFQTtBQUNMRCxxREFBTyxDQUFDQyxLQUFSLENBQWMsQ0FBQUwsSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSixZQUFBQSxJQUFJLENBQUVJLE9BQU4sS0FBaUIsaUJBQS9CO0FBQ0Q7QUFFRixLQXBCRCxDQW9CRSxPQUFPQyxLQUFQLEVBQWM7QUFDZEMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDRDtBQUNGLEdBeEJEOztBQTBCQSxRQUFNYSxVQUFVLEdBQUcsT0FBT0MsSUFBUCxFQUFhTixFQUFiLEVBQWlCTyxJQUFqQixLQUEwQjtBQUMzQyxRQUFJdEIsR0FBRyxHQUFHLEVBQVY7O0FBQ0EsUUFBSXFCLElBQUksS0FBSyxPQUFiLEVBQXNCO0FBQ3BCckIsU0FBRyxHQUFHLGVBQU47QUFDRCxLQUZELE1BRU8sSUFBSXFCLElBQUksS0FBSyxXQUFiLEVBQTBCO0FBQy9CckIsU0FBRyxHQUFHLG9CQUFOO0FBQ0QsS0FGTSxNQUVBLElBQUlxQixJQUFJLEtBQUssTUFBYixFQUFxQjtBQUMxQnJCLFNBQUcsR0FBRyxjQUFOO0FBQ0QsS0FGTSxNQUVBLElBQUlxQixJQUFJLEtBQUssTUFBYixFQUFxQjtBQUMxQnJCLFNBQUcsR0FBRyxjQUFOO0FBQ0QsS0FGTSxNQUVBLElBQUlxQixJQUFJLEtBQUssU0FBYixFQUF3QjtBQUM3QnJCLFNBQUcsR0FBRyxpQkFBTjtBQUNELEtBRk0sTUFFQSxJQUFJcUIsSUFBSSxLQUFLLE9BQWIsRUFBc0I7QUFDM0JyQixTQUFHLEdBQUcsZUFBTjtBQUNELEtBRk0sTUFFQSxJQUFJcUIsSUFBSSxLQUFLLHdCQUFiLEVBQXVDO0FBQzVDckIsU0FBRyxHQUFHLG1DQUFOO0FBQ0QsS0FGTSxNQUVBLElBQUlxQixJQUFJLEtBQUssc0JBQWIsRUFBcUM7QUFDMUNyQixTQUFHLEdBQUcsaUNBQU47QUFDRDs7QUFFRCxRQUFJO0FBQ0YsWUFBTUgsT0FBTyxHQUFHLE1BQU1DLDZEQUFHLENBQUM7QUFDeEJDLGNBQU0sRUFBRSxNQURnQjtBQUV4QkMsV0FBRyxFQUFFQSxHQUZtQjtBQUd4QkUsWUFBSSxFQUFFO0FBQ0pxQixpQkFBTyxFQUFFUixFQURMO0FBRUpTLGtCQUFRLEVBQUVGO0FBRk4sU0FIa0I7QUFPeEJyQixlQUFPLEVBQUU7QUFBRSxxQkFBV2YsSUFBSSxDQUFDVTtBQUFsQjtBQVBlLE9BQUQsQ0FBekI7QUFTQSxZQUFNO0FBQUVNLFlBQUY7QUFBUUM7QUFBUixVQUFtQk4sT0FBekI7O0FBQ0EsVUFBSU0sTUFBTSxLQUFLLEdBQWYsRUFBb0I7QUFDbkIsWUFBSXNCLE9BQU8sR0FBSXJDLE9BQUosYUFBSUEsT0FBSix1QkFBSUEsT0FBTyxDQUFFd0IsVUFBVCxDQUFvQmMsR0FBcEIsQ0FBd0IsQ0FBQ0MsT0FBRCxFQUFVQyxLQUFWLEtBQW9CO0FBQ3hELGNBQUdELE9BQU8sQ0FBQ1osRUFBUixLQUFlQSxFQUFsQixFQUFzQjtBQUNwQlksbUJBQU8sQ0FBQ0UsU0FBUixDQUFrQixDQUFsQixFQUFxQkwsUUFBckIsSUFBaUNGLElBQWpDO0FBQ0EsbUJBQU9LLE9BQVA7QUFDRDs7QUFDRHRDLGtCQUFRLENBQUNlLDJEQUFTLENBQUNxQixPQUFELENBQVYsQ0FBUjtBQUNELFNBTmEsQ0FBZjtBQU9BLE9BUkQsTUFRTyxJQUFJdEIsTUFBTSxJQUFJLEdBQWQsRUFBbUI7QUFDeEJoQixvQkFBWSxDQUFDa0IsWUFBYjtBQUNELE9BRk0sTUFFQTtBQUNMQyxxREFBTyxDQUFDQyxLQUFSLENBQWMsQ0FBQUwsSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSixZQUFBQSxJQUFJLENBQUVJLE9BQU4sS0FBaUIsaUJBQS9CO0FBQ0EsY0FBTSxJQUFJd0IsS0FBSixFQUFOO0FBQ0Q7QUFDRixLQXpCRCxDQXlCRSxPQUFPdkIsS0FBUCxFQUFjO0FBQ2RDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0Q7QUFFSixHQWpEQzs7QUFtREEsUUFBTXdCLFdBQVcsR0FBRyxPQUFPVixJQUFQLEVBQWFOLEVBQWIsS0FBb0I7QUFFdEMsUUFBSWYsR0FBRyxHQUFHLEVBQVY7O0FBQ0UsUUFBSXFCLElBQUksS0FBSyxPQUFiLEVBQXNCO0FBQ3BCckIsU0FBRyxHQUFHLGVBQU47QUFDRCxLQUZELE1BRU8sSUFBSXFCLElBQUksS0FBSyxXQUFiLEVBQTBCO0FBQy9CckIsU0FBRyxHQUFHLG9CQUFOO0FBQ0QsS0FGTSxNQUVBLElBQUlxQixJQUFJLEtBQUssTUFBYixFQUFxQjtBQUMxQnJCLFNBQUcsR0FBRyxjQUFOO0FBQ0QsS0FGTSxNQUVBLElBQUlxQixJQUFJLEtBQUssTUFBYixFQUFxQjtBQUMxQnJCLFNBQUcsR0FBRyxjQUFOO0FBQ0QsS0FGTSxNQUVBLElBQUlxQixJQUFJLEtBQUssU0FBYixFQUF3QjtBQUM3QnJCLFNBQUcsR0FBRyxpQkFBTjtBQUNELEtBRk0sTUFFQSxJQUFJcUIsSUFBSSxLQUFLLE9BQWIsRUFBc0I7QUFDM0JyQixTQUFHLEdBQUcsY0FBTjtBQUNELEtBRk0sTUFFQSxJQUFJcUIsSUFBSSxLQUFLLHdCQUFiLEVBQXVDO0FBQzVDckIsU0FBRyxHQUFHLG1DQUFOO0FBQ0QsS0FGTSxNQUVBLElBQUlxQixJQUFJLEtBQUssc0JBQWIsRUFBcUM7QUFDMUNyQixTQUFHLEdBQUcsaUNBQU47QUFDRDs7QUFHSCxRQUFJO0FBQ0YsWUFBTUgsT0FBTyxHQUFHLE1BQU1DLDZEQUFHLENBQUM7QUFDeEJDLGNBQU0sRUFBRSxNQURnQjtBQUV4QkMsV0FBRyxFQUFFQSxHQUZtQjtBQUd4QkUsWUFBSSxFQUFFO0FBQ0o4QixnQkFBTSxFQUFFakI7QUFESixTQUhrQjtBQU14QmQsZUFBTyxFQUFFO0FBQUUscUJBQVdmLElBQUksQ0FBQ1U7QUFBbEI7QUFOZSxPQUFELENBQXpCO0FBUUEsWUFBTTtBQUFFTSxZQUFGO0FBQVFDO0FBQVIsVUFBbUJOLE9BQXpCOztBQUVBLFVBQUlNLE1BQU0sS0FBSyxHQUFmLEVBQW9CO0FBQ2xCRyxxREFBTyxDQUFDYSxPQUFSLENBQWdCLHFCQUFoQjtBQUNELE9BRkQsTUFFTyxJQUFHYyxLQUFLLElBQUksR0FBWixFQUNMO0FBQ0U5QyxvQkFBWSxDQUFDa0IsWUFBYjtBQUNELE9BSEksTUFJRjtBQUNIQyxxREFBTyxDQUFDQyxLQUFSLENBQWMsQ0FBQUwsSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSixZQUFBQSxJQUFJLENBQUVJLE9BQU4sS0FBaUIsaUJBQS9CO0FBQ0EsY0FBTSxJQUFJd0IsS0FBSixFQUFOO0FBQ0Q7QUFDRixLQXJCRCxDQXFCRSxPQUFPdkIsS0FBUCxFQUFjO0FBQ2RDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0Q7QUFDRixHQTlDRDs7QUFnREEsUUFBTTJCLGdCQUFnQixHQUFJaEMsSUFBRCxJQUFVO0FBQ2pDLFFBQUljLFNBQVMsR0FBRzVCLE9BQUgsYUFBR0EsT0FBSCx1QkFBR0EsT0FBTyxDQUFFd0IsVUFBVCxDQUFvQmMsR0FBcEIsQ0FBd0JDLE9BQU8sSUFBSTtBQUNqRCxVQUFHQSxPQUFPLENBQUNaLEVBQVIsSUFBY2IsSUFBSSxDQUFDYSxFQUF0QixFQUEwQjtBQUN4QixZQUFJb0IsVUFBVTtBQUNaQyxpQkFBTyxFQUFFbEQsSUFBSSxDQUFDbUQ7QUFERixXQUVUbkMsSUFBSSxDQUFDb0MsUUFBTCxDQUFjLENBQWQsQ0FGUyxDQUFkOztBQUlBLFlBQUcsT0FBT1gsT0FBTyxDQUFDVyxRQUFmLElBQTJCLFdBQTlCLEVBQTJDO0FBQ3pDWCxpQkFBTyxDQUFDLFVBQUQsQ0FBUCxHQUFzQixDQUFDUSxVQUFELENBQXRCO0FBQ0QsU0FGRCxNQUVPO0FBQ0xSLGlCQUFPLENBQUNXLFFBQVIsQ0FBaUJDLElBQWpCLENBQXNCSixVQUF0QjtBQUNEOztBQUNEUixlQUFPLENBQUNhLGFBQVIsSUFBeUJ0QyxJQUFJLENBQUNzQyxhQUE5QjtBQUNBLGVBQU9iLE9BQVA7QUFDRDtBQUNGLEtBZGUsQ0FBaEI7QUFnQkF0QyxZQUFRLENBQUNlLDJEQUFTLENBQUNZLFNBQUQsQ0FBVixDQUFSO0FBQ0QsR0FsQkQ7O0FBbUJBeUIseURBQVMsQ0FBQyxNQUFNO0FBQ2Q5QyxhQUFTO0FBQ1YsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUdBYSxTQUFPLENBQUNDLEdBQVIsQ0FBWXJCLE9BQVosYUFBWUEsT0FBWix1QkFBWUEsT0FBTyxDQUFFd0IsVUFBckI7QUFDQSxRQUFNLENBQUM4QixTQUFELEVBQVlDLFNBQVosSUFBeUJDLGlFQUFRLENBQUMsQ0FBQztBQUFFQyxNQUFFLEVBQUVDO0FBQU4sR0FBRCxLQUN0QyxNQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNFQUFEO0FBQ0UsU0FBSyxFQUFDLGNBRFI7QUFFRSxhQUFTLEVBQUVBLElBRmI7QUFHRSxXQUFPLEVBQUVILFNBSFg7QUFJRSxRQUFJLEVBQUV2RCxPQUFGLGFBQUVBLE9BQUYsdUJBQUVBLE9BQU8sQ0FBRXdCLFVBQVQsQ0FBb0JLLE1BQXBCLENBQTJCQyxJQUFJLElBQUlBLElBQUksQ0FBQ0csSUFBTCxJQUFhLE9BQWhELENBSlI7QUFLRSxnQkFBWSxNQUxkO0FBTUUsY0FBVSxFQUFFRCxVQU5kO0FBT0UsZUFBVyxFQUFFVyxXQVBmO0FBUUUsb0JBQWdCLEVBQUVHLGdCQVJwQjtBQVNFLFFBQUksRUFBRWhELElBVFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBRHFDLENBQXZDO0FBZ0JBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFDRSxhQUFTLEVBQUU2RCxpREFBVSxDQUNuQkMsaUVBQU0sQ0FBQ0MsU0FEWSxFQUVuQkQsaUVBQU0sQ0FBQ0UsWUFGWSxFQUduQkYsaUVBQU0sQ0FBQ0csZ0JBSFksQ0FEdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFFO0FBQUssYUFBUyxFQUFFSCxpRUFBTSxDQUFDSSxVQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRUUsTUFBQyw0Q0FBRDtBQUFRLFNBQUssRUFBRTtBQUFFQyxXQUFLLEVBQUUsT0FBVDtBQUFrQkMsZ0JBQVUsRUFBRSxhQUE5QjtBQUE2Q0MsV0FBSyxFQUFFO0FBQXBELEtBQWY7QUFBZ0YsV0FBTyxFQUFFLE1BQU05RCxZQUFZLENBQUMsSUFBRCxDQUEzRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZGLENBUkYsRUFZRTtBQUFLLGFBQVMsRUFBRXVELGlFQUFNLENBQUNRLE9BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR3BFLE9BREgsYUFDR0EsT0FESCx1QkFDR0EsT0FBTyxDQUFFd0IsVUFBVCxDQUFvQmMsR0FBcEIsQ0FBeUJSLElBQUQsSUFBVTtBQUNuQyxVQUFNdUMsSUFBSSxHQUNSLE1BQUMsMENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsMENBQUQsQ0FBTSxJQUFOO0FBQVcsYUFBTyxFQUFFLE1BQU01QyxXQUFXLENBQUNLLElBQUksQ0FBQ0gsRUFBTixDQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxpRUFBRDtBQUFnQixXQUFLLEVBQUU7QUFBRTJDLGdCQUFRLEVBQUU7QUFBWixPQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsT0FDNkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFEN0MsQ0FERixDQURGOztBQU9BLFdBQ0U7QUFDRSxlQUFTLEVBQUVWLGlFQUFNLENBQUNXLGVBRHBCO0FBRUUsU0FBRyxFQUFFekMsSUFBSSxDQUFDSCxFQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FJRTtBQUFLLGVBQVMsRUFBRWlDLGlFQUFNLENBQUNZLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLFNBQUcsNkNBQXNDMUMsSUFBSSxDQUFDMkMsT0FBM0MsQ0FBUjtBQUE4RCxTQUFHLEVBQUMsRUFBbEU7QUFBcUUsV0FBSyxFQUFFO0FBQUNDLGFBQUssRUFBRSxNQUFSO0FBQWdCQyxjQUFNLEVBQUU7QUFBeEIsT0FBNUU7QUFBNkcsYUFBTyxFQUFFLE1BQU1yQixTQUFTLEVBQXJJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFLE1BQUMsOENBQUQ7QUFBVSxhQUFPLEVBQUVlLElBQW5CO0FBQXlCLGFBQU8sRUFBRSxDQUFDLE9BQUQsQ0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFFVCxpRUFBTSxDQUFDZ0IsV0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsNkRBQUQ7QUFBWSxXQUFLLEVBQUU7QUFDakJULGFBQUssRUFBRSxPQURVO0FBRWpCVSxnQkFBUSxFQUFFLFVBRk87QUFHakJDLGVBQU8sRUFBRSxPQUhRO0FBSWpCQyxpQkFBUyxFQUFFO0FBSk0sT0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBREYsQ0FGRixDQUpGLENBREY7QUFtQkUsR0EzQkQsQ0FESCxDQVpGLENBRkYsRUE2Q0UsTUFBQyx3RUFBRDtBQUNJLFNBQUssRUFBQyxlQURWO0FBRUksYUFBUyxFQUFFM0UsU0FGZjtBQUdJLFdBQU8sRUFBRSxNQUFNQyxZQUFZLENBQUMsS0FBRCxDQUgvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0ksTUFBQyx3RUFBRDtBQUFlLGFBQVMsRUFBRWlCLFNBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMSixDQTdDRixDQURGO0FBdUREOztHQTVRUXpCLE07VUFxTXdCMkQseUQ7OztLQXJNeEIzRCxNO0FBOFFNLHFFQUFBbUYsdUVBQVcsQ0FBQ25GLE1BQUQsQ0FBMUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGhvdG9zLmQyNTY0MWFmZjkzN2E4YTVkZDIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgdXNlTW9kYWwgfSBmcm9tICdyZWFjdC1tb2RhbC1ob29rJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICdjb21wb25lbnRzL2hlYWRlci9IZWFkZXInO1xyXG5pbXBvcnQgUGhvdG9zTW9kYWwgZnJvbSAnY29tcG9uZW50cy9wcm9maWxlL1Bob3Rvc01vZGFsJztcclxuaW1wb3J0IFByb2ZpbGVQaG90b3NNb2RhbCBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9wcm9maWxlUGhvdG9Nb2RhbC5qcyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvcGhvdG9zLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHJlcXVpcmVBdXRoIGZyb20gJ2hlbHBlcnMvaG9jL3JlcXVpcmVBdXRoJztcclxuaW1wb3J0IHsgUGhvdG9zQ29udGV4dCB9IGZyb20gJy4vc3RvcmFnZS9QaG90b0NvbnRleHQnO1xyXG5pbXBvcnQgeyBzZXRMb2FkaW5nLCBzZXRQaG90bywgc2V0UGhvdG9zIH0gZnJvbSAnLi9hY3Rpb25zJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEFQSSBmcm9tICcuLi8uLi9jb25maWdzL0FQSSc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgVXBsb2FkLCBtZXNzYWdlLCBJbnB1dCwgVGFicywgUmF0ZSwgUm93LCBDb2wsIERyb3Bkb3duLCBNZW51IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCAgUG9zdGluZ1Bob3RvcyAgZnJvbSAnY29tcG9uZW50cy9waG90b3MvUG9zdGluZ1Bob3Rvcyc7XHJcbmltcG9ydCBNb2RhbFdyYXBwZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb24vTW9kYWxXcmFwcGVyJztcclxuaW1wb3J0IHsgQ2FtZXJhT3V0bGluZWQsIEVkaXRGaWxsZWQsIERvd25PdXRsaW5lZCwgRGVsZXRlT3V0bGluZWQgIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyBQaG90b3NQcm92aWRlciB9ICBmcm9tICdjb250YWluZXJzL1Bob3Rvcy9zdG9yYWdlL1Bob3RvQ29udGV4dCc7XHJcblxyXG5mdW5jdGlvbiBQaG90b3MoeyBhdXRoLCBhdXRoU2VydmljZXMgfSkge1xyXG5cclxuICBjb25zdCBbc3RvcmFnZSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChQaG90b3NDb250ZXh0KTtcclxuICBjb25zdCBbcG9zdE1vZGFsLCBzZXRQb3N0TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBnZXRQaG90b3MgPSBhc3luYyAodG9rZW4pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybDogJy9hY2NvdW50cy9waG90b3MnLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goc2V0UGhvdG9zKGRhdGEpKTtcclxuICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IDQwMykge1xyXG4gICAgICAgIGF1dGhTZXJ2aWNlcy5yZWZyZXNoVG9rZW4oZ2V0UGhvdG9zKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25Qb3N0aW5nID0gYXN5bmMgKHJlcXVlc3REYXRhKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6ICcvcGhvdG9zJyxcclxuICAgICAgICBkYXRhOiByZXF1ZXN0RGF0YSxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgIHNldFBvc3RNb2RhbCgwKTtcclxuICAgICAgICBkaXNwYXRjaChzZXRQaG90b3MoWy4uLnN0b3JhZ2UucGhvdG9zRGF0YSwgZGF0YV0pKVxyXG4gICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gNDAzKSB7XHJcbiAgICAgICAgYXV0aFNlcnZpY2VzLnJlZnJlc2hUb2tlbihvblBvc3RpbmcpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBkZWxldGVQaG90byA9IGFzeW5jIChwaG90b0lkKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdkZWxldGUnLFxyXG4gICAgICAgIHVybDogJy9waG90b3MnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGlkOiBwaG90b0lkXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwNCkge1xyXG4gICAgICAgIGNvbnN0IG5ld1Bob3RvcyA9IHN0b3JhZ2U/LnBob3Rvc0RhdGEuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCAhPT0gcGhvdG9JZCApO1xyXG4gICAgICAgIGRpc3BhdGNoKHNldFBob3RvcyhuZXdQaG90b3MpKTtcclxuICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoJ0RlbGV0ZWQgc3VjY2Vzc2Z1bGx5IScpO1xyXG4gICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gNDAzKSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcignUGxlYXNlIHJlZnJlc2ggcGFnZSEnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgbGlrZUFjdGlvbiA9IGFzeW5jICh0eXBlLCBpZCwgdGVybSkgPT4ge1xyXG4gICAgdmFyIHVybCA9ICcnO1xyXG4gICAgaWYgKHR5cGUgPT09ICdQaG90bycpIHtcclxuICAgICAgdXJsID0gJy9waG90b3MvcmVhY3QnO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnVmlkZW9DbGlwJykge1xyXG4gICAgICB1cmwgPSAnL3ZpZGVvLWNsaXBzL3JlYWN0JztcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0l0ZW0nKSB7XHJcbiAgICAgIHVybCA9ICcvaXRlbXMvcmVhY3QnO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnUG9zdCcpIHtcclxuICAgICAgdXJsID0gJy9wb3N0cy9yZWFjdCc7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdDb21tZW50Jykge1xyXG4gICAgICB1cmwgPSAnL2NvbW1lbnRzL3JlYWN0JztcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1NoYXJlJykge1xyXG4gICAgICB1cmwgPSAnL3NoYXJlcy9yZWFjdCc7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdNYXJrZXRwbGFjZUl0ZW1Gb3JTYWxlJykge1xyXG4gICAgICB1cmwgPSAnL21hcmtldHBsYWNlL2l0ZW1zLWZvci1zYWxlL3JlYWN0JztcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ01hcmtldHBsYWNlSXRlbVRvQnV5Jykge1xyXG4gICAgICB1cmwgPSAnL21hcmtldHBsYWNlL2l0ZW1zLXRvLWJ1eS9yZWFjdCc7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgcmVhY3RlZDogaWQsXHJcbiAgICAgICAgICByZWFjdGlvbjogdGVybVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgIHZhciBuZXdEYXRhID0gIHN0b3JhZ2U/LnBob3Rvc0RhdGEubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgaWYoZWxlbWVudC5pZCA9PT0gaWQpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5yZWFjdGlvbnNbMF0ucmVhY3Rpb24gPT0gdGVybTtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBkaXNwYXRjaChzZXRQaG90b3MobmV3RGF0YSkpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09IDQwMykge1xyXG4gICAgICAgIGF1dGhTZXJ2aWNlcy5yZWZyZXNoVG9rZW4oKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4gIGNvbnN0IHNoYXJlQWN0aW9uID0gYXN5bmMgKHR5cGUsIGlkKSA9PiB7XHJcblxyXG4gICAgdmFyIHVybCA9ICcnO1xyXG4gICAgICBpZiAodHlwZSA9PT0gJ1Bob3RvJykge1xyXG4gICAgICAgIHVybCA9ICcvcGhvdG9zL3NoYXJlJztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnVmlkZW9DbGlwJykge1xyXG4gICAgICAgIHVybCA9ICcvdmlkZW8tY2xpcHMvc2hhcmUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdJdGVtJykge1xyXG4gICAgICAgIHVybCA9ICcvaXRlbXMvc2hhcmUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdQb3N0Jykge1xyXG4gICAgICAgIHVybCA9ICcvcG9zdHMvc2hhcmUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdDb21tZW50Jykge1xyXG4gICAgICAgIHVybCA9ICcvY29tbWVudHMvc2hhcmUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdTaGFyZScpIHtcclxuICAgICAgICB1cmwgPSAnL3Bvc3RzL3NoYXJlJztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnTWFya2V0cGxhY2VJdGVtRm9yU2FsZScpIHtcclxuICAgICAgICB1cmwgPSAnL21hcmtldHBsYWNlL2l0ZW1zLWZvci1zYWxlL3NoYXJlJztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnTWFya2V0cGxhY2VJdGVtVG9CdXknKSB7XHJcbiAgICAgICAgdXJsID0gJy9tYXJrZXRwbGFjZS9pdGVtcy10by1idXkvc2hhcmUnO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHNoYXJlZDogaWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcblxyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoJ1NoYXJlZCBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgfSBlbHNlIGlmKHNhdHVzID09IDQwMylcclxuICAgICAgICB7XHJcbiAgICAgICAgICBhdXRoU2VydmljZXMucmVmcmVzaFRva2VuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBvblVwZGF0ZVRpbWVsaW5lID0gKGRhdGEpID0+IHtcclxuICAgIHZhciBuZXdQaG90b3MgPSBzdG9yYWdlPy5waG90b3NEYXRhLm1hcChlbGVtZW50ID0+IHtcclxuICAgICAgaWYoZWxlbWVudC5pZCA9PSBkYXRhLmlkKSB7XHJcbiAgICAgICAgbGV0IGFkZEVsZW1lbnQgPSB7XHJcbiAgICAgICAgICBhY2NvdW50OiBhdXRoLnVzZXIsIFxyXG4gICAgICAgICAgLi4uZGF0YS5jb21tZW50c1swXVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0eXBlb2YgZWxlbWVudC5jb21tZW50cyA9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgZWxlbWVudFsnY29tbWVudHMnXSA9IFthZGRFbGVtZW50XTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZWxlbWVudC5jb21tZW50cy5wdXNoKGFkZEVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbGVtZW50LmNvbW1lbnRzQ291bnQgKz0gZGF0YS5jb21tZW50c0NvdW50O1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGRpc3BhdGNoKHNldFBob3RvcyhuZXdQaG90b3MpKTtcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldFBob3RvcygpO1xyXG4gIH0sIFtdKTtcclxuICBjb25zb2xlLmxvZyhzdG9yYWdlPy5waG90b3NEYXRhKVxyXG4gIGNvbnN0IFtzaG93TW9kYWwsIGhpZGVNb2RhbF0gPSB1c2VNb2RhbCgoeyBpbjogb3BlbiB9KSA9PiAoXHJcbiAgICA8UGhvdG9zUHJvdmlkZXI+XHJcbiAgICAgIDxQaG90b3NNb2RhbFxyXG4gICAgICAgIHRpdGxlPVwiUGhvdG8gZGV0YWlsXCJcclxuICAgICAgICBzaG93TW9kYWw9e29wZW59XHJcbiAgICAgICAgb25DbG9zZT17aGlkZU1vZGFsfVxyXG4gICAgICAgIGRhdGE9e3N0b3JhZ2U/LnBob3Rvc0RhdGEuZmlsdGVyKGl0ZW0gPT4gaXRlbS50eXBlID09ICdQaG90bycpfVxyXG4gICAgICAgIHByb2ZpbGVQaG90b1xyXG4gICAgICAgIGxpa2VBY3Rpb249e2xpa2VBY3Rpb259XHJcbiAgICAgICAgc2hhcmVBY3Rpb249e3NoYXJlQWN0aW9ufVxyXG4gICAgICAgIG9uVXBkYXRlVGltZWxpbmU9e29uVXBkYXRlVGltZWxpbmV9XHJcbiAgICAgICAgYXV0aD17YXV0aH1cclxuICAgICAgLz5cclxuICAgIDwvUGhvdG9zUHJvdmlkZXI+XHJcbiAgKSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXHJcbiAgICAgICAgICBzdHlsZXMuY29udGFpbmVyLFxyXG4gICAgICAgICAgc3R5bGVzLmNvbnRhaW5lcl9iZyxcclxuICAgICAgICAgIHN0eWxlcy5jb250YWluZXJfcmFkaXVzXHJcbiAgICAgICAgKX1cclxuICAgICAgICBcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnZV90aXRsZX0+XHJcbiAgICAgICAgICBQaG90b3NcclxuICAgICAgICAgIDxCdXR0b24gc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcsIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsIGNvbG9yOiAnIzBkN2FjNycgfX0gb25DbGljaz17KCkgPT4gc2V0UG9zdE1vZGFsKHRydWUpfT5BZGQgUGhvdG9zL1ZpZGVvPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgIHtzdG9yYWdlPy5waG90b3NEYXRhLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgbWVudSA9IChcclxuICAgICAgICAgICAgPE1lbnU+XHJcbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBvbkNsaWNrPXsoKSA9PiBkZWxldGVQaG90byhpdGVtLmlkKX0+XHJcbiAgICAgICAgICAgICAgICA8RGVsZXRlT3V0bGluZWQgc3R5bGU9e3sgZm9udFNpemU6IDIwIH19Lz4gPHNwYW4+RGVsZXRlIFBob3RvPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnBob3RvX2NvbnRhaW5lcn1cclxuICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBob3RvfSA+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aXRlbS5ibG9iX3RufWB9IGFsdD1cIlwiIHN0eWxlPXt7d2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJSd9fSBvbkNsaWNrPXsoKSA9PiBzaG93TW9kYWwoKX0vPlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duIG92ZXJsYXk9e21lbnV9IHRyaWdnZXI9e1snY2xpY2snXX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdFdyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxFZGl0RmlsbGVkIHN0eWxlPXt7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDRcclxuICAgICAgICAgICAgICAgICAgICB9fS8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TW9kYWxXcmFwcGVyXHJcbiAgICAgICAgICB0aXRsZT1cIkNyZWF0ZSBQaG90b3NcIlxyXG4gICAgICAgICAgc2hvd01vZGFsPXtwb3N0TW9kYWx9XHJcbiAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRQb3N0TW9kYWwoZmFsc2UpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxQb3N0aW5nUGhvdG9zIG9uUG9zdGluZz17b25Qb3N0aW5nfS8+XHJcbiAgICAgIDwvTW9kYWxXcmFwcGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVxdWlyZUF1dGgoUGhvdG9zKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==