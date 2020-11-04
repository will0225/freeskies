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
                method: 'put',
                url: '/accounts',
                data: dataForRequest,
                headers: {
                  'x-token': auth.token
                }
              });

            case 4:
              request = _context7.sent;
              data = request.data, status = request.status;
              console.log(data, status);

              if (status === 201) {
                getAccount();
              } else {
                antd__WEBPACK_IMPORTED_MODULE_7__["message"].error((data === null || data === void 0 ? void 0 : data.message) || 'Something wrong');
              }

              dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["setLoading"])(false));
              _context7.next = 11;
              return request;

            case 11:
              return _context7.abrupt("return", _context7.sent);

            case 14:
              _context7.prev = 14;
              _context7.t0 = _context7["catch"](0);
              dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["setLoading"])(false));

            case 17:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[0, 14]]);
    }));

    return function onUpdate(_x9) {
      return _ref10.apply(this, arguments);
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
      lineNumber: 395,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.left,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 7
    }
  }, typeof accountData !== 'undefined' ? __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.profile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.avatar_image,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 14
    }
  }, __jsx(_components_common_Avatar__WEBPACK_IMPORTED_MODULE_16__["default"], {
    size: isMobile ? 100 : 140,
    url: profileUrl,
    text: accountData === null || accountData === void 0 ? void 0 : accountData.username,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.user_content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.user_info,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.heade_section,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.left_side,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417,
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
      lineNumber: 418,
      columnNumber: 19
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 21
    }
  }, "".concat(accountData === null || accountData === void 0 ? void 0 : accountData.firstName, " ").concat(accountData === null || accountData === void 0 ? void 0 : accountData.lastName)))), __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.right_side,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.rating,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
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
      lineNumber: 424,
      columnNumber: 21
    }
  }), __jsx("span", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.rating_text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428,
      columnNumber: 21
    }
  }, roundRating))))))) : __jsx("div", {
    className: "border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 461,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "animate-pulse flex space-x-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "rounded-full bg-gray-400 h-12 w-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "flex-1 space-y-4 py-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 464,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "h-4 bg-gray-400 rounded w-3/4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 465,
      columnNumber: 19
    }
  }), __jsx("div", {
    className: "space-y-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 466,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "h-4 bg-gray-400 rounded",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "h-4 bg-gray-400 rounded w-5/6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 468,
      columnNumber: 21
    }
  }))))), __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.profile_content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 474,
      columnNumber: 9
    }
  }, __jsx("ul", {
    className: "flex border-b",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 475,
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
      lineNumber: 476,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477,
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
      lineNumber: 479,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480,
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
      lineNumber: 482,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 483,
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
      lineNumber: 485,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 486,
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
      lineNumber: 488,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 489,
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
      lineNumber: 491,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 492,
      columnNumber: 15
    }
  }, "FRIENDS"))), tab == 1 ? __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.activity,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.createPostDiv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497,
      columnNumber: 13
    }
  }, __jsx(_components_common_Avatar__WEBPACK_IMPORTED_MODULE_16__["default"], {
    size: 50,
    url: profileUrl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498,
      columnNumber: 15
    }
  }), __jsx("input", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.createPostInput,
    placeholder: "What's on your mind?",
    onClick: modalPopup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502,
      columnNumber: 15
    }
  })), __jsx(components_profile_FeedPosts__WEBPACK_IMPORTED_MODULE_10__["default"], {
    user: accountData,
    onRatePost: ratePost,
    onUpdateTimeline: getAccount,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507,
      columnNumber: 13
    }
  })) : null, tab == 5 ? __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.friends_list, _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.sections_content),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 514,
      columnNumber: 11
    }
  }, accountData === null || accountData === void 0 ? void 0 : accountData.friends.map(function (item, index) {
    return __jsx("div", {
      className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.friend,
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 522,
        columnNumber: 17
      }
    }, __jsx(_components_common_Avatar__WEBPACK_IMPORTED_MODULE_16__["default"], {
      size: 80,
      url: item === null || item === void 0 ? void 0 : item.profilePhoto,
      text: item === null || item === void 0 ? void 0 : item.username,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 523,
        columnNumber: 19
      }
    }), __jsx("div", {
      className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.friend_name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 528,
        columnNumber: 19
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 529,
        columnNumber: 19
      }
    }, item.firstName, " ", item.lastName)));
  })) : null, tab == 3 ? __jsx(components_profile_PhotoSection__WEBPACK_IMPORTED_MODULE_9__["default"], {
    user: accountData,
    onRatePost: ratePost,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537,
      columnNumber: 13
    }
  }) : null, tab == 4 ? __jsx(components_profile_RatedSection__WEBPACK_IMPORTED_MODULE_12__["default"], {
    user: accountData,
    onRatePost: ratePost,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540,
      columnNumber: 13
    }
  }) : null)), __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.right,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 544,
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
      lineNumber: 547,
      columnNumber: 9
    }
  }, __jsx(components_profile_PostingPost__WEBPACK_IMPORTED_MODULE_11__["default"], {
    loading: storage.postingLoading,
    onPosting: createPost,
    modalPopup: modalPopup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 552,
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
      lineNumber: 558,
      columnNumber: 9
    }
  }, __jsx(_edit__WEBPACK_IMPORTED_MODULE_20__["default"], {
    onUpdate: onUpdate,
    loading: storage.postingLoading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 563,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9Qcm9maWxlL1Byb2ZpbGUuanMiXSwibmFtZXMiOlsiUHJvZmlsZSIsImF1dGgiLCJ1c2VTdGF0ZSIsImZpbGVMaXN0Iiwic2V0RmlsZUxpc3QiLCJ1c2VDb250ZXh0IiwiUHJvZmlsZUNvbnRleHQiLCJzdG9yYWdlIiwiZGlzcGF0Y2giLCJ0YWIiLCJzZXRUYWIiLCJwb3N0TW9kYWwiLCJzZXRQb3N0TW9kYWwiLCJlZGl0UHJvZmlsZU1vZGFsIiwic2V0RWRpdFByb2ZpbGVNb2RhbCIsImdldEZyaWVuZHMiLCJ0b2tlbiIsIndpdGhvdXRMb2FkaW5nIiwic2V0TG9hZGluZyIsIkFQSSIsIm1ldGhvZCIsInVybCIsImhlYWRlcnMiLCJyZXF1ZXN0IiwiZGF0YSIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJzZXRGcmllbmRzRGF0YSIsImF1dGhTZXJ2aWNlcyIsInJlZnJlc2hUb2tlbiIsIm1lc3NhZ2UiLCJlcnJvciIsImdldEFjY291bnQiLCJzZXRBY2NvdW50c0RhdGEiLCJjcmVhdGVQb3N0IiwiZGF0YUZvclJlcXVlc3QiLCJyYXRlUG9zdCIsInR5cGUiLCJwb3N0SWQiLCJyYXRlIiwicmF0ZWQiLCJyYXRpbmciLCJ3YXJuIiwic3VjY2VzcyIsInVzZUVmZmVjdCIsImFjY291bnREYXRhIiwiaXNNb2JpbGUiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImltYWdlVXBsb2FkUGFyYW1zIiwib25SZW1vdmUiLCJmaWxlIiwiaW5kZXgiLCJpbmRleE9mIiwibmV3RmlsZUxpc3QiLCJzbGljZSIsInJlc3VsdCIsInNwbGljZSIsImJlZm9yZVVwbG9hZCIsImhhbmRsZVVwbG9hZENvdmVyIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImZvckVhY2giLCJhcHBlbmQiLCJvcmlnaW5GaWxlT2JqIiwiaGFuZGxlVXBsb2FkQXZhdGFyIiwiY292ZXJVcmwiLCJ1bmRlZmluZWQiLCJwcm9maWxlQmFja2dyb3VuZEltYWdlIiwic3JjIiwicHJvZmlsZVVybCIsInByb2ZpbGVQaG90byIsInJvdW5kUmF0aW5nIiwiTWF0aCIsInJvdW5kIiwibW9kYWxQb3B1cCIsIm9uVXBkYXRlIiwic3R5bGVzIiwiY29udGFpbmVyIiwibGVmdCIsInByb2ZpbGUiLCJhdmF0YXIiLCJhdmF0YXJfaW1hZ2UiLCJ1c2VybmFtZSIsInVzZXJfY29udGVudCIsInVzZXJfaW5mbyIsImhlYWRlX3NlY3Rpb24iLCJsZWZ0X3NpZGUiLCJmdWxsbmFtZSIsImN1cnNvciIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwicmlnaHRfc2lkZSIsImNvbG9yIiwiZm9udFNpemUiLCJyYXRpbmdfdGV4dCIsInByb2ZpbGVfY29udGVudCIsImNsYXNzbmFtZXMiLCJib3JkZXJCb3R0b20iLCJhY3Rpdml0eSIsImNyZWF0ZVBvc3REaXYiLCJjcmVhdGVQb3N0SW5wdXQiLCJmcmllbmRzX2xpc3QiLCJzZWN0aW9uc19jb250ZW50IiwiZnJpZW5kcyIsIm1hcCIsIml0ZW0iLCJmcmllbmQiLCJmcmllbmRfbmFtZSIsInJpZ2h0IiwicG9zdGluZ0xvYWRpbmciLCJyZXF1aXJlQXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE9BQVQsT0FBMkI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFROztBQUFBLGtCQUNRQyxzREFBUSxDQUFDLEVBQUQsQ0FEaEI7QUFBQSxNQUNsQkMsUUFEa0I7QUFBQSxNQUNSQyxXQURROztBQUFBLG9CQUVHQyx3REFBVSxDQUFDQyx1RUFBRCxDQUZiO0FBQUEsTUFFbEJDLE9BRmtCO0FBQUEsTUFFVEMsUUFGUzs7QUFBQSxtQkFHSE4sc0RBQVEsQ0FBQyxDQUFELENBSEw7QUFBQSxNQUdsQk8sR0FIa0I7QUFBQSxNQUdiQyxNQUhhOztBQUFBLG1CQUlTUixzREFBUSxDQUFDLEtBQUQsQ0FKakI7QUFBQSxNQUlsQlMsU0FKa0I7QUFBQSxNQUlQQyxZQUpPOztBQUFBLG1CQUt1QlYsc0RBQVEsQ0FBQyxLQUFELENBTC9CO0FBQUEsTUFLbEJXLGdCQUxrQjtBQUFBLE1BS0FDLG1CQUxBLGtCQU96Qjs7O0FBRUEsTUFBTUMsVUFBVTtBQUFBLGlNQUFHLGlCQUFPQyxLQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWNDLDRCQUFkLDJEQUErQixLQUEvQjtBQUFBO0FBR2Ysa0JBQUksQ0FBQ0EsY0FBTCxFQUFxQlQsUUFBUSxDQUFDVSw0REFBVSxDQUFDLElBQUQsQ0FBWCxDQUFSO0FBSE47QUFBQSxxQkFJT0MsNERBQUcsQ0FBQztBQUN4QkMsc0JBQU0sRUFBRSxNQURnQjtBQUV4QkMsbUJBQUcsRUFBRSxvQkFGbUI7QUFHeEJDLHVCQUFPLEVBQUU7QUFBRSw2QkFBV3JCLElBQUksQ0FBQ2U7QUFBbEI7QUFIZSxlQUFELENBSlY7O0FBQUE7QUFJVE8scUJBSlM7QUFTUEMsa0JBVE8sR0FTVUQsT0FUVixDQVNQQyxJQVRPLEVBU0RDLE1BVEMsR0FTVUYsT0FUVixDQVNERSxNQVRDO0FBVWZDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWixFQUFnQ0gsSUFBaEMsRUFBc0Msb0JBQXRDLEVBQTREQyxNQUE1RDs7QUFDQSxrQkFBSUEsTUFBTSxLQUFLLEdBQWYsRUFBb0I7QUFDbEJqQix3QkFBUSxDQUFDb0IsZ0VBQWMsQ0FBQ0osSUFBRCxDQUFmLENBQVI7QUFDQUUsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7QUFDRCxlQUhELE1BR08sSUFBSUYsTUFBTSxLQUFLLEdBQWYsRUFBb0I7QUFDekJDLHVCQUFPLENBQUNDLEdBQVIsQ0FBWSxtQ0FBWjtBQUVBRSw0QkFBWSxDQUFDQyxZQUFiLENBQTBCZixVQUExQjtBQUNELGVBSk0sTUFJQTtBQUNMZ0IsNERBQU8sQ0FBQ0MsS0FBUixDQUFjLENBQUFSLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFTyxPQUFOLEtBQWlCLGlCQUEvQjtBQUNEOztBQUVELGtCQUFJLENBQUNkLGNBQUwsRUFBcUJULFFBQVEsQ0FBQ1UsNERBQVUsQ0FBQyxLQUFELENBQVgsQ0FBUjtBQXRCTjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQXdCZlEscUJBQU8sQ0FBQ0MsR0FBUjtBQUNBLGtCQUFJLENBQUNWLGNBQUwsRUFBcUJULFFBQVEsQ0FBQ1UsNERBQVUsQ0FBQyxLQUFELENBQVgsQ0FBUjs7QUF6Qk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBVkgsVUFBVTtBQUFBO0FBQUE7QUFBQSxLQUFoQjs7QUE2QkEsTUFBTWtCLFVBQVU7QUFBQSxpTUFBRyxrQkFBT2pCLEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBY0MsNEJBQWQsOERBQStCLEtBQS9CO0FBQUE7QUFFZixrQkFBSSxDQUFDQSxjQUFMLEVBQXFCVCxRQUFRLENBQUNVLDREQUFVLENBQUMsSUFBRCxDQUFYLENBQVI7QUFGTjtBQUFBLHFCQUdPQyw0REFBRyxDQUFDO0FBQ3hCQyxzQkFBTSxFQUFFLEtBRGdCO0FBRXhCQyxtQkFBRyxFQUFFLFdBRm1CO0FBR3hCQyx1QkFBTyxFQUFFO0FBQUUsNkJBQVdyQixJQUFJLENBQUNlO0FBQWxCO0FBSGUsZUFBRCxDQUhWOztBQUFBO0FBR1RPLHFCQUhTO0FBUVBDLGtCQVJPLEdBUVVELE9BUlYsQ0FRUEMsSUFSTyxFQVFEQyxNQVJDLEdBUVVGLE9BUlYsQ0FRREUsTUFSQztBQVNmQyxxQkFBTyxDQUFDQyxHQUFSLENBQVksa0JBQVosRUFBZ0NILElBQWhDLEVBQXNDLG9CQUF0QyxFQUE0REMsTUFBNUQ7O0FBQ0Esa0JBQUlBLE1BQU0sS0FBSyxHQUFmLEVBQW9CO0FBQ2xCakIsd0JBQVEsQ0FBQzBCLGlFQUFlLENBQUNWLElBQUQsQ0FBaEIsQ0FBUjtBQUNBRSx1QkFBTyxDQUFDQyxHQUFSLENBQVksV0FBWjtBQUNELGVBSEQsTUFHTyxJQUFJRixNQUFNLEtBQUssR0FBZixFQUFvQjtBQUN6QkMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZLG1DQUFaO0FBRUFFLDRCQUFZLENBQUNDLFlBQWIsQ0FBMEJmLFVBQTFCO0FBQ0QsZUFKTSxNQUlBO0FBQ0xnQiw0REFBTyxDQUFDQyxLQUFSLENBQWMsQ0FBQVIsSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSixZQUFBQSxJQUFJLENBQUVPLE9BQU4sS0FBaUIsaUJBQS9CO0FBQ0Q7O0FBRUQsa0JBQUksQ0FBQ2QsY0FBTCxFQUFxQlQsUUFBUSxDQUFDVSw0REFBVSxDQUFDLEtBQUQsQ0FBWCxDQUFSO0FBckJOO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBdUJmUSxxQkFBTyxDQUFDQyxHQUFSO0FBQ0Esa0JBQUksQ0FBQ1YsY0FBTCxFQUFxQlQsUUFBUSxDQUFDVSw0REFBVSxDQUFDLEtBQUQsQ0FBWCxDQUFSOztBQXhCTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFWZSxVQUFVO0FBQUE7QUFBQTtBQUFBLEtBQWhCOztBQTRCQSxNQUFNRSxVQUFVO0FBQUEsaU1BQUcsa0JBQU9DLGNBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFZjVCLHNCQUFRLENBQUNVLDREQUFVLENBQUMsSUFBRCxFQUFPLFNBQVAsQ0FBWCxDQUFSO0FBRmU7QUFBQSxxQkFJT0MsNERBQUcsQ0FBQztBQUN4QkMsc0JBQU0sRUFBRSxNQURnQjtBQUV4QkMsbUJBQUcsRUFBRSxRQUZtQjtBQUd4Qkcsb0JBQUksRUFBRVksY0FIa0I7QUFJeEJkLHVCQUFPLEVBQUU7QUFBRSw2QkFBV3JCLElBQUksQ0FBQ2U7QUFBbEI7QUFKZSxlQUFELENBSlY7O0FBQUE7QUFJVE8scUJBSlM7QUFVUEMsa0JBVk8sR0FVVUQsT0FWVixDQVVQQyxJQVZPLEVBVURDLE1BVkMsR0FVVUYsT0FWVixDQVVERSxNQVZDO0FBWWZDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUgsSUFBWixFQUFrQkMsTUFBbEI7O0FBRUEsa0JBQUlBLE1BQU0sS0FBSyxHQUFmLEVBQW9CO0FBQ2xCUSwwQkFBVTtBQUNYLGVBRkQsTUFFTztBQUNMRiw0REFBTyxDQUFDQyxLQUFSLENBQWMsQ0FBQVIsSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSixZQUFBQSxJQUFJLENBQUVPLE9BQU4sS0FBaUIsaUJBQS9CO0FBQ0Q7O0FBRUR2QixzQkFBUSxDQUFDVSw0REFBVSxDQUFDLEtBQUQsRUFBUSxTQUFSLENBQVgsQ0FBUjtBQXBCZTtBQUFBLHFCQXNCRkssT0F0QkU7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUF3QmZmLHNCQUFRLENBQUNVLDREQUFVLENBQUMsS0FBRCxFQUFRLFNBQVIsQ0FBWCxDQUFSOztBQXhCZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFWaUIsVUFBVTtBQUFBO0FBQUE7QUFBQSxLQUFoQjs7QUE0QkEsTUFBTUUsUUFBUTtBQUFBLGlNQUFHLGtCQUFPQyxJQUFQLEVBQWFDLE1BQWIsRUFBcUJDLElBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQmQscUJBQU8sQ0FBQ0MsR0FBUixDQUFZVyxJQUFaLEVBQWtCQyxNQUFsQixFQUEwQkMsSUFBMUI7QUFBL0I7QUFFYmhDLHNCQUFRLENBQUNVLDREQUFVLENBQUMsSUFBRCxFQUFPLFNBQVAsQ0FBWCxDQUFSO0FBQ0lHLGlCQUhTLEdBR0gsRUFIRzs7QUFLYixrQkFBSWlCLElBQUksS0FBSyxPQUFiLEVBQXNCO0FBQ3BCakIsbUJBQUcsR0FBRyxjQUFOO0FBQ0QsZUFGRCxNQUVPLElBQUlpQixJQUFJLEtBQUssV0FBYixFQUEwQjtBQUMvQmpCLG1CQUFHLEdBQUcsbUJBQU47QUFDRCxlQUZNLE1BRUEsSUFBSWlCLElBQUksS0FBSyxNQUFiLEVBQXFCO0FBQzFCakIsbUJBQUcsR0FBRyxhQUFOO0FBQ0QsZUFGTSxNQUVBLElBQUlpQixJQUFJLEtBQUssTUFBYixFQUFxQjtBQUMxQmpCLG1CQUFHLEdBQUcsYUFBTjtBQUNELGVBRk0sTUFFQSxJQUFJaUIsSUFBSSxLQUFLLFNBQWIsRUFBd0I7QUFDN0JqQixtQkFBRyxHQUFHLGdCQUFOO0FBQ0Q7O0FBZlk7QUFBQSxxQkFpQlNGLDREQUFHLENBQUM7QUFDeEJDLHNCQUFNLEVBQUUsTUFEZ0I7QUFFeEJDLG1CQUFHLEVBQUhBLEdBRndCO0FBR3hCRyxvQkFBSSxFQUFFO0FBQ0ppQix1QkFBSyxFQUFFRixNQURIO0FBRUpHLHdCQUFNLEVBQUVGO0FBRkosaUJBSGtCO0FBT3hCbEIsdUJBQU8sRUFBRTtBQUFFLDZCQUFXckIsSUFBSSxDQUFDZTtBQUFsQjtBQVBlLGVBQUQsQ0FqQlo7O0FBQUE7QUFpQlBPLHFCQWpCTztBQTBCTEMsa0JBMUJLLEdBMEJZRCxPQTFCWixDQTBCTEMsSUExQkssRUEwQkNDLE1BMUJELEdBMEJZRixPQTFCWixDQTBCQ0UsTUExQkQ7QUE0QmJDLHFCQUFPLENBQUNpQixJQUFSLENBQWEsVUFBYixFQUF5Qm5CLElBQXpCLEVBQStCQyxNQUEvQjs7QUFFQSxrQkFBSUEsTUFBTSxLQUFLLEdBQWYsRUFBb0I7QUFDbEJRLDBCQUFVO0FBQ1ZGLDREQUFPLENBQUNhLE9BQVIsQ0FBZ0IsdUJBQWhCO0FBQ0QsZUFIRCxNQUdPO0FBQ0xiLDREQUFPLENBQUNDLEtBQVIsQ0FBYyxDQUFBUixJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLFlBQUFBLElBQUksQ0FBRU8sT0FBTixLQUFpQixpQkFBL0I7QUFDRDs7QUFFRHZCLHNCQUFRLENBQUNVLDREQUFVLENBQUMsS0FBRCxFQUFRLFNBQVIsQ0FBWCxDQUFSO0FBckNhO0FBQUEscUJBdUNBSyxPQXZDQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQXlDYmYsc0JBQVEsQ0FBQ1UsNERBQVUsQ0FBQyxLQUFELEVBQVEsU0FBUixDQUFYLENBQVI7O0FBekNhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVJtQixRQUFRO0FBQUE7QUFBQTtBQUFBLEtBQWQ7O0FBNkNBUSx5REFBUyxDQUFDLFlBQU07QUFDZDlCLGNBQVUsQ0FBQ2QsSUFBSSxDQUFDZSxLQUFOLENBQVY7QUFDQWlCLGNBQVUsQ0FBQ2hDLElBQUksQ0FBQ2UsS0FBTixDQUFWO0FBQ0QsR0FIUSxFQUdOLEVBSE0sQ0FBVDtBQTNJeUIsTUFnSmpCOEIsV0FoSmlCLEdBZ0pEdkMsT0FoSkMsQ0FnSmpCdUMsV0FoSmlCO0FBa0p6QixNQUFNQyxRQUFRLEdBQUdDLE1BQU0sQ0FBQ0MsVUFBUCxDQUFrQixvQ0FBbEIsRUFBd0RDLE9BQXpFO0FBRUEsTUFBTUMsaUJBQWlCLEdBQUc7QUFDeEJDLFlBQVEsRUFBRSxrQkFBQUMsSUFBSSxFQUFJO0FBQ2hCLFVBQU1DLEtBQUssR0FBR25ELFFBQVEsQ0FBQ29ELE9BQVQsQ0FBaUJGLElBQWpCLENBQWQ7QUFDQSxVQUFNRyxXQUFXLEdBQUdyRCxRQUFRLENBQUNzRCxLQUFULEVBQXBCO0FBQ0EsVUFBTUMsTUFBTSxHQUFHRixXQUFXLENBQUNHLE1BQVosQ0FBbUJMLEtBQW5CLEVBQTBCLENBQTFCLENBQWY7QUFDQWxELGlCQUFXLENBQUNzRCxNQUFELENBQVg7QUFDRCxLQU51QjtBQU94QkUsZ0JBQVksRUFBRSxzQkFBQVAsSUFBSSxFQUFJO0FBQ3BCakQsaUJBQVcsd0dBQUtELFFBQUwsSUFBZWtELElBQWYsR0FBWDtBQUNBLGFBQU8sS0FBUDtBQUNELEtBVnVCO0FBV3hCbEQsWUFBUSxFQUFSQTtBQVh3QixHQUExQjs7QUFjQSxNQUFNMEQsaUJBQWlCO0FBQUEsaU1BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVMxRCxzQkFBVCxTQUFTQSxRQUFUO0FBQ2xCMkQsc0JBRGtCLEdBQ1AsSUFBSUMsUUFBSixFQURPO0FBRXhCNUQsc0JBQVEsQ0FBQzZELE9BQVQsQ0FBaUIsVUFBQVgsSUFBSSxFQUFJO0FBQ3ZCUyx3QkFBUSxDQUFDRyxNQUFULENBQWdCLHdCQUFoQixFQUEwQ1osSUFBSSxDQUFDYSxhQUEvQztBQUNELGVBRkQ7QUFGd0I7QUFBQSxxQkFNRi9DLDREQUFHLENBQUM7QUFDeEJDLHNCQUFNLEVBQUUsS0FEZ0I7QUFFeEJDLG1CQUFHLEVBQUUsV0FGbUI7QUFHeEJHLG9CQUFJLEVBQUVzQyxRQUhrQjtBQUl4QnhDLHVCQUFPLEVBQUU7QUFBRSw2QkFBV3JCLElBQUksQ0FBQ2U7QUFBbEI7QUFKZSxlQUFELENBTkQ7O0FBQUE7QUFNbEJPLHFCQU5rQjtBQVloQkMsa0JBWmdCLEdBWUNELE9BWkQsQ0FZaEJDLElBWmdCLEVBWVZDLE1BWlUsR0FZQ0YsT0FaRCxDQVlWRSxNQVpVO0FBY3hCQyxxQkFBTyxDQUFDQyxHQUFSLENBQVl4QixRQUFaLEVBQXNCcUIsSUFBdEIsRUFBNEJDLE1BQTVCO0FBRUFRLHdCQUFVLENBQUNoQyxJQUFJLENBQUNlLEtBQU4sQ0FBVjs7QUFoQndCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWpCNkMsaUJBQWlCO0FBQUE7QUFBQTtBQUFBLEtBQXZCOztBQW1CQSxNQUFNTSxrQkFBa0I7QUFBQSxpTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBU2hFLHNCQUFULFNBQVNBLFFBQVQ7QUFDbkIyRCxzQkFEbUIsR0FDUixJQUFJQyxRQUFKLEVBRFE7QUFFekI1RCxzQkFBUSxDQUFDNkQsT0FBVCxDQUFpQixVQUFBWCxJQUFJLEVBQUk7QUFDdkJTLHdCQUFRLENBQUNHLE1BQVQsQ0FBZ0IsY0FBaEIsRUFBZ0NaLElBQUksQ0FBQ2EsYUFBckM7QUFDRCxlQUZEO0FBRnlCO0FBQUEscUJBTUgvQyw0REFBRyxDQUFDO0FBQ3hCQyxzQkFBTSxFQUFFLEtBRGdCO0FBRXhCQyxtQkFBRyxFQUFFLFdBRm1CO0FBR3hCRyxvQkFBSSxFQUFFc0MsUUFIa0I7QUFJeEJ4Qyx1QkFBTyxFQUFFO0FBQUUsNkJBQVdyQixJQUFJLENBQUNlO0FBQWxCO0FBSmUsZUFBRCxDQU5BOztBQUFBO0FBTW5CTyxxQkFObUI7QUFZakJDLGtCQVppQixHQVlBRCxPQVpBLENBWWpCQyxJQVppQixFQVlYQyxNQVpXLEdBWUFGLE9BWkEsQ0FZWEUsTUFaVztBQWN6QkMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZeEIsUUFBWixFQUFzQnFCLElBQXRCLEVBQTRCQyxNQUE1QjtBQUVBUSx3QkFBVSxDQUFDaEMsSUFBSSxDQUFDZSxLQUFOLENBQVY7O0FBaEJ5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFsQm1ELGtCQUFrQjtBQUFBO0FBQUE7QUFBQSxLQUF4Qjs7QUFtQkEsTUFBTUMsUUFBUSxHQUFHdEIsV0FBVyxLQUFLLElBQWhCLElBQXdCQSxXQUFXLEtBQUt1QixTQUF4QywyRUFBNEZ2QixXQUFXLENBQUN3QixzQkFBeEcsMERBQTRGLHNCQUFvQ0MsR0FBaEksU0FBeUksSUFBMUo7QUFDQSxNQUFNQyxVQUFVLEdBQUcxQixXQUFXLEtBQUssSUFBaEIsSUFBd0JBLFdBQVcsS0FBS3VCLFNBQXhDLHNDQUF1RHZCLFdBQVcsQ0FBQzJCLFlBQW5FLDBEQUF1RCxzQkFBMEJGLEdBQWpGLElBQXlGLElBQTVHO0FBQ0EsTUFBTUcsV0FBVyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBVyxDQUFBOUIsV0FBVyxTQUFYLElBQUFBLFdBQVcsV0FBWCxZQUFBQSxXQUFXLENBQUVKLE1BQWIsS0FBdUIsQ0FBbEMsQ0FBcEI7O0FBRUEsTUFBTW1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkJqRSxnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNELEdBRkQ7O0FBSUEsTUFBTWtFLFFBQVE7QUFBQSxrTUFBRyxrQkFBTzFDLGNBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFYjVCLHNCQUFRLENBQUNVLDREQUFVLENBQUMsSUFBRCxDQUFYLENBQVI7QUFGYTtBQUFBLHFCQUlTQyw0REFBRyxDQUFDO0FBQ3hCQyxzQkFBTSxFQUFFLEtBRGdCO0FBRXhCQyxtQkFBRyxFQUFFLFdBRm1CO0FBR3hCRyxvQkFBSSxFQUFFWSxjQUhrQjtBQUl4QmQsdUJBQU8sRUFBRTtBQUFFLDZCQUFXckIsSUFBSSxDQUFDZTtBQUFsQjtBQUplLGVBQUQsQ0FKWjs7QUFBQTtBQUlQTyxxQkFKTztBQVVMQyxrQkFWSyxHQVVZRCxPQVZaLENBVUxDLElBVkssRUFVQ0MsTUFWRCxHQVVZRixPQVZaLENBVUNFLE1BVkQ7QUFZYkMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZSCxJQUFaLEVBQWtCQyxNQUFsQjs7QUFFQSxrQkFBSUEsTUFBTSxLQUFLLEdBQWYsRUFBb0I7QUFDbEJRLDBCQUFVO0FBQ1gsZUFGRCxNQUVPO0FBQ0xGLDREQUFPLENBQUNDLEtBQVIsQ0FBYyxDQUFBUixJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLFlBQUFBLElBQUksQ0FBRU8sT0FBTixLQUFpQixpQkFBL0I7QUFDRDs7QUFFRHZCLHNCQUFRLENBQUNVLDREQUFVLENBQUMsS0FBRCxDQUFYLENBQVI7QUFwQmE7QUFBQSxxQkFzQkFLLE9BdEJBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBd0JiZixzQkFBUSxDQUFDVSw0REFBVSxDQUFDLEtBQUQsQ0FBWCxDQUFSOztBQXhCYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFSNEQsUUFBUTtBQUFBO0FBQUE7QUFBQSxLQUFkLENBaE55QixDQTRPekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsU0FDRTtBQUFLLGFBQVMsRUFBRUMsa0VBQU0sQ0FBQ0MsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFRCxrRUFBTSxDQUFDRSxJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0csT0FBT25DLFdBQVAsS0FBdUIsV0FBdkIsR0FDRDtBQUFLLGFBQVMsRUFBRWlDLGtFQUFNLENBQUNHLE9BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUgsa0VBQU0sQ0FBQ0ksTUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHO0FBQUssYUFBUyxFQUFFSixrRUFBTSxDQUFDSyxZQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxrRUFBRDtBQUNJLFFBQUksRUFBRXJDLFFBQVEsR0FBRyxHQUFILEdBQVMsR0FEM0I7QUFFSSxPQUFHLEVBQUV5QixVQUZUO0FBR0ksUUFBSSxFQUFFMUIsV0FBRixhQUFFQSxXQUFGLHVCQUFFQSxXQUFXLENBQUV1QyxRQUh2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsQ0FESCxDQURGLEVBZ0JFO0FBQUssYUFBUyxFQUFFTixrRUFBTSxDQUFDTyxZQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVQLGtFQUFNLENBQUNRLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRVIsa0VBQU0sQ0FBQ1MsYUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFVCxrRUFBTSxDQUFDVSxTQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUVWLGtFQUFNLENBQUNXLFFBQXJCO0FBQStCLFNBQUssRUFBRTtBQUFFQyxZQUFNLEVBQUU7QUFBVixLQUF0QztBQUE2RCxXQUFPLEVBQUU7QUFBQSxhQUFNN0UsbUJBQW1CLENBQUMsSUFBRCxDQUF6QjtBQUFBLEtBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVVnQyxXQUFWLGFBQVVBLFdBQVYsdUJBQVVBLFdBQVcsQ0FBRThDLFNBQXZCLGNBQW9DOUMsV0FBcEMsYUFBb0NBLFdBQXBDLHVCQUFvQ0EsV0FBVyxDQUFFK0MsUUFBakQsRUFERixDQURGLENBREYsRUFNRTtBQUFLLGFBQVMsRUFBRWQsa0VBQU0sQ0FBQ2UsVUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFFZixrRUFBTSxDQUFDckMsTUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseUNBQUQ7QUFDRSxnQkFBWSxFQUFFZ0MsV0FEaEI7QUFFRSxTQUFLLEVBQUU7QUFBRXFCLFdBQUssRUFBRSxTQUFUO0FBQW9CQyxjQUFRLEVBQUU7QUFBOUIsS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFLRTtBQUFNLGFBQVMsRUFBRWpCLGtFQUFNLENBQUNrQixXQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0d2QixXQURILENBTEYsQ0FERixDQU5GLENBREYsQ0FERixDQWhCRixDQURDLEdBZ0VEO0FBQUssYUFBUyxFQUFDLHNFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyw4QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsb0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUk7QUFBSyxhQUFTLEVBQUMsdUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLCtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUssYUFBUyxFQUFDLCtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQUZGLENBRkosQ0FESixDQWpFRixFQThFRTtBQUFLLGFBQVMsRUFBRUssa0VBQU0sQ0FBQ21CLGVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxlQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBRUMsaURBQVUsQ0FBQyxNQUFELEVBQVNwQixrRUFBTSxDQUFDdEUsR0FBaEIsQ0FBekI7QUFBK0MsV0FBTyxFQUFFO0FBQUEsYUFBTUMsTUFBTSxDQUFDLENBQUQsQ0FBWjtBQUFBLEtBQXhEO0FBQXlFLFNBQUssRUFBRTtBQUFFMEYsa0JBQVksRUFBQzNGLEdBQUcsSUFBRSxDQUFMLEdBQU8saUJBQVAsR0FBeUI7QUFBeEMsS0FBaEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLHdFQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsQ0FERixFQUlFO0FBQUksYUFBUyxFQUFFMEYsaURBQVUsQ0FBQyxNQUFELEVBQVNwQixrRUFBTSxDQUFDdEUsR0FBaEIsQ0FBekI7QUFBK0MsV0FBTyxFQUFFO0FBQUEsYUFBTUMsTUFBTSxDQUFDLENBQUQsQ0FBWjtBQUFBLEtBQXhEO0FBQXlFLFNBQUssRUFBRTtBQUFFMEYsa0JBQVksRUFBQzNGLEdBQUcsSUFBRSxDQUFMLEdBQU8saUJBQVAsR0FBeUI7QUFBeEMsS0FBaEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLHdFQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixDQUpGLEVBT0U7QUFBSSxhQUFTLEVBQUUwRixpREFBVSxDQUFDLE1BQUQsRUFBU3BCLGtFQUFNLENBQUN0RSxHQUFoQixDQUF6QjtBQUErQyxXQUFPLEVBQUU7QUFBQSxhQUFNQyxNQUFNLENBQUMsQ0FBRCxDQUFaO0FBQUEsS0FBeEQ7QUFBeUUsU0FBSyxFQUFFO0FBQUUwRixrQkFBWSxFQUFDM0YsR0FBRyxJQUFFLENBQUwsR0FBTyxpQkFBUCxHQUF5QjtBQUF4QyxLQUFoRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsd0VBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLENBUEYsRUFVRTtBQUFJLGFBQVMsRUFBRTBGLGlEQUFVLENBQUMsTUFBRCxFQUFTcEIsa0VBQU0sQ0FBQ3RFLEdBQWhCLENBQXpCO0FBQStDLFdBQU8sRUFBRTtBQUFBLGFBQU1DLE1BQU0sQ0FBQyxDQUFELENBQVo7QUFBQSxLQUF4RDtBQUF5RSxTQUFLLEVBQUU7QUFBRTBGLGtCQUFZLEVBQUMzRixHQUFHLElBQUUsQ0FBTCxHQUFPLGlCQUFQLEdBQXlCO0FBQXhDLEtBQWhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyx3RUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsQ0FWRixFQWFFO0FBQUksYUFBUyxFQUFFMEYsaURBQVUsQ0FBQyxNQUFELEVBQVNwQixrRUFBTSxDQUFDdEUsR0FBaEIsQ0FBekI7QUFBK0MsV0FBTyxFQUFFO0FBQUEsYUFBTUMsTUFBTSxDQUFDLENBQUQsQ0FBWjtBQUFBLEtBQXhEO0FBQXlFLFNBQUssRUFBRTtBQUFFMEYsa0JBQVksRUFBQzNGLEdBQUcsSUFBRSxDQUFMLEdBQU8saUJBQVAsR0FBeUI7QUFBeEMsS0FBaEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLHdFQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixDQWJGLEVBZ0JFO0FBQUksYUFBUyxFQUFFMEYsaURBQVUsQ0FBQyxNQUFELEVBQVNwQixrRUFBTSxDQUFDdEUsR0FBaEIsQ0FBekI7QUFBK0MsV0FBTyxFQUFFO0FBQUEsYUFBTUMsTUFBTSxDQUFDLENBQUQsQ0FBWjtBQUFBLEtBQXhEO0FBQXlFLFNBQUssRUFBRTtBQUFFMEYsa0JBQVksRUFBQzNGLEdBQUcsSUFBRSxDQUFMLEdBQU8saUJBQVAsR0FBeUI7QUFBeEMsS0FBaEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLHdFQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixDQWhCRixDQURGLEVBcUJHQSxHQUFHLElBQUUsQ0FBTCxHQUNEO0FBQUssYUFBUyxFQUFFc0Usa0VBQU0sQ0FBQ3NCLFFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRXRCLGtFQUFNLENBQUN1QixhQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrRUFBRDtBQUNJLFFBQUksRUFBRSxFQURWO0FBRUksT0FBRyxFQUFFOUIsVUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFLRTtBQUFPLGFBQVMsRUFBRU8sa0VBQU0sQ0FBQ3dCLGVBQXpCO0FBQTBDLGVBQVcsRUFBQyxzQkFBdEQ7QUFDRSxXQUFPLEVBQUUxQixVQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixDQURGLEVBV0UsTUFBQyxxRUFBRDtBQUNFLFFBQUksRUFBRS9CLFdBRFI7QUFFRSxjQUFVLEVBQUVULFFBRmQ7QUFHRSxvQkFBZ0IsRUFBRUosVUFIcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhGLENBREMsR0FpQk0sSUF0Q1QsRUF1Q0d4QixHQUFHLElBQUUsQ0FBTCxHQUNEO0FBQ0UsYUFBUyxFQUFFMEYsaURBQVUsQ0FDbkJwQixrRUFBTSxDQUFDeUIsWUFEWSxFQUVuQnpCLGtFQUFNLENBQUMwQixnQkFGWSxDQUR2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUczRCxXQU5ILGFBTUdBLFdBTkgsdUJBTUdBLFdBQVcsQ0FBRTRELE9BQWIsQ0FBcUJDLEdBQXJCLENBQXlCLFVBQUNDLElBQUQsRUFBT3RELEtBQVAsRUFBaUI7QUFDekMsV0FDRTtBQUFLLGVBQVMsRUFBRXlCLGtFQUFNLENBQUM4QixNQUF2QjtBQUErQixTQUFHLEVBQUV2RCxLQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxrRUFBRDtBQUNFLFVBQUksRUFBRSxFQURSO0FBRUUsU0FBRyxFQUFFc0QsSUFBRixhQUFFQSxJQUFGLHVCQUFFQSxJQUFJLENBQUVuQyxZQUZiO0FBR0UsVUFBSSxFQUFFbUMsSUFBRixhQUFFQSxJQUFGLHVCQUFFQSxJQUFJLENBQUV2QixRQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQU1FO0FBQUssZUFBUyxFQUFFTixrRUFBTSxDQUFDK0IsV0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBT0YsSUFBSSxDQUFDaEIsU0FBWixPQUF3QmdCLElBQUksQ0FBQ2YsUUFBN0IsQ0FEQSxDQU5GLENBREY7QUFZRCxHQWJBLENBTkgsQ0FEQyxHQXFCTSxJQTVEVCxFQThER3BGLEdBQUcsSUFBRSxDQUFMLEdBQ0MsTUFBQyx1RUFBRDtBQUFjLFFBQUksRUFBRXFDLFdBQXBCO0FBQWlDLGNBQVUsRUFBRVQsUUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEdBQzJELElBL0Q5RCxFQWlFRzVCLEdBQUcsSUFBRSxDQUFMLEdBQ0MsTUFBQyx3RUFBRDtBQUFjLFFBQUksRUFBRXFDLFdBQXBCO0FBQWlDLGNBQVUsRUFBRVQsUUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEdBQzJELElBbEU5RCxDQTlFRixDQURGLEVBcUpFO0FBQUssYUFBUyxFQUFFMEMsa0VBQU0sQ0FBQ2dDLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFySkYsRUF3SkksTUFBQyx3RUFBRDtBQUNFLFNBQUssRUFBQyxhQURSO0FBRUUsYUFBUyxFQUFFcEcsU0FGYjtBQUdFLFdBQU8sRUFBRTtBQUFBLGFBQU1DLFlBQVksQ0FBQyxDQUFELENBQWxCO0FBQUEsS0FIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0UsTUFBQyx1RUFBRDtBQUNJLFdBQU8sRUFBRUwsT0FBTyxDQUFDeUcsY0FEckI7QUFFSSxhQUFTLEVBQUU3RSxVQUZmO0FBR0ksY0FBVSxFQUFFMEMsVUFIaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLENBeEpKLEVBbUtJLE1BQUMsd0VBQUQ7QUFDRSxTQUFLLEVBQUMsY0FEUjtBQUVFLGFBQVMsRUFBRWhFLGdCQUZiO0FBR0UsV0FBTyxFQUFFO0FBQUEsYUFBTUMsbUJBQW1CLENBQUMsQ0FBRCxDQUF6QjtBQUFBLEtBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFLE1BQUMsOENBQUQ7QUFBYSxZQUFRLEVBQUVnRSxRQUF2QjtBQUFpQyxXQUFPLEVBQUV2RSxPQUFPLENBQUN5RyxjQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsQ0FuS0osQ0FERjtBQTZLRDs7R0FuaUJRaEgsTzs7S0FBQUEsTztBQXFpQk0scUVBQUFpSCx3RUFBVyxDQUFDakgsT0FBRCxDQUExQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLjk4Y2ZkYmZjMTgxMzFkODExNmU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL3Byb2ZpbGUubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgQ2FtZXJhT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgVXBsb2FkLCBtZXNzYWdlLCBJbnB1dCwgVGFicywgUmF0ZSB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgQVBJIGZyb20gJy4uLy4uL2NvbmZpZ3MvQVBJJztcclxuaW1wb3J0IFBob3RvU2VjdGlvbiBmcm9tICdjb21wb25lbnRzL3Byb2ZpbGUvUGhvdG9TZWN0aW9uJztcclxuaW1wb3J0IEZlZWRQb3N0cyBmcm9tICdjb21wb25lbnRzL3Byb2ZpbGUvRmVlZFBvc3RzJztcclxuaW1wb3J0IFBvc3RpbmdQb3N0IGZyb20gJ2NvbXBvbmVudHMvcHJvZmlsZS9Qb3N0aW5nUG9zdCc7XHJcbmltcG9ydCBSYXRlZFNlY3Rpb24gZnJvbSAnY29tcG9uZW50cy9wcm9maWxlL1JhdGVkU2VjdGlvbic7XHJcbmltcG9ydCByZXF1aXJlQXV0aCBmcm9tICdoZWxwZXJzL2hvYy9yZXF1aXJlQXV0aCc7XHJcbmltcG9ydCB7IFByb2ZpbGVDb250ZXh0IH0gZnJvbSAnLi9zdG9yYWdlL1Byb2ZpbGVDb250ZXh0JztcclxuaW1wb3J0IHsgc2V0TG9hZGluZywgc2V0RnJpZW5kc0RhdGEsIHNldEFjY291bnRzRGF0YSB9IGZyb20gJy4vYWN0aW9ucyc7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb24vQXZhdGFyJztcclxuaW1wb3J0IFJhdGluZyAgZnJvbSAncmVhY3QtcmF0aW5nJztcclxuaW1wb3J0IE1vZGFsV3JhcHBlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9Nb2RhbFdyYXBwZXInO1xyXG5pbXBvcnQgUG9zdE1vZGFsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcHJvZmlsZS9Qb3N0TW9kYWwnO1xyXG5pbXBvcnQgRWRpdFByb2ZpbGUgZnJvbSAnLi9lZGl0JztcclxuXHJcbmZ1bmN0aW9uIFByb2ZpbGUoeyBhdXRoIH0pIHtcclxuICBjb25zdCBbZmlsZUxpc3QsIHNldEZpbGVMaXN0IF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3N0b3JhZ2UsIGRpc3BhdGNoXSA9IHVzZUNvbnRleHQoUHJvZmlsZUNvbnRleHQpO1xyXG4gIGNvbnN0IFt0YWIsIHNldFRhYl0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbcG9zdE1vZGFsLCBzZXRQb3N0TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtlZGl0UHJvZmlsZU1vZGFsLCBzZXRFZGl0UHJvZmlsZU1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgLy8gY29uc29sZS5sb2coJ3N0b3JhZ2UnLCBzdG9yYWdlLCAnYXV0aCcsIGF1dGgpXHJcblxyXG4gIGNvbnN0IGdldEZyaWVuZHMgPSBhc3luYyAodG9rZW4sIHdpdGhvdXRMb2FkaW5nID0gZmFsc2UpID0+IHtcclxuICAgIC8vIGNvbnNvbGUud2FybihhdXRoU2VydmljZXMuYXV0aCwgYXV0aFNlcnZpY2VzLmxvY2Fsc3RvcmFnZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoIXdpdGhvdXRMb2FkaW5nKSBkaXNwYXRjaChzZXRMb2FkaW5nKHRydWUpKTtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsOiAnL2FjY291bnRzL3RpbWVsaW5lJyxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdnZXRGcmllbmRzX2RhdGE9JywgZGF0YSwgJ2dldEZyaWVuZHNfc3RhdHVzPScsIHN0YXR1cylcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goc2V0RnJpZW5kc0RhdGEoZGF0YSkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCc9PT09PT09PT0nKTtcclxuICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IDQwMykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCc9PT09PT09PT09PT09PT09PSBSZWZyZXNoIHRva2VuICEnKTtcclxuXHJcbiAgICAgICAgYXV0aFNlcnZpY2VzLnJlZnJlc2hUb2tlbihnZXRGcmllbmRzKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIXdpdGhvdXRMb2FkaW5nKSBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIGlmICghd2l0aG91dExvYWRpbmcpIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRBY2NvdW50ID0gYXN5bmMgKHRva2VuLCB3aXRob3V0TG9hZGluZyA9IGZhbHNlKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoIXdpdGhvdXRMb2FkaW5nKSBkaXNwYXRjaChzZXRMb2FkaW5nKHRydWUpKTtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICB1cmw6ICcvYWNjb3VudHMnLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuICAgICAgY29uc29sZS5sb2coJ2dldEFjY291bnRfZGF0YT0nLCBkYXRhLCAnZ2V0QWNjb3VudF9zdGF0dXM9Jywgc3RhdHVzKVxyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBkaXNwYXRjaChzZXRBY2NvdW50c0RhdGEoZGF0YSkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCc9PT09PT09PT0nKTtcclxuICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IDQwMykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCc9PT09PT09PT09PT09PT09PSBSZWZyZXNoIHRva2VuICEnKTtcclxuXHJcbiAgICAgICAgYXV0aFNlcnZpY2VzLnJlZnJlc2hUb2tlbihnZXRGcmllbmRzKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIXdpdGhvdXRMb2FkaW5nKSBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIGlmICghd2l0aG91dExvYWRpbmcpIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGNyZWF0ZVBvc3QgPSBhc3luYyAoZGF0YUZvclJlcXVlc3QpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcodHJ1ZSwgJ3Bvc3RpbmcnKSk7XHJcblxyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6ICcvcG9zdHMnLFxyXG4gICAgICAgIGRhdGE6IGRhdGFGb3JSZXF1ZXN0LFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEsIHN0YXR1cylcclxuXHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgIGdldEFjY291bnQoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlLCAncG9zdGluZycpKTtcclxuXHJcbiAgICAgIHJldHVybiBhd2FpdCByZXF1ZXN0O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSwgJ3Bvc3RpbmcnKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmF0ZVBvc3QgPSBhc3luYyAodHlwZSwgcG9zdElkLCByYXRlKSA9PiB7Y29uc29sZS5sb2codHlwZSwgcG9zdElkLCByYXRlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcodHJ1ZSwgJ3Bvc3RpbmcnKSk7XHJcbiAgICAgIGxldCB1cmwgPSAnJztcclxuXHJcbiAgICAgIGlmICh0eXBlID09PSAnUGhvdG8nKSB7XHJcbiAgICAgICAgdXJsID0gJy9waG90b3MvcmF0ZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1ZpZGVvQ2xpcCcpIHtcclxuICAgICAgICB1cmwgPSAnL3ZpZGVvLWNsaXBzL3JhdGUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdJdGVtJykge1xyXG4gICAgICAgIHVybCA9ICcvaXRlbXMvcmF0ZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1Bvc3QnKSB7XHJcbiAgICAgICAgdXJsID0gJy9wb3N0cy9yYXRlJztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnQ29tbWVudCcpIHtcclxuICAgICAgICB1cmwgPSAnL2NvbW1lbnRzL3JhdGUnO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmwsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgcmF0ZWQ6IHBvc3RJZCxcclxuICAgICAgICAgIHJhdGluZzogcmF0ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuXHJcbiAgICAgIGNvbnNvbGUud2FybigncmF0ZVBvc3QnLCBkYXRhLCBzdGF0dXMpO1xyXG5cclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgZ2V0QWNjb3VudCgpO1xyXG4gICAgICAgIG1lc3NhZ2Uuc3VjY2VzcygnRXZhbHVhdGUgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSwgJ3Bvc3RpbmcnKSk7XHJcblxyXG4gICAgICByZXR1cm4gYXdhaXQgcmVxdWVzdDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UsICdwb3N0aW5nJykpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRGcmllbmRzKGF1dGgudG9rZW4pO1xyXG4gICAgZ2V0QWNjb3VudChhdXRoLnRva2VuKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHsgYWNjb3VudERhdGEgfSA9IHN0b3JhZ2VcclxuXHJcbiAgY29uc3QgaXNNb2JpbGUgPSB3aW5kb3cubWF0Y2hNZWRpYSgnb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KScpLm1hdGNoZXNcclxuXHJcbiAgY29uc3QgaW1hZ2VVcGxvYWRQYXJhbXMgPSB7XHJcbiAgICBvblJlbW92ZTogZmlsZSA9PiB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gZmlsZUxpc3QuaW5kZXhPZihmaWxlKTtcclxuICAgICAgY29uc3QgbmV3RmlsZUxpc3QgPSBmaWxlTGlzdC5zbGljZSgpO1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBuZXdGaWxlTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICBzZXRGaWxlTGlzdChyZXN1bHQpXHJcbiAgICB9LFxyXG4gICAgYmVmb3JlVXBsb2FkOiBmaWxlID0+IHtcclxuICAgICAgc2V0RmlsZUxpc3QoWy4uLmZpbGVMaXN0LCBmaWxlXSlcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSxcclxuICAgIGZpbGVMaXN0LFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVVwbG9hZENvdmVyID0gYXN5bmMgKHsgZmlsZUxpc3QgfSkgPT4ge1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZpbGVMaXN0LmZvckVhY2goZmlsZSA9PiB7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgncHJvZmlsZUJhY2tncm91bmRJbWFnZScsIGZpbGUub3JpZ2luRmlsZU9iaik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgbWV0aG9kOiAncHV0JyxcclxuICAgICAgdXJsOiAnL2FjY291bnRzJyxcclxuICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGZpbGVMaXN0LCBkYXRhLCBzdGF0dXMpXHJcblxyXG4gICAgZ2V0QWNjb3VudChhdXRoLnRva2VuKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVVwbG9hZEF2YXRhciA9IGFzeW5jICh7IGZpbGVMaXN0IH0pID0+IHtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmaWxlTGlzdC5mb3JFYWNoKGZpbGUgPT4ge1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Byb2ZpbGVQaG90bycsIGZpbGUub3JpZ2luRmlsZU9iaik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgbWV0aG9kOiAncHV0JyxcclxuICAgICAgdXJsOiAnL2FjY291bnRzJyxcclxuICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGZpbGVMaXN0LCBkYXRhLCBzdGF0dXMpXHJcblxyXG4gICAgZ2V0QWNjb3VudChhdXRoLnRva2VuKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNvdmVyVXJsID0gYWNjb3VudERhdGEgIT09IG51bGwgJiYgYWNjb3VudERhdGEgIT09IHVuZGVmaW5lZCA/IGB1cmwoaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHthY2NvdW50RGF0YS5wcm9maWxlQmFja2dyb3VuZEltYWdlPy5zcmN9KWAgOiBudWxsXHJcbiAgY29uc3QgcHJvZmlsZVVybCA9IGFjY291bnREYXRhICE9PSBudWxsICYmIGFjY291bnREYXRhICE9PSB1bmRlZmluZWQgPyBgJHthY2NvdW50RGF0YS5wcm9maWxlUGhvdG8/LnNyY31gIDogbnVsbFxyXG4gIGNvbnN0IHJvdW5kUmF0aW5nID0gTWF0aC5yb3VuZChhY2NvdW50RGF0YT8ucmF0aW5nIHx8IDApXHJcbiAgXHJcbiAgY29uc3QgbW9kYWxQb3B1cCA9ICgpID0+IHtcclxuICAgIHNldFBvc3RNb2RhbCh0cnVlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uVXBkYXRlID0gYXN5bmMgKGRhdGFGb3JSZXF1ZXN0KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKHRydWUpKTtcclxuXHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ3B1dCcsXHJcbiAgICAgICAgdXJsOiAnL2FjY291bnRzJyxcclxuICAgICAgICBkYXRhOiBkYXRhRm9yUmVxdWVzdCxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhLCBzdGF0dXMpXHJcblxyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICBnZXRBY2NvdW50KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpO1xyXG5cclxuICAgICAgcmV0dXJuIGF3YWl0IHJlcXVlc3Q7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gcmV0dXJuIChcclxuICAvLyAgIDxkaXY+XHJcbiAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5jb250YWluZXIsIHN0eWxlcy51c2VyX3Byb2ZpbGUpfT5cclxuICAvLyAgICAgICA8ZGl2XHJcbiAgLy8gICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb3Zlcn1cclxuICAvLyAgICAgICAgIHN0eWxlPXtjb3ZlclVybCAhPT0gbnVsbCA/IHsgYmFja2dyb3VuZEltYWdlOiBjb3ZlclVybCB9IDogbnVsbH1cclxuICAvLyAgICAgICA+XHJcbiAgLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYW5nZV9jb3Zlcn0+XHJcbiAgLy8gICAgICAgICAgIDxVcGxvYWQgey4uLmltYWdlVXBsb2FkUGFyYW1zfSBvbkNoYW5nZT17aGFuZGxlVXBsb2FkQ292ZXJ9PlxyXG4gIC8vICAgICAgICAgICAgIDxCdXR0b24gZ2hvc3QgdHlwZT1cImRhc2hlZFwiPlxyXG4gIC8vICAgICAgICAgICAgICAgQ2hhbmdlIGNvdmVyXHJcbiAgLy8gICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgLy8gICAgICAgICAgIDwvVXBsb2FkPlxyXG4gIC8vICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgPC9kaXY+XHJcblxyXG4gIC8vICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZX0+XHJcbiAgLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn0+XHJcbiAgLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyX2ltYWdlfT5cclxuICAvLyAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgLy8gICAgICAgICAgICAgICBzaXplPXtpc01vYmlsZSA/IDEwMCA6IDE0MH1cclxuICAvLyAgICAgICAgICAgICAgIHVybD17cHJvZmlsZVVybH1cclxuICAvLyAgICAgICAgICAgICAgIHRleHQ9e2FjY291bnREYXRhPy51c2VybmFtZX1cclxuICAvLyAgICAgICAgICAgICAvPlxyXG4gIC8vICAgICAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGFuZ2VfYXZhdGFyfT5cclxuICAvLyAgICAgICAgICAgICA8VXBsb2FkIHsuLi5pbWFnZVVwbG9hZFBhcmFtc30gb25DaGFuZ2U9e2hhbmRsZVVwbG9hZEF2YXRhcn0+XHJcbiAgLy8gICAgICAgICAgICAgICA8Q2FtZXJhT3V0bGluZWQgY2xhc3NOYW1lPXtzdHlsZXMuY2hhbmdlX2F2YXRhcl9pbWFnZX0gLz5cclxuICAvLyAgICAgICAgICAgICA8L1VwbG9hZD5cclxuICAvLyAgICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgICA8L2Rpdj5cclxuXHJcbiAgLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfY29udGVudH0+XHJcbiAgLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcl9pbmZvfT5cclxuICAvLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlX3NlY3Rpb259PlxyXG4gIC8vICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0X3NpZGV9PlxyXG4gIC8vICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5mdWxsbmFtZX0+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgPHNwYW4+e2Ake2FjY291bnREYXRhPy5maXJzdE5hbWV9ICR7YWNjb3VudERhdGE/Lmxhc3ROYW1lfWB9PC9zcGFuPlxyXG4gIC8vICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgLy8gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHRfc2lkZX0+XHJcbiAgLy8gICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnJhdGluZ30+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgPFJhdGVcclxuICAvLyAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICBhbGxvd0hhbGZcclxuICBcclxuICAvLyAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cm91bmRSYXRpbmd9XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJyNmYWRiMTQnLCBmb250U2l6ZTogJzFlbScgfX1cclxuICAvLyAgICAgICAgICAgICAgICAgICAvPlxyXG4gIC8vICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnJhdGluZ190ZXh0fT5cclxuICAvLyAgICAgICAgICAgICAgICAgICAgIHtyb3VuZFJhdGluZ31cclxuICAvLyAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgLy8gICAgICAgICAgICAgICAgIDwvcD5cclxuICAvLyAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICAgICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICAgICAgICAgIHsvKiA9PT09ICovfVxyXG4gIC8vICAgICAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3R0b21fc2VjdGlvbn0+XHJcbiAgLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0X3NpZGV9PlxyXG4gIC8vICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyX2FjdGlvbnN9PlxyXG4gIC8vICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvbGxvd19hY3Rpb25zfT5cclxuICAvLyAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5mb2xsb3dlcnN9PlxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAge2FjY291bnREYXRhPy5mb2xsb3dlcnNDb3VudH0gZm9sbG93ZXJzXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gIC8vICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZm9sbG93ZXJzX2Zvcm1vYmlsZX0+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAge2FjY291bnREYXRhPy5mb2xsb3dlcnNDb3VudH0gZm9sbG93ZXJzIC8ge2FjY291bnREYXRhPy5mb2xsb3dpbmdDb3VudH17JyAnfVxyXG4gIC8vICAgICAgICAgICAgICAgICAgIGZvbGxvd2luZ1xyXG4gIC8vICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgLy8gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgICAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0X3NpZGV9PlxyXG4gIC8vICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyX2FjdGlvbnN9PlxyXG4gIC8vICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc2hhcGU9XCJyb3VuZFwiIHNpemU9XCJsYXJnZVwiPlxyXG4gIC8vICAgICAgICAgICAgICAgICAgIEVkaXQgcHJvZmlsZVxyXG4gIC8vICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAvLyAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICAgICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAvLyAgICAgPC9kaXY+XHJcblxyXG4gIC8vICAgICA8ZGl2XHJcbiAgLy8gICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxyXG4gIC8vICAgICAgICAgc3R5bGVzLmNvbnRhaW5lcixcclxuICAvLyAgICAgICAgIHN0eWxlcy5jb250ZW50LFxyXG4gIC8vICAgICAgICAgc3R5bGVzLmNvbnRhaW5lcl9iZ1xyXG4gIC8vICAgICAgICl9XHJcbiAgLy8gICAgID5cclxuICAvLyAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVfY29udGVudHN9PlxyXG4gIC8vICAgICAgICAgPFBob3RvU2VjdGlvbiB1c2VyPXthY2NvdW50RGF0YX0gb25SYXRlUG9zdD17cmF0ZVBvc3R9IC8+XHJcbiAgLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuY29udGFpbmVyX2JnLCBzdHlsZXMuc2VjdGlvbil9PlxyXG4gIC8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb25fdGl0bGV9PlxyXG4gIC8vICAgICAgICAgICAgIDxwPkZyaWVuZHM8L3A+XHJcbiAgLy8gICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwibGlua1wiPkFsbCBmcmllbmRzPC9CdXR0b24+XHJcbiAgLy8gICAgICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICAgICAgICA8ZGl2XHJcbiAgLy8gICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxyXG4gIC8vICAgICAgICAgICAgICAgc3R5bGVzLmZyaWVuZHNfbGlzdCxcclxuICAvLyAgICAgICAgICAgICAgIHN0eWxlcy5zZWN0aW9uc19jb250ZW50XHJcbiAgLy8gICAgICAgICAgICAgKX1cclxuICAvLyAgICAgICAgICAgPlxyXG4gIC8vICAgICAgICAgICAgIHthY2NvdW50RGF0YT8uZnJpZW5kcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgLy8gICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gIC8vICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZyaWVuZH0ga2V5PXtpbmRleH0+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgPEF2YXRhclxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgc2l6ZT17ODB9XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICB1cmw9e2l0ZW0/LnByb2ZpbGVQaG90b31cclxuICAvLyAgICAgICAgICAgICAgICAgICAgIHRleHQ9e2l0ZW0/LnVzZXJuYW1lfVxyXG4gIC8vICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mcmllbmRfbmFtZX0+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0uZmlyc3ROYW1lfSB7aXRlbS5sYXN0TmFtZX08L3NwYW4+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICAgICAgICAgICAgKTtcclxuICAvLyAgICAgICAgICAgICB9KX1cclxuICAvLyAgICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgICAgIDxSYXRlZFNlY3Rpb24gdXNlcj17YWNjb3VudERhdGF9IG9uUmF0ZVBvc3Q9e3JhdGVQb3N0fSAvPlxyXG4gIC8vICAgICAgIDwvZGl2PlxyXG5cclxuICAvLyAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjdGl2aXR5fT5cclxuICAvLyAgICAgICAgIDxQb3N0aW5nUG9zdFxyXG4gIC8vICAgICAgICAgICBsb2FkaW5nPXtzdG9yYWdlLnBvc3RpbmdMb2FkaW5nfVxyXG4gIC8vICAgICAgICAgICBvblBvc3Rpbmc9e2NyZWF0ZVBvc3R9XHJcbiAgLy8gICAgICAgICAvPlxyXG4gIC8vICAgICAgICAgPEZlZWRQb3N0c1xyXG4gIC8vICAgICAgICAgICB1c2VyPXthY2NvdW50RGF0YX1cclxuICAvLyAgICAgICAgICAgb25SYXRlUG9zdD17cmF0ZVBvc3R9XHJcbiAgLy8gICAgICAgICAgIG9uVXBkYXRlVGltZWxpbmU9e2dldEFjY291bnR9XHJcbiAgLy8gICAgICAgICAvPlxyXG4gIC8vICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICA8L2Rpdj5cclxuICAvLyAgIDwvZGl2PlxyXG4gIC8vICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVmdH0+XHJcbiAgICAgICAge3R5cGVvZiBhY2NvdW50RGF0YSAhPT0gJ3VuZGVmaW5lZCc/XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyfT5cclxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyX2ltYWdlfT5cclxuICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgIHNpemU9e2lzTW9iaWxlID8gMTAwIDogMTQwfVxyXG4gICAgICAgICAgICAgICAgICB1cmw9e3Byb2ZpbGVVcmx9XHJcbiAgICAgICAgICAgICAgICAgIHRleHQ9e2FjY291bnREYXRhPy51c2VybmFtZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYW5nZV9hdmF0YXJ9PlxyXG4gICAgICAgICAgICAgIDxVcGxvYWQgey4uLmltYWdlVXBsb2FkUGFyYW1zfSBvbkNoYW5nZT17aGFuZGxlVXBsb2FkQXZhdGFyfT5cclxuICAgICAgICAgICAgICAgIDxDYW1lcmFPdXRsaW5lZCBjbGFzc05hbWU9e3N0eWxlcy5jaGFuZ2VfYXZhdGFyX2ltYWdlfSAvPlxyXG4gICAgICAgICAgICAgIDwvVXBsb2FkPlxyXG4gICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyX2NvbnRlbnR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfaW5mb30+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZV9zZWN0aW9ufT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVmdF9zaWRlfT5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZnVsbG5hbWV9IHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19IG9uQ2xpY2s9eygpID0+IHNldEVkaXRQcm9maWxlTW9kYWwodHJ1ZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntgJHthY2NvdW50RGF0YT8uZmlyc3ROYW1lfSAke2FjY291bnREYXRhPy5sYXN0TmFtZX1gfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0X3NpZGV9PlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5yYXRpbmd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxSYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3JvdW5kUmF0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICcjZmFkYjE0JywgZm9udFNpemU6ICczMHB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucmF0aW5nX3RleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge3JvdW5kUmF0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgey8qID09PT0gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3R0b21fc2VjdGlvbn0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0X3NpZGV9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyX2FjdGlvbnN9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvbGxvd19hY3Rpb25zfT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5mb2xsb3dlcnN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2FjY291bnREYXRhPy5mb2xsb3dlcnNDb3VudH0gZm9sbG93ZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZm9sbG93ZXJzX2Zvcm1vYmlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2FjY291bnREYXRhPy5mb2xsb3dlcnNDb3VudH0gZm9sbG93ZXJzIC8ge2FjY291bnREYXRhPy5mb2xsb3dpbmdDb3VudH17JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvbGxvd2luZ1xyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0X3NpZGV9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyX2FjdGlvbnN9PlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc2hhcGU9XCJyb3VuZFwiIHNpemU9XCJsYXJnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEVkaXQgcHJvZmlsZVxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA6XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktMzAwIHNoYWRvdyByb3VuZGVkLW1kIHAtNCBtYXgtdy1zbSB3LWZ1bGwgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGUtcHVsc2UgZmxleCBzcGFjZS14LTRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBiZy1ncmF5LTQwMCBoLTEyIHctMTJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIHNwYWNlLXktNCBweS0xXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC00IGJnLWdyYXktNDAwIHJvdW5kZWQgdy0zLzRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNCBiZy1ncmF5LTQwMCByb3VuZGVkXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTQgYmctZ3JheS00MDAgcm91bmRlZCB3LTUvNlwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZV9jb250ZW50fT5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGJvcmRlci1iXCI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ21yLTEnLCBzdHlsZXMudGFiKX0gb25DbGljaz17KCkgPT4gc2V0VGFiKDEpfSBzdHlsZT17eyBib3JkZXJCb3R0b206dGFiPT0xPyc1cHggc29saWQgd2hpdGUnOidub25lJyB9fT5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgcHktMiBweC00IHRleHQtYmx1ZS01MDAgaG92ZXI6dGV4dC1ibHVlLTgwMCBmb250LXNlbWlib2xkXCI+QUNUSVZJVFk8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ21yLTEnLCBzdHlsZXMudGFiKX0gb25DbGljaz17KCkgPT4gc2V0VGFiKDIpfSBzdHlsZT17eyBib3JkZXJCb3R0b206dGFiPT0yPyc1cHggc29saWQgd2hpdGUnOidub25lJyB9fT5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgcHktMiBweC00IHRleHQtYmx1ZS01MDAgaG92ZXI6dGV4dC1ibHVlLTgwMCBmb250LXNlbWlib2xkXCI+R3JvdXBzPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdtci0xJywgc3R5bGVzLnRhYil9IG9uQ2xpY2s9eygpID0+IHNldFRhYig2KX0gc3R5bGU9e3sgYm9yZGVyQm90dG9tOnRhYj09Nj8nNXB4IHNvbGlkIHdoaXRlJzonbm9uZScgfX0+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHB5LTIgcHgtNCB0ZXh0LWJsdWUtNTAwIGhvdmVyOnRleHQtYmx1ZS04MDAgZm9udC1zZW1pYm9sZFwiPk1hcmtldHM8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ21yLTEnLCBzdHlsZXMudGFiKX0gb25DbGljaz17KCkgPT4gc2V0VGFiKDMpfSBzdHlsZT17eyBib3JkZXJCb3R0b206dGFiPT0zPyc1cHggc29saWQgd2hpdGUnOidub25lJyB9fT5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgcHktMiBweC00IHRleHQtYmx1ZS01MDAgaG92ZXI6dGV4dC1ibHVlLTgwMCBmb250LXNlbWlib2xkXCI+UEhPVE9TPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdtci0xJywgc3R5bGVzLnRhYil9IG9uQ2xpY2s9eygpID0+IHNldFRhYig0KX0gc3R5bGU9e3sgYm9yZGVyQm90dG9tOnRhYj09ND8nNXB4IHNvbGlkIHdoaXRlJzonbm9uZScgfX0+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHB5LTIgcHgtNCB0ZXh0LWJsdWUtNTAwIGhvdmVyOnRleHQtYmx1ZS04MDAgZm9udC1zZW1pYm9sZFwiPlJBVEVTPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdtci0xJywgc3R5bGVzLnRhYil9IG9uQ2xpY2s9eygpID0+IHNldFRhYig1KX0gc3R5bGU9e3sgYm9yZGVyQm90dG9tOnRhYj09NT8nNXB4IHNvbGlkIHdoaXRlJzonbm9uZScgfX0+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHB5LTIgcHgtNCB0ZXh0LWJsdWUtNTAwIGhvdmVyOnRleHQtYmx1ZS04MDAgZm9udC1zZW1pYm9sZFwiPkZSSUVORFM8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAge3RhYj09MT9cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aXZpdHl9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNyZWF0ZVBvc3REaXZ9PlxyXG4gICAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICAgICAgc2l6ZT17NTB9XHJcbiAgICAgICAgICAgICAgICAgIHVybD17cHJvZmlsZVVybH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5jcmVhdGVQb3N0SW5wdXR9IHBsYWNlaG9sZGVyPVwiV2hhdCdzIG9uIHlvdXIgbWluZD9cIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17bW9kYWxQb3B1cH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPC9pbnB1dD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxGZWVkUG9zdHNcclxuICAgICAgICAgICAgICB1c2VyPXthY2NvdW50RGF0YX1cclxuICAgICAgICAgICAgICBvblJhdGVQb3N0PXtyYXRlUG9zdH1cclxuICAgICAgICAgICAgICBvblVwZGF0ZVRpbWVsaW5lPXtnZXRBY2NvdW50fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+Om51bGx9XHJcbiAgICAgICAgICB7dGFiPT01P1xyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXHJcbiAgICAgICAgICAgICAgc3R5bGVzLmZyaWVuZHNfbGlzdCxcclxuICAgICAgICAgICAgICBzdHlsZXMuc2VjdGlvbnNfY29udGVudFxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7YWNjb3VudERhdGE/LmZyaWVuZHMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZyaWVuZH0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPXs4MH1cclxuICAgICAgICAgICAgICAgICAgICB1cmw9e2l0ZW0/LnByb2ZpbGVQaG90b31cclxuICAgICAgICAgICAgICAgICAgICB0ZXh0PXtpdGVtPy51c2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mcmllbmRfbmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtLmZpcnN0TmFtZX0ge2l0ZW0ubGFzdE5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9kaXY+Om51bGxcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHt0YWI9PTM/XHJcbiAgICAgICAgICAgIDxQaG90b1NlY3Rpb24gdXNlcj17YWNjb3VudERhdGF9IG9uUmF0ZVBvc3Q9e3JhdGVQb3N0fSAvPjpudWxsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB7dGFiPT00P1xyXG4gICAgICAgICAgICA8UmF0ZWRTZWN0aW9uIHVzZXI9e2FjY291bnREYXRhfSBvblJhdGVQb3N0PXtyYXRlUG9zdH0gLz46bnVsbFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yaWdodH0+XHJcbiAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgICAgPE1vZGFsV3JhcHBlclxyXG4gICAgICAgICAgdGl0bGU9XCJDcmVhdGUgUG9zdFwiXHJcbiAgICAgICAgICBzaG93TW9kYWw9e3Bvc3RNb2RhbH1cclxuICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFBvc3RNb2RhbCgwKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8UG9zdGluZ1Bvc3RcclxuICAgICAgICAgICAgICBsb2FkaW5nPXtzdG9yYWdlLnBvc3RpbmdMb2FkaW5nfVxyXG4gICAgICAgICAgICAgIG9uUG9zdGluZz17Y3JlYXRlUG9zdH1cclxuICAgICAgICAgICAgICBtb2RhbFBvcHVwPXttb2RhbFBvcHVwfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L01vZGFsV3JhcHBlcj5cclxuICAgICAgICA8TW9kYWxXcmFwcGVyXHJcbiAgICAgICAgICB0aXRsZT1cIkVkaXQgUHJvZmlsZVwiXHJcbiAgICAgICAgICBzaG93TW9kYWw9e2VkaXRQcm9maWxlTW9kYWx9XHJcbiAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRFZGl0UHJvZmlsZU1vZGFsKDApfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxFZGl0UHJvZmlsZSBvblVwZGF0ZT17b25VcGRhdGV9IGxvYWRpbmc9e3N0b3JhZ2UucG9zdGluZ0xvYWRpbmd9Lz5cclxuICAgICAgICA8L01vZGFsV3JhcHBlcj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVxdWlyZUF1dGgoUHJvZmlsZSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=