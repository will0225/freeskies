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
      lineNumber: 393,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.left,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 7
    }
  }, typeof accountData !== 'undefined' ? __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.profile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.avatar_image,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 14
    }
  }, __jsx(_components_common_Avatar__WEBPACK_IMPORTED_MODULE_16__["default"], {
    size: isMobile ? 100 : 140,
    url: profileUrl,
    text: accountData === null || accountData === void 0 ? void 0 : accountData.username,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.user_content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.user_info,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.heade_section,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.left_side,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
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
      lineNumber: 416,
      columnNumber: 19
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417,
      columnNumber: 21
    }
  }, "".concat(accountData === null || accountData === void 0 ? void 0 : accountData.firstName, " ").concat(accountData === null || accountData === void 0 ? void 0 : accountData.lastName)))), __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.right_side,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.rating,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421,
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
      lineNumber: 422,
      columnNumber: 21
    }
  }), __jsx("span", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.rating_text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426,
      columnNumber: 21
    }
  }, roundRating))))))) : __jsx("div", {
    className: "border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "animate-pulse flex space-x-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "rounded-full bg-gray-400 h-12 w-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 461,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "flex-1 space-y-4 py-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "h-4 bg-gray-400 rounded w-3/4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463,
      columnNumber: 19
    }
  }), __jsx("div", {
    className: "space-y-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 464,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "h-4 bg-gray-400 rounded",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 465,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "h-4 bg-gray-400 rounded w-5/6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 466,
      columnNumber: 21
    }
  }))))), __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.profile_content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472,
      columnNumber: 9
    }
  }, __jsx("ul", {
    className: "flex border-b",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473,
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
      lineNumber: 474,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 475,
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
      lineNumber: 477,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478,
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
      lineNumber: 480,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481,
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
      lineNumber: 483,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 484,
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
      lineNumber: 486,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 487,
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
      lineNumber: 489,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 490,
      columnNumber: 15
    }
  }, "FRIENDS"))), tab == 1 ? __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.activity,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 494,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.createPostDiv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 495,
      columnNumber: 13
    }
  }, __jsx(_components_common_Avatar__WEBPACK_IMPORTED_MODULE_16__["default"], {
    size: 50,
    url: profileUrl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496,
      columnNumber: 15
    }
  }), __jsx("input", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.createPostInput,
    placeholder: "What's on your mind?",
    onClick: modalPopup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500,
      columnNumber: 15
    }
  })), __jsx(components_profile_FeedPosts__WEBPACK_IMPORTED_MODULE_10__["default"], {
    user: accountData,
    onRatePost: ratePost,
    onUpdateTimeline: getAccount,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505,
      columnNumber: 13
    }
  })) : null, tab == 5 ? __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.friends_list, _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.sections_content),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 512,
      columnNumber: 11
    }
  }, accountData === null || accountData === void 0 ? void 0 : accountData.friends.map(function (item, index) {
    return __jsx("div", {
      className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.friend,
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 520,
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
        lineNumber: 521,
        columnNumber: 19
      }
    }), __jsx("div", {
      className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.friend_name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 527,
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
        lineNumber: 528,
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
        lineNumber: 529,
        columnNumber: 21
      }
    })));
  })) : null, tab == 3 ? __jsx(components_profile_PhotoSection__WEBPACK_IMPORTED_MODULE_9__["default"], {
    user: accountData,
    onRatePost: ratePost,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540,
      columnNumber: 13
    }
  }) : null, tab == 4 ? __jsx(components_profile_RatedSection__WEBPACK_IMPORTED_MODULE_12__["default"], {
    user: accountData,
    onRatePost: ratePost,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 543,
      columnNumber: 13
    }
  }) : null)), __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.right,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 547,
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
      lineNumber: 550,
      columnNumber: 9
    }
  }, __jsx(components_profile_PostingPost__WEBPACK_IMPORTED_MODULE_11__["default"], {
    loading: storage.postingLoading,
    onPosting: createPost,
    modalPopup: modalPopup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 555,
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
      lineNumber: 561,
      columnNumber: 9
    }
  }, __jsx(_edit__WEBPACK_IMPORTED_MODULE_20__["default"], {
    onUpdate: onUpdate,
    loading: storage.postingLoading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 566,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9Qcm9maWxlL1Byb2ZpbGUuanMiXSwibmFtZXMiOlsiUHJvZmlsZSIsImF1dGgiLCJ1c2VTdGF0ZSIsImZpbGVMaXN0Iiwic2V0RmlsZUxpc3QiLCJ1c2VDb250ZXh0IiwiUHJvZmlsZUNvbnRleHQiLCJzdG9yYWdlIiwiZGlzcGF0Y2giLCJ0YWIiLCJzZXRUYWIiLCJwb3N0TW9kYWwiLCJzZXRQb3N0TW9kYWwiLCJlZGl0UHJvZmlsZU1vZGFsIiwic2V0RWRpdFByb2ZpbGVNb2RhbCIsImdldEZyaWVuZHMiLCJ0b2tlbiIsIndpdGhvdXRMb2FkaW5nIiwic2V0TG9hZGluZyIsIkFQSSIsIm1ldGhvZCIsInVybCIsImhlYWRlcnMiLCJyZXF1ZXN0IiwiZGF0YSIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJzZXRGcmllbmRzRGF0YSIsImF1dGhTZXJ2aWNlcyIsInJlZnJlc2hUb2tlbiIsIm1lc3NhZ2UiLCJlcnJvciIsImdldEFjY291bnQiLCJzZXRBY2NvdW50c0RhdGEiLCJjcmVhdGVQb3N0IiwiZGF0YUZvclJlcXVlc3QiLCJyYXRlUG9zdCIsInR5cGUiLCJwb3N0SWQiLCJyYXRlIiwicmF0ZWQiLCJyYXRpbmciLCJ3YXJuIiwic3VjY2VzcyIsInVzZUVmZmVjdCIsImFjY291bnREYXRhIiwiaXNNb2JpbGUiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImltYWdlVXBsb2FkUGFyYW1zIiwib25SZW1vdmUiLCJmaWxlIiwiaW5kZXgiLCJpbmRleE9mIiwibmV3RmlsZUxpc3QiLCJzbGljZSIsInJlc3VsdCIsInNwbGljZSIsImJlZm9yZVVwbG9hZCIsImhhbmRsZVVwbG9hZENvdmVyIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImZvckVhY2giLCJhcHBlbmQiLCJvcmlnaW5GaWxlT2JqIiwiaGFuZGxlVXBsb2FkQXZhdGFyIiwiY292ZXJVcmwiLCJ1bmRlZmluZWQiLCJwcm9maWxlQmFja2dyb3VuZEltYWdlIiwic3JjIiwicHJvZmlsZVVybCIsInByb2ZpbGVQaG90byIsInJvdW5kUmF0aW5nIiwiTWF0aCIsInJvdW5kIiwibW9kYWxQb3B1cCIsIm9uVXBkYXRlIiwic3R5bGVzIiwiY29udGFpbmVyIiwibGVmdCIsInByb2ZpbGUiLCJhdmF0YXIiLCJhdmF0YXJfaW1hZ2UiLCJ1c2VybmFtZSIsInVzZXJfY29udGVudCIsInVzZXJfaW5mbyIsImhlYWRlX3NlY3Rpb24iLCJsZWZ0X3NpZGUiLCJmdWxsbmFtZSIsImN1cnNvciIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwicmlnaHRfc2lkZSIsImNvbG9yIiwiZm9udFNpemUiLCJyYXRpbmdfdGV4dCIsInByb2ZpbGVfY29udGVudCIsImNsYXNzbmFtZXMiLCJib3JkZXJCb3R0b20iLCJhY3Rpdml0eSIsImNyZWF0ZVBvc3REaXYiLCJjcmVhdGVQb3N0SW5wdXQiLCJmcmllbmRzX2xpc3QiLCJzZWN0aW9uc19jb250ZW50IiwiZnJpZW5kcyIsIm1hcCIsIml0ZW0iLCJmcmllbmQiLCJtYXJnaW5SaWdodCIsImZyaWVuZF9uYW1lIiwidGV4dEFsaWduIiwicmlnaHQiLCJwb3N0aW5nTG9hZGluZyIsInJlcXVpcmVBdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsT0FBVCxPQUEyQjtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7O0FBQUEsa0JBQ1FDLHNEQUFRLENBQUMsRUFBRCxDQURoQjtBQUFBLE1BQ2xCQyxRQURrQjtBQUFBLE1BQ1JDLFdBRFE7O0FBQUEsb0JBRUdDLHdEQUFVLENBQUNDLHVFQUFELENBRmI7QUFBQSxNQUVsQkMsT0FGa0I7QUFB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Z2VzL3Byb2ZpbGUuOTcxMGE1OGRhZjM0NDBlZDAwMzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvcHJvZmlsZS5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyBDYW1lcmFPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgQnV0dG9uLCBVcGxvYWQsIG1lc3NhZ2UsIElucHV0LCBUYWJzLCBSYXRlIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBBUEkgZnJvbSAnLi4vLi4vY29uZmlncy9BUEknO1xyXG5pbXBvcnQgUGhvdG9TZWN0aW9uIGZyb20gJ2NvbXBvbmVudHMvcHJvZmlsZS9QaG90b1NlY3Rpb24nO1xyXG5pbXBvcnQgRmVlZFBvc3RzIGZyb20gJ2NvbXBvbmVudHMvcHJvZmlsZS9GZWVkUG9zdHMnO1xyXG5pbXBvcnQgUG9zdGluZ1Bvc3QgZnJvbSAnY29tcG9uZW50cy9wcm9maWxlL1Bvc3RpbmdQb3N0JztcclxuaW1wb3J0IFJhdGVkU2VjdGlvbiBmcm9tICdjb21wb25lbnRzL3Byb2ZpbGUvUmF0ZWRTZWN0aW9uJztcclxuaW1wb3J0IHJlcXVpcmVBdXRoIGZyb20gJ2hlbHBlcnMvaG9jL3JlcXVpcmVBdXRoJztcclxuaW1wb3J0IHsgUHJvZmlsZUNvbnRleHQgfSBmcm9tICcuL3N0b3JhZ2UvUHJvZmlsZUNvbnRleHQnO1xyXG5pbXBvcnQgeyBzZXRMb2FkaW5nLCBzZXRGcmllbmRzRGF0YSwgc2V0QWNjb3VudHNEYXRhIH0gZnJvbSAnLi9hY3Rpb25zJztcclxuaW1wb3J0IEF2YXRhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9BdmF0YXInO1xyXG5pbXBvcnQgUmF0aW5nICBmcm9tICdyZWFjdC1yYXRpbmcnO1xyXG5pbXBvcnQgTW9kYWxXcmFwcGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9uL01vZGFsV3JhcHBlcic7XHJcbmltcG9ydCBQb3N0TW9kYWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wcm9maWxlL1Bvc3RNb2RhbCc7XHJcbmltcG9ydCBFZGl0UHJvZmlsZSBmcm9tICcuL2VkaXQnO1xyXG5cclxuZnVuY3Rpb24gUHJvZmlsZSh7IGF1dGggfSkge1xyXG4gIGNvbnN0IFtmaWxlTGlzdCwgc2V0RmlsZUxpc3QgXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc3RvcmFnZSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChQcm9maWxlQ29udGV4dCk7XHJcbiAgY29uc3QgW3RhYiwgc2V0VGFiXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IFtwb3N0TW9kYWwsIHNldFBvc3RNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2VkaXRQcm9maWxlTW9kYWwsIHNldEVkaXRQcm9maWxlTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAvLyBjb25zb2xlLmxvZygnc3RvcmFnZScsIHN0b3JhZ2UsICdhdXRoJywgYXV0aClcclxuXHJcbiAgY29uc3QgZ2V0RnJpZW5kcyA9IGFzeW5jICh0b2tlbiwgd2l0aG91dExvYWRpbmcgPSBmYWxzZSkgPT4ge1xyXG4gICAgLy8gY29uc29sZS53YXJuKGF1dGhTZXJ2aWNlcy5hdXRoLCBhdXRoU2VydmljZXMubG9jYWxzdG9yYWdlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICghd2l0aG91dExvYWRpbmcpIGRpc3BhdGNoKHNldExvYWRpbmcodHJ1ZSkpO1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6ICcvYWNjb3VudHMvdGltZWxpbmUnLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuICAgICAgY29uc29sZS5sb2coJ2dldEZyaWVuZHNfZGF0YT0nLCBkYXRhLCAnZ2V0RnJpZW5kc19zdGF0dXM9Jywgc3RhdHVzKVxyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBkaXNwYXRjaChzZXRGcmllbmRzRGF0YShkYXRhKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJz09PT09PT09PScpO1xyXG4gICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gNDAzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJz09PT09PT09PT09PT09PT09IFJlZnJlc2ggdG9rZW4gIScpO1xyXG5cclxuICAgICAgICBhdXRoU2VydmljZXMucmVmcmVzaFRva2VuKGdldEZyaWVuZHMpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghd2l0aG91dExvYWRpbmcpIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgaWYgKCF3aXRob3V0TG9hZGluZykgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldEFjY291bnQgPSBhc3luYyAodG9rZW4sIHdpdGhvdXRMb2FkaW5nID0gZmFsc2UpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICghd2l0aG91dExvYWRpbmcpIGRpc3BhdGNoKHNldExvYWRpbmcodHJ1ZSkpO1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHVybDogJy9hY2NvdW50cycsXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG4gICAgICBjb25zb2xlLmxvZygnZ2V0QWNjb3VudF9kYXRhPScsIGRhdGEsICdnZXRBY2NvdW50X3N0YXR1cz0nLCBzdGF0dXMpXHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIGRpc3BhdGNoKHNldEFjY291bnRzRGF0YShkYXRhKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJz09PT09PT09PScpO1xyXG4gICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gNDAzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJz09PT09PT09PT09PT09PT09IFJlZnJlc2ggdG9rZW4gIScpO1xyXG5cclxuICAgICAgICBhdXRoU2VydmljZXMucmVmcmVzaFRva2VuKGdldEZyaWVuZHMpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghd2l0aG91dExvYWRpbmcpIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgaWYgKCF3aXRob3V0TG9hZGluZykgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY3JlYXRlUG9zdCA9IGFzeW5jIChkYXRhRm9yUmVxdWVzdCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlLCAncG9zdGluZycpKTtcclxuXHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybDogJy9wb3N0cycsXHJcbiAgICAgICAgZGF0YTogZGF0YUZvclJlcXVlc3QsXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG5cclxuICAgICAgY29uc29sZS5sb2coZGF0YSwgc3RhdHVzKVxyXG5cclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgZ2V0QWNjb3VudCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UsICdwb3N0aW5nJykpO1xyXG5cclxuICAgICAgcmV0dXJuIGF3YWl0IHJlcXVlc3Q7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlLCAncG9zdGluZycpKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCByYXRlUG9zdCA9IGFzeW5jICh0eXBlLCBwb3N0SWQsIHJhdGUpID0+IHtjb25zb2xlLmxvZyh0eXBlLCBwb3N0SWQsIHJhdGUpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlLCAncG9zdGluZycpKTtcclxuICAgICAgbGV0IHVybCA9ICcnO1xyXG5cclxuICAgICAgaWYgKHR5cGUgPT09ICdQaG90bycpIHtcclxuICAgICAgICB1cmwgPSAnL3Bob3Rvcy9yYXRlJztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnVmlkZW9DbGlwJykge1xyXG4gICAgICAgIHVybCA9ICcvdmlkZW8tY2xpcHMvcmF0ZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0l0ZW0nKSB7XHJcbiAgICAgICAgdXJsID0gJy9pdGVtcy9yYXRlJztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnUG9zdCcpIHtcclxuICAgICAgICB1cmwgPSAnL3Bvc3RzL3JhdGUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdDb21tZW50Jykge1xyXG4gICAgICAgIHVybCA9ICcvY29tbWVudHMvcmF0ZSc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICByYXRlZDogcG9zdElkLFxyXG4gICAgICAgICAgcmF0aW5nOiByYXRlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG5cclxuICAgICAgY29uc29sZS53YXJuKCdyYXRlUG9zdCcsIGRhdGEsIHN0YXR1cyk7XHJcblxyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICBnZXRBY2NvdW50KCk7XHJcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKCdFdmFsdWF0ZSBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlLCAncG9zdGluZycpKTtcclxuXHJcbiAgICAgIHJldHVybiBhd2FpdCByZXF1ZXN0O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSwgJ3Bvc3RpbmcnKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldEZyaWVuZHMoYXV0aC50b2tlbik7XHJcbiAgICBnZXRBY2NvdW50KGF1dGgudG9rZW4pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgeyBhY2NvdW50RGF0YSB9ID0gc3RvcmFnZVxyXG5cclxuICBjb25zdCBpc01vYmlsZSA9IHdpbmRvdy5tYXRjaE1lZGlhKCdvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpJykubWF0Y2hlc1xyXG5cclxuICBjb25zdCBpbWFnZVVwbG9hZFBhcmFtcyA9IHtcclxuICAgIG9uUmVtb3ZlOiBmaWxlID0+IHtcclxuICAgICAgY29uc3QgaW5kZXggPSBmaWxlTGlzdC5pbmRleE9mKGZpbGUpO1xyXG4gICAgICBjb25zdCBuZXdGaWxlTGlzdCA9IGZpbGVMaXN0LnNsaWNlKCk7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IG5ld0ZpbGVMaXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgIHNldEZpbGVMaXN0KHJlc3VsdClcclxuICAgIH0sXHJcbiAgICBiZWZvcmVVcGxvYWQ6IGZpbGUgPT4ge1xyXG4gICAgICBzZXRGaWxlTGlzdChbLi4uZmlsZUxpc3QsIGZpbGVdKVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgZmlsZUxpc3QsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVXBsb2FkQ292ZXIgPSBhc3luYyAoeyBmaWxlTGlzdCB9KSA9PiB7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZmlsZUxpc3QuZm9yRWFjaChmaWxlID0+IHtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdwcm9maWxlQmFja2dyb3VuZEltYWdlJywgZmlsZS5vcmlnaW5GaWxlT2JqKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICBtZXRob2Q6ICdwdXQnLFxyXG4gICAgICB1cmw6ICcvYWNjb3VudHMnLFxyXG4gICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcblxyXG4gICAgY29uc29sZS5sb2coZmlsZUxpc3QsIGRhdGEsIHN0YXR1cylcclxuXHJcbiAgICBnZXRBY2NvdW50KGF1dGgudG9rZW4pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlVXBsb2FkQXZhdGFyID0gYXN5bmMgKHsgZmlsZUxpc3QgfSkgPT4ge1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZpbGVMaXN0LmZvckVhY2goZmlsZSA9PiB7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgncHJvZmlsZVBob3RvJywgZmlsZS5vcmlnaW5GaWxlT2JqKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICBtZXRob2Q6ICdwdXQnLFxyXG4gICAgICB1cmw6ICcvYWNjb3VudHMnLFxyXG4gICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcblxyXG4gICAgY29uc29sZS5sb2coZmlsZUxpc3QsIGRhdGEsIHN0YXR1cylcclxuXHJcbiAgICBnZXRBY2NvdW50KGF1dGgudG9rZW4pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY292ZXJVcmwgPSBhY2NvdW50RGF0YSAhPT0gbnVsbCAmJiBhY2NvdW50RGF0YSAhPT0gdW5kZWZpbmVkID8gYHVybChodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2FjY291bnREYXRhLnByb2ZpbGVCYWNrZ3JvdW5kSW1hZ2U/LnNyY30pYCA6IG51bGxcclxuICBjb25zdCBwcm9maWxlVXJsID0gYWNjb3VudERhdGEgIT09IG51bGwgJiYgYWNjb3VudERhdGEgIT09IHVuZGVmaW5lZCA/IGAke2FjY291bnREYXRhLnByb2ZpbGVQaG90bz8uc3JjfWAgOiBudWxsXHJcbiAgY29uc3Qgcm91bmRSYXRpbmcgPSBNYXRoLnJvdW5kKGFjY291bnREYXRhPy5yYXRpbmcgfHwgMClcclxuICBcclxuICBjb25zdCBtb2RhbFBvcHVwID0gKCkgPT4ge1xyXG4gICAgc2V0UG9zdE1vZGFsKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25VcGRhdGUgPSBhc3luYyAoZGF0YUZvclJlcXVlc3QpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcodHJ1ZSkpO1xyXG5cclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICB1cmw6ICcvYWNjb3VudHMnLFxyXG4gICAgICAgIGRhdGE6IGRhdGFGb3JSZXF1ZXN0LFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ3gtdG9rZW4nOiBhdXRoLnRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuXHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgIGdldEFjY291bnQoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGRhdGE/Lm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3cm9uZycpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSk7XHJcblxyXG4gICAgICByZXR1cm4gYXdhaXQgcmVxdWVzdDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyByZXR1cm4gKFxyXG4gIC8vICAgPGRpdj5cclxuICAvLyAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmNvbnRhaW5lciwgc3R5bGVzLnVzZXJfcHJvZmlsZSl9PlxyXG4gIC8vICAgICAgIDxkaXZcclxuICAvLyAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvdmVyfVxyXG4gIC8vICAgICAgICAgc3R5bGU9e2NvdmVyVXJsICE9PSBudWxsID8geyBiYWNrZ3JvdW5kSW1hZ2U6IGNvdmVyVXJsIH0gOiBudWxsfVxyXG4gIC8vICAgICAgID5cclxuICAvLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhbmdlX2NvdmVyfT5cclxuICAvLyAgICAgICAgICAgPFVwbG9hZCB7Li4uaW1hZ2VVcGxvYWRQYXJhbXN9IG9uQ2hhbmdlPXtoYW5kbGVVcGxvYWRDb3Zlcn0+XHJcbiAgLy8gICAgICAgICAgICAgPEJ1dHRvbiBnaG9zdCB0eXBlPVwiZGFzaGVkXCI+XHJcbiAgLy8gICAgICAgICAgICAgICBDaGFuZ2UgY292ZXJcclxuICAvLyAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAvLyAgICAgICAgICAgPC9VcGxvYWQ+XHJcbiAgLy8gICAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgICA8L2Rpdj5cclxuXHJcbiAgLy8gICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlfT5cclxuICAvLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyfT5cclxuICAvLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJfaW1hZ2V9PlxyXG4gIC8vICAgICAgICAgICAgIDxBdmF0YXJcclxuICAvLyAgICAgICAgICAgICAgIHNpemU9e2lzTW9iaWxlID8gMTAwIDogMTQwfVxyXG4gIC8vICAgICAgICAgICAgICAgdXJsPXtwcm9maWxlVXJsfVxyXG4gIC8vICAgICAgICAgICAgICAgdGV4dD17YWNjb3VudERhdGE/LnVzZXJuYW1lfVxyXG4gIC8vICAgICAgICAgICAgIC8+XHJcbiAgLy8gICAgICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYW5nZV9hdmF0YXJ9PlxyXG4gIC8vICAgICAgICAgICAgIDxVcGxvYWQgey4uLmltYWdlVXBsb2FkUGFyYW1zfSBvbkNoYW5nZT17aGFuZGxlVXBsb2FkQXZhdGFyfT5cclxuICAvLyAgICAgICAgICAgICAgIDxDYW1lcmFPdXRsaW5lZCBjbGFzc05hbWU9e3N0eWxlcy5jaGFuZ2VfYXZhdGFyX2ltYWdlfSAvPlxyXG4gIC8vICAgICAgICAgICAgIDwvVXBsb2FkPlxyXG4gIC8vICAgICAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgICAgIDwvZGl2PlxyXG5cclxuICAvLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcl9jb250ZW50fT5cclxuICAvLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyX2luZm99PlxyXG4gIC8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVfc2VjdGlvbn0+XHJcbiAgLy8gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnRfc2lkZX0+XHJcbiAgLy8gICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmZ1bGxuYW1lfT5cclxuICAvLyAgICAgICAgICAgICAgICAgICA8c3Bhbj57YCR7YWNjb3VudERhdGE/LmZpcnN0TmFtZX0gJHthY2NvdW50RGF0YT8ubGFzdE5hbWV9YH08L3NwYW4+XHJcbiAgLy8gICAgICAgICAgICAgICAgIDwvcD5cclxuICAvLyAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yaWdodF9zaWRlfT5cclxuICAvLyAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucmF0aW5nfT5cclxuICAvLyAgICAgICAgICAgICAgICAgICA8UmF0ZVxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAvLyAgICAgICAgICAgICAgICAgICAgIGFsbG93SGFsZlxyXG4gIFxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtyb3VuZFJhdGluZ31cclxuICAvLyAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnI2ZhZGIxNCcsIGZvbnRTaXplOiAnMWVtJyB9fVxyXG4gIC8vICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucmF0aW5nX3RleHR9PlxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAge3JvdW5kUmF0aW5nfVxyXG4gIC8vICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAvLyAgICAgICAgICAgICAgICAgPC9wPlxyXG4gIC8vICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgICAgICAgey8qID09PT0gKi99XHJcbiAgLy8gICAgICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvdHRvbV9zZWN0aW9ufT5cclxuICAvLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnRfc2lkZX0+XHJcbiAgLy8gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfYWN0aW9uc30+XHJcbiAgLy8gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9sbG93X2FjdGlvbnN9PlxyXG4gIC8vICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmZvbGxvd2Vyc30+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICB7YWNjb3VudERhdGE/LmZvbGxvd2Vyc0NvdW50fSBmb2xsb3dlcnNcclxuICAvLyAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgLy8gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5mb2xsb3dlcnNfZm9ybW9iaWxlfT5cclxuICAvLyAgICAgICAgICAgICAgICAgICB7YWNjb3VudERhdGE/LmZvbGxvd2Vyc0NvdW50fSBmb2xsb3dlcnMgLyB7YWNjb3VudERhdGE/LmZvbGxvd2luZ0NvdW50fXsnICd9XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgZm9sbG93aW5nXHJcbiAgLy8gICAgICAgICAgICAgICAgIDwvcD5cclxuICAvLyAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICAgICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHRfc2lkZX0+XHJcbiAgLy8gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfYWN0aW9uc30+XHJcbiAgLy8gICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzaGFwZT1cInJvdW5kXCIgc2l6ZT1cImxhcmdlXCI+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgRWRpdCBwcm9maWxlXHJcbiAgLy8gICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gIC8vICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gIC8vICAgICA8L2Rpdj5cclxuXHJcbiAgLy8gICAgIDxkaXZcclxuICAvLyAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXHJcbiAgLy8gICAgICAgICBzdHlsZXMuY29udGFpbmVyLFxyXG4gIC8vICAgICAgICAgc3R5bGVzLmNvbnRlbnQsXHJcbiAgLy8gICAgICAgICBzdHlsZXMuY29udGFpbmVyX2JnXHJcbiAgLy8gICAgICAgKX1cclxuICAvLyAgICAgPlxyXG4gIC8vICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZV9jb250ZW50c30+XHJcbiAgLy8gICAgICAgICA8UGhvdG9TZWN0aW9uIHVzZXI9e2FjY291bnREYXRhfSBvblJhdGVQb3N0PXtyYXRlUG9zdH0gLz5cclxuICAvLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5jb250YWluZXJfYmcsIHN0eWxlcy5zZWN0aW9uKX0+XHJcbiAgLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VjdGlvbl90aXRsZX0+XHJcbiAgLy8gICAgICAgICAgICAgPHA+RnJpZW5kczwvcD5cclxuICAvLyAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJsaW5rXCI+QWxsIGZyaWVuZHM8L0J1dHRvbj5cclxuICAvLyAgICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgICAgIDxkaXZcclxuICAvLyAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXHJcbiAgLy8gICAgICAgICAgICAgICBzdHlsZXMuZnJpZW5kc19saXN0LFxyXG4gIC8vICAgICAgICAgICAgICAgc3R5bGVzLnNlY3Rpb25zX2NvbnRlbnRcclxuICAvLyAgICAgICAgICAgICApfVxyXG4gIC8vICAgICAgICAgICA+XHJcbiAgLy8gICAgICAgICAgICAge2FjY291bnREYXRhPy5mcmllbmRzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAvLyAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgLy8gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZnJpZW5kfSBrZXk9e2luZGV4fT5cclxuICAvLyAgICAgICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICBzaXplPXs4MH1cclxuICAvLyAgICAgICAgICAgICAgICAgICAgIHVybD17aXRlbT8ucHJvZmlsZVBob3RvfVxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgdGV4dD17aXRlbT8udXNlcm5hbWV9XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgLz5cclxuICAvLyAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZyaWVuZF9uYW1lfT5cclxuICAvLyAgICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbS5maXJzdE5hbWV9IHtpdGVtLmxhc3ROYW1lfTwvc3Bhbj5cclxuICAvLyAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgICAgICAgICApO1xyXG4gIC8vICAgICAgICAgICAgIH0pfVxyXG4gIC8vICAgICAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICAgICAgPFJhdGVkU2VjdGlvbiB1c2VyPXthY2NvdW50RGF0YX0gb25SYXRlUG9zdD17cmF0ZVBvc3R9IC8+XHJcbiAgLy8gICAgICAgPC9kaXY+XHJcblxyXG4gIC8vICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aXZpdHl9PlxyXG4gIC8vICAgICAgICAgPFBvc3RpbmdQb3N0XHJcbiAgLy8gICAgICAgICAgIGxvYWRpbmc9e3N0b3JhZ2UucG9zdGluZ0xvYWRpbmd9XHJcbiAgLy8gICAgICAgICAgIG9uUG9zdGluZz17Y3JlYXRlUG9zdH1cclxuICAvLyAgICAgICAgIC8+XHJcbiAgLy8gICAgICAgICA8RmVlZFBvc3RzXHJcbiAgLy8gICAgICAgICAgIHVzZXI9e2FjY291bnREYXRhfVxyXG4gIC8vICAgICAgICAgICBvblJhdGVQb3N0PXtyYXRlUG9zdH1cclxuICAvLyAgICAgICAgICAgb25VcGRhdGVUaW1lbGluZT17Z2V0QWNjb3VudH1cclxuICAvLyAgICAgICAgIC8+XHJcbiAgLy8gICAgICAgPC9kaXY+XHJcbiAgLy8gICAgIDwvZGl2PlxyXG4gIC8vICAgPC9kaXY+XHJcbiAgLy8gKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0fT5cclxuICAgICAgICB7dHlwZW9mIGFjY291bnREYXRhICE9PSAndW5kZWZpbmVkJz9cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGV9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9PlxyXG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJfaW1hZ2V9PlxyXG4gICAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICAgICAgc2l6ZT17aXNNb2JpbGUgPyAxMDAgOiAxNDB9XHJcbiAgICAgICAgICAgICAgICAgIHVybD17cHJvZmlsZVVybH1cclxuICAgICAgICAgICAgICAgICAgdGV4dD17YWNjb3VudERhdGE/LnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhbmdlX2F2YXRhcn0+XHJcbiAgICAgICAgICAgICAgPFVwbG9hZCB7Li4uaW1hZ2VVcGxvYWRQYXJhbXN9IG9uQ2hhbmdlPXtoYW5kbGVVcGxvYWRBdmF0YXJ9PlxyXG4gICAgICAgICAgICAgICAgPENhbWVyYU91dGxpbmVkIGNsYXNzTmFtZT17c3R5bGVzLmNoYW5nZV9hdmF0YXJfaW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgPC9VcGxvYWQ+XHJcbiAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfY29udGVudH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcl9pbmZvfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlX3NlY3Rpb259PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0X3NpZGV9PlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5mdWxsbmFtZX0gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gb25DbGljaz17KCkgPT4gc2V0RWRpdFByb2ZpbGVNb2RhbCh0cnVlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2Ake2FjY291bnREYXRhPy5maXJzdE5hbWV9ICR7YWNjb3VudERhdGE/Lmxhc3ROYW1lfWB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHRfc2lkZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnJhdGluZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJhdGVcclxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cm91bmRSYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJyNmYWRiMTQnLCBmb250U2l6ZTogJzMwcHgnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5yYXRpbmdfdGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7cm91bmRSYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7LyogPT09PSAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvdHRvbV9zZWN0aW9ufT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnRfc2lkZX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfYWN0aW9uc30+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9sbG93X2FjdGlvbnN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmZvbGxvd2Vyc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7YWNjb3VudERhdGE/LmZvbGxvd2Vyc0NvdW50fSBmb2xsb3dlcnNcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5mb2xsb3dlcnNfZm9ybW9iaWxlfT5cclxuICAgICAgICAgICAgICAgICAgICB7YWNjb3VudERhdGE/LmZvbGxvd2Vyc0NvdW50fSBmb2xsb3dlcnMgLyB7YWNjb3VudERhdGE/LmZvbGxvd2luZ0NvdW50fXsnICd9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9sbG93aW5nXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHRfc2lkZX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfYWN0aW9uc30+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzaGFwZT1cInJvdW5kXCIgc2l6ZT1cImxhcmdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgRWRpdCBwcm9maWxlXHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDpcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItZ3JheS0zMDAgc2hhZG93IHJvdW5kZWQtbWQgcC00IG1heC13LXNtIHctZnVsbCBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWF0ZS1wdWxzZSBmbGV4IHNwYWNlLXgtNFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGJnLWdyYXktNDAwIGgtMTIgdy0xMlwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgc3BhY2UteS00IHB5LTFcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTQgYmctZ3JheS00MDAgcm91bmRlZCB3LTMvNFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC00IGJnLWdyYXktNDAwIHJvdW5kZWRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNCBiZy1ncmF5LTQwMCByb3VuZGVkIHctNS82XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlX2NvbnRlbnR9PlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggYm9yZGVyLWJcIj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnbXItMScsIHN0eWxlcy50YWIpfSBvbkNsaWNrPXsoKSA9PiBzZXRUYWIoMSl9IHN0eWxlPXt7IGJvcmRlckJvdHRvbTp0YWI9PTE/JzVweCBzb2xpZCB3aGl0ZSc6J25vbmUnIH19PlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBweS0yIHB4LTQgdGV4dC1ibHVlLTUwMCBob3Zlcjp0ZXh0LWJsdWUtODAwIGZvbnQtc2VtaWJvbGRcIj5BQ1RJVklUWTwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnbXItMScsIHN0eWxlcy50YWIpfSBvbkNsaWNrPXsoKSA9PiBzZXRUYWIoMil9IHN0eWxlPXt7IGJvcmRlckJvdHRvbTp0YWI9PTI/JzVweCBzb2xpZCB3aGl0ZSc6J25vbmUnIH19PlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBweS0yIHB4LTQgdGV4dC1ibHVlLTUwMCBob3Zlcjp0ZXh0LWJsdWUtODAwIGZvbnQtc2VtaWJvbGRcIj5Hcm91cHM8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ21yLTEnLCBzdHlsZXMudGFiKX0gb25DbGljaz17KCkgPT4gc2V0VGFiKDYpfSBzdHlsZT17eyBib3JkZXJCb3R0b206dGFiPT02Pyc1cHggc29saWQgd2hpdGUnOidub25lJyB9fT5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgcHktMiBweC00IHRleHQtYmx1ZS01MDAgaG92ZXI6dGV4dC1ibHVlLTgwMCBmb250LXNlbWlib2xkXCI+TWFya2V0czwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnbXItMScsIHN0eWxlcy50YWIpfSBvbkNsaWNrPXsoKSA9PiBzZXRUYWIoMyl9IHN0eWxlPXt7IGJvcmRlckJvdHRvbTp0YWI9PTM/JzVweCBzb2xpZCB3aGl0ZSc6J25vbmUnIH19PlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBweS0yIHB4LTQgdGV4dC1ibHVlLTUwMCBob3Zlcjp0ZXh0LWJsdWUtODAwIGZvbnQtc2VtaWJvbGRcIj5QSE9UT1M8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ21yLTEnLCBzdHlsZXMudGFiKX0gb25DbGljaz17KCkgPT4gc2V0VGFiKDQpfSBzdHlsZT17eyBib3JkZXJCb3R0b206dGFiPT00Pyc1cHggc29saWQgd2hpdGUnOidub25lJyB9fT5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgcHktMiBweC00IHRleHQtYmx1ZS01MDAgaG92ZXI6dGV4dC1ibHVlLTgwMCBmb250LXNlbWlib2xkXCI+UkFURVM8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ21yLTEnLCBzdHlsZXMudGFiKX0gb25DbGljaz17KCkgPT4gc2V0VGFiKDUpfSBzdHlsZT17eyBib3JkZXJCb3R0b206dGFiPT01Pyc1cHggc29saWQgd2hpdGUnOidub25lJyB9fT5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgcHktMiBweC00IHRleHQtYmx1ZS01MDAgaG92ZXI6dGV4dC1ibHVlLTgwMCBmb250LXNlbWlib2xkXCI+RlJJRU5EUzwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICB7dGFiPT0xP1xyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpdml0eX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY3JlYXRlUG9zdERpdn0+XHJcbiAgICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgICBzaXplPXs1MH1cclxuICAgICAgICAgICAgICAgICAgdXJsPXtwcm9maWxlVXJsfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLmNyZWF0ZVBvc3RJbnB1dH0gcGxhY2Vob2xkZXI9XCJXaGF0J3Mgb24geW91ciBtaW5kP1wiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXttb2RhbFBvcHVwfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8L2lucHV0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEZlZWRQb3N0c1xyXG4gICAgICAgICAgICAgIHVzZXI9e2FjY291bnREYXRhfVxyXG4gICAgICAgICAgICAgIG9uUmF0ZVBvc3Q9e3JhdGVQb3N0fVxyXG4gICAgICAgICAgICAgIG9uVXBkYXRlVGltZWxpbmU9e2dldEFjY291bnR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj46bnVsbH1cclxuICAgICAgICAgIHt0YWI9PTU/XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcclxuICAgICAgICAgICAgICBzdHlsZXMuZnJpZW5kc19saXN0LFxyXG4gICAgICAgICAgICAgIHN0eWxlcy5zZWN0aW9uc19jb250ZW50XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHthY2NvdW50RGF0YT8uZnJpZW5kcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZnJpZW5kfSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9ezgwfVxyXG4gICAgICAgICAgICAgICAgICAgIHVybD17aXRlbT8ucHJvZmlsZVBob3RvfVxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9e2l0ZW0/LnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAwIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZnJpZW5kX25hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBmb250U2l6ZTogMjAgfX0+e2l0ZW0uZmlyc3ROYW1lfSB7aXRlbS5sYXN0TmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJhdGVcclxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17aXRlbS5yYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJyNmYWRiMTQnLCBmb250U2l6ZTogJzE1cHgnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvZGl2PjpudWxsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB7dGFiPT0zP1xyXG4gICAgICAgICAgICA8UGhvdG9TZWN0aW9uIHVzZXI9e2FjY291bnREYXRhfSBvblJhdGVQb3N0PXtyYXRlUG9zdH0gLz46bnVsbFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAge3RhYj09ND9cclxuICAgICAgICAgICAgPFJhdGVkU2VjdGlvbiB1c2VyPXthY2NvdW50RGF0YX0gb25SYXRlUG9zdD17cmF0ZVBvc3R9IC8+Om51bGxcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHR9PlxyXG4gICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxNb2RhbFdyYXBwZXJcclxuICAgICAgICAgIHRpdGxlPVwiQ3JlYXRlIFBvc3RcIlxyXG4gICAgICAgICAgc2hvd01vZGFsPXtwb3N0TW9kYWx9XHJcbiAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRQb3N0TW9kYWwoMCl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFBvc3RpbmdQb3N0XHJcbiAgICAgICAgICAgICAgbG9hZGluZz17c3RvcmFnZS5wb3N0aW5nTG9hZGluZ31cclxuICAgICAgICAgICAgICBvblBvc3Rpbmc9e2NyZWF0ZVBvc3R9XHJcbiAgICAgICAgICAgICAgbW9kYWxQb3B1cD17bW9kYWxQb3B1cH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Nb2RhbFdyYXBwZXI+XHJcbiAgICAgICAgPE1vZGFsV3JhcHBlclxyXG4gICAgICAgICAgdGl0bGU9XCJFZGl0IFByb2ZpbGVcIlxyXG4gICAgICAgICAgc2hvd01vZGFsPXtlZGl0UHJvZmlsZU1vZGFsfVxyXG4gICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0RWRpdFByb2ZpbGVNb2RhbCgwKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8RWRpdFByb2ZpbGUgb25VcGRhdGU9e29uVXBkYXRlfSBsb2FkaW5nPXtzdG9yYWdlLnBvc3RpbmdMb2FkaW5nfS8+XHJcbiAgICAgICAgPC9Nb2RhbFdyYXBwZXI+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlcXVpcmVBdXRoKFByb2ZpbGUpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9