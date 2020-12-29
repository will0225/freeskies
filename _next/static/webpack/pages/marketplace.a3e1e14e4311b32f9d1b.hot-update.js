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
    console.log(data);
    console.log(marketItem);
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
                if (saleOrbuy) {// dispatch(setMarketSaleData([...storage.marketSaleData, data]))
                } else {// dispatch(setMarketBuyData([...storage.marketBuyData, data]))
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
      lineNumber: 392,
      columnNumber: 11
    }
  }, __jsx(components_header_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _styles_marketplace_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.body,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_marketplace_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.menu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
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
      lineNumber: 397,
      columnNumber: 15
    }
  }, storage.market_categories.map(function (category, index) {
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Menu"].Item, {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 406,
        columnNumber: 21
      }
    }, category);
  }))), __jsx("div", {
    className: _styles_marketplace_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _styles_marketplace_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.addingButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
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
      lineNumber: 415,
      columnNumber: 19
    }
  }, "Add Marketplace Item")), __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Tabs"], {
    defaultActiveKey: "1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
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
        lineNumber: 422,
        columnNumber: 25
      }
    }, "Sale"),
    key: "1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 21
    }
  }, __jsx(_components_common_LoadingWrapper__WEBPACK_IMPORTED_MODULE_13__["default"], {
    loading: storage.loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428,
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
      lineNumber: 429,
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
        lineNumber: 444,
        columnNumber: 25
      }
    }, "Buy"),
    key: "2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442,
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
      lineNumber: 450,
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
      lineNumber: 464,
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
      lineNumber: 469,
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
      lineNumber: 471,
      columnNumber: 11
    }
  }, __jsx(_components_common_LoadingWrapper__WEBPACK_IMPORTED_MODULE_13__["default"], {
    loading: storage.loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 476,
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
      lineNumber: 477,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9NYXJrZXRwbGFjZS9NYXJrZXRwbGFjZS5qcyJdLCJuYW1lcyI6WyJTdWJNZW51IiwiTWVudSIsIk1hcmtldHBsYWNlIiwiYXV0aFNlcnZpY2VzIiwiYXV0aCIsInVzZUNvbnRleHQiLCJNYXJrZXRwbGFjZUNvbnRleHQiLCJzdG9yYWdlIiwiZGlzcGF0Y2giLCJ1c2VTdGF0ZSIsIm1hcmtldE1vZGFsIiwic2V0TWFya2V0TW9kYWwiLCJkZXRhaWxNYXJrZXRNb2RhbCIsInNldERldGFpbE1hcmtldE1vZGFsIiwibWFya2V0SXRlbVR5cGUiLCJzZXRNYXJrZXRJdGVtVHlwZSIsIm1hcmtldEl0ZW0iLCJzZXRNYXJrZXRJdGVtIiwiVGFiUGFuZSIsIlRhYnMiLCJ1c2VFZmZlY3QiLCJnZXRDYXRlZ29yaWVzIiwiZ2V0TWFya2V0UGxhY2VGb3JTYWxlIiwiZ2V0TWFya2V0UGxhY2VUb0J1eSIsIkFQSSIsIm1ldGhvZCIsInVybCIsImhlYWRlcnMiLCJ0b2tlbiIsInJlcXVlc3QiLCJkYXRhIiwic3RhdHVzIiwic2V0TWFya2V0Q2F0ZWdvcmllcyIsImNvbnNvbGUiLCJsb2ciLCJzZXRMb2FkaW5nIiwic2V0TWFya2V0U2FsZURhdGEiLCJzZXRNYXJrZXRCdXlEYXRhIiwiZWRpdEl0ZW0iLCJpdGVtX2lkIiwic2FsZU9yYnV5Iiwic2V0RWRpdE1hcmtldE1vZGFsIiwibWVzc2FnZSIsImVycm9yIiwib25VcGRhdGVDb21tZW50cyIsImNvbW1lbnRzIiwiYWNjb3VudCIsInVzZXIiLCJnZXREZXRhaWxNYXJrZXRJdGVtIiwiaWQiLCJsaWtlQWN0aW9uIiwidHlwZSIsInRlcm0iLCJyZWFjdGVkIiwicmVhY3Rpb24iLCJhY2NvdW50RGF0YSIsImFjdGl2aXR5IiwibWFwIiwiZWxlbWVudCIsImluZGV4IiwicmVhY3Rpb25zIiwic2V0QWNjb3VudHNEYXRhIiwicmVmcmVzaFRva2VuIiwiRXJyb3IiLCJzaGFyZUFjdGlvbiIsInNoYXJlZCIsInN1Y2Nlc3MiLCJzYXR1cyIsInJhdGVQb3N0IiwicG9zdElkIiwicmF0ZSIsInJhdGluZyIsImFkZE1hcmtldEl0ZW1Nb2RhbCIsImFkZE1hcmtldEl0ZW0iLCJyZXF1ZXN0RGF0YSIsImRlbGV0ZU1hcmtldEl0ZW0iLCJuZXdNYXJrZXRTYWxlRGF0YSIsIm1hcmtldF9zYWxlX2RhdGEiLCJmaWx0ZXIiLCJpdGVtIiwibmV3TWFya2V0QnV5RGF0YSIsIm1hcmtldF9idXlfZGF0YSIsInN0eWxlcyIsImhlYWRlciIsImJvZHkiLCJtZW51IiwibWFya2V0X2NhdGVnb3JpZXMiLCJjYXRlZ29yeSIsImNvbnRlbnQiLCJhZGRpbmdCdXR0b24iLCJtYXJnaW5Ub3AiLCJmb250U2l6ZSIsImxvYWRpbmciLCJ0aXRsZSIsInJlcXVpcmVBdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0lBRVFBLE8sR0FBWUMseUMsQ0FBWkQsTzs7QUFHUixTQUFTRSxXQUFULE9BQTZDO0FBQUE7O0FBQUE7O0FBQUEsTUFBdkJDLFlBQXVCLFFBQXZCQSxZQUF1QjtBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTs7QUFBQSxvQkFFYkMsd0RBQVUsQ0FBQ0MsK0VBQUQsQ0FGRztBQUFBLE1BRWxDQyxPQUZrQztBQUFBLE1BRXpCQyxRQUZ5Qjs7QUFBQSxrQkFHSEMsc0RBQVEsQ0FBQyxLQUFELENBSEw7QUFBQSxNQUdsQ0MsV0FIa0M7QUFBQSxNQUdyQkMsY0FIcUI7O0FBQUEsbUJBSVNGLHNEQUFRLENBQUMsS0FBRCxDQUpqQjtBQUFBLE1BSWxDRyxpQkFKa0M7QUFBQSxNQUlmQyxvQkFKZTs7QUFBQSxtQkFLR0osc0RBQVEsQ0FBQyx3QkFBRCxDQUxYO0FBQUEsTUFLbENLLGNBTGtD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RSxjQUFVLEVBQUVNLFVBSmQ7QUFLRSxlQUFXLEVBQUVjLFdBTGY7QUFNRSxRQUFJLEVBQUVsRCxjQU5SO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQUxGLENBaEZGLENBREo7QUFtR0g7O0dBcmNRWixXOztLQUFBQSxXO0FBdWNNLHFFQUFBNEYsdUVBQVcsQ0FBQzVGLFdBQUQsQ0FBMUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFya2V0cGxhY2UuYTNlMWUxNGU0MzExYjMyZjlkMWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZXF1aXJlQXV0aCBmcm9tICdoZWxwZXJzL2hvYy9yZXF1aXJlQXV0aCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvbWFya2V0cGxhY2UubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlcic7XHJcbmltcG9ydCB7IE1lbnUsIEJ1dHRvbiwgVGFicywgbWVzc2FnZSB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQge1xyXG4gIEFwcHN0b3JlT3V0bGluZWQsXHJcbiAgTWVudVVuZm9sZE91dGxpbmVkLFxyXG4gIE1lbnVGb2xkT3V0bGluZWQsXHJcbiAgUGllQ2hhcnRPdXRsaW5lZCxcclxuICBEZXNrdG9wT3V0bGluZWQsXHJcbiAgQ29udGFpbmVyT3V0bGluZWQsXHJcbiAgTWFpbE91dGxpbmVkLFxyXG59IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBBUEkgZnJvbSAnLi4vLi4vY29uZmlncy9BUEknO1xyXG5pbXBvcnQgTWFya2V0U2VjdGlvbiBmcm9tICdjb21wb25lbnRzL3Byb2ZpbGUvTWFya2V0U2VjdGlvbic7XHJcbmltcG9ydCBMb2FkaW5nV3JhcHBlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9Mb2FkaW5nV3JhcHBlcic7XHJcbmltcG9ydCB7IE1hcmtldHBsYWNlQ29udGV4dCB9IGZyb20gJy4vc3RvcmFnZS9NYXJrZXRwbGFjZUNvbnRleHQnO1xyXG5pbXBvcnQgeyBcclxuICBzZXRMb2FkaW5nLCBcclxuICBzZXRQb3N0TG9hZGluZywgXHJcbiAgc2V0TWFya2V0Q2F0ZWdvcmllcyxcclxuICBzZXRNYXJrZXRTYWxlRGF0YSxcclxuICBzZXRNYXJrZXRCdXlEYXRhXHJcblxyXG59IGZyb20gJy4vYWN0aW9ucyc7XHJcbmltcG9ydCBNb2RhbFdyYXBwZXIgZnJvbSAnY29tcG9uZW50cy9jb21tb24vTW9kYWxXcmFwcGVyJztcclxuaW1wb3J0IEFkZE1hcmtldEl0ZW0gZnJvbSAnLi9BZGRNYXJrZXRJdGVtJztcclxuaW1wb3J0IEVkaXRNYXJrZXRJdGVtIGZyb20gJy4vRWRpdE1hcmtldEl0ZW0nO1xyXG5pbXBvcnQgRGV0YWlsTWFya2V0SXRlbSBmcm9tICcuL0RldGFpbE1hcmtldEl0ZW0nO1xyXG5cclxuY29uc3QgeyBTdWJNZW51IH0gPSBNZW51O1xyXG5cclxuXHJcbmZ1bmN0aW9uIE1hcmtldHBsYWNlKHthdXRoU2VydmljZXMsICBhdXRoIH0pIHtcclxuXHJcbiAgICBjb25zdCBbc3RvcmFnZSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChNYXJrZXRwbGFjZUNvbnRleHQpO1xyXG4gICAgY29uc3QgW21hcmtldE1vZGFsLCBzZXRNYXJrZXRNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZGV0YWlsTWFya2V0TW9kYWwsIHNldERldGFpbE1hcmtldE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFttYXJrZXRJdGVtVHlwZSwgc2V0TWFya2V0SXRlbVR5cGVdID0gdXNlU3RhdGUoJ01hcmtldHBsYWNlSXRlbUZvclNhbGUnKTtcclxuICAgIGNvbnN0IFttYXJrZXRJdGVtLCBzZXRNYXJrZXRJdGVtXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IHsgVGFiUGFuZSB9ID0gVGFicztcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGdldENhdGVnb3JpZXMoKTtcclxuICAgICAgZ2V0TWFya2V0UGxhY2VGb3JTYWxlKCk7IFxyXG4gICAgICBnZXRNYXJrZXRQbGFjZVRvQnV5KCk7XHJcbiAgICB9LCBbXSlcclxuICAgIFxyXG4gICAgY29uc3QgZ2V0Q2F0ZWdvcmllcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgICAgIHVybDogJy9tYXJrZXRwbGFjZS9jYXRlZ29yaWVzJyxcclxuICAgICAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcbiAgICAgICAgICBpZihzdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldE1hcmtldENhdGVnb3JpZXMoZGF0YSkpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0TWFya2V0UGxhY2VGb3JTYWxlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKHRydWUpKTtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgICAgdXJsOiAnL2FjY291bnRzL21hcmtldHBsYWNlL2dldC1pdGVtcy1mb3Itc2FsZScsXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIFwib2Zmc2V0XCI6IDAsXHJcbiAgICAgICAgICAgIFwiZmlyc3RcIjogMTBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG4gICAgICAgIGlmKHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICBkaXNwYXRjaChzZXRNYXJrZXRTYWxlRGF0YShkYXRhKSk7XHJcbiAgICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgY29uc3QgZ2V0TWFya2V0UGxhY2VUb0J1eSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgICAgdXJsOiAnL2FjY291bnRzL21hcmtldHBsYWNlL2dldC1pdGVtcy10by1idXknLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBcIm9mZnNldFwiOiAwLFxyXG4gICAgICAgICAgICBcImZpcnN0XCI6IDEwXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuICAgICAgICBpZihzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgZGlzcGF0Y2goc2V0TWFya2V0QnV5RGF0YShkYXRhKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGVkaXRJdGVtID0gYXN5bmMgKGl0ZW1faWQsIHNhbGVPcmJ1eSkgPT4ge3JldHVybjtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKHRydWUpKTtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgICAgdXJsOiBzYWxlT3JidXk/Jy9tYXJrZXRwbGFjZS9pdGVtcy1mb3Itc2FsZS9nZXQnOicvbWFya2V0cGxhY2UvaXRlbXMtdG8tYnV5L2dldCcsXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGlkOiBpdGVtX2lkXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuICAgICAgICBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICAgIGlmKHNhbGVPcmJ1eSkge1xyXG4gICAgICAgICAgICAvLyBkaXNwYXRjaChzZXRNYXJrZXRTYWxlRGF0YShbLi4uc3RvcmFnZS5tYXJrZXRTYWxlRGF0YSwgZGF0YV0pKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gZGlzcGF0Y2goc2V0TWFya2V0QnV5RGF0YShbLi4uc3RvcmFnZS5tYXJrZXRCdXlEYXRhLCBkYXRhXSkpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzZXRFZGl0TWFya2V0TW9kYWwodHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKTtcclxuICAgICAgICByZXR1cm4gYXdhaXQgcmVxdWVzdDtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvblVwZGF0ZUNvbW1lbnRzID0gKGRhdGEpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKG1hcmtldEl0ZW0pO1xyXG4gICAgICBzZXRNYXJrZXRJdGVtKHsgLi4ubWFya2V0SXRlbSwgY29tbWVudHM6IFsuLi5tYXJrZXRJdGVtLmNvbW1lbnRzLCB7Li4uZGF0YS5jb21tZW50c1swXSwgYWNjb3VudDogYXV0aC51c2VyfV19KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldERldGFpbE1hcmtldEl0ZW0gPSBhc3luYyAoaWQsIHNhbGVPcmJ1eSkgPT4ge1xyXG4gICAgICBzZXREZXRhaWxNYXJrZXRNb2RhbCh0cnVlKTtcclxuICAgICAgaWYoIXNhbGVPcmJ1eSkge1xyXG4gICAgICAgIHNldE1hcmtldEl0ZW1UeXBlKCdNYXJrZXRwbGFjZUl0ZW1Ub0J1eScpXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlKSk7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgIHVybDogc2FsZU9yYnV5PycvbWFya2V0cGxhY2UvaXRlbXMtZm9yLXNhbGUvZ2V0JzonL21hcmtldHBsYWNlL2l0ZW1zLXRvLWJ1eS9nZXQnLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBpZDogaWRcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG4gICAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgc2V0TWFya2V0SXRlbShkYXRhKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpO1xyXG4gICAgICAgIHJldHVybiBhd2FpdCByZXF1ZXN0O1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxpa2VBY3Rpb24gPSBhc3luYyAodHlwZSwgaWQsIHRlcm0pID0+IHtjb25zb2xlLmxvZyh0eXBlKTtcclxuICAgICAgdmFyIHVybCA9ICcnO1xyXG4gICAgICBpZiAodHlwZSA9PT0gJ1Bob3RvJykge1xyXG4gICAgICAgIHVybCA9ICcvcGhvdG9zL3JlYWN0JztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnVmlkZW9DbGlwJykge1xyXG4gICAgICAgIHVybCA9ICcvdmlkZW8tY2xpcHMvcmVhY3QnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdJdGVtJykge1xyXG4gICAgICAgIHVybCA9ICcvaXRlbXMvcmVhY3QnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdQb3N0Jykge1xyXG4gICAgICAgIHVybCA9ICcvcG9zdHMvcmVhY3QnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdDb21tZW50Jykge1xyXG4gICAgICAgIHVybCA9ICcvY29tbWVudHMvcmVhY3QnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdTaGFyZScpIHtcclxuICAgICAgICB1cmwgPSAnL3NoYXJlcy9yZWFjdCc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ01hcmtldHBsYWNlSXRlbUZvclNhbGUnKSB7XHJcbiAgICAgICAgdXJsID0gJy9tYXJrZXRwbGFjZS9pdGVtcy1mb3Itc2FsZS9yZWFjdCc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ01hcmtldHBsYWNlSXRlbVRvQnV5Jykge1xyXG4gICAgICAgIHVybCA9ICcvbWFya2V0cGxhY2UvaXRlbXMtdG8tYnV5L3JlYWN0JztcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgcmVhY3RlZDogaWQsXHJcbiAgICAgICAgICAgIHJlYWN0aW9uOiB0ZXJtXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuICAgICAgICBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICAgIGFjY291bnREYXRhLmFjdGl2aXR5Lm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYoZWxlbWVudC5pZCA9PT0gaWQpIHtcclxuICAgICAgICAgICAgICBlbGVtZW50LnJlYWN0aW9uc1swXS5yZWFjdGlvbiA9PSB0ZXJtO1xyXG4gICAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldEFjY291bnRzRGF0YShhY2NvdW50RGF0YSkpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PSA0MDMpIHtcclxuICAgICAgICAgIGF1dGhTZXJ2aWNlcy5yZWZyZXNoVG9rZW4oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfVxyXG4gIFxyXG4gIH1cclxuICBcclxuICAgIGNvbnN0IHNoYXJlQWN0aW9uID0gYXN5bmMgKHR5cGUsIGlkKSA9PiB7XHJcbiAgXHJcbiAgICAgIHZhciB1cmwgPSAnJztcclxuICAgICAgICBpZiAodHlwZSA9PT0gJ1Bob3RvJykge1xyXG4gICAgICAgICAgdXJsID0gJy9waG90b3Mvc2hhcmUnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1ZpZGVvQ2xpcCcpIHtcclxuICAgICAgICAgIHVybCA9ICcvdmlkZW8tY2xpcHMvc2hhcmUnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0l0ZW0nKSB7XHJcbiAgICAgICAgICB1cmwgPSAnL2l0ZW1zL3NoYXJlJztcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdQb3N0Jykge1xyXG4gICAgICAgICAgdXJsID0gJy9wb3N0cy9zaGFyZSc7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnQ29tbWVudCcpIHtcclxuICAgICAgICAgIHVybCA9ICcvY29tbWVudHMvc2hhcmUnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1NoYXJlJykge1xyXG4gICAgICAgICAgdXJsID0gJy9wb3N0cy9zaGFyZSc7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnTWFya2V0cGxhY2VJdGVtRm9yU2FsZScpIHtcclxuICAgICAgICAgIHVybCA9ICcvbWFya2V0cGxhY2UvaXRlbXMtZm9yLXNhbGUvc2hhcmUnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ01hcmtldHBsYWNlSXRlbVRvQnV5Jykge1xyXG4gICAgICAgICAgdXJsID0gJy9tYXJrZXRwbGFjZS9pdGVtcy10by1idXkvc2hhcmUnO1xyXG4gICAgICAgIH1cclxuICBcclxuICBcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIHNoYXJlZDogaWQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuICBcclxuICAgICAgICBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcygnU2hhcmVkIHN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICAgIH0gZWxzZSBpZihzYXR1cyA9PSA0MDMpXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGF1dGhTZXJ2aWNlcy5yZWZyZXNoVG9rZW4oKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmF0ZVBvc3QgPSBhc3luYyAodHlwZSwgcG9zdElkLCByYXRlKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlLCAncG9zdGluZycpKTtcclxuICAgICAgICBsZXQgdXJsID0gJyc7XHJcbiAgXHJcbiAgICAgICAgaWYgKHR5cGUgPT09ICdQaG90bycpIHtcclxuICAgICAgICAgIHVybCA9ICcvcGhvdG9zL3JhdGUnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1ZpZGVvQ2xpcCcpIHtcclxuICAgICAgICAgIHVybCA9ICcvdmlkZW8tY2xpcHMvcmF0ZSc7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnSXRlbScpIHtcclxuICAgICAgICAgIHVybCA9ICcvaXRlbXMvcmF0ZSc7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnUG9zdCcpIHtcclxuICAgICAgICAgIHVybCA9ICcvcG9zdHMvcmF0ZSc7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnQ29tbWVudCcpIHtcclxuICAgICAgICAgIHVybCA9ICcvY29tbWVudHMvcmF0ZSc7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnU2hhcmUnKSB7XHJcbiAgICAgICAgICB1cmwgPSAnL3NoYXJlcy9yYXRlJztcclxuICAgICAgICB9IGVsc2UgaWYodHlwZSA9PT0gJ01hcmtldHBsYWNlSXRlbUZvclNhbGUnKSB7XHJcbiAgICAgICAgICB1cmwgPSAnL21hcmtldHBsYWNlL2l0ZW1zLWZvci1zYWxlL3JhdGUnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ01hcmtldHBsYWNlSXRlbVRvQnV5Jykge1xyXG4gICAgICAgICAgdXJsID0gJy9tYXJrZXRwbGFjZS9pdGVtcy10by1idXkvcmF0ZSc7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGlkOiBwb3N0SWQsXHJcbiAgICAgICAgICAgIHJhdGluZzogcmF0ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG4gIFxyXG4gICAgICAgIGlmIChzdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgICAgLy8gZ2V0QWNjb3VudCgpO1xyXG4gICAgICAgICAgLy8gbWVzc2FnZS5zdWNjZXNzKCdFdmFsdWF0ZSBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgICAgIGFjY291bnREYXRhLmFjdGl2aXR5Lm1hcChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgaWYoZWxlbWVudC5pZCA9PT0gcG9zdElkICYmIGVsZW1lbnQudHlwZSA9PT0gdHlwZSkge1xyXG4gICAgICAgICAgICAgIGVsZW1lbnQucmF0aW5nID0gcmF0ZTtcclxuICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIGRpc3BhdGNoKHNldEFjY291bnRzRGF0YShhY2NvdW50RGF0YSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlLCAncG9zdGluZycpKTtcclxuICBcclxuICAgICAgICByZXR1cm4gYXdhaXQgcmVxdWVzdDtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlLCAncG9zdGluZycpKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBhZGRNYXJrZXRJdGVtTW9kYWwgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHNldE1hcmtldE1vZGFsKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFkZE1hcmtldEl0ZW0gPSBhc3luYyAocmVxdWVzdERhdGEsIHNhbGVPcmJ1eSkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcodHJ1ZSkpO1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICB1cmw6IHNhbGVPcmJ1eT8nL21hcmtldHBsYWNlL2l0ZW1zLWZvci1zYWxlJzonL21hcmtldHBsYWNlL2l0ZW1zLXRvLWJ1eScsXHJcbiAgICAgICAgICBkYXRhOiByZXF1ZXN0RGF0YSxcclxuICAgICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgICBpZihzYWxlT3JidXkpIHtcclxuICAgICAgICAgICAgLy8gZGlzcGF0Y2goc2V0TWFya2V0U2FsZURhdGEoWy4uLnN0b3JhZ2UubWFya2V0U2FsZURhdGEsIGRhdGFdKSlcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGRpc3BhdGNoKHNldE1hcmtldEJ1eURhdGEoWy4uLnN0b3JhZ2UubWFya2V0QnV5RGF0YSwgZGF0YV0pKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2V0TWFya2V0TW9kYWwoZmFsc2UpO1xyXG4gICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKCdTdWNjZXNzZnVsbHkgQWRkZWQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpO1xyXG4gICAgICAgIHJldHVybiBhd2FpdCByZXF1ZXN0O1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlbGV0ZU1hcmtldEl0ZW0gPSBhc3luYyAoaWQsIHNhbGVPcmJ1eSkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgICAgbWV0aG9kOiAnZGVsZXRlJyxcclxuICAgICAgICAgIHVybDogc2FsZU9yYnV5PycvbWFya2V0cGxhY2UvaXRlbXMtZm9yLXNhbGUnOicvbWFya2V0cGxhY2UvaXRlbXMtdG8tYnV5JyxcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgaWQ6IGlkXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuICAgICAgICBpZiAoc3RhdHVzID09PSAyMDQpIHtcclxuICAgICAgICAgIGlmKHNhbGVPcmJ1eSkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdNYXJrZXRTYWxlRGF0YSA9IHN0b3JhZ2UubWFya2V0X3NhbGVfZGF0YS5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkICE9PSBpZCApO1xyXG4gICAgICAgICAgICBkaXNwYXRjaChzZXRNYXJrZXRTYWxlRGF0YShuZXdNYXJrZXRTYWxlRGF0YSkpXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdNYXJrZXRCdXlEYXRhID0gc3RvcmFnZS5tYXJrZXRfYnV5X2RhdGEuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCAhPT0gaWQgKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goc2V0TWFya2V0QnV5RGF0YShuZXdNYXJrZXRCdXlEYXRhKSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcygnU3VjY2Vzc2Z1bGx5IGRlbGV0ZWQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlcXVlc3Q7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib2R5fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51fT5cclxuICAgICAgICAgICAgICA8TWVudVxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFNlbGVjdGVkS2V5cz17WycxJ119XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0T3BlbktleXM9e1snc3ViMSddfVxyXG4gICAgICAgICAgICAgICAgbW9kZT1cImlubGluZVwiXHJcbiAgICAgICAgICAgICAgICB0aGVtZT1cImRhcmtcIlxyXG4gICAgICAgICAgICAgICAgaW5saW5lQ29sbGFwc2VkPXtmYWxzZX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7c3RvcmFnZS5tYXJrZXRfY2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PXtpbmRleH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZGRpbmdCdXR0b259PlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIHN0eWxlPXt7IG1hcmdpblRvcDogMTAgfX0gb25DbGljaz17YWRkTWFya2V0SXRlbU1vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQWRkIE1hcmtldHBsYWNlIEl0ZW1cclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPFRhYnMgZGVmYXVsdEFjdGl2ZUtleT1cIjFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8VGFiUGFuZVxyXG4gICAgICAgICAgICAgICAgICAgICAgdGFiPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IDIwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFNhbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPiBcclxuICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nV3JhcHBlciBsb2FkaW5nPXtzdG9yYWdlLmxvYWRpbmd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWFya2V0U2VjdGlvbiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17c3RvcmFnZS5tYXJrZXRfc2FsZV9kYXRhfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0SXRlbT17ZWRpdEl0ZW19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNhbGUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0RGV0YWlsTWFya2V0SXRlbT17Z2V0RGV0YWlsTWFya2V0SXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblJhdGVQb3N0PXtyYXRlUG9zdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblVwZGF0ZUNvbW1lbnRzPXtvblVwZGF0ZUNvbW1lbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpa2VBY3Rpb249e2xpa2VBY3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVBY3Rpb249e3NoYXJlQWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZU1hcmtldEl0ZW09e2RlbGV0ZU1hcmtldEl0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTG9hZGluZ1dyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICB0YWI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogMjAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQnV5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIGtleT1cIjJcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxNYXJrZXRTZWN0aW9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtzdG9yYWdlLm1hcmtldF9idXlfZGF0YX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRJdGVtPXtlZGl0SXRlbX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUmF0ZVBvc3Q9e3JhdGVQb3N0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblVwZGF0ZUNvbW1lbnRzPXtvblVwZGF0ZUNvbW1lbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaWtlQWN0aW9uPXtsaWtlQWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFyZUFjdGlvbj17c2hhcmVBY3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldERldGFpbE1hcmtldEl0ZW09e2dldERldGFpbE1hcmtldEl0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZU1hcmtldEl0ZW09e2RlbGV0ZU1hcmtldEl0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lPlxyXG4gICAgICAgICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPE1vZGFsV3JhcHBlclxyXG4gICAgICAgICAgICB0aXRsZT1cIkFkZCBNYXJrZXQgSXRlbVwiXHJcbiAgICAgICAgICAgIHNob3dNb2RhbD17bWFya2V0TW9kYWx9XHJcbiAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldE1hcmtldE1vZGFsKGZhbHNlKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEFkZE1hcmtldEl0ZW0gYXV0aD17YXV0aH0gb25VcGRhdGU9e2FkZE1hcmtldEl0ZW19IGxvYWRpbmc9e3N0b3JhZ2UubG9hZGluZ30gY2F0ZWdvcmllcz17c3RvcmFnZS5tYXJrZXRfY2F0ZWdvcmllc30vPlxyXG4gICAgICAgICAgPC9Nb2RhbFdyYXBwZXI+XHJcbiAgICAgICAgICA8TW9kYWxXcmFwcGVyXHJcbiAgICAgICAgICAgIHRpdGxlPXttYXJrZXRJdGVtPy50aXRsZX1cclxuICAgICAgICAgICAgc2hvd01vZGFsPXtkZXRhaWxNYXJrZXRNb2RhbH1cclxuICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0RGV0YWlsTWFya2V0TW9kYWwoZmFsc2UpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TG9hZGluZ1dyYXBwZXIgbG9hZGluZz17c3RvcmFnZS5sb2FkaW5nfT5cclxuICAgICAgICAgICAgICAgIDxEZXRhaWxNYXJrZXRJdGVtICAgXHJcbiAgICAgICAgICAgICAgICAgIGRhdGE9e21hcmtldEl0ZW19IFxyXG4gICAgICAgICAgICAgICAgICBvblJhdGVQb3N0PXtyYXRlUG9zdH1cclxuICAgICAgICAgICAgICAgICAgb25VcGRhdGVDb21tZW50cz17b25VcGRhdGVDb21tZW50c31cclxuICAgICAgICAgICAgICAgICAgbGlrZUFjdGlvbj17bGlrZUFjdGlvbn1cclxuICAgICAgICAgICAgICAgICAgc2hhcmVBY3Rpb249e3NoYXJlQWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPXttYXJrZXRJdGVtVHlwZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvTG9hZGluZ1dyYXBwZXI+XHJcbiAgICAgICAgICA8L01vZGFsV3JhcHBlcj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVxdWlyZUF1dGgoTWFya2V0cGxhY2UpOyJdLCJzb3VyY2VSb290IjoiIn0=