webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/profile/PhotoList.js":
/*!*****************************************!*\
  !*** ./components/profile/PhotoList.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_modal_hook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-modal-hook */ "./node_modules/react-modal-hook/dist/index.es.js");
/* harmony import */ var _PhotosModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PhotosModal */ "./components/profile/PhotosModal.js");
/* harmony import */ var _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/photos_modal.module.scss */ "./components/profile/styles/photos_modal.module.scss");
/* harmony import */ var _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var containers_Photos_storage_PhotoContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! containers/Photos/storage/PhotoContext */ "./containers/Photos/storage/PhotoContext.js");



var _this = undefined,
    _jsxFileName = "D:\\Freeskies-development-\\components\\profile\\PhotoList.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









var ImageList = function ImageList(_ref) {
  _s();

  var images = _ref.images,
      onRatePost = _ref.onRatePost,
      otherUser = _ref.otherUser,
      deletePhoto = _ref.deletePhoto,
      likeAction = _ref.likeAction,
      shareAction = _ref.shareAction,
      onUpdateTimeline = _ref.onUpdateTimeline,
      auth = _ref.auth;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      photoIndex = _useState[0],
      setPhotoIndex = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(images),
      imageData = _useState2[0],
      setImageData = _useState2[1];

  var _useModal = Object(react_modal_hook__WEBPACK_IMPORTED_MODULE_4__["useModal"])(function (_ref2) {
    var open = _ref2["in"];
    return __jsx(containers_Photos_storage_PhotoContext__WEBPACK_IMPORTED_MODULE_9__["PhotosProvider"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 5
      }
    }, __jsx(_PhotosModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "Photo detail",
      showModal: open,
      onClose: hideModal,
      data: imageData,
      onRatePost: onRatePost,
      photoIndex: photoIndex,
      profilePhoto: true,
      likeAction: likeAction,
      shareAction: shareAction,
      onUpdateTimeline: onUpdateTimeline,
      auth: auth,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 7
      }
    }));
  }, [imageData]),
      _useModal2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useModal, 2),
      showModal = _useModal2[0],
      hideModal = _useModal2[1];

  var i = 1;

  var ImageSorting = function ImageSorting(activeImageId) {
    var carouselData = [];
    var firstData = [];
    var secondData = [];

    for (var i = 0; i < data.length; i++) {
      if (imageData[i].src === activeImageId) {
        firstData = imageData.slice(i, imageData.length);
        break;
      }

      secondData.push(imageData[i]);
    }

    carouselData = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(firstData), secondData);
    setImageData(carouselData);
  };

  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.photos, _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.sections_content),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  }, images.map(function (item, index) {
    var menu = __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Menu"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 11
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Menu"].Item, {
      onClick: function onClick() {
        return deletePhoto(item.id);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["DeleteOutlined"], {
      style: {
        fontSize: 20
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 15
      }
    }), " ", __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 58
      }
    }, "Delete Photo")));

    return __jsx("div", {
      className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.photo,
      key: index,
      style: {
        position: 'relative',
        marginBottom: 20
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 11
      }
    }, __jsx("img", {
      src: "https://www.freeskies.com/static/".concat(item.blob_tn),
      alt: "",
      style: {
        width: '100%',
        height: '100%'
      },
      onClick: function onClick() {
        setPhotoIndex(index);
        showModal();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 13
      }
    }), !otherUser ? __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Dropdown"], {
      overlay: menu,
      trigger: ['click'],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: _styles_photos_modal_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.editWrapper,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["EditFilled"], {
      style: {
        color: 'white',
        position: 'relative',
        display: 'block',
        marginTop: 4
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 19
      }
    }))) : null);
  }));
};

_s(ImageList, "G3pUsGl0ZXH6BBwUPcaYX7MdniY=", false, function () {
  return [react_modal_hook__WEBPACK_IMPORTED_MODULE_4__["useModal"]];
});

_c = ImageList;
/* harmony default export */ __webpack_exports__["default"] = (ImageList);

var _c;

$RefreshReg$(_c, "ImageList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlL1Bob3RvTGlzdC5qcyJdLCJuYW1lcyI6WyJJbWFnZUxpc3QiLCJpbWFnZXMiLCJvblJhdGVQb3N0Iiwib3RoZXJVc2VyIiwiZGVsZXRlUGhvdG8iLCJsaWtlQWN0aW9uIiwic2hhcmVBY3Rpb24iLCJvblVwZGF0ZVRpbWVsaW5lIiwiYXV0aCIsInVzZVN0YXRlIiwicGhvdG9JbmRleCIsInNldFBob3RvSW5kZXgiLCJpbWFnZURhdGEiLCJzZXRJbWFnZURhdGEiLCJ1c2VNb2RhbCIsIm9wZW4iLCJoaWRlTW9kYWwiLCJzaG93TW9kYWwiLCJpIiwiSW1hZ2VTb3J0aW5nIiwiYWN0aXZlSW1hZ2VJZCIsImNhcm91c2VsRGF0YSIsImZpcnN0RGF0YSIsInNlY29uZERhdGEiLCJkYXRhIiwibGVuZ3RoIiwic3JjIiwic2xpY2UiLCJwdXNoIiwiY2xhc3NuYW1lcyIsInN0eWxlcyIsInBob3RvcyIsInNlY3Rpb25zX2NvbnRlbnQiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJtZW51IiwiaWQiLCJmb250U2l6ZSIsInBob3RvIiwicG9zaXRpb24iLCJtYXJnaW5Cb3R0b20iLCJibG9iX3RuIiwid2lkdGgiLCJoZWlnaHQiLCJlZGl0V3JhcHBlciIsImNvbG9yIiwiZGlzcGxheSIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BU1Y7QUFBQTs7QUFBQSxNQVJOQyxNQVFNLFFBUk5BLE1BUU07QUFBQSxNQVBOQyxVQU9NLFFBUE5BLFVBT007QUFBQSxNQU5OQyxTQU1NLFFBTk5BLFNBTU07QUFBQSxNQUxOQyxXQUtNLFFBTE5BLFdBS007QUFBQSxNQUpOQyxVQUlNLFFBSk5BLFVBSU07QUFBQSxNQUhOQyxXQUdNLFFB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ODQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7IHVzZU1vZGFsIH0gZnJvbSAncmVhY3QtbW9kYWwtaG9vayc7XHJcbmltcG9ydCBQaG90b3NNb2RhbCBmcm9tICcuL1Bob3Rvc01vZGFsJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy9waG90b3NfbW9kYWwubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyBSb3csIENvbCwgRHJvcGRvd24sIE1lbnUgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgQ2FtZXJhT3V0bGluZWQsIEVkaXRGaWxsZWQsIERvd25PdXRsaW5lZCwgRGVsZXRlT3V0bGluZWQgIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyBQaG90b3NQcm92aWRlciB9ICBmcm9tICdjb250YWluZXJzL1Bob3Rvcy9zdG9yYWdlL1Bob3RvQ29udGV4dCc7XHJcblxyXG5jb25zdCBJbWFnZUxpc3QgPSAoeyBcclxuICBpbWFnZXMsIFxyXG4gIG9uUmF0ZVBvc3QsIFxyXG4gIG90aGVyVXNlciwgXHJcbiAgZGVsZXRlUGhvdG8sIFxyXG4gIGxpa2VBY3Rpb24sIFxyXG4gIHNoYXJlQWN0aW9uLCBcclxuICBvblVwZGF0ZVRpbWVsaW5lLCBcclxuICBhdXRoXHJcbiAgfSkgPT4ge1xyXG5cclxuICBjb25zdCBbcGhvdG9JbmRleCwgc2V0UGhvdG9JbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbaW1hZ2VEYXRhLCBzZXRJbWFnZURhdGFdID0gdXNlU3RhdGUoaW1hZ2VzKTtcclxuICBjb25zdCBbc2hvd01vZGFsLCBoaWRlTW9kYWxdID0gdXNlTW9kYWwoKHsgaW46IG9wZW4gfSkgPT4gKFxyXG4gICAgPFBob3Rvc1Byb3ZpZGVyPlxyXG4gICAgICA8UGhvdG9zTW9kYWxcclxuICAgICAgICB0aXRsZT1cIlBob3RvIGRldGFpbFwiXHJcbiAgICAgICAgc2hvd01vZGFsPXtvcGVufVxyXG4gICAgICAgIG9uQ2xvc2U9e2hpZGVNb2RhbH1cclxuICAgICAgICBkYXRhPXtpbWFnZURhdGF9XHJcbiAgICAgICAgb25SYXRlUG9zdD17b25SYXRlUG9zdH1cclxuICAgICAgICBwaG90b0luZGV4PXtwaG90b0luZGV4fVxyXG4gICAgICAgIHByb2ZpbGVQaG90bz17dHJ1ZX1cclxuICAgICAgICBsaWtlQWN0aW9uPXtsaWtlQWN0aW9ufVxyXG4gICAgICAgIHNoYXJlQWN0aW9uPXtzaGFyZUFjdGlvbn1cclxuICAgICAgICBvblVwZGF0ZVRpbWVsaW5lPXtvblVwZGF0ZVRpbWVsaW5lfVxyXG4gICAgICAgIGF1dGg9e2F1dGh9XHJcbiAgICAgIC8+XHJcbiAgICA8L1Bob3Rvc1Byb3ZpZGVyPlxyXG4gICksIFtpbWFnZURhdGFdKTtcclxuXHJcbiAgdmFyIGk9MTtcclxuXHJcbiAgY29uc3QgSW1hZ2VTb3J0aW5nID0gKGFjdGl2ZUltYWdlSWQpID0+IHtcclxuICAgIGxldCBjYXJvdXNlbERhdGEgPSBbXTtcclxuICAgIGxldCBmaXJzdERhdGEgPSBbXTtcclxuICAgIGxldCBzZWNvbmREYXRhID0gW107XHJcblxyXG4gICAgZm9yKHZhciBpPTA7IGk8ZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZihpbWFnZURhdGFbaV0uc3JjID09PSBhY3RpdmVJbWFnZUlkKSB7XHJcbiAgICAgICAgZmlyc3REYXRhID0gaW1hZ2VEYXRhLnNsaWNlKGksIGltYWdlRGF0YS5sZW5ndGgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIHNlY29uZERhdGEucHVzaChpbWFnZURhdGFbaV0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjYXJvdXNlbERhdGEgPSBbLi4uZmlyc3REYXRhLCAuLi5zZWNvbmREYXRhXTtcclxuICAgIHNldEltYWdlRGF0YShjYXJvdXNlbERhdGEpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5waG90b3MsIHN0eWxlcy5zZWN0aW9uc19jb250ZW50KX0+XHJcbiAgICAgIHtpbWFnZXMubWFwKChpdGVtLCBpbmRleCkgPT4geyBcclxuICAgICAgICBjb25zdCBtZW51ID0gKFxyXG4gICAgICAgICAgPE1lbnU+XHJcbiAgICAgICAgICAgIDxNZW51Lkl0ZW0gb25DbGljaz17KCkgPT4gZGVsZXRlUGhvdG8oaXRlbS5pZCl9PlxyXG4gICAgICAgICAgICAgIDxEZWxldGVPdXRsaW5lZCBzdHlsZT17eyBmb250U2l6ZTogMjAgfX0vPiA8c3Bhbj5EZWxldGUgUGhvdG88L3NwYW4+XHJcbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG99IGtleT17aW5kZXh9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBtYXJnaW5Cb3R0b206IDIwfX0+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9zdGF0aWMvJHtpdGVtLmJsb2JfdG59YH0gYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnIH19IFxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyBzZXRQaG90b0luZGV4KGluZGV4KTsgc2hvd01vZGFsKCkgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHshb3RoZXJVc2VyP1xyXG4gICAgICAgICAgICAgIDxEcm9wZG93biBvdmVybGF5PXttZW51fSB0cmlnZ2VyPXtbJ2NsaWNrJ119PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lZGl0V3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICAgIDxFZGl0RmlsbGVkIHN0eWxlPXt7IFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiA0XHJcbiAgICAgICAgICAgICAgICAgIH19Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgIDpudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlTGlzdCJdLCJzb3VyY2VSb290IjoiIn0=