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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(PhotoDataForModal),
      imageData = _useState2[0],
      setImageData = _useState2[1];

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

  var ImageSorting = function ImageSorting(activeImageId) {
    var carouselData = [];
    var firstData = [];
    var secondData = [];

    for (var i = 0; i < imageData.length; i++) {
      if (imageData[i].blob_tn === activeImageId) {
        firstData = imageData.slice(i, imageData.length);
        break;
      }

      secondData.push(imageData[i]);
    }

    carouselData = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(firstData), secondData);
    setImageData(carouselData);
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
        lineNumber: 236,
        columnNumber: 5
      }
    }, __jsx(components_profile_PhotosModal__WEBPACK_IMPORTED_MODULE_9__["default"], {
      title: "Photo detail",
      showModal: open,
      onClose: hideModal,
      data: imageData,
      profilePhoto: true,
      likeAction: likeAction,
      shareAction: shareAction,
      onUpdateTimeline: onUpdateTimeline,
      auth: auth,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 7
      }
    }));
  }, [imageData]),
      _useModal2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useModal, 2),
      showModal = _useModal2[0],
      hideModal = _useModal2[1];

  console.log(imageData);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 5
    }
  }, __jsx(components_header_Header__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.container, _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.container_bg, _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.container_radius),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.page_title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
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
      lineNumber: 265,
      columnNumber: 11
    }
  }, "Add Photos/Video")), __jsx("div", {
    className: _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 9
    }
  }, PhotoDataForModal.map(function (item) {
    var menu = __jsx(antd__WEBPACK_IMPORTED_MODULE_16__["Menu"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 13
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_16__["Menu"].Item, {
      onClick: function onClick() {
        return deletePhoto(item.id);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 15
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_19__["DeleteOutlined"], {
      style: {
        fontSize: 20
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 17
      }
    }), " ", __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 60
      }
    }, "Delete Photo")));

    return __jsx("div", {
      className: _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.photo_container,
      key: item.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.photo,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281,
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
        showModal();
        ImageSorting(item.blob_tn);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282,
        columnNumber: 17
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_16__["Dropdown"], {
      overlay: menu,
      trigger: ['click'],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _styles_photos_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.editWrapper,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285,
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
        lineNumber: 286,
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
      lineNumber: 299,
      columnNumber: 7
    }
  }, __jsx(components_photos_PostingPhotos__WEBPACK_IMPORTED_MODULE_17__["default"], {
    onPosting: onPosting,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 11
    }
  })));
}

_s(Photos, "ZYcoUwVueNvUHrpTgWncnKFUzyQ=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9QaG90b3MvUGhvdG9zLmpzIl0sIm5hbWVzIjpbIlBob3RvcyIsImF1dGgiLCJhdXRoU2VydmljZXMiLCJ1c2VDb250ZXh0IiwiUGhvdG9zQ29udGV4dCIsInN0b3JhZ2UiLCJkaXNwYXRjaCIsInVzZVN0YXRlIiwicG9zdE1vZGFsIiwic2V0UG9zdE1vZGFsIiwiUGhvdG9EYXRhRm9yTW9kYWwiLCJwaG90b3NEYXRhIiwiZmlsdGVyIiwiaXRlbSIsInR5cGUiLCJpbWFnZURhdGEiLCJzZXRJbWFnZURhdGEiLCJnZXRQaG90b3MiLCJ0b2tlbiIsIkFQSSIsIm1ldGhvZCIsInVybCIsImhlYWRlcnMiLCJyZXF1ZXN0IiwiZGF0YSIsInN0YXR1cyIsInNldFBob3RvcyIsInJlZnJlc2hUb2tlbiIsIm1lc3NhZ2UiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJvblBvc3RpbmciLCJyZXF1ZXN0RGF0YSIsImRlbGV0ZVBob3RvIiwicGhvdG9JZCIsImlkIiwibmV3UGhvdG9zIiwic3VjY2VzcyIsImxpa2VBY3Rpb24iLCJ0ZXJtIiwicmVhY3RlZCIsInJlYWN0aW9uIiwibmV3RGF0YSIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsInJlYWN0aW9ucyIsIkVycm9yIiwic2hhcmVBY3Rpb24iLCJzaGFyZWQiLCJzYXR1cyIsIm9uVXBkYXRlVGltZWxpbmUiLCJhZGRFbGVtZW50IiwiYWNjb3VudCIsInVzZXIiLCJjb21tZW50cyIsInB1c2giLCJjb21tZW50c0NvdW50IiwiSW1hZ2VTb3J0aW5nIiwiYWN0aXZlSW1hZ2VJZCIsImNhcm91c2VsRGF0YSIsImZpcnN0RGF0YSIsInNlY29uZERhdGEiLCJpIiwibGVuZ3RoIiwiYmxvYl90biIsInNsaWNlIiwidXNlRWZmZWN0IiwidXNlTW9kYWwiLCJvcGVuIiwiaGlkZU1vZGFsIiwic2hvd01vZGFsIiwiY2xhc3NuYW1lcyIsInN0eWxlcyIsImNvbnRhaW5lciIsImNvbnRhaW5lcl9iZyIsImNvbnRhaW5lcl9yYWRpdXMiLCJwYWdlX3RpdGxlIiwiYmFja2dyb3VuZCIsImNvbG9yIiwiY29udGVudCIsIm1lbnUiLCJmb250U2l6ZSIsInBob3RvX2NvbnRhaW5lciIsInBob3RvIiwid2lkdGgiLCJoZWlnaHQiLCJlZGl0V3JhcHBlciIsInBvc2l0aW9uIiwiZGlzcGxheSIsIm1hcmdpblRvcCIsInJlcXVpcmVBdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxNQUFULE9BQXdDO0FBQUE7O0FBQUE7O0FBQUEsTUFBdEJDLElBQXNCLFFBQXRCQSxJQUFzQjtBQUFBLE1BQWhCQyxZQUFnQixRQUFoQkEsWUFBZ0I7O0FBQUEsb0JBRVZDLHdEQUFVLENBQUNDLG9FQUFELENBRkE7QUFBQSxNQUUvQkMsT0FGK0I7QUFBQSxNQUV0QkMsUUFGc0I7O0FBQUEsa0JBR0pDLHNEQUFRLENBQUMsS0FBRCxDQUhKO0FBQUEsTUFHL0JDLFNBSCtCO0FBQUEsTUFHcEJDLFlBSG9COztBQUl0QyxNQUFNQyxpQkFBaUIsR0FBR0wsT0FBSCxhQUFHQSxPQUFILHVCQUFHQSxPQUFPLENBQUVNLFVBQVQsQ0FBb0JDLE1BQXBCLENBQTJCLFVBQUFDLElBQUk7QUFBQSxXQUFJQSxJQUFJLENBQUNDLElBQUwsS0FBYyxPQUFsQjtBQUFBLEdBQS9CLENBQTFCOztBQUpzQyxtQkFLSlAsc0RBQVEsQ0FBQ0csaUJBQUQsQ0FMSjtBQUFBLE1BSy9CSyxTQUwrQjtBQUFBLE1BS3BCQyxZQUxvQjs7QUFPdEMsTUFBTUMsU0FBUztBQUFBLGlNQUFHLGlCQUFPQyxLQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFUUMsNkRBQUcsQ0FB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R0ksV0FBTyxFQUFFO0FBQUEsYUFBTUMsWUFBWSxDQUFDLEtBQUQsQ0FBbEI7QUFBQSxLQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLSSxNQUFDLHdFQUFEO0FBQWUsYUFBUyxFQUFFdUIsU0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxKLENBOUNGLENBREY7QUF3REQ7O0dBbFNRaEMsTTtVQXlOd0JxRSx5RDs7O0tBek54QnJFLE07QUFvU00scUVBQUE0Rix3RUFBVyxDQUFDNUYsTUFBRCxDQUExQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9waG90b3MuMThlODUwYmJmM2UwZTAwMTQ1ZTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyB1c2VNb2RhbCB9IGZyb20gJ3JlYWN0LW1vZGFsLWhvb2snO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlcic7XHJcbmltcG9ydCBQaG90b3NNb2RhbCBmcm9tICdjb21wb25lbnRzL3Byb2ZpbGUvUGhvdG9zTW9kYWwnO1xyXG5pbXBvcnQgUHJvZmlsZVBob3Rvc01vZGFsIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3Byb2ZpbGVQaG90b01vZGFsLmpzJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy9waG90b3MubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgcmVxdWlyZUF1dGggZnJvbSAnaGVscGVycy9ob2MvcmVxdWlyZUF1dGgnO1xyXG5pbXBvcnQgeyBQaG90b3NDb250ZXh0IH0gZnJvbSAnLi9zdG9yYWdlL1Bob3RvQ29udGV4dCc7XHJcbmltcG9ydCB7IHNldExvYWRpbmcsIHNldFBob3RvLCBzZXRQaG90b3MgfSBmcm9tICcuL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQVBJIGZyb20gJy4uLy4uL2NvbmZpZ3MvQVBJJztcclxuaW1wb3J0IHsgQnV0dG9uLCBVcGxvYWQsIG1lc3NhZ2UsIElucHV0LCBUYWJzLCBSYXRlLCBSb3csIENvbCwgRHJvcGRvd24sIE1lbnUgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0ICBQb3N0aW5nUGhvdG9zICBmcm9tICdjb21wb25lbnRzL3Bob3Rvcy9Qb3N0aW5nUGhvdG9zJztcclxuaW1wb3J0IE1vZGFsV3JhcHBlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9Nb2RhbFdyYXBwZXInO1xyXG5pbXBvcnQgeyBDYW1lcmFPdXRsaW5lZCwgRWRpdEZpbGxlZCwgRG93bk91dGxpbmVkLCBEZWxldGVPdXRsaW5lZCAgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IFBob3Rvc1Byb3ZpZGVyIH0gIGZyb20gJ2NvbnRhaW5lcnMvUGhvdG9zL3N0b3JhZ2UvUGhvdG9Db250ZXh0JztcclxuXHJcbmZ1bmN0aW9uIFBob3Rvcyh7IGF1dGgsIGF1dGhTZXJ2aWNlcyB9KSB7XHJcblxyXG4gIGNvbnN0IFtzdG9yYWdlLCBkaXNwYXRjaF0gPSB1c2VDb250ZXh0KFBob3Rvc0NvbnRleHQpO1xyXG4gIGNvbnN0IFtwb3N0TW9kYWwsIHNldFBvc3RNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgUGhvdG9EYXRhRm9yTW9kYWwgPSBzdG9yYWdlPy5waG90b3NEYXRhLmZpbHRlcihpdGVtID0+IGl0ZW0udHlwZSA9PT0gJ1Bob3RvJyk7XHJcbiAgY29uc3QgW2ltYWdlRGF0YSwgc2V0SW1hZ2VEYXRhXSA9IHVzZVN0YXRlKFBob3RvRGF0YUZvck1vZGFsKTtcclxuXHJcbiAgY29uc3QgZ2V0UGhvdG9zID0gYXN5bmMgKHRva2VuKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6ICcvYWNjb3VudHMvcGhvdG9zJyxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIGRpc3BhdGNoKHNldFBob3RvcyhkYXRhKSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSA0MDMpIHtcclxuICAgICAgICBhdXRoU2VydmljZXMucmVmcmVzaFRva2VuKGdldFBob3Rvcyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgfVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IG9uUG9zdGluZyA9IGFzeW5jIChyZXF1ZXN0RGF0YSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsOiAnL3Bob3RvcycsXHJcbiAgICAgICAgZGF0YTogcmVxdWVzdERhdGEsXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICBzZXRQb3N0TW9kYWwoMCk7XHJcbiAgICAgICAgZGlzcGF0Y2goc2V0UGhvdG9zKFsuLi5zdG9yYWdlLnBob3Rvc0RhdGEsIGRhdGFdKSlcclxuICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IDQwMykge1xyXG4gICAgICAgIGF1dGhTZXJ2aWNlcy5yZWZyZXNoVG9rZW4ob25Qb3N0aW5nKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZGVsZXRlUGhvdG8gPSBhc3luYyAocGhvdG9JZCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAnZGVsZXRlJyxcclxuICAgICAgICB1cmw6ICcvcGhvdG9zJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBpZDogcGhvdG9JZFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDQpIHtcclxuICAgICAgICBjb25zdCBuZXdQaG90b3MgPSBzdG9yYWdlPy5waG90b3NEYXRhLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgIT09IHBob3RvSWQgKTtcclxuICAgICAgICBkaXNwYXRjaChzZXRQaG90b3MobmV3UGhvdG9zKSk7XHJcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKCdEZWxldGVkIHN1Y2Nlc3NmdWxseSEnKTtcclxuICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IDQwMykge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoJ1BsZWFzZSByZWZyZXNoIHBhZ2UhJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgfVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGxpa2VBY3Rpb24gPSBhc3luYyAodHlwZSwgaWQsIHRlcm0pID0+IHtcclxuICAgIHZhciB1cmwgPSAnJztcclxuICAgIGlmICh0eXBlID09PSAnUGhvdG8nKSB7XHJcbiAgICAgIHVybCA9ICcvcGhvdG9zL3JlYWN0JztcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1ZpZGVvQ2xpcCcpIHtcclxuICAgICAgdXJsID0gJy92aWRlby1jbGlwcy9yZWFjdCc7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdJdGVtJykge1xyXG4gICAgICB1cmwgPSAnL2l0ZW1zL3JlYWN0JztcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1Bvc3QnKSB7XHJcbiAgICAgIHVybCA9ICcvcG9zdHMvcmVhY3QnO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnQ29tbWVudCcpIHtcclxuICAgICAgdXJsID0gJy9jb21tZW50cy9yZWFjdCc7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdTaGFyZScpIHtcclxuICAgICAgdXJsID0gJy9zaGFyZXMvcmVhY3QnO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnTWFya2V0cGxhY2VJdGVtRm9yU2FsZScpIHtcclxuICAgICAgdXJsID0gJy9tYXJrZXRwbGFjZS9pdGVtcy1mb3Itc2FsZS9yZWFjdCc7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdNYXJrZXRwbGFjZUl0ZW1Ub0J1eScpIHtcclxuICAgICAgdXJsID0gJy9tYXJrZXRwbGFjZS9pdGVtcy10by1idXkvcmVhY3QnO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHJlYWN0ZWQ6IGlkLFxyXG4gICAgICAgICAgcmVhY3Rpb246IHRlcm1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICB2YXIgbmV3RGF0YSA9ICBzdG9yYWdlPy5waG90b3NEYXRhLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIGlmKGVsZW1lbnQuaWQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQucmVhY3Rpb25zWzBdLnJlYWN0aW9uID09IHRlcm07XHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZGlzcGF0Y2goc2V0UGhvdG9zKG5ld0RhdGEpKTtcclxuICAgICAgICB9KVxyXG4gICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PSA0MDMpIHtcclxuICAgICAgICBhdXRoU2VydmljZXMucmVmcmVzaFRva2VuKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuICBjb25zdCBzaGFyZUFjdGlvbiA9IGFzeW5jICh0eXBlLCBpZCkgPT4ge1xyXG5cclxuICAgIHZhciB1cmwgPSAnJztcclxuICAgICAgaWYgKHR5cGUgPT09ICdQaG90bycpIHtcclxuICAgICAgICB1cmwgPSAnL3Bob3Rvcy9zaGFyZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1ZpZGVvQ2xpcCcpIHtcclxuICAgICAgICB1cmwgPSAnL3ZpZGVvLWNsaXBzL3NoYXJlJztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnSXRlbScpIHtcclxuICAgICAgICB1cmwgPSAnL2l0ZW1zL3NoYXJlJztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnUG9zdCcpIHtcclxuICAgICAgICB1cmwgPSAnL3Bvc3RzL3NoYXJlJztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnQ29tbWVudCcpIHtcclxuICAgICAgICB1cmwgPSAnL2NvbW1lbnRzL3NoYXJlJztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnU2hhcmUnKSB7XHJcbiAgICAgICAgdXJsID0gJy9wb3N0cy9zaGFyZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ01hcmtldHBsYWNlSXRlbUZvclNhbGUnKSB7XHJcbiAgICAgICAgdXJsID0gJy9tYXJrZXRwbGFjZS9pdGVtcy1mb3Itc2FsZS9zaGFyZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ01hcmtldHBsYWNlSXRlbVRvQnV5Jykge1xyXG4gICAgICAgIHVybCA9ICcvbWFya2V0cGxhY2UvaXRlbXMtdG8tYnV5L3NoYXJlJztcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzaGFyZWQ6IGlkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG5cclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKCdTaGFyZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgIH0gZWxzZSBpZihzYXR1cyA9PSA0MDMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYXV0aFNlcnZpY2VzLnJlZnJlc2hUb2tlbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25VcGRhdGVUaW1lbGluZSA9IChkYXRhKSA9PiB7XHJcbiAgICB2YXIgbmV3UGhvdG9zID0gc3RvcmFnZT8ucGhvdG9zRGF0YS5tYXAoZWxlbWVudCA9PiB7XHJcbiAgICAgIGlmKGVsZW1lbnQuaWQgPT0gZGF0YS5pZCkge1xyXG4gICAgICAgIGxldCBhZGRFbGVtZW50ID0ge1xyXG4gICAgICAgICAgYWNjb3VudDogYXV0aC51c2VyLCBcclxuICAgICAgICAgIC4uLmRhdGEuY29tbWVudHNbMF1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodHlwZW9mIGVsZW1lbnQuY29tbWVudHMgPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgIGVsZW1lbnRbJ2NvbW1lbnRzJ10gPSBbYWRkRWxlbWVudF07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGVsZW1lbnQuY29tbWVudHMucHVzaChhZGRFbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxlbWVudC5jb21tZW50c0NvdW50ICs9IGRhdGEuY29tbWVudHNDb3VudDtcclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBkaXNwYXRjaChzZXRQaG90b3MobmV3UGhvdG9zKSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBJbWFnZVNvcnRpbmcgPSAoYWN0aXZlSW1hZ2VJZCkgPT4ge1xyXG4gICAgbGV0IGNhcm91c2VsRGF0YSA9IFtdO1xyXG4gICAgbGV0IGZpcnN0RGF0YSA9IFtdO1xyXG4gICAgbGV0IHNlY29uZERhdGEgPSBbXTtcclxuICBcclxuICAgIGZvcih2YXIgaT0wOyBpPGltYWdlRGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZihpbWFnZURhdGFbaV0uYmxvYl90biA9PT0gYWN0aXZlSW1hZ2VJZCkge1xyXG4gICAgICAgIGZpcnN0RGF0YSA9IGltYWdlRGF0YS5zbGljZShpLCBpbWFnZURhdGEubGVuZ3RoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBzZWNvbmREYXRhLnB1c2goaW1hZ2VEYXRhW2ldKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY2Fyb3VzZWxEYXRhID0gWy4uLmZpcnN0RGF0YSwgLi4uc2Vjb25kRGF0YV07XHJcbiAgICBzZXRJbWFnZURhdGEoY2Fyb3VzZWxEYXRhKTtcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRQaG90b3MoKTtcclxuICB9LCBbXSk7XHJcbiAgXHJcbiAgY29uc3QgW3Nob3dNb2RhbCwgaGlkZU1vZGFsXSA9IHVzZU1vZGFsKCh7IGluOiBvcGVuIH0pID0+IChcclxuICAgIDxQaG90b3NQcm92aWRlcj5cclxuICAgICAgPFBob3Rvc01vZGFsXHJcbiAgICAgICAgdGl0bGU9XCJQaG90byBkZXRhaWxcIlxyXG4gICAgICAgIHNob3dNb2RhbD17b3Blbn1cclxuICAgICAgICBvbkNsb3NlPXtoaWRlTW9kYWx9XHJcbiAgICAgICAgZGF0YT17aW1hZ2VEYXRhfVxyXG4gICAgICAgIHByb2ZpbGVQaG90b1xyXG4gICAgICAgIGxpa2VBY3Rpb249e2xpa2VBY3Rpb259XHJcbiAgICAgICAgc2hhcmVBY3Rpb249e3NoYXJlQWN0aW9ufVxyXG4gICAgICAgIG9uVXBkYXRlVGltZWxpbmU9e29uVXBkYXRlVGltZWxpbmV9XHJcbiAgICAgICAgYXV0aD17YXV0aH1cclxuICAgICAgLz5cclxuICAgIDwvUGhvdG9zUHJvdmlkZXI+XHJcbiAgKSwgW2ltYWdlRGF0YV0pO1xyXG4gIFxyXG4gIGNvbnNvbGUubG9nKGltYWdlRGF0YSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcclxuICAgICAgICAgIHN0eWxlcy5jb250YWluZXIsXHJcbiAgICAgICAgICBzdHlsZXMuY29udGFpbmVyX2JnLFxyXG4gICAgICAgICAgc3R5bGVzLmNvbnRhaW5lcl9yYWRpdXNcclxuICAgICAgICApfVxyXG4gICAgICAgIFxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWdlX3RpdGxlfT5cclxuICAgICAgICAgIFBob3Rvc1xyXG4gICAgICAgICAgPEJ1dHRvbiBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JywgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JywgY29sb3I6ICcjMGQ3YWM3JyB9fSBvbkNsaWNrPXsoKSA9PiBzZXRQb3N0TW9kYWwodHJ1ZSl9PkFkZCBQaG90b3MvVmlkZW88L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAge1Bob3RvRGF0YUZvck1vZGFsLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgbWVudSA9IChcclxuICAgICAgICAgICAgPE1lbnU+XHJcbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBvbkNsaWNrPXsoKSA9PiBkZWxldGVQaG90byhpdGVtLmlkKX0+XHJcbiAgICAgICAgICAgICAgICA8RGVsZXRlT3V0bGluZWQgc3R5bGU9e3sgZm9udFNpemU6IDIwIH19Lz4gPHNwYW4+RGVsZXRlIFBob3RvPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnBob3RvX2NvbnRhaW5lcn1cclxuICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBob3RvfSA+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7aXRlbS5ibG9iX3RufWB9IGFsdD1cIlwiIHN0eWxlPXt7d2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJSd9fSBcclxuICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyBzaG93TW9kYWwoKTsgSW1hZ2VTb3J0aW5nKGl0ZW0uYmxvYl90bik7IH19Lz5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93biBvdmVybGF5PXttZW51fSB0cmlnZ2VyPXtbJ2NsaWNrJ119PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVkaXRXcmFwcGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8RWRpdEZpbGxlZCBzdHlsZT17eyBcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiA0XHJcbiAgICAgICAgICAgICAgICAgICAgfX0vPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPE1vZGFsV3JhcHBlclxyXG4gICAgICAgICAgdGl0bGU9XCJDcmVhdGUgUGhvdG9zXCJcclxuICAgICAgICAgIHNob3dNb2RhbD17cG9zdE1vZGFsfVxyXG4gICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0UG9zdE1vZGFsKGZhbHNlKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8UG9zdGluZ1Bob3RvcyBvblBvc3Rpbmc9e29uUG9zdGluZ30vPlxyXG4gICAgICA8L01vZGFsV3JhcHBlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlcXVpcmVBdXRoKFBob3Rvcyk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=