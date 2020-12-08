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
  const PhotoDataForModal = storage === null || storage === void 0 ? void 0 : storage.photosData.filter(item => item.type === 'Photo');

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
  const [showModal, hideModal] = Object(react_modal_hook__WEBPACK_IMPORTED_MODULE_3__["useModal"])(({
    in: open
  }) => __jsx(_storage_PhotoContext__WEBPACK_IMPORTED_MODULE_9__["PhotosProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 5
    }
  }, __jsx(components_profile_PhotosModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Photo detail",
    showModal: open,
    onClose: hideModal,
    data: PhotoDataForModal,
    profilePhoto: true,
    likeAction: likeAction,
    shareAction: shareAction,
    onUpdateTimeline: onUpdateTimeline,
    auth: auth,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 7
    }
  })));
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 5
    }
  }, __jsx(components_header_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.container, _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.container_bg, _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.container_radius),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.page_title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
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
      lineNumber: 245,
      columnNumber: 11
    }
  }, "Add Photos/Video")), __jsx("div", {
    className: _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 9
    }
  }, PhotoDataForModal.map(item => {
    const menu = __jsx(antd__WEBPACK_IMPORTED_MODULE_12__["Menu"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 13
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_12__["Menu"].Item, {
      onClick: () => deletePhoto(item.id),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 15
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_15__["DeleteOutlined"], {
      style: {
        fontSize: 20
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 17
      }
    }), " ", __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 60
      }
    }, "Delete Photo")));

    return __jsx("div", {
      className: _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.photo_container,
      key: item.id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.photo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261,
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
        lineNumber: 262,
        columnNumber: 17
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_12__["Dropdown"], {
      overlay: menu,
      trigger: ['click'],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.editWrapper,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264,
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
        lineNumber: 265,
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
      lineNumber: 278,
      columnNumber: 7
    }
  }, __jsx(components_photos_PostingPhotos__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onPosting: onPosting,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9QaG90b3MvUGhvdG9zLmpzIl0sIm5hbWVzIjpbIlBob3RvcyIsImF1dGgiLCJhdXRoU2VydmljZXMiLCJzdG9yYWdlIiwiZGlzcGF0Y2giLCJ1c2VDb250ZXh0IiwiUGhvdG9zQ29udGV4dCIsInBvc3RNb2RhbCIsInNldFBvc3RNb2RhbCIsInVzZVN0YXRlIiwiUGhvdG9EYXRhRm9yTW9kYWwiLCJwaG90b3NEYXRhIiwiZmlsdGVyIiwiaXRlbSIsInR5cGUiLCJnZXRQaG90b3MiLCJ0b2tlbiIsInJlcXVlc3QiLCJBUEkiLCJtZXRob2QiLCJ1cmwiLCJoZWFkZXJzIiwiZGF0YSIsInN0YXR1cyIsInNldFBob3RvcyIsInJlZnJlc2hUb2tlbiIsIm1lc3NhZ2UiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJvblBvc3RpbmciLCJyZXF1ZXN0RGF0YSIsImRlbGV0ZVBob3RvIiwicGhvdG9JZCIsImlkIiwibmV3UGhvdG9zIiwic3VjY2VzcyIsImxpa2VBY3Rpb24iLCJ0ZXJtIiwicmVhY3RlZCIsInJlYWN0aW9uIiwibmV3RGF0YSIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsInJlYWN0aW9ucyIsIkVycm9yIiwic2hhcmVBY3Rpb24iLCJzaGFyZWQiLCJzYXR1cyIsIm9uVXBkYXRlVGltZWxpbmUiLCJhZGRFbGVtZW50IiwiYWNjb3VudCIsInVzZXIiLCJjb21tZW50cyIsInB1c2giLCJjb21tZW50c0NvdW50IiwidXNlRWZmZWN0Iiwic2hvd01vZGFsIiwiaGlkZU1vZGFsIiwidXNlTW9kYWwiLCJpbiIsIm9wZW4iLCJjbGFzc25hbWVzIiwic3R5bGVzIiwiY29udGFpbmVyIiwiY29udGFpbmVyX2JnIiwiY29udGFpbmVyX3JhZGl1cyIsInBhZ2VfdGl0bGUiLCJmbG9hdCIsImJhY2tncm91bmQiLCJjb2xvciIsImNvbnRlbnQiLCJtZW51IiwiZm9udFNpemUiLCJwaG90b19jb250YWluZXIiLCJwaG90byIsImJsb2JfdG4iLCJ3aWR0aCIsImhlaWdodCIsImVkaXRXcmFwcGVyIiwicG9zaXRpb24iLCJkaXNwbGF5IiwibWFyZ2luVG9wIiwicmVxdWlyZUF1dGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsQ0FBZ0I7QUFBRUMsTUFBRjtBQUFRQztBQUFSLENBQWhCLEVBQXdDO0FBQUE7O0FBRXRDLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUFzQkMsd0RBQVUsQ0FBQ0MsbUVBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJDLHNEQUFRLENBQUMsS0FBRCxDQUExQztBQUNBLFFBQU1DLGlCQUFpQixHQUFHUCxPQUFILGFBQUdBLE9BQUgsdUJBQUdBLE9BQU8sQ0FBRVEsVUFBVCxDQUFvQkMsTUFBcEIsQ0FBMkJDLElBQUksSUFBSUEsSUFBSSxDQUFDQyxJQUFMLEtBQWMsT0FBakQsQ0FBMUI7O0FBRUEsUUFBTUMsU0FBUyxHQUFHLE1BQU9DLEtBQVAsSUFBaUI7QUFDakMsUUFBSTtBQUNGLFlBQU1DLE9BQU8sR0FBRyxNQUFNQyw2REFBRyxDQUFDO0FBQ3hCQyxjQUFNLEVBQUUsTUFEZ0I7QUFFeEJDLFdBQUcsRUFBRSxrQkFGbUI7QUFHeEJDLGVBQU8sRUFBRTtBQUFFLHFCQUFXcEIsSUFBSSxDQUFDZTtBQUFsQjtBQUhlLE9BQUQsQ0FBekI7QUFLQSxZQUFNO0FBQUVNLFlBQUY7QUFBUUM7QUFBUixVQUFtQk4sT0FBekI7O0FBQ0EsVUFBSU0sTUFBTSxLQUFLLEdBQWYsRUFBb0I7QUFDbEJuQixnQkFBUSxDQUFDb0IsMkRBQVMsQ0FBQ0YsSUFBRCxDQUFWLENBQVI7QUFDRCxPQUZELE1BRU8s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QkMsaUJBQVMsRUFBRTtBQUpNLE9BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURGLENBRkYsQ0FKRixDQURGO0FBbUJFLEdBM0JELENBREgsQ0FaRixDQUZGLEVBNkNFLE1BQUMsd0VBQUQ7QUFDSSxTQUFLLEVBQUMsZUFEVjtBQUVJLGFBQVMsRUFBRTVFLFNBRmY7QUFHSSxXQUFPLEVBQUUsTUFBTUMsWUFBWSxDQUFDLEtBQUQsQ0FIL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtJLE1BQUMsd0VBQUQ7QUFBZSxhQUFTLEVBQUVzQixTQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEosQ0E3Q0YsQ0FERjtBQXVERDs7R0E3UVE5QixNO1VBc013QjRELHlEOzs7S0F0TXhCNUQsTTtBQStRTSxxRUFBQW9GLHVFQUFXLENBQUNwRixNQUFELENBQTFCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bob3Rvcy5kOGZmMzkyYjE0NzhjNmFiOGRkNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7IHVzZU1vZGFsIH0gZnJvbSAncmVhY3QtbW9kYWwtaG9vayc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyJztcclxuaW1wb3J0IFBob3Rvc01vZGFsIGZyb20gJ2NvbXBvbmVudHMvcHJvZmlsZS9QaG90b3NNb2RhbCc7XHJcbmltcG9ydCBQcm9maWxlUGhvdG9zTW9kYWwgZnJvbSAnY29tcG9uZW50cy9jb21tb24vcHJvZmlsZVBob3RvTW9kYWwuanMnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL3Bob3Rvcy5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCByZXF1aXJlQXV0aCBmcm9tICdoZWxwZXJzL2hvYy9yZXF1aXJlQXV0aCc7XHJcbmltcG9ydCB7IFBob3Rvc0NvbnRleHQgfSBmcm9tICcuL3N0b3JhZ2UvUGhvdG9Db250ZXh0JztcclxuaW1wb3J0IHsgc2V0TG9hZGluZywgc2V0UGhvdG8sIHNldFBob3RvcyB9IGZyb20gJy4vYWN0aW9ucyc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBUEkgZnJvbSAnLi4vLi4vY29uZmlncy9BUEknO1xyXG5pbXBvcnQgeyBCdXR0b24sIFVwbG9hZCwgbWVzc2FnZSwgSW5wdXQsIFRhYnMsIFJhdGUsIFJvdywgQ29sLCBEcm9wZG93biwgTWVudSB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgIFBvc3RpbmdQaG90b3MgIGZyb20gJ2NvbXBvbmVudHMvcGhvdG9zL1Bvc3RpbmdQaG90b3MnO1xyXG5pbXBvcnQgTW9kYWxXcmFwcGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9uL01vZGFsV3JhcHBlcic7XHJcbmltcG9ydCB7IENhbWVyYU91dGxpbmVkLCBFZGl0RmlsbGVkLCBEb3duT3V0bGluZWQsIERlbGV0ZU91dGxpbmVkICB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgUGhvdG9zUHJvdmlkZXIgfSAgZnJvbSAnY29udGFpbmVycy9QaG90b3Mvc3RvcmFnZS9QaG90b0NvbnRleHQnO1xyXG5cclxuZnVuY3Rpb24gUGhvdG9zKHsgYXV0aCwgYXV0aFNlcnZpY2VzIH0pIHtcclxuXHJcbiAgY29uc3QgW3N0b3JhZ2UsIGRpc3BhdGNoXSA9IHVzZUNvbnRleHQoUGhvdG9zQ29udGV4dCk7XHJcbiAgY29uc3QgW3Bvc3RNb2RhbCwgc2V0UG9zdE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBQaG90b0RhdGFGb3JNb2RhbCA9IHN0b3JhZ2U/LnBob3Rvc0RhdGEuZmlsdGVyKGl0ZW0gPT4gaXRlbS50eXBlID09PSAnUGhvdG8nKTtcclxuXHJcbiAgY29uc3QgZ2V0UGhvdG9zID0gYXN5bmMgKHRva2VuKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6ICcvYWNjb3VudHMvcGhvdG9zJyxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIGRpc3BhdGNoKHNldFBob3RvcyhkYXRhKSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSA0MDMpIHtcclxuICAgICAgICBhdXRoU2VydmljZXMucmVmcmVzaFRva2VuKGdldFBob3Rvcyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgfVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IG9uUG9zdGluZyA9IGFzeW5jIChyZXF1ZXN0RGF0YSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsOiAnL3Bob3RvcycsXHJcbiAgICAgICAgZGF0YTogcmVxdWVzdERhdGEsXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICBzZXRQb3N0TW9kYWwoMCk7XHJcbiAgICAgICAgZGlzcGF0Y2goc2V0UGhvdG9zKFsuLi5zdG9yYWdlLnBob3Rvc0RhdGEsIGRhdGFdKSlcclxuICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IDQwMykge1xyXG4gICAgICAgIGF1dGhTZXJ2aWNlcy5yZWZyZXNoVG9rZW4ob25Qb3N0aW5nKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZGVsZXRlUGhvdG8gPSBhc3luYyAocGhvdG9JZCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAnZGVsZXRlJyxcclxuICAgICAgICB1cmw6ICcvcGhvdG9zJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBpZDogcGhvdG9JZFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDQpIHtcclxuICAgICAgICBjb25zdCBuZXdQaG90b3MgPSBzdG9yYWdlPy5waG90b3NEYXRhLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgIT09IHBob3RvSWQgKTtcclxuICAgICAgICBkaXNwYXRjaChzZXRQaG90b3MobmV3UGhvdG9zKSk7XHJcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKCdEZWxldGVkIHN1Y2Nlc3NmdWxseSEnKTtcclxuICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IDQwMykge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoJ1BsZWFzZSByZWZyZXNoIHBhZ2UhJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgfVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGxpa2VBY3Rpb24gPSBhc3luYyAodHlwZSwgaWQsIHRlcm0pID0+IHtcclxuICAgIHZhciB1cmwgPSAnJztcclxuICAgIGlmICh0eXBlID09PSAnUGhvdG8nKSB7XHJcbiAgICAgIHVybCA9ICcvcGhvdG9zL3JlYWN0JztcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1ZpZGVvQ2xpcCcpIHtcclxuICAgICAgdXJsID0gJy92aWRlby1jbGlwcy9yZWFjdCc7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdJdGVtJykge1xyXG4gICAgICB1cmwgPSAnL2l0ZW1zL3JlYWN0JztcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1Bvc3QnKSB7XHJcbiAgICAgIHVybCA9ICcvcG9zdHMvcmVhY3QnO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnQ29tbWVudCcpIHtcclxuICAgICAgdXJsID0gJy9jb21tZW50cy9yZWFjdCc7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdTaGFyZScpIHtcclxuICAgICAgdXJsID0gJy9zaGFyZXMvcmVhY3QnO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnTWFya2V0cGxhY2VJdGVtRm9yU2FsZScpIHtcclxuICAgICAgdXJsID0gJy9tYXJrZXRwbGFjZS9pdGVtcy1mb3Itc2FsZS9yZWFjdCc7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdNYXJrZXRwbGFjZUl0ZW1Ub0J1eScpIHtcclxuICAgICAgdXJsID0gJy9tYXJrZXRwbGFjZS9pdGVtcy10by1idXkvcmVhY3QnO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHJlYWN0ZWQ6IGlkLFxyXG4gICAgICAgICAgcmVhY3Rpb246IHRlcm1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICB2YXIgbmV3RGF0YSA9ICBzdG9yYWdlPy5waG90b3NEYXRhLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIGlmKGVsZW1lbnQuaWQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQucmVhY3Rpb25zWzBdLnJlYWN0aW9uID09IHRlcm07XHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZGlzcGF0Y2goc2V0UGhvdG9zKG5ld0RhdGEpKTtcclxuICAgICAgICB9KVxyXG4gICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PSA0MDMpIHtcclxuICAgICAgICBhdXRoU2VydmljZXMucmVmcmVzaFRva2VuKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuICBjb25zdCBzaGFyZUFjdGlvbiA9IGFzeW5jICh0eXBlLCBpZCkgPT4ge1xyXG5cclxuICAgIHZhciB1cmwgPSAnJztcclxuICAgICAgaWYgKHR5cGUgPT09ICdQaG90bycpIHtcclxuICAgICAgICB1cmwgPSAnL3Bob3Rvcy9zaGFyZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1ZpZGVvQ2xpcCcpIHtcclxuICAgICAgICB1cmwgPSAnL3ZpZGVvLWNsaXBzL3NoYXJlJztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnSXRlbScpIHtcclxuICAgICAgICB1cmwgPSAnL2l0ZW1zL3NoYXJlJztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnUG9zdCcpIHtcclxuICAgICAgICB1cmwgPSAnL3Bvc3RzL3NoYXJlJztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnQ29tbWVudCcpIHtcclxuICAgICAgICB1cmwgPSAnL2NvbW1lbnRzL3NoYXJlJztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnU2hhcmUnKSB7XHJcbiAgICAgICAgdXJsID0gJy9wb3N0cy9zaGFyZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ01hcmtldHBsYWNlSXRlbUZvclNhbGUnKSB7XHJcbiAgICAgICAgdXJsID0gJy9tYXJrZXRwbGFjZS9pdGVtcy1mb3Itc2FsZS9zaGFyZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ01hcmtldHBsYWNlSXRlbVRvQnV5Jykge1xyXG4gICAgICAgIHVybCA9ICcvbWFya2V0cGxhY2UvaXRlbXMtdG8tYnV5L3NoYXJlJztcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzaGFyZWQ6IGlkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG5cclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKCdTaGFyZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgIH0gZWxzZSBpZihzYXR1cyA9PSA0MDMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYXV0aFNlcnZpY2VzLnJlZnJlc2hUb2tlbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25VcGRhdGVUaW1lbGluZSA9IChkYXRhKSA9PiB7XHJcbiAgICB2YXIgbmV3UGhvdG9zID0gc3RvcmFnZT8ucGhvdG9zRGF0YS5tYXAoZWxlbWVudCA9PiB7XHJcbiAgICAgIGlmKGVsZW1lbnQuaWQgPT0gZGF0YS5pZCkge1xyXG4gICAgICAgIGxldCBhZGRFbGVtZW50ID0ge1xyXG4gICAgICAgICAgYWNjb3VudDogYXV0aC51c2VyLCBcclxuICAgICAgICAgIC4uLmRhdGEuY29tbWVudHNbMF1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodHlwZW9mIGVsZW1lbnQuY29tbWVudHMgPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgIGVsZW1lbnRbJ2NvbW1lbnRzJ10gPSBbYWRkRWxlbWVudF07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGVsZW1lbnQuY29tbWVudHMucHVzaChhZGRFbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxlbWVudC5jb21tZW50c0NvdW50ICs9IGRhdGEuY29tbWVudHNDb3VudDtcclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBkaXNwYXRjaChzZXRQaG90b3MobmV3UGhvdG9zKSk7XHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRQaG90b3MoKTtcclxuICB9LCBbXSk7XHJcbiAgXHJcbiAgY29uc3QgW3Nob3dNb2RhbCwgaGlkZU1vZGFsXSA9IHVzZU1vZGFsKCh7IGluOiBvcGVuIH0pID0+IChcclxuICAgIDxQaG90b3NQcm92aWRlcj5cclxuICAgICAgPFBob3Rvc01vZGFsXHJcbiAgICAgICAgdGl0bGU9XCJQaG90byBkZXRhaWxcIlxyXG4gICAgICAgIHNob3dNb2RhbD17b3Blbn1cclxuICAgICAgICBvbkNsb3NlPXtoaWRlTW9kYWx9XHJcbiAgICAgICAgZGF0YT17UGhvdG9EYXRhRm9yTW9kYWx9XHJcbiAgICAgICAgcHJvZmlsZVBob3RvXHJcbiAgICAgICAgbGlrZUFjdGlvbj17bGlrZUFjdGlvbn1cclxuICAgICAgICBzaGFyZUFjdGlvbj17c2hhcmVBY3Rpb259XHJcbiAgICAgICAgb25VcGRhdGVUaW1lbGluZT17b25VcGRhdGVUaW1lbGluZX1cclxuICAgICAgICBhdXRoPXthdXRofVxyXG4gICAgICAvPlxyXG4gICAgPC9QaG90b3NQcm92aWRlcj5cclxuICApKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcclxuICAgICAgICAgIHN0eWxlcy5jb250YWluZXIsXHJcbiAgICAgICAgICBzdHlsZXMuY29udGFpbmVyX2JnLFxyXG4gICAgICAgICAgc3R5bGVzLmNvbnRhaW5lcl9yYWRpdXNcclxuICAgICAgICApfVxyXG4gICAgICAgIFxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWdlX3RpdGxlfT5cclxuICAgICAgICAgIFBob3Rvc1xyXG4gICAgICAgICAgPEJ1dHRvbiBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JywgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JywgY29sb3I6ICcjMGQ3YWM3JyB9fSBvbkNsaWNrPXsoKSA9PiBzZXRQb3N0TW9kYWwodHJ1ZSl9PkFkZCBQaG90b3MvVmlkZW88L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAge1Bob3RvRGF0YUZvck1vZGFsLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgbWVudSA9IChcclxuICAgICAgICAgICAgPE1lbnU+XHJcbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBvbkNsaWNrPXsoKSA9PiBkZWxldGVQaG90byhpdGVtLmlkKX0+XHJcbiAgICAgICAgICAgICAgICA8RGVsZXRlT3V0bGluZWQgc3R5bGU9e3sgZm9udFNpemU6IDIwIH19Lz4gPHNwYW4+RGVsZXRlIFBob3RvPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnBob3RvX2NvbnRhaW5lcn1cclxuICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBob3RvfSA+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aXRlbS5ibG9iX3RufWB9IGFsdD1cIlwiIHN0eWxlPXt7d2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJSd9fSBvbkNsaWNrPXsoKSA9PiBzaG93TW9kYWwoKX0vPlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duIG92ZXJsYXk9e21lbnV9IHRyaWdnZXI9e1snY2xpY2snXX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdFdyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxFZGl0RmlsbGVkIHN0eWxlPXt7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDRcclxuICAgICAgICAgICAgICAgICAgICB9fS8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TW9kYWxXcmFwcGVyXHJcbiAgICAgICAgICB0aXRsZT1cIkNyZWF0ZSBQaG90b3NcIlxyXG4gICAgICAgICAgc2hvd01vZGFsPXtwb3N0TW9kYWx9XHJcbiAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRQb3N0TW9kYWwoZmFsc2UpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxQb3N0aW5nUGhvdG9zIG9uUG9zdGluZz17b25Qb3N0aW5nfS8+XHJcbiAgICAgIDwvTW9kYWxXcmFwcGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVxdWlyZUF1dGgoUGhvdG9zKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==