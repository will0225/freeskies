webpackHotUpdate_N_E("pages/marketplace",{

/***/ "./containers/Marketplace/Marketplace.js":
/*!***********************************************!*\
  !*** ./containers/Marketplace/Marketplace.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var helpers_hoc_requireAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! helpers/hoc/requireAuth */ "./helpers/hoc/requireAuth.js");
/* harmony import */ var _styles_marketplace_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/marketplace.module.scss */ "./containers/Marketplace/styles/marketplace.module.scss");
/* harmony import */ var _styles_marketplace_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_marketplace_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components_header_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/header/Header */ "./components/header/Header.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _configs_API__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../configs/API */ "./configs/API.js");
/* harmony import */ var components_profile_MarketSection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/profile/MarketSection */ "./components/profile/MarketSection.js");
/* harmony import */ var _components_common_LoadingWrapper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/common/LoadingWrapper */ "./components/common/LoadingWrapper.js");
/* harmony import */ var _storage_MarketplaceContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./storage/MarketplaceContext */ "./containers/Marketplace/storage/MarketplaceContext.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./actions */ "./containers/Marketplace/actions/index.js");
/* harmony import */ var components_common_ModalWrapper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/common/ModalWrapper */ "./components/common/ModalWrapper.js");
/* harmony import */ var _AddMarketItem__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./AddMarketItem */ "./containers/Marketplace/AddMarketItem.js");
/* harmony import */ var _EditMarketItem__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./EditMarketItem */ "./containers/Marketplace/EditMarketItem.js");
/* harmony import */ var _DetailMarketItem__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./DetailMarketItem */ "./containers/Marketplace/DetailMarketItem.js");





var _jsxFileName = "D:\\Freeskies-development-\\containers\\Marketplace\\Marketplace.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

















var SubMenu = antd__WEBPACK_IMPORTED_MODULE_8__["Menu"].SubMenu;

function Marketplace(_ref) {
  _s();

  var _this = this;

  var authServices = _ref.authServices,
      auth = _ref.auth;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_storage_MarketplaceContext__WEBPACK_IMPORTED_MODULE_14__["MarketplaceContext"]),
      storage = _useContext[0],
      dispatch = _useContext[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      marketModal = _useState[0],
      setMarketModal = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      detailMarketModal = _useState2[0],
      setDetailMarketModal = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('MarketplaceItemForSale'),
      marketItemType = _useState3[0],
      setMarketItemType = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      marketItem = _useState4[0],
      setMarketItem = _useState4[1];

  var TabPane = antd__WEBPACK_IMPORTED_MODULE_8__["Tabs"].TabPane;
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    getCategories();
    getMarketPlaceForSale();
    getMarketPlaceToBuy();
  }, []);

  var getCategories = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
      var request, data, status;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return Object(_configs_API__WEBPACK_IMPORTED_MODULE_11__["default"])({
                method: 'get',
                url: '/marketplace/categories',
                headers: {
                  'x-token': auth.token
                }
              });

            case 3:
              request = _context.sent;
              data = request.data, status = request.status;

              if (status == 200) {
                dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["setMarketCategories"])(data));
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

    return function getCategories() {
      return _ref2.apply(this, arguments);
    };
  }();

  var getMarketPlaceForSale = /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2() {
      var request, data, status;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["setLoading"])(true));
              _context2.prev = 1;
              _context2.next = 4;
              return Object(_configs_API__WEBPACK_IMPORTED_MODULE_11__["default"])({
                method: 'post',
                url: '/accounts/marketplace/get-items-for-sale',
                data: {
                  "offset": 0,
                  "first": 10
                },
                headers: {
                  'x-token': auth.token
                }
              });

            case 4:
              request = _context2.sent;
              data = request.data, status = request.status;

              if (status === 200) {
                dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["setMarketSaleData"])(data));
                dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["setLoading"])(false));
              }

              _context2.next = 12;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](1);
              console.log(_context2.t0);

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 9]]);
    }));

    return function getMarketPlaceForSale() {
      return _ref3.apply(this, arguments);
    };
  }();

  var getMarketPlaceToBuy = /*#__PURE__*/function () {
    var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3() {
      var request, data, status;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return Object(_configs_API__WEBPACK_IMPORTED_MODULE_11__["default"])({
                method: 'post',
                url: '/accounts/marketplace/get-items-to-buy',
                data: {
                  "offset": 0,
                  "first": 10
                },
                headers: {
                  'x-token': auth.token
                }
              });

            case 3:
              request = _context3.sent;
              data = request.data, status = request.status;

              if (status === 200) {
                dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["setMarketBuyData"])(data));
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

    return function getMarketPlaceToBuy() {
      return _ref4.apply(this, arguments);
    };
  }();

  var editItem = /*#__PURE__*/function () {
    var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee4(item_id, saleOrbuy) {
      var request, data, status;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return");

            case 5:
              request = _context4.sent;
              data = request.data, status = request.status;

              if (status === 201) {
                if (saleOrbuy) {// dispatch(setMarketSaleData([...storage.marketSaleData, data]))
                } else {// dispatch(setMarketBuyData([...storage.marketBuyData, data]))
                  }

                setEditMarketModal(true);
              } else {
                antd__WEBPACK_IMPORTED_MODULE_8__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
              }

              dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["setLoading"])(false));
              _context4.next = 11;
              return request;

            case 11:
              return _context4.abrupt("return", _context4.sent);

            case 14:
              _context4.prev = 14;
              _context4.t0 = _context4["catch"](1);
              dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["setLoading"])(false));

            case 17:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[1, 14]]);
    }));

    return function editItem(_x, _x2) {
      return _ref5.apply(this, arguments);
    };
  }();

  var onUpdateComments = function onUpdateComments(data) {
    setMarketItem(_objectSpread(_objectSpread({}, marketItem), {}, {
      comments: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(marketItem.comments), [_objectSpread(_objectSpread({}, data.comments[0]), {}, {
        account: auth.user
      })])
    }));
  };

  var getDetailMarketItem = /*#__PURE__*/function () {
    var _ref6 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee5(id, saleOrbuy) {
      var request, data, status;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              setDetailMarketModal(true);

              if (!saleOrbuy) {
                setMarketItemType('MarketplaceItemToBuy');
              }

              _context5.prev = 2;
              dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["setLoading"])(true));
              _context5.next = 6;
              return Object(_configs_API__WEBPACK_IMPORTED_MODULE_11__["default"])({
                method: 'post',
                url: saleOrbuy ? '/marketplace/items-for-sale/get' : '/marketplace/items-to-buy/get',
                data: {
                  id: id
                },
                headers: {
                  'x-token': auth.token
                }
              });

            case 6:
              request = _context5.sent;
              data = request.data, status = request.status;

              if (status === 200) {
                setMarketItem(data);
              } else {
                antd__WEBPACK_IMPORTED_MODULE_8__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
              }

              dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["setLoading"])(false));
              _context5.next = 12;
              return request;

            case 12:
              return _context5.abrupt("return", _context5.sent);

            case 15:
              _context5.prev = 15;
              _context5.t0 = _context5["catch"](2);
              dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["setLoading"])(false));

            case 18:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[2, 15]]);
    }));

    return function getDetailMarketItem(_x3, _x4) {
      return _ref6.apply(this, arguments);
    };
  }();

  var likeAction = /*#__PURE__*/function () {
    var _ref7 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee6(type, id, term) {
      var url, request, data, status;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              console.log(type);
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

              _context6.prev = 3;
              _context6.next = 6;
              return Object(_configs_API__WEBPACK_IMPORTED_MODULE_11__["default"])({
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

            case 6:
              request = _context6.sent;
              data = request.data, status = request.status;

              if (!(status === 201)) {
                _context6.next = 12;
                break;
              }

              accountData.activity.map(function (element, index) {
                if (element.id === id) {
                  element.reactions[0].reaction == term;
                  return element;
                }

                dispatch(setAccountsData(accountData));
              });
              _context6.next = 18;
              break;

            case 12:
              if (!(status == 403)) {
                _context6.next = 16;
                break;
              }

              authServices.refreshToken();
              _context6.next = 18;
              break;

            case 16:
              antd__WEBPACK_IMPORTED_MODULE_8__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
              throw new Error();

            case 18:
              _context6.next = 23;
              break;

            case 20:
              _context6.prev = 20;
              _context6.t0 = _context6["catch"](3);
              console.log(_context6.t0);

            case 23:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[3, 20]]);
    }));

    return function likeAction(_x5, _x6, _x7) {
      return _ref7.apply(this, arguments);
    };
  }();

  var shareAction = /*#__PURE__*/function () {
    var _ref8 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee7(type, id) {
      var url, request, data, status;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
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

              _context7.prev = 2;
              _context7.next = 5;
              return Object(_configs_API__WEBPACK_IMPORTED_MODULE_11__["default"])({
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
              request = _context7.sent;
              data = request.data, status = request.status;

              if (!(status === 201)) {
                _context7.next = 11;
                break;
              }

              antd__WEBPACK_IMPORTED_MODULE_8__["message"].success('Shared successfully');
              _context7.next = 17;
              break;

            case 11:
              if (!(satus == 403)) {
                _context7.next = 15;
                break;
              }

              authServices.refreshToken();
              _context7.next = 17;
              break;

            case 15:
              antd__WEBPACK_IMPORTED_MODULE_8__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
              throw new Error();

            case 17:
              _context7.next = 22;
              break;

            case 19:
              _context7.prev = 19;
              _context7.t0 = _context7["catch"](2);
              console.log(_context7.t0);

            case 22:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[2, 19]]);
    }));

    return function shareAction(_x8, _x9) {
      return _ref8.apply(this, arguments);
    };
  }();

  var ratePost = /*#__PURE__*/function () {
    var _ref9 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee8(type, postId, rate) {
      var url, request, data, status;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["setLoading"])(true, 'posting'));
              url = '';

              if (type === 'Photo') {
                url = '/photos/rate';
              } else if (type === 'VideoClip') {
                url = '/video-clips/rate';
              } else if (type === 'Item') {
                url = '/items/rate';
              } else if (type === 'Post') {
                url = '/posts/rate';
              } else if (type === 'Comment') {
                url = '/comments/rate';
              } else if (type === 'Share') {
                url = '/shares/rate';
              } else if (type === 'MarketplaceItemForSale') {
                url = '/marketplace/items-for-sale/rate';
              } else if (type === 'MarketplaceItemToBuy') {
                url = '/marketplace/items-to-buy/rate';
              }

              _context8.next = 6;
              return Object(_configs_API__WEBPACK_IMPORTED_MODULE_11__["default"])({
                method: 'post',
                url: url,
                data: {
                  id: postId,
                  rating: rate
                },
                headers: {
                  'x-token': auth.token
                }
              });

            case 6:
              request = _context8.sent;
              data = request.data, status = request.status;

              if (status === 201) {
                // getAccount();
                // message.success('Evaluate successfully');
                accountData.activity.map(function (element) {
                  if (element.id === postId && element.type === type) {
                    element.rating = rate;
                    return element;
                  }
                });
                dispatch(setAccountsData(accountData));
              } else {// message.error(data?.message || 'Something wrong');
              }

              dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["setLoading"])(false, 'posting'));
              _context8.next = 12;
              return request;

            case 12:
              return _context8.abrupt("return", _context8.sent);

            case 15:
              _context8.prev = 15;
              _context8.t0 = _context8["catch"](0);
              dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["setLoading"])(false, 'posting'));

            case 18:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[0, 15]]);
    }));

    return function ratePost(_x10, _x11, _x12) {
      return _ref9.apply(this, arguments);
    };
  }();

  var addMarketItemModal = /*#__PURE__*/function () {
    var _ref10 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee9() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              setMarketModal(true);

            case 1:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));

    return function addMarketItemModal() {
      return _ref10.apply(this, arguments);
    };
  }();

  var addMarketItem = /*#__PURE__*/function () {
    var _ref11 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee10(requestData, saleOrbuy) {
      var request, data, status;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _context10.prev = 0;
              dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["setLoading"])(true));
              _context10.next = 4;
              return Object(_configs_API__WEBPACK_IMPORTED_MODULE_11__["default"])({
                method: 'post',
                url: saleOrbuy ? '/marketplace/items-for-sale' : '/marketplace/items-to-buy',
                data: requestData,
                headers: {
                  'x-token': auth.token
                }
              });

            case 4:
              request = _context10.sent;
              data = request.data, status = request.status;

              if (status === 201) {
                if (saleOrbuy) {
                  dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["setMarketSaleData"])([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(storage.market_sale_data), [data])));
                } else {
                  dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["setMarketBuyData"])([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(storage.market_buy_data), [data])));
                }

                setMarketModal(false);
                antd__WEBPACK_IMPORTED_MODULE_8__["message"].success('Successfully Added');
              } else {
                antd__WEBPACK_IMPORTED_MODULE_8__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
              }

              dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["setLoading"])(false));
              _context10.next = 10;
              return request;

            case 10:
              return _context10.abrupt("return", _context10.sent);

            case 13:
              _context10.prev = 13;
              _context10.t0 = _context10["catch"](0);
              dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["setLoading"])(false));

            case 16:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, null, [[0, 13]]);
    }));

    return function addMarketItem(_x13, _x14) {
      return _ref11.apply(this, arguments);
    };
  }();

  var deleteMarketItem = /*#__PURE__*/function () {
    var _ref12 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee11(id, saleOrbuy) {
      var request, data, status, newMarketSaleData, newMarketBuyData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              _context11.prev = 0;
              _context11.next = 3;
              return Object(_configs_API__WEBPACK_IMPORTED_MODULE_11__["default"])({
                method: 'delete',
                url: saleOrbuy ? '/marketplace/items-for-sale' : '/marketplace/items-to-buy',
                data: {
                  id: id
                },
                headers: {
                  'x-token': auth.token
                }
              });

            case 3:
              request = _context11.sent;
              data = request.data, status = request.status;

              if (status === 204) {
                if (saleOrbuy) {
                  newMarketSaleData = storage.market_sale_data.filter(function (item) {
                    return item.id !== id;
                  });
                  dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["setMarketSaleData"])(newMarketSaleData));
                } else {
                  newMarketBuyData = storage.market_buy_data.filter(function (item) {
                    return item.id !== id;
                  });
                  dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["setMarketBuyData"])(newMarketBuyData));
                }

                antd__WEBPACK_IMPORTED_MODULE_8__["message"].success('Successfully deleted');
              } else {
                antd__WEBPACK_IMPORTED_MODULE_8__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
              }

              _context11.next = 8;
              return request;

            case 8:
              return _context11.abrupt("return", _context11.sent);

            case 11:
              _context11.prev = 11;
              _context11.t0 = _context11["catch"](0);
              console.log(_context11.t0);

            case 14:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11, null, [[0, 11]]);
    }));

    return function deleteMarketItem(_x15, _x16) {
      return _ref12.apply(this, arguments);
    };
  }();

  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("div", {
    className: _styles_marketplace_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 11
    }
  }, __jsx(components_header_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _styles_marketplace_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.body,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_marketplace_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.menu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Menu"], {
    defaultSelectedKeys: ['1'],
    defaultOpenKeys: ['sub1'],
    mode: "inline",
    theme: "dark",
    inlineCollapsed: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 15
    }
  }, storage.market_categories.map(function (category, index) {
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Menu"].Item, {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 404,
        columnNumber: 21
      }
    }, category);
  }))), __jsx("div", {
    className: _styles_marketplace_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.mobile_menu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Menu"], {
    defaultSelectedKeys: ['1'],
    defaultOpenKeys: ['sub1'],
    mode: "inline",
    theme: "dark",
    inlineCollapsed: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412,
      columnNumber: 15
    }
  }, storage.market_categories.map(function (category, index) {
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Menu"].Item, {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 421,
        columnNumber: 21
      }
    }, category);
  }))), __jsx("div", {
    className: _styles_marketplace_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _styles_marketplace_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.addingButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    className: "btn btn-primary",
    style: {
      marginTop: 10
    },
    onClick: addMarketItemModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 19
    }
  }, "Add Marketplace Item")), __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Tabs"], {
    defaultActiveKey: "1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434,
      columnNumber: 16
    }
  }, __jsx(TabPane, {
    tab: __jsx("span", {
      style: {
        fontSize: 20
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 437,
        columnNumber: 25
      }
    }, "Sale"),
    key: "1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 21
    }
  }, __jsx(_components_common_LoadingWrapper__WEBPACK_IMPORTED_MODULE_13__["default"], {
    loading: storage.loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443,
      columnNumber: 23
    }
  }, __jsx(components_profile_MarketSection__WEBPACK_IMPORTED_MODULE_12__["default"], {
    data: storage.market_sale_data,
    editItem: editItem,
    sale: true,
    getDetailMarketItem: getDetailMarketItem,
    onRatePost: ratePost,
    onUpdateComments: onUpdateComments,
    likeAction: likeAction,
    shareAction: shareAction,
    deleteMarketItem: deleteMarketItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 25
    }
  }))), __jsx(TabPane, {
    tab: __jsx("span", {
      style: {
        fontSize: 20
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 459,
        columnNumber: 25
      }
    }, "Buy"),
    key: "2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 457,
      columnNumber: 21
    }
  }, __jsx(components_profile_MarketSection__WEBPACK_IMPORTED_MODULE_12__["default"], {
    data: storage.market_buy_data,
    editItem: editItem,
    onRatePost: ratePost,
    onUpdateComments: onUpdateComments,
    likeAction: likeAction,
    shareAction: shareAction,
    getDetailMarketItem: getDetailMarketItem,
    deleteMarketItem: deleteMarketItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 465,
      columnNumber: 23
    }
  }))))), __jsx(components_common_ModalWrapper__WEBPACK_IMPORTED_MODULE_16__["default"], {
    title: "Add Market Item",
    showModal: marketModal,
    onClose: function onClose() {
      return setMarketModal(false);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479,
      columnNumber: 11
    }
  }, __jsx(_AddMarketItem__WEBPACK_IMPORTED_MODULE_17__["default"], {
    auth: auth,
    onUpdate: addMarketItem,
    loading: storage.loading,
    categories: storage.market_categories,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 484,
      columnNumber: 13
    }
  })), __jsx(components_common_ModalWrapper__WEBPACK_IMPORTED_MODULE_16__["default"], {
    title: marketItem === null || marketItem === void 0 ? void 0 : marketItem.title,
    showModal: detailMarketModal,
    onClose: function onClose() {
      return setDetailMarketModal(false);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 486,
      columnNumber: 11
    }
  }, __jsx(_components_common_LoadingWrapper__WEBPACK_IMPORTED_MODULE_13__["default"], {
    loading: storage.loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 491,
      columnNumber: 13
    }
  }, __jsx(_DetailMarketItem__WEBPACK_IMPORTED_MODULE_19__["default"], {
    data: marketItem,
    onRatePost: ratePost,
    onUpdateComments: onUpdateComments,
    likeAction: likeAction,
    shareAction: shareAction,
    type: marketItemType,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 492,
      columnNumber: 17
    }
  }))));
}

_s(Marketplace, "cNZW8jzEgBXOSCIt4zDAywvqxuM=");

_c = Marketplace;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(helpers_hoc_requireAuth__WEBPACK_IMPORTED_MODULE_5__["default"])(Marketplace));

var _c, _c2;

$RefreshReg$(_c, "Marketplace");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9NYXJrZXRwbGFjZS9NYXJrZXRwbGFjZS5qcyJdLCJuYW1lcyI6WyJTdWJNZW51IiwiTWVudSIsIk1hcmtldHBsYWNlIiwiYXV0aFNlcnZpY2VzIiwiYXV0aCIsInVzZUNvbnRleHQiLCJNYXJrZXRwbGFjZUNvbnRleHQiLCJzdG9yYWdlIiwiZGlzcGF0Y2giLCJ1c2VTdGF0ZSIsIm1hcmtldE1vZGFsIiwic2V0TWFya2V0TW9kYWwiLCJkZXRhaWxNYXJrZXRNb2RhbCIsInNldERldGFpbE1hcmtldE1vZGFsIiwibWFya2V0SXRlbVR5cGUiLCJzZXRNYXJrZXRJdGVtVHlwZSIsIm1hcmtldEl0ZW0iLCJzZXRNYXJrZXRJdGVtIiwiVGFiUGFuZSIsIlRhYnMiLCJ1c2VFZmZlY3QiLCJnZXRDYXRlZ29yaWVzIiwiZ2V0TWFya2V0UGxhY2VGb3JTYWxlIiwiZ2V0TWFya2V0UGxhY2VUb0J1eSIsIkFQSSIsIm1ldGhvZCIsInVybCIsImhlYWRlcnMiLCJ0b2tlbiIsInJlcXVlc3QiLCJkYXRhIiwic3RhdHVzIiwic2V0TWFya2V0Q2F0ZWdvcmllcyIsImNvbnNvbGUiLCJsb2ciLCJzZXRMb2FkaW5nIiwic2V0TWFya2V0U2FsZURhdGEiLCJzZXRNYXJrZXRCdXlEYXRhIiwiZWRpdEl0ZW0iLCJpdGVtX2lkIiwic2FsZU9yYnV5Iiwic2V0RWRpdE1hcmtldE1vZGFsIiwibWVzc2FnZSIsImVycm9yIiwib25VcGRhdGVDb21tZW50cyIsImNvbW1lbnRzIiwiYWNjb3VudCIsInVzZXIiLCJnZXREZXRhaWxNYXJrZXRJdGVtIiwiaWQiLCJsaWtlQWN0aW9uIiwidHlwZSIsInRlcm0iLCJyZWFjdGVkIiwicmVhY3Rpb24iLCJhY2NvdW50RGF0YSIsImFjdGl2aXR5IiwibWFwIiwiZWxlbWVudCIsImluZGV4IiwicmVhY3Rpb25zIiwic2V0QWNjb3VudHNEYXRhIiwicmVmcmVzaFRva2VuIiwiRXJyb3IiLCJzaGFyZUFjdGlvbiIsInNoYXJlZCIsInN1Y2Nlc3MiLCJzYXR1cyIsInJhdGVQb3N0IiwicG9zdElkIiwicmF0ZSIsInJhdGluZyIsImFkZE1hcmtldEl0ZW1Nb2RhbCIsImFkZE1hcmtldEl0ZW0iLCJyZXF1ZXN0RGF0YSIsIm1hcmtldF9zYWxlX2RhdGEiLCJtYXJrZXRfYnV5X2RhdGEiLCJkZWxldGVNYXJrZXRJdGVtIiwibmV3TWFya2V0U2FsZURhdGEiLCJmaWx0ZXIiLCJpdGVtIiwibmV3TWFya2V0QnV5RGF0YSIsInN0eWxlcyIsImhlYWRlciIsImJvZHkiLCJtZW51IiwibWFya2V0X2NhdGVnb3JpZXMiLCJjYXRlZ29yeSIsIm1vYmlsZV9tZW51IiwiY29udGVudCIsImFkZGluZ0J1dHRvbiIsIm1hcmdpblRvcCIsImZvbnRTaXplIiwibG9hZGluZyIsInRpdGxlIiwicmVxdWlyZUF1dGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7SUFFUUEsTyxHQUFZQyx5QyxDQUFaRCxPOztBQUdSLFNBQVNFLFdBQVQsT0FBNkM7QUFBQTs7QUFBQTs7QUFBQSxNQUF2QkMsWUFBdUIsUUFBdkJBLFlBQXVCO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFROztBQUFBLG9CQUViQyx3REFBVSxDQUFDQywrRUFBRCxDQUZHO0FBQUEsTUFFbENDLE9BRmtDO0FBQUEsTUFFekJDLFFBRnlCOztBQUFBLGtCQUdIQyxzREFBUSxDQUFDLEtBQUQsQ0FITDtBQUFBLE1BR2xDQyxXQUhrQztBQUFBLE1BR3JCQyxjQUhxQjs7QUFBQSxtQkFJU0Ysc0RBQVEsQ0FBQyxLQUFELENBSmpCO0FBQUEsTUFJbENHLGlCQUprQztBQUFBLE1BSWZDLG9CQUplOztBQUFBLG1CQUtHSixzREFBUSxDQUFDLHdCQUFELENBTFg7QUFB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QUEsS0FLRSxNQUFDLHVEQUFEO0FBQWUsUUFBSSxFQUFFUCxJQUFyQjtBQUEyQixZQUFRLEVBQUVxRSxhQUFyQztBQUFvRCxXQUFPLEVBQUVsRSxPQUFPLENBQUNzRixPQUFyRTtBQUE4RSxjQUFVLEVBQUV0RixPQUFPLENBQUMrRSxpQkFBbEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLENBMUZGLEVBaUdFLE1BQUMsdUVBQUQ7QUFDRSxTQUFLLEVBQUV0RSxVQUFGLGFBQUVBLFVBQUYsdUJBQUVBLFVBQVUsQ0FBRThFLEtBRHJCO0FBRUUsYUFBUyxFQUFFbEYsaUJBRmI7QUFHRSxXQUFPLEVBQUU7QUFBQSxhQUFNQyxvQkFBb0IsQ0FBQyxLQUFELENBQTFCO0FBQUEsS0FIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0UsTUFBQywwRUFBRDtBQUFnQixXQUFPLEVBQUVOLE9BQU8sQ0FBQ3NGLE9BQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDBEQUFEO0FBQ0UsUUFBSSxFQUFFN0UsVUFEUjtBQUVFLGNBQVUsRUFBRW9ELFFBRmQ7QUFHRSxvQkFBZ0IsRUFBRXhCLGdCQUhwQjtBQUlFLGNBQVUsRUFBRU0sVUFKZDtBQUtFLGVBQVcsRUFBRWMsV0FMZjtBQU1FLFFBQUksRUFBRWxELGNBTlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBTEYsQ0FqR0YsQ0FESjtBQXFISDs7R0FyZFFaLFc7O0tBQUFBLFc7QUF1ZE0scUVBQUE2Rix1RUFBVyxDQUFDN0YsV0FBRCxDQUExQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tYXJrZXRwbGFjZS4yZWZiYWM2MjNiOTAwZWZmMWM5ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlcXVpcmVBdXRoIGZyb20gJ2hlbHBlcnMvaG9jL3JlcXVpcmVBdXRoJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy9tYXJrZXRwbGFjZS5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyJztcclxuaW1wb3J0IHsgTWVudSwgQnV0dG9uLCBUYWJzLCBtZXNzYWdlIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7XHJcbiAgQXBwc3RvcmVPdXRsaW5lZCxcclxuICBNZW51VW5mb2xkT3V0bGluZWQsXHJcbiAgTWVudUZvbGRPdXRsaW5lZCxcclxuICBQaWVDaGFydE91dGxpbmVkLFxyXG4gIERlc2t0b3BPdXRsaW5lZCxcclxuICBDb250YWluZXJPdXRsaW5lZCxcclxuICBNYWlsT3V0bGluZWQsXHJcbn0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IEFQSSBmcm9tICcuLi8uLi9jb25maWdzL0FQSSc7XHJcbmltcG9ydCBNYXJrZXRTZWN0aW9uIGZyb20gJ2NvbXBvbmVudHMvcHJvZmlsZS9NYXJrZXRTZWN0aW9uJztcclxuaW1wb3J0IExvYWRpbmdXcmFwcGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9uL0xvYWRpbmdXcmFwcGVyJztcclxuaW1wb3J0IHsgTWFya2V0cGxhY2VDb250ZXh0IH0gZnJvbSAnLi9zdG9yYWdlL01hcmtldHBsYWNlQ29udGV4dCc7XHJcbmltcG9ydCB7IFxyXG4gIHNldExvYWRpbmcsIFxyXG4gIHNldFBvc3RMb2FkaW5nLCBcclxuICBzZXRNYXJrZXRDYXRlZ29yaWVzLFxyXG4gIHNldE1hcmtldFNhbGVEYXRhLFxyXG4gIHNldE1hcmtldEJ1eURhdGFcclxuXHJcbn0gZnJvbSAnLi9hY3Rpb25zJztcclxuaW1wb3J0IE1vZGFsV3JhcHBlciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9Nb2RhbFdyYXBwZXInO1xyXG5pbXBvcnQgQWRkTWFya2V0SXRlbSBmcm9tICcuL0FkZE1hcmtldEl0ZW0nO1xyXG5pbXBvcnQgRWRpdE1hcmtldEl0ZW0gZnJvbSAnLi9FZGl0TWFya2V0SXRlbSc7XHJcbmltcG9ydCBEZXRhaWxNYXJrZXRJdGVtIGZyb20gJy4vRGV0YWlsTWFya2V0SXRlbSc7XHJcblxyXG5jb25zdCB7IFN1Yk1lbnUgfSA9IE1lbnU7XHJcblxyXG5cclxuZnVuY3Rpb24gTWFya2V0cGxhY2Uoe2F1dGhTZXJ2aWNlcywgIGF1dGggfSkge1xyXG5cclxuICAgIGNvbnN0IFtzdG9yYWdlLCBkaXNwYXRjaF0gPSB1c2VDb250ZXh0KE1hcmtldHBsYWNlQ29udGV4dCk7XHJcbiAgICBjb25zdCBbbWFya2V0TW9kYWwsIHNldE1hcmtldE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtkZXRhaWxNYXJrZXRNb2RhbCwgc2V0RGV0YWlsTWFya2V0TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW21hcmtldEl0ZW1UeXBlLCBzZXRNYXJrZXRJdGVtVHlwZV0gPSB1c2VTdGF0ZSgnTWFya2V0cGxhY2VJdGVtRm9yU2FsZScpO1xyXG4gICAgY29uc3QgW21hcmtldEl0ZW0sIHNldE1hcmtldEl0ZW1dID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgY29uc3QgeyBUYWJQYW5lIH0gPSBUYWJzO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgZ2V0Q2F0ZWdvcmllcygpO1xyXG4gICAgICBnZXRNYXJrZXRQbGFjZUZvclNhbGUoKTsgXHJcbiAgICAgIGdldE1hcmtldFBsYWNlVG9CdXkoKTtcclxuICAgIH0sIFtdKVxyXG4gICAgXHJcbiAgICBjb25zdCBnZXRDYXRlZ29yaWVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICAgICAgdXJsOiAnL21hcmtldHBsYWNlL2NhdGVnb3JpZXMnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuICAgICAgICAgIGlmKHN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goc2V0TWFya2V0Q2F0ZWdvcmllcyhkYXRhKSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRNYXJrZXRQbGFjZUZvclNhbGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcodHJ1ZSkpO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICB1cmw6ICcvYWNjb3VudHMvbWFya2V0cGxhY2UvZ2V0LWl0ZW1zLWZvci1zYWxlJyxcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgXCJvZmZzZXRcIjogMCxcclxuICAgICAgICAgICAgXCJmaXJzdFwiOiAxMFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcbiAgICAgICAgaWYoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgIGRpc3BhdGNoKHNldE1hcmtldFNhbGVEYXRhKGRhdGEpKTtcclxuICAgICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb25zdCBnZXRNYXJrZXRQbGFjZVRvQnV5ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICB1cmw6ICcvYWNjb3VudHMvbWFya2V0cGxhY2UvZ2V0LWl0ZW1zLXRvLWJ1eScsXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIFwib2Zmc2V0XCI6IDAsXHJcbiAgICAgICAgICAgIFwiZmlyc3RcIjogMTBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG4gICAgICAgIGlmKHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICBkaXNwYXRjaChzZXRNYXJrZXRCdXlEYXRhKGRhdGEpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZWRpdEl0ZW0gPSBhc3luYyAoaXRlbV9pZCwgc2FsZU9yYnV5KSA9PiB7cmV0dXJuO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcodHJ1ZSkpO1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICB1cmw6IHNhbGVPcmJ1eT8nL21hcmtldHBsYWNlL2l0ZW1zLWZvci1zYWxlL2dldCc6Jy9tYXJrZXRwbGFjZS9pdGVtcy10by1idXkvZ2V0JyxcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgaWQ6IGl0ZW1faWRcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG4gICAgICAgIGlmIChzdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgICAgaWYoc2FsZU9yYnV5KSB7XHJcbiAgICAgICAgICAgIC8vIGRpc3BhdGNoKHNldE1hcmtldFNhbGVEYXRhKFsuLi5zdG9yYWdlLm1hcmtldFNhbGVEYXRhLCBkYXRhXSkpXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBkaXNwYXRjaChzZXRNYXJrZXRCdXlEYXRhKFsuLi5zdG9yYWdlLm1hcmtldEJ1eURhdGEsIGRhdGFdKSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNldEVkaXRNYXJrZXRNb2RhbCh0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpO1xyXG4gICAgICAgIHJldHVybiBhd2FpdCByZXF1ZXN0O1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uVXBkYXRlQ29tbWVudHMgPSAoZGF0YSkgPT4ge1xyXG4gICAgICBzZXRNYXJrZXRJdGVtKHsgLi4ubWFya2V0SXRlbSwgY29tbWVudHM6IFsuLi5tYXJrZXRJdGVtLmNvbW1lbnRzLCB7Li4uZGF0YS5jb21tZW50c1swXSwgYWNjb3VudDogYXV0aC51c2VyfV19KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldERldGFpbE1hcmtldEl0ZW0gPSBhc3luYyAoaWQsIHNhbGVPcmJ1eSkgPT4ge1xyXG4gICAgICBzZXREZXRhaWxNYXJrZXRNb2RhbCh0cnVlKTtcclxuICAgICAgaWYoIXNhbGVPcmJ1eSkge1xyXG4gICAgICAgIHNldE1hcmtldEl0ZW1UeXBlKCdNYXJrZXRwbGFjZUl0ZW1Ub0J1eScpXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlKSk7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgIHVybDogc2FsZU9yYnV5PycvbWFya2V0cGxhY2UvaXRlbXMtZm9yLXNhbGUvZ2V0JzonL21hcmtldHBsYWNlL2l0ZW1zLXRvLWJ1eS9nZXQnLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBpZDogaWRcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG4gICAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgc2V0TWFya2V0SXRlbShkYXRhKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpO1xyXG4gICAgICAgIHJldHVybiBhd2FpdCByZXF1ZXN0O1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxpa2VBY3Rpb24gPSBhc3luYyAodHlwZSwgaWQsIHRlcm0pID0+IHtjb25zb2xlLmxvZyh0eXBlKTtcclxuICAgICAgdmFyIHVybCA9ICcnO1xyXG4gICAgICBpZiAodHlwZSA9PT0gJ1Bob3RvJykge1xyXG4gICAgICAgIHVybCA9ICcvcGhvdG9zL3JlYWN0JztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnVmlkZW9DbGlwJykge1xyXG4gICAgICAgIHVybCA9ICcvdmlkZW8tY2xpcHMvcmVhY3QnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdJdGVtJykge1xyXG4gICAgICAgIHVybCA9ICcvaXRlbXMvcmVhY3QnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdQb3N0Jykge1xyXG4gICAgICAgIHVybCA9ICcvcG9zdHMvcmVhY3QnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdDb21tZW50Jykge1xyXG4gICAgICAgIHVybCA9ICcvY29tbWVudHMvcmVhY3QnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdTaGFyZScpIHtcclxuICAgICAgICB1cmwgPSAnL3NoYXJlcy9yZWFjdCc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ01hcmtldHBsYWNlSXRlbUZvclNhbGUnKSB7XHJcbiAgICAgICAgdXJsID0gJy9tYXJrZXRwbGFjZS9pdGVtcy1mb3Itc2FsZS9yZWFjdCc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ01hcmtldHBsYWNlSXRlbVRvQnV5Jykge1xyXG4gICAgICAgIHVybCA9ICcvbWFya2V0cGxhY2UvaXRlbXMtdG8tYnV5L3JlYWN0JztcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgcmVhY3RlZDogaWQsXHJcbiAgICAgICAgICAgIHJlYWN0aW9uOiB0ZXJtXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuICAgICAgICBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICAgIGFjY291bnREYXRhLmFjdGl2aXR5Lm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYoZWxlbWVudC5pZCA9PT0gaWQpIHtcclxuICAgICAgICAgICAgICBlbGVtZW50LnJlYWN0aW9uc1swXS5yZWFjdGlvbiA9PSB0ZXJtO1xyXG4gICAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldEFjY291bnRzRGF0YShhY2NvdW50RGF0YSkpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PSA0MDMpIHtcclxuICAgICAgICAgIGF1dGhTZXJ2aWNlcy5yZWZyZXNoVG9rZW4oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfVxyXG4gIFxyXG4gIH1cclxuICBcclxuICAgIGNvbnN0IHNoYXJlQWN0aW9uID0gYXN5bmMgKHR5cGUsIGlkKSA9PiB7XHJcbiAgXHJcbiAgICAgIHZhciB1cmwgPSAnJztcclxuICAgICAgICBpZiAodHlwZSA9PT0gJ1Bob3RvJykge1xyXG4gICAgICAgICAgdXJsID0gJy9waG90b3Mvc2hhcmUnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1ZpZGVvQ2xpcCcpIHtcclxuICAgICAgICAgIHVybCA9ICcvdmlkZW8tY2xpcHMvc2hhcmUnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0l0ZW0nKSB7XHJcbiAgICAgICAgICB1cmwgPSAnL2l0ZW1zL3NoYXJlJztcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdQb3N0Jykge1xyXG4gICAgICAgICAgdXJsID0gJy9wb3N0cy9zaGFyZSc7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnQ29tbWVudCcpIHtcclxuICAgICAgICAgIHVybCA9ICcvY29tbWVudHMvc2hhcmUnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1NoYXJlJykge1xyXG4gICAgICAgICAgdXJsID0gJy9wb3N0cy9zaGFyZSc7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnTWFya2V0cGxhY2VJdGVtRm9yU2FsZScpIHtcclxuICAgICAgICAgIHVybCA9ICcvbWFya2V0cGxhY2UvaXRlbXMtZm9yLXNhbGUvc2hhcmUnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ01hcmtldHBsYWNlSXRlbVRvQnV5Jykge1xyXG4gICAgICAgICAgdXJsID0gJy9tYXJrZXRwbGFjZS9pdGVtcy10by1idXkvc2hhcmUnO1xyXG4gICAgICAgIH1cclxuICBcclxuICBcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIHNoYXJlZDogaWQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuICBcclxuICAgICAgICBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcygnU2hhcmVkIHN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICAgIH0gZWxzZSBpZihzYXR1cyA9PSA0MDMpXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGF1dGhTZXJ2aWNlcy5yZWZyZXNoVG9rZW4oKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmF0ZVBvc3QgPSBhc3luYyAodHlwZSwgcG9zdElkLCByYXRlKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlLCAncG9zdGluZycpKTtcclxuICAgICAgICBsZXQgdXJsID0gJyc7XHJcbiAgXHJcbiAgICAgICAgaWYgKHR5cGUgPT09ICdQaG90bycpIHtcclxuICAgICAgICAgIHVybCA9ICcvcGhvdG9zL3JhdGUnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1ZpZGVvQ2xpcCcpIHtcclxuICAgICAgICAgIHVybCA9ICcvdmlkZW8tY2xpcHMvcmF0ZSc7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnSXRlbScpIHtcclxuICAgICAgICAgIHVybCA9ICcvaXRlbXMvcmF0ZSc7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnUG9zdCcpIHtcclxuICAgICAgICAgIHVybCA9ICcvcG9zdHMvcmF0ZSc7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnQ29tbWVudCcpIHtcclxuICAgICAgICAgIHVybCA9ICcvY29tbWVudHMvcmF0ZSc7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnU2hhcmUnKSB7XHJcbiAgICAgICAgICB1cmwgPSAnL3NoYXJlcy9yYXRlJztcclxuICAgICAgICB9IGVsc2UgaWYodHlwZSA9PT0gJ01hcmtldHBsYWNlSXRlbUZvclNhbGUnKSB7XHJcbiAgICAgICAgICB1cmwgPSAnL21hcmtldHBsYWNlL2l0ZW1zLWZvci1zYWxlL3JhdGUnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ01hcmtldHBsYWNlSXRlbVRvQnV5Jykge1xyXG4gICAgICAgICAgdXJsID0gJy9tYXJrZXRwbGFjZS9pdGVtcy10by1idXkvcmF0ZSc7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGlkOiBwb3N0SWQsXHJcbiAgICAgICAgICAgIHJhdGluZzogcmF0ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG4gIFxyXG4gICAgICAgIGlmIChzdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgICAgLy8gZ2V0QWNjb3VudCgpO1xyXG4gICAgICAgICAgLy8gbWVzc2FnZS5zdWNjZXNzKCdFdmFsdWF0ZSBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgICAgIGFjY291bnREYXRhLmFjdGl2aXR5Lm1hcChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgaWYoZWxlbWVudC5pZCA9PT0gcG9zdElkICYmIGVsZW1lbnQudHlwZSA9PT0gdHlwZSkge1xyXG4gICAgICAgICAgICAgIGVsZW1lbnQucmF0aW5nID0gcmF0ZTtcclxuICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIGRpc3BhdGNoKHNldEFjY291bnRzRGF0YShhY2NvdW50RGF0YSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlLCAncG9zdGluZycpKTtcclxuICBcclxuICAgICAgICByZXR1cm4gYXdhaXQgcmVxdWVzdDtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlLCAncG9zdGluZycpKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBhZGRNYXJrZXRJdGVtTW9kYWwgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHNldE1hcmtldE1vZGFsKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFkZE1hcmtldEl0ZW0gPSBhc3luYyAocmVxdWVzdERhdGEsIHNhbGVPcmJ1eSkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcodHJ1ZSkpO1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICB1cmw6IHNhbGVPcmJ1eT8nL21hcmtldHBsYWNlL2l0ZW1zLWZvci1zYWxlJzonL21hcmtldHBsYWNlL2l0ZW1zLXRvLWJ1eScsXHJcbiAgICAgICAgICBkYXRhOiByZXF1ZXN0RGF0YSxcclxuICAgICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgICBpZihzYWxlT3JidXkpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goc2V0TWFya2V0U2FsZURhdGEoWy4uLnN0b3JhZ2UubWFya2V0X3NhbGVfZGF0YSwgZGF0YV0pKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goc2V0TWFya2V0QnV5RGF0YShbLi4uc3RvcmFnZS5tYXJrZXRfYnV5X2RhdGEsIGRhdGFdKSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNldE1hcmtldE1vZGFsKGZhbHNlKTtcclxuICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcygnU3VjY2Vzc2Z1bGx5IEFkZGVkJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKTtcclxuICAgICAgICByZXR1cm4gYXdhaXQgcmVxdWVzdDtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkZWxldGVNYXJrZXRJdGVtID0gYXN5bmMgKGlkLCBzYWxlT3JidXkpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICAgIG1ldGhvZDogJ2RlbGV0ZScsXHJcbiAgICAgICAgICB1cmw6IHNhbGVPcmJ1eT8nL21hcmtldHBsYWNlL2l0ZW1zLWZvci1zYWxlJzonL21hcmtldHBsYWNlL2l0ZW1zLXRvLWJ1eScsXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGlkOiBpZFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjA0KSB7XHJcbiAgICAgICAgICBpZihzYWxlT3JidXkpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3TWFya2V0U2FsZURhdGEgPSBzdG9yYWdlLm1hcmtldF9zYWxlX2RhdGEuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCAhPT0gaWQgKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goc2V0TWFya2V0U2FsZURhdGEobmV3TWFya2V0U2FsZURhdGEpKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3TWFya2V0QnV5RGF0YSA9IHN0b3JhZ2UubWFya2V0X2J1eV9kYXRhLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgIT09IGlkICk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldE1hcmtldEJ1eURhdGEobmV3TWFya2V0QnV5RGF0YSkpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoJ1N1Y2Nlc3NmdWxseSBkZWxldGVkJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhd2FpdCByZXF1ZXN0O1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxyXG4gICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9keX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudX0+XHJcbiAgICAgICAgICAgICAgPE1lbnVcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRTZWxlY3RlZEtleXM9e1snMSddfVxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdE9wZW5LZXlzPXtbJ3N1YjEnXX1cclxuICAgICAgICAgICAgICAgIG1vZGU9XCJpbmxpbmVcIlxyXG4gICAgICAgICAgICAgICAgdGhlbWU9XCJkYXJrXCJcclxuICAgICAgICAgICAgICAgIGlubGluZUNvbGxhcHNlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3N0b3JhZ2UubWFya2V0X2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT17aW5kZXh9ID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2JpbGVfbWVudX0+XHJcbiAgICAgICAgICAgICAgPE1lbnVcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRTZWxlY3RlZEtleXM9e1snMSddfVxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdE9wZW5LZXlzPXtbJ3N1YjEnXX1cclxuICAgICAgICAgICAgICAgIG1vZGU9XCJpbmxpbmVcIlxyXG4gICAgICAgICAgICAgICAgdGhlbWU9XCJkYXJrXCJcclxuICAgICAgICAgICAgICAgIGlubGluZUNvbGxhcHNlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3N0b3JhZ2UubWFya2V0X2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT17aW5kZXh9ID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRkaW5nQnV0dG9ufT5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IDEwIH19IG9uQ2xpY2s9e2FkZE1hcmtldEl0ZW1Nb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBNYXJrZXRwbGFjZSBJdGVtXHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDxUYWJzIGRlZmF1bHRBY3RpdmVLZXk9XCIxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYlBhbmVcclxuICAgICAgICAgICAgICAgICAgICAgIHRhYj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAyMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBTYWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIGtleT1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICAgID4gXHJcbiAgICAgICAgICAgICAgICAgICAgICA8TG9hZGluZ1dyYXBwZXIgbG9hZGluZz17c3RvcmFnZS5sb2FkaW5nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1hcmtldFNlY3Rpb24gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e3N0b3JhZ2UubWFya2V0X3NhbGVfZGF0YX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdEl0ZW09e2VkaXRJdGVtfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzYWxlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGdldERldGFpbE1hcmtldEl0ZW09e2dldERldGFpbE1hcmtldEl0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25SYXRlUG9zdD17cmF0ZVBvc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25VcGRhdGVDb21tZW50cz17b25VcGRhdGVDb21tZW50c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsaWtlQWN0aW9uPXtsaWtlQWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlQWN0aW9uPXtzaGFyZUFjdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVNYXJrZXRJdGVtPXtkZWxldGVNYXJrZXRJdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xvYWRpbmdXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZT5cclxuICAgICAgICAgICAgICAgICAgICA8VGFiUGFuZVxyXG4gICAgICAgICAgICAgICAgICAgICAgdGFiPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IDIwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEJ1eVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9XCIyXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TWFya2V0U2VjdGlvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17c3RvcmFnZS5tYXJrZXRfYnV5X2RhdGF9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlZGl0SXRlbT17ZWRpdEl0ZW19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblJhdGVQb3N0PXtyYXRlUG9zdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25VcGRhdGVDb21tZW50cz17b25VcGRhdGVDb21tZW50c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlrZUFjdGlvbj17bGlrZUFjdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVBY3Rpb249e3NoYXJlQWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXREZXRhaWxNYXJrZXRJdGVtPXtnZXREZXRhaWxNYXJrZXRJdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVNYXJrZXRJdGVtPXtkZWxldGVNYXJrZXRJdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZT5cclxuICAgICAgICAgICAgICAgIDwvVGFicz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxNb2RhbFdyYXBwZXJcclxuICAgICAgICAgICAgdGl0bGU9XCJBZGQgTWFya2V0IEl0ZW1cIlxyXG4gICAgICAgICAgICBzaG93TW9kYWw9e21hcmtldE1vZGFsfVxyXG4gICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRNYXJrZXRNb2RhbChmYWxzZSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxBZGRNYXJrZXRJdGVtIGF1dGg9e2F1dGh9IG9uVXBkYXRlPXthZGRNYXJrZXRJdGVtfSBsb2FkaW5nPXtzdG9yYWdlLmxvYWRpbmd9IGNhdGVnb3JpZXM9e3N0b3JhZ2UubWFya2V0X2NhdGVnb3JpZXN9Lz5cclxuICAgICAgICAgIDwvTW9kYWxXcmFwcGVyPlxyXG4gICAgICAgICAgPE1vZGFsV3JhcHBlclxyXG4gICAgICAgICAgICB0aXRsZT17bWFya2V0SXRlbT8udGl0bGV9XHJcbiAgICAgICAgICAgIHNob3dNb2RhbD17ZGV0YWlsTWFya2V0TW9kYWx9XHJcbiAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldERldGFpbE1hcmtldE1vZGFsKGZhbHNlKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPExvYWRpbmdXcmFwcGVyIGxvYWRpbmc9e3N0b3JhZ2UubG9hZGluZ30+XHJcbiAgICAgICAgICAgICAgICA8RGV0YWlsTWFya2V0SXRlbSAgIFxyXG4gICAgICAgICAgICAgICAgICBkYXRhPXttYXJrZXRJdGVtfSBcclxuICAgICAgICAgICAgICAgICAgb25SYXRlUG9zdD17cmF0ZVBvc3R9XHJcbiAgICAgICAgICAgICAgICAgIG9uVXBkYXRlQ29tbWVudHM9e29uVXBkYXRlQ29tbWVudHN9XHJcbiAgICAgICAgICAgICAgICAgIGxpa2VBY3Rpb249e2xpa2VBY3Rpb259XHJcbiAgICAgICAgICAgICAgICAgIHNoYXJlQWN0aW9uPXtzaGFyZUFjdGlvbn1cclxuICAgICAgICAgICAgICAgICAgdHlwZT17bWFya2V0SXRlbVR5cGV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0xvYWRpbmdXcmFwcGVyPlxyXG4gICAgICAgICAgPC9Nb2RhbFdyYXBwZXI+XHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZXF1aXJlQXV0aChNYXJrZXRwbGFjZSk7Il0sInNvdXJjZVJvb3QiOiIifQ==