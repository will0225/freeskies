webpackHotUpdate_N_E("pages/profile",{

/***/ "./containers/Profile/Profile.js":
/*!***************************************!*\
  !*** ./containers/Profile/Profile.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/profile.module.scss */ "./containers/Profile/styles/profile.module.scss");
/* harmony import */ var _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _configs_API__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../configs/API */ "./configs/API.js");
/* harmony import */ var components_profile_PhotoSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/profile/PhotoSection */ "./components/profile/PhotoSection.js");
/* harmony import */ var components_profile_FeedPosts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/profile/FeedPosts */ "./components/profile/FeedPosts.js");
/* harmony import */ var components_profile_PostingPost__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/profile/PostingPost */ "./components/profile/PostingPost.js");
/* harmony import */ var components_profile_RatedSection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/profile/RatedSection */ "./components/profile/RatedSection.js");
/* harmony import */ var helpers_hoc_requireAuth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! helpers/hoc/requireAuth */ "./helpers/hoc/requireAuth.js");
/* harmony import */ var _storage_ProfileContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./storage/ProfileContext */ "./containers/Profile/storage/ProfileContext.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./actions */ "./containers/Profile/actions/index.js");
/* harmony import */ var _components_common_Avatar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/common/Avatar */ "./components/common/Avatar.js");
/* harmony import */ var react_rating__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-rating */ "./node_modules/react-rating/lib/react-rating.esm.js");
/* harmony import */ var _components_common_ModalWrapper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/common/ModalWrapper */ "./components/common/ModalWrapper.js");
/* harmony import */ var _components_profile_PostModal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../components/profile/PostModal */ "./components/profile/PostModal.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./edit */ "./containers/Profile/edit.js");




var _jsxFileName = "E:\\freeskies_fe_code\\containers\\Profile\\Profile.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;



















function Profile(_ref) {
  _s();

  var _accountData$profileB,
      _accountData$profileP,
      _this = this;

  var auth = _ref.auth;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      fileList = _useState[0],
      setFileList = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_storage_ProfileContext__WEBPACK_IMPORTED_MODULE_14__["ProfileContext"]),
      storage = _useContext[0],
      dispatch = _useContext[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(1),
      tab = _useState2[0],
      setTab = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      postModal = _useState3[0],
      setPostModal = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      editProfileModal = _useState4[0],
      setEditProfileModal = _useState4[1]; // console.log('storage', storage, 'auth', auth)


  var getFriends = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(token) {
      var withoutLoading,
          request,
          data,
          status,
          _args = arguments;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              withoutLoading = _args.length > 1 && _args[1] !== undefined ? _args[1] : false;
              _context.prev = 1;
              if (!withoutLoading) dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["setLoading"])(true));
              _context.next = 5;
              return Object(_configs_API__WEBPACK_IMPORTED_MODULE_8__["default"])({
                method: 'post',
                url: '/accounts/timeline',
                headers: {
                  'x-token': auth.token
                }
              });

            case 5:
              request = _context.sent;
              data = request.data, status = request.status;
              console.log('getFriends_data=', data, 'getFriends_status=', status);

              if (status === 200) {
                dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["setFriendsData"])(data));
                console.log('=========');
              } else if (status === 403) {
                console.log('================= Refresh token !');
                authServices.refreshToken(getFriends);
              } else {
                antd__WEBPACK_IMPORTED_MODULE_7__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
              }

              if (!withoutLoading) dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["setLoading"])(false));
              _context.next = 16;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);
              if (!withoutLoading) dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["setLoading"])(false));

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 12]]);
    }));

    return function getFriends(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var getAccount = /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(token) {
      var withoutLoading,
          request,
          data,
          status,
          _args2 = arguments;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              withoutLoading = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : false;
              _context2.prev = 1;
              if (!withoutLoading) dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["setLoading"])(true));
              _context2.next = 5;
              return Object(_configs_API__WEBPACK_IMPORTED_MODULE_8__["default"])({
                method: 'get',
                url: '/accounts',
                headers: {
                  'x-token': auth.token
                }
              });

            case 5:
              request = _context2.sent;
              data = request.data, status = request.status;
              console.log('getAccount_data=', data, 'getAccount_status=', status);

              if (status === 200) {
                dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["setAccountsData"])(data));
                console.log('=========');
              } else if (status === 403) {
                console.log('================= Refresh token !');
                authServices.refreshToken(getFriends);
              } else {
                antd__WEBPACK_IMPORTED_MODULE_7__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
              }

              if (!withoutLoading) dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["setLoading"])(false));
              _context2.next = 16;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](1);
              console.log(_context2.t0);
              if (!withoutLoading) dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["setLoading"])(false));

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 12]]);
    }));

    return function getAccount(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  var createPost = /*#__PURE__*/function () {
    var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(dataForRequest) {
      var request, data, status;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["setLoading"])(true, 'posting'));
              _context3.next = 4;
              return Object(_configs_API__WEBPACK_IMPORTED_MODULE_8__["default"])({
                method: 'post',
                url: '/posts',
                data: dataForRequest,
                headers: {
                  'x-token': auth.token
                }
              });

            case 4:
              request = _context3.sent;
              data = request.data, status = request.status;
              console.log(data, status);

              if (status === 201) {
                getAccount();
              } else {
                antd__WEBPACK_IMPORTED_MODULE_7__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
              }

              dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["setLoading"])(false, 'posting'));
              _context3.next = 11;
              return request;

            case 11:
              return _context3.abrupt("return", _context3.sent);

            case 14:
              _context3.prev = 14;
              _context3.t0 = _context3["catch"](0);
              dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["setLoading"])(false, 'posting'));

            case 17:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 14]]);
    }));

    return function createPost(_x3) {
      return _ref4.apply(this, arguments);
    };
  }();

  var ratePost = /*#__PURE__*/function () {
    var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(type, postId, rate) {
      var url, request, data, status;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              console.log(type, postId, rate);
              _context4.prev = 1;
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
              }

              _context4.next = 7;
              return Object(_configs_API__WEBPACK_IMPORTED_MODULE_8__["default"])({
                method: 'post',
                url: url,
                data: {
                  rated: postId,
                  rating: rate
                },
                headers: {
                  'x-token': auth.token
                }
              });

            case 7:
              request = _context4.sent;
              data = request.data, status = request.status;
              console.warn('ratePost', data, status);

              if (status === 201) {
                getAccount();
                antd__WEBPACK_IMPORTED_MODULE_7__["message"].success('Evaluate successfully');
              } else {
                antd__WEBPACK_IMPORTED_MODULE_7__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
              }

              dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["setLoading"])(false, 'posting'));
              _context4.next = 14;
              return request;

            case 14:
              return _context4.abrupt("return", _context4.sent);

            case 17:
              _context4.prev = 17;
              _context4.t0 = _context4["catch"](1);
              dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["setLoading"])(false, 'posting'));

            case 20:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[1, 17]]);
    }));

    return function ratePost(_x4, _x5, _x6) {
      return _ref5.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    getFriends(auth.token);
    getAccount(auth.token);
  }, []);
  var accountData = storage.accountData;
  var isMobile = window.matchMedia('only screen and (max-width: 640px)').matches;
  var imageUploadParams = {
    onRemove: function onRemove(file) {
      var index = fileList.indexOf(file);
      var newFileList = fileList.slice();
      var result = newFileList.splice(index, 1);
      setFileList(result);
    },
    beforeUpload: function beforeUpload(file) {
      setFileList([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(fileList), [file]));
      return false;
    },
    fileList: fileList
  };

  var handleUploadCover = /*#__PURE__*/function () {
    var _ref7 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(_ref6) {
      var fileList, formData, request, data, status;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              fileList = _ref6.fileList;
              formData = new FormData();
              fileList.forEach(function (file) {
                formData.append('profileBackgroundImage', file.originFileObj);
              });
              _context5.next = 5;
              return Object(_configs_API__WEBPACK_IMPORTED_MODULE_8__["default"])({
                method: 'put',
                url: '/accounts',
                data: formData,
                headers: {
                  'x-token': auth.token
                }
              });

            case 5:
              request = _context5.sent;
              data = request.data, status = request.status;
              console.log(fileList, data, status);
              getAccount(auth.token);

            case 9:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function handleUploadCover(_x7) {
      return _ref7.apply(this, arguments);
    };
  }();

  var handleUploadAvatar = /*#__PURE__*/function () {
    var _ref9 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6(_ref8) {
      var fileList, formData, request, data, status;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              fileList = _ref8.fileList;
              formData = new FormData();
              fileList.forEach(function (file) {
                formData.append('profilePhoto', file.originFileObj);
              });
              _context6.next = 5;
              return Object(_configs_API__WEBPACK_IMPORTED_MODULE_8__["default"])({
                method: 'put',
                url: '/accounts',
                data: formData,
                headers: {
                  'x-token': auth.token
                }
              });

            case 5:
              request = _context6.sent;
              data = request.data, status = request.status;
              console.log(fileList, data, status);
              getAccount(auth.token);

            case 9:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function handleUploadAvatar(_x8) {
      return _ref9.apply(this, arguments);
    };
  }();

  var coverUrl = accountData !== null && accountData !== undefined ? "url(https://www.freeskies.com/static/".concat((_accountData$profileB = accountData.profileBackgroundImage) === null || _accountData$profileB === void 0 ? void 0 : _accountData$profileB.src, ")") : null;
  var profileUrl = accountData !== null && accountData !== undefined ? "".concat((_accountData$profileP = accountData.profilePhoto) === null || _accountData$profileP === void 0 ? void 0 : _accountData$profileP.src) : null;
  var roundRating = Math.round((accountData === null || accountData === void 0 ? void 0 : accountData.rating) || 0);

  var modalPopup = function modalPopup() {
    setPostModal(true);
  };

  var onUpdate = /*#__PURE__*/function () {
    var _ref10 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee7(dataForRequest) {
      var request, data, status;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["setLoading"])(true));
              _context7.next = 4;
              return Object(_configs_API__WEBPACK_IMPORTED_MODULE_8__["default"])({
                method: 'PUT',
                url: '/accounts',
                data: dataForRequest,
                headers: {
                  'x-token': auth.token
                }
              });

            case 4:
              request = _context7.sent;
              data = request.data, status = request.status;

              if (status === 201) {
                getAccount();
              } else {
                antd__WEBPACK_IMPORTED_MODULE_7__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
              }

              dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["setLoading"])(false));
              _context7.next = 10;
              return request;

            case 10:
              return _context7.abrupt("return", _context7.sent);

            case 13:
              _context7.prev = 13;
              _context7.t0 = _context7["catch"](0);
              dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["setLoading"])(false));

            case 16:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[0, 13]]);
    }));

    return function onUpdate(_x9) {
      return _ref10.apply(this, arguments);
    };
  }();

  var unfriend = /*#__PURE__*/function () {
    var _ref11 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee8(username) {
      var request, data, status;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              if (!(username !== '')) {
                _context8.next = 17;
                break;
              }

              _context8.prev = 1;
              dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["setLoading"])(true));
              _context8.next = 5;
              return Object(_configs_API__WEBPACK_IMPORTED_MODULE_8__["default"])({
                method: 'DELETE',
                url: '/accounts/friendship',
                data: {
                  username: username
                },
                headers: {
                  'x-token': auth.token
                }
              });

            case 5:
              request = _context8.sent;
              data = request.data, status = request.status;

              if (status === 201) {
                getAccount();
              } else {
                antd__WEBPACK_IMPORTED_MODULE_7__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
              }

              dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["setLoading"])(false));
              _context8.next = 11;
              return request;

            case 11:
              return _context8.abrupt("return", _context8.sent);

            case 14:
              _context8.prev = 14;
              _context8.t0 = _context8["catch"](1);
              dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["setLoading"])(false));

            case 17:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[1, 14]]);
    }));

    return function unfriend(_x10) {
      return _ref11.apply(this, arguments);
    };
  }(); // return (
  //   <div>
  //     <div className={classnames(styles.container, styles.user_profile)}>
  //       <div
  //         className={styles.cover}
  //         style={coverUrl !== null ? { backgroundImage: coverUrl } : null}
  //       >
  //         <div className={styles.change_cover}>
  //           <Upload {...imageUploadParams} onChange={handleUploadCover}>
  //             <Button ghost type="dashed">
  //               Change cover
  //             </Button>
  //           </Upload>
  //         </div>
  //       </div>
  //       <div className={styles.profile}>
  //         <div className={styles.avatar}>
  //           <div className={styles.avatar_image}>
  //             <Avatar
  //               size={isMobile ? 100 : 140}
  //               url={profileUrl}
  //               text={accountData?.username}
  //             />
  //           </div>
  //           <div className={styles.change_avatar}>
  //             <Upload {...imageUploadParams} onChange={handleUploadAvatar}>
  //               <CameraOutlined className={styles.change_avatar_image} />
  //             </Upload>
  //           </div>
  //         </div>
  //         <div className={styles.user_content}>
  //           <div className={styles.user_info}>
  //             <div className={styles.heade_section}>
  //               <div className={styles.left_side}>
  //                 <p className={styles.fullname}>
  //                   <span>{`${accountData?.firstName} ${accountData?.lastName}`}</span>
  //                 </p>
  //               </div>
  //               <div className={styles.right_side}>
  //                 <p className={styles.rating}>
  //                   <Rate
  //                     disabled
  //                     allowHalf
  //                     defaultValue={roundRating}
  //                     style={{ color: '#fadb14', fontSize: '1em' }}
  //                   />
  //                   <span className={styles.rating_text}>
  //                     {roundRating}
  //                   </span>
  //                 </p>
  //               </div>
  //             </div>
  //             {/* ==== */}
  //           </div>
  //           <div className={styles.bottom_section}>
  //             <div className={styles.left_side}>
  //               <div className={styles.user_actions}>
  //                 <div className={styles.follow_actions}>
  //                   <p className={styles.followers}>
  //                     {accountData?.followersCount} followers
  //                   </p>
  //                 </div>
  //                 <p className={styles.followers_formobile}>
  //                   {accountData?.followersCount} followers / {accountData?.followingCount}{' '}
  //                   following
  //                 </p>
  //               </div>
  //             </div>
  //             <div className={styles.right_side}>
  //               <div className={styles.user_actions}>
  //                 <Button type="primary" shape="round" size="large">
  //                   Edit profile
  //                 </Button>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     <div
  //       className={classnames(
  //         styles.container,
  //         styles.content,
  //         styles.container_bg
  //       )}
  //     >
  //       <div className={styles.profile_contents}>
  //         <PhotoSection user={accountData} onRatePost={ratePost} />
  //         <div className={classnames(styles.container_bg, styles.section)}>
  //           <div className={styles.section_title}>
  //             <p>Friends</p>
  //             <Button type="link">All friends</Button>
  //           </div>
  //           <div
  //             className={classnames(
  //               styles.friends_list,
  //               styles.sections_content
  //             )}
  //           >
  //             {accountData?.friends.map((item, index) => {
  //               return (
  //                 <div className={styles.friend} key={index}>
  //                   <Avatar
  //                     size={80}
  //                     url={item?.profilePhoto}
  //                     text={item?.username}
  //                   />
  //                   <div className={styles.friend_name}>
  //                   <span>{item.firstName} {item.lastName}</span>
  //                   </div>
  //                 </div>
  //               );
  //             })}
  //           </div>
  //         </div>
  //         <RatedSection user={accountData} onRatePost={ratePost} />
  //       </div>
  //       <div className={styles.activity}>
  //         <PostingPost
  //           loading={storage.postingLoading}
  //           onPosting={createPost}
  //         />
  //         <FeedPosts
  //           user={accountData}
  //           onRatePost={ratePost}
  //           onUpdateTimeline={getAccount}
  //         />
  //       </div>
  //     </div>
  //   </div>
  // );


  return __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.left,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417,
      columnNumber: 7
    }
  }, typeof accountData !== 'undefined' ? __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.profile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.avatar_image,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421,
      columnNumber: 14
    }
  }, __jsx(_components_common_Avatar__WEBPACK_IMPORTED_MODULE_16__["default"], {
    size: isMobile ? 100 : 140,
    url: profileUrl,
    text: accountData === null || accountData === void 0 ? void 0 : accountData.username,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.user_content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.user_info,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.heade_section,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.left_side,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.fullname,
    style: {
      cursor: 'pointer'
    },
    onClick: function onClick() {
      return setEditProfileModal(true);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 19
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 21
    }
  }, "".concat(accountData === null || accountData === void 0 ? void 0 : accountData.firstName, " ").concat(accountData === null || accountData === void 0 ? void 0 : accountData.lastName)))), __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.right_side,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.rating,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Rate"], {
    defaultValue: roundRating,
    style: {
      color: '#fadb14',
      fontSize: '30px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 21
    }
  }), __jsx("span", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.rating_text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449,
      columnNumber: 21
    }
  }, roundRating))))))) : __jsx("div", {
    className: "border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "animate-pulse flex space-x-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 483,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "rounded-full bg-gray-400 h-12 w-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 484,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "flex-1 space-y-4 py-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 485,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "h-4 bg-gray-400 rounded w-3/4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 486,
      columnNumber: 19
    }
  }), __jsx("div", {
    className: "space-y-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 487,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "h-4 bg-gray-400 rounded",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 488,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "h-4 bg-gray-400 rounded w-5/6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 489,
      columnNumber: 21
    }
  }))))), __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.profile_content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 495,
      columnNumber: 9
    }
  }, __jsx("ul", {
    className: "flex border-b",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496,
      columnNumber: 11
    }
  }, __jsx("li", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('mr-1', _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.tab),
    onClick: function onClick() {
      return setTab(1);
    },
    style: {
      borderBottom: tab == 1 ? '5px solid white' : 'none'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498,
      columnNumber: 15
    }
  }, "ACTIVITY")), __jsx("li", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('mr-1', _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.tab),
    onClick: function onClick() {
      return setTab(2);
    },
    style: {
      borderBottom: tab == 2 ? '5px solid white' : 'none'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 501,
      columnNumber: 15
    }
  }, "Groups")), __jsx("li", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('mr-1', _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.tab),
    onClick: function onClick() {
      return setTab(6);
    },
    style: {
      borderBottom: tab == 6 ? '5px solid white' : 'none'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 503,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504,
      columnNumber: 15
    }
  }, "Markets")), __jsx("li", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('mr-1', _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.tab),
    onClick: function onClick() {
      return setTab(3);
    },
    style: {
      borderBottom: tab == 3 ? '5px solid white' : 'none'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507,
      columnNumber: 15
    }
  }, "PHOTOS")), __jsx("li", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('mr-1', _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.tab),
    onClick: function onClick() {
      return setTab(4);
    },
    style: {
      borderBottom: tab == 4 ? '5px solid white' : 'none'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 510,
      columnNumber: 15
    }
  }, "RATES")), __jsx("li", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('mr-1', _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.tab),
    onClick: function onClick() {
      return setTab(5);
    },
    style: {
      borderBottom: tab == 5 ? '5px solid white' : 'none'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 512,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 513,
      columnNumber: 15
    }
  }, "FRIENDS"))), tab == 1 ? __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.activity,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 517,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.createPostDiv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 518,
      columnNumber: 13
    }
  }, __jsx(_components_common_Avatar__WEBPACK_IMPORTED_MODULE_16__["default"], {
    size: 50,
    url: profileUrl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 519,
      columnNumber: 15
    }
  }), __jsx("input", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.createPostInput,
    placeholder: "What's on your mind?",
    onClick: modalPopup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523,
      columnNumber: 15
    }
  })), __jsx(components_profile_FeedPosts__WEBPACK_IMPORTED_MODULE_10__["default"], {
    user: accountData,
    onRatePost: ratePost,
    onUpdateTimeline: getAccount,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 528,
      columnNumber: 13
    }
  })) : null, tab == 5 ? __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.friends_list, _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.sections_content),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 535,
      columnNumber: 11
    }
  }, accountData === null || accountData === void 0 ? void 0 : accountData.friends.map(function (item, index) {
    return __jsx("div", {
      className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.friend,
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 543,
        columnNumber: 17
      }
    }, __jsx(_components_common_Avatar__WEBPACK_IMPORTED_MODULE_16__["default"], {
      size: 80,
      url: item === null || item === void 0 ? void 0 : item.profilePhoto,
      text: item === null || item === void 0 ? void 0 : item.username,
      style: {
        marginRight: 0
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 544,
        columnNumber: 19
      }
    }), __jsx("div", {
      className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.friend_name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 550,
        columnNumber: 19
      }
    }, __jsx("p", {
      style: {
        textAlign: 'left',
        fontSize: 20
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 551,
        columnNumber: 21
      }
    }, item.firstName, " ", item.lastName), __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Rate"], {
      defaultValue: item.rating,
      style: {
        color: '#fadb14',
        fontSize: '15px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 552,
        columnNumber: 21
      }
    })));
  })) : null, tab == 3 ? __jsx(components_profile_PhotoSection__WEBPACK_IMPORTED_MODULE_9__["default"], {
    user: accountData,
    onRatePost: ratePost,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 567,
      columnNumber: 13
    }
  }) : null, tab == 4 ? __jsx(components_profile_RatedSection__WEBPACK_IMPORTED_MODULE_12__["default"], {
    user: accountData,
    onRatePost: ratePost,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 570,
      columnNumber: 13
    }
  }) : null)), __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.right,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 574,
      columnNumber: 7
    }
  }), __jsx(_components_common_ModalWrapper__WEBPACK_IMPORTED_MODULE_18__["default"], {
    title: "Create Post",
    showModal: postModal,
    onClose: function onClose() {
      return setPostModal(0);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 577,
      columnNumber: 9
    }
  }, __jsx(components_profile_PostingPost__WEBPACK_IMPORTED_MODULE_11__["default"], {
    loading: storage.postingLoading,
    onPosting: createPost,
    modalPopup: modalPopup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 582,
      columnNumber: 11
    }
  })), __jsx(_components_common_ModalWrapper__WEBPACK_IMPORTED_MODULE_18__["default"], {
    title: "Edit Profile",
    showModal: editProfileModal,
    onClose: function onClose() {
      return setEditProfileModal(0);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 588,
      columnNumber: 9
    }
  }, __jsx(_edit__WEBPACK_IMPORTED_MODULE_20__["default"], {
    onUpdate: onUpdate,
    loading: storage.postingLoading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 593,
      columnNumber: 11
    }
  })));
}

_s(Profile, "qMtH+9rrA4Ha5RaYUoULM9ZA3FY=");

_c = Profile;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(helpers_hoc_requireAuth__WEBPACK_IMPORTED_MODULE_13__["default"])(Profile));

var _c, _c2;

$RefreshReg$(_c, "Profile");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9Qcm9maWxlL1Byb2ZpbGUuanMiXSwibmFtZXMiOlsiUHJvZmlsZSIsImF1dGgiLCJ1c2VTdGF0ZSIsImZpbGVMaXN0Iiwic2V0RmlsZUxpc3QiLCJ1c2VDb250ZXh0IiwiUHJvZmlsZUNvbnRleHQiLCJzdG9yYWdlIiwiZGlzcGF0Y2giLCJ0YWIiLCJzZXRUYWIiLCJwb3N0TW9kYWwiLCJzZXRQb3N0TW9kYWwiLCJlZGl0UHJvZmlsZU1vZGFsIiwic2V0RWRpdFByb2ZpbGVNb2RhbCIsImdldEZyaWVuZHMiLCJ0b2tlbiIsIndpdGhvdXRMb2FkaW5nIiwic2V0TG9hZGluZyIsIkFQSSIsIm1ldGhvZCIsInVybCIsImhlYWRlcnMiLCJyZXF1ZXN0IiwiZGF0YSIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJzZXRGcmllbmRzRGF0YSIsImF1dGhTZXJ2aWNlcyIsInJlZnJlc2hUb2tlbiIsIm1lc3NhZ2UiLCJlcnJvciIsImdldEFjY291bnQiLCJzZXRBY2NvdW50c0RhdGEiLCJjcmVhdGVQb3N0IiwiZGF0YUZvclJlcXVlc3QiLCJyYXRlUG9zdCIsInR5cGUiLCJwb3N0SWQiLCJyYXRlIiwicmF0ZWQiLCJyYXRpbmciLCJ3YXJuIiwic3VjY2VzcyIsInVzZUVmZmVjdCIsImFjY291bnREYXRhIiwiaXNNb2JpbGUiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImltYWdlVXBsb2FkUGFyYW1zIiwib25SZW1vdmUiLCJmaWxlIiwiaW5kZXgiLCJpbmRleE9mIiwibmV3RmlsZUxpc3QiLCJzbGljZSIsInJlc3VsdCIsInNwbGljZSIsImJlZm9yZVVwbG9hZCIsImhhbmRsZVVwbG9hZENvdmVyIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImZvckVhY2giLCJhcHBlbmQiLCJvcmlnaW5GaWxlT2JqIiwiaGFuZGxlVXBsb2FkQXZhdGFyIiwiY292ZXJVcmwiLCJ1bmRlZmluZWQiLCJwcm9maWxlQmFja2dyb3VuZEltYWdlIiwic3JjIiwicHJvZmlsZVVybCIsInByb2ZpbGVQaG90byIsInJvdW5kUmF0aW5nIiwiTWF0aCIsInJvdW5kIiwibW9kYWxQb3B1cCIsIm9uVXBkYXRlIiwidW5mcmllbmQiLCJ1c2VybmFtZSIsInN0eWxlcyIsImNvbnRhaW5lciIsImxlZnQiLCJwcm9maWxlIiwiYXZhdGFyIiwiYXZhdGFyX2ltYWdlIiwidXNlcl9jb250ZW50IiwidXNlcl9pbmZvIiwiaGVhZGVfc2VjdGlvbiIsImxlZnRfc2lkZSIsImZ1bGxuYW1lIiwiY3Vyc29yIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJyaWdodF9zaWRlIiwiY29sb3IiLCJmb250U2l6ZSIsInJhdGluZ190ZXh0IiwicHJvZmlsZV9jb250ZW50IiwiY2xhc3NuYW1lcyIsImJvcmRlckJvdHRvbSIsImFjdGl2aXR5IiwiY3JlYXRlUG9zdERpdiIsImNyZWF0ZVBvc3RJbnB1dCIsImZyaWVuZHNfbGlzdCIsInNlY3Rpb25zX2NvbnRlbnQiLCJmcmllbmRzIiwibWFwIiwiaXRlbSIsImZyaWVuZCIsIm1hcmdpblJpZ2h0IiwiZnJpZW5kX25hbWUiLCJ0ZXh0QWxpZ24iLCJyaWdodCIsInBvc3RpbmdMb2FkaW5nIiwicmVxdWlyZUF1dGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxPQUFULE9BQTJCO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTs7QUFBQSxrQkFDUUMsc0RBQVEsQ0FBQyxFQUFELENBRGhCO0FBQUEsTUFDbEJDLFFBRGtCO0FBQUEsTUFDUkMsV0FEUTs7QUFBQSxvQkFFR0Msd0RBQVUsQ0FBQ0MsdUVBQUQsQ0FGYjtBQUFBLE1BRWxCQyxPQUZrQjtBQUFBLE1BRVRDLFFBRlM7O0FBQUEsbUJBR0hOLHNEQUFRLENBQUMsQ0FBRCxDQUhMO0FBQUEsTUFHbEJPLEdBSGtCO0FBQUEsTUFHYkMsTUFIYTs7QUFBQSxtQkFJU1Isc0RBQVEsQ0FBQyxLQUFELENBSmpCO0FBQUEsTUFJbEJTLFNBSmtCO0FBQUEsTUFJUEMsWUFKTzs7QUFBQSxtQkFLdUJWLHNEQUFRLENBQUMsS0FBRCxDQUwvQjtBQUFBLE1BS2xCVyxnQkFMa0I7QUFBQSxNQUtBQyxtQkFMQSxrQkFPekI7OztBQUVBLE1BQU1DLFVBQVU7QUFBQSxpTUFBRyxpQkFBT0MsS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFjQyw0QkFBZCwyREFBK0IsS0FBL0I7QUFBQTtBQUdmLGtCQUFJLENBQUNBLGNBQUwsRUFBcUJULFFBQVEsQ0FBQ1UsNERBQVUsQ0FBQyxJQUFELENBQVgsQ0FBUjtBQUhOO0FBQUEscUJBSU9DLDREQUFHLENBQUM7QUFDeEJDLHNCQUFNLEVBQUUsTUFEZ0I7QUFFeEJDLG1CQUFHLEVBQUUsb0JBRm1CO0FBR3hCQyx1QkFBTyxFQUFFO0FBQUUsNkJBQVdyQixJQUFJLENBQUNlO0FBQWxCO0FBSGUsZUFBRCxDQUpWOztBQUFBO0FBSVRPLHFCQUpTO0FBU1BDLGtCQVRPLEdBU1VELE9BVFYsQ0FTUEMsSUFUTyxFQVNEQyxNQVRDLEdBU1VGLE9BVFYsQ0FTREUsTUFUQztBQVVmQyxxQkFBTyxDQUFDQyxHQUFSLENBQVksa0JBQVosRUFBZ0NILElBQWhDLEVBQXNDLG9CQUF0QyxFQUE0REMsTUFBNUQ7O0FBQ0Esa0JBQUlBLE1BQU0sS0FBSyxHQUFmLEVBQW9CO0FBQ2xCakIsd0JBQVEsQ0FBQ29CLGdFQUFjLENBQUNKLElBQUQsQ0FBZixDQUFSO0FBQ0FFLHVCQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaO0FBQ0QsZUFIRCxNQUdPLElBQUlGLE1BQU0sS0FBSyxHQUFmLEVBQW9CO0FBQ3pCQyx1QkFBTyxDQUFDQyxHQUFSLENBQVksbUNBQVo7QUFFQUUsNEJBQVksQ0FBQ0MsWUFBYixDQUEwQmYsVUFBMUI7QUFDRCxlQUpNLE1BSUE7QUFDTGdCLDREQUFPLENBQUNDLEtBQVIsQ0FBYyxDQUFBUixJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLFlBQUFBLElBQUksQ0FBRU8sT0FBTixLQUFpQixpQkFBL0I7QUFDRDs7QUFFRCxrQkFBSSxDQUFDZCxjQUFMLEVBQXFCVCxRQUFRLENBQUNVLDREQUFVLENBQUMsS0FBRCxDQUFYLENBQVI7QUF0Qk47QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUF3QmZRLHFCQUFPLENBQUNDLEdBQVI7QUFDQSxrQkFBSSxDQUFDVixjQUFMLEVBQXFCVCxRQUFRLENBQUNVLDREQUFVLENBQUMsS0FBRCxDQUFYLENBQVI7O0FBekJOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVZILFVBQVU7QUFBQTtBQUFBO0FBQUEsS0FBaEI7O0FBNkJBLE1BQU1rQixVQUFVO0FBQUEsaU1BQUcsa0JBQU9qQixLQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWNDLDRCQUFkLDhEQUErQixLQUEvQjtBQUFBO0FBRWYsa0JBQUksQ0FBQ0EsY0FBTCxFQUFxQlQsUUFBUSxDQUFDVSw0REFBVSxDQUFDLElBQUQsQ0FBWCxDQUFSO0FBRk47QUFBQSxxQkFHT0MsNERBQUcsQ0FBQztBQUN4QkMsc0JBQU0sRUFBRSxLQURnQjtBQUV4QkMsbUJBQUcsRUFBRSxXQUZtQjtBQUd4QkMsdUJBQU8sRUFBRTtBQUFFLDZCQUFXckIsSUFBSSxDQUFDZTtBQUFsQjtBQUhlLGVBQUQsQ0FIVjs7QUFBQTtBQUdUTyxxQkFIUztBQVFQQyxrQkFSTyxHQVFVRCxPQVJWLENBUVBDLElBUk8sRUFRREMsTUFSQyxHQVFVRixPQVJWLENBUURFLE1BUkM7QUFTZkMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaLEVBQWdDSCxJQUFoQyxFQUFzQyxvQkFBdEMsRUFBNERDLE1BQTVEOztBQUNBLGtCQUFJQSxNQUFNLEtBQUssR0FBZixFQUFvQjtBQUNsQmpCLHdCQUFRLENBQUMwQixpRUFBZSxDQUFDVixJQUFELENBQWhCLENBQVI7QUFDQUUsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7QUFDRCxlQUhELE1BR08sSUFBSUYsTUFBTSxLQUFLLEdBQWYsRUFBb0I7QUFDekJDLHVCQUFPLENBQUNDLEdBQVIsQ0FBWSxtQ0FBWjtBQUVBRSw0QkFBWSxDQUFDQyxZQUFiLENBQTBCZixVQUExQjtBQUNELGVBSk0sTUFJQTtBQUNMZ0IsNERBQU8sQ0FBQ0MsS0FBUixDQUFjLENBQUFSLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFTyxPQUFOLEtBQWlCLGlCQUEvQjtBQUNEOztBQUVELGtCQUFJLENBQUNkLGNBQUwsRUFBcUJULFFBQVEsQ0FBQ1UsNERBQVUsQ0FBQyxLQUFELENBQVgsQ0FBUjtBQXJCTjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQXVCZlEscUJBQU8sQ0FBQ0MsR0FBUjtBQUNBLGtCQUFJLENBQUNWLGNBQUwsRUFBcUJULFFBQVEsQ0FBQ1UsNERBQVUsQ0FBQyxLQUFELENBQVgsQ0FBUjs7QUF4Qk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBVmUsVUFBVTtBQUFBO0FBQUE7QUFBQSxLQUFoQjs7QUE0QkEsTUFBTUUsVUFBVTtBQUFBLGlNQUFHLGtCQUFPQyxjQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWY1QixzQkFBUSxDQUFDVSw0REFBVSxDQUFDLElBQUQsRUFBTyxTQUFQLENBQVgsQ0FBUjtBQUZlO0FBQUEscUJBSU9DLDREQUFHLENBQUM7QUFDeEJDLHNCQUFNLEVBQUUsTUFEZ0I7QUFFeEJDLG1CQUFHLEVBQUUsUUFGbUI7QUFHeEJHLG9CQUFJLEVBQUVZLGNBSGtCO0FBSXhCZCx1QkFBTyxFQUFFO0FBQUUsNkJBQVdyQixJQUFJLENBQUNlO0FBQWxCO0FBSmUsZUFBRCxDQUpWOztBQUFBO0FBSVRPLHFCQUpTO0FBVVBDLGtCQVZPLEdBVVVELE9BVlYsQ0FVUEMsSUFWTyxFQVVEQyxNQVZDLEdBVVVGLE9BVlYsQ0FVREUsTUFWQztBQVlmQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlILElBQVosRUFBa0JDLE1BQWxCOztBQUVBLGtCQUFJQSxNQUFNLEtBQUssR0FBZixFQUFvQjtBQUNsQlEsMEJBQVU7QUFDWCxlQUZELE1BRU87QUFDTEYsNERBQU8sQ0FBQ0MsS0FBUixDQUFjLENBQUFSLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFTyxPQUFOLEtBQWlCLGlCQUEvQjtBQUNEOztBQUVEdkIsc0JBQVEsQ0FBQ1UsNERBQVUsQ0FBQyxLQUFELEVBQVEsU0FBUixDQUFYLENBQVI7QUFwQmU7QUFBQSxxQkFzQkZLLE9BdEJFOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBd0JmZixzQkFBUSxDQUFDVSw0REFBVSxDQUFDLEtBQUQsRUFBUSxTQUFSLENBQVgsQ0FBUjs7QUF4QmU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBVmlCLFVBQVU7QUFBQTtBQUFBO0FBQUEsS0FBaEI7O0FBNEJBLE1BQU1FLFFBQVE7QUFBQSxpTUFBRyxrQkFBT0MsSUFBUCxFQUFhQyxNQUFiLEVBQXFCQyxJQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0JkLHFCQUFPLENBQUNDLEdBQVIsQ0FBWVcsSUFBWixFQUFrQkMsTUFBbEIsRUFBMEJDLElBQTFCO0FBQS9CO0FBRWJoQyxzQkFBUSxDQUFDVSw0REFBVSxDQUFDLElBQUQsRUFBTyxTQUFQLENBQVgsQ0FBUjtBQUNJRyxpQkFIUyxHQUdILEVBSEc7O0FBS2Isa0JBQUlpQixJQUFJLEtBQUssT0FBYixFQUFzQjtBQUNwQmpCLG1CQUFHLEdBQUcsY0FBTjtBQUNELGVBRkQsTUFFTyxJQUFJaUIsSUFBSSxLQUFLLFdBQWIsRUFBMEI7QUFDL0JqQixtQkFBRyxHQUFHLG1CQUFOO0FBQ0QsZUFGTSxNQUVBLElBQUlpQixJQUFJLEtBQUssTUFBYixFQUFxQjtBQUMxQmpCLG1CQUFHLEdBQUcsYUFBTjtBQUNELGVBRk0sTUFFQSxJQUFJaUIsSUFBSSxLQUFLLE1BQWIsRUFBcUI7QUFDMUJqQixtQkFBRyxHQUFHLGFBQU47QUFDRCxlQUZNLE1BRUEsSUFBSWlCLElBQUksS0FBSyxTQUFiLEVBQXdCO0FBQzdCakIsbUJBQUcsR0FBRyxnQkFBTjtBQUNEOztBQWZZO0FBQUEscUJBaUJTRiw0REFBRyxDQUFDO0FBQ3hCQyxzQkFBTSxFQUFFLE1BRGdCO0FBRXhCQyxtQkFBRyxFQUFIQSxHQUZ3QjtBQUd4Qkcsb0JBQUksRUFBRTtBQUNKaUIsdUJBQUssRUFBRUYsTUFESDtBQUVKRyx3QkFBTSxFQUFFRjtBQUZKLGlCQUhrQjtBQU94QmxCLHVCQUFPLEVBQUU7QUFBRSw2QkFBV3JCLElBQUksQ0FBQ2U7QUFBbEI7QUFQZSxlQUFELENBakJaOztBQUFBO0FBaUJQTyxxQkFqQk87QUEwQkxDLGtCQTFCSyxHQTBCWUQsT0ExQlosQ0EwQkxDLElBMUJLLEVBMEJDQyxNQTFCRCxHQTBCWUYsT0ExQlosQ0EwQkNFLE1BMUJEO0FBNEJiQyxxQkFBTyxDQUFDaUIsSUFBUixDQUFhLFVBQWIsRUFBeUJuQixJQUF6QixFQUErQkMsTUFBL0I7O0FBRUEsa0JBQUlBLE1BQU0sS0FBSyxHQUFmLEVBQW9CO0FBQ2xCUSwwQkFBVTtBQUNWRiw0REFBTyxDQUFDYSxPQUFSLENBQWdCLHVCQUFoQjtBQUNELGVBSEQsTUFHTztBQUNMYiw0REFBTyxDQUFDQyxLQUFSLENBQWMsQ0FBQVIsSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSixZQUFBQSxJQUFJLENBQUVPLE9BQU4sS0FBaUIsaUJBQS9CO0FBQ0Q7O0FBRUR2QixzQkFBUSxDQUFDVSw0REFBVSxDQUFDLEtBQUQsRUFBUSxTQUFSLENBQVgsQ0FBUjtBQXJDYTtBQUFBLHFCQXVDQUssT0F2Q0E7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUF5Q2JmLHNCQUFRLENBQUNVLDREQUFVLENBQUMsS0FBRCxFQUFRLFNBQVIsQ0FBWCxDQUFSOztBQXpDYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFSbUIsUUFBUTtBQUFBO0FBQUE7QUFBQSxLQUFkOztBQTZDQVEseURBQVMsQ0FBQyxZQUFNO0FBQ2Q5QixjQUFVLENBQUNkLElBQUksQ0FBQ2UsS0FBTixDQUFWO0FBQ0FpQixjQUFVLENBQUNoQyxJQUFJLENBQUNlLEtBQU4sQ0FBVjtBQUNELEdBSFEsRUFHTixFQUhNLENBQVQ7QUEzSXlCLE1BZ0pqQjhCLFdBaEppQixHQWdKRHZDLE9BaEpDLENBZ0pqQnVDLFdBaEppQjtBQWtKekIsTUFBTUMsUUFBUSxHQUFHQyxNQUFNLENBQUNDLFVBQVAsQ0FBa0Isb0NBQWxCLEVBQXdEQyxPQUF6RTtBQUVBLE1BQU1DLGlCQUFpQixHQUFHO0FBQ3hCQyxZQUFRLEVBQUUsa0JBQUFDLElBQUksRUFBSTtBQUNoQixVQUFNQyxLQUFLLEdBQUduRCxRQUFRLENBQUNvRCxPQUFULENBQWlCRixJQUFqQixDQUFkO0FBQ0EsVUFBTUcsV0FBVyxHQUFHckQsUUFBUSxDQUFDc0QsS0FBVCxFQUFwQjtBQUNBLFVBQU1DLE1BQU0sR0FBR0YsV0FBVyxDQUFDRyxNQUFaLENBQW1CTCxLQUFuQixFQUEwQixDQUExQixDQUFmO0FBQ0FsRCxpQkFBVyxDQUFDc0QsTUFBRCxDQUFYO0FBQ0QsS0FOdUI7QUFPeEJFLGdCQUFZLEVBQUUsc0JBQUFQLElBQUksRUFBSTtBQUNwQmpELGlCQUFXLHdHQUFLRCxRQUFMLElBQWVrRCxJQUFmLEdBQVg7QUFDQSxhQUFPLEtBQVA7QUFDRCxLQVZ1QjtBQVd4QmxELFlBQVEsRUFBUkE7QUFYd0IsR0FBMUI7O0FBY0EsTUFBTTBELGlCQUFpQjtBQUFBLGlNQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFTMUQsc0JBQVQsU0FBU0EsUUFBVDtBQUNsQjJELHNCQURrQixHQUNQLElBQUlDLFFBQUosRUFETztBQUV4QjVELHNCQUFRLENBQUM2RCxPQUFULENBQWlCLFVBQUFYLElBQUksRUFBSTtBQUN2QlMsd0JBQVEsQ0FBQ0csTUFBVCxDQUFnQix3QkFBaEIsRUFBMENaLElBQUksQ0FBQ2EsYUFBL0M7QUFDRCxlQUZEO0FBRndCO0FBQUEscUJBTUYvQyw0REFBRyxDQUFDO0FBQ3hCQyxzQkFBTSxFQUFFLEtBRGdCO0FBRXhCQyxtQkFBRyxFQUFFLFdBRm1CO0FBR3hCRyxvQkFBSSxFQUFFc0MsUUFIa0I7QUFJeEJ4Qyx1QkFBTyxFQUFFO0FBQUUsNkJBQVdyQixJQUFJLENBQUNlO0FBQWxCO0FBSmUsZUFBRCxDQU5EOztBQUFBO0FBTWxCTyxxQkFOa0I7QUFZaEJDLGtCQVpnQixHQVlDRCxPQVpELENBWWhCQyxJQVpnQixFQVlWQyxNQVpVLEdBWUNGLE9BWkQsQ0FZVkUsTUFaVTtBQWN4QkMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZeEIsUUFBWixFQUFzQnFCLElBQXRCLEVBQTRCQyxNQUE1QjtBQUVBUSx3QkFBVSxDQUFDaEMsSUFBSSxDQUFDZSxLQUFOLENBQVY7O0FBaEJ3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFqQjZDLGlCQUFpQjtBQUFBO0FBQUE7QUFBQSxLQUF2Qjs7QUFtQkEsTUFBTU0sa0JBQWtCO0FBQUEsaU1BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVNoRSxzQkFBVCxTQUFTQSxRQUFUO0FBQ25CMkQsc0JBRG1CLEdBQ1IsSUFBSUMsUUFBSixFQURRO0FBRXpCNUQsc0JBQVEsQ0FBQzZELE9BQVQsQ0FBaUIsVUFBQVgsSUFBSSxFQUFJO0FBQ3ZCUyx3QkFBUSxDQUFDRyxNQUFULENBQWdCLGNBQWhCLEVBQWdDWixJQUFJLENBQUNhLGFBQXJDO0FBQ0QsZUFGRDtBQUZ5QjtBQUFBLHFCQU1IL0MsNERBQUcsQ0FBQztBQUN4QkMsc0JBQU0sRUFBRSxLQURnQjtBQUV4QkMsbUJBQUcsRUFBRSxXQUZtQjtBQUd4Qkcsb0JBQUksRUFBRXNDLFFBSGtCO0FBSXhCeEMsdUJBQU8sRUFBRTtBQUFFLDZCQUFXckIsSUFBSSxDQUFDZTtBQUFsQjtBQUplLGVBQUQsQ0FOQTs7QUFBQTtBQU1uQk8scUJBTm1CO0FBWWpCQyxrQkFaaUIsR0FZQUQsT0FaQSxDQVlqQkMsSUFaaUIsRUFZWEMsTUFaVyxHQVlBRixPQVpBLENBWVhFLE1BWlc7QUFjekJDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWXhCLFFBQVosRUFBc0JxQixJQUF0QixFQUE0QkMsTUFBNUI7QUFFQVEsd0JBQVUsQ0FBQ2hDLElBQUksQ0FBQ2UsS0FBTixDQUFWOztBQWhCeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBbEJtRCxrQkFBa0I7QUFBQTtBQUFBO0FBQUEsS0FBeEI7O0FBbUJBLE1BQU1DLFFBQVEsR0FBR3RCLFdBQVcsS0FBSyxJQUFoQixJQUF3QkEsV0FBVyxLQUFLdUIsU0FBeEMsMkVBQTRGdkIsV0FBVyxDQUFDd0Isc0JBQXhHLDBEQUE0RixzQkFBb0NDLEdBQWhJLFNBQXlJLElBQTFKO0FBQ0EsTUFBTUMsVUFBVSxHQUFHMUIsV0FBVyxLQUFLLElBQWhCLElBQXdCQSxXQUFXLEtBQUt1QixTQUF4QyxzQ0FBdUR2QixXQUFXLENBQUMyQixZQUFuRSwwREFBdUQsc0JBQTBCRixHQUFqRixJQUF5RixJQUE1RztBQUNBLE1BQU1HLFdBQVcsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVcsQ0FBQTlCLFdBQVcsU0FBWCxJQUFBQSxXQUFXLFdBQVgsWUFBQUEsV0FBVyxDQUFFSixNQUFiLEtBQXVCLENBQWxDLENBQXBCOztBQUVBLE1BQU1tQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCakUsZ0JBQVksQ0FBQyxJQUFELENBQVo7QUFDRCxHQUZEOztBQUlBLE1BQU1rRSxRQUFRO0FBQUEsa01BQUcsa0JBQU8xQyxjQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWI1QixzQkFBUSxDQUFDVSw0REFBVSxDQUFDLElBQUQsQ0FBWCxDQUFSO0FBRmE7QUFBQSxxQkFJU0MsNERBQUcsQ0FBQztBQUN4QkMsc0JBQU0sRUFBRSxLQURnQjtBQUV4QkMsbUJBQUcsRUFBRSxXQUZtQjtBQUd4Qkcsb0JBQUksRUFBRVksY0FIa0I7QUFJeEJkLHVCQUFPLEVBQUU7QUFBRSw2QkFBV3JCLElBQUksQ0FBQ2U7QUFBbEI7QUFKZSxlQUFELENBSlo7O0FBQUE7QUFJUE8scUJBSk87QUFVTEMsa0JBVkssR0FVWUQsT0FWWixDQVVMQyxJQVZLLEVBVUNDLE1BVkQsR0FVWUYsT0FWWixDQVVDRSxNQVZEOztBQVliLGtCQUFJQSxNQUFNLEtBQUssR0FBZixFQUFvQjtBQUNsQlEsMEJBQVU7QUFDWCxlQUZELE1BRU87QUFDTEYsNERBQU8sQ0FBQ0MsS0FBUixDQUFjLENBQUFSLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFTyxPQUFOLEtBQWlCLGlCQUEvQjtBQUNEOztBQUVEdkIsc0JBQVEsQ0FBQ1UsNERBQVUsQ0FBQyxLQUFELENBQVgsQ0FBUjtBQWxCYTtBQUFBLHFCQW9CQUssT0FwQkE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFzQmJmLHNCQUFRLENBQUNVLDREQUFVLENBQUMsS0FBRCxDQUFYLENBQVI7O0FBdEJhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVI0RCxRQUFRO0FBQUE7QUFBQTtBQUFBLEtBQWQ7O0FBMEJBLE1BQU1DLFFBQVE7QUFBQSxrTUFBRyxrQkFBT0MsUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFDWkEsUUFBUSxLQUFLLEVBREQ7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFHWHhFLHNCQUFRLENBQUNVLDREQUFVLENBQUMsSUFBRCxDQUFYLENBQVI7QUFIVztBQUFBLHFCQUlXQyw0REFBRyxDQUFDO0FBQ3hCQyxzQkFBTSxFQUFFLFFBRGdCO0FBRXhCQyxtQkFBRyxFQUFFLHNCQUZtQjtBQUd4Qkcsb0JBQUksRUFBRTtBQUFFd0QsMEJBQVEsRUFBRUE7QUFBWixpQkFIa0I7QUFJeEIxRCx1QkFBTyxFQUFFO0FBQUUsNkJBQVdyQixJQUFJLENBQUNlO0FBQWxCO0FBSmUsZUFBRCxDQUpkOztBQUFBO0FBSUxPLHFCQUpLO0FBVUhDLGtCQVZHLEdBVWNELE9BVmQsQ0FVSEMsSUFWRyxFQVVHQyxNQVZILEdBVWNGLE9BVmQsQ0FVR0UsTUFWSDs7QUFXWCxrQkFBSUEsTUFBTSxLQUFLLEdBQWYsRUFBb0I7QUFDbEJRLDBCQUFVO0FBQ1gsZUFGRCxNQUVPO0FBQ0xGLDREQUFPLENBQUNDLEtBQVIsQ0FBYyxDQUFBUixJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLFlBQUFBLElBQUksQ0FBRU8sT0FBTixLQUFpQixpQkFBL0I7QUFDRDs7QUFDRHZCLHNCQUFRLENBQUNVLDREQUFVLENBQUMsS0FBRCxDQUFYLENBQVI7QUFoQlc7QUFBQSxxQkFpQkVLLE9BakJGOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBbUJYZixzQkFBUSxDQUFDVSw0REFBVSxDQUFDLEtBQUQsQ0FBWCxDQUFSOztBQW5CVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFSNkQsUUFBUTtBQUFBO0FBQUE7QUFBQSxLQUFkLENBMU95QixDQWlRekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsU0FDRTtBQUFLLGFBQVMsRUFBRUUsa0VBQU0sQ0FBQ0MsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFRCxrRUFBTSxDQUFDRSxJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0csT0FBT3JDLFdBQVAsS0FBdUIsV0FBdkIsR0FDRDtBQUFLLGFBQVMsRUFBRW1DLGtFQUFNLENBQUNHLE9BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUgsa0VBQU0sQ0FBQ0ksTUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHO0FBQUssYUFBUyxFQUFFSixrRUFBTSxDQUFDSyxZQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxrRUFBRDtBQUNJLFFBQUksRUFBRXZDLFFBQVEsR0FBRyxHQUFILEdBQVMsR0FEM0I7QUFFSSxPQUFHLEVBQUV5QixVQUZUO0FBR0ksUUFBSSxFQUFFMUIsV0FBRixhQUFFQSxXQUFGLHVCQUFFQSxXQUFXLENBQUVrQyxRQUh2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsQ0FESCxDQURGLEVBZ0JFO0FBQUssYUFBUyxFQUFFQyxrRUFBTSxDQUFDTSxZQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVOLGtFQUFNLENBQUNPLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRVAsa0VBQU0sQ0FBQ1EsYUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFUixrRUFBTSxDQUFDUyxTQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUVULGtFQUFNLENBQUNVLFFBQXJCO0FBQStCLFNBQUssRUFBRTtBQUFFQyxZQUFNLEVBQUU7QUFBVixLQUF0QztBQUE2RCxXQUFPLEVBQUU7QUFBQSxhQUFNOUUsbUJBQW1CLENBQUMsSUFBRCxDQUF6QjtBQUFBLEtBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVVnQyxXQUFWLGFBQVVBLFdBQVYsdUJBQVVBLFdBQVcsQ0FBRStDLFNBQXZCLGNBQW9DL0MsV0FBcEMsYUFBb0NBLFdBQXBDLHVCQUFvQ0EsV0FBVyxDQUFFZ0QsUUFBakQsRUFERixDQURGLENBREYsRUFNRTtBQUFLLGFBQVMsRUFBRWIsa0VBQU0sQ0FBQ2MsVUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFFZCxrRUFBTSxDQUFDdkMsTUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseUNBQUQ7QUFDRSxnQkFBWSxFQUFFZ0MsV0FEaEI7QUFFRSxTQUFLLEVBQUU7QUFBRXNCLFdBQUssRUFBRSxTQUFUO0FBQW9CQyxjQUFRLEVBQUU7QUFBOUIsS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFLRTtBQUFNLGFBQVMsRUFBRWhCLGtFQUFNLENBQUNpQixXQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0d4QixXQURILENBTEYsQ0FERixDQU5GLENBREYsQ0FERixDQWhCRixDQURDLEdBZ0VEO0FBQUssYUFBUyxFQUFDLHNFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyw4QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsb0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUk7QUFBSyxhQUFTLEVBQUMsdUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLCtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUssYUFBUyxFQUFDLCtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQUZGLENBRkosQ0FESixDQWpFRixFQThFRTtBQUFLLGFBQVMsRUFBRU8sa0VBQU0sQ0FBQ2tCLGVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxlQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBRUMsaURBQVUsQ0FBQyxNQUFELEVBQVNuQixrRUFBTSxDQUFDeEUsR0FBaEIsQ0FBekI7QUFBK0MsV0FBTyxFQUFFO0FBQUEsYUFBTUMsTUFBTSxDQUFDLENBQUQsQ0FBWjtBQUFBLEtBQXhEO0FBQXlFLFNBQUssRUFBRTtBQUFFMkYsa0JBQVksRUFBQzVGLEdBQUcsSUFBRSxDQUFMLEdBQU8saUJBQVAsR0FBeUI7QUFBeEMsS0FBaEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLHdFQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsQ0FERixFQUlFO0FBQUksYUFBUyxFQUFFMkYsaURBQVUsQ0FBQyxNQUFELEVBQVNuQixrRUFBTSxDQUFDeEUsR0FBaEIsQ0FBekI7QUFBK0MsV0FBTyxFQUFFO0FBQUEsYUFBTUMsTUFBTSxDQUFDLENBQUQsQ0FBWjtBQUFBLEtBQXhEO0FBQXlFLFNBQUssRUFBRTtBQUFFMkYsa0JBQVksRUFBQzVGLEdBQUcsSUFBRSxDQUFMLEdBQU8saUJBQVAsR0FBeUI7QUFBeEMsS0FBaEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLHdFQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixDQUpGLEVBT0U7QUFBSSxhQUFTLEVBQUUyRixpREFBVSxDQUFDLE1BQUQsRUFBU25CLGtFQUFNLENBQUN4RSxHQUFoQixDQUF6QjtBQUErQyxXQUFPLEVBQUU7QUFBQSxhQUFNQyxNQUFNLENBQUMsQ0FBRCxDQUFaO0FBQUEsS0FBeEQ7QUFBeUUsU0FBSyxFQUFFO0FBQUUyRixrQkFBWSxFQUFDNUYsR0FBRyxJQUFFLENBQUwsR0FBTyxpQkFBUCxHQUF5QjtBQUF4QyxLQUFoRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsd0VBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLENBUEYsRUFVRTtBQUFJLGFBQVMsRUFBRTJGLGlEQUFVLENBQUMsTUFBRCxFQUFTbkIsa0VBQU0sQ0FBQ3hFLEdBQWhCLENBQXpCO0FBQStDLFdBQU8sRUFBRTtBQUFBLGFBQU1DLE1BQU0sQ0FBQyxDQUFELENBQVo7QUFBQSxLQUF4RDtBQUF5RSxTQUFLLEVBQUU7QUFBRTJGLGtCQUFZLEVBQUM1RixHQUFHLElBQUUsQ0FBTCxHQUFPLGlCQUFQLEdBQXlCO0FBQXhDLEtBQWhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyx3RUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsQ0FWRixFQWFFO0FBQUksYUFBUyxFQUFFMkYsaURBQVUsQ0FBQyxNQUFELEVBQVNuQixrRUFBTSxDQUFDeEUsR0FBaEIsQ0FBekI7QUFBK0MsV0FBTyxFQUFFO0FBQUEsYUFBTUMsTUFBTSxDQUFDLENBQUQsQ0FBWjtBQUFBLEtBQXhEO0FBQXlFLFNBQUssRUFBRTtBQUFFMkYsa0JBQVksRUFBQzVGLEdBQUcsSUFBRSxDQUFMLEdBQU8saUJBQVAsR0FBeUI7QUFBeEMsS0FBaEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLHdFQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixDQWJGLEVBZ0JFO0FBQUksYUFBUyxFQUFFMkYsaURBQVUsQ0FBQyxNQUFELEVBQVNuQixrRUFBTSxDQUFDeEUsR0FBaEIsQ0FBekI7QUFBK0MsV0FBTyxFQUFFO0FBQUEsYUFBTUMsTUFBTSxDQUFDLENBQUQsQ0FBWjtBQUFBLEtBQXhEO0FBQXlFLFNBQUssRUFBRTtBQUFFMkYsa0JBQVksRUFBQzVGLEdBQUcsSUFBRSxDQUFMLEdBQU8saUJBQVAsR0FBeUI7QUFBeEMsS0FBaEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLHdFQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixDQWhCRixDQURGLEVBcUJHQSxHQUFHLElBQUUsQ0FBTCxHQUNEO0FBQUssYUFBUyxFQUFFd0Usa0VBQU0sQ0FBQ3FCLFFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRXJCLGtFQUFNLENBQUNzQixhQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrRUFBRDtBQUNJLFFBQUksRUFBRSxFQURWO0FBRUksT0FBRyxFQUFFL0IsVUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFLRTtBQUFPLGFBQVMsRUFBRVMsa0VBQU0sQ0FBQ3VCLGVBQXpCO0FBQTBDLGVBQVcsRUFBQyxzQkFBdEQ7QUFDRSxXQUFPLEVBQUUzQixVQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixDQURGLEVBV0UsTUFBQyxxRUFBRDtBQUNFLFFBQUksRUFBRS9CLFdBRFI7QUFFRSxjQUFVLEVBQUVULFFBRmQ7QUFHRSxvQkFBZ0IsRUFBRUosVUFIcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhGLENBREMsR0FpQk0sSUF0Q1QsRUF1Q0d4QixHQUFHLElBQUUsQ0FBTCxHQUNEO0FBQ0UsYUFBUyxFQUFFMkYsaURBQVUsQ0FDbkJuQixrRUFBTSxDQUFDd0IsWUFEWSxFQUVuQnhCLGtFQUFNLENBQUN5QixnQkFGWSxDQUR2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUc1RCxXQU5ILGFBTUdBLFdBTkgsdUJBTUdBLFdBQVcsQ0FBRTZELE9BQWIsQ0FBcUJDLEdBQXJCLENBQXlCLFVBQUNDLElBQUQsRUFBT3ZELEtBQVAsRUFBaUI7QUFDekMsV0FDRTtBQUFLLGVBQVMsRUFBRTJCLGtFQUFNLENBQUM2QixNQUF2QjtBQUErQixTQUFHLEVBQUV4RCxLQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxrRUFBRDtBQUNFLFVBQUksRUFBRSxFQURSO0FBRUUsU0FBRyxFQUFFdUQsSUFBRixhQUFFQSxJQUFGLHVCQUFFQSxJQUFJLENBQUVwQyxZQUZiO0FBR0UsVUFBSSxFQUFFb0MsSUFBRixhQUFFQSxJQUFGLHVCQUFFQSxJQUFJLENBQUU3QixRQUhkO0FBSUUsV0FBSyxFQUFFO0FBQUUrQixtQkFBVyxFQUFFO0FBQWYsT0FKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFPRTtBQUFLLGVBQVMsRUFBRTlCLGtFQUFNLENBQUMrQixXQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxXQUFLLEVBQUU7QUFBRUMsaUJBQVMsRUFBRSxNQUFiO0FBQXFCaEIsZ0JBQVEsRUFBRTtBQUEvQixPQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBZ0RZLElBQUksQ0FBQ2hCLFNBQXJELE9BQWlFZ0IsSUFBSSxDQUFDZixRQUF0RSxDQURGLEVBRUUsTUFBQyx5Q0FBRDtBQUNFLGtCQUFZLEVBQUVlLElBQUksQ0FBQ25FLE1BRHJCO0FBRUUsV0FBSyxFQUFFO0FBQUVzRCxhQUFLLEVBQUUsU0FBVDtBQUFvQkMsZ0JBQVEsRUFBRTtBQUE5QixPQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRixDQVBGLENBREY7QUFxQkQsR0F0QkEsQ0FOSCxDQURDLEdBOEJNLElBckVULEVBdUVHeEYsR0FBRyxJQUFFLENBQUwsR0FDQyxNQUFDLHVFQUFEO0FBQWMsUUFBSSxFQUFFcUMsV0FBcEI7QUFBaUMsY0FBVSxFQUFFVCxRQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsR0FDMkQsSUF4RTlELEVBMEVHNUIsR0FBRyxJQUFFLENBQUwsR0FDQyxNQUFDLHdFQUFEO0FBQWMsUUFBSSxFQUFFcUMsV0FBcEI7QUFBaUMsY0FBVSxFQUFFVCxRQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsR0FDMkQsSUEzRTlELENBOUVGLENBREYsRUE4SkU7QUFBSyxhQUFTLEVBQUU0QyxrRUFBTSxDQUFDaUMsS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTlKRixFQWlLSSxNQUFDLHdFQUFEO0FBQ0UsU0FBSyxFQUFDLGFBRFI7QUFFRSxhQUFTLEVBQUV2RyxTQUZiO0FBR0UsV0FBTyxFQUFFO0FBQUEsYUFBTUMsWUFBWSxDQUFDLENBQUQsQ0FBbEI7QUFBQSxLQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRSxNQUFDLHVFQUFEO0FBQ0ksV0FBTyxFQUFFTCxPQUFPLENBQUM0RyxjQURyQjtBQUVJLGFBQVMsRUFBRWhGLFVBRmY7QUFHSSxjQUFVLEVBQUUwQyxVQUhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsQ0FqS0osRUE0S0ksTUFBQyx3RUFBRDtBQUNFLFNBQUssRUFBQyxjQURSO0FBRUUsYUFBUyxFQUFFaEUsZ0JBRmI7QUFHRSxXQUFPLEVBQUU7QUFBQSxhQUFNQyxtQkFBbUIsQ0FBQyxDQUFELENBQXpCO0FBQUEsS0FIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0UsTUFBQyw4Q0FBRDtBQUFhLFlBQVEsRUFBRWdFLFFBQXZCO0FBQWlDLFdBQU8sRUFBRXZFLE9BQU8sQ0FBQzRHLGNBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixDQTVLSixDQURGO0FBc0xEOztHQWprQlFuSCxPOztLQUFBQSxPO0FBbWtCTSxxRUFBQW9ILHdFQUFXLENBQUNwSCxPQUFELENBQTFCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuODEzMTUzZGIzMTM1YTVjMTQ0NTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvcHJvZmlsZS5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyBDYW1lcmFPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgQnV0dG9uLCBVcGxvYWQsIG1lc3NhZ2UsIElucHV0LCBUYWJzLCBSYXRlIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBBUEkgZnJvbSAnLi4vLi4vY29uZmlncy9BUEknO1xyXG5pbXBvcnQgUGhvdG9TZWN0aW9uIGZyb20gJ2NvbXBvbmVudHMvcHJvZmlsZS9QaG90b1NlY3Rpb24nO1xyXG5pbXBvcnQgRmVlZFBvc3RzIGZyb20gJ2NvbXBvbmVudHMvcHJvZmlsZS9GZWVkUG9zdHMnO1xyXG5pbXBvcnQgUG9zdGluZ1Bvc3QgZnJvbSAnY29tcG9uZW50cy9wcm9maWxlL1Bvc3RpbmdQb3N0JztcclxuaW1wb3J0IFJhdGVkU2VjdGlvbiBmcm9tICdjb21wb25lbnRzL3Byb2ZpbGUvUmF0ZWRTZWN0aW9uJztcclxuaW1wb3J0IHJlcXVpcmVBdXRoIGZyb20gJ2hlbHBlcnMvaG9jL3JlcXVpcmVBdXRoJztcclxuaW1wb3J0IHsgUHJvZmlsZUNvbnRleHQgfSBmcm9tICcuL3N0b3JhZ2UvUHJvZmlsZUNvbnRleHQnO1xyXG5pbXBvcnQgeyBzZXRMb2FkaW5nLCBzZXRGcmllbmRzRGF0YSwgc2V0QWNjb3VudHNEYXRhIH0gZnJvbSAnLi9hY3Rpb25zJztcclxuaW1wb3J0IEF2YXRhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9BdmF0YXInO1xyXG5pbXBvcnQgUmF0aW5nICBmcm9tICdyZWFjdC1yYXRpbmcnO1xyXG5pbXBvcnQgTW9kYWxXcmFwcGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9uL01vZGFsV3JhcHBlcic7XHJcbmltcG9ydCBQb3N0TW9kYWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wcm9maWxlL1Bvc3RNb2RhbCc7XHJcbmltcG9ydCBFZGl0UHJvZmlsZSBmcm9tICcuL2VkaXQnO1xyXG5cclxuZnVuY3Rpb24gUHJvZmlsZSh7IGF1dGggfSkge1xyXG4gIGNvbnN0IFtmaWxlTGlzdCwgc2V0RmlsZUxpc3QgXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc3RvcmFnZSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChQcm9maWxlQ29udGV4dCk7XHJcbiAgY29uc3QgW3RhYiwgc2V0VGFiXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IFtwb3N0TW9kYWwsIHNldFBvc3RNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2VkaXRQcm9maWxlTW9kYWwsIHNldEVkaXRQcm9maWxlTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAvLyBjb25zb2xlLmxvZygnc3RvcmFnZScsIHN0b3JhZ2UsICdhdXRoJywgYXV0aClcclxuXHJcbiAgY29uc3QgZ2V0RnJpZW5kcyA9IGFzeW5jICh0b2tlbiwgd2l0aG91dExvYWRpbmcgPSBmYWxzZSkgPT4ge1xyXG4gICAgLy8gY29uc29sZS53YXJuKGF1dGhTZXJ2aWNlcy5hdXRoLCBhdXRoU2VydmljZXMubG9jYWxzdG9yYWdlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICghd2l0aG91dExvYWRpbmcpIGRpc3BhdGNoKHNldExvYWRpbmcodHJ1ZSkpO1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6ICcvYWNjb3VudHMvdGltZWxpbmUnLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuICAgICAgY29uc29sZS5sb2coJ2dldEZyaWVuZHNfZGF0YT0nLCBkYXRhLCAnZ2V0RnJpZW5kc19zdGF0dXM9Jywgc3RhdHVzKVxyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBkaXNwYXRjaChzZXRGcmllbmRzRGF0YShkYXRhKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJz09PT09PT09PScpO1xyXG4gICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gNDAzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJz09PT09PT09PT09PT09PT09IFJlZnJlc2ggdG9rZW4gIScpO1xyXG5cclxuICAgICAgICBhdXRoU2VydmljZXMucmVmcmVzaFRva2VuKGdldEZyaWVuZHMpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghd2l0aG91dExvYWRpbmcpIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgaWYgKCF3aXRob3V0TG9hZGluZykgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldEFjY291bnQgPSBhc3luYyAodG9rZW4sIHdpdGhvdXRMb2FkaW5nID0gZmFsc2UpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICghd2l0aG91dExvYWRpbmcpIGRpc3BhdGNoKHNldExvYWRpbmcodHJ1ZSkpO1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHVybDogJy9hY2NvdW50cycsXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG4gICAgICBjb25zb2xlLmxvZygnZ2V0QWNjb3VudF9kYXRhPScsIGRhdGEsICdnZXRBY2NvdW50X3N0YXR1cz0nLCBzdGF0dXMpXHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIGRpc3BhdGNoKHNldEFjY291bnRzRGF0YShkYXRhKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJz09PT09PT09PScpO1xyXG4gICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gNDAzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJz09PT09PT09PT09PT09PT09IFJlZnJlc2ggdG9rZW4gIScpO1xyXG5cclxuICAgICAgICBhdXRoU2VydmljZXMucmVmcmVzaFRva2VuKGdldEZyaWVuZHMpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghd2l0aG91dExvYWRpbmcpIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgaWYgKCF3aXRob3V0TG9hZGluZykgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY3JlYXRlUG9zdCA9IGFzeW5jIChkYXRhRm9yUmVxdWVzdCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlLCAncG9zdGluZycpKTtcclxuXHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybDogJy9wb3N0cycsXHJcbiAgICAgICAgZGF0YTogZGF0YUZvclJlcXVlc3QsXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG5cclxuICAgICAgY29uc29sZS5sb2coZGF0YSwgc3RhdHVzKVxyXG5cclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgZ2V0QWNjb3VudCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UsICdwb3N0aW5nJykpO1xyXG5cclxuICAgICAgcmV0dXJuIGF3YWl0IHJlcXVlc3Q7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlLCAncG9zdGluZycpKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCByYXRlUG9zdCA9IGFzeW5jICh0eXBlLCBwb3N0SWQsIHJhdGUpID0+IHtjb25zb2xlLmxvZyh0eXBlLCBwb3N0SWQsIHJhdGUpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlLCAncG9zdGluZycpKTtcclxuICAgICAgbGV0IHVybCA9ICcnO1xyXG5cclxuICAgICAgaWYgKHR5cGUgPT09ICdQaG90bycpIHtcclxuICAgICAgICB1cmwgPSAnL3Bob3Rvcy9yYXRlJztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnVmlkZW9DbGlwJykge1xyXG4gICAgICAgIHVybCA9ICcvdmlkZW8tY2xpcHMvcmF0ZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0l0ZW0nKSB7XHJcbiAgICAgICAgdXJsID0gJy9pdGVtcy9yYXRlJztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnUG9zdCcpIHtcclxuICAgICAgICB1cmwgPSAnL3Bvc3RzL3JhdGUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdDb21tZW50Jykge1xyXG4gICAgICAgIHVybCA9ICcvY29tbWVudHMvcmF0ZSc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICByYXRlZDogcG9zdElkLFxyXG4gICAgICAgICAgcmF0aW5nOiByYXRlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG5cclxuICAgICAgY29uc29sZS53YXJuKCdyYXRlUG9zdCcsIGRhdGEsIHN0YXR1cyk7XHJcblxyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICBnZXRBY2NvdW50KCk7XHJcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKCdFdmFsdWF0ZSBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlLCAncG9zdGluZycpKTtcclxuXHJcbiAgICAgIHJldHVybiBhd2FpdCByZXF1ZXN0O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSwgJ3Bvc3RpbmcnKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldEZyaWVuZHMoYXV0aC50b2tlbik7XHJcbiAgICBnZXRBY2NvdW50KGF1dGgudG9rZW4pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgeyBhY2NvdW50RGF0YSB9ID0gc3RvcmFnZVxyXG5cclxuICBjb25zdCBpc01vYmlsZSA9IHdpbmRvdy5tYXRjaE1lZGlhKCdvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpJykubWF0Y2hlc1xyXG5cclxuICBjb25zdCBpbWFnZVVwbG9hZFBhcmFtcyA9IHtcclxuICAgIG9uUmVtb3ZlOiBmaWxlID0+IHtcclxuICAgICAgY29uc3QgaW5kZXggPSBmaWxlTGlzdC5pbmRleE9mKGZpbGUpO1xyXG4gICAgICBjb25zdCBuZXdGaWxlTGlzdCA9IGZpbGVMaXN0LnNsaWNlKCk7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IG5ld0ZpbGVMaXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgIHNldEZpbGVMaXN0KHJlc3VsdClcclxuICAgIH0sXHJcbiAgICBiZWZvcmVVcGxvYWQ6IGZpbGUgPT4ge1xyXG4gICAgICBzZXRGaWxlTGlzdChbLi4uZmlsZUxpc3QsIGZpbGVdKVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgZmlsZUxpc3QsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVXBsb2FkQ292ZXIgPSBhc3luYyAoeyBmaWxlTGlzdCB9KSA9PiB7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZmlsZUxpc3QuZm9yRWFjaChmaWxlID0+IHtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdwcm9maWxlQmFja2dyb3VuZEltYWdlJywgZmlsZS5vcmlnaW5GaWxlT2JqKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICBtZXRob2Q6ICdwdXQnLFxyXG4gICAgICB1cmw6ICcvYWNjb3VudHMnLFxyXG4gICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcblxyXG4gICAgY29uc29sZS5sb2coZmlsZUxpc3QsIGRhdGEsIHN0YXR1cylcclxuXHJcbiAgICBnZXRBY2NvdW50KGF1dGgudG9rZW4pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlVXBsb2FkQXZhdGFyID0gYXN5bmMgKHsgZmlsZUxpc3QgfSkgPT4ge1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZpbGVMaXN0LmZvckVhY2goZmlsZSA9PiB7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgncHJvZmlsZVBob3RvJywgZmlsZS5vcmlnaW5GaWxlT2JqKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICBtZXRob2Q6ICdwdXQnLFxyXG4gICAgICB1cmw6ICcvYWNjb3VudHMnLFxyXG4gICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcblxyXG4gICAgY29uc29sZS5sb2coZmlsZUxpc3QsIGRhdGEsIHN0YXR1cylcclxuXHJcbiAgICBnZXRBY2NvdW50KGF1dGgudG9rZW4pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY292ZXJVcmwgPSBhY2NvdW50RGF0YSAhPT0gbnVsbCAmJiBhY2NvdW50RGF0YSAhPT0gdW5kZWZpbmVkID8gYHVybChodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2FjY291bnREYXRhLnByb2ZpbGVCYWNrZ3JvdW5kSW1hZ2U/LnNyY30pYCA6IG51bGxcclxuICBjb25zdCBwcm9maWxlVXJsID0gYWNjb3VudERhdGEgIT09IG51bGwgJiYgYWNjb3VudERhdGEgIT09IHVuZGVmaW5lZCA/IGAke2FjY291bnREYXRhLnByb2ZpbGVQaG90bz8uc3JjfWAgOiBudWxsXHJcbiAgY29uc3Qgcm91bmRSYXRpbmcgPSBNYXRoLnJvdW5kKGFjY291bnREYXRhPy5yYXRpbmcgfHwgMClcclxuICBcclxuICBjb25zdCBtb2RhbFBvcHVwID0gKCkgPT4ge1xyXG4gICAgc2V0UG9zdE1vZGFsKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25VcGRhdGUgPSBhc3luYyAoZGF0YUZvclJlcXVlc3QpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcodHJ1ZSkpO1xyXG5cclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICB1cmw6ICcvYWNjb3VudHMnLFxyXG4gICAgICAgIGRhdGE6IGRhdGFGb3JSZXF1ZXN0LFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuXHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgIGdldEFjY291bnQoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSk7XHJcblxyXG4gICAgICByZXR1cm4gYXdhaXQgcmVxdWVzdDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCB1bmZyaWVuZCA9IGFzeW5jICh1c2VybmFtZSkgPT4ge1xyXG4gICAgaWYodXNlcm5hbWUgIT09ICcnKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlKSk7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgICAgdXJsOiAnL2FjY291bnRzL2ZyaWVuZHNoaXAnLFxyXG4gICAgICAgICAgZGF0YTogeyB1c2VybmFtZTogdXNlcm5hbWUgfSxcclxuICAgICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgICBnZXRBY2NvdW50KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKTtcclxuICAgICAgICByZXR1cm4gYXdhaXQgcmVxdWVzdDtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLy8gcmV0dXJuIChcclxuICAvLyAgIDxkaXY+XHJcbiAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5jb250YWluZXIsIHN0eWxlcy51c2VyX3Byb2ZpbGUpfT5cclxuICAvLyAgICAgICA8ZGl2XHJcbiAgLy8gICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb3Zlcn1cclxuICAvLyAgICAgICAgIHN0eWxlPXtjb3ZlclVybCAhPT0gbnVsbCA/IHsgYmFja2dyb3VuZEltYWdlOiBjb3ZlclVybCB9IDogbnVsbH1cclxuICAvLyAgICAgICA+XHJcbiAgLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYW5nZV9jb3Zlcn0+XHJcbiAgLy8gICAgICAgICAgIDxVcGxvYWQgey4uLmltYWdlVXBsb2FkUGFyYW1zfSBvbkNoYW5nZT17aGFuZGxlVXBsb2FkQ292ZXJ9PlxyXG4gIC8vICAgICAgICAgICAgIDxCdXR0b24gZ2hvc3QgdHlwZT1cImRhc2hlZFwiPlxyXG4gIC8vICAgICAgICAgICAgICAgQ2hhbmdlIGNvdmVyXHJcbiAgLy8gICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgLy8gICAgICAgICAgIDwvVXBsb2FkPlxyXG4gIC8vICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgPC9kaXY+XHJcblxyXG4gIC8vICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZX0+XHJcbiAgLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn0+XHJcbiAgLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyX2ltYWdlfT5cclxuICAvLyAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgLy8gICAgICAgICAgICAgICBzaXplPXtpc01vYmlsZSA/IDEwMCA6IDE0MH1cclxuICAvLyAgICAgICAgICAgICAgIHVybD17cHJvZmlsZVVybH1cclxuICAvLyAgICAgICAgICAgICAgIHRleHQ9e2FjY291bnREYXRhPy51c2VybmFtZX1cclxuICAvLyAgICAgICAgICAgICAvPlxyXG4gIC8vICAgICAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGFuZ2VfYXZhdGFyfT5cclxuICAvLyAgICAgICAgICAgICA8VXBsb2FkIHsuLi5pbWFnZVVwbG9hZFBhcmFtc30gb25DaGFuZ2U9e2hhbmRsZVVwbG9hZEF2YXRhcn0+XHJcbiAgLy8gICAgICAgICAgICAgICA8Q2FtZXJhT3V0bGluZWQgY2xhc3NOYW1lPXtzdHlsZXMuY2hhbmdlX2F2YXRhcl9pbWFnZX0gLz5cclxuICAvLyAgICAgICAgICAgICA8L1VwbG9hZD5cclxuICAvLyAgICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgICA8L2Rpdj5cclxuXHJcbiAgLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfY29udGVudH0+XHJcbiAgLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcl9pbmZvfT5cclxuICAvLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlX3NlY3Rpb259PlxyXG4gIC8vICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0X3NpZGV9PlxyXG4gIC8vICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5mdWxsbmFtZX0+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgPHNwYW4+e2Ake2FjY291bnREYXRhPy5maXJzdE5hbWV9ICR7YWNjb3VudERhdGE/Lmxhc3ROYW1lfWB9PC9zcGFuPlxyXG4gIC8vICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgLy8gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHRfc2lkZX0+XHJcbiAgLy8gICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnJhdGluZ30+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgPFJhdGVcclxuICAvLyAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICBhbGxvd0hhbGZcclxuICBcclxuICAvLyAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cm91bmRSYXRpbmd9XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJyNmYWRiMTQnLCBmb250U2l6ZTogJzFlbScgfX1cclxuICAvLyAgICAgICAgICAgICAgICAgICAvPlxyXG4gIC8vICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnJhdGluZ190ZXh0fT5cclxuICAvLyAgICAgICAgICAgICAgICAgICAgIHtyb3VuZFJhdGluZ31cclxuICAvLyAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgLy8gICAgICAgICAgICAgICAgIDwvcD5cclxuICAvLyAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICAgICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICAgICAgICAgIHsvKiA9PT09ICovfVxyXG4gIC8vICAgICAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3R0b21fc2VjdGlvbn0+XHJcbiAgLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0X3NpZGV9PlxyXG4gIC8vICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyX2FjdGlvbnN9PlxyXG4gIC8vICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvbGxvd19hY3Rpb25zfT5cclxuICAvLyAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5mb2xsb3dlcnN9PlxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAge2FjY291bnREYXRhPy5mb2xsb3dlcnNDb3VudH0gZm9sbG93ZXJzXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gIC8vICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZm9sbG93ZXJzX2Zvcm1vYmlsZX0+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAge2FjY291bnREYXRhPy5mb2xsb3dlcnNDb3VudH0gZm9sbG93ZXJzIC8ge2FjY291bnREYXRhPy5mb2xsb3dpbmdDb3VudH17JyAnfVxyXG4gIC8vICAgICAgICAgICAgICAgICAgIGZvbGxvd2luZ1xyXG4gIC8vICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgLy8gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgICAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0X3NpZGV9PlxyXG4gIC8vICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyX2FjdGlvbnN9PlxyXG4gIC8vICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc2hhcGU9XCJyb3VuZFwiIHNpemU9XCJsYXJnZVwiPlxyXG4gIC8vICAgICAgICAgICAgICAgICAgIEVkaXQgcHJvZmlsZVxyXG4gIC8vICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAvLyAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICAgICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAvLyAgICAgPC9kaXY+XHJcblxyXG4gIC8vICAgICA8ZGl2XHJcbiAgLy8gICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxyXG4gIC8vICAgICAgICAgc3R5bGVzLmNvbnRhaW5lcixcclxuICAvLyAgICAgICAgIHN0eWxlcy5jb250ZW50LFxyXG4gIC8vICAgICAgICAgc3R5bGVzLmNvbnRhaW5lcl9iZ1xyXG4gIC8vICAgICAgICl9XHJcbiAgLy8gICAgID5cclxuICAvLyAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVfY29udGVudHN9PlxyXG4gIC8vICAgICAgICAgPFBob3RvU2VjdGlvbiB1c2VyPXthY2NvdW50RGF0YX0gb25SYXRlUG9zdD17cmF0ZVBvc3R9IC8+XHJcbiAgLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuY29udGFpbmVyX2JnLCBzdHlsZXMuc2VjdGlvbil9PlxyXG4gIC8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb25fdGl0bGV9PlxyXG4gIC8vICAgICAgICAgICAgIDxwPkZyaWVuZHM8L3A+XHJcbiAgLy8gICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwibGlua1wiPkFsbCBmcmllbmRzPC9CdXR0b24+XHJcbiAgLy8gICAgICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICAgICAgICA8ZGl2XHJcbiAgLy8gICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxyXG4gIC8vICAgICAgICAgICAgICAgc3R5bGVzLmZyaWVuZHNfbGlzdCxcclxuICAvLyAgICAgICAgICAgICAgIHN0eWxlcy5zZWN0aW9uc19jb250ZW50XHJcbiAgLy8gICAgICAgICAgICAgKX1cclxuICAvLyAgICAgICAgICAgPlxyXG4gIC8vICAgICAgICAgICAgIHthY2NvdW50RGF0YT8uZnJpZW5kcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgLy8gICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gIC8vICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZyaWVuZH0ga2V5PXtpbmRleH0+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgPEF2YXRhclxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgc2l6ZT17ODB9XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICB1cmw9e2l0ZW0/LnByb2ZpbGVQaG90b31cclxuICAvLyAgICAgICAgICAgICAgICAgICAgIHRleHQ9e2l0ZW0/LnVzZXJuYW1lfVxyXG4gIC8vICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mcmllbmRfbmFtZX0+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0uZmlyc3ROYW1lfSB7aXRlbS5sYXN0TmFtZX08L3NwYW4+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICAgICAgICAgICAgKTtcclxuICAvLyAgICAgICAgICAgICB9KX1cclxuICAvLyAgICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgICAgIDxSYXRlZFNlY3Rpb24gdXNlcj17YWNjb3VudERhdGF9IG9uUmF0ZVBvc3Q9e3JhdGVQb3N0fSAvPlxyXG4gIC8vICAgICAgIDwvZGl2PlxyXG5cclxuICAvLyAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjdGl2aXR5fT5cclxuICAvLyAgICAgICAgIDxQb3N0aW5nUG9zdFxyXG4gIC8vICAgICAgICAgICBsb2FkaW5nPXtzdG9yYWdlLnBvc3RpbmdMb2FkaW5nfVxyXG4gIC8vICAgICAgICAgICBvblBvc3Rpbmc9e2NyZWF0ZVBvc3R9XHJcbiAgLy8gICAgICAgICAvPlxyXG4gIC8vICAgICAgICAgPEZlZWRQb3N0c1xyXG4gIC8vICAgICAgICAgICB1c2VyPXthY2NvdW50RGF0YX1cclxuICAvLyAgICAgICAgICAgb25SYXRlUG9zdD17cmF0ZVBvc3R9XHJcbiAgLy8gICAgICAgICAgIG9uVXBkYXRlVGltZWxpbmU9e2dldEFjY291bnR9XHJcbiAgLy8gICAgICAgICAvPlxyXG4gIC8vICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICA8L2Rpdj5cclxuICAvLyAgIDwvZGl2PlxyXG4gIC8vICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVmdH0+XHJcbiAgICAgICAge3R5cGVvZiBhY2NvdW50RGF0YSAhPT0gJ3VuZGVmaW5lZCc/XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyfT5cclxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyX2ltYWdlfT5cclxuICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgIHNpemU9e2lzTW9iaWxlID8gMTAwIDogMTQwfVxyXG4gICAgICAgICAgICAgICAgICB1cmw9e3Byb2ZpbGVVcmx9XHJcbiAgICAgICAgICAgICAgICAgIHRleHQ9e2FjY291bnREYXRhPy51c2VybmFtZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYW5nZV9hdmF0YXJ9PlxyXG4gICAgICAgICAgICAgIDxVcGxvYWQgey4uLmltYWdlVXBsb2FkUGFyYW1zfSBvbkNoYW5nZT17aGFuZGxlVXBsb2FkQXZhdGFyfT5cclxuICAgICAgICAgICAgICAgIDxDYW1lcmFPdXRsaW5lZCBjbGFzc05hbWU9e3N0eWxlcy5jaGFuZ2VfYXZhdGFyX2ltYWdlfSAvPlxyXG4gICAgICAgICAgICAgIDwvVXBsb2FkPlxyXG4gICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyX2NvbnRlbnR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfaW5mb30+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZV9zZWN0aW9ufT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVmdF9zaWRlfT5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZnVsbG5hbWV9IHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19IG9uQ2xpY2s9eygpID0+IHNldEVkaXRQcm9maWxlTW9kYWwodHJ1ZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntgJHthY2NvdW50RGF0YT8uZmlyc3ROYW1lfSAke2FjY291bnREYXRhPy5sYXN0TmFtZX1gfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0X3NpZGV9PlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5yYXRpbmd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxSYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3JvdW5kUmF0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICcjZmFkYjE0JywgZm9udFNpemU6ICczMHB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucmF0aW5nX3RleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge3JvdW5kUmF0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgey8qID09PT0gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3R0b21fc2VjdGlvbn0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0X3NpZGV9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyX2FjdGlvbnN9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvbGxvd19hY3Rpb25zfT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5mb2xsb3dlcnN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2FjY291bnREYXRhPy5mb2xsb3dlcnNDb3VudH0gZm9sbG93ZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZm9sbG93ZXJzX2Zvcm1vYmlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2FjY291bnREYXRhPy5mb2xsb3dlcnNDb3VudH0gZm9sbG93ZXJzIC8ge2FjY291bnREYXRhPy5mb2xsb3dpbmdDb3VudH17JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvbGxvd2luZ1xyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0X3NpZGV9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyX2FjdGlvbnN9PlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc2hhcGU9XCJyb3VuZFwiIHNpemU9XCJsYXJnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEVkaXQgcHJvZmlsZVxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA6XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktMzAwIHNoYWRvdyByb3VuZGVkLW1kIHAtNCBtYXgtdy1zbSB3LWZ1bGwgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGUtcHVsc2UgZmxleCBzcGFjZS14LTRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBiZy1ncmF5LTQwMCBoLTEyIHctMTJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIHNwYWNlLXktNCBweS0xXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC00IGJnLWdyYXktNDAwIHJvdW5kZWQgdy0zLzRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNCBiZy1ncmF5LTQwMCByb3VuZGVkXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTQgYmctZ3JheS00MDAgcm91bmRlZCB3LTUvNlwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZV9jb250ZW50fT5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGJvcmRlci1iXCI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ21yLTEnLCBzdHlsZXMudGFiKX0gb25DbGljaz17KCkgPT4gc2V0VGFiKDEpfSBzdHlsZT17eyBib3JkZXJCb3R0b206dGFiPT0xPyc1cHggc29saWQgd2hpdGUnOidub25lJyB9fT5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgcHktMiBweC00IHRleHQtYmx1ZS01MDAgaG92ZXI6dGV4dC1ibHVlLTgwMCBmb250LXNlbWlib2xkXCI+QUNUSVZJVFk8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ21yLTEnLCBzdHlsZXMudGFiKX0gb25DbGljaz17KCkgPT4gc2V0VGFiKDIpfSBzdHlsZT17eyBib3JkZXJCb3R0b206dGFiPT0yPyc1cHggc29saWQgd2hpdGUnOidub25lJyB9fT5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgcHktMiBweC00IHRleHQtYmx1ZS01MDAgaG92ZXI6dGV4dC1ibHVlLTgwMCBmb250LXNlbWlib2xkXCI+R3JvdXBzPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdtci0xJywgc3R5bGVzLnRhYil9IG9uQ2xpY2s9eygpID0+IHNldFRhYig2KX0gc3R5bGU9e3sgYm9yZGVyQm90dG9tOnRhYj09Nj8nNXB4IHNvbGlkIHdoaXRlJzonbm9uZScgfX0+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHB5LTIgcHgtNCB0ZXh0LWJsdWUtNTAwIGhvdmVyOnRleHQtYmx1ZS04MDAgZm9udC1zZW1pYm9sZFwiPk1hcmtldHM8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ21yLTEnLCBzdHlsZXMudGFiKX0gb25DbGljaz17KCkgPT4gc2V0VGFiKDMpfSBzdHlsZT17eyBib3JkZXJCb3R0b206dGFiPT0zPyc1cHggc29saWQgd2hpdGUnOidub25lJyB9fT5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgcHktMiBweC00IHRleHQtYmx1ZS01MDAgaG92ZXI6dGV4dC1ibHVlLTgwMCBmb250LXNlbWlib2xkXCI+UEhPVE9TPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdtci0xJywgc3R5bGVzLnRhYil9IG9uQ2xpY2s9eygpID0+IHNldFRhYig0KX0gc3R5bGU9e3sgYm9yZGVyQm90dG9tOnRhYj09ND8nNXB4IHNvbGlkIHdoaXRlJzonbm9uZScgfX0+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHB5LTIgcHgtNCB0ZXh0LWJsdWUtNTAwIGhvdmVyOnRleHQtYmx1ZS04MDAgZm9udC1zZW1pYm9sZFwiPlJBVEVTPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdtci0xJywgc3R5bGVzLnRhYil9IG9uQ2xpY2s9eygpID0+IHNldFRhYig1KX0gc3R5bGU9e3sgYm9yZGVyQm90dG9tOnRhYj09NT8nNXB4IHNvbGlkIHdoaXRlJzonbm9uZScgfX0+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHB5LTIgcHgtNCB0ZXh0LWJsdWUtNTAwIGhvdmVyOnRleHQtYmx1ZS04MDAgZm9udC1zZW1pYm9sZFwiPkZSSUVORFM8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAge3RhYj09MT9cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aXZpdHl9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNyZWF0ZVBvc3REaXZ9PlxyXG4gICAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICAgICAgc2l6ZT17NTB9XHJcbiAgICAgICAgICAgICAgICAgIHVybD17cHJvZmlsZVVybH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5jcmVhdGVQb3N0SW5wdXR9IHBsYWNlaG9sZGVyPVwiV2hhdCdzIG9uIHlvdXIgbWluZD9cIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17bW9kYWxQb3B1cH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPC9pbnB1dD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxGZWVkUG9zdHNcclxuICAgICAgICAgICAgICB1c2VyPXthY2NvdW50RGF0YX1cclxuICAgICAgICAgICAgICBvblJhdGVQb3N0PXtyYXRlUG9zdH1cclxuICAgICAgICAgICAgICBvblVwZGF0ZVRpbWVsaW5lPXtnZXRBY2NvdW50fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+Om51bGx9XHJcbiAgICAgICAgICB7dGFiPT01P1xyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXHJcbiAgICAgICAgICAgICAgc3R5bGVzLmZyaWVuZHNfbGlzdCxcclxuICAgICAgICAgICAgICBzdHlsZXMuc2VjdGlvbnNfY29udGVudFxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7YWNjb3VudERhdGE/LmZyaWVuZHMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZyaWVuZH0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPXs4MH1cclxuICAgICAgICAgICAgICAgICAgICB1cmw9e2l0ZW0/LnByb2ZpbGVQaG90b31cclxuICAgICAgICAgICAgICAgICAgICB0ZXh0PXtpdGVtPy51c2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogMCB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZyaWVuZF9uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgZm9udFNpemU6IDIwIH19PntpdGVtLmZpcnN0TmFtZX0ge2l0ZW0ubGFzdE5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2l0ZW0ucmF0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICcjZmFkYjE0JywgZm9udFNpemU6ICcxNXB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzaGFwZT1cInJvdW5kXCIgc2l6ZT1cInNtYWxsXCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogNSB9fSBvbkNsaWNrPXt1bmZyaWVuZChpdGVtLnVzZXJuYW1lKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgVW5mcmllbmRcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9kaXY+Om51bGxcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHt0YWI9PTM/XHJcbiAgICAgICAgICAgIDxQaG90b1NlY3Rpb24gdXNlcj17YWNjb3VudERhdGF9IG9uUmF0ZVBvc3Q9e3JhdGVQb3N0fSAvPjpudWxsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB7dGFiPT00P1xyXG4gICAgICAgICAgICA8UmF0ZWRTZWN0aW9uIHVzZXI9e2FjY291bnREYXRhfSBvblJhdGVQb3N0PXtyYXRlUG9zdH0gLz46bnVsbFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yaWdodH0+XHJcbiAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgICAgPE1vZGFsV3JhcHBlclxyXG4gICAgICAgICAgdGl0bGU9XCJDcmVhdGUgUG9zdFwiXHJcbiAgICAgICAgICBzaG93TW9kYWw9e3Bvc3RNb2RhbH1cclxuICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFBvc3RNb2RhbCgwKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8UG9zdGluZ1Bvc3RcclxuICAgICAgICAgICAgICBsb2FkaW5nPXtzdG9yYWdlLnBvc3RpbmdMb2FkaW5nfVxyXG4gICAgICAgICAgICAgIG9uUG9zdGluZz17Y3JlYXRlUG9zdH1cclxuICAgICAgICAgICAgICBtb2RhbFBvcHVwPXttb2RhbFBvcHVwfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L01vZGFsV3JhcHBlcj5cclxuICAgICAgICA8TW9kYWxXcmFwcGVyXHJcbiAgICAgICAgICB0aXRsZT1cIkVkaXQgUHJvZmlsZVwiXHJcbiAgICAgICAgICBzaG93TW9kYWw9e2VkaXRQcm9maWxlTW9kYWx9XHJcbiAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRFZGl0UHJvZmlsZU1vZGFsKDApfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxFZGl0UHJvZmlsZSBvblVwZGF0ZT17b25VcGRhdGV9IGxvYWRpbmc9e3N0b3JhZ2UucG9zdGluZ0xvYWRpbmd9Lz5cclxuICAgICAgICA8L01vZGFsV3JhcHBlcj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVxdWlyZUF1dGgoUHJvZmlsZSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=