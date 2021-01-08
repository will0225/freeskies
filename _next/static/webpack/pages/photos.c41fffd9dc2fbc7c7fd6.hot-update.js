webpackHotUpdate_N_E("pages/photos",{

/***/ "./containers/Photos/Photos.js":
/*!*************************************!*\
  !*** ./containers/Photos/Photos.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_modal_hook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-modal-hook */ "./node_modules/react-modal-hook/dist/index.es.js");
/* harmony import */ var components_header_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/header/Header */ "./components/header/Header.js");
/* harmony import */ var components_profile_PhotosModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/profile/PhotosModal */ "./components/profile/PhotosModal.js");
/* harmony import */ var components_common_profilePhotoModal_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/common/profilePhotoModal.js */ "./components/common/profilePhotoModal.js");
/* harmony import */ var _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles/photos.module.scss */ "./containers/Photos/styles/photos.module.scss");
/* harmony import */ var _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var helpers_hoc_requireAuth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! helpers/hoc/requireAuth */ "./helpers/hoc/requireAuth.js");
/* harmony import */ var _storage_PhotoContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./storage/PhotoContext */ "./containers/Photos/storage/PhotoContext.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./actions */ "./containers/Photos/actions/index.js");
/* harmony import */ var _configs_API__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../configs/API */ "./configs/API.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var components_photos_PostingPhotos__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! components/photos/PostingPhotos */ "./components/photos/PostingPhotos.js");
/* harmony import */ var _components_common_ModalWrapper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/common/ModalWrapper */ "./components/common/ModalWrapper.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");






var _jsxFileName = "D:\\Freeskies-development-\\containers\\Photos\\Photos.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


















function Photos(_ref) {
  _s();

  var _this = this;

  var auth = _ref.auth,
      authServices = _ref.authServices;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(_storage_PhotoContext__WEBPACK_IMPORTED_MODULE_13__["PhotosContext"]),
      storage = _useContext[0],
      dispatch = _useContext[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      postModal = _useState[0],
      setPostModal = _useState[1];

  var PhotoDataForModal = storage === null || storage === void 0 ? void 0 : storage.photosData.filter(function (item) {
    return item.type === 'Photo';
  });

  var getPhotos = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee(token) {
      var request, data, status;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return Object(_configs_API__WEBPACK_IMPORTED_MODULE_15__["default"])({
                method: 'post',
                url: '/accounts/photos',
                headers: {
                  'x-token': auth.token
                }
              });

            case 3:
              request = _context.sent;
              data = request.data, status = request.status;

              if (status === 200) {
                dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_14__["setPhotos"])(data));
              } else if (status === 403) {
                authServices.refreshToken(getPhotos);
              } else {
                antd__WEBPACK_IMPORTED_MODULE_16__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
              }

              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));

    return function getPhotos(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var onPosting = /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2(requestData) {
      var request, data, status;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return Object(_configs_API__WEBPACK_IMPORTED_MODULE_15__["default"])({
                method: 'post',
                url: '/photos',
                data: requestData,
                headers: {
                  'x-token': auth.token
                }
              });

            case 3:
              request = _context2.sent;
              data = request.data, status = request.status;

              if (status === 201) {
                setPostModal(0);
                dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_14__["setPhotos"])([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(storage.photosData), [data])));
              } else if (status === 403) {
                authServices.refreshToken(onPosting);
              } else {
                antd__WEBPACK_IMPORTED_MODULE_16__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
              }

              _context2.next = 11;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 8]]);
    }));

    return function onPosting(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  var deletePhoto = /*#__PURE__*/function () {
    var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee3(photoId) {
      var request, data, status, newPhotos;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return Object(_configs_API__WEBPACK_IMPORTED_MODULE_15__["default"])({
                method: 'delete',
                url: '/photos',
                data: {
                  id: photoId
                },
                headers: {
                  'x-token': auth.token
                }
              });

            case 3:
              request = _context3.sent;
              data = request.data, status = request.status;

              if (status === 204) {
                newPhotos = storage === null || storage === void 0 ? void 0 : storage.photosData.filter(function (item) {
                  return item.id !== photoId;
                });
                dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_14__["setPhotos"])(newPhotos));
                antd__WEBPACK_IMPORTED_MODULE_16__["message"].success('Deleted successfully!');
              } else if (status === 403) {
                antd__WEBPACK_IMPORTED_MODULE_16__["message"].error('Please refresh page!');
              } else {
                antd__WEBPACK_IMPORTED_MODULE_16__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
              }

              _context3.next = 11;
              break;

            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](0);
              console.log(_context3.t0);

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 8]]);
    }));

    return function deletePhoto(_x3) {
      return _ref4.apply(this, arguments);
    };
  }();

  var likeAction = /*#__PURE__*/function () {
    var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee4(type, id, term) {
      var url, request, data, status, newData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              url = '';

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

              _context4.prev = 2;
              _context4.next = 5;
              return Object(_configs_API__WEBPACK_IMPORTED_MODULE_15__["default"])({
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

            case 5:
              request = _context4.sent;
              data = request.data, status = request.status;

              if (!(status === 201)) {
                _context4.next = 11;
                break;
              }

              newData = storage === null || storage === void 0 ? void 0 : storage.photosData.map(function (element, index) {
                if (element.id === id) {
                  element.reactions[0].reaction == term;
                  return element;
                }

                dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_14__["setPhotos"])(newData));
              });
              _context4.next = 17;
              break;

            case 11:
              if (!(status == 403)) {
                _context4.next = 15;
                break;
              }

              authServices.refreshToken();
              _context4.next = 17;
              break;

            case 15:
              antd__WEBPACK_IMPORTED_MODULE_16__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
              throw new Error();

            case 17:
              _context4.next = 22;
              break;

            case 19:
              _context4.prev = 19;
              _context4.t0 = _context4["catch"](2);
              console.log(_context4.t0);

            case 22:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[2, 19]]);
    }));

    return function likeAction(_x4, _x5, _x6) {
      return _ref5.apply(this, arguments);
    };
  }();

  var shareAction = /*#__PURE__*/function () {
    var _ref6 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee5(type, id) {
      var url, request, data, status;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              url = '';

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

              _context5.prev = 2;
              _context5.next = 5;
              return Object(_configs_API__WEBPACK_IMPORTED_MODULE_15__["default"])({
                method: 'post',
                url: url,
                data: {
                  shared: id
                },
                headers: {
                  'x-token': auth.token
                }
              });

            case 5:
              request = _context5.sent;
              data = request.data, status = request.status;

              if (!(status === 201)) {
                _context5.next = 11;
                break;
              }

              antd__WEBPACK_IMPORTED_MODULE_16__["message"].success('Shared successfully');
              _context5.next = 17;
              break;

            case 11:
              if (!(satus == 403)) {
                _context5.next = 15;
                break;
              }

              authServices.refreshToken();
              _context5.next = 17;
              break;

            case 15:
              antd__WEBPACK_IMPORTED_MODULE_16__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
              throw new Error();

            case 17:
              _context5.next = 22;
              break;

            case 19:
              _context5.prev = 19;
              _context5.t0 = _context5["catch"](2);
              console.log(_context5.t0);

            case 22:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[2, 19]]);
    }));

    return function shareAction(_x7, _x8) {
      return _ref6.apply(this, arguments);
    };
  }();

  var onUpdateTimeline = function onUpdateTimeline(data) {
    var newPhotos = storage === null || storage === void 0 ? void 0 : storage.photosData.map(function (element) {
      if (element.id == data.id) {
        var addElement = _objectSpread({
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
    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_14__["setPhotos"])(newPhotos));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    getPhotos();
  }, []);

  var _useModal = Object(react_modal_hook__WEBPACK_IMPORTED_MODULE_7__["useModal"])(function (_ref7) {
    var open = _ref7["in"];
    return __jsx(_storage_PhotoContext__WEBPACK_IMPORTED_MODULE_13__["PhotosProvider"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 5
      }
    }, __jsx(components_profile_PhotosModal__WEBPACK_IMPORTED_MODULE_9__["default"], {
      title: "Photo detail",
      showModal: open,
      onClose: hideModal,
      data: PhotoDataForModal,
      profilePhoto: true,
      likeAction: likeAction,
      shareAction: shareAction,
      onUpdateTimeline: onUpdateTimeline,
      auth: auth,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 7
      }
    }));
  }),
      _useModal2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useModal, 2),
      showModal = _useModal2[0],
      hideModal = _useModal2[1];

  console.log(PhotoDataForModal);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 5
    }
  }, __jsx(components_header_Header__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.container, _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.container_bg, _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.container_radius),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.page_title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 9
    }
  }, "Photos", __jsx(antd__WEBPACK_IMPORTED_MODULE_16__["Button"], {
    style: {
      "float": 'right',
      background: 'transparent',
      color: '#0d7ac7'
    },
    onClick: function onClick() {
      return setPostModal(true);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 11
    }
  }, "Add Photos/Video")), __jsx("div", {
    className: _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 9
    }
  }, PhotoDataForModal.map(function (item) {
    var menu = __jsx(antd__WEBPACK_IMPORTED_MODULE_16__["Menu"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 13
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_16__["Menu"].Item, {
      onClick: function onClick() {
        return deletePhoto(item.id);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 15
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_19__["DeleteOutlined"], {
      style: {
        fontSize: 20
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 17
      }
    }), " ", __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 60
      }
    }, "Delete Photo")));

    return __jsx("div", {
      className: _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.photo_container,
      key: item.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.photo,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 15
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(item.blob_tn),
      alt: "",
      style: {
        width: '100%',
        height: '100%'
      },
      onClick: function onClick() {
        return showModal();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 17
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_16__["Dropdown"], {
      overlay: menu,
      trigger: ['click'],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.editWrapper,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 19
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_19__["EditFilled"], {
      style: {
        color: 'white',
        position: 'relative',
        display: 'block',
        marginTop: 4
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 21
      }
    })))));
  }))), __jsx(_components_common_ModalWrapper__WEBPACK_IMPORTED_MODULE_18__["default"], {
    title: "Create Photos",
    showModal: postModal,
    onClose: function onClose() {
      return setPostModal(false);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 7
    }
  }, __jsx(components_photos_PostingPhotos__WEBPACK_IMPORTED_MODULE_17__["default"], {
    onPosting: onPosting,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 11
    }
  })));
}

_s(Photos, "lpjCu2B7sERX+7IrtLKYNDUuxJs=", false, function () {
  return [react_modal_hook__WEBPACK_IMPORTED_MODULE_7__["useModal"]];
});

_c = Photos;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(helpers_hoc_requireAuth__WEBPACK_IMPORTED_MODULE_12__["default"])(Photos));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9QaG90b3MvUGhvdG9zLmpzIl0sIm5hbWVzIjpbIlBob3RvcyIsImF1dGgiLCJhdXRoU2VydmljZXMiLCJ1c2VDb250ZXh0IiwiUGhvdG9zQ29udGV4dCIsInN0b3JhZ2UiLCJkaXNwYXRjaCIsInVzZVN0YXRlIiwicG9zdE1vZGFsIiwic2V0UG9zdE1vZGFsIiwiUGhvdG9EYXRhRm9yTW9kYWwiLCJwaG90b3NEYXRhIiwiZmlsdGVyIiwiaXRlbSIsInR5cGUiLCJnZXRQaG90b3MiLCJ0b2tlbiIsIkFQSSIsIm1ldGhvZCIsInVybCIsImhlYWRlcnMiLCJyZXF1ZXN0IiwiZGF0YSIsInN0YXR1cyIsInNldFBob3RvcyIsInJlZnJlc2hUb2tlbiIsIm1lc3NhZ2UiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJvblBvc3RpbmciLCJyZXF1ZXN0RGF0YSIsImRlbGV0ZVBob3RvIiwicGhvdG9JZCIsImlkIiwibmV3UGhvdG9zIiwic3VjY2VzcyIsImxpa2VBY3Rpb24iLCJ0ZXJtIiwicmVhY3RlZCIsInJlYWN0aW9uIiwibmV3RGF0YSIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsInJlYWN0aW9ucyIsIkVycm9yIiwic2hhcmVBY3Rpb24iLCJzaGFyZWQiLCJzYXR1cyIsIm9uVXBkYXRlVGltZWxpbmUiLCJhZGRFbGVtZW50IiwiYWNjb3VudCIsInVzZXIiLCJjb21tZW50cyIsInB1c2giLCJjb21tZW50c0NvdW50IiwidXNlRWZmZWN0IiwidXNlTW9kYWwiLCJvcGVuIiwiaGlkZU1vZGFsIiwic2hvd01vZGFsIiwiY2xhc3NuYW1lcyIsInN0eWxlcyIsImNvbnRhaW5lciIsImNvbnRhaW5lcl9iZyIsImNvbnRhaW5lcl9yYWRpdXMiLCJwYWdlX3RpdGxlIiwiYmFja2dyb3VuZCIsImNvbG9yIiwiY29udGVudCIsIm1lbnUiLCJmb250U2l6ZSIsInBob3RvX2NvbnRhaW5lciIsInBob3RvIiwiYmxvYl90biIsIndpZHRoIiwiaGVpZ2h0IiwiZWRpdFdyYXBwZXIiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJtYXJnaW5Ub3AiLCJyZXF1aXJlQXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxPQUF3QztBQUFBOztBQUFBOztBQUFBLE1BQXRCQyxJQUFzQixRQUF0QkEsSUFBc0I7QUFBQSxNQUFoQkMsWUFBZ0IsUUFBaEJBLFlBQWdCOztBQUFBLG9CQUVWQyx3REFBVSxDQUFDQyxvRUFBRCxDQUZBO0FBQUEsTUFFL0JDLE9BRitCO0FBQUEsTUFFdEJDLFFBRnNCOztBQUFBLGtCQUdKQyxzREFBUSxDQUFDLEtBQUQsQ0FISjtBQUFBLE1BRy9CQyxTQUgrQjtBQUFBLE1BR3BCQyxZQUhvQjs7QUFJdEMsTUFBTUMsaUJBQWlCLEdBQUdMLE9BQUgsYUFBR0EsT0FBSCx1QkFBR0EsT0FBTyxDQUFFTSxVQUFULENBQW9CQyxNQUFwQixDQUEyQixVQUFBQyxJQUFJO0FBQUEsV0FBSUEsSUFBSSxDQUFDQyxJQUFMLEtBQWMsT0FBbEI7QUFBQSxHQUEvQixDQUExQjs7QUFFQSxNQUFNQyxTQUFTO0FBQUEsaU1BQUcsaUJBQU9DLEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVRQyw2REFBRyxDQUFDO0FBQ3hCQyxzQkFBTSxFQUFFLE1BRGdCO0FBRXhCQyxtQkFBRyxFQUFFLGtCQUZtQjtBQUd4QkMsdUJBQU8sRUFBRTtBQUFFLDZCQUFXbkIsSUFBSSxDQUFDZTtBQUFsQjtBQUhlLGVBQUQsQ0FGWDs7QUFBQTtBQUVSSyxxQkFGUTtBQU9OQyxrQkFQTSxHQU9XRCxPQVBYLENBT05DLElBUE0sRUFPQUMsTUFQQSxHQU9XRixPQVBYLENBT0FF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QUFBLE1BREYsQ0FERixDQUZGLENBSkYsQ0FERjtBQW1CRSxHQTNCRCxDQURILENBWkYsQ0FGRixFQTZDRSxNQUFDLHdFQUFEO0FBQ0ksU0FBSyxFQUFDLGVBRFY7QUFFSSxhQUFTLEVBQUV6RSxTQUZmO0FBR0ksV0FBTyxFQUFFO0FBQUEsYUFBTUMsWUFBWSxDQUFDLEtBQUQsQ0FBbEI7QUFBQSxLQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLSSxNQUFDLHdFQUFEO0FBQWUsYUFBUyxFQUFFcUIsU0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxKLENBN0NGLENBREY7QUF1REQ7O0dBOVFROUIsTTtVQXNNd0IwRCx5RDs7O0tBdE14QjFELE07QUFnUk0scUVBQUFrRix3RUFBVyxDQUFDbEYsTUFBRCxDQUExQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9waG90b3MuYzQxZmZmZDlkYzJmYmM3YzdmZDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyB1c2VNb2RhbCB9IGZyb20gJ3JlYWN0LW1vZGFsLWhvb2snO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlcic7XHJcbmltcG9ydCBQaG90b3NNb2RhbCBmcm9tICdjb21wb25lbnRzL3Byb2ZpbGUvUGhvdG9zTW9kYWwnO1xyXG5pbXBvcnQgUHJvZmlsZVBob3Rvc01vZGFsIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3Byb2ZpbGVQaG90b01vZGFsLmpzJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy9waG90b3MubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgcmVxdWlyZUF1dGggZnJvbSAnaGVscGVycy9ob2MvcmVxdWlyZUF1dGgnO1xyXG5pbXBvcnQgeyBQaG90b3NDb250ZXh0IH0gZnJvbSAnLi9zdG9yYWdlL1Bob3RvQ29udGV4dCc7XHJcbmltcG9ydCB7IHNldExvYWRpbmcsIHNldFBob3RvLCBzZXRQaG90b3MgfSBmcm9tICcuL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQVBJIGZyb20gJy4uLy4uL2NvbmZpZ3MvQVBJJztcclxuaW1wb3J0IHsgQnV0dG9uLCBVcGxvYWQsIG1lc3NhZ2UsIElucHV0LCBUYWJzLCBSYXRlLCBSb3csIENvbCwgRHJvcGRvd24sIE1lbnUgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0ICBQb3N0aW5nUGhvdG9zICBmcm9tICdjb21wb25lbnRzL3Bob3Rvcy9Qb3N0aW5nUGhvdG9zJztcclxuaW1wb3J0IE1vZGFsV3JhcHBlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9Nb2RhbFdyYXBwZXInO1xyXG5pbXBvcnQgeyBDYW1lcmFPdXRsaW5lZCwgRWRpdEZpbGxlZCwgRG93bk91dGxpbmVkLCBEZWxldGVPdXRsaW5lZCAgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IFBob3Rvc1Byb3ZpZGVyIH0gIGZyb20gJ2NvbnRhaW5lcnMvUGhvdG9zL3N0b3JhZ2UvUGhvdG9Db250ZXh0JztcclxuXHJcbmZ1bmN0aW9uIFBob3Rvcyh7IGF1dGgsIGF1dGhTZXJ2aWNlcyB9KSB7XHJcblxyXG4gIGNvbnN0IFtzdG9yYWdlLCBkaXNwYXRjaF0gPSB1c2VDb250ZXh0KFBob3Rvc0NvbnRleHQpO1xyXG4gIGNvbnN0IFtwb3N0TW9kYWwsIHNldFBvc3RNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgUGhvdG9EYXRhRm9yTW9kYWwgPSBzdG9yYWdlPy5waG90b3NEYXRhLmZpbHRlcihpdGVtID0+IGl0ZW0udHlwZSA9PT0gJ1Bob3RvJyk7XHJcblxyXG4gIGNvbnN0IGdldFBob3RvcyA9IGFzeW5jICh0b2tlbikgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsOiAnL2FjY291bnRzL3Bob3RvcycsXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBkaXNwYXRjaChzZXRQaG90b3MoZGF0YSkpO1xyXG4gICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gNDAzKSB7XHJcbiAgICAgICAgYXV0aFNlcnZpY2VzLnJlZnJlc2hUb2tlbihnZXRQaG90b3MpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBvblBvc3RpbmcgPSBhc3luYyAocmVxdWVzdERhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybDogJy9waG90b3MnLFxyXG4gICAgICAgIGRhdGE6IHJlcXVlc3REYXRhLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgc2V0UG9zdE1vZGFsKDApO1xyXG4gICAgICAgIGRpc3BhdGNoKHNldFBob3RvcyhbLi4uc3RvcmFnZS5waG90b3NEYXRhLCBkYXRhXSkpXHJcbiAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSA0MDMpIHtcclxuICAgICAgICBhdXRoU2VydmljZXMucmVmcmVzaFRva2VuKG9uUG9zdGluZyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgfVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGRlbGV0ZVBob3RvID0gYXN5bmMgKHBob3RvSWQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ2RlbGV0ZScsXHJcbiAgICAgICAgdXJsOiAnL3Bob3RvcycsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgaWQ6IHBob3RvSWRcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjA0KSB7XHJcbiAgICAgICAgY29uc3QgbmV3UGhvdG9zID0gc3RvcmFnZT8ucGhvdG9zRGF0YS5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkICE9PSBwaG90b0lkICk7XHJcbiAgICAgICAgZGlzcGF0Y2goc2V0UGhvdG9zKG5ld1Bob3RvcykpO1xyXG4gICAgICAgIG1lc3NhZ2Uuc3VjY2VzcygnRGVsZXRlZCBzdWNjZXNzZnVsbHkhJyk7XHJcbiAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSA0MDMpIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKCdQbGVhc2UgcmVmcmVzaCBwYWdlIScpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBsaWtlQWN0aW9uID0gYXN5bmMgKHR5cGUsIGlkLCB0ZXJtKSA9PiB7XHJcbiAgICB2YXIgdXJsID0gJyc7XHJcbiAgICBpZiAodHlwZSA9PT0gJ1Bob3RvJykge1xyXG4gICAgICB1cmwgPSAnL3Bob3Rvcy9yZWFjdCc7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdWaWRlb0NsaXAnKSB7XHJcbiAgICAgIHVybCA9ICcvdmlkZW8tY2xpcHMvcmVhY3QnO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnSXRlbScpIHtcclxuICAgICAgdXJsID0gJy9pdGVtcy9yZWFjdCc7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdQb3N0Jykge1xyXG4gICAgICB1cmwgPSAnL3Bvc3RzL3JlYWN0JztcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0NvbW1lbnQnKSB7XHJcbiAgICAgIHVybCA9ICcvY29tbWVudHMvcmVhY3QnO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnU2hhcmUnKSB7XHJcbiAgICAgIHVybCA9ICcvc2hhcmVzL3JlYWN0JztcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ01hcmtldHBsYWNlSXRlbUZvclNhbGUnKSB7XHJcbiAgICAgIHVybCA9ICcvbWFya2V0cGxhY2UvaXRlbXMtZm9yLXNhbGUvcmVhY3QnO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnTWFya2V0cGxhY2VJdGVtVG9CdXknKSB7XHJcbiAgICAgIHVybCA9ICcvbWFya2V0cGxhY2UvaXRlbXMtdG8tYnV5L3JlYWN0JztcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICByZWFjdGVkOiBpZCxcclxuICAgICAgICAgIHJlYWN0aW9uOiB0ZXJtXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgdmFyIG5ld0RhdGEgPSAgc3RvcmFnZT8ucGhvdG9zRGF0YS5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBpZihlbGVtZW50LmlkID09PSBpZCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnJlYWN0aW9uc1swXS5yZWFjdGlvbiA9PSB0ZXJtO1xyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGRpc3BhdGNoKHNldFBob3RvcyhuZXdEYXRhKSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT0gNDAzKSB7XHJcbiAgICAgICAgYXV0aFNlcnZpY2VzLnJlZnJlc2hUb2tlbigpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiAgY29uc3Qgc2hhcmVBY3Rpb24gPSBhc3luYyAodHlwZSwgaWQpID0+IHtcclxuXHJcbiAgICB2YXIgdXJsID0gJyc7XHJcbiAgICAgIGlmICh0eXBlID09PSAnUGhvdG8nKSB7XHJcbiAgICAgICAgdXJsID0gJy9waG90b3Mvc2hhcmUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdWaWRlb0NsaXAnKSB7XHJcbiAgICAgICAgdXJsID0gJy92aWRlby1jbGlwcy9zaGFyZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0l0ZW0nKSB7XHJcbiAgICAgICAgdXJsID0gJy9pdGVtcy9zaGFyZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1Bvc3QnKSB7XHJcbiAgICAgICAgdXJsID0gJy9wb3N0cy9zaGFyZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0NvbW1lbnQnKSB7XHJcbiAgICAgICAgdXJsID0gJy9jb21tZW50cy9zaGFyZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1NoYXJlJykge1xyXG4gICAgICAgIHVybCA9ICcvcG9zdHMvc2hhcmUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdNYXJrZXRwbGFjZUl0ZW1Gb3JTYWxlJykge1xyXG4gICAgICAgIHVybCA9ICcvbWFya2V0cGxhY2UvaXRlbXMtZm9yLXNhbGUvc2hhcmUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdNYXJrZXRwbGFjZUl0ZW1Ub0J1eScpIHtcclxuICAgICAgICB1cmwgPSAnL21hcmtldHBsYWNlL2l0ZW1zLXRvLWJ1eS9zaGFyZSc7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc2hhcmVkOiBpZCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuXHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgIG1lc3NhZ2Uuc3VjY2VzcygnU2hhcmVkIHN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICB9IGVsc2UgaWYoc2F0dXMgPT0gNDAzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGF1dGhTZXJ2aWNlcy5yZWZyZXNoVG9rZW4oKTtcclxuICAgICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IG9uVXBkYXRlVGltZWxpbmUgPSAoZGF0YSkgPT4ge1xyXG4gICAgdmFyIG5ld1Bob3RvcyA9IHN0b3JhZ2U/LnBob3Rvc0RhdGEubWFwKGVsZW1lbnQgPT4ge1xyXG4gICAgICBpZihlbGVtZW50LmlkID09IGRhdGEuaWQpIHtcclxuICAgICAgICBsZXQgYWRkRWxlbWVudCA9IHtcclxuICAgICAgICAgIGFjY291bnQ6IGF1dGgudXNlciwgXHJcbiAgICAgICAgICAuLi5kYXRhLmNvbW1lbnRzWzBdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHR5cGVvZiBlbGVtZW50LmNvbW1lbnRzID09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICBlbGVtZW50Wydjb21tZW50cyddID0gW2FkZEVsZW1lbnRdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBlbGVtZW50LmNvbW1lbnRzLnB1c2goYWRkRWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsZW1lbnQuY29tbWVudHNDb3VudCArPSBkYXRhLmNvbW1lbnRzQ291bnQ7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgZGlzcGF0Y2goc2V0UGhvdG9zKG5ld1Bob3RvcykpO1xyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0UGhvdG9zKCk7XHJcbiAgfSwgW10pO1xyXG4gIFxyXG4gIGNvbnN0IFtzaG93TW9kYWwsIGhpZGVNb2RhbF0gPSB1c2VNb2RhbCgoeyBpbjogb3BlbiB9KSA9PiAoXHJcbiAgICA8UGhvdG9zUHJvdmlkZXI+XHJcbiAgICAgIDxQaG90b3NNb2RhbFxyXG4gICAgICAgIHRpdGxlPVwiUGhvdG8gZGV0YWlsXCJcclxuICAgICAgICBzaG93TW9kYWw9e29wZW59XHJcbiAgICAgICAgb25DbG9zZT17aGlkZU1vZGFsfVxyXG4gICAgICAgIGRhdGE9e1Bob3RvRGF0YUZvck1vZGFsfVxyXG4gICAgICAgIHByb2ZpbGVQaG90b1xyXG4gICAgICAgIGxpa2VBY3Rpb249e2xpa2VBY3Rpb259XHJcbiAgICAgICAgc2hhcmVBY3Rpb249e3NoYXJlQWN0aW9ufVxyXG4gICAgICAgIG9uVXBkYXRlVGltZWxpbmU9e29uVXBkYXRlVGltZWxpbmV9XHJcbiAgICAgICAgYXV0aD17YXV0aH1cclxuICAgICAgLz5cclxuICAgIDwvUGhvdG9zUHJvdmlkZXI+XHJcbiAgKSk7XHJcbiAgXHJcbiAgY29uc29sZS5sb2coUGhvdG9EYXRhRm9yTW9kYWwpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXHJcbiAgICAgICAgICBzdHlsZXMuY29udGFpbmVyLFxyXG4gICAgICAgICAgc3R5bGVzLmNvbnRhaW5lcl9iZyxcclxuICAgICAgICAgIHN0eWxlcy5jb250YWluZXJfcmFkaXVzXHJcbiAgICAgICAgKX1cclxuICAgICAgICBcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnZV90aXRsZX0+XHJcbiAgICAgICAgICBQaG90b3NcclxuICAgICAgICAgIDxCdXR0b24gc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcsIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsIGNvbG9yOiAnIzBkN2FjNycgfX0gb25DbGljaz17KCkgPT4gc2V0UG9zdE1vZGFsKHRydWUpfT5BZGQgUGhvdG9zL1ZpZGVvPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgIHtQaG90b0RhdGFGb3JNb2RhbC5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgIGNvbnN0IG1lbnUgPSAoXHJcbiAgICAgICAgICAgIDxNZW51PlxyXG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0gb25DbGljaz17KCkgPT4gZGVsZXRlUGhvdG8oaXRlbS5pZCl9PlxyXG4gICAgICAgICAgICAgICAgPERlbGV0ZU91dGxpbmVkIHN0eWxlPXt7IGZvbnRTaXplOiAyMCB9fS8+IDxzcGFuPkRlbGV0ZSBQaG90bzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5waG90b19jb250YWluZXJ9XHJcbiAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5waG90b30gPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2l0ZW0uYmxvYl90bn1gfSBhbHQ9XCJcIiBzdHlsZT17e3dpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnfX0gb25DbGljaz17KCkgPT4gc2hvd01vZGFsKCl9Lz5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93biBvdmVybGF5PXttZW51fSB0cmlnZ2VyPXtbJ2NsaWNrJ119PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVkaXRXcmFwcGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8RWRpdEZpbGxlZCBzdHlsZT17eyBcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiA0XHJcbiAgICAgICAgICAgICAgICAgICAgfX0vPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPE1vZGFsV3JhcHBlclxyXG4gICAgICAgICAgdGl0bGU9XCJDcmVhdGUgUGhvdG9zXCJcclxuICAgICAgICAgIHNob3dNb2RhbD17cG9zdE1vZGFsfVxyXG4gICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0UG9zdE1vZGFsKGZhbHNlKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8UG9zdGluZ1Bob3RvcyBvblBvc3Rpbmc9e29uUG9zdGluZ30vPlxyXG4gICAgICA8L01vZGFsV3JhcHBlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlcXVpcmVBdXRoKFBob3Rvcyk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=