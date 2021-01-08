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

    for (var i = 0; i < imageData.length; i++) {
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
        ImageSorting(item.src);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlL1Bob3RvTGlzdC5qcyJdLCJuYW1lcyI6WyJJbWFnZUxpc3QiLCJpbWFnZXMiLCJvblJhdGVQb3N0Iiwib3RoZXJVc2VyIiwiZGVsZXRlUGhvdG8iLCJsaWtlQWN0aW9uIiwic2hhcmVBY3Rpb24iLCJvblVwZGF0ZVRpbWVsaW5lIiwiYXV0aCIsInVzZVN0YXRlIiwicGhvdG9JbmRleCIsInNldFBob3RvSW5kZXgiLCJpbWFnZURhdGEiLCJzZXRJbWFnZURhdGEiLCJ1c2VNb2RhbCIsIm9wZW4iLCJoaWRlTW9kYWwiLCJzaG93TW9kYWwiLCJpIiwiSW1hZ2VTb3J0aW5nIiwiYWN0aXZlSW1hZ2VJZCIsImNhcm91c2VsRGF0YSIsImZpcnN0RGF0YSIsInNlY29uZERhdGEiLCJsZW5ndGgiLCJzcmMiLCJzbGljZSIsInB1c2giLCJjbGFzc25hbWVzIiwic3R5bGVzIiwicGhvdG9zIiwic2VjdGlvbnNfY29udGVudCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIm1lbnUiLCJpZCIsImZvbnRTaXplIiwicGhvdG8iLCJwb3NpdGlvbiIsIm1hcmdpbkJvdHRvbSIsImJsb2JfdG4iLCJ3aWR0aCIsImhlaWdodCIsImVkaXRXcmFwcGVyIiwiY29sb3IiLCJkaXNwbGF5IiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FTVjtBQUFBOztBQUFBLE1BUk5DLE1BUU0sUUFSTkEsTUFRTTtBQUFBLE1BUE5DLFVBT00sUUFQTkEsVUFPTTtBQUFBLE1BTk5DLFNBTU0sUUFOTkEsU0FNTTtBQUFBLE1BTE5DLFdBS00sUUFMTkEsV0FLTTtBQUFBLE1BSk5DLFVBSU0sUUFKTkEsVUFJTTtBQUFBLE1BSE5DLFdBR00sUUFITkEsV0FH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L3BhZ2VzL3Byb2ZpbGUuNTcyZDQ5NzI2MmVhNjQ3MmE5OTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7IHVzZU1vZGFsIH0gZnJvbSAncmVhY3QtbW9kYWwtaG9vayc7XHJcbmltcG9ydCBQaG90b3NNb2RhbCBmcm9tICcuL1Bob3Rvc01vZGFsJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy9waG90b3NfbW9kYWwubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyBSb3csIENvbCwgRHJvcGRvd24sIE1lbnUgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgQ2FtZXJhT3V0bGluZWQsIEVkaXRGaWxsZWQsIERvd25PdXRsaW5lZCwgRGVsZXRlT3V0bGluZWQgIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyBQaG90b3NQcm92aWRlciB9ICBmcm9tICdjb250YWluZXJzL1Bob3Rvcy9zdG9yYWdlL1Bob3RvQ29udGV4dCc7XHJcblxyXG5jb25zdCBJbWFnZUxpc3QgPSAoeyBcclxuICBpbWFnZXMsIFxyXG4gIG9uUmF0ZVBvc3QsIFxyXG4gIG90aGVyVXNlciwgXHJcbiAgZGVsZXRlUGhvdG8sIFxyXG4gIGxpa2VBY3Rpb24sIFxyXG4gIHNoYXJlQWN0aW9uLCBcclxuICBvblVwZGF0ZVRpbWVsaW5lLCBcclxuICBhdXRoXHJcbiAgfSkgPT4ge1xyXG5cclxuICBjb25zdCBbcGhvdG9JbmRleCwgc2V0UGhvdG9JbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbaW1hZ2VEYXRhLCBzZXRJbWFnZURhdGFdID0gdXNlU3RhdGUoaW1hZ2VzKTtcclxuICBjb25zdCBbc2hvd01vZGFsLCBoaWRlTW9kYWxdID0gdXNlTW9kYWwoKHsgaW46IG9wZW4gfSkgPT4gKFxyXG4gICAgPFBob3Rvc1Byb3ZpZGVyPlxyXG4gICAgICA8UGhvdG9zTW9kYWxcclxuICAgICAgICB0aXRsZT1cIlBob3RvIGRldGFpbFwiXHJcbiAgICAgICAgc2hvd01vZGFsPXtvcGVufVxyXG4gICAgICAgIG9uQ2xvc2U9e2hpZGVNb2RhbH1cclxuICAgICAgICBkYXRhPXtpbWFnZURhdGF9XHJcbiAgICAgICAgb25SYXRlUG9zdD17b25SYXRlUG9zdH1cclxuICAgICAgICBwaG90b0luZGV4PXtwaG90b0luZGV4fVxyXG4gICAgICAgIHByb2ZpbGVQaG90bz17dHJ1ZX1cclxuICAgICAgICBsaWtlQWN0aW9uPXtsaWtlQWN0aW9ufVxyXG4gICAgICAgIHNoYXJlQWN0aW9uPXtzaGFyZUFjdGlvbn1cclxuICAgICAgICBvblVwZGF0ZVRpbWVsaW5lPXtvblVwZGF0ZVRpbWVsaW5lfVxyXG4gICAgICAgIGF1dGg9e2F1dGh9XHJcbiAgICAgIC8+XHJcbiAgICA8L1Bob3Rvc1Byb3ZpZGVyPlxyXG4gICksIFtpbWFnZURhdGFdKTtcclxuXHJcbiAgdmFyIGk9MTtcclxuXHJcbiAgY29uc3QgSW1hZ2VTb3J0aW5nID0gKGFjdGl2ZUltYWdlSWQpID0+IHtcclxuICAgIGxldCBjYXJvdXNlbERhdGEgPSBbXTtcclxuICAgIGxldCBmaXJzdERhdGEgPSBbXTtcclxuICAgIGxldCBzZWNvbmREYXRhID0gW107XHJcblxyXG4gICAgZm9yKHZhciBpPTA7IGk8aW1hZ2VEYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmKGltYWdlRGF0YVtpXS5zcmMgPT09IGFjdGl2ZUltYWdlSWQpIHtcclxuICAgICAgICBmaXJzdERhdGEgPSBpbWFnZURhdGEuc2xpY2UoaSwgaW1hZ2VEYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgc2Vjb25kRGF0YS5wdXNoKGltYWdlRGF0YVtpXSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNhcm91c2VsRGF0YSA9IFsuLi5maXJzdERhdGEsIC4uLnNlY29uZERhdGFdO1xyXG4gICAgc2V0SW1hZ2VEYXRhKGNhcm91c2VsRGF0YSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLnBob3Rvcywgc3R5bGVzLnNlY3Rpb25zX2NvbnRlbnQpfT5cclxuICAgICAge2ltYWdlcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7IFxyXG4gICAgICAgIGNvbnN0IG1lbnUgPSAoXHJcbiAgICAgICAgICA8TWVudT5cclxuICAgICAgICAgICAgPE1lbnUuSXRlbSBvbkNsaWNrPXsoKSA9PiBkZWxldGVQaG90byhpdGVtLmlkKX0+XHJcbiAgICAgICAgICAgICAgPERlbGV0ZU91dGxpbmVkIHN0eWxlPXt7IGZvbnRTaXplOiAyMCB9fS8+IDxzcGFuPkRlbGV0ZSBQaG90bzwvc3Bhbj5cclxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5waG90b30ga2V5PXtpbmRleH0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIG1hcmdpbkJvdHRvbTogMjB9fT5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8ke2l0ZW0uYmxvYl90bn1gfSBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScgfX0gXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHNldFBob3RvSW5kZXgoaW5kZXgpOyBzaG93TW9kYWwoKTsgSW1hZ2VTb3J0aW5nKGl0ZW0uc3JjKSB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgeyFvdGhlclVzZXI/XHJcbiAgICAgICAgICAgICAgPERyb3Bkb3duIG92ZXJsYXk9e21lbnV9IHRyaWdnZXI9e1snY2xpY2snXX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVkaXRXcmFwcGVyfT5cclxuICAgICAgICAgICAgICAgICAgPEVkaXRGaWxsZWQgc3R5bGU9e3sgXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDRcclxuICAgICAgICAgICAgICAgICAgfX0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgOm51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VMaXN0Il0sInNvdXJjZVJvb3QiOiIifQ==