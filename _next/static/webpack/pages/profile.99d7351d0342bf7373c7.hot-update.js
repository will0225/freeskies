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
        lineNumber: 526,
        columnNumber: 19
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 527,
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
        lineNumber: 528,
        columnNumber: 21
      }
    })));
  })) : null, tab == 3 ? __jsx(components_profile_PhotoSection__WEBPACK_IMPORTED_MODULE_9__["default"], {
    user: accountData,
    onRatePost: ratePost,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539,
      columnNumber: 13
    }
  }) : null, tab == 4 ? __jsx(components_profile_RatedSection__WEBPACK_IMPORTED_MODULE_12__["default"], {
    user: accountData,
    onRatePost: ratePost,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 542,
      columnNumber: 13
    }
  }) : null)), __jsx("div", {
    className: _styles_profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.right,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 546,
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
      lineNumber: 549,
      columnNumber: 9
    }
  }, __jsx(components_profile_PostingPost__WEBPACK_IMPORTED_MODULE_11__["default"], {
    loading: storage.postingLoading,
    onPosting: createPost,
    modalPopup: modalPopup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554,
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
      lineNumber: 560,
      columnNumber: 9
    }
  }, __jsx(_edit__WEBPACK_IMPORTED_MODULE_20__["default"], {
    onUpdate: onUpdate,
    loading: storage.postingLoading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 565,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9Qcm9maWxlL1Byb2ZpbGUuanMiXSwibmFtZXMiOlsiUHJvZmlsZSIsImF1dGgiLCJ1c2VTdGF0ZSIsImZpbGVMaXN0Iiwic2V0RmlsZUxpc3QiLCJ1c2VDb250ZXh0IiwiUHJvZmlsZUNvbnRleHQiLCJzdG9yYWdlIiwiZGlzcGF0Y2giLCJ0YWIiLCJzZXRUYWIiLCJwb3N0TW9kYWwiLCJzZXRQb3N0TW9kYWwiLCJlZGl0UHJvZmlsZU1vZGFsIiwic2V0RWRpdFByb2ZpbGVNb2RhbCIsImdldEZyaWVuZHMiLCJ0b2tlbiIsIndpdGhvdXRMb2FkaW5nIiwic2V0TG9hZGluZyIsIkFQSSIsIm1ldGhvZCIsInVybCIsImhlYWRlcnMiLCJyZXF1ZXN0IiwiZGF0YSIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJzZXRGcmllbmRzRGF0YSIsImF1dGhTZXJ2aWNlcyIsInJlZnJlc2hUb2tlbiIsIm1lc3NhZ2UiLCJlcnJvciIsImdldEFjY291bnQiLCJzZXRBY2NvdW50c0RhdGEiLCJjcmVhdGVQb3N0IiwiZGF0YUZvclJlcXVlc3QiLCJyYXRlUG9zdCIsInR5cGUiLCJwb3N0SWQiLCJyYXRlIiwicmF0ZWQiLCJyYXRpbmciLCJ3YXJuIiwic3VjY2VzcyIsInVzZUVmZmVjdCIsImFjY291bnREYXRhIiwiaXNNb2JpbGUiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImltYWdlVXBsb2FkUGFyYW1zIiwib25SZW1vdmUiLCJmaWxlIiwiaW5kZXgiLCJpbmRleE9mIiwibmV3RmlsZUxpc3QiLCJzbGljZSIsInJlc3VsdCIsInNwbGljZSIsImJlZm9yZVVwbG9hZCIsImhhbmRsZVVwbG9hZENvdmVyIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImZvckVhY2giLCJhcHBlbmQiLCJvcmlnaW5GaWxlT2JqIiwiaGFuZGxlVXBsb2FkQXZhdGFyIiwiY292ZXJVcmwiLCJ1bmRlZmluZWQiLCJwcm9maWxlQmFja2dyb3VuZEltYWdlIiwic3JjIiwicHJvZmlsZVVybCIsInByb2ZpbGVQaG90byIsInJvdW5kUmF0aW5nIiwiTWF0aCIsInJvdW5kIiwibW9kYWxQb3B1cCIsIm9uVXBkYXRlIiwic3R5bGVzIiwiY29udGFpbmVyIiwibGVmdCIsInByb2ZpbGUiLCJhdmF0YXIiLCJhdmF0YXJfaW1hZ2UiLCJ1c2VybmFtZSIsInVzZXJfY29udGVudCIsInVzZXJfaW5mbyIsImhlYWRlX3NlY3Rpb24iLCJsZWZ0X3NpZGUiLCJmdWxsbmFtZSIsImN1cnNvciIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwicmlnaHRfc2lkZSIsImNvbG9yIiwiZm9udFNpemUiLCJyYXRpbmdfdGV4dCIsInByb2ZpbGVfY29udGVudCIsImNsYXNzbmFtZXMiLCJib3JkZXJCb3R0b20iLCJhY3Rpdml0eSIsImNyZWF0ZVBvc3REaXYiLCJjcmVhdGVQb3N0SW5wdXQiLCJmcmllbmRzX2xpc3QiLCJzZWN0aW9uc19jb250ZW50IiwiZnJpZW5kcyIsIm1hcCIsIml0ZW0iLCJmcmllbmQiLCJmcmllbmRfbmFtZSIsInJpZ2h0IiwicG9zdGluZ0xvYWRpbmciLCJyZXF1aXJlQXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE9BQVQsT0FBMkI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFROztBQUFBLGtCQUNRQyxzREFBUSxDQUFDLEVBQUQsQ0FEaEI7QUFBQSxNQUNsQkMsUUFEa0I7QUFBQSxNQUNSQyxXQURROztBQUFBLG9CQUVHQyx3REFBVSxDQUFDQyx1RUFBRCxDQUZiO0FBQUEsTUFFbEJDLE9BRmtCO0FBQUEsTUFFVEMsUUFGUzs7QUFBQSxtQkFHSE4s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OUQsQ0E5RUYsQ0FERixFQXlKRTtBQUFLLGFBQVMsRUFBRTBDLGtFQUFNLENBQUNnQyxLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBekpGLEVBNEpJLE1BQUMsd0VBQUQ7QUFDRSxTQUFLLEVBQUMsYUFEUjtBQUVFLGFBQVMsRUFBRXBHLFNBRmI7QUFHRSxXQUFPLEVBQUU7QUFBQSxhQUFNQyxZQUFZLENBQUMsQ0FBRCxDQUFsQjtBQUFBLEtBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFLE1BQUMsdUVBQUQ7QUFDSSxXQUFPLEVBQUVMLE9BQU8sQ0FBQ3lHLGNBRHJCO0FBRUksYUFBUyxFQUFFN0UsVUFGZjtBQUdJLGNBQVUsRUFBRTBDLFVBSGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixDQTVKSixFQXVLSSxNQUFDLHdFQUFEO0FBQ0UsU0FBSyxFQUFDLGNBRFI7QUFFRSxhQUFTLEVBQUVoRSxnQkFGYjtBQUdFLFdBQU8sRUFBRTtBQUFBLGFBQU1DLG1CQUFtQixDQUFDLENBQUQsQ0FBekI7QUFBQSxLQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRSxNQUFDLDhDQUFEO0FBQWEsWUFBUSxFQUFFZ0UsUUFBdkI7QUFBaUMsV0FBTyxFQUFFdkUsT0FBTyxDQUFDeUcsY0FBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLENBdktKLENBREY7QUFpTEQ7O0dBcmlCUWhILE87O0tBQUFBLE87QUF1aUJNLHFFQUFBaUgsd0VBQVcsQ0FBQ2pILE9BQUQsQ0FBMUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS45OWQ3MzUxZDAzNDJiZjczNzNjNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy9wcm9maWxlLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7IENhbWVyYU91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyBCdXR0b24sIFVwbG9hZCwgbWVzc2FnZSwgSW5wdXQsIFRhYnMsIFJhdGUgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IEFQSSBmcm9tICcuLi8uLi9jb25maWdzL0FQSSc7XHJcbmltcG9ydCBQaG90b1NlY3Rpb24gZnJvbSAnY29tcG9uZW50cy9wcm9maWxlL1Bob3RvU2VjdGlvbic7XHJcbmltcG9ydCBGZWVkUG9zdHMgZnJvbSAnY29tcG9uZW50cy9wcm9maWxlL0ZlZWRQb3N0cyc7XHJcbmltcG9ydCBQb3N0aW5nUG9zdCBmcm9tICdjb21wb25lbnRzL3Byb2ZpbGUvUG9zdGluZ1Bvc3QnO1xyXG5pbXBvcnQgUmF0ZWRTZWN0aW9uIGZyb20gJ2NvbXBvbmVudHMvcHJvZmlsZS9SYXRlZFNlY3Rpb24nO1xyXG5pbXBvcnQgcmVxdWlyZUF1dGggZnJvbSAnaGVscGVycy9ob2MvcmVxdWlyZUF1dGgnO1xyXG5pbXBvcnQgeyBQcm9maWxlQ29udGV4dCB9IGZyb20gJy4vc3RvcmFnZS9Qcm9maWxlQ29udGV4dCc7XHJcbmltcG9ydCB7IHNldExvYWRpbmcsIHNldEZyaWVuZHNEYXRhLCBzZXRBY2NvdW50c0RhdGEgfSBmcm9tICcuL2FjdGlvbnMnO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9uL0F2YXRhcic7XHJcbmltcG9ydCBSYXRpbmcgIGZyb20gJ3JlYWN0LXJhdGluZyc7XHJcbmltcG9ydCBNb2RhbFdyYXBwZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb24vTW9kYWxXcmFwcGVyJztcclxuaW1wb3J0IFBvc3RNb2RhbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Byb2ZpbGUvUG9zdE1vZGFsJztcclxuaW1wb3J0IEVkaXRQcm9maWxlIGZyb20gJy4vZWRpdCc7XHJcblxyXG5mdW5jdGlvbiBQcm9maWxlKHsgYXV0aCB9KSB7XHJcbiAgY29uc3QgW2ZpbGVMaXN0LCBzZXRGaWxlTGlzdCBdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzdG9yYWdlLCBkaXNwYXRjaF0gPSB1c2VDb250ZXh0KFByb2ZpbGVDb250ZXh0KTtcclxuICBjb25zdCBbdGFiLCBzZXRUYWJdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW3Bvc3RNb2RhbCwgc2V0UG9zdE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZWRpdFByb2ZpbGVNb2RhbCwgc2V0RWRpdFByb2ZpbGVNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKCdzdG9yYWdlJywgc3RvcmFnZSwgJ2F1dGgnLCBhdXRoKVxyXG5cclxuICBjb25zdCBnZXRGcmllbmRzID0gYXN5bmMgKHRva2VuLCB3aXRob3V0TG9hZGluZyA9IGZhbHNlKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLndhcm4oYXV0aFNlcnZpY2VzLmF1dGgsIGF1dGhTZXJ2aWNlcy5sb2NhbHN0b3JhZ2UpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKCF3aXRob3V0TG9hZGluZykgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlKSk7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybDogJy9hY2NvdW50cy90aW1lbGluZScsXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG4gICAgICBjb25zb2xlLmxvZygnZ2V0RnJpZW5kc19kYXRhPScsIGRhdGEsICdnZXRGcmllbmRzX3N0YXR1cz0nLCBzdGF0dXMpXHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIGRpc3BhdGNoKHNldEZyaWVuZHNEYXRhKGRhdGEpKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnPT09PT09PT09Jyk7XHJcbiAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSA0MDMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnPT09PT09PT09PT09PT09PT0gUmVmcmVzaCB0b2tlbiAhJyk7XHJcblxyXG4gICAgICAgIGF1dGhTZXJ2aWNlcy5yZWZyZXNoVG9rZW4oZ2V0RnJpZW5kcyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCF3aXRob3V0TG9hZGluZykgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICBpZiAoIXdpdGhvdXRMb2FkaW5nKSBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0QWNjb3VudCA9IGFzeW5jICh0b2tlbiwgd2l0aG91dExvYWRpbmcgPSBmYWxzZSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKCF3aXRob3V0TG9hZGluZykgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlKSk7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBBUEkoe1xyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgdXJsOiAnL2FjY291bnRzJyxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdnZXRBY2NvdW50X2RhdGE9JywgZGF0YSwgJ2dldEFjY291bnRfc3RhdHVzPScsIHN0YXR1cylcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goc2V0QWNjb3VudHNEYXRhKGRhdGEpKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnPT09PT09PT09Jyk7XHJcbiAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSA0MDMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnPT09PT09PT09PT09PT09PT0gUmVmcmVzaCB0b2tlbiAhJyk7XHJcblxyXG4gICAgICAgIGF1dGhTZXJ2aWNlcy5yZWZyZXNoVG9rZW4oZ2V0RnJpZW5kcyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCF3aXRob3V0TG9hZGluZykgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICBpZiAoIXdpdGhvdXRMb2FkaW5nKSBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBjcmVhdGVQb3N0ID0gYXN5bmMgKGRhdGFGb3JSZXF1ZXN0KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKHRydWUsICdwb3N0aW5nJykpO1xyXG5cclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsOiAnL3Bvc3RzJyxcclxuICAgICAgICBkYXRhOiBkYXRhRm9yUmVxdWVzdCxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhLCBzdGF0dXMpXHJcblxyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICBnZXRBY2NvdW50KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhPy5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSwgJ3Bvc3RpbmcnKSk7XHJcblxyXG4gICAgICByZXR1cm4gYXdhaXQgcmVxdWVzdDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UsICdwb3N0aW5nJykpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJhdGVQb3N0ID0gYXN5bmMgKHR5cGUsIHBvc3RJZCwgcmF0ZSkgPT4ge2NvbnNvbGUubG9nKHR5cGUsIHBvc3RJZCwgcmF0ZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKHRydWUsICdwb3N0aW5nJykpO1xyXG4gICAgICBsZXQgdXJsID0gJyc7XHJcblxyXG4gICAgICBpZiAodHlwZSA9PT0gJ1Bob3RvJykge1xyXG4gICAgICAgIHVybCA9ICcvcGhvdG9zL3JhdGUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdWaWRlb0NsaXAnKSB7XHJcbiAgICAgICAgdXJsID0gJy92aWRlby1jbGlwcy9yYXRlJztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnSXRlbScpIHtcclxuICAgICAgICB1cmwgPSAnL2l0ZW1zL3JhdGUnO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdQb3N0Jykge1xyXG4gICAgICAgIHVybCA9ICcvcG9zdHMvcmF0ZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0NvbW1lbnQnKSB7XHJcbiAgICAgICAgdXJsID0gJy9jb21tZW50cy9yYXRlJztcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHJhdGVkOiBwb3N0SWQsXHJcbiAgICAgICAgICByYXRpbmc6IHJhdGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcXVlc3Q7XHJcblxyXG4gICAgICBjb25zb2xlLndhcm4oJ3JhdGVQb3N0JywgZGF0YSwgc3RhdHVzKTtcclxuXHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgIGdldEFjY291bnQoKTtcclxuICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoJ0V2YWx1YXRlIHN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UsICdwb3N0aW5nJykpO1xyXG5cclxuICAgICAgcmV0dXJuIGF3YWl0IHJlcXVlc3Q7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlLCAncG9zdGluZycpKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0RnJpZW5kcyhhdXRoLnRva2VuKTtcclxuICAgIGdldEFjY291bnQoYXV0aC50b2tlbik7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCB7IGFjY291bnREYXRhIH0gPSBzdG9yYWdlXHJcblxyXG4gIGNvbnN0IGlzTW9iaWxlID0gd2luZG93Lm1hdGNoTWVkaWEoJ29ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCknKS5tYXRjaGVzXHJcblxyXG4gIGNvbnN0IGltYWdlVXBsb2FkUGFyYW1zID0ge1xyXG4gICAgb25SZW1vdmU6IGZpbGUgPT4ge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGZpbGVMaXN0LmluZGV4T2YoZmlsZSk7XHJcbiAgICAgIGNvbnN0IG5ld0ZpbGVMaXN0ID0gZmlsZUxpc3Quc2xpY2UoKTtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gbmV3RmlsZUxpc3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgc2V0RmlsZUxpc3QocmVzdWx0KVxyXG4gICAgfSxcclxuICAgIGJlZm9yZVVwbG9hZDogZmlsZSA9PiB7XHJcbiAgICAgIHNldEZpbGVMaXN0KFsuLi5maWxlTGlzdCwgZmlsZV0pXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBmaWxlTGlzdCxcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVVcGxvYWRDb3ZlciA9IGFzeW5jICh7IGZpbGVMaXN0IH0pID0+IHtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmaWxlTGlzdC5mb3JFYWNoKGZpbGUgPT4ge1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Byb2ZpbGVCYWNrZ3JvdW5kSW1hZ2UnLCBmaWxlLm9yaWdpbkZpbGVPYmopO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgIG1ldGhvZDogJ3B1dCcsXHJcbiAgICAgIHVybDogJy9hY2NvdW50cycsXHJcbiAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhmaWxlTGlzdCwgZGF0YSwgc3RhdHVzKVxyXG5cclxuICAgIGdldEFjY291bnQoYXV0aC50b2tlbik7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVVcGxvYWRBdmF0YXIgPSBhc3luYyAoeyBmaWxlTGlzdCB9KSA9PiB7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZmlsZUxpc3QuZm9yRWFjaChmaWxlID0+IHtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdwcm9maWxlUGhvdG8nLCBmaWxlLm9yaWdpbkZpbGVPYmopO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IEFQSSh7XHJcbiAgICAgIG1ldGhvZDogJ3B1dCcsXHJcbiAgICAgIHVybDogJy9hY2NvdW50cycsXHJcbiAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICBoZWFkZXJzOiB7ICd4LXRva2VuJzogYXV0aC50b2tlbiB9LFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVxdWVzdDtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhmaWxlTGlzdCwgZGF0YSwgc3RhdHVzKVxyXG5cclxuICAgIGdldEFjY291bnQoYXV0aC50b2tlbik7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjb3ZlclVybCA9IGFjY291bnREYXRhICE9PSBudWxsICYmIGFjY291bnREYXRhICE9PSB1bmRlZmluZWQgPyBgdXJsKGh0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyR7YWNjb3VudERhdGEucHJvZmlsZUJhY2tncm91bmRJbWFnZT8uc3JjfSlgIDogbnVsbFxyXG4gIGNvbnN0IHByb2ZpbGVVcmwgPSBhY2NvdW50RGF0YSAhPT0gbnVsbCAmJiBhY2NvdW50RGF0YSAhPT0gdW5kZWZpbmVkID8gYCR7YWNjb3VudERhdGEucHJvZmlsZVBob3RvPy5zcmN9YCA6IG51bGxcclxuICBjb25zdCByb3VuZFJhdGluZyA9IE1hdGgucm91bmQoYWNjb3VudERhdGE/LnJhdGluZyB8fCAwKVxyXG4gIFxyXG4gIGNvbnN0IG1vZGFsUG9wdXAgPSAoKSA9PiB7XHJcbiAgICBzZXRQb3N0TW9kYWwodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBvblVwZGF0ZSA9IGFzeW5jIChkYXRhRm9yUmVxdWVzdCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlKSk7XHJcblxyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgQVBJKHtcclxuICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgIHVybDogJy9hY2NvdW50cycsXHJcbiAgICAgICAgZGF0YTogZGF0YUZvclJlcXVlc3QsXHJcbiAgICAgICAgaGVhZGVyczogeyAneC10b2tlbic6IGF1dGgudG9rZW4gfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXF1ZXN0O1xyXG5cclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgZ2V0QWNjb3VudCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZGF0YT8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdyb25nJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKTtcclxuXHJcbiAgICAgIHJldHVybiBhd2FpdCByZXF1ZXN0O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIHJldHVybiAoXHJcbiAgLy8gICA8ZGl2PlxyXG4gIC8vICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuY29udGFpbmVyLCBzdHlsZXMudXNlcl9wcm9maWxlKX0+XHJcbiAgLy8gICAgICAgPGRpdlxyXG4gIC8vICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY292ZXJ9XHJcbiAgLy8gICAgICAgICBzdHlsZT17Y292ZXJVcmwgIT09IG51bGwgPyB7IGJhY2tncm91bmRJbWFnZTogY292ZXJVcmwgfSA6IG51bGx9XHJcbiAgLy8gICAgICAgPlxyXG4gIC8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGFuZ2VfY292ZXJ9PlxyXG4gIC8vICAgICAgICAgICA8VXBsb2FkIHsuLi5pbWFnZVVwbG9hZFBhcmFtc30gb25DaGFuZ2U9e2hhbmRsZVVwbG9hZENvdmVyfT5cclxuICAvLyAgICAgICAgICAgICA8QnV0dG9uIGdob3N0IHR5cGU9XCJkYXNoZWRcIj5cclxuICAvLyAgICAgICAgICAgICAgIENoYW5nZSBjb3ZlclxyXG4gIC8vICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gIC8vICAgICAgICAgICA8L1VwbG9hZD5cclxuICAvLyAgICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICAgIDwvZGl2PlxyXG5cclxuICAvLyAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGV9PlxyXG4gIC8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9PlxyXG4gIC8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcl9pbWFnZX0+XHJcbiAgLy8gICAgICAgICAgICAgPEF2YXRhclxyXG4gIC8vICAgICAgICAgICAgICAgc2l6ZT17aXNNb2JpbGUgPyAxMDAgOiAxNDB9XHJcbiAgLy8gICAgICAgICAgICAgICB1cmw9e3Byb2ZpbGVVcmx9XHJcbiAgLy8gICAgICAgICAgICAgICB0ZXh0PXthY2NvdW50RGF0YT8udXNlcm5hbWV9XHJcbiAgLy8gICAgICAgICAgICAgLz5cclxuICAvLyAgICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhbmdlX2F2YXRhcn0+XHJcbiAgLy8gICAgICAgICAgICAgPFVwbG9hZCB7Li4uaW1hZ2VVcGxvYWRQYXJhbXN9IG9uQ2hhbmdlPXtoYW5kbGVVcGxvYWRBdmF0YXJ9PlxyXG4gIC8vICAgICAgICAgICAgICAgPENhbWVyYU91dGxpbmVkIGNsYXNzTmFtZT17c3R5bGVzLmNoYW5nZV9hdmF0YXJfaW1hZ2V9IC8+XHJcbiAgLy8gICAgICAgICAgICAgPC9VcGxvYWQ+XHJcbiAgLy8gICAgICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICAgICAgPC9kaXY+XHJcblxyXG4gIC8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyX2NvbnRlbnR9PlxyXG4gIC8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfaW5mb30+XHJcbiAgLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZV9zZWN0aW9ufT5cclxuICAvLyAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVmdF9zaWRlfT5cclxuICAvLyAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZnVsbG5hbWV9PlxyXG4gIC8vICAgICAgICAgICAgICAgICAgIDxzcGFuPntgJHthY2NvdW50RGF0YT8uZmlyc3ROYW1lfSAke2FjY291bnREYXRhPy5sYXN0TmFtZX1gfTwvc3Bhbj5cclxuICAvLyAgICAgICAgICAgICAgICAgPC9wPlxyXG4gIC8vICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0X3NpZGV9PlxyXG4gIC8vICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5yYXRpbmd9PlxyXG4gIC8vICAgICAgICAgICAgICAgICAgIDxSYXRlXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgYWxsb3dIYWxmXHJcbiAgXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3JvdW5kUmF0aW5nfVxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICcjZmFkYjE0JywgZm9udFNpemU6ICcxZW0nIH19XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgLz5cclxuICAvLyAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5yYXRpbmdfdGV4dH0+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICB7cm91bmRSYXRpbmd9XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gIC8vICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgLy8gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgICAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgICAgICAgICB7LyogPT09PSAqL31cclxuICAvLyAgICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm90dG9tX3NlY3Rpb259PlxyXG4gIC8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVmdF9zaWRlfT5cclxuICAvLyAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcl9hY3Rpb25zfT5cclxuICAvLyAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb2xsb3dfYWN0aW9uc30+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZm9sbG93ZXJzfT5cclxuICAvLyAgICAgICAgICAgICAgICAgICAgIHthY2NvdW50RGF0YT8uZm9sbG93ZXJzQ291bnR9IGZvbGxvd2Vyc1xyXG4gIC8vICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAvLyAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmZvbGxvd2Vyc19mb3Jtb2JpbGV9PlxyXG4gIC8vICAgICAgICAgICAgICAgICAgIHthY2NvdW50RGF0YT8uZm9sbG93ZXJzQ291bnR9IGZvbGxvd2VycyAvIHthY2NvdW50RGF0YT8uZm9sbG93aW5nQ291bnR9eycgJ31cclxuICAvLyAgICAgICAgICAgICAgICAgICBmb2xsb3dpbmdcclxuICAvLyAgICAgICAgICAgICAgICAgPC9wPlxyXG4gIC8vICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yaWdodF9zaWRlfT5cclxuICAvLyAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcl9hY3Rpb25zfT5cclxuICAvLyAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHNoYXBlPVwicm91bmRcIiBzaXplPVwibGFyZ2VcIj5cclxuICAvLyAgICAgICAgICAgICAgICAgICBFZGl0IHByb2ZpbGVcclxuICAvLyAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgLy8gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgICAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgLy8gICAgIDwvZGl2PlxyXG5cclxuICAvLyAgICAgPGRpdlxyXG4gIC8vICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcclxuICAvLyAgICAgICAgIHN0eWxlcy5jb250YWluZXIsXHJcbiAgLy8gICAgICAgICBzdHlsZXMuY29udGVudCxcclxuICAvLyAgICAgICAgIHN0eWxlcy5jb250YWluZXJfYmdcclxuICAvLyAgICAgICApfVxyXG4gIC8vICAgICA+XHJcbiAgLy8gICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlX2NvbnRlbnRzfT5cclxuICAvLyAgICAgICAgIDxQaG90b1NlY3Rpb24gdXNlcj17YWNjb3VudERhdGF9IG9uUmF0ZVBvc3Q9e3JhdGVQb3N0fSAvPlxyXG4gIC8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmNvbnRhaW5lcl9iZywgc3R5bGVzLnNlY3Rpb24pfT5cclxuICAvLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9uX3RpdGxlfT5cclxuICAvLyAgICAgICAgICAgICA8cD5GcmllbmRzPC9wPlxyXG4gIC8vICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cImxpbmtcIj5BbGwgZnJpZW5kczwvQnV0dG9uPlxyXG4gIC8vICAgICAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgICAgICAgPGRpdlxyXG4gIC8vICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcclxuICAvLyAgICAgICAgICAgICAgIHN0eWxlcy5mcmllbmRzX2xpc3QsXHJcbiAgLy8gICAgICAgICAgICAgICBzdHlsZXMuc2VjdGlvbnNfY29udGVudFxyXG4gIC8vICAgICAgICAgICAgICl9XHJcbiAgLy8gICAgICAgICAgID5cclxuICAvLyAgICAgICAgICAgICB7YWNjb3VudERhdGE/LmZyaWVuZHMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gIC8vICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAvLyAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mcmllbmR9IGtleT17aW5kZXh9PlxyXG4gIC8vICAgICAgICAgICAgICAgICAgIDxBdmF0YXJcclxuICAvLyAgICAgICAgICAgICAgICAgICAgIHNpemU9ezgwfVxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgdXJsPXtpdGVtPy5wcm9maWxlUGhvdG99XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICB0ZXh0PXtpdGVtPy51c2VybmFtZX1cclxuICAvLyAgICAgICAgICAgICAgICAgICAvPlxyXG4gIC8vICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZnJpZW5kX25hbWV9PlxyXG4gIC8vICAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtLmZpcnN0TmFtZX0ge2l0ZW0ubGFzdE5hbWV9PC9zcGFuPlxyXG4gIC8vICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgICAgICAgICAgICk7XHJcbiAgLy8gICAgICAgICAgICAgfSl9XHJcbiAgLy8gICAgICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgICA8UmF0ZWRTZWN0aW9uIHVzZXI9e2FjY291bnREYXRhfSBvblJhdGVQb3N0PXtyYXRlUG9zdH0gLz5cclxuICAvLyAgICAgICA8L2Rpdj5cclxuXHJcbiAgLy8gICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpdml0eX0+XHJcbiAgLy8gICAgICAgICA8UG9zdGluZ1Bvc3RcclxuICAvLyAgICAgICAgICAgbG9hZGluZz17c3RvcmFnZS5wb3N0aW5nTG9hZGluZ31cclxuICAvLyAgICAgICAgICAgb25Qb3N0aW5nPXtjcmVhdGVQb3N0fVxyXG4gIC8vICAgICAgICAgLz5cclxuICAvLyAgICAgICAgIDxGZWVkUG9zdHNcclxuICAvLyAgICAgICAgICAgdXNlcj17YWNjb3VudERhdGF9XHJcbiAgLy8gICAgICAgICAgIG9uUmF0ZVBvc3Q9e3JhdGVQb3N0fVxyXG4gIC8vICAgICAgICAgICBvblVwZGF0ZVRpbWVsaW5lPXtnZXRBY2NvdW50fVxyXG4gIC8vICAgICAgICAgLz5cclxuICAvLyAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgPC9kaXY+XHJcbiAgLy8gICA8L2Rpdj5cclxuICAvLyApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnR9PlxyXG4gICAgICAgIHt0eXBlb2YgYWNjb3VudERhdGEgIT09ICd1bmRlZmluZWQnP1xyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn0+XHJcbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcl9pbWFnZX0+XHJcbiAgICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgICBzaXplPXtpc01vYmlsZSA/IDEwMCA6IDE0MH1cclxuICAgICAgICAgICAgICAgICAgdXJsPXtwcm9maWxlVXJsfVxyXG4gICAgICAgICAgICAgICAgICB0ZXh0PXthY2NvdW50RGF0YT8udXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGFuZ2VfYXZhdGFyfT5cclxuICAgICAgICAgICAgICA8VXBsb2FkIHsuLi5pbWFnZVVwbG9hZFBhcmFtc30gb25DaGFuZ2U9e2hhbmRsZVVwbG9hZEF2YXRhcn0+XHJcbiAgICAgICAgICAgICAgICA8Q2FtZXJhT3V0bGluZWQgY2xhc3NOYW1lPXtzdHlsZXMuY2hhbmdlX2F2YXRhcl9pbWFnZX0gLz5cclxuICAgICAgICAgICAgICA8L1VwbG9hZD5cclxuICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcl9jb250ZW50fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyX2luZm99PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVfc2VjdGlvbn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnRfc2lkZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmZ1bGxuYW1lfSBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSBvbkNsaWNrPXsoKSA9PiBzZXRFZGl0UHJvZmlsZU1vZGFsKHRydWUpfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57YCR7YWNjb3VudERhdGE/LmZpcnN0TmFtZX0gJHthY2NvdW50RGF0YT8ubGFzdE5hbWV9YH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yaWdodF9zaWRlfT5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucmF0aW5nfT5cclxuICAgICAgICAgICAgICAgICAgICA8UmF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtyb3VuZFJhdGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnI2ZhZGIxNCcsIGZvbnRTaXplOiAnMzBweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnJhdGluZ190ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtyb3VuZFJhdGluZ31cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHsvKiA9PT09ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm90dG9tX3NlY3Rpb259PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVmdF9zaWRlfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcl9hY3Rpb25zfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb2xsb3dfYWN0aW9uc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZm9sbG93ZXJzfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHthY2NvdW50RGF0YT8uZm9sbG93ZXJzQ291bnR9IGZvbGxvd2Vyc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmZvbGxvd2Vyc19mb3Jtb2JpbGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHthY2NvdW50RGF0YT8uZm9sbG93ZXJzQ291bnR9IGZvbGxvd2VycyAvIHthY2NvdW50RGF0YT8uZm9sbG93aW5nQ291bnR9eycgJ31cclxuICAgICAgICAgICAgICAgICAgICBmb2xsb3dpbmdcclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yaWdodF9zaWRlfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcl9hY3Rpb25zfT5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHNoYXBlPVwicm91bmRcIiBzaXplPVwibGFyZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICBFZGl0IHByb2ZpbGVcclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgOlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBzaGFkb3cgcm91bmRlZC1tZCBwLTQgbWF4LXctc20gdy1mdWxsIG14LWF1dG9cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlLXB1bHNlIGZsZXggc3BhY2UteC00XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgYmctZ3JheS00MDAgaC0xMiB3LTEyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBzcGFjZS15LTQgcHktMVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNCBiZy1ncmF5LTQwMCByb3VuZGVkIHctMy80XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTQgYmctZ3JheS00MDAgcm91bmRlZFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC00IGJnLWdyYXktNDAwIHJvdW5kZWQgdy01LzZcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVfY29udGVudH0+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBib3JkZXItYlwiPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdtci0xJywgc3R5bGVzLnRhYil9IG9uQ2xpY2s9eygpID0+IHNldFRhYigxKX0gc3R5bGU9e3sgYm9yZGVyQm90dG9tOnRhYj09MT8nNXB4IHNvbGlkIHdoaXRlJzonbm9uZScgfX0+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHB5LTIgcHgtNCB0ZXh0LWJsdWUtNTAwIGhvdmVyOnRleHQtYmx1ZS04MDAgZm9udC1zZW1pYm9sZFwiPkFDVElWSVRZPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdtci0xJywgc3R5bGVzLnRhYil9IG9uQ2xpY2s9eygpID0+IHNldFRhYigyKX0gc3R5bGU9e3sgYm9yZGVyQm90dG9tOnRhYj09Mj8nNXB4IHNvbGlkIHdoaXRlJzonbm9uZScgfX0+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHB5LTIgcHgtNCB0ZXh0LWJsdWUtNTAwIGhvdmVyOnRleHQtYmx1ZS04MDAgZm9udC1zZW1pYm9sZFwiPkdyb3VwczwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnbXItMScsIHN0eWxlcy50YWIpfSBvbkNsaWNrPXsoKSA9PiBzZXRUYWIoNil9IHN0eWxlPXt7IGJvcmRlckJvdHRvbTp0YWI9PTY/JzVweCBzb2xpZCB3aGl0ZSc6J25vbmUnIH19PlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBweS0yIHB4LTQgdGV4dC1ibHVlLTUwMCBob3Zlcjp0ZXh0LWJsdWUtODAwIGZvbnQtc2VtaWJvbGRcIj5NYXJrZXRzPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdtci0xJywgc3R5bGVzLnRhYil9IG9uQ2xpY2s9eygpID0+IHNldFRhYigzKX0gc3R5bGU9e3sgYm9yZGVyQm90dG9tOnRhYj09Mz8nNXB4IHNvbGlkIHdoaXRlJzonbm9uZScgfX0+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHB5LTIgcHgtNCB0ZXh0LWJsdWUtNTAwIGhvdmVyOnRleHQtYmx1ZS04MDAgZm9udC1zZW1pYm9sZFwiPlBIT1RPUzwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnbXItMScsIHN0eWxlcy50YWIpfSBvbkNsaWNrPXsoKSA9PiBzZXRUYWIoNCl9IHN0eWxlPXt7IGJvcmRlckJvdHRvbTp0YWI9PTQ/JzVweCBzb2xpZCB3aGl0ZSc6J25vbmUnIH19PlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBweS0yIHB4LTQgdGV4dC1ibHVlLTUwMCBob3Zlcjp0ZXh0LWJsdWUtODAwIGZvbnQtc2VtaWJvbGRcIj5SQVRFUzwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnbXItMScsIHN0eWxlcy50YWIpfSBvbkNsaWNrPXsoKSA9PiBzZXRUYWIoNSl9IHN0eWxlPXt7IGJvcmRlckJvdHRvbTp0YWI9PTU/JzVweCBzb2xpZCB3aGl0ZSc6J25vbmUnIH19PlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBweS0yIHB4LTQgdGV4dC1ibHVlLTUwMCBob3Zlcjp0ZXh0LWJsdWUtODAwIGZvbnQtc2VtaWJvbGRcIj5GUklFTkRTPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICAgIHt0YWI9PTE/XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjdGl2aXR5fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jcmVhdGVQb3N0RGl2fT5cclxuICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgIHNpemU9ezUwfVxyXG4gICAgICAgICAgICAgICAgICB1cmw9e3Byb2ZpbGVVcmx9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuY3JlYXRlUG9zdElucHV0fSBwbGFjZWhvbGRlcj1cIldoYXQncyBvbiB5b3VyIG1pbmQ/XCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e21vZGFsUG9wdXB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDwvaW5wdXQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8RmVlZFBvc3RzXHJcbiAgICAgICAgICAgICAgdXNlcj17YWNjb3VudERhdGF9XHJcbiAgICAgICAgICAgICAgb25SYXRlUG9zdD17cmF0ZVBvc3R9XHJcbiAgICAgICAgICAgICAgb25VcGRhdGVUaW1lbGluZT17Z2V0QWNjb3VudH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PjpudWxsfVxyXG4gICAgICAgICAge3RhYj09NT9cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxyXG4gICAgICAgICAgICAgIHN0eWxlcy5mcmllbmRzX2xpc3QsXHJcbiAgICAgICAgICAgICAgc3R5bGVzLnNlY3Rpb25zX2NvbnRlbnRcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2FjY291bnREYXRhPy5mcmllbmRzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mcmllbmR9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT17ODB9XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsPXtpdGVtPy5wcm9maWxlUGhvdG99XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dD17aXRlbT8udXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZnJpZW5kX25hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtLmZpcnN0TmFtZX0ge2l0ZW0ubGFzdE5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2l0ZW0ucmF0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICcjZmFkYjE0JywgZm9udFNpemU6ICcxNXB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj46bnVsbFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAge3RhYj09Mz9cclxuICAgICAgICAgICAgPFBob3RvU2VjdGlvbiB1c2VyPXthY2NvdW50RGF0YX0gb25SYXRlUG9zdD17cmF0ZVBvc3R9IC8+Om51bGxcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHt0YWI9PTQ/XHJcbiAgICAgICAgICAgIDxSYXRlZFNlY3Rpb24gdXNlcj17YWNjb3VudERhdGF9IG9uUmF0ZVBvc3Q9e3JhdGVQb3N0fSAvPjpudWxsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0fT5cclxuICAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgICA8TW9kYWxXcmFwcGVyXHJcbiAgICAgICAgICB0aXRsZT1cIkNyZWF0ZSBQb3N0XCJcclxuICAgICAgICAgIHNob3dNb2RhbD17cG9zdE1vZGFsfVxyXG4gICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0UG9zdE1vZGFsKDApfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxQb3N0aW5nUG9zdFxyXG4gICAgICAgICAgICAgIGxvYWRpbmc9e3N0b3JhZ2UucG9zdGluZ0xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgb25Qb3N0aW5nPXtjcmVhdGVQb3N0fVxyXG4gICAgICAgICAgICAgIG1vZGFsUG9wdXA9e21vZGFsUG9wdXB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTW9kYWxXcmFwcGVyPlxyXG4gICAgICAgIDxNb2RhbFdyYXBwZXJcclxuICAgICAgICAgIHRpdGxlPVwiRWRpdCBQcm9maWxlXCJcclxuICAgICAgICAgIHNob3dNb2RhbD17ZWRpdFByb2ZpbGVNb2RhbH1cclxuICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldEVkaXRQcm9maWxlTW9kYWwoMCl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEVkaXRQcm9maWxlIG9uVXBkYXRlPXtvblVwZGF0ZX0gbG9hZGluZz17c3RvcmFnZS5wb3N0aW5nTG9hZGluZ30vPlxyXG4gICAgICAgIDwvTW9kYWxXcmFwcGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZXF1aXJlQXV0aChQcm9maWxlKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==